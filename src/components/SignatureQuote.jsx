import { useEffect, useState } from 'react'
import dakotaSig from '../assets/dakotas-sig.svg' // 👈 import the SVG

export default function SignatureQuote() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`absolute bottom-8 right-8 text-left max-w-xs transition-opacity duration-1000 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <p className="text-sm text-zinc-400 mb-2 leading-snug">
        “Where the light is, is where you should be.”
      </p>
      <img
        src={dakotaSig}
        alt="Dakota's signature"
        className="h-24 opacity-70 dark:invert"
      />
    </div>
  )
}

