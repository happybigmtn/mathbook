# Cardinals

III.8.   Categories

mathematical consequences of such an equivalence are
extremely rich. (See mirror symmetry [IV.16](/part-04/mirror-symmetry) for more
details. For other notions related to those discussed in
this article, see symplectic manifolds [III.88](/part-03/symplectic-manifolds).)
The Calculus of Variations
    See Variational Methods [III.94](/part-03/variational-methods)
III.7     Cardinals
The cardinality of a set is a measure of how large that
set is. More precisely, two sets are said to have the same
cardinality if there is a bijection between them. So what
do cardinalities look like?
   There are finite cardinalities, meaning the cardi-
nalities of finite sets: a set has “cardinality n” if it
has precisely n elements. Then there are countable
[III.11](/part-03/countable-and-uncountable-sets) infinite sets: these all have the same cardinal-
ity (this follows from the definition of “countable”),
usually written א0 . For example, the natural numbers,
the integers, and the rationals all have cardinality א0 .
However, the reals are uncountable, and so do not
have cardinality א0 . In fact, their cardinality is denoted
by 2א0 .
   It turns out that cardinals can be added and multi-
plied and even raised to powers of other cardinals (so
“2א0 ” is not an isolated piece of notation). For details,
and more explanation, see set theory [IV.22 §2](/part-04/set-theory).
III.8 Categories

When we study groups [I.3 §2.1](/part-01/fundamental-definitions) or vector spaces
[I.3 §2.3](/part-01/fundamental-definitions), we pay particular attention to certain classes
of maps between them: the important maps between
groups are the group homomorphisms [I.3 §4.1](/part-01/fundamental-definitions), and
the important maps between vector spaces are the lin-
ear maps [I.3 §4.2](/part-01/fundamental-definitions). What makes these maps important
is that they are the functions that “preserve structure”:
for example, if φ is a homomorphism from a group G
to a group H, then it “preserves multiplication,” in the
sense that φ(g1 g2 ) = φ(g1 )φ(g2 ) for any pair of ele-
ments g1 and g2 of G. Similarly, linear maps preserve
addition and scalar multiplication.
   The notion of a structure-preserving map applies far
more generally than just to these two examples, and
one of the purposes of category theory is to understand
the general properties of such maps. For instance, if A,
B, and C are mathematical structures of some given

165
type, and f and g are structure-preserving maps from
A to B and from B to C, respectively, then their compos-
ite g◦f is a structure-preserving map from A to C. That
is, structure-preserving maps can be composed (at least
if the range of one equals the domain of the other). We
also use structure-preserving maps to decide when to
regard two structures as “essentially the same”: we call
A and B isomorphic if there is a structure-preserving
map from A to B with an inverse that also preserves
structure.
A category is a mathematical structure that allows
one to discuss properties such as these in the abstract.
It consists of a collection of objects, together with mor-
phisms between those objects. That is, if a and b are
two objects in the category, then there is a collection of
morphisms between a and b. There is also a notion of
composition of morphisms: if f is a morphism from a
to b and g is a morphism from b to c, then there is a
composite of f and g, which is a morphism from a to c.
This composition must be associative. In addition, for
each object a there is an “identity morphism,” which
has the property that if you compose it with another
morphism f then you get f .
As the earlier discussion suggests, an example of
a category is the category of groups. The objects of
this category are groups, the morphisms are group
homomorphisms, and composition and the identity are
defined in the way we are used to. However, it is by no
means the case that all categories are like this, as the
following examples show.
Eugenia Cheng
bers as its objects, and letting the morphisms from
n to m be all the n . imes m matrices with real entries.
Composition of morphisms is the usual matrix
multiplication. We would not normally think of
an n . imes m matrix as a map from the number n to
the number m, but the axioms for a category are
nevertheless satisfied.
(ii) Any set can be turned into a category: the objects
are the elements of the set, and a morphism from
x to y is the assertion “x = y.” We can also make
an ordered set into a category by letting a mor-
phism from x to y be the assertion “x ⩽ y.” (The
“composite” of “x ⩽ y” and “y ⩽ z” is “x ⩽ z.”)
(iii) Any group G can be made into a category as fol-
lows: you have just one object, and the morphisms
from that object to itself are the elements of the
group, with the group multiplication defining the
composition of two morphisms.