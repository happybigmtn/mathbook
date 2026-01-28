import type { FullTextChapter, Annotation } from "@/types"

// Helper function to create annotations
function createAnnotation(
  id: string,
  type: Annotation["type"],
  content: string,
  reference?: string
): Annotation {
  return { id, type, content, reference }
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
        createAnnotation("intro-1", "insight", "Mathematics is better understood through exploration rather than definition—like trying to define 'music' versus experiencing it.", "Opening paragraph"),
        createAnnotation("intro-2", "connection", "The book uses three classification approaches: subject matter, types of questions, and structure of mathematical articles—similar to how one might classify music by genre, mood, or musical form.", "Classification methods"),
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
        createAnnotation("ag-1", "insight", "The algebra vs geometry distinction is about process, not just subject: algebra = symbolic manipulation, geometry = visualization. But they're deeply intertwined!", "Section 1.1"),
        createAnnotation("ag-2", "question", "Why do you think ab = ba? Try drawing a 4×7 grid. Count by rows: 4 groups of 7. Count by columns: 7 groups of 4. Same total!", "Commutativity visualization"),
        createAnnotation("ag-3", "note", "This visual proof of ab = ba is essentially Feynman's style—understanding through concrete imagery rather than abstract symbol manipulation.", "Feynman connection"),
      ],
    },
    {
      id: "algebra-vs-geometry",
      title: "Algebra vs Geometry: A Visual Proof",
      type: "interactive",
      content: "Interactive visualization showing how algebraic identities have geometric interpretations",
      component: "CommutativePropertyDemo",
      annotations: [
        createAnnotation("vis-1", "insight", "The interactive demo lets you experience ab = ba directly. This isn't just 'visual aid'—it's the actual mathematical insight!", "Interactive section"),
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
        createAnnotation("analysis-1", "note", "Analysis = the mathematics of change and continuity. Born from calculus (Newton/Leibniz ~1660s-1700s), now fundamental to all science.", "Analysis definition"),
        createAnnotation("analysis-2", "insight", "The concept of 'limit' is the backbone of analysis. It lets us talk about 'approaching' without ever 'arriving'—essential for dealing with infinity and continuity.", "Limits concept"),
        createAnnotation("analysis-3", "connection", "Limits appear everywhere: derivatives (slopes), integrals (areas), series (sums), continuity. Master limits, master calculus.", "Limit applications"),
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
        createAnnotation("questions-1", "insight", "These five question types (Existence, Classification, Structure, Transformation, Optimization) appear across ALL branches of math. They're the DNA of mathematical thinking.", "Five question types"),
        createAnnotation("questions-2", "question", "Think about your favorite mathematical object. Which type of question is most natural to ask about it? This reveals your mathematical 'personality'!", "Self-reflection"),
        createAnnotation("questions-3", "connection", "Feynman was famous for asking 'What is the simplest example?'—this is the existence question in disguise. Start simple, then generalize.", "Feynman method"),
        createAnnotation("questions-4", "insight", "Optimization appears everywhere because nature 'computes' it: light paths (Fermat), soap films (minimal surfaces), animal shapes (efficiency). Math mirrors reality.", "Optimization in nature"),
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
        createAnnotation("notation-1", "insight", "Leibniz's notation (dy/dx, ∫) beat Newton's (dots, boxes) because it suggests the right manipulations. Good notation is a cognitive tool!", "Notation history"),
        createAnnotation("notation-2", "connection", "Programming languages are the modern equivalent—Python's readable syntax vs. Perl's cryptic symbols. Notation matters in code too!", "Modern parallel"),
        createAnnotation("notation-3", "question", "Try describing the Pythagorean theorem without using a² + b² = c². Why is the formula so much clearer?", "Notation exercise"),
      ],
    },
    {
      id: "quantifiers",
      title: "Quantifiers: ∀ and ∃",
      type: "interactive",
      content: "Interactive exploration of universal and existential quantifiers",
      component: "QuantifierDemo",
      annotations: [
        createAnnotation("quant-1", "note", "∀ (for all) and ∃ (there exists) were introduced by Giuseppe Peano in 1897. They turned vague philosophical statements into precise mathematics.", "History"),
        createAnnotation("quant-2", "warning", "Order matters! ∀x ∃y (y > x) is true (for every x there's a larger y), but ∃y ∀x (y > x) is false (no y is larger than all x).", "Order matters"),
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
        createAnnotation("logic-1", "insight", "Vacuous truth (false implies anything) seems weird but is crucial. It lets us say 'All unicorns are pink' is true—there are no unicorns to contradict it!", "Vacuous truth"),
        createAnnotation("logic-2", "note", "'If and only if' (iff) is mathematician-speak for 'exactly equivalent.' It means both directions work: A→B AND B→A.", "Iff explanation"),
        createAnnotation("logic-3", "connection", "These connectives are like programming operators: &&, ||, !. Mathematical logic is the foundation of computer science.", "CS connection"),
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
        createAnnotation("numbers-1", "insight", "Each number system extends the previous one to solve problems the previous couldn't. ℕ→ℤ (subtraction), ℤ→ℚ (division), ℚ→ℝ (limits), ℝ→ℂ (roots of negatives).", "Number system extensions"),
        createAnnotation("numbers-2", "note", "The notation ℕ, ℤ, ℚ, ℝ, ℂ is standard worldwide. The blackboard bold font (double-struck) indicates these are fundamental number systems.", "Notation note"),
        createAnnotation("numbers-3", "connection", "Complex numbers might seem abstract, but they're essential for AC circuit analysis, quantum mechanics, and signal processing. 'Imaginary' is a misnomer—they're very real in applications!", "Applications"),
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
        createAnnotation("sets-1", "note", "A set is just a collection. The notation {x : P(x)} means 'all x such that property P holds.' This is called set-builder notation.", "Set definition"),
        createAnnotation("functions-1", "insight", "Functions are the verbs of mathematics. Just as verbs describe actions, functions describe transformations, mappings, and relationships.", "Function insight"),
        createAnnotation("functions-2", "connection", "In programming, functions map inputs to outputs. Mathematical functions are similar but more abstract—the 'computation' might not be algorithmic.", "CS parallel"),
      ],
    },
    {
      id: "functions-viz",
      title: "Visualizing Functions",
      type: "interactive",
      content: "Interactive function visualizer",
      component: "FunctionVisualizer",
      annotations: [
        createAnnotation("func-viz-1", "insight", "Graphs make functions concrete. The visual representation often reveals patterns invisible in the algebraic formula.", "Visualization"),
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

// III.1 The Axiom of Choice - Full Text (Sample Part III Concept)
export const axiomOfChoiceFullText: FullTextChapter = {
  id: "axiom-of-choice",
  title: "The Axiom of Choice",
  description: "One of the most controversial and powerful axioms in set theory.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 1,
  content: [
    {
      id: "what-is-ac",
      title: "What Is the Axiom of Choice?",
      type: "text",
      content: "Understanding this fundamental but controversial axiom.",
      fullText: `The Axiom of Choice (AC) is one of the most discussed axioms in set theory. It was first formulated by Ernst Zermelo in 1904, and it states the following:

Given any collection of nonempty sets, it is possible to choose one element from each set.

At first glance, this seems obviously true. If you have a bunch of nonempty sets, surely you can pick one element from each? The subtlety arises when the collection is infinite. The axiom asserts that such a choice is possible even when there is no explicit rule for making the choice.

**A Concrete Example**

Imagine you have infinitely many pairs of socks. From each pair, you want to choose one sock. The Axiom of Choice says you can do this. But notice: unlike shoes, socks have no natural "left" or "right" distinction. Without AC, there's no guarantee you can make this infinite selection.

**Controversy and Importance**

AC is independent of the other axioms of set theory (Zermelo-Fraenkel set theory, or ZF). This means you can assume it's true or assume it's false, and either way, you get a consistent mathematical system.

Many beautiful theorems require AC:
- Every vector space has a basis
- Every set can be well-ordered
- The product of compact topological spaces is compact (Tychonoff's theorem)
- The Hahn-Banach theorem in functional analysis

However, AC also leads to some counterintuitive results:
- The Banach-Tarski paradox: A solid ball can be decomposed into finitely many pieces and reassembled into two identical copies of the original ball
- The existence of non-measurable sets
- The well-ordering of the real numbers (no one has ever written one down explicitly)

**The Status of AC Today**

Most mathematicians accept AC as a working hypothesis. It's used freely in most areas of mathematics. However, when possible, mathematicians prefer to give constructive proofs that don't rely on AC. Some areas, like constructive mathematics and computer science, explicitly avoid AC.`,
      annotations: [
        createAnnotation("ac-1", "question", "The sock example is famous. But think: why can we choose from shoes without AC? Because 'left shoe' gives us a rule! AC is needed when no rule exists.", "Sock example"),
        createAnnotation("ac-2", "warning", "Banach-Tarski sounds impossible—it is, in physical reality. But mathematically, the 'pieces' are so weird they can't exist physically. AC lets us conjure these weird sets.", "Banach-Tarski"),
        createAnnotation("ac-3", "insight", "AC is like a magic wand: it guarantees existence without construction. Mathematicians debate whether such 'magic' should be allowed.", "Philosophy"),
      ],
    },
  ],
  exercises: [],
}

// Export all full text chapters
export const fullTextChapters: FullTextChapter[] = [
  whatIsMathematicsFullText,
  languageAndGrammarFullText,
  fundamentalDefinitionsFullText,
  axiomOfChoiceFullText,
]

// Helper to get full text chapter by ID
export function getFullTextChapterById(id: string): FullTextChapter | undefined {
  return fullTextChapters.find((chapter) => chapter.id === id)
}

// Helper to check if a chapter has full text
export function hasFullText(id: string): boolean {
  return fullTextChapters.some((chapter) => chapter.id === id)
}