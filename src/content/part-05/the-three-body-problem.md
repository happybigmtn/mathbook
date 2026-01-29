# The Three-Body Problem

726                                                                                         V. Theorems and Problems

   We will consider the form of the theorem mentioned             Recall that the gravitational force of a particle P1 on
above involving a sequence of graphs. So let us suppose        a particle P2 has magnitude k2 m1 m2 /r 2 (in suitable
for a contradiction that we have a “bad” sequence: that        units), where k is the Gaussian gravitational constant,
is, a sequence G1 , G2 , . . . for which no Gi is a minor      particle Pi has mass mi , and the distance between the
of any later Gj . Let the number of vertices of the first       particles is r . The direction of this force on P2 is toward
graph G1 be k. Since no later Gi has G1 as a minor,            P1 (and there is a force of the same magnitude on P1 in
it certainly follows that none of G2 , G3 , . . . has a com-   the direction of P2 ). Recall also Newton’s second law:
plete minor of size k (or else we could delete some            force equals mass times acceleration. From these two
edges and obtain G1 ). For this reason, Robertson and          laws we can easily derive the equations of motion for
Seymour studied families of graphs that do not have            the three-body problem. Let the particles be P1 , P2 , and
a complete minor of size k. They were able to show             P3 . Write mi for the mass of Pi , rij for the distance
that every graph that does not have a complete minor           between Pi and Pj , and qij for the jth coordinate of the
of size k may be built up in a certain way from graphs         position of Pi . Then the equations of motion are
                                                                                                                       ⎫
that are “nearly embeddable” into a fixed surface (that                d2 q1 i            q2 i − q1 i           q3 i − q1 i ⎪
                                                                                  2
                                                                              = k m2        3
                                                                                                      2
                                                                                                  + k m3        3    ,⎪⎪
                                                                                                                       ⎪
                                                                                                                       ⎪
depends on the value of k). This means that in a cer-                  dt 2                r12                 r13     ⎪
                                                                                                                       ⎪
                                                                                                                       ⎪
                                                                                                                       ⎪
                                                                                                                       ⎪
tain sense that can be made precise the graph is not                    2
                                                                      d q2 i       2     q1 i − q2 i     2     q3 i − q2 i ⎬
                                                                              =  k  m 1           + k   m 3          ,   (1)
too far from a graph that is embeddable into the sur-                  dt 2                 3
                                                                                           r12                  3
                                                                                                               r23     ⎪
                                                                                                                       ⎪
                                                                                                                       ⎪
                                                                                                                       ⎪
face. By some very deep arguments, they were able to                                                                   ⎪
                                                                                                                       ⎪
                                                                      d2 q3 i            q1 i − q3 i           q2 i − q3 i ⎪⎪
show that the family of all such graphs (the graphs that                  2
                                                                              = k2 m1       3     + k2 m 2      3    .⎪⎪
                                                                                                                       ⎭
                                                                       dt                  r13                 r23
can be built up from nearly embeddable graphs, for a
                                                               Here, i runs from 1 to 3; thus, there are nine equations,
given surface) has a finite number of forbidden minors,
                                                               all derived from the simple laws above. For instance, the
thereby proving the theorem.
                                                               left-hand side of the first equation is the component of
                                                               the acceleration of P1 in the ith direction, and the right-
V.33     The Three-Body Problem                                hand side is the component of the force acting on P1 in
                                                               this direction, divided by m1 .
The three-body problem can be simply stated: three                If the units are chosen so that k2 = 1, then the
point masses move in space under their mutual gravita-         potential energy V of the system is given by
tional attraction; given their initial positions and veloc-                      m 2 m3     m3 m1     m1 m2
                                                                           V =−          −          −         .
ities, determine their subsequent motion. Initially, it                            r23        r31        r12
may come as a surprise that this is a difficult prob-            Setting
lem, since the analogous two-body problem can be                                                     
                                                                                                     3       2
                                                                                                            pij
                                                                                 dqij
solved fairly simply: more precisely, given any set of                pij = mi          and H =                   + V,
                                                                                  dt                i, j=1
                                                                                                            2 mi
initial conditions, we can write down a formula, in
terms of elementary functions (these are functions that        we can rewrite the equations in the hamiltonian form
can be built up using the basic operations of arith-           [IV.16 §2.1.3](/part-04/mirror-symmetry)
metic, together with a few standard functions such as                      dqij   ∂H           dpij    ∂H
                                                                                =      ,            =−      ,            (2)
the exponential [III.25](/part-03/the-exponential-and-logarithmic-functions) and trigonometric [III.92](/part-03/trigonometric-functions)                         dt    ∂pij          dt     ∂qij
functions), that tells us the subsequent positions and         which is a set of eighteen first-order differential equa-
velocities of the bodies. However, the three-body prob-        tions. Since this set is easier to use, it is now generally
lem is a complicated nonlinear problem and it can-             preferred to (1).
not be solved in this way, even if we are prepared to             A standard way of decreasing the complexity of a
enlarge our stock of “standard functions” somewhat.            system of differential equations is to find an algebraic
newton [VI.14](/part-06/isaac-newton-16421727) himself speculated that an exact solu-          integral for it: that is, a quantity that will remain con-
tion “exceeds, if I am not mistaken, the force of any          stant for any given solution and that can be expressed
human mind,” while hilbert [VI.63](/part-06/david-hilbert-18621943), in his celebrated          as an integral that gives rise to an algebraic depend-
Paris address of 1900, put the problem in a category           ence between the variables. This allows us to reduce
similar to fermat’s last theorem [V.10](/part-05/fermats-last-theorem). The prob-             the number of variables by expressing some of them in
lem can be extended to any number of bodies and in             terms of others. The three-body problem has ten inde-
the general case it is known as the n-body problem.            pendent algebraic integrals: six of them tell us about

$V$ . $33$ .

The Three-Body Problem

the motion of the center of mass (three for the position variables and three for the momentum variables), three integrals express the conservation of angular momentum, and one expresses conservation of energy. These ten independent integrals were known to euler [VI.19](/part-06/leonhard-euler-17071783) and lagrange [VI.22](/part-06/joseph-louis-lagrange-17361813) in the middle of the eighteenth century, and in 1887 Heinrich Bruns, professor of astronomy at Leipzig, proved that there are no others, a result sharpened by poincaré [VI.61](/part-06/jules-henri-poincar-18541912) two years later. By the use of these ten integrals, together with the “elimination of the time” and the “elimination of the nodes” (a procedure first made explicit by jacobi [VI.35](/part-06/carl-gustav-jacob-jacobi-18041851)), the original system of order eighteen can be reduced to one of order six, but it can be reduced no further. Hence, any general solution of ( $2$ ) cannot be given by a simple formula: the best we can hope for is a solution in the form of an infinite series. It is not difficult to find series that work well enough for a limited time span: the problem is to find series that work for any initial configuration and for any time span, no matter how long. There is also the question of collisions. A complete solution to the problem has to take account of all possible motions of the bodies, including determining which initial conditions lead to binary and triple collisions. Since collisions are described by singularities in the differential equations, this means that to find a complete solution the singularities have to be understood. This turns out to be a more interesting problem than one might think. It is obvious from the equations that a collision gives rise to a singularity, but it is less clear whether there can be any other kind of singular behavior. In the case of the three-body problem, the answer was supplied by Painlevé in 1897 : the collisions are the only singularities. However, for more than three bodies the answer turned out to be different. In 1908 a Swedish astronomer, Hugo von Zeipel, showed that noncollision singularities can occur only if the system of particles becomes unbounded in a finite amount of time. A good example of such a singularity was found by Zhihong Xia for the five-body problem in 1992 . In this case there are two pairs of bodies, the bodies in each pair having equal mass, and a fifth body with very small mass. The bodies in a pair move in very eccentric orbits parallel to the xy-plane, with the two pairs on opposite sides of this plane and rotating in opposite directions. A fifth particle is then added to the system. Its motion is confined to the z-axis and oscillates between the two pairs. Xia showed that the motion of the fifth particle forced the two pairs to move away from the xy-plane, but that it

$727$

also came closer and closer to colliding with the pairs, giving it larger and larger bursts of acceleration, and that as this happened the two pairs were forced out to infinity in finite time. As well as trying to solve the problem in general, one can look for interesting particular solutions. A central configuration is defined to be a solution in which the geometric configuration remains constant. The first examples were discovered by Euler in 1767 : they were solutions in which the bodies always lie on a straight line and revolve with uniform angular velocity in circles or ellipses about their common center of mass. In 1772 Lagrange discovered solutions in which the bodies are always at the vertices of an equilateral triangle that rotates uniformly about the center of mass. For almost all sets of initial conditions for these solutions, the size of the triangle changes as it rotates so that each body describes an ellipse. However, despite the discovery of the particular solutions and a century of unrelenting work on the problem, the mathematicians of the nineteenth century were unable to find a general solution. Indeed, the problem was considered so hard that in 1890 Poincaré was led to declare that he thought it impossible without the discovery of some significant new mathematics. But, contrary to Poincaré’s expectation, less than twenty years later a young Finnish mathematical astronomer, Karl Sundman, using only existing mathematical techniques, astonished the mathematical world by obtaining uniformly convergent infinite series that mathematically “solved” the problem. Sundman’s series, which are in powers of $t^{1}/^{3}$ , are convergent for all real t, except for the negligible set of initial conditions for which the angular momentum is zero. To deal with binary collisions, Sundman used the technique of regularization, or analytically extending a solution beyond the collision, but he was unable to deal with triple collisions because in order for such a collision to occur the angular momentum must be zero. Although it was a remarkable mathematical achievement, Sundman’s solution leaves many questions unanswered. It provides no qualitative information about the behavior of the system and, worse, because the series converges so slowly it is of no practical use. To determine the motion of the bodies for any reasonable period of time would require the summation of something of the order of $10^{8000000}$ terms, $a$ calculation that is patently unrealistic. Thus, Sundman left plenty still to do, and work on the problem (and the related nbody problem) has continued up to the present day,
