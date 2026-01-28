"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, BookOpen, CheckCircle } from "lucide-react"
import { getChaptersByPart } from "@/data/chapters"
import { useProgress } from "@/components/ProgressProvider"

export default function PartPage() {
  const chapters = getChaptersByPart("part-01")
  const { userState } = useProgress()

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link 
            href="/parts" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-4 block"
          >
            ← Back to Contents
          </Link>
          <h1 className="section-title">Introduction</h1>
          <p className="body-text">What is mathematics about? The language, grammar, and fundamental definitions that form the foundation of mathematical thinking.</p>
        </motion.div>

        <div className="space-y-4">
          {chapters.length > 0 ? (
            chapters.map((chapter, index) => {
              const progress = userState.progress[chapter.id]
              const completedExercises = progress?.exercisesCompleted.length || 0
              const totalExercises = chapter.exercises.length
              const isCompleted = totalExercises > 0 && completedExercises === totalExercises

              return (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href="/part-01/${chapter.id}">
                    <div className="concept-card group flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          {isCompleted ? (
                            <CheckCircle className="w-5 h-5 text-math-green" />
                          ) : (
                            <BookOpen className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {chapter.order}. {chapter.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {chapter.description}
                          </p>
                          {totalExercises > 0 && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {completedExercises}/{totalExercises} exercises completed
                            </p>
                          )}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary 
                                            group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              )
            })
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="concept-card text-center py-12"
            >
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground">
                This section is being developed. Check back soon for interactive content!
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
