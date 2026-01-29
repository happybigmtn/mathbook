# The Central Limit Theorem

V.7.   The Classification of Finite Simple Groups                                                                       687

for all θ out side a set of measure zero. When this holds,      that they are identically distributed. Suppose also that
one says that the Fourier series of f converges almost         they have mean 0 and variance 1. Then X1 + · · · + Xn
every where. If Luzin’s conjecture were true, it would          has mean 0 and variance n. (The variance is n because
validate Fourier’s vision from the early nineteenth            the Xi are independent.) Therefore, Yn = (X1 + · · · +
                                                                     √
century.                                                       Xn )/ n has mean 0 and variance 1. The central limit
  For several decades it looked as though Luzin’s              theorem states that, regard less of the distribution of
conjecture might well be false. kolmogorov [VI.88](/part-06/andrei-nikolaevich-kolmogorov-19031987)             the Xi , the random variable Yn converges to a standard
constructed a function f in L1 [0, 2π ] whose Fourier          normal distribution. It is easy to deduce from this a sim-
series converges no where. Also, a theorem of Kolmo-            ilar result for random variables with any finite mean
gorov, Seliverstov, and Plessner, which asserted that          and variance. Details may be found in probability
                   
lim N→. nfty (SN f (θ)/ log N) = 0 almost every where when            distributions [III.71 §5](/part-03/probability-distributions).
f is in L2 [0, 2π ], with stood all attempts at improve-
ment for over thirty years.                                    V.7 The Classification of
  It therefore came as a big surprise when Lennart Car-            Finite Simple Groups
leson proved in 1966 that Luzin’s conjecture is true.                 Martin W. Liebeck
The main point of Carleson’s proof is to control the
Carleson maximal function                                      A finite group G is said to be simple if its only normal
                C(f )(θ) = sup |SN f (θ)|                      subgroups are the identity subgroup and G itself. To
                           N ⩾1                                some extent, simple groups play an analogous role in
by proving that                                                finite group theory to that of prime numbers in number
                                      A     2π                 theory: just as the only factors of a prime p are 1 and p
 μ({θ ∈ [0, 2π ] : C(f )(θ) > α}) ⩽              |f (θ)|2 dθ   itself, so the only factor groups of a simple group G are
                                      α2    0
                                                       (7)     the identity group 1 and G itself. The analogy runs a bit
for all f in L2 [0, 2π ] and all α > 0, where A is a con-      deeper: just as every positive integer (greater than 1)
stant independent of f and α. It is not hard to show           is a product of a collection of primes, so every finite
that (7) implies Luzin’s conjecture, but it is very hard       group is “built” from a collection of simple groups, in
to prove (7).                                                  the following sense. Let H be a finite group, and choose
   Shortly after Carleson’s work, Hunt proved the al-          a maximal normal subgroup H1 of H (this means that
most-every where convergence of Fourier series of func-         H1 is not the whole of H, and it is not contained in
tions in Lp [0, 2π ] for any p > 1. Kolmogorov’s counter-      any larger normal subgroup that is not the whole of
example shows that the result fails for p = 1.                 H); then choose a maximal normal subgroup H2 of H1 ;
   Fourier analysis has been immensely useful in math-         and so on. This gives a sequence of subgroups 1 = Hr <
ematics and its applications. (For a fuller discussion         Hr −1 < · · · < H1 < H0 = H, each one a maximal nor-
of this, see the fourier transform [III.27](/part-03/the-fourier-transform) and har-           mal subgroup of the next, and, because of the maximal-
monic analysis [IV.11](/part-04/harmonic-analysis).) The theorems of Carleson and          ity, each factor group Gi = Hi /Hi+1 is a simple group.
Hunt provide the sharpest known answer to the basic            It is in this sense that one says that H is built from the
question that started the subject.                             collection G0 , G1 , . . . , Gr −1 of simple groups (although
                                                               unlike the situation with prime numbers, there will in
Acknowledgments. This work was partially supported by
                                                               general be several different finite groups that are built
NSF grant #DMS-0245242.
                                                               from the same collection of simple groups).
                                                                  At any rate, it is abundantly clear that simple groups
Cauchy’s Theorem
                                                               lie at the heart of the theory of finite groups, and
   See some fundamental mathematical
                                                               one of the driving forces of twentieth-century finite
       definitions [I.3 §5.6](/part-01/fundamental-definitions)
                                                               group theory was to study, and ultimately to classify
                                                               completely, the finite simple groups. This classifica-
V.6    The Central Limit Theorem                               tion was eventually achieved by the combined efforts
                                                               of more than one hundred mathematicians in many
The central limit theorem is a fundamental result in           published research articles and books written over a
probability concerning sums of independent random              long period, the most intensive being 1955–80. It was a
variables. Let X1 , X2 , . . . be independent and suppose      truly monumental feat of prolonged collaboration, and