# Compactness and Compact if ic at i on

III.9.   Compactness and Compact if ic at i on                                                                           167

it is one of the basic theorems of algebraic topology        morphism as the basic one from which everything else
that a continuous map between two topological spaces         is built up, instead of the relation of set membership
(that takes marked point to marked point) gives rise to      that is used in set-theoretic foundations [IV.22 §4](/part-04/set-theory).
a homomorphism between their fundamental groups.
   Further more, there is a notion of morphism between        Class Field Theory
functors called a natural transformation, which is anal-        See from quadratic reciprocity to
ogous to the notion of homotopy between maps of                     class field theory [V.28](/part-05/from-quadratic-reciprocity-to-vi38-augustus-de-morgan-18061871)
topological spaces. Given continuous maps F , G : X →
Y , a homotopy from F to G gives us, for every point x in
X, a path in Y from F x to Gx; analogously, given func-
                                                             Cohomology
tors F , G : X −→ Y , a natural transformation from F to        See homology and cohomology [III.38](/part-03/homology-and-cohomology)
G gives us, for every point x in X, a morphism in Y from
F x to Gx. There is also a commuting condition that is
                                                             III.9 Compactness and
analogous to the fact that, in the case of homotopy, a
                                                                   Compact if ic at i on
path in X must have its image under F continuously
transformed to its image under G without passing over               Terence Tao
any “holes” in the space Y . This avoidance of holes is
                                                             In mathematics, it is well-known that the behavior of
expressed in the category case by the commutativity of
                                                             finite sets and the behavior of infinite sets can be rather
certain squares in the target category Y , which is known
                                                             different. For instance, each of the following statements
as the “naturality condition.”
                                                             is easily seen to be true whenever X is a finite set but
   One example of a natural transformation encodes
                                                             false whenever X is an infinite set.
the fact that every vector space is canonically isomor-
phic to its double dual; there is a functor from the         All functions are bounded. If f : X → R is a real-
category of vector spaces to itself that takes each vec-       valued function on X, then f must be bounded (i.e.,
tor space to its double dual, and there is an invertible       there exists a finite number M such that |f (x)| ⩽ M
natural transformation from this functor to the iden-          for all x ∈ X).
tity functor via the canonical isomorphisms. By con-         All functions attain a maximum. If f : X → R is a real-
trast, every finite-dimensional vector space is isomor-         valued function on X, then there must exist at least
phic to its dual, but not canonically so because the           one point x0 ∈ X such that f (x0 ) ⩾ f (x) for all
isomorphism involves an arbitrary choice of basis; if          x ∈ X.
we attempt to construct a natural transformation in          All sequences have constant subsequences. If x1 , x2 ,
this case, we find that the naturality condition fails.         x3 , · · · ∈ X is a sequence of points in X, then there
In the presence of natural transformations, categories         must exist a subsequence xn1 , xn2 , xn3 , . . . that is
actually form a 2-category, which is a two-dimensional         constant. In other words, xn1 = xn2 = · · · = c for
generalization of a category, with objects, morphisms,         some c ∈ X. (This fact is sometimes known as the
and morphisms between morphisms. These last are                infinite pigeonhole principle.)
thought of as two-dimensional morphisms; more gen-
erally an n-category has morphisms for each dimension           The first statement—that all functions on a finite set
up to n.                                                     are bounded—can be viewed as a very simple exam-
   Categories and the language of categories are used        ple of a local-to-global principle. The hypothesis is an
in a wide variety of other branches of mathematics.          assertion of “local” boundedness: it asserts that |f (x)|
Historically, the subject is closely associated with alge-   is bounded for each point x ∈ X separately, but with
braic topology; the notions were first introduced in          a bound that may depend on x. The conclusion is that
1945 by Eilenberg and Mac Lane. Applications followed        of “global” boundedness: that |f (x)| is bounded by a
in algebraic geometry, theoretical computer science,         single bound M for all x ∈ X.
theoretical physics, and logic. Category theory, with its       So far we have viewed the object X only as a set.
abstract nature and lack of dependency on other fields        However, in many areas of mathematics we like to
of mathematics, can be thought of as “foundational.” In      endow our objects with additional structures, such as a
fact, it has been proposed as an alternative candidate       topology [III.90](/part-03/topological-spaces), a metric [III.56](/part-03/metric-spaces), or a group struc-
for the foundations of mathematics, with the notion of       ture [I.3 §2.1](/part-01/fundamental-definitions). When we do this, it turns out that some

168                                                                                            III. Mathematical Concepts

objects exhibit properties similar to those of finite                  The above four assertions are closely related to each
sets (in particular, they enjoy local-to-global principles),       other. For instance, if you know that all sequences
even though as sets they are infinite. In the categories            in X contain convergent subsequences, then you can
of topological spaces and metric spaces, these “almost-            quickly deduce that all continuous functions have a
finite” objects are known as compact spaces. (Other cat-            maximum. This is done by first constructing a maximiz-
egories have “almost-finite” objects as well. For exam-             ing sequence—a sequence of points xn in X such that
ple, in the category of groups there is a notion of a              f (xn ) approaches the maximal value of f (or, more pre-
pro-finite group; for linear operators [III.50](/part-03/linear-operators-and-their-properties) between             cisely, its supremum)—and then investigating a conver-
normed spaces [III.62](/part-03/normed-spaces-and-banach-spaces) the analogous notion is that of             gent subsequence of that sequence. In fact, given some
a compact operator, which is “almost of finite rank”;               fairly mild assumptions on the space X (e.g., that X
and so forth.)                                                     is a metric space), one can deduce any of these four
  A good example of a compact set is the closed unit               statements from any of the others.
interval X = [0, 1]. This is an infinite set, so the previ-            To oversimplify a little, we say that a topological
ous three assertions are all false as stated for X. But if         space X is compact if one (and hence all) of the above
we modify them by inserting topological concepts such              four assertions holds for X. Because the four assertions
as continuity and convergence, then we can restore                 are not quite equivalent in general, the formal defini-
these assertions for [0, 1] as follows.                            tion of compactness uses only the fourth version: that
                                                                   every open cover has a finite subcover. There are other
All continuous functions are bounded. If f : X → R is              notions of compactness, such as sequential compact-
  a real-valued continuous function on X, then f must              ness, for example, which is based on the third version,
  be bounded. (This is again a type of local-to-global             but the distinctions between these notions are technical
  principle: if a function does not vary too much locally,         and we shall gloss over them here.
  then it does not vary too much globally.)                           Compactness is a powerful property of spaces, and it
All continuous functions attain a maximum. If f :                  is used in many ways in many different areas of math-
  X → R is a real-valued continuous function on X,                 ematics. One is via appeal to local-to-global principles:
  then there must exist at least one point x0 ∈ X such             one establishes local control on a function, or on some
  that f (x0 ) ⩾ f (x) for all x ∈ X.                              other quantity, and then uses compactness to boost
All sequences have convergent subsequences. If                     the local control to global control. Another is to locate
  x1 , x2 , x3 , · · · ∈ X is a sequence of points in X, then       maxima or minima of a function, which is particularly
  there must exist a subsequence xn1 , xn2 , xn3 , . . . that      useful in the calculus of variations [III.94](/part-03/variational-methods). A third
  converges to some limit c ∈ X. (This statement is                is to partially recover the notion of a limit when deal-
  known as the Bolzano–Weierstrass theorem.)                       ing with nonconvergent sequences, by accepting the
                                                                   need to pass to a subsequence of the original sequence.
To these assertions we can add a fourth (which, like the           (However, different subsequences may converge to dif-
others, has a rather trivial analogue for finite sets).             ferent limits; compactness guarantees the existence of
                                                                   a limit point, but not its uniqueness.) Compactness of
All open covers have finite subcovers. If V is a col-               one object also tends to beget compactness of other
  lection of open sets and the union of all these open             objects; for instance, the image of a compact set under
  sets contains X (in which case V is called an open               a continuous map is still compact, and the product
  cover of X), then there must exist a finite subcol-               of finitely many or even infinitely many compact sets
  lection Vn1 , Vn2 , . . . , Vnk of sets in V that still covers   continues to be compact. This last result is known as
  X.                                                               Tychonoff’s theorem.
                                                                      Of course, many spaces of interest are not compact.
   All four of these topological statements are false for          An obvious example is the real line R, which is not com-
sets such as the open unit interval (0, 1) or the real             pact, because it contains sequences such as 1, 2, 3, . . .
line R, as one can easily check by constructing simple             that are “trying to escape” the real line and that do not
counterexamples. The Heine–Borel theorem asserts that              leave behind any convergent subsequences. However,
when X is a subset of a Euclidean space Rn , the above             one can often recover compactness by adding a few
statements are all true when X is topologically closed             more points to the space: this process is known as com-
and bounded, and all false otherwise.                              pactification. For instance, one can compactify the real

