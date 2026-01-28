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
        createAnnotation("notation-2", "visual", "The integral sign ∫ is literally an elongated 'S' for sum. Leibniz made calculus visual—the symbol itself tells you what operation you're doing."),
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

// Export all full text chapters
export const fullTextChapters: FullTextChapter[] = [
  whatIsMathematicsFullText,
  languageAndGrammarFullText,
  fundamentalDefinitionsFullText,
  fromNumbersToNumberSystemsFullText,
  geometryOriginsFullText,
  abstractAlgebraDevelopmentFullText,
  piFullText,
]

// Helper to get full text chapter by ID
export function getFullTextChapterById(id: string): FullTextChapter | undefined {
  return fullTextChapters.find((chapter) => chapter.id === id)
}

// Helper to check if a chapter has full text
export function hasFullText(id: string): boolean {
  return fullTextChapters.some((chapter) => chapter.id === id)
}