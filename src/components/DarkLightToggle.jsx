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

// Hook to use the dark mode context
export const useDarkMode = () => useContext(DarkModeContext)

// Toggle Button Component
const DarkLightToggle = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode()

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`relative w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 
        ${isDarkMode ? 'bg-indigo-600' : 'bg-yellow-300'}`}
    >
      <span
        className={`absolute left-1 transition-transform duration-300 transform rounded-full w-6 h-6 bg-white shadow-md
          ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}
      ></span>
      <span className="sr-only">Toggle Dark Mode</span>
    </button>
  )
}

export default DarkLightToggle;