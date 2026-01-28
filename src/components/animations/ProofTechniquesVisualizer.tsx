"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type ProofType = "direct" | "contradiction" | "induction" | "contrapositive"

interface ProofStep {
  step: number
  description: string
  math?: string
}

const proofs: Record<ProofType, { title: string; description: string; steps: ProofStep[] }> = {
  direct: {
    title: "Direct Proof",
    description: "Assume P is true and deduce Q through logical steps",
    steps: [
      { step: 1, description: "Assume P is true", math: "P" },
      { step: 2, description: "Apply logical deduction", math: "P → A" },
      { step: 3, description: "Continue reasoning", math: "A → B" },
      { step: 4, description: "Arrive at conclusion", math: "B → Q" },
      { step: 5, description: "Therefore Q is true", math: "∴ Q" },
    ],
  },
  contradiction: {
    title: "Proof by Contradiction",
    description: "Assume the opposite and show it leads to a contradiction",
    steps: [
      { step: 1, description: "Assume P is false", math: "¬P" },
      { step: 2, description: "Logical deduction", math: "¬P → A" },
      { step: 3, description: "Continue reasoning", math: "A → B" },
      { step: 4, description: "Reach contradiction", math: "B ∧ ¬B" },
      { step: 5, description: "Therefore P must be true", math: "∴ P" },
    ],
  },
  induction: {
    title: "Proof by Induction",
    description: "Prove base case, then show if true for n, true for n+1",
    steps: [
      { step: 1, description: "Base case: prove P(1)", math: "P(1) ✓" },
      { step: 2, description: "Inductive hypothesis", math: "Assume P(k)" },
      { step: 3, description: "Show P(k) → P(k+1)", math: "P(k) → P(k+1)" },
      { step: 4, description: "By induction...", math: "∀n P(n)" },
      { step: 5, description: "Statement holds for all n", math: "Proved!" },
    ],
  },
  contrapositive: {
    title: "Proof by Contrapositive",
    description: "Prove 'if P then Q' by proving 'if not Q then not P'",
    steps: [
      { step: 1, description: "Original: P → Q", math: "P → Q" },
      { step: 2, description: "Contrapositive: ¬Q → ¬P", math: "¬Q → ¬P" },
      { step: 3, description: "Assume ¬Q", math: "¬Q" },
      { step: 4, description: "Deduce ¬P", math: "¬P" },
      { step: 5, description: "Original statement proved", math: "∴ P → Q" },
    ],
  },
}

export function ProofTechniquesVisualizer() {
  const [selectedProof, setSelectedProof] = useState<ProofType>("direct")
  const [currentStep, setCurrentStep] = useState(0)
  const [showingExample, setShowingExample] = useState(false)
  
  const proof = proofs[selectedProof]
  const currentStepData = proof.steps[currentStep]

  const examples: Record<ProofType, { statement: string; explanation: string }> = {
    direct: {
      statement: "Theorem: If n is even, then n² is even",
      explanation: "Let n = 2k. Then n² = 4k² = 2(2k²), which is even.",
    },
    contradiction: {
      statement: "Theorem: √2 is irrational",
      explanation: "Assume √2 = p/q in lowest terms. Then 2q² = p², so p² is even, so p is even. Let p = 2k. Then 2q² = 4k², so q² = 2k², so q is even. But then p/q is not in lowest terms. Contradiction!",
    },
    induction: {
      statement: "Theorem: 1 + 2 + ... + n = n(n+1)/2",
      explanation: "Base: 1 = 1(2)/2 ✓. Assume true for k. Then 1+...+k+(k+1) = k(k+1)/2 + (k+1) = (k+1)(k+2)/2. ✓",
    },
    contrapositive: {
      statement: "Theorem: If n² is even, then n is even",
      explanation: "Contrapositive: If n is odd, then n² is odd. If n = 2k+1, then n² = 4k²+4k+1 = 2(2k²+2k)+1, which is odd. ✓",
    },
  }

  const reset = () => {
    setCurrentStep(0)
    setShowingExample(false)
  }

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Proof Techniques Explorer</h3>
        <p className="text-sm text-muted-foreground">
          Explore different proof techniques used in mathematics. Select a technique to see how it works step by step.
        </p>
      </div>

      {/* Technique selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {(Object.keys(proofs) as ProofType[]).map((type) => (
          <button
            key={type}
            onClick={() => {
              setSelectedProof(type)
              reset()
            }}
            className={`p-3 rounded-lg text-sm font-medium transition-all ${
              selectedProof === type
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {proofs[type].title}
          </button>
        ))}
      </div>

      {/* Proof visualization */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProof}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-4"
        >
          <div className="p-4 bg-primary/10 rounded-lg">
            <h4 className="font-semibold mb-1">{proof.title}</h4>
            <p className="text-sm text-muted-foreground">{proof.description}</p>
          </div>

          {/* Steps visualization */}
          <div className="space-y-2">
            {proof.steps.map((step, index) => {
              const isActive = index === currentStep
              const isCompleted = index < currentStep
              
              return (
                <motion.div
                  key={step.step}
                  initial={false}
                  animate={{
                    backgroundColor: isActive
                      ? "hsl(var(--primary))"
                      : isCompleted
                      ? "hsl(var(--primary) / 0.2)"
                      : "hsl(var(--muted))",
                    color: isActive ? "white" : "inherit",
                  }}
                  className={`p-3 rounded-lg flex items-center gap-4 transition-all ${
                    isActive ? "shadow-lg" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      isActive
                        ? "bg-white text-primary"
                        : isCompleted
                        ? "bg-primary/20 text-primary"
                        : "bg-muted-foreground/20 text-muted-foreground"
                    }`}
                  >
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{step.description}</p>
                    {step.math && (
                      <p className="text-sm font-mono mt-1 opacity-80">{step.math}</p>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="btn-secondary"
            >
              ← Previous
            </button>
            <button
              onClick={() => {
                if (currentStep < proof.steps.length - 1) {
                  setCurrentStep(currentStep + 1)
                } else {
                  setShowingExample(true)
                }
              }}
              className="btn-primary"
            >
              {currentStep < proof.steps.length - 1 ? "Next Step →" : "See Example"}
            </button>
            <button
              onClick={reset}
              className="btn-secondary"
            >
              Reset
            </button>
          </div>

          {/* Example */}
          <AnimatePresence>
            {showingExample && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-4 bg-muted/30 rounded-lg"
              >
                <p className="font-semibold mb-2">{examples[selectedProof].statement}</p>
                <p className="text-sm text-muted-foreground">{examples[selectedProof].explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
