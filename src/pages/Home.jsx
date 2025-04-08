import { useState, useEffect } from 'react'
import Header from '../components/Header'
import RunwayStripe from '../components/RunwayStripe'
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
      <RunwayStripe />

      <PageWrapper>
        {/* Plane animation overlay container (always rendered) */}
        <div id="logo-container" className="relative mb-4 h-[60px] w-[60px]">
          <img
            src="/plane.svg"
            alt="Flying Plane"
            className={`plane-flythrough ${showPlane ? 'fly-across' : 'opacity-0'}`}
          />
        </div>

        <Header />

        {/* Content */}
        <div className="mt-8 px-6">
          <p className="text-zinc-400 text-base max-w-md mb-6">
            Support The Pilot.
          </p>

          <button
          onClick={() => {
            navigator.clipboard.writeText('@pilotboyd')
            alert('Chime handle copied! Paste it into your app to donate.')
          }}
          className="text-[#0837F5] border-2 border-white bg-transparent px-6 py-3 rounded-full hover:bg-white/10 hover:shadow-blue-400/30 transition"
        >
          Donate with Chime
        </button>
        </div>

        <FooterQuote />
      </PageWrapper>
    </section>
  )
}

export default Home
