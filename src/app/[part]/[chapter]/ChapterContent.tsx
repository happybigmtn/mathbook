"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, Trophy, FileText, StickyNote, ChevronLeft, Maximize2, Minimize2 } from "lucide-react"
import { getChapterById, getChaptersByPart } from "@/data/chapters"
import { getFullTextChapterById, hasFullText } from "@/data/fullTextChapters"
import { getFeynmanChapterById, hasFeynmanContent } from "@/data/feynmanChapters"
import { InlineMath, BlockMath } from "react-katex"
import "katex/dist/katex.min.css"

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
  AlgorithmVisualizer,
  ProofTechniquesVisualizer,
  RussellsParadoxVisualizer,
} from "@/components/animations"
import { ExerciseCard } from "@/components/exercises"
import { useProgress } from "@/components/ProgressProvider"
import { FeynmanLayout, AnnotationsList } from "@/components/FeynmanLayout"
import { ManimVideoPlayer } from "@/components/ManimVideoPlayer"
import { useState } from "react"

// Component to render text with KaTeX math support
function MathContent({ content }: { content: string }) {
  // Split content by math delimiters while preserving them
  const parts: Array<{ type: 'text' | 'inline' | 'block'; content: string }> = []
  let remaining = content
  
  while (remaining.length > 0) {
    // Find block math first (priority over inline)
    const blockMatch = remaining.match(/^(.*?)\$\$([\s\S]*?)\$\$/)
    if (blockMatch) {
      if (blockMatch[1]) {
        parts.push({ type: 'text', content: blockMatch[1] })
      }
      parts.push({ type: 'block', content: blockMatch[2].trim() })
      remaining = remaining.slice(blockMatch[0].length)
      continue
    }
    
    // Find inline math
    const inlineMatch = remaining.match(/^(.*?)\$([^$\n]+?)\$/)
    if (inlineMatch) {
      if (inlineMatch[1]) {
        parts.push({ type: 'text', content: inlineMatch[1] })
      }
      parts.push({ type: 'inline', content: inlineMatch[2] })
      remaining = remaining.slice(inlineMatch[0].length)
      continue
    }
    
    // No more math found
    if (remaining) {
      parts.push({ type: 'text', content: remaining })
    }
    break
  }
  
  return (
    <>
      {parts.map((part, index) => {
        if (part.type === 'inline') {
          return <InlineMath key={index} math={part.content} />
        } else if (part.type === 'block') {
          return <BlockMath key={index} math={part.content} />
        } else {
          // Process markdown-like formatting for text
          const formattedText = part.content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/_(.*?)_/g, '<em>$1</em>')
            // Convert markdown links to HTML links
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
          
          return (
            <span
              key={index}
              dangerouslySetInnerHTML={{ __html: formattedText }}
            />
          )
        }
      })}
    </>
  )
}

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
  AlgorithmVisualizer,
  ProofTechniquesVisualizer,
  RussellsParadoxVisualizer,
}

interface ChapterContentProps {
  partId: string
  chapterId: string
  initialFullText?: string | null
}

export default function ChapterContent({ partId, chapterId, initialFullText }: ChapterContentProps) {
  const chapter = getChapterById(chapterId)
  const fullTextChapter = getFullTextChapterById(chapterId)
  
  const hasFullTextContent = hasFullText(chapterId) || !!initialFullText
  const hasFeynman = hasFeynmanContent(chapterId)
  const [showFullText, setShowFullText] = useState(false)
  const [useFullWidth, setUseFullWidth] = useState(false)
  const { userState } = useProgress()

  // Render verbatim book text (Full Text tab) with annotations
  const renderFullTextContent = () => {
    // If we have loaded content from file, use it
    if (initialFullText) {
      // Remove Title line if present (e.g. "# Title")
      const content = initialFullText.replace(/^# .*?\n+/, "")
      
      return (
        <div className="space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <section className="py-8 border-b border-border/30 last:border-b-0">
              <div className="prose-content">
                {content.split("\n\n").map((paragraph, pIndex) => {
                  if (!paragraph.trim()) return null
                  
                  // Headers
                  if (paragraph.startsWith("#")) {
                     const level = paragraph.match(/^#+/)?.[0].length || 0
                     const text = paragraph.replace(/^#+\s*/, "")
                     const Component = level === 2 ? 'h3' : level === 3 ? 'h4' : 'h2'
                     // Simple mapping, or just use bold
                     return (
                        <h3 key={pIndex} className="text-xl font-semibold text-foreground/90 mt-8 mb-4">
                          {text}
                        </h3>
                     )
                  }

                  return (
                    <p
                      key={pIndex}
                      className="mb-6 leading-relaxed text-muted-foreground text-lg"
                    >
                      <MathContent content={paragraph} />
                    </p>
                  )
                })}
              </div>
              {/* If we have annotations in the static data, show them? 
                  They might not align with the new text, but better than nothing?
                  Actually, existing annotations are linked to specific sections.
                  Since we are replacing sections with one big blob, we might lose context.
                  Let's skip annotations for now or append them at the end.
              */}
            </section>
          </motion.div>
        </div>
      )
    }

    if (!fullTextChapter) return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Full text content coming soon.</p>
      </div>
    )

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
              <section className="py-8 border-b border-border/30 last:border-b-0">
                <div className="mb-6">
                  <span className="meta-text mb-2 block">
                    Section {index + 1}
                  </span>
                  <h2 className="text-2xl font-serif font-medium text-foreground/90">{section.title}</h2>
                </div>
                <div className="prose-content">
                  {section.fullText.split("\n\n").map((paragraph, pIndex) => {
                    // Check for headers/subsections (lines starting with **)
                    if (paragraph.startsWith("**") && paragraph.endsWith("**") && !paragraph.slice(2, -2).includes("**")) {
                      const headerText = paragraph.slice(2, -2)
                      return (
                        <h3 key={pIndex} className="text-xl font-semibold text-foreground/90 mt-8 mb-4">
                          {headerText}
                        </h3>
                      )
                    }
                    
                    // Regular paragraph with KaTeX math support
                    return (
                      <p
                        key={pIndex}
                        className="mb-6 leading-relaxed text-muted-foreground text-lg"
                      >
                        <MathContent content={paragraph} />
                      </p>
                    )
                  })}
                </div>
                {/* Annotations for this section */}
                {section.annotations && section.annotations.length > 0 && (
                  <AnnotationsList annotations={section.annotations} />
                )}
              </section>
            ) : section.type === "interactive" && section.component ? (
              <section className="py-8 border-b border-border/30 last:border-b-0">
                <div className="mb-6">
                  <span className="meta-text mb-2 block">
                    Section {index + 1}
                  </span>
                  <h2 className="text-2xl font-serif font-medium text-foreground/90">{section.title}</h2>
                </div>
                <div className="w-full">
                  {(() => {
                    const Component = componentMap[section.component]
                    return Component ? <Component /> : null
                  })()}
                </div>
                {/* Annotations for this section */}
                {section.annotations && section.annotations.length > 0 && (
                  <AnnotationsList annotations={section.annotations} />
                )}
              </section>
            ) : section.type === "manim" && section.animation ? (
              <section className="py-8 border-b border-border/30 last:border-b-0">
                <div className="mb-6">
                  <span className="meta-text mb-2 block">
                    Section {index + 1}
                  </span>
                  <h2 className="text-2xl font-serif font-medium text-foreground/90">{section.title}</h2>
                </div>
                <div className="w-full">
                  <ManimVideoPlayer 
                    src={`/animations/${section.animation}.webm`}
                    title={section.title}
                    description={section.content}
                  />
                </div>
                {/* Annotations for this section */}
                {section.annotations && section.annotations.length > 0 && (
                  <AnnotationsList annotations={section.annotations} />
                )}
              </section>
            ) : null}
          </motion.div>
        ))}
      </div>
    )
  }

  if (!chapter) {
    if (!initialFullText) {
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

    const titleMatch = initialFullText.match(/^#\\s*(.+)$/m)
    const fallbackTitle = titleMatch ? titleMatch[1].trim() : chapterId.replace(/-/g, " ")

    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-serif font-semibold mb-6">{fallbackTitle}</h1>
          <div className="prose-content">{renderFullTextContent()}</div>
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

  // Render Feynman content (written from scratch, NO annotations, with visualizations)
  const renderFeynmanContent = () => {
    const feynmanChapter = getFeynmanChapterById(chapterId)
    
    if (!feynmanChapter) return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Feynman explanation coming soon.</p>
      </div>
    )

    return (
      <div className="space-y-0">
        {feynmanChapter.content.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {section.type === "text" ? (
              <section className="py-8 border-b border-border/30 last:border-b-0">
                <div className="mb-6">
                  <span className="meta-text mb-2 block">
                    Section {index + 1}
                  </span>
                  <h2 className="text-2xl font-serif font-medium text-foreground/90">{section.title}</h2>
                </div>
                <FeynmanLayout>
                  <div className="prose-content">
                    {section.content.split("\n\n").map((paragraph, pIndex) => {
                      // Check for headers/subsections
                      if (paragraph.startsWith("**") && paragraph.endsWith("**") && !paragraph.slice(2, -2).includes("**")) {
                        const headerText = paragraph.slice(2, -2)
                        return (
                          <h3 key={pIndex} className="text-xl font-semibold text-foreground/90 mt-8 mb-4">
                            {headerText}
                          </h3>
                        )
                      }
                      
                      // Regular paragraph with KaTeX math support
                      return (
                        <p
                          key={pIndex}
                          className="mb-6 leading-relaxed text-muted-foreground text-lg"
                        >
                          <MathContent content={paragraph} />
                        </p>
                      )
                    })}
                  </div>
                </FeynmanLayout>
              </section>
            ) : section.type === "interactive" && section.component ? (
              <section className="py-8 border-b border-border/30 last:border-b-0">
                <div className="mb-6">
                  <span className="meta-text mb-2 block">
                    Section {index + 1}
                  </span>
                  <h2 className="text-2xl font-serif font-medium text-foreground/90">{section.title}</h2>
                </div>
                <div className="w-full">
                  {(() => {
                    const Component = componentMap[section.component]
                    return Component ? <Component /> : null
                  })()}
                </div>
              </section>
            ) : section.type === "manim" && section.animation ? (
              <section className="py-8 border-b border-border/30 last:border-b-0">
                <div className="mb-6">
                  <span className="meta-text mb-2 block">
                    Section {index + 1}
                  </span>
                  <h2 className="text-2xl font-serif font-medium text-foreground/90">{section.title}</h2>
                </div>
                <div className="w-full">
                  <ManimVideoPlayer 
                    src={`/animations/${section.animation}.webm`}
                    title={section.title}
                    description={section.content}
                  />
                </div>
              </section>
            ) : null}
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className={`mx-auto transition-all duration-300 ${useFullWidth ? 'max-w-6xl' : 'max-w-3xl'}`}>
        
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
            {(hasFullTextContent || hasFeynman) && (
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
                    Feynman
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
                
                {/* Width Toggle */}
                <button
                  onClick={() => setUseFullWidth(!useFullWidth)}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  title={useFullWidth ? "Switch to narrow width" : "Switch to full width"}
                >
                  {useFullWidth ? (
                    <>
                      <Minimize2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Narrow</span>
                    </>
                  ) : (
                    <>
                      <Maximize2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Wide</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>

          {/* Content */}
          <div className="prose-content">
            {showFullText ? renderFullTextContent() : renderFeynmanContent()}
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
