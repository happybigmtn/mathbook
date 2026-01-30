# Analytic Number Theory

332

Cohen, H. 1993. A Course in Computational Algebraic Num-
  ber Theory. New York: Springer.
Ireland, K., and M. Rosen. 1982. A Classical Introduction to     This information helps us a lot, because if we can find
  Modern Number Theory, 2 nd edn. New York: Springer.
Serre, J.-P. 1973. A Course in Arithmetic. New York: Springer.
Technical Articles and Books
Baker, A. 1971. Imaginary quadratic fields with class num-
  ber 2. Annals of Mathematics (2) 94:139–52.
Brauer, R. 1950. On the Zeta-function of algebraic number
  fields. I. American Journal of Mathematics 69:243–50.
Brauer, R. 1950. On the Zeta-function of algebraic number
  fields. II. American Journal of Mathematics 72:739–46.
Goldfeld, D. 1985. Gauss’s class number problem for imagi-
  nary quadratic fields. Bulletin of the American Mathemat-
  ical Society 13:23–37.
Granville, A., and G. Martin. 2006. Prime number races.
  American Mathematical Monthly 113:1–33.
Gross, B., and D. Zagier. 1986. Heegner points and deriva-
  tives of L-series. Inventiones Mathematicae 84:225–320.
Heegner, K. 1952. Diophantische Analysis und Mod ulf unk-
  tionen. Mathematische Zeitschrift 56:227–53.
Hua, L.-K. 1942. On the least solution of Pell’s equation.
  Bulletin of the American Mathematical Society 48:731–35.
Lang, S. 1970. Algebraic Number Theory. Reading, MA:
  Addison-Wesley.
Narkiewicz, W. 1973. Algebraic Numbers. Warsaw: Polish
  Scientific Publishers.
Siegel, C. L. 1935. Über die Classenzahl quadratischer
  Zahlörper. Acta Arithmetica 1:83–86.
Stark, H. 1967. A complete determination of the complex
  quadratic fields of class-number one. Michigan Mathe-
  mat ical Journal 14:1–27.
IV.2 Analytic Number Theory

What is number theory? One might have thought that it
was simply the study of numbers, but that is too broad
a definition, since numbers are almost ubiquitous in
mathematics. To see what distinguishes number theory
from the rest of mathematics, let us look at the equa-
tion x 2 + y 2 = 15 925, and consider whether it has any
solutions. One answer is that it certainly does: indeed,
the solution set forms a circle of radius 15 925 in the
plane. However, a number theorist is interested in inte-
ger solutions, and now it is much less obvious whether
any such solutions exist.
   A useful first step in considering the above question
is to notice that 15 925 is a multiple of 25: in fact, it is     analytic number theory. The main difference is that

IV. Branches of Mathematics
25 . imes 637. Further more, the number 637 can be decom-
posed further: it is 49 . imes 13. That is, 15 925 = 52 . imes 72 . imes 13.
integers a and b such that a2 + b2 = 13, then we can
multiply them by 5 . imes 7 = 35 and we will have a solution
to the original equation. Now we notice that a = 2 and
b = 3 works, since 22 +32 = 13. Multiplying these num-
bers by 35, we obtain the solution 702 + 1052 = 15 925
to the original equation.
As this simple example shows, it is often useful to
decompose positive integers multiplicative ly into com-
pone nts that cannot be broken down any further. These
components are called prime numbers, and the fun-
da mental theorem of arithmetic [V.14](/part-05/the-fundamental-theorem-of-arithmetic) states that
every positive integer can be written as a product of
primes in exactly one way. That is, there is a one-to-one
correspondence between positive integers and finite
products of primes. In many situations we know what
we need to know about a positive integer once we have
decomposed it into its prime factors and understood
those, just as we can understand a lot about molecules
by studying the atoms of which they are composed. For
example, it is known that the equation x 2 + y 2 = n has
an integer solution if and only if every prime of the form
4 m+3 occurs an even number of times in the prime fac-
tor ization of n. (This tells us, for instance, that there are
no integer solutions to the equation x 2 + y 2 = 13 475,
since 13 475 = 52 . imes 72 . imes 11, and 11 appears an odd
number of times in this product.)
Once one begins the process of determining which
integers are primes and which are not, it is soon appar-
ent that there are many primes. However, as one goes
further and further, the primes seem to consist of a
smaller and smaller proportion of the positive integers.
Andrew Granville
They also seem to come in a some what irregular pat-
1   Introduction                             tern, which raises the question of whether there is any
formula that describes all of them. Failing that, can one
perhaps describe a large class of them? We can also ask
whether there are infinitely many primes. If there are,
can we quickly determine how many there are up to
a given point? Or at least give a good estimate for this
number? Finally, when one has spent long enough look-
ing for primes, one cannot help but ask whether there
is a quick way of recognizing them. This last question is
√
discussed in computational number theory [IV.3](/part-04/computational-number-theory);
the rest motivate the present article.
Now that we have discussed what marks number
theory out from the rest of mathematics, we are ready
to make a further distinction: between algebraic and

IV.2.   Analytic Number Theory

in algebraic number theory (which is the main topic
of algebraic numbers [IV.1](/part-04/number-theory)) one typically considers
questions with answers that are given by exact formu-
las, where as in analytic number theory, the topic of
this article, one looks for good approximations. For the
sort of quantity that one estimates in analytic num-
ber theory, one does not expect an exact formula to
exist, except perhaps one of a rather artificial and un-
illuminating kind. One of the best examples of such a
quantity is one we shall discuss in detail: the number
of primes less than or equal to x.
   Since we are discussing approximations, we will need
terminology that allows us to give some idea of the
quality of an approximation. Suppose, for example, that
we have a rather erratic function f (x) but are able to
show that, once x is large enough, f (x) is never big-
ger than 25 x 2 . This is useful because we understand
the function g(x) = x 2 quite well. In general, if we
can find a constant c such that |f (x)| ⩽ cg(x) for
every x, then we write f (x) = O(g(x)). A typical usage
occurs in the sentence “the average number of prime
factors of an integer up to x is log log x + O(1)”; in
other words, there exists some constant c > 0 such
that |the average − log log x| ⩽ c once x is sufficiently
large.
   We write f (x) ∼ g(x) if limx→. nfty f (x)/g(x) = 1; and

also f (x) ≈ g(x) when we are being a little less precise,
that is, when we want to say that f (x) and g(x) come
close when x is sufficiently large, but we cannot be, or
do not want to be, more specific about what we mean
by “come close.”
   It is convenient for us to use the notation for sums

and
the symbol what terms the sum, or product, is to be
taken over. For example, m⩾2 will be a sum over all
integers m that are greater than or equal to 2, where as

   p prime will be a product over all primes p.

Ancient Greek mathematicians knew that there were
infinitely many primes. Their beautiful proof by con-
tradiction goes as follows. Suppose that there are only
finitely many primes, say k of them, which we will
denote by p1 , p2 , . . . , pk . What are the prime factors of
p1 p2 · · · pk + 1? Since this number is greater than 1 it
must have at least one prime factor, and this must be
pj for some j (since all primes are contained among
p1 , p2 , . . . , pk ). But then pj divides both p1 p2 · · · pk
and p1 p2 · · · pk +1, and hence their difference, 1, which
is impossible.

333
Many people dislike this proof, since it does not actu-
ally exhibit infinitely many primes: it merely shows that
there cannot be finitely many. It is more or less possi-
ble to correct this deficiency by defining the sequence
x1 = 2, x2 = 3, and xk+1 = x1 x2 · · · xk + 1 for each
k ⩾ 2. Then each xk must contain at least one prime
factor, qk say, and these prime factors must be distinct,
since if k < , then qk divides xk which divides x − 1,
while q divides x . This gives us an infinite sequence
of primes.
In the eighteenth century euler [VI.19](/part-06/leonhard-euler-17071783) gave a dif-
ferent proof that there are infinitely many primes, one
that turned out to be highly influential in what was
to come later. Suppose again that the list of primes
is p1 , p2 , . . . , pk . As we have mentioned, the funda-
mental theorem of arithmetic implies that there is a
one-to-one correspondence between the set of all inte-
gers and the set of products of the primes, which, if
a   a      a
those are the only primes, is the set {p1 1 p2 2 · · · pk k :
a1 , a2 , . . . , ak ⩾ 0}. But, as Euler observed, this implies
that a sum involving the elements of the first set should
equal the analogous sum involving the elements of the
second set:

n⩾1
ns
n a positive integer

=                        a1 a2       ak s
a1 , a2 ,..., ak ⩾0
(p1  p2 · · · pk )

=
a1 ⩾0
(p1 1 )s        a2 ⩾0
(p2 2 )s         ak ⩾0
(p k )


k
1      −1
=         1−                .
for product. Typically we will indicate beneath
j=1
                                    The last equality holds because each sum in the second-
last line is the sum of a geometric progression. Euler
then noted that if we take s = 1, the right-hand side
equals some rational number (since each pj > 1)
2   Bounds for the Number of Primes
diction, so there cannot be finitely many primes. (To see
why the left-hand side is infinite when s = 1, note that
n+1
(1/n) ⩾ n (1/t) dt since the function 1/t is decreas-
N−1             N
ing, and therefore n=1 (1/n) ⩾ 1 (1/t) dt = log N
which tends to . nfty as N → . nfty.)

During the proof above, we gave a formula for n−s
under the false assumption that there are only finitely
many primes. To correct it, all we have to do is rewrite
it in the obvious way with out that assumption:

1                1 −1
=
n⩾1
ns    p prime
ps
n a positive integer

334

Now, however, we need to be a little careful about
whether the two sides of the formula converge. It is
safe to write down such a formula when both sides are
absolutely convergent, and this is true when s > 1. (An
infinite sum or product is absolutely convergent if the
value does not change when we take the terms in any
order we want.)
  Like Euler, we want to be able to interpret what hap-
pens to (1) when s = 1. Since both sides converge and
are equal when s > 1, the natural thing to do is con-
sider their common limit as s tends to 1 from above.
To do this we note, as above, that the left-hand side of
(1) is well approximated by
so it diverges as s → 1+ . We deduce that

Taking logarithms and discarding negligible terms, we
then find that

So how numerous are the primes? One way to get an
idea is to determine the behavior of the sum analo-
gous to (3) for other sequences of integers. For instance,   quantity we are trying to estimate, and the approxima-

   n⩾1 1/n converges, so the primes are, in this sense,
more numerous than the squares. This argument works
if we replace the power 2 by any s > 1, since then, as
we have just observed, the sum n⩾1 1/ns is about
1/(s − 1) and in particular converges. In fact, since

   n⩾1 1/n(log n) converges, we see that the primes
are in the same sense more numerous than the num-
bers {n(log n)2 : n ⩾ 1}, and hence there are infinitely
many integers x for which the number of primes less
than or equal to x is at least x/(log x)2 .
   Thus, there seem to be primes in abundance, but
we would also like to verify our observations, made
from calculations, that the primes constitute a smaller

and smaller proportion of the integers as the integers
become larger and larger. The easiest way to see this is     fore, for any small positive number ε we can find a

to try to count the primes using the “sieve of Eratos-
thenes.” In the sieve of Eratosthenes one starts with all    this product is at least 1/2, the product is at least 1/2 k .
the positive integers up to some number x. From these,
one deletes the numbers 4, 6, 8 and so on—that is, all
multiples of 2 apart from 2 itself. One then takes the
first undeleted integer greater than 2, which is 3, and
deletes all its multiples—again, not including the num-
ber 3 itself. Then one removes all multiples of 5 apart

IV. Branches of Mathematics
from 5, and so on. By the end of this process, one is left
with the primes up to x.
This suggests a way to guess at how many there are.
After deleting every second integer up to x other than
2 (which we call “sieving by 2”) one is left with roughly
half the integers up to x; after sieving by 3, one is left
with roughly two thirds of those that had remained;
continuing like this we expect to have about

x      1−                         (4)
p
p ⩽y
integers left by the time we have sieved with all the
√
primes up to y. Once y = x the undeleted integers
are 1 and the primes up to x, since every composite
. nfty
dt    1                            has a prime factor no bigger than its square root. So, is
=     ,
1   ts   s−1                           (4) a good approximation for the number of primes up
√
to x when y = x?
         1                                To answer this question, we need to be more precise
1−     = 0.                 (2)
p prime
p                             about what the formula in (4) is estimating. It is sup-
posed to approximate the number of integers up to x
that have no prime factors less than or equal to y, plus
 1                                     the number of primes up to y. The so-called inclusion–
= . nfty.                  (3)       exclusion principle can be used to show that the approx-
p prime
p
imation given in (4) is accurate to within 2 k , where k is
the number of primes less than or equal to y. Unless k
is very small, this error term of 2 k is far larger than the
2
tion is use less. It is quite good if k is less than a small
constant times log x, but, as we have seen, this is far
less than the number of primes we expect up to y if
                             . qrt{y} ≈ x. Thus it is not clear whether (4) can be used
to obtain a good estimate for the number of primes up
2
to x. What we can do, however, is use this argument to
give an upper bound for the number of primes up to
x, since the number of primes up to x is never more
than the number of integers up to x that are free of
prime factors less than or equal to y, plus the number
of primes up to y, which is no more than 2 k plus the
expression in (4).
Now, by (2), we know that as y gets larger and larger
the product p ⩽y (1 − 1/p) converges to zero. There-
y such that p ⩽y (1 − 1/p) < ε/2. Since every term in
Hence, for any x ⩾ 22 k our error term, 2 k , is no bigger
than the quantity in (4), and therefore the number of
primes up to x is no larger than twice (4), which, by our
choice of y, is less than εx. Since we were free to make
ε as small as we liked, the primes are indeed a vanishing
proportion of all the integers, as we predicted.

IV.2.   Analytic Number Theory

   Even though the error term in the inclusion–exclu-
sion principle is too large for us to use that method to
estimate (4) when y = x, we can still hope that (4) is
a good approximation for the number of primes up to
x: perhaps a different argument would give us a much
smaller error term. And this turns out to be the case:
in fact, the error never gets much bigger than (4). How-     108

ever, when y = x the number of primes up to x is
actually about 8/9 times (4). So why does (4) not give
a good approximation? After sieving with prime p we
supposed that roughly 1 in every p of the remaining
integers were deleted: a careful analysis yields that this   1014
can be justified when p is small, but that this becomes
an increasingly poor approximation of what really hap-
pens for larger p; in fact (4) does not give a correct
approximation once y is bigger than a fixed power of x.
So what goes wrong? In the hope that the proportion
is roughly 1/p lies the unspoken assumption that the
consequences of sieving by p are independent of what
happened with the primes smaller than p. But if the
primes under consideration are no longer small, then
this assumption is false. This is one of the main rea-
sons that it is hard to estimate the number of primes
up to x, and indeed similar difficulties lie at the heart
of many related problems.
   One can refine the bounds given above but they do
not seem to yield an asymptotic estimate for the primes
(that is, an estimate which is correct to within a fac-
tor that tends to 1 as x gets large). The first good
guesses for such an estimate emerged at the begin-
ning of the nineteenth century, none better than what
emerges from an observation of gauss [VI.26](/part-06/carl-friedrich-gauss-17771855), made
when studying tables of primes up to three million
at sixteen years of age, that “the density of primes at
around x is about 1/ log x.” Interpreting this, we guess     variable Xn equal 1 with probability 1/ log n (so that
that the number of primes up to x is about

Let us compare this prediction (rounded to the nearest
integer) with the latest data on numbers of primes, dis-     that represents the primes will be true if and only if it is
covered by a mixture of ingenuity and computational
power. Table 1 shows the actual numbers of primes
up to various powers of 10 together with the differ-
ence between these numbers and what Gauss’s formula
gives. The differences are far smaller than the num-
bers themselves, so his prediction is amazingly accu-
rate. It does seem always to be an over count, but since
the width of the last column is about half that of the

335
Table 1 Primes up to various x, and
the over count in Gauss’s prediction.
√
Over count:
x
dt
x
2 log t
5 761 455
. qrt{1010}                     455 052 511                      3 103
1011                   4 118 054 813                     11 587
1012                  37 607 912 018                     38 262
1013                 346 065 536 839                    108 970
3 204 941 750 802
1015
1016
1017
1018
1019
1020       2 220 819 602 560 918 840                222 744 643
1021      21 127 269 486 018 731 928                597 394 253
1022     201 467 286 689 315 906 290              1 932 355 207
central one it appears that the difference is something
√
like x.
In the 1930 s, Harald Cramér, the great probabil-
ity theorist, gave a probabilistic way of interpreting
Gauss’s prediction. We can represent the primes as a
sequence of 0 s and 1 s. If we start with 3 and put a 1 each
time we encounter a prime and 0 otherwise, then we ob-
tain the sequence 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, . . . . Cramér’s
idea is to suppose that this sequence, which repre-
sents the primes, has the same properties as a “typical”
sequence of 0 s and 1 s, and to use this principle to make
precise conjectures about the primes. More precisely,
let X3 , X4 , . . . be an infinite sequence of random vari-
ables [III.71 §4](/part-03/probability-distributions) taking the values 0 or 1, and let the
it equals 0 with probability 1 − 1/ log n). Assume also

x
1        x
dt                      that the variables are independent, so for each m know-
≈              .                  ledge about the variables other than Xm tells us noth-
n=2
log n     2    log t
ing about Xm itself. Cramér’s suggestion was that any
statement about the distribution of 1 s in the sequence
true with probability 1 for his random sequences. Some
care is needed in interpreting this statement: for exam-
ple, with probability 1 a random sequence will contain
infinitely many even numbers. However, it is possible
to formulate a general principle that takes account of
such examples.
Here is an example of a use of the Gauss–Cramér
model. With the help of the central limit theorem

336

[III.71 §5](/part-03/probability-distributions) one can prove that, with probability 1, there   Gauss’s conjecture for the number of primes up to x
are

1 s among the first x terms in our sequence. The model
tells us that the same should be true of the sequence
representing primes, and so we predict that
    #{primes up to x} =
just as the table suggests.
  The Gauss–Cramér model provides a beautiful way
to think about distribution questions concerning the
prime numbers, but it does not give proofs, and it does
not seem likely that it can be made into such a tool;
so for proofs we must look elsewhere. In analytic num-
ber theory one attempts to count objects that appear
naturally in arithmetic, yet which resist being counted
easily. So far, our discussion of the primes has con-

centrated on upper and lower bounds that follow from
their basic definition and a few elementary properties—
notably the fundamental theorem of arithmetic. Some
of these bounds are good and some not so good. To
improve on these bounds we shall do something that
seems unnatural at first, and reformulate our question
as a question about complex functions. This will allow
us to draw on deep tools from analysis.
3     The “Analysis” in Analytic Number Theory
These analytic techniques were born in an 1859 memoir
of riemann [VI.49], in which he looked at the function
that appears in the formula (1) of Euler, but with one
crucial difference: now he considered complex values
of s. To be precise, he defined what we now call the
Riemann zeta function as follows:
It can be shown quite easily that this sum converges
whenever the real part of s is greater than 1, as we
have already seen in the case of real s. However, one of
the great advantages of allowing complex values of s is
that the resulting function is holomorphic [I.3 §5.6](/part-01/fundamental-definitions),
and we can use a process of analytic continuation to
make sense of ζ(s) for every s apart from 1. (A simi-
lar but more elementary example of this phenomenon
is the infinite series n⩾0 zn , which converges if and
only if |z| < 1. However, when it does converge, it

equals 1/(1 − z), and this formula defines a holomor-
phic function that is defined every where except z = 1.)
Riemann proved the remarkable fact that confirming

IV. Branches of Mathematics
is equivalent to gaining a good understanding of the
x
dt       √
+ O( x log x)                     zeros of the function ζ(s), that is, of the values of s
2 log t
our subject, so it seems worthwhile to at least sketch
the key steps in the argument linking these seemingly
unconnected topics.
x
dt       √                     Riemann’s starting point was Euler’s formula (1). It is
+ O( x log x),   (5)
2   log t                        not hard to prove that this formula is valid when s is
complex, as long as its real part is greater than 1, so we
have

ζ(s) =          1− s        .
p prime
p
If we take the logarithm of both sides and then differ-
entiate, we obtain the equation
ζ (s)           log p        log p
−
ζ(s)            p s −1               p ms
p prime
We need some way to distinguish between primes p ⩽
x and primes p > x; that is, we want to count those
primes p for which x/p ⩾ 1, but not those with x/p <
1. This can be done using the step function that takes
the value 0 for y < 1 and the value 1 for y > 1 (so
that its graph looks like a step). At y = 1, the point of
discontinuity, it is convenient to give the function the
average value, 12 . Perron’s formula, one of the big tools
of analytic number theory. describes this step function
by an integral, as follows. For any c > 0,
⎧
⎪
⎪ 0 if 0 < y < 1,
⎪
⎨
1
ds = 12 if y = 1,
2π i s: Re(s)=c s         ⎪
⎪
⎪
⎩1 if y > 1.
The integral is a path integral along a vertical line in the
complex plane: the line consisting of all points c + it
 1                             with t ∈ R. We apply Perron’s formula with y = x/p m ,
ζ(s) =         .
ns                          so that we count the term corresponding to p m when
n⩾ 1                                                                                       1
p m < x, but not when p m > x. To avoid the “ 2 ,”
assume that x is not a prime power. In that case we
obtain

log p
p prime, m⩾1
p m ⩽x

1                                     x       ds
=
2π i p prime, m⩾1         s: Re(s)=c   pm       s

1
=−                              ds.                     (6)
2π i   s: Re(s)=c ζ(s) s
We can justify swapping the order of the sum and
the integral if c is taken large enough, since every-
thing then converges absolutely. Now the left-hand side

IV.2.   Analytic Number Theory

of the above equation is not counting the number of
primes up to x but rather a “weighted” version: for each
prime p we add a weight of log p to the count. It turns
out, though, that Gauss’s prediction for the number of
primes up to x follows so long as we can show that
x is a good estimate for this weighted count when x
is large. Notice that the sum in (6) is exactly the loga-
rithm of the lowest common multiple of the integers
less than or equal to x, which perhaps explains why
this weighted counting function for the primes is a nat-
ural function to consider. Another explanation is that
if the density of primes near p is indeed about 1/ log p,
then multiplying by a weight of log p makes the density
every where about 1.
   If you know some complex analysis, then you will
know that Cauchy’s residue theorem allows one to eval-
uate the integral in (6) in terms of the “residues” of
the integrand (ζ (s)/ζ(s))(x s /s), that is, the poles of
this function. More over, for any function f that is ana-
lytic except perhaps at finitely many points, the poles
of f (s)/f (s) are the zeros and poles of f . Each pole of     most famous and tantalizing in all of mathematics.
f (s)/f (s) has order 1, and the residue is simply the
order of the corresponding zero, or minus the order of
the corresponding pole, of f . Using these facts we can
obtain the explicit formula

Here the zeros of ζ(s) are counted with multiplicity:
that is, if ρ is a zero of ζ(s) of order k, then there are k
terms for ρ in the sum. It is astonishing that there can
be such a formula, an exact expression for the number
of primes up to x in terms of the zeros of a complicated
function: you can see why Riemann’s work stretched
people’s imagination and had such an impact.
   Riemann made another surprising observation which
allows us to easily determine the values of ζ(s) on the
left-hand side of the complex plane (where the function
is not naturally defined). The idea is to multiply ζ(s) by
some simple function so that the resulting product ξ(s)
satisfies the functional equation

He determined that this can be done by taking ξ(s) =
1
2 s(s − 1)π
gamma function [III.31](/part-03/the-gamma-function), which equals the factorial
function at positive integers (that is, Γ (n) = (n − 1)!),     estimates hold if and only if the Riemann hypothesis
and is well-defined and continuous for all other s.
   A careful analysis of (1) reveals that there are no
zeros of ζ(s) with Re(s) > 1. Then, with the help of

337
(8), we can deduce that the only zeros of ζ(s) with
Re(s) < 0 lie at the negative even integers −2, −4, . . .
(the “trivial zeros”). So, to be able to use (7), we need to
determine the zeros inside the critical strip, the set of
all s such that 0 ⩽ Re(s) ⩽ 1. Here Riemann made yet
another extraordinary observation which, if true, would
allow us tremendous insight into virtually every aspect
of the distribution of primes.
The Riemann hypothesis. If 0 ⩽ Re(s) ⩽ 1 and ζ(s) =
0, then Re(s) = 12 .
It is known that there are infinitely many zeros on the
line Re(s) = 12 , crowding closer and closer together as
we go up the line. The Riemann hypothesis has been
verified computationally for the ten billion zeros of
lowest height (that is, with |Im(s)| smallest), it can be
shown to hold for at least 40% of all zeros, and it fits
nicely with many different heuristic assertions about
the distribution of primes and other sequences. Yet, for
all that, it remains an unproved hypothesis, perhaps the
How did Riemann think of his “hypothesis”? Rie-
mann’s memoir gives no hint as to how he came up
with such an extraordinary conjecture, and for a long
time afterwards it was held up as an example of the

log p = x −            −        . (7)      pure thought alone. However, in the 1920 s Siegel and
p prime, m⩾1
ρ    ζ(0)
p m ⩽x
and from these it is evident that Riemann had been
able to determine the lowest few zeros to several dec-
imal places through extensive hand calculations—so
much for “pure thought alone”! Nevertheless, the Rie-
mann hypothesis is a mammoth leap of imagination
and to have come up with an algorithm to calculate
zeros of ζ(s) is a remarkable achievement. (See com-
putational number theory [IV.3](/part-04/computational-number-theory) for a discussion of
how zeros of ζ(s) can be calculated.)
If the Riemann hypothesis is true, then it is not hard
to prove the bound
 ρ
x        x 1/2
    
 ρ  ⩽ |Im(ρ)| .
Inserting this into (7) one can deduce that
ξ(s) = ξ(1 − s)   for all s.
log p = x + O( x log2 x).             (9)
p prime
−s/2 Γ ( 1 s)ζ(s). Here Γ (s) is the famous
p ⩽x
2
This, in turn, can be “translated” into (5). In fact these
is true.
The Riemann hypothesis is not an easy thing to
understand, nor to fully appreciate. The equivalent, (5),

$338$

is perhaps easier. Another version, which I prefer, is that, for every $N \ge 100$ , √ | log (lcm [1 , 2 , . . . , N ]) - N| \le  N($log$ N)2 . To focus on the over count in Gauss’s guesstimate for the number of primes up to x, we use the following approximation, which can be deduced from ( $7$ ) if, and only if, the Riemann hypothesis is true: x ${}^{2} (1/$ log $t)dt -$ #{primes $\le$ x} √ $x/$ log $x$ sin (γ log x) $\approx1 + 2$ .
(10) γ all real numbers $γ > 01$ such that $2 + iγ$ is a zero of ζ (s) The right-hand side here is the over count in Gauss’s prediction for the number of primes up to x, divided √ by something that grows like x. When we looked at the table of primes it seemed that this quantity should be roughly constant. However, that is not quite true as we see upon examining the right-hand side. The first term on the right-hand side, the “ $1$ , ” corresponds to the contribution of the squares of the primes in ( $7$ ). The subsequent terms correspond to the terms involving the zeros of ζ (s) in ( $7$ );
these terms have denominator γ so the most significant terms in this sum are those with the smallest values of γ. More over, each of these terms is a sine wave, which oscillates, half the time positive and half the time negative. Having the “log x” in there means that these oscillations happen slowly (which is why we hardly notice them in the table above), but they do happen, and indeed the quantity in ( $10$ ) does eventually get negative.
No one has yet determined a value of x for which this is negative (that is, a x value of x for which there are more than ${}^{2} (1/$ log  t)dt primes up to x), though our best guess is that the first time this happens is for $x \approx 1$ . $398 \times 10^{316}$ . How does one arrive at such a guess given that the table of primes extends only up to $10^{22}$ ? One begins by using the first thousand terms of the right-hand side of ( $10$ ) to approximate the left-hand side;
wherever it looks as though it could be negative, one approximates with more terms, maybe a million, until one becomes pretty certain that the value is indeed negative. It is not uncommon to try to understand a given function better by representing it as a sum of sines and cosines like this; indeed this is how one studies the harmonics in music, and ( $10$ ) becomes quite compelling from this perspective. Some experts suggest that ( $10$ ) IV. Branches of Mathematics tells us that “the primes have music in them” and thus makes the Riemann hypothesis believable, even desirable.
To prove unconditionally that x dt #{primes $\le$ x} ∼ , log $t_{2}$ the so-called prime number theorem, we can take the same approach as above but, since we are not asking for such a strong approximation to the number of primes up to x, we need to show only that the zeros near to the line Re (s) $= 1$ do not contribute much to the formula ( $7$ ). By the end of the nineteenth century this task had been reduced to showing that there are no zeros actually on the line Re (s) $= 1$ :
this was eventually established by de la vallée poussin [VI.67](/part-06/charles-jean-de-la-valle-poussin-18661962) and hadamard [VI.65](/part-06/jacques-hadamard-18651963) in 1896 . Subsequent research has provided wider and wider subregions of the critical strip with out zeros of ζ (s) (and thus improved approximations to the number of primes up to x), with out coming any where near to proving the Riemann hypothesis. This remains as an outstanding open problem of mathematics.
A simple question like “How many primes are there up to x?” deserves a simple answer, one that uses elementary methods rather than all of these methods of complex analysis, which seem far from the question at hand. However, ( $7$ ) tells us that the prime number theorem is true if and only if there are no zeros of ζ (s) on the line Re (s) $= 1$ , and so one might argue that it is inevitable that complex analysis must be involved in such a proof. In 1949 Selberg and Erdős surprised the mathematical world by giving an elementary proof of the prime number theorem.
Here, the word “elementary” does not mean “easy” but merely that the proof does not use advanced tools such as complex analysis-- in fact, their argument is a complicated one. Of course their proof must some how show that there is no zero on the line Re (s) $= 1$ , and indeed their combinatorics cunningly masks a subtle complex analysis proof beneath the surface (read Ingham’s discussion ( 1949 ) for a careful examination of the argument).

$4$

Primes in Arithmetic Progressions

After giving good estimates for the number of primes up to x, which from now on we shall denote by $\pi$ (x), we might ask for the number of such primes that are congruent to a mod q. (If you do not know what this means, see modular arithmetic [III.58](/part-03/modular-arithmetic).) Let us write $\pi$ (x ; q, a) for this quantity. To start with, note that

IV.2.   Analytic Number Theory

there is only one prime congruent to 2 mod 4, and
indeed there can be no more than one prime in any
arithmetic progression a, a + q, a + 2 q, . . . if a and q
have a common factor greater than 1. Let φ(q) denote
the number of integers a, 1 ⩽ a ⩽ q, such that (a, q) =
1. (The notation (a, q) stands for the highest common
factor of a and q.) Then all but a small finite number
of the infinitely many primes belong to the φ(q) arith-
metic progressions a, a + q, a + 2 q, . . . with 1 ⩽ a < q
and (a, q) = 1. Calculation reveals that the primes seem
to be pretty evenly split between these φ(q) arithmetic
progressions, so we might guess that in the limit the
proportion of primes in each of them is 1/φ(q). That
is, whenever (a, q) = 1, we might conjecture that, as
x → . nfty,

   It is far from obvious even that the number of primes
congruent to a mod q is infinite. This is a famous the-
orem of dirichlet [VI.36]. To begin to consider such
questions we need a systematic way to identify integers
n that are congruent to a mod q, and this Dirichlet pro-
vided by introducing a class of functions now known
as (Dirichlet) characters. Formally, a character mod q
is a function χ from Z to C with the following three
properties (in ascending order of interest):
  (i) χ(n) = 0 whenever n and q have a common factor

 (ii) χ is periodic mod q (that is, χ(n + q) = χ(n) for

(iii) χ is multiplicative (that is, χ(mn) = χ(m)χ(n) for

An easy but important example of a character mod q
is the principal character χq , which takes the value 1 if
(n, q) = 1 and 0 otherwise. If q is prime, then another
important example is the Legendre symbol ( q ): one sets
  n
( q ) to be 0 if n is a multiple of q, 1 if n is a quadratic
residue mod q, and −1 if n is a quadratic nonresidue
mod q. (An integer n is called a quadratic residue mod q
if n is congruent mod q to a perfect square.) If q is com-
posite, then a function known as the Legendre–Jacobi
symbol ( q· ), which generalizes the Legendre symbol,
is also a character. This too is an important example
that helps us, in a slightly less direct way, to recognize
squares mod q.
   These characters are all real-valued, which is the
exception rather than the rule. Here is an example
of a genuinely complex-valued character in the case
q = 5. Set χ(n) to be 0 if n ≡ 0 (mod 5), i if n ≡

339
2, −1 if n ≡ 4, −i if n ≡ 3, and 1 if n ≡ 1. To
see that this is a character, note that the powers of
2 mod 5 are 2, 4, 3, 1, 2, 4, 3, 1, . . . , while the powers of
i are i, −1, −i, 1, i, −1, −i, 1, . . . .
It can be shown that there are precisely φ(q) distinct
characters mod q. Their usefulness to us comes from
the properties above, together with the following for-
mula, in which the sum is over all characters mod q
and χ̄(a) denotes the complex conjugate of χ(a):
⎧
1                 ⎨1 if n ≡ a (mod q),
χ̄(a)χ(n) =
φ(q)
χ
What is this formula doing for us? Well, understand-
ing the set of integers congruent to a mod q is equiva-
π (x)                          lent to understanding the function that takes the value
π (x; q, a) ∼
φ(q)
appears on the right-hand side of the formula. How-
ever, it is not a particularly nice function to deal with,
so we write it as a linear combination of characters,
which are much nicer functions because they are mul-
tiplicative. The coefficient associated with the character
χ in this linear combination is the number χ̄(a)/φ(q).
From the formula, it follows that

log p
p prime, m⩾1
p m ⩽x
p m ≡a (mod q)
1                      
greater than 1;
φ(q) χ (mod q)
every integer n);
The sum on the left-hand side is a natural adaptation of
any two integers m and n).
all primes. And we can estimate it if we can get good
estimates for each of the sums

χ(p m ) log p.
·                                  p prime, m⩾1
p m ⩽x
We approach these sums much as we did before, obtain-
ing an explicit formula, analogous to (7), (10), now in
terms of the zeros of the Dirichlet L-function:
 χ(n)
L(s, χ) =           .
n⩾1
ns
This function turns out to have properties closely
analogous to the main properties of ζ(s). In particular,
it is here that the multiplicativity of χ is all-important,
since it gives us a formula similar to (1):
 χ(n)
=             1−           .      (12)
n⩾1
ns       p prime
ps

340

That is, L(s, χ) has an Euler product. We also believe
the “generalized Riemann hypothesis” that all zeros ρ
of L(ρ, χ) = 0 in the critical strip satisfy Re(ρ) = 2 .
This would imply that the number of primes up to x
that are congruent to a mod q can be estimated as

Therefore, the generalized Riemann hypothesis implies
the estimate we were hoping for (formula (11)), pro-
vided that x is a little bigger than q2 .
   In what range can we prove (11) unconditionally—
that is, with out the help of the generalized Riemann
hypothesis? Although we can more or less translate the
proof of the prime number theorem over into this new
setting, we find that it gives (11) only when x is very
large. In fact, x has to be bigger than an exponential
in a power of q, which is a lot bigger than the “x is a
little larger than q2 ” that we obtained from the general-     if (1 − β) log x is small, then there are twice as many
ized Riemann hypothesis. We see a new type of problem
emerging here, in which we are asking for a good start-
ing point for the range of x for which we obtain good
estimates, as a function of the modulus q; this does not
have an analogy in our exploration of the prime num-
ber theorem. By the way, even though this bound “x is a
little larger than q2 ” is far out of reach of current meth-   where h−q is the class number of the field Q( −q). A
ods, it still does not seem to be the best answer; calcu-
la tions reveal that (11) seems to hold when x is just
a little bigger than q. So even the Riemann hypothesis
and its generalizations are not powerful enough to tell
us the precise behavior of the distribution of primes.
   Through out the twentieth century much thought was
put in to bounding the number of zeros of Dirichlet L-
functions near to the 1-line. It turns out that one can
make enormous improvements in the range of x for
which (11) holds (to “halfway between polynomial in
q and exponential in q”) provided there are no Siegel
zeros. These putative zeros β of L(s, ( q· )) would be real    formulas for larger values of h−q .)
numbers with β > 1 − c/ q; they can be shown to be
extremely rare if they exist at all.
   That Siegel zeros are rare is a consequence of the
Deuring–Heilbronn phenomenon: that zeros of L-func-
tions [III.47](/part-03/l-functions) repel each other, rather like similarly
charged particles. (This phenomenon is akin to the
fact that different algebraic numbers repel one another,
part of the basis of the subject of Diophantine approx-
imation.)
   How big is the smallest prime congruent to a mod q
when (a, q) = 1? Despite the possibility of the existence
of Siegel zeros, one can prove that there is always such

IV. Branches of Mathematics
a prime less than q5.5 if q is sufficiently large. Obtain-
ing a result of this type is not difficult when there are
1
no Siegel zeros. If there are Siegel zeros, then we go
back to the explicit formula, which is similar to (7) but
now concerns zeros of L(s, χ). If β is a Siegel zero, then
π (x)     √                           it turns out that in the explicit formula there are now
π (x; q, a) =
two obviously large terms: x/φ(q) and −( q )x β /βφ(q).
φ(q)
a
When ( q ) = 1 it appears that they might almost cancel
(since β is close to 1), but with more care we obtain
a xβ
x−        = (x − x β ) + x β 1 −       ∼ x(1 − β) log x.
q β
This is a smaller main term than before, but it is not
too hard to show that it is bigger than the con tr ibu-
tions of all of the other zeros combined, because the
Deuring–Heilbronn phenomenon implies that the Siegel
zero repels those zeros, forcing them to be far to the
a
left. When ( q ) = −1, the same two terms tell us that
primes as we would expect up to x that are congruent
to a mod q.
There is a close connection between Siegel zeros
and class numbers, which are defined and discussed in
algebraic numbers [IV.1 §7](/part-04/number-theory). Dirichlet’s class number
√
formula states that L(1, ( q· )) = π h−q / q for q > 6,
√
class number is always a positive integer, so this result
·         √
immediately implies that L(1, ( q )) ⩾ π / q. Another
consequence is that h−q is small if and only if L(1, ( q· ))
is small. The reason this gives us information about
Siegel zeros is that one can show that the derivative
·
L (σ , ( q )) is positive (and not too small) for real num-
bers σ close to 1. This implies that L(1, ( q· )) is small
if and only if L(s, ( q· )) has a real zero close to 1, that
is, a Siegel zero β. When h−q = 1, the link is more
direct: it can be shown that the Siegel zero β is approx-
√
imately 1 − 6/(π q). (There are also more complicated
√
These connections show that getting good lower
bounds on h−q is equivalent to getting good bounds
on the possible range for Siegel zeros. Siegel showed
that for any ε > 0 there exists a constant cε > 0
such that L(1, ( q· )) ⩾ cε q−ε . His proof was unsatis-
factory because by its very nature one cannot give an
explicit value for cε . Why not? Well, the proof comes
in two parts. The first assumes the generalized Rie-
mann hypothesis, in which case an explicit bound fol-
lows easily. The second obtains a lower bound in terms
of the first counterexample to the generalized Riemann
hypothesis. So if the generalized Riemann hypothesis is

$IV$ . $2$ .

Analytic Number Theory

true but remains unproved, then Siegel’s proof cannot be exploited to give explicit bounds. This dichotomy, between what can be proved with an explicit constant and what cannot be, is seen far and wide in analytic number theory--and when it appears it usually stems from an application of Siegel’s result, and especially its consequences for the range in which the estimate ( $11$ ) is valid. A polynomial with integer coefficients cannot always take on prime values when we substitute in an integer. To see this, note that if p divides f (m) then p also divides f (m  +  p), f (m $+ 2p$ ), . . . .
However, there are some prime-rich polynomials, a famous example being the polynomial $x^{2} + x + 41$ , which is prime for $x = 0$ , $1$ , $2$ , . . . , $39$ . There are almost certainly quadratic polynomials that take on more consecutive prime values, though their coefficients would have to be very large. If we ask the more restricted question of when the polynomial $x^{2} + x + p$ is prime for $x = 0$ , $1$ , $2$ , . . . , $p - 2$ , then the answer, given by Rabinowitch, is rather surprising: it happens if and only if $h - q = 1$ , where $q = 4p - 1$ .
Gauss did extensive calculations of class numbers and predicted that there are just nine values of q with $h - q = 1$ , the largest of which is $163 = 4 \times 41 - 1$ . Using the Deuring-Heilbronn phenomenon researchers showed, in the $1930s$ , that there is at most one q with $h - q = 1$ that is not already on Gauss’s list; but as usual with such methods, one could not give a bound on the size of the putative extra counterexample.
It was not until the $1960s$ that Baker and Stark proved that there was no tenth q, both proofs involving techniques far removed from those here (in fact Heegner gave what we now understand to have been a correct proof in the $1950s$ but he was so far ahead of his time that it was difficult for mathematicians to appreciate his arguments and to believe that all of the details were correct). In the $1980s$ Goldfeld, Gross, and Zagier gave the best result

$1$

to date, showing that $h - q \ge 7700$

log q this time using

the Deuring-Heilbronn phenomenon with the zeros of yet another type of L-function to repel the zeros of L (s , (q ·)). This idea that primes are well-distributed in arithmetic progressions except for a few rare moduli was exploited by Bombieri and Vinogradov to prove that ( $11$ ) holds “almost always” when x is a little bigger than $q^{2}$ (that is, in the same range that we get “always” from the generalized Riemann hypothesis). More precisely, for given large x we have that ( $11$ ) holds for “almost √ all” q less than x  /  (log x) 2 and for all a such that (a , q) $= 1$ .
“Almost all” means that, out of all q less

$341$

√

than $x/($ log x)2 , the proportion for which (11) does not hold for every a with  (  a , $q) = 1$ tends to $0$ as $x \to \infty.$ Thus, the possibility is not ruled out that there are infinitely many counterexamples. However, since this would contradict the generalized Riemann hypothesis, we do not believe that it is so. The Barban-Davenport-Halberstam theorem gives a weaker result, but it is valid for the whole feasible range: for any given large x, the estimate ( $11$ ) holds for “almost all” pairs $q$ and a such that $q \le x/($ log x)2 and  (  a , $q) = 1$ .

$5$

Primes in Short Intervals

Gauss’s prediction referred to the primes “around” x, so it perhaps makes more sense to interpret his statement by considering the number of primes in short intervals at around x. If we believe Gauss, then we might expect the number of primes between $x$ and $x$  +  y to be about y  /  log x. That is, in terms of the prime-counting function $\pi$ , we might expect that y $\pi(x + y) - \pi(x)$ ∼

(14)

log x

for $|y| \le x/2$ . However, we have to be a little careful about the range for y. For example, if y $= \frac{1}{2}$ log x, then we certainly cannot expect to have half a prime in each interval. Obviously we need y to be large enough that the prediction can be interpreted in a way that makes sense; indeed, the Gauss-Cramér model suggests that (14) should hold when |y|$is$ a little bigger than (log x)2 . If we attempt to prove ( $14$ ) using the same methods we used in the proof of the prime number theorem, we find ourselves bounding differences between ρth powers as follows:

$(x + y)ρ - xρx + y ρ - {}^{1}dt = t$

ρ

x

$x + y$

t $Re ( ρ) - {}^{1}dt\le$

x

$\le y(x + y)Re ( ρ) - {}^{1}$ .

With bounds on the density of zeros of ζ (s) well to the right of $\frac{1}{2}$ , it has been shown that ( $14$ ) holds for y a little bigger than $x^{7}/ {}^{12}$ ; but there is little hope, even assuming the Riemann hypothesis, that such methods √ will lead to a proof of ( $14$ ) for intervals of length x or less. In 1949 Selberg showed that (14) is true for “almost all” $x$ when |y|$is$ a little bigger than (log x)2 , assuming the Riemann hypothesis.
Once again, “almost all” means with density tending to $1$ , rather than “all,” and it is feasible that there are infinitely many counterexamples, though at that time it seemed highly unlikely.

$342$

It therefore came as a surprise when Maier showed, in 1984 , that, for any fixed $A > 0$ , the estimate (14) fails for infinitely many integers x, with y  =  (log x) A . His ingenious proof rests on showing that the small primes do not always have as many multiples in an interval as one might expect. Let $p^{1} = 2 < p^{2} = 3 <$ · · · be the sequence of primes. We are now interested in the size of the gaps $p^{n} + {}^{1} - p^{n}$ between consecutive primes.
Since there are about x  /  log x primes up to x, the average difference is log x and we might ask how often the difference between consecutive primes is about average, whether the differences can get really small, and whether the differences can get really large. The Gauss Cramér model suggests that the proportion of n for which the gap between consecutive primes is more than $\lambda$ times the average, that is $p^{n} + {}^{1} - p^{n} > \lambda$ log $p^{n}$ , is approximately $e - \lambda$ ;
and, similarly, the proportion of intervals [x , x + . ambda log x] containing exactly k primes is approximately $e - \lambda\lambda^{k}/k$ ! , a suggestion which, as we shall see, is supported by other considerations. By looking at the tail of this distribution, Cramér conjectured that lim sup $n \to \infty(p^{n} + {}^{1} - p^{n})/($ log pn)2 = 1 , and the evidence we have seems to support this (see table $2$ ). The Gauss-Cramér model does have a big drawback: it does not “know any arithmetic.” In particular, as we noted earlier, it does not predict divisibility by small primes.
One manifestation of this failing is that it predicts that there should be just about as many gaps of length $1$ between primes as there are of length $2$ . However, there is only one gap of length $1$ , since if two primes differ by $1$ , then one of them must be even, where as there are many examples of pairs of primes differing by $2$ , and there are believed to be infinitely many. For the model to make correct conjectures about prime pairs, we must consider divisibility by small primes in the formulation of the model, which makes it rather more complicated.
Since there are these glaring errors in the simpler model, Cramér’s conjecture for the largest gaps between consecutive primes must be treated with a degree of suspicion. And in fact, if one corrects the model to account for divisibility by small primes, one is led to conjecture that lim sup $n \to \infty(p^{n} + {}^{1} - p^{n})/($ log pn)2 is greater than $\frac{9}{8}$ . Finding large gaps between primes is equivalent to finding long sequences of composite numbers. How about trying to do this explicitly?
For example, we know that $n! + j$ is composite for $2 \le j \le n,$ as it is divisible by j. Therefore we have a gap of length at least n between consecutive primes, the first of which is

IV. Branches of Mathematics

Table $2$ The largest known gaps between primes.

$p^{n} + {}^{1} - p^{n}p^{n} + {}^{1} - p^{n}$

p n

log $2pn113140$ . 62641327340 . 657631397720 . 67153702611120 . 681220107331480 . 7026208313232100 . 7395250560820874560 . 795326149417105996520 . 7975195813341924237660 . 81782182094054365439060 . 8311169318231874637111320 . 9206

the largest prime less than or equal to $n! + 1$ . However, this observation is not especially helpful, since the average gap between primes around n! is log (n !), which is approximately equal to n log n, where as we are looking for gaps that are larger than the average. However, it is possible to generalize this argument and show that there are indeed long sequences of consecutive integers, each with a small prime factor. In the $1930s$ , Erdős reformulated the question as follows.
Fix a positive integer z, and for each prime p $\le$ z choose an integer a p in such a way that, for as large an integer y as possible, every positive integer n $\le$ y satisfies at least one of the congruences n ≡ a p (mod p). Now let X be the product of all the primes up to z (which means, by the prime number theorem, that log X is about z), and let x be the integer between X and $2X$ such that x ≡  -  a p (mod p) for every p $\le$ z.
(This integer exists, by the Chinese remainder theorem .) If m is an integer between $x + 1$ and $x + y,$ then $m - x$ is a positive integer less than y, so m  -  x ≡ a p (mod p) for some prime p $\le$ z. Since x ≡  -  a p (mod p), it follows that m is divisible by p. Thus, all the integers from $x + 1$ to x  +  y are composite. Using this basic idea, it can be shown that there are infinitely many primes p n for which p n $+ {}^{1} -$ p n is about (log p n) (log log p n), which is significantly larger than the average but no where close to Cramér’s conjecture.

$6$

Gaps between Primes That Are

Smaller Than the Average

We have just seen how to show that there are infinitely many pairs of consecutive primes whose difference is much bigger than the average: that is, lim sup $n \to \infty(p^{n} + {}^{1} - p^{n})/($ log $p^{n}) = \infty.$ We would now

$IV$ . $2$ .

Analytic Number Theory

like to show that there are infinitely many pairs of consecutive primes whose difference is much smaller than the average: that is, lim inf $n \to \infty(p^{n} + {}^{1} - p^{n})/($ log $p^{n}) =0$ . Of course, it is believed that there are infinitely many pairs of primes that differ by $2$ , but this question seems intractable for now. Until recently researchers had very little success with the question of small gaps; the best result before 2000 was that there are infinitely many gaps of size less than one-quarter of the average.
However, a recent method of Goldston, Pintz, and Yıldırım, which counts primes in short intervals with simple weighting functions, proves that lim inf $n \to \infty(p^{n} + {}^{1} - p^{n})/($ log $p^{n}) = 0$ , and even that there are infinitely many pairs of consecutive primes with difference no larger than about log p n . Their proof, rather surprisingly, rests on estimates for primes in arithmetic progressions; in par√ ticular, that ( $11$ ) holds for almost all q up to x (as discussed earlier). More over, they obtain a conditional result of the following kind:
if in fact ( $11$ ) holds for √ almost all q up to a little larger than x, then it follows that there exists an integer B such that $p^{n} + {}^{1} - p^{n} \le B$ for infinitely many primes p n .

$7$

Very Small Gaps between Primes

There appear to be many pairs of primes that differ by two, like $3$ and $5$ , $5$ and $7$ , . . . , the so-called twin primes, though no one has yet proved that there are infinitely many. In fact, for every even integer $2k$ there seem to be many pairs of primes that differ by $2k$ , but again no one has yet proved that there are infinitely many. This is one of the outstanding problems in the subject. In a similar vein is Goldbach’s conjecture from the

$1760s$ : is it true that every even integer greater than $2$ is the sum of two primes? This is still an open question, and indeed a publisher recently offered a million dollars for its solution. We know it is true for almost all integers, and it has been computer tested for every even integer up to $4 \times 10^{14}$ . The most famous result on this question is due to Chen ( 1966 ), who showed that every even integer can be written as the sum of a prime and a second integer that has at most two prime factors (that is, it could be a prime or an “ almostprime ”).
In fact, goldbach [VI.17](/part-06/christian-goldbach-16901764) never asked this question. He asked Euler, in a letter in the $1760s$ , whether every integer greater than $1$ can be written as the sum of at most three primes, which would imply what we now call the “Goldbach conjecture.” In the $1920s$ Vinogradov showed that every sufficiently large odd integer can be

$343$

written as the sum of three primes (and thus every sufficiently large even integer can be written as the sum of four primes). We actually believe that every odd integer greater than $5$ is the sum of three primes but the known proofs only work once the numbers involved are large enough. In this case we can be explicit about “sufficiently large”--at the moment the proof needs them to be at least $e^{5700}$ , but it is rumored that this may soon be substantially reduced, perhaps even to $7$ . To guess at the precise number of prime pairs $q, q + 2$ with $q \le x$ we proceed as follows.
If we do not consider divisibility by the small primes, then the Gauss-Cramér model suggests that a random integer up to x is prime with probability roughly $1/$ log  x, so we might expect $x/($ log x)2 prime pairs $q, q + 2$ up to x. However, we do have to account for the small primes, as the $q, q + 1$ example shows, so let us consider $2$ - divisibility . The proportion of random pairs of integers that are both odd is $\frac{1}{4}$ , where as the proportion

$1$

of random q such that $q$ and $q + 2$ are both odd i$s^{2}$ . Thus we should adjust our guess x  /  (log x) 2 by a factor

$11({}^{2})/({}^{4}) = 2$ . Similarly, the proportion of random pairs of integers that are both not divisible by $3$ (or indeed by

$2$

any given odd prime p  )  is ({}3)2 ( and (1 - 1/p)2 , respectively), where as the proportion of random q such that $q$ and $q + 2$ are both not divisible by 3( or by prime p  )  is

$1{}^{3} ($ and $(1 - 2/p)$ , respectively). Adjusting our formula for each prime p we end up with the prediction #{q $\le x$ : $q$ and $q + 2$ both prime}

$(1 - 2/p)$

x

∼ $2$ / - 

2 ($log$ x)2(11/p)

p an odd prime

This is known as the asymptotic twin prime conjecture. Despite its plausibility there do not seem to be any practical ideas around for turning the heuristic argument above into something rigorous. The one good unconditional result known is that the number of twin primes less than or equal to x is never more than four times the quantity we have just predicted.
One can make a more precise prediction replacing $x/($ log x)2 x by ${}^{2} (1/($ log t)2)dt, and then we expect that the dif√ ference between the two sides is no more than c x for some constant $c > 0$ , $a$ guesstimate that is well supported by computational evidence. A similar method allows us to make predictions for the number of primes in any polynomial-type patterns. Let $f^{1}$ (t), $f^{2}$ (t), . . .
, f k (t) $\in$ Z [t] be distinct irreducible polynomials of degree greater than or equal to $1$ with positive leading coefficient, and define ω (p) to be the number of integers n (mod p) for which p divides

$344f^{1}$ (n) $f^{2}$ (n) · · · f k (n). (In the case of twin primes above we have $f^{1}(t) = t, f^{2}(t) = t + 2$ with $ω(2) = 1$ and ω (p) $= 2$ for all odd primes p .) If ω (p)  =  p then p always divides at least one of the polynomial values, so they can be simultaneously prime just finitely often (an example of this is when $f^{1}(t) = t, f^{2}(t) = t + 1$ , in which case $ω(2) = 2)$ . Otherwise we have an admissible set of polynomials for which we predict that the number of integers n less than x for which all of $f^{1}$ (n), $f^{2}$ (n), . . . , f k (n) are prime is about

(1 - ω(p)/p)(1 - 1/p)k

p prime

x

$\times(15)$

log $|f^{1}(x)|$ log $|f^{2}(x)|$ · · · log $|f^{k}(x)|$ once x is sufficiently large. One can use a similar heuristic to make predictions in Goldbach’s conjecture, that is, for the number of pairs of primes p, q for which $p + q = 2N$ . Again, these predictions are very well matched by the computational evidence. There are just a few cases of conjecture ( $15$ ) that have been proved.
Modifications of the proof of the prime number theorem give such a result for admissible polynomials qt  +  a (in other words, for primes in arithmetic progressions) and for admissible at ${}^{2} +$ btu $+ cu^{2} \in$ Z [t , u] (as well as some other polynomials in two variables of degree two) . It is also known for a certain type of polynomial in n variables of degree n (the admissible “ normforms ”).
There was little improvement on this situation during the twentieth century until quite recently, when, by very different methods, Friedlander and Iwaniec broke through this stalemate showing such a result for the polynomial $t^{2} + u^{4}$ , and then Heath-Brown did so for any admissible homogeneous polynomial in two variables of degree three. Another truly extraordinary breakthrough occurred recently with a result of Green and Tao, proved in 2004 , which states that for every k there are infinitely many k-term arithmetic progressions of primes:
that is, pairs of integers a, $d$ such that $a,a + d$ , $a + 2d$ , . . . , $a + (k - 1)d$ are all prime. Green and Tao are currently hard at work attempting to show that the number of k-term arithmetic progressions of primes is indeed well approximated by ( $15$ ). They are also extending their results to other families of polynomials.

$8$

Gaps between Primes Revisited

In the $1970s$ Gallagher deduced from the conjectured prediction (15) (with $f^{j}(t) = t + a^{j})$ that the propor-

IV. Branches of Mathematics

tion of intervals [x , x + . ambda log x] which contain exactly k primes is close to $e - \lambda\lambda^{k}/k$ ! (as was also deduced, in section $5$ above, from the Gauss-Cramér heuristics). This has recently been extended to support the prediction that, as we vary x from X to $2X$ , the number of primes in the interval [x , x + y] is normally distributed with

$x + y$

mean $x (1/$ log  t)dt and variance $(1 - δ)y/$ log  x, where δ is some constant strictly between $0$ and $1$ and we take y to be x δ . √ When y $>$ x the Riemann zeta function supplies information on the distribution of primes in intervals [x , x + y) via the explicit formula (7). Indeed, when we compute the “variance”

$22X1$

log $p - y$

dx

X

X

p prime,

$x < p \le x + y$

using the explicit formula we obtain a sum of terms

$2X$

of the form X x i (γ j  -  γ k) dx. Here we are assuming the Riemann hypothesis and writing the zeros of ζ (s) as

$1{}^{2}$ ± $iγ^{n}$ with $0 < γ^{1} < γ^{2} <$ · · · . This sum is dominated by the terms corresponding to those pairs γ j , γ k for which $|γ^{j} - γ^{k}|$ is small (in which case there is little cancellation in the integral). Therefore, in order to understand the variance for the distribution of primes in short intervals we need to understand the distribution of the zeros of ζ (s) in short intervals.
In 1973 Montgomery investigated this and suggested that the proportion of pairs of zeros of ζ (s) whose difference is less than α times the average gap between consecutive zeros is given by the integral

$2$

α

sin \pi. heta1 -d. heta,(16)\pi. heta0

and he proved an equivalent form of this in a limited range. If the zeros were placed “randomly,” then

(16) would be replaced by α. In fact (16) is about $\frac{1}{9}α^{3}$ for small α, which is far smaller than α. This means that there are far fewer pairs of zeros of ζ (s) that are close together than one might expect, which we express informally by saying that the zeros of ζ (s) repel one another. In a now-famous conversation that took place at the Institute for Advanced Study in Princeton, Montgomery mentioned his ideas to the physicist Freeman Dyson. Dyson immediately recognized ( $16$ ) as a function that comes up in modeling energy levels in quantum chaos.
Believing that this was unlikely to be a coincidence, he suggested that the zeros of the Riemann zeta function are distributed, in all aspects, like energy levels, which are in turn modeled on the distribution of eigenvalues

$IV$ . $2$ .

Analytic Number Theory

[I.3](/part-01/fundamental-definitions) of random hermitian matrices [III.50](/part-03/linear-operators-and-their-properties). There is now substantial computational and theoretical evidence that Dyson’s suggestion is correct and can be extended to Dirichlet L-functions, as well as other types of L-functions, and even to other statistics about L-functions. One note of caution. Few of the conjectured consequences of this new “random matrix theory” have been unconditionally proved, or seem likely to be in the foreseeable future.
It simply provides a tool to make predictions where that was too difficult to do before. However, there is at least one key question about which we still cannot make a well-substantiated prediction: how

$1$

big does ζ (s) get on th$e^{2}$ - line ? One can show that

$1$

log $|ζ({}^{2} +$ it )| gets larger than log T for values of t close to T , and that it gets no larger than log T . However, it is unclear, even if we do not insist on a rigorous proof, whether the true maximal order is nearer the upper or lower bound. $9$ Sieve Methods Almost all of our discussion so far has been about developments of Riemann’s approach to counting primes. This approach is very delicate and not as adaptable as one might wish to many natural questions (such as counting k-tuples of primes $n + a^{1}$ , $n + a^{2}$ , . . . , $n + a^{k})$ .
However, one can go back to sieve methods, which are modifications of the sieve of Eratosthenes, and at least get upper bounds. For example, suppose we want to find an upper bound for the number of prime pairs $n, n + 2$ with $N < n \le 2N$ . One possibility would be to fix a number y and determine for how many pairs $n, n + 2$ with $N < n \le 2N$ it is the case that neither n nor n $+ 2$ has a prime factor less than y. If we took y to be (2 N)1/2 , then this method would exactly count the twin primes, but it seems to be far too difficult to implement.
But it turns out that if instead we take y to be a small power of N, then the calculations become much easier and there are methods of obtaining good bounds. (However , the bounds given by these methods

$1$

become less accurate as the power gets closer t$o^{2}$ .) In the $1920s$ Brun showed how to make the principle of inclusion-exclusion into a useful tool in this type of question. This principle is best exhibited when counting the number of integers n in a set S that are coprime to given integer m. We begin with the number of integers in S, which is obviously more than the quantity we seek. Next, we subtract, for each prime p dividing m, the number of integers in S that are divisible by p. If

$345$

n $\in$ S is divisible by exactly r prime factors of m, then we have counted $1 + r \times ( - 1)$ for the contribution of n so far, which is less than or equal to $0$ , and less than $0$ for $r \ge 2$ ; where as we wanted to count $0$ when $r \ge 2$ (since n is not coprime to m). Thus we obtain a number that is less than the quantity we seek. To compensate for that, we add back in the number of integers in S divisible by pq for each pair of primes p $<$ q   which divide m.
We have now counted $1 + r \times ( - 1) + r2 \times 1$ for the contribution of n, which is greater than or equal to $0$ , and greater than $0$ for $r \ge 3$ . Similarly, we subtract the number of integers divisible by pqr , etc. For each $n \in S$ we end up counting (1 - 1)r for n, where r is the number of distinct prime factors of (m , n). Expanding this sum with the binomial theorem we may reexpress this identity as follows. Let $χ^{m}(n) = 1$ if (n , $m) = 1$ and $0$ otherwise. Then

$χ^{m}(n) =$

μ (d),

d |$(m , n) where \mu (m)$, the Möbius function, equals $0$ if m is divisible by the square of a prime and equals ( $- 1$ ) ω (m) otherwise, where ω (m) is the number of distinct prime factors of m. The inclusion-exclusion inequalities just discussed may be obtained from

$\mu(d) \le χ^{m}(n) \le$

μ (d),

d | (m , n)

d | (m , n)

$ω(d) \le 2k + 1ω(d) \le 2k$

which holds for any $k \ge 0$ , by summing over all $n\inS.$ The reason for using these abbreviated sums rather than the complete sum is that there are far fewer terms and thus, when one sums over values of n, there will be far fewer rounding errors (remember that it was rounding errors that sank our attempt to estimate the number of primes up to x using the sieve of Eratosthenes). On the other hand, they have the disadvantage that they cannot possibly give the exact answer, since they are missing many appropriate terms.
However, with a judicious choice of k the missing terms do not contribute much to the complete sum and we get a good answer. Minor variants work well for many questions. In the “combinatorial sieve” one selects which d are part of the upper and lower bound sums, not by counting the total number of prime factors they contain but instead using other criteria, such as the numbers of prime factors of d in each of several intervals. Using such a method, Brun showed that there cannot be too many twin primes $p, p + 2$ ;
indeed, the sum of $1/p$ , over all primes p for which $p + 2$ is also prime, converges, in contrast with (3) .

346

  In the “Selberg upper bound sieve” one comes up
with some numbers . ambda d that are nonzero only when
d ⩽ D (where D is chosen to be not too large), with
the property that

Summing over the appropriate n one then finds the
optimal solution by minimizing the resulting quad-
ratic form. Lower bounds can also be obtained out
of Selberg’s methods. It was by using such methods
that Chen was able to prove there are infinitely many
primes p for which p + 2 has at most two prime fac-
tors, and that Goldston, Pintz, and Yıldırım were able to
establish that there are some times short gaps between
primes. These methods are also an essential ingredient
in the work of Green and Tao. One can also get good
upper bounds on the number of primes in arithmetic
progressions and short intervals:
  • the number of primes in any interval of length y
    is never greater than 2 y/ log y;
  • the number of primes less than x in an arith-
    metic progression mod q is never greater than
    2 x/φ(q) log(x/q).
Notice that in each case the log in the denominator
is of the number of integers being considered (y and
x/q, respectively), not log x as expected, though this
will only make a significant difference if the number
of integers being considered is small. Otherwise these
inequalities are bigger than the expected quantity by a
factor of 2. Can this “2” be improved? It will be difficult
because we showed earlier that if there are Siegel zeros
then we get twice as many primes as expected in certain
arithmetic progressions. Therefore, if we can improve
the “2” in these two formulas, then we can deduce that
there are no Siegel zeros!

An integer is y-smooth if all of its prime factors are
less than or equal to y. A proportion 1 − log 2 of the
integers up to x are x-smooth, and indeed, for any
fixed u > 1 there exists some number ρ(u) > 0 such
that if x = y u , then a proportion ρ(u) of the integers
up to x are y-smooth. This proportion does not seem
to have any easy definition in general. For 1 ⩽ u ⩽ 2 we
have ρ(u) = 1 − log u, but for larger u it is best defined
as

IV. Branches of Mathematics
an integral delay equation. Such an equation is typical
when we give precise estimates for questions that arise
in sieve theory.
Questions about the distribution of smooth numbers
     2                               arise frequently in the analysis of algorithms, and have
χm (n) ⩽     . ambda d   for all n.
d|n
(See computational number theory [IV.3 §3](/part-04/computational-number-theory) for an
example of the use of smooth numbers.)
11 The Circle Method
Another method of analysis that plays a prominent role
in this subject is the so-called circle method, which goes
back to hardy [VI.73](/part-06/godfrey-harold-hardy-18771947) and littlewood [VI.79](/part-06/john-edensor-littlewood-18851977). This
method uses the fact that, for any integer n,
⎧
1               ⎨1 if n = 0,
2 iπ nt
e        dt =
0
For example, if we wish to count the number, r (n), of
solutions to the equation p +q = n with p and q prime,
we can express it as an integral as follows:
      1
r (n) =
p, q⩽n    0
both prime
1                                      2
=
0              p prime, p⩽n
The first equality holds because the integrand is 0 when
p + q = n and 1 otherwise, and the second is easy to
check.
At first sight it looks more difficult to estimate the
integral than it is to estimate r (n) directly, but this
is not the case. For instance, the prime number theo-
rem for arithmetic progressions allows us to estimate

P (t) = p⩽n e2 iπ pt when t is a rational /m with m
small. For in this case,
                         
P
m
p≡a   (mod m)
             π (n)        π (n)
10   Smooth Numbers
(a, m)=1
φ(m)         φ(m)
If t is sufficiently close to /m, then P (t) ≈ P (/m);
√                                   such values of t are called the major arcs and we believe
that the integral over the major arcs gives, in total,
a very good approximation to r (n); indeed, we get
something very close to the quantity one predicts from
something like (15). Thus to prove the Goldbach con-
jecture we need to show that the contribution to the
integral from the other values of t (that is, from the
1 1                                minor arcs) is small. In many problems one can success-
ρ(u) =
u 0

$IV$ . $2$ .

Analytic Number Theory

for the Goldbach problem. Also useful is the “discrete analogue” of the above: using the identity ⎧ ⎨ $1$ if $n$ ≡ 0 ( mod m  ),

$12i\pi\text{jn}/ mm - 1dt =$

e

⎩ $0$ otherwise

m

$j = 0$

(which holds for any given integer m $\ge 1$ ), we have that

$12i\pi^{j}(p + q - n)/ mm - 1r(n) =$

e

$m j = 0$

p, q $\le n$

both prime

m - 1 e - 2 i\pi jn/m P(j/m)2 = j = 0

provided m $>$ n. A similar analysis can be used here but working mod m some times has advantages, as it allows us to use properties of the multiplicative group mod m. Sums like P (j  /  m) in the paragraph above or more k simple sums like $n \le Ne^{2i}\pi^{n} / m$ are called exponential sums. They play a central role in many of the calculations one does in analytic number theory. There are several techniques for investigating them. (1) It is easy to calculate the sum $n \le Ne^{2i}\pi^{n}/ m$ , since it is a geometric progression.
With higher-degree polynomials one can often reduce to this case; for example, by writing $n^{1} - n^{2} = h$ we hav$e^{2}e2i\pi n /m2n \le N22e2i\pi(n^{1} - n^{2})/m = n^{1}$ , n {}2 \le N2 e2 i\pi h /me4 i\pi hn2/m$, =$|h| \le N$max 0 ,$- h < n2 \le min. N, N - h\}

and the inner sum is now a geometric progression. ( $2$ ) The work of Weil and Deligne, which gives very accurate results on the number of solutions to equations mod p, is ideally suited to many applications in analytic number theory. For example, the “Kloosterman sum” $a^{1}a^{2}$ ···$a^{k}$ ≡b (mod $p)e2i\pi(a^{1} + a^{2} +$ · · · $+ a^{k})/p$ , where the a i run over the integers mod p and (b , p) $= 1$ , appears naturally in many questions;
Deligne showed that it has absolute value less than or equal to $kp(k - {}^{1})/ {}^{2}$ , an extraordinary amount of cancellation in this sum which has about $p^{k} - {}^{1}$ summands, each of absolute value $1$ . (See the weil conjectures [V.35](/part-05/the-weil-conjectures).) ( $3$ ) We discussed earlier the fact that the values of ζ (s) satisfy a symmetry about the line Re (s) $= \frac{1}{2}$ , given by the “functional equation.” There are other functions (called “modular functions ”) that also have symme-

$347$

tries in the complex plane; typically the value of the function at s is related to the value of the function at (α s  +  β)  /  (γ s  +  δ), for some integers α, β, γ, δ satisfying $αδ - βγ = 1$ . Some times an exponential sum can be related to the value of a modular function, and subsequently to the value of that modular function at another point, using the symmetry of the function.

$12$

More L-Functions

There are many types of L-functions beyond Dirichlet Lfunctions, some of which are well understood, some not (see L-functions [III.47](/part-03/l-functions)) . The type that has received the most attention recently is a class of L-functions that can be associated with elliptic curves (see arithmetic geometry [IV.5](/part-04/arithmetic-geometry) ). An elliptic curve E is given by an equation of the form $y^{2} = x^{3} + ax + b,$ where the discriminant $4a^{3} + 27b^{2}$ is nonzero. The associated Lfunction L (E , s) is most easily described in terms of its Euler product:
$p - 1$ a p $1 - s + {}^{2s}$ L (E , s) = . (17) p p p Here a p is an integer which, for primes p not dividing $4a^{3} + 27b^{2}$ , is defined to be p minus the number of solutions (x ,  y) (mod p ) to the equation $y^{2}$ ≡ $x^{3} + ax + b$ (mod p). It can be shown that each | a p | is less than √ $2$ p, so the Euler product above converges absolutely when $Re(s) > \frac{3}{2}$ . Therefore, (17) is a good definition for these values of s. Can we now extend it to the whole of the complex plane, as we did for ζ (s) ? This is a very deep problem--the answer is yes;
in fact, it is the celebrated theorem of Andrew Wiles that implied fermat’s last theorem [V.10](/part-05/fermats-last-theorem). Another interesting question is to understand the √ distribution of values of $a^{p}/2 p$ as we range over primes p. These all lie in the interval [− 1 , 1 ] . One might expect them to be uniformly distributed in the interval, but in fact this is never the case. As discussed in algebraic numbers [IV.1](/part-04/number-theory) one can write $a^{p} = α^{p} +$ ᾱ p , √ where $|α^{p}| = p,$ and α p is called the Weil number.
If √ $±i\theta^{p}$ √ we write $α = pe$ , then $a^{p} = 2 p$ cos $(\theta^{p})$ for some angle $\theta^{p} \in$ [0 , π ]. We can then think of $\theta^{p}$ as belonging to the upper half of a circle. The surprise is that for almost all elliptic curves the $\theta$ p are not uniformly distributed, which would mean the proportion in a certain arc would be proportional to the length of that arc. Rather, they are distributed in such a way that the proportion of them in any given arc is proportional to the area under that arc. This is a recent result of Richard Taylor.