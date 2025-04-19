import Header from '../components/Header'
import RunwayStripe from '../components/RunwayStripe'
import FooterQuote from '../components/FooterQuote'
import PageWrapper from '../components/PageWrapper'


const Home = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center text-center pb-20 overflow-hidden bg-white text-black dark:bg-[#0c0c0f] dark:text-white transition-colors duration-300">
      <PageWrapper>
        {/* Plane animation (now looping) */}
        <div id="logo-container" className="absolute top-[30%] left-0 w-full h-[70px] z-50 pointer-events-none">
          <img
            src="/plane.svg"
            alt="Flying Plane"
            className="plane-flyby fly-loop"
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
            Give Love with Chime
          </button>
        </div>

        <FooterQuote />
      </PageWrapper>
    </section>
  )
}

export default Home;