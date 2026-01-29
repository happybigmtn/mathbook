# The Mathematics of Traffic in Networks

$862$

always unsatisfactory from the point of view of mathematical understanding. Similar miracles played a role in independent constructions by P. G. Lemarié (now Lemari éRieusset) and G. Battle of orthonormal wavelet bases that were piecewise polynomial. (They came to the same result from completely different points of departure--harmonic analysis for Lemarié and quantum field theory for Battle .) A few months later, S. Mallat, then a Ph.D. candidate in computer vision in the United States, learned about these wavelet bases. He was on vacation, chatting on the beach with a former classmate who was one of Meyer’s graduate students. After returning to his Ph.D. work, Mallat kept thinking about a possible connection with the reigning paradigm in computer vision. On learning that Meyer was coming to the United States in the fall of 1986 to give a named lecture series, he went to see him and explain his insight. In a few days of feverish enthusiasm, they hammered out multiresolution analysis, a different approach to Meyer’s construction inspired by the computer vision framework. In this new setting, all the miracles fell into place as inevitable consequences of simple, entirely natural construction rules, embodying the principle of successively finer approximations. Multiresolution analysis has remained the basic principle behind the construction of many wavelet bases and redundant families. None of the smooth wavelet bases constructed up to that point was supported inside an interval, so the algorithms to implement the transform (which were using the subband filtering framework without their creators knowing that it had been named and developed in electrical engineering) required, in principle, infinite filters that were impossible to implement. In practice, this meant that the infinite filters from the mathematical theory had to be truncated; it was not clear how to construct a multiresolution analysis that would lead to finite filters. Truncation of the infinite filters seemed to me a blemish on the whole beautiful edifice, and I was unhappy with this state of affairs. I had learned about wavelets from Grossmann and about multiresolution analysis from explanations scribbled by Meyer on a napkin after dinner during a conference. In early 1987 I decided to insist on finite filters for the implementation. I wondered whether a whole multiresolution analysis (and its corresponding orthonormal basis of wavelets) could be reconstructed from appropriate but finite filters. I managed to carry out this program, and as a result found the first construction of an

VII. The Influence of Mathematics

orthonormal wavelet basis for which $\psi$ is smooth and supported on an interval. Soon after this, the connection with the electrical engineering approaches was discovered. Especially easy algorithms were inspired by the needs of computer graphics applications. More exciting constructions and generalizations followed: biorthogonal wavelet bases, wavelet packets, multiwavelets, irregularly spaced wavelets, sophisticated multi dimensional wavelet bases not derived from one-dimensional constructions, and so on. It was a heady, exciting period. The development of the theory benefited from all the different influences and in its turn enriched the different fields with which wavelets are related. As the theory has matured, wavelets have become an accepted addition to the mathematical toolbox used by mathematicians, scientists, and engineers alike. They have also inspired the development of other tools that are better adapted to tasks for which wavelets are not optimal.

Further Reading

Aboufadel, E., and S. Schlicker. 1999 . Discovering Wavelets. New York: Wiley Interscience. Blatter, C. 1999 . Wavelets: A Primer. Wellesley, MA: AK Peters. Cipra, B. A. 1993 . Wavelet applications come to the fore. SIAM News 26(7) : $10 - 11$ , $15$ . Frazier, M. W. 1999 . An Introduction to Wavelets through Linear Algebra. New York: Springer. Hubbard, B. B. 1995 . The World According to Wavelets: The Story of a Mathematical Technique in the Making. Wellesley, MA: AK Peters. Meyer, Y., and R. Ryan. 1993 . Wavelets: Algorithms and Applications. Philadelphia, PA: Society for Industrial and Applied Mathematics (SIAM). Mulcahy, C. 1996 . Plotting & scheming with wavelets. Mathematics Magazine 69(5) : $323 - 43$ . VII . $4$ The Mathematics of Traffic in

Networks

Frank Kelly

$1$

Introduction

We are all familiar with congested roads, and perhaps also with congestion in other networks such as the Internet, so it is obviously important to have a general understanding of how and why congestion occurs in networks. However, the pattern of the flow of traffic through a network is the consequence of a subtle

VII . $4$ .

The Mathematics of Traffic in Networks

and complex interaction between different users. For example, in a road network we would normally expect each driver to attempt to choose the most convenient route, and this choice will depend upon the delays the driver expects to encounter on different roads; but these delays will in turn depend upon the choices of routes made by others. This mutual interdependence makes it difficult to predict the effects of changes to the system, such as the construction of a new road or the introduction of tolls in certain places. Related issues arise in other large-scale systems like the telephone network or the Internet. In these systems a major practical concern is the extent to which control can be decentralized. When you are browsing the Web, the rate at which a Web page is transferred to you across the network is controlled by software protocols running on your computer and on the Web server hosting the Web page, and not by some huge central computer. This decentralized approach to flow control has been outstandingly successful as the Internet has evolved from a small-scale research network to today’s interconnection of hundreds of millions of hosts, but is beginning to show signs of strain. In developing new protocols, the challenge is to understand just which aspects of decentralized flow control are important if the network as a whole is to continue to expand and evolve. In this article we introduce the reader to some of the mathematical models that have been used to address these issues. The models need to be able to represent several distinct aspects of the system. We shall see that the language of graph theory [III.34] and matrices [I.3](/part-01/fundamental-definitions) is needed to capture the pattern of connections within the network. Calculus is needed to describe how congestion depends upon traffic volumes. And optimization concepts are needed to model the way in which self-interested drivers choose their shortest routes, or the way that decentralized controls in communication networks can cause the system as a whole to perform well. $2$ Network Structure Figure $1$ illustrates a set of three nodes connected by a set of five directed links. We might imagine the nodes as representing towns or locations within a city, and the links as representing road capacity between different nodes. A two-way road is represented by two links, one in each direction. Notice that there are two routes from node c to node a that a driver can choose: the first route, 8633$b$ c_{4}215 a ab ac ba  bc ca1 ca2 cb1 cb2 ⎛ ⎞ 111000001 ⎜ ⎟ $2$ ⎜ $0$ ⎟ 010010 ⎜ $0$ ⎟ ⎜ ⎟ $A = 3$ ⎜ $00$ ⎟ 101000 ⎜ ⎟ $4$ ⎜ $0$ ⎟ 000011 ⎝ $0$ ⎠ 000100501 ab ac ba  bc ca1 ca2 cb1 cb2 ⎛ ⎞ 1000000$ab$0 ⎜ ⎟ $ac$ ⎜ $00$ ⎟ 100000 ⎜ ⎟ ba ⎜ $0$ ⎟ ⎜ 0010000 ⎟ ⎜ ⎟ $H =$ bc ⎜ $0$ ⎟ ⎜ 0001000 ⎟ ⎜ ⎟ $ca$ ⎝ $00$ ⎠ 000110$cb$00000011 Figure $1$ A simple network and its link-route incidence matrix, A. The matrix H represents which routes serve which source-destination pairs. let us call it $ca1$ , is the direct route, using link $5$ ; the second route, let us call it $ca2$ , is via node b and uses links $4$ and $2$ . Let J be the set of directed links and let R be the set of possible routes. One way to describe the relationship between links and routes is with a table, or matrix, defined as follows. Set A jr $= 1$ if link j lies on route r , and set $Ajr = 0$ otherwise. This defines a matrix $A = (Ajr$ , $j \inJ, r \inR)$ called the link-route incidence matrix. Each column of the matrix corresponds to one of the routes r , and each row to one of the links j of the network. The column for route r is composed of $0s$ and $1s$ : the $1s$ tell us which links are on route r . As for the rows, the $1s$ in the row for link j tell us which routes pass through that link. Thus, for example, the incidence matrix in figure $1$ has a column for each of the two routes, $ca1$ and $ca2$ , between node c and node a.

$864$

D (y)

$0$

y

Figure $2$ The time taken to travel along a link, D (y), expressed as a function of the total flow y along the link. As the flow increases, congestion effects cause additional delay. These columns encode the information that route $ca1$ uses link $5$ and that route $ca2$ uses links $4$ and $2$ . Note that the incidence matrix does not tell us the order of the links on the route. Also the incidence matrix shown does not include all logically possible routes, but it could if we wanted it to. And while we have illustrated a very small network, there is no limit to the number of nodes and links there could be in the network, or to the number of choices of route each driver might have--the incidence matrix would just be bigger. One quantity of interest in a network is the volume of traffic along a particular route or link. Let x r be the flow on route r , defined as the number of cars per hour that travel along that route. We can list the flows along all the routes in the network as a sequence of numbers x  =  (x r , r $\in$ R), and we can think of this sequence as a vector. From this vector we can calculate the total flow through a link: for example, the total flow through link $5$ in figure $1$ is the sum of the flows along routes $ca1$ and $cb2$ , since these are the routes that pass through link $5$ . In general, since $Ajr = 1$ when $a$ route $r$ passes through link j and A jr $= 0$ when it does not, the total flow through link j, coming from all of the routes that use it, is

$y^{j} =$

A jr x r , j $\in$ J.

$r\inR$

Again, the numbers (y j , j $\in$ J) can be thought of as forming a vector. The above equations can then be represented succinctly in matrix form as

$y = Ax.$

We expect the level of congestion at a link to depend on the total flow through the link, and we expect this to influence the time taken to travel along the link. We

VII. The Influence of Mathematics

shall call this time the delay. Figure $2$ shows a typical way in which the delay might depend on the amount of flow. At small values of the flow y the delay D (y) is just the time taken to travel along an empty road; for larger values of y the delay D (y) is larger, and quite possibly much larger, owing to congestion effects. 1 Let D j (y j) be the delay along link j when the flow through that link is y j ; the nature of this delay may depend upon characteristics of link j such as its length and width, so we have to use the subscript j on the function D j to indicate that the functions for the various links can be different.

$2$ . $1$

Routing Choices

Given two nodes in a network there will in general be a variety of possible routes capable of linking them. For example, in figure $1$ we have seen that the incidence matrix A records two routes between nodes $c$ and $a$. The pair ca is an example of a source-destination pair. Flow originating from source c and destined for node a can use either $ca1$ or $ca2$ , the two routes that serve this source-destination pair. We now need another matrix, this time to describe the relationship between sourcedestinati on pairs and routes. Let us use s to denote a typical source-destination pair, and let S be the set of all source-destination pairs. Then, for each sourcedestinati on pair s and each route r , let H sr $= 1$ if s can be served by the route r , and let H sr $= 0$ otherwise. This defines a matrix $H = (Hsr$ , $s \in S, r \in R)$ ; figure $1$ gives an example. Observe that the row labeled $ca$ has $1s$ for the two routes, $r = ca1$ , $ca2$ , that serve the source-destination pair $s = ca$. Each column of H corresponds to a route, and contains a single $1$ : this identifies the source-destination pair served by the route. For each route r let us write s (r) for the source-destination pair served by r : for example, in figure $1$ , s (ac)  =  ac and

$s(ca1) = ca.$

From the vector x  =  (x r , r $\in$ R) we can calculate the total flow from a source to a destination: for example, the flow from node c to node a in figure $1$ is the sum of $1$ . The graph shown in figure $2$ is single valued. It is quite possible for the curve representing delay as a function of flow to bend back upon itself, so that higher delays than shown in the graph correspond to flows smaller than the maximum flow shown there. You are in this part of the graph when you experience stop-start driving conditions on a congested but otherwise incident-free highway. Part of the aim of traffic management is to keep flows and delays away from this part of the graph, which we will not consider further. We will assume that the graph is increasing and smooth, which will make our use of calculus later more straightforward. Formally, we shall assume that D (y) is a continuously differentiable and strictly increasing function of its argument y, as in the graph shown in figure $2$ .

VII . $4$ .

The Mathematics of Traffic in Networks

flows along routes $ca1$ and $ca2$ , since from the matrix H we see that these are the routes that serve the sourcedestinati on pair ca. More generally, if f s is the total flow of traffic added up over all of the routes serving sourcedestinati on pair s, then H sr x r , s $\in$ S.

$f^{s} = r\inR$

Thus the vector f  =  (f s , s $\in$ S) of source-destination flows can be expressed succinctly in matrix form as

$f = Hx.3$

Wardrop Equilibria

We are now able to approach the central issue: how do the traffic flows between the various sources and destinations distribute themselves over the links of the network? Each driver will try to use whatever route is quickest, but this may make other routes quicker or slower and cause other drivers to change their routes. Only when they cannot find alternative, quicker routes will drivers not have an incentive to change routes. What does this mean mathematically? Let us first calculate the time taken for a driver to travel along route r . The column labeled r of the matrix A tells us which links j are on route r . If we add up the delays on each of these links, we get the time taken to travel along route r as the expression D j (y j) A jr .

$j\inJ$

Now the driver using route r could have used any other route that served the same source-destination pair s (r). So, for the driver to be content with route r , we require D j (y j) A jr $\le$ D j (y j) A jr

$j\inJj\inJ$

for every other route r that serves the same sourcedestinati on pair s (r). Define a Wardrop equilibrium (Wardrop 1952$) \text{to be a vector} x = (x r , r$\in R) of nonnegative numbers such that for every pair of routes r , r serving the same source-destination pair, $x^{r} > 0$ ⇒ D j (y j) A jr $\le$ D j (y j) A jr ,

$j\inJj\inJ$

where $y = Ax$. The inequality expresses the defining characteristic of a Wardrop equilibrium: that if a route r is actively used, then it achieves the minimum delay over all routes serving its source-destination pair s (r). Does a Wardrop equilibrium exist? It is not at all clear whether it is possible to find a vector x such

$865$

that all of the above inequalities, for the various routes through the network, are satisfied simultaneously. To answer the question, we shall proceed by addressing a seemingly different question: what is the answer to the following optimization problem? y j D j (u) du

Minimize

$0j\inJx \ge 0$ ,  y,

over

$Hx = f$ , $Ax = y.$

subject to

Let us see in outline why this optimization problem has a solution (x , y), and why, if (x , y) is a solution, the vector x is a Wardrop equilibrium. The optimization problem has some aspects that are quite natural. An obvious constraint is that the flows along each route are nonnegative, which is why we insist that $x \ge 0$ . The constraints $Hx = f$ , $Ax = y$ just enforce the accounting rules we have seen earlier--the rules that allow the source-destination flows f and the link flows y to be calculated from the route flows x using the matrices H and A, respectively. We view the source-destination flows f as fixed, to be distributed over the various routes. Given a choice of f , our task is then to find the route flows x and consequently the link flows y. At a solution to the optimization problem y will be nonnegative, since x is. This much is fairly natural, but the function to be minimized looks somewhat strange. Its importance rests on the fact that the rate of change of the integral y j D j (u) du

$0$

with respect to y j is D j (y j), by the fundamental theorem of calculus [I.3](/part-01/fundamental-definitions), and the function to be minimized is the sum of these integrals over all links. We shall see that the link between Wardrop equilibria and the optimization problem is a direct consequence of this observation. To find a solution to the optimization problem, we will use the method of lagrange multipliers [III.64](/part-03/optimization-and-lagrange-multipliers). Define the function L (x , y; $\lambda,$ μ) y j = $D^{j}(u)du + \lambda$ · $(f - Hx) - \mu$ · $(y - Ax)$ , $0j\inJ$ where $\lambda = (\lambda^{s}$ , $s \in S)$ , $\mu = (\mu^{j}$ , $j \in J)$ are vectors of Lagrange multipliers, to be fixed later. The idea is that if we make the right choices of Lagrange multipliers, the minimization of the function L over $x$ and $y$ will find a solution to the original problem. The reason this works

$866$

is that, for the right choices of Lagrange multipliers, the constraints $Hx = f$ and $Ax = y$ are consistent with the minimization of L. To minimize the function L we need to differentiate. First, ∂L $= D^{j}(y^{j}) - \mu^{j}$ . ∂y j Second, ∂L

$= - \lambda^{s}(r) +$

\mu j A jr .

∂x r

$j\inJ$

Note that the form of the matrix H causes the derivative with respect to x r to pick out exactly one component of $\lambda,$ namely $\lambda$ s (r), and the form of the matrix A causes the derivative to pick out just those components of \mu that correspond to links on route r . These derivatives allow us to deduce that a minimum of L, over all x $\ge 0$ and all y, occurs when μ $j = D$ j (y j) and

$\lambda s(r) =$

\mu j A jr

if $x^{r} > 0j\inJ$

if $x^{r} = 0$ .

$\le$

\mu j A jr

$j\inJ$

The equality condition for $\lambda$ s (r) is straightforward: if x r $> 0$ then small variations up or down in x r should not decrease the function L (x , y; $\lambda,$ μ), and hence we deduce that the partial derivative with respect to x r must be zero. But if x r $= 0$ then we can only vary x r upward, and so all we can deduce is that the partial derivative with respect to x r is nonnegative, and from this we deduce the inequality condition for $\lambda$ s (r). Minimizing the function L corresponds to allowing the constraints $Hx = f$ , $Ax = y$ to be violated, but at a cost: now one charges a price $\lambda$ s for any shortfall of the sum j $\in$ J A jr x r below f $s$ and $a$ price \mu j for any excess of the sum j $\in$ J A jr x r over y j . From general results on convex optimization it is known that there exist Lagrange multipliers ( $\lambda$ , μ) and a vector (x , y) such that (x , y) minimizes L (x , y; $\lambda,$ μ), satisfies the constraints $Hx = f$ , $Ax = y,$ and solves the original optimization problem. Our solution for the Lagrange multipliers shows that they have a simple interpretation: \mu j is the delay on link j and $\lambda$ s is the minimum delay over all routes serving the node pair s. The various conditions established for the multipliers thus show that an optimum of the function L, known as the objective function, corresponds precisely to a Wardrop equilibrium.

VII. The Influence of Mathematics

Thus if traffic in the network distributes itself in accordance with the self-interested choices of drivers, the equilibrium flows (x , y) will solve an optimization problem. This result is originally due to Beckmann et al. ( 1956 ), and it provides a remarkable insight into the equilibrium patterns achieved in road traffic networks. The pattern of traffic resulting from the individual decisions of a large number of self-interested drivers behaves as if a central intelligence were directing flows to optimize a certain (rather strange) objective function. The result does not mean that average delays in the network will be minimal: a striking illustration of this fact is provided by Braess’s paradox (Braess 1968 ), which we describe next.

$4$

Braess’s Paradox

Consider the network illustrated in figure $3$ (a). Cars travel from node S to node N, via either node W or node E. The total flow is $6$ , and the link delays D j (y) are given next to the links in the figure. One can imagine the figure illustrating rush hour as commuters travel from the center of a city in the south to their homes in the north. Commuters learn from experience what the delays are likely to be along the eastern and western routes. The distribution of traffic shown is the Wardrop equilibrium: there is no incentive for any drivers to change their routes, since the two possible routes incur the same delay, namely $(10 \times 3) + (3 + 50) = 83$ units of time. Now suppose that a new link is added, between nodes W and E, as shown in figure $3$ (b). Traffic is attracted onto the new link, since to begin with it offers a shorter journey time from the south to the north. Eventually, after everyone knows about the new link and traffic patterns have settled down, a new Wardrop equilibrium will be established, and this is shown in figure $3$ (b). In the new equilibrium there are three routes used, which each incur the same delay, namely $(10 \times 4) + (2 + 50) =(10 \times 4) + (2 + 10) + (10 \times 4) = 92$ . Thus in figure $3(b)$ each car incurs a delay of $92$ , while in figure $3$ (a) the delay of each car was only $83$ . Adding the new link has increased everyone’s delay! The explanation for this apparent paradox is as follows. At a Wardrop equilibrium each driver is using a route which, given the choices of others, gives the minimum delay over the routes available between that driver’s source and destination. But there is no intrinsic reason why this equilibrium should correspond to particularly low delays relative to what could be achieved

VII . $4$ .

The Mathematics of Traffic in Networks

$867$

(a)

(b)

N

N

$y + 5010yy + 5010y$

W

E

W

E

$y + 10y + 5010yy + 5010y$

S

S

Figure $3$ Braess’s paradox. The addition of a link causes everyone’s journey time to lengthen. (After Braess ( 1968 ) and Cohen ( 1988 ).) Again define the function by another flow pattern. If all drivers could be encouraged to depart from their own self-interested choices, L (x , y; $\lambda,$ μ) it is quite possible that all might benefit. And in the

 = 

$y^{j}D^{j}(y^{j}) + \lambda$ · $(f - Hx) - \mu$ · $(y - Ax)$ . above example, if all drivers in the second network

$j\inJ$

could agree to avoid the new link, effectively converting the network back into the first network, then all would

Again

incur lower delays.

∂L

$= - \lambda^{s}(r) +$

\mu j A jr ,

To explore the point further, note that the product of ∂x r

$j\inJ$

the flow y j and the delay D j (y j) is the delay incurred but now at link j per unit time, aggregated over all the vehicles ∂L using link j. Let us try to find the flow pattern that min$= D^{j}(y^{j}) + y^{j}D^{j}(y^{j}) - \mu^{j}$ . ∂y j imizes the total delay per unit time, summed over the entire network. Consider then the following problem. Hence a minimum of $L$ over $x \ge 0$ and $y$ occurs when μ $j = D$ j (y j)  +  yj Dj (yj) yj Dj (yj)Minimize

$j\inJ$

and

$x \ge 0$ ,  y,

over

$\lambda s(r) =$

\mu j A jr

if $x^{r} > 0Hx = f$ , $Ax = y.$

subject to

$j\inJ$

if $x^{r} = 0$ .

$\le$

\mu j A jr

Note that the problem is of the same form as the ear$j\inJ$ lier optimization problem, but the function to be minimized now measures the total network delay per unit The Lagrange multipliers now have a more sophistitime. (Recall that the function to be minimized in the cated interpretation. Suppose that, in addition to the delay D j (y j), users of link j incur a traffic-dependent first optimization problem seemed initially to be rather toll arbitrary, with its eventual motivation being that its T j (y j) $=$ y j D j (y j) . minimization was achieved by a Wardrop equilibrium .)

868                                                                                   VII. The Influence of Mathematics

Then \mu j is the generalized cost of using link j, defined       Each of a large but indeterminate number of flows is
as the sum of the toll and the delay, and \lambda s is the mini-     controlled by a feedback loop that can know only of
mum generalized cost over all routes serving the node         that flow’s experience of congestion. A flow does not
pair s. If users select routes in an attempt to mini-         know how many other flows are sharing a link on its
mize the sum of their tolls and their delays, then they       route, or even how many links are on its route. The
will produce a flow pattern that minimizes total delay         links vary in capacity by many orders of magnitude, as
in the network. Notice that the generalized cost \mu j is        do the numbers of flows sharing different links. It is
(∂/∂yj )(yj D(yj )), which is the rate of increase in the     remarkable that so much has been achieved in such a
total delay at link j as the flow yj is increased. So the      rapidly growing and heterogeneous network with con-
assumption now is that, in a certain sense, drivers try       gestion controlled just at the endpoints. Why does this
to minimize their contribution to the total delay rather      algorithm work so well?
than minimizing their own delay.                                 In recent years theoreticians have shed some light on
  We have seen that if drivers attempt to minimize            TCP’s success, by interpreting the protocol as a decen-
their own delay, then the resulting equilibrium flows          tralized parallel algorithm that solves an optimization
will minimize a certain objective function defined for         problem, just as the decentralized choices of drivers in
the network. However, the objective function is cer-          a road network solve an optimization problem. We shall
tainly not the total network delay, and thus there is         outline the argument, beginning with a more detailed
no guarantee that when capacity is added to a network         description of TCP.2
the situation is improved. We have also seen that, with          Packets transferred by TCP across the Internet con-
the imposition of appropriate tolls, it is possible for the   tain sequence numbers indicating their order, and they
self-interested behavior of drivers to lead to an equilib-    should arrive at their destination in that order. When
rium pattern of flow that minimizes total delay. A major       a packet is received at the destination, it is acknow-
challenge for governments and transport planners is to        ledged: an acknowledgment is a short packet sent by
understand how insights from these and more sophisti-         the destination back to the source. If a packet has been
cated models might be used to encourage more efficient          lost in the transfer, the source can tell this from the
development and use of road networks (Department for          sequence numbers contained in the acknowledgments.
Transport 2004).                                              The source keeps a copy of each packet sent until it
                                                              has been positively acknowledged; these copies form
          5   Flow Control in the Internet                    what is called a sliding window, and allow packets lost
When a file is requested over the Internet, the com-           in transfer to be sent again by the source.
puter that hosts that file breaks it into small packets           Meanwhile, stored in the source computer there is
of data that are then transferred across the network          a numerical variable known as the congestion window
by the transmission control protocol of the Internet, or      and denoted cwnd. The congestion window directs the
TCP. The rate at which packets enter the network is con-      size of the sliding window in the following sense: if the
trolled by TCP, which is implemented as software on           size of the sliding window is less than cwnd, then the
the two computers that are the source and destination         computer increases it by sending out a packet; if it is
of the data. The general approach is as follows (Jacob-       greater than or equal to cwnd, then it waits for positive
son 1988). When a link within the network becomes             acknowledgments to come in, which have the effect of
overloaded, one or more packets are lost; loss of a           reducing the size of the sliding window and, as we shall
packet is taken as an indication of congestion, the desti-    see, increasing cwnd as well. Thus, the size of the sliding
nation informs the source, and the source slows down.         window continually changes, moving in the direction of
TCP then gradually increases its sending rate until it        a target size that is given by the congestion window.
again receives an indication of congestion. This cycle           The congestion window itself is not a fixed number:
of increase and decrease enables the source computers         rather, it is constantly being updated, and the precise
to discover and use the available capacity, and to share      rules for how this is done are critical for TCP’s shar-
it between different flows of packets.                          ing of capacity. The rules currently used are as follows.
   TCP has been outstandingly successful as the Inter-
net has evolved from a small-scale research network to          2. Even our detailed description of TCP is simplified, concerning
                                                              just the congestion-avoidance part of the protocol and omitting dis-
today’s interconnection of hundreds of millions of end-       cussion of timeouts or of reactions to multiple congestion indication
points and links. This in itself is a striking observation.   signals received within a single round-trip time.

VII . $4$ .

The Mathematics of Traffic in Networks

Every time a positive acknowledgment comes in, cwnd is increased by cwnd $- 1$ , and every time a lost packet is detected, cwnd is halved. 3 Thus, if the source computer detects a lost packet, it realizes that there has been some congestion and backs off for a while, but if all its packets are getting through then it allows the rate at which it sends packets to inch up again. If p is the probability that a packet is lost, then with probability $1 - p$ the congestion window will increase by cwnd $- 1$ and with probability p it will decrease by

$12$ cwnd. The expected change in the congestion window cwnd per update step is therefore cwnd $- 1(1 - p) - \frac{1}{2}$ cwnd  p. The expected change will be positive for small values of cwnd, but will become negative if cwnd is big enough. We might therefore expect an equilibrium for cwnd to arise when the expression is zero: that is, when

$2(1 - p)$

cwnd  = / p

Now let us see how this calculation can be extended to networks. Suppose that a network consists of a set of nodes connected by directed links, like the network illustrated in figure $1$ . As earlier, let J be the set of directed links, let R be the set of routes, and let $A = (Ajr$ , $j \in J, r \in R)$ be the link-route incidence matrix. When a request reaches a computer in this network, that computer will set up a congestion window for the flow of packets that will result. Since there will be many different such congestion windows, they need to be labeled, and it is convenient to label them with the route that will be used for the flow. (Exactly how these flows are routed is a complicated and important question, but one that we shall not discuss here .) So, for each route r that is being used, let cwnd r be the congestion window for that route. Let T r be the round-trip time for the route r : that is, the time between the sending out of a packet and the receiving of an acknowledgment for it. 4 Finally, define a variable x r to be cwnd r  /  T r . $3$ . These increase and decrease rules may appear rather mysterious, and indeed it is only recently that many of their macroscopic consequences have begun to be understood. The rules have worked well for more than a decade, but they are now beginning to show signs of age, and much current research is aimed at understanding the full consequences of changing them. $4$ . The round-trip time comprises the time taken for a packet to travel along links, called the propagation delay, together with processing times and queueing delays at nodes. Processing times and queueing delays tend to decrease with increasing computer speeds, but the finite speed of light places a fundamental lower bound on propagation delays. We shall treat the round-trip time for a route as a constant. Hence, we assume that congestion at a link makes itself felt by packet loss rather than additional packet delay.

$869$

Now at any given time the sliding window consists of those packets that have been sent but not acknowledged. Therefore, if a packet has just been acknowledged and its round-trip has taken time T r , the sliding window consists of all packets sent out in the last T r time units. Since the source computer is aiming for the number of such packets to be about cwnd r , we can interpret x r to be the rate at which packets are transferred over route r . Thus, the numbers x r form a flow vector that is closely analogous to the traffic flow vector discussed earlier. As we did then, let us define a vector $y = Ax$, so that y j is the total flow through link j, obtained by summing x r over each route r that passes through link j. Let p j be the proportion of packets that are lost, or “dropped,” at link j. We expect p j to be related to y j , the total flow through link j, as follows. If y j is less than the capacity C j of link j, then p j will be zero; there will be no dropped packets at link j if the link is not full. And if $p^{j} > 0$ then $y^{j} = C^{j}$ ; if packets are dropped then the link is full. If we assume that the proportions of packets dropped at links are small, then the probability that a packet is lost on route r is approximately

$p^{r} =$

p j A jr .

$j\inJ$

(The exact formula would be $(1 - p^{r}) = j\in^{J}(1 - p^{j})$ A $jr$ , but when the p j are small we can ignore their products .) Since x r  =  cwnd r  /  T r , our earlier calculation of cwnd now gives us that

$2(1 - p^{r})1x^{r} =$ / T r

p r

Is it possible to choose the rates x  =  (x r , r $\in$ R) and the drop probabilities p  =  (p j , j $\in$ J) in a consistent fashion, so that the last two equations are satisfied and either p j is zero or y $j = C$ j for each j $\in$ J? The remarkable observation is that such a choice corresponds precisely to the solution of the following optimization problem (Kelly 2001 ; Low $\text{et al}$. 2002) . √

$2$

x r T r

arctan √

Maximize

$T_{2}$

r

$r\inRx \ge 0$ ,

over

$Ax \le C.$

subject to

Some aspects of this optimization problem are as we might expect: in particular, the inequality Ax $\le$ C simply adds up the flows through link j and requires that the sum not exceed the capacity C j of link j, for each link j $\in$ J. But, as before, the function being optimized is undoubtedly strange. The arctan function, illustrated

870                                                                                    VII. The Influence of Mathematics

      arctan(x)                                                   an objective function for the entire network. The objec-
                                                                  tive function has a surprising interpretation: it is as
                                                                  if the usefulness of the flow rate xr to the source–
                                                                  destination pair served by this route is given by a utility
                                                                  function          \sqrt{2}          xr Tr
                  0                                                                     arctan √        ,
                                                     x                               Tr             2
Figure 4 The arctan function. The Internet’s TCP implic-          and the network is attempting to maximize the sum
itly maximizes a sum of utilities over all the connections        of these utility functions across all source–destination
present in a network: this function shows the shape of the        pairs, subject to constraints arising from the limited
utility function for a single connection. The horizontal axis     capacities of the links.
is proportional to the rate of the connection, and the vertical
                                                                     The arctan function, illustrated in figure 4, is concave.
axis is proportional to the usefulness of that rate. Both axes
are scaled in terms of the round-trip time of the connection.     Thus, if two or more connections share an overloaded
                                                                  link, the rates achieved will be approximately equal,
                                                                  since otherwise the total utility could be increased by
in figure 4, is the inverse function to the trigonometric          reducing the largest rate a little and increasing the
function tan, and can also be defined as                           smallest rate a little. As a result, there is a tendency
                                x
                                 1                                for TCP to share resources more or less equitably. This
                  arctan(x) =        du.
                              1 + u2
                                0                                 is very different from resource-control mechanisms in
From this form, we see that its derivative with respect           traditional telephone networks where, if the network
to x is 1/(1 + x 2 ).                                             is overloaded, some calls are blocked in order that the
  Let us sketch the relationship between the opti-                calls that are accepted are unaffected by the overload.
mization problem and the equilibrium rates and drop
probabilities. Define the function                                                     6   Conclusion
L(x, z; μ)                                                        The behavior of large-scale systems has been of great
                      √
                         2 xr Tr                                  interest to mathematicians for over a century, with
          =         arctan √           + μ · (C − Ax − z),
                 Tr           2                                   many examples coming from physics. For example, the
            r ∈R
                                                                  behavior of a gas can be described at the microscopic
where μ = (\mu j , j ∈ J) is a vector of Lagrange multi-
                                                                  level in terms of the position and velocity of each
pliers, and z = C − Ax is a vector of slack variables,
                                                                  molecule. At this level of detail a molecule’s velocity
measuring the spare capacity on each of the links j ∈ J
                                                                  appears as a random process, as the molecule bounces
of the network. Then, using the derivative of the arctan
                                                                  around off other molecules and the walls of the con-
function,
                                                                 tainer. Yet consistent with this detailed microscopic
  ∂L         1                              ∂L
      = (1 + 2 xr2 Tr2 )−1 −     \mu j Ajr and      = −\mu j .          description of the system is macroscopic behavior best
 ∂xr                                        ∂z j
                             j∈J                                  described by quantities such as temperature and pres-
We look for a maximum of L over x, z ⩾ 0; it turns out            sure. Similarly, the behavior of electrons in an elec-
that this maximum is, under the identification \mu j = pj ,           trical network can be described in terms of random
precisely the collection (xr , r ∈ R), (pj , j ∈ J) of            walks, and yet this simple description at the micro-
rates and drop probabilities that we were looking for.            scopic level leads to rather sophisticated behavior at
For example, setting to zero the partial derivative with          the macroscopic level: Kelvin showed that the pattern
respect to xr gives the desired equation for xr .                 of potentials in a network of resistors is exactly the
  In summary, for each link j ∈ J the Lagrange multi-             one that minimizes heat dissipation for a given level of
plier \mu j arising from the optimization problem is pre-            current flow (Kelly 1991). The local, random behavior
cisely the proportion pj of packets dropped at that link,         of the electrons causes the network as a whole to solve
much as the Lagrange multipliers arising earlier were             a rather complex optimization problem.
precisely the delays on links of a road traffic network.               In the last fifty years we have begun to realize that
And the equilibrium reached by the interaction of many            large-scale engineered systems are often best under-
competing TCPs, each implemented only on the source               stood in similar terms. Thus a microscopic description
and destination computers, is effectively maximizing               of traffic flow in terms of each driver’s choice of the

