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
  "III.62": { id: "placeholder", part: "part-03" }, // Banach spaces - not yet created
  "III.78": { id: "placeholder", part: "part-03" }, // Ricci flow - not yet created
  
  // Part IV: Branches of Mathematics
  "IV.1": { id: "number-theory", part: "part-04" },
  "IV.2": { id: "number-theory", part: "part-04" }, // Analytic number theory
  "IV.4": { id: "algebra", part: "part-04" }, // Algebraic geometry
  "IV.5": { id: "placeholder", part: "part-04" }, // Arithmetic geometry
  "IV.12": { id: "analysis", part: "part-04" }, // Partial differential equations
  "IV.13": { id: "placeholder", part: "part-04" }, // General relativity
  "IV.14": { id: "placeholder", part: "part-04" }, // Dynamics
  "IV.15": { id: "placeholder", part: "part-04" }, // Operator algebras
  "IV.16": { id: "placeholder", part: "part-04" }, // Mirror symmetry
  "IV.17": { id: "placeholder", part: "part-04" }, // Vertex operator algebras
  "IV.22": { id: "placeholder", part: "part-04" }, // Set theory
  "IV.23": { id: "placeholder", part: "part-04" }, // Model theory
  "IV.24": { id: "placeholder", part: "part-04" }, // Brownian motion
  "IV.25": { id: "placeholder", part: "part-04" }, // Probabilistic models
  
  // Part V: Theorems and Problems
  "V.7": { id: "placeholder", part: "part-05" }, // Classification of finite simple groups
  "V.10": { id: "placeholder", part: "part-05" }, // Fermat's Last Theorem
  "V.15": { id: "placeholder", part: "part-05" }, // Gödel's incompleteness theorems
  "V.18": { id: "placeholder", part: "part-05" }, // Continuum hypothesis
  "V.21": { id: "placeholder", part: "part-05" }, // Insolubility of the quintic
  
  // Part VII: Applications
  "VII.7": { id: "placeholder", part: "part-07" }, // Cryptography
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
  // Fallback to placeholder for unknown references
  return `[${chapter}](/placeholder?ref=${encodeURIComponent(chapter)})`
}

// I.1 What Is Mathematics About? - Full Text (Verbatim from Princeton Companion to Mathematics)
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
    {
      id: "algebra-vs-analysis",
      title: "1.2 Algebra versus Analysis",
      type: "text",
      content: "The distinction between algebraic and analytical approaches.",
      fullText: `The word "analysis," used to denote a branch of mathematics, is not one that features at high school level. However, the word "calculus" is much more familiar, and differentiation and integration are good examples of mathematics that would be classified as analysis rather than algebra or geometry. The reason for this is that they involve limiting processes. For example, the derivative of a function $f$ at a point $x$ is the limit of the gradients of a sequence of chords of the graph of $f$, and the area of a shape with a curved boundary is defined to be the limit of the areas of rectilinear regions that fill up more and more of the shape. (These concepts are discussed in much more detail in ${ref("I.3")} §5.)

Thus, as a first approximation, one might say that a branch of mathematics belongs to analysis if it involves limiting processes, whereas it belongs to algebra if you can get to the answer after just a finite sequence of steps. However, here again the first approximation is so crude as to be misleading, and for a similar reason: if one looks more closely one finds that it is not so much branches of mathematics that should be classified into analysis or algebra, but mathematical techniques.

Given that we cannot write out infinitely long proofs, how can we hope to prove anything about limiting processes? To answer this, let us look at the justification for the simple statement that the derivative of $x^3$ is $3x^2$. The usual reasoning is that the gradient of the chord of the line joining the two points $(x, x^3)$ and $((x + h), (x + h)^3)$ is

$$\\frac{(x + h)^3 - x^3}{x + h - x},$$

which works out as $3x^2 + 3xh + h^2$. As $h$ "tends to zero," this gradient "tends to $3x^2$," so we say that the gradient at $x$ is $3x^2$. But what if we wanted to be a bit more careful? For instance, if $x$ is very large, are we really justified in ignoring the term $3xh$?

To reassure ourselves on this point, we do a small calculation to show that, whatever $x$ is, the error $3xh + h^2$ can be made arbitrarily small, provided only that $h$ is sufficiently small. Here is one way of going about it. Suppose we fix a small positive number $\\varepsilon$, which represents the error we are prepared to tolerate. Then if $|h| \\leqslant \\varepsilon/6x$, we know that $|3xh|$ is at most $\\varepsilon/2$. If in addition we know that $|h| \\leqslant \\sqrt{\\varepsilon/2}$, then we also know that $h^2 \\leqslant \\varepsilon/2$. So, provided that $|h|$ is smaller than the minimum of the two numbers $\\varepsilon/6x$ and $\\sqrt{\\varepsilon/2}$, the difference between $3x^2 + 3xh + h^2$ and $3x^2$ will be at most $\\varepsilon$.

There are two features of the above argument that are typical of analysis. First, although the statement we wished to prove was about a limiting process, and was therefore "infinitary," the actual work that we needed to do to prove it was entirely finite. Second, the nature of that work was to find sufficient conditions for a certain fairly simple inequality (the inequality $|3xh + h^2| \\leqslant \\varepsilon$) to be true.

Let us illustrate this second feature with another example: a proof that $x^4 - x^2 - 6x + 10$ is positive for every real number $x$. Here is an "analyst's argument." Note first that if $x \\leqslant -1$ then $x^4 \\geqslant x^2$ and $10 - 6x \\geqslant 0$, so the result is certainly true in this case. If $-1 \\leqslant x \\leqslant 1$, then $|x^4 - x^2 - 6x|$ cannot be greater than $x^4 + x^2 + 6|x|$, which is at most $8$, so $x^4 - x^2 - 6x \\geqslant -8$, which implies that $x^4 - x^2 - 6x + 10 \\geqslant 2$. If $1 \\leqslant x \\leqslant \\frac{3}{2}$, then $x^4 \\geqslant x^2$ and $6x \\leqslant 9$, so $x^4 - x^2 - 6x + 10 \\geqslant 1$. If $\\frac{3}{2} \\leqslant x \\leqslant 2$, then $x^2 \\geqslant \\frac{9}{4}$, so $x^4 - x^2 = x^2(x^2 - 1) \\geqslant \\frac{9}{4} \\cdot \\frac{5}{4} > 2$. Also, $6x \\leqslant 12$, so $10 - 6x \\geqslant -2$. Therefore, $x^4 - x^2 - 6x + 10 > 0$. Finally, if $x \\geqslant 2$, then $x^4 - x^2 = x^2(x^2 - 1) \\geqslant 3x^2 \\geqslant 6x$, from which it follows that $x^4 - x^2 - 6x + 10 \\geqslant 10$.

The above argument is somewhat long, but each step consists in proving a rather simple inequality—this is the sense in which the proof is typical of analysis. Here, for contrast, is an "algebraist's proof." One simply points out that $x^4 - x^2 - 6x + 10$ is equal to $(x^2 - 1)^2 + (x - 3)^2$, and is therefore always positive.

This may make it seem as though, given the choice between analysis and algebra, one should go for algebra. After all, the algebraic proof was much shorter, and makes it obvious that the function is always positive. However, although there were several steps to the analyst's proof, they were all easy, and the brevity of the algebraic proof is misleading since no clue has been given about how the equivalent expression for $x^4 - x^2 - 6x + 10$ was found. And in fact, the general question of when a polynomial can be written as a sum of squares of other polynomials turns out to be an interesting and difficult one (particularly when the polynomials have more than one variable).

There is also a third, hybrid approach to the problem, which is to use calculus to find the points where $x^4 - x^2 - 6x + 10$ is minimized. The idea would be to calculate the derivative $4x^3 - 2x - 6$ (an algebraic process, justified by an analytic argument), find its roots (algebra), and check that the values of $x^4 - x^2 - 6x + 10$ at the roots of the derivative are positive. However, though the method is a good one for many problems, in this case it is tricky because the cubic $4x^3 - 2x - 6$ does not have integer roots. But one could use an analytic argument to find small intervals inside which the minimum must occur, and that would then reduce the number of cases that had to be considered in the first, purely analytic, argument.

As this example suggests, although analysis often involves limiting processes and algebra usually does not, a more significant distinction is that algebraists like to work with exact formulas and analysts use estimates. Or, to put it even more succinctly, algebraists like equalities and analysts like inequalities.`,
      annotations: [
        createAnnotation("analysis-1", "note", "The derivative of $x^3$ is $3x^2$—this example shows how analysis uses limiting processes while algebra uses finite steps."),
        createAnnotation("analysis-2", "note", "Algebraists prefer equalities and exact formulas; analysts prefer inequalities and estimates."),
      ],
    },
    {
      id: "main-branches",
      title: "2. The Main Branches of Mathematics",
      type: "text",
      content: "A survey of the major fields of mathematical study.",
      fullText: `Now that we have discussed the differences between algebraic, geometrical, and analytical thinking, we are ready for a crude classification of the subject matter of mathematics. We face a potential confusion, because the words "algebra," "geometry," and "analysis" refer both to specific branches of mathematics and to ways of thinking that cut across many different branches. Thus, it makes sense to say (and it is true) that some branches of analysis are more algebraic (or geometrical) than others; similarly, there is no paradox in the fact that algebraic topology is almost entirely algebraic and geometrical in character, even though the objects it studies, topological spaces, are part of analysis. In this section, we shall think primarily in terms of subject matter, but it is important to keep in mind the distinctions of the previous section and be aware that they are in some ways more fundamental. Our descriptions will be very brief: further reading about the main branches of mathematics can be found in parts II and IV, and more specific points are discussed in parts III and V.

**2.1 Algebra**

The word "algebra," when it denotes a branch of mathematics, means something more specific than manipulation of symbols and a preference for equalities over inequalities. Algebraists are concerned with number systems, polynomials, and more abstract structures such as groups, fields, vector spaces, and rings (discussed in some detail in some fundamental mathematical definitions ${ref("I.3")}). Historically, the abstract structures emerged as generalizations from concrete instances. For instance, there are important analogies between the set of all integers and the set of all polynomials with rational (for example) coefficients, which are brought out by the fact that both sets are examples of algebraic structures known as Euclidean domains. If one has a good understanding of Euclidean domains, one can apply this understanding to integers and polynomials.

This highlights a contrast that appears in many branches of mathematics, namely the distinction between general, abstract statements and particular, concrete ones. One algebraist might be thinking about groups, say, in order to understand a particular rather complicated group of symmetries, while another might be interested in the general theory of groups on the grounds that they are a fundamental class of mathematical objects. The development of abstract algebra from its concrete beginnings is discussed in the origins of modern algebra ${ref("II.3")}.

A supreme example of a theorem of the first kind is the insolubility of the quintic ${ref("V.21")}—the result that there is no formula for the roots of a quintic polynomial in terms of its coefficients. One proves this theorem by analyzing symmetries associated with the roots of a polynomial, and understanding the group that these symmetries form. This concrete example of a group (or rather, class of groups, one for each polynomial) played a very important part in the development of the abstract theory of groups.

As for the second kind of theorem, a good example is the classification of finite simple groups ${ref("V.7")}, which describes the basic building blocks out of which any finite group can be built.

Algebraic structures appear throughout mathematics, and there are many applications of algebra to other areas, such as number theory, geometry, and even mathematical physics.

**2.2 Number Theory**

Number theory is largely concerned with properties of the set of positive integers, and as such has a considerable overlap with algebra. But a simple example that illustrates the difference between a typical question in algebra and a typical question in number theory is provided by the equation $13x - 7y = 1$. An algebraist would simply note that there is a one-parameter family of solutions: if $y = \\lambda$ then $x = (1 + 7\\lambda)/13$, so the general solution is $(x, y) = ((1 + 7\\lambda)/13, \\lambda)$. A number theorist would be interested in integer solutions, and would therefore work out for which integers $\\lambda$ the number $1 + 7\\lambda$ is a multiple of $13$. (The answer is that $1 + 7\\lambda$ is a multiple of $13$ if and only if $\\lambda$ has the form $13m + 11$ for some integer $m$.)

However, this description does not do full justice to modern number theory, which has developed into a highly sophisticated subject. Most number theorists are not directly trying to solve equations in integers; instead they are trying to understand structures that were originally developed to study such equations but which then took on a life of their own and became objects of study in their own right. In some cases, this process has happened several times, so the phrase "number theory" gives a very misleading picture of what some number theorists do. Nevertheless, even the most abstract parts of the subject can have down-to-earth applications: a notable example is Andrew Wiles's famous proof of fermat's last theorem ${ref("V.10")}.

Interestingly, in view of the discussion earlier, number theory has two fairly distinct subbranches, known as algebraic number theory ${ref("IV.1")} and analytic number theory ${ref("IV.2")}. As a rough rule of thumb, the study of equations in integers leads to algebraic number theory, while analytic number theory has its roots in the study of prime numbers, but the true picture is of course more complicated.

**2.3 Geometry**

A central object of study is the manifold, which is discussed in ${ref("I.3")} §6.9. Manifolds are higher-dimensional generalizations of shapes like the surface of a sphere: a small portion of a manifold looks flat, but the manifold as a whole may be curved in complicated ways. Most people who call themselves geometers are studying manifolds in one way or another. As with algebra, some will be interested in particular manifolds and others in the more general theory.

Within the study of manifolds, one can attempt a further classification, according to when two manifolds are regarded as "genuinely distinct." A topologist regards two objects as the same if one can be continuously deformed, or "morphed," into the other; thus, for example, an apple and a pear would count as the same for a topologist. This means that relative distances are not important to topologists, since one can change them by suitable continuous stretches. A differential topologist asks for the deformations to be "smooth" (which means "sufficiently differentiable"). This results in a finer classification of manifolds and a different set of problems. At the other, more "geometrical," end of the spectrum are mathematicians who are much more interested in the precise nature of the distances between points on a manifold (a concept that would not make sense to a topologist) and in auxiliary structures that one can associate with a manifold. See riemannian metrics ${ref("I.3")} §6.10 and ricci flow ${ref("III.78")} for some indication of what the more geometrical side of geometry is like.

**2.4 Algebraic Geometry**

As its name suggests, algebraic geometry does not have an obvious place in the above classification, so it is easier to discuss it separately. Algebraic geometers also study manifolds, but with the important difference that their manifolds are defined using polynomials. (A simple example of this is the surface of a sphere, which can be defined as the set of all $(x, y, z)$ such that $x^2 + y^2 + z^2 = 1$.) This means that algebraic geometry is algebraic in the sense that it is "all about polynomials" but geometric in the sense that the set of solutions of a polynomial in several variables is a geometric object.

An important part of algebraic geometry is the study of singularities. Often the set of solutions to a system of polynomial equations is similar to a manifold, but has a few exceptional, singular points. For example, the equation $x^2 = y^2 + z^2$ defines a (double) cone, which has its vertex at the origin $(0, 0, 0)$. If you look at a small enough neighborhood of a point $x$ on the cone, then, provided $x$ is not $(0, 0, 0)$, the neighborhood will resemble a flat plane. However, if $x$ is $(0, 0, 0)$, then no matter how small the neighborhood is, you will still see the vertex of the cone. Thus, $(0, 0, 0)$ is a singularity. (This means that the cone is not actually a manifold, but a "manifold with a singularity.")

The interplay between algebra and geometry is part of what gives algebraic geometry its fascination. A further impetus to the subject comes from its connections to other branches of mathematics. There is a particularly close connection with number theory, explained in arithmetic geometry ${ref("IV.5")}. More surprisingly, there are important connections between algebraic geometry and mathematical physics. See mirror symmetry ${ref("IV.16")} for an account of some of these.

**2.5 Analysis**

Analysis comes in many different flavors. A major topic is the study of partial differential equations ${ref("IV.12")}. This began because partial differential equations were found to govern many physical processes, such as motion in a gravitational field, for example. But partial differential equations arise in purely mathematical contexts as well—particularly in geometry—so they give rise to a big branch of mathematics with many subbranches and links to many other areas.

Like algebra, analysis has an abstract side as well. In particular, certain abstract structures, such as banach spaces ${ref("III.62")}, hilbert spaces ${ref("III.37")}, $C^*$-algebras ${ref("IV.15")} §3, and von neumann algebras ${ref("IV.15")} §2, are central objects of study. These four structures are all infinite-dimensional vector spaces ${ref("I.3")} §2.3, and the last two are "algebras," which means that one can multiply their elements together as well as adding them and multiplying them by scalars. Because these structures are infinite dimensional, studying them involves limiting arguments, which is why they belong to analysis. However, the extra algebraic structure of $C^*$-algebras and von Neumann algebras means that in those areas substantial use is made of algebraic tools as well. And as the word "space" suggests, geometry also has a very important role.

dynamics ${ref("IV.14")} is another significant branch of analysis. It is concerned with what happens when you take a simple process and do it over and over again. For example, if you take a complex number $z_0$, then let $z_1 = z_0^2 + 2$, and then let $z_2 = z_1^2 + 2$, and so on, then what is the limiting behavior of the sequence $z_0, z_1, z_2, \\ldots$? Does it head off to infinity or stay in some bounded region? The answer turns out to depend in a complicated way on the original number $z_0$. Exactly how it depends on $z_0$ is a question in dynamics.

Sometimes the process to be repeated is an "infinitesimal" one. For example, if you are told the positions, velocities, and masses of all the planets in the solar system at a particular moment (as well as the mass of the Sun), then there is a simple rule that tells you how the positions and velocities will be different an instant later. Later, the positions and velocities have changed, so the calculation changes; but the basic rule is the same, so one can regard the whole process as applying the same simple infinitesimal process infinitely many times. The correct way to formulate this is by means of partial differential equations and therefore much of dynamics is concerned with the long-term behavior of solutions to these.

**2.6 Logic**

The word "logic" is sometimes used as a shorthand for all branches of mathematics that are concerned with fundamental questions about mathematics itself, notably set theory ${ref("IV.22")}, category theory ${ref("III.8")}, model theory ${ref("IV.23")}, and logic in the narrower sense of "rules of deduction." Among the triumphs of set theory are gödel's incompleteness theorems ${ref("V.15")} and Paul Cohen's proof of the independence of the continuum hypothesis ${ref("V.18")}. Gödel's theorems in particular had a dramatic effect on philosophical perceptions of mathematics, though now that it is understood that not every mathematical statement has a proof or disproof most mathematicians carry on much as before, since most statements they encounter do tend to be decidable. However, set theorists are a different breed. Since Gödel and Cohen, many further statements have been shown to be undecidable, and many new axioms have been proposed that would make them decidable. Thus, decidability is now studied for mathematical rather than philosophical reasons.

Category theory is another subject that began as a study of the processes of mathematics and then became a mathematical subject in its own right. It differs from set theory in that its focus is less on mathematical objects themselves than on what is done to those objects—in particular, the maps that transform one to another.

A model for a collection of axioms is a mathematical structure for which those axioms, suitably interpreted, are true. For example, any concrete example of a group is a model for the axioms of group theory. Set theorists study models of set-theoretic axioms, and these are essential to the proofs of the famous theorems mentioned above, but the notion of a model is more widely applicable and has led to important discoveries in fields well outside set theory.

**2.7 Combinatorics**

There are various ways in which one can try to define combinatorics. None is satisfactory on its own, but together they give some idea of what the subject is like. A first definition is that combinatorics is about counting things. For example, how many ways are there of filling an $n \\times n$ square grid with $0$s and $1$s if you are allowed at most two $1$s in each row and at most two $1$s in each column? Because this problem asks us to count something, it is, in a rather simple sense, combinatorial.

Combinatorics is sometimes called "discrete mathematics" because it is concerned with "discrete" structures as opposed to "continuous" ones. Roughly speaking, an object is discrete if it consists of points that are isolated from each other, and continuous if you can move from one point to another without making sudden jumps. (A good example of a discrete structure is the integer lattice $\\mathbb{Z}^2$, which is the grid consisting of all points in the plane with integer coordinates, and a good example of a continuous one is the surface of a sphere.) There is a close affinity between combinatorics and theoretical computer science (which deals with the quintessentially discrete structure of sequences of $0$s and $1$s), and combinatorics is sometimes contrasted with analysis, though in fact there are several connections between the two.

A third view of combinatorics is that it is concerned with mathematical structures that have "few constraints." This idea helps to explain why number theory, despite the fact that it studies (among other things) the distinctly discrete set of all positive integers, is not considered a branch of combinatorics. In order to illustrate this last contrast, here are two somewhat similar problems, both about positive integers.

(i) Is there a positive integer that can be written in a thousand different ways as a sum of two squares?

(ii) Let $a_1, a_2, a_3, \\ldots$ be a sequence of positive integers, and suppose that each $a_n$ lies between $n^2$ and $(n+1)^2$. Will there always be a positive integer that can be written in a thousand different ways as a sum of two numbers from the sequence?

The first question counts as number theory, since it concerns a very specific sequence—the sequence of squares—and one would expect to use properties of this special set of numbers in order to determine the answer, which turns out to be yes.¹

The second question concerns a far less structured sequence. All we know about $a_n$ is its rough size—it is fairly close to $n^2$—but we know nothing about its more detailed properties, such as whether it is a prime, or a perfect cube, or a power of $2$, etc. For this reason, the second problem belongs to combinatorics. The answer is not known. If the answer turns out to be yes, then it will show that, in a sense, the number theory in the first problem was an illusion and that all that really mattered was the rough rate of growth of the sequence of squares.

¹ Here is a quick hint at a proof. At the beginning of analytic number theory ${ref("IV.2")} you will find a condition that tells you precisely which numbers can be written as sums of two squares. From this criterion it follows that "most" numbers cannot. A careful count shows that if $N$ is a large integer, then there are many more expressions of the form $m^2 + n^2$ with both $m^2$ and $n^2$ less than $N$ than there are numbers less than $2N$ that can be written as a sum of two squares. Therefore there is a lot of duplication.

**2.8 Theoretical Computer Science**

This branch of mathematics is described at considerable length in part IV, so we shall be brief here. Broadly speaking, theoretical computer science is concerned with efficiency of computation, meaning the amounts of various resources, such as time and computer memory, needed to perform given computational tasks. There are mathematical models of computation that allow one to study questions about computational efficiency in great generality without having to worry about precise details of how algorithms are implemented. Thus, theoretical computer science is a genuine branch of pure mathematics: in theory, one could be an excellent theoretical computer scientist and be unable to program a computer. However, it has had many notable applications as well, especially to cryptography (see mathematics and cryptography ${ref("VII.7")} for more on this).

**2.9 Probability**

There are many phenomena, from biology and economics to computer science and physics, that are so complicated that instead of trying to understand them in complete detail one tries to make probabilistic statements instead. For example, if you wish to analyze how a disease is likely to spread, you cannot hope to take account of all the relevant information (such as who will come into contact with whom) but you can build a mathematical model and analyze it. Such models can have unexpectedly interesting behavior with direct practical relevance. For example, it may happen that there is a "critical probability" $p$ with the following property: if the probability of infection after contact of a certain kind is above $p$ then an epidemic may very well result, whereas if it is below $p$ then the disease will almost certainly die out. A dramatic difference in behavior like this is called a phase transition. (See probabilistic models of critical phenomena ${ref("IV.25")} for further discussion.)

Setting up an appropriate mathematical model can be surprisingly difficult. For example, there are physical circumstances where particles travel in what appears to be a completely random manner. Can one make sense of the notion of a random continuous path? It turns out that one can—the result is the elegant theory of brownian motion ${ref("IV.24")}—but the proof that one can is highly sophisticated, roughly speaking because the set of all possible paths is so complex.

**2.10 Mathematical Physics**

The relationship between mathematics and physics has changed profoundly over the centuries. Up to the eighteenth century there was no sharp distinction drawn between mathematics and physics, and many famous mathematicians could also be regarded as physicists, at least some of the time. During the nineteenth century and the beginning of the twentieth century this situation gradually changed, until by the middle of the twentieth century the two disciplines were very separate. And then, toward the end of the twentieth century, mathematicians started to find that ideas that had been discovered by physicists had huge mathematical significance.

There is still a big cultural difference between the two subjects: mathematicians are far more interested in finding rigorous proofs, whereas physicists, who use mathematics as a tool, are usually happy with a convincing argument for the truth of a mathematical statement, even if that argument is not actually a proof. The result is that physicists, operating under less stringent constraints, often discover fascinating mathematical phenomena long before mathematicians do.

Finding rigorous proofs to back up these discoveries is often extremely hard: it is far more than a pedantic exercise in certifying the truth of statements that no physicist seriously doubted. Indeed, it often leads to further mathematical discoveries. The articles vertex operator algebras ${ref("IV.17")}, mirror symmetry ${ref("IV.16")}, general relativity and the einstein equations ${ref("IV.13")}, and operator algebras ${ref("IV.15")} describe some fascinating examples of how mathematics and physics have enriched each other.`,
      annotations: [
        createAnnotation("branches-1", "note", "This section surveys the ten main branches of mathematics, from Algebra to Mathematical Physics."),
      ],
    },
  ],
  exercises: [],
}

// Helper function to get a full text chapter by ID
export function getFullTextChapterById(id: string): FullTextChapter | undefined {
  const chapters = [
    whatIsMathematicsFullText,
  ]
  return chapters.find((chapter) => chapter.id === id)
}

// Helper function to check if full text exists for a chapter
export function hasFullText(id: string): boolean {
  return getFullTextChapterById(id) !== undefined
}

// Export all full text chapters
export const fullTextChapters = {
  whatIsMathematicsFullText,
}
