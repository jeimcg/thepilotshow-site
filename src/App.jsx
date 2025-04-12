// functions
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
// pages
import Splash from './pages/Splash'
import Home from './pages/Home'
import Links from './pages/Links'
import Music from './pages/Music'
import Photos from './pages/Photos/'
import AboutMe from './pages/AboutMe'
import Dashboard from './pages/Dashboard'
// components
import NavbarMain from './components/NavbarMain'

function App() {
  const location = useLocation()
  const splashShown = sessionStorage.getItem('splashShown')
  const showNavbar = location.pathname !== '/'

  return (
    <div className="min-h-screen bg-black text-white pb-20 overflow-x-hidden">
      <Routes>
        {!splashShown && <Route path="/" element={<Splash />} />}
        {splashShown && <Route path="/" element={<Navigate to="/home" />} />}
        <Route path="/home" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/music" element={<Music />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {showNavbar && <NavbarMain />}
    </div>
  )
}

export default App;
