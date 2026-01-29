# Tensor Products

III.90.    Topological Spaces                                                                                            301

                                                             extend this to linear combinations of such elements in
III.89      Tensor Products                                  a consistent way.)
                                                               It is not hard to show that if U and V are finite dimen-
If U , V , and W are vector spaces [I.3 §2.3](/part-01/fundamental-definitions) over some      sional, with bases u1 , . . . , um and v1 , . . . , vn , then the
field, then a bilinear map from U \times V to W is a map φ         vectors ui ⊗ vj form a basis for U ⊗ V . Other important
obeying the rules                                            properties of the tensor product are that it is commu-
          φ(\lambda u + \mu u , v) = λφ(u, v) + μφ(u , v)              tative and associative, in the sense that U ⊗ V is natu-
                                                             rally isomorphic to V ⊗ U and U ⊗ (V ⊗ W ) is naturally
and                                                          isomorphic to (U ⊗ V ) ⊗ W .
                                                               We have been discussing tensor products of vector
          φ(u, \lambda v + \mu v ) = λφ(u, v) + μφ(u, v ).
                                                             spaces, but the definition can easily be generalized to
That is, it is linear in each variable separately.           any algebraic structure for which some notion of bilin-
   Many important maps, such as inner products               earity makes sense, such as a module [III.81 §3](/part-03/rings-ideals-and-modules) or a
[III.37](/part-03/bayesian-analysis), are bilinear. The tensor product U ⊗ V of two      C ∗ -algebra [IV.15 §3](/part-04/operator-algebras). Sometimes the tensor product
vector spaces U and V is a way of capturing the idea         of two structures is not what you would immediately
of the “most general” bilinear map that we can define         expect. For instance, let Zn be the set of integers mod n,
on U \times V . To get an idea of what this might mean,           and consider both Zn and Q as modules over Z. Then
let us try to imagine a “completely arbitrary” bilin-        their tensor product is zero. This reflects the fact that
ear map from U \times V to a “completely arbitrary” vector        every bilinear map from Zn \times Q must be the zero map.
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
of values taken by a bilinear map from U \times V to W is
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
lowing: given any bilinear map φ from U \times V to a space       could deem x to be close to x whenever |x − x | < δ,
W , we can find a linear map α from U ⊗ V to W such           where δ is another positive constant.
that φ(u, v) = α(u ⊗ v) for every u and v. That is,            We say that f is continuous at x if an appropriate δ
every bilinear map φ defined on U \times V is naturally asso-       can be found, regard less of how small ε was chosen to
ciated with a linear map defined on U ⊗ V . (This linear      be (δ is allowed, of course, to depend on ε). And f is
map takes u ⊗ v to φ(u, v): the identifications made in       said to be continuous if it is continuous at every point
the definition of the tensor product ensure that we can       x on the real line.

