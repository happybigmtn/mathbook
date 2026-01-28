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
        id: "math-branches-visual",
        title: "The Three Branches of Mathematics",
        type: "interactive",
        content: "Interactive visualization of the three main branches of mathematics and their interconnections",
        component: "MathBranchesVisualizer",
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
        id: "notation-evolution",
        title: "How Notation Evolved",
        type: "interactive",
        content: "Explore the evolution of mathematical notation from words to symbols",
        component: "NotationEvolution",
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
        id: "set-operations",
        title: "Visualizing Set Operations",
        type: "interactive",
        content: "Interactive visualizer for union, intersection, difference, and complement",
        component: "SetOperationsVisualizer",
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

// Part II: Origins of Modern Mathematics
export const part02Chapters = [
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
export const part03Concepts = [
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
export const additionalPart02Chapters = [
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

// More Part III: Mathematical Concepts
export const morePart03Concepts = [
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
export const part04Branches = [
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


// PART II: ORIGINS OF MODERN MATHEMATICS - COMPLETE
export const part02Complete: Chapter[] = [
  {
    id: "from-numbers-to-number-systems",
    title: "From Numbers to Number Systems",
    description: "The evolution of numbers from counting to complex numbers, driven by the need to solve increasingly complex equations.",
    part: "part-02",
    partTitle: "Origins of Modern Mathematics",
    order: 1,
    content: [
      {
        id: "natural-numbers",
        title: "Natural Numbers: Where It All Begins",
        type: "text",
        content: `
The story of mathematics begins with counting. The natural numbers ℕ = {1, 2, 3, ...} emerged from the fundamental human need to quantify.

But natural numbers have limitations:
- We can't subtract a larger number from a smaller one (3 - 5 = ?)
- We can't divide 5 by 2 and get a natural number
- We can't solve equations like x + 5 = 3

Each limitation led mathematicians to create new, more powerful number systems.

**The Extension Principle**: When a number system can't solve a problem, extend it!
        `,
      },
      {
        id: "number-systems-timeline",
        title: "The Evolution Timeline",
        type: "interactive",
        content: "Interactive timeline of number system development",
        component: "NumberSystemsTimeline",
      },
      {
        id: "integers",
        title: "Integers: Adding Direction",
        type: "text",
        content: `
The integers ℤ = {..., -2, -1, 0, 1, 2, ...} extend natural numbers by adding zero and negative numbers.

**Why we needed them**: To solve equations like x + 5 = 3

**The solution**: x = -2

Integers allow us to:
- Subtract any two numbers
- Represent debt, temperature below zero, directions
- Solve all linear equations of the form ax + b = c

But we still couldn't solve 2x = 1, which requires fractions.
        `,
      },
      {
        id: "rational-numbers",
        title: "Rational Numbers: Ratios and Proportions",
        type: "text",
        content: `
Rational numbers ℚ are ratios of integers: ℚ = {a/b : a, b ∈ ℤ, b ≠ 0}

**Why we needed them**: To solve equations like 2x = 1

**The solution**: x = 1/2

Rational numbers are dense: between any two rationals, there's another rational. This makes them seem like they should fill the entire number line.

But surprisingly, they don't! √2 is not rational. This discovery by the Pythagoreans was so shocking that legend says they drowned the discoverer to keep it secret.
        `,
      },
      {
        id: "irrational-discovery",
        title: "The Crisis of Irrationality",
        type: "text",
        content: `
The discovery that √2 is irrational was one of the most important moments in mathematics.

**Proof that √2 is irrational**:

Suppose √2 = a/b where a and b are integers with no common factors.

Then 2 = a²/b², so 2b² = a².

This means a² is even, so a is even. Write a = 2k.

Then 2b² = (2k)² = 4k², so b² = 2k².

This means b² is even, so b is even.

But then both a and b are even, contradicting our assumption that they have no common factors!

Therefore, √2 cannot be rational.
        `,
      },
      {
        id: "real-numbers",
        title: "Real Numbers: Filling the Gaps",
        type: "text",
        content: `
Real numbers ℝ include all rational numbers plus all irrational numbers like √2, π, and e.

The real numbers complete the number line. Every point on the line corresponds to a real number, and every real number corresponds to a point.

**Key property**: The real numbers are complete - every Cauchy sequence converges to a real number.

This completeness is crucial for calculus. It ensures that limits exist when they should.

But even real numbers have limitations. We still can't solve x² + 1 = 0...
        `,
      },
      {
        id: "complex-numbers",
        title: "Complex Numbers: The Final Extension",
        type: "text",
        content: `
Complex numbers ℂ = {a + bi : a, b ∈ ℝ} where i² = -1

**Why we needed them**: To solve x² + 1 = 0

**The solution**: x = i (or x = -i)

Complex numbers might seem artificial, but they're incredibly powerful:
- Every polynomial equation has a solution in ℂ (Fundamental Theorem of Algebra)
- They unify trigonometry and exponentials: e^(iθ) = cos(θ) + i·sin(θ)
- They're essential for quantum mechanics, electrical engineering, and signal processing

The complex plane gives us a beautiful geometric interpretation of complex numbers.
        `,
      },
    ],
    exercises: [
      {
        id: "ex-2-1-1",
        title: "Solving Linear Equations",
        difficulty: "easy",
        type: "multiple-choice",
        question: "What is the smallest number system needed to solve x + 7 = 4?",
        options: ["Natural numbers", "Integers", "Rational numbers", "Real numbers"],
        answer: "Integers",
        hint: "The solution is x = -3. Which number system includes negative numbers?",
        explanation: "The equation x + 7 = 4 has solution x = -3, which is an integer but not a natural number. We need the integers to solve this.",
        points: 10,
      },
      {
        id: "ex-2-1-2",
        title: "Rational or Irrational?",
        difficulty: "medium",
        type: "multiple-choice",
        question: "Is √3 rational or irrational?",
        options: ["Rational", "Irrational", "Neither", "Both"],
        answer: "Irrational",
        hint: "Use a proof by contradiction similar to the √2 proof.",
        explanation: "√3 is irrational. If √3 = a/b in lowest terms, then 3b² = a², so a² is divisible by 3, so a is divisible by 3. Write a = 3k, then 3b² = 9k², so b² = 3k², meaning b is also divisible by 3. Contradiction!",
        points: 15,
      },
      {
        id: "ex-2-1-3",
        title: "Complex Solutions",
        difficulty: "medium",
        type: "interactive",
        question: "Solve x² + 4 = 0 in the complex numbers.",
        answer: "2i",
        hint: "Rearrange to get x² = -4, then take the square root.",
        explanation: "x² = -4, so x = ±√(-4) = ±2i. The solutions are 2i and -2i.",
        points: 15,
      },
    ],
  },
  {
    id: "geometry-origins",
    title: "Geometry",
    description: "From Egyptian surveying to Euclidean geometry and the discovery of non-Euclidean geometries.",
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
- Redraw field boundaries after Nile floods (surveying)
- Calculate volumes for granaries
- Build pyramids with precise angles

The Rhind Papyrus (c. 1650 BCE) contains 84 mathematical problems, including area calculations for triangles, rectangles, and circles.

But it was the Greeks who transformed geometry from a collection of rules into a logical system built on proofs.
        `,
      },
      {
        id: "euclid-elements",
        title: "Euclid's Elements: The Gold Standard",
        type: "text",
        content: `
Euclid's Elements (c. 300 BCE) is one of the most influential textbooks ever written. It organized geometry into a deductive system starting from definitions, postulates, and common notions.

**Structure of Elements**:
- 13 books covering geometry and number theory
- Starts with 5 postulates (assumptions)
- Builds 465 propositions through logical deduction

**The 5 Postulates**:
1. A straight line can be drawn between any two points
2. A finite straight line can be extended indefinitely
3. A circle can be drawn with any center and radius
4. All right angles are equal
5. The parallel postulate (more on this later!)

Euclid's work set the standard for mathematical rigor for over 2000 years.
        `,
      },
      {
        id: "euclidean-constructions",
        title: "Compass and Straightedge",
        type: "interactive",
        content: "Interactive compass and straightedge constructions",
        component: "EuclideanConstructions",
      },
      {
        id: "parallel-postulate",
        title: "The Problem with the Fifth Postulate",
        type: "text",
        content: `
The fifth postulate (parallel postulate) seemed different from the others. It was more complex and less self-evident.

**Euclid's Fifth Postulate**: If a straight line falling on two straight lines makes the interior angles on the same side less than two right angles, the two straight lines, if produced indefinitely, meet on that side.

Mathematicians tried for centuries to prove it from the other four postulates. All attempts failed.

In the 19th century, mathematicians discovered something shocking: the fifth postulate is independent! You can create consistent geometries where it's false.

This led to the discovery of **non-Euclidean geometries**.
        `,
      },
      {
        id: "non-euclidean",
        title: "Non-Euclidean Geometry: A Revolution",
        type: "text",
        content: `
In the 19th century, Bolyai, Lobachevsky, and Gauss independently discovered that you could create consistent geometries where the parallel postulate fails.

**Hyperbolic Geometry** (infinitely many parallels):
- Given a line and a point not on it, there are infinitely many lines through the point parallel to the given line
- Sum of angles in a triangle < 180°
- Space is negatively curved

**Elliptic Geometry** (no parallels):
- Given a line and a point not on it, there are no lines through the point parallel to the given line
- Sum of angles in a triangle > 180°
- Space is positively curved

Einstein's general relativity showed that our universe is non-Euclidean! Mass curves space-time.
        `,
      },
    ],
    exercises: [
      {
        id: "ex-2-2-1",
        title: "Triangle Angle Sum",
        difficulty: "easy",
        type: "multiple-choice",
        question: "In Euclidean geometry, what is the sum of angles in a triangle?",
        options: ["180°", "Less than 180°", "More than 180°", "It depends"],
        answer: "180°",
        hint: "This is a fundamental theorem of Euclidean geometry.",
        explanation: "In Euclidean geometry, the sum of interior angles in any triangle is exactly 180°. This is different in non-Euclidean geometries.",
        points: 10,
      },
      {
        id: "ex-2-2-2",
        title: "Parallel Lines",
        difficulty: "medium",
        type: "multiple-choice",
        question: "In hyperbolic geometry, how many lines through a point not on a given line are parallel to that line?",
        options: ["Exactly one", "None", "Infinitely many", "It depends on the point"],
        answer: "Infinitely many",
        hint: "Hyperbolic geometry is characterized by having 'too many' parallel lines.",
        explanation: "In hyperbolic geometry, given a line and a point not on it, there are infinitely many lines through the point that never intersect the given line.",
        points: 15,
      },
    ],
  },
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

**The Key Insight**: Instead of studying specific equations, study the underlying structures!

This led to the development of:
- **Groups**: Sets with one operation (symmetry)
- **Rings**: Sets with two operations (addition and multiplication)
- **Fields**: Rings where division is possible (except by zero)
- **Vector spaces**: Structures for linear algebra
- **Modules**: Generalizations of vector spaces

The power of abstract algebra lies in its generality. One theorem about groups applies to:
- Symmetries of geometric objects
- Permutations of a set
- Solutions of polynomial equations
- Cryptographic systems
        `,
      },
      {
        id: "groups-symmetry",
        title: "Groups: The Algebra of Symmetry",
        type: "text",
        content: `
A group is a set G with a binary operation · satisfying four axioms:

**1. Closure**: For all a, b ∈ G, we have a·b ∈ G

**2. Associativity**: For all a, b, c ∈ G, we have (a·b)·c = a·(b·c)

**3. Identity**: There exists an element e ∈ G such that e·a = a·e = a for all a ∈ G

**4. Inverses**: For each a ∈ G, there exists a⁻¹ ∈ G such that a·a⁻¹ = e

**Examples**:
- (ℤ, +): Integers under addition
- (ℚ*, ×): Non-zero rationals under multiplication
- Symmetries of a triangle (6 elements)
- Permutations of {1, 2, ..., n}

Groups capture the essence of symmetry. Understanding a group's structure tells us about the symmetries of the object it describes.
        `,
      },
      {
        id: "group-theory-applications",
        title: "The Power of Group Theory",
        type: "text",
        content: `
Group theory has applications across mathematics and beyond:

**Geometry**: Classifying symmetries of shapes and patterns

**Number Theory**: Studying properties of integers and modular arithmetic

**Physics**: Noether's theorem
- Every symmetry corresponds to a conservation law
- Translation symmetry → Conservation of momentum
- Rotation symmetry → Conservation of angular momentum
- Time symmetry → Conservation of energy

**Chemistry**: Analyzing molecular symmetry and spectroscopy

**Cryptography**: Building secure encryption systems

**Music Theory**: Understanding harmonic structures

The abstract approach reveals deep connections between seemingly unrelated fields.
        `,
      },
    ],
    exercises: [
      {
        id: "ex-2-3-1",
        title: "Group Axioms",
        difficulty: "medium",
        type: "multiple-choice",
        question: "Which of the following is NOT a group axiom?",
        options: ["Closure", "Commutativity", "Identity element", "Inverse elements"],
        answer: "Commutativity",
        hint: "Groups don't need to be commutative. Commutative groups are called 'abelian'.",
        explanation: "Commutativity (a·b = b·a) is not required for a group. Groups that are commutative are called abelian groups, named after Niels Henrik Abel.",
        points: 15,
      },
      {
        id: "ex-2-3-2",
        title: "Field Properties",
        difficulty: "medium",
        type: "multiple-choice",
        question: "In a field, which operation is NOT always possible?",
        options: ["Addition", "Subtraction", "Multiplication", "Division by zero"],
        answer: "Division by zero",
        hint: "Division by zero is never allowed, even in fields.",
        explanation: "In any field, division by zero is undefined. This is a fundamental rule that holds for all number systems.",
        points: 10,
      },
    ],
  },
  {
    id: "algorithms",
    title: "Algorithms",
    description: "The history and importance of algorithms in mathematics.",
    part: "part-02",
    partTitle: "Origins of Modern Mathematics",
    order: 4,
    content: [
      {
        id: "what-is-algorithm",
        title: "What is an Algorithm?",
        type: "text",
        content: `
An algorithm is a finite set of well-defined instructions for solving a problem or performing a computation.

The word comes from the name of the Persian mathematician **al-Khwarizmi** (c. 780-850), whose book "On the Calculation with Hindu Numerals" introduced the decimal number system to the Western world.

**Key properties of algorithms**:
- **Finiteness**: Must terminate after a finite number of steps
- **Definiteness**: Each step must be precisely defined
- **Input**: Takes zero or more inputs
- **Output**: Produces at least one output
- **Effectiveness**: Operations must be sufficiently basic

Algorithms are the foundation of computer science and modern computation.
        `,
      },
      {
        id: "euclidean-algorithm",
        title: "The Euclidean Algorithm",
        type: "text",
        content: `
The Euclidean algorithm, described in Euclid's Elements (c. 300 BCE), finds the greatest common divisor (GCD) of two numbers.

**Algorithm**: To find GCD(a, b) where a > b:
1. Divide a by b and find the remainder r
2. Replace a with b, b with r
3. Repeat until b = 0
4. The GCD is the final value of a

**Example**: GCD(48, 18)
- 48 = 2 × 18 + 12
- 18 = 1 × 12 + 6
- 12 = 2 × 6 + 0
- GCD = 6

**Why it works**: GCD(a, b) = GCD(b, r) where r is the remainder when a is divided by b.

This is one of the oldest non-trivial algorithms still in use today!
        `,
      },
    ],
    exercises: [
      {
        id: "ex-2-4-1",
        title: "Euclidean Algorithm",
        difficulty: "medium",
        type: "interactive",
        question: "Use the Euclidean algorithm to find GCD(56, 42).",
        answer: "14",
        hint: "56 = 1 × 42 + 14, then 42 = 3 × 14 + 0",
        explanation: "56 = 1 × 42 + 14, then 42 = 3 × 14 + 0. The GCD is 14.",
        points: 15,
      },
    ],
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
        id: "newton-leibniz",
        title: "The Calculus Revolution",
        type: "text",
        content: `
In the late 17th century, Isaac Newton and Gottfried Wilhelm Leibniz independently invented calculus.

**Newton's approach**: Focused on motion and change. He called derivatives "fluxions" and used them to solve problems in physics.

**Leibniz's approach**: Focused on the algebra of infinitesimals. His notation (dy/dx, ∫) is still used today.

Calculus was incredibly powerful but lacked rigor. Both Newton and Leibniz used the concept of "infinitesimals" - quantities that were "infinitely small" but not quite zero.

This led to criticism. Bishop Berkeley famously called infinitesimals "the ghosts of departed quantities."
        `,
      },
      {
        id: "weierstrass",
        title: "Weierstrass and the ε-δ Definition",
        type: "text",
        content: `
Karl Weierstrass (1815-1897) finally put calculus on completely rigorous foundations.

**The ε-δ Definition of Limit**:

lim(x→a) f(x) = L means:

For every ε > 0, there exists a δ > 0 such that:
if 0 < |x - a| < δ, then |f(x) - L| < ε

This definition removes all ambiguity:
- ε represents how close we want f(x) to be to L
- δ represents how close x needs to be to a
- The definition says we can always find such a δ for any ε

**Impact**: This definition allows us to prove theorems about limits, continuity, derivatives, and integrals with complete rigor.
        `,
      },
    ],
    exercises: [
      {
        id: "ex-2-5-1",
        title: "Understanding Limits",
        difficulty: "medium",
        type: "multiple-choice",
        question: "What does lim(x→2) f(x) = 5 mean intuitively?",
        options: [
          "f(2) = 5",
          "f(x) gets arbitrarily close to 5 as x gets close to 2",
          "f(x) is always equal to 5",
          "f(2) is undefined"
        ],
        answer: "f(x) gets arbitrarily close to 5 as x gets close to 2",
        hint: "Limits describe behavior near a point, not necessarily at the point.",
        explanation: "The limit describes what happens to f(x) as x approaches 2, regardless of what f(2) actually is. The function value can be different from the limit, or even undefined.",
        points: 15,
      },
    ],
  },
  {
    id: "idea-of-proof",
    title: "The Development of the Idea of Proof",
    description: "How mathematical proof evolved from ancient Greece to modern times.",
    part: "part-02",
    partTitle: "Origins of Modern Mathematics",
    order: 6,
    content: [
      {
        id: "greek-revolution",
        title: "The Greek Revolution: Proof Becomes Central",
        type: "text",
        content: `
The Greeks transformed mathematics by making proof the central activity.

**Thales of Miletus** (c. 624-546 BCE):
- Often called the first mathematician
- First to use deductive reasoning
- Proved that a diameter bisects a circle

**Pythagoras and his school** (c. 570-495 BCE):
- Believed "all is number"
- Discovered irrational numbers
- Proved the Pythagorean theorem

**Euclid's Elements** (c. 300 BCE):
- Organized all known mathematics into a deductive system
- Started from axioms and built up through logical deduction
- Set the standard for mathematical proof for 2000 years

The Greek approach: Start with self-evident truths (axioms) and deduce theorems through pure logic.
        `,
      },
      {
        id: "types-of-proof",
        title: "Types of Mathematical Proof",
        type: "text",
        content: `
Over the centuries, mathematicians developed various proof techniques:

**Direct Proof**: Assume P is true, deduce Q through logical steps

**Proof by Contradiction**: Assume the opposite of what you want to prove, show this leads to a contradiction
- Classic example: Proving √2 is irrational

**Proof by Induction**: Prove a base case, then show that if it holds for n, it holds for n+1
- Used for statements about all natural numbers

**Proof by Contrapositive**: Prove "if P then Q" by proving "if not Q then not P"

**Constructive Proof**: Actually construct the object whose existence you're proving

**Non-constructive Proof**: Show something exists without finding it explicitly

Each type has its strengths and is appropriate for different situations.
        `,
      },
    ],
    exercises: [
      {
        id: "ex-2-6-1",
        title: "Proof by Contradiction",
        difficulty: "medium",
        type: "multiple-choice",
        question: "To prove 'there are infinitely many primes' by contradiction, we start by assuming:",
        options: [
          "There are finitely many primes",
          "There are no primes",
          "All numbers are prime",
          "2 is not prime"
        ],
        answer: "There are finitely many primes",
        hint: "We assume the opposite of what we want to prove.",
        explanation: "To prove there are infinitely many primes by contradiction, we assume there are only finitely many primes, then derive a contradiction (showing this assumption leads to a logical impossibility).",
        points: 15,
      },
    ],
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
        title: "Russell's Paradox: The Crack in the Foundation",
        type: "text",
        content: `
In 1901, Bertrand Russell discovered a devastating paradox.

**The Paradox**: Consider the set R = {x : x ∉ x} (the set of all sets that don't contain themselves)

**Question**: Does R contain itself?

- If R ∈ R, then by definition R ∉ R
- If R ∉ R, then by definition R ∈ R

Either way, we get a contradiction!

**Impact**: This showed that naive set theory was inconsistent. The foundation of mathematics was cracked.

Russell wrote to Frege, who was just finishing his magnum opus on the foundations of arithmetic. Frege's response: "Your discovery of the contradiction caused me the greatest surprise and, I would almost say, consternation, since it has shaken the basis on which I intended to build my arithmetic."
        `,
      },
      {
        id: "incompleteness",
        title: "Gödel's Incompleteness Theorems: The Final Blow",
        type: "text",
        content: `
In 1931, Kurt Gödel proved two theorems that shook the foundations of mathematics.

**First Incompleteness Theorem**: In any consistent formal system F powerful enough to encode basic arithmetic, there exist statements that are true but unprovable in F.

**Second Incompleteness Theorem**: Such a system F cannot prove its own consistency.

**Interpretation**: No matter how comprehensive your axioms are, there will always be true statements you can't prove (unless your system is inconsistent, in which case you can prove everything, including contradictions).

**Impact**: Hilbert's dream of a complete, consistent foundation for all mathematics was impossible.

**Response**: Mathematicians mostly carry on as before. The unprovable statements are esoteric; they don't affect day-to-day mathematics.

The crisis in foundations led to deeper understanding, even if it didn't provide the certainty mathematicians sought.
        `,
      },
    ],
    exercises: [
      {
        id: "ex-2-7-1",
        title: "Russell's Paradox",
        difficulty: "medium",
        type: "multiple-choice",
        question: "What does Russell's paradox show?",
        options: [
          "All sets contain themselves",
          "Naive set theory is inconsistent",
          "There are no infinite sets",
          "Mathematics is complete"
        ],
        answer: "Naive set theory is inconsistent",
        hint: "The paradox arises from the unrestricted ability to form sets.",
        explanation: "Russell's paradox shows that naive set theory, which allows forming sets by arbitrary properties, leads to contradictions. This necessitated the development of axiomatic set theory.",
        points: 15,
      },
      {
        id: "ex-2-7-2",
        title: "Gödel's Theorem",
        difficulty: "hard",
        type: "multiple-choice",
        question: "What does Gödel's First Incompleteness Theorem state?",
        options: [
          "All mathematical statements are decidable",
          "In consistent systems, there are true but unprovable statements",
          "Mathematics is complete",
          "All axioms are independent"
        ],
        answer: "In consistent systems, there are true but unprovable statements",
        hint: "Gödel showed that sufficiently powerful systems cannot prove all true statements.",
        explanation: "Gödel's First Incompleteness Theorem shows that in any consistent formal system powerful enough to encode arithmetic, there exist true statements that cannot be proved within that system.",
        points: 20,
      },
    ],
  },
]




// CATEGORY 1: FOUNDATIONS & LOGIC (Concepts 1-10)
export const foundationsConcepts: Chapter[] = [
  {
    id: "axiom-of-choice",
    title: "The Axiom of Choice",
    description: "One of the most controversial axioms in mathematics, with surprising consequences.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 1,
    content: [
      {
        id: "what-is-ac",
        title: "What Does the Axiom Say?",
        type: "text",
        content: `The Axiom of Choice (AC) states: Given any collection of non-empty sets, it is possible to choose one element from each set. The controversy: AC allows us to prove the existence of objects we cannot explicitly construct.`,
      },
    ],
    exercises: [{ id: "ex-3-1", title: "Understanding AC", difficulty: "medium", type: "multiple-choice", question: "For which collections do we NOT need AC?", options: ["Finite collections", "Infinite collections", "Uncountable collections"], answer: "Finite collections", hint: "We can explicitly choose from finitely many sets.", explanation: "For finite collections, we can make choices explicitly without AC.", points: 10 }],
  },
  {
    id: "axiom-of-determinacy",
    title: "The Axiom of Determinacy",
    description: "An alternative to the Axiom of Choice with different consequences for infinite games.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 2,
    content: [{ id: "ad-content", title: "Determinacy and Games", type: "text", content: `The Axiom of Determinacy states that every infinite game of perfect information has a winning strategy for one player. AD contradicts AC but leads to beautiful regularity properties for sets of reals.`, }],
    exercises: [],
  },
  {
    id: "bayesian-analysis",
    title: "Bayesian Analysis",
    description: "A statistical framework for updating beliefs based on evidence.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 3,
    content: [{ id: "bayes-content", title: "Bayes' Theorem", type: "text", content: `Bayes' Theorem: P(H|E) = P(E|H) × P(H) / P(E). This allows us to update our belief in a hypothesis H given evidence E.`, }],
    exercises: [{ id: "ex-bayes", title: "Applying Bayes' Theorem", difficulty: "medium", type: "interactive", question: "If P(H) = 0.3, P(E|H) = 0.8, and P(E) = 0.5, what is P(H|E)?", answer: "0.48", hint: "Multiply P(E|H) by P(H), then divide by P(E).", explanation: "P(H|E) = 0.8 × 0.3 / 0.5 = 0.48", points: 15 }],
  },
  {
    id: "borel-sets",
    title: "Borel Sets",
    description: "The smallest collection of sets containing all open sets and closed under countable operations.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 4,
    content: [{ id: "borel-content", title: "Borel Hierarchy", type: "text", content: `Borel sets are built from open sets through countable unions and intersections. They form a σ-algebra that is fundamental to measure theory and probability.`, }],
    exercises: [],
  },
  {
    id: "calculus-of-variations",
    title: "Calculus of Variations",
    description: "Finding functions that minimize or maximize functionals.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 5,
    content: [{ id: "calc-var-content", title: "Euler-Lagrange Equation", type: "text", content: `The calculus of variations finds paths that extremize quantities like action. The Euler-Lagrange equation is the key tool: d/dt(∂L/∂v) = ∂L/∂x.`, }],
    exercises: [],
  },
  {
    id: "cantor-set",
    title: "The Cantor Set",
    description: "A fractal with measure zero but cardinality of the continuum.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 6,
    content: [{ id: "cantor-content", title: "Construction and Properties", type: "text", content: `The Cantor set is formed by repeatedly removing middle thirds. It has Lebesgue measure zero but contains uncountably many points. Its Hausdorff dimension is log(2)/log(3) ≈ 0.63.`, }],
    exercises: [{ id: "ex-cantor", title: "Cantor Set Dimension", difficulty: "hard", type: "interactive", question: "What is the Hausdorff dimension of the Cantor set?", answer: "log(2)/log(3)", hint: "At each step we keep 2 copies at 1/3 scale.", explanation: "Dimension d satisfies 2 = 3^d, so d = log(2)/log(3).", points: 20 }],
  },
  {
    id: "cardinals",
    title: "Cardinals",
    description: "Measuring the size of infinite sets.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 7,
    content: [{ id: "cardinals-content", title: "Infinite Cardinalities", type: "text", content: `ℵ₀ is the cardinality of natural numbers. The continuum hypothesis asks if there are cardinals between ℵ₀ and 2^ℵ₀. Gödel and Cohen showed this is independent of ZFC.`, }],
    exercises: [{ id: "ex-cardinals", title: "Comparing Cardinals", difficulty: "medium", type: "multiple-choice", question: "Which has larger cardinality: ℚ or ℝ?", options: ["ℚ", "ℝ", "They are equal", "Cannot be compared"], answer: "ℝ", hint: "Cantor's diagonal argument shows ℝ is uncountable.", explanation: "ℝ has cardinality 2^ℵ₀, which is strictly larger than ℵ₀ = |ℚ|.", points: 15 }],
  },
  {
    id: "category-theory",
    title: "Category Theory",
    description: "The mathematics of mathematical structures.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 8,
    content: [{ id: "cat-content", title: "Categories and Functors", type: "text", content: `A category consists of objects and morphisms. Functors map between categories. Category theory reveals deep structural similarities across mathematics.`, }],
    exercises: [],
  },
  {
    id: "cauchy-sequences",
    title: "Cauchy Sequences",
    description: "Sequences where terms get arbitrarily close to each other.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 9,
    content: [{ id: "cauchy-content", title: "Completeness", type: "text", content: `A sequence is Cauchy if for every ε > 0, there exists N such that for all m,n > N, |a_m - a_n| < ε. In complete spaces, all Cauchy sequences converge.`, }],
    exercises: [{ id: "ex-cauchy", title: "Cauchy Criterion", difficulty: "medium", type: "multiple-choice", question: "In which space does every Cauchy sequence converge?", options: ["ℚ", "ℝ", "ℤ", "None"], answer: "ℝ", hint: "ℝ is complete; ℚ is not.", explanation: "ℝ is complete - every Cauchy sequence converges to a real number.", points: 15 }],
  },
  {
    id: "choice-function",
    title: "Choice Function",
    description: "A function that selects an element from each set in a collection.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 10,
    content: [{ id: "cf-content", title: "Existence Without Construction", type: "text", content: `A choice function f on a collection of sets {A_i} satisfies f(A_i) ∈ A_i for all i. AC asserts that choice functions exist for any collection of non-empty sets.`, }],
    exercises: [],
  },
]


// CATEGORY 2: ALGEBRA (Concepts 11-25)
export const algebraConcepts: Chapter[] = [
  {
    id: "commutative-algebra",
    title: "Commutative Algebra",
    description: "The study of commutative rings and their ideals.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 11,
    content: [{ id: "comm-alg-content", title: "Rings and Ideals", type: "text", content: `Commutative algebra studies rings where multiplication commutes. Prime ideals, maximal ideals, and the Nullstellensatz connect algebra to geometry.` }],
    exercises: [],
  },
  {
    id: "complex-numbers-concept",
    title: "Complex Numbers",
    description: "Numbers of the form a + bi where i² = -1.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 12,
    content: [{ id: "complex-content", title: "The Complex Plane", type: "text", content: `Complex numbers extend the reals by adding i with i² = -1. Every polynomial has a root in ℂ (Fundamental Theorem of Algebra).` }],
    exercises: [{ id: "ex-complex", title: "Complex Arithmetic", difficulty: "easy", type: "interactive", question: "What is (1 + i)²?", answer: "2i", hint: "Expand (1+i)(1+i) = 1 + 2i + i².", explanation: "(1+i)² = 1 + 2i + i² = 1 + 2i - 1 = 2i", points: 10 }],
  },
  {
    id: "determinants",
    title: "Determinants",
    description: "A scalar value that encodes properties of a square matrix.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 13,
    content: [{ id: "det-content", title: "Geometric Interpretation", type: "text", content: `The determinant of a matrix represents the scaling factor of the volume transformation. det(AB) = det(A)det(B). A matrix is invertible iff det ≠ 0.` }],
    exercises: [{ id: "ex-det", title: "2x2 Determinant", difficulty: "easy", type: "interactive", question: "Find det([[2, 3], [1, 4]])", answer: "5", hint: "ad - bc for matrix [[a,b],[c,d]]", explanation: "det = 2×4 - 3×1 = 8 - 3 = 5", points: 10 }],
  },
  {
    id: "diagonalization",
    title: "Diagonalization",
    description: "Expressing a matrix as PDP⁻¹ where D is diagonal.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 14,
    content: [{ id: "diag-content", title: "Eigenvalues and Eigenvectors", type: "text", content: `A matrix is diagonalizable if it has enough eigenvectors. This simplifies computations: Aⁿ = PDⁿP⁻¹.` }],
    exercises: [],
  },
  {
    id: "eigenvalues",
    title: "Eigenvalues and Eigenvectors",
    description: "Scalars and vectors that capture the essential action of a linear transformation.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 15,
    content: [{ id: "eigen-content", title: "Av = λv", type: "text", content: `An eigenvector v satisfies Av = λv for some scalar λ (the eigenvalue). Eigenvalues are roots of the characteristic polynomial det(A - λI) = 0.` }],
    exercises: [{ id: "ex-eigen", title: "Finding Eigenvalues", difficulty: "medium", type: "interactive", question: "Find the eigenvalues of [[2, 0], [0, 3]]", answer: "2, 3", hint: "For diagonal matrices, eigenvalues are the diagonal entries.", explanation: "The eigenvalues are simply the diagonal entries: 2 and 3.", points: 15 }],
  },
  {
    id: "fields",
    title: "Fields",
    description: "Algebraic structures where addition, subtraction, multiplication, and division are all possible.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 16,
    content: [{ id: "fields-content", title: "Field Axioms", type: "text", content: `A field is a set with two operations (+, ×) where both operations form abelian groups (with 0 removed for ×), and multiplication distributes over addition. Examples: ℚ, ℝ, ℂ, ℤ/pℤ.` }],
    exercises: [{ id: "ex-fields", title: "Field Properties", difficulty: "medium", type: "multiple-choice", question: "Which is NOT a field?", options: ["ℚ", "ℝ", "ℤ", "ℤ/5ℤ"], answer: "ℤ", hint: "ℤ lacks multiplicative inverses for most elements.", explanation: "ℤ is not a field because most elements lack multiplicative inverses (e.g., 2⁻¹ = 1/2 is not in ℤ).", points: 15 }],
  },
  {
    id: "galois-groups",
    title: "Galois Groups",
    description: "Groups that encode information about field extensions and polynomial roots.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 17,
    content: [{ id: "galois-content", title: "Galois Theory", type: "text", content: `The Galois group of a polynomial consists of field automorphisms that permute its roots. Galois theory connects field theory to group theory, explaining when polynomials are solvable by radicals.` }],
    exercises: [],
  },
  {
    id: "homology",
    title: "Homology",
    description: "Algebraic invariants that count holes in topological spaces.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 18,
    content: [{ id: "homology-content", title: "Counting Holes", type: "text", content: `Homology groups Hₙ(X) count n-dimensional holes in a space X. H₀ counts connected components, H₁ counts loops, H₂ counts voids, etc.` }],
    exercises: [],
  },
  {
    id: "ideals",
    title: "Ideals",
    description: "Special subsets of rings that generalize the concept of even numbers.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 19,
    content: [{ id: "ideals-content", title: "Prime and Maximal Ideals", type: "text", content: `An ideal I of a ring R is closed under addition and absorbs multiplication by R. Prime ideals correspond to irreducible varieties; maximal ideals correspond to points.` }],
    exercises: [],
  },
  {
    id: "inner-product-spaces",
    title: "Inner Product Spaces",
    description: "Vector spaces with a notion of angle and length.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 20,
    content: [{ id: "ips-content", title: "Geometry in Vector Spaces", type: "text", content: `An inner product ⟨·,·⟩ allows us to define length ||v|| = √⟨v,v⟩ and angle cos(θ) = ⟨u,v⟩/(||u|| ||v||). Hilbert spaces are complete inner product spaces.` }],
    exercises: [{ id: "ex-ips", title: "Inner Product", difficulty: "medium", type: "interactive", question: "If u = (1, 2) and v = (3, 4), what is ⟨u,v⟩?", answer: "11", hint: "For standard inner product: 1×3 + 2×4.", explanation: "⟨u,v⟩ = 1×3 + 2×4 = 3 + 8 = 11", points: 10 }],
  },
  {
    id: "jordan-normal-form",
    title: "Jordan Normal Form",
    description: "A canonical form for matrices that are not diagonalizable.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 21,
    content: [{ id: "jordan-content", title: "Almost Diagonal", type: "text", content: `Every square matrix over an algebraically closed field can be written as J = P⁻¹AP where J is block diagonal with Jordan blocks. This is the closest to diagonal form possible.` }],
    exercises: [],
  },
  {
    id: "lie-algebras",
    title: "Lie Algebras",
    description: "Vector spaces with a bilinear Lie bracket operation.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 22,
    content: [{ id: "lie-content", title: "Infinitesimal Symmetries", type: "text", content: `Lie algebras capture the local structure of Lie groups. The Lie bracket [X,Y] measures the failure of elements to commute. Essential in particle physics and differential geometry.` }],
    exercises: [],
  },
  {
    id: "matrices",
    title: "Matrices",
    description: "Rectangular arrays of numbers representing linear transformations.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 23,
    content: [{ id: "matrix-content", title: "Linear Algebra Basics", type: "text", content: `An m×n matrix represents a linear map from ℝⁿ to ℝᵐ. Matrix multiplication corresponds to composition of linear maps. The rank is the dimension of the image.` }],
    exercises: [{ id: "ex-matrix", title: "Matrix Multiplication", difficulty: "easy", type: "interactive", question: "If A = [[1, 2], [3, 4]], what is trace(A)?", answer: "5", hint: "Trace is the sum of diagonal elements.", explanation: "trace(A) = 1 + 4 = 5", points: 10 }],
  },
  {
    id: "modules",
    title: "Modules",
    description: "Generalizations of vector spaces where scalars come from a ring.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 24,
    content: [{ id: "module-content", title: "Modules over Rings", type: "text", content: `A module is like a vector space but the scalars form a ring instead of a field. Every abelian group is a ℤ-module. Modules unify linear algebra and group theory.` }],
    exercises: [],
  },
  {
    id: "normal-subgroups",
    title: "Normal Subgroups",
    description: "Subgroups that are invariant under conjugation, allowing quotient groups.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 25,
    content: [{ id: "normal-content", title: "Building Quotient Groups", type: "text", content: `A subgroup N of G is normal if gNg⁻¹ = N for all g ∈ G. Normal subgroups are kernels of homomorphisms and allow us to form quotient groups G/N.` }],
    exercises: [],
  },
]


// CATEGORY 3: NUMBER THEORY (Concepts 26-35)
export const numberTheoryConcepts: Chapter[] = [
  {
    id: "arithmetic-progressions",
    title: "Arithmetic Progressions",
    description: "Sequences where the difference between consecutive terms is constant.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 26,
    content: [{ id: "ap-content", title: "Primes in AP", type: "text", content: `Dirichlet's theorem states that any arithmetic progression a, a+d, a+2d, ... contains infinitely many primes if gcd(a,d) = 1.` }],
    exercises: [{ id: "ex-ap", title: "AP Sum", difficulty: "easy", type: "interactive", question: "What is the sum of 1 + 3 + 5 + ... + 19?", answer: "100", hint: "There are 10 terms, average is (1+19)/2 = 10.", explanation: "Sum = number of terms × average = 10 × 10 = 100", points: 10 }],
  },
  {
    id: "chinese-remainder-theorem",
    title: "The Chinese Remainder Theorem",
    description: "Solving systems of congruences with coprime moduli.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 27,
    content: [{ id: "crt-content", title: "Simultaneous Congruences", type: "text", content: `If m₁, m₂, ..., mₙ are pairwise coprime, the system x ≡ aᵢ (mod mᵢ) has a unique solution modulo M = m₁m₂...mₙ.` }],
    exercises: [{ id: "ex-crt", title: "CRT Application", difficulty: "medium", type: "interactive", question: "Find x such that x ≡ 2 (mod 3) and x ≡ 3 (mod 5).", answer: "8", hint: "Check numbers of form 3k+2: 2, 5, 8...", explanation: "Checking: 8 mod 3 = 2, 8 mod 5 = 3. So x = 8.", points: 15 }],
  },
  {
    id: "continued-fractions",
    title: "Continued Fractions",
    description: "Expressions of the form a₀ + 1/(a₁ + 1/(a₂ + ...)).",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 28,
    content: [{ id: "cf-content", title: "Best Rational Approximations", type: "text", content: `Continued fractions provide the best rational approximations to real numbers. The golden ratio φ = [1; 1, 1, 1, ...].` }],
    exercises: [],
  },
  {
    id: "diophantine-equations",
    title: "Diophantine Equations",
    description: "Polynomial equations seeking integer solutions.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 29,
    content: [{ id: "dioph-content", title: "Integer Solutions", type: "text", content: `Diophantine equations require integer solutions. Fermat's Last Theorem states xⁿ + yⁿ = zⁿ has no non-trivial solutions for n > 2.` }],
    exercises: [{ id: "ex-dioph", title: "Linear Diophantine", difficulty: "medium", type: "interactive", question: "Find one integer solution to 3x + 5y = 1.", answer: "2,-1", hint: "Try small values: x=2 gives 6 + 5y = 1, so y = -1.", explanation: "3(2) + 5(-1) = 6 - 5 = 1. So (2, -1) is a solution.", points: 15 }],
  },
  {
    id: "elliptic-curves",
    title: "Elliptic Curves",
    description: "Curves of the form y² = x³ + ax + b with deep arithmetic properties.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 30,
    content: [{ id: "ec-content", title: "Group Structure", type: "text", content: `Elliptic curves have a natural group structure. They were used in Wiles' proof of Fermat's Last Theorem and are essential in modern cryptography.` }],
    exercises: [],
  },
  {
    id: "eulers-theorem",
    title: "Euler's Theorem",
    description: "a^φ(n) ≡ 1 (mod n) for gcd(a,n) = 1.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 31,
    content: [{ id: "euler-thm-content", title: "Generalization of Fermat", type: "text", content: `Euler's theorem generalizes Fermat's Little Theorem. φ(n) is Euler's totient function counting integers up to n coprime to n.` }],
    exercises: [{ id: "ex-euler-thm", title: "Using Euler's Theorem", difficulty: "medium", type: "interactive", question: "Find 3^φ(10) mod 10.", answer: "1", hint: "φ(10) = 4, and Euler's theorem says 3^4 ≡ 1 (mod 10).", explanation: "φ(10) = 4. By Euler's theorem, 3^4 ≡ 1 (mod 10).", points: 15 }],
  },
  {
    id: "fermats-little-theorem",
    title: "Fermat's Little Theorem",
    description: "a^(p-1) ≡ 1 (mod p) for prime p and a not divisible by p.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 32,
    content: [{ id: "flt-content", title: "Primality Testing", type: "text", content: `Fermat's Little Theorem is fundamental to primality testing and cryptography. If a^(n-1) ≢ 1 (mod n) for some a, then n is composite.` }],
    exercises: [{ id: "ex-flt", title: "Applying FLT", difficulty: "easy", type: "interactive", question: "Find 2^6 mod 7.", answer: "1", hint: "By Fermat's Little Theorem, 2^6 ≡ 1 (mod 7).", explanation: "Since 7 is prime, Fermat's Little Theorem gives 2^(7-1) = 2^6 ≡ 1 (mod 7).", points: 10 }],
  },
  {
    id: "modular-arithmetic",
    title: "Modular Arithmetic",
    description: "Arithmetic where numbers wrap around after reaching a modulus.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 33,
    content: [{ id: "mod-content", title: "Clock Arithmetic", type: "text", content: `In modular arithmetic, a ≡ b (mod n) means n divides a-b. This forms the ring ℤ/nℤ with n elements.` }],
    exercises: [{ id: "ex-mod", title: "Modular Calculation", difficulty: "easy", type: "interactive", question: "What is 17 mod 5?", answer: "2", hint: "17 = 3×5 + 2", explanation: "17 = 3×5 + 2, so 17 ≡ 2 (mod 5).", points: 5 }],
  },
  {
    id: "prime-number-theorem",
    title: "The Prime Number Theorem",
    description: "π(x) ~ x/ln(x) describes the distribution of primes.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 34,
    content: [{ id: "pnt-content", title: "Density of Primes", type: "text", content: `The Prime Number Theorem says the probability that n is prime is about 1/ln(n). This was first proved by Hadamard and de la Vallée Poussin in 1896.` }],
    exercises: [{ id: "ex-pnt", title: "Prime Density", difficulty: "medium", type: "interactive", question: "Approximately how many primes are there less than 1,000,000?", answer: "72000", hint: "Use x/ln(x) with x = 1,000,000.", explanation: "π(10⁶) ≈ 10⁶/ln(10⁶) = 10⁶/(6×ln(10)) ≈ 72,382. Actual value is 78,498.", points: 15 }],
  },
  {
    id: "quadratic-reciprocity",
    title: "Quadratic Reciprocity",
    description: "A deep theorem relating solvability of quadratic congruences.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 35,
    content: [{ id: "qr-content", title: "The Golden Theorem", type: "text", content: `Quadratic reciprocity relates (p/q) and (q/p) for odd primes p and q. Gauss called it the "golden theorem" and gave six proofs.` }],
    exercises: [],
  },
]


// CATEGORY 4: GEOMETRY (Concepts 36-50)
export const geometryConcepts: Chapter[] = [
  {
    id: "algebraic-geometry",
    title: "Algebraic Geometry",
    description: "Studying geometric objects through polynomial equations.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 36,
    content: [{ id: "ag-content", title: "Varieties and Schemes", type: "text", content: `Algebraic geometry studies solutions to polynomial equations. The Nullstellensatz connects ideals to varieties. Modern algebraic geometry uses schemes.` }],
    exercises: [],
  },
  {
    id: "conic-sections",
    title: "Conic Sections",
    description: "Curves formed by intersecting a cone with a plane.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 37,
    content: [{ id: "conic-content", title: "Ellipses, Parabolas, Hyperbolas", type: "text", content: `Conic sections include circles, ellipses, parabolas, and hyperbolas. They have the unified equation Ax² + Bxy + Cy² + Dx + Ey + F = 0.` }],
    exercises: [{ id: "ex-conic", title: "Identify Conic", difficulty: "easy", type: "multiple-choice", question: "What conic is x² + y² = 25?", options: ["Ellipse", "Circle", "Parabola", "Hyperbola"], answer: "Circle", hint: "Both x² and y² have the same positive coefficient.", explanation: "x² + y² = 25 is a circle with radius 5 centered at the origin.", points: 10 }],
  },
  {
    id: "curvature",
    title: "Curvature",
    description: "Measuring how much a curve or surface deviates from being flat.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 38,
    content: [{ id: "curv-content", title: "Gaussian Curvature", type: "text", content: `Curvature measures how fast a curve turns. For surfaces, Gaussian curvature K = κ₁ × κ₂ determines local geometry. Positive K: sphere-like, negative K: saddle-like.` }],
    exercises: [],
  },
  {
    id: "differential-geometry",
    title: "Differential Geometry",
    description: "Using calculus to study curves and surfaces.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 39,
    content: [{ id: "dg-content", title: "Curves and Surfaces", type: "text", content: `Differential geometry studies smooth manifolds using calculus. The Gauss-Bonnet theorem connects curvature to topology.` }],
    exercises: [],
  },
  {
    id: "euclidean-geometry",
    title: "Euclidean Geometry",
    description: "The geometry of flat space based on Euclid's axioms.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 40,
    content: [{ id: "eg-content", title: "The Parallel Postulate", type: "text", content: `Euclidean geometry satisfies the parallel postulate: through a point not on a line, exactly one parallel line exists. Angle sums in triangles equal 180°.` }],
    exercises: [{ id: "ex-eg", title: "Triangle Angles", difficulty: "easy", type: "interactive", question: "In Euclidean geometry, two angles of a triangle are 50° and 60°. What is the third angle?", answer: "70", hint: "Angles in a triangle sum to 180°.", explanation: "180° - 50° - 60° = 70°", points: 5 }],
  },
  {
    id: "geodesics",
    title: "Geodesics",
    description: "Shortest paths on curved surfaces.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 41,
    content: [{ id: "geo-content", title: "Generalizing Straight Lines", type: "text", content: `Geodesics are curves that locally minimize distance. On a sphere, geodesics are great circles. In general relativity, particles follow geodesics in curved spacetime.` }],
    exercises: [],
  },
  {
    id: "hyperbolic-geometry",
    title: "Hyperbolic Geometry",
    description: "Geometry where infinitely many parallels exist through a point.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 42,
    content: [{ id: "hg-content", title: "Negatively Curved Space", type: "text", content: `Hyperbolic geometry has constant negative curvature. Through any point not on a line, infinitely many parallels exist. Triangle angles sum to less than 180°.` }],
    exercises: [{ id: "ex-hg", title: "Hyperbolic Triangles", difficulty: "medium", type: "multiple-choice", question: "In hyperbolic geometry, the sum of angles in a triangle is:", options: ["Exactly 180°", "Greater than 180°", "Less than 180°", "Variable"], answer: "Less than 180°", hint: "Hyperbolic space is negatively curved.", explanation: "In hyperbolic geometry, triangles have angle sum strictly less than 180°.", points: 10 }],
  },
  {
    id: "manifolds-concept",
    title: "Manifolds",
    description: "Spaces that locally look like Euclidean space.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 43,
    content: [{ id: "mfld-content", title: "Local to Global", type: "text", content: `An n-manifold locally resembles ℝⁿ. Examples: circle (1D), sphere (2D), torus (2D). Manifolds are fundamental objects in modern geometry and physics.` }],
    exercises: [{ id: "ex-mfld", title: "Manifold Dimension", difficulty: "easy", type: "interactive", question: "What is the dimension of a sphere S²?", answer: "2", hint: "A sphere locally looks like a plane.", explanation: "S² is a 2-dimensional manifold - locally it looks like ℝ².", points: 5 }],
  },
  {
    id: "projective-geometry",
    title: "Projective Geometry",
    description: "Geometry where parallel lines meet at points at infinity.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 44,
    content: [{ id: "pg-content", title: "Points at Infinity", type: "text", content: `Projective geometry adds points at infinity where parallel lines meet. This creates a more symmetric framework where all lines intersect exactly once.` }],
    exercises: [],
  },
  {
    id: "riemannian-geometry",
    title: "Riemannian Geometry",
    description: "Geometry on curved manifolds with a metric tensor.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 45,
    content: [{ id: "rg-content", title: "Metrics and Curvature", type: "text", content: `Riemannian manifolds have a metric tensor g that defines distances and angles. Curvature measures deviation from flatness. Essential for general relativity.` }],
    exercises: [],
  },
  {
    id: "spherical-geometry",
    title: "Spherical Geometry",
    description: "Geometry on the surface of a sphere.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 46,
    content: [{ id: "sg-content", title: "Positive Curvature", type: "text", content: `Spherical geometry has constant positive curvature. "Lines" are great circles. Triangles have angle sums greater than 180°.` }],
    exercises: [{ id: "ex-sg", title: "Spherical Triangle", difficulty: "medium", type: "interactive", question: "On a sphere, can a triangle have three right angles?", answer: "Yes", hint: "Consider a triangle with vertices at the North Pole and two points on the equator 90° apart.", explanation: "Yes! Take the North Pole and two points on the equator 90° apart. Each angle is 90°.", points: 15 }],
  },
  {
    id: "symplectic-geometry",
    title: "Symplectic Geometry",
    description: "Geometry preserving area in phase space.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 47,
    content: [{ id: "symp-content", title: "Hamiltonian Mechanics", type: "text", content: `Symplectic geometry studies manifolds with a closed non-degenerate 2-form. It provides the geometric framework for classical mechanics.` }],
    exercises: [],
  },
  {
    id: "tensors",
    title: "Tensors",
    description: "Multilinear maps that generalize vectors and matrices.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 48,
    content: [{ id: "tensor-content", title: "Coordinate-Independent Objects", type: "text", content: `Tensors transform covariantly under coordinate changes. The metric tensor, curvature tensor, and stress-energy tensor are fundamental in physics.` }],
    exercises: [],
  },
  {
    id: "topology-concept",
    title: "Topology",
    description: "Properties preserved under continuous deformation.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 49,
    content: [{ id: "top-content", title: "Rubber Sheet Geometry", type: "text", content: `Topology studies properties like connectedness, compactness, and holes. A coffee cup and donut are topologically equivalent (both have one hole).` }],
    exercises: [{ id: "ex-top", title: "Euler Characteristic", difficulty: "medium", type: "interactive", question: "What is the Euler characteristic of a sphere?", answer: "2", hint: "Use V - E + F for any polyhedron.", explanation: "For a sphere, χ = V - E + F = 2 (e.g., tetrahedron: 4 - 6 + 4 = 2).", points: 10 }],
  },
  {
    id: "vector-bundles",
    title: "Vector Bundles",
    description: "Families of vector spaces parametrized by a base space.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 50,
    content: [{ id: "vb-content", title: "Tangent Bundles", type: "text", content: `A vector bundle attaches a vector space to each point of a manifold. The tangent bundle TM has tangent spaces as fibers. Characteristic classes classify bundles.` }],
    exercises: [],
  },
]


// CATEGORY 5: ANALYSIS (Concepts 51-65)
export const analysisConcepts: Chapter[] = [
  {
    id: "analytic-functions",
    title: "Analytic Functions",
    description: "Functions locally given by convergent power series.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 51,
    content: [{ id: "af-content", title: "Complex Differentiability", type: "text", content: `Analytic functions are infinitely differentiable and equal their Taylor series. They satisfy the Cauchy-Riemann equations and have remarkable properties.` }],
    exercises: [],
  },
  {
    id: "banach-spaces",
    title: "Banach Spaces",
    description: "Complete normed vector spaces.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 52,
    content: [{ id: "bs-content", title: "Complete Normed Spaces", type: "text", content: `Banach spaces are complete with respect to their norm. Examples include ℝⁿ, Lᵖ spaces, and spaces of continuous functions.` }],
    exercises: [],
  },
  {
    id: "complex-analysis",
    title: "Complex Analysis",
    description: "Analysis of functions of complex variables.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 53,
    content: [{ id: "ca-content", title: "Holomorphic Functions", type: "text", content: `Complex analysis studies holomorphic functions. Cauchy's theorem, residue calculus, and conformal mappings are powerful tools.` }],
    exercises: [],
  },
  {
    id: "convolution",
    title: "Convolution",
    description: "An operation combining two functions to produce a third.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 54,
    content: [{ id: "conv-content", title: "(f * g)(x)", type: "text", content: `Convolution (f * g)(x) = ∫f(t)g(x-t)dt appears in signal processing, probability, and PDEs. It corresponds to multiplication in Fourier space.` }],
    exercises: [{ id: "ex-conv", title: "Convolution Property", difficulty: "medium", type: "multiple-choice", question: "What is the Fourier transform of f * g?", options: ["f̂ + ĝ", "f̂ × ĝ", "f̂ / ĝ", "f̂ - ĝ"], answer: "f̂ × ĝ", hint: "Convolution in time domain equals multiplication in frequency domain.", explanation: "The Fourier transform of a convolution is the product of Fourier transforms: (f * g)̂ = f̂ × ĝ.", points: 15 }],
  },
  {
    id: "fourier-series",
    title: "Fourier Series",
    description: "Decomposing periodic functions into sums of sines and cosines.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 55,
    content: [{ id: "fs-content", title: "Periodic Decomposition", type: "text", content: `Fourier series represent periodic functions as f(x) = Σ(aₙcos(nx) + bₙsin(nx)). This reveals the frequency content of signals.` }],
    exercises: [],
  },
  {
    id: "fourier-transform",
    title: "The Fourier Transform",
    description: "Decomposing functions into their frequency components.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 56,
    content: [{ id: "ft-content", title: "Frequency Domain", type: "text", content: `The Fourier transform f̂(ξ) = ∫f(x)e^(-2πixξ)dx converts time domain to frequency domain. Essential for signal processing and PDEs.` }],
    exercises: [{ id: "ex-ft", title: "Fourier Transform", difficulty: "hard", type: "interactive", question: "What is the Fourier transform of e^(-πx²)?", answer: "e^(-πξ²)", hint: "The Gaussian is its own Fourier transform (up to normalization).", explanation: "The Gaussian function is an eigenfunction of the Fourier transform: F[e^(-πx²)] = e^(-πξ²).", points: 20 }],
  },
  {
    id: "functional-analysis",
    title: "Functional Analysis",
    description: "Analysis on infinite-dimensional vector spaces.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 57,
    content: [{ id: "fa-content", title: "Operators on Hilbert Spaces", type: "text", content: `Functional analysis studies infinite-dimensional spaces like Hilbert and Banach spaces. Spectral theory generalizes eigenvalue theory.` }],
    exercises: [],
  },
  {
    id: "harmonic-analysis",
    title: "Harmonic Analysis",
    description: "Studying functions by decomposing them into basic waves.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 58,
    content: [{ id: "ha-content", title: "Generalized Fourier Analysis", type: "text", content: `Harmonic analysis extends Fourier analysis to groups. It studies representations, automorphic forms, and has applications to number theory.` }],
    exercises: [],
  },
  {
    id: "hilbert-spaces",
    title: "Hilbert Spaces",
    description: "Complete inner product spaces generalizing Euclidean geometry.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 59,
    content: [{ id: "hs-content", title: "Geometry in Infinite Dimensions", type: "text", content: `Hilbert spaces have an inner product inducing a norm. They generalize ℝⁿ to infinite dimensions. L² and ℓ² are examples.` }],
    exercises: [{ id: "ex-hs", title: "Hilbert Space Property", difficulty: "medium", type: "multiple-choice", question: "Which is a Hilbert space?", options: ["L²(ℝ)", "C([0,1]) with sup norm", "ℓ^∞", "None"], answer: "L²(ℝ)", hint: "Hilbert spaces have an inner product.", explanation: "L²(ℝ) has inner product ⟨f,g⟩ = ∫f(x)ḡ(x)dx. The others lack inner products.", points: 15 }],
  },
  {
    id: "holomorphic-functions",
    title: "Holomorphic Functions",
    description: "Complex-differentiable functions with remarkable properties.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 60,
    content: [{ id: "hf-content", title: "Cauchy-Riemann Equations", type: "text", content: `Holomorphic functions satisfy ∂u/∂x = ∂v/∂y and ∂u/∂y = -∂v/∂x. They are infinitely differentiable and determined by their values on any open set.` }],
    exercises: [],
  },
  {
    id: "lebesgue-integration",
    title: "Lebesgue Integration",
    description: "A more general theory of integration than Riemann's.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 61,
    content: [{ id: "li-content", title: "Measure Theory", type: "text", content: `Lebesgue integration partitions the range instead of the domain. It handles more functions and has better convergence properties than Riemann integration.` }],
    exercises: [],
  },
  {
    id: "measure-theory",
    title: "Measure Theory",
    description: "Rigorous theory of length, area, and volume.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 62,
    content: [{ id: "mt-content", title: "σ-Algebras and Measures", type: "text", content: `A measure assigns sizes to sets in a σ-algebra. Lebesgue measure extends length to a much larger class of sets than Borel sets.` }],
    exercises: [{ id: "ex-mt", title: "Measure Zero", difficulty: "medium", type: "multiple-choice", question: "Which set has Lebesgue measure zero?", options: ["[0,1]", "ℚ", "Cantor set", "Both ℚ and Cantor set"], answer: "Both ℚ and Cantor set", hint: "Both are countable or have empty interior.", explanation: "ℚ is countable (measure zero) and the Cantor set has measure zero by construction.", points: 15 }],
  },
  {
    id: "partial-differential-equations",
    title: "Partial Differential Equations",
    description: "Equations involving partial derivatives of multivariable functions.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 63,
    content: [{ id: "pde-content", title: "Heat, Wave, and Laplace Equations", type: "text", content: `PDEs model physical phenomena. The heat equation ∂u/∂t = α∇²u, wave equation ∂²u/∂t² = c²∇²u, and Laplace equation ∇²u = 0 are fundamental.` }],
    exercises: [],
  },
  {
    id: "power-series",
    title: "Power Series",
    description: "Infinite series of the form Σaₙ(x-c)ⁿ.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 64,
    content: [{ id: "ps-content", title: "Radius of Convergence", type: "text", content: `Power series converge within a radius R = 1/limsup|aₙ|^(1/n). They define analytic functions and are fundamental to complex analysis.` }],
    exercises: [{ id: "ex-ps", title: "Radius of Convergence", difficulty: "medium", type: "interactive", question: "What is the radius of convergence of Σxⁿ/n!?", answer: "infinity", hint: "Use the ratio test.", explanation: "By ratio test, |aₙ₊₁/aₙ| = 1/(n+1) → 0. So R = ∞.", points: 15 }],
  },
  {
    id: "special-functions",
    title: "Special Functions",
    description: "Important named functions arising in mathematical physics.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 65,
    content: [{ id: "sf-content", title: "Gamma, Beta, and Zeta", type: "text", content: `Special functions include Γ(z) (generalizing factorial), Bessel functions, and ζ(s) (Riemann zeta). They solve differential equations and appear throughout physics.` }],
    exercises: [{ id: "ex-sf", title: "Gamma Function", difficulty: "medium", type: "interactive", question: "What is Γ(5)?", answer: "24", hint: "Γ(n) = (n-1)! for positive integers.", explanation: "Γ(5) = 4! = 24.", points: 10 }],
  },
]


// CATEGORY 6: TOPOLOGY (Concepts 66-75)
export const topologyConcepts: Chapter[] = [
  {
    id: "cohomology",
    title: "Cohomology",
    description: "Dual to homology, with a natural ring structure.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 66,
    content: [{ id: "cohom-content", title: "Cohomology Rings", type: "text", content: `Cohomology groups Hⁿ(X) are dual to homology. The cup product makes the direct sum into a graded ring, a finer invariant than homology alone.` }],
    exercises: [],
  },
  {
    id: "compactness-concept",
    title: "Compactness",
    description: "A generalization of finiteness to topological spaces.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 67,
    content: [{ id: "compact-content", title: "Finite Subcovers", type: "text", content: `A space is compact if every open cover has a finite subcover. In ℝⁿ, compact = closed and bounded (Heine-Borel).` }],
    exercises: [{ id: "ex-compact", title: "Compact Sets", difficulty: "medium", type: "multiple-choice", question: "Which is compact in ℝ?", options: ["(0,1)", "[0,1]", "[0,∞)", "ℝ"], answer: "[0,1]", hint: "In ℝⁿ, compact = closed and bounded.", explanation: "[0,1] is closed and bounded, hence compact.", points: 10 }],
  },
  {
    id: "connectedness",
    title: "Connectedness",
    description: "A space that cannot be divided into two disjoint open sets.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 68,
    content: [{ id: "conn-content", title: "Path Connected", type: "text", content: `A space is connected if it cannot be partitioned into two disjoint non-empty open sets. Path connected means any two points can be joined by a path.` }],
    exercises: [{ id: "ex-conn", title: "Connected Example", difficulty: "easy", type: "multiple-choice", question: "Which is NOT connected?", options: ["[0,1]", "ℝ", "(0,1) ∪ (2,3)", "Circle"], answer: "(0,1) ∪ (2,3)", hint: "This set has two separate pieces.", explanation: "(0,1) ∪ (2,3) consists of two disjoint open intervals, hence disconnected.", points: 10 }],
  },
  {
    id: "covering-spaces",
    title: "Covering Spaces",
    description: "Spaces that locally look like products with a discrete set.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 69,
    content: [{ id: "cov-content", title: "Universal Covers", type: "text", content: `A covering space p: E → B is a local homeomorphism. The universal cover is simply connected. Covering spaces correspond to subgroups of π₁.` }],
    exercises: [],
  },
  {
    id: "fundamental-group",
    title: "The Fundamental Group",
    description: "The group of loops based at a point up to homotopy.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 70,
    content: [{ id: "fg-content", title: "π₁(X, x₀)", type: "text", content: `The fundamental group captures 1-dimensional holes. π₁(S¹) = ℤ, π₁(Sⁿ) = 0 for n ≥ 2. It distinguishes spaces that homology cannot.` }],
    exercises: [{ id: "ex-fg", title: "Fundamental Group", difficulty: "medium", type: "interactive", question: "What is π₁ of a torus T²?", answer: "Z x Z", hint: "A torus has two independent loops.", explanation: "The torus has fundamental group ℤ × ℤ, generated by loops around each circle factor.", points: 15 }],
  },
  {
    id: "homotopy",
    title: "Homotopy",
    description: "Continuous deformation of one function into another.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 71,
    content: [{ id: "ht-content", title: "Homotopy Equivalence", type: "text", content: `Two spaces are homotopy equivalent if they can be continuously deformed into each other. A coffee cup and donut are homotopy equivalent.` }],
    exercises: [],
  },
  {
    id: "knot-theory",
    title: "Knot Theory",
    description: "The study of embeddings of circles in 3-dimensional space.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 72,
    content: [{ id: "knot-content", title: "Invariants of Knots", type: "text", content: `Knot theory studies closed loops in ℝ³. Knot invariants like the Jones polynomial distinguish different knots. The unknotting problem remains unsolved.` }],
    exercises: [],
  },
  {
    id: "sheaves",
    title: "Sheaves",
    description: "Tools for tracking locally defined data attached to a topological space.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 73,
    content: [{ id: "sheaf-content", title: "Local to Global", type: "text", content: `A sheaf assigns data to open sets with restriction maps. Sheaf cohomology measures the obstruction to gluing local data globally.` }],
    exercises: [],
  },
  {
    id: "spectral-sequences",
    title: "Spectral Sequences",
    description: "Computational tools for calculating homology and cohomology.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 74,
    content: [{ id: "ss-content", title: "Convergence", type: "text", content: `Spectral sequences are iterative approximation schemes. They compute derived functors and are essential in algebraic topology.` }],
    exercises: [],
  },
  {
    id: "universal-coefficient-theorem",
    title: "The Universal Coefficient Theorem",
    description: "Relates homology with different coefficient groups.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 75,
    content: [{ id: "uct-content", title: "Coefficients", type: "text", content: `The UCT expresses Hₙ(X; G) in terms of Hₙ(X; ℤ) and Hₙ₋₁(X; ℤ). It splits (non-canonically) as a direct sum.` }],
    exercises: [],
  },
]


// CATEGORY 7: PROBABILITY & STATISTICS (Concepts 76-85)
export const probabilityConcepts: Chapter[] = [
  {
    id: "central-limit-theorem",
    title: "The Central Limit Theorem",
    description: "Sums of random variables tend toward a normal distribution.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 76,
    content: [{ id: "clt-content", title: "Normal Approximation", type: "text", content: `The CLT states that (X₁ + ... + Xₙ - nμ)/(σ√n) converges to N(0,1) for i.i.d. variables with finite variance. This explains the ubiquity of normal distributions.` }],
    exercises: [{ id: "ex-clt", title: "CLT Application", difficulty: "medium", type: "multiple-choice", question: "The CLT applies to:", options: ["Any random variables", "Independent random variables with finite variance", "Only normal random variables", "Discrete random variables only"], answer: "Independent random variables with finite variance", hint: "The CLT requires independence and finite variance.", explanation: "The CLT requires independent, identically distributed random variables with finite variance.", points: 15 }],
  },
  {
    id: "confidence-intervals",
    title: "Confidence Intervals",
    description: "Ranges that capture a parameter with specified probability.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 77,
    content: [{ id: "ci-content", title: "Statistical Inference", type: "text", content: `A 95% confidence interval means that if we repeated the sampling many times, 95% of the intervals would contain the true parameter.` }],
    exercises: [{ id: "ex-ci", title: "CI Interpretation", difficulty: "medium", type: "multiple-choice", question: "A 95% CI for μ is (10, 20). This means:", options: ["P(10 < μ < 20) = 0.95", "μ is between 10 and 20 with 95% probability", "95% of similar intervals contain μ", "μ has 95% chance of being in (10,20)"], answer: "95% of similar intervals contain μ", hint: "The confidence level refers to the procedure, not the particular interval.", explanation: "A 95% CI means the procedure produces intervals containing the parameter 95% of the time.", points: 15 }],
  },
  {
    id: "correlation",
    title: "Correlation",
    description: "Measuring the linear relationship between two variables.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 78,
    content: [{ id: "corr-content", title: "Pearson Correlation", type: "text", content: `The correlation coefficient ρ = Cov(X,Y)/(σₓσᵧ) measures linear association. |ρ| ≤ 1, with ρ = ±1 indicating perfect linear relationship.` }],
    exercises: [{ id: "ex-corr", title: "Correlation Value", difficulty: "easy", type: "interactive", question: "If X and Y are independent, what is Corr(X,Y)?", answer: "0", hint: "Independent variables have zero covariance.", explanation: "Independent variables have Cov(X,Y) = 0, so Corr(X,Y) = 0.", points: 10 }],
  },
  {
    id: "expected-value",
    title: "Expected Value",
    description: "The long-run average value of a random variable.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 79,
    content: [{ id: "ev-content", title: "E[X]", type: "text", content: `For discrete X: E[X] = Σx·P(X=x). For continuous X: E[X] = ∫x·f(x)dx. Linearity: E[aX + bY] = aE[X] + bE[Y].` }],
    exercises: [{ id: "ex-ev", title: "Expectation", difficulty: "easy", type: "interactive", question: "A fair die is rolled. What is E[X]?", answer: "3.5", hint: "(1+2+3+4+5+6)/6", explanation: "E[X] = (1+2+3+4+5+6)/6 = 21/6 = 3.5", points: 10 }],
  },
  {
    id: "hypothesis-testing",
    title: "Hypothesis Testing",
    description: "Statistical method for testing claims about populations.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 80,
    content: [{ id: "ht-content", title: "Null and Alternative", type: "text", content: `Hypothesis testing evaluates H₀ vs H₁ using test statistics and p-values. Type I error: reject true H₀. Type II error: fail to reject false H₀.` }],
    exercises: [],
  },
  {
    id: "law-of-large-numbers",
    title: "The Law of Large Numbers",
    description: "Sample averages converge to expected values.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 81,
    content: [{ id: "lln-content", title: "Convergence of Averages", type: "text", content: `The LLN states that (X₁ + ... + Xₙ)/n → E[X] as n → ∞. The weak LLN gives convergence in probability; the strong LLN gives almost sure convergence.` }],
    exercises: [{ id: "ex-lln", title: "LLN Application", difficulty: "medium", type: "interactive", question: "If you roll a fair die 1000 times, the average will be close to:", answer: "3.5", hint: "The LLN says the sample mean converges to the expected value.", explanation: "By LLN, the average of many rolls approaches E[X] = 3.5.", points: 10 }],
  },
  {
    id: "markov-chains",
    title: "Markov Chains",
    description: "Stochastic processes where the future depends only on the present.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 82,
    content: [{ id: "mc-content", title: "Memoryless Property", type: "text", content: `A Markov chain satisfies P(Xₙ₊₁ = j | Xₙ = i, ...) = P(Xₙ₊₁ = j | Xₙ = i). The transition matrix P has entries pᵢⱼ.` }],
    exercises: [],
  },
  {
    id: "maximum-likelihood",
    title: "Maximum Likelihood Estimation",
    description: "Finding parameters that make observed data most probable.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 83,
    content: [{ id: "mle-content", title: "Likelihood Function", type: "text", content: `The MLE maximizes L(θ) = P(data|θ). For independent data, L(θ) = ∏P(xᵢ|θ). Often easier to maximize log-likelihood.` }],
    exercises: [],
  },
  {
    id: "random-variables",
    title: "Random Variables",
    description: "Functions assigning numerical values to outcomes.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 84,
    content: [{ id: "rv-content", title: "Discrete and Continuous", type: "text", content: `A random variable X: Ω → ℝ assigns numbers to outcomes. Discrete RVs have PMFs; continuous RVs have PDFs.` }],
    exercises: [{ id: "ex-rv", title: "Random Variable", difficulty: "easy", type: "multiple-choice", question: "Which is a continuous random variable?", options: ["Number of heads in 10 flips", "Time until next arrival", "Sum of two dice", "Number of defective items"], answer: "Time until next arrival", hint: "Time can take any value in an interval.", explanation: "Time is continuous; the others are discrete (countable values).", points: 10 }],
  },
  {
    id: "variance",
    title: "Variance",
    description: "Measuring the spread of a random variable.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 85,
    content: [{ id: "var-content", title: "Var(X) = E[(X-μ)²]", type: "text", content: `Variance measures spread around the mean. Var(X) = E[X²] - E[X]². Standard deviation σ = √Var(X).` }],
    exercises: [{ id: "ex-var", title: "Variance Calculation", difficulty: "medium", type: "interactive", question: "For a fair die, what is Var(X)?", answer: "35/12", hint: "E[X²] = (1+4+9+16+25+36)/6 = 91/6, E[X] = 3.5", explanation: "Var(X) = E[X²] - E[X]² = 91/6 - 49/4 = 35/12 ≈ 2.92", points: 15 }],
  },
]


// CATEGORY 8: COMBINATORICS & DISCRETE MATH (Concepts 86-92)
export const combinatoricsConcepts: Chapter[] = [
  {
    id: "binomial-theorem",
    title: "The Binomial Theorem",
    description: "Expanding powers of binomials using binomial coefficients.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 86,
    content: [{ id: "bt-content", title: "(a+b)ⁿ", type: "text", content: `(a+b)ⁿ = Σ C(n,k) aⁿ⁻ᵏbᵏ where C(n,k) = n!/(k!(n-k)!). The coefficients form Pascal's triangle.` }],
    exercises: [{ id: "ex-bt", title: "Binomial Coefficient", difficulty: "easy", type: "interactive", question: "What is C(5,2)?", answer: "10", hint: "5!/(2!×3!) = (5×4)/(2×1)", explanation: "C(5,2) = 5!/(2!×3!) = 120/(2×6) = 10", points: 10 }],
  },
  {
    id: "generating-functions",
    title: "Generating Functions",
    description: "Encoding sequences as coefficients of power series.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 87,
    content: [{ id: "gf-content", title: "Ordinary and Exponential", type: "text", content: `The ordinary generating function of aₙ is G(x) = Σaₙxⁿ. Generating functions convert recurrence relations to algebraic equations.` }],
    exercises: [],
  },
  {
    id: "graph-coloring",
    title: "Graph Coloring",
    description: "Assigning colors to vertices so adjacent vertices have different colors.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 88,
    content: [{ id: "gc-content", title: "Chromatic Number", type: "text", content: `The chromatic number χ(G) is the minimum colors needed. The Four Color Theorem states χ(G) ≤ 4 for planar graphs.` }],
    exercises: [{ id: "ex-gc", title: "Chromatic Number", difficulty: "medium", type: "interactive", question: "What is the chromatic number of a complete graph Kₙ?", answer: "n", hint: "Every vertex is adjacent to every other vertex.", explanation: "In Kₙ, every vertex is adjacent to all others, so we need n colors.", points: 15 }],
  },
  {
    id: "graph-theory",
    title: "Graph Theory",
    description: "Studying networks of vertices connected by edges.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 89,
    content: [{ id: "gt-content", title: "Vertices and Edges", type: "text", content: `A graph G = (V, E) consists of vertices and edges. Graph theory studies paths, cycles, connectivity, coloring, and optimization problems.` }],
    exercises: [{ id: "ex-gt", title: "Euler's Formula", difficulty: "medium", type: "interactive", question: "For a planar connected graph, V - E + F equals:", answer: "2", hint: "This is Euler's characteristic formula.", explanation: "Euler's formula: V - E + F = 2 for any connected planar graph.", points: 10 }],
  },
  {
    id: "inclusion-exclusion",
    title: "The Inclusion-Exclusion Principle",
    description: "Counting elements in unions by alternating sums.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 90,
    content: [{ id: "ie-content", title: "|A ∪ B| = |A| + |B| - |A ∩ B|", type: "text", content: `Inclusion-exclusion corrects for overcounting. For n sets, it involves alternating sums of intersections of all sizes.` }],
    exercises: [{ id: "ex-ie", title: "Inclusion-Exclusion", difficulty: "medium", type: "interactive", question: "In a class of 30, 18 like math and 20 like physics. If everyone likes at least one, how many like both?", answer: "8", hint: "|M ∪ P| = |M| + |P| - |M ∩ P|", explanation: "30 = 18 + 20 - |M ∩ P|, so |M ∩ P| = 8.", points: 15 }],
  },
  {
    id: "permutations",
    title: "Permutations",
    description: "Arrangements of objects in a specific order.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 91,
    content: [{ id: "perm-content", title: "n! Ways", type: "text", content: `The number of permutations of n distinct objects is n! = n×(n-1)×...×1. Permutations form the symmetric group Sₙ.` }],
    exercises: [{ id: "ex-perm", title: "Permutation Count", difficulty: "easy", type: "interactive", question: "How many ways to arrange 5 books on a shelf?", answer: "120", hint: "5! = 5×4×3×2×1", explanation: "5! = 120 ways.", points: 10 }],
  },
  {
    id: "ramsey-theory",
    title: "Ramsey Theory",
    description: "Finding order in large enough structures.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 92,
    content: [{ id: "ramsey-content", title: "Complete Disorder is Impossible", type: "text", content: `Ramsey theory states that in any sufficiently large system, there must be some order. Example: In any group of 6 people, 3 mutual friends or 3 mutual strangers exist.` }],
    exercises: [],
  },
]

// CATEGORY 9: COMPUTATIONAL & APPLIED (Concepts 93-99)
export const appliedConcepts: Chapter[] = [
  {
    id: "computational-complexity",
    title: "Computational Complexity",
    description: "Classifying problems by their difficulty.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 93,
    content: [{ id: "cc-content", title: "P vs NP", type: "text", content: `P is the class of problems solvable in polynomial time. NP is the class verifiable in polynomial time. The P vs NP problem is a Millennium Prize Problem.` }],
    exercises: [{ id: "ex-cc", title: "Complexity Class", difficulty: "medium", type: "multiple-choice", question: "Which is in P?", options: ["Factoring large integers", "Sorting a list", "Traveling salesman", "3-SAT"], answer: "Sorting a list", hint: "Sorting has O(n log n) algorithms.", explanation: "Sorting is in P. Factoring, TSP, and 3-SAT are not known to be in P.", points: 15 }],
  },
  {
    id: "cryptography",
    title: "Cryptography",
    description: "Mathematical techniques for secure communication.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 94,
    content: [{ id: "crypto-content", title: "Public Key Systems", type: "text", content: `RSA uses the difficulty of factoring. ECC uses elliptic curve discrete logs. Modern cryptography relies on computational hardness assumptions.` }],
    exercises: [],
  },
  {
    id: "dynamical-systems",
    title: "Dynamical Systems",
    description: "Studying how systems evolve over time.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 95,
    content: [{ id: "ds-content", title: "Chaos and Stability", type: "text", content: `Dynamical systems study iteration and differential equations. Chaos theory reveals sensitive dependence on initial conditions (butterfly effect).` }],
    exercises: [],
  },
  {
    id: "information-theory",
    title: "Information Theory",
    description: "Quantifying information and communication.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 96,
    content: [{ id: "it-content", title: "Entropy", type: "text", content: `Shannon entropy H(X) = -Σp(x)log p(x) measures uncertainty. It determines the minimum bits needed to encode information.` }],
    exercises: [{ id: "ex-it", title: "Entropy", difficulty: "medium", type: "interactive", question: "A fair coin has entropy (in bits):", answer: "1", hint: "H = -[0.5×log₂(0.5) + 0.5×log₂(0.5)]", explanation: "H = -[0.5×(-1) + 0.5×(-1)] = 1 bit.", points: 15 }],
  },
  {
    id: "linear-programming",
    title: "Linear Programming",
    description: "Optimizing linear objective functions subject to linear constraints.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 97,
    content: [{ id: "lp-content", title: "Simplex Method", type: "text", content: `Linear programming optimizes cᵀx subject to Ax ≤ b, x ≥ 0. The simplex method efficiently solves LP problems. Used in operations research.` }],
    exercises: [],
  },
  {
    id: "numerical-analysis",
    title: "Numerical Analysis",
    description: "Algorithms for approximating mathematical problems.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 98,
    content: [{ id: "na-content", title: "Approximation and Error", type: "text", content: `Numerical analysis develops algorithms for solving equations, integration, differential equations, and linear systems on computers.` }],
    exercises: [],
  },
  {
    id: "optimization",
    title: "Optimization",
    description: "Finding the best solution from all feasible solutions.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 99,
    content: [{ id: "opt-content", title: "Minima and Maxima", type: "text", content: `Optimization finds extrema of functions subject to constraints. Methods include gradient descent, Lagrange multipliers, and convex optimization.` }],
    exercises: [{ id: "ex-opt", title: "Critical Point", difficulty: "medium", type: "interactive", question: "Where is the minimum of f(x) = x² - 4x + 5?", answer: "2", hint: "Set f'(x) = 0.", explanation: "f'(x) = 2x - 4 = 0 gives x = 2. f(2) = 4 - 8 + 5 = 1 is the minimum.", points: 15 }],
  },
]


// COMBINE ALL PART III CONCEPTS
export const part03Complete: Chapter[] = [
  ...foundationsConcepts,
  ...algebraConcepts,
  ...numberTheoryConcepts,
  ...geometryConcepts,
  ...analysisConcepts,
  ...topologyConcepts,
  ...probabilityConcepts,
  ...combinatoricsConcepts,
  ...appliedConcepts,
]

// TOTAL: 99 MATHEMATICAL CONCEPTS

// Update main chapters array


// Combine all chapters
export const allChapters: Chapter[] = [
  ...chapters,
  ...part02Complete,
  ...part03Complete,
]

// Export helper functions
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
