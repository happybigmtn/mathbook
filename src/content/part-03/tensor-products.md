# Tensor Products

III.90.    Topological Spaces

III.89
If U , V , and W are vector spaces [I.3 §2.3](/part-01/fundamental-definitions) over some
field, then a bilinear map from U . imes V to W is a map φ
obeying the rules

and

That is, it is linear in each variable separately.
   Many important maps, such as inner products
[III.37](/part-03/bayesian-analysis), are bilinear. The tensor product U ⊗ V of two
vector spaces U and V is a way of capturing the idea
of the “most general” bilinear map that we can define
on U . imes V . To get an idea of what this might mean,
let us try to imagine a “completely arbitrary” bilin-
ear map from U . imes V to a “completely arbitrary” vector
space W , and let us use the notation u ⊗ v instead of
φ(u, v). Now because our linear map is perfectly gen-
eral, all we know about it is what we can deduce from
the fact that it is bilinear. For example, we know that
u⊗v1 +u⊗v2 = u⊗(v1 +v2 ). This example might sug-
gest that all elements of U ⊗ V are of the form u ⊗ v,
but that is certainly not the case: for instance, in gen-
eral there is no way of simplifying an expression such
as u1 ⊗ v1 + u2 ⊗ v2 . (This reflects the fact that the set
of values taken by a bilinear map from U . imes V to W is
not in general a subspace of W .)
   Thus, a typical element of U ⊗ V is a linear combina-
tion of elements of the form u ⊗ v, with the rule that
different linear combinations give the same element of
U ⊗ V whenever they are forced to by the bilinearity
property: for instance, (u1 +2 u2 )⊗(v1 −v2 ) will always
be equal to

  A more formal way of expressing the above ideas is
to say that U ⊗ V has a universal property. (See geo-
metric and combinatorial group theory [IV.10](/part-04/geometric-and-combinatorial-group-theory) for
some other examples of universal properties. See also
categories [III.8](/part-03/categories).) The property in question is the fol-    where ε > 0 is some small positive constant. And we
lowing: given any bilinear map φ from U . imes V to a space
W , we can find a linear map α from U ⊗ V to W such
that φ(u, v) = α(u ⊗ v) for every u and v. That is,
every bilinear map φ defined on U . imes V is naturally asso-
ciated with a linear map defined on U ⊗ V . (This linear
map takes u ⊗ v to φ(u, v): the identifications made in
the definition of the tensor product ensure that we can

301
extend this to linear combinations of such elements in
Tensor Products
It is not hard to show that if U and V are finite dimen-
sional, with bases u1 , . . . , um and v1 , . . . , vn , then the
vectors ui ⊗ vj form a basis for U ⊗ V . Other important
properties of the tensor product are that it is commu-
φ(. ambda u + \mu u , v) = λφ(u, v) + μφ(u , v)
rally isomorphic to V ⊗ U and U ⊗ (V ⊗ W ) is naturally
isomorphic to (U ⊗ V ) ⊗ W .
We have been discussing tensor products of vector
φ(u, . ambda v + \mu v ) = λφ(u, v) + μφ(u, v ).
spaces, but the definition can easily be generalized to
any algebraic structure for which some notion of bilin-
earity makes sense, such as a module [III.81 §3](/part-03/rings-ideals-and-modules) or a
C ∗ -algebra [IV.15 §3](/part-04/operator-algebras). Some times the tensor product
of two structures is not what you would immediately
expect. For instance, let Zn be the set of integers mod n,
and consider both Zn and Q as modules over Z. Then
their tensor product is zero. This reflects the fact that
every bilinear map from Zn . imes Q must be the zero map.
Tensor products occur in many mathematical con-
texts. For a good example, see quantum groups
[III.75](/part-03/quantum-groups).
Transcendental Numbers
See irrational and transcendental
numbers [III.41](/part-03/irrational-and-transcendental-numbers)
III.90 Topological Spaces
Ben Green
A topological space is the most basic context in which
one can understand the notion of a continuous func-
tion [I.3 §5.2](/part-01/fundamental-definitions).
Let us recall a standard definition of what it means
for a function f : R → R to be continuous. Suppose
u1 ⊗ v1 + 2 u2 ⊗ v1 − u1 ⊗ v2 − 2 u2 ⊗ v2 .
that f (x ) is close to y whenever x is close to x. Of
course, to make this a mathematically rigorous notion
we have to be precise about the meaning of “close.” We
could say that f (x ) is close to y if |f (x ) − f (x)| < ε,
could deem x to be close to x whenever |x − x | < δ,
where δ is another positive constant.
We say that f is continuous at x if an appropriate δ
can be found, regard less of how small ε was chosen to
be (δ is allowed, of course, to depend on ε). And f is
said to be continuous if it is continuous at every point
x on the real line.