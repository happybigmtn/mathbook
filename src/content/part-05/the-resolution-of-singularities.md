# The Resolution of Singularities

722                                                                                     V. Theorems and Problems

this way, take the elliptic curve y 2 = x 3 − 5 x and let    now than Mordell’s conjecture seemed before Faltings
P be the point (−1, 2) (which lies on the curve since       proved it.)
22 = (−1)3 −5(−1)). If you calculate 5 P using the group        At the beginning of this article, we simplified the
law, then you obtain the point (−5 248 681/4 020 025,       equation x 3 + y 3 = z 3 so that we were looking at a
16 718 705 378/8 060 150 125). In general, the number       curve rather than a surface. But we obviously cannot
of digits needed to express the point n P grows expo-        always do that. For instance, if we apply the same pro-
nentially with n.                                           cedure to the equation x 5 + y 5 + z5 = w 5 , then we
   In the early twentieth century, poincaré [VI.61](/part-06/jules-henri-poincar-18541912) con-    obtain the two-dimensional surface t 5 + u5 + v 5 = 1.
jectured that the subgroup of rational points on an         Our knowledge about rational points on varieties (that
elliptic curve was finitely generated. This conjecture       is, sets defined by polynomial equations) of dimension
was proved by Louis Mordell in 1922. Thus, although         greater than 1 is very limited. However, there is at least
a curve of genus 1 may have infinitely many rational         a definition of a “variety of general type” that serves
points, there is a finite set of these points that can be    as an analogue of the notion of a curve of genus at
used to build up all the others: this is the sense in       least 2. One cannot expect such a variety to contain only
which the structure of the set of rational solutions is     finitely many rational points, but a higher-dimensional
restricted.                                                 analogue of the Mordell conjecture, due to Serge Lang,
   Mordell conjectured that a curve of genus at least       asserts that the rational points on a variety X of general
2 could contain only finitely many points. This was a        type must all be contained in a union of finitely many
remarkable conjecture: if true, it would apply to an        lower-dimensional subvarieties of X. This conjecture is
extremely wide class of Diophantine equations, prov-        considered to be well out of reach of present methods:
ing that all of them had at most finitely many solutions     indeed, it is not even universally believed.
(up to a multiple). Just one of its many implications was
that for each n ⩾ 3 the Fermat equation x n + y n = zn      V.30     The Resolution of Singularities
had at most finitely many solutions with x, y, and z
coprime. However, it is one thing to make a very gen-       Virtually all important mathematical structures come
eral conjecture and quite another to prove it, and for      with a notion of equivalence. For instance, we regard
a long time the consensus was that the Mordell con-         two groups [I.3 §2.1](/part-01/fundamental-definitions) as equivalent if they are isomor-
jecture, like many other conjectures in number theory,      phic [I.3 §4.1](/part-01/fundamental-definitions), and we regard two topological spaces
was way beyond what anybody could prove. It therefore       [III.90](/part-03/topological-spaces) as equivalent if there is a continuous map from
came as a big surprise when Gerd Faltings proved the        one to the other with a continuous inverse (in which
conjecture in 1983.                                         case we say that they are homeomorphic). In general, a
   As a result of Faltings’s proof, our knowledge about     notion of equivalence is useful if properties that we are
Diophantine equations took a huge leap forward. The         interested in are unaffected when we replace an object
theorem has subsequently been given a variety of dif-       by an equivalent one: for example, if G is a finitely gen-
ferent proofs, some of them simpler than that of Falt-      erated Abelian group and H is isomorphic to G, then H
ings. However, remarkable as these proofs are, they         is a finitely generated Abelian group.
do have some limitations. One is that they are inef-           A useful notion of equivalence for algebraic vari-
fective. That is, even though Faltings’s theorem tells      eties [IV.4 §7](/part-04/algebra) is that of birational equivalence. Roughly
us that certain curves have finitely many rational           speaking, two varieties V and W are said to be bira-
points, no known proof gives any bound on the sizes         tionally equivalent if there is a rational map from V to
of the numerators and denominators of the coordin-          W with a rational inverse. If V and W are presented as
ates of those points, so we do not have any way of          solution sets of equations in some coordinate system,
knowing whether we have found all of them. This             then these rational maps are just rational functions in
aspect of the theorem is common in number theory:           the coordinates that send points of V to points of W .
another example of a famous theorem that is ineffec-         However, it is important to understand that a rational
tive is roth’s theorem [V.22](/part-05/liouvilles-theorem-and-roths-theorem). To find effective ver-         map from V to W is not literally a function from V to W ,
sions of these theorems would be a further remark-          because it is allowed to be undefined at certain points
able breakthrough. (Variants of the abc conjecture          of V .
[V.1](/part-05/the-abc-conjecture) would imply effective versions of these results,          Consider, for example, how we might map the infinite
but the ABC conjecture seems even further out of reach      cylinder {(x, y, z) : x2 +y 2 = 1} to the cone {(x, y, z) :