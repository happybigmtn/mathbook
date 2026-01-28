"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Lightbulb, HelpCircle, BookOpen, AlertCircle } from "lucide-react"

export interface Annotation {
  id: string
  type: "note" | "question" | "insight" | "warning" | "connection"
  content: string
  reference?: string
}

interface FeynmanLayoutProps {
  children: ReactNode
  annotations?: Annotation[]
  className?: string
}

const annotationIcons = {
  note: BookOpen,
  question: HelpCircle,
  insight: Lightbulb,
  warning: AlertCircle,
  connection: Lightbulb,
}

const annotationStyles = {
  note: "border-blue-500/30 bg-blue-500/5",
  question: "border-yellow-500/30 bg-yellow-500/5",
  insight: "border-green-500/30 bg-green-500/5",
  warning: "border-red-500/30 bg-red-500/5",
  connection: "border-purple-500/30 bg-purple-500/5",
}

export function FeynmanLayout({ children, annotations = [], className = "" }: FeynmanLayoutProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 ${className}`}>
      {/* Main Content - Left Column */}
      <div className="lg:col-span-7 xl:col-span-8">
        <div className="prose prose-invert prose-lg max-w-none">
          {children}
        </div>
      </div>

      {/* Annotations - Right Column */}
      <div className="lg:col-span-5 xl:col-span-4">
        <div className="sticky top-24 space-y-4">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Feynman Annotations
          </h3>
          
          {annotations.length === 0 ? (
            <div className="text-muted-foreground text-sm italic">
              No annotations for this section.
            </div>
          ) : (
            annotations.map((annotation, index) => {
              const Icon = annotationIcons[annotation.type]
              return (
                <motion.div
                  key={annotation.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg border-l-4 ${annotationStyles[annotation.type]} backdrop-blur-sm`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-70" />
                    <div className="space-y-2">
                      <div className="text-sm leading-relaxed">
                        {annotation.content}
                      </div>
                      {annotation.reference && (
                        <div className="text-xs text-muted-foreground border-t border-border/50 pt-2 mt-2">
                          Ref: {annotation.reference}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

interface FullTextSectionProps {
  title: string
  content: ReactNode
  annotations?: Annotation[]
  sectionNumber?: number
}

export function FullTextSection({ title, content, annotations, sectionNumber }: FullTextSectionProps) {
  return (
    <section className="py-8 border-b border-border last:border-b-0">
      <div className="mb-6">
        {sectionNumber && (
          <span className="text-sm text-muted-foreground font-mono mb-2 block">
            Section {sectionNumber}
          </span>
        )}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      
      <FeynmanLayout annotations={annotations}>
        {content}
      </FeynmanLayout>
    </section>
  )
}

export function Paragraph({ children, annotation }: { children: ReactNode; annotation?: Annotation }) {
  return (
    <div className="group relative">
      <p className="mb-4 leading-relaxed text-foreground/90">
        {children}
      </p>
      {annotation && (
        <div className="hidden lg:block absolute -right-4 top-0 w-2 h-2 rounded-full bg-math-blue opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </div>
  )
}

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="bg-math-blue/20 text-math-blue px-1 rounded">
      {children}
    </span>
  )
}

export function Definition({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="my-6 p-4 bg-card border border-border rounded-lg">
      <div className="text-sm font-semibold text-math-purple mb-2">Definition</div>
      <div className="font-semibold text-lg mb-2">{term}</div>
      <div className="text-muted-foreground">{children}</div>
    </div>
  )
}

export function TheoremBox({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="my-6 p-4 bg-math-blue/5 border-l-4 border-math-blue rounded-r-lg">
      <div className="text-sm font-semibold text-math-blue mb-2">{title || "Theorem"}</div>
      <div>{children}</div>
    </div>
  )
}
