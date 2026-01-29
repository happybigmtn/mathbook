# Linear and Nonlinear Waves and Solitons

234                                                                                           III. Mathematical Concepts

bond, then the root vectors have the same length and           where mij is the order of si sj (see [IV.10 §2](/part-04/geometric-and-combinatorial-group-theory) for a dis-
the angle between them is 120◦ . In diagrams that have         cussion of generators and relations). These orders are
only single bonds, the root vectors span a set of lines        determined by the diagram according to the following
in Rn in which the angle between any two lines is either       rules:
90◦ or 60◦ . In the diagrams Bn , Cn , F4 , and G2 there are
                                                                 (i) si sj has order 2 if there is no bond;
arrows between certain pairs of nodes. The direction of
                                                                (ii) si sj has order 3 if there is a single bond;
an arrow is from a long root to a short root: the ratio of
                     √(iii) si sj has order 4 if there is a double bond; and
the root lengths is 2 in the first three cases and 3 in
                                                               (iv) si sj has order 6 if there is a triple bond.
the case of G2 . In these cases there are exactly two root
lengths, but in the single-bond cases all roots have the       For example, the Weyl group of type An is isomor-
same length.                                                   phic to the symmetric group [III.68](/part-03/permutation-groups) Sn+1 , and one
  The An diagram is the one for sln+1 . The simple roots       can take s1 , . . . , sn to be the transpositions (1 2), (2 3),
are ei −ei+1 for 1 ⩽ i ⩽ n, going from left to right on the    . . . , (n n + 1). Notice that the Dynkin diagrams for the
diagram. Notice that the inner product of two simple           Bn and Cn root systems yield the same Weyl group.
roots is 0 unless they are adjacent on the diagram, in             In principle, this classification of root systems leads
which case it is −1. Each root ei − ej is a sum of simple      to a classification of all semisimple finite-dimensional
roots with coefficients all 1 or all −1 on a connected           Lie algebras and Lie groups. However, there are many
segment of the diagram.                                        fundamental questions about simple Lie algebras and
  The four infinite families An Bn , Cn , and Dn corre-         Lie groups that remain only partly understood. For
spond to the classical Lie algebras, of which sln+1 (R),       instance, one particularly important aim of Lie theory is
so(2 n + 1), sp(2 n), and so(2 n) are real forms. These           to understand the linear representations of a given Lie
are the algebras associated with the classical Lie groups      group or Lie algebra; roughly speaking, a linear repre-
SLn+1 (R), SO(2 n+1), Sp(2 n), and SO(2 n), respectively.         sentation is a way of interpreting an abstract Lie group
  As mentioned earlier, a simple Lie algebra g of rank n       or Lie algebra as a linear Lie group or Lie algebra by
decomposes as the direct sum of a Cartan subalgebra of         assigning a matrix to each of its elements. While the
dimension n plus a set of one-dimensional root spaces,         representations of all the simple Lie algebras and Lie
one for each root. It follows that                             groups have been classified and described explicitly,
      dim g = the rank of g + the number of roots.             these descriptions are not always easy to work with,
                                                               and answering basic questions (such as how a given rep-
Here are the dimensions of the simple Lie algebras:            resentation decomposes into simpler representations)
         dim An = n + n(n + 1) = n(n + 2),                     often requires some sophisticated tools from algebraic
                                                               combinatorics.
         dim Bn = n + 2 n2 = n(2 n + 1),
                                                                   The theory of root systems outlined above can also be
         dim Cn = n + 2 n2 = n(2 n + 1),                         extended to an important class of infinite-dimensional
         dim Dn = n + 2 n(n − 1) = n(2 n − 1),                   Lie algebras, namely the Kac–Moody algebras. Such
         dim G2 = 2 + 12 = 14,                                 algebras arise in several areas of physics (such as are
                                                               described in vertex operator algebras [IV.17](/part-04/vertex-operator-algebras)) and
          dim F4 = 4 + 48 = 52,
                                                               algebraic combinatorics.
         dim E6 = 6 + 72 = 78,
         dim E7 = 7 + 126 = 133,                               III.49 Linear and Nonlinear Waves and
         dim E8 = 8 + 240 = 248.                                      Solitons
   Each node of the diagram corresponds to a simple                      Richard S. Palais
root, and hence to a reflection across the hyperplane
                                                                          1    John Scott Russell and the
perpendicular to that root. This set of reflections gen-
                                                                              Great Wave of Translation
erates the Weyl group W in a particularly elegant way. If
si denotes the reflection corresponding to node i, then         To the world at large, John Scott Russell is known
W is generated by elements si of order 2, subject only         as the naval architect who designed The Great East-
to the relations                                               ern, a steamship larger than any built before. But long
                     (si sj )mij = 1,                          after The Great Eastern has been forgotten, Russell will

III.49.   Linear and Nonlinear Waves and Solitons                                                                235

be remembered by mathematicians as the man who,              it was rediscovered as a rigorous solution to the Kd V
despite limited mathematical training and background,        equation (see section 3 below) more than a hundred
was the first person to recognize the highly impor-           years later.
tant mathematical concept known as a soliton, which             However, as we shall see, solitons are very much a
he referred to as “the great wave of translation.” Here      nonlinear phenomenon, and when some of the best
is his oft-quoted passage in which he describes how he       mathematicians of Russell’s day, notably Stokes and
first became acquainted with it:                              Airy, tried to understand Russell’s observations using
                                                             the linearized theory of water waves that was then
  I was observing the motion of a boat which was rapidly
  drawn along a narrow channel by a pair of horses, when
                                                             available, they failed to find any trace of soliton-like
  the boat suddenly stopped—not so the mass of water         behavior and expressed doubts that what Russell had
  in the channel which it had put in motion; it accumu-      seen was real.
  lated round the prow of the vessel in a state of violent      It was not until after Russell’s death, with the more
  agitation, then suddenly leaving it behind, rolled for-    sophisticated nonlinear mathematical treatment by
  ward with great velocity, assuming the form of a large
                                                             Boussinesq in 1871 and by Korteweg and de Vries in
  solitary elevation, a rounded, smooth and well-defined
                                                             1895, that Russell’s careful observations and experi-
  heap of water, which continued its course along the
  channel apparently without change of form or diminu-       ments were at last seen to be in complete agreement
  tion of speed. I followed it on horseback, and over-       with mathematical theory. And it took another seventy
  took it still rolling on at a rate of some eight or nine   years before the full importance of the great wave of
  miles an hour, preserving its original figure some thirty   translation was recognized, after which it became an
  feet long and a foot to a foot and a half in height. Its   object of intensive study for the rest of the twentieth
  height gradually diminished, and after a chase of one
                                                             century.
  or two miles I lost it in the windings of the channel.
  Such, in the month of August 1834, was my first chance
  interview with that singular and beautiful phenomenon             2   The Korteweg–de Vries Equation
  which I have called the Wave of Translation.
                                           Russell (1844)    Korteweg and de Vries were the first people to derive
                                                             the appropriate differential equation to describe the
You may feel that there is nothing unusual about what        motion of a wave in a shallow channel. We can write
Russell describes here, and indeed many before and           their equation, usually called the Kd V equation, in a
since have watched this same scenario play out with-         succinct form as follows:
out noticing anything out of the ordinary. But Russell
                                                                            ut + uux + δ2 uxxx = 0.
was very familiar with wave phenomena and had a sci-
entist’s keenly observant eye. What struck him was the       Here, u is a function of two variables, x and t, which
remarkable stability of the bow wave as it traveled over     represent space and time, respectively. “Space” is one
a long distance. He knew that if one tried to create         dimensional, so x is a real number, and u(x, t) repre-
a traveling water wave on, say, a calm lake, it would        sents the height of the wave at x at time t. The nota-
soon disperse into a train of smaller wavelets—it would      tion ut is shorthand for ∂u/∂t; similarly, ux stands for
not just go marching along as a single “heap” over a         ∂u/∂x and uxxx stands for ∂ 3 u/∂x 3 .
long distance. There was clearly something very special         This is an example of an evolution equation: if, for
about water waves traveling in a narrow and shallow          each t, we write u(t) for the function from R to R that
channel.                                                     takes x to u(x, t), then it describes how the function
  Russell became fascinated—even a little obsessed—          u(t) “evolves” over time. The Cauchy problem for an
with his discovery. He built a wave tank behind his          evolution equation is the problem of determining this
home and proceeded to do extensive experiments,              evolution from knowledge of its initial value u(0).
recording the results as data and sketches in his note-
books. He found, for example, that the speed of a soli-      2.1   Some Model Equations
ton depended on its height, and he was even able to dis-
                                                             To put the Kd V equation into perspective, it is useful
cover the correct formula for the speed as a function
                                                             to think briefly about three other evolution equations.
of height. More surprising still, in Russell’s notebooks
                                                             The first is the classic wave equation [I.3 §5.4](/part-01/fundamental-definitions)
one finds remarkable sketches of a two-soliton inter-
action—something that would evoke amazement when                                utt − c 2 uxx = 0.

236                                                                                            III. Mathematical Concepts

To solve the Cauchy problem for this equation, we               higher the angular frequency, the greater the speed. For
factor the wave operator (∂ 2 /∂t 2 ) − c 2 (∂ 2 /∂x 2 ) as a   this reason, the equation (1) is called dispersive.
product ((∂/∂t) − c(∂/∂x))((∂/∂t) + c(∂/∂x)). Then                What happens if instead we omit the uxxx term from
we transform to so-called characteristic coordinates            the Kd V equation? Then we obtain the inviscid Burgers
ξ = x − ct, η = x + ct. The equation becomes                    equation
∂ 2 u/∂ξ∂η = 0, which clearly has the general solu-                                  ut + uux = 0.                    (2)
tion u(ξ, η) = F (ξ) + G(η). Transforming back to
                                                                The term uux can be rewritten as (∂/∂x)( 12 u2 ). Let us
“laboratory coordinates” x, t, the general solution is                                  . nfty
                                                                consider the integral −. nfty u(x, t) dx, which is a function
u(x, t) = F (x − ct) + G(x + ct). If the initial shape                                                   . nfty
                                                                of t. The derivative of this function is −. nfty ut dx, which
of the wave is u(x, 0) = u0 (x) and its initial velocity
                                                                equation (2) tells us is equal to
is ut (x, 0) = v(x, 0) = v0 (x), then an easy algebraic                                . nfty
                                                                                           ∂
computation gives the following very explicit formula:                             −           ( 12 u2 ) dx,
                                                                                       −. nfty ∂x
  u(x, t) = 12 [u0 (x − ct) + u0 (x + ct)]                      which equals [− 12 u(x, t)2 ]. nfty                    1        2
                                                                                              −. nfty . Therefore, if 2 u(x, t)
                                           x+ct                                               . nfty
                                   1                            vanishes at infinity, then −. nfty u(x, t) dx is a “constant
                                   +        v0 (ξ) dξ,
                                   2 c x−ct                      of the motion.” We say that the inviscid Burgers equa-
known as “d’Alembert’s solution” of the Cauchy prob-            tion is a conservation law. (The argument we have just
lem for the wave equation.                                      used can be used for any equation of the form ut =
  Note the geometric interpretation in the important            (F (u))x , where F is a smooth function of u and its
“plucked string” case, v0 = 0; the initial profile u0            partial derivatives with respect to x. This is known
breaks up into the sum of two “traveling waves,” both           as the general conservation law. For example, taking
with the same profile 12 u0 , one traveling to the right,        F (u) = −( 12 u2 +δ2 uxx ) gives rise to the Kd V equation.)
and the other to the left, both with speed c. It is an             The inviscid Burgers equation (and other conserva-
easy exercise to derive d’Alembert’s solution using the         tion laws where F is a function just of u) can be solved
following hint: since u0 (x) = F (x) + G(x), u0 (x) =           using the method of characteristics. The idea of this
F (x) + G (x), while v0 (x) = ut (x, 0) = −c F (x) +             method is to look for smooth curves (x(s), t(s)) in the
c G (x).                                                         xt-plane along which the solution to the Cauchy prob-
  The next equation to think about is                           lem is constant. Suppose that s0 is such that t(s0 ) = 0,
                       ut = −uxxx ,                       (1)   and write x0 for x(s0 ). Then the constant value that
                                                                the solution u(x, t) will have to take along this curve is
which we can obtain from the Kd V equation if we drop            u(x0 , 0), which we also write as u0 (x0 ). The deriva-
the nonlinear term uux . This equation is not just linear
                                                                tive of u along this so-called characteristic curve is
but also translation invariant (meaning that if u(x, t)
                                                                (d/ds)u(x(s), t(s)) = ux x + ut t , so if we want the
is a solution, then so is u(x − x0 , t − t0 ) for any con-
                                                                solution to be constant along the curve, then we need
stants x0 and t0 ). Such equations can be solved using
                                                                this to be 0. Therefore, using the fact that ut = −uux ,
the fourier transform [III.27](/part-03/the-fourier-transform). Let us try to find a
                                                                we find that
“plane-wave” solution of the form u(x, t) = ei(kx−ωt) . If
                                                                     dx     x (s)      ut
we substitute this into (1), then we obtain the equation                 =        =−        = u(x(s), t(s)) = u0 (x0 ),
                                                                     dt     t (s)      ux
              −iωei(kx−ωt) = ik3 ei(kx−ωt) ,                    so the characteristic curve is a straight line of slope
and therefore the simple algebraic equation ω+k3 = 0.           u0 (x0 ). In other words, u has the constant value
This is called the dispersion relation of (1): with the         u0 (x0 ) along the line x = x0 + u0 (x0 )t.
help of the Fourier transform it is not hard to show               Note the following geometric interpretation of this
that every solution is a superposition of solutions of          last result: to find the wave profile at time t (i.e., the
the form ei(kx−ωt) , and the dispersion relation tells us       graph of the map x → u(x, t)), we translate each
how the “wave number” k is related to the “angular              point (x, u0 (x)) of the initial profile to the right by the
frequency” ω in each of these elementary solutions.             amount u0 (x)t. Suppose we look at a portion of the
  The function ei(kx−ωt) represents a wave that trav-           initial profile where u0 is decreasing. Then the earlier,
els at a speed of ω/k, which we have just shown to be           and higher, parts of the initial wave are translated at a
equal to −k2 . Therefore, the different plane-wave com-          greater speed (since u0 (x) is larger), so that the nega-
ponents of the solution travel at different speeds: the          tive slope of the wave becomes more negative. Indeed,

III.49.   Linear and Nonlinear Waves and Solitons                                                                  237

after a finite time the earlier part of the wave “catches              3   Solitons and Their Interactions
up” with the later part, which means that we no longer
                                                              We have just seen that the Kd V equation expresses a
have a graph of a function. The first time at which
                                                              balance between dispersion from its third-derivative
this sort of problem happens is called the “breaking
                                                              term and the shock-forming tendency of its nonlin-
time,” since one can visualize it as the breaking of a
                                                              ear term, and in fact many models of one-dimensional
wave. This process is usually referred to as shock for-
                                                              physical systems that exhibit mild dispersion and weak
mation, or steepening and breaking of the wave pro-
                                                              nonlinearity lead to Kd V as the controlling equation at
file: once again, the phenomenon occurs for many other
                                                              some level of approximation.
conservation laws.
                                                                 In their 1894 paper, Korteweg and de Vries intro-
2.2   Split-Stepping                                          duced the Kd V equation and gave a convincing mathe-
                                                              matical argument that this was the equation that gov-
Now let us return to the Kd V equation itself, in the form     erned wave motion in a shallow canal. They also showed
ut = −uux − uxxx . Why is it that this equation gives         by explicit computation that it admitted traveling-wave
rise to the remarkable stability of the solutions that        solutions that had exactly the properties that had been
was observed experimentally by Russell? Intuitively,          described by Russell, including the relation of height to
the reason is that there is a balance between the dis-        speed that Russell had determined experimentally with
persing effect of the uxxx term and the shock-forming          the help of his wave tank.
effect of the uux term.                                           But it was only much later that further remarkable
   There turns out to be a very general technique for         properties of the Kd V equation became evident. In
analyzing balances of this kind. In the pure-math-            1954, Fermi, Pasta, and Ulam (FPU) used one of the very
ematics community it is usually called the Trotter            first digital computers to perform numerical exper-
product formula, while in the applied-mathematics             iments on an elastic string with a nonlinear restor-
and numerical-analysis communities it is called split-        ing force, and their results contradicted the then cur-
stepping. The rough idea is simple: as t increases to         rent expectations of how energy should distribute itself
t + Δt, you first change u to u − uxxx Δt, as would be         among the normal modes of such a system. A decade
required by the equation ut = −uxxx , and then you            later, Zabusky and Kruskal reexamined the FPU results
take a further step to u − uxxx Δt − uux Δt, the small        in a famous paper in which they showed that the FPU
change required by the equation ut = −uux . To work           string was well approximated by the Kd V equation.
out the function u(t, x), you start at the initial function   They then did their own computer experiments, solv-
u0 and take a succession of alternating small steps of        ing the Cauchy problem for Kd V with initial conditions
this form. You then take the limit as the step size tends     corresponding to those used in the FPU experiments.
to zero.                                                      In the results of these simulations they observed the
   Split-stepping suggests a way to understand the            first example of a “soliton,” a term that they coined
mechanism by which dispersion from uxxx balances              to describe a remarkable particle-like behavior (elastic
shock formation from uux in Kd V. If we imagine the            scattering) exhibited by certain Kd V solutions. Zabusky
evolution of the wave profile as made up of a succession       and Kruskal showed how the coherence of solitons
of pairs of small steps in this way, then when u, ux , and    explained the anomalous results observed by Fermi,
uxxx are not too large, the steepening mechanism will         Pasta, and Ulam. But in solving that mystery they had
dominate. But as the time t approaches the breaking           uncovered a larger one: the behavior of Kd V solitons
time TB , u remains bounded (since it is made out of hor-     was unlike anything seen before in applied mathemat-
izontally translated parts of u0 ). It is not hard to prove   ics, and the search for an explanation of their remark-
that the maximum slope (that is, the maximum value of         able behavior led to a series of discoveries that changed
ux ) blows up like the function (TB − t)−1 , while at the     the course of applied mathematics for the next thirty
same place uxxx blows up like the function (TB − t)−5 .       years. We shall now fill in some of the mathemati-
Thus, near the breaking time, and breaking point, the         cal details behind the above sketch, beginning with a
uxxx term will dwarf the nonlinearity and will disperse       discussion of explicit solutions to the Kd V equation.
the incipient shock. Thus, the stability is caused by a          It is straightforward to find the traveling-wave solu-
kind of negative feedback. Computer simulations show          tions of Kd V. First, we substitute a traveling wave
just such a scenario playing out.                             u(x, t) = f (x − ct) into Kd V, obtaining the ordinary

238                                                                                                 III. Mathematical Concepts

differential equation −cf + 6 f f + f = 0. If we add                   expect from a linear interaction. It is only if we look
as a boundary condition that f should vanish at infin-                closely at the interaction as the two solitons meet that
ity, then a routine computation leads to the following               we can detect its highly nonlinear nature. (Note, for
two-parameter family of traveling-wave solutions:                    example, that at time t = 0, the maximum amplitude,
         u(x, t) = 2 a2 sech2 (a(x − 4 a2 t + d)).                     6, of the combined wave is actually less than the max-
                                                                     imum amplitude, 8, of the taller wave when they are
These are the solitary waves seen by Russell, and they
                                                                     separated.) But of course the really striking fact is the
are now usually referred to as the 1-soliton solutions of
                                                                     resilience of the two individual solitons: their ability
Kd V. Note that their amplitude, 2 a2 , is just half their
                                                                     to put themselves back together after the collision. Not
speed, 4 a2 , while their “width” is proportional to a−1 .
                                                                     only is no energy radiated away, but their actual shapes
Thus, taller solitary waves are thinner and move faster.
                                                                     are preserved. (Remarkably, Russell (1844, p. 384) gives
  Next, following Toda, we will “derive”1 the 2-soliton
                                                                     a sketch of a 2-soliton interaction experiment that he
solutions of Kd V. Rewrite the 1-soliton solution as
                                                                     had carried out in his wave tank!)
u(x, t) = 2(∂ 2 /∂x 2 ) log cosh(a(x − 4 a2 t + δ)), or
                                                                        Now back to the computer experiment of Zabusky
u(x, t) = 2(∂ 2 /∂x 2 ) log K(x, t), where K(x, t) = (1 +
         2                                                           and Kruskal. For numerical reasons, they chose to deal
e2 a(x−4 a t+δ) ). We now try to generalize, looking for
                                                                     with the case of periodic boundary conditions: in effect,
solutions of the form u(x, t) = 2(∂ 2 /∂x 2 ) log K(x, t),
                                                                     studying the Kd V equation ut + uux + δ2 uxxx = 0
with K(x, t) = 1 + A1 e2η1 + A2 e2η2 + A3 e2(η1 +η2 ) , where
                                                                     (which they label (1)) on the circle instead of on the
ηi = ai (x − 4 a2 i t + di ), and we shall choose the Ai and
                                                                     line. For their published report, they chose δ = 0.022
di by substituting into Kd V and seeing what works. One
                                                                     and used the initial condition u(x, 0) = cos(π x). With
can check that Kd V is satisfied for u(x, t) of this form
                                                                     the above background in mind, it is interesting to read
and arbitrary A1 , A2 , a1 , a2 , d1 , d2 , provided that we
                                                                     the following extract from their 1965 report, which
define A3 = ((a2 − a1 )/(a1 + a2 ))2 A1 A2 , and solutions
                                                                     contains the first use of the term “soliton”:
of Kd V arising in this way are called the Kd V 2-soliton
solutions.                                                             (I) Initially the first two terms of Eq. (1) dominate and
  It can now be shown that for these choices of a1 and                 the classical over taking phenomenon occurs; that is u
a2 ,                                                                   steepens in regions where it has negative slope. (II) Sec-
                                                                       ond, after u has steepened sufficiently, the third term
                3 + 4 cosh(2 x − 8 t) + cosh(4 x − 64 t)
  u(x, t) = 12                                             .           becomes important and serves to prevent the forma-
                [cosh(3 x − 36 t) + 3 cosh(x − 28 t)]2                    tion of a discontinuity. Instead, oscillations of small
In particular, u(x, 0) = 6 sech2 (x), u(x, t) is asymptot-             wavelength (of order δ) develop on the left of the front.
                                                       1
ically equal to 2 sech2 (x−4 t−φ)+8 sech2 (x−16 t+ 2 φ)                  The amplitudes of the oscillations grow, and finally
when t is large and negative, and u(x, t) is asymptoti-                each oscillation achieves an almost steady amplitude
cally equal to 2 sech2 (x−4 t+φ)+8 sech2 (x−16 t− 2 φ)
                                                       1               (that increases linearly from left to right) and has the
                                            1                          shape of an individual solitary-wave of (1). (III) Finally,
when t is large and positive, where φ = 3 log(3).
                                                                       each “solitary wave pulse” or soliton begins to move
   Note what this says. If we follow the evolution from                uniformly at a rate (relative to the background value
−T to T (where T is large and positive), we first see the               of u from which the pulse rises) which is linearly pro-
superposition of two 1-solitons: a larger and thinner                  portional to its amplitude. Thus, the solitons spread
one to the left of, and catching up with, a shorter, fatter,           apart. Because of the periodicity, two or more solitons
and slower-moving one to the right. Around t = 0 they                  eventually overlap spatially and interact nonlinearly.
merge into a single lump (with the shape 6 sech2 (x)),                 Shortly after the interaction they reappear virtually
                                                                       unaffected in size or shape. In other words, solitons
and then they separate again, with their original shapes
                                                                       “pass through” one another without losing their iden-
restored—but now the taller and thinner one is to the                  tity. Here we have a nonlinear physical process in which
right. It is almost as if they had passed right through                interacting localized pulses do not scatter irreversibly.
each other. The only effect of their interaction is the                                             Zabusky and Kruskal (1965)
pair of phase shifts: the slower one is retarded slightly
from where it would have been, and the faster one is
                                                                     Further Reading
slightly ahead of where it would have been. Except for
these phase shifts, the final result is what we might                 Lax, P. D. 1996. Outline of a Theory of the Kd V Equa-
                                                                       tion in Recent Mathematical Methods in Nonlinear Wave
  1. This is a complete swindle! Only knowledge of the form of the     Propagation. Lecture Notes in Mathematics, volume 1640,
solutions allows us to make the clever choice of K.                    pp. 70–102. New York: Springer.