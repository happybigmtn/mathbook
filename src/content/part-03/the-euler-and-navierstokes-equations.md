# The Euler and Navier–Stokes Equations

III . $23$ .

The Euler and Navier-Stokes Equations

best approximations to x in the following sense: if p  /  q is one of these fractions, then it is impossible to find any fraction r  /  s that is closer than p  /  q to x and that has denominator s smaller than q. More over, if p  /  q is one of the approximations coming from the continued fraction for x, then the error x  -  p  /  q cannot be too large relative to the size of the denominator q; specifically, it is always true that $x - p \le 1$ .

(8)

q

$q2$

This error estimate shows just how special the continued-fraction approximations are: if you pick a denominator q with out thinking, and then select the numerator p that makes p  /  q closest to x, the only thing you can guarantee is that x lies between $(p - 1/2)/q$ and $(p + 1/2)/q$ . So the error could be as large as $1/(2q)$ , which is much bigger than $1/(q^{2})$ if $q$ is a large integer. Some times a continued-fraction approximation to x can have even smaller error than is guaranteed by ( $8$ ).
For example, the approximation $\pi \approx 355/113$ that we get by truncating ( $7$ ) at the third level is exceptionally accurate, the reason being that the next partial quotient, $292$ , is rather large. So we are not changing the . fraction much by ignoring the tail $1/(292 + 1/(1 +$ . .)). In this sense, the most difficult number to approximate by fractions is the one with the smallest possible partial quotients, i.e., the one with all its partial quotients equal to $1$ . This number,

$11 +$

,

$(9)11 + {}^{1} +$ .

..

can be easily calculated because the sequence of partial quotients is periodic: it repeats itself. If we call the . number φ, then $φ - 1$ is $1/(1 + 1/(1 +$ . .)). The reciprocal of this number is exactly the continued fraction (9) for φ. Hence

$1= φ,φ - 1$

which in turn implies that $φ^{2} - φ = 1$ . The roots of √ this quadratic equation are $(1 + 5)/2 = 1$ . $618$ . . . and √ $(1 - 5)/2 = - 0$ . $618$ . . . . Since the number we are trying to find is positive, it is the first of these roots: the so-called golden ratio. It is quite easy to show that, just as ( $9$ ) represents the positive solution of the equation $x^{2} - x - 1 = 0$ , any other periodic continued fraction represents a root of a quadratic equation. This fact seems to have been understood already in the sixteenth century. It is quite a lot trickier to prove the converse:
that the continued fraction of any quadratic surd is periodic. This was

$193$

established by lagrange [VI.22](/part-06/joseph-louis-lagrange-17361813) during the eighteenth century and is closely related to the existence of units in quadratic number fields [III.63](/part-03/number-fields).

$3$

Continued Fractions for Functions

Several of the most important functions in mathematics are most easily described using infinite sums. For example, the exponential function [III.25](/part-03/the-exponential-and-logarithmic-functions) has the infinite series x n

$x2e^{x} = 1 + x +$

 +  ···  + 

 +  ··· .

$2$

n!

There are also a number of functions that have simple continued-fraction expansions: continued fractions involving a variable like x. These are probably the most important continued fractions historically. For example, the function x   $\to$ tan x has the continued fraction x tan $x =$ ,

$(10)x^{2}1 - 23 - {}^{5} - x$ .

..

valid for any value of x other than the odd multiples of $\pi/2$ , where the tangent function has a vertical asymptote. Where as the infinite series of a function can be truncated to provide polynomial approximations to the function, truncation of the continued fraction provides approximations by rational functions: functions that are ratios of polynomials. For instance, if we truncate the fraction for the tangent after one level, then we get the approximation

$3xx = tanx\approx$ / $1 - x^{2}/33 - x^{2}$

This continued fraction, and the rapidity with which its truncations approach tan x, played the central role in the proof that $\pi$ is irrational: that $\pi$ is not the ratio of two whole numbers. The proof was found by Johann Lambert in the $1760s$ . He used the continued fraction to show that if x is a rational number (other than $0$ ), then tan x is not. But tan $\pi/4 = 1 ($ which certainly is rational), so $\pi/4$ cannot be. III . $23$ The Euler and Navier-Stokes

Equations

Charles Fefferman

The Euler and Navier-Stokes equations describe the motion of an idealized fluid. They are important in science and engineering, yet they are very poorly understood. They present a major challenge to mathematics.

194

   To state the equations we work in Euclidean space
Rd , with d equal to 2 or 3. Suppose that, at posi-
tion x = (x1 , . . . , xd ) ∈ Rd and at time t ∈ R,
the fluid is moving with a velocity vector u(x, t) =
(u1 (x, t), . . . , ud (x, t)) ∈ Rd , and the pressure in the
fluid is p(x, t) ∈ R. The Euler equation is
 ∂   
     d

   +    uj     ui (x, t) =     (x, t)
 ∂t j=1    ∂xj
for all (x, t); and the Navier–Stokes equation is
  ∂   

    +    uj     ui (x, t)
  ∂t j=1    ∂xj

for all (x, t). Here, ν > 0 is a coefficient of friction called
the “viscosity” of the fluid.
  In this article we restrict our attention to incompress-
ible fluids, which means that, in addition to requiring
that they satisfy (1) or (2), we also demand that

for all (x, t). The Euler and Navier–Stokes equations
are nothing but Newton’s law F = ma applied to an
infinitesimal portion of the fluid. In fact, the vector
is easily seen to be the acceleration experienced by a
molecule of fluid that finds itself at position x at time t.
   The forces F leading to the Euler equation arise
entirely from pressure gradients (e.g., if the pressure
increases with height, then there is a net force pushing
the fluid down). The additional term
in (2) arises from frictional forces.
   The Navier–Stokes equations agree very well with
experiments on real fluids under many and varied
circumstances. Since fluids are important, so are the
Navier–Stokes equations.
   The Euler equation is simply the limiting case ν =
0 of Navier–Stokes. However, as we shall see, solu-
tions of the Euler equation behave very differently from
solutions of the Navier–Stokes equation, even when ν
is small.

III. Mathematical Concepts
We want to understand the solutions of the Euler
equations (1) and (3), or the Navier–Stokes equations
(2) and (3), together with an initial condition
u(x) = u0 (x) for all x ∈ Rd ,                       (4)
where u0 (x) is a given initial velocity, i.e., a vector-
valued function on Rd . For consistency with (3), we
∂
(i = 1, . . . , d)   assume that
∂xi
div u0 (x) = 0        for all x ∈ Rd .
(1)
Also, to avoid physically unreasonable conditions, such
as infinite energy, we demand that u0 (x), as well as
d
∂
u(x, t) for each fixed t, should tend to zero “fast
enough” as |x| → . nfty. We will not specify here exactly
what is meant by “fast enough,” but we assume from
d
∂2
=ν
j=1
∂xj2
decreasing velocities.
(2)      A physicist or engineer would want to know how
to calculate efficiently and accurately the solution to
the Navier–Stokes equations (2)–(4), and to understand
how that solution behaves. A mathematician asks first
whether a solution exists, and, if so, whether there
is only one solution. Although the Euler equation is
250 years old and the Navier–Stokes equation well over

d
∂uj
div u ≡
∂xj
j=1                                   to whether Navier–Stokes or Euler solutions exist for all
time, or whether instead they “break down” at a finite
time. Definitive answers supported by rigorous proofs
seem a long way off.

d                                            Let us state more precisely the problem of “break-
∂          ∂
+    uj     u                               down” for the Euler and Navier–Stokes equations. Equa-
∂t j=1    ∂xj
tions (1)–(3) refer to the first and second derivatives of
u(x, t). It is natural to suppose that the initial velocity
u0 (x) in (4) has derivatives
∂    α1
∂    αd
∂ α u0 (x) =
∂x1                ∂xd
of all orders, and that these derivatives tend to zero
“fast enough” as |x| → . nfty. We then ask whether the
d
∂2                                  Navier–Stokes equations (2)–(4), or the Euler equations
ν            u
j=1
∂xj2                                 (1), (3), and (4), have solutions u(x, t), p(x, t), defined
for all x ∈ Rd and t > 0, such that the derivatives
α0           α1                αd
α
∂x, t u(x, t) =                          ···               u(x, t)
∂t
α
and ∂x, t p(x, t) of all orders exist for all x ∈ Rd , t ∈
[0, . nfty) (and tend to zero “fast enough” as |x| → . nfty). A
pair u and p with these properties is called a “smooth”
solution for the Euler or Navier–Stokes equations. No
one knows whether such solutions exist (in the three-
dimensional case). It is known that, for some positive
time T = T (u0 ) > 0 depending on the initial velocity

III.23.   The Euler and Navier–Stokes Equations

u0 in (4), there exist smooth solutions u(x, t), p(x, t)
to the Euler or Navier–Stokes equations, defined for x ∈
Rd and t ∈ [0, T ).
  In two space dimensions (one speaks of “2 D Euler”
or “2 D Navier–Stokes”), we can take T = +. nfty; in other
words, there is no “breakdown” for 2 D Euler or 2 D
Navier–Stokes. In three space dimensions, no one can
rule out the possibility that, for some finite T = T (u0 )    u(x, t), p(x, t) are sufficiently smooth: for example,
as above, there is an Euler or Navier–Stokes solution
u(x, t), p(x, t), which is defined and smooth on

such that some derivative |∂x, t u(x, t)| or |∂x, t p(x, t)|   when u(x, t) and p(x, t) are very rough. Let us first
is unbounded on Ω. This would imply that there is
no smooth solution past time T . (We say that the
3 D Navier–Stokes or Euler solution “breaks down” at
time T .) Perhaps this can actually happen for 3 D Euler
and/or Navier–Stokes. No one knows what to believe.
  Many computer simulations of the 3 D Navier–Stokes
and Euler equations have been carried out. Navier–
Stokes simulations exhibit no evidence of breakdown,
but this may mean only that initial velocities u0 that
lead to breakdown are exceedingly rare. Solutions of
3 D Euler behave very wildly, so that it is hard to
decide whether a given numerical study indicates a
breakdown. Indeed, it is notoriously hard to perform a
reliable numerical simulation of the 3 D Euler equations.
  It is useful to study how a Navier–Stokes or Euler
solution behaves if one assumes that there is a break-
down. For instance, if there is a breakdown at time
T < . nfty for the 3 D Euler equation, then a theorem of
Beale, Kato, and Majda asserts that the “vorticity”
 ω(x, t) = curl(u(x, t))

grows so large as t → T that the integral

diverges. This has been used to invalidate some plau-
sible computer simulations that allegedly indicated a
breakdown for 3 D Euler. It is also known that the direc-     applied to smooth test functions, equations (2 ) and (3 )
tion of the vorticity vector ω(x, t) must vary wildly
with x, as t approaches a finite breakdown time T .
   The vector ω in (5) has a natural physical meaning: it
indicates how the fluid is rotating about the point x at
time t. A small pinwheel placed in the fluid in position
x at time t with its axis of rotation oriented parallel
to ω(x, t) would be turned by the fluid at an angular
velocity |ω(x, t)|.

195
For the 3 D Navier–Stokes equation, a recent result of
V. Sverak shows that if there is a breakdown, then the
pressure p(x, t) is unbounded, both above and below.
A promising idea, pioneered by J. Leray in the 1930 s,
is to study “weak solutions” of the Navier–Stokes equa-
tions. The idea is as follows. At first glance, the Navier–
Stokes equations (2) and (3) make sense only when
one would like the second derivatives of u with respect
to the xj to exist. However, a formal calculation shows
Ω = {(x, t) : x ∈ R3 , t ∈ [0, T )},
that we shall call (2 ) and (3 ), which make sense even
α               α
see how to derive (2 ) and (3 ), and then we will discuss
their use.
The starting point is the observation that a function
F on Rn is equal to zero if and only if Rn F θ dx = 0 for
every smooth function θ. Applying this remark to the
3 D Navier–Stokes equations (2) and (3) and performing
a simple formal computation (an integration by parts),
we find that (2) and (3) are equivalent to the following
equations:
       
3                  3            
∂θi
−         ui       −       ui uj       dx dt
R3 ×(0,. nfty)
i=1              i, j=1


3
∂2                     
3
∂θi
=
R3 ×(0,. nfty)
i, j=1
∂xj2                    i=1
∂xi
(2 )
and

3                  
∂φ
ui
R3 ×(0,. nfty)
i=1
∂xi
More precisely, given any smooth functions u(x, t) and
∂u2   ∂u3 ∂u3   ∂u1 ∂u1   ∂u2
=
∂x3   ∂x2 ∂x1   ∂x3 ∂x2   ∂x1
θ1 (x, t), θ2 (x, t), θ3 (x, t), and φ(x, t) that vanish
T 
max |ω(x, t)| dt
0   x∈R3                                  We call θ1 , θ2 , θ3 , and φ test functions, and we
say that u and p form a weak solution of 3 D Navier–
Stokes. Since all the derivatives in (2 ) and (3 ) are
make sense even for very rough functions u and p. To
summarize, we have the following conclusion.
A smooth pair (u, p) solves 3 D Navier–Stokes if and
only if it is a weak solution. However, the idea of a weak
solution makes sense even for rough (u, p).
We hope to use weak solutions, by carrying out the
following plan.