# The Atiyah–Singer Index Theorem

                                                                                                Part V
                           Theorems and Problems

                                                              smaller than x 2 . But the ABC conjecture has other con-
V.1    The ABC Conjecture                                     sequences that are less obvious, and more important,
                                                              than this one. For instance, Bombieri has shown that
The ABC conjecture, proposed by Masser and Oesterlé           the ABC conjecture implies roth’s theorem [V.22](/part-05/liouvilles-theorem-and-roths-theorem),
in 1985, is a bold and very general conjecture in number      Elkies has shown that it implies the mordell conjec-
theory with a wide range of important consequences.           ture [V.29](/part-05/rational-points-on-curves-and-vi40-ernst-eduard-kummer-18101893), and Granville and Stark have shown that a
The rough idea of the conjecture is that it is impossible     strengthening of the ABC conjecture implies the non-
for one number to be the sum of two others if all three       existence of Siegel zeros (these are defined in analytic
numbers have many repeated prime factors and no two           number theory [IV.2](/part-04/number-theory)). It is also equivalent to strong
have a prime factor in common (which would then have          forms, as yet unproven, of a famous theorem of Baker
to be shared by the third).                                   in transcendence theory, and of the theorem of Wiles
   More precisely, one defines the radical of a positive       about modular forms [III.59](/part-03/modular-forms) that implies Fermat’s
integer n to be the product of all primes that divide         last theorem.
n, with each distinct prime included just once. For             The ABC conjecture is discussed further in compu-
instance, 3960 = 23 \times 32 \times 5 \times 11, so its radical is          tational number theory [IV.3](/part-04/computational-number-theory).
2 \times 3 \times 5 \times 11 = 330. Let us write rad(n) for the radical
of n. The ABC conjecture asserts that for every posi-         V.2 The Atiyah–Singer Index
tive real number  there is a constant K such that if            Theorem
a, b, and c are coprime integers and a + b = c, then                Nigel Higson and John Roe
c < K rad(abc)1+ .
   To get a feel for the meaning of this conjecture, con-                     1   Elliptic Equations
sider the Fermat equation x r + y r = zr . If three posi-
tive integers x, y, and z solve the equation, then we can     The Atiyah–Singer index theorem is concerned with the
divide through by any common factors they might have          existence and uniqueness of solutions to linear par-
and obtain a solution for which x, y, and z, and hence        tial differential equations of elliptic type. To understand
their r th powers, are coprime. Set a = x r , b = y r , and   this concept, consider the two equations
c = zr . Then                                                           ∂f     ∂f               ∂f      ∂f
                                                                            +     = 0 and           +i      = 0.
                                                                        ∂x     ∂y               ∂x      ∂y
   rad(abc) = rad(xyz) ⩽ xyz = (abc)1/r ⩽ c 3/r ,                                                   √
                                                              They differ only by the factor i = −1, but their solu-
where the last inequality follows from the fact that c        tions nevertheless have very different properties. Any
                                                   1
is greater than both a or b. If we set  to be 6 , then       function of the form f (x, y) = g(x − y) is a solu-
the ABC conjecture gives us a constant K such that c          tion to the first equation, but in the analogous gen-
cannot be more than K(c 3/r )7/6 = Kc 7/2 r . If r ⩾ 4 then    eral solution g(x + iy) of the second equation, g must
the power 7/2 r is less than 1, so the Fermat equation         be a holomorphic function [I.3 §5.6](/part-01/fundamental-definitions) of the complex
can have at most finitely many solutions with x, y, and        variable z = x + iy, and it was already known in the
z coprime.                                                    nineteenth century that such functions are very spe-
   It is clear that this is just one of a huge number         cial. For example, the first equation has an infinite-
of consequences of a similar kind. For instance, we           dimensional set of bounded solutions, but liouville’s
could deduce that there are only finitely many solu-           theorem [I.3 §5.6](/part-01/fundamental-definitions) in complex analysis asserts that the
tions of the equation 2 r + 3 s = x 2 , since the rad-          only bounded solutions of the second equation are the
ical of 2 r 3 s x 2 is at most 6 x, which is considerably        constant functions.

682                                                                                           V. Theorems and Problems

  The differences between the solutions of the two                                   3     An Example
equations can be traced to the differences between the
                                                                 To see in more detail how topology can be used to deter-
symbols of the equations, which are the polynomials in
                                                                 mine the Fredholm index of an elliptic equation, let us
real variables ξ, η that are obtained by substituting iξ
                                                                 look at a specific example. Consider elliptic equations
for ∂/∂x and iη for ∂/∂y. Thus the symbols of the two
                                                                 for which the coefficients aj (x) and b(x) are polyno-
equations above are
                                                                 mial functions of x, with aj of degree m − 1 or less
                      iξ + iη   and    iξ − η,                   and b of degree m or less. The expression
respectively. An equation is said to be elliptic if its sym-               iξ1 a1 (x) + · · · + iξn an (x) + b(x)
bol is zero only when ξ = η = 0; thus, the second
                                                                 is then a polynomial in both x and ξ of degree m or
equation is elliptic but the first is not. The fundamen-
                                                                 less. Let us strengthen the hypothesis of ellipticity by
tal regularity theorem, which is proved using fourier
                                                                 assuming that the terms in this expression that have
analysis [III.27](/part-03/the-fourier-transform), states that an elliptic partial differen-
                                                                 degree exactly m (jointly in x and ξ) define an invertible
tial equation (subject to suitable boundary conditions,
                                                                 matrix whenever either x or ξ is nonzero. Let us also
if needed) has a finite-dimensional solution space.
                                                                 agree to consider only solutions f of the equation or its
                                                                 adjoint that are square-integrable, which means that
          2   Topology of Elliptic Equations
               and the Fredholm Index                                                   |f (x)|2 dx < \infty.
Consider now the general first-order linear partial dif-          All these extra hypotheses are types of boundary con-
ferential equation                                               ditions (the behaviors of the equation and its solutions
                   ∂f                ∂f                          at infinity are controlled), and collectively they imply
              a1       + · · · + an     + bf = 0,
                   ∂x1              ∂xn                          that the Fredholm index is well-defined.
in which f is a vector-valued function and the coeffi-               A simple example is the equation
cients aj and b are complex matrix-valued functions.                                   df
                                                                                          + xf = 0.                     (1)
It is elliptic if its symbol                                                           dx
                   iξ1 a1 (x) + · · · + iξn an (x)               The general solution to this ordinary differential equa-
                                                                 tion is the one-dimensional space of multiples of the
is an invertible matrix for every nonzero vector ξ =                                            2
                                                                 square-integrable function e−x /2 . By contrast, the solu-
(ξ1 , . . . , ξn ) and every x. The regularity theorem applies
                                                                 tions of the adjoint equation
in this generality, and it allows us to form the Fredholm
                                                                                       df
index of an elliptic equation (with suitable boundary                                 −   + xf = 0
                                                                                       dx
conditions), which is the number of linearly indepen-                                               2
                                                                 are multiples of the function e+x /2 , which is not
dent solutions of the equation minus the number of
                                                                 square-integrable. Thus the index of this differential
linearly independent solutions of the adjoint equation
                                                                 equation is equal to 1.
           ∂                    ∂
      −      (a∗ f ) − · · · −    (a∗ f ) + b∗ f = 0.              Returning to the general equation, the terms of de-
          ∂x1 1                ∂xn n
                                                                 gree m in
The reason for introducing the Fredholm index is
that it is a topological invariant of elliptic equations.                  iξ1 a1 (x) + · · · + iξn an (x) + b(x)
This means that continuous variations in the coeffi-               determine a map from the unit sphere in (x, ξ)-space
cients of an elliptic equation leave the Fredholm index          to the set GLk (C) of invertible k \times k complex matrices.
unchanged. (By contrast, the number of linearly inde-            Moreover, every such map comes from an elliptic equa-
pendent solutions of an equation can vary as the coef-           tion (possibly of a more general type than we have dis-
ficients of the equation vary.) The Fredholm index is             cussed up to now, but an equation to which the basic
therefore constant on each connected component of                regularity theorem guaranteeing the existence of the
the set of all elliptic equations, and this raises the           Fredholm index applies). It therefore becomes impor-
prospect of using topology to determine the struc-               tant to determine the topological structure of the space
ture of the set of all elliptic equations as an aid to           of all maps from the sphere S 2 n−1 into GLk (C).
computing the Fredholm index. This observation was                  A remarkable theorem of Bott provides the answer.
made by Gelfand in the 1950 s. It lies at the root of the         The Bott periodicity theorem associates an integer,
Atiyah–Singer index theorem.                                     which we shall call the Bott invariant, with each map

V.2.   The Atiyah–Singer Index Theorem                                                                           683

S 2 n−1 → GLk (C). Further more, Bott’s theorem asserts       the Bott invariant. The Atiyah–Singer index theorem
that, provided that k ⩾ n, one such map can be con-         then asserts that the topological index of an elliptic
tinuously deformed into another if and only if the Bott     equation is equal to the Fredholm or analytical index of
invariants of the two maps agree. In the special case       the equation. The proof has two stages. In the first, the-
n = k = 1, where we are dealing with maps from the          orems are proved that allow one to transform an elliptic
one-dimensional circle into the nonzero complex num-        equation on a general manifold into an elliptic equation
bers, or in other words closed paths in C that do not       on a sphere without changing the topological or analyti-
pass through the origin, the Bott invariant is just the     cal indices. For example, it may be shown that two ellip-
classical winding number, which measures the num-           tic equations on different manifolds that are the com-
ber of times such a path winds around the origin. We        mon “boundary” of an elliptic equation on a manifold of
may therefore regard the Bott invariant as a generalized    one higher dimension must have the same topological
winding number.                                             and analytical indices. In the second stage of the proof
   The index theorem for equations of the type that we      the Bott periodicity theorem and an explicit computa-
are considering in this section asserts that the Fred-      tion are applied to identify the topological and analyti-
holm index of an elliptic equation is equal to the Bott     cal indices of elliptic equations on spheres. Through out
invariant of its symbol. For instance, in the case of the   both stages, an important tool is K-theory [IV.6 §6](/part-04/algebraic-topology),
simple example (1) considered above, the symbol iξ +x       which is a branch of algebraic topology invented by
corresponds to the identity map from the unit circle in     Atiyah and Hirzebruch.
(x, ξ)-space to the unit circle in C. Its winding number       Although the proof of the Atiyah–Singer index theo-
is equal to 1, in agreement with our computation of the     rem makes use of K-theory, the final result can be trans-
index.                                                      lated into terms that do not mention K-theory explic-
   The proof of the index theorem depends strongly on       itly. In this way one obtains an index formula roughly
Bott periodicity and proceeds as follows. Because ellip-    like this:
tic equations are classified topologically by the Bott                       index =       IM · ch(σ ).
                                                                                      M
invariant, and because the Bott invariant and the Fred-
holm index have analogous algebraic properties, one         The term IM is a differential form [III.16](/part-03/dierential-forms-and-integration) determined
need only verify the theorem in a single example: that      by the curvature [III.78](/part-03/ricci-flow) of the manifold M on which
corresponding to a symbol with Bott invariant 1. It         the equation is defined. The term ch(σ ) is a differential
turns out that this Bott generator can be represented       form obtained from the symbol of the equation.
by an n-dimensional generalization of our example (1),
and a computation in this case completes the proof.                           5    Applications

                                                            In order to prove the index theorem, Atiyah and Singer
        4   Elliptic Equations on Manifolds                 were obliged to study a very broad class of generalized
                                                            elliptic equations. However, the applications they first
It is possible to define elliptic equations not just for
                                                            had in mind were related to the simple equation with
functions f of n variables, but also for functions
                                                            which we began this article. Solutions of the equation
defined on a manifold [I.3 §6.9](/part-01/fundamental-definitions). Particularly accessi-
ble to analysis are the elliptic equations on closed man-                         ∂f    ∂f
                                                                                     +i    =0
ifolds, that is, on manifolds that are finite in extent                            ∂x    ∂y
and that have no boundary. For closed manifolds it is       are precisely the analytic functions of the complex vari-
not necessary to specify any boundary conditions in         able z = x + iy. There is a counterpart to this equation
order to obtain the basic regularity theorem for elliptic   on any riemann surface [III.79](/part-03/riemann-surfaces), and the Atiyah–Singer
equations (after all, there is no boundary). As a result,   index formula, applied in this instance, is equivalent to
every elliptic partial differential equation on a closed     a foundational result about the geometry of surfaces
manifold has a Fredholm index.                              called the riemann–roch theorem [V.31](/part-05/the-riemannroch-theorem). The Atiyah–
   The Atiyah–Singer index theorem concerns elliptic        Singer index theorem then gives a means to generalize
equations on closed manifolds and it has roughly the        the Riemann–Roch theorem to a complex manifold
same form as the index theorem that we studied in           [III.6 §2](/part-03/calabiyau-manifolds) of any dimension.
the previous section. One builds out of the symbol an          The Atiyah–Singer index theorem also has impor-
invariant called the topological index, which generalizes   tant applications outside of complex geometry. The

