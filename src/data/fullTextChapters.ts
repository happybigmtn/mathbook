import type { FullTextChapter, Annotation } from "@/types"

// Helper function to create annotations
function createAnnotation(
  id: string,
  type: Annotation["type"],
  content: string
): Annotation {
  return { id, type, content }
}

// I.1 What Is Mathematics About? - Full Text
export const whatIsMathematicsFullText: FullTextChapter = {
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
      content: "The fundamental nature of mathematics and its classification.",
      fullText: `It is notoriously hard to give a satisfactory answer to the question, "What is mathematics?" The approach of this book is not to try. Rather than giving a definition of mathematics, the intention is to give a good idea of what mathematics is by describing many of its most important concepts, theorems, and applications. Nevertheless, to make sense of all this information it is useful to be able to classify it somehow.

The most obvious way of classifying mathematics is by its subject matter, and that will be the approach of this brief introductory section and the longer section entitled Some Fundamental Mathematical Definitions. However, it is not the only way, and not even obviously the best way. Another approach is to try to classify the kinds of questions that mathematicians like to think about. This gives a usefully different view of the subject: it often happens that two areas of mathematics that appear very different if you pay attention to their subject matter are much more similar if you look at the kinds of questions that are being asked.

The last section of Part I, entitled The General Goals of Mathematical Research, looks at the subject from this point of view. At the end of that article there is a brief discussion of what one might regard as a third classification, not so much of mathematics itself but of the content of a typical article in a mathematics journal. As well as theorems and proofs, such an article will contain definitions, examples, lemmas, formulas, conjectures, and so on. The point of that discussion will be to say what these words mean and why the different kinds of mathematical output are important.`,
      annotations: [
        createAnnotation("intro-1", "analogy", "Mathematics is like a vast library organized by subject (algebra, geometry) but also by the types of questions asked (existence, classification)."),
        createAnnotation("intro-2", "visual", "Imagine three lenses to view math: subject matter (what), question types (how), and article structure (the building blocks)."),
      ],
    },
    {
      id: "math-branches-visual",
      title: "The Three Branches of Mathematics",
      type: "interactive",
      content: "Interactive visualization of the three main branches of mathematics and their interconnections",
      component: "MathBranchesVisualizer",
      annotations: [
        createAnnotation("branches-1", "visual", "The triangle represents how Algebra, Geometry, and Analysis form the foundation of modern mathematics."),
        createAnnotation("branches-2", "note", "Click on each branch to explore specific topics and see how they interconnect."),
      ],
    },
    {
      id: "algebra-geometry-analysis",
      title: "Algebra, Geometry, and Analysis",
      type: "text",
      content: "The three main branches of mathematics.",
      fullText: `Although any classification of the subject matter of mathematics must immediately be hedged around with qualifications, there is a crude division that undoubtedly works well as a first approximation, namely the division of mathematics into algebra, geometry, and analysis. So let us begin with this, and then qualify it later.

**1.1 Algebra versus Geometry**

Most people who have done some high school mathematics will think of algebra as the sort of mathematics that results when you substitute letters for numbers. Algebra will often be contrasted with arithmetic, which is a more direct study of the numbers themselves. So, for example, the question, "What is 3 × 7?" will be thought of as belonging to arithmetic, while the question, "If x + y = 10 and xy = 21, then what is the value of the larger of x and y?" will be regarded as a piece of algebra. This contrast is less apparent in more advanced mathematics for the simple reason that it is very rare for numbers to appear without letters to keep them company.

There is, however, a different contrast, between algebra and geometry, which is much more important at an advanced level. The high school conception of geometry is that it is the study of shapes such as circles, triangles, cubes, and spheres together with concepts such as rotations, reflections, symmetries, and so on. Thus, the objects of geometry, and the processes that they undergo, have a much more visual character than the equations of algebra.

This contrast persists right up to the frontiers of modern mathematical research. Some parts of mathematics involve manipulating symbols according to certain rules: for example, a true equation remains true if you "do the same to both sides." These parts would typically be thought of as algebraic, whereas other parts are concerned with concepts that can be visualized, and these are typically thought of as geometrical.

However, a distinction like this is never simple. If you look at a typical research paper in geometry, will it be full of pictures? Almost certainly not. In fact, the methods used to solve geometrical problems very often involve a great deal of symbolic manipulation, although good powers of visualization may be needed to find and use these methods and pictures will typically underlie what is going on. As for algebra, is it "mere" symbolic manipulation? Not at all: very often one solves an algebraic problem by finding a way to visualize it.

As an example of visualizing an algebraic problem, consider how one might justify the rule that if a and b are positive integers then ab = ba. It is possible to approach the problem as a pure piece of algebra (perhaps proving it by induction), but the easiest way to convince yourself that it is true is to imagine a rectangular array that consists of a rows with b objects in each row. The total number of objects can be thought of as a lots of b, if you count it row by row, or as b lots of a, if you count it column by column. Therefore, ab = ba. Similar justifications can be given for other basic rules such as a(b + c) = ab + ac and a(bc) = (ab)c.`,
      annotations: [
        createAnnotation("ag-1", "visual", "Think of algebra as working with recipes (symbolic rules) and geometry as working with blueprints (spatial relationships)."),
        createAnnotation("ag-2", "analogy", "The commutativity proof (ab = ba) is like counting tiles on a floor—whether you count rows first or columns first, you get the same total."),
        createAnnotation("ag-3", "deep-dive", "Leibniz's notation (dy/dx, ∫) won over Newton's because it visually suggests the right manipulations. Good notation is cognitive scaffolding."),
      ],
    },
    {
      id: "algebra-vs-geometry",
      title: "Visual Proof: Commutativity",
      type: "interactive",
      content: "Interactive visualization showing how algebraic identities have geometric interpretations",
      component: "CommutativePropertyDemo",
      annotations: [
        createAnnotation("vis-1", "visual", "The grid shows commutativity: a×b creates the same rectangle as b×a, just rotated. The area doesn't change when you rotate the rectangle."),
      ],
    },
    {
      id: "what-is-analysis",
      title: "What Is Analysis?",
      type: "text",
      content: "Understanding the third major branch of mathematics.",
      fullText: `The third main branch of mathematics, analysis, is probably the one that is least familiar to the general reader. It grew out of the invention of calculus by Newton and Leibniz in the seventeenth century, and it was developed throughout the eighteenth century. Its development was less rapid in the nineteenth century, and a hundred years ago it still had not reached the form in which it is taught today. However, it has been extraordinarily successful, both as a central area of mathematics and as a tool in science and engineering.

The original aim of calculus was to understand the behavior of functions (a function is a mathematical object that takes a number as input and produces another number as output). Functions are found everywhere: for example, the temperature at a given time, or the speed of a moving object at a given moment. Calculus was designed to deal with quantities that change continuously, and to do so it had to find a way of talking about change and continuity.

The central concept of analysis is the limit. The idea of a limit is subtle and took mathematicians a long time to get right. Intuitively, it is straightforward: it is what you approach as you get closer and closer to something without ever reaching it. For example, if you want to find the slope of a curve at a particular point, you look at the slopes of chords that get closer and closer to being the tangent at that point, and the limit of these slopes is the slope of the tangent.`,
      annotations: [
        createAnnotation("analysis-1", "analogy", "A limit is like walking toward a wall—you get infinitely close but never quite touch it. Analysis formalizes this 'approaching' idea."),
        createAnnotation("analysis-2", "visual", "Imagine zooming into a curve: as you zoom in, it looks more and more like a straight line. The slope of that 'limiting' line is the derivative."),
      ],
    },
    {
      id: "questions-mathematicians-ask",
      title: "The Questions Mathematicians Ask",
      type: "text",
      content: "Understanding mathematics through its questions.",
      fullText: `Another way to understand mathematics is by the kinds of questions mathematicians ask. Here are some of the most fundamental types:

**Existence**: Does an object with certain properties exist? For example, is there a largest prime number? (No.) Is there a formula for the solutions of polynomial equations of degree 5 or higher? (No, in general.) These questions often require proof by contradiction—assume the object exists and derive a contradiction.

**Classification**: Can we organize all objects of a certain type? For example, can we classify all finite simple groups? (Yes—this was one of the great achievements of twentieth-century mathematics.) Can we classify all knots? (Partially.) Classification gives us a complete picture of what's possible.

**Structure**: What internal relationships exist within a system? Group theory studies symmetry structures. Topology studies shapes up to continuous deformation. Understanding structure reveals deep patterns.

**Transformation**: How do objects change under various operations? This is central to dynamical systems, geometry, and algebra. Symmetry is a kind of transformation that leaves something unchanged.

**Optimization**: What is the best possible outcome under constraints? This is the domain of calculus of variations, linear programming, and much of applied mathematics. Nature often solves optimization problems—light takes the fastest path, soap bubbles minimize surface area.`,
      annotations: [
        createAnnotation("questions-1", "analogy", "These five question types are like lenses: existence asks 'is it there?', classification asks 'what's the catalog?', structure asks 'how does it fit together?', transformation asks 'what happens when I change it?', and optimization asks 'what's the best way?'"),
        createAnnotation("questions-2", "visual", "Nature is an optimizer: light takes the fastest path (Fermat's principle), bubbles minimize surface area, bees build honeycombs with optimal angles."),
      ],
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
      hint: "Think about what property of the soap bubble you're studying—its shape or something else?",
      explanation: "The shape of a soap bubble is a geometric problem. Soap bubbles form spheres because spheres minimize surface area for a given volume—a geometric optimization problem.",
      points: 15,
    },
  ],
}

// I.2 The Language and Grammar of Mathematics - Full Text
export const languageAndGrammarFullText: FullTextChapter = {
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
      content: "How mathematical notation shapes mathematical thinking.",
      fullText: `Mathematical notation is one of humanity's greatest inventions. Good notation makes complex ideas simple; bad notation makes simple ideas complex.

Consider the difference between:
- "The number which when multiplied by itself gives 2"
- "√2"

Or between:
- "The sum of the squares of the first n natural numbers"
- "∑ᵢ₌₁ⁿ i²"

Notation is not just shorthand—it shapes how we think. The right notation suggests the right generalizations.

**The Evolution of Mathematical Notation**

Modern mathematical notation evolved over centuries. Ancient mathematicians wrote everything out in words. The equals sign (=) was introduced by Robert Recorde in 1557. He chose two parallel lines because "no two things can be more equal."

Viète (1540-1603) introduced letters for unknowns. Descartes (1596-1650) established the convention of using x, y, z for unknowns and a, b, c for knowns. Leibniz (1646-1716) developed much of the notation we use in calculus today, including the integral sign ∫ (an elongated S for "summa").

Each improvement in notation enabled new mathematical discoveries. When you can write ideas compactly, you can manipulate them more easily and see patterns that were previously invisible.`,
      annotations: [
        createAnnotation("notation-1", "analogy", "Notation is like compression: √2 is the compressed version of an entire sentence. The more compressed, the easier to manipulate."),
        createAnnotation("notation-2", "visual", "The integral sign ∫ is literally an elongated 'S' for sum. Leibniz made calculus visual—the symbol itself tells you what you're doing."),
      ],
    },
    {
      id: "notation-evolution",
      title: "How Notation Evolved",
      type: "interactive",
      content: "Explore the evolution of mathematical notation from words to symbols",
      component: "NotationEvolution",
      annotations: [
        createAnnotation("evo-1", "visual", "See how mathematical concepts evolved from verbose descriptions to compact symbols over centuries."),
        createAnnotation("evo-2", "note", "Each notation improvement enabled new mathematical discoveries by making patterns more visible."),
      ],
    },
    {
      id: "quantifiers",
      title: "Quantifiers: ∀ and ∃",
      type: "interactive",
      content: "Interactive exploration of universal and existential quantifiers",
      component: "QuantifierDemo",
      annotations: [
        createAnnotation("quant-1", "visual", "∀ (forall) and ∃ (exists) are like search operations: ∀ means 'check every element' while ∃ means 'find at least one match'."),
        createAnnotation("quant-2", "warning", "Order matters! ∀x ∃y (y > x) is true (every number has a larger one), but ∃y ∀x (y > x) is false (no number exceeds all others)."),
      ],
    },
    {
      id: "quantifiers",
      title: "Quantifiers: ∀ and ∃",
      type: "interactive",
      content: "Interactive exploration of universal and existential quantifiers",
      component: "QuantifierDemo",
      annotations: [
        createAnnotation("quant-1", "visual", "∀ (forall) and ∃ (exists) are like search operations: ∀ means 'check every element' while ∃ means 'find at least one match'."),
        createAnnotation("quant-2", "warning", "Order matters! ∀x ∃y (y > x) is true (every number has a larger one), but ∃y ∀x (y > x) is false (no number exceeds all others)."),
      ],
    },
    {
      id: "logical-connectives",
      title: "Logical Connectives",
      type: "text",
      content: "The building blocks of mathematical logic.",
      fullText: `Mathematical statements are built from simpler statements using logical connectives. Here are the main ones:

**Conjunction (AND, ∧)**: "A and B" is true only when both A and B are true. Example: "x is even ∧ x > 10" means x is an even number greater than 10.

**Disjunction (OR, ∨)**: "A or B" is true when at least one of A or B is true. In mathematics, "or" is usually inclusive: it includes the case where both are true. Example: "x < 0 ∨ x > 10" means x is either negative or greater than 10 (or both, which is impossible for numbers, but possible for other statements).

**Negation (NOT, ¬)**: "Not A" is true when A is false. Example: "¬(x = 0)" means x is not equal to 0.

**Implication (IMPLIES, ⇒)**: "A implies B" means if A is true, then B must be true. This is the workhorse of mathematical proof. Example: "x is a square ⇒ x ≥ 0" (every square is non-negative).

Important: If A is false, "A implies B" is automatically true! This is called vacuous truth. Example: "If pigs can fly, then 2+2=5" is technically a true statement because pigs can't fly.

**Equivalence (IFF, ⇔)**: "A if and only if B" means A and B are either both true or both false. This is shorthand for "A ⇒ B and B ⇒ A". Example: "x² = 4 ⇔ x = 2 or x = -2".`,
      annotations: [
        createAnnotation("logic-1", "analogy", "Vacuous truth (false implies anything) is like having a broken promise: 'If I'm a billionaire, I'll buy you a yacht'—if I'm not a billionaire, the promise is technically kept regardless of whether you get a yacht."),
        createAnnotation("logic-2", "visual", "Think of logical operators as gates: AND requires both inputs, OR needs at least one, NOT flips the input, and IMPLICATION is like a one-way street."),
      ],
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
      explanation: "This statement says that no matter what number x you pick, you can always find a larger number y. This is true for real numbers—there's no largest number.",
      points: 20,
    },
  ],
}

// I.3 Some Fundamental Mathematical Definitions - Full Text
export const fundamentalDefinitionsFullText: FullTextChapter = {
  id: "fundamental-definitions",
  title: "Some Fundamental Mathematical Definitions",
  description: "Key definitions that every mathematician knows: sets, functions, relations, and more.",
  part: "part-01",
  partTitle: "Introduction",
  order: 3,
  content: [
    {
      id: "number-systems",
      title: "The Main Number Systems",
      type: "text",
      content: "Understanding the hierarchy of numbers from naturals to complex.",
      fullText: `Almost always, the first mathematical concept that a child is exposed to is the idea of numbers, and numbers retain a central place in mathematics at all levels. However, it is not as easy as one might think to say what the word "number" means: the more mathematics one learns, the more uses of this word one comes to know, and the more sophisticated one's concept of number becomes.

The modern view of numbers is that they are best regarded not individually but as parts of larger wholes, called number systems; the distinguishing features of number systems are the arithmetical operations—such as addition, multiplication, subtraction, division, and extraction of roots—that can be performed on them.

**The Natural Numbers (ℕ)**

The natural numbers, otherwise known as the positive integers, are the numbers familiar even to young children: 1, 2, 3, 4, and so on. It is the natural numbers that we use for the very basic mathematical purpose of counting.

The set of all natural numbers is usually denoted ℕ. (Some mathematicians prefer to include 0 as a natural number as well: for instance, this is the usual convention in logic and set theory. Both conventions are to be found in this book, but it should always be clear which one is being used.)

Given two natural numbers m and n one can add them together or multiply them, obtaining in each case a new natural number. By contrast, subtraction and division are not always possible.

**The Integers (ℤ)**

The natural numbers are not the only whole numbers, since they do not include zero or negative numbers, both of which are indispensable to mathematics. One of the first reasons for introducing zero was that it is needed for the normal decimal notation of positive integers—how else could one conveniently write 1005?

However, it is now thought of as much more than just a convenience, and the property that makes it significant is that it is an additive identity, which means that adding zero to any number leaves that number unchanged. An immediate illustration of this is that it allows us to think about negative numbers: if n is a positive integer, then the defining property of −n is that when you add it to n you get zero.

The set of all integers—positive, negative, and zero—is usually denoted ℤ (for the German word "Zahlen," meaning "numbers"). Within this system, subtraction is always possible: that is, if m and n are integers, then so is m − n.

**The Rational Numbers (ℚ)**

So far we have considered only whole numbers. If we form all possible fractions as well, then we obtain the rational numbers. The set of all rational numbers is denoted ℚ (for "quotients").

A more theoretical justification for the rational numbers is that they form a number system in which division is always possible—except by zero. This fact, together with some basic properties of the arithmetical operations, means that ℚ is a field.

**The Real Numbers (ℝ)**

A famous discovery of the ancient Greeks was that the square root of 2 is not a rational number. That is, there is no fraction p/q such that (p/q)² = 2. The Pythagorean theorem tells us that if a square has sides of length 1, then the length of its diagonal is √2. Consequently, there are lengths that cannot be measured by rational numbers.

The real numbers can be thought of as the set of all numbers with a finite or infinite decimal expansion. In the latter case, they are defined not directly but by a process of successive approximation. The set of all real numbers is denoted ℝ.

**The Complex Numbers (ℂ)**

Many polynomial equations, such as the equation x² = 2, do not have rational solutions but can be solved in ℝ. However, there are many other equations that cannot be solved even in ℝ. The simplest example is the equation x² = −1, which has no real solution since the square of any real number is positive or zero.

The complex number system, denoted ℂ, is the set of all numbers of the form a+bi, where a and b are real numbers. To add or multiply complex numbers, one treats i as a variable, but any occurrences of i² are replaced by −1.

One explanation for the utility of complex numbers is that they provide a concise way to talk about many aspects of geometry, via Argand diagrams. These represent complex numbers as points in the plane, the number a+bi corresponding to the point with coordinates (a, b).`,
      annotations: [
        createAnnotation("numbers-1", "analogy", "Number systems are like expanding toolkits: ℕ gives you counting, ℤ adds debt/temperature, ℚ adds measurement, ℝ fills the gaps (like √2), and ℂ completes the picture (solving all polynomial equations)."),
        createAnnotation("numbers-2", "visual", "Complex numbers live on a 2D plane: the real part is the x-coordinate, imaginary part is y. Multiplying by i rotates 90° counterclockwise."),
        createAnnotation("numbers-3", "deep-dive", "The ancient Greeks discovered √2 is irrational—a crisis! It showed that not all lengths are rational, forcing mathematics beyond fractions."),
      ],
    },
    {
      id: "sets-and-functions",
      title: "Sets and Functions",
      type: "text",
      content: "The foundational concepts of modern mathematics.",
      fullText: `Broadly speaking, a set is a collection of objects, and in mathematical discourse these objects are mathematical ones such as numbers, points in space, or even other sets.

The members of a set are usually called its elements, and the symbol "∈" is usually read "is an element of."

There are three common ways to denote a specific set. One is to list its elements inside curly brackets. For example, the set {1, 2, 3} has the elements 1, 2, and 3.

Another is to use the notation {x : P(x)}, which means "the set of all x such that P(x) holds." For example, {x : x is prime and x < 20} is the set {2, 3, 5, 7, 11, 13, 17, 19}.

**Functions**

A function is a rule that takes objects of one kind (usually numbers) and converts them into objects of another kind (often numbers, but not necessarily). A function is usually denoted by a letter such as f, and if x is an object from the domain of f, then the object that f converts x into is denoted f(x).

The domain of a function f is the set of all objects x for which f(x) is defined. The range (or image) of f is the set of all values f(x) as x varies over the domain.

Functions can be described in various ways. Sometimes one simply specifies the rule: for example, f(x) = x². Sometimes one gives a table of values. And sometimes functions are described by their graphs in the Cartesian plane.

**The Importance of Functions**

Functions are everywhere in mathematics. They model relationships between quantities. The temperature at a particular time is a function of time. The position of a planet is a function of time. The cost of producing a commodity is a function of the quantity produced.

More abstractly, functions capture the idea of transformation. Geometry studies transformations of space. Algebra studies transformations of algebraic structures. Analysis studies continuous transformations.`,
      annotations: [
        createAnnotation("sets-1", "analogy", "A set is like a box with labeled items. {x : P(x)} is a recipe for building the box: include every x that satisfies property P."),
        createAnnotation("functions-1", "visual", "A function is a mapping—like a vending machine: you input a selection (domain) and get a specific output (range). Each input maps to exactly one output."),
      ],
    },
    {
      id: "set-operations-viz",
      title: "Visualizing Set Operations",
      type: "interactive",
      content: "Interactive visualizer for union, intersection, difference, and complement",
      component: "SetOperationsVisualizer",
      annotations: [
        createAnnotation("set-op-1", "visual", "Set operations combine sets in different ways. The union (∪) gathers all elements from both sets, like combining two collections."),
        createAnnotation("set-op-2", "visual", "The intersection (∩) finds common elements—only those in both sets. Think of it as the overlap between two circles."),
      ],
    },
    {
      id: "functions-viz",
      title: "Visualizing Functions",
      type: "interactive",
      content: "Interactive function visualizer",
      component: "FunctionVisualizer",
      annotations: [
        createAnnotation("func-viz-1", "visual", "A function's graph shows the entire mapping at once. The vertical line test checks if a graph represents a function (no x-value has two y-values)."),
      ],
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
}

// I.4 The General Goals of Mathematical Research - Full Text
export const generalGoalsFullText: FullTextChapter = {
  id: "general-goals",
  title: "The General Goals of Mathematical Research",
  description: "What mathematicians are trying to achieve: solving problems, building theories, and finding connections.",
  part: "part-01",
  partTitle: "Introduction",
  order: 4,
  content: [
    {
      id: "solving-problems",
      title: "Solving Specific Problems",
      type: "text",
      content: "The most visible goal of mathematical research.",
      fullText: `The most visible goal of mathematical research is solving specific problems. These range from centuries-old puzzles to questions arising from other fields.

**Famous Solved Problems**

**Fermat's Last Theorem** (solved by Andrew Wiles, 1994):
The equation xⁿ + yⁿ = zⁿ has no solutions in positive integers for n > 2.
Fermat claimed to have a proof that was "too large to fit in the margin." It took 358 years and the development of entirely new areas of mathematics (elliptic curves, modular forms) to finally prove it.

**The Four Color Theorem** (solved by Appel and Haken, 1976):
Any map can be colored using at most four colors such that no two adjacent regions share the same color.
This was the first major theorem proved with substantial computer assistance, sparking debate about the nature of mathematical proof.

**The Poincaré Conjecture** (solved by Grigori Perelman, 2003):
Every simply connected, closed 3-manifold is homeomorphic to the 3-sphere.
Perelman solved this Millennium Prize Problem using Ricci flow (a technique from differential geometry). He famously declined the $1 million prize and the Fields Medal.

**Open Problems**

**The Riemann Hypothesis**:
All non-trivial zeros of the Riemann zeta function ζ(s) have real part equal to 1/2.
This conjecture about the distribution of prime numbers has resisted proof for over 160 years. It is one of the seven Millennium Prize Problems with a $1 million reward.

**P versus NP**:
Is every problem whose solution can be quickly verified by a computer also quickly solvable?
This fundamental question about computation has implications for cryptography, optimization, and artificial intelligence.`,
      annotations: [
        createAnnotation("problems-1", "analogy", "Solving mathematical problems is like climbing Everest. Sometimes the route requires developing entirely new equipment (mathematical techniques) that later finds uses everywhere else."),
        createAnnotation("problems-2", "visual", "Fermat's Last Theorem: think of xⁿ + yⁿ = zⁿ as a surface in 3D space. For n > 2, this surface never intersects the integer lattice points—no whole number solutions exist."),
        createAnnotation("problems-3", "deep-dive", "The four color theorem required checking 1,936 'unavoidable configurations' by computer. Some mathematicians argued this wasn't a 'real' proof since no human could verify it. It changed how we think about proof itself."),
      ],
    },
    {
      id: "building-theory",
      title: "Building General Theory",
      type: "text",
      content: "Creating frameworks that unify and explain diverse phenomena.",
      fullText: `Beyond solving individual problems, mathematicians build general theories that reveal deep patterns across apparently unrelated domains.

**Category Theory**

Category theory, developed by Saunders Mac Lane and Samuel Eilenberg in the 1940s, provides a unified language for mathematics. It studies mathematical structures and the structure-preserving maps between them.

Key insight: Many mathematical constructions (products, quotients, limits) appear across different fields (groups, topological spaces, vector spaces). Category theory abstracts these common patterns.

**Homology and Cohomology**

Algebraic topology provides tools to study spaces through algebraic invariants. Homology theory assigns algebraic objects (groups, rings) to topological spaces, turning geometric questions into algebraic ones.

This approach:
- Classifies spaces up to continuous deformation
- Connects local and global properties
- Has applications in data analysis, physics, and robotics

**Representation Theory**

Representation theory studies abstract algebraic structures by representing their elements as linear transformations of vector spaces.

**Why it matters**:
- Makes abstract groups concrete and computable
- Connects algebra to geometry and analysis
- Essential in quantum mechanics and particle physics
- Used in crystallography and molecular spectroscopy

**The Langlands Program**

One of the most ambitious research programs in modern mathematics, proposed by Robert Langlands in the 1960s. It seeks to connect:
- Number theory (prime numbers, Diophantine equations)
- Representation theory (symmetries)
- Algebraic geometry (solutions to polynomial equations)

The Langlands conjectures suggest deep structural similarities between these fields. Proving even special cases has required breakthroughs across mathematics.`,
      annotations: [
        createAnnotation("theory-1", "analogy", "Building theory is like creating a map. Solving specific problems is finding individual locations. Building theory is creating the coordinate system that shows how all locations relate to each other."),
        createAnnotation("theory-2", "visual", "Category theory sees mathematics as a web of relationships. Objects are nodes, morphisms are arrows. The structure of the web matters more than what's in the nodes."),
        createAnnotation("theory-3", "deep-dive", "The Langlands Program is often called the 'Grand Unified Theory' of mathematics. Andrew Wiles proved Fermat's Last Theorem by proving a special case of the Langlands conjectures—solving one problem by connecting three entire fields."),
      ],
    },
    {
      id: "finding-connections",
      title: "Finding Connections",
      type: "text",
      content: "Discovering unexpected relationships between different areas.",
      fullText: `Some of the most profound advances in mathematics come from discovering connections between seemingly unrelated areas. These connections often reveal that what appeared to be different subjects are actually aspects of the same underlying reality.

**The Atiyah-Singer Index Theorem**

One of the most important theorems of the 20th century, proved by Michael Atiyah and Isadore Singer in 1963.

**What it connects**: Analysis (differential equations) ↔ Topology (global properties of spaces)

**The theorem**: The number of solutions to certain differential equations (analytic) equals a topological invariant of the space (geometric).

**Impact**: This bridge between analysis and topology has applications in:
- Gauge theory and quantum field theory
- Riemannian geometry
- Algebraic geometry
- Even number theory through the arithmetic of manifolds

**Mirror Symmetry**

A phenomenon discovered by string theorists in the late 1980s with profound mathematical consequences.

**The phenomenon**: Two different Calabi-Yau manifolds (6-dimensional geometric spaces) can give rise to the same physics. Mathematically, this means their complex and symplectic geometries are "mirror" to each other.

**Mathematical impact**:
- Counting curves on one manifold becomes computing integrals on the other
- Solved long-standing problems in enumerative geometry
- Created new fields of mathematics (Gromov-Witten theory)
- Connected algebraic geometry to string theory

**Fourier Analysis and Number Theory**

The Fourier transform, originally developed for heat conduction, became essential in number theory through the work of Hermann Weyl and others.

Key insight: The distribution of prime numbers can be studied through the zeros of the Riemann zeta function—an analytic object. This connection launched analytic number theory.

**Why Connections Matter**

When two fields connect:
1. Techniques from one solve problems in the other
2. New questions emerge that neither field would ask alone
3. Deeper structures are revealed
4. Applications multiply (techniques developed for pure mathematics often find uses in science and technology)

The most exciting phrase in mathematics isn't 'Eureka!' but 'That's funny...'—the moment when something doesn't fit, suggesting a connection we hadn't seen before.`,
      annotations: [
        createAnnotation("connections-1", "visual", "Think of mathematics as a landscape with different terrains (algebra, geometry, analysis). Connections are bridges between them. Once you build a bridge, people and ideas flow both ways."),
        createAnnotation("connections-2", "analogy", "Finding connections is like discovering that two different recipes use the same base sauce. The ingredients look different, but the underlying structure is identical."),
        createAnnotation("connections-3", "deep-dive", "The Index Theorem was proved using functional analysis, geometry, and topology. Atiyah and Singer received the Abel Prize (2004) partly for this work. It exemplifies how the deepest results require multiple perspectives."),
      ],
    },
  ],
  exercises: [
    {
      id: "ex-4-1",
      title: "Fermat's Last Theorem",
      difficulty: "easy",
      type: "multiple-choice",
      question: "For which values of n does Fermat's Last Theorem state that xⁿ + yⁿ = zⁿ has no positive integer solutions?",
      options: ["n = 2", "n > 2", "All positive integers n", "No values of n"],
      answer: "n > 2",
      hint: "The theorem specifically excludes n = 2 because the Pythagorean theorem (3² + 4² = 5²) shows solutions exist for n = 2.",
      explanation: "Fermat's Last Theorem states that xⁿ + yⁿ = zⁿ has no solutions in positive integers for n > 2. The case n = 2 is the Pythagorean theorem, which has infinitely many solutions.",
      points: 10,
    },
    {
      id: "ex-4-2",
      title: "Theory Building",
      difficulty: "medium",
      type: "multiple-choice",
      question: "Which area of mathematics provides a unified language for studying structure-preserving maps across different mathematical structures?",
      options: ["Number theory", "Category theory", "Calculus", "Euclidean geometry"],
      answer: "Category theory",
      hint: "This field was developed in the 1940s by Mac Lane and Eilenberg to unify different branches of mathematics.",
      explanation: "Category theory studies mathematical structures and the structure-preserving maps (morphisms) between them. It provides a common language for algebra, topology, geometry, and other fields.",
      points: 15,
    },
  ],
}

// II.1 From Numbers to Number Systems - Full Text
export const fromNumbersToNumberSystemsFullText: FullTextChapter = {
  id: "from-numbers-to-number-systems",
  title: "From Numbers to Number Systems",
  description: "The evolution of numbers from counting to complex numbers.",
  part: "part-02",
  partTitle: "Origins of Modern Mathematics",
  order: 1,
  content: [
    {
      id: "numbers-early-math",
      title: "Numbers in Early Mathematics",
      type: "text",
      content: "How ancient civilizations developed number systems.",
      fullText: `People have been writing numbers down for as long as they have been writing. In every civilization that has developed a way of recording information, we also find a way of recording numbers. Some scholars even argue that numbers came first.

It is fairly clear that numbers first arose as adjectives: they specified how many or how much of something there was. Thus, it was possible to talk about three apricots, say, long before it was possible to talk about the number 3. But once the concept of "threeness" is on the table, so that the same adjective specifies three fish and three horses, and once a written symbol such as "3" is developed that can be used in all of those instances, the conditions exist for 3 itself to emerge as an independent entity. Once it does, we are doing mathematics.

This process seems to have repeated itself many times when new kinds of numbers have been introduced: first a number is used, then it is represented symbolically, and finally it comes to be conceived as a thing in itself and as part of a system of similar entities.

The earliest mathematical documents we know about go back to the civilizations of the ancient Middle East, in Egypt and in Mesopotamia. In both cultures, a scribal class developed. Scribes were responsible for keeping records, which often required them to do arithmetic and solve simple mathematical problems.

Numbers were used both for counting and for measuring, so a need for fractional numbers must have come up fairly early. Fractions are complicated to write down, and computing with them can be difficult. Hence, the problem of "broken numbers" may well have been the first really challenging mathematical problem.

In Egypt, the fundamental notion was "the nth part," as in "the third part of six is two." In this language, one would express the idea of dividing 7 by 3 as, "What is the third part of seven?" The answer is, "Two and the third."

In Mesopotamia, we find a very different idea. The Babylonians had a way to generate symbols for all the numbers from 1 to 59. For larger numbers, they used a positional system much like the one we use today, but based on 60 rather than 10. So something like 1, 20 means one sixty and twenty units, that is, 1 × 60 + 20 = 80. The same system was then extended to fractions, so that one half was represented as thirty sixtieths.

The Mesopotamian way of writing numbers is called a sexagesimal place-value system by analogy with the system we use today, which is, of course, a decimal place-value system.

The fact that we still divide an hour into sixty minutes and a minute into sixty seconds goes back, via the Greek astronomers, to the Babylonian sexagesimal fractions; almost four thousand years later, we are still influenced by the Babylonian scribes.`,
      annotations: [
        createAnnotation("early-1", "visual", "Numbers started as adjectives ('three apricots') before becoming abstract entities. This abstraction is what makes mathematics powerful—'3' applies to anything, not just fruit."),
        createAnnotation("early-2", "analogy", "Egyptian fractions are like splitting a pizza: the 'third part' is one of three equal slices. Babylonian base-60 is like our clocks—60 seconds, 60 minutes, inherited from them."),
        createAnnotation("early-3", "deep-dive", "The base-60 system survives today in time and angles (360°). The Babylonians chose 60 because it has many divisors (2, 3, 4, 5, 6, 10, 12, 15, 20, 30), making fractions easier."),
      ],
    },
    {
      id: "number-systems-expansion",
      title: "How Number Systems Expanded",
      type: "interactive",
      content: "Visual exploration of how number systems evolved to solve increasingly complex equations",
      component: "NumberSystemsVisualizer",
      annotations: [
        createAnnotation("num-sys-1", "visual", "Each expansion fills a gap: ℕ can't subtract, ℤ can't divide, ℚ can't take roots, ℝ can't handle negatives under roots, ℂ completes the picture."),
        createAnnotation("num-sys-2", "note", "Notice the pattern: each new system keeps all the old numbers and adds new ones to solve previously impossible equations."),
      ],
    },
    {
      id: "incommensurable",
      title: "Lengths Are Not Numbers",
      type: "text",
      content: "The Greek discovery that changed mathematics forever.",
      fullText: `Things get more complicated with the mathematics of classical Greek and Hellenistic civilizations. The Greeks, of course, are famous for coming up with the first mathematical proofs. They were the first to attempt to do mathematics in a rigorously deductive way, using clear initial assumptions and careful statements.

Sometime before the fourth century BCE, the Greeks made the fundamental discovery of "incommensurable magnitudes." That is, they discovered that it is not always possible to express two given lengths as (integer) multiples of a third length. It is not just that lengths and numbers are conceptually distinct things (though this was important too). The Greeks had found a proof that one cannot use numbers to represent lengths.

Suppose, they argued, you have two line segments. If their lengths are both given by numbers, then those numbers will at worst involve some fractions. By changing the unit of length, then, we can make sure that both of the lengths correspond to whole numbers. In other words, it must be possible to choose a unit length so that each of our segments consists of a whole number multiple of the unit. The two segments, then, could be "measured together," i.e., would be "commensurable."

Now here's the catch: the Greeks could prove that this was not always the case. Their standard example had to do with the side and the diagonal of a square. We do not know exactly how they first established that these two segments are not commensurable, but it might have been something like this: if you subtract the side from the diagonal, you will get a segment shorter than either of them; if both side and diagonal are measured by a common unit, then so is the difference. Now repeat the argument: take the remainder and subtract it from the side until we get a second remainder smaller than the first.

It turns out to be quite easy to show that this process will never terminate; instead, it will produce smaller and smaller remainder segments. Eventually, the remainder segment will be smaller than the unit that supposedly measures it a whole number of times. That is impossible (no whole number is smaller than 1, after all), and hence we can conclude that the common unit does not, in fact, exist.

Of course, the diagonal does in fact have a length. Today, we would say that if the length of the side is one unit, then the length of the diagonal is √2 units, and we would interpret this argument as showing that the number √2 is not a fraction. The Greeks did not quite see in what sense √2 could be a number. Instead, it was a length, or, even better, the ratio between the length of the diagonal and the length of the side.

The conclusion, then, is that lengths are not numbers: instead, they are some other kind of magnitude. But now we are faced with a proliferation of magnitudes: numbers, lengths, areas, angles, volumes, etc. Each of these must be taken as a different kind of quantity, not comparable with the others.`,
      annotations: [
        createAnnotation("incom-1", "visual", "The diagonal of a unit square has length √2. If you try to measure it with the side (length 1), you get leftover pieces. The Greeks proved you can never fit a whole number of sides into the diagonal exactly."),
        createAnnotation("incom-2", "analogy", "Incommensurable lengths are like trying to measure a circle's diameter using only arc lengths—you need a different 'unit' (π) because they don't share a common measure."),
        createAnnotation("incom-3", "deep-dive", "This discovery was a crisis for the Pythagoreans, who believed 'all is number.' The existence of √2 as an irrational number shattered their worldview and forced mathematics to expand beyond fractions."),
      ],
    },
  ],
  exercises: [
    {
      id: "ex-2-1-1",
      title: "Egyptian Fractions",
      difficulty: "medium",
      type: "multiple-choice",
      question: "In the Egyptian system, how would you express 2/5?",
      options: ["The fifth and the tenth", "The third and the fifteenth", "Two fifth parts", "One half and one tenth"],
      answer: "The third and the fifteenth",
      hint: "Egyptians never used the same fraction twice, and preferred small denominators.",
      explanation: "2/5 = 1/3 + 1/15. The Egyptians would write this as 'the third and the fifteenth' because they never repeated the same fraction type.",
      points: 15,
    },
  ],
}

// II.2 Geometry - Full Text
export const geometryOriginsFullText: FullTextChapter = {
  id: "geometry-origins",
  title: "Geometry",
  description: "From Egyptian surveying to Euclidean geometry and the discovery of non-Euclidean geometries.",
  part: "part-02",
  partTitle: "Origins of Modern Mathematics",
  order: 2,
  content: [
    {
      id: "greek-formulation",
      title: "The Greek Formulation",
      type: "text",
      content: "How Euclid created the paradigm of logical deduction.",
      fullText: `Geometry can be thought of as a set of useful facts about the world, or else as an organized body of knowledge. The origins of the subject are much disputed. It is clear that the civilizations of Egypt and Babylonia had at least some knowledge of geometry—otherwise, they could not have built their large cities, elaborate temples, and pyramids.

But one glance at Euclid's famous Elements shows that a proper account of the history of geometry will have to be about something much more than the acquisition of geometrical facts. The Elements is a highly organized, deductive body of knowledge. It is divided into a number of distinct themes, but each theme has a complex theoretical structure.

Whatever the origins of geometry might have been, by the time of Euclid it had become the paradigm of a logical subject, offering a kind of knowledge quite different from, and seemingly higher than, knowledge directly gleaned from ordinary experience.

**The Elements**

The Elements opens with four books on the study of plane figures: triangles, quadrilaterals, and circles. The famous theorem of Pythagoras is the forty-seventh proposition of the first book. Then come two books on the theory of ratio and proportion and the theory of similar figures (scale copies), treated with a high degree of sophistication.

The next three books are about whole numbers, and are presumably a reworking of much older material that would now be classified as elementary number theory. Here, for example, one finds the famous result that there are infinitely many prime numbers.

The next book, the tenth, is by far the longest, and deals with the seemingly specialist topic of lengths of the form √a ± √b. The final three books, where the curious lengths studied in Book X play a role, are about three-dimensional geometry. They end with the construction of the five regular solids and a proof that there are no more.

**The Axiomatic Method**

What makes the Elements so convincing is the nature of the arguments employed. With some exceptions, these arguments use the axiomatic method. That is to say, they start with some very simple axioms that are intended to be self-evidently true, and proceed by purely logical means to deduce theorems from them.

For this approach to work, three features must be in place. The first is that circularity should be carefully avoided. That is, if you are trying to prove a statement P and you deduce it from an earlier statement, and deduce that from a yet earlier statement, and so on, then at no stage should you reach the statement P again.

The second necessary feature is that the rules of inference should be clear and acceptable. Some geometrical statements seem so obvious that one can fail to notice that they need to be proved: ideally, one should use no properties of figures other than those that have been clearly stated in their definitions.

The third feature is adequate definitions. Euclid offered definitions that were intended to capture our intuitive ideas about geometric objects.`,
      annotations: [
        createAnnotation("euclid-1", "visual", "Euclid's Elements is like a tower: each theorem rests on previous ones, all the way down to the axioms at the foundation. Remove any block and the structure above collapses."),
        createAnnotation("euclid-2", "analogy", "The axiomatic method is like a recipe with guaranteed results: if you follow the steps (logical deductions) from the ingredients (axioms), you always get the same cake (theorem)."),
        createAnnotation("euclid-3", "deep-dive", "The five regular solids (tetrahedron, cube, octahedron, dodecahedron, icosahedron) were so significant to Plato that he associated them with the classical elements: fire, earth, air, water, and the cosmos."),
      ],
    },
    {
      id: "three-geometries",
      title: "The Three Geometries",
      type: "interactive",
      content: "Interactive visualization comparing Euclidean, Hyperbolic, and Elliptic geometries",
      component: "GeometryTypesVisualizer",
      annotations: [
        createAnnotation("geo-viz-1", "visual", "Euclidean geometry (flat): one parallel through a point. Hyperbolic (saddle): infinitely many parallels. Elliptic (sphere): no parallels—all lines meet."),
        createAnnotation("geo-viz-2", "note", "Triangle angle sums differ: Euclidean = 180°, Hyperbolic < 180°, Elliptic > 180°. This is how you measure curvature!"),
      ],
    },
    {
      id: "parallel-postulate",
      title: "The Parallel Postulate",
      type: "text",
      content: "The fifth postulate that sparked a revolution.",
      fullText: `Among Euclid's axioms, one stood out as being considerably less self-evident than the others. This was the famous parallel postulate, which says that if a straight line falling on two straight lines makes the interior angles on the same side less than two right angles, then the two straight lines, if produced indefinitely, will meet on that side.

This cumbersome formulation is equivalent to the statement that, given a line and a point not on that line, there is exactly one line through the point that never meets the given line. This alternative formulation is often called Playfair's axiom.

For centuries, mathematicians tried to prove the parallel postulate from the other axioms. They believed it must be a consequence of the others, not an independent assumption. But all attempts failed.

In the early nineteenth century, mathematicians discovered something remarkable: you could create consistent geometries where the parallel postulate is false. If you assume that through a given point there are infinitely many lines parallel to a given line, you get hyperbolic geometry. If you assume there are no parallel lines at all, you get elliptic geometry.

**Non-Euclidean Geometry**

The discovery of non-Euclidean geometry was shocking. For two thousand years, Euclidean geometry had been regarded as the true geometry of space. Now it turned out that other geometries were logically possible.

Initially, non-Euclidean geometry was considered a curiosity. But then Einstein's general theory of relativity (1915) showed that physical space is not Euclidean. Mass and energy curve spacetime. The geometry of the universe is determined by the distribution of matter within it.

The parallel postulate, which had seemed like a defect in Euclid's system, turned out to be the key insight that opened the door to understanding the geometry of the actual universe.`,
      annotations: [
        createAnnotation("parallel-1", "visual", "On a saddle (hyperbolic space), multiple lines through a point can be parallel to a given line. On a sphere (elliptic space), all great circles intersect—there are no parallels."),
        createAnnotation("parallel-2", "analogy", "The parallel postulate is like asking 'what's north of the North Pole?' On a flat map, it's a nonsensical question. On a sphere, it reveals the curvature of the space."),
        createAnnotation("parallel-3", "deep-dive", "Einstein showed that mass curves spacetime. Light bends around the sun not because of a force, but because it's following the straightest possible path (geodesic) in curved space."),
      ],
    },
  ],
  exercises: [
    {
      id: "ex-2-2-1",
      title: "Triangle Sum",
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
}

// II.3 The Development of Abstract Algebra - Full Text
export const abstractAlgebraDevelopmentFullText: FullTextChapter = {
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
      content: "How algebra evolved from solving specific problems to studying abstract patterns.",
      fullText: `What is algebra? To the high school student encountering it for the first time, algebra is an unfamiliar abstract language of x's and y's, a's and b's, together with rules for manipulating them. These letters can be used to express straight lines as equations, solve simultaneous equations, and work with more complicated curves like quadratics, cubics, and quartics.

Just when there already seem to be a lot of techniques involved, the ante is upped. More complicated curves enter the picture, but the same sort of notation and rules apply.

Now suppose that same high school student goes on to university and attends an algebra course there. Essentially gone are the familiar x's, y's, a's, and b's; essentially gone are the nice graphs. The university course reflects some brave new world in which the algebra has somehow become "modern." This modern algebra involves abstract structures—groups, rings, fields, and other objects—each one defined in terms of a relatively small number of axioms.

There is a lot of moving around between these objects, too, via maps like group homomorphisms and ring automorphisms. One objective of this new type of algebra is to understand the underlying structure of the objects and, in doing so, to build entire theories of groups or rings or fields.

**The Power of Abstraction**

These abstract theories may then be applied in diverse settings where the basic axioms are satisfied but where it may not be at all apparent that a group or a ring or a field may be lurking. This is one of modern algebra's great strengths: once we have proved a general fact about an algebraic structure, there is no need to prove that fact separately each time we come across an instance of that structure.

This abstract approach allows us to recognize that contexts that may look quite different are in fact importantly similar.

How is it that two endeavors—the high school analysis of polynomial equations and the modern algebra of the research mathematician—so seemingly different in their objectives, in their tools, and in their philosophical outlooks are both called "algebra"? Are they even related? In fact, they are, but the story of how they are is long and complicated.`,
      annotations: [
        createAnnotation("algebra-1", "analogy", "High school algebra is like learning to drive specific cars. Abstract algebra is like understanding how all engines work, so you can drive anything with wheels."),
        createAnnotation("algebra-2", "visual", "A group is like a set of dance moves. You can combine moves (operation), there's a 'do nothing' move (identity), and every move can be undone (inverse). The specific dance doesn't matter—only the pattern of combinations."),
        createAnnotation("algebra-3", "deep-dive", "The quadratic formula works because of the structure of polynomial rings. Galois proved you can't have a similar formula for degree 5+ because the symmetric group S₅ isn't solvable."),
      ],
    },
    {
      id: "groups-symmetry",
      title: "Groups: The Algebra of Symmetry",
      type: "text",
      content: "How the study of symmetry led to group theory.",
      fullText: `A group is a set G with a binary operation · satisfying four axioms:

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

**The Power of Group Theory**

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

The abstract approach reveals deep connections between seemingly unrelated fields.`,
      annotations: [
        createAnnotation("group-1", "visual", "The four group axioms are like the rules of a club: (1) if you combine two members you get a member, (2) grouping doesn't matter, (3) there's a 'do nothing' member, (4) every member can leave."),
        createAnnotation("group-2", "analogy", "Symmetry operations on a snowflake form a group. Rotate 60°, flip, rotate back—these operations compose just like numbers add and multiply."),
        createAnnotation("group-3", "deep-dive", "Noether's theorem: symmetry → conservation law. This is why physics works—rotate space and physics stays the same, so angular momentum is conserved."),
      ],
    },
    {
      id: "group-interactive",
      title: "Exploring Group Operations",
      type: "interactive",
      content: "Interactive Cayley table and symmetry composition explorer",
      component: "GroupTheoryVisualizer",
      annotations: [
        createAnnotation("group-int-1", "visual", "The Cayley table shows all possible compositions. Notice the pattern: rotating then reflecting gives different results than reflecting then rotating—order matters!"),
        createAnnotation("group-int-2", "note", "Try r ∘ s₁ vs s₁ ∘ r. They're different! This shows the group is non-abelian (not commutative)."),
      ],
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
  ],
}

// III.1 Euler's Identity - Full Text
export const eulerIdentityFullText: FullTextChapter = {
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
      content: "The equation that connects five fundamental constants.",
      fullText: `Euler's identity is often called the most beautiful equation in mathematics. It connects five fundamental constants:

- e: the base of natural logarithms (~2.718...)
- i: the imaginary unit (i² = -1)
- π: the ratio of circle's circumference to diameter (~3.141...)
- 1: the multiplicative identity
- 0: the additive identity

This identity emerges from Euler's formula: e^(iθ) = cos(θ) + i·sin(θ)

**Understanding the Formula**

When θ = π, we have:
e^(iπ) = cos(π) + i·sin(π) = -1 + i·0 = -1

Therefore: e^(iπ) + 1 = 0

**Why This Matters**

This equation unites three major areas of mathematics:
- Exponential growth (e)
- Trigonometry (sin, cos)
- Complex numbers (i)

It shows that these seemingly unrelated constants are deeply connected through the geometry of the complex plane.

**The Complex Plane**

Complex numbers can be represented as points in a 2D plane, where the x-axis is real and the y-axis is imaginary. Multiplying by e^(iθ) rotates a point by angle θ around the origin.

So e^(iπ) represents a rotation by 180°, which takes the point 1 to the point -1.`,
      annotations: [
        createAnnotation("euler-1", "visual", "Picture the complex plane: 1 is at (1,0). Multiply by e^(iπ) and you rotate 180° to (-1,0). Add 1 and you land at 0—the origin."),
        createAnnotation("euler-2", "analogy", "Euler's formula is like a universal translator: it converts between the 'language' of exponentials and the 'language' of rotation/trigonometry."),
        createAnnotation("euler-3", "deep-dive", "Richard Feynman called this 'the most remarkable formula in mathematics.' It appears in quantum mechanics, signal processing, and anywhere waves meet exponentials."),
      ],
    },
    {
      id: "visual-understanding",
      title: "Visual Understanding",
      type: "interactive",
      content: "Interactive visualization of Euler's formula",
      component: "EulersFormulaDemo",
      annotations: [
        createAnnotation("euler-vis-1", "visual", "As θ increases from 0 to 2π, e^(iθ) traces a unit circle in the complex plane. At θ=π, we're halfway around at -1."),
      ],
    },
  ],
  exercises: [
    {
      id: "ex-euler-1",
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
}

// III.2 Golden Ratio - Full Text
export const goldenRatioFullText: FullTextChapter = {
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
      content: "The divine proportion found in nature and art.",
      fullText: `The golden ratio φ has fascinated mathematicians, artists, and architects for centuries. It is defined as:

φ = (1 + √5) / 2 ≈ 1.618033988...

**Properties of φ**

The golden ratio has remarkable mathematical properties:

- φ² = φ + 1
- 1/φ = φ - 1 ≈ 0.618...
- φ = 1 + 1/(1 + 1/(1 + 1/(1 + ...))) [continued fraction]

**Where φ Appears**

**Geometry**: In a regular pentagon, the ratio of diagonal to side is φ. The pentagram (five-pointed star) is filled with golden ratios.

**Fibonacci Connection**: As n grows large, the ratio Fₙ₊₁/Fₙ approaches φ. For example: 8/5 = 1.6, 13/8 = 1.625, 21/13 ≈ 1.615, getting closer to 1.618...

**Art and Architecture**: The Parthenon, Leonardo da Vinci's works, and many modern designs incorporate φ. Whether this is intentional or coincidental is debated.

**Nature**: Spiral patterns in shells, arrangement of leaves on stems (phyllotaxis), and branching patterns often approximate φ.

**The Golden Rectangle**

A rectangle with sides in ratio φ:1 has a unique property: if you remove a square from it, the remaining rectangle also has sides in ratio φ:1. This process can be repeated infinitely, generating a logarithmic spiral.`,
      annotations: [
        createAnnotation("phi-1", "visual", "The golden rectangle: remove a square, and what's left is another golden rectangle. Repeat forever, and the corners trace a logarithmic spiral—found in nautilus shells and hurricanes."),
        createAnnotation("phi-2", "analogy", "φ is like a mathematical echo chamber: 1/φ = φ - 1. This self-similarity makes it appear naturally in recursive processes like population growth and plant branching."),
        createAnnotation("phi-3", "deep-dive", "The 'aesthetic appeal' of φ is controversial. Studies show people prefer rectangles closer to 1.5:1 or 1.75:1. The golden ratio's fame may be more mythology than mathematics."),
      ],
    },
  ],
  exercises: [],
}

// III.3 Fibonacci Sequence - Full Text
export const fibonacciFullText: FullTextChapter = {
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
      content: "Nature's favorite number sequence.",
      fullText: `The Fibonacci sequence is defined by:
- F₁ = 1, F₂ = 1
- Fₙ = Fₙ₋₁ + Fₙ₋₂ for n > 2

Each number is the sum of the two preceding ones. The sequence begins: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

**Amazing Properties**

**Sum Formula**: The sum of the first n Fibonacci numbers equals Fₙ₊₂ - 1.
Example: 1+1+2+3+5+8 = 20 = 21-1 = F₈ - 1

**Sum of Squares**: The sum of squares of the first n Fibonacci numbers equals Fₙ × Fₙ₊₁.
Example: 1²+1²+2²+3²+5² = 1+1+4+9+25 = 40 = 5×8 = F₅ × F₆

**Golden Ratio Connection**: The ratio Fₙ₊₁/Fₙ approaches φ (the golden ratio) as n → ∞.

**Nature's Patterns**

The sequence appears surprisingly often:
- **Phyllotaxis**: Arrangement of leaves on stems often follows Fibonacci patterns (1, 2, 3, 5, 8 leaves per rotation)
- **Spirals**: Sunflower seed spirals often count 34 and 55 (consecutive Fibonacci)
- **Breeding**: Fibonacci introduced the sequence modeling rabbit populations (unrealistically but influentially)

**Mathematical Importance**

The Fibonacci sequence appears in:
- Efficient algorithms (Fibonacci search)
- Financial modeling
- Computer science (Fibonacci heaps)
- Art and architecture (proportions)`,
      annotations: [
        createAnnotation("fib-1", "visual", "Plant spirals: count spirals clockwise and counter-clockwise on a sunflower—you'll likely get consecutive Fibonacci numbers (like 34 and 55)."),
        createAnnotation("fib-2", "analogy", "The Fibonacci sequence is like a population where each pair of rabbits produces one new pair every generation after maturing. It grows exponentially, but not as fast as 2ⁿ."),
        createAnnotation("fib-3", "deep-dive", "Binet's formula gives Fₙ exactly: Fₙ = (φⁿ - (1-φ)ⁿ)/√5. Even though Fibonacci numbers are integers, they're built from the golden ratio!"),
      ],
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
}

// III.4 Infinity - Full Text
export const infinityFullText: FullTextChapter = {
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
      content: "Not all infinities are created equal.",
      fullText: `Infinity is not a number—it's a concept. But remarkably, there are different sizes of infinity!

**ℵ₀ (Aleph-null): Countable Infinity**

The smallest infinity is the cardinality of the natural numbers ℕ = {1, 2, 3, ...}.

Sets with cardinality ℵ₀:
- Natural numbers
- Integers (positive, negative, and zero)
- Rational numbers (fractions)

These are "countable" because you can list them in a sequence and eventually reach any element (given infinite time).

**ℵ₁: The Next Infinity**

Georg Cantor proved that the real numbers ℝ are "more infinite" than the natural numbers. The cardinality of ℝ is 2^ℵ₀, which may or may not equal ℵ₁ (this is the Continuum Hypothesis).

**Cantor's Diagonal Argument**

Cantor showed you can't pair up real numbers with natural numbers:
1. Suppose you have a list of all real numbers between 0 and 1
2. Create a new number that differs from the nth number in its nth decimal place
3. This new number isn't on your list!

Therefore, no list can contain all real numbers—they're uncountable.

**Larger Infinities**

For any set S, the power set P(S) has strictly greater cardinality. So there's an infinite hierarchy: ℵ₀ < 2^ℵ₀ < 2^(2^ℵ₀) < ...

**Hilbert's Hotel**

A hotel with infinitely many rooms (ℵ₀) can accommodate infinitely many new guests—even when full! Just move guest in room n to room 2n, freeing all odd rooms. This shows ℵ₀ + ℵ₀ = ℵ₀.`,
      annotations: [
        createAnnotation("inf-1", "visual", "Hilbert's Hotel: infinity plus infinity equals infinity. Even infinity times infinity equals infinity. But 2^infinity is strictly bigger—there's no bijection between a set and its power set."),
        createAnnotation("inf-2", "analogy", "Countable infinity is like a discrete line of people you can count one by one. Uncountable infinity is like a continuous line—you can't even name the 'next' point after any given point."),
        createAnnotation("inf-3", "deep-dive", "Cantor's work on infinity was controversial—some called it 'corrupting youth.' He suffered from depression, possibly exacerbated by resistance to his ideas. Now his set theory is foundational."),
      ],
    },
  ],
  exercises: [],
}

// III.21 Elliptic Curves - Full Text
export const ellipticCurvesFullText: FullTextChapter = {
  id: "elliptic-curves",
  title: "Elliptic Curves",
  description: "Algebraic curves with deep connections to number theory.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 21,
  content: [
    {
      id: "what-are-elliptic-curves",
      title: "What Are Elliptic Curves?",
      type: "text",
      content: "Curves defined by cubic equations with remarkable properties.",
      fullText: `An elliptic curve over a field K can be defined as an algebraic curve of genus 1 over K, endowed with a point defined over K. More concretely: an elliptic curve is a curve in the plane determined by an equation of the form:

y² + a₁xy + a₃y = x³ + a₂x² + a₄x + a₆

When the characteristic of K is not 2, we can transform this into the simpler form y² = f(x), for some cubic polynomial f.

**Group Structure**

The points of an elliptic curve E with coordinates in K naturally form an Abelian group, denoted E(K). This means:
- You can "add" two points on the curve to get a third point
- There's an identity element (the "point at infinity")
- Every point has an inverse
- The operation is associative

Geometrically, to add two points P and Q: draw the line through them, find where it intersects the curve again, then reflect over the x-axis. That's P + Q.

**Connection to Number Theory**

Elliptic curves are central to modern number theory:

**Fermat's Last Theorem**: Andrew Wiles proved Fermat's Last Theorem by studying Galois representations arising from elliptic curves. The proof showed that certain elliptic curves cannot exist, which implies Fermat's equation has no non-trivial solutions.

**Mordell-Weil Theorem**: When K is a number field, E(K) is a finitely generated Abelian group. This means all rational points can be built from a finite set of "basis" points using the group law.

**Birch and Swinnerton-Dyer Conjecture**: One of the Millennium Prize Problems. It conjecturally relates the rank of E(K) (how many independent basis points you need) to the behavior of the L-function associated to the curve.

**Cryptography**: Elliptic curves are used in modern encryption (ECC) because the discrete logarithm problem is hard on elliptic curves, allowing secure communication with smaller key sizes than RSA.`,
      annotations: [
        createAnnotation("ec-1", "visual", "Adding points on an elliptic curve: draw a line through two points, it hits the curve at a third point. Reflect that point over the x-axis— that's the sum. This geometric operation satisfies all group axioms."),
        createAnnotation("ec-2", "analogy", "Elliptic curves are like mathematical multi-tools. They encode information about number theory, geometry, and algebra simultaneously. Wiles used them to prove Fermat's Last Theorem by showing certain curves 'shouldn't exist.'"),
        createAnnotation("ec-3", "deep-dive", "The modularity theorem (proved by Wiles) says every elliptic curve is 'modular'—connected to a special function called a modular form. This bridge between different areas of math is the key to FLT."),
      ],
    },
  ],
  exercises: [],
}

// III.22 Euclidean Algorithm and Continued Fractions - Full Text
export const euclideanAlgorithmFullText: FullTextChapter = {
  id: "euclidean-algorithm",
  title: "The Euclidean Algorithm and Continued Fractions",
  description: "The oldest nontrivial algorithm and its connection to best approximations.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 22,
  content: [
    {
      id: "euclidean-algo",
      title: "The Euclidean Algorithm",
      type: "text",
      content: "Finding greatest common divisors for over 2000 years.",
      fullText: `The Euclidean algorithm, described in Euclid's Elements (Book VII, Propositions 1-2), finds the greatest common divisor (GCD) of two integers. It's likely the oldest nontrivial algorithm still in use today.

**How It Works**

Given two numbers m and n (assume m > n):
1. Divide m by n to get quotient q₁ and remainder r₁ (where 0 ≤ r₁ < n)
   m = q₁n + r₁
2. Now divide n by r₁ to get q₂ and r₂
   n = q₂r₁ + r₂
3. Continue: divide each remainder by the next
4. Stop when you get remainder 0
5. The last non-zero remainder is the GCD

**Example**: GCD(165, 70)
- 165 = 2 × 70 + 25
- 70 = 2 × 25 + 20
- 25 = 1 × 20 + 5
- 20 = 4 × 5 + 0

The GCD is 5.

**Why It Works**

The key insight: gcd(m, n) = gcd(n, r) where r is the remainder when m is divided by n. This is because any common divisor of m and n must also divide r = m - qn.

The algorithm also finds integers a and b such that:
am + bn = gcd(m, n)

For example: 5 = 3 × 165 - 7 × 70. This is called Bézout's identity.

**Efficiency**

The Euclidean algorithm is remarkably fast. The number of steps needed is at most 5 times the number of digits in the smaller number (Lamé's theorem, 1844). This makes it efficient even for very large numbers.

**Continued Fractions**

The quotients q₁, q₂, q₃, ... from the Euclidean algorithm generate the continued fraction expansion of m/n:

m/n = q₁ + 1/(q₂ + 1/(q₃ + ...))

For 165/70 = 2.357...:
165/70 = 2 + 1/(2 + 1/(1 + 1/4))

**Best Approximations**

Truncating the continued fraction gives the best rational approximations to a number. For π = 3.14159...:
- 3 (error: 0.14)
- 3 + 1/7 = 22/7 (error: 0.00126) — familiar approximation
- 3 + 1/(7 + 1/15) = 333/106 (error: 0.00008)
- 3 + 1/(7 + 1/(15 + 1/1)) = 355/113 (error: 0.00000027)

The approximation 355/113 is remarkably accurate because the next quotient (292) is unusually large.

**Periodicity**

Lagrange proved that the continued fraction of a quadratic surd (√n for non-square n) is always periodic. For example:
√2 = [1; 2, 2, 2, 2, ...] = 1 + 1/(2 + 1/(2 + 1/(2 + ...)))

The golden ratio φ = (1+√5)/2 has the "most irrational" continued fraction: [1; 1, 1, 1, ...], making it hardest to approximate by rationals.`,
      annotations: [
        createAnnotation("euclid-1", "visual", "The Euclidean algorithm repeatedly replaces the larger number with the remainder. Like a game of hot potato—the remainder gets smaller until it vanishes, and whoever held it last (the GCD) wins."),
        createAnnotation("euclid-2", "analogy", "Continued fractions are like nested Russian dolls. Each quotient reveals a better approximation. The golden ratio has all 1s—it's the 'simplest' continued fraction but the hardest to approximate."),
        createAnnotation("euclid-3", "deep-dive", "355/113 approximates π to 6 decimal places with only 3 digits in numerator and denominator. This accuracy comes from the next quotient being 292—skipping it causes minimal error."),
      ],
    },
  ],
  exercises: [
    {
      id: "ex-euclid-1",
      title: "Euclidean Algorithm",
      difficulty: "medium",
      type: "interactive",
      question: "What is the GCD of 48 and 18?",
      answer: "6",
      hint: "48 = 2 × 18 + 12, then continue...",
      explanation: "48 = 2×18 + 12, 18 = 1×12 + 6, 12 = 2×6 + 0. The GCD is 6.",
      points: 15,
    },
  ],
}

// III.4 Braid Groups - Full Text
export const braidGroupsFullText: FullTextChapter = {
  id: "braid-groups",
  title: "Braid Groups",
  description: "Groups capturing the topology of braided strings.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 4,
  content: [
    {
      id: "what-are-braids",
      title: "What Are Braid Groups?",
      type: "text",
      content: "The algebra of braided strings.",
      fullText: `Take two parallel planes, each punctured at n points. Label the holes 1 to n in each plane, and run a string from each hole in the first plane to one in the second, in such a way that no two strings go to the same hole. The result is an n-braid.

We insist that the strings go from left to right without "doubling back"—a knotted string is not allowed.

**Braid Isotopy**

A certain freedom is allowed when describing a braid: provided the string ends remain fixed and the strings do not break or pass through each other, one can stretch, contract, bend, and move the strings in three dimensions and end up with the "same" braid. This equivalence relation is called braid isotopy.

**Composition**

Braids can be composed: arrange a pair of braids end to end to abut in a common plane, join up the strings, and remove the middle plane. With this operation, n-braids form a group Bₙ.

**Generators**

The group Bₙ is generated by elements σ₁, σ₂, ..., σₙ₋₁, where σᵢ is formed from the trivial braid by crossing the ith string over the (i+1)st string.

**Relation to Symmetric Group**

There's a similarity between σᵢ and adjacent transpositions that generate the symmetric group Sₙ. In fact, the braid group maps onto Sₙ by "forgetting" which string crosses over which—we only care about the permutation of endpoints.

**Applications**

Braid groups appear in:
- Topology (knot theory)
- Physics (anyons in quantum mechanics)
- Cryptography (braid-based cryptography)`,
      annotations: [
        createAnnotation("braid-1", "visual", "Imagine hair braiding: you cross strands over each other. The braid group captures all possible ways to do this, where only the topology matters, not the exact path of each strand."),
        createAnnotation("braid-2", "analogy", "Braid composition is like concatenating train tracks: connect the end of one braid to the start of another. The group operation tells you how braids 'multiply.'"),
      ],
    },
  ],
  exercises: [],
}

// III.9 Compactness - Full Text
export const compactnessFullText: FullTextChapter = {
  id: "compactness",
  title: "Compactness and Compactification",
  description: "The property that makes infinite sets behave like finite ones.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 9,
  content: [
    {
      id: "what-is-compactness",
      title: "What Is Compactness?",
      type: "text",
      content: "Making infinite sets behave like finite ones.",
      fullText: `In mathematics, finite sets and infinite sets behave quite differently. For instance:

**Finite sets have these properties**:
- All functions are bounded
- All functions attain a maximum
- All sequences have constant subsequences

These are false for infinite sets.

**Compact Sets**

A compact set is an infinite set that behaves like a finite set. A good example is the closed interval [0, 1].

For [0, 1], we can restore the finite-like properties by adding continuity and convergence:

- **All continuous functions are bounded** (Extreme Value Theorem)
- **All continuous functions attain a maximum** 
- **All sequences have convergent subsequences** (Bolzano-Weierstrass theorem)
- **All open covers have finite subcovers** (Heine-Borel theorem)

**Formal Definition**

A topological space X is compact if every open cover has a finite subcover. This means: if you cover X with any collection of open sets, you can always find finitely many of them that still cover X.

**Why Compactness Matters**

Compactness is a powerful tool that enables:
- **Local-to-global principles**: Local control extends to global control
- **Existence of maxima/minima**: Essential in calculus of variations
- **Convergence**: Helps recover limits from non-convergent sequences

The Heine-Borel theorem states that in ℝⁿ, a set is compact if and only if it is closed and bounded.`,
      annotations: [
        createAnnotation("compact-1", "visual", "Compactness is like having a 'finitely searchable' space. In [0,1], any infinite sequence must cluster somewhere—you can't escape to infinity."),
        createAnnotation("compact-2", "analogy", "Finite sets are like closed boxes: everything is contained. Compact sets are like boxes that might be infinitely subdivided, but still bounded and closed."),
        createAnnotation("compact-3", "deep-dive", "The open interval (0,1) is NOT compact because sequences can 'escape' to the endpoints. The closed interval [0,1] IS compact—the walls contain everything."),
      ],
    },
  ],
  exercises: [],
}

// III.27 Fourier Transform - Full Text
export const fourierTransformFullText: FullTextChapter = {
  id: "fourier-transform",
  title: "The Fourier Transform",
  description: "Decomposing functions into fundamental frequencies.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 27,
  content: [
    {
      id: "what-is-fourier",
      title: "What Is the Fourier Transform?",
      type: "text",
      content: "Breaking down complex signals into simple waves.",
      fullText: `Very broadly speaking, a Fourier transform is a systematic way to decompose "generic" functions into a superposition of "symmetric" functions. These symmetric functions are usually explicitly defined, such as sin(nx) and cos(nx).

**Simple Example: Even and Odd Functions**

Any function f can be written as fₑ + fₒ where:
- fₑ(x) = ½(f(x) + f(-x)) is even: fₑ(-x) = fₑ(x)
- fₒ(x) = ½(f(x) - f(-x)) is odd: fₒ(-x) = -fₒ(x)

This is the simplest Fourier decomposition.

**The Classical Fourier Transform**

For a function f defined on the real line, the Fourier transform is:

f̂(ξ) = ∫₋∞^∞ f(x)e^(-2πixξ) dx

This decomposes f into a superposition of complex exponentials e^(2πixξ) at different frequencies ξ.

**Key Properties**

- **Inversion**: You can recover f from f̂
- **Convolution becomes multiplication**: The Fourier transform turns convolution into pointwise multiplication
- **Differentiation becomes multiplication**: Fourier transform turns derivatives into multiplication by frequency

**Applications**

- **Signal processing**: Filtering, compression (MP3, JPEG)
- **Differential equations**: Turning PDEs into algebraic equations
- **Crystallography**: X-ray diffraction patterns
- **Quantum mechanics**: Position and momentum representations
- **Music**: Understanding harmonics and overtones`,
      annotations: [
        createAnnotation("fourier-1", "visual", "A Fourier transform is like a prism: white light (complex signal) enters, and the prism separates it into component colors (frequencies). Each frequency tells you 'how much' of that wave is present."),
        createAnnotation("fourier-2", "analogy", "MP3 compression uses Fourier transforms: it removes frequencies humans can't hear. The signal is decomposed, high frequencies discarded, then reconstructed."),
        createAnnotation("fourier-3", "deep-dive", "The uncertainty principle in quantum mechanics is a Fourier uncertainty: the more precisely you know position, the less precisely you know momentum. This is a mathematical property of Fourier transforms."),
      ],
    },
  ],
  exercises: [],
}

// III.31 Gamma Function - Full Text
export const gammaFunctionFullText: FullTextChapter = {
  id: "gamma-function",
  title: "The Gamma Function",
  description: "Extending the factorial to all complex numbers.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 31,
  content: [
    {
      id: "gamma-def",
      title: "Extending Factorials",
      type: "text",
      content: "The factorial function generalized to complex numbers.",
      fullText: `If n is a positive integer, then its factorial n! is the product 1 × 2 × · · · × n. The first eight factorials are 1, 2, 6, 24, 120, 720, 5040, and 40320.

The gamma function Γ extends the factorial to all complex numbers (except non-positive integers). It is defined by:

Γ(s) = ∫₀^∞ x^(s-1) e^(-x) dx

**Key Property**

Integration by parts shows that:
Γ(s) = (s-1)Γ(s-1)

This is exactly what we need if we want to think of Γ(s) as "(s-1)!"

**Values at Integers**

For positive integers n:
Γ(n) = (n-1)!

So Γ(1) = 0! = 1, Γ(2) = 1! = 1, Γ(3) = 2! = 2, etc.

**Famous Values**

**Γ(1/2) = √π**

This is equivalent to the fact that the area under the normal distribution curve is 1. It connects the gamma function to π!

**Reflection Formula**

Γ(s)Γ(1-s) = π / sin(πs)

This shows a deep connection between the gamma function and trigonometric functions.

**Analytic Continuation**

The integral definition only works when Re(s) > 0. But we can extend Γ to all complex numbers (except 0, -1, -2, ...) using the functional equation Γ(s) = Γ(s+1)/s. This creates simple poles at non-positive integers.

**Why Γ is Natural**

Bohr-Mollerup theorem: If f:(0,∞) → (0,∞) satisfies:
1. f(x+1) = xf(x)
2. f(1) = 1
3. log f is convex

Then f = Γ. This characterizes Γ as the "smoothest" extension of factorial.`,
      annotations: [
        createAnnotation("gamma-1", "visual", "Γ(x) for real x > 0 smoothly interpolates between integer factorials. At x=1/2, it hits √π—connecting factorials to the area of the Gaussian curve."),
        createAnnotation("gamma-2", "analogy", "The gamma function is like a continuous bridge between discrete islands (integer factorials). It fills in all the gaps with the smoothest possible curve."),
        createAnnotation("gamma-3", "deep-dive", "Γ(1/2) = √π appears in the normal distribution. This is why π shows up in probability and statistics, not just geometry!"),
      ],
    },
  ],
  exercises: [],
}

// III.44 Knot Polynomials - Full Text
export const knotPolynomialsFullText: FullTextChapter = {
  id: "knot-polynomials",
  title: "Knot Polynomials",
  description: "Using algebra to distinguish different knots.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 44,
  content: [
    {
      id: "knots-basics",
      title: "Knots and Links",
      type: "text",
      content: "Distinguishing entangled loops using algebra.",
      fullText: `A knot is a closed curve in three-dimensional space that never meets itself. A link is several such curves, all disjoint from one another.

**Examples**

- **Unknot**: A simple circle (not knotted at all)
- **Trefoil**: The simplest nontrivial knot
- **Figure-eight**: Another simple knot
- **Hopf link**: Two circles linked together
- **Whitehead link**: Two circles with more complex linking

**The Fundamental Problem**

How do we know if two knots are different? They may look different, but can one be deformed into the other without cutting?

**Invariants**

We need invariants: mathematical entities assigned to knots that don't change under deformation. If two knots have different invariants, they cannot be the same.

**The Alexander Polynomial (1926)**

J.W. Alexander discovered a polynomial invariant derived from algebraic topology. It satisfies a skein relation—a way to compute the polynomial by looking at how strands cross.

**The Jones Polynomial (1984)**

Vaughan Jones discovered a new polynomial invariant that revolutionized knot theory. It can distinguish knots that the Alexander polynomial cannot.

**The HOMFLY Polynomial (1984)**

Named after its discoverers (Hoste, Ocneanu, Millett, Freyd, Lickorish, Yetter), this polynomial generalizes both Alexander and Jones polynomials.

For an oriented link L, the HOMFLY polynomial P(L) is a polynomial in variables v and z satisfying:

- P(unknot) = 1
- v^(-1)P(L+) - vP(L-) = zP(L0)

Where L+, L-, L0 are three links identical except at one crossing:
  - L+ has a positive crossing
  - L- has a negative crossing  
  - L0 has the crossing "smoothed" out

**Why It Works**

The skein relation lets you reduce any knot to simpler ones. Starting from the unknot and applying the relation recursively, you can compute the polynomial for any knot.`,
      annotations: [
        createAnnotation("knot-1", "visual", "Knot polynomials are like fingerprints for knots. Two knots might look different in pictures, but if their polynomials differ, they're definitely different knots."),
        createAnnotation("knot-2", "analogy", "The skein relation is like a genealogy: you trace a knot back to simpler ancestors (the unknot) using rules at each crossing."),
        createAnnotation("knot-3", "deep-dive", "Knot theory has applications in DNA topology (how DNA coils), quantum field theory (Chern-Simons theory), and even protein folding!"),
      ],
    },
  ],
  exercises: [],
}

// III.47 L-Functions - Full Text
export const lFunctionsFullText: FullTextChapter = {
  id: "l-functions",
  title: "L-Functions",
  description: "Packaging sequences of numbers into rich analytic objects.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 47,
  content: [
    {
      id: "what-are-l-functions",
      title: "What Are L-Functions?",
      type: "text",
      content: "Encoding sequences into analytic functions.",
      fullText: `Given a sequence a₁, a₂, a₃, ..., we can package it into a Dirichlet series:

L(s) = a₁/1^s + a₂/2^s + a₃/3^s + ... = Σ(n≥1) aₙ/n^s

This converges for sufficiently large s and can be a very rich object even if the original sequence is simple.

**The Riemann Zeta Function**

The prototypical example is when aₙ = 1 for all n:

ζ(s) = 1 + 1/2^s + 1/3^s + 1/4^s + ...

This is the famous Riemann zeta function. It converges when s > 1 and Euler showed:
- ζ(2) = π²/6
- ζ(4) = π⁴/90
- ζ(12) = 691π¹²/638512875

**What Makes a "Good" L-Function?**

Not every Dirichlet series deserves to be called an L-function. Good L-functions typically have:

1. **Euler product**: An infinite product over primes
   ζ(s) = Π_p (1 - p^(-s))^(-1)

2. **Analytic continuation**: Can be extended to almost all of ℂ

3. **Functional equation**: Relates L(s) to L(k-s) for some k

**The Riemann Hypothesis**

The most famous open problem about L-functions: all non-trivial zeros of ζ(s) have real part equal to 1/2.

This has implications for the distribution of prime numbers. If true, it gives the best possible error term for the prime number theorem.

**Applications**

L-functions connect:
- Number theory (primes, arithmetic progressions)
- Algebra (Galois representations)
- Analysis (complex function theory)
- Geometry (elliptic curves, modular forms)

They are central to the Langlands program, which seeks to unify different areas of mathematics.`,
      annotations: [
        createAnnotation("lfunc-1", "visual", "An L-function is like a zip file for a sequence: it compresses infinitely many numbers into one function. Just as a zip file preserves all data, the L-function encodes everything about the sequence."),
        createAnnotation("lfunc-2", "analogy", "The Euler product is like prime factorization for functions. Just as every integer factors uniquely into primes, every L-function factors into 'prime' components indexed by primes."),
        createAnnotation("lfunc-3", "deep-dive", "The Riemann Hypothesis is worth $1 million (Clay Millennium Prize). It's been checked for the first 10 trillion zeros, but a proof remains elusive. It says all non-trivial zeros line up on the 'critical line' Re(s) = 1/2."),
      ],
    },
  ],
  exercises: [],
}

// III.54 Matroids - Full Text
export const matroidsFullText: FullTextChapter = {
  id: "matroids",
  title: "Matroids",
  description: "Abstract structures generalizing the notion of linear independence.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 54,
  content: [
    {
      id: "what-are-matroids",
      title: "What Are Matroids?",
      type: "text",
      content: "Generalizing linear independence.",
      fullText: `A matroid is a structure that abstracts and generalizes the notion of linear independence in vector spaces. It was introduced by Hassler Whitney in 1935.

**Definition**

A matroid M on a ground set E is a collection of subsets of E called independent sets, satisfying:

1. **The empty set is independent**: ∅ is in the collection

2. **Hereditary property**: If A is independent and B ⊆ A, then B is independent

3. **Exchange property**: If A and B are independent with |A| < |B|, then there exists x in B\A such that A ∪ {x} is independent

**Examples**

**Vector Matroid**: Given a matrix, the independent sets are the linearly independent sets of columns.

**Graphic Matroid**: Given a graph, the independent sets are the forests (acyclic subgraphs). The circuits are the cycles.

**Uniform Matroid**: U_{k,n} has ground set of size n, and a set is independent if it has at most k elements.

**Key Concepts**

- **Bases**: Maximal independent sets. All bases have the same size (the rank).
- **Circuits**: Minimal dependent sets.
- **Rank**: The size of any basis.
- **Closure**: The set of all elements that, when added to a set, create a dependency.

**Why Matroids Matter**

Matroids appear in:
- **Graph theory**: Spanning trees, network flows
- **Linear algebra**: Vector spaces over any field
- **Combinatorics**: Greedy algorithms, optimization
- **Geometry**: Arrangements of hyperplanes

**Optimization**

Matroids are important because many optimization problems can be solved efficiently on matroids using greedy algorithms. If you can phrase your problem as a matroid, you can often find the optimal solution easily.`,
      annotations: [
        createAnnotation("matroid-1", "visual", "Think of a matroid as a board game: the ground set is your pieces, and independent sets are legal configurations. The rules (hereditary and exchange) ensure you can always build up to a maximal configuration."),
        createAnnotation("matroid-2", "analogy", "In a graphic matroid, forests are independent and cycles are dependent. Just as you can't add an edge to a spanning tree without creating a cycle, you can't add an element to a basis without creating a dependency."),
        createAnnotation("matroid-3", "deep-dive", "Matroid theory unifies results from graph theory, linear algebra, and combinatorics. A theorem proved for matroids automatically applies to all these areas simultaneously!"),
      ],
    },
  ],
  exercises: [],
}

// III.71 Probability Distributions - Full Text
export const probabilityDistributionsFullText: FullTextChapter = {
  id: "probability-distributions",
  title: "Probability Distributions",
  description: "Mathematical models of random phenomena.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 71,
  content: [
    {
      id: "prob-dist-basics",
      title: "Discrete Distributions",
      type: "text",
      content: "Modeling random outcomes with probability.",
      fullText: `When we toss a coin, we don't know if it will land heads or tails. But if tossed many times, the proportion of heads is very likely to be close to 1/2.

**Sample Spaces**

A probability distribution assigns probabilities to outcomes in a sample space Ω.

For a fair coin: Ω = {H, T} with P(H) = P(T) = 1/2

**Bernoulli Distribution**

Models a single trial with two outcomes (success/failure):
- P(X = 1) = p (success)
- P(X = 0) = 1 - p (failure)

**Binomial Distribution**

Models the number of successes in n independent Bernoulli trials:

P(X = k) = (n choose k) p^k (1-p)^(n-k)

For n = 5, p = 1/2: P(exactly 2 heads) = (5 choose 2)(1/2)^5 = 10/32

**Geometric Distribution**

Models the number of trials until first success:

P(X = k) = (1-p)^(k-1) p

The expected number of coin tosses to get heads is 2 (when p = 1/2).

**Poisson Distribution**

Models rare events occurring at constant rate λ:

P(X = k) = e^(-λ) λ^k / k!

Used for: radioactive decay, call centers, traffic accidents.

**Continuous Distributions**

**Normal (Gaussian) Distribution**

The bell curve: f(x) = (1/√(2πσ²)) e^(-(x-μ)²/(2σ²))

Models: measurement errors, heights, test scores, Brownian motion.

**Central Limit Theorem**: Averages of independent random variables tend toward normal distribution, regardless of the original distribution. This explains why the normal distribution appears everywhere!`,
      annotations: [
        createAnnotation("prob-1", "visual", "The binomial distribution for coin tosses: as n grows, the distribution (number of heads) becomes increasingly bell-shaped. This illustrates the Central Limit Theorem—the binomial approaches the normal distribution."),
        createAnnotation("prob-2", "analogy", "Probability distributions are like recipes for randomness. The Bernoulli is like flipping a biased coin once. The binomial is like flipping it n times and counting heads. The Poisson is like waiting for rare events."),
        createAnnotation("prob-3", "deep-dive", "The Central Limit Theorem explains why the normal distribution appears everywhere—from measurement errors to stock prices to biological traits. It's a mathematical law of nature: averages converge to normal, regardless of the underlying distribution!"),
      ],
    },
  ],
  exercises: [],
}

// III.41 Irrational and Transcendental Numbers - Full Text
export const irrationalNumbersFullText: FullTextChapter = {
  id: "irrational-numbers",
  title: "Irrational and Transcendental Numbers",
  description: "Numbers that cannot be expressed as fractions or roots of polynomials.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 41,
  content: [
    {
      id: "irrational-def",
      title: "Irrational Numbers",
      type: "text",
      content: "Numbers that cannot be written as fractions.",
      fullText: `An irrational number is one that cannot be written as a/b with both a and b integers. Many naturally occurring numbers are irrational: √2, e, and π.

**The Classic Proof: √2 is Irrational**

This is one of the best-known arguments in mathematics:

Suppose √2 = a/b where a and b have no common factor (the fraction is in lowest terms).

Then: a² = 2b²

This means a² is even, so a must be even. Write a = 2c.

Then: 4c² = 2b², which simplifies to 2c² = b²

This means b² is even, so b must be even.

But if both a and b are even, they share a factor of 2, contradicting our assumption that the fraction was in lowest terms.

Therefore, √2 cannot be rational.

**Irrationality of e**

The proof that e is irrational uses a different technique. If e = p/q, then:

p(q-1)! = Σ(j=0 to ∞) q!/j!

The left side and terms with j ≤ q are integers. But the remaining terms form a sum between 0 and 1, which cannot be an integer—a contradiction.

**Transcendental Numbers**

A transcendental number is one which is not algebraic—it is not the root of any polynomial equation with integer coefficients.

- √2 is irrational but algebraic (root of x² - 2 = 0)
- π and e are transcendental

**Famous Open Problems**

It is not known whether:
- π + e is irrational
- π × e is irrational
- Euler's constant γ ≈ 0.577... is irrational

These simple questions remain unsolved!`,
      annotations: [
        createAnnotation("irrational-1", "visual", "The proof that √2 is irrational is like a game: assume it's rational, and follow the logic until you hit a wall (the contradiction). The wall proves your assumption was wrong."),
        createAnnotation("irrational-2", "analogy", "Rational numbers are like pixels on a screen—discrete and countable. Irrational numbers fill the gaps between pixels, creating a continuous line."),
        createAnnotation("irrational-3", "deep-dive", "Cantor proved almost all real numbers are transcendental, yet proving any specific number is transcendental is hard. It's easier to show transcendental numbers exist than to identify them!"),
      ],
    },
  ],
  exercises: [],
}

// III.48 Lie Theory - Full Text
export const lieTheoryFullText: FullTextChapter = {
  id: "lie-theory",
  title: "Lie Theory",
  description: "The study of continuous symmetry groups.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 48,
  content: [
    {
      id: "lie-groups",
      title: "Lie Groups",
      type: "text",
      content: "Groups with continuous parameters describing symmetries.",
      fullText: `Lie groups are groups that describe continuous symmetries. They were introduced by Sophus Lie to create an analogue of Galois theory for differential equations.

**Examples of Lie Groups**

**SO(2)**: The group of rotations of the plane. Each rotation Rθ is parameterized by an angle θ. The group operation is addition of angles: Rθ Rφ = Rθ+φ.

**SO(3)**: The group of rotations of 3D space. Each rotation can be specified by three parameters (e.g., roll, pitch, yaw used by pilots).

**GLₙ(ℝ)**: The general linear group—all invertible linear transformations of ℝⁿ.

**SLₙ(ℝ)**: The special linear group—transformations preserving volume and orientation (determinant = 1).

**O(n)**: The orthogonal group—transformations preserving distance.

**SO(n)**: The special orthogonal group—distance-preserving transformations that also preserve orientation.

**E(n)**: The Euclidean group—rigid motions (rotations, reflections, translations).

**Key Properties**

Lie groups are both groups and smooth manifolds:
- **Group structure**: Can compose elements, have inverses, identity element
- **Smooth structure**: Can define smooth curves and derivatives

**Lie Algebras**

Every Lie group has an associated Lie algebra, which is the tangent space at the identity. The Lie algebra captures the "infinitesimal" structure of the group and is often easier to work with than the group itself.

**Applications**

- **Differential equations**: Symmetry methods for solving ODEs and PDEs
- **Physics**: Gauge theories, particle physics (Standard Model)
- **Geometry**: Study of symmetric spaces
- **Robotics**: Describing rigid body motions`,
      annotations: [
        createAnnotation("lie-1", "visual", "SO(3) can be visualized as a solid ball of radius π: each point represents a rotation around an axis given by the point's direction, by an angle given by its distance from the origin."),
        createAnnotation("lie-2", "analogy", "Lie groups are like smoothly varying symmetries. While finite groups have discrete symmetries (like rotations by 90°), Lie groups allow continuous variation (any angle)."),
        createAnnotation("lie-3", "deep-dive", "The Standard Model of particle physics is a Lie group-based theory. The gauge groups SU(3) × SU(2) × U(1) describe the fundamental forces: strong, weak, and electromagnetic."),
      ],
    },
  ],
  exercises: [],
}

// III.78 Ricci Flow - Full Text
export const ricciFlowFullText: FullTextChapter = {
  id: "ricci-flow",
  title: "Ricci Flow",
  description: "Smoothing out geometry to understand topology.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 78,
  content: [
    {
      id: "ricci-flow-intro",
      title: "Smoothing Geometry",
      type: "text",
      content: "Using heat equation techniques to simplify manifolds.",
      fullText: `Ricci flow is a technique that takes an arbitrary Riemannian manifold and smooths out its geometry to make it look more symmetric. It has proven to be a very useful tool in understanding topology.

**Two-Dimensional Case (Surfaces)**

For a surface, the metric determines distance, angle, and area. The scalar curvature R(x) at a point measures how the area of a small disk deviates from the Euclidean value πr²:

- **Positive curvature**: Area < πr² (like a sphere)
- **Negative curvature**: Area > πr² (like a saddle)
- **Zero curvature**: Area = πr² (like a plane)

**The Ricci Flow Equation**

The Ricci flow evolves the metric g according to:

∂g/∂t = -2 Ric(g)

where Ric(g) is the Ricci curvature tensor. This is like a heat equation for geometry—curvature "flows" from regions of high curvature to regions of low curvature.

**What Happens Under Ricci Flow**

- **Sphere**: Shrinks to a point in finite time
- **Torus**: Converges to flat metric
- **Higher genus surfaces**: Expands and converges to metric of constant negative curvature

**The Poincaré Conjecture**

Grigori Perelman used Ricci flow (with surgery to handle singularities) to prove the Poincaré Conjecture in 2003:

Every simply connected, closed 3-manifold is homeomorphic to the 3-sphere.

This was one of the Millennium Prize Problems. Perelman declined the $1 million prize and the Fields Medal.

**Key Insight**

Ricci flow tends to make manifolds more uniform. By understanding what happens as the flow evolves (and performing "surgery" when singularities form), we can classify manifolds.`,
      annotations: [
        createAnnotation("ricci-1", "visual", "Ricci flow is like heat flowing through a material: high-curvature regions (like sharp peaks) smooth out over time, distributing curvature more evenly across the manifold."),
        createAnnotation("ricci-2", "analogy", "Imagine a lumpy, irregular ball of clay. Ricci flow is like rotating the ball and letting centrifugal force smooth out the lumps. Eventually, it becomes perfectly spherical—or reveals the underlying topology."),
        createAnnotation("ricci-3", "deep-dive", "Perelman's proof required 'surgery'—cutting out singularities before they form and capping them off. This was the key insight that allowed Ricci flow to succeed where other methods failed."),
      ],
    },
  ],
  exercises: [],
}

// III.83 The Schrödinger Equation - Full Text
export const schrodingerEquationFullText: FullTextChapter = {
  id: "schrodinger-equation",
  title: "The Schrödinger Equation",
  description: "The fundamental equation of quantum mechanics.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 83,
  content: [
    {
      id: "schrodinger-basics",
      title: "Quantum Dynamics",
      type: "text",
      content: "How quantum systems evolve over time.",
      fullText: `The Schrödinger equation is the most fundamental equation in non-relativistic quantum mechanics, playing the same role as Newton's laws in classical mechanics.

**Classical vs. Quantum**

In classical mechanics, a particle has definite position q(t) and momentum p(t). The state is a point in phase space.

In quantum mechanics, the state is described by a wave function ψ(t,x)—a complex-valued function evolving over time.

**The Equation**

iℏ ∂ψ/∂t = Ĥψ

where:
- i is the imaginary unit
- ℏ is Planck's constant (reduced)
- Ĥ is the Hamiltonian operator
- ψ is the wave function

**Hamiltonian Operator**

For a particle of mass m in potential V(x):

Ĥ = -ℏ²/2m ∇² + V(x)

The first term is kinetic energy, the second is potential energy.

**Key Features**

**Superposition**: If ψ₁ and ψ₂ are solutions, so is aψ₁ + bψ₂ (for complex numbers a, b).

**Probability**: |ψ(t,x)|² gives the probability density of finding the particle at position x at time t.

**Uncertainty**: Position and momentum cannot both be known precisely. This is a mathematical property of the Fourier transform underlying the theory.

**Stationary States**

If ψ(t,x) = e^(-iEt/ℏ) φ(x), we get the time-independent Schrödinger equation:

Ĥφ = Eφ

These are eigenvalue problems. The allowed energies E are quantized!

**Applications**

- Atomic structure (hydrogen atom)
- Chemical bonding
- Solid state physics (semiconductors)
- Quantum computing
- Spectral analysis`,
      annotations: [
        createAnnotation("schrod-1", "visual", "The wave function ψ is like a wave spread through space. The Schrödinger equation tells us how this wave evolves—like ripples on a pond, but governed by quantum rules rather than classical mechanics."),
        createAnnotation("schrod-2", "analogy", "In classical physics, a particle has a definite location (like a ball). In quantum mechanics, it's like a fog—spread out with different densities (probability). The Schrödinger equation tells the fog how to flow."),
        createAnnotation("schrod-3", "deep-dive", "The imaginary unit 'i' in the equation is crucial—it makes the evolution unitary (probability-preserving). Without it, probabilities wouldn't sum to 1, and quantum mechanics wouldn't work!"),
      ],
    },
  ],
  exercises: [],
}

// III.84 The Simplex Algorithm - Full Text
export const simplexAlgorithmFullText: FullTextChapter = {
  id: "simplex-algorithm",
  title: "The Simplex Algorithm",
  description: "The preeminent tool for solving linear programming problems.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 84,
  content: [
    {
      id: "linear-programming",
      title: "Linear Programming",
      type: "text",
      content: "Optimizing linear functions subject to linear constraints.",
      fullText: `The simplex algorithm is the preeminent tool for solving linear programming problems—mathematical problems arising in business, science, and technology.

**What is Linear Programming?**

We want to maximize (or minimize) a linear function subject to linear constraints.

**Example: The Diet Problem**

Find quantities of foods to satisfy minimum daily nutrient requirements at least cost. This was posed by the U.S. Air Force in 1947.

**The Setup**

Given:
- Vector b ∈ ℝᵐ (constraint limits)
- Vector c ∈ ℝⁿ (objective coefficients)
- Matrix A (m × n constraint matrix)

Find nonnegative x₁, ..., xₙ to:
- **Maximize**: c₁x₁ + ... + cₙxₙ
- **Subject to**: aᵢ₁x₁ + ... + aᵢₙxₙ ≤ bᵢ for i = 1, ..., m
- **And**: xⱼ ≥ 0 for all j

**The Geometry**

The constraints define a feasible region—a convex polytope in ℝⁿ. The optimal solution always occurs at a vertex (corner point) of this region.

**Slack Variables**

We convert inequalities to equalities by adding slack variables:

aᵢ₁x₁ + ... + aᵢₙxₙ + sᵢ = bᵢ

Now we have a system of equations with more variables than equations.

**The Simplex Method**

1. Start at a basic feasible solution (vertex)
2. Check if current solution is optimal
3. If not, move to an adjacent vertex that improves the objective
4. Repeat until optimal

The algorithm moves along edges of the polytope from vertex to vertex, improving the objective at each step.

**Efficiency**

In practice, the simplex method is remarkably fast, even though worst-case complexity is exponential. Interior point methods offer polynomial-time alternatives for very large problems.

**Applications**

- Resource allocation
- Portfolio optimization
- Production planning
- Network flows
- Game theory`,
      annotations: [
        createAnnotation("simplex-1", "visual", "The simplex algorithm walks along the edges of a high-dimensional polytope, moving from corner to corner like a mountaineer ascending peaks. Each vertex represents a potential solution; edges represent valid moves."),
        createAnnotation("simplex-2", "analogy", "Linear programming is like packing a knapsack: you want to maximize value (objective) subject to weight limits (constraints), and you can only take whole items or fractions of them."),
        createAnnotation("simplex-3", "deep-dive", "Despite exponential worst-case behavior, the simplex method works incredibly well in practice. Randomized polynomial-time variants exist, and interior-point methods provide theoretical guarantees for large-scale problems."),
      ],
    },
  ],
  exercises: [],
}

// III.51 Pi - Full Text
export const piFullText: FullTextChapter = {
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
      content: "Understanding the most famous constant in mathematics.",
      fullText: `The number π is arguably the most famous number in mathematics. It appears everywhere:

- Geometry: Circumference of a circle = 2πr
- Trigonometry: sin(π) = 0, cos(π) = -1
- Analysis: The sum of 1/n² from n=1 to infinity equals π²/6 (the Basel problem)
- Probability: The normal distribution involves √π

π is irrational - it cannot be expressed as a fraction.
π is transcendental - it is not the root of any polynomial with rational coefficients.

**Computing π**

Throughout history, mathematicians have competed to calculate π to more decimal places. Archimedes approximated π between 223/71 and 22/7 using polygons with 96 sides.

Modern computers have calculated π to trillions of digits. Remarkably, there are formulas that let us compute specific digits of π in base 16 (hexadecimal) without computing all the preceding digits.

**The Nature of π**

A fact that seems paradoxical to many non-mathematicians is that a number as natural as π turns out to be irrational and transcendental. However, this is not surprising: the defining properties of π are simple, but they do not lead to solutions of polynomial equations.

π is conjectured to be normal to base 10, meaning every sequence of digits occurs with the expected frequency. However, this has not been proved—it is not even known whether the decimal expansion of π contains all digits 0-9 infinitely often.`,
      annotations: [
        createAnnotation("pi-1", "visual", "π connects the linear world (diameter) with the curved world (circumference). No matter how big or small the circle, this ratio stays constant."),
        createAnnotation("pi-2", "analogy", "Computing π to trillions of digits is like climbing Mount Everest—we do it because it's there, and to test our computational tools."),
        createAnnotation("pi-3", "deep-dive", "The Bailey-Borwein-Plouffe formula (1995) allows computing the nth hexadecimal digit of π without calculating earlier digits. The trillionth hex digit is 8."),
      ],
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
}

// II.4 Algorithms - Full Text
export const algorithmsFullText: FullTextChapter = {
  id: "algorithms",
  title: "Algorithms",
  description: "The history and importance of algorithms in mathematics.",
  part: "part-02",
  partTitle: "Origins of Modern Mathematics",
  order: 4,
  content: [
    {
      id: "what-is-algorithm",
      title: "What Is an Algorithm?",
      type: "text",
      content: "The evolution of the concept of algorithm.",
      fullText: `It is not easy to give a precise definition of the word "algorithm." One can provide approximate synonyms: "rule," "technique," "procedure," and "method." One can also give good examples, such as long multiplication, the method one learns in high school for multiplying two positive integers together.

However, the concept has undergone a long evolution: it was not until the twentieth century that a satisfactory formal definition was achieved. In this article, we shall try to explain some of these developments.

**From Abacists to Algorists**

How you multiply two numbers together is strongly influenced by how you represent those numbers. Try multiplying the Roman numerals CXLVII and XXIX together without first converting them to 147 and 29. It is difficult and time-consuming, which explains why arithmetic in the Roman empire was extremely rudimentary.

A numeration system can be additive, as it was for the Romans, or positional, like ours today. For a long time, many processes of calculation used abacuses—lines traced on sand onto which one placed stones (the Latin for small stone is calculus).

In the twelfth century, when Arabic mathematical works were translated into Latin, the decimal positional system spread through Europe. This system was particularly suitable for calculation. The term "algoritmus" was introduced to refer to these new methods, and to distinguish them from traditional abacus methods.

The word "algorithm" comes from a distortion of the name al-Khwārizmī, who wrote the oldest known work on algebra in the ninth century. His treatise gave rise to the word "algebra."

**The Modern Definition**

Gradually, the term came to mean any process of systematic calculation that could be carried out by precise rules. With computers, the important role of finiteness was fully understood: an algorithm must stop and provide a result after finite time.

Thus we arrive at the naive definition: An algorithm is a set of finitely many rules for manipulating a finite amount of data to produce a result in a finite number of steps.

Note the insistence on finiteness: finiteness in writing the algorithm and finiteness in its implementation.`,
      annotations: [
        createAnnotation("algo-1", "analogy", "An algorithm is like a recipe: finite ingredients (data), clear steps (rules), and a guaranteed result in finite time. Unlike a recipe, algorithms must work for all valid inputs, not just specific cases."),
        createAnnotation("algo-2", "visual", "Roman numerals are like tally marks—they work for counting but explode in complexity for multiplication. The positional system (Arabic numerals) makes algorithms practical by encoding magnitude in position."),
        createAnnotation("algo-3", "deep-dive", "The word 'calculus' comes from Latin 'calculus' meaning small stone—ancient mathematicians literally calculated by moving pebbles on counting boards."),
      ],
    },
    {
      id: "sorting-algorithms",
      title: "Visualizing Algorithms: Sorting",
      type: "interactive",
      content: "Interactive visualization of sorting algorithms",
      component: "AlgorithmVisualizer",
      annotations: [
        createAnnotation("sort-1", "visual", "Watch how Bubble Sort, Selection Sort, and Insertion Sort work step by step. Each algorithm approaches the problem differently but achieves the same result."),
        createAnnotation("sort-2", "note", "All three algorithms shown have O(n²) complexity in the worst case, meaning they slow down dramatically as the list grows. This is why we use faster algorithms like QuickSort or MergeSort for large datasets."),
      ],
    },
  ],
  exercises: [],
}

// II.5 The Development of Rigor in Mathematical Analysis - Full Text
export const rigorInAnalysisFullText: FullTextChapter = {
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
      content: "The invention of calculus and the problem of rigor.",
      fullText: `In the late 17th century, Isaac Newton and Gottfried Wilhelm Leibniz independently invented calculus. Newton focused on motion and change, calling derivatives "fluxions." Leibniz focused on the algebra of infinitesimals, creating the notation (dy/dx, ∫) we still use today.

Calculus was incredibly powerful but lacked rigor. Both used "infinitesimals"—quantities that were "infinitely small" but not quite zero. This led to criticism. Bishop Berkeley famously called infinitesimals "the ghosts of departed quantities."

**The Path to Rigor**

The solution came in the 19th century through the work of Cauchy, Weierstrass, and others. They replaced vague infinitesimals with the precise concept of limits.

**Weierstrass and the ε-δ Definition**

Karl Weierstrass (1815-1897) finally put calculus on completely rigorous foundations.

**The ε-δ Definition of Limit**:

lim(x→a) f(x) = L means:

For every ε > 0, there exists a δ > 0 such that:
if 0 < |x - a| < δ, then |f(x) - L| < ε

This definition removes all ambiguity:
- ε represents how close we want f(x) to be to L
- δ represents how close x needs to be to a
- The definition says we can always find such a δ for any ε

**Impact**: This definition allows us to prove theorems about limits, continuity, derivatives, and integrals with complete rigor.`,
      annotations: [
        createAnnotation("calculus-1", "analogy", "Infinitesimals were like magic: 'they're zero, but they're not.' The ε-δ definition replaced magic with a precise game: 'Tell me how close (ε) you want the output, and I'll tell you how close (δ) the input needs to be.'"),
        createAnnotation("calculus-2", "visual", "Think of ε as the 'error tolerance' and δ as the 'input precision.' The limit definition says: no matter how demanding your tolerance, there's always a precision that works."),
        createAnnotation("calculus-3", "deep-dive", "Weierstrass's ε-δ definition was shocking in its time—no pictures, no intuition, just pure logical precision. It transformed analysis from an art to a rigorous science."),
      ],
    },
    {
      id: "epsilon-delta-visualization",
      title: "The ε-δ Definition in Action",
      type: "interactive",
      content: "Interactive visualization of the epsilon-delta definition of limits",
      component: "LimitsAndContinuityVisualizer",
      annotations: [
        createAnnotation("epsilon-delta-1", "visual", "Adjust ε (epsilon) to see how close f(x) must be to the limit L. Then watch how the corresponding δ (delta) ensures that when x is within δ of a, f(x) is within ε of L."),
        createAnnotation("epsilon-delta-2", "note", "The blue band shows the ε-tolerance around L. The green band shows the δ-precision around a. The definition guarantees that the green band always maps into the blue band."),
      ],
    },
  ],
  exercises: [],
}

// II.6 The Development of the Idea of Proof - Full Text
export const ideaOfProofFullText: FullTextChapter = {
  id: "idea-of-proof",
  title: "The Development of the Idea of Proof",
  description: "How mathematical proof evolved from ancient Greece to modern times.",
  part: "part-02",
  partTitle: "Origins of Modern Mathematics",
  order: 6,
  content: [
    {
      id: "greek-revolution",
      title: "The Greek Revolution",
      type: "text",
      content: "How the Greeks transformed mathematics through proof.",
      fullText: `The Greeks transformed mathematics by making proof the central activity. Before them, mathematics was a collection of practical rules and techniques.

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

**Types of Proof**

Over the centuries, mathematicians developed various proof techniques:

**Direct Proof**: Assume P is true, deduce Q through logical steps

**Proof by Contradiction**: Assume the opposite of what you want to prove, show this leads to a contradiction. Classic example: Proving √2 is irrational

**Proof by Induction**: Prove a base case, then show that if it holds for n, it holds for n+1. Used for statements about all natural numbers.

**Proof by Contrapositive**: Prove "if P then Q" by proving "if not Q then not P"

Each type has its strengths and is appropriate for different situations.`,
      annotations: [
        createAnnotation("proof-1", "analogy", "A mathematical proof is like a bridge: each step must bear the weight of the next. Skip a step, and the whole bridge collapses."),
        createAnnotation("proof-2", "visual", "Proof by contradiction: assume the opposite and follow it until you hit a logical wall. The wall proves your original statement must be true."),
        createAnnotation("proof-3", "deep-dive", "The Pythagoreans discovered √2 is irrational and reportedly drowned the discoverer to keep it secret. Proof by contradiction was born from this crisis."),
      ],
    },
    {
      id: "proof-techniques-visual",
      title: "Proof Techniques in Action",
      type: "interactive",
      content: "Interactive demonstration of proof techniques with examples",
      component: "ProofTechniquesVisualizer",
      annotations: [
        createAnnotation("proof-vis-1", "visual", "Step through different proof techniques to see how they work. Each follows a logical pattern to establish mathematical truth."),
        createAnnotation("proof-vis-2", "note", "Try all four techniques: Direct Proof, Proof by Contradiction, Proof by Induction, and Proof by Contrapositive. Each is best suited for different types of problems."),
      ],
    },
  ],
  exercises: [],
}

// II.7 The Crisis in the Foundations of Mathematics - Full Text
export const foundationsCrisisFullText: FullTextChapter = {
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
      content: "The paradox that threatened the foundations of mathematics.",
      fullText: `In 1901, Bertrand Russell discovered a devastating paradox that threatened the foundations of mathematics.

**The Paradox**: Consider the set R = {x : x ∉ x} (the set of all sets that don't contain themselves)

**Question**: Does R contain itself?

- If R ∈ R, then by definition R ∉ R
- If R ∉ R, then by definition R ∈ R

Either way, we get a contradiction!

**Impact**: This showed that naive set theory was inconsistent. The foundation of mathematics was cracked.

Russell wrote to Frege, who was just finishing his magnum opus on the foundations of arithmetic. Frege's response: "Your discovery of the contradiction caused me the greatest surprise and, I would almost say, consternation, since it has shaken the basis on which I intended to build my arithmetic."

**Gödel's Incompleteness Theorems**

In 1931, Kurt Gödel proved two theorems that shook the foundations of mathematics.

**First Incompleteness Theorem**: In any consistent formal system F powerful enough to encode basic arithmetic, there exist statements that are true but unprovable in F.

**Second Incompleteness Theorem**: Such a system F cannot prove its own consistency.

**Interpretation**: No matter how comprehensive your axioms are, there will always be true statements you can't prove (unless your system is inconsistent, in which case you can prove everything, including contradictions).

**Impact**: Hilbert's dream of a complete, consistent foundation for all mathematics was impossible.

**Response**: Mathematicians mostly carry on as before. The unprovable statements are esoteric; they don't affect day-to-day mathematics.

The crisis in foundations led to deeper understanding, even if it didn't provide the certainty mathematicians sought.`,
      annotations: [
        createAnnotation("crisis-1", "visual", "Russell's paradox is like the barber who shaves all who don't shave themselves. Does he shave himself? If yes, he shouldn't. If no, he should. Either way, contradiction."),
        createAnnotation("crisis-2", "analogy", "Gödel's theorem is like a liar paradox: 'This statement is unprovable.' If provable, it's false. If unprovable, it's true—but you can't prove it."),
        createAnnotation("crisis-3", "deep-dive", "Hilbert's program aimed to prove mathematics consistent and complete. Gödel showed this is impossible—the quest for absolute certainty in mathematics is doomed."),
      ],
    },
    {
      id: "russells-paradox-visual",
      title: "Russell's Paradox Visualized",
      type: "interactive",
      content: "Interactive exploration of Russell's famous paradox",
      component: "RussellsParadoxVisualizer",
      annotations: [
        createAnnotation("russell-vis-1", "visual", "Step through the paradox: The set R = {x : x ∉ x} leads to a logical contradiction whether R contains itself or not."),
        createAnnotation("russell-vis-2", "note", "This paradox shows that naive set theory is inconsistent. It forced mathematicians to develop axiomatic set theory (ZFC) with careful restrictions on set formation."),
      ],
    },
  ],
  exercises: [],
}

// III.86 The Spectrum - Full Text
export const spectrumFullText: FullTextChapter = {
  id: "spectrum",
  title: "The Spectrum",
  description: "Generalizing eigenvalues to infinite-dimensional spaces.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 86,
  content: [
    {
      id: "what-is-spectrum",
      title: "Beyond Eigenvalues",
      type: "text",
      content: "Extending the concept of eigenvalues to operators on infinite-dimensional spaces.",
      fullText: `In linear algebra, eigenvalues and eigenvectors play a central role. For a linear map T : V → V on a finite-dimensional vector space, an eigenvector e satisfies T(e) = λe for some scalar λ (the eigenvalue).

**The Problem in Infinite Dimensions**

For operators on infinite-dimensional Banach spaces, not every operator has eigenvalues.

**Example**: Let X = C[0,1] be the space of continuous functions on [0,1]. Define the multiplication operator Mᵤ by Mᵤ(f)(t) = u(t)f(t).

If u(t) = t, then Mᵤ has **no eigenvalues**. Why? If Mᵤ(f) = λf, then (t-λ)f(t) = 0 for all t, so f(t) = 0 for all t ≠ λ. By continuity, f ≡ 0.

**Definition of Spectrum**

For an operator T on a complex Banach space X, the **spectrum** Sp(T) is the set of all complex numbers λ such that T - λI is **not invertible**.

**Key Properties**:

1. **In finite dimensions**: Sp(T) = set of eigenvalues
2. **In infinite dimensions**: Sp(T) contains eigenvalues but may be larger
3. **Always nonempty**: By Liouville's theorem applied to (λI - T)⁻¹
4. **Compact**: The spectrum is always a bounded, closed (compact) subset of ℂ

**Example**: The right-shift operator S on ℓ² defined by S(ξ₁, ξ₂, ...) = (0, ξ₁, ξ₂, ...) has spectrum {λ : |λ| ≤ 1}, but no eigenvalues!

**Importance**

The spectrum generalizes eigenvalues and is crucial for:
- Spectral theory
- Functional analysis
- Quantum mechanics (energy levels)
- Differential equations`,
      annotations: [
        createAnnotation("spectrum-1", "visual", "Think of eigenvalues as 'special directions' where a transformation acts by simple scaling. In infinite dimensions, these directions might not exist, but the spectrum captures something similar."),
        createAnnotation("spectrum-2", "analogy", "The spectrum is like the 'DNA' of an operator. Just as DNA identifies an organism, the spectrum (often) identifies an operator up to similarity."),
        createAnnotation("spectrum-3", "deep-dive", "The multiplication operator Mᵤ with u(t)=t has spectrum equal to the range of u: [0,1]. This connects operator theory to the geometry of functions!"),
      ],
    },
  ],
  exercises: [],
}

// III.90 Topological Spaces - Full Text
export const topologicalSpacesFullText: FullTextChapter = {
  id: "topological-spaces",
  title: "Topological Spaces",
  description: "The most general setting for studying continuity.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 90,
  content: [
    {
      id: "topology-def",
      title: "What is a Topological Space?",
      type: "text",
      content: "Defining continuity without distance.",
      fullText: `A topological space is the most general context in which one can define continuity.

**The Standard Definition**

A function f : ℝ → ℝ is continuous if: for every ε > 0, there exists δ > 0 such that |x - x'| < δ implies |f(x) - f(x')| < ε.

This definition uses the notion of "closeness" via the distance |·|. But what if we're not in ℝ?

**The Key Insight: Open Sets**

We can characterize continuity using open sets:
f is continuous ⟺ f⁻¹(U) is open for every open set U

**Definition**

A **topological space** is a set X together with a collection U of subsets (called "open sets") satisfying:

1. **∅ and X are open**
2. **Arbitrary unions**: If {Uᵢ}ᵢ∈I are open, so is ∪ᵢ∈I Uᵢ
3. **Finite intersections**: If U₁, ..., Uₖ are open, so is U₁ ∩ ··· ∩ Uₖ

**Closed Sets**

A set is **closed** if its complement is open. Note: "closed" ≠ "not open"!
- In ℝ: [0, 1) is neither open nor closed
- ∅ is both open and closed

**Hausdorff Spaces**

A space is **Hausdorff** if for any distinct x₁, x₂, there exist disjoint open sets U₁, U₂ with x₁ ∈ U₁ and x₂ ∈ U₂.

ℝ is Hausdorff. Some topological spaces are not.

**Why This Matters**

Topological spaces allow us to study continuity, convergence, and connectedness in the most general setting possible—on any set, not just those with a notion of distance.`,
      annotations: [
        createAnnotation("topo-1", "visual", "Open sets are like 'fuzzy' neighborhoods. A point in an open set has wiggle room in all directions. Closed sets are 'solid'—their boundaries are included."),
        createAnnotation("topo-2", "analogy", "Topologies are like different notions of 'nearness.' The discrete topology (all sets open) says no two points are close. The trivial topology (only ∅ and X open) says all points are glued together."),
        createAnnotation("topo-3", "deep-dive", "The power of topology: you can define continuity without measuring distance! This lets mathematicians study spaces where 'distance' doesn't make sense, like spaces of functions or shapes."),
      ],
    },
  ],
  exercises: [],
}

// III.92 Trigonometric Functions - Full Text
export const trigonometricFunctionsFullText: FullTextChapter = {
  id: "trigonometric-functions",
  title: "Trigonometric Functions",
  description: "The fundamental periodic functions of mathematics.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 92,
  content: [
    {
      id: "trig-def",
      title: "Sine and Cosine",
      type: "text",
      content: "From geometry to analysis.",
      fullText: `The trigonometric functions sin and cos, along with tan, cot, sec, and cosec, are fundamental to mathematics.

**Geometric Definition**

Using radians (arc length on unit circle):
- sin θ = y-coordinate of point at angle θ
- cos θ = x-coordinate of point at angle θ

**Analytic Definition**

The power series definitions:

sin(x) = x - x³/3! + x⁵/5! - x⁷/7! + ···

cos(x) = 1 - x²/2! + x⁴/4! - x⁶/6! + ···

These converge for all x ∈ ℝ (and define sin, cos for complex x too).

**Differential Equation Definition**

sin is the unique solution to y'' = -y with y(0) = 0, y'(0) = 1.

cos is the unique solution to y'' = -y with y(0) = 1, y'(0) = 0.

**Key Properties**

- **Periodicity**: sin(x + 2π) = sin(x), cos(x + 2π) = cos(x)
- **Pythagorean identity**: sin²(x) + cos²(x) = 1
- **Derivatives**: d/dx sin(x) = cos(x), d/dx cos(x) = -sin(x)

**Euler's Formula**

e^(ix) = cos(x) + i sin(x)

This connects trigonometry to complex exponentials—one of the most important formulas in mathematics.

**Applications**

- **Geometry**: Triangles, circles, waves
- **Physics**: Harmonic motion, waves, oscillations
- **Engineering**: Signal processing, control systems
- **Music**: Harmonics, sound waves`,
      annotations: [
        createAnnotation("trig-1", "visual", "On the unit circle, angle θ corresponds to arc length θ (in radians). The point on the circle has coordinates (cos θ, sin θ)—x is horizontal, y is vertical."),
        createAnnotation("trig-2", "analogy", "Sine and cosine are like a point moving in a circle: as one goes up, the other goes right. They're 90° out of phase—like two dancers performing the same routine but starting at different times."),
        createAnnotation("trig-3", "deep-dive", "The power series show sin and cos are 'built' from polynomials. The alternating signs create the oscillation. This analytic view lets us extend them to complex numbers—unthinkable from geometry alone!"),
      ],
    },
  ],
  exercises: [],
}

// III.35 Hamiltonians - Full Text
export const hamiltoniansFullText: FullTextChapter = {
  id: "hamiltonians",
  title: "Hamiltonians",
  description: "The unifying concept across all of physics.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 35,
  content: [
    {
      id: "hamiltonian-concept",
      title: "The Hamiltonian",
      type: "text",
      content: "A single object controlling the evolution of physical systems.",
      fullText: `Despite the diversity of physical theories—classical mechanics, quantum mechanics, statistical mechanics—they share a remarkable unifying theme: the Hamiltonian.

**What is a Hamiltonian?**

The Hamiltonian H represents the **total energy** of a system. It controls:
- How the system evolves over time
- What steady states are possible
- Conservation laws and symmetries

**Classical Mechanics**

H = H(q, p) is a function of positions q and momenta p.

Hamilton's equations:
dq/dt = ∂H/∂p
dp/dt = -∂H/∂q

These are equivalent to Newton's laws but reveal deeper structure.

**Quantum Mechanics**

H becomes an operator. The wave function ψ evolves by:

iℏ ∂ψ/∂t = Hψ

This is the Schrödinger equation! The Hamiltonian determines quantum dynamics.

**Statistical Mechanics**

Probability of microstate ∝ e^(-H/kT)

The Hamiltonian determines thermal equilibrium.

**Key Properties**

**Energy Conservation**: dH/dt = 0 (when H doesn't explicitly depend on time)

**Symmetries**: Symmetries of H induce conservation laws (Noether's theorem)
- Rotational symmetry → Angular momentum conservation
- Translation symmetry → Momentum conservation
- Time symmetry → Energy conservation

**Mathematical Importance**

Hamiltonians appear in:
- Dynamical systems
- Symplectic geometry
- Operator algebras
- Spectral theory
- Representation theory

They bridge physics and pure mathematics, connecting seemingly unrelated fields.`,
      annotations: [
        createAnnotation("hamil-1", "visual", "Think of the Hamiltonian as the 'engine' of a physical system. Different systems have different engines, but they all use the same 'fuel' (energy) and follow similar rules."),
        createAnnotation("hamil-2", "analogy", "The Hamiltonian is like a recipe: it tells you the ingredients (positions and momenta) and how they combine (the equations of motion). Different cuisines (classical, quantum, statistical) use the same recipe structure."),
        createAnnotation("hamil-3", "deep-dive", "Noether's theorem: every symmetry of the Hamiltonian corresponds to a conservation law. This is why energy, momentum, and angular momentum are conserved—because the laws of physics have time, space, and rotation symmetry!"),
      ],
    },
  ],
  exercises: [],
}

// III.36 The Heat Equation - Full Text
export const heatEquationFullText: FullTextChapter = {
  id: "heat-equation",
  title: "The Heat Equation",
  description: "The fundamental equation of diffusion and smoothing.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 36,
  content: [
    {
      id: "heat-eq-def",
      title: "The Heat Equation",
      type: "text",
      content: "Fourier's equation describing how heat spreads.",
      fullText: `The heat equation, first proposed by Fourier, describes how heat (or any diffusing quantity) spreads through a medium.

**The Equation**

∂u/∂t = Δu

Where:
- u(t, x) is temperature at time t, position x
- Δ is the Laplacian: Δu = ∂²u/∂x² + ∂²u/∂y² + ∂²u/∂z²

**Physical Interpretation**

Heat flows from hot to cold. The rate of change of temperature is proportional to how "curved" the temperature distribution is.

- Where u is concave (Δu > 0): temperature increases
- Where u is convex (Δu < 0): temperature decreases
- Where u is flat (Δu = 0): steady state

**Key Properties**

**Smoothing**: The heat equation instantly smooths rough initial data. Discontinuities disappear.

**Maximum Principle**: The maximum temperature can only decrease (or stay constant), never increase.

**Infinite Speed**: Heat spreads infinitely fast (though exponentially small at large distances).

**Fundamental Solution**

For initial point source, the solution is the Gaussian:

u(t, x) = (4πt)^(-n/2) e^(-|x|²/(4t))

This spreads out as time progresses.

**Applications**

The heat equation appears in:
- **Physics**: Heat conduction, diffusion
- **Finance**: Black-Scholes option pricing
- **Geometry**: Curve shortening, Ricci flow
- **Probability**: Brownian motion
- **Image processing**: Noise reduction

**Connection to Fourier Analysis**

Fourier invented his transform to solve the heat equation. The equation motivated an entire branch of mathematics!`,
      annotations: [
        createAnnotation("heat-1", "visual", "The heat equation is like a smoothing iron: it takes rough, bumpy data and irons it flat over time. Sharp corners become rounded; peaks spread out."),
        createAnnotation("heat-2", "analogy", "Imagine dye dropped in water. It spreads from concentrated spots to fill the container evenly. The heat equation describes this 'wanting to be uniform' behavior."),
        createAnnotation("heat-3", "deep-dive", "The heat equation is the prototypical parabolic PDE. It's well-posed forward in time (prediction) but ill-posed backward (can't uniquely determine initial state from final state). This reflects the arrow of time!"),
      ],
    },
  ],
  exercises: [],
}

// III.49 Linear and Nonlinear Waves and Solitons - Full Text
export const wavesAndSolitonsFullText: FullTextChapter = {
  id: "waves-and-solitons",
  title: "Linear and Nonlinear Waves and Solitons",
  description: "Waves that maintain their shape while traveling at constant speed.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 49,
  content: [
    {
      id: "solitons-discovery",
      title: "The Great Wave of Translation",
      type: "text",
      content: "John Scott Russell's discovery of solitary waves.",
      fullText: `In 1834, Scottish engineer John Scott Russell observed something extraordinary on the Edinburgh-Glasgow canal:

**Russell's Account**:

"I was observing the motion of a boat which was rapidly drawn along a narrow channel by a pair of horses, when the boat suddenly stopped—not so the mass of water in the channel which it had put in motion; it accumulated round the prow of the vessel in a state of violent agitation, then suddenly leaving it behind, rolled forward with great velocity, assuming the form of a large solitary elevation, a rounded, smooth and well-defined heap of water, which continued its course along the channel apparently without change of form or diminution of speed."

Russell followed this wave on horseback for one or two miles. It maintained its shape and speed—a highly unusual phenomenon!

**What Makes Solitons Special?**

Ordinary water waves disperse: a single bump breaks into smaller ripples. But Russell's "Wave of Translation" stayed intact.

**Mathematical Explanation**

The Korteweg-de Vries (KdV) equation describes shallow water waves:

∂u/∂t + ∂³u/∂x³ + 6u ∂u/∂x = 0

This nonlinear equation has solutions that are:
- Localized (decay at infinity)
- Stable (maintain shape)
- Particle-like (interact elastically)

**Soliton Interactions**

When two solitons collide:
- They pass through each other
- Each maintains its shape and speed
- Only a phase shift occurs

This is like particles, not waves!

**Applications**

Solitons appear in:
- **Water waves**: Canal waves, tsunamis
- **Optical fibers**: Information transmission
- **Plasma physics**: Ion acoustic waves
- **Quantum field theory**: Particle models
- **Biology**: Energy transport in proteins

**Why the Controversy?**

Russell's observations were doubted by mathematicians like Stokes and Airy because linear wave theory couldn't explain them. It took until 1895 (Korteweg and de Vries) for a mathematical theory, and until the 1960s for full recognition of their importance.`,
      annotations: [
        createAnnotation("soliton-1", "visual", "A soliton is like a ghost: it passes through other solitons unchanged. Imagine two smoke rings colliding and emerging intact—that's a soliton interaction!"),
        createAnnotation("soliton-2", "analogy", "Linear waves are like conversations in a crowded room: they get jumbled. Solitons are like polite speakers taking turns: each message stays clear even when they 'collide.'"),
        createAnnotation("soliton-3", "deep-dive", "The KdV equation is 'completely integrable'—it has infinitely many conservation laws. This hidden structure explains why solitons are so stable. It's a rare property among nonlinear PDEs!"),
      ],
    },
  ],
  exercises: [],
}

// III.8 Categories - Full Text
export const categoriesFullText: FullTextChapter = {
  id: "categories",
  title: "Categories",
  description: "The abstract study of mathematical structures and structure-preserving maps.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 8,
  content: [
    {
      id: "what-are-categories",
      title: "What Are Categories?",
      type: "text",
      content: "Abstracting the notion of structure-preserving maps.",
      fullText: `When we study groups or vector spaces, we pay attention to structure-preserving maps: group homomorphisms and linear maps. Category theory abstracts this to understand general properties of such maps.

**Definition**

A **category** consists of:
- **Objects**: A collection of mathematical structures
- **Morphisms**: Maps between objects that preserve structure
- **Composition**: Morphisms can be composed (when ranges/domains match)
- **Identity**: Each object has an identity morphism

Composition must be associative: h ∘ (g ∘ f) = (h ∘ g) ∘ f

**Examples**

1. **Set**: Objects are sets, morphisms are functions
2. **Grp**: Objects are groups, morphisms are homomorphisms
3. **Vect**: Objects are vector spaces, morphisms are linear maps
4. **Top**: Objects are topological spaces, morphisms are continuous functions

**Isomorphisms**

Two objects A and B are **isomorphic** if there exist morphisms f: A → B and g: B → A such that g ∘ f = idₐ and f ∘ g = idᵦ.

Isomorphic objects are "essentially the same" from the category's perspective.

**Why Categories Matter**

Categories allow us to:
- Make general arguments applicable to all structures with certain features
- Focus on relationships (morphisms) rather than internal structure
- Find deep connections between seemingly different areas of mathematics

**Functors**

A **functor** is a map between categories that preserves structure:
- Maps objects to objects
- Maps morphisms to morphisms
- Preserves composition and identities

Functors are how we translate between different mathematical worlds.

**The Power of Abstraction**

Category theory reveals that many constructions across mathematics are instances of the same universal pattern. This "abstract nonsense" (as it's affectionately called) unifies diverse fields.`,
      annotations: [
        createAnnotation("cat-1", "visual", "A category is like a subway map: stations are objects, train routes are morphisms. You can travel from A to B to C, and the total journey is the composition. Some stations might look different but connect identically—they're isomorphic."),
        createAnnotation("cat-2", "analogy", "Category theory is like learning grammar instead of vocabulary. Instead of memorizing words (specific structures), you learn the rules (morphisms and composition) that work across all languages."),
        createAnnotation("cat-3", "deep-dive", "The Yoneda lemma says an object is completely determined by its relationships to other objects. This is profound: you don't need to look inside an object, just at how it maps to/from everything else!"),
      ],
    },
  ],
  exercises: [],
}

// III.6 Calabi-Yau Manifolds - Full Text  
export const calabiYauFullText: FullTextChapter = {
  id: "calabi-yau",
  title: "Calabi-Yau Manifolds",
  description: "Special geometric spaces important in string theory.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 6,
  content: [
    {
      id: "calabi-yau-intro",
      title: "What Are Calabi-Yau Manifolds?",
      type: "text",
      content: "Complex manifolds with special geometric properties.",
      fullText: `Calabi-Yau manifolds, named after Eugenio Calabi and Shing-Tung Yau, are complex manifolds with special geometric properties. They play a prominent role in string theory and mirror symmetry.

**Definition**

A Calabi-Yau manifold is a compact Kähler manifold with vanishing first Chern class (or equivalently, with a Ricci-flat metric).

More intuitively: it's a complex manifold with a "complex orientation" and a metric that satisfies certain curvature conditions.

**Key Properties**

- **Complex dimension n**, so real dimension 2n
- **Ricci-flat metric**: A special metric where Ricci curvature vanishes
- **Holonomy group**: Reduced holonomy (SU(n) instead of SO(2n))
- **Canonical bundle**: Trivial (has a nowhere-vanishing holomorphic n-form)

**Why They Matter**

**String Theory**: In string theory, extra dimensions must be compactified. Calabi-Yau manifolds are the preferred choice because they:
- Preserve some supersymmetry
- Give rise to realistic particle physics
- The topology determines properties of the resulting 4D physics

**Mirror Symmetry**: Pairs of Calabi-Yau manifolds can be "mirrors"—their complex and symplectic structures are exchanged. This has profound implications for both mathematics and physics.

**Dimension 1**: The only 1-dimensional Calabi-Yau is the torus (elliptic curve).

**Dimension 2**: K3 surfaces (4 real dimensions).

**Dimension 3**: These are the ones most important for string theory. There are thousands of topologically distinct 3-dimensional Calabi-Yau manifolds.

**Yau's Theorem**

Shing-Tung Yau proved Calabi's conjecture: every Calabi-Yau manifold admits a unique Ricci-flat Kähler metric in each Kähler class. This existence theorem is fundamental.`,
      annotations: [
        createAnnotation("cy-1", "visual", "A Calabi-Yau manifold is like a perfectly balanced shape. The Ricci-flat condition means curvature is distributed so precisely that parallel-transported vectors return unchanged—no rotation, no distortion."),
        createAnnotation("cy-2", "analogy", "String theory needs 10 dimensions, but we only see 4. The other 6 are 'rolled up' incredibly small—like a garden hose viewed from far away looks 1D but is actually 2D. Calabi-Yau manifolds are the preferred 'rolling' shapes."),
        createAnnotation("cy-3", "deep-dive", "Mirror symmetry: two Calabi-Yau manifolds X and Y can be mirrors. Counting curves on X matches computing integrals on Y. This connected enumerative geometry to physics and led to major mathematical breakthroughs!"),
      ],
    },
  ],
  exercises: [],
}

// III.28 Fuchsian Groups - Full Text
export const fuchsianGroupsFullText: FullTextChapter = {
  id: "fuchsian-groups",
  title: "Fuchsian Groups",
  description: "Discrete groups of hyperbolic isometries.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 28,
  content: [
    {
      id: "fuchsian-def",
      title: "What Are Fuchsian Groups?",
      type: "text",
      content: "Discrete groups acting on the hyperbolic plane.",
      fullText: `Fuchsian groups are discrete subgroups of PSL(2,ℝ)—the group of orientation-preserving isometries of the hyperbolic plane. They generalize the modular group and play a fundamental role in hyperbolic geometry.

**The Hyperbolic Plane**

Model: Upper half-plane ℍ = {z ∈ ℂ : Im(z) > 0}

Metric: ds² = (dx² + dy²)/y²

Distance grows as you approach the real axis (the "boundary at infinity").

**The Group PSL(2,ℝ)**

Elements are Möbius transformations:

f(z) = (az + b)/(cz + d)

where a, b, c, d ∈ ℝ and ad - bc = 1.

These preserve the hyperbolic metric and orientation.

**Fuchsian Groups**

A **Fuchsian group** is a discrete subgroup Γ ⊂ PSL(2,ℝ).

**Key Properties**:

1. **Properly discontinuous action**: For any compact K ⊂ ℍ, only finitely many group elements γ satisfy γ(K) ∩ K ≠ ∅

2. **Fundamental domain**: A region D ⊂ ℍ such that the translates {γ(D)} cover ℍ with disjoint interiors

3. **Quotient space**: ℍ/Γ is a Riemann surface (possibly with punctures)

**Examples**

**Modular Group**: Γ = PSL(2,ℤ)
- Most important Fuchsian group
- Acts on ℍ with fundamental domain a hyperbolic triangle
- Quotient ℍ/Γ is the modular surface

**Surface Groups**: If S is a compact surface of genus g ≥ 2, then π₁(S) is a Fuchsian group.

**Applications**

- **Riemann surfaces**: Uniformization theorem
- **Automorphic forms**: Modular forms, Maass forms
- **Number theory**: Arithmetic groups, quadratic forms
- **Dynamical systems**: Geodesic flow on hyperbolic surfaces

**Limit Set**

The limit set Λ(Γ) ⊂ ℝ ∪ {∞} is where orbits accumulate:
- For cofinite groups: Λ = ℝ ∪ {∞}
- For others: Λ can be fractal (Cantor set)

**Geometry of the Quotient**

ℍ/Γ inherits a hyperbolic metric. Its geometry reveals properties of Γ:
- Area = 2π(2g - 2 + n) for a genus g surface with n punctures
- Closed geodesics correspond to conjugacy classes in Γ`,
      annotations: [
        createAnnotation("fuchs-1", "visual", "A Fuchsian group tiles the hyperbolic plane like a mosaic. Each tile is a fundamental domain, and the group action shuffles them. The modular group creates a pattern of hyperbolic triangles."),
        createAnnotation("fuchs-2", "analogy", "PSL(2,ℝ) is like the 'rigid motions' of the hyperbolic plane—rotations, translations, reflections. A Fuchsian group picks out a discrete subset, like choosing only rotations by rational angles in Euclidean space."),
        createAnnotation("fuchs-3", "deep-dive", "The uniformization theorem: every Riemann surface (except a few exceptions) is ℍ/Γ for some Fuchsian group Γ. This connects complex analysis, geometry, and group theory in a profound way!"),
      ],
    },
  ],
  exercises: [],
}

// III.24 Expanders - Full Text
export const expandersFullText: FullTextChapter = {
  id: "expanders",
  title: "Expanders",
  description: "Sparse graphs with strong connectivity properties.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 24,
  content: [
    {
      id: "expander-def",
      title: "What Are Expanders?",
      type: "text",
      content: "Graphs that are sparse yet highly connected.",
      fullText: `An expander graph is a sparse graph that has strong connectivity properties. Despite having relatively few edges, expanders ensure that every subset of vertices has many connections to the rest of the graph.

**Definition**

A d-regular graph G = (V, E) is a **(n, d, λ)-expander** if:
- |V| = n vertices
- Each vertex has degree d (constant, independent of n)
- The second largest eigenvalue of the adjacency matrix is at most λ

**Edge Expansion**

For a subset S ⊂ V with |S| ≤ n/2, the edge boundary ∂S has size:

|∂S| ≥ h|S|

where h > 0 is the Cheeger constant (edge expansion).

Intuitively: every subset has many edges leaving it.

**Why This is Surprising**

Complete graphs have great connectivity but O(n²) edges.

Expanders achieve similar connectivity with only O(n) edges—a linear number instead of quadratic!

**Constructions**

**Probabilistic**: Random d-regular graphs are expanders with high probability.

**Explicit**: Deterministic constructions using:
- Cayley graphs of finite groups
- Algebraic methods (Ramanujan graphs)
- Zig-zag product

**Ramanujan Graphs**

Optimal expanders where λ ≤ 2√(d-1).

Named after Ramanujan's conjecture (proved by Deligne), which is used in their construction.

**Applications**

- **Computer networks**: Robust, efficient communication
- **Error-correcting codes**: LDPC codes
- **Derandomization**: Reducing randomness in algorithms
- **Cryptography**: Secure hash functions
- **Pure mathematics**: Group theory, number theory

**The Zig-Zag Product**

A powerful operation combining two graphs to create a larger expander. This led to explicit constructions of arbitrarily large expanders with constant degree.

**Spectral Gap**

The difference d - λ between largest and second-largest eigenvalues controls expansion:
- Larger gap → better expansion
- Random walks mix faster
- Better connectivity properties`,
      annotations: [
        createAnnotation("exp-1", "visual", "An expander is like a well-designed road network: even with few roads, you can get from any neighborhood to any other quickly. No area is isolated—there are always multiple escape routes."),
        createAnnotation("exp-2", "analogy", "Imagine a party where everyone knows only 3 people, but rumors spread to everyone within minutes. That's an expander—locally sparse, globally connected."),
        createAnnotation("exp-3", "deep-dive", "Ramanujan graphs are optimal expanders—their spectral gap is as large as possible. They're named after Ramanujan because their construction uses the Ramanujan conjecture (proved by Deligne), connecting graph theory to deep results in number theory!"),
      ],
    },
  ],
  exercises: [],
}

// III.2 The Axiom of Determinacy - Full Text
export const axiomOfDeterminacyFullText: FullTextChapter = {
  id: "axiom-of-determinacy",
  title: "The Axiom of Determinacy",
  description: "An alternative to the Axiom of Choice with surprising consequences.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 2,
  content: [
    {
      id: "determinacy-intro",
      title: "Infinite Games",
      type: "text",
      content: "When every infinite game has a winner.",
      fullText: `Consider an infinite game between two players, A and B. They take turns naming natural numbers, generating an infinite sequence. Player A wins if this sequence belongs to a predetermined set S; otherwise B wins.

**Example Game**: A wins if the sequence is eventually periodic (like 1, 2, 3, 4, 5, 4, 5, 4, 5, ...). B wins otherwise.

**Analysis**: Eventually periodic sequences are rare. Player B can ensure the sequence never becomes periodic by always playing a number different from what would create a period. So B has a winning strategy.

**Determined Games**: A game is **determined** if one player has a winning strategy.

**The Axiom of Determinacy (AD)**

**AD states**: Every infinite game of this type is determined.

**Relationship to Axiom of Choice**

AD contradicts the Axiom of Choice (AC). With AC, one can construct non-determined games using a well-ordering argument.

**Surprising Consequences of AD**

If we assume AD (instead of AC):

1. **All sets of reals are Lebesgue measurable**: No more Banach-Tarski paradox!

2. **Every set has the property of Baire**: Sets are almost open.

3. **The perfect set property**: Every uncountable set of reals contains a perfect subset.

**Connection to Large Cardinals**

AD is connected to the existence of large cardinals:
- AD implies the existence of inner models with measurable cardinals
- The consistency of AD follows from large cardinal axioms
- Projective Determinacy (a weaker form) is provable from large cardinals

**Why This Matters**

AD provides an alternative foundation for mathematics where pathological sets (non-measurable, etc.) cannot exist. While contradicting AC, it leads to a "nicer" universe of sets with better regularity properties.

**The Definability Hierarchy**

AD applies to different levels of the projective hierarchy:
- Borel determinacy: Provable in ZFC (Zermelo-Fraenkel with Choice)
- Analytic determinacy: Requires mild large cardinals
- Projective determinacy: Requires strong large cardinal axioms
- Full AD: Contradicts AC`,
      annotations: [
        createAnnotation("det-1", "visual", "An infinite game is like a chess game that never ends. One player tries to force the game into a 'winning region' (set S), while the other tries to escape forever. AD says one player must have a forced win—no draws possible."),
        createAnnotation("det-2", "analogy", "AD is like saying every bet can be won. If A bets on a set S and B bets against it, someone must have a winning strategy. The universe doesn't allow 'unresolvable' infinite games."),
        createAnnotation("det-3", "deep-dive", "AD shows that the Axiom of Choice creates 'weird' sets that cause problems. Without AC (but with AD), all sets of reals behave nicely—they're measurable, have the Baire property, etc. It's a trade-off between choice and regularity!"),
      ],
    },
  ],
  exercises: [],
}

// III.16 Differential Forms and Integration - Full Text
export const differentialFormsFullText: FullTextChapter = {
  id: "differential-forms",
  title: "Differential Forms and Integration",
  description: "Generalizing integration to higher dimensions and manifolds.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 16,
  content: [
    {
      id: "diff-forms-intro",
      title: "Beyond Single-Variable Calculus",
      type: "text",
      content: "Three concepts of integration diverge in higher dimensions.",
      fullText: `In single-variable calculus, three integration concepts are closely related:

1. **Indefinite integral** ∫f(x)dx (antiderivative)
2. **Unsigned definite integral** ∫_[a,b] f(x)dx (area/mass)
3. **Signed definite integral** ∫_a^b f(x)dx (work)

The Fundamental Theorem connects them: ∫_a^b f(x)dx = F(b) - F(a).

**In Higher Dimensions**

These three concepts diverge significantly:

**Indefinite integrals** → Solutions to differential equations, connections, vector fields

**Unsigned integrals** → Lebesgue integral on measure spaces

**Signed integrals** → Integration of differential forms (our focus)

**What Are Differential Forms?**

A **differential k-form** is an object that can be integrated over k-dimensional oriented manifolds.

**Key Insight**: Forms are designed to make the Fundamental Theorem hold in all dimensions.

**Example: Work in Physics**

In 1D: Work = ∫_a^b f(x)dx (force × displacement)

In nD: Work = ∫_γ ω where:
- γ is a path from a to b
- ω is a 1-form representing the force field

**The Magic: Stokes' Theorem**

∫_M dω = ∫_{∂M} ω

This generalizes:
- Fundamental Theorem of Calculus (k=1)
- Green's Theorem (k=2 in plane)
- Divergence Theorem (k=3)
- Classical Stokes' Theorem (k=2 in 3D)

**Why Orientation Matters**

Integrating over reversed path gives negative result:
∫_{-γ} ω = -∫_γ ω

This distinguishes forms from unsigned integrals.

**de Rham Cohomology**

Forms that are closed (dω = 0) but not exact (ω ≠ dη) measure topological obstructions. This connects analysis to topology!

**Physical Applications**

- **Electromagnetism**: Maxwell's equations in form notation
- **Fluid dynamics**: Vorticity, circulation
- **Thermodynamics**: State variables, exact differentials
- **General relativity**: Curvature forms`,
      annotations: [
        createAnnotation("forms-1", "visual", "A k-form is like a 'measuring device' for k-dimensional volumes. A 1-form measures along curves, a 2-form measures across surfaces, etc. The exterior derivative d increases the dimension by 1."),
        createAnnotation("forms-2", "analogy", "Stokes' theorem is like accounting: what accumulates inside (integral of derivative) equals what flows through the boundary. Whether it's money, fluid, or energy—the principle is the same!"),
        createAnnotation("forms-3", "deep-dive", "de Rham's theorem: the space of closed forms modulo exact forms is isomorphic to singular cohomology. This is profound—it means topology (holes) can be detected by solving differential equations!"),
      ],
    },
  ],
  exercises: [],
}

// III.25 The Fast Fourier Transform - Full Text
export const fastFourierTransformFullText: FullTextChapter = {
  id: "fast-fourier-transform",
  title: "The Fast Fourier Transform",
  description: "An efficient algorithm for computing Fourier transforms.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 25,
  content: [
    {
      id: "fft-intro",
      title: "Making Fourier Transforms Practical",
      type: "text",
      content: "From O(n²) to O(n log n) revolutionized signal processing.",
      fullText: `The Fast Fourier Transform (FFT) is an algorithm that computes the discrete Fourier transform (DFT) efficiently. It revolutionized digital signal processing, making Fourier analysis practical for large datasets.

**The Discrete Fourier Transform (DFT)**

For a sequence x₀, x₁, ..., x_{n-1}, the DFT is:

X_k = Σ_{j=0}^{n-1} x_j · e^(-2πijk/n)

for k = 0, 1, ..., n-1.

**Naive Computation**: O(n²) operations—too slow for large n.

**The FFT Insight**

When n is a power of 2, the DFT can be computed recursively using divide-and-conquer.

**The Algorithm**

1. **Split**: Separate even and odd indices
   - Even: x₀, x₂, x₄, ...
   - Odd: x₁, x₃, x₅, ...

2. **Conquer**: Compute DFT of each half (recursively)

3. **Combine**: 
   X_k = E_k + ω^k · O_k
   X_{k+n/2} = E_k - ω^k · O_k
   
   where ω = e^(-2πi/n) and E, O are DFTs of even/odd parts.

**Complexity: O(n log n)**

Each level: O(n) operations
Number of levels: log₂(n)
Total: O(n log n)—dramatically faster than O(n²)!

**Example**: For n = 1,048,576 (2²⁰):
- Naive: ~10¹² operations
- FFT: ~20 × 10⁶ operations
- Speedup: 50,000×

**Butterfly Diagram**

The computation forms a pattern of "butterflies"—operations that combine two inputs into two outputs. This structure enables:
- In-place computation (minimal memory)
- Parallel processing
- Hardware optimization

**Applications**

The FFT enables:
- **Digital audio**: MP3, AAC compression
- **Image processing**: JPEG, filtering
- **Telecommunications**: OFDM (WiFi, 4G/5G)
- **Astronomy**: Processing telescope data
- **Medical imaging**: MRI reconstruction
- **Cryptography**: Fast polynomial multiplication

**Variants**

- **Cooley-Tukey**: Most common, n = power of 2
- **Bluestein's algorithm**: Arbitrary n
- **Prime-factor algorithm**: n = product of coprime factors
- **Multidimensional FFT**: For images, video`,
      annotations: [
        createAnnotation("fft-1", "visual", "The FFT is like sorting a deck of cards by repeatedly splitting in half, sorting each half, then merging. The 'butterfly' operations interleave results from even and odd positions at each level."),
        createAnnotation("fft-2", "analogy", "Computing DFT naively is like calculating every pairwise distance in a city—O(n²). FFT is like using a subway system with transfers—O(n log n). Much faster for big cities (large n)!"),
        createAnnotation("fft-3", "deep-dive", "The FFT connects to polynomial evaluation and interpolation. Multiplying two polynomials is O(n²) normally, but O(n log n) using FFT—transform to value representation, multiply pointwise, transform back. This is crucial for cryptography!"),
      ],
    },
  ],
  exercises: [],
}

// III.58 Modular Arithmetic - Full Text
export const modularArithmeticFullText: FullTextChapter = {
  id: "modular-arithmetic",
  title: "Modular Arithmetic",
  description: "The mathematics of remainders and cyclic patterns.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 58,
  content: [
    {
      id: "modular-intro",
      title: "Working with Remainders",
      type: "text",
      content: "A powerful tool for solving number theory problems.",
      fullText: `Is there a square number whose decimal expansion ends ... 7? Is 438 345 divisible by 9? For which positive integers n is n² − 5 a power of two? Is n⁷ − 77 ever a Fibonacci number?

These questions, and more, can be answered using modular arithmetic. Let us look at the first question. Listing the first few squares, 1, 4, 9, 16, ... , one does not find any whose final digit is 7. In fact, writing down just the final digits, one gets the sequence

1, 4, 9, 6, 5, 6, 9, 4, 1, 0, 1, 4, 9, 6, 5, 6, ... ,

which seems to repeat (and thus never contain the number 7).

An explanation of this phenomenon is as follows. Let n be a number to be squared. We can always write n as a multiple of 10 plus a remainder; that is, n = 10q + r, where r ∈ {0, 1, ... , 9}. Now, if we square n we get

n² = (10q + r)² = 100q² + 20qr + r² = 10(10q² + 2qr) + r².

The only part of this expression that affects the final digit is the r², which immediately explains why the sequence of last digits of squares repeats with period 10, and hence contains no 7s.

Modular arithmetic is essentially just a notation for writing down arguments of this sort. If two numbers (like n and r) leave the same remainder on division by 10, then we say that they are congruent modulo 10 and write n ≡ r (mod 10). What we proved above is the statement that, if n ≡ r (mod 10), then n² ≡ r² (mod 10).

Everything we have just said applies equally well if we replace 10 by an arbitrary modulus m: if n and r leave the same remainder on division by m, then we say that n and r are congruent modulo m and we write n ≡ r (mod m). Equivalently, n and r are congruent modulo m if m divides n − r. (An integer a is said to divide another integer b if b is an integer multiple of a.) The above argument is just one instance of the following general fact, which is not hard to prove: if a ≡ a′ (mod m) and b ≡ b′ (mod m), then ab ≡ a′b′ (mod m) and a + b ≡ a′ + b′ (mod m).

Now observe that 10 ≡ 1 (mod 9). It follows that 10 × 10 ≡ 1 × 1 ≡ 1 (mod 9), and in fact that 10^d ≡ 1 (mod 9) for any d ∈ ℕ. Suppose that we have a number N whose decimal expansion is a_d a_{d−1} · · · a₂ a₁ a₀. This means that

N = a_d 10^d + a_{d−1} 10^{d−1} + · · · + a₁ 10 + a₀.

Applying the rules of modular arithmetic, we get

N ≡ a_d + a_{d−1} + · · · + a₁ + a₀ (mod 9).

This gives the well-known test for divisibility by 9: simply add up the digits of the number in base 10, and see if the result is divisible by 9. For the example N = 438 345 the sum of the digits is 27, which is divisible by 9. So N is a multiple of 9 (in fact N = 9 × 48 705).

If m is a modulus and n is an integer, then there is precisely one value of r between 0 and m − 1 such that n ≡ r (mod m). This number r is often called the least residue or simply the residue of n to the modulus m.

Now let us consider the third question posed at the beginning of this article, namely the matter of when n² − 5 is a power of two. When n = 3, 3² − 5 = 4 is a power of two, but a little experimentation does not reveal any further examples. What aspect of the problem changes as n becomes larger than 3? The key observation is that n² − 5 is now greater than 4, and so if it were a power of 2, then it would have to be divisible by 8. That would mean that n² ≡ 5 (mod 8), but this is never the case. Indeed, the residues of the first eight squares are 1, 4, 1, 0, 1, 4, 1, 0, and we know that the sequence will repeat with period 8 (actually, it repeats with period 4). Thus, it never contains a 5.

Modular arithmetic should be used with care. Although the rules for addition and subtraction are simple, division is somewhat more subtle. For example, if we are given that ac ≡ bc (mod m), it is not, in general, permissible to divide by c and conclude that a ≡ b (mod m): consider, for instance, the case a = 2, b = 4, c = 3, m = 6.

Let us examine what has just gone wrong. To say that ac ≡ bc (mod m) means that m divides ac − bc = (a−b) × c. But this clearly does not mean that m divides a − b, since m could divide c (or at least have a common factor with it). However, if m has no factor in common with c, then it must divide a − b, so in this case we do indeed have a ≡ b (mod m). In particular, for any prime number p we have the very useful cancelation law: if ac ≡ bc (mod p) and c ≢ 0 (mod p), then a ≡ b (mod p).

The examples so far may have suggested that the principal uses of modular arithmetic are to do with specific moduli such as 10 and 8. However, this is far from true, and the subject really comes into its own when one looks at more general m. For example, one of the basic results in number theory is Fermat's little theorem, which states that if p is a prime and a ≢ 0 (mod p), then a^{p−1} ≡ 1 (mod p). Let us quickly prove this. Consider the numbers a, 2a, 3a, ... , (p − 1)a (mod p). If ra ≡ sa (mod p), then from the cancelation law we can deduce that r ≡ s (mod p), from which it follows that a, 2a, ... , (p−1)a are all different modulo p. Furthermore, none of these numbers is 0 (mod p). We are thus forced to conclude that the numbers a, 2a, 3a, ... , (p−1)a (mod p) are simply a rearrangement of the numbers 1, 2, 3, ... , p − 1 (mod p). In particular, the products of the numbers in these two sets are the same, which implies that

a^{p−1}(p − 1)! ≡ (p − 1)! (mod p).

Since (p − 1)! is not a multiple of p, we can apply the cancelation law again and divide both sides by (p − 1)!. This implies the result.

Euler's theorem is a generalization of Fermat's little theorem to composite moduli. It states that if m is a positive integer and a is another positive integer that is coprime to m (this means that a and m have no common factor), then a^{φ(m)} ≡ 1 (mod m). Here φ is Euler's totient function: φ(m) is the number of integers less than m that are coprime to m. For instance, if m = 9, then the integers less than m and coprime to m are 1, 2, 4, 5, 7, and 8, so φ(9) = 6 and we can deduce from Euler's theorem that 5⁶ ≡ 1 (mod 9). Let us check this directly: 5⁶ = 15 625, so the sum of its digits is 19, which is indeed congruent to 1 (mod 9).`,
      annotations: [
        createAnnotation("mod-1", "visual", "Modular arithmetic is like a clock. On a 12-hour clock, 15:00 is 3:00—15 ≡ 3 (mod 12). The numbers 'wrap around' after reaching the modulus."),
        createAnnotation("mod-2", "analogy", "Think of modular arithmetic as 'cyclical thinking.' Instead of asking 'how big is the number?' ask 'where does it fall in the cycle?' Like knowing someone's birthday is Tuesday, not caring which Tuesday of which year."),
        createAnnotation("mod-3", "deep-dive", "The RSA cryptosystem: pick primes p, q. Let n = pq and φ(n) = (p-1)(q-1). Choose e with gcd(e, φ(n)) = 1. Public key: (e, n). Encrypt: c ≡ m^e (mod n). Decrypt using private key d where ed ≡ 1 (mod φ(n)). Security relies on factoring n being hard!"),
      ],
    },
  ],
  exercises: [],
}

// III.73 Quadratic Forms - Full Text
export const quadraticFormsFullText: FullTextChapter = {
  id: "quadratic-forms",
  title: "Quadratic Forms",
  description: "Homogeneous polynomials of degree 2 with rich connections to geometry and number theory.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 73,
  content: [
    {
      id: "quadratic-intro",
      title: "What Are Quadratic Forms?",
      type: "text",
      content: "The next step after linear functions.",
      fullText: `A **quadratic form** is a homogeneous polynomial of degree 2:

q(x₁, x₂, ..., xₙ) = ΣᵢⱩ aᵢⱩ xᵢ xⱩ

Example: q(x,y,z) = x² - 3xy + 4z²

**Connection to Inner Products**

The square of Euclidean distance is a quadratic form:

|x|² = x₁² + x₂² + ... + xₙ² = ⟨x, x⟩

This comes from the inner product:
⟨x, y⟩ = x₁y₁ + x₂y₂ + ... + xₙyₙ

**Key Properties of Inner Products**:
1. ⟨x, x⟩ ≥ 0 (positive definite), equality iff x = 0
2. ⟨x, y+z⟩ = ⟨x, y⟩ + ⟨x, z⟩ (linear)
3. ⟨λx, y⟩ = λ⟨x, y⟩ (homogeneous)
4. ⟨x, y⟩ = ⟨y, x⟩ (symmetric)

**Recovering the Bilinear Form**

From q(x) = g(x,x), recover g via the **polarization identity**:

g(x,y) = ½[q(x+y) - q(x) - q(y)]

This works over any field (except characteristic 2, where ½ doesn't exist).

**Diagonalization**

By choosing the right basis, any quadratic form becomes:

q(x) = x₁² + ... + xₛ² - xₛ₊₁² - ... - xₜ²

The **signature** is (s, t-s, d-t) = (positive, negative, zero).

**Minkowski Space (Special Relativity)**

q(x,y,z,t) = x² + y² + z² - t²

Signature: (3, 1, 0). This minus sign makes spacetime hyperbolic, not Euclidean!

**Fermat's Two-Squares Theorem**

An odd prime p can be written as p = a² + b² if and only if p ≡ 1 (mod 4).

Examples:
- 5 = 1² + 2² (5 ≡ 1 mod 4) ✓
- 13 = 2² + 3² (13 ≡ 1 mod 4) ✓
- 7 ≢ 1 mod 4, and indeed 7 ≠ a² + b² ✓

**Lagrange's Four-Squares Theorem**

Every positive integer n can be written as a sum of four squares:
n = a² + b² + c² + d²

Example: 7 = 2² + 1² + 1² + 1² = 4 + 1 + 1 + 1

**Number of Representations**

The number of ways to write n as a sum of four squares is:

r₄(n) = 8 Σ d (sum over divisors d of n with 4 ∤ d)

Example: Divisors of 5 are 1, 5. Neither is divisible by 4.
r₄(5) = 8(1 + 5) = 48.

Indeed, 5 = (±1)² + (±2)² + 0² + 0² has 48 representations (signs and orderings).

**Why Quadratic Forms Matter**

1. **Geometry**: Distances, angles, curvature
2. **Number theory**: Sums of squares, class field theory
3. **Physics**: Special relativity, mechanics
4. **Optimization**: Definiteness conditions for extrema
5. **Algebraic topology**: Intersection forms on 4-manifolds`,
      annotations: [
        createAnnotation("qf-1", "visual", "Diagonalizing a quadratic form is like finding the 'natural axes' of a shape. An ellipse becomes x²/a² + y²/b² = 1—aligned with major and minor axes. The signs tell you if it's an ellipse (++), hyperbola (+-), or degenerate."),
        createAnnotation("qf-2", "analogy", "Quadratic forms are like lenses: they distort space in predictable ways. Positive definite forms (all + signs) act like magnifying glasses. Indefinite forms (mixed signs) act like funhouse mirrors—distorting different directions differently."),
        createAnnotation("qf-3", "deep-dive", "The classification of quadratic forms over ℚ is a triumph of number theory. Hasse-Minkowski theorem: a form represents zero nontrivially over ℚ if and only if it does so over ℝ and all ℚₚ (p-adic numbers). This 'local-to-global' principle is profound!"),
      ],
    },
  ],
  exercises: [],
}

// Export all full text chapters
export const fullTextChapters: FullTextChapter[] = [
  // Part I: Introduction
  whatIsMathematicsFullText,
  languageAndGrammarFullText,
  fundamentalDefinitionsFullText,
  generalGoalsFullText,
  // Part II: Origins of Modern Mathematics
  fromNumbersToNumberSystemsFullText,
  geometryOriginsFullText,
  abstractAlgebraDevelopmentFullText,
  algorithmsFullText,
  rigorInAnalysisFullText,
  ideaOfProofFullText,
  foundationsCrisisFullText,
  // Part III: Mathematical Concepts
  eulerIdentityFullText,
  piFullText,
  goldenRatioFullText,
  fibonacciFullText,
  infinityFullText,
  ellipticCurvesFullText,
  euclideanAlgorithmFullText,
  braidGroupsFullText,
  compactnessFullText,
  fourierTransformFullText,
  gammaFunctionFullText,
  lFunctionsFullText,
  matroidsFullText,
  knotPolynomialsFullText,
  probabilityDistributionsFullText,
  irrationalNumbersFullText,
  lieTheoryFullText,
  ricciFlowFullText,
  schrodingerEquationFullText,
  simplexAlgorithmFullText,
  spectrumFullText,
  topologicalSpacesFullText,
  trigonometricFunctionsFullText,
  hamiltoniansFullText,
  heatEquationFullText,
  wavesAndSolitonsFullText,
  categoriesFullText,
  calabiYauFullText,
  fuchsianGroupsFullText,
  expandersFullText,
  axiomOfDeterminacyFullText,
  differentialFormsFullText,
  fastFourierTransformFullText,
  modularArithmeticFullText,
  quadraticFormsFullText,
]

// Helper to get full text chapter by ID
export function getFullTextChapterById(id: string): FullTextChapter | undefined {
  return fullTextChapters.find((chapter) => chapter.id === id)
}

// Helper to check if a chapter has full text
export function hasFullText(id: string): boolean {
  return fullTextChapters.some((chapter) => chapter.id === id)
}