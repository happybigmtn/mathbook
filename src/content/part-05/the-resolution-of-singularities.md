# The Resolution of Singularities

722

this way, take the elliptic curve y 2 = x 3 − 5 x and let    now than Mordell’s conjecture seemed before Faltings
P be the point (−1, 2) (which lies on the curve since
22 = (−1)3 −5(−1)). If you calculate 5 P using the group
law, then you obtain the point (−5 248 681/4 020 025,
16 718 705 378/8 060 150 125). In general, the number
of digits needed to express the point n P grows expo-
nent i ally with n.
   In the early twentieth century, poincaré [VI.61](/part-06/jules-henri-poincar-18541912) con-    obtain the two-dimensional surface t 5 + u5 + v 5 = 1.
jectured that the subgroup of rational points on an
elliptic curve was finitely generated. This conjecture
was proved by Louis Mordell in 1922. Thus, although
a curve of genus 1 may have infinitely many rational
points, there is a finite set of these points that can be    as an analogue of the notion of a curve of genus at
used to build up all the others: this is the sense in
which the structure of the set of rational solutions is     finitely many rational points, but a higher-dimensional
restricted.
   Mordell conjectured that a curve of genus at least
2 could contain only finitely many points. This was a
remarkable conjecture: if true, it would apply to an
extremely wide class of Diophantine equations, prov-
ing that all of them had at most finitely many solutions     indeed, it is not even universally believed.
(up to a multiple). Just one of its many implications was
that for each n ⩾ 3 the Fermat equation x n + y n = zn
had at most finitely many solutions with x, y, and z
coprime. However, it is one thing to make a very gen-
eral conjecture and quite another to prove it, and for
a long time the consensus was that the Mordell con-
jecture, like many other conjectures in number theory,
was way beyond what any body could prove. It therefore
came as a big surprise when Gerd Faltings proved the
conjecture in 1983.
   As a result of Faltings’s proof, our knowledge about     notion of equivalence is useful if properties that we are
Diophantine equations took a huge leap forward. The
theorem has subsequently been given a variety of dif-
ferent proofs, some of them simpler than that of Falt-
ings. However, remarkable as these proofs are, they
do have some limitations. One is that they are inef-
fec tive. That is, even though Faltings’s theorem tells
us that certain curves have finitely many rational
points, no known proof gives any bound on the sizes
of the numerators and denominators of the coordin-
ates of those points, so we do not have any way of
knowing whether we have found all of them. This
aspect of the theorem is common in number theory:
another example of a famous theorem that is ineffec-
tive is roth’s theorem [V.22](/part-05/liouvilles-theorem-and-roths-theorem). To find effective ver-
sions of these theorems would be a further remark-
able breakthrough. (Variants of the abc conjecture
[V.1](/part-05/the-abc-conjecture) would imply effective versions of these results,
but the ABC conjecture seems even further out of reach

V. Theorems and Problems
proved it.)
At the beginning of this article, we simplified the
equation x 3 + y 3 = z 3 so that we were looking at a
curve rather than a surface. But we obviously cannot
always do that. For instance, if we apply the same pro-
cedure to the equation x 5 + y 5 + z5 = w 5 , then we
Our knowledge about rational points on varieties (that
is, sets defined by polynomial equations) of dimension
greater than 1 is very limited. However, there is at least
a definition of a “variety of general type” that serves
least 2. One cannot expect such a variety to contain only
analogue of the Mordell conjecture, due to Serge Lang,
asserts that the rational points on a variety X of general
type must all be contained in a union of finitely many
lower-dimensional subvarieties of X. This conjecture is
considered to be well out of reach of present methods:
V.30     The Resolution of Singularities
Virtually all important mathematical structures come
with a notion of equivalence. For instance, we regard
two groups [I.3 §2.1](/part-01/fundamental-definitions) as equivalent if they are isomor-
phic [I.3 §4.1](/part-01/fundamental-definitions), and we regard two topological spaces
[III.90](/part-03/topological-spaces) as equivalent if there is a continuous map from
one to the other with a continuous inverse (in which
case we say that they are homeomorphic). In general, a
interested in are unaffected when we replace an object
by an equivalent one: for example, if G is a finitely gen-
erated Abelian group and H is isomorphic to G, then H
is a finitely generated Abelian group.
A useful notion of equivalence for algebraic vari-
eties [IV.4 §7](/part-04/algebra) is that of birational equivalence. Roughly
speaking, two varieties V and W are said to be bira-
tion ally equivalent if there is a rational map from V to
W with a rational inverse. If V and W are presented as
solution sets of equations in some coordinate system,
then these rational maps are just rational functions in
the coordinates that send points of V to points of W .
However, it is important to understand that a rational
map from V to W is not literally a function from V to W ,
because it is allowed to be undefined at certain points
of V .
Consider, for example, how we might map the infinite
cylinder {(x, y, z) : x2 +y 2 = 1} to the cone {(x, y, z) :