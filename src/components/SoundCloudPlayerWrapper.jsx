// src/components/SoundCloudPlayerWrapper.jsx
import { useEffect, useState, useRef } from 'react'

const SoundCloudPlayerWrapper = ({ track }) => {
  const [ready, setReady] = useState(false)
  const iframeRef = useRef(null)

  useEffect(() => {
    const checkWidgetReady = setInterval(() => {
      if (window.SC && iframeRef.current && window.SC.Widget) {
        setReady(true)
        clearInterval(checkWidgetReady)
      }
    }, 500)

    return () => clearInterval(checkWidgetReady)
  }, [])

  if (!track) return null

  return (
    <div className="flex flex-col items-center">
      {!ready && (
        <div className="text-sm text-zinc-400 mb-2 animate-pulse">
          Loading Player...
        </div>
      )}
      <iframe
        ref={iframeRef}
        title={`SoundCloud Player - ${track.title}`}
        width="100%"
        height="120"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
          track.link
        )}&color=%230837F5&auto_play=true&show_user=false&hide_related=true&show_comments=false`}
        className={`rounded transition-opacity duration-500 ${ready ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}

export default SoundCloudPlayerWrapper;