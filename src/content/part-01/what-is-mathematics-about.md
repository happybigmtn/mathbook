# What Is Mathematics About?

I.1   What Is Mathematics About?
It is notoriously hard to give a satisfactory answer to
the question, “What is mathematics?” The approach of
this book is not to try. Rather than giving a definition
of mathematics, the intention is to give a good idea of
what mathematics is by describing many of its most
important concepts, theorems, and applications. Nev-
er the less, to make sense of all this information it is
useful to be able to classify it some how.
   The most obvious way of classifying mathematics is
by its subject matter, and that will be the approach of
this brief introductory section and the longer section
entitled some fundamental mathematical defini-
tions [I.3](/part-01/fundamental-definitions). However, it is not the only way, and not
even obviously the best way. Another approach is to
try to classify the kinds of questions that mathemat i-
cians like to think about. This gives a usefully different
view of the subject: it often happens that two areas of
mathematics that appear very different if you pay atten-
tion to their subject matter are much more similar if
you look at the kinds of questions that are being asked.
The last section of part I, entitled the general goals
of mathematical research [I.4](/part-01/general-goals), looks at the subject
from this point of view. At the end of that article there
is a brief discussion of what one might regard as a third
classification, not so much of mathematics itself but of
the content of a typical article in a mathematics jour-
nal. As well as theorems and proofs, such an article will
contain definitions, examples, lemmas, formulas, con-
jectures, and so on. The point of that discussion will
be to say what these words mean and why the different
kinds of mathematical output are important.

Although any classification of the subject matter of
mathematics must immediately be hedged around with
qualifications, there is a crude division that un doubt-
edly works well as a first approximation, namely the

Part I
Introduction
division of mathematics into algebra, geometry, and
analysis. So let us begin with this, and then qualify it
later.
1.1   Algebra versus Geometry
Most people who have done some high school mathe-
matics will think of algebra as the sort of mathemat-
ics that results when you substitute letters for num-
bers. Algebra will often be contrasted with arithmetic,
which is a more direct study of the numbers them-
selves. So, for example, the question, “What is 3 . imes 7?”
will be thought of as belonging to arithmetic, while the
question, “If x + y = 10 and xy = 21, then what is the
value of the larger of x and y?” will be regarded as a
piece of algebra. This contrast is less apparent in more
advanced mathematics for the simple reason that it is
very rare for numbers to appear with out letters to keep
them company.
There is, however, a different contrast, between alge-
bra and geometry, which is much more important at an
advanced level. The high school conception of geom-
etry is that it is the study of shapes such as circles, tri-
angles, cubes, and spheres together with concepts such
as rotations, reflections, symmetries, and so on. Thus,
the objects of geometry, and the processes that they
under go, have a much more visual character than the
equations of algebra.
This contrast persists right up to the frontiers of
modern mathematical research. Some parts of mathe-
matics involve manipulating symbols according to cer-
tain rules: for example, a true equation remains true
if you “do the same to both sides.” These parts would
typically be thought of as algebraic, where as other parts
are concerned with concepts that can be visualized, and
these are typically thought of as geometrical.
1   Algebra, Geometry, and Analysis
However, a distinction like this is never simple. If
you look at a typical research paper in geometry, will
it be full of pictures? Almost certainly not. In fact, the
methods used to solve geometrical problems very often
involve a great deal of symbolic manipulation, although

2

good powers of visualization may be needed to find and
use these methods and pictures will typically under-
lie what is going on. As for algebra, is it “mere” sym-
bolic manipulation? Not at all: very often one solves an
algebraic problem by finding a way to visualize it.
   As an example of visualizing an algebraic problem,
consider how one might justify the rule that if a and
b are positive integers then ab = ba. It is possible to
approach the problem as a pure piece of algebra (per-
haps proving it by induction), but the easiest way to
convince your self that it is true is to imagine a rectangu-    and solved algebraically.
lar array that consists of a rows with b objects in each
row. The total number of objects can be thought of as
a lots of b, if you count it row by row, or as b lots of a,    that the boundary between the two is sharply defined.
if you count it column by column. Therefore, ab = ba.
Similar justifications can be given for other basic rules
such as a(b + c) = ab + ac and a(bc) = (ab)c.
   In the other direction, it turns out that a good way of     late a piece of mathematics from algebra into geometry
solving many geometrical problems is to “convert them
into algebra.” The most famous way of doing this is to
use Cartesian coordinates. For example, suppose that
you want to know what happens if you reflect a circle
about a line L through its center, then rotate it through
40◦ counter clockwise, and then reflect it once more
about the same line L. One approach is to visualize the
situation as follows.
   Imagine that the circle is made of a thin piece of
wood. Then instead of reflecting it about the line you
can rotate it through 180◦ about L (using the third
dimension). The result will be upside down, but this
does not matter if you simply ignore the thickness of
the wood. Now if you look up at the circle from below
while it is rotated counter clockwise through 40◦ , what
you will see is a circle being rotated clockwise through
40◦ . Therefore, if you then turn it back the right way
up, by rotating about L once again, the total effect will
have been a clockwise rotation through 40◦ .
   Mathematicians vary widely in their ability and will-
in gness to follow an argument like that one. If you
cannot quite visualize it well enough to see that it is
definitely correct, then you may prefer an algebraic
approach, using the theory of linear algebra and matri-
ces (which will be discussed in more detail in [I.3 §3.2](/part-01/fundamental-definitions)).    steps. However, here again the first approximation is
To begin with, one thinks of the circle as the set of all
pairs of numbers (x, y) such that x 2 + y 2 ⩽ 1. The two
transformations, reflection in a line through the center
of the circle and rotation through an angle θ, can both
be represented by 2 . imes 2 matrices, which are arrays of
numbers of the form ( ac d  b
cated, but purely algebraic, rule for multiplying matri-

I. Introduction
ces together, and it is designed to have the property
that if matrix A represents a transformation R (such
as a reflection) and matrix B represents a transforma-
tion T , then the product AB represents the transforma-
tion that results when you first do T and then R. There-
fore, one can solve the problem above by writing down
the matrices that correspond to the transformations,
multiplying them together, and seeing what trans for-
mation corresponds to the product. In this way, the
geometrical problem has been converted into algebra
Thus, while one can draw a useful distinction be-
tween algebra and geometry, one should not imagine
In fact, one of the major branches of mathematics is
even called algebraic geometry [IV.4](/part-04/algebra). And as the
above examples illustrate, it is often possible to trans-
or vice versa. Nevertheless, there is a definite differ-
ence between algebraic and geometric methods of think-
ing—one more symbolic and one more pictorial—and
this can have a profound influence on which subjects a
mathematician chooses to pursue.
1.2   Algebra versus Analysis
The word “analysis,” used to denote a branch of math-
ematics, is not one that features at high school level.
However, the word “calculus” is much more familiar,
and differentiation and integration are good examples
of mathematics that would be classified as analysis
rather than algebra or geometry. The reason for this
is that they involve limiting processes. For example, the
derivative of a function f at a point x is the limit of the
gradients of a sequence of chords of the graph of f , and
the area of a shape with a curved boundary is defined
to be the limit of the areas of rectilinear regions that
fill up more and more of the shape. (These concepts
are discussed in much more detail in [I.3 §5](/part-01/fundamental-definitions).)
Thus, as a first approximation, one might say that a
branch of mathematics belongs to analysis if it involves
limiting processes, where as it belongs to algebra if you
can get to the answer after just a finite sequence of
so crude as to be misleading, and for a similar reason:
if one looks more closely one finds that it is not so much
branches of mathematics that should be classified into
analysis or algebra, but mathematical techniques.
Given that we cannot write out infinitely long proofs,
). There is a slightly compli-   how can we hope to prove anything about limiting pro-
cesses? To answer this, let us look at the justification

$I$ . $1$ .

What Is Mathematics About?

for the simple statement that the derivative of $x^{3}$ is $3x^{2}$ . The usual reasoning is that the gradient of the chord of the line joining the two points (x , $x^{3}$ ) and ( $(x + h)$ , (x + h)3) is

(x + h)3 - x3

,

$x + h - x$

which works out as $3x^{2} + 3xh + h^{2}$ . As h “tends to zero,” this gradient “tends to $3x^{2}$ ,” so we say that the gradient at x is $3x^{2}$ . But what if we wanted to be a bit more careful? For instance, if x is very large, are we really justified in ignoring the term $3xh$ ? To reassure ourselves on this point, we do a small calculation to show that, whatever x is, the error $3xh + h^{2}$ can be made arbitrarily small, provided only that h is sufficiently small. Here is one way of going about it.
Suppose we fix a small positive number  , which represents the error we are prepared to tolerate. Then if $|h| \le/6x$ , we know that $|3xh|$ is at most   $/2$ . If in addition we know that $|h| \le/2$ , then we also know that $h^{2} \le/2$ . So, provided that |h| is smaller than the minimum of the two numbers   $/6x$ and   $/2$ , the difference between $3x^{2} + 3xh + h^{2}$ and $3x^{2}$ will be at most  . There are two features of the above argument that are typical of analysis.
First, although the statement we wished to prove was about a limiting process, and was therefore “infinitary,” the actual work that we needed to do to prove it was entirely finite. Second, the nature of that work was to find sufficient conditions for a certain fairly simple inequality (the inequality $|3xh + h^{2}| \le$ ) to be true. Let us illustrate this second feature with another example: a proof that $x^{4} - x^{2} - 6x + 10$ is positive for every real number x.
Here is an “analyst’s argument.” Note first that if $x \le - 1$ then $x^{4} \ge x^{2}$ and $10 - 6x \ge 0$ , so the result is certainly true in this case. If $- 1 \le x \le 1$ , then $|x^{4} - x^{2} - 6x|$ cannot be greater than $x^{4} + x^{2} + 6|x|$ , which is at most $8$ , so $x^{4} - x^{2} - 6x \ge - 8$ , which implies that $x^{4} - x^{2} - 6x + 10 \ge 2$ . If $1 \le x \le \frac{3}{2}$ , then $x^{4} \ge x^{2}$ and $6x \le 9$ , so $x^{4} - x^{2} - 6x + 10 \ge 1$ . If $\frac{3}{2} \le x \le 2$ , then $x^{2} \ge \frac{9}{4}$ , so $x^{4} - x^{2} = x^{2}(x^{2} - 1) \ge954$ · $4 > 2$ .
Also, $6x \le 12$ , so $10 - 6x \ge - 2$ . Therefore, $x^{4} - x^{2} - 6x + 10 > 0$ . Finally, if $x \ge 2$ , then $x^{4} - x^{2} = x^{2}(x^{2} - 1) \ge 3x^{2} \ge 6x$ , from which it follows that $x^{4} - x^{2} - 6x + 10 \ge 10$ . The above argument is some what long, but each step consists in proving a rather simple inequality--this is the sense in which the proof is typical of analysis. Here, for contrast, is an “algebraist’s proof.” One

$3$

simply points out that $x^{4} - x^{2} - 6x + 10$ is equal to (x2 - 1)2 + (x - 3)2 , and is therefore always positive. This may make it seem as though, given the choice between analysis and algebra, one should go for algebra. After all, the algebraic proof was much shorter, and makes it obvious that the function is always positive. However, although there were several steps to the analyst’s proof, they were all easy, and the brevity of the algebraic proof is misleading since no clue has been given about how the equivalent expression for $x^{4} - x^{2} - 6x + 10$ was found.
And in fact, the general question of when a polynomial can be written as a sum of squares of other polynomials turns out to be an interesting and difficult one (particularly when the polynomials have more than one variable). There is also a third, hybrid approach to the problem, which is to use calculus to find the points where $x^{4} - x^{2} - 6x + 10$ is minimized.
The idea would be to calculate the derivative $4x^{3} - 2x - 6($ an algebraic process, justified by an analytic argument), find its roots (algebra), and check that the values of $x^{4} - x^{2} - 6x + 10$ at the roots of the derivative are positive. However, though the method is a good one for many problems, in this case it is tricky because the cubic $4x^{3} - 2x - 6$ does not have integer roots.
But one could use an analytic argument to find small intervals inside which the minimum must occur, and that would then reduce the number of cases that had to be considered in the first, purely analytic, argument. As this example suggests, although analysis often involves limiting processes and algebra usually does not, a more significant distinction is that algebraists like to work with exact formulas and analysts use estimates. Or, to put it even more succinctly, algebraists like equalities and analysts like inequalities.

$2$

The Main Branches of Mathematics

Now that we have discussed the differences between algebraic, geometrical, and analytical thinking, we are ready for a crude classification of the subject matter of mathematics. We face a potential confusion, because the words “algebra,” “geometry,” and “analysis” refer both to specific branches of mathematics and to ways of thinking that cut across many different branches. Thus, it makes sense to say (and it is true) that some branches of analysis are more algebraic (or geometrical) than others;
similarly, there is no paradox in the fact that algebraic topology is almost entirely algebraic and geometrical in character, even though the objects

4

it studies, topological spaces, are part of analysis. In     which describes the basic building blocks out of which
this section, we shall think primarily in terms of subject   any finite group can be built.
matter, but it is important to keep in mind the distinc-
tions of the previous section and be aware that they are     ics, and there are many applications of algebra to other
in some ways more fundamental. Our descriptions will
be very brief: further reading about the main branches
of mathematics can be found in parts II and IV, and
more specific points are discussed in parts III and V.

2.1   Algebra
The word “algebra,” when it denotes a branch of math-
ematics, means something more specific than manipu-
lation of symbols and a preference for equalities over
inequalities. Algebraists are concerned with number
systems, polynomials, and more abstract structures
such as groups, fields, vector spaces, and rings (dis-
cussed in some detail in some fundamental math-
ematical definitions [I.3](/part-01/fundamental-definitions)). Historically, the abstract
structures emerged as generalizations from concrete
instances. For instance, there are important analo-
gies between the set of all integers and the set of all
polynomials with rational (for example) coefficients,
which are brought out by the fact that both sets are
examples of algebraic structures known as Euclidean
domains. If one has a good understanding of Euclidean
domains, one can apply this understanding to integers
and polynomials.
   This highlights a contrast that appears in many
branches of mathematics, namely the distinction be-
tween general, abstract statements and particular, con-
crete ones. One algebraist might be thinking about
groups, say, in order to understand a particular rather
complicated group of symmetries, while another might
be interested in the general theory of groups on the
grounds that they are a fundamental class of math-
ematical objects. The development of abstract alge-
bra from its concrete beginnings is discussed in the
origins of modern algebra [II.3](/part-02/abstract-algebra-development).
   A supreme example of a theorem of the first kind is
the insolubility of the quintic [V.21](/part-05/the-insolubility-of-the-quintic)—the result
that there is no formula for the roots of a quintic poly-
nomial in terms of its coefficients. One proves this
theorem by analyzing symmetries associated with the
roots of a polynomial, and understanding the group
that these symmetries form. This concrete example of
a group (or rather, class of groups, one for each polyno-
mial) played a very important part in the development
of the abstract theory of groups.
   As for the second kind of theorem, a good example
is the classification of finite simple groups [V.7](/part-05/the-classication-of-finite-simple-groups),

I. Introduction
Algebraic structures appear through out mathemat-
areas, such as number theory, geometry, and even
mathematical physics.
2.2   Number Theory
Number theory is largely concerned with properties of
the set of positive integers, and as such has a consid-
erable overlap with algebra. But a simple example that
illustrates the difference between a typical question in
algebra and a typical question in number theory is pro-
vided by the equation 13 x − 7 y = 1. An algebraist
would simply note that there is a one-parameter fam-
ily of solutions: if y = . ambda then x = (1 + 7λ)/13, so the
general solution is (x, y) = ((1 + 7λ)/13, λ). A num-
ber theorist would be interested in integer solutions,
and would therefore work out for which integers . ambda the
number 1 + 7. ambda is a multiple of 13. (The answer is that
1 + 7. ambda is a multiple of 13 if and only if . ambda has the form
13 m + 11 for some integer m.)
However, this description does not do full justice
to modern number theory, which has developed into
a highly sophisticated subject. Most number theorists
are not directly trying to solve equations in integers;
instead they are trying to understand structures that
were originally developed to study such equations but
which then took on a life of their own and became
objects of study in their own right. In some cases,
this process has happened several times, so the phrase
“number theory” gives a very misleading picture of
what some number theorists do. Nevertheless, even the
most abstract parts of the subject can have down-to-
earth applications: a not able example is Andrew Wiles’s
famous proof of fermat’s last theorem [V.10](/part-05/fermats-last-theorem).
Interestingly, in view of the discussion earlier, num-
ber theory has two fairly distinct subbranches, known
as algebraic number theory [IV.1](/part-04/number-theory) and analytic
number theory [IV.2](/part-04/number-theory). As a rough rule of thumb, the
study of equations in integers leads to algebraic num-
ber theory, while analytic number theory has its roots
in the study of prime numbers, but the true picture is
of course more complicated.
2.3   Geometry
A central object of study is the manifold, which is dis-
cussed in [I.3 §6.9](/part-01/fundamental-definitions). Manifolds are higher-dimensional
generalizations of shapes like the surface of a sphere: a

I.1.   What Is Mathematics About?

small portion of a manifold looks flat, but the manifold
as a whole may be curved in complicated ways. Most
people who call themselves geometers are studying
manifolds in one way or another. As with algebra, some
will be interested in particular manifolds and others in
the more general theory.
   Within the study of manifolds, one can attempt a
further classification, according to when two mani-
folds are regarded as “genuinely distinct.” A topolo-
gist regards two objects as the same if one can be
continuously deformed, or “morphed,” into the other;
thus, for example, an apple and a pear would count
as the same for a topologist. This means that rela-
tive distances are not important to topologists, since
one can change them by suitable continuous stretches.
A differential topologist asks for the deformations to
be “smooth” (which means “sufficiently differentiable”).
This results in a finer classification of manifolds and a
different set of problems. At the other, more “geomet-
rical,” end of the spectrum are mathematicians who are
much more interested in the precise nature of the dis-
tances between points on a manifold (a concept that
would not make sense to a topologist) and in auxiliary
structures that one can associate with a manifold. See
riemannian metrics [I.3 §6.10](/part-01/fundamental-definitions) and ricci flow [III.78](/part-03/ricci-flow)
for some indication of what the more geometrical side
of geometry is like.
2.4    Algebraic Geometry
As its name suggests, algebraic geometry does not have
an obvious place in the above classification, so it is eas-    last two are “algebras,” which means that one can multi-
ier to discuss it separately. Algebraic geometers also
study manifolds, but with the important difference that
their manifolds are defined using polynomials. (A sim-
ple example of this is the surface of a sphere, which
can be defined as the set of all (x, y, z) such that
x 2 +y 2 +z2 = 1.) This means that algebraic geometry is
algebraic in the sense that it is “all about polynomials”     substantial use is made of algebraic tools as well. And
but geometric in the sense that the set of solutions of
a polynomial in several variables is a geometric object.
   An important part of algebraic geometry is the study
of singularities. Often the set of solutions to a system of   analysis. It is concerned with what happens when you
polynomial equations is similar to a manifold, but has a
few exceptional, singular points. For example, the equa-
tion x 2 = y 2 + z 2 defines a (double) cone, which has
its vertex at the origin (0, 0, 0). If you look at a small    on, then what is the limiting behavior of the sequence
enough neighborhood of a point x on the cone, then,
provided x is not (0, 0, 0), the neighborhood will resem-     bounded region? The answer turns out to depend in
ble a flat plane. However, if x is (0, 0, 0), then no mat-     a complicated way on the original number z0 . Exactly
ter how small the neighborhood is, you will still see the     how it depends on z0 is a question in dynamics.

5
vertex of the cone. Thus, (0, 0, 0) is a singularity. (This
means that the cone is not actually a manifold, but a
“manifold with a singularity.”)
The interplay between algebra and geometry is part
of what gives algebraic geometry its fascination. A fur-
ther impetus to the subject comes from its connections
to other branches of mathematics. There is a particu-
larly close connection with number theory, explained in
arithmetic geometry [IV.5](/part-04/arithmetic-geometry). More surprisingly, there
are important connections between algebraic geom-
etry and mathematical physics. See mirror symmetry
[IV.16](/part-04/mirror-symmetry) for an account of some of these.
2.5   Analysis
Analysis comes in many different flavors. A major
topic is the study of partial differential equations
[IV.12](/part-04/analysis). This began because partial differential equa-
tions were found to govern many physical processes,
such as motion in a gravitational field, for example.
But partial differential equations arise in purely mathe-
mat ical contexts as well—particularly in geometry—so
they give rise to a big branch of mathematics with many
subbranches and links to many other areas.
Like algebra, analysis has an abstract side as well. In
particular, certain abstract structures, such as banach
spaces [III.62](/part-03/normed-spaces-and-banach-spaces), hilbert spaces [III.37](/part-03/bayesian-analysis), C ∗ -algebras
[IV.15 §3](/part-04/operator-algebras), and von neumann algebras [IV.15 §2](/part-04/operator-algebras), are
central objects of study. These four structures are all
infinite-dimensional vector spaces [I.3 §2.3](/part-01/fundamental-definitions), and the
ply their elements together as well as adding them and
multiplying them by scalars. Because these structures
are infinite dimensional, studying them involves limit-
ing arguments, which is why they belong to analysis.
However, the extra algebraic structure of C ∗ -algebras
and von Neumann algebras means that in those areas
as the word “space” suggests, geometry also has a very
important role.
dynamics [IV.14](/part-04/dynamics) is another significant branch of
take a simple process and do it over and over again.
For example, if you take a complex number z0 , then
let z1 = z02 + 2, and then let z2 = z12 + 2, and so
z0 , z1 , z2 , . . . ? Does it head off to infinity or stay in some

6

  Some times the process to be repeated is an “infinit es-    applicable and has led to important discoveries in fields
imal” one. For example, if you are told the positions,     well out side set theory.
velocities, and masses of all the planets in the solar
system at a particular moment (as well as the mass of
the Sun), then there is a simple rule that tells you how
the positions and velocities will be different an instant
later. Later, the positions and velocities have changed,
so the calculation changes; but the basic rule is the
same, so one can regard the whole process as applying
the same simple infinitesimal process infinitely many
times. The correct way to formulate this is by means
of partial differential equations and therefore much of
dynamics is concerned with the long-term behavior of
solutions to these.
2.6   Logic
The word “logic” is some times used as a shorthand
for all branches of mathematics that are concerned
with fundamental questions about mathematics itself,
notably set theory [IV.22](/part-04/set-theory), category theory [III.8](/part-03/categories),
model theory [IV.23](/part-04/logic-and-model-theory), and logic in the narrower sense
of “rules of deduction.” Among the triumphs of set
theory are gödel’s incompleteness theorems [V.15](/part-05/gdels-theorem)
and Paul Cohen’s proof of the independence of the
continuum hypothesis [V.18]. Gödel’s theorems in
particular had a dramatic effect on philosophical per-
ceptions of mathematics, though now that it is under-
stood that not every mathematical statement has a
proof or disproof most mathematicians carry on much
as before, since most statements they encounter do
tend to be decidable. However, set theorists are a dif-
ferent breed. Since Gödel and Cohen, many further
statements have been shown to be undecidable, and
many new axioms have been proposed that would make
them decidable. Thus, decidability is now studied for
mathematical rather than philosophical reasons.
   Category theory is another subject that began as
a study of the processes of mathematics and then
became a mathematical subject in its own right. It dif-
fers from set theory in that its focus is less on math-
ematical objects themselves than on what is done to
those objects—in particular, the maps that transform
one to another.
   A model for a collection of axioms is a mathematical
structure for which those axioms, suitably interpreted,
are true. For example, any concrete example of a group
is a model for the axioms of group theory. Set theorists
study models of set-theoretic axioms, and these are
essential to the proofs of the famous theorems men-
tioned above, but the notion of a model is more widely     squares—and one would expect to use properties of

I. Introduction
2.7   Combinatorics
There are various ways in which one can try to define
combinatorics. None is satisfactory on its own, but
together they give some idea of what the subject is like.
A first definition is that combinatorics is about count-
ing things. For example, how many ways are there of
filling an n . imes n square grid with 0 s and 1 s if you are
allowed at most two 1 s in each row and at most two 1 s
in each column? Because this problem asks us to count
something, it is, in a rather simple sense, combinatorial.
Combinatorics is some times called “discrete math-
ematics” because it is concerned with “discrete” struc-
tures as opposed to “continuous” ones. Roughly speak-
ing, an object is discrete if it consists of points that
are isolated from each other, and continuous if you
can move from one point to another with out making
sudden jumps. (A good example of a discrete struc-
ture is the integer lattice Z2 , which is the grid con-
sisting of all points in the plane with integer coordin-
ates, and a good example of a continuous one is the
surface of a sphere.) There is a close affinity between
combinatorics and theoretical computer science (which
deals with the quintessential ly discrete structure of
sequences of 0 s and 1 s), and combinatorics is some-
times contrasted with analysis, though in fact there are
several connections between the two.
A third view of combinatorics is that it is con-
cerned with mathematical structures that have “few
constraints.” This idea helps to explain why number
theory, despite the fact that it studies (among other
things) the distinctly discrete set of all positive inte-
gers, is not considered a branch of combinatorics.
In order to illustrate this last contrast, here are
two some what similar problems, both about positive
integers.
(i) Is there a positive integer that can be written in a
thousand different ways as a sum of two squares?
(ii) Let a1 , a2 , a3 , . . . be a sequence of positive inte-
gers, and suppose that each an lies between n2
and (n+1)2 . Will there always be a positive integer
that can be written in a thousand different ways as
a sum of two numbers from the sequence?
The first question counts as number theory, since it
concerns a very specific sequence—the sequence of

I.1.   What Is Mathematics About?

this special set of numbers in order to determine the
answer, which turns out to be yes.1
   The second question concerns a far less structured
sequence. All we know about an is its rough size—it is
fairly close to n2 —but we know nothing about its more
detailed properties, such as whether it is a prime, or a
perfect cube, or a power of 2, etc. For this reason, the
second problem belongs to combinatorics. The answer
is not known. If the answer turns out to be yes, then
it will show that, in a sense, the number theory in the
first problem was an illusion and that all that really
mattered was the rough rate of growth of the sequence
of squares.
2.8    Theoretical Computer Science
This branch of mathematics is described at consider-
able length in part IV, so we shall be brief here. Broadly
speaking, theoretical computer science is concerned
with efficiency of computation, meaning the amounts
of various resources, such as time and computer mem-
ory, needed to perform given computational tasks.
There are mathematical models of computation that
allow one to study questions about computational effi-
ciency in great generality with out having to worry about
precise details of how algorithms are implemented.
Thus, theoretical computer science is a genuine branch
of pure mathematics: in theory, one could be an excel-
lent theoretical computer scientist and be unable to
program a computer. However, it has had many not able
applications as well, especially to cryptography (see
mathematics and cryptography [VII.7](/part-07/mathematics-and-cryptography) for more on
this).
2.9    Probability
There are many phenomena, from biology and eco-
nomics to computer science and physics, that are so
complicated that instead of trying to understand them
in complete detail one tries to make probabilistic state-
ments instead. For example, if you wish to analyze how
a disease is likely to spread, you cannot hope to take
account of all the relevant information (such as who will
come into contact with whom) but you can build a math-
ematical model and analyze it. Such models can have
  1. Here is a quick hint at a proof. At the beginning of analytic
number theory [IV.2](/part-04/number-theory) you will find a condition that tells you pre-
cisely which numbers can be written as sums of two squares. From
this criterion it follows that “most” numbers cannot. A careful count   tic exercise in certifying the truth of statements that
shows that if N is a large integer, then there are many more expres-    no physicist seriously doubted. Indeed, it often leads
sions of the form m2 +n2 with both m2 and n2 less than N than there
are numbers less than 2 N that can be written as a sum of two squares.
Therefore there is a lot of duplication.

7
unexpectedly interesting behavior with direct practical
relevance. For example, it may happen that there is a
“critical probability” p with the following property: if
the probability of infection after contact of a certain
kind is above p then an epidemic may very well result,
where as if it is below p then the disease will almost
certainly die out. A dramatic difference in behavior
like this is called a phase transition. (See probabilis-
tic models of critical phenomena [IV.25] for further
discussion.)
Setting up an appropriate mathematical model can
be surprisingly difficult. For example, there are physical
circumstances where particles travel in what appears to
be a completely random manner. Can one make sense
of the notion of a random continuous path? It turns
out that one can—the result is the elegant theory of
brownian motion [IV.24](/part-04/stochastic-processes)—but the proof that one can
is highly sophisticated, roughly speaking because the
set of all possible paths is so complex.
2.10   Mathematical Physics
The relationship between mathematics and physics has
changed profoundly over the centuries. Up to the eigh-
teenth century there was no sharp distinction drawn
between mathematics and physics, and many famous
mathematicians could also be regarded as physicists,
at least some of the time. During the nineteenth cen-
tury and the beginning of the twentieth century this
situation gradually changed, until by the middle of the
twentieth century the two disciplines were very sepa-
rate. And then, toward the end of the twentieth cen-
tury, mathematicians started to find that ideas that had
been discovered by physicists had huge mathematical
significance.
There is still a big cultural difference between the
two subjects: mathematicians are far more interested
in finding rigorous proofs, where as physicists, who use
mathematics as a tool, are usually happy with a con-
vincing argument for the truth of a mathematical state-
ment, even if that argument is not actually a proof. The
result is that physicists, operating under less stringent
constraints, often discover fascinating mathematical
phenomena long before mathematicians do.
Finding rigorous proofs to back up these discoveries
is often extremely hard: it is far more than a pedan-
to further mathematical discoveries. The articles ver-
tex operator algebras [IV.17](/part-04/vertex-operator-algebras), mirror symmetry