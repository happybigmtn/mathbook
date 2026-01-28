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

// PART III: MATHEMATICAL CONCEPTS
export const part03Complete: Chapter[] = [
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
        content: `
The Axiom of Choice (AC) states:

**Given any collection of non-empty sets, it is possible to choose one element from each set.**

**The Sock Analogy**: Imagine you have infinitely many drawers, each containing at least one sock. The Axiom of Choice says you can pick one sock from each drawer, even if you have no rule for which sock to pick.

**For finite collections**: We don't need AC - we can just pick elements one by one.

**For infinite collections**: We might not have an explicit rule for choosing, but AC guarantees a choice exists.

The controversy: AC allows us to prove the existence of objects we can't explicitly construct.
        `,
      },
      {
        id: "consequences",
        title: "Surprising Consequences",
        type: "text",
        content: `
AC leads to some counterintuitive results:

**The Banach-Tarski Paradox**: A solid ball can be decomposed into finitely many pieces and reassembled into two balls identical to the original!

**Non-measurable sets**: There exist subsets of ℝ that have no well-defined volume.

**The Well-Ordering of ℝ**: The real numbers can be well-ordered, but no one has ever constructed such a well-ordering.

**Hamel bases**: Every vector space has a basis, but for most infinite-dimensional spaces (like ℝ as a vector space over ℚ), no explicit basis is known.

These consequences are why AC remains controversial - it proves things exist without showing us what they are.
        `,
      },
    ],
    exercises: [
      {
        id: "ex-3-ac-1",
        title: "Finite vs Infinite",
        difficulty: "easy",
        type: "multiple-choice",
        question: "For which collections do we NOT need the Axiom of Choice to make a selection?",
        options: ["Finite collections", "Countably infinite collections", "Uncountable collections", "All infinite collections"],
        answer: "Finite collections",
        hint: "We can explicitly choose from finitely many sets without any special axiom.",
        explanation: "For finite collections, we can make choices explicitly without needing the Axiom of Choice. AC is only needed for infinite collections where we can't specify a selection rule.",
        points: 10,
      },
    ],
  },
  {
    id: "compactness",
    title: "Compactness",
    description: "A fundamental concept in topology and analysis with powerful consequences.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 2,
    content: [
      {
        id: "what-is-compactness",
        title: "What is Compactness?",
        type: "text",
        content: `
Compactness is one of the most important concepts in topology and analysis.

**Definition**: A topological space is compact if every open cover has a finite subcover.

**Intuition**: Compact sets are "small" or "finite-like" in a certain sense. They can be covered by finitely many sets from any collection that covers them.

**In ℝⁿ**: A subset is compact if and only if it is closed and bounded (Heine-Borel theorem).

**Examples**:
- [0, 1] is compact
- (0, 1) is not compact (not closed)
- [0, ∞) is not compact (not bounded)
- ℝ is not compact

Compactness generalizes the notion of finiteness to topological spaces.
        `,
      },
    ],
    exercises: [
      {
        id: "ex-3-compact-1",
        title: "Compact in R^n",
        difficulty: "medium",
        type: "multiple-choice",
        question: "Which set is compact in ℝ?",
        options: ["(0, 1)", "[0, 1]", "[0, ∞)", "ℝ"],
        answer: "[0, 1]",
        hint: "In ℝⁿ, compact = closed and bounded.",
        explanation: "[0, 1] is compact because it's closed (contains its endpoints) and bounded. (0, 1) is not closed, [0, ∞) is not bounded, and ℝ is neither closed nor bounded in itself.",
        points: 15,
      },
    ],
  },
  {
    id: "euler-formula",
    title: "Euler's Formula",
    description: "The most beautiful equation in mathematics connecting five fundamental constants.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 3,
    content: [
      {
        id: "the-formula",
        title: "e^(iπ) + 1 = 0",
        type: "text",
        content: `
Euler's identity is often called the most beautiful equation in mathematics. It connects five fundamental constants:

- **e** ≈ 2.718... (base of natural logarithms)
- **i** (imaginary unit, i² = -1)
- **π** ≈ 3.141... (ratio of circumference to diameter)
- **1** (multiplicative identity)
- **0** (additive identity)

**Euler's Formula**: e^(iθ) = cos(θ) + i·sin(θ)

When θ = π: e^(iπ) = cos(π) + i·sin(π) = -1 + 0 = -1

Therefore: e^(iπ) + 1 = 0

This identity reveals a deep connection between exponential functions and trigonometry.
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
        id: "ex-3-euler-1",
        title: "Euler's Formula",
        difficulty: "medium",
        type: "interactive",
        question: "Using Euler's formula e^(iθ) = cos(θ) + i·sin(θ), what is e^(iπ)?",
        answer: "-1",
        hint: "Substitute θ = π. What are cos(π) and sin(π)?",
        explanation: "e^(iπ) = cos(π) + i·sin(π) = -1 + i·0 = -1. Therefore e^(iπ) + 1 = 0.",
        points: 15,
      },
    ],
  },
  {
    id: "groups",
    title: "Groups",
    description: "The algebraic study of symmetry and structure.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 4,
    content: [
      {
        id: "group-definition",
        title: "What is a Group?",
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

Groups capture the essence of symmetry and structure.
        `,
      },
    ],
    exercises: [
      {
        id: "ex-3-groups-1",
        title: "Group Order",
        difficulty: "easy",
        type: "interactive",
        question: "What is the order (number of elements) of the symmetry group of a square?",
        answer: "8",
        hint: "A square has 4 rotations and 4 reflections.",
        explanation: "The dihedral group D₈ has 8 elements: 4 rotations (0°, 90°, 180°, 270°) and 4 reflections.",
        points: 10,
      },
    ],
  },
  {
    id: "prime-numbers",
    title: "Prime Numbers",
    description: "The building blocks of all integers, with mysteries that continue to challenge mathematicians.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 5,
    content: [
      {
        id: "what-are-primes",
        title: "What Are Prime Numbers?",
        type: "text",
        content: `
A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

**First primes**: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...

**The Fundamental Theorem of Arithmetic**: Every integer n > 1 can be written uniquely as a product of primes (up to ordering).

**Examples**:
- 60 = 2² × 3 × 5
- 100 = 2² × 5²
- 17 = 17 (prime)

This makes primes the "atoms" of number theory - every number factors uniquely into primes.
        `,
      },
      {
        id: "infinitely-many",
        title: "Infinitely Many Primes",
        type: "text",
        content: `
**Euclid's Proof** (c. 300 BCE) that there are infinitely many primes:

**Proof by contradiction**:

1. Suppose there are only finitely many primes: p₁, p₂, ..., pₙ

2. Consider N = p₁ × p₂ × ... × pₙ + 1

3. N is not divisible by any of p₁, p₂, ..., pₙ (remainder is always 1)

4. So either N is prime, or N has a prime factor not in our list

5. Either way, we found a prime not in our original list - contradiction!

**Conclusion**: There must be infinitely many primes.

This is one of the most elegant proofs in mathematics - simple yet profound.
        `,
      },
      {
        id: "distribution",
        title: "The Distribution of Primes",
        type: "text",
        content: `
How are primes distributed among the integers?

**The Prime Number Theorem**: The number of primes ≤ x, denoted π(x), is approximately x/ln(x).

**In other words**: The probability that a random number n is prime is about 1/ln(n).

**Examples**:
- Around 1 million, about 1 in 14 numbers is prime
- Around 1 billion, about 1 in 21 numbers is prime

**The Riemann Hypothesis**: A conjecture about the zeros of the Riemann zeta function that would give even more precise information about prime distribution.
- One of the seven Millennium Prize Problems
- A proof would win $1 million

Despite intense study, many basic questions about primes remain unanswered.
        `,
      },
    ],
    exercises: [
      {
        id: "ex-3-primes-1",
        title: "Prime Factorization",
        difficulty: "easy",
        type: "interactive",
        question: "What is the prime factorization of 84?",
        answer: "2^2 * 3 * 7",
        hint: "Divide by 2 first, then continue factoring.",
        explanation: "84 = 2 × 42 = 2 × 2 × 21 = 2² × 3 × 7",
        points: 10,
      },
    ],
  },
  {
    id: "dimension",
    title: "Dimension",
    description: "From lines to fractals, the concept of dimension has evolved dramatically.",
    part: "part-03",
    partTitle: "Mathematical Concepts",
    order: 6,
    content: [
      {
        id: "what-is-dimension",
        title: "What is Dimension?",
        type: "text",
        content: `
Dimension is our intuitive notion of how many independent directions exist in a space.

**Classical Dimensions**:
- A point has dimension 0
- A line has dimension 1
- A plane has dimension 2
- Space has dimension 3

**Formal Definitions**:

**Vector Space Dimension**: The number of vectors in a basis
- ℝⁿ has dimension n
- The space of polynomials has infinite dimension

**Topological Dimension**: Based on the behavior of boundaries
- Inductive definition: dim(X) = 1 + dim(boundary of X)

**Hausdorff Dimension**: For metric spaces, based on how volume scales
- For a d-dimensional object, volume scales as r^d

These definitions usually agree, but not always!
        `,
      },
      {
        id: "fractal-dimension",
        title: "Fractal Dimension",
        type: "text",
        content: `
Fractals have fractional dimension - they don't fit neatly into our usual categories!

**Example: The Koch Snowflake**
- Start with an equilateral triangle
- Replace the middle third of each side with two sides of a smaller triangle
- Repeat infinitely

**Properties**:
- Infinite length (perimeter → ∞)
- Finite area
- Dimension = log(4)/log(3) ≈ 1.26

**How to calculate**: At each step, we replace 1 segment with 4 segments, each 1/3 as long.

Dimension d satisfies: 4 = 3^d, so d = log(4)/log(3)

Fractal dimension measures how "rough" or "complex" a shape is.
        `,
      },
    ],
    exercises: [
      {
        id: "ex-3-dim-1",
        title: "Fractal Dimension",
        difficulty: "hard",
        type: "interactive",
        question: "The Cantor set is formed by repeatedly removing the middle third of intervals. What is its Hausdorff dimension?",
        answer: "log(2)/log(3)",
        hint: "At each step, we keep 2 copies, each 1/3 the size. Solve 2 = 3^d.",
        explanation: "For the Cantor set, at each iteration we keep 2 copies, each scaled by 1/3. The dimension d satisfies 2 = 3^d, so d = log(2)/log(3) ≈ 0.63.",
        points: 20,
      },
    ],
  },
]

// Combine all chapters from all parts
export const allChapters: Chapter[] = [
  ...chapters,
  ...part02Complete,
  ...part03Complete,
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
