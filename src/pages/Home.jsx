import Header from '../components/Header'
import RunwayStripe from '../components/RunwayStripe'
import FooterQuote from '../components/FooterQuote'
import PageWrapper from '../components/PageWrapper'

const Home = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center text-center pb-50 overflow-hidden bg-white text-black dark:bg-[#0c0c0f] dark:text-white transition-colors duration-300">
      <PageWrapper>
        {/* Plane animation */}
        <div id="logo-container" className="absolute top-[30%] left-0 w-full h-[70px] z-50 pointer-events-none">
          <img
            src="/plane.svg"
            alt="Flying Plane"
            className="plane-flyby fly-loop"
          />
        </div>

        {/* === Video Above Logo === */}
        <div className="mt-10 w-full max-w-md aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
          <video
            src="/RenderedVideo.MOV"
            className="w-full h-full object-cover object-[0_100%]"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* === Logo & Title === */}
        <Header />

        {/* === Photo Below Logo === */}
        <div className="mt-6 ml-7 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg overflow-hidden shadow-md">
          <img
            src="/RenderedImage.JPEG"
            alt="PilotBoyD suited up"
            className="w-full h-auto object-cover object-center"
          />
        </div>

        {/* Main Call to Action */}
        <div className="mt-16 px-6">
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
            Give Love with Chime
          </button>
        </div>

        <FooterQuote />
      </PageWrapper>
    </section>
  )
}

export default Home;