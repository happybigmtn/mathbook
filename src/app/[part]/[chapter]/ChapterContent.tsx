"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, Trophy, FileText, StickyNote, ChevronLeft } from "lucide-react"
import { getChapterById, getChaptersByPart } from "@/data/chapters"
import { getFullTextChapterById, hasFullText } from "@/data/fullTextChapters"
import {
  CommutativePropertyDemo,
  FunctionVisualizer,
  QuantifierDemo,
  NumberSystemsTimeline,
  EulersFormulaDemo,
  PiVisualization,
  PythagoreanTheoremDemo,
  EuclideanConstructions,
  MathBranchesVisualizer,
  SetOperationsVisualizer,
  NotationEvolution,
  PrimeNumbersVisualizer,
  GeometryTypesVisualizer,
  LimitsAndContinuityVisualizer,
  NumberSystemsVisualizer,
  GroupTheoryVisualizer,
} from "@/components/animations"
import { ExerciseCard } from "@/components/exercises"
import { useProgress } from "@/components/ProgressProvider"
import { FeynmanLayout, FullTextSection } from "@/components/FeynmanLayout"
import { useState } from "react"

const componentMap: Record<string, React.ComponentType> = {
  CommutativePropertyDemo,
  FunctionVisualizer,
  QuantifierDemo,
  NumberSystemsTimeline,
  EulersFormulaDemo,
  PiVisualization,
  PythagoreanTheoremDemo,
  EuclideanConstructions,
  MathBranchesVisualizer,
  SetOperationsVisualizer,
  NotationEvolution,
  PrimeNumbersVisualizer,
  GeometryTypesVisualizer,
  LimitsAndContinuityVisualizer,
  NumberSystemsVisualizer,
  GroupTheoryVisualizer,
}

interface ChapterContentProps {
  partId: string
  chapterId: string
}

export default function ChapterContent({ partId, chapterId }: ChapterContentProps) {
  const chapter = getChapterById(chapterId)
  const fullTextChapter = getFullTextChapterById(chapterId)
  const hasFullTextContent = hasFullText(chapterId)
  const [showFullText, setShowFullText] = useState(true)
  const { userState } = useProgress()

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-medium mb-4">Chapter not found</h1>
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

  // Render full text content with annotations
  const renderFullTextContent = () => {
    if (!fullTextChapter) return null

    return (
      <div className="space-y-0">
        {fullTextChapter.content.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {section.type === "text" && section.fullText ? (
              <FullTextSection
                title={section.title}
                sectionNumber={index + 1}
                annotations={section.annotations}
                content={
                  <div className="prose-content">
                    {section.fullText.split("\n\n").map((paragraph, pIndex) => {
                      // Check for headers/subsections (lines starting with **)
                      if (paragraph.startsWith("**") && paragraph.endsWith("**") && !paragraph.slice(2, -2).includes("**")) {
                        // This is a header like "**The Path to Rigor**"
                        const headerText = paragraph.slice(2, -2)
                        return (
                          <h3 key={pIndex} className="text-xl font-semibold text-foreground/90 mt-8 mb-4">
                            {headerText}
                          </h3>
                        )
                      }
                      
                      // Regular paragraph with markdown-like formatting
                      let formattedText = paragraph
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(/_(.*?)_/g, "<em>$1</em>")
                      
                      return (
                        <p
                          key={pIndex}
                          className="mb-6 leading-relaxed text-muted-foreground text-lg"
                          dangerouslySetInnerHTML={{ __html: formattedText }}
                        />
                      )
                    })}
                  </div>
                }
              />
            ) : section.type === "interactive" && section.component ? (
              <section className="py-8 border-b border-border/30 last:border-b-0">
                <div className="mb-6">
                  <span className="meta-text mb-2 block">
                    Section {index + 1}
                  </span>
                  <h2 className="text-2xl font-serif font-medium text-foreground/90">{section.title}</h2>
                </div>
                <FeynmanLayout annotations={section.annotations}>
                  <div className="w-full">
                    {(() => {
                      const Component = componentMap[section.component]
                      return Component ? <Component /> : null
                    })()}
                  </div>
                </FeynmanLayout>
              </section>
            ) : null}
          </motion.div>
        ))}
      </div>
    )
  }

  // Render summary content (original format)
  const renderSummaryContent = () => {
    return (
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
              <div className="prose-content">
                {section.content.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="mb-6 leading-relaxed text-muted-foreground whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {section.type === "interactive" && section.component && (
              <div className="mt-6">
                {(() => {
                  const Component = componentMap[section.component]
                  return Component ? <Component /> : null
                })()}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className={`mx-auto transition-all duration-300 ${showFullText && hasFullTextContent ? 'max-w-6xl' : 'max-w-3xl'}`}>
        
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
        >
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="text-border">/</span>
          <Link href={`/${partId}`} className="hover:text-foreground transition-colors">
            {chapter.partTitle}
          </Link>
          <span className="text-border">/</span>
          <span className="text-foreground/80">{chapter.title}</span>
        </motion.div>

        {/* Main Content Card */}
        <div className="content-card">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 pb-8 border-b border-border/30"
          >
            <div className="text-center">
              <div className="meta-text mb-4">
                {chapter.partTitle}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground/90 mb-4">
                {chapter.title}
              </h1>
              
              {chapter.description && (
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {chapter.description}
                </p>
              )}

              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="font-mono text-xs">
                  {chapter.content.length} sections
                </span>
                <span className="text-border">·</span>
                <span className="font-mono text-xs">
                  {chapter.exercises.length} exercises
                </span>
              </div>
            </div>

            {/* Progress bar */}
            {totalExercises > 0 && (
              <div className="mt-8 flex items-center gap-4 max-w-md mx-auto">
                <div className="flex-1 progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Trophy className="w-4 h-4 text-muted-foreground" />
                  <span className="font-mono text-xs">
                    {completedExercises}/{totalExercises}
                  </span>
                </div>
              </div>
            )}

            {/* View Toggle */}
            {hasFullTextContent && (
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="flex items-center gap-1 bg-muted rounded-sm p-1">
                  <button
                    onClick={() => setShowFullText(false)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-sm transition-all text-sm
                               ${!showFullText 
                                 ? 'bg-card text-foreground shadow-sm' 
                                 : 'text-muted-foreground hover:text-foreground'
                               }`}
                  >
                    <StickyNote className="w-4 h-4" />
                    Summary
                  </button>
                  <button
                    onClick={() => setShowFullText(true)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-sm transition-all text-sm
                               ${showFullText 
                                 ? 'bg-card text-foreground shadow-sm' 
                                 : 'text-muted-foreground hover:text-foreground'
                               }`}
                  >
                    <FileText className="w-4 h-4" />
                    Full Text
                  </button>
                </div>
              </div>
            )}
          </motion.div>

          {/* Content */}
          <div className="prose-content">
            {showFullText && hasFullTextContent ? renderFullTextContent() : renderSummaryContent()}
          </div>

          {/* End marker */}
          <div className="mt-12 pt-8 border-t border-border/30 text-center">
            <span className="meta-text">╌╌ END ╌╌</span>
          </div>
        </div>

        {/* Exercises */}
        {chapter.exercises.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <div className="content-card">
              <h2 className="subsection-title flex items-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5 text-muted-foreground" />
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
            </div>
          </motion.div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row justify-between gap-4"
        >
          {prevChapter ? (
            <Link
              href={`/${partId}/${prevChapter.id}`}
              className="btn-secondary"
            >
              <ChevronLeft className="w-4 h-4" />
              <div className="flex flex-col items-start">
                <span className="text-xs text-muted-foreground">Previous</span>
                <span className="font-medium">{prevChapter.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextChapter ? (
            <Link
              href={`/${partId}/${nextChapter.id}`}
              className="btn-primary sm:flex-row-reverse"
            >
              <ArrowRight className="w-4 h-4" />
              <div className="flex flex-col items-start sm:items-end">
                <span className="text-xs text-muted-foreground">Next</span>
                <span className="font-medium">{nextChapter.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </motion.div>
      </div>
    </div>
  )
}
