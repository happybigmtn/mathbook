"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Operation = "union" | "intersection" | "difference" | "complement"

interface SetConfig {
  A: (number | string)[]
  B: (number | string)[]
  universal: (number | string)[]
}

const examples: SetConfig[] = [
  {
    universal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    A: [1, 2, 3, 4, 5],
    B: [4, 5, 6, 7, 8],
  },
  {
    universal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    A: [2, 4, 6, 8, 10, 12],
    B: [3, 6, 9, 12],
  },
  {
    universal: ["a", "b", "c", "d", "e", "f", "g", "h"],
    A: ["a", "b", "c", "d"],
    B: ["c", "d", "e", "f"],
  },
]

const operations: { id: Operation; name: string; symbol: string; description: string }[] = [
  {
    id: "union",
    name: "Union",
    symbol: "∪",
    description: "A ∪ B = {x : x ∈ A or x ∈ B}",
  },
  {
    id: "intersection",
    name: "Intersection",
    symbol: "∩",
    description: "A ∩ B = {x : x ∈ A and x ∈ B}",
  },
  {
    id: "difference",
    name: "Difference",
    symbol: "−",
    description: "A − B = {x : x ∈ A and x ∉ B}",
  },
  {
    id: "complement",
    name: "Complement",
    symbol: "ᶜ",
    description: "Aᶜ = {x : x ∉ A}",
  },
]

function calculateResult(operation: Operation, A: (number | string)[], B: (number | string)[], universal: (number | string)[]) {
  switch (operation) {
    case "union":
      return [...new Set([...A, ...B])].sort((a, b) => (a > b ? 1 : -1))
    case "intersection":
      return A.filter((x) => B.includes(x)).sort((a, b) => (a > b ? 1 : -1))
    case "difference":
      return A.filter((x) => !B.includes(x)).sort((a, b) => (a > b ? 1 : -1))
    case "complement":
      return universal.filter((x) => !A.includes(x)).sort((a, b) => (a > b ? 1 : -1))
    default:
      return []
  }
}

export function SetOperationsVisualizer() {
  const [selectedOperation, setSelectedOperation] = useState<Operation>("union")
  const [exampleIndex, setExampleIndex] = useState(0)
  
  const currentExample = examples[exampleIndex]
  const result = calculateResult(selectedOperation, currentExample.A, currentExample.B, currentExample.universal)
  const currentOp = operations.find((op) => op.id === selectedOperation)!

  const isInA = (x: number | string) => currentExample.A.includes(x)
  const isInB = (x: number | string) => currentExample.B.includes(x)
  const isInResult = (x: number | string) => result.includes(x)

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Set Operations Visualizer</h3>
        <p className="text-sm text-muted-foreground">
          Explore how sets combine through different operations. Select an operation to see the result.
        </p>
      </div>

      {/* Operation selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {operations.map((op) => (
          <button
            key={op.id}
            onClick={() => setSelectedOperation(op.id)}
            className={`p-3 rounded-lg text-sm font-medium transition-all ${
              selectedOperation === op.id
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            <div className="text-lg font-bold">{op.symbol}</div>
            <div className="text-xs">{op.name}</div>
          </button>
        ))}
      </div>

      {/* Example selector */}
      <div className="flex gap-2 mb-6">
        <span className="text-sm text-muted-foreground mr-2">Example:</span>
        {examples.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setExampleIndex(idx)}
            className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
              exampleIndex === idx
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* Sets display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Set A */}
        <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-blue-600">Set A</span>
            <span className="text-xs text-muted-foreground font-mono">
              {currentExample.A.join(", ")}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentExample.A.map((x) => (
              <motion.div
                key={x}
                layoutId={`element-${x}`}
                className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center font-bold"
              >
                {x}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Operation indicator */}
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{currentOp.symbol}</div>
            <div className="text-xs text-muted-foreground">{currentOp.name}</div>
            <div className="mt-2 text-xs font-mono bg-muted px-2 py-1 rounded">
              {selectedOperation === "complement" ? "Aᶜ" : `A ${currentOp.symbol} B`}
            </div>
          </div>
        </div>

        {/* Set B (or hidden for complement) */}
        <AnimatePresence mode="wait">
          {selectedOperation !== "complement" ? (
            <motion.div
              key="setB"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="p-4 rounded-lg bg-green-500/10 border border-green-500/30"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-green-600">Set B</span>
                <span className="text-xs text-muted-foreground font-mono">
                  {currentExample.B.join(", ")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentExample.B.map((x) => (
                  <motion.div
                    key={x}
                    layoutId={`element-${x}`}
                    className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center font-bold"
                  >
                    {x}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="universal"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="p-4 rounded-lg bg-gray-500/10 border border-gray-500/30"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-gray-600">Universal Set U</span>
                <span className="text-xs text-muted-foreground font-mono">
                  {currentExample.universal.join(", ")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentExample.universal.map((x) => (
                  <div
                    key={x}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                      isInA(x)
                        ? "bg-blue-500 text-white"
                        : "bg-gray-400 text-white"
                    }`}
                  >
                    {x}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Result */}
      <div className="p-5 rounded-lg bg-primary/10 border-2 border-primary">
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-primary">Result</span>
          <span className="text-xs text-muted-foreground font-mono">
            {selectedOperation === "complement"
              ? `Aᶜ = {${result.join(", ")}}`
              : `A ${currentOp.symbol} B = {${result.join(", ")}}`}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {result.length > 0 ? (
            result.map((x) => (
              <motion.div
                key={x}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg ${
                  isInA(x) && isInB(x)
                    ? "bg-gradient-to-br from-blue-500 to-green-500 text-white"
                    : isInA(x)
                    ? "bg-blue-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {x}
              </motion.div>
            ))
          ) : (
            <div className="text-muted-foreground italic">Empty set ∅</div>
          )}
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 bg-muted/30 rounded-lg">
        <p className="text-sm">
          <strong>{currentOp.name}:</strong> {currentOp.description}
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          {selectedOperation === "union" && "The union contains all elements that are in A OR in B (or both)."}
          {selectedOperation === "intersection" && "The intersection contains only elements that are in BOTH A and B."}
          {selectedOperation === "difference" && "The difference contains elements that are in A but NOT in B."}
          {selectedOperation === "complement" && "The complement contains all elements in the universal set that are NOT in A."}
        </p>
      </div>
    </div>
  )
}
