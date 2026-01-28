"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function PiVisualization() {
  const [radius, setRadius] = useState(100)
  const [isAnimating, setIsAnimating] = useState(false)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (!isAnimating) return

    const interval = setInterval(() => {
      setRotation((r) => (r + 1) % 360)
    }, 20)

    return () => clearInterval(interval)
  }, [isAnimating])

  const circumference = 2 * Math.PI * radius
  const diameter = 2 * radius
  const piValue = circumference / diameter

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-2">Understanding π</h3>
      <p className="text-sm text-muted-foreground mb-4">
        π = Circumference / Diameter ≈ 3.14159...
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Circle visualization */}
        <div className="flex-1 flex justify-center">
          <svg width="250" height="250" className="bg-black/20 rounded-lg">
            {/* Grid */}
            {[50, 100, 150, 200].map((pos) => (
              <g key={pos}>
                <line x1={pos} y1="0" x2={pos} y2="250" stroke="currentColor" strokeOpacity={0.1} />
                <line x1="0" y1={pos} x2="250" y2={pos} stroke="currentColor" strokeOpacity={0.1} />
              </g>
            ))}

            {/* Circle */}
            <circle
              cx="125"
              cy="125"
              r={radius}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
            />

            {/* Radius line */}
            <line
              x1="125"
              y1="125"
              x2={125 + radius}
              y2="125"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              strokeDasharray="5 5"
            />

            {/* Radius label */}
            <text x={125 + radius/2} y="115" textAnchor="middle" fontSize="12" fill="currentColor">
              r = {radius}
            </text>

            {/* Diameter line */}
            <line
              x1={125 - radius}
              y1="125"
              x2={125 + radius}
              y2="125"
              stroke="orange"
              strokeWidth={2}
            />

            {/* Diameter label */}
            <text x="125" y="145" textAnchor="middle" fontSize="12" fill="orange">
              d = {diameter}
            </text>

            {/* Rolling circle animation */}
            <g transform={`translate(${125 + (rotation * Math.PI * radius / 180)}, 125)`}>
              <circle r="8" fill="red" />
            </g>

            {/* Circumference arc indicator */}
            <path
              d={`M ${125 + radius} 125 A ${radius} ${radius} 0 0 1 ${125 + radius * Math.cos(rotation * Math.PI / 180)} ${125 + radius * Math.sin(rotation * Math.PI / 180)}`}
              fill="none"
              stroke="green"
              strokeWidth={3}
            />
          </svg>
        </div>

        {/* Controls and info */}
        <div className="w-full md:w-48 space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Radius: {radius}
            </label>
            <input
              type="range"
              min="50"
              max="110"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>

          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="w-full btn-primary"
          >
            {isAnimating ? "Pause" : "Animate Rolling"}
          </button>

          <div className="p-4 bg-primary/10 rounded-lg space-y-2">
            <p className="text-sm">
              <strong>Radius:</strong> {radius}
            </p>
            <p className="text-sm">
              <strong>Diameter:</strong> {diameter}
            </p>
            <p className="text-sm">
              <strong>Circumference:</strong> {circumference.toFixed(2)}
            </p>
            <p className="text-sm font-mono">
              <strong>π = C/d =</strong> {piValue.toFixed(5)}
            </p>
          </div>

          <div className="p-4 bg-math-green/20 rounded-lg border border-math-green/50">
            <p className="text-sm text-math-green font-semibold">
              π ≈ 3.14159265359...
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Irrational and transcendental
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
