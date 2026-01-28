"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Branch {
  id: string
  name: string
  description: string
  examples: string[]
  color: string
  icon: string
}

const branches: Branch[] = [
  {
    id: "algebra",
    name: "Algebra",
    description: "The study of structure, patterns, and symbolic manipulation",
    examples: [
      "Solving equations",
      "Group theory",
      "Linear algebra",
      "Abstract algebra",
    ],
    color: "#2563eb",
    icon: "ƒ(x)",
  },
  {
    id: "geometry",
    name: "Geometry",
    description: "The study of shape, size, and spatial relationships",
    examples: [
      "Euclidean geometry",
      "Topology",
      "Differential geometry",
      "Algebraic geometry",
    ],
    color: "#16a34a",
    icon: "△",
  },
  {
    id: "analysis",
    name: "Analysis",
    description: "The study of change, continuity, and limits",
    examples: [
      "Calculus",
      "Complex analysis",
      "Differential equations",
      "Measure theory",
    ],
    color: "#dc2626",
    icon: "∫",
  },
]

const connections = [
  { from: "algebra", to: "geometry", label: "Algebraic Geometry", examples: ["Coordinate systems", "Polynomial curves"] },
  { from: "geometry", to: "analysis", label: "Geometric Analysis", examples: ["Differential geometry", "Curvature"] },
  { from: "algebra", to: "analysis", label: "Functional Analysis", examples: ["Operator theory", "Hilbert spaces"] },
]

export function MathBranchesVisualizer() {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null)
  const [hoveredConnection, setHoveredConnection] = useState<string | null>(null)

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">The Three Branches of Mathematics</h3>
        <p className="text-sm text-muted-foreground">
          Click on each branch to explore. Modern mathematics blurs these boundaries,
          creating rich fields at the intersections.
        </p>
      </div>

      <div className="relative">
        {/* SVG connections */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--muted-foreground))" opacity="0.3" />
            </marker>
          </defs>
          
          {/* Triangle connecting the three branches */}
          <line
            x1="25%"
            y1="20%"
            x2="75%"
            y2="20%"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity={hoveredConnection === "top" ? 0.8 : 0.3}
          />
          <line
            x1="25%"
            y1="20%"
            x2="50%"
            y2="80%"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity={hoveredConnection === "left" ? 0.8 : 0.3}
          />
          <line
            x1="75%"
            y1="20%"
            x2="50%"
            y2="80%"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity={hoveredConnection === "right" ? 0.8 : 0.3}
          />
        </svg>

        {/* Branch nodes */}
        <div className="grid grid-cols-3 gap-4 relative z-10">
          {branches.map((branch, index) => (
            <motion.button
              key={branch.id}
              onClick={() => setSelectedBranch(selectedBranch === branch.id ? null : branch.id)}
              onMouseEnter={() => {
                if (index === 0) setHoveredConnection("left")
                if (index === 1) setHoveredConnection("top")
                if (index === 2) setHoveredConnection("right")
              }}
              onMouseLeave={() => setHoveredConnection(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                selectedBranch === branch.id
                  ? "border-primary bg-primary/10"
                  : "border-border/50 hover:border-primary/50 bg-card"
              }`}
              style={{
                gridColumn: index === 2 ? "3" : index + 1,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold mb-3 mx-auto"
                style={{ backgroundColor: `${branch.color}20`, color: branch.color }}
              >
                {branch.icon}
              </div>
              <h4 className="font-semibold text-center mb-1">{branch.name}</h4>
              <p className="text-xs text-muted-foreground text-center">
                {branch.description}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Center info when nothing selected */}
        <AnimatePresence mode="wait">
          {!selectedBranch && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 p-4 bg-muted/30 rounded-lg text-center"
            >
              <p className="text-sm text-muted-foreground">
                <strong>Interdisciplinary Fields:</strong> The most exciting mathematics happens at the boundaries.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {connections.map((conn) => (
                  <span
                    key={conn.label}
                    className="text-xs px-2 py-1 bg-primary/10 rounded-full text-primary"
                  >
                    {conn.label}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Selected branch details */}
        <AnimatePresence mode="wait">
          {selectedBranch && (
            <motion.div
              key={selectedBranch}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 overflow-hidden"
            >
              {(() => {
                const branch = branches.find((b) => b.id === selectedBranch)!
                return (
                  <div className="p-5 rounded-lg border-2" style={{ borderColor: `${branch.color}40` }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold"
                        style={{ backgroundColor: `${branch.color}20`, color: branch.color }}
                      >
                        {branch.icon}
                      </div>
                      <h4 className="text-lg font-semibold">{branch.name}</h4>
                    </div>
                    
                    <p className="text-sm mb-4">{branch.description}</p>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Key Topics
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {branch.examples.map((example) => (
                          <div
                            key={example}
                            className="text-sm px-3 py-2 rounded-md flex items-center gap-2"
                            style={{ backgroundColor: `${branch.color}10` }}
                          >
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: branch.color }}
                            />
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setSelectedBranch(null)}
                      className="mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      ← Back to overview
                    </button>
                  </div>
                )
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
