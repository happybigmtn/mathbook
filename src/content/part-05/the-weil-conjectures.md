# The Weil Conjectures

V.35.   The Weil Conjectures                                                                                    729

a hyperbolic metric on any simply connected proper         Kuga, Ihara, and Deligne showed that in fact Ramanu-
open subset of C.                                          jan’s conjecture is a consequence of the Weil conjec-
  If a Riemann surface is not simply connected, it is at   tures, so that Deligne’s proof of the latter in 1974 also
least a quotient [I.3 §3.3](/part-01/fundamental-definitions) of a simply connected sur-     resolved the former.
face, namely its universal cover [III.93](/part-03/universal-covers). For example,      We begin with a brief historical summary of develop-
a torus is a quotient of the complex plane (in many        ments prior to weil [VI.93](/part-06/andr-weil-19061998) and follow this with a more
possible ways that are topologically but not biholomor-    precise description of the statement of his conjectures.
ph ically equivalent). Thus, the uniformization theorem     Finally, we sketch the ideas behind their proof.
tells us that a general Riemann surface is a quotient
of the sphere, the Euclidean plane, or the hyperbolic                  1   An Auspicious Prologue
plane. For a more detailed discussion of what such a
                                                           Our story begins with the seminal work of riemann
quotient might be like, see fuchsian groups [III.28](/part-03/fuchsian-groups).      [VI.49] on the classical zeta function [IV.2 §3](/part-04/number-theory), which
                                                           we recall is defined by the sum
Waring’s Problem                                                                         1
                                                                                 ζ(s) =       .
   See problems and results in additive                                                 n n
                                                                                            s

       number theory [V.27](/part-05/problems-and-results-in-vi36-peter-gustav-lejeune-dirichlet-18051859)                                euler [VI.19](/part-06/leonhard-euler-17071783) had studied this function for real values
                                                           of s, but Riemann, in his remarkable eight-page paper
                                                           of 1859, went much further. He looked at complex val-
V.35 The Weil Conjectures
                                                           ues as well, and therefore had at his disposal the con-
        Brian Osserman
                                                           sider able resources of complex analysis. In particular,
                                                           although the above sum for ζ(s) converges only for
The Weil conjectures constitute one of the central
                                                           complex numbers s that have real part Re(s) strictly
landmarks of twentieth-century algebraic geometry
                                                           greater than 1, Riemann showed that the function itself
[IV.4](/part-04/algebra): not only was their proof a dramatic triumph,
                                                           can be extended to an analytic function defined on the
but they were the driving force behind a striking num-
                                                           entire complex plane, except at the point s = 1, at which
ber of fundamental advances in the field. The conjec-
                                                           it tends to infinity. He showed, more over, that ζ(s)
tures treat a very elementary problem: how to count the
                                                           satisfies a certain functional equation relating ζ(s) to
number of solutions to systems of polynomial equa-         ζ(1 − s), which introduced an important kind of sym-
tions over finite fields [I.3 §2.2](/part-01/fundamental-definitions). While one might ulti-   metry around the line Re(s) = 12 . Most famously (or
mately be more interested in solutions over, say, the      infamously), he conjectured what is now known as the
field of rational numbers, the problem is far more          riemann hypothesis [I.4 §3](/part-01/general-goals): that, aside from easily
tractable over finite fields, and local–global prin-         analyzed “trivial zeros” on the negative real axis, every
ciples [III.51](/part-03/local-and-global-in-number-theory) such as the birch–swinnerton-dyer          zero of ζ(s) occurs on the line Re(s) = 12 . Riemann’s
conjecture [V.4](/part-05/the-birchswinnerton-dyer-conjecture) establish strong, albeit subtle, rela-    motivation for studying ζ(s) was to analyze the dis-
tion ships between the two cases.                           tribution of prime numbers, but it fell to later authors
  More over, there are some basic questions that have       (hadamard [VI.65](/part-06/jacques-hadamard-18651963), de la vallée poussin [VI.67](/part-06/charles-jean-de-la-valle-poussin-18661962), and
nonobvious connections to the Weil conjectures. The        Van Koch) to bring this vision to fruition. They used
most famous of these is the Ramanujan conjecture,          the zeta function to prove the prime number theorem
which concerns the coefficients of Δ(q), one of the most     [I.4 §3](/part-01/general-goals), which determined the asymptotic distribution
fundamental examples of a modular form [III.59](/part-03/modular-forms). We        of prime numbers, and also showed that the Riemann
obtain the function τ(n) from the formula for Δ(q) as      hypothesis is equivalent to a particularly strong upper
follows:                                                   bound for the error term in the prime number theorem.
                    . nfty
                                       . nfty
                                                             At first glance, the Riemann hypothesis might appear
         Δ(q) = q       (1 − qn )24 =         τ(n)q n .    to be completely special, a one-of-a-kind conjecture.
                    n=1                 n=1
                                                           However, it was not long before dedekind [VI.50](/part-06/julius-wilhelm-richard-dedekind-18311916) gen-
ramanujan [VI.82](/part-06/srinivasa-ramanujan-18871920) conjectured that |τ(p)| ⩽ 2 p 11/2        eralized the Riemann hypothesis to a whole family of
for any prime number p. This is closely related to a       zeta functions, and in doing so opened the door to fur-
statement on the number of ways of writing p as a          ther generalization. Just as we can think of the complex
sum of twenty-four squares. Work of Eichler, Shimura,      numbers as being obtained from the real numbers by

730                                                                                         V. Theorems and Problems

including a square root of −1, that is, a root of the poly-   is just the field of integers modulo p. More generally,
nomial x 2 + 1, one can obtain a number field [III.63](/part-03/number-fields),        we can obtain Fq by adding roots of polynomials to Fp
the fundamental object of study in algebraic num-             just as we do to Q to obtain number fields; in fact, a
ber theory [IV.1](/part-04/number-theory), from the field Q of rational num-           single root of a single irreducible polynomial of degree
bers by including roots of more general polynomials.          r will do.
For each number field K we have the ring of integers OK ,         Artin studied a certain class of curves in the plane.
which enjoys many of the same properties as the classi-       Here, “plane” means F2 q , that is, the set of all pairs (x, y)
cal integers Z. Starting from this observation, Dedekind      with x and y in Fq . A curve C is simply the subset
defined a more general class of zeta functions, one for        of these points where some polynomial f (x, y) with
each such ring, which now bear his name. The classical        coefficients in Fq vanishes. Of course, if F is any field
zeta function ζ(s) was the Dedekind zeta function in          that contains Fq , then the coefficients are also in F , so it
the case OK = Z. However, it was not at all straight for-      makes sense to talk about C(F ), the curve in the larger
ward to establish the existence of a functional equation      “plane” F 2 defined by the same equation f (x, y) = 0. If
for Dedekind zeta functions: this was an open problem         F is also a finite field, then C(F ) is obviously also finite.
until 1917, when it was settled by Hecke, who showed          The finite fields F containing Fq turn out to be the fields
at the same time that Dedekind zeta functions could be        Fqm for m ⩾ 1. For each m ⩾ 1 let us define Nm (C) to
extended to the complex plane, there by ensuring that          be the number of points belonging to the curve C(Fqm ).
the Riemann hypothesis makes sense for them as well.          The sequence N1 (C), N2 (C), N3 (C), . . . is what we shall
   With such ideas in the air, it was not long before         try to understand.
geometry entered the picture. artin [VI.86](/part-06/emil-artin-18981962) first intro-          Given our plane curve C, we can define the ring
duced zeta functions and the Riemann hypothesis for           of polynomial functions OC of C. This is simply the
certain curves over finite fields in his 1923 thesis, not-      ring of polynomial functions on the plane (i.e., in
ing that the ring of polynomial functions on such a           two variables), modulo the equivalence relation
curve shares precisely the properties of rings of inte-       [I.2 §2.3](/part-01/language-and-grammar) that two functions taking the same values
gers that Dedekind used to define his zeta functions.          on C should be considered the same. Formally, OC is
Artin quickly observed first that his new zeta func-           simply the quotient [I.3 §3.3](/part-01/fundamental-definitions) ring Fq [x, y]/(f (x, y)).
tions were strongly analogous to Dedekind zeta func-          Artin’s basic observation was that the definition of the
tions, and second that they were often more tractable:        Dedekind zeta function could be applied equally well
evidence for both observations is provided by the             to the ring OC , yielding a zeta function ZC (t) associ-
fact that he was able to check explicitly that the Rie-       ated with C. However, in our geometric context we have
mann hypothesis was satisfied for a number of specific          the following equivalent and more elementary formula,
curves. The difference between the two situations is           which explicitly relates ZC (t) to the number of points
encapsulated as follows: while in the number field case        over finite fields:
                                                                                           . nfty
                                                                                           
one can think of the zeta function as counting primes,                                                   tm
                                                                           ZC (t) = exp         Nm (C)        .           (1)
in the case of a function field the zeta function may                                                     m
                                                                                          m=1
be expressed in terms of the more geometric data of
                                                                 Schmidt generalized Artin’s definition to all curves
counting points on the given curve. In a 1931 paper
                                                              over finite fields, and gave an elegant description of
F. K. Schmidt generalized Artin’s work, and exploited
                                                              the zeta function for curves, bearing out Artin’s obser-
this geometry to prove a strong form of the functional
                                                              vat i ons in the cases he was able to compute. The nicest
equation for such zeta functions. And then, in 1933,
                                                              form of Schmidt’s theorem applies to curves that sat-
Hasse proved the Riemann hypothesis in the special
                                                              isfy two additional conditions. The first condition is
case of elliptic curves [III.21](/part-03/elliptic-curves) over finite fields.
                                                              that, rather than considering the curve C in the plane,
                                                              we will want to “compactify” it by considering instead
           2   Zeta Functions of Curves
                                                              a projective curve; we can think of this as adding some
We now discuss in more detail the definition and prop-         “points at infinity,” thus increasing Nm (C) slightly. Sec-
erties of zeta functions associated with curves over          ond, we will want to impose a technical condition of
finite fields, as well as the theorems of Schmidt and           smoothness on C, which is analogous to asking that C
Hasse. Let Fq denote the finite field with q elements,          be a manifold [I.3 §6.9](/part-01/fundamental-definitions).
where q = p r for some prime number p and some pos-              In order to state Schmidt’s result, recall that there is
itive integer r . The simplest case is when q = p, and Fp     a notion of the genus [IV.4 §10](/part-04/algebra) of a smooth projective

$V$ . $35$ .

The Weil Conjectures

curve C, which can be defined to be the dimension g of the space of differentials on C, or, if C is a complex curve, as the “number of holes” in the space obtained from the analytic topology on C. By extending certain classical results in algebraic geometry to more general fields, Schmidt proved that, for a smooth projective curve C over F q of genus g, we have P (t)

$Z^{C}(t) =$

,

$(2)(1 - t)(1 - qt)$

where P (t) is a polynomial of degree $2g$ with integer coefficients. Further more, he proved a functional equation in terms of the substitution $t \to 1/qt$ . If we set $t = q$  -  s , this gives a functional equation for the substitution $s \to 1 - s,$ as in Riemann’s original work. The Riemann hypothesis for C is then the statement that the roots of $Z^{C}(q - s)$ all have $Re(s) = \frac{1}{2}$ , or, equivalently, that the roots of  P(t) all have norm equal to $q - 1/2$ .
It is an elementary observation that this is equivalent to the assertion that $|N^{m}(C) - q^{m} + 1| \le 2g q^{m}$ , for all $m \ge 1$ . The next step in exploiting the geometric nature of zeta functions of curves is the observation that if F is a finite field containing F q m , then the points with coordinates in F q m are the fixed points of a function called the Frobenius map, which is the map Φ q m that sends m m a point (x , y) $\inF^{2}$ to the point (x q , y q).
It is a simple extension of fermat’s little theorem [III.58](/part-03/modular-arithmetic) that m if t $\in$ F q m , then t $q = t$. More over, the converse holds: m if F is a field containing F q m , and t $\in$ F satisfies t $q = t$, then t $\in$ F q m . This follows because in any field, and in m particular in F , the polynomial t q  -  t can have at most m q roots, which must then be precisely the elements of F q m . It immediately follows that a point (x , y) $\inF^{2}$ is a fixed point of Φ q m if and only if (x , y) $\inF^{2}$ q m .
More over, m m m it is elementary that (s  +  t) $q = s$ q  +  t q , if s, t are in any field containing F q n . Because the coefficients of f (x , y) are in F q m , it follows that if f (x , y) $= 0$ , then m m m f (Φ q m (x , y))  =  f (x q , y q)  =  (f (x , y)) q $= 0$ , so we see that Φ q m gives a map from C to itself. Thus, one might hope to study C (F q m) by analyzing more generally what one can say about the fixed points of maps from C to itself.
Hasse successfully applied this point of view to prove the Riemann hypothesis in the case g $= 1$ , which is to say the case of elliptic curves. More over, we will see that this perspective is woven through out the fabric of the rest of our story, not only inspiring Weil to make his conjectures, but also suggesting the techniques that ultimately led to their proof.

7313

Enter Weil

In 1940$and$1941 , Weil gave two proofs of the Riemann hypothesis for curves over finite fields. Or, to be more accurate, he described two proofs: they both relied on fundamental facts in algebraic geometry which had been proved by analytic methods for varieties over the complex numbers, but which had not been proved rigorously in the case of arbitrary base fields. It was largely in order to address this deficiency that Weil wrote his Foundations of Algebraic Geometry, which appeared in 1948 and allowed both of his earlier proofs to be made rigorous.
Weil’s book constituted a watershed in algebraic geometry, as it introduced for the first time the notion of an abstract algebraic variety. Previously, a variety was always a global object, in that it was defined by a single collection of polynomial equations, in either affine or projective space.
Weil realized that it would be helpful to have a corresponding locally defined concept, so he introduced abstract algebraic varieties, which are obtained by gluing together affine algebraic varieties in much the same way that manifolds in topology are obtained by gluing together open subsets of affine space. The notion of an abstract variety played a fundamental role in formalizing Weil’s proofs, and was also an important precursor to Grothendieck’s immensely successful theory of schemes [IV.5](/part-04/arithmetic-geometry).
The following year, in a remarkable paper in the Bulletin of the American Mathematical Society, Weil went further, studying zeta functions Z V (t) associated with higher-dimensional varieties V over finite fields, and taking as his definition the formula ( $1$ ). While the situation is more complicated in this context, the behavior conjectured by Weil was nonetheless strikingly similar, an utterly natural extension of the case of curves: (i) Z V (t) is a rational function of t;
(ii) more explicitly, if $n = dim$ V , we can write $P^{1}(t)P^{3}(t)$ · · · $P^{2n} - {}^{1}(t)Z^{V}(t) =$ , $P^{0}(t)P^{2}(t)$ · · · $P^{2n}(t)$ where each root of each P i (t) is a complex number of norm $q - i/2$ ; (iii) the roots of P i (t) are interchanged with the roots of $P^{2n} - i(t)$ under the substitution $t \to 1/q^{n}t;$ (iv) if V is the reduction modulo p of a variety Ṽ defined over a subfield of C , then b $i = deg$ P i (t) is the ith Betti number of Ṽ using the usual topology.
The last part of (ii) is known as the Riemann hypothesis, while (iii) constitutes a functional equation for

732                                                                                       V. Theorems and Problems

the substitution t → 1/qn t. Betti numbers are a well-      and developed a candidate for a Weil cohomology, the
known invariant from algebraic topology [IV.6](/part-04/algebraic-topology): if           étale cohomology. Indeed, he noted that one could in
we return to Schmidt’s theorem (2) in the case of curves,    fact extend the list of desired properties of a Weil
the degrees 1, 2 g, 1 of 1 − t, P (t), 1 − qt are precisely   cohomology in such a way that the Weil conjectures
the Betti numbers of a complex curve of genus g.             would follow almost immediately. These properties
                                                             were known but extremely difficult in the classical case,
                    4 The Proof                              and included the “hard Lefschetz theorem.” In a burst
                                                             of optimism, Grothendieck referred to them as the
Weil’s conjectures were inspired by a very intuitive
                                                             “standard conjectures,” and envisioned that the Weil
topological picture, derived from considering V (Fqm )
                                                             conjectures would ultimately be proved through them.
as the set of fixed points of Φqm . For getting for the
                                                                However, the final chapter of the story did not go
moment that Φqm makes sense only over finite fields,
                                                             entirely according to Grothendieck’s plan. His stu-
if we imagine that V were defined over the complex
                                                             dent Deligne set about working on the problem, and
numbers, then by using the complex topology we could
                                                             was ultimately able to complete an exceedingly sub-
study the fixed points of Φqm by the lefschetz fixed
                                                             tle and intricate proof using induction on the dimen-
point theorem [V.11 §3](/part-05/fixed-point-theorems), obtaining a formula in terms
                                                             sion of the variety. The étale cohomology played an
of the action of Φqm on the cohomology groups
                                                             absolutely fundamental role in Deligne’s proof, but
[IV.6 §4](/part-04/algebraic-topology). Indeed, we could deduce the factorization in
                                                             he also introduced other ideas into the picture, most
(ii) almost immediately (and in particular the rational-
                                                             notably a classical geometric construction of Lefschetz,
ity asserted in (i)), with each factor Pi (t) correspond-
                                                             as well as some work of Rankin on the Ramanu-
ing to the action of Frobenius on the ith cohomology
                                                             jan conjecture. In the end, he was able to conclude
group, and we would also have deg Pi (t) given by the
                                                             the hard Lefschetz theorem from his work, but the
ith Betti number of V . More over, the functional equa-
                                                             rest of the standard conjectures remain unsolved to
tion would follow from a concept known as poincaré
                                                             this day.
duality [III.19 §7](/part-03/duality).
   It was not long before it became clear that such coho-    Acknowledgments. I would like to thank Kiran Kedlaya,
mol og ical arguments might become more than just              Nicholas Katz, and Jean-Pierre Serre for their helpful corre-
                                                             spondence.
motivation: there could be a cohomology theory for
algebraic varieties over finite fields that would mimic
                                                             Further Reading
the properties of the classical topological theory and
would allow one to prove the Weil conjectures. Such a        Dieudonné, J. 1975. The Weil conjectures. Mathematical
cohomology theory is now known as a Weil cohomology.           Intelligencer 10:7–21.
Serre was the first to seriously attempt to develop such      Katz, N. 1976. An over view of Deligne’s proof of the Rie-
                                                               mann hypothesis for varieties over finite fields. In Math-
a theory, but he had only limited success. In 1960,
                                                               ematical Developments Arising from Hilbert Problems,
Dwork provided a brief detour by using p-adic analy-
                                                               edited by F. E. Browder, pp. 275–305. Providence, RI:
sis [III.51](/part-03/local-and-global-in-number-theory) to prove parts (i) and (iii) of the conjec-       American Mathematical Society.
tures: that is, the rationality and the functional equa-     Weil, A. 1949. Numbers of solutions of equations in finite
tion. Shortly there after, building on comments of Serre        fields. Bulletin of the American Mathematical Society 55:
and in collaboration with Artin, Grothendieck proposed         497–508.