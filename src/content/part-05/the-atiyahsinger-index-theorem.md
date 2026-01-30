# The Atiyah–Singer Index Theorem

V.1    The ABC Conjecture
The ABC conjecture, proposed by Masser and Oesterlé
in 1985, is a bold and very general conjecture in number
theory with a wide range of important consequences.
The rough idea of the conjecture is that it is impossible     strengthening of the ABC conjecture implies the non-
for one number to be the sum of two others if all three
numbers have many repeated prime factors and no two
have a prime factor in common (which would then have
to be shared by the third).
   More precisely, one defines the radical of a positive
integer n to be the product of all primes that divide
n, with each distinct prime included just once. For
instance, 3960 = 23 . imes 32 . imes 5 . imes 11, so its radical is
2 . imes 3 . imes 5 . imes 11 = 330. Let us write rad(n) for the radical
of n. The ABC conjecture asserts that for every posi-
tive real number  there is a constant K such that if
a, b, and c are coprime integers and a + b = c, then
c < K rad(abc)1+ .
   To get a feel for the meaning of this conjecture, con-
sider the Fermat equation x r + y r = zr . If three posi-
tive integers x, y, and z solve the equation, then we can     The Atiyah–Singer index theorem is concerned with the
divide through by any common factors they might have
and obtain a solution for which x, y, and z, and hence
their r th powers, are coprime. Set a = x r , b = y r , and   this concept, consider the two equations
c = zr . Then
   rad(abc) = rad(xyz) ⩽ xyz = (abc)1/r ⩽ c 3/r ,
where the last inequality follows from the fact that c
is greater than both a or b. If we set  to be 6 , then
the ABC conjecture gives us a constant K such that c
cannot be more than K(c 3/r )7/6 = Kc 7/2 r . If r ⩾ 4 then    eral solution g(x + iy) of the second equation, g must
the power 7/2 r is less than 1, so the Fermat equation
can have at most finitely many solutions with x, y, and
z coprime.
   It is clear that this is just one of a huge number
of consequences of a similar kind. For instance, we
could deduce that there are only finitely many solu-
tions of the equation 2 r + 3 s = x 2 , since the rad-
ical of 2 r 3 s x 2 is at most 6 x, which is considerably

Part V
Theorems and Problems
smaller than x 2 . But the ABC conjecture has other con-
sequences that are less obvious, and more important,
than this one. For instance, Bombieri has shown that
the ABC conjecture implies roth’s theorem [V.22](/part-05/liouvilles-theorem-and-roths-theorem),
Elkies has shown that it implies the mordell conjec-
ture [V.29](/part-05/rational-points-on-curves-and-vi40-ernst-eduard-kummer-18101893), and Granville and Stark have shown that a
existence of Siegel zeros (these are defined in analytic
number theory [IV.2](/part-04/number-theory)). It is also equivalent to strong
forms, as yet unproven, of a famous theorem of Baker
in transcendence theory, and of the theorem of Wiles
about modular forms [III.59](/part-03/modular-forms) that implies Fermat’s
last theorem.
The ABC conjecture is discussed further in compu-
tational number theory [IV.3](/part-04/computational-number-theory).
V.2 The Atiyah–Singer Index
Theorem
Nigel Higson and John Roe
1   Elliptic Equations
existence and uniqueness of solutions to linear par-
tial differential equations of elliptic type. To understand
∂f     ∂f
+     = 0 and           +i      = 0.
∂x     ∂y               ∂x      ∂y
√
They differ only by the factor i = −1, but their solu-
tions nevertheless have very different properties. Any
1
function of the form f (x, y) = g(x − y) is a solu-
tion to the first equation, but in the analogous gen-
be a holomorphic function [I.3 §5.6](/part-01/fundamental-definitions) of the complex
variable z = x + iy, and it was already known in the
nineteenth century that such functions are very spe-
cial. For example, the first equation has an infinite-
dimensional set of bounded solutions, but liouville’s
theorem [I.3 §5.6](/part-01/fundamental-definitions) in complex analysis asserts that the
only bounded solutions of the second equation are the
constant functions.

682

  The differences between the solutions of the two
equations can be traced to the differences between the
symbols of the equations, which are the polynomials in
real variables ξ, η that are obtained by substituting iξ
for ∂/∂x and iη for ∂/∂y. Thus the symbols of the two
equations above are
respectively. An equation is said to be elliptic if its sym-
bol is zero only when ξ = η = 0; thus, the second
equation is elliptic but the first is not. The fund a men-
tal regularity theorem, which is proved using fourier
analysis [III.27](/part-03/the-fourier-transform), states that an elliptic partial differ en-
tial equation (subject to suitable boundary conditions,
if needed) has a finite-dimensional solution space.

Consider now the general first-order linear partial dif-
ferential equation

in which f is a vector-valued function and the coeffi-
cients aj and b are complex matrix-valued functions.
It is elliptic if its symbol

is an invertible matrix for every nonzero vector ξ =
(ξ1 , . . . , ξn ) and every x. The regularity theorem applies
in this generality, and it allows us to form the Fredholm
index of an elliptic equation (with suitable boundary
conditions), which is the number of linearly indepen-
dent solutions of the equation minus the number of
linearly independent solutions of the adjoint equation

The reason for introducing the Fredholm index is
that it is a topological invariant of elliptic equations.
This means that continuous variations in the coeffi-
cients of an elliptic equation leave the Fredholm index
unchanged. (By contrast, the number of linearly inde-
pendent solutions of an equation can vary as the coef-
ficients of the equation vary.) The Fredholm index is
therefore constant on each connected component of
the set of all elliptic equations, and this raises the
prospect of using topology to determine the struc-
ture of the set of all elliptic equations as an aid to
computing the Fredholm index. This observation was
made by Gelfand in the 1950 s. It lies at the root of the
Atiyah–Singer index theorem.

V. Theorems and Problems
3     An Example
To see in more detail how topology can be used to deter-
mine the Fredholm index of an elliptic equation, let us
look at a specific example. Consider elliptic equations
for which the coefficients aj (x) and b(x) are polyno-
mial functions of x, with aj of degree m − 1 or less
iξ + iη   and    iξ − η,                   and b of degree m or less. The expression
iξ1 a1 (x) + · · · + iξn an (x) + b(x)
is then a polynomial in both x and ξ of degree m or
less. Let us strengthen the hypothesis of ellipticity by
assuming that the terms in this expression that have
degree exactly m (jointly in x and ξ) define an invertible
matrix whenever either x or ξ is nonzero. Let us also
agree to consider only solutions f of the equation or its
adjoint that are square-integrable, which means that
2   Topology of Elliptic Equations
and the Fredholm Index
All these extra hypotheses are types of boundary con-
ditions (the behaviors of the equation and its solutions
∂f
a1
∂x1
A simple example is the equation
df
+ xf = 0.                     (1)
dx
iξ1 a1 (x) + · · · + iξn an (x)
tion is the one-dimensional space of multiples of the
2
square-integrable function e−x /2 . By contrast, the solu-
tions of the adjoint equation
df
−   + xf = 0
dx
2
are multiples of the function e+x /2 , which is not
square-integrable. Thus the index of this differential
equation is equal to 1.
∂
−
∂x1 1
gree m in
iξ1 a1 (x) + · · · + iξn an (x) + b(x)
determine a map from the unit sphere in (x, ξ)-space
to the set GLk (C) of invertible k . imes k complex matrices.
More over, every such map comes from an elliptic equa-
tion (possibly of a more general type than we have dis-
cussed up to now, but an equation to which the basic
regularity theorem guaranteeing the existence of the
Fredholm index applies). It therefore becomes impor-
tant to determine the topological structure of the space
of all maps from the sphere S 2 n−1 into GLk (C).
A remarkable theorem of Bott provides the answer.
The Bott periodicity theorem associates an integer,
which we shall call the Bott invariant, with each map

V.2.   The Atiyah–Singer Index Theorem

S 2 n−1 → GLk (C). Further more, Bott’s theorem asserts
that, provided that k ⩾ n, one such map can be con-
tinuous ly deformed into another if and only if the Bott     equation is equal to the Fredholm or analytical index of
invariants of the two maps agree. In the special case
n = k = 1, where we are dealing with maps from the
one-dimensional circle into the nonzero complex num-
bers, or in other words closed paths in C that do not
pass through the origin, the Bott invariant is just the     cal indices. For example, it may be shown that two ellip-
classical winding number, which measures the num-
ber of times such a path winds around the origin. We
may therefore regard the Bott invariant as a generalized    one higher dimension must have the same topological
winding number.
   The index theorem for equations of the type that we
are considering in this section asserts that the Fred-
holm index of an elliptic equation is equal to the Bott     cal indices of elliptic equations on spheres. Through out
invariant of its symbol. For instance, in the case of the   both stages, an important tool is K-theory [IV.6 §6](/part-04/algebraic-topology),
simple example (1) considered above, the symbol iξ +x
corresponds to the identity map from the unit circle in     Atiyah and Hirzebruch.
(x, ξ)-space to the unit circle in C. Its winding number
is equal to 1, in agreement with our computation of the     rem makes use of K-theory, the final result can be trans-
index.
   The proof of the index theorem depends strongly on
Bott periodicity and proceeds as follows. Because ellip-    like this:
tic equations are classified topologically by the Bott
invariant, and because the Bott invariant and the Fred-
holm index have analogous algebraic properties, one
need only verify the theorem in a single example: that
corresponding to a symbol with Bott invariant 1. It
turns out that this Bott generator can be represented
by an n-dimensional generalization of our example (1),
and a computation in this case completes the proof.

It is possible to define elliptic equations not just for
functions f of n variables, but also for functions
defined on a manifold [I.3 §6.9](/part-01/fundamental-definitions). Particularly access i-
ble to analysis are the elliptic equations on closed man-
ifolds, that is, on manifolds that are finite in extent
and that have no boundary. For closed manifolds it is
not necessary to specify any boundary conditions in
order to obtain the basic regularity theorem for elliptic   on any riemann surface [III.79](/part-03/riemann-surfaces), and the Atiyah–Singer
equations (after all, there is no boundary). As a result,   index formula, applied in this instance, is equivalent to
every elliptic partial differential equation on a closed     a foundational result about the geometry of surfaces
manifold has a Fredholm index.
   The Atiyah–Singer index theorem concerns elliptic
equations on closed manifolds and it has roughly the
same form as the index theorem that we studied in
the previous section. One builds out of the symbol an
invariant called the topological index, which generalizes   tant applications out side of complex geometry. The

683
the Bott invariant. The Atiyah–Singer index theorem
then asserts that the topological index of an elliptic
the equation. The proof has two stages. In the first, the-
orems are proved that allow one to transform an elliptic
equation on a general manifold into an elliptic equation
on a sphere with out changing the topological or analyti-
tic equations on different manifolds that are the com-
mon “boundary” of an elliptic equation on a manifold of
and analytical indices. In the second stage of the proof
the Bott periodicity theorem and an explicit com put a-
tion are applied to identify the topological and analyti-
which is a branch of algebraic topology invented by
Although the proof of the Atiyah–Singer index theo-
lated into terms that do not mention K-theory explic-
itly. In this way one obtains an index formula roughly
index =
M
The term IM is a differential form [III.16](/part-03/dierential-forms-and-integration) determined
by the curvature [III.78](/part-03/ricci-flow) of the manifold M on which
the equation is defined. The term ch(σ ) is a differential
form obtained from the symbol of the equation.
5    Applications
In order to prove the index theorem, Atiyah and Singer
4   Elliptic Equations on Manifolds
elliptic equations. However, the applications they first
had in mind were related to the simple equation with
which we began this article. Solutions of the equation
∂f    ∂f
+i    =0
∂x    ∂y
are precisely the analytic functions of the complex vari-
able z = x + iy. There is a counterpart to this equation
called the riemann–roch theorem [V.31](/part-05/the-riemannroch-theorem). The Atiyah–
Singer index theorem then gives a means to generalize
the Riemann–Roch theorem to a complex manifold
[III.6 §2](/part-03/calabiyau-manifolds) of any dimension.
The Atiyah–Singer index theorem also has impor-