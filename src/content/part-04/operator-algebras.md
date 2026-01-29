# Operator Algebras

510                                                                                       IV. Branches of Mathematics

Dennis Sullivan. They are indispensable for discussing        prevents the system from admitting solutions in some
change of complex structure, straightening, holomor-          cases also prevents solutions from being unique in
phic motion, surgery, and many other phenomena. The           other cases.
interested reader is referred to the books listed below.        To make the relation between existence and unique-
The first two contain expository papers, the third is          ness of solutions more precise, consider a general
a graduate textbook, and the fourth is a collection of        system of linear equations of the form
papers. They all contain many further references.
                                                                        k11 u1 + k12 u2 + · · · + k1 n un = f1 ,
Acknowledgments. The computer drawings in this arti-                    k21 u1 + k22 u2 + · · · + k2 n un = f2 ,
cle were obtained from a program written by Christian
Henriksen.                                                                                                ..
                                                                                                           .

Further Reading                                                         kn1 u1 + kn2 u2 + · · · + knn un = fn

Devaney, R. L., and L. Keen, eds. 1989. Chaos and Frac-       consisting of n equations in n unknowns. The scalars
  tals. The Mathematics Behind the Computer Graphics. Pro-    kji form a matrix of coefficients and the problem is to
  ceedings of Symposia in Applied Mathematics, volume 39.     solve for the ui in terms of the fj . The general theorem
  Providence, RI: American Mathematical Society.              illustrated by our particular numerical example above
      . 1994. Complex Dynamical Systems. The Mathematics      is that the number of linear conditions that the fj must
  Behind the Mandelbrot and Julia Sets. Proceedings of Sym-   satisfy if a solution is to exist is equal to the number of
  posia in Applied Mathematics, volume 49. Providence, RI:
                                                              arbitrary constants appearing in the general solution
  American Mathematical Society.
                                                              when a solution does exist. To use a more technical
Lei, T., ed. 2000. The Mandelbrot Set, Theme and Varia-
  tions. London Mathematical Society Lecture Note Series,     vocabulary, the dimension of the kernel [I.3 §4.1](/part-01/fundamental-definitions) of
  volume 274. Cambridge: Cambridge University Press.          the matrix K = {kji } is equal to the dimension of its
Milnor, J. 1999. Dynamics in One Complex Variable. Weis-      cokernel. In the example, these numbers are both 1.
  baden: Vieweg.                                                 A little more than a hundred years ago, fredholm
                                                              [VI.66](/part-06/ivar-fredholm-18661927) made a study of integral equations of the type

IV.15 Operator Algebras                                                  u(y) −    k(y, x)u(x) dx = f (y).
          Nigel Higson and John Roe                           These arose from questions in theoretical physics, and
                                                              the problem was to solve for the function u in terms of
      1   The Beginnings of Operator Theory                   the function f . Since an integral can be thought of as a
We can ask two basic questions about any equation,            limit of finite sums, Fredholm’s equation is an infinite-
or system of equations: is there a solution, and, if          dimensional counterpart of the finite-dimensional lin-
there is, is it unique? Experience with finite systems         ear systems considered above, in which vectors with
of linear equations indicates that the two questions are      n components are replaced by functions with values
interconnected. Consider for instance the equations           at infinitely many different points x. (Strictly speaking,
                                                              Fredholm’s equation is analogous to a matrix equation
                   2 x + 3 y − 5 z = a,
                                                              of the type u − Ku = f rather than Ku = f . The altered
                      x − 2 y + z = b,                         form of the left-hand side has no effect on the overall
                    3 x + y − 4 z = c.                          behavior of the matrix equation, but it does consider-
                                                              ably alter the behavior of the integral equation. As we
Notice that the left-hand side of the third equation is
                                                              shall see, Fredholm was fortunate to work with a class
the sum of the left-hand sides of the first two. As a
                                                              of equations whose behavior mirrors that of matrix
result, no solution to the system exists unless a+b = c.
                                                              equations very closely.)
But if a + b = c, then any solution of the first two
                                                                A very simple example is
equations is also a solution of the third; and in any
                                                                                      1
linear system involving more unknowns than equa-
                                                                            u(y) −        u(x) dx = f (y).
tions, solutions, when they exist, are never unique. In                               0
the present case, if (x, y, z) is a solution, then so is      To solve this equation, it helps to observe that the quan-
                                                                    1
(x + t, y + t, z + t), for any t. Thus the same phe-          tity 0 u(x) dx, when thought of as a function of y,
nomenon (a linear relation among the equations) that          is a constant. Thus in the homogeneous case (f ≡ 0),

IV.15.   Operator Algebras                                                                                           511

the only possible solutions for u(y) are the constant          1.1   From Integral Equations to Functional Analysis
functions. On the other hand, for a general function
                                                               Hilbert’s spectral theorem led to an explosion of activ-
f , solutions exist if and only if the single linear con-
         1                                                     ity, since integral operators arise in many different
dition 0 f (y) dy = 0 is satisfied. So in this example
                                                               areas of mathematics (including, for example, the
the dimension of the kernel and the dimension of the
                                                               dirichlet problem [IV.12 §1](/part-04/analysis) in partial differential
cokernel are both 1. Fredholm set out on a systematic
                                                               equations and the representation theory of com-
exploration of the analogy between matrix theory and
                                                               pact groups [IV.9 §3](/part-04/representation-theory)). It was soon recognized that
integral equations that this example suggests. He was
                                                               these operators are best viewed as linear transforma-
able to prove that, for equations of his type, the dimen-
                                                               tions on the hilbert space [III.37](/part-03/bayesian-analysis) of all functions u(y)
sions of the kernel and of the cokernel are always finite
                                                               such that |u(y)|2 dy < \infty. Such functions are called
and equal.
                                                               square-integrable, and the collection of all of them is
   Fredholm’s work sparked the imagination of hilbert
                                                               denoted L2 [0, 1].
[VI.63](/part-06/david-hilbert-18621943), who made a detailed study of the integral
                                                                  With the important concept of Hilbert space avail-
operators that transform u(y) into k(y, x)u(x) dx,
                                                               able, it became convenient to examine a much broader
in the special case where the real-valued function k
                                                               range of operators than the integral operators ini-
is symmetric, meaning that k(x, y) = k(y, x). The
                                                               tially considered by Fredholm and Hilbert. Since Hilbert
finite-dimensional counterpart of Hilbert’s theory is the
                                                               spaces are vector spaces [I.3 §2.3](/part-01/fundamental-definitions) and metric spaces
theory of real symmetric matrices. Now if K is such
                                                               [III.56](/part-03/metric-spaces), it made sense to look first at operators from a
a matrix, then a standard result from linear algebra
                                                               Hilbert space to itself that are both linear and continu-
asserts that there is an orthonormal basis consisting
                                                               ous: these are usually called bounded linear operators.
of eigenvectors [I.3 §4.3](/part-01/fundamental-definitions) for K, or equivalently that
                                                               The analogue of the symmetry condition k(x, y) =
there is a unitary matrix U such that U −1 T U is diago-
                                                               k(y, x) on integral operators is the condition that a
nal. (Unitary means that U is invertible and preserves
                                                               bounded linear operator T be self-adjoint, which is to
the lengths of vectors: Uv = v for all vectors v.)
                                                               say that T u, v = u, T v for all vectors u and v in
Hilbert obtained an analogous theory for all symmet-
                                                               the Hilbert space (the angle brackets denote the inner
ric integral operators. He showed that there exist func-
                                                               product). A simple example of a self-adjoint operator
tions u1 (y), u2 (y), . . . and real numbers λ1 , λ2 , . . .
                                                               is the multiplication operator by a real-valued function
such that
                                                               m(y); this is the operator M defined by the formula
              k(y, x)un (x) dx = \lambda n un (y).                    (Mu)(y) = m(y)u(y). (The finite-dimensional coun-
                                                               terpart to a multiplication operator is a diagonal matrix
Thus un (y) is an eigenfunction for the integral opera-
                                                               K, which multiplies the jth component of the vector by
tor, with eigenvalue \lambda n .
                                                               the matrix entry kjj .)
   In most cases it is hard to calculate un and \lambda n
                                                                  Hilbert’s spectral theorem for symmetric integral
explicitly, but calculation is possible when k(x, y) =
                                                               operators tells us that every such operator can be given
φ(x − y) for some periodic function φ. If the range
                                                               a particularly nice form: with respect to a suitable
of integration is [0, 1] and the period of φ is 1, then
                                                               “basis” of L2 [0, 1], namely a basis of eigenfunctions,
the eigenfunctions are cos(2 kπ y), k = 0, 1, 2, . . . , and
                                                               it will have an infinite diagonal matrix. Moreover, the
sin(2 kπ y), k = 1, 2, . . . . In this case, the theory of
                                                               basis vectors can be chosen to be orthogonal to each
fourier series [III.27](/part-03/the-fourier-transform) tells us that a general function
                                                               other. For a general self-adjoint operator, this is not
f (y) on [0, 1] can be expanded as the sum of a series
                                                              true. Consider, for instance, the multiplication operator
  (ak cos 2 kπ y + bk sin 2 kπ y) of cosines and sines.
                                                               from L2 [0, 1] to itself that takes each square-integrable
Hilbert showed that, in general, there is an analogous
                                                               function u(y) to the function yu(y). This operator
expansion
                                                              has no eigenvectors [I.3 §4.3](/part-01/fundamental-definitions), since if \lambda is an eigen-
                  f (y) =      an un (y)
                                                               value [I.3 §4.3](/part-01/fundamental-definitions), then we need yu(y) = \lambda u(y) for
in terms of the eigenfunctions for any symmetric inte-         every y, which implies that u(y) = 0 for every y not
gral operator. In other words, the eigenfunctions form         equal to λ, and hence that |u(y)|2 dy = 0. However,
a basis, just as in the finite-dimensional case. Hilbert’s      this example is not particularly worrying, since a mul-
result is now called the spectral theorem for symmetric        tiplication operator of this kind is a sort of continuous
integral operators.                                            analogue of the operator defined by a diagonal matrix.

512                                                                                      IV. Branches of Mathematics

It turns out that if we enlarge our concept of “diagonal”     as its own successor, then the readout will be either
to include multiplication operators, then all self-adjoint    00000 · · · or 111111 · · · , depending on whether or not
operators are “diagonalizable,” in the sense that, after a    we chose a square with a piece on it to begin with. But if
suitable “change of basis,” they become multiplication        the rule is sufficiently complicated, then the “time aver-
                                                                           n
operators.                                                    age” (1/n) j=1 Rj will indeed converge to the num-
   To make this statement precise, we need the notion         ber of pieces on the board divided by the number of
of the spectrum [III.86](/part-03/the-spectrum) of an operator T . This is the set   squares, as expected.
of complex numbers \lambda for which the operator T − \lambda I               The checkerboard example is elementary, since in
does not have a bounded inverse (here I is the iden-          fact the only “sufficiently complicated” rules in this
tity operator on Hilbert space). In finite dimensions the      finite case are cyclic permutations of the squares of the
spectrum is precisely the set of eigenvalues, but in infi-     board, and thus all the squares move past our obser-
nite dimensions this is not always so. Indeed, whereas        vation post in succession. However, there are related
every symmetric matrix has at least one eigenvalue, a         examples where one observes only a small fraction of
self-adjoint operator, as we have just seen, need not.        the data. For instance, replace the set of squares on a
As a result of this, the spectral theorem for bounded         checkerboard with the set of points on a circle, and in
self-adjoint operators is phrased not in terms of eigen-      place of the checkers, imagine that a subset S of a cir-
values but in terms of the spectrum. One way of for-          cle is marked as occupied. Let the rearrangement rule
mulating it is to state that any self-adjoint operator        be the rotation of points on the circle through some
T is unitarily equivalent to a multiplication operator        irrational number of degrees. Stationed at a point x of
(Mu)(y) = m(y)u(y), where the closure of the range            the circle, we record whether x belongs to S, the first
of the function m(y) is the spectrum of T . Just as in the    rotated copy of S, the second rotated copy of S, and
finite-dimensional case, a unitary operator is an invert-      so on to obtain a sequence of 0 or 1 readings as before.
ible operator U that preserves the lengths of vectors. To     One can show that (for nearly every x) the time average
say that T and M are unitarily equivalent is to say that      of our observations will converge to the proportion of
there is some unitary map U, which we can think of as         the circle occupied by S.
an analogue of a change-of-basis matrix, such that T =           Similar questions about the relationship between
U −1 MU . This generalizes the statement that any real        time and space averages had arisen in thermodynamics
symmetric matrix is unitarily equivalent to a diagonal        and elsewhere, and the expectation that time and space
matrix with the eigenvalues along the diagonal.               averages should agree when the rearrangement rule
                                                              is sufficiently complex became known as the ergodic
1.2   The Mean Ergodic Theorem                                hypothesis.
                                                                 Von Neumann brought operator theory to bear on
A beautiful application of the spectral theorem was
                                                              this question in the following way. Let H be the Hilbert
found by von neumann [VI.91](/part-06/john-von-neumann-19031957). Imagine a checker-
                                                              space of functions on the squares of the checkerboard,
board on which are distributed a certain number of
                                                              or the Hilbert space of square-integrable functions on
checkers. Imagine that for each square there is des-
                                                              the circle. The rearrangement rule gives rise to a unitary
ignated a “successor” square (in such a way that no
                                                              operator U on H by means of the formula
two squares have the same successor), and that every
minute the checkers are rearranged by moving each one                         (Uf )(y) = f (φ−1 (y)),
to its successor square. Now focus attention on a single      where φ is the function describing the rearrangement.
square and each minute record with a 1 or 0 whether           Von Neumann’s ergodic theorem asserts that if no non-
or not there is a piece on the square. This produces a        constant function in H is fixed by U (this is one way
succession of readings R1 , R2 , R3 , . . . like this:        of saying that the rearrangement rule is “sufficiently
                                                              complicated”), then, for every function f ∈ H, the limit
             00100110010110100100 · · · .
                                                                                       1  j
                                                                                           n
We might expect that over time, the average number                                 lim       U f
                                                                                   n→\infty n
of positive readings Rj = 1 will converge to the num-                                    j=1

ber of pieces on the board divided by the number of           exists and is equal to the constant function whose value
squares. If the rearrangement rule is not complicated         every where is the average value of f . (To apply this to
enough, then this will not happen. For example, in the        our examples, take f (x) to be the function that is 1 if
most extreme case, if the rule designates each square         the point x is occupied and 0 otherwise.)

IV.15.   Operator Algebras                                                                                            513

   Von Neumann’s theorem can be deduced from a spec-         ment of an observable quantity will produce a deter-
tral theorem for unitary operators that is analogous to      minate outcome if and only if the state of the system
the spectral theorem for self-adjoint operators. Every       is an eigenvector for the operator associated with that
unitary operator can be reduced to a multiplication          quantity.
operator, not by real-valued functions but by functions         A distinctive feature of quantum theory is that the
whose values are complex numbers of absolute value 1.        operators associated with different observables typi-
The key to the proof then becomes a statement about          cally do not commute with one another. If two oper-
complex numbers of absolute value 1: if z is such a          ators do not commute, then they will typically have no
complex number, different from 1, then the expression         eigenvectors in common, and, as a result, simultaneous
       n
(1/n) j=1 z j approaches zero as n → \infty. This in turn         measurements of two different observables will typi-
is easily proved using the formula for the sum of a geo-     cally not result in determinate values for both of them.
               n
metric series, j=1 z j = z(1 − zn )/(1 − z). (More detail    A famous example is provided by the operators P and
can be found in ergodic theorems [V.9](/part-05/ergodic-theorems).)                     Q associated with the position and momentum of a par-
                                                             ticle moving along a line. They satisfy the Heisenberg
1.3   Operators and Quantum Theory                           commutation relation
                                                                                   QP − P Q = iI,
Von Neumann realized that Hilbert spaces and their
operators provide the correct mathematical tools to          where  is a certain physical constant. (This is an in-
formalize the laws of quantum mechanics, introduced          stance of a general principle which relates the non-
in the 1920 s by Heisenberg and Schrödinger.                  commutativity of observables in quantum mechanics
   The state of a physical system at any given instant       to the Poisson bracket of the corresponding observ-
is the list of all the information needed to determine       ables in classical mechanics: see mirror symmetry
its future behavior. If, for instance, the system con-       [IV.16 §§2.1.3, 2.2.1].) As a result, it is impossible for the
sists of a finite number of particles, then classically its   particle simultaneously to have a determinate momen-
state consists of the list of the position and momen-        tum and position. This is the uncertainty principle.
                                                                It turns out that there is an essentially unique
tum vectors of all the constituent particles. By contrast,
                                                             way of representing the Heisenberg commutation rela-
in von Neumann’s formulation of quantum mechan-
                                                             tion using self-adjoint operators on Hilbert space: the
ics one associates with each physical system a Hilbert
                                                             Hilbert space H must be L2 (R); the operator P must be
space H, and a state of the system is represented by a
                                                             −i d/dx; and the operator Q must be multiplication
unit vector u in H. (If u and v are unit vectors and v
                                                             by x. This theorem allows one to determine explicitly
is a scalar multiple of u, then u and v determine the
                                                             the observable operators for simple physical systems.
same state.)
                                                             For example, in a system consisting of a particle on a
   Associated with each observable quantity (perhaps
                                                             line subject to a force directed toward the origin which
the total energy of the system, or the momentum of one
                                                             is proportional to the distance from the origin (as if
particle within the system) is a self-adjoint operator Q
                                                             the particle were attached to a spring, anchored at the
on H whose spectrum is the set of all observed values
                                                             origin), the operator for total energy is
of that quantity (hence the origin of the term “spec-
                                                                                    2 d 2    k
trum”). States and observables are related as follows:                         E=−         + x2,
                                                                                   2 m dx 2    2
when a system is in the state described by a unit vector
                                                             where k is a constant which determines the overall
u ∈ H, the expected value of the observable quantity
                                                             strength of the force. The spectrum of this operator
corresponding to a given self-adjoint operator Q is the
                                                             is the set
inner product Qu, u. This may not be a value that
                                                                              1
is ever actually measured: rather, it is the average of                {(n + 2 )(k/m)1/2 : n = 0, 1, 2, . . . }.
values that are obtained from many repeated experi-          These are therefore the possible values for the total
ments with the system when it is in the given state u.       energy of the system. Notice that the energy can
The relation between states and observables reflects          assume only a discrete set of values. This is another
the paradoxical behavior of quantum mechanics: it is         characteristic and fundamental feature of quantum
possible, and in fact typical, for a system to exist in      theory.
a “superposed” state, under which repeated identical           Another important example is the operator of total
experiments produce distinct outcomes. A measure-            energy for the hydrogen atom. Like the operator above,

514                                                                                           IV. Branches of Mathematics

this may be realized as a certain explicit partial dif-             If U is a unitary representation of G and v is a vector,
ferential operator. It can be shown that the eigen-               then σ : g → Ug v, v is a function defined on G. The
values of this operator form a sequence proportional              law Ug1 g2 = Ug1 Ug2 implies that σ has an important
to {−1, − 14 , − 19 , . . . }. A hydrogen atom, when disturbed,   positivity property, namely
may release a photon, resulting in a drop in its total                                                       2
                                                                                                               
                                                                               ag1 ag2 σ (g1−1 g2 ) =  ag Ug v  ⩾ 0,
energy. The released photon will have energy equal to
                                                                        g1 , g2 ∈G
the difference between the energies of the initial and
final states of the atom, and therefore it is propor-              for any scalars ag ∈ C. A function defined on G and
tional to a number of the form 1/n2 − 1/m2 . When                 having this positivity property is said to be positive
light from hydrogen is passed through a prism or                  definite. Conversely, from a positive-definite function
diffraction grating, bright lines are indeed observed at           one can build a unitary representation. This GNS con-
wavelengths corresponding to these possible energies.             struction (in honor of Israel Gelfand, Mark Naimark,
Spectral observations of this sort provide experimental           and Irving Segal) begins by considering the group ele-
confirmation for quantum mechanical predictions.                   ments themselves as basis vectors in an abstract vector
   So far we have discussed states of a quantum sys-              space. We can attempt to define an inner product on
tem only at a single instant. However, quantum systems            this vector space by means of the formula
evolve in time, just as classical systems do: to describe                           g1 , g2  = σ (g1−1 g2 ).
this evolution we need a law of motion. The time evo-
                                                                  The resulting object may differ from a genuine Hilbert
lution of a quantum system is represented by a family
                                                                  space in two respects. First, there may be nonzero vec-
of unitary operators Ut : H → H, parametrized by the
                                                                  tors whose length, as measured by the inner product, is
real numbers. If the system is in an initial state u, it
                                                                  zero (although the hypothesis that σ is positive definite
will be in the state Ut u after t units of time. Because
                                                                  does rule out the possibility that there might be vectors
the passage of s units of time followed by t further
                                                                  of negative length). Second, the completeness axiom
units is the same as the passage of s + t units, the uni-
                                                                  [III.62](/part-03/normed-spaces-and-banach-spaces) of Hilbert space theory may not be satisfied.
tary operators Ut satisfy the group law Us Ut = Us+t .
                                                                  However, there is a “completion” procedure which fixes
An important theorem of Marshall Stone asserts that
                                                                  both these deficiencies. Applied in the present case,
there is a one-to-one correspondence between unitary
                                                                  it produces a Hilbert space Hσ that carries a unitary
groups {Ut } and self-adjoint operators E given by the
                                                                  representation of G.
formula
                           d Ut            1                          Versions of the GNS construction arise in several
               i E =                  = lim (Ut − I).              areas of mathematics. They have the advantage that
                            dt t=0 t→0 t
The quantum law of motion is that the generator E cor-            the functions on which the constructions are based are
responding in this way to time evolution is the opera-            easy to manipulate. For instance, convex combinations
tor associated with the observable “total energy.” When           of positive-definite functions are again positive defi-
E is realized as a differential operator on a Hilbert              nite, and this allows geometrical methods to be applied
space of functions (as in the examples above), this state-        to the study of representations.
ment becomes a differential equation, the Schrödinger
equation.                                                         1.5   Determinants and Traces

                                                                  The original works of Fredholm and Hilbert borrowed
1.4   The GNS Construction
                                                                  heavily from traditional concepts of linear algebra, and
The time-evolution operators Ut of quantum mechanics              in particular the theory of determinants [III.15](/part-03/determinants). In
satisfy the law Us Ut = Us+t . More generally, we define           view of the complicated definition of the determinant
a unitary representation of a group [I.3 §2.1](/part-01/fundamental-definitions) G to be a          even for finite matrices, it is perhaps not surprising that
family of unitary operators Ug , one for each g ∈ G, sat-         the infinite-dimensional situation presented extraordi-
isfying the law Ug1 g2 = Ug1 Ug2 for all g1 , g2 ∈ G. Origi-      nary challenges. Very soon, much simpler alternative
nally introduced by frobenius [VI.58](/part-06/ferdinand-georg-frobenius-18491917) as a tool for the           approaches were found that avoided determinants alto-
study of finite groups, representation theory [IV.9](/part-04/representation-theory)               gether. But it is interesting to note that the determinant,
has become indispensable in mathematics and physics               or to be more exact the related notion of the trace, has
wherever the symmetries of a system must be taken                 played an important role in recent developments on
into account.                                                     which we will report later in this article.

IV.15.   Operator Algebras                                                                                          515

   The trace of an n \times n matrix is the sum of its diag-          It is easy to check that every von Neumann algebra
onal entries. As with the determinant, the trace of a          M is equal to its own double commutant M (the com-
matrix A is equal to the trace of BAB −1 for any invert-       mutant of the commutant of M). Von Neumann proved
ible matrix B. In fact, the trace is related to the determi-   that if a self-adjoint algebra M of operators is closed
nant by the formula det(exp(A)) = exp(tr(A)) (because          under pointwise limits, then M is equal to the commu-
of the invariance properties of trace and determinant,         tant of the group of unitary operators in its commutant,
it is enough to check this for diagonal matrices, where        and is therefore a von Neumann algebra.
it is easy). In infinite dimensions the trace need not
make sense since the sum of the diagonal entries of            2.1   Decomposing Representations
an \infty × \infty matrix may not converge. (The trace of the            Let g → Ug be a unitary representation of a group G
identity operator is a case in point: the diagonal entries     on a Hilbert space H. If a closed subspace H0 of H
are all 1, and if there are infinitely many of them, then       is mapped into itself by all the operators Ug , then it
their sum is not well-defined.) One way to address this         is said to be an invariant subspace for the representa-
problem is to limit oneself to operators for which the         tion. If H0 is invariant, then since the operators Ug map
sum is well-defined. An operator T is said to be of             H0 to itself, their restrictions to H0 constitute another
trace class if, for every two sequences {uj } and {vj }        representation of G, called a subrepresentati on of the
of pairwise orthogonal vectors of length 1, the sum            original.
\infty
   j=1 T uj , vj  is absolutely convergent. A trace-class       A subspace H0 is invariant for a representation, and
operator T has a well-defined and finite trace, namely           so determines a subrepresentati on, if and only if the
           \infty
the sum j=1 T uj , uj  (which is independent of the          orthogonal projection operator P : H → H0 belongs
choice of orthonormal basis {uj }).                            to the commutant of that representation. This points
   Integral operators such as those appearing in Fred-         to a close connection between subrepresentati ons and
holm’s equation provide natural examples of trace-             von Neumann algebras. In fact, von Neumann algebra
class operators. If k(y, x) is a smooth function, then         theory can be thought of as the study of the ways in
the operator T u(y) = k(y, x)u(x) dx is of trace               which unitary representations can be decomposed into
class, and its trace is equal to k(x, x) dx, which can         subrepresentati ons.
be regarded as the “sum” of the diagonal elements of              A representation is irreducible if it has no nontriv-
the “continuous matrix” k.                                     ial invariant subspace. A representation that does have
                                                               a nontrivial invariant subspace H0 can be divided into
            2 Von Neumann Algebras                             two subrepresentati ons: those associated with H0 and
                                                               those associated with its orthogonal complement H0⊥ .
The commutant of a set S of bounded linear operators           Unless both the representations H0 and H0⊥ are irre-
on a Hilbert space H is the collection S of all operators      ducible, we will be able to divide one or both of them
on H that commute with every operator in the set S. The        into still smaller pieces by repeating the process that
commutant of any set is an algebra of operators on H.          was just carried out for H. If the initial Hilbert space
That is, if T1 and T2 are in the commutant, then so are        H is finite dimensional, then continuing in this way we
T1 T2 and any linear combination a1 T1 + a2 T2 .               will eventually decompose it into irreducible subrepre-
  As mentioned in the previous section, a unitary rep-         sentations. In the language of matrices, we will obtain
resentation of a group G on a Hilbert space H is a col-        a basis for H with respect to which all the operators in
lection of unitary operators Ug , labeled by elements of       the group are simultaneously block diagonal, in such a
G, with the property that for any two group elements           way that each block represents an irreducible group of
g1 and g2 the composition Ug1 Ug2 is equal to Ug1 g2 .         unitary operators on a smaller Hilbert space.
A von Neumann algebra is any algebra of operators                 Reducing a unitary representation on a finite-dimen-
on a complex Hilbert space H which is the commu-               sional Hilbert space into irreducible subrepresenta-
tant of some unitary representation of a group on H.           tions is a bit like decomposing an integer into a prod-
Every von Neumann algebra is closed under adjoints             uct of prime factors. As with prime factorization, the
and under limits of nearly every sort. For example, it is      decomposition process for a finite-dimensional unitary
closed under pointwise limits: if {Tn } is a sequence of       representation has only one possible end: there is, up
operators in a von Neumann algebra M, and if Tn v →            to ordering, a unique list of irreducible representations
T v, for every vector v ∈ H, then T ∈ M.                       into which a given unitary representation decomposes.

516                                                                                         IV. Branches of Mathematics

But in infinite dimensions the decomposition process            related to the existence of factors that are not of type I.
faces a number of difficulties, the most surprising of           Von Neumann, together with Francis Murray, investi-
which is that there may be two decompositions of               gated this possibility in a series of papers that mark
the same representation into entirely different sets of         the foundation of operator algebra theory. They intro-
irreducible subrepresentati ons.                                duced an order structure on the collection of subrep-
   In the face of this, a different form of decomposi-          resentations of a given isotypical representation or, to
tion suggests itself, which is roughly analogous to the        put it in terms of the commutant, on the collection of
factorization of an integer into prime powers instead          projections in a given factor. If H0 and H1 are subrep-
of individual primes. Let us refer to the prime powers         resentations of the isotypical representation H, then
into which an integer is decomposed as its components.         we write H0 ( H1 if H0 is isomorphic to a subrepre-
They have two characteristic properties: no two com-           sentation of H1 . Murray and von Neumann proved that
ponents share a common factor, and any two (proper)            this is a total ordering: either H0 ( H1 ; or H1 ( H0 ;
factors of the same component do share a common                or both, in which case H0 and H1 are isomorphic. For
factor. Similarly, one can decompose a unitary repre-          example, in a finite-dimensional type I situation, where
sentation into isotypical components, which have analo-        H is a multiple of n copies of a single irreducible repre-
gous properties: no two distinct isotypical components         sentation, each subrepresentati on is the sum of m ⩽ n
share a common (meaning isomorphic) subrepresen-               copies of the irreducible representation, and the order
tation, and any two subrepresentati ons of the same             structure of the (isomorphism classes of) subrepresen-
isotypical component have themselves a common sub-             tations is the same as the order structure of the integers
subrepresentati on. Any unitary representation (finite           {0, 1, . . . , n}.
dimensional or not) can be decomposed into isotypical            Murray and von Neumann showed that the only order
components, and this decomposition is unique.                  structures that can arise from factors are the following
   In finite dimensions, every isotypical representation        very simple ones:
decomposes into a (finite) number of identical irre-
                                                                     Type I,    {0, 1, 2, . . . , n} or {0, 1, 2, . . . , \infty};
ducible subrepresentati ons (like the prime factors of
a prime power). In infinite dimensions this is not so.                Type II, [0, 1] or [0, \infty];
In effect, much of von Neumann algebra theory is                      Type III, {0, \infty}.
concerned with analyzing the many possibilities that           The type of a factor is determined from the order
arise.                                                         structure of its projections according to this table.
                                                                  In the case of factors of type II, the order structure
2.2   Factors
                                                               is that of an interval of real numbers, not integers.
The commutant of an isotypical unitary representation          Any subrepresentati on of an isotypical representation
is called a factor. Concretely, a factor is a von Neu-         of type II can be divided into yet smaller subrepresenta-
mann algebra M whose center, the set of all operators in       tions: we shall never reach an irreducible “atom.” Nev-
M that commute with every member of M, consists of             ertheless, subrepresentati ons can still be compared in
nothing more than scalar multiples of the identity oper-       size by means of the “real-valued dimension” provided
ator. This is because projections in the center of M cor-      by Murray and von Neumann’s theorem.
respond to projections onto combinations of isotypical            A notable example of a factor of type II may be
subrepresentati ons. Every von Neumann algebra can be           obtained as follows. Let G be a group and let H = 2 (G)
uniquely decomposed into factors.                              be a Hilbert space having basis vectors [g] correspond-
   A factor is said to be of type I if it arises as the com-   ing to the elements g ∈ G. Then there is a natural rep-
mutant of an isotypical representation that is a multi-        resentation of G on H derived from the group multi-
ple of a single irreducible representation. Every type I       plication law, called the regular representation: given
factor is isomorphic to the algebra of all bounded oper-       an element g of G, the corresponding unitary map Ug
ators on a Hilbert space. In finite dimensions, every fac-      is the linear operator that takes each basis vector [g ]
tor is of type I, since as we already noted every isotyp-      in 2 (G) to the basis vector [gg ]. The commutant of
ical representation decomposes into a multiple of one          this representation is a von Neumann algebra M. If G
irreducible representation.                                    is a commutative group, then all the operators Ug are
   The existence of unitary representations with more          in the center of M; but if G is far enough from com-
than one decomposition into irreducible components is          mutativity (for instance, if it is a free group), then M

$IV$ . $15$ .

Operator Algebras

will have trivial center and will therefore be a factor. It can be shown that this factor is of type II. There is a simple explicit formula for the real-valued dimension of a subrepresentati on corresponding to an orthogonal projection P $\in$ M. Represent P by an infinite matrix relative to the basis {[g]} of H. Because P commutes with the representation, it is easy to see that the diagonal elements of P are all the same, equal to some real number between $0$ and $1$ . This real number is the dimension of the subrepresentati on corresponding to P . More recently, the Murray-von Neumann dimension theory has found unexpected applications in topology [I.3](/part-01/fundamental-definitions). Many important topological concepts, such as Betti numbers, are defined as the (integervalued) dimensions of certain vector spaces. Using von Neumann algebras, one can define real-valued counterparts of these quantities that have useful additional properties. In this way, one can use von Neumann algebra theory to obtain topological conclusions. The von Neumann algebras used here are typically obtained by the construction of the previous paragraph from the fundamental group [IV.6](/part-04/algebraic-topology) of some compact space.

$2$ . $3$

Modular Theory

Type III factors remained rather mysterious for a long time; indeed, Murray and von Neumann were at first unable to determine whether any such factors existed. They eventually managed to do so, but the fundamental breakthrough in the area came well after their pioneering work, when it was realized that each von Neumann algebra has a special family of symmetries, its so-called modular automorphism group. To explain the origins of modular theory, let us consider once again the von Neumann algebra obtained from the regular representation of a group G. We defined the operators U g o$n^{2}$ (G) by multiplying on the left by elements of G; but we could equally well have considered a representation defined by multiplying on the right. This would have yielded a different von Neumann algebra. So long as we deal only with discrete groups G this difference is unimportant, because the map S : [g]   $\to$ [g − 1] is a unitary operator on H that interchanges the left and right regular representations. But for certain continuous groups the problem arises that the function f (g) may be square-integrable while f (g $- 1$ ) is not. In this situation there is no simple unitary isomorphism analogous to the one for discrete groups. To remedy this, one must introduce a correction factor called the modular function of G.

$517$

The project of modular theory is to show that something analogous to the modular function can be constructed for any von Neumann algebra. This object then serves as an invariant for all factors of type III, whether or not they are explicitly derived from groups. Modular theory exploits a version of the GNS construction (section $1$ . $4$ ). Let M be a self-adjoint algebra of operators. A linear functional φ : M $\to$ C is called a state if it is positive in the sense that φ (T ∗ T) $\ge 0$ , for every T $\in$ M (this terminology is derived from the connection described earlier between Hilbert space theory and quantum mechanics). For the purposes of modular theory we restrict attention to faithful states, those for which φ(T ∗ $T) = 0$ implies $T = 0$ . If φ is a state, then the formula $T^{1}$ , $T^{2}= φ(T^{1}$ ∗ $T^{2})$ defines an inner product on the vector space M. Applying the GNS procedure, we obtain a Hilbert space H M . The first important fact about H M is that every operator T in M determines an operator on H M . Indeed, a vector $V \inH^{M}$ is a limit $V =$ lim $n \to \i\text{nf tyV}^{n}$ of elements in M, and we can apply an operator T $\in$ M to the vector

V using the formula

T $V = lim$ T V n ,

$n \to \i\text{nf ty}$

where on the right-hand side we use multiplication in the algebra M. Because of this observation, we can think of M as an algebra of operators on H M , rather than as an algebra of operators on whatever Hilbert space we began with. Next, the adjoint operation equips the Hilbert space H M with a natural “antilinear” operator S : H M $\to$ H M by the formula ${}^{1} S(V) = V$ ∗ . Since $U^{g}$ ∗ $= U^{g} - {}^{1}$ for the regular representation, this is indeed analogous to the operator S we encountered in our discussion of continuous groups. The important theorem of Minoru Tomita and Masamichi Takesaki asserts that, as long as the original state φ satisfies a continuity condition, the complex powers U t  =  (S ∗ S) it have the property that $U^{t}MU - t = M,$ for all t. The transformations of M given by the formula T   $\to$ U t T U  -  t are called the modular automorphisms of M. Alain Connes proved that they depend only in a rather inessential way on the original faithful state φ. To be precise, changing φ changes the modular automorphisms only by inner automorphisms, that is, transformations of the form $T \to UTU - 1$ , where $U$ is a unitary $1$ . The interpretation of this formula on the completion H M of M is a delicate matter.

518                                                                                     IV. Branches of Mathematics

operator in M itself. The remarkable conclusion is that       understanding of all possible unitary representations.
every von Neumann algebra M has a canonical one-              To shed some light on this problem we turn to a related
parameter group of “outer automorphisms,” which is            but different part of operator algebra theory.
determined by M alone and not by the state φ that is            Consider the collection B(H) of all bounded oper-
used to define it.                                             ators on a Hilbert space H. It has two very differ-
  The modular group of a type I or type II factor             ent structures: algebraic operations, such as addition,
consists only of the identity transformation; however,        multiplication, and formation of adjoints; and analytic
the modular group of a type III factor is much more           structures, such as the operator norm
complex. For example, the set                                              T  = sup{T u : u ⩽ 1}.
      {t ∈ R : T → Ut T U−t is an inner automorphism}        These structures are not independent of one another.
is a subgroup of R and an invariant of M that can             Suppose, for instance, that T  < 1 (an analytic hypoth-
be used to distinguish between uncountably many               esis). Then the geometric series
different type III factors.                                                    S = I + T + T2 + T3 + ···

2.4    Classification                                          converges in B(H), and its limit S satisfies
                                                                              S(I − T ) = (I − T )S = I.
A crowning achievement of von Neumann algebra
theory is the classification of factors that are approxi-      It follows that I − T is invertible in B(H) (an algebraic
mately finite dimensional. These are the factors that are      conclusion). One can easily deduce from this that the
in a certain sense limits of finite-dimensional algebras.      spectral radius r (T ) of any operator T (defined to be
Besides the range of the dimension function, which sep-       the greatest absolute value of any complex number in
arates factors into types, the sole invariant is the mod-     the spectrum of T ) is less than or equal to its norm.
ule. This is a flow on a certain space that is assembled          The remarkable spectral radius formula goes much
from the modular automorphism group.                          further in the same direction. It asserts that r (T ) =
   A lot of attention is currently being given to the long-   limn→\infty T n 1/n . If T is normal (T T ∗ = T ∗ T ), and in
standing problem of distinguishing among the type II          particular if T is self-adjoint, then it may be shown that
factors associated with the regular representations of        T n  = T n . As a result, the spectral radius of T is
groups. Of special interest is the case of free groups        precisely equal to the norm of T . There is therefore a
[IV.10 §2](/part-04/geometric-and-combinatorial-group-theory), around which has flourished the subject of         very close connection between the algebraic structure
free probability theory. Despite intensive effort, some        of B(H), particularly algebraic structure related to the
fundamental questions remain open: at the time of             adjoint operation, and the analytic structure.
writing it is unknown whether the factors associated             Not all the properties of B(H) are relevant to this
with the free groups on two and on three generators           connection between algebra and analysis. A C ∗ -alge-
are isomorphic.                                               bra A is an abstract structure that has enough proper-
   Another important development has been subfactor           ties for the argument of the previous two paragraphs to
theory, which attempts to classify the ways in which          remain valid. A detailed definition would be out of place
factors can be realized within other factors. A remark-       here, but it is worth mentioning that a crucial condition
able and surprising theorem of Vaughan Jones shows            relating norm, multiplication, and ∗-operation is
that, in the type II situation, where continuous values of                    a∗ a = a2 ,   a ∈ A,
dimensions are the norm, the dimensions of subfactors
                                                                          ∗
can in certain situations assume only a discrete range        called the C -identity for A. We also note that special
of values. The combinatorics associated with this result      classes of operators on Hilbert space (unitaries, orthog-
have also appeared in other apparently quite unrelated        onal projections, and so on) all have their counterparts
parts of mathematics, notably knot theory [III.44](/part-03/knot-polynomials).           in a general C ∗ -algebra. For example, a unitary u ∈ A
                                                              satisfies uu∗ = u∗ u = 1, and a projection p satisfies
                                                              p = p2 = p∗ .
                     3   C ∗ -Algebras
                                                                 A simple example of a C ∗ -algebra is obtained by
Von Neumann algebra theory helps describe the struc-          starting with a single operator T ∈ B(H). The collec-
ture of a single representation of a group on a Hilbert       tion of all operators S ∈ B(H) that can be obtained as
space. But in many situations it is of interest to gain an    limits of polynomials in T and T ∗ is a C ∗ -algebra said

$IV$ . $15$ .

Operator Algebras

to be generated by T . The C ∗ - algebra generated by T is commutative if and only if T is normal; this is one reason for the importance of normal operators. Commutative C ∗ - Algebras

$3$ . $1$

If X is a compact [III.9](/part-03/compactness-and-compactication) topological space [III.90](/part-03/topological-spaces), then the collection C (X) of continuous functions f : X $\to$ C comes with natural algebraic operations (inherited from the usual ones on C) and a norm  $f = sup{|f(x)|}$ : $x \in$ X}. In fact, these operations make C (X) into a C ∗ - algebra . The multiplication in C (X) is commutative, because the multiplication of complex numbers is commutative. A basic result of Gelfand and Naimark asserts that every commutative C ∗ - algebra is isomorphic to some C (X). Given a commutative C ∗ - algebra A, one constructs X as the collection of all algebra homomorphisms ξ : A $\to$ C , and the Gelfand transform then associates with a $\in$ A the function ξ   $\to$ ξ (a) from X to C . The Gelfand-Naimark theorem is a foundational result of operator theory. For example, a modern proof of the spectral theorem might proceed as follows. Let T be a self-adjoint or normal operator on a Hilbert space H, and let A be the commutative C ∗ - algebra generated by T . By the Gelfand-Naimark theorem, A is isomorphic to C (X) for some space X, which may in fact be identified with the spectrum of T . If v is a unit vector in H, then the formula S   $\to$  Sv, v  defines a state φ on A. The GNS space associated with this state is a Hilbert space of functions on X, and elements of $A = C$ (X) act as multiplication operators. In particular, T acts as a multiplication operator. A small additional argument shows that T is unitarily equivalent to this multiplication operator, or at least to a direct sum of such operators (which is itself a multiplication operator on a larger space). Continuous functions can be composed: if $f$ and $g$ are continuous functions (with the range of g contained in the domain of f), then f ◦g is also a continuous function. Since the Gelfand-Naimark theorem tells us that any self-adjoint element of a C ∗ - algebra A sits inside an algebra isomorphic to the continuous functions on the spectrum of a, we conclude that if a $\in$ A is selfadjoint, and if f is a continuous function defined on the spectrum of a, then an operator f (a) exists in A. This functional calculus is a key technical tool in C ∗ - algebra theory. For example, suppose that u $\in$ A is unitary and u $- 1< 2$ . Then the spectrum of $u$ is a subset of the

$519$

unit circle in C that does not contain $- 1$ . One can define a continuous branch of the complex logarithm function on such a subset, and it follows that there is an element $a =$ log $u$ of the algebra such that $a = - a$ ∗ and $u = e^{a}$ . The path $t \to eta$ , $0 \le t \le 1$ , is then a continuous path of unitaries in A connecting u to the identity. Thus every unitary sufficiently close to the identity is connected to the identity by a unitary path. Further Examples of C ∗ - Algebras

$3$ . $23$ . $2$ . $1$

The Compact Operators

An operator on a Hilbert space has finite rank if its range is a finite-dimensional subspace. The operators of finite rank form an algebra, and its closure is a C ∗ - algebra called the algebra of compact operators and denoted K. One can also view K as a “limit” of matrix algebras $M^{1}(C) \to M^{2}(C) \to M^{3}(C) \to$ · · · , where each matrix algebra is included in the next by

$A 0A\to$ / 0 0

Many natural operators are compact, including the integral operators that arose in Fredholm’s theory. The identity operator on a Hilbert space is compact if and only if that Hilbert space is finite dimensional.

$3$ . $2$ . $2$

The CAR Algebra

The presentation of K as a limit of matrix algebras leads one to consider other “limits” of a similar sort. (We shall not attempt a formal definition of these limits here, but it is important to note that the limit of a sequence $A^{1} \to A^{2} \to A^{3} \to$ · · · depends on the homomorphisms $A^{i} \to A^{i} + {}^{1}$ as well as on the algebras $A^{i}$ .) One particularly important example is obtained as the limit $M^{1}(C) \to M^{2}(C) \to M^{4}(C) \to$ · · · , where each matrix algebra is included in the next by

$A 0A\to$ / $0 A$

This is called the CAR algebra, because it contains elements that represent the canonical anticommutation relations that arise in quantum theory. C ∗ - algebras find several applications to quantum field theory and quantum statistical mechanics which extend von Neumann’s formulation of quantum theory in terms of Hilbert space.

520                                                                                         IV. Branches of Mathematics

3.2.3   Group C ∗ -Algebras                                  a copy of Aα . (Note the contrast with the case of a single
                                                             unitary: 1 is a unitary operator, but it does not generate
If G is a group and g → Ug is a unitary representation
                                                             a copy of C ∗ (Z).) This allows us to give a concrete rep-
of G on a Hilbert space H, we can consider the small-
                                                             resentation of Aα on the Hilbert space L2 (S 1 ), where U
est C ∗ -algebra of operators on H containing all the Ug ;
                                                             is the rotation through 2π α and V is multiplication by
this is called the C ∗ -algebra generated by the repre-
                                                             z : S 1 → C.
sentation. An important example is the regular repre-
sentation on the Hilbert space 2 (G) generated by G,
which we defined in section 2.2. The C ∗ -algebra that                         4    Fredholm Operators
it generates is denoted Cr∗ (G). The subscript “r” refers
                                                             A Fredholm operator between Hilbert spaces is defined
to the regular representation. Considering other repre-
                                                             to be a bounded operator T for which the kernel
sentations leads to other, potentially different, group
                                                             and cokernel are finite dimensional. This means that
C ∗ -algebras.
                                                             the homogeneous equation T u = 0 admits only fi-
   Consider, for example, the case G = Z. Since this is
                                                             nitely many linearly independent solutions, while the
a commutative group, its C ∗ -algebra is also commuta-
                                                             inhomogeneous equation T u = v admits a solution if v
tive, and thus it is isomorphic to C(X) for a suitable X,
                                                             satisfies a finite number of linear conditions. The termi-
by the Gelfand–Naimark theorem. In fact, X is the unit
                                                             nology arises from Fredholm’s original work on integral
circle S 1 , and the isomorphism
                                                             equations; he showed that if K is an integral operator,
                     C(S 1 )  Cr∗ (Z)                       then I + K is a Fredholm operator.
takes a function on the circle to its Fourier series.          For the operators that Fredholm considered, the
  States defined on group C ∗ -algebras correspond            dimensions of the kernel and cokernel must be equal,
to positive-definite functions defined on groups, and          but in general this need not be so. The unilateral
hence to unitary group representations. In this way new      shift operator S, which maps the infinite “row vec-
representations may be constructed and studied. For          tor” (a1 , a2 , a3 , . . . ) to (0, a1 , a2 , . . . ), is an example.
example, using states of group C ∗ -algebras it is possi-    The equation Su = 0 has only the zero solution, but
ble to give to the set of irreducible representations of     the equation Su = v has a solution only if the first
G the structure of a topological space.                      coordinate of the vector v is zero.
                                                               The index of a Fredholm operator is defined to be the
3.2.4   The Irrational Rotation Algebra                      integer difference

The algebra C ∗ (Z) is generated by a single unitary ele-           index(T ) = dim(ker(T )) − dim(coker(T )).
ment U (corresponding to 1 ∈ Z). Moreover, it is the
                                                             For example, every invertible operator is a Fredholm
universal example of such a C ∗ -algebra, which is to say
                                                             operator of index 0, whereas the unilateral shift is a
that given any C ∗ -algebra A and unitary u ∈ A, there is
                                                             Fredholm operator of index −1.
one and only one homomorphism C ∗ (Z) → A sending
U to u. In fact, this is nothing other than the functional
                                                             4.1   Atkinson’s Theorem
calculus homomorphism for the unitary u.
  If instead we consider the universal example of a C ∗ -    Consider the two systems of linear equations
algebra generated by two unitaries U , V subject to the            ⎧             ⎫          ⎧             ⎫
                                                                   ⎨ 2.1 x + y = 0⎬          ⎨ 2 x + y = 0⎬
relation                                                                            and                     .
                                                                   ⎩ 4 x + 2 y = 0⎭           ⎩ 4 x + 2 y = 0⎭
                       U V = e2π iα V U ,
where α is irrational, we obtain a noncommutative C ∗ -      Although the coefficients of these equations are very
algebra called the irrational rotation algebra Aα . The      close, the dimensions of their kernels are quite differ-
irrational rotation algebras have been studied inten-        ent: the left-hand system has only the zero solution,
sively from a number of points of view. Using K-theory       whereas the right-hand system has the nontrivial solu-
(see below) it has been shown that Aα1 is isomorphic to      tions (t, −2 t). Thus the dimension of the kernel is an
Aα2 if and only if α1 ± α2 is an integer.                    unstable invariant of the system of equations. A sim-
   It can be shown that the irrational rotation algebra      ilar remark applies to the dimension of the cokernel.
is simple, which implies that any pair of unitaries U, V     By contrast, the index is stable, despite its definition as
satisfying the commutation relation above will generate      the difference of two unstable quantities.

IV.15.   Operator Algebras                                                                                       521

   An important theorem of Frederick Atkinson gives        then the associated Toeplitz operator is the unilateral
precise expression to these stability properties. Atkin-   shift S that we encountered earlier (with index −1). The
son’s theorem asserts that an operator T is Fredholm       Toeplitz index theorem is a very special case of the
if and only if it is invertible modulo compact opera-      atiyah–singer index theorem [V.2](/part-05/the-atiyahsinger-index-theorem), which gives a
tors. This implies that any operator that is sufficiently    topological formula for the indices of various Fredholm
close to a Fredholm operator is itself a Fredholm oper-    operators that arise in geometry.
ator with the same index, and that if T is a Fredholm
operator and K is a compact operator, then T + K is        4.3   Essentially Normal Operators
a Fredholm operator with the same index as T . Notice
                                                           Atkinson’s theorem suggests that compact perturba-
that, since integral operators are compact operators,
                                                           tions of an operator are in some sense “small.” This
this contains Fredholm’s original theorem as a special
                                                           leads to the study of properties of an operator that
case.
                                                           are preserved by compact perturbation. For instance,
4.2   The Toeplitz Index Theorem                           the essential spectrum of an operator T is the set of
                                                           complex numbers \lambda for which T − \lambda I fails to be Fred-
topology [I.3 §6.4](/part-01/fundamental-definitions) studies those properties of mathe-
                                                           holm (that is, invertible modulo compact operators).
matical systems that remain the same when the sys-
                                                           Two operators T1 and T2 are essentially equivalent if
tem is (continuously) perturbed. Atkinson’s theorem
                                                           there is a unitary operator U such that UT1 U ∗ and T2
tells us that the Fredholm index is a topological quan-
                                                           differ by a compact operator. A beautiful theorem orig-
tity. In many contexts it is possible to obtain a for-
                                                           inally due to weyl [VI.80](/part-06/hermann-weyl-18851955) asserts that two self-adjoint
mula for the index of a Fredholm operator in terms
                                                           or normal operators are essentially equivalent if and
of other, apparently quite different, topological quan-
                                                           only if they have the same essential spectrum.
tities. Formulas of this sort often indicate deep con-
                                                              One might argue that the restriction to normal opera-
nections between analysis and topology and often have
                                                           tors in this theorem is inappropriate. Since we are con-
powerful applications.
                                                           cerned with properties that are preserved by compact
   The simplest example involves the Toeplitz operators.
                                                           perturbation, would it not be more appropriate to con-
A Toeplitz operator has a matrix with the special form
               ⎛                             ⎞             sider essentially normal operators—that is, operators
                b0    b1    b2    b3    ···                T for which T ∗ T − T T ∗ is compact? This apparently
               ⎜                             ⎟
               ⎜b−1 b0      b1    b2    · · ·⎟
               ⎜                             ⎟             modest variation leads to an unexpected result. The
               ⎜b                       · · ·⎟
          T =⎜ ⎜
                  −2  b−1 b0      b1         ⎟.
                                             ⎟             unilateral shift S is an example of an essentially nor-
               ⎜b−3 b−2 b−1 b0          · · ·⎟
               ⎜                             ⎟             mal operator. Its essential spectrum is the unit circle,
               ⎝ .     ..    ..    ..    .. ⎠
                  ..                       .               as is the essential spectrum of its adjoint; however, S
                        .     .     .
                                                           and S ∗ cannot be essentially equivalent, because S has
In other words, as you go down each diagonal of
                                                           index −1 and S ∗ has index +1. Thus some new ingredi-
the matrix, the entries remain constant. The sequence
                                                           ent, beyond the essential spectrum, is needed to clas-
of coefficients {bn }\infty n=−\infty defines a function f (z) =
\infty           −n on the unit circle in the complex plane,
                                                           sify essentially normal operators. In fact, it follows eas-
  n=−\infty bn z                                                ily from Atkinson’s theorem that if essentially normal
called the symbol of the Toeplitz operator. It can be
                                                           operators T1 and T2 are to be essentially equivalent,
shown that a Toeplitz operator whose symbol is a con-
                                                           then not only must they have the same essential spec-
tinuous function which is never zero is Fredholm. What
                                                           trum but also, for every \lambda not in the essential spectrum,
is its index?
                                                           the Fredholm index of T1 −\lambda I must be equal to the Fred-
   The answer is given by thinking about the symbol
                                                           holm index of T2 − \lambda I. The converse of this statement
as a mapping from the unit circle to the nonzero com-
                                                           was proved by Larry Brown, Ron Douglas, and Peter
plex numbers: in other words, as a closed path in the
                                                           Fillmore in the 1970 s, using entirely novel techniques
nonzero complex plane. The fundamental topological
                                                           that led to a new era of interaction between C ∗ -algebra
invariant of such a path is its winding number: the
                                                           theory and topology.
number of times it “goes around” the origin in the
counter clockwise direction. It can be proved that the
                                                           4.4 K-Theory
index of a Toeplitz operator with nonzero symbol f
is minus the winding number of f . For example, if f       A remarkable feature of the Brown–Douglas–Fillmore
is the function f (z) = z (with winding number +1),        work was the appearance within it of tools from

522                                                                                       IV. Branches of Mathematics

algebraic topology [IV.6](/part-04/algebraic-topology), notably K-theory. Remem-           principal organizing problem in this area is the Baum–
ber that, according to the Gelfand–Naimark theorem,           Connes conjecture, which proposes a description of the
the study of (suitable) topological spaces and the study      K-theory of group C ∗ -algebras in terms of invariants
of commutative C ∗ -algebras are one and the same; all        familiar in algebraic topology. Most of the progress on
the techniques of topology can be transferred, via the        the conjecture to date is the result of work of Gen-
Gelfand–Naimark isomorphism, to commutative C ∗ -             nadi Kasparov, who dramatically broadened the origi-
algebras. Having made this observation, it is natural         nal discoveries of Brown, Douglas, and Fillmore to cover
to ask which of these techniques can be extended fur-         not just single essentially normal operators but also
ther, to provide information about all C ∗ -algebras,         noncommuting systems of operators, that is, C ∗ -alge-
commutative or not. The first and best example is              bras. Kasparov’s work is now a central component of
K-theory.                                                     operator algebra theory.
   In its most basic form, K-theory associates with each
C ∗ -algebra A an Abelian group K(A), and with each                     5    Noncommutative Geometry
homomorphism of C ∗ -algebras a corresponding homo-
morphism of Abelian groups. The building blocks for           descartes’s [VI.11](/part-06/ren-descartes-15961650) invention of coordinates showed
K(A) can be thought of as generalized Fredholm oper-          that one can do geometry by thinking about coordinate
ators associated with A; the generalization is that these     functions rather than directly thinking about points
operators act on “Hilbert spaces” in which the complex        in space and their inter relationships: these coordinate
scalars are replaced by elements of the C ∗ -algebra A.       functions are the familiar x, y, and z. The Gelfand–
The group K(A) itself is defined to be the collection of       Naimark theorem can be viewed as one expression of
connected components of the space of all such general-        this idea of passing from the “point picture” of a space
ized Fredholm operators. Thus if A = C, for instance (so      X to the “field picture” of the algebra C(X) of func-
that we are dealing with classical Fredholm operators),       tions on it. The success of K-theory in operator algebras
then K(A) = Z. This follows from the fact that two Fred-      invites us to ponder whether the field picture might be
holm operators are connected by a path of Fredholm            more powerful than the point picture, since K-theory
operators if and only if they have the same index.            can be applied to noncommutative C ∗ -algebras which
   One of the great strengths of K-theory is that one         may not have any “points” (homomorphisms to C) at all.
can construct K-theory classes from a variety of differ-          One of the most exciting research frontiers in oper-
ent ingredients. For example, every projection p ∈ A          ator algebra theory is reached along a path which
defines a class in K(A) which can be thought of as a           develops these thoughts. The noncommutative geom-
“dimension” for the range of p. This connects K-theory        etry program of Connes takes seriously the idea that a
to the classification of factors (section 2.2), and has        general C ∗ -algebra should be thought of as an algebra
become an important tool in the effort to classify vari-       of functions on a “noncommutative space,” and goes on
ous families of C ∗ -algebras, such as the irrational rota-   to develop “noncommutative” versions of many ideas
tion algebras. (It was at one time thought that the irra-     from geometry and topology, as well as completely
tional rotation algebras might not contain any non-           new constructions that have no commutative counter-
trivial projections at all: the construction of such pro-     part. Noncommutative geometry begins with the cre-
jections by Marc Rieffel was an important step in the          ative reformulation of ideas from ordinary geometry
development of C ∗ -algebra K-theory.) Another beauti-        in ways that involve only operators and functions, but
ful example is George Elliott’s classification theorem         not points.
for locally finite-dimensional C ∗ -algebras like the CAR         Consider, for instance, the circle S 1 . The algebra
algebra; they are completely determined by K-theoretic        C(S 1 ) reflects all the topological properties of S 1 , but to
invariants.                                                   incorporate its metric (distance-related) properties as
   The problem of computing the K-theory groups of            well we look not just at C(S 1 ) but at the pair consisting
noncommutative C ∗ -algebras, particularly group C ∗ -        of the algebra C(S 1 ) and the operator D = i d/dθ on the
algebras, has turned out to have important connections        Hilbert space H = L2 (S 1 ). Notice that if f is a function
with topology. In fact, some key advances in topol-           on the circle (considered as a multiplication operator
ogy have come from C ∗ -algebra theory in this way,           on H), then the commutator Df − f D is also a multipli-
thereby allowing operator algebraists to repay some of        cation operator, this time by i df /dθ. It follows that
the debt they owe to the topologists for K-theory. The        ordinary measurements of angular distance between

