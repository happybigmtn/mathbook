# The Schrödinger Equation

III.83. The Schrödinger Equation                                                                                 285

   One of the things we like to do to integers is fac-
torize them, and we can try to do the same in rings          III.82 Schemes
as well. However, it turns out that, while it is usually              Jordan S. Ellenberg
possible to factorize an element of a ring into “irre-
ducible” ones that cannot be factorized further (like        One frequently finds in the history of mathematics
the primes in Z), in many cases the factorization is not     that a definition thought to be completely general
unique. At first, this might be rather unexpected, and        was in fact too restrictive to treat certain problems
indeed it was a stumbling block for many early workers       of interest. The notion of “number,” for instance, has
(in the eighteenth and nineteenth centuries). Here is an     been expanded again and again—most notably to incor-
                       √
example: in the ring Z[ −3], which consists of all com-      porate irrationalities and complex numbers, the for-
                     √
plex numbers a + b −3, where a and b are integers,           mer arising from problems in geometry and the lat-
the number 4 may be factorized as 2 . imes 2 and also as          ter needed in order to describe solutions to arbitrary
      √(1 + −3) × (1 − −3).                                         algebraic equations. In a similar way, algebraic geom-
                                                             etry, which was once understood as the study of alge-
                     3   Modules                             braic varieties, or solution sets of algebraic equations
                                                             in some finite-dimensional space, has grown to encom-
Modules are to rings as vector spaces are to fields. In       pass more general objects known as “schemes.” As a
other words, they are algebraic structures where the         very meager example one might consider the two equa-
basic operations are addition and scalar multiplication,     tions x + y = 0 and (x + y)2 = 0. The two equations
but now the scalars are allowed to come from a ring          have the same set of solutions in the plane, so they
rather than a field. For an example of a module over          describe the same variety; but the schemes attached to
a ring that is not a field, take any Abelian group G.         the two objects are completely different. The reformu-
This can be turned into a module over Z, with addi-          lation of algebraic geometry in the language of schemes
tion given by the group operation and scalar multiplica-     was a tremendous project spearheaded by Alexander
                                                             Grothendieck in the 1960 s. As the above example sug-
tion defined in the obvious way: for instance, 3 g means
                                                             gests, the scheme-theoretic viewpoint tends to empha-
g + g + g, and −2 g means the inverse of g + g.
                                                             size the algebraic aspects of the subject (equations)
   The simplicity of this definition masks the fact that
                                                             rather than the traditionally geometric ones (solution
the structure of modules is in general far more subtle
                                                             sets of equations). This viewpoint has made a reality
than that of vector spaces. For example, we can define
                                                             of the long-hoped-for unification of algebraic num-
a basis of a module to be a linearly independent set of
                                                             ber theory [IV.1](/part-04/number-theory) and algebraic geometry, and, indeed,
elements that spans the module. However, many use-
                                                             much recent progress in number theory would have
ful facts about bases in vector spaces do not hold for
                                                             been impossible without the geometric insight supplied
modules. For instance, in Z, which we may consider as        by the theory of schemes.
a module over itself, the set {2, 3} spans the module           Even schemes are not enough to handle all the
but does not contain a basis, and similarly the set {2} is   problems of current interest, and still more general
linearly independent but cannot be extended to a basis.      notions (stacks, “noncommutative varieties,” derived
In fact, modules may be very far from having a basis:        categories of sheaves, etc.) are brought to bear when
for example, if we consider the integers modulo n as a       necessary. These can appear exotic, but to our suc-
module over Z, then even a single element x fails to be      cessors they will no doubt be second nature, just as
linearly independent, since nx = 0.                          schemes are to us. For more on algebraic geometry in
   The following example of a module is an important         general, see algebraic geometry [IV.4](/part-04/algebra). Schemes are
one. Let V be a complex vector space and let α be a lin-     discussed at greater length in arithmetic geometry
ear map from V to V . This can be made into a module         [IV.5](/part-04/arithmetic-geometry).
over the ring C[X]: if v ∈ V and P is a complex polyno-
mial, then P v is defined to be P (α)v. (For instance, if P   III.83 The Schrödinger Equation
is the polynomial x 2 + 1, then P v = α2 v + v.) Applying             Terence Tao
general structural results about modules to this exam-
ple, one obtains a proof of the jordan normal form           In mathematical physics, the Schrödinger equation
theorem [III.43](/part-03/jordan-normal-form).                                            (and the closely related Heisenberg equation) are the

286                                                                                               III. Mathematical Concepts

most fundamental equations in nonrelativistic quan-              From (1) we can easily derive Poisson’s equation of
tum mechanics, playing the same role as Hamilton’s             motion
laws of motion (and the closely related Poisson equa-                    d
                                                                           A(q(t), p(t)) = {H, A}(q(t), p(t))      (3)
tion) in nonrelativistic classical mechanics. (In relativis-            dt
tic quantum mechanics, the equations of quantum field           for any classical observable A : Rn . imes Rn → R, where
theory take over the role of Heisenberg’s equation,                                         ∂H ∂A   ∂A ∂H
                                                                                {H, A} =          −
while Schrödinger’s equation does not have a natural                                        ∂p ∂q   ∂p ∂q
direct analogue.) In pure mathematics, the Schrödinger         is the Poisson bracket of H and A. Setting A = H, we
equation, together with its variants, is one of the basic      have in particular the conservation-of-energy law:
equations studied in the field of partial differen-
                                                                                     H(q(t), p(t)) = E                            (4)
tial equations [IV.12](/part-04/analysis), and has applications to geom-
etry, to spectral and scattering theory, and to integrable     for all t ∈ R and some quantity E independent of t.
systems.                                                          Now we analyze the quantum mechanical analogue of
   The Schrödinger equation can be used to describe the        the above classical system. We need a small1 parameter
quantum dynamics of many-particle systems under the             > 0, known as Planck’s constant. The state of the par-
influence of a variety of forces, but for simplicity let us     ticle at a time t is no longer described by a single point
consider just a single particle, of mass m > 0, moving         (q(t), p(t)) in phase space, but is instead described by
about in n-dimensional space Rn subject to the influ-           a wave function, which is a complex-valued function
ence of a potential, which we shall take to be a function      of position that evolves over time: that is, for each t
V : Rn → R. To avoid technicalities we shall assume that       we have a function ψ(t) from Rn to C. It is required
all the functions we discuss are smooth.                       to obey the normalization condition ψ(t), ψ(t) = 1,
   In classical mechanics, this particle would have a          where · , · denotes the inner product
specific position q(t) ∈ Rn and a specific momentum                               φ, ψ =          φ(q)ψ(q) dq.
p(t) ∈ Rn for each time t. (Eventually we shall observe                                      Rn

the familiar law p(t) = mv(t), where v(t) = q (t) is           Unlike a classical particle, a wave function ψ(t) does
the velocity of the particle.) Thus, the state of this sys-    not necessarily have a specific position q(t). However,
tem at any given time t is described by the element            it does have an average position q(t), defined as
(q(t), p(t)) of the space Rn . imes Rn , which is known as
                                                                     q(t) = Qψ(t), ψ(t) =                   q|ψ(t, q)|2 dq.
phase space. The energy of this state is described by                                                      Rn
the hamiltonian function [III.35](/part-03/hamiltonians) H : Rn . imes Rn → R              Here, we have written ψ(t, q) for the value of ψ(t) at
on phase space, defined in this case by                         the point q, and Q is the position operator, defined
                              |p|2                             by (Qψ)(t, q) = qψ(t, q): that is, Q is the operator
                 H(q, p) =         + V (q).                    that multiplies pointwise by q. Similarly, while ψ does
                              2 m
                                                               not have a specific momentum p(t), it does have an
(Physically, the quantity |p|2 /2 m = 12 m|v|2 represents
                                                               average momentum p(t), defined as
kinetic energy, while V (q) represents potential energy.)
The system then evolves according to Hamilton’s equa-                                             
                                                               p(t) = P ψ(t), ψ(t) =                   (∇q ψ(t, q))ψ(t, q) dq,
tions of motion:                                                                                  i   Rn
                                                               where the momentum operator P is defined by Planck’s
                       ∂H                   ∂H
             q (t) =      ,     p (t) = −      ,         (1)   law
                       ∂p                   ∂q                                              
                                                                               P ψ(t, q) = ∇q ψ(t, q).
where we keep in mind that p and q are vectors, so that                                     i
these derivatives are gradients [I.3 §5.3](/part-01/fundamental-definitions). Hamilton’s         Note that the vector p(t) is real-valued because all the
equations of motion are valid for any classical system,        components of P are self-adjoint [III.50 §3.2](/part-03/linear-operators-and-their-properties). More
but in our specific case of a particle in a “potential well,”   generally, given any quantum observable, by which
they become                                                    we mean a self-adjoint operator [III.50](/part-03/linear-operators-and-their-properties) A acting on
                1                                              the space L2 (Rn ) of complex-valued square integrable
         q (t) =   p(t),     p (t) = −∇V (q).      (2)         functions, we can define the average value A(t) of A
                m
The first equation is asserting that p = mv, while the
second equation is basically Newton’s second law of              1. In many applications it is convenient to normalize  (and m) to
motion.                                                        equal 1.

III.83.    The Schrödinger Equation                                                                                                  287

at time t by the formula                                        equation, for instance by the formula2

                   A(t) = Aψ(t), ψ(t).                           ψ(t, q) = e(i/)L(t) e(i/)p(t)·(q−q(t)) φ(q − q(t)),
                                                                where
The analogue of Hamilton’s equations of motion (1) is                                         t
                                                                                       p(s)2
now the time-dependent Schrödinger equation:                                     L(t) =      − V (q(s)) ds
                                                                                      0 2 m
                             ∂ψ                                 is the classical action and φ is any slowly varying
                        i      = Hψ,                     (5)
                             ∂t                                 function that is normalized in the sense that
where H is now a quantum observable rather than a
                                                                                              |φ(q)|2 dq = 1.
classical one. More precisely,                                                           Rn
                                                                One can verify that ψ solves (5) except for some errors
                             |P |2
                      H=           + V (Q).                     that are small when  is small. In physics, this fact
                             2 m
                                                                is an example of the correspondence principle, which
In other words, we have
                                                                asserts that classical mechanics can be used to approx-
           ∂ψ                                                   imate quantum mechanics accurately if Planck’s con-
      i      (t, q) = Hψ(t, q)
           ∂t                                                   stant is small and one is working at macroscopic scales
                         2                                     (which is what allows us to use slowly varying func-
                     =−     Δq ψ(t, q) + V (q)ψ(t, q),
                        2 m                                      tions φ). In mathematics (and more precisely in the
where                                                           fields of microlocal analysis and semi-classical analy-
                                 
                                 n
                                   ∂2ψ                          sis), there are a number of formalizations of this prin-
                       Δq ψ =
                                j=1
                                      ∂qj2                      ciple that allow us to use knowledge about the behav-
                                                                ior of Hamilton’s equations of motion in order to
is the Laplacian of ψ. The analogue of Poisson’s equa-
                                                                analyze the Schrödinger equation. For example, if the
tion of motion (3) is the Heisenberg equation
                                                                classical equations of motion have periodic solutions,

              d             i                                   then the Schrödinger equation often has nearly peri-
                A(t) =      [H(t), A(t)]         (6)
             dt                                                odic solutions, whereas if the classical equations have
for any observable A, where [A, B] = AB − BA is the             very chaotic solutions, then the Schrödinger equation
commutator or Lie bracket of A and B. (The quantity             typically does as well (this phenomenon is known as
(i/)[A, B] is occasionally referred to as the quantum          quantum chaos or quantum ergodicity).
Poisson bracket of A and B.)                                       There are many aspects of the Schrödinger equation
  If the quantum state ψ oscillates in time accord-             that are of interest. We mention just one of them here
ing to the formula ψ(t, q) = e(E/i)t ψ(0, q) for some          for illustration, namely that of scattering theory. If the
real number E (known as the energy level or eigen-              potential function V decays sufficiently quickly at infin-
value), then one has the time-independent Schrödinger           ity, and k ∈ Rn is a nonzero frequency vector, then,
equation:                                                       setting the energy level as E = 2 |k|2 /2 m, the time-
                                                                independent Schrödinger equation Hψ = Eψ admits
               Hψ(t) = Eψ(t) for all times t              (7)   solutions ψ(q) that behave asymptotically (as |q| → . nfty)
(compare this with (4)). More generally, the impor-             as
                                                                                               q       ei|k||q|
tant subject of spectral theory provides many links                         ψ(q) ≈ eik·q + f      , k (n−1)/2
                                                                                              |q|     r
between the time-dependent equation (5) and the time-
independent equation (7).                                       for some canonical function f : S n−1 . imes Rn → C, which is
                                                                known as the scattering amplitude function. This scat-
   There are several strong analogies between the equa-
                                                                tering amplitude depends (in a nonlinear fashion) on
tions of classical mechanics and those of quantum
mechanics. For instance, from (6) one has the equations
                                                                   2. Intuitively, this function ψ(t, q) is localized in position near q(t)
 d           1                   d
    q(t) =   p(t),              p(t) = −∇q V (q)(t),    and localized in momentum near p(t), and is thus localized near
 dt          m                   dt                             (q(t), p(t)) in phase space. Such a localized function, exhibiting such
                                                                “particle-like” behavior as having a reasonably well-defined position
which should be compared with (2). Also, given any              and velocity, is sometimes known as a “wave packet.” A typical solu-
classical solution t → (q(t), p(t)) to Hamilton’s equa-        tion of the Schrödinger equation does not behave like a wave packet,
                                                                but can be decomposed as a superposition or linear combination of
tion of motion, one can construct a corresponding               wave packets; such decompositions are a useful tool in analyzing
family of approximate solutions ψ(t) to Schrödinger’s           general solutions of such equations.