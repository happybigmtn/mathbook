# Measures

246                                                                                                  III. Mathematical Concepts

                 b             9              d                     that the intervals cannot cover [0, 1]? Another tempt-
                                                                    ing answer is to say “just rearrange the intervals so that
         1                                            3
                                                                    they go from the left to the right, and then we never get
a                   2         7                6              f     to the right-hand end of [0, 1].” In other words, if the
                                                                    nth interval has length bn −an = dn , then just translate
         3                                            5             the intervals to be the intervals [0, d1 ], [d1 , d1 +d2 ], . . . .
                c                             e                     In this rearrangement it is indeed true that we never
                               8                                                                     
                                                                    cover any point beyond              dn , and so do not cover
             Figure 2 A graph with edge-weights.                    all of [0, 1], but why does this imply that the original
                                                                    intervals do not cover [0, 1]?
later. However, it is not hard to show that the algorithm              It is quite easy to see that this rearrangement argu-
is actually correct. In fact, it extends in almost exactly          ment works for a finite number of intervals, but it does
the same way to matroids in general: what it gives is               not work in general. Indeed, suppose we ask our origi-
a (rather fast) algorithm for selecting a basis of mini-            nal question again, but this time for the rationals: that
mum weight in a matroid in which each element has a                 is, let us replace the interval [0, 1] by the rational inter-
nonnegative weight.                                                 val [0, 1] ∩ Q. If our intervals have lengths 14 , 18 , 16  1
                                                                                                                                  ,...,
                                                                                                                             1
   Somewhat more surprisingly, matroids are the only                for example, so that the total length is only 2 , then cer-
structures for which the greedy algorithm works. More               tainly the left-to-right intervals will cover only the inter-
precisely, suppose that I is a family of subsets of a set           val [0, 12 ] ∩ Q, but it is possible for the original intervals
E with the property that if A ∈ I and B ⊆ A, then B ∈ I.            to cover all of [0, 1]∩Q, since we can just enumerate the
Now let w be any weight function and suppose that                   rationals as q1 , q2 , . . . (see countable and uncount-
the problem is to select a member B of I which has                  able sets [III.11](/part-03/countable-and-uncountable-sets)), and then put an interval of length 14
                                                                                                     1
maximum weight, where the weight of a set is just the               around q1 , one of length 8 around q2 , and so on.
sum of the weights of its elements. As above, the greedy               This observation shows that the answer to our prob-
algorithm starts by choosing an element e of maximum                lem must involve properties of the reals that are not
weight and then successively picks elements of maxi-                shared by the rationals, which wrecks any kind of “it
mum weight from the remaining elements subject to                   is obvious” argument. In fact, the result is true for the
the proviso that at each stage, the set of elements cho-            reals, but its proof is a good exercise.
sen is a member of I. It turns out that the following                  Why is this an important fact? It stems from a wish
is true: the greedy algorithm works on I for all weight             to define “length” for general sets of reals (for simplic-
functions w if and only if I is the collection of indepen-          ity, we will concentrate on [0, 1], just to avoid some
dent sets of a matroid. Thus, matroids form a “natural              technicalities about “infinite length”). What should the
home” for many optimization problems. Moreover, the                 “length” of a set be? For intervals the answer is clear,
concept is genuinely useful, since many of the matroids             and it is also clear for finite unions of intervals. But
that arise in such problems are not derived from either             what about sets like { 12 , 13 , 14 , . . . }, or Q itself?
vector spaces or graphs.                                               A natural first attempt would be to use finite unions
                                                                    of intervals: one could take the length of a set A to be
III.55       Measures                                               the least value of the length of a finite union of inter-
                                                                    vals that covers A. More precisely, one could define
To understand measure theory, and to see why it is use-             the length of A to be the infimum of (b1 − a1 ) +
ful and important, it is instructive to start with a prob-          · · · + (bn − an ), taken over all finite unions of intervals
lem about lengths. Suppose that we have a sequence                  [a1 , b1 ] ∪ · · · ∪ [an , bn ] that cover A.
of intervals in [0, 1] (the closed interval from 0 to 1),              Unfortunately, this definition has some very undesir-
of total length less than 1. Can they cover [0, 1]? In              able properties. For example, the length of the set of all
other words, given intervals [a1 , b1 ], [a2 , b2 ], . . . , with   rational numbers in the interval [0, 1] would then be 1,

  (bn − an ) < 1, is it possible that their union equals            as would the length of all irrational numbers in [0, 1].
[0, 1]?                                                             We would thus have two disjoint sets (and very natural
   One is tempted to answer “no, as the total length is             ones at that) such that the length of their union is not
too small.” But this is just to restate the question. After         the sum of their lengths. So this form of “length” is not
all, why should “total length less than 1” actually imply           really well-behaved for such sets.

