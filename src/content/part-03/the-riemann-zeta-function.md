# The Riemann Zeta Function

III.80.   The Riemann Zeta Function

rigid motion that maps F into C, so we can easily define
a coordinate system on F . If w is an interior point of
an edge E of C, we can “open” the two faces that meet
at E to make a planar region that contains E, and then
map this region into C by a Euclidean rigid motion. In
this way we see that C (less its vertices) is a Riemann
surface. The problem with the vertices can be solved by
technical means, and this method can then be general-
ized to show that any polyhedron (even one with holes,
such as a “square” torus) is a Riemann surface. These
are known as compact surfaces. It is a deep but fascinat-     cal definitions [I.3 §§6.2, 6.5, 6.6]) by taking a poly-
ing classical result that each such surface corresponds
bijectively to an irreducible polynomial P (z, w) in two
complex variables. To give an idea of how the corre-
spondence works, let us consider an equation such as
w 3 + wz + z2 = 0. For each z this can be solved to give
three values of w, say w1 , w2 , and w3 ; as we allow z
to vary in C, the values wj vary, and as they do so they
create a Riemann surface W , which can be shown to
be connected. This surface can be thought of as lying
“above” C, and for all but a finite set of z in C there are    intrinsic geometry whose character is hyperbolic and
exactly three points on W that are “above” z.
   As we have mentioned, Riemann surfaces are impor-
tant because they are the most general surfaces on
which one can study analytic functions, with all of their     geometry.
remarkable properties. It is easy to define what we
mean by an analytic function f on a Riemann surface R.
Given a coordinate system on part of R, we can think of
f as a function of the coordinates, and we then regard
f as analytic if and only if it depends analytically on the
coordinates. Because the transition maps are analytic,
f will be analytic with respect to one coordinate system
if and only if it is analytic with respect to all the other
coordinate systems defined at the point in question.
   This simple property—that if something holds in one
coordinate system, then it holds in all of them—is one
of the crucial features of the theory. For example, sup-
pose that we have two curves crossing on an (abstract)
Riemann surface. If we transfer the two curves to plane
regions using different local coordinate systems at the
crossing point, and then measure the angle of inter sec-
tion in each case, we must get the same result (since
the transition from one coordinate system to another
preserves angles). It follows that the angle between
intersecting curves on an abstract Riemann surface is
a well-defined concept.
   It turns out that analysis on Riemann surfaces goes
beyond analytic functions. Harmonic functions (solu-
tions of laplace’s equation [I.3 §5.4](/part-01/fundamental-definitions)) are intimately
connected to analytic functions, since the real part of an    metic [V.14](/part-05/the-fundamental-theorem-of-arithmetic). Deeper connections were discovered by

283
analytic function is harmonic and any harmonic func-
tion is (locally) the real part of an analytic function.
Thus, on a Riemann surface, complex analysis merges
almost imperceptibly with potential theory (which is
the study of harmonic functions).
Perhaps the most profound theorem of all about Rie-
mann surfaces is the uniformization theorem [V.34](/part-05/the-uniformization-theorem).
Roughly speaking, this says that every Riemann surface
is obtained from either Euclidean, spherical, or hyper-
bolic geometry (see some fundamental mathemat i-
gon in that geometry and gluing its sides together, in
the same way that one obtains a torus by gluing oppo-
site sides of a rectangle together. (See also fuchsian
groups [III.28](/part-03/fuchsian-groups).) Remarkably, only very few Riemann
surfaces come from the Euclidean or spherical geome-
tries; essentially, every Riemann surface can be con-
struc ted in this way from (and only from) the hyper-
bolic plane. This means that virtually every region in
the complex plane comes equipped with a natural and
not, as one might expect, Euclidean. The Euclidean char-
acter of a generic plane region comes from its embed-
ding in C, and not from its own intrinsic hyperbolic
III.80   The Riemann Zeta Function
The Riemann zeta function ζ is a function defined on
the complex numbers that encapsulates in a remark-
able way many of the most important properties about
the distribution of prime numbers. If s is a complex
number with real part greater than 1, then ζ(s) is
. nfty
defined to be n=1 n−s . The condition that Re(s) > 1
is needed to ensure that this series converges. How-
ever, because the resulting function is holomorphic
[I.3 §5.6](/part-01/fundamental-definitions), it is possible to extend the definition by
means of analytic continuation. The result is a func-
tion that is defined every where on the complex plane
(though it takes the value . nfty at 1).
A first clue to why this function is related to the
distribution of primes is Euler’s product formula:

ζ(s) =    (1 − p −s )−1 .
p
Here, the product on the right-hand side is over all
primes. The formula can be proved by writing (1 −
p −s )−1 as 1+p −s +p −2 s +· · · , expanding out the prod-
uct, and using the fundamental theorem of arith-