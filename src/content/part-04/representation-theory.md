# Representation Theory

$IV$ . $9$ .

Representation Theory

compactifying moduli spaces is that we can then calculate integrals over the completed space. This is crucial for the next item. Invariants from moduli spaces. An important application of moduli spaces in geometry and topology is inspired by quantum field theory, where a particle, rather than following the “best” classical path between two points, follows all paths with varying probabilities (see mirror symmetry [IV . 16 § 2 . 2 . 4 ](/part-04/mirror-symmetry)) .
Classically, one calculates many topological invariants by picking a geometric structure (such as a metric) on a space, calculating some quantity using this structure, and finally proving that the result of the calculation did not depend on the structure we chose. The new alternative is to look at all such geometric structures, and integrate some quantity over the space of all choices. The result, if we can show convergence, will manifestly not depend on any choices.
String theory has given rise to many important applications of this idea, in particular by giving a rich structure to the collection of integrals obtained in this way. Donaldson and Seiberg-Witten theories use this philosophy to give topological invariants of four-manifolds. Gromov-Witten theory applies it to the topology of symplectic manifolds [III.88](/part-03/symplectic-manifolds), and to counting problems in algebraic geometry, such as, How many rational plane curves of degree $5$ pass through fourteen points in general position? (Answer : 87304 .) Modular forms.
One of the most profound ideas in mathematics, the Langlands program, relates number theory to function theory (harmonic analysis) on very special moduli spaces, generalizing the moduli space of elliptic curves. These moduli spaces (Shimura varieties) are expressible as quotients of symmetric spaces (such as H) by arithmetic groups (such as PS$L^{2}$ (Z)) . modular forms [III.59](/part-03/modular-forms) and automorphic forms are special functions on these moduli spaces, described by their interaction with the large symmetry groups of the spaces.
This is an extremely exciting and active area of mathematics, which counts among its recent triumphs the proof of fermat’s last theorem [V.10](/part-05/fermats-last-theorem) and the Shimura-Taniyama-Weil conjecture (Wiles , Taylor Wiles, Breuil - Conrad - Diamond - Taylor). Further Reading For historical accounts and bibliographies on moduli spaces, the following articles are highly recommended. A beautiful and accessible over view of moduli spaces, with an emphasis on the notion of deformations, is $419$ given by Mazur ( 2004 ).
The articles by Hain ( 2000 ) and Looijenga ( 2000 ) give excellent introductions to the study of the moduli spaces of curves, perhaps the oldest and most important of all moduli problems. The article by Mumford and Suominen ( 1972 ) introduces the key ideas underlying the study of moduli spaces in algebraic geometry. Hain, R. 2000 . Moduli of Riemann surfaces, transcendental aspects. In School on Algebraic Geometry, Trieste, 1999 , $pp.293 - 353$ . ICTP Lecture Notes Series, no. $1$ . Trieste: The Abdus Salam International Centre for Theoretical Physics. Looijenga, E. 2000 .
A minicourse on moduli of curves. In School on Algebraic Geometry, Trieste, 1999 , $pp.267 - 91$ . ICTP Lecture Notes Series, no. $1$ . Trieste: The Abdus Salam International Centre for Theoretical Physics. Mazur, B. 2004 . Perturbations, deformations and variations (and “ nearmisses ”) in geometry. Physics and number theory. Bulletin of the American Mathematical Society 41(3) : $307 - 36$ . Mumford, D., and K. Suominen. 1972 . Introduction to the theory of moduli. In Algebraic Geometry, Oslo, 1970 : Proceedings of the Fifth Nordic Summer School in Mathematics, edited by F.
Oort, $pp. 171 - 222$ . Groningen: Wolters Noordhoff. $IV$ . $9$ Representation Theory Ian Grojnowski $1$ Introduction It is a fundamental theme in mathematics that many objects, both mathematical and physical, have symmetries. The goal of group [I.3](/part-01/fundamental-definitions) theory in general, and representation theory in particular, is to study these symmetries. The difference between representation theory and general group theory is that in representation theory one restricts one’s attention to symmetries of vector spaces [I.3](/part-01/fundamental-definitions).
I will attempt here to explain why this is sensible and how it influences our study of groups, causing us to focus on groups with certain nice structures involving conjugacy classes. $2$

Why Vector Spaces?

The aim of representation theory is to understand how the internal structure of a group controls the way it acts externally as a collection of symmetries. In the other direction, it also studies what one can learn about a group’s internal structure by regarding it as a group of symmetries.

$420$

We begin our discussion by making more precise what we mean by “acts as a collection of symmetries.” The idea we are trying to capture is that if we are given a group G and an object X, then we can associate with each element g of G some symmetry of X, which we call φ (g) . For this to be sensible, we need the composition of symmetries to work properly: that is, φ (g) φ (h) (the result of applying φ (h) and then φ (g)) should be the same symmetry as φ (gh) . If X is a set, then a symmetry of X is a particular kind of permutation [III.68](/part-03/permutation-groups) of its elements.
Let us denote by Aut (X) the group of all permutations of X. Then an action of G on X is defined to be a homomorphism from G to Aut (X). If we are given such a homomorphism, then we say that G acts on X. The image to have in mind is that G “does things” to X. This idea can often be expressed more conveniently and vividly by for getting about φ in the notation: thus, instead of writing φ (g) (x) for the effect on x of the symmetry associated with g, we simply think of g itself as a permutation and write gx. However, some times we do need to talk about φ as well:
for instance, we might wish to compare two different actions of G on X. Here is an example. Take as our object X a square in the plane, centered at the origin, and let its vertices be A, B, C, and D (see figure $1$ ). A square has eight symmetries: four rotations by multiples of $90$ ◦ and four reflections. Let G be the group consisting of these eight symmetries; this group is often called $D^{8}$ , or the dihedral group of order $8$ . By definition, G acts on the square. But it also acts on the set of vertices of the square:
for instance, the action of the reflection through the y-axis is to switch A with B and C with D. It might seem as though we have done very little here. After all, we defined G as a group of symmetries so it does not take much effort to associate a symmetry with each element of G. However, we did not define G as a group of permutations of the set {A, B, C, D}, so we have at least done something. To make this point clearer, let us look at some other sets on which G acts, which will include any set that we can build sufficiently naturally from the square.
For instance, G acts not only on the set of vertices {A, B, C, D}, but on the set of edges {AB, BC, CD, DA} and on the set of cross-diagonals {AC, BD} as well. Notice in the latter case that some of the elements of G act in the same way: for example, a clockwise rotation through $90$ ◦ interchanges the two diagonals, as does a counter clockwise rotation through $90$ ◦ . If all the elements of G act differently, then the action is called faithful.

IV. Branches of Mathematics

A

B

D

C

Figure $1$ A square and its diagonals.

Notice that the operations on the square (“ reflect through the y-axis,” “rotate through $90$ ◦ ,” and so on) can be applied to the whole Cartesian plane $R^{2}$ . Therefore, $R^{2}$ is another (and much larger) set on which G acts. To call $R^{2}$ a set, though, is to forget the very interesting fact that the elements in $R^{2}$ can be added together and multiplied by real numbers: in other words, $R^{2}$ is a vector space. Further more, the action of G is well-behaved with respect to this extra structure.
For instance, if g is one of our symmetries and $v^{1}$ and $v^{2}$ are two elements of $R^{2}$ , then g applied to the sum $v^{1} + v^{2}$ yields the sum $g(v^{1}) + g(v^{2})$ . Because of this, we say that G acts linearly on the vector space $R^{2}$ . When V is a vector space, we denote by GL (V) the set of invertible linear maps from V to V . If V is the vector space R n , this group is the familiar group GL n (R) of invertible n $\times$ n matrices with real entries; similarly, when $V = C$ n it is the group of invertible matrices with complex entries. Definition.
A representation of a group G on a vector space V is a homomorphism from G to GL (V). In other words, a group action is a way of regarding a group as a collection of permutations, while a representation is the special case where these permutations are invertible linear maps. One some times sees representations referred to, for emphasis, as linear representations. In the representation of $D^{8}$ on $R^{2}$ that we described above, the homomorphism from G to G$L^{2}$ (R) took the symmetry “clockwise rotation through $90$ ◦ ” to

$0 1{}^{0}$ ) and the symmetry “reflection through the matrix $( - 1$ the y-axis” to the matrix (-100 1).

Given one representation of G, we can produce others using natural constructions from linear algebra. For example, if ρ is the representation of G on $R^{2}$ described above, then its determinant [III.15](/part-03/determinants) det ρ is a homomorphism from G to R ∗ (the group of nonzero real numbers under multiplication), since det (ρ (gh)) = det (ρ (g) ρ (h))= det (ρ (g)) det (ρ (h)),

IV.9.   Representation Theory

by the multiplicative property of determinants. This
makes det ρ a one-dimensional representation, since
each nonzero real number t can be thought of as the
element “multiply by t” of GL1 (R). If ρ is the re pre sen-
tation of D8 just discussed, then under det ρ we find
that rotations act as the identity and reflections act as
multiplication by −1.
   The definition of “representation” is formally very
similar to the definition of “action,” and indeed, since
every linear automorphism of V is a permutation on
the set of vectors in V , the representations of G on V
form a subset of the actions of G on V . But the set of
representations is in general a much more interesting
object. We see here an instance of a general principle:
if a set comes equipped with some extra structure (as
a vector space comes with the ability to add elements
together), then it is a mistake not to make use of that
structure; and the more structure the better.
   In order to emphasize this point, and to place rep-
resentations in a very favorable light, let us start by
considering the general story of actions of groups on
sets. Suppose, then, that G is a group that acts on a set
X. For each x, the set of all elements of the form gx, as
g ranges over G, is called the orbit of x. It is not hard
to show that the orbits form a partition of X.
Example. Let G be the dihedral group D8 acting on
the set X of ordered pairs of vertices of the square, of
which there are sixteen. Then there are three orbits of
G on X, namely {AA, BB, CC, DD}, {AB, BA, BC, CB, CD,
DC, DA, AD}, and {AC, CA, BD, DB}.
   An action of G on X is called transitive if there is just   orbits correspond (respectively) to a two-element sub-
one orbit. In other words, it is transitive if for every
x and y in X you can find an element g such that
gx = y. When an action is not transitive, we can con-
sider the action of G on each orbit separately, which
effectively breaks up the action into a collection of
transitive actions on disjoint sets. So in order to study
all actions of G on sets it suffices to study transitive
actions; you can think of actions as “molecules” and
transitive actions as the “atoms” into which they can
be decomposed. We shall see that this idea of decom-
posing into objects that cannot be further decomposed
is fundamental to representation theory.
   What are the possible transitive actions? A rich
source of such actions comes from subgroups H of G.
Given a subgroup H of G, a left coset of H is a set of
the form {gh : h ∈ H}, which is commonly denoted by
g H. An elementary result in group theory is that the
left cosets form a partition of G (as do the right cosets,     transitive actions.

421
if you prefer them). There is an obvious action of G on
the set of left cosets of H, which we denote by G/H: if
g is an element of G, then it sends the coset g H to the
coset (g g)H.
It turns out that every transitive action is of this form!
Given a transitive action of G on a set X, choose some
x ∈ X and let Hx be the subgroup of G consisting of
all elements h such that hx = x. (This set is called the
stabilizer of x.) Then one can check that the action of G
on X is the same1 as that of G on the left cosets of Hx .
For example, the action of D8 on the first orbit above is
isomorphic to the action on the left cosets of the two-
element subgroup H generated by a reflection of the
square through its diagonal. If we had made a different
choice of x, for example the point x = gx, then the
subgroup of G fixing x would just be g Hx g −1 . This is
a so-called conjugate subgroup, and it gives a different
description of the same orbit, this time as left cosets of
g Hx g −1 .
It follows that there is a one-to-one correspondence
between transitive actions of G and conjugacy classes
of subgroups (that is, collections of subgroups conju-
gate to some given subgroup). If G acts on our original
set X in a nontransitive way, then we can break X up
into a union of orbits, each of which, as a result of this
correspondence, is associated with a conjugacy class of
subgroups. This gives us a convenient “bookkeeping”
mechanism for describing the action of G on X: just
keep track of how many times each conjugacy class of
subgroups arises.
Exercise. Check that in the example earlier the three
group R generated by reflection through a diagonal, the
trivial subgroup, and another copy of the group R.
This completely solves the problem of how groups
act on sets. The internal structure that controls the
action is the subgroup structure of G.
In a moment we will see the corresponding solution
to the problem of how groups act on vector spaces.
First, let us just stare at sets for a while and see why,
though we have answered our question, we should not
feel too happy about it.2
The problem is that the subgroup structure of a
group is just horrible.
1. By “the same” we mean “isomorphic as sets with G-action.” The
casual reader may read this as “the same,” while the more careful
reader should stop here and work out, or look up, precisely what is
meant.
2. Exercise: go back to the example of D8 and list all the possible

$422$

For example, any finite group of order n is a subgroup of the symmetric group [III.68](/part-03/permutation-groups) S n (this is “Cayley’s theorem,” which follows by considering the action of G on itself), so in order to list the conjugacy classes of subgroups of the symmetric group S n one must understand all finite groups of size less than n. 3 Or consider the cyclic group Z  /  n Z . The subgroups correspond to the divisors of n, a subtle property of n that makes the cyclic groups behave quite differently as n varies.
If n is prime, then there are very few subgroups, while if n is a power of $2$ there are quite a few. So number theory is involved even if all we want to do is understand the subgroup structure of a group as simple as a cyclic group. With some relief we now turn our attention back to linear representations. We will see that, just as with actions on sets, one can decompose representations into “atomic” ones.
But, by contrast with the case of sets, these atomic representations (called “irreducible” representations, or some times simply “ irreducibles ”) turn out to exhibit quite beautiful regularities. The nice properties of representation theory come largely from the following fact. While elements of the symmetric group S n can be multiplied together, elements of GL (V), being matrices, can be added as well as multiplied. (But beware: the sum of two elements of GL (V) is not necessarily an element of GL (V), because it may not be invertible.
It is, however, an element of the endomorphism algebra End (V). When $V = C$ n , End (V) is just the familiar algebra of all n $\times$ n matrices with complex entries, both invertible and not .) To see the difference it makes to be able to add, consider the cyclic group $G = Z/nZ$ . For each $ω\inC$ with ω n $= 1$ , we get a representation χ ω of G on C by associating the element $r \in Z/nZ$ with multiplication by ω r , which we think of as a linear map from the one dimensional space C to itself.
This gives us n different one-dimensional representations, one for each nth root of unity, and it turns out that there are no others. More over, if ρ : G $\to$ GL (V) is any representation of Z  /  n Z , then we can write it as a direct sum of these representations by imitating the formula for finding the Fourier mode of a function. Using the representation ρ, we associate with each r in Z  /  n Z a linear map ρ (r). Now let us define a linear map p ω : V $\to$ V by the $3$ .
the classification of finite simple groups [V.7](/part-05/the-classication-of-finite-simple-groups) does at least allow us to estimate the number γ n of subgroups of S n up to conju$22$

gacy: it is a result of Pyber that 2(({}1/16) + {}o({}1))n \le γn \le 24(({}1/6) + {}o({}1)) n . Equality is expected for the lower bound.

IV. Branches of Mathematics

formula

$1$

ω  -  r ρ (r).

$pω =n 0 \le r < n$

Then p ω is an element of End (V), and one can check that it is actually a projection [III.50](/part-03/linear-operators-and-their-properties) onto a subspace V ω of V . In fact, this subspace is an eigenspace [I.3](/part-01/fundamental-definitions) : it consists of all vectors v such that $ρ(1)v =$ ωv, which implies, since ρ is a representation, that ρ (r) v  =  ω r v. The projection p ω should be thought of as the analogue of the nth fourier coefficient [III.27](/part-03/the-fourier-transform) a n (f) of a function f ( $\theta$ ) on the circle;
note the formal similarity of the above formula to the Fourier expansion formula a {}n(f) = e - 2. iin. hetaf(. heta)d. heta. Now the interesting thing about the Fourier series of f is that, under favorable circumstances, it adds up to f itself: that is, it decomposes f into trigonometric functions [III.92](/part-03/trigonometric-functions). Similarly, what is interesting about the subspaces V ω is that we can use them to decompose the representation ρ. The composition of any two distinct projections p ω is $0$ , from which it can be shown that -

$V =$

V ω .

ω

We can write each subspace V ω as a sum of one dimensional spaces, which are copies of C , and the restriction of ρ to any one of these is just the simple representation χ ω defined earlier. Thus, ρ has been decomposed as a combination of very simple “atoms” χ ω . $4$ This ability to add matrices has a very useful consequence. Let a finite group G act on a complex vector space V . A subspace W of V is called G-invariant if $gW = W$ for every g $\in$ G.
Let W be a G-invariant subspace, and let U be a complementary subspace (that is, one such that every element v of V can be written in exactly one way as $w + u$ with $w\inW$ and $u\inU)$ . Let φ be an arbitrary projection onto U . Then it is a simple exercise to show that the linear map $1/|G|^{g}\in^{G}gφ$ is also a projection onto a complementary subspace, but with the added advantage that it is G-invariant. This latter fact follows because applying an element g to the sum just rearranges its terms.
The reason this is so useful is that it allows us to decompose an arbitrary representation into a direct sum of irreducible representations, which are representations with out a G-invariant subspace. Indeed, if ρ is $4$ . To summarize the rest of this article: the similarity to the Fourier transform is not just analogy--decomposing a representation into its irreducible summands is a notion that includes both this example and the Fourier transform.

IV.9.   Representation Theory

not irreducible, then there is a G-invariant subspace W .
By the above remark, we can write G = W ⊕ W with
W also G-invariant. If either W or W has a further
G-invariant subspace, then we can decompose it fur-
ther, and so on. We have just seen this done for the
cyclic group: in that case the irreducible representa-
tions were the one-dimensional representations χω .
   The irreducible representations are the basic build-
ing blocks of arbitrary complex representations, just
as the basic building blocks for actions on sets are the
transitive actions. It raises the question of what the irre-   makes it extremely useful. Notice that it is easier to
duc i ble representations are, a question that has been
answered for many important examples, but which is
not yet solvable by any general procedure.
   To return to the difference between actions and rep-
resentations, another important observation is that any
action of a group G on a finite set X can be linearized
in the following sense. If X has n elements, then we can
look at the hilbert space [III.37](/part-03/bayesian-analysis) L2 (X) of all complex-
valued functions defined on X. This has a natural basis
given by the “delta functions” δx , which send x to 1 and
all other elements of X to 0. Now we can turn the action
of G on X into an action of G on the basis in an obvious
way: we just define gδx to be δgx . We can extend this
definition by linearity, since an arbitrary function f is a     in G. Since tr(AB) = tr(BA) for any two matrices A and
linear combination of the basis functions δx . This gives
us an action of G on L2 (X), which can be defined by a
simple formula: if f is a function in L2 (X), then gf is
the function defined by (gf )(x) = f (g −1 x). Equiva-
lently, gf does to gx what f does to x. Thus, an action
on sets can be thought of as an assignment of a very
special matrix to every group element, namely a matrix
with only 0 s and 1 s and precisely one 1 in each row
and each column. (Such matrices are called permutation
matrices.) By contrast, a general representation assigns
an arbitrary invertible matrix.
   Now, even when X itself is a single orbit under the
action of G, the above representation on L2 (X) can
break up into pieces. For an extreme example of this
phenomenon, consider the action of Z/n Z on itself by
multiplication. We have just seen that, by means of the
“Fourier expansion” above, this breaks up into a sum
of n one-dimensional representations.
   Let us now consider the action of an arbitrary group
G on itself by multiplication, or, to be more precise, left    representations form an orthonormal basis of KG .
multiplication. That is, we shall associate with each ele-
ment g the permutation of G that takes each h in G to
gh. This action is obviously transitive. As an action on
a set it cannot be decomposed any further. But when
we linearize this action to a representation of G on the

423
vector space L2 (G), we have much greater flexibility to
decompose the action. It turns out that, not only does
it break up into a direct sum of many irreducible rep-
resentations, but every irreducible representation ρ of
G occurs as one of the summands in this direct sum,
and the number of times that ρ appears is equal to the
dimension of the subspace on which it acts.
The representation we have just discussed is called
the left regular representation of G. The fact that every
irreducible representation occurs in it so regularly
decompose representations on complex vector spaces
than on real vector spaces, since every automorphism
of a complex vector space has an eigenvector. So it is
simplest to begin by studying complex representations.
The time has now come to state the fundamental the-
orem about complex representations of finite groups.
This theorem tells us how many irreducible representa-
tions there are for a finite group, and, more colorfully,
that representation theory is a “non-Abelian analogue
of Fourier decomposition.”
Let ρ : G → End(V ) be a representation of G. The
character χρ of ρ is defined to be its trace: that is, χρ is
a function from G to C and χρ (g) = tr(ρ(g)) for each g
B, we have χρ (hgh−1 ) = χρ (g). Therefore, χV is very
far from an arbitrary function on G: it is a function that
is constant on each conjugacy class. Let KG denote the
vector space of all complex-valued functions on G with
this property; it is called the representation ring of G.
The characters of the irreducible representations of
a group form a very important set of data about the
group, which it is natural to organize into a matrix. The
columns are indexed by the conjugacy classes, the rows
by the irreducible representations, and each entry is the
value of the character of the given representation at the
given conjugacy class. This array is called the character
table of the group, and it contains all the important
information about representations of the group: it is
our periodic table. The basic theorem of the subject is
that this array is a square.
Theorem (the character table is square). Let G be
a finite group. Then the characters of the irreducible
When we say that the basis of characters is orthonor-
mal we mean that the Hermitian inner product defined
by                         
χ, ψ = |G|−1      χ(g)ψ(g)
g∈G

424

is 1 when χ = ψ and 0 otherwise. The fact that it
is a basis implies in particular that there are exactly
as many irreducible representations as there are con-
jugacy classes in G, and the map from isomorphism
classes of representations to KG that sends each ρ to
its character is an injection. That is, an arbitrary rep-
resentation is determined up to isomorphism by its
character.
   The internal structure of a group G that controls how
it can act on vector spaces is the structure of conju-
gacy classes of elements of G. This is a much gentler
structure than the set of all conjugacy classes of sub-
groups of G. For example, in the symmetric group Sn
two permutations belong to the same conjugacy class
if and only if they have the same cycle type. Therefore,
in that group there is a bijection between conjugacy
classes and partitions of n.5
   Further more, where as it is completely unclear how to
count subgroups, conjugacy classes are much easier to
handle. For instance, since they partition the group, we
have the formula |G| = C a conjugacy class |C|. On the rep-
resentation side, there is a similar formula, which arises
from the decomposition of the regular representation
L2 (G) into irreducibles: |G| = V irreducible (dim V )2 . It
is inconceivable that there might be a similarly simple
formula for sums over all subgroups of a group.
   We have reduced the problem of understanding the
general structure of the representations of a finite
group G to the problem of determining the character
table of G. When G = Z/n Z, our description of the n
irreducible representations above implies that all the
entries of this matrix are roots of unity. Here are the
character tables for D8 (on the left), the group of sym-
me tries of the square, and, just for contrast, for the
group Z/3 Z (on the right):
 1
 1
 1
 1
 2     −2
where z = exp(2π i/3).
  The obvious question—Where did the first table come
from?—indicates the main problem with the theorem:
though it tells us the shape of the character table, it
leaves us no closer to understanding what the actual
  5. Not only is the set of all partitions a sensible combinatorial     fer it, this is the space of sections of the associated
object, it is far smaller than the set of all subgroups of Sn : hardy
[VI.73](/part-06/godfrey-harold-hardy-18771947) and ramanujan
of n is about (1/4 n 3)eπ (2 n/3) .

IV. Branches of Mathematics
character values are. We know how many representa-
tions there are, but not what they are, or even what
their dimensions are. We do not have a general method
for constructing them, a kind of “non-Abelian Fourier
transform.” This is the central problem of representa-
tion theory.
Let us see how this problem can be solved for the
group D8 . Over the course of this article, we have
already encountered three irreducible representations
of this group. The first is the “trivial” one-dimensional
representation: the homomorphism ρ : D8 → GL1 that
takes every element of D8 to the identity. The second is
the two-dimensional representation we wrote down in
the first section, where each element of D8 acts on R2
in the obvious way. The determinant of this re pre sen-
tation is a one-dimensional representation that is not
trivial: it sends the rotations to 1 and the reflections to
−1. So we have constructed three rows of the character
table above. There are five conjugacy classes in D8 (triv-
ial, reflection through axis, reflection through diagonal,

90◦ rotation, 180◦ rotation), so we know that there are
just two more rows.
                                        The equality |G| = 8 = 22 + 1 + 1 + (dim V4 )2 +
(dim V5 )2 implies that these missing representations
are one dimensional. One way of getting the missing
character values is to use orthogonality of characters.
A slightly (but only slightly) less ad hoc way is to
decompose L2 (X) for small X. For example when X is
the pair of diagonals {AC, BD}, we have L2 (X) = V4 ⊕ C,
where C is the trivial representation.
We are now going to start pointing the way toward
some more modern topics in representation theory. Of
necessity, we will use language from fairly advanced
mathematics: the reader who is familiar with only some
of this language should consider browsing the remain-
1
1
1     −1
1     −1
0
ple of this: when G acts on a set X we can consider
the linearized action on L2 (X). Recall that the irre-
duc i ble G-sets are all of the form G/H, for H some sub-
group of G. As well as looking at L2 (G/H), we can con-
sider, for every representation W of H, the vector space
L2 (G/H, W ) = {f : G → W | f (gh) = h−1 f (g), g ∈
G, h ∈ H}; in geometric language, for those who pre-
W -bundle on G/H. This representation of G is called
√ [VI.82](/part-06/srinivasa-ramanujan-18871920)
√    showed that the number of partitions
the induced representation of W from H to G.

IV.9.   Representation Theory

   Other linearizations are also important. For example,
if G acts continuously on a topological space X, we can
consider how it acts on homology classes and hence
on the homology groups [IV.6 §4](/part-04/algebraic-topology) of X.6 The simplest
case of this is the map z → . ar{z} of the circle S 1 . Since
this map squares to the identity map, it gives us an
action of Z/2 Z on S 1 , which becomes a representation
of Z/2 Z on H1 (S 1 ) = R (which represents the identity
as multiplication by 1 and the other element of Z/2 Z as
multiplication by −1).
   Methods like these have been used to determine the
character tables of all finite simple groups [I.3 §3.3](/part-01/fundamental-definitions),
but they still fall short of a uniform description valid
for all groups.
   There are many arithmetic properties of the charac-
ter table that hint at properties of the desired non-
Abelian Fourier transform. For example, the size of a
conjugacy class divides the order of the group, and
in fact the dimension of a representation also divides
the order of the group. Pursuing this thought leads to
an examination of the values of the characters mod p,
relating them to the so-called p-local subgroups. These
are groups of the form N(Q)/Q, where Q is a subgroup
of G, the number of elements of Q is a power of p, and
N(Q) is the normalizer of Q (defined to be the largest
subgroup of G that contains Q as a normal subgroup).
When the so-called “p-Sylow subgroup” of G is Abe-
lian, beautiful conjectures of Broué give us an essen-
tially complete picture of the representations of G. But
in general these questions are at the center of a great
deal of contemporary research.
We have justified the study of group actions on vector
spaces by explaining that the theory of representations
has a nice structure that is not present in the theory
of group actions on sets. A more historically based
account would start by saying that spaces of functions
very often come with natural actions of some group
G, and many problems of traditional interest can be
related to the decomposition of these representations
of G.
   In this section we will concentrate on the case where
G is a compact lie group [III.48 §1](/part-03/lie-theory). We will see that in
this case many of the nice features of the representa-
tion theory of finite groups persist.
  6. The homology groups discussed in the article just referred to
consist of formal sums of homology classes with integer coefficients.
Here, where a vector space is required, we are taking real coefficients.   which are finite dimensional. The problem of finding a

425
The prototypical example is the space L2 (S 1 ) of
square-integrable functions on the circle S 1 . We can
think of the circle as the unit circle in C, and there by
identify it with the group of rotations of the circle
(since multiplication by eiθ rotates the circle by θ). This
action linearizes to an action on L2 (S 1 ): if f is a square-
integrable function defined on S 1 and w belongs to the
circle, then (w · f )(z) is defined to be f (w −1 z). That
is, w · f does to wz what f does to z.
Classical Fourier analysis expands functions in the
space L2 (S 1 ) in terms of a basis of trigonometric func-
tions: the functions zn for n ∈ Z. (These look more
“trigonometric” if one writes eiθ for z and einθ for zn .)
If we fix w and write φn (z) = zn , then (w · φn )(z) =
φn (w −1 z) = w −n φn (z). In particular, w · φn is a mul-
tiple of φn for each w, so the one-dimensional sub-
space generated by φn is invariant under the action of
S 1 . In fact, every irreducible representation of S 1 is of
this form, as long as we restrict attention to continuous
representations.
Now let us consider an innocuous-looking general-
ization of the above situation: we shall replace 1 by n
and try to understand L2 (S n ), the space of complex-
valued square-integrable functions on the n-sphere S n .
The n-sphere is acted on by the group of rotations
SO(n+1). As usual, this can be converted into a rep-
resentation of SO(n+1) on the space L2 (S n ), which
we would like to decompose into irreducible repre-
sentations; equivalently, we would like to decompose
L2 (S n ) into a direct sum of minimal SO(n+1)-invariant
subspaces.
3    Fourier Analysis                                  This turns out to be possible, and the proof is very
similar to the proof for finite groups. In particular, a
compact group such as SO(n+1) has a natural proba-
bility measure [III.71 §2](/part-03/probability-distributions) on it (called Haar measure)
in terms of which we can define averages. Roughly
speaking, the only difference between the proof for
SO(n+1) and the proof in the finite case is that we
have to replace a few sums by integrals.
The general result that one can prove by this method
is the following. If G is a compact group that acts con-
tinuous ly on a compact space X (in the sense that each
permutation φ(g) of X is continuous, and also that
φ(g) varies continuously with g), then L2 (X) splits
up into an orthogonal direct sum of finite-dimensional
minimal G-invariant subspaces; equivalently, the lin-
earized action of G on L2 (X) splits up into an orthog-
onal direct sum of irreducible representations, all of

$426$

Hilbert space basis of $L^{2}$ (X) then splits into two subproblems: we must first determine the irreducible representations of G, a problem which is independent of X, and then determine how many times each of these irreducible representations occurs in $L^{2}$ (X). When $G = S^{1} ($ which we identified with SO (2) ) and $X = S^{1}$ as well, we saw that these irreducible representations were one dimensional. Now let us look at the action of the compact group SO ( $3$ ) on $S^{2}$ .
It can be shown that the action of G on $L^{2} ( S^{2})$ commutes with the Laplacian, the differential operator $\Delta$ on $L^{2}(S^{2})$ defined by ∂ $2$ ∂ $2$ ∂ $2 + +\Delta =$ / ∂$x_{2}$

∂$y_{2}$

∂$z_{2}$

That is, $g(\Delta f) = \delta(gf)$ for any $g \in G$ and any (sufficiently smooth) function f . In particular, if f is an eigenfunction for the Laplacian (which means that $\Delta f = \lambda f$ for some $\lambda\inC)$ , then for each $g\in$ SO (3) we have . elta gf = g. elta f = g. ambda f = . ambda gf , so gf is also an eigenfunction for $\Delta.$ Therefore, the space V $\lambda$ of all eigenvectors for the Laplacian with eigenvalue $\lambda$ is G-invariant.
In fact, it turns out that if V $\lambda$ is nonzero then the action of G on V $\lambda$ is an irreducible representation. Further more, each irreducible representation of SO ( $3$ ) arises exactly once in this way. More precisely, we have a Hilbert space direct sum, -

$L^{2}(S^{2}) =V^{2n}({}^{2n} + {}^{2})$ ,

$n \ge 0$

and each eigenspace $V^{2n}({}^{2n} + {}^{2})$ has dimension $2n + 1$ . Note that this is a case where the set of eigenvalues is discrete. (These eigenspaces are discussed further in spherical harmonics [III.87](/part-03/spherical-harmonics).) The nice feature that each irreducible representation appears at most once is rather special to the example $L^{2}$ (S n). (For an example where this does not happen, recall that with the regular representation $L^{2}$ (G) of a finite group G each irreducible representation ρ occurs dim ρ times in $L^{2}$ (G).) However, other features are more generic:
for example, when a compact Lie group acts differentiably on a space X, then the sum of all the G-invariant subspaces of $L^{2}$ (X) corresponding to a particular representation is always equal to the set of common eigenvectors of some family of commuting differential operators. (In the example above, there was just one operator, the Laplacian .) Interesting special functions [III.85](/part-03/special-functions), such as solutions of certain differential equations, often admit representation-theoretic meaning, for example as matrix

IV. Branches of Mathematics

coefficients. Their properties can then easily be deduced from general results in functional analysis and representation theory rather than from any calculation. Hypergeometric equations, Bessel equations, and many integrable systems arise in this way. There is more to say about the similarities between the representation theory of compact groups and that of finite groups. Given a compact group G and an irreducible representation ρ of G, we can again take its trace (since it is finite dimensional) and there by define its character χ ρ . Just as before, χ ρ is constant on each conjugacy class.
Finally, “the character table is square,” in the sense that the characters of the irreducible representations form an orthonormal basis of the Hilbert space of all square-integrable functions that are conjugation invariant in this sense. (Now , though, the “square matrix” is infinite .) When $G = S{}^{1}$ this is the Fourier theorem; when G is finite this is the theorem of section $2$ . $4$ Noncompact Groups, Groups in Characteristic p, and Lie Algebras The “character table is square” theorem focuses our attention on groups with nice conjugacy-class structure.
What happens when we take such a group but relax the requirement that it be compact? A paradigmatic noncompact group is the real numbers R . Like $S^{1}$ , R acts on itself in an obvious way (the real number t is associated with the translation s   $\to$ s  +  t), so let us linearize that action in the usual way and look for a decomposition of $L^{2}$ (R) into Rinvariant subspaces. In this situation we have a continuous family of irreducible one-dimensional representations: for each real number $\lambda$ we can define the function $χ\lambda$ by $χ\lambda(x) =e^{2}\pi\text{i}\lambda x$ .
These functions are not square integrable, but despite this difficulty classical Fourier analysis tells us that we can write an $L^{2}$ - function in terms of them. However, since the Fourier modes now vary in a continuous family, we can no longer decompose a function as a sum: rather we must use an integral. First, we define the Fourier transform f ˆ of f by the formula f ˆ(. ambda) = f(x)e2. ii. ambda xdx. The desired decomposition of f is then  f(x) = fˆ(. ambda)e - 2. ii. ambda xd. ambda.
This, the Fourier in version formula, tells us that f is a weighted integral of the functions χ $\lambda$ . We can also think of it as something like a decomposition of $L^{2}$ (R) as a “direct integral” (rather than direct sum) of the one-dimensional subspaces generated by the functions χ $\lambda$ . However,

IV.9.   Representation Theory

we must treat this picture with due caution since the
functions χ. ambda do not belong to L2 (R).
   This example indicates what we should expect in gen-
eral. If X is a space with a measure and G acts continu-
ously on it in a way that preserves the measures of sub-
sets of X (as translations did with subsets of R), then
the action of G on X gives rise to a measure \mu X defined
on the set of all irreducible representations, and L2 (X)
can be decomposed as the integral over all irreducible
representations with respect to this measure. A theo-
rem that explicitly describes such a decomposition is
called a Plancherel theorem for X.
   For a more complicated but more typical example,
let us look at the action of SL2 (R) (the group of real
2 . imes 2 matrices with determinant 1) on R2 and see how
to decompose L2 (R2 ). As we did when we looked at
functions defined on S 2 , we shall make use of a differ-
ential operator. This involves the small technicality that
we should look at smooth functions, and we do not ask
for them to be defined at the origin. The appropriate
differential operator this time turns out to be the Euler
vector field x(∂/∂x) + y(∂/∂y). It is not hard to check
that if f satisfies the condition f (tx, ty) = t s f (x, y)
for every x, y, and t > 0, then f is an eigenfunction
of this operator with eigenvalue s, and indeed all func-
tions in the eigenspace with this eigenvalue, which we
shall denote by Ws , are of this form. We can also split
Ws up as Ws+ ⊕ Ws− , where Ws+ and Ws− consist of the
even and odd functions in Ws , respectively.
   The easiest way of analyzing the structure of Ws is to
compute the action of the lie algebra [III.48 §2](/part-03/lie-theory) sl2 .
For those readers unfamiliar with Lie algebras, we will
say only that the Lie algebra of a Lie group G keeps
track of the action of elements of G that are “infinit es-
imally close to the identity,” and that in this case the
Lie algebra sl2 can be identified with the space of 2 . imes 2
matrices of trace 0, with ( ac −a
operator (−ax − by)(∂/∂x) + (−cx + ay)(∂/∂y).
   Every element of Ws is a function on R2 . If we restrict     thing a little bit weaker, however: if we quotient out
these functions to the unit circle, then we obtain a map
from Ws to the space of smooth functions defined on
S 1 , which turns out to be an isomorphism. We already
know that this space has a basis of Fourier modes zm ,
which we can now think of as (x + iy)m , defined when
x 2 + y 2 = 1. There is a unique extension of this from a
function defined on S 1 to a function in Ws , namely the
function wm (x, y) = (x + iy)m (x 2 + y 2 )(s−m)/2 . One
can then check the following actions of simple matri-
ces on these functions (to do so, recall the association
of the matrices with differential operators given in the

427
previous paragraph):
       
0 −i
· wm = mwm ,
i   0

1    i
· wm = (m − s)wm+2 ,
i −1
         
1    −i
· wm = (−m − s)wm−2 .
−i −1
It follows that if s is not an integer, then from any func-
tion wm in Ws+ we can produce all the others using
the action of SL2 (R). Therefore, SL2 (R) acts irreducibly
on Ws+ . Similarly, it acts irreducibly on Ws− . We have
therefore encountered a significant difference between
this and the finite/compact case: when G is not com-
pact, irreducible representations of G can be infinite
dimensional.
Looking more closely at the formulas for Ws when
s ∈ Z, we see more disturbing differences. In order to
understand these, let us distinguish carefully between
representations that are reducible and representations
that are decomposable. The former are representations
that have nontrivial G-invariant subspaces, where as
the latter are representations where one can decom-
pose the space on which G acts into a direct sum of
G-invariant subspaces. Decomposable representations
are obviously reducible. In the finite/compact case, we
used an averaging process to show that reducible rep-
resentations are decomposable. Now we do not have
a natural probability measure to use for the aver-
aging, and it turns out that there can be reducible
representations that are not decomposable.
Indeed, if s is a nonnegative integer, then the sub-
spaces Ws+ and Ws− give us an example of this phe-
nomenon. They are indecomposable (in fact, this is true
even when s is a negative integer not equal to −1) but
they contain an invariant subspace of dimension s + 1.
b ) acting as the differential
Thus, we cannot write the representation as a direct
sum of irreducible representations. (One can do some-
by the (s + 1)-dimensional subspace, then the quotient
representation can be decomposed.)
It is important to understand that in order to produce
these indecomposable but reducible representations
we worked not in the space L2 (R2 ) but in the space of
smooth functions on R2 with the origin removed. For
instance, the functions wm above are not square inte-
grable. If we look just at representations of G that act
on subspaces of L2 (X), then we can split them up into
a direct sum of irreducibles: given a G-invariant sub-
space, its orthogonal complement is also G-invariant.

428

It might therefore seem best to ignore the other, rather
subtle representations and just look at these ones. But
it turns out to be easier to study all representations
and only later ask which ones occur inside L2 (X). For
SL2 (R), the representations we have just constructed
(which were subquotients of Ws± ) exhaust all the irre-
duc i ble representations,7 and there is a Plancherel for-
mula for L2 (R2 ) that tells us which ones appear in
L2 (R2 ) and with what multiplicity:

  To summarize: if G is not compact, then we can no
longer take averages over G. This has various conse-
quences:
Representations occur in continuous families. The
  decomposition of L2 (X) takes the form of a direct
  integral, not a direct sum.
Representations do not split up into a direct sum of
  irreducibles. Even when a representation admits a
  finite composition series, as with the action of SL2 (R)
  on Ws± , it need not split up into a direct sum. So
  to describe all representations we need to do more
  than just describe the irreducibles—we also need to
  describe the glue that holds them together.
   So far, the theory of representations of a noncom-
pact group G seems to have none of the pleasant fea-
tures of the compact case. But one thing does survive:
there is still an analogue of the theorem that the char-
acter table is square. Indeed, we can still define charac-
ters in terms of the traces of group elements. But now
we must be careful, since the irreducible representa-
tion may be on an infinite-dimensional vector space, so
that its trace cannot be defined so easily. In fact, char-
acters are not functions on G, but only distributions
[III.18](/part-03/distributions). The character of a representation determines
the semisimplification of a representation ρ: that is, it
tells us which irreducible representations are part of ρ,
but not how they are glued together.8
   These phenomena were discovered by Harish-Chan-
dra in the 1950 s in an extraordinary series of works that
completely described the representation theory of Lie
groups such as the ones we have discussed (the precise
  7. To make this precise requires some care about what we mean
by “isomorphic.” Because many different topological vector spaces
can have the same underlying sl2 -module, the correct notion is of
infinitesimal equivalence. Pursuing this notion leads to the category of
Harish-Chandra modules, a category with good finiteness properties.
  8. It is a major theorem of Harish-Chandra that the distribution that     9. The problem of determining the irreducible unitary re pre sen-
defines a character is given by analytic functions on a dense subset of    tat i ons for real reductive groups has still not been solved; the most
the semisimple elements of the group.

IV. Branches of Mathematics
condition is that they should be real and reductive—
a concept that will be explained later in this article)
and the generalizations of classical theorems of Fourier
analysis to this setting.9
Independently and slightly earlier, Brauer had inves-
tigated the representation theory of finite groups on
finite-dimensional vector spaces over fields of char-
acteristic p. Here, too, reducible representations need
not decompose as direct sums, though in this case the
. nfty
problem is not lack of compactness (obviously, since
L2 (R2 ) =
−. nfty                                        everything is finite) but an in ability to average over the
group: we would like to divide by |G|, but often this
is zero. A simple example that illustrates this is the
action of Z/p Z on the space F2 p that takes x to the 2 . imes 2
matrix ( 11 x0 ). This is reducible, since the column vec-
tor ( 10 ) is fixed by the action, and therefore generates
an invariant subspace. However, if one could decom-
pose the action, then the matrices ( 11 x0 ) would all be
diagonalizable, which they are not.
It is possible for there to be infinitely many indecom-
pos able representations, which again may vary in fam-
ilies. However, as before, there are only finitely many
irreducible representations, so there is some chance of
a “character table is square” theorem in which the rows
of the square are parametrized by characters of irre-
duc i ble representations. Brauer proved just such a the-
orem, pairing the characters with p-semisimple conju-
gacy classes in G: that is, conjugacy classes of elements
whose order is not divisible by p.
We will draw two crude morals from the work of
Harish-Chandra and of Brauer. The first is that the cat-
egory of representations of a group is always a reason-
able object, but when the representations are infinite
dimensional it requires serious technical work to set it
up. Objects in this category do not necessarily decom-
pose as a direct sum of irreducibles (one says that the
category is not semisimple), and can occur in infinite
families, but irreducible objects pair off in some precise
way with certain “diagonalizable” conjugacy classes in
the group—there is always some kind of analogue of
“the character table is square” theorem.
It turns out that when we consider representations
in more general contexts—Lie algebras acting on vec-
tor spaces, quantum groups, p-adic groups on infinite-
dimensional complex or p-adic vector spaces, etc.—
these qualitative features stay the same.
complete results are due to Vogan.

IV.9.   Representation Theory

  The second moral is that we should always hope
for some “non-Abelian Fourier transform”: that is, a
set that parametrizes irreducible representations and a
description of the character values in terms of this set.    determinant-1 matrices A such that A equals the com-
  In the case of real reductive groups Harish-Chandra’s
work provides such an answer, generalizing the Weyl
character formula for compact groups; for arbitrary
groups no such answer is known. For special classes
of groups, there are partially successful general princi-    groups;11 the classification of finite simple groups tells
ples (the orbit method, Broué’s conjecture), of which
the deepest are the extraordinary circle of conjec-
tures known as the Langlands program, which we shall
discuss later.
   5    Interlude: The Philosophical Lessons of

Our basic theorem (“the character table is square”) tells    tion field of an algebraic variety [V.30](/part-05/the-resolution-of-singularities). The les-
us to expect that the category of all irreducible rep-
resentations of G is interesting when the conjugacy-
class structure of G is in some way under control. We
will finish this essay by explaining a remarkable fam-
ily of examples of such groups—the rational points of
reductive algebraic groups—and their conjectured rep-
resentation theory, which is described by the Langlands
program.
   An affine algebraic group is a subgroup of some
group GLn that is defined by polynomial equations in
the matrix coefficients. For example, the determinant
of a matrix is a polynomial in the matrix coefficients,
so the group SLn , which consists of all matrices in GLn     n parameters (in other words, they belong to families
with determinant 1, is such a group. Another is SOn ,
which is the set of matrices with determinant 1 that
satisfy the equation AAT = I.
   The above notation did not specify what sort of coef-     obvious that this is a “good” question though.)
ficients we were allowing for the matrices. That vague-
ness was deliberate. Given an algebraic group G and
a field k, let us write G(k) for the group where the
coefficients are taken to have values in k. For exam-
ple, SLn (Fq ) is the set of n . imes n matrices with coeffi-
cients in the finite field Fq and determinant 1. This
group is finite, as is SOn (Fq ), while SLn (R) and SOn (R)   some kind of non-Abelian Fourier integral. For certain
are Lie groups. More over, SOn (R) is compact, while
SLn (R) is not. So among affine algebraic groups over
fields one already finds all three types of groups we
have discussed: finite groups, compact Lie groups, and
noncompact Lie groups.
   We can think of SLn (R) as the set of matrices in
SLn (C) that are equal to their complex conjugates.
There is another involution on SLn (C) that is a sort

429
of “twisted” form of complex conjugation, where we
send a matrix A to the complex conjugate of (A−1 )T .
The fixed points of this new involution (that is, the
plex conjugate of (A−1 )T ) form a group called SUn (R).
This is also called a real form of SLn (C),10 and it is
compact.
The groups SLn (Fq ) and SOn (Fq ) are almost simple
us, mysteriously, that all but twenty-six of the finite
simple groups are of this form. A much, much easier
theorem tells us that the connected compact groups are
also of this form.
Now, given an algebraic group G, we can also con-
sider the instances G(Qp ), where Qp is the field of
“The Character Table Is Square”
consider G(k) for any other field k, such as the func-
son of section 4 is that we may hope for all of these
many groups to have a good representation theory,
but that to obtain it there will be serious “analytic” or
“arithmetic” difficulties to over come, which will depend
strongly on the properties of the field k.
Lest the reader adopt too optimistic a viewpoint, we
point out that not every affine algebraic group has a
nice conjugacy-class structure. For example, let Vn be
the set of upper triangular matrices in GLn with 1 s
along the diagonal, and let k be Fq . For large n, the con-
jugacy classes in Vn (Fq ) form large and complex fami-
lies: to parametrize them sensibly one needs more than
of dimension greater than n, in an appropriate sense),
and it is not in fact known how to parametrize them
even for a smallish value of n, such as 11. (It is not
More generally, solvable groups tend to have horrible
conjugacy-class structure, even when the groups them-
selves are “sensible.” So we might expect their repre-
sentation theory to be similarly horrible. The best we
can hope for is a result that describes the entries of
the character table in terms of this horrible structure—
p-groups Kirillov found such a result in the 1960 s, as
10. When we say that SLn (R) and SUn (R) are both “real forms” of
SLn (C), what is meant more precisely is that in both cases the group
can be described as a subgroup of some group of real matrices that
consists of all solutions to a set of polynomial equations, and that
when the same set of equations is applied instead to the group of
complex matrices the result is isomorphic to SLn (C).
11. Which is to say that the quotient of these groups by their center
is simple.

430

an example of the “orbit method,” but the general result
is not yet known.
   On the other hand, groups that are similar to con-
nected compact groups do have a nice conjugacy-class
structure: in particular, finite simple groups do. An
algebraic group is called reductive if G(C) has a com-
pact real form. So, for instance, SLn is reductive by the
existence of the real form SUn (R). The groups GLn and
SOn are also reductive, but Vn is not.12
   Let us examine the conjugacy classes in the group
SUn . Every matrix in SUn (R) can be diagonalized, and
two conjugate matrices have the same eigenvalues, up
to reordering. Conversely, any two matrices in SUn (R)
with the same eigenvalues are conjugate. Therefore, the
conjugacy classes are parametrized by the quotient of
the subgroup of all diagonal matrices by the action of
Sn that permutes the entries.
   This example can be generalized. Any compact con-
nected group has a maximal torus T , that is, a maximal
subgroup isomorphic to a product of circles. (In the pre-
vious example it was the subgroup of diagonal matri-
ces.) Any two maximal tori are conjugate in G, and any
conjugacy class in G intersects T in a unique W -orbit on
T , where W is the Weyl group, the finite group N(T )/T
(where N(T ) is the normalizer of T ).
   The description of conjugacy classes in G(. ar{k}), for an
algebraically closed field . ar{k}, is only a little more compli-
cated. Any element g ∈ G(. ar{k}) admits a jordan decom-
position [III.43](/part-03/jordan-normal-form): it can be written as g = su = us,
where s is conjugate to an element of T (. ar{k}) and u is
unipotent when considered as an element of GLn (. ar{k}).
(A matrix A is unipotent if some power of A − I is
zero.) Unipotent elements never intersect compact sub-
groups. When G = GL n this is the usual Jordan decom-
position; conjugacy classes of unipotent elements are
parametrized by partitions of n, which, as we men-
tioned in section 2, are precisely the conjugacy classes
of W = Sn . For general reductive groups, unipotent con-
jugacy classes are again almost the same thing as con-
jugacy classes in W .13 In particular, there are finitely
many, independent of . ar{k}.
   Finally, when k is not algebraically closed, one de-
scribes conjugacy classes by a kind of Galois descent;
  12. The miracle, not relevant for this discussion, is that compact
connected groups can be easily classified. Each one is essentially a
product of circles and non-Abelian simple compact groups. The latter
are parametrized by dynkin diagrams [III.48 §3](/part-03/lie-theory). They are SU n , Sp2 n ,     14. The first such theorems were proved for GLn (Fq ) by Green and
SOn , and five others, denoted E6 , E7 , E8 , F4 , and G2 . That is it!    Steinberg. However, the notion of Jordan decomposition for charac-
  13. They are different, but related. Precisely, they are given by com-   ters originates with Brauer, in his work on modular representation
binatorial data, Lusztig’s two-sided cells for the corresponding affine     theory. It is part of his modular analogue of the “character table is
Weyl group.

IV. Branches of Mathematics
for example, in GLn (k), semisimple classes are still
determined by their characteristic polynomial, but the
fact that this polynomial has coefficients in k con-
str a ins the possible conjugacy classes.
The point of describing the conjugacy-class structure
in such detail is to describe the representation theory
in analogous terms. A crude feature of the conjugacy-
class structure is the way it decouples the field k from
finite combinatorial data that is attached to G but inde-
pendent of k—things like W , the lattice defining T ,
roots, and weights.
The “philosophy” suggested by the theorem that the
character table is square suggests that the re pre sen-
tation theory should also admit such a decoupling: it
should be built out of the representation theory of
k∗ , which is the analogue of the circle, and out of
the combinatorial structure of G(. ar{k}) (such as the finite
groups W ). More over, representations should have a
“Jordan decomposition”:14 the “unipotent” re pre sen-
tat i ons should have some kind of combinatorial com-
plexity but little dependence on k, and compact groups
should have no unipotent representations.
The Langlands program provides a description along
the lines laid out above, but it goes beyond any of the
results we have suggested in that it also describes the
entries of the character table. Thus, for this class of
examples, it gives us (conjecturally) the hoped-for “non-
Abelian Fourier transform.”
6    Coda: The Langlands Program
And so we conclude by just hinting at statements.
If G(k) is a reductive group, we want to describe an
appropriate category of representations for G(k), or at
least the character table, which we may think of as a
“semisimplification” of that category.
Even when k is finite, it is too much to hope that con-
jugacy classes in G(k) parametrize irreducible repre-
sentations. But something not so far off is conjectured,
as follows.
To a reductive group G over an algebraically closed
field, Langlands attaches another reductive group LG,
the Langlands dual, and conjectures that representa-
tions of G(k) will be parametrized by conjugacy classes
square” theorem, which we mentioned in section 3.