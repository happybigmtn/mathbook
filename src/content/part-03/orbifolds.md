# Orbifolds

III.65.    Orbifolds

largest that 4 y − x can be if (x, y) is a point on the
curve. So we want to find the largest value of V for
which the corresponding contour 4 y − x = V contains
a point on the curve. The value of V increases as the
lines move up the diagram, and the upper most line that
touches the curve is the one labeled 4 y − x = 7. So the
maximum value we are looking for is 7, and it occurs at
the point where the line 4 y − x = 7 touches the curve.
It is easy to check that this point is (1, 2).
   How could we locate this point algebraically, rather
than by drawing? The important thing to notice is that
the optimizing line is tangent to the curve: the line and    tion F of many variables x1 , . . . , xn under many con-
the curve are parallel at their common point. The line
was chosen to be a contour of the function F . The curve     Gm (x1 , . . . , xn ) = 0. In this case we introduce a
is also a contour: the 0 contour of G. From the discus-
sion in the previous section we know that these con-
tours are perpendicular to the gradients of F and G,
respectively (at the point in question). So the two gradi-
ent vectors are parallel to one another and are therefore
multiples of one another: ∇F = λ∇G, say.

   We thus have a way to hunt for solutions to the
constrained optimization problem

We look for a point (x, y) and a number . ambda such that

  For our example (2), the gradient equation gives two
partial derivative equations,
     −1 = λ(2 x − y − 1),
from which we conclude that

Substituting these values into the equation G(x, y) =
0, we obtain
which has two solutions: λ = 1 and λ = −1. If we sub-
stitute λ = 1 into (4), we get the point (1, 2) where F is   As we have just seen, at the optimum point we have an
at its maximum. (Taking λ = −1 yields the minimum.)
   The number . ambda that we introduced to solve the prob-
lem is called a Lagrange multiplier. It is possible to
reformulate the problem by defining the Lagrangian

and then condensing the equations (3) into a single
equation
The reason this works is that if we differentiate L with
respect to λ, then we obtain G(x, y), so requiring this

257
partial derivative to be zero is equivalent to requiring
G(x, y) to be zero. And asking for the other two par-
tial derivatives to be zero is equivalent to requiring
that ∇F = λ∇G. The remarkable fact about this refor-
mulation is that it has turned a constrained optimiza-
tion problem involving x and y into an unconstrained
problem involving x, y, and λ.
4   The General Method of Lagrange Multipliers
In real problems we may wish to optimize a func-
strain ts G1 (x1 , . . . , xn ) = 0, G2 (x1 , . . . , xn ) = 0, . . . ,
Lagrange multiplier for each constraint and define the
Lagrangian L by the formula
L(x1 , . . . , xn , λ1 , . . . , . ambda m )

m
= F (x1 , . . . , xn ) −
1
The partial derivative of L with respect to . ambda i is zero if
and only if Gi (x1 , . . . , xn ) = 0. And the partial deriva-
tives with respect to the xi will all be zero if and only if
maximize F (x, y) subject to G(x, y) = 0.
∇F = 1 . ambda i ∇Gi . This tells us that any direction that is
perpendicular to all the gradients ∇Gi (and therefore
∇F (x, y) = λ∇G(x, y)
dicular to the gradient ∇F as well, so we cannot find a
direction in which F increases while all the constraints
are satisfied.
4 = λ(−x + 2 y + 1),
where the objective function F is a cost (which we are
2+λ             7−. ambda probably trying to minimize), and the constraints force
x=
3λ              3. ambda satisfy certain over all demands. For instance, we might
want to minimize the total cost of supplies of various
13(1 − λ2 )                             different foodstuffs that between them had to satisfy
= 0,
3λ2                                 various nutritional demands. In this case, the Lagrange
multipliers have an interpretation as “notional prices.”
m
equation of the form ∇F = 1 . ambda i ∇Gi . This tells us how
much F will vary as we vary the Gi by small amounts:
that is, it tells us the costs associated with increasing
the various demands.
For a further use of Lagrange multipliers, see the
L(x, y, λ) = F (x, y) − . ambda G(x, y)
mathematics of traffic in networks [VII.4](/part-07/the-mathematics-of-trac-in-networks).
III.65       Orbifolds
∇L = 0.
If you take a quotient [I.3 §3.3](/part-01/fundamental-definitions) of the plane R2 by a
group of symmetries, then you may obtain a manifold