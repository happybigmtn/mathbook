# Orbifolds

III.65.    Orbifolds                                                                                                                   257

largest that 4 y − x can be if (x, y) is a point on the       partial derivative to be zero is equivalent to requiring
curve. So we want to find the largest value of V for          G(x, y) to be zero. And asking for the other two par-
which the corresponding contour 4 y − x = V contains          tial derivatives to be zero is equivalent to requiring
a point on the curve. The value of V increases as the        that ∇F = λ∇G. The remarkable fact about this refor-
lines move up the diagram, and the uppermost line that       mulation is that it has turned a constrained optimiza-
touches the curve is the one labeled 4 y − x = 7. So the      tion problem involving x and y into an unconstrained
maximum value we are looking for is 7, and it occurs at      problem involving x, y, and λ.
the point where the line 4 y − x = 7 touches the curve.
It is easy to check that this point is (1, 2).               4   The General Method of Lagrange Multipliers
   How could we locate this point algebraically, rather
than by drawing? The important thing to notice is that       In real problems we may wish to optimize a func-
the optimizing line is tangent to the curve: the line and    tion F of many variables x1 , . . . , xn under many con-
the curve are parallel at their common point. The line       straints G1 (x1 , . . . , xn ) = 0, G2 (x1 , . . . , xn ) = 0, . . . ,
was chosen to be a contour of the function F . The curve     Gm (x1 , . . . , xn ) = 0. In this case we introduce a
is also a contour: the 0 contour of G. From the discus-      Lagrange multiplier for each constraint and define the
sion in the previous section we know that these con-         Lagrangian L by the formula
tours are perpendicular to the gradients of F and G,          L(x1 , . . . , xn , λ1 , . . . , \lambda m )
respectively (at the point in question). So the two gradi-                                                    
                                                                                                              m
ent vectors are parallel to one another and are therefore                          = F (x1 , . . . , xn ) −       \lambda i Gi (x1 , . . . , xn ).
multiples of one another: ∇F = λ∇G, say.                                                                      1

   We thus have a way to hunt for solutions to the           The partial derivative of L with respect to \lambda i is zero if
constrained optimization problem                             and only if Gi (x1 , . . . , xn ) = 0. And the partial deriva-
                                                             tives with respect to the xi will all be zero if and only if
          maximize F (x, y) subject to G(x, y) = 0.                  m
                                                             ∇F = 1 \lambda i ∇Gi . This tells us that any direction that is
We look for a point (x, y) and a number \lambda such that          perpendicular to all the gradients ∇Gi (and therefore
      ∇F (x, y) = λ∇G(x, y)       and G(x, y) = 0.     (3)   lies in all their “contour hypersurfaces”) will be perpen-
                                                             dicular to the gradient ∇F as well, so we cannot find a
  For our example (2), the gradient equation gives two
                                                             direction in which F increases while all the constraints
partial derivative equations,
                                                             are satisfied.
     −1 = λ(2 x − y − 1),         4 = λ(−x + 2 y + 1),            Problems of this kind occur frequently in economics,
from which we conclude that                                  where the objective function F is a cost (which we are
                    2+λ             7−\lambda probably trying to minimize), and the constraints force
               x=         ,     y=        .            (4)   us to allocate spending among different items so as to
                      3λ              3\lambda Substituting these values into the equation G(x, y) =        satisfy certain overall demands. For instance, we might
0, we obtain                                                 want to minimize the total cost of supplies of various
                     13(1 − λ2 )                             different foodstuffs that between them had to satisfy
                                 = 0,
                         3λ2                                 various nutritional demands. In this case, the Lagrange
which has two solutions: λ = 1 and λ = −1. If we sub-        multipliers have an interpretation as “notional prices.”
stitute λ = 1 into (4), we get the point (1, 2) where F is   As we have just seen, at the optimum point we have an
                                                                                               m
at its maximum. (Taking λ = −1 yields the minimum.)          equation of the form ∇F = 1 \lambda i ∇Gi . This tells us how
   The number \lambda that we introduced to solve the prob-        much F will vary as we vary the Gi by small amounts:
lem is called a Lagrange multiplier. It is possible to       that is, it tells us the costs associated with increasing
reformulate the problem by defining the Lagrangian            the various demands.
                                                                For a further use of Lagrange multipliers, see the
               L(x, y, λ) = F (x, y) − \lambda G(x, y)
                                                             mathematics of traffic in networks [VII.4](/part-07/the-mathematics-of-trac-in-networks).
and then condensing the equations (3) into a single
equation
                                                             III.65       Orbifolds
                    ∇L = 0.
The reason this works is that if we differentiate L with      If you take a quotient [I.3 §3.3](/part-01/fundamental-definitions) of the plane R2 by a
respect to λ, then we obtain G(x, y), so requiring this      group of symmetries, then you may obtain a manifold

