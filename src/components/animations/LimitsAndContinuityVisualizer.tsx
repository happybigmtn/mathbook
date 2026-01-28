"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function LimitsAndContinuityVisualizer() {
  const [x, setX] = useState(1)
  const [epsilon, setEpsilon] = useState(0.5)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showDelta, setShowDelta] = useState(true)
  
  // Function: f(x) = x²
  const f = (val: number) => val * val
  const targetX = 2
  const targetY = f(targetX)
  const currentY = f(x)
  
  useEffect(() => {
    if (!isAnimating) return
    
    const interval = setInterval(() => {
      setX((prev) => {
        const diff = targetX - prev
        if (Math.abs(diff) < 0.01) {
          setIsAnimating(false)
          return targetX
        }
        return prev + diff * 0.05
      })
    }, 50)
    
    return () => clearInterval(interval)
  }, [isAnimating])
  
  // Calculate delta based on epsilon for x² at x=2
  // If |x - 2| < delta, then |x² - 4| < epsilon
  // delta = min(1, epsilon/5) is a safe choice
  const delta = Math.min(1, epsilon / 5)
  
  const svgWidth = 400
  const svgHeight = 300
  const padding = 40
  const plotWidth = svgWidth - 2 * padding
  const plotHeight = svgHeight - 2 * padding
  
  // Scale functions
  const scaleX = (val: number) => padding + (val / 4) * plotWidth
  const scaleY = (val: number) => svgHeight - padding - (val / 16) * plotHeight
  
  // Generate parabola points
  const parabolaPoints = []
  for (let i = 0; i <= 40; i++) {
    const px = i * 0.1
    const py = f(px)
    parabolaPoints.push(`${scaleX(px)},${scaleY(py)}`)
  }

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">The ε-δ Definition of a Limit</h3>
        <p className="text-sm text-muted-foreground">
          Explore how we rigorously define limits. Adjust ε (epsilon) to see how close 
          f(x) must be to the limit L, and find the corresponding δ (delta).
        </p>
      </div>

      {/* Function display */}
      <div className="mb-4 p-3 bg-muted/30 rounded-lg">
        <div className="font-mono text-center">
          <span className="text-lg">
            lim<sub>x→2</sub> x² = 4
          </span>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-2">
          We want to show that as x approaches 2, x² approaches 4
        </p>
      </div>

      {/* Visualization */}
      <div className="relative mb-6">
        <svg
          width="100%"
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="bg-muted/20 rounded-lg"
          style={{ maxHeight: "300px" }}
        >
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <line
                x1={scaleX(i)}
                y1={scaleY(0)}
                x2={scaleX(i)}
                y2={scaleY(16)}
                stroke="currentColor"
                strokeOpacity="0.1"
              />
              <line
                x1={scaleX(0)}
                y1={scaleY(i * 4)}
                x2={scaleX(4)}
                y2={scaleY(i * 4)}
                stroke="currentColor"
                strokeOpacity="0.1"
              />
            </g>
          ))}
          
          {/* Axes */}
          <line
            x1={scaleX(0)}
            y1={scaleY(0)}
            x2={scaleX(4)}
            y2={scaleY(0)}
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1={scaleX(0)}
            y1={scaleY(0)}
            x2={scaleX(0)}
            y2={scaleY(16)}
            stroke="currentColor"
            strokeWidth="2"
          />
          
          <text x={scaleX(4) + 5} y={scaleY(0) + 5} fontSize="12" fill="currentColor">x</text>
          <text x={scaleX(0) - 5} y={scaleY(16) - 10} fontSize="12" fill="currentColor">f(x)</text>

          {/* Parabola */}
          <polyline
            points={parabolaPoints.join(" ")}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />

          {/* Epsilon band around targetY */}
          <rect
            x={scaleX(0)}
            y={scaleY(targetY + epsilon)}
            width={plotWidth}
            height={scaleY(targetY - epsilon) - scaleY(targetY + epsilon)}
            fill="hsl(var(--primary))"
            fillOpacity="0.15"
          />
          
          <line
            x1={scaleX(0)}
            y1={scaleY(targetY + epsilon)}
            x2={scaleX(4)}
            y2={scaleY(targetY + epsilon)}
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
          
          <line
            x1={scaleX(0)}
            y1={scaleY(targetY - epsilon)}
            x2={scaleX(4)}
            y2={scaleY(targetY - epsilon)}
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
          
          <text x={5} y={scaleY(targetY + epsilon) - 5} fontSize="10" fill="hsl(var(--primary))">
            L + ε = {targetY + epsilon}
          </text>
          
          <text x={5} y={scaleY(targetY - epsilon) + 15} fontSize="10" fill="hsl(var(--primary))">
            L - ε = {targetY - epsilon}
          </text>

          {/* Delta band around targetX */}
          {showDelta && (
            <>
              <rect
                x={scaleX(targetX - delta)}
                y={scaleY(16)}
                width={scaleX(targetX + delta) - scaleX(targetX - delta)}
                height={plotHeight}
                fill="hsl(var(--math-green))"
                fillOpacity="0.15"
              />
              
              <line
                x1={scaleX(targetX - delta)}
                y1={scaleY(0)}
                x2={scaleX(targetX - delta)}
                y2={scaleY(16)}
                stroke="hsl(var(--math-green))"
                strokeWidth="1"
                strokeDasharray="5,5"
              />
              
              <line
                x1={scaleX(targetX + delta)}
                y1={scaleY(0)}
                x2={scaleX(targetX + delta)}
                y2={scaleY(16)}
                stroke="hsl(var(--math-green))"
                strokeWidth="1"
                strokeDasharray="5,5"
              />
              
              <text x={scaleX(targetX - delta) - 30} y={scaleY(0) + 20} fontSize="10" fill="hsl(var(--math-green))">
                c - δ
              </text>
              
              <text x={scaleX(targetX + delta) + 5} y={scaleY(0) + 20} fontSize="10" fill="hsl(var(--math-green))">
                c + δ
              </text>
            </>
          )}

          {/* Target point */}
          <circle
            cx={scaleX(targetX)}
            cy={scaleY(targetY)}
            r="5"
            fill="hsl(var(--primary))"
          />
          
          <text x={scaleX(targetX) + 10} y={scaleY(targetY) - 10} fontSize="12" fill="currentColor">
            (2, 4) = L
          </text>

          {/* Current point */}
          <circle
            cx={scaleX(x)}
            cy={scaleY(currentY)}
            r="5"
            fill="hsl(var(--math-orange))"
            className="cursor-pointer"
          />
          
          <text x={scaleX(x) + 10} y={scaleY(currentY) - 10} fontSize="12" fill="hsl(var(--math-orange))">
            ({x.toFixed(2)}, {currentY.toFixed(2)})
          </text>

          {/* Projection lines */}
          <line
            x1={scaleX(x)}
            y1={scaleY(currentY)}
            x2={scaleX(x)}
            y2={scaleY(0)}
            stroke="hsl(var(--math-orange))"
            strokeWidth="1"
            strokeDasharray="3,3"
            opacity="0.5"
          />
          
          <line
            x1={scaleX(x)}
            y1={scaleY(currentY)}
            x2={scaleX(0)}
            y2={scaleY(currentY)}
            stroke="hsl(var(--math-orange))"
            strokeWidth="1"
            strokeDasharray="3,3"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Controls */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="text-sm font-medium mb-2 block">
            x position: {x.toFixed(2)} (distance from 2: {Math.abs(x - 2).toFixed(2)})
          </label>
          <input
            type="range"
            min="0"
            max="4"
            step="0.01"
            value={x}
            onChange={(e) => {
              setX(Number(e.target.value))
              setIsAnimating(false)
            }}
            className="w-full accent-primary"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              ε (tolerance): ±{epsilon.toFixed(2)}
            </label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={epsilon}
              onChange={(e) => setEpsilon(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: "hsl(var(--primary))" }}
            />
          </div>

          <div className="flex flex-col justify-end">
            <button
              onClick={() => {
                setX(0)
                setIsAnimating(true)
              }}
              className="btn-primary w-full"
            >
              {isAnimating ? "Animating..." : "Animate to x = 2"}
            </button>
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={showDelta}
            onChange={(e) => setShowDelta(e.target.checked)}
            className="rounded"
          />
          Show δ (delta) region
        </label>
      </div>

      {/* Definition explanation */}
      <div className="p-4 bg-primary/10 rounded-lg">
        <p className="text-sm mb-2">
          <strong>ε-δ Definition:</strong> For every ε &gt; 0, there exists δ &gt; 0 such that:
        </p>
        <div className="font-mono text-sm bg-background p-3 rounded my-2">
          if |x - 2| &lt; δ then |x² - 4| &lt; ε
        </div>
        <p className="text-sm text-muted-foreground">
          <strong>Translation:</strong> If x is within δ of 2 (green band), 
          then f(x) = x² is within ε of 4 (blue band).
        </p>
        <p className="text-sm mt-2">
          <strong>Current status:</strong>{" "}
          {Math.abs(currentY - targetY) < epsilon ? (
            <span className="text-green-600">✓ f(x) is within ε of L</span>
          ) : (
            <span className="text-red-500">✗ f(x) is outside the ε band</span>
          )}
        </p>
      </div>
    </div>
  )
}
