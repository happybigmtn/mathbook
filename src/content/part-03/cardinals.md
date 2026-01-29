# Cardinals

III.8.   Categories                                                                                                 165

mathematical consequences of such an equivalence are          type, and f and g are structure-preserving maps from
extremely rich. (See mirror symmetry [IV.16](/part-04/mirror-symmetry) for more         A to B and from B to C, respectively, then their compos-
details. For other notions related to those discussed in      ite g◦f is a structure-preserving map from A to C. That
this article, see symplectic manifolds [III.88](/part-03/symplectic-manifolds).)             is, structure-preserving maps can be composed (at least
                                                              if the range of one equals the domain of the other). We
The Calculus of Variations                                    also use structure-preserving maps to decide when to
    See Variational Methods [III.94](/part-03/variational-methods)                          regard two structures as “essentially the same”: we call
                                                              A and B isomorphic if there is a structure-preserving
                                                              map from A to B with an inverse that also preserves
III.7     Cardinals                                           structure.
                                                                 A category is a mathematical structure that allows
The cardinality of a set is a measure of how large that
                                                              one to discuss properties such as these in the abstract.
set is. More precisely, two sets are said to have the same
                                                              It consists of a collection of objects, together with mor-
cardinality if there is a bijection between them. So what
                                                              phisms between those objects. That is, if a and b are
do cardinalities look like?
                                                              two objects in the category, then there is a collection of
   There are finite cardinalities, meaning the cardi-
                                                              morphisms between a and b. There is also a notion of
nalities of finite sets: a set has “cardinality n” if it
                                                              composition of morphisms: if f is a morphism from a
has precisely n elements. Then there are countable
                                                              to b and g is a morphism from b to c, then there is a
[III.11](/part-03/countable-and-uncountable-sets) infinite sets: these all have the same cardinal-
                                                              composite of f and g, which is a morphism from a to c.
ity (this follows from the definition of “countable”),
                                                              This composition must be associative. In addition, for
usually written א0 . For example, the natural numbers,
                                                              each object a there is an “identity morphism,” which
the integers, and the rationals all have cardinality א0 .
                                                              has the property that if you compose it with another
However, the reals are uncountable, and so do not
                                                              morphism f then you get f .
have cardinality א0 . In fact, their cardinality is denoted
                                                                 As the earlier discussion suggests, an example of
by 2א0 .
                                                              a category is the category of groups. The objects of
   It turns out that cardinals can be added and multi-
                                                              this category are groups, the morphisms are group
plied and even raised to powers of other cardinals (so
                                                              homomorphisms, and composition and the identity are
“2א0 ” is not an isolated piece of notation). For details,
                                                              defined in the way we are used to. However, it is by no
and more explanation, see set theory [IV.22 §2](/part-04/set-theory).
                                                              means the case that all categories are like this, as the
                                                              following examples show.
III.8 Categories
         Eugenia Cheng                                          (i) We can form a category by taking the natural num-
                                                                    bers as its objects, and letting the morphisms from
When we study groups [I.3 §2.1](/part-01/fundamental-definitions) or vector spaces                    n to m be all the n \times m matrices with real entries.
[I.3 §2.3](/part-01/fundamental-definitions), we pay particular attention to certain classes          Composition of morphisms is the usual matrix
of maps between them: the important maps between                    multiplication. We would not normally think of
groups are the group homomorphisms [I.3 §4.1](/part-01/fundamental-definitions), and                  an n \times m matrix as a map from the number n to
the important maps between vector spaces are the lin-               the number m, but the axioms for a category are
ear maps [I.3 §4.2](/part-01/fundamental-definitions). What makes these maps important                nevertheless satisfied.
is that they are the functions that “preserve structure”:      (ii) Any set can be turned into a category: the objects
for example, if φ is a homomorphism from a group G                  are the elements of the set, and a morphism from
to a group H, then it “preserves multiplication,” in the            x to y is the assertion “x = y.” We can also make
sense that φ(g1 g2 ) = φ(g1 )φ(g2 ) for any pair of ele-            an ordered set into a category by letting a mor-
ments g1 and g2 of G. Similarly, linear maps preserve               phism from x to y be the assertion “x ⩽ y.” (The
addition and scalar multiplication.                                 “composite” of “x ⩽ y” and “y ⩽ z” is “x ⩽ z.”)
   The notion of a structure-preserving map applies far       (iii) Any group G can be made into a category as fol-
more generally than just to these two examples, and                 lows: you have just one object, and the morphisms
one of the purposes of category theory is to understand             from that object to itself are the elements of the
the general properties of such maps. For instance, if A,            group, with the group multiplication defining the
B, and C are mathematical structures of some given                  composition of two morphisms.

