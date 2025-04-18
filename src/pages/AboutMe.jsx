import SignatureQuote2 from '../components/SignatureQuote2'
import PageWrapper from '../components/PageWrapper'

const AboutMe = () => {
  return (
    <PageWrapper>
      <section className="min-h-[calc(100vh-4rem)] px-6 py-12 text-center text-black dark:text-zinc-300 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">About the Creator</h1>

        <img
          src="/pilotboyd.jpeg"
          alt="Creator portrait"
          className="w-36 h-36 rounded-full object-cover mb-6 border border-white shadow-lg"
        />

        <p className="max-w-xl mb-10 leading-relaxed text-base text-zinc-700 dark:text-zinc-400">
          Welcome to the PilotShow where it’s always #pi✈️otseason. I started this website as a place for all the love I’ve done and seen to be in one location. From YouTube to making purchases, everything has become one click away. Remember — “You gotta get to it, instead of going thru it” — it’s a way of life. So from me, PilotBoyD: salute and enjoy. #pi✈️otseason
        </p>

        <SignatureQuote2 />
      </section>
    </PageWrapper>
  )
}

export default AboutMe;