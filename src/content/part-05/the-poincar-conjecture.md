# The Poincaré Conjecture

$714$

general harder than problems in P. The P versus N P problem asks for a proof that the complexity classes P and N P really are distinct. For a detailed discussion of the problem, see computational complexity [IV.20](/part-04/computational-complexity).

$V$ . $25$

The Poincaré Conjecture

The Poincaré conjecture is the statement that a compact [III.9](/part-03/compactness-and-compactication) smooth n-dimensional manifold that is homotopy equivalent [IV.6](/part-04/algebraic-topology) to the n-sphere S n must in fact be homeomorphic to S n . One can think of a compact manifold as a manifold that lives in a finite region of R m for some m and that has no boundary: for example, the $2$ - sphere and the torus are compact manifolds living in $R^{3}$ , while the open unit disk or an infinitely long cylinder is not.
(The open unit disk does not have a boundary in an intrinsic sense, but its realization as the set { (x , y) : x ${}^{2} + y^{2} < 1$ has the set { (x ,  y) : $x^{2} + y^{2} = 1$ as its boundary .) A manifold is called simply connected if every loop in the manifold can be continuously contracted to a point. For instance, a sphere of dimension greater than $1$ is simply connected but a torus is not (since a loop that “goes around” the torus will always go around the torus, however you continuously deform it).
In three dimensions, the Poincaré conjecture asks whether two simple properties of spheres, compactness and simple connectedness, are enough to characterize spheres. The case $n = 1$ is not interesting: the real line is not compact and a circle is not simply connected, so the hypotheses of the problem cannot be satisfied.
poincaré [VI.61](/part-06/jules-henri-poincar-18541912) himself solved the problem for $n = 2$ early in the twentieth century, by completely classifying all compact $2$ - manifolds and noting that in his list of all possible such manifolds only the sphere was simply connected. For a time he believed that he had solved the three-dimensional case as well, but then discovered a counterexample to one of the main assertions of his proof. In 1961 , Stephen Smale proved the conjecture for $n \ge 5$ , and Michael Freedman proved the $n = 4$ case in 1982 .
That left just the three-dimensional problem open. Also in 1982 , William Thurston put forward his famous geometrization conjecture, which was a proposed classification of three-dimensional manifolds. The conjecture asserted that every compact $3$ - manifold can be cut up into submanifolds that can be given metrics [III.56](/part-03/metric-spaces) that turn them into one of eight particularly symmetrical geometric structures. Three of V.
Theorems and Problems these structures are the three-dimensional versions of Euclidean, spherical, and hyperbolic geometry (see [I.3](/part-01/fundamental-definitions) ). Another is the infinite “cylinder” $S^{2} \times R$ : that is, the product of $a_{2}$ - sphere with an infinite line. Similarly, one can take the product of the hyperbolic plane with an infinite line and obtain a fifth structure. The other three are slightly more complicated to describe. Thurston also gave significant evidence for his conjecture by proving it in the case of so-called Haken manifolds.
The geometrization conjecture implies the Poincaré conjecture; both were proved by Grigori Perelman, who completed a program that had been set out by Richard Hamilton. The main idea of this program was to solve the problems by analyzing ricci flow [III.78](/part-03/ricci-flow). The solution was announced in 2003 and checked carefully by several experts over the next few years. For more details, see differential topology [IV.7](/part-04/dierential-topology).

$V$ . $26$

The Prime Number Theorem and

the Riemann Hypothesis

How many prime numbers are there between $1$ and n? A natural first reaction to this question is to define

$\pi(n)$ to be the number of prime numbers between $1$ and n and to search for a formula for $\pi$ (n). However, the primes do not have any obvious pattern to them and it has become clear that no such formula exists (unless one counts highly artificial formulas that do not actually help one to calculate $\pi$ (n)). The standard reaction of mathematicians to this kind of situation is to look instead for good estimates. In other words, we try to find a simply defined function f (n) for which we can prove that f (n) is always a good approximation to $\pi$ (n) .
The modern form of the prime number theorem was first conjectured by gauss [VI.26](/part-06/carl-friedrich-gauss-17771855) (though a closely related conjecture had been made by legendre [VI.24](/part-06/adrien-marie-legendre-17521833) a few years earlier). He looked at the numerical evidence, which suggested to him that the “density” of primes near n was about $1/$ log  n, in the sense that a randomly chosen integer near n would have a probability of roughly $1/$ log $n$ of being a prime.
This leads to the conjectured approximation of n  /  log n for $\pi$ (n), or to the slightly more sophisticated approximation n dx $\pi(n)$ ≃ . log $x_{0}$

The function defined by the integral on the right-hand side is called li (n) (which stands for the “logarithmic

$V$ . $27$ .

Problems and Results in Additive Number Theory integral” of n). Some care is needed in interpreting the integral because log $1 = 0$ , but one can avoid this problem by integrating from $2$ to n instead, which changes the function by just an additive constant.
The prime number theorem, proved independently by hadamard [VI.65](/part-06/jacques-hadamard-18651963) and de la vallée poussin [VI.67](/part-06/charles-jean-de-la-valle-poussin-18661962) in 1896 , states that li (n) is indeed a good approximation to $\pi$ (n), in the sense that the ratio of the two functions tends to $1$ as n tends to infinity. This result is considered one of the great theorems of all time, but it is by no means the end of the story. The proofs of Hadamard and de la Vallée Poussin used the riemann zeta function [IV.2](/part-04/number-theory) ζ (s).
The Riemann zeta function is defined to be $1 - s + 2 - s + 3 - s +$ · · · whenever s is a complex number with real part greater than $1$ ; this expression defines a holomorphic function [I.3](/part-01/fundamental-definitions), which can be extended (by analytic continuation) to a function that is holomorphic on the entire complex plane, except for a pole at $1$ . This function has zeros, known as “trivial zeros,” at all negative even integers.
Riemann proved that the prime number theorem was equivalent to the assertion that the only “nontrivial zeros” were inside the critical strip, which consists of those complex numbers with real part strictly between $0$ and $1$ . He also formulated what is often held to be the most important unsolved problem in mathematics, now known as the Riemann hypothesis: that in fact $1$ the nontrivial zeros all have real part equal t$o^{2}$ .
This assertion about the zeros of the zeta function has been shown to be equivalent to a stronger form of the prime number theorem, which states not just that $\pi$ (n) / li (n) √ tends to $1$ , but even that $|\pi(n) - li(n)| \le n$ log $n$ for every $n \ge 3$ . Since $l$i( n ) is around $n/$ log  n, which is √ much bigger than n log n, this would mean that the error $|\pi(n) - li(n)|$ was extremely small compared with $\pi$ (n) or li (n) themselves. The importance of the Riemann hypothesis goes far beyond its consequences for the distribution of primes:
hundreds of statements in number theory have been shown to follow from it. This is particularly true when one considers generalizations of the Riemann hypothesis that apply to a wider class of L-functions [III.47](/part-03/l-functions) . For example, analogues of the Riemann hypothesis for Dirichlet L-functions imply very good estimates for the distribution of primes in arithmetic progressions, from which many further consequences follow. The prime number theorem and the Riemann hypothesis are discussed in more detail in analytic number theory [IV.2](/part-04/number-theory). $715V$ .
$27$ Problems and Results in Additive Number Theory Is every even number greater than $4$ the sum of two odd primes? Are there infinitely many primes p such that $p + 2$ is also a prime? Is every sufficiently large positive integer the sum of four cubes? These three questions are all famous unsolved problems in number theory: the first is called the Goldbach conjecture, the second is the twin prime conjecture (discussed in some detail in analytic number theory [IV.2](/part-04/number-theory)), and the third is a special case of Waring’s problem, which we shall discuss later.
These three problems belong to an area of mathematics known as additive number theory. In order to say in general terms what this area is, it is useful to make some simple definitions. Suppose that A is a set of positive integers. Then the sumset of A, denoted A + A, is the set of all x + y such that $x$ and  y(which are allowed to be equal) both belong to A. For example, if A is the set 1 , $5$ , $9$ , $10$ , $13$ , then $A + A$ is the set 2 , $6$ , $10$ , $11$ , $14$ , $15$ , $18$ , $19$ , $20$ , $22$ , $23$ , $26$ .
Similarly, the difference set, denoted $A - A,$ is the set of all $x - y$ such that $x$ and $y$ both belong to A. In the above example, $A - A = { - 12}$ , $- 9$ , $- 8$ , $- 5$ , $- 4$ , $- 3$ , $- 1$ , $0$ , $1$ , $3$ , $4$ , $5$ , $8$ , $9$ , $12$ . Using this language, we can state two of our three problems very succinctly. Let P be the set of all odd primes and let C be the set of all cubes. Then Goldbach’s conjecture is the statement that P + P is the set 6 , $8$ , $10$ , $12$ , . . .
}, and the special case of Waring’s problem asks whether every sufficiently large integer belongs to $C + C + C + C.$ The twin prime conjecture is slightly more complicated: it states not just that $2$ belongs to the set P - P but that it does so “infinitely many times.” (In a similar way, if A is the set in the previous paragraph, then $A - A$ contains the number $4$ three times .) These problems are notoriously difficult. However, remarkably, there are some closely related problems that look just as hard at first, but which have been solved.
For instance, Vinogradov’s three-primes theorem is the statement that every sufficiently large odd integer is the sum of three odd primes. With out the “sufficiently large” this would answer the ternary Goldbach problem, which asks whether every odd number from $9$ onward is a sum of three odd primes. (How large is “sufficiently large”? Well, until recently you needed your number to have about 7000000 digits, but in 2002 this was reduced to under 1500 digits .) As for Waring’s

716                                                                                      V. Theorems and Problems

problem, it is known that every sufficiently large pos-        function [III.25](/part-03/the-exponential-and-logarithmic-functions) to reformulate our counting problem
itive integer is a sum of seven cubes. More generally,       as a problem about estimating a certain integral.
it seems likely that, for any k, every sufficiently large         As is customary in this area, let us write e(x) instead
integer can be written as a sum of at most 100 k kth          of e2π ix . The two basic properties that we shall use of
powers (where 100 is just a randomly chosen largish          the function e(x) are that e(x+y) = e(x)e(y) and that
                                                              1
number—it is possible that even 4 k kth powers are             0 e(nx) dx = 1 if n = 0, and 0 if n is any other integer.
                                                                                                                 
enough), and although a proof of this is well beyond         Let us also adopt the convention that if we write p⩽n ,
today’s mathematical technology, it has been shown           then we are summing over all odd primes less than or
that a little over k log k kth powers are enough. Since      equal to n. Now define a function F (x) by the formula
                                                                      
log k is a very slowly growing function, this result is,     F (x) = p ⩽N e(px). That is,
in a certain sense, not too far from a solution to the
                                                             F (x) = e(3 x) + e(5 x) + e(7 x) + e(11 x) + · · · + e(qx),
problem.
   How does one obtain results such as these? Some of        where q is the largest prime less than or equal to
the proofs are pretty complicated, so we cannot give         n. This is a sum of exponentials—hence the phrase
a full answer here. However, we can at least explain         “exponential sums.” Next, we consider the cube of this
one idea that is fundamental to many of the argu-            function:
ments, namely the use of exponential sums. Let us illus-       F (x)3 = (e(3 x) + e(5 x) + e(7 x) + · · · + e(qx))3 .
trate it by looking at the beginning of the proof of the
Vinogradov three-primes theorem.                             When we multiply out the right-hand side, we obtain
   Imagine, then, that we have a very large odd integer      the sum of all terms of the form e(p1 x)e(p2 x)e(p3 x),
n and we wish to prove that it is a sum of three odd         where p1 , p2 , and p3 are primes between 3 and q.
                                                                                                   1
primes. Here is an argument that strongly suggests that         The integral we shall look at is 0 F (x)3 e(−nx) dx.
our task is impossible: if n is over three times larger      From our discussion in the previous paragraph, we
than the largest known prime, as it may very well be,        know that this will be the sum of all integrals of the
                                                                    1
then we cannot produce three primes that add up to           form 0 e(p1 x)e(p2 x)e(p3 x)e(−nx) dx. Now the first
n with out finding a new prime. Indeed, we could take          basic property of e(x) tells us that this last integral
                                                                          1
                                     100
n to be astronomically large, 1010 + 1, say, and then        is equal to 0 e((p1 + p2 + p3 − n)x) dx, and the sec-
1                                                            ond one then tells us that it is 1 if p1 + p2 + p3 =
3 n would be far beyond any prime that has ever been
discovered or is ever likely to be discovered.               n and 0 otherwise. Therefore, when we sum over all
   This argument is, however, flawed, and the clue to         possible triples p1 , p2 , p3 of odd primes less than or
what is wrong with it lies in the word “produce.” We         equal to n, we get a contribution of 1 for each triple
do not have to produce the three primes to show              that adds up to n and 0 for all other triples. In other
                                                                                     1
that they exist, any more than Euclid had to specify         words, the integral 0 F (x)3 e(−nx) dx exactly equals
an infinite sequence of primes in order to show that          the number of ways of writing n as a sum of three
there were infinitely many. (For a proof that there are,      odd primes.
see [IV.2 §2](/part-04/number-theory).) But, one might ask, what alternative could      This “reduces” our problem to that of estimating
                                                                            1
there possibly be to actually finding three odd primes        the integral 0 F (x)3 e(−nx) dx. But the function F (x)
that add up to n?                                            looks rather difficult to analyze. Is it really feasible
                                                                                                  
   This question has a beautifully simple answer: we         to estimate an expression such as p ⩽N e(px), which
shall attempt to count, or rather estimate, the number       mixes prime numbers with exponentials?
of triples p1 , p2 , p3 of odd primes such that p1 + p2 +       Surprisingly, it is. The details are complicated, but
p3 = n. If the estimate we manage to obtain is rather        the fact that it can be done becomes less mysterious
large, and if in addition we can show that it is reason-     after one thinks for a moment about which exponen-
ably accurate, then the actual number of such triples        tial sums we definitely can estimate. Are there at least
must also be rather large. This will imply that there is     some sets A of integers for which we can handle sums
                                                                          
such a triple, and will not require us to “produce” one.     of the form a∈A e(ax)? Yes there are: arithmetic pro-
   However, our answer immediately raises a difficult-         gressions. Suppose A is the set {s, s + d, s + 2 d, . . . ,
looking question: how do we estimate the number of           s + (m − 1)d}: that is, the arithmetic progression of
such triples? This is where exponential sums come in.        length m and common difference d that starts at s.
We shall use certain properties of the exponential           Then, using the basic properties of e(x), we find that

$V$ . $27$ .

Problems and Results in Additive Number Theory a $\in$ A e (ax) is e (sx) + {}e(({}s + {}d)x) + · · · + {}e(({}s + ({}m - {}1)d)x)= {}e(sx) + {}e(dx) e $(sx) +$ · · · $+ e((m - {}^{1})dx)$ e (sx ) = {}e(sx ) ({}1 + {}e(dx) + {}e(dx)2 + · · · + {}e(dx)m - {}1) . This last expression is the sum of a geometric progression that starts at e (sx) and has common ratio e (dx). Using the standard formula and the basic properties of e (x), we deduce that e (sx)  -  e ((s  +  dm) x) e $(ax) =$ . $1 - e(dx ) a\inA$

Such expressions are useful because they can often be shown to be small. Suppose, for instance, that $|1 - e(dx)|$ is at least as big as some constant c. We know that $|e(sx) - e((s + dm)x)| \le 2$ , so the modulus of the right-hand side is at most $2/$ c . If c is not too small, then this shows that there is a huge amount of cancellation in the sum a $\in$ A e (ax) : we added together m numbers of modulus $1$ and obtained a number of modulus no bigger than $2/c$ . For certain values of x, we can use this simple observation to help us estimate the sum p $\in$ P e (px).
What we need to do is express the sum over P as a combination of sums over arithmetic progressions, and this is a very natural thing to do, since P consists of all those integers up to n that do not lie in certain arithmetic progressions (such as $14$ , $21$ , $28$ , $35$ , $42$ , . . .). So we can n begin by taking the sum t $= {}^{1}$ e (tx). From this we need to subtract the contribution from all even integers, which is $t \le n/ {}^{2}e(2tx)$ . We also need to subtract the contribution from multiples of $3$ , apart from $3$ itself. This contribution is ${}^{1} < t \le n/ {}^{3}e(3tx)$ .
Now we find that we have subtracted the contribution from multiples of $6$ twice, so we correct for that by adding $t \le n/ {}^{6}e(6tx)$ . This process can be continued, and it leads to a way of decomposing the sum over primes into a combination of sums over geometric progressions. If x is not close to a rational with small denominator, then most of the common ratios are far from $1$ , so most of the sums over progressions are small. Unfortunately, there are too many of them for this simple argument to lead to a useful estimate.
However, there is a more sophisticated argument with a similar flavor that does. What happens if x is close to a rational with small denominator? For example, what can we say about the sum $p \le ne(p/3)$ ? Here we use more direct methods: it is known that roughly half of all primes are $1$ (mod $3$ ) and half are 2($mod$3) (see [IV.2](/part-04/number-theory) ), which tells us that $717$ this sum is roughly $(|P|/2)( e(p/3) + e(2p/3))$ , where |P| denotes the size of the set P .
For very similar reasons, in Waring’s problem one finds one self wanting to know about exponential sums m such as G (x) = t $= {}^{0}$ e (t k x). Again, one can some times estimate these by reducing them to sums of geometric progressions. This is easiest to show in the case k $= 2$ . The idea is to look not at G (x) directly but at $|G(x)|^{2}$ , which a moment’s calculation shows is equal m m to $t = {}^{0u} = {}^{0}e((t^{2} - u^{2})x)$ . Now $t^{2} - u^{2} = (t + u)(t -$ u), so we can change variables, setting $v = t + u$ and $w$ = t - u.
This gives us the sum (v , w) $\in$ V e (vwx), where V is the set of all (v , w) such that (v + w) $/2$ and $(v - w)/2 ($ which equal $t$ and  u, respectively) are both between $0$ and m. For each v the set of possible values of w is an arithmetic progression, so we have decomposed $|G(x)|^{2}$ into $a$ sum of sums of geometric progressions, one for each v. So far we have been looking at so-called direct problems in additive number theory. These are problems where one specifies a set and then tries to understand its sumset or difference set. We have only scratched the surface of the subject:
other related results and techniques are discussed in [IV.2](/part-04/number-theory) (see in particular sections $7$ , $9$ , and 11). Direct problems have a long history, but in recent years another class of problems, called inverse problems, have become an important focus of research as well. These concern the following broad question: if you are given information about a sumset or a difference set, what can you deduce about the original set? We end by describing one of the highlights of this kind of additive number theory, called Freiman’s theorem.
It is not hard to prove that if A is any set of integers of size n, then the size of $A + A$ must be between $2n - 1$ and $n(n + 1)/2$ . (The first happens if A is an arithmetic progression and the second happens if all the sums you can make are different .) What can we say about A if the size of A + A is at most $100n$ , or, more generally, is at most Cn for some constant C that remains fixed as n tends to infinity? Suppose that we can find an arithmetic progression P of size at most $50n$ such that A is a subset of P . Then A + A is a subset of P + P , which has size at most $100n - 1$ .
So if A is two percent of an arithmetic progression, then $A + A$ has size at most $100n$ . However, there are other ways of producing such sets. Suppose, for instance, that A consists of all numbers of up to seven digits such that the third, fourth, and fifth digits from the end are $0$ : that is, numbers such as 3500026

718                                                                                        V. Theorems and Problems

or 99 000 90. There are 100 . imes 100 = 10 000 of these. If       it his theorem a aureum, or golden theorem), is consid-
we add two of them together, then we get a number like        ered a crown jewel of number theory, and with good
138 00 162 or 141 00 068, which is made up of a num-          cause. Where as its statement could be rediscovered
ber between 0 and 198, followed by two 0 s, followed           by a sufficiently ingenious student (indeed, it actu-
by a second number between 0 and 198 (written with            ally has been rediscovered on a regular basis at the
0 s in front if these are needed to make it up to three        Arnold Ross mathematics summer program for several
digits). There are 199 . imes 199 of these, which is less than     decades), rare is the student who comes up with a proof
40 000. Therefore, the size of A + A is less than four        unassisted.
times the size of A. However, A does not fill up two              The law is most conveniently stated in a formulation
percent of any arithmetic progression P : such a pro-         due to legendre [VI.24](/part-06/adrien-marie-legendre-17521833). For n an integer not divisible
gression would have to have common difference 1 and            by the prime p, write ( np ) = 1 if n is congruent to some
include both the numbers 0 and 99 000 99, and 10 000          perfect square modulo p, and ( n   p ) = −1 if it is not. Then
is nothing like two percent of 9 900 100.                     quadratic reciprocity states the following. (The prime 2
   However, A is a very structured set: it is an example      must be treated separately.)
of a two-dimensional arithmetic progression. Roughly
                                                              Theorem (quadratic reciprocity). Suppose that p and
speaking, an ordinary, or one-dimensional, arithmetic
progression is one that you build up by starting with         q are two different primes, neither equal to 2. Then
                                                                p    q
a number s and repeatedly adding another one, d,              ( q )( p ) = −1 if p and q are both congruent to 3
                                                                               p   q
called the common difference. You build up a two-              modulo 4, and ( q )( p ) = 1 otherwise.
dimensional arithmetic progression by using two “com-                                                          p    q
                                                                 For instance, if p = 13 and q = 29, then ( q )( p ) = 1.
mon differences” d1 and d2 . That is, you have a start-        Since 29 is congruent modulo 13 to the perfect square
ing number s and you look at numbers of the form              16, it must be that 13 is congruent to some perfect
s + ad1 + bd2 , specifying that a should be between 0         square modulo 29, and in fact 100 = 3 · 29 + 13.
and m1 − 1 and b should be between 0 and m2 − 1.                 This statement is simple but also mysterious, be-
Our set A is a two-dimensional progression with s = 0,        cause it violates our intuition that congruences mod-
d1 = 1, d2 = 100 000, and m1 = m2 = 100.                      ulo different primes should act independently. For
   In a similar way one can define higher-dimensional          instance, the Chinese remainder theorem asserts that
progressions. It is not hard to show that if P is an r -      (in a suitably precise sense) knowing that a random
dimensional progression, then the size of P + P is less       integer is odd or even does not prejudice it toward
than 2 r times the size of P . Therefore, if A is a subset     having any particular remainder modulo 3. Number
of P and the size of P is at most C times the size of A,      theorists are fond of using geometric language to
then the size of A + A is at most the size of P + P , which   describe this situation, referring to phenomena asso-
is at most 2 r C times the size of A.                          ciated with congruences modulo a single prime (or
   This tells us that if A is a large subset of a low-        a power of a single prime) as local phenomena (see
dimensional arithmetic progression, then A has a small        local and global in number theory [III.51](/part-03/local-and-global-in-number-theory)). The
sumset. Freiman’s theorem is the remarkable statement         Chinese remainder theorem can be interpreted as say-
that these are the only sets with small sumsets. That         ing that local phenomena at one point really are local,
is, if A + A is not much larger than A, then there must       in that they do not influence local phenomena at
be some low-dimensional arithmetic progression P that         another point. However, just as a particle physicist can-
contains A and is not much bigger than A. Exponential         not explain the behavior of the universe by analyz-
sums are vital for the proof of this theorem as well.         ing individual particles in isolation, one cannot hope
Freiman’s theorem has had many applications, and is
                                                              to understand the behavior of integers by looking at
likely to have many more.
                                                              individual primes in isolation. Quadratic reciprocity
                                                              thus emerges as one of the first known examples of
V.28 From Quadratic Reciprocity to                            a global phenomenon, proving to be a “fundamental
     Class Field Theory                                       force” that binds together two different primes. The
        Kiran S. Kedlaya                                      interplay between local and global is built thoroughly
                                                              into our modern understanding of number theory, but
The law of quadratic reciprocity, discovered by euler         the phenomenon of quadratic reciprocity was where it
[VI.19](/part-06/leonhard-euler-17071783) and first proved by gauss [VI.26](/part-06/carl-friedrich-gauss-17771855) (who dubbed          first came to light.

$V$ . $28$ .

From Quadratic Reciprocity to Class Field Theory Another indication of the fundamental nature of quadratic reciprocity is that it admits proofs using many different techniques. Gauss himself devised eight proofs in his lifetime, and nowadays dozens of proofs are available. These suggest numerous directions of generalization; here we will focus on the direction that led historically to class field theory.
Among the many fascinating sidelights that this will force us to omit is the theory of Gauss sums and its surprisingly diverse range of applications, such as Kolyvagin’s work on the birch-swinnerton-dyer conjecture [V.4](/part-05/the-birchswinnerton-dyer-conjecture), and the use of number theory in cryptography [VII.7](/part-07/mathematics-and-cryptography) and other areas of computer science. Euler had sought reciprocity laws for perfect third and fourth powers, but had had limited success. Gauss succeeded in formulating such laws (but not proving them;
that fell to Eisenstein later) by realizing that one could only properly understand them by stepping out of the ring of integers. Let us see this explicitly for fourth powers. Let $p$ and $q$ be primes that are both congruent to $1$ modulo $4$ . The reciprocity between p being congruent to a fourth power modulo q and vice versa cannot be easily stated in terms of $p$ and $q$. Instead, we must recall a result of fermat [VI.12](/part-06/pierre-fermat-1601665) :
we can write $p = a^{2} + b^{2}$ and $q = c^{2} + d^{2}$ , where each of the pairs (a , b) and (c , d) is unique up to changing signs and ordering. In other words, in the ring of complex numbers whose real and imaginary parts are integers (now called the Gaussian integers), we have $p = (a + bi ) (a - bi)$ and $q = (c + di ) (c - di)$ . Gauss defined an analogue of the Legendre symbol as follows. It was already known to Euler that n ≡ $n(p - {}^{1})/ {}^{2}$ (mod p);
p to see that the right-hand side is either $1$ or $- 1$ , note that it squares to $1$ by fermat’s little theorem [III.58](/part-03/modular-arithmetic), and the equation $x^{2} = 1$ has just these two roots. Gauss similarly defined

$c + dia + bi^{4}$

to be i k , for the unique choice of k modulo $4$ for which

$22i^{k}$ ≡ $(c + di ) (a + b - 1)/4 = (c + di ) (p - {}^{1})/ {}^{4}$ (mod a  +  bi). Here we say that two integers are congruent mod a  +  bi if their difference is a multiple of a  +  bi by a Gaussian integer. The existence of such k again follows from Fermat’s little theorem: if you expand (c  +  di) p , then all the binomial coefficients are multiples of p apart from the first and the last, so you obtain c p  +  (di) p , which equals c  +  di by Fermat’s theorem and the assumption that $p_{719}$

is congruent to $1$ mod $4$ ; it follows that (c + di)p - {}1 ≡ $1$ . (Alternatively , one can prove this by showing that the Gaussian integers mod a  +  bi form a group of order $p - 1$ and applying Lagrange’s theorem .) Before stating the reciprocity law, we must stamp out the ambiguity in the choice of a, b, c, and d. We require that $a$ and $c$ must be odd, and that $a + b - 1$ and $c + d - 1$ must be divisible by $4$ . (Note that we can still flip the signs of $b$ and $d$ .) Theorem (quartic reciprocity). With p, q, a, b, c, and d as above, we have

$c + dia + bi= - 1c + dia + bi^{4}4$

if $p$ and $q$ are both congruent to $5$ modulo $8$ , and

$a + bic + di = 1c + di^{4} a + bi^{4}$

otherwise.

One might expect to find an nth power reciprocity law that looks like this by working with the ring generated by a primitive nth root of $1$ . What complicates matters is that this ring does not enjoy the unique factorization property [IV . 1 § § 4 - 8 ] (where as the usual integers and the Gaussian integers both do) . This was remedied only by kummer’s [VI.40] theory of ideals [III.81](/part-03/rings-ideals-and-modules) (short for “ideal numbers ”). An ideal is a set that has the typical properties of the set of all multiples of a given number, but it can be more general.
(Even if an ideal is the set of all multiples of some number, that number is not unique, since one can multiply it by a unit. For instance, both $2$ and $- 2$ generate the ideal of all even numbers .) Using Kummer’s theory, Kummer and Eisenstein managed to formulate broad generalizations of quadratic reciprocity for higher powers. hilbert [VI.63](/part-06/david-hilbert-18621943) then realized that these should fit together as part of some sort of maximally general reciprocity law.
He also gave a candidate for this law, inspired by a reformulation of quadratic reciprocity itself in terms of the norm residue symbol. For a prime p, and any nonzero integers $m$ and $n$, the norm residue m, n symbol (p) equals $1$ if, for all sufficiently large k, the equations $mx^{2} + ny^{2}$ ≡ $z^{2} ($ mod $p^{k})$ have solutions where x, y, and z are not all divisible by p k ; otherwise the symbol equals $- 1$ . In other words, the symbol equals $1$ if the equation $mx^{2} + ny^{2} = z^{2}$ has $a$ solution in the p-adic numbers [III.51](/part-03/local-and-global-in-number-theory) .

720                                                                                         V. Theorems and Problems

  Hilbert’s formulation of quadratic reciprocity is that,      problem) remains mostly unsolved, except in some spe-
for any nonzero m and n,                                       cial cases. For instance, the theory of elliptic func-
                    m, n                                      tions [V.31](/part-05/the-riemannroch-theorem) solves this problem for fields of the form
                               = 1,                               . qrt{p}                                    Q( −d) with d > 0 via the theory of complex multi-
                    p
                                                               plication. Some additional examples emerged from the
where the product is taken over all primes p and the
                                                               work of Shimura on modular forms [III.59](/part-03/modular-forms), leading to
prime p = . nfty. The latter requires some explanation: we
         m, n                                                   the Shimura reciprocity law.
write ( . nfty ) = 1 if and only if m and n are not both neg-
                                                                  This last example shows that the story of reci-
ative, i.e., if the equation mx 2 +ny 2 = z2 has a solution
                                                               pro city laws is not yet complete. Any new instance of
in the real numbers. This fits into a general pattern, that
                                                               explicit class field theory would reveal another reci-
conditions quantified over “all prime numbers” must
                                                               pro city law that had previously been hidden from view.
also account for the so-called infinite prime.
                                                               Some exciting new conjectures in this direction have
   It should also be clarified that Hilbert’s product only
                                                               been advanced by Bertolini, Darmon, and Dasgupta,
makes sense by virtue of the fact that, for fixed m
                                                               who have proposed some new constructions of Abe-
and n, ( m, n  p ) = 1 for all but finitely many p. This is      lian extensions using p-adic analysis. These are analo-
because in general, since approximately half the inte-
                                                               gous to the aforementioned constructions using ellip-
gers mod p k are quadratic residues, it is easy to solve
                                                               tic functions, in which one evaluates a transcendental
the equation mx 2 + ny 2 = z2 : difficulties arise only
                                                               function at a special value. At first, there seems to be no
when multiplication by m or n identifies many of these
                                                               reason to expect the resulting complex number to have
quadratic residues. For instance, if m and n are (posi-
                                                               any special properties, but in fact it turns out to be an
tive) prime numbers, then only those two primes con-
                                                               algebraic number that generates an appropriate Abe-
tribute to the product; the two resulting factors can be
                                                               lian extension of the base field. While one can check in
related to ( m            n
                n ) and ( m ), which leads back to quadratic
                                                               individual examples, using computer calculations, that
reciprocity.
                                                               the construction seems to be converging p-adically to
   Using this formulation, Hilbert was able to state and
                                                               a particular generator of the right field, a proof seems
prove a form of quadratic reciprocity over any num-
                                                               out of reach at present.
ber field [III.63](/part-03/number-fields), in which the corresponding product
of symbols is quantified over the prime ideals of the
                                                               Further Reading
number field (together with some “infinite primes”).
Hilbert also conjectured a higher-power reciprocity law        Ireland, K., and M. Rosen. 1990. A Classical Introduction to
over any number field. That conjecture was tackled by             Modern Number Theory, 2 nd edn. New York: Springer.
Hasse, Takagi, and finally artin [VI.86](/part-06/emil-artin-18981962), who stated a          Lemmermeyer, F. 2000. Reciprocity Laws, from Euler to
general reciprocity law. Its statement is a bit too techni-      Eisenstein. Berlin: Springer.
cal to include here; we limit ourselves to observing that
Artin’s reciprocity law, when applied to a number field
K, describes certain norm residue symbols in terms of          V.29     Rational Points on Curves and
Abelian extensions of K, i.e., number fields containing                  the Mordell Conjecture
K whose groups of symmetries (galois groups [V.21](/part-05/the-insolubility-of-the-quintic))
are commutative.                                               Suppose that we wish to study a Diophantine equation
   The Abelian extensions of Q are easy to describe: the       such as x 3 + y 3 = z3 . A simple observation we can
Kronecker–Weber theorem asserts that they are all con-         make is that studying integer solutions to this equation
tained in fields generated by roots of 1. This explains         is more or less equivalent to studying rational solutions
the role of the roots of 1 in the classical reciprocity        to the equation a3 + b 3 = 1: indeed, if we had integers
laws. However, describing the Abelian extensions of an         x, y, and z such that x 3 + y 3 = z3 , then we could set
arbitrary number field K is some what harder. They can           a = x/z and b = y/z and obtain rational numbers with
at least be classified in terms of the structure of the         a3 + b3 = 1. Conversely, given rational numbers a and
field K itself; this is what is commonly referred to as         b with a3 + b 3 = 1, we could multiply a and b by the
class field theory.                                             lowest common multiple z of their denominators and
   However, the problem of explicitly specifying gener-        set x = az and y = bz, obtaining integers x, y, and z
ators of the Abelian extensions of K (Hilbert’s twelfth        such that x 3 + y 3 = z3 .

V.29.   Rational Points on Curves and the Mordell Conjecture                                                       721

   The advantage of doing this is that it reduces the                                                  R'
number of variables by 1 and focuses our attention on
the plane curve u3 + v 3 = 1, which is a simpler object
than the surface x 3 + y 3 = z3 . A curve of this kind,                      E              Q
defined by one or more polynomial equations, is called
an algebraic curve.
   Even though we are interested in rational points on
the curve, it can be helpful to regard the curve as
an abstract object that has many manifestations. (See                         P
arithmetic geometry [IV.5](/part-04/arithmetic-geometry) for a fuller discussion of
                                                                     L
this point.) For instance, if we think of u and v as com-
plex numbers, then the “curve” u3 + v 3 = 1 becomes
                                                                                                            R
a two-dimensional object, which means that it starts
to have a genuinely interesting geometry. To be pre-
cise, it can be regarded as a two-dimensional manifold             Figure 1 The group law for an elliptic curve.
[I.3 §6.9](/part-01/fundamental-definitions) living in R4 . From a complex perspective it is
a one-dimensional subset of C2 , but from either per-        operation on it as follows: given any two points P and
spec tive it has a potentially interesting topology. For      Q on E, let L be the line through P and Q (where we
instance, if we compactify [III.9](/part-03/compactness-and-compactication) the curve by consid-      define this to be the tangent to the curve at P if P = Q ).
ering it as a subset not of C2 but of the complex pro-       In general, L intersects E in three points, of which P
jective plane [I.3 §6.7](/part-01/fundamental-definitions), then we turn it into a compact     and Q are two; let R be the third. Finally, let R be
surface. As such, it must have a genus [III.33](/part-03/genus), which,      the reflection of R in the x-axis (which also belongs
roughly speaking, tells us how many holes it has.            to E because E has the form y 2 = f (x)). This con-
   Surprisingly, it turns out that this geometrical def-     struc tion of R from P and Q , which is illustrated in
inition of the genus of a curve is intimately related        figure 1, defines a binary operation on the points of
to the algebraic question of how many rational points        E. Remarkably, this binary operation turns E into an
the curve contains. Consider, for instance, the curve        Abelian group, at least when we also include a point
u2 + v 2 = 1, which corresponds to the Diophantine           at infinity and adopt the convention that the point at
equation x 2 + y 2 = z 2 . Since there are infinitely many    infinity is the intersection of E with any vertical line.
Pythagorean triples that are not multiples of each other,    The point at infinity is the identity of the group, since a
there are infinitely many rational points on the curve        vertical line through a point P intersects E in the reflec-
u2 + v 2 = 1. In order to calculate the genus of the         tion P of P in the x-axis, and when we reflect P in the
curve, we first rewrite it as (u + iv)(u − iv) = 1. This      x-axis we get P again.
shows that the function (u, v) → u+iv is a homeomor-           It is laborious, but basically straightforward, to come
phism from the curve to the set C \ {0} of all nonzero       up with a formula for the “group law” of an elliptic
complex numbers, which itself is homeomorphic to a           curve—that is, a formula for the coordinates of R in
sphere with two points removed. The compactification          terms of the coordinates of P and Q . Once one does so,
adds in these points, giving us a surface of genus 0, so     it becomes clear that if P and Q have rational coordin-
we say that the curve u2 + v 2 = 1 has genus 0. It turns     ates, then so does R. Thus, the set of all rational points
out that a curve of genus 0 always has either no rational    on an elliptic curve E forms a subgroup. This simple
points or infinitely many.                                    fact can be used to produce rather easily some very
   In general, the larger the genus, the harder it is to     large solutions to the corresponding Diophantine equa-
find rational solutions. A curve of genus 1 is called         tions. For instance, one can start with a small solu-
an elliptic curve [III.21](/part-03/elliptic-curves). It is possible for an ellip-     tion, associate with it a rational point P, and then use
tic curve to contain infinitely many rational points as       the formula for the binary operation to calculate 2 P,
well, but the set of such points turns out to have a very    then 4 P, then 8 P, and so on. Unless n P = 0 for some
restricted structure. To explain this, let us consider an    n (which can certainly happen), in no time at all one
elliptic curve E of the form y 2 = ax 3 + bx 2 + cx + d      has a point on the curve with rational coordinates that
(a form into which any elliptic curve can be put). If we     have huge numerators and denominators. To give an
think of it as a curve in R2 , then we can define a binary    idea of the sort of solutions that can be obtained in