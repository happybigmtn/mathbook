"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface Step {
  array: number[]
  comparing?: [number, number]
  swapped?: boolean
  description: string
}

export function AlgorithmVisualizer() {
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90])
  const [steps, setSteps] = useState<Step[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(1000)
  const [algorithm, setAlgorithm] = useState<"bubble" | "selection" | "insertion">("bubble")

  const generateSteps = (algo: string, arr: number[]): Step[] => {
    const steps: Step[] = []
    const workingArray = [...arr]
    
    steps.push({
      array: [...workingArray],
      description: "Initial array",
    })

    if (algo === "bubble") {
      for (let i = 0; i < workingArray.length; i++) {
        for (let j = 0; j < workingArray.length - i - 1; j++) {
          steps.push({
            array: [...workingArray],
            comparing: [j, j + 1],
            description: `Comparing ${workingArray[j]} and ${workingArray[j + 1]}`,
          })
          
          if (workingArray[j] > workingArray[j + 1]) {
            const temp = workingArray[j]
            workingArray[j] = workingArray[j + 1]
            workingArray[j + 1] = temp
            
            steps.push({
              array: [...workingArray],
              comparing: [j, j + 1],
              swapped: true,
              description: `Swapped: ${workingArray[j]} < ${workingArray[j + 1]}`,
            })
          }
        }
      }
    } else if (algo === "selection") {
      for (let i = 0; i < workingArray.length - 1; i++) {
        let minIdx = i
        steps.push({
          array: [...workingArray],
          comparing: [i, minIdx],
          description: `Finding minimum starting from position ${i}`,
        })
        
        for (let j = i + 1; j < workingArray.length; j++) {
          steps.push({
            array: [...workingArray],
            comparing: [minIdx, j],
            description: `Comparing current min ${workingArray[minIdx]} with ${workingArray[j]}`,
          })
          
          if (workingArray[j] < workingArray[minIdx]) {
            minIdx = j
            steps.push({
              array: [...workingArray],
              comparing: [i, minIdx],
              description: `New minimum found: ${workingArray[minIdx]}`,
            })
          }
        }
        
        if (minIdx !== i) {
          const temp = workingArray[i]
          workingArray[i] = workingArray[minIdx]
          workingArray[minIdx] = temp
          
          steps.push({
            array: [...workingArray],
            comparing: [i, minIdx],
            swapped: true,
            description: `Placed ${workingArray[i]} in position ${i}`,
          })
        }
      }
    } else if (algo === "insertion") {
      for (let i = 1; i < workingArray.length; i++) {
        const key = workingArray[i]
        let j = i - 1
        
        steps.push({
          array: [...workingArray],
          comparing: [i, j],
          description: `Inserting ${key} into sorted portion`,
        })
        
        while (j >= 0 && workingArray[j] > key) {
          workingArray[j + 1] = workingArray[j]
          steps.push({
            array: [...workingArray],
            comparing: [j, j + 1],
            description: `Shifted ${workingArray[j]} right`,
          })
          j--
        }
        
        workingArray[j + 1] = key
        steps.push({
          array: [...workingArray],
          swapped: true,
          description: `Inserted ${key} at position ${j + 1}`,
        })
      }
    }

    steps.push({
      array: [...workingArray],
      description: "Array sorted!",
    })

    return steps
  }

  const reset = () => {
    const newSteps = generateSteps(algorithm, array)
    setSteps(newSteps)
    setCurrentStep(0)
    setIsPlaying(false)
  }

  const shuffle = () => {
    const newArray = [...array].sort(() => Math.random() - 0.5)
    setArray(newArray)
    const newSteps = generateSteps(algorithm, newArray)
    setSteps(newSteps)
    setCurrentStep(0)
    setIsPlaying(false)
  }

  useEffect(() => {
    reset()
  }, [algorithm])

  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isPlaying && currentStep < steps.length - 1) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false)
            return prev
          }
          return prev + 1
        })
      }, speed)
    } else if (currentStep >= steps.length - 1) {
      setIsPlaying(false)
    }

    return () => clearInterval(interval)
  }, [isPlaying, currentStep, steps.length, speed])

  const currentStepData = steps[currentStep] || { array: [], description: "" }

  return (
    <div className="bg-card/50 rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Sorting Algorithm Visualizer</h3>
        <p className="text-sm text-muted-foreground">
          Watch how different sorting algorithms work step by step.
          Compare Bubble Sort, Selection Sort, and Insertion Sort.
        </p>
      </div>

      {/* Algorithm selector */}
      <div className="mb-6">
        <label className="text-sm font-medium mb-2 block">Algorithm:</label>
        <div className="flex gap-2">
          {[
            { id: "bubble", name: "Bubble Sort", complexity: "O(n²)" },
            { id: "selection", name: "Selection Sort", complexity: "O(n²)" },
            { id: "insertion", name: "Insertion Sort", complexity: "O(n²)" },
          ].map((algo) => (
            <button
              key={algo.id}
              onClick={() => setAlgorithm(algo.id as any)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                algorithm === algo.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              <div>{algo.name}</div>
              <div className="text-xs opacity-70">{algo.complexity}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Array visualization */}
      <div className="mb-6">
        <div className="flex items-end justify-center gap-1 h-48 bg-muted/20 rounded-lg p-4"
        >
          {currentStepData.array.map((value, index) => {
            const isComparing = currentStepData.comparing?.includes(index)
            const isSwapped = currentStepData.swapped && isComparing
            
            return (
              <motion.div
                key={index}
                layout
                initial={false}
                animate={{
                  height: `${(value / 100) * 100}%`,
                  backgroundColor: isSwapped
                    ? "hsl(var(--primary))"
                    : isComparing
                    ? "hsl(var(--math-orange))"
                    : "hsl(var(--muted-foreground))",
                }}
                transition={{ duration: 0.3 }}
                className="w-8 rounded-t flex items-end justify-center text-xs font-bold pb-1"
                style={{ minHeight: "20px" }}
              >
                <span className="text-white drop-shadow-md">{value}</span>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Step description */}
      <div className="mb-4 p-3 bg-muted/30 rounded-lg">
        <p className="text-sm text-center">
          {currentStepData.description}
        </p>        <p className="text-xs text-muted-foreground text-center mt-1">
          Step {currentStep + 1} of {steps.length}
        </p>
      </div>

      {/* Controls */}
      <div className="space-y-4">
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setCurrentStep(0)}
            disabled={currentStep === 0}
            className="btn-secondary"
          >
            Reset
          </button>
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="btn-secondary"
          >
            ← Back
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="btn-primary min-w-[100px]"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep >= steps.length - 1}
            className="btn-secondary"
          >
            Next →</button>
          <button
            onClick={shuffle}
            className="btn-secondary"
          >
            Shuffle
          </button>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">
            Speed: {speed}ms
          </label>
          <input
            type="range"
            min="200"
            max="2000"
            step="200"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex justify-center gap-4 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-muted-foreground rounded"></div>
          <span>Normal</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-orange-500 rounded"></div>
          <span>Comparing</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-primary rounded"></div>
          <span>Swapped</span>
        </div>
      </div>
    </div>
  )
}
