import { useEffect, useState, createContext, useContext } from 'react'

// Create context
const DarkModeContext = createContext()

// Provider to wrap your App in main.jsx or App.jsx
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
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

// Custom hook
export const useDarkMode = () => useContext(DarkModeContext)

// Toggle component
const DarkLightToggle = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode()

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-300 
        ${isDarkMode ? 'bg-indigo-600 shadow-[0_0_8px_rgba(8,55,245,0.4)]' : 'bg-zinc-300'}
        border border-zinc-200 dark:border-zinc-700`}
      aria-label="Toggle Dark Mode"
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300
          ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}
      ></span>
      <span className="sr-only">Toggle Dark Mode</span>
    </button>
  )
}

export default DarkLightToggle;