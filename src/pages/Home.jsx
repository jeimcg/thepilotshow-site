import { useState, useEffect } from 'react'
import Header from '../components/Header'
import RunWayStripe from '../components/RunWayStripe'
import FooterQuote from '../components/FooterQuote'
import PageWrapper from '../components/PageWrapper'
import '../animations/plane.css'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [showPlane, setShowPlane] = useState(true)

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

  useEffect(() => {
    const timer = setTimeout(() => setShowPlane(false), 8000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center text-center pb-20 overflow-hidden">
      {/* 🔥 Runway Stripe */}
      <RunWayStripe />

      <PageWrapper>
        {/* Plane animation overlay */}
        {showPlane && (
          <div id="logo-container" className="relative mb-4">
            <img
              src="/plane.svg"
              alt="Flying Plane"
              className="plane-flythrough fly-across"
            />
          </div>
        )}

        <Header />

        {/* Content */}
        <div className="mt-8 px-6">
          <p className="text-zinc-400 text-base max-w-md mb-6">
            Support The Pilot.
          </p>

          <button
            onClick={() => handlePayment(5)}
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-zinc-200 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Redirecting...' : 'Support with $5'}
          </button>
        </div>

        <FooterQuote />
      </PageWrapper>
    </section>
  )
}

export default Home;
