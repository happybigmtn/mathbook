"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const numberSystems = [
  {
    name: "Natural Numbers",
    symbol: "ℕ",
    examples: ["1", "2", "3", "4", "5", "..."],
    description: "Counting numbers starting from 1",
    limitations: ["Can't subtract larger from smaller", "Can't represent fractions", "Can't represent negative quantities"],
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Integers",
    symbol: "ℤ",
    examples: ["...", "-2", "-1", "0", "1", "2", "..."],
    description: "Whole numbers including negatives and zero",
    limitations: ["Can't represent fractions", "Can't divide arbitrary numbers"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Rational Numbers",
    symbol: "ℚ",
    examples: ["1/2", "-3/4", "22/7", "0.5", "0.333..."],
    description: "Numbers expressible as ratios of integers",
    limitations: ["Can't represent √2", "Can't represent π"],
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Real Numbers",
    symbol: "ℝ",
    examples: ["√2", "π", "e", "1.414213..."],
    description: "All numbers on the number line",
    limitations: ["Can't solve x² + 1 = 0"],
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Complex Numbers",
    symbol: "ℂ",
    examples: ["1 + i", "2 - 3i", "e^(iπ)"],
    description: "Numbers of the form a + bi where i² = -1",
    limitations: ["None for polynomial equations!"],
    color: "from-yellow-500 to-amber-500",
  },
]

export function NumberSystemsTimeline() {
  const [selected, setSelected] = useState(0)
  const current = numberSystems[selected]

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Evolution of Number Systems</h3>

      {/* Timeline */}
      <div className="flex flex-wrap gap-2 mb-6">
        {numberSystems.map((system, index) => (
          <button
            key={system.name}
            onClick={() => setSelected(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selected === index
                ? `bg-gradient-to-r ${system.color} text-white`
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {system.symbol}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-4"
        >
          {/* Header */}
          <div className={`p-4 rounded-xl bg-gradient-to-r ${current.color}`}>
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-white">{current.symbol}</span>
              <div>
                <h4 className="text-xl font-semibold text-white">{current.name}</h4>
                <p className="text-white/80 text-sm">{current.description}</p>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div>
            <p className="text-sm font-medium mb-2">Examples:</p>
            <div className="flex flex-wrap gap-2">
              {current.examples.map((ex) => (
                <span
                  key={ex}
                  className="px-3 py-1 bg-muted rounded-lg text-sm font-mono"
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>

          {/* Limitations */}
          <div>
            <p className="text-sm font-medium mb-2">Limitations:</p>
            <ul className="space-y-1">
              {current.limitations.map((lim, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-red-500">×</span>
                  {lim}
                </li>
              ))}
            </ul>
          </div>

          {/* Why we extended */}
          {selected < numberSystems.length - 1 && (
            <div className="p-4 bg-primary/10 rounded-lg">
              <p className="text-sm">
                <strong>Why extend?</strong> To solve{" "}
                {selected === 0 && "x + 5 = 3 (need negative numbers)"}
                {selected === 1 && "2x = 1 (need fractions)"}
                {selected === 2 && "x² = 2 (need irrational numbers)"}
                {selected === 3 && "x² + 1 = 0 (need imaginary numbers)"}
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
