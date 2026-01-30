# Partial Differential Equations

IV.12.    Partial Differential Equations

   Many arguments in harmonic analysis will, at some
point, involve a combinatorial statement about certain
types of geometric objects such as cubes, balls, or
boxes. For instance, one useful such statement is the
Vitali covering lemma, which asserts that, given any col-
lection B1 , . . . , Bk of balls in Euclidean space Rn , there
will be a subcollection Bi1 , . . . , Bim of balls that are dis-
joint, but that nevertheless contain a significant frac-
tion of the volume covered by the original balls. To be
precise, one can choose the disjoint balls so that

(The constant 5−n can be improved, but this will not
concern us here.) This result is obtained by a “greedy
algorithm”: one picks balls one by one, at each stage
choosing the largest ball among the Bj that is disjoint
from all the balls already selected.
   One consequence of the Vitali covering lemma is
the Hardy–Littlewood maximal inequality, which we will
briefly describe. Given any function f ∈ L1 (Rn ), any
x ∈ Rn , and any r > 0, we can calculate the average
of |f | in the n-dimensional sphere B(x, r ) of center x
and radius r . Next, we can define the maximal function
F of f by letting F (x) be the largest of all these aver-
ages as r ranges over all positive real numbers. (More
precisely, one takes the supremum.) Then, for each pos-
itive real number . ambda one can define a set X. ambda to be the set
of all x such that F (x) > λ. The Hardy–Littlewood max-
imal inequality asserts that the volume of X. ambda is at most
5 n f L1 /λ.2
   To prove it, one observes that X. ambda can be covered by
balls B(x, r ) on each of which the integral of |f | is at
least . ambda vol(B(x, r )). To this collection of balls one can
then apply the Vitali covering lemma, and the result
follows. The Hardy–Littlewood maximal inequality is
a quantitative result, but it has as a qualitative con-
sequence the Lebesgue differentiation theorem, which
asserts the following. If f is any absolutely integrable
function defined on Rn , then for almost every x ∈ Rn
the averages

of f over the Euclidean balls about x tend to f (x)
as r → 0. This example demonstrates the impor-
  2. This version of the Hardy–Littlewood inequality looks some what
different from the one mentioned briefly in the previous section, but
one can deduce that inequality from this one by the real interpolation
method discussed earlier.

455
tance of the underlying geometry (in this case, the
combinatorics of metric balls) in harmonic analysis.
Further Reading
Stein, E. M. 1970. Singular Integrals and Different i ability
Properties of Functions. Princeton, NJ: Princeton Univer-
sity Press.
. 1993. Harmonic Analysis. Princeton, NJ: Princeton
University Press.
Wolff, T. H. 2003. Lectures on Harmonic Analysis, edited
by I. Łaba and C. Shubin. University Lecture Series, vol-
.
m                          .
k
ume 29. Providence, RI: American Mathematical Society.
vol
j=1                        j=1
IV.12 Partial Differential Equations
Sergiu Klainerman
Introduction
Partial differential equations (or PDEs) are an impor-
tant class of functional equations: they are equations,
or systems of equations, in which the unknowns are
functions of more than one variable. As a very crude
analogy, PDEs are to functions as polynomial equa-
tions (such as x 2 + y 2 = 1, for example) are to num-
bers. The distinguishing feature of PDEs, as opposed to
more general functional equations, is that they involve
not only unknown functions, but also various partial
derivatives of those functions, in algebraic combina-
tion with each other and with other, fixed, functions.
Other important kinds of functional equations are inte-
gral equations, which involve various integrals of the
unknown functions, and ordinary differential equations
(ODEs), in which the unknown functions depend on
only one independent variable (such as a time variable
t) and the equation involves only ordinary derivatives
d/dt, d2 /dt 2 , d3 /dt 3 , . . . of these functions.
Given the immense scope of the subject the best I can
hope to do is to give a very crude perspective on some
of the main issues and an even cruder idea of the mul-
titude of current research directions. The difficulty one
faces in trying to describe the subject of PDEs starts
1                                                  with its very definition. Is it a unified area of mathe-
f (y) dy
vol(B(x, r ))     B(x, r )
of objects (in the way that algebraic geometry studies
solutions of polynomial equations or topology studies
manifolds, for example), or is it rather a collection of
separate fields, such as general relativity, several com-
plex variables, or hydrodynamics, each one vast in its
own right and centered on a particular, very difficult,
equation or class of equations? I will attempt to argue

456

below that, even though there are fundamental diff i cul-
ties in formulating a general theory of PDEs, one can
nevertheless find a remarkable unity between various
branches of mathematics and physics that are centered
on individual PDEs or classes of PDEs. In particular, cer-
tain ideas and methods in PDEs have turned out to be
extraordinarily effective across the boundaries of these
separate fields. It is thus no surprise that the most suc-
cessful book ever written about PDEs did not mention
PDEs in its title: it was Methods of Mathematical Physics
by courant [VI.83](/part-06/richard-courant-18881972) and hilbert [VI.63](/part-06/david-hilbert-18621943).
   As it is impossible to do full justice to such a huge
subject in such limited space I have been forced to leave
out many topics and relevant details; in particular, I
have said very little about the fundamental issue of
breakdown of solutions, and there is no discussion of
the main open problems in PDEs. A longer and more
detailed version of the article, which includes these
topics, can be found at

The simplest example of a PDE is the laplace equa-
tion [I.3 §5.4](/part-01/fundamental-definitions)
Here, Δ is the Laplacian, that is, the differential operator
that transforms functions u = u(x1 , x2 , x3 ) defined
from R3 to R according to the rule
Δu(x1 , x2 , x3 )
= ∂12 u(x1 , x2 , x3 ) + ∂22 u(x1 , x2 , x3 ) + ∂32 u(x1 , x2 , x3 ),   very different properties of solutions.
where ∂1 , ∂2 , ∂3 are standard shorthand for the par-
tial derivatives ∂/∂x1 , ∂/∂x2 , ∂/∂x3 . (We will use this
shorthand through out the article.) Two other funda-
mental examples (also described in [I.3 §5.4](/part-01/fundamental-definitions)) are the
heat equation and the wave equation:
In each case one is asked to find a function u that
satisfies the corresponding equations. For the Laplace
equation u will depend on x1 , x2 , and x3 , and for the
other two it will depend on t as well. Observe that equa-
tions (2) and (3) again involve the symbol Δ, but also
partial derivatives with respect to the time variable t.
The constants k (which is positive) and c are fixed and
represent the rate of diffusion and the speed of light,
respectively. However, from a mathematical point of

IV. Branches of Mathematics
view they are not important, since if u(t, x1 , x2 , x3 ) is
a solution of (3), for example, then v(t, x1 , x2 , x3 ) =
u(t, x1 /c, x2 /c, x3 /c) satisfies the same equation with
c = 1. Thus, when one is studying the equations one
can set these constants to be 1. Both equations are
called evolution equations because they are supposed
to describe the change of a particular physical object
as the time parameter t varies. Observe that (1) can be
interpreted as a particular case of both (2) and (3): if
u = u(t, x1 , x2 , x3 ) is a solution of either (2) or (3) that
is independent of t, then ∂t u = 0, so u must satisfy (1).
In all three examples mentioned above, we tacitly
assume that the solutions we are looking for are suffi-
ciently differentiable for the equations to make sense.
As we shall see later, one of the important develop-
ments in the theory of PDEs was the study of more
refined notions of solutions, such as distributions
[III.18](/part-03/distributions), which require only weak versions of differ en-
ti ability.
Here are some further examples of important PDEs.
http://press.princeton.edu/titles/8350.html
i∂t u + kΔu = 0,                      (4)
1   Basic Definitions and Examples
where u is a function from R . imes R3 to C. This equation
describes the quantum evolution of a massive particle,
k = /2 m, where  > 0 is Planck’s constant and m is
Δu = 0.                    (1)                     the mass of the particle. As with the heat equation, one
can set k to equal 1 after a simple change of variables.
Though the equation is formally very similar to the heat
equation, it has very different qualitative behavior. This
illustrates an important general point about PDEs: that
small changes in the form of an equation can lead to
A further example is the Klein–Gordon equation
mc 2 2
−∂t2 u + c 2 Δu −        u = 0.          (5)

This is the relativistic counterpart to the Schrödinger
equation: the parameter m has the physical inter pre-
tation of mass and mc 2 has the physical interpreta-
−∂t u + kΔu = 0,                          (2)
tion of rest energy (reflecting Einstein’s famous equa-
−∂t2 u + c 2 Δu = 0.                        (3)
tion E = mc 2 ). One can normalize the constants c and
mc 2 / so that they both equal 1 by applying a suitable
change of variables to time and space.
Though all five equations mentioned above first
appeared in connection with specific physical phenom-
ena, such as heat transfer for (2) and propagation of
electromagnetic waves for (3), they have, miraculously,
a range of relevance far beyond their original applica-
tions. In particular there is no reason to restrict their
study to three space dimensions: it is very easy to

IV.12.     Partial Differential Equations

generalize them to similar equations in n variables
x1 , x2 , . . . , xn .
   All the PDEs listed so far obey a simple but funda-
mental property called the principle of superposition: if
u1 and u2 are two solutions to one of these equations,
then any linear combination a1 u1 +a2 u2 of these solu-
tions is also a solution. In other words, the space of all
solutions is a vector space [I.3 §2.3](/part-01/fundamental-definitions). Equations that
obey this property are known as homogeneous linear
equations. If the space of solutions is an affine space
(that is, a translate of a vector space) rather than a vec-
tor space, we say that the PDE is an inhomogeneous
linear equation; a good example is Poisson’s equation:
where f :    R3 → R is a function that is given to us and
u : R3 → R is the unknown function. Equations that are
neither homogeneous linear nor inhomogeneous linear
are known as nonlinear. The following equation, the
minimal surface equation [III.94 §3.1](/part-03/variational-methods), is manifestly
nonlinear:
  ∂1

The graphs of solutions u : R2 → R of this equation are
area-minimizing surfaces (like soap films).
  Equations (1), (2), (3), (4), (5) are not just linear: they
are all examples of constant-coefficient linear equations.
This means that they can be expressed in the form
where P is a differential operator that involves lin-
ear combinations, with constant real or complex coeffi-
cients, of mixed partial derivatives of u. (Such oper-
ators are called constant-coefficient linear differential
operators.) For instance, in the case of the Laplace equa-
tion (1), P is simply the Laplacian Δ, while for the wave
equation (3), P is the d’Alembertian

The characteristic feature of linear constant-coefficient
operators is translation invariance. Roughly speaking,
this means that if you translate a function u, then you
translate Pu in the same way. More precisely, if v(x) is
defined to be u(x − a) (so the value of u at x becomes
the value of v at x + a; note that x and a belong to R3
here), then Pv(x) is equal to Pu(x − a). As a conse-
quence of this basic fact we infer that solutions to the
homogeneous, linear, constant-coefficient equation (8)
are still solutions when translated.

457
Since symmetries play such a fundamental role in
PDEs we should stop for a moment to make a general
definition. A symmetry of a PDE is any invertible opera-
tion T : u → T (u) from functions to functions that pre-
serves the space of solutions, in the sense that u solves
the PDE if and only if T (u) solves the same PDE. A PDE
with this property is then said to be invariant under the
symmetry T . The symmetry T is often a linear opera-
tion, though this does not have to be the case. The com-
position of two symmetries is again a symmetry, as is
the inverse of a symmetry, and so it is natural to view a
collection of symmetries as forming a group [I.3 §2.1](/part-01/fundamental-definitions)
(which is typically a finite- or infinite-dimensional lie
Δu = f ,                         (6)   group [III.48 §1](/part-03/lie-theory)).
Because the translation group is intimately con-
nected with the fourier transform [III.27](/part-03/the-fourier-transform) (indeed,
the latter can be viewed as the representation theory
of the former), this symmetry strongly suggests that
Fourier analysis should be a useful tool to solve con-
stant-coefficient PDEs, and this is indeed the case.
Our basic constant-coefficient linear operators, the
∂1 u
Laplacian Δ and the d’Alembertian , are formally
(1 + |∂1 u|2 + |∂2 u|2 )1/2
similar in many respects. The Laplacian is fund a men-
∂2 u
+ ∂2
(1 + |∂1 u|2 + |∂y u|2 )1/2
[I.3 §6.2](/part-01/fundamental-definitions) R3 and the d’Alembertian is similarly associ-
ated with the geometry of minkowski space [I.3 §6.8](/part-01/fundamental-definitions)
R1+3 . This means that the Laplacian commutes with
all the rigid motions of the Euclidean space R3 , while
the d’Alembertian commutes with the corresponding
class of Poincaré transformations of Minkowski space-
P[u] = 0,                         (8)   time. In the former case this simply means that invari-
ance applies to all transformations of R3 that preserve
the Euclidean distances between points. In the case
of the wave equation, the Euclidean distance has to
be replaced by the spacetime distance between points
(which would be called events in the language of rela-
tivity): if P = (t, x1 , x2 , x3 ) and Q(s, y1 , y2 , y3 ), then
the distance between them is given by the formula
P =  = −∂t2 + ∂12 + ∂22 + ∂32 .
d M (P , Q)2
= −(t − s)2 + (x1 − y1 )2 + (x2 − y2 )2 + (x3 − y3 )2 .
As a consequence of this basic fact we infer that all
solutions to the wave equation (3) are invariant under
translations and lorentz transformations [I.3 §6.8](/part-01/fundamental-definitions).
Our other evolution equations (2) and (4) are clearly
invariant under rotations of the space variables x =
(x 1 , x 2 , x 3 ) ∈ R3 , when t is fixed. They are also
Galilean invariant, which means, in the particular case
of the Schrödinger equation (4), that whenever u = 458

u(t, x) is a solution so is the function uv (t, x) =

ei(x·v) eit|v| (t, x −vt) for any vector v ∈ R3 .
   Poisson’s equation (6), on the other hand, is an
example of a constant-coefficient inhomogeneous linear
equation, which means that it takes the form
for some constant-coefficient linear differential opera-
tor P and known function f . To solve such an equation
requires one to understand the invertibility or other-
wise of the linear operator P: if it is invertible then u
will equal P −1 f , and if it is not invertible then either   Example. The Dirichlet problem for Laplace’s equation
there will be no solution or there will be infinitely many     on an open domain of D ⊂ R3 is the problem of finding
solutions. Inhomogeneous equations are closely related
to their homogeneous counterpart; for instance, if u1 ,
u2 both solve the inhomogeneous equation (9) with
the same inhomogeneous term f , then their differ-
ence u1 − u2 solves the corresponding homogeneous
equation (8).
   Linear homogeneous PDEs satisfy the principle of
superposition but they do not have to be translation
invariant. For example, suppose that we modify the
heat equation (2) so that the coefficient k is no longer
constant but rather an arbitrary, positive, smooth func-
tion of (x1 , x2 , x3 ). Such an equation models the flow
of heat in a medium in which the rate of diffusion
varies from point to point. The corresponding space
of solutions is not translation invariant (which is not
surprising as the medium in which the heat flows is
not translation invariant). Equations like this are called
linear equations with variable coefficients. It is more
difficult to solve them and describe their qualitative
features than it is for constant-coefficient equations.
(See, for example, stochastic processes [IV.24 §5.2](/part-04/stochastic-processes)
for an approach to equations of type (2) with variable
k.) Finally, nonlinear equations such as (7) can often
still be written in the form (8), but the operator P is
now a nonlinear differential operator. For instance, the
relevant operator for (7) is given by the formula

where |∂u|2 = (∂1 u)2 +(∂2 u)2 . Operators such as these
are clearly not linear. However, because they are ulti-
mately constructed from algebraic operations and par-
tial derivatives, both of which are “local” operations,
we observe the important fact that P is at least still
a “local” operator. More precisely, if u1 and u2 are
two functions that agree on some open set D, then the
expressions P[u1 ] and P[u2 ] also agree on this set. In

IV. Branches of Mathematics
particular, if P[0] = 0 (as is the case in our example),
2
then whenever u vanishes on a domain, P[u] will also
vanish on that domain.
So far we have tacitly assumed that our equations
take place in the whole of a space such as R3 , R+ × R3 ,
or R . imes R3 . In reality one is often restricted to a fixed
P[u] = f                      (9)
domain of that space. Thus, for example, equation (1) is
usually studied on a bounded open domain of R3 sub-
ject to a specified boundary condition. Here are some
basic examples of boundary conditions.
a function u that behaves in a prescribed way on the
boundary of D and obeys the Laplace equation inside.
More precisely, one specifies a continuous function
u0 : ∂D → R and looks for a continuous function u,
defined on the closure . ar{D} of D, that is twice continu-
ously differentiable inside D and solves the equations
⎫
Δu(x) = 0         for all x ∈ D, ⎬
(10)
u(x) = u0 (x) for all x ∈ ∂D.⎭
A basic result in PDEs asserts that if the domain D has
a sufficiently smooth boundary, then there is exactly
one solution to the problem (10) for any prescribed
function u0 on the boundary ∂D.
Example. The Plateau problem is the problem of find-
ing the surface of minimal total area that bounds a
given curve.
When the surface is the graph of a function u on
some suitably smooth domain D, in other words a set
of the form {(x, y, u(x, y)) : (x, y) ∈ D}, and the
bounding curve is the graph of a function u0 over
the boundary ∂D of D, then this problem turns out
to be equivalent to the Dirichlet problem (10), but
with the linear equation (1) replaced by the nonlin-
ear equation (7). For the above equations, it is also
often natural to replace the Dirichlet boundary condi-

2
1
P[u] =
i=1
(1 + |∂u|2 )1/2
condition n(x) · ∇x u(x) = u1 (x) on ∂D, where n(x) is
the outward normal (of unit length) to D at x. Generally
speaking, Dirichlet boundary conditions correspond to
“absorbing” or “fixed” barriers in physics, where as Neu-
mann boundary conditions correspond to “reflecting”
or “free” barriers.
Natural boundary conditions can also be imposed for
our evolution equations (2)–(4). The simplest one is to
prescribe the values of u when t = 0. We can think of

IV.12.   Partial Differential Equations

this more geometrically. We are prescribing the values
of u at each spacetime point of form (0, x, y, z), and
the set of all such points is a hyperplane in R1+3 : it is
an example of an initial time surface.
Example. The Cauchy problem (or initial value prob-
lem, some times abbreviated to IVP) for the heat equa-
tion (2) asks for a solution u : R+ × R3 → R on the
spacetime domain R+ × R3 = {(t, x) : t > 0, x ∈ R3 },
which equals a prescribed function u0 : R3 → R on the
initial time surface {0} × R3 = ∂(R+ × R3 ).
  In other words, the Cauchy problem asks for a suf-
fic ient ly smooth function u, defined on the closure
of R+ × R3 and taking values in R, that satisfies the
conditions
  −∂t u(t, x) + kΔu(t, x) = 0
    u(0, x) = u0 (x) for every x ∈ R3 .
The function u0 is often referred to as the initial con-
ditions, or initial data, or just data, for the problem.
Under suitable smoothness and decay conditions, one
can show that this equation has exactly one solution
u for each choice of data u0 . Interestingly, this asser-
tion fails if one replaces the future domain R+ × R3 =
{(t, x) : t > 0, x ∈ R3 } by the past domain R− × R3 =
{(t, x) : t < 0, x ∈ R3 }.
  A similar formulation of the IVP holds for the Schrö-
dinger equation (4), though in this case we can solve
both to the past and to the future. However, in the case
of the wave equation (3) we need to specify not just the
initial position u(0, x) = u0 (x) on the initial time sur-
face t = 0, but also an initial velocity ∂t u(0, x) = u1 (x),   unknowns. This is the standard situation for a deter-
since equation (3) (unlike (2) or (4)) cannot formally
determine ∂t u in terms of u. One can construct unique
smooth solutions (both to the future and to the past of
the initial hyperplane t = 0) to the IVP for (3) for very
general smooth initial conditions u0 , u1 .
  Many other boundary-value problems are possible.
For instance, when analyzing the evolution of a wave
in a bounded domain D (such as a sound wave), it is
natural to work with the spacetime domain R . imes D and
prescribe both Cauchy data (on the initial boundary
0 . imes D) and Dirichlet or Neumann data (on the spatial
boundary R × ∂D). On the other hand, when the phys-
ical problem under consideration is the evolution of a
wave out side a bounded obstacle (for example, an elec-
tro magnetic wave), one considers instead the evolution
in R × (R3 . D) with a boundary condition on D.

459
The choice of boundary condition and initial condi-
tions for a given PDE is very important. For equations
of physical interest these arise naturally from the con-
text in which they are derived. For example, in the case
of a vibrating string, which is described by solutions of
the one-dimensional wave equation ∂t2 u − ∂x2 u = 0 in
the domain (a, b) × R, the initial conditions u = u0 and
∂t u = u1 at t = t0 amount to specifying the original
position and velocity of the string. The boundary con-
dition u(a) = u(b) = 0 is what tells us that the two
ends of the string are fixed.
So far we have considered just scalar equations.
These are equations where there is only one unknown
function u, which takes values either in the real num-
bers R or in the complex numbers C. However, many
⎫             important PDEs involve either multiple unknown scalar
⎪
⎪
⎬             functions or (equivalently) functions that take values
for every (t, x) ∈ R+ × R3 , (11)         in a multi dimensional vector space such as Rm . In
⎪
⎪
⎭
such cases, we say that we have a system of PDEs. An
important example of a system is that of the cauchy–
riemann equations [I.3 §5.6](/part-01/fundamental-definitions):
∂1 u2 − ∂2 u1 = 0,    ∂1 u1 + ∂2 u2 = 0,     (12)
where u1 , u2 : R2 → R are real-valued functions on the
plane. It was observed by cauchy [VI.29](/part-06/augustin-louis-cauchy-17891857) that a com-
plex function w(x+iy) = u1 (x, y)+iu2 (x, y) is holo-
morphic [I.3 §5.6](/part-01/fundamental-definitions) if and only if its real and imaginary
parts u1 , u2 satisfy the system (12). This system can
still be represented in the form of a constant-coefficient
u
linear PDE (8), but u is now a vector ( u12 ), and P is
not a scalar differential operator, but rather a matrix
−∂ ∂
of operators ( ∂12 ∂12 ).
The system (12) contains two equations and two
mined system. Roughly speaking, a system is called
over determined if it contains more equations than
unknowns and under determined if it contains fewer
equations than unknowns. Under determined equations
typically have infinitely many solutions for any given
set of prescribed data; conversely, over determined
equations tend to have no solutions at all, unless some
additional compatibility conditions are imposed on the
prescribed data.
Observe also that the Cauchy–Riemann operator P
has the following remarkable property:
     
Δu1
2
P [u] = P[P[u]] =            .
Δu2
Thus P can be viewed as a square root of the two-
dimensional Laplacian Δ. One can define a similar type

460

of square root for the Laplacian in higher dimensions
and, more surprisingly, even for the d’Alembertian
operator  in R1+3 . To achieve this we need to have
four 4 . imes 4 complex matrices γ 1 , γ 2 , γ 3 , γ 4 that satisfy   If we also include the ordinary differential equations
the property

Here, I is the unit 4 . imes 4 matrix and mαβ = 2 when α =

β = 1, − 2 when α = β = 1, and 0 otherwise. Using
the γ matrices we can introduce the Dirac operator as
follows. If u = (u1 , u2 , u3 , u4 ) is a function in R1+3
with values in C4 , then we set Du = iγ α ∂α u. It is easy
to check that, indeed, D2 u = u. The equation
is called the Dirac equation and it is associated with a
free, massive, relativistic particle such as an electron.
   One can extend the concept of a PDE further to cover
unknowns that are not, strictly speaking, functions
taking values in a vector space, but are instead sec-
tions of a vector bundle [IV.6 §5](/part-04/algebraic-topology), or perhaps a map
from one manifold [I.3 §6.9](/part-01/fundamental-definitions) to another; such gener-
alized PDEs play an important role in geometry and
modern physics. A fundamental example is given by
the einstein field equations [IV.13](/part-04/general-relativity-and-the-einstein-equations). In the simplest,
“vacuum,” case, they take the form
where Ric(g) is the ricci curvature [III.78](/part-03/ricci-flow) tensor of
the spacetime manifold M = (M, g). In this case the
spacetime metric itself is the unknown to be solved for.
One can often reduce such equations locally to more
traditional PDE systems by selecting a suitable choice of
coordinates, but the task of selecting a “good” choice of
coordinates, and working out how different choices are
compatible with each other, is a nontrivial and impor-
tant one. Indeed, the task of selecting a good set of
coordinates in order to solve a PDE can end up being a
significant PDE problem in its own right.
   PDEs are ubiquitous through out mathematics and
science. They provide the basic mathematical frame-
work for some of the most important physical theo-
ries: elasticity, hydrodynamics, electromagnetism, gen-
eral relativity, and nonrelativistic quantum mechanics,
for example. The more modern relativistic quantum
field theories lead, in principle, to equations in an infi-
nite number of unknowns, which lie beyond the scope
of PDEs. Yet, even in that case, the basic equations pre-
serve the locality property of PDEs. More over, the start-
ing point of a quantum field theory [IV.17 §2.1.4](/part-04/vertex-operator-algebras) is
always a classical field theory, which is described by

IV. Branches of Mathematics
systems of PDEs. This is the case, for example, in the
standard model of weak and strong interactions, which
is based on the so-called Yang–Mills–Higgs field theory.
of classical mechanics, which can be viewed as one-
γ α γ β + γ β γ α = −2 mαβ I.
1
is described by differential equations. As examples of
1
ries we refer to the articles that discuss the euler and
navier–stokes equations [III.23](/part-03/the-euler-and-navierstokes-equations), the heat equa-
tion [III.36](/part-03/the-heat-equation), the schrödinger equation [III.83](/part-03/the-schrdinger-equation), and
the einstein equations [IV.13](/part-04/general-relativity-and-the-einstein-equations).
An important feature of the main PDEs is their appar-
Du = ku                         (13)    ent universality. Thus, for example, the wave equation,
first introduced by d’alembert [VI.20](/part-06/jean-le-rond-dalembert-17171783) to describe the
motion of a vibrating string, was later found to be
connected with the propagation of sound and electro-
magnetic waves. The heat equation, first introduced by
fourier [VI.25](/part-06/jean-baptiste-joseph-fourier-17681830) to describe heat propagation, appears
in many other situations in which dissipative effects
play an important role. The same can be said about the
Laplace equation, the Schrödinger equation, and many
other basic equations.
It is even more surprising that equations that were
originally introduced to describe specific physical phe-
Ric(g) = 0,                      (14)    nomena have played a fundamental role in several areas
of mathematics that are considered to be “pure,” such
as complex analysis, differential geometry, topology,
and algebraic geometry. Complex analysis, for exam-
ple, which studies the properties of holomorphic func-
tions, can be regarded as the study of solutions to
the Cauchy–Riemann equations (12) in a domain of R2 .
Hodge theory is based on studying the space of solu-
tions to a class of linear systems of PDEs on manifolds
that generalize the Cauchy–Riemann equations: it plays
a fundamental role in topology and algebraic geometry.
the atiyah–singer index theorem [V.2](/part-05/the-atiyahsinger-index-theorem) is formu-
lated in terms of a special class of linear PDEs on mani-
folds, related to the Euclidean version of the Dirac oper-
ator. Important geometric problems can be reduced to
finding solutions to specific PDEs, typically nonlinear.
We have already seen one example: the Plateau prob-
lem of finding surfaces of minimal total area that pass
through a given curve. Another striking example is the
uniformization theorem [V.34](/part-05/the-uniformization-theorem) in the theory of sur-
faces, which takes a compact Riemannian surface S (a
two-dimensional surface with a riemannian metric
[I.3 §6.10](/part-01/fundamental-definitions)) and, by solving the PDE
ΔS u + e2 u = K

IV.12.   Partial Differential Equations

(which is a nonlinear variant of the Laplace equation
(1)), uniformizes the metric so that it is “equally curved”   cussion of SDEs can be found in stochastic processes
at all points on the surface (or, more precisely, has
constant scalar curvature [III.78](/part-03/ricci-flow)) with out changing
the conformal class of the metric (i.e., with out distort-     section 2 I shall describe some of the basic notions
ing any of the angles subtended by curves on the sur-
face). This theorem is of fundamental importance to
the theory of such surfaces: in particular, it allows one     with ordinary differential equations, for which a gen-
to give a topological classification of compact surfaces
in terms of a single number χ(S), which is called the
euler characteristic [I.4 §2.2](/part-01/general-goals) of the surface S. The
three-dimensional analogue of the uniformization the-
orem, the geometrization conjecture [IV.7 §2.4](/part-04/dierential-topology) of
Thurston, has recently been established by Perelman,
who did so by solving yet another PDE; in this case, the
equation is the ricci flow [III.78](/part-03/ricci-flow) equation
which can be transformed into a nonlinear version of
the heat equation (2) after a carefully chosen change
of coordinates. The proof of the geometrization con-
jecture is a decisive step toward the total classifica-
tion of all three-dimensional compact manifolds, in
particular establishing the well-known poincaré con-
jecture [IV.7 §2.4](/part-04/dierential-topology). To over come the many technical
details in establishing this conjecture, one needs to
make a detailed qualitative analysis of the behavior
of solutions to the Ricci flow equation, a task which
requires just about all the advances made in geometric
PDEs in the last hundred years.
   Finally, we note that PDEs arise not only in physics
and geometry but also in many fields of applied sci-
ence. In engineering, for example, one often wants to
control some feature of the solution u to a PDE by care-
fully selecting whatever components of the given data
one can directly influence; consider, for instance, how
a violinist controls the solution to the vibrating string     much out of fashion. It does, however, have important
equation (closely related to (3)) by modulating the force     merits, which I hope to illustrate in this section. I shall
and motion of a bow on that string in order to produce a
beautiful sound. The mathematical theory dealing with
these types of issues is called control theory.
   When dealing with complex physical systems, one
cannot possibly have complete information about the
state of the system at any given time. Instead, one
often makes certain randomness assumptions about
various factors that influence it. This leads to the very
important class of equations called stochastic differ en-
tial equations (SDEs), where one or more components of
the equation involve a random variable [III.71 §4](/part-03/probability-distributions) of
some sort. An example of this is in the black–scholes

461
model [VII.9 §2](/part-07/the-mathematics-of-money) in mathematical finance. A general dis-
[IV.24 §6](/part-04/stochastic-processes).
The plan for the rest of this article is as follows. In
and achievements of the general theory of PDEs. The
main point I want to make here is that, in contrast
eral theory is both possible and useful, partial differ en-
tial equations do not lend themselves to a useful gen-
eral theoretical treatment because of some important
obstructions that I shall try to describe. One is thus
forced to discuss special classes of equations such as
elliptic, parabolic, hyperbolic, and dispersive equations.
In section 3 I will try to argue that, despite the impossi-
bility of developing a useful general theory that encom-
∂t g = 2 Ric(g),                 (16)    passes all, or most, of the important examples, there is
nevertheless an impressive unifying body of concepts
and methods for dealing with various basic equations,
and this gives PDEs the feel of a well-defined area of
mathematics. In section 4 I develop this further by try-
ing to identify some common features in the derivation
of the main equations that are dealt with in the subject.
An additional source of unity for PDEs is the central
role played by the issues of regularity and breakdown
of solutions, which is discussed only briefly here. In the
final section we shall discuss some of the main goals
that can be identified as driving the subject.
2   General Equations
One might expect, after looking at other areas of math-
ematics such as algebraic geometry or topology, that
there was a very general theory of PDEs that could be
specialized to various specific cases. As I shall argue
below, this point of view is seriously flawed and very
avoid giving formal definitions and focus instead on
representative examples. The reader who wants more
precise definitions can consult the online version of
this article.
For simplicity we shall look mostly at determined
systems of PDEs. The simplest distinction, which we
have already made, is between scalar equations, such
as (1)–(5), which consist of only one equation and one
unknown, and systems of equations, such as (12) and
(13). Another simple but important concept is that of
the order of a PDE, which is defined to be the highest
derivative that appears in the equation; this concept is

462

analogous to that of the degree of a polynomial. For
instance, the five basic equations (1)–(5) listed earlier
are second order in space, although some (such as (2)
or (4)) are only first order in time. Equations (12) and
(13), as well as the Maxwell equations, are first order.1
   We have seen that PDEs can be divided into linear and
nonlinear equations, with the linear equations being
divided further into constant-coefficient and variable-
coefficient equations. One can also divide nonlinear
PDEs into several further classes depending on the
“strength” of the nonlinearity. At one end of the scale,
a semilinear equation is one in which all the nonlinear
components of the equation have strictly lower order
than the linear components. For instance, equation (15)
is semilinear, because the nonlinear component eu is
of zero order, i.e., it contains no derivatives, where as
the linear component ΔS u is of second order. These
equations are close enough to being linear that they can
often be effectively viewed as perturbations of a linear
equation. A more strongly nonlinear class of equations
is that of quasilinear equations, in which the highest-
order derivatives of u appear in the equation only in
a linear manner but the coefficients attached to those
derivatives may depend in some nonlinear manner on
lower-order derivatives. For instance, the second-order
equation (7) is quasilinear, because if one uses the
product rule to expand the equation, then it takes the
quasilinear form
  F11 (∂1 u, ∂2 u)∂12 u + F12 (∂1 u, ∂2 u)∂1 ∂2 u
for some explicit algebraic functions F11 , F12 , F22 of the
lower-order derivatives of u. While quasilinear equa-
tions can still some times be analyzed by perturbative
techniques, this is generally more difficult to accom-
plish than it is for an analogous semilinear equation.
Finally, we have fully nonlinear equations, which exhibit
no linearity properties whatsoever. A typical example is
the Monge–Ampère equation

where u : Rn → R is the unknown function, Du is the
gradient [I.3 §5.3](/part-01/fundamental-definitions) of u, D2 u = (∂i ∂j u)1⩽i, j ⩽n is the
Hessian matrix of u, and F : Rn . imes R . imes Rn → R is a
given function. This equation arises in many geometric
contexts, ranging from manifold-embedding problems
   1. There is a simple trick, well-known in ordinary differential equa-   allows us to obtain important qualitative information
tions, for converting higher-order equations into a lower-order (or
even first-order) system of equations by increasing the number of
unknowns. See the discussion in dynamics [IV.14 §1.2](/part-04/dynamics).

IV. Branches of Mathematics
to the complex geometry of calabi–yau manifolds
[III.6](/part-03/calabiyau-manifolds). Fully nonlinear equations are among the most
difficult and least well-understood of all PDEs.
Remark. Most of the basic equations of physics, such
as the Einstein equations, are quasilinear. However,
fully nonlinear equations arise in the theory of char-
acteristics of linear PDEs, which we discuss below, and
also in geometry.
2.1   First-Order Scalar Equations
It turns out that first-order scalar PDEs in any num-
ber of dimensions can be reduced to systems of first-
order ODEs. As a simple illustration of this impor-
tant fact consider the following equation in two space
dimensions:
a1 (x 1 , x 2 )∂1 u(x 1 , x 2 )+a2 (x 1 , x 2 )∂2 u(x 1 , x 2 )
= f (x 1 , x 2 ),   (17)
where a1 , a2 , f are given real functions in the variables
x = (x 1 , x 2 ) ∈ R2 . We associate with (17) the first-order
2 . imes 2 system
⎫
dx 1                             ⎪
(s) = a1 (x 1 (s), x 2 (s)),⎪
⎪
⎬
ds
(18)
dx  2                         ⎪
⎪
= a2 (x 1 (s), x 2 (s)).⎪
⎭
ds
To simplify matters, let us assume that f = 0.
Suppose now that x(s) = (x 1 (s), x 2 (s)) is a solution
of (18), and let us consider how u(x 1 (s), x 2 (s)) varies
+ F22 (∂1 u, ∂2 u)∂22 u = 0          as s varies. By the chain rule we know that
d
u = ∂1 u        + ∂2 u      ,
ds
and equations (17) and (18) imply that this equals zero
(by our assumption that f = 0). In other words, any
solution u = u(x 1 , x 2 ) of (17) with f = 0 is con-
stant along any parametrized curve of the form x(s) =
(x 1 (s), x 2 (s)) that satisfies (18).
Thus, in principle, if we know the solutions to (18),
det(D2 u) = F (x, u, Du),
(17), then we can find all solutions to (17). I say “in prin-
ciple” because, in general, the nonlinear system (18) is
not so easy to solve. Nevertheless, ODEs are simpler to
deal with, and the fundamental theorem of ODEs, which
we will discuss later in this section, allows us to solve
(18) at least locally and for a small interval in s.
The fact that u is constant along characteristic curves
even when we cannot find explicit solutions. For exam-
ple, suppose that the coefficients a1 , a2 are smooth (or

IV.12.   Partial Differential Equations

real analytic) and that the initial data is smooth (or real
analytic) every where on the set H where it is defined,
except at some point x0 where it is discontinuous. Then
the solution u remains smooth (or real analytic) at
all points except along the characteristic curve Γ that
starts at x0 , or, in other words, along the solution to
(18) that satisfies the initial condition x(0) = x0 . That
is, the discontinuity at x0 propagates precisely along
Γ . We see here the simplest manifestation of an impor-
tant principle, which we shall explain in more detail
later: singularities of solutions to PDEs propagate along
characteristics (or, more generally, hypersurfaces).
   One can generalize equation (17) to allow the coeffi-
cients a1 , a2 , and f to depend not only on x = (x 1 , x 2 )    smooth, nonconstant initial data u0 .
but also on u:
a1 (x, u(x))∂1 u(x)+a2 (x, u(x))∂2 u(x) = f (x, u(x)).
The associated characteristic system becomes

  As a special example of (19) consider the scalar
equation in two space dimensions,

which is called the Burgers equation. Here we have set
a1 (x, u(x)) = 1 and a2 (x, u(x)) = u(x). With this
choice of a1 , a2 , we can take x 1 (s) to be s in (20). Then,
renaming x 2 (s) as x(s), we derive the characteristic
equation in the form
For any given solution u of (21) and any characteristic
curve (s, x(s)) we have (d/ds)u(s, x(s)) = 0. Thus, in
principle, knowing the solutions to (22) should allow us
to determine the solutions to (21). However, this argu-
ment seems worryingly circular, since u itself appears
in (22).
  To see how this difficulty can be circumvented, con-
sider the IVP for (21): that is, look for solutions that
satisfy u(0, x) = u0 (x). Consider an associated char-
acteristic curve x(s) such that, initially, x(0) = x0 .
Then, since u is constant along the curve, we must have
u(s, x(s)) = u0 (x0 ). Hence, going back to (22), we infer
that dx/ds = u0 (x0 ) and thus x(s) = x0 +su0 (x0 ). We
thus deduce that

463
which implicitly gives us the form of the solution u.
We see once more, from (23), that if the initial data is
smooth (or real analytic) every where except at a point
x0 of the line t = 0, then the corresponding solution
is also smooth (or real analytic) every where in a small
neighborhood V of x0 , except along the characteristic
curve that begins at x0 . The smallness of V is neces-
sary here because new singularities can form at large
scales. Indeed, u has to be constant along the lines
x + su0 (x), whose slopes depend on u0 (x). At a point
where these lines cross we would obtain different val-
ues of u, which is impossible unless u becomes singular
by this point. This blow-up phenomenon occurs for any
Remark. There is an important difference between the
linear equation (17) and the quasilinear equation (19).
(19)           The characteristics of the first depend only on the coef-
ficients a1 (x), a2 (x), while the characteristics of the
⎫                   second depend explicitly on a particular solution u of
dx 1
(s) = a1 (x(s), u(s, x(s))),⎪
⎪
⎬                   the equation. In both cases, singularities can only prop-
ds
(20)           agate along the characteristic curves of the equation.
dx 2
⎪
(s) = a2 (x(s), u(s, x(s))).⎪
⎭                   For nonlinear equations, however, new singularities can
ds
form at large distance scales, whatever the smoothness
of the initial data.
The above procedure extends to fully nonlinear sca-
∂t u + u∂x u = 0,     u(0, x) = u0 (x),
lar equations in Rd such as the Hamilton–Jacobi equa-
tion
∂t u + H(x, Du) = 0,    u(0, x) = u0 (x),      (24)
where u : R . imes Rn → R is the unknown function, Du is the
gradient of u, and the hamiltonian [III.35](/part-03/hamiltonians) H : Rd . imes Rd → R and the initial data u0 : Rd → R are given. For
dx
(s) = u(s, x(s)).                 (22)    instance, the eikonal equation ∂t u = |Du| is a special
ds
instance of a Hamilton–Jacobi equation. We associate
with (24) the ODE system
⎫
dx i     ∂                  ⎪
=
⎬
dt     ∂pi
(25)
dpi        ∂                ⎪
⎪
⎪
⎭
=−       H(x(t), p(t)),
dt
where i runs from 1 to d. The equations (25) are
known as a Hamiltonian system of ODEs. The rela-
tion ship between this system and the corresponding
Hamilton–Jacobi equation is a little more involved than
in the cases discussed above. Briefly, we can construct
a solution u to (24) based only on the knowledge
of the solutions (x(t), p(t)) to (25), which are called
the bi characteristic curves of the nonlinear PDE. Once
again, singularities can only propagate along bichar-
u(s, x0 + su0 (x0 )) = u0 (x0 ),

464

the Burgers equation, singularities will occur for more
or less any smooth data. Thus, a classical, continu-
ously differentiable solution can only be constructed
locally in time. Both Hamilton–Jacobi equations and
Hamiltonian systems play a fundamental role in clas-
sical mechanics as well as in the theory of the prop-
a gation of singularities in linear PDEs. The deep con-
nection between Hamiltonian systems and first-order
Hamilton–Jacobi equations played an important role
in the introduction of the Schrödinger equation into
quantum mechanics.
2.2    The Initial Value Problem for ODEs
Before we can continue with our general presentation
of PDEs we need first to discuss, for the sake of com-
paris on, the IVP for ODEs. Let us start with a first-order
ODE
subject to the initial condition
Let us also assume for simplicity that (26) is a scalar
equation and that f is a well-behaved function of x and
u, such as f (x, u) = u3 − u + 1 + sin x. From the initial
data u0 we can determine ∂x u(x0 ) by substituting x0
into (26). If we now differentiate the equation (26) with
respect to x and apply the chain rule, we derive the
equation

which for the example just defined works out to be
cos x + 3 u2 (x)∂x u(x) − ∂x u(x). Hence,

and since ∂x u(x0 ) has already been determined we
find that ∂x2 u(x0 ) can also be explicitly calculated
from the initial data u0 . This calculation also involves
the function f and its first partial derivatives. Taking
higher derivatives of the equation (26) we can recur-
sively determine ∂x3 u(x0 ), as well as all other higher
derivatives of u at x0 . Therefore, one can in principle
determine u(x) with the help of the Taylor series

   u(x) =

IV. Branches of Mathematics
We say “in principle” because there is no guarantee that
the series converges. There is, however, a very impor-
tant theorem, called the Cauchy–Kovalevskaya theo-
rem, which asserts that if the function f is real ana-
lytic, as is certainly the case for our function f (x, u) =
u3 − u + 1 + sin x, then there will be some neighbor-
hood J of x0 where the Taylor series converges to a
real-analytic solution u of the equation. It is then easy
to show that the solution thus obtained is the unique
solution to (26) that satisfies the initial condition (27).
To summarize: if f is a well-behaved function, then the
initial value problem for ODEs has a solution, at least
in some time interval, and that solution is unique.
The same result does not always hold if we consider
a more general equation of the form
a(x, u(x))∂x u = f (x, u(x)),      u(x0 ) = u0 .       (28)
Indeed, the recursive argument outlined above breaks
down in the case of the scalar equation (x − x0 )∂x u =
∂x u(x) = f (x, u(x))                      (26)
f (x, u) for the simple reason that we cannot even
determine ∂x u(x0 ) from the initial condition u(x0 ) =
u0 . A similar problem occurs for the equation (u −
u(x0 ) = u0 .                        (27)
u0 )∂x u = f (x, u). An obvious condition that allows us
to extend our previous recursive argument to (28) is to
insist that a(x0 , u0 ) ≠ 0. Otherwise, we say that the IVP
(28) is characteristic. If both a and f are also real ana-
lytic, the Cauchy–Kovalevskaya theorem applies again
and we obtain a unique, real-analytic solution of (28)
in a small neighborhood of x0 . In the case of an N . imes N
system,
∂x2 u(x) = ∂x f (x, u(x)) + ∂u f (x, u(x))∂x u(x),
A = A(x, u) is an N . imes N matrix, and the non character-
istic condition becomes
det A(x0 , u0 ) ≠ 0.                   (29)
∂x2 u(x0 ) = ∂x f (x0 , u0 ) + ∂u f (x0 , u0 )∂x u0 ,
It turns out, and this is extremely important in the
development of the theory of ODEs, that, while the
nondegeneracy condition (29) is essential to obtain a
unique solution of the equation, the analyticity con-
dition is not at all important: it can be replaced by a
simple local Lipschitz condition for A and F . It suffices
to assume, for example, that their first partial deriva-
tives exist and that they are locally bounded. This is
always the case if the first derivatives of A and F are
 1
∂xk u(x0 )(x − x0 )k
k⩾0
k!
Theorem (the fundamental theorem of ODEs). If the
= u(x0 ) + ∂x u(x0 )(x − x0 )
1                                        tinuous and have locally bounded first derivatives, then
+ ∂x2 (x0 )(x − x0 )2 + · · · .
2!                                        there is some time interval J ⊂ R that contains x0 , and a

IV.12.    Partial Differential Equations

unique solution2 u defined on J that satisfies the initial
conditions u(x0 ) = u0 .
  The proof of the theorem is based on the Picard iter-
ation method. The idea is to construct a sequence of
approximate solutions u(n) (x) that converge to the
desired solution. With out loss of generality we can
assume A to be the identity matrix.3 One starts by
setting u(0) (x) = u0 and then defines, recursively,
   ∂x u(n) (x) = F (x, u(n−1) (x)),
Observe that at every stage all we need to solve is a very
simple linear problem, which makes Picard iteration
easy to implement numerically. As we shall see below,
variations of this method are also used for solving
nonlinear PDEs.
Remark. In general, the local existence theorem is
sharp, in the sense that its conditions cannot be
relaxed. We have seen that the invertibility condition
for A(x0 , u0 ) is necessary. Also, it is not always pos-
sible to extend the interval J in which the solution
exists to the whole of the real line. As an example,
consider the nonlinear equation ∂x u = u2 with ini-
tial data u = u0 at x = 0, for which the solution
u = u0 /(1 − xu0 ) becomes infinite in finite time: in
the terminology of PDEs, it blows up.
 In view of the fundamental theorem and the example
mentioned above, one can define the main goals of the
mathematical theory of ODEs as follows.
  (i) Find criteria for global existence. In the case of

 (ii) In the case of global existence describe the asymp-

  Though it is impossible to develop a general theory
that achieves both goals (in practice one is forced to
restrict one self to special classes of equations moti-
vated by applications), the general local existence and
uniqueness theorem mentioned above provides a pow-
erful unifying theme. It would be very helpful if a
similar situation were to hold for general PDEs.

2.3   The Initial Value Problem for PDEs
In the one-dimensional situation one specifies initial
conditions at a point. The natural higher-dimensional
  2. Since we are not assuming that A and F are analytic, the solution   neighborhood of a point p the curve Γ is described
may not be analytic, but it does have continuous first derivatives.
  3. Since A is invertible we can multiply both sides of the equation
by the inverse matrix A−1 .

465
analogue is to specify them on hypersurfaces H ⊂ Rd ,
that is, (d − 1)-dimensional subsets (or, to be more pre-
cise, submanifolds). For a general equation of order k,
that is, one that involves k derivatives, we need to spec-
ify the values of u and of its first k − 1 derivatives in
the direction normal to H . For example, in the case
of the second-order wave equation (3) and the initial
hyperplane t = 0 we need to specify initial data for u
and ∂t u.
u(n−1) (x0 ) = u0 .
If we wish to use initial data of this kind to start
obtaining a solution, it is important that the data
should not be degenerate. (We have already seen this
in the case of ODEs.) For this reason, we make the
following general definition.
Definition. Suppose that we have a kth-order quasi-
linear system of equations, and the initial data comes
in the form of the first k − 1 normal derivatives that a
solution u must satisfy on a hypersurface H . We say
that the system is non characteristic at a point x0 of H
if we can use the initial data to determine formally all
the other higher partial derivatives of u at x0 , in terms
of the data.
As a very rough picture to have in mind, it may be
helpful to imagine an infinitesimally small neighbor-
hood of x0 . If the hypersurface H is smooth, then its
intersection with this neighborhood will be a piece of
a (d − 1)-dimensional affine subspace. The values of
u and the first k − 1 normal derivatives on this inter-
section are given by the initial data, and the problem
blow-up describe the limiting behavior.
lem in linear algebra (because everything is infinitesi-
totic behavior of solutions and families of solu-
tions.
be uniquely solved, which is the case provided that a
certain matrix is invertible. This is the nondegeneracy
condition referred to earlier.
To illustrate the idea, let us look at first-order equa-
tions in two space dimensions. In this case H is a curve
Γ , and since k − 1 = 0 we must specify the restriction
of u to Γ ⊂ R2 but we do not have to worry about any
derivatives. Thus, we are trying to solve the system
a1 (x, u(x))∂1 u(x) + a2 (x, u(x))∂2 u(x)
= f (x, u(x)),   u|Γ = u0 ,   (30)
where a1 , a2 , and f are real-valued functions of x
(which belongs to R2 ) and u. Assume that in a small
parametrically as the set of points x = (x 1 (s), x 2 (s)).
We denote by n(s) = (n1 (s), n2 (s)) a unit normal to Γ .

466

   As in the case of ODEs, which we looked at earlier, we     It can be shown that H is non characteristic (with
would like to find conditions on Γ such that for a given
point in Γ we can determine all derivatives of u from
the data u0 , the derivatives of u along Γ , and the equa-    data u0 , u1 ) if and only if
tion (30). Out of all possible curves Γ we distinguish
in particular the characteristic ones we have already
encountered above (see (20)):

One can prove the following fact:
Along a characteristic curve, the equation (30) is degen-
erate. That is, we cannot determine the first-order
derivatives of u uniquely in terms of the data u0 .

  In terms of the rough picture above, at each point
there is a direction such that if the hypersurface, which
in this case is a line, is along that direction, then the     then clearly, by (34), no surface in Rd can be charac-
resulting matrix is singular. If you follow this direction,   teristic. This is the case, in particular, for the Laplace
then you travel along a characteristic curve.
  Conversely, if the nondegeneracy condition

is satisfied at some point p = x(0) ∈ Γ , then we can
determine all higher derivatives of u at x0 uniquely in
terms of the data u0 and its derivatives along Γ . If the
curve Γ is given by the equation ψ(x 1 , x 2 ) = 0, with
nonvanishing gradient Dψ(p) ≠ 0, then the condition
(31) takes the form

  With a little more work one can extend the above
discussion to higher-order equations in higher dimen-
sions, and even to systems of equations. Particularly
important is the case of a second-order scalar equation
in Rd ,

together with a hypersurface H in Rd defined by the
equation ψ(x) = 0, where ψ is a function with non-
vanishing gradient Dψ. Define the unit normal at a
point x0 ∈ H to be n = Dψ/|Dψ|, or, in compo-
nent form, ni = ∂i ψ/|∂ψ|. As initial conditions for
(32) we prescribe the values of u and its normal deriva-
tive n[u](x) = n1 (x)∂1 u(x) + n2 (x)∂2 u(x) + · · · +
nd (x)∂d u(x) on H :

IV. Branches of Mathematics
respect to equation (32)) at a point p (that is, we can
determine all derivatives of u at p in terms of the initial

d
aij (p)∂i ψ(p)∂j ψ(p) ≠ 0.
i, j=1
⎫                           On the other hand, H is a characteristic hypersurface
dx 1
= a1 (x(s), u(x(s))),⎪
⎪
⎬                         for (32) if
ds
x(0) = p.
dx 2
⎪                                          
d
= a2 (x(s), u(x(s))),⎪
⎭
aij (x)∂i ψ(x)∂j ψ(x) = 0          (34)
ds
i, j=1
for every x in H .
Example. If the coefficients a of (32) satisfy the condi-
tion

d
aij (x)ξi ξj > 0,     ∀ξ ∈ Rd , ∀x ∈ Rd ,
i, j=1
equation Δu = f . Consider also the minimal surface
equation (7) written in the form

a1 (p, u(p))n1 (p) + a2 (p, u(p))n2 (p) ≠ 0
i, j=1,2
11 (∂u)
with h         = 1 + (∂2 u)2 , h22 (∂u) = 1 + (∂1 u)2 ,
12
h (∂u) = h (∂u) = −∂1 u∂2 u. It is easy to check
that the quadratic form associated with the symmetric
matrix hij (∂u) is positive definite for every ∂u. Indeed,
hij (∂u)ξi ξj
a1 (p, u(p))∂1 ψ(p) + a2 (p, u(p))∂2 ψ(p) ≠ 0.
Thus, even though (36) is not linear, we see that all
surfaces in R2 are non characteristic.
Example. Consider the wave equation u = f in R1+d .
All hypersurfaces of the form ψ(t, x) = 0 for which
d
d
aij (x)∂i ∂j u = f (x, u(x)),
i, j=1
are characteristic. This is the famous eikonal equation,
which plays a fundamental role in the study of wave
propagation. Observe that it splits into two Hamilton–
Jacobi equations (see (24)):

d                1/2
∂t ψ = ±           (∂i ψ)2          .   (38)
i=1
The bi characteristic curves of the associated Hamilton i-
ans are called bi characteristic curves of the wave equa-
u(x) = u0 (x),   n[u](x) = u1 (x),     x ∈ H.

IV.12.    Partial Differential Equations

(t − t0 ) + |x − x0 | and ψ− (t, x) = (t − t0 ) − |x − x0 |,
whose level surfaces ψ± = 0 correspond to forward and
backward light cones with their vertex at p = (t0 , x0 ).
These represent, physically, the union of all light rays
emanating from a point source at p. The light rays are
given by the equation (t − t0 )ω = (x − x0 ), for ω ∈ R3
with |ω| = 1, and are precisely the (t, x) components
of the bi characteristic curves of the Hamilton–Jacobi
equations (38). More generally, the characteristics of
the linear wave equation

with a
Hamilton–Jacobi equations:

or, equivalently,

The bi characteristics of the corresponding Hamiltonian
systems are called bi characteristic curves of (39).
Remark. In the case of the first-order scalar equations
(17) we have seen how knowledge of characteristics
can be used to find, implicitly, general solutions. We
have also seen that singularities propagate only along
characteristics. In the case of second-order equations
the characteristics are not sufficient to solve the equa-
tions, but they continue to provide important infor-
mation, such as how the singularities propagate. For
example, in the case of the wave equation u = 0 with
smooth initial data u0 , u1 every where except at a point
p = (t0 , x0 ), the solution u has singularities present at
all points of the light cone −(t − t0 )2 + |x − x0 |2 = 0
with vertex at p. A more refined version of this fact
shows that the singularities propagate along bicharac-
teristics. The general principle here is that singularities
propagate along characteristic hypersurfaces of a PDE.
Since this is a very important principle, it pays to give
it a more precise formulation that extends to general
boundary conditions, such as the Dirichlet condition
for (1).
Propagation of singularities. If the boundary condi-
tions or the coefficients of a PDE are singular at some
point p, and otherwise smooth (or real analytic) every-
where in some small neighborhood V of p, then a solu-
tion of the equation cannot be singular in V except
along a characteristic hypersurface passing through p.

467
In particular, if there are no such characteristic hyper-
surfaces, then any solution of the equation must be
smooth (or real analytic) at every point of V other
than p.
Remarks. (i) The heuristic principle mentioned above
is in valid, in general, at large scales. Indeed, as we have
shown in the case of the Burgers equation, solutions
to nonlinear evolution equations can develop new sin-
gularities whatever the smoothness of the initial con-
ditions. Global versions of the principle can be formu-

a00 (t, x)∂t2 u −   aij (t, x)∂i ∂j u = 0,  (39)
i, j                                          of the equation. See (iii) below.
00 > 0 and aij satisfying (35), are given by the
(ii) According to the principle, it follows that any solu-
tion of the equation Δu = f , satisfying the bound-
ary condition u|∂D = u0 with a boundary value u0 that
−a00 (t, x)(∂t ψ)2 + aij (x)∂i ψ∂j ψ = 0
merely has to be continuous, is automatically smooth
every where in the interior of D provided that f itself is
                       1/2              smooth there. More over, the solution is real analytic if
∂t ψ = ± (a00 )−1
i, j
(iii) More precise versions of this principle, which plays
a fundamental role in the general theory, can be given
for linear equations. In the case of the general wave
equation (39), for example, one can show that singular-
ities propagate along bi characteristics. These are the
bi characteristic curves associated with the Hamilton–
Jacobi equation (40).
2.4   The Cauchy–Kovalevskaya Theorem
In the case of ODEs we have seen that a non character is-
tic IVP always admits solutions locally (that is, in some
time interval about a given point). Is there a higher-
dimensional analogue of this fact? The answer is yes,
provided that we restrict ourselves to the real-analytic
situation, which is covered by an appropriate exten-
sion of the Cauchy–Kovalevskaya theorem. More pre-
cisely, one can consider general quasilinear equations,
or systems, with real-analytic coefficients, real-analytic
hypersurfaces H , and appropriate real-analytic initial
data on H .
Theorem (Cauchy–Kovalevskaya (CK)). If all the real-
analyticity conditions made above are satisfied and if
the initial hypersurface H is non characteristic at x0 ,4
then in some neighborhood of x0 there is a unique
real-analytic solution u(x) that satisfies the system of
equations and the corresponding initial conditions.
4. For second-order equations of the kind of (32), this is precisely
condition (33).

468

   In the special case of linear equations, an important    a spacelike hypersurface. This means a hypersurface
companion theorem, due to Holmgren, asserts that the
analytic solution given by the CK theorem is unique in
the class of all smooth solutions and smooth nonchar-
acteristic hypersurfaces H . The CK theorem shows
that, given the non characteristic condition and the ana-
lyticity assumptions, the following straightforward way
of finding solutions works: look for a formal expansion
of the kind u(x) = α Cα (x − x0 )α by determining the
constants Cα recursively from simple algebraic formu-
las arising from the equation and initial conditions on     is also spacelike. By contrast, the IVP is ill-posed for a
H . More precisely, the theorem ensures that the naive
expansion obtained in this way converges in a small
neighborhood of x0 ∈ H .
   It turns out, however, that the analyticity conditions
required by the CK theorem are much too restrictive,
and therefore the apparent generality of the result
is misleading. A first limitation becomes immediately
apparent when we consider the wave equation u = 0.
A fundamental feature of this equation is finite speed of    Definition. A given problem for a PDE is said to be
propagation, which means, roughly speaking, that if at
some time t a solution u is zero out side some bounded
set, then the same must be true at all later times.
However, analytic functions cannot have this property
unless they are identically zero (see some fund a men-
tal mathematical definitions [I.3 §5.6](/part-01/fundamental-definitions)). Therefore,
it is impossible to discuss the wave equation properly
within the class of real-analytic solutions. A related
problem, first pointed out by hadamard [VI.65](/part-06/jacques-hadamard-18651963), con-
cerns the impossibility of solving the Cauchy problem,
in many important cases, for arbitrary smooth nonana-
lytic data. Consider, for example, the Laplace equation
Δu = 0 in Rd . As we have established above, any hyper-
surface H is non characteristic, yet the Cauchy problem
u|H = u0 , n[u]|H = u1 , for arbitrary smooth initial
conditions u0 , u1 , may admit no local solutions in a
neighborhood of any point of H . Indeed, take H to
be the hyperplane x1 = 0 and assume that the Cauchy
problem can be solved for given nonanalytic smooth
data in a domain that includes a closed ball B centered     of equations with which they share their main proper-
at the origin. The corresponding solution can also be
interpreted as the solution to the Dirichlet problem in     are called elliptic, while those modeled by the wave
B, with the values of u prescribed on the boundary ∂B.
But this, according to our heuristic principle (which can   tant models are the heat equation (see (2)) and the
easily be made rigorous in this case), must be real ana-    Schrödinger equation (see (4)). The general classes of
lytic every where in the interior of B, contradicting our    equations that they resemble are called parabolic and
assumptions about the initial data.
   On the other hand, the Cauchy problem for the wave
equation u = 0 in Rd+1 has a unique solution for
any smooth initial data u0 , u1 that is prescribed on

IV. Branches of Mathematics
ψ(t, x) = 0 such that at every point p = (t0 , x0 ) that
belongs to it the normal vector at p lies inside the
light cone (either in the future direction or in the past
direction). To say this analytically,

d                 1/2
|∂t ψ(p)| >
i=1

This condition is clearly satisfied by a hyperplane of the
form t = t0 , but any other hypersurface close to this
timelike hypersurface, i.e., a hypersurface for which

d                 1/2
|∂t ψ(p)| <
i=1
That is, we cannot, for general non-real-analytic initial
conditions, find a solution of the IVP. An example of a
timelike hypersurface is given by the hyperplane x 1 =
0. Let us explain the term “ill-posed” more precisely.
well-posed if both existence and uniqueness of solu-
tions can be established for arbitrary data that belongs
to a specified large space of functions, which includes
the class of smooth functions.5 More over, the solutions
must depend continuously on the data. A problem that
is not well-posed is called ill-posed.
The continuous dependence on the data is very im-
port ant. Indeed, the IVP would be of little use if very
small changes in the initial conditions resulted in very
large changes in the corresponding solutions.
2.5   Standard Classification
The different behavior of the Laplace and wave equa-
tions mentioned above illustrates the fundamental dif-
ference between ODEs and PDEs and the illusory gener-
ality of the CK theorem. Given that these two equations
are so important in geometric and physical applica-
tions, it is of great interest to find the broadest classes
ties. The equations modeled by the Laplace equation
equation are called hyperbolic. The other two impor-
dispersive, respectively.
5. Here we are necessarily vague. A precise space can be specified
in each given case.

IV.12.    Partial Differential Equations

  Elliptic equations are the most robust and the eas-
iest to characterize: they are the ones that admit no
characteristic hypersurfaces.
Definition. A linear, or quasilinear, N . imes N system with
no characteristic hypersurfaces is called elliptic.
   Equations of type (32) whose coefficients aij satisfy
condition (35) are clearly elliptic. The minimal surface
equation (7) is also elliptic. It is also easy to verify
that the Cauchy–Riemann system (12) is elliptic. As was
pointed out by Hadamard, the IVP is not well-posed for
elliptic equations. The natural way of parametrizing the
set of solutions to an elliptic PDE is to prescribe condi-
tions for u, and some of its derivatives (the number of
derivatives will be roughly half the order of the equa-
tion) at the boundary of a domain D ⊂ Rn . These are
called boundary-value problems (BVPs). A typical exam-
ple is the Dirichlet boundary condition u|∂D = u0 for
the Laplace equation Δu = 0 in a domain D ⊂ Rn .
One can show that, if the domain D satisfies certain
mild regularity assumptions and the boundary value
u0 is continuous, then this problem admits a unique
solution that depends continuously on u0 . We say that
the Dirichlet problem for the Laplace equation is well-
posed. Another well-posed problem for the Laplace
equation is given by the Neumann boundary condition
n[u]|∂D = f , where n is the exterior unit normal to the
boundary. This problem is well-posed for all continu-
ous functions f defined on ∂D with zero mean aver-
age. A typical problem of general theory is to classify
all well-posed BVPs for a given elliptic system.
   As a consequence of our propagation-of-singularities
principle, we deduce, heuristically at least, the follow-
ing general fact:

Classical solutions of elliptic equations with smooth
(or real-analytic) coefficients in a regular domain D are
smooth (or real analytic) in the interior of D, whatever
the degree of smoothness of the boundary conditions.6
  Hyperbolic equations are, essentially, those for which
the IVP is well-posed. In that sense, they provide the
natural class of equations for which one can prove
a result similar to the local existence theorem for
ODEs. More precisely, for each sufficiently regular set
of initial conditions there is a unique solution. We can

  6. Provided that the boundary condition under consideration is
well-posed. More over, this heuristic principle holds, in general, only     tions). The IVP (42) is locally well-posed for symmet-
for classical solutions of a nonlinear equation. There are in fact exam-
ples of well-posed BVPs, for certain nonlinear elliptic systems, with no
classical solutions.

469
thus think of the Cauchy problem as a natural way of
parametrizing the set of all solutions to the equations.
The definition of hyperbolicity depends, however,
on the particular hypersurface we are considering as
the initial hypersurface. Thus, in the case of the wave
equation u = 0, the standard IVP
u(0, x) = u0 (x),            ∂t u(0, x) = u1
is well-posed. This means that for any smooth initial
data u0 , u1 we can find a unique solution of the equa-
tion, which depends continuously on u0 , u1 . As we have
already mentioned, the IVP for u = 0 remains well-
posed if we replace the initial hypersurface t = 0 by any
spacelike hypersurface ψ(t, x) = 0 (see (41)). However,
it fails to be well-posed for timelike hypersurfaces,
for which there may be no solution with prescribed,
nonanalytic, Cauchy data.
It is more difficult to give algebraic conditions for
hyperbolicity. Roughly speaking, hyperbolic equations
are at the opposite end of the spectrum from ellip-
tic equations: where as elliptic equations have no char-
acteristic hypersurfaces, hyperbolic equations have as
many as possible passing through any given point. One
of the most useful classes of hyperbolic equations,
which includes most of the important known examples,
consists of equations of the form

d
A0 (t, x, u)∂t u +
i=1
u|H = u0 ,     (42)
where all the coefficients A0 , A1 , . . . , Ad are symmetric
N . imes N matrices and H is given by ψ(t, x) = 0. Such a
system is well-posed provided that the matrix

d
A0 (t, x, u)∂t ψ(t, x) +
i=1
is positive definite. A system (42) that satisfies these
conditions is called symmetric hyperbolic. In the par-
ticular case when ψ(t, x) = t, the condition (43)
becomes
(A0 ξ, ξ) ⩾ c|ξ|2 ∀ξ ∈ RN .
The following is a fundamental result in the theory
of general hyperbolic equations. It is called the local
existence and uniqueness of solutions for symmetric
hyperbolic systems.
Theorem (fundamental theorem for hyperbolic equa-
ric hyperbolic systems with sufficiently smooth A, F ,
and H and sufficiently smooth initial conditions u0 . In

470

other words, if the appropriate smoothness conditions
are satisfied, then for any point p ∈ H there is a small
neighborhood D of p 7 inside which there is a unique,
continuously differentiable solution u.
Remarks. (i) The local character of the theorem is
essential, just as it was for the general propagation-
of-singularities principle discussed earlier, since the
result cannot be globalized in the particular case of
the Burgers equation (21), which fits trivially into the
framework of general nonlinear symmetric hyperbolic
systems. A precise version of the theorem above gives
a lower bound on how large D can be.
(ii) The proof of the theorem is based on a variation of
the Picard iteration method that we encountered earlier
for ODEs. One starts by taking u(0) = u0 in a neighbor-
hood of H . Then one defines functions u(n) recursively
as follows:
A0 (t, x, u(n−1) )∂t u(n) +
Notice that at each stage of the iteration we have to
solve a linear equation. Linearization is an extremely
important tool in studying nonlinear PDEs. We can al-
most never understand their behavior with out linear iz-
ing them around important special solutions. Thus,
almost invariably, hard problems in nonlinear PDEs
reduce to understanding specific problems in linear
PDEs.
(iii) To implement the Picard iteration method we need
to get precise estimates concerning u(n) in terms of
u(n−1) . This step requires energy type a priori esti-
mates, which we will discuss in section 3.3.
   Another important property of hyperbolic equations
(which is not shared by elliptic, parabolic, or disper-
sive equations) is finite speed of propagation, which
was mentioned earlier in the case of the wave equa-
tion (3). Consider this simple case again. The IVP can
be solved explicitly by the so-called Kirchhoff formula.
The formula allows us to conclude that if the initial
data at t = 0 is zero out side a ball Ba (x0 ) of radius
a > 0 centered at x0 ∈ R3 , then at time t > 0 the
solution u is zero out side the ball Ba+ct (x0 ). In gen-
eral, finite speed of propagation can best be formulated
in terms of domains of dependence and influence of
  7. By “point” we mean that p is a spacetime point (t, x) ∈ R
Similarly, D is a set of spacetime points.

IV. Branches of Mathematics
hyperbolic equations (see the online version for general
definitions).
Hyperbolic PDEs play a fundamental role in physics,
as they are intimately tied to the relativistic nature
of the modern theory of fields. Equations (3), (5), (13)
are the simplest examples of linear field theories, and
they are manifestly hyperbolic. Other basic examples
appear in gauge field theories such as maxwell’s equa-
tions [IV.13 §1.1](/part-04/general-relativity-and-the-einstein-equations) ∂ α Fαβ = 0 or the Yang–Mills equa-
tions D α Fαβ = 0. Finally, the Einstein equations (14) are
also hyperbolic.8 Other important examples of hyper-
bolic equations arise in the physics of elasticity and
inviscid fluids. As examples of the latter, the Burgers
equation (21) and the compressible Euler equation are
hyperbolic.
Elliptic equations, on the other hand, appear natu-
rally in describing time-independent, or more generally
steady-state, solutions of hyperbolic equations. Elliptic

d                                           equations can also be derived, directly, by well-defined
Ai (t, x, u(n−1) )∂i u(n)
i=1                                            Finally, a few words about parabolic equations and
= F (t, x, u(n−1) ),     u(n) |H = u0 .           Schrödinger-type equations, which are intermediate
between the elliptic and hyperbolic ones. Large classes
of useful equations of these types are given by
∂t u − Lu = f
and
i∂t u + Lu = f ,                      (45)
respectively, where L is an elliptic second-order oper-
ator. One looks for solutions u = u(t, x), defined for
t ⩾ t0 , with the prescribed initial condition
u(t0 , x) = u0 (x)
on the hypersurface t = t0 . Strictly speaking, this
hypersurface is characteristic, since the order of the
equation is 2 and we cannot determine ∂t2 u at t = t0
directly from the equation. Yet this is not a serious
problem; we can still determine ∂t2 u formally by differ-
entiating the equation with respect to ∂t . Thus, the IVP
(44) (or (45)) with initial condition (46) is well-posed, but
not quite in the same sense as for hyperbolic equations.
For example, the heat equation −∂t u+Δu is well-posed
for positive t but ill-posed for negative t. The heat equa-
tion may also not have unique solutions for the IVP
unless we make assumptions about how fast the initial
data is allowed to grow at infinity. One can also show
8. For gauge theories and Einstein equations the notion of hyper-
bol i city depends on the choice of gauge or coordinates. In the case
1+d
.   of the Yang–Mills equations, for example, one obtains a well-defined
system of nonlinear wave equations only in the Lorentz gauge.

IV.12.   Partial Differential Equations

that the characteristic hypersurfaces of the equation
(44) are all of the form, and therefore parabolic equa-
tions are quite similar to elliptic equations. For exam-
ple, one can show that if the coefficients aij and f are
smooth (or real analytic), then the solution u must be
smooth (or real analytic in x) for t > t0 even if the ini-   This is the problem of determining the conditions on
tial data u0 is not smooth, which is consistent with our     a linear operator P and given data f under which the
propagation-of-singularities principle. The heat equa-
tion smooths out initial conditions. It is for this reason   skaya theorem gives a criterion for local solvability
that the heat equation is useful in many applications. In    when f and the coefficients of P are real analytic, but
physics, parabolic PDEs arise whenever diffusion or dis-
sipation phenomena are important, while in geometry
and calculus of variations, parabolic PDEs often arise
as gradient flows of positive-definite functionals. Ricci
flow (16) can also be viewed as a parabolic PDE, after a
suitable change of coordinates.
   Dispersive PDEs, of which the Schrödinger equation
(4) is a fundamental example, are evolution equations
that behave analogously to hyperbolic PDEs in many
respects. For instance, the IVP tends to be locally
well-posed both forward and backward in time. How-
ever, solutions to dispersive PDEs do not propagate
along characteristic surfaces. Instead, they move at
speeds that are determined by their spatial frequency;
in general, high-frequency waves tend to propagate at
much greater speeds than low-frequency waves, which
eventually leads to a dispersion of the solution into
increasingly large areas of space. In fact, the speed
of propagation of solutions is typically infinite. This
behavior also differs from that of parabolic equations,
which tend to dissipate the high-frequency components
of a solution (sending them to zero) rather than dis-
persing them. In physics, dispersive equations arise in
quantum mechanics: they are the nonrelativistic limit
c → . nfty of relativistic equations and they are also
approximations to model certain types of fluid behav-
ior. For instance, the korteweg–de vries equation
[III.49](/part-03/linear-and-nonlinear-waves-and-solitons),

is a dispersive PDE that models the behavior of small-
amplitude waves in a shallow canal.
2.6   Special Topics for Linear Equations
The greatest successes of the general theory have been
in connection with linear equations, especially those
with constant coefficients, for which Fourier analysis
provides an extremely powerful tool. While the related
issues of classification, well-posedness, and propaga-
tion of singularities have dominated the study of lin-

471
ear equations, there are other issues of interest as well,
including the following.
2.6.1   Local Solvability
equation (9) is locally solvable. The Cauchy–Kovalev-
it is a remarkable phenomenon that when one relaxes
this assumption slightly, asking for f to be smooth
rather than real analytic, serious obstructions to local
solvability appear. For instance, the Lewy operator
∂u               ∂u
P[u](t, z) =
∂ . ar{z}             ∂t
defined on complex-valued functions u : R . imes C → C,
has the property that equation (9) is locally solvable
for real-analytic f but not for “most” smooth f . The
Lewy operator is intimately connected to the tangential
Cauchy–Riemann equations on the Heisenberg group in
C2 . It was discovered in the study of the restriction of
the two-dimensional analogue of the Cauchy–Riemann
operator P to a quadric in C2 . This example was the
starting point for the theory of local solvability, whose
goal is to characterize linear equations that are locally
solvable. The theory of Cauchy–Riemann manifolds—
which has its origin in the study of restrictions of
the Cauchy–Riemann equations (in higher dimensions)
to real hypersurfaces, each of which comes with an
associated “tangential Cauchy–Riemann complex”—is
another extremely rich source of examples of inter-
esting linear PDEs, which do not fit into the standard
classification.
2.6.2   Unique Continuation
∂t u + ∂x3 u = 6 u∂x u,
tions may not always exist, but one still has unique-
ness. A fundamental example is that of analytic con-
tinuation: two holomorphic functions on a connected
domain D that agree on a nondiscrete set (such as a disk
or an interval) must necessarily agree every where on D.
This fact can be viewed as a unique continuation result
for the Cauchy–Riemann equations (12). Another exam-
ple in a similar spirit is Holmgren’s theorem, which
asserts that solutions to a linear PDE (9) that has real-
analytic coefficients and data are unique, even in the
class of smooth functions. More generally, the study of

$472$

ill-posed problems (such as the wave equation with prescribed data on a timelike surface rather than a spacelike one) arises naturally in connection with control theory.

$2$ . $6$ . $3$

Spectral Theory

There is no way I can even begin to give an account of this theory, which is of fundamental importance not only to quantum mechanics and other physical theories, but also to geometry and analytic number theory [IV.2](/part-04/number-theory) .
Just as a matrix A can often be analyzed through its eigenvalues and eigenvectors [I.3](/part-01/fundamental-definitions) by the tools of linear algebra, one can learn much about a linear differential operator P and its associated PDE by understanding that operator’s spectrum [III.86](/part-03/the-spectrum) and eigenfunctions with the help of tools from functional analysis [IV.15](/part-04/operator-algebras). A typical problem in spectral theory is the eigenvalue problem in R d : $- \Delta u(x) + V(x)u(x) = \lambda u(x)$ .
A function u that is localized in space (for example, by being bounded in the $L^{2}$ (R d) - norm) and that satisfies this equation is mapped by the linear operator $- \Delta + V$ to the function $\lambda u:$ we say that u is an eigenfunction with eigenvalue $\lambda.$ Suppose that we have an eigenfunction u and let φ (t , x) = e - i $\lambda$ t u (x). It is easy to check that φ is a solution of the Schrödinger equation i∂ $tφ + \Deltaφ - Vφ = 0$ . (47) More over, it has a very special form. Such solutions are called bound states of the physical system described by (47).
The eigenvalues $\lambda,$ which form a discrete set, correspond to the quantum energy levels of the system. They are very sensitive to the choice of potential V . The inverse spectral problem is also important: can one determine the potential V from knowledge of the corresponding eigenvalues? The eigenvalue problem can be studied in considerable generality by replacing the operator $- \Delta + V$ with other elliptic operators.
For instance, in geometry it is important to study the eigenvalue problem for the Laplace-Beltrami operator, which is the natural generalization of the Laplace operator from $R^{n}$ to general riemannian manifolds [I.3](/part-01/fundamental-definitions). When the manifold has some arithmetic structure (for instance, if it is the quotient of the upper half-plane by a discrete arithmetic group), this problem is of major importance in number theory, leading, for instance, to the theory of Hecke-Maas forms. A famous problem in differential geometry (“ can you hear the shape of

IV. Branches of Mathematics

a drum ? ”) is to characterize the metric on a compact surface from the spectral properties of the associated Laplace-Beltrami operator.

$2$ . $6$ . $4$

Scattering Theory

This theory formalizes the intuition from quantum mechanics that a potential which is small or localized is largely unable to “trap” a quantum particle, which is therefore likely to escape to infinity in a manner resembling that of a free particle. In the case of equation ( $47$ ), solutions that scatter are those that behave freely as $t \to \infty.$ That is, they behave like solutions to the free Schrödinger equation i∂ $t\psi + \Delta\psi = 0$ .
$A$ typical problem in scattering theory is to show that, if V (x) tends to zero sufficiently fast as $|x| \to \infty,$ all solutions, except the bound states, scatter as $t \to \infty.2$ . $7$

Conclusions

In the analytic case, the CK theorem allows us to solve the IVP locally for very general classes of PDEs. We have a general theory of characteristic hypersurfaces of PDEs and a good general understanding of how they relate to propagation of singularities. We can also distinguish in considerable generality the fundamental classes of elliptic and hyperbolic equations and can define general parabolic and dispersive equations. The IVP for a large class of nonlinear hyperbolic systems can be solved locally in time, for sufficiently smooth initial conditions.
Similar local-in-time results hold for general classes of nonlinear parabolic and dispersive equations. For linear equations a lot more can be done. We have satisfactory results concerning the regularity of solutions for elliptic and parabolic equations and a good understanding of the propagation of singularities for a large class of hyperbolic equations. Some aspects of spectral theory and scattering theory and problems of unique continuation can also be studied in considerable generality. The main defect of the general theory concerns the passage from local to global.
Important global features of special equations are too subtle to fit into a general scheme. Rather, each important PDE requires special treatment. This is particularly true for nonlinear equations: the long-term behavior of solutions is very sensitive to the special features of the equation at hand. More over, general points of view may obscure, through unnecessary technical complications, the main properties of the important special cases. A useful general framework is one that provides a simple and elegant

IV.12.   Partial Differential Equations

treatment of a particular phenomenon, as is the case for
symmetric hyperbolic systems and the phenomenon
of local well-posedness and finite speed of propaga-
tion. However, it turns out that symmetric hyperbolic
systems are simply too general for the study of more
refined questions about the important examples of
hyperbolic equations.
As one turns away from the general theory, one may
be inclined to accept the pragmatic point of view

described earlier, according to which PDEs is not a
real subject but is rather a collection of subjects such
as hydrodynamics, general relativity, several complex
variables, elasticity, etc., each organized around a spe-
cial equation. However, this rather widespread view-
point has its own serious drawbacks. Even though spe-
cific equations have specific properties, the tools that
are used to derive them are intimately related. In fact,
there is an impressive body of knowledge relevant to all
important equations, or at least large classes of them.
Lack of space does not allow me to do anything more
than enumerate them below.9
3.1   Well-Posedness
As is clear from the previous section, well-posed prob-
lems are at the heart of the modern theory of PDEs.
Recall that these are problems that admit unique solu-
tions for given smooth initial or boundary conditions,
and that the corresponding solutions have to depend
continuously on the data. It is this condition that leads
to the classification of PDEs into elliptic, hyperbolic,
parabolic, and dispersive equations. The first step in
the study of a nonlinear evolution equation is a proof of
a local-in-time existence and uniqueness theorem, simi-
lar to the one for ODEs. Ill-posedness, the counterpart of
well-posedness, is also important in many applications.
The Cauchy problem for the wave equation (3), with
data on the timelike hypersurface z = 0, is a typical

example. Ill-posed problems appear naturally in con-
trol theory, as we have mentioned, and also in inverse
scattering.
   9. I fail to mention in the few examples given above some of the     results in the formula û(t, ξ) = û0 (ξ)e−t|ξ| . Thus, with
important functional analytic tools connected to Hilbert space meth-
ods, compactness, the implicit function theorems, etc. I also fail to
mention the importance of probabilistic methods and the develop-
ment of topological methods for dealing with global properties of
elliptic PDEs.

473
3.2   Explicit Representations and Fundamental
Solutions
Our basic equations (2)–(5) can be solved explicitly. For
example, the solution to the IVP for the heat equation
in R1+d
+ , that is, the problem of finding a function u that
satisfies
−∂t u + Δu = 0,         u(0, x) = u0 (x),
3   General Ideas                                 for t ⩾ 0, is given by
u(t, x) =
Rd
for a certain function Ed , which is called the fund a men-
tal solution of the heat operator −∂t + Δ. This func-
tion can be defined explicitly: when t ⩽ 0 it is 0,
and when t > 0 it is given by the formula Ed (t, x) =
2
(4π t)−d/2 e−|x| /4 t . Observe that Ed satisfies the equa-
tion (−∂t + Δ)E = 0 in both regions t < 0 and t > 0,
but it has a singularity at t = 0, which prevents it from
satisfying the equation in the whole of R1+d . In fact, we
can check that for any function10 φ ∈ C0. nfty (Rd+1 ), we
have
Ed (t, x)(∂t φ(t, x) + Δφ(t, x)) dt dx = φ(0, 0).
Rd+1
(48)
In the language of distribution theory [III.18](/part-03/distributions), for-
mula (48) means that Ed , as a distribution, satisfies
the equation (−∂t + Δ)Ed = δ0 , where δ0 is the Dirac
distribution in R1+d supported at the origin. That is,
δ0 (φ) = φ(0, 0), ∀φ ∈ C0. nfty (Rd+1 ). A similar notion of
fundamental solution can be defined for the Poisson,
wave, Klein–Gordon, and Schrödinger equations.
A powerful method of solving linear PDEs with con-
stant coefficients is based on the fourier trans-
form [III.27](/part-03/the-fourier-transform). For example, consider the heat equation
∂t − Δu = 0 in one space dimension, with initial con-
dition u(0, x) = u0 . Define û(t, ξ) to be the Fourier
transform of u relative to the space variable:
+. nfty
û(t, ξ) =
−. nfty
It is easy to see that û(t, ξ) satisfies the differential
equation
∂t û(t, ξ) = −ξ 2 û(t, ξ),    û(0, ξ) = û0 (ξ).
This can be solved by a simple integration, which
2
10. That is, any function that is smooth and has compact support
in R1+d .

474

the help of the inverse Fourier transform, we derive a
formula for u(t, x):

Similar formulas can be derived for our other basic evo-
lution equations. For example, in the case of the wave
equation −∂t2 u + Δu = 0 in three dimensions, subject
to the initial data u(0, x) = u0 , ∂t u(0, x) = 0, we find
that

After some work, one can reexpress formula (49) in the

form
  u(t, x) = ∂t (4π t)
where da is the area element of the sphere |x−y| = t of
radius t centered at x. This is the well-known Kirchhoff
formula. By contrast with (49), the integration here is
with respect to the physical variables t and x only. It is
instructive to compare these two formulas. Using the
Plancherel identity it is very easy to deduce from (49)
the L2 bound

while the possibility of obtaining such a bound from
(50) seems unlikely since the formula involves a deriva-
tive. On the other hand, (50) is perfect for giving us
information about the domain of influence. Indeed, we
can see immediately from the formula that if u0 is zero
out side the ball Ba = {|x − x0 | ⩽ a}, then u(t, x) is
zero out side the ball Ba+|t| for any time t. This fact
does not seem at all transparent in the Fourier-based
formula (49). The fact that different representations
of solutions have different, even opposite, strengths
and weaknesses has important consequences for con-
struc ting approximate solutions, or parametrices, for
more complicated equations, such as linear equations
with variable coefficients or nonlinear wave equations.
There are two possible types of constructions: those
in physical space, which mimic the physical-space for-
mula (50), and those in Fourier space, which mimic the
formula (49).

3.3    A Priori Estimates
Most equations cannot be solved explicitly. However,
if we are interested in qualitative information about a
solution, then it is not necessary to derive it from an
exact formula. But how else, one might wonder, can we

IV. Branches of Mathematics
extract such information? A priori estimates are a very
important technique for doing this.
+. nfty
2
The best-known examples are energy estimates, the
u(t, x) = (2π )−1
−. nfty
simplest example of the first type is the following iden-
tity (which is a very simple example of a so-called
Bochner-type identity):
|∂ 2 u(x)|2 dx =
Rd
The left-hand side is shorthand for
u(t, x) = (2π )−3
R3                                                                    |∂i ∂j u(x)|2 dx
Rd
1⩽i, j ⩽d
and the identity holds for all functions u that are
−1                                          twice continuously differentiable and tend to zero as
u0 (y) da(y) ,
|x−y|=t                               |x| → . nfty. This formula can be justified fairly simply by
integrating by parts. As a consequence of the Bochner
identity, we obtain the a priori estimate that if u is
a smooth solution to the Poisson equation (6) with
square-integrable data f , and if it tends to zero at infin-
ity, then the square integral of its second derivatives is
bounded:
|∂ 2 u(x)|2 dx ⩽
Rd                          Rd
2
|u(t, x)|   dx ⩽ Cu0 2 L2 (R3 ) ,                 Thus we obtain the qualitative fact that, on average
R3
(in a mean-square sense), u has “two more degrees
of regularity” than f .11 This is called an energy-type
estimate because, in physical situations, the square of
the L2 -norm can often be interpreted as some type of
kinetic energy.
The Bochner identity can be extended to more gen-
eral Riemannian manifolds than Rd , although one then
picks up some additional lower-order terms involving
the curvature of those manifolds. Such identities play
a major role in the theory of geometric PDEs on these
manifolds.
Energy-type identities and estimates also exist for
parabolic, dispersive, and hyperbolic PDEs. For in-
stance, they play a fundamental role in demonstrat-
ing the local existence, uniqueness, and finite speed
of propagation for hyperbolic PDEs with smooth initial
data. Energy estimates become particularly powerful
when combined with inequalities such as the Sobolev
embedding inequality, which allows one to convert
11. A crucial fact, about which one can read more in the online
version, is that the L2 -norms in (51) can be replaced by Lp -norms,
1 < p < . nfty, or Hölder-type norms. The first case corresponds
to Calderon–Zygmund estimates, while the second corresponds to
Schauder estimates. Both are extremely important in the study of
regularity properties for solutions to second-order elliptic PDEs.

IV.12.   Partial Differential Equations

the “L2 ” information provided by these estimates into
pointwise (or “L. nfty ”) type information (see function
spaces [III.29 §§2.4, 3]).
   While energy identities and L2 estimates (which, as
in the above example, come from integration by parts)
apply to all, or at least major classes of, PDEs, the
maximum principle can be applied only to elliptic and
parabolic PDEs. The following theorem is the simplest
manifestation of it. Note that the theorem provides us
with important quantitative information about solu-
tions to the Laplace equation even in the absence of
any explicit representation for them.
Theorem (maximum principle). Assume that u is a
solution to the Laplace equation (1) on a bounded con-
nected domain D ∈ Rd with a smooth boundary ∂D.
Assume also that u is continuous on the closure of D
and has continuous first and second partial derivatives
in the interior of D. Then u must achieve its maximum
and minimum values on the boundary. More over, if the
maximum or minimum is also achieved at an interior
point of D, then u must be constant in D.
   The method is very robust and can easily be extended
to a large class of second-order elliptic equations. It can
also be extended to parabolic equations and systems,
and plays a crucial role in, for example, the study of
Ricci flow.
   Let us briefly mention some other important classes
of a priori estimates. The Sobolev inequalities, which
are of prime importance in elliptic equations, have
several counterparts in linear and nonlinear hyper-
bolic and dispersive equations, including the Strichartz
estimates and bilinear estimates. In connection with
ill-posed problems and unique continuation, Carle-
man estimates play a fundamental role. Finally, sev-
eral a priori estimates arising from monotonicity for-
mulas12 —such as virial identities, Pohozaev identities,
or Morawetz inequalities—can be used to establish the
breakdown of regularity or the blow-up of solutions
to some nonlinear equations, and to guarantee global
existence and decay of solutions to others.
   To summarize, it is not much of an exaggeration
to say that a priori estimates play a fundamental role
in more or less every aspect of the modern theory of
PDEs.

  12. Perhaps the most familiar example of a monotonicity phe-
nomenon is the second law of thermodynamics from physics, which
asserts that, for many physical systems, the total entropy of the
system is an increasing function of time.

475
3.4   Bootstrap and Continuity Arguments
The bootstrap argument is a method, or rather a pow-
erful general philosophy, to derive a priori estimates
for nonlinear equations. According to this philosophy
we start by making educated assumptions about the
solutions we are trying to describe. These assumptions
allow us to think of the original nonlinear problem as
a linear one whose coefficients satisfy properties con-
sistent with the assumptions. We may then use linear
methods, based on other a priori estimates that we
already know, to try to show that the solutions to this
linear problem behave as well as we have postulated—
in fact, even better. One can characterize this powerful
method, which allows us to use linear theory with out
actually having to linearize the equation, as a concep-
tual linearization. It can also be regarded as a continu-
ity argument relative to some parameter, which might
be the natural time parameter of an evolution problem,
but it could also be an artificial parameter which we
have the freedom to introduce ourselves. This latter
situation is typical of applications to nonlinear elliptic
equations. In the online version of this article we pro-
vide a few examples to illustrate the method in both
cases.
3.5   The Method of Generalized Solutions
Since a PDE involves differentiation, it might seem obvi-
ous that in any discussion of PDEs we should restrict
our attention to differentiable functions. However, it is
possible to generalize the notion of differentiation so
that it makes sense for a wider class of functions, and
even for function-like objects, such as distributions,
that are not functions at all. This allows us to make
sense of a PDE in a broader context, and admits the
possibility of generalized solutions.
The best way to introduce generalized solutions in
PDEs and explain why they are important is through
the Dirichlet principle. This originates in the obser-
vation that, out of all functions that are defined on
a bounded domain D ⊂ Rd , that satisfy prescribed
Dirichlet boundary condition u|∂D = f , and that live in
an appropriate functional space X, the functions u that
minimize the Dirichlet integral (or Dirichlet functional)
1 
d
1
u2 Dr =       |∇u|2 =         |∂i u|2      (52)
2 D         2     D
i=1
are the harmonic functions (that is, solutions of the
equation Δu = 0). It was riemann [VI.49] who first had

476

the idea of trying to use this fact to solve the Dirichlet
problem: in order to find a solution u to the problem
one should find (by some means other than solving
the Dirichlet problem) a function u that minimizes the
Dirichlet integral while equaling u0 on ∂D. To do this,
one must specify the set by functions, or rather the
function space, over which the minimization is taking
place. The history of how this choice was made is a fas-
cin at ing one. A natural choice is X = C 1 (. ar{D}), the space
of continuously differentiable functions on . ar{D}, where
the norm of a function v is

In particular, the Dirichlet norm vDr is finite when
v belongs to this space. In fact, Riemann chose X =
C 2 (. ar{D}) (a similar space but designed for twice contin-
uously differentiable functions). This bold but flawed
attempt was followed by a penetrating criticism by
weierstrass [VI.44](/part-06/karl-weierstrass-18151897), who showed that the functional
does not have to achieve its minimum in either C 2 (. ar{D})
or C 1 (. ar{D}). However, Riemann’s basic idea was revived,
and it eventually triumphed after a long and inspir-
ing process that involved defining appropriate function
spaces, introducing the notion of generalized solutions,
and developing a regularity theory for them. (The pre-
cise formulation of the Dirichlet principle also requires
the definition of sobolev spaces [III.29 §2.4](/part-03/function-spaces).)
   Let us briefly summarize the method, which has since
been vastly extended so that it can be applied to a large
class of linear13 and nonlinear elliptic and parabolic
equations. It is based on two steps. In the first step one
applies a minimization procedure. Although, as Weier-
strass discovered, the natural function spaces may not
contain functions that achieve the minimum, one can
use such a procedure to find a generalized solution
instead. This may not seem very interesting, since we
were looking for a function that solves the Dirichlet
problem (or one of the other problems to which the
method can be applied). But this is where the second
step comes in: it is some times possible to show that the
generalized solution must in fact be a classical solu-
tion (that is, an appropriately smooth function) after
all. This is the “regularity theory” mentioned earlier.
In some situations, however, the generalized solution
may turn out to have singularities and therefore not
be regular. Then the challenge is to understand the
 13. A not able example for applications in geometry is Hodge theory.   by a compactness method, a weak solution of the IVP

IV. Branches of Mathematics
nature of these singularities and to prove realistic par-
tial regularity results. For instance, it is some times pos-
Δu = 0,      u|∂D = u0 ,                   (53)    sible to prove that the generalized solution is smooth
every where apart from in a small “exceptional set.”
Though generalized solutions are at their most effec-
tive for elliptic problems, their range of applicability
encompasses all PDEs. For example, we have already
seen that the fundamental solutions to the basic lin-
ear equations have to be interpreted as distributions,
which are examples of generalized solutions.
The notion of generalized solutions has also proved
successful for nonlinear evolution problems, such as
systems of conservation laws in one space dimension.
vC 1 (. ar{D}) = sup(|v(x)| + |∂v(x)|).
x∈D
tion (21). As we have seen, solutions to ∂t u + u∂x u =
0 develop singularities in finite time no matter how
smooth the initial conditions are. It is natural to ask
whether solutions continue to make sense, as general-
ized solutions, even beyond the time when these singu-
larities form. A natural notion of generalized solution
is a function u such that
(∂t u + u∂x u)φ = 0
R1+1
for every smooth function φ that is zero out side a
bounded set, since one can make sense of the integral
even when u is not a differentiable function. Integrat-
ing this by parts (the first term with respect to t and
the second with respect to x) one obtains the following
formulation:
1
u∂t φ +
R1+1             2   R1+1
It can be shown that, under additional conditions called
entropy conditions, the IVP for the Burgers equation
admits a unique generalized solution that is global:
that is, valid for every t ∈ R. Today we have a satis-
factory theory of global solutions to a large class of
hyperbolic systems of one-dimensional “conservation
laws.” These systems, for which the above-mentioned
theory applies, are called strictly hyperbolic.
For more complicated nonlinear evolution equations,
the question of what constitutes a good concept of
a generalized solution, though fundamental, is far
murkier. For higher-dimensional evolution equations
the first concept of a weak solution was introduced by
Leray. Let us call a generalized solution weak if one can-
not prove any type of uniqueness for it. This unsatisfac-
tory situation may be temporary, i.e., the result of our
technical inabilities, or unavoidable, in the sense that
the concept itself is flawed. Leray was able to produce,

$IV$ . $12$ .

Partial Differential Equations

for the navier-stokes equations [III.23](/part-03/the-euler-and-navierstokes-equations). The great advantage of the compactness method (and its modern extensions, which can, in some cases, cleverly circumvent lack of compactness) is that it produces global solutions for all data. This is particularly important for supercritical or critical nonlinear evolution equations, which we will discuss later. For these we expect classical solutions to develop singularities in a finite time. The problem, however, is that one has very little control over such solutions.
In particular, we do not know how to prove their uniqueness. 14 Similar types of solutions were later introduced for other important nonlinear evolution equations. In most of the interesting cases of supercritical evolution equations, such as the Navier-Stokes equations, the usefulness of the types of weak solutions discovered so far remains undecided.

$3$ . $6$

Microlocal Analysis, Parametrices, and

Par a differential Calculus

One of the fundamental difficulties of hyperbolic and dispersive equations is the interplay between geometric properties, which concern the physical space, and other properties, intimately tied to oscillations, that are best seen in Fourier space. Microlocal analysis is a general still-developing philosophy according to which one isolates the main difficulties by careful localizations in physical space or Fourier space or both.
An important application of this point of view is the construction of parametrices for linear hyperbolic equations and their use in proving results about the propagation of singularities. Parametrices, as we have already mentioned, are approximate solutions of linear equations with variable coefficients, with error terms that are smoother. The par a differential calculus is an extension of microlocal analysis to nonlinear equations.
It allows one to manipulate the form of a nonlinear equation by taking account of how large and small frequencies interact, and it has achieved a remarkable technical versatility.

$3$ . $7$

Scaling Properties of Nonlinear Equations A PDE is said to have a scaling property if, whenever one rescales a solution in an appropriate way, one obtains another solution. Essentially, all basic nonlinear equations have well-defined scaling properties. Take, for example, the Burgers equation (21)$, \partial${}tu +$u\partial${}xu = 0 . If $14$ . Leray was very concerned about this point.
Though, like all other researchers after him, he was unable to prove uniqueness of his weak solution, he managed to show that it must coincide with a classical one as long as the latter does not develop singularities.

$477$

u is a solution of this equation, then so is the function $u\lambda$ defined by $u\lambda(t$ , $x) = u(\lambda t$ , $\lambda x)$ . Similarly, if $u$ is a solution of the cubic nonlinear Schrödinger equation in R d , i∂ $tu + \Delta u + c|u|^{2}u = 0$ ,

(54)

then so is $u\lambda(t$ , $x) = \lambda u(\lambda^{2}t,\lambda x)$ . The relationship between the nonlinear scaling of the equation and the a priori estimates available for solutions to the equations leads to an extremely useful classification of equations into subcritical, critical, and supercritical equations. This will be discussed in more detail in the next section.
For the moment it suffices to say that subcritical equations are those for which the nonlinearity can be controlled by the existing a priori estimates of the equation, while supercritical equations are those for which the nonlinearity appears to be stronger. Critical equations are borderline. The definition of criticality and its relationship with the issue of regularity play a very important heuristic role in nonlinear PDEs. One expects supercritical equations to develop singularities and subcritical equations not to.

$4$

The Main Equations

In the previous section we argued that, while there is no hope of finding a general theory of all PDEs, there is nevertheless a wealth of general ideas and techniques that are relevant to the study of almost all important equations. In this section we indicate how it may be possible to identify the features that characterize the equations we call important. Most of our basic PDEs can be derived from simple geometric principles, which happen to coincide with some of the underlying geometric principles of modern physics.
These simple principles provide a unifying framewor$k^{15}$ for the subject and help endow it with a sense of purpose and cohesion. They also explain why a very small number of linear differential operators, such as the Laplacian and the d’Alembertian, are all-pervasive. Let us begin with the operators. The Laplacian is the simplest differential operator that is invariant under rigid motions of Euclidean space--a fact that we noted at the beginning of this article. This is important mathematically and physically: mathematically because it $15$ .
The scheme sketched below is only an attempt to show that, in spite of the enormous number of PDEs studied by mathematicians, physicists, and engineers, there are nevertheless simple basic principles that unite them. I do not want, by any means, to imply that the equations discussed below are the only ones worthy of our attention.

478

results in many symmetry properties and physically
because many physical laws are themselves invari-
ant under rigid motions. The d’Alembertian is, simi-
larly, the simplest differential operator that is invariant

under the natural symmetries, or Poincaré transforma-
tions, of Minkowski space.
   Now let us turn to the equations. From the point of
view of physics, the heat equation is basic because it is
the simplest paradigm for diffusive phenomena, while
the Schrödinger equation can be viewed as the Newto-
nian limit of the Klein–Gordon equation. The geometric
framework of the former is Galilean space, which itself
is simply the Newtonian limit of Minkowski space.16
   From a mathematical point of view, the heat, Schrö-
dinger, and wave equations are basic because the corre-
sponding differential operators ∂t − Δ, (1/i)∂t − Δ, and
∂t2 − Δ are the simplest evolution operators that can be
built out of Δ. The wave operator, as just discussed,
is basic in a deeper way because of the association
between  = −∂t2 + Δ and the geometry of Minkowski
space R1+n . As for Laplace’s equation, one can view
solutions to Δφ = 0 as special time-independent solu-
tions to φ = 0. Appropriate invariant and local def-
initions of square roots of Δ and , or  − k2 , corre-
sponding to “spinorial representations” of the Lorentz
group, lead to the associated Dirac operators (see (13)).
In the same vein we can associate with every Rie-
mannian or Lorentzian manifold the operator Δg or
g , respectively, or the corresponding Dirac operators.
These equations inherit in a straightforward way the
symmetries of the spaces on which they are defined.
4.1   Variational Equations
There is a general and extremely effective method for
generating equations with prescribed symmetries that
plays a fundamental role in both physics and geometry.
One starts with a scalar quantity, called a Lagrangian,
such as

with φ a real-valued function defined on R1+3 and V
some real function of φ such as, for example, V (φ) =
φ3 . Here ∂\mu denotes the partial derivatives with respect
to the coordinates x μ , μ = 0, 1, 2, 3, and mμν = mμν ,
as earlier, denotes the 4 . imes 4 diagonal matrix with diago-
nal entries (−1, 1, 1, 1), associated with the Minkowski
  16. This is done by starting with the Minkowski metric m =
diag(−1/c 2 , 1, 1, 1), where c corresponds to the velocity of light, and
letting c → . nfty.

IV. Branches of Mathematics
metric. We associate with L[φ] the so-called action
integral:
S[φ] =
R3+1
Notice that both L[φ] and S[φ] are invariant under
translations and Lorentz transformations. In other
words, if T : R1+3 → R1+3 is a function that does not
change the metric and we define a new function by
ψ(t, x) = φ(T (t, x)), then L[φ] = L[ψ] and S[φ] =
S[ψ].
We shall consider a function φ that minimizes the
action integral. From this we wish to deduce that the
derivative of S at φ, in some appropriate sense, is zero,
and hence to deduce other properties about φ. But
φ is a function that lives in an infinite-dimensional
space, so we cannot talk about derivatives in a com-
pletely straightforward way. To deal with this problem,
we define a compact variation of φ to be a smooth one-
parameter family of functions φ(s) : R1+3 → R, defined
for each s in some interval (−, ), such that φ(0) (x) =
φ(x) for every x ∈ R3 and φ(s) (x) = φ(x) for
every (s, x) out side some bounded subset of R1+3 . This
allows us to differentiate with respect to s.
Given such a variation, we denote the derivative
dφ(s) /ds|s=0 by φ̇.
Definition. A field φ is said to be stationary with
respect to S if, for any compact variation φ(s) of φ,
we have
d          
S[φ(s) ]
    = 0.
ds          s=0
The variational principle. The variational principle,
or principle of least action, states that an acceptable
solution of a given physical system must be stationary
with respect to the action integral associated with the
Lagrangian of the system.
The variational principle enables us to associate with
the given Lagrangian a system of PDEs, obtained from
3
the fact that φ is stationary, called the Euler–Lagrange
L[φ] =
equations. We illustrate this by showing that the non-
μ,ν=0
linear wave equation in R1+3 , namely
φ − V (φ) = 0,
is the Euler–Lagrange equation associated with the
Lagrangian (55). Given a compact variation φ(s) of φ,
we set S(s) = S[φ(s) ]. Integration by parts gives

d      
S(s)
     =      [−mμν ∂μ φ̇∂ν φ − V (φ)φ̇]
ds       s=0   R3+1
=
R3+1

IV.12.    Partial Differential Equations

In view of the action principle and the arbitrariness of
φ̇ we infer that φ must satisfy equation (56). Thus (56)
is indeed the Euler–Lagrange equation associated with
the Lagrangian L[φ] = mμν ∂μ φ∂ν φ − V (φ).
   One can similarly show that the Maxwell equations
of electromagnetism—along with their beautiful exten-
sions to the Yang–Mills equations, wave maps, and
the Einstein equations of general relativity—are also
variational. That is, they too can be derived from a
Lagrangian.

Remark. The variational principle asserts only that
the acceptable solutions of a given system are sta-
tion ary: in general, we have no reason to expect that
the desired solutions minimize or maximize the action
integral. Indeed, this fails to be the case for systems
that have a time dependence, such as the Maxwell equa-
tions, Yang–Mills equations, wave maps, and Einstein
equations.
  However, there is a large class of variational prob-
lems, corresponding to time-independent physical sys-
tems or geometric problems, for which the desired
solutions do turn out to be extremal. The simplest
example is that of geodesics in a Riemannian mani-
fold M, which are minimizers17 with respect to length.
More precisely, the length functional takes a curve γ
that passes through two fixed points of M and asso-
ciates with it its length L(γ), which plays the role of
an action integral. In this case a geodesic is not just a
stationary point for the functional but a minimum. We
also saw earlier that, according to the Dirichlet prin-
ciple, solutions to the Dirichlet problem (53) minimize
the Dirichlet integral (52). Another example is provided
by the minimal surface equation (7), the solutions of
which are minimizers of the area integral.
  The study of minimizers of various functionals, i.e.,
action integrals, is a venerable subject in mathematics
that goes under the name of calculus of variations (see
variational methods [III.94](/part-03/variational-methods) for further discussion).
  Associated with the variational principle is another
fundamental principle. A conservation law for an evo-
lution PDE is a law that says that some quantity, typ-
ically an integral quantity depending on the solution,
must remain constant over time, for every solution of
the equation.
Noether’s principle. To any continuous one-parameter
group of symmetries of the Lagrangian there corre-
  17. This is true, in general, only for sufficiently short geodesics, i.e.,
ones that pass through two points close to each other.

479
sponds a conservation law for the associated Euler–
Lagrange PDE.
Examples of such conservation laws are the famil-
iar laws of conservation of energy, conservation of
momentum, and conservation of angular momentum,
all of which have important physical meaning. (The one-
parameter group of symmetries for energy, for exam-
ple, is just translations in time.) In the case of equation
(56), the law of conservation of energy takes the form
E(t) = E(0),
where the quantity E(t), which equals
1
3
2
2 (∂t φ) + 2         (∂i φ)2 + V (φ) dx,    (58)
Σt
i=1
is called the total energy at time t. (We write Σt for
the set of all points (t, x, y, z) as (x, y, z) ranges over
R3 .) Observe that (57) provides an extremely important
a priori estimate for solutions to (56) in the case when
V ⩾ 0. Indeed, if the energy of the initial data at t = 0
is finite (that is, if E(0) < . nfty), then
1   
3
1
(∂i φ)2 dx ⩽ E(0).
2 (∂t φ) + 2
Σt
i=1
We say that the energy identity (57) is coercive, which
means that it leads to an absolute bound on all solu-
tions with finite initial energy.
4.2   The Issue of Criticality
For the most basic evolution equations of mathematical
physics, there are typically no better a priori estimates
known than those provided by the energy. Taking into
account the scaling properties of the corresponding
equations as well, one is led to the very important
classification of our basic equations, mentioned earlier,
into subcritical, critical, and supercritical equations. To
see how this is done, consider again the nonlinear
scalar equation φ − V (φ) = 0, and take V (φ) to
be (1/(p + 1))|φ|p+1 . Recall that the energy integral is
given by (58). If we assign to the spacetime variables the
dimension of length, L, then the spacetime derivatives
have dimension L−1 and therefore  has the dimension
of L−2 . To be able to balance the left- and right-hand
sides of the equation φ = |φ|p−1 φ, we need to assign
a length scale to φ; we find this to be L2/(1−p) . Thus the
energy integral,
E(t) =
Rd

480

has the dimension Lc , c = d−2+(4/(1−p)), with d cor-
responding to the volume element dx = dx 1 dx 2 · · ·
dx d , which scales like Ld . We say that the equation is
subcritical if c < 0, critical if c = 0, and supercritical
if c > 0. Thus, for example, φ − φ5 = 0 is critical in
dimension d = 3. The same sort of dimensional analy-
sis can be done for all our other basic equations. An
evolutionary PDE is said to be regular if all smooth
finite-energy initial conditions lead to global smooth
solutions. It is conjectured that all subcritical equa-
tions are regular, but one expects supercritical equa-
tions to develop singularities. Critical equations are
important borderline cases. The heuristic reason for
this is that the nonlinearity tends to produce singu-
larities while the coercive estimates prevent it. In sub-
critical equations the coercive estimates are stronger,
while for supercritical equations it is the nonlinearity
that is stronger. However, there may be other, more
subtle a priori estimates that are not accounted for by
our crude heuristic argument. Thus, some supercritical
equations, such as the Navier–Stokes equations, may
still be regular.
4.3     Other Equations
Many other familiar equations can be derived from
the variational ones described above by the following
procedures.
4.3.1    Symmetry Reductions
Some times a PDE is very hard to solve but becomes
much easier if one places additional symmetry con-
strain ts on solutions. For example, if the PDE is rota-
tion invariant and we look just for rotation-invariant
solutions u(t, x), then we can regard these solutions
as functions of t and r = |x|, effectively reducing the
dimension of the problem. By this procedure of sym-
metry reduction one can then derive a new PDE that
is much simpler than the original one. Another, some-
what more general, way of obtaining simpler equations
is to look for solutions that satisfy some further prop-
erty. For instance, one can assume that they are station-    are used to illustrate and isolate important physical
ary (that is, that they do not depend on the time vari-
able), spherically symmetric, self-similar (which means
that u(t, x) depends only on x/t a ), or traveling waves     to try to write down the simplest model equation that
(which means that u(t, x) depends only on x − vt for
some fixed velocity vector v). Typically, the equations
obtained by such reductions have a variational struc-
ture themselves. In fact, the symmetry reduction can
be applied directly to the original Lagrangian.

IV. Branches of Mathematics
4.3.2    The Newtonian Approximation and Other Limits
We can derive a large class of new equations as limits of
the basic ones described above by taking one or more
characteristic speeds to infinity. The most important
example is the Newtonian limit, which is obtained by
letting the velocity of light go to infinity. As we have
already mentioned, the Schrödinger equation can be
derived in this way from the linear Klein–Gordon equa-
tion. Similarly, we can derive the Lagrangians for the
equations of nonrelativistic elasticity, fluid dynamics,
or magnetohydrodyn amics. It is an interesting fact that
the nonrelativistic equations tend to look more messy
than the relativistic ones. The simple geometric struc-
ture of the original equations gets lost in the limit. The
remarkable simplicity of the relativistic equations is a
powerful example of the importance of relativity as a
unifying principle.
Once we are in the familiar world of Newtonian
physics we can perform other well-known limiting pro-
cedures. The famous incompressible euler equa-
tions [III.23](/part-03/the-euler-and-navierstokes-equations) are obtained by taking the limit of the
general nonrelativistic fluid equations as the speed
of sound tends to infinity. Various other limits are
obtained relative to other characteristic speeds of the
system or in connection with specific boundary con-
ditions, such as the boundary-layer approximation in
fluids. For example, in the limit as all characteristic
speeds tend to infinity, the equations of elasticity turn
into the familiar equations of a rigid body in classical
mechanics.
4.3.3    Phe no meno logical Assumptions
Even after taking various limits and making symmetry
reductions, the equations may still remain intractable.
However, in various applications it makes sense to
assume that certain quantities are sufficiently small to
be neglected. This leads to simplified equations that
could be called phe no meno logical 18 in the sense that
they are not derived from first principles.
Phe no meno logical equations are “toy equations” that
phenomena in complicated systems. A typical way of
generating interesting phe no meno logical equations is
18. I use this term here quite freely; it is typically used in a some-
what different context. Also, some of the equations that I call phe-
nomenological below, e.g., dispersive equations, can be given formal
asymptotic derivations.

$IV$ . $12$ .

Partial Differential Equations

still exhibits a particular feature of the original system. For instance, the self-focusing plane-wave effects of compressible fluids or elasticity can be illustrated by the simple-minded Burgers equation $u^{t} + uu^{x} = 0$ . Nonlinear dispersive phenomena, typical of fluids, can be illustrated by the famous Korteweg-de Vries equation $u^{t} + uu^{x} + u$ xxx $= 0$ . The nonlinear Schrödinger equation ( $54$ ) provides a good model problem for nonlinear dispersive effects in optics. If it is well chosen, a model equation can lead to basic insights into the original equation itself.
For this reason, simplified model problems are also essential in the day-to-day work of the rigorous researcher into PDEs, who tests ideas on carefully selected model problems. It is crucial to emphasize that good results concerning the basic physical equations are rare; a very large percentage of important rigorous work in PDEs deals with simplified equations selected, for technical reasons, to isolate and focus our attention on some specific difficulties present in the basic equations.
In the above discussion we have not mentioned diffusive equation$s^{19}$ such as the Navier-Stokes equations. These are in fact not variational, and therefore do not quite fit into the above description. Though they could be viewed as phe no meno logical equations, they can also be derived from basic microscopic laws such as those governing the Newtonian-mechanical interactions of a very large number of particles N.
In principle, 20 the equations of continuum mechanics, such as the Navier-Stokes equations, could be derived by letting the number of particles $N \to \infty.$ Diffusive equations also turn out to be very useful in connection with geometric problems. Geometric flows such as mean curvature, inverse mean curvature, harmonic maps, Gauss curvature, and Ricci flow are some of the best-known examples. Diffusive equations can often be interpreted as the gradient flow for an associated elliptic variational problem.
They can be used to construct nontrivial stationary solutions to the corresponding stationary systems, in the limit as $t \to \infty,$ or to produce foliations with remarkable properties, such as one that was used recently in the proof of a famous conjecture of Penrose. As we have already mentioned, this idea has recently found an extraordinary application in the work of Perelman, who has used Ricci flow to settle the three-dimensional Poincaré conjecture. One $19$ .
That is, equations where some of the basic physical quantities, such as energy, are not conserved and may in fact decrease in time. These are typically of parabolic type. $20$ . To establish this rigorously remains a major challenge.

$481$

of his main new ideas was to interpret Ricci flow as a gradient flow.

$4$ . $4$

Regularity or Breakdown

An additional source of unity for the subject of PDEs is the central role played by the problem of regularity or breakdown of solutions to the basic equations. It is intimately tied to the fundamental mathematical question of understanding what we actually mean by solutions and, from a physical point of view, to the issue of understanding the limits of validity of the corresponding physical theories.
Thus, in the case of the Burgers equation, for example, the problem of singularities can be tackled by extending our concept of solutions to accommodate shock waves, which are solutions that are discontinuous across certain curves in the (t , x) - space . In this case one can define a function space of generalized solutions in which the IVP has unique, global solutions.
Though the situation for more realistic physical systems is far less clear and far from being satisfactorily solved, the generally held opinion is that shockwave-type singularities can be accommodated with out breaking the boundaries of the physical theory at hand. The situation for singularities in general relativity is radically different. The singularities one expects there are such that no continuation of solutions is possible with out altering the physical theory itself. The prevailing opinion here is that only a gravitational quantum field theory could achieve this.

$5$

General Conclusions

What, then, is the modern theory of PDEs? As a first approximation, one could say that it is the pursuit of the following main goals. (i) Understand the problem of evolution for the basic equations of mathematical physics. The most pressing issue in this regard is to understand when and how the loca$l^{21}$ (with respect to time) smooth solutions of the basic equations develop singularities. A simple-minded criterion for distinguishing between regular theories and those that may admit singular solutions is given by the distinction between subcritical and supercritical equations.
As mentioned earlier, it is widely believed $21$ . One of the important achievements of the past century of mathematics was the establishment of a general procedure that guarantees the existence and uniqueness of a local-in-time solution to broad classes of initial conditions and large classes of nonlinear equations, including all those we have already mentioned above.

482

that subcritical equations are regular and that supercrit-
ical equations are not. Indeed, many subcritical equa-
tions have been proved to be regular even though we
lack a general procedure for establishing regularity
results of this kind. The situation with supercritical
equations is far more subtle. To start with, an equa-
tion that we now call supercritical22 may in fact turn
out to be critical, or even subcritical, upon the discov-
ery of additional a priori estimates. Thus an important
question concerning the issue of criticality, and conse-
quently that of singular behavior, is: are there other,
stronger, local a priori bounds that cannot be derived
from Noether’s principle? The discovery of such a
bound would be a major event in both mathematics and
physics.
   Once we understand that the presence of singular i-
ties in our basic evolution equations is unavoidable, we
have to face the question of whether they can some-
how be accommodated by a more general concept of
what a solution is or whether their structure is such
that the equation itself, indeed the physical theory
that it under lies, becomes meaning less. An acceptable
concept of a generalized solution should, of course,
preserve the deterministic nature of the equations: in
other words, it should be uniquely determined from its
Cauchy data.
   Finally, once an acceptable concept of generalized
solutions is found, we would like to use it to deter-
mine some important qualitative features, such as long-
term asymptotic behavior. One can formulate a limit-
less number of such questions, the answers to which
will vary from equation to equation.
(ii) Understand in a rigorous mathematical fashion the
range of validity of various approximations. The equa-
tions obtained by various limiting procedures or phe-
nomenological assumptions can of course be stud-
ied in their own right, as the examples that we have
referred to above are. However, they present us with
additional problems to do with the mechanics of how
they are derived from equations that we regard as
more fundamental. It is entirely possible, for exam-
ple, that the dynamics of a derived system of equa-
tions leads to behavior that is incompatible with the
assumptions made in its derivation. Alternatively, a par-
ticular simplifying assumption, such as spherical sym-
metry in general relativity or zero vorticity for com-
press i ble fluids, may turn out to be unstable at large
  22. What we call supercritical depends on the strongest a priori
coercive estimate available.

IV. Branches of Mathematics
scales and therefore not a reliable predict or of the gen-
eral case. These and other similar situations lead to
important dilemmas: should we persist in studying the
approximate equations even when, in many cases, we
face formidable mathematical difficulties (some which
may turn out to be quite pathological and are per-
haps related to the nature of the approximation), or
should we abandon them in favor of the original system
or a more suitable approximation? Whatever one may
feel about this in any specific situation, it is clear that
the problem of understanding, rigorously, the range
of validity of various approximations is one of the
fundamental goals in PDEs.
(iii) Devise and analyze the right equation for studying
the specific geometric or physical problem at hand. This
last goal is equally important even though it is neces-
sarily vague. The enormously important role played by
PDEs in various branches of mathematics is more evi-
dent than ever. One looks in awe at how equations such
as the Laplace, heat, wave, Dirac, Kd V, Maxwell, Yang–
Mills, and Einstein equations, which were originally
introduced in specific physical contexts, turned out
to have very deep applications to seemingly unrelated
problems in areas such as geometry, topology, alge-
bra, and combinatorics. Other PDEs appear naturally
in geometry when we look for embedded objects with
optimal geometric shapes, such as solutions to isoperi-
metric problems, minimal surfaces, surfaces of least
distortion or minimal curvature, or, more abstractly,
connections, maps, or metrics with distinguished prop-
erties. They are variational in character, just like the
main equations of mathematical physics. Other equa-
tions have been introduced with the goal of allowing
one to deform a general object, such as a map, con-
nection, or metric, to an optimal one. They usually
arise in the form of geometric, parabolic flows. The
most famous example of this is Ricci flow, first intro-
duced by Richard Hamilton, who hoped to use it to
deform Riemannian metrics into Einstein metrics. Sim-
ilar ideas were used earlier to construct, for example,
stationary harmonic maps with the help of a harmonic
heat flow, and self-dual Yang–Mills connections with
the help of a Yang–Mills flow. In addition to the suc-
cessful use of Ricci flow to settle the Poincaré conjec-
ture in three dimensions, another remarkable recent
example of the usefulness of geometric flows is that
of the inverse mean flow, first introduced by Geroch, to
settle the so-called Riemannian version of the Penrose
inequality.