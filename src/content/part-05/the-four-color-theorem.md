# The Four-Color Theorem

696                                                                                               V. Theorems and Problems

        4 Infinite-Dimensional Fixed Point                              The importance of these two theorems, and others of
      Theorems and Applications to Analysis                          a similar nature, lies more in their applications than in
                                                                     their basic statements. A typical application is a proof
What happens if we try to generalize the Brouwer fixed                that the differential equation
point theorem to continuous maps defined on infinite-
                                                                              d2 u
dimensional closed balls? The answer is that we will                               = u − 10 sin(u2 ) − 10 exp(−|x|)
                                                                              dx 2
not be able to, as the following example shows. Let
                                                                     has a solution u such that u(x) is defined for every
B be the set of all sequences (a1 , a2 , . . . ) such that
         2
                                                                     real number x and tends to 0 as x tends to ±. nfty. We can
   n |an | ⩽ 1. This is our closed ball; it is the unit
                                                                     rewrite this equation as
ball of the hilbert space [III.37](/part-03/bayesian-analysis) 2 . Given an infinite
                                                                                   d2
sequence a = (a1 , a2 , . . . ), we write a for its norm                   1−          u = 10 sin(u2 ) + 10 exp(−|x|).
                                                                                 dx 2
( n |an |2 )1/2 . Now consider the map f : (a1 , a2 , . . . ) →
                                                                     If we write the left-hand side as L(u), then this equation
((1 − a2 )1/2 , a1 , a2 , . . . ). It is easy to check that f is
                                                                     can be further rewritten as
continuous and that f (a) = 1 for every a. There-
fore, if a is a fixed point, we must have a = 1, from                        u = L−1 (10 sin(u2 ) + 10 exp(−|x|)).
which we can see that a1 = 0. From this it follows that              (It is possible to identify the operator L−1 explicitly.) If
a2 = 0, and then that a3 = 0, and so on. In other words,             we now let X be the Banach space of continuous func-
a = 0. But this contradicts the condition that a = 1.              tions defined on R that tend to 0 at ±. nfty, with the uni-
Therefore, the map f has no fixed point.                              form norm, then it can be shown that the right-hand
   However, if we place extra conditions on a con-                   side of this last equation defines a continuous function
tinuous map, then it is some times possible to prove                  from X to a compact convex subset of X. Therefore,
fixed point theorems, and some of these theorems                      by the Schauder fixed point theorem, this highly non-
have important applications, notably to establishing                 linear equation has a solution with the given bound-
the existence of solutions to differential equations.                 ary conditions, a result that is hard to prove in any
   An easy result of this type is the contraction map-               other way.
ping theorem. This states that if X is a metric space
[III.56](/part-03/metric-spaces) with a property known as completeness (which                V.12 The Four-Color Theorem
is briefly discussed in normed spaces and banach                              Bojan Mohar
spaces [III.62](/part-03/normed-spaces-and-banach-spaces)) and f is a map from X to X such that
there exists a constant ρ < 1 such that d(f (x), f (y)) ⩽            The four-color theorem asserts that the regions of any
ρd(x, y) for every x and y in X, then f must have a                  map drawn in the plane (or, equivalently, on the two-
fixed point. To prove this, one picks any point x ∈ X                 dimensional sphere) can be colored with no more than
and looks at the iterates x, f (x), f (f (x)), f (f (f (x))),        four colors in such a way that any two regions with
and so on. Denoting these by x0 , x1 , x2 , . . . , one can          a common boundary are given different colors. The
prove quite easily that d(xn , xm ) tends to 0 as m and              example in figure 1 shows that four distinct colors are
n both tend to infinity, and the completeness property                necessary since the regions A, B, C, and D are all adja-
then guarantees that the sequence (xn ) has a limit. It              cent to each other. This result was conjectured by Fran-
is not hard to prove that this limit is a fixed point of f .          cis Guthrie in 1852. An in correct proof was given by
   A more sophisticated example is the Schauder fixed                 Kempe in 1879, and for eleven years the problem was
point theorem, which states that if X is a Banach space,             believed to have been solved, until Heawood pointed
K is a compact [III.9](/part-03/compactness-and-compactication) convex subset of X, and f is a                out the error in 1890. However, Heawood showed that
continuous function from K to K, then f has a fixed                   Kempe’s basic idea, which we shall out line below, could
point. Roughly speaking, to prove this one approx i-                  at least be used to give a correct proof that five colors
mates K by larger and larger finite-dimensional sets                  were always sufficient. After that, the problem became
Kn and approximates f by continuous maps fn that                     a famous example of a question that remained stub-
take Kn to Kn . Brouwer’s fixed point theorem gives a                 bornly open despite being very easy to understand.
sequence (xn ) such that fn (xn ) = xn for each n. The               (Another such problem was fermat’s last theorem
compactness of K implies that the sequence (xn ) has                 [V.10](/part-05/fermats-last-theorem).)
a convergent subsequence: its limit can be shown to be                 In modern mathematics, map-coloring problems are
a fixed point of f .                                                  usually formulated in the language of graph theory. To

V.12.   The Four-Color Theorem                                                                                       697

                               FHCABDFEGHCABDFigure 1 A map with eight regions.

                                                                          E                                 G
any map we assign a graph [III.34]: the vertices of the              Figure 2 The graph of the map from figure 1.
graph correspond to the regions of the map, and we
declare two vertices to be adjacent if the correspond-
ing regions share a piece of their boundary. The graph         red vertex green, there by freeing up red to be used for
for the map in figure 1 is shown in figure 2. It is easy         v. Of course, if we did that we might have to recolor
to see that the graph of any map in the plane can be           further vertices, but we could try to find a recoloring
drawn in such a way that no two edges cross each               as follows: first change the color of the red neighbor of
other: such graphs are called planar. Instead of color-        v to green. Then change all the green neighbors of that
ing regions of maps, we now color vertices of the corre-       vertex to red, and all the red neighbors of those ver-
sponding graphs. If no two vertices that are joined by         tices to green, and so on. When we have finished this
an edge have the same color, then we say that the col-         process, the one thing that could go wrong is that we
oring is proper. After this reformulation, the four-color      might end up recoloring the green neighbor of v red, in
theorem states that every planar graph G has a proper          which case we would not after all be free to use red for
coloring with at most four colors.                             v. This will happen if and only if there is a chain of ver-
   Here, briefly, is the proof of the five-color theorem         tices from the red neighbor of v to the green neighbor
due to Kempe and Heawood. It is a proof by con tr adic-          that alternates red and green. However, if this circum-
tion, so we start by assuming that the result is false. If     stance arises, we can try to recolor the yellow neighbor
that is the case, then there must be a graph G of min-         of v blue in a similar way. Once again, the only thing
imal size that has no proper coloring with five colors.         that can stop us is an alternating chain of yellow and
euler’s formula [I.4 §2.2](/part-01/general-goals) says that V − E + F = 2 for         blue vertices going from the yellow neighbor of v to
any (connected) planar graph, where V is the number            the blue neighbor. But such a chain cannot exist, as it
of vertices, E is the number of edges, and F is the num-       would at some point have to cross the red/green chain,
ber of regions into which the plane is divided by any          and this contradicts the fact that the graph is planar.
drawing of the graph. It is not hard to deduce from this          Returning to the four-color problem, the German
formula that G has a vertex v with at most five neigh-          mathematician Heinrich Heesch proposed a general
bors (that is, other vertices linked to v by an edge) in the   method for tackling it that can be thought of as a more
graph. If we remove v from the graph, then we can find          complicated version of the above argument. The idea is
a proper coloring of what is left, because G is a minimal      to identify a list C of “configurations” with the follow-
counterexample to the theorem. If v has fewer than five         ing properties. First, every planar graph must contain
neighbors, then we can color v as well, since there are        a configuration X that belongs to C. Second, given a
at most four colors that need to be avoided and we have        planar graph G that contains a configuration X from C,
five colors at our disposal. So the only thing that can go      and given a proper coloring of the rest of G that uses at
wrong is if v has five neighbors and those five colors           most four colors, it is possible to adjust this coloring in
all get different colors when we color the rest of G.           such a way that it can be extended to a proper coloring
   Let us suppose that the colors of the neighbors of v        of the whole of G. In the proof of the five-color theorem
are red, yellow, green, blue, and brown, as we go clock-       above, there was a very simple list of five configura-
wise around v. As it stands, we cannot color v, but we         tions: a vertex v with one edge, two edges, three edges,
could try to do so by adjusting the coloring of the rest       four edges, or five edges coming out of it. Nothing this
of the graph. For instance, we could try recoloring the        simple works for the four-color problem, but Heesch’s