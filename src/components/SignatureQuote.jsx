import { useEffect, useState } from 'react'

export default function SignatureQuote() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`absolute bottom-8 right-6 text-right max-w-xs transition-opacity duration-1000 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <p className="text-sm text-zinc-400 mb-2 leading-snug">
        “You Gotta Get To It, Instead of Getting Thru It.”
      </p>
      <img
        src="/dakotas-sig.svg"
        alt="Dakota's signature"
        className="h-10 opacity-80 dark:invert"
      />
    </div>
  )
}

  