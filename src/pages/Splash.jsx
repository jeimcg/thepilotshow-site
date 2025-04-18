import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore'
import { db } from '../firebase'
import SignatureQuote from '../components/SignatureQuote'

const Splash = () => {
  const navigate = useNavigate()
  const [clickCount, setClickCount] = useState(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const fetchClickCount = async () => {
      try {
        const docRef = doc(db, 'siteMetrics', 'enterClicks')
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setClickCount(docSnap.data().count)
        }
      } catch (err) {
        console.error('Failed to fetch click count:', err)
      }
    }

    fetchClickCount()
  }, [])

  const handleEnter = async () => {
    try {
      const docRef = doc(db, 'siteMetrics', 'enterClicks')
      await updateDoc(docRef, {
        count: increment(1),
      })
    } catch (err) {
      console.error('Failed to increment click count:', err)
    }

    new Audio('./sfx/whooshv3.mp3').play()

    setTimeout(() => {
      new Audio('./sfx/whooshv3.mp3').play()
      sessionStorage.setItem('splashShown', 'true')
      navigate('/home')
    }, 50)
  }

  return (
    <div
      className="relative min-h-screen bg-[#0c0c0f] flex flex-col items-center justify-center"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <button
        onClick={handleEnter}
        className="text-lg tracking-widest uppercase text-[#0837F5] border-2 border-white bg-transparent px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_2px_white] hover:brightness-75"
      >
        <h6>Enter</h6>
      </button>

      {/* ✨ Flight count with looping sheen only while hovering */}
      {clickCount !== null && (
  <p
    className={`mt-4 text-sm text-white relative overflow-hidden transition-opacity duration-800 ${
      hovering ? 'opacity-100' : 'opacity-0'
    }`}
  >
    Flights Logged: {clickCount}
    <span className={`${hovering ? 'sheen-effect' : ''}`} />
  </p>
)}

      <SignatureQuote />
    </div>
  )
}

export default Splash;