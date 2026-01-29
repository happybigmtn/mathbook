# Extremal and Probabilistic Combinatorics

$562IV$ . $19$ Extremal and Probabilistic

Combinatorics

Noga Alon and Michael Krivelevich

$1$

Combinatorics: An Introduction

$1$ . $1$

Examples

It is hard to give a rigorous definition of combinatorics. Instead, let us start with a few examples to illustrate what the area is about. (i) In the course of an examination of friendship between children some fifty years ago, the Hungarian sociologist Sandor Szalai observed that among any group of about twenty children he checked he could always find four children any two of whom were friends, or else four children no two of whom were friends. Despite the temptation to try to draw sociological conclusions, Szalai realized that this might well be a mathematical phenomenon rather than a sociological one. Indeed, a brief discussion with the mathematicians Erdős, Turán, and Sós convinced him this was the case. If X is any set of size $18$ or more, and R is some symmetric relation [I.2](/part-01/language-and-grammar) on X, then there is always a subset S of X of size $4$ with the following property: either x Ry for any two distinct elements x, y of S, or x Ry for no two distinct elements x, y of S. In this case, X is a set of children and R is the relation “is friends with.” This mathematical fact is a special case of Ramsey’s theorem, which was proved by the economist and mathematician Frank Plumpton Ramsey in 1930 . Ramsey’s theorem led to the development of Ramsey theory, a branch of extremal combinatorics, which will be discussed in the next section. (ii) In 1916 , Schur was studying fermat’s last theorem [V.10](/part-05/fermats-last-theorem). It is sometimes possible to prove that a Diophantine equation has no solutions by showing that it has no solutions mod p for some prime p. However, Schur proved that for every integer k and every sufficiently large prime p, there are three integers a, b, and c, none of them congruent to $0$ mod p, such that a k + b k is congruent to c k . Although this is a result in number theory, it has a relatively simple and purely combinatorial proof, which is another example of the many applications of Ramsey theory. (iii) When studying the number of real zeros of random polynomials, littlewood [VI.79](/part-06/john-edensor-littlewood-18851977) and Offord investigated in 1943 the following problem. Let $z^{1}$ , $z^{2}$ , . . . , z n be n not-necessarily-distinct complex numbers, IV. Branches of Mathematics each of modulus at least $1$ . One can form $2^{n}$ sums by taking some subset of these numbers and adding them together (with the convention that if one takes the empty set, then the sum is $0$ ). Littlewood and Offord wanted to know how many of these sums there could conceivably be such that the difference between any two of them had modulus less than $1$ . When $n = 2$ the answer is easily seen to be at most $2$ . There are four sums: $0$ , $z^{1}$ , $z^{2}$ , and $z^{1} + z^{2}$ . You cannot choose both of the first two or both of the last two or you will have a difference of $z^{1}$ , which has modulus at least $1$ . Kleitman Katona proved that in general the and n . Notice that a simple construction maximum is $n/^{2}$ ! proves that this maximum can be achieved. Indeed, let $z^{1} = z^{2} =$ · · · $= z^{n}$ and choose all sums of precisely n such sums and they $n/2$ ! of them. There are $n/^{2}$ ! are all equal. The proof that one cannot do better than this uses tools from another area of extremal combinatorics, where the basic objects studied are systems of finite sets. (iv) Consider a school in which there are m teachers $T^{1}$ , $T^{2}$ , . . . , T $m$ and $n$ classes $C^{1}$ , $C^{2}$ , . . . , C n . The teacher T i has to teach the class C j for a specified number p ij of lessons. What is the minimum possible number of periods in a complete timetable? Let d i denote the total number of lessons the teacher T i has to teach, and let c j denote the total number of lessons the class C j has to be taught. Clearly, the number of periods required for a complete schedule is at least as big as any d $i$ or $c$ j , and thus at least as big as the maximum of all these numbers, which we denote by d. It turns out that this obvious lower bound of d is also an upper bound: it is always possible to fit all the lessons that need to be taught into d periods. This is a consequence of König’s theorem, which is a basic result in graph theory. Suppose now that the situation is not so simple: for every teacher T i and every class C j there is some specified set of d periods in which the teaching has to take place. Can we always find a feasible timetable with these more complicated constraints? Recent breakthroughs from a subject known as list coloring of graphs imply that it is always possible. (v) Given a map with several countries represented, how many colors do you need if you want to color the countries without giving any two adjacent countries the same color? Here we assume that each country forms a connected region in the plane. Of course, at least four colors may be necessary: think of Belgium, France, Germany, and Luxembourg, out of which any two have a common border. The four-color theorem

IV.19.   Extremal and Probabilistic Combinatorics                                                                563

[V.12](/part-05/the-four-color-theorem), proved by Appel and Haken in 1976, asserts that      of H . This may sound like a result in group theory, but
you never need more than four colors. The study of           it is really a (simple) result in combinatorics.
this problem led to numerous interesting questions and
results about graph coloring.                                1.2   Topics
  (vi) Let S be an arbitrary subset of the two-dimen-
sional lattice Z2 . For any two finite subsets A, B ⊂ Z       The examples described above illustrate some of the
we can think of the Cartesian product A \times B as a sort        main themes of combinatorics. The subject, sometimes
of “combinatorial rectangle.” This set has size |A| |B|      also called discrete mathematics, is a branch of math-
(where |X| denotes the size of a set X), and we can          ematics that focuses on the study of discrete objects
define an obvious notion of the density d S (A, B) of S in     (as opposed to continuous ones) and their proper-
A \times B by the formula d S (A, B) = |S ∩ (A \times B)|/|A| |B|,      ties. Although combinatorics is probably as old as
which measures what proportion of the elements of            the human ability to count, the field has experienced
A \times B belong to S. For each k, let d(S, k) be the largest    tremendous growth during the last fifty years and
possible value of d S (A, B) if |A| = |B| = k. What can       has matured into a thriving area with its own set of
we say about d(S, k) as k tends to infinity? One might        problems, approaches, and methodology.
guess that almost any behavior is possible, but, remark-        The examples above suggest that combinatorics is a
ably, basic results in extremal graph theory (about the      basic mathematical discipline that plays a crucial role
so-called Turán numbers of complete bipartite graphs)        in the development of many other mathematical areas.
imply that d(S, k) must always tend to 0 or 1.               In this essay we discuss some of the main aspects of
  (vii) Suppose that n basketball teams compete in a         this modern field, focusing on extremal and probabilis-
tournament and any two teams play each other exactly         tic combinatorics. (An account of combinatorial prob-
once. The organizers wish to award k prizes at the end       lems with a rather different flavor can be found in alge-
of the tournament. It would be embarrassing if there         braic and enumerative combinatorics [IV.18](/part-04/enumerative-and-algebraic-combinatorics).) It is,
ended up being a team that had not won a prize despite       of course, impossible to cover the area fully in such
beating all the teams that had won a prize. However,         a short article. A detailed account of the subject can
unlikely though it might sound, it is quite possible that    be found in Graham, Grötschel, and Lovász (1995).
this will be the case whatever k teams they choose,          Our main intention is to give a glimpse of the topics,
at least if n is large enough. To demonstrate this is        methods, and applications illustrated by representa-
easy if one uses the probabilistic method, which is one      tive examples. The topics we discuss include extremal
of the most powerful techniques in combinatorics. For        graph theory, Ramsey theory, the extremal theory of
any fixed k, and all sufficiently large n, if the results       set systems, combinatorial number theory, combinato-
of all the games are chosen randomly (and uniformly          rial geometry, random graphs, and probabilistic com-
and independently), then there is a very high proba-         binatorics. The methods applied in the area include
bility that for any k teams there is another team that       combinatorial techniques, probabilistic methods, tools
beats all of them. Probabilistic combinatorics, which is     from linear algebra, spectral techniques, and topolog-
one of the most active areas in modern combinatorics,        ical methods. We also discuss the algorithmic aspects
started with the realization that probabilistic reason-      and some of the many fascinating open problems in
ing often provides simple solutions to problems of this      the area.
type, problems that are often very hard to solve in any
other way.                                                              2   Extremal Combinatorics
  (viii) If G is a finite group of n elements, and H is a
subgroup of size k in G, then there are n/k left cosets      Extremal combinatorics deals with the problem of
and n/k right cosets of H. Is there always a set of n/k      determining or estimating the maximum or minimum
elements of G that contains a single representative of       possible size of a collection of finite objects that sat-
each right coset and a single representative of each left    isfies certain requirements. Such problems are often
coset? Hall’s theorem, a basic result in graph theory,       related to other areas, including computer science,
implies that there is. In fact, if H is another subgroup     information theory, number theory, and geometry. This
of size k in G, then there is always a set of n/k elements   branch of combinatorics has developed spectacularly
of G that contains a single representative of each right     over the last few decades (see, for example, Bollobás
coset of H and a single representative of each left coset    (1978), Jukna (2001), and their many references).

564                                                                                       IV. Branches of Mathematics

2.1     Extremal Graph Theory                                   terms of a graph G, as follows. The vertices of G cor-
                                                                respond to the countries on the map, and two vertices
A graph [III.34] is one of the very basic combinatorial
                                                                are connected by an edge in G if and only if the cor-
structures. It consists of a set of points, called vertices,
                                                                responding countries share a common border. It is not
some of which are linked by edges. One can represent a
                                                                hard to show that one can draw such a graph in such
graph visually by drawing the vertices as points in the
                                                                a way that no two edges cross each other: such graphs
plane and the edges as lines (or curves). However, for-
                                                                are called planar. Conversely, any planar graph arises
mally a graph is more abstract: it is just a set together
                                                                in this way. Therefore, our problem is equivalent to the
with a collection of pairs taken from the set. More pre-
                                                                following: if you want to color the vertices of a planar
cisely, it consists of a set V , called the vertex set, and a
                                                                graph so that no two adjacent vertices receive the same
set E, called the edge set ; the elements of E (the edges)
                                                                color, then how many colors do you need? (One can
are sets of the form {u, v}, where u and v are distinct
                                                                make the problem yet more mathematical by removing
elements of V . If {u, v} is an edge, we say that u and
                                                                the nonmathematical notion of color. For example, one
v are adjacent. The degree d(v) of a vertex v is the
                                                                can assign to each vertex a positive integer instead.)
number of vertices adjacent to it.
                                                                Such a coloring is called proper. In this language, the
   Here are a number of simple definitions associated
                                                                four-color theorem states that every planar graph can
with graphs that have emerged as important. A path
                                                                be properly colored with four colors.
of length k from u to v in G is a sequence of distinct
                                                                   Here is another example of a graph-coloring problem.
vertices u = v0 , v1 , . . . , vk = v, where vi and vi+1 are
                                                                Suppose we must schedule meetings of several parlia-
adjacent for all i < k. If v0 = vk (but all vertices vi for
                                                                ment committees. We do not wish to have two com-
i < k are distinct), this is called a cycle of length k, and
                                                                mittees meeting at the same time if some parliament
is usually denoted by Ck . A graph G is connected if for
                                                                member belongs to both, so how many sessions do we
any two vertices u, v of G there is a path from u to v. A
                                                                need?
complete graph Kr is a graph with r vertices such that
                                                                   Again we can model this situation by using a graph
any two of them are adjacent. A subgraph of a graph G
                                                                G. The vertices of G represent the committees, with two
is a graph that contains some of the vertices of G and
                                                                vertices adjacent if and only if the corresponding com-
some of its edges. A clique in G is a set of vertices in G
                                                                mittees share a member. A schedule is a function f that
such that any two of them are adjacent. The maximum
                                                                assigns to each committee one of k time slots. More
size of a clique in G is called the clique number of G.
                                                                mathematically, we can think of it as just a function
Similarly, an independent set in G is a set of vertices in
                                                                from V to the set {1, 2, . . . , k}. Let us call a schedule
G with no two of them adjacent, and the independence
                                                                valid if no two adjacent vertices are assigned the same
number of G is the maximum size of an independent
                                                                number. This corresponds to no two committees being
set in it.
                                                                assigned the same time slot if they share a member. The
   Extremal graph theory deals with quantitative con-
                                                                question then becomes, “What is the minimal value of
nections between various parameters of a graph, such
                                                                k for which a valid schedule exists?”
as its numbers of vertices and edges, its clique num-
                                                                   The answer is called the chromatic number of the
ber, or its independence number. In many cases a cer-
                                                                graph G, denoted χ(G): it is the smallest number of
tain optimization problem involving these parameters
                                                                colors in any proper coloring of G. Notice that a color-
has to be solved (for example, determining how big
                                                                ing of a graph G is proper if and only if for each color
one parameter can be if another one is at most some
                                                                the set of vertices of that color is independent. There-
given size), and its optimal solutions are the extremal
                                                                fore, χ(G) can also be defined as the smallest number
graphs for this problem. Many important optimization
                                                                of independent sets into which it is possible to par-
problems that do not explicitly mention graphs can be
                                                                tition the vertices of G. A graph is called k-colorable
reformulated, using the definitions above, as problems
                                                                if it admits a k-coloring, or, equivalently, if it can be
about extremal graphs.
                                                                partitioned into k independent sets. Thus, χ(G) is the
                                                                minimum k for which G is k-colorable.
2.1.1    Graph Coloring
                                                                   Two simple examples are in order. If G is a complete
Let us return to the map-coloring example discussed in          graph Kn on n vertices, then obviously in any coloring
the introduction. To translate the problem into math-           of G all vertices get distinct colors, and thus n colors
ematics, we can describe the map-coloring problem in            are necessary. Of course, n colors are also sufficient,

$IV$ . $19$ .

Extremal and Probabilistic Combinatorics

so $χ(K^{n}) = n.$ If $G$ is a cycle $C^{2n} + {}^{1}$ on $2n + 1$ vertices, then easy parity arguments show that at least three colors are needed, and three colors are enough: color the vertices along the cycle alternately by colors $1$ and $2$ , and then color the last vertex by color $3$ . Thus, $χ(C^{2n} + {}^{1}) = 3$ . It is not hard to prove that G is $2$ - colorable if and only if it does not contain a cycle of odd length. Graphs that are $2$ - colorable are usually called bipartite, since they split into two parts, with all the edges going from one part to the other. The easy character ization ends here, and no simple criterion equivalent to k-colorability is available for k $\ge 3$ . This is related to the fact that for each fixed $k \ge 3$ the computational problem of deciding whether a given graph is k-colorable is NP-hard, a notion discussed in computational complexity [IV.20](/part-04/computational-complexity) . Coloring is one of the most fundamental notions of graph theory, as a huge array of problems in this field and in related areas like computer science and operations research can be formulated in terms of graph coloring. Finding an optimal coloring of a graph is known to be a very hard task, both theoretically and practically. There are two simple yet fundamental lower bounds on the chromatic number. First, as every color class in a proper coloring of a graph G forms an independent set, it cannot be bigger than the independence number of G, which is denoted by α (G). Therefore, at least $|V(G)|/α($ G ) colors are necessary. Secondly, if G contains a clique of size k, then k colors are needed to color that clique alone, and thus χ (G) $\ge$ k. This implies that χ (G) $\ge$ ω (G), where ω (G) is the clique number of G. What about upper bounds on the chromatic number? One of the simplest approaches to coloring a graph is to do it greedily: put the vertices in some order and color them one by one, assigning to each one the smallest positive integer that has not already been assigned to one of its neighbors. While the greedy algorithm can sometimes be very inefficient (for example, it can color bipartite graphs in an unbounded number of colors, even though two colors are sufficient), it often works quite well. Observe that when applying the greedy algorithm, a color given to a vertex v is at most one more than the number of the neighbors of v preceding it in the chosen order, and is thus at most d (v) $+ 1$ , where d (v) is the degree of v in G. It follows that if $\Delta$ (G) is the maximum degree of G, then the greedy algorithm uses at most $\Delta(G) + 1$ colors. Therefore $χ(G) \le \Delta(G) + 1$ . This bound is tight for complete graphs and odd cycles, $565$ and, as shown by Brooks in 1941 , those are the only cases: if G is a graph of maximum degree $\Delta,$ then $χ(G) \le \Delta$ unless $G$ contains a clique $K\Delta + 1$ , or $\Delta = 2$ and G contains an odd cycle. It is also possible to color the edges of a graph, rather than the vertices. In this case a proper coloring is defined to be one where no two edges that meet at a vertex are given the same color. The chromatic index of G, denoted by χ (G), is the minimum k for which G admits a proper edge-coloring with k colors. For example, if G is the complete graph $K^{2n}$ , then $χ (G) = 2n - 1$ . This turns out to be equivalent to the fact that it is possible to organize a round-robin tournament with $2n$ teams and fit it into $2n - 1$ rounds: just ask the manager of a soccer league. It is also not hard to show that $χ (K^{2n} - {}^{1}) = 2n - 1$ . Since in any proper edge-coloring of G all edges of G that are incident to a vertex v get distinct colors, the chromatic index is obviously at least as big as the maximum degree. Equality holds for bipartite graphs, as proved by König in 1931 , which implies the existence of a complete timetable using d periods in the problem of teachers and classes discussed in the introduction. Remarkably, this trivial lower bound of χ (G) $\ge \Delta$ (G) is very close to the true behavior of χ (G). A fundamental theorem of Vizing from 1964 states that χ (G) is always equal either to the maximum degree $\Delta$ (G) or to $\Delta(G) + 1$ . Thus, the chromatic index of G is much easier to approximate than its chromatic number. $2$ . $1$ . $2$ Excluded Subgraphs If a graph G has n vertices and contains no triangle (that is, three vertices all joined to each other) then how many edges can it contain? If n is even, then you can split the vertex set into two equal parts A and B of size n $/2$ and join every vertex in A to every vertex in B. The resulting graph G contains no triangles and has $n^{2}/4$ edges. Moreover, adding another edge will automatically create a triangle (in fact, several triangles). But is this the densest possible triangle-free graph? A hundred years ago the answer was shown to be yes by Mantel. (A similar theorem holds when n is odd, but now $A$ and $B$ must have nearly equal sizes $(n + 1)/2$ and $(n - 1)/2$ .) Let us look at a more general problem, where the role of the triangle is played by an arbitrary graph. More precisely, let H be any graph, with m vertices, say, and when n $\ge$ m let us define ex (n , H) to be the maximum possible number of edges in a graph with n vertices

566                                                                                       IV. Branches of Mathematics

that does not contain H as a subgraph. (The notation          obtained so far use a variety of techniques from differ-
“ex” stands for “exclude.”) The function ex(n, H) is usu-     ent fields, including probability theory, number theory,
ally called the Turán number of H, for reasons that will      and algebraic geometry.
become clear, and finding good approximations for it
has been a central problem in extremal graph theory.          2.1.3   Matchings and Cycles
   What kind of examples of graphs that do not contain
                                                              Let G be a graph. A matching in G is a collection of
H can we think of? One observation that gets us started
                                                              edges in G of which no two share a vertex. A matching
is that if H has chromatic number r , then it cannot be
                                                              M in G is called perfect if every vertex belongs to one
a subgraph of a graph G with chromatic number less
                                                              of the edges in M. (The idea is that the edges determine
than r . (Why not? Because a proper (r − 1)-coloring of       a “match” for each vertex: the match for x is the vertex
G provides us with a proper (r − 1)-coloring of any sub-      y for which xy is an edge of M.) Of course, for G to
graph of G.) So a promising approach is to look for a         have a perfect matching it must have an even number
graph G with n vertices, chromatic number r − 1, and          of vertices.
as many edges as possible. This is easy to find. Our con-         One of the best-known theorems in graph theory is
straint is that the vertices can be partitioned into r − 1    Hall’s theorem, which provides a necessary and suffi-
independent sets. Once we have done that, we may as           cient condition for the existence of a perfect matching
well include all edges between those sets. The result is      in a bipartite graph. What kind of condition can this be?
a complete (r − 1)-partite graph. A routine calculation       It is very easy to write down a trivial necessary condi-
shows that in order to maximize the number of edges,          tion, as follows. Let G be a bipartite graph with vertex
one should partition into sets that have sizes as nearly      sets A and B of equal size. (If they do not have equal
equal as possible. (For example, if n = 10 and r = 4,         size, then clearly there is no perfect matching.) Given
then we would partition into three sets of sizes 3, 3,        any subset S of A, let N(S) denote the set of all vertices
and 4.)                                                       in B that are joined to at least one vertex in S. If there is
   The graph that satisfies this condition is called the       to be a matching, then it must be possible to assign to
Turán graph Tr −1 (n) and the number of edges it con-         each vertex in S a distinct “match,” so obviously N(S)
tains is denoted by tr −1 (n). We have just argued that       must have at least as many elements as S. Hall’s the-
ex(n, H) ⩾ tr −1 (n), which  can be shown to be at least    orem, proved in 1935, asserts that, remarkably, this
as big as (1 − 1/(r − 1)) n  2 .                              obvious necessary condition is also sufficient. That is,
   Turán’s contribution to this area was to give an           if N(S) is always at least as big as S, then there will be a
exact solution, in 1941, for the most important case,         perfect matching. More generally, if A is smaller than B,
when H is the complete graph Kr on r vertices. He             then the same condition guarantees that one can find
proved that ex(n, Kr ) is not just at least tr −1 (n), but    a matching that includes every vertex in A (but leaves
is actually equal to tr −1 (n). Moreover, the only Kr -free   some vertices in B unmatched).
graph with n vertices and ex(n, Kr ) edges is the Turán          There is a useful reformulation of Hall’s theorem
graph Tr −1 (n). Turán’s paper is generally considered        in terms of set systems. Let S1 , S2 , . . . , Sn be a collec-
the starting point of extremal graph theory.                  tion of sets, and suppose that we would like to find a
   Later, Erdős, Stone, and Simonovits extended Turán’s      system of distinct representatives: that is, a sequence
theorem by proving that the above simple lower bound          x1 , x2 , . . . , xn such that xi is an element of Si and no
for ex(n, H) is asymptotically tight for any fixed H           two of the xi are the same. Obviously this cannot be
with chromatic number at least 3. That is, if r is the        done if the union of some k of the sets Si has size less
chromatic number of H, then the ratio of ex(n, H) to          than k. Again, this obvious necessary condition is suffi-
tr −1 (n) tends to 1 as n tends to infinity.                   cient. It is not hard to show that this assertion is equiv-
   Thus, the function ex(n, H) is well-understood for all     alent to Hall’s theorem: let S be the union of the Si and
nonbipartite graphs. Bipartite graphs are rather differ-       define a bipartite graph with vertex sets {1, 2, . . . , n}
ent, because their Turán numbers are much smaller: if         and S, joining i to x if and only if x ∈ Si . Then a match-
H is bipartite, then ex(n, H)/n2 tends to zero. Deter-        ing that includes all of the set {1, 2, . . . , n} picks out a
mining the asymptotics of ex(n, H) in this case remains       system of distinct representatives: xi is the element of
a challenging open problem with many unsettled ques-          S that is matched with i.
tions. Indeed, the full story is unknown even for the            Hall’s theorem can be applied to solve the problem
very simple case when H is a cycle. Partial results           of finding a system of representatives for the right and

$IV$ . $19$ .

Extremal and Probabilistic Combinatorics

left cosets of a subgroup  H, mentioned in section $1$ . $1$ . Define a bipartite graph F , whose two sides (of size n  /  k each) are the left and right cosets of H. A left coset $g^{1}$ H is connected by an edge of F to a right coset H$g^{2}$ if they share a common element. It is not difficult to show that F satisfies the Hall condition, and hence it has a perfect matching M. Choosing for each edge (g i H, Hg j) of M a common element of g i H and Hg j , we obtain the required family of representatives. There is also a necessary and sufficient condition for the existence of a perfect matching in a general (not necessarily - bipartite) graph G. This is a theorem of Tutte, which we shall not state here. Recall that C k denotes a cycle of length k. A cycle is a very basic graph structure, and, as one might expect, there are many extremal results concerning cycles. Suppose that G is a connected graph with no cycles. If you pick a vertex and look at its neighbors and then the neighbors of its neighbors, and so on, you will see that it has a tree-like structure. Indeed, such graphs are called trees. An easy exercise shows that any tree with n vertices has exactly $n - 1$ edges. It follows that every graph G on n vertices with at least n edges has a cycle. If you want to guarantee that this cycle has certain extra properties, then you may need more edges. For example, the theorem of Mantel mentioned earlier implies that a graph G with n vertices and more than $n^{2}/4$ edges contains a triangle $C^{3} = K^{3}$ . One can also

$1$

prove that a graph $G = (V$ ,  E) with $|E| > {}^{2}k(|V| - 1)$ has a cycle of length longer than k (and this is in fact a sharp result). A Hamilton cycle in a graph G is a cycle that visits every vertex of G. This term originated in a game, invented by hamilton [VI.37](/part-06/william-rowan-hamilton-18051865) in 1857 , the objective of which was to complete a Hamilton cycle in the graph of the dodecahedron. A graph containing a Hamilton cycle is called Hamiltonian. This concept is strongly related to the well-known traveling salesman problem [VII.5](/part-07/the-mathematics-of-algorithm-design) : you are given a graph with positive weights assigned to the edges, and you must find a Hamilton cycle for which the sum of the weights of its edges is minimized. There are many sufficient criteria for a graph to be Hamiltonian, quite a few of which are based on the sequence of degrees. For example, Dirac proved in 1952 that $a$ graph on $n \ge 3$ vertices all of whose degrees are at least $n/2$ is Hamiltonian.

$2$ . $2$

Ramsey Theory

Ramsey theory is a systematic study of the following general phenomenon. Surprisingly often, a large struc-

$567$

ture of a certain kind has to contain a fairly large highly organized substructure, even if the structure itself is completely arbitrary and apparently chaotic. As succinctly put by the mathematician T. S. Motzkin, “Complete disorder is impossible.” One might expect that the simple and very general form of this paradigm ensures that it has many diverse manifestations in different mathematical areas, and this is indeed the case. (One should, however, bear in mind that some natural statements of this kind are false for nonobvious reasons .) A very simple statement, which can be regarded as a basic prototype for what follows, is the pigeonhole principle. This states that if a set X of n objects is colored with s colors, then there must be a subset of X of size at least n  /  s that uses just one color. Such a subset is called monochromatic. The situation becomes more interesting if the set X has some additional structure. It then becomes natural to ask for a monochromatic subset that keeps some of the structure of X. However, it also becomes much less obvious whether such a subset exists. Ramsey theory consists of problems and theorems of this general kind. Although several Ramsey-type theorems had appeared before, Ramsey theory is traditionally regarded as having started with Ramsey’s theorem, proved in 1930 . Ramsey took as his set X the set of all the edges in a complete graph, and the monochromatic subset he obtained consisted of all the edges of some complete subgraph. A precise statement of his theorem is as follows. Let $k$ and $l$ be integers greater than $1$ . Then there exists an integer n such that, however you color the edges of the complete graph with n vertices, using the two colors red and blue, there will either be k vertices such that all edges between them are red or l vertices such that all edges between them are blue. That is, a sufficiently large complete graph colored with two colors contains a largish complete subgraph that is monochromatic. Let R (k , l) denote the minimum number n with this property. In this language, the observation of Szalai, mentioned in the introduction, is that $R(4$ , $4) \le 20$ (in fact, $R(4$ , $4) = 18)$ . Actually, Ramsey’s theorem was more general, in that he allowed any number of colors, and the objects colored could be rtuples of elements rather than just pairs, as one has when coloring graphs. The exact computation of small Ramsey numbers turns out to be a notoriously difficult task: even the value of $R(5$ , 5) is unknown at present. The second cornerstone of Ramsey theory was laid by Erdős and Szekeres, who in 1935 wrote a paper

568                                                                                            IV. Branches of Mathematics

containing several important Ramsey-type results.                    Even before van der Waerden, Schur proved in 1916
In particular, they proved the recursion R(k, l) ⩽                that for any positive integer r there exists an inte-
R(k − 1, l) + R(k, l − 1). Combined with the easy bound-          ger S(r ) such that for every r -coloring of {1, . . . , S(r )}
ary conditions R(2, l) = l, R(k, 2) =  k, the recursion         one of the colors contains a solution of the equation
                                 k+l−2
leads to the estimate R(k, l) ⩽ k−1 . In particular, for          x + y = z. The proof can be derived rather easily from
the so-called diagonal case k = l we obtain R(k, k) < 4 k .        the general Ramsey theorem. Schur applied this state-
Remarkably, no improvement in the exponent of the                 ment to prove the following result, mentioned in sec-
latter estimate has been found so far. That is, nobody            tion 1.1: for every k and all sufficiently large primes
has found an upper bound of the form C k for some                 p, the equation ak + bk = c k has a nontrivial solution
C < 4. The best lower bound known, which we shall dis-            in the integers modulo p. To prove this result, assume
cuss in section 3.2, is roughly R(k, k) ⩾ 2 k/2 , so there         that p ⩾ S(k) and consider the field [I.3 §2.2](/part-01/fundamental-definitions) Zp of
is a rather substantial gap.                                      integers mod p. The nonzero elements of Zp form a
   Another Ramsey-type statement, proved by Erdős                group [I.3 §2.1](/part-01/fundamental-definitions) under multiplication. Let H be the sub-
and Szekeres, is of a geometric nature. They showed               group of this group consisting of all kth powers: that is,
that for every n ⩾ 3 there exists a positive integer N            H = {x k : x ∈ Z∗ p }. It is not hard to show that the index
such that, given any configuration of N points in the              r of H is the highest common factor of k and p − 1, and
plane in general position (i.e., no three of them are on a        in particular is at most k. The partition of Z∗   p into the
line), there are n that form a convex n-gon. (It is instruc-      cosets of H can be thought of as an r -coloring of Z∗     p . By
tive to prove that if n = 4 then N can be taken to be 5.)         Schur’s theorem there exist x, y, z ∈ {1, . . . , p − 1} that
There are several proofs of this theorem, some using              all have the same color—that is, they all belong to the
the general Ramsey theorem. It is conjectured that the            same coset of H. In other words, there exists a residue
smallest value of N that will do in order to ensure a             d ∈ Z∗                           k          k
                                                                          p such that x = da , y = db , z = dc , and
                                                                                                                          k
                                                                      k + db k = dc k modulo p. The desired result follows
convex n-gon is 2 n−2 + 1.                                         da
  The classic Erdős–Szekeres paper also contains the             if we multiply both sides by d−1 .
following Ramsey-type result: any sequence of n2 + 1                 Many additional Ramsey-type results can be found in
distinct numbers contains a monotone (increasing or               Graham, Rothschild, and Spencer (1990) or in Graham,
decreasing) subsequence of length n+1.                            Grötschel, and Lovász (1995, chapter 25).
                                              √
  This provides a quick lower bound of n for a
                                                                  2.3   Extremal Theory of Set Systems
well-known problem of Ulam, asking for the typical
length of a longest increasing subsequence of a ran-              Graphs are one of the fundamental structures stud-
dom sequence of length n. A detailed description of               ied by combinatorial is ts, but there are others too. An
the distribution of this length has recently been given           important branch of the subject is the study of set sys-
by Baik, Deift, and Johansson.                                    tems. Most often, these are simply collections of sub-
   In 1927 van der Waerden proved what became known               sets of some n-element set. For example, the collection
as van der Waerden’s theorem: for all positive integers           of all subsets of the set {1, 2, . . . , n} of size at most
k and r there exists an integer W such that for every             n/3 is a good example of a set system. An extremal
coloring of the set of integers {1, 2, . . . , W } using r col-   problem in this area is any problem where the aim is to
ors, one of the colors contains an arithmetic progres-            determine, or estimate, the maximum number of sets
sion of length k. The minimum W for which this is true            there can be in a set system that satisfies certain con-
is denoted by W (k, r ). Van der Waerden’s bounds for             ditions. For example, one of the first results in the area
W (k, r ) are enormous: they grow like an Ackermann-              was proved by Sperner in 1928. He looked at the follow-
type function. A new proof of his theorem was found               ing question: how large a collection of subsets can one
by Shelah in 1987, and yet another proof was given                choose from an n-element set in such a way that no set
by Gowers in 2000, while he was studying the (much                from the collection is a subset of any other? A simple
deeper) “density version” of the theorem, which will              example of a set system satisfying this condition is the
be described in section 2.4. These recent proofs pro-             collection of all sets of size r , for some r . From this it
vided improved upper bounds for W (k, r ), but the best-          immediately follows that we can obtain a collection     as
                                                                                                                           n
known lower bound for this number, which is only                  large as the largest
                                                                                      binomial
                                                                                                 coefficient,    which is  n/2
                                                                                        n
exponential in k for each fixed r , is much smaller.               if n is even and (n+1)/2    if n is odd.

IV.19.   Extremal and Probabilistic Combinatorics                                                                        569

   Sperner showed that this is indeed the maximum pos-           colors you can use? It is not difficult to see that n−2 k+2
sible size of such a collection. This result supplies a          colors suffice. Indeed, one color class can be the family
quick solution to the real analogue of the problem of            of all subsets of {1, 2, . . . , 2 k − 1}, which is clearly an
Littlewood and Offord described in section 1.1. Sup-              intersecting family. And then, for each i such that 2 k ⩽
pose that x1 , x2 , . . . , xn are n not-necessarily-distinct    i ⩽ n, you can take the family of all subsets whose
real numbers, each of modulus at least 1. A first obser-          largest element is i. There are n − 2 k + 1 such families,
vation is that we may assume that all the xi are posi-           and any set of size k belongs either to one of them or to
tive, since if we replace a negative xi by −xi (which is         the first family. Therefore, n−2 k+2 colors are enough.
positive), then we end up with exactly the same set of             Kneser conjectured in 1955 that this bound was tight:
sums, but shifted by −xi . (To see this, compare a sum           in other words, that if you have fewer than n − 2 k + 2
that used to involve xi with the corresponding sum that          colors then you will have to give the same color to
does not involve −xi , and vice versa.) But now, if A is a       some pair of disjoint sets. This conjecture was proved
proper subset of B, then some xi belongs to B and not            by Lovász in 1978. His proof is topological, and uses
to A, so                                                       the Borsuk–Ulam theorem. Several simpler proofs have
                       xi −      xi ⩾ xi ⩾ 1.                    been found since, but they are all based on the topolog-
                 i∈B      i∈A                                    ical idea in the first proof. Since Lovász’s breakthrough,
Therefore, the total number of subset sums you can               topological arguments have become an important part
find
     with
             any two differing by less than 1 is at most         of the armory of researchers in combinatorics.
    n
   n/2!   , by Sperner’s theorem.
   A set system is called an intersecting family if any two      2.4   Combinatorial Number Theory
sets in the system intersect. Since a set and its comple-        Number theory is one of the oldest branches of math-
ment cannot both belong to an intersecting family of             ematics. At its core are problems about integers, but
subsets of {1, 2, . . . , n}, we see immediately that such a     a sophisticated array of techniques has been devel-
family can have size at most 2 n−1 . Moreover, this bound         oped to deal with those problems, and these techniques
is achieved by, for example, the collection of all sets          have often themselves been the basis for further study
that contain the element 1. But what happens if we fix            (see, for example, algebraic numbers [IV.1](/part-04/number-theory), analytic
a k and assume in addition that all our sets have size k?        number theory [IV.2](/part-04/number-theory), and arithmetic geometry
We may assume that n ⩾ 2 k, as otherwise the solution             [IV.5](/part-04/arithmetic-geometry)). However, some problems in number theory have
is trivial.
          Erdős, Ko, and Rado proved that the maximum         yielded to the methods of combinatorics. Some of these
is n−1
     k−1 . Here is a beautiful proof discovered later by         problems are extremal problems with a combinatorial
Katona. Suppose you arrange the elements randomly                flavor, while others are classical problems in number
around a circle. Then there are n ways of choosing k             theory where the existence of a combinatorial solution
elements that are consecutive in this arrangement, and           has been quite surprising. We describe below a few
it is quite easy to convince yourself that at most k of          examples. Many more can be found in chapter 20 of
these can intersect (if n ⩾ 2 k). So out of these n sets of       Graham, Grötschel, and Lovász (1995), in Nathanson
size k, only k of them can belong to any given intersect-        (1996), and in Tao and Vu (2006).
ing family. Now it is also easy to show that every set has          A simple but important notion in the area is that of a
an equal chance of being one of these n sets, and this           sumset. If A and B are two sets of integers, or more gen-
proves (by a simple double-counting argument) that the           erally are two subsets of an abelian group [I.3 §2.1](/part-01/fundamental-definitions),
largest possible proportion of sets in the family is k/n.      then the sumset A + B is defined to be {a + b : a ∈
                                                           n
Therefore, thefamily    itself has size at most (k/n) k ,      A, b ∈ B}. For instance, if A = {1, 3} and B = {5, 6, 12},
                    n−1
which equals k−1 . The original proof of Erdős, Ko,             then A + B = {6, 7, 8, 9, 13, 15}. There are many results
and Rado is more complicated than this, but it is impor-         relating the size and structure of A + B to those of A
tant because it introduced a technique known as com-             and B. For example, the Cauchy–Davenport theorem,
pression, which was used to solve many other extremal            which has numerous applications in additive number
problems.                                                        theory, is the statement that if p is a prime, and A, B
   Let n > 2 k be two positive integers. Suppose that you         are two nonempty subsets of Zp , then the size of A + B
wish to color all subsets of the set {1, 2, . . . , n} of size   is at least the minimum of p and |A| + |B| − 1. (Equality
k in such a way that any two sets with the same color            occurs if A and B are arithmetic progressions with the
intersect each other. What is the smallest number of             same common difference.) cauchy [VI.29](/part-06/augustin-louis-cauchy-17891857) proved this

570                                                                                   IV. Branches of Mathematics

theorem in 1813, and applied it to give a new proof of a    where p is a point in P ,  is a line in L, and the point p
lemma that lagrange [VI.22](/part-06/joseph-louis-lagrange-17361813) had proved as part of his       lies on the line . Suppose that P contains m distinct
well-known 1770 paper that shows that every positive        points and L contains n distinct lines. How many inci-
integer is a sum of four squares. Davenport formulated      dences can there be? This is a geometrical problem, but
the theorem as a discrete analogue of a related conjec-     again it has a strong flavor of extremal combinatorics.
ture of Khinchin about densities of sums of sequences       As such, it is typical of the area known as discrete (or
of integers. The proofs given by Cauchy and by Daven-       combinatorial) geometry.
port are combinatorial, but there is also a more recent        Let us write I(m, n) for the maximum number of inci-
algebraic proof, based on some properties of roots of       dences there can be between m points and n lines. Sze-
polynomials. The advantage of the latter is that it pro-    merédi and Trotter determined the asymptotic behav-
vides many variants that do not seem to follow from         ior of this quantity, up to a constant factor, for all
the combinatorial approach. For example, let us define       possible values of m and n. There are two absolute
A⊕B to be the set of all a+b such that a ∈ A, b ∈ B, and    positive constants c1 , c2 such that, for all m, n,
a = b. Then the smallest possible size of A⊕B, given the
                                                               c1 (m2/3 n2/3 + m + n) ⩽ I(m, n)
sizes of A and B, is the minimum of p and |A| + |B| − 2.
Further extensions can be found in Nathanson (1996)                                     ⩽ c2 (m2/3 n2/3 + m + n).
and in Tao and Vu (2006).                                   If m > n2 or n > m2 then one can establish the lower
   The theorem of van der Waerden mentioned in sec-         bound by taking all m points on a single line, or all n
tion 2.2 implies that, however you color the positive       lines through a single point, respectively. In the harder
integers with some finite number r of colors, there          cases when m and n are closer to each other, one can
                                                                                                              √
must be some color that contains arithmetic progres-        prove it by letting P contain all the points of a   m! by
                                                              √
sions of every length. Erdős and Turán conjectured in          m! grid, and by taking the n most “popular” lines:
1936 that this always holds for the “most popular”          that is, the n lines that contain the most points of
color class. More precisely, they conjectured that for      P . Establishing the upper bound is more difficult. The
any positive integer k and for any real number  > 0,       most elegant proof of it is due to Székely, and is based
there is a positive integer n0 such that if n > n0 ,        on the fact that, however you draw a graph with m ver-
any set of at least n positive integers between 1 and      tices and more than 4 m edges, you must have many
n contains a k-term arithmetic progression. (Setting        pairs of edges that cross each other. (This is a rather
 = r −1 one can easily deduce van der Waerden’s theo-      simple consequence of the famous Euler formula con-
rem from this.) After several partial results, this con-    necting the numbers of vertices, edges, and regions in
jecture was proved by Szemerédi in 1975. His deep           any drawing of a planar graph.) To bound the number of
proof is combinatorial, and applies techniques from         incidences between a set of points P and a set of lines L
Ramsey theory and extremal graph theory. Fursten-           in the plane, one considers the graph whose vertices are
berg gave another proof in 1977, based on techniques        the points P , and whose edges are all segments between
of ergodic theory [V.9](/part-05/ergodic-theorems). In 2000 Gowers gave a new          consecutive points along a line in L. The desired bound
proof, combining combinatorial arguments with tools         is obtained by observing that the number of crossings
from analytic number theory. This proof supplied a          in this graph does not exceed the number of pairs of
much better quantitative estimate. A related very recent    lines in L, and yet should be large if there are many
spectacular result of Green and Tao asserts that there      incidences.
are arbitrarily long arithmetic progressions of prime          Similar ideas can be used to give a partial answer to
numbers. Their proof combines number-theoretic tech-        the following question: if you take n points in the plane,
niques with the ergodic theory approach. Erdős conjec-     how many pairs (x, y) of these points can there be with
tured that any infinite sequence ni for which the sum        the distance from x to y equal to 1? It is not surprising

  i (1/ni ) diverges contains arbitrarily long arithmetic   that the two problems are related: the number of such
progressions. This conjecture would imply the theorem       pairs is the number of incidences between the given n
of Green and Tao.                                           points and the n unit circles that are centered at these
                                                            points. Here, however, there is a large gap between the
2.5   Discrete Geometry
                                                            best known upper bound, which is cn4/3 for some abso-
Let P be a set of points and let L be a set of lines in     lute constant c, and the best known lower bound, which
the plane. Let us define an incidence to be a pair (p, ),   is only n1+c / log log n for some constant c > 0.

IV.19.   Extremal and Probabilistic Combinatorics                                                                 571

   A fundamental theorem of Helly asserts that if you        exists δ > 0 such that if G is a graph with n vertices and
have a finite family F of at least d + 1 convex sets in       at most δn3 triangles, then one can remove at most n2
Rd , and if any d + 1 of them have a point in common,        edges from G and make it triangle free. This innocent-
then all sets in the family have a common point. Now         looking statement turns out to imply the case k = 3 of
let us start with a weaker assumption: given any p of        Szemerédi’s theorem that was mentioned earlier.
the sets, some d+1 of those p sets have a point in com-         Tools from linear and multilinear algebra play an
mon. (Here p is some integer greater than d + 1.) Can        essential role in extremal combinatorics. The most
one then find a set X of at most C points such that each      fruitful technique of this kind, which is possibly also
set in F contains a point in X, with C a constant that       the simplest, is the so-called dimension argument. In its
depends on p but not on the number of convex sets in         simplest form, the method can be described as follows.
the family? This question was raised by Hadwiger and         In order to bound the cardinality of a discrete structure
Debrunner in 1957 and solved by Kleitman and Alon            A, one maps its elements to distinct vectors in a vec-
in 1992. The proof combines a “fractional version” of        tor space [I.3 §2.3](/part-01/fundamental-definitions), and proves that those vectors are
Helly’s theorem with the duality of linear program-          linearly independent. It then follows that the size of A
ming [III.84](/part-03/the-simplex-algorithm) and various additional geometric results.      is at most the dimension of the vector space in ques-
Unfortunately, it gives a very poor estimate for C: even     tion. An early application of this argument was found
in two dimensions and with p = 4 it is not known what        by Larman, Rogers, and Seidel in 1977. They wanted to
the best possible value of C is.                             know how many points it was possible to find in Rn that
   This is just a small sample of problems and results       determine at most two distinct differences. An example
in discrete geometry. Such results have been applied         of such a system is the set of all points whose coordin-
extensively in computational geometry and in com-            ates consist of n−2 0 s and two 1 s. Notice, however, that
binatorial optimization in recent decades. Two good          these points all lie in the hyperplane of points whose
books on the subject are Pach and Agarwal (1995) and         coordinates add up to 2. So this actually provides us
Matoušek (2002).                                             with an example in Rn−1 . Therefore, we have a simple
                                                             lower bound of n(n + 1)/2. Larman, Rogers, and Seidel
2.6   Tools                                                  matched this with an upper bound of (n + 1)(n + 4)/2.
                                                             They did this by associating with each point of such a
Many of the basic results in extremal combinatorics          set a polynomial in n variables, and by showing that
were obtained mainly by ingenuity and detailed rea-          these polynomials are linearly independent and all lie
soning. However, the subject has grown out of this           in a space of dimension (n + 1)(n + 4)/2. This has been
early stage: several deep tools have been developed          improved by Blokhuis to (n+1)(n+2)/2. He did this by
that have been essential to much of the recent progress      finding n + 1 further polynomials that lie in the same
in the area. In this subsection, we include a very brief     space in such a way that the augmented set of poly-
description of some of these tools.                          nomials is still linearly independent. More applications
   Szemerédi’s regularity lemma is a result in graph         of the dimension argument can be found in Graham,
theory that has numerous applications in various areas,      Grötschel, and Lovász (1995, chapter 31).
including combinatorial number theory, computational            Spectral techniques, that is, an analysis of eigen-
complexity, and, mainly, extremal graph theory. The          vectors and eigenvalues [I.3 §4.3](/part-01/fundamental-definitions), have been used
precise statement of the lemma, which can be found,          extensively in graph theory. The link comes through
for example, in Bollobás (1978), is somewhat technical.      the notion of an adjacency matrix of a graph G. This
The rough statement is that the vertex set of any large      is defined to be the matrix A with entries au, v for
graph can be partitioned into a constant number of           each pair of (not-necessarily-distinct) vertices u and
pieces of nearly equal size, so that the bipartite graphs    v, where au, v = 1 if u and v are joined by an edge,
between most pairs of pieces behave like random bipar-       and au, v = 0 otherwise. This matrix is symmetric, and
tite graphs. The strength of this lemma is that it applies   therefore, by standard results in linear algebra, it has
to any graph, providing a rough approximation of its         real eigenvalues and an orthonormal basis [III.37](/part-03/bayesian-analysis) of
structure that enables one to extract a lot of informa-      eigenvectors. It turns out that there is a tight relation-
tion about it. A typical application is that a graph with    ship between the eigenvalues of the adjacency matrix
“few” triangles can be “well-approximated” by a graph        A and several structural properties of the graph G, and
with no triangles. More precisely, for any  > 0 there       these properties can often be useful in the study of

572                                                                                   IV. Branches of Mathematics

various extremal problems. Of particular interest is the    and information theory. It soon became clear that the
second largest eigenvalue of a regular graph. Suppose       so-called probabilistic method is a very powerful tool
that every vertex of a graph G has degree d. Then the       for proving results in discrete mathematics. The early
vector for which every entry is 1 is easily seen to be an   results combined combinatorial arguments with fairly
eigenvector with eigenvalue d, and this is the largest      elementary probabilistic techniques, but in recent years
eigenvalue. If all other eigenvalues have modulus much      the method has been greatly developed, and now it
smaller than d, then it turns out that G behaves in many    often requires one to apply much more sophisticated
ways like a random d-regular graph. In particular, the      techniques. A recent text dealing with the subject is
number of edges inside any set of k of the vertices is      Alon and Spencer (2000).
roughly the same (provided k is not too small) as one          The applications of probabilistic techniques in dis-
would expect with a random graph. It follows easily that    crete mathematics were initiated by Paul Erdős, who
any set of vertices that is not too big has many neigh-     contributed to the development of the method more
bors among the vertices outside that set. Graphs with       than anyone else. One can classify them into three
the latter property are called expanders [III.24](/part-03/expanders) and       groups.
have numerous applications in theoretical computer             The first deals with the study of certain classes of ran-
science. Constructing such graphs explicitly is not an      dom combinatorial objects, like random graphs or ran-
easy matter and was at one time a major open problem.       dom matrices. The results here are essentially results
Now, however, several constructions are known, based        in probability theory, although most of them are moti-
on algebraic tools. See chapter 9 of Alon and Spencer       vated by problems in combinatorics. A typical problem
(2000), and its references, for more details.               is the following: if we pick a graph “at random,” what
   The application of topological methods in the study      is the probability that it contains a Hamilton cycle?
of combinatorial objects such as partially ordered sets,       The second group consists of applications of the fol-
graphs, and set systems has already become part of the      lowing idea. Suppose you want to prove that a combi-
mathematical machinery commonly used in combina-            natorial structure exists with certain properties. Then
torics. An early example is Lovász’s proof of Kneser’s      one possible method is to choose a structure randomly
conjecture, mentioned in section 2.3. Another example       (from a probability distribution that you are free to
is a result of which the following is a representative      specify) and estimate the probability that it has the
special case. Suppose you have a piece of string with       properties you want. If you can show that this prob-
10 red beads, 15 blue beads, and 20 yellow beads on         ability is greater than 0, then such a structure exists.
it. Then, no matter what order the beads come in, you       Surprisingly often it is much easier to prove this than
can cut the string in at most 12 places and place the       it is to give an example of a structure that works. For
resulting segments of beaded string into five piles, each    instance, is there a graph with large girth (meaning it
of which contains two red beads, three blue beads, and      has no short cycles) and large chromatic number? Even
four yellow beads. The number 12 is obtained by multi-      if “large” means “at least 7,” it is very hard to come up
plying 4, the number of piles minus 1, by 3, the number     with an example of such a graph. But their existence is
of colors. The general case of this result was proved       a fairly easy consequence of the probabilistic method.
by Alon using a generalization of Borsuk’s theorem.            The third group of applications is perhaps the most
Many additional examples of topological proofs appear       striking of all. There are many examples of statements
in Graham, Grötschel, and Lovász (1995, chapter 34).        that appear to be completely deterministic (even when
                                                            one is used to the idea of using probability to give exis-
         3   Probabilistic Combinatorics                    tence proofs) but that nevertheless yield to probabilis-
                                                            tic reasoning. In the remainder of this section we shall
A wonderful development took place in twentieth-cen-
                                                            briefly describe some typical examples of each of these
tury mathematics when it was realized that it is some-
                                                            three kinds of application.
times possible to use probabilistic reasoning to prove
mathematical statements that do not have an obvious
                                                            3.1   Random Structures
probabilistic nature. For example, in the first half of
the century, Paley, Zygmund, Erdős, Turán, Shannon,        The systematic study of random graphs was initiated
and others used probabilistic reasoning to obtain strik-    by Erdős and Rényi in 1960. The most common way
ing results in analysis, number theory, combinatorics,      of defining a random graph is to fix a probability p and

IV.19.   Extremal and Probabilistic Combinatorics                                                                   573

then to join each pair of vertices with an edge with prob-   of this result is based on the so-called second moment
ability p, with all the choices made independently. The      method: one estimates the expectation and the variance
resulting graph is denoted G(n, p). (Formally speaking,      of the number of cliques of a given size contained in
G(n, p) is not a graph but a probability distribution,       G(n, p), and applies well-known inequalities of Markov
but one often talks about it as though it is a graph that    and chebyshev [VI.45](/part-06/pafnuty-chebyshev-18211894).
has been produced in a random way.) Given any prop-             The chromatic number of the random graph G(n, p)
erty, such as “contains no triangles,” we can study the      is also highly concentrated. Its typical behavior for val-
probability that G(n, p) has that property.                  ues of p that are bounded away from 0 was deter-
   A striking discovery of Erdős and Rényi was that         mined by Bollobás. A more general result, in which p is
many properties of graphs “emerge very suddenly.”            allowed to tend to 0 as n → \infty, was proved by Shamir,
Some examples are “contains a Hamilton cycle,” “is           Spencer, Łuczak, Alon, and Krivelevich. In particular, it
                                                                                                 1
not planar,” and “is connected.” These properties are        can be shown that for every α < 2 and every integer-
                                                                                          α
                                                             valued function r (n) < n , there exists a function
all monotone, which means that if a graph G has the
property and you add an edge to G, then the resulting        p(n) such that the chromatic number of G(n, p(n)) is
graph still has the property. Let us take one of these       precisely r (n) almost surely. However, determining the
properties and define f (p) to be the probability that        precise degree of concentration of the chromatic num-
the random graph G(n, p) has it. Because the prop-           ber of G(n, p), even in the most basic and important
                                                                        1
erty is monotone, f (p) increases as p increases. What       case p = 2 (in which all labeled graphs on n vertices
Erdős and Rényi discovered was that almost all of this      occur with equal probability), remains an intriguing
increase happens in a very short time. That is, f (p) is     open problem.
almost 0 for small p and then suddenly changes very             Many additional results on random graphs can be
rapidly and becomes almost 1.                                found in Janson, Łuczak, and Ruciński (2000).
   Perhaps the most famous and illustrative example of
this swift change is the sudden appearance of the so-        3.2   Probabilistic Constructions
called giant component. Let us look at G(n, p) when          One of the first applications of the probabilistic method
p has the form c/n. If c < 1, then with high prob-           in combinatorics was a lower bound given by Erdős
ability all the connected components of G(n, p) have         for the Ramsey number R(k, k), which was defined in
size at most logarithmic in n. However, if c > 1, then       section 2.2. He proved that if
G(n, p) almost certainly has one component of size lin-                           
                                                                                   n 1−(k)
ear in n (the giant component), while all the rest have                               2    2 < 1,
                                                                                   k
logarithmic size. This is related to the phenomenon of
phase transitions in mathematical physics, which are         then R(k, k) > n. That is, there is a red/blue coloring
                                                             of the edges of the complete graph on n vertices such
discussed in probabilistic models of critical phe-
                                                             that no clique of size k is completely red or completely
nomena [IV.25]. A result of Friedgut shows that the
                                                             blue. Notice that the number n = 2 k/2 ! satisfies the
phase transition for a graph property that is “global,”
                                                             above inequality for all k ⩾ 3, so Erdős’s result gives an
in a sense that can be made precise, is sharper than the
                                                             exponential lower bound for R(k, k). The proof is sim-
one for a “local” property.
                                                             ple: if you color the edges randomly and independently,
   Another interesting early discovery in the study of
                                                             then the probability that any fixed set of k vertices has
random graphs was that many of the basic parameters                                                        k
                                                             all its edges of the same color is twice 2−(2) . Thus, the
of graphs are highly “concentrated.” A striking exam-
                                                             expected number of cliques with this property is
ple that illustrates what this means is the fact that, for                            
any fixed value of p and for most values of n, almost                                  n 1−(k)
                                                                                          2   2 .

all graphs G(n, p) have the same clique number. That                                  k
is, there exists some r (depending on p and n) such          If this is less than 1, then there must be at least one col-
that with high probability, when n is large, the clique      oring for which there are no cliques with this property,
number of G(n, p) is equal to r . Such a result cannot       and the result is proved.
hold for all n, for continuity reasons, but in the excep-       Note that this proof is completely nonconstructive,
tional cases there is still some r such that the clique      in the sense that it merely proves the existence of
number is almost certainly equal either to r or to r + 1.    such a coloring, but gives no efficient way of actually
In both cases, r is roughly 2 log n/ log(1/p). The proof     constructing one.

574                                                                                       IV. Branches of Mathematics

   A similar computation yields a solution for the tour-        so ch(G) must be at least as big as χ(G). One might
nament problem mentioned in section 1.1. If the results         expect ch(G) to be equal to χ(G), since it seems as
of the tournament are random, then the probability, for         though using different lists of k colors for different
any particular k teams, that no other team beats them           vertices would make it easier to find a proper coloring
all is (1 − (1/2 k ))n−k . From this it follows that if          than using the same k colors for all vertices. However,
                    
                    n         1 n−k                             this turns out to be far from true. It can be proved that
                          1− k        < 1,                      for any constant c there is a constant C such that any
                    k        2
                                                                graph with average degree at least C has choice num-
then there is a nonzero probability that for every choice
                                                                ber at least c. Such a graph might easily be bipartite
of k teams, there is another team that beats them all.
                                                                (and therefore have chromatic number 2), so it follows
In particular, it is possible for this to happen. If n is
                                                                that ch(G) can be much bigger than χ(G). Somewhat
larger than about k2 2 k log 2, then the above inequality
                                                                surprisingly, the proof of this result is probabilistic.
holds.
                                                                   An interesting application of this fact concerns a
  Probabilistic constructions have been very power-
                                                                graph that arises in Ramsey theory. Its vertices are
ful in supplying lower bounds for Ramsey numbers.
                                                                all the points in the plane, with two vertices joined
Besides the bound for R(k, k) mentioned above, there is
                                                                by an edge if and only if the distance between them
a subtle probabilistic proof, due to Kim, that R(3, k) ⩾
                                                                is 1. The choice number of this graph is infinite, by the
ck2 / log k, for some c > 0. This is known to be tight up
                                                                above result, but the chromatic number is known to be
to a constant factor, as proved by Ajtai, Komlós, and
                                                                between 4 and 7.
Szemerédi, who also used probabilistic methods.
                                                                   A typical problem in Ramsey theory asks for a sub-
3.3   Proving Deterministic Theorems                            structure of some kind that is entirely colored with
                                                                one color. Its cousin, discrepancy theory, merely asks
Suppose that you color the integers with k colors. Let us       that the numbers of times the colors are used are not
call a set S multicolored if all k colors appear in S. Straus   too close to each other. Probabilistic arguments have
conjectured that for every k there is an m with the fol-        proved extremely useful in numerous problems of this
lowing property: given any set S with m elements, there         general kind. For example, Erdős and Spencer proved
is a coloring of the integers with k colors such that all       that in any red/blue coloring of the edges of the com-
translates of S are multicolored. This conjecture was           plete graph Kn there is a subset V0 of vertices such that
proved by Erdős and Lovász. The proof is probabilistic,        the difference between the number of red edges inside
and applies a tool called the Lovász local lemma, which,        V0 and the number of blue edges inside V0 is at least
unlike many probabilistic techniques, allows one to             cn3/2 , for some absolute constant c > 0. This problem
show that certain events hold with nonzero probabil-            is a convincing manifestation of the power of proba-
ity even when this probability is extremely small. The          bilistic methods, since they can be used in the other
assertion of this lemma, which has numerous addi-               direction as well, to prove that the result is tight up to
tional applications, is, roughly, that for any finite col-       a constant factor. Additional examples of such results
lection of “nearly independent” low-probability events,         can be found in Alon and Spencer (2000).
there is a positive probability that none of the events
holds. Note that the statement of Straus’s conjecture
                                                                4   Algorithmic Aspects and Future Challenges
has nothing to do with probability, and yet its proof
relies on probabilistic arguments.                              As we have seen, it is one matter to prove that a cer-
   A graph G is k-colorable, as we have said, if you can        tain combinatorial structure exists, and quite another
properly color its vertices with k colors. Suppose now          to construct an example. A related question is whether
that instead of trying to use k colors in total, you have       an example can be generated by means of an effi-
a separate list of k colors for each vertex, and this           cient algorithm [IV.20 §2.3](/part-04/computational-complexity), in which case we call it
time you want to find a proper coloring of G where               explicit. This question has become increasingly impor-
each vertex gets a color from its own list. If you can          tant because of the rapid development of theoret-
always do so, no matter what the lists are, then G is           ical computer science, which has close connections
called k-choosable, and the smallest k for which G is           with discrete mathematics. It is particularly interest-
k-choosable is called the choice number ch(G). If all           ing when the structures in question have been proved
the lists are the same, then one obtains a k-coloring,          to exist by means of probabilistic arguments. Efficient

