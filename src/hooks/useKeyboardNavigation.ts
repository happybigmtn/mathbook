"use client"

import { useEffect, useCallback } from "react"
import { useRouter, usePathname } from "next/navigation"
import { getChaptersByPart, chapters } from "@/data/chapters"

export function useKeyboardNavigation() {
  const router = useRouter()
  const pathname = usePathname()

  const navigateToChapter = useCallback((direction: "next" | "prev") => {
    // Parse current path
    const pathParts = pathname.split("/").filter(Boolean)
    if (pathParts.length < 2) return // Not in a chapter

    const [partId, chapterId] = pathParts
    const partChapters = getChaptersByPart(partId)
    const currentIndex = partChapters.findIndex((c) => c.id === chapterId)

    if (currentIndex === -1) return

    if (direction === "next" && currentIndex < partChapters.length - 1) {
      const nextChapter = partChapters[currentIndex + 1]
      router.push(`/${partId}/${nextChapter.id}`)
    } else if (direction === "prev" && currentIndex > 0) {
      const prevChapter = partChapters[currentIndex - 1]
      router.push(`/${partId}/${prevChapter.id}`)
    }
  }, [pathname, router])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if not in an input field
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return
      }

      const scrollAmount = window.innerHeight * 0.8

      switch (e.key) {
        // Vim navigation
        case "j":
          e.preventDefault()
          window.scrollBy({ top: 50, behavior: "smooth" })
          break
        case "k":
          e.preventDefault()
          window.scrollBy({ top: -50, behavior: "smooth" })
          break
        case "d":
          if (e.ctrlKey) {
            e.preventDefault()
            window.scrollBy({ top: scrollAmount, behavior: "smooth" })
          }
          break
        case "u":
          if (e.ctrlKey) {
            e.preventDefault()
            window.scrollBy({ top: -scrollAmount, behavior: "smooth" })
          }
          break
        case "g":
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          break
        case "G":
          e.preventDefault()
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
          break

        // Arrow keys for navigation
        case "ArrowRight":
          if (!e.ctrlKey && !e.altKey) {
            e.preventDefault()
            navigateToChapter("next")
          }
          break
        case "ArrowLeft":
          if (!e.ctrlKey && !e.altKey) {
            e.preventDefault()
            navigateToChapter("prev")
          }
          break
        case "ArrowDown":
          e.preventDefault()
          window.scrollBy({ top: 50, behavior: "smooth" })
          break
        case "ArrowUp":
          e.preventDefault()
          window.scrollBy({ top: -50, behavior: "smooth" })
          break

        // Page navigation
        case "PageDown":
        case " ":
          e.preventDefault()
          window.scrollBy({ top: scrollAmount, behavior: "smooth" })
          break
        case "PageUp":
          e.preventDefault()
          window.scrollBy({ top: -scrollAmount, behavior: "smooth" })
          break
        case "Home":
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: "smooth" })
          break
        case "End":
          e.preventDefault()
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
          break

        // Help
        case "?":
          e.preventDefault()
          alert(`Keyboard Shortcuts:

Navigation:
  → / Arrow Right - Next chapter
  ← / Arrow Left - Previous chapter

Scrolling:
  j - Scroll down
  k - Scroll up
  Ctrl+d - Half page down
  Ctrl+u - Half page up
  Space / Page Down - Page down
  Page Up - Page up
  g - Go to top
  G - Go to bottom
  Home - Go to top
  End - Go to bottom

? - Show this help`)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [navigateToChapter])
}
