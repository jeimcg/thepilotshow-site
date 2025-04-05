import PageWrapper from '../components/PageWrapper.jsx'

const Links = () => {
  return (
    <PageWrapper>
    <section className="p-6 flex flex-col items-center text-center space-y-10">
      <h2 className="text-2xl font-bold text-white">Links</h2>
      {/* MUSIC & CONTENT */}
      <div className="w-full max-w-xs space-y-3">
        <p className="uppercase text-xs tracking-widest text-zinc-400">Music & Content</p>
        <a
          href="https://www.youtube.com/user/Queensfinestds22"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-red-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg transition duration-150 ease-in-out px-6 py-3"
        >
          YouTube Channel
        </a>
        <a
          href="https://soundcloud.com/pilotboyd"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-orange-500 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg transition duration-150 ease-in-out px-6 py-3"
        >
          SoundCloud
        </a>
      </div>

      {/* MARKETPLACES */}
      <div className="w-full max-w-xs space-y-3">
        <p className="uppercase text-xs tracking-widest text-zinc-400">Marketplaces</p>
        <a
          href="https://offerup.co/W0eOlKggjSb"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#00a87e] text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg transition duration-150 ease-in-out px-6 py-3"
        >
          OfferUp
        </a>
        <a
          href="https://share.collx.app/user2664859"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#0086ff] text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out px-6 py-3"
        >
          CollX
        </a>
        <a
          href="https://www.ebay.com/usr/dom3342"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out px-6 py-3"
        >
          eBay Store
        </a>
        <a
          href="https://unboxed.app.link/sHtLV0fu4Pb"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#1B1F33] text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-zinc-700 hover:shadow-lg transition duration-150 ease-in-out px-6 py-3"
        >
          UnBoxed
        </a>
      </div>

      {/* SOCIAL */}
      <div className="w-full max-w-xs space-y-3">
        <p className="uppercase text-xs tracking-widest text-zinc-400">Social</p>
        <a
          href="https://www.instagram.com/itsbigoctoberbabyuknodat/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:brightness-110 hover:shadow-lg transition duration-150 ease-in-out px-6 py-3"
        >
          Instagram (@itsbigoctoberbabyuknodat)
        </a>
        <a
          href="https://www.instagram.com/____theviews_____"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-l from-yellow-400 via-pink-500 to-purple-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:brightness-110 hover:shadow-lg transition duration-150 ease-in-out px-6 py-3"
        >
          Instagram (@__theviews____)
        </a>
        <a
          href="https://www.instagram.com/___ftl_/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:brightness-110 hover:shadow-lg transition duration-150 ease-in-out px-6 py-3"
        >
          Instagram (@___ftl_)
        </a>
      </div>
    </section>
    </PageWrapper>
  )
}

export default Links;
