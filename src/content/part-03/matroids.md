# Matroids

$244$

Ullrich, P. 1998 . The genesis of Hensel’s p-adic numbers. In Charlemagne and His Heritage. 1200 Years of Civilization and Science in Europe, volume $2$ , $pp. 163 - 78$ . Turnhout: Brepols. The Logarithmic Function See the exponential and logarithmic functions [III.25](/part-03/the-exponential-and-logarithmic-functions) III . $52$ The Mandelbrot Set Suppose we have a complex polynomial f defined by a formula $f(z) = z^{2} + C$ for some complex number C. Then for any choice of complex number $z^{0}$ we can form a sequence $z^{0}$ , $z^{1}$ , $z^{2}$ , . . .
by iterating, that is, repeatedly applying, the function f . So we let $z^{1} = f(z^{0})$ , $z^{2} = f(z^{1})$, and so on. Sometimes the resulting sequence will tend to infinity, but sometimes it remains bounded-- that is, it stays within a fixed distance from $0$ . For example, if we take $C = 2$ and start with $z^{0} = 1$ , then the sequence goes $1$ , $3$ , $11$ , $123$ , 15131 , . . .
and clearly tends to infinity, whereas if we start with $z^{0}$ equal to √ $12{}^{2}(1 - i 7)$ , then we find that $z^{1} = z^{0} + 2 = z^{0}$ so the sequence is bounded since all its terms are equal to $z^{0}$ . The Julia set associated with the constant C is the set of all $z^{0}$ for which the sequence remains bounded. Julia sets often have a fractal shape (see [IV.14](/part-04/dynamics) ). To define a Julia set, one fixes C and considers different possibilities for $z^{0}$ . What happens if one fixes $z^{0}$ and considers different possibilities for C? The result is the Mandelbrot set.
The precise definition is that it is the set of all C such that the sequence is bounded if you take $z^{0} = 0$ . (One could consider other values of $z^{0}$ , but the resulting sets are not interestingly different because they are related to each other by a simple change of variables .) The Mandelbrot set also has an intricate fractal shape--one that has captured the popular imagination. The detailed geometry of the Mandelbrot set is not yet fully understood; some of the resulting open problems are of major importance because they encode very general information about dynamical systems.
See dynamics [IV.14](/part-04/dynamics) for more details. III . $53$ Manifolds The surface of a sphere has the property that if you look at a very small portion of it then that portion will look like part of a plane. More generally, a d-dimensional III. Mathematical Concepts manifold, or d-manifold, is a geometrical object that looks “locally” like d-dimensional euclidean space [I.3](/part-01/fundamental-definitions). Thus, $2$ - manifolds are smooth surfaces such as those of a sphere or a torus. Higher-dimensional manifolds are harder to visualize, but are a major topic of research.
The basics of manifolds are set out in some fundamental mathematical definitions [I . 3 § § 6 . 9 , 6 . 10 ] . More advanced ideas are discussed in differential topology [IV.7](/part-04/dierential-topology) and algebraic topology [IV.6](/part-04/algebraic-topology) . See also algebraic geometry [IV.4](/part-04/algebra), moduli spaces [IV.8](/part-04/moduli-spaces), and ricci flow [III.78](/part-03/ricci-flow). (Even this is far from a complete list of articles in which manifolds feature .) III .
$54$ Matroids Dominic Welsh The original aim of Hassler Whitney when he introduced the concept of a matroid in 1935 was to produce an abstract notion that would capture the main ingredients of the structure of a set of vectors in a vector space [I.3](/part-01/fundamental-definitions), while avoiding any explicit mention of linear independence. To do this he singled out two fundamental properties and postulated that any family of subsets that possessed these properties was the collection of “independent sets” of a “matroid.” The first of these properties was an obvious one:
any subset of a linearly independent set is also linearly independent. The second property was more subtle: if A and B are two linearly independent sets and B contains more elements than A, then there exists some element of B that is not in A but which, when added to A, gives a set that is still linearly independent. Finally, in order to avoid trivialities he insisted that in every matroid the empty set must be independent.
Thus, formally, a matroid is defined to be a finite set E together with a family of subsets of E which are called the independent sets and which satisfy the following axioms. (i) The empty set is independent. (ii) Every subset of an independent set is independent. (iii) If A and B are independent sets, with the number of elements of A being one less than the number of elements of B, then there is some x in B that is not in A such that A ∪ {x} is also independent. Property (iii) is called the exchange axiom. The most fundamental example of a matroid is a set of vectors

III . $54$ .

Matroids

b

b

G: a

H: a

c

c

d

d

Figure $1$ Two graphs giving rise to the same matroid. in a vector space with the “independent sets” being the usual linearly independent ones: in this case the exchange axiom is known as Steinitz’s exchange lemma. However, there are many examples of matroids that are not subsets of vector spaces. Here, for example, is an important class of matroids that arise from graph theory. A cycle in a graph is a collection of edges of the form $(v^{1}$ , $v^{2})$ , $(v^{2}$ , $v^{3})$ , . . . , (v k $- {}^{1}$ , v k), (v k , $v^{1}$ ), where the v i are distinct vertices.
Take any graph and call a subset of edges “independent” if it contains no cycle. So here we are thinking of a cycle among the edges as being in some way similar to a linear dependence among some vectors. It is obvious that any subset of an independent set will also not contain a cycle, so condition (ii) is satisfied. Slightly less obvious is that if A and B are sets of $t$ and $t + 1$ edges, respectively, neither containing a cycle, then there will be at least one edge in B but not in A which can be added to A without creating a cycle.
So we see that this is another example of a matroid, even though it arises in a very different context from the vector space one. As it turns out, there is a way of identifying the edges of a graph with a set of vectors in a vector space over the field $F^{2}$ of integers mod 2 ( see modular arithmetic [III.58](/part-03/modular-arithmetic)). If G has n vertices and one associates with each vertex a basis element of F $n^{2}$ , then one can associate with each edge the vector that is given by the sum of the basis elements corresponding to its two endpoints.
A set of edges will then be independent if and only if the corresponding vectors in F $n^{2}$ are linearly independent. However, as we shall see, there are important examples of matroids that are not even isomorphic to sets of vectors. Note that the collection of the independent sets (in a graph) conveys part of the information present in the graph, but by no means all of it. For example, consider the graphs G and H in figure $1$ .
As graphs, G and H are distinct, but both give the same matroid on the set {a, b, c, d} (the independent sets are all subsets of size less than or equal to $3$ , except for {a, b, c }). Note that this matroid is also the same as the matroid formed by

$245$

the columns of the matrix

a

b

c

d

⎛

⎞

1011

⎜

⎟

$A =$ ⎜

$1$ ⎟

⎝ $011$

⎠ .

0001

However, it turns out that most matroids do not come from either graphs or matrices. Although a matroid is defined by very simple axioms, many basic results from both linear algebra and graph theory can be extended to the wider setting of matroids. For example, suppose that G is a connected graph. It is not hard to prove that if B is a maximal independent set of the matroid on G, then B is a tree which is incident with every vertex of G. Such a tree is called a spanning tree of G.
All spanning trees of a connected graph have the same number of edges, namely, one less than the number of vertices. Similarly, in a vector space, or indeed in any subset of vectors, all maximal linearly independent sets have the same size. Both of these are special cases of the general result that in any matroid all maximal independent sets have the same size. This common size is called the rank of the matroid and, by analogy with vector spaces, a maximal independent set in a matroid is called a basis. Matroids arise naturally in many parts of mathematics, and they often turn up unexpectedly.
 For example, consider the minimum connector problem: a company needs to connect a number of cities by links, such as railways or phone cables, and wishes to minimize the total cost. This is clearly equivalent to the following problem. Given a connected graph G, with each edge e having a nonnegative weight w (e), find a set of edges that has the minimum total weight but that connects all the vertices of G. It is not hard to see that this problem reduces to finding a spanning tree of minimum weight. For this there is a classical algorithm.
It is the simplest possible algorithm one could imagine for the problem, and it works as follows. Start by choosing an edge of minimum weight, and at each subsequent step add an edge of minimum weight to your chosen set provided that at no stage a cycle is formed. For example, consider the graph in figure $2$ . The algorithm would successively select the edges (a , b) , (b , c) , (d , f) , (e , f), (c , d), giving a spanning tree of total weight $1 + 2 + 3 + 5 + 7 = 18$ . Because of the way it works, the algorithm is known as a greedy algorithm.
At first sight, it seems rather unlikely that this algorithm could work, as it denies the possibility that choosing a suboptimal edge now might have a payoff