import { useEffect, useState } from 'react'
import dakotaSig from '../assets/pilotboydsigv2.svg'

export default function SignatureQuote2() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`mt-4 ml text-center transition-opacity duration-1000 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <p className="text-sm mb-2 leading-snug">
        "The Love Is Where the Light Is.”
      </p>
      <img
        src={dakotaSig}
        alt="Dakota's signature"
        className="fill-[#0837F5] h-20 mx-auto opacity-70 float-right mr-6"
      />
    </div>
  )
}
