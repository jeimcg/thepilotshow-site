// src/components/DarkLightToggle.jsx
import { useEffect, useState, createContext, useContext } from 'react'

// Create Context
const DarkModeContext = createContext()

// Context Provider Component
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

// Hook to use in components
export const useDarkMode = () => useContext(DarkModeContext)

// Toggle Component
const DarkLightToggle = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode()

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="px-3 py-1 border rounded text-sm font-semibold bg-white text-black dark:bg-black dark:text-white shadow-sm"
    >
      {isDarkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}

export default DarkLightToggle;