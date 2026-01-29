# Elliptic Curves

$190$

distributions [III.18](/part-03/distributions) shows how to use duality to give rigorous definitions of function-like objects such as the Dirac delta function. The article on mirror symmetry [IV.16](/part-04/mirror-symmetry) discusses an astonishing (and still largely conjectural) duality between calabi-yau manifolds [III.6](/part-03/calabiyau-manifolds) and so-called “mirror manifolds.” Often the mirror manifold is much easier to understand than the original manifold, so this duality, like the Fourier transform, makes certain calculations possible that would otherwise be unthinkable. And the article on representation theory [IV.9](/part-04/representation-theory) discusses the “Langlands dual” of certain (non Abelian) groups: a proper understanding of this duality would solve many major open problems. III . $20$ Dynamical Systems and Chaos From a scientific point of view, a dynamical system is a physical system, such as a collection of planets or the water in a canal, that changes over time. Typically, the positions and velocities of the parts of such a system at a time t depend only on the positions and velocities of those parts just before that time, which means that the behavior of the system is governed by a system of partial differential equations [I.3](/part-01/fundamental-definitions). Often, a very simple collection of partial differential equations can lead to very complicated behavior of the physical system. From a mathematical point of view, a dynamical system is any mathematical object that evolves in time according to a precise rule that determines the behavior of the system at time t from its behavior just beforehand. Sometimes, as above, “just beforehand” refers to a time infinitesimally earlier, which is why calculus is involved. But there is also a vigorous theory of discrete dynamical systems, where the “time” t takes integer values, and the “time just before t” is t $- 1$ . If f is the function that tells us how the system at time t depends on the system at time t $- 1$ , then the system as a whole can be thought of as the process of iterating f : that is, applying f over and over again. As with continuous dynamical systems, a very simple function f can lead to very complicated behavior if you iterate it enough times. In particular, some of the most interesting dynamical systems, both discrete ones and continuous ones, exhibit an extreme sensitivity to initial conditions, which is known as chaos. This is true, for example, of the equations that govern weather. One cannot hope to specify exactly the wind speed at every point on the Earth’s surface (not to mention high above III. Mathematical Concepts it), which means that one has to make do with approximations. Because the relevant equations are chaotic, the resulting inaccuracies, which may be small to start with, rapidly propagate and overwhelm the system: you could start with a different, equally good approximation and find that after a fairly short time the system had evolved in a completely different way. This is why accurate forecasting is impossible more than a few days in advance. For more about dynamical systems and chaos, see dynamics [IV.14](/part-04/dynamics). III . $21$ Elliptic Curves Jordan S. Ellenberg An elliptic curve over a field K can be defined as an algebraic curve of genus $1$ over K, endowed with a point defined over K. If this definition is too abstract for your tastes, then an equivalent definition is the following: an elliptic curve is a curve in the plane determined by an equation of the form $y^{2} + a^{1}xy + a^{3}y = x^{3} + a^{2}x^{2} + a^{4}x + a^{6}$ . (1) When the characteristic of K is not $2$ , we can transform this equation into the simpler form y ${}^{2} =$ f (x), for some cubic polynomial f . In this sense, an elliptic curve is a rather concrete object. However, this definition has given rise to a subject of seemingly inexhaustible mathematical interest, which has provided a tremendous fund of ideas, examples, and problems in number theory and algebraic geometry. This is in part because there are many values of “X” for which it is the case that “the simplest interesting example of X is an elliptic curve.” For instance, the points of an elliptic curve E with coordinates in K naturally form an Abelian group, which we call E (K) . The connected projective varieties [III.95](/part-03/varieties) that admit a group law of this kind are called Abelian varieties; and elliptic curves are just the Abelian varieties that are one dimensional. The Mordell-Weil theorem tells us that, when K is a number field and A is an Abelian variety, A (K) is actually a finitely generated Abelian group, called a Mordell-Weil group; these Abelian groups are much studied but have retained much of their mystery (see rational points on curves and the mordell conjecture [V.29](/part-05/rational-points-on-curves-and-vi40-ernst-eduard-kummer-18101893)) . Even when A is an elliptic curve, in which case we would call it E instead, there is a great deal that we do not know, though the birch-swinnerton-dyer conjecture [V.4](/part-05/the-birchswinnerton-dyer-conjecture) offers a conjectural formula for the

III.22.   The Euclidean Algorithm and Continued Fractions                                                           191

rank of the group E(K). For much more on the topic            curve at all—it is an object called, depending on whom
of rational points on elliptic curves, see arithmetic         you ask, an orbifold [IV.4 §7](/part-04/algebra) or an algebraic stack—
geometry [IV.5](/part-04/arithmetic-geometry).                                              you can think of it as a curve from which someone has
   Since E(K) forms an Abelian group, given any prime         removed a few points, folded the points in half or into
p one can look at the subgroup of elements P such             thirds, and then glued the folded-up points back in.
that p P = 0. This subgroup is called E(K)[p]. In par-         You might find it reassuring to know that even pro-
ticular, we can take the algebraic closure \bar{K} of K and        fessionals in the subject find this process rather diffi-
look at E(\bar{K})[p]. It turns out that, when K is a num-         cult to visualize.) The curve M1,1 is a “simplest exam-
ber field [III.63](/part-03/number-fields) (or, for that matter, any field of char-     ple” in two ways: it is the simplest modular curve, and
acteristic not equal to p), this group is isomorphic to       simultaneously the simplest moduli space of curves.
(Z/p Z)2 , no matter what choice of E we started with.
If the group is the same for all elliptic curves, why is it   III.22 The Euclidean Algorithm and
interesting? Because it turns out that the galois group
                                                                     Continued Fractions
[V.21](/part-05/the-insolubility-of-the-quintic) Gal(\bar{K}/K) permutes the set E(\bar{K})[p]. In fact, the
action of Gal(\bar{K}/K) on the group (Z/p Z)2 gives rise to
                                                                       Keith Ball
a representation [III.77](/part-03/representations) of the Galois group. This is
                                                                          1   The Euclidean Algorithm
a foundational example in the theory of Galois repre-
sentations, which has become central to contemporary          the fundamental theorem of arithmetic [V.14](/part-05/the-fundamental-theorem-of-arithmetic),
number theory. Indeed, the proof of fermat’s last             which states that every integer can be factored into
theorem [V.10](/part-05/fermats-last-theorem) by Andrew Wiles is in the end a the-           primes in a unique way, has been known since antiq-
orem about the Galois representations that arise from         uity. The usual proof depends upon what is known as
elliptic curves. And what Wiles proved about these spe-       the Euclidean algorithm, which constructs the highest
cial Galois representations is itself a small special case    common factor (h, say) of two numbers m and n. In
of the family of conjectures known as the Langlands           doing so, it shows that h can be written in the form
program, which proposes a thoroughgoing correspon-            am + bn for some pair of integers a, b (not necessarily
dence between Galois representations and automorphic
                                                              positive). For example, the highest common factor of
forms, which are generalized versions of the classical
                                                              17 and 7 is 1, and sure enough we can express 1 as the
analytic functions called modular forms [III.59](/part-03/modular-forms).
                                                              combination 1 = 5 \times 17 − 12 \times 7.
   In another direction, if E is an elliptic curve over
                                                                The algorithm works as follows. Assume that m is
C, then the set of points of E with complex coordin-
                                                              larger than n and start by dividing m by n to yield a
ates, which we denote E(C), is a complex manifold
                                                              quotient q1 and a nonnegative remainder r1 that is less
[III.88 §3](/part-03/symplectic-manifolds). It turns out that this manifold can always be
                                                              than n. Then we have
expressed as the quotient of the complex plane by a cer-
tain group Λ of transformations. What is more, these                                m = q1 n + r1 .                   (1)
transformations are just translations: each map sends
                                                              Now since r1 < n we may divide n by r1 to obtain a
z to z + c for some complex number c. (This expres-
                                                              second quotient and remainder:
sion of E(C) as a quotient is carried out with the help
of elliptic functions [V.31](/part-05/the-riemannroch-theorem).) Each elliptic curve gives                            n = q2 r1 + r 2 .                 (2)
rise in this way to a subset—indeed, a subgroup—of
                                                              Continue in this way, dividing r1 by r2 , r2 by r3 , and so
the complex numbers; the elements of this subgroup
                                                              on. The remainders get smaller each time but cannot
are called periods of the elliptic curve. This construc-
                                                              go below zero. So the process must stop at some point
tion can be regarded as the very beginning of Hodge
                                                              with a remainder of 0: that is, with a division that comes
theory, a powerful branch of algebraic geometry with
                                                              out exactly. For instance, if m = 165 and n = 70, the
a reputation for extreme difficulty. (The Hodge conjec-
                                                              algorithm generates the sequence of divisions
ture, a central question in the theory, is one of the Clay
Institute’s million-dollar-prize problems.)                                      165 = 2 \times 70 + 25,                   (3)
   Yet another point of view is presented by the mod-                             70 = 2 \times 25 + 20,                   (4)
uli space [IV.8](/part-04/moduli-spaces) of elliptic curves, denoted M1,1 . This is
                                                                                  25 = 1 \times 20 + 5,                    (5)
itself a curve, but not an elliptic one. (In fact, if I am
completely honest, I should say that M1,1 is not quite a                          20 = 4 \times 5 + 0.                     (6)

192                                                                                     III. Mathematical Concepts

The process guarantees that the last nonzero remain-           The continued fraction can be constructed directly
der, 5 in this case, is the highest common factor of m      from the ratio 165/70 = 2.35714 . . . without refer-
and n. On the one hand, the last line shows that 5 is a     ence to the integers 165 and 70. We start by subtract-
factor of the previous remainder 20. Now the last-but-      ing from 2.35714 . . . the largest whole number we can:
one line shows that 5 is also a factor of the remain-       namely 2. Now we take the reciprocal of what is left:
der 25 that occurred one step earlier, because 25 is        1/0.35714 . . . = 2.8. Again we subtract off the largest
expressed as a combination of 20 and 5. Working back        integer we can, 2, which tells us that q2 = 2. The recip-
up the algorithm we conclude that 5 is a factor of both     rocal of 0.8 is 1.25, so q3 = 1 and then, finally, 1/0.25 =
m = 165 and n = 70. So 5 is certainly a common factor       4, so q4 = 4 and the continued fraction stops.
of m and n.                                                    The mathematician John Wallis, who worked in the
  On the other hand, the last-but-one line shows that       seventeenth century, seems to have been the first to
5 can be written as a combination of 25 and 20 with         give a systematic account of continued fractions and
integer coefficients. Since the previous line shows that      to recognize that continued-fraction expansions exist
20 can be written as a combination of 70 and 25 we can      for all numbers (not only rational numbers), provided
write 5 in terms of 70 and 25:                              that we allow the continued fraction to have infinitely
                                                            many levels. If we start with any positive number, we
   5 = 25 − 20 = 25 − (70 − 2 \times 25) = 3 \times 25 − 70.
                                                            can build its continued fraction in the same way as
Continuing back up the algorithm we can express 25 in       for the ratio 2.35714 . . . . For example, if the number
terms of 165 and 70 and conclude that                       is π = 3.14159265 . . . , we start by subtracting 3, then
   5 = 3 × (165 − 2 \times 70) − 70 = 3 \times 165 − 7 \times 70.          take the reciprocal of what is left: 1/0.14159 . . . =
                                                            7.06251 . . . . So for π we get that the second quotient
  This shows that 5 is the highest common factor
                                                            is 7. Continuing the process we build the continued
of 165 and 70 because any factor of 165 and 70 would
                                                            fraction
automatically be a factor of 3 \times 165 − 7 \times 70: that is, a                                     1
                                                                             π =3+                     .            (7)
factor of 5. Along the way we have shown that the high-                              7+         1
                                                                                                  1
                                                                                        15+
est common factor can be expressed as a combination                                           1+       1
                                                                                                   292+ 1+1.
                                                                                                               .
of the two original numbers m and n.                                                                               .

                                                            The numbers 3, 7, 15, and so on, that appear in the
      2   Continued Fractions for Numbers                   fraction are called the partial quotients of π .
                                                              The continued fraction for a real number can be used
During the 1500 years following Euclid, it was realized
                                                            to approximate it by rational numbers. If we truncate
by mathematicians of the Indian and Arabic schools
                                                            the continued fraction after several steps, we are left
that the application of the Euclidean algorithm to a pair
                                                            with a finite continued fraction which is a rational num-
of integers m and n could be encoded in a formula for
                                                            ber: for example, by truncating the fraction (7), one
the ratio m/n. The equation (1) can be written
                                                            level down we get the familiar approximation π ≈
               m         r1         1                       3 + 1/7 = 22/7; at the second level we get the approx-
                  = q1 +    = q1 + ,
                n        n          F                       imation 3 + 1/(7 + 1/15) = 333/106. The truncations
where F = n/r1 . Now equation (2) expresses F as            at different levels thus generate a sequence of rational
                             r2                             approximations: the sequence for π begins
                    F = q2 +    .
                             r1
                                                                       3, 22/7, 333/106, 355/113, . . . .
The next step of the algorithm will produce an expres-
sion for r1 /r2 and so on. If the algorithm stops after     Whatever positive real number x we start with, the
k steps, then we can put these expressions together to      sequence of continued-fraction approximations will
get what is called the continued fraction for m/n:          approach x as we move further down the fraction.
               m                  1                         Indeed, the formal interpretation of the equation (7) is
                 = q1 +               1          .          precisely that the successive truncations of the fraction
               n        q2 +
                               q3 + . .                     approach π .
                                          .+ 1
                                            qk                Naturally, in order to get better approximations to
For example,                                                a number x we need to take more “complicated”
                  165       1                               fractions—fractions with larger numerator and denom-
                      =2+     1 .
                  70      2+   1                            inator. The continued-fraction approximations to x are
                                    1+ 4

