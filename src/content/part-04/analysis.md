# Partial Differential Equations

IV.12.    Partial Differential Equations                                                                                        455

   Many arguments in harmonic analysis will, at some                     tance of the underlying geometry (in this case, the
point, involve a combinatorial statement about certain                   combinatorics of metric balls) in harmonic analysis.
types of geometric objects such as cubes, balls, or
boxes. For instance, one useful such statement is the                    Further Reading
Vitali covering lemma, which asserts that, given any col-                Stein, E. M. 1970. Singular Integrals and Different i ability
lection B1 , . . . , Bk of balls in Euclidean space Rn , there             Properties of Functions. Princeton, NJ: Princeton Univer-
will be a subcollection Bi1 , . . . , Bim of balls that are dis-           sity Press.
joint, but that nevertheless contain a significant frac-                        . 1993. Harmonic Analysis. Princeton, NJ: Princeton
tion of the volume covered by the original balls. To be                    University Press.
precise, one can choose the disjoint balls so that                       Wolff, T. H. 2003. Lectures on Harmonic Analysis, edited
                                                                           by I. Łaba and C. Shubin. University Lecture Series, vol-
                     .
                     m                          .
                                                k
                                                                           ume 29. Providence, RI: American Mathematical Society.
              vol         B ij   ⩾ 5−n vol           Bj .
                    j=1                        j=1

(The constant 5−n can be improved, but this will not                     IV.12 Partial Differential Equations
concern us here.) This result is obtained by a “greedy
                                                                                  Sergiu Klainerman
algorithm”: one picks balls one by one, at each stage
choosing the largest ball among the Bj that is disjoint
                                                                                              Introduction
from all the balls already selected.
   One consequence of the Vitali covering lemma is                       Partial differential equations (or PDEs) are an impor-
the Hardy–Littlewood maximal inequality, which we will                   tant class of functional equations: they are equations,
briefly describe. Given any function f ∈ L1 (Rn ), any                    or systems of equations, in which the unknowns are
x ∈ Rn , and any r > 0, we can calculate the average                     functions of more than one variable. As a very crude
of |f | in the n-dimensional sphere B(x, r ) of center x                 analogy, PDEs are to functions as polynomial equa-
and radius r . Next, we can define the maximal function                   tions (such as x 2 + y 2 = 1, for example) are to num-
F of f by letting F (x) be the largest of all these aver-                bers. The distinguishing feature of PDEs, as opposed to
ages as r ranges over all positive real numbers. (More                   more general functional equations, is that they involve
precisely, one takes the supremum.) Then, for each pos-                  not only unknown functions, but also various partial
itive real number . ambda one can define a set X. ambda to be the set                 derivatives of those functions, in algebraic combina-
of all x such that F (x) > λ. The Hardy–Littlewood max-                  tion with each other and with other, fixed, functions.
imal inequality asserts that the volume of X. ambda is at most                 Other important kinds of functional equations are inte-
5 n f L1 /λ.2                                                           gral equations, which involve various integrals of the
   To prove it, one observes that X. ambda can be covered by                   unknown functions, and ordinary differential equations
balls B(x, r ) on each of which the integral of |f | is at               (ODEs), in which the unknown functions depend on
least . ambda vol(B(x, r )). To this collection of balls one can               only one independent variable (such as a time variable
then apply the Vitali covering lemma, and the result                     t) and the equation involves only ordinary derivatives
follows. The Hardy–Littlewood maximal inequality is                      d/dt, d2 /dt 2 , d3 /dt 3 , . . . of these functions.
a quantitative result, but it has as a qualitative con-                     Given the immense scope of the subject the best I can
sequence the Lebesgue differentiation theorem, which                      hope to do is to give a very crude perspective on some
asserts the following. If f is any absolutely integrable                 of the main issues and an even cruder idea of the mul-
function defined on Rn , then for almost every x ∈ Rn                     titude of current research directions. The difficulty one
the averages                                                             faces in trying to describe the subject of PDEs starts
                      1                                                  with its very definition. Is it a unified area of mathe-
                                             f (y) dy
                 vol(B(x, r ))     B(x, r )                               matics, devoted to the study of a clearly defined set
of f over the Euclidean balls about x tend to f (x)                      of objects (in the way that algebraic geometry studies
as r → 0. This example demonstrates the impor-                           solutions of polynomial equations or topology studies
                                                                         manifolds, for example), or is it rather a collection of
                                                                         separate fields, such as general relativity, several com-
  2. This version of the Hardy–Littlewood inequality looks somewhat      plex variables, or hydrodynamics, each one vast in its
different from the one mentioned briefly in the previous section, but
one can deduce that inequality from this one by the real interpolation
                                                                         own right and centered on a particular, very difficult,
method discussed earlier.                                                equation or class of equations? I will attempt to argue

456                                                                                                 IV. Branches of Mathematics

below that, even though there are fundamental difficul-                   view they are not important, since if u(t, x1 , x2 , x3 ) is
ties in formulating a general theory of PDEs, one can                   a solution of (3), for example, then v(t, x1 , x2 , x3 ) =
nevertheless find a remarkable unity between various                     u(t, x1 /c, x2 /c, x3 /c) satisfies the same equation with
branches of mathematics and physics that are centered                   c = 1. Thus, when one is studying the equations one
on individual PDEs or classes of PDEs. In particular, cer-              can set these constants to be 1. Both equations are
tain ideas and methods in PDEs have turned out to be                    called evolution equations because they are supposed
extraordinarily effective across the boundaries of these                 to describe the change of a particular physical object
separate fields. It is thus no surprise that the most suc-               as the time parameter t varies. Observe that (1) can be
cessful book ever written about PDEs did not mention                    interpreted as a particular case of both (2) and (3): if
PDEs in its title: it was Methods of Mathematical Physics               u = u(t, x1 , x2 , x3 ) is a solution of either (2) or (3) that
by courant [VI.83](/part-06/richard-courant-18881972) and hilbert [VI.63](/part-06/david-hilbert-18621943).                                 is independent of t, then ∂t u = 0, so u must satisfy (1).
   As it is impossible to do full justice to such a huge                   In all three examples mentioned above, we tacitly
subject in such limited space I have been forced to leave               assume that the solutions we are looking for are suffi-
out many topics and relevant details; in particular, I                  ciently differentiable for the equations to make sense.
have said very little about the fundamental issue of                    As we shall see later, one of the important develop-
breakdown of solutions, and there is no discussion of                   ments in the theory of PDEs was the study of more
the main open problems in PDEs. A longer and more                       refined notions of solutions, such as distributions
detailed version of the article, which includes these                   [III.18](/part-03/distributions), which require only weak versions of differen-
topics, can be found at                                                 tiability.
                                                                           Here are some further examples of important PDEs.
      http://press.princeton.edu/titles/8350.html                       The first is the schrödinger equation [III.83](/part-03/the-schrdinger-equation),
                                                                                              i∂t u + kΔu = 0,                      (4)
         1   Basic Definitions and Examples
                                                                        where u is a function from R . imes R3 to C. This equation
The simplest example of a PDE is the laplace equa-                      describes the quantum evolution of a massive particle,
tion [I.3 §5.4](/part-01/fundamental-definitions)                                                         k = /2 m, where  > 0 is Planck’s constant and m is
                     Δu = 0.                    (1)                     the mass of the particle. As with the heat equation, one
Here, Δ is the Laplacian, that is, the differential operator             can set k to equal 1 after a simple change of variables.
that transforms functions u = u(x1 , x2 , x3 ) defined                   Though the equation is formally very similar to the heat
from R3 to R according to the rule                                      equation, it has very different qualitative behavior. This
                                                                        illustrates an important general point about PDEs: that
Δu(x1 , x2 , x3 )                                                       small changes in the form of an equation can lead to
= ∂12 u(x1 , x2 , x3 ) + ∂22 u(x1 , x2 , x3 ) + ∂32 u(x1 , x2 , x3 ),   very different properties of solutions.
where ∂1 , ∂2 , ∂3 are standard shorthand for the par-                     A further example is the Klein–Gordon equation
tial derivatives ∂/∂x1 , ∂/∂x2 , ∂/∂x3 . (We will use this                                             mc 2 2
                                                                                     −∂t2 u + c 2 Δu −        u = 0.          (5)
shorthand through out the article.) Two other funda-                                                      
mental examples (also described in [I.3 §5.4](/part-01/fundamental-definitions)) are the                  This is the relativistic counterpart to the Schrödinger
heat equation and the wave equation:                                    equation: the parameter m has the physical interpre-
                                                                        tation of mass and mc 2 has the physical interpreta-
                        −∂t u + kΔu = 0,                          (2)
                                                                        tion of rest energy (reflecting Einstein’s famous equa-
                      −∂t2 u + c 2 Δu = 0.                        (3)
                                                                        tion E = mc 2 ). One can normalize the constants c and
In each case one is asked to find a function u that                      mc 2 / so that they both equal 1 by applying a suitable
satisfies the corresponding equations. For the Laplace                   change of variables to time and space.
equation u will depend on x1 , x2 , and x3 , and for the                   Though all five equations mentioned above first
other two it will depend on t as well. Observe that equa-               appeared in connection with specific physical phenom-
tions (2) and (3) again involve the symbol Δ, but also                  ena, such as heat transfer for (2) and propagation of
partial derivatives with respect to the time variable t.                electromagnetic waves for (3), they have, miraculously,
The constants k (which is positive) and c are fixed and                  a range of relevance far beyond their original applica-
represent the rate of diffusion and the speed of light,                  tions. In particular there is no reason to restrict their
respectively. However, from a mathematical point of                     study to three space dimensions: it is very easy to

IV.12.     Partial Differential Equations                                                                                      457

generalize them to similar equations in n variables                   Since symmetries play such a fundamental role in
x1 , x2 , . . . , xn .                                             PDEs we should stop for a moment to make a general
   All the PDEs listed so far obey a simple but funda-             definition. A symmetry of a PDE is any invertible opera-
mental property called the principle of superposition: if          tion T : u → T (u) from functions to functions that pre-
u1 and u2 are two solutions to one of these equations,             serves the space of solutions, in the sense that u solves
then any linear combination a1 u1 +a2 u2 of these solu-            the PDE if and only if T (u) solves the same PDE. A PDE
tions is also a solution. In other words, the space of all         with this property is then said to be invariant under the
solutions is a vector space [I.3 §2.3](/part-01/fundamental-definitions). Equations that             symmetry T . The symmetry T is often a linear opera-
obey this property are known as homogeneous linear                 tion, though this does not have to be the case. The com-
equations. If the space of solutions is an affine space              position of two symmetries is again a symmetry, as is
(that is, a translate of a vector space) rather than a vec-        the inverse of a symmetry, and so it is natural to view a
tor space, we say that the PDE is an inhomogeneous                 collection of symmetries as forming a group [I.3 §2.1](/part-01/fundamental-definitions)
linear equation; a good example is Poisson’s equation:             (which is typically a finite- or infinite-dimensional lie
                            Δu = f ,                         (6)   group [III.48 §1](/part-03/lie-theory)).
where f :    R3 → R is a function that is given to us and             Because the translation group is intimately con-
u : R3 → R is the unknown function. Equations that are             nected with the fourier transform [III.27](/part-03/the-fourier-transform) (indeed,
neither homogeneous linear nor inhomogeneous linear                the latter can be viewed as the representation theory
are known as nonlinear. The following equation, the                of the former), this symmetry strongly suggests that
minimal surface equation [III.94 §3.1](/part-03/variational-methods), is manifestly              Fourier analysis should be a useful tool to solve con-
nonlinear:                                                         stant-coefficient PDEs, and this is indeed the case.
                                                                      Our basic constant-coefficient linear operators, the
                    ∂1 u
  ∂1                                                               Laplacian Δ and the d’Alembertian , are formally
         (1 + |∂1 u|2 + |∂2 u|2 )1/2
                                                                   similar in many respects. The Laplacian is fundamen-
                                    ∂2 u
                 + ∂2                                 = 0.   (7)   tally associated with the geometry of euclidean space
                        (1 + |∂1 u|2 + |∂y u|2 )1/2
                                                                   [I.3 §6.2](/part-01/fundamental-definitions) R3 and the d’Alembertian is similarly associ-
The graphs of solutions u : R2 → R of this equation are
                                                                   ated with the geometry of minkowski space [I.3 §6.8](/part-01/fundamental-definitions)
area-minimizing surfaces (like soap films).
                                                                   R1+3 . This means that the Laplacian commutes with
  Equations (1), (2), (3), (4), (5) are not just linear: they
                                                                   all the rigid motions of the Euclidean space R3 , while
are all examples of constant-coefficient linear equations.
                                                                   the d’Alembertian commutes with the corresponding
This means that they can be expressed in the form
                                                                   class of Poincaré transformations of Minkowski space-
                           P[u] = 0,                         (8)   time. In the former case this simply means that invari-
where P is a differential operator that involves lin-               ance applies to all transformations of R3 that preserve
ear combinations, with constant real or complex coeffi-              the Euclidean distances between points. In the case
cients, of mixed partial derivatives of u. (Such oper-             of the wave equation, the Euclidean distance has to
ators are called constant-coefficient linear differential             be replaced by the spacetime distance between points
operators.) For instance, in the case of the Laplace equa-         (which would be called events in the language of rela-
tion (1), P is simply the Laplacian Δ, while for the wave          tivity): if P = (t, x1 , x2 , x3 ) and Q(s, y1 , y2 , y3 ), then
equation (3), P is the d’Alembertian                               the distance between them is given by the formula
                 P =  = −∂t2 + ∂12 + ∂22 + ∂32 .
                                                                   d M (P , Q)2
The characteristic feature of linear constant-coefficient
                                                                     = −(t − s)2 + (x1 − y1 )2 + (x2 − y2 )2 + (x3 − y3 )2 .
operators is translation invariance. Roughly speaking,
this means that if you translate a function u, then you            As a consequence of this basic fact we infer that all
translate Pu in the same way. More precisely, if v(x) is           solutions to the wave equation (3) are invariant under
defined to be u(x − a) (so the value of u at x becomes              translations and lorentz transformations [I.3 §6.8](/part-01/fundamental-definitions).
the value of v at x + a; note that x and a belong to R3              Our other evolution equations (2) and (4) are clearly
here), then Pv(x) is equal to Pu(x − a). As a conse-               invariant under rotations of the space variables x =
quence of this basic fact we infer that solutions to the           (x 1 , x 2 , x 3 ) ∈ R3 , when t is fixed. They are also
homogeneous, linear, constant-coefficient equation (8)               Galilean invariant, which means, in the particular case
are still solutions when translated.                               of the Schrödinger equation (4), that whenever u =

458                                                                                     IV. Branches of Mathematics

u(t, x) is a solution so is the function uv (t, x) =          particular, if P[0] = 0 (as is the case in our example),
              2
ei(x·v) eit|v| (t, x −vt) for any vector v ∈ R3 .             then whenever u vanishes on a domain, P[u] will also
   Poisson’s equation (6), on the other hand, is an           vanish on that domain.
example of a constant-coefficient inhomogeneous linear            So far we have tacitly assumed that our equations
equation, which means that it takes the form                  take place in the whole of a space such as R3 , R+ × R3 ,
                                                              or R . imes R3 . In reality one is often restricted to a fixed
                          P[u] = f                      (9)
                                                              domain of that space. Thus, for example, equation (1) is
for some constant-coefficient linear differential opera-         usually studied on a bounded open domain of R3 sub-
tor P and known function f . To solve such an equation        ject to a specified boundary condition. Here are some
requires one to understand the invertibility or other-        basic examples of boundary conditions.
wise of the linear operator P: if it is invertible then u
will equal P −1 f , and if it is not invertible then either   Example. The Dirichlet problem for Laplace’s equation
there will be no solution or there will be infinitely many     on an open domain of D ⊂ R3 is the problem of finding
solutions. Inhomogeneous equations are closely related        a function u that behaves in a prescribed way on the
to their homogeneous counterpart; for instance, if u1 ,       boundary of D and obeys the Laplace equation inside.
u2 both solve the inhomogeneous equation (9) with               More precisely, one specifies a continuous function
the same inhomogeneous term f , then their differ-             u0 : ∂D → R and looks for a continuous function u,
ence u1 − u2 solves the corresponding homogeneous             defined on the closure . ar{D} of D, that is twice continu-
equation (8).                                                 ously differentiable inside D and solves the equations
   Linear homogeneous PDEs satisfy the principle of                                                      ⎫
                                                                        Δu(x) = 0         for all x ∈ D, ⎬
superposition but they do not have to be translation                                                            (10)
invariant. For example, suppose that we modify the                        u(x) = u0 (x) for all x ∈ ∂D.⎭
heat equation (2) so that the coefficient k is no longer        A basic result in PDEs asserts that if the domain D has
constant but rather an arbitrary, positive, smooth func-      a sufficiently smooth boundary, then there is exactly
tion of (x1 , x2 , x3 ). Such an equation models the flow      one solution to the problem (10) for any prescribed
of heat in a medium in which the rate of diffusion             function u0 on the boundary ∂D.
varies from point to point. The corresponding space
                                                              Example. The Plateau problem is the problem of find-
of solutions is not translation invariant (which is not
                                                              ing the surface of minimal total area that bounds a
surprising as the medium in which the heat flows is
                                                              given curve.
not translation invariant). Equations like this are called
linear equations with variable coefficients. It is more            When the surface is the graph of a function u on
difficult to solve them and describe their qualitative          some suitably smooth domain D, in other words a set
features than it is for constant-coefficient equations.         of the form {(x, y, u(x, y)) : (x, y) ∈ D}, and the
(See, for example, stochastic processes [IV.24 §5.2](/part-04/stochastic-processes)          bounding curve is the graph of a function u0 over
for an approach to equations of type (2) with variable        the boundary ∂D of D, then this problem turns out
k.) Finally, nonlinear equations such as (7) can often        to be equivalent to the Dirichlet problem (10), but
still be written in the form (8), but the operator P is       with the linear equation (1) replaced by the nonlin-
now a nonlinear differential operator. For instance, the       ear equation (7). For the above equations, it is also
relevant operator for (7) is given by the formula             often natural to replace the Dirichlet boundary condi-
                   
                   2                                          tion u(x) = u0 (x) on the boundary ∂D with another
                                     1
          P[u] =         ∂i                   ∂i u ,          boundary condition, such as the Neumann boundary
                   i=1
                              (1 + |∂u|2 )1/2
                                                              condition n(x) · ∇x u(x) = u1 (x) on ∂D, where n(x) is
where |∂u|2 = (∂1 u)2 +(∂2 u)2 . Operators such as these      the outward normal (of unit length) to D at x. Generally
are clearly not linear. However, because they are ulti-       speaking, Dirichlet boundary conditions correspond to
mately constructed from algebraic operations and par-         “absorbing” or “fixed” barriers in physics, whereas Neu-
tial derivatives, both of which are “local” operations,       mann boundary conditions correspond to “reflecting”
we observe the important fact that P is at least still        or “free” barriers.
a “local” operator. More precisely, if u1 and u2 are             Natural boundary conditions can also be imposed for
two functions that agree on some open set D, then the         our evolution equations (2)–(4). The simplest one is to
expressions P[u1 ] and P[u2 ] also agree on this set. In      prescribe the values of u when t = 0. We can think of

IV.12.   Partial Differential Equations                                                                               459

this more geometrically. We are prescribing the values             The choice of boundary condition and initial condi-
of u at each spacetime point of form (0, x, y, z), and          tions for a given PDE is very important. For equations
the set of all such points is a hyperplane in R1+3 : it is      of physical interest these arise naturally from the con-
an example of an initial time surface.                          text in which they are derived. For example, in the case
                                                                of a vibrating string, which is described by solutions of
Example. The Cauchy problem (or initial value prob-             the one-dimensional wave equation ∂t2 u − ∂x2 u = 0 in
lem, sometimes abbreviated to IVP) for the heat equa-           the domain (a, b) × R, the initial conditions u = u0 and
tion (2) asks for a solution u : R+ × R3 → R on the             ∂t u = u1 at t = t0 amount to specifying the original
spacetime domain R+ × R3 = {(t, x) : t > 0, x ∈ R3 },           position and velocity of the string. The boundary con-
which equals a prescribed function u0 : R3 → R on the           dition u(a) = u(b) = 0 is what tells us that the two
initial time surface {0} × R3 = ∂(R+ × R3 ).                    ends of the string are fixed.
                                                                   So far we have considered just scalar equations.
  In other words, the Cauchy problem asks for a suf-
                                                                These are equations where there is only one unknown
ficiently smooth function u, defined on the closure
                                                                function u, which takes values either in the real num-
of R+ × R3 and taking values in R, that satisfies the
                                                                bers R or in the complex numbers C. However, many
conditions
                                                  ⎫             important PDEs involve either multiple unknown scalar
  −∂t u(t, x) + kΔu(t, x) = 0                     ⎪
                                                  ⎪
                                                  ⎬             functions or (equivalently) functions that take values
                      for every (t, x) ∈ R+ × R3 , (11)         in a multi dimensional vector space such as Rm . In
                                                  ⎪
                                                  ⎪
                                                  ⎭
    u(0, x) = u0 (x) for every x ∈ R3 .                         such cases, we say that we have a system of PDEs. An
                                                                important example of a system is that of the cauchy–
The function u0 is often referred to as the initial con-
                                                                riemann equations [I.3 §5.6](/part-01/fundamental-definitions):
ditions, or initial data, or just data, for the problem.
Under suitable smoothness and decay conditions, one                     ∂1 u2 − ∂2 u1 = 0,    ∂1 u1 + ∂2 u2 = 0,     (12)
can show that this equation has exactly one solution
                                                                where u1 , u2 : R2 → R are real-valued functions on the
u for each choice of data u0 . Interestingly, this asser-
                                                                plane. It was observed by cauchy [VI.29](/part-06/augustin-louis-cauchy-17891857) that a com-
tion fails if one replaces the future domain R+ × R3 =
                                                                plex function w(x+iy) = u1 (x, y)+iu2 (x, y) is holo-
{(t, x) : t > 0, x ∈ R3 } by the past domain R− × R3 =
                                                                morphic [I.3 §5.6](/part-01/fundamental-definitions) if and only if its real and imaginary
{(t, x) : t < 0, x ∈ R3 }.
                                                                parts u1 , u2 satisfy the system (12). This system can
  A similar formulation of the IVP holds for the Schrö-         still be represented in the form of a constant-coefficient
dinger equation (4), though in this case we can solve                                                       u
                                                                linear PDE (8), but u is now a vector ( u12 ), and P is
both to the past and to the future. However, in the case        not a scalar differential operator, but rather a matrix
of the wave equation (3) we need to specify not just the                        −∂ ∂
                                                                of operators ( ∂12 ∂12 ).
initial position u(0, x) = u0 (x) on the initial time sur-         The system (12) contains two equations and two
face t = 0, but also an initial velocity ∂t u(0, x) = u1 (x),   unknowns. This is the standard situation for a deter-
since equation (3) (unlike (2) or (4)) cannot formally          mined system. Roughly speaking, a system is called
determine ∂t u in terms of u. One can construct unique          over determined if it contains more equations than
smooth solutions (both to the future and to the past of         unknowns and under determined if it contains fewer
the initial hyperplane t = 0) to the IVP for (3) for very       equations than unknowns. Under determined equations
general smooth initial conditions u0 , u1 .                     typically have infinitely many solutions for any given
  Many other boundary-value problems are possible.              set of prescribed data; conversely, over determined
For instance, when analyzing the evolution of a wave            equations tend to have no solutions at all, unless some
in a bounded domain D (such as a sound wave), it is             additional compatibility conditions are imposed on the
natural to work with the spacetime domain R . imes D and             prescribed data.
prescribe both Cauchy data (on the initial boundary                Observe also that the Cauchy–Riemann operator P
0 . imes D) and Dirichlet or Neumann data (on the spatial            has the following remarkable property:
boundary R × ∂D). On the other hand, when the phys-                                                      
                                                                                                      Δu1
ical problem under consideration is the evolution of a                          2
                                                                               P [u] = P[P[u]] =            .
wave outside a bounded obstacle (for example, an elec-                                                Δu2
tro magnetic wave), one considers instead the evolution          Thus P can be viewed as a square root of the two-
in R × (R3 . D) with a boundary condition on D.                 dimensional Laplacian Δ. One can define a similar type

460                                                                                        IV. Branches of Mathematics

of square root for the Laplacian in higher dimensions            systems of PDEs. This is the case, for example, in the
and, more surprisingly, even for the d’Alembertian               standard model of weak and strong interactions, which
operator  in R1+3 . To achieve this we need to have             is based on the so-called Yang–Mills–Higgs field theory.
four 4 . imes 4 complex matrices γ 1 , γ 2 , γ 3 , γ 4 that satisfy   If we also include the ordinary differential equations
the property                                                     of classical mechanics, which can be viewed as one-
                γ α γ β + γ β γ α = −2 mαβ I.                     dimensional PDEs, we see that essentially all of physics
                                                1
                                                                 is described by differential equations. As examples of
Here, I is the unit 4 . imes 4 matrix and mαβ = 2 when α =
           1                                                     PDEs underlying some of our most basic physical theo-
β = 1, − 2 when α = β = 1, and 0 otherwise. Using
                                                                 ries we refer to the articles that discuss the euler and
the γ matrices we can introduce the Dirac operator as
                                                                 navier–stokes equations [III.23](/part-03/the-euler-and-navierstokes-equations), the heat equa-
follows. If u = (u1 , u2 , u3 , u4 ) is a function in R1+3
                                                                 tion [III.36](/part-03/the-heat-equation), the schrödinger equation [III.83](/part-03/the-schrdinger-equation), and
with values in C4 , then we set Du = iγ α ∂α u. It is easy
                                                                 the einstein equations [IV.13](/part-04/general-relativity-and-the-einstein-equations).
to check that, indeed, D2 u = u. The equation
                                                                    An important feature of the main PDEs is their appar-
                         Du = ku                         (13)    ent universality. Thus, for example, the wave equation,
is called the Dirac equation and it is associated with a         first introduced by d’alembert [VI.20](/part-06/jean-le-rond-dalembert-17171783) to describe the
free, massive, relativistic particle such as an electron.        motion of a vibrating string, was later found to be
   One can extend the concept of a PDE further to cover          connected with the propagation of sound and electro-
unknowns that are not, strictly speaking, functions              magnetic waves. The heat equation, first introduced by
taking values in a vector space, but are instead sec-            fourier [VI.25](/part-06/jean-baptiste-joseph-fourier-17681830) to describe heat propagation, appears
tions of a vector bundle [IV.6 §5](/part-04/algebraic-topology), or perhaps a map             in many other situations in which dissipative effects
from one manifold [I.3 §6.9](/part-01/fundamental-definitions) to another; such gener-             play an important role. The same can be said about the
alized PDEs play an important role in geometry and               Laplace equation, the Schrödinger equation, and many
modern physics. A fundamental example is given by                other basic equations.
the einstein field equations [IV.13](/part-04/general-relativity-and-the-einstein-equations). In the simplest,               It is even more surprising that equations that were
“vacuum,” case, they take the form                               originally introduced to describe specific physical phe-
                        Ric(g) = 0,                      (14)    nomena have played a fundamental role in several areas
                                                                 of mathematics that are considered to be “pure,” such
where Ric(g) is the ricci curvature [III.78](/part-03/ricci-flow) tensor of           as complex analysis, differential geometry, topology,
the spacetime manifold M = (M, g). In this case the              and algebraic geometry. Complex analysis, for exam-
spacetime metric itself is the unknown to be solved for.         ple, which studies the properties of holomorphic func-
One can often reduce such equations locally to more
                                                                 tions, can be regarded as the study of solutions to
traditional PDE systems by selecting a suitable choice of
                                                                 the Cauchy–Riemann equations (12) in a domain of R2 .
coordinates, but the task of selecting a “good” choice of
                                                                 Hodge theory is based on studying the space of solu-
coordinates, and working out how different choices are
                                                                 tions to a class of linear systems of PDEs on manifolds
compatible with each other, is a nontrivial and impor-
                                                                 that generalize the Cauchy–Riemann equations: it plays
tant one. Indeed, the task of selecting a good set of
                                                                 a fundamental role in topology and algebraic geometry.
coordinates in order to solve a PDE can end up being a
                                                                 the atiyah–singer index theorem [V.2](/part-05/the-atiyahsinger-index-theorem) is formu-
significant PDE problem in its own right.
                                                                 lated in terms of a special class of linear PDEs on mani-
   PDEs are ubiquitous through out mathematics and
                                                                 folds, related to the Euclidean version of the Dirac oper-
science. They provide the basic mathematical frame-
                                                                 ator. Important geometric problems can be reduced to
work for some of the most important physical theo-
                                                                 finding solutions to specific PDEs, typically nonlinear.
ries: elasticity, hydrodynamics, ele ct ro magnetism, gen-
                                                                 We have already seen one example: the Plateau prob-
eral relativity, and nonrelativistic quantum mechanics,
                                                                 lem of finding surfaces of minimal total area that pass
for example. The more modern relativistic quantum
                                                                 through a given curve. Another striking example is the
field theories lead, in principle, to equations in an infi-
                                                                 uniformization theorem [V.34](/part-05/the-uniformization-theorem) in the theory of sur-
nite number of unknowns, which lie beyond the scope
                                                                 faces, which takes a compact Riemannian surface S (a
of PDEs. Yet, even in that case, the basic equations pre-
                                                                 two-dimensional surface with a riemannian metric
serve the locality property of PDEs. Moreover, the start-
                                                                 [I.3 §6.10](/part-01/fundamental-definitions)) and, by solving the PDE
ing point of a quantum field theory [IV.17 §2.1.4](/part-04/vertex-operator-algebras) is
always a classical field theory, which is described by                                 ΔS u + e2 u = K                  (15)

IV.12.   Partial Differential Equations                                                                              461

(which is a nonlinear variant of the Laplace equation         model [VII.9 §2](/part-07/the-mathematics-of-money) in mathematical finance. A general dis-
(1)), uniformizes the metric so that it is “equally curved”   cussion of SDEs can be found in stochastic processes
at all points on the surface (or, more precisely, has         [IV.24 §6](/part-04/stochastic-processes).
constant scalar curvature [III.78](/part-03/ricci-flow)) without changing             The plan for the rest of this article is as follows. In
the conformal class of the metric (i.e., without distort-     section 2 I shall describe some of the basic notions
ing any of the angles subtended by curves on the sur-         and achievements of the general theory of PDEs. The
face). This theorem is of fundamental importance to           main point I want to make here is that, in contrast
the theory of such surfaces: in particular, it allows one     with ordinary differential equations, for which a gen-
to give a topological classification of compact surfaces       eral theory is both possible and useful, partial differen-
in terms of a single number χ(S), which is called the         tial equations do not lend themselves to a useful gen-
euler characteristic [I.4 §2.2](/part-01/general-goals) of the surface S. The         eral theoretical treatment because of some important
three-dimensional analogue of the uniformization the-         obstructions that I shall try to describe. One is thus
orem, the geometrization conjecture [IV.7 §2.4](/part-04/dierential-topology) of            forced to discuss special classes of equations such as
Thurston, has recently been established by Perelman,          elliptic, parabolic, hyperbolic, and dispersive equations.
who did so by solving yet another PDE; in this case, the      In section 3 I will try to argue that, despite the impossi-
equation is the ricci flow [III.78](/part-03/ricci-flow) equation                   bility of developing a useful general theory that encom-
                     ∂t g = 2 Ric(g),                 (16)    passes all, or most, of the important examples, there is
                                                              nevertheless an impressive unifying body of concepts
which can be transformed into a nonlinear version of          and methods for dealing with various basic equations,
the heat equation (2) after a carefully chosen change         and this gives PDEs the feel of a well-defined area of
of coordinates. The proof of the geometrization con-          mathematics. In section 4 I develop this further by try-
jecture is a decisive step toward the total classifica-        ing to identify some common features in the derivation
tion of all three-dimensional compact manifolds, in           of the main equations that are dealt with in the subject.
particular establishing the well-known poincaré con-          An additional source of unity for PDEs is the central
jecture [IV.7 §2.4](/part-04/dierential-topology). To overcome the many technical           role played by the issues of regularity and breakdown
details in establishing this conjecture, one needs to         of solutions, which is discussed only briefly here. In the
make a detailed qualitative analysis of the behavior          final section we shall discuss some of the main goals
of solutions to the Ricci flow equation, a task which          that can be identified as driving the subject.
requires just about all the advances made in geometric
PDEs in the last hundred years.
                                                                              2   General Equations
   Finally, we note that PDEs arise not only in physics
and geometry but also in many fields of applied sci-           One might expect, after looking at other areas of math-
ence. In engineering, for example, one often wants to         ematics such as algebraic geometry or topology, that
control some feature of the solution u to a PDE by care-      there was a very general theory of PDEs that could be
fully selecting whatever components of the given data         specialized to various specific cases. As I shall argue
one can directly influence; consider, for instance, how        below, this point of view is seriously flawed and very
a violinist controls the solution to the vibrating string     much out of fashion. It does, however, have important
equation (closely related to (3)) by modulating the force     merits, which I hope to illustrate in this section. I shall
and motion of a bow on that string in order to produce a      avoid giving formal definitions and focus instead on
beautiful sound. The mathematical theory dealing with         representative examples. The reader who wants more
these types of issues is called control theory.               precise definitions can consult the online version of
   When dealing with complex physical systems, one            this article.
cannot possibly have complete information about the             For simplicity we shall look mostly at determined
state of the system at any given time. Instead, one           systems of PDEs. The simplest distinction, which we
often makes certain randomness assumptions about              have already made, is between scalar equations, such
various factors that influence it. This leads to the very      as (1)–(5), which consist of only one equation and one
important class of equations called stochastic differen-       unknown, and systems of equations, such as (12) and
tial equations (SDEs), where one or more components of        (13). Another simple but important concept is that of
the equation involve a random variable [III.71 §4](/part-03/probability-distributions) of         the order of a PDE, which is defined to be the highest
some sort. An example of this is in the black–scholes         derivative that appears in the equation; this concept is

462                                                                                                        IV. Branches of Mathematics

analogous to that of the degree of a polynomial. For                      to the complex geometry of calabi–yau manifolds
instance, the five basic equations (1)–(5) listed earlier                  [III.6](/part-03/calabiyau-manifolds). Fully nonlinear equations are among the most
are second order in space, although some (such as (2)                     difficult and least well-understood of all PDEs.
or (4)) are only first order in time. Equations (12) and
                                                                          Remark. Most of the basic equations of physics, such
(13), as well as the Maxwell equations, are first order.1
                                                                          as the Einstein equations, are quasilinear. However,
   We have seen that PDEs can be divided into linear and
                                                                          fully nonlinear equations arise in the theory of char-
nonlinear equations, with the linear equations being
                                                                          acteristics of linear PDEs, which we discuss below, and
divided further into constant-coefficient and variable-
                                                                          also in geometry.
coefficient equations. One can also divide nonlinear
PDEs into several further classes depending on the
                                                                          2.1   First-Order Scalar Equations
“strength” of the nonlinearity. At one end of the scale,
a semilinear equation is one in which all the nonlinear                   It turns out that first-order scalar PDEs in any num-
components of the equation have strictly lower order                      ber of dimensions can be reduced to systems of first-
than the linear components. For instance, equation (15)                   order ODEs. As a simple illustration of this impor-
is semilinear, because the nonlinear component eu is                      tant fact consider the following equation in two space
of zero order, i.e., it contains no derivatives, whereas                  dimensions:
the linear component ΔS u is of second order. These
equations are close enough to being linear that they can                  a1 (x 1 , x 2 )∂1 u(x 1 , x 2 )+a2 (x 1 , x 2 )∂2 u(x 1 , x 2 )
often be effectively viewed as perturbations of a linear                                                                   = f (x 1 , x 2 ),   (17)
equation. A more strongly nonlinear class of equations
                                                                          where a1 , a2 , f are given real functions in the variables
is that of quasilinear equations, in which the highest-
                                                                          x = (x 1 , x 2 ) ∈ R2 . We associate with (17) the first-order
order derivatives of u appear in the equation only in
                                                                          2 . imes 2 system
a linear manner but the coefficients attached to those                                                                        ⎫
                                                                                           dx 1                             ⎪
derivatives may depend in some nonlinear manner on                                              (s) = a1 (x 1 (s), x 2 (s)),⎪
                                                                                                                            ⎪
                                                                                                                            ⎬
lower-order derivatives. For instance, the second-order                                     ds
                                                                                                                                   (18)
                                                                                              dx  2                         ⎪
                                                                                                                            ⎪
equation (7) is quasilinear, because if one uses the                                                = a2 (x 1 (s), x 2 (s)).⎪
                                                                                                                            ⎭
product rule to expand the equation, then it takes the                                         ds
quasilinear form                                                          To simplify matters, let us assume that f = 0.
                                                                            Suppose now that x(s) = (x 1 (s), x 2 (s)) is a solution
  F11 (∂1 u, ∂2 u)∂12 u + F12 (∂1 u, ∂2 u)∂1 ∂2 u                         of (18), and let us consider how u(x 1 (s), x 2 (s)) varies
                                     + F22 (∂1 u, ∂2 u)∂22 u = 0          as s varies. By the chain rule we know that
for some explicit algebraic functions F11 , F12 , F22 of the                               d           d dx 1        dx 2
                                                                                              u = ∂1 u        + ∂2 u      ,
lower-order derivatives of u. While quasilinear equa-                                     ds           ds ds          ds
tions can still sometimes be analyzed by perturbative                     and equations (17) and (18) imply that this equals zero
techniques, this is generally more difficult to accom-                      (by our assumption that f = 0). In other words, any
plish than it is for an analogous semilinear equation.                    solution u = u(x 1 , x 2 ) of (17) with f = 0 is con-
Finally, we have fully nonlinear equations, which exhibit                 stant along any parametrized curve of the form x(s) =
no linearity properties whatsoever. A typical example is                  (x 1 (s), x 2 (s)) that satisfies (18).
the Monge–Ampère equation                                                    Thus, in principle, if we know the solutions to (18),
                   det(D2 u) = F (x, u, Du),                              which are called characteristic curves for the equation
                                                                          (17), then we can find all solutions to (17). I say “in prin-
where u : Rn → R is the unknown function, Du is the
                                                                          ciple” because, in general, the nonlinear system (18) is
gradient [I.3 §5.3](/part-01/fundamental-definitions) of u, D2 u = (∂i ∂j u)1⩽i, j ⩽n is the
                                                                          not so easy to solve. Nevertheless, ODEs are simpler to
Hessian matrix of u, and F : Rn . imes R . imes Rn → R is a
                                                                          deal with, and the fundamental theorem of ODEs, which
given function. This equation arises in many geometric
                                                                          we will discuss later in this section, allows us to solve
contexts, ranging from manifold-embedding problems
                                                                          (18) at least locally and for a small interval in s.
                                                                             The fact that u is constant along characteristic curves
   1. There is a simple trick, well-known in ordinary differential equa-   allows us to obtain important qualitative information
tions, for converting higher-order equations into a lower-order (or
even first-order) system of equations by increasing the number of
                                                                          even when we cannot find explicit solutions. For exam-
unknowns. See the discussion in dynamics [IV.14 §1.2](/part-04/dynamics).                    ple, suppose that the coefficients a1 , a2 are smooth (or

IV.12.   Partial Differential Equations                                                                                463

real analytic) and that the initial data is smooth (or real      which implicitly gives us the form of the solution u.
analytic) every where on the set H where it is defined,            We see once more, from (23), that if the initial data is
except at some point x0 where it is discontinuous. Then          smooth (or real analytic) every where except at a point
the solution u remains smooth (or real analytic) at              x0 of the line t = 0, then the corresponding solution
all points except along the characteristic curve Γ that          is also smooth (or real analytic) every where in a small
starts at x0 , or, in other words, along the solution to         neighborhood V of x0 , except along the characteristic
(18) that satisfies the initial condition x(0) = x0 . That        curve that begins at x0 . The smallness of V is neces-
is, the discontinuity at x0 propagates precisely along           sary here because new singularities can form at large
Γ . We see here the simplest manifestation of an impor-          scales. Indeed, u has to be constant along the lines
tant principle, which we shall explain in more detail            x + su0 (x), whose slopes depend on u0 (x). At a point
later: singularities of solutions to PDEs propagate along        where these lines cross we would obtain different val-
characteristics (or, more generally, hypersurfaces).             ues of u, which is impossible unless u becomes singular
   One can generalize equation (17) to allow the coeffi-           by this point. This blow-up phenomenon occurs for any
cients a1 , a2 , and f to depend not only on x = (x 1 , x 2 )    smooth, nonconstant initial data u0 .
but also on u:
                                                                 Remark. There is an important difference between the
a1 (x, u(x))∂1 u(x)+a2 (x, u(x))∂2 u(x) = f (x, u(x)).           linear equation (17) and the quasilinear equation (19).
                                                  (19)           The characteristics of the first depend only on the coef-
The associated characteristic system becomes                     ficients a1 (x), a2 (x), while the characteristics of the
                                             ⎫                   second depend explicitly on a particular solution u of
            dx 1                             ⎪
                 (s) = a1 (x(s), u(s, x(s))),⎪
                                             ⎪
                                             ⎬                   the equation. In both cases, singularities can only prop-
             ds
                                                  (20)           agate along the characteristic curves of the equation.
            dx 2                             ⎪
                                             ⎪
                 (s) = a2 (x(s), u(s, x(s))).⎪
                                             ⎭                   For nonlinear equations, however, new singularities can
             ds
                                                                 form at large distance scales, whatever the smoothness
  As a special example of (19) consider the scalar
                                                                 of the initial data.
equation in two space dimensions,
                                                                    The above procedure extends to fully nonlinear sca-
          ∂t u + u∂x u = 0,     u(0, x) = u0 (x),        (21)
                                                                 lar equations in Rd such as the Hamilton–Jacobi equa-
which is called the Burgers equation. Here we have set           tion
a1 (x, u(x)) = 1 and a2 (x, u(x)) = u(x). With this
                                                                      ∂t u + H(x, Du) = 0,    u(0, x) = u0 (x),      (24)
choice of a1 , a2 , we can take x 1 (s) to be s in (20). Then,
renaming x 2 (s) as x(s), we derive the characteristic           where u : R . imes Rn → R is the unknown function, Du is the
equation in the form                                             gradient of u, and the hamiltonian [III.35](/part-03/hamiltonians) H : Rd . imes Rd → R and the initial data u0 : Rd → R are given. For
                    dx
                       (s) = u(s, x(s)).                 (22)    instance, the eikonal equation ∂t u = |Du| is a special
                    ds
                                                                 instance of a Hamilton–Jacobi equation. We associate
For any given solution u of (21) and any characteristic
                                                                 with (24) the ODE system
curve (s, x(s)) we have (d/ds)u(s, x(s)) = 0. Thus, in                                                     ⎫
                                                                               dx i     ∂                  ⎪
principle, knowing the solutions to (22) should allow us                            =      H(x(t), p(t)), ⎪⎪
                                                                                                           ⎬
to determine the solutions to (21). However, this argu-                         dt     ∂pi
                                                                                                                     (25)
                                                                               dpi        ∂                ⎪
                                                                                                           ⎪
ment seems worryingly circular, since u itself appears                                                     ⎪
                                                                                                           ⎭
                                                                                    =−       H(x(t), p(t)),
in (22).                                                                        dt      ∂x i
  To see how this difficulty can be circumvented, con-             where i runs from 1 to d. The equations (25) are
sider the IVP for (21): that is, look for solutions that         known as a Hamiltonian system of ODEs. The rela-
satisfy u(0, x) = u0 (x). Consider an associated char-           tionship between this system and the corresponding
acteristic curve x(s) such that, initially, x(0) = x0 .          Hamilton–Jacobi equation is a little more involved than
Then, since u is constant along the curve, we must have          in the cases discussed above. Briefly, we can construct
u(s, x(s)) = u0 (x0 ). Hence, going back to (22), we infer       a solution u to (24) based only on the knowledge
that dx/ds = u0 (x0 ) and thus x(s) = x0 +su0 (x0 ). We          of the solutions (x(t), p(t)) to (25), which are called
thus deduce that                                                 the bi characteristic curves of the nonlinear PDE. Once
                                                                 again, singularities can only propagate along bichar-
              u(s, x0 + su0 (x0 )) = u0 (x0 ),           (23)    acteristic curves (or hypersurfaces). As in the case of

464                                                                                              IV. Branches of Mathematics

the Burgers equation, singularities will occur for more                We say “in principle” because there is no guarantee that
or less any smooth data. Thus, a classical, continu-                   the series converges. There is, however, a very impor-
ously differentiable solution can only be constructed                   tant theorem, called the Cauchy–Kovalevskaya theo-
locally in time. Both Hamilton–Jacobi equations and                    rem, which asserts that if the function f is real ana-
Hamiltonian systems play a fundamental role in clas-                   lytic, as is certainly the case for our function f (x, u) =
sical mechanics as well as in the theory of the prop-                  u3 − u + 1 + sin x, then there will be some neighbor-
agation of singularities in linear PDEs. The deep con-                 hood J of x0 where the Taylor series converges to a
nection between Hamiltonian systems and first-order                     real-analytic solution u of the equation. It is then easy
Hamilton–Jacobi equations played an important role                     to show that the solution thus obtained is the unique
in the introduction of the Schrödinger equation into                   solution to (26) that satisfies the initial condition (27).
quantum mechanics.                                                     To summarize: if f is a well-behaved function, then the
                                                                       initial value problem for ODEs has a solution, at least
2.2    The Initial Value Problem for ODEs                              in some time interval, and that solution is unique.
                                                                         The same result does not always hold if we consider
Before we can continue with our general presentation                   a more general equation of the form
of PDEs we need first to discuss, for the sake of com-
                                                                          a(x, u(x))∂x u = f (x, u(x)),      u(x0 ) = u0 .       (28)
parison, the IVP for ODEs. Let us start with a first-order
ODE                                                                    Indeed, the recursive argument outlined above breaks
                                                                       down in the case of the scalar equation (x − x0 )∂x u =
                     ∂x u(x) = f (x, u(x))                      (26)
                                                                       f (x, u) for the simple reason that we cannot even
subject to the initial condition                                       determine ∂x u(x0 ) from the initial condition u(x0 ) =
                                                                       u0 . A similar problem occurs for the equation (u −
                           u(x0 ) = u0 .                        (27)
                                                                       u0 )∂x u = f (x, u). An obvious condition that allows us
Let us also assume for simplicity that (26) is a scalar                to extend our previous recursive argument to (28) is to
equation and that f is a well-behaved function of x and                insist that a(x0 , u0 ) ≠ 0. Otherwise, we say that the IVP
u, such as f (x, u) = u3 − u + 1 + sin x. From the initial             (28) is characteristic. If both a and f are also real ana-
data u0 we can determine ∂x u(x0 ) by substituting x0                  lytic, the Cauchy–Kovalevskaya theorem applies again
into (26). If we now differentiate the equation (26) with               and we obtain a unique, real-analytic solution of (28)
respect to x and apply the chain rule, we derive the                   in a small neighborhood of x0 . In the case of an N . imes N
equation                                                               system,

      ∂x2 u(x) = ∂x f (x, u(x)) + ∂u f (x, u(x))∂x u(x),                    A(x, u(x))∂x u = F (x, u(x)),        u(x0 ) = u0 ,
                                                                       A = A(x, u) is an N . imes N matrix, and the non character-
which for the example just defined works out to be
                                                                       istic condition becomes
cos x + 3 u2 (x)∂x u(x) − ∂x u(x). Hence,
                                                                                          det A(x0 , u0 ) ≠ 0.                   (29)
        ∂x2 u(x0 ) = ∂x f (x0 , u0 ) + ∂u f (x0 , u0 )∂x u0 ,
                                                                       It turns out, and this is extremely important in the
and since ∂x u(x0 ) has already been determined we                     development of the theory of ODEs, that, while the
find that ∂x2 u(x0 ) can also be explicitly calculated                  nondegeneracy condition (29) is essential to obtain a
from the initial data u0 . This calculation also involves              unique solution of the equation, the analyticity con-
the function f and its first partial derivatives. Taking                dition is not at all important: it can be replaced by a
higher derivatives of the equation (26) we can recur-                  simple local Lipschitz condition for A and F . It suffices
sively determine ∂x3 u(x0 ), as well as all other higher               to assume, for example, that their first partial deriva-
derivatives of u at x0 . Therefore, one can in principle               tives exist and that they are locally bounded. This is
determine u(x) with the help of the Taylor series                      always the case if the first derivatives of A and F are
             1                                                        continuous.
   u(x) =         ∂xk u(x0 )(x − x0 )k
           k⩾0
               k!
                                                                       Theorem (the fundamental theorem of ODEs). If the
           = u(x0 ) + ∂x u(x0 )(x − x0 )                               matrix A(x0 , u0 ) is invertible and if A and F are con-
                              1                                        tinuous and have locally bounded first derivatives, then
                           + ∂x2 (x0 )(x − x0 )2 + · · · .
                             2!                                        there is some time interval J ⊂ R that contains x0 , and a

IV.12.    Partial Differential Equations                                                                                        465

unique solution2 u defined on J that satisfies the initial                 analogue is to specify them on hypersurfaces H ⊂ Rd ,
conditions u(x0 ) = u0 .                                                 that is, (d − 1)-dimensional subsets (or, to be more pre-
  The proof of the theorem is based on the Picard iter-                  cise, submanifolds). For a general equation of order k,
ation method. The idea is to construct a sequence of                     that is, one that involves k derivatives, we need to spec-
approximate solutions u(n) (x) that converge to the                      ify the values of u and of its first k − 1 derivatives in
desired solution. Without loss of generality we can                      the direction normal to H . For example, in the case
assume A to be the identity matrix.3 One starts by                       of the second-order wave equation (3) and the initial
setting u(0) (x) = u0 and then defines, recursively,                      hyperplane t = 0 we need to specify initial data for u
                                                                         and ∂t u.
   ∂x u(n) (x) = F (x, u(n−1) (x)),         u(n−1) (x0 ) = u0 .
                                                                            If we wish to use initial data of this kind to start
Observe that at every stage all we need to solve is a very               obtaining a solution, it is important that the data
simple linear problem, which makes Picard iteration                      should not be degenerate. (We have already seen this
easy to implement numerically. As we shall see below,                    in the case of ODEs.) For this reason, we make the
variations of this method are also used for solving                      following general definition.
nonlinear PDEs.
                                                                         Definition. Suppose that we have a kth-order quasi-
Remark. In general, the local existence theorem is                       linear system of equations, and the initial data comes
sharp, in the sense that its conditions cannot be                        in the form of the first k − 1 normal derivatives that a
relaxed. We have seen that the invertibility condition                   solution u must satisfy on a hypersurface H . We say
for A(x0 , u0 ) is necessary. Also, it is not always pos-                that the system is non characteristic at a point x0 of H
sible to extend the interval J in which the solution                     if we can use the initial data to determine formally all
exists to the whole of the real line. As an example,                     the other higher partial derivatives of u at x0 , in terms
consider the nonlinear equation ∂x u = u2 with ini-                      of the data.
tial data u = u0 at x = 0, for which the solution
u = u0 /(1 − xu0 ) becomes infinite in finite time: in                        As a very rough picture to have in mind, it may be
the terminology of PDEs, it blows up.                                    helpful to imagine an infinitesimally small neighbor-
                                                                         hood of x0 . If the hypersurface H is smooth, then its
 In view of the fundamental theorem and the example
                                                                         intersection with this neighborhood will be a piece of
mentioned above, one can define the main goals of the
                                                                         a (d − 1)-dimensional affine subspace. The values of
mathematical theory of ODEs as follows.
                                                                         u and the first k − 1 normal derivatives on this inter-
  (i) Find criteria for global existence. In the case of                 section are given by the initial data, and the problem
      blow-up describe the limiting behavior.                            of determining the other partial derivatives is a prob-
 (ii) In the case of global existence describe the asymp-                lem in linear algebra (because everything is infinitesi-
      totic behavior of solutions and families of solu-                  mally small). To say that the system is non character is-
      tions.                                                             tic at x0 is to say that this linear algebra problem can
                                                                         be uniquely solved, which is the case provided that a
  Though it is impossible to develop a general theory                    certain matrix is invertible. This is the nondegeneracy
that achieves both goals (in practice one is forced to                   condition referred to earlier.
restrict oneself to special classes of equations moti-                      To illustrate the idea, let us look at first-order equa-
vated by applications), the general local existence and                  tions in two space dimensions. In this case H is a curve
uniqueness theorem mentioned above provides a pow-                       Γ , and since k − 1 = 0 we must specify the restriction
erful unifying theme. It would be very helpful if a                      of u to Γ ⊂ R2 but we do not have to worry about any
similar situation were to hold for general PDEs.                         derivatives. Thus, we are trying to solve the system

2.3   The Initial Value Problem for PDEs                                 a1 (x, u(x))∂1 u(x) + a2 (x, u(x))∂2 u(x)
In the one-dimensional situation one specifies initial                                            = f (x, u(x)),   u|Γ = u0 ,   (30)
conditions at a point. The natural higher-dimensional                    where a1 , a2 , and f are real-valued functions of x
                                                                         (which belongs to R2 ) and u. Assume that in a small
  2. Since we are not assuming that A and F are analytic, the solution   neighborhood of a point p the curve Γ is described
may not be analytic, but it does have continuous first derivatives.
  3. Since A is invertible we can multiply both sides of the equation
                                                                         parametrically as the set of points x = (x 1 (s), x 2 (s)).
by the inverse matrix A−1 .                                              We denote by n(s) = (n1 (s), n2 (s)) a unit normal to Γ .

466                                                                                           IV. Branches of Mathematics

   As in the case of ODEs, which we looked at earlier, we     It can be shown that H is non characteristic (with
would like to find conditions on Γ such that for a given       respect to equation (32)) at a point p (that is, we can
point in Γ we can determine all derivatives of u from         determine all derivatives of u at p in terms of the initial
the data u0 , the derivatives of u along Γ , and the equa-    data u0 , u1 ) if and only if
tion (30). Out of all possible curves Γ we distinguish                        
                                                                              d
in particular the characteristic ones we have already                                 aij (p)∂i ψ(p)∂j ψ(p) ≠ 0.         (33)
encountered above (see (20)):                                                i, j=1
                                    ⎫                           On the other hand, H is a characteristic hypersurface
          dx 1                      ⎪
               = a1 (x(s), u(x(s))),⎪
                                    ⎪
                                    ⎬                         for (32) if
           ds
                                        x(0) = p.
          dx 2                      ⎪
                                    ⎪                                          
                                                                               d
               = a2 (x(s), u(x(s))),⎪
                                    ⎭
                                                                                      aij (x)∂i ψ(x)∂j ψ(x) = 0          (34)
           ds
                                                                              i, j=1
One can prove the following fact:
                                                              for every x in H .
Along a characteristic curve, the equation (30) is degen-
                                                              Example. If the coefficients a of (32) satisfy the condi-
erate. That is, we cannot determine the first-order
                                                              tion
derivatives of u uniquely in terms of the data u0 .
                                                                   
                                                                   d

  In terms of the rough picture above, at each point                      aij (x)ξi ξj > 0,     ∀ξ ∈ Rd , ∀x ∈ Rd ,      (35)
                                                                  i, j=1
there is a direction such that if the hypersurface, which
in this case is a line, is along that direction, then the     then clearly, by (34), no surface in Rd can be charac-
resulting matrix is singular. If you follow this direction,   teristic. This is the case, in particular, for the Laplace
then you travel along a characteristic curve.                 equation Δu = f . Consider also the minimal surface
  Conversely, if the nondegeneracy condition                  equation (7) written in the form
                                                                                 
      a1 (p, u(p))n1 (p) + a2 (p, u(p))n2 (p) ≠ 0      (31)                          hij (∂u)∂i ∂j u = 0,           (36)
                                                                                 i, j=1,2
is satisfied at some point p = x(0) ∈ Γ , then we can                 11 (∂u)
                                                              with h         = 1 + (∂2 u)2 , h22 (∂u) = 1 + (∂1 u)2 ,
determine all higher derivatives of u at x0 uniquely in         12          21
                                                              h (∂u) = h (∂u) = −∂1 u∂2 u. It is easy to check
terms of the data u0 and its derivatives along Γ . If the
                                                              that the quadratic form associated with the symmetric
curve Γ is given by the equation ψ(x 1 , x 2 ) = 0, with
                                                              matrix hij (∂u) is positive definite for every ∂u. Indeed,
nonvanishing gradient Dψ(p) ≠ 0, then the condition
(31) takes the form                                           hij (∂u)ξi ξj
      a1 (p, u(p))∂1 ψ(p) + a2 (p, u(p))∂2 ψ(p) ≠ 0.           = (1 + |∂u|2 )−1/2 (|ξ|2 − (1 + |∂u|2 )−1 (ξ · ∂u)2 ) > 0.

  With a little more work one can extend the above            Thus, even though (36) is not linear, we see that all
discussion to higher-order equations in higher dimen-         surfaces in R2 are non characteristic.
sions, and even to systems of equations. Particularly
                                                              Example. Consider the wave equation u = f in R1+d .
important is the case of a second-order scalar equation
                                                              All hypersurfaces of the form ψ(t, x) = 0 for which
in Rd ,
             d                                                                                    
                                                                                                   d

                aij (x)∂i ∂j u = f (x, u(x)),      (32)                                (∂t ψ)2 =         (∂i ψ)2         (37)
             i, j=1                                                                                 i=1

                                                              are characteristic. This is the famous eikonal equation,
together with a hypersurface H in Rd defined by the
                                                              which plays a fundamental role in the study of wave
equation ψ(x) = 0, where ψ is a function with non-
                                                              propagation. Observe that it splits into two Hamilton–
vanishing gradient Dψ. Define the unit normal at a
                                                              Jacobi equations (see (24)):
point x0 ∈ H to be n = Dψ/|Dψ|, or, in compo-
nent form, ni = ∂i ψ/|∂ψ|. As initial conditions for                                          
                                                                                              d                1/2
                                                                                 ∂t ψ = ±           (∂i ψ)2          .   (38)
(32) we prescribe the values of u and its normal deriva-                                      i=1
tive n[u](x) = n1 (x)∂1 u(x) + n2 (x)∂2 u(x) + · · · +
                                                              The bi characteristic curves of the associated Hamiltoni-
nd (x)∂d u(x) on H :
                                                              ans are called bi characteristic curves of the wave equa-
      u(x) = u0 (x),   n[u](x) = u1 (x),     x ∈ H.           tion. As particular solutions of (37) we find ψ+ (t, x) =

IV.12.    Partial Differential Equations                                                                                                 467

(t − t0 ) + |x − x0 | and ψ− (t, x) = (t − t0 ) − |x − x0 |,           In particular, if there are no such characteristic hyper-
whose level surfaces ψ± = 0 correspond to forward and                  surfaces, then any solution of the equation must be
backward light cones with their vertex at p = (t0 , x0 ).              smooth (or real analytic) at every point of V other
These represent, physically, the union of all light rays               than p.
emanating from a point source at p. The light rays are                 Remarks. (i) The heuristic principle mentioned above
given by the equation (t − t0 )ω = (x − x0 ), for ω ∈ R3               is invalid, in general, at large scales. Indeed, as we have
with |ω| = 1, and are precisely the (t, x) components                  shown in the case of the Burgers equation, solutions
of the bi characteristic curves of the Hamilton–Jacobi                  to nonlinear evolution equations can develop new sin-
equations (38). More generally, the characteristics of                 gularities whatever the smoothness of the initial con-
the linear wave equation                                               ditions. Global versions of the principle can be formu-
                             
           a00 (t, x)∂t2 u −   aij (t, x)∂i ∂j u = 0,  (39)            lated for linear equations based on the bi characteristics
                          i, j                                          of the equation. See (iii) below.
         00 > 0 and aij satisfying (35), are given by the
with a                                                                 (ii) According to the principle, it follows that any solu-
Hamilton–Jacobi equations:                                             tion of the equation Δu = f , satisfying the bound-
                                                                       ary condition u|∂D = u0 with a boundary value u0 that
          −a00 (t, x)(∂t ψ)2 + aij (x)∂i ψ∂j ψ = 0
                                                                       merely has to be continuous, is automatically smooth
or, equivalently,                                                      every where in the interior of D provided that f itself is
                                                     1/2              smooth there. Moreover, the solution is real analytic if
          ∂t ψ = ± (a00 )−1         aij (x)∂i ψ∂j ψ         .   (40)   f is real analytic.
                              i, j
                                                                       (iii) More precise versions of this principle, which plays
The bi characteristics of the corresponding Hamiltonian
                                                                       a fundamental role in the general theory, can be given
systems are called bi characteristic curves of (39).
                                                                       for linear equations. In the case of the general wave
Remark. In the case of the first-order scalar equations                 equation (39), for example, one can show that singular-
(17) we have seen how knowledge of characteristics                     ities propagate along bi characteristics. These are the
can be used to find, implicitly, general solutions. We                  bi characteristic curves associated with the Hamilton–
have also seen that singularities propagate only along                 Jacobi equation (40).
characteristics. In the case of second-order equations
the characteristics are not sufficient to solve the equa-                2.4   The Cauchy–Kovalevskaya Theorem
tions, but they continue to provide important infor-
                                                                       In the case of ODEs we have seen that a non character is-
mation, such as how the singularities propagate. For
                                                                       tic IVP always admits solutions locally (that is, in some
example, in the case of the wave equation u = 0 with
                                                                       time interval about a given point). Is there a higher-
smooth initial data u0 , u1 every where except at a point
                                                                       dimensional analogue of this fact? The answer is yes,
p = (t0 , x0 ), the solution u has singularities present at
                                                                       provided that we restrict ourselves to the real-analytic
all points of the light cone −(t − t0 )2 + |x − x0 |2 = 0
                                                                       situation, which is covered by an appropriate exten-
with vertex at p. A more refined version of this fact
                                                                       sion of the Cauchy–Kovalevskaya theorem. More pre-
shows that the singularities propagate along bicharac-
                                                                       cisely, one can consider general quasilinear equations,
teristics. The general principle here is that singularities
                                                                       or systems, with real-analytic coefficients, real-analytic
propagate along characteristic hypersurfaces of a PDE.
                                                                       hypersurfaces H , and appropriate real-analytic initial
Since this is a very important principle, it pays to give
                                                                       data on H .
it a more precise formulation that extends to general
boundary conditions, such as the Dirichlet condition                   Theorem (Cauchy–Kovalevskaya (CK)). If all the real-
for (1).                                                               analyticity conditions made above are satisfied and if
                                                                       the initial hypersurface H is non characteristic at x0 ,4
Propagation of singularities. If the boundary condi-                   then in some neighborhood of x0 there is a unique
tions or the coefficients of a PDE are singular at some                  real-analytic solution u(x) that satisfies the system of
point p, and otherwise smooth (or real analytic) every-                equations and the corresponding initial conditions.
where in some small neighborhood V of p, then a solu-
tion of the equation cannot be singular in V except                      4. For second-order equations of the kind of (32), this is precisely
along a characteristic hypersurface passing through p.                 condition (33).

468                                                                                       IV. Branches of Mathematics

   In the special case of linear equations, an important    a spacelike hypersurface. This means a hypersurface
companion theorem, due to Holmgren, asserts that the        ψ(t, x) = 0 such that at every point p = (t0 , x0 ) that
analytic solution given by the CK theorem is unique in      belongs to it the normal vector at p lies inside the
the class of all smooth solutions and smooth nonchar-       light cone (either in the future direction or in the past
acteristic hypersurfaces H . The CK theorem shows           direction). To say this analytically,
that, given the non characteristic condition and the ana-                                   
                                                                                           d                 1/2
lyticity assumptions, the following straightforward way                   |∂t ψ(p)| >           |∂i ψ(p)|2         .      (41)
of finding solutions works: look for a formal expansion                                    i=1
                     
of the kind u(x) = α Cα (x − x0 )α by determining the       This condition is clearly satisfied by a hyperplane of the
constants Cα recursively from simple algebraic formu-       form t = t0 , but any other hypersurface close to this
las arising from the equation and initial conditions on     is also spacelike. By contrast, the IVP is ill-posed for a
H . More precisely, the theorem ensures that the naive      timelike hypersurface, i.e., a hypersurface for which
expansion obtained in this way converges in a small                                        
                                                                                           d                 1/2
neighborhood of x0 ∈ H .                                                  |∂t ψ(p)| <           |∂i ψ(p)|2         .
                                                                                          i=1
   It turns out, however, that the analyticity conditions
required by the CK theorem are much too restrictive,        That is, we cannot, for general non-real-analytic initial
and therefore the apparent generality of the result         conditions, find a solution of the IVP. An example of a
is misleading. A first limitation becomes immediately        timelike hypersurface is given by the hyperplane x 1 =
apparent when we consider the wave equation u = 0.         0. Let us explain the term “ill-posed” more precisely.
A fundamental feature of this equation is finite speed of    Definition. A given problem for a PDE is said to be
propagation, which means, roughly speaking, that if at      well-posed if both existence and uniqueness of solu-
some time t a solution u is zero outside some bounded       tions can be established for arbitrary data that belongs
set, then the same must be true at all later times.         to a specified large space of functions, which includes
However, analytic functions cannot have this property       the class of smooth functions.5 Moreover, the solutions
unless they are identically zero (see some fundamen-        must depend continuously on the data. A problem that
tal mathematical definitions [I.3 §5.6](/part-01/fundamental-definitions)). Therefore,         is not well-posed is called ill-posed.
it is impossible to discuss the wave equation properly
                                                              The continuous dependence on the data is very im-
within the class of real-analytic solutions. A related
                                                            portant. Indeed, the IVP would be of little use if very
problem, first pointed out by hadamard [VI.65](/part-06/jacques-hadamard-18651963), con-
                                                            small changes in the initial conditions resulted in very
cerns the impossibility of solving the Cauchy problem,
                                                            large changes in the corresponding solutions.
in many important cases, for arbitrary smooth nonana-
lytic data. Consider, for example, the Laplace equation
                                                            2.5   Standard Classification
Δu = 0 in Rd . As we have established above, any hyper-
surface H is non characteristic, yet the Cauchy problem      The different behavior of the Laplace and wave equa-
u|H = u0 , n[u]|H = u1 , for arbitrary smooth initial       tions mentioned above illustrates the fundamental dif-
conditions u0 , u1 , may admit no local solutions in a      ference between ODEs and PDEs and the illusory gener-
neighborhood of any point of H . Indeed, take H to          ality of the CK theorem. Given that these two equations
be the hyperplane x1 = 0 and assume that the Cauchy         are so important in geometric and physical applica-
problem can be solved for given nonanalytic smooth          tions, it is of great interest to find the broadest classes
data in a domain that includes a closed ball B centered     of equations with which they share their main proper-
at the origin. The corresponding solution can also be       ties. The equations modeled by the Laplace equation
interpreted as the solution to the Dirichlet problem in     are called elliptic, while those modeled by the wave
B, with the values of u prescribed on the boundary ∂B.      equation are called hyperbolic. The other two impor-
But this, according to our heuristic principle (which can   tant models are the heat equation (see (2)) and the
easily be made rigorous in this case), must be real ana-    Schrödinger equation (see (4)). The general classes of
lytic every where in the interior of B, contradicting our    equations that they resemble are called parabolic and
assumptions about the initial data.                         dispersive, respectively.
   On the other hand, the Cauchy problem for the wave
equation u = 0 in Rd+1 has a unique solution for             5. Here we are necessarily vague. A precise space can be specified
any smooth initial data u0 , u1 that is prescribed on       in each given case.

IV.12.    Partial Differential Equations                                                                                                    469

  Elliptic equations are the most robust and the eas-                      thus think of the Cauchy problem as a natural way of
iest to characterize: they are the ones that admit no                      parametrizing the set of all solutions to the equations.
characteristic hypersurfaces.                                                The definition of hyperbolicity depends, however,
                                                                           on the particular hypersurface we are considering as
Definition. A linear, or quasilinear, N . imes N system with
                                                                           the initial hypersurface. Thus, in the case of the wave
no characteristic hypersurfaces is called elliptic.
                                                                           equation u = 0, the standard IVP
   Equations of type (32) whose coefficients aij satisfy
                                                                                      u(0, x) = u0 (x),            ∂t u(0, x) = u1
condition (35) are clearly elliptic. The minimal surface
equation (7) is also elliptic. It is also easy to verify                   is well-posed. This means that for any smooth initial
that the Cauchy–Riemann system (12) is elliptic. As was                    data u0 , u1 we can find a unique solution of the equa-
pointed out by Hadamard, the IVP is not well-posed for                     tion, which depends continuously on u0 , u1 . As we have
elliptic equations. The natural way of parametrizing the                   already mentioned, the IVP for u = 0 remains well-
set of solutions to an elliptic PDE is to prescribe condi-                 posed if we replace the initial hypersurface t = 0 by any
tions for u, and some of its derivatives (the number of                    spacelike hypersurface ψ(t, x) = 0 (see (41)). However,
derivatives will be roughly half the order of the equa-                    it fails to be well-posed for timelike hypersurfaces,
tion) at the boundary of a domain D ⊂ Rn . These are                       for which there may be no solution with prescribed,
called boundary-value problems (BVPs). A typical exam-                     nonanalytic, Cauchy data.
ple is the Dirichlet boundary condition u|∂D = u0 for                         It is more difficult to give algebraic conditions for
the Laplace equation Δu = 0 in a domain D ⊂ Rn .                           hyperbolicity. Roughly speaking, hyperbolic equations
One can show that, if the domain D satisfies certain                        are at the opposite end of the spectrum from ellip-
mild regularity assumptions and the boundary value                         tic equations: whereas elliptic equations have no char-
u0 is continuous, then this problem admits a unique                        acteristic hypersurfaces, hyperbolic equations have as
solution that depends continuously on u0 . We say that                     many as possible passing through any given point. One
the Dirichlet problem for the Laplace equation is well-                    of the most useful classes of hyperbolic equations,
posed. Another well-posed problem for the Laplace                          which includes most of the important known examples,
equation is given by the Neumann boundary condition                        consists of equations of the form
n[u]|∂D = f , where n is the exterior unit normal to the
                                                                                                
                                                                                                d
boundary. This problem is well-posed for all continu-                      A0 (t, x, u)∂t u +         Ai (t, x, u)∂i u = F (t, x, u),
ous functions f defined on ∂D with zero mean aver-                                               i=1
age. A typical problem of general theory is to classify                                                                     u|H = u0 ,     (42)
all well-posed BVPs for a given elliptic system.                           where all the coefficients A0 , A1 , . . . , Ad are symmetric
   As a consequence of our propagation-of-singularities                    N . imes N matrices and H is given by ψ(t, x) = 0. Such a
principle, we deduce, heuristically at least, the follow-                  system is well-posed provided that the matrix
ing general fact:
                                                                                                            
                                                                                                            d

Classical solutions of elliptic equations with smooth                         A0 (t, x, u)∂t ψ(t, x) +            Ai (t, x, u)∂i ψ(t, x)   (43)
                                                                                                            i=1
(or real-analytic) coefficients in a regular domain D are
smooth (or real analytic) in the interior of D, whatever                   is positive definite. A system (42) that satisfies these
the degree of smoothness of the boundary conditions.6                      conditions is called symmetric hyperbolic. In the par-
                                                                           ticular case when ψ(t, x) = t, the condition (43)
  Hyperbolic equations are, essentially, those for which                   becomes
the IVP is well-posed. In that sense, they provide the                                   (A0 ξ, ξ) ⩾ c|ξ|2 ∀ξ ∈ RN .
natural class of equations for which one can prove
                                                                           The following is a fundamental result in the theory
a result similar to the local existence theorem for
                                                                           of general hyperbolic equations. It is called the local
ODEs. More precisely, for each sufficiently regular set
                                                                           existence and uniqueness of solutions for symmetric
of initial conditions there is a unique solution. We can
                                                                           hyperbolic systems.

  6. Provided that the boundary condition under consideration is           Theorem (fundamental theorem for hyperbolic equa-
well-posed. Moreover, this heuristic principle holds, in general, only     tions). The IVP (42) is locally well-posed for symmet-
for classical solutions of a nonlinear equation. There are in fact exam-
ples of well-posed BVPs, for certain nonlinear elliptic systems, with no
                                                                           ric hyperbolic systems with sufficiently smooth A, F ,
classical solutions.                                                       and H and sufficiently smooth initial conditions u0 . In

470                                                                                                     IV. Branches of Mathematics

other words, if the appropriate smoothness conditions                     hyperbolic equations (see the online version for general
are satisfied, then for any point p ∈ H there is a small                   definitions).
neighborhood D of p 7 inside which there is a unique,                        Hyperbolic PDEs play a fundamental role in physics,
continuously differentiable solution u.                                    as they are intimately tied to the relativistic nature
                                                                          of the modern theory of fields. Equations (3), (5), (13)
Remarks. (i) The local character of the theorem is
                                                                          are the simplest examples of linear field theories, and
essential, just as it was for the general propagation-
                                                                          they are manifestly hyperbolic. Other basic examples
of-singularities principle discussed earlier, since the
                                                                          appear in gauge field theories such as maxwell’s equa-
result cannot be globalized in the particular case of
                                                                          tions [IV.13 §1.1](/part-04/general-relativity-and-the-einstein-equations) ∂ α Fαβ = 0 or the Yang–Mills equa-
the Burgers equation (21), which fits trivially into the
                                                                          tions D α Fαβ = 0. Finally, the Einstein equations (14) are
framework of general nonlinear symmetric hyperbolic
                                                                          also hyperbolic.8 Other important examples of hyper-
systems. A precise version of the theorem above gives
                                                                          bolic equations arise in the physics of elasticity and
a lower bound on how large D can be.
                                                                          inviscid fluids. As examples of the latter, the Burgers
(ii) The proof of the theorem is based on a variation of                  equation (21) and the compressible Euler equation are
the Picard iteration method that we encountered earlier                   hyperbolic.
for ODEs. One starts by taking u(0) = u0 in a neighbor-                      Elliptic equations, on the other hand, appear natu-
hood of H . Then one defines functions u(n) recursively                    rally in describing time-independent, or more generally
as follows:                                                               steady-state, solutions of hyperbolic equations. Elliptic
                              
                              d                                           equations can also be derived, directly, by well-defined
A0 (t, x, u(n−1) )∂t u(n) +         Ai (t, x, u(n−1) )∂i u(n)             variational principles [III.94](/part-03/variational-methods).
                              i=1                                            Finally, a few words about parabolic equations and
                        = F (t, x, u(n−1) ),     u(n) |H = u0 .           Schrödinger-type equations, which are intermediate
Notice that at each stage of the iteration we have to                     between the elliptic and hyperbolic ones. Large classes
solve a linear equation. Linearization is an extremely                    of useful equations of these types are given by
important tool in studying nonlinear PDEs. We can al-                                              ∂t u − Lu = f                        (44)
most never understand their behavior without lineariz-                    and
ing them around important special solutions. Thus,
                                                                                                  i∂t u + Lu = f ,                      (45)
almost invariably, hard problems in nonlinear PDEs
reduce to understanding specific problems in linear                        respectively, where L is an elliptic second-order oper-
PDEs.                                                                     ator. One looks for solutions u = u(t, x), defined for
                                                                          t ⩾ t0 , with the prescribed initial condition
(iii) To implement the Picard iteration method we need
to get precise estimates concerning u(n) in terms of                                             u(t0 , x) = u0 (x)                     (46)
u(n−1) . This step requires energy type a priori esti-                    on the hypersurface t = t0 . Strictly speaking, this
mates, which we will discuss in section 3.3.                              hypersurface is characteristic, since the order of the
   Another important property of hyperbolic equations                     equation is 2 and we cannot determine ∂t2 u at t = t0
(which is not shared by elliptic, parabolic, or disper-                   directly from the equation. Yet this is not a serious
sive equations) is finite speed of propagation, which                      problem; we can still determine ∂t2 u formally by differ-
was mentioned earlier in the case of the wave equa-                       entiating the equation with respect to ∂t . Thus, the IVP
tion (3). Consider this simple case again. The IVP can                    (44) (or (45)) with initial condition (46) is well-posed, but
be solved explicitly by the so-called Kirchhoff formula.                   not quite in the same sense as for hyperbolic equations.
The formula allows us to conclude that if the initial                     For example, the heat equation −∂t u+Δu is well-posed
data at t = 0 is zero outside a ball Ba (x0 ) of radius                   for positive t but ill-posed for negative t. The heat equa-
                                                                          tion may also not have unique solutions for the IVP
a > 0 centered at x0 ∈ R3 , then at time t > 0 the
                                                                          unless we make assumptions about how fast the initial
solution u is zero outside the ball Ba+ct (x0 ). In gen-
                                                                          data is allowed to grow at infinity. One can also show
eral, finite speed of propagation can best be formulated
in terms of domains of dependence and influence of
                                                                            8. For gauge theories and Einstein equations the notion of hyper-
                                                                          bolicity depends on the choice of gauge or coordinates. In the case
                                                                1+d
  7. By “point” we mean that p is a spacetime point (t, x) ∈ R        .   of the Yang–Mills equations, for example, one obtains a well-defined
Similarly, D is a set of spacetime points.                                system of nonlinear wave equations only in the Lorentz gauge.

IV.12.   Partial Differential Equations                                                                                 471

that the characteristic hypersurfaces of the equation        ear equations, there are other issues of interest as well,
(44) are all of the form, and therefore parabolic equa-      including the following.
tions are quite similar to elliptic equations. For exam-
ple, one can show that if the coefficients aij and f are       2.6.1   Local Solvability
smooth (or real analytic), then the solution u must be
smooth (or real analytic in x) for t > t0 even if the ini-   This is the problem of determining the conditions on
tial data u0 is not smooth, which is consistent with our     a linear operator P and given data f under which the
propagation-of-singularities principle. The heat equa-       equation (9) is locally solvable. The Cauchy–Kovalev-
tion smooths out initial conditions. It is for this reason   skaya theorem gives a criterion for local solvability
that the heat equation is useful in many applications. In    when f and the coefficients of P are real analytic, but
physics, parabolic PDEs arise whenever diffusion or dis-      it is a remarkable phenomenon that when one relaxes
sipation phenomena are important, while in geometry          this assumption slightly, asking for f to be smooth
and calculus of variations, parabolic PDEs often arise       rather than real analytic, serious obstructions to local
as gradient flows of positive-definite functionals. Ricci      solvability appear. For instance, the Lewy operator
flow (16) can also be viewed as a parabolic PDE, after a
                                                                                         ∂u               ∂u
suitable change of coordinates.                                        P[u](t, z) =           (t, z) − iz    (t, z),
                                                                                         ∂ . ar{z}             ∂t
   Dispersive PDEs, of which the Schrödinger equation
                                                             defined on complex-valued functions u : R . imes C → C,
(4) is a fundamental example, are evolution equations
                                                             has the property that equation (9) is locally solvable
that behave analogously to hyperbolic PDEs in many
                                                             for real-analytic f but not for “most” smooth f . The
respects. For instance, the IVP tends to be locally
                                                             Lewy operator is intimately connected to the tangential
well-posed both forward and backward in time. How-
                                                             Cauchy–Riemann equations on the Heisenberg group in
ever, solutions to dispersive PDEs do not propagate
                                                             C2 . It was discovered in the study of the restriction of
along characteristic surfaces. Instead, they move at
                                                             the two-dimensional analogue of the Cauchy–Riemann
speeds that are determined by their spatial frequency;
                                                             operator P to a quadric in C2 . This example was the
in general, high-frequency waves tend to propagate at
                                                             starting point for the theory of local solvability, whose
much greater speeds than low-frequency waves, which
                                                             goal is to characterize linear equations that are locally
eventually leads to a dispersion of the solution into
                                                             solvable. The theory of Cauchy–Riemann manifolds—
increasingly large areas of space. In fact, the speed
of propagation of solutions is typically infinite. This       which has its origin in the study of restrictions of
behavior also differs from that of parabolic equations,       the Cauchy–Riemann equations (in higher dimensions)
which tend to dissipate the high-frequency components        to real hypersurfaces, each of which comes with an
of a solution (sending them to zero) rather than dis-        associated “tangential Cauchy–Riemann complex”—is
persing them. In physics, dispersive equations arise in      another extremely rich source of examples of inter-
quantum mechanics: they are the nonrelativistic limit        esting linear PDEs, which do not fit into the standard
c → . nfty of relativistic equations and they are also            classification.
approximations to model certain types of fluid behav-
ior. For instance, the korteweg–de vries equation            2.6.2   Unique Continuation
[III.49](/part-03/linear-and-nonlinear-waves-and-solitons),
                   ∂t u + ∂x3 u = 6 u∂x u,                    This concerns various ill-posed problems where solu-
                                                             tions may not always exist, but one still has unique-
is a dispersive PDE that models the behavior of small-
                                                             ness. A fundamental example is that of analytic con-
amplitude waves in a shallow canal.
                                                             tinuation: two holomorphic functions on a connected
                                                             domain D that agree on a nondiscrete set (such as a disk
2.6   Special Topics for Linear Equations
                                                             or an interval) must necessarily agree every where on D.
The greatest successes of the general theory have been       This fact can be viewed as a unique continuation result
in connection with linear equations, especially those        for the Cauchy–Riemann equations (12). Another exam-
with constant coefficients, for which Fourier analysis         ple in a similar spirit is Holmgren’s theorem, which
provides an extremely powerful tool. While the related       asserts that solutions to a linear PDE (9) that has real-
issues of classification, well-posedness, and propaga-        analytic coefficients and data are unique, even in the
tion of singularities have dominated the study of lin-       class of smooth functions. More generally, the study of

$472$

ill-posed problems (such as the wave equation with prescribed data on a timelike surface rather than a spacelike one) arises naturally in connection with control theory.

$2$ . $6$ . $3$

Spectral Theory

There is no way I can even begin to give an account of this theory, which is of fundamental importance not only to quantum mechanics and other physical theories, but also to geometry and analytic number theory [IV.2](/part-04/number-theory) .
Just as a matrix A can often be analyzed through its eigenvalues and eigenvectors [I.3](/part-01/fundamental-definitions) by the tools of linear algebra, one can learn much about a linear differential operator P and its associated PDE by understanding that operator’s spectrum [III.86](/part-03/the-spectrum) and eigenfunctions with the help of tools from functional analysis [IV.15](/part-04/operator-algebras). A typical problem in spectral theory is the eigenvalue problem in R d : $- \Delta u(x) + V(x)u(x) = \lambda u(x)$ .
A function u that is localized in space (for example, by being bounded in the $L^{2}$ (R d) - norm) and that satisfies this equation is mapped by the linear operator $- \Delta + V$ to the function $\lambda u:$ we say that u is an eigenfunction with eigenvalue $\lambda.$ Suppose that we have an eigenfunction u and let φ (t , x) = e - i $\lambda$ t u (x). It is easy to check that φ is a solution of the Schrödinger equation i∂ $tφ + \Deltaφ - Vφ = 0$ . (47) Moreover, it has a very special form. Such solutions are called bound states of the physical system described by (47).
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
Important global features of special equations are too subtle to fit into a general scheme. Rather, each important PDE requires special treatment. This is particularly true for nonlinear equations: the long-term behavior of solutions is very sensitive to the special features of the equation at hand. Moreover, general points of view may obscure, through unnecessary technical complications, the main properties of the important special cases. A useful general framework is one that provides a simple and elegant

IV.12.   Partial Differential Equations                                                                                                 473

treatment of a particular phenomenon, as is the case for                3.2   Explicit Representations and Fundamental
symmetric hyperbolic systems and the phenomenon                               Solutions
of local well-posedness and finite speed of propaga-
                                                                        Our basic equations (2)–(5) can be solved explicitly. For
tion. However, it turns out that symmetric hyperbolic
                                                                        example, the solution to the IVP for the heat equation
systems are simply too general for the study of more
                                                                        in R1+d
                                                                            + , that is, the problem of finding a function u that
refined questions about the important examples of
                                                                        satisfies
hyperbolic equations.
                                                                                     −∂t u + Δu = 0,         u(0, x) = u0 (x),
                      3   General Ideas                                 for t ⩾ 0, is given by
As one turns away from the general theory, one may                                  u(t, x) =          Ed (t, x − y)u0 (y) dy
be inclined to accept the pragmatic point of view                                                 Rd

described earlier, according to which PDEs is not a                     for a certain function Ed , which is called the fundamen-
real subject but is rather a collection of subjects such                tal solution of the heat operator −∂t + Δ. This func-
as hydrodynamics, general relativity, several complex                   tion can be defined explicitly: when t ⩽ 0 it is 0,
variables, elasticity, etc., each organized around a spe-               and when t > 0 it is given by the formula Ed (t, x) =
                                                                                        2
cial equation. However, this rather widespread view-                    (4π t)−d/2 e−|x| /4 t . Observe that Ed satisfies the equa-
point has its own serious drawbacks. Even though spe-                   tion (−∂t + Δ)E = 0 in both regions t < 0 and t > 0,
cific equations have specific properties, the tools that                  but it has a singularity at t = 0, which prevents it from
are used to derive them are intimately related. In fact,                satisfying the equation in the whole of R1+d . In fact, we
there is an impressive body of knowledge relevant to all                can check that for any function10 φ ∈ C0. nfty (Rd+1 ), we
important equations, or at least large classes of them.                 have
Lack of space does not allow me to do anything more
                                                                                 Ed (t, x)(∂t φ(t, x) + Δφ(t, x)) dt dx = φ(0, 0).
than enumerate them below.9                                               Rd+1
                                                                                                                                       (48)
3.1   Well-Posedness                                                    In the language of distribution theory [III.18](/part-03/distributions), for-
                                                                        mula (48) means that Ed , as a distribution, satisfies
As is clear from the previous section, well-posed prob-
                                                                        the equation (−∂t + Δ)Ed = δ0 , where δ0 is the Dirac
lems are at the heart of the modern theory of PDEs.
                                                                        distribution in R1+d supported at the origin. That is,
Recall that these are problems that admit unique solu-
                                                                        δ0 (φ) = φ(0, 0), ∀φ ∈ C0. nfty (Rd+1 ). A similar notion of
tions for given smooth initial or boundary conditions,
                                                                        fundamental solution can be defined for the Poisson,
and that the corresponding solutions have to depend
                                                                        wave, Klein–Gordon, and Schrödinger equations.
continuously on the data. It is this condition that leads
                                                                          A powerful method of solving linear PDEs with con-
to the classification of PDEs into elliptic, hyperbolic,
                                                                        stant coefficients is based on the fourier trans-
parabolic, and dispersive equations. The first step in
                                                                        form [III.27](/part-03/the-fourier-transform). For example, consider the heat equation
the study of a nonlinear evolution equation is a proof of
                                                                        ∂t − Δu = 0 in one space dimension, with initial con-
a local-in-time existence and uniqueness theorem, simi-
                                                                        dition u(0, x) = u0 . Define û(t, ξ) to be the Fourier
lar to the one for ODEs. Ill-posedness, the counterpart of
                                                                        transform of u relative to the space variable:
well-posedness, is also important in many applications.
                                                                                                       +. nfty
The Cauchy problem for the wave equation (3), with                                     û(t, ξ) =           e−ixξ u(t, x) dx.
data on the timelike hypersurface z = 0, is a typical                                                  −. nfty

example. Ill-posed problems appear naturally in con-                    It is easy to see that û(t, ξ) satisfies the differential
trol theory, as we have mentioned, and also in inverse                  equation
scattering.
                                                                                 ∂t û(t, ξ) = −ξ 2 û(t, ξ),    û(0, ξ) = û0 (ξ).
                                                                        This can be solved by a simple integration, which
                                                                                                                       2
   9. I fail to mention in the few examples given above some of the     results in the formula û(t, ξ) = û0 (ξ)e−t|ξ| . Thus, with
important functional analytic tools connected to Hilbert space meth-
ods, compactness, the implicit function theorems, etc. I also fail to
mention the importance of probabilistic methods and the develop-
ment of topological methods for dealing with global properties of         10. That is, any function that is smooth and has compact support
elliptic PDEs.                                                          in R1+d .

474                                                                                                    IV. Branches of Mathematics

the help of the inverse Fourier transform, we derive a                 extract such information? A priori estimates are a very
formula for u(t, x):                                                   important technique for doing this.
                                 +. nfty
                                                2
                                                                          The best-known examples are energy estimates, the
        u(t, x) = (2π )−1             eixξ e−t|ξ| û0 (ξ) dξ.          maximum principle, and monotonicity arguments. The
                                −. nfty
                                                                       simplest example of the first type is the following iden-
Similar formulas can be derived for our other basic evo-
                                                                       tity (which is a very simple example of a so-called
lution equations. For example, in the case of the wave
                                                                       Bochner-type identity):
equation −∂t2 u + Δu = 0 in three dimensions, subject
to the initial data u(0, x) = u0 , ∂t u(0, x) = 0, we find                                |∂ 2 u(x)|2 dx =            |Δu(x)|2 dx.
that                                                                                Rd                          Rd
                                                                       The left-hand side is shorthand for
      u(t, x) = (2π )−3         eixξ cos(t|ξ|)û0 (ξ) dξ.       (49)                        
                           R3                                                                    |∂i ∂j u(x)|2 dx
                                                                                           Rd
After some work, one can reexpress formula (49) in the                                          1⩽i, j ⩽d

form                                                                   and the identity holds for all functions u that are
                           −1                                          twice continuously differentiable and tend to zero as
  u(t, x) = ∂t (4π t)                      u0 (y) da(y) ,       (50)
                                 |x−y|=t                               |x| → . nfty. This formula can be justified fairly simply by
where da is the area element of the sphere |x−y| = t of                integrating by parts. As a consequence of the Bochner
radius t centered at x. This is the well-known Kirchhoff                identity, we obtain the a priori estimate that if u is
formula. By contrast with (49), the integration here is                a smooth solution to the Poisson equation (6) with
with respect to the physical variables t and x only. It is             square-integrable data f , and if it tends to zero at infin-
instructive to compare these two formulas. Using the                   ity, then the square integral of its second derivatives is
Plancherel identity it is very easy to deduce from (49)                bounded:
the L2 bound                                                                        |∂ 2 u(x)|2 dx ⩽            |f (x)|2 dx < . nfty.      (51)
                                                                               Rd                          Rd
                            2
                    |u(t, x)|   dx ⩽ Cu0 2 L2 (R3 ) ,                 Thus we obtain the qualitative fact that, on average
               R3
                                                                       (in a mean-square sense), u has “two more degrees
while the possibility of obtaining such a bound from
                                                                       of regularity” than f .11 This is called an energy-type
(50) seems unlikely since the formula involves a deriva-
                                                                       estimate because, in physical situations, the square of
tive. On the other hand, (50) is perfect for giving us
                                                                       the L2 -norm can often be interpreted as some type of
information about the domain of influence. Indeed, we
                                                                       kinetic energy.
can see immediately from the formula that if u0 is zero
                                                                          The Bochner identity can be extended to more gen-
outside the ball Ba = {|x − x0 | ⩽ a}, then u(t, x) is
                                                                       eral Riemannian manifolds than Rd , although one then
zero outside the ball Ba+|t| for any time t. This fact
                                                                       picks up some additional lower-order terms involving
does not seem at all transparent in the Fourier-based
                                                                       the curvature of those manifolds. Such identities play
formula (49). The fact that different representations
                                                                       a major role in the theory of geometric PDEs on these
of solutions have different, even opposite, strengths
                                                                       manifolds.
and weaknesses has important consequences for con-
                                                                          Energy-type identities and estimates also exist for
structing approximate solutions, or parametrices, for
                                                                       parabolic, dispersive, and hyperbolic PDEs. For in-
more complicated equations, such as linear equations
                                                                       stance, they play a fundamental role in demonstrat-
with variable coefficients or nonlinear wave equations.
                                                                       ing the local existence, uniqueness, and finite speed
There are two possible types of constructions: those
                                                                       of propagation for hyperbolic PDEs with smooth initial
in physical space, which mimic the physical-space for-
                                                                       data. Energy estimates become particularly powerful
mula (50), and those in Fourier space, which mimic the
                                                                       when combined with inequalities such as the Sobolev
formula (49).
                                                                       embedding inequality, which allows one to convert

3.3    A Priori Estimates
                                                                         11. A crucial fact, about which one can read more in the online
Most equations cannot be solved explicitly. However,                   version, is that the L2 -norms in (51) can be replaced by Lp -norms,
if we are interested in qualitative information about a                1 < p < . nfty, or Hölder-type norms. The first case corresponds
                                                                       to Calderon–Zygmund estimates, while the second corresponds to
solution, then it is not necessary to derive it from an                Schauder estimates. Both are extremely important in the study of
exact formula. But how else, one might wonder, can we                  regularity properties for solutions to second-order elliptic PDEs.

IV.12.   Partial Differential Equations                                                                                    475

the “L2 ” information provided by these estimates into              3.4   Bootstrap and Continuity Arguments
pointwise (or “L. nfty ”) type information (see function
spaces [III.29 §§2.4, 3]).                                          The bootstrap argument is a method, or rather a pow-
   While energy identities and L2 estimates (which, as              erful general philosophy, to derive a priori estimates
in the above example, come from integration by parts)               for nonlinear equations. According to this philosophy
apply to all, or at least major classes of, PDEs, the               we start by making educated assumptions about the
maximum principle can be applied only to elliptic and               solutions we are trying to describe. These assumptions
parabolic PDEs. The following theorem is the simplest               allow us to think of the original nonlinear problem as
manifestation of it. Note that the theorem provides us              a linear one whose coefficients satisfy properties con-
with important quantitative information about solu-                 sistent with the assumptions. We may then use linear
tions to the Laplace equation even in the absence of                methods, based on other a priori estimates that we
any explicit representation for them.                               already know, to try to show that the solutions to this
                                                                    linear problem behave as well as we have postulated—
Theorem (maximum principle). Assume that u is a                     in fact, even better. One can characterize this powerful
solution to the Laplace equation (1) on a bounded con-              method, which allows us to use linear theory without
nected domain D ∈ Rd with a smooth boundary ∂D.                     actually having to linearize the equation, as a concep-
Assume also that u is continuous on the closure of D                tual linearization. It can also be regarded as a continu-
and has continuous first and second partial derivatives              ity argument relative to some parameter, which might
in the interior of D. Then u must achieve its maximum               be the natural time parameter of an evolution problem,
and minimum values on the boundary. Moreover, if the                but it could also be an artificial parameter which we
maximum or minimum is also achieved at an interior                  have the freedom to introduce ourselves. This latter
point of D, then u must be constant in D.                           situation is typical of applications to nonlinear elliptic
   The method is very robust and can easily be extended             equations. In the online version of this article we pro-
to a large class of second-order elliptic equations. It can         vide a few examples to illustrate the method in both
also be extended to parabolic equations and systems,                cases.
and plays a crucial role in, for example, the study of
Ricci flow.                                                          3.5   The Method of Generalized Solutions
   Let us briefly mention some other important classes
                                                                    Since a PDE involves differentiation, it might seem obvi-
of a priori estimates. The Sobolev inequalities, which
                                                                    ous that in any discussion of PDEs we should restrict
are of prime importance in elliptic equations, have
                                                                    our attention to differentiable functions. However, it is
several counterparts in linear and nonlinear hyper-
                                                                    possible to generalize the notion of differentiation so
bolic and dispersive equations, including the Strichartz
                                                                    that it makes sense for a wider class of functions, and
estimates and bilinear estimates. In connection with
                                                                    even for function-like objects, such as distributions,
ill-posed problems and unique continuation, Carle-
                                                                    that are not functions at all. This allows us to make
man estimates play a fundamental role. Finally, sev-
                                                                    sense of a PDE in a broader context, and admits the
eral a priori estimates arising from monotonicity for-
                                                                    possibility of generalized solutions.
mulas12 —such as virial identities, Pohozaev identities,
or Morawetz inequalities—can be used to establish the                 The best way to introduce generalized solutions in
breakdown of regularity or the blow-up of solutions                 PDEs and explain why they are important is through
to some nonlinear equations, and to guarantee global                the Dirichlet principle. This originates in the obser-
existence and decay of solutions to others.                         vation that, out of all functions that are defined on
   To summarize, it is not much of an exaggeration                  a bounded domain D ⊂ Rd , that satisfy prescribed
to say that a priori estimates play a fundamental role              Dirichlet boundary condition u|∂D = f , and that live in
in more or less every aspect of the modern theory of                an appropriate functional space X, the functions u that
PDEs.                                                               minimize the Dirichlet integral (or Dirichlet functional)

                                                                                                    1 
                                                                                                        d
                                                                                        1
                                                                             u2 Dr =       |∇u|2 =         |∂i u|2      (52)
                                                                                        2 D         2     D
  12. Perhaps the most familiar example of a monotonicity phe-                                        i=1
nomenon is the second law of thermodynamics from physics, which
asserts that, for many physical systems, the total entropy of the
                                                                    are the harmonic functions (that is, solutions of the
system is an increasing function of time.                           equation Δu = 0). It was riemann [VI.49] who first had

476                                                                                                     IV. Branches of Mathematics

the idea of trying to use this fact to solve the Dirichlet             nature of these singularities and to prove realistic par-
problem: in order to find a solution u to the problem                   tial regularity results. For instance, it is sometimes pos-
                    Δu = 0,      u|∂D = u0 ,                   (53)    sible to prove that the generalized solution is smooth
                                                                       every where apart from in a small “exceptional set.”
one should find (by some means other than solving
                                                                          Though generalized solutions are at their most effec-
the Dirichlet problem) a function u that minimizes the
                                                                       tive for elliptic problems, their range of applicability
Dirichlet integral while equaling u0 on ∂D. To do this,
                                                                       encompasses all PDEs. For example, we have already
one must specify the set by functions, or rather the
                                                                       seen that the fundamental solutions to the basic lin-
function space, over which the minimization is taking
                                                                       ear equations have to be interpreted as distributions,
place. The history of how this choice was made is a fas-
                                                                       which are examples of generalized solutions.
cinating one. A natural choice is X = C 1 (. ar{D}), the space
                                                                          The notion of generalized solutions has also proved
of continuously differentiable functions on . ar{D}, where
                                                                       successful for nonlinear evolution problems, such as
the norm of a function v is
                                                                       systems of conservation laws in one space dimension.
           vC 1 (. ar{D}) = sup(|v(x)| + |∂v(x)|).                        An excellent example is provided by the Burgers equa-
                          x∈D
                                                                       tion (21). As we have seen, solutions to ∂t u + u∂x u =
In particular, the Dirichlet norm vDr is finite when
                                                                       0 develop singularities in finite time no matter how
v belongs to this space. In fact, Riemann chose X =
                                                                       smooth the initial conditions are. It is natural to ask
C 2 (. ar{D}) (a similar space but designed for twice contin-
                                                                       whether solutions continue to make sense, as general-
uously differentiable functions). This bold but flawed
                                                                       ized solutions, even beyond the time when these singu-
attempt was followed by a penetrating criticism by
                                                                       larities form. A natural notion of generalized solution
weierstrass [VI.44](/part-06/karl-weierstrass-18151897), who showed that the functional
                                                                       is a function u such that
does not have to achieve its minimum in either C 2 (. ar{D})
or C 1 (. ar{D}). However, Riemann’s basic idea was revived,                                           (∂t u + u∂x u)φ = 0
                                                                                           R1+1
and it eventually triumphed after a long and inspir-
                                                                       for every smooth function φ that is zero outside a
ing process that involved defining appropriate function
                                                                       bounded set, since one can make sense of the integral
spaces, introducing the notion of generalized solutions,
                                                                       even when u is not a differentiable function. Integrat-
and developing a regularity theory for them. (The pre-
                                                                       ing this by parts (the first term with respect to t and
cise formulation of the Dirichlet principle also requires
                                                                       the second with respect to x) one obtains the following
the definition of sobolev spaces [III.29 §2.4](/part-03/function-spaces).)
                                                                       formulation:
   Let us briefly summarize the method, which has since
                                                                                           1
been vastly extended so that it can be applied to a large                        u∂t φ +              u2 ∂x φ = 0   ∀φ ∈ C0. nfty (R1+1 ).
                                                                          R1+1             2   R1+1
class of linear13 and nonlinear elliptic and parabolic
                                                                       It can be shown that, under additional conditions called
equations. It is based on two steps. In the first step one
                                                                       entropy conditions, the IVP for the Burgers equation
applies a minimization procedure. Although, as Weier-
                                                                       admits a unique generalized solution that is global:
strass discovered, the natural function spaces may not
                                                                       that is, valid for every t ∈ R. Today we have a satis-
contain functions that achieve the minimum, one can
                                                                       factory theory of global solutions to a large class of
use such a procedure to find a generalized solution
                                                                       hyperbolic systems of one-dimensional “conservation
instead. This may not seem very interesting, since we
                                                                       laws.” These systems, for which the above-mentioned
were looking for a function that solves the Dirichlet
                                                                       theory applies, are called strictly hyperbolic.
problem (or one of the other problems to which the
                                                                          For more complicated nonlinear evolution equations,
method can be applied). But this is where the second
                                                                       the question of what constitutes a good concept of
step comes in: it is sometimes possible to show that the
                                                                       a generalized solution, though fundamental, is far
generalized solution must in fact be a classical solu-
                                                                       murkier. For higher-dimensional evolution equations
tion (that is, an appropriately smooth function) after
                                                                       the first concept of a weak solution was introduced by
all. This is the “regularity theory” mentioned earlier.
                                                                       Leray. Let us call a generalized solution weak if one can-
In some situations, however, the generalized solution
                                                                       not prove any type of uniqueness for it. This unsatisfac-
may turn out to have singularities and therefore not
                                                                       tory situation may be temporary, i.e., the result of our
be regular. Then the challenge is to understand the
                                                                       technical inabilities, or unavoidable, in the sense that
                                                                       the concept itself is flawed. Leray was able to produce,
 13. A notable example for applications in geometry is Hodge theory.   by a compactness method, a weak solution of the IVP

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

478                                                                                                     IV. Branches of Mathematics

results in many symmetry properties and physically                          metric. We associate with L[φ] the so-called action
because many physical laws are themselves invari-                           integral:
ant under rigid motions. The d’Alembertian is, simi-                                          S[φ] =             L[φ].
larly, the simplest differential operator that is invariant                                                R3+1

under the natural symmetries, or Poincaré transforma-                       Notice that both L[φ] and S[φ] are invariant under
tions, of Minkowski space.                                                  translations and Lorentz transformations. In other
   Now let us turn to the equations. From the point of                      words, if T : R1+3 → R1+3 is a function that does not
view of physics, the heat equation is basic because it is                   change the metric and we define a new function by
the simplest paradigm for diffusive phenomena, while                         ψ(t, x) = φ(T (t, x)), then L[φ] = L[ψ] and S[φ] =
the Schrödinger equation can be viewed as the Newto-                        S[ψ].
nian limit of the Klein–Gordon equation. The geometric                         We shall consider a function φ that minimizes the
framework of the former is Galilean space, which itself                     action integral. From this we wish to deduce that the
is simply the Newtonian limit of Minkowski space.16                         derivative of S at φ, in some appropriate sense, is zero,
   From a mathematical point of view, the heat, Schrö-                      and hence to deduce other properties about φ. But
dinger, and wave equations are basic because the corre-                     φ is a function that lives in an infinite-dimensional
sponding differential operators ∂t − Δ, (1/i)∂t − Δ, and                     space, so we cannot talk about derivatives in a com-
∂t2 − Δ are the simplest evolution operators that can be                    pletely straightforward way. To deal with this problem,
built out of Δ. The wave operator, as just discussed,                       we define a compact variation of φ to be a smooth one-
is basic in a deeper way because of the association                         parameter family of functions φ(s) : R1+3 → R, defined
between  = −∂t2 + Δ and the geometry of Minkowski                          for each s in some interval (−, ), such that φ(0) (x) =
space R1+n . As for Laplace’s equation, one can view                        φ(x) for every x ∈ R3 and φ(s) (x) = φ(x) for
solutions to Δφ = 0 as special time-independent solu-                       every (s, x) outside some bounded subset of R1+3 . This
tions to φ = 0. Appropriate invariant and local def-                       allows us to differentiate with respect to s.
initions of square roots of Δ and , or  − k2 , corre-                        Given such a variation, we denote the derivative
sponding to “spinorial representations” of the Lorentz                      dφ(s) /ds|s=0 by φ̇.
group, lead to the associated Dirac operators (see (13)).
In the same vein we can associate with every Rie-                           Definition. A field φ is said to be stationary with
mannian or Lorentzian manifold the operator Δg or                           respect to S if, for any compact variation φ(s) of φ,
g , respectively, or the corresponding Dirac operators.                    we have                       
                                                                                               d          
These equations inherit in a straightforward way the                                              S[φ(s) ]
                                                                                                              = 0.
                                                                                               ds          s=0
symmetries of the spaces on which they are defined.
                                                                            The variational principle. The variational principle,
4.1   Variational Equations                                                 or principle of least action, states that an acceptable
                                                                            solution of a given physical system must be stationary
There is a general and extremely effective method for
                                                                            with respect to the action integral associated with the
generating equations with prescribed symmetries that
                                                                            Lagrangian of the system.
plays a fundamental role in both physics and geometry.
One starts with a scalar quantity, called a Lagrangian,                        The variational principle enables us to associate with
such as                                                                     the given Lagrangian a system of PDEs, obtained from
                   3
                                                                            the fact that φ is stationary, called the Euler–Lagrange
           L[φ] =      mμν ∂μ φ∂ν φ − V (φ),       (55)
                                                                            equations. We illustrate this by showing that the non-
                        μ,ν=0
                                                                            linear wave equation in R1+3 , namely
with φ a real-valued function defined on R1+3 and V
some real function of φ such as, for example, V (φ) =                                            φ − V (φ) = 0,                 (56)
φ3 . Here ∂\mu denotes the partial derivatives with respect                   is the Euler–Lagrange equation associated with the
to the coordinates x μ , μ = 0, 1, 2, 3, and mμν = mμν ,                    Lagrangian (55). Given a compact variation φ(s) of φ,
as earlier, denotes the 4 . imes 4 diagonal matrix with diago-                   we set S(s) = S[φ(s) ]. Integration by parts gives
nal entries (−1, 1, 1, 1), associated with the Minkowski                                
                                                                                 d      
                                                                                    S(s)
                                                                                             =      [−mμν ∂μ φ̇∂ν φ − V (φ)φ̇]
                                                                                 ds       s=0   R3+1
  16. This is done by starting with the Minkowski metric m =
diag(−1/c 2 , 1, 1, 1), where c corresponds to the velocity of light, and                    =          φ̇[φ − V (φ)].
letting c → . nfty.                                                                                   R3+1

IV.12.    Partial Differential Equations                                                                                                   479

In view of the action principle and the arbitrariness of                     sponds a conservation law for the associated Euler–
φ̇ we infer that φ must satisfy equation (56). Thus (56)                     Lagrange PDE.
is indeed the Euler–Lagrange equation associated with
the Lagrangian L[φ] = mμν ∂μ φ∂ν φ − V (φ).                                     Examples of such conservation laws are the famil-
   One can similarly show that the Maxwell equations                         iar laws of conservation of energy, conservation of
of ele ct ro magnetism—along with their beautiful exten-                        momentum, and conservation of angular momentum,
sions to the Yang–Mills equations, wave maps, and                            all of which have important physical meaning. (The one-
the Einstein equations of general relativity—are also                        parameter group of symmetries for energy, for exam-
variational. That is, they too can be derived from a                         ple, is just translations in time.) In the case of equation
Lagrangian.                                                                  (56), the law of conservation of energy takes the form

Remark. The variational principle asserts only that                                                       E(t) = E(0),                    (57)
the acceptable solutions of a given system are sta-
                                                                             where the quantity E(t), which equals
tionary: in general, we have no reason to expect that
the desired solutions minimize or maximize the action                                         1          1   
                                                                                                             3
                                                                                                      2
                                                                                              2 (∂t φ) + 2         (∂i φ)2 + V (φ) dx,    (58)
integral. Indeed, this fails to be the case for systems                             Σt
                                                                                                             i=1
that have a time dependence, such as the Maxwell equa-
                                                                             is called the total energy at time t. (We write Σt for
tions, Yang–Mills equations, wave maps, and Einstein
                                                                             the set of all points (t, x, y, z) as (x, y, z) ranges over
equations.
                                                                             R3 .) Observe that (57) provides an extremely important
  However, there is a large class of variational prob-                       a priori estimate for solutions to (56) in the case when
lems, corresponding to time-independent physical sys-                        V ⩾ 0. Indeed, if the energy of the initial data at t = 0
tems or geometric problems, for which the desired                            is finite (that is, if E(0) < . nfty), then
solutions do turn out to be extremal. The simplest
                                                                                                           1   
                                                                                                               3
example is that of geodesics in a Riemannian mani-                                              1       2
                                                                                                                     (∂i φ)2 dx ⩽ E(0).
                                                                                                2 (∂t φ) + 2
fold M, which are minimizers17 with respect to length.                                   Σt
                                                                                                               i=1
More precisely, the length functional takes a curve γ
                                                                             We say that the energy identity (57) is coercive, which
that passes through two fixed points of M and asso-
                                                                             means that it leads to an absolute bound on all solu-
ciates with it its length L(γ), which plays the role of
                                                                             tions with finite initial energy.
an action integral. In this case a geodesic is not just a
stationary point for the functional but a minimum. We
                                                                             4.2   The Issue of Criticality
also saw earlier that, according to the Dirichlet prin-
ciple, solutions to the Dirichlet problem (53) minimize                      For the most basic evolution equations of mathematical
the Dirichlet integral (52). Another example is provided                     physics, there are typically no better a priori estimates
by the minimal surface equation (7), the solutions of                        known than those provided by the energy. Taking into
which are minimizers of the area integral.                                   account the scaling properties of the corresponding
  The study of minimizers of various functionals, i.e.,                      equations as well, one is led to the very important
action integrals, is a venerable subject in mathematics                      classification of our basic equations, mentioned earlier,
that goes under the name of calculus of variations (see                      into subcritical, critical, and supercritical equations. To
variational methods [III.94](/part-03/variational-methods) for further discussion).
                                                                             see how this is done, consider again the nonlinear
  Associated with the variational principle is another
                                                                             scalar equation φ − V (φ) = 0, and take V (φ) to
fundamental principle. A conservation law for an evo-
                                                                             be (1/(p + 1))|φ|p+1 . Recall that the energy integral is
lution PDE is a law that says that some quantity, typ-
                                                                             given by (58). If we assign to the spacetime variables the
ically an integral quantity depending on the solution,
                                                                             dimension of length, L, then the spacetime derivatives
must remain constant over time, for every solution of
                                                                             have dimension L−1 and therefore  has the dimension
the equation.
                                                                             of L−2 . To be able to balance the left- and right-hand
Noether’s principle. To any continuous one-parameter                         sides of the equation φ = |φ|p−1 φ, we need to assign
group of symmetries of the Lagrangian there corre-                           a length scale to φ; we find this to be L2/(1−p) . Thus the
                                                                             energy integral,
  17. This is true, in general, only for sufficiently short geodesics, i.e.,
ones that pass through two points close to each other.                                    E(t) =          (2−1 |∂φ|2 + |φ|p+1 ) dx,
                                                                                                     Rd

480                                                                                          IV. Branches of Mathematics

has the dimension Lc , c = d−2+(4/(1−p)), with d cor-        4.3.2    The Newtonian Approximation and Other Limits
responding to the volume element dx = dx 1 dx 2 · · ·
                                                             We can derive a large class of new equations as limits of
dx d , which scales like Ld . We say that the equation is
                                                             the basic ones described above by taking one or more
subcritical if c < 0, critical if c = 0, and supercritical
                                                             characteristic speeds to infinity. The most important
if c > 0. Thus, for example, φ − φ5 = 0 is critical in
                                                             example is the Newtonian limit, which is obtained by
dimension d = 3. The same sort of dimensional analy-
                                                             letting the velocity of light go to infinity. As we have
sis can be done for all our other basic equations. An
                                                             already mentioned, the Schrödinger equation can be
evolutionary PDE is said to be regular if all smooth
                                                             derived in this way from the linear Klein–Gordon equa-
finite-energy initial conditions lead to global smooth
                                                             tion. Similarly, we can derive the Lagrangians for the
solutions. It is conjectured that all subcritical equa-
                                                             equations of nonrelativistic elasticity, fluid dynamics,
tions are regular, but one expects supercritical equa-
                                                             or magnetohydrodyn amics. It is an interesting fact that
tions to develop singularities. Critical equations are
                                                             the nonrelativistic equations tend to look more messy
important borderline cases. The heuristic reason for
                                                             than the relativistic ones. The simple geometric struc-
this is that the nonlinearity tends to produce singu-
                                                             ture of the original equations gets lost in the limit. The
larities while the coercive estimates prevent it. In sub-
                                                             remarkable simplicity of the relativistic equations is a
critical equations the coercive estimates are stronger,
                                                             powerful example of the importance of relativity as a
while for supercritical equations it is the nonlinearity
                                                             unifying principle.
that is stronger. However, there may be other, more
                                                                Once we are in the familiar world of Newtonian
subtle a priori estimates that are not accounted for by
                                                             physics we can perform other well-known limiting pro-
our crude heuristic argument. Thus, some supercritical
                                                             cedures. The famous incompressible euler equa-
equations, such as the Navier–Stokes equations, may
                                                             tions [III.23](/part-03/the-euler-and-navierstokes-equations) are obtained by taking the limit of the
still be regular.
                                                             general nonrelativistic fluid equations as the speed
4.3     Other Equations                                      of sound tends to infinity. Various other limits are
                                                             obtained relative to other characteristic speeds of the
Many other familiar equations can be derived from            system or in connection with specific boundary con-
the variational ones described above by the following        ditions, such as the boundary-layer approximation in
procedures.                                                  fluids. For example, in the limit as all characteristic
                                                             speeds tend to infinity, the equations of elasticity turn
4.3.1    Symmetry Reductions                                 into the familiar equations of a rigid body in classical
                                                             mechanics.
Sometimes a PDE is very hard to solve but becomes
much easier if one places additional symmetry con-
                                                             4.3.3    Phe no meno logical Assumptions
straints on solutions. For example, if the PDE is rota-
tion invariant and we look just for rotation-invariant       Even after taking various limits and making symmetry
solutions u(t, x), then we can regard these solutions        reductions, the equations may still remain intractable.
as functions of t and r = |x|, effectively reducing the       However, in various applications it makes sense to
dimension of the problem. By this procedure of sym-          assume that certain quantities are sufficiently small to
metry reduction one can then derive a new PDE that           be neglected. This leads to simplified equations that
is much simpler than the original one. Another, some-        could be called phe no meno logical 18 in the sense that
what more general, way of obtaining simpler equations        they are not derived from first principles.
is to look for solutions that satisfy some further prop-       Phe no meno logical equations are “toy equations” that
erty. For instance, one can assume that they are station-    are used to illustrate and isolate important physical
ary (that is, that they do not depend on the time vari-      phenomena in complicated systems. A typical way of
able), spherically symmetric, self-similar (which means      generating interesting phe no meno logical equations is
that u(t, x) depends only on x/t a ), or traveling waves     to try to write down the simplest model equation that
(which means that u(t, x) depends only on x − vt for
some fixed velocity vector v). Typically, the equations
obtained by such reductions have a variational struc-          18. I use this term here quite freely; it is typically used in a some-
                                                             what different context. Also, some of the equations that I call phe-
ture themselves. In fact, the symmetry reduction can         nomenological below, e.g., dispersive equations, can be given formal
be applied directly to the original Lagrangian.              asymptotic derivations.

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
Though the situation for more realistic physical systems is far less clear and far from being satisfactorily solved, the generally held opinion is that shockwave-type singularities can be accommodated without breaking the boundaries of the physical theory at hand. The situation for singularities in general relativity is radically different. The singularities one expects there are such that no continuation of solutions is possible without altering the physical theory itself. The prevailing opinion here is that only a gravitational quantum field theory could achieve this.

$5$

General Conclusions

What, then, is the modern theory of PDEs? As a first approximation, one could say that it is the pursuit of the following main goals. (i) Understand the problem of evolution for the basic equations of mathematical physics. The most pressing issue in this regard is to understand when and how the loca$l^{21}$ (with respect to time) smooth solutions of the basic equations develop singularities. A simple-minded criterion for distinguishing between regular theories and those that may admit singular solutions is given by the distinction between subcritical and supercritical equations.
As mentioned earlier, it is widely believed $21$ . One of the important achievements of the past century of mathematics was the establishment of a general procedure that guarantees the existence and uniqueness of a local-in-time solution to broad classes of initial conditions and large classes of nonlinear equations, including all those we have already mentioned above.

482                                                                                            IV. Branches of Mathematics

that subcritical equations are regular and that supercrit-           scales and therefore not a reliable predictor of the gen-
ical equations are not. Indeed, many subcritical equa-               eral case. These and other similar situations lead to
tions have been proved to be regular even though we                  important dilemmas: should we persist in studying the
lack a general procedure for establishing regularity                 approximate equations even when, in many cases, we
results of this kind. The situation with supercritical               face formidable mathematical difficulties (some which
equations is far more subtle. To start with, an equa-                may turn out to be quite pathological and are per-
tion that we now call supercritical22 may in fact turn               haps related to the nature of the approximation), or
out to be critical, or even subcritical, upon the discov-            should we abandon them in favor of the original system
ery of additional a priori estimates. Thus an important              or a more suitable approximation? Whatever one may
question concerning the issue of criticality, and conse-             feel about this in any specific situation, it is clear that
quently that of singular behavior, is: are there other,              the problem of understanding, rigorously, the range
stronger, local a priori bounds that cannot be derived               of validity of various approximations is one of the
from Noether’s principle? The discovery of such a                    fundamental goals in PDEs.
bound would be a major event in both mathematics and
physics.                                                             (iii) Devise and analyze the right equation for studying
   Once we understand that the presence of singulari-                the specific geometric or physical problem at hand. This
ties in our basic evolution equations is unavoidable, we             last goal is equally important even though it is neces-
have to face the question of whether they can some-                  sarily vague. The enormously important role played by
how be accommodated by a more general concept of                     PDEs in various branches of mathematics is more evi-
what a solution is or whether their structure is such                dent than ever. One looks in awe at how equations such
that the equation itself, indeed the physical theory                 as the Laplace, heat, wave, Dirac, Kd V, Maxwell, Yang–
that it underlies, becomes meaning less. An acceptable                Mills, and Einstein equations, which were originally
concept of a generalized solution should, of course,                 introduced in specific physical contexts, turned out
preserve the deterministic nature of the equations: in               to have very deep applications to seemingly unrelated
other words, it should be uniquely determined from its               problems in areas such as geometry, topology, alge-
Cauchy data.                                                         bra, and combinatorics. Other PDEs appear naturally
   Finally, once an acceptable concept of generalized                in geometry when we look for embedded objects with
solutions is found, we would like to use it to deter-                optimal geometric shapes, such as solutions to isoperi-
mine some important qualitative features, such as long-              metric problems, minimal surfaces, surfaces of least
term asymptotic behavior. One can formulate a limit-                 distortion or minimal curvature, or, more abstractly,
less number of such questions, the answers to which                  connections, maps, or metrics with distinguished prop-
will vary from equation to equation.                                 erties. They are variational in character, just like the
(ii) Understand in a rigorous mathematical fashion the               main equations of mathematical physics. Other equa-
range of validity of various approximations. The equa-               tions have been introduced with the goal of allowing
tions obtained by various limiting procedures or phe-                one to deform a general object, such as a map, con-
nomenological assumptions can of course be stud-                     nection, or metric, to an optimal one. They usually
ied in their own right, as the examples that we have                 arise in the form of geometric, parabolic flows. The
referred to above are. However, they present us with                 most famous example of this is Ricci flow, first intro-
additional problems to do with the mechanics of how                  duced by Richard Hamilton, who hoped to use it to
they are derived from equations that we regard as                    deform Riemannian metrics into Einstein metrics. Sim-
more fundamental. It is entirely possible, for exam-                 ilar ideas were used earlier to construct, for example,
ple, that the dynamics of a derived system of equa-                  stationary harmonic maps with the help of a harmonic
tions leads to behavior that is incompatible with the                heat flow, and self-dual Yang–Mills connections with
assumptions made in its derivation. Alternatively, a par-            the help of a Yang–Mills flow. In addition to the suc-
ticular simplifying assumption, such as spherical sym-               cessful use of Ricci flow to settle the Poincaré conjec-
metry in general relativity or zero vorticity for com-               ture in three dimensions, another remarkable recent
pressible fluids, may turn out to be unstable at large                example of the usefulness of geometric flows is that
                                                                     of the inverse mean flow, first introduced by Geroch, to
  22. What we call supercritical depends on the strongest a priori
                                                                     settle the so-called Riemannian version of the Penrose
coercive estimate available.                                         inequality.