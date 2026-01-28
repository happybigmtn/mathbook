import type { FullTextChapter, Annotation } from "@/types"

// Helper function to create annotations
function createAnnotation(
  id: string,
  type: Annotation["type"],
  content: string
): Annotation {
  return { id, type, content }
}

// Mapping of book references to chapter IDs and parts
const chapterMap: Record<string, { id: string; part: string }> = {
  // Part I: Introduction
  "I.1": { id: "what-is-mathematics-about", part: "part-01" },
  "I.2": { id: "language-and-grammar", part: "part-01" },
  "I.3": { id: "fundamental-definitions", part: "part-01" },
  "I.4": { id: "general-goals", part: "part-01" },
  
  // Part II: Origins of Modern Mathematics
  "II.1": { id: "from-numbers-to-number-systems", part: "part-02" },
  "II.2": { id: "geometry-origins", part: "part-02" },
  "II.3": { id: "abstract-algebra-development", part: "part-02" },
  "II.4": { id: "algorithms", part: "part-02" },
  "II.5": { id: "rigor-in-analysis", part: "part-02" },
  "II.6": { id: "idea-of-proof", part: "part-02" },
  "II.7": { id: "foundations-crisis", part: "part-02" },
  
  // Part III: Mathematical Concepts
  "III.1": { id: "axiom-of-choice", part: "part-03" },
  "III.37": { id: "bayesian-analysis", part: "part-03" },
  "III.62": { id: "placeholder", part: "part-03" }, // Banach spaces
  "III.78": { id: "placeholder", part: "part-03" }, // Ricci flow
  
  // Part IV: Branches of Mathematics
  "IV.1": { id: "number-theory", part: "part-04" },
  "IV.2": { id: "number-theory", part: "part-04" },
  "IV.4": { id: "algebra", part: "part-04" },
  "IV.5": { id: "placeholder", part: "part-04" },
  "IV.12": { id: "analysis", part: "part-04" },
  "IV.13": { id: "placeholder", part: "part-04" },
  "IV.14": { id: "placeholder", part: "part-04" },
  "IV.15": { id: "placeholder", part: "part-04" },
  "IV.16": { id: "placeholder", part: "part-04" },
  "IV.17": { id: "placeholder", part: "part-04" },
  "IV.22": { id: "placeholder", part: "part-04" },
  "IV.23": { id: "placeholder", part: "part-04" },
  "IV.24": { id: "placeholder", part: "part-04" },
  "IV.25": { id: "placeholder", part: "part-04" },
  
  // Part V: Theorems and Problems
  "V.7": { id: "placeholder", part: "part-05" },
  "V.10": { id: "placeholder", part: "part-05" },
  "V.15": { id: "placeholder", part: "part-05" },
  "V.18": { id: "placeholder", part: "part-05" },
  "V.21": { id: "placeholder", part: "part-05" },
  
  // Part VII: Applications
  "VII.7": { id: "placeholder", part: "part-07" },
}

// Helper function to convert book references to links
function ref(chapter: string): string {
  const mapped = chapterMap[chapter]
  if (mapped) {
    if (mapped.id === "placeholder") {
      return `[${chapter}](/placeholder?ref=${encodeURIComponent(chapter)})`
    }
    return `[${chapter}](/${mapped.part}/${mapped.id})`
  }
  return `[${chapter}](/placeholder?ref=${encodeURIComponent(chapter)})`
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
      id: "introduction",
      title: "Introduction",
      type: "text",
      content: "The fundamental nature of mathematics and its classification.",
      fullText: `It is notoriously hard to give a satisfactory answer to the question, "What is mathematics?" The approach of this book is not to try. Rather than giving a definition of mathematics, the intention is to give a good idea of what mathematics is by describing many of its most important concepts, theorems, and applications. Nevertheless, to make sense of all this information it is useful to be able to classify it somehow.

The most obvious way of classifying mathematics is by its subject matter, and that will be the approach of this brief introductory section and the longer section entitled some fundamental mathematical definitions ${ref("I.3")}. However, it is not the only way, and not even obviously the best way. Another approach is to try to classify the kinds of questions that mathematicians like to think about. This gives a usefully different view of the subject: it often happens that two areas of mathematics that appear very different if you pay attention to their subject matter are much more similar if you look at the kinds of questions that are being asked.

The last section of part I, entitled the general goals of mathematical research ${ref("I.4")}, looks at the subject from this point of view. At the end of that article there is a brief discussion of what one might regard as a third classification, not so much of mathematics itself but of the content of a typical article in a mathematics journal. As well as theorems and proofs, such an article will contain definitions, examples, lemmas, formulas, conjectures, and so on. The point of that discussion will be to say what these words mean and why the different kinds of mathematical output are important.`,
      annotations: [
        createAnnotation("intro-1", "note", "This chapter uses two approaches to classify mathematics: by subject matter and by the types of questions asked."),
      ],
    },
    {
      id: "algebra-geometry-analysis",
      title: "1. Algebra, Geometry, and Analysis",
      type: "text",
      content: "The three main branches of mathematics.",
      fullText: `Although any classification of the subject matter of mathematics must immediately be hedged around with qualifications, there is a crude division that undoubtedly works well as a first approximation, namely the division of mathematics into algebra, geometry, and analysis. So let us begin with this, and then qualify it later.

**1.1 Algebra versus Geometry**

Most people who have done some high school mathematics will think of algebra as the sort of mathematics that results when you substitute letters for numbers. Algebra will often be contrasted with arithmetic, which is a more direct study of the numbers themselves. So, for example, the question, "What is $3 \\times 7$?" will be thought of as belonging to arithmetic, while the question, "If $x + y = 10$ and $xy = 21$, then what is the value of the larger of $x$ and $y$?" will be regarded as a piece of algebra. This contrast is less apparent in more advanced mathematics for the simple reason that it is very rare for numbers to appear without letters to keep them company.

There is, however, a different contrast, between algebra and geometry, which is much more important at an advanced level. The high school conception of geometry is that it is the study of shapes such as circles, triangles, cubes, and spheres together with concepts such as rotations, reflections, symmetries, and so on. Thus, the objects of geometry, and the processes that they undergo, have a much more visual character than the equations of algebra.

This contrast persists right up to the frontiers of modern mathematical research. Some parts of mathematics involve manipulating symbols according to certain rules: for example, a true equation remains true if you "do the same to both sides." These parts would typically be thought of as algebraic, whereas other parts are concerned with concepts that can be visualized, and these are typically thought of as geometrical.

However, a distinction like this is never simple. If you look at a typical research paper in geometry, will it be full of pictures? Almost certainly not. In fact, the methods used to solve geometrical problems very often involve a great deal of symbolic manipulation, although good powers of visualization may be needed to find and use these methods and pictures will typically underlie what is going on. As for algebra, is it "mere" symbolic manipulation? Not at all: very often one solves an algebraic problem by finding a way to visualize it.

As an example of visualizing an algebraic problem, consider how one might justify the rule that if $a$ and $b$ are positive integers then $ab = ba$. It is possible to approach the problem as a pure piece of algebra (perhaps proving it by induction), but the easiest way to convince yourself that it is true is to imagine a rectangular array that consists of $a$ rows with $b$ objects in each row. The total number of objects can be thought of as $a$ lots of $b$, if you count it row by row, or as $b$ lots of $a$, if you count it column by column. Therefore, $ab = ba$. Similar justifications can be given for other basic rules such as $a(b + c) = ab + ac$ and $a(bc) = (ab)c$.

In the other direction, it turns out that a good way of solving many geometrical problems is to "convert them into algebra." The most famous way of doing this is to use Cartesian coordinates. For example, suppose that you want to know what happens if you reflect a circle about a line $L$ through its center, then rotate it through $40^\\circ$ counterclockwise, and then reflect it once more about the same line $L$. One approach is to visualize the situation as follows.

Imagine that the circle is made of a thin piece of wood. Then instead of reflecting it about the line you can rotate it through $180^\\circ$ about $L$ (using the third dimension). The result will be upside down, but this does not matter if you simply ignore the thickness of the wood. Now if you look up at the circle from below while it is rotated counterclockwise through $40^\\circ$, what you will see is a circle being rotated clockwise through $40^\\circ$. Therefore, if you then turn it back the right way up, by rotating about $L$ once again, the total effect will have been a clockwise rotation through $40^\\circ$.

Mathematicians vary widely in their ability and willingness to follow an argument like that one. If you cannot quite visualize it well enough to see that it is definitely correct, then you may prefer an algebraic approach, using the theory of linear algebra and matrices (which will be discussed in more detail in ${ref("I.3")} §3.2). To begin with, one thinks of the circle as the set of all pairs of numbers $(x, y)$ such that $x^2 + y^2 \\leqslant 1$. The two transformations, reflection in a line through the center of the circle and rotation through an angle $\\theta$, can both be represented by $2 \\times 2$ matrices, which are arrays of numbers of the form $({}^a_c \\; {}^b_d)$. There is a slightly complicated, but purely algebraic, rule for multiplying matrices together, and it is designed to have the property that if matrix $A$ represents a transformation $R$ (such as a reflection) and matrix $B$ represents a transformation $T$, then the product $AB$ represents the transformation that results when you first do $T$ and then $R$. Therefore, one can solve the problem above by writing down the matrices that correspond to the transformations, multiplying them together, and seeing what transformation corresponds to the product. In this way, the geometrical problem has been converted into algebra and solved algebraically.

Thus, while one can draw a useful distinction between algebra and geometry, one should not imagine that the boundary between the two is sharply defined. In fact, one of the major branches of mathematics is even called algebraic geometry ${ref("IV.4")}. And as the above examples illustrate, it is often possible to translate a piece of mathematics from algebra into geometry or vice versa. Nevertheless, there is a definite difference between algebraic and geometric methods of thinking—one more symbolic and one more pictorial—and this can have a profound influence on which subjects a mathematician chooses to pursue.`,
      annotations: [
        createAnnotation("ag-1", "visual", "The commutative property $ab = ba$ can be visualized as a rectangle with $a$ rows and $b$ columns—counting by rows or columns gives the same total."),
        createAnnotation("ag-2", "note", "Algebra and geometry are deeply interconnected. Many problems can be solved by translating between these two modes of thinking."),
      ],
    },
  ],
  exercises: [],
}

// I.2 The Language and Grammar of Mathematics - Full Text (VERBATIM)
export const languageAndGrammarFullText: FullTextChapter = {
  id: "language-and-grammar",
  title: "The Language and Grammar of Mathematics",
  description: "Understanding mathematical notation, symbols, and the logical structure of mathematical statements.",
  part: "part-01",
  partTitle: "Introduction",
  order: 2,
  content: [
    {
      id: "four-basic-concepts",
      title: "Four Basic Concepts",
      type: "text",
      content: "The fundamental concepts of mathematical language.",
      fullText: `Another word that famously has three quite distinct meanings is "is." The three meanings are illustrated in the following three sentences.
(1) 5 is the square root of 25.
(2) 5 is less than 10.
(3) 5 is a prime number.
In the first of these sentences, "is" could be replaced by "equals": it says that two objects, 5 and the square root of 25, are in fact one and the same object, just as it does in the English sentence "London is the capital of the United Kingdom." In the second sentence, "is" plays a completely different role. The words "less than 10" form an adjectival phrase, specifying a property that numbers may or may not have, and "is" in this sentence is like "is" in the English sentence "Grass is green." As for the third sentence, the word "is" there means "is an example of," as it does in the English sentence "Mercury is a planet."

These differences are reflected in the fact that the sentences cease to resemble each other when they are written in a more symbolic way. An obvious way to write (1) is $5 = \\sqrt{25}$. As for (2), it would usually be written $5 < 10$, where the symbol "$<$" means "is less than." The third sentence would normally not be written symbolically because the concept of a prime number is not quite basic enough to have universally recognized symbols associated with it. However, it is sometimes useful to do so, and then one must invent a suitable symbol. One way to do it would be to adopt the convention that if $n$ is a positive integer, then $P(n)$ stands for the sentence "$n$ is prime." Another way, which does not hide the word "is," is to use the language of sets.

**2.1 Sets**

Broadly speaking, a set is a collection of objects, and in mathematical discourse these objects are mathematical ones such as numbers, points in space, or even other sets. If we wish to rewrite sentence (3) symbolically, another way to do it is to define $P$ to be the collection, or set, of all prime numbers. Then we can rewrite it as "5 belongs to the set $P$." This notion of belonging to a set is sufficiently basic to deserve its own symbol, and the symbol used is "$\\in$." So a fully symbolic way of writing the sentence is $5 \\in P$.

The members of a set are usually called its elements, and the symbol "$\\in$" is usually read "is an element of." So the "is" of sentence (3) is more like "$\\in$" than "$=$."

Although one cannot directly substitute the phrase "is an element of" for "is," one can do so if one is prepared to modify the rest of the sentence a little.

There are three common ways to denote a specific set. One is to list its elements inside curly brackets: $\\{2, 3, 5, 7, 11, 13, 17, 19\\}$, for example, is the set whose elements are the eight numbers 2, 3, 5, 7, 11, 13, 17, and 19. The majority of sets considered by mathematicians are too large for this to be feasible—indeed, they are often infinite—so a second way to denote sets is to use dots to imply a list that is too long to write down: for example, the expressions $\\{1, 2, 3, \\ldots, 100\\}$ and $\\{2, 4, 6, 8, \\ldots\\}$ can be used to represent the set of all positive integers up to 100 and the set of all positive even numbers, respectively. A third way, and the way that is most important, is to define a set via a property: an example that shows how this is done is the expression $\\{x : x \\text{ is prime and } x < 20\\}$. To read an expression such as this, one first reads the opening curly bracket as "The set of." Next, one reads the symbol that occurs before the colon. The colon itself one reads as "such that." Finally, one reads what comes after the colon, which is the property that determines the elements of the set. In this instance, we end up saying, "The set of $x$ such that $x$ is prime and $x$ is less than 20," which is in fact equal to the set $\\{2, 3, 5, 7, 11, 13, 17, 19\\}$ considered earlier.

Many sentences of mathematics can be rewritten in set-theoretic terms. For example, sentence (2) earlier could be written as $5 \\in \\{n : n < 10\\}$. Often there is no point in doing this (as here, where it is much easier to write $5 < 10$) but there are circumstances where it becomes extremely convenient. For example, one of the great advances in mathematics was the use of Cartesian coordinates to translate geometry into algebra and the way this was done was to define geometrical objects as sets of points, where points were themselves defined as pairs or triples of numbers. So, for example, the set $\\{(x, y) : x^2 + y^2 = 1\\}$ is (or represents) a circle of radius 1 with its center at the origin $(0, 0)$. That is because, by the Pythagorean theorem, the distance from $(0, 0)$ to $(x, y)$ is $\\sqrt{x^2 + y^2}$, so the sentence "$x^2 + y^2 = 1$" can be reexpressed geometrically as "the distance from $(0, 0)$ to $(x, y)$ is 1." If all we ever cared about was which points were in the circle, then we could make do with sentences such as "$x^2 + y^2 = 1$," but in geometry one often wants to consider the entire circle as a single object (rather than as a multiplicity of points, or as a property that points might have), and then set-theoretic language is indispensable.

A second circumstance where it is usually hard to do without sets is when one is defining new mathematical objects. Very often such an object is a set together with a mathematical structure imposed on it, which takes the form of certain relationships among the elements of the set. For examples of this use of set-theoretic language, see sections 1 and 2, on number systems and algebraic structures, respectively, in some fundamental mathematical definitions ${ref("I.3")}.

Sets are also very useful if one is trying to do metamathematics, that is, to prove statements not about mathematical objects but about the process of mathematical reasoning itself. For this it helps a lot if one can devise a very simple language—with a small vocabulary and an uncomplicated grammar—into which it is in principle possible to translate all mathematical arguments. Sets allow one to reduce greatly the number of parts of speech that one needs, turning almost all of them into nouns. For example, with the help of the membership symbol "$\\in$" one can do without adjectives, as the translation of "5 is a prime number" (where "prime" functions as an adjective) into "$5 \\in P$" has already suggested.`,
      annotations: [
        createAnnotation("sets-1", "note", "Set-builder notation $\\{x : P(x)\\}$ is powerful: it defines infinite sets by a property rather than listing elements."),
        createAnnotation("belongs-1", "note", "The symbol $\\in$ means 'is an element of' - it's one of the most fundamental symbols in mathematics."),
      ],
    },
    {
      id: "functions",
      title: "2.2 Functions",
      type: "text",
      content: "The concept of mathematical functions.",
      fullText: `Let us now switch attention from the word "is" to some other parts of the sentences (1)–(3), focusing first on the phrase "the square root of" in sentence (1). If we wish to think about this phrase grammatically, then we should analyze what sort of role it plays in a sentence, and the analysis is simple: in virtually any mathematical sentence where the phrase appears, it is followed by the name of a number. If the number is $n$, then this produces the slightly longer phrase, "the square root of $n$," which is a noun phrase that denotes a number and plays the same grammatical role as a number (at least when the number is used as a noun rather than as an adjective). For instance, replacing "5" by "the square root of 25" in the sentence "5 is less than 7" yields a new sentence, "The square root of 25 is less than 7," that is still grammatically correct (and true).

One of the most basic activities of mathematics is to take a mathematical object and transform it into another one, sometimes of the same kind and sometimes not. "The square root of" transforms numbers into numbers, as do "four plus," "two times," "the cosine of," and "the logarithm of." A nonnumerical example is "the center of gravity of," which transforms geometrical shapes (provided they are not too exotic or complicated to have a center of gravity) into points—meaning that if $S$ stands for a shape, then "the center of gravity of $S$" stands for a point. A function is, roughly speaking, a mathematical transformation of this kind.

It is not easy to make this definition more precise. To ask, "What is a function?" is to suggest that the answer should be a thing of some sort, but functions seem to be more like processes. Moreover, when they appear in mathematical sentences they do not behave like nouns. (They are more like prepositions, though with a definite difference that will be discussed in the next subsection.) One might therefore think it inappropriate to ask what kind of object "the square root of" is. Should one not simply be satisfied with the grammatical analysis already given?

As it happens, no. Over and over again, throughout mathematics, it is useful to think of a mathematical phenomenon, which may be complex and very unthinglike, as a single object. We have already seen a simple example: a collection of infinitely many points in the plane or space is sometimes better thought of as a single geometrical shape. Why should one wish to do this for functions? Here are two reasons. First, it is convenient to be able to say something like, "The derivative of sin is cos," or to speak in general terms about some functions being differentiable and others not. More generally, functions can have properties, and in order to discuss those properties one needs to think of functions as things. Second, many algebraic structures are most naturally thought of as sets of functions. (See, for example, the discussion of groups and symmetry in ${ref("I.3")} §2.1. See also hilbert spaces ${ref("III.37")}, function spaces ${ref("III.29")}, and vector spaces ${ref("I.3")} §2.3.)

If $f$ is a function, then the notation $f(x) = y$ means that $f$ turns the object $x$ into the object $y$. Once one starts to speak formally about functions, it becomes important to specify exactly which objects are to be subjected to the transformation in question, and what sort of objects they can be transformed into. One of the main reasons for this is that it makes it possible to discuss another notion that is central to mathematics, that of inverting a function. (See ${ref("I.4")} §1 for a discussion of why it is central.) Roughly speaking, the inverse of a function is another function that undoes it, and that it undoes; for example, the function that takes a number $n$ to $n - 4$ is the inverse of the function that takes $n$ to $n + 4$, since if you add four and then subtract four, or vice versa, you get the number you started with.

Here is a function $f$ that cannot be inverted. It takes each number and replaces it by the nearest multiple of 100, rounding up if the number ends in 50. Thus, $f(113) = 100$, $f(3879) = 3900$, and $f(1050) = 1100$. It is clear that there is no way of undoing this process with a function $g$. For example, in order to undo the effect of $f$ on the number 113 we would need $g(100)$ to equal 113. But the same argument applies to every number that is at least as big as 50 and smaller than 150, and $g(100)$ cannot be more than one number at once.

Now let us consider the function that doubles a number. Can this be inverted? Yes it can, one might say: just divide the number by two again. And much of the time this would be a perfectly sensible response, but not, for example, if it was clear from the context that the numbers being talked about were positive integers. Then one might be focusing on the difference between even and odd numbers, and this difference could be encapsulated by saying that odd numbers are precisely those numbers $n$ for which the equation $2x = n$ does not have a solution. (Notice that one can undo the doubling process by halving. The problem here is that the relationship is not symmetrical: there is no function that can be undone by doubling, since you could never get back to an odd number.)

To specify a function, therefore, one must be careful to specify two sets as well: the domain, which is the set of objects to be transformed, and the range, which is the set of objects they are allowed to be transformed into. A function $f$ from a set $A$ to a set $B$ is a rule that specifies, for each element $x$ of $A$, an element $y = f(x)$ of $B$. Not every element of the range needs to be used: consider once again the example of "two times" when the domain and range are both the set of all positive integers. The set $\\{f(x) : x \\in A\\}$ of values actually taken by $f$ is called the image of $f$. (Slightly confusingly, the word "image" is also used in a different sense, applied to the individual elements of $A$: if $x \\in A$, then its image is $f(x)$.)

The following symbolic notation is used. The expression $f: A \\rightarrow B$ means that $f$ is a function with domain $A$ and range $B$. If we then write $f(x) = y$, we know that $x$ must be an element of $A$ and $y$ must be an element of $B$. Another way of writing $f(x) = y$ that is sometimes more convenient is $f: x \\mapsto y$. (The bar on the arrow is to distinguish it from the arrow in $f: A \\rightarrow B$, which has a very different meaning.)

If we want to undo the effect of a function $f: A \\rightarrow B$, then we can, as long as we avoid the problem that occurred with the approximating function discussed earlier. That is, we can do it if $f(x)$ and $f(x')$ are different whenever $x$ and $x'$ are different elements of $A$. If this condition holds, then $f$ is called an injection. On the other hand, if we want to find a function $g$ that is undone by $f$, then we can do so as long as we avoid the problem of the integer-doubling function. That is, we can do it if every element $y$ of $B$ is equal to $f(x)$ for some element $x$ of $A$ (so that we have the option of setting $g(y) = x$). If this condition holds, then $f$ is called a surjection. If $f$ is both an injection and a surjection, then $f$ is called a bijection. Bijections are precisely the functions that have inverses.`,
      annotations: [
        createAnnotation("functions-1", "note", "A function needs domain and range specified: $f: A \\rightarrow B$ means $f$ takes elements from $A$ and maps them to elements of $B$."),
        createAnnotation("bijection-1", "note", "Bijections are functions that are both injective (one-to-one) and surjective (onto) - these are the functions that have inverses."),
      ],
    },
  ],
  exercises: [],
}

// II.1 From Numbers to Number Systems
export const fromNumbersToNumberSystemsFullText: FullTextChapter = {
  id: "from-numbers-to-number-systems",
  title: "From Numbers to Number Systems",
  description: "The historical development of number systems from ancient civilizations to modern mathematics.",
  part: "part-02",
  partTitle: "The Origins of Modern Mathematics",
  order: 1,
  content: [
    {
      id: "numbers-introduction",
      title: "Introduction",
      type: "text",
      content: "The development of numbers throughout history.",
      fullText: `People have been writing numbers down for as long as they have been writing. In every civilization that has developed a way of recording information, we also find a way of recording numbers. Some scholars even argue that numbers came first.

It is fairly clear that numbers first arose as adjectives: they specified how many or how much of something there was. Thus, it was possible to talk about three apricots, say, long before it was possible to talk about the number 3. But once the concept of "threeness" is on the table, so that the same adjective specifies three fish and three horses, and once a written symbol such as "3" is developed that can be used in all of those instances, the conditions exist for 3 itself to emerge as an independent entity. Once it does, we are doing mathematics.

This process seems to have repeated itself many times when new kinds of numbers have been introduced: first a number is used, then it is represented symbolically, and finally it comes to be conceived as a thing in itself and as part of a system of similar entities.`,
      annotations: [],
    },
    {
      id: "need-for-number-systems",
      title: "1 The Need for Number Systems",
      type: "text",
      content: "Numbers in early mathematics and their development.",
      fullText: `The earliest mathematical documents we know about go back to the civilizations of the ancient Middle East, in Egypt and in Mesopotamia. In both cultures, a scribal class developed. Scribes were responsible for keeping records, which often required them to do arithmetic and solve simple mathematical problems. Most of the mathematical documents we have from those cultures seem to have been created for the use of young scribes learning their craft.

Numbers were used both for counting and for measuring, so a need for fractional numbers must have come up fairly early. Fractions are complicated to write down, and computing with them can be difficult. Hence, the problem of "broken numbers" may well have been the first really challenging mathematical problem.`,
      annotations: [],
    },
  ],
  exercises: [],
}

// II.2 Geometry
export const geometryOriginsFullText: FullTextChapter = {
  id: "geometry-origins",
  title: "Geometry",
  description: "The history and development of geometry from ancient Greece to modern times.",
  part: "part-02",
  partTitle: "The Origins of Modern Mathematics",
  order: 2,
  content: [
    {
      id: "geometry-introduction",
      title: "1 Introduction",
      type: "text",
      content: "The evolution of geometric thought.",
      fullText: `The modern view of geometry was inspired by the novel geometrical theories of Hilbert and Einstein in the early years of the twentieth century, which built in their turn on other radical reformulations of geometry in the nineteenth century. For thousands of years, the geometrical knowledge of the Greeks, as set out most notably in Euclid's Elements, was held up as a paradigm of perfect rigor, and indeed of human knowledge. The new theories amounted to the overthrow of an entire way of thinking.`,
      annotations: [],
    },
  ],
  exercises: [],
}

// II.3 The Development of Abstract Algebra
export const abstractAlgebraDevelopmentFullText: FullTextChapter = {
  id: "abstract-algebra-development",
  title: "The Development of Abstract Algebra",
  description: "The evolution from classical algebra to modern abstract algebra.",
  part: "part-02",
  partTitle: "The Origins of Modern Mathematics",
  order: 3,
  content: [
    {
      id: "abstract-algebra-intro",
      title: "Introduction",
      type: "text",
      content: "What is algebra and how did it develop?",
      fullText: `What is algebra? To the high school student encountering it for the first time, algebra is an unfamiliar abstract language of x's and y's, a's and b's, together with rules for manipulating them. These letters, some of them variables and some constants, can be used for many purposes.

The university course reflects some brave new world in which the algebra has somehow become "modern." This modern algebra involves abstract structures—groups, rings, fields, and other so-called objects—each one defined in terms of a relatively small number of axioms and built up of substructures like subgroups, ideals, and subfields.`,
      annotations: [],
    },
  ],
  exercises: [],
}

// II.4 Algorithms
export const algorithmsFullText: FullTextChapter = {
  id: "algorithms",
  title: "Algorithms",
  description: "The history and concept of algorithms in mathematics.",
  part: "part-02",
  partTitle: "The Origins of Modern Mathematics",
  order: 4,
  content: [
    {
      id: "algorithms-intro",
      title: "1 What Is an Algorithm?",
      type: "text",
      content: "Defining algorithms and their role in mathematics.",
      fullText: `It is not easy to give a precise definition of the word "algorithm." One can provide approximate synonyms: some other words that (sometimes) mean roughly the same thing are "rule," "technique," "procedure," and "method." One can also give good examples, such as long multiplication, the method one learns in high school for multiplying two positive integers together.

However, although informal explanations and well-chosen examples do give a good idea of what an algorithm is, the concept has undergone a long evolution: it was not until the twentieth century that a satisfactory formal definition was achieved.`,
      annotations: [],
    },
  ],
  exercises: [],
}

// II.5 The Development of Rigor in Mathematical Analysis
export const rigorInAnalysisFullText: FullTextChapter = {
  id: "rigor-in-analysis",
  title: "The Development of Rigor in Mathematical Analysis",
  description: "The development of rigorous foundations in calculus and analysis.",
  part: "part-02",
  partTitle: "The Origins of Modern Mathematics",
  order: 5,
  content: [
    {
      id: "rigor-background",
      title: "1 Background",
      type: "text",
      content: "The evolution of rigor in mathematical analysis.",
      fullText: `This article is about how rigor came to be introduced into mathematical analysis. This is a complicated topic, since mathematical practice has changed considerably, especially in the period between the founding of the calculus (shortly before 1700) and the early twentieth century.

The key common feature of this research was the use of infinities: in some sense, it involved devising methods for combining infinitely many infinitely small quantities to get a finite answer.`,
      annotations: [],
    },
  ],
  exercises: [],
}

// II.6 The Development of the Idea of Proof
export const ideaOfProofFullText: FullTextChapter = {
  id: "idea-of-proof",
  title: "The Development of the Idea of Proof",
  description: "The evolution of mathematical proof from ancient times to modern formalism.",
  part: "part-02",
  partTitle: "The Origins of Modern Mathematics",
  order: 6,
  content: [
    {
      id: "proof-introduction",
      title: "Introduction",
      type: "text",
      content: "The development of proof in mathematics.",
      fullText: `In many respects the development of the idea of proof is coextensive with the development of mathematics as a whole. Looking back into the past, one might at first consider mathematics to be a body of scientific knowledge that deals with the properties of numbers, magnitudes, and figures, obtaining its justifications from proofs rather than, say, from experiments or inductive inferences.

The early stages of this story raise additional questions, both historical and methodological. For instance, Thales of Miletus, the first mathematician known by name, is reported to have proved several geometric theorems.`,
      annotations: [],
    },
  ],
  exercises: [],
}

// II.7 The Crisis in the Foundations of Mathematics
export const foundationsCrisisFullText: FullTextChapter = {
  id: "foundations-crisis",
  title: "The Crisis in the Foundations of Mathematics",
  description: "The foundational crisis in mathematics and the development of set theory, logic, and axiomatic systems.",
  part: "part-02",
  partTitle: "The Origins of Modern Mathematics",
  order: 7,
  content: [
    {
      id: "foundations-introduction",
      title: "Introduction",
      type: "text",
      content: "The crisis in foundations and its resolution.",
      fullText: `The foundational crisis in mathematics was a period of intense debate and development in the early twentieth century concerning the logical and philosophical foundations of mathematics. This crisis was precipitated by the discovery of paradoxes in set theory and the challenge of providing a rigorous foundation for mathematical reasoning.

The crisis led to the development of several important schools of thought, including logicism, formalism, and intuitionism, each offering different approaches to resolving the foundational issues.`,
      annotations: [],
    },
  ],
  exercises: [],
}

// III.1 The Axiom of Choice
export const axiomOfChoiceFullText: FullTextChapter = {
  id: "axiom-of-choice",
  title: "The Axiom of Choice",
  description: "The axiom of choice and its implications for mathematics.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 1,
  content: [
    {
      id: "axiom-choice-content",
      title: "The Axiom of Choice",
      type: "text",
      content: "Understanding the axiom of choice.",
      fullText: `Consider the following problem: it is easy to find two irrational numbers $a$ and $b$ such that $a + b$ is rational, or such that $ab$ is rational (in both cases one could take $a = \\sqrt{2}$ and $b = -\\sqrt{2}$), but is it possible for $a^b$ to be rational? Here is an elegant proof that the answer is yes.

Let $x = \\sqrt{2}^{\\sqrt{2}}$. If $x$ is rational then we have our example. But $x^{\\sqrt{2}} = \\sqrt{2}^2 = 2$ is rational, so if $x$ is irrational then again we have an example.

Now this argument certainly establishes that it is possible for $a$ and $b$ to be irrational and for $a^b$ to be rational. However, the proof has a very interesting feature: it is nonconstructive, in the sense that it does not actually name two irrationals $a$ and $b$ that work. Instead, it tells us that either we can take $a = b = \\sqrt{2}$ or we can take $a = \\sqrt{2}$ and $b = \\sqrt{2}^{\\sqrt{2}}$.

The axiom of choice is one of several rules that we use for building sets out of other sets. Roughly speaking, the axiom of choice says that we are allowed to make an arbitrary number of unspecified choices when we wish to form a set.`,
      annotations: [],
    },
  ],
  exercises: [],
}

// III.37 Bayesian Analysis
export const bayesianAnalysisFullText: FullTextChapter = {
  id: "bayesian-analysis",
  title: "Bayesian Analysis",
  description: "Bayesian statistics and probabilistic reasoning.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 37,
  content: [
    {
      id: "bayesian-content",
      title: "Bayesian Analysis",
      type: "text",
      content: "Understanding Bayesian statistics.",
      fullText: `Suppose you throw a pair of standard dice. The probability that the total is 10 is $\\frac{1}{12}$ because there are thirty-six ways the dice can come up, of which three (4 and 6, 5 and 5, and 6 and 4) give 10. If, however, you look at the first die and see that it came up as a 6, then the conditional probability that the total is 10, given this information, is $\\frac{1}{6}$ (since that is the probability that the other die comes up as a 4).

In general, the probability of A given B is defined to be the probability of A and B divided by the probability of B. In symbols, one writes

$$P[A|B] = \\frac{P[A \\wedge B]}{P[B]}$$

From this it follows that $P[A \\wedge B] = P[A|B] P[B]$. Now $P[A \\wedge B]$ is the same as $P[B \\wedge A]$. Therefore,

$$P[A|B] P[B] = P[B|A] P[A],$$

since the left-hand side is $P[A \\wedge B]$ and the right-hand side is $P[B \\wedge A]$. Dividing through by $P[B]$ we obtain Bayes's theorem:

$$P[A|B] = \\frac{P[B|A] P[A]}{P[B]},$$

which expresses the conditional probability of A given B in terms of the conditional probability of B given A.`,
      annotations: [],
    },
  ],
  exercises: [],
}

// IV.1 Algebraic Numbers
export const algebraicNumbersFullText: FullTextChapter = {
  id: "algebraic-numbers",
  title: "Algebraic Numbers",
  description: "The theory of algebraic numbers and their properties.",
  part: "part-04",
  partTitle: "Branches of Mathematics",
  order: 1,
  content: [
    {
      id: "algebraic-numbers-content",
      title: "Algebraic Numbers",
      type: "text",
      content: "Introduction to algebraic number theory.",
      fullText: `Algebraic number theory is the study of finite field extensions of the rational numbers. These fields, called algebraic number fields, arise naturally when one attempts to solve polynomial equations with rational coefficients.

An algebraic number is a complex number that is a root of a polynomial equation with rational coefficients. The set of all algebraic numbers forms a field, which is an algebraic closure of the rational numbers.`,
      annotations: [],
    },
  ],
  exercises: [],
}

// IV.2 Analytic Number Theory
export const analyticNumberTheoryFullText: FullTextChapter = {
  id: "analytic-number-theory",
  title: "Analytic Number Theory",
  description: "Using analysis to study properties of integers and prime numbers.",
  part: "part-04",
  partTitle: "Branches of Mathematics",
  order: 2,
  content: [
    {
      id: "analytic-nt-content",
      title: "Analytic Number Theory",
      type: "text",
      content: "Introduction to analytic methods in number theory.",
      fullText: `Analytic number theory is the study of the properties of integers using methods from analysis. The prime number theorem, which describes the distribution of prime numbers, is one of the most famous results in this field.

The Riemann zeta function plays a central role in analytic number theory. Its zeros are intimately connected with the distribution of prime numbers through the explicit formulas.`,
      annotations: [],
    },
  ],
  exercises: [],
}

// Helper function to get a full text chapter by ID
export function getFullTextChapterById(id: string): FullTextChapter | undefined {
  const chapters = [
    whatIsMathematicsFullText,
    languageAndGrammarFullText,
    fundamentalDefinitionsFullText,
    generalGoalsFullText,
    fromNumbersToNumberSystemsFullText,
    geometryOriginsFullText,
    abstractAlgebraDevelopmentFullText,
    algorithmsFullText,
    rigorInAnalysisFullText,
    ideaOfProofFullText,
    foundationsCrisisFullText,
    axiomOfChoiceFullText,
    bayesianAnalysisFullText,
    algebraicNumbersFullText,
    analyticNumberTheoryFullText,
  ]
  return chapters.find((chapter) => chapter.id === id)
}

// Helper function to check if full text exists for a chapter
export function hasFullText(id: string): boolean {
  return getFullTextChapterById(id) !== undefined
}