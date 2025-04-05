import { useState } from 'react'
import Header from '../components/Header'
import FooterQuote from '../components/FooterQuote'
import PageWrapper from '../components/PageWrapper.jsx'

const Home = () => {
  const [loading, setLoading] = useState(false)

  const handlePayment = async (amount) => {
    setLoading(true)
    try {
      const res = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      })

      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        console.error('Checkout failed:', data.error)
        setLoading(false)
      }
    } catch (err) {
      console.error('Error:', err)
      setLoading(false)
    }
  }

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center text-center pb-20">
      <PageWrapper>
        <Header />

      {/* Content */}
      <div className="mt-8 px-6">
        <p className="text-zinc-400 text-base max-w-md mb-6">
          Support The Pilot.
        </p>

        <button
          onClick={() => handlePayment(5)} // ← you can change this to 5, 20, etc.
          className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-zinc-200 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Redirecting...' : 'Support with $5'}
        </button>
      </div>

      {/* Footer Quote + Signature + Credit */}
      <FooterQuote />
    </PageWrapper >
    </section>
  )
}

export default Home; 