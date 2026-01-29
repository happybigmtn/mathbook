# The Simplex Algorithm

288                                                                                               III. Mathematical Concepts

the potential V , and the map from V to f is known as                x2
the scattering transform. The scattering transform can
be viewed as a nonlinear variant of the fourier trans-                                             C
form [III.27](/part-03/the-fourier-transform); it is connected to many areas of partial
differential equations, such as the theory of integrable
systems.
  There are many generalizations and variants of the                  B
                                                                                                                D
Schrödinger equation; one can generalize to many-                                          P
particle systems, or add other forces such as mag-
netic fields or even nonlinear terms. One can also
couple this equation to other physical equations such
                                                                       O                                 E                  x1
as maxwell’s equations [IV.13 §1.1](/part-04/general-relativity-and-the-einstein-equations) of electromag-
netism, or replace the domain Rn by another space                              Figure 1 Feasible region “P” of an LP.
such as a torus, a discrete lattice, or a manifold. Alter-
natively, one could place some impenetrable obstacles
in the domain (thus effectively removing those regions               serious real-life problems, n and m can be greater than
of space from the domain). The study of all of these                100 000.
variants leads to a vast and diverse field in both pure
                                                                                  Maximize     x1 + 2 x2
mathematics and in mathematical physics.
                                                                                  subject to    − x1 + 2 x2 ⩽ 2,
III.84 The Simplex Algorithm                                                                       x1 + x2 ⩽ 4,
          Richard Weber                                                                          2 x1 − x2 ⩽ 5,

                                                                                               x1 , x2 ⩾ 0.
                1   Linear Programming
                                                                       The constraints define a feasible region for (x1 , x2 ),
The simplex algorithm is the preeminent tool for solv-
                                                                    a convex polygon that is depicted by the shaded region
ing some of the most important mathematical prob-
                                                                    “P” in figure 1. The two dotted lines mark those x where
lems arising in business, science, and technology. In
                                                                    the value of the objective function value is 4 and where
these problems, which are called linear programs, we
                                                                    it is 6. Clearly, it is maximized at point C.
are to maximize (or minimize) a linear function sub-
ject to linear constraints. An example is the diet prob-               The general story is similar to that of the example.
lem posed by the U.S. Air Force in 1947: find quantities             If the feasible region P = {x : Ax ⩽ b, x ⩾ 0} is
of seventy-seven differently priced foodstuffs (cheese,               nonempty, then it is a convex polytope in Rn , and an
spinach, etc.) to satisfy a man’s minimum daily require-            optimal solution can be found at one of its vertices.
ments for nine nutrients (protein, iron, etc.) at least             It is helpful to introduce “slack variables” x3 , x4 , x5 ⩾
cost. Further applications occur in choosing the ele-               0 to take up the slack on the left of the inequality
ments of an investment portfolio, rostering an airline’s            constraints. We can write
crew, and finding optimal strategies in two-person                              −x1 + 2 x2 + x3           = 2,
games. The study of linear programming has inspired                             x1 + x2       + x4      = 4,
many of the central ideas of optimization theory, such                         2 x1 − x2            + x5 = 5.
as duality [III.19](/part-03/duality), the importance of convexity, and
computational complexity [IV.20](/part-04/computational-complexity).                                   We now have three equations in five variables, so we
  The input data of a linear program (LP) consists of               can set any two of the variables x1 , . . . , x5 equal to 0,
two vectors b ∈ Rm and c ∈ Rn , and an m \times n matrix                 and solve the equations for the other three variables
A = (aij ). The problem is to find values for n non-                 (or solve a perturbation of them if they happen not
negative decision variables, x1 , . . . , xn , to maximize the      to be independent). There are ten ways to choose two
objective function c1 x1 + · · · + cn xn , subject to m con-        variables from five. Not all of the ten corresponding
straints, ai1 x1 + · · · + ain xn ⩽ bi , i = 1, . . . , m. In the   solutions satisfy x1 , x2 , x3 , x4 , x5 ⩾ 0, but five of them
diet problem, n = 77 and m = 9. In the following sim-               do. These are called basic feasible solutions (BFSs), and
ple example (not a diet problem), n = 2 and m = 3. In               correspond to the vertices of P marked O, B, C, D, E.

III.84.   The Simplex Algorithm                                                                                          289

            2   How the Algorithm Works                                 Dictionary 2                  Dictionary 3
                                                                               1       1                     1       2
George Dantzig invented the simplex algorithm in 1947               x2 = 1 + 2 x1 − 2 x3 ,        x1 = 2 + 3 x3 − 3 x4 ,
as a means of solving the Air Force’s diet problem men-             x4 = 3 − 32 x1 + 12 x3 ,      x2 = 2 − 13 x3 − 13 x4 ,
tioned at the start. The word “program” was not yet
                                                                    x5 = 6 − 32 x1 − 12 x3 ,      x5 = 3 − x3 + x4 ,
used to mean computer code, but was a military term                 T
                                                                   c x = 2 + 2 x1 − x3 .          c x = 6 − 13 x3 − 43 x4 .
                                                                                                  T
for a logistic plan or schedule. The fundamental fact on
which the algorithm relies is that if an LP has a bounded
                                                                   This shows that c T x can be increased by increasing
optimal solution, then the optimum value is attained at
                                                                x1 from 0, but that x1 can increase no further than 2
a BFS, i.e., at a vertex (or so-called “extreme point”) of
                                                                because at that point x4 = 0. This brings us to a new
the polytope of feasible points, P. Another name for
                                                                solution (2, 2, 0, 0, 3), which is vertex C. Once more, we
the feasible polytope is “simplex,” which is where the
                                                                are ready for step 1, and so compute dictionary 3, now
algorithm gets its name. It works as follows.
                                                                writing things in terms of x3 and x4 , which are 0. The
Step 0. Pick a BFS.                                             algorithm now stops because, as we require x3 , x4 ⩾ 0,
                                                                the bottom line of dictionary 3 proves that c T x ⩽ 6 for
Step 1. Test whether this BFS is optimal.
                                                                all feasible x.
  If so, stop. If not, go to step 2.
                                                                   There is other important information in the final
Step 2. Find a better BFS.                                      dictionary. If b is changed to b + , for small T =
                                                                (1 , 2 , 3 ), then the maximum value of c T x will change
Repeat from step 1.
                                                                to 6 + 13 1 + 43 2 . The coefficient 13 is called a “shadow
  Since there are only finitely many BFSs (i.e., vertices        price,” because it is what we should be willing to pay
of P), the algorithm must stop.                                 per unit increase in b1 .
   Now that we have an overview, let us look at the
details. Suppose that at step 0 we pick the BFS of                       3   How the Algorithm Performs
x = (x1 , x2 , x3 , x4 , x5 ) = (0, 0, 2, 4, 5), correspond-    In running the simplex algorithm the serious work
ing to vertex O. At step 1 we wish to know whether              comes in computing the dictionaries. To find dictio-
the objective function can be increased if x1 or x2 is          nary 2, we could use the first equation of dictionary 1
increased from 0. So we write x3 , x4 , x5 , and the objec-     to rewrite x2 in terms of x1 and x3 , and then substitute
tive function c T x in terms of x1 and x2 , and display         for x2 in the other equations. Versions of the simplex
this as dictionary 1.                                           algorithm have been invented that reduce the comput-
                                                                ing effort by taking advantage of special structure in
                        Dictionary 1                            the matrix A, such as the fact that most of its entries
                      x3 = 2 + x1 − 2 x2 ,                       are zero. The dictionary data is often held in a so-called
                      x4 = 4 − x1 − x2 ,                        tableau of coefficients.
                                                                   There are many other practical and theoretical issues.
                      x5 = 5 − 2 x1 + x2 ,
                                                                One concerns the selection of the pivot, that is, the vari-
                   c T x = x1 + 2 x2 .                           able that is to be increased from 0. Starting at O, and
                                                                depending on which of x1 and x2 we choose as the first
  The last equation in the dictionary shows that we can         variable to increase from zero, the path to C can be O,
increase the value of c T x by increasing either x1 or x2       E, D, C or O, B, C. There is no known way to guarantee
from 0. Suppose that we increase x2 . The first and sec-         that the algorithm takes the shortest path.
ond equations show that x3 and x4 must decrease, and               The question of how many steps the simplex algo-
we cannot increase x2 beyond 1, at which point x3 = 0           rithm really needs is related to the famous Hirsch con-
and x4 = 3, x5 = 6. Increasing x2 as much as pos-               jecture: that for any bounded n-dimensional polytope
sible, we complete step 2 and arrive at a new BFS of            with m faces, the diameter (defined as the maximum
x = (0, 1, 0, 3, 6), which is vertex B. Now we are ready        number of edges on the shortest edge-traversing path
for step 1 again, and so we write x2 , x4 , x5 , and c T x in   between any two vertices) is at most m − n. If this were
terms of the variables that are now zero, namely x1 , x3 ,      true, it would suggest that some version of the sim-
to give dictionary 2.                                           plex algorithm might run in a number of steps that

