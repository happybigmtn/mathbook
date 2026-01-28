"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SetItem {
  id: string
  name: string
  contains: string[]
  isRussellSet?: boolean
}

export function RussellsParadoxVisualizer() {
  const [step, setStep] = useState(0)
  const [showingAnswer, setShowingAnswer] = useState(false)
  
  const sets: SetItem[] = [
    { id: "A", name: "Set A", contains: ["A", "B", "C"] },
    { id: "B", name: "Set B", contains: ["A", "C"] },
    { id: "C", name: "Set C", contains: ["C"], isRussellSet: false },
    { id: "R", name: "Russell Set R", contains: [], isRussellSet: true },
  ]

  const steps = [
    {
      title: "The Setup",
      description: "Consider the set R = {x : x ∉ x} (the set of all sets that don't contain themselves)",
      highlight: "R",
    },
    {
      title: "The Question",
      description: "Does R contain itself? Let's check both possibilities...",
      highlight: null,
    },
    {
      title: "Case 1: R ∈ R",
      description: "If R is in R, then by definition R should NOT be in R (since R only contains sets that don't contain themselves)",
      highlight: "R",
      contradiction: true,
    },
    {
      title: "Case 2: R ∉ R",
      description: "If R is not in R, then R satisfies the condition to be in R (it doesn't contain itself)",
      highlight: "R",
      contradiction: true,
    },
    {
      title: "The Paradox",
      description: "Either way, we get a contradiction! This is Russell's Paradox - it shows naive set theory is inconsistent.",
      highlight: null,
      showParadox: true,
    },
  ]

  const currentStep = steps[step]

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Russell's Paradox Visualizer</h3>
        <p className="text-sm text-muted-foreground">
          Explore the paradox that threatened the foundations of mathematics.
          The set of all sets that don't contain themselves creates a logical contradiction.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          {steps.map((_, idx) => (
            <span key={idx} className={idx <= step ? "text-primary font-bold" : ""}>
              {idx + 1}
            </span>
          ))}
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Visualization */}
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          {sets.map((set) => {
            const isHighlighted = currentStep.highlight === set.id
            const isRussell = set.isRussellSet
            
            return (
              <motion.div
                key={set.id}
                animate={{
                  scale: isHighlighted ? 1.05 : 1,
                  borderColor: isHighlighted
                    ? "hsl(var(--primary))"
                    : isRussell
                    ? "hsl(var(--destructive))"
                    : "hsl(var(--border))",
                }}
                className={`p-4 rounded-lg border-2 ${
                  isRussell ? "bg-destructive/10" : "bg-muted/30"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold">{set.name}</span>
                  {isRussell && (
                    <span className="text-xs px-2 py-1 bg-destructive/20 rounded-full">
                      {'R = {x : x ∉ x}'}
                    </span>
                  )}
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <p className="mb-1">Contains: {set.contains.length > 0 ? set.contains.join(", ") : "Nothing yet"}</p>
                  
                  <p className="text-xs">
                    {set.contains.includes(set.id) ? (
                      <span className="text-orange-500">⚠ Contains itself</span>
                    ) : (
                      <span className="text-green-500">✓ Does not contain itself</span>
                    )}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`p-4 rounded-lg ${
              currentStep.contradiction
                ? "bg-destructive/10 border border-destructive"
                : currentStep.showParadox
                ? "bg-primary/10 border border-primary"
                : "bg-muted/30"
            }`}
          >
            <h4 className="font-semibold mb-2">{currentStep.title}</h4>
            <p className="text-sm">{currentStep.description}</p>
            
            {currentStep.showParadox && (
              <div className="mt-4 p-3 bg-background rounded text-center">
                <p className="font-mono text-lg">R ∈ R ⇔ R ∉ R</p>
                <p className="text-sm text-muted-foreground mt-2">Contradiction! 💥</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => {
            setStep(Math.max(0, step - 1))
            setShowingAnswer(false)
          }}
          disabled={step === 0}
          className="btn-secondary"
        >
          ← Back
        </button>
        <button
          onClick={() => {
            if (step < steps.length - 1) {
              setStep(step + 1)
            }
          }}
          disabled={step >= steps.length - 1}
          className="btn-primary"
        >
          Next →
        </button>
        <button
          onClick={() => {
            setStep(0)
            setShowingAnswer(false)
          }}
          className="btn-secondary"
        >
          Reset
        </button>
      </div>

      {/* Impact */}
      <div className="p-4 bg-muted/30 rounded-lg">
        <p className="text-sm">
          <strong>Impact:</strong> Russell's paradox showed that naive set theory was inconsistent. 
          This led to the development of axiomatic set theory (ZFC) and type theory to avoid such contradictions.
        </p>
      </div>
    </div>
  )
}
