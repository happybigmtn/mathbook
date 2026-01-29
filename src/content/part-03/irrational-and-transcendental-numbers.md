# Irrational and Transcendental Numbers

222                                                                                       III. Mathematical Concepts

is the ideal class group. All principal ideals belong to          The principle used here, that a nonzero integer must
the class that forms the identity of this group, so the        have absolute value at least one, is surprisingly pow-
larger and more complex the ideal group is, the further        erful in the theory of irrational and transcendental
the ring is from having the unique-factorization prop-         numbers.
erty. For more details, see algebraic numbers [IV.1](/part-04/number-theory),             Some numbers are more irrational than others. In a
                                                                                                               √
and in particular section 7.                                   sense, the most irrational number is τ = 12 (1 + 5), the
                                                               golden ratio, because the best rational approximations
III.41 Irrational and Transcendental                           to it, which are ratios of consecutive Fibonacci num-
                                                               bers, approach it rather slowly. There is also a very
       Numbers
                                                               elegant proof that τ is irrational. This is based on the
         Ben Green
                                                               observation that the τ × 1 rectangle R may be divided
                                                               into a square of side 1 and a 1/τ × 1 rectangle. If τ
An irrational number is one that cannot be written as
                                                               were rational, then we would be able to create a rect-
a/b with both a and b integers. A great many naturally
                              √                                angle with integer sides that was similar to R. From
occurring numbers, such as 2, e, and π , are irrational.
                            √                                  this we could remove a square, and we would be left
The following proof that 2 is irrational is one of the
                                                               with a smaller rectangle with integer sides that would
best-known arguments in all of mathematics. Suppose
     √                                                         still be similar to R. We could continue this process ad
that 2 = a/b; since common factors can be canceled,
                                                               infinitum, which is clearly impossible.
we may assume that a and b have no common factor;
                                                                  A transcendental number is one which is not alge-
we have a2 = 2 b2 , which means that a must be even;
                                                               braic, that is to say, is not the root of a polynomial
write a = 2 c; but then 4 c 2 = 2 b2 , which implies that                                                    √
                                                               equation with integer coefficients. Thus, 2 is not tran-
2 c 2 = b2 , and hence b must be even too; this, how-
                                                               scendental,
                                                                            since it solves x 2 − 2 = 0, and neither is
ever, is contrary to our assumption that a and b were                 . qrt{7} + 17.
coprime.
                                                                  Are there, in fact, any transcendental numbers? This
   There are several famous conjectures in mathematics
                                                               question was answered by liouville [VI.39](/part-06/joseph-liouville-18091882) in 1844,
that ask whether certain specific numbers are rational
                                                               who showed that various numbers were transcenden-
or not. For example, π + e and π e are not known to be
                                                               tal, of which
irrational, and neither is Euler’s constant:                                 
                                                                        κ=       10−n!
                 1         1
 γ = lim    1+     + ··· +   − log n ≈ 0.577215 . . . .                   n⩾ 1
      n→. nfty        2         n
                                                                        = 0.1100010000000000000000010 . . .
It is known that ζ(3) = 1 + 2−3 + 3−3 + · · · is irrational.
Almost certainly, ζ(5), ζ(7), ζ(9), . . . are all irrational   is a well-known example. This is not algebraic, because
as well. However, although it has been shown that              it can be approximated by rationals more accurately
infinitely many of these numbers are irrational, no             than any algebraic number can. For example, the ra-
specific one is known to be.                                    tional approximation 110 001/1 000 000 is very close
                                                               indeed to κ, but its denominator is not particularly
   A classic proof is that of the irrationality of e. If
                                                               large.
                             . nfty
                              1                                  Liouville showed that if α is a root of a polynomial
                        e=
                             j=0
                                   j!                          of degree n, then
                                                                                          
                                                                                          
were equal to p/q, then we would have                                              α − a  > C
                                                                                        q  qn
                                   . nfty
                                    q!
                   p(q − 1)! =                .                for all integers a and q and for some constant C de-
                                         j!
                                   j=0                         pending on α. In words, α cannot be too well approxi-
The left-hand side and the terms of the sum with j ⩽ q         mated by rationals. Roth later proved that the exponent
are all integers. Therefore the quantity                       n here can actually be replaced by 2 + ε for any ε > 0.
           q!                                                 (For more on these topics, see liouville’s theorem
                      1           1
                  =       +                + ···               and roth’s theorem [V.22](/part-05/liouvilles-theorem-and-roths-theorem).)
        j ⩾q+1
               j!   q + 1   (q + 1)(q + 2)
                                                                 A completely different approach to the existence of
is also an integer. But it is not hard to show that this       transcendental numbers was discovered by cantor
quantity lies strictly between 0 and 1, a contradiction.       [VI.54](/part-06/georg-cantor-18451918) thirty years later. He proved that the set of