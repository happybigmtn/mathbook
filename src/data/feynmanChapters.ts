import type { FeynmanChapter } from "@/types"

// I.1 What Is Mathematics About? - FEYNMAN LECTURES STYLE
// Written from scratch - NOT copied from Full Text
// Contains visualizations but NO annotations (annotations go in Full Text)

export const whatIsMathematicsFeynman: FeynmanChapter = {
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
      content: `So what exactly is mathematics? We could try to give a definition, but let's be honest—any definition we write down will probably miss something important. Instead, let's think about what mathematicians actually do.

Mathematicians are in the business of finding patterns and understanding structure. When we look at the world, we see relationships, regularities, and behaviors that repeat. Mathematics is the language we use to describe these patterns precisely.

But here's the thing—mathematics isn't just about describing the world we see. Mathematicians create entirely new worlds by imagining structures that might not have any physical counterpart. We ask: "What if we had a system where these rules held?" Then we explore the consequences.

Let me give you an analogy. Think of a novelist who creates a fictional world with its own rules. Mathematicians do something similar, but our "worlds" are made of abstract structures, and our "rules" are axioms and definitions. The difference is that in mathematics, once you set up the rules, the consequences are inevitable—you don't get to choose what happens.

So when we ask "What is mathematics about?" we're really asking: What kinds of patterns do mathematicians study, and how do they study them?`,
    },
    {
      id: "math-branches-visual",
      title: "The Three Great Branches",
      type: "interactive",
      content: "Interactive visualization showing how Algebra, Geometry, and Analysis form the foundation of mathematics",
      component: "MathBranchesVisualizer",
    },
    {
      id: "algebra-explained",
      title: "Algebra: The Study of Structure",
      type: "text",
      content: `Let's start with algebra. When you hear the word "algebra," you might think of solving equations like $x + 5 = 12$ or manipulating expressions like $(a + b)^2 = a^2 + 2ab + b^2$. And yes, that's part of it. But algebra at its heart is about something deeper: structure.

What do I mean by structure? Imagine you have a set of objects—let's say numbers—and you have operations you can perform on them, like addition and multiplication. Algebra asks: What properties do these operations have? What can we deduce just from knowing these properties?

For example, think about the rule that $a \\times b = b \\times a$. We call this the commutative property. Why is it true? Well, we could prove it using the axioms of arithmetic. But there's a more intuitive way to see it.

Imagine you have a rectangular array of dots—say, 3 rows with 4 dots in each row. How many dots total? You could count row by row: 4 + 4 + 4 = 12. That's $3 \\times 4$. Or you could count column by column: 3 + 3 + 3 + 3 = 12. That's $4 \\times 3$. Same dots, same total, just counted differently. So $3 \\times 4 = 4 \\times 3$.

This isn't just a coincidence for 3 and 4. No matter what numbers $a$ and $b$ you choose, arranging $a$ rows of $b$ dots gives the same total as arranging $b$ rows of $a$ dots. The rectangle just looks rotated. This geometric insight tells us something algebraic: multiplication is commutative.

But algebra goes much further. We can ask: What other structures have commutative operations? What about structures where the operation isn't commutative? (Matrix multiplication, for instance—if $A$ and $B$ are matrices, $AB$ is generally not equal to $BA$.) By studying these abstract structures—groups, rings, fields—we discover patterns that apply across many different mathematical contexts.

The power of algebra is that once you understand a structure abstractly, you can apply that understanding anywhere that structure appears.`,
    },
    {
      id: "commutativity-visual",
      title: "Visual Proof: Why Multiplication Commutes",
      type: "interactive",
      content: "Interactive demonstration showing how $a \\times b = b \\times a$ through geometric arrangement",
      component: "CommutativePropertyDemo",
    },
    {
      id: "geometry-explained",
      title: "Geometry: The Study of Space",
      type: "text",
      content: `Now let's talk about geometry. In high school, geometry is often about triangles, circles, angles, and proofs. You memorize that the angles of a triangle sum to 180 degrees, that the Pythagorean theorem says $a^2 + b^2 = c^2$, and so on.

But geometry at a deeper level is about space and shape. What do we mean by "space"? Intuitively, it's the arena where geometric objects live. But mathematicians have discovered that there are many different kinds of spaces, each with their own properties.

Think about the difference between a flat plane and the surface of a sphere. On a flat plane, if you walk in a straight line, you keep going forever. On a sphere, if you walk in a "straight line" (what we call a geodesic), you eventually come back to where you started. The geometry of the sphere is fundamentally different from the geometry of the plane.

Or consider this: On a plane, given a line and a point not on that line, there's exactly one line through the point that never intersects the original line. This is the parallel postulate, one of Euclid's famous axioms. But what if we change that rule? What if we say there are no parallel lines? Or infinitely many? These different choices lead to different geometries—hyperbolic geometry, elliptic geometry—and each one is internally consistent and mathematically rich.

Geometry also connects to algebra in deep ways. Descartes showed us that we can describe geometric objects using equations. A circle isn't just a curve—it's the set of all points $(x, y)$ satisfying $x^2 + y^2 = r^2$. This bridge between geometry and algebra, called analytic geometry, lets us use algebraic tools to solve geometric problems and geometric intuition to understand algebraic structures.

Modern geometry has expanded far beyond these classical ideas. We study spaces with many dimensions, spaces that are curved in complex ways (this is crucial for Einstein's general relativity), and abstract spaces that might not look like "space" in any conventional sense at all.`,
    },
    {
      id: "analysis-explained",
      title: "Analysis: The Study of Change and Limits",
      type: "text",
      content: `The third major branch is analysis, and this is probably the least familiar to most people. Analysis grew out of calculus, which was invented by Newton and Leibniz in the 17th century to understand motion and change.

Here's the central question that calculus tries to answer: How do we deal with quantities that change continuously? If something is moving, its position changes every instant. If a curve is smooth, its slope changes gradually from point to point. How do we describe these changes mathematically?

The key concept is the limit. This is a subtle idea that took mathematicians nearly two centuries to get completely right. Let me try to explain what we mean.

Suppose we want to find the slope of a curve at a particular point. We can't just draw a line and measure it—the curve is curved! So here's what we do instead. We draw a line that intersects the curve at two nearby points. This line is called a secant line, and we can calculate its slope easily.

Now, here's the clever part. We move one of the points closer and closer to our target point. As we do this, the secant line changes. But if we look at what happens as the two points get arbitrarily close together—without ever quite being the same point—we find that the secant lines approach a limiting position. That limiting line is what we call the tangent line, and its slope is the derivative.

What we're doing here is capturing the idea of "instantaneous rate of change." The derivative tells us how fast something is changing at a particular moment.

But there's a technical difficulty here. We're talking about what happens as two points get "arbitrarily close" together. What does that mean exactly? This is where the rigorous definition of a limit comes in.

We say that a sequence of values approaches a limit $L$ if, no matter how small a tolerance $\\varepsilon$ we choose, eventually all the values in the sequence are within $\\varepsilon$ of $L$. This $\\varepsilon$-definition of a limit, developed in the 19th century, finally put calculus on a solid logical foundation.

Analysis studies these limiting processes systematically. It deals with questions like: When do limits exist? When can we interchange limiting operations? (For instance, can we take the limit of a sum by taking the sum of the limits?) These questions might seem technical, but they're essential for ensuring that the mathematical structures we build are sound.

The contrast between algebra and analysis is interesting. Algebra often deals with exact equations and finite operations. Analysis deals with approximations and infinite processes. In algebra, we prove that two things are exactly equal. In analysis, we often prove that two things are arbitrarily close—which turns out to be just as useful.`,
    },
    {
      id: "questions-mathematicians-ask",
      title: "The Questions Mathematicians Ask",
      type: "text",
      content: `Now that we've talked about the three main branches, let's think about another way to understand mathematics: by the kinds of questions mathematicians ask.

Mathematicians aren't just cataloging facts. They're asking deep questions that drive the subject forward. Here are some of the most fundamental types:

**Existence questions**: Does an object with certain properties exist? For example: Is there a largest prime number? (No, there isn't—Euclid proved this over 2,000 years ago.) Is there a formula for solving all polynomial equations? (No, but this wasn't proven until the 19th century.) These existence questions often require proof by contradiction—we assume the object exists and derive a logical contradiction.

**Classification questions**: Can we organize all objects of a certain type? For instance, can we classify all finite simple groups? This turned out to be one of the great achievements of 20th-century mathematics. The classification theorem, completed in 2004 after decades of work by hundreds of mathematicians, describes all the possible building blocks of symmetry. It's like the periodic table of elements, but for algebraic structures.

**Structure questions**: What internal relationships exist within a system? Group theory studies symmetry structures. Topology studies shapes up to continuous deformation. Category theory studies the common patterns across different mathematical structures. Understanding structure reveals deep patterns that might not be visible when looking at individual examples.

**Transformation questions**: How do objects change under various operations? This is central to dynamical systems, geometry, and algebra. We might study what happens when we apply the same transformation over and over, or how a system evolves over time. Symmetry itself can be understood as a transformation that leaves something unchanged.

**Optimization questions**: What is the best possible outcome under constraints? This is the domain of calculus of variations, linear programming, and much of applied mathematics. Interestingly, nature often solves optimization problems—light takes the fastest path between two points, soap bubbles minimize their surface area, and animals often behave in ways that optimize their energy usage.

What's remarkable is that these same types of questions appear across all branches of mathematics. Whether we're studying numbers, shapes, or functions, we're asking about existence, classification, structure, transformation, and optimization. These questions reveal deep unities underlying the apparent diversity of mathematical topics.`,
    },
  ],
}

// I.2 The Language and Grammar of Mathematics - FEYNMAN LECTURES STYLE
export const languageAndGrammarFeynman: FeynmanChapter = {
  id: "language-and-grammar",
  title: "The Language and Grammar of Mathematics",
  description: "Understanding mathematical notation, symbols, and the logical structure of mathematical statements.",
  part: "part-01",
  partTitle: "Introduction",
  order: 2,
  content: [
    {
      id: "notation-power",
      title: "The Power of Good Notation",
      type: "text",
      content: `Let's talk about notation. You might think notation is just a convenience—a way to save ink by writing $\sqrt{2}$ instead of "the number which when multiplied by itself gives 2." But it's much more than that. Good notation actually shapes how we think.

Here's what I mean. When you see the symbol $=$, you're not just seeing two parallel lines. You're seeing a relationship that says: "These two things are the same, even if they look different." This is profound. It means we can transform one expression into another while preserving truth.

Consider the difference between writing out equations in words versus using symbols. In the 16th century, algebra problems looked like this: "The cube and twelve times the side is equal to six times the square and thirty-five." Today we write: $x^3 + 12x = 6x^2 + 35$. The symbolic form isn't just shorter—it's clearer. We can see the structure immediately. We can manipulate it more easily.

The evolution of mathematical notation is really the story of how we learned to externalize our thinking. Each improvement in notation made it possible to see patterns that were previously invisible.

Take the summation notation $\sum_{i=1}^{n} i^2$. In words: "The sum of the squares of the first n natural numbers." But the symbol $\sum$ (Greek sigma, for "sum") captures something important: we're performing an operation repeatedly. The notation suggests that we might find patterns in this repeated operation, that we might discover a closed form.

And indeed we can: $\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$. The notation helped us discover this formula by making the pattern visible.

This is the power of good notation: it doesn't just record ideas, it creates them.`,
    },
    {
      id: "notation-evolution-viz",
      title: "How Notation Evolved",
      type: "interactive",
      content: "Interactive timeline showing the evolution of mathematical notation from verbose descriptions to compact symbols",
      component: "NotationEvolution",
    },
    {
      id: "quantifiers-explained",
      title: "The Quantifiers: ∀ and ∃",
      type: "text",
      content: `Now let's talk about two symbols that pack an enormous amount of meaning into a very small space: the quantifiers.

The symbol $\forall$ means "for all" or "for every." When we write $\forall x \in \mathbb{R}$, we're making a bold claim: "For every real number x..." Whatever comes next must be true for every single real number, no exceptions.

The symbol $\exists$ means "there exists." When we write $\exists y \in \mathbb{Z}$, we're saying: "There is at least one integer y such that..." We don't know which one, we don't know how many there are, but we know at least one exists.

These symbols might seem like mere abbreviations, but they capture something fundamental about mathematical existence. When we prove that something exists, we're doing something very different from when we prove that something is true for all cases.

Here's an important subtlety: the order of quantifiers matters enormously. Compare these two statements:

1. $\forall x \exists y (y > x)$: "For every number x, there exists a number y that is greater than x."
2. $\exists y \forall x (y > x)$: "There exists a number y that is greater than every number x."

The first is true—no matter what number you pick, I can always find a larger one. The second is false—there is no largest number. The only difference is the order of the quantifiers, but the meaning is completely different.

This is why mathematicians are so careful about quantifier order. It's not pedantry—it's the difference between truth and falsehood.

When you see nested quantifiers, read them from left to right, thinking about who gets to choose. In $\forall x \exists y$, the opponent chooses x first, then you get to respond with y. In $\exists y \forall x$, you have to commit to y before knowing what x will be. This game-theoretic interpretation makes the logic clear.`,
    },
    {
      id: "quantifiers-viz",
      title: "Visualizing Quantifiers",
      type: "interactive",
      content: "Interactive demonstration showing the difference between ∀ and ∃, and why order matters",
      component: "QuantifierDemo",
    },
    {
      id: "logical-connectives",
      title: "Logical Connectives",
      type: "text",
      content: `Mathematical statements are built from simpler statements using logical connectives. Let's understand what each one means.

**AND ($\wedge$)**: "A and B" is true only when both A and B are true. If either one is false, the whole statement is false. This is the strictest connective—it demands everything.

**OR ($\vee$)**: "A or B" is true when at least one of A or B is true. Importantly, in mathematics "or" is usually inclusive—it includes the case where both are true. So if I say "x < 0 or x > 10," and x happens to be -5, that's fine. If x is 15, that's fine too. The statement is satisfied in either case.

**NOT ($\neg$)**: "Not A" flips the truth value. If A is true, $\neg A$ is false, and vice versa. This seems simple, but negation can be subtle. The negation of "All swans are white" is not "All swans are not white"—it's "There exists a swan that is not white." Just one counterexample defeats a universal claim.

**IMPLIES ($\Rightarrow$)**: This is the workhorse of mathematical proof. "A implies B" means: if A is true, then B must be true. It says nothing about what happens if A is false.

Here's something that confuses people: if A is false, then "A implies B" is automatically true, no matter what B is. This is called vacuous truth. It sounds strange, but think about it this way: "If pigs can fly, then I'm a billionaire" is a true statement because pigs can't fly. The promise was never put to the test.

**IFF ($\Leftrightarrow$)**: "A if and only if B" means A and B are equivalent—they're either both true or both false. This is shorthand for "A implies B AND B implies A."

Understanding these connectives is essential because they form the grammar of mathematical reasoning. Every proof, every theorem, every definition uses them.`,
    },
  ],
}

// I.3 Some Fundamental Mathematical Definitions - FEYNNMAN LECTURES STYLE
export const fundamentalDefinitionsFeynman: FeynmanChapter = {
  id: "fundamental-definitions",
  title: "Some Fundamental Mathematical Definitions",
  description: "Key definitions that every mathematician knows: sets, functions, relations, and the hierarchy of number systems.",
  part: "part-01",
  partTitle: "Introduction",
  order: 3,
  content: [
    {
      id: "number-systems-hierarchy",
      title: "The Hierarchy of Numbers",
      type: "text",
      content: `Let's talk about numbers. We all start counting with 1, 2, 3, and so on. These are the natural numbers, denoted $\mathbb{N}$. They seem simple, but even here there are subtleties. Is 0 a natural number? Some mathematicians say yes, some say no. Both conventions exist, and as long as we're clear about which we're using, either is fine.

But the natural numbers have limitations. We can't subtract freely. If I ask "What is 3 minus 5?" in the natural numbers, there's no answer. So we expand to the integers, $\mathbb{Z}$, which include negative numbers and zero.

The notation $\mathbb{Z}$ comes from the German word "Zahlen" meaning numbers. In this system, we can always subtract: $3 - 5 = -2$. But we still can't always divide. If I ask "What is 3 divided by 2?" there's no integer answer.

So we expand again to the rational numbers, $\mathbb{Q}$ (for quotients). These are all fractions $p/q$ where $p$ and $q$ are integers and $q \neq 0$. Now we can divide (except by zero), and we can represent measurements precisely.

But wait—the ancient Greeks discovered that some lengths can't be expressed as fractions. The diagonal of a unit square has length $\sqrt{2}$, and they proved this is irrational. It cannot be written as $p/q$ for any integers $p$ and $q$.

This was a crisis for the Pythagoreans, who believed "all is number." The existence of irrational numbers meant that geometry and arithmetic were fundamentally different realms.

So we expand once more to the real numbers, $\mathbb{R}$. These include all rational numbers plus all irrational numbers—numbers like $\sqrt{2}$, $\pi$, and $e$ that have infinite non-repeating decimal expansions.

Finally, we discover that even the real numbers aren't complete. The equation $x^2 = -1$ has no real solution. So we introduce the complex numbers, $\mathbb{C}$, of the form $a + bi$ where $i^2 = -1$.

Each expansion solves problems that were impossible in the previous system. And remarkably, the complex numbers are algebraically complete—every polynomial equation has a solution in $\mathbb{C}$. This is the Fundamental Theorem of Algebra.`,
    },
    {
      id: "number-systems-viz",
      title: "Visualizing Number Systems",
      type: "interactive",
      content: "Interactive exploration showing how each number system expands to solve new types of equations",
      component: "NumberSystemsVisualizer",
    },
    {
      id: "sets-explained",
      title: "Sets: The Foundation",
      type: "text",
      content: `A set is a collection of objects. This definition seems simple, but it's the foundation of modern mathematics.

We write sets using curly braces: $\{1, 2, 3\}$ is the set containing 1, 2, and 3. We can also define sets by properties: $\{x : x \text{ is prime and } x < 20\}$ means "the set of all x such that x is prime and less than 20."

The symbol $\in$ means "is an element of." So $2 \in \{1, 2, 3\}$ is true, but $5 \in \{1, 2, 3\}$ is false.

Sets have operations, just like numbers. The union $A \cup B$ contains everything in A or B (or both). The intersection $A \cap B$ contains only what's in both. The difference $A \setminus B$ contains what's in A but not in B.

But sets are more subtle than they appear. In the late 19th century, Bertrand Russell discovered a paradox that shook the foundations of mathematics. He considered the set $R = \{x : x \notin x\}$—the set of all sets that don't contain themselves.

Here's the question: Is $R \in R$?

If $R \in R$, then by definition $R \notin R$. But if $R \notin R$, then it satisfies the condition for being in $R$, so $R \in R$. We have a contradiction either way.

This paradox forced mathematicians to be much more careful about how sets are constructed. Modern set theory uses axioms that prevent such paradoxical sets from being formed.

Despite these subtleties, sets remain the universal language of mathematics. Functions, relations, numbers, geometric objects—everything can be described using sets.`,
    },
    {
      id: "set-operations-viz",
      title: "Visualizing Set Operations",
      type: "interactive",
      content: "Interactive Venn diagram showing union, intersection, difference, and complement",
      component: "SetOperationsVisualizer",
    },
    {
      id: "functions-explained",
      title: "Functions: The Maps of Mathematics",
      type: "text",
      content: `A function is a rule that assigns to each input exactly one output. This definition seems straightforward, but functions are remarkably rich objects.

We write $f: X \to Y$ to mean that $f$ is a function from set $X$ (the domain) to set $Y$ (the codomain). For each $x \in X$, there's exactly one $f(x) \in Y$.

Functions model relationships between quantities. The temperature at a given time is a function of time. The position of a planet is a function of time. The cost of producing a commodity is a function of quantity.

But functions are more than just formulas. A function is defined by three things: its domain, its codomain, and the rule that assigns outputs to inputs. Two functions with different domains are different functions, even if their formulas are the same.

Functions can have special properties:

**Injective (one-to-one)**: Different inputs give different outputs. If $f(x_1) = f(x_2)$, then $x_1 = x_2$. Think of this as a function that doesn't collapse distinct points.

**Surjective (onto)**: Every element of the codomain is hit. For every $y \in Y$, there exists $x \in X$ with $f(x) = y$. The function "covers" the entire codomain.

**Bijective**: Both injective and surjective. This means there's a perfect matching between domain and codomain. Bijective functions have inverse functions.

The concept of inverse is crucial. If $f: X \to Y$ is bijective, then there's a function $f^{-1}: Y \to X$ that "undoes" $f$. We have $f^{-1}(f(x)) = x$ for all $x \in X$.

Functions are the morphisms of mathematics—the structure-preserving maps that let us translate between different mathematical worlds. Category theory, one of the most abstract branches of mathematics, studies functions between functions, revealing deep patterns across all of mathematics.`,
    },
    {
      id: "functions-viz",
      title: "Visualizing Functions",
      type: "interactive",
      content: "Interactive function visualizer showing domain, range, injectivity, and surjectivity",
      component: "FunctionVisualizer",
    },
  ],
}

// I.4 The General Goals of Mathematical Research - FEYNMAN LECTURES STYLE
export const generalGoalsFeynman: FeynmanChapter = {
  id: "general-goals",
  title: "The General Goals of Mathematical Research",
  description: "What mathematicians are trying to achieve: solving problems, building theories, and finding connections.",
  part: "part-01",
  partTitle: "Introduction",
  order: 4,
  content: [
    {
      id: "solving-problems",
      title: "Solving Problems",
      type: "text",
      content: `The most visible goal of mathematical research is solving problems. These range from ancient puzzles to questions arising from physics, computer science, and other fields.

Some problems are famous because they resisted solution for centuries. Fermat's Last Theorem states that the equation $x^n + y^n = z^n$ has no solutions in positive integers for $n > 2$. Fermat claimed to have a proof in 1637, but it wasn't found until Andrew Wiles proved it in 1994—over 350 years later.

The proof required developing entirely new areas of mathematics: elliptic curves, modular forms, and Galois representations. Wiles didn't just solve a problem; he built a bridge between two seemingly unrelated fields.

This is typical of hard problems. They resist direct attack. Instead, they require developing new tools, new perspectives, new connections. The attempt to solve them enriches all of mathematics.

Other problems remain open. The Riemann Hypothesis, about the distribution of prime numbers, has been unsolved for over 160 years. It's one of the seven Millennium Prize Problems, each carrying a $1 million reward.

Why do we care about these problems? Partly for the challenge, of course. But also because the techniques developed to solve them often find applications elsewhere. The mathematics created to solve one problem becomes the foundation for solving others.

There's also the matter of understanding. When we prove something, we don't just know it's true—we understand why it's true. We see the structure that makes it inevitable. This understanding is the real treasure.`,
    },
    {
      id: "building-theory",
      title: "Building General Theory",
      type: "text",
      content: `Beyond solving individual problems, mathematicians build general theories. Instead of asking "Is this particular statement true?" we ask "What kinds of statements are true, and why?"

Category theory is a prime example. Developed in the 1940s by Eilenberg and Mac Lane, it provides a unified language for all of mathematics. It studies mathematical structures and the structure-preserving maps between them.

The key insight of category theory is that the relationships between objects are often more important than the objects themselves. Whether we're talking about groups, topological spaces, or vector spaces, there are common patterns: products, coproducts, limits, colimits.

By abstracting these patterns, category theory reveals connections between seemingly unrelated areas. A theorem proved in the abstract setting of category theory applies to all concrete instances.

Another example is the classification of finite simple groups. Simple groups are the building blocks of all finite groups, analogous to how prime numbers are the building blocks of integers. The classification theorem, completed in 2004 after decades of work by hundreds of mathematicians, describes all possible finite simple groups.

This is like the periodic table of elements, but for symmetry. It tells us what kinds of symmetry are possible in a finite setting. The proof is thousands of pages long, spread across hundreds of papers. It's one of the great collaborative achievements in mathematical history.

Building theory is about seeing the forest, not just the trees. It's about finding the patterns that persist across many different examples. These patterns become theorems, the theorems become theories, and the theories become tools for the next generation of mathematicians.`,
    },
    {
      id: "finding-connections",
      title: "Finding Connections",
      type: "text",
      content: `Perhaps the most exciting goal in mathematics is finding unexpected connections between different areas. When two fields turn out to be related, insights flow in both directions.

The Atiyah-Singer Index Theorem is a perfect example. Proved in 1963, it connects analysis (the study of differential equations) with topology (the study of shapes). The theorem says that the number of solutions to certain differential equations is determined by topological properties of the space.

This is remarkable. Analytic information (solutions to equations) is determined by geometric information (topology). It means we can use topology to solve analysis problems, and analysis to solve topology problems.

The proof of Fermat's Last Theorem provides another example. Wiles showed that Fermat's equation is connected to the theory of elliptic curves and modular forms. This connection, called the modularity theorem, was the key insight.

Mirror symmetry is yet another. Discovered by string theorists, it says that two different geometric spaces (Calabi-Yau manifolds) can be "mirror" to each other in a precise mathematical sense. Counting curves on one space is equivalent to computing integrals on the other.

These connections are often discovered by accident. A mathematician working in one area notices a pattern that looks familiar from another area. Investigating further reveals a deep structural relationship.

Why do these connections exist? We don't fully know. It seems to be a fundamental feature of mathematics that the same structures appear in many different guises. Understanding why this happens—why mathematics is so interconnected—is itself a major research goal.

When we find a connection, we don't just solve problems. We unify knowledge. We show that what looked like many different things is really one thing seen from different angles. This unity is one of the deepest mysteries and greatest beauties of mathematics.`,
    },
  ],
}

// Helper function to get Feynman chapter by ID
export function getFeynmanChapterById(id: string): FeynmanChapter | undefined {
  const chapters = [
    whatIsMathematicsFeynman,
    languageAndGrammarFeynman,
    fundamentalDefinitionsFeynman,
    generalGoalsFeynman,
  ]
  return chapters.find((chapter) => chapter.id === id)
}

// Helper function to check if Feynman content exists
export function hasFeynmanContent(id: string): boolean {
  return getFeynmanChapterById(id) !== undefined
}

// Export all Feynman chapters
export const feynmanChapters = {
  whatIsMathematicsFeynman,
  languageAndGrammarFeynman,
  fundamentalDefinitionsFeynman,
  generalGoalsFeynman,
}
