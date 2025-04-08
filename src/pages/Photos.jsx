import { useState } from 'react'

const photos = [
  { src: 'https://source.unsplash.com/random/800x600?sig=1', alt: 'Placeholder image 1' },
  { src: 'https://source.unsplash.com/random/800x600?sig=2', alt: 'Placeholder image 2' },
  { src: 'https://source.unsplash.com/random/800x600?sig=3', alt: 'Placeholder image 3' },
  { src: 'https://source.unsplash.com/random/800x600?sig=4', alt: 'Placeholder image 4' },
  { src: 'https://source.unsplash.com/random/800x600?sig=5', alt: 'Placeholder image 5' },
  { src: 'https://source.unsplash.com/random/800x600?sig=6', alt: 'Placeholder image 6' },
  { src: 'https://source.unsplash.com/random/800x600?sig=7', alt: 'Placeholder image 7' },
  { src: 'https://source.unsplash.com/random/800x600?sig=8', alt: 'Placeholder image 8' }
]

const Photos = () => {
  const [selected, setSelected] = useState(null)

  return (
    <section className="min-h-screen bg-black text-white relative">
      <h2 className="text-center text-2xl font-bold mt-8">Photo Gallery</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {photos.map((photo, i) => (
          <img
            key={i}
            src={photo.src}
            alt={photo.alt}
            onClick={() => setSelected(photo)}
            className="rounded-md shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Modal Overlay */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-w-full max-h-full rounded shadow-lg transition-transform duration-300 scale-100"
          />
        </div>
      )}
    </section>
  )
}

export default Photos;