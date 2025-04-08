import { useNavigate } from 'react-router-dom'
import SignatureQuote from '../components/SignatureQuote'

const Splash = () => {
  const navigate = useNavigate()

  const handleEnter = () => {
    // Play click sound
    new Audio('./sfx/whooshv3.mp3').play()

    // Slight delay before takeoff sound + navigation
    setTimeout(() => {
      new Audio('./sfx/whooshv3.mp3').play()
      sessionStorage.setItem('splashShown', 'true')
      navigate('/home')
    }, 50) // delay in ms
  }

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center">
      <button
  onClick={handleEnter}
  className="text-lg tracking-widest uppercase text-[#0837F5] border-2 border-white bg-transparent px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_2px_white] hover:brightness-75"
>
  Enter
</button>
      <SignatureQuote />
    </div>
  )
}

export default Splash;
