"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Trophy } from "lucide-react"
import { getChapterById, getChaptersByPart } from "@/data/chapters"
import {
  CommutativePropertyDemo,
  FunctionVisualizer,
  QuantifierDemo,
  NumberSystemsTimeline,
  EulersFormulaDemo,
  PiVisualization,
  PythagoreanTheoremDemo,
} from "@/components/animations"
import { ExerciseCard } from "@/components/exercises"
import { useProgress } from "@/components/ProgressProvider"

const componentMap: Record<string, React.ComponentType> = {
  CommutativePropertyDemo,
  FunctionVisualizer,
  QuantifierDemo,
  NumberSystemsTimeline,
  EulersFormulaDemo,
  PiVisualization,
  PythagoreanTheoremDemo,
}

interface ChapterContentProps {
  partId: string
  chapterId: string
}

export default function ChapterContent({ partId, chapterId }: ChapterContentProps) {
  const chapter = getChapterById(chapterId)
  const { userState } = useProgress()

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Chapter not found</h1>
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    )
  }

  const partChapters = getChaptersByPart(partId)
  const currentIndex = partChapters.findIndex((c) => c.id === chapterId)
  const prevChapter = currentIndex > 0 ? partChapters[currentIndex - 1] : null
  const nextChapter = currentIndex < partChapters.length - 1 ? partChapters[currentIndex + 1] : null

  const chapterProgress = userState.progress[chapterId]
  const completedExercises = chapterProgress?.exercisesCompleted.length || 0
  const totalExercises = chapter.exercises.length
  const progressPercentage = totalExercises > 0 ? (completedExercises / totalExercises) * 100 : 0

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
        >
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href={`/${partId}`} className="hover:text-foreground transition-colors">
            {chapter.partTitle}
          </Link>
          <span>/</span>
          <span className="text-foreground">{chapter.title}</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-math-blue to-math-purple
                            flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{chapter.partTitle}</p>
              <h1 className="text-3xl md:text-4xl font-bold">{chapter.title}</h1>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">{chapter.description}</p>

          {/* Progress bar */}
          {totalExercises > 0 && (
            <div className="mt-4 flex items-center gap-4">
              <div className="flex-1 progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span>
                  {completedExercises}/{totalExercises} exercises
                </span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Content sections */}
        <div className="space-y-8">
          {chapter.content.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="subsection-title">{section.title}</h2>

              {section.type === "text" && (
                <div className="prose prose-invert max-w-none">
                  {section.content.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="body-text mb-4 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {section.type === "interactive" && section.component && (
                <div className="mt-4">
                  {(() => {
                    const Component = componentMap[section.component]
                    return Component ? <Component /> : null
                  })()}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Exercises */}
        {chapter.exercises.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <h2 className="subsection-title flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-math-green" />
              Exercises
            </h2>
            <p className="text-muted-foreground mb-6">
              Test your understanding with these interactive exercises.
            </p>

            <div className="space-y-4">
              {chapter.exercises.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  exercise={exercise}
                  chapterId={chapterId}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-border flex justify-between"
        >
          {prevChapter ? (
            <Link
              href={`/${partId}/${prevChapter.id}`}
              className="btn-secondary"
            >
              <ArrowLeft className="w-4 h-4" />
              {prevChapter.title}
            </Link>
          ) : (
            <div />
          )}
          {nextChapter ? (
            <Link
              href={`/${partId}/${nextChapter.id}`}
              className="btn-primary"
            >
              {nextChapter.title}
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </motion.div>
      </div>
    </div>
  )
}
