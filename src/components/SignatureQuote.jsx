import { useEffect, useState } from 'react'
import dakotaSig from '../assets/dakota-sigv2.svg'

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
      <p className="text-sm mb-2 leading-snug">
        “Everyday is Pilot Season.”
      </p>
      <img
        src={dakotaSig}
        alt="Dakota's signature"
        className="filter-blue h-24 opacity-70 ml-24"
      />
    </div>
  )
}

