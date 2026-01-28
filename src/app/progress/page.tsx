"use client"

import { motion } from "framer-motion"
import { Trophy, Flame, Star, BookOpen, CheckCircle, Target, ArrowRight } from "lucide-react"
import { useProgress } from "@/components/ProgressProvider"
import { chapters } from "@/data/chapters"
import Link from "next/link"

export default function ProgressPage() {
  const { userState } = useProgress()

  const totalExercises = chapters.reduce(
    (acc, c) => acc + c.exercises.length,
    0
  )
  const completedExercises = Object.values(userState.progress).reduce(
    (acc, p) => acc + p.exercisesCompleted.length,
    0
  )

  const stats = [
    {
      label: "Points",
      value: userState.totalPoints,
      icon: Trophy,
    },
    {
      label: "Completed",
      value: `${completedExercises}/${totalExercises}`,
      icon: CheckCircle,
    },
    {
      label: "Chapters",
      value: Object.keys(userState.progress).length,
      icon: BookOpen,
    },
    {
      label: "Streak",
      value: `${userState.streak}d`,
      icon: Flame,
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="meta-text mb-4">Track Your Journey</p>
          <h1 className="section-title">Your Progress</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every exercise completed brings you closer to mastery.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="concept-card text-center">
              <stat.icon className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
              <p className="text-2xl font-serif font-medium text-foreground/90">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-mono uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="subsection-title flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-muted-foreground" />
            Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "First Steps",
                description: "Complete your first exercise",
                unlocked: completedExercises >= 1,
              },
              {
                name: "Getting Started",
                description: "Complete 5 exercises",
                unlocked: completedExercises >= 5,
              },
              {
                name: "Making Progress",
                description: "Complete 20 exercises",
                unlocked: completedExercises >= 20,
              },
              {
                name: "Dedicated Learner",
                description: "Complete 50 exercises",
                unlocked: completedExercises >= 50,
              },
              {
                name: "Chapter Master",
                description: "Complete all exercises in a chapter",
                unlocked: Object.values(userState.progress).some(
                  (p) => {
                    const chapter = chapters.find((c) => c.id === p.chapterId)
                    return (
                      chapter &&
                      p.exercisesCompleted.length === chapter.exercises.length &&
                      chapter.exercises.length > 0
                    )
                  }
                ),
              },
              {
                name: "Point Collector",
                description: "Earn 100 points",
                unlocked: userState.totalPoints >= 100,
              },
            ].map((achievement) => (
              <div
                key={achievement.name}
                className={`concept-card flex items-center gap-4 ${
                  achievement.unlocked ? "" : "opacity-50"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 ${
                    achievement.unlocked
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Trophy className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground/90">{achievement.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
                {achievement.unlocked && (
                  <CheckCircle className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Continue Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="content-card">
            <Target className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-serif font-medium text-foreground/90 mb-2">Keep Learning</h2>
            <p className="text-muted-foreground mb-6">
              You&apos;re making great progress. Continue your journey through mathematics.
            </p>
            <Link href="/part-01/what-is-mathematics-about" className="btn-primary">
              Continue
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
