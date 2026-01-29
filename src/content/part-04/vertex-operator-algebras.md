# Vertex Operator Algebras

$IV$ . $17$ .

Vertex Operator Algebras

Further Reading

The article “Physmatics” (which can be found online at www . claymath . org  /  library  /  senior _ scholars  /  zaslow _ physmatics . pdf) is a general discussion of the relationship between mathematics and physics, and may serve as a complement to this article. Readers with a university-level mathematics background who want to learn about mirror symmetry in more detail could try consulting the book Mirror Symmetry (Clay Mathematics Monographs, volume $1$ , edited by K. Hori and others (American Mathematical Society, Providence, RI, 2003 )). $IV$ . $17$ Vertex Operator Algebras

Terry Gannon

$1$

Introduction

Algebra is the mathematics that places more emphasis on abstract structure than on intrinsic meaning. The conceptual simplifications that can result when context is stripped away from structure give algebra a special power and clarity compared with other areas: compare, for example, the difficulty of visualizing fourdimensional space with the triviality of manipulating quadruples $(x^{1}$ , $x^{2}$ , $x^{3}$ , $x^{4})$ of real numbers. However, this abstractness can also blind us.
For instance, basic identities like $ab = ba$ and a (bc)  =  (ab) c that are obeyed by numbers can be modified in count less directions, and each modification defines a new algebraic structure, but it is hard to guess from a purely abstract perspective which of these modifications will give rise to a rich, accessible, and interesting theory. For guidance, algebra has traditionally turned to geometry. For example, over a century ago lie [VI.53](/part-06/sophus-lie-18421899) suggested that the identities $ab = - ba$ and a $(bc) =$ (ab) c  +  b (ac) were worth studying for geometrical reasons:
the resulting structures are now called lie algebras [III.48](/part-03/lie-theory) . More recently, as we shall see, physics has joined geometry in this guiding role and has had spectacular success. The renowned physicist and mathematician Edward Witten believes that a major theme of twenty-firstcentury mathematics will be its reconciliation with the branch of physics known as quantum field theory. Conformal field theory (the quantum field theory that under lies string theory) is an especially symmetric and well-behaved class of quantum field theories.
When this notion is translated into algebra, the result is a structure known as a vertex operator algebra (VOA). This

$539$

article sketches where VOAs come from, what they are, and what they are good for. To aim to explain a VOA in a few pages is almost as absurd as to aim to explain quantum field theory in a few pages, but, undaunted, I shall try to do both. Obviously it will be necessary to gloss over many important technicalities and to commit major simplifications; with out question this exposition will raise the ire of experts and the eyebrows of knowledgeable amateurs, but I hope that it will at least convey the essence of this important and beautiful area.
Vertex operator algebras are the algebra of string theory: they should be thought of as the same sort of gift to the twenty-first century that Lie algebras were to the twentieth.

$2$

Where VOAs Come From

The two most revolutionary developments in physics in the early twentieth century are usually held to be relativity and quantum mechanics. They are revolutionary not just because they have consequences that are extremely counter intuitive, but also because they provide very general frameworks that can potentially affect all physical theories:
one can take a theory from classical physics, such as the theory of the harmonic oscillator or the theory of electrostatic force, for example, and one can try to make it “relativistic,” so that it becomes compatible with relativity, or to “quantize” it, so that it becomes compatible with quantum mechanics. Unfortunately, nobody knows how to make relativity fully compatible with quantum mechanics. To put this another way, the ultimate concern of relativity is gravitation, and a direct application to gravity of the usual quantizing techniques fails.
This ought to mean that a fundamentally new physics arises at small distance scales that we are ignoring. Indeed, naive calculations suggest that the space-time “continuum” at distance scales of around $10 - 35 m$ should deteriorate into some sort of “quantum foam,” whatever that might mean. $(10 - 35 m$ is extremely small: for instance, the order of magnitude of the size of an atom is $10 - 10 m$ .) Perhaps the most popular and controversial approach to quantum gravity is string theory. The electron is a particle, i.e., in principle it can be localized to a point.
In string theory, the fundamental object is a string, a finite curve of length approximately $10 - 35 m.$ In place of the dozens of kinds of fundamental particles in the generally accepted quantum field theory, there is only one string, whose precise physical properties (mass , charge, etc .) depend on its current “vibrational mode.”

540                                                                                     IV. Branches of Mathematics

   As the string moves, it traces out a surface called        which we can think of as an . nfty × . nfty matrix Â that acts
a worldsheet. For reasons that we will sketch below,          on the states by matrix multiplication. As in classi-
much of string theory reduces to studying confor-             cal physics, one of the most important observables is
mal field theory, which is the induced quantum theory          energy, which is given by the Hamiltonian operator Ĥ.
on these surfaces. Probably no other structures have             It is far from obvious how a linear operator that takes
affected so many areas of “pure” mathematics in so             states to states has anything to do with the notion
short a time as string theory and, what is essentially        of a physical observation, and indeed the relationship
the same thing, conformal field theory. Indeed, five of         between observables and observation is a major differ-
the twelve Fields Medals awarded in the 1990 s (namely,        ence between classical and quantum theories. If Â is
those to Drinfel’d, Jones, Witten, Borcherds, and Kont-       an observable, then the spectral theorem [III.50 §3.4](/part-03/linear-operators-and-their-properties)
sevich) were for such work. We shall focus in this arti-      tells us that the Hilbert space has an orthonormal
cle on their algebraic impact; see mirror symmetry            basis [III.37](/part-03/bayesian-analysis) of eigenvectors [I.3 §4.3](/part-01/fundamental-definitions). When we do
[IV.16](/part-04/mirror-symmetry) for some geometrical implications.                    the experiment that is modeled by the observable Â,
                                                              the answer we obtain will be one of the eigenvalues
2.1     Physics 101                                           of Â. However, this answer is usually not fully deter-
A quick over view of physics will be useful for the            mined by the state v. Instead, it is given by a proba-
discussion. Further details can be found in mirror            bility distribution: the probability of obtaining a par-
symmetry [IV.16 §2](/part-04/mirror-symmetry).                                          ticular eigenvalue is proportional to the square of the
                                                              norm of the projection of v into the corresponding
2.1.1    States, Observables, and Symmetries                  eigenspace. Thus, the only circumstances under which
A physical theory is a set of laws that govern the behav-     the answer is determined in advance are if the state v
ior of some kind of physical system. A state of that          is an eigenvector of Â.
system is a complete mathematical description of the             There are two independent ways in which a quan-
system at a particular time: for instance, if the system      tum state can evolve in time: a deterministic evolu-
consists of a single particle, then we could take its state   tion between measurements, governed by the famous
to be its position x and momentum p = m(d/dt)x                schrödinger equation [III.83](/part-03/the-schrdinger-equation), and a probabilistic
(where m is its mass). An observable is a physically          and discontinuous one that occurs at the instant when
measurable quantity such as position, momentum, or            a measurement is made. For our purposes, only the
energy. It is through observables that a theory is com-       deterministic evolution will be relevant.
pared with experiment. Of course, for this to be true            The symmetries of CFT are extremely rich, as we shall
we also need to know what an observable is from a             see. Symmetries in physical theories are highly desir-
theoretical point of view.                                    able because of two consequences that they have. First,
   In classical physics, an observable is just a numer-       they lead by noether’s theorem [IV.12 §4.1](/part-04/analysis) to con-
                                                              served quantities, i.e., quantities independent of time.
ical function of the state. For example, our single
                                                              For example, the equations of motion of our particles
particle has energy E, which depends on the posi-
                                                              are usually invariant under translation: for instance,
tion and momentum via a formula of the form E =
                                                              the gravitational force between two particles depends
(1/2 m)p 2 + V (x). (This gives us the kinetic energy
                                                              only on the difference between their positions. The cor-
plus the potential energy.) Classical states at different
                                                              responding conservation law in this case is the con-
times are related by the equations of motion, which are
                                                              servation of momentum. A second consequence of
usually expressed as differential equations. However,
                                                              symmetries in quantum theories is that infinitesimal
string theory and conformal field theory (CFT) are quan-
                                                              generators of the symmetries act on the state space H
tum theories, which are significantly different from
                                                              (the Hilbert space to which the states belong), forming
classical theories: one can think of them as “applied
                                                              a representation of the Lie algebra. Both consequences
linear algebra.” Where as a classical state was given by a
                                                              are important to CFT.
collection of a few numbers (two, in the case of the par-
ticle above), a quantum state is an element of a hilbert
                                                              2.1.2   The Lagrangian Formulation and
space [III.37](/part-03/bayesian-analysis), which for the purposes of discussion we
                                                                      Feynman Diagrams
can think of as a column vector with infinitely many
complex entries. As for a quantum observable, it is a         We will need two of the languages in which physics
hermitian operator [III.50 §3.2](/part-03/linear-operators-and-their-properties) on the Hilbert space,        is written. One is the Lagrangian formalism, which is

$IV$ . $17$ .

Vertex Operator Algebras

responsible for the relationship between string theory and CFT, as well as for the appearance of modular functions in string theory. The other is the Hamiltonian or Poisson bracket formalism, which is where algebra arises. Vertex operator algebras try to explain the “miracle” that these two formalisms cohere. The Lagrangian formalism can be expressed classically through Hamilton’s action principle. When there are no forces present, particles travel in straight lines, which are the curves of shortest length. Hamilton’s principle explains how this idea generalizes to arbitrary forces:
instead of minimizing length, the particle minimizes a related quantity S called the action. The quantum version of Hamilton’s principle is due to Feynman. He expresses the probability of measuring the system in some final (eigen) state | out   , given that it was originally in some initial state | in   , using a “path integral” of e i S  /    over all possible histories that connect | in   and | out   . The details are not important for us (and in any case are mathematically dubious in general).
The intuition behind the path integral formulation is that the particle simultaneously follows every one of those histories, and each of them contributes to the probability.   is called Planck’s constant ; in the “classical limit” as   $\to 0$ , the contribution from the path that satisfies Hamilton’s principle dominates everything else. The main use of Feynman’s path integral is in perturbation theory. Finding exact solutions in physics is typically impossible and rarely useful. In practice, it suffices to find the first few terms in some Taylor expansion of the solution.
This so-called “perturbative” approach to quantum theories is particularly transparent in Feynman’s formalism, where each term of the expansion can be represented pictorially as a graph. See figure $1$ (a) for typical examples. The graphs contributing to the nth-order term in this Taylor expansion will involve n vertices. Feynman’s rules describe how to convert these graphs into integral expressions for computing the individual terms in the Taylor expansion. In this article we are interested in perturbative string theory.
The string Feynman diagrams (see figure $1$ (b) for three equivalent ones) are surfaces called worldsheets; the need for quantum foam is avoided because these surfaces are much less singular than the particle graphs (which have singularities at each vertex), and this is also largely why the mathematics of strings is so nice. To cut a long story short, each term in the perturbative expression for probabilities in string theory can be calculated from a quantity called a “correlation function” in a CFT that lives on the corresponding

$541$

(a)

(b)

Figure $1$ Some Feynman diagrams of

(a) particles and (b) strings.

worldsheet. Feynman’s path integral here amounts to the integral of a quantity that CFT can compute, over some moduli space [IV.8](/part-04/moduli-spaces) of surfaces. The vertices in a Feynman diagram represent places where one particle absorbs or emits another. The corresponding rules of string theory tell us that we should dissect the worldsheet into “tubular Y-shapes,” or spheres with three legs, as in figure $2$ .
Since these spheres with legs play the role of vertices in the Feynman diagram, the factor they contribute to the integrand of the path integral is called a vertex operator, and now it describes the absorption or emission of one string by another. A vertex operator algebra is the “algebra” of these vertex operators.

$2$ . $1$ . $3$

The Hamiltonian Formulation and Algebra

The Poisson bracket {A, B} P of two classical observables A and B is defined to be ∂A ∂B ∂B ∂A

 - / ∂x ∂p

∂x ∂p

Note that {A, B} P $= -$ { B , A} P : in other words, the Poisson bracket is anti-commutative. It also satisfies the

Jacobi identity

{A, {B, C} ${}^{PP} +$ {B, {C, A} ${}^{PP} +$ {C, {A, B} ${}^{PP} = {}^{0}$ , and therefore defines a Lie algebra. The Hamiltonian formulation of classical physics expresses the evolution of an observable A by means of the differential equation Ȧ $=$ {A, H} P , where H is the hamiltonian

542                                                                                            IV. Branches of Mathematics

                                                                  tion operators because, as we shall see later, they can
                                                                  be interpreted as adding or removing a particle from a
                                                                  certain n-particle state. Showing this uses the fact that
                                                                  they produce ±I when you interchange their order.)
                                                                  This calculation shows that if â|0 is not zero, then it
                                                                  is an eigenvector of Ĥ with an eigenvalue smaller than
                                                                  E0 , which is a contradiction.
                                                                      Since â|0 = 0, it follows that Ĥ|0 = 12 l|0, so E0 =
                                                                   1
                                                                   2 l. We now define, for each positive integer n, a state
                                                                  |n to be (â† )n |0 ∈ H . Similar calculations to the one
                Figure 2 Dissecting a surface.
                                                                  just given show that |n has energy En = (2 n + 1)E0 .
                                                                  For example,
[III.35](/part-03/hamiltonians): that is, the energy observable. The quantum                                  1                                1
                                                                   Ĥ|1 = l(â† â + 2 )â† |0 = l(â† (â† â + I) + 2 â† )|0
version of this picture is due to Heisenberg and Dirac:
the observables are now linear operators rather than                      = 32 lâ† |0 = E1 |1.
smooth functions, and the Poisson bracket is replaced             (Note that we used the fact that a|0 = 0 in the penul-
by the commutator [Â, B̂] = Â ◦ B̂ − B̂ ◦ Â of operators.      timate equality above.) We think of the vacuum as the
This again has the anti-commuting property [Â, B̂] =             ground state, and |n as being the state with n quantum
−[B̂, Â] and again satisfies the Jacobi identity, so the          particles. These states |n span all of the state space H .
process of “quantization” gives rise to a homomor-                To see how some observable acts on some state, one
phism of Lie algebras. The derivative with respect to             writes the observable in terms of the basic observables
time of a quantum observable Â is then the natural ana-          â, â† and the state in terms of the basic states |n. In
logue of the classical case: it is proportional to [Â, Ĥ],      this algebraic way we can recover all of the physics.
where Ĥ is the Hamiltonian operator. Thus the Hamil-                This idea of building up the whole space H from the
tonian has a dual role: as the energy observable and as           vacuum and the operators is a fruitful one in math-
the controller of time evolution. All of physics is stored        ematics as well: something similar happens for the
in the action of the observables on state space H , as            most important modules of most of the important Lie
well as the commutators of these observables with Ĥ.             algebras.
   Let us illustrate this picture with the quantum spring,
also known as the harmonic oscillator. The position and           2.1.4   Fields
momentum observables x̂, p̂ are operators acting on
the infinite-dimensional space H of possible spring-               A classical field is a function of space and time. Its val-
states. It is more convenient to work with certain combi-         ues can be numbers or vectors, which represent quan-
nations of them called â and â† (the dagger denotes the         tities such as air temperature or the current in a river.
“Hermitian adjoint,” or complex-conjugate transpose),             The values taken by a quantum field are operators; fur-
which obey the commutator relation [â, â† ] = I, where          thermore, a quantum field is not a function of space and
I is the identity operator. It turns out that all other           time, but a more general object called a distribution
observables can be built from â and â† . For example,           [III.18](/part-03/distributions). The prototypical example of a distribution is the
                                  1
the Hamiltonian Ĥ is l(â† â + 2 ) for some positive con-       Dirac delta function δ(x − a). Despite its name, this is
stant l. The vacuum, which is denoted |0, is the state           not a function: rather, it is defined by the property that
of minimum energy. In other words, the state |0 is
                                                                                    f (x) δ(x − a) dx = f (a)                   (1)
an eigenvector of Ĥ with smallest possible eigenvalue:
Ĥ|0 = E0 |0 for some E0 ∈ R and all other eigenvalue           for any sufficiently well-behaved function f (x). Even
E of Ĥ are greater than E0 . It follows from this that           though δ(x − a) is not a function, one can informally
â|0 = 0. To see why, consider the effect of Ĥ on â|0:         interpret it as the derivative of a step function, and
Ĥ â|0 = l(â† â + 12 )â|0 = l(ââ† − 12 )â|0             one can visualize it as equaling 0 every where except
                                                                  at x = a, where it is infinite, in such a way that the
        = âl(â† â − 12 )|0 = â(Ĥ − l)|0 = (E0 − l)â|0.   infinitely tall and infinitely thin rectangle under the
Here, we have used the fact that â† â = ââ† − I. (The         graph has area 1. However, it really only makes sense
observables â and â† are called creation and annihila-          inside an integral, as in (1). Similar remarks apply to

IV.17.    Vertex Operator Algebras                                                                                               543

distributions in general, so a quantum field can really                    emission and absorption of strings. As we shall see
only be evaluated inside an integral of space and time,                   shortly, these vertex operators are the quantum fields
applied to some “test function” like f above. The value                   in a quantum field theory of point particles (namely,
of such an integral will be an operator on the state                      the associated conformal field theory); the modes of
space H .                                                                 these vertex operators generate the “particles” (or in
   Dirac deltas appear in classical mechanics when one                    more conventional language, the states) in that confor-
takes Poisson brackets of classical fields. Similarly,                     mal field theory. Equivalently, they generate the various
commutators of quantum fields involve delta functions                      vibrational states of a single string in that string theory.
too. For example, in the simplest cases the quantum
fields φ satisfy                                                           2.2   Conformal Field Theory
                                                ⎫
              [φ(x, t), φ(x , t)] = 0,          ⎪
                                                ⎬                         A conformal field theory (CFT) is a quantum field theory
                               
                      (2)                with a two-dimensional space-time whose symmetries
                     ∂
           φ(x, t),    φ(x , t) = iδ(x − x ).⎪ ⎭
                    ∂t                                                    include all conformal transformations. We shall explain
This is a mathematical way of expressing, in the context                  what this means in the next paragraphs, but for now it
of quantum field theory, the cherished physical princi-                    is enough to know that a CFT is a particularly symmet-
ple called locality:1 the only way we can directly affect                  rical kind of quantum field theory. A CFT lives on the
something is by nudging it. In order to influence some-                    worldsheet Σ traced by a set of strings as they evolve,
thing not touching us, we must propagate a disturbance                    some times colliding and separating, through time. In
from us to it, such as a ripple in water. The main pur-                   this subsection we shall informally sketch their basic
pose of both classical and quantum fields is that they                     theory; in section 3.1 we shall be more precise.
provide a natural vehicle for realizing locality. Locality                   CFT, like any quantum field theory in two dimen-
is also at the heart of vertex operator algebras.                         sions, has two almost independent halves. This is eas-
   An important aspect of modern physics is that many                     iest to see in the context of string theory: the ripples
of the central concepts of classical physics become less                  on the string are responsible for the physical proper-
central, and are instead derived quantities. For exam-                    ties (charge, mass, etc.) of the corresponding state, but
ple, the basic object of general relativity [IV.13](/part-04/general-relativity-and-the-einstein-equations) is                    they can move (at the speed of light) either clockwise
a Lorentzian manifold, and familiar physical quantities                   or counter clockwise around the string. When they do
such as mass and gravitational force are, from the point                  so, they just pass through each other with out inter-
of view of this manifold, just names (that are not wholly                 acting. These two alternatives, clockwise and counter-
precise) given to certain of its geometrical features.                    clockwise, yield the two chiral halves of CFT. To study a
   Particles are obviously essential to classical physics,                CFT, one first analyzes its chiral halves and then splices
but we have not mentioned them in our brief sketch of                     them together to form the “bichiral” physical quanti-
quantum field theory. They arise through the so-called                     ties. Almost all attention in CFT by mathematicians has
modes of quantum fields φ, which play the role of the                      focused on the chiral (as opposed to physical) data, and
operators â, â† that we met in section 2.1.3. A mode is                 indeed that is where vertex operator algebras live. For
the operator that results from hitting the quantum field                   ease of presentation, we will usually suppress one of
with an appropriate test function and integrating—just                    the chiral halves.
as one does when working out a Fourier coefficient,                            A conformal transformation is a transformation that
in which case the test functions are trigonometric                        preserves angles. The simplest reason one can give
functions [III.92](/part-03/trigonometric-functions). In fact, when viewed appropriately,                   for why two dimensions are so special for CFT is that
modes actually are Fourier coefficients of a certain                        there are far more conformal transformations in two
kind. The commutators of these modes can be obtained                      dimensions than there are in higher dimensions. When
from the commutators of the fields. Now, recall that                       n > 2 the only examples are the obvious ones: com-
the vertex operators of string theory are related to the                  bi nations of translations, rotations, and enlargements.
                                                                          This means that thespace   of all local conformal trans-
                                                                          formations in Rn is n+2 2    dimensional. However, when
  1. More precisely, for quantum fields, locality takes the form that if
not even light can connect two given space-time points, then the quan-    n = 2 the space of local conformal transformations
tum fields at those points must be causally independent. In particular,    is far richer: it is infinite dimensional. Indeed, if you
measurements at such points can be performed simultaneously with
arbitrary precision. In quantum theories, this requires those operators
                                                                          identify R2 with the complex plane C, then any holo-
to commute. Equation (2) is a generous way to satisfy locality.           morphic function [I.3 §5.6](/part-01/fundamental-definitions) f (z) that does not have

544                                                                                       IV. Branches of Mathematics

zero derivative at a point z0 is conformal near z0 . Since   “conserved charges” here) by Ln = T (z)z−n−3 dz, so
                                                                          
a CFT is invariant under conformal transformations           that T (z) = n Ln z−n−2 , we find that they almost real-
and there are many conformal transformations, a CFT          ize the conformal algebra: instead of (3), however, they
is especially symmetrical: this is what makes CFTs so        obey the slightly more complicated relations
interesting mathematically.                                                                         m(m2 − 1)
   Lie algebras arise naturally whenever one has local         [Lm , Ln ] = (m − n)Lm+n + δn,−m                 c I, (4)
                                                                                                        12
symmetries, and indeed one can form an infinite-              where I is the identity. In other words, the operators Ln
dimensional Lie algebra out of the infinitesimal confor-      and I form an extension of the conformal algebra by I.
mal transformations. This algebra has a basis ln , n ∈ Z,    The resulting infinite-dimensional Lie algebra is called
that obeys the Lie-bracket relations                         the Virasoro algebra Vir. The number c appearing in
                [lm , ln ] = (m − n)lm+n .             (3)   (4) is called the central charge of the CFT and is a rough
                                                             measure of its size.
The algebraic interpretation of the conformal symme-
                                                                The operators Ln do not precisely represent the con-
try of CFT turns out to be that these basis elements ln
                                                             formal algebra (3). Instead, they form a so-called projec-
act naturally on all the quantities in the theory, as we
                                                             tive representation. Projective representations of sym-
shall explain below.
                                                             me tries, such as (4), are common in quantum theories.
  The basic example that under lies all the others is
                                                             The fact that they are not true representations is not a
when space-time Σ is a semi-infinite cylinder corre-
                                                             problem, since one can turn them into true re pre sen-
sponding to an in coming string. It is parametrized by
                                                             tat i ons by extending the algebra. In our case, the state
time t < 0 and the angle 0 ⩽ θ < 2π around the string.
                                                             space H carries inside it a true representation of the
We can conformally map the cylinder to the punctured
                                                             Virasoro algebra Vir, which is useful as it means Vir
disk in C by z = et−iθ , so t = −. nfty corresponds to
                                                             can be used to organize H .
z = 0. This allows us to say what we mean by conformal
                                                                Any quantum field theory has what is called a state–
symmetries of the cylinder.
                                                             field correspondence: with each field φ one associates
  The quantum fields φ(z) of CFT are the vertex oper-
                                                             its in coming state, which is the limit as the time t tends
ators of string theory. As always, these quantum fields
                                                             to −. nfty of φ|0 (as always, |0 is the vacuum state in H
φ are “operator-valued distributions” on space-time Σ,
                                                             and φ acts on states). CFT is unusual in that the state–
acting on the space H of states. Now it is possible for
                                                             field correspondence is a bijection. This means we can
a field φ to be “holomorphic,” in the following sense.
                                                             identify H and V and use states to label all fields.
First, you calculate its modes φn , one for each n ∈ Z,
                                                                We want to make V into some sort of algebra,
which are linear maps from the state space H to itself,
                                                             but the obvious direct approach of taking products
given by the formula
                                                             φ1 (z)φ2 (z) fails, since distributions, unlike true func-
                 φn =     φ(z)zn−1 dz,                       tions, cannot in general be multiplied. For example,
                                                             the Dirac delta δ(x − a) cannot be squared with out
where the integral is around a small circle about the ori-   causing problems in (1). However, even if the prod-
gin. Then you take these modes as the coefficients of          uct φ1 (z)φ2 (z) does not make sense, one can make
                        
a formal power series n∈Z φn zn . We call φ holomor-         sense of φ1 (z1 )φ2 (z2 ) as an operator-valued distri-
phic if this formal power series can be identified with       bution on Σ 2 . It is then possible to recover most of
φ, in a sense that we shall discuss more in section 3.1. A   the physics of CFT by studying the singular terms as
typical field φ(z) is not holomorphic: rather, it is a com-   z2 → z1 . By the operator product expansion, we mean
bination of holomorphic and anti-holomorphic fields,          expanding products φ1 (z1 )φ2 (z2 ) as sums of the form
                                                             
which make up the two chiral halves of CFT. We will                         h
                                                                h (z1 − z2 ) Oh (z1 ). The set V is closed under this
focus on the space of holomorphic fields φ(z), which          product in the sense that each coefficient Oh (z) lies
we call V . This turns out to form a vertex operator         in V . A typical example is
algebra (as do the anti-holomorphic fields).
   For example, the most important vertex operator           T (z1 )T (z2 ) = 12 c(z1 − z2 )−4 I + 2(z1 − z2 )−2 T (z1 )
comes directly from the conformal symmetry: the                                                       d
                                                                                            + (z1 − z2 )  T (z1 ) + · · · .
stress-energy tensor T (z) ∈ V is the “conserved                                                      dz
current” that Noether’s theorem associates with the          Physicists call V a chiral algebra; for us it is the proto-
conformal symmetry. Labeling its modes (Noether’s            typical example of a vertex operator algebra. It is not an

$IV$ . $17$ .

Vertex Operator Algebras

algebra in the conventional sense though, since, given vertex operators φ 1 (z) and φ 2 (z), we have not just a single product φ 1 (z) ∗ φ 2 (z) in V but infinitely many products φ 1 (z) ∗ h φ 2 (z)  =  O h (z), all belonging to V . The Hamiltonian plays a crucial role in any quantum field theory; here it turns out to be proportional to the mode $L^{0}$ discussed earlier. Being an observable, $L^{0}$ is diagonalizable on H , which means that any state v $\in$ H can be written as a sum h v h , where v h $\in$ H has energy h: that is, $L^{0}v^{h} = hv^{h}$ .
There is a special class of CFT that is particularly well-behaved. Let . ar{V} denote the space of all anti-holomorphic fields in the CFT--it is the other chiral half. Recall that the full CFT consists of V and . ar{V} spliced together. We call the CFT rational if V ⊕ . ar{V} is so large that it has finite index, in an appropriate sense, in the full space of quantum fields in the CFT. The name “rational” arises because the central charge c and other parameters in a rational CFT have to be rational numbers. The mathematics of rational CFT is especially rich. Let us briefly look at one example.
(We will use several words that will be unfamiliar to most readers, but at least it will give some idea of which areas are touched by CFT .) As with everything else, the quantum probabilities arising in CFT are found by first computing chiral quantities and splicing them together. These chiral quantities are called conformal or chiral blocks, and are found using simple Feynman-like rules applied to dissections like figure $2$ . In rational CFT we get a finite dimensional space F g, n of chiral blocks for any worldsheet Σ, i.e., for any choice of genus g and number n of punctures.
These spaces carry projective representations of the mapping class group Γ g, n (defined to be the fundamental group $\pi^{1}$ of the moduli space M g, n). This Γ g, nrepresentation is the source, for instance, of Jones’s relation of the braid group [III.4](/part-03/braid-groups) (and hence knots [III.44](/part-03/knot-polynomials)) to subfactors, Borcherds’s explanation of “Monstrous Moonshine,” the Drinfel’d-Kohno monodromy theorem, and the modularity of affine Kac Moody characters. Some of this we will touch on in section $4$ .
The most important example here is the torus, where the chiral blocks are modular functions, a class of functions of fundamental mathematical importance. A modular function is a meromorphic function (that is, a function that is holomorphic except at a few “poles” where it can tend to infinity) f (τ) that is defined on the upper half-plane $H =$ {τ $\inC|Imτ > 0$ and that is “symmetric” with respect to the group $SL^{2}(Z)$ of $2 \times 2545$

matrices with integer entries and determinant $1$ , in the b sense that for any such matrix (a c d ) the function f (τ) is closely related (though not necessarily exactly equal) to the function f ((a τ  +  b)  /  (c τ  +  d)). We shall discuss this further in section $3$ . $2$ . The appearance of modularity can be understood by recalling from section $2$ . $1$ . $2$ that Feynman’s path integral in string theory is an integral over moduli spaces. The moduli space $M^{1}$ , 0 for the torus can be written as the quotient of the half-plane H by the action of S$L^{2}$ (Z).
Therefore, if one lifts the integrand of Feynman’s integral from $M^{1}$ , 0 to H , one obtains a function Z (τ) that is invariant under S$L^{2}$ (Z) and hence modular. This integrand Z (τ) is a quadratic combination of the chiral blocks for the torus. $3$ What VOAs Are It is possible to give a fully axiomatic definition of vertex operator algebras. However, when one first encounters this definition (and not just the first time either) it can seem very complicated and arbitrary, and one is given no feel for the importance of VOAs. Our treatment below will be much more in formal:
this will clarify their importance even if it hides much of their complexity. Thanks to the previous section, it is possible to give a quick justification for VOAs: if you concede that CFT (or equivalently, perturbative string theory) is important, and if you have seen how closely related CFT is to VOAs, then you must concede that VOAs are important. However, this is not the whole story, as we shall see.

$3$ . $1$

Their Definition

Let us begin by defining them in terms of other concepts that must themselves be defined: a vertex operator algebra is an algebra of vertex operators, or in other words the chiral algebra V of a conformal field theory. The most important thing to understand in this definition is that a vertex operator is a quantum field, which, as we have seen, is an “operator-valued distribution of space-time.” So we can think of it informally as a matrix-valued function of space-time, where the matrix is $\infty \times \infty$ and its entries can be generalized functions like the Dirac delta ( $1$ ).
However, we shall give a much better description of these vertex operators shortly. By “space-time” we mean the unit disk in C punctured at $z = 0$ . Recall from section $2$ . $2$ that string-theoretically this set corresponds to a semi-infinite cylinder parametrized by the angle $- \pi < \theta \le \pi$ running around the string as well as the time $- \infty < t < 0$

546                                                                                          IV. Branches of Mathematics

running along the axis: the map from this to the punc-           theory. These coefficients vn are the modes: as in any
tured disk was (θ, t) → z = et−iθ . We want to restrict         quantum field theory, all observables and states in the
our attention to quantum fields that depend holomor-              theory are built up from them.
ph ically on z. However, it is not obvious what “holo-               The most important state in the theory is the vac-
morphic” means for distributions. We touched on this             uum |0. It corresponds to the identity vertex operator:
question in section 2.2: now we shall look at it in more         Y (|0, z) = I. From the physical point of view, the ver-
detail.                                                          tex operator Y (v, z) is the field that created the state
  To do this, we need a more concrete description of             v at time t = −. nfty, i.e., Y (v, 0)|0 exists and equals v.
a vertex operator. The key idea is a very convenient             (Recall that in our model z = 0 corresponds to t = −. nfty.)
algebraic interpretation of holomorphic distributions.           Among other things, this means that v−1 (|0) = v,
Consider the sum                                                 so indeed the modes applied to |0 generate V , as is
                            . nfty                                   required in any quantum field theory.
                    d(z) =      zn .                  (5)           The most important observable in the theory is the
                               n=−. nfty
                                                                 Hamiltonian, or energy operator, which we denote by
Multiply it by f (z) = 3 z−2 − 5 z 3 , say. This gives us
                                                                 L0 . It is diagonalizable (so V can be written as a sum
                       . nfty
                                       . nfty
                                                                of L0 -eigenspaces) and all of its eigenvalues must be
      f (z)d(z) = 3          zn−2 − 5         z n+3
                      n=−. nfty             n=−. nfty                      integers. For example, the vacuum |0 has 0 energy:
                       . nfty              . nfty
                                                                L0 |0 = 0. Since |0 should have the minimum energy,

. nfty
               =3            zn − 5        n
                                             z = −2 d(z).         the L0 -decomposition of V is then V =            n=0 Vn ,
                      n=−. nfty            n=−. nfty
                                                                 where V0 = C|0. Each space Vn turns out to be
A few more examples like this will convince you that
                                                                 finite dimensional, and we can think of L0 as defining
f (z)d(z) = f (1)d(z) for any polynomial function f
                                                                 a Z+ -grading on state space V .
of z and z −1 . Therefore, d(z) behaves exactly like the
                                                                    The most important vertex operator in the theory is
Dirac delta δ(z − 1), at least for polynomial test func-
                                                                 the stress-energy tensor T (z). The corresponding state
tions f . Note that d(z) cannot converge for any z: the
                                                                 is called the conformal vector ω: Y (ω, z) = T (z). This
positive powers have a convergent sum only for |z| < 1,
                                                                 means that ω has modes ωn = Ln−1 that form a rep-
and the negative powers only for |z| > 1. The “func-
                                                                 resentation (4) of the Virasoro algebra Vir. (This is
tion” d(z) is an example of a formal power series: any
       . nfty                                                        the algebraic expression for the requirement of con-
series n=−. nfty an z n , where the coefficients an can be
                                                                 formal symmetry.) The conformal vector has energy 2:
anything and we ignore all convergence issues.
                                                                 ω ∈ V2 .
   By inspection, these formal power series are “holo-
                                                                    So far our theory is seriously under determined. The
morphic” through out the punctured plane: after all,
                                                                 most important axiom to help us to pin it down fur-
holomorphic just means that the complex derivative
                                                                ther is locality. With a little work, one can show that
d/dz exists, and the derivative n nan zn−1 of a for-
                                                                 this reduces to the condition that the commutator
mal power series clearly remains a formal power series.
                                                                 [Y (u, z), Y (v, w)] of two vertex operators should be a
(By contrast, nonholomorphic series would involve the
                                                                 finite linear combination of the Dirac delta δ(z − w) =
complex conjugate . ar{z}.)                                                . nfty
                                                                 z−1 n=−. nfty (w/z)n and its derivatives (∂ k /∂w k )δ(z −
   So that is what a vertex operator looks like: a for-
                    . nfty                                           w). Now, (z − w)k+1 (∂ k /∂w k )δ(z − w) = 0. To see
mal power series n=−. nfty an z n , where each coefficient
                                                                 this, look at the case k = 1:
an is now an operator (endomorphism) on the space V
                                                                              ∂
of states, which is an infinite-dimensional vector space.          (z − w)2       δ(z − w)
                                                                             ∂w
Since the vertex operators are in one-to-one correspon-                    . nfty
                                                                          
dence with the states (we called this the “state–field cor-            =       (nw n−1 z −n+1 − 2 nw n z−n + nw n+1 z−n−1 )
respondence” above), we can label these vertex opera-                   n=−. nfty
                                                                         . nfty
tors with states: the standard convention is to denote
                                                                    =          ((n + 1) − 2 n + (n − 1))w n z −n = 0.
the vertex operator corresponding to state v ∈ V by                     n=−. nfty
                               . nfty
                                                                The proof for general k is similar. Therefore, locality
               Y (v, z) =           vn z−n−1 .             (6)
                             n=−. nfty
                                                                 can be recast in an equivalent form as follows: given
The symbol “Y ” should remind you of the sphere with             any u, v ∈ V , there is a positive number N such that
three legs, which as we know is the vertex of string                           (z − w)N [Y (u, z), Y (v, w)] = 0.       (7)

IV.17.   Vertex Operator Algebras                                                                                  547

This equation may look strange. Why can we not sim-           3.2   Basic Properties
ply divide out the (z − n)N and get that all vertex
                                                              We see from the definition sketched in the last subsec-
operators commute? The reason is that when formal
                                                              tion that a VOA is an infinite-dimensional Z+ -graded
power series are involved, there can be zero divisors.
                                                             vector space with infinitely many products (namely
For example, it is easy to check that (z − 1) n∈Z z n =
                                                              u ∗n v = un (v)), which obey infinitely many identi-
0. Locality in the form (7) is at the heart of VOAs;
                                                              ties. Need less to say, it is not an easy definition, and
for instance, one can express it as a triply infinite
                                                              there are no easy examples.
sequence of identities that the modes must obey, and
                                                                 However, if we ignore the conformal symmetry (i.e.,
this emphasizes just how restrictive a condition it
                                                              the conformal vector ω), then there are some sim-
is, and how correspondingly interesting it is to find
                                                              ple, though uninteresting, examples. The easiest is the
examples of VOAs.
                                                              one-dimensional algebra V = C|0. More generally,
  This completes the definition of a VOA. A conse-
                                                              a VOA V that obeys (7) with N = 0 is a commuta-
quence of these properties is that the modes un respect
                                                              tive associative algebra with a unit 1 = |0. It also
the L0 -grading that we mentioned earlier. This means
                                                              has a derivation T = L−1 , with respect to the prod-
that if u has energy k and v has energy l, then un (v)
                                                              uct u ∗ v = u−1 (v): this means a linear map that
has energy k + l − n − 1. The definition followed here is
                                                              obeys the product rule satisfied by derivatives, namely
some times called a VOA of CFT-type, for obvious rea-          T (u ∗ v) = (T u) ∗ v + u ∗ (T v). The converse of this
sons. Some times in the literature some of these con-          statement is true too: any such algebra is a VOA that
ditions are weakened or dropped. For example, much            obeys (7) with N = 0. In these simple examples, the role
of the theory is independent of the existence of the          of the derivation T is to recover the z-dependence of
conformal vector ω, although to us it will be cru-            the vertex operator.
cial, for reasons that will be explained in the next             Therefore, we need N not to be zero in (7) if we
subsection.                                                   want interesting examples. Likewise, the vertex oper-
   A VOA is simultaneously a physical and a mathemat-         ators Y (u, z) must be distributions (that is, they must
ical object. We have emphasized their physical origins        involve doubly infinite sums) or again the VOA reduces
in order to help explain the motivation for studying          to a commutative associative algebra.
them. We know they should be valuable to mathemat-               It is also easy to show that in any VOA (again the
ics, simply because CFT is, and indeed this is the case,      existence of the conformal vector is not needed), the
as we shall see in section 4. But from a purely math-         space V1 is a Lie algebra, with Lie bracket given by
ematical point of view, they might appear some what            [uv] = u0 (v). This is important because each Vn will
ad hoc, as though we had a list of mathematical ingre-        carry a representation of this Lie algebra, and V1 gener-
dients and said to ourselves, “Let’s consider this, and       ates continuous symmetries of the VOA (at least when
then have some of these, oh, and perhaps one of those         V1 = {0}). For a typical VOA V these Lie algebras
too, but with the following extra assumption: . . . .” For-   are very familiar. For instance, for the VOAs associated
tunately, there are more abstract formulations of VOAs        with rational CFT, they are reductive, which means that
that make them appear much less arbitrary as mathe-           they are a direct sum of copies of the trivial Lie algebra
mat ical structures. For example, Huang has shown that         C with simple Lie algebras.
they can be regarded as “two-dimensionalized” Lie alge-          The existence of the conformal vector becomes im-
bras, in the following sense. If you want to keep track of    port ant when one starts to consider the representation
the Lie brackets in an expression such as [a, [[b, c], d]]    theory of VOAs. A V -module is defined in a natural
(which is important since the Lie bracket is not an asso-     way. We shall not give full details here, but, roughly
cia tive operation), you can do so with the help of a          speaking, it is a space on which V acts in such a
binary tree, and in fact it is easy to formulate Lie alge-    way that as much as possible of the VOA structure is
bras in the language of such trees. If one then replaces      respected. For example, V will automatically be a mod-
binary trees by diagrams made out of spheres with legs,       ule for itself, just as a group acts on itself in a sim-
as we did with Feynman diagrams earlier, one obtains          ple way. (See representation theory [IV.9 §2](/part-04/representation-theory) for an
a structure that is equivalent to a VOA. (Of course, this     explanation of the latter.) A rational VOA is defined
is very far from a full explanation of what Huang did:        to be one that has the simplest representation theory:
his proof is extremely long.)                                 it has only finitely many irreducible V -modules, and

548                                                                                      IV. Branches of Mathematics

any V -module is a direct sum of irreducible ones. They         classical structures using infinite-dimensional meth-
are called rational VOAs because they are the VOAs              ods; this is a theme in particular of Atiyah’s school.
that come from rational CFT. For these VOAs, V acts             Conformal field theories are a class of exceptionally
irreducibly on itself.                                          symmetric quantum field theories, and they are also
   Assume now that V is rational. Any irreducible V -           among the simplest nontrivial quantum field theo-
module M will inherit from V an L0 -grading by rational         ries known. In the past two decades mathematics has

numbers, M =       h Mh , into finite-dimensional spaces         feasted on this combination of symmetry and (relative)
Mh . The character χM (τ) is defined by                          simplicity, often by “looping” or “complexifying” more
                       
           χM (τ) =      dim Mh e2π iτ(h−c/24) ,     (8)        classical structures, and the impact of CFT (or, equiva-
                       h                                        lently, of string theory) has been especially significant
where c is the central charge. This definition arises nat-       and broad. In hindsight the importance of CFT to math-
urally in CFT as well as in Lie theory (or affine Kac–            ematics is not surprising: it is a coherent and intri-
Moody algebras), although the curious “c/24,” needed            cate structure that straddles several disparate areas
for (9) below, is mysterious in Lie theory. (In CFT it has
                                                                of mathematics, sprawling across geometry, number
a natural explanation as a certain topological effect.)
                                                                theory, analysis, combinatorics, and indeed algebra.
These characters converge for any τ in the upper half-
                                                                  From this point of view, a crucial application of VOA
plane H. They carry a representation of the modular
                                                                theory has been to CFT itself. Quantum field theories
group SL2 (Z):
                                                              are notoriously difficult to put on a rigorous mathe-
           aτ + b                   a b
      χM            =            ρ           χN (τ), (9)        mat ical footing. But the successful applications suggest
           cτ + d      N∈Irr(V )
                                     c d MN                     that these difficulties are a symptom of mathemat i-
where Irr(V ) denotes the (finite) set of irreducible V -        cal profundity and subtlety rather than of irreparable
modules, and ρ( ac db
                      ) is a matrix with complex entries,       mathematical incoherence. In this sense the situation is
whose rows and columns are labeled by M, N ∈ Irr(V ).           highly reminiscent of the deep conceptual challenges to
Equation (9) holds for any ( ac d
                                b
                                  ) in SL2 (Z), i.e., for any   eighteenth-century mathematicians that were raised by
integers a, b, c, d satisfying ad − bc = 1. The lengthy         calculus. The definition of a VOA by Richard Borcherds
proof of (9), by Zhu, is perhaps the high point of VOA          makes the chiral algebra of a CFT completely rigor-
theory, and owes much to the intuitions of rational CFT.        ous, as well as concepts like the operator product
In the next section, we shall get some idea of why it is        expansion. Subsequent work (especially by Huang and
so important.                                                   Zhu) reconstructs from the VOA more and more of the
                                                                CFT, in arbitrary genus. The resulting clarity makes the
           4 What Are VOAs Good For?
                                                                whole subject more accessible to, and hence exploitable
This section describes what are probably the two most           by, mathematicians. Quantum field theories are here to
significant applications of VOAs. But let us begin              stay in mathematics, and thanks to VOAs mathemat i-
by listing (with out any explanations) a few others.             cians are absorbing a large class of them completely
Inspired by the geometry of string theory, vertex oper-         and explicitly.
ator (super)algebras have been assigned to manifolds,
resulting in a powerful, though complicated, alge-
                                                                4.2   Monstrous Moonshine
braic invariant of those manifolds that generalizes and
enriches more classical data such as de Rham cohom-             In 1978 Mc Kay noticed that 196 884 ≈ 196 883. Why
ology. VOAs associated with affine Kac–Moody algebras             was this an interesting observation? Well, the number
at “degenerate” levels k are deeply related to the geo-         on the left is the first meaningful coefficient of the j-
metric Langlands program. The modularity of affine                function [IV.1 §8](/part-04/number-theory)
algebra characters, as well as that of, for example, lat-
tice theta functions, are all special cases of Zhu’s theo-        j(τ) = q−1 + (744+) 196 884 q + 21 493 760 q2
rem, which places these modularities in a much broader                                   + 864 299 970 q3 + · · · ,   (10)
context.
                                                                the generator of all modular functions for SL2 (Z).
4.1   The Mathematical Formulation of CFT                       Recall that a modular function is a function f (τ) that
Since the 1970 s quantum field theory has had con-                is meromorphic in the upper half-plane H and invari-
sider able success, especially in geometry, by studying          ant under the usual action of SL2 (Z). It should also be

IV.17.   Vertex Operator Algebras                                                                                  549

meromorphic at the boundary points Q ∪ {i. nfty}, which          abstracting out their important algebraic properties
are called cusps; we did not mention this condition ear-    he defined a new structure called a vertex (opera-
lier. The j-function generates these functions in the       tor) algebra. His axioms clarified their relationship
sense that any such modular function f (τ) can be           with (generalizations of) Kac–Moody algebras, and by
written as a rational function poly(j(τ))/ poly(j(τ)).      1992 he had proved the main Conway–Norton conjec-
In other words, j(τ) is a uniformizing function that        ture (which corresponds to the case where g is arbi-
identifies (H ∪ Q ∪ {i. nfty})/SL2 (Z) with the Riemann           trary but h is the identity in the conjecture given
sphere C ∪ . nfty. We bracketed the constant term 744 in         earlier). Although his definition of VOAs required a
(10) because although 744 was the traditional choice it     deep understanding of the physics of CFT, his elab-
can be freely replaced with any other number, includ-       orate proof of this Moonshine conjecture is purely
ing 0.                                                      algebraic.
   The number on the right in Mc Kay’s observation is           We would now call V % a rational VOA with only one
the dimension of the smallest nontrivial representation     irreducible module (namely itself); its symmetry group
of the Monster, the most exceptional of the finite sim-      is the Monster and its character (8) is j(τ) − 744. The
ple groups [V.7](/part-05/the-classication-of-finite-simple-groups). This relation between modular func-       removal of the constant term 744 from (10) is signifi-
tions and the Monster was completely unexpected, as                                               %
                                                            cant as it says that the Lie algebra V1 is trivial—this is
they seem to occupy completely independent spots in         necessary if the symmetry group is to be finite. It is con-
the mathematical universe. Conway, Norton, and oth-         jectured that V % is the unique VOA with central charge
ers fleshed out and expanded Mc Kay’s original obser-         c = 24, trivial V1 , and only one irreducible module.
vation by making a number of conjectures, collectively      This is meant to be reminiscent of the leech lattice
called Monstrous Moonshine. For instance, with every        [I.4 §4](/part-01/general-goals), which is known to be the unique twenty-four-
pair (g, h) of commuting elements in the Monster (a         dimensional even self-dual lattice with no vectors of
group of size about 8 . imes 1053 ), we expect there to be                √
                                                            length 2. Indeed, the Leech lattice plays a crucial role
associated a function j(g, h) (τ) that generates all mod-    in the construction of V % .
ular functions for some discrete subgroup Γ(g, h) of            Most of the Moonshine conjectures are still open and
SL2 (Z). The j-function would be assigned in the case       this deep connection between modular functions and
g = h = identity.                                           the Monster is still some what mysterious. At the time
   The first major step toward proving these Moonshine       of writing, however, VOAs still provide the only serious
conjectures was made by Frenkel, Lepowsky, and Meur-
                                                            approach to the Moonshine conjectures.
man in the mid 1980 s. They constructed an infinite-
dimensional vector space V % out of formal power
series. They were motivated on the one hand by the            Borcherds defined VOAs to clarify the chiral algebra
vertex operators of string theory, and on the other by      of CFT and to tackle Monstrous Moonshine. For this
the formally similar distributions used in constructing     work, he was awarded a Fields Medal in 1998.
affine algebra representations. This seemed a promis-
ing direction since for both string theory and affine         Further Reading
algebra representations modular functions arise nat-        Borcherds, R. E. 1986. Vertex algebras, Kac–Moody algebras,
urally. Together with a rich algebraic structure that         and the Monster. Proceedings of the National Academy of
came from these “vertex operators,” V % was also acted        Sciences of the USA 83:3068–71.
on in a natural way by the Monster group. More over,              . 1992. Monstrous Moonshine and monstrous Lie su-
although V % is infinite dimensional, it comes packaged        per algebras. Inventiones Mathematicae 109:405–44.

into finite-dimensional pieces V % = . nfty
                                              %             Di Francesco, P., P. Mathieu, and D. Sénéchal. 1996. Confor-
                                       n=−1 Vn , and the
                                %  n
“graded dimension” n dim(Vn )q equals j − 744. The            mal Field Theory. New York: Springer.
                                      %                     Gannon, T. 2006. Moonshine Beyond the Monster: The Bridge
action of the Monster sends each Vn to itself; that is,
               %                                              Connecting Algebra, Modular Forms and Physics. Cam-
each space Vn itself carries a representation of the
                                                              bridge: Cambridge University Press.
Monster. Frenkel, Lepowsky, and Meurman proposed
                                                            Kac, V. G. 1998. Vertex Algebras for Beginners, 2 nd edn.
that V % lies at the heart of the Monstrous Moonshine         Providence, RI: American Mathematical Society.
conjectures.                                                Lepowsky, J., and H. Li. 2004. Introduction to Vertex Oper-
   Borcherds was struck by the formal similarity be-          ator Algebras and their Representations. Boston, MA:
tween V % and the chiral algebras of CFTs, and by             Birkhäuser.