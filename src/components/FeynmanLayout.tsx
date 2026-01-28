"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Lightbulb, Eye, BookOpen, AlertCircle, Layers } from "lucide-react"

export interface Annotation {
  id: string
  type: "visual" | "analogy" | "note" | "warning" | "deep-dive"
  content: string
}

interface FeynmanLayoutProps {
  children: ReactNode
  annotations?: Annotation[]
  className?: string
}

const annotationIcons = {
  visual: Eye,
  analogy: Layers,
  note: BookOpen,
  warning: AlertCircle,
  "deep-dive": Lightbulb,
}

const annotationStyles = {
  visual: "border-cyan-500/40 bg-cyan-500/5",
  analogy: "border-purple-500/40 bg-purple-500/5",
  note: "border-blue-500/30 bg-blue-500/5",
  warning: "border-red-500/30 bg-red-500/5",
  "deep-dive": "border-amber-500/40 bg-amber-500/5",
}

const typeLabels = {
  visual: "Visual Explainer",
  analogy: "Analogy",
  note: "Note",
  warning: "Important",
  "deep-dive": "Deep Dive",
}

export function FeynmanLayout({ children, annotations = [], className = "" }: FeynmanLayoutProps) {
  // Filter out any old-style annotations
  const validAnnotations = annotations.filter(a => 
    ["visual", "analogy", "note", "warning", "deep-dive"].includes(a.type)
  )

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 ${className}`}>
      {/* Main Content - Left Column */}
      <div className="lg:col-span-8">
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </div>

      {/* Annotations - Right Column */}
      <div className="lg:col-span-4">
        <div className="sticky top-24 space-y-3">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Visual Explainers
          </h3>
          
          {validAnnotations.length === 0 ? (
            <div className="text-muted-foreground text-xs italic">
              No annotations for this section.
            </div>
          ) : (
            validAnnotations.map((annotation, index) => {
              const Icon = annotationIcons[annotation.type]
              return (
                <motion.div
                  key={annotation.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-3 rounded-md border-l-3 ${annotationStyles[annotation.type]} text-sm leading-relaxed`}
                >
                  <div className="flex items-start gap-2">
                     <Icon className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-70" />
                    <div>
                      <span className="font-semibold opacity-70 block mb-1 text-xs uppercase tracking-wide">
                        {typeLabels[annotation.type]}
                      </span>
                      {annotation.content}
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
    <section className="py-6 border-b border-border last:border-b-0">
      <div className="mb-4">
        {sectionNumber && (
          <span className="text-xs text-muted-foreground font-mono mb-1 block">
            §{sectionNumber}
          </span>
        )}
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      
      <FeynmanLayout annotations={annotations}>
        {content}
      </FeynmanLayout>
    </section>
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
    <div className="my-4 p-3 bg-card border border-border rounded-lg">
      <div className="text-xs font-semibold text-math-purple mb-1">Definition</div>
      <div className="font-semibold mb-1">{term}</div>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  )
}

export function TheoremBox({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="my-4 p-3 bg-math-blue/5 border-l-4 border-math-blue rounded-r-lg">
      <div className="text-xs font-semibold text-math-blue mb-1">{title || "Theorem"}</div>
      <div className="text-sm">{children}</div>
    </div>
  )
}
