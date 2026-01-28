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
  visual: "border-cobalt-500/40 bg-cobalt-500/5",
  analogy: "border-primary/40 bg-primary/5",
  note: "border-muted-foreground/30 bg-muted/30",
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
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 ${className}`}>
      {/* Main Content - Left Column */}
      <div className="lg:col-span-8">
        <div className="prose-content">
          {children}
        </div>
      </div>

      {/* Annotations - Right Column */}
      <div className="lg:col-span-4">
        <div className="sticky top-24 space-y-4">
          <h3 className="meta-text mb-4">
            Annotations
          </h3>
          
          {validAnnotations.length === 0 ? (
            <div className="text-muted-foreground text-sm italic p-4 border border-dashed border-border/50 rounded-sm">
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
                  className={`p-4 rounded-sm border-l-2 ${annotationStyles[annotation.type]} text-sm leading-relaxed`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                    <div>
                      <span className="meta-text block mb-1">
                        {typeLabels[annotation.type]}
                      </span>
                      <span className="text-muted-foreground">{annotation.content}</span>
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
    <section className="py-8 border-b border-border/30 last:border-b-0">
      <div className="mb-6">
        {sectionNumber && (
          <span className="meta-text mb-2 block">
            Section {sectionNumber}
          </span>
        )}
        <h2 className="text-2xl font-serif font-medium text-foreground/90">{title}</h2>
      </div>
      
      <FeynmanLayout annotations={annotations}>
        {content}
      </FeynmanLayout>
    </section>
  )
}

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="bg-primary/10 text-primary px-1 rounded">
      {children}
    </span>
  )
}

export function Definition({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="my-6 p-4 bg-muted/50 border-l-2 border-primary rounded-r-sm">
      <div className="meta-text mb-1">Definition</div>
      {term && <div className="font-medium text-foreground/90 mb-2">{term}</div>}
      <div className="text-muted-foreground">{children}</div>
    </div>
  )
}

export function TheoremBox({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="my-6 p-4 bg-muted/30 border-l-2 border-foreground/50 rounded-r-sm">
      <div className="meta-text mb-2">{title || "Theorem"}</div>
      <div className="text-foreground/90">{children}</div>
    </div>
  )
}
