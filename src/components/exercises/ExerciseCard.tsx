"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X, Lightbulb, HelpCircle } from "lucide-react"
import confetti from "canvas-confetti"
import type { Exercise } from "@/types"
import { useProgress } from "@/components/ProgressProvider"

interface ExerciseCardProps {
  exercise: Exercise
  chapterId: string
}

export function ExerciseCard({ exercise, chapterId }: ExerciseCardProps) {
  const [answer, setAnswer] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [attempts, setAttempts] = useState(0)
  const { completeExercise, userState } = useProgress()

  const isCompleted = userState.progress[chapterId]?.exercisesCompleted.includes(exercise.id)

  const checkAnswer = () => {
    const correct =
      typeof exercise.answer === "number"
        ? Number(answer) === exercise.answer
        : answer.toLowerCase().trim() === exercise.answer.toString().toLowerCase().trim()

    setIsCorrect(correct)
    setAttempts((a) => a + 1)

    if (correct && !isCompleted) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      })
      completeExercise(chapterId, exercise.id, exercise.points)
    }
  }

  const getDifficultyColor = () => {
    switch (exercise.difficulty) {
      case "easy":
        return "text-math-green"
      case "medium":
        return "text-yellow-600"
      case "hard":
        return "text-red-500"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <div className="exercise-card">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-medium text-foreground/90 mb-1">{exercise.title}</h4>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-mono uppercase ${getDifficultyColor()}`}>
              {exercise.difficulty}
            </span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground font-mono">{exercise.points} pts</span>
            {isCompleted && (
              <>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-math-green flex items-center gap-1 font-mono">
                  <Check className="w-3 h-3" /> Done
                </span>
              </>
            )}
          </div>
        </div>
        <button
          onClick={() => setShowHint(!showHint)}
          className="p-2 rounded-sm hover:bg-muted transition-colors"
          title="Show hint"
        >
          <Lightbulb className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{exercise.question}</p>

      {/* Hint */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 p-3 bg-muted/50 rounded-sm border-l-2 border-primary"
          >
            <p className="text-sm flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{exercise.hint}</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Answer input */}
      <div className="flex gap-2 mb-4">
        {exercise.type === "multiple-choice" && exercise.options ? (
          <div className="w-full space-y-2">
            {exercise.options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setAnswer(option)
                  setIsCorrect(null)
                }}
                disabled={isCompleted}
                className={`w-full p-3 text-left rounded-sm border transition-all text-sm
                           ${answer === option
                             ? "border-foreground bg-foreground/5"
                             : "border-border/50 hover:border-foreground/30"
                           } ${isCompleted ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <input
            type="text"
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value)
              setIsCorrect(null)
            }}
            disabled={isCompleted}
            placeholder="Enter your answer..."
            className="flex-1 px-4 py-3 bg-background border border-border/50 rounded-sm 
                       focus:outline-none focus:border-foreground/30 text-sm"
          />
        )}
        <button
          onClick={checkAnswer}
          disabled={!answer || isCompleted}
          className="btn-primary text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Check
        </button>
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {isCorrect !== null && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`p-4 rounded-sm mb-4 border-l-2 ${
              isCorrect
                ? "bg-math-green/10 border-math-green"
                : "bg-red-500/10 border-red-500"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <>
                  <Check className="w-4 h-4 text-math-green" />
                  <span className="font-medium text-math-green text-sm">Correct!</span>
                </>
              ) : (
                <>
                  <X className="w-4 h-4 text-red-500" />
                  <span className="font-medium text-red-500 text-sm">Not quite right</span>
                </>
              )}
            </div>
            {!isCorrect && attempts >= 2 && (
              <button
                onClick={() => setShowExplanation(true)}
                className="text-sm text-primary hover:underline"
              >
                Show explanation
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Explanation */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="p-4 bg-muted/50 rounded-sm border-l-2 border-primary"
          >
            <p className="meta-text mb-1">Explanation</p>
            <p className="text-sm text-muted-foreground">{exercise.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
