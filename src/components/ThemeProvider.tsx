"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

type Theme = "light" | "beige" | "dark"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem("theme") as Theme | null
    if (savedTheme) {
      setThemeState(savedTheme)
      applyTheme(savedTheme)
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeState("dark")
      applyTheme("dark")
    }
  }, [])

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement
    
    // Remove existing theme attributes
    root.removeAttribute("data-theme")
    root.classList.remove("dark")
    
    if (newTheme === "dark") {
      root.classList.add("dark")
      root.setAttribute("data-theme", "dark")
    } else if (newTheme === "beige") {
      root.setAttribute("data-theme", "beige")
    } else {
      root.setAttribute("data-theme", "light")
    }
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme)
      applyTheme(newTheme)
    }
  }

  const toggleTheme = () => {
    const themes: Theme[] = ["light", "beige", "dark"]
    const currentIndex = themes.indexOf(theme)
    const nextTheme = themes[(currentIndex + 1) % themes.length]
    setTheme(nextTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  return context
}
