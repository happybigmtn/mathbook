# C ∗ -Algebras

172                                                                                          III. Mathematical Concepts

uncountable but the set of algebraic numbers is count-          problem: this time, there is “too much” of the surface
able! Further more, this shows that “most” real numbers          to flatten and you will have to fold it over itself. If, how-
are transcendental: the algebraic numbers form only a           ever, you have a roll of wallpaper and wish to flatten it,
tiny proportion of the reals.                                   then there is no difficulty: you just unroll it. Surfaces
                                                                such as spheres are said to be positively curved, ones
III.12 C ∗ -Algebras                                            with a saddle-like shape are negatively curved, and ones
                                                                like a piece of wallpaper are flat.
A banach space [III.62](/part-03/normed-spaces-and-banach-spaces) is both a vector space
                                                                   Notice that a surface can be flat in this sense even if
[I.3 §2.3](/part-01/fundamental-definitions) and a metric space [III.56](/part-03/metric-spaces), and the study of
                                                                it does not lie in a plane. This is because curvature is
Banach spaces is therefore a mixture of linear algebra
                                                                defined in terms of the intrinsic geometry of a surface,
and analysis. However, one can arrive at more sophis-
                                                                where distance is measured in terms of paths that lie
ti cated mixtures of algebra and analysis if one looks at
                                                                inside the surface.
Banach spaces that have more algebraic structure. In
                                                                   There are various ways of making the above notion
particular, while one can add two elements of a Banach
                                                                of curvature precise, and also quantitative, so that with
space together, one cannot in general multiply them.
                                                                each point of a surface one can associate a number that
However, some times one can: a vector space with a mul-
                                                                tells you “how curved” it is at that point. In order to
tiplicative structure is called an algebra, and if the vec-
                                                                do this, the surface must have a riemannian metric
tor space is also a Banach space, and if the multipli-
                                                                [I.3 §6.10](/part-01/fundamental-definitions) on it, which is used to determine the lengths
cation has the property that xy ⩽ x y for any
                                                                of paths. The notion of curvature can also be general-
two elements x and y, then it is called a Banach alge-
                                                                ized to higher dimensions, so that one can talk about
bra. (This name does not really reflect historical real-
                                                                the curvature of a point in a d-dimensional Rieman-
ity, since the basic theory of Banach algebras was not
                                                                nian manifold. However, when the dimension is higher
worked out by Banach. A more appropriate name might
                                                                than 2, the way that the manifold can curve at a point
have been Gelfand algebras.)
                                                                is more complicated, and is expressed not by a single
   A C ∗ -algebra is a Banach algebra with an involution,
                                                                number but by the so-called Ricci tensor. See ricci flow
which means a function that associates with each ele-
                                                                [III.78](/part-03/ricci-flow) for more details.
ment x another element x ∗ in such a way that x ∗∗ = x,
                                                                   Curvature is one of the fundamental concepts of
x ∗  = x, (x + y)∗ = x ∗ + y ∗ , and (xy)∗ = y ∗ x ∗
                                                                modern geometry: not only the notion just described
for any elements x and y; this involution is required to
                                                                but also various alternative definitions that measure in
satisfy the C ∗ -identity xx ∗  = x2 . A basic example
                                                                other ways how far a geometric object deviates from
of a C ∗ -algebra is the algebra B(H) of all continuous
                                                                being flat. It is also an integral part of the theory
linear maps T defined on a hilbert space [III.37](/part-03/bayesian-analysis) H.
                                                                of general relativity (which is discussed in general
The norm of T is defined to be the smallest constant
                                                                relativity and the einstein equations [IV.13](/part-04/general-relativity-and-the-einstein-equations)).
M such that T x ⩽ Mx for every x ∈ H, and the
involution takes T to its adjoint. This is a map T ∗ that
                                                                III.14 Designs
has the property that x, T y = T ∗ x, y for every x
and y in H. (It can be shown that there is exactly one                   Peter J. Cameron
map with this property.) If H is finite dimensional, then
                                                                Block designs were first used in the design of exper-
T can be thought of as an n . imes n matrix for some n, and
                                                                iments in statistics, as a method for coping with sys-
T ∗ is then the complex conjugate of the transpose of T .
                                                                tematic differences in the experimental material. Sup-
   A fundamental theorem of Gelfand and Naimark
                                                                pose, for example, that we want to test seven differ-
states that every C ∗ -algebra can be represented as a
                                                                ent varieties of seed in an agricultural experiment, and
subalgebra of B(H) for some Hilbert space H. For more
                                                                that we have twenty-one plots of land available for the
information, see operator algebras [IV.15 §3](/part-04/operator-algebras).
                                                                experiment. If the plots can be regarded as identical,
III.13    Curvature                                             then the best strategy is clearly to plant three plots
                                                                with each variety. Suppose, however, that the available
If you cut an orange in half, scoop out the inside, and         plots are on seven farms in different regions, with three
try to flatten one of the resulting hemispheres of peel,         plots on each farm. If we simply plant one variety on
then you will tear it. If you try to flatten a horse’s saddle,   each farm, we lose information, because we cannot dis-
or a soggy potato chip, then you will have the opposite         tinguish systematic differences between regions from