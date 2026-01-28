"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, Maximize, Film } from "lucide-react"

interface ManimVideoPlayerProps {
  src: string
  title?: string
  description?: string
}

export function ManimVideoPlayer({ src, title, description }: ManimVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [videoExists, setVideoExists] = useState<boolean | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check if video exists
    const checkVideo = async () => {
      try {
        const response = await fetch(src, { method: 'HEAD' })
        setVideoExists(response.ok)
      } catch {
        setVideoExists(false)
      }
    }
    checkVideo()
  }, [src])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(progress)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const time = (Number(e.target.value) / 100) * videoRef.current.duration
      videoRef.current.currentTime = time
      setProgress(Number(e.target.value))
    }
  }

  if (videoExists === false) {
    return (
      <div className="bg-card/50 rounded-xl overflow-hidden">
        <div className="relative aspect-video bg-muted flex flex-col items-center justify-center p-8 text-center">
          <Film className="w-16 h-16 text-muted-foreground mb-4" />
          <h4 className="text-lg font-semibold mb-2">{title || "Animation"}</h4>
          <p className="text-sm text-muted-foreground max-w-md">
            {description || "This Manim animation is coming soon! The visualization is being rendered."}
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            Animation: {src.split('/').pop()?.replace('.webm', '')}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card/50 rounded-xl overflow-hidden">
      <div className="relative aspect-video bg-black">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full"
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          onError={() => setVideoExists(false)}
          muted={isMuted}
          loop
        />

        {/* Play overlay */}
        {!isPlaying && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/50
                       hover:bg-black/40 transition-colors"
          >
            <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center
                            hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </motion.button>
        )}

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent
                        p-4 opacity-0 hover:opacity-100 transition-opacity">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="w-full mb-2 accent-primary"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
            <button className="p-2 rounded-full hover:bg-white/20 transition-colors">
              <Maximize className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {(title || description) && (
        <div className="p-4">
          {title && <h4 className="font-semibold mb-1">{title}</h4>}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}
    </div>
  )
}
