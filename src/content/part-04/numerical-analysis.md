# Numerical Analysis

604                                                                                         IV. Branches of Mathematics

Karp, R. M., and V. Ramachandran. 1990. Parallel algorithms     really goes on is a far more interesting process of exe-
  for shared-memory machines. In Handbook of Theoret-           cution of algorithms. In most cases the job could not
  ical Computer Science, volume A, Algorithms and Com-          be done even in principle by formulas, for most mathe-
  plexity, edited by J. van Leeuwen. Cambridge, MA: MIT         mat ical problems cannot be solved by a finite sequence
  Press/Elsevier.
                                                                of elementary operations. What happens instead is
Kearns, M. J., and U. V. Vazirani. 1994. An Introduction
                                                                that fast algorithms quickly converge to “approximate”
  to Computational Learning Theory. Cambridge, MA: MIT
  Press.                                                        answers that are accurate to three or ten digits of pre-
Kitaev, A., A. Shen, and M. Vyalyi. 2002. Classical and Quan-   cision, or a hundred. For a scientific or engineering
  tum Computation. Providence, RI: American Mathematical        application, such an answer may be as good as exact.
  Society.                                                        We can illustrate the complexities of exact versus
Kushilevitz, E., and N. Nisan. 1996. Communication Com-         approximate solutions by an elementary example. Sup-
  plexity. Cambridge: Cambridge University Press.               pose we have one polynomial of degree 4,
Ron, D. 2001. Property testing (a tutorial). In Handbook on
  Randomized Computing, volume II. Dordrecht: Kluwer.                    p(z) = c0 + c1 z + c2 z2 + c3 z 3 + c4 z 4 ,
Shaltiel, R. 2002. Recent developments in explicit con struc-
                                                                and another of degree 5,
  tions of extractors. Bulletin of the European Association
  for Theoretical Computer Science 77:67–95.                        q(z) = d0 + d1 z + d2 z 2 + d3 z 3 + d4 z4 + d5 z 5 .
Sipser, M. 1997. Introduction to the Theory of Computation.
                                                                It is well-known that there is an explicit formula that
  Boston, MA: PWS.
Strassen, V. 1990: Algebraic complexity theory. In Hand-        expresses the roots of p in terms of radicals (discov-
  book of Theoretical Computer Science, volume A, Algo-         ered by Ferrari around 1540), but no such formula for
  rithms and Complexity, edited by J. van Leeuwen. Cam-         the roots of q (as shown by Ruffini and abel [VI.33](/part-06/niels-henrik-abel-18021829)
  bridge, MA: MIT Press/Elsevier.                               more than 250 years later; see the insolubility of
                                                                the quintic [V.21](/part-05/the-insolubility-of-the-quintic) for more details). Thus, in a cer-
                                                                tain philosophical sense the root-finding problems for
IV.21 Numerical Analysis                                        p and q are utterly different. Yet in practice they hardly
           Lloyd N. Trefethen                                   differ at all. If a scientist or a mathematician wants to
                                                                know the roots of one of these polynomials, he or she
      1   The Need for Numerical Computation                    will turn to a computer and get an answer to sixteen
Every one knows that when scientists and engineers               digits of precision in less than a millisecond. Did the
need numerical answers to mathematical problems,                computer use an explicit formula? In the case of q,
they turn to computers. Nevertheless, there is a wide-          the answer is certainly no, but what about p? Maybe,
spread misconception about this process.                        maybe not. Most of the time, the user neither knows
  The power of numbers has been extraordinary. It is            nor cares, and probably not one mathematician in a
often noted that the scientific revolution was set in            hundred could write down formulas for the roots of
motion when Galileo and others made it a principle              p from memory.
that everything must be measured. Numerical measure-               Here are three more examples of problems that can
ments led to physical laws expressed mathematically,            be solved in principle by a finite sequence of elementary
and, in the remarkable cycle whose fruits are all around        operations, like finding the roots of p.
us, finer measurements led to refined laws, which in
                                                                  (i) Linear equations: solve a system of n linear equa-
turn led to better technology and still finer measure-
                                                                      tions in n unknowns.
ments. The day has long since passed when an advance
                                                                 (ii) Linear programming: minimize a linear function
in the physical sciences could be achieved, or a signifi-
                                                                      of n variables subject to m linear constraints.
cant engineering product developed, with out numerical
                                                                (iii) Traveling salesman problem: find the shortest tour
mathematics.
                                                                      between n cities.
  Computers certainly play a part in this story, yet
there is a mis understanding about what their role is.           And here are five that, like finding the roots of q, cannot
Many people imagine that scientists and mathemat i-              generally be solved in this manner.
cians generate formulas, and then, by inserting num-
bers into these formulas, computers grind out the nec-          (iv) Find an eigenvalue [I.3 §4.3](/part-01/fundamental-definitions) of an n . imes n matrix.
essary results. The reality is nothing like this. What           (v) Minimize a function of several variables.

IV.21.   Numerical Analysis                                                                                           605

  (vi) Evaluate an integral.                                     ics began to explode, but now mainly in the hands of
 (vii) Solve an ordinary differential equation (ODE).             specialists. New journals were founded such as Math-
(viii) Solve a partial differential equation (PDE).               ematics of Computation (1943) and Numerische Mathe-
                                                                 matik (1959). The revolution was sparked by hardware,
Can we conclude that (i)–(iii) will be easier than (iv)–(viii)
                                                                 but it included mathematical and algorithmic develop-
in practice? Absolutely not. Problem (iii) is usually very
                                                                 ments that had nothing to do with hardware. In the half-
hard indeed if n is, say, in the hundreds or thousands.
                                                                 century from the 1950 s, machines sped up by a factor
Problems (vi) and (vii) are usually rather easy, at least
                                                                 of around 109 , but so did the best algorithms known
if the integral is in one dimension. Problems (i) and (iv)
                                                                 for some problems, generating a combined increase in
are of almost exactly the same difficulty: easy when n
                                                                 speed of almost incomprehensible scale.
is small, like 100, and often very hard when n is large,
                                                                    Half a century on, numerical analysis has grown in-
like 1 000 000. In fact, in these matters philosophy is
                                                                 to one of the largest branches of mathematics, the
such a poor guide to practice that, for each of the three
                                                                 specialty of thousands of researchers who publish in
problems (i)–(iii), when n and m are large one often
                                                                 dozens of mathematical journals as well as applica-
ignores the exact solution and uses approximate (but
                                                                 tions journals across the sciences and engineering.
fast!) methods instead.
                                                                 Thanks to the efforts of these people going back many
   Numerical analysis is the study of algorithms for
                                                                 decades, and thanks to ever more powerful comput-
solving the problems of continuous mathematics, by
                                                                 ers, we have reached a point where most of the clas-
which we mean problems involving real or complex
                                                                 sical mathematical problems of the physical sciences
variables. (This definition includes problems like lin-
                                                                 can be solved numerically to high accuracy. Most of
ear programming and the traveling salesman problem
                                                                 the algorithms that make this possible were invented
posed over the real numbers, but not their discrete ana-
                                                                 since 1950.
logues.) In the remainder of this article we shall review
                                                                    Numerical analysis is built on a strong foundation:
some of its main branches, past accomplishments, and
                                                                 the mathematical subject of approximation theory.
possible future trends.
                                                                 This field encompasses classical questions of inter-
                                                                 polation, series expansions, and harmonic analy-
                   2   A Brief History
                                                                 sis [IV.11](/part-04/harmonic-analysis) associated with newton [VI.14](/part-06/isaac-newton-16421727), fourier
Through out history, leading mathematicians have been             [VI.25](/part-06/jean-baptiste-joseph-fourier-17681830), Gauss, and others; semiclassical problems of
involved with scientific applications, and in many cases          polynomial and rational minimax approximation asso-
this has led to the discovery of numerical algorithms            ciated with names such as chebyshev [VI.45](/part-06/pafnuty-chebyshev-18211894) and Bern-
still in use today. gauss [VI.26](/part-06/carl-friedrich-gauss-17771855), as usual, is an out-          stein; and major newer topics, including splines, radial
standing example. Among many other contributions,                basis functions, and wavelets [VII.3](/part-07/wavelets-and-applications). We shall not
he made crucial advances in least-squares data fitting            have space to address these subjects, but in almost
(1795), systems of linear equations (1809), and numer-           every area of numerical analysis it is a fact that, sooner
ical quadrature (1814), as well as inventing the fast            or later, the discussion comes down to approximation
fourier transform [III.26](/part-03/the-fast-fourier-transform) (1805), though the last               theory.
did not become widely known until its rediscovery by
Cooley and Tukey in 1965.                                         3   Machine Arithmetic and Rounding Errors
   Around 1900, the numerical side of mathematics
started to become less conspicuous in the activities             It is well-known that computers cannot represent real
of research mathematicians. This was a consequence               or complex numbers exactly. A quotient like 1/7 eval-
of the growth of mathematics generally and of great              uated on a computer, for example, will normally yield
advances in fields in which, for technical reasons, math-         an in exact result. (It would be different if we designed
ematical rigor had to be the heart of the matter. For            machines to work in base 7!) Computers approximate
example, many advances of the early twentieth cen-               real numbers by a system of floating-point arithmetic,
tury sprang from mathematicians’ new ability to reason           in which each number is represented in a digital equiv-
rigorously about infinity, a subject relatively far from          alent of scientific notation, so that the scale does not
numerical calculation.                                           matter unless the number is so huge or tiny as to cause
   A generation passed, and in the 1940 s the computer            over flow or under flow. Floating-point arithmetic was
was invented. From this moment numerical mathemat-               invented by Konrad Zuse in Berlin in the 1930 s, and

606                                                                                    IV. Branches of Mathematics

by the end of the 1950 s it was standard across the           the magnetic moment of the electron to the Bohr mag-
computer industry.                                           neton. At present, almost nothing in physics is known
   Until the 1980 s, different computers had widely dif-       to more than 12 or 13 digits of accuracy. Thus IEEE
ferent arithmetic properties. Then, in 1985, after years     numbers are orders of magnitude more precise than
of discussion, the IEEE (Institute of Electrical and Elec-   any number in science. (Of course, purely mathematical
tronics Engineers) standard for binary floating-point         quantities like π are another matter.)
arithmetic was adopted, or IEEE arithmetic for short.          In two senses, then, floating-point arithmetic is far
This standard has subsequently become nearly univer-         closer to its ideal than is physics. It is a curious
sal on processors of many kinds. An IEEE (double pre-        phenomenon that, nevertheless, it is floating-point
cision) real number consists of a 64-bit word divided        arithmetic rather than the laws of physics that is
into 53 bits for a signed fraction in base 2 and 11 bits     widely regarded as an ugly and dangerous compromise.
for a signed exponent. Since 2−53 ≈ 1.1 . imes 10−16 , IEEE       Numerical analysts themselves are partly to blame for
numbers represent the numbers of the real line to a rel-     this perception. In the 1950 s and 1960 s, the founding
                                              10
ative accuracy of about 16 digits. Since 2±2 ≈ 10±308 ,      fathers of the field discovered that in exact arithmetic
this system works for numbers up to about 10308 and          can be a source of danger, causing errors in results
down to about 10−308 .                                       that “ought” to be right. The source of such prob-
   Computers do not merely represent numbers, of             lems is numerical instability: that is, the amplification
course; they perform operations on them such as              of rounding errors from microscopic to macroscopic
addition, subtraction, multiplication, and division, and     scale by certain modes of computation. These men,
more complicated results are obtained from sequences         including von neumann [VI.91](/part-06/john-von-neumann-19031957), Wilkinson, Forsythe,
of these elementary operations. In floating-point arith-      and Henrici, took great pains to publicize the risks of
metic, the computed result of each elementary opera-         care less reliance on machine arithmetic. These risks are
tion is almost exactly correct in the following sense: if    very real, but the message was communicated all too
“∗” is one of these four operations in its ideal form and    successfully, leading to the current widespread impres-
“.* ” is the same operation as realized on the computer,     sion that the main business of numerical analysis is
then for any floating-point numbers x and y, assuming         coping with rounding errors. In fact, the main busi-
that there is no under flow or over flow,                        ness of numerical analysis is designing algorithms that
                                                             converge quickly; rounding-error analysis, while often
               x.
                * y = (x ∗ y)(1 + ε).
                                                             a part of the discussion, is rarely the central issue. If
Here ε is a very small quantity, no greater in abso-         rounding errors vanished, 90% of numerical analysis
lute value than a number known as machine epsilon,           would remain.
denoted by εmach , that measures the accuracy of the
computer. In the IEEE system, εmach = 2−53 ≈ 1.1 . imes 4   Numerical Linear Algebra
10−16 .
   Thus, on a computer, the interval [1, 2], for example,    Linear algebra became a standard topic in undergradu-
is approximated by about 1016 numbers. It is interest-       ate mathematics curriculums in the 1950 s and 1960 s,
ing to compare the fineness of this discretization with       and has remained there ever since. There are several
that of the discretizations of physics. In a handful of      reasons for this, but I think one is at the bottom of it:
solid or liquid or a balloonful of gas, the number of        the importance of linear algebra has exploded since the
atoms or molecules in a line from one point to another       arrival of computers.
is on the order of 108 (the cube root of Avogadro’s num-       The starting point of this subject is Gaussian elimi-
ber). Such a system behaves enough like a continuum          nation, a procedure that can solve n linear equations
to justify our definitions of physical quantities such as     in n unknowns using on the order of n3 arithmetic
density, pressure, stress, strain, and temperature. Com-     operations. Equivalently, it solves equations of the form
puter arithmetic, however, is more than a million times      Ax = b, where A is an n . imes n matrix and x and b are col-
finer than this. Another comparison with physics con-         umn vectors of size n. Gaussian elimination is invoked
cerns the precision to which fundamental constants are       on computers around the world almost every time a
known, such as (roughly) 4 digits for the gravitational      system of linear equations is solved. Even if n is as
constant G, 7 digits for Planck’s constant h and the ele-    large as 1000, the time required is well under a sec-
ment ary charge e, and 12 digits for the ratio \mu e /\mu B of      ond on a typical 2008 desktop machine. The idea of

IV.21.   Numerical Analysis                                                                                       607

elimination was first discovered by Chinese scholars          with permuted rows. If the permutations are chosen to
about 2000 years ago, and more recent contributors           bring the largest entry below the diagonal in column k
include lagrange [VI.22](/part-06/joseph-louis-lagrange-17361813), Gauss, and jacobi [VI.35](/part-06/carl-gustav-jacob-jacobi-18041851).         to the (k, k) position before the kth elimination step,
The modern way of describing such algorithms, how-           then L has the additional property |ij | ⩽ 1 for all i
ever, was apparently introduced as late as the 1930 s.        and j.
Suppose that, say, α times the first row of A is sub-            The discovery of pivoting came quickly, but its
tr acted from the second row. This operation can be           theoretical analysis has proved astonishingly hard. In
interpreted as the multiplication of A on the left by the    practice, pivoting makes Gaussian elimination almost
lower-triangular matrix M1 consisting of the identity        perfectly stable, and it is routinely done by almost all
with the additional nonzero entry m21 = −α. Further          computer programs that need to solve linear systems
analogous row operations correspond to further multi-        of equations. Yet it was realized in around 1960 by
plications on the left by lower-triangular matrices Mj .     Wilkinson and others that for certain exceptional matri-
If k steps convert A to an upper-triangular matrix U,        ces, Gaussian elimination is still unstable, even with
then we have MA = U with M = Mk · · · M2 M1 , or, upon       pivoting. The lack of an explanation of this disc rep-
setting L = M −1 ,                                           ancy represents an embarrassing gap at the heart of
                        A = LU.                              numerical analysis. Experiments suggest that the frac-
Here L is unit lower-triangular, that is, lower-triangular   tion of matrices (for example, among random matri-
with all its diagonal entries equal to 1. Since U rep-       ces with independent normally distributed entries) for
resents the target structure and L encodes the opera-        which Gaussian elimination amplifies rounding errors
tions carried out to get there, we can say that Gaussian     by a factor greater than ρn1/2 is in a certain sense expo-
elimination is a process of lower-triangular upper-          nent i ally small as a function of ρ as ρ → . nfty, where n is
triangularizati on.                                           the dimension, but a theorem to this effect has never
   Many other algorithms of numerical linear algebra         been proved.
are also based on writing a matrix as a product of matri-       Meanwhile, beginning in the late 1950 s, the field of
ces that have special properties. To borrow a phrase         numerical linear algebra expanded in another direction:
from biology, we may say that this field has a central        the use of algorithms based on orthogonal [III.50 §3](/part-03/linear-operators-and-their-properties)
dogma:                                                       or unitary [III.50 §3](/part-03/linear-operators-and-their-properties) matrices, that is, real matrices
                                                             with Q−1 = QT or complex ones with Q−1 = Q∗ , where
         algorithms ←→ matrix factorizations.
                                                             Q∗ denotes the conjugate transpose. The starting point
In this framework we can quickly describe the next           of such developments is the idea of QR factorization. If
algorithm that needs to be considered. Not every matrix      A is an m . imes n matrix with m ⩾ n, a QR factorization
has an LU factorization; a 2 . imes 2 counterexample is the       of A is a product
matrix                                                                             A = QR,
                           0 1
                    A=            .
                           1 0                               where Q has orthonormal columns and R is upper-tri-
                                                             angular. One can interpret this formula as a matrix ex-
Soon after computers came into use it was observed
                                                             pression of the familiar idea of Gram–Schmidt orthog-
that even for matrices that do have LU factoriza-
                                                             onalization, in which the columns q1 , q2 , . . . of Q are
tions, the pure form of Gaussian elimination is unsta-
                                                             determined one after another. These column opera-
ble, amplifying rounding errors by potentially large
                                                             tions correspond to multiplication of A on the right
amounts. Stability can be achieved by interchanging
                                                             by elementary upper-triangular matrices. One could say
rows during the elimination in order to bring maxi-
mal entries to the diagonal, a process known as piv-         that the Gram–Schmidt algorithm aims for Q and gets
oting. Since pivoting acts on rows, it again corresponds     R as a by-product, and is thus a process of triangular
to a multiplication of A by other matrices on the left.      orthogonalizati on. A big event was when Householder
The matrix factorization corresponding to Gaussian           showed in 1958 that a dual strategy of orthogonal tri-
elimination with pivoting is                                 angular ization is more effective for many purposes. In
                                                             this approach, by applying a succession of elementary
                       P A = LU,                             matrix operations each of which reflects Rm across a
where U is upper-triangular, L is unit lower-triangular,     hyperplane, one reduces A to upper-triangular form
and P is a permutation matrix, i.e., the identity matrix     via orthogonal operations: one aims at R and gets Q

608                                                                                   IV. Branches of Mathematics

as a by-product. The Householder method turns out to        have been so successful that the computation of matrix
be more stable numerically, because orthogonal oper-        eigenvalues long ago became a “black box” operation
ations preserve norms and thus do not amplify the           for virtually every scientist, with nobody but a few spe-
rounding errors introduced at each step.                    cia lists knowing the details of how it is done. A curi-
   From the QR factorization sprang a rich collec-          ous related story is that EISPACK’s relative LINPACK for
tion of linear algebra algorithms in the 1960 s. The         solving linear systems of equations took on an unex-
QR factorization can be used by itself to solve least-      pected function: it became the original basis for the
squares problems and construct orthonormal bases.           benchmarks that all computer manufacturers run to
More remarkable is its use as a step in other algorithms.   test the speed of their computers. If a supercomputer
In particular, one of the central problems of numerical     is lucky enough to make the TOP500 list, updated twice
linear algebra is the determination of the eigenvalues      a year since 1993, it is because of its prowess in solving
and eigenvectors of a square matrix A. If A has a com-      certain matrix problems Ax = b of dimensions ranging
plete set of eigenvectors, then by forming a matrix X       from 100 into the millions.
whose columns are these eigenvectors and a diagonal            The eigenvalue decomposition is familiar to all math-
matrix D whose diagonal entries are the corresponding       ematicians, but the development of numerical linear
eigenvalues, we obtain                                      algebra has also brought its younger cousin onto the
                       AX = XD,                             scene: the singular value decomposition (SVD). The
                                                            SVD was discovered by Beltrami, jordan [VI.52](/part-06/camille-jordan-18381922), and
and hence, since X is nonsingular,
                                                            sylvester [VI.42](/part-06/james-joseph-sylvester-18141897) in the late nineteenth century, and
                     A = XDX −1 ,                           made famous by Golub and other numerical analysts
the eigenvalue decomposition. In the special case in        beginning in around 1965. If A is an m . imes n matrix with
which A is hermitian [III.50 §3](/part-03/linear-operators-and-their-properties), a complete set of         m ⩾ n, an SVD of A is a factorization
orthonormal eigenvectors always exists, giving                                     A = UΣV ∗ ,
                                ∗
                      A = QDQ ,                             where U is m . imes n with orthonormal columns, V is n . imes n
where Q is unitary. The standard algorithm for com-         and unitary, and Σ is diagonal with diagonal entries
puting these factorizations was developed in the early      σ1 ⩾ σ2 ⩾ · · · ⩾ σn ⩾ 0. One could compute the
1960 s by Francis, Kublanovskaya, and Wilkinson: the         SVD by relating it to the eigenvalue problems for AA∗
QR algorithm. Because polynomials of degree 5 or more       and A∗ A, but this proves numerically unstable; a bet-
cannot be solved by a formula, we know that eigen-          ter approach is to use a variant of the QR algorithm
values cannot generally be computed in closed form.         that does not square A. Computing the SVD is the stan-
The QR algorithm is therefore necessarily an iterative      dard route to determining the norm [III.62](/part-03/normed-spaces-and-banach-spaces) A = σ1
one, involving a sequence of QR factorizations that is      (here  ·  is the hilbert space [III.37](/part-03/bayesian-analysis) or “2” norm), the
in principle infinite. Nevertheless, its convergence is      norm of the inverse A−1  = 1/σn in the case where A
extraordinarily rapid. In the symmetric case, for a typ-    is square and nonsingular, or their product, known as
ical matrix A, the QR algorithm converges cubically,        the condition number,
in the sense that at each step the number of cor-
                                                                          κ(A) = A A−1  = σ1 /σn .
rect digits in one of the eigenvalue–eigenvector pairs
approximately triples.                                      It is also a step in an extraordinary variety of fur-
  The QR algorithm is one of the great triumphs of          ther computational problems including rank-deficient
numerical analysis, and its impact through widely used      least-squares, computation of ranges and nullspaces,
software products has been enormous. Algorithms and         determination of ranks, “total least-squares,” low-rank
analysis based on it led in the 1960 s to computer codes     approximation, and determination of angles between
in Algol and Fortran and later to the software library      subspaces.
EISPACK (“Eigensystem Package”) and its descendant             All the discussion above concerns “classical” numer-
LAPACK. The same methods have also been incor-              ical linear algebra, born in the period 1950–75. The
porated in general-purpose numerical libraries such         ensuing quarter-century brought in a whole new set
as the NAG, IMSL, and Numerical Recipes collections,        of tools: methods for large-scale problems based on
and in problem-solving environments such as MAT-            Krylov subspace iterations. The idea of these iterations
LAB, Maple, and Mathematica. These developments             is as follows. Suppose a linear algebra problem is given

IV.21.   Numerical Analysis                                                                                         609

that involves a matrix of large dimension, say n /            far as 2.376 for certain recursive (though impractical)
1000. The solution may be characterized as the vector         algorithms published by Coppersmith and Winograd in
x ∈ Rn that satisfies a certain variational property such      1990. Is there a “fast matrix inverse” in store for us?
as minimizing 12 x T Ax − x T b (for solving Ax = b if A is
symmetric positive definite) or being a stationary point       5   Numerical Solution of Differential Equations
of (x T Ax)/(x T x) (for solving Ax = . ambda x if A is symmet-
                                                              Long before much attention was paid to linear alge-
ric). Now if Kk is a k-dimensional subspace of Rn with
                                                              bra, mathematicians developed numerical methods to
k 0 n, then it may be possible to solve the same vari-
                                                              solve problems of analysis. The problem of numeri-
ational problem much more quickly in that subspace.
                                                              cal integration or quadrature goes back to Gauss and
The magical choice of Kk is a Krylov subspace
                                                              newton [VI.14](/part-06/isaac-newton-16421727), and even to archimedes [VI.3](/part-06/archimedes-ca). The
           Kk (A, q) = span(q, Aq, . . . , Ak−1 q)            classic quadrature formulas are derived from the idea
for an initial vector q. For reasons that have fascinat-      of interpolating data at n + 1 points by a polynomial
ing connections with approximation theory, solutions          of degree n, then integrating the polynomial exactly.
in these subspaces often converge very rapidly to the         Equally spaced interpolation points give the Newton–
exact solution in Rn as k increases, if the eigenvalues of    Cotes formulas, which are useful for small degrees but
A are favorably distributed. For example, it is often pos-    diverge at a rate as high as 2 n as n → . nfty: the Runge
sible to solve a matrix problem involving 105 unknowns        phenomenon. If the points are chosen optimally, then
to ten-digit precision in just a few hundred iterations.      the result is Gauss quadrature, which converges rapidly
The speedup compared with the classical algorithms            and is numerically stable. It turns out that these opti-
may be a factor of thousands.                                 mal points are roots of Legendre polynomials, which
  Krylov subspace iterations originated with the conju-       are clustered near the endpoints. (A proof is sketched in
gate gradient and Lanczos iterations published in 1952,       special functions [III.85](/part-03/special-functions).) Equally good for most pur-
but in those years computers were not powerful enough         poses is Clenshaw–Curtis quadrature, where the inter-
to solve problems of a large enough scale for the meth-       polation points become cos(jπ /n), 0 ⩽ j ⩽ n. This
ods to be competitive. They took off in the 1970 s with         quadrature method is also stable and rapidly conver-
the work of Reid and Paige and especially van der Vorst       gent, and unlike Gauss quadrature can be executed in
and Meijerink, who made famous the idea of precon-            O(n log n) operations by the fast Fourier transform.
dition ing. In preconditioning a system Ax = b, one            The explanation of why clustered points are necessary
replaces it by a mathematically equivalent system such        for effective quadrature rules is related to the subject
as                                                            of potential theory.
                       MAx = Mb                                  Around 1850 another problem of analysis began to
                                                              get attention: the solution of ODEs. The Adams formu-
for some nonsingular matrix M. If M is well chosen,
                                                              las are based on polynomial interpolation in equally
the new problem involving MA may have favorably dis-
                                                              spaced points, which in practice typically number fewer
tributed eigenvalues and a Krylov subspace iteration
                                                              than ten. These were the first of what are now called
may solve it quickly.
                                                              multistep methods for the numerical solution of ODEs.
   Since the 1970 s, preconditioned matrix iterations
                                                              The idea here is that for an initial value problem u =
have emerged as an indispensable tool of com put a-
                                                              f (t, u) with independent variable t > 0, we pick a small
tional science. As one indication of their prominence we
                                                              time step Δt > 0 and consider a finite set of time values
may note that in 2001, Thomson ISI announced that the
most heavily cited article in all of mathematics in the                          tn = nΔt,      n ⩾ 0.
1990 s was the 1989 paper by van der Vorst introducing         We then replace the ODE by an algebraic approx i-
Bi-CGStab, a generalization of conjugate gradients for        mation that enables us to calculate a succession of
nonsymmetric matrices.                                        approximate values
   Finally, we must mention the biggest unsolved prob-
                                                                                v n ≈ u(tn ),    n ⩾ 0.
lem in numerical analysis. Can an arbitrary n . imes n matrix
A be inverted in O(nα ) operations for every α > 2?           (The superscript here is just a superscript, not a power.)
(The problems of solving a system Ax = b or com-              The simplest such approximate formula, going back to
puting a matrix product AB are equivalent.) Gaussian          euler [VI.19](/part-06/leonhard-euler-17071783), is
elimination has α = 3, and the exponent shrinks as                           v n+1 = v n + Δtf (tn , v n ),

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
chemistry (the schrödinger equation [III.83](/part-03/the-schrdinger-equation)) ; structural mechanics (the equations of elasticity) ; weather prediction (the geostrophic equations) ; turbine design (the navierstokes equations [III.23](/part-03/the-euler-and-navierstokes-equations)) ; acoustics (the Helmholtz equation) ; telecommunicati ons (maxwell ’ s equations [IV.13](/part-04/general-relativity-and-the-einstein-equations) ) ; cosmology (the Einstein equations) ; oil discovery (the migration equations) ; groundwater remediation (Darcy ’ s law) ;
integrated circuit design (the drift diffusion equations) ; tsunami modeling (the shallowwater equations) ; optical fibers (the nonlinear wave equations [III.49](/part-03/linear-and-nonlinear-waves-and-solitons)) ; image enhancement (the Perona Malik equation); metallurgy (the Cahn-Hilliard equation); pricing financial options (the black-scholes equation [VII.9](/part-07/the-mathematics-of-money) ).

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

IV.21.   Numerical Analysis                                                                                       613

and one may utilize it just as before in a Newton itera-    Rn to R. Even the problem of stating local optimality
tion to find a zero of g(x), the new feature being that      conditions for solutions to such problems is nontrivial,
a Hessian is always symmetric.                              a matter involving lagrange multipliers [III.64](/part-03/optimization-and-lagrange-multipliers) and
   Though the Newton formulas for minimization and          a distinction between active and in active constraints.
finding zeros were already established, the arrival of       This problem was solved by what are now known as
computers created a new field of numerical optimiza-         the KKT conditions, introduced by Kuhn and Tucker in
tion. One of the obstacles quickly encountered was          1951 and also twelve years earlier, it was subsequently
that Newton’s method often fails if the initial guess       realized, by Karush. Development of algorithms for
is not good. This problem has been comprehensively          constrained nonlinear optimization continues to be an
addressed both practically and theoretically by the         active research topic today.
algorithmic technologies known as line searches and            The problem of constraints brings us to the other
trust regions.                                              strand of numerical optimization, linear programming.
   For problems with more than a few variables, it also     This subject was born in the 1930 s and 1940 s with
quickly became clear that the cost of evaluating Jaco-      Kantorovich in the Soviet Union and Dantzig in the
bians or Hessians at every step could be exorbitant.        United States. As an out growth of his work for the
Faster methods were needed that might make use of           U.S. Air Force in the war, Dantzig invented in 1947
in exact Jacobians or Hessians and/or in exact solutions      the famous simplex algorithm [III.84](/part-03/the-simplex-algorithm) for solving lin-
of the associated linear equations, while still achiev-     ear programs. A linear program is nothing more than
ing superlinear convergence. An early breakthrough          a problem of minimizing a linear function of n vari-
of this kind was the discovery of quasi-Newton meth-        ables subject to m linear equality and/or inequality
ods in the 1960 s by Broyden, David on, Fletcher, and         constraints. How can this be a challenge? One answer is
Powell, in which partial information is used to gen-        that m and n may be large. Large-scale problems may
erate steadily improving estimates of the true Jaco-        arise through discretization of continuous problems
bian or Hessian or its matrix factors. An illustration      and also in their own right. A famous early example
of the urgency of this subject at the time is the fact      was Leontiev’s theory of input–output models in eco-
that in 1970 the optimal rank-two symmetric positive-       nomics, which won him the Nobel Prize in 1973. Even in
definite quasi-Newton updating formula was published         the 1970 s the Soviet Union used an input–output com-
independently by no fewer than four different authors,       puter model involving thousands of variables as a tool
namely Broyden, Fletcher, Goldfarb, and Shanno; their       for planning the economy.
discovery has been known ever since as the BFGS for-           The simplex algorithm made medium- and large-
mula. In subsequent years, as the scale of tractable        scale linear programming problems tractable. Such a
problems has increased exponentially, new ideas have        problem is defined by its objective function, the func-
also become important, including automatic differ en-         tion f (x) to be minimized, and its feasible region, the
tiation, a technology that enables derivatives of com-      set of vectors x ∈ Rn that satisfy all the constraints. For
puted functions to be determined automatically: the         a linear program the feasible region is a polyhedron, a
computer program itself is “differentiated,” so that as      closed domain bounded by hyperplanes, and the opti-
well as producing numerical outputs it also produces        mal value of f is guaranteed to be attained at one of
their derivatives. The idea of automatic differentiation     the vertex points. (A point is called a vertex if it is
is an old one, but for various reasons, partly related to   the unique solution of some subset of the equations
advances in sparse linear algebra and to the develop-       that define the constraints.) The simplex algorithm pro-
ment of “reverse mode” formulations, it did not become      ceeds by moving systematically downhill from one ver-
fully practical until the work of Bischof, Carle, and       tex to another until an optimal point is reached. All of
Griewank in the 1990 s.                                      the iterates lie on the boundary of the feasible region.
   Unconstrained optimization problems are relatively          In 1984, an upheaval occurred in this field, triggered
easy, but they are not typical; the true depth of this      by Narendra Karmarkar at AT&T Bell Laboratories. Kar-
field is revealed by the methods that have been devel-       markar showed that one could some times do much
oped for dealing with constraints. Suppose a function       better than the simplex algorithm by working in the
f : Rn → R is to be minimized subject to certain equal-     interior of the feasible region instead. Once a connec-
ity constraints cj (x) = 0 and inequality constraints       tion was shown between Karmarkar’s method and the
dj (x) ⩾ 0, where {cj } and {dj } are also functions from   logarithmic barrier methods popularized by Fiacco and

614                                                                                    IV. Branches of Mathematics

Mc Cormick in the 1960 s, new interior methods for lin-           First, computer programs for quadrature became
ear programming were devised by applying techniques          adaptive; then programs for ODEs did as well. For
previously viewed as suitable only for nonlinear prob-       PDEs, the move to adaptive programs is happening
lems. The crucial idea of working in tandem with a pair      on a longer timescale. More recently there have been
of primal and dual problems led to today’s powerful          related developments in the computation of Fourier
primal–dual methods, which can solve continuous opti-        transforms, optimization, and large-scale numerical
mization problems with millions of variables and con-        linear algebra, and some of the new algorithms adapt
strain ts. Starting with Karmarkar’s work, not only has       to the computer architecture as well as the mathemat-
the field of linear programming changed completely,           ical problem. In a world where several algorithms are
but the linear and nonlinear sides of optimization are       known for solving every problem, we increasingly find
seen today as closely related rather than essentially        that the most robust computer program will be one
different.                                                    that has diverse capabilities at its disposal and deploys
                                                             them adaptively on the fly. In other words, numeri-
                    7 The Future                             cal computation is increasingly embedded in intelligent
Numerical analysis sprang from mathematics; then it          control loops. I believe this process will continue, just
spawned the field of computer science. When universi-         as has happened in so many other areas of technology,
ties began to found computer science departments in          removing scientists further from the details of their
the 1960 s, numerical analysts were often in the lead.        computations but offering steadily growing power in
Now, two generations later, most of them are to be           exchange. I expect that most of the numerical computer
found in mathematics departments. What happened? A           programs of 2050 will be 99% intelligent “wrapper” and
part of the answer is that numerical analysts deal with      just 1% actual “algorithm,” if such a distinction makes
continuous mathematical problems, where as computer           sense. Hardly anyone will know how they work, but they
scientists prefer discrete ones, and it is remarkable how    will be extraordinarily powerful and reliable, and will
wide a gap this can be.                                      often deliver results of guaranteed accuracy.
   Nevertheless, the computer science side of numerical         This story will have a mathematical corollary. One
analysis is of crucial importance, and I would like to end   of the fundamental distinctions in mathematics is be-
with a prediction that emphasizes this aspect of the         tween linear problems, which can be solved in one
subject. Traditionally one might think of a numerical        step, and nonlinear ones, which usually require itera-
algorithm as a cut-and-dried procedure, a loop of some       tion. A related distinction is between forward problems
kind to be executed until a well-defined termination          (one step) and inverse problems (iteration). As numeri-
criterion is satisfied. For some computations this pic-       cal algorithms are increasingly embedded in intelligent
ture is accurate. On the other hand, beginning with the      control loops, almost every problem will be handled by
work of de Boor, Lyness, Rice and others in the 1960 s, a     iteration, regard less of its philosophical status. Prob-
less deterministic kind of numerical computing began         lems of algebra will be solved by methods of analy-
to appear: adaptive algorithms. In an adaptive quadra-       sis; and between linear and nonlinear, or forward and
ture program of the simplest kind, two estimates of          inverse, the distinctions will fade.
the integral are calculated on each portion of a certain
mesh and then compared to produce an estimate of                          8    Appendix: Some Major
the local error. Based on this estimate, the mesh may                         Numerical Algorithms
then be refined locally to improve the accuracy. This
process is carried out iteratively until a final answer is    The list in table 1 attempts to identify some of the
obtained that aims to be accurate to a tolerance spec-       most significant algorithmic (as opposed to theoret-
ified in advance by the user. Most such computations          ical) developments in the history of numerical analy-
come with no guarantee of accuracy, but an exciting          sis. In each case some of the key early figures are cited,
on going development is the advance of more sophis-           more or less chronologically, and a key early date is
ti cated techniques of a posteriori error control that        given. Of course, any brief sketch of history like this
some times do provide guarantees. When these are com-         must be an over simplification. Distressing omissions of
bined with techniques of interval arithmetic, there is       names occur through out the list, including many early
even the prospect of accuracy guaranteed with respect        contributors in fields such as finite elements, precondi-
to rounding as well as discretization error.                 tion ing, and automatic differentiation, as well as more