import SignatureQuote2 from '../components/SignatureQuote2'
import PageWrapper from '../components/PageWrapper'

const AboutMe = () => {
  return (
    <PageWrapper>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-12 pb-[6.5rem] text-center text-black dark:text-zinc-300">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-black dark:text-white">
          About the Creator
        </h1>

        {/* Portrait */}
        <img
          src="/pilotboyd.jpeg"
          alt="Creator portrait"
          className="w-40 h-40 sm:w-40 sm:h-40 rounded-full object-cover shadow-md mb-6"
        />

        {/* Paragraph */}
        <p className="max-w-xl text-base sm:text-lg leading-relaxed text-zinc-700 dark:text-zinc-400 mb-10">
          Welcome to the PilotShow where it’s always <span className="text-[#0837F5] font-semibold">#pi✈️otseason</span>. I started this website as a place for all the love I’ve done and seen to be in one location. From YouTube to making purchases, everything has become one click away. Remember — “You gotta get to it, instead of going thru it” — it’s a way of life. So from me, PilotBoyD: salute and enjoy. 
          <br />
          <span className="text-[#0837F5] font-semibold">#pi✈️otseason</span>
        </p>

        {/* Signature */}
        <SignatureQuote2 />
      </section>
    </PageWrapper>
  )
}

export default AboutMe;
