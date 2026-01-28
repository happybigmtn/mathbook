"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface GroupElement {
  id: string
  name: string
  symbol: string
  description: string
}

const triangleSymmetries: GroupElement[] = [
  { id: "e", name: "Identity", symbol: "e", description: "Do nothing" },
  { id: "r1", name: "Rotate 120°", symbol: "r", description: "Rotate counterclockwise by 120°" },
  { id: "r2", name: "Rotate 240°", symbol: "r²", description: "Rotate counterclockwise by 240°" },
  { id: "s1", name: "Flip over 1", symbol: "s₁", description: "Flip over altitude through vertex 1" },
  { id: "s2", name: "Flip over 2", symbol: "s₂", description: "Flip over altitude through vertex 2" },
  { id: "s3", name: "Flip over 3", symbol: "s₃", description: "Flip over altitude through vertex 3" },
]

// Multiplication table for D₃ (dihedral group of order 6)
const multiplicationTable: Record<string, Record<string, string>> = {
  e: { e: "e", r1: "r1", r2: "r2", s1: "s1", s2: "s2", s3: "s3" },
  r1: { e: "r1", r1: "r2", r2: "e", s1: "s3", s2: "s1", s3: "s2" },
  r2: { e: "r2", r1: "e", r2: "r1", s1: "s2", s2: "s3", s3: "s1" },
  s1: { e: "s1", r1: "s2", r2: "s3", s1: "e", s2: "r1", s3: "r2" },
  s2: { e: "s2", r1: "s3", r2: "s1", s1: "r2", s2: "e", s3: "r1" },
  s3: { e: "s3", r1: "s1", r2: "s2", s1: "r1", s2: "r2", s3: "e" },
}

export function GroupTheoryVisualizer() {
  const [selectedA, setSelectedA] = useState<string>("e")
  const [selectedB, setSelectedB] = useState<string>("e")
  const [showCayleyTable, setShowCayleyTable] = useState(false)
  
  const result = multiplicationTable[selectedA]?.[selectedB] || "e"
  const elementA = triangleSymmetries.find((el) => el.id === selectedA)!
  const elementB = triangleSymmetries.find((el) => el.id === selectedB)!
  const elementResult = triangleSymmetries.find((el) => el.id === result)!

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Group Theory: Symmetries of a Triangle</h3>
        <p className="text-sm text-muted-foreground">
          Explore the dihedral group D₃—the six symmetries of an equilateral triangle.
          Select two operations to see how they compose.
        </p>
      </div>

      {/* Triangle visualization */}
      <div className="mb-6 flex justify-center">
        <svg width="200" height="180" viewBox="0 0 200 180">
          {/* Triangle */}
          <polygon
            points="100,20 180,160 20,160"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          
          {/* Vertex labels */}
          <text x="100" y="15" textAnchor="middle" fontSize="14" fill="hsl(var(--primary))">1</text>
          <text x="185" y="170" textAnchor="middle" fontSize="14" fill="hsl(var(--primary))">2</text>
          <text x="15" y="170" textAnchor="middle" fontSize="14" fill="hsl(var(--primary))">3</text>
          
          {/* Rotation arrows */}
          {(selectedA === "r1" || selectedA === "r2") && (
            <>
              <path
                d="M 130 60 Q 150 90 130 120"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
              <text x="160" y="90" fontSize="12" fill="hsl(var(--primary))">
                {selectedA === "r1" ? "120°" : "240°"}
              </text>
            </>
          )}
          
          {/* Reflection lines */}
          {(selectedA.startsWith("s")) && (
            <line
              x1={selectedA === "s1" ? "100" : selectedA === "s2" ? "140" : "60"}
              y1={selectedA === "s1" ? "20" : "160"}
              x2={selectedA === "s1" ? "100" : selectedA === "s2" ? "100" : "140"}
              y2={selectedA === "s1" ? "160" : "90"}
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          )}
          
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="hsl(var(--primary))" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Operation selector */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm font-medium mb-2">First operation (a):</p>
          <div className="grid grid-cols-3 gap-2">
            {triangleSymmetries.map((el) => (
              <button
                key={el.id}
                onClick={() => setSelectedA(el.id)}
                className={`p-2 rounded text-sm font-mono transition-all ${
                  selectedA === el.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
                title={el.description}
              >
                {el.symbol}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2">Second operation (b):</p>
          <div className="grid grid-cols-3 gap-2">
            {triangleSymmetries.map((el) => (
              <button
                key={el.id}
                onClick={() => setSelectedB(el.id)}
                className={`p-2 rounded text-sm font-mono transition-all ${
                  selectedB === el.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
                title={el.description}
              >
                {el.symbol}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      <motion.div
        key={result}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="p-4 bg-primary/10 rounded-lg mb-4"
      >
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">Composition:</p>
          <div className="flex items-center justify-center gap-3 text-2xl font-mono">
            <span>{elementA.symbol}</span>
            <span className="text-muted-foreground">∘</span>
            <span>{elementB.symbol}</span>
            <span className="text-muted-foreground">=</span>
            <span className="font-bold text-primary">{elementResult.symbol}</span>
          </div>          
          <p className="text-sm mt-2">
            {elementA.name} followed by {elementB.name} = {elementResult.name}
          </p>
        </div>
      </motion.div>

      {/* Cayley Table Toggle */}
      <div className="mb-4">
        <button
          onClick={() => setShowCayleyTable(!showCayleyTable)}
          className="text-sm text-primary hover:underline"
        >
          {showCayleyTable ? "Hide" : "Show"} Cayley Table (Multiplication Table)
        </button>
      </div>

      {/* Cayley Table */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          showCayleyTable ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="p-2 text-left">∘</th>
                {triangleSymmetries.map((el) => (
                  <th key={el.id} className="p-2 text-center font-mono">{el.symbol}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {triangleSymmetries.map((rowEl) => (
                <tr key={rowEl.id}>
                  <th className="p-2 text-left font-mono">{rowEl.symbol}</th>
                  {triangleSymmetries.map((colEl) => {
                    const cellResult = multiplicationTable[rowEl.id][colEl.id]
                    const isSelected = rowEl.id === selectedA && colEl.id === selectedB
                    return (
                      <td
                        key={colEl.id}
                        className={`p-2 text-center font-mono ${
                          isSelected ? "bg-primary text-primary-foreground rounded" : ""
                        }`}
                      >
                        {triangleSymmetries.find((e) => e.id === cellResult)?.symbol}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key insights */}
      <div className="mt-4 p-4 bg-muted/30 rounded-lg">
        <p className="text-sm">
          <strong>Key insight:</strong> Notice that:
        </p>
        <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside">
          <li>e acts as identity: e ∘ a = a ∘ e = a for all a</li>
          <li>Every element has an inverse</li>
          <li>The operation is associative: (a ∘ b) ∘ c = a ∘ (b ∘ c)</li>
          <li>This group has 6 elements (order 6)</li>
        </ul>
      </div>
    </div>
  )
}
