import MusicCard from '../components/MusicCard';

const Music = () => {
  const tracks = [
    {
      title: 'Track One',
      cover: '/images/track1.jpg', // or use a URL for now
      link: 'https://soundcloud.com/yourtrack',
      platform: 'SoundCloud',
      description: 'deez ballz.',
    },
    {
      title: 'EP name',
      cover: '/images/epcover.jpg',
      link: 'https://open.spotify.com/album/youralbum',
      platform: 'Spotify',
      description: 'deez nutz',
    },
    // Add more tracks here
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        Releases & Tracks
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {tracks.map((track) => (
          <MusicCard key={track.title} {...track} />
        ))}
      </div>
    </section>
  );
};

export default Music;
  