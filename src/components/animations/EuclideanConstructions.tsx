"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function EuclideanConstructions() {
  const [step, setStep] = useState(0)

  const constructions = [
    {
      name: "Perpendicular Bisector",
      description: "Construct a line perpendicular to AB passing through its midpoint",
      steps: [
        "Draw circle centered at A with radius AB",
        "Draw circle centered at B with radius AB",
        "Connect the two intersection points",
      ],
    },
    {
      name: "Angle Bisector",
      description: "Construct a line that bisects angle ABC",
      steps: [
        "Draw circle centered at B intersecting both rays",
        "From intersection points, draw equal radius circles",
        "Connect B to where these circles intersect",
      ],
    },
    {
      name: "Equilateral Triangle",
      description: "Construct an equilateral triangle on segment AB",
      steps: [
        "Draw circle centered at A with radius AB",
        "Draw circle centered at B with radius AB",
        "C is one of the intersection points",
        "Connect A-B-C-A",
      ],
    },
  ]

  const current = constructions[step]

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Euclidean Constructions</h3>

      <div className="flex gap-2 mb-4">
        {constructions.map((c, i) => (
          <button
            key={c.name}
            onClick={() => setStep(i)}
            className={`px-3 py-1 rounded-lg text-sm ${
              step === i
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <p className="text-muted-foreground">{current.description}</p>

        <div className="bg-black/20 rounded-lg p-4">
          <ol className="space-y-2">
            {current.steps.map((s, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm flex-shrink-0">
                  {i + 1}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="p-4 bg-primary/10 rounded-lg">
          <p className="text-sm">
            <strong>Key principle:</strong> Euclid&apos;s constructions use only compass and 
            straightedge - no measuring allowed!
          </p>
        </div>
      </motion.div>
    </div>
  )
}
