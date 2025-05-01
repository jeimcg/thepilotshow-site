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
import ScrollToTop from './components/ScrollToTop'
import { PlayerProvider } from './context/PlayerContext'
import PlayerBar from './components/PlayerBar'

function App() {
  const { isDarkMode } = useDarkMode()
  const location = useLocation()
  const splashShown = sessionStorage.getItem('splashShown')
  const showNavbar = location.pathname !== '/'

  return (
    <PlayerProvider>
      <div className={`${isDarkMode ? 'dark' : ''}`}>
        <div className="min-h-screen bg-white text-black dark:bg-[#0c0c0f] dark:text-white pb-20 overflow-x-hidden relative">
          
          {/* Top Bar (Logo + Toggle + PlayerBar) */}
          {location.pathname !== '/' && (
          <header className="w-full flex flex-col px-4 pt-4">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-2xl font-heading tracking-tight text-[#0837F5] dark:text-white">
                THE PILOT SHOW
              </h1>
              <DarkLightToggle />
            </div>
            <PlayerBar/>
          </header>
        )}

          {/* Scroll to Top button */}
          {showNavbar && (
            <div className="fixed top-4 right-4 z-50">
              <ScrollToTop />
            </div>
          )}

          {/* Routes */}
          <Routes>
            {!splashShown && <Route path="/" element={<Splash />} />}
            {splashShown && <Route path="/" element={<Navigate to="/home" />} />}
            <Route path="/home" element={<Home />} />
            <Route path="/links" element={<Links />} />
            <Route path="/music releases" element={<Music />} />
            <Route path="/photos + videos" element={<Photos />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>

          {/* Bottom Navbar */}
          {showNavbar && <NavbarMain />}
        </div>
      </div>
    </PlayerProvider>
  )
}

export default App
