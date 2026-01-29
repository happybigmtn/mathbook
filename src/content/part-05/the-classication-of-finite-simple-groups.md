# The Classification of Finite Simple Groups

V.7.   The Classification of Finite Simple Groups                                                                       687

for all θ outside a set of measure zero. When this holds,      that they are identically distributed. Suppose also that
one says that the Fourier series of f converges almost         they have mean 0 and variance 1. Then X1 + · · · + Xn
every where. If Luzin’s conjecture were true, it would          has mean 0 and variance n. (The variance is n because
validate Fourier’s vision from the early nineteenth            the Xi are independent.) Therefore, Yn = (X1 + · · · +
                                                                     √
century.                                                       Xn )/ n has mean 0 and variance 1. The central limit
  For several decades it looked as though Luzin’s              theorem states that, regard less of the distribution of
conjecture might well be false. kolmogorov [VI.88](/part-06/andrei-nikolaevich-kolmogorov-19031987)             the Xi , the random variable Yn converges to a standard
constructed a function f in L1 [0, 2π ] whose Fourier          normal distribution. It is easy to deduce from this a sim-
series converges nowhere. Also, a theorem of Kolmo-            ilar result for random variables with any finite mean
gorov, Seliverstov, and Plessner, which asserted that          and variance. Details may be found in probability
                   
lim N→. nfty (SN f (θ)/ log N) = 0 almost every where when            distributions [III.71 §5](/part-03/probability-distributions).
f is in L2 [0, 2π ], withstood all attempts at improve-
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

$688$

one of the most momentous theorems in the history of algebra. In order to state the classification theorem, it is necessary to describe some examples of finite simple groups. The most obvious are the cyclic groups of prime order: these are clearly simple, since they have no subgroups at all apart from the identity and the whole group (by Lagrange’s theorem, for example, which states that the size of any subgroup is a factor of the size of the group) . Next come the alternating groups A n :
here A n is defined as the group consisting of all the even permutations in the symmetric group S n (see permutation groups [III.68](/part-03/permutation-groups)). The alternating group A n has $\frac{1}{2}(n$ !) elements, and is simple provided $n \ge 5$ . For example, $A^{5}$ , of order $60$ , is the smallest non-Abelian simple group. Next we introduce some simple groups of matrices. For an integer n $\ge 2$ and a field K, define SL n (K) to be the set of all n $\times$ n matrices with entries in K and with determinant [III.15](/part-03/determinants) equal to $1$ .
This is a group under matrix multiplication, called a special linear group. When the field K is finite, SL n (K) is a finite group. For each prime power q, there is up to isomorphism a unique field of order q, and the corresponding special linear group in dimension n is denoted by SL n (F q). These groups are not in general simple, since $Z = {\lambda I}$ : $\lambda^{n} = 1$ , the subgroup of scalar matrices in SL n (F q), is a normal subgroup. However, the factor groups PSL n (F q)  =  SL n (F q)  /  Z are simple (except when (n , $q) = (2$ , 2)$or (2, 3) )$.
This is the family of projective special linear groups. There are a number of other families of finite simple matrix groups, which, very roughly speaking, are defined as groups of matrices A $\in$ SL n (F q) that satisfy an equation of the form A T $JA = J$, where J is a nonsingular symmetric or skew-symmetric n $\times$ n matrix. Again factoring out by the subgroup of scalar matrices, this gives the projective orthogonal and symplectic families of finite simple matrix groups.
Similarly, if the finite field of order q has an automorphism $α \to$ ᾱ of order $2$ , this can be extended to matrices A  =  (a ij) by defining Ā  =  (. ar{a} ij), and then the group A\in$SL n (F q) : A T Ā = I$, factored by its subgroup of scalar matrices, gives the projective unitary family of finite simple groups. The families of projective special linear, symplectic, orthogonal, and unitary groups comprise what are known as the classical simple groups. These were all known early in the twentieth century, but it was not until 1955 that further infinite families of finite simple

V. Theorems and Problems

groups were discovered by Chevalley. For each of the simple complex Lie algebras L, and each finite field K, Chevalley constructed a version of L over K, call it L (K), and defined his families of finite simple groups as automorphism groups of the Lie algebras L (K). Not long afterward, Steinberg, Suzuki, and Ree found some variations of Chevalley’s construction and defined some further families of simple groups, known as twisted Chevalley groups.
The Chevalley and twisted Chevalley groups include all the classical groups, together with ten other infinite families, and are collectively known as the finite simple groups of Lie type. Until 1966 , the only known finite simple groups were the cyclic groups of prime order, the alternating groups, the groups of Lie type, and a collection of five strange simple groups discovered by mathieu [VI.51](/part-06/mile-lonard-mathieu-18351890) in the $1860s$ . These were groups of permutations of n objects, where $n = 11$ , $12$ , $22$ , $23$ , or $24$ .
Mathieu’s groups were termed “sporadic groups”-- sporadic meaning that they do not fit into any of the known infinite families--and many thought that perhaps there were no more finite simple groups to be found. Then there was a bombshell, when Janko published a paper demonstrating the existence of a single, new finite simple group: the sixth sporadic group.
After this, new sporadic groups appeared at regular intervals, culminating in the monster [III.61](/part-03/the-monster-group), an amazing group of order around $10^{54}$ , which was predicted by Fischer and constructed by Griess as a group of $196884 \times 196884$ matrices. By 1980 , twenty-six sporadic groups were known. During this period the program to classify all the finite simple groups was proceeding at breakneck speed, and eventually in the early $1980s$ the final classification theorem was announced.
Every finite simple group is either a cyclic group of prime order, or an alternating group, or a group of Lie type, or one of the twenty-six sporadic groups. Not surprisingly, this theorem has changed the face of finite group theory and its many areas of application: one can now solve many problems in a concrete way, by reducing them to the study of the (now known) list of simple groups, rather than abstractly, by deducing them from the axioms for groups.
The sheer length of the proof of the classification theorem (estimated at around ten thousand journal pages, spread across about five hundred research articles) meant that it was extremely difficult, perhaps impossible, for a single person to work through the entire