import Header from '../components/Header'
import RunwayStripe from '../components/RunwayStripe'
import FooterQuote from '../components/FooterQuote'
import PageWrapper from '../components/PageWrapper'

const Home = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center text-center pb-32 overflow-hidden bg-white text-black dark:bg-[#0c0c0f] dark:text-white transition-colors duration-300">
      <PageWrapper>
        {/* Plane animation */}
        <div id="logo-container" className="absolute top-[30%] left-0 w-full h-[70px] z-50 pointer-events-none">
          <img
            src="/plane.svg"
            alt="Flying Plane"
            className="plane-flyby fly-loop"
          />
        </div>

        {/* === Responsive Video Above Title === */}
        <div className="mt-8 sm:mt-10 mx-auto w-full max-w-[90vw] sm:max-w-md aspect-w-14 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
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

        {/* === Responsive Image Below Title === */}
        <div className="mt-6 sm:mt-8 mx-auto w-full max-w-[90vw] sm:max-w-lg rounded-lg overflow-hidden shadow-md">
          <img
            src="/RenderedImage.JPEG"
            alt="PilotBoyD suited up"
            className="w-full h-auto object-cover object-center"
          />
        </div>

        {/* === Call to Action === */}
        <div className="mt-12 sm:mt-16 px-4">
          <p className="max-w-sm sm:max-w-md mx-auto text-base sm:text-lg text-zinc-700 dark:text-zinc-400 mb-8 sm:mb-10">
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