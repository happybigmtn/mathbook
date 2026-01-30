# Symplectic Manifolds

III.88.   Symplectic Manifolds

elementary) definition of spherical harmonics. This def-     in x that are equal to spherical harmonics of dimen-
inition, combined with the fact that the Laplace opera-     sion 3. For example, if p(x, y, z) = 2 x 2 − y 2 − z 2 then
tor is self-adjoint, explains many of the important prop-   Δp = 0, and p(x, y, z) = 3 x 2 − 1 every where on S 2 ,
erties of spherical harmonics. (See linear operators
and their properties [III.50 §3](/part-03/linear-operators-and-their-properties) for an amplification
of this remark.)
   One reason for the importance of Fourier analysis is     are equal to the Chebyshev and Legendre polynomials
that many important linear operators become diago-
nal, and hence particularly easy to understand, when
they are applied to the Fourier transform of a func-
tion. For example, if f is a smooth periodic function
and we write it as n∈Z an einθ , then the derivative of     orders are orthogonal, the polynomials just described
     
f is n∈Z nan einθ . Writing fˆ(n) and f ! (n) for the nth
Fourier coefficients of f and f , respectively, we deduce     works out what these are, one discovers that they are
that f! (n) = nfˆ(n), which tells us that to differentiate
a function f all we have to do is multiply its Fourier
transform pointwise by the function g(n) = n. This
provides a very useful technique for solving differential
equations.
   As has already been mentioned, spherical harmonics
are eigenvectors of the Laplacian, but they also diag-
onalize several other linear operators. A good exam-
ple is the spherical Radon transform, which is defined
as follows. If f is a function from S d−1 to R, then its    role in helping us to understand the actions of groups
spherical Radon transform Rf is another function from
S d−1 to R, and the value of Rf at a point x is the aver-   geometry and complex geometry, and there is an impor-
age value of f over all points y that are orthogonal
to x. This is closely related to the more usual Radon
transform, which replaces a function defined on the
plane by its averages over lines; inverting the Radon
transform is important for creating images from the
outputs of medical scanners. The spherical harmonics
turn out to be eigenfunctions for the spherical Radon
transform. More generally, any transform T of the form
T f (x) = S w(x · y)f (y) dμ(y), where w is a suitable
function (or generalized function), is diagonalized by
spherical harmonics. The eigenvalue associated with
a given spherical harmonic can be calculated by the
so-called Funk–Hecke formula.
   Spherical harmonics give a way of linking cheby-
shev and legendre polynomials [III.85](/part-03/special-functions), and show-
ing that both of them are natural concepts. The Cheby-
shev polynomials are those polynomials in x that are
also spherical harmonics of dimension 2: that is, that
are equal on S 1 to homogeneous harmonic polynomials
in two variables. For instance, because x 2 + y 2 = 1 for
every (x, y) in the circle S 1 , the function x 3 − 3 xy 2
that we considered earlier is equal on S 1 to the func-     If a linear transformation A : R2 → R2 is area preserv-
tion 4 x 3 − 3 x, so 4 x 3 − 3 x is a Chebyshev polyno-
mial. The Legendre polynomials are those polynomials

297
since x 2 + y 2 + z2 = 1. Therefore, 3 x 2 − 1 is a Legendre
polynomial.
Here is a sketch of a proof that these polynomials
as they are usually defined. The usual definition is that
they are sequences of polynomials, one for each degree,
that are uniquely determined by certain orthogonal-
ity relations. Because spherical harmonics of different

also satisfy certain orthogonality relations. When one
precisely the relations that define the Chebyshev and
Legendre polynomials.
III.88 Symplectic Manifolds
Gabriel P. Paternain
Symplectic geometry is the geometry that governs clas-
sical physics, and more generally plays an important
on manifolds. It shares some features with Riemannian
tant special class of manifolds, the Kähler manifolds, in
which all three geometric structures are unified.
1   Symplectic Linear Algebra
Just as riemannian geometry [I.3 §6.10](/part-01/fundamental-definitions) is based
on euclidean geometry [I.3 §6.2](/part-01/fundamental-definitions), symplectic geom-
etry is based on the geometry of the so-called linear
symplectic space (R2 n , ω0 ).
Given two vectors v = (q, p) and v = (q , p )
in the plane R2 , the signed area ω0 (v, v ) of the
parallelogram spanned by v and v is given by the
formula
     
q q
ω0 (v, v ) = det
p  p
It can also be written using matrices and inner products
as ω0 (v, v ) = v · Jv, where J is the 2 . imes 2 matrix

0  1
J=
−1 0
ing and orientation preserving, then ω0 (Av, Av ) =
ω0 (v, v ) for every v and v .

298

   Symplectic geometry studies two-dimensional signed
area measurements like this, as well as transforma-
tions that preserve these measurements, but it applies
to general spaces of dimension 2 n rather than just to
the plane.
   If we split R2 n up as Rn . imes Rn , then we can write a vec-
tor v in R2 n as v = (q, p), where q and p each belong to
Rn . The standard symplectic form ω0 : R2 n . imes R2 n → R
is defined by the formula

where “·” denotes the usual inner product in Rn . Geo-
metric ally, ω0 (v, v ) can be interpreted as the sum of
the signed areas of the parallelograms spanned by the
projections of v and v to the qi pi -planes. In terms of
matrices, we can write

where J is the 2 n . imes 2 n matrix
and I is the n . imes n identity matrix.
   A linear map A : R2 n → R2 n that preserves the prod-
uct ω0 of any two vectors (that is, ω0 (Av, Av ) =
ω0 (v, v ) for all v, v ∈ R2 n ) is called a symplectic
linear transformation; equivalently, a 2 n . imes 2 n matrix
A is symplectic if and only if AT JA = J, where AT
is the transpose of A. Symplectic linear transforma-
tions are to symplectic geometry as rigid motions are
to Euclidean geometry. The set of all symplectic linear
transformations of (R2 n , ω0 ) is one of the classical lie
groups [III.48 §1](/part-03/lie-theory) and is denoted by Sp(2 n). One can
show that symplectic matrices A ∈ Sp(2 n) always have
determinant [III.15](/part-03/determinants) 1, and are thus volume preserv-
ing. However, the converse does not hold when n ⩾ 2.
For instance, if n = 2, the linear map

has determinant 1 for any a ≠ 0, but it is symplectic
only if a2 = 1.
   The standard symplectic form ω0 has three proper-
ties worth noting. First, it is bilinear : the expression
ω0 (v, v ) varies linearly in v when v is held fixed,
and vice versa. Second, it is antisymmetric: we have
ω0 (v, v ) = −ω0 (v , v) for all v and v , and in partic-
ular ω0 (v, v) = 0. Finally, it is nondegenerate, which
means that for every nonzero v there is a nonzero
v such that ω0 (v, v ) ≠ 0. The standard symplectic
form ω0 is not the only form that obeys these three
properties; however, it turns out that any form with

III. Mathematical Concepts
these three properties can be converted into the stan-
dard form ω0 after an invertible linear change of vari-
ables. (This is a special case of Darboux’s theorem.)
Thus (R2 n , ω0 ) is essentially the “only” linear sym plec-
tic geometry in 2 n dimensions. There are no symplectic
forms in odd-dimensional spaces.
2    Symplectic Diffeomorphisms of (R2 n , ω0 )
In Euclidean geometry, all rigid motions are automat-
ω0 (v, v ) = p · q − q · p ,
symplectic geometry there are many more sym plec-
tic maps than just the symplectic linear transforma-
tions. These nonlinear symplectic maps in (R2 n , ω0 )
are one of the principal objects of study in symplectic
geometry.
Let U ⊂ R2 n be an open set. Recall that a map φ :
ω0 (v, v ) = v · Jv,
U → R2 n is called smooth if it has continuous partial
derivatives of all orders. A diffeomorphism is a smooth
       
0   I                                   map with smooth inverse.
J=                                      (2)      A smooth nonlinear map φ : U → R2 n is said to
−I 0
be symplectic if, for every x ∈ U, the Jacobi an matrix
φ (x) of first derivatives of φ is a symplectic linear
transformation. Informally, a symplectic map is one
that behaves like a symplectic linear transformation
at infinitesimally small scales. Since symplectic linear
transformations have determinant 1, we can conclude
using several-variable calculus that a symplectic map
is always locally volume preserving and locally invert-
ible; roughly speaking, this means that the map φ :
A → φ(A) is invertible whenever A is a sufficiently
small subset of U, and φ(A) has the same volume as
A. However, the converse is not true when n ⩾ 2; the
class of symplectic maps is much more restricted than
that of volume-preserving maps. In fact, Gromov’s non-
squeezing theorem (see below) shows how striking this
difference can be.
(q1 , q2 , p1 , p2 ) → (aq1 , q2 /a, ap1 , p2 /a)
time in Hamiltonian mechanics under the name of
canonical transformations. We briefly explain this in the
next subsection.
2.1   Hamilton’s Equations
How can we produce nonlinear symplectic maps? Let
us begin by exploring a familiar example. Consider the
motion of a simple pendulum with length l and mass
m and let q(t) be the angle it makes with the vertical
at time t. The equation of motion is
d2 q  g
+ sin q = 0,
dt 2  l

III.88.   Symplectic Manifolds

where g is the acceleration due to gravity. If we define
the momentum p as p = ml2 q̇, then we may trans-
form this second-order differential equation into a
first-order system in the phase plane R2 , namely

where the vector field X : R2 → R2 is given by
the formula X(q, p) = (p/ml2 , −mgl sin q). For each
(q(0), p(0)) ∈ R2 there is a unique solution (q(t), p(t))    system that is simpler to analyze.
to (3) with initial condition (q(0), p(0)). Then for any
fixed time t we obtain an evolution map (or flow) φt :
R2 → R2 given by φt (q(0), p(0)) = (q(t), p(t)), which
has the remarkable property of being area preserving.
This can be deduced from the observation that X is
divergence free, or in other words that

In fact, for every time t, φt is a symplectic map on
(R2 , ω0 ).
  More generally, any system in classical mechanics
with finitely many degrees of freedom can be refor-
mulated in a similar fashion, so that the evolution
maps φt are always symplectic maps; in this con-
text, they are also known as canonical transformations.
The Irish mathematician william rowan hamilton
[VI.37](/part-06/william-rowan-hamilton-18051865) showed us how to do this in general more than
170 years ago. Given any smooth function H : R2 n →
R (called the Hamiltonian), the system of first-order
differential equations given by

will (under some mild growth assumptions on H, which
we ignore here) give rise to evolution operators φt :
R2 n → R2 n , which are symplectic maps on (R2 n , ω0 ) for
every time t. To see the connection with the symplectic
form ω0 , observe that we may rewrite (4) and (5) in the     (q, p) → (aq1 , q2 /a, q3 , . . . , qn , ap1 , p2 /a, p3 , . . . , pn ).
following equivalent form:
where ∇H is the usual gradient [I.3 §5.3](/part-01/fundamental-definitions) of H and J
was defined in (2). From (6), (1), and the antisymmetry
property of ω0 , it is then not difficult to verify that φt    embedding squeezing B(R) into Z(r ), but a remarkable
is symplectic for every t (the main trick is to compute
the derivative of ω0 (φt (x)v, φt (x)v ) in t and check
that it equals zero).
   We have already pointed out that symplectic maps
are volume preserving. The preservation of volume by

299
Hamiltonian systems (a result known as Liouville’s theo-
rem) attracted considerable attention in the nineteenth
century and it was a driving force in the development
of ergodic theory [V.9](/part-05/ergodic-theorems), which studies recurrence
d
(q, p) = X(q, p),                (3)
dt
an important role in classical physics, as they allow
one to replace a complicated system by an equivalent
2.2   Gromov’s Nonsqueezing Theorem
What is the difference between a symplectic map and a
volume-preserving map? In order to answer this ques-
tion, suppose that we have two connected open sets U
and V in R2 n and that we wish to embed one into the
d p
+    (−mgl sin q) = 0.
dq ml2   dp
is a homeomorphism onto its image. We know such a
φ must be volume preserving, so we clearly have the
restriction that the volume of U should be at most
the volume of V , but is this restriction all that mat-
ters? Consider the open ball B(R) = {x ∈ R2 n : |x| <
R}, which has radius R and center at the origin, and
clearly has finite volume. It is not hard to embed it
symplectically into the infinite-volume cylinder given
by
C(r ) = {(q, p) ∈ R2 n : q12 + q22 < r 2 },
whatever the values of R and r . Indeed, the linear
symplectic map
dqi   ∂H
=     ,     i = 1, . . . , n,
dt   ∂pi
dpi    ∂H
=−
dt     ∂qi
instead we consider the infinite-volume cylinder
Z(r ) = {(q, p) ∈ R2 n : q12 + p12 < r 2 }.
We could try with a similar linear map like
This map is volume preserving (it has determinant 1)
dx                                     and for a small it embeds B(R) into Z(r ). However, it
= J∇H(x),                    (6)
dt                                     is symplectic only if a = 1, so it will give a symplectic
embedding only if R ⩽ r . One is tempted to think that if
R > r , then there should still be a nonlinear symplectic
theorem of Gromov from 1985 asserts that it is not
possible to find such a map.
In spite of this deep result of Gromov, and other
results that followed it, we still do not know much
about how sets in R2 n embed into one another.

300

Recall from differential topology [IV.7](/part-04/dierential-topology) that a man-
ifold of dimension d is a topological space [III.90](/part-03/topological-spaces)
such that each point has a neighborhood that is home-
omorphic to an open set in Euclidean space Rd . One
can think of Rd as a local model for this manifold, in
the sense that it describes what the manifold looks
like at very small distance scales. Recall also that a
smooth manifold is one for which the “transition func-
tions” are smooth. This means that if ψ : U → Rd and
φ : V → Rd are coordinate charts, then the transition
function ψ ◦ φ−1 between the open sets φ(U ∩ V ) and
ψ(U ∩ V ) is smooth.
   A symplectic manifold is defined similarly, but now
the local model is the linear symplectic space (R2 n , ω0 ).   and the Riemannian structure (as given by the dot prod-
More precisely, a symplectic manifold M is a manifold
of dimension 2 n that can be covered with domains
of coordinate charts whose transition functions are
symplectic diffeomorphisms of (R2 n , ω0 ).
   Of course, any open set in (R2 n , ω0 ) is a symplectic     phic if each coordinate component of f (z1 , . . . , zn ) is
manifold. An example of a compact symplectic man-
ifold is the torus T2 n , which is obtained as the quo-
tient of R2 n by the action of Z2 n . In other words, two
points x, y ∈ R2 n are equivalent if x − y has inte-
ger coordinates. Other important examples of sym plec-
tic manifolds include riemann surfaces [III.79](/part-03/riemann-surfaces), com-
plex projective space [III.72](/part-03/projective-space), and cotangent bundles
[IV.6 §5](/part-04/algebraic-topology). However, it is a wide open problem to deter-
mine, given a compact manifold, whether it can be
assigned a system of coordinate charts that makes it
symplectic.
   We have seen that in (R2 n , ω0 ), one can assign an
“area” ω0 (v, v ) to any parallelogram in the space R2 n .
In a symplectic manifold M, one can similarly assign an
area ωp (v, v ), but only to infinitesimal parallelograms
based at a point p ∈ M. The axes of such a parallelo-
gram are two infinitesimal vectors (or more precisely
tangent vectors) v and v . There is a unique way to do
this so that all the coordinate charts for M are sym-
plectic diffeomorphisms. In the language of differ en-
tial forms [III.16](/part-03/dierential-forms-and-integration), the map p → ωp is an anti sym-
metric nondegenerate 2-form, which can then be used
to compute the “area” S ω of non infinitesimal two-
dimensional surfaces S in M. One can show that for
any sufficiently small closed surface S, the integral S ω
vanishes, so ω is a closed form. Indeed, one can define
a symplectic manifold more abstractly (with out refer-
ence to charts) as a smooth manifold equipped with a
closed, antisymmetric nondegenerate 2-form ω; a clas-

III. Mathematical Concepts
3   Symplectic Manifolds
inition is equivalent to the more concrete definition
using coordinate charts.
Finally, a special class of symplectic manifolds is
given by Kähler manifolds. These are symplectic mani-
folds that are also complex manifolds, in such a way that
the two structures are naturally compatible, a condition
that generalizes the relationship (1). Observe that if one
identifies points (q, p) in R2 n with points p + iq in Cn ,
then the linear transformation J : R2 n → R2 n becomes
the operation of multiplication by i:
J : (z1 , . . . , zn ) → (iz1 , . . . , izn ).
Thus the identity (1) relates the symplectic structure
(as given by ω0 ), the complex structure (as given by J),
uct “·”). A complex manifold is a manifold that at small
distance scales looks like regions of Cn , with the tran-
sition functions required to be holomorphic [I.3 §5.6](/part-01/fundamental-definitions).
(A smooth map f : U ⊂ Cn → Cn is said to be holomor-
holomorphic in each variable zk .) On a complex mani-
fold we can multiply tangent vectors by i. This gives us
at each point p ∈ M a linear map Jp such that Jp2 v = −v
for all tangent vectors v at p. A Kähler manifold is
a complex manifold M with a symplectic structure ω
(which computes signed areas of infinitesimal parallel-
ograms) and a Riemannian metric g (which computes
an inner product gp (v, v ) of any two tangent vectors
v, v at p); these two structures are linked together by
the analogue of (1), namely
ωp (v, v ) = gp (v , Jp v).
Examples of Kähler manifolds include complex vector
spaces Cn , Riemann surfaces, and complex projective
spaces CPn .
An example of a compact symplectic manifold that is
not Kähler can be obtained by taking the quotient of R4
by a symplectic action of a group that looks like Z4 but
with a group operation that differs from the usual one.
The change in the group structure manifests itself as
a topological property (an odd first Betti number) that
prevents the quotient being Kähler.
Further Reading
Arnold, V. I. 1989. Mathematical Methods of Classical Me-
chanics, 2 nd edn. Graduate Texts in Mathematics, vol-
ume 60. New York: Springer.
Mc Duff, D., and D. Salamon. 1998. Introduction to Sym plec-
tic Topology, 2 nd edn. Oxford Mathematical Monographs.
Oxford: Clarendon Press/Oxford University Press.