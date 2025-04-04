import { Routes, Route, useLocation } from 'react-router-dom'
import Splash from './pages/Splash'
import Home from './pages/Home'
import Links from './pages/Links'
import Music from './pages/Music'
import NavbarMain from './components/NavbarMain'

function App() {
  const location = useLocation()
  const showNavbar = location.pathname !== '/'

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <main>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/links" element={<Links />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </main>

      {showNavbar && <NavbarMain />}
    </div>
  )
}

export default App
