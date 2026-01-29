# Topological Spaces

III.90.    Topological Spaces                                                                                            301

                                                             extend this to linear combinations of such elements in
III.89      Tensor Products                                  a consistent way.)
                                                               It is not hard to show that if U and V are finite dimen-
If U , V , and W are vector spaces [I.3 §2.3](/part-01/fundamental-definitions) over some      sional, with bases u1 , . . . , um and v1 , . . . , vn , then the
field, then a bilinear map from U . imes V to W is a map φ         vectors ui ⊗ vj form a basis for U ⊗ V . Other important
obeying the rules                                            properties of the tensor product are that it is commu-
          φ(. ambda u + \mu u , v) = λφ(u, v) + μφ(u , v)              tative and associative, in the sense that U ⊗ V is natu-
                                                             rally isomorphic to V ⊗ U and U ⊗ (V ⊗ W ) is naturally
and                                                          isomorphic to (U ⊗ V ) ⊗ W .
                                                               We have been discussing tensor products of vector
          φ(u, . ambda v + \mu v ) = λφ(u, v) + μφ(u, v ).
                                                             spaces, but the definition can easily be generalized to
That is, it is linear in each variable separately.           any algebraic structure for which some notion of bilin-
   Many important maps, such as inner products               earity makes sense, such as a module [III.81 §3](/part-03/rings-ideals-and-modules) or a
[III.37](/part-03/bayesian-analysis), are bilinear. The tensor product U ⊗ V of two      C ∗ -algebra [IV.15 §3](/part-04/operator-algebras). Some times the tensor product
vector spaces U and V is a way of capturing the idea         of two structures is not what you would immediately
of the “most general” bilinear map that we can define         expect. For instance, let Zn be the set of integers mod n,
on U . imes V . To get an idea of what this might mean,           and consider both Zn and Q as modules over Z. Then
let us try to imagine a “completely arbitrary” bilin-        their tensor product is zero. This reflects the fact that
ear map from U . imes V to a “completely arbitrary” vector        every bilinear map from Zn . imes Q must be the zero map.
space W , and let us use the notation u ⊗ v instead of
                                                                Tensor products occur in many mathematical con-
φ(u, v). Now because our linear map is perfectly gen-
                                                             texts. For a good example, see quantum groups
eral, all we know about it is what we can deduce from
                                                             [III.75](/part-03/quantum-groups).
the fact that it is bilinear. For example, we know that
u⊗v1 +u⊗v2 = u⊗(v1 +v2 ). This example might sug-
                                                             Transcendental Numbers
gest that all elements of U ⊗ V are of the form u ⊗ v,
but that is certainly not the case: for instance, in gen-
                                                                See irrational and transcendental
eral there is no way of simplifying an expression such              numbers [III.41](/part-03/irrational-and-transcendental-numbers)
as u1 ⊗ v1 + u2 ⊗ v2 . (This reflects the fact that the set
of values taken by a bilinear map from U . imes V to W is
                                                             III.90 Topological Spaces
not in general a subspace of W .)
                                                                       Ben Green
   Thus, a typical element of U ⊗ V is a linear combina-
tion of elements of the form u ⊗ v, with the rule that
                                                             A topological space is the most basic context in which
different linear combinations give the same element of
                                                             one can understand the notion of a continuous func-
U ⊗ V whenever they are forced to by the bilinearity
                                                             tion [I.3 §5.2](/part-01/fundamental-definitions).
property: for instance, (u1 +2 u2 )⊗(v1 −v2 ) will always
                                                               Let us recall a standard definition of what it means
be equal to
                                                             for a function f : R → R to be continuous. Suppose
          u1 ⊗ v1 + 2 u2 ⊗ v1 − u1 ⊗ v2 − 2 u2 ⊗ v2 .          that f (x) = y. Then f is continuous at x provided
  A more formal way of expressing the above ideas is         that f (x ) is close to y whenever x is close to x. Of
to say that U ⊗ V has a universal property. (See geo-        course, to make this a mathematically rigorous notion
metric and combinatorial group theory [IV.10](/part-04/geometric-and-combinatorial-group-theory) for            we have to be precise about the meaning of “close.” We
some other examples of universal properties. See also        could say that f (x ) is close to y if |f (x ) − f (x)| < ε,
categories [III.8](/part-03/categories).) The property in question is the fol-    where ε > 0 is some small positive constant. And we
lowing: given any bilinear map φ from U . imes V to a space       could deem x to be close to x whenever |x − x | < δ,
W , we can find a linear map α from U ⊗ V to W such           where δ is another positive constant.
that φ(u, v) = α(u ⊗ v) for every u and v. That is,            We say that f is continuous at x if an appropriate δ
every bilinear map φ defined on U . imes V is naturally asso-       can be found, regard less of how small ε was chosen to
ciated with a linear map defined on U ⊗ V . (This linear      be (δ is allowed, of course, to depend on ε). And f is
map takes u ⊗ v to φ(u, v): the identifications made in       said to be continuous if it is continuous at every point
the definition of the tensor product ensure that we can       x on the real line.

$302$

How might we generalize this notion, replacing R by an arbitrary set X? Our existing definition makes sense only if we can decide when two points x, x $\in$ X are close. For a general set, which might not be nicely embedded in Euclidean space, this is impossible with out the addition of further structure. (When such structure is added one has the notion of a metric space [III.56](/part-03/metric-spaces) : metric spaces are less general than topological spaces .) If the notion of closeness is unavailable, how should one define continuity? The answer may be found in the notion of an open set.
A set U ⊂ R is said to be open if for any point x in U there is an interval (a , b) that contains x (that is, a $<$ x $<$ b) and is contained in U. It is an amusing exercise to check that if f : R $\to$ R is continuous, and if U is open, then f $- 1$ (U) is open. Conversely, if f $- 1$ (U) is open for every open set U, then f is continuous. Thus, at least for functions from R to R , one may characterize continuity purely in terms of open sets. The notion of closeness is used only when it comes to defining what an open set is. We now turn to the formal definition.
A topological space is a set X together with a collection U of subsets of X (called the “open sets ”) satisfying the following axioms.

• The empty set ∅ and the set X are both open.

• U is closed under taking arbitrary unions (so if is a collection of open sets, then so is (U) " $\text{i i}\inI$ i $\in$ I U i).

• U is closed under taking finite intersections (so if $U^{1}$ , . . . , U k are open sets, then so is $U^{1}$ ∩ · · · ∩ U k). The collection U is called a topology on X. It is easy to verify that the usual open subsets of R satisfy the above axioms: thus, R forms a topological space with these sets. A subset of a topological space is called closed if and only if its complement is open. Note that “closed” does not mean “not open”: for example, in the space R , the half-open interval [0 , 1) is neither open nor closed, and the empty set is both open and closed.
Note that we do not demand many properties from our open sets: this makes the notion of topological space a rather general one. Indeed, under many circumstances the concept is a little too general: then it can be convenient to assume that a topological space has further properties. For instance, a topological space X is called Hausdorff if, for any two distinct points $x^{1}$ and $x^{2}$ in  X, there are disjoint open sets $U^{1}$ and $U^{2}$ that

III. Mathematical Concepts

contain $x^{1}$ and $x^{2}$ , respectively. Hausdorff topological spaces (of which R is an obvious example) have many useful properties that general topological spaces do not necessarily have. We saw earlier that for functions from R to R the notion of continuity could be formulated entirely in terms of open sets. This means that we can define continuity for functions between topological spaces: if X and Y are two topological spaces and if f : X $\to$ Y is a function between them, then we simply define f to be continuous if f $- 1$ (U) is open for every open set U ⊂ Y .
Remarkably, we have found a useful definition of continuity that does not rely on a notion of distance. A continuous map that has a continuous inverse is known as a homeomorphism. If there is a homeomorphism between two spaces X and Y , then they are regarded as equivalent from the point of view of topology. In topology texts one will often see it said that a topologist is unable to distinguish between a doughnut and a teacup because each can be continuously deformed into the other (imagine that they are both made of modeling clay).
If X is a topological space, then a very useful way of describing the topology on X is by giving a basis for it. This is a subcollection B ⊆ U with the property that every open set (that is, every element of U) is a union of open sets in B. A basis for R with the usual topology is the collection of open intervals { (a , b) : a $<$ b}, and a basis for $R^{2}$ is the collection of open balls: that is, sets of the form {B $δ(x) =$ {y : $|x - y| <$ δ}}. Let us give some examples. The discrete topology. Let X be any set whatsoever, and take U to be the collection of all subsets of X.
It is a simple matter to check that the axioms for a topological space are satisfied. Euclidean spaces. Let $X = R$ d , and let U contain all sets that are open in the Euclidean metric. That is, U ⊆ X is open if, for every $u\inU,$ there is $δ > 0$ such that B δ (u) is contained in U. It is only slightly more taxing to check that the axioms are satisfied in this case. More generally, for any metric space the open sets can be defined in a similar way and they form a topological space. Subspace topology. If X is a topological space and if S ⊆ X, then we may make S a topological space.
We declare the open sets in S to be all sets of the form S ∩ U, where U $\in$ U is an open set in X.