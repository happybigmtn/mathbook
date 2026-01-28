"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function EulersFormulaDemo() {
  const [theta, setTheta] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!isAnimating) return

    const interval = setInterval(() => {
      setTheta((t) => (t + 0.02) % (2 * Math.PI))
    }, 50)

    return () => clearInterval(interval)
  }, [isAnimating])

  const radius = 100
  const x = Math.cos(theta) * radius
  const y = Math.sin(theta) * radius

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-2">Euler's Formula</h3>
      <p className="text-sm text-muted-foreground mb-4">
        e^(iθ) = cos(θ) + i·sin(θ). Watch how e^(iθ) traces the unit circle.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Unit Circle */}
        <div className="flex-1 flex justify-center">
          <svg width="250" height="250" className="bg-black/20 rounded-lg">
            {/* Grid */}
            {[0.5, 1].map((r) => (
              <circle
                key={r}
                cx="125"
                cy="125"
                r={r * radius}
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.1}
              />
            ))}

            {/* Axes */}
            <line x1="125" y1="25" x2="125" y2="225" stroke="currentColor" strokeOpacity={0.3} />
            <line x1="25" y1="125" x2="225" y2="125" stroke="currentColor" strokeOpacity={0.3} />

            {/* Unit circle */}
            <circle
              cx="125"
              cy="125"
              r={radius}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
            />

            {/* Radius line */}
            <line
              x1="125"
              y1="125"
              x2={125 + x}
              y2={125 - y}
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              strokeOpacity={0.5}
            />

            {/* Point */}
            <circle
              cx={125 + x}
              cy={125 - y}
              r={6}
              fill="hsl(var(--primary))"
            />

            {/* Angle arc */}
            <path
              d={`M 145 125 A 20 20 0 ${theta > Math.PI ? 1 : 0} 0 ${125 + 20 * Math.cos(theta)} ${125 - 20 * Math.sin(theta)}`}
              fill="none"
              stroke="orange"
              strokeWidth={2}
            />

            {/* Labels */}
            <text x="225" y="140" fontSize="12" fill="currentColor">1</text>
            <text x="110" y="30" fontSize="12" fill="currentColor">i</text>
            <text x="30" y="140" fontSize="12" fill="currentColor">-1</text>
            <text x="110" y="220" fontSize="12" fill="currentColor">-i</text>
          </svg>
        </div>

        {/* Controls */}
        <div className="w-full md:w-48 space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              θ = {theta.toFixed(2)} rad = {(theta * 180 / Math.PI).toFixed(0)}°
            </label>
            <input
              type="range"
              min="0"
              max={2 * Math.PI}
              step="0.01"
              value={theta}
              onChange={(e) => setTheta(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>

          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="w-full btn-primary"
          >
            {isAnimating ? "Pause" : "Animate"}
          </button>

          <div className="p-4 bg-primary/10 rounded-lg space-y-2">
            <p className="text-sm font-mono">
              e^(iθ) = {Math.cos(theta).toFixed(3)} + {Math.sin(theta).toFixed(3)}i
            </p>
            <p className="text-sm text-muted-foreground">
              cos(θ) = {Math.cos(theta).toFixed(3)}
            </p>
            <p className="text-sm text-muted-foreground">
              sin(θ) = {Math.sin(theta).toFixed(3)}
            </p>
          </div>

          {Math.abs(theta - Math.PI) < 0.1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 bg-math-green/20 rounded-lg border border-math-green/50"
            >
              <p className="text-sm font-semibold text-math-green">
                e^(iπ) = -1
              </p>
              <p className="text-sm">
                e^(iπ) + 1 = 0
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Euler&apos;s Identity!
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
