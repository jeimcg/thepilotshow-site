import SignatureQuote2 from '../components/SignatureQuote2'
import PageWrapper from '../components/PageWrapper'

const AboutMe = () => {
  return (
    <PageWrapper>
      <section className="min-h-screen flex flex-col px-6 pt-12 pb-[6.5rem] text-center text-black dark:text-zinc-300">
        {/* pb-[6.5rem] = space for nav (h-16) + buffer */}

        <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">
          About the Creator
        </h1>

        <img
          src="/pilotboyd.jpeg"
          alt="Creator portrait"
          className="w-50 h-50 sm:w-40 sm:h-40 rounded-full object-cover mx-auto shadow-md"
        />

        <p className="max-w-xl mt-4 mb-8 leading-relaxed text-base text-zinc-700 dark:text-zinc-400">
          Welcome to the PilotShow where it’s always #pi✈️otseason. I started this website as a place for all the love I’ve done and seen to be in one location. From YouTube to making purchases, everything has become one click away. Remember — “You gotta get to it, instead of going thru it” — it’s a way of life. So from me, PilotBoyD: salute and enjoy. #pi✈️otseason
        </p>
        <SignatureQuote2 />
      </section>
    </PageWrapper>
  )
}

export default AboutMe;