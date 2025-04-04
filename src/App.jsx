import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Splash from './pages/Splash'
import Home from './pages/Home'
import Links from './pages/Links'
import Music from './pages/Music'
import NavbarMain from './components/NavbarMain'

function App() {
  const location = useLocation()
  const splashShown = sessionStorage.getItem('splashShown')
  const showNavbar = location.pathname !== '/'

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <main>
        <Routes>
          {!splashShown && <Route path="/" element={<Splash />} />}
          {splashShown && <Route path="/" element={<Navigate to="/home" />} />}
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
