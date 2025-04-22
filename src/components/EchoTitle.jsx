import { useEffect, useRef, useState } from 'react'

const EchoTitle = () => {
  const [expanded, setExpanded] = useState(false)
  const titleRef = useRef(null)
  const cooldownRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (cooldownRef.current) return // skip if cooling down

        if (entry.isIntersecting) {
          setExpanded(true)
        } else {
          setExpanded(false)
        }

        // Start cooldown
        cooldownRef.current = true
        setTimeout(() => {
          cooldownRef.current = false
        }, 1500) // 1.5 second cooldown
      },
      { threshold: 0.3 }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const lines = expanded ? 6 : 1

  return (
    <div
      ref={titleRef}
      className={`relative w-full transition-all duration-700 ease-in-out overflow-hidden 
        ${expanded ? 'h-[14rem] sm:h-[20rem]' : 'h-[4rem]'}`}
    >
      <div className="flex flex-col items-center justify-center gap-1">
        {Array.from({ length: lines }).map((_, i) => (
          <h1
            key={i}
            style={{
              transition: 'opacity 0.5s ease',
              opacity: expanded || i === 0 ? 1 - i * 0.1 : 0,
            }}
            className="text-2xl sm:text-4xl font-heading tracking-tight text-[#0837F5] dark:text-white"
          >
            THE PILOT SHOW
          </h1>
        ))}
      </div>
    </div>
  )
}

export default EchoTitle;