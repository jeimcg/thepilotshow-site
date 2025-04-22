const MusicCard = ({ title, cover, link, platform, description }) => {
  const isSoundCloud = platform.toLowerCase() === 'soundcloud'
  const isPlaylist = isSoundCloud && link.includes('/sets/')

  return (
    <div className="bg-zinc-800 rounded-lg shadow-md p-4 text-left text-white hover:scale-[1.02] transition">
      {/* Cover Image */}
      <img
        src={cover}
        alt={`${title} cover`}
        className="w-full h-80 object-cover rounded mb-4"
      />

      {/* Title + Description */}
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-zinc-400 mb-3">{description}</p>

      {/* Link (for all platforms) */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-blue-400 hover:underline"
      >
        Listen on {platform}
      </a>

      {/* Embedded SoundCloud Player */}
      {isSoundCloud && (
        <div className="mt-4">
          <iframe
            width="100%"
            height={isPlaylist ? '300' : '120'}
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title={`SoundCloud Player - ${title}`}
            src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
              link
            )}&color=%230837F5&auto_play=false&show_user=false&hide_related=true&show_comments=false`}
            className="rounded"
          ></iframe>
        </div>
      )}
    </div>
  )
}

export default MusicCard;