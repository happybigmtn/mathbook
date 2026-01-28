"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import type { UserState, Progress } from "@/types"

interface ProgressContextType {
  userState: UserState
  updateProgress: (chapterId: string, progress: Partial<Progress>) => void
  completeExercise: (chapterId: string, exerciseId: string, points: number) => void
  getChapterProgress: (chapterId: string) => Progress | undefined
}

const defaultUserState: UserState = {
  progress: {},
  totalPoints: 0,
  streak: 0,
  achievements: [],
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [userState, setUserState] = useState<UserState>(defaultUserState)

  useEffect(() => {
    const saved = localStorage.getItem("pcm-progress")
    if (saved) {
      setUserState(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("pcm-progress", JSON.stringify(userState))
  }, [userState])

  const updateProgress = (chapterId: string, progress: Partial<Progress>) => {
    setUserState((prev) => ({
      ...prev,
      progress: {
        ...prev.progress,
        [chapterId]: {
          ...prev.progress[chapterId],
          chapterId,
          ...progress,
        } as Progress,
      },
    }))
  }

  const completeExercise = (chapterId: string, exerciseId: string, points: number) => {
    setUserState((prev) => {
      const chapterProgress = prev.progress[chapterId] || {
        chapterId,
        completed: false,
        exercisesCompleted: [],
        lastAccessed: new Date().toISOString(),
        timeSpent: 0,
      }

      if (chapterProgress.exercisesCompleted.includes(exerciseId)) {
        return prev
      }

      return {
        ...prev,
        totalPoints: prev.totalPoints + points,
        progress: {
          ...prev.progress,
          [chapterId]: {
            ...chapterProgress,
            exercisesCompleted: [...chapterProgress.exercisesCompleted, exerciseId],
            lastAccessed: new Date().toISOString(),
          },
        },
      }
    })
  }

  const getChapterProgress = (chapterId: string) => {
    return userState.progress[chapterId]
  }

  return (
    <ProgressContext.Provider
      value={{ userState, updateProgress, completeExercise, getChapterProgress }}
    >
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider")
  }
  return context
}
