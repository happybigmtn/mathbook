"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { getAllParts, getChaptersByPart } from "@/data/chapters"
import { useProgress } from "@/components/ProgressProvider"

export default function PartsPage() {
  const parts = getAllParts()
  const { userState } = useProgress()

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="meta-text mb-4">Table of Contents</p>
          <h1 className="section-title">Eight Parts</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore all eight parts of The Princeton Companion to Mathematics.
            Track your progress as you learn.
          </p>
        </motion.div>

        <div className="space-y-4">
          {parts.map((part, index) => {
            const chapters = getChaptersByPart(part.id)
            const totalExercises = chapters.reduce(
              (acc, c) => acc + c.exercises.length,
              0
            )
            const completedExercises = chapters.reduce((acc, c) => {
              const progress = userState.progress[c.id]
              return acc + (progress?.exercisesCompleted.length || 0)
            }, 0)
            const progressPercentage =
              totalExercises > 0
                ? (completedExercises / totalExercises) * 100
                : 0

            return (
              <motion.div
                key={part.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/${part.id}`}>
                  <div className="concept-card group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <span className="font-mono text-xs text-muted-foreground">
                            Part {part.id.replace("part-0", "").replace("part-", "")}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h2 className="text-lg font-serif font-medium text-foreground/90 mb-1 
                                          group-hover:text-primary transition-colors">
                            {part.title}
                          </h2>
                          <p className="text-sm text-muted-foreground mb-3">
                            {chapters.length} chapters • {totalExercises} exercises
                          </p>
                          {totalExercises > 0 && (
                            <div className="flex items-center gap-3">
                              <div className="w-24 h-1 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-foreground transition-all duration-500"
                                  style={{ width: `${progressPercentage}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground font-mono">
                                {completedExercises}/{totalExercises}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground 
                                               group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
