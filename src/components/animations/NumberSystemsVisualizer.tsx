"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Info } from "lucide-react"

type NumberType = "natural" | "integer" | "rational" | "real" | "complex"

interface NumberSystem {
  id: NumberType
  name: string
  symbol: string
  description: string
  examples: string[]
  solves: string
  limitations: string
  color: string
}

const numberSystems: NumberSystem[] = [
  {
    id: "natural",
    name: "Natural Numbers",
    symbol: "ℕ",
    description: "Counting numbers: 1, 2, 3, ...",
    examples: ["1", "2", "42", "100"],
    solves: "x + 3 = 5 → x = 2",
    limitations: "Can't solve x + 5 = 3",
    color: "#22c55e",
  },
  {
    id: "integer",
    name: "Integers",
    symbol: "ℤ",
    description: "Whole numbers: ..., -2, -1, 0, 1, 2, ...",
    examples: ["-3", "0", "7", "-42"],
    solves: "x + 5 = 3 → x = -2",
    limitations: "Can't solve 2x = 1",
    color: "#3b82f6",
  },
  {
    id: "rational",
    name: "Rational Numbers",
    symbol: "ℚ",
    description: "Fractions: p/q where q ≠ 0",
    examples: ["1/2", "-3/4", "0.75", "22/7"],
    solves: "2x = 1 → x = 1/2",
    limitations: "Can't solve x² = 2",
    color: "#f59e0b",
  },
  {
    id: "real",
    name: "Real Numbers",
    symbol: "ℝ",
    description: "All points on the number line",
    examples: ["√2", "π", "e", "-0.333..."],
    solves: "x² = 2 → x = √2",
    limitations: "Can't solve x² = -1",
    color: "#ef4444",
  },
  {
    id: "complex",
    name: "Complex Numbers",
    symbol: "ℂ",
    description: "a + bi where i² = -1",
    examples: ["3 + 2i", "i", "1 - i", "2i"],
    solves: "x² = -1 → x = i",
    limitations: "None for polynomials!",
    color: "#8b5cf6",
  },
]

export function NumberSystemsVisualizer() {
  const [selectedSystem, setSelectedSystem] = useState<NumberType>("natural")
  const currentSystem = numberSystems.find((s) => s.id === selectedSystem)!

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">The Expansion of Number Systems</h3>
        <p className="text-sm text-muted-foreground">
          Mathematics grew by solving equations that previous number systems couldn't handle.
          Each expansion solved new problems while keeping what worked before.
        </p>
      </div>

      {/* Progression visualization */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          {numberSystems.map((system, index) => (
            <div key={system.id} className="flex items-center">
              <button
                onClick={() => setSelectedSystem(system.id)}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all ${
                  selectedSystem === system.id
                    ? "ring-4 ring-offset-2"
                    : "opacity-60 hover:opacity-100"
                }`}
                style={{
                  backgroundColor: system.color,
                  color: "white",
                }}
              >
                {system.symbol}
              </button>
              {index < numberSystems.length - 1 && (
                <div className="w-8 h-0.5 bg-muted mx-1" />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          {numberSystems.map((system) => (
            <span key={system.id} className="w-12 text-center">
              {system.name.split(" ")[0]}
            </span>
          ))}
        </div>
      </div>

      {/* Selected system details */}
      <motion.div
        key={selectedSystem}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-5 rounded-lg border-2"
        style={{ borderColor: currentSystem.color }}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className="text-xl font-bold" style={{ color: currentSystem.color }}>
              {currentSystem.name} {currentSystem.symbol}
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              {currentSystem.description}
            </p>
          </div>
          <div
            className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl font-bold text-white"
            style={{ backgroundColor: currentSystem.color }}
          >
            {currentSystem.symbol}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="p-3 bg-muted/30 rounded-lg">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
              Examples
            </p>
            <div className="flex flex-wrap gap-2">
              {currentSystem.examples.map((ex) => (
                <span
                  key={ex}
                  className="px-2 py-1 rounded text-sm font-mono"
                  style={{ backgroundColor: `${currentSystem.color}20`, color: currentSystem.color }}
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3 bg-green-500/10 rounded-lg">
            <p className="text-xs font-medium uppercase tracking-wider text-green-600 mb-2">
              Now We Can Solve
            </p>
            <p className="text-sm font-mono">{currentSystem.solves}</p>
          </div>
        </div>

        {currentSystem.id !== "complex" && (
          <div className="p-3 bg-orange-500/10 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-4 h-4 text-orange-500" />
              <p className="text-xs font-medium uppercase tracking-wider text-orange-600">
                But We Still Can't Solve
              </p>
            </div>
            <p className="text-sm">{currentSystem.limitations}</p>
            <p className="text-xs text-muted-foreground mt-2">
              This limitation led to the next expansion →{" "}
              {numberSystems[numberSystems.findIndex((s) => s.id === currentSystem.id) + 1]?.name}
            </p>
          </div>
        )}

        {currentSystem.id === "complex" && (
          <div className="p-3 bg-purple-500/10 rounded-lg">
            <p className="text-xs font-medium uppercase tracking-wider text-purple-600 mb-2">
              Fundamental Theorem of Algebra
            </p>
            <p className="text-sm">
              Every polynomial equation has a solution in ℂ! This is why complex numbers complete the number system.
            </p>
          </div>
        )}
      </motion.div>

      {/* Navigation */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => {
            const currentIndex = numberSystems.findIndex((s) => s.id === selectedSystem)
            if (currentIndex > 0) {
              setSelectedSystem(numberSystems[currentIndex - 1].id)
            }
          }}
          disabled={selectedSystem === "natural"}
          className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
        >
          ← Previous
        </button>
        <button
          onClick={() => {
            const currentIndex = numberSystems.findIndex((s) => s.id === selectedSystem)
            if (currentIndex < numberSystems.length - 1) {
              setSelectedSystem(numberSystems[currentIndex + 1].id)
            }
          }}
          disabled={selectedSystem === "complex"}
          className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  )
}
