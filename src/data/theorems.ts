import type { Theorem } from "@/types"

export const theorems: Theorem[] = [
  {
    id: "pythagorean-theorem",
    name: "The Pythagorean Theorem",
    statement: "In a right triangle with legs of length a and b and hypotenuse of length c: a² + b² = c²",
    proof: `
**Visual Proof:**

Imagine four copies of the right triangle arranged to form a square with side length (a+b).

The area of the large square is (a+b)².

Inside, there's a smaller square with side c, plus four triangles each with area ab/2.

So: (a+b)² = c² + 4(ab/2) = c² + 2ab

Expanding: a² + 2ab + b² = c² + 2ab

Therefore: a² + b² = c²
    `,
    significance: "The Pythagorean theorem is fundamental to geometry and has countless applications in science, engineering, and everyday life. It connects geometry to algebra and is the basis for the distance formula.",
    applications: [
      "Navigation and GPS",
      "Architecture and construction",
      "Computer graphics",
      "Physics (vector calculations)",
    ],
    history: "Known to ancient Babylonians and Indians, the theorem is named after Pythagoras (c. 570-495 BCE), though he may not have been the first to prove it. Euclid gave a proof in his Elements.",
  },
  {
    id: "fundamental-theorem-arithmetic",
    name: "The Fundamental Theorem of Arithmetic",
    statement: "Every integer greater than 1 can be uniquely factored into prime numbers (up to ordering).",
    proof: `
**Existence (by strong induction):**

Base case: 2 is prime.

Inductive step: Assume all integers < n factor into primes. If n is prime, done. Otherwise, n = ab where 1 < a, b < n. By induction, a and b factor into primes, so n does too.

**Uniqueness:**

Suppose n = p₁p₂...pᵣ = q₁q₂...qₛ with pᵢ, qⱼ prime.

Since p₁ divides the product q₁q₂...qₛ, by Euclid's lemma, p₁ divides some qⱼ.

Since qⱼ is prime, p₁ = qⱼ. Cancel and repeat.
    `,
    significance: "This theorem establishes primes as the 'building blocks' of the integers. Unique factorization is crucial for number theory and cryptography.",
    applications: [
      "Cryptography (RSA algorithm)",
      "Number theory",
      "Computer science algorithms",
      "Error-correcting codes",
    ],
    history: "First stated and proved by Euclid in his Elements (Book IX, Proposition 14). The uniqueness part is more subtle and was fully understood later.",
  },
  {
    id: "fundamental-theorem-algebra",
    name: "The Fundamental Theorem of Algebra",
    statement: "Every non-constant polynomial with complex coefficients has at least one complex root.",
    proof: `
**Sketch (using complex analysis):**

Let P(z) be a non-constant polynomial.

As |z| → ∞, |P(z)| → ∞.

Therefore |P(z)| attains a minimum at some point z₀.

If P(z₀) ≠ 0, consider Q(z) = P(z₀ + z)/P(z₀).

Near 0, Q(z) = 1 + azᵏ + higher order terms.

By choosing z appropriately, we can make |Q(z)| < 1, contradicting minimality.

Therefore P(z₀) = 0.
    `,
    significance: "This theorem guarantees that the complex numbers are 'algebraically closed' - every polynomial equation has a solution. This makes ℂ the natural setting for studying polynomials.",
    applications: [
      "Solving polynomial equations",
      "Linear algebra (eigenvalues always exist)",
      "Control theory",
      "Signal processing",
    ],
    history: "First proved by Gauss in his 1799 doctoral dissertation. He gave several proofs throughout his career. The first rigorous proof is attributed to Argand in 1806.",
  },
  {
    id: "eulers-identity",
    name: "Euler's Identity",
    statement: "e^(iπ) + 1 = 0",
    proof: `
**Proof from Euler's formula:**

Euler's formula states: e^(iθ) = cos(θ) + i·sin(θ)

Substitute θ = π:

e^(iπ) = cos(π) + i·sin(π) = -1 + i·0 = -1

Therefore: e^(iπ) + 1 = 0
    `,
    significance: "Often called the most beautiful equation in mathematics, Euler's identity connects five fundamental constants: e, i, π, 1, and 0. It reveals deep connections between exponential functions and trigonometry.",
    applications: [
      "Complex analysis",
      "Signal processing (Fourier analysis)",
      "Quantum mechanics",
      "Electrical engineering",
    ],
    history: "Leonhard Euler discovered this relationship in the 18th century. It's a special case of his more general formula e^(iθ) = cos(θ) + i·sin(θ).",
  },
  {
    id: "central-limit-theorem",
    name: "The Central Limit Theorem",
    statement: "The sum of a large number of independent random variables is approximately normally distributed, regardless of the underlying distribution.",
    proof: `
**Sketch (using characteristic functions):**

Let X₁, X₂, ..., Xₙ be i.i.d. random variables with mean μ and variance σ².

Let Sₙ = X₁ + ... + Xₙ.

The characteristic function of (Sₙ - nμ)/(σ√n) is:

φₙ(t) = [φ((t/σ√n))]ⁿ where φ is the characteristic function of X₁ - μ

Using Taylor expansion: φ(s) ≈ 1 - σ²s²/2 + o(s²)

So: φₙ(t) ≈ [1 - t²/(2n) + o(1/n)]ⁿ → e^(-t²/2) as n → ∞

This is the characteristic function of the standard normal distribution.
    `,
    significance: "The Central Limit Theorem explains why the normal distribution appears so frequently in nature. It's the foundation of statistical inference.",
    applications: [
      "Statistical hypothesis testing",
      "Quality control",
      "Polling and surveys",
      "Physics (Brownian motion)",
      "Finance (modeling returns)",
    ],
    history: "First proved by Laplace in 1810. The name 'Central Limit Theorem' was coined by Pólya in 1920, emphasizing its central role in probability theory.",
  },
  {
    id: "four-color-theorem",
    name: "The Four Color Theorem",
    statement: "Any map can be colored using at most four colors such that no two adjacent regions have the same color.",
    proof: `
**Proof approach:**

The first computer-assisted proof was given by Appel and Haken in 1976.

Key ideas:
1. Show that any map contains at least one of 633 'unavoidable configurations'
2. Prove that each configuration is 'reducible' (can't appear in a minimal counterexample)
3. Therefore, no minimal counterexample exists

The proof required checking thousands of cases by computer, which was controversial at the time.
    `,
    significance: "The Four Color Theorem was the first major theorem proved with substantial computer assistance. It raised important questions about the nature of mathematical proof.",
    applications: [
      "Map coloring",
      "Register allocation in compilers",
      "Scheduling problems",
      "Pattern matching",
    ],
    history: "First conjectured by Francis Guthrie in 1852. Many false proofs were given before Appel and Haken's computer-assisted proof in 1976. A simpler proof was given by Robertson, Sanders, Seymour, and Thomas in 1997.",
  },
  {
    id: "fermats-last-theorem",
    name: "Fermat's Last Theorem",
    statement: "For n > 2, the equation xⁿ + yⁿ = zⁿ has no solutions in positive integers.",
    proof: `
**Proof sketch (Wiles, 1994):**

The proof connects three major areas of mathematics:

1. **Elliptic curves**: Equations of the form y² = x³ + ax + b
2. **Modular forms**: Complex functions with symmetry properties
3. **Galois representations**: Algebraic structures encoding symmetries

Wiles proved the Taniyama-Shimura conjecture for semistable elliptic curves, which implies Fermat's Last Theorem via Ribet's epsilon conjecture.

The proof is extremely complex, spanning over 100 pages.
    `,
    significance: "Fermat's Last Theorem was the most famous unsolved problem in mathematics for over 350 years. Its proof demonstrated the power of connecting different areas of mathematics.",
    applications: [
      "Algebraic number theory",
      "Elliptic curve cryptography",
      "Modular forms research",
    ],
    history: "Fermat claimed to have a proof in 1637, but the margin was too small to contain it. The theorem was finally proved by Andrew Wiles in 1994, with a gap fixed in 1995 with Taylor's help.",
  },
  {
    id: "prime-number-theorem",
    name: "The Prime Number Theorem",
    statement: "The number of primes less than or equal to x, denoted π(x), is asymptotically equal to x/ln(x).",
    proof: `
**Sketch (using complex analysis):**

The proof uses the Riemann zeta function ζ(s) = Σ(1/nˢ).

Key steps:
1. Relate π(x) to the logarithmic integral via the zeta function
2. Show that ζ(s) has no zeros on the line Re(s) = 1
3. Use contour integration to estimate the error term

The prime number theorem follows from the analytic properties of ζ(s).
    `,
    significance: "The Prime Number Theorem describes the distribution of prime numbers. It shows that primes become less frequent as numbers get larger, but in a predictable way.",
    applications: [
      "Cryptography (key generation)",
      "Random number generation",
      "Computational number theory",
      "Analytic number theory",
    ],
    history: "Conjectured by Gauss and Legendre around 1796. First proved independently by Hadamard and de la Vallée Poussin in 1896. An elementary proof was found by Erdős and Selberg in 1949.",
  },
]

export function getTheoremById(id: string): Theorem | undefined {
  return theorems.find((t) => t.id === id)
}
