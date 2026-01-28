import type { Chapter, Mathematician, Concept, Theorem } from "@/types"

export const chapters: Chapter[] = [
  // Part I: Introduction
  {
    id: "what-is-mathematics-about",
    title: "What Is Mathematics About?",
    description: "An exploration of the fundamental nature of mathematics, its main branches, and what mathematicians study.",
    part: "part-01",
    partTitle: "Introduction",
    order: 1,
    content: [
      {
        id: "intro",
        title: "The Nature of Mathematics",
        type: "text",
        content: `
Mathematics is notoriously difficult to define. Unlike biology (the study of living things) or history (the study of the past),
mathematics doesn't have a simple subject matter. Instead, mathematics is better understood by what it does: it finds patterns,
builds structures, and proves truths that are universal and eternal.

The most obvious way to classify mathematics is by its subject matter. The three main branches are:

**Algebra** - The study of structure and symbolic manipulation
**Geometry** - The study of shape, size, and spatial relationships  
**Analysis** - The study of change, continuity, and limits

But this classification is crude. Modern mathematics blurs these boundaries. Algebraic geometry uses algebra to study geometric objects.
Geometric analysis uses geometric intuition to solve analytic problems. The connections between fields are often where the deepest insights lie.
        `,
      },
      {
        id: "algebra-vs-geometry",
        title: "Algebra vs Geometry: A Visual Proof",
        type: "interactive",
        content: "Interactive visualization showing how algebraic identities have geometric interpretations",
        component: "CommutativePropertyDemo",
      },
      {
        id: "questions-mathematicians-ask",
        title: "The Questions Mathematicians Ask",
        type: "text",
        content: `
Another way to understand mathematics is by the kinds of questions mathematicians ask:

1. **Existence**: Does an object with certain properties exist?
2. **Classification**: Can we organize all objects of a certain type?
3. **Structure**: What internal relationships exist within a system?
4. **Transformation**: How do objects change under various operations?
5. **Optimization**: What is the best possible outcome under constraints?

These questions appear across all branches of mathematics, revealing deep unities beneath surface differences.
        `,
      },
    ],
    exercises: [
      {
        id: "ex-1-1",
        title: "Visual Proof",
        difficulty: "easy",
        type: "interactive",
        question: "The commutative property states that a × b = b × a. Use the interactive grid to verify this for a = 4 and b = 7.",
        answer: "28",
        hint: "Count the total number of squares in the grid. Does it matter if you count by rows or columns?",
        explanation: "Whether you arrange 4 rows of 7 or 7 rows of 4, you still have 28 total squares. This visual proof shows why multiplication is commutative.",
        points: 10,
      },
      {
        id: "ex-1-2",
        title: "Classifying Mathematics",
        difficulty: "medium",
        type: "multiple-choice",
        question: "Which branch of mathematics would be most relevant for studying the shape of a soap bubble?",
        options: ["Algebra", "Geometry", "Analysis", "Number Theory"],
        answer: "Geometry",
        hint: "Think about what property of the soap bubble you're studying - its shape or something else?",
        explanation: "The shape of a soap bubble is a geometric problem. Soap bubbles form spheres because spheres minimize surface area for a given volume - a geometric optimization problem.",
        points: 15,
      },
    ],
  },
  {
    id: "language-and-grammar",
    title: "The Language and Grammar of Mathematics",
    description: "Understanding mathematical notation, symbols, and the logical structure of mathematical statements.",
    part: "part-01",
    partTitle: "Introduction",
    order: 2,
    content: [
      {
        id: "mathematical-notation",
        title: "The Power of Notation",
        type: "text",
        content: `
Mathematical notation is one of humanity's greatest inventions. Good notation makes complex ideas simple;
bad notation makes simple ideas complex.

Consider the difference between:
- "The number which when multiplied by itself gives 2" 
- "√2"

Or between:
- "The sum of the squares of the first n natural numbers"
- "∑ᵢ₌₁ⁿ i²"

Notation is not just shorthand - it shapes how we think. The right notation suggests the right generalizations.
        `,
      },
      {
        id: "quantifiers",
        title: "Quantifiers: ∀ and ∃",
        type: "interactive",
        content: "Interactive exploration of universal and existential quantifiers",
        component: "QuantifierDemo",
      },
    ],
    exercises: [
      {
        id: "ex-2-1",
        title: "Reading Quantifiers",
        difficulty: "medium",
        type: "multiple-choice",
        question: "What does ∀x ∃y (y > x) mean in plain English?",
        options: [
          "For every number, there exists a larger number",
          "There exists a number larger than all numbers",
          "All numbers are larger than some number",
          "Some numbers are larger than all numbers",
        ],
        answer: "For every number, there exists a larger number",
        hint: "Read from left to right: 'For all x, there exists a y such that...'",
        explanation: "This statement says that no matter what number x you pick, you can always find a larger number y. This is true for real numbers - there's no largest number.",
        points: 20,
      },
    ],
  },
  {
    id: "fundamental-definitions",
    title: "Some Fundamental Mathematical Definitions",
    description: "Key definitions that every mathematician knows: sets, functions, relations, and more.",
    part: "part-01",
    partTitle: "Introduction",
    order: 3,
    content: [
      {
        id: "sets",
        title: "Sets: The Building Blocks",
        type: "text",
        content: `
A set is a collection of distinct objects. The objects in a set are called its elements.

Notation:
- a ∈ S means "a is an element of S"
- ∅ denotes the empty set
- {x : P(x)} denotes the set of all x satisfying property P

Operations on sets:
- Union: A ∪ B = {x : x ∈ A or x ∈ B}
- Intersection: A ∩ B = {x : x ∈ A and x ∈ B}
- Complement: Aᶜ = {x : x ∉ A}
        `,
      },
      {
        id: "functions",
        title: "Functions: Mappings Between Sets",
        type: "interactive",
        content: "Interactive function visualizer",
        component: "FunctionVisualizer",
      },
    ],
    exercises: [
      {
        id: "ex-3-1",
        title: "Set Operations",
        difficulty: "easy",
        type: "interactive",
        question: "If A = {1, 2, 3} and B = {2, 3, 4}, what is A ∩ B?",
        answer: "{2, 3}",
        hint: "The intersection contains elements that are in BOTH sets.",
        explanation: "A ∩ B contains elements that are in both A and B. The numbers 2 and 3 appear in both sets, so A ∩ B = {2, 3}.",
        points: 10,
      },
    ],
  },
  {
    id: "general-goals",
    title: "The General Goals of Mathematical Research",
    description: "What mathematicians are trying to achieve: solving problems, building theories, and finding connections.",
    part: "part-01",
    partTitle: "Introduction",
    order: 4,
    content: [
      {
        id: "problem-solving",
        title: "The Art of Problem Solving",
        type: "text",
        content: `
Mathematical research has many goals, but they can be broadly categorized:

**1. Solving Specific Problems**
- Fermat's Last Theorem: xⁿ + yⁿ = zⁿ has no solutions for n > 2
- The Four Color Theorem: Any map can be colored with 4 colors
- The Riemann Hypothesis: All non-trivial zeros of ζ(s) have Re(s) = 1/2

**2. Building General Theory**
- Category theory: A unified language for mathematics
- Homology theory: Algebraic tools for studying topology
- Representation theory: Understanding groups through their actions

**3. Finding Connections**
- The Langlands Program: Connecting number theory and representation theory
- Mirror Symmetry: Relating different Calabi-Yau manifolds
- The Atiyah-Singer Index Theorem: Linking analysis and topology
        `,
      },
    ],
    exercises: [],
  },
]

export function getChapterById(id: string): Chapter | undefined {
  return allChapters.find((c) => c.id === id)
}

export function getChaptersByPart(part: string): Chapter[] {
  return allChapters.filter((c) => c.part === part).sort((a, b) => a.order - b.order)
}

export function getAllParts(): { id: string; title: string }[] {
  return [
    { id: "part-01", title: "Introduction" },
    { id: "part-02", title: "Origins of Modern Mathematics" },
    { id: "part-03", title: "Mathematical Concepts" },
    { id: "part-04", title: "Branches of Mathematics" },
    { id: "part-05", title: "Theorems and Problems" },
    { id: "part-06", title: "Mathematicians" },
    { id: "part-07", title: "Influence of Mathematics" },
    { id: "part-08", title: "Final Perspectives" },
  ]
}


// Part II: Origins of Modern Mathematics
export const part02Chapters: Chapter[] = [
  {
    id: "from-numbers-to-number-systems",
    title: "From Numbers to Number Systems",
    description: "The evolution of numbers from counting to complex numbers.",
    part: "part-02",
    partTitle: "Origins of Modern Mathematics",
    order: 1,
    content: [
      {
        id: "natural-numbers",
        title: "Natural Numbers: The Beginning",
        type: "text",
        content: `
The story of mathematics begins with counting. The natural numbers (1, 2, 3, ...) emerged from the fundamental human need to quantify.

But natural numbers have limitations:
- We can't subtract a larger number from a smaller one
- We can't divide 5 by 2 and get a natural number
- We can't solve equations like x + 5 = 3

Each limitation led to the creation of new number systems.
        `,
      },
      {
        id: "number-systems-evolution",
        title: "The Evolution of Number Systems",
        type: "interactive",
        content: "Interactive timeline of number system development",
        component: "NumberSystemsTimeline",
      },
    ],
    exercises: [
      {
        id: "ex-2-1-1",
        title: "Solving Equations",
        difficulty: "easy",
        type: "multiple-choice",
        question: "What is the smallest number system needed to solve x + 5 = 3?",
        options: ["Natural numbers", "Integers", "Rational numbers", "Real numbers"],
        answer: "Integers",
        hint: "The solution is x = -2. Which number system includes negative numbers?",
        explanation: "The equation x + 5 = 3 has solution x = -2, which is an integer but not a natural number. We need the integers to solve this.",
        points: 10,
      },
    ],
  },
  {
    id: "geometry-origins",
    title: "Geometry",
    description: "From Egyptian surveying to Euclidean geometry and beyond.",
    part: "part-02",
    partTitle: "Origins of Modern Mathematics",
    order: 2,
    content: [
      {
        id: "egyptian-geometry",
        title: "Practical Origins",
        type: "text",
        content: `
Geometry began as a practical tool. The word itself comes from Greek: "geo" (earth) + "metron" (measurement).

The Egyptians needed geometry to:
- Redraw field boundaries after Nile floods
- Calculate volumes for granaries
- Build pyramids with precise angles

But it was the Greeks who transformed geometry from a collection of rules into a logical system.
        `,
      },
    ],
    exercises: [],
  },
]

// Part III: Mathematical Concepts (sample)
export const part03Concepts: Chapter[] = [
  {
    id: "euler-identity",
    title: "Euler's Identity",
    description: "The most beautiful equation in mathematics.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 1,
    content: [
      {
        id: "the-identity",
        title: "e^(iπ) + 1 = 0",
        type: "text",
        content: `
Euler's identity is often called the most beautiful equation in mathematics. It connects five fundamental constants:

- e: the base of natural logarithms
- i: the imaginary unit
- π: the ratio of circle's circumference to diameter
- 1: the multiplicative identity
- 0: the additive identity

This identity emerges from Euler's formula: e^(iθ) = cos(θ) + i·sin(θ)
        `,
      },
      {
        id: "visual-proof",
        title: "Visual Understanding",
        type: "interactive",
        content: "Interactive visualization of Euler's formula",
        component: "EulersFormulaDemo",
      },
    ],
    exercises: [
      {
        id: "ex-3-1-1",
        title: "Euler's Formula",
        difficulty: "medium",
        type: "interactive",
        question: "Using Euler's formula e^(iθ) = cos(θ) + i·sin(θ), what is e^(iπ)?",
        answer: "-1",
        hint: "Substitute θ = π. What are cos(π) and sin(π)?",
        explanation: "e^(iπ) = cos(π) + i·sin(π) = -1 + i·0 = -1. Therefore e^(iπ) + 1 = 0.",
        points: 20,
      },
    ],
  },
]


// Update the component map in the chapter page to include new components
// Add to componentMap:
// NumberSystemsTimeline,
// EulersFormulaDemo,

// Additional Part II chapters
export const additionalPart02Chapters: Chapter[] = [
  {
    id: "abstract-algebra-development",
    title: "The Development of Abstract Algebra",
    description: "From solving equations to the abstract study of algebraic structures.",
    part: "part-02",
    partTitle: "Origins of Modern Mathematics",
    order: 3,
    content: [
      {
        id: "equations-to-structures",
        title: "From Equations to Structures",
        type: "text",
        content: `
Abstract algebra emerged from the study of polynomial equations. Mathematicians noticed that the same patterns appeared when studying different types of equations.

The key insight: instead of studying specific equations, study the underlying structures.

This led to the development of:
- Groups (studying symmetry)
- Rings (studying addition and multiplication)
- Fields (studying equations)
- Vector spaces (studying linearity)
        `,
      },
    ],
    exercises: [],
  },
  {
    id: "algorithms-development",
    title: "Algorithms",
    description: "The history and importance of algorithms in mathematics.",
    part: "part-02",
    partTitle: "Origins of Modern Mathematics",
    order: 4,
    content: [],
    exercises: [],
  },
  {
    id: "rigor-in-analysis",
    title: "The Development of Rigor in Mathematical Analysis",
    description: "How calculus was put on firm foundations.",
    part: "part-02",
    partTitle: "Origins of Modern Mathematics",
    order: 5,
    content: [
      {
        id: "from-newton-to-weierstrass",
        title: "From Newton to Weierstrass",
        type: "text",
        content: `
Calculus was incredibly powerful but lacked rigor. Newton and Leibniz used infinitesimals - quantities that were "infinitely small" but not quite zero.

This led to criticism. Bishop Berkeley famously called infinitesimals "the ghosts of departed quantities."

The solution came in the 19th century:
- Cauchy introduced rigorous limits
- Weierstrass formalized the ε-δ definition
- Dedekind constructed the real numbers

Analysis was finally put on firm foundations.
        `,
      },
    ],
    exercises: [],
  },
  {
    id: "idea-of-proof",
    title: "The Development of the Idea of Proof",
    description: "How mathematical proof evolved from ancient Greece to modern times.",
    part: "part-02",
    partTitle: "Origins of Modern Mathematics",
    order: 6,
    content: [],
    exercises: [],
  },
  {
    id: "foundations-crisis",
    title: "The Crisis in the Foundations of Mathematics",
    description: "Paradoxes, set theory, and the search for solid ground.",
    part: "part-02",
    partTitle: "Origins of Modern Mathematics",
    order: 7,
    content: [
      {
        id: "russells-paradox",
        title: "Russell's Paradox",
        type: "text",
        content: `
In 1901, Bertrand Russell discovered a paradox that threatened the foundations of mathematics.

Consider the set of all sets that don't contain themselves. Does this set contain itself?

If it does, then by definition it doesn't. If it doesn't, then by definition it does.

This paradox showed that naive set theory was inconsistent. It led to:
- Axiomatic set theory (ZFC)
- Type theory
- Careful attention to the foundations
        `,
      },
    ],
    exercises: [],
  },
]

// Combine all chapters (updated after all definitions)
export const allChapters: Chapter[] = []


// More Part III: Mathematical Concepts
export const morePart03Concepts: Chapter[] = [
  {
    id: "pi",
    title: "π (Pi)",
    description: "The ratio of a circle's circumference to its diameter.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 2,
    content: [
      {
        id: "what-is-pi",
        title: "What is π?",
        type: "text",
        content: `
π is one of the most famous and important numbers in mathematics. It appears everywhere:

- Geometry: Circumference of a circle = 2πr
- Trigonometry: sin(π) = 0, cos(π) = -1
- Analysis: Σ(1/n²) = π²/6 (the Basel problem)
- Probability: The normal distribution involves √π

π is irrational - it cannot be expressed as a fraction.
π is transcendental - it is not the root of any polynomial with rational coefficients.
        `,
      },
      {
        id: "pi-visualization",
        title: "Visualizing π",
        type: "interactive",
        content: "Interactive demonstration of π",
        component: "PiVisualization",
      },
    ],
    exercises: [
      {
        id: "ex-pi-1",
        title: "Circumference Calculation",
        difficulty: "easy",
        type: "interactive",
        question: "If a circle has radius 5, what is its circumference? (Use π ≈ 3.14)",
        answer: "31.4",
        hint: "Circumference = 2πr",
        explanation: "C = 2 × π × 5 = 10π ≈ 31.4",
        points: 10,
      },
    ],
  },
  {
    id: "golden-ratio",
    title: "The Golden Ratio (φ)",
    description: "The most aesthetically pleasing ratio in mathematics.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 3,
    content: [
      {
        id: "what-is-phi",
        title: "φ = (1 + √5) / 2 ≈ 1.618...",
        type: "text",
        content: `
The golden ratio φ has fascinated mathematicians, artists, and architects for centuries.

Properties of φ:
- φ² = φ + 1
- 1/φ = φ - 1
- φ = 1 + 1/(1 + 1/(1 + 1/(1 + ...)))

The golden ratio appears in:
- The Fibonacci sequence (ratios of consecutive terms approach φ)
- Pentagons and pentagrams
- The Parthenon and other classical architecture
- Nature: spiral patterns in shells and plants
        `,
      },
    ],
    exercises: [],
  },
  {
    id: "fibonacci",
    title: "The Fibonacci Sequence",
    description: "A sequence where each number is the sum of the two preceding ones.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 4,
    content: [
      {
        id: "fibonacci-definition",
        title: "1, 1, 2, 3, 5, 8, 13, 21, 34, ...",
        type: "text",
        content: `
The Fibonacci sequence is defined by:
- F₁ = 1, F₂ = 1
- Fₙ = Fₙ₋₁ + Fₙ₋₂ for n > 2

Amazing properties:
- Sum of first n Fibonacci numbers = Fₙ₊₂ - 1
- Sum of squares of first n Fibonacci numbers = Fₙ × Fₙ₊₁
- Ratio Fₙ₊₁/Fₙ approaches φ as n → ∞

The sequence appears surprisingly often in nature:
- Arrangement of leaves on stems
- Spiral patterns in sunflowers
- Breeding patterns of rabbits
        `,
      },
    ],
    exercises: [
      {
        id: "ex-fib-1",
        title: "Fibonacci Sum",
        difficulty: "medium",
        type: "interactive",
        question: "What is the sum of the first 6 Fibonacci numbers (1+1+2+3+5+8)?",
        answer: "20",
        hint: "Use the formula: sum = F₈ - 1",
        explanation: "The sum of first n Fibonacci numbers equals Fₙ₊₂ - 1. So 1+1+2+3+5+8 = F₈ - 1 = 21 - 1 = 20.",
        points: 15,
      },
    ],
  },
  {
    id: "infinity",
    title: "Infinity",
    description: "The concept of the unbounded and unlimited.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 5,
    content: [
      {
        id: "understanding-infinity",
        title: "Different Sizes of Infinity",
        type: "text",
        content: `
Infinity is not a number - it's a concept. But remarkably, there are different sizes of infinity!

ℵ₀ (aleph-null): The cardinality of natural numbers
- Countable infinity
- Also the size of integers and rational numbers

ℵ₁: The next larger infinity
- The cardinality of real numbers
- Uncountably infinite

Cantor's diagonal argument shows that the real numbers are "more infinite" than the natural numbers.
        `,
      },
    ],
    exercises: [],
  },
]

// Part IV: Branches of Mathematics
export const part04Branches: Chapter[] = [
  {
    id: "number-theory",
    title: "Number Theory",
    description: "The study of properties of integers and prime numbers.",
    part: "part-04",
    partTitle: "Branches of Mathematics",
    order: 1,
    content: [
      {
        id: "what-is-number-theory",
        title: "The Queen of Mathematics",
        type: "text",
        content: `
Gauss called number theory the "queen of mathematics." It studies the properties of integers.

Key topics:
- Prime numbers and their distribution
- Divisibility and congruences
- Diophantine equations (polynomial equations seeking integer solutions)
- Quadratic reciprocity and higher reciprocity laws
- The Riemann Hypothesis

Number theory was once considered the purest branch of mathematics with no practical applications.
That changed with the development of cryptography.
        `,
      },
    ],
    exercises: [],
  },
  {
    id: "algebra",
    title: "Algebra",
    description: "The study of mathematical symbols and the rules for manipulating them.",
    part: "part-04",
    partTitle: "Branches of Mathematics",
    order: 2,
    content: [
      {
        id: "abstract-algebra",
        title: "From Elementary to Abstract",
        type: "text",
        content: `
Algebra began as the study of equations. Modern (abstract) algebra studies algebraic structures.

Key structures:
- Groups: Sets with one operation (symmetry)
- Rings: Sets with two operations (addition and multiplication)
- Fields: Rings where division is possible (except by zero)
- Vector spaces: Structures for linear algebra
- Modules: Generalizations of vector spaces

The power of abstract algebra lies in its generality. One theorem about groups applies to:
- Symmetries of geometric objects
- Permutations of a set
- Solutions of polynomial equations
        `,
      },
    ],
    exercises: [],
  },
  {
    id: "geometry",
    title: "Geometry",
    description: "The study of shape, size, and spatial relationships.",
    part: "part-04",
    partTitle: "Branches of Mathematics",
    order: 3,
    content: [
      {
        id: "types-of-geometry",
        title: "Many Geometries",
        type: "text",
        content: `
Euclid's Elements established geometry as a deductive science. But Euclid's fifth postulate (the parallel postulate) was controversial.

This led to:
- Euclidean geometry: The geometry of flat space
- Hyperbolic geometry: Negatively curved space (infinitely many parallels)
- Elliptic geometry: Positively curved space (no parallels)
- Riemannian geometry: Geometry on curved manifolds
- Algebraic geometry: Studying geometry through algebra
- Differential geometry: Using calculus to study curves and surfaces

Einstein's general relativity showed that our universe is non-Euclidean!
        `,
      },
    ],
    exercises: [],
  },
  {
    id: "analysis",
    title: "Analysis",
    description: "The study of continuous change, limits, and infinite processes.",
    part: "part-04",
    partTitle: "Branches of Mathematics",
    order: 4,
    content: [
      {
        id: "calculus-and-beyond",
        title: "From Calculus to Analysis",
        type: "text",
        content: `
Analysis is the rigorous study of calculus and its generalizations.

Key areas:
- Real analysis: Properties of real numbers and real functions
- Complex analysis: Functions of complex numbers (beautiful and powerful)
- Functional analysis: Infinite-dimensional vector spaces
- Harmonic analysis: Decomposing functions into waves
- Measure theory: Rigorous theory of integration
- Differential equations: Equations involving rates of change

Analysis provides the tools for physics, engineering, and much of applied mathematics.
        `,
      },
    ],
    exercises: [],
  },
  {
    id: "topology",
    title: "Topology",
    description: "The study of properties preserved under continuous deformations.",
    part: "part-04",
    partTitle: "Branches of Mathematics",
    order: 5,
    content: [
      {
        id: "rubber-sheet-geometry",
        title: "Rubber Sheet Geometry",
        type: "text",
        content: `
Topology studies properties that don't change when you stretch or bend (but don't tear or glue).

Famous topological facts:
- A coffee cup and a donut are the same (one hole each)
- You can't comb the hair on a coconut smoothly
- There are always two opposite points on Earth with the same temperature and pressure

Key concepts:
- Continuity and convergence
- Compactness and connectedness
- Homotopy and homology
- Manifolds and their classification

Topology has applications in data analysis, robotics, and theoretical physics.
        `,
      },
    ],
    exercises: [],
  },
]

// Populate allChapters with all chapter arrays
allChapters.push(
  ...chapters,
  ...part02Chapters,
  ...additionalPart02Chapters,
  ...part03Concepts,
  ...morePart03Concepts,
  ...part04Branches,
)
