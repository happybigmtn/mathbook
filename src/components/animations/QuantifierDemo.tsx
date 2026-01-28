"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface NumberSet {
  name: string
  numbers: number[]
  description: string
}

const numberSets: NumberSet[] = [
  { name: "Small Integers", numbers: [1, 2, 3, 4, 5], description: "{1, 2, 3, 4, 5}" },
  { name: "Even Numbers", numbers: [2, 4, 6, 8, 10], description: "{2, 4, 6, 8, 10}" },
  { name: "Mixed", numbers: [3, 7, 2, 9, 5], description: "{3, 7, 2, 9, 5}" },
]

export function QuantifierDemo() {
  const [selectedSet, setSelectedSet] = useState(numberSets[0])
  const [hoveredNumber, setHoveredNumber] = useState<number | null>(null)
  const [showLarger, setShowLarger] = useState<number | null>(null)

  const findLarger = (n: number) => {
    return selectedSet.numbers.find((x) => x > n)
  }

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Understanding Quantifiers</h3>
        <p className="text-sm text-muted-foreground">
          ∀ (for all) and ∃ (there exists) are the two fundamental quantifiers in mathematics.
          Click on a number to see ∃y (y &gt; x) in action.
        </p>
      </div>

      {/* Set selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {numberSets.map((set) => (
          <button
            key={set.name}
            onClick={() => {
              setSelectedSet(set)
              setShowLarger(null)
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedSet.name === set.name
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {set.name}
          </button>
        ))}
      </div>

      {/* Numbers display */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {selectedSet.numbers.map((n) => (
          <motion.button
            key={n}
            onClick={() => setShowLarger(n)}
            onMouseEnter={() => setHoveredNumber(n)}
            onMouseLeave={() => setHoveredNumber(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-14 h-14 rounded-xl text-xl font-bold transition-colors ${
              showLarger === n
                ? "bg-math-green text-white"
                : hoveredNumber === n
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {n}
          </motion.button>
        ))}
      </div>

      {/* Explanation */}
      <AnimatePresence mode="wait">
        {showLarger !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 bg-math-green/20 rounded-lg border border-math-green/50"
          >
            <p className="text-sm">
              For x = <strong>{showLarger}</strong>, we found y ={" "}
              <strong>{findLarger(showLarger)}</strong> such that y &gt; x.
              <br />
              <span className="text-muted-foreground">
                This demonstrates ∃y (y &gt; {showLarger}) for this particular x.
              </span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Universal statement */}
      <div className="mt-4 p-4 bg-primary/10 rounded-lg">
        <p className="text-sm mb-2">
          <strong>Statement:</strong> ∀x ∈ S, ∃y ∈ S : y &gt; x
        </p>
        <p className="text-sm text-muted-foreground">
          "For every element x in set S, there exists an element y in S such that y is greater than x."
        </p>
        <p className="text-sm mt-2">
          <strong>Is this true for {selectedSet.name}?</strong>{" "}
          {selectedSet.numbers.every((x) =>
            selectedSet.numbers.some((y) => y > x)
          ) ? (
            <span className="text-math-green">Yes! ✓</span>
          ) : (
            <span className="text-red-500">
              No! The maximum element {Math.max(...selectedSet.numbers)} has nothing larger.
            </span>
          )}
        </p>
      </div>
    </div>
  )
}
