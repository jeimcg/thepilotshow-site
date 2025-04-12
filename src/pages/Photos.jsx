import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase' // ✅ Make sure this path is correct

const Photos = () => {
  const [mediaItems, setMediaItems] = useState([])
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'photos'))
        const items = querySnapshot.docs.map((doc) => doc.data())
        setMediaItems(items)
      } catch (err) {
        console.error('Error fetching photos:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPhotos()
  }, [])

  return (
    <section className="min-h-screen bg-black text-white relative">
      <h2 className="text-center text-2xl font-bold mt-8">Photo/Vids</h2>

      {loading ? (
        <p className="text-center mt-4">Loading media...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
          {mediaItems.map((item, i) => (
            <div
              key={i}
              className="relative rounded-md overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelected(item)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.alt}
                  className="object-cover w-full h-48"
                />
              ) : (
                <video
                  src={item.url}
                  className="object-cover w-full h-48"
                  muted
                  autoPlay
                  loop
                />
              )}
              <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                {item.type === 'image' ? '📷 Photo' : '🎥 Video'}
              </div>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setSelected(null)}
        >
          {selected.type === 'image' ? (
            <img
              src={selected.url}
              alt={selected.alt}
              className="max-w-full max-h-full rounded shadow-lg"
            />
          ) : (
            <video
              src={selected.url}
              controls
              autoPlay
              className="max-w-full max-h-full rounded shadow-lg"
            />
          )}
        </div>
      )}
    </section>
  )
}

export default Photos;