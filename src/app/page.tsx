"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const parts = [
  {
    id: "part-01",
    title: "Introduction",
    description: "What is mathematics about? The language, grammar, and fundamental definitions that form the foundation.",
    chapters: 4,
  },
  {
    id: "part-02",
    title: "Origins of Modern Mathematics",
    description: "From numbers to number systems, geometry, algebra, and the development of mathematical rigor.",
    chapters: 7,
  },
  {
    id: "part-03",
    title: "Mathematical Concepts",
    description: "99 essential concepts from the Axiom of Choice to the Zermelo-Fraenkel Axioms.",
    chapters: 99,
  },
  {
    id: "part-04",
    title: "Branches of Mathematics",
    description: "Deep dives into number theory, algebra, geometry, analysis, and more.",
    chapters: 26,
  },
  {
    id: "part-05",
    title: "Theorems and Problems",
    description: "The great theorems and open problems that drive mathematical research.",
    chapters: 35,
  },
  {
    id: "part-06",
    title: "Mathematicians",
    description: "Biographies of the great mathematicians from Pythagoras to Turing.",
    chapters: 96,
  },
]

const features = [
  {
    title: "Interactive Visualizations",
    description: "Beautiful animations that bring mathematical concepts to life",
  },
  {
    title: "Clear Explanations",
    description: "Intuitive descriptions that build true understanding",
  },
  {
    title: "Hands-On Learning",
    description: "Interactive problems with immediate feedback",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="meta-text mb-4">
              An Interactive Edition
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground/90 mb-6 leading-tight">
              The Princeton Companion
              <br />
              <span className="text-muted-foreground">to Mathematics</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              A journey through the beauty of mathematics.
              Visual, intuitive, and engaging.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-16"
          >
            <Link 
              href="/part-01/what-is-mathematics-about" 
              className="btn-primary justify-center"
            >
              Start Learning
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/parts" 
              className="btn-secondary justify-center"
            >
              Browse Contents
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center">
                <h3 className="text-sm font-medium text-foreground/90 mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="section-title text-center">Explore the Contents</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Eight parts covering everything from fundamental concepts to advanced research topics,
              all brought to life with interactive visualizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {parts.map((part, index) => (
              <motion.div
                key={part.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/${part.id}`}>
                  <div className="concept-card h-full group">
                    <div className="flex items-start justify-between mb-3">
                      <span className="font-mono text-xs text-muted-foreground">
                        Part {part.id.replace("part-0", "").replace("part-", "")}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {part.chapters} chapters
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-medium text-foreground/90 mb-2 group-hover:text-primary transition-colors">
                      {part.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {part.description}
                    </p>
                    
                    <div className="mt-4 flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/parts" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all parts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Start Learning CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground/90 mb-4">
              Ready to Begin?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Start with Part I: Introduction and discover what mathematics is really about.
              No prior knowledge required—just curiosity.
            </p>
            <Link href="/part-01/what-is-mathematics-about" className="btn-primary">
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
