// src/App.jsx
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useDarkMode } from './components/DarkLightToggle'

// Pages
import Splash from './pages/Splash'
import Home from './pages/Home'
import Links from './pages/Links'
import Music from './pages/Music'
import Photos from './pages/Photos'
import AboutMe from './pages/AboutMe'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'

// Components
import NavbarMain from './components/NavbarMain'
import DarkLightToggle from './components/DarkLightToggle'

function App() {
  const { isDarkMode } = useDarkMode()
  const location = useLocation()
  const splashShown = sessionStorage.getItem('splashShown')
  const showNavbar = location.pathname !== '/'

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white text-black dark:bg-[#0c0c0f] dark:text-white pb-20 overflow-x-hidden relative">

        {/* Toggle button (only on pages besides splash) */}
        {showNavbar && (
          <div className="fixed top-4 left-4 z-50">
            <DarkLightToggle />
          </div>
        )}

        <Routes>
          {!splashShown && <Route path="/" element={<Splash />} />}
          {splashShown && <Route path="/" element={<Navigate to="/home" />} />}
          <Route path="/home" element={<Home />} />
          <Route path="/links" element={<Links />} />
          <Route path="/music" element={<Music />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        {showNavbar && <NavbarMain />}
      </div>
    </div>
  )
}

export default App;