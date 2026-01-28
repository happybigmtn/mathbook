"use client"

import { useState, useRef, useEffect } from "react"
import { Sun, Moon, Coffee, ChevronDown } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { motion, AnimatePresence } from "framer-motion"

const themes = [
  { id: "light", label: "Light", icon: Sun, description: "Clean white" },
  { id: "beige", label: "Beige", icon: Coffee, description: "Warm paper" },
  { id: "dark", label: "Dark", icon: Moon, description: "Deep contrast" },
] as const

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentTheme = themes.find((t) => t.id === theme) || themes[0]
  const CurrentIcon = currentTheme.icon

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 py-1.5 text-muted-foreground hover:text-foreground 
                   transition-colors rounded-sm"
        aria-label="Change theme"
      >
        <CurrentIcon className="w-4 h-4" />
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 bg-card border border-border/50 
                       rounded-sm shadow-lg overflow-hidden z-50"
          >
            {themes.map((t) => {
              const Icon = t.icon
              const isActive = theme === t.id
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors
                             ${isActive 
                               ? "bg-primary/10 text-primary" 
                               : "hover:bg-muted text-foreground"
                             }`}
                >
                  <Icon className="w-4 h-4" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{t.label}</div>
                    <div className="text-xs text-muted-foreground">{t.description}</div>
                  </div>
                  {isActive && (
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
