"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, BookOpen, Home, ChevronDown, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/parts", label: "Contents", icon: BookOpen },
  { href: "/progress", label: "Progress", icon: Trophy },
]

const parts = [
  { id: "part-01", title: "Introduction" },
  { id: "part-02", title: "Origins of Modern Mathematics" },
  { id: "part-03", title: "Mathematical Concepts" },
  { id: "part-04", title: "Branches of Mathematics" },
  { id: "part-05", title: "Theorems and Problems" },
  { id: "part-06", title: "Mathematicians" },
  { id: "part-07", title: "Influence of Mathematics" },
  { id: "part-08", title: "Final Perspectives" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [partsOpen, setPartsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-math-blue to-math-purple 
                            flex items-center justify-center">
              <span className="text-white font-bold text-sm">π</span>
            </div>
            <span className="font-semibold hidden sm:block">PCM Interactive</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link flex items-center gap-2",
                  pathname === item.href && "active"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}

            {/* Parts Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPartsOpen(!partsOpen)}
                className="nav-link flex items-center gap-2"
              >
                Parts
                <ChevronDown className={cn("w-4 h-4 transition-transform", partsOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {partsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-64 bg-card border border-border/50 
                               rounded-xl shadow-xl overflow-hidden"
                  >
                    {parts.map((part) => (
                      <Link
                        key={part.id}
                        href={`/${part.id}`}
                        className="block px-4 py-3 hover:bg-primary/10 transition-colors text-sm"
                        onClick={() => setPartsOpen(false)}
                      >
                        <span className="text-primary font-medium">{part.id.replace("part-", "Part ")}:</span>
                        <span className="ml-2 text-muted-foreground">{part.title}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-background"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-border/50">
                <p className="px-4 text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  Parts
                </p>
                {parts.map((part) => (
                  <Link
                    key={part.id}
                    href={`/${part.id}`}
                    className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-primary">{part.id.replace("part-", "Part ")}:</span>
                    <span className="ml-2 text-muted-foreground">{part.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
