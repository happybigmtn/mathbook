# Phase Transitions

III.70.   π

Then a permutation g ∈ Sn is even if sgn(g) = +1, and
is odd if sgn(g) = −1.
   It follows easily from the definition that

for any g, h ∈ Sn , and also that the signature of any
2-cycle is −1. Since an r -cycle (a1 a2 · · · ar ) can be
expressed as a product (a1 ar )(a1 ar −1 ) · · · (a1 a2 ) of
2-cycles, the signature of the r -cycle is (−1)r −1 . Hence,
if g ∈ Sn has cycle-shape (r1 , r2 , . . . , rk ), then

This makes it easy to work out the signature of any per-
mutation. For example, the even permutations in S5 are
those that have cycle-shape (15 ), (22 , 1), (3, 12 ), or (5).   double it? An obvious reason is that there is an analo-
If you count these, you will find that there are sixty even
permutations in S5 altogether, which is exactly half of
the total of 5! = 120 permutations in S5 . In general, the
number of even permutations in Sn is 12 n!.
   So what is the point of this complicated definition?
The answer is that the set of all even permutations in Sn
forms a subgroup of size 2 n!, known as the alternating
group of degree n, and written as An . The alternating
groups are very important examples of finite groups,
because of the fact that, for n ⩾ 5, An is a simple
group—that is, its only normal subgroups [I.3 §3.3](/part-01/fundamental-definitions)
are the identity subgroup and An itself (see the clas-
sification of finite simple groups [V.7](/part-05/the-classication-of-finite-simple-groups)). For exam-
ple, A5 is a simple group of size 60, and in fact is the
smallest non-Abelian finite simple group.
III.69
If you heat up a block of ice, then it turns into water.
This very familiar phenomenon is actually rather mys-
ter ious, because it shows that the properties of the
chemical H2 O do not depend continuously on temper-
ature: the block of ice goes straight from a solid to a
liquid, rather than doing so by a process of gradual
softening.
   This is an example of a phase transition. Phase transi-
tions tend to occur in systems that involve a large num-
ber of particles with “local” interactions—that is, where
the behavior of one particle is directly influenced only
by the particles in its immediate vicinity.
   Such systems can be modeled mathematically, and
the study of these models belongs to the area known as
statistical physics. For further discussion of such mod-
els, see probabilistic models of critical phenom-
ena [IV.25].

261
III.70   π
sgn(gh) = sgn(g) sgn(h)
tant, mathematically speaking, than another? Why, for
instance, would almost everybody agree that 2 is more
important than 43  32 ? One possible answer is that what
really matters about a number is its properties, and in
particular any interesting properties it might have that
distinguish it from all other numbers. Of course, we
sgn(g) = (−1)r1 −1 (−1)r2 −1 · · · (−1)rk −1 .
erty: for example, why do we not regard it as interesting
that 43
32 is the only number that gives you 16 when you
gous property for every number x you might care to
choose: x is the only number that gives you 2 x when
you double it. By contrast, the property “is the smallest
prime number” does not mention any specific number
and is easily stated in terms of a concept, that of “prime
number,” whose importance is itself easy to explain.
1
This property must apply to exactly one number, so it
is likely that that number will have an important part to
play in mathematics, and indeed it does. (As it happens,
43
32 is conjectured to be an important critical exponent
in statistical physics, which means that it can be sin-
gled out as an interesting number, though still nothing
like as fundamental as 2.)
Everybody agrees that π is one of the most important
numbers in mathematics, and it is easy to justify this
assessment by the criterion of the previous paragraph,
Phase Transitions
that when π appears unexpectedly in a calculation, one
is not unduly surprised. For example, the following is
a famous theorem of euler [VI.19](/part-06/leonhard-euler-17071783):
. nfty
1     1 1   1   1          π2
2
=1+ + +    +    + ··· =    .
n=1
n     4 9  16   25         6
What on earth, one might wonder, has π to do with
adding up reciprocals of squares? This is a perfectly
legitimate question, but the idea that there could in
principle be a connection is not, to an experienced
mathematician, a surprise. A very common way to
prove mathematical identities is to show that the two
sides of the identity are different ways of evaluating
the same quantity. In this case, one can use a basic fact
from fourier analysis [III.27](/part-03/the-fourier-transform), known as Plancherel’s
identity, which states the following. If f : R → C is a
periodic function with period 2π , and for every inte-
ger n (positive or negative) we define its nth Fourier