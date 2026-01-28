"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./ThemeToggle"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/parts", label: "Contents" },
  { href: "/progress", label: "Progress" },
]

const parts = [
  { id: "part-01", title: "Introduction", shortTitle: "I" },
  { id: "part-02", title: "Origins", shortTitle: "II" },
  { id: "part-03", title: "Concepts", shortTitle: "III" },
  { id: "part-04", title: "Branches", shortTitle: "IV" },
  { id: "part-05", title: "Theorems", shortTitle: "V" },
  { id: "part-06", title: "Mathematicians", shortTitle: "VI" },
  { id: "part-07", title: "Influence", shortTitle: "VII" },
  { id: "part-08", title: "Perspectives", shortTitle: "VIII" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [partsOpen, setPartsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-xl font-medium text-foreground/90 group-hover:text-foreground transition-colors">
              Princeton Companion
            </span>
            <span className="text-xs text-muted-foreground font-mono hidden sm:inline">
              to Mathematics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm transition-colors relative",
                  pathname === item.href 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-px bg-foreground"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}

            {/* Parts Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPartsOpen(!partsOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground 
                           hover:text-foreground transition-colors"
              >
                Parts
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", partsOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {partsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-56 bg-card border border-border/50 
                               rounded-sm shadow-lg overflow-hidden"
                  >
                    <div className="py-2">
                      <div className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Table of Contents
                      </div>
                      {parts.map((part) => (
                        <Link
                          key={part.id}
                          href={`/${part.id}`}
                          className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                          onClick={() => setPartsOpen(false)}
                        >
                          <span className="font-mono text-xs text-primary w-6">
                            {part.shortTitle}
                          </span>
                          <span className="text-foreground/80">{part.title}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-px h-4 bg-border mx-2" />

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border/30 bg-background"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 text-sm rounded-sm transition-colors",
                    pathname === item.href
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-border/30 mt-4">
                <div className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Table of Contents
                </div>
                {parts.map((part) => (
                  <Link
                    key={part.id}
                    href={`/${part.id}`}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground 
                               hover:bg-muted hover:text-foreground rounded-sm transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-mono text-xs text-primary w-6">
                      {part.shortTitle}
                    </span>
                    {part.title}
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
