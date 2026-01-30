# The Ideal Class Group

III.40.   The Ideal Class Group

quantum mechanical system, and observable features
of that system correspond to certain linear maps.
  For this and other reasons, the study of linear oper-
ators [III.50](/part-03/linear-operators-and-their-properties) on Hilbert spaces is a major branch of
mathematics: see operator algebras [IV.15](/part-04/operator-algebras).
III.38     Homology and Cohomology
If X is a topological space [III.90](/part-03/topological-spaces), then one can asso-     and the equivalence classes of paths with base point x
ciate with it a sequence of groups Hn (X, R), where R is     form the fundamental group of X, relative to x, which
a commutative ring [III.81 §1](/part-03/rings-ideals-and-modules) such as Z or C. These
groups, the homology groups of X (with coefficients
in R), are a powerful invariant: powerful because they
contain a great deal of information about X but are
nevertheless easy to compute, at least compared with
some other invariants. The closely related cohomology
groups H n (X, R) are more useful still because they can     be the equivalence class of the product. This group is a
be made into a ring: to oversimplify slightly, an ele-
ment of the cohomology group H n (X) is an equiva-
lence class [I.2 §2.3](/part-01/language-and-grammar) [Y ] of a subspace Y of codimen-
sion n. (Of course, for this to make true sense X should     groups, which are described in algebraic topology
be a fairly nice space such as a manifold [I.3 §6.9](/part-01/fundamental-definitions).)
Then, if [Y ] and [Z] belong to H n (X, R) and H m (X, R),
respectively, their product is [Y ∩ Z]. Since Y ∩ Z “typ-    III.40   The Ideal Class Group
ically” has codimension n + m, the equivalence class
[Y ∩ Z] belongs to H n+m (X, R). Homology and cohom-
ology groups are described in more detail in algebraic
topology [IV.6](/part-04/algebraic-topology).
   The concepts of homology and cohomology have
become far more general than the above discussion
suggests, and are no longer tied to topological spaces:
for instance, the notion of group cohomology is of great     integers, that is, numbers of the form a + ib where a
importance in algebra. Even within topology, there are
many different homology and cohomology theories. In
1945, Eilenberg and Steenrod devised a small number
of axioms that greatly clarified the area: a homology
theory is any association of groups with topological
spaces that satisfies these axioms, and the fund a men-
tal properties of homology theories follow from the
axioms.
III.39     Homotopy Groups
If X is a topological space [III.90](/part-03/topological-spaces), then a loop in X is    tor ization holds. The elements of the ring itself corre-
a path that begins and ends at the same point; or, more
formally, a continuous function f : [0, 1] → X such that     principal, then unique factorization holds for the ring.
f (0) = f (1). The point where the path begins and ends
is called the base point. If two loops have the same base    a natural equivalence relation [I.2 §2.3](/part-01/language-and-grammar) on them
point, they are called homotopic if one can be continu-
ously deformed to the other, with all the intermediate

221
paths living in X and beginning and ending at the given
base point. For example, if X is the plane R2 , then any
two paths that begin and end at (0, 0) are homotopic,
where as if X is the plane with the origin removed, then
whether or not two paths (that begin and end at some
other point) are homotopic depends on whether or not
they go around the origin the same number of times.
Homotopy is an equivalence relation [I.2 §2.3](/part-01/language-and-grammar),
is denoted by π1 (X, x). If X is connected, then this does
not depend on x and we can write π1 (X) instead. The
group operation is “concatenation”: given two paths
that begin and end at x, their “product” is the com-
bined path that goes along one and then the other, and
the product of equivalence classes is then defined to
very important invariant (see for instance geometric
and combinatorial group theory [IV.10 §7](/part-04/geometric-and-combinatorial-group-theory)); it is
the first in a sequence of higher-dimensional homotopy
[IV.6 §§2, 3].
the fundamental theorem of arithmetic [V.14](/part-05/the-fundamental-theorem-of-arithmetic)
asserts that every positive integer can be written in
exactly one way (apart from reordering) as a product of
primes. Analogous theorems are true in other contexts
as well: for example, there is a unique factorization the-
orem for polynomials, and another one for Gaussian
and b are integers.
However, for most number fields [III.63](/part-03/number-fields), the associ-
ated “ring of integers” does not have the unique-factor-
ization property. For example, in the ring [III.81 §1](/part-03/rings-ideals-and-modules) of
√
numbers of the form a + b −5 with a and b integers,
√
one can factorize 6 either as 2 . imes 3 or as (1 + −5)(1 −
√
−5).
The ideal class group is a way of measuring how badly
unique factorization fails. Given any ring of integers of
a number field, one can define a multiplicative structure
on its set of ideals [III.81 §2](/part-03/rings-ideals-and-modules), for which unique fac-
spond to so-called “principal ideals,” so if every ideal is
If there are nonprincipal ideals, then one can define
in such a way that the equivalence classes, which are
called ideal classes, form a group [I.3 §2.1](/part-01/fundamental-definitions). This group