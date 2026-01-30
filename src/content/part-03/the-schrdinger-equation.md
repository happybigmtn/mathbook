# The Schrödinger Equation

III.83. The Schrödinger Equation

   One of the things we like to do to integers is fac-
torize them, and we can try to do the same in rings
as well. However, it turns out that, while it is usually
possible to factorize an element of a ring into “irre-
duc i ble” ones that cannot be factorized further (like
the primes in Z), in many cases the factorization is not     that a definition thought to be completely general
unique. At first, this might be rather unexpected, and
indeed it was a stumbling block for many early workers
(in the eighteenth and nineteenth centuries). Here is an     been expanded again and again—most notably to incor-
example: in the ring Z[ −3], which consists of all com-
plex numbers a + b −3, where a and b are integers,
the number 4 may be factorized as 2 . imes 2 and also as

(1 + −3) × (1 − −3).
Modules are to rings as vector spaces are to fields. In
other words, they are algebraic structures where the
basic operations are addition and scalar multiplication,     tions x + y = 0 and (x + y)2 = 0. The two equations
but now the scalars are allowed to come from a ring
rather than a field. For an example of a module over
a ring that is not a field, take any Abelian group G.
This can be turned into a module over Z, with addi-
tion given by the group operation and scalar multiplica-     was a tremendous project spearheaded by Alexander
tion defined in the obvious way: for instance, 3 g means
g + g + g, and −2 g means the inverse of g + g.
   The simplicity of this definition masks the fact that
the structure of modules is in general far more subtle
than that of vector spaces. For example, we can define
a basis of a module to be a linearly independent set of
elements that spans the module. However, many use-
ful facts about bases in vector spaces do not hold for
modules. For instance, in Z, which we may consider as
a module over itself, the set {2, 3} spans the module
but does not contain a basis, and similarly the set {2} is   problems of current interest, and still more general
linearly independent but cannot be extended to a basis.
In fact, modules may be very far from having a basis:
for example, if we consider the integers modulo n as a
module over Z, then even a single element x fails to be
linearly independent, since nx = 0.
   The following example of a module is an important
one. Let V be a complex vector space and let α be a lin-     discussed at greater length in arithmetic geometry
ear map from V to V . This can be made into a module
over the ring C[X]: if v ∈ V and P is a complex polyno-
mial, then P v is defined to be P (α)v. (For instance, if P   III.83 The Schrödinger Equation
is the polynomial x 2 + 1, then P v = α2 v + v.) Applying
general structural results about modules to this exam-
ple, one obtains a proof of the jordan normal form
theorem [III.43](/part-03/jordan-normal-form).

285
III.82 Schemes
Jordan S. Ellenberg
One frequently finds in the history of mathematics
was in fact too restrictive to treat certain problems
of interest. The notion of “number,” for instance, has
√
porate irrationalities and complex numbers, the for-
√
mer arising from problems in geometry and the lat-
ter needed in order to describe solutions to arbitrary
√
algebraic equations. In a similar way, algebraic geom-
etry, which was once understood as the study of alge-
3   Modules                             braic varieties, or solution sets of algebraic equations
in some finite-dimensional space, has grown to encom-
pass more general objects known as “schemes.” As a
very meager example one might consider the two equa-
have the same set of solutions in the plane, so they
describe the same variety; but the schemes attached to
the two objects are completely different. The reformu-
lation of algebraic geometry in the language of schemes
Grothendieck in the 1960 s. As the above example sug-
gests, the scheme-theoretic viewpoint tends to empha-
size the algebraic aspects of the subject (equations)
rather than the traditionally geometric ones (solution
sets of equations). This viewpoint has made a reality
of the long-hoped-for unification of algebraic num-
ber theory [IV.1](/part-04/number-theory) and algebraic geometry, and, indeed,
much recent progress in number theory would have
been impossible with out the geometric insight supplied
by the theory of schemes.
Even schemes are not enough to handle all the
notions (stacks, “noncommutative varieties,” derived
categories of sheaves, etc.) are brought to bear when
necessary. These can appear exotic, but to our suc-
cessors they will no doubt be second nature, just as
schemes are to us. For more on algebraic geometry in
general, see algebraic geometry [IV.4](/part-04/algebra). Schemes are
[IV.5](/part-04/arithmetic-geometry).
Terence Tao
In mathematical physics, the Schrödinger equation
(and the closely related Heisenberg equation) are the

286

most fundamental equations in nonrelativistic quan-
tum mechanics, playing the same role as Hamilton’s
laws of motion (and the closely related Poisson equa-
tion) in nonrelativistic classical mechanics. (In relativis-
tic quantum mechanics, the equations of quantum field
theory take over the role of Heisenberg’s equation,
while Schrödinger’s equation does not have a natural
direct analogue.) In pure mathematics, the Schrödinger
equation, together with its variants, is one of the basic
equations studied in the field of partial differ en-
tial equations [IV.12](/part-04/analysis), and has applications to geom-
etry, to spectral and scattering theory, and to integrable     for all t ∈ R and some quantity E independent of t.
systems.
   The Schrödinger equation can be used to describe the
quantum dynamics of many-particle systems under the
influence of a variety of forces, but for simplicity let us     ticle at a time t is no longer described by a single point
consider just a single particle, of mass m > 0, moving
about in n-dimensional space Rn subject to the influ-
ence of a potential, which we shall take to be a function
V : Rn → R. To avoid technicalities we shall assume that
all the functions we discuss are smooth.
   In classical mechanics, this particle would have a
specific position q(t) ∈ Rn and a specific momentum
p(t) ∈ Rn for each time t. (Eventually we shall observe

the familiar law p(t) = mv(t), where v(t) = q (t) is
the velocity of the particle.) Thus, the state of this sys-    not necessarily have a specific position q(t). However,
tem at any given time t is described by the element
(q(t), p(t)) of the space Rn . imes Rn , which is known as
phase space. The energy of this state is described by
the hamiltonian function [III.35](/part-03/hamiltonians) H : Rn . imes Rn → R
on phase space, defined in this case by

(Physically, the quantity |p|2 /2 m = 12 m|v|2 represents
kinetic energy, while V (q) represents potential energy.)
The system then evolves according to Hamilton’s equa-
tions of motion:

where we keep in mind that p and q are vectors, so that
these derivatives are gradients [I.3 §5.3](/part-01/fundamental-definitions). Hamilton’s
equations of motion are valid for any classical system,
but in our specific case of a particle in a “potential well,”   generally, given any quantum observable, by which
they become

The first equation is asserting that p = mv, while the
second equation is basically Newton’s second law of
motion.

III. Mathematical Concepts
From (1) we can easily derive Poisson’s equation of
motion
d
A(q(t), p(t)) = {H, A}(q(t), p(t))      (3)
dt
for any classical observable A : Rn . imes Rn → R, where
∂H ∂A   ∂A ∂H
{H, A} =          −
∂p ∂q   ∂p ∂q
is the Poisson bracket of H and A. Setting A = H, we
have in particular the conservation-of-energy law:
H(q(t), p(t)) = E                            (4)
Now we analyze the quantum mechanical analogue of
the above classical system. We need a small1 parameter
 > 0, known as Planck’s constant. The state of the par-
(q(t), p(t)) in phase space, but is instead described by
a wave function, which is a complex-valued function
of position that evolves over time: that is, for each t
we have a function ψ(t) from Rn to C. It is required
to obey the normalization condition ψ(t), ψ(t) = 1,
where · , · denotes the inner product
φ, ψ =
Rn
Unlike a classical particle, a wave function ψ(t) does
it does have an average position q(t), defined as
q(t) = Qψ(t), ψ(t) =                   q|ψ(t, q)|2 dq.
Rn
Here, we have written ψ(t, q) for the value of ψ(t) at
the point q, and Q is the position operator, defined
|p|2                             by (Qψ)(t, q) = qψ(t, q): that is, Q is the operator
H(q, p) =
2 m
not have a specific momentum p(t), it does have an
average momentum p(t), defined as

p(t) = P ψ(t), ψ(t) =                   (∇q ψ(t, q))ψ(t, q) dq,
i   Rn
where the momentum operator P is defined by Planck’s
∂H                   ∂H
q (t) =
∂p                   ∂q                                              
P ψ(t, q) = ∇q ψ(t, q).
i
Note that the vector p(t) is real-valued because all the
components of P are self-adjoint [III.50 §3.2](/part-03/linear-operators-and-their-properties). More
we mean a self-adjoint operator [III.50](/part-03/linear-operators-and-their-properties) A acting on
1
q (t) =   p(t),     p (t) = −∇V (q).
m
1. In many applications it is convenient to normalize  (and m) to
equal 1.

III.83.    The Schrödinger Equation

at time t by the formula

The analogue of Hamilton’s equations of motion (1) is
now the time-dependent Schrödinger equation:
where H is now a quantum observable rather than a
classical one. More precisely,
In other words, we have

where
is the Laplacian of ψ. The analogue of Poisson’s equa-
tion of motion (3) is the Heisenberg equation

for any observable A, where [A, B] = AB − BA is the
commutator or Lie bracket of A and B. (The quantity
(i/)[A, B] is occasionally referred to as the quantum
Poisson bracket of A and B.)
  If the quantum state ψ oscillates in time accord-
ing to the formula ψ(t, q) = e(E/i)t ψ(0, q) for some
real number E (known as the energy level or eigen-
value), then one has the time-independent Schrödinger
equation:

(compare this with (4)). More generally, the impor-
tant subject of spectral theory provides many links
between the time-dependent equation (5) and the time-
independent equation (7).
   There are several strong analogies between the equa-
tions of classical mechanics and those of quantum
mechanics. For instance, from (6) one has the equations
 d
    q(t) =   p(t),
 dt
which should be compared with (2). Also, given any
classical solution t → (q(t), p(t)) to Hamilton’s equa-
tion of motion, one can construct a corresponding
family of approximate solutions ψ(t) to Schrödinger’s

287
equation, for instance by the formula2
A(t) = Aψ(t), ψ(t).
where
t
p(s)2
L(t) =
0 2 m
∂ψ                                 is the classical action and φ is any slowly varying
i      = Hψ,                     (5)
∂t                                 function that is normalized in the sense that
|φ(q)|2 dq = 1.
Rn
One can verify that ψ solves (5) except for some errors
|P |2
H=           + V (Q).                     that are small when  is small. In physics, this fact
2 m
is an example of the correspondence principle, which
asserts that classical mechanics can be used to approx-
∂ψ
i
∂t
2                                     (which is what allows us to use slowly varying func-
=−     Δq ψ(t, q) + V (q)ψ(t, q),
2 m                                      tions φ). In mathematics (and more precisely in the
fields of microlocal analysis and semi-classical analy-

n
∂2ψ                          sis), there are a number of formalizations of this prin-
Δq ψ =
j=1
∂qj2                      ciple that allow us to use knowledge about the behav-
ior of Hamilton’s equations of motion in order to
analyze the Schrödinger equation. For example, if the
classical equations of motion have periodic solutions,
d
A(t) =
dt
very chaotic solutions, then the Schrödinger equation
typically does as well (this phenomenon is known as
quantum chaos or quantum ergodicity).
There are many aspects of the Schrödinger equation
that are of interest. We mention just one of them here
for illustration, namely that of scattering theory. If the
potential function V decays sufficiently quickly at infin-
ity, and k ∈ Rn is a nonzero frequency vector, then,
setting the energy level as E = 2 |k|2 /2 m, the time-
independent Schrödinger equation Hψ = Eψ admits
Hψ(t) = Eψ(t) for all times t
as
q       ei|k||q|
ψ(q) ≈ eik·q + f
|q|     r
for some canonical function f : S n−1 . imes Rn → C, which is
known as the scattering amplitude function. This scat-
tering amplitude depends (in a nonlinear fashion) on
2. Intuitively, this function ψ(t, q) is localized in position near q(t)
1
p(t) = −∇q V (q)(t),    and localized in momentum near p(t), and is thus localized near
m
“particle-like” behavior as having a reasonably well-defined position
and velocity, is some times known as a “wave packet.” A typical solu-
tion of the Schrödinger equation does not behave like a wave packet,
but can be decomposed as a superposition or linear combination of
wave packets; such decompositions are a useful tool in analyzing
general solutions of such equations.