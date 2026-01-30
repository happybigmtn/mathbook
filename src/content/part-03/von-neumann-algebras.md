# Von Neumann Algebras

III.98. Wavelets

points are in fact stable minimizers. Even more fun-
da mental is the question of the existence of minimiz-
ers or other critical points. Here mathematicians have
devoted great ingenuity to designing appropriate func-
tion spaces within which “generalized” solutions can be
found. But these weak solutions need not be smooth,
and so the further question of their regularity and/or
possible singularities must then be addressed.
   However, these are all highly technical mathemat-
ical issues, far beyond the scope of this article. We
end our discussion here, in the hope that our exces-
sive demands upon the reader’s attention have been
minimized.
III.95    Varieties
Two simple examples of varieties are the circle and
the parabola, which can be defined by the polynomial
equations x 2 + y 2 = 1 and y = x 2 , respectively.
With one qualification, a variety is the solution set of
a system of polynomial equations. The qualification is
that there are certain examples that we do not want to
include. For instance, the set of solutions to the equa-
tion x 2 − y 2 = 0 is the union of the two lines x = y
and x = −y, which naturally splits into two pieces. So
the solution set to a system of polynomial equations
is called an algebraic set, and it is called a variety if it   bra is a special kind of C ∗ -algebra [III.12](/part-03/c--algebras), intimately
cannot be written as a union of smaller algebraic sets.
   The examples just given were subsets of the plane
R2 . However, the concept is much more general: vari-
eties can live in Rn for any n, and also in Cn for any n.
Indeed, the definitions make sense, and are interesting
and important, in Fn , where F can be any field.
   The varieties defined so far have been affine vari-
eties. For many purposes it is more convenient to
deal with projective varieties. The definition is similar,
but now they live inside a projective space [III.72](/part-03/projective-space),
and the polynomials used to define them must be
homogeneous—that is, any multiple of a solution must
still be a solution.
   See algebraic geometry [IV.4](/part-04/algebra) and arithmetic
geometry [IV.5](/part-04/arithmetic-geometry) for more information.
III.96    Vector Bundles
Let X be a topological space [III.90](/part-03/topological-spaces). A vector bun-
dle over X is, roughly speaking, a way of associating a
vector space with each point x of X in such a way that
these spaces “vary continuously” as you vary x. As an
example, consider a smooth surface X in R3 . Associated

313
with each point x is the tangent plane at x, which varies
continuously with x and can be identified in a natural
way with a two-dimensional vector space. A more pre-
cise definition is as follows: a vector bundle of rank n
over X is a topological space E, together with a continu-
ous map p : E → X, such that the inverse image p−1 (x)
of each point x (that is, the set of points in E that map
to x) is an n-dimensional vector space. More over, for
every sufficiently small region U of X, the inverse image
of U is homeomorphic to Rn . imes U (this property is called
local triviality). The most obvious vector bundle of rank
n over X is the space Rn . imes X with the map p(v, x) = x;
this is called the trivial bundle. However, the interest-
ing bundles are the nontrivial ones, such as the tan-
gent bundle of the 2-sphere. One can learn a great deal
about a topological space by understanding its vector
bundles. For this reason, vector bundles are central to
algebraic topology. See algebraic topology [IV.6 §5](/part-04/algebraic-topology)
for more details.
III.97   Von Neumann Algebras
A unitary representation of a group [I.3 §2.1](/part-01/fundamental-definitions) G is a
homomorphism [I.3 §4.1](/part-01/fundamental-definitions) that associates with each ele-
ment g of G a unitary map [III.50 §3.1](/part-03/linear-operators-and-their-properties) Ug defined on
some hilbert space [III.37](/part-03/bayesian-analysis) H. A von Neumann alge-
connected with the theory of unitary representations.
There are several equivalent ways of defining von Neu-
mann algebras. One is as follows. It can be checked
that, given any unitary representation, its commutant,
defined to be the set of all operators [III.50](/part-03/linear-operators-and-their-properties) in B(H)
that commute with every single unitary map Ug in the
representation, forms a C ∗ -algebra. Von Neumann alge-
bras are algebras that arise in this way. They can also
be defined abstractly as follows: a C ∗ -algebra A is a
von Neumann algebra if there is a banach space [III.62](/part-03/normed-spaces-and-banach-spaces)
X such that the dual [III.19 §4](/part-03/duality) of X is A (when A is
itself considered as a Banach space).
The basic building blocks of von Neumann algebras
are special kinds of von Neumann algebras called fac-
tors. The classification of factors is a major topic of
research, which includes some of the most celebrated
theorems of the second half of the twentieth century.
See operator algebras [IV.15 §2](/part-04/operator-algebras) for more details.
III.98   Wavelets
If you wish to send a black and white picture from one
computer to another, then an obvious way of doing it is