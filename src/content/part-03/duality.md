# Duality

III.19.   Duality

for all test functions g. For instance, if φ is a test func-   few examples and at some of the characteristic features
tion with total integral −1 φ = 1, then the test func-
tions fn (x) = nφ(nx) can be shown to converge
weakly to the Dirac delta distribution δ0 , while the
functions fn (x) = n2 φ (nx) converge weakly to the
derivative δ0 of the Dirac delta. On the other hand,
the functions gn (x) = cos(nx)φ(x) converge weakly
to zero (this is a variant of the Riemann–Lebesgue
lemma). Thus weak convergence has some unusual fea-
tures not present in stronger notions of convergence,
in that severe oscillations can some times “disappear”
in the limit. One advantage of working with dis tr ibu-
tions instead of smoother functions is that one often
has some compactness in the space of distributions
under weak limits (e.g., by the Banach–Alaoglu theo-
rem). Thus, distributions can be thought of as asymp-
totic extremes of behavior of smoother functions, just
as real numbers can be thought of as limits of rational
numbers.
   Because distributions can be easily differentiated,
while still being closely connected to smoother func-
tions, they have been extremely useful in the study of
partial differential equations (PDEs), particularly when
the equations are linear. For instance, the general solu-
tion to a linear PDE can often be described in terms
of its fundamental solution, which solves the PDE in
the sense of distributions. More generally, distribution
theory (together with related concepts, such as that of
a weak derivative) gives an important (though certainly
not the only) means to define generalized solutions of
both linear and nonlinear PDEs. As the name suggests,
these generalize the concept of smooth (or classical)
solutions by allowing the formation of singularities,
shocks, and other nonsmooth behavior. In some cases
the easiest way to construct a smooth solution to a PDE
is first to construct a generalized solution and then to
use additional arguments to show that the generalized
solution is in fact smooth.
III.19     Duality
Duality is an important general theme that has manifes-
tat i ons in almost every area of mathematics. Over and
over again, it turns out that one can associate with a
given mathematical object a related, “dual” object that
helps one to understand the properties of the object
one started with. Despite the importance of duality in
mathematics, there is no single definition that covers
all instances of the phenomenon. So let us look at a

187
1
that they exhibit.
1   Platonic Solids
Suppose you take a cube, draw points at the centers of
each of its six faces, and let those points be the ver-
tices of a new polyhedron. The polyhedron you get will
be a regular octahedron. What happens if you repeat
the process? If you draw a point at the center of each
of the eight faces of the octahedron, you will find that
these points are the eight vertices of a cube. We say that
the cube and the octahedron are dual to one another.
The same can be done for the other Platonic solids:
the dodecahedron and the icosahedron are dual to one
another, while the dual of a tetrahedron is again a
tetrahedron.
The duality just described does more than just split
up the five Platonic solids into three groups: it allows us
to associate statements about a solid with statements
about its dual. For instance, two faces of a dodecahe-
dron are adjacent if they share an edge, and this is so
if and only if the corresponding vertices of the dual
icosahedron are linked by an edge. And for this reason
there is also a correspondence between edges of the
dodecahedron and edges of the icosahedron.
2   Points and Lines in the Projective Plane
There are several equivalent definitions of the projec-
tive plane [I.3 §6.7](/part-01/fundamental-definitions). One, which we shall use here, is
that it is the set of all lines in R3 that go through the
origin. These lines we call the “points” of the projec-
tive plane. In order to visualize this set as a geometri-
cal object and to make its “points” more point-like, it
is helpful to associate each line through the origin with
the pair of points in R3 at which it intersects the unit
sphere: indeed, one can define the projective plane as
the unit sphere with opposite points identified.
A typical “line” in the projective plane is the set of
all “points” (that is, lines through the origin) that lie in
some plane through the origin. This is associated with
the great circle in which that plane intersects the unit
sphere, once again with opposite points identified.
There is a natural association between lines and
points in the projective plane: each point P is associated
with the line L that consists of all points orthogonal to
P, and each line L is associated with the single point P
that is orthogonal to all points in L. For example, if P is
the z-axis, then the associated projective line L is the set
of all lines through the origin that lie in the xy-plane,

188

and vice versa. This association has the following basic
property: if a point P belongs to a line L, then the line     object A to object B very often gives rise to a function
associated with P contains the point associated with L.
   This allows us to translate statements about points
and lines into logically equivalent statements about
lines and points. For example, three points are collinear     w ∗ ∈ W ∗ such that T ∗ w ∗ = v ∗ , so that T ∗ w ∗ (v) =
(that is, they all lie in a line) if and only if the corre-   T ∗ w ∗ (v ), and therefore w ∗ (T v) = w ∗ (T v ). This
sponding lines are concurrent (that is, there is some
point that is contained in all of them). In general, once     tion. We can also prove that if T ∗ is an injection, then
you have proved a theorem in projective geometry, you
get another, dual, theorem for free (unless the dual
theorem turns out to be the same as the original one).

Let X be a set. If A is any subset of X, then the com-
ple ment of A, written Ac , is the set of all elements of X    that T is an injection if and only if T ∗ is a surjection,
that do not belong to A. The complement of the com-
ple ment of A is clearly A, so there is a kind of dual-
ity between sets and their complements. De Morgan’s
laws are the statements that (A ∩ B)c = Ac ∪ B c and
(A ∪ B)c = Ac ∩ B c : they tell us that complementation
“turns intersections into unions,” and vice versa. Notice
that if we apply the first law to Ac and B c , then we find     tion of the dual space may well change. For instance, if
that (Ac ∩ B c )c = A ∪ B. Taking complements of both
sides of this equality gives us the second law.
   Because of de Morgan’s laws, any identity involv-
ing unions and intersections remains true when you
interchange them. For example, one useful identity is
A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C). Applying this to the
complements of the sets and using de Morgan’s laws, it
is straightforward to deduce the equally useful identity
A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C).

Let V be a vector space [I.3 §2.3](/part-01/fundamental-definitions), over R, say. The dual
space V ∗ is defined to be the set of all linear functionals
on V : that is, linear maps from V to R. It is not hard to    continuous linear functional is equal to φy for some
define appropriate notions of addition and scalar mul-
tiplication and show that these make V ∗ into a vector
space as well.
   Suppose that T is a linear map [I.3 §4.2](/part-01/fundamental-definitions) from a vec-
tor space V to a vector space W . If we are given an ele-     do this, then we are drawing attention to the fact that
ment w ∗ of the dual space W ∗ , then we can use T and
w ∗ to create an element of V ∗ as follows: it is the map     number x, y, is a continuous bilinear map from X . imes Y
that takes v to the real number w ∗ (T v). This map,
which is denoted by T ∗ w ∗ , is easily checked to be lin-
ear. The function T ∗ is itself a linear map, called the
adjoint of T , and it takes elements of W ∗ to elements
of V ∗ .

III. Mathematical Concepts
This is a typical feature of duality: a function f from
g from the dual of B to the dual of A.
Suppose that T ∗ is a surjection. Then if v = v ,
we can find v ∗ such that v ∗ (v) = v ∗ (v ), and then
implies that T v = T v , which proves that T is an injec-
T is a surjection. Indeed, if T is not a surjection, then
T V is a proper subspace of W , which allows us to find
a nonzero linear functional w ∗ such that w ∗ (T v) = 0
for every v ∈ V , and hence such that T ∗ w ∗ = 0, which
3   Sets and Their Complements
dimensional, then (T ∗ )∗ = T , so in this case we find
and vice versa. Therefore, we can use duality to con-
vert an existence problem into a uniqueness problem.
This conversion of one kind of problem into a different
kind is another characteristic and very useful feature
of duality.
If a vector space has additional structure, the defini-
X is a real banach space [III.62](/part-03/normed-spaces-and-banach-spaces), then X ∗ is defined
to be the space of all continuous linear functionals
from X to R, rather than the space of all linear func-
tionals. This space is also a Banach space: the norm
of a continuous linear functional f is defined to be
sup{|f (x)| : x ∈ X, x ⩽ 1}. If X is an explicit exam-
ple of a Banach space (such as one of the spaces dis-
cussed in function spaces [III.29](/part-03/function-spaces)), it can be extremely
useful to have an explicit description of the dual space.
That is, one would like to find an explicitly described
4   Dual Vector Spaces
nonzero element y of Y a nonzero continuous linear
functional φy defined on X, in such a way that every
y ∈ Y.
From this perspective, it is more natural to regard X
and Y as having the same status. We can reflect this in
our notation by writing x, y instead of φy (x). If we
the map · , ·, which takes the pair (x, y) to the real
to R.
More generally, whenever we have two mathematical
objects A and B, a set S of “scalars” of some kind, and
a function β : A . imes B → S that is a structure-preserving
map in each variable separately, we can think of the

III . $19$ .

Duality

elements of A as elements of the dual of B, and vice versa. Functions like β are called pairings.

$5$

Polar Bodies

Let X be a subset of R n and let  · , ·  be the standard inner product [III.37](/part-03/bayesian-analysis) on R n . Then the polar of X, denoted X ◦ , is the set of all points y $\in$ R n such that x, y  $\le 1$ for every $x \inX.$ It is not hard to check that X ◦ is closed and convex, and that if X is closed and convex, then  (  X ◦) ◦ $= X.$ Further more, if $n = 3$ and $X$ is a Platonic solid centered at the origin, then X ◦ is (a multiple of) the dual Platonic solid, and if X is the “unit ball” of a normed space (that is, the set of all points of norm at most $1$ ), then X ◦ is (easily
identified with) the unit ball of the dual space. $6$ Duals of Abelian Groups If G is an Abelian group, then a character on G is a homomorphism from G to the group T of all complex numbers of modulus $1$ . Two characters can be multiplied together in an obvious way, and this multiplication makes the set of all characters on G into another Abelian group, called the dual group, Ĝ, of the group G. Again, if G has a topological structure, then one usually imposes an additional continuity condition. An important example is when the group is itself T .
It is not hard to show that the continuous homomorphisms from $T$ to $T$ all have the form  ei. heta\to ein. heta for some integer n (which may be negative or zero). Thus, the dual of T is (isomorphic to) Z . This form of duality between groups is called Pontryagin duality. Note that there is an easily defined pairing between G and Ĝ: given an element g $\in$ G and a character $\psi\in$ Ĝ, we define  g, $\psi$ to be $\psi(g)$ . Under suitable conditions, this pairing extends to functions defined on G and Ĝ. For instance, if G and Ĝ are finite, and f : G $\to$ C and F :
Ĝ $\to$ C , then we can define  f , F   to be the complex number $|G| - 1^{g}\in^{G} \psi\in$ Ĝ $f(g)F(\psi)$ . In general, one obtains a pairing between a complex hilbert space [III.37](/part-03/bayesian-analysis) of functions on G and a Hilbert space of functions on Ĝ. This extended pairing leads to another important duality. Given a function in the Hilbert space $L^{2}$ (T), its Fourier transform is the function f ˆ $\in{}^{2}$ (Z) that is defined by the formula

$2\pi1$

f ${}^{(}n) =f(ei\theta)e -$ in . hetad. heta.2\pi 0

The Fourier transform, which can be defined similarly for functions on other Abelian groups, is immensely

$189$

useful in many areas of mathematics. (See , for example, fourier transforms [III.27](/part-03/the-fourier-transform) and representation theory [IV.9](/part-04/representation-theory).) By contrast with some of the previous examples, it is not always easy to translate a statement about a function f into an equivalent statement about its Fourier transform f ˆ , but this is what gives the Fourier transform its power: if you wish to understand a function f defined on T , then you can explore its properties by looking at both $f$ and $f$ ˆ .
Some properties will follow from facts that are naturally expressed in terms of f and others from facts that are naturally expressed in terms of f ˆ . Thus, the Fourier transform “doubles one’s mathematical power.”

$7$

Homology and Cohomology

Let $X$ be a compact n-dimensional manifold [I.3](/part-01/fundamental-definitions). If M and M are an i-dimensional submanifold and an (n - i) - dimensional submanifold of X, respectively, and if they are well-behaved and in sufficiently general position, then they will intersect in a finite set of points. If one assigns either $1$ or $- 1$ to each of these points in a natural way that takes account of how M and M intersect, then the sum of the numbers at the points is an invariant called the intersection number of M and M .
This number turns out to depend only on the homology classes [IV.6](/part-04/algebraic-topology) of M and M . Thus, it defines a map from H i (X) $\times$ H $n - i$ (X) to Z , where we write H r (X) for the r th homology group of X. This map is a group homomorphism in each variable separately, and the resulting pairing leads to a notion of duality called Poincaré duality, and ultimately to the modern theory of cohomology, which is dual to homology. As with some of our other examples, many concepts associated with homology have dual concepts:
for example, in homology one has a boundary map, where as in cohomology there is a coboundary map (in the opposite direction). Another example is that a continuous map from X to Y gives rise to a homomorphism from the homology group H i (X) to the homology group H i (Y), and also to a homomorphism from the cohomology group H i (Y) to the cohomology group H i (X). $8$

Further Examples Discussed in This Book

The examples above are not even close to a complete list: even in this book there are several more. For instance, the article on differential forms [III.16](/part-03/dierential-forms-and-integration) discusses a pairing, and hence a duality, between k-forms and k-dimensional surfaces. (The pairing is given by integrating the form over the surface .) The article on