# Curvature

172

uncountable but the set of algebraic numbers is count-
able! Further more, this shows that “most” real numbers
are transcendental: the algebraic numbers form only a
tiny proportion of the reals.
III.12 C ∗ -Algebras
A banach space [III.62](/part-03/normed-spaces-and-banach-spaces) is both a vector space
[I.3 §2.3](/part-01/fundamental-definitions) and a metric space [III.56](/part-03/metric-spaces), and the study of
Banach spaces is therefore a mixture of linear algebra
and analysis. However, one can arrive at more sophis-
ti cated mixtures of algebra and analysis if one looks at
Banach spaces that have more algebraic structure. In
particular, while one can add two elements of a Banach
space together, one cannot in general multiply them.
However, some times one can: a vector space with a mul-
tiplicative structure is called an algebra, and if the vec-
tor space is also a Banach space, and if the multipli-
cation has the property that xy ⩽ x y for any
two elements x and y, then it is called a Banach alge-
bra. (This name does not really reflect historical real-
ity, since the basic theory of Banach algebras was not
worked out by Banach. A more appropriate name might
have been Gelfand algebras.)
   A C ∗ -algebra is a Banach algebra with an involution,
which means a function that associates with each ele-
ment x another element x ∗ in such a way that x ∗∗ = x,
x ∗  = x, (x + y)∗ = x ∗ + y ∗ , and (xy)∗ = y ∗ x ∗
for any elements x and y; this involution is required to
satisfy the C ∗ -identity xx ∗  = x2 . A basic example
of a C ∗ -algebra is the algebra B(H) of all continuous
linear maps T defined on a hilbert space [III.37](/part-03/bayesian-analysis) H.
The norm of T is defined to be the smallest constant
M such that T x ⩽ Mx for every x ∈ H, and the
involution takes T to its adjoint. This is a map T ∗ that
has the property that x, T y = T ∗ x, y for every x
and y in H. (It can be shown that there is exactly one
map with this property.) If H is finite dimensional, then
T can be thought of as an n . imes n matrix for some n, and
T ∗ is then the complex conjugate of the transpose of T .
   A fundamental theorem of Gelfand and Naimark
states that every C ∗ -algebra can be represented as a
subalgebra of B(H) for some Hilbert space H. For more
information, see operator algebras [IV.15 §3](/part-04/operator-algebras).
III.13    Curvature
If you cut an orange in half, scoop out the inside, and
try to flatten one of the resulting hemispheres of peel,
then you will tear it. If you try to flatten a horse’s saddle,   each farm, we lose information, because we cannot dis-
or a soggy potato chip, then you will have the opposite

III. Mathematical Concepts
problem: this time, there is “too much” of the surface
to flatten and you will have to fold it over itself. If, how-
ever, you have a roll of wallpaper and wish to flatten it,
then there is no difficulty: you just unroll it. Surfaces
such as spheres are said to be positively curved, ones
with a saddle-like shape are negatively curved, and ones
like a piece of wallpaper are flat.
Notice that a surface can be flat in this sense even if
it does not lie in a plane. This is because curvature is
defined in terms of the intrinsic geometry of a surface,
where distance is measured in terms of paths that lie
inside the surface.
There are various ways of making the above notion
of curvature precise, and also quantitative, so that with
each point of a surface one can associate a number that
tells you “how curved” it is at that point. In order to
do this, the surface must have a riemannian metric
[I.3 §6.10](/part-01/fundamental-definitions) on it, which is used to determine the lengths
of paths. The notion of curvature can also be general-
ized to higher dimensions, so that one can talk about
the curvature of a point in a d-dimensional Rieman-
nian manifold. However, when the dimension is higher
than 2, the way that the manifold can curve at a point
is more complicated, and is expressed not by a single
number but by the so-called Ricci tensor. See ricci flow
[III.78](/part-03/ricci-flow) for more details.
Curvature is one of the fundamental concepts of
modern geometry: not only the notion just described
but also various alternative definitions that measure in
other ways how far a geometric object deviates from
being flat. It is also an integral part of the theory
of general relativity (which is discussed in general
relativity and the einstein equations [IV.13](/part-04/general-relativity-and-the-einstein-equations)).
III.14 Designs
Peter J. Cameron
Block designs were first used in the design of exper-
iments in statistics, as a method for coping with sys-
tematic differences in the experimental material. Sup-
pose, for example, that we want to test seven differ-
ent varieties of seed in an agricultural experiment, and
that we have twenty-one plots of land available for the
experiment. If the plots can be regarded as identical,
then the best strategy is clearly to plant three plots
with each variety. Suppose, however, that the available
plots are on seven farms in different regions, with three
plots on each farm. If we simply plant one variety on
tinguish systematic differences between regions from