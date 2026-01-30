# Variational Methods

310

elements of the torus are the orbits of the action (which    has a local minimum (or maximum) at a point t0 , then
are sets of the form {(x + m, y + n) : (m, n) ∈ Z2 })
with the quotient topology (which basically means that
two translates of Z2 are close when you think they are
close). The action of Z2 on R2 is free and discrete, which   which is applied not to real numbers but to functions,
means that each nonzero element of Z2 moves a small
neighborhood of each point entirely off itself. It turns
out that every sufficiently nice space X arises as the
quotient of its universal cover by a similar group action:   all admissible functions u), then we can expect that
this group is the fundamental group [IV.6 §2](/part-04/algebraic-topology) of X.
   As its name suggests, the universal cover has a uni-
versal property. Roughly speaking, a cover of a space
X is a space Y and a continuous surjection from Y to X
such that the inverse image of a small neighborhood in
X is a disjoint union of small neighborhoods in Y . If U     provide deep insights into the nature of minimizing
is the universal cover of X and Y is any other cover of X,   functions u0 .
then U can be made into a cover of Y in a natural way.
For instance, one can define a cover of the torus by an
infinite cylinder by wrapping the cylinder around, and
the cylinder can in turn be covered by the plane. Thus,
all connected covers of X are quotients of the univer-
sal cover. What is more, each is the space of orbits for
the action on the universal cover of a subgroup of the
fundamental group of X. This observation sets up a cor-
respondence between conjugacy classes of subgroups
of the fundamental group of X and equivalence classes
of covers. This “Galois correspondence” has many ana-
logues elsewhere in mathematics, most classically in
the theory of field extensions (see the insolubility
of the quintic [V.21](/part-05/the-insolubility-of-the-quintic)).
   An example of the use of universal covers can
be found in geometric and combinatorial group
theory [IV.10 §§7, 8].
III.94 Variational Methods

The calculus of variations is both a theory in itself and    where u = u(x) and a prime denotes differentiation
a toolbox of techniques for studying certain kinds of
(often extremely nonlinear) ordinary and partial differ-
ential equations. These equations, which arise when we
seek critical points of appropriate “energy” function-
als, are usually far more tractable than other nonlinear     u0 .
problems.

Let us begin with a simple observation from first-
year calculus, where we learn that if f = f (t) is a
smooth function defined on the real line R and if f

III. Mathematical Concepts
(df /dt)(t0 ) = 0.
The calculus of variations vastly extends this insight.
The basic object to be considered is a functional F ,
or rather to certain admissible classes of functions.
That is, F takes functions u to real numbers F (u).
If u0 is a minimizer of F (that is, F (u0 ) ⩽ F (u) for
“the derivative of F at u0 is zero.” Of course, this idea
has to be made precise, which one might expect to be
tricky since the space of admissible functions is infinite
dimensional. But in practice these so-called variational
methods end up using just standard calculus, and they
2   One-Dimensional Problems
The simplest situation to which variational techniques
apply involves functions of a single variable. Let us see
why minimizers of appropriate functionals in this set-
ting must automatically satisfy certain ordinary differ-
ential equations.
2.1   Shortest Distance
As a warmup problem, we shall show that the shortest
path between two points in the plane is a line segment.
Of course, this is obvious, but the methods we develop
can be applied to much more interesting situations.
Suppose, then, that we are given two points P and
Q in the plane. We take as our class of admissible
functions all smooth, real-valued functions u, defined
on some interval I = [a, b], such that u(a) = P and
u(b) = Q. The length of this curve is
Lawrence C. Evans
I
with respect to x. Now suppose that some particular
curve u0 minimizes the length. We want to deduce that
the graph of u0 is a line segment, which we will do by
“setting the derivative of F to zero” at the minimizer
To make sense of this idea, select any other smooth
function w that is defined on our interval I and that
vanishes at its endpoints. For each t define f (t) to be
1   Critical Points
F [u0 + tw]. Since the graph of the function u0 + tw
connects the given endpoints, and since u0 gives the
minimum length, it follows that the function f , which
is just an ordinary function from R to R, has a minimum

III . $94$ .

Variational Methods

at $t = 0$ . Therefore, ( $df/dt ) (0) = 0$ . But we can explicitly compute (df  /  dt) ( $0$ ) by differentiating under the integral sign and then integrating by parts. This gives

$u0u^{0}wdx = -$

w dx.

{}I (1 + (u0) ) (1 + (u0)2)1/22 1/2

I

This identity holds for all functions w with the properties specified above, and consequently

u0 u0 = = 0(2)(1 + (u0)2)1/2(1 + (u0)2)3/2

every where on the interval I.

To summarize the discussion so far: if the graph of $u^{0}$ minimizes the distance between the given endpoints, then $u^{0}$ identically equals zero, and therefore the shortest path is a line segment. This conclusion may not seem too exciting, but even this simple case has an interesting feature. The calculus of variations automatically focuses our attention on the expression u

$κ =$

,

(1 + (u)2)3/2

which turns out to be the curvature of the graph of u. The graph of the minimizer $u^{0}$ has zero curvature every where.

$2$ . $2$

Generalization: The Euler-Lagrange Equations It turns out that the technique we used for the previous example is extremely powerful and can be vastly generalized. One useful extension is to replace the length functional ( $1$ ) by a more general functional of the form

$F[u ] = L (u , u, x) dx, (3) I where$L = L (v , z, x) is a given function, some times called the Lagrangian. Then F [u] can be interpreted as the “energy” (or “ action ”) of a given function u defined on the interval I. Suppose next that a particular curve $u^{0}$ is a minimizer of F , subject to certain fixed boundary conditions. We want to extract information about the behavior of $u^{0}$ , and to do so we proceed as in our first example.
We select a smooth function w as above, define $f(t) = F$ [u 0 + tw], observe that $f$ has a minimum at $t = 0$ , and consequently deduce that ( $df/dt ) (0) = 0$ . As in the previous calculation, we then explicitly compute this derivative: df $(0) =L^{v}w + L^{z}wdx =( - (L^{v}) + L^{z})wdx.$ dt I I Here, L v and L z stand for the partial derivatives ∂ L / ∂ v and ∂ L / ∂ z , evaluated at ($u^{0}$ , $u^{0}$ , x). This expression $311$ equals zero for all functions w satisfying the given conditions.
Therefore, $- (L^{v}(u^{0}$ , $u^{0}$ , $x)) + L^{z}(u^{0}$ , $u^{0}$ , $x) = 0(4)$ every where on the interval I. This nonlinear ordinary differential equation for the function $u^{0}$ is called the Euler-Lagrange equation. The key point is that any minimizer of our functional F must be a solution of this differential equation, which often contains important geometrical or physical information. $1$ For example, take  L(v , $z,x) = 2mv^{2} - W(z)$ , which we interpret as the difference between the kinetic energy and the potential energy W of a particle of mass m moving along the real line.
The Euler-Lagrange equation (4) is then $mu^{0} = - W (u^{0})$ , which is Newton’s second law of motion. The calculus of variations provides us with an elegant derivation of this fundamental law of physics. $2$ . $3$ Systems We can generalize further, by taking  F[u ] =

L (u , u, x) dx,

(5)

I

where now we are taking vector-valued functions u that map the interval I into R m . If $u^{0}$ is a minimizer in some appropriate class of functions, then one can compute the Euler-Lagrange equation using ideas similar to those discussed above. We obtain the equations - ((Lv)k(u0 , $u^{0}$ , x)) + (Lz)k(u0 , $u^{0}$ , $x) = 0$ ,

(6)

one for each k. Here L v k and L z k represent the partial derivatives of L with respect to the kth variables of $u$ and $u$, evaluated at ($u^{0}$ , $u^{0}$ , x). These equations form a system of coupled ordinary differential equations for the components of $u^{0} = (u\frac{1}{0}$ , . . . , $u^{m}0)$ . For a geometric example, put m g ij(z)vivj)1/2 , L (v , z, x)  =  (

$i$ , $j = 1$

so that F [u] is the length of the curve u in the riemannian metric [I.3](/part-01/fundamental-definitions) determined by the g $ij$ . When $u^{0}$ is a curve of constant unit speed, the Euler-Lagrange system of equations ( $6$ ) can be rewritten, after some work, to read m j ((uk)0) + k ((ui)0) (u0) = 0(k = 1 , . . . , m ) Γ ij $i$ , $j = 1$

k

, called Christoffel symbols,

for certain expressions Γ ij

that can be computed in terms of the g ij . Solutions

$312$

of this system of ordinary differential equations are called geodesics. Thus, we have deduced that length minimizing curves are geodesics.

$1$

A physical example is  L(v , $z,x) = 2m|v|^{2} - W(z)$ , for which the Euler-Lagrange equation is $mu^{0} = - \nablaW(u^{0})$ . This is Newton’s second law of motion for a particle in R m moving under the influence of the potential energy W .

$3$

Higher-Dimensional Problems

Variational methods also apply to expressions involving functions of several variables, in which case the resulting Euler-Lagrange equations are partial differential equations (PDEs).

Least Area

$3$ . $1$

A first example extends our earlier examination of shortest curves. For this problem we are given a region U in the plane, with boundary ∂U , and a real-valued function g defined on the boundary. We then look at a class of admissible real-valued functions u, defined on U , with the condition that u should equal g on the boundary. We can think of the graph of u as a two dimensional curved surface with a boundary equal to the graph of g. The area of this surface is

(1 + |. ablau|2)1/2 dx. F[u ] = (7) U Let us assume that a particular function $u^{0}$ minimizes the area among all other surfaces with the given boundary. What can we deduce about the geometric behavior of this so-called minimal surface? Yet again we proceed by writing $f(t) = F$ [u 0 + tw], differentiating with respect to t, and so on. After some calculation we eventually discover that $\nablau^{0} = 0(8)$ div (1 + |. ablau0|2)1/2 within the region U, where “div” denotes the divergence operator. This nonlinear PDE is the minimal surface equation.
The left-hand side turns out to be a formula for (twice) the mean curvature of the graph of $u^{0}$ . Consequently, we have shown that a minimal surface has zero mean curvature every where. Minimal surfaces are some times regarded physically as the surfaces formed by soap films when they are stretched between a fixed wire frame that traces out the boundary specified by the function g. III. Mathematical Concepts $3$ . $2$ Generalization:
The Euler-Lagrange Equations It is now straightforward, and some times very profitable, to replace the area functional ( $7$ ) by the general expression $F[u ] = L ($. abla u , u, x) dx,

(9)

U

in which we now take U to be a region in R n . Assuming that $u^{0}$ is a minimizer, subject to given boundary conditions, we deduce the Euler-Lagrange equation  -  div $(\nabla^{v}L(\nablau^{0}$ , $u^{0}$ , $x)) + L^{z}(\nablau^{0}$ , $u^{0}$ , $x) = 0$ .

(10)

This is a nonlinear PDE that a minimizer must satisfy. A given PDE is called variational if it has this form. If, for example, we take  L(v , $z,x) = \frac{1}{2}|v|^{2} + G(z)$ , the corresponding Euler-Lagrange equation is the nonlinear Poisson equation $\Delta u = g(u)$ , n where $g = G$ and $\Delta u = k = 1ux^{k}x^{k}$ is the laplacian [I.3](/part-01/fundamental-definitions) of u. We have shown that this important PDE is variational.
This is a valuable insight, since we can then find solutions by constructing minimizers (or other critical points) of the functional F [u] = $12{}^{U2}|\nablau| + G(u)dx.4$ Further Issues in the Calculus of Variations Our examples have shown pretty convincingly how useful our simple method, called computing the first variation, can be when applied to the right geometrical and physical problems. And indeed, variational principles and methods appear in several branches of both mathematics and physics.
Many of the objects that mathematicians consider most important have an underlying variational principle of some kind. The list is impressive and, be sides the examples we have discussed, includes Hamilton’s equations, the Yang Mills and Selberg-Witten equations, various nonlinear wave equations, Gibbs states in statistical physics, and dynamic programming equations from optimal control theory. Many issues remain. For example, if $f = f$ (t) has a local minimum at a point $t^{0}$ , then we know not only that ( $df/dt ) (t^{0}) = 0$ , but also that $(d^{2}f/dt^{2})(t^{0}) \ge 0$ .
The attentive reader will correctly guess that a generalization of this observation, called computing the second variation, is important for the calculus of variations. It provides an insight into appropriate convexity conditions that are needed to ensure that critical