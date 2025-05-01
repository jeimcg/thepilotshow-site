// src/components/MusicCard.jsx
import { usePlayer } from '../context/PlayerContext'

const MusicCard = ({ title, cover, link, platform, description }) => {
  const { playTrack } = usePlayer()

  return (
    <div
      onClick={() => playTrack({ title, link })}
      className="bg-zinc-800 rounded-xl shadow-lg p-4 text-left text-white hover:scale-105 active:scale-100 transition-transform duration-300 cursor-pointer"
    >
      {/* Cover Image */}
      <img
        src={cover}
        alt={`${title} cover`}
        className="max-w-full max-h-full object-cover rounded-lg mb-4 shadow-md"
      />

      {/* Title */}
      <h3 className="text-lg font-bold leading-snug line-clamp-2 text-white">{title}</h3>

      {/* Optional Description */}
      {description && (
        <p className="text-sm text-zinc-400 mt-1 mb-2 leading-tight">{description}</p>
      )}

      {/* Platform Info */}
      <p className="text-xs font-medium text-blue-400">{platform}</p>
    </div>
  )
}

export default MusicCard;
