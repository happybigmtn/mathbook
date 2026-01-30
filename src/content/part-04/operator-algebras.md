# Operator Algebras

510

Dennis Sullivan. They are indispensable for discussing
change of complex structure, straightening, holomor-
phic motion, surgery, and many other phenomena. The
interested reader is referred to the books listed below.
The first two contain expository papers, the third is
a graduate textbook, and the fourth is a collection of
papers. They all contain many further references.
Acknowledgments. The computer drawings in this arti-
cle were obtained from a program written by Christian
Henriksen.

Further Reading

Devaney, R. L., and L. Keen, eds. 1989. Chaos and Frac-
  tals. The Mathematics Behind the Computer Graphics. Pro-    kji form a matrix of coefficients and the problem is to
  ceedings of Symposia in Applied Mathematics, volume 39.     solve for the ui in terms of the fj . The general theorem
  Providence, RI: American Mathematical Society.

  Behind the Mandelbrot and Julia Sets. Proceedings of Sym-   satisfy if a solution is to exist is equal to the number of
  posia in Applied Mathematics, volume 49. Providence, RI:
  American Mathematical Society.
Lei, T., ed. 2000. The Mandelbrot Set, Theme and Varia-
  tions. London Mathematical Society Lecture Note Series,     vocabulary, the dimension of the kernel [I.3 §4.1](/part-01/fundamental-definitions) of
  volume 274. Cambridge: Cambridge University Press.
Milnor, J. 1999. Dynamics in One Complex Variable. Weis-
  baden: Vieweg.

IV.15 Operator Algebras

We can ask two basic questions about any equation,
or system of equations: is there a solution, and, if
there is, is it unique? Experience with finite systems
of linear equations indicates that the two questions are
interconnected. Consider for instance the equations

Notice that the left-hand side of the third equation is
the sum of the left-hand sides of the first two. As a
result, no solution to the system exists unless a+b = c.
But if a + b = c, then any solution of the first two
equations is also a solution of the third; and in any
linear system involving more unknowns than equa-
tions, solutions, when they exist, are never unique. In
the present case, if (x, y, z) is a solution, then so is
(x + t, y + t, z + t), for any t. Thus the same phe-
nomenon (a linear relation among the equations) that

IV. Branches of Mathematics
prevents the system from admitting solutions in some
cases also prevents solutions from being unique in
other cases.
To make the relation between existence and unique-
ness of solutions more precise, consider a general
system of linear equations of the form
k11 u1 + k12 u2 + · · · + k1 n un = f1 ,
k21 u1 + k22 u2 + · · · + k2 n un = f2 ,
..
.
kn1 u1 + kn2 u2 + · · · + knn un = fn
consisting of n equations in n unknowns. The scalars
illustrated by our particular numerical example above
. 1994. Complex Dynamical Systems. The Mathematics
arbitrary constants appearing in the general solution
when a solution does exist. To use a more technical
the matrix K = {kji } is equal to the dimension of its
cokernel. In the example, these numbers are both 1.
A little more than a hundred years ago, fredholm
[VI.66](/part-06/ivar-fredholm-18661927) made a study of integral equations of the type
u(y) −    k(y, x)u(x) dx = f (y).
Nigel Higson and John Roe
the problem was to solve for the function u in terms of
1   The Beginnings of Operator Theory
limit of finite sums, Fredholm’s equation is an infinite-
dimensional counterpart of the finite-dimensional lin-
ear systems considered above, in which vectors with
n components are replaced by functions with values
at infinitely many different points x. (Strictly speaking,
Fredholm’s equation is analogous to a matrix equation
2 x + 3 y − 5 z = a,
of the type u − Ku = f rather than Ku = f . The altered
x − 2 y + z = b,                         form of the left-hand side has no effect on the over all
3 x + y − 4 z = c.                          behavior of the matrix equation, but it does consider-
ably alter the behavior of the integral equation. As we
shall see, Fredholm was fortunate to work with a class
of equations whose behavior mirrors that of matrix
equations very closely.)
A very simple example is
1
u(y) −        u(x) dx = f (y).
0
To solve this equation, it helps to observe that the quan-
1
tity 0 u(x) dx, when thought of as a function of y,
is a constant. Thus in the homogeneous case (f ≡ 0),

IV.15.   Operator Algebras

the only possible solutions for u(y) are the constant
functions. On the other hand, for a general function
f , solutions exist if and only if the single linear con-

dition 0 f (y) dy = 0 is satisfied. So in this example
the dimension of the kernel and the dimension of the
cokernel are both 1. Fredholm set out on a systematic
exploration of the analogy between matrix theory and
integral equations that this example suggests. He was
able to prove that, for equations of his type, the dimen-
sions of the kernel and of the cokernel are always finite
and equal.
   Fredholm’s work sparked the imagination of hilbert
[VI.63](/part-06/david-hilbert-18621943), who made a detailed study of the integral
operators that transform u(y) into k(y, x)u(x) dx,
in the special case where the real-valued function k
is symmetric, meaning that k(x, y) = k(y, x). The
finite-dimensional counterpart of Hilbert’s theory is the
theory of real symmetric matrices. Now if K is such
a matrix, then a standard result from linear algebra
asserts that there is an orthonormal basis consisting
of eigenvectors [I.3 §4.3](/part-01/fundamental-definitions) for K, or equivalently that
there is a unitary matrix U such that U −1 T U is diago-
nal. (Unitary means that U is invertible and preserves
the lengths of vectors: Uv = v for all vectors v.)
Hilbert obtained an analogous theory for all symmet-
ric integral operators. He showed that there exist func-
tions u1 (y), u2 (y), . . . and real numbers λ1 , λ2 , . . .
such that

Thus un (y) is an eigenfunction for the integral opera-
tor, with eigenvalue . ambda n .
   In most cases it is hard to calculate un and . ambda n
explicitly, but calculation is possible when k(x, y) =
φ(x − y) for some periodic function φ. If the range
of integration is [0, 1] and the period of φ is 1, then
the eigenfunctions are cos(2 kπ y), k = 0, 1, 2, . . . , and
sin(2 kπ y), k = 1, 2, . . . . In this case, the theory of
fourier series [III.27](/part-03/the-fourier-transform) tells us that a general function
f (y) on [0, 1] can be expanded as the sum of a series

  (ak cos 2 kπ y + bk sin 2 kπ y) of cosines and sines.
Hilbert showed that, in general, there is an analogous
expansion

in terms of the eigenfunctions for any symmetric inte-
gral operator. In other words, the eigenfunctions form
a basis, just as in the finite-dimensional case. Hilbert’s
result is now called the spectral theorem for symmetric
integral operators.

511
1.1   From Integral Equations to Functional Analysis
Hilbert’s spectral theorem led to an explosion of activ-
1
areas of mathematics (including, for example, the
dirichlet problem [IV.12 §1](/part-04/analysis) in partial differential
equations and the representation theory of com-
pact groups [IV.9 §3](/part-04/representation-theory)). It was soon recognized that
these operators are best viewed as linear transforma-
tions on the hilbert space [III.37](/part-03/bayesian-analysis) of all functions u(y)
such that |u(y)|2 dy < . nfty. Such functions are called
square-integrable, and the collection of all of them is
denoted L2 [0, 1].
With the important concept of Hilbert space avail-
able, it became convenient to examine a much broader
range of operators than the integral operators ini-
tially considered by Fredholm and Hilbert. Since Hilbert
spaces are vector spaces [I.3 §2.3](/part-01/fundamental-definitions) and metric spaces
[III.56](/part-03/metric-spaces), it made sense to look first at operators from a
Hilbert space to itself that are both linear and continu-
ous: these are usually called bounded linear operators.
The analogue of the symmetry condition k(x, y) =
k(y, x) on integral operators is the condition that a
bounded linear operator T be self-adjoint, which is to
say that T u, v = u, T v for all vectors u and v in
the Hilbert space (the angle brackets denote the inner
product). A simple example of a self-adjoint operator
is the multiplication operator by a real-valued function
m(y); this is the operator M defined by the formula
k(y, x)un (x) dx = . ambda n un (y).
ter part to a multiplication operator is a diagonal matrix
K, which multiplies the jth component of the vector by
the matrix entry kjj .)
Hilbert’s spectral theorem for symmetric integral
operators tells us that every such operator can be given
a particularly nice form: with respect to a suitable
“basis” of L2 [0, 1], namely a basis of eigenfunctions,
it will have an infinite diagonal matrix. More over, the
basis vectors can be chosen to be orthogonal to each
other. For a general self-adjoint operator, this is not
true. Consider, for instance, the multiplication operator
from L2 [0, 1] to itself that takes each square-integrable
function u(y) to the function yu(y). This operator
                                  has no eigenvectors [I.3 §4.3](/part-01/fundamental-definitions), since if . ambda is an eigen-
f (y) =
value [I.3 §4.3](/part-01/fundamental-definitions), then we need yu(y) = . ambda u(y) for
every y, which implies that u(y) = 0 for every y not
equal to λ, and hence that |u(y)|2 dy = 0. However,
this example is not particularly worrying, since a mul-
tiplication operator of this kind is a sort of continuous
analogue of the operator defined by a diagonal matrix.

512

It turns out that if we enlarge our concept of “diagonal”     as its own success or, then the read out will be either
to include multiplication operators, then all self-adjoint    00000 · · · or 111111 · · · , depending on whether or not
operators are “diagonalizable,” in the sense that, after a    we chose a square with a piece on it to begin with. But if
suitable “change of basis,” they become multiplication
operators.
   To make this statement precise, we need the notion
of the spectrum [III.86](/part-03/the-spectrum) of an operator T . This is the set   squares, as expected.
of complex numbers . ambda for which the operator T − . ambda I
does not have a bounded inverse (here I is the iden-
tity operator on Hilbert space). In finite dimensions the
spectrum is precisely the set of eigenvalues, but in infi-     board, and thus all the squares move past our obser-
nite dimensions this is not always so. Indeed, where as
every symmetric matrix has at least one eigenvalue, a
self-adjoint operator, as we have just seen, need not.
As a result of this, the spectral theorem for bounded
self-adjoint operators is phrased not in terms of eigen-
values but in terms of the spectrum. One way of for-
mul at ing it is to state that any self-adjoint operator
T is unitarily equivalent to a multiplication operator
(Mu)(y) = m(y)u(y), where the closure of the range
of the function m(y) is the spectrum of T . Just as in the    rotated copy of S, the second rotated copy of S, and
finite-dimensional case, a unitary operator is an invert-
ible operator U that preserves the lengths of vectors. To     One can show that (for nearly every x) the time average
say that T and M are unitarily equivalent is to say that
there is some unitary map U, which we can think of as
an analogue of a change-of-basis matrix, such that T =
U −1 MU . This generalizes the statement that any real
symmetric matrix is unitarily equivalent to a diagonal
matrix with the eigenvalues along the diagonal.
1.2   The Mean Ergodic Theorem
A beautiful application of the spectral theorem was
found by von neumann [VI.91](/part-06/john-von-neumann-19031957). Imagine a check er-
board on which are distributed a certain number of
checkers. Imagine that for each square there is des-
ignated a “success or” square (in such a way that no
two squares have the same success or), and that every
minute the checkers are rearranged by moving each one
to its success or square. Now focus attention on a single
square and each minute record with a 1 or 0 whether
or not there is a piece on the square. This produces a
succession of readings R1 , R2 , R3 , . . . like this:

We might expect that over time, the average number
of positive readings Rj = 1 will converge to the num-

ber of pieces on the board divided by the number of
squares. If the rearrangement rule is not complicated
enough, then this will not happen. For example, in the
most extreme case, if the rule designates each square

IV. Branches of Mathematics
the rule is sufficiently complicated, then the “time aver-
n
age” (1/n) j=1 Rj will indeed converge to the num-
ber of pieces on the board divided by the number of
The checkerboard example is elementary, since in
fact the only “sufficiently complicated” rules in this
finite case are cyclic permutations of the squares of the
vation post in succession. However, there are related
examples where one observes only a small fraction of
the data. For instance, replace the set of squares on a
checkerboard with the set of points on a circle, and in
place of the checkers, imagine that a subset S of a cir-
cle is marked as occupied. Let the rearrangement rule
be the rotation of points on the circle through some
irrational number of degrees. Stationed at a point x of
the circle, we record whether x belongs to S, the first
so on to obtain a sequence of 0 or 1 readings as before.
of our observations will converge to the proportion of
the circle occupied by S.
Similar questions about the relationship between
time and space averages had arisen in thermodynamics
and elsewhere, and the expectation that time and space
averages should agree when the rearrangement rule
is sufficiently complex became known as the ergodic
hypothesis.
Von Neumann brought operator theory to bear on
this question in the following way. Let H be the Hilbert
space of functions on the squares of the checkerboard,
or the Hilbert space of square-integrable functions on
the circle. The rearrangement rule gives rise to a unitary
operator U on H by means of the formula
(Uf )(y) = f (φ−1 (y)),
where φ is the function describing the rearrangement.
Von Neumann’s ergodic theorem asserts that if no non-
constant function in H is fixed by U (this is one way
of saying that the rearrangement rule is “sufficiently
complicated”), then, for every function f ∈ H, the limit
00100110010110100100 · · · .
1  j
n
lim
n→. nfty n
j=1
exists and is equal to the constant function whose value
every where is the average value of f . (To apply this to
our examples, take f (x) to be the function that is 1 if
the point x is occupied and 0 otherwise.)

IV.15.   Operator Algebras

   Von Neumann’s theorem can be deduced from a spec-
tral theorem for unitary operators that is analogous to
the spectral theorem for self-adjoint operators. Every
unitary operator can be reduced to a multiplication
operator, not by real-valued functions but by functions
whose values are complex numbers of absolute value 1.
The key to the proof then becomes a statement about
complex numbers of absolute value 1: if z is such a
complex number, different from 1, then the expression

(1/n) j=1 z j approaches zero as n → . nfty. This in turn
is easily proved using the formula for the sum of a geo-     cally not result in determinate values for both of them.

metric series, j=1 z j = z(1 − zn )/(1 − z). (More detail    A famous example is provided by the operators P and
can be found in ergodic theorems [V.9](/part-05/ergodic-theorems).)
1.3   Operators and Quantum Theory
Von Neumann realized that Hilbert spaces and their
operators provide the correct mathematical tools to
formalize the laws of quantum mechanics, introduced
in the 1920 s by Heisenberg and Schrödinger.
   The state of a physical system at any given instant
is the list of all the information needed to determine
its future behavior. If, for instance, the system con-
sists of a finite number of particles, then classically its   particle simultaneously to have a determinate momen-
state consists of the list of the position and momen-
tum vectors of all the constituent particles. By contrast,
in von Neumann’s formulation of quantum mechan-
ics one associates with each physical system a Hilbert
space H, and a state of the system is represented by a
unit vector u in H. (If u and v are unit vectors and v
is a scalar multiple of u, then u and v determine the
same state.)
   Associated with each observable quantity (perhaps
the total energy of the system, or the momentum of one
particle within the system) is a self-adjoint operator Q
on H whose spectrum is the set of all observed values
of that quantity (hence the origin of the term “spec-
trum”). States and observables are related as follows:
when a system is in the state described by a unit vector
u ∈ H, the expected value of the observable quantity
corresponding to a given self-adjoint operator Q is the
inner product Qu, u. This may not be a value that
is ever actually measured: rather, it is the average of
values that are obtained from many repeated experi-
ments with the system when it is in the given state u.
The relation between states and observables reflects
the paradoxical behavior of quantum mechanics: it is
possible, and in fact typical, for a system to exist in
a “superposed” state, under which repeated identical
experiments produce distinct out comes. A measure-

513
ment of an observable quantity will produce a deter-
minate out come if and only if the state of the system
is an eigenvector for the operator associated with that
quantity.
A distinctive feature of quantum theory is that the
operators associated with different observables typi-
cally do not commute with one another. If two oper-
ators do not commute, then they will typically have no
eigenvectors in common, and, as a result, simultaneous
n
measurements of two different observables will typi-
n
Q associated with the position and momentum of a par-
ticle moving along a line. They satisfy the Heisenberg
commutation relation
QP − P Q = iI,
where  is a certain physical constant. (This is an in-
stance of a general principle which relates the non-
commutativity of observables in quantum mechanics
to the Poisson bracket of the corresponding observ-
ables in classical mechanics: see mirror symmetry
[IV.16 §§2.1.3, 2.2.1].) As a result, it is impossible for the
tum and position. This is the uncertainty principle.
It turns out that there is an essentially unique
way of representing the Heisenberg commutation rela-
tion using self-adjoint operators on Hilbert space: the
Hilbert space H must be L2 (R); the operator P must be
−i d/dx; and the operator Q must be multiplication
by x. This theorem allows one to determine explicitly
the observable operators for simple physical systems.
For example, in a system consisting of a particle on a
line subject to a force directed toward the origin which
is proportional to the distance from the origin (as if
the particle were attached to a spring, anchored at the
origin), the operator for total energy is
2 d 2    k
E=−
2 m dx 2    2
where k is a constant which determines the over all
strength of the force. The spectrum of this operator
is the set
1
{(n + 2 )(k/m)1/2 : n = 0, 1, 2, . . . }.
These are therefore the possible values for the total
energy of the system. Notice that the energy can
assume only a discrete set of values. This is another
characteristic and fundamental feature of quantum
theory.
Another important example is the operator of total
energy for the hydrogen atom. Like the operator above,

514

this may be realized as a certain explicit partial dif-
ferential operator. It can be shown that the eigen-
values of this operator form a sequence proportional
to {−1, − 14 , − 19 , . . . }. A hydrogen atom, when disturbed,   positivity property, namely
may release a photon, resulting in a drop in its total
energy. The released photon will have energy equal to
the difference between the energies of the initial and
final states of the atom, and therefore it is propor-
tional to a number of the form 1/n2 − 1/m2 . When
light from hydrogen is passed through a prism or
diffraction grating, bright lines are indeed observed at
wavelengths corresponding to these possible energies.
Spectral observations of this sort provide experimental
confirmation for quantum mechanical predictions.
   So far we have discussed states of a quantum sys-
tem only at a single instant. However, quantum systems
evolve in time, just as classical systems do: to describe
this evolution we need a law of motion. The time evo-
lution of a quantum system is represented by a family
of unitary operators Ut : H → H, parametrized by the
real numbers. If the system is in an initial state u, it
will be in the state Ut u after t units of time. Because
the passage of s units of time followed by t further
units is the same as the passage of s + t units, the uni-
tary operators Ut satisfy the group law Us Ut = Us+t .
An important theorem of Marshall Stone asserts that
there is a one-to-one correspondence between unitary
groups {Ut } and self-adjoint operators E given by the
formula

The quantum law of motion is that the generator E cor-
responding in this way to time evolution is the opera-
tor associated with the observable “total energy.” When
E is realized as a differential operator on a Hilbert
space of functions (as in the examples above), this state-
ment becomes a differential equation, the Schrödinger
equation.

1.4   The GNS Construction
The time-evolution operators Ut of quantum mechanics
satisfy the law Us Ut = Us+t . More generally, we define
a unitary representation of a group [I.3 §2.1](/part-01/fundamental-definitions) G to be a
family of unitary operators Ug , one for each g ∈ G, sat-
i sfy ing the law Ug1 g2 = Ug1 Ug2 for all g1 , g2 ∈ G. Origi-
nally introduced by frobenius [VI.58](/part-06/ferdinand-georg-frobenius-18491917) as a tool for the
study of finite groups, representation theory [IV.9](/part-04/representation-theory)
has become indispensable in mathematics and physics
wherever the symmetries of a system must be taken
into account.

IV. Branches of Mathematics
If U is a unitary representation of G and v is a vector,
then σ : g → Ug v, v is a function defined on G. The
law Ug1 g2 = Ug1 Ug2 implies that σ has an important

         
ag1 ag2 σ (g1−1 g2 ) =  ag Ug v  ⩾ 0,
g1 , g2 ∈G
for any scalars ag ∈ C. A function defined on G and
having this positivity property is said to be positive
definite. Conversely, from a positive-definite function
one can build a unitary representation. This GNS con-
struc tion (in honor of Israel Gelfand, Mark Naimark,
and Irving Segal) begins by considering the group ele-
ments themselves as basis vectors in an abstract vector
space. We can attempt to define an inner product on
this vector space by means of the formula
g1 , g2  = σ (g1−1 g2 ).
The resulting object may differ from a genuine Hilbert
space in two respects. First, there may be nonzero vec-
tors whose length, as measured by the inner product, is
zero (although the hypothesis that σ is positive definite
does rule out the possibility that there might be vectors
of negative length). Second, the completeness axiom
[III.62](/part-03/normed-spaces-and-banach-spaces) of Hilbert space theory may not be satisfied.
However, there is a “completion” procedure which fixes
both these deficiencies. Applied in the present case,
it produces a Hilbert space Hσ that carries a unitary
representation of G.
d Ut            1                          Versions of the GNS construction arise in several
i E =
dt t=0 t→0 t
the functions on which the constructions are based are
easy to manipulate. For instance, convex combinations
of positive-definite functions are again positive defi-
nite, and this allows geometrical methods to be applied
to the study of representations.
1.5   Determinants and Traces
The original works of Fredholm and Hilbert borrowed
heavily from traditional concepts of linear algebra, and
in particular the theory of determinants [III.15](/part-03/determinants). In
view of the complicated definition of the determinant
even for finite matrices, it is perhaps not surprising that
the infinite-dimensional situation presented extraordi-
nary challenges. Very soon, much simpler alternative
approaches were found that avoided determinants alto-
gether. But it is interesting to note that the determinant,
or to be more exact the related notion of the trace, has
played an important role in recent developments on
which we will report later in this article.

IV.15.   Operator Algebras

   The trace of an n . imes n matrix is the sum of its diag-
onal entries. As with the determinant, the trace of a
matrix A is equal to the trace of BAB −1 for any invert-
ible matrix B. In fact, the trace is related to the determi-   that if a self-adjoint algebra M of operators is closed
nant by the formula det(exp(A)) = exp(tr(A)) (because
of the invariance properties of trace and determinant,
it is enough to check this for diagonal matrices, where
it is easy). In infinite dimensions the trace need not
make sense since the sum of the diagonal entries of
an . nfty × . nfty matrix may not converge. (The trace of the
identity operator is a case in point: the diagonal entries     on a Hilbert space H. If a closed subspace H0 of H
are all 1, and if there are infinitely many of them, then
their sum is not well-defined.) One way to address this
problem is to limit one self to operators for which the
sum is well-defined. An operator T is said to be of
trace class if, for every two sequences {uj } and {vj }
of pairwise orthogonal vectors of length 1, the sum
. nfty
   j=1 T uj , vj  is absolutely convergent. A trace-class
operator T has a well-defined and finite trace, namely

the sum j=1 T uj , uj  (which is independent of the
choice of orthonormal basis {uj }).
   Integral operators such as those appearing in Fred-
holm’s equation provide natural examples of trace-
class operators. If k(y, x) is a smooth function, then
the operator T u(y) = k(y, x)u(x) dx is of trace
class, and its trace is equal to k(x, x) dx, which can
be regarded as the “sum” of the diagonal elements of
the “continuous matrix” k.

The commutant of a set S of bounded linear operators
on a Hilbert space H is the collection S of all operators
on H that commute with every operator in the set S. The
commutant of any set is an algebra of operators on H.
That is, if T1 and T2 are in the commutant, then so are
T1 T2 and any linear combination a1 T1 + a2 T2 .
  As mentioned in the previous section, a unitary rep-
resentation of a group G on a Hilbert space H is a col-
lection of unitary operators Ug , labeled by elements of
G, with the property that for any two group elements
g1 and g2 the composition Ug1 Ug2 is equal to Ug1 g2 .
A von Neumann algebra is any algebra of operators
on a complex Hilbert space H which is the commu-
tant of some unitary representation of a group on H.
Every von Neumann algebra is closed under adjoints
and under limits of nearly every sort. For example, it is
closed under pointwise limits: if {Tn } is a sequence of
operators in a von Neumann algebra M, and if Tn v →
T v, for every vector v ∈ H, then T ∈ M.

515
It is easy to check that every von Neumann algebra
M is equal to its own double commutant M (the com-
mutant of the commutant of M). Von Neumann proved
under pointwise limits, then M is equal to the commu-
tant of the group of unitary operators in its commutant,
and is therefore a von Neumann algebra.
2.1   Decomposing Representations
Let g → Ug be a unitary representation of a group G
is mapped into itself by all the operators Ug , then it
is said to be an invariant subspace for the representa-
tion. If H0 is invariant, then since the operators Ug map
H0 to itself, their restrictions to H0 constitute another
representation of G, called a subrepresentati on of the
original.
A subspace H0 is invariant for a representation, and
so determines a subrepresentati on, if and only if the
. nfty
orthogonal projection operator P : H → H0 belongs
to the commutant of that representation. This points
to a close connection between subrepresentati ons and
von Neumann algebras. In fact, von Neumann algebra
theory can be thought of as the study of the ways in
which unitary representations can be decomposed into
subrepresentati ons.
A representation is irreducible if it has no nontriv-
ial invariant subspace. A representation that does have
a nontrivial invariant subspace H0 can be divided into
2 Von Neumann Algebras
those associated with its orthogonal complement H0⊥ .
Unless both the representations H0 and H0⊥ are irre-
duc i ble, we will be able to divide one or both of them
into still smaller pieces by repeating the process that
was just carried out for H. If the initial Hilbert space
H is finite dimensional, then continuing in this way we
will eventually decompose it into irreducible sub re pre-
sentations. In the language of matrices, we will obtain
a basis for H with respect to which all the operators in
the group are simultaneously block diagonal, in such a
way that each block represents an irreducible group of
unitary operators on a smaller Hilbert space.
Reducing a unitary representation on a finite-dimen-
sional Hilbert space into irreducible subrepresenta-
tions is a bit like decomposing an integer into a prod-
uct of prime factors. As with prime factorization, the
decomposition process for a finite-dimensional unitary
representation has only one possible end: there is, up
to ordering, a unique list of irreducible representations
into which a given unitary representation decomposes.

516

But in infinite dimensions the decomposition process
faces a number of difficulties, the most surprising of
which is that there may be two decompositions of
the same representation into entirely different sets of
irreducible subrepresentati ons.
   In the face of this, a different form of de com posi-
tion suggests itself, which is roughly analogous to the
factorization of an integer into prime powers instead
of individual primes. Let us refer to the prime powers
into which an integer is decomposed as its components.
They have two characteristic properties: no two com-
pone nts share a common factor, and any two (proper)
factors of the same component do share a common
factor. Similarly, one can decompose a unitary repre-
sentation into isotypical components, which have analo-
gous properties: no two distinct isotypical components
share a common (meaning isomorphic) subrepresen-
tation, and any two subrepresentati ons of the same
isotypical component have themselves a common sub-
subrepresentati on. Any unitary representation (finite
dimensional or not) can be decomposed into isotypical
components, and this decomposition is unique.
   In finite dimensions, every isotypical representation
decomposes into a (finite) number of identical irre-
duc i ble subrepresentati ons (like the prime factors of
a prime power). In infinite dimensions this is not so.
In effect, much of von Neumann algebra theory is
concerned with analyzing the many possibilities that
arise.
2.2   Factors
The commutant of an isotypical unitary representation
is called a factor. Concretely, a factor is a von Neu-
mann algebra M whose center, the set of all operators in
M that commute with every member of M, consists of
nothing more than scalar multiples of the identity oper-
ator. This is because projections in the center of M cor-
respond to projections onto combinations of isotypical
subrepresentati ons. Every von Neumann algebra can be
uniquely decomposed into factors.
   A factor is said to be of type I if it arises as the com-   ing to the elements g ∈ G. Then there is a natural rep-
mutant of an isotypical representation that is a multi-
ple of a single irreducible representation. Every type I
factor is isomorphic to the algebra of all bounded oper-
ators on a Hilbert space. In finite dimensions, every fac-
tor is of type I, since as we already noted every isotyp-
ical representation decomposes into a multiple of one
irreducible representation.
   The existence of unitary representations with more
than one decomposition into irreducible components is

IV. Branches of Mathematics
related to the existence of factors that are not of type I.
Von Neumann, together with Francis Murray, invest i-
gated this possibility in a series of papers that mark
the foundation of operator algebra theory. They intro-
duced an order structure on the collection of subrep-
resentations of a given isotypical representation or, to
put it in terms of the commutant, on the collection of
projections in a given factor. If H0 and H1 are subrep-
resentations of the isotypical representation H, then
we write H0 ( H1 if H0 is isomorphic to a sub re pre-
sentation of H1 . Murray and von Neumann proved that
this is a total ordering: either H0 ( H1 ; or H1 ( H0 ;
or both, in which case H0 and H1 are isomorphic. For
example, in a finite-dimensional type I situation, where
H is a multiple of n copies of a single irreducible repre-
sentation, each subrepresentati on is the sum of m ⩽ n
copies of the irreducible representation, and the order
structure of the (isomorphism classes of) subrepresen-
tat i ons is the same as the order structure of the integers
{0, 1, . . . , n}.
Murray and von Neumann showed that the only order
structures that can arise from factors are the following
very simple ones:
Type I,    {0, 1, 2, . . . , n} or {0, 1, 2, . . . , . nfty};
Type II, [0, 1] or [0, . nfty];
Type III, {0, . nfty}.
The type of a factor is determined from the order
structure of its projections according to this table.
In the case of factors of type II, the order structure
is that of an interval of real numbers, not integers.
Any subrepresentati on of an isotypical representation
of type II can be divided into yet smaller subrepresenta-
tions: we shall never reach an irreducible “atom.” Nev-
er the less, subrepresentati ons can still be compared in
size by means of the “real-valued dimension” provided
by Murray and von Neumann’s theorem.
A not able example of a factor of type II may be
obtained as follows. Let G be a group and let H = 2 (G)
be a Hilbert space having basis vectors [g] correspond-
resentation of G on H derived from the group multi-
plication law, called the regular representation: given
an element g of G, the corresponding unitary map Ug
is the linear operator that takes each basis vector [g ]
in 2 (G) to the basis vector [gg ]. The commutant of
this representation is a von Neumann algebra M. If G
is a commutative group, then all the operators Ug are
in the center of M; but if G is far enough from com-
mutativity (for instance, if it is a free group), then M

$IV$ . $15$ .

Operator Algebras

will have trivial center and will therefore be a factor. It can be shown that this factor is of type II. There is a simple explicit formula for the real-valued dimension of a subrepresentati on corresponding to an orthogonal projection P $\in$ M. Represent P by an infinite matrix relative to the basis {[g]} of H. Because P commutes with the representation, it is easy to see that the diagonal elements of P are all the same, equal to some real number between $0$ and $1$ . This real number is the dimension of the subrepresentati on corresponding to P .
More recently, the Murray-von Neumann dimension theory has found unexpected applications in topology [I.3](/part-01/fundamental-definitions). Many important topological concepts, such as Betti numbers, are defined as the (integervalued) dimensions of certain vector spaces. Using von Neumann algebras, one can define real-valued counterparts of these quantities that have useful additional properties. In this way, one can use von Neumann algebra theory to obtain topological conclusions.
The von Neumann algebras used here are typically obtained by the construction of the previous paragraph from the fundamental group [IV.6](/part-04/algebraic-topology) of some compact space.

$2$ . $3$

Modular Theory

Type III factors remained rather mysterious for a long time; indeed, Murray and von Neumann were at first unable to determine whether any such factors existed. They eventually managed to do so, but the fundamental breakthrough in the area came well after their pioneering work, when it was realized that each von Neumann algebra has a special family of symmetries, its so-called modular automorphism group. To explain the origins of modular theory, let us consider once again the von Neumann algebra obtained from the regular representation of a group G.
We defined the operators U g o$n^{2}$ (G) by multiplying on the left by elements of G; but we could equally well have considered a representation defined by multiplying on the right. This would have yielded a different von Neumann algebra. So long as we deal only with discrete groups G this difference is unimportant, because the map S : [g]   $\to$ [g − 1] is a unitary operator on H that interchanges the left and right regular representations. But for certain continuous groups the problem arises that the function f (g) may be square-integrable while f (g $- 1$ ) is not.
In this situation there is no simple unitary isomorphism analogous to the one for discrete groups. To remedy this, one must introduce a correction factor called the modular function of G.

$517$

The project of modular theory is to show that something analogous to the modular function can be constructed for any von Neumann algebra. This object then serves as an invariant for all factors of type III, whether or not they are explicitly derived from groups. Modular theory exploits a version of the GNS construction (section $1$ . $4$ ). Let M be a self-adjoint algebra of operators. A linear functional φ :
M $\to$ C is called a state if it is positive in the sense that φ (T ∗ T) $\ge 0$ , for every T $\in$ M (this terminology is derived from the connection described earlier between Hilbert space theory and quantum mechanics). For the purposes of modular theory we restrict attention to faithful states, those for which φ(T ∗ $T) = 0$ implies $T = 0$ . If φ is a state, then the formula $T^{1}$ , $T^{2}= φ(T^{1}$ ∗ $T^{2})$ defines an inner product on the vector space M. Applying the GNS procedure, we obtain a Hilbert space H M .
The first important fact about H M is that every operator T in M determines an operator on H M . Indeed, a vector $V \inH^{M}$ is a limit $V =$ lim $n \to \infty V^{n}$ of elements in M, and we can apply an operator T $\in$ M to the vector

V using the formula

T $V = lim$ T V n ,

$n \to \infty$

where on the right-hand side we use multiplication in the algebra M. Because of this observation, we can think of M as an algebra of operators on H M , rather than as an algebra of operators on whatever Hilbert space we began with. Next, the adjoint operation equips the Hilbert space H M with a natural “antilinear” operator S : H M $\to$ H M by the formula ${}^{1} S(V) = V$ ∗ . Since $U^{g}$ ∗ $= U^{g} - {}^{1}$ for the regular representation, this is indeed analogous to the operator S we encountered in our discussion of continuous groups.
The important theorem of Minoru Tomita and Masamichi Takesaki asserts that, as long as the original state φ satisfies a continuity condition, the complex powers U t  =  (S ∗ S) it have the property that $U^{t}MU - t = M,$ for all t. The transformations of M given by the formula T   $\to$ U t T U  -  t are called the modular automorphisms of M. Alain Connes proved that they depend only in a rather inessential way on the original faithful state φ.
To be precise, changing φ changes the modular automorphisms only by inner automorphisms, that is, transformations of the form $T \to UTU - 1$ , where $U$ is a unitary $1$ . The interpretation of this formula on the completion H M of M is a delicate matter.

518

operator in M itself. The remarkable conclusion is that
every von Neumann algebra M has a canonical one-
parameter group of “outer automorphisms,” which is
determined by M alone and not by the state φ that is
used to define it.
  The modular group of a type I or type II factor
consists only of the identity transformation; however,
the modular group of a type III factor is much more
complex. For example, the set

is a subgroup of R and an invariant of M that can
be used to distinguish between uncountably many
different type III factors.

2.4    Classification
A crowning achievement of von Neumann algebra
theory is the classification of factors that are approx i-
mately finite dimensional. These are the factors that are
in a certain sense limits of finite-dimensional algebras.
Be sides the range of the dimension function, which sep-
arates factors into types, the sole invariant is the mod-     the spectrum of T ) is less than or equal to its norm.
ule. This is a flow on a certain space that is assembled
from the modular automorphism group.
   A lot of attention is currently being given to the long-   limn→. nfty T n 1/n . If T is normal (T T ∗ = T ∗ T ), and in
standing problem of distinguishing among the type II
factors associated with the regular representations of
groups. Of special interest is the case of free groups
[IV.10 §2](/part-04/geometric-and-combinatorial-group-theory), around which has flourished the subject of
free probability theory. Despite intensive effort, some
fundamental questions remain open: at the time of
writing it is unknown whether the factors associated
with the free groups on two and on three generators
are isomorphic.
   Another important development has been subfactor
theory, which attempts to classify the ways in which
factors can be realized within other factors. A remark-
able and surprising theorem of Vaughan Jones shows
that, in the type II situation, where continuous values of
dimensions are the norm, the dimensions of subfactors
can in certain situations assume only a discrete range
of values. The combinatorics associated with this result
have also appeared in other apparently quite unrelated
parts of mathematics, notably knot theory [III.44](/part-03/knot-polynomials).
Von Neumann algebra theory helps describe the struc-
ture of a single representation of a group on a Hilbert
space. But in many situations it is of interest to gain an    limits of polynomials in T and T ∗ is a C ∗ -algebra said

IV. Branches of Mathematics
understanding of all possible unitary representations.
To shed some light on this problem we turn to a related
but different part of operator algebra theory.
Consider the collection B(H) of all bounded oper-
ators on a Hilbert space H. It has two very differ-
ent structures: algebraic operations, such as addition,
multiplication, and formation of adjoints; and analytic
structures, such as the operator norm
T  = sup{T u : u ⩽ 1}.
{t ∈ R : T → Ut T U−t is an inner automorphism}
Suppose, for instance, that T  < 1 (an analytic hypoth-
esis). Then the geometric series
S = I + T + T2 + T3 + ···
converges in B(H), and its limit S satisfies
S(I − T ) = (I − T )S = I.
It follows that I − T is invertible in B(H) (an algebraic
conclusion). One can easily deduce from this that the
spectral radius r (T ) of any operator T (defined to be
the greatest absolute value of any complex number in
The remarkable spectral radius formula goes much
further in the same direction. It asserts that r (T ) =
particular if T is self-adjoint, then it may be shown that
T n  = T n . As a result, the spectral radius of T is
precisely equal to the norm of T . There is therefore a
very close connection between the algebraic structure
of B(H), particularly algebraic structure related to the
adjoint operation, and the analytic structure.
Not all the properties of B(H) are relevant to this
connection between algebra and analysis. A C ∗ -alge-
bra A is an abstract structure that has enough proper-
ties for the argument of the previous two paragraphs to
remain valid. A detailed definition would be out of place
here, but it is worth mentioning that a crucial condition
relating norm, multiplication, and ∗-operation is
a∗ a = a2 ,   a ∈ A,
∗
called the C -identity for A. We also note that special
classes of operators on Hilbert space (unitaries, orthog-
onal projections, and so on) all have their counterparts
in a general C ∗ -algebra. For example, a unitary u ∈ A
satisfies uu∗ = u∗ u = 1, and a projection p satisfies
p = p2 = p∗ .
3   C ∗ -Algebras
A simple example of a C ∗ -algebra is obtained by
starting with a single operator T ∈ B(H). The collec-
tion of all operators S ∈ B(H) that can be obtained as

$IV$ . $15$ .

Operator Algebras

to be generated by T . The C ∗ - algebra generated by T is commutative if and only if T is normal; this is one reason for the importance of normal operators. Commutative C ∗ - Algebras

$3$ . $1$

If X is a compact [III.9](/part-03/compactness-and-compactication) topological space [III.90](/part-03/topological-spaces), then the collection C (X) of continuous functions f : X $\to$ C comes with natural algebraic operations (inherited from the usual ones on C) and a norm  $f = sup{|f(x)|}$ : $x \in$ X}. In fact, these operations make C (X) into a C ∗ - algebra . The multiplication in C (X) is commutative, because the multiplication of complex numbers is commutative. A basic result of Gelfand and Naimark asserts that every commutative C ∗ - algebra is isomorphic to some C (X).
Given a commutative C ∗ - algebra A, one constructs X as the collection of all algebra homomorphisms ξ : A $\to$ C , and the Gelfand transform then associates with a $\in$ A the function ξ   $\to$ ξ (a) from X to C . The Gelfand-Naimark theorem is a foundational result of operator theory. For example, a modern proof of the spectral theorem might proceed as follows. Let T be a self-adjoint or normal operator on a Hilbert space H, and let A be the commutative C ∗ - algebra generated by T .
By the Gelfand-Naimark theorem, A is isomorphic to C (X) for some space X, which may in fact be identified with the spectrum of T . If v is a unit vector in H, then the formula S   $\to$  Sv, v  defines a state φ on A. The GNS space associated with this state is a Hilbert space of functions on X, and elements of $A = C$ (X) act as multiplication operators. In particular, T acts as a multiplication operator.
A small additional argument shows that T is unitarily equivalent to this multiplication operator, or at least to a direct sum of such operators (which is itself a multiplication operator on a larger space). Continuous functions can be composed: if $f$ and $g$ are continuous functions (with the range of g contained in the domain of f), then f ◦g is also a continuous function.
Since the Gelfand-Naimark theorem tells us that any self-adjoint element of a C ∗ - algebra A sits inside an algebra isomorphic to the continuous functions on the spectrum of a, we conclude that if a $\in$ A is selfadjoint, and if f is a continuous function defined on the spectrum of a, then an operator f (a) exists in A. This functional calculus is a key technical tool in C ∗ - algebra theory. For example, suppose that u $\in$ A is unitary and u $- 1< 2$ . Then the spectrum of $u$ is a subset of the

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

520

3.2.3   Group C ∗ -Algebras
If G is a group and g → Ug is a unitary representation
of G on a Hilbert space H, we can consider the small-
est C ∗ -algebra of operators on H containing all the Ug ;
this is called the C ∗ -algebra generated by the repre-
sentation. An important example is the regular repre-
sentation on the Hilbert space 2 (G) generated by G,
which we defined in section 2.2. The C ∗ -algebra that
it generates is denoted Cr∗ (G). The subscript “r” refers
to the regular representation. Considering other repre-
sentations leads to other, potentially different, group
C ∗ -algebras.
   Consider, for example, the case G = Z. Since this is
a commutative group, its C ∗ -algebra is also commuta-
tive, and thus it is isomorphic to C(X) for a suitable X,
by the Gelfand–Naimark theorem. In fact, X is the unit
circle S 1 , and the isomorphism
takes a function on the circle to its Fourier series.
  States defined on group C ∗ -algebras correspond
to positive-definite functions defined on groups, and
hence to unitary group representations. In this way new
representations may be constructed and studied. For
example, using states of group C ∗ -algebras it is possi-    The equation Su = 0 has only the zero solution, but
ble to give to the set of irreducible representations of     the equation Su = v has a solution only if the first
G the structure of a topological space.
3.2.4   The Irrational Rotation Algebra

The algebra C ∗ (Z) is generated by a single unitary ele-
ment U (corresponding to 1 ∈ Z). More over, it is the
universal example of such a C ∗ -algebra, which is to say
that given any C ∗ -algebra A and unitary u ∈ A, there is
one and only one homomorphism C ∗ (Z) → A sending
U to u. In fact, this is nothing other than the functional
calculus homomorphism for the unitary u.
  If instead we consider the universal example of a C ∗ -    Consider the two systems of linear equations
algebra generated by two unitaries U , V subject to the
relation
where α is irrational, we obtain a noncommutative C ∗ -
algebra called the irrational rotation algebra Aα . The
irrational rotation algebras have been studied inten-
sively from a number of points of view. Using K-theory
(see below) it has been shown that Aα1 is isomorphic to
Aα2 if and only if α1 ± α2 is an integer.
   It can be shown that the irrational rotation algebra
is simple, which implies that any pair of unitaries U, V     By contrast, the index is stable, despite its definition as
satisfying the commutation relation above will generate

IV. Branches of Mathematics
a copy of Aα . (Note the contrast with the case of a single
unitary: 1 is a unitary operator, but it does not generate
a copy of C ∗ (Z).) This allows us to give a concrete rep-
resentation of Aα on the Hilbert space L2 (S 1 ), where U
is the rotation through 2π α and V is multiplication by
z : S 1 → C.
4    Fredholm Operators
A Fredholm operator between Hilbert spaces is defined
to be a bounded operator T for which the kernel
and cokernel are finite dimensional. This means that
the homogeneous equation T u = 0 admits only fi-
nitely many linearly independent solutions, while the
inhomogeneous equation T u = v admits a solution if v
satisfies a finite number of linear conditions. The termi-
nology arises from Fredholm’s original work on integral
equations; he showed that if K is an integral operator,
C(S 1 )  Cr∗ (Z)                       then I + K is a Fredholm operator.
For the operators that Fredholm considered, the
dimensions of the kernel and cokernel must be equal,
but in general this need not be so. The unilateral
shift operator S, which maps the infinite “row vec-
tor” (a1 , a2 , a3 , . . . ) to (0, a1 , a2 , . . . ), is an example.
coordinate of the vector v is zero.
The index of a Fredholm operator is defined to be the
integer difference
index(T ) = dim(ker(T )) − dim(coker(T )).
For example, every invertible operator is a Fredholm
operator of index 0, where as the unilateral shift is a
Fredholm operator of index −1.
4.1   Atkinson’s Theorem
⎧
⎨ 2.1 x + y = 0⎬          ⎨ 2 x + y = 0⎬
and
⎩ 4 x + 2 y = 0⎭           ⎩ 4 x + 2 y = 0⎭
U V = e2π iα V U ,
Although the coefficients of these equations are very
close, the dimensions of their kernels are quite differ-
ent: the left-hand system has only the zero solution,
where as the right-hand system has the nontrivial solu-
tions (t, −2 t). Thus the dimension of the kernel is an
unstable invariant of the system of equations. A sim-
ilar remark applies to the dimension of the cokernel.
the difference of two unstable quantities.

IV.15.   Operator Algebras

   An important theorem of Frederick Atkinson gives
precise expression to these stability properties. Atkin-   shift S that we encountered earlier (with index −1). The
son’s theorem asserts that an operator T is Fredholm
if and only if it is invertible modulo compact opera-
tors. This implies that any operator that is sufficiently    topological formula for the indices of various Fredholm
close to a Fredholm operator is itself a Fredholm oper-    operators that arise in geometry.
ator with the same index, and that if T is a Fredholm
operator and K is a compact operator, then T + K is
a Fredholm operator with the same index as T . Notice
that, since integral operators are compact operators,
this contains Fredholm’s original theorem as a special
case.
4.2   The Toeplitz Index Theorem
topology [I.3 §6.4](/part-01/fundamental-definitions) studies those properties of mathe-
mat ical systems that remain the same when the sys-
tem is (continuously) perturbed. Atkinson’s theorem
tells us that the Fredholm index is a topological quan-
tity. In many contexts it is possible to obtain a for-
mula for the index of a Fredholm operator in terms
of other, apparently quite different, topological quan-
tities. Formulas of this sort often indicate deep con-
nections between analysis and topology and often have
powerful applications.
   The simplest example involves the Toeplitz operators.
A Toeplitz operator has a matrix with the special form

In other words, as you go down each diagonal of
the matrix, the entries remain constant. The sequence
of coefficients {bn }. nfty n=−. nfty defines a function f (z) =
. nfty
  n=−. nfty bn z
called the symbol of the Toeplitz operator. It can be
shown that a Toeplitz operator whose symbol is a con-
tinuous function which is never zero is Fredholm. What
is its index?
   The answer is given by thinking about the symbol
as a mapping from the unit circle to the nonzero com-
plex numbers: in other words, as a closed path in the
nonzero complex plane. The fundamental topological
invariant of such a path is its winding number: the
number of times it “goes around” the origin in the
counter clockwise direction. It can be proved that the
index of a Toeplitz operator with nonzero symbol f
is minus the winding number of f . For example, if f
is the function f (z) = z (with winding number +1),

521
then the associated Toeplitz operator is the unilateral
Toeplitz index theorem is a very special case of the
atiyah–singer index theorem [V.2](/part-05/the-atiyahsinger-index-theorem), which gives a
4.3   Essentially Normal Operators
Atkinson’s theorem suggests that compact perturb a-
tions of an operator are in some sense “small.” This
leads to the study of properties of an operator that
are preserved by compact perturbation. For instance,
the essential spectrum of an operator T is the set of
complex numbers . ambda for which T − . ambda I fails to be Fred-
holm (that is, invertible modulo compact operators).
Two operators T1 and T2 are essentially equivalent if
there is a unitary operator U such that UT1 U ∗ and T2
differ by a compact operator. A beautiful theorem orig-
inally due to weyl [VI.80](/part-06/hermann-weyl-18851955) asserts that two self-adjoint
or normal operators are essentially equivalent if and
only if they have the same essential spectrum.
One might argue that the restriction to normal opera-
tors in this theorem is inappropriate. Since we are con-
cerned with properties that are preserved by compact
perturbation, would it not be more appropriate to con-
⎛
b0    b1    b2    b3    ···
⎜
⎜b−1 b0
⎜
⎜b
T =⎜ ⎜
−2  b−1 b0
⎟             unilateral shift S is an example of an essentially nor-
⎜b−3 b−2 b−1 b0
⎜
⎝ .     ..    ..    ..    .. ⎠
..
.     .     .
and S ∗ cannot be essentially equivalent, because S has
index −1 and S ∗ has index +1. Thus some new ing red i-
ent, beyond the essential spectrum, is needed to clas-
−n on the unit circle in the complex plane,
sify essentially normal operators. In fact, it follows eas-
ily from Atkinson’s theorem that if essentially normal
operators T1 and T2 are to be essentially equivalent,
then not only must they have the same essential spec-
trum but also, for every . ambda not in the essential spectrum,
the Fredholm index of T1 −. ambda I must be equal to the Fred-
holm index of T2 − . ambda I. The converse of this statement
was proved by Larry Brown, Ron Douglas, and Peter
Fill more in the 1970 s, using entirely novel techniques
that led to a new era of interaction between C ∗ -algebra
theory and topology.
4.4 K-Theory
A remarkable feature of the Brown–Douglas–Fill more
work was the appearance within it of tools from

522

algebraic topology [IV.6](/part-04/algebraic-topology), notably K-theory. Remem-
ber that, according to the Gelfand–Naimark theorem,
the study of (suitable) topological spaces and the study
of commutative C ∗ -algebras are one and the same; all
the techniques of topology can be transferred, via the
Gelfand–Naimark isomorphism, to commutative C ∗ -
algebras. Having made this observation, it is natural
to ask which of these techniques can be extended fur-
ther, to provide information about all C ∗ -algebras,
commutative or not. The first and best example is
K-theory.
   In its most basic form, K-theory associates with each
C ∗ -algebra A an Abelian group K(A), and with each
homomorphism of C ∗ -algebras a corresponding homo-
morphism of Abelian groups. The building blocks for
K(A) can be thought of as generalized Fredholm oper-
ators associated with A; the generalization is that these     functions rather than directly thinking about points
operators act on “Hilbert spaces” in which the complex
scalars are replaced by elements of the C ∗ -algebra A.
The group K(A) itself is defined to be the collection of
connected components of the space of all such general-
ized Fredholm operators. Thus if A = C, for instance (so
that we are dealing with classical Fredholm operators),
then K(A) = Z. This follows from the fact that two Fred-
holm operators are connected by a path of Fredholm
operators if and only if they have the same index.
   One of the great strengths of K-theory is that one
can construct K-theory classes from a variety of differ-
ent ingredients. For example, every projection p ∈ A
defines a class in K(A) which can be thought of as a
“dimension” for the range of p. This connects K-theory
to the classification of factors (section 2.2), and has
become an important tool in the effort to classify vari-
ous families of C ∗ -algebras, such as the irrational rota-   to develop “noncommutative” versions of many ideas
tion algebras. (It was at one time thought that the irra-     from geometry and topology, as well as completely
tional rotation algebras might not contain any non-
trivial projections at all: the construction of such pro-     part. Noncommutative geometry begins with the cre-
jections by Marc Rieffel was an important step in the
development of C ∗ -algebra K-theory.) Another beauti-
ful example is George Elliott’s classification theorem
for locally finite-dimensional C ∗ -algebras like the CAR
algebra; they are completely determined by K-theoretic
invariants.
   The problem of computing the K-theory groups of
noncommutative C ∗ -algebras, particularly group C ∗ -
algebras, has turned out to have important connections
with topology. In fact, some key advances in topol-
ogy have come from C ∗ -algebra theory in this way,
there by allowing operator algebraists to repay some of
the debt they owe to the topologists for K-theory. The

IV. Branches of Mathematics
principal organizing problem in this area is the Baum–
Connes conjecture, which proposes a description of the
K-theory of group C ∗ -algebras in terms of invariants
familiar in algebraic topology. Most of the progress on
the conjecture to date is the result of work of Gen-
nadi Kasparov, who dramatically broadened the origi-
nal discoveries of Brown, Douglas, and Fill more to cover
not just single essentially normal operators but also
noncommuting systems of operators, that is, C ∗ -alge-
bras. Kasparov’s work is now a central component of
operator algebra theory.
5    Noncommutative Geometry
descartes’s [VI.11](/part-06/ren-descartes-15961650) invention of coordinates showed
that one can do geometry by thinking about coordinate
in space and their inter relationships: these coordinate
functions are the familiar x, y, and z. The Gelfand–
Naimark theorem can be viewed as one expression of
this idea of passing from the “point picture” of a space
X to the “field picture” of the algebra C(X) of func-
tions on it. The success of K-theory in operator algebras
invites us to ponder whether the field picture might be
more powerful than the point picture, since K-theory
can be applied to noncommutative C ∗ -algebras which
may not have any “points” (homomorphisms to C) at all.
One of the most exciting research frontiers in oper-
ator algebra theory is reached along a path which
develops these thoughts. The noncommutative geom-
etry program of Connes takes seriously the idea that a
general C ∗ -algebra should be thought of as an algebra
of functions on a “noncommutative space,” and goes on
new constructions that have no commutative counter-
ative reformulation of ideas from ordinary geometry
in ways that involve only operators and functions, but
not points.
Consider, for instance, the circle S 1 . The algebra
C(S 1 ) reflects all the topological properties of S 1 , but to
incorporate its metric (distance-related) properties as
well we look not just at C(S 1 ) but at the pair consisting
of the algebra C(S 1 ) and the operator D = i d/dθ on the
Hilbert space H = L2 (S 1 ). Notice that if f is a function
on the circle (considered as a multiplication operator
on H), then the commutator Df − f D is also a multipli-
cation operator, this time by i df /dθ. It follows that
ordinary measurements of angular distance between