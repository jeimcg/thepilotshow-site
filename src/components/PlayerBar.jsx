// src/components/PlayerBar.jsx
import { usePlayer } from '../context/PlayerContext'
import { useEffect, useRef, useState } from 'react'
import { Play, Pause, SkipForward, SkipBack, ChevronUp, ChevronDown } from 'lucide-react'

const PlayerBar = () => {
  const { currentTrack, setWidget, playNextTrack, trackQueue } = usePlayer()
  const iframeRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [expanded, setExpanded] = useState(true)

  useEffect(() => {
    if (!iframeRef.current) return

    const widget = window.SC.Widget(iframeRef.current)
    setWidget(widget)

    widget.bind(window.SC.Widget.Events.READY, () => {
      console.log('SoundCloud widget ready.')
    })

    widget.bind(window.SC.Widget.Events.FINISH, () => {
      playNextTrack()
    })

    widget.bind(window.SC.Widget.Events.PLAY, () => setIsPlaying(true))
    widget.bind(window.SC.Widget.Events.PAUSE, () => setIsPlaying(false))

    const interval = setInterval(() => {
      widget.getPosition((position) => {
        widget.getDuration((duration) => {
          if (duration > 0) {
            setProgress((position / duration) * 100)
          }
        })
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [iframeRef])

  const togglePlayPause = () => {
    const widget = window.SC.Widget(iframeRef.current)
    widget.isPaused((paused) => {
      if (paused) {
        widget.play()
        setIsPlaying(true)
      } else {
        widget.pause()
        setIsPlaying(false)
      }
    })
  }

  const seekForward = () => {
    const widget = window.SC.Widget(iframeRef.current)
    widget.getPosition((position) => {
      widget.seekTo(position + 15000)
    })
  }

  const seekBackward = () => {
    const widget = window.SC.Widget(iframeRef.current)
    widget.getPosition((position) => {
      widget.seekTo(Math.max(0, position - 15000))
    })
  }

  if (!currentTrack) return null

  return (
    <div className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out
      ${expanded ? 'bottom-16 py-3 px-4 bg-zinc-900 shadow-xl' : 'bottom-16 py-2 px-3 bg-zinc-800/80 shadow-sm'}
      text-white rounded-t-lg sm:rounded-none sm:shadow-none`}
    >
      {/* Collapse toggle (mobile only) */}
      <div className="flex justify-end sm:hidden mb-1">
        <button onClick={() => setExpanded(!expanded)} className="text-white transition-transform duration-300">
          <ChevronDown
            size={18}
            className={`transform transition-transform duration-300 ${expanded ? 'rotate-0' : 'rotate-180'}`}
          />
        </button>
      </div>

      {expanded || window.innerWidth >= 1180 ? (
        <>
          {/* Track Info */}
          <div className="mb-10 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-semibold truncate">{currentTrack.title}</span>
              <span className="text-xs text-zinc-400">{currentTrack.artist || 'Now Playing'}</span>
              {trackQueue.length > 0 && (
                <div className="text-xs mt-2 text-zinc-400">
                  <strong>Up Next:</strong> {trackQueue[0]?.title}
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 ml-4">
              <button onClick={seekBackward} className="p-1">
                <SkipBack size={18} />
              </button>
              <button onClick={togglePlayPause} className="p-1">
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button onClick={seekForward} className="p-1">
                <SkipForward size={18} />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-1 w-full bg-zinc-700 rounded overflow-hidden">
            <div
              className="h-full bg-green-400 rounded"
              style={{ width: `${progress}%`, transition: 'width 0.3s ease' }}
            />
          </div>
        </>
      ) : (
        <div className="text-xs text-center text-zinc-300 truncate">
          🎶 {currentTrack.title}
        </div>
      )}

      {/* Hidden SoundCloud Iframe */}
      <iframe
        ref={iframeRef}
        width="0"
        height="0"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        title="SoundCloud Player"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
          currentTrack.link
        )}&color=%230837F5&auto_play=true&show_user=false&hide_related=true&show_comments=false`}
        className="hidden"
      />
    </div>
  )
}

export default PlayerBar;