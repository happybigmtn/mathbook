# Computational Number Theory

348                                                                                       IV. Branches of Mathematics

   The correct analogue of the Riemann hypothesis for          Further Reading
L(E, s) turns out to be that all the nontrivial zeros lie
                                                               Hardy and Wright’s classic book (1980) stands alone
on the line Re(s) = 1. This is believed to be true. More-
                                                               among introductory number theory texts for the qual-
over, it is believed that they, like the zeros of ζ(s),
                                                               ity of its discussion of analytic topics. The best intro-
are distributed according to the rules that govern the
                                                               duction to the heart of analytic number theory is the
eigenvalues of randomly chosen matrices.
                                                               masterful book by Davenport (2000). Everything you
   These L-functions often have zeros at s = 1 (which
                                                               have ever wanted to know about the Riemann zeta
is linked to the birch–swinnerton-dyer conjec-
                                                               function is in Titchmarsh (1986). Finally, there are
ture [V.4](/part-05/the-birchswinnerton-dyer-conjecture)) and these zeros repel zeros of Dirichlet L-
                                                               two recently released books by modern masters of the
functions (which is what was used by Goldfeld, Gross,
                                                               subject (Iwaniec and Kowalski 2004; Montgomery and
and Zagier, as mentioned in section 4, to get their lower
                                                               Vaughan 2006) that introduce the reader to the key
bound on h−q ).
                                                               issues of the subject.
   L-functions arise in many areas of arithmetic geom-
                                                                  The reference list below includes several papers, sig-
etry, and their coefficients typically describe the num-
                                                               nif i cant for this article, whose content is not discussed
ber of points satisfying certain equations mod p. The
                                                               in any of the listed books.
Langlands program seeks to understand these connec-
tions at a deep level.                                         Davenport, H. 2000. Multiplicative Number Theory, 3 rd edn.
   It seems that every “natural” L-function has many             New York: Springer.
of the same analytic properties as those discussed             Deligne, P. 1977. Applications de la formule des traces
                                                                 aux sommes trigonométriques. In Cohomologie Étale (SGA
in this article. Selberg has proposed that this phe-
                                                                 4 1/2). Lecture Notes in Mathematics, volume 569. New
nomenon should be even more general. Consider sums
                                                                York: Springer.
A(s) = n⩾1 an /ns that                                         Green, B., and T. Tao. 2008. The primes contain arbitrarily
  • are well-defined when Re(s) > 1,                              long arithmetic progressions. Annals of Mathematics 167:

  • have an Euler product p (1 + bp /p s + bp2 /p2 s +            481–547.
    · · · ) in this (or an even smaller) region,               Hardy, G. H., and E. M. Wright. 1980. An Introduction to the
  • have coefficients an that are smaller than any                 Theory of Numbers, 5 th edn. Oxford: Oxford University
                                                                 Press.
    given power of n, once n is sufficiently large,
                                                               Ingham, A. E. 1949. Review 10,595 c (MR0029411). Mathe-
  • satisfy |bn | < κnθ for some constants θ < 12 and            mat ical Reviews. Providence, RI: American Mathematical
    κ > 0.                                                       Society.
Selberg conjectures that we should be able to give a           Iwaniec, H., and E. Kowalski. 2004. Analytic Number Theory.
good definition to A(s) on the whole complex plane,               AMS Colloquium Publications, volume 53. Providence, RI:
and that A(s) should have a symmetry connecting the              American Mathematical Society.
                                                               Montgomery, H. L., and R. C. Vaughan. 2006. Multiplica-
value of A(s) with A(1−s). Further more, he conjectures
                                                                 tive Number Theory I: Classical Theory. Cambridge: Cam-
that the Riemann hypothesis should hold for A(s)!
                                                                 bridge University Press.
  The current wishful thinking is that Selberg’s family        Soundararajan, K. 2007. Small gaps between prime num-
of L-functions is precisely the same as those considered         bers: the work of Goldston–Pintz–Yıldırım. Bulletin of the
by Langlands.                                                    American Mathematical Society 44:1–18.
                                                               Titchmarsh, E. C. 1986. The Theory of the Riemann Zeta-
                    13   Conclusion                              Function, 2 nd edn. Oxford: Oxford University Press.
In this article we have described current thinking on
several key questions about the distribution of primes.
                                                               IV.3 Computational Number Theory
It is frustrating that after centuries of research so little
                                                                       Carl Pomerance
has been proved, the primes guarding their mysteries
so jealously. Each new breakthrough seems to require
                                                                                   1   Introduction
brilliant ideas and extraordinary technical prowess. As
euler [VI.19](/part-06/leonhard-euler-17071783) wrote in 1770:                                   Historically, computation has been a driving force in
                                                               the development of mathematics. To help measure the
  Mathematicians have tried in vain to discover some
  order in the sequence of prime numbers but we have           sizes of their fields, the Egyptians invented geometry.
  every reason to believe that there are some mysteries        To help predict the positions of the planets, the Greeks
  which the human mind will never penetrate.                   invented trigonometry. Algebra was invented to deal

IV.3.   Computational Number Theory                                                                                   349

with equations that arose when mathematics was used             in Diophantine equations (Fermat’s last theorem and
to model the world. The list goes on, and it is not just        the ABC conjecture); and in elementary number theory
historical. If anything, computation is more important          (primality and factorization). A secondary theme that
than ever. Much of modern technology rests on algo-             we shall explore is the strong and constructive inter-
rithms that compute quickly: examples range from the            play between computation, heuristic reasoning, and
wavelets [VII.3](/part-07/wavelets-and-applications) that allow CAT scans, to the numerical         conjecture.
extrapolation of extremely complex systems in order to
predict weather and global warming, and to the com-                     2   Distinguishing Prime Numbers
binatorial algorithms that lie behind Internet search                        from Composite Numbers
engines (see the mathematics of algorithm design
[VII.5 §6](/part-07/the-mathematics-of-algorithm-design)).                                                    The problem is simple to state. Given an integer n > 1,
   In pure mathematics we also compute, and many                decide if n is prime or composite. And we all know an
of our great theorems and conjectures are, at root,             algorithm. Divide n by each positive integer in turn.
motivated by computational experience. It is said that          Either we find a proper factor, in which case we know
gauss [VI.26](/part-06/carl-friedrich-gauss-17771855), who was an excellent computation a list,           that n is composite, or we do not, in which case we
needed only to work out a concrete example or two               know that n is prime. For example, take n = 269. It is
to discover, and then prove, the underlying theorem.            odd, so it has no even divisors. It is not a multiple of 3,
While some branches of pure mathematics have per-               so it has no divisor which is a multiple of 3. Continuing,
haps lost contact with their computational origins, the         we rule out 5, 7, 11, and 13. The next possibility, 17, has
advent of cheap computational power and convenient              a square that is greater than 269, which means that if
mathematical software has helped to reverse this trend.         269 were a multiple of 17, then it would also have to be
   One mathematical area where the new emphasis on              a multiple of some number less than 17. Since we have
computation can be clearly felt is number theory, and           ruled that out, we can stop our trial division at 13 and
that is the main topic of this article. A prescient call-to-    conclude that 269 is prime. (If we were actually carrying
arms was issued by Gauss as long ago as 1801:                   out the algorithm, we might try dividing 269 by 17, in
                                                                which case we would discover that 269 = 15 . imes 17 + 14.
  The problem of distinguishing prime numbers from
                                                                At that point we would notice that the quotient, 15,
  composite numbers, and of resolving the latter into
  their prime factors, is known to be one of the most           is less than 17, which is what would tell us that 172
  important and useful in arithmetic. It has engaged the        was greater than 269. Then we could stop.) In general,
  industry and wisdom of ancient and modern geometers           since a composite number n has a proper factor d with
                                                                     √
  to such an extent that it would be superfluous to dis-         d ⩽ n, one can give up on the trial dividing once one
  cuss the problem at length. Nevertheless we must con-                 √
                                                                passes n, at which point we know that n is prime.
  fess that all methods that have been proposed thus far
                                                                   This straightforward method is excellent for men-
  are either restricted to very special cases or are so labo-
  rious and difficult that even for numbers that do not
                                                                tal computation with small numbers, and for machine
  exceed the limits of tables constructed by estimable          computation for some what larger numbers. But it
  men, they try the patience of even the practiced cal-         scales poorly, in that if you double the number of digits
  culator. And these methods do not apply at all to             of n, then the time for the worst case is squared; it is
  larger numbers. . . . Further, the dignity of the science     therefore an “exponential-time” algorithm. One might
  itself seems to require that every possible means be          tolerate such an algorithm for twenty-digit inputs, but
  explored for the solution of a problem so elegant and
                                                                think how long it would take to establish the primality
  so celebrated.
                                                                of a forty-digit number! And you can forget about num-
  Factorization into primes is a very basic issue in            bers with hundreds or thousands of digits. The issue
number theory, but essentially all branches of num-             of how the running time of an algorithm scales when
ber theory have a computational component. And in               one goes to larger inputs is absolutely paramount in
some areas there is such a robust computational liter-          measuring one algorithm against another. In contrast
ature that we discuss the algorithms involved as math-          to the exponential time it takes to use trial division to
ematically interesting objects in their own right. In this      recognize primes, consider the problem of multiplying
article we will briefly present a few examples of the            two numbers. The school method of multiplication is
computational spirit: in analytic number theory (the            to take each digit of one number in turn and multiply
distribution of primes and the Riemann hypothesis);             it by the other number, forming a parallelogram array.

$350$

One then performs an addition to obtain the answer. If you now double the number of digits in each number, then the parallelogram becomes twice as large in each dimension, so the running time grows by a factor of about $4$ . Multiplication of two numbers is an example of a “polynomial time” algorithm; its running time scales by a constant factor when the input length is doubled. One might then rephrase Gauss’s call to arms as follows. Is there a polynomial-time algorithm that distinguishes prime numbers from composite numbers?
Is there a polynomial-time algorithm that can produce a nontrivial factor of a composite number? It might not be apparent at this point that these are two different questions, since trial division does both. We will see, though, that it is convenient to separate them, as did Gauss. Let us focus on recognizing primes. What we would like is a simply computed criterion that primes satisfy and composites do not, or vice versa. An old theorem of Wilson might just fit the bill. Note that $6$ ! $= 720$ , which is just one less than a multiple of $7$ .
Wilson’s theorem asserts that if n is prime, then $(n - 1)$ ! ≡ $- 1$ (mod n) . (The meaning of this and similar statements is explained in modular arithmetic [III.58](/part-03/modular-arithmetic).) This cannot hold when n is composite, for if p is a prime factor of n and is smaller than n, then it is a factor of (n $- 1$ ) ! , so it cannot possibly be a factor of $(n - 1)$ ! $+ 1$ . Thus, we have an ironclad criterion for primality.
However, the Wilson criterion does not meet the standard of being simply computed, since we know no especially rapid way of computing factorials modulo another number. For example, Wilson predicts that $268$ ! ≡ $- 1 ($ mod 269), as we have already seen that $269$ is prime. But if we did not know this already, how in the world could we quickly find the remainder when $268$ ! is divided by $269$ ? We can work out the product $268$ ! one factor at a time, but this would take many more steps than trying divisors up to $17$ .
It is hard to prove that something cannot be done, and in fact there is no theorem that says we cannot compute a! mod b in polynomial time. We do know some ways of speeding up the computation over the totally naive method, but all methods known so far take exponential time. So, Wilson’s theorem initially seems promising, but in fact it is no help at all unless we can find a fast way to compute a! mod b. How about fermat’s little theorem [III.58](/part-03/modular-arithmetic) ? Note that $2^{7} = 128$ , which is $2$ more than a multiple of $7$ . Or take $3^{5} = 243$ , which is $3$ mod $5$ .
Fermat’s little theorem

IV. Branches of Mathematics

tells us that if n is prime and a is any integer, then a n ≡ a (mod n). If computing a large factorial modulo n is hard, perhaps it is also hard to compute a large power modulo n. It cannot hurt to try it out for some moderate example to see if any ideas pop up. Take $a = 2$ and $n = 91$ , so that we are trying to compute $2^{91}$ mod $91$ . $A$ powerful idea in mathematics is that of reduction. Can we reduce this computational problem to a smaller one? Notice that if we had already computed $2^{45}$ mod $91$ , obtaining a remainder $r^{1}$ , say, then $2^{91}$ ≡ 2(r1)2 ( mod 91).
That is, it is just a short additional calculation to get to our goal, yet the power $45$ is only half as big. How to continue is clear: we further reduce to the exponent $22$ , which is less than half of $45$ . If $2^{22}$ mod $91 = r^{2}$ , then $2^{45}$ ≡ 2(r2)2 (mod 91). And of course $2^{22}$ is the square of $2^{11}$ , and so on. It is not so hard to “automate” this procedure: the exponent sequence

$1$ , $2$ , $5$ , $11$ , $22$ , $45$ , $91$ can be read directly from the binary (base $2$ ) representation of $91$ as 1011011 , since the above sequence in binary is $1$ , $10$ , $101$ , 1011 , 10110 , 101101 , 1011011 . These are the initial strings from the left of 1011011 . And it is plain that the transition from one term to the next is either the double or the double plus $1$ . This procedure scales nicely.
When the number of digits of n is doubled, so is the sequence of exponents, and the time it takes to get from one exponent to the next, being a modular multiplication, is multiplied by $4$ . (As with naive multiplication, naive divide with-remainder also takes four times as long when the size of the problem is doubled .) Thus, the over all time is multiplied by $8$ , yielding a polynomial time method. We call this the “powermod” algorithm. So, let us try to illustrate Fermat’s little theorem, taking $a = 2$ and $n = 91$ .
Our sequence of powers is $2^{1}$ ≡ $2$ , $2^{2}$ ≡ $4$ , $2^{5}$ ≡ $32$ , $2^{11}$ ≡ $46$ , $2^{22}$ ≡ $23$ , $2^{45}$ ≡ $57$ , $2^{91}$ ≡ $37$ , where each congruence is modulo $91$ , and each term in the sequence is found by squaring the prior one mod $91$ or squaring and multiplying by $2$ mod $91$ . Wait a second: does Fermat’s little theorem not say that we are supposed to get $2$ for the final residue? Well, yes, but this is guaranteed only if n is prime. And as you have probably already noticed, $91$ is composite. In fact, the computation proves this.

$IV$ . $3$ .

Computational Number Theory

Quite remarkably, here is an example of a computation that proves that n is composite, yet it does not reveal any nontrivial factorization! You are invited to try out the powermod algorithm as above, but to change the base of the power from

$2$ to $3$ . The answer you should come to is that $3^{91}$ ≡ $3$ (mod $91$ ) : that is, the congruence for Fermat’s little theorem holds. Since you already know that $91$ is composite, I am sure you would not jump to the false conclusion that it is prime! So, as it stands, Fermat’s little theorem can some times be used to recognize composites, but it cannot be used to recognize primes. There are two interesting further points to be made regarding Fermat’s little theorem.
First, on the negative side, there are some composites, such as $n = 561$ , where the Fermat congruence holds for every integer a. These numbers n are called Carmichael numbers, and unfortunately (from the point of view of testing primality) there are infinitely many of them, a result due to Alford, Granville, and me. But, on the positive side, if one were to choose randomly among all pairs a, n for which a n ≡ a (mod n), with a $<n$ and $n$ bounded by a large number x, almost certainly (as x grows) you would choose a pair with n prime, a result of Erdős and myself.
It is possible to combine Fermat’s little theorem with another elementary property of (odd) prime numbers. If n is an odd prime, there are exactly two solutions to the congruence $x^{2}$ ≡ 1 ( mod n  ), namely ± $1$ . Actually, some composites have this property as well, but composites divisible by two different odd primes do not. Now let us suppose that n is an odd number and that we wish to determine whether it is prime. Suppose that we pick some number $a$ with $1 \le a \le n - 1$ and discover that $a^{n} - {}^{1}$ ≡ 1 ( mod n  ).
If we set $x = a(n - {}^{1})/ {}^{2}$ , then $x^{2} = a^{n} - {}^{1}$ ≡ 1 ( mod n  ); so, by the simple property of primes just mentioned, if n is prime, then x must be ± $1$ . Therefore, if we calculate a $(n - {}^{1})/ {}^{2}$ and discover that it is not congruent to ± $1$ (mod n), then n must be composite. Let us try this idea with $a = 2$ , $n = 561$ . We know already that $2^{560}$ ≡ 1 ($mod$561), so what is $2^{280}$ mod $561$ ? This too turns out to be $1$ , so we have not shown that $561$ is composite.
However, we can go further, since now we know that $2^{140}$ is also a square root of $1$ and computing this we find that $2^{140}$ ≡ $67$ (mod $561$ ). So now we have found a square root of $1$ that is not ± $1$ , which proves that $561$ is composite. (Of course, for this particular number, it is obviously

$351$

divisible by $3$ , so there was not really any mystery about whether it was prime or composite. But the method can be used in much less obvious cases .) In practice, there is no need to backtrack from a higher exponent to a smaller one. Indeed, in order to calculate $2^{560}$ mod $561$ by the efficient method outlined earlier, one calculates the numbers $2^{140}$ and $2^{280}$ along the way, so that this generalization of the earlier test is both quicker and stronger. Here is the general principle that we have illustrated.
Suppose that n is an odd prime and let a be an integer not divisible by  n. Write $n - 1 = 2^{s}t,$ where $t$ is odd.

Then

i

either a t ≡ $1$ (mod n)

(a2)t ≡ $- 1($ mod n  ) 

or

for some $i = 0$ , $1$ , . . . , $s - 1$ . Call this the strong Fermat congruence. The wonderful thing here is that, as proved independently by Monier and Rabin, there is no analogue of a Carmichael number. They showed that if n is an odd composite, then the strong Fermat congruence fails for at least three quarters of the choices for $a$ with $1 \le a \le n - 1$ . If you want only to be able to distinguish between primes and composites in practice, and you do not insist on proof, then you have read enough.
Namely, given a large odd number n, choose twenty values of a at random from [1 , n − 1 ] , and begin trying to verify the strong Fermat congruence with these bases a. If it should ever fail, you may stop: the number n must be composite. And if the strong Fermat congruence holds, we might surmise that n is actually prime. Indeed, if n were composite, the Monier-Rabin theorem says that the chance that the strong Fermat congruence would hold for twenty random bases is at most $4 - 20$ , which is less than one chance in a trillion. Thus we have a remarkable probabilistic test for primality.
If it tells us that n is composite, then we know for sure that n is composite; if it tells us that n is prime, then the chances that n is not prime are so small as to be more or less negligible. If three quarters of the numbers a in [1 , n − 1 ] provide the key to an easily checkable proof that the odd composite number n is indeed composite, surely it should not be so hard to find just one! How about checking small numbers a, in order, until one is found? Excellent, but when do we stop? Let us think about this for a moment.
We have given up the power of randomness and are forcing ourselves to choose sequentially among small numbers for the trial bases a. Can we argue heuristically that they continue to behave as if

352                                                                                      IV. Branches of Mathematics

they were random choices? Well, there are some con-            0 (mod n). For example, (x + 1)7 is equal to
nections among them. For example, if taking a = 2 does           x 7 + 7 x 6 + 21 x 5 + 35 x 4 + 35 x 3 + 21 x 2 + 7 x + 1,
not result in a proof that n is composite, then neither
will taking any power of 2. It is theoretically possible for   and we see each internal coefficient is a multiple of 7.
2 and 3 not to give proofs that n is composite but for         Thus, we have (x + 1)7 ≡ x 7 + 1 (mod 7). (Two poly-
6 to work just fine, but this turns out not to be very          nomials are congruent mod n if corresponding coeffi-
common. So let us amend the heuristic and assume               cients are congruent mod n.) In general, if n is prime
that we have independence for prime values of a. Up            and a is any integer, then via this binomial-theorem
to log n log log n there are about log n primes (via the       idea and Fermat’s little theorem we have
prime number theorem [V.26](/part-05/the-prime-number-theorem-and-the-vi34-jnos-bolyai-18021860) discussed later in this                    (x + a)n ≡ x n + an ≡ x n + a (mod n).
article); so, heuristically, the probability that n is com-
                                                               It is an easy exercise to show that this congruence in the
posite, but that none of these primes help us to prove it,
                                                              simple case a = 1 is actually equivalent to primality.
is about 4− log n < n−4/3 . Since the infinite sum n−4/3
                                                               But as with the Wilson criterion we know no way of
converges, perhaps a stopping point of log n log log n
                                                               quickly verifying that all these coefficients are indeed
is sufficient, at least for large n.
                                                               divisible by n.
   Miller was able to prove the slightly weaker result
                                                                  However, one can do more with polynomials than
that a stopping point of c(log n)2 is adequate, but
                                                               raise them to powers. We can also divide one poly-
his proof assumes a generalization of the riemann              nomial by another to find a quotient and a remain-
hypothesis [V.26](/part-05/the-prime-number-theorem-and-the-vi34-jnos-bolyai-18021860). (We discuss the Riemann hypoth-             der, just as we do with integers. It makes sense, for
esis below; the generalization that Miller assumes is          example, to say that g(x) ≡ h(x) (mod f (x)), mean-
beyond the scope of this article.) In further work, Bach       ing that g(x) and h(x) leave the same remainder
was able to show that we may take c = 2 in this                when divided by f (x). We will write g(x) ≡ h(x)
last result. Summarizing, if this generalized Riemann          (mod n, f (x)) if the remainders upon division by f (x)
hypothesis holds, and if the strong Fermat congruence          are congruent mod n. As with the powermod algo-
holds for every positive integer a ⩽ 2(log n)2 , then n        rithm for integer congruences, we can quickly compute
is prime. So, provided that a famous unproved hypoth-          g(x)n (mod n, f (x)), provided the degree of f (x) is
esis in another field of mathematics is correct, one can        not too big. This is exactly what Agrawal et al. propose.
decide in polynomial time, via a deterministic algo-           They have an auxiliary polynomial f (x) of not-too-high
rithm, whether n is prime or composite. (It has been           degree such that, if
tempting to use this conditional test, for if it should
ever lie to you and tell you that a particular compos-                    (x + a)n ≡ x n + a (mod n, f (x))
ite number is prime, then this failure—if you were able        for each a = 1, 2, . . . , B, for a not-too-high bound B,
to detect it—would be a disproof of one of the most            then n must be in a set that contains the primes and
famous conjectures in mathematics. Perhaps this is not         certain composites that are easily recognized as com-
too disastrous a failure!)                                     posit es. (Not all composites are hard to recognize as
   After Miller’s test in the 1970 s, the question con-         such, e.g., any number with a small prime factor is easy
tinually challenging us was whether it is possible to          to recognize.) These ideas put together form the pri-
test for primality in polynomial time with out assuming         mality test of Agrawal et al. To give the argument in
unproved hypotheses. Recently, Agrawal et al. (2004)           full detail one has to specify the auxiliary polynomial
answered this question with a resounding yes. Their            f (x) that is used and what the bound B is, and one has
idea begins with a combination of the binomial theo-           to prove rigorously that it is exactly the primes which
rem and Fermat’s little theorem. Given an integer a,           pass the test.
consider the polynomial (x + a)n and expand it in the             Agrawal et al. (2004) show that the auxiliary poly-
usual way through the binomial theorem. Each inter me-          nomial f (x) can be taken to be the beautifully sim-
diate term between the leading x n and the trailing an         ple x r − 1, with an elementary upper bound for r of
has the coefficient n!/(j!(n − j)!) for some j between           about (log n)5 . Doing this leads to a time bound of
1 and n − 1. If n is prime, then this coefficient, which         about (log n)10.5 for the algorithm. Using a numeri-
is an integer, is divisible by n because n appears as          cally ineffective tool, they bring the time bound down
a factor in the numerator that is not canceled by any          to (log n)7.5 . Recently, Lenstra and I presented a not-so-
factors in the denominator. That is, the coefficient is          simple but numerically effective method of bringing the

$IV$ . $3$ .

Computational Number Theory

exponent on log n down to $6$ . We did this by expanding the set of polynomials used beyond those of the form $x^{r} - 1$ : in particular we used polynomials that are related to Gauss’s famous algorithm for construction of certain regular n-gons with straightedge and compass (see algebraic numbers [IV.1](/part-04/number-theory)). It was indeed satisfying to us to bring in a famous tool of Gauss to say something about his problem of distinguishing prime numbers from composite numbers. Are the new polynomial-time primality tests good in practice?
So far, the answer is no, the competition is just too tough. For example, using the arithmetic of elliptic curves [III.21](/part-03/elliptic-curves) we can come up with bona fide proofs of primality for huge numbers. This algorithm is conjectured to run in polynomial time but we have not even proved that it always terminates. If, at the end of the day, or in this case the end of the run, we have a legitimate proof, then perhaps we can tolerate the situation of not being sure that it would work out when we started!
The method, pioneered by Atkin and Morain, has recently proved the primality of a number that has over 20000 decimal digits, and is not of some special form such as $2^{n} - 1$ that makes testing for primality easier. The record for the new breed of polynomial-time tests is $a$ measly $300$ digits. For numbers of certain special forms there are much faster primality tests. Mersenne primes comprise the most famous of these forms; these are primes that are $1$ less than a power of $2$ . It is suspected that there are infinitely many examples, but we seem to be very far from a proof of this.
Just forty-three Mersenne primes are known, the record example being 2^({30}402)457 - 1 , $a$ prime with more than $9$ . $15$ million decimal digits. For much more on primality testing, and for references to various other sources, see Crandall and Pomerance (2005).

$3$

Factoring Composite Numbers

Compared with what we know about testing primality, our ability to factor large numbers is still in the dark ages. In fact this imbalance between the two problems forms the bulwark for the security of electronic commerce on the Internet. (See mathematics and cryptography [VII.7](/part-07/mathematics-and-cryptography) for an account of why .) This is a very important application of mathematics, but also an odd one, and not something to brag about, since it depends on the in ability of mathematicians to efficiently solve a basic problem! Nevertheless, we do have our tricks.
Part of the landscape is euclid’s algorithm [III.22] for computing the

$353$

greatest common divisor (GCD) of two numbers. One might naively think that, to find the GCD of two positive integers $m$ and $n$, one should find all of their divisors and pick the largest one common to the two. But Euclid’s algorithm is much more efficient: the number of arithmetic steps is bounded by the logarithm of the smaller number, so not only does it run in polynomial time, it is in fact quite speedy. So, if we can build up a special number m that may be likely to have a nontrivial factor in common with n, we can use Euclid’s algorithm to discover this factor.
For example, Pollard and Strassen (independently) used this idea, together with fast subroutines for multiplication and polynomial evaluation, to enhance the trial division method discussed in the last section. Some what miraculously, one can take the integers up to $n^{1}/ {}^{2}$ , break them into $n^{1}/ {}^{4}$ subintervals of length $n^{1}/ {}^{4}$ , and for each subinterval calculate the GCD of n with the product of all the integers in the subinterval, spending only about $n^{1}/ {}^{4}$ elementary steps in total.
If n is composite, then at least one GCD will be larger than $1$ , and then a search over the first such subinterval will locate a nontrivial factor of n. To date, this algorithm is the fastest rigorous and deterministic method of factoring that we know. Most practical factoring algorithms are based on unproved but reasonable-seeming hypotheses about the natural numbers. Although we may not know how to prove rigorously that these methods will always produce a factorization, or do so quickly, in practice they do.
This situation resembles the experimental sciences, where hypotheses are tested against experiments. Our experience with certain factoring algorithms is now so overwhelming that a scientist might claim that a physical law is involved. As mathematicians, we still search for proof, but fortunately the numbers we factor do not feel the need to wait for us. I often mention a contest problem from my high school years: factor 8051 . The trick is to notice that $8051 = 90^{2} - 7^{2} = (90 - 7)(90 + 7)$ , from which the factorization $83$ · $97$ can be read off.
In fact every odd composite can be factored as the difference of two squares, an idea that goes back to fermat [VI.12](/part-06/pierre-fermat-1601665). Indeed, if n has the nontrivial factorization ab, then let $u = \frac{1}{2}(a + b)$ and $v = \frac{1}{2}(a - b)$ , so that $n = u^{2} - v^{2}$ , and $a = u + v,b = u - v.$ This method works very well if $n$ has a divisor very close to $n^{1}/ {}^{2}$ , as $n = 8051$ does, but in the worst case, the Fermat method is slower than trial division.

354                                                                                     IV. Branches of Mathematics

  My quadratic sieve method (which follows work of          in their prime factorizations only the first k primes.
Kraitchik, Brillhart–Morris on, and Schroeppel) tries to     It is an easy theorem that some nonempty subset of
efficiently extend Fermat’s idea to all odd composites.       these numbers has product a square. The proof has
For example, take n = 1649. We start just above n1/2        us associate with each of these numbers, which can be
                                                                                           a  a      a
with j = 41, and consider the numbers j 2 − 1649. As j      written in the form p1 1 p2 2 · · · pk k , an exponent vec-
runs, we will eventually hit a value where j 2 − 1649 is    tor (a1 , a2 , . . . , ak ). Since squares are detected by all
a square, and so be able to use Fermat’s method. Let’s      even exponents, we really only care whether the expo-
try it:                                                     nents ai are odd or even. Thus, we think of these vec-
                  412 − 1649 = 32,                          tors as having coordinates 0 and 1, and when we add
                                                            them (which corresponds to multiplying the underlying
                  422 − 1649 = 115,                         numbers), we do so mod 2. Since we have k + 1 vectors,
                  432 − 1649 = 200,                         each with only k coordinates, an easy matrix calculation
                               ..                           leads quickly to a nonempty subset that adds up to the
                                .                           0-vector. The product of the corresponding integers is
Well, no squares yet, which is not surprising, since the    then a square.
Fermat method is often very poor. But wait, do the             In our toy example with n = 1649, the first and
first and third lines not multiply together to give a        third numbers, which are 32 = 25 30 50 and 200 =
square? Yes they do, 32 · 200 = 802 . So, multiplying the   23 30 52 , have exponent vectors (5, 0, 0) and (3, 0, 2),
first and third lines, and treating them as congruences      which reduce to (1, 0, 0) and (1, 0, 0), so we see that
mod 1649, we have                                           the sum of them is (0, 0, 0), which indicates that we
                                                            have a square. We were lucky that we could make do
             (41 · 43)2 ≡ 802 (mod 1649).                   with just two vectors, instead of the four that the above
That is, we have a pair u, v with u2 ≡ v 2 (mod 1649).      argument shows would be sufficient.
This is not quite the same as having u2 −v 2 = 1649, but       In general with the quadratic sieve, one finds smooth
we do have 1649 a divisor of u2 − v 2 = (u − v)(u + v).     numbers in the sequence j 2 − n, forms the expo-
Now maybe 1649 divides one of these factors, but if         nent vectors mod 2, and then uses a matrix to find a
it does not, then it is split between them, and so a        nonempty subset which adds up to the 0-vector, which

computation of the GCD of u − v (or u + v) with             then corresponds to a set M for which j∈M f (j) is a
1649 will reveal a proper factor. Now v = 80 and            square.
u = 41 · 43 ≡ 114 (mod 1649), and so we see instantly          In addition, the “sieve” in the quadratic sieve comes
that u ≡ ±v (mod 1649), so we are in business. The         in with the search for smooth values of f (j) = j 2 − n.
GCD of 114 − 80 = 34 with 1649 is 17. Dividing, we see      These numbers are the consecutive values of a (quad-
that 1649 = 17 · 97, and we are done.                       ratic) polynomial, so those divisible by a given prime
   Can we generalize this? In trying to factor n = 1649     can be found in regular places in the sequence. For
we considered consecutive values of the quadratic poly-     example, in our illustration, j 2 − 1649 is divisible by 5
                                                √
nomial f (j) = j 2 − n for j starting just above n, and     precisely when j ≡ 2 or 3 (mod 5). A sieve very much
viewed these as congruences j 2 ≡ f (j) (mod n). Then       like the sieve of Eratosthenes can then be used to effi-

we found a set M of numbers j with j∈M f (j) equal          ciently find the special numbers j where j 2 − n is

to a square, say v 2 . We then let u = j∈M j, so that       smooth. A key issue, though, is how smooth a value
  2      2
u ≡ v (mod n). Since u ≡ ±v (mod n), we could              f (j) has to be for us to decide to accept it. If we choose
split n via the GCD of u − v and n.                         a smaller bound for the primes involved, we do not
   There is another lesson that we can learn from our       have to find all that many of them to use the matrix
small example with n = 1649. We used 32 and 200 to          method. But such very smooth values might be very
form our square, but we ignored 115. If we had thought      rare. If we use a larger bound for the primes involved,
about it, we might have noticed from the start that 32      then smooth values of f (j) may be more common,
and 200 were more likely to be useful than 115. The         but we will need many of them. Some where between
reason is that 32 and 200 are smooth numbers (mean-         smaller and larger is just right! In order to make the
ing that they have only small prime factors), while 115     choice, it would help to know how frequently values of
is not smooth, having the relatively large prime factor     an irreducible quadratic polynomial are smooth. Unfor-
23. Say you have k + 1 positive integers that involve       tunately, we do not have a theorem that tells us, but we

$IV$ . $3$ .

Computational Number Theory

can still make a good choice by assuming that this frequency is about that for a random number of the same size, an assumption that is probably correct even if it is hard to prove. Finally, note that if the final GCD yields only a trivial factor with n, one can continue just a bit longer and find more linear dependencies, each with a fresh chance at splitting n. These thoughts lead us to a time bound of about exp log n log log n for the quadratic sieve to factor n.
Instead of being exponential in the number of digits of n, as with trial division, this is exponential in about the square root of the number of digits of n. This is certainly a huge improvement, but it is still a far cry from polynomial time. Lenstra and I actually have a rigorous random factoring method with the same time complexity as that above for the quadratic sieve. (It is random in the sense that a coin is flipped at various junctures, and decisions on what to do next depend on the out comes of these flips.
Through this process, we expect to get a bona fide factorization within the advertised time bound .) However, the method is not so computer practical, and if you had to choose in practice between the two, then you should go with the nonrigorous quadratic sieve. A triumph for the quadratic sieve was the 1994 factorization of the $129$ - digit RSA cryptographic challenge first published in Martin Gardner’s column in Scientific American in 1977 .
The number field sieve, which is another sieve-based factoring algorithm, was discovered in the late $1980s$ by Pollard for integers close to powers, and later developed by Buhler, Lenstra, and me for general integers. The method is similar in spirit to the quadratic sieve, but assembles its squares from the product of certain sets of algebraic integers. The number field sieve has a conjectured time complexity of the type exp  (  c  (  log n)1/3( log log n)2/3), for a value of c slightly below $2$ .
For composite numbers beyond $100$ digits or so that have no small prime factor, it is the method of choice, with the current record being $200$ decimal digits. The sieve-based factorization methods share the property that if you use them, then all composite numbers of about the same size are equally hard to factor. For instance, factoring n will be about as difficult if n is a product of five primes each roughly near the fifth

$355$

root of n as it will be if n is a product of two primes roughly near the square root of n. This is quite unlike trial division, which is happiest when there is a small prime factor. We will now describe a famous factorization method due to Lenstra that detects small prime factors before large ones, and beyond baby cases is much superior to trial dividing. This is his elliptic curve method. Just as the quadratic sieve searches for a number m with a nontrivial GCD with n, so does the elliptic curve method.
But where the quadratic sieve painstakingly builds up to a successful m from many small successes, the elliptic curve method hopes to hit upon m with essentially one lucky choice. Choosing random numbers m and testing their GCD with n can also have instant success, but you can well imagine that if n has no small prime factors, then the expected time for success would be enormous. Instead, the elliptic curve method involves considerably more cleverness. Consider first the “p $- 1$ method” of Pollard. Suppose you have a number n you wish to factor and a certain large number k.
Unbeknownst to you, n has a prime factor $p$ with $p - 1 a$ divisor of k, and another prime factor q with q $- 1$ not a divisor of k. You can use this imbalance to split n. First of all, by Fermat’s little theorem there are many numbers u with u k ≡ $1$ (mod p) and u k  ≡ $1$ (mod q). Say you have one of these, and let m be u k $- 1$ reduced mod n. Then the GCD of $m$ and $n$ is a nontrivial factor of n; it is divisible by p but not by q.
Pollard suggests taking k as the least common multiple of the integers to some moderate bound so that it has many divisors and perhaps a decent chance that it is divisible by $p - 1$ . The best case of Pollard’s method is when n has a prime factor p with p $- 1$ smooth (has all small prime factors--see the quadratic sieve discussion above). But if n has no prime factors p with p $- 1$ smooth, Pollard’s method fares poorly. What is going on here is that corresponding to the prime p we have the multiplicative group [I.3](/part-01/fundamental-definitions) of the $p - 1$ nonzero residues mod p.
Further more, when doing arithmetic mod n with numbers relatively prime to n, we are, whether we realize it or not, doing arithmetic in this group. We are exploiting the fact that u k is the group identity mod p, but not mod q. Lenstra had the brilliant idea of using the Pollard method in the context of elliptic curve groups. There are many elliptic curve groups associated with the prime p, and therefore many chances to hit upon one where the number of elements is smooth. Of great

$356$

importance here are theorems of Hasse and Deuring. An elliptic curve [III.21](/part-03/elliptic-curves) mod p ( for $p > 3)$ can be taken as the set of solutions to the congruence $y^{2}$ ≡ $x^{3} + ax +$b( mod p ), for given integers a, $b$ with the property that $x^{3} + ax + b$ does not have repeated roots mod p. There is one additional “point at infinity” thrown in (see below) .
A fairly simple addition law (but not as simple as adding coordinatewise !) makes the elliptic curve into a group, with the point at infinity as the identity (see rational points on curves and the mordell conjecture [V.29](/part-05/rational-points-on-curves-and-vi40-ernst-eduard-kummer-18101893)).
Hasse, in a result later generalized by weil [VI.93](/part-06/andr-weil-19061998) with his famous proof of the “Riemann hypothesis for curves,” showed us that the number of elements in the elliptic curve group √always lies between $p + 1 - 2 p$ and $p + 1 + 2 p($ see the weil conjectures [V.35](/part-05/the-weil-conjectures))). And Deuring proved that every number in this range is indeed associated with some elliptic curve mod p. Say we randomly choose integers $x^{1}$ , $y^{1}$ , a, and then choose b so that (y1)2 is congruent to (x1)3 + ax1 + b (mod n).
This gives us the curve with coefficients a, $b$ and $a$ point $P = (x^{1}$ , $y^{1})$ on the curve. One can then mimic the Pollard strategy, with a number k as before with many divisors, and with the point P playing the role of u. Let k P denote the k-fold sum of P added to itself using elliptic curve addition. If k P is the point at infinity on the curve considered mod p (which it will be if the number of points on the curve is a divisor of k), but not on the curve considered mod q, then this gives us a number m whose GCD with n is divisible by p and not by q. We will have factored n.
To see where m comes from it is convenient to consider the curve projectively: we take solutions (x , y, z) of the congruence $y^{2}z$ ≡ $x^{3} +$ axz ${}^{2} + bz^{3} ($ mod p  ). The triple (cx , cy, cz) when c   $= 0$ is considered to be the same as (x , y, z) . The mysterious point at infinity is now demystified; it is just (0, 1, 0). And our point P is $(x^{1}$ , $y^{1}$ , 1) . (This is the mod p version of classical projective geometry [I.3](/part-01/fundamental-definitions) .) Say we work mod n and compute the point k P = (x k , y k , z k).
Then the candidate for the number m is just z k . Indeed, if k P is the point at infinity mod p, then z k ≡ $0$ (mod p), and if it is not the point at infinity mod q, then z k ≡ $0$ (mod q). When Pollard’s $p - 1$ method fails, our only recourse is to raise k or give up. With the elliptic curve method, if things do not work for our randomly chosen curve, we can pick another. Corresponding to the hidden prime p in n, we are actually picking new elliptic curve groups mod p, and so gaining a fresh chance for the number of elements in the group to be smooth. The elliptic curve IV.
Branches of Mathematics method has been quite successful in factoring numbers which have a prime factor up to about fifty decimal digits, and occasionally even some what larger primes have been discovered. We conjecture that the expected time for the elliptic curve method to find the least prime factor p of n is about exp $2$ log p log log p arithmetic operations mod n. What is holding us back from proving this conjecture is not lack of knowledge about elliptic curves, but rather lack of knowledge of the distribution of smooth numbers.
For more on these and other factorization methods, the reader is referred to Crandall and Pomerance (2005). $4$ The Riemann Hypothesis and the Distribution of the Primes As a teenager looking at a modest table of primes, Gauss conjectured that their frequency decays logax rithmically and that $li(x) = {}^{2} (1/$ log  t)dt should be a good approximation for $\pi$ (x), the number of primes between $1$ and  x.
Sixty years later, riemann [VI.49] showed how Gauss’s conjecture can be proved if one assumes that the Riemann zeta function ζ (s)  =  n n  -  s has no zeros in the complex half-plane where the real

$1$

part of s is greater tha$n^{2}$ . The series for ζ (s) converges only for Re s $> 1$ , but it may be analytically continued to $Res > 0$ , with a simple pole at $s = 1$ . (For a brief description of the process of analytic continuation, see some fundamental mathematical definitions [I.3](/part-01/fundamental-definitions).) This continuation may be seen quite concretely via the $\infty$ identity $ζ(s) = s/(s - 1) - s^{1}$ {x}x $- s - 1 dx,$ with {x} the fractional part of x (so that {x} = x - [x]) : note that this integral converges quite nicely in the halfplane $Res > 0$ .
In fact, via Riemann’s functional equation mentioned below, ζ (s) can be continued to a meromorphic function in the whole complex plane, with the single pole at $s = 1$ . $1$ The assertion that ζ( s ) $= 0$ for $Res > {}^{2}$ is known as the riemann hypothesis [IV.2](/part-04/number-theory); arguably it is the most famous unsolved problem in mathematics.
Though hadamard [VI.65](/part-06/jacques-hadamard-18651963) and de la vallée poussin [VI.67](/part-06/charles-jean-de-la-valle-poussin-18661962) were able in 1896 to prove (independently) a weak form of Gauss’s conjecture known as the prime number theorem [V.26](/part-05/the-prime-number-theorem-and-the-vi34-jnos-bolyai-18021860), the apparent breathtaking strength of the approximation li (x) to $\pi$ (x) is uncanny. For example, take $x = 10^{22}$ . We have $\pi(10^{22}) = 201,467,286,689,315,906,290 IV$ . $3$ .

Computational Number Theory

exactly, and, to the nearest integer, we have $li(10^{22})\approx201,467,286,691,248,261,497$ . As you can plainly see, Gauss’s guess is right on the money! The numerical computation of li (x) is simple via numerical methods for integration, and it is directly obtainable in various mathematics computing packages. However, the computation of $\pi(10^{22})$ (due to Gourdon) is far from trivial. It would be far too laborious to count these approximately $2 \times 10^{20}$ primes one by one, so how are they counted?
In fact, we have various combinatorial tricks to count with out listing everything. For example, one does not need to count one by one to see that there are exactly $2$ [10 22 / 6 ] + 1 integers in the interval from $1$ to $10^{22}$ that are relatively prime to $6$ . Rather, one thinks of these numbers grouped in blocks of six, with two in each block coprime to $6$ .
(The “ $+ 1$ ” comes from the partial block at the end .) Building on early ideas of Meissel and Lehmer, Lagarias, Miller, and Odlyzko presented an elegant combinatorial method for computing $\pi(x)$ that takes about $x^{2}/ {}^{3}$ elementary steps. The method was refined by Deléglise and Rivat, and then Gourdon found a way to distribute the computation to many computers. From work of von Koch, and later Schoenfeld, we know that the Riemann hypothesis is equivalent to the assertion that √ $|\pi(x) - li(x)| < x$ log $x(1)$ for all $x \ge 3 ($ see Crandall and Pomerance 2005 , exercise $1$ .
37). Thus, the mammoth calculation of $\pi(10^{22})$ might be viewed as computational evidence for the Riemann hypothesis--in fact, if the count had turned out to violate ( $1$ ), we would have had a disproof. It may not be obvious what ( $1$ ) has to do with the location of the zeros of ζ (s). To understand the connection, let us first dismiss the so-called “trivial” zeros, which occur at each negative even integer. The nontrivial zeros ρ are known to be infinite in number, and, as men$1$ tioned above, are conjectured to satisfy $Reρ \le {}^{2}$ .
There are certain symmetries among these zeros: indeed, if ρ is a zero, then so are ρ̄, $1 - ρ,$ and $1 -$ ρ̄. Therefore, the Riemann hypothesis is the assertion that every nontrivial zero has real part equal to $\frac{1}{2}$ . (The symmetry with ρ$and$1 - ρ, which follows from Riemann’s functional equation $ζ(1 - s) = 2(2\pi) - s$ cos $(\frac{1}{2}\pis)Γ($ s )ζ( s ), perhaps provides some heuristic support for the Riemann hypothesis .) $357$ The connection to prime numbers begins with the fundamental theorem of arithmetic [V.14](/part-05/the-fundamental-theorem-of-arithmetic), which yields
the identity $\infty\infty n - s = p - jsζ(s) =n = 1p$ prime $j = 0(1 - p - s) - 1$ , = p prime a product that converges when $Res > 1$ . Thus, taking the logarithmic derivative (that is, taking the logarithm of both sides and then differentiating), we have $\infty$ ζ (s) log p log p $= - = -$ . $p^{s} - 1$ p js ζ (s) p prime $p$ prime $j = 1$ That is, if we define Λ (n) to be log p if $n = p$ j for a prime p and an integer $j \ge 1$ , and $Λ(n) = 0$ if $n$ is not of this form, then we have the identity $\infty$ Λ (n) ζ (s) $= -$ .
n s ζ (s) $n = 1$ Through various relatively routine calculations, one can then relate the function $\psi(x) =$ Λ (n) $n \le x$ to the residues at the poles of ζ / ζ , which correspond to the zeros (and single pole) of ζ. In fact, as Riemann showed, we have the following beautiful formula:
x ρ - log $(2\pi) - \frac{1}{2}$ log $(1 - x - 2)\psi(x) = x -$ ρ ρ if x itself is not a prime or prime power, and where the sum over the nontrivial zeros ρ of ζ is to be understood in the symmetric sense where we sum over those ρ with $|Imρ| < T$ and let $T \to \infty.$ Through elementary manipulations, an understanding of the function $\psi$ (x) readily gives an equivalent understanding of $\pi$ (x), and it should be clear now that $\psi$ (x) is intimately connected to the nontrivial zeros ρ of ζ. The function $\psi$ (x) defined above has a simple interpretation.
It is the logarithm of the least common multiple of the integers in the interval [1 , x]. As with ( $1$ ) we have an elementary translation of the Riemann hypothesis: it is equivalent to the assertion that √ $|\psi(x) - x| < x$ log ${}^{2}x$ for all $x \ge 3$ . This inequality involves only the elementary concepts of least common multiple, natural logarithm, absolute value, and square root, yet it is equivalent to the Riemann hypothesis. A number of nontrivial zeros ρ of ζ (s) have actually been calculated and it has been verified that they lie on

358                                                                                     IV. Branches of Mathematics

the line Re s = 12 . One might wonder how some one can         ondary term of order n log log n, and so for all suffi-
computationally verify that a complex number ρ has            ciently large n, we have pn > n log n. By using explicit
          1
Re ρ = 2 . For example, suppose that we are carrying          zeta estimates, Rosser was able to put a numerical
calculations to (an unrealistically large) 1010 significant    bound on the “sufficiently large” in this statement, and
digits, and suppose we come across a zero with real           then, by checking small cases, was able to prove that
      1          100
part 2 + 10−10 . It would be far beyond the precision         in fact pn > n log n for every n. The paper of Rosser
of the calculation to be able to distinguish this num-        and Schoenfeld (1962) is filled with highly useful and
ber from 12 itself. Nevertheless, we do have a method         numerically explicit inequalities of this kind.
for seeing if particular zeros ρ satisfy Re ρ = 12 . There       Let us imagine for a moment that the Riemann
are two ideas involved, one of which comes from ele-          hypothesis had been proved. Mathematics is never
ment ary calculus. If we have a continuous real-valued         “used up,” as there is always that next problem around
function f (x) defined on the real numbers, we can             the bend. Even if we know that all of zeta’s nontriv-
some times use the intermediate value theorem to count         ial zeros lie on the line Im s = 12 , we can still ask how
zeros. For example, say f (1) > 0, f (1.7) < 0, f (2.3) >     they are distributed on this line. We have a fairly con-
0. Then we know for sure that f has at least one zero         cise understanding of how many zeros there should
between 1 and 1.7, and at least one zero between 1.7          be up to a given height T . In fact, as already found by
and 2.3. If we know for other reasons that f has exactly      Riemann, this count is about (1/2π )T log T . Thus, on
two zeros, then we have accounted for both of them.           average, the zeros would tend to get closer and closer
To locate zeros of the complex function ζ(s), a real-         with about (1/2π ) log T of them in a unit interval near
valued function g(t) is constructed with the property         height T .
that ζ( 12 + it) = 0 if and only if g(t) = 0. By looking at
                                                                 This tells us the average distance, or spacing, be-
sign changes for g(t) for 0 < t < T , we can get a lower
                                                          1   tween one zeta zero and the next, but there is much
bound for the number of zeros ρ of ζ with Re ρ = 2
                                                              more that one can ask about how these spacings are
and 0 < Im ρ < T . In addition, we can use the so-called
                                                              distributed. In order to discuss this question, it is very
argument principle from complex analysis to count the
                                                              convenient to “normalize” the spacings, so that the
exact number of zeros with 0 < Im ρ < T . If we are
                                                              average (normalized) gap between consecutive zeros
lucky and this exact count is equal to our lower bound,
                                                              is 1. By Riemann’s result, together with our assump-
then we have accounted for all of ζ’s zeros here, show-
                                   1                          tion of the Riemann hypothesis, this can be done if
ing that they all have real part 2 (and, in addition, that
                                                              we multiply a gap near T by (1/2π ) log T , or, equiv-
they are all simple zeros). If the counts did not match,
                                                              alently, if for each zero ρ we replace its imaginary
it would not be a disproof of the Riemann hypothesis,
                                                              part t = Im ρ by (1/2π )t log t. In this way we arrive
but certainly it would indicate a region where we should
                                                              at a sequence δ1 , δ2 , . . . of normalized gaps between
be checking the data more closely. So far, whenever
                                                              consecutive zeros, which on average are about 1.
we have tried this approach, the counts have matched,
though some times we have been forced to evaluate g(t)            Checking numerically, we see that some δn are large,
at very closely spaced points.                                with others close to 0; it is just the average that is 1.
   The first few nontrivial zeros were computed by Rie-        Mathematics is well equipped to study random phe-
mann himself. The famous cryptographer and early              nomena, and we have names for various probability
computer scientist alan turing [VI.94](/part-06/alan-turing-19121954) also computed          distributions [III.71](/part-03/probability-distributions), such as Poisson, Gaussian, etc.
some zeta zeros. The current record for this kind of          Is this what is happening here? These zeta zeros are
calculation is held by Gourdon, who has shown that            not random at all, but perhaps thinking in terms of
the first 1013 zeta zeros with positive imaginary part         randomness has promise.
all have real part equal to 12 , as predicted by Riemann.       In the early twentieth century, hilbert [VI.63](/part-06/david-hilbert-18621943) and
Gourdon’s method is a modification of that pioneered           Pólya suggested that the zeros of the zeta function
by Odlyzko and Schönhage (1988), who ushered in the           might correspond to the eigenvalues [I.3 §4.3](/part-01/fundamental-definitions) of some
modern age of zeta-zero calculations.                         operator [III.50](/part-03/linear-operators-and-their-properties). Now this is provocative! But what
   Explicit zeta-function calculations can lead to highly     operator? Some fifty years later in a now famous
useful explicit prime number estimates. If pn is the          conversation between Dyson and Montgomery at the
nth prime, then the prime number theorem implies              Institute for Advanced Study, it was conjectured that
that pn ∼ n log n as n → . nfty. Actually, there is a sec-         the nontrivial zeros behave like the eigenvalues of

$IV$ . $3$ .

Computational Number Theory

$1$ . $00$ . $80$ . $6$

Density

$0$ . $40$ . $200$ . $51$ . $01$ . $52$ . $02$ . $53$ . $0$

Normalized spacing

Figure $1$ Nearest-neighbor spacing

and the Gaudin distribution.

a random matrix from the so-called Gaussian unitary ensemble. This conjecture, now known as the GUE conjecture, can be numerically tested in various ways. Odlyzko has done this, and found persuasive evidence for the conjecture: the higher the batches of zeros one looks at, the more closely their distribution corresponds to what the GUE conjecture predicts. For example, take the 1041417089 numbers δ n with n starting at $10^{23} + 17,368,588,794$ . (The imaginary parts of these zeros are around $1$ .
$3 \times 10^{22}$ .) For each interval $(j/100$ , $(j + 1)/100]$ we can compute the proportion of these normalized gaps that lie in this interval, and plot it. If we were dealing with eigenvalues from a random matrix from the GUE, we would expect these statistics to converge to a certain distribution known as the Gaudin distribution (for which there is no closed formula, but which is easily computable). Odlyzko has kindly supplied me with the graph in figure $1$ , which plots the Gaudin distribution against the data just described (but leaves out every second data point to avoid clutter).
Like pearls on a necklace! The fit is absolutely remarkable. The vital interplay of thought experiments and numerical computation has taken us to what we feel is a deeper understanding of the zeta function. But where do we go next? The GUE conjecture suggests a connection to random matrix theory, and pursuing further connections seems promising to many. It may be that random matrix theory will allow us only to formulate

$359$

great conjectures about the zeta function, and will not lead to great theorems. But then again, who can deny the power of a glimpse at the truth? We await the next chapter in this development. $5$ Diophantine Equations and the ABC Conjecture Let us move now from the Riemann hypothesis to fermat’s last theorem [V.10](/part-05/fermats-last-theorem). Until the last decade it too was one of the most famous unsolved problems in mathematics, once even having a mention on an episode of Star Trek.
The assertion is that the equation x n  +  y $n = z$ n has no solutions in positive integers  x, y, z, n, where $n \ge 3$ . This conjecture had remained unproved for three and a half centuries until Andrew Wiles published a proof in 1995 . In addition, perhaps more important than the solution of this particular Diophantine equation (that is, an equation where the unknowns are restricted to the integers), the centuries-long quest for a proof helped establish the field of algebraic number theory [IV.1](/part-04/number-theory).
And the proof itself established a long-sought and wonderful connection between modular forms [III.59](/part-03/modular-forms) and elliptic curves. But do you know why Fermat’s last theorem is true? That is, just in case you are not an expert on all of the intricacies of the proof, are you surprised that there are in fact no solutions? In fact, there is a fairly simple heuristic argument that supports the assertion.
First note that the case $n = 3$ , namely $x^{3} + y^{3} = z^{3}$ , can be handled by elementary methods, and this in fact had already been done by euler [VI.19](/part-06/leonhard-euler-17071783). So, let us focus on the cases when $n \ge 4$ . 1 Let $S^{n}$ be the set of positive nth powers of integers. How likely is it that the sum of two members of S n is itself a member of S n ? Well, not at all likely, since Wiles has proved that this never occurs! But recall that we are trying to think naively. Let us try to mimic our situation by replacing the set S n with a random set.
In fact, we will throw all of the powers together into one set. Following an idea of Erdős and Ulam ( 1971 ) we create a set R by a random process: each integer m is considered independently, and the chance it gets thrown into R is proportional to $m - 3/4$ . This process would typically give us about $x^{1}/ {}^{4}$ numbers in R in the interval [1 , x], or at least this would be the order of magnitude. Now the total number of fourth and higher powers between $1$ and $x$ is also about $x^{1}/ {}^{4}$ , $1$ . Actually, Fermat himself had a simple proof in the case $n = 4$ , but we ignore this.

360                                                                                      IV. Branches of Mathematics

so we can take our random set R as modeling the sit-              The point is that events of the kind that we are con-
uation for these powers, namely the union of all sets          side ring—that a given integer is a power—are not quite
Sn for n ⩾ 4. We ask how likely it is to have a + b = c        independent. For instance, if A and B are both uth pow-
where a, b, and c all come from R.                             ers, then so is AB, and this idea is exploited in the
   The probability that a number m may be represented          infinite families just mentioned.
as a + b with 0 < a < b < m and a, b ∈ R is propor-               So how do we neatly bar these trivialities and come to
           
tional to 0<a<m/2 a−3/4 (m − a)−3/4 , since for each a         the rescue of our heuristic argument? One simple way
less than m the probability that a and m − a both lie in       to do this is to insist that the numbers x, y, z in (2) be
R is a−3/4 (m − a)−3/4 . Actually, there is a minor caveat     relatively prime. This gives no restriction whatsoever in
                                                      1        the Fermat case of equal exponents, since a solution to
when m is even, since then a = m − a when a = 2 m:
                                           1
to cover this, we add the single term ( 2 m)   −3/4
                                                    to the     x n + y n = zn with d the greatest common divisor of x,
above sum. Replacing each m − a in the sum with 2 m,
                                                      1        y, z leads to the coprime solution (x/d)n + (y/d)n =
we get a larger sum that is easy to estimate and turns         (z/d)n .
out to be proportional to m−1/2 . That is, the chance             Concerning Fermat’s last theorem, one might ask
that a random number m is a sum of two members of              how far it had actually been verified before the final
R is at most a certain quantity that is proportional to        proof by Wiles. The paper by Buhler et al. (1993) reports
m−1/2 . Now the events that would have to occur for            a verification for all exponents n up to 4 000 000. This
m to be given as such a sum involve numbers smaller            type of calculation, which is far from trivial, has its
than m, so the event that m itself is in R is indepen-         roots in nineteenth-century work of kummer [VI.40]
dent of these. Therefore, the probability that m is not        and early-twentieth-century work of Vandiver. In fact,
only the sum of two members of R, but also itself a            Buhler et al. (1993) also verify in the same range
member of R, is at most a quantity proportional to             a related conjecture of Vandiver dealing with cyclo-
                                                               tomic fields, but this conjecture may in fact be false
m−1/2 m−3/4 = m−5/4 . So now we can count how many
                                                               in general.
times we should expect a sum of two members of R to
                                                                  The probabilistic thinking above, combined with
itself be a member of R. This is at most a constant times
       −5/4 . But this sum is convergent, so we expect        computation of small cases, can carry us deeply into
  mm
                                                               some very provocative conjectures. The above prob-
only finitely many examples. Further, since the tail of
                                                               abilistic argument can easily be extended to suggest
a convergent series is tiny, we do not expect any large
                                                               that (2) has at most finitely many relatively prime solu-
examples.
                                                               tions x, y, z over all possible exponent triples u, v,
  Thus, this argument suggests that there are at most
                                                               w with 1/u + 1/v + 1/w < 1. This conjecture has
finitely many positive integer solutions to
                                                               come to be known as the Fermat–Catalan conjecture,
                     x u + y v = zw ,                    (2)   since it contains within it essentially Fermat’s last the-
                                                               orem and also the Catalan conjecture (recently proved
where the exponents u, v, w are at least 4. Since Fer-
                                                               by Mihăilescu) that 8 and 9 are the only consecutive
mat’s last theorem is the special case when u = v = w,
                                                               powers.
we would have at most finitely many counterexamples
                                                                  It is good that we do allow for the possibility that
to that as well.
                                                               there are some solutions, and this is where our main
   This seems tidy enough, but now we get a surprise!          topic of computing comes in. For example, since 1+8 =
There are actually infinitely many solutions to (2) in pos-     9, we have a solution to x 7 + y 3 = z2 , where x = 1,
itive integers with u, v, w all at least 4. For example,       y = 2, and z = 3. (The exponent 7 is chosen to insure
note that 174 + 344 = 175 . This is the case a = 1, b = 2,     that the reciprocal sum of the exponents is less than 1.
u = 4 of a more general identity: if a, b are positive inte-   Of course, we could replace 7 by any larger integer, but
gers, and c = au + b u , we have (ac)u + (bc)u = c u+1 .       since in each case the power involved is the number
Another way to get infinitely many examples is to build         1, they should all together be considered as just one
on the possible existence of just one example. If x, y,        example.) Here are the known solutions to (2):
z, u, v, w are positive integers satisfying (2), then with
                                                                                      1 n + 23 = 32 ,
the same exponents, we may replace x, y, z with avw x,
auw y, auv z for any integer a, and so get infinitely                                   25 + 72 = 34 ,
many solutions.                                                                      132 + 73 = 29 ,

IV.3.   Computational Number Theory                                                                                   361

                       27 + 173 = 712 ,                       z w/u and y ⩽ zw/v , so that
                        5      4       2
                       3 + 11 = 122 ,                                   rad(x u y v zw ) ⩽ xyz ⩽ (zw )41/42 .
                 8             2           3
              33 + 1 549 034 = 15 613 ,                       Thus, the ABC conjecture with ε = 1/42 implies that
           14143 + 2 213 4592 = 657 ,                         there are at most finitely many solutions.
          92623 + 15 312 2832 = 1137 ,                           The ABC conjecture has many other marvelous con-
                                                              sequences; for a delightful survey, see Granville and
                 177 + 76 2713 = 21 063 9282 ,
                                                              Tucker (2002). In fact, the ABC conjecture and its gen-
                 438 + 96 2223 = 30 042 9072 .                eralizations can be used to prove so many things that I
The larger members were found in an exhaustive com-           have joked that it is beginning to resemble a false state-
puter search by Beukers and Zagier. Perhaps this is the       ment, since a false statement implies everything. But
complete list of all solutions, or perhaps not—we have        probably the ABC conjecture is true. Indeed, though a
no proof.                                                     bit harder to see, the Erdős–Ulam probabilistic argu-
                                                              ment can be modified to provide heuristic evidence for
   However, for particular choices of u, v, w, more can
                                                              it too.
be said. Using results from a famous paper of Faltings,
                                                                 Basic to this argument is a perfectly rigorous result
Darmon and Granville (1995) have shown that for any
                                                              on the distribution of integers n for which rad(n)
fixed choice of u, v, w with reciprocal sum at most 1,
                                                              is below some bound. These ideas, which lead to a
there are at most finitely many coprime triples x, y,
                                                              more explicit version of the ABC conjecture, are worked
z solving (2). For a particular choice of exponents, one
                                                              through in the thesis of van Frankenhuijsen and by
might try to actually find all of the solutions. If it can
                                                              Stewart and Tenenbaum. Here is a slightly weaker state-
be handled at all, this task can involve a delicate inter-
                                                              ment: if a + b = c are relatively prime positive integers
play between arithmetic geometry [IV.5](/part-04/arithmetic-geometry), effective
                                                              and c is sufficiently large, then we have
methods in transcendental number theory, and good                                                √
hard computing. In particular, the exponent triple sets                        rad(abc) > c 1−1/ log c .             (3)
{2, 3, 7}, {2, 3, 8}, {2, 3, 9}, and {2, 4, 5} are known to
                                                                 One might like to know how the numerical evi-
have all their solutions in the above table. See Poonen
                                                              dence stacks up against (3). This inequality asserts
et al. (2007) for the treatment of the case {2, 3, 7} and                                                
                                                              that if rad(abc) = r , then log(c/r )/ log c < 1. So,
links to other work.                                                                                              
                                                              let T (a, b, c) denote the test statistic log(c/r )/ log c.
   the abc conjecture [V.1](/part-05/the-abc-conjecture) of Oesterlé and Masser            There is a Web site maintained by Nitaj that contains a
is deceptively simple. It involves positive integer solu-     wealth of information about the ABC conjecture (www.
tions to the equation a + b = c, hence the name. To           math.unicaen.fr/ ̃nitaj/abc.html). Checking the data,
put some meaning into a + b = c, we define the radi-           there are quite a few examples with T (a, b, c) ⩾ 1, the
cal of a nonzero integer n as the product of the primes       champion so far being
that divide n, denoting this as rad(n). So, for exam-
                                                               a = 72 · 412 · 3113 = 2 477 678 547 239
ple, rad(10) = 10, rad(72) = 6, and rad(65 536) = 2.
In particular, high powers have small radicals in com-         b = 1116 · 132 · 79 = 613 474 843 408 551 921 511
paris on to the number itself, and so do many other             c = 2 · 33 · 523 · 953 = 613 474 845 886 230 468 750
numbers. Basically, the ABC conjecture asserts that if
                                                               r = 2 · 3 · 5 · 7 · 11 · 13 · 41 · 79 · 311 · 953
a + b = c, then the radical of abc cannot be too small.
More specifically we have the following.                          = 28 828 335 646 110,
                                                              so that
The ABC conjecture. For each ε > 0 there are at most
                                                                                        log(c/r )
finitely many relatively prime positive integer triples a,               T (a, b, c) =            = 2.43886 . . . .
                                                                                            log c
b, c with a + b = c and rad(abc) < c 1−ε .
                                                              Is it always true that T (a, b, c) < 2.5?
  Note that the ABC conjecture immediately solves the            One can get carried away with heuristics, for getting
Fermat–Catalan problem. Indeed, if u, v, w are positive       that one is not actually proving a theorem, but mak-
integers with 1/u + 1/v + 1/w < 1, then it is easily          ing a guess. Heuristics are often based on the idea of
found that we must have 1/u + 1/v + 1/w ⩽ 41/42.              randomness, and all bets are off if there is some under-
Suppose we have a coprime solution to (2). Then x ⩽           lying structure. But how do we know that there is no

$362$

underlying structure? Consider the case of an “abcd conjecture.” Here we consider integers a, b, c, and d with $a + b + c + d = 0$ . The condition that the terms be relatively prime now takes on two possible meanings: pairwise relatively prime or no nontrivial common divisor of all four numbers. The first condition seems more in the spirit of the three-term conjecture, but may be a tad too strong in that it disallows using any even numbers. So say we take the four terms with no pair having a common factor greater than $2$ .
Under this condition, our heuristics seem to suggest that for each $ε > 0$ , we have rad (abcd )${}^{1} + ε <$ max |a| , |b| , |c| , $|d|(4)$

for at most finitely many cases. But consider the polynomial identity

(x + 1)5 = (x - 1)5 + 10(x2 + 1)2 - 8 (suggested to me by Granville). If we take x as a multiple of $10$ , the four terms involved in the identity are pairwise relatively prime except for the last two, which have a common factor of $2$ . Let $x = 11^{k} - 1$ , which is a multiple of $10$ . The largest of the four terms is $11^{5k}$ , and the radical of the product of the four terms is at most 110(11 k - 2) ( (11 k - 1)2 + 1) < 110 · $11^{3k}$ . The heuristics are saying that this cannot be, yet here it is right before our eyes!
What is happening is that the polynomial identity is supplying an underlying structure. For the four-term abcd conjecture, Granville conjectures that for each $ε > 0$ , all counterexamples to (4) come from at most finitely many polynomial families. And the number of polynomial families grows to infinity as ε shrinks to $0$ . We have looked here at only a small portion of the field of Diophantine equations, and then we have looked mainly at the dynamic relationship between heuristics and computational searches for small solutions.
For much more on the subject of computational Diophantine methods, see Smart ( 1998 ). Heuristic arguments often assume that the objects of study behave as if they were random, and we have visited several cases where it is useful to think this way. Other examples include the twin prime conjecture (there are infinitely many primes p such that $p + 2$ is prime), Goldbach’s conjecture (every even number larger than $2$ is the sum of two primes), and count less other conjectures in number theory. Often the computational evidence for the probabilistic view is striking,

IV. Branches of Mathematics

even overwhelming, and we become convinced of the truth of our model. But on the other hand, if it is this pseudo-proof that is all we have to go on, we may still be very far from the truth. Nevertheless, the interplay of computations and heuristic thinking forms an indispensable part of our arsenal, and mathematics is the richer for it. Remarks and Acknowledgments. I would like to recommend to the reader the book by Cohen ( 1993 ) for a discussion of computational algebraic number theory, a subject that is neglected in this article.
I am grateful to the following people, who generously shared their expertise: X. Gourdon, A. Granville, A. Odlyzko, E. Schaefer, K. Soundararajan, C. Stewart, R. Tijdeman, and M. van Frankenhuijsen. I am also thankful to A. Granville and D. Pomerance for helpful suggestions with the exposition. I was supported in part by NSF grant DMS - 0401422 .

Further Reading

Agrawal, M., N. Kayal, and N. Saxena. 2004 . PRIMES is in P. Annals of Mathematics $160$ : $781 - 93$ . Buhler, J., R. Crandall, R. Ernvall, and T. Metsänkylä. 1993 . Irregular primes and cyclotomic invariants to four million. Mathematics of Computation $61$ : $151 - 53$ . Cohen, H. 1993 . A Course in Computational Algebraic Number Theory. Graduate Texts in Mathematics, volume $138$ . New York: Springer. Crandall, R., and C. Pomerance. 2005 . Prime Numbers: A Computational Perspective, $2nd$ edn. New York: Springer. Darmon,  H.,$and$ A. Granville. 1995 .
On the equations $z^{m} =$ F (x , y) and Ax p  +  By $q = Cz$ r . Bulletin of the London Mathematical Society $27$ : $513 - 43$ . Erdős, P., and S. Ulam. 1971 . Some probabilistic remarks on Fermat’s last theorem. Rocky Mountain Journal of Mathematics $1$ : $613 - 16$ . Granville, A., and T. J. Tucker. 2002 . It’s as easy as abc. Notices of the American Mathematical Society $49$ : $1224 - 31$ . Odlyzko, A. M., and A. Schönhage. 1988 . Fast algorithms for multiple evaluations of the Riemann zeta function. Transactions of the American Mathematical Society $309$ : $797 - 809$ . Poonen, B., E.
Schaefer, and M. Stoll. 2007 . Twists of X ( $7$ ) and primitive solutions to $x^{2} + y^{3} = z^{7}$ . Duke Mathematics Journal $137$ : $103 - 58$ . Rosser, J. B., and L. Schoenfeld. 1962 . Approximate formulas for some functions of prime numbers. Illinois Journal of Mathematics $6$ : $64 - 94$ . Smart, N. 1998 . The Algorithmic Resolution of Diophantine Equations. London Mathematical Society Student Texts, volume $41$ . Cambridge: Cambridge University Press.