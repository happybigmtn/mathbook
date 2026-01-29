# The Mathematics of Traffic in Networks

862

always unsatisfactory from the point of view of mathe-matical understanding. Similar miracles played a role in independent constructions by P. G. Lemarié (now Lemarié-Rieusset) and G. Battle of orthonormal wavelet bases that were piecewise polynomial. (They came tothe same result from completely different points of departure—harmonic analysis for Lemarié and quan-tum field theory for Battle.) in computer vision in the United States, learned about A few months later, S. Mallat, then a Ph.D. candidate these wavelet bases. He was on vacation, chatting on thebeach with a former classmate who was one of Meyer’s graduate students. After returning to his Ph.D. work, Mallat kept thinking about a possible connection with the reigning paradigm in computer vision. On learning that Meyer was coming to the United States in the fall of 1986 to give a named lecture series, he went to see himand explain his insight. In a few days of feverish enthusiasm, they hammered out different approach to Meyer’s construction inspired by multiresolution analysis, a the computer vision framework. In this new setting, allthe miracles fell into place as inevitable consequences of simple, entirely natural construction rules, embody-ing the principle of successively finer approximations. Multiresolution analysis has remained the basic princi-ple behind the construction of many wavelet bases and redundant families. to that point was supported inside an interval, so the None of the smooth wavelet bases constructed up algorithms to implement the transform (which wereusing the subband filtering framework without their creators knowing that it had been named and devel-oped in electrical engineering) required, in principle, infinite filters that were impossible to implement. Inpractice, this meant that the infinite filters from the mathematical theory had to be truncated; it was notclear how to construct a multiresolution analysis that would lead to finite filters. Truncation of the infinite filters seemed to me a blemish on the whole beautiful edifice, and I was unhappy with this state of affairs. Ihad learned about wavelets from Grossmann and about multiresolution analysis from explanations scribbledby Meyer on a napkin after dinner during a conference. In early 1987 I decided to insist on finite filters for the implementation. I wondered whether a whole multiresolution analysis (and its corresponding orthonormal basis of wavelets) could be reconstructed from appropriate but finite filters. I managed to carry out this pro-gram, and as a result found the first construction of an

VII. The Influence of Mathematics

orthonormal wavelet basis for which supported on an interval.ψ is smooth and Soon after this, the connection with the electrical engineering approaches was discovered. Especial-ly easy algorithms were inspired by the needs of computer graphics applications. More exciting con-struc tions and generalizations followed: biorthogonal wavelet bases, wavelet packets, multiwavelets, irregularly spaced wavelets, sophisticated multidimensiona lwavelet bases not derived from one-dimensional constructions, and so on.It was a heady, exciting period. The development of the theory benefited from all the different influ-ences and in its turn enriched the different fields with which wavelets are related. As the theory has matured, wavelets have become an accepted addition to the mathematical toolbox used by mathematicians, scien-tists, and engineers alike. They have also inspired the development of other tools that are better adapted totasks for which wavelets are not optimal.

Further Reading

Aboufadel, E., and S. Schlicker. 1999.New York: Wiley Interscience. Discovering Wavelets. Blatter, C. 1999.Peters. Wavelets: A Primer. Wellesley, MA: AK Cipra, B. A. 1993. Wavelet applications come to the fore.SIAM News 26(7):10–11, 15. Frazier, M. W. 1999.Linear Algebra. New York: Springer.An Introduction to Wavelets through Hubbard, B. B. 1995.The Story of a Mathematical Technique in the Making The World According to Wavelets:. Meyer, Y., and R. Ryan. 1993.Wellesley, MA: AK Peters.Applications. Philadelphia, PA: Society for Industrial and Wavelets: Algorithms and Mulcahy, C. 1996. Plotting & scheming with wavelets.Applied Mathematics (SIAM).ematics Magazine 69(5):323–43. Math VII.4 The Mathematics of Traffic in

Networks

Frank Kelly

1 Introduction

We are all familiar with congested roads, and perhaps also with congestion in other networks such as the Internet, so it is obviously important to have a gen-eral understanding of how and why congestion occurs in networks. However, the pattern of the flow of traf-fic through a network is the consequence of a subtle

VII.4. The Mathematics of Traffic in Networks

and complex interaction between different users. For example, in a road network we would normally expect each driver to attempt to choose the most convenient route, and this choice will depend upon the delays the driver expects to encounter on different roads; butthese delays will in turn depend upon the choices of routes made by others. This mutual interdependence makes it difficult to predict the effects of changes to the system, such as the construction of a new road or the introduction of tolls in certain places.Related issues arise in other large-scale systems like the telephone network or the Internet. In these systemsa major practical concern is the extent to which control can be Web, the rate at which a Web page is transferred to decentralized. When you are browsing the you across the network is controlled by software proto-cols running on your computer and on the Web server hosting the Web page, and not by some huge central computer. This decentralized approach to flow control has been outstandingly successful as the Internet has evolved from a small-scale research network to today’s interconnection of hundreds of millions of hosts, but is beginning to show signs of strain. In developing new protocols, the challenge is to understand just which aspects of decentralized flow control are important ifthe network as a whole is to continue to expand and evolve.In this article we introduce the reader to some of the mathematical models that have been used to address these issues. The models need to be able to represent several distinct aspects of the system. We shall see that the language of[I.3 §4.2](/part-01/fundamental-definitions) is needed to capture the pattern of connec-graph theory [III.34] and matrices tions within the network. Calculus is needed to describe how congestion depends upon traffic volumes. And optimization concepts are needed to model the wayin which self-interested drivers choose their shortest routes, or the way that decentralized controls in communication networks can cause the system as a wholeto perform well. 2 Network Structure Figure 1 illustrates a set of three nodes connected by aset of five directed links. We might imagine the nodes as representing towns or locations within a city, and thelinks as representing road capacity between different nodes. A two-way road is represented by two links, one in each direction. Notice that there are two routes fromnode c to node a that a driver can choose: the first route,

863

b

c

a

12⎛⎜⎜ ab ac10 10 ba01 bc ca1 ca2 cb1 cb200 00 01 00 10 ⎞⎟⎟A = 3 ⎜⎜⎜⎜⎜ 0 1 0 1 0 0 0 0 ⎟⎟⎟⎟⎟$4$⎝ 0 0 0 0 0 1 1 0 ⎠$5 0 0 0 0 1 0 0 1 abac$⎛⎜⎜ ab ac10 01 ba00 bc ca1 ca2 cb1 cb200 00 00 00 00 ⎞⎟⎟H = babc ⎜⎜⎜⎜⎜⎜ 00 00 10 01 00 00 00 00 ⎟⎟⎟⎟⎟⎟$ca$⎜⎝ 0 0 0 0 1 1 0 0 ⎟⎠$cb 0 0 0 0 0 0 1 1 Figure 1matrix$,$A$. The matrix A simple network and its link-route incidence H represents which routes serve which source–destination pairs. let us call it ca1, is the direct route, using link 5; thesecond route, let us call it ca2, is via node b and uses links 4 and 2. of possible routes. One way to describe the relation-Let J be the set of directed links and let R be the set ship between links and routes is with a table, ordefined as follows. Set A = 1 if link j lies on route matrix, r A, and set= (A , j A\injr J, r=0 otherwise. \text{This defines a matrix}\in  R) called thejr link-route incidence matrix. Each column of the matrix corresponds to one$jr$ of the routesthe network. The column for router , and each row to one of the linksr is composed ofj of 0 s and 1 s: the 1 s tell us which links are on routefor the rows, the 1 s in the row for linkj tell us whichr . As routes pass through that link. Thus, for example, the incidence matrix in figure 1 has a column for each of the two routes, ca1 and ca2, between node c and node a.

864

D(y)

0 y

Figure 2 expressed as a function of the total flow The time taken to travel along a link, y along the link.D(y), As the flow increases, congestion effects cause additional delay. These columns encode the information that route ca1 uses link 5 and that route ca2 uses links 4 and 2. Note that the incidence matrix does not tell us the order ofthe links on the route. Also the incidence matrix shown does not include all logically possible routes, but itcould if we wanted it to. And while we have illustrated a very small network, there is no limit to the number ofnodes and links there could be in the network, or to the number of choices of route each driver might have—the incidence matrix would just be bigger.One quantity of interest in a network is the volume of traffic along a particular route or link. Letflow on route r, defined as the number of cars per hour$x^{r} \text{be the}$ that travel along that route. We can list the flows alongall the routes in the network as a sequence of numbers $x = (x$, r \in R), \text{and we can think of this sequencer as a vector}. \text{From this vector we can calculate the totalflow through a link}: \text{for example}, \text{the total flow through link} 5 \text{in figure} 1 \text{is the sum of the flows along routes ca}1 \text{and cb}2, \text{since these are the routes that pass through link} 5. \text{In general}, \text{since through linkj and} A = Ajr0 \text{when it does not}, \text{the total} = 1 \text{when a route} r \text{passes flow through linkj}, \text{coming from all of the routes thatjr use it}, is yj =r \in R Ajr xr, j \in  J.

Again, the numbers(y , j \in  J) can be thought ofj

as forming a vector. The above equations can then be represented succinctly in matrix form as y = Ax. \text{on the total flow through the link}, \text{and we expect thisto influence the time taken to travel along the link}. \text{We We expect the level of congestion at a link to depend VII}. \text{The Influence of Mathematics shall call this time theway in which the delay might depend on the amount ofdelay}. Figure 2 \text{shows a typical flow}. \text{At small values of the flowjust the time taken to travel along an empty road}; \text{fory the delay} D(y) \text{is larger values ofpossibly much larger}, \text{owing to congestion effects}.y \text{the delay} D(y) \text{is larger}, \text{and quite}1 \text{through that link is Let Dj}(yj) \text{be the delay along linky}; \text{the nature of this delay mayjwhen the flow} j \text{depend upon} \text{characteristics} \text{of linkand width}, \text{so we have to use the subscriptj such as its lengthj on the function} D \text{to indicate that the functions for thej various links can be different}. 2.1 \text{Routing Choices Given two nodes in a network there will in general be avariety of possible routes capable of linking them}. \text{For example}, \text{in figure} 1 \text{we have seen that the incidence matrix} A \text{records two routes between nodes} c \text{and a}. \text{The pair ca is an example of a Flow originating from source} c \text{and destined for node asource}–\text{destination pair}. \text{can use either ca}1 \text{or ca}2, \text{the two routes that serve this source}–\text{destination pair}. \text{We now need another matrix}, \text{this time to describe the relationship between source}–\text{destination pairs and routes}. \text{Let us uses to denote a typical source}–\text{destination pair}, \text{and letof all source}–\text{destination pairs}. Then, \text{for each source}–S \text{be the set destination paircan be served by the routes and each router} , \text{and letr}, let H Hsr= =0 other - 1 if s wise. \text{This defines a matrix}$H = (Hsr$, ssr \in S, r \in R); figure 1 \text{gives an example}. \text{Observe that the row labeledca has} 1 s \text{for the two routes}, r = ca1, ca2, \text{that serve the source}–\text{destination pairs} = ca. \text{Each column of} H cor- \text{responds to a route}, \text{and contains a single} 1: \text{this identi}-\text{fies the source}–\text{destination pair served by the route}. \text{For each routepair served byr let us writer}: \text{for example}, \text{in figure} 1, s(r )\text{for the source}–destinations(ac) = \text{ac ands}(ca1 \text{From the vector}) = ca. x = (x , r \in R) \text{we can calculate ther total flow from a source to a destination}: \text{for example}, \text{the flow from node} c \text{to node a in figure} 1 \text{is the sum of for the curve representing delay as a function of flow to bend backupon itself}, \text{so that higher delays than shown in the graph correspond}1. \text{The graph shown in figure} 2 \text{is single valued}. \text{It is quite possible to flowspart of the graph when you experience stop}–\text{start driving conditions smaller than the maximum flow shown there}. \text{You are in this on a congested but otherwise incident}-\text{free highway}. \text{Part of the aimof traffic management is to keep flows and delays away from this part of the graph}, \text{which we will not consider further}.\text{We will assume that the graph is increasing and smooth}, \text{which will make our use of calculus later more} \text{straightforward}. Formally, \text{weshall assume that} D(y)\text{is a continuously} \text{differentiable} \text{and strictly increasing function of its argument figure} 2.y, \text{as in the graph shown in VII}.4. \text{The Mathematics of Traffic in Networks flows along routes ca}1 \text{and ca}2, \text{since from the matrixwe see that these are the routes that serve the source}– H destination pair ca. More generally, iffis the total flow

s

of traffic added up over all of the routes serving source–destination pair$s$, thenfs =r \in R Hsr xr$, s \in S$.

Thus the vector$f = (f$, s \in S)of source–destination

$s$

flows can be expressed succinctly in matrix form as$f = Hx$. 3 Wardrop Equilibria We are now able to approach the central issue: howdo the traffic flows between the various sources and destinations distribute themselves over the links of the network? Each driver will try to use whatever route isquickest, but this may make other routes quicker or slower and cause other drivers to change their routes.Only when they cannot find alternative, quicker routes will drivers not have an incentive to change routes. What does this mean mathematically?Let us first calculate the time taken for a driver to travel along route A tells us which linksr . The column labeledj are on route r . If we add up ther of the matrix delays on each of these links, we get the time taken to travel along router as the expression Dj(yj)Ajr .j\in J

Now the driver using route other route that served the same source–de st in at i onr could have used any pairr , we requires(r ). So, for the driver to be content with route for every other route destination pair$j \in^{J} D^{j}s(r )(y^{j}$.)Arjr^that serves the same source–$⩽^{j} \in^{J} D^{j}(y^{j})A^{j}r^$ a vector Define ax Wardrop equilibrium= (x , r \in  R) of nonnegative numbers(Wardrop 1952) to ber

such that for every pair of routesr , r^ \text{serving the same} source–destination pair, $x^{r} > 0 ⇒^{j} \in^{J} D^{j}(y^{j})A^{j}r ⩽^{j} \in^{J} D^{j}(y^{j})A^{j}r^$, where$y = Ax$. The inequality expresses the defining characteristic of a Wardrop equilibrium: that if a router is actively used, then it achieves the minimum delay over all routes serving its source–destination pair Does a Wardrop equilibrium exist? It is not at alls(r ). clear whether it is possible to find a vectorx such

865

that all of the above inequalities, for the various routes through the network, are satisfied simultaneously. To answer the question, we shall proceed by addressing a seemingly different question: what is the answer to the following optimization problem? Minimize yj D (u)duj

over$x^{j} \in ⩾^{J} 0^{0}$, y,

subject to$Hx = f$, Ax = y.

Let us see in outline why this optimization problem hasa solution(x, y), and why, if (x, y) is a solution, the vector The optimization problem has some aspects that arex is a Wardrop equilibrium. quite natural. An obvious constraint is that the flows along each route are nonnegative, which is why we insist thatx ⩾ 0. The constraints Hx = f , Ax = y just enforce the accounting rules we have seen earlier—therules that allow the source–destination flowsf and the link flows using the matrices yto be calculated from the route flows H and A, respectively. We view thex source–destination flowsfas fixed, to be distributed over the various routes. Given a choice ofis then to find the route flowsx and consequently thef , our task link flowsy will be nonnegative, sincey . At a solution to the optimization problemx is. This much is fairly natural, but the function to be minimized looks somewhat strange. Its importance rests on the fact that the rate of change of the integral yj Dj(u) du

with respect totheorem of calculus$y^{j} is^{0}D$[I.3 §5.5](/part-01/fundamental-definitions), and the function to be$j(y^{j})$, by the fundamental minimized is the sum of these integrals over all links.We shall see that the link between Wardrop equilibria and the optimization problem is a direct consequence of this observation.To find a solution to the optimization problem, we will use the method of Define the function lagrange multipliers [III.64](/part-03/optimization-and-lagrange-multipliers).

L(x, y;λ, \mu)=y j D (u) du + λ · (f - Hx) - \mu · (y - Ax), jj\in^J^0

where Lagrange multipliers, to be fixed later. The idea is that ifλ = (\lambda s$, s \in S)$, \mu = (\mu j, j \in  J) are vectors of we make the right choices of Lagrange multipliers, the minimization of the function solution to the original problem. The reason this works L over x and ywill find a

866

is that, for the right choices of Lagrange multipliers, the constraints Hx = f and Ax = y are consistent with the minimization of To minimize the function L. Lwe need to differentiate. First,\partial L\partial y = Dj(yj) - \mu j.j

Second,

$\partial L\partial x^{r} = −λ^{s}(r ) +^{j} \in^{J} \mu^{j} A^{j}r$.

Note that the form of the matrix with respect toxr to pick out exactly one component H causes the derivative ofthe derivative to pick out just those components ofλ$, namely λ^{s}(r )$, and the form of the matrix A causes\mu that correspond to links on route allow us to deduce that a minimum ofr . \text{These derivatives} L, \text{over all} x ⩾ 0 and all$y$, \text{occurs when}\mu j = Dj(yj) and \lambda s(r ) =j\in J \mu j Ajr if xr > 0⩽ \mu j Ajr if xr = 0.

The equality condition forx > 0 then small variations up or down inj\in J \lambda s(r )is straightforward: ifx should not decrease the functionr L(x, y;λ, μ)$, \text{and hence we}^{r}$ deduce that the partial derivative with respect tomust be zero. But ifx = 0 then we can only vary xxr upward, and so all we can deduce is that the partial derivative with respect to$r x^{r} \text{is nonnegative}$, \text{and from}r this we deduce the inequality condition for Minimizing the function$L \text{corresponds to allowing}λ^{s}(r )$. the constraints Hx = f , Ax = y to be violated, but at a cost: now one charges a price\lambda for any shortfall ofs

the sumj\in J Ajr xr below fs and a price \mu j for any excess of the sum results on convex optimization it is known that there$j \in^{J} A^{j}rx^{r} over y^{j}$. From general exist Lagrange multipliers such that(x, y) minimizes(λ, μ)L(x, yand a vector;λ, μ), satisfies the(x, y) constraints Hx = f , Ax = y, and solves the original optimization problem.Our solution for the Lagrange multipliers shows that they have a simple interpretation:\mu is the delay on linkjj and \lambda is the minimum delay over all routes servings

the node pairs. The various conditions established for the multipliers thus show that an optimum of the func-tion L, known as the objective function, corresponds precisely to a Wardrop equilibrium.

VII. The Influence of Mathematics

accordance with the self-interested choices of drivers, the equilibrium flows Thus if traffic in the network distributes itself in(x, y) will solve an optimiza- tion problem. This result is originally due to Beckmannet al. (1956), and it provides a remarkable insight into the equilibrium patterns achieved in road traffic networks. The pattern of traffic resulting from the indi-vidual decisions of a large number of self-interested drivers behaves as if a central intelligence were direct-ing flows to optimize a certain (rather strange) objective function.The result does not mean that average delays in the network will be minimal: a striking illustration ofthis fact is provided by Braess’s paradox (Braess 1968), which we describe next. 4 Braess’s Paradox Consider the network illustrated in figure 3(a). Cars travel from node S to node N, via either node W or node E. The total flow is 6, and the link delays D (y)are givenj

next to the links in the figure. One can imagine the fig-ure illustrating rush hour as commuters travel from the center of a city in the south to their homes in the north.Commuters learn from experience what the delays are likely to be along the eastern and western routes. the distribution of traffic shown is the Wardrop equilibrium: there is no incentive for any drivers to change their routes, since the two possible routes incur thesame delay, namely(10 \times 3)+(3 + 50) = 83 \text{units of time}. Now suppose that a new link is added, between nodes W and E, as shown in figure 3(b). Traffic is attracted onto the new link, since to begin with it offers a shorter journey time from the south to the north. Eventually, after everyone knows about the new link and traffic patterns have settled down, a new Wardrop equilibrium will be established, and this is shown in figure 3(b). In the new equilibrium there are three routes used, whicheach incur the same delay, namely$(10 \times 4)+ (2 + 50) =(10 \times 4) + (2 + 10) + (10 \times 4) =$92. Thus in figure 3(b) each car incurs a delay of 92, while in figure 3(a) thedelay of each car was only 83. Adding the new link has increased everyone’s delay! lows. At a Wardrop equilibrium each driver is using The explanation for this apparent paradox is as fola route which, given the choices of others, gives the minimum delay over the routes available between that driver’s source and destination. But there is no intrinsic reason why this equilibrium should correspond to par-ticularly low delays relative to what could be achieved

VII.4. The Mathematics of Traffic in Networks

(a)

N

y + 50 10 y

W E

10 y y + 50

S

Figure 3 journey time to lengthen. (After Braess (1968) and Cohen (1988).)Braess’s paradox. The addition of a link causes everyone’s by another flow pattern. If all drivers could be encouraged to depart from their own self-interested choices, it is quite possible that all might benefit. And in the above example, if all drivers in the second network could agree to avoid the new link, effectively converting the network back into the first network, then all would incur lower delays. To explore the point further, note that the product of the flowat linkj yper unit time, aggregated over all the vehiclesj and the delay Dj(yj) is the delay incurred using link imizes the total delay per unit time, summed over the$j$. Let us try to find the flow pattern that minentire network. Consider then the following problem. Minimize$j \in^{J} y^{j}D^{j}(y^{j})$ over$x ⩾ 0$, y, subject to$Hx = f$, Ax = y. Note that the problem is of the same form as the earlier optimization problem, but the function to be minimized now measures the total network delay per unittime. (Recall that the function to be minimized in the first optimization problem seemed initially to be rather arbitrary, with its eventual motivation being that its minimization was achieved by a Wardrop equilibrium.)

867

(b)

N

y + 50 10 y

W y + 10 E

10 y y + 50

S

Again define the function

L(x, y;λ, \mu)=j \in J yj Dj(yj) + λ · (f - Hx) - \mu · (y - Ax).

Again

$\partial L\partial x^{r} = −λ^{s}(r ) +^{j} \in^{J} \mu^{j} A^{j}r$,

but now

$\partial L\partial y = D^{j}(y^{j}) + y^{j} D^{j}(y^{j}) - \mu^{j}$.j

Hence a minimum of L over x ⩾ 0 and y occurs when\mu j = Dj(yj) + yj Dj(yj)

and

\lambda s(r ) =j\in J \mu j Ajr if xr > 0⩽j\in J \mu j Ajr if xr = 0.

cated interpretation. Suppose that, in addition to thedelay The Lagrange multipliers now have a more sophisti-D (y ), users of link jincur a traffic-dependent

$j^{j}$

toll

$T^{j}(y^{j}) = y^{j} D^{j}^ (y^{j})$.$868 Then$\mu is the generalized cost of using link j, defined

$j$

as the sum of the toll and the delay, andmum generalized cost over all routes serving the node$λ^{s} \text{is the mini}-$ pairmize the sum of their tolls and their delays, then theys. If users select routes in an attempt to mini- will produce a flow pattern that minimizes total delayin the network. Notice that the generalized cost\mu isj(∂/∂ytotal delay at linkj)(yj D(yj))j, which is the rate of increase in theas the flowy is increased. So thej

assumption now is that, in a certain sense, drivers try to minimize their contribution to the total delay rather than minimizing their own delay. their own delay, then the resulting equilibrium flowswill minimize a certain objective function defined for We have seen that if drivers attempt to minimize the network. However, the objective function is cer-tainly not the total network delay, and thus there is no guarantee that when capacity is added to a network the situation is improved. We have also seen that, with the imposition of appropriate tolls, it is possible for theself-interested behavior of drivers to lead to an equilibrium pattern of flow that minimizes total delay. A major challenge for governments and transport planners is to understand how insights from these and more sophisti-cated models might be used to encourage more efficient development and use of road networks (Department for Transport 2004). 5 Flow Control in the Internet When a file is requested over the Internet, the com-puter that hosts that file breaks it into small packets of data that are then transferred across the networkby the transmission control protocol of the Internet, or TCP. The rate at which packets enter the network is con-trolled by TCP, which is implemented as software on the two computers that are the source and destination of the data. The general approach is as follows (Jacobson 1988). \text{When a link within the network becomes overloaded}, \text{one or more packets are lost}; \text{loss of a packet is taken as an indication of congestion}, \text{the desti}-\text{nation informs the source}, \text{and the source slows down}. \text{TCP then gradually increases its sending rate until itagain receives an indication of congestion}. \text{This cycle of increase and decrease enables the source computersto discover and use the available capacity}, \text{and to share it between different flows of packets}.\text{TCP has been outstandingly successful as the Internet has evolved from a small}-\text{scale research network totoday}’s \text{interconnection} \text{of hundreds of millions of endpoints and links}. \text{This in itself is a striking observation}. VII. \text{The Influence of Mathematics Each of a large but indeterminate number of flows is controlled by a feedback loop that can know only of that flow}’s \text{experience of congestion}. A \text{flow does notknow how many other flows are sharing a link on its route}, \text{or even how many links are on its route}. \text{Thelinks vary in capacity by many orders of magnitude}, \text{as do the numbers of flows sharing different links}. \text{It is remarkable that so much has been achieved in such arapidly growing and heterogeneous network with congestion controlled just at the endpoints}. \text{Why does this algorithm work so well}? TCP’s success, \text{by interpreting the protocol as a decen}-\text{tralized parallel algorithm that solves an optimization In recent years theoreticians have shed some light on problem}, \text{just as the decentralized choices of drivers ina road network solve an optimization problem}. \text{We shall outline the argument}, \text{beginning with a more detailed description of TCP}.2 \text{tainshould arrive at their destination in that order}. \text{When Packets transferred by TCP across the Internet con}-\text{sequence numbers indicating their order}, \text{and they a packet is received at the destination}, \text{it is acknow} - ledged: an \text{acknowledgment} \text{is a short packet sent by the destination back to the source}. \text{If a packet has beenlost in the transfer}, \text{the source can tell this from the sequence numbers contained in the} \text{acknowledgments}.\text{The source keeps a copy of each packet sent until it has been positively acknowledged}; \text{these copies formwhat is called a sliding window}, \text{and allow packets lost in transfer to be sent again by the source}.Meanwhile, \text{stored in the source computer there is a numerical variable known as theand denoted cwnd}. \text{The congestion window directs the congestion window size of the sliding window in the following sense}: \text{if thesize of the sliding window is less than cwnd}, \text{then the computer increases it by sending out a packet}; \text{if it isgreater than or equal to cwnd}, \text{then it waits for positive} \text{acknowledgments} \text{to come in}, \text{which have the effect ofreducing the size of the sliding window and}, \text{as we shall see}, \text{increasing window continually changes}, \text{moving in the direction ofcwnd as well}. Thus, \text{the size of the sliding a target size that is given by the congestion window}.\text{The congestion window itself is not a fixed number}: rather, \text{it is constantly being updated}, \text{and the precise rules for how this is done are critical for TCP}’s \text{sharing of capacity}. \text{The rules currently used are as follows}. \text{just the congestion}-\text{avoidance part of the protocol and omitting dis}-\text{cussion of timeouts or of reactions to multiple congestion indication}2. \text{Even our detailed description of TCP is simplified}, \text{concerning signals received within a single round}-\text{trip time}. VII.4. \text{The Mathematics of Traffic in Networks Every time a positive} \text{acknowledgment} \text{comes in}, \text{is increased by cwnd} - 1, \text{and every time a lost packet cwnd is detected}, \text{cwnd is halved}.3 Thus, \text{if the source computer detects a lost packet}, \text{it realizes that there hasbeen some congestion and backs off for a while}, \text{but if all its packets are getting through then it allows therate at which it sends packets to inch up again}. probability 1 \text{by Ifcwndp is the probability that a packet is lost}, \text{then with}-1 \text{and with probability} - p \text{the congestion window will increasep it will decrease by} 12 cwnd. \text{The expected change in the congestion window cwnd per update step is therefore cwnd}-1(1 - p) -1 2 cwnd p. The expected change will be positive for small valuesof cwnd, but will become negative if cwnd is big enough. We might therefore expect an equilibrium forarise when the expression is zero: that is, whencwnd to cwnd$= 2(1p - p)$. to networks. Suppose that a network consists of a setof nodes connected by directed links, like the net-Now let us see how this calculation can be extended work illustrated in figure 1. As earlier, letof directed links, let R be the set of routes, and let J be the set Amatrix. When a request reaches a computer in this net-= (Ajr , j \in  J, r \in  R) be the link-route incidence work, that computer will set up a congestion window for the flow of packets that will result. Since there willbe many different such congestion windows, they need to be labeled, and it is convenient to label them with theroute that will be used for the flow. (Exactly how these flows are routed is a complicated and important ques-tion, but one that we shall not discuss here.) So, for each route window for that route. Letr that is being used, let T be the cwnd rr ou nd-trip timebe the congestion forr

the routeof a packet and the receiving of an acknowledgment for$r$: that is, the time between the sending out it.4 Finally, define a variable$x^{r} \text{to be cwnd}^{r}/T^{r}$. and indeed it is only recently that many of their macroscopic conse-quences have begun to be understood. The rules have worked well3. These increase and decrease rules may appear rather mysterious, for more than a decade, but they are now beginning to show signsof age, and much current research is aimed at understanding the full consequences of changing them.4. The round-trip time comprises the time taken for a packet to travel along links, called the propagation delay, together with pro-cessing times and queueing delays at nodes. Processing times and queueing delays tend to decrease with increasing computer speeds, but the finite speed of light places a fundamental lower bound on propagation delays. We shall treat the round-trip time for a route as aconstant. Hence, we assume that congestion at a link makes itself felt by packet loss rather than additional packet delay.

869

of those packets that have been sent but not acknow-ledged. Therefore, if a packet has just been acknow-Now at any given time the sliding window consists ledged and its round-trip has taken time T , the slid-r

ing window consists of all packets sent out in the last Tr time units. Since the source computer is aiming for the number of such packets to be about interpretx to be the rate at which packets are trans-cwndr, we canr

ferred over router . Thus, the numbers xform a flow

r

vector that is closely analogous to the traffic flow vector discussed earlier. As we did then, let us define a vectory = Ax, so thaty(xj)ris the total flow through linkover each router that passes through linkj, obtained by summingj. Let pj be the proportion of packets that are lost, or “dropped,”at linkj. We expect p to be related to y , the total flow through linkj, as follows. Ifj y is less than thejj

capacity$C^{j} \text{of link} j$, then pjwill be zero; there will be no dropped packets at linkif$p > 0 then y = C$; if packets are dropped then thej if the link is not full. And link is full. If we assume that the proportions of packets dropped at links are small, then the probability that a$(j^{j})^{j}$ packet is lost on router \text{is \text{approximate lyp}}r =j \in J pj Ajr.

(The exact formula would bebut when thep are small we can ignore their products.)(1-pr) =j\in J(1-pj()A)jr , j

Sincenow gives us thatxr = cwndr /Tr, our earlier calculation of cwndxr = T1 r 2(1 p-rpr ).

Is it possible to choose the rates$x = (x$, r \in R) andr

the drop probabilities$p = (p$, j \in J) \text{in a consist entj}

fashion, so that the last two equations are satisfied andeitherp is zero or y = C for each j \in  J? The remarkable observation is that such a choice corresponds pre-cisely to the solution of the following optimization(jj)j$problem (Kelly 2001$; Low et al. 2002).$\sqrt$ Maximize$r \in^{R} T^{r}2 arctan x \sqrt^{r} T2^{r}$ over$x ⩾ 0$, subject to Ax ⩽ C. might expect: in particular, the inequality ply adds up the flows through link Some aspects of this optimization problem are as wej and requires that Ax ⩽ C sim- the sum not exceed the capacity linkj \in  J. But, as before, the function being optimized Cj of link j, for each is undoubtedly strange. The arctan function, illustrated

870

arctan(x)

$0$

x

Figure 4 itly maximizes a sum of utilities over all the connections The arctan function. The Internet’s TCP im pl ic present in a network: this function shows the shape of the utility function for a single connection. The horizontal axis is proportional to the rate of the connection, and the vertical axis is proportional to the usefulness of that rate. Both axes are scaled in terms of the round-trip time of the connection. in figure 4, is the inverse function to the trigonometric function tan, and can also be defined as arctan$(x) =0^{x} 1 + 1u^{2} du$. From this form, we see that its derivative with respectto$x is 1/(1 + x^{2})$. Let us sketch the relationship between the optimization problem and the equilibrium rates and drop probabilities. Define the function

L(x, z;μ)\sqrt=r\in R T2 r arctan x\sqrtr T2 r + μ · (C - Ax - z)$, where\mu = (\mu$, j \in  J) is a vector of Lagrange multi-j

pliers, andz = C - Ax is a vector of slack variables, measuring the spare capacity on each of the linksj \in J of the network. Then, using the derivative of the arctan function, \partial x\partial Lr = (1 +1 2(x2)r (Tr)2)-1 -j \in J \mu j Ajr and \partial z\partial Lj = −\mu j. We look for a maximum ofthat this maximum is, under the identification L over x, z ⩾$0$; \text{it turns out}$\mu = p$, precisely the collection rates and drop probabilities that we were looking for.$(x^{r}$, r \in  R), (pj$, j \in^{j} J) of^{j}$ For example, setting to zero the partial derivative with respect tox gives the desired equation for x . In summary, for each linkr j \in J \text{the Lagrange multi}-r pliercisely the proportion\mu j arising from the optimization problem is pre-pj of packets dropped at that link, much as the Lagrange multipliers arising earlier were precisely the delays on links of a road traffic network. And the equilibrium reached by the interaction of many competing TCPs, each implemented only on the sourceand destination computers, is effectively maximizing

VII. The Influence of Mathematics

an objective function for the entire network. The objec-tive function has a surprising interpretation: it is as if the usefulness of the flow ratexto the sourcer destination pair served by this route is given by afunction$\sqrt{utility}T2 arctan x \sqrt^{r} T2^{r}$, r

and the network is attempting to maximize the sumof these utility functions across all source–destination pairs, subject to constraints arising from the limited capacities of the links.The arctan function, illustrated in figure 4, is concave. Thus, if two or more connections share an overloaded link, the rates achieved will be approximately equal, since otherwise the total utility could be increased byreducing the largest rate a little and increasing the smallest rate a little. As a result, there is a tendency for TCP to share resources more or less equitably. This is very different from resource-control mechanisms in traditional telephone networks where, if the network is overloaded, some calls are blocked in order that thecalls that are accepted are unaffected by the overload. 6 Conclusion The behavior of large-scale systems has been of great interest to mathematicians for over a century, with many examples coming from physics. For example, the behavior of a gas can be described at the microscopic level in terms of the position and velocity of each molecule. At this level of detail a molecule’s velocity appears as a random process, as the molecule bounces around off other molecules and the walls of the container. Yet consistent with this detailed microscopic description of the system is macroscopic behavior best described by quantities such as temperature and pres-sure. Similarly, the behavior of electrons in an electrical network can be described in terms of random walks, and yet this simple description at the micro-scopic level leads to rather sophisticated behavior at the macroscopic level: Kelvin showed that the patternof potentials in a network of resistors is exactly the one that minimizes heat dissipation for a given level ofcurrent flow (Kelly 1991). The local, random behavior of the electrons causes the network as a whole to solvea rather complex optimization problem. large - scale engineered systems are often best under - In the last fifty years we have begun to realize that stood in similar terms. Thus a microscopic description of traffic flow in terms of each driver’s choice of the
