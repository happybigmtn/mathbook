# Measures

246

a

later. However, it is not hard to show that the algorithm
is actually correct. In fact, it extends in almost exactly
the same way to matroids in general: what it gives is
a (rather fast) algorithm for selecting a basis of mini-
mum weight in a matroid in which each element has a
nonnegative weight.
   Some what more surprisingly, matroids are the only
structures for which the greedy algorithm works. More
precisely, suppose that I is a family of subsets of a set
E with the property that if A ∈ I and B ⊆ A, then B ∈ I.
Now let w be any weight function and suppose that
the problem is to select a member B of I which has
maximum weight, where the weight of a set is just the
sum of the weights of its elements. As above, the greedy
algorithm starts by choosing an element e of maximum
weight and then successively picks elements of maxi-
mum weight from the remaining elements subject to
the proviso that at each stage, the set of elements cho-
sen is a member of I. It turns out that the following
is true: the greedy algorithm works on I for all weight
functions w if and only if I is the collection of indepen-
dent sets of a matroid. Thus, matroids form a “natural
home” for many optimization problems. More over, the
concept is genuinely useful, since many of the matroids
that arise in such problems are not derived from either
vector spaces or graphs.
III.55
To understand measure theory, and to see why it is use-
ful and important, it is instructive to start with a prob-
lem about lengths. Suppose that we have a sequence
of intervals in [0, 1] (the closed interval from 0 to 1),
of total length less than 1. Can they cover [0, 1]? In
other words, given intervals [a1 , b1 ], [a2 , b2 ], . . . , with   rational numbers in the interval [0, 1] would then be 1,

  (bn − an ) < 1, is it possible that their union equals
[0, 1]?
   One is tempted to answer “no, as the total length is
too small.” But this is just to restate the question. After
all, why should “total length less than 1” actually imply

III. Mathematical Concepts
b
ing answer is to say “just rearrange the intervals so that
1
they go from the left to the right, and then we never get
2
nth interval has length bn −an = dn , then just translate
3
c
8                                                                     
cover any point beyond              dn , and so do not cover
Figure 2 A graph with edge-weights.
intervals do not cover [0, 1]?
It is quite easy to see that this rearrangement argu-
ment works for a finite number of intervals, but it does
not work in general. Indeed, suppose we ask our origi-
nal question again, but this time for the rationals: that
is, let us replace the interval [0, 1] by the rational inter-
val [0, 1] ∩ Q. If our intervals have lengths 14 , 18 , 16  1
,...,
1
for example, so that the total length is only 2 , then cer-
tainly the left-to-right intervals will cover only the inter-
val [0, 12 ] ∩ Q, but it is possible for the original intervals
to cover all of [0, 1]∩Q, since we can just enumerate the
rationals as q1 , q2 , . . . (see countable and un count-
able sets [III.11](/part-03/countable-and-uncountable-sets)), and then put an interval of length 14
1
around q1 , one of length 8 around q2 , and so on.
This observation shows that the answer to our prob-
lem must involve properties of the reals that are not
shared by the rationals, which wrecks any kind of “it
is obvious” argument. In fact, the result is true for the
reals, but its proof is a good exercise.
Why is this an important fact? It stems from a wish
to define “length” for general sets of reals (for simplic-
ity, we will concentrate on [0, 1], just to avoid some
technicalities about “infinite length”). What should the
“length” of a set be? For intervals the answer is clear,
and it is also clear for finite unions of intervals. But
what about sets like { 12 , 13 , 14 , . . . }, or Q itself?
A natural first attempt would be to use finite unions
of intervals: one could take the length of a set A to be
Measures
vals that covers A. More precisely, one could define
the length of A to be the infimum of (b1 − a1 ) +
· · · + (bn − an ), taken over all finite unions of intervals
[a1 , b1 ] ∪ · · · ∪ [an , bn ] that cover A.
Unfortunately, this definition has some very undesir-
able properties. For example, the length of the set of all
as would the length of all irrational numbers in [0, 1].
We would thus have two disjoint sets (and very natural
ones at that) such that the length of their union is not
the sum of their lengths. So this form of “length” is not
really well-behaved for such sets.