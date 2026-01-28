"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function CommutativePropertyDemo() {
  const [rows, setRows] = useState(4)
  const [cols, setCols] = useState(7)

  const total = rows * cols

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Visual Proof: a × b = b × a</h3>
        <p className="text-sm text-muted-foreground">
          Adjust the grid dimensions. Notice how the total count stays the same 
          whether you count by rows or columns.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Controls */}
        <div className="space-y-4 w-full md:w-48">
          <div>
            <label className="text-sm font-medium mb-2 block">Rows (a): {rows}</label>
            <input
              type="range"
              min="1"
              max="10"
              value={rows}
              onChange={(e) => setRows(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Columns (b): {cols}</label>
            <input
              type="range"
              min="1"
              max="10"
              value={cols}
              onChange={(e) => setCols(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>
          <div className="pt-4 border-t border-border">
            <div className="text-center">
              <span className="text-2xl font-mono">
                {rows} × {cols} = {total}
              </span>
            </div>
            <div className="text-center mt-2">
              <span className="text-2xl font-mono text-muted-foreground">
                {cols} × {rows} = {total}
              </span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="flex-1 flex justify-center">
          <div 
            className="grid gap-1 p-4 bg-black/20 rounded-lg"
            style={{ 
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
            }}
          >
            {Array.from({ length: total }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.01 }}
                className="w-8 h-8 rounded bg-gradient-to-br from-math-blue to-math-purple"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-6 p-4 bg-primary/10 rounded-lg">
        <p className="text-sm">
          <strong>Why this works:</strong> Imagine counting the squares row by row: 
          you get {rows} rows of {cols} = {total}. Now count column by column: 
          you get {cols} columns of {rows} = {total}. Both methods count the same squares!
        </p>
      </div>
    </div>
  )
}
