import { useState, useEffect } from 'react'
import Header from '../components/Header'
import RunwayStripe from '../components/RunwayStripe'
import FooterQuote from '../components/FooterQuote'
import PageWrapper from '../components/PageWrapper'
import '../animations/plane.css'

const Home = () => {
  const [showPlane, setShowPlane] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPlane(false)
    }, 8000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center text-center pb-20 overflow-hidden bg-white text-black dark:bg-[#0c0c0f] dark:text-white transition-colors duration-300">
      <PageWrapper>
        {/* Plane animation */}
        <div id="logo-container" className="relative mb-4 h-[60px] w-[60px]">
          <img
            src="/plane.svg"
            alt="Flying Plane"
            className={`plane-flythrough ${showPlane ? 'fly-across' : 'opacity-0'} transition-opacity duration-700`}
          />
        </div>

        <Header />

        {/* Main content */}
        <div className="mt-8 px-6">
          <p className="strong text-zinc-700 dark:text-zinc-400 text-base max-w-md mb-10">
            Support The Pilot.
          </p>

          <button
            onClick={() => {
              navigator.clipboard.writeText('@pilotboyd')
              alert('Chime handle copied! Paste it into your app to donate.')
            }}
            className="btn-chime"
          >
            Give Love with $Chime
          </button>
        </div>

        <FooterQuote />
      </PageWrapper>
    </section>
  )
}

export default Home;