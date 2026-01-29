# The Uniformization Theorem

728                                                                                    V. Theorems and Problems

with exciting results continuing to appear. One recent      mathematical advances it has generated as in the prob-
example is a convergent power-series solution for the       lem itself. A notable example of this is the develop-
general n-body problem, which was discovered by Don         ment of KAM theory, which provides methods for inte-
Wang in 1991.                                               grating perturbed Hamiltonian systems and obtaining
   Since the three-body problem itself proved so in-        results that are valid for infinite periods of time. This
tractable, simplified versions were developed, of which      was developed in the 1950 s and 1960 s by kolmogorov
the most famous is the one now known as the restricted      [VI.88](/part-06/andrei-nikolaevich-kolmogorov-19031987), Arnold, and Moser.
three-body problem (the name is due to Poincaré),
which was first investigated by Euler. In this case, two     Thurston’s Geometrization Conjecture
of the bodies (the primaries) revolve around their joint       See the poincaré conjecture [V.25](/part-05/the-poincar-conjecture)
center of mass in circular orbits under the influence
of their mutual gravitational attraction, while the third
body (the planetoid), which is assumed to have such         V.34    The Uniformization Theorem
small mass that the force it exerts on the other two bod-
ies can be neglected, moves in the plane defined by the      The uniformization theorem is a remarkable classifi-
primaries. The advantage of this formulation is that the    cation of riemann surfaces [III.79](/part-03/riemann-surfaces). Two surfaces are
motion of the primaries can be treated as a two-body        bi holomorphically equivalent if there is a holomor-
problem and is hence known; it remains only to inves-       phic function [I.3 §5.6](/part-01/fundamental-definitions) from one to the other that
tigate the motion of the planetoid, which can be done       has a holomorphic inverse. If a Riemann surface is sim-
using perturbation theory. Although the restricted for-     ply connected [III.93](/part-03/universal-covers), then the uniformization theo-
mulation might appear artificial, it provides a good         rem states that it is bi holomorphically equivalent to the
approximation to real physical situations, such as, for     sphere, the Euclidean plane, or the hyperbolic plane
example, the problem of determining the motion of           [I.3 §6.6](/part-01/fundamental-definitions). These three spaces can all be viewed as Rie-
the Moon around Earth given the presence of the Sun.        mann surfaces, and they are all particularly symmetric:
Poincaré wrote extensively on the restricted problem,       they have constant curvature [III.78](/part-03/ricci-flow) (positive, zero,
and the techniques he developed to tackle it led to his     and negative, respectively); more generally, given any
discovery of mathematical chaos, as well as laying the      two points x and y in such a space, one can find a
foundations for modern dynamical systems [IV.14](/part-04/dynamics)            symmetry of the space that takes x to y, and one can
theory.                                                     ensure that a little arrow at x ends up pointing in any
   Apart from its intrinsic appeal as a problem that        desired direction at y. Loosely speaking, these spaces
is simple to state, the three-body problem has a fur-       “look the same from every point.”
ther attribute that has contributed to its attraction for      It can be shown that an open subset of C that is not
potential solvers: its intimate link with the fundamen-     the whole of C cannot be bi holomorphically equivalent
tal question of the stability of the solar system. That     to the sphere or to C. Therefore, by the uniformization
is the question of whether the planetary system will        theorem, a simply connected open subset of C that is
always keep the same form as it has now, or whether,        not the whole of C must be bi holomorphically equiva-
eventually, one of the planets will escape or, perhaps      lent to the hyperbolic plane. This proves that any such
worse, experience a collision. Since bodies in the solar    set, no matter how irregular its boundary might be,
system are approximately spherical and their dimen-         can be mapped bi holomorphically to any other. This
sions extremely small when compared with the dis-           result is called the Riemann mapping theorem. Biholo-
tances between them, they can be considered as point        morphic maps are conformal: that is, if two curves in
masses. Ignoring all other forces, such as solar winds or   one set meet at an angle θ, then the angle between
relativistic effects, and taking only gravitational forces   their images in the other set is also θ. So the Rie-
into account, the solar system can be modeled as a ten-     mann mapping theorem implies that the interior of
body problem with one large mass and nine small ones,       any simple closed curve can be mapped in an angle-
and it can be investigated accordingly.                     preserving way to the open unit disk. Recall that one of
   Over the years, attempts to find a solution to the        the main models of the hyperbolic plane is Poincaré’s
three-body problem (and the related n-body prob-            disk model. Thus, the hyperbolic metric on the disk
lem), have spawned a wealth of research. As a result,       together with the biholomorphic map that is given
the importance of the problem is as much in the             by the uniformization theorem can be used to define

