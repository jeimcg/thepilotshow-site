import { useState, useEffect } from 'react'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth, storage, db } from '../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [type, setType] = useState('image')
  const [url, setUrl] = useState('')
  const [alt, setAlt] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        navigate('/login') // redirect if not logged in
      }
    })

    return () => unsubscribe()
  }, [navigate])

  const handleLogout = async () => {
    await signOut(auth)
    setUser(null)
    navigate('/login')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      let mediaUrl = url

      if (selectedFile) {
        const storageRef = ref(
          storage,
          `${type}s/${Date.now()}-${selectedFile.name}`
        )
        await uploadBytes(storageRef, selectedFile)
        mediaUrl = await getDownloadURL(storageRef)
      }

      const mediaDoc = {
        type,
        url: mediaUrl,
        alt,
        timestamp: new Date(),
      }

      await addDoc(collection(db, 'photos'), mediaDoc)
      alert('✅ Upload successful!')
      // reset form
      setSelectedFile(null)
      setUrl('')
      setAlt('')
    } catch (error) {
      console.error('Upload failed:', error)
      alert('❌ Upload failed. Check console for details.')
    }

    setLoading(false)
  }

  if (!user) return null // prevent flash of dashboard before redirect

  return (
    <section className="min-h-screen bg-black text-white p-6">
      <div className="flex justify-between items-center mb-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold">📸 Dashboard CMS</h1>
        <button
          onClick={handleLogout}
          className="text-sm text-red-400 underline hover:text-red-200"
        >
          Sign Out
        </button>
      </div>

      <p className="text-center text-sm text-zinc-400 mb-4">
        Logged in as: <span className="text-white">{user.email}</span>
      </p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 bg-zinc-800 rounded"
        >
          <option value="image">📷 Image</option>
          <option value="video">🎥 Video</option>
        </select>

        <input
          type="file"
          accept={type === 'image' ? 'image/*' : 'video/*'}
          onChange={(e) => setSelectedFile(e.target.files[0])}
          className="w-full p-2 bg-zinc-800 rounded"
        />

        <input
          type="text"
          placeholder="Description or Alt Text"
          value={alt}
          onChange={(e) => setAlt(e.target.value)}
          className="w-full p-2 bg-zinc-800 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0837F5] hover:bg-[#1958fa] text-white p-2 rounded font-semibold disabled:opacity-50"
        >
          {loading ? 'Uploading...' : 'Upload / Save'}
        </button>
      </form>
    </section>
  )
}

export default Dashboard;