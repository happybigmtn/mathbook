"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BookOpen, ChevronRight } from "lucide-react"
import { getAllParts, getChaptersByPart } from "@/data/chapters"
import { useProgress } from "@/components/ProgressProvider"

const partColors: Record<string, string> = {
  "part-01": "from-blue-500 to-cyan-500",
  "part-02": "from-purple-500 to-pink-500",
  "part-03": "from-orange-500 to-red-500",
  "part-04": "from-green-500 to-emerald-500",
  "part-05": "from-yellow-500 to-amber-500",
  "part-06": "from-indigo-500 to-violet-500",
  "part-07": "from-rose-500 to-pink-500",
  "part-08": "from-teal-500 to-cyan-500",
}

export default function PartsPage() {
  const parts = getAllParts()
  const { userState } = useProgress()

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Table of Contents</h1>
          <p className="body-text max-w-2xl mx-auto">
            Explore all eight parts of The Princeton Companion to Mathematics.
            Track your progress as you learn.
          </p>
        </motion.div>

        <div className="space-y-8">
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
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/${part.id}`}>
                  <div className="concept-card group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${partColors[part.id]} 
                                      flex items-center justify-center flex-shrink-0
                                      group-hover:scale-110 transition-transform`}
                        >
                          <BookOpen className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                            {part.title}
                          </h2>
                          <p className="text-sm text-muted-foreground mb-3">
                            {chapters.length} chapters • {totalExercises} exercises
                          </p>
                          {totalExercises > 0 && (
                            <div className="flex items-center gap-3">
                              <div className="w-32 progress-bar">
                                <div
                                  className="progress-fill"
                                  style={{ width: `${progressPercentage}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground">
                                {completedExercises}/{totalExercises} completed
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary 
                                               group-hover:translate-x-1 transition-all" />
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
