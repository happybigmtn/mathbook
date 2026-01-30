# The Simplex Algorithm

288

the potential V , and the map from V to f is known as
the scattering transform. The scattering transform can
be viewed as a nonlinear variant of the fourier trans-
form [III.27](/part-03/the-fourier-transform); it is connected to many areas of partial
differential equations, such as the theory of integrable
systems.
  There are many generalizations and variants of the
Schrödinger equation; one can generalize to many-
particle systems, or add other forces such as mag-
netic fields or even nonlinear terms. One can also
couple this equation to other physical equations such
as maxwell’s equations [IV.13 §1.1](/part-04/general-relativity-and-the-einstein-equations) of electromag-
netism, or replace the domain Rn by another space
such as a torus, a discrete lattice, or a manifold. Alter-
native ly, one could place some impenetrable obstacles
in the domain (thus effectively removing those regions
of space from the domain). The study of all of these
variants leads to a vast and diverse field in both pure
mathematics and in mathematical physics.
III.84 The Simplex Algorithm

The simplex algorithm is the preeminent tool for solv-
ing some of the most important mathematical prob-
lems arising in business, science, and technology. In
these problems, which are called linear programs, we
are to maximize (or minimize) a linear function sub-
ject to linear constraints. An example is the diet prob-
lem posed by the U.S. Air Force in 1947: find quantities
of seventy-seven differently priced foodstuffs (cheese,
spinach, etc.) to satisfy a man’s minimum daily require-
ments for nine nutrients (protein, iron, etc.) at least
cost. Further applications occur in choosing the ele-
ments of an investment portfolio, rostering an airline’s
crew, and finding optimal strategies in two-person
games. The study of linear programming has inspired
many of the central ideas of optimization theory, such
as duality [III.19](/part-03/duality), the importance of convexity, and
computational complexity [IV.20](/part-04/computational-complexity).
  The input data of a linear program (LP) consists of
two vectors b ∈ Rm and c ∈ Rn , and an m . imes n matrix
A = (aij ). The problem is to find values for n non-
negative decision variables, x1 , . . . , xn , to maximize the
objective function c1 x1 + · · · + cn xn , subject to m con-
strain ts, ai1 x1 + · · · + ain xn ⩽ bi , i = 1, . . . , m. In the   solutions satisfy x1 , x2 , x3 , x4 , x5 ⩾ 0, but five of them
diet problem, n = 77 and m = 9. In the following sim-
ple example (not a diet problem), n = 2 and m = 3. In

III. Mathematical Concepts
x2
C
B
D
P
O                                 E                  x1
Figure 1 Feasible region “P” of an LP.
serious real-life problems, n and m can be greater than
100 000.
Maximize     x1 + 2 x2
subject to    − x1 + 2 x2 ⩽ 2,
x1 + x2 ⩽ 4,
Richard Weber
x1 , x2 ⩾ 0.
1   Linear Programming
The constraints define a feasible region for (x1 , x2 ),
a convex polygon that is depicted by the shaded region
“P” in figure 1. The two dotted lines mark those x where
the value of the objective function value is 4 and where
it is 6. Clearly, it is maximized at point C.
The general story is similar to that of the example.
If the feasible region P = {x : Ax ⩽ b, x ⩾ 0} is
nonempty, then it is a convex polytope in Rn , and an
optimal solution can be found at one of its vertices.
It is helpful to introduce “slack variables” x3 , x4 , x5 ⩾
0 to take up the slack on the left of the inequality
constraints. We can write
−x1 + 2 x2 + x3
x1 + x2
2 x1 − x2
We now have three equations in five variables, so we
can set any two of the variables x1 , . . . , x5 equal to 0,
and solve the equations for the other three variables
(or solve a perturbation of them if they happen not
to be independent). There are ten ways to choose two
variables from five. Not all of the ten corresponding
do. These are called basic feasible solutions (BFSs), and
correspond to the vertices of P marked O, B, C, D, E.

III.84.   The Simplex Algorithm

George Dantzig invented the simplex algorithm in 1947
as a means of solving the Air Force’s diet problem men-
tioned at the start. The word “program” was not yet
used to mean computer code, but was a military term
for a logistic plan or schedule. The fundamental fact on
which the algorithm relies is that if an LP has a bounded
optimal solution, then the optimum value is attained at
a BFS, i.e., at a vertex (or so-called “extreme point”) of
the polytope of feasible points, P. Another name for
the feasible polytope is “simplex,” which is where the
algorithm gets its name. It works as follows.
Step 0. Pick a BFS.
Step 1. Test whether this BFS is optimal.
  If so, stop. If not, go to step 2.
Step 2. Find a better BFS.
Repeat from step 1.
  Since there are only finitely many BFSs (i.e., vertices
of P), the algorithm must stop.
   Now that we have an over view, let us look at the
details. Suppose that at step 0 we pick the BFS of
x = (x1 , x2 , x3 , x4 , x5 ) = (0, 0, 2, 4, 5), correspond-    In running the simplex algorithm the serious work
ing to vertex O. At step 1 we wish to know whether
the objective function can be increased if x1 or x2 is
increased from 0. So we write x3 , x4 , x5 , and the objec-     to rewrite x2 in terms of x1 and x3 , and then substitute
tive function c T x in terms of x1 and x2 , and display
this as dictionary 1.

  The last equation in the dictionary shows that we can
increase the value of c T x by increasing either x1 or x2
from 0. Suppose that we increase x2 . The first and sec-
ond equations show that x3 and x4 must decrease, and
we cannot increase x2 beyond 1, at which point x3 = 0
and x4 = 3, x5 = 6. Increasing x2 as much as pos-
sible, we complete step 2 and arrive at a new BFS of
x = (0, 1, 0, 3, 6), which is vertex B. Now we are ready
for step 1 again, and so we write x2 , x4 , x5 , and c T x in   between any two vertices) is at most m − n. If this were
terms of the variables that are now zero, namely x1 , x3 ,
to give dictionary 2.

289
2   How the Algorithm Works
1       1                     1       2
x2 = 1 + 2 x1 − 2 x3 ,
x4 = 3 − 32 x1 + 12 x3 ,
x5 = 6 − 32 x1 − 12 x3 ,      x5 = 3 − x3 + x4 ,
T
c x = 2 + 2 x1 − x3 .          c x = 6 − 13 x3 − 43 x4 .
T
This shows that c T x can be increased by increasing
x1 from 0, but that x1 can increase no further than 2
because at that point x4 = 0. This brings us to a new
solution (2, 2, 0, 0, 3), which is vertex C. Once more, we
are ready for step 1, and so compute dictionary 3, now
writing things in terms of x3 and x4 , which are 0. The
algorithm now stops because, as we require x3 , x4 ⩾ 0,
the bottom line of dictionary 3 proves that c T x ⩽ 6 for
all feasible x.
There is other important information in the final
dictionary. If b is changed to b + , for small T =
(1 , 2 , 3 ), then the maximum value of c T x will change
to 6 + 13 1 + 43 2 . The coefficient 13 is called a “shadow
price,” because it is what we should be willing to pay
per unit increase in b1 .
3   How the Algorithm Performs
comes in computing the dictionaries. To find dictio-
nary 2, we could use the first equation of dictionary 1
for x2 in the other equations. Versions of the simplex
algorithm have been invented that reduce the comput-
ing effort by taking advantage of special structure in
Dictionary 1                            the matrix A, such as the fact that most of its entries
x3 = 2 + x1 − 2 x2 ,                       are zero. The dictionary data is often held in a so-called
x4 = 4 − x1 − x2 ,                        tableau of coefficients.
There are many other practical and theoretical issues.
x5 = 5 − 2 x1 + x2 ,
One concerns the selection of the pivot, that is, the vari-
c T x = x1 + 2 x2 .
depending on which of x1 and x2 we choose as the first
variable to increase from zero, the path to C can be O,
E, D, C or O, B, C. There is no known way to guarantee
that the algorithm takes the shortest path.
The question of how many steps the simplex algo-
rithm really needs is related to the famous Hirsch con-
jecture: that for any bounded n-dimensional polytope
with m faces, the diameter (defined as the maximum
number of edges on the shortest edge-traversing path
true, it would suggest that some version of the sim-
plex algorithm might run in a number of steps that