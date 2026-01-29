# Analytic Number Theory

332                                                                                         IV. Branches of Mathematics

Cohen, H. 1993. A Course in Computational Algebraic Num-         25 . imes 637. Further more, the number 637 can be decom-
  ber Theory. New York: Springer.                                posed further: it is 49 . imes 13. That is, 15 925 = 52 . imes 72 . imes 13.
Ireland, K., and M. Rosen. 1982. A Classical Introduction to     This information helps us a lot, because if we can find
  Modern Number Theory, 2 nd edn. New York: Springer.             integers a and b such that a2 + b2 = 13, then we can
Serre, J.-P. 1973. A Course in Arithmetic. New York: Springer.
                                                                 multiply them by 5 . imes 7 = 35 and we will have a solution
                                                                 to the original equation. Now we notice that a = 2 and
Technical Articles and Books                                     b = 3 works, since 22 +32 = 13. Multiplying these num-
Baker, A. 1971. Imaginary quadratic fields with class num-        bers by 35, we obtain the solution 702 + 1052 = 15 925
  ber 2. Annals of Mathematics (2) 94:139–52.                    to the original equation.
Brauer, R. 1950. On the Zeta-function of algebraic number           As this simple example shows, it is often useful to
  fields. I. American Journal of Mathematics 69:243–50.           decompose positive integers multiplicative ly into com-
Brauer, R. 1950. On the Zeta-function of algebraic number        pone nts that cannot be broken down any further. These
  fields. II. American Journal of Mathematics 72:739–46.
                                                                 components are called prime numbers, and the fun-
Goldfeld, D. 1985. Gauss’s class number problem for imagi-
                                                                 da mental theorem of arithmetic [V.14](/part-05/the-fundamental-theorem-of-arithmetic) states that
  nary quadratic fields. Bulletin of the American Mathemat-
  ical Society 13:23–37.
                                                                 every positive integer can be written as a product of
Granville, A., and G. Martin. 2006. Prime number races.          primes in exactly one way. That is, there is a one-to-one
  American Mathematical Monthly 113:1–33.                        correspondence between positive integers and finite
Gross, B., and D. Zagier. 1986. Heegner points and deriva-       products of primes. In many situations we know what
  tives of L-series. Inventiones Mathematicae 84:225–320.        we need to know about a positive integer once we have
Heegner, K. 1952. Diophantische Analysis und Mod ulf unk-          decomposed it into its prime factors and understood
  tionen. Mathematische Zeitschrift 56:227–53.                   those, just as we can understand a lot about molecules
Hua, L.-K. 1942. On the least solution of Pell’s equation.
                                                                 by studying the atoms of which they are composed. For
  Bulletin of the American Mathematical Society 48:731–35.
                                                                 example, it is known that the equation x 2 + y 2 = n has
Lang, S. 1970. Algebraic Number Theory. Reading, MA:
  Addison-Wesley.                                                an integer solution if and only if every prime of the form
Narkiewicz, W. 1973. Algebraic Numbers. Warsaw: Polish           4 m+3 occurs an even number of times in the prime fac-
  Scientific Publishers.                                          tor ization of n. (This tells us, for instance, that there are
Siegel, C. L. 1935. Über die Classenzahl quadratischer           no integer solutions to the equation x 2 + y 2 = 13 475,
  Zahlörper. Acta Arithmetica 1:83–86.                           since 13 475 = 52 . imes 72 . imes 11, and 11 appears an odd
Stark, H. 1967. A complete determination of the complex          number of times in this product.)
  quadratic fields of class-number one. Michigan Mathe-
                                                                    Once one begins the process of determining which
  mat ical Journal 14:1–27.
                                                                 integers are primes and which are not, it is soon appar-
                                                                 ent that there are many primes. However, as one goes
IV.2 Analytic Number Theory                                      further and further, the primes seem to consist of a
                                                                 smaller and smaller proportion of the positive integers.
        Andrew Granville
                                                                 They also seem to come in a some what irregular pat-
                    1   Introduction                             tern, which raises the question of whether there is any
                                                                 formula that describes all of them. Failing that, can one
What is number theory? One might have thought that it            perhaps describe a large class of them? We can also ask
was simply the study of numbers, but that is too broad           whether there are infinitely many primes. If there are,
a definition, since numbers are almost ubiquitous in              can we quickly determine how many there are up to
mathematics. To see what distinguishes number theory             a given point? Or at least give a good estimate for this
from the rest of mathematics, let us look at the equa-           number? Finally, when one has spent long enough look-
tion x 2 + y 2 = 15 925, and consider whether it has any         ing for primes, one cannot help but ask whether there
solutions. One answer is that it certainly does: indeed,         is a quick way of recognizing them. This last question is
                                          √
the solution set forms a circle of radius 15 925 in the          discussed in computational number theory [IV.3](/part-04/computational-number-theory);
plane. However, a number theorist is interested in inte-         the rest motivate the present article.
ger solutions, and now it is much less obvious whether              Now that we have discussed what marks number
any such solutions exist.                                        theory out from the rest of mathematics, we are ready
   A useful first step in considering the above question          to make a further distinction: between algebraic and
is to notice that 15 925 is a multiple of 25: in fact, it is     analytic number theory. The main difference is that

IV.2.   Analytic Number Theory                                                                                                      333

in algebraic number theory (which is the main topic                  Many people dislike this proof, since it does not actu-
of algebraic numbers [IV.1](/part-04/number-theory)) one typically considers              ally exhibit infinitely many primes: it merely shows that
questions with answers that are given by exact formu-             there cannot be finitely many. It is more or less possi-
las, where as in analytic number theory, the topic of              ble to correct this deficiency by defining the sequence
this article, one looks for good approximations. For the          x1 = 2, x2 = 3, and xk+1 = x1 x2 · · · xk + 1 for each
sort of quantity that one estimates in analytic num-              k ⩾ 2. Then each xk must contain at least one prime
ber theory, one does not expect an exact formula to               factor, qk say, and these prime factors must be distinct,
exist, except perhaps one of a rather artificial and un-           since if k < , then qk divides xk which divides x − 1,
illuminating kind. One of the best examples of such a             while q divides x . This gives us an infinite sequence
quantity is one we shall discuss in detail: the number            of primes.
of primes less than or equal to x.                                   In the eighteenth century euler [VI.19](/part-06/leonhard-euler-17071783) gave a dif-
   Since we are discussing approximations, we will need           ferent proof that there are infinitely many primes, one
terminology that allows us to give some idea of the               that turned out to be highly influential in what was
quality of an approximation. Suppose, for example, that           to come later. Suppose again that the list of primes
we have a rather erratic function f (x) but are able to           is p1 , p2 , . . . , pk . As we have mentioned, the funda-
show that, once x is large enough, f (x) is never big-            mental theorem of arithmetic implies that there is a
ger than 25 x 2 . This is useful because we understand             one-to-one correspondence between the set of all inte-
the function g(x) = x 2 quite well. In general, if we             gers and the set of products of the primes, which, if
                                                                                                                  a   a      a
can find a constant c such that |f (x)| ⩽ cg(x) for                those are the only primes, is the set {p1 1 p2 2 · · · pk k :
every x, then we write f (x) = O(g(x)). A typical usage           a1 , a2 , . . . , ak ⩾ 0}. But, as Euler observed, this implies
occurs in the sentence “the average number of prime               that a sum involving the elements of the first set should
factors of an integer up to x is log log x + O(1)”; in            equal the analogous sum involving the elements of the
other words, there exists some constant c > 0 such                second set:
that |the average − log log x| ⩽ c once x is sufficiently                                   1
large.                                                                     n⩾1
                                                                                          ns
   We write f (x) ∼ g(x) if limx→. nfty f (x)/g(x) = 1; and             n a positive integer

also f (x) ≈ g(x) when we are being a little less precise,                                          1
                                                                      =                        a1 a2       ak s
that is, when we want to say that f (x) and g(x) come                     a1 , a2 ,..., ak ⩾0
                                                                                            (p1  p2 · · · pk )
close when x is sufficiently large, but we cannot be, or                               1                   1                     1
do not want to be, more specific about what we mean                    =             a                     a        ···            ak s
                                                                            a1 ⩾0
                                                                                  (p1 1 )s        a2 ⩾0
                                                                                                        (p2 2 )s         ak ⩾0
                                                                                                                               (p k )
by “come close.”
                                              
   It is convenient for us to use the notation for sums                   
                                                                          k
                                                                                      1      −1

                                                              =         1−                .
and       for product. Typically we will indicate beneath                            pj s
                                                                          j=1
the symbol what terms the sum, or product, is to be
                                                                 The last equality holds because each sum in the second-
taken over. For example, m⩾2 will be a sum over all
                                                                  last line is the sum of a geometric progression. Euler
integers m that are greater than or equal to 2, where as

                                                                 then noted that if we take s = 1, the right-hand side
   p prime will be a product over all primes p.
                                                                  equals some rational number (since each pj > 1)
        2   Bounds for the Number of Primes                       where as the left-hand side equals . nfty. This is a contra-
                                                                  diction, so there cannot be finitely many primes. (To see
Ancient Greek mathematicians knew that there were                 why the left-hand side is infinite when s = 1, note that
                                                                             n+1
infinitely many primes. Their beautiful proof by con-              (1/n) ⩾ n (1/t) dt since the function 1/t is decreas-
                                                                                       N−1             N
tradiction goes as follows. Suppose that there are only           ing, and therefore n=1 (1/n) ⩾ 1 (1/t) dt = log N
finitely many primes, say k of them, which we will                 which tends to . nfty as N → . nfty.)
                                                                                                                    
denote by p1 , p2 , . . . , pk . What are the prime factors of       During the proof above, we gave a formula for n−s
p1 p2 · · · pk + 1? Since this number is greater than 1 it        under the false assumption that there are only finitely
must have at least one prime factor, and this must be             many primes. To correct it, all we have to do is rewrite
pj for some j (since all primes are contained among               it in the obvious way with out that assumption:
p1 , p2 , . . . , pk ). But then pj divides both p1 p2 · · · pk                                  
                                                                                           1                1 −1
and p1 p2 · · · pk +1, and hence their difference, 1, which                                    =         1 −       .     (1)
                                                                                 n⩾1
                                                                                          ns    p prime
                                                                                                            ps
is impossible.                                                              n a positive integer

334                                                                                     IV. Branches of Mathematics

Now, however, we need to be a little careful about           from 5, and so on. By the end of this process, one is left
whether the two sides of the formula converge. It is         with the primes up to x.
safe to write down such a formula when both sides are          This suggests a way to guess at how many there are.
absolutely convergent, and this is true when s > 1. (An      After deleting every second integer up to x other than
infinite sum or product is absolutely convergent if the       2 (which we call “sieving by 2”) one is left with roughly
value does not change when we take the terms in any          half the integers up to x; after sieving by 3, one is left
order we want.)                                              with roughly two thirds of those that had remained;
  Like Euler, we want to be able to interpret what hap-      continuing like this we expect to have about
pens to (1) when s = 1. Since both sides converge and                                        1
                                                                                  x      1−                         (4)
are equal when s > 1, the natural thing to do is con-                                         p
                                                                                    p ⩽y
sider their common limit as s tends to 1 from above.
                                                             integers left by the time we have sieved with all the
To do this we note, as above, that the left-hand side of                                    √
                                                             primes up to y. Once y = x the undeleted integers
(1) is well approximated by
                                                             are 1 and the primes up to x, since every composite
                      . nfty
                          dt    1                            has a prime factor no bigger than its square root. So, is
                             =     ,
                      1   ts   s−1                           (4) a good approximation for the number of primes up
                                                                              √
so it diverges as s → 1+ . We deduce that                    to x when y = x?
                              1                                To answer this question, we need to be more precise
                           1−     = 0.                 (2)
                   p prime
                               p                             about what the formula in (4) is estimating. It is sup-
                                                             posed to approximate the number of integers up to x
Taking logarithms and discarding negligible terms, we
                                                             that have no prime factors less than or equal to y, plus
then find that
                      1                                     the number of primes up to y. The so-called inclusion–
                             = . nfty.                  (3)       exclusion principle can be used to show that the approx-
                   p prime
                           p
                                                             imation given in (4) is accurate to within 2 k , where k is
So how numerous are the primes? One way to get an            the number of primes less than or equal to y. Unless k
idea is to determine the behavior of the sum analo-          is very small, this error term of 2 k is far larger than the
gous to (3) for other sequences of integers. For instance,   quantity we are trying to estimate, and the approxima-
          2
   n⩾1 1/n converges, so the primes are, in this sense,      tion is use less. It is quite good if k is less than a small
more numerous than the squares. This argument works          constant times log x, but, as we have seen, this is far
if we replace the power 2 by any s > 1, since then, as       less than the number of primes we expect up to y if
                                                                  √
we have just observed, the sum n⩾1 1/ns is about             y ≈ x. Thus it is not clear whether (4) can be used
1/(s − 1) and in particular converges. In fact, since        to obtain a good estimate for the number of primes up
                  2
   n⩾1 1/n(log n) converges, we see that the primes          to x. What we can do, however, is use this argument to
are in the same sense more numerous than the num-            give an upper bound for the number of primes up to
bers {n(log n)2 : n ⩾ 1}, and hence there are infinitely      x, since the number of primes up to x is never more
many integers x for which the number of primes less          than the number of integers up to x that are free of
than or equal to x is at least x/(log x)2 .                  prime factors less than or equal to y, plus the number
   Thus, there seem to be primes in abundance, but           of primes up to y, which is no more than 2 k plus the
we would also like to verify our observations, made          expression in (4).
from calculations, that the primes constitute a smaller         Now, by (2), we know that as y gets larger and larger

and smaller proportion of the integers as the integers       the product p ⩽y (1 − 1/p) converges to zero. There-
become larger and larger. The easiest way to see this is     fore, for any small positive number ε we can find a

to try to count the primes using the “sieve of Eratos-       y such that p ⩽y (1 − 1/p) < ε/2. Since every term in
thenes.” In the sieve of Eratosthenes one starts with all    this product is at least 1/2, the product is at least 1/2 k .
the positive integers up to some number x. From these,       Hence, for any x ⩾ 22 k our error term, 2 k , is no bigger
one deletes the numbers 4, 6, 8 and so on—that is, all       than the quantity in (4), and therefore the number of
multiples of 2 apart from 2 itself. One then takes the       primes up to x is no larger than twice (4), which, by our
first undeleted integer greater than 2, which is 3, and       choice of y, is less than εx. Since we were free to make
deletes all its multiples—again, not including the num-      ε as small as we liked, the primes are indeed a vanishing
ber 3 itself. Then one removes all multiples of 5 apart      proportion of all the integers, as we predicted.

IV.2.   Analytic Number Theory                                                                                             335

   Even though the error term in the inclusion–exclu-                    Table 1 Primes up to various x, and
sion principle is too large for us to use that method to                 the over count in Gauss’s prediction.
                         √
estimate (4) when y = x, we can still hope that (4) is
                                                                                                            Over count:
a good approximation for the number of primes up to                                                        x
                                                                                                              dt
x: perhaps a different argument would give us a much            x          π (x) = #{primes ⩽ x}                    − π (x)
                                                                                                           2 log t
smaller error term. And this turns out to be the case:
in fact, the error never gets much bigger than (4). How-     108                        5 761 455                        753
                  . qrt{109}                       50 847 534                      1 700
ever, when y = x the number of primes up to x is
                                                             1010                     455 052 511                      3 103
actually about 8/9 times (4). So why does (4) not give
                                                             1011                   4 118 054 813                     11 587
a good approximation? After sieving with prime p we
                                                             1012                  37 607 912 018                     38 262
supposed that roughly 1 in every p of the remaining
                                                             1013                 346 065 536 839                    108 970
integers were deleted: a careful analysis yields that this   1014               3 204 941 750 802                    314 889
can be justified when p is small, but that this becomes       1015              29 844 570 422 669                  1 052 618
an increasingly poor approximation of what really hap-       1016             279 238 341 033 925                  3 214 631
pens for larger p; in fact (4) does not give a correct       1017           2 623 557 157 654 233                  7 956 588
approximation once y is bigger than a fixed power of x.       1018          24 739 954 287 740 860                 21 949 554
So what goes wrong? In the hope that the proportion          1019         234 057 667 276 344 607                 99 877 774
                                                             1020       2 220 819 602 560 918 840                222 744 643
is roughly 1/p lies the unspoken assumption that the
                                                             1021      21 127 269 486 018 731 928                597 394 253
consequences of sieving by p are independent of what
                                                             1022     201 467 286 689 315 906 290              1 932 355 207
happened with the primes smaller than p. But if the
primes under consideration are no longer small, then
this assumption is false. This is one of the main rea-       central one it appears that the difference is something
                                                                  √
sons that it is hard to estimate the number of primes        like x.
up to x, and indeed similar difficulties lie at the heart         In the 1930 s, Harald Cramér, the great probabil-
of many related problems.                                    ity theorist, gave a probabilistic way of interpreting
                                                             Gauss’s prediction. We can represent the primes as a
   One can refine the bounds given above but they do
                                                             sequence of 0 s and 1 s. If we start with 3 and put a 1 each
not seem to yield an asymptotic estimate for the primes
                                                             time we encounter a prime and 0 otherwise, then we ob-
(that is, an estimate which is correct to within a fac-
                                                             tain the sequence 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, . . . . Cramér’s
tor that tends to 1 as x gets large). The first good
                                                             idea is to suppose that this sequence, which repre-
guesses for such an estimate emerged at the begin-
                                                             sents the primes, has the same properties as a “typical”
ning of the nineteenth century, none better than what
                                                             sequence of 0 s and 1 s, and to use this principle to make
emerges from an observation of gauss [VI.26](/part-06/carl-friedrich-gauss-17771855), made
                                                             precise conjectures about the primes. More precisely,
when studying tables of primes up to three million
                                                             let X3 , X4 , . . . be an infinite sequence of random vari-
at sixteen years of age, that “the density of primes at
                                                             ables [III.71 §4](/part-03/probability-distributions) taking the values 0 or 1, and let the
around x is about 1/ log x.” Interpreting this, we guess     variable Xn equal 1 with probability 1/ log n (so that
that the number of primes up to x is about                   it equals 0 with probability 1 − 1/ log n). Assume also
                  
                  x
                       1        x
                                     dt                      that the variables are independent, so for each m know-
                           ≈              .                  ledge about the variables other than Xm tells us noth-
                 n=2
                     log n     2    log t
                                                             ing about Xm itself. Cramér’s suggestion was that any
Let us compare this prediction (rounded to the nearest       statement about the distribution of 1 s in the sequence
integer) with the latest data on numbers of primes, dis-     that represents the primes will be true if and only if it is
covered by a mixture of ingenuity and computational          true with probability 1 for his random sequences. Some
power. Table 1 shows the actual numbers of primes            care is needed in interpreting this statement: for exam-
up to various powers of 10 together with the differ-          ple, with probability 1 a random sequence will contain
ence between these numbers and what Gauss’s formula          infinitely many even numbers. However, it is possible
gives. The differences are far smaller than the num-          to formulate a general principle that takes account of
bers themselves, so his prediction is amazingly accu-        such examples.
rate. It does seem always to be an over count, but since         Here is an example of a use of the Gauss–Cramér
the width of the last column is about half that of the       model. With the help of the central limit theorem

336                                                                                     IV. Branches of Mathematics

[III.71 §5](/part-03/probability-distributions) one can prove that, with probability 1, there   Gauss’s conjecture for the number of primes up to x
are                                                         is equivalent to gaining a good understanding of the
                   x
                      dt       √
                          + O( x log x)                     zeros of the function ζ(s), that is, of the values of s
                  2 log t                                   for which ζ(s) = 0. Riemann’s deep work gave birth to
1 s among the first x terms in our sequence. The model        our subject, so it seems worthwhile to at least sketch
tells us that the same should be true of the sequence       the key steps in the argument linking these seemingly
representing primes, and so we predict that                 unconnected topics.
                           x
                                dt       √                     Riemann’s starting point was Euler’s formula (1). It is
    #{primes up to x} =              + O( x log x),   (5)
                           2   log t                        not hard to prove that this formula is valid when s is
just as the table suggests.                                 complex, as long as its real part is greater than 1, so we
  The Gauss–Cramér model provides a beautiful way           have
to think about distribution questions concerning the                                            1 −1
                                                                           ζ(s) =          1− s        .
prime numbers, but it does not give proofs, and it does                           p prime
                                                                                                p
not seem likely that it can be made into such a tool;
                                                            If we take the logarithm of both sides and then differ-
so for proofs we must look elsewhere. In analytic num-
                                                            entiate, we obtain the equation
ber theory one attempts to count objects that appear
                                                                    ζ (s)           log p        log p
naturally in arithmetic, yet which resist being counted           −       =                 =                  .
                                                                     ζ(s)            p s −1               p ms
easily. So far, our discussion of the primes has con-                        p prime          p prime m⩾1

centrated on upper and lower bounds that follow from        We need some way to distinguish between primes p ⩽
their basic definition and a few elementary properties—      x and primes p > x; that is, we want to count those
notably the fundamental theorem of arithmetic. Some         primes p for which x/p ⩾ 1, but not those with x/p <
of these bounds are good and some not so good. To           1. This can be done using the step function that takes
improve on these bounds we shall do something that          the value 0 for y < 1 and the value 1 for y > 1 (so
seems unnatural at first, and reformulate our question       that its graph looks like a step). At y = 1, the point of
as a question about complex functions. This will allow      discontinuity, it is convenient to give the function the
us to draw on deep tools from analysis.                     average value, 12 . Perron’s formula, one of the big tools
                                                            of analytic number theory. describes this step function
3     The “Analysis” in Analytic Number Theory              by an integral, as follows. For any c > 0,
                                                                                            ⎧
These analytic techniques were born in an 1859 memoir                                       ⎪
                                                                                            ⎪ 0 if 0 < y < 1,
                                                                                            ⎪
                                                                                            ⎨
of riemann [VI.49], in which he looked at the function               1             ys
                                                                                      ds = 12 if y = 1,
                                                                   2π i s: Re(s)=c s         ⎪
                                                                                            ⎪
that appears in the formula (1) of Euler, but with one                                      ⎪
                                                                                            ⎩1 if y > 1.
crucial difference: now he considered complex values
of s. To be precise, he defined what we now call the         The integral is a path integral along a vertical line in the
Riemann zeta function as follows:                           complex plane: the line consisting of all points c + it
                             1                             with t ∈ R. We apply Perron’s formula with y = x/p m ,
                    ζ(s) =         .
                                ns                          so that we count the term corresponding to p m when
                           n⩾ 1                                                                                       1
                                                            p m < x, but not when p m > x. To avoid the “ 2 ,”
It can be shown quite easily that this sum converges
                                                            assume that x is not a prime power. In that case we
whenever the real part of s is greater than 1, as we
                                                            obtain
have already seen in the case of real s. However, one of           
the great advantages of allowing complex values of s is                     log p
                                                               p prime, m⩾1
that the resulting function is holomorphic [I.3 §5.6](/part-01/fundamental-definitions),             p m ⩽x
and we can use a process of analytic continuation to                                                               s
                                                                          1                                     x       ds
make sense of ζ(s) for every s apart from 1. (A simi-                =                     log p
                                                                         2π i p prime, m⩾1         s: Re(s)=c   pm       s
lar but more elementary example of this phenomenon
                      
is the infinite series n⩾0 zn , which converges if and                      1               ζ (s) x s
                                                                     =−                              ds.                     (6)
only if |z| < 1. However, when it does converge, it                       2π i   s: Re(s)=c ζ(s) s

equals 1/(1 − z), and this formula defines a holomor-        We can justify swapping the order of the sum and
phic function that is defined every where except z = 1.)      the integral if c is taken large enough, since every-
Riemann proved the remarkable fact that confirming           thing then converges absolutely. Now the left-hand side

IV.2.   Analytic Number Theory                                                                                        337

of the above equation is not counting the number of            (8), we can deduce that the only zeros of ζ(s) with
primes up to x but rather a “weighted” version: for each       Re(s) < 0 lie at the negative even integers −2, −4, . . .
prime p we add a weight of log p to the count. It turns        (the “trivial zeros”). So, to be able to use (7), we need to
out, though, that Gauss’s prediction for the number of         determine the zeros inside the critical strip, the set of
primes up to x follows so long as we can show that             all s such that 0 ⩽ Re(s) ⩽ 1. Here Riemann made yet
x is a good estimate for this weighted count when x            another extraordinary observation which, if true, would
is large. Notice that the sum in (6) is exactly the loga-      allow us tremendous insight into virtually every aspect
rithm of the lowest common multiple of the integers            of the distribution of primes.
less than or equal to x, which perhaps explains why
                                                               The Riemann hypothesis. If 0 ⩽ Re(s) ⩽ 1 and ζ(s) =
this weighted counting function for the primes is a nat-
                                                               0, then Re(s) = 12 .
ural function to consider. Another explanation is that
if the density of primes near p is indeed about 1/ log p,         It is known that there are infinitely many zeros on the
then multiplying by a weight of log p makes the density        line Re(s) = 12 , crowding closer and closer together as
every where about 1.                                            we go up the line. The Riemann hypothesis has been
   If you know some complex analysis, then you will            verified computationally for the ten billion zeros of
know that Cauchy’s residue theorem allows one to eval-         lowest height (that is, with |Im(s)| smallest), it can be
uate the integral in (6) in terms of the “residues” of         shown to hold for at least 40% of all zeros, and it fits
the integrand (ζ (s)/ζ(s))(x s /s), that is, the poles of      nicely with many different heuristic assertions about
this function. More over, for any function f that is ana-       the distribution of primes and other sequences. Yet, for
lytic except perhaps at finitely many points, the poles         all that, it remains an unproved hypothesis, perhaps the
of f (s)/f (s) are the zeros and poles of f . Each pole of     most famous and tantalizing in all of mathematics.
f (s)/f (s) has order 1, and the residue is simply the            How did Riemann think of his “hypothesis”? Rie-
order of the corresponding zero, or minus the order of         mann’s memoir gives no hint as to how he came up
the corresponding pole, of f . Using these facts we can        with such an extraordinary conjecture, and for a long
obtain the explicit formula                                    time afterwards it was held up as an example of the
                                   xρ       ζ (0)            great heights to which humankind could ascend by
                    log p = x −            −        . (7)      pure thought alone. However, in the 1920 s Siegel and
       p prime, m⩾1             ρ:ζ(ρ)=0
                                         ρ    ζ(0)
         p m ⩽x                                                weil [VI.93](/part-06/andr-weil-19061998) got hold of Riemann’s unpublished notes
                                                               and from these it is evident that Riemann had been
Here the zeros of ζ(s) are counted with multiplicity:
                                                               able to determine the lowest few zeros to several dec-
that is, if ρ is a zero of ζ(s) of order k, then there are k
                                                               imal places through extensive hand calculations—so
terms for ρ in the sum. It is astonishing that there can
                                                               much for “pure thought alone”! Nevertheless, the Rie-
be such a formula, an exact expression for the number
                                                               mann hypothesis is a mammoth leap of imagination
of primes up to x in terms of the zeros of a complicated
                                                               and to have come up with an algorithm to calculate
function: you can see why Riemann’s work stretched
                                                               zeros of ζ(s) is a remarkable achievement. (See com-
people’s imagination and had such an impact.
                                                               putational number theory [IV.3](/part-04/computational-number-theory) for a discussion of
   Riemann made another surprising observation which
                                                               how zeros of ζ(s) can be calculated.)
allows us to easily determine the values of ζ(s) on the
                                                                  If the Riemann hypothesis is true, then it is not hard
left-hand side of the complex plane (where the function
                                                               to prove the bound
is not naturally defined). The idea is to multiply ζ(s) by                            ρ
                                                                                    x        x 1/2
some simple function so that the resulting product ξ(s)                                 
                                                                                     ρ  ⩽ |Im(ρ)| .
satisfies the functional equation
                                                               Inserting this into (7) one can deduce that
                  ξ(s) = ξ(1 − s)   for all s.           (8)                                    √
                                                                                  log p = x + O( x log2 x).             (9)
He determined that this can be done by taking ξ(s) =                       p prime
1            −s/2 Γ ( 1 s)ζ(s). Here Γ (s) is the famous
2 s(s − 1)π
                                                                            p ⩽x
                      2
gamma function [III.31](/part-03/the-gamma-function), which equals the factorial            This, in turn, can be “translated” into (5). In fact these
function at positive integers (that is, Γ (n) = (n − 1)!),     estimates hold if and only if the Riemann hypothesis
and is well-defined and continuous for all other s.             is true.
   A careful analysis of (1) reveals that there are no            The Riemann hypothesis is not an easy thing to
zeros of ζ(s) with Re(s) > 1. Then, with the help of           understand, nor to fully appreciate. The equivalent, (5),

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

IV.2.   Analytic Number Theory                                                                                              339

there is only one prime congruent to 2 mod 4, and              2, −1 if n ≡ 4, −i if n ≡ 3, and 1 if n ≡ 1. To
indeed there can be no more than one prime in any              see that this is a character, note that the powers of
arithmetic progression a, a + q, a + 2 q, . . . if a and q      2 mod 5 are 2, 4, 3, 1, 2, 4, 3, 1, . . . , while the powers of
have a common factor greater than 1. Let φ(q) denote           i are i, −1, −i, 1, i, −1, −i, 1, . . . .
the number of integers a, 1 ⩽ a ⩽ q, such that (a, q) =          It can be shown that there are precisely φ(q) distinct
1. (The notation (a, q) stands for the highest common          characters mod q. Their usefulness to us comes from
factor of a and q.) Then all but a small finite number          the properties above, together with the following for-
of the infinitely many primes belong to the φ(q) arith-         mula, in which the sum is over all characters mod q
metic progressions a, a + q, a + 2 q, . . . with 1 ⩽ a < q      and χ̄(a) denotes the complex conjugate of χ(a):
and (a, q) = 1. Calculation reveals that the primes seem                                 ⎧
                                                                      1                 ⎨1 if n ≡ a (mod q),
to be pretty evenly split between these φ(q) arithmetic                      χ̄(a)χ(n) =
progressions, so we might guess that in the limit the                φ(q)                ⎩0 otherwise.
                                                                             χ
proportion of primes in each of them is 1/φ(q). That
                                                               What is this formula doing for us? Well, understand-
is, whenever (a, q) = 1, we might conjecture that, as
                                                               ing the set of integers congruent to a mod q is equiva-
x → . nfty,
                                π (x)                          lent to understanding the function that takes the value
                  π (x; q, a) ∼       .               (11)     1 if n ≡ a (mod q) and 0 otherwise. This function
                                φ(q)
                                                               appears on the right-hand side of the formula. How-
   It is far from obvious even that the number of primes
                                                               ever, it is not a particularly nice function to deal with,
congruent to a mod q is infinite. This is a famous the-
                                                               so we write it as a linear combination of characters,
orem of dirichlet [VI.36]. To begin to consider such
                                                               which are much nicer functions because they are mul-
questions we need a systematic way to identify integers
                                                               tiplicative. The coefficient associated with the character
n that are congruent to a mod q, and this Dirichlet pro-
                                                               χ in this linear combination is the number χ̄(a)/φ(q).
vided by introducing a class of functions now known
as (Dirichlet) characters. Formally, a character mod q           From the formula, it follows that
is a function χ from Z to C with the following three                
                                                                           log p
properties (in ascending order of interest):                    p prime, m⩾1
                                                                    p m ⩽x
  (i) χ(n) = 0 whenever n and q have a common factor            p m ≡a (mod q)
                                                                                  1                      
      greater than 1;                                                      =                    χ̄(a)             χ(p m ) log p.
 (ii) χ is periodic mod q (that is, χ(n + q) = χ(n) for                          φ(q) χ (mod q)      p prime, m⩾1
      every integer n);                                                                                  p m ⩽x

(iii) χ is multiplicative (that is, χ(mn) = χ(m)χ(n) for       The sum on the left-hand side is a natural adaptation of
      any two integers m and n).                               the sum we considered earlier when we were counting
                                                               all primes. And we can estimate it if we can get good
An easy but important example of a character mod q
                                                               estimates for each of the sums
is the principal character χq , which takes the value 1 if                         
(n, q) = 1 and 0 otherwise. If q is prime, then another                                   χ(p m ) log p.
                                                 ·                                  p prime, m⩾1
important example is the Legendre symbol ( q ): one sets                                p m ⩽x
  n
( q ) to be 0 if n is a multiple of q, 1 if n is a quadratic
                                                               We approach these sums much as we did before, obtain-
residue mod q, and −1 if n is a quadratic nonresidue
                                                               ing an explicit formula, analogous to (7), (10), now in
mod q. (An integer n is called a quadratic residue mod q
                                                               terms of the zeros of the Dirichlet L-function:
if n is congruent mod q to a perfect square.) If q is com-
posite, then a function known as the Legendre–Jacobi                                         χ(n)
                                                                                 L(s, χ) =           .
symbol ( q· ), which generalizes the Legendre symbol,                                      n⩾1
                                                                                                ns
is also a character. This too is an important example
                                                               This function turns out to have properties closely
that helps us, in a slightly less direct way, to recognize
                                                               analogous to the main properties of ζ(s). In particular,
squares mod q.
                                                               it is here that the multiplicativity of χ is all-important,
   These characters are all real-valued, which is the
                                                               since it gives us a formula similar to (1):
exception rather than the rule. Here is an example
of a genuinely complex-valued character in the case                          χ(n)                          χ(p) −1
                                                                                          =             1−           .      (12)
q = 5. Set χ(n) to be 0 if n ≡ 0 (mod 5), i if n ≡                          n⩾1
                                                                                     ns       p prime
                                                                                                              ps

340                                                                                       IV. Branches of Mathematics

That is, L(s, χ) has an Euler product. We also believe         a prime less than q5.5 if q is sufficiently large. Obtain-
the “generalized Riemann hypothesis” that all zeros ρ          ing a result of this type is not difficult when there are
                                                     1
of L(ρ, χ) = 0 in the critical strip satisfy Re(ρ) = 2 .       no Siegel zeros. If there are Siegel zeros, then we go
This would imply that the number of primes up to x             back to the explicit formula, which is similar to (7) but
that are congruent to a mod q can be estimated as              now concerns zeros of L(s, χ). If β is a Siegel zero, then
                         π (x)     √                           it turns out that in the explicit formula there are now
         π (x; q, a) =         + O( x log2 (qx)).      (13)                                                a
                                                               two obviously large terms: x/φ(q) and −( q )x β /βφ(q).
                         φ(q)
                                                                       a
                                                               When ( q ) = 1 it appears that they might almost cancel
Therefore, the generalized Riemann hypothesis implies
                                                               (since β is close to 1), but with more care we obtain
the estimate we were hoping for (formula (11)), pro-
vided that x is a little bigger than q2 .                            a xβ                        1
                                                                x−        = (x − x β ) + x β 1 −       ∼ x(1 − β) log x.
   In what range can we prove (11) unconditionally—                  q β                         β
that is, with out the help of the generalized Riemann           This is a smaller main term than before, but it is not
hypothesis? Although we can more or less translate the         too hard to show that it is bigger than the con tr ibu-
proof of the prime number theorem over into this new           tions of all of the other zeros combined, because the
setting, we find that it gives (11) only when x is very         Deuring–Heilbronn phenomenon implies that the Siegel
large. In fact, x has to be bigger than an exponential         zero repels those zeros, forcing them to be far to the
                                                                               a
in a power of q, which is a lot bigger than the “x is a        left. When ( q ) = −1, the same two terms tell us that
little larger than q2 ” that we obtained from the general-     if (1 − β) log x is small, then there are twice as many
ized Riemann hypothesis. We see a new type of problem          primes as we would expect up to x that are congruent
emerging here, in which we are asking for a good start-        to a mod q.
ing point for the range of x for which we obtain good             There is a close connection between Siegel zeros
estimates, as a function of the modulus q; this does not       and class numbers, which are defined and discussed in
have an analogy in our exploration of the prime num-           algebraic numbers [IV.1 §7](/part-04/number-theory). Dirichlet’s class number
                                                                                                            √
ber theorem. By the way, even though this bound “x is a        formula states that L(1, ( q· )) = π h−q / q for q > 6,
                                                                                                                  √
little larger than q2 ” is far out of reach of current meth-   where h−q is the class number of the field Q( −q). A
ods, it still does not seem to be the best answer; calcu-      class number is always a positive integer, so this result
                                                                                                    ·         √
la tions reveal that (11) seems to hold when x is just          immediately implies that L(1, ( q )) ⩾ π / q. Another
a little bigger than q. So even the Riemann hypothesis         consequence is that h−q is small if and only if L(1, ( q· ))
and its generalizations are not powerful enough to tell        is small. The reason this gives us information about
us the precise behavior of the distribution of primes.         Siegel zeros is that one can show that the derivative
                                                                        ·
   Through out the twentieth century much thought was           L (σ , ( q )) is positive (and not too small) for real num-
put in to bounding the number of zeros of Dirichlet L-         bers σ close to 1. This implies that L(1, ( q· )) is small
functions near to the 1-line. It turns out that one can        if and only if L(s, ( q· )) has a real zero close to 1, that
make enormous improvements in the range of x for               is, a Siegel zero β. When h−q = 1, the link is more
which (11) holds (to “halfway between polynomial in            direct: it can be shown that the Siegel zero β is approx-
                                                                                   . qrt{q} and exponential in q”) provided there are no Siegel          imately 1 − 6/(π q). (There are also more complicated
zeros. These putative zeros β of L(s, ( q· )) would be real    formulas for larger values of h−q .)
                              √
numbers with β > 1 − c/ q; they can be shown to be                These connections show that getting good lower
extremely rare if they exist at all.                           bounds on h−q is equivalent to getting good bounds
   That Siegel zeros are rare is a consequence of the          on the possible range for Siegel zeros. Siegel showed
Deuring–Heilbronn phenomenon: that zeros of L-func-            that for any ε > 0 there exists a constant cε > 0
tions [III.47](/part-03/l-functions) repel each other, rather like similarly         such that L(1, ( q· )) ⩾ cε q−ε . His proof was unsatis-
charged particles. (This phenomenon is akin to the             factory because by its very nature one cannot give an
fact that different algebraic numbers repel one another,        explicit value for cε . Why not? Well, the proof comes
part of the basis of the subject of Diophantine approx-        in two parts. The first assumes the generalized Rie-
imation.)                                                      mann hypothesis, in which case an explicit bound fol-
   How big is the smallest prime congruent to a mod q          lows easily. The second obtains a lower bound in terms
when (a, q) = 1? Despite the possibility of the existence      of the first counterexample to the generalized Riemann
of Siegel zeros, one can prove that there is always such       hypothesis. So if the generalized Riemann hypothesis is

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

346                                                                                         IV. Branches of Mathematics

  In the “Selberg upper bound sieve” one comes up           an integral delay equation. Such an equation is typical
with some numbers . ambda d that are nonzero only when             when we give precise estimates for questions that arise
d ⩽ D (where D is chosen to be not too large), with         in sieve theory.
the property that                                             Questions about the distribution of smooth numbers
                           2                               arise frequently in the analysis of algorithms, and have
            χm (n) ⩽     . ambda d   for all n.                    consequently been the focus of a lot of recent research.
                        d|n
                                                            (See computational number theory [IV.3 §3](/part-04/computational-number-theory) for an
Summing over the appropriate n one then finds the            example of the use of smooth numbers.)
optimal solution by minimizing the resulting quad-
ratic form. Lower bounds can also be obtained out                           11 The Circle Method
of Selberg’s methods. It was by using such methods
                                                            Another method of analysis that plays a prominent role
that Chen was able to prove there are infinitely many
                                                            in this subject is the so-called circle method, which goes
primes p for which p + 2 has at most two prime fac-
                                                            back to hardy [VI.73](/part-06/godfrey-harold-hardy-18771947) and littlewood [VI.79](/part-06/john-edensor-littlewood-18851977). This
tors, and that Goldston, Pintz, and Yıldırım were able to
                                                            method uses the fact that, for any integer n,
establish that there are some times short gaps between                                     ⎧
                                                                          1               ⎨1 if n = 0,
primes. These methods are also an essential ingredient                        2 iπ nt
                                                                            e        dt =
in the work of Green and Tao. One can also get good                       0               ⎩0 otherwise.
upper bounds on the number of primes in arithmetic          For example, if we wish to count the number, r (n), of
progressions and short intervals:                           solutions to the equation p +q = n with p and q prime,
                                                            we can express it as an integral as follows:
  • the number of primes in any interval of length y
                                                                                    1
    is never greater than 2 y/ log y;                              r (n) =              e2 iπ (p+q−n)t dt
  • the number of primes less than x in an arith-                             p, q⩽n    0
                                                                            both prime
    metic progression mod q is never greater than
                                                                             1                                      2
    2 x/φ(q) log(x/q).                                                   =        e−2 iπ nt                  e2 iπ pt       dt.
                                                                             0              p prime, p⩽n
Notice that in each case the log in the denominator
                                                            The first equality holds because the integrand is 0 when
is of the number of integers being considered (y and
                                                            p + q = n and 1 otherwise, and the second is easy to
x/q, respectively), not log x as expected, though this
                                                            check.
will only make a significant difference if the number
                                                               At first sight it looks more difficult to estimate the
of integers being considered is small. Otherwise these
                                                            integral than it is to estimate r (n) directly, but this
inequalities are bigger than the expected quantity by a
                                                            is not the case. For instance, the prime number theo-
factor of 2. Can this “2” be improved? It will be difficult
                                                            rem for arithmetic progressions allows us to estimate
because we showed earlier that if there are Siegel zeros            
                                                            P (t) = p⩽n e2 iπ pt when t is a rational /m with m
then we get twice as many primes as expected in certain
                                                            small. For in this case,
arithmetic progressions. Therefore, if we can improve
                                                                                             
the “2” in these two formulas, then we can deduce that          P       =         e2 iπ a/m           1
there are no Siegel zeros!                                         m      (a, m)=1             p⩽n,
                                                                                               p≡a   (mod m)
                                                                                          π (n)        π (n)
               10   Smooth Numbers                                     ≈         e2 iπ a/m       = μ(m)       .
                                                                         (a, m)=1
                                                                                           φ(m)         φ(m)
An integer is y-smooth if all of its prime factors are
                                                            If t is sufficiently close to /m, then P (t) ≈ P (/m);
less than or equal to y. A proportion 1 − log 2 of the
                        √                                   such values of t are called the major arcs and we believe
integers up to x are x-smooth, and indeed, for any
                                                            that the integral over the major arcs gives, in total,
fixed u > 1 there exists some number ρ(u) > 0 such
                                                            a very good approximation to r (n); indeed, we get
that if x = y u , then a proportion ρ(u) of the integers
                                                            something very close to the quantity one predicts from
up to x are y-smooth. This proportion does not seem
                                                            something like (15). Thus to prove the Goldbach con-
to have any easy definition in general. For 1 ⩽ u ⩽ 2 we
                                                            jecture we need to show that the contribution to the
have ρ(u) = 1 − log u, but for larger u it is best defined
                                                            integral from the other values of t (that is, from the
as
                         1 1                                minor arcs) is small. In many problems one can success-
                 ρ(u) =      ρ(u − t) dt,                   fully do this, but no one has yet succeeded in doing so
                         u 0

$IV$ . $2$ .

Analytic Number Theory

for the Goldbach problem. Also useful is the “discrete analogue” of the above: using the identity ⎧ ⎨ $1$ if $n$ ≡ 0 ( mod m  ),

$12i\pijn/ mm - 1dt =$

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

m - 1 e - 2 i. ijn/m P(j/m)2 = j = 0

provided m $>$ n. A similar analysis can be used here but working mod m some times has advantages, as it allows us to use properties of the multiplicative group mod m. Sums like P (j  /  m) in the paragraph above or more k simple sums like $n \le Ne^{2i}\pi^{n} / m$ are called exponential sums. They play a central role in many of the calculations one does in analytic number theory. There are several techniques for investigating them. (1) It is easy to calculate the sum $n \le Ne^{2i}\pi^{n}/ m$ , since it is a geometric progression.
With higher-degree polynomials one can often reduce to this case; for example, by writing $n^{1} - n^{2} = h$ we hav$e^{2}e2i\pin /m2n \le N22e2i\pi(n^{1} - n^{2})/m = n^{1}$ , n ${}^{2} \le N2e2i\pih /me4i\pihn^{2}/m$ ,

 = 

$|h| \le N$

max 0 , $- h < n^{2} \le min\\{N,N - h\\}$

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