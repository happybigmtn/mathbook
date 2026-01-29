# Symplectic Manifolds

III.88.   Symplectic Manifolds                                                                                    297

elementary) definition of spherical harmonics. This def-     in x that are equal to spherical harmonics of dimen-
inition, combined with the fact that the Laplace opera-     sion 3. For example, if p(x, y, z) = 2 x 2 − y 2 − z 2 then
tor is self-adjoint, explains many of the important prop-   Δp = 0, and p(x, y, z) = 3 x 2 − 1 every where on S 2 ,
erties of spherical harmonics. (See linear operators        since x 2 + y 2 + z2 = 1. Therefore, 3 x 2 − 1 is a Legendre
and their properties [III.50 §3](/part-03/linear-operators-and-their-properties) for an amplification        polynomial.
of this remark.)                                               Here is a sketch of a proof that these polynomials
   One reason for the importance of Fourier analysis is     are equal to the Chebyshev and Legendre polynomials
that many important linear operators become diago-          as they are usually defined. The usual definition is that
nal, and hence particularly easy to understand, when        they are sequences of polynomials, one for each degree,
they are applied to the Fourier transform of a func-        that are uniquely determined by certain orthogonal-
tion. For example, if f is a smooth periodic function       ity relations. Because spherical harmonics of different
                      
and we write it as n∈Z an einθ , then the derivative of     orders are orthogonal, the polynomials just described
     
f is n∈Z nan einθ . Writing fˆ(n) and f ! (n) for the nth
                                                            also satisfy certain orthogonality relations. When one
Fourier coefficients of f and f , respectively, we deduce     works out what these are, one discovers that they are
that f! (n) = nfˆ(n), which tells us that to differentiate
                                                            precisely the relations that define the Chebyshev and
a function f all we have to do is multiply its Fourier      Legendre polynomials.
transform pointwise by the function g(n) = n. This
provides a very useful technique for solving differential
equations.
                                                            III.88 Symplectic Manifolds
   As has already been mentioned, spherical harmonics                Gabriel P. Paternain
are eigenvectors of the Laplacian, but they also diag-
onalize several other linear operators. A good exam-        Symplectic geometry is the geometry that governs clas-
ple is the spherical Radon transform, which is defined       sical physics, and more generally plays an important
as follows. If f is a function from S d−1 to R, then its    role in helping us to understand the actions of groups
spherical Radon transform Rf is another function from       on manifolds. It shares some features with Riemannian
S d−1 to R, and the value of Rf at a point x is the aver-   geometry and complex geometry, and there is an impor-
age value of f over all points y that are orthogonal        tant special class of manifolds, the Kähler manifolds, in
to x. This is closely related to the more usual Radon       which all three geometric structures are unified.
transform, which replaces a function defined on the
plane by its averages over lines; inverting the Radon                  1   Symplectic Linear Algebra
transform is important for creating images from the
outputs of medical scanners. The spherical harmonics        Just as riemannian geometry [I.3 §6.10](/part-01/fundamental-definitions) is based
turn out to be eigenfunctions for the spherical Radon       on euclidean geometry [I.3 §6.2](/part-01/fundamental-definitions), symplectic geom-
transform. More generally, any transform T of the form      etry is based on the geometry of the so-called linear
T f (x) = S w(x · y)f (y) dμ(y), where w is a suitable      symplectic space (R2 n , ω0 ).
function (or generalized function), is diagonalized by        Given two vectors v = (q, p) and v = (q , p )
spherical harmonics. The eigenvalue associated with         in the plane R2 , the signed area ω0 (v, v ) of the
a given spherical harmonic can be calculated by the         parallelogram spanned by v and v is given by the
so-called Funk–Hecke formula.                               formula
   Spherical harmonics give a way of linking cheby-                                       
                                                                                       q q
shev and legendre polynomials [III.85](/part-03/special-functions), and show-                   ω0 (v, v ) = det         = pq − qp .
                                                                                      p  p
ing that both of them are natural concepts. The Cheby-
shev polynomials are those polynomials in x that are        It can also be written using matrices and inner products
also spherical harmonics of dimension 2: that is, that      as ω0 (v, v ) = v · Jv, where J is the 2 . imes 2 matrix
are equal on S 1 to homogeneous harmonic polynomials                                         
                                                                                         0  1
in two variables. For instance, because x 2 + y 2 = 1 for                         J=            .
                                                                                        −1 0
every (x, y) in the circle S 1 , the function x 3 − 3 xy 2
that we considered earlier is equal on S 1 to the func-     If a linear transformation A : R2 → R2 is area preserv-
tion 4 x 3 − 3 x, so 4 x 3 − 3 x is a Chebyshev polyno-         ing and orientation preserving, then ω0 (Av, Av ) =
mial. The Legendre polynomials are those polynomials        ω0 (v, v ) for every v and v .

298                                                                                            III. Mathematical Concepts

   Symplectic geometry studies two-dimensional signed             these three properties can be converted into the stan-
area measurements like this, as well as transforma-               dard form ω0 after an invertible linear change of vari-
tions that preserve these measurements, but it applies            ables. (This is a special case of Darboux’s theorem.)
to general spaces of dimension 2 n rather than just to             Thus (R2 n , ω0 ) is essentially the “only” linear sym plec-
the plane.                                                        tic geometry in 2 n dimensions. There are no symplectic
   If we split R2 n up as Rn . imes Rn , then we can write a vec-       forms in odd-dimensional spaces.
tor v in R2 n as v = (q, p), where q and p each belong to
Rn . The standard symplectic form ω0 : R2 n . imes R2 n → R               2    Symplectic Diffeomorphisms of (R2 n , ω0 )
is defined by the formula
                                                                  In Euclidean geometry, all rigid motions are automat-
               ω0 (v, v ) = p · q − q · p ,                       ically linear (or affine) transformations. However, in
where “·” denotes the usual inner product in Rn . Geo-            symplectic geometry there are many more sym plec-
metric ally, ω0 (v, v ) can be interpreted as the sum of           tic maps than just the symplectic linear transforma-
the signed areas of the parallelograms spanned by the             tions. These nonlinear symplectic maps in (R2 n , ω0 )
projections of v and v to the qi pi -planes. In terms of          are one of the principal objects of study in symplectic
matrices, we can write                                            geometry.
                                                                     Let U ⊂ R2 n be an open set. Recall that a map φ :
                   ω0 (v, v ) = v · Jv,                     (1)
                                                                  U → R2 n is called smooth if it has continuous partial
where J is the 2 n . imes 2 n matrix                                     derivatives of all orders. A diffeomorphism is a smooth
                               
                          0   I                                   map with smooth inverse.
                    J=                                      (2)      A smooth nonlinear map φ : U → R2 n is said to
                          −I 0
                                                                  be symplectic if, for every x ∈ U, the Jacobi an matrix
and I is the n . imes n identity matrix.
                                                                  φ (x) of first derivatives of φ is a symplectic linear
   A linear map A : R2 n → R2 n that preserves the prod-
                                                                  transformation. Informally, a symplectic map is one
uct ω0 of any two vectors (that is, ω0 (Av, Av ) =
                                                                  that behaves like a symplectic linear transformation
ω0 (v, v ) for all v, v ∈ R2 n ) is called a symplectic
                                                                  at infinitesimally small scales. Since symplectic linear
linear transformation; equivalently, a 2 n . imes 2 n matrix
                                                                  transformations have determinant 1, we can conclude
A is symplectic if and only if AT JA = J, where AT
                                                                  using several-variable calculus that a symplectic map
is the transpose of A. Symplectic linear transforma-
                                                                  is always locally volume preserving and locally invert-
tions are to symplectic geometry as rigid motions are
                                                                  ible; roughly speaking, this means that the map φ :
to Euclidean geometry. The set of all symplectic linear
                                                                  A → φ(A) is invertible whenever A is a sufficiently
transformations of (R2 n , ω0 ) is one of the classical lie
                                                                  small subset of U, and φ(A) has the same volume as
groups [III.48 §1](/part-03/lie-theory) and is denoted by Sp(2 n). One can
                                                                  A. However, the converse is not true when n ⩾ 2; the
show that symplectic matrices A ∈ Sp(2 n) always have
                                                                  class of symplectic maps is much more restricted than
determinant [III.15](/part-03/determinants) 1, and are thus volume preserv-
                                                                  that of volume-preserving maps. In fact, Gromov’s non-
ing. However, the converse does not hold when n ⩾ 2.
                                                                  squeezing theorem (see below) shows how striking this
For instance, if n = 2, the linear map
                                                                  difference can be.
       (q1 , q2 , p1 , p2 ) → (aq1 , q2 /a, ap1 , p2 /a)            Symplectic maps have been around for quite a long
has determinant 1 for any a ≠ 0, but it is symplectic             time in Hamiltonian mechanics under the name of
only if a2 = 1.                                                   canonical transformations. We briefly explain this in the
   The standard symplectic form ω0 has three proper-              next subsection.
ties worth noting. First, it is bilinear : the expression
                                                                  2.1   Hamilton’s Equations
ω0 (v, v ) varies linearly in v when v is held fixed,
and vice versa. Second, it is antisymmetric: we have              How can we produce nonlinear symplectic maps? Let
ω0 (v, v ) = −ω0 (v , v) for all v and v , and in partic-         us begin by exploring a familiar example. Consider the
ular ω0 (v, v) = 0. Finally, it is nondegenerate, which           motion of a simple pendulum with length l and mass
means that for every nonzero v there is a nonzero                 m and let q(t) be the angle it makes with the vertical
v such that ω0 (v, v ) ≠ 0. The standard symplectic               at time t. The equation of motion is
form ω0 is not the only form that obeys these three
                                                                                     d2 q  g
properties; however, it turns out that any form with                                      + sin q = 0,
                                                                                     dt 2  l

III.88.   Symplectic Manifolds                                                                                                   299

where g is the acceleration due to gravity. If we define      Hamiltonian systems (a result known as Liouville’s theo-
the momentum p as p = ml2 q̇, then we may trans-             rem) attracted considerable attention in the nineteenth
form this second-order differential equation into a           century and it was a driving force in the development
first-order system in the phase plane R2 , namely             of ergodic theory [V.9](/part-05/ergodic-theorems), which studies recurrence
                   d                                         properties of measure-preserving transformations.
                      (q, p) = X(q, p),                (3)
                   dt                                          Symplectic maps or canonical transformations play
where the vector field X : R2 → R2 is given by                an important role in classical physics, as they allow
the formula X(q, p) = (p/ml2 , −mgl sin q). For each         one to replace a complicated system by an equivalent
(q(0), p(0)) ∈ R2 there is a unique solution (q(t), p(t))    system that is simpler to analyze.
to (3) with initial condition (q(0), p(0)). Then for any
fixed time t we obtain an evolution map (or flow) φt :         2.2   Gromov’s Nonsqueezing Theorem
R2 → R2 given by φt (q(0), p(0)) = (q(t), p(t)), which       What is the difference between a symplectic map and a
has the remarkable property of being area preserving.        volume-preserving map? In order to answer this ques-
This can be deduced from the observation that X is           tion, suppose that we have two connected open sets U
divergence free, or in other words that                      and V in R2 n and that we wish to embed one into the
             d p       d                                     other using a symplectic map. This means that we are
                    +    (−mgl sin q) = 0.
             dq ml2   dp                                     looking for a symplectic map φ : U → V such that φ
In fact, for every time t, φt is a symplectic map on         is a homeomorphism onto its image. We know such a
(R2 , ω0 ).                                                  φ must be volume preserving, so we clearly have the
  More generally, any system in classical mechanics          restriction that the volume of U should be at most
with finitely many degrees of freedom can be refor-           the volume of V , but is this restriction all that mat-
mulated in a similar fashion, so that the evolution          ters? Consider the open ball B(R) = {x ∈ R2 n : |x| <
maps φt are always symplectic maps; in this con-             R}, which has radius R and center at the origin, and
text, they are also known as canonical transformations.      clearly has finite volume. It is not hard to embed it
The Irish mathematician william rowan hamilton               symplectically into the infinite-volume cylinder given
[VI.37](/part-06/william-rowan-hamilton-18051865) showed us how to do this in general more than        by
170 years ago. Given any smooth function H : R2 n →                     C(r ) = {(q, p) ∈ R2 n : q12 + q22 < r 2 },
R (called the Hamiltonian), the system of first-order         whatever the values of R and r . Indeed, the linear
differential equations given by                               symplectic map
               dqi   ∂H
                   =     ,     i = 1, . . . , n,       (4)   (q, p) → (aq1 , aq2 , q3 , . . . , qn , p1 /a, p2 /a, p3 , . . . , pn )
                dt   ∂pi
               dpi    ∂H                                     will do the trick when a is sufficiently small and pos-
                   =−      ,   i = 1, . . . , n,       (5)   itive. However, the situation is radically different if
               dt     ∂qi
will (under some mild growth assumptions on H, which         instead we consider the infinite-volume cylinder
we ignore here) give rise to evolution operators φt :                   Z(r ) = {(q, p) ∈ R2 n : q12 + p12 < r 2 }.
R2 n → R2 n , which are symplectic maps on (R2 n , ω0 ) for
                                                             We could try with a similar linear map like
every time t. To see the connection with the symplectic
form ω0 , observe that we may rewrite (4) and (5) in the     (q, p) → (aq1 , q2 /a, q3 , . . . , qn , ap1 , p2 /a, p3 , . . . , pn ).
following equivalent form:                                   This map is volume preserving (it has determinant 1)
                      dx                                     and for a small it embeds B(R) into Z(r ). However, it
                          = J∇H(x),                    (6)
                      dt                                     is symplectic only if a = 1, so it will give a symplectic
where ∇H is the usual gradient [I.3 §5.3](/part-01/fundamental-definitions) of H and J         embedding only if R ⩽ r . One is tempted to think that if
was defined in (2). From (6), (1), and the antisymmetry       R > r , then there should still be a nonlinear symplectic
property of ω0 , it is then not difficult to verify that φt    embedding squeezing B(R) into Z(r ), but a remarkable
is symplectic for every t (the main trick is to compute      theorem of Gromov from 1985 asserts that it is not
the derivative of ω0 (φt (x)v, φt (x)v ) in t and check      possible to find such a map.
that it equals zero).                                           In spite of this deep result of Gromov, and other
   We have already pointed out that symplectic maps          results that followed it, we still do not know much
are volume preserving. The preservation of volume by         about how sets in R2 n embed into one another.

300                                                                                               III. Mathematical Concepts

              3   Symplectic Manifolds                        sical theorem of Darboux asserts that this abstract def-
                                                              inition is equivalent to the more concrete definition
Recall from differential topology [IV.7](/part-04/dierential-topology) that a man-
                                                              using coordinate charts.
ifold of dimension d is a topological space [III.90](/part-03/topological-spaces)            Finally, a special class of symplectic manifolds is
such that each point has a neighborhood that is home-         given by Kähler manifolds. These are symplectic mani-
omorphic to an open set in Euclidean space Rd . One           folds that are also complex manifolds, in such a way that
can think of Rd as a local model for this manifold, in        the two structures are naturally compatible, a condition
the sense that it describes what the manifold looks           that generalizes the relationship (1). Observe that if one
like at very small distance scales. Recall also that a        identifies points (q, p) in R2 n with points p + iq in Cn ,
smooth manifold is one for which the “transition func-        then the linear transformation J : R2 n → R2 n becomes
tions” are smooth. This means that if ψ : U → Rd and          the operation of multiplication by i:
φ : V → Rd are coordinate charts, then the transition
                                                                           J : (z1 , . . . , zn ) → (iz1 , . . . , izn ).
function ψ ◦ φ−1 between the open sets φ(U ∩ V ) and
ψ(U ∩ V ) is smooth.                                          Thus the identity (1) relates the symplectic structure
   A symplectic manifold is defined similarly, but now         (as given by ω0 ), the complex structure (as given by J),
the local model is the linear symplectic space (R2 n , ω0 ).   and the Riemannian structure (as given by the dot prod-
More precisely, a symplectic manifold M is a manifold         uct “·”). A complex manifold is a manifold that at small
of dimension 2 n that can be covered with domains              distance scales looks like regions of Cn , with the tran-
of coordinate charts whose transition functions are           sition functions required to be holomorphic [I.3 §5.6](/part-01/fundamental-definitions).
symplectic diffeomorphisms of (R2 n , ω0 ).                     (A smooth map f : U ⊂ Cn → Cn is said to be holomor-
   Of course, any open set in (R2 n , ω0 ) is a symplectic     phic if each coordinate component of f (z1 , . . . , zn ) is
manifold. An example of a compact symplectic man-             holomorphic in each variable zk .) On a complex mani-
ifold is the torus T2 n , which is obtained as the quo-        fold we can multiply tangent vectors by i. This gives us
tient of R2 n by the action of Z2 n . In other words, two       at each point p ∈ M a linear map Jp such that Jp2 v = −v
points x, y ∈ R2 n are equivalent if x − y has inte-           for all tangent vectors v at p. A Kähler manifold is
ger coordinates. Other important examples of sym plec-         a complex manifold M with a symplectic structure ω
tic manifolds include riemann surfaces [III.79](/part-03/riemann-surfaces), com-         (which computes signed areas of infinitesimal parallel-
plex projective space [III.72](/part-03/projective-space), and cotangent bundles         ograms) and a Riemannian metric g (which computes
[IV.6 §5](/part-04/algebraic-topology). However, it is a wide open problem to deter-       an inner product gp (v, v ) of any two tangent vectors
mine, given a compact manifold, whether it can be             v, v at p); these two structures are linked together by
assigned a system of coordinate charts that makes it          the analogue of (1), namely
symplectic.                                                                    ωp (v, v ) = gp (v , Jp v).
   We have seen that in (R2 n , ω0 ), one can assign an
                                                              Examples of Kähler manifolds include complex vector
“area” ω0 (v, v ) to any parallelogram in the space R2 n .
                                                              spaces Cn , Riemann surfaces, and complex projective
In a symplectic manifold M, one can similarly assign an
                                                              spaces CPn .
area ωp (v, v ), but only to infinitesimal parallelograms
                                                                An example of a compact symplectic manifold that is
based at a point p ∈ M. The axes of such a parallelo-         not Kähler can be obtained by taking the quotient of R4
gram are two infinitesimal vectors (or more precisely          by a symplectic action of a group that looks like Z4 but
tangent vectors) v and v . There is a unique way to do        with a group operation that differs from the usual one.
this so that all the coordinate charts for M are sym-         The change in the group structure manifests itself as
plectic diffeomorphisms. In the language of differ en-          a topological property (an odd first Betti number) that
tial forms [III.16](/part-03/dierential-forms-and-integration), the map p → ωp is an anti sym-           prevents the quotient being Kähler.
metric nondegenerate 2-form, which can then be used
to compute the “area” S ω of non infinitesimal two-             Further Reading
dimensional surfaces S in M. One can show that for
                                                              Arnold, V. I. 1989. Mathematical Methods of Classical Me-
any sufficiently small closed surface S, the integral S ω
                                                                chanics, 2 nd edn. Graduate Texts in Mathematics, vol-
vanishes, so ω is a closed form. Indeed, one can define          ume 60. New York: Springer.
a symplectic manifold more abstractly (with out refer-         Mc Duff, D., and D. Salamon. 1998. Introduction to Sym plec-
ence to charts) as a smooth manifold equipped with a            tic Topology, 2 nd edn. Oxford Mathematical Monographs.
closed, antisymmetric nondegenerate 2-form ω; a clas-           Oxford: Clarendon Press/Oxford University Press.