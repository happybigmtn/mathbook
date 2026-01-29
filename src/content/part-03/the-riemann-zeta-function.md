# The Riemann Zeta Function

III.80.   The Riemann Zeta Function                                                                                 283

rigid motion that maps F into C, so we can easily define       analytic function is harmonic and any harmonic func-
a coordinate system on F . If w is an interior point of       tion is (locally) the real part of an analytic function.
an edge E of C, we can “open” the two faces that meet         Thus, on a Riemann surface, complex analysis merges
at E to make a planar region that contains E, and then        almost imperceptibly with potential theory (which is
map this region into C by a Euclidean rigid motion. In        the study of harmonic functions).
this way we see that C (less its vertices) is a Riemann          Perhaps the most profound theorem of all about Rie-
surface. The problem with the vertices can be solved by       mann surfaces is the uniformization theorem [V.34](/part-05/the-uniformization-theorem).
technical means, and this method can then be general-         Roughly speaking, this says that every Riemann surface
ized to show that any polyhedron (even one with holes,        is obtained from either Euclidean, spherical, or hyper-
such as a “square” torus) is a Riemann surface. These         bolic geometry (see some fundamental mathemati-
are known as compact surfaces. It is a deep but fascinat-     cal definitions [I.3 §§6.2, 6.5, 6.6]) by taking a poly-
ing classical result that each such surface corresponds       gon in that geometry and gluing its sides together, in
bijectively to an irreducible polynomial P (z, w) in two      the same way that one obtains a torus by gluing oppo-
complex variables. To give an idea of how the corre-          site sides of a rectangle together. (See also fuchsian
spondence works, let us consider an equation such as          groups [III.28](/part-03/fuchsian-groups).) Remarkably, only very few Riemann
w 3 + wz + z2 = 0. For each z this can be solved to give      surfaces come from the Euclidean or spherical geome-
three values of w, say w1 , w2 , and w3 ; as we allow z       tries; essentially, every Riemann surface can be con-
to vary in C, the values wj vary, and as they do so they      structed in this way from (and only from) the hyper-
create a Riemann surface W , which can be shown to            bolic plane. This means that virtually every region in
be connected. This surface can be thought of as lying         the complex plane comes equipped with a natural and
“above” C, and for all but a finite set of z in C there are    intrinsic geometry whose character is hyperbolic and
exactly three points on W that are “above” z.                 not, as one might expect, Euclidean. The Euclidean char-
   As we have mentioned, Riemann surfaces are impor-          acter of a generic plane region comes from its embed-
tant because they are the most general surfaces on            ding in C, and not from its own intrinsic hyperbolic
which one can study analytic functions, with all of their     geometry.
remarkable properties. It is easy to define what we
mean by an analytic function f on a Riemann surface R.
                                                              III.80   The Riemann Zeta Function
Given a coordinate system on part of R, we can think of
f as a function of the coordinates, and we then regard
                                                              The Riemann zeta function ζ is a function defined on
f as analytic if and only if it depends analytically on the
                                                              the complex numbers that encapsulates in a remark-
coordinates. Because the transition maps are analytic,
                                                              able way many of the most important properties about
f will be analytic with respect to one coordinate system
                                                              the distribution of prime numbers. If s is a complex
if and only if it is analytic with respect to all the other
                                                              number with real part greater than 1, then ζ(s) is
coordinate systems defined at the point in question.                            \infty
                                                              defined to be n=1 n−s . The condition that Re(s) > 1
   This simple property—that if something holds in one
                                                              is needed to ensure that this series converges. How-
coordinate system, then it holds in all of them—is one
                                                              ever, because the resulting function is holomorphic
of the crucial features of the theory. For example, sup-
                                                              [I.3 §5.6](/part-01/fundamental-definitions), it is possible to extend the definition by
pose that we have two curves crossing on an (abstract)
                                                              means of analytic continuation. The result is a func-
Riemann surface. If we transfer the two curves to plane
                                                              tion that is defined every where on the complex plane
regions using different local coordinate systems at the
                                                              (though it takes the value \infty at 1).
crossing point, and then measure the angle of intersec-
                                                                 A first clue to why this function is related to the
tion in each case, we must get the same result (since
                                                              distribution of primes is Euler’s product formula:
the transition from one coordinate system to another                                   
preserves angles). It follows that the angle between                            ζ(s) =    (1 − p −s )−1 .
                                                                                       p
intersecting curves on an abstract Riemann surface is
a well-defined concept.                                        Here, the product on the right-hand side is over all
   It turns out that analysis on Riemann surfaces goes        primes. The formula can be proved by writing (1 −
beyond analytic functions. Harmonic functions (solu-          p −s )−1 as 1+p −s +p −2 s +· · · , expanding out the prod-
tions of laplace’s equation [I.3 §5.4](/part-01/fundamental-definitions)) are intimately        uct, and using the fundamental theorem of arith-
connected to analytic functions, since the real part of an    metic [V.14](/part-05/the-fundamental-theorem-of-arithmetic). Deeper connections were discovered by

