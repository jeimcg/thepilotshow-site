// src/pages/About.jsx
import SignatureQuote from '../components/SignatureQuote'
import PageWrapper from '../components/PageWrapper'

const AboutMe = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] px-6 py-12 text-center text-zinc-300 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6 text-white">About the Creator</h1>

      {/* About Paragraph */}
      <p className="max-w-xl mb-10 leading-relaxed text-base text-zinc-400">
        {/* You or he can edit this later */}
        This site was built with love, intention, and creativity. It represents
        a space to grow, share, and connect through art and personal experience.
      </p>

      {/* Signature */}
      <SignatureQuote />
    </section>
  )
}

export default AboutMe;
