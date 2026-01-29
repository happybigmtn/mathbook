# The Axiom of Choice

III . $1$

The Axiom of Choice

Consider the following problem: it is easy to find two irrational numbers $a$ and $b$ such that a  +  b is rational, or such that ab is rational (in both cases one could take √$a = 2$ and $b = - 2)$ , but is it possible for $a^{b}$ to be rational? Here is an elegant proof that the answer is yes. √${}^{2} = 2$ . If x is rational then we have our example. Let x . qrt{2} But $x^{2} = 2 = 2$ is rational, so if x is irrational then again we have an example. Now this argument certainly establishes that it is possible for $a$ and $b$ to be irrational and for a b to be rational.
However, the proof has a very interesting feature: it is nonconstructive, in the sense that it does not actually name two irrationals $a$ and $b$ that work. √ Instead, it tells us that √ either we can take $a = b = 2$ . qrt{2} or we can take $a = 2$ and $b = 2$ . Not only does it not tell us which of these alternatives will work, it gives us absolutely no clue about how to find out. Arguments of this kind have troubled some philosophers and philosophically inclined mathematicians, but as far as mainstream mathematics goes they are a fully accepted and important style of reasoning.
Formally, we have appealed to the “law of the excluded middle.” We have shown that the negation of the statement cannot be true, and deduced that the statement itself must be true. A typical reaction to the proof above is not that it is in any sense in valid, but merely that its nonconstructive nature is rather surprising. Nevertheless, faced with a nonconstructive proof, it is very natural to ask whether there is a constructive proof.
After all, an actual construction may give us more insight into the statement, which is an important point since we prove things not only to be sure they are true but also to gain an idea of why they are true. Of course, to ask whether there is a constructive proof is not to suggest that the nonconstructive proof is in valid, but just that it may be more informative to have a constructive proof.

Part III

Mathematical Concepts

The axiom of choice is one of several rules that we use for building sets out of other sets. Typical examples of such rules are the statement that for any set A we can form the set of all its subsets, and the statement that for any set A and any property p we can form the set of all elements of A that satisfy p (these are usually called the power-set axiom and the axiom of comprehension, respectively). Roughly speaking, the axiom of choice says that we are allowed to make an arbitrary number of unspecified choices when we wish to form a set.
Like the other axioms, the axiom of choice can seem so natural that one may not even notice that one is using it, and indeed it was applied by many mathematicians before it was first formalized. To get an idea of what it means, let us look at the well-known proof that the union of a countable family of countable sets [III.11](/part-03/countable-and-uncountable-sets) is countable. The fact that the family is countable allows us to write out the sets in a list $A^{1}$ , $A^{2}$ , $A^{3}$ , . . .
, and then the fact that each individual set A n is countable allows us to write its elements in a list $a^{n1}$ , $a^{n2}$ , $a^{n3}$ , . . . . We then finish the proof by finding some systematic way of counting through the elements a nm . Now in that proof we actually made an infinite number of unspecified choices. We were told that each A n was countable and then for each A n we “chose” a listing of the elements of A n with out specifying the choice we had made. More over, since we are told absolutely nothing about the sets A n , it is clearly impossible to say how we choose to list them.
This remark does not invalidate the proof, but it does show that it is nonconstructive. (Note , however, that if we are actually told what the sets A n are, then we may well be able to specify listings of their elements and there by give a constructive proof that the union of those particular sets is countable .) Here is another example. A graph [III.34] is bipartite if its vertices can be split into two classes X and Y in such a way that no two vertices in the same class

158                                                                                       III. Mathematical Concepts

are connected by an edge. For example, any even cycle         [V.3](/part-05/the-banachtarski-paradox). This says that there is a way of dividing up
(an even number of points arranged in a circle, with          a solid unit sphere into a finite number of subsets
consecutive points joined) is bipartite, while no odd         and then reassembling these subsets (using rotations,
cycle is. Now, is an infinite disjoint union of even cycles    reflections, and translations) to form two solid unit
bipartite? Of course it is: we just split each of the indi-   spheres. The proof does not provide an explicit way
vidual cycles C into two classes XC and YC and then           of defining the subsets.
let X be the union of the sets XC and Y be the union             It is some times claimed that the axiom of choice
of the sets YC . But how do we choose for each cycle          has “undesirable” or “highly counter intuitive” conse-
C which set to call XC and which to call YC ? Again,          quences, but in almost all cases a little thought reveals
we cannot actually specify how we do this, so we are          that the consequence under consideration is actual-
using the axiom of choice (even if we do not explicitly       ly not counter intuitive at all. For example, consider
say so).                                                      the Banach–Tarski paradox above. Why does it seem
   In general, the axiom of choice states that if we are      strange and paradoxical? It is because we feel that vol-
given a family of nonempty sets Xi , then we may select       ume has not been preserved. And indeed, this feeling
an element xi from each one. More precisely, it states        can be converted into a rigorous argument that the sub-
that if the Xi are nonempty sets, where i ranges over         sets used in the decomposition cannot all be sets to
some index set I, then there is a function f defined on I      which one can meaningfully assign a volume. But that
such that f (i) ∈ Xi for all i. Such a function f is called   is not a paradox at all: we can say what we mean by the
a choice function for the family.                             volume of a nice set such as a polyhedron, but there is
   For one set we do not need any separate rule to do         no reason to suppose that we can give a sensible defini-
this: indeed, the statement that a set X1 is nonempty is      tion of volume for all subsets of the sphere. (The sub-
exactly the statement that there exists x1 ∈ X1 . (More       ject called measure theory can be used to give a volume
formally, we might say that the function f that takes 1       to a very wide class of sets, called the measurable sets
to x1 is a choice function for the “family” that consists     [III.55](/part-03/measures), but there is no reason at all to believe that all
of the single set X1 .) For two sets, and indeed for any      sets should be measurable, and indeed it can be shown,
finite collection of sets, one can prove the existence of      again by a use of the axiom of choice, that there are sets
a choice function by induction on the number of sets.         that are not measurable.)
But for infinitely many sets it turns out that one can-           There are two forms of the axiom of choice that
not deduce the existence of a choice function from the        are more often used in daily mathematical life than
other rules for building sets.                                the basic form we have been discussing. One is the
   Why do people make a fuss about the axiom of               well-ordering principle, which states that every set can
choice? The main reason is that if it is used in a proof,     be well-ordered [III.66](/part-03/ordinals). The other is Zorn’s lemma,
then that part of the proof is automatically noncon-          which states that under certain circumstances “maxi-
struc tive. This is reflected in the very statement of the      mal” elements exist. For example, a basis for a vector
axiom. For the other rules that we use, such as “one          space is precisely a maximal linearly independent set,
may take the union of two sets,” the set whose exis-          and it turns out that Zorn’s lemma applies to the col-
tence is being asserted is uniquely defined by its prop-       lection of linearly independent sets in a vector space,
erties (u is an element of X ∪ Y if and only if it is an      which shows that every vector space has a basis.
element of X or of Y or of both). But this is not the case       These two statements are called forms of the axiom
with the axiom of choice: the object whose existence is       of choice because they are equivalent to it, in the sense
asserted (a choice function) is not uniquely specified by      that each one both implies the axiom of choice and may
its properties, and there will typically be many choice       be deduced from it, in the presence of the other rules
functions.                                                    for building sets. A good way of seeing why these two
   For this reason, the general view in mainstream math-      other forms of the axiom have a nonconstructive feel
ematics is that, although there is nothing wrong with         to them is to spend a few minutes trying to find a well-
using the axiom of choice, it is a good idea to signal        ordering of the reals, or a basis for the vector space of
that one has used it, to draw attention to the fact that      all sequences of real numbers.
one’s proof is not constructive.                                 For more about the axiom of choice, and especially
   An example of a statement whose proof involves             about its relationship to the other axioms of formal set
the axiom of choice is the banach–tarski paradox              theory, see set theory [IV.22](/part-04/set-theory).