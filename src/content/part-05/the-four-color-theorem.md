# The Four-Color Theorem

696

What happens if we try to generalize the Brouwer fixed
point theorem to continuous maps defined on infinite-
dimensional closed balls? The answer is that we will
not be able to, as the following example shows. Let
B be the set of all sequences (a1 , a2 , . . . ) such that

   n |an | ⩽ 1. This is our closed ball; it is the unit
ball of the hilbert space [III.37](/part-03/bayesian-analysis) 2 . Given an infinite
sequence a = (a1 , a2 , . . . ), we write a for its norm
 
( n |an |2 )1/2 . Now consider the map f : (a1 , a2 , . . . ) →
((1 − a2 )1/2 , a1 , a2 , . . . ). It is easy to check that f is
continuous and that f (a) = 1 for every a. There-
fore, if a is a fixed point, we must have a = 1, from
which we can see that a1 = 0. From this it follows that
a2 = 0, and then that a3 = 0, and so on. In other words,
a = 0. But this contradicts the condition that a = 1.
Therefore, the map f has no fixed point.
   However, if we place extra conditions on a con-
tinuous map, then it is some times possible to prove
fixed point theorems, and some of these theorems
have important applications, notably to establishing
the existence of solutions to differential equations.
   An easy result of this type is the contraction map-
ping theorem. This states that if X is a metric space
[III.56](/part-03/metric-spaces) with a property known as completeness (which
is briefly discussed in normed spaces and banach
spaces [III.62](/part-03/normed-spaces-and-banach-spaces)) and f is a map from X to X such that
there exists a constant ρ < 1 such that d(f (x), f (y)) ⩽
ρd(x, y) for every x and y in X, then f must have a
fixed point. To prove this, one picks any point x ∈ X
and looks at the iterates x, f (x), f (f (x)), f (f (f (x))),
and so on. Denoting these by x0 , x1 , x2 , . . . , one can
prove quite easily that d(xn , xm ) tends to 0 as m and
n both tend to infinity, and the completeness property
then guarantees that the sequence (xn ) has a limit. It
is not hard to prove that this limit is a fixed point of f .
   A more sophisticated example is the Schauder fixed
point theorem, which states that if X is a Banach space,
K is a compact [III.9](/part-03/compactness-and-compactication) convex subset of X, and f is a
continuous function from K to K, then f has a fixed
point. Roughly speaking, to prove this one approx i-
mates K by larger and larger finite-dimensional sets
Kn and approximates f by continuous maps fn that
take Kn to Kn . Brouwer’s fixed point theorem gives a
sequence (xn ) such that fn (xn ) = xn for each n. The
compactness of K implies that the sequence (xn ) has
a convergent subsequence: its limit can be shown to be
a fixed point of f .

V. Theorems and Problems
4 Infinite-Dimensional Fixed Point
Theorems and Applications to Analysis
their basic statements. A typical application is a proof
that the differential equation
d2 u
= u − 10 sin(u2 ) − 10 exp(−|x|)
dx 2
has a solution u such that u(x) is defined for every
2
real number x and tends to 0 as x tends to ±. nfty. We can
rewrite this equation as
d2
1−
dx 2
If we write the left-hand side as L(u), then this equation
can be further rewritten as
u = L−1 (10 sin(u2 ) + 10 exp(−|x|)).
(It is possible to identify the operator L−1 explicitly.) If
we now let X be the Banach space of continuous func-
tions defined on R that tend to 0 at ±. nfty, with the uni-
form norm, then it can be shown that the right-hand
side of this last equation defines a continuous function
from X to a compact convex subset of X. Therefore,
by the Schauder fixed point theorem, this highly non-
linear equation has a solution with the given bound-
ary conditions, a result that is hard to prove in any
other way.
V.12 The Four-Color Theorem
Bojan Mohar
The four-color theorem asserts that the regions of any
map drawn in the plane (or, equivalently, on the two-
dimensional sphere) can be colored with no more than
four colors in such a way that any two regions with
a common boundary are given different colors. The
example in figure 1 shows that four distinct colors are
necessary since the regions A, B, C, and D are all adja-
cent to each other. This result was conjectured by Fran-
cis Guthrie in 1852. An in correct proof was given by
Kempe in 1879, and for eleven years the problem was
believed to have been solved, until Heawood pointed
out the error in 1890. However, Heawood showed that
Kempe’s basic idea, which we shall out line below, could
at least be used to give a correct proof that five colors
were always sufficient. After that, the problem became
a famous example of a question that remained stub-
bornly open despite being very easy to understand.
(Another such problem was fermat’s last theorem
[V.10](/part-05/fermats-last-theorem).)
In modern mathematics, map-coloring problems are
usually formulated in the language of graph theory. To

V.12.   The Four-Color Theorem

any map we assign a graph [III.34]: the vertices of the
graph correspond to the regions of the map, and we
declare two vertices to be adjacent if the correspond-
ing regions share a piece of their boundary. The graph
for the map in figure 1 is shown in figure 2. It is easy
to see that the graph of any map in the plane can be
drawn in such a way that no two edges cross each
other: such graphs are called planar. Instead of color-
ing regions of maps, we now color vertices of the corre-
sponding graphs. If no two vertices that are joined by
an edge have the same color, then we say that the col-
oring is proper. After this reformulation, the four-color
theorem states that every planar graph G has a proper
coloring with at most four colors.
   Here, briefly, is the proof of the five-color theorem
due to Kempe and Heawood. It is a proof by con tr adic-
tion, so we start by assuming that the result is false. If     stance arises, we can try to recolor the yellow neighbor
that is the case, then there must be a graph G of min-
imal size that has no proper coloring with five colors.
euler’s formula [I.4 §2.2](/part-01/general-goals) says that V − E + F = 2 for
any (connected) planar graph, where V is the number
of vertices, E is the number of edges, and F is the num-
ber of regions into which the plane is divided by any
drawing of the graph. It is not hard to deduce from this
formula that G has a vertex v with at most five neigh-
bors (that is, other vertices linked to v by an edge) in the   method for tackling it that can be thought of as a more
graph. If we remove v from the graph, then we can find
a proper coloring of what is left, because G is a minimal
counterexample to the theorem. If v has fewer than five
neighbors, then we can color v as well, since there are
at most four colors that need to be avoided and we have
five colors at our disposal. So the only thing that can go
wrong is if v has five neighbors and those five colors
all get different colors when we color the rest of G.
   Let us suppose that the colors of the neighbors of v
are red, yellow, green, blue, and brown, as we go clock-
wise around v. As it stands, we cannot color v, but we
could try to do so by adjusting the coloring of the rest
of the graph. For instance, we could try recoloring the

697
FHCABDFEGHCABDFigure 1 A map with eight regions.
E                                 G
Figure 2 The graph of the map from figure 1.
red vertex green, there by freeing up red to be used for
v. Of course, if we did that we might have to recolor
further vertices, but we could try to find a recoloring
as follows: first change the color of the red neighbor of
v to green. Then change all the green neighbors of that
vertex to red, and all the red neighbors of those ver-
tices to green, and so on. When we have finished this
process, the one thing that could go wrong is that we
might end up recoloring the green neighbor of v red, in
which case we would not after all be free to use red for
v. This will happen if and only if there is a chain of ver-
tices from the red neighbor of v to the green neighbor
that alternates red and green. However, if this circum-
of v blue in a similar way. Once again, the only thing
that can stop us is an alternating chain of yellow and
blue vertices going from the yellow neighbor of v to
the blue neighbor. But such a chain cannot exist, as it
would at some point have to cross the red/green chain,
and this contradicts the fact that the graph is planar.
Returning to the four-color problem, the German
mathematician Heinrich Heesch proposed a general
complicated version of the above argument. The idea is
to identify a list C of “configurations” with the follow-
ing properties. First, every planar graph must contain
a configuration X that belongs to C. Second, given a
planar graph G that contains a configuration X from C,
and given a proper coloring of the rest of G that uses at
most four colors, it is possible to adjust this coloring in
such a way that it can be extended to a proper coloring
of the whole of G. In the proof of the five-color theorem
above, there was a very simple list of five configura-
tions: a vertex v with one edge, two edges, three edges,
four edges, or five edges coming out of it. Nothing this
simple works for the four-color problem, but Heesch’s