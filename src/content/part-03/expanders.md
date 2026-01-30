# Expanders

$196$

Step (i) : prove that suitable weak solutions exist for $3D$ Navier-Stokes on all of $R^{3} \times (0$ , $\infty)$ . Step (ii) : prove that any suitable weak solution of $3D$ Navier-Stokes must be smooth. Step (iii) : conclude that the suitable weak solution constructed in step (i) is in fact a smooth solution of the $3D$ Navier-Stokes equations on all of $R^{3} \times (0$ , $\infty)$ . Here, “suitable” means “not too big”; we omit the precise definition. Analogues of the above plan have succeeded for interesting partial differential equations.
But for $3D$ Navier-Stokes, the plan has been only partly carried out. It has been known for a long time how to construct suitable weak solutions of $3D$ Navier-Stokes, but the uniqueness of these solutions has not been proved. Thanks to the work of Sheffer, of Lin, and of Caffarelli, Kohn, and Nirenberg, it is known that any suitable weak solution to $3D$ Navier-Stokes must be smooth (i . e . , it must possess derivatives of all orders), out side a set $E$ ⊂ $R^{3} \times (0$ , $\infty)$ of small fractal dimension [III.17](/part-03/dimension). In particular, E cannot contain a curve.
To rule out a breakdown, one would have to show that E is the empty set. For the Euler equation, weak solutions again make sense, but examples due to Sheffer and Shnirelman show that they can behave very strangely. A two dimensional fluid that is initially at rest and subject to no out side forces can suddenly start moving in a bounded region of space and then return to rest. Such behavior can occur for a weak solution of $2D$ Euler. The Navier-Stokes and Euler equations give rise to a number of fundamental problems in addition to the breakdown problem discussed above.
We finish this article with one such problem. Suppose that we fix an initial velocity $u^{0}(x)$ for the $3D$ Navier-Stokes or Euler equation. The energy $E^{0}$ at time $t = 0$ is given by $1|u(x$ , $0)|^{2}dx. E^{0} = 2R^{3}$ (ν) (ν) (ν) For $\nu \ge 0$ , let u $(\nu ) (x$ , $t) = (u^{1}$ , $u^{2}$ , $u^{3})$ denote the Navier-Stokes solution with initial velocity $u^{0}$ and with viscosity ν. (If $\nu = 0$ , then $u({}^{0})$ is an Euler solution .) We assume that u (ν) exists for all time, at least when $\nu > 0$ .
The energy for u $(\nu ) (x$ ,  t) at time $t \ge 0$ is given by $1$ E (ν) (t) = $|u(\nu ) (x$ , $t)|^{2}dx.2R^{3}$ An elementary calculation based on ( $1$ ) - ( $3$ ) (we multiply (1) or (2) by $u^{i}(x)$ , sum over i, integrate over all $x \inR^{3}$ , III. Mathematical Concepts and integrate by parts) shows that ( $\nu) 23$ ∂u i d (ν) $E (t) = - \frac{1}{2}\nu$ dx. (6) dt ∂x j $R^{3}ij = 1$ In particular, for the Euler equation we have $\nu = 0$ , and ( $6$ ) shows that the energy is equal to $E^{0}$ , independently of time, as long as the solution exists.
Now suppose that ν is small but nonzero. From ( $6$ ) it is natural to guess that |$(d / dt) E (\nu) (t)$| is small when ν is small, so that the energy remains almost constant for a long time. However, numerical and physical experiments suggest strongly that this is not the case. Instead, it seems that there exists $T^{0} > 0$ , depending on $u^{0}$ but independent of ν, such that the fluid loses at least half of its initial energy by time $T^{0}$ , regard less of how small ν is (provided that $\nu > 0)$ . It would be very important if one could prove (or disprove) this assertion.
We need to understand why a tiny viscosity dissipates a lot of energy. III . $24$ Expanders Avi Wigderson $1$ The Basic Definition An expander is a special sort of graph [III.34] that has remarkable properties and many applications. Roughly speaking, it is a graph that is very hard to disconnect because every set of vertices in the graph is joined by many edges to its complement. More precisely, we say that a graph with n vertices is a c-expander if for every $1$ m $\le {}^{2}$ n and every set S of m vertices there are at least cm edges between S and the complement of S.
This definition is particularly interesting when G is sparse: in other words, when G has few edges. We shall concentrate on the important special case where G is regular of degree d for some fixed constant d that is independent of the number n of vertices: this means that every vertex is joined to exactly d others.
When G is regular of degree d, the number of edges from S to its complement is obviously at most dm, so if c is some fixed constant (that is, not tending to zero with n), then the number of edges between any set of vertices and its complement is within a constant of the largest number possible. As this comment suggests, we are usually interested not in single graphs but in infinite families of graphs: we say that an infinite family of d-regular graphs is a family of expanders if there is a constant $c > 0$ such that each graph in the family is a c-expander.

III.24.   Expanders

The first person to prove that expanders exist was
Pinkser, who proved that if n is large and d ⩾ 3,
then almost every d-regular graph with n vertices is
an expander. That is, he proved that there is a con-
stant c > 0 such that for every fixed d ⩾ 3, the pro-
portion of d-regular graphs with n vertices that are
not expanders tends to zero as n tends to infinity.
This proof was an early example of the probabilistic
method [IV.19 §3](/part-04/extremal-and-probabilistic-combinatorics) in combinatorics. It is not hard to
see that if a d-regular graph is chosen uniformly at ran-
dom, then the expected number of edges leaving a set
S is d|S|(n − |S|)/n, which is at least ( 12 d)|S|. Stan-
dard “tail estimates” are then used to prove that, for
any fixed S, the probability that the number of edges
leaving S is significantly different from its expected
value is extremely small: so small that if we add up the
probabilities for all sets, then even the sum is small.
So with high probability all sets S have at least c|S|
edges to their complement. (In one respect this descrip-
tion is misleading: it is not a straightforward matter
to discuss probabilities of events concerning random
d-regular graphs because the edges are not indepen-
dently chosen. However, Bollobás has defined an equiv-
alent model for random regular graphs that allows
them to be handled.)
   Note that this proof does not give us an explicit
description of any expander: it merely proves that
they exist in abundance. This is a drawback to the
proof, because, as we shall see later, there are appli-
ca tions for expanders that depend on some kind of
explicit description, or at least on an efficient method
of producing expanders. But what exactly is an “explicit
description” or an “efficient method”? There are many
possible answers to this question, of which we shall dis-
cuss two. The first is to demand that there is an algo-
rithm that can list, for any integer n, all the vertices and   3-regular graph with p vertices. This time the vertex
edges of a d-regular c-expander with around n vertices
(we could be flexible about this and ask for the num-
ber of vertices to be between n and n2 , say) in a time
that is polynomial in n. (See computational complex-
ity [IV.20 §2](/part-04/computational-complexity) for a discussion of polynomial-time algo-
rithms.) Descriptions of this kind are some times called
“mildly explicit.”
   To get an idea of what is “mild” about this, consider
the following graph. Its vertices are all 01 sequences
of length k, and two such sequences are joined by an
edge if they differ in exactly one place. This graph is
some times called the discrete cube in k dimensions. It

197
2   The Existence of Expanders
tices and edges will be huge compared with k. How-
ever, for many purposes we do not actually need such
a list: what matters is that there is a concise way of
representing each vertex, and an efficient algorithm for
listing the (representations of the) neighbors of any
given vertex. Here the 01 sequence itself is a very con-
cise representation, and given such a sequence σ it
is very easy to list, in a time that is polynomial in k
rather than 2 k , the k sequences that can be obtained by
altering σ in one place. Graphs that can be efficiently
described in this way (so that listing the neighbors of
a vertex takes a time that is polynomial in the loga-
rithm of the number of vertices) are called strongly
explicit.
The quest for explicitly constructed expanders has
been the source of some beautiful mathematics, which
has often used ideas from fields such as number theory
and algebra. The first explicit expander was discovered
by Margulis. We give his construction and another one;
we stress that although these constructions are very
simple to describe, it is rather less easy to prove that
they really are expanders.
Margulis’s construction gives an 8-regular graph Gm
for every integer m. The vertex set is Zm . imes Zm , where
Zm is the set of all integers mod m. The neighbors of
the vertex (x, y) are (x + y, y), (x − y, y), (x, y + x),
(x, y − x), (x + y + 1, y), (x − y + 1, y), (x, y + x + 1),
(x, y − x + 1) (all operations are mod m). Margulis’s
proof that Gm is an expander was based on re pre sen-
tation theory [IV.9](/part-04/representation-theory) and did not provide any specific
bound on the expansion constant c. Gabber and Galil
later derived such a bound using harmonic analy-
sis [IV.11](/part-04/harmonic-analysis). Note that this family of graphs is strongly
explicit.
Another construction provides, for each prime p, a
set is Zp , and a vertex x is connected to x + 1, x − 1,
and x −1 (where this is the inverse of x mod p, and we
define the inverse of 0 to be 0). The proof that these
graphs are expanders depends on a deep result in num-
ber theory, called the Selberg 3/16 theorem. This family
is only mildly explicit, since we are at present unable to
generate large primes deterministical ly.
Until recently, the only known methods for explic-
itly constructing expanders were algebraic. However, in
2002 Reingold, Vadhan, and Wigderson introduced the
so-called zigzag product of graphs, and used it to give
a combinatorial, iterative construction of expanders.

1983

Expanders and Eigenvalues

The condition that a graph should be a c-expander involves all subsets of the vertices. Since there are exponentially many subsets, it would seem on the face of it that checking whether a graph is a c-expander is an exponentially long task. And, indeed, this problem turns out to be co-np complete [IV . 20 § § 3 , 4 ] . However, we shall now describe a closely related property that can be checked in polynomial time, and which is in some ways more natural.
Given a graph G with n vertices, its adjacency matrix A is the n $\times$ n matrix where A uv is defined to be $1$ if u is joined to v and $0$ otherwise. This matrix is real and symmetric, and therefore has n real eigenvalues [I.3](/part-01/fundamental-definitions). ambda1 ,$. ambda2 , . . . , $\lambda^{n}$ , which we name in such a way that $\lambda^{1} \ge \lambda^{2} \ge$ · · · $\ge \lambda^{n}$ . More over, eigenvectors [I.3](/part-01/fundamental-definitions) with distinct eigenvalues are orthogonal.
It turns out that these eigenvalues encode a great deal of useful information about G. But before we come to this, let us briefly consider how A acts as a linear map. If we are given a function f , defined on the vertices of G, then Af is the function whose value at u is the sum of f (v) over all neighbors v of u. From this we see immediately that if G is d-regular and f is the function that is $1$ at every vertex, then Af is the function that is d at every vertex. In other words, a constant function is an eigenvector of A with eigenvalue d.
It is also not hard to see that this is the largest possible eigenvalue $\lambda^{1}$ , and that if the graph is connected, then the second largest eigenvalue $\lambda^{2}$ will be strictly less than d. In fact, the relationship between $\lambda^{2}$ and connectivity properties of the graph is considerably deeper than this: roughly speaking, the further away $\lambda^{2}$ is from d, the bigger the expansion parameter c of the graph. More precisely, it can be shown that c lies between $12d(d - \lambda^{2})$ .
From this it follows that $2(d - \lambda^{2})$ and an infinite family of d-regular graphs is a family of expanders if and only if there is some constant $a > 0$ such that the spectral gaps $d - \lambda^{2}$ are at least a for every graph in the family. One of the many reasons these bounds on c are important is that although, as we have remarked, it is hard to test whether a graph is a c-expander, its second largest eigenvalue can be computed in polynomial time. So we can at least obtain estimates for how good the expansion properties of a graph are.
Another important parameter of a d-regular graph G is the largest absolute value of any eigenvalue apart from $\lambda^{1}$ ; this parameter is denoted by $\lambda(G)$ . If $\lambda(G)$ is III. Mathematical Concepts small, then G behaves in many respects like a random d-regular graph. For example, let A and B be two disjoint sets of vertices. If G were random, a small calculation shows that we would expect the number E (A , B) of edges from A to $B$ to be about $d|A||B|/n$ .
It can be shown that, for any two disjoint sets in any d-regular graph G, E (A , B) will differ from this expected amount by at most $\lambda(G) |A||B|$ . Therefore, if $\lambda(G)$ is a small fraction of d, then between any two reasonably large sets A and B we get roughly the number of edges that we expect. This shows that graphs for which $\lambda$ (G) is small “behave like random graphs.” It is natural to ask how small $\lambda$ (G) can be in dregular graphs. Alon and Boppana proved that it was √ always at least $2 d - 1 - g(n)$ for a certain function g that tends to zero as n increases.
Friedman proved that almost all d-regular graphs G with n vertices have √ $\lambda(G) \le 2 d - 1 + h(n)$ , where  h(n) tends to zero, so a typical d-regular graph comes very close to matching the best possible bound for $\lambda$ (G). The proof was a tour de force. Even more remarkably, it is possible to match the lower bound with explicit constructions: the famous Ramanujan graphs of Lubotzky, Philips, and Sarnak, and, independently, Margulis. They constructed, for each d such that d $- 1$ is a prime power, a √ family of d-regular graphs $G$ with $\lambda(G) = 2 d - 1$ .
$4$ Applications of Expanders Perhaps the most obvious use for expanders is in communication networks. The fact that expanders are highly connected means that such a network is highly “fault tolerant,” in the sense that one cannot cut off part of the network with out destroying a large number of individual communication lines. Further desirable properties of such a network, such as a small diameter, follow from an analysis of random walks on expanders. A random walk of length m on a d-regular graph G is a path $v^{0}$ , $v^{1}$ , . . .
, v m , where each v i is a randomly chosen neighbor of v i $- {}^{1}$ . Random walks on graphs can be used to model many phenomena, and one of the questions one frequently asks about a random walk is how rapidly it “mixes.” That is, how large does m have to be before the probability that v $m = v$ is approximately the same for all vertices v? If we let p k (v) be the probability that v $k = v$, then it is not hard to show that $p^{k} + {}^{1} = d - 1Ap^{k}$ .
In other words, the transition matrix T of the random walk, which tells you how the distribution after $k + 1$ steps depends on the distribution after k steps, is $d - 1 times