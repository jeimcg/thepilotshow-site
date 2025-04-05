const MusicCard = ({ title, cover, link, platform, description }) => {
    return (
      <div className="bg-zinc-800 rounded-lg shadow-md p-4 text-left text-white hover:scale-[1.02] transition">
        <img
          src={cover}
          alt={`${title} cover`}
          className="w-full h-80 object-cover rounded mb-4"
        />
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-zinc-400 mb-3">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-400 hover:underline"
        >
          Listen on {platform}
        </a>
      </div>
    );
  };
  
  export default MusicCard;