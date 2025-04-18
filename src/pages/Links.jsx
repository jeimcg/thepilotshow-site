import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'

const AccordionSection = ({ title, children, isOpen, onClick }) => (
  <div className="w-full max-w-xs space-y-2 mb-6">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center font-semibold bg-zinc-800 text-white px-4 py-2 rounded hover:bg-zinc-700 transition"
    >
      {title}
      <span>{isOpen ? '−' : '+'}</span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="mt-2 space-y-2">{children}</div>
    </div>
  </div>
)

const Links = () => {
  const [openSection, setOpenSection] = useState('music')

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section))
  }

  return (
    <PageWrapper>
      <section className="min-h-[100dvh] w-full bg-white dark:bg-[#0c0c0f] text-black dark:text-white transition-colors duration-300 px-6 pt-10 pb-24 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8">Links</h2>

        {/* Music & Content */}
        <AccordionSection
          title="Music & Content"
          isOpen={openSection === 'music'}
          onClick={() => toggleSection('music')}
        >
          <a
            href="https://www.youtube.com/user/Queensfinestds22"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-red-600 text-white font-medium text-sm uppercase rounded shadow hover:bg-red-700 transition px-6 py-3"
          >
            YouTube Channel
          </a>
          <a
            href="https://soundcloud.com/pilotboyd"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-orange-500 text-white font-medium text-sm uppercase rounded shadow hover:bg-orange-600 transition px-6 py-3"
          >
            SoundCloud
          </a>
        </AccordionSection>

        {/* Marketplaces */}
        <AccordionSection
          title="Marketplaces"
          isOpen={openSection === 'market'}
          onClick={() => toggleSection('market')}
        >
          <a
            href="https://offerup.co/W0eOlKggjSb"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#00a87e] text-white font-medium text-sm uppercase rounded shadow hover:bg-green-700 transition px-6 py-3"
          >
            OfferUp
          </a>
          <a
            href="https://share.collx.app/user2664859"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#0086ff] text-white font-medium text-sm uppercase rounded shadow hover:bg-blue-700 transition px-6 py-3"
          >
            CollX
          </a>
          <a
            href="https://www.ebay.com/usr/dom3342"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 text-white font-medium text-sm uppercase rounded shadow hover:bg-blue-700 transition px-6 py-3"
          >
            eBay Store
          </a>
          <a
            href="https://unboxed.app.link/sHtLV0fu4Pb"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#1B1F33] text-white font-medium text-sm uppercase rounded shadow hover:bg-zinc-700 transition px-6 py-3"
          >
            UnBoxed
          </a>
        </AccordionSection>

        {/* Social */}
        <AccordionSection
          title="Social"
          isOpen={openSection === 'social'}
          onClick={() => toggleSection('social')}
        >
          <a
            href="https://www.bigo.tv/user/949871167"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-blue-400 to-white text-white font-medium text-sm uppercase rounded shadow hover:brightness-110 transition px-6 py-3"
          >
            BIGO (@PilotBoyD)
          </a>
          <a
            href="https://www.instagram.com/itsbigoctoberbabyuknodat"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-medium text-sm uppercase rounded shadow hover:brightness-110 transition px-6 py-3"
          >
            Instagram (@itsbigoctoberbabyuknodat)
          </a>
          <a
            href="https://www.instagram.com/____theviews_____"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-l from-yellow-400 via-pink-500 to-purple-600 text-white font-medium text-sm uppercase rounded shadow hover:brightness-110 transition px-6 py-3"
          >
            Instagram (@__theviews____)
          </a>
          <a
            href="https://www.instagram.com/___ftl_"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-medium text-sm uppercase rounded shadow hover:brightness-110 transition px-6 py-3"
          >
            Instagram (@___ftl_)
          </a>
        </AccordionSection>
      </section>
    </PageWrapper>
  )
}

export default Links;