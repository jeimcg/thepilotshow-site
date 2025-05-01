// src/context/PlayerContext.jsx
import { createContext, useContext, useState, useRef } from 'react'
import toast from 'react-hot-toast'

// Create Context
const PlayerContext = createContext()

// Hook
export const usePlayer = () => useContext(PlayerContext)

// Provider
export const PlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null)
  const [trackQueue, setTrackQueue] = useState([])
  const widgetRef = useRef(null)

  const setWidget = (widget) => {
    widgetRef.current = widget
  }

  const playTrack = (track, queue = []) => {
    toast.loading('Loading New Track... 🎶', { duration: 1000 })

    setCurrentTrack(track)
    setTrackQueue(queue)

    if (widgetRef.current && track.link) {
      widgetRef.current.load(`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.link)}`, {
        auto_play: true,
        show_user: false,
        show_comments: false,
        hide_related: true,
        color: '#0837F5',
      })

      widgetRef.current.bind(window.SC.Widget.Events.READY, () => {
        widgetRef.current.play()
      })
    }
  }

  const playNextTrack = () => {
    if (trackQueue.length > 0) {
      const [nextTrack, ...rest] = trackQueue
      setCurrentTrack(nextTrack)
      setTrackQueue(rest)

      if (widgetRef.current && nextTrack.link) {
        widgetRef.current.load(`https://w.soundcloud.com/player/?url=${encodeURIComponent(nextTrack.link)}`, {
          auto_play: true,
          show_user: false,
          show_comments: false,
          hide_related: true,
          color: '#0837F5',
        })

        widgetRef.current.bind(window.SC.Widget.Events.READY, () => {
          widgetRef.current.play()
        })
      }
    } else {
      setCurrentTrack(null)
    }
  }

  return (
    <PlayerContext.Provider value={{ currentTrack, 
    trackQueue, 
    playTrack, 
    playNextTrack, 
    setWidget, }}>
      {children}
    </PlayerContext.Provider>
  )
}
