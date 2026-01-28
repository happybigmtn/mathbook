"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const functions = [
  { name: "f(x) = x²", fn: (x: number) => x * x, label: "x²" },
  { name: "f(x) = sin(x)", fn: (x: number) => Math.sin(x), label: "sin(x)" },
  { name: "f(x) = e^x", fn: (x: number) => Math.exp(x), label: "e^x" },
  { name: "f(x) = |x|", fn: (x: number) => Math.abs(x), label: "|x|" },
]

export function FunctionVisualizer() {
  const [selectedFn, setSelectedFn] = useState(functions[0])
  const [hoveredX, setHoveredX] = useState<number | null>(null)

  const width = 400
  const height = 300
  const padding = 40
  const graphWidth = width - 2 * padding
  const graphHeight = height - 2 * padding

  const xScale = (x: number) => padding + ((x + 5) / 10) * graphWidth
  const yScale = (y: number) => padding + graphHeight - ((y + 2) / 4) * graphHeight

  const points = Array.from({ length: 100 }, (_, i) => {
    const x = -5 + (i / 99) * 10
    const y = selectedFn.fn(x)
    return { x, y }
  }).filter((p) => !isNaN(p.y) && isFinite(p.y) && p.y >= -2 && p.y <= 2)

  const pathD = points.length > 0
    ? `M ${xScale(points[0].x)} ${yScale(points[0].y)} ` +
      points.slice(1).map((p) => `L ${xScale(p.x)} ${yScale(p.y)}`).join(" ")
    : ""

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Function Visualizer</h3>
        <p className="text-sm text-muted-foreground">
          A function assigns exactly one output to each input. Hover over the graph to see the mapping.
        </p>
      </div>

      {/* Function selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {functions.map((fn) => (
          <button
            key={fn.name}
            onClick={() => setSelectedFn(fn)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedFn.name === fn.name
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {fn.name}
          </button>
        ))}
      </div>

      {/* Graph */}
      <div className="flex justify-center">
        <svg
          width={width}
          height={height}
          className="bg-black/20 rounded-lg"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const mouseX = e.clientX - rect.left
            const x = -5 + ((mouseX - padding) / graphWidth) * 10
            if (x >= -5 && x <= 5) {
              setHoveredX(x)
            }
          }}
          onMouseLeave={() => setHoveredX(null)}
        >
          {/* Grid lines */}
          {[-4, -2, 0, 2, 4].map((x) => (
            <line
              key={`vx-${x}`}
              x1={xScale(x)}
              y1={padding}
              x2={xScale(x)}
              y2={height - padding}
              stroke="currentColor"
              strokeOpacity={0.1}
            />
          ))}
          {[-1, 0, 1].map((y) => (
            <line
              key={`hy-${y}`}
              x1={padding}
              y1={yScale(y)}
              x2={width - padding}
              y2={yScale(y)}
              stroke="currentColor"
              strokeOpacity={0.1}
            />
          ))}

          {/* Axes */}
          <line
            x1={padding}
            y1={yScale(0)}
            x2={width - padding}
            y2={yScale(0)}
            stroke="currentColor"
            strokeWidth={2}
          />
          <line
            x1={xScale(0)}
            y1={padding}
            x2={xScale(0)}
            y2={height - padding}
            stroke="currentColor"
            strokeWidth={2}
          />

          {/* Function curve */}
          <motion.path
            d={pathD}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={3}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Hover indicator */}
          {hoveredX !== null && (
            <g>
              <line
                x1={xScale(hoveredX)}
                y1={padding}
                x2={xScale(hoveredX)}
                y2={height - padding}
                stroke="hsl(var(--primary))"
                strokeDasharray="4 4"
                strokeOpacity={0.5}
              />
              <circle
                cx={xScale(hoveredX)}
                cy={yScale(selectedFn.fn(hoveredX))}
                r={6}
                fill="hsl(var(--primary))"
              />
              <text
                x={xScale(hoveredX) + 10}
                y={yScale(selectedFn.fn(hoveredX)) - 10}
                fill="currentColor"
                fontSize={12}
              >
                f({hoveredX.toFixed(2)}) = {selectedFn.fn(hoveredX).toFixed(2)}
              </text>
            </g>
          )}
        </svg>
      </div>

      <div className="mt-4 p-4 bg-primary/10 rounded-lg">
        <p className="text-sm">
          <strong>Key insight:</strong> For every input x, there is exactly one output f(x). 
          This is the defining property of a function - no input can have multiple outputs.
        </p>
      </div>
    </div>
  )
}
