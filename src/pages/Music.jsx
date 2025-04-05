import MusicCard from '../components/MusicCard';

const Music = () => {
  const tracks = [
    {
      title: 'Joanna (Ft. Kole)',
      cover: '	https://i1.sndcdn.com/artworks-000235940690-mqeh3z-t1080x1080.jpg', // using url for img
      link: 'https://on.soundcloud.com/zgZKJQWj8Evx4fdg8',
      platform: 'SoundCloud',
      description: '',
    },
    {
      title: 'Love (Ft. Rock Ali)',
      cover: 'https://i1.sndcdn.com/artworks-000122180514-s7q3dm-t1080x1080.jpg',
      link: 'https://on.soundcloud.com/fzVwebrQZWdSL41N7',
      platform: 'SoundCloud',
      description: '',
    },
    {
      title: 'Purple Rain Freestyle',
      cover: 'https://i1.sndcdn.com/artworks-000205348954-p6b8ya-t1080x1080.jpg', 
      link: 'https://on.soundcloud.com/Wk3gqS6yyVoWo2vc6',
      platform: 'SoundCloud',
      description: '',
    },
    {
      title: 'Mixtape 3: 2016 The Summer Mixtape',
      cover: 'https://i1.sndcdn.com/artworks-000168996979-z4n1hb-t1080x1080.jpg',
      link: 'https://on.soundcloud.com/yvWpTQE8ZFe3YuD77',
      platform: 'SoundCloud',
      description: '',
    },
    {
      title: 'FTL Tape 2017-2018',
      cover: 'https://i1.sndcdn.com/artworks-000281722526-5a9yx2-t1080x1080.jpg',
      link: 'https://on.soundcloud.com/4vX1Y361ztydA5LL7',
      platform: 'SoundCloud',
      description: '',
    },
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
  