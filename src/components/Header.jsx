import { useEffect } from 'react'
import '../animations/plane.css'

const Header = () => {
  useEffect(() => {
    const flyPlane = () => {
      const plane = document.getElementById('plane')
      if (plane) {
        plane.classList.add('fly-straight')
        setTimeout(() => {
          plane.classList.remove('fly-straight')
        }, 2500)
      }
    }

    flyPlane()
    const interval = setInterval(flyPlane, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="min-h-[calc(100vh-4rem)] px-6 pt-10 pb-20 text-center flex flex-col items-center justify-center relative">
      <div className="relative inline-block" id="logo-container">
        <h1 className="text-4xl font-bold text-[#0837F5] tracking-tight mb-2 z-10 relative">
          The Pilot <span className="inline-block">✈️eason</span>
        </h1>
      </div>
    </header>
  )
}

export default Header;
