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

IV.9.   Representation Theory                                                                                                  421

by the multiplicative property of determinants. This           if you prefer them). There is an obvious action of G on
makes det ρ a one-dimensional representation, since            the set of left cosets of H, which we denote by G/H: if
each nonzero real number t can be thought of as the            g is an element of G, then it sends the coset g H to the
element “multiply by t” of GL1 (R). If ρ is the re pre sen-      coset (g g)H.
tation of D8 just discussed, then under det ρ we find              It turns out that every transitive action is of this form!
that rotations act as the identity and reflections act as       Given a transitive action of G on a set X, choose some
multiplication by −1.                                          x ∈ X and let Hx be the subgroup of G consisting of
   The definition of “representation” is formally very          all elements h such that hx = x. (This set is called the
similar to the definition of “action,” and indeed, since        stabilizer of x.) Then one can check that the action of G
every linear automorphism of V is a permutation on             on X is the same1 as that of G on the left cosets of Hx .
the set of vectors in V , the representations of G on V        For example, the action of D8 on the first orbit above is
form a subset of the actions of G on V . But the set of        isomorphic to the action on the left cosets of the two-
representations is in general a much more interesting          element subgroup H generated by a reflection of the
object. We see here an instance of a general principle:        square through its diagonal. If we had made a different
if a set comes equipped with some extra structure (as          choice of x, for example the point x = gx, then the
a vector space comes with the ability to add elements          subgroup of G fixing x would just be g Hx g −1 . This is
together), then it is a mistake not to make use of that        a so-called conjugate subgroup, and it gives a different
structure; and the more structure the better.                  description of the same orbit, this time as left cosets of
   In order to emphasize this point, and to place rep-         g Hx g −1 .
resentations in a very favorable light, let us start by           It follows that there is a one-to-one correspondence
considering the general story of actions of groups on          between transitive actions of G and conjugacy classes
sets. Suppose, then, that G is a group that acts on a set      of subgroups (that is, collections of subgroups conju-
X. For each x, the set of all elements of the form gx, as      gate to some given subgroup). If G acts on our original
g ranges over G, is called the orbit of x. It is not hard      set X in a nontransitive way, then we can break X up
to show that the orbits form a partition of X.                 into a union of orbits, each of which, as a result of this
                                                               correspondence, is associated with a conjugacy class of
Example. Let G be the dihedral group D8 acting on              subgroups. This gives us a convenient “bookkeeping”
the set X of ordered pairs of vertices of the square, of       mechanism for describing the action of G on X: just
which there are sixteen. Then there are three orbits of        keep track of how many times each conjugacy class of
G on X, namely {AA, BB, CC, DD}, {AB, BA, BC, CB, CD,          subgroups arises.
DC, DA, AD}, and {AC, CA, BD, DB}.
                                                               Exercise. Check that in the example earlier the three
   An action of G on X is called transitive if there is just   orbits correspond (respectively) to a two-element sub-
one orbit. In other words, it is transitive if for every       group R generated by reflection through a diagonal, the
x and y in X you can find an element g such that                trivial subgroup, and another copy of the group R.
gx = y. When an action is not transitive, we can con-
                                                                 This completely solves the problem of how groups
sider the action of G on each orbit separately, which
                                                               act on sets. The internal structure that controls the
effectively breaks up the action into a collection of
                                                               action is the subgroup structure of G.
transitive actions on disjoint sets. So in order to study
                                                                 In a moment we will see the corresponding solution
all actions of G on sets it suffices to study transitive
                                                               to the problem of how groups act on vector spaces.
actions; you can think of actions as “molecules” and
                                                               First, let us just stare at sets for a while and see why,
transitive actions as the “atoms” into which they can
                                                               though we have answered our question, we should not
be decomposed. We shall see that this idea of decom-
                                                               feel too happy about it.2
posing into objects that cannot be further decomposed
                                                                 The problem is that the subgroup structure of a
is fundamental to representation theory.
                                                               group is just horrible.
   What are the possible transitive actions? A rich
source of such actions comes from subgroups H of G.
                                                                 1. By “the same” we mean “isomorphic as sets with G-action.” The
Given a subgroup H of G, a left coset of H is a set of         casual reader may read this as “the same,” while the more careful
the form {gh : h ∈ H}, which is commonly denoted by            reader should stop here and work out, or look up, precisely what is
                                                               meant.
g H. An elementary result in group theory is that the             2. Exercise: go back to the example of D8 and list all the possible
left cosets form a partition of G (as do the right cosets,     transitive actions.

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

IV.9.   Representation Theory                                                                                        423

not irreducible, then there is a G-invariant subspace W .      vector space L2 (G), we have much greater flexibility to
By the above remark, we can write G = W ⊕ W with               decompose the action. It turns out that, not only does
W also G-invariant. If either W or W has a further             it break up into a direct sum of many irreducible rep-
G-invariant subspace, then we can decompose it fur-            resentations, but every irreducible representation ρ of
ther, and so on. We have just seen this done for the           G occurs as one of the summands in this direct sum,
cyclic group: in that case the irreducible representa-         and the number of times that ρ appears is equal to the
tions were the one-dimensional representations χω .            dimension of the subspace on which it acts.
   The irreducible representations are the basic build-           The representation we have just discussed is called
ing blocks of arbitrary complex representations, just          the left regular representation of G. The fact that every
as the basic building blocks for actions on sets are the       irreducible representation occurs in it so regularly
transitive actions. It raises the question of what the irre-   makes it extremely useful. Notice that it is easier to
duc i ble representations are, a question that has been          decompose representations on complex vector spaces
answered for many important examples, but which is             than on real vector spaces, since every automorphism
not yet solvable by any general procedure.                     of a complex vector space has an eigenvector. So it is
   To return to the difference between actions and rep-         simplest to begin by studying complex representations.
resentations, another important observation is that any           The time has now come to state the fundamental the-
action of a group G on a finite set X can be linearized         orem about complex representations of finite groups.
in the following sense. If X has n elements, then we can       This theorem tells us how many irreducible representa-
look at the hilbert space [III.37](/part-03/bayesian-analysis) L2 (X) of all complex-      tions there are for a finite group, and, more colorfully,
valued functions defined on X. This has a natural basis         that representation theory is a “non-Abelian analogue
given by the “delta functions” δx , which send x to 1 and      of Fourier decomposition.”
all other elements of X to 0. Now we can turn the action          Let ρ : G → End(V ) be a representation of G. The
of G on X into an action of G on the basis in an obvious       character χρ of ρ is defined to be its trace: that is, χρ is
way: we just define gδx to be δgx . We can extend this          a function from G to C and χρ (g) = tr(ρ(g)) for each g
definition by linearity, since an arbitrary function f is a     in G. Since tr(AB) = tr(BA) for any two matrices A and
linear combination of the basis functions δx . This gives      B, we have χρ (hgh−1 ) = χρ (g). Therefore, χV is very
us an action of G on L2 (X), which can be defined by a          far from an arbitrary function on G: it is a function that
simple formula: if f is a function in L2 (X), then gf is       is constant on each conjugacy class. Let KG denote the
the function defined by (gf )(x) = f (g −1 x). Equiva-          vector space of all complex-valued functions on G with
lently, gf does to gx what f does to x. Thus, an action        this property; it is called the representation ring of G.
on sets can be thought of as an assignment of a very              The characters of the irreducible representations of
special matrix to every group element, namely a matrix         a group form a very important set of data about the
with only 0 s and 1 s and precisely one 1 in each row            group, which it is natural to organize into a matrix. The
and each column. (Such matrices are called permutation         columns are indexed by the conjugacy classes, the rows
matrices.) By contrast, a general representation assigns       by the irreducible representations, and each entry is the
an arbitrary invertible matrix.                                value of the character of the given representation at the
   Now, even when X itself is a single orbit under the         given conjugacy class. This array is called the character
action of G, the above representation on L2 (X) can            table of the group, and it contains all the important
break up into pieces. For an extreme example of this           information about representations of the group: it is
phenomenon, consider the action of Z/n Z on itself by           our periodic table. The basic theorem of the subject is
multiplication. We have just seen that, by means of the        that this array is a square.
“Fourier expansion” above, this breaks up into a sum
of n one-dimensional representations.                          Theorem (the character table is square). Let G be
   Let us now consider the action of an arbitrary group        a finite group. Then the characters of the irreducible
G on itself by multiplication, or, to be more precise, left    representations form an orthonormal basis of KG .
multiplication. That is, we shall associate with each ele-
                                                                 When we say that the basis of characters is orthonor-
ment g the permutation of G that takes each h in G to
                                                               mal we mean that the Hermitian inner product defined
gh. This action is obviously transitive. As an action on
                                                               by                         
a set it cannot be decomposed any further. But when
                                                                          χ, ψ = |G|−1      χ(g)ψ(g)
we linearize this action to a representation of G on the                                    g∈G

424                                                                                               IV. Branches of Mathematics

is 1 when χ = ψ and 0 otherwise. The fact that it                       character values are. We know how many representa-
is a basis implies in particular that there are exactly                 tions there are, but not what they are, or even what
as many irreducible representations as there are con-                   their dimensions are. We do not have a general method
jugacy classes in G, and the map from isomorphism                       for constructing them, a kind of “non-Abelian Fourier
classes of representations to KG that sends each ρ to                   transform.” This is the central problem of representa-
its character is an injection. That is, an arbitrary rep-               tion theory.
resentation is determined up to isomorphism by its                         Let us see how this problem can be solved for the
character.                                                              group D8 . Over the course of this article, we have
   The internal structure of a group G that controls how                already encountered three irreducible representations
it can act on vector spaces is the structure of conju-                  of this group. The first is the “trivial” one-dimensional
gacy classes of elements of G. This is a much gentler                   representation: the homomorphism ρ : D8 → GL1 that
structure than the set of all conjugacy classes of sub-                 takes every element of D8 to the identity. The second is
groups of G. For example, in the symmetric group Sn                     the two-dimensional representation we wrote down in
two permutations belong to the same conjugacy class                     the first section, where each element of D8 acts on R2
if and only if they have the same cycle type. Therefore,                in the obvious way. The determinant of this re pre sen-
in that group there is a bijection between conjugacy                    tation is a one-dimensional representation that is not
classes and partitions of n.5                                           trivial: it sends the rotations to 1 and the reflections to
   Further more, where as it is completely unclear how to                 −1. So we have constructed three rows of the character
count subgroups, conjugacy classes are much easier to                   table above. There are five conjugacy classes in D8 (triv-
handle. For instance, since they partition the group, we                ial, reflection through axis, reflection through diagonal,
                         
have the formula |G| = C a conjugacy class |C|. On the rep-             90◦ rotation, 180◦ rotation), so we know that there are
resentation side, there is a similar formula, which arises              just two more rows.
from the decomposition of the regular representation
                                                                          The equality |G| = 8 = 22 + 1 + 1 + (dim V4 )2 +
L2 (G) into irreducibles: |G| = V irreducible (dim V )2 . It            (dim V5 )2 implies that these missing representations
is inconceivable that there might be a similarly simple                 are one dimensional. One way of getting the missing
formula for sums over all subgroups of a group.                         character values is to use orthogonality of characters.
   We have reduced the problem of understanding the                        A slightly (but only slightly) less ad hoc way is to
general structure of the representations of a finite                     decompose L2 (X) for small X. For example when X is
group G to the problem of determining the character                     the pair of diagonals {AC, BD}, we have L2 (X) = V4 ⊕ C,
table of G. When G = Z/n Z, our description of the n                     where C is the trivial representation.
irreducible representations above implies that all the                     We are now going to start pointing the way toward
entries of this matrix are roots of unity. Here are the                 some more modern topics in representation theory. Of
character tables for D8 (on the left), the group of sym-                necessity, we will use language from fairly advanced
me tries of the square, and, just for contrast, for the                  mathematics: the reader who is familiar with only some
group Z/3 Z (on the right):                                              of this language should consider browsing the remain-
 1      1      1       1      1                1     1      1           ing sections, since different discussions have different
 1      1      1      −1     −1                1     z      z2          prerequisites.
 1      1     −1       1     −1                1     z2     z              In general, a good, but not systematic, way of find-
 1      1     −1      −1      1                                         ing representations is to find objects on which G acts,
 2     −2      0       0      0                                         and “linearize” the action. We have seen one exam-
                                                                        ple of this: when G acts on a set X we can consider
where z = exp(2π i/3).
                                                                        the linearized action on L2 (X). Recall that the irre-
  The obvious question—Where did the first table come
                                                                        duc i ble G-sets are all of the form G/H, for H some sub-
from?—indicates the main problem with the theorem:
                                                                        group of G. As well as looking at L2 (G/H), we can con-
though it tells us the shape of the character table, it
                                                                        sider, for every representation W of H, the vector space
leaves us no closer to understanding what the actual
                                                                        L2 (G/H, W ) = {f : G → W | f (gh) = h−1 f (g), g ∈
                                                                        G, h ∈ H}; in geometric language, for those who pre-
  5. Not only is the set of all partitions a sensible combinatorial     fer it, this is the space of sections of the associated
object, it is far smaller than the set of all subgroups of Sn : hardy
[VI.73](/part-06/godfrey-harold-hardy-18771947) and ramanujan
                                                                        W -bundle on G/H. This representation of G is called
                     √ [VI.82](/part-06/srinivasa-ramanujan-18871920)
                            √    showed that the number of partitions
of n is about (1/4 n 3)eπ (2 n/3) .                                       the induced representation of W from H to G.

IV.9.   Representation Theory                                                                                                     425

   Other linearizations are also important. For example,                    The prototypical example is the space L2 (S 1 ) of
if G acts continuously on a topological space X, we can                  square-integrable functions on the circle S 1 . We can
consider how it acts on homology classes and hence                       think of the circle as the unit circle in C, and there by
on the homology groups [IV.6 §4](/part-04/algebraic-topology) of X.6 The simplest                     identify it with the group of rotations of the circle
case of this is the map z → . ar{z} of the circle S 1 . Since                 (since multiplication by eiθ rotates the circle by θ). This
this map squares to the identity map, it gives us an                     action linearizes to an action on L2 (S 1 ): if f is a square-
action of Z/2 Z on S 1 , which becomes a representation                   integrable function defined on S 1 and w belongs to the
of Z/2 Z on H1 (S 1 ) = R (which represents the identity                  circle, then (w · f )(z) is defined to be f (w −1 z). That
as multiplication by 1 and the other element of Z/2 Z as                  is, w · f does to wz what f does to z.
multiplication by −1).                                                      Classical Fourier analysis expands functions in the
   Methods like these have been used to determine the                    space L2 (S 1 ) in terms of a basis of trigonometric func-
character tables of all finite simple groups [I.3 §3.3](/part-01/fundamental-definitions),                  tions: the functions zn for n ∈ Z. (These look more
but they still fall short of a uniform description valid                 “trigonometric” if one writes eiθ for z and einθ for zn .)
for all groups.                                                          If we fix w and write φn (z) = zn , then (w · φn )(z) =
   There are many arithmetic properties of the charac-                   φn (w −1 z) = w −n φn (z). In particular, w · φn is a mul-
ter table that hint at properties of the desired non-
                                                                         tiple of φn for each w, so the one-dimensional sub-
Abelian Fourier transform. For example, the size of a
                                                                         space generated by φn is invariant under the action of
conjugacy class divides the order of the group, and
                                                                         S 1 . In fact, every irreducible representation of S 1 is of
in fact the dimension of a representation also divides
                                                                         this form, as long as we restrict attention to continuous
the order of the group. Pursuing this thought leads to
                                                                         representations.
an examination of the values of the characters mod p,
                                                                           Now let us consider an innocuous-looking general-
relating them to the so-called p-local subgroups. These
                                                                         ization of the above situation: we shall replace 1 by n
are groups of the form N(Q)/Q, where Q is a subgroup
                                                                         and try to understand L2 (S n ), the space of complex-
of G, the number of elements of Q is a power of p, and
                                                                         valued square-integrable functions on the n-sphere S n .
N(Q) is the normalizer of Q (defined to be the largest
                                                                         The n-sphere is acted on by the group of rotations
subgroup of G that contains Q as a normal subgroup).
                                                                         SO(n+1). As usual, this can be converted into a rep-
When the so-called “p-Sylow subgroup” of G is Abe-
lian, beautiful conjectures of Broué give us an essen-                   resentation of SO(n+1) on the space L2 (S n ), which
tially complete picture of the representations of G. But                 we would like to decompose into irreducible repre-
in general these questions are at the center of a great                  sentations; equivalently, we would like to decompose
deal of contemporary research.                                           L2 (S n ) into a direct sum of minimal SO(n+1)-invariant
                                                                         subspaces.
                    3    Fourier Analysis                                  This turns out to be possible, and the proof is very
                                                                         similar to the proof for finite groups. In particular, a
We have justified the study of group actions on vector
                                                                         compact group such as SO(n+1) has a natural proba-
spaces by explaining that the theory of representations
                                                                         bility measure [III.71 §2](/part-03/probability-distributions) on it (called Haar measure)
has a nice structure that is not present in the theory
                                                                         in terms of which we can define averages. Roughly
of group actions on sets. A more historically based
                                                                         speaking, the only difference between the proof for
account would start by saying that spaces of functions
                                                                         SO(n+1) and the proof in the finite case is that we
very often come with natural actions of some group
                                                                         have to replace a few sums by integrals.
G, and many problems of traditional interest can be
                                                                            The general result that one can prove by this method
related to the decomposition of these representations
                                                                         is the following. If G is a compact group that acts con-
of G.
                                                                         tinuous ly on a compact space X (in the sense that each
   In this section we will concentrate on the case where
                                                                         permutation φ(g) of X is continuous, and also that
G is a compact lie group [III.48 §1](/part-03/lie-theory). We will see that in
                                                                         φ(g) varies continuously with g), then L2 (X) splits
this case many of the nice features of the representa-
tion theory of finite groups persist.                                     up into an orthogonal direct sum of finite-dimensional
                                                                         minimal G-invariant subspaces; equivalently, the lin-
                                                                         earized action of G on L2 (X) splits up into an orthog-
  6. The homology groups discussed in the article just referred to
consist of formal sums of homology classes with integer coefficients.
                                                                         onal direct sum of irreducible representations, all of
Here, where a vector space is required, we are taking real coefficients.   which are finite dimensional. The problem of finding a

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
What happens when we take such a group but relax the requirement that it be compact? A paradigmatic noncompact group is the real numbers R . Like $S^{1}$ , R acts on itself in an obvious way (the real number t is associated with the translation s   $\to$ s  +  t), so let us linearize that action in the usual way and look for a decomposition of $L^{2}$ (R) into Rinvariant subspaces. In this situation we have a continuous family of irreducible one-dimensional representations: for each real number $\lambda$ we can define the function $χ\lambda$ by $χ\lambda(x) =e^{2}\pii\lambda x$ .
These functions are not square integrable, but despite this difficulty classical Fourier analysis tells us that we can write an $L^{2}$ - function in terms of them. However, since the Fourier modes now vary in a continuous family, we can no longer decompose a function as a sum: rather we must use an integral. First, we define the Fourier transform f ˆ of f by the formula f ˆ(. ambda) = f(x)e2. ii. ambda xdx. The desired decomposition of f is then  f(x) = fˆ(. ambda)e - 2. ii. ambda xd. ambda.
This, the Fourier in version formula, tells us that f is a weighted integral of the functions χ $\lambda$ . We can also think of it as something like a decomposition of $L^{2}$ (R) as a “direct integral” (rather than direct sum) of the one-dimensional subspaces generated by the functions χ $\lambda$ . However,

IV.9.   Representation Theory                                                                                         427

we must treat this picture with due caution since the           previous paragraph):
                                                                                  
functions χ. ambda do not belong to L2 (R).                                        0 −i
   This example indicates what we should expect in gen-                              · wm = mwm ,
                                                                             i   0
eral. If X is a space with a measure and G acts continu-                          
ously on it in a way that preserves the measures of sub-                    1    i
                                                                                     · wm = (m − s)wm+2 ,
sets of X (as translations did with subsets of R), then                     i −1
                                                                                  
the action of G on X gives rise to a measure \mu X defined                     1    −i
on the set of all irreducible representations, and L2 (X)                            · wm = (−m − s)wm−2 .
                                                                           −i −1
can be decomposed as the integral over all irreducible
                                                                It follows that if s is not an integer, then from any func-
representations with respect to this measure. A theo-
                                                                tion wm in Ws+ we can produce all the others using
rem that explicitly describes such a decomposition is
                                                                the action of SL2 (R). Therefore, SL2 (R) acts irreducibly
called a Plancherel theorem for X.                              on Ws+ . Similarly, it acts irreducibly on Ws− . We have
   For a more complicated but more typical example,             therefore encountered a significant difference between
let us look at the action of SL2 (R) (the group of real         this and the finite/compact case: when G is not com-
2 . imes 2 matrices with determinant 1) on R2 and see how            pact, irreducible representations of G can be infinite
to decompose L2 (R2 ). As we did when we looked at              dimensional.
functions defined on S 2 , we shall make use of a differ-            Looking more closely at the formulas for Ws when
ential operator. This involves the small technicality that      s ∈ Z, we see more disturbing differences. In order to
we should look at smooth functions, and we do not ask           understand these, let us distinguish carefully between
for them to be defined at the origin. The appropriate            representations that are reducible and representations
differential operator this time turns out to be the Euler        that are decomposable. The former are representations
vector field x(∂/∂x) + y(∂/∂y). It is not hard to check          that have nontrivial G-invariant subspaces, where as
that if f satisfies the condition f (tx, ty) = t s f (x, y)      the latter are representations where one can decom-
for every x, y, and t > 0, then f is an eigenfunction           pose the space on which G acts into a direct sum of
of this operator with eigenvalue s, and indeed all func-        G-invariant subspaces. Decomposable representations
tions in the eigenspace with this eigenvalue, which we          are obviously reducible. In the finite/compact case, we
shall denote by Ws , are of this form. We can also split        used an averaging process to show that reducible rep-
Ws up as Ws+ ⊕ Ws− , where Ws+ and Ws− consist of the           resentations are decomposable. Now we do not have
even and odd functions in Ws , respectively.                    a natural probability measure to use for the aver-
   The easiest way of analyzing the structure of Ws is to       aging, and it turns out that there can be reducible
compute the action of the lie algebra [III.48 §2](/part-03/lie-theory) sl2 .         representations that are not decomposable.
For those readers unfamiliar with Lie algebras, we will            Indeed, if s is a nonnegative integer, then the sub-
say only that the Lie algebra of a Lie group G keeps            spaces Ws+ and Ws− give us an example of this phe-
track of the action of elements of G that are “infinit es-        nomenon. They are indecomposable (in fact, this is true
imally close to the identity,” and that in this case the        even when s is a negative integer not equal to −1) but
Lie algebra sl2 can be identified with the space of 2 . imes 2        they contain an invariant subspace of dimension s + 1.
matrices of trace 0, with ( ac −a
                                b ) acting as the differential
                                                                Thus, we cannot write the representation as a direct
operator (−ax − by)(∂/∂x) + (−cx + ay)(∂/∂y).                   sum of irreducible representations. (One can do some-
   Every element of Ws is a function on R2 . If we restrict     thing a little bit weaker, however: if we quotient out
these functions to the unit circle, then we obtain a map        by the (s + 1)-dimensional subspace, then the quotient
from Ws to the space of smooth functions defined on              representation can be decomposed.)
S 1 , which turns out to be an isomorphism. We already             It is important to understand that in order to produce
know that this space has a basis of Fourier modes zm ,          these indecomposable but reducible representations
which we can now think of as (x + iy)m , defined when            we worked not in the space L2 (R2 ) but in the space of
x 2 + y 2 = 1. There is a unique extension of this from a       smooth functions on R2 with the origin removed. For
function defined on S 1 to a function in Ws , namely the         instance, the functions wm above are not square inte-
function wm (x, y) = (x + iy)m (x 2 + y 2 )(s−m)/2 . One        grable. If we look just at representations of G that act
can then check the following actions of simple matri-           on subspaces of L2 (X), then we can split them up into
ces on these functions (to do so, recall the association        a direct sum of irreducibles: given a G-invariant sub-
of the matrices with differential operators given in the         space, its orthogonal complement is also G-invariant.

428                                                                                                      IV. Branches of Mathematics

It might therefore seem best to ignore the other, rather                  condition is that they should be real and reductive—
subtle representations and just look at these ones. But                   a concept that will be explained later in this article)
it turns out to be easier to study all representations                    and the generalizations of classical theorems of Fourier
and only later ask which ones occur inside L2 (X). For                    analysis to this setting.9
SL2 (R), the representations we have just constructed                        Independently and slightly earlier, Brauer had inves-
(which were subquotients of Ws± ) exhaust all the irre-                   tigated the representation theory of finite groups on
duc i ble representations,7 and there is a Plancherel for-                  finite-dimensional vector spaces over fields of char-
mula for L2 (R2 ) that tells us which ones appear in                      acteristic p. Here, too, reducible representations need
L2 (R2 ) and with what multiplicity:                                      not decompose as direct sums, though in this case the
                                . nfty
                                                                          problem is not lack of compactness (obviously, since
                  L2 (R2 ) =         W−1+it eit dt.
                                −. nfty                                        everything is finite) but an in ability to average over the
  To summarize: if G is not compact, then we can no                       group: we would like to divide by |G|, but often this
longer take averages over G. This has various conse-                      is zero. A simple example that illustrates this is the
quences:                                                                  action of Z/p Z on the space F2 p that takes x to the 2 . imes 2
                                                                          matrix ( 11 x0 ). This is reducible, since the column vec-
Representations occur in continuous families. The
                                                                          tor ( 10 ) is fixed by the action, and therefore generates
  decomposition of L2 (X) takes the form of a direct
                                                                          an invariant subspace. However, if one could decom-
  integral, not a direct sum.
                                                                          pose the action, then the matrices ( 11 x0 ) would all be
Representations do not split up into a direct sum of
                                                                          diagonalizable, which they are not.
  irreducibles. Even when a representation admits a
                                                                             It is possible for there to be infinitely many indecom-
  finite composition series, as with the action of SL2 (R)
                                                                          pos able representations, which again may vary in fam-
  on Ws± , it need not split up into a direct sum. So
                                                                          ilies. However, as before, there are only finitely many
  to describe all representations we need to do more
                                                                          irreducible representations, so there is some chance of
  than just describe the irreducibles—we also need to
                                                                          a “character table is square” theorem in which the rows
  describe the glue that holds them together.
                                                                          of the square are parametrized by characters of irre-
   So far, the theory of representations of a noncom-                     duc i ble representations. Brauer proved just such a the-
pact group G seems to have none of the pleasant fea-                      orem, pairing the characters with p-semisimple conju-
tures of the compact case. But one thing does survive:                    gacy classes in G: that is, conjugacy classes of elements
there is still an analogue of the theorem that the char-                  whose order is not divisible by p.
acter table is square. Indeed, we can still define charac-                    We will draw two crude morals from the work of
ters in terms of the traces of group elements. But now                    Harish-Chandra and of Brauer. The first is that the cat-
we must be careful, since the irreducible representa-                     egory of representations of a group is always a reason-
tion may be on an infinite-dimensional vector space, so                    able object, but when the representations are infinite
that its trace cannot be defined so easily. In fact, char-                 dimensional it requires serious technical work to set it
acters are not functions on G, but only distributions                     up. Objects in this category do not necessarily decom-
[III.18](/part-03/distributions). The character of a representation determines                    pose as a direct sum of irreducibles (one says that the
the semisimplification of a representation ρ: that is, it                  category is not semisimple), and can occur in infinite
tells us which irreducible representations are part of ρ,                 families, but irreducible objects pair off in some precise
but not how they are glued together.8                                     way with certain “diagonalizable” conjugacy classes in
   These phenomena were discovered by Harish-Chan-                        the group—there is always some kind of analogue of
dra in the 1950 s in an extraordinary series of works that                 “the character table is square” theorem.
completely described the representation theory of Lie                        It turns out that when we consider representations
groups such as the ones we have discussed (the precise                    in more general contexts—Lie algebras acting on vec-
                                                                          tor spaces, quantum groups, p-adic groups on infinite-
  7. To make this precise requires some care about what we mean           dimensional complex or p-adic vector spaces, etc.—
by “isomorphic.” Because many different topological vector spaces
                                                                          these qualitative features stay the same.
can have the same underlying sl2 -module, the correct notion is of
infinitesimal equivalence. Pursuing this notion leads to the category of
Harish-Chandra modules, a category with good finiteness properties.
  8. It is a major theorem of Harish-Chandra that the distribution that     9. The problem of determining the irreducible unitary re pre sen-
defines a character is given by analytic functions on a dense subset of    tat i ons for real reductive groups has still not been solved; the most
the semisimple elements of the group.                                     complete results are due to Vogan.

IV.9.   Representation Theory                                                                                                   429

  The second moral is that we should always hope             of “twisted” form of complex conjugation, where we
for some “non-Abelian Fourier transform”: that is, a         send a matrix A to the complex conjugate of (A−1 )T .
set that parametrizes irreducible representations and a      The fixed points of this new involution (that is, the
description of the character values in terms of this set.    determinant-1 matrices A such that A equals the com-
  In the case of real reductive groups Harish-Chandra’s      plex conjugate of (A−1 )T ) form a group called SUn (R).
work provides such an answer, generalizing the Weyl          This is also called a real form of SLn (C),10 and it is
character formula for compact groups; for arbitrary          compact.
groups no such answer is known. For special classes             The groups SLn (Fq ) and SOn (Fq ) are almost simple
of groups, there are partially successful general princi-    groups;11 the classification of finite simple groups tells
ples (the orbit method, Broué’s conjecture), of which        us, mysteriously, that all but twenty-six of the finite
the deepest are the extraordinary circle of conjec-          simple groups are of this form. A much, much easier
tures known as the Langlands program, which we shall         theorem tells us that the connected compact groups are
discuss later.                                               also of this form.
                                                                Now, given an algebraic group G, we can also con-
   5    Interlude: The Philosophical Lessons of              sider the instances G(Qp ), where Qp is the field of
          “The Character Table Is Square”                    p-adic numbers, and also G(Q). For that matter, we may
                                                             consider G(k) for any other field k, such as the func-
Our basic theorem (“the character table is square”) tells    tion field of an algebraic variety [V.30](/part-05/the-resolution-of-singularities). The les-
us to expect that the category of all irreducible rep-       son of section 4 is that we may hope for all of these
resentations of G is interesting when the conjugacy-         many groups to have a good representation theory,
class structure of G is in some way under control. We        but that to obtain it there will be serious “analytic” or
will finish this essay by explaining a remarkable fam-        “arithmetic” difficulties to over come, which will depend
ily of examples of such groups—the rational points of        strongly on the properties of the field k.
reductive algebraic groups—and their conjectured rep-           Lest the reader adopt too optimistic a viewpoint, we
resentation theory, which is described by the Langlands      point out that not every affine algebraic group has a
program.                                                     nice conjugacy-class structure. For example, let Vn be
   An affine algebraic group is a subgroup of some             the set of upper triangular matrices in GLn with 1 s
group GLn that is defined by polynomial equations in          along the diagonal, and let k be Fq . For large n, the con-
the matrix coefficients. For example, the determinant          jugacy classes in Vn (Fq ) form large and complex fami-
of a matrix is a polynomial in the matrix coefficients,        lies: to parametrize them sensibly one needs more than
so the group SLn , which consists of all matrices in GLn     n parameters (in other words, they belong to families
with determinant 1, is such a group. Another is SOn ,        of dimension greater than n, in an appropriate sense),
which is the set of matrices with determinant 1 that         and it is not in fact known how to parametrize them
satisfy the equation AAT = I.                                even for a smallish value of n, such as 11. (It is not
   The above notation did not specify what sort of coef-     obvious that this is a “good” question though.)
ficients we were allowing for the matrices. That vague-          More generally, solvable groups tend to have horrible
ness was deliberate. Given an algebraic group G and          conjugacy-class structure, even when the groups them-
a field k, let us write G(k) for the group where the          selves are “sensible.” So we might expect their repre-
coefficients are taken to have values in k. For exam-          sentation theory to be similarly horrible. The best we
ple, SLn (Fq ) is the set of n . imes n matrices with coeffi-       can hope for is a result that describes the entries of
cients in the finite field Fq and determinant 1. This          the character table in terms of this horrible structure—
group is finite, as is SOn (Fq ), while SLn (R) and SOn (R)   some kind of non-Abelian Fourier integral. For certain
are Lie groups. More over, SOn (R) is compact, while          p-groups Kirillov found such a result in the 1960 s, as
SLn (R) is not. So among affine algebraic groups over
fields one already finds all three types of groups we             10. When we say that SLn (R) and SUn (R) are both “real forms” of
have discussed: finite groups, compact Lie groups, and        SLn (C), what is meant more precisely is that in both cases the group
                                                             can be described as a subgroup of some group of real matrices that
noncompact Lie groups.                                       consists of all solutions to a set of polynomial equations, and that
   We can think of SLn (R) as the set of matrices in         when the same set of equations is applied instead to the group of
                                                             complex matrices the result is isomorphic to SLn (C).
SLn (C) that are equal to their complex conjugates.             11. Which is to say that the quotient of these groups by their center
There is another involution on SLn (C) that is a sort        is simple.

430                                                                                                      IV. Branches of Mathematics

an example of the “orbit method,” but the general result                  for example, in GLn (k), semisimple classes are still
is not yet known.                                                         determined by their characteristic polynomial, but the
   On the other hand, groups that are similar to con-                     fact that this polynomial has coefficients in k con-
nected compact groups do have a nice conjugacy-class                      str a ins the possible conjugacy classes.
structure: in particular, finite simple groups do. An                        The point of describing the conjugacy-class structure
algebraic group is called reductive if G(C) has a com-                    in such detail is to describe the representation theory
pact real form. So, for instance, SLn is reductive by the                 in analogous terms. A crude feature of the conjugacy-
existence of the real form SUn (R). The groups GLn and                    class structure is the way it decouples the field k from
SOn are also reductive, but Vn is not.12                                  finite combinatorial data that is attached to G but inde-
   Let us examine the conjugacy classes in the group                      pendent of k—things like W , the lattice defining T ,
SUn . Every matrix in SUn (R) can be diagonalized, and                    roots, and weights.
two conjugate matrices have the same eigenvalues, up                        The “philosophy” suggested by the theorem that the
to reordering. Conversely, any two matrices in SUn (R)                    character table is square suggests that the re pre sen-
with the same eigenvalues are conjugate. Therefore, the                   tation theory should also admit such a decoupling: it
conjugacy classes are parametrized by the quotient of                     should be built out of the representation theory of
the subgroup of all diagonal matrices by the action of                    k∗ , which is the analogue of the circle, and out of
Sn that permutes the entries.                                             the combinatorial structure of G(. ar{k}) (such as the finite
   This example can be generalized. Any compact con-                      groups W ). More over, representations should have a
nected group has a maximal torus T , that is, a maximal                   “Jordan decomposition”:14 the “unipotent” re pre sen-
subgroup isomorphic to a product of circles. (In the pre-                 tat i ons should have some kind of combinatorial com-
vious example it was the subgroup of diagonal matri-                      plexity but little dependence on k, and compact groups
ces.) Any two maximal tori are conjugate in G, and any                    should have no unipotent representations.
conjugacy class in G intersects T in a unique W -orbit on                   The Langlands program provides a description along
T , where W is the Weyl group, the finite group N(T )/T                    the lines laid out above, but it goes beyond any of the
(where N(T ) is the normalizer of T ).                                    results we have suggested in that it also describes the
   The description of conjugacy classes in G(. ar{k}), for an
                                                                          entries of the character table. Thus, for this class of
algebraically closed field . ar{k}, is only a little more compli-
                                                                          examples, it gives us (conjecturally) the hoped-for “non-
cated. Any element g ∈ G(. ar{k}) admits a jordan decom-
                                                                          Abelian Fourier transform.”
position [III.43](/part-03/jordan-normal-form): it can be written as g = su = us,
where s is conjugate to an element of T (. ar{k}) and u is
                                                                                    6    Coda: The Langlands Program
unipotent when considered as an element of GLn (. ar{k}).
(A matrix A is unipotent if some power of A − I is                        And so we conclude by just hinting at statements.
zero.) Unipotent elements never intersect compact sub-                    If G(k) is a reductive group, we want to describe an
groups. When G = GL n this is the usual Jordan decom-                     appropriate category of representations for G(k), or at
position; conjugacy classes of unipotent elements are                     least the character table, which we may think of as a
parametrized by partitions of n, which, as we men-                        “semisimplification” of that category.
tioned in section 2, are precisely the conjugacy classes                     Even when k is finite, it is too much to hope that con-
of W = Sn . For general reductive groups, unipotent con-                  jugacy classes in G(k) parametrize irreducible repre-
jugacy classes are again almost the same thing as con-                    sentations. But something not so far off is conjectured,
jugacy classes in W .13 In particular, there are finitely                  as follows.
many, independent of . ar{k}.                                                     To a reductive group G over an algebraically closed
   Finally, when k is not algebraically closed, one de-
                                                                          field, Langlands attaches another reductive group LG,
scribes conjugacy classes by a kind of Galois descent;
                                                                          the Langlands dual, and conjectures that representa-
                                                                          tions of G(k) will be parametrized by conjugacy classes
  12. The miracle, not relevant for this discussion, is that compact
connected groups can be easily classified. Each one is essentially a
product of circles and non-Abelian simple compact groups. The latter
are parametrized by dynkin diagrams [III.48 §3](/part-03/lie-theory). They are SU n , Sp2 n ,     14. The first such theorems were proved for GLn (Fq ) by Green and
SOn , and five others, denoted E6 , E7 , E8 , F4 , and G2 . That is it!    Steinberg. However, the notion of Jordan decomposition for charac-
  13. They are different, but related. Precisely, they are given by com-   ters originates with Brauer, in his work on modular representation
binatorial data, Lusztig’s two-sided cells for the corresponding affine     theory. It is part of his modular analogue of the “character table is
Weyl group.                                                               square” theorem, which we mentioned in section 3.