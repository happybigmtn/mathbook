import type { Concept } from "@/types"

export const concepts: Concept[] = [
  {
    id: "axiom-of-choice",
    name: "The Axiom of Choice",
    category: "Set Theory",
    definition: "Given any collection of non-empty sets, it is possible to choose one element from each set.",
    intuition: "Imagine you have infinitely many drawers, each containing at least one sock. The Axiom of Choice says you can pick one sock from each drawer, even if you have no rule for which sock to pick.",
    examples: [
      {
        title: "Finite Collections",
        description: "For finite collections, we don't need the Axiom of Choice - we can just pick elements one by one.",
      },
      {
        title: "Infinite Collections",
        description: "For infinite collections, we might not have an explicit rule for choosing, but AC guarantees a choice exists.",
      },
    ],
    related: ["zermelo-fraenkel-axioms", "cardinals", "ordinals"],
  },
  {
    id: "compactness",
    name: "Compactness",
    category: "Topology",
    definition: "A topological space is compact if every open cover has a finite subcover.",
    intuition: "Compact sets are 'small' in a certain sense - they can be covered by finitely many sets from any collection that covers them. Think of [0,1] as being 'finite-like' compared to ℝ.",
    examples: [
      {
        title: "Closed Intervals",
        description: "[0,1] is compact - any collection of open intervals covering it has a finite subcollection that still covers it.",
      },
      {
        title: "Real Line",
        description: "ℝ is not compact - the cover {(n, n+2) : n ∈ ℤ} has no finite subcover.",
      },
    ],
    related: ["metric-spaces", "topological-spaces", "compactification"],
  },
  {
    id: "euler-formula",
    name: "Euler's Formula",
    category: "Complex Analysis",
    definition: "e^(iθ) = cos(θ) + i·sin(θ)",
    intuition: "This formula reveals a deep connection between exponential growth and circular motion. When the exponent is purely imaginary, exponential becomes rotation.",
    examples: [
      {
        title: "Euler's Identity",
        description: "When θ = π: e^(iπ) + 1 = 0, connecting five fundamental constants.",
      },
      {
        title: "Complex Multiplication",
        description: "Multiplying by e^(iθ) rotates a complex number by angle θ.",
      },
    ],
    related: ["trigonometric-functions", "complex-numbers", "fourier-transform"],
  },
  {
    id: "groups",
    name: "Groups",
    category: "Algebra",
    definition: "A group is a set G with a binary operation · satisfying: closure, associativity, identity, and inverses.",
    intuition: "Groups capture symmetry. The group of symmetries of an object describes all the ways you can transform the object while preserving its essential structure.",
    examples: [
      {
        title: "Symmetries of a Triangle",
        description: "The dihedral group D₃ has 6 elements: 3 rotations and 3 reflections.",
      },
      {
        title: "Integers under Addition",
        description: "(ℤ, +) is a group with identity 0 and inverse -n for each n.",
      },
    ],
    related: ["galois-groups", "lie-theory", "homotopy-groups"],
  },
  {
    id: "manifolds",
    name: "Manifolds",
    category: "Geometry",
    definition: "A manifold is a space that locally looks like Euclidean space.",
    intuition: "The surface of the Earth is a 2-manifold: locally it looks flat, but globally it's curved. Manifolds generalize curves and surfaces to higher dimensions.",
    examples: [
      {
        title: "Circle S¹",
        description: "A 1-manifold that locally looks like a line.",
      },
      {
        title: "Sphere S²",
        description: "A 2-manifold that locally looks like a plane.",
      },
      {
        title: "Torus T²",
        description: "The surface of a donut, a 2-manifold with 'holes'.",
      },
    ],
    related: ["riemann-surfaces", "calabi-yau-manifolds", "symplectic-manifolds"],
  },
  {
    id: "prime-numbers",
    name: "Prime Numbers",
    category: "Number Theory",
    definition: "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.",
    intuition: "Primes are the 'atoms' of number theory - every number factors uniquely into primes. They are the building blocks of all integers.",
    examples: [
      {
        title: "Fundamental Theorem of Arithmetic",
        description: "Every integer n > 1 can be written uniquely as a product of primes.",
      },
      {
        title: "Infinitely Many Primes",
        description: "Euclid proved there are infinitely many primes over 2000 years ago.",
      },
    ],
    related: ["riemann-zeta-function", "analytic-number-theory", "computational-number-theory"],
  },
]

export function getConceptById(id: string): Concept | undefined {
  return concepts.find((c) => c.id === id)
}

export function getConceptsByCategory(category: string): Concept[] {
  return concepts.filter((c) => c.category === category)
}
