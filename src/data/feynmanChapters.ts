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

We say that a sequence of values approaches a limit $L$ if, no matter how small a tolerance $\varepsilon$ we choose, eventually all the values in the sequence are within $\varepsilon$ of $L$. This $\varepsilon$-definition of a limit, developed in the 19th century, finally put calculus on a solid logical foundation.

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

// Helper function to get Feynman chapter by ID
export function getFeynmanChapterById(id: string): FeynmanChapter | undefined {
  const chapters = [whatIsMathematicsFeynman]
  return chapters.find((chapter) => chapter.id === id)
}

// Helper function to check if Feynman content exists
export function hasFeynmanContent(id: string): boolean {
  return getFeynmanChapterById(id) !== undefined
}

// Export all Feynman chapters
export const feynmanChapters = {
  whatIsMathematicsFeynman,
}
