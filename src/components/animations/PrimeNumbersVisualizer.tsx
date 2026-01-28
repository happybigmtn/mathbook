"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface PrimeData {
  n: number
  isPrime: boolean
  factors: number[]
}

export function PrimeNumbersVisualizer() {
  const [maxNumber, setMaxNumber] = useState(50)
  const [hoveredNumber, setHoveredNumber] = useState<number | null>(null)
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null)

  // Sieve of Eratosthenes
  const generatePrimes = (n: number): boolean[] => {
    const isPrime = new Array(n + 1).fill(true)
    isPrime[0] = isPrime[1] = false
    
    for (let i = 2; i * i <= n; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
          isPrime[j] = false
        }
      }
    }
    return isPrime
  }

  const getFactors = (n: number): number[] => {
    const factors: number[] = []
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) factors.push(i)
    }
    return factors
  }

  const isPrimeArray = generatePrimes(maxNumber)
  const primes = isPrimeArray.map((isP, i) => ({ n: i, isPrime: isP, factors: getFactors(i) }))
    .filter((_, i) => i > 1)

  const selectedData = selectedNumber ? primes[selectedNumber - 2] : null

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Prime Numbers Explorer</h3>
        <p className="text-sm text-muted-foreground">
          Prime numbers are the building blocks of all integers. Click any number to see its factors.
        </p>
      </div>

      {/* Controls */}
      <div className="mb-6">
        <label className="text-sm font-medium mb-2 block">
          Range: 2 to {maxNumber}
        </label>
        <input
          type="range"
          min="20"
          max="100"
          step="10"
          value={maxNumber}
          onChange={(e) => {
            setMaxNumber(Number(e.target.value))
            setSelectedNumber(null)
          }}
          className="w-full accent-primary"
        />
      </div>

      {/* Prime count */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Primes found: <strong>{primes.filter(p => p.isPrime).length}</strong>
        </span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-primary"></div>
            <span className="text-xs">Prime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-muted"></div>
            <span className="text-xs">Composite</span>
          </div>
        </div>
      </div>

      {/* Number grid */}
      <div className="grid grid-cols-10 gap-1 mb-6">
        {primes.map((data) => (
          <motion.button
            key={data.n}
            onClick={() => setSelectedNumber(data.n)}
            onMouseEnter={() => setHoveredNumber(data.n)}
            onMouseLeave={() => setHoveredNumber(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`aspect-square rounded-md text-sm font-medium transition-colors ${
              data.isPrime
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            } ${
              selectedNumber === data.n
                ? "ring-2 ring-offset-2 ring-primary"
                : ""
            }`}
          >
            {data.n}
          </motion.button>
        ))}
      </div>

      {/* Selected number details */}
      <div className="p-4 rounded-lg bg-muted/30">
        {selectedData ? (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-lg">Number {selectedData.n}</h4>              
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedData.isPrime
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {selectedData.isPrime ? "Prime" : "Composite"}
              </span>
            </div>
            
            <div className="mb-3">
              <p className="text-sm text-muted-foreground mb-2">Factors:</p>
              <div className="flex flex-wrap gap-2">
                {selectedData.factors.map((factor) => (
                  <span
                    key={factor}
                    className={`px-2 py-1 rounded text-sm ${
                      factor === 1 || factor === selectedData.n
                        ? "bg-muted"
                        : "bg-primary/20 text-primary"
                    }`}
                  >
                    {factor}
                  </span>
                ))}
              </div>
            </div>
            
            {selectedData.isPrime ? (
              <p className="text-sm">
                <strong>{selectedData.n}</strong> is prime—it can only be divided evenly by 1 and itself.
              </p>
            ) : (
              <p className="text-sm">
                <strong>{selectedData.n}</strong> = {selectedData.factors
                  .filter((f) => f !== 1 && f !== selectedData.n)
                  .slice(0, 2)
                  .join(" × ")} (and other factorizations)
              </p>
            )}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-center">
            Click any number above to explore its properties
          </p>
        )}
      </div>

      {/* Key insights */}
      <div className="mt-4 p-4 bg-primary/10 rounded-lg">
        <p className="text-sm">
          <strong>Key insight:</strong> Every composite number can be factored into primes uniquely 
          (Fundamental Theorem of Arithmetic). This makes primes the "atoms" of number theory.
        </p>
      </div>
    </div>
  )
}
