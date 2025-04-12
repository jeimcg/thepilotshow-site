// src/pages/Dashboard.jsx
import { useState } from 'react'

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [type, setType] = useState('image') // 'image', 'video', or 'soundcloud'
  const [url, setUrl] = useState('')
  const [alt, setAlt] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ type, url, alt, selectedFile })
    // 🔜 In future: upload file or save link to Firebase
  }

  return (
    <section className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">📸 Dashboard CMS</h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 bg-zinc-800 rounded"
        >
          <option value="image">📷 Image</option>
          <option value="video">🎥 Video</option>
          <option value="soundcloud">🎵 SoundCloud</option>
        </select>

        {type === 'soundcloud' ? (
          <input
            type="text"
            placeholder="SoundCloud URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-2 bg-zinc-800 rounded"
          />
        ) : (
          <input
            type="file"
            accept={type === 'image' ? 'image/*' : 'video/*'}
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="w-full p-2 bg-zinc-800 rounded"
          />
        )}

        <input
          type="text"
          placeholder="Description or Alt Text"
          value={alt}
          onChange={(e) => setAlt(e.target.value)}
          className="w-full p-2 bg-zinc-800 rounded"
        />

        <button
          type="submit"
          className="w-full bg-[#0837F5] hover:bg-[#1958fa] text-white p-2 rounded font-semibold"
        >
          Upload / Save
        </button>
      </form>
    </section>
  )
}

export default Dashboard;