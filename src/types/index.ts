export interface Chapter {
  id: string
  title: string
  description: string
  part: string
  partTitle: string
  order: number
  content: Section[]
  exercises: Exercise[]
  prerequisites?: string[]
}

export interface Section {
  id: string
  title: string
  type: 'text' | 'interactive' | 'animation' | 'exercise' | 'manim'
  content: string
  component?: string
  animation?: string
  data?: unknown
}

export interface Exercise {
  id: string
  title: string
  difficulty: 'easy' | 'medium' | 'hard'
  type: 'multiple-choice' | 'numerical' | 'proof' | 'interactive'
  question: string
  options?: string[]
  answer: string | number
  hint: string
  explanation: string
  points: number
}

export interface Progress {
  chapterId: string
  completed: boolean
  exercisesCompleted: string[]
  lastAccessed: string
  timeSpent: number
}

export interface UserState {
  progress: Record<string, Progress>
  totalPoints: number
  streak: number
  achievements: string[]
}

export interface Mathematician {
  id: string
  name: string
  birthYear: number
  deathYear?: number
  nationality: string
  field: string[]
  biography: string
  contributions: string[]
  famousFor: string
  timeline: TimelineEvent[]
}

export interface TimelineEvent {
  year: number
  title: string
  description: string
}

export interface Concept {
  id: string
  name: string
  category: string
  definition: string
  intuition: string
  examples: Example[]
  visualization?: string
  related: string[]
}

export interface Example {
  title: string
  description: string
  visual?: string
}

export interface Theorem {
  id: string
  name: string
  statement: string
  proof?: string
  significance: string
  applications: string[]
  history: string
}

export interface Annotation {
  id: string
  type: 'visual' | 'analogy' | 'note' | 'warning' | 'deep-dive'
  content: string
}

export interface FullTextSection {
  id: string
  title: string
  type: 'text' | 'interactive' | 'animation' | 'exercise' | 'manim'
  content: string
  fullText?: string
  annotations?: Annotation[]
  component?: string
  animation?: string
  data?: unknown
}

export interface FullTextChapter extends Chapter {
  content: FullTextSection[]
}

export interface FeynmanSection {
  id: string
  title: string
  type: 'text' | 'interactive' | 'animation'
  content: string
  component?: string
  data?: unknown
}

export interface FeynmanChapter {
  id: string
  title: string
  description: string
  part: string
  partTitle: string
  order: number
  content: FeynmanSection[]
}
