# Phase Transitions

III.70.   π                                                                                                            261

Then a permutation g ∈ Sn is even if sgn(g) = +1, and
is odd if sgn(g) = −1.                                           III.70   π
   It follows easily from the definition that
                  sgn(gh) = sgn(g) sgn(h)                        What makes one number more fundamental and impor-
                                                                 tant, mathematically speaking, than another? Why, for
for any g, h ∈ Sn , and also that the signature of any
                                                                 instance, would almost everybody agree that 2 is more
2-cycle is −1. Since an r -cycle (a1 a2 · · · ar ) can be
                                                                 important than 43  32 ? One possible answer is that what
expressed as a product (a1 ar )(a1 ar −1 ) · · · (a1 a2 ) of
                                                                 really matters about a number is its properties, and in
2-cycles, the signature of the r -cycle is (−1)r −1 . Hence,
                                                                 particular any interesting properties it might have that
if g ∈ Sn has cycle-shape (r1 , r2 , . . . , rk ), then
                                                                 distinguish it from all other numbers. Of course, we
          sgn(g) = (−1)r1 −1 (−1)r2 −1 · · · (−1)rk −1 .         now have to decide what counts as an interesting prop-
This makes it easy to work out the signature of any per-         erty: for example, why do we not regard it as interesting
mutation. For example, the even permutations in S5 are           that 43                                       43
                                                                       32 is the only number that gives you 16 when you
those that have cycle-shape (15 ), (22 , 1), (3, 12 ), or (5).   double it? An obvious reason is that there is an analo-
If you count these, you will find that there are sixty even       gous property for every number x you might care to
permutations in S5 altogether, which is exactly half of          choose: x is the only number that gives you 2 x when
the total of 5! = 120 permutations in S5 . In general, the       you double it. By contrast, the property “is the smallest
number of even permutations in Sn is 12 n!.                      prime number” does not mention any specific number
   So what is the point of this complicated definition?           and is easily stated in terms of a concept, that of “prime
The answer is that the set of all even permutations in Sn        number,” whose importance is itself easy to explain.
                           1
forms a subgroup of size 2 n!, known as the alternating          This property must apply to exactly one number, so it
group of degree n, and written as An . The alternating           is likely that that number will have an important part to
groups are very important examples of finite groups,              play in mathematics, and indeed it does. (As it happens,
                                                                  43
because of the fact that, for n ⩾ 5, An is a simple               32 is conjectured to be an important critical exponent
group—that is, its only normal subgroups [I.3 §3.3](/part-01/fundamental-definitions)              in statistical physics, which means that it can be sin-
are the identity subgroup and An itself (see the clas-           gled out as an interesting number, though still nothing
sification of finite simple groups [V.7](/part-05/the-classication-of-finite-simple-groups)). For exam-               like as fundamental as 2.)
ple, A5 is a simple group of size 60, and in fact is the            Everybody agrees that π is one of the most important
smallest non-Abelian finite simple group.                         numbers in mathematics, and it is easy to justify this
                                                                 assessment by the criterion of the previous paragraph,
III.69      Phase Transitions                                    because π has an abundance of properties—so many
                                                                 that when π appears unexpectedly in a calculation, one
If you heat up a block of ice, then it turns into water.         is not unduly surprised. For example, the following is
This very familiar phenomenon is actually rather mys-            a famous theorem of euler [VI.19](/part-06/leonhard-euler-17071783):
ter ious, because it shows that the properties of the                  . nfty
                                                                          1     1 1   1   1          π2
chemical H2 O do not depend continuously on temper-                        2
                                                                             =1+ + +    +    + ··· =    .
                                                                      n=1
                                                                          n     4 9  16   25         6
ature: the block of ice goes straight from a solid to a
liquid, rather than doing so by a process of gradual               What on earth, one might wonder, has π to do with
softening.                                                       adding up reciprocals of squares? This is a perfectly
   This is an example of a phase transition. Phase transi-       legitimate question, but the idea that there could in
tions tend to occur in systems that involve a large num-         principle be a connection is not, to an experienced
ber of particles with “local” interactions—that is, where        mathematician, a surprise. A very common way to
the behavior of one particle is directly influenced only          prove mathematical identities is to show that the two
by the particles in its immediate vicinity.                      sides of the identity are different ways of evaluating
   Such systems can be modeled mathematically, and               the same quantity. In this case, one can use a basic fact
the study of these models belongs to the area known as           from fourier analysis [III.27](/part-03/the-fourier-transform), known as Plancherel’s
statistical physics. For further discussion of such mod-         identity, which states the following. If f : R → C is a
els, see probabilistic models of critical phenom-                periodic function with period 2π , and for every inte-
ena [IV.25].                                                     ger n (positive or negative) we define its nth Fourier