const Links = () => {
    return (
      <section className="p-6 flex flex-col items-center text-center space-y-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-white">Links</h2>
  
        {/* Links as Tailwind Elements buttons */}
        <div className="w-full max-w-xs space-y-4">
          <a
            href="https://ebay.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out px-6 py-3"
          >
            eBay Store
          </a>
          <a
            href="https://soundcloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-orange-500 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg transition duration-150 ease-in-out px-6 py-3"
          >
            SoundCloud
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-pink-500 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-pink-600 hover:shadow-lg transition duration-150 ease-in-out px-6 py-3"
          >
            Instagram
          </a>
        </div>
      </section>
    );
  };
  
  export default Links;  