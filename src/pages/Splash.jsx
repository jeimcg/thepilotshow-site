import { useNavigate } from 'react-router-dom'
import SignatureQuote from '../components/SignatureQuote'

const Splash = () => {
  const navigate = useNavigate()

  const handleEnter = () => {
    // Play click sound
    new Audio('./sfx/whooshv3.mp3').play()

    // Slight delay before takeoff sound + navigation
    setTimeout(() => {
      new Audio('./sfx/whooshv3.mp3').play()
      sessionStorage.setItem('splashShown', 'true')
      navigate('/home')
    }, 50) // delay in ms
  }

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <button
        onClick={handleEnter}
        className="text-lg tracking-widest uppercase bg-white text-black px-8 py-4 rounded-lg shadow-lg hover:scale-105 hover:bg-zinc-200 transition"
      >
        Enter
      </button>
      <SignatureQuote />
    </div>
  )
}

export default Splash;
