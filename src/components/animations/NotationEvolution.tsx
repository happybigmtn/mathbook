"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface NotationExample {
  id: string
  concept: string
  verbal: string
  modern: string
  latex: string
  history: string
  year: string
}

const examples: NotationExample[] = [
  {
    id: "square-root",
    concept: "Square Root",
    verbal: "The number which when multiplied by itself gives 2",
    modern: "√2",
    latex: "\\sqrt{2}",
    history: "The radical symbol √ was introduced by Christoph Rudolff in 1525",
    year: "1525",
  },
  {
    id: "summation",
    concept: "Sum of Squares",
    verbal: "The sum of the squares of the first n natural numbers",
    modern: "∑ᵢ₌₁ⁿ i²",
    latex: "\\sum_{i=1}^{n} i^2",
    history: "The summation symbol Σ was introduced by Joseph Fourier in 1820",
    year: "1820",
  },
  {
    id: "integral",
    concept: "Definite Integral",
    verbal: "The area under the curve f(x) from a to b",
    modern: "∫ₐᵇ f(x) dx",
    latex: "\\int_{a}^{b} f(x) \\, dx",
    history: "The integral symbol ∫ was introduced by Gottfried Leibniz in 1675, based on the Latin word 'summa'",
    year: "1675",
  },
  {
    id: "limit",
    concept: "Limit",
    verbal: "The value that f(x) approaches as x approaches a",
    modern: "limₓ→ₐ f(x)",
    latex: "\\lim_{x \\to a} f(x)",
    history: "The modern limit notation was developed by Karl Weierstrass in the 1870s",
    year: "1870s",
  },
  {
    id: "infinity",
    concept: "Infinity",
    verbal: "A quantity without bound or end",
    modern: "∞",
    latex: "\\infty",
    history: "The infinity symbol ∞ was introduced by John Wallis in 1655, possibly representing a Mobius strip",
    year: "1655",
  },
  {
    id: "pi",
    concept: "Pi",
    verbal: "The ratio of a circle's circumference to its diameter",
    modern: "π",
    latex: "\\pi",
    history: "The Greek letter π was first used by William Jones in 1706, popularized by Euler",
    year: "1706",
  },
]

export function NotationEvolution() {
  const [selectedExample, setSelectedExample] = useState<NotationExample>(examples[0])
  const [showComparison, setShowComparison] = useState(true)

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">The Power of Notation</h3>
        <p className="text-sm text-muted-foreground">
          Mathematical notation transforms complex ideas into compact, elegant forms.
          Select an example to see the evolution from words to symbols.
        </p>
      </div>

      {/* Example selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {examples.map((ex) => (
          <button
            key={ex.id}
            onClick={() => setSelectedExample(ex)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedExample.id === ex.id
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {ex.concept}
          </button>
        ))}
      </div>

      {/* Comparison view */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedExample.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-4"
        >
          {/* Verbal description */}
          <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Words
              </span>
              <span className="text-xs text-muted-foreground">({selectedExample.year})</span>
            </div>
            <p className="text-sm italic">"{selectedExample.verbal}"</p>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 md:rotate-0" />
          </div>

          {/* Modern notation */}
          <div className="p-6 rounded-lg bg-primary/10 border-2 border-primary/50">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-primary">
                Symbolic Notation
              </span>
            </div>
            <div className="text-4xl md:text-5xl font-serif text-center py-4">
              {selectedExample.modern}
            </div>
            <div className="text-center">
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {showComparison ? "Hide LaTeX" : "Show LaTeX"}
              </button>
            </div>
            
            <AnimatePresence>
              {showComparison && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-primary/20"
                >
                  <p className="text-xs text-muted-foreground mb-2">LaTeX code:</p>
                  <code className="text-sm bg-background px-3 py-2 rounded block font-mono">
                    {selectedExample.latex}
                  </code>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* History */}
          <div className="p-4 rounded-lg bg-muted/30">
            <p className="text-sm">
              <span className="font-semibold">Historical note:</span>{" "}
              {selectedExample.history}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Summary */}
      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
        <p className="text-sm">
          <strong>Why notation matters:</strong> Good notation doesn't just save space—it shapes how we think.
          The right notation suggests the right generalizations and reveals hidden patterns.
        </p>
      </div>
    </div>
  )
}
