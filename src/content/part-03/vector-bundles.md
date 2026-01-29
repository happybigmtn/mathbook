# Vector Bundles

III.98. Wavelets                                                                                                     313

points are in fact stable minimizers. Even more fun-           with each point x is the tangent plane at x, which varies
damental is the question of the existence of minimiz-          continuously with x and can be identified in a natural
ers or other critical points. Here mathematicians have         way with a two-dimensional vector space. A more pre-
devoted great ingenuity to designing appropriate func-         cise definition is as follows: a vector bundle of rank n
tion spaces within which “generalized” solutions can be        over X is a topological space E, together with a continu-
found. But these weak solutions need not be smooth,            ous map p : E → X, such that the inverse image p−1 (x)
and so the further question of their regularity and/or         of each point x (that is, the set of points in E that map
possible singularities must then be addressed.                 to x) is an n-dimensional vector space. Moreover, for
   However, these are all highly technical mathemat-           every sufficiently small region U of X, the inverse image
ical issues, far beyond the scope of this article. We          of U is homeomorphic to Rn \times U (this property is called
end our discussion here, in the hope that our exces-           local triviality). The most obvious vector bundle of rank
sive demands upon the reader’s attention have been             n over X is the space Rn \times X with the map p(v, x) = x;
minimized.                                                     this is called the trivial bundle. However, the interest-
                                                               ing bundles are the nontrivial ones, such as the tan-
III.95    Varieties                                            gent bundle of the 2-sphere. One can learn a great deal
                                                               about a topological space by understanding its vector
Two simple examples of varieties are the circle and            bundles. For this reason, vector bundles are central to
the parabola, which can be defined by the polynomial            algebraic topology. See algebraic topology [IV.6 §5](/part-04/algebraic-topology)
equations x 2 + y 2 = 1 and y = x 2 , respectively.            for more details.
With one qualification, a variety is the solution set of
a system of polynomial equations. The qualification is          III.97   Von Neumann Algebras
that there are certain examples that we do not want to
include. For instance, the set of solutions to the equa-       A unitary representation of a group [I.3 §2.1](/part-01/fundamental-definitions) G is a
tion x 2 − y 2 = 0 is the union of the two lines x = y         homomorphism [I.3 §4.1](/part-01/fundamental-definitions) that associates with each ele-
and x = −y, which naturally splits into two pieces. So         ment g of G a unitary map [III.50 §3.1](/part-03/linear-operators-and-their-properties) Ug defined on
the solution set to a system of polynomial equations           some hilbert space [III.37](/part-03/bayesian-analysis) H. A von Neumann alge-
is called an algebraic set, and it is called a variety if it   bra is a special kind of C ∗ -algebra [III.12](/part-03/c--algebras), intimately
cannot be written as a union of smaller algebraic sets.        connected with the theory of unitary representations.
   The examples just given were subsets of the plane           There are several equivalent ways of defining von Neu-
R2 . However, the concept is much more general: vari-          mann algebras. One is as follows. It can be checked
eties can live in Rn for any n, and also in Cn for any n.      that, given any unitary representation, its commutant,
Indeed, the definitions make sense, and are interesting         defined to be the set of all operators [III.50](/part-03/linear-operators-and-their-properties) in B(H)
and important, in Fn , where F can be any field.                that commute with every single unitary map Ug in the
   The varieties defined so far have been affine vari-            representation, forms a C ∗ -algebra. Von Neumann alge-
eties. For many purposes it is more convenient to              bras are algebras that arise in this way. They can also
deal with projective varieties. The definition is similar,      be defined abstractly as follows: a C ∗ -algebra A is a
but now they live inside a projective space [III.72](/part-03/projective-space),          von Neumann algebra if there is a banach space [III.62](/part-03/normed-spaces-and-banach-spaces)
and the polynomials used to define them must be                 X such that the dual [III.19 §4](/part-03/duality) of X is A (when A is
homogeneous—that is, any multiple of a solution must           itself considered as a Banach space).
still be a solution.                                              The basic building blocks of von Neumann algebras
   See algebraic geometry [IV.4](/part-04/algebra) and arithmetic                are special kinds of von Neumann algebras called fac-
geometry [IV.5](/part-04/arithmetic-geometry) for more information.                          tors. The classification of factors is a major topic of
                                                               research, which includes some of the most celebrated
III.96    Vector Bundles                                       theorems of the second half of the twentieth century.
                                                               See operator algebras [IV.15 §2](/part-04/operator-algebras) for more details.
Let X be a topological space [III.90](/part-03/topological-spaces). A vector bun-
dle over X is, roughly speaking, a way of associating a        III.98   Wavelets
vector space with each point x of X in such a way that
these spaces “vary continuously” as you vary x. As an          If you wish to send a black and white picture from one
example, consider a smooth surface X in R3 . Associated        computer to another, then an obvious way of doing it is

