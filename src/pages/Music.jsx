import MusicCard from '../components/MusicCard'

const Music = () => {
  const tracks = [
    {
      title: 'Joanna (Ft. Kole)',
      cover: 'https://i1.sndcdn.com/artworks-000235940690-mqeh3z-t1080x1080.jpg',
      link: 'https://soundcloud.com/dakota-homealone/joanna?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      platform: 'SoundCloud',
    },
    {
      title: 'Love (Ft. Rock Ali)',
      cover: 'https://i1.sndcdn.com/artworks-000122180514-s7q3dm-t1080x1080.jpg',
      link: "https://soundcloud.com/pilotboys/pilot-d-ft-rock-ali-love?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      platform: 'SoundCloud',
    },
    {
      title: 'Purple Rain Freestyle',
      cover: 'https://i1.sndcdn.com/artworks-000205348954-p6b8ya-t1080x1080.jpg',
      link: "https://soundcloud.com/dakota-homealone/purple-rain-freestyle?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      platform: 'SoundCloud',
    },
    {
      title: 'Mixtape 3: 2016 The Summer Mixtape',
      cover: 'https://i1.sndcdn.com/artworks-000168996979-z4n1hb-t1080x1080.jpg',
      link: "https://soundcloud.com/dakota-homealone/sets/the-summer?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      platform: 'SoundCloud',
    },
    {
      title: 'FTL Tape 2017-2018',
      cover: 'https://i1.sndcdn.com/artworks-000281722526-5a9yx2-t1080x1080.jpg',
      link: "https://soundcloud.com/ftl-tunez/sets/ftl-volume-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      platform: 'SoundCloud',
    },
  ]

  return (
    <section className="p-6 bg-white dark:bg-[#0c0c0f] text-white">
      <h2 className="text-2xl font-bold text-center mb-6">Releases</h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {tracks.map((track) => (
          <MusicCard key={track.title} {...track} />
        ))}
      </div>
    </section>
  )
}

export default Music;
