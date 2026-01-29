# Mostow’s Strong Rigidity Theorem

V.23.   Mostow’s Strong Rigidity Theorem                                                                             711

integers q we can achieve an accuracy of 1/q2 using
a denominator of q.                                          V.23 Mostow’s Strong Rigidity
   A different argument shows that we cannot do sub-               Theorem
stantially better than this. Let p and q be any two posi-
                     √                                                David Fisher
tive integers. Since 2 is irrational, p 2 and 2 q2 are dis-
tinct positive integers, which implies that |p2 − 2 q2 | ⩾             1   What Are Rigidity Theorems?
                                          \sqrt{1}. On factorizing, we deduce that |p −q 2|(p +q 2) ⩾
1. We can now divide through by q2 and obtain the            A typical rigidity theorem is a statement that some class
                     √inequality |p/q − 2|(p/q + 2) ⩾ 1/q2 . We may                of objects is much smaller than one might expect. To
as well assume that p/q is less than 2, since other-         make this notion clear, let us look at some examples of
                                             √
wise it is not a good approximation to 2. But then           moduli spaces [IV.8](/part-04/moduli-spaces) that might lead us to expect that
         \sqrt{p}/q + 2 is less than 4, so the inequality implies that       spaces of a certain type would in general be large.
         √
|p/q − 2| ⩾ 1/4 q2 . Thus, with a denominator of q we
cannot achieve an accuracy better than 1/4 q2 .                              2   Some Moduli Spaces
   A generalization of this argument proves Liouville’s
                                                             A flat metric on an n-dimensional manifold [I.3 §6.9](/part-01/fundamental-definitions)
theorem: if x is an irrational root of a polynomial of
                                                             is a metric [III.56](/part-03/metric-spaces) that is locally isometric to the usual
degree d and p and q are integers, then |p/q − x| can-
                                                       √     metric on the Euclidean space Rn . In other words, every
not be substantially smaller than 1/qd . When x = 2
                                                             point x in the manifold is contained in a neighborhood
this reduces to what we have just shown, since then
                                                             Nx such that there is a distance-preserving bijection
x 2 − 2 = 0 and we can set d = 2. However, from
                                                             from Nx to a subset of Rn . For our first example, we
Liouville’s theorem we know many similar facts, such
                  \sqrt{3}                                         shall consider flat metrics on a torus. We shall consider
as that |p/q − 2| cannot be substantially smaller
           3.                                                just the two-dimensional torus, but the phenomena we
than 1/q
                                                             shall discuss occur in higher dimensions as well.
   Roth’s theorem, proved in 1955, is the astonishing
                                                                The simplest way of putting a flat metric on the two-
assertion that the power d that appears in Liouville’s
                                                             dimensional torus T2 is to view it as the quotient
theorem can be improved—almost as far as 2. To be
                                                             [I.3 §3.3](/part-01/fundamental-definitions) of R2 by a discrete subgroup, or lattice, that is
precise, given any irrational root x of any polynomial,
                                                             isomorphic to Z2 . In fact, it is not too hard to see that
and any number r > 2, there is a constant c > 0 with
                                                             every flat metric arises in essentially this way. How-
the property that |p/q − x| is always at least as big
                                                             ever, there is a choice involved: the choice of which lat-
as c/qr . (The proof gives no information whatsoever
                                                             tice to take. An obvious choice is Z2 itself. But one can
about c beyond the fact that it is positive. It is a major
                                                             also take any invertible linear transformation A, apply
open problem to understand something about how c
                                                             it to Z2 , and then define the torus as R2 /A(Z2 ), which
depends on r and x.)
                                                             gives rise to another metric. A natural question to ask
   To see why this is a much deeper result than Liou-
                                           \sqrt{3}                 is, when do two choices of A give rise to the same met-
ville’s theorem, consider the example of 2. Underlying
                        \sqrt{3}                                   ric? Usually, one studies only the cases when the deter-
the proof that |p/q − 2| is never much smaller than
                                                             minant [III.15](/part-03/determinants) of A is 1, since it is easy to deduce from
1/q3 is the simple fact that p3 and 2 q3 are distinct inte-
                                                             these what happens in general. The group of all such
gers and therefore differ by at least 1. In order to prove
                                                             linear maps is called SL2 (R).
a substantially better result such as Roth’s theorem,
                                                                If A is orthogonal, then it just rotates the lattice Z2
one must show much more: that p 3 and 2 q3 differ by
                                                             and therefore A(Z2 ) gives rise to the same metric as
an amount that grows as p and q grow. For example, if
                                                             Z2 . What is slightly less obvious is that there are other
one wishes to prove Roth’s theorem when r = 52 , it is
                                                             maps A that give rise to this metric as well, namely all
necessary to show that p 3 and 2 q3 must always differ
                                                √            maps of determinant 1 whose matrices with respect to
by an amount comparable to or greater than p, and it
                                                             the standard basis of R2 have integer entries. The group
is far from obvious why this should be so.
                                                             of all these maps is called SL2 (Z). If A belongs to SL2 (Z),
                                                             then the reason that A(Z2 ) gives rise to the same metric
The Mordell Conjecture
                                                             as Z2 is simple: A(Z2 ) is actually equal to Z2 .
   See rational points on curves and
                                                                Loosely speaking, what we have just done is iden-
       the mordell conjecture [V.29](/part-05/rational-points-on-curves-and-vi40-ernst-eduard-kummer-18101893)
                                                             tify the space of flat metrics on T2 with the set

$712SL^{2}(Z)SL^{2}(R)/$ SO (2). (This is notation for the set S$L^{2}$ (R), with two maps A and B considered equivalent if B can be expressed as A multiplied by a product of matrices from SO ( $2$ ) and S$L^{2}$ (Z) .) In higher dimensions, a similar discussion shows that one can identify the space of flat metrics on the n-dimensional torus T n with SL n (Z) SL n (R)  /  SO (n). Returning to two dimensions, a torus is a surface of genus $1$ (since it has one “ hole ”). A similar construction gives rise to a moduli space of metrics on a surface of higher genus, but now the metrics will be hyperbolic rather than flat. The uniformization theorem [V.34](/part-05/the-uniformization-theorem) says that any compact connected surface admits a metric of constant curvature [III.13](/part-03/curvature) : when the genus is $2$ or more, this curvature must be negative, which implies that the surface is a quotient [I.3](/part-01/fundamental-definitions) of the hyperbolic plane [I.3](/part-01/fundamental-definitions) H2$by$ a group Γ that acts on $H^{2}$ as a set of isometries. (See fuchsian groups [III.28](/part-03/fuchsian-groups).) Conversely, if we want to construct a metric of constant curvature on a surface of higher genus, we can take a subgroup Γ of the group of isometries of $H^{2}$ (which is isomorphic to S$L^{2}$ (R)) and we can consider the quotient $H^{2}/Γ$ , which is analogous to the quotient $R^{2}/Z^{2}$ that we considered earlier. If Γ has no elements of finite order and if for each x the orbit of x (the set of images of x under the isometries in Γ) is a discrete subset of $H^{2}$ , then this space is a manifold. Further more, if there is a compact region in $H^{2}$ , called a fundamental domain, whose translates cover $H^{2}$ , then the manifold is compact. There are two fairly simple ways to construct examples of groups Γ with these properties: one is to use reflection groups and the other is to use a bit of number theory. Now we can ask the same question for these metrics. In other words, given a surface S of genus at least $2$ , how many hyperbolic metrics can we find on S? The answer is quite similar to the answer for $T^{2}$ . For instance, if the genus is $2$ , then there is a connected sixdimensional space of such structures. This is a bit more difficult to see, as the space is not constructed in any simple way from a lie group [III.48](/part-03/lie-theory) (such as SL n (R)) and its subgroups. We will not describe this construction here but it can be found in Thurston ( 1997 ) or in moduli spaces [IV.8](/part-04/moduli-spaces).

$3$

Mostow’s Theorem

Thinking about the last two sets of examples leads to a natural question: what about compact three-dimensional hyperbolic manifolds? Or n-dimensional ones?

V. Theorems and Problems

To be clear, a compact n-dimensional hyperbolic manifold is the quotient of H n by a discrete group Γ of isometries of the hyperbolic n-space H n such that Γ has no elements of finite order and there is a compact fundamental domain for Γ . Given this description, the reader may wonder if there are any such groups Γ . Once again, there are two easy ways of constructing them, one using a bit of number theory and another using reflection groups. (However , slightly surprisingly, the method using reflection groups works only in fairly small dimensions .) The constructions are all a bit technical so we will not go through them here. There are also many other examples of compact hyperbolic manifolds, particularly in three dimensions, where “most” manifolds are hyperbolic by the geometrization theorem [IV.7](/part-04/dierential-topology). Here we shall concentrate less on the existence of hyperbolic manifolds and more on the question that has been our principal concern in this article: if X is a manifold that can be represented in the form H n / Γ , then how many ways are there of giving X this structure? This question is equivalent to asking how many injective homomorphisms there are from Γ to the group of all isometries of H n such that the image of Γ is discrete and cocompact. (A subset X of a group G is cocompact if there is a compact subset K of G such that $XK = G.$ For instance, $Z^{2}$ is $a$ cocompact subset of $R^{2}$ because $R^{2} = Z^{2} +$ [0 , 1 ]2 and the closed unit square [0 , 1 ]2 is compact .) As we have seen, when $n = 2$ there is a continuum of such homomorphisms, and the same is true in all dimensions if we replace H n by R n . So it is rather surprising that when $n \ge 3$ , the answer for $H^{n}$ is exactly $1$ . This is a special case of Mostow’s rigidity theorem. What does this result mean? Suppose we know that a manifold M is a quotient of H n by some discrete cocompact group of isometries. The topology of M completely determines the group Γ up to isomorphism: it is just the fundamental group [IV.6](/part-04/algebraic-topology) of M. The result we have just stated tells us that this purely topological information about the manifold M completely determines the geometry of H n $/$ Γ (that is, its structure as a metric space). More precisely, it says that any homeomorphism, or even homotopy equivalence, from M to another hyperbolic manifold N is homotopic to an isometry. In other words, any purely topological equivalence can be realized as a geometric equivalence. The full Mostow rigidity theorem concerns objects called compact locally symmetric manifolds. Given a manifold with a metric, we say that it is locally
