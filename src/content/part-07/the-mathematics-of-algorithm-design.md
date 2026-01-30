# The Mathematics of Algorithm Design

VII . $5$ .

The Mathematics of Algorithm Design

most convenient route can be consistent with macroscopic behavior described in terms of a function minimization. And the simple, local rules that control how packets are transmitted through the Internet can correspond to a maximizing of aggregate utility across the entire network. One thought-provoking difference is that, where as the microscopic rules governing physical systems are fixed, for engineered systems such as transport or communication networks we may be able to choose the microscopic rules so as to achieve the macroscopic consequences we judge desirable.

Further Reading

Beckmann, M., C. B. Mc Guire, and C. B. Winsten. 1956 . Studies in the Economics of Transportation. Cowles Commission Monograph. New Haven, CT: Yale University Press. Braess, D. 1968 . Über ein Paradox on aus der Verkehrsplanung. Unternehmenfors chung $12$ : $258 - 68$ . Cohen, J. E. 1988 . The counter intuitive in conflict and cooperation. American Scientist $76$ : $576 - 84$ . Department for Transport. 2004 . Feasibility study of road pricing in the UK. Available from www.dft.gov.uk. Jacobson, V. 1988 . Congestion avoidance and control. Computer Communication Review 18(4) : $314 - 29$ .
Kelly, F. P. 1991 . Network routing. Philosophical Transactions of the Royal Society of London $A337$ : $343 - 67$ . . 2001 . Mathematical modeling of the Internet. In Mathematics Unlimited -- 2001 and Beyond, edited by B. Engquist and W. Schmid, $pp.685 - 702$ . Berlin: Springer. Low, S. H., F. Paganini, and J. C. Doyle. 2002 . Internet congestion control. IEEE Control Systems Magazine $22$ : $28 - 43$ . Wardrop, J. G. 1952 . Some theoretical aspects of road traffic research. Proceedings of the Institute of Civil Engineers $1$ : $325 - 78$ . VII . $5$ The Mathematics of Algorithm

Design

Jon Kleinberg

$1$

The Goals of Algorithm Design

When computer science began to emerge as a subject at universities in the $1960s$ and $1970s$ , it drew some amount of puzzlement from the practitioners of more established fields. Indeed, it is not initially clear why computer science should be viewed as a distinct academic discipline. The world a bounds with novel technologies, but we do not generally create a separate field around each one; rather, we tend to view them

$871$

as by-products of existing branches of science and engineering. What is special about computers? Viewed in retrospect, such debates highlighted an important issue: computer science is not so much about the computer as a specific piece of technology as it is about the more general phenomenon of computation itself, the design of processes that represent and manipulate information. Such processes turn out to obey their own inherent laws, and they are performed not only by computers but by people, by organizations, and by systems that arise in nature.
We will refer to these computational processes as algorithms. For the purposes of our discussion in this article, one can think of an algorithm informally as a step-by-step sequence of instructions, expressed in a stylized language, for solving a problem. This view of algorithms is general enough to capture both the way a computer processes data and the way a person performs calculations by hand. For example, the rules for adding and multiplying numbers that we learn as children are algorithms; the rules used by an airline company for scheduling flights constitute an algorithm;
and the rules used by a search engine like Google for ranking Web pages constitute an algorithm. It is also fair to say that the rules used by the human brain to identify objects in the visual field constitute a kind of algorithm, though we are currently a long way from understanding what this algorithm looks like or how it is implemented on our neural hardware. A common theme here is that one can reason about all these algorithms with out recourse to specific computing devices or computer programming languages, instead expressing them using the language of mathematics.
In fact, the notion of an algorithm as we now think of it was formalized in large part by the work of mathematical logicians in the $1930s$ , and algorithmic reasoning is implicit in the past several millennia of mathematical activity. (For example, equation-solving methods have always tended to have a strong algorithmic flavor; the geometric constructions of the ancient Greeks were inherently algorithmic as well .) Today, the mathematical analysis of algorithms occupies a central position in computer science;
reasoning about algorithms independently of the specific devices on which they run can yield insight into general design principles and fundamental constraints on computation. At the same time, computer-science research struggles to keep two diverging views in focus: this more abstract view that formulates algorithms mathematically, and the more applied view that the public

872

generally associates with the field, the one that seeks
to develop applications such as Internet search engines,
electronic banking systems, medical imaging software,
and the host of other creations we have come to expect
from computer technology. The tension between these
two views means that the field’s mathematical formu-
la tions are continually being tested against their imple-
mentation in practice; it provides novel avenues for
mathematical notions to influence widely used appli-
ca tions; and it some times leads to new mathematical
problems motivated by these applications.
   The goal of this short article is to illustrate this
balance between the mathematical formalism and the
motivating applications of computing. We begin by
building up to one of the most basic definitional ques-
tions in this vein: how should we formulate the notion
of efficient computation?

To make the discussion of efficiency more concrete, and
to illustrate how one might think about an issue like
this, we first discuss two representative problems—
both fundamental in the study of algorithms—that are
similar in their formulation but very different in their
computational difficulty.
   The first in this pair is the traveling salesman prob-
lem (TSP), which is defined as follows. We imagine a
salesman contemplating a map with n cities (he is cur-
rently located in one of them). The map gives the dis-
tance between each pair of cities, and the salesman
wishes to plan the shortest possible tour that visits all n   the same set of cities used for part (a).
cities and returns to the starting point. In other words,
we are seeking an algorithm that takes as input the set
of all distances among pairs of cities, and produces a
tour of minimum total length. Figure 1(a) depicts the
optimal solution to a sample input instance of the TSP;
the circles represent the cities, the dark lines (with
lengths labeling them) connect cities that the sales-
man visits consecutively on the tour, and the lighter
lines connect all the other pairs of cities, which are not    ers constituting the cities, and the distances derived
visited consecutively.
   A second problem is the minimum spanning tree
problem (MSTP). Here we imagine a construction firm
with access to the same map of n cities, but with a dif-
ferent goal in mind. They wish to build a set of roads
connecting certain pairs of the cities on the map, so
that after these roads are built there is a route from
each of the n cities to each other one. (A key point
here is that each road must go directly from one city

VII. The Influence of Mathematics
24
(a)
8                                     12
10
14
22
(b)
12
8
20
10
7
2   Two Representative Problems
11
Figure 1 Solutions to instance of (a) the traveling salesman
problem and (b) the minimum spanning tree problem, on
the same set of points. The dark lines indicate the pairs
of cities that are connected by the respective optimal solu-
tions, and the lighter lines indicate all pairs that are not
connected.
to another.) The goal is to build such a road network
as cheaply as possible—in other words, using as little
total road material as possible. Figure 1(b) depicts the
optimal solution to the instance of the MSTP defined by
Both of these problems have a wide range of practi-
cal applications. The TSP is a basic problem concerned
with sequencing a given set of objects in a “good” order;
it has been used for problems that run from planning
the motion of robotic arms drilling holes on printed cir-
cuit boards (where the “cities” are the locations where
the holes must be drilled) to ordering genetic markers
on a chromosome in a linear sequence (with the mark-
from probabilistic estimates of proximity). The MSTP
is a basic issue in the design of efficient communica-
tion networks; this follows the motivation given above,
with fiber-optic cable acting in the role of “roads.” The
MSTP also plays an important role in the problem of
clustering data into natural groupings. Note, for exam-
ple, how the points on the left-hand side of figure 1(b)
are joined to the points on the right-hand side by a
relatively long link; in clustering applications, this can

VII . $5$ .

The Mathematics of Algorithm Design

be taken as evidence that the left and right points form natural groupings. It is not hard to come up with an algorithm for solving the TSP. We first list every possible way of ordering the cities (other than the starting city, which is fixed in advance). Each ordering defines a tour--the salesman could visit the cities in this order and then return to the start--and for each ordering we could compute the total length of the tour, by traversing the cities in this order and summing the distances from each city to the next.
As we perform this calculation for all possible orders, we keep track of the order that yields the smallest total distance, and at the end of the process we return this tour as the optimal solution. While this algorithm does solve the problem, it is extremely inefficient. There are $n - 1$ cities other than the starting point, and any possible sequence of them defines a tour, so we need to consider $(n - 1)(n - 2)(n - 3)$ · · · $(3)(2)(1) = (n - 1)$ ! possible tours. Even for $n = 30$ cities, this is an astronomically large quantity;
on the fastest computers we have today, running this algorithm to completion would take longer than the life expectancy of the Earth. The difficulty is that the algorithm we have just described is performing a brute-force search: the “search space” of possible solutions to the TSP is very large, and the algorithm is doing nothing more than plowing its way through this entire space, considering every possible solution. For most problems, there is a comparably inefficient algorithm that simply performs a brute-force search.
Things tend to get interesting when one finds a way to improve significantly on this brute-force approach. The MSTP provides a nice example of how such an improvement can happen. Rather than considering all possible road networks on the given set of cities, suppose we try the following myopic, “greedy” approach to the MSTP. We sort all the pairs of cities in order of increasing distance, and then work through the pairs in this order. When we get to a pair of cities, say A and B, we test if there is already a way to travel from A to B in the collection of roads constructed thus far.
If there is, then it would be superfluous to build a direct road from A to B--our goal, remember, is just to make sure every pair is connected by some sequence of roads, and A and B are already connected in this case. But if there is no way to get from A to B using what has already been built, then we construct the direct road from A to B. (As an example of this reasoning, note that the potential road of length $14$ in figure $1$ (a) would not get built by this MSTP algorithm; by the time this direct

$873$

route is considered, its endpoints are already joined by the sequence of two shorter roads of length $7$ and $11$ , as depicted in figure $1$ (b).) It is not at all obvious that the resulting road network should have the minimum possible cost, but in fact this is true. In other words, one can prove a theorem that says, essentially, “On every input, the algorithm just described produces an optimal solution.” The payoff from this theorem is that we now have a way to compute an optimal road network by an algorithm that is much, much more efficient than brute-force search:
it simply needs to sort the pairs of cities by their distances, and then make a single pass through this sorted list to decide which roads to build. This discussion has provided us with a fair amount of insight into the nature of the TSP and the MSTP. Rather than experimenting with actual computer programs, we described algorithms in words, and made claims about their performance that could be stated and proved as mathematical theorems. But what can we abstract from these examples if we want to talk about computational efficiency in general?

$3$

Computational Efficiency

Most interesting computational problems share the following feature with the TSP and the MSTP: an input of size n implicitly defines a search space of possible solutions whose size grows exponentially with n. One can appreciate this explosive growth rate as follows: if we simply add one to the size of the input, the time required to search the entire space increases by a multiplicative factor. We would prefer algorithms to scale more reasonably: their running times should only increase by a multiplicative factor when the input itself increases by a multiplicative factor.
Running times that are bounded by a polynomial function of the input size--in other words, proportional to n raised to some fixed power--exhibit this property. For example, if an algorithm requires at most $n^{2}$ steps on an input of size n, then it requires at most (2 n)2 = 4 n2 steps on an input twice as large. In part because of arguments like this, computer scientists in the $1960s$ adopted polynomial time as a working definition of efficiency: an algorithm is deemed to be efficient if the number of steps it requires on an input of size n grows like n raised to a fixed power.
Using the concrete notion of polynomial time as a surrogate for the fuzzier concept of efficiency is the kind of modeling decision that ultimately succeeds

874

or fails based on its utility in guiding the develop-
ment of real algorithms. And in this regard, polyno-
mial time has turned out to be a definition of surprising   rithms is an active topic of research, drawing on tech-
power in practice: problems for which one can develop
a polynomial-time algorithm have turned out in gen-
eral to be highly tractable, while those for which we
lack polynomial-time algorithms tend to pose serious
challenges even for modest input sizes.
   A concrete mathematical formulation of efficiency
provides a further benefit: it becomes possible to pose,    problems.
in a precise way, the conjecture that certain problems
cannot be solved by efficient algorithms. The TSP is a
natural candidate for such a conjecture; after decades
of failed attempts to find an efficient algorithm for
the TSP, one would like to be able to prove a theo-
rem that says, “There is no polynomial-time algorithm
that finds an optimal solution to every instance of the     efficient algorithm exists. While this explains our diffi-
TSP.” A theory known as np-completeness [IV.20 §4](/part-04/computational-complexity)
provides a unifying framework for thinking about such
questions; it shows that a large class of computational    actually confronted by such a problem in practice?
problems, containing literally thousands of naturally
arising problems (including the TSP), are equivalent
with respect to polynomial-time solvability: there is an   One of these is approximation: for problems like the
efficient algorithm for one if and only if there is an
efficient algorithm for all. It is a major open problem
to decide whether or not these problems have efficient
algorithms; the deeply held sense that they do not has     solution almost as good as the optimal one. The design
become the P versus NP conjecture, which has begun
to appear on lists of the most prominent problems in
mathematics.
   Like any attempt to make an intuitive notion math-
ematically precise, polynomial time as a definition of
efficiency in practice begins to break down around
its boundaries. There are algorithms for which one
can prove a polynomial bound on the running time,
but which are hopelessly inefficient in practice. Con-
versely, there are well-known algorithms (such as the
standard simplex method [III.84](/part-03/the-simplex-algorithm) for linear program-
ming) that require exponential running time on certain     TSP and the MSTP, a relationship between the respec-
pathological instances, but which run quickly on almost    tive optimal solutions to each problem on the same set
all inputs encountered in real life. And for computing     of cities.
applications that work with massive data sets, an algo-
rithm with a polynomial running time may not be effi-
cient enough; if the input is a trillion bytes long (as    recall that this is something we can compute efficiently.
can easily occur when dealing with snapshots of the
Web, for example), even an algorithm whose running
time depends quadratically on the input will be unus-
able in practice. For such applications, one generally     roads until he hits a dead end, that is, a city with no new
needs algorithms that scale linearly with the size of
the input—or, more strongly, that operate by “stream-

VII. The Influence of Mathematics
ing” through the input in one or two passes, solving the
problem as they go. The theory of such streaming algo-
niques from information theory, Fourier analysis, and
other areas. None of this means that polynomial time
is losing its relevance to algorithm design—it is still
the standard benchmark for efficiency—but new com-
puting applications tend to push the limits of current
definitions, and in the process raise new mathematical
4   Algorithms for Computationally
Intractable Problems
In the previous section we discussed how researchers
have identified a large class of natural problems, in-
clud ing the TSP, for which it is strongly believed that no
culties in solving these problems optimally, it leaves
open a natural question: what should we do when
There are a number of different strategies for ap-
pro a ching such computationally intractable problems.
TSP that involve choosing an optimal solution from
among many possibilities, we could try to formulate
an efficient algorithm that is guaranteed to produce a
of such approximation algorithms is an active area of
research; we can see a basic example of this process by
considering the TSP. Suppose we are given an instance
of the TSP, specified by a map with distances, and we
set ourselves the task of constructing a tour whose total
length is at most twice that of the shortest tour. At first
this goal seems a bit daunting: since we do not know
how to compute the optimal tour (or its length), how
will we guarantee that the solution we produce is short
enough? It turns out, however, that this can be done
by exploiting an interesting connection between the
Consider an optimal solution to the MSTP on the
given set of cities, consisting of a network of roads;
Now, the salesman interested in finding a short tour
for these cities can use this optimal road network to
visit the cities as follows. Starting at one city, he follows
roads exiting it. He then backs up, retracing his steps
until he gets to a junction with a road he has not yet

VII.5.   The Mathematics of Algorithm Design

taken, and he proceeds down this new road. For exam-
ple, starting in the upper left corner of figure 1(b), the     in a number of cases, suggested novel mathematical
salesman would follow the road of length 8 and then
choose one of the roads of length 10 or 20; if he selects
the former, then after reaching the dead end he would
back up to this junction again and continue the tour by
following the road of length 20. A tour constructed in
this way traverses each road twice (once in each direc-
tion), so if we let m denote the total length of all roads    ity have also become fundamental to many areas of
in the optimal MSTP solution, we have found a tour of
length 2 m.
   How does this compare to t, the length of the best
possible tour? Let us first argue that t ⩾ m. This is
true because, in the space of all possible solutions to
the MSTP, one option is to build roads between cities
that the salesman visits consecutively in the optimal
TSP tour, for a total mileage of t; on the other hand, m
is the total length of the shortest possible road network,    ing about “character ization” problems in mathematics.
and hence t cannot be smaller than m. So we have con-
cluded that the optimal solution to the TSP has length
at least m. However, we have just exhibited an algo-
rithm that finds a tour of length 2 m, so, as we wanted,
we have an efficient way to find a tour that is at most
twice as long as the shortest one possible.
   People trying to solve large instances of com put a-
tion ally hard problems in practice frequently use algo-
rithms that have been observed empirically to give
nearly optimal solutions, even when no guarantees on
their performance have been proved. Local-search algo-
rithms form one widely used class of approaches like
this. A local-search algorithm starts with an initial solu-
tion and repeatedly modifies it by making some “local”
change to its structure, looking for a way to improve
its quality. In the case of the TSP, a local-search algo-
rithm would seek simple improving modifications to its
current tour; for example, it might look at sets of cities
that are visited consecutively and see if visiting them in
the opposite order would shorten the tour. Researchers
have drawn connections between local-search algo-
rithms and phenomena in nature; for example, just as
a large molecule contorts itself in space trying to find
a minimum-energy conformation, we can imagine the
TSP tour in a local-search algorithm modifying itself as
it tries to reduce its length. Determining how deeply
this analogy goes is an interesting research issue.

Many branches of mathematics have contributed to
aspects of algorithm design, and the issues raised

875
by the analysis of new algorithmic problems have,
questions.
Combinatorics and graph theory have been quali-
tatively transformed by the growth of computer sci-
ence, to the extent that algorithmic questions have
become thoroughly intertwined with the mainstream
of research in these areas. Techniques from probabil-
computer science: probabilistic algorithms draw power
from the ability to make random choices while they are
being executed, and probabilistic models of the input
to an algorithm can give one a more realistic view of
the problem instances that arise in practice. This style
of analysis provides a steady source of new questions
in discrete probability.
A computational perspective is often useful in think-
For example, the general issue of characterizing prime
numbers has an obvious algorithmic component: given
a number n as input, how efficiently can we determine
whether it is prime? (There exist algorithms that are
exponentially better than the approach of dividing n
√
by all numbers up to n: see computational number
theory [IV.3 §2](/part-04/computational-number-theory).) Problems in knot theory [III.44](/part-03/knot-polynomials),
such as the character ization of unknotted loops, have
a similar algorithmic side. Suppose we are given a cir-
cular loop of string in three dimensions (described as
a jointed chain of line segments), and it wraps around
itself in complicated ways. How efficiently can we deter-
mine whether it is truly knotted, or whether by moving
it around we can fully untangle it? We can ask this sort
of question in many similar mathematical contexts; it is
clear that these algorithmic issues are extremely con-
crete as problems, though they may lose part of the
original intent of the mathematicians who posed the
questions more generally.
Rather than attempting to enumerate the inter sec-
tion of algorithmic ideas with all the different branches
of mathematics, we conclude this article with two case
studies that involve the design of algorithms for partic-
ular applications, and the ways in which mathematical
ideas arise in each instance.
6   Web Search and Eigenvectors
5 Mathematics and Algorithm
As the World Wide Web grew in popularity through out
Design: Reciprocal Influences
the 1990 s, computer-science researchers grappled with
a difficult problem: the Web contains a vast amount of
useful information, but its anarchic structure makes

876

it very hard for users, unassisted, to find the specific
information they are looking for. Thus, early in the
Web’s history, people began to develop search engines
that would index the information on the Web, and pro-
duce relevant Web pages in response to user queries.
But of the thousands or millions of pages relevant to a
topic on the Web, which few should the search engine
present to a user? This is the ranking problem: how to
determine the “best” resources on a given topic. Note
the contrast with concrete problems like the TSP. There,    the end result. To establish this connection, we intro-
the goal (the shortest tour) was not in doubt; the diffi-     duce some notation. Each Web page is assigned two
culty was simply in computing an optimal solution effi-
ciently. For the search engine ranking problem, on the
other hand, formalizing the goal is a large part of the     ing its power as a voter for the highest-quality content.
challenge—what do we mean by the “best” page on a
topic? In other words, an algorithm to rank Web pages
is really providing a definition of the quality of a Web     newspaper to simultaneously serve as a good guide to
page as well as the means to evaluate this definition.
   The first search engines ranked each Web page based
purely on the text it contained. These approaches began     voting can now be viewed as follows: we update the
to break down as the Web grew, because they did
not take into account the quality judgments encoded
in the Web’s hyperlinks: in browsing the Web, we
often discover high-quality resources because they are
“endorsed” through the links they receive from other
pages. This insight led to a second generation of search    pages it points to (linking to high-quality content makes
engines that determined rankings using link analysis.
   The simplest such analysis would just count the num-
ber of links to a page: in response to the query “newspa-   define a matrix M with one row and one column for
pers,” for example, one could rank pages by the number
of in coming links they receive from other pages con-
taining the term—in effect, allowing pages containing
the term “newspapers” to vote on the result. Such a
scheme will generally do well for the top few items,
placing prominent news sites like The New York Times
and The Financial Times at the head of the list; beyond     we can now check that the updating of hub weights
this, however, it will quickly break down, favoring a
large number of highly linked but irrelevant sites.
   It is possible to make much more effective use of the     M T h updates the authority weights. (Here M T denotes
latent information in the links. Consider pages that link   the transpose of the matrix M.) Running these updates
to many of the sites ranked highly by this simple voting    n times each from starting vectors a0 and h0 , we
scheme; it is natural to expect that these are authored     obtain a = (M T (M(M T (M · · · (M T (Ma0 )) · · · )))) =
by people with a good sense for where the interesting
newspapers are, and so we could run the voting again,
this time giving more voting power to these pages that
selected many of the highly ranked sites. This revote
might elevate certain lesser-known newspapers favored
by Web-page authors who were more knowledgeable on
the topic; in response to the results of this revote, we    Hence this eigenvector is the stable set of authority
could further sharpen our weighting of the voters. This     weights toward which our updates are converging. By

VII. The Influence of Mathematics
“principle of repeated improvement” uses the informa-
tion contained in a set of page-quality estimates to pro-
duce a more refined set of estimates. If we perform
these refinements repeatedly, will they converge to a
stable solution?
In fact, this sequence of refinements can be viewed
as an algorithm for computing the principal eigen vec-
tor [I.3 §4.3](/part-01/fundamental-definitions) of a particular matrix; this both estab-
lishes the convergence of the process and characterizes
scores: an authority weight, measuring its quality as a
primary source on the topic; and a hub weight, measur-
Pages may score highly in one of these measures but
not in the other—one should not expect a prominent
other newspapers—but there is also nothing to pre-
vent a page from scoring well in both. One round of
authority weight of each page by summing the hub
weights of all pages that point to it (receiving links from
highly weighted voters makes you a better authority);
we then reweight all the voters, updating each page’s
hub weight by summing the authority weights of the
you a better hub).
How do eigenvectors come into this? Suppose we
each page under consideration; the (i, j) entry equals
1 if page i links to page j, and it equals 0 otherwise.
We encode the authority weights in a vector a, where
the coordinate ai is the authority weight of page i.
The hub weights can be similarly written as a vector h.
Using the definition of matrix–vector multiplication,
in terms of authority weights is simply the act of set-
ting h equal to Ma; correspondingly, setting a equal to
(M T M)n a0 . This is the power-iteration method for
computing the principal eigenvector of M T M, in which
we repeatedly multiply some fixed starting vector by
larger and larger powers of M T M. (As we do this, we
also divide all coordinates of the vector by a scaling
factor to prevent them from growing unboundedly.)

VII.5.   The Mathematics of Algorithm Design

completely symmetric reasoning, the hub weights are
converging toward the principal eigenvector of MM T .
  A related link-based measure is Page Rank, defined
by a different procedure that is also based on repeated
refinement. Instead of drawing a distinction between
the voters and the voted-on, one posits a single kind of    tributed computing is concerned with designing algo-
quality measure that assigns a weight to each page. A
current set of page weights is then updated by having
each page distribute its weight uniformly among the
pages it links to. In other words, receiving links from     experience long delays, some of them may fail in mid-
high-quality pages raises one’s own quality. This too
can be written as multiplication by a matrix, obtained
from M T by dividing each row’s entries by the num-
ber of out going links from the corresponding page;
repeated updates again converge to an eigenvector.
(There is a further wrinkle here: repeated updating in
this case tends to cause all weight to pool at “dead-end”   patterns of failure, that are “in distinguishable” from
pages that have no out going links and hence no where
to pass their weight. Thus, to obtain the Page Rank mea-     P will have the same view of each, simply because the
sure used in applications, one adds a tiny quantity ε > 0   differences in the runs did not affect any of the com-
in each iteration to the weight of each page; this is
equivalent to using a slightly modified matrix.)
  Page Rank is one of the main ingredients in the search     noticed that the two runs were different.
engine Google; hubs and authorities form the basis
for Ask’s search engine Teoma, as well as a num-
ber of other Web search tools. In practice, current
search engines (including Google and Ask) use highly
refined versions of these basic measures, often combin-
ing features of each; understanding how relevance and
quality measures are related to large-scale eigenvector     each run defines a set of three views, one held by each
computations remains an active research topic.

Thus far we have been discussing algorithms that run
on a single computer. As a concluding topic, we briefly
touch on a broad area in computer science concerned
with computations that are distributed over multiple
communicating computers. Here the problem of effi-
ciency is compounded by concerns over maintaining
coordination and consistency among the communicat-
ing processes.
  As a simple example illustrating these issues, con-
sider a network of automatic teller machines (ATMs).
When you with draw an amount of money x at one of
these ATMs, it must do two things: (1) notify a central     define.
bank computer to deduct x from your account; and
(2) emit the correct amount of money in physical bills.     mathematical ideas can appear unexpectedly in the
Now, suppose that between steps (1) and (2) the ATM
crashes so that you do not get your money; you would

877
like it to be the case that the bank does not subtract
x from your account anyway. Or suppose that the ATM
executes both of steps (1) and (2), but its message to the
bank is lost; the bank would like for x to be eventually
subtracted from your account anyway. The field of dis-
rithms that operate correctly in the presence of such
difficulties.
As a distributed system runs, certain processes may
computation, and some of the messages between them
may be lost. This leads to significant challenges in rea-
soning about distributed systems, because this pattern
of failures can cause each process to have a slightly
different view of the computation. It is easily possible
for there to be two runs of the system, with different
the point of view of some process P ; in other words,
munications that it received. This can pose a problem
if P ’s final output is supposed to depend on its having
A major advance in the study of such systems came
about in the 1990 s, when a connection was made to
techniques from algebraic topology. Consider for sim-
plicity a system with three processes, though every-
thing we say generalizes to any number of processes.
We consider the set of all possible runs of the system;
process. We now imagine the views associated with a
single run as the three corners of a triangle, and we
7   Distributed Algorithms
ing rule: for any two runs that are in distinguishable
to some process P , we paste the two corresponding
triangles together at their corners associated with P .
This gives us a potentially very complicated geometric
object, constructed by applying all these pasting oper-
ations to the triangles; we call this object the complex
associated with the algorithm. (If there were more than
three processes, we would have an object in a higher
number of dimensions.) While it is far from obvious,
researchers have been able to show that the correctness
of distributed algorithms can be closely connected with
the topological properties of the complexes that they
This is another powerful example of the way in which
study of algorithms, and it has led to new insights into
the limits of the distributed model of computation.