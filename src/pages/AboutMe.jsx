import SignatureQuote2 from '../components/SignatureQuote2'
import PageWrapper from '../components/PageWrapper'

const AboutMe = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] px-6 py-12 text-center text-zinc-300 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6 text-white">About the Creator</h1>

      {/* 📸 Creator Photo */}
      <img
        src="/pilotboyd.jpeg" // ⬅️ replace with the actual path
        alt="PilotBoyD"
        className="w-40 h-40 object-cover  shadow-lg mb-6"
      />

      {/* 📝 About Paragraph */}
      <p className="max-w-xl mb-10 leading-relaxed text-base text-zinc-400">
        Welcome to the PilotShow where it’s always #pi✈️otseason I started this website as a place for all the love I’ve done and seen to be in one location. From YouTube to making purchases has become one click away. Remember “You gotta get to it, instead of going thru it” it’s a way of life. So from me PilotBoyD, salute and enjoy. #pi✈️otseason
      </p>

      {/* ✍️ Signature */}
      <SignatureQuote2 />
    </section>
  )
}

export default AboutMe;
