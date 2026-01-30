# Numerical Analysis

604

Karp, R. M., and V. Ramachandran. 1990. Parallel algorithms     really goes on is a far more interesting process of exe-
  for shared-memory machines. In Handbook of Theoret-
  ical Computer Science, volume A, Algorithms and Com-
  plexity, edited by J. van Leeuwen. Cambridge, MA: MIT
  Press/Elsevier.
Kearns, M. J., and U. V. Vazirani. 1994. An Introduction
  to Computational Learning Theory. Cambridge, MA: MIT
  Press.
Kitaev, A., A. Shen, and M. Vyalyi. 2002. Classical and Quan-   cision, or a hundred. For a scientific or engineering
  tum Computation. Providence, RI: American Mathematical
  Society.
Kushilevitz, E., and N. Nisan. 1996. Communication Com-
  plexity. Cambridge: Cambridge University Press.
Ron, D. 2001. Property testing (a tutorial). In Handbook on
  Randomized Computing, volume II. Dordrecht: Kluwer.
Shaltiel, R. 2002. Recent developments in explicit con struc-
  tions of extractors. Bulletin of the European Association
  for Theoretical Computer Science 77:67–95.
Sipser, M. 1997. Introduction to the Theory of Computation.
  Boston, MA: PWS.
Strassen, V. 1990: Algebraic complexity theory. In Hand-
  book of Theoretical Computer Science, volume A, Algo-
  rithms and Complexity, edited by J. van Leeuwen. Cam-
  bridge, MA: MIT Press/Elsevier.
IV.21 Numerical Analysis

Every one knows that when scientists and engineers
need numerical answers to mathematical problems,
they turn to computers. Nevertheless, there is a wide-
spread misconception about this process.
  The power of numbers has been extraordinary. It is
often noted that the scientific revolution was set in
motion when Galileo and others made it a principle
that everything must be measured. Numerical measure-
ments led to physical laws expressed mathematically,
and, in the remarkable cycle whose fruits are all around
us, finer measurements led to refined laws, which in
turn led to better technology and still finer measure-
ments. The day has long since passed when an advance
in the physical sciences could be achieved, or a signifi-
cant engineering product developed, with out numerical
mathematics.
  Computers certainly play a part in this story, yet
there is a mis understanding about what their role is.
Many people imagine that scientists and mathemat i-
cians generate formulas, and then, by inserting num-
bers into these formulas, computers grind out the nec-
essary results. The reality is nothing like this. What

IV. Branches of Mathematics
cution of algorithms. In most cases the job could not
be done even in principle by formulas, for most mathe-
mat ical problems cannot be solved by a finite sequence
of elementary operations. What happens instead is
that fast algorithms quickly converge to “approximate”
answers that are accurate to three or ten digits of pre-
application, such an answer may be as good as exact.
We can illustrate the complexities of exact versus
approximate solutions by an elementary example. Sup-
pose we have one polynomial of degree 4,
p(z) = c0 + c1 z + c2 z2 + c3 z 3 + c4 z 4 ,
and another of degree 5,
q(z) = d0 + d1 z + d2 z 2 + d3 z 3 + d4 z4 + d5 z 5 .
It is well-known that there is an explicit formula that
expresses the roots of p in terms of radicals (discov-
ered by Ferrari around 1540), but no such formula for
the roots of q (as shown by Ruffini and abel [VI.33](/part-06/niels-henrik-abel-18021829)
more than 250 years later; see the insolubility of
the quintic [V.21](/part-05/the-insolubility-of-the-quintic) for more details). Thus, in a cer-
tain philosophical sense the root-finding problems for
p and q are utterly different. Yet in practice they hardly
Lloyd N. Trefethen
know the roots of one of these polynomials, he or she
1   The Need for Numerical Computation
digits of precision in less than a millisecond. Did the
computer use an explicit formula? In the case of q,
the answer is certainly no, but what about p? Maybe,
maybe not. Most of the time, the user neither knows
nor cares, and probably not one mathematician in a
hundred could write down formulas for the roots of
p from memory.
Here are three more examples of problems that can
be solved in principle by a finite sequence of elementary
operations, like finding the roots of p.
(i) Linear equations: solve a system of n linear equa-
tions in n unknowns.
(ii) Linear programming: minimize a linear function
of n variables subject to m linear constraints.
(iii) Traveling salesman problem: find the shortest tour
between n cities.
And here are five that, like finding the roots of q, cannot
generally be solved in this manner.
(iv) Find an eigenvalue [I.3 §4.3](/part-01/fundamental-definitions) of an n . imes n matrix.
(v) Minimize a function of several variables.

IV.21.   Numerical Analysis

  (vi) Evaluate an integral.
 (vii) Solve an ordinary differential equation (ODE).
(viii) Solve a partial differential equation (PDE).
Can we conclude that (i)–(iii) will be easier than (iv)–(viii)
in practice? Absolutely not. Problem (iii) is usually very
hard indeed if n is, say, in the hundreds or thousands.
Problems (vi) and (vii) are usually rather easy, at least
if the integral is in one dimension. Problems (i) and (iv)
are of almost exactly the same difficulty: easy when n
is small, like 100, and often very hard when n is large,
like 1 000 000. In fact, in these matters philosophy is
such a poor guide to practice that, for each of the three
problems (i)–(iii), when n and m are large one often
ignores the exact solution and uses approximate (but
fast!) methods instead.
   Numerical analysis is the study of algorithms for
solving the problems of continuous mathematics, by
which we mean problems involving real or complex
variables. (This definition includes problems like lin-
ear programming and the traveling salesman problem
posed over the real numbers, but not their discrete ana-
logues.) In the remainder of this article we shall review
some of its main branches, past accomplishments, and
possible future trends.

Through out history, leading mathematicians have been
involved with scientific applications, and in many cases
this has led to the discovery of numerical algorithms
still in use today. gauss [VI.26](/part-06/carl-friedrich-gauss-17771855), as usual, is an out-
standing example. Among many other contributions,
he made crucial advances in least-squares data fitting
(1795), systems of linear equations (1809), and numer-
ical quadrature (1814), as well as inventing the fast
fourier transform [III.26](/part-03/the-fast-fourier-transform) (1805), though the last
did not become widely known until its rediscovery by
Cooley and Tukey in 1965.
   Around 1900, the numerical side of mathematics
started to become less conspicuous in the activities
of research mathematicians. This was a consequence
of the growth of mathematics generally and of great
advances in fields in which, for technical reasons, math-
ematical rigor had to be the heart of the matter. For
example, many advances of the early twentieth cen-
tury sprang from mathematicians’ new ability to reason
rigorously about infinity, a subject relatively far from
numerical calculation.
   A generation passed, and in the 1940 s the computer
was invented. From this moment numerical mathemat-

605
ics began to explode, but now mainly in the hands of
specialists. New journals were founded such as Math-
ematics of Computation (1943) and Numerische Mathe-
matik (1959). The revolution was sparked by hardware,
but it included mathematical and algorithmic develop-
ments that had nothing to do with hardware. In the half-
century from the 1950 s, machines sped up by a factor
of around 109 , but so did the best algorithms known
for some problems, generating a combined increase in
speed of almost incomprehensible scale.
Half a century on, numerical analysis has grown in-
to one of the largest branches of mathematics, the
specialty of thousands of researchers who publish in
dozens of mathematical journals as well as applica-
tions journals across the sciences and engineering.
Thanks to the efforts of these people going back many
decades, and thanks to ever more powerful comput-
ers, we have reached a point where most of the clas-
sical mathematical problems of the physical sciences
can be solved numerically to high accuracy. Most of
the algorithms that make this possible were invented
since 1950.
Numerical analysis is built on a strong foundation:
the mathematical subject of approximation theory.
This field encompasses classical questions of inter-
polation, series expansions, and harmonic analy-
2   A Brief History
sis [IV.11](/part-04/harmonic-analysis) associated with newton [VI.14](/part-06/isaac-newton-16421727), fourier
[VI.25](/part-06/jean-baptiste-joseph-fourier-17681830), Gauss, and others; semiclassical problems of
polynomial and rational minimax approximation asso-
ciated with names such as chebyshev [VI.45](/part-06/pafnuty-chebyshev-18211894) and Bern-
stein; and major newer topics, including splines, radial
basis functions, and wavelets [VII.3](/part-07/wavelets-and-applications). We shall not
have space to address these subjects, but in almost
every area of numerical analysis it is a fact that, sooner
or later, the discussion comes down to approximation
theory.
3   Machine Arithmetic and Rounding Errors
It is well-known that computers cannot represent real
or complex numbers exactly. A quotient like 1/7 eval-
uated on a computer, for example, will normally yield
an in exact result. (It would be different if we designed
machines to work in base 7!) Computers approximate
real numbers by a system of floating-point arithmetic,
in which each number is represented in a digital equiv-
alent of scientific notation, so that the scale does not
matter unless the number is so huge or tiny as to cause
over flow or under flow. Floating-point arithmetic was
invented by Konrad Zuse in Berlin in the 1930 s, and

606

by the end of the 1950 s it was standard across the
computer industry.
   Until the 1980 s, different computers had widely dif-
ferent arithmetic properties. Then, in 1985, after years     numbers are orders of magnitude more precise than
of discussion, the IEEE (Institute of Electrical and Elec-   any number in science. (Of course, purely mathematical
tronics Engineers) standard for binary floating-point
arithmetic was adopted, or IEEE arithmetic for short.
This standard has subsequently become nearly univer-
sal on processors of many kinds. An IEEE (double pre-
cision) real number consists of a 64-bit word divided
into 53 bits for a signed fraction in base 2 and 11 bits     widely regarded as an ugly and dangerous compromise.
for a signed exponent. Since 2−53 ≈ 1.1 . imes 10−16 , IEEE
numbers represent the numbers of the real line to a rel-     this perception. In the 1950 s and 1960 s, the founding
ative accuracy of about 16 digits. Since 2±2 ≈ 10±308 ,
this system works for numbers up to about 10308 and
down to about 10−308 .
   Computers do not merely represent numbers, of
course; they perform operations on them such as
addition, subtraction, multiplication, and division, and     scale by certain modes of computation. These men,
more complicated results are obtained from sequences
of these elementary operations. In floating-point arith-
metic, the computed result of each elementary opera-
tion is almost exactly correct in the following sense: if    very real, but the message was communicated all too
“∗” is one of these four operations in its ideal form and    successfully, leading to the current widespread impres-
“.* ” is the same operation as realized on the computer,     sion that the main business of numerical analysis is
then for any floating-point numbers x and y, assuming
that there is no under flow or over flow,

Here ε is a very small quantity, no greater in abso-
lute value than a number known as machine epsilon,
denoted by εmach , that measures the accuracy of the
computer. In the IEEE system, εmach = 2−53 ≈ 1.1 . imes 10−16 .
   Thus, on a computer, the interval [1, 2], for example,    Linear algebra became a standard topic in undergradu-
is approximated by about 1016 numbers. It is interest-
ing to compare the fineness of this discretization with
that of the discretizations of physics. In a handful of
solid or liquid or a balloonful of gas, the number of
atoms or molecules in a line from one point to another
is on the order of 108 (the cube root of Avogadro’s num-
ber). Such a system behaves enough like a continuum
to justify our definitions of physical quantities such as     in n unknowns using on the order of n3 arithmetic
density, pressure, stress, strain, and temperature. Com-     operations. Equivalently, it solves equations of the form
puter arithmetic, however, is more than a million times
finer than this. Another comparison with physics con-
cerns the precision to which fundamental constants are
known, such as (roughly) 4 digits for the gravitational
constant G, 7 digits for Planck’s constant h and the ele-    large as 1000, the time required is well under a sec-
ment ary charge e, and 12 digits for the ratio \mu e /\mu B of

IV. Branches of Mathematics
the magnetic moment of the electron to the Bohr mag-
neton. At present, almost nothing in physics is known
to more than 12 or 13 digits of accuracy. Thus IEEE
quantities like π are another matter.)
In two senses, then, floating-point arithmetic is far
closer to its ideal than is physics. It is a curious
phenomenon that, nevertheless, it is floating-point
arithmetic rather than the laws of physics that is
Numerical analysts themselves are partly to blame for
10
fathers of the field discovered that in exact arithmetic
can be a source of danger, causing errors in results
that “ought” to be right. The source of such prob-
lems is numerical instability: that is, the amplification
of rounding errors from microscopic to macroscopic
including von neumann [VI.91](/part-06/john-von-neumann-19031957), Wilkinson, Forsythe,
and Henrici, took great pains to publicize the risks of
care less reliance on machine arithmetic. These risks are
coping with rounding errors. In fact, the main busi-
ness of numerical analysis is designing algorithms that
converge quickly; rounding-error analysis, while often
x.
* y = (x ∗ y)(1 + ε).
a part of the discussion, is rarely the central issue. If
rounding errors vanished, 90% of numerical analysis
would remain.
4   Numerical Linear Algebra
ate mathematics curriculums in the 1950 s and 1960 s,
and has remained there ever since. There are several
reasons for this, but I think one is at the bottom of it:
the importance of linear algebra has exploded since the
arrival of computers.
The starting point of this subject is Gaussian elimi-
nation, a procedure that can solve n linear equations
Ax = b, where A is an n . imes n matrix and x and b are col-
umn vectors of size n. Gaussian elimination is invoked
on computers around the world almost every time a
system of linear equations is solved. Even if n is as
ond on a typical 2008 desktop machine. The idea of

IV.21.   Numerical Analysis

elimination was first discovered by Chinese scholars
about 2000 years ago, and more recent contributors
include lagrange [VI.22](/part-06/joseph-louis-lagrange-17361813), Gauss, and jacobi [VI.35](/part-06/carl-gustav-jacob-jacobi-18041851).
The modern way of describing such algorithms, how-
ever, was apparently introduced as late as the 1930 s.
Suppose that, say, α times the first row of A is sub-
tr acted from the second row. This operation can be
interpreted as the multiplication of A on the left by the    practice, pivoting makes Gaussian elimination almost
lower-triangular matrix M1 consisting of the identity
with the additional nonzero entry m21 = −α. Further
analogous row operations correspond to further multi-
plications on the left by lower-triangular matrices Mj .     Wilkinson and others that for certain exceptional matri-
If k steps convert A to an upper-triangular matrix U,
then we have MA = U with M = Mk · · · M2 M1 , or, upon
setting L = M −1 ,
Here L is unit lower-triangular, that is, lower-triangular   tion of matrices (for example, among random matri-
with all its diagonal entries equal to 1. Since U rep-
resents the target structure and L encodes the opera-
tions carried out to get there, we can say that Gaussian     by a factor greater than ρn1/2 is in a certain sense expo-
elimination is a process of lower-triangular upper-
triangularizati on.
   Many other algorithms of numerical linear algebra
are also based on writing a matrix as a product of matri-
ces that have special properties. To borrow a phrase
from biology, we may say that this field has a central
dogma:

In this framework we can quickly describe the next
algorithm that needs to be considered. Not every matrix
has an LU factorization; a 2 . imes 2 counterexample is the
matrix
Soon after computers came into use it was observed
that even for matrices that do have LU factoriza-
tions, the pure form of Gaussian elimination is unsta-
ble, amplifying rounding errors by potentially large
amounts. Stability can be achieved by interchanging
rows during the elimination in order to bring maxi-
mal entries to the diagonal, a process known as piv-
oting. Since pivoting acts on rows, it again corresponds     R as a by-product, and is thus a process of triangular
to a multiplication of A by other matrices on the left.
The matrix factorization corresponding to Gaussian
elimination with pivoting is
where U is upper-triangular, L is unit lower-triangular,     hyperplane, one reduces A to upper-triangular form
and P is a permutation matrix, i.e., the identity matrix     via orthogonal operations: one aims at R and gets Q

607
with permuted rows. If the permutations are chosen to
bring the largest entry below the diagonal in column k
to the (k, k) position before the kth elimination step,
then L has the additional property |ij | ⩽ 1 for all i
and j.
The discovery of pivoting came quickly, but its
theoretical analysis has proved astonishingly hard. In
perfectly stable, and it is routinely done by almost all
computer programs that need to solve linear systems
of equations. Yet it was realized in around 1960 by
ces, Gaussian elimination is still unstable, even with
pivoting. The lack of an explanation of this disc rep-
ancy represents an embarrassing gap at the heart of
A = LU.                              numerical analysis. Experiments suggest that the frac-
ces with independent normally distributed entries) for
which Gaussian elimination amplifies rounding errors
nent i ally small as a function of ρ as ρ → . nfty, where n is
the dimension, but a theorem to this effect has never
been proved.
Meanwhile, beginning in the late 1950 s, the field of
numerical linear algebra expanded in another direction:
the use of algorithms based on orthogonal [III.50 §3](/part-03/linear-operators-and-their-properties)
or unitary [III.50 §3](/part-03/linear-operators-and-their-properties) matrices, that is, real matrices
with Q−1 = QT or complex ones with Q−1 = Q∗ , where
algorithms ←→ matrix factorizations.
Q∗ denotes the conjugate transpose. The starting point
of such developments is the idea of QR factorization. If
A is an m . imes n matrix with m ⩾ n, a QR factorization
of A is a product

0 1
A=            .
1 0                               where Q has orthonormal columns and R is upper-tri-
angular. One can interpret this formula as a matrix ex-
pression of the familiar idea of Gram–Schmidt orthog-
onalization, in which the columns q1 , q2 , . . . of Q are
determined one after another. These column opera-
tions correspond to multiplication of A on the right
by elementary upper-triangular matrices. One could say
that the Gram–Schmidt algorithm aims for Q and gets
orthogonalizati on. A big event was when Householder
showed in 1958 that a dual strategy of orthogonal tri-
angular ization is more effective for many purposes. In
this approach, by applying a succession of elementary
P A = LU,                             matrix operations each of which reflects Rm across a

608

as a by-product. The Householder method turns out to
be more stable numerically, because orthogonal oper-
ations preserve norms and thus do not amplify the
rounding errors introduced at each step.
   From the QR factorization sprang a rich collec-
tion of linear algebra algorithms in the 1960 s. The
QR factorization can be used by itself to solve least-
squares problems and construct orthonormal bases.
More remarkable is its use as a step in other algorithms.   test the speed of their computers. If a supercomputer
In particular, one of the central problems of numerical     is lucky enough to make the TOP500 list, updated twice
linear algebra is the determination of the eigenvalues
and eigenvectors of a square matrix A. If A has a com-
plete set of eigenvectors, then by forming a matrix X
whose columns are these eigenvectors and a diagonal
matrix D whose diagonal entries are the corresponding
eigenvalues, we obtain
and hence, since X is nonsingular,
the eigenvalue decomposition. In the special case in
which A is hermitian [III.50 §3](/part-03/linear-operators-and-their-properties), a complete set of
orthonormal eigenvectors always exists, giving
where Q is unitary. The standard algorithm for com-
puting these factorizations was developed in the early
1960 s by Francis, Kublanovskaya, and Wilkinson: the
QR algorithm. Because polynomials of degree 5 or more
cannot be solved by a formula, we know that eigen-
values cannot generally be computed in closed form.
The QR algorithm is therefore necessarily an iterative
one, involving a sequence of QR factorizations that is
in principle infinite. Nevertheless, its convergence is
extraordinarily rapid. In the symmetric case, for a typ-    is square and nonsingular, or their product, known as
ical matrix A, the QR algorithm converges cubically,
in the sense that at each step the number of cor-
rect digits in one of the eigenvalue–eigenvector pairs
approximately triples.
  The QR algorithm is one of the great triumphs of
numerical analysis, and its impact through widely used
software products has been enormous. Algorithms and
analysis based on it led in the 1960 s to computer codes     approximation, and determination of angles between
in Algol and Fortran and later to the software library
EISPACK (“Eigensystem Package”) and its descendant
LAPACK. The same methods have also been incor-
porated in general-purpose numerical libraries such
as the NAG, IMSL, and Numerical Recipes collections,
and in problem-solving environments such as MAT-
LAB, Maple, and Mathematica. These developments

IV. Branches of Mathematics
have been so successful that the computation of matrix
eigenvalues long ago became a “black box” operation
for virtually every scientist, with nobody but a few spe-
cia lists knowing the details of how it is done. A curi-
ous related story is that EISPACK’s relative LINPACK for
solving linear systems of equations took on an unex-
pected function: it became the original basis for the
benchmarks that all computer manufacturers run to
a year since 1993, it is because of its prowess in solving
certain matrix problems Ax = b of dimensions ranging
from 100 into the millions.
The eigenvalue decomposition is familiar to all math-
ematicians, but the development of numerical linear
algebra has also brought its younger cousin onto the
AX = XD,                             scene: the singular value decomposition (SVD). The
SVD was discovered by Beltrami, jordan [VI.52](/part-06/camille-jordan-18381922), and
sylvester [VI.42](/part-06/james-joseph-sylvester-18141897) in the late nineteenth century, and
A = XDX −1 ,                           made famous by Golub and other numerical analysts
beginning in around 1965. If A is an m . imes n matrix with
m ⩾ n, an SVD of A is a factorization
A = UΣV ∗ ,
∗
A = QDQ ,                             where U is m . imes n with orthonormal columns, V is n . imes n
and unitary, and Σ is diagonal with diagonal entries
σ1 ⩾ σ2 ⩾ · · · ⩾ σn ⩾ 0. One could compute the
SVD by relating it to the eigenvalue problems for AA∗
and A∗ A, but this proves numerically unstable; a bet-
ter approach is to use a variant of the QR algorithm
that does not square A. Computing the SVD is the stan-
dard route to determining the norm [III.62](/part-03/normed-spaces-and-banach-spaces) A = σ1
(here  ·  is the hilbert space [III.37](/part-03/bayesian-analysis) or “2” norm), the
norm of the inverse A−1  = 1/σn in the case where A
the condition number,
κ(A) = A A−1  = σ1 /σn .
It is also a step in an extraordinary variety of fur-
ther computational problems including rank-deficient
least-squares, computation of ranges and nullspaces,
determination of ranks, “total least-squares,” low-rank
subspaces.
All the discussion above concerns “classical” numer-
ical linear algebra, born in the period 1950–75. The
ensuing quarter-century brought in a whole new set
of tools: methods for large-scale problems based on
Krylov subspace iterations. The idea of these iterations
is as follows. Suppose a linear algebra problem is given

IV.21.   Numerical Analysis

that involves a matrix of large dimension, say n /
1000. The solution may be characterized as the vector
x ∈ Rn that satisfies a certain variational property such
as minimizing 12 x T Ax − x T b (for solving Ax = b if A is
symmetric positive definite) or being a stationary point
of (x T Ax)/(x T x) (for solving Ax = . ambda x if A is symmet-
ric). Now if Kk is a k-dimensional subspace of Rn with
k 0 n, then it may be possible to solve the same vari-
ational problem much more quickly in that subspace.
The magical choice of Kk is a Krylov subspace

for an initial vector q. For reasons that have fascinat-
ing connections with approximation theory, solutions
in these subspaces often converge very rapidly to the
exact solution in Rn as k increases, if the eigenvalues of    Cotes formulas, which are useful for small degrees but
A are favorably distributed. For example, it is often pos-    diverge at a rate as high as 2 n as n → . nfty: the Runge
sible to solve a matrix problem involving 105 unknowns
to ten-digit precision in just a few hundred iterations.
The speedup compared with the classical algorithms
may be a factor of thousands.
  Krylov subspace iterations originated with the conju-
gate gradient and Lanczos iterations published in 1952,
but in those years computers were not powerful enough
to solve problems of a large enough scale for the meth-
ods to be competitive. They took off in the 1970 s with
the work of Reid and Paige and especially van der Vorst
and Meijerink, who made famous the idea of precon-
dition ing. In preconditioning a system Ax = b, one
replaces it by a mathematically equivalent system such
as
for some nonsingular matrix M. If M is well chosen,
the new problem involving MA may have favorably dis-
tributed eigenvalues and a Krylov subspace iteration
may solve it quickly.
   Since the 1970 s, preconditioned matrix iterations
have emerged as an indispensable tool of com put a-
tional science. As one indication of their prominence we
may note that in 2001, Thomson ISI announced that the
most heavily cited article in all of mathematics in the
1990 s was the 1989 paper by van der Vorst introducing
Bi-CGStab, a generalization of conjugate gradients for
nonsymmetric matrices.
   Finally, we must mention the biggest unsolved prob-
lem in numerical analysis. Can an arbitrary n . imes n matrix
A be inverted in O(nα ) operations for every α > 2?
(The problems of solving a system Ax = b or com-
puting a matrix product AB are equivalent.) Gaussian
elimination has α = 3, and the exponent shrinks as

609
far as 2.376 for certain recursive (though impractical)
algorithms published by Coppersmith and Winograd in
1990. Is there a “fast matrix inverse” in store for us?
5   Numerical Solution of Differential Equations
Long before much attention was paid to linear alge-
bra, mathematicians developed numerical methods to
solve problems of analysis. The problem of numeri-
cal integration or quadrature goes back to Gauss and
newton [VI.14](/part-06/isaac-newton-16421727), and even to archimedes [VI.3](/part-06/archimedes-ca). The
Kk (A, q) = span(q, Aq, . . . , Ak−1 q)
of interpolating data at n + 1 points by a polynomial
of degree n, then integrating the polynomial exactly.
Equally spaced interpolation points give the Newton–
phenomenon. If the points are chosen optimally, then
the result is Gauss quadrature, which converges rapidly
and is numerically stable. It turns out that these opti-
mal points are roots of Legendre polynomials, which
are clustered near the endpoints. (A proof is sketched in
special functions [III.85](/part-03/special-functions).) Equally good for most pur-
poses is Clenshaw–Curtis quadrature, where the inter-
polation points become cos(jπ /n), 0 ⩽ j ⩽ n. This
quadrature method is also stable and rapidly conver-
gent, and unlike Gauss quadrature can be executed in
O(n log n) operations by the fast Fourier transform.
The explanation of why clustered points are necessary
for effective quadrature rules is related to the subject
of potential theory.
MAx = Mb                                  Around 1850 another problem of analysis began to
get attention: the solution of ODEs. The Adams formu-
las are based on polynomial interpolation in equally
spaced points, which in practice typically number fewer
than ten. These were the first of what are now called
multistep methods for the numerical solution of ODEs.
The idea here is that for an initial value problem u =
f (t, u) with independent variable t > 0, we pick a small
time step Δt > 0 and consider a finite set of time values
tn = nΔt,
We then replace the ODE by an algebraic approx i-
mation that enables us to calculate a succession of
approximate values
v n ≈ u(tn ),    n ⩾ 0.
(The superscript here is just a superscript, not a power.)
The simplest such approximate formula, going back to
euler [VI.19](/part-06/leonhard-euler-17071783), is
v n+1 = v n + Δtf (tn , v n ),

$610$

or, using the abbreviation f $n = f$ (t n , v n), $v^{n} + {}^{1} = v^{n} + \delta\text{tf}^{n}$ . Both the ODE itself and its numerical approximation may involve one equation or many, in which case u (t , x) and v n become vectors of an appropriate dimension. The Adams formulas are higher-order generalizations of Euler’s formula that are much more efficient at generating accurate solutions. For example, the fourth-order Adams-Bashforth formula is

$1v^{n} + {}^{1} = v^{n} + {}^{24}\Delta t(55f^{n} - 59f^{n} - {}^{1} + 37f^{n} - {}^{2} - 9f^{n} - {}^{3})$ . The term “fourth-order” reflects a new element in the numerical treatment of problems of analysis: the appearance of questions of convergence as $\Delta t \to 0$ . The formula above is of fourth order in the sense that it will normally converge at the rate O (( $\Delta$ t) 4 ).
The orders employed in practice are most often in the range $3 - 6$ , enabling excellent accuracy for all kinds of computations, typically in the range of $3 - 10$ digits, and higherorder formulas are occasionally used when still more accuracy is needed. Most unfortunately, the habit in the numerical analysis literature is to speak not of the convergence of these magnificently efficient methods, but of their error, or more precisely their discretization or truncation error as distinct from rounding error. This ubiquitous language of error analysis is dismal in tone, but seems ineradicable.
At the turn of the twentieth century, the second great class of ODE algorithms, known as Runge-Kutta or one-step methods, was developed by Runge, Heun, and Kutta. For example, here are the formulas of the famous fourth-order Runge-Kutta method, which advance a numerical solution (again scalar or system) from time step t n to t n $+ {}^{1}$ with the aid of four evaluations of the function f :
$a = \delta\text{tf}(t^{n}$ , $v^{n})$ ,  b = . elta tf({}tn + 12. elta t, {}vn + 12 a) ,  c = . elta tf({}tn + 12. elta t, {}vn + 12 b) , $d = \delta\text{tf}(t^{n} + \Delta t,v^{n} + c)$ , $v^{n} + {}^{1} = v^{n} + \frac{1}{6}(a + 2b + 2c + d)$ . Runge-Kutta methods tend to be easier to implement but some times harder to analyze than multistep formulas. For example, for any s, it is a trivial matter to derive the coefficients of the s-step Adams-Bashforth formula, which has order of accuracy $p = s$.
For Runge Kutta methods, by contrast, there is no simple relation-

IV. Branches of Mathematics

ship between the number of “stages” (i . e . , function evaluations per step) and the attainable order of accuracy. The classical methods with $s = 1$ , $2$ , $3$ , $4$ were known to Kutta in 1901 and have order $p = s$, but it was not until 1963 that it was proved that $s = 6$ stages are required to achieve order $p = 5$ . The analysis of such problems involves beautiful mathematics from graph theory and other areas, and a key figure in this area since the $1960s$ has been John But cher.
For orders $p = 6$ , $7$ , $8$ the minimal numbers of stages are $s = 7$ , $9$ , $11$ , while for $p > 8$ exact minima are not known. Fortunately, these higher orders are rarely needed for practical purposes. When computers began to be used to solve differential equations after World War II, a phenomenon of the greatest practical importance appeared: once again, numerical instability. As before, this phrase refers to the unbounded amplification of local errors by a computational process, but now the dominant local errors are usually those of discretization rather than rounding.
Instability typically manifests itself as an oscillatory error in the computed solution that blows up exponentially as more numerical steps are taken. One mathematician concerned with this effect was Germund Dahlquist. Dahlquist saw that the phenomenon could be analyzed with great power and generality, and some people regard the appearance of his 1956 paper as one of the events marking the birth of modern numerical analysis. This landmark paper introduced what might be called the fundamental theorem of numerical analysis: consistency  +  stability  =  convergence.
The theory is based on precise definitions of these three notions along the following lines. Consistency is the property that the discrete formula has locally positive order of accuracy and thus models the right ODE. Stability is the property that errors introduced at one time step cannot grow unboundedly at later times. Convergence is the property that as $\Delta t \to 0$ , in the absence of rounding errors, the numerical solution converges to the correct result.
Before Dahlquist’s paper, the idea of an equivalence of stability and convergence was perhaps in the air in the sense that practitioners realized that if a numerical scheme was not unstable, then it would probably give a good approximation to the right answer. His theory gave rigorous form to that idea for a wide class of numerical methods. As computer methods for ODEs were being developed, the same was happening for the much bigger

$IV$ . $21$ .

Numerical Analysis

subject of PDEs. Discrete numerical methods for solving PDEs had been invented around 1910 by Richardson for applications in stress analysis and meteorology, and further developed by Southwell; in 1928 there was also a theoretical paper on finite-difference methods by courant [VI.83](/part-06/richard-courant-18881972), Friedrichs, and Lewy. But although the Courant-Friedrichs-Lewy work later became famous, the impact of these ideas before computers came along was limited. After that point the subject developed quickly.
Particularly influential in the early years was the group of researchers around von Neumann at the Los Alamos laboratory, including the young Peter Lax. Just as for ODEs, von Neumann and his colleagues discovered that some numerical methods for PDEs were subject to catastrophic instabilities. For example, to solve the linear wave equation u $t = u$ x numerically we may pick space and time steps $\Delta x$ and $\Delta t$ for $a$ regular grid,

$x^{j} = j\Delta x,t^{n} = n\Delta t,j,n \ge 0$ ,

and replace the PDE by algebraic formulas that compute a succession of approximate values: v j n $\approx$ u (t n , x j), $j,n \ge 0$ . A well-known discretization for this purpose is the Lax Wendroff formula:

$11$

n

n

n

n

- 2(vj)n + vj - {}1

vjn $+ 1 =$ vjn $+ 2\lambda(vj + 1) + 2\lambda^{2}(v^{j} + {}^{1} - v^{j} - {}^{1}$

),

where $\lambda = \Delta t/\Delta x$ , which can be generalized to nonlinear systems of hyperbolic conservation laws in one dimension. For u $t = u$ x , if $\lambda$ is held fixed at a value less than or equal to $1$ , the method will converge to the correct solution as $\Delta x,\Delta t \to 0($ ignoring rounding errors). If $\lambda$ is greater than $1$ , on the other hand, it will explode.
Von Neumann and others realized that the presence or absence of such instabilities could be tested, at least for linear constant-coefficient problems, by discrete fourier analysis [III.27](/part-03/the-fourier-transform) in x: “von Neumann analysis.” Experience indicated that, as a practical matter, a method would succeed if it was not unstable. A theory soon appeared that gave rigor to this observation: the Lax equivalence theorem, published by Lax and Richtmyer in 1956 , the same year as Dahlquist’s paper.
Many details were different--this theory was restricted to linear equations where as Dahlquist’s theory for ODEs also applied to nonlinear ones--but broadly speaking the new result followed the same pattern of equating convergence to consistency plus stability. Mathematically, the key point was the uniform boundedness principle.

$611$

In the half-century since von Neumann died, the Lax-Wendroff formula and its relatives have grown into a breathtakingly powerful subject known as computational fluid dynamics. Early treatments of linear and nonlinear equations in one space dimension soon moved to two dimensions and eventually to three. It is now a routine matter to solve problems involving millions of variables on computational grids with hundreds of points in each of three directions. The equations are linear or nonlinear;
the grids are uniform or nonuniform, often adaptively refined to give special attention to boundary layers and other fast-changing features; the applications are every where. Numerical methods were used first to model airfoils, then whole wings, then whole aircraft. Engineers still use wind tunnels, but they rely more on computations. Many of these successes have been facilitated by another numerical technology for solving PDEs that emerged in the $1960s$ from diverse roots in engineering and mathematics: finite elements.
Instead of approximating a differential operator by a difference quotient, finite-element methods approximate the solution itself by functions f that can be broken up into simple pieces. For instance, one might partition the domain of f into elementary sets such as triangles or tetrahedra and insist that the restriction of f to each piece is a polynomial of small degree. The solution is obtained by solving a variational form of the PDE within the corresponding finite-dimensional subspace, and there is often a guarantee that the computed solution is optimal within that subspace.
Finite-element methods have taken advantage of tools of functional analysis to develop to a very mature state. These methods are known for their flexibility in handling complicated geometries, and in particular they are entirely dominant in applications in structural mechanics and civil engineering. The number of books and articles that have been published about finite-element methods is in excess of 10000 . In the vast and mature field of numerical solution of PDEs, what aspect of the current state of the art would most surprise Richardson or Courant, Friedrichs, and Lewy?
I think it is the universal dependence on exotic algorithms of linear algebra. The solution of a largescale PDE problem in three dimensions may require a system of a million equations to be solved at each time step. This may be achieved by a GMRES matrix iteration that utilizes a finite-difference preconditioner implemented by a Bi-CGStab iteration relying on another multigrid preconditioner. Such stacking of tools was

$612$

surely not imagined by the early computer pioneers. The need for it ultimately traces to numerical instability, for as Crank and Nicolson first noted in 1947 , the crucial tool for combating instability is the use of implicit formulas, which couple together unknowns at the new time step t n $+ {}^{1}$ , and it is in implementing this coupling that solutions of systems of equations are required. Here are some examples that illustrate the successful reliance of today’s science and engineering on the numerical solution of PDEs:
chemistry (the schrödinger equation [III.83](/part-03/the-schrdinger-equation)); structural mechanics (the equations of elasticity); weather prediction (the geostrophic equations); turbine design (the navierstokes equations [III.23](/part-03/the-euler-and-navierstokes-equations)); acoustics (the Helmholtz equation); telecommunicati ons (maxwell ’ s equations [IV.13](/part-04/general-relativity-and-the-einstein-equations) ); cosmology (the Einstein equations); oil discovery (the migration equations); groundwater remediation (Darcy ’ s law);
integrated circuit design (the drift diffusion equations); tsunami modeling (the shallowwater equations); optical fibers (the nonlinear wave equations [III.49](/part-03/linear-and-nonlinear-waves-and-solitons)); image enhancement (the Perona Malik equation); metallurgy (the Cahn-Hilliard equation); pricing financial options (the black-scholes equation [VII.9](/part-07/the-mathematics-of-money) ).

$6$

Numerical Optimization

The third great branch of numerical analysis is optimization, that is, the minimization of functions of several variables and the closely related problem of solution of nonlinear systems of equations. The development of optimization has been some what independent of that of the rest of numerical analysis, carried forward in part by a community of scholars with close links to operations research and economics. Calculus students learn that a smooth function may achieve an extremum at a point of zero derivative, or at a boundary.
The same two possibilities characterize the two big strands of the field of optimization. At one end there are problems of finding interior zeros and minima of unconstrained nonlinear functions by methods related to multivariate calculus. At the other are problems of linear programming, where the function to be minimized is linear and therefore easy to understand, and all the challenge is in the boundary constraints. Unconstrained nonlinear optimization is an old subject. Newton introduced the idea of approximating functions by the first few terms of what we now call

IV. Branches of Mathematics

their Taylor series; indeed, Arnol’d has argued that Taylor series were Newton’s “main mathematical discovery.” To find a zero x ∗ of a function F of a real variable x, every one knows the idea of Newton’s method: at the kth step, given an estimate x (k) $\approx$ x ∗ , use the derivative F (x (k)) to define a linear approximation from which to derive a better estimate $x(k + {}^{1})$ : $x(k + {}^{1}) = x(k) - F(x(k))/F (x(k))$ . Newton (1669) and Raphson (1690) applied this idea to polynomials, and Simpson ( 1740 ) generalized it to other functions F and to systems of two equations.
In today’s language, for a system of n equations in n unknowns, we regard F as an n-vector whose derivative at a point x (k) $\in$ R n is the n $\times$ n Jacobi an matrix with entries ∂F i

( x(k)) , $1 \le i,j \le n.$

J ij (x (k))  = 

∂x j

This matrix defines a linear approximation to F (x) that is accurate for x $\approx$ x (k). Newton’s method then takes the matrix form $x(k + {}^{1}) = x(k) - (J(x(k) ) ) - 1F(x(k))$ , which in practice means that to get x (k $+ {}^{1}$ ) from x (k), we solve a linear system of equations: $J( x(k) ) (x(k + {}^{1}) - x(k)) = - F(x(k))$ . As long as J is Lipschitz continuous and nonsingular at x ∗ and the initial guess is good enough, the convergence of this iteration is quadratic: x $(k + {}^{1}) - x$ ∗   $= O(x(k) - x$ ∗   ${}^{2})$ .

(1)

Students often think it might be a good idea to develop formulas to enhance the exponent in this estimate to $3$ or $4$ . However, this is an illusion. Taking two steps at a time of a quadratically convergent algorithm yields a quartically convergent one, so the difference in efficiency between quadratic and quartic is at best a constant factor. The same goes if the exponent $2$ , $3$ , or $4$ is replaced by any other number greater than $1$ .
The true distinction is between all of these algorithms that converge superlinearly, of which Newton’s method is the prototype, and those that converge linearly or geometrically, where the exponent is just $1$ . From the point of view of multivariate calculus, it is a small step from solving a system of equations to minimizing a scalar function f of a variable x $\in$ R n : to find a (local) minimum, we seek a zero of the gradient g (x) $= \nablaf$ (x), an n-vector. The derivative of g is the Jacobi an matrix known as the Hessian of f , with entries ∂ ${}^{2}f$ H ij (x (k))  =  (x (k)),

$1 \le i,j \le n,$

∂x i ∂x j

IV.21.   Numerical Analysis

and one may utilize it just as before in a Newton itera-    Rn to R. Even the problem of stating local optimality
tion to find a zero of g(x), the new feature being that
a Hessian is always symmetric.
   Though the Newton formulas for minimization and
finding zeros were already established, the arrival of
computers created a new field of numerical optimiza-
tion. One of the obstacles quickly encountered was
that Newton’s method often fails if the initial guess
is not good. This problem has been comprehensively
addressed both practically and theoretically by the
algorithmic technologies known as line searches and
trust regions.
   For problems with more than a few variables, it also     This subject was born in the 1930 s and 1940 s with
quickly became clear that the cost of evaluating Jaco-
bians or Hessians at every step could be exorbitant.
Faster methods were needed that might make use of
in exact Jacobians or Hessians and/or in exact solutions
of the associated linear equations, while still achiev-     ear programs. A linear program is nothing more than
ing superlinear convergence. An early breakthrough
of this kind was the discovery of quasi-Newton meth-
ods in the 1960 s by Broyden, David on, Fletcher, and
Powell, in which partial information is used to gen-
erate steadily improving estimates of the true Jaco-
bian or Hessian or its matrix factors. An illustration
of the urgency of this subject at the time is the fact
that in 1970 the optimal rank-two symmetric positive-
definite quasi-Newton updating formula was published
independently by no fewer than four different authors,
namely Broyden, Fletcher, Goldfarb, and Shanno; their
discovery has been known ever since as the BFGS for-
mula. In subsequent years, as the scale of tractable
problems has increased exponentially, new ideas have
also become important, including automatic differ en-
tiation, a technology that enables derivatives of com-
puted functions to be determined automatically: the
computer program itself is “differentiated,” so that as
well as producing numerical outputs it also produces
their derivatives. The idea of automatic differentiation     the vertex points. (A point is called a vertex if it is
is an old one, but for various reasons, partly related to   the unique solution of some subset of the equations
advances in sparse linear algebra and to the develop-
ment of “reverse mode” formulations, it did not become
fully practical until the work of Bischof, Carle, and
Griewank in the 1990 s.
   Unconstrained optimization problems are relatively
easy, but they are not typical; the true depth of this
field is revealed by the methods that have been devel-
oped for dealing with constraints. Suppose a function
f : Rn → R is to be minimized subject to certain equal-     interior of the feasible region instead. Once a connec-
ity constraints cj (x) = 0 and inequality constraints
dj (x) ⩾ 0, where {cj } and {dj } are also functions from   logarithmic barrier methods popularized by Fiacco and

613
conditions for solutions to such problems is nontrivial,
a matter involving lagrange multipliers [III.64](/part-03/optimization-and-lagrange-multipliers) and
a distinction between active and in active constraints.
This problem was solved by what are now known as
the KKT conditions, introduced by Kuhn and Tucker in
1951 and also twelve years earlier, it was subsequently
realized, by Karush. Development of algorithms for
constrained nonlinear optimization continues to be an
active research topic today.
The problem of constraints brings us to the other
strand of numerical optimization, linear programming.
Kantorovich in the Soviet Union and Dantzig in the
United States. As an out growth of his work for the
U.S. Air Force in the war, Dantzig invented in 1947
the famous simplex algorithm [III.84](/part-03/the-simplex-algorithm) for solving lin-
a problem of minimizing a linear function of n vari-
ables subject to m linear equality and/or inequality
constraints. How can this be a challenge? One answer is
that m and n may be large. Large-scale problems may
arise through discretization of continuous problems
and also in their own right. A famous early example
was Leontiev’s theory of input–output models in eco-
nomics, which won him the Nobel Prize in 1973. Even in
the 1970 s the Soviet Union used an input–output com-
puter model involving thousands of variables as a tool
for planning the economy.
The simplex algorithm made medium- and large-
scale linear programming problems tractable. Such a
problem is defined by its objective function, the func-
tion f (x) to be minimized, and its feasible region, the
set of vectors x ∈ Rn that satisfy all the constraints. For
a linear program the feasible region is a polyhedron, a
closed domain bounded by hyperplanes, and the opti-
mal value of f is guaranteed to be attained at one of
that define the constraints.) The simplex algorithm pro-
ceeds by moving systematically downhill from one ver-
tex to another until an optimal point is reached. All of
the iterates lie on the boundary of the feasible region.
In 1984, an upheaval occurred in this field, triggered
by Narendra Karmarkar at AT&T Bell Laboratories. Kar-
markar showed that one could some times do much
better than the simplex algorithm by working in the
tion was shown between Karmarkar’s method and the

614

Mc Cormick in the 1960 s, new interior methods for lin-
ear programming were devised by applying techniques
previously viewed as suitable only for nonlinear prob-
lems. The crucial idea of working in tandem with a pair
of primal and dual problems led to today’s powerful
primal–dual methods, which can solve continuous opti-
mization problems with millions of variables and con-
strain ts. Starting with Karmarkar’s work, not only has
the field of linear programming changed completely,
but the linear and nonlinear sides of optimization are
seen today as closely related rather than essentially
different.
Numerical analysis sprang from mathematics; then it
spawned the field of computer science. When universi-
ties began to found computer science departments in
the 1960 s, numerical analysts were often in the lead.
Now, two generations later, most of them are to be
found in mathematics departments. What happened? A
part of the answer is that numerical analysts deal with
continuous mathematical problems, where as computer
scientists prefer discrete ones, and it is remarkable how    will be extraordinarily powerful and reliable, and will
wide a gap this can be.
   Nevertheless, the computer science side of numerical
analysis is of crucial importance, and I would like to end   of the fundamental distinctions in mathematics is be-
with a prediction that emphasizes this aspect of the
subject. Traditionally one might think of a numerical
algorithm as a cut-and-dried procedure, a loop of some
kind to be executed until a well-defined termination
criterion is satisfied. For some computations this pic-
ture is accurate. On the other hand, beginning with the
work of de Boor, Lyness, Rice and others in the 1960 s, a     iteration, regard less of its philosophical status. Prob-
less deterministic kind of numerical computing began
to appear: adaptive algorithms. In an adaptive quadra-
ture program of the simplest kind, two estimates of
the integral are calculated on each portion of a certain
mesh and then compared to produce an estimate of
the local error. Based on this estimate, the mesh may
then be refined locally to improve the accuracy. This
process is carried out iteratively until a final answer is    The list in table 1 attempts to identify some of the
obtained that aims to be accurate to a tolerance spec-
ified in advance by the user. Most such computations
come with no guarantee of accuracy, but an exciting
on going development is the advance of more sophis-
ti cated techniques of a posteriori error control that
some times do provide guarantees. When these are com-
bined with techniques of interval arithmetic, there is
even the prospect of accuracy guaranteed with respect
to rounding as well as discretization error.

IV. Branches of Mathematics
First, computer programs for quadrature became
adaptive; then programs for ODEs did as well. For
PDEs, the move to adaptive programs is happening
on a longer timescale. More recently there have been
related developments in the computation of Fourier
transforms, optimization, and large-scale numerical
linear algebra, and some of the new algorithms adapt
to the computer architecture as well as the mathemat-
ical problem. In a world where several algorithms are
known for solving every problem, we increasingly find
that the most robust computer program will be one
that has diverse capabilities at its disposal and deploys
them adaptively on the fly. In other words, numeri-
7 The Future                             cal computation is increasingly embedded in intelligent
control loops. I believe this process will continue, just
as has happened in so many other areas of technology,
removing scientists further from the details of their
computations but offering steadily growing power in
exchange. I expect that most of the numerical computer
programs of 2050 will be 99% intelligent “wrapper” and
just 1% actual “algorithm,” if such a distinction makes
sense. Hardly anyone will know how they work, but they
often deliver results of guaranteed accuracy.
This story will have a mathematical corollary. One
tween linear problems, which can be solved in one
step, and nonlinear ones, which usually require itera-
tion. A related distinction is between forward problems
(one step) and inverse problems (iteration). As numeri-
cal algorithms are increasingly embedded in intelligent
control loops, almost every problem will be handled by
lems of algebra will be solved by methods of analy-
sis; and between linear and nonlinear, or forward and
inverse, the distinctions will fade.
8    Appendix: Some Major
Numerical Algorithms
most significant algorithmic (as opposed to theoret-
ical) developments in the history of numerical analy-
sis. In each case some of the key early figures are cited,
more or less chronologically, and a key early date is
given. Of course, any brief sketch of history like this
must be an over simplification. Distressing omissions of
names occur through out the list, including many early
contributors in fields such as finite elements, precondi-
tion ing, and automatic differentiation, as well as more