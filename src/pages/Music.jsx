import MusicCard from '../components/MusicCard';

const Music = () => {
  const tracks = [
    {
      title: 'Joanna (Ft. Kole)',
      cover: '/images/track1.jpg', // or use a URL for now
      link: 'https://on.soundcloud.com/zgZKJQWj8Evx4fdg8',
      platform: 'SoundCloud',
      description: '',
    },
    {
      title: 'Love Ft. (Rock Ali)',
      cover: '/images/track1.jpg', // or use a URL for now
      link: 'https://on.soundcloud.com/fzVwebrQZWdSL41N7',
      platform: 'SoundCloud',
      description: '',
    },
    {
      title: 'Purple Rain Freestyle',
      cover: '/images/track1.jpg', // or use a URL for now
      link: 'https://on.soundcloud.com/Wk3gqS6yyVoWo2vc6',
      platform: 'SoundCloud',
      description: '',
    },
    {
      title: 'Mixtape 3: 2016 The Summer Mixtape',
      cover: '/images/epcover.jpg',
      link: 'https://on.soundcloud.com/yvWpTQE8ZFe3YuD77',
      platform: 'SoundCloud',
      description: '',
    },
    {
      title: 'FTL Tape 2017-2018',
      cover: '/images/epcover.jpg',
      link: 'https://on.soundcloud.com/4vX1Y361ztydA5LL7',
      platform: 'SoundCloud',
      description: '',
    },
    // Add more tracks here
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        Releases & Tracks
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {tracks.map((track) => (
          <MusicCard key={track.title} {...track} />
        ))}
      </div>
    </section>
  );
};

export default Music;
  