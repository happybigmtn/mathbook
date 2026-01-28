"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function PythagoreanTheoremDemo() {
  const [a, setA] = useState(3)
  const [b, setB] = useState(4)
  const c = Math.sqrt(a * a + b * b)

  const scale = 30

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-2">The Pythagorean Theorem</h3>
      <p className="text-sm text-muted-foreground mb-4">
        a² + b² = c²
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Triangle visualization */}
        <div className="flex-1 flex justify-center">
          <svg 
            width="300" 
            height="300" 
            viewBox="0 0 300 300"
            className="bg-black/20 rounded-lg"
          >
            {/* Grid */}
            {Array.from({ length: 10 }).map((_, i) => (
              <g key={i}>
                <line x1={i * 30} y1="0" x2={i * 30} y2="300" stroke="currentColor" strokeOpacity={0.1} />
                <line x1="0" y1={i * 30} x2="300" y2={i * 30} stroke="currentColor" strokeOpacity={0.1} />
              </g>
            ))}

            {/* Right triangle */}
            <polygon
              points={`50,250 ${50 + a * scale},250 50,${250 - b * scale}`}
              fill="hsl(var(--primary))"
              fillOpacity={0.3}
              stroke="hsl(var(--primary))"
              strokeWidth={3}
            />

            {/* Right angle marker */}
            <rect
              x="50"
              y={250 - 20}
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            />

            {/* Side labels */}
            <text 
              x={50 + (a * scale) / 2} 
              y="265" 
              textAnchor="middle" 
              fontSize="14" 
              fill="currentColor"
            >
              a = {a}
            </text>

            <text 
              x="35" 
              y={250 - (b * scale) / 2} 
              textAnchor="middle" 
              fontSize="14" 
              fill="currentColor"
            >
              b = {b}
            </text>

            <text 
              x={50 + (a * scale) / 2 + 20} 
              y={250 - (b * scale) / 2 - 20} 
              textAnchor="middle" 
              fontSize="14" 
              fill="orange"
            >
              c = {c.toFixed(2)}
            </text>

            {/* Squares on sides */}
            <rect
              x="50"
              y={250 + 5}
              width={a * scale}
              height={a * scale}
              fill="hsl(var(--primary))"
              fillOpacity={0.2}
              stroke="hsl(var(--primary))"
              strokeWidth={1}
              strokeDasharray="4 4"
            />

            <rect
              x={50 - b * scale - 5}
              y={250 - b * scale}
              width={b * scale}
              height={b * scale}
              fill="hsl(var(--primary))"
              fillOpacity={0.2}
              stroke="hsl(var(--primary))"
              strokeWidth={1}
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* Controls */}
        <div className="w-full md:w-48 space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Side a: {a}
            </label>
            <input
              type="range"
              min="1"
              max="8"
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Side b: {b}
            </label>
            <input
              type="range"
              min="1"
              max="8"
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>

          <div className="p-4 bg-primary/10 rounded-lg space-y-2">
            <p className="text-sm font-mono">
              a² = {a}² = {a * a}
            </p>
            <p className="text-sm font-mono">
              b² = {b}² = {b * b}
            </p>
            <p className="text-sm font-mono">
              a² + b² = {a * a + b * b}
            </p>
            <p className="text-sm font-mono text-orange-400">
              c = √{a * a + b * b} = {c.toFixed(3)}
            </p>
          </div>

          <motion.div 
            className="p-4 bg-math-green/20 rounded-lg border border-math-green/50"
            key={a + b}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <p className="text-sm text-math-green font-semibold text-center">
              {a}² + {b}² = {c.toFixed(2)}²
            </p>
            <p className="text-xs text-muted-foreground mt-1 text-center">
              {a * a} + {b * b} = {(c * c).toFixed(2)}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
