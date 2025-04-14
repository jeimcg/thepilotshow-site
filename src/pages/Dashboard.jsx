import { useState, useEffect } from 'react'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth, db, storage } from '../firebase'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage'
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const [files, setFiles] = useState([])
  const [type, setType] = useState('image')
  const [alt, setAlt] = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState({})
  const [mediaItems, setMediaItems] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        navigate('/login')
      }
    })
    return () => unsubscribe()
  }, [navigate])

  const fetchMediaItems = async () => {
    const q = query(collection(db, 'photos'))
    const snapshot = await getDocs(q)
    const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    setMediaItems(items)
  }

  useEffect(() => {
    if (user) fetchMediaItems()
  }, [user])

  const handleLogout = async () => {
    await signOut(auth)
    navigate('/login')
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!files.length) return alert('Select at least one file')
    setUploading(true)

    const uploads = files.map(async (file, idx) => {
      const path = `${type}s/${Date.now()}-${file.name}`
      const storageRef = ref(storage, path)
      await uploadBytes(storageRef, file)

      const url = await getDownloadURL(storageRef)
      const docRef = await addDoc(collection(db, 'photos'), {
        type,
        url,
        alt,
        storagePath: path,
        timestamp: new Date(),
      })

      setUploadProgress((prev) => ({
        ...prev,
        [docRef.id]: `${file.name} ✅`,
      }))
    })

    try {
      await Promise.all(uploads)
      setFiles([])
      setAlt('')
      fetchMediaItems()
    } catch (err) {
      console.error('Upload error:', err)
      alert('❌ Upload failed')
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id, storagePath) => {
    try {
      await deleteDoc(doc(db, 'photos', id))
      await deleteObject(ref(storage, storagePath))
      fetchMediaItems()
    } catch (err) {
      console.error('Error deleting media:', err)
    }
  }

  const handleBulkDelete = async () => {
    const confirm = window.confirm('Delete all media? This cannot be undone.')
    if (!confirm) return

    try {
      const snapshot = await getDocs(collection(db, 'photos'))
      const deletions = snapshot.docs.map(async (docSnap) => {
        const { storagePath } = docSnap.data()
        await deleteDoc(doc(db, 'photos', docSnap.id))
        await deleteObject(ref(storage, storagePath))
      })

      await Promise.all(deletions)
      fetchMediaItems()
    } catch (err) {
      console.error('Bulk delete failed:', err)
    }
  }

  if (!user) return null

  return (
    <section className="min-h-screen bg-black text-white p-6">
      <div className="flex justify-between items-center max-w-2xl mx-auto mb-6">
        <h1 className="text-2xl font-bold">Dashboard CMS</h1>
        <button
          onClick={handleLogout}
          className="text-sm text-red-400 underline hover:text-red-200"
        >
          Sign Out
        </button>
      </div>

      <p className="text-center text-sm text-zinc-400 mb-6">
        Logged in as: <span className="text-white">{user.email}</span>
      </p>

      <form onSubmit={handleUpload} className="max-w-xl mx-auto space-y-4 mb-10">
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
          multiple
          onChange={(e) => setFiles(Array.from(e.target.files))}
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
          disabled={uploading}
          className="w-full bg-[#0837F5] hover:bg-[#1958fa] text-white p-2 rounded font-semibold disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : 'Upload / Save'}
        </button>

        {/* Progress messages */}
        {Object.values(uploadProgress).map((msg, i) => (
          <p key={i} className="text-xs text-green-400">{msg}</p>
        ))}
      </form>

      {/* Media List */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mediaItems.map((item) => (
          <div
            key={item.id}
            className="relative rounded overflow-hidden bg-zinc-800 shadow-lg"
          >
            {item.type === 'image' ? (
              <img src={item.url} alt={item.alt} className="w-full h-48 object-cover" />
            ) : (
              <video src={item.url} controls className="w-full h-48 object-cover" />
            )}
            <button
              onClick={() => handleDelete(item.id, item.storagePath)}
              className="absolute top-2 right-2 text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {mediaItems.length > 0 && (
        <div className="mt-10 text-center">
          <button
            onClick={handleBulkDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded"
          >
            Delete All Media
          </button>
        </div>
      )}
    </section>
  )
}

export default Dashboard;