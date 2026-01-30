# The General Goals of Mathematical Research

I.4.   The General Goals of Mathematical Research

for the length of the path. Notice that if we write
x (t) and

rewrite x (t)2 + y (t)2 dt as dx 2 + dy2 , which is
the infinitesimal version of the expression δx 2 + δy 2
that we had earlier. We have just defined a Rieman-
nian metric, which is usually denoted by dx 2 + dy 2 .
This can be thought of as the square of the distance
between the point (x, y) and the infinitesimally close
point (x + dx, y + dy).
   If we want to, we can now prove that the shortest path
between two points (x0 , y0 ) and (x1 , y1 ) is a straight   ent Riemannian metrics on portions of Euclidean space,
line,
     which will tell us that the distance between them
is (x1 − x0 )2 + (y1 − y0 )2 . (A proof can be found
in variational methods [III.94](/part-03/variational-methods).) However, since we
could have just used this formula to begin with, this
example does not really illustrate what is distinctive
about Riemannian metrics. To do that, let us give a
more precise definition of the disk model for hyper-
bolic geometry, which was discussed in section 6.6.
There it was stated that distances become larger, rela-
tive to Euclidean distances, as one approaches the edge
of the disk. A more precise definition is that the open
unit disk is the set of all points (x, y) such that x 2 +
y 2 < 1 and that the Riemannian metric on this disk is
given by the expression (dx 2 +dy 2 )/(1−x 2 −y 2 ). This
is how we define the square of the distance between
(x, y) and (x + dx, y + dy). Equivalently, the length
of a path (x(t), y(t)) with respect to this Riemannian
metric is defined as

  More generally, a Riemannian metric on a portion of
the plane is an expression of the form

that is used to calculate infinitesimal distances and
hence lengths of paths. (In the disk model we took
E(x, y) and G(x, y) to be 1/(1 − x 2 − y 2 ) and F (x, y)
to be 0.) It is important for these distances to be
positive, which will turn out to be the case provided
that E(x, y)G(x, y) − F (x, y)2 is always positive. One
also needs the functions E, F , and G to satisfy certain
smoothness conditions.
  This definition generalizes straightforward ly to more
dimensions. In n dimensions we must use an expres-
sion of the form

47
to specify the squared distance between the points
 y (t) as dx/dt anddy/dt, then we can
bers Fij (x1 , . . . , xn ) form an n . imes n matrix that depends
on the point (x1 , . . . , xn ). This matrix is required to be
symmetric and positive definite: that is, Fij (x1 , . . . , xn )
should always equal Fji (x1 , . . . , xn ), and the expression
that determines the squared distance should always be
positive. It should also depend smoothly on the point
(x1 , . . . , xn ).
Finally, now that we know how to define many differ-
we have many potential ways to define metrics on the
charts that we use to define a manifold. A Riemannian
metric on a manifold is a way of choosing compatible
Riemannian metrics on the charts, where “compatible”
means that wherever two charts overlap the distances
should be the same. As mentioned earlier, once one
has done this, one can define the distance between two
points to be the length of a shortest path between them.
Given a Riemannian metric on a manifold, it is pos-
sible to define many other concepts, such as angles
and volumes. It is also possible to define the impor-
tant concept of curvature, which is discussed in ricci
flow [III.78](/part-03/ricci-flow). Another important definition is that of a
geodesic, which is the analogue for Riemannian geom-
etry of a straight line in Euclidean geometry. A curve C
is a geodesic if, given any two points P and Q on C that
are sufficiently close, the shortest path from P to Q is
part of C. For example, the geodesics on the sphere are
                                        the great circles.
1
x (t)2 + y (t)2                          As should be clear by now from the above discussion,
dt.
0    1 − x(t)2 − y(t)2
ble Riemannian metrics. A major theme in Riemannian
geometry is to choose one that is “best” in some way.
For example, on the sphere, if we take the obvious defi-
E(x, y) dx 2 + 2 F (x, y) dx dy + G(x, y) dy 2
is particularly symmetric, and this is a highly desirable
property. In particular, with this Riemannian metric
the curvature of the sphere is the same every where.
More generally, one searches for extra conditions to
impose on Riemannian metrics. Ideally, these condi-
tions should be strong enough that there is just one
Riemannian metric that satisfies them, or at least that
the family of such metrics should be very small.
I.4   The General Goals of
Mathematical Research

n
The previous article introduced many concepts that
Fij (x1 , . . . , xn ) dxi dxj .
i, j=1

48

what mathematicians do with those concepts, and the
sorts of questions they ask about them.

As we have seen in earlier articles, mathematics is full     x and y can be very much more general objects than
of objects and structures (of a mathematical kind), but
they do not simply sit there for our contemplation: we
also like to do things to them. For example, given a num-
ber, there will be contexts in which we want to dou-
ble it, or square it, or work out its reciprocal; given
a suitable function, we may wish to differentiate it;
given a geometrical shape, we may wish to transform
it; and so on.
   Transformations like these give rise to a never-end-
ing source of interesting problems. If we have defined
some mathematical process, then a rather obvious
mathematical project is to invent techniques for car-
rying it out. This leads to what one might call direct
questions about the process. However, there is also a
deeper set of inverse questions, which take the follow-
ing form. Suppose you are told what process has been
carried out and what answer it has produced. Can you
then work out what the mathematical object was that
the process was applied to? For example, suppose I tell
you that I have just taken a number and squared it,
and that the result was 9. Can you tell me the original
number?
   In this case the answer is more or less yes: it must
have been 3, except that if negative numbers are al-
lowed, then another solution is −3.
   If we want to talk more formally, then we say that
we have been examining the equation x2 = 9, and have
discovered that there are two solutions. This example
raises three issues that appear again and again.
  • Does a given equation have any solutions?
  • If so, does it have exactly one solution?
  • What is the set in which solutions are required to
    live?
The first two concerns are known as the existence and
the uniqueness of solutions. The third does not seem
particularly interesting in the case of the equation x 2 =   exactly one solution, just as these two do, which is easy
9, but in more complicated cases, such as partial dif-
ferential equations, it can be a subtle and important
question.
  To use more abstract language, suppose that f is a
function [I.2 §2.2](/part-01/language-and-grammar) and that we are faced with a state-
ment of the form f (x) = y. The direct question is to
work out y given what x is. The inverse question is

I. Introduction
to work out x given what y is: this would be called
solving the equation f (x) = y. Not surprisingly, ques-
tions about the solutions of an equation of this form
1   Solving Equations
of the function f , which were discussed in [I.2](/part-01/language-and-grammar). Because
numbers, the notion of solving equations is itself very
general, and for that reason it is central to mathematics.
1.1   Linear Equations
The very first equations a schoolchild meets will typi-
cally be ones like 2 x+3 = 17. To solve simple equations
like this, one treats x as an unknown number that obeys
the usual rules of arithmetic. By exploiting these rules
one can transform the equation into something much
simpler: subtracting 3 from both sides we learn that
2 x = 14, and dividing both sides of this new equation
by 2 we then discover that x = 7. If we are very careful,
we will notice that all we have shown is that if there is
some number x such that 2 x + 3 = 17 then x must be
7. What we have not shown is that there is any such x.
So strictly speaking there is a further step of checking
that 2 . imes 7 + 3 = 17. This will obviously be true here,
but the corresponding assertion is not always true for
more complicated equations so this final step can be
important.
The equation 2 x + 3 = 17 is called “linear” because
the function f we have performed on x (to multiply it
by 2 and add 3) is a linear one, in the sense that its graph
is a straight line. As we have just seen, linear equa-
tions involving a single unknown x are easy to solve,
but matters become considerably more sophisticated
when one starts to deal with more than one unknown.
Let us look at a typical example of an equation in two
unknowns, the equation 3 x + 2 y = 14. This equation
has many solutions: for any choice of y you can set
x = (14 − 2 y)/3 and you have a pair (x, y) that sat-
isfies the equation. To make it harder, one can take a
second equation as well, 5 x + 3 y = 22, say, and try to
solve the two equations simultaneously. Then, it turns
out, there is just one solution, namely x = 2 and y = 4.
Typically, two linear equations in two unknowns have
to see if one thinks about the situation geometrically.
An equation of the form ax + by = c is the equation
of a straight line in the xy-plane. Two lines normally
meet in a single point, the exceptions being when they
are identical, in which case they meet in infinitely many
points, or parallel but not identical, in which case they
do not meet at all.

I.4.     The General Goals of Mathematical Research

   If one has several equations in several unknowns, it
can be conceptually simpler to think of them as one
equation in one unknown. This sounds impossible, but
it is perfectly possible if the new unknown is allowed
to be a more complicated object. For example, the two
equations 3 x+2 y = 14 and 5 x+3 y = 22 can be rewrit-
ten as the following single equation involving matrices
and vectors:

If we let A stand for the matrix, x for the unknown col-
umn vector, and b for the known one, then this equa-
tion becomes simply Ax = b, which looks much less
complicated, even if in fact all we have done is hidden
the complication behind our notation.
   There is more to this process, however, than sweep-
ing dirt under the carpet. While the simpler notation
conceals many of the specific details of the problem,
it also reveals very clearly what would otherwise be
obscured: that we have a linear map from R2 to R2 and
we want to know which vectors x, if any, map to the
vector b. When faced with a particular set of simul-
taneous equations, this reformulation does not make
much difference—the calculations we have to do are
the same—but when we wish to reason more generally,
either directly about simultaneous equations or about
other problems where they arise, it is much easier to
think about a matrix equation with a single unknown
vector than about a collection of simultaneous equa-
tions in several unknown numbers. This phenomenon
occurs through out mathematics and is a major reason
for the study of high-dimensional spaces.
1.2
We have just discussed the generalization of linear
equations from one variable to several variables. An-
other direction in which one can generalize them is to
think of linear functions as polynomials of degree 1
and consider functions of higher degree. At school, for
example, one learns how to solve quadratic equations,
such as x 2 − 7 x + 12 = 0. More generally, a polynomial
equation is one of the form

   To solve such an equation means to find a value of x
for which the equation is true (or, better still, all such     given a solution to the equation x 2 = 2, we do not need
values). This may seem an obvious thing to say until
one considers a very simple example such as the equa-
tion x 2 − 2 = 0, or equivalently x 2 = 2. The solution to     all we need is some algebra. The solution, x = 3± 2, is

49
√this is, of course, x = ± 2. What, though, is 2? It is
defined to be the positive number that squares to 2, but
it does not seem to be much of a “solution” to the equa-
tion x 2 = 2 to say that x is plus or minus the positive
number that squares to 2. Neither does it seem entirely
satisfactory to say that x = 1.4142135 . . . , since this is
just the beginning of a calculation that never finishes
and does not result in any discernible pattern.

3 2
=      .                       example. One is that what matters about an equation
5 3
is often the existence and properties of solutions and
not so much whether one can find a formula for them.
Although we do not appear to learn anything when we
are told that the solutions to the equation x 2 = 2 are
. qrt{x} = ± 2, this assertion does contain within it a fact
that is not wholly obvious: that the number 2 has a
square root. This is usually presented as a consequence
of the intermediate value theorem (or another result of
a similar nature), which states that if f is a continuous
real-valued function and f (a) and f (b) lie on either
side of 0, then some where between a and b there must
be a c such that f (c) = 0. This result can be applied
to the function f (x) = x 2 − 2, since f (1) = −1 and
f (2) = 2. Therefore, there is some x between 1 and 2
such that x 2 −2 = 0, that is, x 2 = 2. For many purposes,
the mere existence of this x is enough, together with its
defining properties of being positive and squaring to 2.
A similar argument tells us that all positive real num-
bers have positive square roots. But the picture changes
when we try to solve more complicated quadratic equa-
tions. Then we have two choices. Consider, for exam-
ple, the equation x 2 − 6 x + 7 = 0. We could note that
x 2 − 6 x + 7 is −1 when x = 4 and 2 when x = 5 and
deduce from the intermediate value theorem that the
Polynomial Equations
equation has some solution between 4 and 5. However,
we do not learn as much from this as if we complete the
square, rewriting x 2 −6 x +7 as (x −3)2 −2. This allows
us to rewrite the equation as (x −3)2 = 2, which has the
√
two solutions x = 3 ± 2. We have already established
√
that 2 exists and lies between 1 and 2, so not only do
we have a solution of x 2 − 6 x + 7 = 0 that lies between
4 and 5, but we can see that it is closely related to,
indeed built out of, the solution to the equation x 2 = 2.
This demonstrates a second important aspect of equa-
an x n + an−1 x n−1 + · · · + a2 x 2 + a1 x + a0 = 0.
tion solving, which is that in many instances the explicit
solubility of an equation is a relative notion. If we are
any new input from the intermediate value theorem to
solve the more complicated equation x 2 − 6 x + 7 = 0:
√

$50$

given by an explicit expression, but inside that expres√ sion we have $2$ , which is not defined by means of an explicit formula but as a real number, with certain properties, that we can prove to exist. Solving polynomial equations of higher degree is markedly more difficult than solving quadratics, and raises fascinating questions.
In particular, there are complicated formulas for the solutions of cubic and quartic equations, but the problem of finding corresponding formulas for quintic and higher-degree equations became one of the most famous unsolved problems in mathematics, until abel [VI.33](/part-06/niels-henrik-abel-18021829) and galois [VI.41](/part-06/variste-galois-18111832) showed that it could not be done. For more details about these matters see the insolubility of the quintic [V.21](/part-05/the-insolubility-of-the-quintic) .
For another article related to polynomial equations see the fundamental theorem of algebra [V.13](/part-05/the-fundamental-theorem-of-algebra).

$1$ . $3$

Polynomial Equations in Several Variables Suppose that we are faced with an equation such as $x^{3} + y^{3} + z^{3} = 3x^{2}y + 3y^{2}z + 6xyz$ . We can see straight away that there will be many solutions: if you fix $x$ and $y$, then the equation is a cubic polynomial in z, and all cubics have at least one (real) solution. Therefore, for every choice of $x$ and $y$ there is some z such that the triple (x , y, z) is a solution of the above equation.
Because the formula for the solution of a general cubic equation is rather complicated, a precise specification of the set of all triples (x , y, z) that solve the equation may not be very enlightening. However, one can learn a lot by regarding this solution set as a geometric object--a two-dimensional surface in space, to be precise--and asking qualitative questions about it. One might, for instance, wish to understand roughly what shape it is. Questions of this kind can be made precise using the language and concepts of topology [I.3](/part-01/fundamental-definitions) .
One can of course generalize further and consider simultaneous solutions to several polynomial equations. Understanding the solution sets of such systems of equations is the province of algebraic geometry [IV.4](/part-04/algebra).

$1$ . $4$

Diophantine Equations

As has been mentioned, the answer to the question of whether a particular equation has a solution varies according to where the solution is allowed to be. The

I. Introduction

equation $x^{2} + 3 = 0$ has no solution if x is required to be real, but in the complex numbers it has the two √ solutions $x =$ ±$i_{3}$ . The equation $x^{2} + y^{2} = 11$ has infinitely many solutions if we are looking for $x$ and $y$ in the real numbers, but none if they have to be integers. This last example is a typical Diophantine equation, the name given to an equation if one is looking for integer solutions.
The most famous Diophantine equation is the Fermat equation x n  +  y $n = z$ n , which is now known, thanks to Andrew Wiles, to have no positive integer solutions if n is greater than $2$ . (See fermat’s last theorem [V.10](/part-05/fermats-last-theorem). By contrast, the equation $x^{2} + y^{2} = z^{2}$ has infinitely many solutions .  )  A great deal of modern algebraic number theory [IV.1](/part-04/number-theory) is concerned with Diophantine equations, either directly or indirectly.
As with equations in the real and complex numbers, it is often fruitful to study the structure of sets of solutions to Diophantine equations: this investigation belongs to the area known as arithmetic geometry [IV.5](/part-04/arithmetic-geometry). A not able feature of Diophantine equations is that they tend to be extremely difficult. It is therefore natural to wonder whether there could be a systematic approach to them. This question was the tenth in a famous list of problems asked by hilbert [VI.63](/part-06/david-hilbert-18621943) in 1900 .
It was not until 1970 that Yuri Matiyasevitch, building on work by Martin Davis, Julia Robinson, and Hilary Putnam, proved that the answer was no. (This is discussed further in the insolubility of the halting problem [V.20](/part-05/the-insolubility-of-the-halting-problem).) An important step in the solution was taken in 1936 , by church [VI.89](/part-06/alonzo-church-19031995) and turing [VI.94](/part-06/alan-turing-19121954) .
This was to make precise the notion of a “systematic approach,” by formalizing (in two different ways) the notion of an algorithm (see algorithms [II.4](/part-02/algorithms) and computational complexity [IV.20](/part-04/computational-complexity)) . It was not easy to do this in the pre-computer age, but now we can restate the solution of Hilbert’s tenth problem as follows: there is no computer program that can take as its input any Diophantine equation, and with out fail print “YES” if it has a solution and “NO” otherwise. What does this tell us about Diophantine equations?
We can no longer dream of a final theory that will encompass them all, so instead we are forced to restrict our attention to individual equations or special classes of equations, continually developing different methods for solving them. This would make them uninteresting after the first few, were it not for the fact that specific Diophantine equations have remarkable links with very general questions in other parts of mathematics. For

I.4.   The General Goals of Mathematical Research

example, equations of the form y 2 = f (x), where f (x)
is a cubic polynomial in x, may look rather special, but
in fact the elliptic curves [III.21](/part-03/elliptic-curves) that they define are
central to modern number theory, including the proof
of Fermat’s last theorem. Of course, Fermat’s last theo-
rem is itself a Diophantine equation, but its study has
led to major developments in other parts of number
theory. The correct moral to draw is perhaps this: solv-
ing a particular Diophantine equation is fascinating and
worthwhile if, as is often the case, the result is more
than a mere addition to the list of equations that have
been solved.
1.5    Differential Equations
So far, we have looked at equations where the unknown
is either a number or a point in n-dimensional space
(that is, a sequence of n numbers). In order to generate
these equations, we took various combinations of the
basic arithmetical operations and applied them to our
unknowns.
   Here, for comparison, are two well-known differential
equations, the first “ordinary” and the second “partial”:

The first is the equation for simple harmonic motion,
which has the general solution x(t) = A sin kt +
B cos kt; the second is the heat equation, which was
discussed in some fundamental mathematical def-
initions [I.3 §5.4](/part-01/fundamental-definitions).
  For many reasons, differential equations represent a
jump in sophistication. One is that the unknowns are
functions, which are much more complicated objects
than numbers or n-dimensional points. (For example,
the first equation above asks what function x of t has
the property that if you differentiate it twice then you
get −k2 times the original function.) A second is that
the basic operations one performs on functions include
differentiation and integration, which are considerably
less “basic” than addition and multiplication. A third is     orbits around the Sun, but for three or more bodies
that differential equations that can be solved in “closed
form,” that is, by means of a formula for the unknown
function f , are the exception rather than the rule, even     can lead to chaotic behavior. (See dynamics [IV.14](/part-04/dynamics) for
when the equations are natural and important.
  Consider again the first equation above. Suppose
that, given a function f , we write φ(f ) for the function    chaos and stability.
(d2 f /dt 2 ) + k2 f . Then φ is a linear map, in the sense
that φ(f + g) = φ(f ) + φ(g) and φ(af ) = aφ(f ) for

51
any constant a. This means that the differential equa-
tion can be regarded as something like a matrix equa-
tion, but generalized to infinitely many dimensions.
The heat equation has the same property: if we define
ψ(T ) to be
∂T    ∂2 T    ∂2 T   ∂2 T
−κ    2
+    2
+      ,
∂t    ∂x     ∂y     ∂z 2
then ψ is another linear map. Such differential equa-
tions are called linear , and the link with linear algebra
makes them markedly easier to solve. (A very useful
tool for this is the fourier transform [III.27](/part-03/the-fourier-transform).)
What about the more typical equations, the ones that
cannot be solved in closed form? Then the focus shifts
once again toward establishing whether or not solu-
tions exist, and if so what properties they have. As with
polynomial equations, this can depend on what you
count as an allowable solution. Some times we are in the
position we were in with the equation x 2 = 2: it is not
too hard to prove that solutions exist and all that is left
to do is name them. A simple example is the equation
2
dy/dx = e−x . In a certain sense, this cannot be solved:
it can be shown that there is no function built out of
d2 x
+ k2 x = 0,                                                                             2
dt 2                                      ric functions [III.92](/part-03/trigonometric-functions) that differentiates to e−x . How-
∂T     ∂2 T     ∂2 T     ∂2 T
=κ
∂t     ∂x 2    ∂y 2    ∂z2
√
resulting function (when divided by 2π ) is the nor-
mal distribution [III.71 §5](/part-03/probability-distributions) function. The normal dis-
tribution is of fundamental importance in probability,
so the function is given a name, Φ.
In most situations, there is no hope of writing down
a formula for a solution, even if one allows one self to
integrate “known” functions. A famous example is the
so-called three-body problem [V.33](/part-05/the-three-body-problem): given three bod-
ies moving in space and attracted to each other by grav-
itational forces, how will they continue to move? Using
Newton’s laws, one can write down some differential
equations that describe this situation. newton [VI.14](/part-06/isaac-newton-16421727)
solved the corresponding equations for two bodies,
and there by explained why planets move in elliptical
they proved very hard indeed to solve. It is now known
that there was a good reason for this: the equations
more about chaos.) However, this opens up a new and
very interesting avenue of research into questions of
Some times there are ways of proving that solutions
exist even if they cannot be easily specified. Then

52

one may ask not for precise formulas, but for general
descriptions. For example, if the equation has a time
dependence (as, for instance, the heat equation and
wave equations have), one can ask whether solutions
tend to decay over time, or blow up, or remain roughly
the same. These more qualitative questions concern
what is known as asymptotic behavior, and there are
techniques for answering some of them even when a
solution is not given by a tidy formula.
   As with Diophantine equations, there are some spe-
cial and important classes of partial differential equa-
tions, including nonlinear ones, that can be solved
exactly. This gives rise to a very different style of
research: again one is interested in properties of solu-
tions, but now these properties may be more algebraic
in nature, in the sense that exact formulas will play
a more important role. See linear and nonlinear
waves and solitons [III.49](/part-03/linear-and-nonlinear-waves-and-solitons).
If one is trying to understand a new mathematical struc-
ture, such as a group [I.3 §2.1](/part-01/fundamental-definitions) or a manifold [I.3 §6.9](/part-01/fundamental-definitions),
one of the first tasks is to come up with a good supply
of examples. Some times examples are very easy to find,
in which case there may be a bewildering array of them
that cannot be put into any sort of order. Often, how-
ever, the conditions that an example must satisfy are
quite stringent, and then it may be possible to come up
with something like an infinite list that includes every
single one. For example, it can be shown that any vec-
tor space [I.3 §2.3](/part-01/fundamental-definitions) of dimension n over a field F is iso-
morphic to Fn . This means that just one positive inte-
ger, n, is enough to determine the space completely. In
this case our “list” will be {0}, F, F2 , F3 , F4 , . . . . In such   dron, the dodecahedron, and the icosahedron. It is not
a situation we say that we have a classification of the
mathematical structure in question.
   Classifications are very useful because if we can clas-
sify a mathematical structure then we have a new way
of proving results about that structure: instead of de-
ducing a result from the axioms that the structure is
required to satisfy, we can simply check that it holds
for every example on the list, confident in the know-
ledge that we have there by proved it in general. This
is not always easier than the more abstract, axiomatic
approach, but it certainly is some times. Indeed, there
are several results proved using classifications that
nobody knows how to prove in any other way. More gen-
erally, the more examples you know of a mathematical
structure, the easier it is to think about that structure—
testing hypotheses, finding counterexamples, and so

I. Introduction
on. If you know all the examples of the structure, then
for some purposes your understanding is complete.
2.1   Identifying Building Blocks and Families
There are two situations that typically lead to inter-
esting classification theorems. The boundary between
them is some what blurred, but the distinction is clear
enough to be worth making, so we shall discuss them
separately in this subsection and the next.
As an example of the first kind of situation, let us
look at objects called regular polytopes. Polytopes are
polygons, polyhedra, and their higher-dimensional gen-
eralizations. The regular polygons are those for which
all sides have the same length and all angles are equal,
and the regular polyhedra are those for which all faces
are congruent regular polygons and every vertex has
the same number of edges coming out of it. More gener-
ally, a higher-dimensional polytope is regular if it is as
2   Classifying                                symmetrical as possible, though the precise definition
of this is some what complicated. (Here, in three dimen-
sions, is a definition that turns out to be equivalent to
the one just given but easier to generalize. A flag is a
triple (v, e, f ) where v is a vertex of the polyhedron, e
is an edge containing v, and f is a face containing e. A
polyhedron is regular if for any two flags (v, e, f ) and
(v , e , f ) there is a symmetry of the polyhedron that
takes v to v , e to e , and f to f .)
It is easy to see what the regular polygons are in two
dimensions: for every k greater than 2 there is exactly
one regular k-gon and that is all there is. In three dimen-
sions, the regular polyhedra are the famous Platonic
solids, that is, the tetrahedron, the cube, the octahe-
too hard to see that there cannot be any more regu-
lar polyhedra, since there must be at least three faces
meeting at each vertex, and the angles at that vertex
must add up to less than 360◦ . This constraint means
that the only possibilities for the faces at a vertex are
three, four, or five triangles, three squares, or three
pentagons. These give the tetrahedron, the octahe-
dron, the icosahedron, the cube, and the dodecahedron,
respectively.
Some of the polygons and polyhedra just defined
have natural higher-dimensional analogues. For exam-
ple, if you take n + 1 points in Rn all at the same dis-
tance from one another, then they form the vertices
of a regular simplex, which is an equilateral triangle
or regular tetrahedron when n = 2 or 3. The set of
all points (x1 , x2 , . . . , xn ) with 0 ⩽ xi ⩽ 1 for every i

I.4.   The General Goals of Mathematical Research

forms the n-dimensional analogue of a unit square or
cube. The octahedron can be defined as the set of all
points (x, y, z) in R3 such that |x| + |y| + |z| ⩽ 1, and
the analogue of this in n dimensions is the set of all
points (x1 , x2 , . . . , xn ) such that |x1 | + · · · + |xn | ⩽ 1.
  It is not obvious how the dodecahedron and icosa-
hedron would lead to infinite families of regular poly-
topes, and it turns out that they do not. In fact, apart
from three more examples in four dimensions, the
above polytopes constitute a complete list. These three
examples are quite remarkable. One of them has 120
“three-dimensional faces,” each of which is a regular
dodecahedron. It has a so-called dual, which has 600
regular tetrahedra as its “faces.” The third example
can be described in terms of coordinates: its vertices
are the sixteen points of the form (±1, ±1, ±1, ±1),
together with the eight points (±2, 0, 0, 0), (0, ±2, 0, 0),
(0, 0, ±2, 0), and (0, 0, 0, ±2).
   The theorem that these are all the regular polytopes
is significantly harder to prove than the result sketched
above for three dimensions. The complete list was
obtained by Schäfli in the mid nineteenth century; the
first proof that there are no others was given by Donald
Coxeter in 1969.
   We therefore know that the regular polytopes in di-
men sions three and higher fall into three families—the
n-dimensional versions of the tetrahedron, the cube,
and the octahedron—together with five “exceptional”
examples—the dodecahedron, the icosahedron, and the
three four-dimensional polytopes just described. This
situation is typical of many classification theorems. The
exceptional examples, often called “sporadic,” tend to
have a very high degree of symmetry—it is almost as
if we have no right to expect this degree of symmetry
to be possible, but just occasionally by a happy chance
it is. The families and sporadic examples that occur in
different classification results are often closely related,
and this can be a sign of deep connections between
areas that do not at first appear to be connected at all.

  Some times, instead of trying to classify all mathe-
mat ical structures of a given kind, one identifies a cer-
tain class of “basic” structures out of which all the
others can be built in a simple way. A good analogy
for this is the set of primes, out of which all other
integers can be built as products. Finite groups, for
example, are all “products” of certain basic groups that
are called simple. the classification of finite sim-
ple groups [V.7](/part-05/the-classication-of-finite-simple-groups), one of the most famous theorems of
twentieth-century mathematics, is discussed in part V.

53
For more on this style of classification theorem, see
also lie theory [III.48](/part-03/lie-theory).
2.2   Equivalence, Nonequivalence, and Invariants
There are many situations in mathematics where two
objects are, strictly speaking, different, but where we
are not interested in the difference. In such situations
we want to regard the objects as “essentially the same,”
or “equivalent.” Equivalence of this kind is expressed
formally by the notion of an equivalence relation
[I.2 §2.3](/part-01/language-and-grammar).
For example, a topologist regards two shapes as
essentially the same if one is a continuous deforma-
tion of the other, as we saw in [I.3 §6.4](/part-01/fundamental-definitions). As pointed out
there, a sphere is the same as a cube in this sense, and
one can also see that the surface of a doughnut, that
is, a torus, is essentially the same as the surface of a
teacup. (To turn the teacup into a doughnut, let the han-
dle expand while the cup part is gradually swallowed up
into it.) It is equally obvious, intuitively speaking, that
a sphere is not essentially the same as a torus, but this
is much harder to prove.
Why should nonequivalence be harder to prove than
equivalence? The answer is that in order to show that
two objects are equivalent, all one has to do is find a sin-
gle transformation that demonstrates this equivalence.
However, to show that two objects are not equivalent,
one must some how consider all possible transforma-
tions and show that not one of them works. How can
one rule out the existence of some wildly complicated
continuous deformation that is impossible to visualize
but happens, remarkably, to turn a sphere into a torus?
Here is a sketch of a proof. The sphere and the torus
are examples of compact orientable surfaces, which
means, roughly speaking, two-dimensional shapes that
occupy a finite portion of space and have no boundary.
Given any such surface, one can find an equivalent sur-
face that is built out of triangles and is topologically
the same. Here is a famous theorem of euler [VI.19](/part-06/leonhard-euler-17071783).
Let P be a polyhedron that is topologically the same as
a sphere, and suppose that it has V vertices, E edges,
and F faces. Then V − E + F = 2.
For example, if P is an icosahedron, then it has twelve
vertices, thirty edges, and twenty faces, and 12−30+20
is indeed equal to 2.
For this theorem, it is not in fact important that the
triangles are flat: we can draw them on the original
sphere, except that now they are spherical triangles. It
is just as easy to count vertices, edges, and faces when

54

we do this, and the theorem is still valid. A network of
triangles drawn on a sphere is called a triangulation of
the sphere.
   Euler’s theorem tells us that V − E + F = 2 regard less     work only part of the time.
of what triangulation of the sphere we take. More over,
the formula is still valid if the surface we triangulate
is not a sphere but another shape that is topologically
equivalent to the sphere, since triangulations can be
continuously deformed with out V , E, or F changing.
   More generally, one can triangulate any surface, and
evaluate V − E + F . The result is called the Euler charac-   φ(X) is different from φ(Y ). There is not much use in
teristic of that surface. For this definition to make sense,
we need the following fact, which is a generalization of
Euler’s theorem (and which is not much harder to prove
than the original result).
 (i) Although a surface can be triangulated in many
     ways, the quantity V − E + F will be the same for
     all triangulations.
If we continuously deform the surface and continu-
ously deform one of its triangulations at the same
time, we can deduce that the Euler characteristic of
the new surface is the same as that of the old one. In
other words, fact (i) above has the following interesting
consequence.
 (ii) If two surfaces are continuous deformations of each     if and only if it is of the form 2 − 2 g for some nonneg a-

This gives us a potential method for showing that sur-
faces are not equivalent: if they have different Euler
characteristics then we know from the above that they
are not continuous deformations of each other. The
Euler characteristic of the torus turns out to be 0 (as
one can show by calculating V − E + F for any triangu-
lation), and that completes the proof that the sphere
and the torus are not equivalent.
  The Euler characteristic is an example of an invari-
ant. This means a function φ, the domain of which is
the set of all objects of the kind one is studying, with
the property that if X and Y are equivalent objects,
then φ(X) = φ(Y ). To show that X is not equivalent
to Y , it is enough to find an invariant φ for which
φ(X) and φ(Y ) are different. Some times the values φ
takes are numbers (as with the Euler characteristic), but     story. However clear a piece of mathematics may seem,
often they will be more complicated objects such as
polynomials or groups.
  It is perfectly possible for φ(X) to equal φ(Y ) even
when X and Y are not equivalent. An extreme example
would be the invariant φ that simply took the value 0

I. Introduction
for every object X. However, some times it is so hard to
prove that objects are not equivalent that invariants can
be considered useful and interesting even when they
There are two main properties that one looks for in
an invariant φ, and they tend to pull in opposite direc-
tions. One is that it should be as fine as possible: that
is, as often as possible φ(X) and φ(Y ) are different if
X and Y are not equivalent. The other is that as often as
possible one should actually be able to establish when
having a fine invariant if it is impossible to calculate.
(An extreme example would be the “trivial” invariant
that simply mapped each X to its equivalence class. It
is as fine as possible, but unless we have some indepen-
dent means of specifying it, then it does not represent
an advance on the original problem of showing that two
objects are not equivalent.) The most powerful invari-
ants therefore tend to be ones that can be calculated,
but not very easily.
In the case of compact orientable surfaces, we are
lucky: not only is the Euler characteristic an invariant
that is easy to calculate, but it also classifies the com-
pact orientable surfaces completely. To be precise, k is
the Euler characteristic of a compact orientable surface
other, then they have the same Euler characteristic.    tive integer g (so the possible Euler characteristics are
2, 0, −2, −4, . . . ), and two compact orientable surfaces
with the same Euler characteristic are equivalent. Thus,
if we regard equivalent surfaces as the same, then the
number g gives us a complete specification of a sur-
face. It is called the genus of the surface, and can be
interpreted geometrically as the number of “holes” the
surface has (so the genus of the sphere is 0 and that of
the torus is 1).
For other examples of invariants, see algebraic
topology [IV.6](/part-04/algebraic-topology) and knot polynomials [III.44](/part-03/knot-polynomials).
3   Generalizing
When an important mathematical definition is formu-
lated, or theorem proved, that is rarely the end of the
it is nearly always possible to understand it better, and
one of the most common ways of doing so is to present
it as a special case of something more general. There
are various different kinds of generalization, of which
we discuss a few here.

I.4.   The General Goals of Mathematical Research

3.1    Weakening Hypotheses and Strengthening

The number 1729 is famous for being expressible as the
sum of two cubes in two different ways: it is 13 +123 and
also 93 + 103 . Let us now try to decide whether there is
a number that can be written as the sum of four cubes
in ten different ways.
   At first this problem seems alarmingly difficult. It is
clear that any such number, if it exists, must be very
large and would be extremely tedious to find if we sim-
ply tested one number after another. So what can we
do that is better than this?
   The answer turns out to be that we should weaken
our hypotheses. The problem we wish to solve is of
the following general kind. We are given a sequence
a1 , a2 , a3 , . . . of positive integers and we are told that it
has a certain property. We must then prove that there
is a positive integer that can be written as a sum of
four terms of the sequence in ten different ways. This
is perhaps an artificial way of thinking about the prob-
lem since the property we assume of the sequence is
the property of “being the sequence of cubes,” which
is so specific that it is more natural to think of it as
an identification of the sequence. However, this way of
thinking encourages us to consider the possibility that
the conclusion might be true for a much wider class of
sequences. And indeed this turns out to be the case.
   There are a thousand cubes less than or equal to
1 000 000 000. We shall now see that this property alone
is sufficient to guarantee that there is a number that
can be written as the sum of four cubes in ten different
ways. That is, if a1 , a2 , a3 , . . . is any sequence of pos-
itive integers, and if none of the first thousand terms
exceeds 1 000 000 000, then some number can be writ-
ten as the sum of four terms of the sequence in ten
different ways.
   To prove this, all we have to do is notice that the num-
ber of different ways of choosing four distinct terms
from the sequence a1 , a2 , . . . , a1000 is 1000 . imes 999 . imes 998 . imes 997/24, which is greater than 40 . imes 1 000 000 000. The
sum of any four terms of the sequence cannot exceed
4 . imes 1 000 000 000. It follows that the average number of
ways of writing one of the first 4 000 000 000 numbers
as the sum of four terms of the sequence is at least ten.
But if the average number of representations is at least
ten, then there must certainly be numbers that have at
least this number of representations.
   Why did it help to generalize the problem in this
way? One might think that it would be harder to prove

55
a result if one assumed less. However, that is often
Conclusions
have when trying to use your assumptions, and that
can speed up the search for a proof. Had we not gen-
eralized the problem above, we would have had too
many options. For instance, we might have found our-
selves trying to solve very difficult Diophantine equa-
tions involving cubes rather than noticing the easy
counting argument. In a way, it was only once we had
weakened our hypotheses that we understood the true
nature of the problem.
We could also think of the above generalization as a
strengthening of the conclusion: the problem asks for
a statement about cubes, and we prove not just that
but much more be sides. There is no clear distinction
between weakening hypotheses and strengthening con-
clusions, since if we are asked to prove a statement
of the form P ⇒ Q, we can always reformulate it as
¬Q ⇒ ¬P . Then, if we weaken P we are weakening the
hypotheses of P ⇒ Q but strengthening the conclusion
of ¬Q ⇒ ¬P .
3.2   Proving a More Abstract Result
A famous result in modular arithmetic, known as fer-
mat’s little theorem [III.58](/part-03/modular-arithmetic), states that if p is a
prime and a is not a multiple of p, then ap−1 leaves
a remainder of 1 when you divide by p. That is, ap−1 is
congruent to 1 mod p.
There are several proofs of this result, one of which
is a good illustration of a certain kind of generalization.
Here is the argument in out line. The first step is to show
that the numbers 1, 2, . . . , p − 1 form a group [I.3 §2.1](/part-01/fundamental-definitions)
under multiplication mod p. (This means multiplica-
tion followed by taking the remainder on division by p.
For example, if p = 7 then the “product” of 3 and 6 is 4,
since 4 is the remainder when you divide 18 by 7.) The
next step is to note that if 1 ⩽ a ⩽ p−1 then the powers
of a (mod p) form a subgroup of this group. More over,
the size of the subgroup is the smallest positive inte-
ger m such that am is congruent to 1 mod p. One then
applies Lagrange’s theorem, which states that the size
of a group is always divisible by the size of any of its
subgroups. In this case, the size of the group is p − 1,
from which it follows that p − 1 is divisible by m. But
then, since am = 1, it follows that ap−1 = 1.
This argument shows that Fermat’s little theorem is,
when viewed appropriately, just one special case of
Lagrange’s theorem. (The word “just” is, however, a lit-
tle misleading, because it is not wholly obvious that the

$56$

integers mod p form a group in the way stated. This fact is proved using euclid’s algorithm [III.22] .) Fermat could not have viewed his theorem in this way, since the concept of a group had not been invented when he proved it. Thus, the abstract concept of a group helps one to see Fermat’s little theorem in a completely new way: it can be viewed as a special case of a more general result, but a result that cannot even be stated until one has developed some new, abstract concepts. This process of abstraction has many benefits.
Most obviously, it provides us with a more general theorem, one that has many other interesting particular cases. Once we see this, then we can prove the general result once and for all rather than having to prove each case separately. A related benefit is that it enables us to see connections between results that may originally have seemed quite different. And finding surprising connections between different areas of mathematics almost always leads to significant advances in the subject.

$3$ . $3$

Identifying Characteristic Properties

There is a marked contrast between the way one defines √$2$ and the way one defines $- 1$ , or i as it is usually written. In the former case one begins, if one is being careful, by proving that there is exactly one positive real √ number that squares to $2$ . Then $2$ is defined to be this number. This style of definition is impossible for i since there is no real number that squares to $- 1$ . So instead one asks the following question: if there were a number that squared to $- 1$ , what could one say about it?
Such a number would not be a real number, but that does not rule out the possibility of extending the real number system to a larger system that contains a square root of $- 1$ . At first it may seem as though we know precisely one thing about  i: that $i^{2} = - 1$ . But if we assume in addition that i obeys the normal rules of arithmetic, then we can do more interesting calculations, such as (i + 1)2 = i2 + 2 i + 1 = - 1 + 2 i + 1 = 2 i , √ which implies that $(i + 1)/ 2$ is $a$ square root of i.
From these two simple assumptions--that $i^{2} = - 1$ and that i obeys the usual rules of arithmetic--we can develop the entire theory of complex numbers [I.3](/part-01/fundamental-definitions) with out ever having to worry about what i actually is. And in fact, once you stop to think about it, I. Introduction √ the existence of $2$ , though reassuring, is not in practice anything like as important as its defining properties, which are very similar to those of i: it squares to $2$ and obeys the usual rules of arithmetic. Many important mathematical generalizations work in a similar way.
Another example is the definition of x a when $x$ and $a$ are real numbers with x positive. It is difficult to make sense of this expression in a direct way unless a is a positive integer, and yet mathematicians are completely comfortable with it, whatever the value of a. How can this be? The answer is that what really matters about x a is not its numerical value but its characteristic properties when one thinks of it as a function of a. The most important of these is the property that x a + $b = x$ a x b .
Together with a couple of other simple properties, this completely determines the function x a . More importantly, it is these characteristic properties that one uses when reasoning about x a . This example is discussed in more detail in the exponential and logarithmic functions [III.25](/part-03/the-exponential-and-logarithmic-functions). There is an interesting relationship between abstraction and classification.
The word “abstract” is often used to refer to a part of mathematics where it is more common to use characteristic properties of an object than it is to argue directly from a definition of √ the object itself (though , as the example of $2$ shows, this distinction can be some what hazy). The ultimate in abstraction is to explore the consequences of a system of axioms, such as those for a group or a vector space. However, some times, in order to reason about such algebraic structures, it is very helpful to classify them, and the result of classification is to make them more concrete again.
For instance, every finite dimensional real vector space V is isomorphic to R n for some nonnegative integer n, and it is some times helpful to think of V as the concrete object R n , rather than as an algebraic structure that satisfies certain axioms. Thus, in a certain sense, classification is the opposite of abstraction. $3$ . $4$

Generalization after Reformulation

Dimension is a mathematical idea that is also a familiar part of everyday language: for example, we say that a photograph of a chair is a two-dimensional representation of a three-dimensional object, because the chair has height, breadth, and depth, but the image just has height and breadth. Roughly speaking, the dimension of a shape is the number of independent directions one can move about in while staying inside the shape,

I.4.   The General Goals of Mathematical Research

and this rough conception can be made mathematically
precise (using the notion of a vector space [I.3 §2.3](/part-01/fundamental-definitions)).
   If we are given any shape, then its dimension, as one
would normally understand it, must be a nonnegative
integer: it does not make much sense to say that one can
move about in 1.4 independent directions, for example.
And yet there is a rigorous mathematical theory of frac-
tional dimension, in which for every nonnegative real
number d you can find many shapes of dimension d.
   How do mathematicians achieve the seemingly im-
possible? The answer is that they reformulate the con-
cept of dimension and only then do they generalize it.
What this means is that they give a new definition of
dimension with the following two properties.
  (i) For all “simple” shapes the new definition agrees

 (ii) With the new definition it is no longer obvious that

There are several ways of doing this, but most of them
focus on the differences between length, area, and vol-
ume. Notice that a line segment of length 2 can be
expressed as a union of two nonoverlapping line seg-
ments of length 1, a square of side-length 2 can be
expressed as a union of four nonoverlapping squares
of side-length 1, and a cube of side-length 2 can be
expressed as a union of eight nonoverlapping cubes of
side-length 1. It is because of this that if you enlarge a d-   same function, the algebra C(X) is a commutative
dimensional shape by a factor r , then its d-dimensional
“volume” is multiplied by r d . Now suppose that you
would like to exhibit a shape of dimension 1.4. One way
of doing it is to let r = 25/7 , so that r 1.4 = 2, and find     terms, continue to make sense for noncommutative C ∗ -
a shape X such that if you expand X by a factor of r ,
then the expanded shape can be expressed as a union
of two disjoint copies of X. Two copies of X ought to
have twice the “volume” of X itself, so the dimension
d of X ought to satisfy the equation r d = 2. By our
choice of r , this tells us that the dimension of X is 1.4.     mathematics. Let us briefly look at a third example. the
For more details, see dimension [III.17](/part-03/dimension).
   Another concept that seems at first to make no sense
is noncommutative geometry. The word “commutative”
applies to binary operations [I.2 §2.4](/part-01/language-and-grammar) and therefore
belongs to algebra rather than geometry, so what could
“noncommutative geometry” possibly mean?
   By now the answer should not be a surprise: one
reformulates part of geometry in terms of a certain

57
algebraic structure and then generalizes the algebra.
The algebraic structure involves a commutative binary
operation, so one can generalize the algebra by allowing
the binary operation not to be commutative.
The part of geometry in question is the study of
manifolds [I.3 §6.9](/part-01/fundamental-definitions). Associated with a manifold X is
the set C(X) of all continuous complex-valued func-
tions defined on X. Given two functions f , g in C(X),
and two complex numbers . ambda and μ, the linear combi-
nation . ambda f + \mu g is another continuous complex-valued
function, so it also belongs to C(X). Therefore, C(X)
is a vector space. However, one can also multiply f
and g to form the continuous function f g (defined by
(f g)(x) = f (x)g(x)). This multiplication has various
natural properties (for instance, f (g + h) = f g + f h
for all functions f , g, and h) that make C(X) into an
with the old one. For example, under the new defi-
nition a line will still be one dimensional, a square     that a great deal of the geometry of a compact mani-
two dimensional, and a cube three dimensional.
responding C ∗ -algebra C(X). The word “purely” here
the dimension of every shape must be a positive
integer.
defined—all one uses is the fact that C(X) is an alge-
bra. This raises the possibility that there might be alge-
bras that do not arise geometrically, but to which the
reformulated geometrical concepts nevertheless apply.
An algebra has two binary operations: addition and
multiplication. Addition is always assumed to be com-
mutative, but multiplication is not: when multiplica-
tion is commutative as well, one says that the alge-
bra is commutative. Since f g and gf are clearly the
C ∗ -algebra, so the algebras that arise geometrically are
always commutative. However, many geometrical con-
cepts, once they have been reformulated in algebraic
algebras, and that is why the phrase “noncommuta-
tive” geometry is used. For more details, see operator
algebras [IV.15 §5](/part-04/operator-algebras).
This process of reformulating and then generalizing
under lies many of the most important advances in
fundamental theorem of arithmetic [V.14](/part-05/the-fundamental-theorem-of-arithmetic) is, as its
name suggests, one of the foundation stones of number
theory: it states that every positive integer can be writ-
ten in exactly one way as a product of prime numbers.
However, number theorists like to look at enlarged
number systems, and for most of these the obvious
analogue of the fundamental theorem of arithmetic is
no longer true. For example, in the ring [III.81 §1](/part-03/rings-ideals-and-modules) of

58

numbers of the form a + b −5 (where a and b are
required to be integers), the number 6 can be writ-
ten either as 2 . imes 3 or as (1 + −5) × (1 − −5). Since
none of the numbers 2, 3, 1 + −5, or 1 − −5 can be
decomposed further, the number 6 has two genuinely
different prime factorizations in this ring.
   There is, however, a natural way of generalizing
the concept of “number” to include ideal numbers
[III.81 §2](/part-03/rings-ideals-and-modules) that allow one to prove a version of the fun-
da mental theorem of arithmetic in rings such as the
one just defined. First, we must reformulate: we asso-
ciate with each number γ the set of all its multiples
δγ, where δ belongs to the ring. This set, which is
denoted (γ), has the following closure property: if α
and β belong to (γ) and δ and  are any two elements
of the ring, then δα + β belongs to (γ).
   A subset of a ring with that closure property is called   from one variable to several variables are so interest-
an ideal. If the ideal is of the form (γ) for some num-
ber γ, then it is called a principal ideal. However, there   able to several variables, we can also think of what we
are ideals that are not principal, so we can think of the    are doing as generalizing from a one-dimensional set-
set of ideals as generalizing the set of elements of the     ting to a higher-dimensional setting. This idea leads
original ring (once we have reformulated each element
γ as the principal ideal (γ)). It turns out that there are   techniques from one area to be used to great effect in
natural notions of addition and multiplication that can
be applied to ideals. More over, it makes sense to define
an ideal I to be “prime” if the only way of writing I as
a product JK is if one of J and K is a “unit.” In this
enlarged set, unique factorization turns out to hold.
These concepts give us a very useful way to measure
“the extent to which unique factorization fails” in the
original ring. For more details, see algebraic numbers
[IV.1 §7](/part-04/number-theory).
3.5   Higher Dimensions and Several Variables
We have already seen that the study of polynomial
equations becomes much more complicated when one
looks not just at single equations in one variable,
but at systems of equations in several variables. Sim-
ilarly, we have seen that partial differential equa-
tions [I.3 §5.4](/part-01/fundamental-definitions), which can be thought of as differ en-
tial equations involving several variables, are typically    very hard to check, the consensus is that it is probably
much more difficult to analyze than ordinary differ en-
tial equations, that is, differential equations in just one
variable. These are two not able examples of a process
that has generated many of the most important prob-
lems and results in mathematics, particularly over the
last century or so: the process of generalization from
one variable to several variables.
   Suppose one has an equation that involves three real
variables, x, y, and z. It is often useful to think of

I. Introduction
√√
Figure 1 The densest possible
packing of circles in the plane.
the triple (x, y, z) as an object in its own right, rather
than as a collection of three numbers. Further more,
this object has a natural interpretation: it represents
a point in three-dimensional space. This geometrical
interpretation is important, and goes a long way toward
explaining why extensions of definitions and theorems
ing. If we generalize a piece of algebra from one vari-
to many links between algebra and geometry, allowing
the other.
4   Discovering Patterns
Suppose that you wish to fill the plane as densely as
possible with nonoverlapping circles of radius 1. How
should you do it? This question is an example of a so-
called packing problem. The answer is known, and it
is what one might expect: you should arrange the cir-
cles so that their centers form a triangular lattice, as
shown in figure 1. In three dimensions a similar result
is true, but much harder to prove: until recently it was
a famous open problem known as the Kepler conjec-
ture. Several mathematicians wrongly claimed to have
solved it, but in 1998 a long and complicated solution,
obtained with the help of a computer, was announced
by Thomas Hales, and although his solution has proved
correct.
Questions about packing of spheres can be asked in
any number of dimensions, but they become harder
and harder as the dimension increases. Indeed, it is
likely that the best density for a ninety-seven-dimen-
sional packing, say, will never be known. Experience
with similar problems suggests that the best arrange-
ment will almost certainly not have a simple structure
such as one sees in two dimensions, so that the only

$I$ . $4$ .

The General Goals of Mathematical Research method for finding it would be a “brute-force search” of some kind. However, to search for the best possible complicated structure is not feasible: even if one could some how reduce the search to finitely many possibilities, there would be far more of them than one could feasibly check. When a problem looks too difficult to solve, one should not give up completely. A much more productive reaction is to formulate related but more approachable questions.
In this case, instead of trying to discover the very best packing, one can simply see how dense a packing one can find. Here is a sketch of an argument that gives a goodish packing in n dimensions, when n is large. One begins by taking a maximal packing: that is, one simply picks sphere after sphere until it is no longer possible to pick another one with out it overlapping one of the spheres already chosen. Now let x be any point in R n .
Then there must be a sphere in our collection such that the distance between x and its center is less than $2$ , since otherwise we could take a unit sphere about x and it would not overlap any of the other spheres. Therefore, if we take all the spheres in the collection and expand them by a factor of $2$ , then we cover all of R n . Since expanding an n-dimensional sphere by a factor of $2$ increases its (ndimensional) volume by a factor of $2$ n , the proportion of R n covered by the unexpanded spheres must be at least $2 - n$ .
Notice that in the above argument we learned nothing at all about the nature of the arrangements of spheres with density $2 -$ n . All we did was take a maximal packing, and that can be done in a very haphazard way. This is in marked contrast with the approach that worked in two dimensions, where we defined a specific pattern of circles. This contrast pervades all of mathematics.
For some problems, the best approach is to build a highly structured pattern that has the properties you need, while for others--usually problems for which there is no hope of obtaining an exact answer--it is better to look for less specific arrangements. “Highly structured” in this context often means “possessing a high degree of symmetry.” The triangular lattice is a rather simple pattern, but some highly structured patterns are much more complicated, and much more of a surprise when they are discovered. A not able example occurs in packing problems.
By and large, the higher the dimension you are working in, the more difficult it is to find good patterns, but an exception to this general rule occurs at twenty-four dimensions. Here, there is a remarkable

$59$

construction, known as the Leech lattice, which gives rise to a miraculously dense packing. Formally, a lattice in R n is a subset Λ with the following three properties. (i) If $x$ and $y$ belong to Λ, then so do x  +  $y$ and $x$  -  y. (ii) If x belongs to Λ, then x is isolated. That is, there is some $d > 0$ such that the distance between x and any other point of Λ is at least d. (iii) Λ is not contained in any (n $- 1$ ) - dimensional subspace of R n . A good example of a lattice is the set Z n of all points in R n with integer coordinates.
If one is searching for a dense packing, then it is a good idea to look at lattices, since if you know that every nonzero point in a lattice has distance at least d from $0$ , then you know that any two points have distance at least d from each other. This is because the distance between $x$ and $y$ is the same as the distance between $0$ and $y - x,$ both of which lie in the lattice if $x$ and $y$ do. Thus, instead of having to look at the whole lattice, one can get away with looking at a small portion around $0$ .
In twenty-four dimensions it can be shown that there is a lattice Λ with the following additional properties, and that it is unique, in the sense that any other lattice with those properties is just a rotation of the first one. (iv) There is $a 24 \times 24$ matrix $M$ with determinant [III.15](/part-03/determinants) equal to $1$ such that Λ consists of all integer combinations of the columns of M. (v) If v is a point in Λ, then the square of the distance from $0$ to v is an even integer. (vi) The nonzero vector nearest to $0$ is at distance $2$ .
Thus, the balls of radius $1$ about the points in Λ form a packing of $R^{24}$ . The nonzero vector nearest to $0$ is far from unique: in fact there are 196560 of them, which is a remarkably large number considering that these points must all be at distance at least $2$ from each other. The Leech lattice also has an extraordinary degree of symmetry. To be precise, it has 8315553613086720000 rotational symmetries.
(This number equals $2^{22}$ · $3^{9}$ · $5^{4}$ · $7^{2}$ · $11$ · $13$ · $23$ .) If you take the quotient [I.3](/part-01/fundamental-definitions) of its symmetry group by the subgroup consisting of the identity and minus the identity, then you obtain the Conway group C$o^{1}$ , which is one of the famous sporadic simple groups [V.7](/part-05/the-classication-of-finite-simple-groups). The existence of so many symmetries makes it easier still to determine the smallest distance from $0$ of any nonzero point of the lattice, since once you have checked one distance

$60$

you have automatically checked lots of others (just as, in the triangular lattice, the six-fold rotational symmetry tells us that the distances from $0$ to its six neighbors are all the same). These facts about the Leech lattice illustrate a general principle of mathematical research: often, if a mathematical construction has one remarkable property, it will have others as well. In particular, a high degree of symmetry will often be related to other interesting features.
So, although it is a surprise that the Leech lattice exists at all, it is not as surprising when one then discovers that it gives an extremely dense packing of $R^{24}$ . In fact, it was shown in 2004 by Henry Cohn and Abhinav Kumar that it gives the densest possible packing of spheres in twenty-four-dimensional space, at least among all packings derived from lattices. It is probably the densest packing of any kind, but this has not yet been proved.

$5$

Explaining Apparent Coincidences

The largest of all the sporadic finite simple groups is called the Monster group. Its name is partly explained by the fact that it has $2^{46}$ · $3^{20}$ · $5^{9}$ · $7^{6}$ · $11^{2}$ · $13^{3}$ · $17$ · $19$ · $23$ · $29$ · $31$ · $41$ · $47$ · $59$ · $71$ elements. How can one hope to understand a group of this size? One of the best ways is to show that it is a group of symmetries of some other mathematical object (see the article on representation theory [IV.9](/part-04/representation-theory) for much more on this theme), and the smaller that object is, the better.
We have just seen that another large sporadic group, the Conway group C$o^{1}$ , is closely related to the symmetry group of the Leech lattice. Might there be a lattice that played a similar role for the Monster group? It is not hard to show that there will be at least some lattice that works, but more challenging is to find one of small dimension. It has been shown that the smallest possible dimension that can be used is 196883 . Now let us turn to a different branch of mathematics.
If you look at the article about algebraic numbers [IV.1](/part-04/number-theory) you will see a definition of a function j (z), called the elliptic modular function, of central importance in algebraic number theory. It is given as the sum of a series that starts

 j(z) = e - 2. iiz + 744 + 196884 e2. iiz+ 21493760 e4. iiz + 864299970 e6. iiz + · · · . Rather intriguingly, the coefficient of $e^{2}\pi\text{iz}$ in this series is 196884 , one more than the smallest possible dimension of a lattice that has the Monster group as its group of symmetries.

I. Introduction

It is not obvious how seriously we should take this observation, and when it was first made by John Mc Kay opinions differed about it. Some believed that it was probably just a coincidence, since the two areas seemed to be so different and unconnected. Others took the attitude that the function j (z) and the Monster group are so important in their respective areas, and the number 196883 so large, that the surprising numerical fact was probably pointing to a deep connection that had not yet been uncovered. It turned out that the second view was correct.
After studying the coefficients in the series for j (z), Mc Kay and John Thompson were led to a conjecture that related them all (and not just 196884) to the Monster group. This conjecture was extended by John Conway and Simon Norton, who formulated the “Monstrous Moonshine” conjecture, which was eventually proved by Richard Borcherds in 1992 .
(The word “moonshine” reflects the initial disbelief that there would be a serious relationship between the Monster group and the jfunction .) In order to prove the conjecture, Borcherds introduced a new algebraic structure, which he called a vertex algebra [IV.17](/part-04/vertex-operator-algebras) . And to analyze vertex algebras, he used results from string theory [IV.17](/part-04/vertex-operator-algebras). In other words, he explained the connection between two very different-looking areas of pure mathematics with the help of concepts from theoretical physics.
This example demonstrates in an extreme way another general principle of mathematical research: if you can obtain the same series of numbers (or the same structure of a more general kind) from two different mathematical sources, then those sources are probably not as different as they seem. More over, if you can find one deep connection, you will probably be led to others. There are many other examples where two completely different calculations give the same answer, and many of them remain unexplained.
This phenomenon results in some of the most difficult and fascinating unsolved problems in mathematics. (See the introduction to mirror symmetry [IV.16](/part-04/mirror-symmetry) for another example .) Interestingly, the j-function leads to a second famous mathematical “coincidence.” There may not seem to be √ anything special about the number $e\pi^{163}$ , but here is the beginning of its decimal expansion: √

$e\pi 163 = 262,537,412,640,768,743$ . 99999999999925 . . . ,

$I$ . $4$ .

The General Goals of Mathematical Research which is astonishingly close to an integer. Again it is initially tempting to dismiss this as a coincidence, but one should think twice before yielding to the temptation. After all, there are not all that many numbers that √ can be defined as simply as e $\pi^{163}$ , and each one has a probability of less than one in a million million of √ being as close to an integer as e $\pi^{163}$ is. In fact, it is not a coincidence at all: for an explanation see algebraic numbers [IV.1](/part-04/number-theory).
$6$ Counting and Measuring How many rotational symmetries are there of a regular icosahedron? Here is one way to work it out. Choose a vertex v of the icosahedron and let v be one of its neighbors. An icosahedron has twelve vertices, so there are twelve places where v could end up after the rotation. Once we know where v goes, there are five possibilities for v (since each vertex has five neighbors and v must still be a neighbor of v after the rotation).
Once we have determined where $v$ and $v$ go, there is no further choice we can make, so the number of rotational symmetries is $5 \times 12 = 60$ . This is a simple example of a counting argument, that is, an answer to a question that begins “How many.” However, the word “argument” is at least as important as the word “counting,” since we do not put all the symmetries in a row and say “one, two, three, . . . , sixty,” as we might if we were counting in real life. What we do instead is come up with a reason for the number of rotational symmetries being $5 \times 12$ .
At the end of the process, we understand more about those symmetries than merely how many there are. Indeed, it is possible to go further and show that the group of rotations of the icosahedron is $A^{5}$ , the alternating group [III.68](/part-03/permutation-groups) on five elements. $6$ . $1$ Exact Counting Here is a more sophisticated counting problem. A one dimensional random walk of n steps is a sequence of integers $a^{0}$ , $a^{1}$ , $a^{2}$ , . . . , a n , such that for each i the difference $a^{i} - a^{i} - {}^{1}$ is either $1$ or $- 1$ .
For example, $0$ , $1$ , $2$ , $1$ , $2$ , $1$ , $0$ , $- 1$ is $a$ seven-step random walk. The number of n-step random walks that start at $0$ is clearly $2$ n , since there are two choices for each step (either you add $1$ or you subtract 1). Now let us try a slightly harder problem. How many walks of length $2n$ are there that start and end at $0$ ?
(We look at walks of length $2n$ since a walk that starts $61$ and ends in the same place must have an even number of steps .) In order to think about this problem, it helps to use the letters R and L (for “right” and “ left ”) to denote adding $1$ and subtracting $1$ , respectively. This gives us an alternative notation for random walks that start at $0$ : for example, the walk $0$ , $1$ , $2$ , $1$ , $2$ , $1$ , $0$ , $- 1$ would be rewritten as RRLRLLL. Now a walk will end at $0$ if and only if the number of Rs is equal to the number of Ls.
More over, if we are told the set of steps where an R occurs, then we know the entire walk. So what we are counting is the number of ways of choosing n of the $2n$ steps as the steps where an R will occur. And this is well-known to be $(2n)$ ! $/(n$ ! )2 . Now let us look at a related quantity that is considerably less easy to determine: the number W (n) of walks of length $2n$ that start and end at $0$ and are never negative. Here, in the notation introduced for the previous problem, is a list of all such walks of length $6$ : RRRLLL, RRLRLL, RRLLRL, RLRRLL, and RLRLRL.
Now three of these five walks do not just start and end at $0$ but visit it in the middle: RRLLRL visits it after four steps, RLRRLL after two, and RLRLRL after two and four. Suppose we have a walk of length $2n$ that is never negative and visits $0$ for the first time after $2k$ steps. Then the remainder of the walk is a walk of length $2(n - k)$ that starts and ends at $0$ and is never negative. There are W (n - k) of these. As for the first $2k$ steps of such a walk, they must begin with R and end with L, and in between must never visit $0$ .
This means that between the initial R and the final L they give a walk of length $2(k - 1)$ that starts and ends at $1$ and is never less than $1$ . The number of such walks is clearly the same as W (k $- 1$ ). Therefore, since the first visit to $0$ must take place after $2k$ steps for some k between $1$ and n, W satisfies the following slightly complicated recurrence relation: $W(n) = W(0)W(n - 1) +$ · · · $+ W(n - 1)W(0)$ . Here, $W(0)$ is taken to be equal to $1$ . This allows us to calculate the first few values of W . We have $W(1) = W(0)W(0) = 1$ , which is easier to see directly:
the only possibility is RL. Then $W(2) = W(1)W(0) + W(0)W(1) = 2$ , and $W(3)$ , which counts the number of such walks of length $6$ , equals $W(0)W(2) + W(1)W(1) + W(2)W(0) = 5$ , confirming our earlier calculation. Of course, it would not be a good idea to use the recurrence relation directly if one wished to work out W (n) for large values of n such as $10^{10}$ . However,

$62$

the recurrence is of a sufficiently nice form that it is amenable to treatment by generating functions [IV . 18 § § 2 . 4 , 3 ] , as is explained in enumerative and algebraic combinatorics [IV.18](/part-04/enumerative-and-algebraic-combinatorics). (To see the connection with that discussion, replace the letters R and L by the square brackets [and], respectively. A legal bracketing then corresponds to a walk that is never negative .) The argument above gives an efficient way of calculating W (n) exactly. There are many other exact counting arguments in mathematics.
Here is a small further sample of quantities that mathematicians know how to count exactly with out resorting to “brute force.” (See the introduction to [IV.18](/part-04/enumerative-and-algebraic-combinatorics) for a discussion of when one regards a counting problem as solved .) (i) The number r (n) of regions that a plane is cut into by n lines if no two of the lines are parallel and no three concurrent. The first four values of  r(n)$are$2 , $4$ , $7$ , and $11$ . It is not hard to prove that $r(n) = r(n - 1) + n,$ which leads to the formula $r(n) = \frac{1}{2}(n^{2} + n + 2)$ .
This statement, and its proof, can be generalized to higher dimensions. (ii) The number s (n) of ways of writing n as a sum of four squares. Here we allow zero and negative numbers and we count different orderings as different (so , for example, $1^{2} + 3^{2} + 4^{2} + 2^{2}$ , $3^{2} + 4^{2} + 1^{2} + 2^{2}$ , 12 + ( - 3)2 +42 + 22 , and $0^{2} + 1^{2} + 2^{2} + 5^{2}$ are considered to be four different ways of writing $30$ as a sum of four squares). It can be shown that s (n) is equal to $8$ times the sum of all the divisors of n that are not multiples of $4$ .
For example, the divisors of $12$ are $1$ , $2$ , $3$ , $4$ , $6$ , and $12$ , of which $1$ , $2$ , $3$ , and $6$ are not multiples of $4$ . Therefore $s(12) = 8(1 + 2 + 3 + 6) = 96$ . The different ways are $1^{2} + 1^{2} + 1^{2} + 3^{2}$ , $0 + 2^{2} + 2^{2} + 2^{2}$ , and the other expressions that can be obtained from these ones by reordering and replacing positive integers by negative ones.
(iii) The number of lines in space that meet a given four lines $L^{1}$ , $L^{2}$ , $L^{3}$ , and $L^{4}$ when those four are in “general position.” (This means that they do not have special properties such as two of them being parallel or intersecting each other .) It turns out that for any three such lines, there is a subset of $R^{3}$ known as a quadric surface that contains them, and this quadric surface is unique. Let us take the surface for $L^{1}$ , $L^{2}$ , and $L^{3}$ and call it S. The surface S has some interesting properties that allow us to solve the problem.
The main one is that one can find a continuous family of lines (that is, a collection of lines L (t), one for each real number t, that varies continuously with t) that, between them, make I. Introduction up the surface S and include each of the lines $L^{1}$ , $L^{2}$ , and $L^{3}$ . But there is also another such continuous family of lines M (s), each of which meets every line L (t) in exactly one point. In particular, every line M (s) meets all of $L^{1}$ , $L^{2}$ , and $L^{3}$ , and in fact every line that meets all of $L^{1}$ , $L^{2}$ , and $L^{3}$ must be one of the lines M (s).
It can be shown that $L^{4}$ intersects the surface S in exactly two points, P and Q . Now P lies in some line M (s) from the second family, and Q lies in some other line M (s) (which must be different, or else $L^{4}$ would equal  M(s) and intersect $L^{1}$ , $L^{2}$ , and $L^{3}$ , contradicting the fact that the lines L i are in general position). Therefore, the two lines M (s) and M (s) intersect all four of the lines L i .
But every line that meets all the L i has to be one of the lines M (s) and has to go through either P or Q (since the lines M (s) lie in S and $L^{4}$ meets S at only those two points). Therefore, the answer is $2$ . This question can be generalized very considerably, and answered by means of a technique known as Schubert calculus. (iv) The number p (n) of ways of expressing a positive integer $n$ as a sum of positive integers.
When $n = 6$ this number is $11$ , since $6 = 1 + 1 + 1 + 1 + 1 + 1 = 2 + 1 + 1 + 1 + 1 = 2 + 2 + 1 + 1 = 2 + 2 + 2 = 3 + 1 + 1 + 1 = 3 + 2 + 1 = 3 + 3 = 4 + 1 + 1 = 4 + 2 = 5 + 1 = 6$ . The function  p(n) is called the partition function. A remarkable formula, due to hardy [VI.73](/part-06/godfrey-harold-hardy-18771947) and ramanujan [VI.82](/part-06/srinivasa-ramanujan-18871920), gives an approximation α (n) to p (n) that is so accurate that p (n) is always the nearest integer to α (n). $6$ .
$2$ Estimates Once we have seen example (ii) above, it is natural to ask whether it can be generalized. Is there a formula for the number t (n) of ways of writing n as a sum of ten sixth powers, for example? It is generally believed that the answer to this question is no, and certainly no such formula has been discovered. However, as with packing problems, even if an exact answer does not seem to be forthcoming, it is still very interesting to obtain estimates. In this case, one can try to define an easily calculated function f such that f (n) is always approximately equal to t (n).
If even that is too hard, one can try to find two easily calculated functions L and U such that L (n) $\le$ t (n) $\le$ U (n) for every n. If we succeed, then we call L a lower bound for t and U an upper bound. Here are a few examples of quantities that nobody knows how to count exactly, but for which there are interesting approximations, or at least interesting upper and lower bounds.

$I$ . $4$ .

The General Goals of Mathematical Research (i) Probably the most famous approximate counting problem in all of mathematics is to estimate $\pi$ (n), the number of prime numbers less than or equal to n. For small values of n, we can of course compute $\pi$ (n) exactly: for example, $\pi(20) = 8$ since the primes less than or equal to $20$ are $2$ , $3$ , $5$ , $7$ , $11$ , $13$ , $17$ , and $19$ .
However, there does not seem to be a useful formula for $\pi$ (n), and although it is easy to think of a brute-force algorithm for computing $\pi$ (n) -- look at every number up to n, test whether it is prime, and keep count as you go along--such a procedure takes a prohibitively long time if n is at all large. Further more, it does not give us much insight into the nature of the function $\pi$ (n).
If, however, we modify the question slightly, and ask roughly how many primes there are up to n, then we find ourselves in the area known as analytic number theory [IV.2](/part-04/number-theory), a branch of mathematics with many fascinating results.
In particular, the famous prime number theorem [V.26](/part-05/the-prime-number-theorem-and-the-vi34-jnos-bolyai-18021860), proved by hadamard [VI.65](/part-06/jacques-hadamard-18651963) and de la vallée poussin [VI.67](/part-06/charles-jean-de-la-valle-poussin-18661962) at the end of the nineteenth century, states that $\pi$ (n) is approximately equal to n  /  log n, in the sense that the ratio of $\pi$ (n) to $n/$ log $n$ converges to $1$ as $n$ tends to infinity. This statement can be refined.
It is believed that the “density” of primes close to n is about $1/$ log n, in the sense that a randomly chosen integer close to n has a probability of about $1/$ log $n$ of being prime. This would n suggest that $\pi(n)$ should be about ${}^{0} dt/$ log  t, a function of n that is known as the logarithmic integral of n, or li (n). How accurate is this estimate?
Nobody knows, but the riemann hypothesis [V.26](/part-05/the-prime-number-theorem-and-the-vi34-jnos-bolyai-18021860), perhaps the most famous unsolved problem in mathematics, is equivalent to the statement that $\pi$ (n) and li (n) differ by at √most c n log n for some constant c. Since n log n is much smaller than $\pi$ (n), this would tell us that li (n) was an extremely good approximation to $\pi$ (n). (ii) A self-avoiding walk of length n in the plane is a sequence of points $(a^{0}$ , $b^{0})$ , $(a^{1}$ , $b^{1})$ , $(a^{2}$ , $b^{2})$ , . . .
, (a n , b n) with the following properties.

• The numbers a $i$ and $b$ i are all integers.

• For each i, one obtains  (  $a^{i}$ , $b^{i})$ from $(a^{i} - {}^{1}$ , $b^{i} - {}^{1})$ by taking a horizontal or vertical step of length $1$ . That is, either $a^{i} = a^{i} - {}^{1}$ and $b^{i} = b^{i} - {}^{1}$ ± $1$ or $a^{i} = a^{i} - {}^{1}$ ± $1$ and $b^{i} = b^{i} - {}^{1}$ .

• No two of the points (a i , b i) are equal. The first two conditions tell us that the sequence forms a two-dimensional walk of length n, and the third says

$63$

that this walk never visits any point more than once-- hence the term “self-avoiding.” Let S (n) be the number of self-avoiding walks of length n that start at ( $0$ , $0$ ). There is no known formula for S (n), and it is very unlikely that such a formula exists. However, quite a lot is known about the way the function S (n) grows as n grows. For instance, it is fairly easy to prove that S (n) ${}^{1}/$ n converges to a limit c. The value of c is not known, but it has been shown (with the help of a computer) to lie between $2$ . $62$ and $2$ . $68$ .
(iii) Let C (t) be the number of points in the plane with integer coordinates contained in a circle of radius t about the origin. That is, C (t) is the number of pairs  (  a ,  b) of integers such that $a^{2} + b^{2} \le t^{2}$ . $A$ circle of radius t has area $\pi t^{2}$ , and the plane can be tiled by unit squares, each of which has a point with integer coordinates at its center. Therefore, when t is large it is fairly clear (and not hard to prove) that C (t) is approximately $\pi t^{2}$ . However, it is much less clear how good this approximation is.
To make this question more precise, let us set   (t) to equal $|C(t) - \pi t^{2}|$ . That is,    (  t  )  is the error in $\pi t^{2}$ as an estimate for C (t). It was shown in 1915 , by Hardy √ and Landau, that   (t) must be at least c t for some constant $c > 0$ , and this estimate, or something very similar, probably gives the right order of magnitude for   (t). However, the best upper bound known, which was proved by Huxley in 2003 (the latest in a long line of successive improvements), is that   (t) is at most At ${}^{131}/ {}^{208}($ log t)2 . 26 for some constant A.

$6$ . $3$

Averages

So far, our discussion of estimates and approximations has been confined to problems where the aim is to count mathematical objects of a given kind. However, that is by no means the only context in which estimates can be interesting. Given a set of objects, one may wish to know not just how large the set is, but also what a typical object in the set looks like. Many questions of this kind take the form of asking what the average value is of some numerical parameter that is associated with each object. Here are two examples.
(i) What is the average distance between the starting point and the endpoint of a self-avoiding walk of length n? In this instance, the objects are self-avoiding walks of length n that start at ( $0$ , $0$ ), and the numerical parameter is the end-to-end distance. Surprisingly, this is a notoriously difficult problem, and almost nothing is known. It is obvious that n is

64

an upper bound for S(n), but one would expect a typ-
ical self-avoiding walk to take many twists and turns
and end up traveling much less far than n away from
its starting point. However, there is no known upper
bound for S(n) that is substantially better than n.
   In the other direction, one would expect the end-
to-end distance of a typical self-avoiding walk to be
greater than that of an ordinary walk, to give it room
to avoid itself. This would suggest that S(n) is signifi-
cantly greater than n, but it has not even been proved
that it is greater.
   This is not the whole story, however, and the problem
will be discussed further in section 8.
   (ii) Let n be a large randomly chosen positive integer
and let ω(n) be the number of distinct prime factors of
n. On average, how large will ω(n) be? As it stands, this
question does not quite make sense because there are
infinitely many positive integers, so one cannot choose
one randomly. However, one can make the question
precise by specifying a large integer m and choosing
a random integer n between m and 2 m. It then turns
out that the average size of ω(n) is around log log n.
   In fact, much more is known than this. If all you
know about a random variable [III.71 §4](/part-03/probability-distributions) is its aver-
age, then a great deal of its behavior is not determined,
so for many problems calculating averages is just the
beginning of the story. In this case, Hardy and Ramanu-
jan gave an estimate for the standard deviation
[III.71 §4](/part-03/probability-distributions) of ω(n), showing that it is about log log n.
Then Erdős and Kac went even further and gave a pre-
cise estimate for the probability that ω(n) differs from
log log n by more than c log log n, proving the sur-
pr ising fact that the distribution of ω is approximately
gaussian [III.71 §5](/part-03/probability-distributions).
   To put these results in perspective, let us think about    hanging chain take?
the range of possible values of ω(n). At one extreme,
n might be a prime itself, in which case it obviously
has just one prime factor. At the other extreme, we can
write the primes in ascending order as p1 , p2 , p3 , . . .   from physics tells us that the chain will settle in the
and take numbers of the form n = p1 p2 · · · pk . With
the help of the prime number theorem, one can show
that the order of magnitude of k is log n/ log log n,
which is much bigger than log log n. However, the
results above tell us that such numbers are exceptional:
a typical number has a few distinct prime factors, but
nothing like as many as log n/ log log n.
6.4   Extremal Problems
There are many problems in mathematics where one
wishes to maximize or minimize some quantity in

I. Introduction
the presence of various constraints. These are called
extremal problems. As with counting questions, there
are some extremal problems for which one can realis-
ti cally hope to work out the answer exactly, and many
more for which, even though an exact answer is out
of the question, one can still aim to find interesting
estimates. Here are some examples of both kinds.
(i) Let n be a positive integer and let X be a set with
. qrt{n} elements. How many subsets of X can be chosen if
none of these subsets is contained in any other?
A simple observation one can make is that if two dif-
ferent sets have the same size, then neither is contained
in the other. Therefore, one way of satisfying the con-
strain ts of the problem is to choose all the sets of some
particular size k. Now the number of subsets of       X of
n
size k is n!/k!(n − k)!, which is usually
  written k (or
n C ), and it is not hard to show that n is largest when
k                                    k
k = n/2 if n is even and when k = (n ± 1)/2 if n is odd.
For simplicity let us concentrate on the case when n is
even.What  we have just proved is that it is possible to
n
pick n/2     subsets of an n-element set in such a way    
n
that none of them contains any other. That is, n/2
is a lower bound for the problem. A result known as
Sperner’s theorem states that it is an upper  bound as
n
well. That is, if you choose more than n/2 subsets
of X, then, however you do it, one of these subsets
will be contained in another. Therefore,     the question
             is answered exactly, and the    answer   is
n

n
is odd, then the answer is (n+1)/2     , as one might now
expect.)

(ii) Suppose that the two ends of a heavy chain are
attached to two hooks on the ceiling and that the chain
is not supported any where else. What shape will the
At first, this question does not look like a maximiza-
tion or minimization problem, but it can be quickly
turned into one. That is because a general principle
shape that minimizes its potential energy. We there-
fore find ourselves asking a new question: let A and B
be two points at distance d apart, and let C be the set
of all curves of length l that have A and B as their two
endpoints. Which curve C ∈ C has the smallest poten-
tial energy? Here one takes the mass of any portion of
the curve to be proportional to its length. The poten-
tial energy of the curve is equal to mgh, where m is
the mass of the curve, g is the gravitational constant,
and h is the height of the center of gravity of the curve.
Since m and g do not change, another formulation of

I.4.   The General Goals of Mathematical Research

the question is: which curve C ∈ C has the smallest
average height?
   This problem can be solved by means of a technique
known as the calculus of variations. Very roughly, the
idea is this. We have a set, C, and a function h defined
on C that takes each curve C ∈ C to its average height.
We are trying to minimize h, and a natural way to
approach that task is to define some sort of derivative
and look for a curve C at which this derivative is 0.
Notice that the word “derivative” here does not refer
to the rate of change of height as you move along the
curve. Rather, it means the (linear) way that the average    ing a large set that does not contain any arithmetic
height of the entire curve changes in response to small
perturbations of the curve. Using this kind of deriva-
tive to find a minimum is more complicated than look-
ing for the stationary points of a function defined on R,     date are very√ far apart. In 1947, Behrend found a set
since C is an infinite-dimensional set and is therefore
much more complicated than R. However, the approach
can be made to work, and the curve that minimizes
the average height is known. (It is called a catenary,
after the Latin word for chain.) Thus, this is another
minimization problem that has been answered exactly.
   For a typical problem in the calculus of variations,
one is trying to find a curve, or surface, or more gen-
eral kind of function, for which a certain quantity is
minimized or maximized. If a minimum or maximum
exists (which is by no means automatic when one is
working with an infinite-dimensional set, so this can
be an interesting and important question), the object
that achieves it satisfies a system of partial differ en-
tial equations [I.3 §5.4](/part-01/fundamental-definitions) known as the Euler–Lagrange
equations. For more about this style of minimization
or maximization, see variational methods [III.94](/part-03/variational-methods)
(and also optimization and lagrange multipliers
[III.64](/part-03/optimization-and-lagrange-multipliers)).
   (iii) How many numbers can you choose between 1
and n if no three of them are allowed to lie in an arith-    lem and dramatically reducing the time that a computer
metic progression? If n = 9 then the answer is 5. To
see this, note first that no three of the five numbers
1, 2, 4, 8, 9 lie in an arithmetic progression. Now let us   form [III.26](/part-03/the-fast-fourier-transform) to reduce the number of steps from n2
see if we can find six numbers that work.
   If we make one of our numbers 5, then we must leave
out either 4 or 6, or else we would have the progression     Cn log n log log n as being only just worse than a bound
4, 5, 6. Similarly, we must leave out one of 3 and 7, one    of the form Cn. Bounds of this form are called linear,
of 2 and 8, and one of 1 and 9. But then we have left
out four numbers. It follows that we cannot choose 5
as one of the numbers.
   We must leave out one of 1, 2, and 3, and one of 7, 8,
and 9, so if we leave out 5 then we must include 4 and
6. But then we cannot include 2 or 8. But we must also

65
leave out at least one of 1, 4, and 7, so we are forced to
leave out at least four numbers.
An ugly case-by-case argument of this kind is feasi-
ble when n = 9, but as soon as n is at all large there
are far too many cases for it to be possible to con-
sider them all. For this problem, there does not seem
to be a tidy answer that tells us exactly which is the
largest set of integers between 1 and n that contains
no arithmetic progression of length 3. So instead one
looks for upper and lower bounds on its size. To prove
a lower bound, one must find a good way of construct-
progressions, and to prove an upper bound one must
show that any set of a certain size must necessarily
contain an arithmetic progression. The best bounds to
of size n/ec log n that contains no arithmetic progres-
sion, and in 1999 Jean Bourgain proved that every set

of size Cn log log n/ log n contains an arithmetic pro-
gression. (If it is not obvious to you that these num-
bers are far apart, then√consider what happens when
n = 10100 , say. Then e log n is about 4 000 000, while

log n/ log log n is about 6.5.)
(iv) Theoretical computer science is a source of many
minimization problems: if one is programming a com-
puter to perform a certain task, then one wants it to do
so in as short a time as possible. Here is an elementary-
sounding example: how many steps are needed to
multiply two n-digit numbers together?
Even if one is not too precise about what is meant
by a “step,” one can see that the traditional method,
long multiplication, takes at least n2 steps since, dur-
ing the course of the calculation, each digit of the
first number is multiplied by each digit of the sec-
ond. One might imagine that this was necessary, but
in fact there are clever ways of transforming the prob-
needs to perform a multiplication of this kind. The
fastest known method uses the fast fourier trans-
to Cn log n log log n. Since the logarithm of a number
is much smaller than the number itself, one thinks of
and for a problem like this are clearly the best one can
hope for, since it takes 2 n steps even to read the digits
of the two numbers.
Another question that is similar in spirit is whether
there are fast algorithms for matrix multiplication. To
multiply two n . imes n matrices using the obvious method

$66$

one needs to do $n^{3}$ individual multiplications of the numbers in the matrices, but once again there are less obvious methods that do better. The main breakthrough on this problem was due to Strassen, who had the idea of splitting each matrix into four $n/2 \times n/2$ matrices and multiplying those together. At first it seems as though one has to calculate the products of eight pairs of $n/2 \times n/2$ matrices, but these products are related, and Strassen came up with seven such calculations from which the eight products could quickly be derived. One can then apply recursion:
that is, use the same idea to speed up the calculation of the seven $n/2 \times n/2$ matrix products, and so on. Strassen’s algorithm reduces the number of numerical multiplications from about $n^{3}$ to about $n$ log 2 7 . Since log ${}^{2}7$ is less than $2$ . $81$ , this is a significant improvement, but only when n is large. His basic divide-andconquer strategy has been developed further, and the current record is better than $n^{2}$ . 4 . In the other direction, the situation is less satisfactory:
nobody has found a proof that one needs to use significantly more than $n^{2}$ multiplications. For more problems of a similar kind, see computational complexity [IV.20](/part-04/computational-complexity) and the mathematics of algorithm design [VII.5](/part-07/the-mathematics-of-algorithm-design). (v) Some minimization and maximization problems are of a more subtle kind. For example, suppose that one is trying to understand the nature of the differences between successive primes.
The smallest such difference is 1 ( the difference between $2$ and 3), and it is not hard to prove that there is no largest difference (given any integer n greater than $1$ , none of the numbers between $n! + 2$ and $n! + n$ is a prime). Therefore, there do not seem to be interesting maximization or minimization problems concerning these differences. However, one can in fact formulate some fascinating problems if one first normalizes in an appropriate way.
As was mentioned earlier in this section, the prime number theorem states that the density of primes near n is about $1/$ log  n, so an average gap between two primes near n will be about log n. If $p$ and $q$ are successive primes, we can therefore define a “normalized gap” to be (q  -  p)  /  log p. The average value of this normalized gap will be $1$ , but is it some times much smaller and some times much bigger? It was shown by Westzynthius in 1931 that even normalized gaps can be arbitrarily large, and it was widely believed that they could also be arbitrarily close to zero.
(The famous twin prime conjecture--that there are infinitely many primes p for which $p + 2$ is also

I. Introduction

a prime--implies this immediately .) However, it took until 2005 for this to be proved, by Goldston, Pintz, and Yıldırım. (See analytic number theory [IV . 2 § § 6 - 8 ] for a discussion of this problem .) $7$ Determining Whether Different Mathematical Properties Are Compatible In order to understand a mathematical concept, such as that of a group or a manifold, there are various stages one typically goes through. Obviously it is a good idea to begin by becoming familiar with a few representative examples of the structure, and also with techniques for building new examples out of old ones.
It is also extremely important to understand the homomorphisms, or “structure-preserving functions,” from one example of the structure to another, as was discussed in some fundamental mathematical definitions [I . 3 § § 4 . 1 , 4 . 2 ] . Once one knows these basics, what is there left to understand? Well, for a general theory to be useful, it should tell us something about specific examples. For instance, as we saw in section $3$ . $2$ , Lagrange’s theorem can be used to prove Fermat’s little theorem. Lagrange’s theorem is a general fact about groups:
that if G is a group of size n, then the size of any subgroup of G must be a factor of n. To obtain Fermat’s little theorem, one applies Lagrange’s theorem to the particular case when G is the multiplicative group of nonzero integers mod p. The conclusion one obtains--that a p is always congruent to a--is far from obvious. However, what if we want to know something about a group G that might not be true for all groups? That is, suppose that we wish to determine whether G has some property P that some groups have and others do not.
Since we cannot prove that the property P follows from the group axioms, it might seem that we are forced to abandon the general theory of groups and look at the specific group G. However, in many situations there is an intermediate possibility: to identify some fairly general property Q that the group G has, and show that Q implies the more particular property P that interests us. Here is an illustration of this sort of technique in a different context. Suppose we wish to determine whether the polynomial $p(x) = x^{4} - 2x^{3} - x^{2} - 2x + 1$ has a real root.
One method would be to study this particular polynomial and try to find a root. After quite a lot of effort we might discover that p (x) can be factorized as $(x^{2} + x + 1)(x^{2} - 3x + 1)$ . The first factor is always

I.4.   The General Goals of Mathematical Research

positive, but if we apply the quadratic formula to the
second, we find that p(x) = 0 when x = (3 ± 5)/2. An
alternative method, which uses a bit of general theory,
is to notice that p(1) is negative (in fact, it equals −3)
and that p(x) is large when x is large (because then the
x 4 term is far bigger than anything else), and then to
use the intermediate value theorem, the result that any
continuous function that is negative some where and
positive some where else must be zero some where in
between.
   Notice that, with the second approach, there was still
some computation to do—finding a value of x for which
p(x) is negative—but that it was much easier than the
computation in the first approach—finding a value of
x for which p(x) is zero. In the second approach, we
established that p had the rather general property of
being negative some where, and used the intermediate
value theorem to finish off the argument.
   There are many situations like this through out math-
ematics, and as they arise certain general properties
become established as particularly useful. For exam-
ple, if you know that a positive integer n is prime, or
that a group G is Abelian (that is, gh = hg for any
two elements g and h of G), or that a function taking
complex numbers to complex numbers is holomor-
phic [I.3 §5.6](/part-01/fundamental-definitions), then as a consequence of these general
properties you know a lot more about the objects in
question.
   Once properties have established themselves as im-
port ant, they give rise to a large class of mathemat i-
cal questions of the following form: given a mathemat-
ical structure and a selection of interesting properties
that it might have, which combinations of these prop-
erties imply which other ones? Not all such questions
are interesting, of course—many of them turn out to
be quite easy and others are too artificial—but some
of them are very natural and surprisingly resistant to
one’s initial attempts to solve them. This is usually a
sign that one has stumbled on what mathematicians
would call a “deep” question. In the rest of this section
let us look at a problem of this kind.
   A group G is called finitely generated if there is some
finite set {x1 , x2 , . . . , xk } of elements of G such that
all the rest can be written as products of elements in
that set. For example, the group SL2 (Z) consists of all
2 . imes 2 matrices ( ac db
and ad − bc = 1. This group is finitely generated: it is
a nice exercise to show that every such matrix can be
built from the four matrices ( 10 11 ), ( 10 −1
   1 0
( −1 1 ) using matrix multiplication. (See [I.3 §3.2](/part-01/fundamental-definitions) for a

67
discussion of matrices. A first step toward proving this
√
result is to show that ( 10 m    1 n
1 )( 0 1 ) = ( 0 1 ).)
Now let us consider a second property. If x is an ele-
ment of a group G, then x is said to have finite order if
there is some power of x that equals the identity. The
smallest such power is called the order of x. For exam-
ple, in the multiplicative group of nonzero integers
mod 7, the identity is 1, and the order of the element
4 is 3, because 41 = 4, 42 = 16 ≡ 2 and 43 = 64 ≡ 1
mod 7. As for 3, its first six powers are 3, 2, 6, 4, 5,
1, so it has order 6. Now some groups have the very
special property that there is some integer n such that
x n equals the identity for every x—or, equivalently, the
order of every x is a factor of n. What can we say about
such groups?
Let us look first at the case where all elements have
order 2. Writing e for the identity element, we are
assuming that a2 = e for every element a. If we mul-
tiply both sides of this equation by the inverse a−1 ,
then we deduce that a = a−1 . The opposite implication
is equally easy, so such groups are ones where every
element is its own inverse.
Now let a and b be two elements of G. For any two
elements a and b of any group we have the identity
(ab)−1 = b −1 a−1 (simply because abb−1 a−1 = aa−1 =
e), and in our special group where all elements equal
their inverses we can deduce from this that ab = ba.
That is, G is automatically Abelian.
Already we have shown that one general property,
that every element of G squares to the identity, implies
another, that G is Abelian. Now let us add the condi-
tion that G is finitely generated, and let x1 , x2 , . . . , xk
be a minimal set of generators. That is, suppose that
every element of G can be built up out of the xi and
that we need all of the xi to be able to do this. Because
G is Abelian and because every element is equal to
its own inverse, we can rearrange products of the xi
into a standard form, where each xi occurs at most
once and the indices increase. For example, take the
product x4 x3 x1 x4 x4 x1 x3 x1 x5 . Because G is Abelian,
this equals x1 x1 x1 x3 x3 x4 x4 x4 x5 , and because each
element is its own inverse this equals x1 x4 x5 , the
standard form of the original expression.
This shows that G can have at most 2 k elements,
since for each xi we have the choice of whether or
) such that a, b, c, and d are integers      not to include it in the product (after it has been put
in the form above). In particular, the properties “G is
finitely generated” and “every nonidentity element of
10
1 ), ( 1 1 ), and   G has order 2” imply the third property “G is finite.” It
turns out to be fairly easy to prove that two elements

68

whose standard forms are different are themselves dif-
ferent, so in fact G has exactly 2 k elements (where k is    ing: in many respects, the primes really do behave like
the size of a minimal set of generators).
   Now let us ask what happens if n is some integer
greater than 2 and x n = e for every element x. That
is, if G is finitely generated and x n = e for every x,
must G be finite? This turns out to be a much harder
question, originally asked by burnside [VI.60](/part-06/william-burnside-18521927). Burn-
side himself showed that G must be finite if n = 3, but
it was not until 1968 that his problem was solved, when     random, I would be less sure: there could be some
Adian and Novikov proved the remarkable result that
if n ⩾ 4381 then G does not have to be finite. There is
of course a big gap between 3 and 4381, and progress
in bridging it has been slow. It was only in 1992 that
this was improved to n ⩾ 13, by Ivanov. And to give an
idea of how hard the Burnside problem is, it is still not   and its generalizations formulate in a precise way the
known whether a group with two generators such that
the fifth power of every element is the identity must be     that arise in number theory, “behave randomly.” That
finite.

A mathematical statement is considered to be estab-
lished when it has a proof that meets the high stan-
dards of rigor that are characteristic of the subject.
However, nonrigorous arguments have an important
place in mathematics as well. For example, if one wishes    the Riemann hypothesis and leave it at that. But most
to apply a mathematical statement to another field,
such as physics or engineering, then the truth of the
statement is often more important than whether one
has proved it.
   However, this raises an obvious question: if one has     proved unconditionally.
not proved a statement, then what grounds could there
be for believing it? There are in fact several different     believed and used as a foundation for a great deal of
kinds of nonrigorous justification, so let us look at
some of them.
8.1   Conditional Results
As was mentioned earlier in this article, the Riemann
hypothesis is the most famous unsolved problem in
mathematics. Why is it considered so important? Why,
for example, is it considered more important than the
twin prime conjecture, another problem to do with the
behavior of the sequence of primes?
  The main reason, though not the only one, is that it
and its generalizations have a huge number of interest-     be of equivalent difficulty. That is, if there were an effi-
ing consequences. In broad terms, the Riemann hypoth-
esis tells us that the appearance of a certain degree of    be converted into an efficient algorithm for any other.

I. Introduction
“randomness” in the sequence of primes is not mislead-
an appropriately chosen random set of integers.
If the primes behave in a random way, then one might
imagine that they would be hard to analyze, but in
fact randomness can be an advantage. For example,
it is randomness that allows me to be confident that
at least one girl was born in London on every day of
the twentieth century. If the sex of babies were less
strange pattern such as girls being born on Mondays
to Thursdays and boys on Fridays to Sundays. Simi-
larly, if I know that the primes behave like a random
sequence, then I know a great deal about their aver-
age behavior in the long term. The Riemann hypothesis
idea that the primes, and other important sequences
is why they have so many consequences. There are
large numbers of papers with theorems that are proved
only under the assumption of some version of the Rie-
8   Working with Arguments That
mann hypothesis. Therefore, any body who proves the
Are Not Fully Rigorous
Riemann hypothesis will change the status of all these
theorems from conditional to fully proved.
How should one regard a proof if it relies on the Rie-
mann hypothesis? One could simply say that the proof
establishes that such and such a result is implied by
mathematicians take a different attitude. They believe
the Riemann hypothesis, and believe that it will one day
be proved. So they believe all its consequences as well,
even if they feel more secure about results that can be
Another example of a statement that is generally
further research comes from theoretical computer sci-
ence. As was mentioned in section 6.4 (iv), one of the
main aims of computer science is to establish how
quickly certain tasks can be performed by a computer.
This aim splits into two parts: finding algorithms that
work in as few steps as possible, and proving that every
algorithm must take at least some particular number
of steps. The second of these tasks is notoriously dif-
ficult: the best results known are far weaker than what
is believed to be true.
There is, however, a class of computational prob-
lems, called NP-complete problems, that are known to
cient algorithm for one of these problems, then it could

I.4.   The General Goals of Mathematical Research

However, largely for this very reason it is almost univer-   The Langlands program passes the tests for a good con-
sally believed that there is in fact no efficient algorithm    jecture supremely well, and has for many years guided
for any of the problems, or, as it is usually expressed,     the research of a large number of mathematicians.
that “P does not equal NP.” Therefore, if you want to
demonstrate that no quick algorithm exists for some
problem, all you have to do is prove that it is at least     that relates objects known as calabi–yau manifolds
as hard as some problem that is already known to be
NP-complete. This will not be a rigorous proof, but it
will be a convincing demonstration, since most mathe-
maticians are convinced that P does not equal NP. (See
computational complexity [IV.20](/part-04/computational-complexity) for much more on
this topic.)
   Some areas of research depend on several conjec-
tures rather than just one. It is as though researchers
in such areas have discovered a beautiful mathematical
landscape and are impatient to map it out despite the
fact that there is a great deal that they do not under-
stand. And this is often a very good research strategy,
even from the perspective of finding rigorous proofs.
There is far more to a conjecture than simply a wild
guess: for it to be accepted as important, it should have    mirror symmetry.
been subjected to tests of many kinds. For example,
does it have consequences that are already known to
be true? Are there special cases that one can prove? If
it were true, would it help one solve other problems?
Is it supported by numerical evidence? Does it make
a bold, precise statement that would probably be easy
to refute if it were false? It requires great insight and    could hope to prove with today’s mathematical machin-
hard work to produce a conjecture that passes all these
tests, but if one succeeds, one has not just an isolated     as the Riemann hypothesis. And yet it is regarded as
statement, but a statement with numerous connections
to other statements. This increases the chances that
it will be proved, and greatly increases the chances
that the proof of one statement will lead to proofs
of others as well. Even a counterexample to a good
conjecture can be extraordinarily revealing: if the con-     even number, then there are many ways of writing
jecture is related to many other statements, then the
effects of the counterexample will permeate the whole
area.
   One area that is full of conjectural statements is
algebraic number theory [IV.1](/part-04/number-theory). In particular, the
Langlands program is a collection of conjectures, due
to Robert Langlands, that relate number theory to
representation theory (it is discussed in re pre sen-
tation theory [IV.9 §6](/part-04/representation-theory)). Between them, these con-
jectures generalize, unify, and explain large numbers
of other conjectures and results. For example, the
Shimura–Taniyama–Weil conjecture, which was central
to Andrew Wiles’s proof of fermat’s last theorem
[V.10](/part-05/fermats-last-theorem), forms one small part of the Langlands program.

69
Another area of a similar nature is known as mir-
ror symmetry [IV.16](/part-04/mirror-symmetry). This is a sort of duality [III.19](/part-03/duality)
[III.6](/part-03/calabiyau-manifolds), which arise in algebraic geometry [IV.4](/part-04/algebra) and
also in string theory [IV.17 §2](/part-04/vertex-operator-algebras), to other, dual mani-
folds. Just as certain differential equations can become
much easier to solve if one looks at the fourier trans-
forms [III.27](/part-03/the-fourier-transform) of the functions in question, so there are
calculations arising in string theory that look impos-
sible until one transforms them into equivalent calcu-
la tions in the dual, or “mirror,” situation. There is at
present no rigorous justification for the transforma-
tion, but this process has led to complicated formulas
that nobody could possibly have guessed, and some of
these formulas have been rigorously proved in other
ways. Maxim Kontsevich has proposed a precise con-
jecture that would explain the apparent successes of
8.2   Numerical Evidence
The goldbach conjecture [V.27](/part-05/problems-and-results-in-vi36-peter-gustav-lejeune-dirichlet-18051859) states that every
even number greater than or equal to 4 is the sum of
two primes. It seems to be well beyond what any body
ery, even if one is prepared to accept statements such
almost certainly true.
There are two principal reasons for believing Gold-
bach’s conjecture. The first is a reason we have already
met: one would expect it to be true if the primes are
“randomly distributed.” This is because if n is a large
n = a + b, and there are enough primes for one to
expect that from time to time both a and b would
be prime.
Such an argument leaves open the possibility that
for some value of n that is not too large one might be
unlucky, and it might just happen that n − a was com-
posite whenever a was prime. This is where numerical
evidence comes in. It has now been checked that every
even number up to 1014 can be written as a sum of
two primes, and once n is greater than this, it becomes
extremely unlikely that it could “just happen,” by a
fluke, to be a counterexample.
This is perhaps rather a crude argument, but there is
a way to make it even more convincing. If one makes

$70$

more precise the idea that the primes appear to be randomly distributed, one can formulate a stronger version of Goldbach’s conjecture that says not only that every even number can be written as a sum or two primes, but also roughly how many ways there are of doing this. For instance, if $a$ and $n$  -  a are both prime, then neither is a multiple of $3$ (unless one of them is equal to $3$ itself).
If n is a multiple of $3$ , then this merely says that a is not a multiple of $3$ , but if n is of the form $3m + 1$ then $a$ cannot be of the form $3k + 1$ either (or n  -  a would be a multiple of $3$ ). So, in a certain sense, it is twice as easy for n to be a sum of two primes if it is a multiple of $3$ . Taking this kind of information into account, one can estimate in how many ways it “ought” to be possible to write n as a sum of two primes. It turns out that, for every even n, there should be many such representations.
More over, one’s predictions of how many are closely matched by the numerical evidence: that is, they are true for values of n that are small enough to be checked on a computer. This makes the numerical evidence much more convincing, since it is evidence not just for Goldbach’s conjecture itself, but also for the more general principles that led us to believe it. This illustrates a general phenomenon: the more precise the predictions that follow from a conjecture, the more impressive it is when they are confirmed by later numerical evidence.
Of course, this is true not just of mathematics but of science more generally.

$8$ . $3$

“Illegal” Calculations

In section $6$ . $3$ it was stated that “almost nothing is known” about the average end-to-end distance of an nstep self-avoiding walk. That is a statement with which theoretical physicists would strongly disagree. Instead, they would tell you that the end-to-end distance of a typical n-step self-avoiding walk is some where in the region of $n^{3}/ {}^{4}$ . This apparent disagreement is explained by the fact that, although almost nothing has been rigorously proved, physicists have a collection of nonrigorous methods that, if used carefully, seem to give correct results.
With their methods, they have in some areas managed to establish statements that go well beyond what mathematicians can prove. Such results are fascinating to mathematicians, partly because if one regards the results of physicists as mathematical conjectures then many of them are excellent conjectures, by the standards explained earlier: they are deep, completely unguessable in advance, widely believed to

I. Introduction

be true, backed up by numerical evidence, and so on. Another reason for their fascination is that the effort to provide them with a rigorous underpinning often leads to significant advances in pure mathematics. To give an idea of what the nonrigorous calculations of physicists can be like, here is a rough description of a famous argument of Pierre-Gilles de Gennes, which lies behind some of the results (or predictions, if you prefer to call them that) of physicists.
In statistical physics there is a model known as the n-vector model, closely related to the Ising and Potts models described in probabilistic models of critical phenomena [IV.25] . At each point of Z d one places a unit vector in R n . This gives rise to a random configuration of unit vectors, with which one associates an “energy” that increases as the angles between neighboring vectors increase. De Gennes found a way of transforming the self-avoiding-walk problem so that it could be regarded as a question about the n-vector model in the case $n = 0$ .
The $0$ - vector problem itself does not make obvious sense, since there is no such thing as a unit vector in $R^{0}$ , but de Gennes was nevertheless able to take parameters associated with the n-vector model and show that if you let n converge to zero then you obtained parameters associated with selfavoiding walks. He proceeded to choose other parameters in the n-vector model to derive information about self-avoiding walks, such as the expected end-to-end distance. To a pure mathematician, there is something very worrying about this approach.
The formulas that arise in the n-vector model do not make sense when $n = 0$ , so instead one has to regard them as limiting values when n tends to zero. But n is very clearly a positive integer in the n-vector model, so how can one say that it tends to zero? Is there some way of defining an n-vector model for more general n? Perhaps, but nobody has found one. And yet de Gennes’s argument, like many other arguments of a similar kind, leads to remarkably precise predictions that agree with numerical evidence. There must be a good reason for this, even if we do not understand what it is.
The examples in this section are just a few illustrations of how mathematics is enriched by nonrigorous arguments. Such arguments allow one to penetrate much further into the mathematical unknown, opening up whole areas of research into phenomena that would otherwise have gone unnoticed. Given this, one might wonder whether rigor is important: if the results established by nonrigorous arguments are clearly true,

I.4.

then is that not good enough? As it happens, there are
examples of statements that were “established” by non-
rigorous methods and later shown to be false, but the
most important reason for caring about rigor is that the
understanding one gains from a rigorous proof is fre-
quently deeper than the understanding provided by a
nonrigorous one. The best way to describe the situation
is perhaps to say that the two styles of argument have
profoundly benefited each other and will undoubtedly
continue to do so.

There is no doubt that the equation x 5 − x − 13 = 0 has
a solution. After all, if we set f (x) = x 5 − x − 13, then   the effort to find an explicit argument very often leads
f (1) = −13 and f (2) = 17, so some where between 1
and 2 there will be an x for which f (x) = 0.
   That is an example of a pure existence argument—in
other words, an argument that establishes that some-
thing exists (in this case, a solution to a certain equa-     tence argument concerns transcendental numbers
tion), with out telling us how to find it. If the equa-
tion had been x 2 − x − 13 = 0, then we could have
used an argument of a very different sort: the for-
mula for quadratic equations tells us that there are pre-     [VI.39](/part-06/joseph-liouville-18091882), in 1844. He proved that a certain condition was
cisely two solutions, and it even tells us what they are

(they are (1 + 53)/2 and (1 − 53)/2). However, there
is no similar formula for quintic equations. (See the
insolubility of the quintic [V.21](/part-05/the-insolubility-of-the-quintic).)
   These two arguments illustrate a fundamental di-
chotomy in mathematics. If you are proving that a
mathematical object exists, then some times you can
do so explicitly, by actually describing that object, and     tainly transcendental but which have not been proved
some times you can do so only indirectly, by showing
that its nonexistence would lead to a contradiction.
   There is also a spectrum of possibilities in between.
As it was presented, the argument above showed mere-
ly that the equation x 5 − x − 13 = 0 has a solution
between 1 and 2, but it also suggests a method for cal-
cu lat ing that solution to any desired accuracy. If, for
example, you want to know it to two decimal places,
then run through the numbers 1, 1.01, 1.02, . . . , 1.99, 2   and the real numbers uncountable. Since countable
evaluating f at each one. You will find that f (1.71)
is approximately −0.0889 and that f (1.72) is approx-
imately 0.3337, so there must be a solution between
the two (which the calculations suggest will be closer
to 1.71 than to 1.72). And in fact there are much better
ways, such as newton’s method [II.4 §2.3](/part-02/algorithms), of approx i-
mating solutions. For many purposes, a pretty formula
for a solution is less important than a method of cal-
cu lat ing or approximating it. (See numerical analysis

The General Goals of Mathematical Research
[IV.21 §1](/part-04/numerical-analysis) for a further discussion of this point.) And if
one has a method, its usefulness depends very much
on whether it works quickly.
Thus, at one end of the spectrum one has simple for-
mulas that define mathematical objects and can easily
be used to find them, at the other one has proofs that
establish existence but give no further information, and
in between one has proofs that yield algorithms for
finding the objects, algorithms that are significantly
more useful if they run quickly.
Just as, all else being equal, a rigorous argument is
9    Finding Explicit Proofs and Algorithms
rithmic argument is worth looking for even if an indi-
rect one is already established, and for similar reasons:
to new mathematical insights. (Less obviously, as we
shall soon see, finding in direct arguments can also lead
to new insights.)
One of the most famous examples of a pure exis-
[III.41](/part-03/irrational-and-transcendental-numbers), which are real numbers that are not roots of
any polynomial with integer coefficients. The first per-
son to prove that such numbers existed was liouville
sufficient to guarantee that a number was trans cen-
√
dental and demonstrated that it is easy to construct
numbers satisfying his condition (see liouville’s the-
orem and roth’s theorem [V.22](/part-05/liouvilles-theorem-and-roths-theorem)). After that, vari-
ous important numbers such as e and π were proved
to be transcendental, but these proofs were difficult.
Even now there are many numbers that are almost cer-
to be transcendental. (See irrational and trans cen-
dental numbers [III.41](/part-03/irrational-and-transcendental-numbers) for more information about
this.)
All the proofs mentioned above were direct and
explicit. Then in 1873 cantor [VI.54](/part-06/georg-cantor-18451918) provided a com-
pletely different proof of the existence of transcenden-
tal numbers, using his theory of countability [III.11](/part-03/countable-and-uncountable-sets).
He proved that the algebraic numbers were countable
sets are far smaller than uncountable sets, this showed
that almost every real number (though not ne ces sar-
ily almost every real number you will actually meet)
is transcendental.
In this instance, each of the two arguments tells
us something that the other does not. Cantor’s proof
shows that there are transcendental numbers, but it
does not provide us with a single example. (Strictly
speaking, this is not true: one could specify a way of

72

listing the algebraic numbers and then apply Cantor’s
famous diagonal argument to that particular list. How-
ever, the resulting number would be virtually devoid of
meaning.) Liouville’s proof is much better in that way,
as it gives us a method of constructing several trans cen-
dental numbers with fairly straightforward definitions.
However, if one knew only the explicit arguments such
as Liouville’s and the proofs that e and π are trans cen-
dental, then one might have the impression that tran-
scendental numbers are numbers of a very special kind.
The insight that is completely missing from these argu-
ments, but present in Cantor’s proof, is that a typical
real number is transcendental.
  For much of the twentieth century, highly abstract
and in direct proofs were fashionable, but in more
recent years, especially with the advent of the com-
puter, attitudes have changed. (Of course, this is a very
general statement about the entire mathematical com-
munity rather than about any single mathematician.)
Nowadays, more attention is often paid to the question
of whether a proof is explicit, and, if so, whether it leads   next, starting with the convex body whose volume you
to an efficient algorithm.
  Need less to say, algorithms are interesting in them-
selves, and not just for the light they shed on mathe-
mat ical proofs. Let us conclude this section with a brief
description of a particularly interesting algorithm that
has been developed by several authors over the last
few years. It gives a way of computing the volume of
a high-dimensional convex body.
  A shape K is called convex if, given any two points x
and y in K, the line segment joining x to y lies entirely
inside K. For example, a square or a triangle is convex,
but a five-pointed star is not. This concept can be gen-
eralized straightforward ly to n dimensions, for any n,
as can the notions of area and volume.
   Now let us suppose that an n-dimensional convex
body K is specified for us in the following sense: we
have a computer program that runs quickly and tells us,
for each point (x1 , . . . , xn ), whether or not that point   this problem. It is to design carefully a random walk
belongs to K. How can we estimate the volume of K?
One of the most powerful methods for problems like
this is statistical: you choose points at random and see
whether they belong to K, basing your estimate of the
volume of K on the frequency with which they do. For
example, if you wanted to estimate π , you could take a
circle of radius 1, enclose it in a square of side-length
2, and choose a large number of points randomly from
the square. Each point has a probability π /4 (the ratio
of the area π of the circle to the area 4 of the square)

I. Introduction
of belonging to the circle, so we can estimate π by tak-
ing the proportion of points that fall in the circle and
multiplying it by 4.
This approach works quite easily for very low dimen-
sions but as soon as n is at all large it runs into a severe
difficulty. Suppose for example that we were to try to
use the same method for estimating the volume of an
n-dimensional sphere. We would enclose that sphere
in an n-dimensional cube, choose points at random
in the cube, and see how often they belonged to the
sphere as well. However, the ratio of the volume of an
n-dimensional sphere to that of an n-dimensional cube
that contains it is exponentially small, which means
that the number of points you have to pick before
even one of them lands in the sphere is exponen-
tially large. Therefore, the method becomes hopelessly
impractical.
All is not lost, though, because there is a trick for
getting around this difficulty. You define a sequence
of convex bodies, K0 , K1 , . . . , Km , each contained in the
want to know, and ending with the cube, in such a way
that the volume of Ki is always at least half that of Ki+1 .
Then for each i you estimate the ratio of the volumes of
Ki−1 and Ki . The product of all these ratios will be the
ratio of the volume of K0 to that of Km . Since you know
the volume of Km , this tells you the volume of K0 .
How do you estimate the ratio of the volumes of Ki−1
and Ki ? You simply choose points at random from Ki
and see how many of them belong to Ki−1 . However, it is
just here that the true subtlety of the problem arises:
how do you choose points at random from a convex
body Ki that you do not know much about? Choosing a
random point in the n-dimensional cube is easy, since
all you need to do is independently choose n random
numbers x1 , . . . , xn , each between −1 and 1. But for a
general convex body it is not easy at all.
There is a wonderfully clever idea that gets around
that starts some where inside the convex body and at
each step moves to another point, chosen at random
from just a few possibilities. The more random steps
of this kind that are taken, the less can be said about
where the point is, and if the walk is defined prop-
erly, it can be shown that after not too many steps,
the point reached is almost purely random. However,
the proof is not at all easy. (It is discussed further in
high-dimensional geometry and its probabilistic
analogues [IV.26 §6].)

$I$ . $4$ .

The General Goals of Mathematical Research For further discussion of algorithms and their mathematical importance, see algorithms [II.4](/part-02/algorithms), computational number theory [IV.3](/part-04/computational-number-theory), computational complexity [IV.20](/part-04/computational-complexity), and the mathematics of algorithm design [VII.5](/part-07/the-mathematics-of-algorithm-design). $10$ What Do You Find in a Mathematical Paper? Mathematical papers have a very distinctive style, one that became established early in the twentieth century.
This final section is a description of what mathematicians actually produce when they write. A typical paper is usually a mixture of formal and in formal writing. Ideally (but by no means always), the author writes a readable introduction that tells the reader what to expect from the rest of the paper. And if the paper is divided into sections, as most papers are unless they are quite short, then it is also very helpful to the reader if each section can begin with an in formal out line of the arguments to follow.
But the main substance of the paper has to be more formal and detailed, so that readers who are prepared to make a sufficient effort can convince themselves that it is correct. The object of a typical paper is to establish mathematical statements. Some times this is an end in itself: for example, the justification for the paper may be that it proves a conjecture that has been open for twenty years. Some times the mathematical statements are established in the service of a wider aim, such as helping to explain a mathematical phenomenon that is poorly understood.
But either way, mathematical statements are the main currency of mathematics. The most important of these statements are usually called theorems, but one also finds statements called propositions, lemmas, and corollaries. One cannot always draw sharp distinctions between these kinds of statements, but in broad terms this is what the different words mean. A theorem is a statement that you regard as intrinsically interesting, a statement that you might think of isolating from the paper and telling other mathematicians about in a seminar, for instance.
The statements that are the main goals of a paper are usually called theorems. A proposition is a bit like a theorem, but it tends to be slightly “boring.” It may seem odd to want to prove boring results, but they can be important and useful. What makes them boring is that they do not surprise us in any way. They are statements that we need, that we expect to be true, and that we do not have much difficulty proving.

$73$

Here is a quick example of a statement that one might choose to call a proposition. The associative law for a binary operation [I.2](/part-01/language-and-grammar) “∗” states that x ∗ ( y ∗ z) = (x ∗ y) ∗ z . One often describes this law informally by saying that “brackets do not matter.” However, while it shows that we can write x ∗ y ∗ z with out fear of ambiguity, it does not show quite so obviously that we can write a ∗ b ∗ c ∗ d ∗ e, for example.
How do we know that, just because the positions of brackets do not matter when you have three objects, they do not matter when you have more than three? Many mathematics students go happily through university with out noticing that this is a problem. It just seems obvious that the associative law shows that brackets do not matter. And they are basically right: although it is not completely obvious, it is certainly not a surprise and turns out to be easy to prove. Since we often need this simple result and could hardly call it a theorem, we might call it a proposition instead.
To get a feel for how to prove it, you might wish to show that the associative law implies that (a ∗ ((b ∗ c) ∗ d)) ∗ $e = a$ ∗ (b ∗ ((c ∗ d) ∗ e)). Then you can try to generalize what it is you are doing. Often, if you are trying to prove a theorem, the proof becomes long and complicated, in which case if you want any body to read it you need to make the structure of the argument as clear as possible. One of the best ways of doing this is to identify subgoals, which take the form of statements intermediate between your initial assumptions and the conclusion you wish to draw from them.
These statements are usually called lemmas. Suppose, for example, that you are trying to give a very √ detailed presentation of the standard proof that $2$ is irrational. One of the facts you will need is that every fraction p / q is equal to a fraction r / s with $r$ and $s$ not both even, and this fact requires a proof. For the sake of clarity, you might well decide to isolate this proof from the main proof and call the fact a lemma. Then you have split your task into two separate tasks: proving the lemma, and proving the main theorem using the lemma.
One can draw a parallel with computer programming: if you are writing a complicated program, it is good practice to divide your main task into subtasks and write separate mini-programs for them, which you can then treat as “black boxes,” to be called upon by other parts of the program whenever they are useful. Some lemmas are difficult to prove and are useful in many different contexts, so the most important lemmas can be more important than the least important

74

theorems. However, a general rule is that a result will
be called a lemma if the main reason for proving it is
in order to use it as a stepping stone toward the proofs     particular part III. Some definitions are given simply
of other results.
   A corollary of a mathematical statement is another
statement that follows easily from it. Some times the
main theorem of a paper is followed by several corollar-     vertices and the opposite sides, then it is a nuisance to
ies, which advertise the strength of the theorem. Some-
times the main theorem itself is labeled a corollary,
because all the work of the proof goes into proving a
different, less punchy statement from which the theo-
rem follows very easily. If this happens, the author may     that vertex to the opposite side.” If I am looking at tri-
wish to make clear that the corollary is the main result     angles with obtuse angles, then I will have to be more
of the paper, and other authors would refer to it as a
theorem.
   A mathematical statement is established by means
of a proof. It is a remarkable feature of mathematics
that proofs are possible: that, for example, an argument     be much more crisp.
invented by euclid [VI.2](/part-06/euclid-ca) over two thousand years ago
can still be accepted today and regarded as a com-
pletely convincing demonstration. It took until the late
nineteenth and early twentieth centuries for this phe-
nomenon to be properly understood, when the lan-
guage of mathematics was formalized (see the lan-
guage and grammar of mathematics [I.2](/part-01/language-and-grammar), and espe-
cially section 4, for an idea of what this means). Then it
became possible to make precise the notion of a proof
as well. From a logician’s point of view a proof is a
sequence of mathematical statements, each written in a
formal language, with the following properties: the first
few statements are the initial assumptions, or premises;
each remaining statement in the sequence follows from
earlier ones by means of logical rules that are so simple
that the deductions are clearly valid (for instance rules
such as “if P ∧ Q is true then P is true,” where “∧” is
the logical symbol for “and”); and the final statement
in the sequence is the statement that is to be proved.
   The above idea of a proof is a considerable idealiza-     branches of mathematics than in others. Some math-
tion of what actually appears in a normal mathemat-
ical paper under the heading “Proof.” That is because
a purely formal proof would be very long and almost
impossible to read. And yet, the fact that arguments
can in principle be formalized provides a very valuable
underpinning for the edifice of mathematics, because
it gives a way of resolving disputes. If a mathematician     with the help of the new definition, but, like the min-
produces an argument that is strangely unconvincing,
then the best way to see whether it is correct is to ask     the theory. Rather, they will demonstrate the power
him or her to explain it more formally and in greater
detail. This will usually either expose a mistake or make    purpose of definitions is to prove theorems, but even
it clearer why the argument works.

I. Introduction
Another very important component of mathematical
papers is definitions. This book is full of them: see in
because they enable one to speak more concisely. For
example, if I am proving a result about triangles and
I keep needing to consider the distances between the
have to say “the distances from A, B, and C to the lines
BC, AC, and AB, respectively,” so instead I will probably
choose a word like “altitude” and write, “Given a vertex
of a triangle, define its altitude to be the distance from
careful: “Given a vertex A of a triangle ABC, define its
altitude to be the distance from A to the unique line
that passes through B and C.” From then on, I can use
the word “altitude” and the exposition of my proof will
Definitions like this are mere definitions of conve-
nience. When the need arises, it is pretty obvious what
to do and one does it. But the really interesting defini-
tions are ones that are far from obvious and that make
you think in new ways once you know them. A very good
example is the definition of the derivative of a function.
If you do not know this definition, you will have no idea
how to find out for which nonnegative x the function
f (x) = 2 x 3 −3 x 2 −6 x+1 takes its smallest value. If you
do know it, then the problem becomes a simple exer-
cise. That is perhaps an exaggeration, since you also
need to know that the minimum will occur either at 0
or at a point where the derivative vanishes, and you will
need to know how to differentiate f (x), but these are
simple facts—propositions rather than theorems—and
the real breakthrough is the concept itself.
There are many other examples of definitions like
this, but interestingly they are more common in some
ematicians will tell you that the main aim of their
research is to find the right definition, after which their
whole area will be illuminated. Yes, they will have to
write proofs, but if the definition is the one they are
looking for, then these proofs will be fairly straight for-
ward. And yes, there will be problems they can solve
im ization problem above, these will not be central to
of the definition. For other mathematicians, the main
very theorem-oriented mathematicians will from time

$I$ . $4$ .

The General Goals of Mathematical Research to time find that a good definition can have a major effect on their problem-solving prowess. This brings us to mathematical problems. The main aim of an article in mathematics is usually to prove theorems, but one of the reasons for reading an article is to advance one’s own research. It is therefore very welcome if a theorem is proved by a technique that can be used in other contexts. It is also very welcome if an article contains some good unsolved problems.
By way of illustration, let us look at a problem that most mathematicians would not take all that seriously, and try to see what it lacks. A number is called palindromic if its representation in base $10$ is a palindrome: some simple examples are $22$ , $131$ , and 548845 . Of these, $131$ is interesting because it is also a prime. Let us try to find some more prime palindromic numbers. Single-digit primes are of course palindromic, and two-digit palindromic numbers are multiples of $11$ , so only $11$ itself is also a prime. So let us move quickly on to three-digit numbers.
Here there turn out to be several examples: $101$ , $131$ , $151$ , $181$ , $191$ , $313$ , $353$ , $373$ , $383$ , $727$ , $757$ , $787$ , $797$ , $919$ , and $929$ . It is not hard to show that every palindromic number with an even number of digits is a multiple of $11$ , but the palindromic primes do not stop at $929$ -- for example, 10301 is the next smallest. And now any body with a modicum of mathematical curiosity will ask the question: are there infinitely many palindromic primes? This, it turns out, is an unsolved problem.
It is believed (on the combined grounds that the primes should be sufficiently random and that palindromic numbers with an odd number of digits do not seem to have any particular reason to be factorizable) that there are, but nobody knows how to prove it. This problem has the great virtue of being easy to understand, which makes it appealing in the way that fermat’s last theorem [V.10](/part-05/fermats-last-theorem) and goldbach’s conjecture [V.27](/part-05/problems-and-results-in-vi36-peter-gustav-lejeune-dirichlet-18051859) are appealing.
And yet, it is not a central problem in the way that those two are: most mathematicians would put it into a mental box marked “recreational” and forget about it. What is the reason for this dismissive attitude? Are the primes not central objects of study in mathematics? Well, yes they are, but palindromic numbers are not. And the main reason they are not is that the definition of “palindromic” is extremely unnatural. If you know that a number is palindromic, what you know is less a feature of the number itself and more a feature of the particular way that, for accidental historical reasons,

$75$

we choose to represent it. In particular, the property depends on our choice of the number $10$ as our base. For example, if we write $131$ in base $3$ , then it becomes 11212 , which is no longer the same when written backwards. By contrast, a prime number is prime however you write it. Though persuasive, this is not quite a complete explanation, since there could conceivably be interesting properties that involved the number $10$ , or at least some artificial choice of number, in an essential way.
For example, the problem of whether there are infinitely many primes of the form $2^{n} - 1$ is considered interesting, despite the use of the particular number $2$ . However, the choice of $2$ can be justified here: $a^{n} - 1$ has a factor $a - 1$ , so for any larger integer the answer would be no. More over, numbers of the form $2^{n} - 1$ have special properties that make them more likely to be prime.
(See computational number theory [IV.3](/part-04/computational-number-theory) for an explanation of this point .) But even if we replace $10$ by the “more natural” number $2$ and look at numbers that are palindromic when written in binary, we still do not obtain a property that would be considered a serious topic for research. Suppose that, given an integer n, we define r (n) to be the reverse of n--that is, the number obtained if you write n in binary and then reverse its digits. Then a palindromic number, in the binary sense, is a number n such that $n = r$ (n).
But the function r (n) is very strange and “unmathematical.” For instance, the reverses of the numbers from $1$ to $20$ are $1$ , $1$ , $3$ , $1$ , $5$ , $3$ , $7$ , $1$ , $9$ , $5$ , $13$ , $3$ , $11$ , $7$ , $15$ , $1$ , $17$ , $9$ , $25$ , and $5$ , which gives us a sequence with no obvious pattern. Indeed, when one calculates this sequence, one realizes that it is even more artificial than it at first seemed. One might imagine that the reverse of the reverse of a number is the number itself, but that is not so.
If you take the number $10$ , for example, it is 1010 in binary, so its reverse is 0101 , which is the number $5$ . But this we would normally write as $101$ , so the reverse of $5$ is not $10$ but $5$ . But we cannot solve this problem by deciding to write $5$ as 0101 , since then we would have the problem that $5$ was no longer palindromic, when it clearly ought to be. Does this mean that nobody would be interested in a proof that there were infinitely many palindromic primes? Not at all.
It can be shown quite easily that the number of palindromic numbers less than n is in √ the region of n, which is a very small fraction indeed. It is notoriously hard to prove results about primes in sparse sets like this, so a solution to this conjecture would be a big breakthrough. However, the definition

$76$

of “palindromic” is so artificial that there seems to be no way of using it in a detailed way in a mathematical proof. The only realistic hope of solving this problem would be to prove a much more general result, of which this would be just one of many consequences. Such a result would be wonderful, and undeniably interesting, but you will not discover it by thinking about palindromic numbers. Instead, you would be better off either trying to formulate a more general question, or else looking at a more natural problem of a similar kind. An example of the latter is this:
are there infinitely many primes of the form $m^{2} + 1$ for some positive integer m? Perhaps the most important feature of a good problem is generality: the solution to a good problem should usually have ramifications beyond the problem itself. A more accurate word for this desirable quality is “general iz ability,” since some excellent problems may look √ rather specific. For example, the statement that $2$ is irrational looks as though it is about just one number,

I. Introduction

but once you know how to prove it, you will have no √ difficulty in proving that $3$ is irrational as well, and in fact the proof can be generalized to a much wider class of numbers (see algebraic numbers [IV.1](/part-04/number-theory)). It is quite common for a good problem to look uninteresting until you start to think about it. Then you realize that it has been asked for a reason: it might be the “first difficult case” of a more general problem, or it might be just one well-chosen example of a cluster of problems, all of which appear to run up against the same difficulty.
Some times a problem is just a question, but frequently the person who asks a mathematical question has a good idea of what the answer is. A conjecture is a mathematical statement that the author firmly believes but cannot prove. As with problems, some conjectures are better than others: as we have already discussed in section $8$ . $1$ , the very best conjectures can have a major effect on the direction of mathematical research.