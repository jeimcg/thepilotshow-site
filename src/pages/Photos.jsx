import { useState } from 'react'

const mediaItems = [
  { type: 'image', src: 'https://source.unsplash.com/random/800x600?sig=1', alt: 'Placeholder image 1' },
  { type: 'image', src: 'https://source.unsplash.com/random/800x600?sig=2', alt: 'Placeholder image 2' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Sample video 1' },
  { type: 'image', src: 'https://source.unsplash.com/random/800x600?sig=3', alt: 'Placeholder image 3' },
  { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4', alt: 'Sample video 2' },
  { type: 'image', src: 'https://source.unsplash.com/random/800x600?sig=4', alt: 'Placeholder image 4' }
]

const Photos = () => {
  const [selected, setSelected] = useState(null)

  return (
    <section className="min-h-screen bg-black text-white relative">
      <h2 className="text-center text-2xl font-bold mt-8">Photo & Video Gallery</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {mediaItems.map((item, i) => (
          <div
            key={i}
            className="relative rounded-md overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelected(item)}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover w-full h-48"
              />
            ) : (
              <video
                src={item.src}
                className="object-cover w-full h-48"
                muted
                autoPlay
                loop
              />
            )}
            {/* Media type icon */}
            <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
              {item.type === 'image' ? '📷 Photo' : '🎥 Video'}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Viewer */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setSelected(null)}
        >
          {selected.type === 'image' ? (
            <img
              src={selected.src}
              alt={selected.alt}
              className="max-w-full max-h-full rounded shadow-lg"
            />
          ) : (
            <video
              src={selected.src}
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