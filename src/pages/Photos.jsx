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
  
  const Photos = () => (
    <section className="min-h-screen bg-black text-white">
      <h2 className="text-center text-2xl font-bold mt-8">Photo Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {photos.map((photo, i) => (
          <img
            key={i}
            src={photo.src}
            alt={photo.alt}
            className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  )
  
  export default Photos;
  