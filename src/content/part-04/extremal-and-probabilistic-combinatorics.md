# Extremal and Probabilistic Combinatorics

$562IV$ . $19$ Extremal and Probabilistic

Combinatorics

Noga Alon and Michael Krivelevich

$1$

Combinatorics: An Introduction

$1$ . $1$

Examples

It is hard to give a rigorous definition of combinatorics. Instead, let us start with a few examples to illustrate what the area is about. (i) In the course of an examination of friendship between children some fifty years ago, the Hungarian sociologist Sandor Szalai observed that among any group of about twenty children he checked he could always find four children any two of whom were friends, or else four children no two of whom were friends.
Despite the temptation to try to draw sociological conclusions, Szalai realized that this might well be a mathematical phenomenon rather than a sociological one. Indeed, a brief discussion with the mathematicians Erdős, Turán, and Sós convinced him this was the case. If X is any set of size $18$ or more, and R is some symmetric relation [I.2](/part-01/language-and-grammar) on X, then there is always a subset S of X of size $4$ with the following property: either x Ry for any two distinct elements x, y of S, or x Ry for no two distinct elements x, y of S.
In this case, X is a set of children and R is the relation “is friends with.” This mathematical fact is a special case of Ramsey’s theorem, which was proved by the economist and mathematician Frank Plumpton Ramsey in 1930 . Ramsey’s theorem led to the development of Ramsey theory, a branch of extremal combinatorics, which will be discussed in the next section. (ii) In 1916 , Schur was studying fermat’s last theorem [V.10](/part-05/fermats-last-theorem). It is some times possible to prove that a Diophantine equation has no solutions by showing that it has no solutions mod p for some prime p.
However, Schur proved that for every integer k and every sufficiently large prime p, there are three integers a, b, and c, none of them congruent to $0$ mod p, such that a k + b k is congruent to c k . Although this is a result in number theory, it has a relatively simple and purely combinatorial proof, which is another example of the many applications of Ramsey theory. (iii) When studying the number of real zeros of random polynomials, littlewood [VI.79](/part-06/john-edensor-littlewood-18851977) and Offord investigated in 1943 the following problem. Let $z^{1}$ , $z^{2}$ , . . .
, z n be n not-necessarily-distinct complex numbers, IV. Branches of Mathematics each of modulus at least $1$ . One can form $2^{n}$ sums by taking some subset of these numbers and adding them together (with the convention that if one takes the empty set, then the sum is $0$ ). Littlewood and Offord wanted to know how many of these sums there could conceivably be such that the difference between any two of them had modulus less than $1$ . When $n = 2$ the answer is easily seen to be at most $2$ . There are four sums: $0$ , $z^{1}$ , $z^{2}$ , and $z^{1} + z^{2}$ .
You cannot choose both of the first two or both of the last two or you will have a difference of $z^{1}$ , which has modulus at least $1$ . Kleitman Katona proved that in general the and n . Notice that a simple construction maximum is $n/ {}^{2}$ ! proves that this maximum can be achieved. Indeed, let $z^{1} = z^{2} =$ · · · $= z^{n}$ and choose all sums of precisely n such sums and they $n/2$ ! of them. There are $n/ {}^{2}$ ! are all equal.
The proof that one cannot do better than this uses tools from another area of extremal combinatorics, where the basic objects studied are systems of finite sets. (iv) Consider a school in which there are m teachers $T^{1}$ , $T^{2}$ , . . . , T $m$ and $n$ classes $C^{1}$ , $C^{2}$ , . . . , C n . The teacher T i has to teach the class C j for a specified number p ij of lessons. What is the minimum possible number of periods in a complete timetable?
Let d i denote the total number of lessons the teacher T i has to teach, and let c j denote the total number of lessons the class C j has to be taught. Clearly, the number of periods required for a complete schedule is at least as big as any d $i$ or $c$ j , and thus at least as big as the maximum of all these numbers, which we denote by d. It turns out that this obvious lower bound of d is also an upper bound: it is always possible to fit all the lessons that need to be taught into d periods. This is a consequence of König’s theorem, which is a basic result in graph theory.
Suppose now that the situation is not so simple: for every teacher T i and every class C j there is some specified set of d periods in which the teaching has to take place. Can we always find a feasible timetable with these more complicated constraints? Recent breakthroughs from a subject known as list coloring of graphs imply that it is always possible. (v) Given a map with several countries represented, how many colors do you need if you want to color the countries with out giving any two adjacent countries the same color?
Here we assume that each country forms a connected region in the plane. Of course, at least four colors may be necessary: think of Belgium, France, Germany, and Luxembourg, out of which any two have a common border. The four-color theorem

IV.19.   Extremal and Probabilistic Combinatorics

[V.12](/part-05/the-four-color-theorem), proved by Appel and Haken in 1976, asserts that
you never need more than four colors. The study of
this problem led to numerous interesting questions and
results about graph coloring.
  (vi) Let S be an arbitrary subset of the two-dimen-
sional lattice Z2 . For any two finite subsets A, B ⊂ Z
we can think of the Cartesian product A . imes B as a sort
of “combinatorial rectangle.” This set has size |A| |B|
(where |X| denotes the size of a set X), and we can
define an obvious notion of the density d S (A, B) of S in     (as opposed to continuous ones) and their proper-
A . imes B by the formula d S (A, B) = |S ∩ (A . imes B)|/|A| |B|,
which measures what proportion of the elements of
A . imes B belong to S. For each k, let d(S, k) be the largest    tremendous growth during the last fifty years and
possible value of d S (A, B) if |A| = |B| = k. What can
we say about d(S, k) as k tends to infinity? One might
guess that almost any behavior is possible, but, remark-
ably, basic results in extremal graph theory (about the
so-called Turán numbers of complete bipartite graphs)
imply that d(S, k) must always tend to 0 or 1.
  (vii) Suppose that n basketball teams compete in a
tournament and any two teams play each other exactly
once. The organizers wish to award k prizes at the end
of the tournament. It would be embarrassing if there
ended up being a team that had not won a prize despite
beating all the teams that had won a prize. However,
unlikely though it might sound, it is quite possible that    be found in Graham, Grötschel, and Lovász (1995).
this will be the case whatever k teams they choose,
at least if n is large enough. To demonstrate this is
easy if one uses the probabilistic method, which is one
of the most powerful techniques in combinatorics. For
any fixed k, and all sufficiently large n, if the results
of all the games are chosen randomly (and uniformly
and independently), then there is a very high proba-
bility that for any k teams there is another team that
beats all of them. Probabilistic combinatorics, which is     from linear algebra, spectral techniques, and topolog-
one of the most active areas in modern combinatorics,
started with the realization that probabilistic reason-
ing often provides simple solutions to problems of this
type, problems that are often very hard to solve in any
other way.
  (viii) If G is a finite group of n elements, and H is a
subgroup of size k in G, then there are n/k left cosets
and n/k right cosets of H. Is there always a set of n/k
elements of G that contains a single representative of
each right coset and a single representative of each left    isfies certain requirements. Such problems are often
coset? Hall’s theorem, a basic result in graph theory,
implies that there is. In fact, if H is another subgroup     information theory, number theory, and geometry. This
of size k in G, then there is always a set of n/k elements   branch of combinatorics has developed spectacularly
of G that contains a single representative of each right     over the last few decades (see, for example, Bollobás
coset of H and a single representative of each left coset    (1978), Jukna (2001), and their many references).

563
of H . This may sound like a result in group theory, but
it is really a (simple) result in combinatorics.
1.2   Topics
The examples described above illustrate some of the
main themes of combinatorics. The subject, some times
also called discrete mathematics, is a branch of math-
ematics that focuses on the study of discrete objects
ties. Although combinatorics is probably as old as
the human ability to count, the field has experienced
has matured into a thriving area with its own set of
problems, approaches, and methodology.
The examples above suggest that combinatorics is a
basic mathematical discipline that plays a crucial role
in the development of many other mathematical areas.
In this essay we discuss some of the main aspects of
this modern field, focusing on extremal and probabilis-
tic combinatorics. (An account of combinatorial prob-
lems with a rather different flavor can be found in alge-
braic and enumerative combinatorics [IV.18](/part-04/enumerative-and-algebraic-combinatorics).) It is,
of course, impossible to cover the area fully in such
a short article. A detailed account of the subject can
Our main intention is to give a glimpse of the topics,
methods, and applications illustrated by representa-
tive examples. The topics we discuss include extremal
graph theory, Ramsey theory, the extremal theory of
set systems, combinatorial number theory, combinato-
rial geometry, random graphs, and probabilistic com-
binatorics. The methods applied in the area include
combinatorial techniques, probabilistic methods, tools
ical methods. We also discuss the algorithmic aspects
and some of the many fascinating open problems in
the area.
2   Extremal Combinatorics
Extremal combinatorics deals with the problem of
determining or estimating the maximum or minimum
possible size of a collection of finite objects that sat-
related to other areas, including computer science,

564

2.1     Extremal Graph Theory
A graph [III.34] is one of the very basic combinatorial
structures. It consists of a set of points, called vertices,
some of which are linked by edges. One can represent a
graph visually by drawing the vertices as points in the
plane and the edges as lines (or curves). However, for-
mally a graph is more abstract: it is just a set together
with a collection of pairs taken from the set. More pre-
cisely, it consists of a set V , called the vertex set, and a
set E, called the edge set ; the elements of E (the edges)
are sets of the form {u, v}, where u and v are distinct
elements of V . If {u, v} is an edge, we say that u and
v are adjacent. The degree d(v) of a vertex v is the
number of vertices adjacent to it.
   Here are a number of simple definitions associated
with graphs that have emerged as important. A path
of length k from u to v in G is a sequence of distinct
vertices u = v0 , v1 , . . . , vk = v, where vi and vi+1 are
adjacent for all i < k. If v0 = vk (but all vertices vi for
i < k are distinct), this is called a cycle of length k, and
is usually denoted by Ck . A graph G is connected if for
any two vertices u, v of G there is a path from u to v. A
complete graph Kr is a graph with r vertices such that
any two of them are adjacent. A subgraph of a graph G
is a graph that contains some of the vertices of G and
some of its edges. A clique in G is a set of vertices in G
such that any two of them are adjacent. The maximum
size of a clique in G is called the clique number of G.
Similarly, an independent set in G is a set of vertices in
G with no two of them adjacent, and the independence
number of G is the maximum size of an independent
set in it.
   Extremal graph theory deals with quantitative con-
nections between various parameters of a graph, such
as its numbers of vertices and edges, its clique num-
ber, or its independence number. In many cases a cer-
tain optimization problem involving these parameters
has to be solved (for example, determining how big
one parameter can be if another one is at most some
given size), and its optimal solutions are the extremal
graphs for this problem. Many important optimization
problems that do not explicitly mention graphs can be
reformulated, using the definitions above, as problems
about extremal graphs.
2.1.1    Graph Coloring
Let us return to the map-coloring example discussed in
the introduction. To translate the problem into math-
ematics, we can describe the map-coloring problem in

IV. Branches of Mathematics
terms of a graph G, as follows. The vertices of G cor-
respond to the countries on the map, and two vertices
are connected by an edge in G if and only if the cor-
responding countries share a common border. It is not
hard to show that one can draw such a graph in such
a way that no two edges cross each other: such graphs
are called planar. Conversely, any planar graph arises
in this way. Therefore, our problem is equivalent to the
following: if you want to color the vertices of a planar
graph so that no two adjacent vertices receive the same
color, then how many colors do you need? (One can
make the problem yet more mathematical by removing
the nonmathematical notion of color. For example, one
can assign to each vertex a positive integer instead.)
Such a coloring is called proper. In this language, the
four-color theorem states that every planar graph can
be properly colored with four colors.
Here is another example of a graph-coloring problem.
Suppose we must schedule meetings of several parlia-
ment committees. We do not wish to have two com-
mittees meeting at the same time if some parliament
member belongs to both, so how many sessions do we
need?
Again we can model this situation by using a graph
G. The vertices of G represent the committees, with two
vertices adjacent if and only if the corresponding com-
mittees share a member. A schedule is a function f that
assigns to each committee one of k time slots. More
mathematically, we can think of it as just a function
from V to the set {1, 2, . . . , k}. Let us call a schedule
valid if no two adjacent vertices are assigned the same
number. This corresponds to no two committees being
assigned the same time slot if they share a member. The
question then becomes, “What is the minimal value of
k for which a valid schedule exists?”
The answer is called the chromatic number of the
graph G, denoted χ(G): it is the smallest number of
colors in any proper coloring of G. Notice that a color-
ing of a graph G is proper if and only if for each color
the set of vertices of that color is independent. There-
fore, χ(G) can also be defined as the smallest number
of independent sets into which it is possible to par-
tition the vertices of G. A graph is called k-colorable
if it admits a k-coloring, or, equivalently, if it can be
partitioned into k independent sets. Thus, χ(G) is the
minimum k for which G is k-colorable.
Two simple examples are in order. If G is a complete
graph Kn on n vertices, then obviously in any coloring
of G all vertices get distinct colors, and thus n colors
are necessary. Of course, n colors are also sufficient,

$IV$ . $19$ .

Extremal and Probabilistic Combinatorics

so $χ(K^{n}) = n.$ If $G$ is a cycle $C^{2n} + {}^{1}$ on $2n + 1$ vertices, then easy parity arguments show that at least three colors are needed, and three colors are enough: color the vertices along the cycle alternately by colors $1$ and $2$ , and then color the last vertex by color $3$ . Thus, $χ(C^{2n} + {}^{1}) = 3$ . It is not hard to prove that G is $2$ - colorable if and only if it does not contain a cycle of odd length. Graphs that are $2$ - colorable are usually called bipartite, since they split into two parts, with all the edges going from one part to the other.
The easy character ization ends here, and no simple criterion equivalent to k-colorability is available for k $\ge 3$ . This is related to the fact that for each fixed $k \ge 3$ the computational problem of deciding whether a given graph is k-colorable is NP-hard, a notion discussed in computational complexity [IV.20](/part-04/computational-complexity) . Coloring is one of the most fundamental notions of graph theory, as a huge array of problems in this field and in related areas like computer science and operations research can be formulated in terms of graph coloring.
Finding an optimal coloring of a graph is known to be a very hard task, both theoretically and practically. There are two simple yet fundamental lower bounds on the chromatic number. First, as every color class in a proper coloring of a graph G forms an independent set, it cannot be bigger than the independence number of G, which is denoted by α (G). Therefore, at least $|V(G)|/α($ G ) colors are necessary. Secondly, if G contains a clique of size k, then k colors are needed to color that clique alone, and thus χ (G) $\ge$ k.
This implies that χ (G) $\ge$ ω (G), where ω (G) is the clique number of G. What about upper bounds on the chromatic number? One of the simplest approaches to coloring a graph is to do it greedily: put the vertices in some order and color them one by one, assigning to each one the smallest positive integer that has not already been assigned to one of its neighbors. While the greedy algorithm can some times be very inefficient (for example, it can color bipartite graphs in an unbounded number of colors, even though two colors are sufficient), it often works quite well.
Observe that when applying the greedy algorithm, a color given to a vertex v is at most one more than the number of the neighbors of v preceding it in the chosen order, and is thus at most d (v) $+ 1$ , where d (v) is the degree of v in G. It follows that if $\Delta$ (G) is the maximum degree of G, then the greedy algorithm uses at most $\Delta(G) + 1$ colors. Therefore $χ(G) \le \Delta(G) + 1$ . This bound is tight for complete graphs and odd cycles, $565$ and, as shown by Brooks in 1941 , those are the only cases:
if G is a graph of maximum degree $\Delta,$ then $χ(G) \le \Delta$ unless $G$ contains a clique $K\Delta + 1$ , or $\Delta = 2$ and G contains an odd cycle. It is also possible to color the edges of a graph, rather than the vertices. In this case a proper coloring is defined to be one where no two edges that meet at a vertex are given the same color. The chromatic index of G, denoted by χ (G), is the minimum k for which G admits a proper edge-coloring with k colors. For example, if G is the complete graph $K^{2n}$ , then $χ (G) = 2n - 1$ .
This turns out to be equivalent to the fact that it is possible to organize a round-robin tournament with $2n$ teams and fit it into $2n - 1$ rounds: just ask the manager of a soccer league. It is also not hard to show that $χ (K^{2n} - {}^{1}) = 2n - 1$ . Since in any proper edge-coloring of G all edges of G that are incident to a vertex v get distinct colors, the chromatic index is obviously at least as big as the maximum degree.
Equality holds for bipartite graphs, as proved by König in 1931 , which implies the existence of a complete timetable using d periods in the problem of teachers and classes discussed in the introduction. Remarkably, this trivial lower bound of χ (G) $\ge \Delta$ (G) is very close to the true behavior of χ (G). A fundamental theorem of Vizing from 1964 states that χ (G) is always equal either to the maximum degree $\Delta$ (G) or to $\Delta(G) + 1$ . Thus, the chromatic index of G is much easier to approximate than its chromatic number. $2$ . $1$ .
$2$ Excluded Subgraphs If a graph G has n vertices and contains no triangle (that is, three vertices all joined to each other) then how many edges can it contain? If n is even, then you can split the vertex set into two equal parts A and B of size n $/2$ and join every vertex in A to every vertex in B. The resulting graph G contains no triangles and has $n^{2}/4$ edges. More over, adding another edge will automatically create a triangle (in fact, several triangles). But is this the densest possible triangle-free graph? A hundred years ago the answer was shown to be yes by Mantel.
(A similar theorem holds when n is odd, but now $A$ and $B$ must have nearly equal sizes $(n + 1)/2$ and $(n - 1)/2$ .) Let us look at a more general problem, where the role of the triangle is played by an arbitrary graph. More precisely, let H be any graph, with m vertices, say, and when n $\ge$ m let us define ex (n , H) to be the maximum possible number of edges in a graph with n vertices

566

that does not contain H as a subgraph. (The notation
“ex” stands for “exclude.”) The function ex(n, H) is usu-     ent fields, including probability theory, number theory,
ally called the Turán number of H, for reasons that will
become clear, and finding good approximations for it
has been a central problem in extremal graph theory.
   What kind of examples of graphs that do not contain
H can we think of? One observation that gets us started
is that if H has chromatic number r , then it cannot be
a subgraph of a graph G with chromatic number less
than r . (Why not? Because a proper (r − 1)-coloring of
G provides us with a proper (r − 1)-coloring of any sub-
graph of G.) So a promising approach is to look for a
graph G with n vertices, chromatic number r − 1, and
as many edges as possible. This is easy to find. Our con-
str a int is that the vertices can be partitioned into r − 1    Hall’s theorem, which provides a necessary and suffi-
independent sets. Once we have done that, we may as
well include all edges between those sets. The result is
a complete (r − 1)-partite graph. A routine calculation
shows that in order to maximize the number of edges,
one should partition into sets that have sizes as nearly
equal as possible. (For example, if n = 10 and r = 4,
then we would partition into three sets of sizes 3, 3,
and 4.)
   The graph that satisfies this condition is called the
Turán graph Tr −1 (n) and the number of edges it con-
tains is denoted by tr −1 (n). We have just argued that
ex(n, H) ⩾ tr −1 (n), which  can be shown to be at least    orem, proved in 1935, asserts that, remarkably, this
as big as (1 − 1/(r − 1)) n  2 .
   Turán’s contribution to this area was to give an
exact solution, in 1941, for the most important case,
when H is the complete graph Kr on r vertices. He
proved that ex(n, Kr ) is not just at least tr −1 (n), but    a matching that includes every vertex in A (but leaves
is actually equal to tr −1 (n). More over, the only Kr -free   some vertices in B unmatched).
graph with n vertices and ex(n, Kr ) edges is the Turán
graph Tr −1 (n). Turán’s paper is generally considered
the starting point of extremal graph theory.
   Later, Erdős, Stone, and Simonovits extended Turán’s
theorem by proving that the above simple lower bound
for ex(n, H) is asymptotically tight for any fixed H
with chromatic number at least 3. That is, if r is the
chromatic number of H, then the ratio of ex(n, H) to
tr −1 (n) tends to 1 as n tends to infinity.
   Thus, the function ex(n, H) is well-understood for all     alent to Hall’s theorem: let S be the union of the Si and
nonbipartite graphs. Bipartite graphs are rather differ-
ent, because their Turán numbers are much smaller: if
H is bipartite, then ex(n, H)/n2 tends to zero. Deter-
mining the asymptotics of ex(n, H) in this case remains
a challenging open problem with many unsettled ques-
tions. Indeed, the full story is unknown even for the
very simple case when H is a cycle. Partial results

IV. Branches of Mathematics
obtained so far use a variety of techniques from differ-
and algebraic geometry.
2.1.3   Matchings and Cycles
Let G be a graph. A matching in G is a collection of
edges in G of which no two share a vertex. A matching
M in G is called perfect if every vertex belongs to one
of the edges in M. (The idea is that the edges determine
a “match” for each vertex: the match for x is the vertex
y for which xy is an edge of M.) Of course, for G to
have a perfect matching it must have an even number
of vertices.
One of the best-known theorems in graph theory is
cient condition for the existence of a perfect matching
in a bipartite graph. What kind of condition can this be?
It is very easy to write down a trivial necessary condi-
tion, as follows. Let G be a bipartite graph with vertex
sets A and B of equal size. (If they do not have equal
size, then clearly there is no perfect matching.) Given
any subset S of A, let N(S) denote the set of all vertices
in B that are joined to at least one vertex in S. If there is
to be a matching, then it must be possible to assign to
each vertex in S a distinct “match,” so obviously N(S)
must have at least as many elements as S. Hall’s the-
obvious necessary condition is also sufficient. That is,
if N(S) is always at least as big as S, then there will be a
perfect matching. More generally, if A is smaller than B,
then the same condition guarantees that one can find
There is a useful reformulation of Hall’s theorem
in terms of set systems. Let S1 , S2 , . . . , Sn be a collec-
tion of sets, and suppose that we would like to find a
system of distinct representatives: that is, a sequence
x1 , x2 , . . . , xn such that xi is an element of Si and no
two of the xi are the same. Obviously this cannot be
done if the union of some k of the sets Si has size less
than k. Again, this obvious necessary condition is suffi-
cient. It is not hard to show that this assertion is equiv-
define a bipartite graph with vertex sets {1, 2, . . . , n}
and S, joining i to x if and only if x ∈ Si . Then a match-
ing that includes all of the set {1, 2, . . . , n} picks out a
system of distinct representatives: xi is the element of
S that is matched with i.
Hall’s theorem can be applied to solve the problem
of finding a system of representatives for the right and

$IV$ . $19$ .

Extremal and Probabilistic Combinatorics

left cosets of a subgroup  H, mentioned in section $1$ . $1$ . Define a bipartite graph F , whose two sides (of size n  /  k each) are the left and right cosets of H. A left coset $g^{1}$ H is connected by an edge of F to a right coset H$g^{2}$ if they share a common element. It is not difficult to show that F satisfies the Hall condition, and hence it has a perfect matching M. Choosing for each edge (g i H, Hg j) of M a common element of g i H and Hg j , we obtain the required family of representatives.
There is also a necessary and sufficient condition for the existence of a perfect matching in a general (not necessarily - bipartite) graph G. This is a theorem of Tutte, which we shall not state here. Recall that C k denotes a cycle of length k. A cycle is a very basic graph structure, and, as one might expect, there are many extremal results concerning cycles. Suppose that G is a connected graph with no cycles. If you pick a vertex and look at its neighbors and then the neighbors of its neighbors, and so on, you will see that it has a tree-like structure.
Indeed, such graphs are called trees. An easy exercise shows that any tree with n vertices has exactly $n - 1$ edges. It follows that every graph G on n vertices with at least n edges has a cycle. If you want to guarantee that this cycle has certain extra properties, then you may need more edges. For example, the theorem of Mantel mentioned earlier implies that a graph G with n vertices and more than $n^{2}/4$ edges contains a triangle $C^{3} = K^{3}$ . One can also

$1$

prove that a graph $G = (V$ ,  E) with $|E| > {}^{2}k(|V| - 1)$ has a cycle of length longer than k (and this is in fact a sharp result). A Hamilton cycle in a graph G is a cycle that visits every vertex of G. This term originated in a game, invented by hamilton [VI.37](/part-06/william-rowan-hamilton-18051865) in 1857 , the objective of which was to complete a Hamilton cycle in the graph of the dodecahedron. A graph containing a Hamilton cycle is called Hamiltonian.
This concept is strongly related to the well-known traveling salesman problem [VII.5](/part-07/the-mathematics-of-algorithm-design) : you are given a graph with positive weights assigned to the edges, and you must find a Hamilton cycle for which the sum of the weights of its edges is minimized. There are many sufficient criteria for a graph to be Hamiltonian, quite a few of which are based on the sequence of degrees. For example, Dirac proved in 1952 that $a$ graph on $n \ge 3$ vertices all of whose degrees are at least $n/2$ is Hamiltonian.

$2$ . $2$

Ramsey Theory

Ramsey theory is a systematic study of the following general phenomenon. Surprisingly often, a large struc-

$567$

ture of a certain kind has to contain a fairly large highly organized substructure, even if the structure itself is completely arbitrary and apparently chaotic. As succinctly put by the mathematician T. S. Motzkin, “Complete disorder is impossible.” One might expect that the simple and very general form of this paradigm ensures that it has many diverse manifestations in different mathematical areas, and this is indeed the case.
(One should, however, bear in mind that some natural statements of this kind are false for nonobvious reasons .) A very simple statement, which can be regarded as a basic prototype for what follows, is the pigeonhole principle. This states that if a set X of n objects is colored with s colors, then there must be a subset of X of size at least n  /  s that uses just one color. Such a subset is called monochromatic. The situation becomes more interesting if the set X has some additional structure. It then becomes natural to ask for a monochromatic subset that keeps some of the structure of X.
However, it also becomes much less obvious whether such a subset exists. Ramsey theory consists of problems and theorems of this general kind. Although several Ramsey-type theorems had appeared before, Ramsey theory is traditionally regarded as having started with Ramsey’s theorem, proved in 1930 . Ramsey took as his set X the set of all the edges in a complete graph, and the monochromatic subset he obtained consisted of all the edges of some complete subgraph. A precise statement of his theorem is as follows. Let $k$ and $l$ be integers greater than $1$ .
Then there exists an integer n such that, however you color the edges of the complete graph with n vertices, using the two colors red and blue, there will either be k vertices such that all edges between them are red or l vertices such that all edges between them are blue. That is, a sufficiently large complete graph colored with two colors contains a largish complete subgraph that is monochromatic. Let R (k , l) denote the minimum number n with this property. In this language, the observation of Szalai, mentioned in the introduction, is that $R(4$ , $4) \le 20$ (in fact, $R(4$ , $4) = 18)$ .
Actually, Ramsey’s theorem was more general, in that he allowed any number of colors, and the objects colored could be rtuples of elements rather than just pairs, as one has when coloring graphs. The exact computation of small Ramsey numbers turns out to be a notoriously difficult task: even the value of $R(5$ , 5) is unknown at present. The second cornerstone of Ramsey theory was laid by Erdős and Szekeres, who in 1935 wrote a paper

568

containing several important Ramsey-type results.
In particular, they proved the recursion R(k, l) ⩽
R(k − 1, l) + R(k, l − 1). Combined with the easy bound-
ary conditions R(2, l) = l, R(k, 2) =  k, the recursion
leads to the estimate R(k, l) ⩽ k−1 . In particular, for
the so-called diagonal case k = l we obtain R(k, k) < 4 k .
Remarkably, no improvement in the exponent of the
latter estimate has been found so far. That is, nobody
has found an upper bound of the form C k for some
C < 4. The best lower bound known, which we shall dis-
cuss in section 3.2, is roughly R(k, k) ⩾ 2 k/2 , so there
is a rather substantial gap.
   Another Ramsey-type statement, proved by Erdős
and Szekeres, is of a geometric nature. They showed
that for every n ⩾ 3 there exists a positive integer N
such that, given any configuration of N points in the
plane in general position (i.e., no three of them are on a
line), there are n that form a convex n-gon. (It is in struc-
tive to prove that if n = 4 then N can be taken to be 5.)
There are several proofs of this theorem, some using
the general Ramsey theorem. It is conjectured that the
smallest value of N that will do in order to ensure a
convex n-gon is 2 n−2 + 1.
  The classic Erdős–Szekeres paper also contains the
following Ramsey-type result: any sequence of n2 + 1
distinct numbers contains a monotone (increasing or
decreasing) subsequence of length n+1.
  This provides a quick lower bound of n for a
well-known problem of Ulam, asking for the typical
length of a longest increasing subsequence of a ran-
dom sequence of length n. A detailed description of
the distribution of this length has recently been given
by Baik, Deift, and Johansson.
   In 1927 van der Waerden proved what became known
as van der Waerden’s theorem: for all positive integers
k and r there exists an integer W such that for every
coloring of the set of integers {1, 2, . . . , W } using r col-   problem in this area is any problem where the aim is to
ors, one of the colors contains an arithmetic progres-
sion of length k. The minimum W for which this is true
is denoted by W (k, r ). Van der Waerden’s bounds for
W (k, r ) are enormous: they grow like an Ackermann-
type function. A new proof of his theorem was found
by Shelah in 1987, and yet another proof was given
by Gowers in 2000, while he was studying the (much
deeper) “density version” of the theorem, which will
be described in section 2.4. These recent proofs pro-
vided improved upper bounds for W (k, r ), but the best-
known lower bound for this number, which is only
exponential in k for each fixed r , is much smaller.

IV. Branches of Mathematics
Even before van der Waerden, Schur proved in 1916
that for any positive integer r there exists an inte-
ger S(r ) such that for every r -coloring of {1, . . . , S(r )}
one of the colors contains a solution of the equation
k+l−2
x + y = z. The proof can be derived rather easily from
the general Ramsey theorem. Schur applied this state-
ment to prove the following result, mentioned in sec-
tion 1.1: for every k and all sufficiently large primes
p, the equation ak + bk = c k has a nontrivial solution
in the integers modulo p. To prove this result, assume
that p ⩾ S(k) and consider the field [I.3 §2.2](/part-01/fundamental-definitions) Zp of
integers mod p. The nonzero elements of Zp form a
group [I.3 §2.1](/part-01/fundamental-definitions) under multiplication. Let H be the sub-
group of this group consisting of all kth powers: that is,
H = {x k : x ∈ Z∗ p }. It is not hard to show that the index
r of H is the highest common factor of k and p − 1, and
in particular is at most k. The partition of Z∗   p into the
cosets of H can be thought of as an r -coloring of Z∗     p . By
Schur’s theorem there exist x, y, z ∈ {1, . . . , p − 1} that
all have the same color—that is, they all belong to the
same coset of H. In other words, there exists a residue
d ∈ Z∗
p such that x = da , y = db , z = dc , and
k
k + db k = dc k modulo p. The desired result follows
da
if we multiply both sides by d−1 .
Many additional Ramsey-type results can be found in
Graham, Rothschild, and Spencer (1990) or in Graham,
Grötschel, and Lovász (1995, chapter 25).
. qrt{2}.3   Extremal Theory of Set Systems
Graphs are one of the fundamental structures stud-
ied by combinatorialists, but there are others too. An
important branch of the subject is the study of set sys-
tems. Most often, these are simply collections of sub-
sets of some n-element set. For example, the collection
of all subsets of the set {1, 2, . . . , n} of size at most
n/3 is a good example of a set system. An extremal
determine, or estimate, the maximum number of sets
there can be in a set system that satisfies certain con-
ditions. For example, one of the first results in the area
was proved by Sperner in 1928. He looked at the follow-
ing question: how large a collection of subsets can one
choose from an n-element set in such a way that no set
from the collection is a subset of any other? A simple
example of a set system satisfying this condition is the
collection of all sets of size r , for some r . From this it
immediately follows that we can obtain a collection     as
n
large as the largest
  binomial
     coefficient,    which is  n/2
n
if n is even and (n+1)/2    if n is odd.

IV.19.   Extremal and Probabilistic Combinatorics

   Sperner showed that this is indeed the maximum pos-
sible size of such a collection. This result supplies a
quick solution to the real analogue of the problem of
Littlewood and Offord described in section 1.1. Sup-
pose that x1 , x2 , . . . , xn are n not-necessarily-distinct    i ⩽ n, you can take the family of all subsets whose
real numbers, each of modulus at least 1. A first obser-
vation is that we may assume that all the xi are posi-
tive, since if we replace a negative xi by −xi (which is
positive), then we end up with exactly the same set of
sums, but shifted by −xi . (To see this, compare a sum
that used to involve xi with the corresponding sum that
does not involve −xi , and vice versa.) But now, if A is a
proper subset of B, then some xi belongs to B and not
to A, so

Therefore, the total number of subset sums you can
find
     with

    n
   n/2!   , by Sperner’s theorem.
   A set system is called an intersecting family if any two
sets in the system intersect. Since a set and its comple-
ment cannot both belong to an intersecting family of
subsets of {1, 2, . . . , n}, we see immediately that such a     a sophisticated array of techniques has been devel-
family can have size at most 2 n−1 . More over, this bound
is achieved by, for example, the collection of all sets
that contain the element 1. But what happens if we fix
a k and assume in addition that all our sets have size k?
We may assume that n ⩾ 2 k, as otherwise the solution
is trivial.
   
is n−1
     k−1 . Here is a beautiful proof discovered later by
Katona. Suppose you arrange the elements randomly
around a circle. Then there are n ways of choosing k
elements that are consecutive in this arrangement, and
it is quite easy to convince your self that at most k of
these can intersect (if n ⩾ 2 k). So out of these n sets of
size k, only k of them can belong to any given intersect-
ing family. Now it is also easy to show that every set has
an equal chance of being one of these n sets, and this
proves (by a simple double-counting argument) that the
largest possible proportion of sets in the family is k/n.      then the sumset A + B is defined to be {a + b : a ∈
Therefore, thefamily    itself has size at most (k/n) k ,
which equals k−1 . The original proof of Erdős, Ko,
and Rado is more complicated than this, but it is impor-
tant because it introduced a technique known as com-
pression, which was used to solve many other extremal
problems.
   Let n > 2 k be two positive integers. Suppose that you
wish to color all subsets of the set {1, 2, . . . , n} of size   is at least the minimum of p and |A| + |B| − 1. (Equality
k in such a way that any two sets with the same color
intersect each other. What is the smallest number of

569
colors you can use? It is not difficult to see that n−2 k+2
colors suffice. Indeed, one color class can be the family
of all subsets of {1, 2, . . . , 2 k − 1}, which is clearly an
intersecting family. And then, for each i such that 2 k ⩽
largest element is i. There are n − 2 k + 1 such families,
and any set of size k belongs either to one of them or to
the first family. Therefore, n−2 k+2 colors are enough.
Kneser conjectured in 1955 that this bound was tight:
in other words, that if you have fewer than n − 2 k + 2
colors then you will have to give the same color to
some pair of disjoint sets. This conjecture was proved
by Lovász in 1978. His proof is topological, and uses

xi −      xi ⩾ xi ⩾ 1.                    been found since, but they are all based on the topolog-
i∈B
topological arguments have become an important part
     any two differing by less than 1 is at most
2.4   Combinatorial Number Theory
Number theory is one of the oldest branches of math-
ematics. At its core are problems about integers, but
oped to deal with those problems, and these techniques
have often themselves been the basis for further study
(see, for example, algebraic numbers [IV.1](/part-04/number-theory), analytic
number theory [IV.2](/part-04/number-theory), and arithmetic geometry
[IV.5](/part-04/arithmetic-geometry)). However, some problems in number theory have
 Erdős, Ko, and Rado proved that the maximum
problems are extremal problems with a combinatorial
flavor, while others are classical problems in number
theory where the existence of a combinatorial solution
has been quite surprising. We describe below a few
examples. Many more can be found in chapter 20 of
Graham, Grötschel, and Lovász (1995), in Nathanson
(1996), and in Tao and Vu (2006).
A simple but important notion in the area is that of a
sumset. If A and B are two sets of integers, or more gen-
erally are two subsets of an abelian group [I.3 §2.1](/part-01/fundamental-definitions),
n
A, b ∈ B}. For instance, if A = {1, 3} and B = {5, 6, 12},
n−1
then A + B = {6, 7, 8, 9, 13, 15}. There are many results
relating the size and structure of A + B to those of A
and B. For example, the Cauchy–Davenport theorem,
which has numerous applications in additive number
theory, is the statement that if p is a prime, and A, B
are two nonempty subsets of Zp , then the size of A + B
occurs if A and B are arithmetic progressions with the
same common difference.) cauchy [VI.29](/part-06/augustin-louis-cauchy-17891857) proved this

570

theorem in 1813, and applied it to give a new proof of a    where p is a point in P ,  is a line in L, and the point p
lemma that lagrange [VI.22](/part-06/joseph-louis-lagrange-17361813) had proved as part of his
well-known 1770 paper that shows that every positive
integer is a sum of four squares. Davenport formulated
the theorem as a discrete analogue of a related conjec-     again it has a strong flavor of extremal combinatorics.
ture of Khinchin about densities of sums of sequences
of integers. The proofs given by Cauchy and by Daven-
port are combinatorial, but there is also a more recent
algebraic proof, based on some properties of roots of
polynomials. The advantage of the latter is that it pro-    merédi and Trotter determined the asymptotic behav-
vides many variants that do not seem to follow from
the combinatorial approach. For example, let us define
A⊕B to be the set of all a+b such that a ∈ A, b ∈ B, and    positive constants c1 , c2 such that, for all m, n,
a = b. Then the smallest possible size of A⊕B, given the
sizes of A and B, is the minimum of p and |A| + |B| − 2.
Further extensions can be found in Nathanson (1996)
and in Tao and Vu (2006).
   The theorem of van der Waerden mentioned in sec-
tion 2.2 implies that, however you color the positive
integers with some finite number r of colors, there
must be some color that contains arithmetic progres-
sions of every length. Erdős and Turán conjectured in
1936 that this always holds for the “most popular”
color class. More precisely, they conjectured that for
any positive integer k and for any real number  > 0,
there is a positive integer n0 such that if n > n0 ,
any set of at least n positive integers between 1 and
n contains a k-term arithmetic progression. (Setting
 = r −1 one can easily deduce van der Waerden’s theo-
rem from this.) After several partial results, this con-    necting the numbers of vertices, edges, and regions in
jecture was proved by Szemerédi in 1975. His deep
proof is combinatorial, and applies techniques from
Ramsey theory and extremal graph theory. Furs ten-
berg gave another proof in 1977, based on techniques
of ergodic theory [V.9](/part-05/ergodic-theorems). In 2000 Gowers gave a new
proof, combining combinatorial arguments with tools
from analytic number theory. This proof supplied a
much better quantitative estimate. A related very recent    lines in L, and yet should be large if there are many
spectacular result of Green and Tao asserts that there
are arbitrarily long arithmetic progressions of prime
numbers. Their proof combines number-theoretic tech-
niques with the ergodic theory approach. Erdős conjec-     how many pairs (x, y) of these points can there be with
tured that any infinite sequence ni for which the sum

  i (1/ni ) diverges contains arbitrarily long arithmetic   that the two problems are related: the number of such
progressions. This conjecture would imply the theorem
of Green and Tao.
2.5   Discrete Geometry
Let P be a set of points and let L be a set of lines in     lute constant c, and the best known lower bound, which
the plane. Let us define an incidence to be a pair (p, ),   is only n1+c / log log n for some constant c > 0.

IV. Branches of Mathematics
lies on the line . Suppose that P contains m distinct
points and L contains n distinct lines. How many inci-
dences can there be? This is a geometrical problem, but
As such, it is typical of the area known as discrete (or
combinatorial) geometry.
Let us write I(m, n) for the maximum number of inci-
dences there can be between m points and n lines. Sze-
ior of this quantity, up to a constant factor, for all
possible values of m and n. There are two absolute
c1 (m2/3 n2/3 + m + n) ⩽ I(m, n)
⩽ c2 (m2/3 n2/3 + m + n).
If m > n2 or n > m2 then one can establish the lower
bound by taking all m points on a single line, or all n
lines through a single point, respectively. In the harder
cases when m and n are closer to each other, one can
√
prove it by letting P contain all the points of a   m! by
. qrt{m}! grid, and by taking the n most “popular” lines:
that is, the n lines that contain the most points of
P . Establishing the upper bound is more difficult. The
most elegant proof of it is due to Székely, and is based
on the fact that, however you draw a graph with m ver-
tices and more than 4 m edges, you must have many
pairs of edges that cross each other. (This is a rather
simple consequence of the famous Euler formula con-
any drawing of a planar graph.) To bound the number of
incidences between a set of points P and a set of lines L
in the plane, one considers the graph whose vertices are
the points P , and whose edges are all segments between
consecutive points along a line in L. The desired bound
is obtained by observing that the number of crossings
in this graph does not exceed the number of pairs of
incidences.
Similar ideas can be used to give a partial answer to
the following question: if you take n points in the plane,
the distance from x to y equal to 1? It is not surprising
pairs is the number of incidences between the given n
points and the n unit circles that are centered at these
points. Here, however, there is a large gap between the
best known upper bound, which is cn4/3 for some abso-

IV.19.   Extremal and Probabilistic Combinatorics

   A fundamental theorem of Helly asserts that if you
have a finite family F of at least d + 1 convex sets in
Rd , and if any d + 1 of them have a point in common,
then all sets in the family have a common point. Now
let us start with a weaker assumption: given any p of
the sets, some d+1 of those p sets have a point in com-
mon. (Here p is some integer greater than d + 1.) Can
one then find a set X of at most C points such that each
set in F contains a point in X, with C a constant that
depends on p but not on the number of convex sets in
the family? This question was raised by Hadwiger and
Debrunner in 1957 and solved by Kleitman and Alon
in 1992. The proof combines a “fractional version” of
Helly’s theorem with the duality of linear program-
ming [III.84](/part-03/the-simplex-algorithm) and various additional geometric results.
Unfortunately, it gives a very poor estimate for C: even     tion. An early application of this argument was found
in two dimensions and with p = 4 it is not known what
the best possible value of C is.
   This is just a small sample of problems and results
in discrete geometry. Such results have been applied
extensively in computational geometry and in com-
binatorial optimization in recent decades. Two good
books on the subject are Pach and Agarwal (1995) and
Matoušek (2002).
2.6   Tools
Many of the basic results in extremal combinatorics
were obtained mainly by ingenuity and detailed rea-
soning. However, the subject has grown out of this
early stage: several deep tools have been developed
that have been essential to much of the recent progress
in the area. In this subsection, we include a very brief     space in such a way that the augmented set of poly-
description of some of these tools.
   Szemerédi’s regularity lemma is a result in graph
theory that has numerous applications in various areas,
including combinatorial number theory, computational
complexity, and, mainly, extremal graph theory. The
precise statement of the lemma, which can be found,
for example, in Bollobás (1978), is some what technical.
The rough statement is that the vertex set of any large
graph can be partitioned into a constant number of
pieces of nearly equal size, so that the bipartite graphs    v, where au, v = 1 if u and v are joined by an edge,
between most pairs of pieces behave like random bipar-
tite graphs. The strength of this lemma is that it applies   therefore, by standard results in linear algebra, it has
to any graph, providing a rough approximation of its
structure that enables one to extract a lot of informa-
tion about it. A typical application is that a graph with    ship between the eigenvalues of the adjacency matrix
“few” triangles can be “well-approximated” by a graph
with no triangles. More precisely, for any  > 0 there

571
exists δ > 0 such that if G is a graph with n vertices and
at most δn3 triangles, then one can remove at most n2
edges from G and make it triangle free. This innocent-
looking statement turns out to imply the case k = 3 of
Szemerédi’s theorem that was mentioned earlier.
Tools from linear and multilinear algebra play an
essential role in extremal combinatorics. The most
fruitful technique of this kind, which is possibly also
the simplest, is the so-called dimension argument. In its
simplest form, the method can be described as follows.
In order to bound the cardinality of a discrete structure
A, one maps its elements to distinct vectors in a vec-
tor space [I.3 §2.3](/part-01/fundamental-definitions), and proves that those vectors are
linearly independent. It then follows that the size of A
is at most the dimension of the vector space in ques-
by Larman, Rogers, and Seidel in 1977. They wanted to
know how many points it was possible to find in Rn that
determine at most two distinct differences. An example
of such a system is the set of all points whose coordin-
ates consist of n−2 0 s and two 1 s. Notice, however, that
these points all lie in the hyperplane of points whose
coordinates add up to 2. So this actually provides us
with an example in Rn−1 . Therefore, we have a simple
lower bound of n(n + 1)/2. Larman, Rogers, and Seidel
matched this with an upper bound of (n + 1)(n + 4)/2.
They did this by associating with each point of such a
set a polynomial in n variables, and by showing that
these polynomials are linearly independent and all lie
in a space of dimension (n + 1)(n + 4)/2. This has been
improved by Blokhuis to (n+1)(n+2)/2. He did this by
finding n + 1 further polynomials that lie in the same
nomials is still linearly independent. More applications
of the dimension argument can be found in Graham,
Grötschel, and Lovász (1995, chapter 31).
Spectral techniques, that is, an analysis of eigen-
vectors and eigenvalues [I.3 §4.3](/part-01/fundamental-definitions), have been used
extensively in graph theory. The link comes through
the notion of an adjacency matrix of a graph G. This
is defined to be the matrix A with entries au, v for
each pair of (not-necessarily-distinct) vertices u and
and au, v = 0 otherwise. This matrix is symmetric, and
real eigenvalues and an orthonormal basis [III.37](/part-03/bayesian-analysis) of
eigenvectors. It turns out that there is a tight relation-
A and several structural properties of the graph G, and
these properties can often be useful in the study of

572

various extremal problems. Of particular interest is the    and information theory. It soon became clear that the
second largest eigenvalue of a regular graph. Suppose
that every vertex of a graph G has degree d. Then the
vector for which every entry is 1 is easily seen to be an   results combined combinatorial arguments with fairly
eigenvector with eigenvalue d, and this is the largest
eigenvalue. If all other eigenvalues have modulus much
smaller than d, then it turns out that G behaves in many    often requires one to apply much more sophisticated
ways like a random d-regular graph. In particular, the
number of edges inside any set of k of the vertices is
roughly the same (provided k is not too small) as one
would expect with a random graph. It follows easily that    crete mathematics were initiated by Paul Erdős, who
any set of vertices that is not too big has many neigh-     contributed to the development of the method more
bors among the vertices out side that set. Graphs with
the latter property are called expanders [III.24](/part-03/expanders) and
have numerous applications in theoretical computer
science. Constructing such graphs explicitly is not an
easy matter and was at one time a major open problem.
Now, however, several constructions are known, based
on algebraic tools. See chapter 9 of Alon and Spencer
(2000), and its references, for more details.
   The application of topological methods in the study
of combinatorial objects such as partially ordered sets,
graphs, and set systems has already become part of the
mathematical machinery commonly used in combina-
torics. An early example is Lovász’s proof of Kneser’s
conjecture, mentioned in section 2.3. Another example
is a result of which the following is a representative
special case. Suppose you have a piece of string with
10 red beads, 15 blue beads, and 20 yellow beads on
it. Then, no matter what order the beads come in, you
can cut the string in at most 12 places and place the
resulting segments of beaded string into five piles, each    instance, is there a graph with large girth (meaning it
of which contains two red beads, three blue beads, and
four yellow beads. The number 12 is obtained by multi-
plying 4, the number of piles minus 1, by 3, the number     with an example of such a graph. But their existence is
of colors. The general case of this result was proved
by Alon using a generalization of Borsuk’s theorem.
Many additional examples of topological proofs appear
in Graham, Grötschel, and Lovász (1995, chapter 34).

A wonderful development took place in twentieth-cen-
tury mathematics when it was realized that it is some-
times possible to use probabilistic reasoning to prove
mathematical statements that do not have an obvious
probabilistic nature. For example, in the first half of
the century, Paley, Zygmund, Erdős, Turán, Shannon,
and others used probabilistic reasoning to obtain strik-    by Erdős and Rényi in 1960. The most common way
ing results in analysis, number theory, combinatorics,

IV. Branches of Mathematics
so-called probabilistic method is a very powerful tool
for proving results in discrete mathematics. The early
elementary probabilistic techniques, but in recent years
the method has been greatly developed, and now it
techniques. A recent text dealing with the subject is
Alon and Spencer (2000).
The applications of probabilistic techniques in dis-
than anyone else. One can classify them into three
groups.
The first deals with the study of certain classes of ran-
dom combinatorial objects, like random graphs or ran-
dom matrices. The results here are essentially results
in probability theory, although most of them are moti-
vated by problems in combinatorics. A typical problem
is the following: if we pick a graph “at random,” what
is the probability that it contains a Hamilton cycle?
The second group consists of applications of the fol-
lowing idea. Suppose you want to prove that a combi-
natorial structure exists with certain properties. Then
one possible method is to choose a structure randomly
(from a probability distribution that you are free to
specify) and estimate the probability that it has the
properties you want. If you can show that this prob-
ability is greater than 0, then such a structure exists.
Surprisingly often it is much easier to prove this than
it is to give an example of a structure that works. For
has no short cycles) and large chromatic number? Even
if “large” means “at least 7,” it is very hard to come up
a fairly easy consequence of the probabilistic method.
The third group of applications is perhaps the most
striking of all. There are many examples of statements
that appear to be completely deterministic (even when
one is used to the idea of using probability to give exis-
3   Probabilistic Combinatorics
tic reasoning. In the remainder of this section we shall
briefly describe some typical examples of each of these
three kinds of application.
3.1   Random Structures
The systematic study of random graphs was initiated
of defining a random graph is to fix a probability p and

IV.19.   Extremal and Probabilistic Combinatorics

then to join each pair of vertices with an edge with prob-   of this result is based on the so-called second moment
ability p, with all the choices made independently. The
resulting graph is denoted G(n, p). (Formally speaking,
G(n, p) is not a graph but a probability distribution,
but one often talks about it as though it is a graph that    and chebyshev [VI.45](/part-06/pafnuty-chebyshev-18211894).
has been produced in a random way.) Given any prop-
erty, such as “contains no triangles,” we can study the
probability that G(n, p) has that property.
   A striking discovery of Erdős and Rényi was that
many properties of graphs “emerge very suddenly.”
Some examples are “contains a Hamilton cycle,” “is
not planar,” and “is connected.” These properties are
all monotone, which means that if a graph G has the
property and you add an edge to G, then the resulting
graph still has the property. Let us take one of these
properties and define f (p) to be the probability that
the random graph G(n, p) has it. Because the prop-
erty is monotone, f (p) increases as p increases. What
Erdős and Rényi discovered was that almost all of this
increase happens in a very short time. That is, f (p) is     open problem.
almost 0 for small p and then suddenly changes very
rapidly and becomes almost 1.
   Perhaps the most famous and illustrative example of
this swift change is the sudden appearance of the so-
called giant component. Let us look at G(n, p) when
p has the form c/n. If c < 1, then with high prob-
ability all the connected components of G(n, p) have
size at most logarithmic in n. However, if c > 1, then
G(n, p) almost certainly has one component of size lin-
ear in n (the giant component), while all the rest have
logarithmic size. This is related to the phenomenon of
phase transitions in mathematical physics, which are
discussed in probabilistic models of critical phe-
nomena [IV.25]. A result of Friedgut shows that the
phase transition for a graph property that is “global,”
in a sense that can be made precise, is sharper than the
one for a “local” property.
   Another interesting early discovery in the study of
random graphs was that many of the basic parameters
of graphs are highly “concentrated.” A striking exam-
ple that illustrates what this means is the fact that, for
any fixed value of p and for most values of n, almost

all graphs G(n, p) have the same clique number. That
is, there exists some r (depending on p and n) such
that with high probability, when n is large, the clique
number of G(n, p) is equal to r . Such a result cannot
hold for all n, for continuity reasons, but in the excep-
tional cases there is still some r such that the clique
number is almost certainly equal either to r or to r + 1.    such a coloring, but gives no efficient way of actually
In both cases, r is roughly 2 log n/ log(1/p). The proof     constructing one.

573
method: one estimates the expectation and the variance
of the number of cliques of a given size contained in
G(n, p), and applies well-known inequalities of Markov
The chromatic number of the random graph G(n, p)
is also highly concentrated. Its typical behavior for val-
ues of p that are bounded away from 0 was deter-
mined by Bollobás. A more general result, in which p is
allowed to tend to 0 as n → . nfty, was proved by Shamir,
Spencer, Łuczak, Alon, and Krivelevich. In particular, it
1
can be shown that for every α < 2 and every integer-
α
valued function r (n) < n , there exists a function
p(n) such that the chromatic number of G(n, p(n)) is
precisely r (n) almost surely. However, determining the
precise degree of concentration of the chromatic num-
ber of G(n, p), even in the most basic and important
1
case p = 2 (in which all labeled graphs on n vertices
occur with equal probability), remains an intriguing
Many additional results on random graphs can be
found in Janson, Łuczak, and Ruciński (2000).
3.2   Probabilistic Constructions
One of the first applications of the probabilistic method
in combinatorics was a lower bound given by Erdős
for the Ramsey number R(k, k), which was defined in
section 2.2. He proved that if
 
n 1−(k)
2    2 < 1,
k
then R(k, k) > n. That is, there is a red/blue coloring
of the edges of the complete graph on n vertices such
that no clique of size k is completely red or completely
blue. Notice that the number n = 2 k/2 ! satisfies the
above inequality for all k ⩾ 3, so Erdős’s result gives an
exponential lower bound for R(k, k). The proof is sim-
ple: if you color the edges randomly and independently,
then the probability that any fixed set of k vertices has
k
all its edges of the same color is twice 2−(2) . Thus, the
expected number of cliques with this property is
 
n 1−(k)
2   2 .
k
If this is less than 1, then there must be at least one col-
oring for which there are no cliques with this property,
and the result is proved.
Note that this proof is completely nonconstructive,
in the sense that it merely proves the existence of

574

   A similar computation yields a solution for the tour-
nament problem mentioned in section 1.1. If the results
of the tournament are random, then the probability, for
any particular k teams, that no other team beats them
all is (1 − (1/2 k ))n−k . From this it follows that if

then there is a nonzero probability that for every choice
of k teams, there is another team that beats them all.
In particular, it is possible for this to happen. If n is
larger than about k2 2 k log 2, then the above inequality
holds.
  Probabilistic constructions have been very power-
ful in supplying lower bounds for Ramsey numbers.
Be sides the bound for R(k, k) mentioned above, there is
a subtle probabilistic proof, due to Kim, that R(3, k) ⩾
ck2 / log k, for some c > 0. This is known to be tight up
to a constant factor, as proved by Ajtai, Komlós, and
Szemerédi, who also used probabilistic methods.
3.3   Proving Deterministic Theorems
Suppose that you color the integers with k colors. Let us
call a set S multicolored if all k colors appear in S. Straus   too close to each other. Probabilistic arguments have
conjectured that for every k there is an m with the fol-
lowing property: given any set S with m elements, there
is a coloring of the integers with k colors such that all
translates of S are multicolored. This conjecture was
proved by Erdős and Lovász. The proof is probabilistic,
and applies a tool called the Lovász local lemma, which,
unlike many probabilistic techniques, allows one to
show that certain events hold with nonzero probabil-
ity even when this probability is extremely small. The
assertion of this lemma, which has numerous addi-
tional applications, is, roughly, that for any finite col-
lection of “nearly independent” low-probability events,
there is a positive probability that none of the events
holds. Note that the statement of Straus’s conjecture
has nothing to do with probability, and yet its proof
relies on probabilistic arguments.
   A graph G is k-colorable, as we have said, if you can
properly color its vertices with k colors. Suppose now
that instead of trying to use k colors in total, you have
a separate list of k colors for each vertex, and this
time you want to find a proper coloring of G where
each vertex gets a color from its own list. If you can
always do so, no matter what the lists are, then G is
called k-choosable, and the smallest k for which G is
k-choosable is called the choice number ch(G). If all
the lists are the same, then one obtains a k-coloring,

IV. Branches of Mathematics
so ch(G) must be at least as big as χ(G). One might
expect ch(G) to be equal to χ(G), since it seems as
though using different lists of k colors for different
vertices would make it easier to find a proper coloring
than using the same k colors for all vertices. However,
 
n         1 n−k                             this turns out to be far from true. It can be proved that
1− k        < 1,                      for any constant c there is a constant C such that any
k        2
graph with average degree at least C has choice num-
ber at least c. Such a graph might easily be bipartite
(and therefore have chromatic number 2), so it follows
that ch(G) can be much bigger than χ(G). Some what
surprisingly, the proof of this result is probabilistic.
An interesting application of this fact concerns a
graph that arises in Ramsey theory. Its vertices are
all the points in the plane, with two vertices joined
by an edge if and only if the distance between them
is 1. The choice number of this graph is infinite, by the
above result, but the chromatic number is known to be
between 4 and 7.
A typical problem in Ramsey theory asks for a sub-
structure of some kind that is entirely colored with
one color. Its cousin, discrepancy theory, merely asks
that the numbers of times the colors are used are not
proved extremely useful in numerous problems of this
general kind. For example, Erdős and Spencer proved
that in any red/blue coloring of the edges of the com-
plete graph Kn there is a subset V0 of vertices such that
the difference between the number of red edges inside
V0 and the number of blue edges inside V0 is at least
cn3/2 , for some absolute constant c > 0. This problem
is a convincing manifestation of the power of proba-
bilistic methods, since they can be used in the other
direction as well, to prove that the result is tight up to
a constant factor. Additional examples of such results
can be found in Alon and Spencer (2000).
4   Algorithmic Aspects and Future Challenges
As we have seen, it is one matter to prove that a cer-
tain combinatorial structure exists, and quite another
to construct an example. A related question is whether
an example can be generated by means of an effi-
cient algorithm [IV.20 §2.3](/part-04/computational-complexity), in which case we call it
explicit. This question has become increasingly impor-
tant because of the rapid development of theoret-
ical computer science, which has close connections
with discrete mathematics. It is particularly interest-
ing when the structures in question have been proved
to exist by means of probabilistic arguments. Efficient