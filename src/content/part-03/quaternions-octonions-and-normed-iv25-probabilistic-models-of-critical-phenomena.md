# Quaternions, Octonions, and Normed            IV.25   Probabilistic Models of Critical Phenomena

IV.25.   Probabilistic Models of Critical Phenomena

a large critical Galton–Watson tree does not depend on
the offspring distribution. This is another example of
universality.
   This result and variants of it provide a lot of use-
ful information about the asymptotic behavior of large
trees. Many interesting functions of the tree can be
rewritten in terms of the contour function and by
Aldous’s theorem they will converge to similar func-
tions of the Brownian excursion, whose distribution can
be computed explicitly with the help of stochastic cal-
culus. To give just one example, this technique can be
used to calculate the limiting distribution of the height
of the tree θ n . Let the variance of the offspring distri-
bution be σ , and let us define the rescaled height of a
tree to be its original height multiplied by σ /2 n. The
probability that this is at least x turns out to converge,
as n gets large, to the quantity

Acknowledgments. The author is indebted to Gilles Stoltz
for his help with the simulations and to Gordon Slade for
his remarks on the first version of this article.
Further Reading
Aldous, D. 1993. The continuum random tree. III. Annals of
  Probability 21:248–89.
Bachelier, L. 1900. Théorie de la spéculation. Annales Scien-   sharpness of the transition is remarkable. How does it
  tifiques de l’École Normale Supérieure (3) 17:21–86.
Billingsley, P. 1968. Convergence of Probability Measures.
  New York: John Wiley.
Durrett, R. 1984. Brownian Motion and Martingales in Analy-
  sis. Belmont, CA: Wadsworth.
Einstein, A. 1956. Investigations on the Theory of the Brown-   rently under going intense development. Intertwined
  ian Movement. New York: Dover.
Revuz, D., and M. Yor. 1991. Continuous Martingales and
  Brownian Motion. New York: Springer.
Stroock, D. W., and S. R. S. Varadhan. 1979. Multi dimensional
  Diffusion Processes. New York: Springer.
Wiener, N. 1923. Differential space. Journal of Mathematical
  Physics Massachusetts Institute of Technology 2:131–74.
IV.25 Probabilistic Models of

1.1   Examples
A population can explode if its birth rate exceeds
its death rate, but otherwise it becomes extinct. The

657
nature of the population’s evolution depends critically
on which way the balance tips between adding new
members and losing old ones.
A porous rock with randomly arranged microscopic
pores has water spilled on top. If there are few pores,
the water will not percolate through the rock, but if
there are many pores, it will. Surprisingly, there is a
critical degree of porosity that exactly separates these
behaviors. If the rock’s porosity is below the critical
value, then water cannot flow completely through the
rock, but if its porosity exceeds the critical value, even
slightly, then water will percolate all the way through.
A block of iron placed in a magnetic field will become
magnetized. If the magnetic field is extinguished, then
√
the iron will remain magnetized if the temperature is
below the Curie temperature 770 ◦ C (1418 ◦ F), but not
if the temperature is above this critical value. It is strik-
. nfty

2
k=1
small, but actually vanishes.
The above are three examples of critical phenom-
ena. In each example, global properties of the sys-
tem change abruptly as a relevant parameter (fertility,
degree of porosity, or temperature) is varied through
a critical value. For parameter values just below the
critical value, the over all organization of the system is
quite different from how it is for values just above. The
occur so suddenly?
1.2   Theory
The mathematical theory of critical phenomena is cur-
with the science of phase transitions, it draws on ideas
from probability theory and statistical physics. The
theory is inherently probabilistic: each possible config-
uration of the system (e.g., a particular arrangement of
pores in a rock, or of the magnetic states of the individ-
ual atoms in a block of iron) is assigned a probability,
and the typical behavior of this ensemble of random
configurations is analyzed as a function of parameters
of the system (e.g., porosity or temperature).
Critical Phenomena
Gordon Slade
as universality, which, at present, is more of a phi-
1
universality refers to the fact that many essential fea-
tures of the transition at a critical point depend on
relatively few attributes of the system under consid-
eration. In particular, simple mathematical models can

$658$

capture some of the qualitative and quantitative features of critical behavior in real physical systems even if the models dramatically oversimplify the local interactions present in the real systems. This observation has helped to focus attention on particular mathematical models, among both physicists and mathematicians.
This essay discusses several models of critical phenomena that have attracted much attention from mathematicians, namely branching processes, the model of random networks known as the random graph, the percolation model, the Ising model of ferromagnetism, and the random cluster model. As well as having applications, these models are mathematically fascinating. Deep theorems have been proved, but many problems of central importance remain unsolved and tantalizing conjectures abound.

$2$

Branching Processes

Branching processes provide perhaps the simplest example of a phase transition. They occur naturally as a model of the random evolution of a population that changes in time as a result of births and deaths. The simplest branching process is defined as follows. Consider an organism that lives for a unit time and that reproduces immediately before death. The organism has two potential offspring, which we can regard as the “left” offspring and the “right” offspring.
At the moment of reproduction, the organism has either no offspring, a left but no right offspring, a right but no left offspring, or both a left and a right offspring. Assume that each of the potential offspring has a probability p of being born and that these two births occur independently. Here, the number p, which lies between $0$ and $1$ , is a measure of the population’s fecundity. Suppose that we start with a single organism at time zero, and that each descendant of this organism reproduces independently in the above manner.
A possible family tree is depicted in figure $1$ , showing all births that occurred. In this family tree, ten offspring were produced in all, but twelve potential offspring were not born, so the probability of this particular tree occurring is p10(1 - p)12 . If $p = 0$ , then no offspring are born, and the family tree always consists of the original organism only. If $p = 1$ , then all possible offspring are born, the family tree is the infinite binary tree, and the population always survives for ever. For intermediate values of p, the population may or may not survive for ever:
let $\theta$ (p)

IV. Branches of Mathematics

Figure $1 A$ possible family tree,

with probability p10(1 - p)12 .

denote the survival probability, that is, the probability that the branching process survives for ever when the fecundity is set at p. How does $\theta$ (p) interpolate between the two extremes $\theta(0) = 0$ and $\theta(1) = 1$ ?

$2$ . $1$

The Critical Point

Since an organism has each of two potential offspring independently with probability p, it has, on average, $2p$ offspring. It is natural to suppose that survival for all time will not occur if p $< \frac{1}{2}$ , since then each organism, on average, produces less than $1$ offspring. On the other hand, if $p > \frac{1}{2}$ , then, on average, organisms more than replace themselves, and it is plausible that a population explosion can lead to survival for all time. Branching processes have a recursive nature, not present in other models, that facilitates explicit computation.
Exploiting this, it is possible to show that the survival probability is given by ⎧ ⎪ if $p \le \frac{1}{2}$ , ⎪ ⎨ $0\theta(p) =1$

⎪

⎪

$1$

⎩ $2(2p - 1)$ if $p \ge {}^{2}$ .

$p_{1}$

The value $p = p^{c} = {}^{2}$ is $a$ critical value, at which the graph of $\theta$ (p) has a kink (see figure $2$ ). The interval p $<$ p c is referred to as subcritical, where as p $>$ p c is supercritical. Rather than asking for the probability $\theta$ (p) that the initial organism has infinitely many descendants, one could ask for the probability P k (p) that the number of descendants is at least k. If there are at least $k + 1$ descendants, then there are certainly at least k, so P k (p) decreases as k increases.
In the limit as k increases to infinity, P k (p) decreases to $\theta$ (p). In particular, when p $>$ p c , P k (p) approaches a positive limit as k approaches infinity, where as P k (p) goes to zero when p $\le$ p c . When p is strictly less than p c , it can be

$IV$ . $25$ .

Probabilistic Models of Critical Phenomena

$1\theta 01p = 012$

Figure $2$ The survival probability $\theta$ versus  p. shown that P k (p) goes to zero exponentially rapidly, but at the critical value itself we have

$2$

P k (p c) ∼ √ / $\pi k$

The symbol “∼” denotes asymptotic behavior, and means that the ratio of the left- and right-hand sides in the above formula goes to $1$ as k goes to infinity. √ In other words, $P^{k}(p^{c})$ behaves essentially like $2/ \pi k$ when k is large. There is a pronounced difference between the exponential decay of P k (p c) for p $<$ p c and the square-root

$1$

decay at $p^{c}$ . When $p = {}^{4}$ , family trees larger than $100$ are sufficiently rare that in practical terms they do not occur: the probability is less than $10 - 14$ . However, when $p = p$ c , roughly one in every ten trees will have size at least $100$ , and roughly one in a thousand will have size at least 1000000 . At the critical value, the process is poised between extinction and survival. Another important attribute of the branching process is the average size of a family tree, denoted χ (p). A calculation shows that ⎧

$1$

⎪

⎨

if $p < \frac{1}{2}$ ,

$χ(p) = 1 - 2p$

⎪

⎩ $\infty$

if $p \ge \frac{1}{2}$ .

In particular, the average family size becomes infinite

$1$

at the same critical value $p^{c} = {}^{2}$ above which the probability of an infinite family ceases to be zero. The graph of χ is shown in figure $3$ . At $p = p$ c , it may seem at first sight contradictory that family trees are always finite (since $\theta(p^{c}) = 0)$ and yet the average family size is infinite (since χ (p c) $= \infty$ ) . However, there is no inconsistency, and this combination, which occurs only at the critical point, reflects the slowness of the square-root decay of P k (p c).

$659$

χ

$1011p = 02$

Figure $3$ The average family size χ versus p.

$2$ . $2$

Critical Exponents and Universality

Some aspects of the above discussion are specific to twofold branching, and will change for a branching process with higher-order branching. For example, if each organism has not two but m potential offspring, again independently with probability p, then the average number of offspring per organism is mp and the critical probability $p^{c}$ changes to $1/m$ . Also, the formulas written above for the survival probability, for the probability of at least k descendants, and for the average family size must all be modified and will involve the parameter m.
However, the way that $\theta$ (p) goes to zero at the critical point, the way that P k (p c) goes to zero as k goes to infinity, and the way that χ (p) diverges to infinity as p approaches the critical point p c will all be governed by exponents that are independent of m. To be more specific, they behave in the following manner: as $p \to p^{c} +$ , $\theta(p)$ ∼ $C^{1}(p - p^{c})β$ , $P^{k}(p^{c})$ ∼ $C^{2}k - 1/δ$ , as $k \to \infty,- γ$

as $p \to p^{c} -$ .

χ( p  )  ∼ $C^{3}(p^{c} - p)$

,

Here, the numbers $C^{1}$ , $C^{2}$ , and $C^{3}$ are constants that depend on m. By contrast, the exponents β, δ, and γ take on the same values for every $m \ge 2$ . Indeed, those values are $β = 1$ , $δ = 2$ , and $γ = 1$ . They are called critical exponents, and they are universal in the sense that they do not depend on the precise form of the law that governs how the individual organisms reproduce. Related exponents will appear below in other models.

660

An active research field in discrete mathematics with
many applications is the study of objects known as
graphs [III.34]. These are used to model systems such
as the Internet, the World Wide Web, and highway net-
works. Mathematically, a graph is a collection of ver-
tices (which might represent computers, Web pages, or
cities) joined in pairs by edges (physical connections
between computers, hyperlinks between Web pages,
highways). Graphs are also called networks, vertices are
also called nodes or sites, and edges are also called links
or bonds.
3.1   The Basic Model of a Random Graph
A major subarea of graph theory, initiated by Erdős and
Rényi in 1960, concerns the properties that a graph typ-
ically has when it has been generated randomly. A nat-
ural way to do this is to take n vertices and for each
pair to decide randomly (by the toss of a coin, say)
whether it should be linked by an edge. More generally,
one can choose a number p between 0 and 1 and let
p be the probability that any given pair is linked. (This     the average degree of each vertex, ε is a measure of
would correspond to using a biased coin to make the
decisions.) The properties of random graphs come into
their own when n is large, and of particular interest is
the fact that there is a phase transition.
3.2   The Phase Transition
If x and y are vertices in a graph, then a path from x
to y is a sequence of vertices that starts with x and
ends with y in such a way that neighboring terms of
the sequence are joined by edges. (If the vertices are
represented by points and the edges by lines, then a
path is a way of getting from x to y by traveling along
the lines.) If x and y are joined by a path, then they
are said to be connected. A component, or connected
cluster, in a graph is what you obtain if you take a vertex
together with all the other vertices that are connected
to it.
   Any graph decomposes naturally into its connected
clusters. These will, in general, have different sizes (as     cal phase, where p > pc , there is a “giant cluster” whose
measured by the number of vertices), and given a graph
it is interesting to know the size of its largest cluster,    graph (see figure 4).
which we shall denote by N. If we are considering a
random graph with n vertices, then the value of N will
depend on the multitude of random choices made when
the graph was generated, and thus N is itself a ran-
dom variable. The possible values of N are everything

IV. Branches of Mathematics
3 Random Graphs
and every cluster consists of a single vertex, to n, when
there is just one connected cluster consisting of all the
vertices. In particular, N = 1 when p = 0, and N = n
when p = 1. At a certain point between these extremes,
N under goes a dramatic jump.
It is possible to guess where the jump might take
place, by considering the degree of a typical vertex x.
This means the number of neighbors of x, that is, other
vertices that are directly linked to x by a single edge.
Each vertex has n − 1 potential neighbors, and for each
one the probability that it is an actual neighbor is p,
so the expected degree of any given vertex is p(n − 1).
When p is less than 1/(n − 1), each vertex has, on aver-
age, less than one neighbor, where as when p exceeds
1/(n − 1), it has, again on average, more than one. This
suggests that pc = 1/(n−1) will be a critical value, with
N being small when p is below pc , and large when p is
above pc .
This is indeed the case. If we set pc = 1/(n − 1) and
write p = pc (1 + ε), with ε a fixed number between
−1 and +1, then ε = p(n − 1) − 1. Since p(n − 1) is
how much the average degree differs from 1. Erdős and
Rényi showed that, in an appropriate sense, as n goes
to infinity,
⎧
⎪
⎪ 2ε −2 log n if ε < 0,
⎪
⎨
N ∼ An2/3
⎪
⎪
⎪
⎩2εn          if ε > 0.
The A in the above formula is not a constant but a cer-
tain random variable that is independent of n (the dis-
tribution of which we have not specified here). When
ε = 0 and n is large, the formula will tell us, for any
a < b, the approximate probability that N lies between
an2/3 and bn2/3 . To put it another way, A is the limiting
distribution of the quantity n−2/3 N when ε = 0.
There is a marked difference between the behavior of
the functions log n, n2/3 , and n, for large n. The small
clusters present for p < pc correspond to what is called
a subcritical phase, where as in the so-called supercriti-
size is of the same order of magnitude as the entire
It is interesting to consider the “evolution” of the ran-
dom graph, as p is increased from subcritical to super-
critical values. (Here one can imagine more and more
edges being randomly added to the graph.) A remark-
able coalescence occurs, in which many smaller clusters

IV.25.

Figure 4 The largest cluster (black) and second largest     other quantity that does so is the probability that a
cluster (dots) in random graphs with 625 vertices. These    random graph is connected, meaning that there is a
clusters have sizes (a) 17 and 11 and (b) 284 and 16. The   single connected cluster that contains all the n ver-
hundreds of edges in the graphs are not clearly shown.
rapidly merge into a giant cluster whose size is pro-
portion al to the size of the entire system. The coales-     following sense. If p = pconn (1 + ε) for some fixed
cence is thorough, in the sense that in the supercritical
phase the giant cluster dominates everything: indeed,
the second-largest cluster is known to have asymptotic
size only 2ε −2 log n, which makes it far smaller than
the giant cluster.
3.3    Cluster Size
For branching processes, we defined the quantity χ(p)
to be the average size of the family tree spawned by an     of this sort. Other examples include the absence of any

Probabilistic Models of Critical Phenomena
(a)
spring being born was p. By analogy, for the random
graph it is natural to take an arbitrary vertex v and
define χ(p) to be the average size of the connected
cluster containing v. Since all the vertices play iden-
tical roles, χ(p) is independent of the particular choice
of v. If we fix a value of ε, set p = pc (1 + ε), and let n
tend to infinity, it turns out that the behavior of χ(p)
is described by the formula
⎧
⎪
⎪ 1/|ε| if ε < 0,
⎪
⎨
χ(p) ∼ cn1/3 if ε = 0,
⎪
⎪
⎪
⎩4ε2 n if ε > 0,
where c is a constant. Thus the expected cluster size
is independent of n when ε < 0, grows like n1/3 when
p = 34 pc = 0.0012
p = pc , and is much larger—indeed, of the same order
of magnitude n as the entire system—when ε > 0.
(b)
To continue the analogy with branching processes,
let Pk (p) denote the probability that the cluster con-
taining the arbitrary vertex v consists of at least k ver-
tices. Again this does not depend on the particular
choice of v. In the subcritical phase, when p = pc (1+ε)
for some fixed negative value of ε, the probability Pk (p)
is essentially independent of n and is exponentially
small in k. Thus, large clusters are extremely rare. How-
ever, at the critical point p = pc , Pk (p) decays like
. qrt{a} multiple of 1/ k (for an appropriate range of k).
This much slower square-root decay is similar to what
happens for branching processes.
3.4   Other Thresholds
p = 54 pc = 0.0020                 It is not only the largest cluster size that jumps. An-
tices. For what values of the edge-probability p is this
likely? It is known that the property of being connected
has a sharp threshold, at pconn = (1/n) log n, in the
negative ε, then the probability that the graph is con-
nected approaches 0 as n → . nfty. If on the other hand ε
is positive, then the probability approaches 1. Roughly
speaking, if you add edges randomly, then the graph
suddenly changes from being almost certainly not con-
nected to almost certainly connected as the proportion
of edges present moves from just below pconn to just
above it.
There is a wide class of properties with thresholds

662

isolated vertex (a vertex with no incident edge), and the
presence of a Hamiltonian cycle (a closed loop that vis-
its every vertex exactly once). Below the threshold, the
random graph almost certainly does not have the prop-
erty, where as above the threshold it almost certainly
does. The transition occurs abruptly.
The percolation model was introduced by Broadbent
and Hammersley in 1957 as a model of fluid flow in
a porous medium. The medium contains a network of
randomly arranged microscopic pores through which
fluid can flow. A d-dimensional medium can be mod-
eled with the help of the infinite d-dimensional lat-
tice Zd , which consists of all points x of the form
(x1 , . . . , xd ), where each xi is an integer. This set can
be made into a graph in a natural way if we join each
point to the 2 d points that differ from it by ±1 in
one coordinate and are the same in the others. (So,
for example, in Z2 the neighbors of (2, 3) are the four
points (1, 3), (3, 3), (2, 2), and (2, 4).) One thinks of the
edges as representing all pores potentially present in
the medium.
   To model the medium itself, one first chooses a
porosity parameter p, which is a number between 0
and 1. Each edge (or bond) of the above graph is then
retained with probability p and deleted with probability
1 − p, with all choices independent. The retained edges
are referred to as “occupied” and the deleted ones as
“vacant.” The result is a random subgraph of Zd whose
edges are the occupied bonds. These model the pores
actually present in a macroscopic chunk of the medium.
   For fluid to flow through the medium there must be a
set of pores connected together on a macroscopic scale.
This idea is captured in the model by the existence of
an infinite cluster in the random subgraph, that is, a
collection of infinitely many points all connected to one
another. The basic question is whether or not an infinite
cluster exists. If it does, then fluid can flow through

IV. Branches of Mathematics
Figure 5 Bond-percolation configurations on a 14 . imes 14 piece of the square lattice Z2
for p = 0.25, p = 0.45, p = 0.55, p = 0.75. The critical value is pc = 12 .
the medium on a macroscopic scale, and otherwise it
cannot. Thus, when an infinite cluster exists, it is said
that “percolation occurs.”
Percolation on the square lattice Z2 is depicted in
figure 5. Percolation in a three-dimensional physical
medium is modeled using Z3 . It is instructive, and
mathematically interesting, to think how the model’s
4   Percolation                            behavior might change as the dimension d is varied.
For d = 1, percolation will not occur unless p = 1.
The simple observation that leads to this conclusion is
the following. Given any particular sequence of m con-
secutive edges, the probability that they are all occu-
pied is pm , and if p < 1, then this goes to zero as
m goes to infinity. The situation is quite different for
d ⩾ 2.
4.1   The Phase Transition
For d ⩾ 2, there is a phase transition. Let θ(p) denote
the probability that any given vertex of Zd is in an
infinite connected cluster. (This probability does not
depend on the choice of vertex.) It is known that for
d ⩾ 2 there is a critical value pc , depending on d, such
that θ(p) is zero if p < pc and positive if p > pc . The
exact value of pc is not known in general, but a special
symmetry of the square lattice allows for a proof that
1
pc = 2 when d = 2.
Using the fact that θ(p) is the probability that any
particular vertex lies in an infinite cluster, it can be
shown that when θ(p) > 0 there must be an infinite
connected cluster some where in Zd , while when θ(p) =
0 there will not be one. Thus, percolation occurs when
p > pc but not when p < pc , and the system’s behavior
changes abruptly at the critical value. A deeper argu-
ment shows that when p > pc there must be exactly one
infinite cluster; infinite clusters cannot coexist on Zd .
This is analogous to the situation in the random graph,
where one giant cluster dominates when p is above the
critical value.

$IV$ . $25$ .

Probabilistic Models of Critical Phenomena Let χ (p) denote the average size of the connected cluster containing a given vertex. Certainly χ (p) is infinite for p $>$ p c , since then there is a positive probability that the given vertex is in an infinite cluster. It is conceivable that χ (p) could be infinite also for some values of p less than p c , since infinite expectation is in principle compatible with $\theta(p) = 0$ . However, it is a nontrivial and important theorem of the subject that this is not the case:
χ (p) is finite for all p $<$ p c and diverges to infinity as p approaches p c from below. Qualitatively, the graphs of $\theta$ and χ have the appearance depicted for the branching process in figures $2$ and $3$ , although the critical value will be less than $\frac{1}{2}$ for $d \ge 3$ . There is, however, a caveat. It has been proved that $\theta$ is continuous in p except possibly at p c , and right-continuous for all p. It is widely believed that $\theta$ is equal to zero at the critical point, so that $\theta$ is continuous for all p and percolation does not occur at the critical point.
But proofs that $\theta(p^{c}) = 0$ are currently known only for $d = 2$ , for $d \ge 19$ , and for certain related models when $d > 6$ . The lack of a general proof is all the more intriguing since it has been proved for all $d \ge 2$ that there is zero probability of an infinite cluster in any half-space when $p = p$ c . This still allows for an infinite cluster with an unnatural spiral behavior, for example, though it is believed that this does not occur.

$4$ . $2$

Critical Exponents

Assuming that $\theta$ (p) does in fact approach zero as p is decreased to p c , it is natural to ask in what manner this occurs. Similarly, we can ask in what manner χ (p) diverges as p increases to p c . Deep arguments of theoretical physics, and substantial numerical experimentation, have led to the prediction that this, as well as other, behavior is described by certain powers known as critical exponents. In particular, it is predicted that there are asymptotic formulas as $p \to p^{c} +$ , β $\theta(p)$ ∼ $C(p - p^{c})$ , χ (p) ∼ C (p c  -  p)  -  γ , as $p \to p^{c} -$ .
The critical exponents here are the powers β and γ, which depend, in general, on the dimension d. (The letter C is used to denote a constant whose precise value is inessential and may change from line to line .) When p is less than p c , large clusters have exponentially small probabilities. For example, in this case the probability P k (p) that the size of the connected cluster containing any given vertex exceeds k is known to decay exponentially as $k \to \infty.$ At the critical point, this exponential decay is predicted to be replaced by a power-law

$663$

decay involving a number δ, which is another critical exponent:

$P^{k}(p^{c})$ ∼ $Ck - 1/δ$

as $k \to \infty.$

Also, for p $<$ p c , the probability τ p (x , y) that two vertices $x$ and $y$ are in the same connected cluster decays exponentially like $e - |x - y|/ξ($ p  )  as the separation between $x$ and $y$ is increased. The number ξ (p) is called the correlation length. (Roughly speaking, τ p (x , y) starts to become small when the distance between $x$ and $y$ exceeds ξ (p).) The correlation length is known to diverge as p increases to p c , and the predicted form of this divergence is ξ (p) ∼ C (p c  -  p)  -  ν as $p \to p^{c} -$ , where ν is a further critical exponent.
As before, the decay at the critical point is no longer exponential. It is predicted that τ p c (x , y) decays instead via a power law, traditionally written in the form

$1$

τ p c (x , y) ∼ C

, as $|x - y| \to \infty,|x - y|^{d} - {}^{2} + η$

for yet another critical exponent η.

The critical exponents describe large-scale aspects of the phase transition and thus provide information relevant to the macroscopic scale of the physical medium. However, in most cases they have not been rigorously proved to exist. To do so, and to establish their values, is a major open problem in mathematics, one of central importance for percolation theory. In view of this, it is important to be aware of a prediction from theoretical physics that the exponents are not independent, but are related to each other by what are called scaling relations.
Three scaling relations are $γ = (2 - η)$ ν , $γ + 2β = β ( δ + 1)$ , $d\nu = γ + 2β$ .

$4$ . $3$

Universality

Since the critical exponents describe large-scale behavior, it seems plausible that they might depend only weakly on changes in the fine structure of the model. In fact, it is a further prediction of theoretical physics, one that has been verified by numerical experiments, that the critical exponents are universal, in the sense that they depend on the spatial dimension d but on little else.
For example, if the two-dimensional lattice $Z^{2}$ is replaced by another two-dimensional lattice, such as the triangular or the hexagonal lattice, then the values of the critical exponents are believed not to change. Another modification, for general $d \ge 2$ , is to replace the standard percolation model with the so-called

$664$

spread-out model. In the spread-out model, the edge set of Z d is enriched so that now two vertices are joined whenever they are separated by a distance of L or less, where $L \ge 1$ is $a$ fixed finite parameter, usually taken to be large. Universality suggests that the critical exponents for percolation in the spread-out model do not depend on the parameter L. The discussion so far falls within the general framework of bond percolation, in which it is bonds (edges) that are randomly occupied or vacant.
A much-studied variant is site percolation, where now it is vertices, or “sites,” that are independently “occupied” with probability p and “vacant” with probability $1 - p.$ The connected cluster of a vertex x consists of the vertex x itself together with those occupied vertices that can be reached by a path that starts at x, travels along edges in the graph, and visits only occupied vertices. For $d \ge 2$ , site percolation also experiences a phase transition.
Although the critical value for site percolation is different from the critical value for bond percolation, it is a prediction of universality that site and bond percolation on Z d have the same critical exponents. These predictions are mathematically very intriguing: the large-scale properties of the phase transition described by critical exponents appear to be insensitive to the fine details of the model, in contrast to features like the value of critical probability p c , which depends heavily on such details.
At the time of writing, the critical exponents have been proved to exist, and their values rigorously computed, only for certain percolation models in dimensions $d = 2$ and $d > 6$ , while a general mathematical understanding of universality remains an elusive goal.

$4$ . $4$

Percolation in Dimensions $d > 6$

Using a method known as the lace expansion, it has been proved that the critical exponents exist, with values

$1η = 0$ ,

$β = 1$ ,

$γ = 1$ ,

$δ = 2$ ,

$\nu = {}^{2}$ ,

for percolation in the spread-out model when $d > 6$ and L is large enough. The proof makes use of the fact that vertices in the spread-out model have many neighbors. For the more conventional nearest-neighbor model, where bonds have length $1$ and there are fewer neighbors per vertex, results of this type have also been obtained, but only in dimensions $d \ge 19$ . The above values of β, γ, and δ are the same as those observed previously for branching processes. A branching process can be regarded as percolation on

IV. Branches of Mathematics

an infinite tree rather than on Z d , and thus percolation in dimensions $d > 6$ behaves like percolation on a tree. This is an extreme example of universality, in which the critical exponents are also independent of the dimension, at least when $d > 6$ . If the above values for the exponents are substituted into the scaling relation $d\nu = γ + 2β$ , the result is $d = 6$ . Thus, the scaling relation (called a hyperscaling relation because of the presence of the dimension d in the equation) is false for $d > 6$ .
However, this particular relation is predicted to apply only in dimensions $d \le 6$ . In lower dimensions, the nature of the phase transition is affected by the manner in which critical clusters fit into space, and the nature of the fit is partly described by the hyperscaling relation, in which d appears explicitly. The critical exponents are predicted to take on different values below $d = 6$ . Recent advances have shed much light on the situation for d $= 2$ , as we shall see in the next section.

$4$ . $5$

Percolation in Dimension $24$ . $5$ . $1$

Critical Exponents and Schramm-Loewner

Evolution

For site percolation on the two-dimensional triangular lattice it has been shown, in a major recent achievement, that the critical exponents exist and take the remarkable values

$5439145γ = {}^{18}$ ,

$δ = {}^{5}$ ,

$\nu = {}^{3}$ ,

$η = {}^{24}$ .

$β = {}^{36}$ ,

The scaling relations play an important role in the proof, but an essential additional step requires understanding of a concept known as the scaling limit. To get some idea of what this is, let us look at the so-called exploration process, which is depicted in figure $6$ . In figure $6$ , hexagons represent vertices of the triangular lattice. Hexagons in the bottom row have been colored gray on the left half and white on the right half. The other hexagons have been chosen to be gray or

$1$

white independently with probabilit$y^{2}$ , which is the critical probability for site percolation on the triangular lattice. It is not hard to show that there is a path, also illustrated in figure $6$ , which starts at the bottom and all along its length is gray to the left and white to the right. The exploration process is this random path, which can be thought of as the gray $/$ white interface. The boundary conditions at the bottom force it to be infinite.
The exploration process provides information about the boundaries separating large critical clusters of different color, and from this it is possible to extract

IV.25.   Probabilistic Models of Critical Phenomena

information about critical exponents. It is the macro-
scopic large-scale structure that is essential, so inter-     ures, the limiting critical crossing probabilities are identi-
est is focused on the exploration process in the limit
as the spacing between vertices of the triangular lattice
goes to zero. In other words, what does the curve in
figure 6 typically look like in the limit as the size of the
hexagons shrinks to zero? It is now known that this
limit is described by a newly discovered stochastic
process [IV.24 §1](/part-04/stochastic-processes) called the Schramm–Loewner evolu-
tion (SLE) with parameter six, or SLE6 for short. The
SLE processes were introduced by Schramm in 2000,
and have become a topic of intense current research
activity.
   This is a major step forward in the understanding
of two-dimensional site percolation on the triangular
lattice, but much remains to be done. In particular, it is
still an unsolved problem to prove universality. There is
currently no proof that critical exponents exist for bond
percolation on the square lattice Z2 , although universal-
ity predicts that the critical exponents for the square
lattice should also take on the interesting values listed
above.
4.5.2    Crossing Probabilities
In order to understand two-dimensional percolation, it
is very helpful to understand the probability that there
will be a path from one side of a region of the plane
to another, especially when the parameter p takes its
critical value pc .
   To make this idea precise, fix a simply connected
region in the plane (i.e., a region with no holes), and
fix two arcs on the boundary of the region. The crossing
probability (which depends on p) is the probability that

665
Figure 6 The exploration process.
Figure 7 The two regions are related by a conformal trans-
formation, depicted in the upper figures. In the lower fig-
cal.
there is an occupied path inside the region that joins
one arc to the other, or more accurately the limit of
this probability as the lattice spacing between vertices
is reduced to zero. For p < pc , clusters with diameter
much larger than the correlation length ξ(p) (measured
by the number of steps in the lattice) are extremely
rare. However, to cross the region, a cluster needs to be
larger and larger as the lattice spacing goes to zero. It
follows that the crossing probability is 0. When p > pc ,
there is exactly one infinite cluster, from which it can
be deduced that if the lattice spacing is very small, then
with very high probability there will be a crossing of the
region. In the limit, the crossing probability is 1. What
if p = pc ? There are three remarkable predictions for
critical crossing probabilities.
The first prediction is that critical crossing proba-
bilities are universal, which is to say that they are the
same for all finite-range two-dimensional bond- or site-
percolation models. (As always, we are talking about
the limiting probabilities as the lattice spacing goes
to zero.)
The second prediction is that the critical cross-
ing probabilities are conformally invariant. A confor-
mal transformation is a transformation that locally
preserves angles, as shown in figure 7. The remark-
able riemann mapping theorem [V.34](/part-05/the-uniformization-theorem) states that
any two simply connected regions that are not the
entire plane are related by a conformal transformation.
The statement that the critical crossing probability is

$666$

s

Side $= 1$

Figure $8$ For the equilateral triangle of unit side length, Cardy’s formula asserts that the limiting critical crossing probability shown is simply the length s. conformally invariant means that if one region with two specified boundary arcs is mapped to another region by a conformal transformation, then the critical crossing probability between the images of the arcs in the new region is identical to the crossing probability of the original region. (Note that the underlying lattice is not transformed;
this is what makes the prediction so striking .) The third prediction is Cardy’s explicit formula for critical crossing probabilities. Assuming conformal invariance, it is only necessary to give the formula for one region. For an equilateral triangle, Cardy’s formula is particularly simple (see figure $8$ ). In 2001 , in a celebrated achievement, Smirnov studied critical crossing probabilities for site percolation on the triangular lattice.
Using the special symmetries of this particular model, Smirnov proved that the limiting critical crossing probabilities exist, that they are conformally invariant, and that they obey Cardy’s formula. To prove universality of the crossing probabilities remains a tantalizing open problem.

$5$

The Ising Model

In 1925 , Ising published an analysis of a mathematical model of ferromagnetism which now bears his name (although it was in fact Ising’s doctoral supervisor Lenz who first defined the model). The Ising model occupies a central position in theoretical physics, and is of considerable mathematical interest.

$5$ . $1$

Spins, Energy, and Temperature

In the Ising model, a block of iron is regarded as a collection of atoms whose positions are fixed in a crystalline lattice. Each atom has a magnetic “spin,” which is assumed for simplicity to point upward or downward.

IV. Branches of Mathematics

Each possible configuration of spins has an associated energy, and the greater this energy is, the less likely the configuration is to occur. On the whole, atoms like to have the same spin as their immediate neighbors, and the energy reflects this: it increases according to the number of pairs of neighboring spins that are not aligned with each other. If there is an external magnetic field, also assumed to be directed up or down, then there is an additional contribution:
atoms like to be aligned with the external field, and the energy is greater the more spins there are that are not aligned with it. Since configurations with higher energy are less likely, spins have a general tendency to align with each other, and also to align with the direction of the external magnetic field. When a larger fraction of spins points up than down, the iron is said to have a positive magnetization. Although energy considerations favor configurations with many aligned spins, there is a competing effect.
As the temperature increases, there are more random thermal fluctuations of the spins, and these diminish the amount of alignment. Whenever there is an external magnetic field, the energy effects predominate and there is at least some magnetization, however high the temperature. However, when the external field is turned off, the magnetization persists only if the temperature is below a certain critical temperature. Above this temperature, the iron will lose its magnetization. The Ising model is a mathematical model that captures the above picture.
The crystalline lattice is modeled by the lattice Z d . Vertices of Z d represent atomic positions, and the atomic spin at a vertex x is simply modeled by one of the two numbers $+ 1($ representing spin up) or $- 1$ (representing spin down). The particular number chosen at x is denoted σ x , and a collection of choices, one for each x in the lattice, is called a configuration of the Ising model. The configuration as a whole is denoted simply as σ .
(Formally , a configuration σ is a function from the lattice to the set  - 1 , $1$ .) Each configuration σ comes with an associated energy, defined as follows. If there is no external field, the energy of σ consists of the sum, taken over all pairs of neighboring vertices  x, y , of the quantity  -  σ x σ y . This quantity is $- 1$ if $σ^{x} = σ^{y}$ , and is $+ 1$ otherwise, so the energy is indeed larger the more nonaligned pairs there are.
If there is a nonzero external field, modeled by a real number h, then the energy receives an additional contribution $-$ h σ x , which is larger the more spins there are with a different sign from that of h. Thus, in total, the energy E (σ) of a spin configuration

$IV$ . $25$ .

Probabilistic Models of Critical Phenomena σ is defined by E $(σ) = -σ^{x}σ^{y} - h$

σ x ,

x

x, y

where the first sum is over neighboring pairs of vertices, the second sum is over vertices, and h is a real number that may be positive, negative, or zero. The sums defining E (σ) actually make sense only when there are finitely many vertices, but one wishes to study the infinite lattice Z d . This problem is handled by restricting Z d to a large finite subset and later taking an appropriate limit, the so-called thermodynamic limit. This is a well-understood process that will not be described here.
Two features remain to be modeled, namely, the manner in which lower-energy configurations are “preferred,” and the manner in which thermal fluctuations can lessen this preference. Both features are handled simultaneously, as follows. We wish to assign to each configuration a probability that decreases as its energy increases. According to the foundations of statistical mechanics, the right way to do this is to make the probability proportional to the so-called Boltzmann factor e  -  E (σ)  /  T , where T is a nonnegative parameter that represents the temperature. Thus, the probability is

$1$

P $(σ) = e - E(σ)/ T$ ,

Z

where the normalization constant, or partition function, Z, is defined by $e - E(σ)/ T$ ,

$Z =$

σ

where the sum is taken over all possible configurations σ (again it is necessary to work first in a finite subset of Z d to make this precise). The reason for this choice of Z is that once we divide by it then we have ensured that the probabilities of the configurations add up to one, as they must. With this definition, the desired preference for low energy is achieved, since the probability of a given configuration is smaller when the energy of the configuration is larger.
As for the effect of the temperature, note that when T is very large, all the numbers $e - E(σ)/ T$ are close to $1$ , so all probabilities are roughly equal. In general, as the temperature increases the probabilities of the various configurations become more similar, and this models the effect of random thermal fluctuations. There is more to the story than energy, however. The Boltzmann factor makes any individual low-energy configuration much more likely than any individual highenergy configuration. However, the low-energy configurations have a high degree of alignment, so there are

$667$

far fewer of them than there are of the more randomly arranged high-energy configurations. It is not obvious which of these two competing considerations will predominate, and in fact the answer depends on the value of the temperature T in a very interesting way.

$5$ . $2$

The Phase Transition

For the Ising model with external field h and temperature T , let us choose a configuration randomly with the probabilities defined above. The magnetization M (h , T) is defined to be the expected value of the spin σ x at a given vertex x. Because of the symmetry of the lattice Z d , this does not depend on the particular vertex chosen. Accordingly, if the magnetization M (h , T) is positive, then spins have an over all tendency to be aligned in the positive direction, and the system is magnetized. The symmetry between up and down implies that M (  -  h , T) $= -$ M (h , T) (i . e .
, reversing the external field reverses the magnetization) for all h and T . In particular, when $h = 0$ , the magnetization must be zero. On the other hand, if there is a nonzero external field h, then configurations with spins that are aligned with h are overwhelmingly more likely (because their energy is lower), and the magnetization satisfies \{ | |$< 0$ if$h < 0$, | \{ M(h , $T) = 0$ if $h = 0$ , ⎪ ⎪ ⎪ ⎩ $> 0$ if $h > 0$ . What happens if the external field is initially positive and then is reduced to zero?
In particular, is the spontaneous magnetization, defined by M  +  (T)  =  lim M (h , T),

$h \to 0 +$

positive or zero? If M  +  (T) is positive, then the magnetization persists after the external field is turned off. In this case there will be a discontinuity in the graph of M versus $h$ at $h = 0$ . Whether or not this happens depends on the temperature T . In the limit as T is reduced to zero, a small difference in the energies of two configurations results in an enormous difference in their probabilities. When $h > 0$ and the temperature is reduced to zero, only the minimal energy configuration, in which all spins are $+ 1$ , has any chance of occurring.
This is the case no matter how small the external field becomes, so $M + (0) = 1$ . On the other hand, in the limit of infinitely high temperature, all configurations become equally likely and the spontaneous magnetization is equal to zero.

668

  M+(T)

   For dimensions d ⩾ 2, the behavior of M+ (T ) when T
lies between these two extremes is quite surprising. In
particular, it is not differentiable every where: there is a
critical temperature Tc , depending on the dimension,
such that the spontaneous magnetization is strictly
positive for T < Tc and zero for T > Tc , and it is at
T = Tc that different i ability fails. Schematic graphs of
the magnetization versus h and the spontaneous mag-
net ization versus T are shown in figure 9. What hap-
pens at the critical temperature itself is delicate. In all
dimensions except d = 3 it has been proved that there
is no spontaneous magnetization at the critical temper-
ature, which is to say that M+ (Tc ) = 0. It is believed that
this is true when d = 3 as well, but it remains an open
problem to prove it.
5.3
The phase transition for the Ising model is again de-
scribed by critical exponents. The critical exponent β,
given by

indicates how the spontaneous magnetization disap-
pears as the temperature increases toward the critical

IV. Branches of Mathematics
M(h, T )
temperature Tc . For T > Tc , the magnetic susceptibil-
T < Tc   ity, denoted χ(T ), is defined to be the rate of change of
T = Tc   M(h, T ) with respect to h, at h = 0. This partial deriva-
T > Tc   tive in h diverges as T approaches Tc from above, and
M+                                             the exponent γ is defined by
χ(T ) ∼ C(T − Tc )−γ ,    as T → Tc+ .
h
Finally, δ describes the manner in which the mag net i-
zation goes to zero as the external field is reduced to
zero at the critical temperature. That is,
M(h, Tc ) ∼ Ch1/δ ,     as h → 0+ .
These critical exponents, like those for percolation, are
predicted to be universal and to obey various scaling
1
relations. They are now understood mathematically in
all dimensions except d = 3.
5.4   Exact Solution for d = 2
In 1944, Onsager published a famous paper in which
0
T=0
model. His remarkable computation is a landmark in
Figure 9 Magnetization versus external field, and
spontaneous magnetization versus temperature.
nents could be calculated. As with two-dimensional
percolation, the exponents take interesting values:
1
β = 8,   γ = 4,     δ = 15.
5.5   Mean-Field Theory for d ⩾ 4
Two modifications of the Ising model are relatively easy
to analyze. One is to formulate the model on the infi-
nite binary tree, rather than on the integer lattice Zd .
Another is to formulate the Ising model on the so-called
“complete graph,” which is the graph consisting of n
vertices with an edge joining every pair of vertices, and
then take the limit as n goes to infinity. In the latter,
known as the Curie–Weiss model, each spin interacts
equally with all the other spins, or, put another way,
each spin feels the mean field of all the other spins. In
each of these modifications, the critical exponents take
Critical Exponents
1
β = 2,    γ = 1,    δ = 3.
Ingenious methods have been used to prove that the
Ising model on Zd has these same critical exponents
M+ (T ) ∼ C(Tc − T )β ,
in dimensions d ⩾ 4, although in dimension 4 there
remain unresolved issues concerning logarithmic cor-
rections to the asymptotic formulas.

$IV$ . $25$ .

Probabilistic Models of Critical Phenomena $6$ The Random-Cluster Model The percolation and Ising models appear to be quite different. A percolation configuration consists of a random subgraph of a given graph (usually a lattice as in the examples earlier), with edges included independently with probability p. A configuration of the Ising model consists of an assignment of values ± $1$ to spins at the vertices of a graph (again usually a lattice), with these spins influenced by energy and temperature.
In spite of these differences, in around 1970 Fortuin and Kasteleyn had the insight to observe that the two models are in fact closely related to each other, as members of a larger family of models known as the randomcluster model. The random-cluster model also includes a natural extension of the Ising model known as the Potts model. In the Potts model, spins at the vertices of a given graph G may take on any one of q different values, where q is an integer greater than or equal to $2$ . When $q = 2$ there are two possible spin values and the model is equivalent to the Ising model.
For general q, it is convenient to label the possible spin values as $1$ , $2$ , . . . , q. As before, a configuration of spins has an associated energy that is smaller when more spins are aligned. The energy associated with an edge is $- 1$ if the spins at the vertices joined by the edge are identical, and $0$ otherwise. The total energy E (σ) of a spin configuration σ , assuming no external field, is the sum of the energies associated with all edges. The probability of a particular spin configuration σ is again taken to be proportional to a Boltzmann factor, namely

$1 - E(σ)/ T$

P $(σ) =$

e

,

Z

where the partition function Z is once again there to ensure that the probabilities add up to $1$ . Fortuin and Kasteleyn noticed that the partition function of the Potts model on a finite graph G can be recast as $p|S|(1 - p)|GS|q^{n}(S)$ . S⊂G In this formula, the sum is over all subgraphs S that can be obtained by deleting edges from  G,|S| is the number of edges in S, | G S | is the number of edges deleted from G to obtain S, n (S) is the number of distinct connected clusters of S, and p is related to the temperature by $p = 1 - e - 1/T$ .
The restriction that q be an integer greater than or equal to $2$ is essential for the definition of the Potts

$669$

model, but the above sum makes good sense for any positive real value of q. The random-cluster model has the above sum as its partition function. Given any real number $q > 0$ , a configuration of the random-cluster model is a set S of occupied edges of the graph G, exactly like a configuration of bond percolation. However, in the random-cluster model we do not simply associate p with each occupied edge and $1 - p$ with each vacant edge. Instead, the probability associated with a configuration is proportional to $p|S|(1 - p)|GS|q^{n}(S)$ .
In particular, for the choice $q = 1$ , the random-cluster model is the same as bond percolation. Thus the randomcluster model provides a one-parameter family of models, indexed by q, which corresponds to percolation for $q = 1$ , to the Ising model for $q = 2$ , and to the Potts model for integer $q \ge 2$ . The random-cluster model has a phase transition for general $q \ge 1$ , and provides a unified setting and a rich family of examples.

$7$

Conclusion

The science of critical phenomena and phase transitions is a source of fascinating mathematical problems of real physical significance. Percolation is a central mathematical model in the subject. Often formulated on Z d , it can also be defined instead on a tree or on the complete graph, as a result of which it encompasses branching processes and the random graph. The Ising model is a fundamental model of the ferromagnetic phase transition. At first sight unrelated to percolation, it is in fact closely connected within the wider setting of the random-cluster model.
The latter provides a unified framework and a powerful geometric representation for the Ising and Potts models. Part of the fascination of these models is due to the prediction from theoretical physics that large-scale features near the critical point are universal. However, proofs often rely on specific details of a model, even when universality predicts that these details should not be essential to the results.
For example, the understanding of critical crossing probabilities and the calculation of critical exponents has been carried out for site percolation on the triangular lattice, but not for bond percolation on $Z^{2}$ . Although the progress for the triangular lattice is a triumph of the theory, it is not the last word. Universality remains a guiding principle but it is not yet a general theorem. In the physically most interesting case of dimension $3$ , a very basic feature of percolation and the Ising model is not understood at all: it has not yet been

$670$

proved that there is no percolation at the critical point and that the spontaneous magnetization is zero. Much has been accomplished but much remains to be done, and it seems clear that further investigation of models of critical phenomena will lead to highly important mathematical discoveries. Acknowledgments. The figures were produced by Bill Casselman, Department of Mathematics, University of British Columbia, and Graphics Editor of Notices of the American Mathematical Society.

Further Reading

Grimmett, $G. R. 1999$ . Percolation, $2nd$ edn. New York: Springer. . 2004 . The random-cluster model. In Probability on Discrete Structures, edited by H. Kesten, $pp.73 - 124$ . New York: Springer. Janson, S., T. Łuczak, and A. Ruciński. 2000 . Random Graphs. New York: John Wiley. Thompson, C. J. 1988 . Classical Equilibrium Statistical Mechanics. Oxford: Oxford University Press. Werner, W. 2004 . Random planar curves and Schramm Loewner evolutions. In Lectures on Probability Theory and Statistics. École d’Eté de Probabilités de Saint-Flour XXXII-- 2002 , edited by J. Picard.
Lecture Notes in Mathematics, volume 1840 . New York: Springer. $IV$ . $26$ High-Dimensional Geometry and Its Probabilistic Analogues

Keith Ball

$1$

Introduction

If you have ever watched a child blowing soap bubbles, then you cannot have failed to notice that the bubbles are, at least as far as the human eye can tell, perfectly spherical. From a mathematical perspective, the reason for this is simple. The surface tension in the soap solution causes each bubble to make its area as small as possible, subject to the constraint that it encloses a fixed amount of air (and cannot compress the air too much). The sphere is the surface of smallest area that encloses a given volume.
As a mathematical principle, this seems to have been recognized by the ancient Greeks, although fully rigorous demonstrations did not appear until the end of the nineteenth century. This and similar statements are known as “isoperimetric principles.” ${}^{1}1$ . The prefix “iso” means “equal.” The name “equal perimeter” refers to the two-dimensional formulation: if a disk and another region have equal perimeter, then the area of the other region cannot be larger than that of the disk.

IV. Branches of Mathematics

Figure $1$ A soap film has minimum area.

The two-dimensional form of the problem asks: what is the shortest curve that encloses a given area? The answer, as we might expect by analogy with the three dimensional case, is a circle. Thus, by minimizing the length of the curve we force it to have a great deal of symmetry: the curve should be equally curved every where along its length. In three or more dimensions, many different kinds of curvature [III.78](/part-03/ricci-flow) are used in different contexts. One, known as mean curvature, is the appropriate one for area-minimization problems.
The sphere has the same mean curvature at every point, but then it is pretty clear from its symmetry that the sphere would have the same curvature at every point whatever measure of curvature we used. More illustrative examples are provided by the soap films (much more varied than simple bubbles) that are a popular feature of recreational mathematics lectures: figure $1$ shows such a soap film stretched across a wire frame. The film adopts the shape that minimizes its area, subject to the constraint that it is bounded by the wire frame.
One can show that the minimal surface (the exact mathematical solution to the minimization problem) has constant mean curvature: its mean curvature is the same at every point. Isoperimetric principles turn up all over mathematics: in the study of partial differential equations, the calculus of variations, harmonic analysis, computational algorithms, probability theory, and almost every branch of geometry. The aim of the first part of this article is to describe a branch of mathematics, highdimensional geometry, whose starting point is the fundamental isoperimetric principle:
that the sphere is the surface of least area that encloses a given volume. The most remarkable feature of high-dimensional geometry is its intimate connection to the theory of probability: geometric objects in high-dimensional space exhibit many of the characteristic properties of random distributions. The aim of the second part of this article is to out line the links between the geometry and probability.

IV.26.   High-Dimensional Geometry and Its Probabilistic Analogues

So far we have discussed only two- and three-dimen-
sional geometry. Higher-dimensional spaces seem to
be impossible for humans to visualize but it is easy to
provide a mathematical description of them by extend-
ing the usual description of three-dimensional space
in terms of Cartesian coordinates. In three dimen-
sions, a point (x, y, z) is given by three coordin-
ates; in n-dimensional space, the points are n-tuples
(x1 , x2 , . . . , xn ). As in two and three dimensions, the
points are related to one another in that we can add two
of them together to produce a third, by simply adding
corresponding coordinates:

By relating points to one another, addition gives the
space some structure or “shape.” The space is not just
a jumble of unrelated points.
   To describe the shape of the space completely, we
also need to specify the distance between any two
points. In two dimensions,
from the origin is x 2 + y 2 by the Pythagorean theo-
rem (and the fact that the axes are perpendicular). Simi-
larly, the distance between two points (u, v) and (x, y)
is
In n dimensions we define the distance between points
(u1 , u2 , . . . , un ) and (x1 , x2 , . . . , xn ) to be
     

   Volume is defined in n-dimensional space roughly as
follows. We start by defining a cube in n dimensions.
The two- and three-dimensional cases, the square and
the usual three-dimensional cube, are very familiar. The
set of all points in the xy-plane whose coordinates are
between 0 and 1 is a square of side 1 unit (as shown in
figure 2), and, similarly, the set of all points (x, y, z) for
which x, y, and z are all between 0 and 1 is a unit cube.
In n-dimensional space the analogous cube consists of
those points whose coordinates are all between 0 and 1.
We stipulate that the unit cube has volume 1. Now, if
we double the size of a plane figure, its area increases
by a factor of 4. If we double a three-dimensional body,
its volume increases by a factor of 8. In n-dimensional
space, the volume scales as the nth power of size: so a
cube of side t has volume t n . To find the volume of a
more general set we try to approximate it by covering
it with little cubes whose total volume is as small as
possible. The volume of the set is calculated as a limit
of these approximate volumes.

671
2    High-Dimensional Spaces
(0,1)                        (1,1)
(0,0)
Figure 2 The unit square.
Whatever the dimension, a special geometric role is
(2, 3, . . . , 7) + (1, 5, . . . , 2) = (3, 8, . . . , 9).   played by the unit sphere: that is, the surface consist-
ing of all points that are a distance of 1 unit from
a fixed point, the center. As one might expect, the
corresponding solid sphere, or unit ball, consisting of
all points enclosed by the unit sphere, also plays a
special role. There is a simple relationship between
      the distance of a point (x, y)            the (n-dimensional) volume of the unit ball and the
(n − 1)-dimensional “area” of the sphere. If we let vn
denote the volume of the unit ball in n dimensions,
then the surface area is nvn . One way to see this is

(x − u)2 + (y − v)2 .                             greater than 1, say 1 + ε. This is pictured in figure 3. The
enlarged ball has volume (1 + ε)n vn and so the volume
of the shell between the two spheres is ((1+ε)n −1)vn .
Since the shell has thickness ε, this volume is approx i-
(x1 − u1 )2 + (x2 − u2 )2 + · · · + (xn − un )2 .
area is approximately
(1 + ε)n − 1
vn .
ε
By taking the limit as ε approaches 0 we obtain the
surface area exactly:
(1 + ε)n − 1
lim
ε→0       ε
One can check that this limit is nvn either by expanding
the power (1 + ε)n or by observing that the expression
is the formula for a derivative.
So far we have discussed bodies in n-dimensional
space with out being too precise about what kind of sets
we are considering. Many of the statements in this arti-
cle hold true for quite general sets. But a special role
is played in high-dimensional geometry by convex sets
(a set is convex if it contains the entire line segment
joining any two of its points). Balls and cubes are both
examples of convex sets. The next section describes
a fundamental principle which holds for very general

$672{}^{1} + ε1$

Figure $3$ An inflated ball.

sets but which is intrinsically linked to the notion of convexity.

$3$

The Brunn-Minkowski Inequality

The two-dimensional isoperimetric principle was essentially proved in 1841 by Steiner, although there was a technical gap in the argument which was filled later. The general (ndimensional) case was completed by the end of the nineteenth century. A couple of decades later a different approach to the principle, with far-reaching consequences, was found by hermann minkowski [VI.64](/part-06/hermann-minkowski-18641909) -- an approach which was inspired by an idea of Hermann Brunn. Minkowski considered the following way to add together two sets in n-dimensional space.
If C and D are sets, then the sum C  +  D consists of all points which can be obtained by adding a point of C to a point of D. Figure $4$ shows an example in which C is an equilateral triangle and D is a square centered at the origin. We place a copy of the square at each point of the triangle (some of these are illustrated) and the set C  +  D consists of all points that are included in all these squares. The out line of C  +  D is shown dashed. The Brunn-Minkowski inequality relates the volume of the sum of two sets to the volumes of the sets themselves.
It states that (as long as the two sets C and D are not empty) vol (C + D)1/n \ge vol (C)1/n + vol (D)1/n .

(1)

The inequality looks a bit technical, if only because the volumes appearing in the inequality are raised to the power $1/$ n . However, this fact is crucial. If each of C and D is a unit cube (with their edges aligned the same way), then the sum C  +  D is a cube of side $2$ : a cube twice as large. Each of C and D has volume $1$ while the volume of $C + D$ is $2^{n}$ . So, in this case, vol (C + D)1/n = 2

IV. Branches of Mathematics

Figure $4$ Adding two sets.

and each of vol (C)1/n and vol (D)1/n is equal to $1$ : the inequality ( $1$ ) holds with equality. Similarly, whenever C and D are copies of one another, the Brunn-Minkowski inequality holds with equality. If we omitted the exponents $1/$ n , the statement would still be true; in the case of two cubes, it is certainly true that $2^{n} \ge 1 + 1$ . But the statement would be extremely weak: it would give us almost no useful information.
The importance of the Brunn-Minkowski inequality stems from the fact that it is the most fundamental principle relating volume to the operation of addition, which is the operation that gives space its structure. At the start of this section it was explained that Minkowski’s formulation of Brunn’s idea provided a new approach to the isoperimetric principle. Let us see why. Let C be a compact set [III.9](/part-03/compactness-and-compactication) in R n whose volume is equal to that of the unit ball B.
We want to show that the surface area of C is at least n vol (B) since this is the surface area of the ball. We consider what happens to C if we add a small ball to it. An example (a right-angled triangle) is shown in figure $5$ : the dashed curve out lines the enlarged set we obtain by adding to C a copy of the ball B scaled by a small factor ε. This looks rather like figure $3$ above but here we do not expand the original set, we add a ball.
Just as before, the difference between C  +  εB and C is a shell around C of width ε, so we can express the surface area as a limit as ε approaches $0$ : vol $(C + εB) -$ vol  (  C  ). lim ε

$ε \to 0$

Now the Brunn-Minkowski inequality tells us that vol (C + εB)1/n \ge vol (C)1/n + vol ( εB)1/n .

$IV$ . $26$ .

High-Dimensional Geometry and Its Probabilistic Analogues

$C + εB$

ε

C

Figure $5$ An ε-enlargement.

The right-hand side of this inequality is vol (C)1/n + ε vol (B)1/n = (1 + ε) vol (B)1/n because vol (ε B)  =  ε n vol (B) and vol (C)  =  vol (B). So the surface area is at least

$(1 + ε)$ n vol $(B) -$ vol  (  C  ) 

lim

ε

$ε \to 0(1 + ε)$ n vol $(B) -$ vol  (  B  ) 

 =  lim / ε

$ε \to 0$

Again as in section $2$ , this limit is n vol (B) and we conclude that the surface of C has at least this area. Over the years, many different proofs of the Brunn Minkowski inequality have been found, and most of the methods have other important applications. To finish this section we shall describe a modified version of the Brunn-Minkowski inequality that is often easier to use than ( $1$ ). If we replace the set C  +  D by a scaled copy

$1$

half as large, 2 (C  +  D), then its volume is scaled by n and the nth root of this volume is scaled b$y^{1}$ .

$1/22$

Therefore, the inequality can be rewritten vol (. rac{1}{2}(C + D))1/n \ge . rac{1}{2} vol (C)1/n + . rac{1}{2} vol (D)1/n . √

$11$

Because of the simple inequality ${}^{2}x + {}^{2}y \ge xy$ for positive numbers, the right-hand side of this inequality is at least vol (C)1/n vol (D)1/n . It follows that

$1$

vol ({}2(C + D))1/n \ge vol (C)1/n vol (D)1/n and hence that vol $(\frac{1}{2}(C + D)) \ge$ vol  (  C  )  vol  (  D  ).

(2)

We shall elucidate a striking consequence of this inequality in the next section. The Brunn-Minkowski inequality holds true for very general sets in n-dimensional space, but for convex sets it is the beginning of a surprising theory that was initiated by Minkowski and developed in a remarkable way

$673$

D

C

Figure $6$ Expanding half a ball.

by Aleksandrov, Fenchel, and Blaschke, among others: the theory of so-called mixed volumes. In the $1970s$ Khovanskii and Teissier (using a discovery of D. Bernstein) found an astonishing connection between the theory of mixed volumes and the Hodge index theorem in algebraic geometry.

$4$

Deviation in Geometry

Isoperimetric principles state that if a set is reasonably large, then it has a large surface or boundary. The Brunn-Minkowski inequality (and especially the argument we used to deduce the isoperimetric principle) expands upon this statement by showing that if we start with a reasonably large set and extend it (by adding a small ball), then the volume of the new set is quite a lot bigger than that of the original. During the $1930s$ Paul Lévy realized that in certain situations, this fact can have very striking consequences.
To get an idea of how this works suppose that we have a compact set C inside the unit ball, whose volume is half that of the ball; for example, C might be the set pictured in figure $6$ . Now extend the set C by including all points of the ball that are within distance ε of C, much as we did when deducing the isoperimetric inequality (the dashed curve in figure $6$ shows the boundary of the extended set) . Let D denote the remainder of the ball (also illustrated). Then if c is a point in C and d is a point in D, we are guaranteed that $c$ and $d$ are separated by a distance of at least ε.
A simple two-dimensional argument, pictured in figure $7$ , shows that in this case the midpoint $\frac{1}{2}$ (c  +  d) cannot be too near the surface of the ball. In fact, its distance from the center is no more than $1 - \frac{1}{8}ε^{2}$ . So the set $\frac{1}{2}(C + D)$ lies inside the ball of radius $1 - \frac{1}{8}ε^{2}$ , whose volume is (1 - . rac{1}{8}ε2)n times the

$674$

c

ε

d

Figure $7 A$ two-dimensional argument.

volume of the ball v n . The crucial point is that if the exponent n is large and ε is not too small, the factor

1(1 - 8ε2)n is extremely small: in a space of high dimension, a ball of slightly smaller radius has very much smaller volume. In order to make use of this we apply inequality (2), which states that the volume of $\frac{1}{2}(C + D)$ is at least vol (C) vol (D). Therefore,

$1$

vol  (  C  )  vol (D) \le (1 - 8ε2)nvn or, equivalently,

$1$

vol  (  C  )  vol (D) \le (1 - 8ε2)2 nvn 2 . Since the volume of C is $\frac{1}{2}$ v n , we deduce that vol (D) \le 2(1 - . rac{1}{8}ε2)2 nvn . It is convenient to replace the factor (1 - . rac{1}{8}ε2)2 n by

$2$

a  (  pretty accurate) approximation $e - nε / {}^{4}$ , which is slightly easier to understand. We can then conclude that the volume vol (D) of the residual set D satisfies the inequality

$2$

vol $(D) \le 2e - nε / {}^{4}v^{n}$ .

(3)

If the dimension n is large, then the exponential fac$2$ tor $e - nε / {}^{4}$ is very small, as long as ε is a bit bigger √ than $1/ n.$ What this means is that only a small fraction of the ball lies in the residual set D. All but a small fraction of the ball lies close to C, even though some points in the ball may lie much farther from C. Thus, if we start with a set (any set) that occupies half the ball and extend it a little bit, we swallow up almost the entire ball.
With a little more sophistication, the same argument can be used to show that the surface of the ball, the sphere, has exactly the same property. If a set C occupies half the sphere, then almost all of the sphere is close to that set. This counter intuitive effect turns out to be characteristic of high-dimensional geometry. During the $1980s$ a startling probabilistic picture of high-dimensional

IV. Branches of Mathematics

space was developed from Lévy’s basic idea. This picture will be sketched in the next section. One can see why the high-dimensional effect has a probabilistic aspect if one thinks about it in a slightly different way. To begin with, let us ask ourselves a basic question: what does it mean to choose a random number between $0$ and $1$ ? It could mean many things but if we want to specify one particular meaning, then our job is to decide what the chance is that the random number will fall into each possible range a $\le$ x $\le$ b: what is the chance that it lies between $0$ . $12$ and $0$ .
$47$ , for example? For most people, the obvious answer is $0$ . $35$ , the difference between $0$ . $47$ and $0$ . $12$ . The probability that our random number lands in the interval $a \le x \le b$ will just be b  -  a, the length of that interval. This way of choosing a random number is called uniform. Equalsized parts of the range between $0$ and $1$ are equally likely to be selected. Just as we can use length to describe what is meant by a random number, we can use the volume measure in n-dimensional space to say what it means to select a random point of the n-dimensional ball.
We have to decide what the chance is that our random point falls into each subregion of the ball. The most natural choice is to say that it is equal to the volume of that subregion divided by the volume of the entire ball, that is, the proportion of the ball occupied by the subregion. With this choice of random point, it is possible to reformulate the high-dimensional effect in the following way. If we choose a subset C of the ball which has a $\frac{1}{2}$ chance of being hit by our random point, then the chance that our random point lies more than ε away from C is no

$2$

more than $2e - nε / {}^{4}$ .

To finish this section it will be useful to rephrase the geometric deviation principle as a statement about functions rather than sets. We know that if C is a set occupying half the sphere, then almost the entire sphere is within a small distance of C. Now suppose that f is a function defined on the sphere: f assigns a real number to each point of the sphere. Assume that f cannot change too rapidly as you move around the sphere: for example, that the values f (x) and f (y) at two points $x$ and $y$ cannot differ by more than the distance between $x$ and $y$.
Let M be the median value of f , meaning that f is at most M on half the sphere and at least M on the other half. Then it follows from the deviation principle that f must be almost equal to M on all but a small fraction of the sphere. The reason is that almost all of the sphere is close to the half where f is below M; so f cannot be much more than M except on

$IV$ . $26$ .

High-Dimensional Geometry and Its Probabilistic Analogues a small set. On the other hand, almost all of the sphere is close to the half where f is at least M; so f cannot be much less than M except on a small set. Thus, the geometric deviation principle says that if a function on the sphere does not vary too fast, then it must be almost constant on almost the entire sphere (even though there may be some points where it is very far from this constant value).

$5$

High-Dimensional Geometry

It was mentioned at the end of section $3$ that convex sets have a special significance in Minkowski’s theory relating volume to the additive structure of space. They also occur naturally in a large number of applications: in linear programming and partial differential equations, for example. Although convexity is a fairly restrictive condition for a body to satisfy, it is not hard to convince one self that convex sets exhibit considerable variety and that this variety seems to increase with the dimension. The simplest convex sets after the balls are cubes.
If the dimension is large, the surface of a cube looks very unlike the sphere. Let us consider, not a unit cube, but a cube of side $2$ whose center is the origin. The corners of the cube are points like (1, 1, . . ., 1) or (1, -1, -1, . . ., 1), whose coordinates are all equal to $1$ or $- 1$ , while the center of each face is a point like (1, 0, 0, . . ., 0) which has just one coordinate equal to √ $1$ or $- 1$ . The corners are at a distance $n$ from the center of the cube, while the centers of the faces are at distance $1$ from the origin.
Thus, the largest sphere that can be fitted inside the cube has radius $1$ , while the √ smallest sphere that encloses the cube has radius n (this is illustrated in figure $8$ ). √ When the dimension n is large, this ratio of n is also large. As one might expect, this gap between the ball and the cube is able to accommodate a wide variety of different convex shapes. Nevertheless, the probabilistic view of high-dimensional geometry has led to an understanding that, for many purposes, this enormous variety is an illusion: that in certain well-defined senses, all convex bodies behave like balls.
Probably the first discovery that pointed strongly in this direction was made by Dvoretzky in the late $1960s$ . Dvoretzky’s theorem says that every high-dimensional convex body has slices that are almost spherical. More precisely, if you specify a dimension (say ten) and a degree of accuracy, then for any sufficiently large dimension n, every n-dimensional convex body has a ten-dimensional slice that is in distinguishable from a ten-dimensional sphere, up to the specified accuracy.

675(1 , $1$ , ... , 1)1

. qrt{n}

(1 , $0$ , ... , 0)

Figure $8$ A ball in a box in a ball.

$r(\theta)0$

K

$\theta$

Figure $9$ The directional radius.

The proof of Dvoretzky’s theorem that is conceptually simplest depends upon the deviation principle described in the last section and was found by Milman a few years after Dvoretzky’s theorem appeared. The idea is roughly this. Consider a convex body K in n dimensions that contains the unit ball. For each point $\theta$ on the sphere, imagine the line segment starting at the origin, passing through the sphere at $\theta,$ and extending out to the surface of K (see figure $9$ ). Think of the length of this line as the “radius” of K in the direction of $\theta$ and call it r ( $\theta$ ).
This “directional radius” is a function on the sphere. Our aim is to find (say) $a_{10}$ - dimensional slice of the sphere on which r ( $\theta$ ) is almost constant. In such a slice, the body K looks like a ball, since its radius hardly varies. The fact that K is convex means that the function r cannot change too rapidly as we move around the sphere: if two directions are close together, then the radius of K must be about the same in these two

$676$

directions. Now we apply the geometric deviation principle to conclude that the radius of K is roughly the same on almost the entire sphere: the radius is close to its average (or median) value for all but a small fraction of the possible directions. That means that we have plenty of room in which to go looking for a slice on which the radius is almost constant--we just have to choose a slice that avoids the small bad regions. It can be shown that this happens if we choose the slice at random from among all possible slices.
The fact that most of the sphere consists of good regions means that a random slice has a good chance of falling into a good region. Dvoretzky’s theorem can be recast as a statement about the behavior of the entire body K, rather than just its sections, by using the Minkowski sums defined in the previous section. The statement is that if K is a convex body in n dimensions, then there is a family of m rotations $K^{1}$ , $K^{2}$ , . . . , K m of K whose Minkowski sum $K^{1} +$ · · · $+ K^{m}$ is approximately a ball, where the number m is significantly smaller than the dimension n.
Recently, Milman and Schechtman realized that the smallest number m that would work could be described almost exactly, in terms of relatively simple properties of the body K, despite the apparently enormous complexity of the choice of rotations available. For some n-dimensional convex sets, it is possible to create a ball with many fewer than n rotations. In the late $1970s$ Kašin discovered that if K is the cube, then just two rotations $K^{1}$ and $K^{2}$ are enough to produce something approximating a ball, even though the cube itself is extremely far from spherical.
In two dimensions it is not hard to work out which rotations are best: if we choose $K^{1}$ to be a square and $K^{2}$ to be its rotation through $45$ ◦ , then $K^{1} + K^{2}$ is $a$ regular octagon which is as close to a circle as we can get with just two squares. In higher dimensions it is extremely hard to describe which rotations to use. At present the only known method is to use randomly chosen rotations, even though the cube is as concrete and explicit an object as one ever meets in mathematics.
The strongest principle discovered to date showing that most bodies behave like balls is what is usually called the reverse Brunn-Minkowski inequality. This result was proved by Milman, building on ideas of his own and of Pisier and Bourgain. The Brunn-Minkowski inequality was stated earlier for sums of bodies. The reverse one has a number of different versions; the simplest is in terms of intersections. To begin with, if K is a body and B is a ball of the same volume, then the

IV. Branches of Mathematics

intersection of these two sets, the region that they have in common, is clearly of smaller volume. This obvious fact can be stated in a complicated way that looks like the Brunn-Minkowski inequality: vol (K ∩ B)1/n \le vol (K)1/n .

(4)

If K is extremely long and thin, then whenever we intersect it with a ball of the same volume, we capture only a tiny part of K. So there is no possibility of reversing inequality ( $4$ ) as it stands: no possibility of estimating the volume of K ∩ B from below. But if we are allowed to stretch the ball before intersecting it with K, the situation changes completely. A stretched ball in n-dimensional space is called an ellipsoid (in two dimensions it is just an ellipse).
The reverse Brunn-Minkowski inequality states that for every convex body K, there is an ellipsoid E of the same volume for which vol (K ∩ E)1/n \ge α vol (K)1/n , where α is a fixed positive number. There is a widespread (but not quite universal) belief that an apparently much stronger principle is true: that if we are allowed to enlarge the ellipsoid by a factor of (say) $10$ , then we can ensure that it includes half the volume of K. In other words, for every convex body, there is an ellipsoid of roughly the same size that contains half of K.
Such a statement flies in the face of our intuition about the huge variety of shapes in high dimensions, but there are some good reasons to believe it. Since the Brunn-Minkowski inequality has a reverse form, it is natural to ask whether the isoperimetric inequality also does. The isoperimetric inequality guarantees that sets cannot have a surface that is too small. Is there a sense in which bodies cannot have too large a surface area? The answer is yes, and indeed a rather precise statement can be made.
Just as in the case of the Brunn-Minkowski inequality, we have to take into account the possibility that our body could be long and thin and so have small volume but very large surface. So we have to start by applying a linear transformation that stretches the body in certain directions (but does not bend the shape) . For example, if we start with a triangle, we first transform it into an equilateral triangle and then measure its surface and its volume.
Once we have transformed our body as best we can, it turns out that we can specify precisely which convex body has the largest surface for a given volume. In two dimensions it is the triangle, in three it is the tetrahedron, and in n dimensions it is the natural analogue of these: the n-dimensional convex set (called a simplex) which

IV.26.   High-Dimensional Geometry and Its Probabilistic Analogues

has n + 1 corners. The fact that this set has the largest
surface was proved by the present author using an
inequality from harmonic analysis discovered by Bras-
camp and Lieb; the fact that the simplex is the only con-
vex set with maximal surface (in the sense described)
was proved by Barthe.
   In addition to geometric deviation principles, two
other methods have played a central role in the mod-
ern development of high-dimensional geometry; these
methods grew out of two branches of probability
theory. One is the study of sums of random points in
normed spaces [III.62](/part-03/normed-spaces-and-banach-spaces) and how big they are, which
provides important geometrical information about the
spaces themselves. The other, the theory of Gaussian
processes, depends upon a detailed understanding of
how to cover sets in high-dimensional space efficiently
with small balls. This issue may sound abstruse but
it addresses a fundamental problem: how to measure
(or estimate) the complexity of a geometric object. If
we know that our object can be covered by one ball
of radius 1, ten balls of radius 12 , fifty-seven balls of   dom quantity will be close to the expected value of the
radius 14 , and so on, then we have a good idea of how
complicated the object can be.
   The modern view of high-dimensional space has re-
vealed that it is at once much more complicated than
was previously thought and at the same time in other
ways much simpler. The first of these is well illustrated    kolmogorov [VI.88](/part-06/andrei-nikolaevich-kolmogorov-19031987) in the early part of the twentieth
by the solution of a problem posed by Borsuk in the
1930 s. A set is said to have diameter at most d if no
two points in the set are further than d from each other.   value is certainly useful to know, but for most pur-
In connection with his work in topology, Borsuk asked
whether every set of diameter 1 in n-dimensional space
could be broken into n + 1 pieces of smaller diameter.
In two and three dimensions this is always possible,
and as late as the 1960 s it was expected that the answer    example, if the expected value is 12 , as for coin toss-
should be yes in all dimensions. However, a few years
ago, Kahn and Kalai showed that
might require something like e n pieces, enormously
more than n + 1.
   On the other hand, the simplicity of high-dimensional    amount.
space is reflected in a fact discovered by Johnson and
Lindenstrauss: if we pick a configuration of n points
(in whatever dimension we like), we can find an almost
perfect copy of the configuration sitting in a space of
dimension much smaller than n: roughly the logarithm
of n. In the last few years this fact has found applica-    strong law of large numbers, the taller bars are con-
tions in the design of computer algorithms, since many
computational problems can be phrased geometrically
and become much simpler if the dimension involved
is small.

677
6   Deviation in Probability
If you toss a fair coin repeatedly, you expect that
heads will occur on roughly half the tosses, and tails
on roughly half. More over, as the number of tosses
increases, you expect the proportion of heads to get
1
closer and closer to 2 . The number 2 is called the
expected number of heads per toss. The number of
heads yielded by a given toss is either 1 or 0, with
equal probability, so the expected number of heads is
the average of these, namely 12 .
The crucial unspoken assumption that we make
about the tosses of the coin is that they are inde-
pendent : that the out comes of different tosses do
not influence one another. (Independence and other
basic probabilistic concepts are discussed in probabil-
ity distributions [III.71](/part-03/probability-distributions).) The coin-tossing principle,
or its generalization to other random experiments, is
called the strong law of large numbers. The average
of a large number of independent repetitions of a ran-
quantity.
The strong law of large numbers for coin tosses is
fairly simple to demonstrate. The general form, which
applies to much more complicated random quantities,
is considerably more difficult. It was first established by
century.
The fact that averages accumulate near the expected
poses in statistics and probability theory it is vital
to have more detailed information. If we focus our
attention near the expected value, we may ask how
the average is distributed around this number. For
ing, we might ask, what is the chance that the aver-
in n dimensions it    age is as large as 0.55 or as small as 0.42? We want
√
to know how likely it is that our average number of
heads will deviate from the expected value by a given
The bar chart in figure 10 shows the probabilities
of obtaining each of the possible numbers of heads,
with twenty tosses of a coin. The height of each
bar shows the chance that the corresponding num-
ber of heads will occur. As we would expect from the
centrated near the middle. Superimposed upon the
chart is a curve that plainly approximates the prob-
abilities quite well. This is the famous “bell-shaped”
or “normal” curve. It is a shifted and rescaled copy of

6780 . $15$

Probability

$0$ . $100$ . 0501015205

Number of heads

Figure $10$ Twenty tosses of a fair coin. the so-called standard normal curve, whose equation is

$11y =$ √

exp $( - 2x^{2})$ .

$(5)2\pi$

The fact that the curve approximates coin-tossing probabilities is an example of the most important principle in probability theory: the central limit theorem. This states that whenever we add up a large number of small independent random quantities, the result has a distribution that is approximated by a normal curve. The equation of the normal curve ( $5$ ) can be used to show that if we toss a coin n times, then the chance that the proportion of heads deviates from $\frac{1}{2}$ by more than ε

$2$

is at most $e - 2nε$ . This closely resembles the geometric deviation estimate (3) from section $4$ . This resemblance is not coincidental, although we are still far from a full understanding of when and how it applies. The simplest way to see why a version of the central limit theorem might apply to geometry is to replace the toss of a coin by a different random experiment. Suppose that we repeatedly select a random number between $- 1$ and $1$ , and that the selection is uniform in the sense described in section $4$ . Let the first n selections be the numbers $x^{1}$ , $x^{2}$ , . . .
, x n . Instead of thinking of them as independent random choices, we can consider the point ($x^{1}$ , . . . , x n) as a randomly chosen point inside the cube that consists of all points whose coordinates lie between $- 1$ and $1$ . The expres. qrt{n} sion (1/ n)i = {}1 xi measures the distance of the random point from a certain $(n - 1)$ - dimensional “plane,” which consists of all points whose coordinates add up to zero (the two-dimensional case is shown in fig. qrt{n} ure 11).
So the chance that (1/ n)i = {}1 xi deviates from its expected value, $0$ , by more than ε is the same as the chance that a random point of the cube lies a distance of more than ε from the plane. This chance is proportional to the volume of the set of points that are

IV. Branches of Mathematics

(1 , $1)( - 1$ , 1)

ε

Plane: $x + y = 0$

Figure $11$ A random point of the cube.

more than ε from the plane: the set shown shaded in figure $11$ . When we discussed the geometric deviation principle, we estimated the volume of the set of points which were more than ε away from a set C which occupied half the ball. The present situation is really the same, because each part of the shaded set consists of those points that are more than ε away from which ever half of the cube lies on the other side of the plane. Arguments akin to the central limit theorem show that if we cut the cube in half with a plane, then the set of points which lie more than a distance ε from one of

$2$

the halves has volume no more than e  -  ε . This statement is different from, and apparently much weaker than, the one we obtained for the ball ( $3$ ) because the factor of n is missing from the exponent. The estimate implies that if you take any plane through the center of the cube, then most points in the cube will be at a distance of less than $2$ from it. If the plane is parallel to one of the faces of the cube, this statement certainly is weak, because all of the cube is within distance $1$ of the plane.
The statement becomes significant when we consider planes like the one in figure $11$ . Some points √ of the cube are at a distance of n from this “diagonal” plane, but still, the overwhelming majority of the cube is very much closer. Thus, the estimates for the cube and the ball contain essentially the same information; what is different is that the cube is bigger than the ball √ by a factor of about n. In the case of the ball we were able to prove a deviation estimate for any set occupying half the ball, not just the special sets that are cut off by planes.
Towards the end of the $1980s$ Pisier found an elegant argument that showed that the general case works for the cube as well as for the ball. Among other things, the argument uses a principle which goes back to the early days of large-deviation theory in the work of Donsker and Varadhan.

$IV$ . $26$ .

High-Dimensional Geometry and Its Probabilistic Analogues The theory of large deviations in probability is now highly developed. In principle, more or less precise estimates are known for the probability that a sum of independent random variables deviates from its expectation by a given amount, in terms of the original distribution of the variables. In practice, the estimates involve quantities that may be difficult to compute, but there are sophisticated methods for doing this. The theory has numerous applications within probability and statistics, computer science, and statistical physics.
One of the most subtle and powerful discoveries of this theory is Talagrand’s deviation inequality for product spaces, discovered in the mid $1990s$ . Talagrand himself has used this to solve several famous problems in combinatorial probability and to obtain striking estimates for certain mathematical models in particle physics. The full inequality of Talagrand is some what technical and is difficult to describe geometrically. However, the discovery had a precursor which fits perfectly into the geometric picture and which captures at least one of the most important ideas.
2 We look again at random points in the cube but this time the random point is not chosen uniformly from within the cube. As before, we choose the coordinates $x^{1}$ , $x^{2}$ , . . . , x n of our random point independently of one another, but we do not insist that each coordinate is chosen uniformly from the range between $- 1$ and $1$ .
For example, it might be that $x^{1}$ can take only the values $1$ , $0$ , or $- 1$ , each with probability $\frac{1}{3}$ , that $x^{2}$ can take only the values $1$ or $- 1$ each with probability $\frac{1}{2}$ , and perhaps that $x^{3}$ is chosen uniformly from the entire range between $- 1$ and $1$ . What matters is that the choice of each coordinate has no effect on the choice of any others. Any sequence of rules that dictates how we choose each coordinate determines a way of choosing a random point in the cube.
This in turn gives us a way of measuring a kind of volume for subsets of the cube: the “volume” of a set A is the chance that our random point is selected from A. This way to measure volume might be very different from the usual one; among other things, an individual point might have nonzero volume. Now suppose that C is a convex subset of the cube

$1$

and that its “volume” i$s^{2}$ , in the sense that our ran$1$ dom point will be selected from C with probabilit$y^{2}$ . $2$ . This precursor evolved from an original argument of Talagrand via an important contribution of Johnson and Schechtman.

$679$

Talagrand’s inequality says that the chance that our random point will lie a distance of more than ε from

$2$

C is less than $2e - ε / {}^{16}$ . This statement looks like the deviation estimate for the cube except that it refers only to convex sets C. But the crucial new information that makes the estimate and its later versions important is that we are allowed to choose our random point in so many different ways. This section has described deviation estimates in probability theory that have a geometric flavor. For the cube, we are able to show that if C is any set occupying half the cube, then almost the entire cube is close to C.
It would be extremely useful to know the same thing for convex sets more general than the cube. There are some other highly symmetric sets for which we do know it, but the most general possible statement of this type seems to be beyond our current methods. One potential application, which comes from theoretical computer science, is to the analysis of random algorithms for volume calculation.
The problem may sound specialized, but it arises in linear programming [III.84](/part-03/the-simplex-algorithm) (which alone is sufficient reason to justify the expenditure of enormous effort) and in the numerical estimation of integrals. In principle, one can calculate the volume of a set by laying over it a very fine grid, and counting how many grid points fall into the set. In practice, if the dimension is large, the number of grid points will be so astronomically huge that no computer has a chance of performing the count.
The problem of calculating the volume of a set is essentially the same as the problem of choosing a point at random within the set, roughly as we saw in section $4$ . So the aim is to select a random point with out identifying a huge number of possible points to select from. At present, the most effective way of generating a random point in a convex set is to carry out a random walk within the set.
We perform a sequence of small steps whose directions are chosen randomly and then select the point that we have reached after a fairly large number of steps, in the hope that this point has roughly the correct chance of falling into each part of the set. For the method to be effective, it is essential that the random walk quickly visits points all over the set: that it does not get stuck for a long time in, say, half of the set. In order to guarantee this rapid mixing, as it is called, we need an isoperimetric principle or deviation principle.
We need to know that each half of our set has a large boundary, so that there is a good chance that our random walk will cross the boundary quickly and land in the other half of our set.

$680$

In a series of papers published over the last ten years, Applegate, Bubley, Dyer, Frieze, Jerrum, Kannan, Lovasz, Montenegro, Simonovits, Vempala, and others have found very efficient random walks for sampling from a convex set. A geometric deviation principle of the kind alluded to above would make it possible to estimate the efficiency of these random walks almost perfectly.

$7$

Conclusion

The study of high-dimensional systems has become increasingly important in the last few decades. Practical problems in computing frequently lead to highdimensional questions, many of which can be posed geometrically, while many models in particle physics are automatically high-dimensional because it is necessary to consider a huge number of particles in order to mimic large-scale phenomena in the real world. The literature in both these fields is vast but some general remarks can be made.
The intuition that we gain from low-dimensional geometry leads us wildly astray if we try to apply it in many dimensions. It has become clear that naturally occurring high-dimensional systems exhibit characteristics that we expect to arise in probability theory, even if the original system does not have an explicitly random element. In many cases these random characteristics are manifested as an isoperimetric or deviation principle, that is, a statement to the effect that large sets have large boundaries. In the clas-

IV. Branches of Mathematics

sical theory of probability, independence assumptions can often be used to demonstrate deviation principles quite simply. For the very much more complicated systems that are studied today it is usually useful to have a geometric picture to accompany the probabilistic one. That way one can understand probabilistic deviation principles as analogues of the isoperimetric principle discovered by the ancient Greeks. This article has described the relationship between geometry and probability in just a few special cases. A very much more detailed picture is almost certainly waiting to be found.
At present it seems to be just out of reach.

Further Reading

Ball, K. M. 1997 . An elementary introduction to modern convex geometry. In Flavors of Geometry, edited by Silvio Levy. Cambridge: Cambridge University Press. Bollobás, B. 1997 . Volume estimates and rapid mixing. In Flavors of Geometry, edited by Silvio Levy. Cambridge: Cambridge University Press. Chavel, I. 2001 . Isoperimetric Inequalities. Cambridge: Cambridge University Press. Dembo, A., and O. Zeitouni. 1998 . Large Deviations Techniques and Applications. New York: Springer. Ledoux, M. 2001 . The Concentration of Measure Phenomenon. Providence, RI: American Mathematical Society.
Osserman, R. 1978 . The isoperimetric inequality. Bulletin of the American Mathematical Society $84$ : $1182 - 238$ . Pisier, G. 1989 . The Volume of Convex Bodies and Banach Space Geometry. Cambridge: Cambridge University Press. Schneider, R. 1993 . Convex Bodies: The Brunn-Minkowski Theory. Cambridge: Cambridge University Press.