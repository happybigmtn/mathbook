"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Lightbulb, Eye, BookOpen, AlertCircle, Layers } from "lucide-react"
import { InlineMath, BlockMath } from "react-katex"

export interface Annotation {
  id: string
  type: "visual" | "analogy" | "note" | "warning" | "deep-dive"
  content: string
}

// Component to render text with KaTeX math support
function MathContent({ content }: { content: string }) {
  const parts: Array<{ type: 'text' | 'inline' | 'block'; content: string }> = []
  let remaining = content
  
  while (remaining.length > 0) {
    const blockMatch = remaining.match(/^(.*?)\$\$([\s\S]*?)\$\$/)
    if (blockMatch) {
      if (blockMatch[1]) {
        parts.push({ type: 'text', content: blockMatch[1] })
      }
      parts.push({ type: 'block', content: blockMatch[2].trim() })
      remaining = remaining.slice(blockMatch[0].length)
      continue
    }
    
    const inlineMatch = remaining.match(/^(.*?)\$([^$\n]+?)\$/)
    if (inlineMatch) {
      if (inlineMatch[1]) {
        parts.push({ type: 'text', content: inlineMatch[1] })
      }
      parts.push({ type: 'inline', content: inlineMatch[2] })
      remaining = remaining.slice(inlineMatch[0].length)
      continue
    }
    
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
          const formattedText = part.content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/_(.*?)_/g, '<em>$1</em>')
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

interface AnnotationsListProps {
  annotations: Annotation[]
  className?: string
}

export function AnnotationsList({ annotations = [], className = "" }: AnnotationsListProps) {
  const validAnnotations = annotations.filter(a => 
    ["visual", "analogy", "note", "warning", "deep-dive"].includes(a.type)
  )

  if (validAnnotations.length === 0) return null

  return (
    <div className={`space-y-3 mt-6 ${className}`}>
      <h4 className="meta-text text-xs uppercase tracking-wider">
        Annotations
      </h4>
      
      {validAnnotations.map((annotation, index) => {
        const Icon = annotationIcons[annotation.type]
        return (
          <motion.div
            key={annotation.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`p-3 rounded-sm border-l-2 ${annotationStyles[annotation.type]} text-sm leading-relaxed`}
          >
            <div className="flex items-start gap-2">
              <Icon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-muted-foreground" />
              <div className="flex-1">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">
                  {typeLabels[annotation.type]}
                </span>
                <span className="text-muted-foreground">
                  <MathContent content={annotation.content} />
                </span>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

interface FeynmanLayoutProps {
  children: ReactNode
  className?: string
}

export function FeynmanLayout({ children, className = "" }: FeynmanLayoutProps) {
  return (
    <div className={`prose-content ${className}`}>
      {children}
    </div>
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
