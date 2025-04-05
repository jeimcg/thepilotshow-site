import { useEffect } from 'react'
import '../animations/plane.css'
import planeImg from '/plane.svg'

const Header = () => {
  useEffect(() => {
    const flyPlane = () => {
      const plane = document.getElementById('plane')
      if (plane) {
        plane.classList.add('fly-straight')
        setTimeout(() => {
          plane.classList.remove('fly-straight')
        }, 2500) // match animation duration
      }
    }

    flyPlane() // initial run
    const interval = setInterval(flyPlane, 6000) // repeat every 60s
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="min-h-[calc(100vh-4rem)] px-6 pt-10 pb-20 text-center flex flex-col items-center justify-center relative">
      <div className="relative inline-block" id="logo-container">
        <h1 className="text-4xl font-bold text-white tracking-tight mb-2 z-10 relative">
          The Pilot Show
        </h1>
        <img
          src={planeImg}
          alt="Plane"
          id="plane"
          className="plane-flyby"
        />
      </div>
    </header>
  )
}

export default Header;
