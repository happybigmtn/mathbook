"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type GeometryType = "euclidean" | "hyperbolic" | "elliptic"

interface GeometryData {
  id: GeometryType
  name: string
  curvature: string
  parallels: string
  description: string
  angleSum: string
}

const geometries: GeometryData[] = [
  {
    id: "euclidean",
    name: "Euclidean",
    curvature: "Zero (flat)",
    parallels: "Exactly one parallel line through any point not on the line",
    description: "The geometry of flat planes. Familiar from school—triangles have 180°, parallel lines never meet.",
    angleSum: "180°",
  },
  {
    id: "hyperbolic",
    name: "Hyperbolic",
    curvature: "Negative (saddle-shaped)",
    parallels: "Infinitely many parallel lines through any point not on the line",
    description: "The geometry of saddle surfaces and pseudospheres. Space expands as you move away.",
    angleSum: "< 180°",
  },
  {
    id: "elliptic",
    name: "Elliptic",
    curvature: "Positive (sphere-like)",
    parallels: "No parallel lines—any two lines intersect",
    description: "The geometry of spheres. Think of great circles on Earth—any two meet at antipodal points.",
    angleSum: "> 180°",
  },
]

export function GeometryTypesVisualizer() {
  const [selectedGeometry, setSelectedGeometry] = useState<GeometryType>("euclidean")
  const [showTriangle, setShowTriangle] = useState(true)
  
  const currentGeometry = geometries.find((g) => g.id === selectedGeometry)!

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">The Three Geometries</h3>
        <p className="text-sm text-muted-foreground">
          Euclid's parallel postulate leads to three distinct geometries. Select each to explore.
        </p>
      </div>

      {/* Geometry selector */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {geometries.map((geo) => (
          <button
            key={geo.id}
            onClick={() => setSelectedGeometry(geo.id)}
            className={`p-3 rounded-lg text-sm font-medium transition-all ${
              selectedGeometry === geo.id
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {geo.name}
          </button>
        ))}
      </div>

      {/* Visual representation */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium">Visualization</span>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={showTriangle}
              onChange={(e) => setShowTriangle(e.target.checked)}
              className="rounded"
            />
            Show triangle
          </label>
        </div>

        <div className="relative h-64 bg-muted/30 rounded-lg overflow-hidden">
          <AnimatePresence mode="wait">
            {selectedGeometry === "euclidean" && (
              <motion.div
                key="euclidean"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Grid */}
                <svg className="w-full h-full" viewBox="0 0 400 256">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeOpacity="0.1" />
                    </pattern>
                  </defs>
                  <rect width="400" height="256" fill="url(#grid)" />
                  
                  {/* Line L */}
                  <line x1="50" y1="128" x2="350" y2="128" stroke="currentColor" strokeWidth="2" />
                  <text x="360" y="132" fontSize="14" fill="currentColor">L</text>
                  
                  {/* Point P */}
                  <circle cx="200" cy="80" r="4" fill="currentColor" />
                  <text x="210" y="76" fontSize="14" fill="currentColor">P</text>
                  
                  {/* One parallel line through P */}
                  <line x1="50" y1="80" x2="350" y2="80" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
                  <text x="360" y="84" fontSize="12" fill="hsl(var(--primary))">M (parallel to L)</text>
                  
                  {/* Triangle */}
                  {showTriangle && (
                    <>
                      <polygon
                        points="150,180 250,180 200,100"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                      />
                      <text x="135" y="190" fontSize="12" fill="currentColor">60°</text>
                      <text x="255" y="190" fontSize="12" fill="currentColor">60°</text>
                      <text x="205" y="90" fontSize="12" fill="currentColor">60°</text>
                    </>
                  )}
                </svg>
              </motion.div>
            )}

            {selectedGeometry === "hyperbolic" && (
              <motion.div
                key="hyperbolic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg className="w-full h-full" viewBox="0 0 400 256">
                  {/* Poincaré disk model */}
                  <circle cx="200" cy="128" r="100" fill="none" stroke="currentColor" strokeWidth="2" />
                  
                  {/* Line L (diameter) */}
                  <line x1="150" y1="78" x2="250" y2="178" stroke="currentColor" strokeWidth="2" />
                  <text x="260" y="180" fontSize="14" fill="currentColor">L</text>
                  
                  {/* Point P */}
                  <circle cx="200" cy="100" r="4" fill="currentColor" />
                  <text x="210" y="96" fontSize="14" fill="currentColor">P</text>
                  
                  {/* Multiple parallels through P */}
                  <path d="M 120 100 Q 200 80 280 100" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M 110 90 Q 200 70 290 90" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" opacity="0.7" />
                  <path d="M 130 110 Q 200 90 270 110" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" opacity="0.7" />
                  
                  <text x="300" y="100" fontSize="10" fill="hsl(var(--primary))">Many parallels</text>
                </svg>
              </motion.div>
            )}

            {selectedGeometry === "elliptic" && (
              <motion.div
                key="elliptic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg className="w-full h-full" viewBox="0 0 400 256">
                  {/* Sphere */}
                  <circle cx="200" cy="128" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
                  
                  {/* Great circle (Line L) */}
                  <ellipse cx="200" cy="128" rx="80" ry="20" fill="none" stroke="currentColor" strokeWidth="2" />
                  <text x="290" y="125" fontSize="14" fill="currentColor">L (great circle)</text>
                  
                  {/* Point P not on L */}
                  <circle cx="200" cy="60" r="4" fill="currentColor" />
                  <text x="210" y="56" fontSize="14" fill="currentColor">P</text>
                  
                  {/* Any great circle through P will intersect L */}
                  <ellipse cx="200" cy="128" rx="25" ry="80" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
                  
                  <text x="230" y="80" fontSize="10" fill="hsl(var(--primary))">Every line through P meets L</text>
                  
                  {/* Triangle with angle sum > 180° */}
                  {showTriangle && (
                    <>
                      <path
                        d="M 200 60 L 160 160 L 240 160 Z"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                      />
                      <text x="180" y="55" fontSize="12" fill="currentColor">90°</text>
                      <text x="140" y="170" fontSize="12" fill="currentColor">90°</text>
                      <text x="245" y="170" fontSize="12" fill="currentColor">90°</text>
                      <text x="195" y="145" fontSize="14" fill="hsl(var(--primary))" fontWeight="bold">270°</text>
                    </>
                  )}
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Details */}
      <motion.div
        key={selectedGeometry}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-3"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-muted/30 rounded-lg">
            <span className="text-xs text-muted-foreground uppercase">Curvature</span>
            <p className="font-medium">{currentGeometry.curvature}</p>
          </div>
          
          <div className="p-3 bg-muted/30 rounded-lg">
            <span className="text-xs text-muted-foreground uppercase">Triangle Angle Sum</span>
            <p className="font-medium">{currentGeometry.angleSum}</p>
          </div>
        </div>

        <div className="p-4 bg-primary/10 rounded-lg">
          <p className="text-sm"><strong>Parallel Postulate:</strong> {currentGeometry.parallels}</p>        </div>

        <p className="text-sm text-muted-foreground">{currentGeometry.description}</p>
      </motion.div>

      {/* Einstein connection */}
      <div className="mt-4 p-4 bg-muted/30 rounded-lg">
        <p className="text-sm">
          <strong>Real World Connection:</strong> Einstein's general relativity revealed that our universe is 
          non-Euclidean. Mass curves spacetime into a geometry with positive curvature locally (elliptic-like) 
          and negative curvature in other regions.
        </p>
      </div>
    </div>
  )
}
