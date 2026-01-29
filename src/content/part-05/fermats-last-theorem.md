# Fermat’s Last Theorem

V.10.    Fermat’s Last Theorem                                                                                        691

X. Then one can check that f , U n f  = μ(A ∩ T −n A).          The ergodic theorems of von Neumann and Birkhoff
It follows that                                                 have been generalized over the years in many differ-
                               1    
                                   N−1                          ent directions. These far-reaching extensions of ergodic
         f , AN, M (f ) =             μ(A ∩ T −n A).           theorems, and more generally the ergodic method, have
                             N − M n=M
                                                                found impressive applications in such diverse fields
If we let N − M tend to infinity, then AN, M f tends              as statistical mechanics, number theory, probability
to a U-invariant function g. Since g is U-invariant,            theory, harmonic analysis, and combinatorics.
f , g = U n f , g for every n, and therefore f , g =
AN, M (f ), g for every N and M, and finally f , g =          Further Reading
g, g. By the Cauchy–Schwarz inequality, this is at least
( g(x) dμ)2 = ( f (x) dμ)2 = μ(A)2 . Therefore, we              Furstenberg, H. 1981. Recurrence in Ergodic Theory and
                                                                  Combinatorial Number Theory. M. B. Porter Lectures.
deduce that
                                                                  Princeton, NJ: Princeton University Press.
                1    
                    N−1
         lim            μ(A ∩ T −n A) ⩾ (μ(A))2 .               Krengel, U. 1985. Ergodic Theorems, with a supplement by
        N−M→. nfty N − M                                               A. Brunel. De Gruyter Studies in Mathematics, volume 6.
                    n=M
                                                                  Berlin: Walter de Gruyter.
If you choose two “random sets” of measure μ(A),
                                                                Mackey, G. W. 1974. Ergodic theory and its significance for
then their intersection will typically be (μ(A))2 , so the
                                                                  statistical mechanics and probability theory. Advances in
inequality above is saying that the average intersection          Mathematics 12:178–268.
of A with T −n A is at least as big as the “expected” inter-
section. This result, due to Khinchin, gives more precise
information about the nature of Poincaré recurrence.            The Fermat–Euler Theorem
   When a unitary operator is defined in terms of a                 See modular arithmetic [III.58](/part-03/modular-arithmetic)
measure-preserving transformation as above, it is nat-
ural to ask whether the averages converge not just in
the sense of the L2 -norm but also in the more clas-            V.10     Fermat’s Last Theorem
sical sense of convergence almost every where. (For a
                                                                Many people, even if they are not mathematicians, are
related thought in a different context, see carleson’s
                                                                aware of the existence of Pythagorean triples: that is,
theorem [V.5](/part-05/carlesons-theorem).) The answer is that they do, as was
                                                                triples of positive integers (x, y, z) such that x 2 +y 2 =
shown by birkhoff [VI.78](/part-06/george-birkho-18841944) soon after he learned of
                                                                z2 . These give us examples of right-angled triangles
von Neumann’s theorem. He proved that for each inte-
                                                                with integer side lengths, of which the best known is
grable function f one could find a function f ∗ such
that f ∗ (T x) = f ∗ (x) for almost every x, and such           the “(3, 4, 5) triangle.” For any two integers m and n,
that                                                            we have that (m2 −n2 )2 +(2 mn)2 = (m2 +n2 )2 , which
                    1 
                       N−1                                      gives us an infinite supply of Pythagorean triples, and
               lim          f (T n x) = f ∗ (x)                 in fact every Pythagorean triple is a multiple of a triple
              N→. nfty N
                        n=0
                                                                of this form.
for almost every x. Suppose that the transformation T
                                                                   fermat [VI.12](/part-06/pierre-fermat-1601665) asked the very natural question of
is ergodic, let A ⊂ X be a set of positive measure, and
                                                                whether similar triples existed for higher powers: that
let f (x) be the characteristic function of A. It follows
                                                                is, could there be a solution in positive integers of the
from Birkhoff’s theorem that for almost every x ∈ X
                                                                equation x n + y n = zn for some power n ⩾ 3? For
one has
                                                                instance, is it possible to express a cube as a sum of
               1 
                   N−1
                                  f dμ   μ(A)                   two other cubes? Or rather, Fermat famously claimed
           lim       f (T n x) =       =      .
           N→. nfty N                 μ(X)    μ(X)                   that it was not possible, and that he had a proof that
                 n=0
Since the expression                                            space did not permit him to write down. Over the next
                                                                three and a half centuries, this problem became the
                         1 
                               N−1
                      lim      f (T n x)                        most famous unsolved problem in mathematics. Given
                     N→. nfty N
                           n=0                                  the amount of effort that went into it, one can be virtu-
describes the frequency of visits of T n x to the set A, we     ally certain that Fermat did not in fact have a proof: the
see that in an ergodic system the images x, T x, T 2 x, . . .   problem appears to be irreducibly difficult, and solv-
of a typical point x ∈ A visit A with a frequency that          able only by techniques that were developed much later
equals the proportion of the space occupied by A.               than Fermat.

$692$

The fact that Fermat’s question was an easy one to think of does not on its own guarantee that it is interesting. Indeed, in 1816 gauss [VI.26](/part-06/carl-friedrich-gauss-17771855) wrote in a letter that he found it too isolated a problem to interest him. At the time, that was a reasonable remark: it is often extremely hard to determine whether a given Diophantine equation has a solution, and it is therefore easy to come up with hard problems of a similar nature to Fermat’s last theorem.
However, Fermat’s last theorem has turned out to be exceptional in ways that even Gauss could not have been expected to foresee, and nobody would now describe it as “isolated.” By the time of Gauss’s remark, the problem had been solved for $n = 3($ by euler [VI.19](/part-06/leonhard-euler-17071783) ) and $n = 4($ by Fermat; this is the easiest case). The first serious connection between Fermat’s last theorem and more general mathematical concerns came with the work of kummer [VI.40] in the middle of the nineteenth century.
An important observation that had been made by Euler is that it can be fruitful to study Fermat’s last theorem in larger rings [III.81](/part-03/rings-ideals-and-modules), since these, if appropriately chosen, allow one to factorize the polynomial z n - y n . Indeed, if we write $1$ , $ζ,ζ^{2}$ , . . . , $ζ^{n} - {}^{1}$ for the nth roots of $1$ , then we can factorize it as $(z - y)(z - ζy)(z - ζ^{2}y)$ · · · $(z - ζ^{n} - {}^{1}y)$ .
(1) Therefore, if x n + y $n = z$ n then we have two rather different-looking factorizations of x n inside the ring generated by $1$ and ζ (namely the factorization in (1) above, and xxx · · · x), and it is reasonable to hope that this information might be exploited. However, there is a serious problem: the ring generated by $1$ and ζ does not enjoy the unique factorization property [IV . 1 § § 4 - 8 ] , so one’s sense of being close to a contradiction when faced with these two factorizations is not well-founded.
Kummer, in connection with the search for higher reciprocity laws [V.28](/part-05/from-quadratic-reciprocity-to-vi38-augustus-de-morgan-18061871), had met this difficulty and had defined the notion of an ideal [III.81](/part-03/rings-ideals-and-modules) : very roughly, if you enlarge a ring by adding in Kummer’s “ideal numbers,” then unique factorization is restored. Using these concepts, Kummer was able to prove Fermat’s last theorem for every prime number p that was not a factor of the class number [IV.1](/part-04/number-theory) of the corresponding ring. He called such primes regular.
This connected Fermat’s last theorem with ideas that have belonged to the mainstream of algebraic number theory [IV.1](/part-04/number-theory) ever since. However, it did not solve the problem, since there are infinitely many irregular primes (though this was not known in Kummer’s day).

V. Theorems and Problems

It turned out that more complicated ideas could be used for individual irregular primes, and eventually an algorithm was developed that could check for any given n whether Fermat’s last theorem was true for that n. By the late twentieth century, the theorem had been verified for all exponents up to 4000000 . However, a general proof came from a very different direction. The story of the eventual proof by Andrew Wiles has been told many times, so we shall be very brief about it here.
Wiles did not study Fermat’s last theorem directly, but instead solved an important special case of the Shimura-Taniyama-Weil conjecture, which connects elliptic curves [III.21](/part-03/elliptic-curves) and modular forms [III.59](/part-03/modular-forms). The first hint that elliptic curves might be relevant came when Yves Hellegouarch noticed that the elliptic curve $y^{2} = x(x - a^{p})(x - b^{p})$ would have rather unusual properties if a p  +  b p was also a pth power. Gerhard Frey realized that such a curve might be so unusual that it would contradict the Shimura Taniyama-Weil conjecture.
 Jean-Pierre Serre came up with a precise statement (the “epsilon conjecture ”) that would imply this, and Ken Ribet proved Serre’s conjecture, thus establishing that Fermat’s last theorem was a consequence of the Shimura-Taniyama-Weil conjecture. Wiles suddenly became very interested indeed, and after seven years of intensive and almost secret work he announced a solution to a case of the Shimura Taniyama-Weil conjecture that was sufficient to prove Fermat’s last theorem.
It then emerged that Wiles’s proof contained a serious mistake, but with the help of Richard Taylor he managed to find an alternative and correct argument for that portion of the proof. The Shimura-Taniyama-Weil conjecture asserts that “all elliptic curves are modular.” We finish by giving a rough idea of what this means. (A few more details can be found in arithmetic geometry [IV.5](/part-04/arithmetic-geometry).) Associated with any elliptic curve E is a sequence of numbers a n (E), one for each positive integer n.
For each prime p, a p (E) is related to the number of points on the elliptic curve (mod p); it is easy to derive from these values the values of a n (E) for composite n. Modular forms are holomorphic functions [I.3](/part-01/fundamental-definitions) with certain periodicity properties defined on the upper half-plane; associated with each modular form f is a fourier series [III.27](/part-03/the-fourier-transform) that takes the form $f(q) = a^{1}(f)q + a^{2}(f)q^{2} + a^{3}(f)q^{3} +$ · · · .
Let us call an elliptic curve E modular if there is a modular form f such that a p (E) $=$ a p (f) for all but finitely many primes p. If you are presented with an elliptic