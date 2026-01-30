# Compactness and Compactification

III.9.   Compactness and Compactification

it is one of the basic theorems of algebraic topology
that a continuous map between two topological spaces
(that takes marked point to marked point) gives rise to
a homomorphism between their fundamental groups.
   Further more, there is a notion of morphism between
functors called a natural transformation, which is anal-
ogous to the notion of homotopy between maps of
topological spaces. Given continuous maps F , G : X →
Y , a homotopy from F to G gives us, for every point x in
X, a path in Y from F x to Gx; analogously, given func-
tors F , G : X −→ Y , a natural transformation from F to
G gives us, for every point x in X, a morphism in Y from
F x to Gx. There is also a commuting condition that is
analogous to the fact that, in the case of homotopy, a
path in X must have its image under F continuously
transformed to its image under G with out passing over
any “holes” in the space Y . This avoidance of holes is
expressed in the category case by the commutativity of
certain squares in the target category Y , which is known
as the “naturality condition.”
   One example of a natural transformation encodes
the fact that every vector space is canonically isomor-
phic to its double dual; there is a functor from the
category of vector spaces to itself that takes each vec-
tor space to its double dual, and there is an invertible
natural transformation from this functor to the iden-
tity functor via the canonical isomorphisms. By con-
trast, every finite-dimensional vector space is isomor-
phic to its dual, but not canonically so because the
isomorphism involves an arbitrary choice of basis; if
we attempt to construct a natural transformation in
this case, we find that the naturality condition fails.
In the presence of natural transformations, categories
actually form a 2-category, which is a two-dimensional
generalization of a category, with objects, morphisms,
and morphisms between morphisms. These last are
thought of as two-dimensional morphisms; more gen-
erally an n-category has morphisms for each dimension
up to n.
   Categories and the language of categories are used
in a wide variety of other branches of mathematics.
Historically, the subject is closely associated with alge-   is bounded for each point x ∈ X separately, but with
braic topology; the notions were first introduced in
1945 by Eilenberg and Mac Lane. Applications followed
in algebraic geometry, theoretical computer science,
theoretical physics, and logic. Category theory, with its
abstract nature and lack of dependency on other fields
of mathematics, can be thought of as “foundational.” In
fact, it has been proposed as an alternative candidate
for the foundations of mathematics, with the notion of

167
morphism as the basic one from which everything else
is built up, instead of the relation of set membership
that is used in set-theoretic foundations [IV.22 §4](/part-04/set-theory).
Class Field Theory
See from quadratic reciprocity to
class field theory [V.28](/part-05/from-quadratic-reciprocity-to-vi38-augustus-de-morgan-18061871)
Cohomology
See homology and cohomology [III.38](/part-03/homology-and-cohomology)
III.9 Compactness and
Compactification
Terence Tao
In mathematics, it is well-known that the behavior of
finite sets and the behavior of infinite sets can be rather
different. For instance, each of the following statements
is easily seen to be true whenever X is a finite set but
false whenever X is an infinite set.
All functions are bounded. If f : X → R is a real-
valued function on X, then f must be bounded (i.e.,
there exists a finite number M such that |f (x)| ⩽ M
for all x ∈ X).
All functions attain a maximum. If f : X → R is a real-
valued function on X, then there must exist at least
one point x0 ∈ X such that f (x0 ) ⩾ f (x) for all
x ∈ X.
All sequences have constant subsequences. If x1 , x2 ,
x3 , · · · ∈ X is a sequence of points in X, then there
must exist a subsequence xn1 , xn2 , xn3 , . . . that is
constant. In other words, xn1 = xn2 = · · · = c for
some c ∈ X. (This fact is some times known as the
infinite pigeonhole principle.)
The first statement—that all functions on a finite set
are bounded—can be viewed as a very simple exam-
ple of a local-to-global principle. The hypothesis is an
assertion of “local” boundedness: it asserts that |f (x)|
a bound that may depend on x. The conclusion is that
of “global” boundedness: that |f (x)| is bounded by a
single bound M for all x ∈ X.
So far we have viewed the object X only as a set.
However, in many areas of mathematics we like to
endow our objects with additional structures, such as a
topology [III.90](/part-03/topological-spaces), a metric [III.56](/part-03/metric-spaces), or a group struc-
ture [I.3 §2.1](/part-01/fundamental-definitions). When we do this, it turns out that some

168

objects exhibit properties similar to those of finite
sets (in particular, they enjoy local-to-global principles),
even though as sets they are infinite. In the categories
of topological spaces and metric spaces, these “almost-
finite” objects are known as compact spaces. (Other cat-
egories have “almost-finite” objects as well. For exam-
ple, in the category of groups there is a notion of a
pro-finite group; for linear operators [III.50](/part-03/linear-operators-and-their-properties) between
normed spaces [III.62](/part-03/normed-spaces-and-banach-spaces) the analogous notion is that of
a compact operator, which is “almost of finite rank”;
and so forth.)
  A good example of a compact set is the closed unit
interval X = [0, 1]. This is an infinite set, so the previ-
ous three assertions are all false as stated for X. But if
we modify them by inserting topological concepts such
as continuity and convergence, then we can restore
these assertions for [0, 1] as follows.
All continuous functions are bounded. If f : X → R is
  a real-valued continuous function on X, then f must
  be bounded. (This is again a type of local-to-global
  principle: if a function does not vary too much locally,
  then it does not vary too much globally.)
All continuous functions attain a maximum. If f :
  X → R is a real-valued continuous function on X,
  then there must exist at least one point x0 ∈ X such
  that f (x0 ) ⩾ f (x) for all x ∈ X.
All sequences have convergent subsequences. If
  x1 , x2 , x3 , · · · ∈ X is a sequence of points in X, then
  there must exist a subsequence xn1 , xn2 , xn3 , . . . that
  converges to some limit c ∈ X. (This statement is
  known as the Bolzano–Weierstrass theorem.)
To these assertions we can add a fourth (which, like the
others, has a rather trivial analogue for finite sets).
All open covers have finite subcovers. If V is a col-
  lection of open sets and the union of all these open
  sets contains X (in which case V is called an open
  cover of X), then there must exist a finite subcol-
  lection Vn1 , Vn2 , . . . , Vnk of sets in V that still covers   continues to be compact. This last result is known as
  X.
   All four of these topological statements are false for
sets such as the open unit interval (0, 1) or the real
line R, as one can easily check by constructing simple
counterexamples. The Heine–Borel theorem asserts that
when X is a subset of a Euclidean space Rn , the above
statements are all true when X is topologically closed
and bounded, and all false otherwise.

III. Mathematical Concepts
The above four assertions are closely related to each
other. For instance, if you know that all sequences
in X contain convergent subsequences, then you can
quickly deduce that all continuous functions have a
maximum. This is done by first constructing a maxim iz-
ing sequence—a sequence of points xn in X such that
f (xn ) approaches the maximal value of f (or, more pre-
cisely, its supremum)—and then investigating a conver-
gent subsequence of that sequence. In fact, given some
fairly mild assumptions on the space X (e.g., that X
is a metric space), one can deduce any of these four
statements from any of the others.
To oversimplify a little, we say that a topological
space X is compact if one (and hence all) of the above
four assertions holds for X. Because the four assertions
are not quite equivalent in general, the formal defini-
tion of compactness uses only the fourth version: that
every open cover has a finite subcover. There are other
notions of compactness, such as sequential compact-
ness, for example, which is based on the third version,
but the distinctions between these notions are technical
and we shall gloss over them here.
Compactness is a powerful property of spaces, and it
is used in many ways in many different areas of math-
ematics. One is via appeal to local-to-global principles:
one establishes local control on a function, or on some
other quantity, and then uses compactness to boost
the local control to global control. Another is to locate
maxima or minima of a function, which is particularly
useful in the calculus of variations [III.94](/part-03/variational-methods). A third
is to partially recover the notion of a limit when deal-
ing with nonconvergent sequences, by accepting the
need to pass to a subsequence of the original sequence.
(However, different subsequences may converge to dif-
ferent limits; compactness guarantees the existence of
a limit point, but not its uniqueness.) Compactness of
one object also tends to beget compactness of other
objects; for instance, the image of a compact set under
a continuous map is still compact, and the product
of finitely many or even infinitely many compact sets
Tychonoff’s theorem.
Of course, many spaces of interest are not compact.
An obvious example is the real line R, which is not com-
pact, because it contains sequences such as 1, 2, 3, . . .
that are “trying to escape” the real line and that do not
leave behind any convergent subsequences. However,
one can often recover compactness by adding a few
more points to the space: this process is known as com-
pactification. For instance, one can compactify the real