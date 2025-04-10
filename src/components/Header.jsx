import { useEffect } from 'react'
import '../animations/plane.css'

const Header = () => {
  useEffect(() => {
    const flyPlane = () => {
      const plane = document.getElementById('plane-flyby')
      if (plane) {
        plane.classList.add('fly-straight')
        setTimeout(() => {
          plane.classList.remove('fly-straight')
        }, 2500) // match animation duration
      }
    }

    flyPlane() // initial animation
    const interval = setInterval(flyPlane, 6000) // repeat every 6s
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="min-h-[calc(100vh-4rem)] px-6 pt-10 pb-20 text-center flex flex-col items-center justify-center relative">
      <div className="relative inline-block" id="logo-container">
        {/* ✈️ Flyby emoji plane */}
        <span id="plane-flyby" className="plane-flyby text-2xl">✈️</span>

        {/* Title with static ✈️ in place of 'S' */}
        <h1 className="text-4xl font-bold text-[#0837F5] tracking-tight mb-2 z-10 relative">
          The Pilot <span className="inline-block">✈️how</span>
        </h1>
      </div>
    </header>
  )
}

export default Header;