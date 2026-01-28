"use client"

import { motion } from "framer-motion"
import { BookOpen, Play, Sparkles, Calculator, Shapes, FunctionSquare } from "lucide-react"
import Link from "next/link"
import { InteractiveHero } from "@/components/InteractiveHero"

const parts = [
  {
    id: "part-01",
    title: "Introduction",
    description: "What is mathematics about? The language, grammar, and fundamental definitions.",
    chapters: 4,
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "part-02",
    title: "Origins of Modern Mathematics",
    description: "From numbers to number systems, geometry, algebra, and the development of rigor.",
    chapters: 7,
    icon: Calculator,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "part-03",
    title: "Mathematical Concepts",
    description: "99 essential concepts from the Axiom of Choice to the Zermelo-Fraenkel Axioms.",
    chapters: 99,
    icon: Shapes,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "part-04",
    title: "Branches of Mathematics",
    description: "Deep dives into number theory, algebra, geometry, analysis, and more.",
    chapters: 26,
    icon: FunctionSquare,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "part-05",
    title: "Theorems and Problems",
    description: "The great theorems and open problems that drive mathematical research.",
    chapters: 35,
    icon: Sparkles,
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: "part-06",
    title: "Mathematicians",
    description: "Biographies of the great mathematicians from Pythagoras to Turing.",
    chapters: 96,
    icon: BookOpen,
    color: "from-indigo-500 to-violet-500",
  },
]

const features = [
  {
    title: "Interactive Visualizations",
    description: "3Blue1Brown-style animations that bring mathematical concepts to life",
    icon: Play,
  },
  {
    title: "Feynman-Style Explanations",
    description: "Clear, intuitive explanations that build true understanding",
    icon: Sparkles,
  },
  {
    title: "Hands-On Exercises",
    description: "Interactive problems that reinforce learning with immediate feedback",
    icon: Calculator,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <InteractiveHero />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">The Princeton Companion</span>
              <br />
              <span className="text-foreground">to Mathematics</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              An interactive journey through the beauty of mathematics.
              <br />
              <span className="text-primary">Visual. Intuitive. Engaging.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/part-01/what-is-mathematics-about" className="btn-primary text-lg">
              <Play className="w-5 h-5" />
              Start Learning
            </Link>
            <Link href="/parts" className="btn-secondary text-lg">
              <BookOpen className="w-5 h-5" />
              Explore Contents
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="concept-card text-center"
              >
                <feature.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parts Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Explore the Contents</h2>
            <p className="body-text max-w-2xl mx-auto">
              Eight parts covering everything from fundamental concepts to advanced research topics,
              all brought to life with interactive visualizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${part.color} 
                                    flex items-center justify-center mb-4 
                                    group-hover:scale-110 transition-transform`}>
                      <part.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{part.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{part.description}</p>
                    <div className="flex items-center text-sm text-primary">
                      <span>{part.chapters} chapters</span>
                      <span className="mx-2">•</span>
                      <span className="group-hover:underline">Explore →</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="concept-card glow-effect"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Start with Part I: Introduction and discover what mathematics is really about.
              No prior knowledge required—just curiosity!
            </p>
            <Link href="/part-01/what-is-mathematics-about" className="btn-primary">
              <Sparkles className="w-5 h-5" />
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
