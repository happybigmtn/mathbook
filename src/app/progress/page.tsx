"use client"

import { motion } from "framer-motion"
import { Trophy, Target, Flame, Star, BookOpen, CheckCircle } from "lucide-react"
import { useProgress } from "@/components/ProgressProvider"
import { chapters } from "@/data/chapters"

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
      label: "Total Points",
      value: userState.totalPoints,
      icon: Trophy,
      color: "text-yellow-500",
    },
    {
      label: "Exercises Completed",
      value: `${completedExercises}/${totalExercises}`,
      icon: CheckCircle,
      color: "text-math-green",
    },
    {
      label: "Chapters Started",
      value: Object.keys(userState.progress).length,
      icon: BookOpen,
      color: "text-math-blue",
    },
    {
      label: "Current Streak",
      value: `${userState.streak} days`,
      icon: Flame,
      color: "text-orange-500",
    },
  ]

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Your Progress</h1>
          <p className="body-text max-w-xl mx-auto">
            Track your journey through mathematics. Every exercise completed brings you closer to mastery.
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
              <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
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
            <Star className="w-6 h-6 text-yellow-500" />
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
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    achievement.unlocked
                      ? "bg-gradient-to-br from-yellow-400 to-orange-500"
                      : "bg-muted"
                  }`}
                >
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">{achievement.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
                {achievement.unlocked && (
                  <CheckCircle className="w-5 h-5 text-math-green ml-auto" />
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
          className="concept-card glow-effect text-center"
        >
          <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-xl font-semibold mb-2">Keep Learning!</h2>
          <p className="text-muted-foreground mb-4">
            You&apos;re making great progress. Continue your journey through mathematics.
          </p>
          <a href="/part-01/what-is-mathematics-about" className="btn-primary">
            Continue Learning
          </a>
        </motion.div>
      </div>
    </div>
  )
}
