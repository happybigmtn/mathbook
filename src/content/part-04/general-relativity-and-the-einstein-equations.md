# General Relativity and the Einstein Equations

$IV$ . $13$ .

General Relativity and the Einstein Equations

Further Reading

Brezis, H., and F. Browder. 1998 . Partial differential equations in the $20th$ century. Advances in Mathematics $135$ : $76 - 144$ . Constantin, P. 2007 . On the Euler equations of incompressible fluids. Bulletin of the American Mathematical Society $44$ : $603 - 21$ . Evans, L. C. 1998 . Partial Differential Equations. Graduate Studies in Mathematics, volume $19$ . Providence, RI: American Mathematical Society. John, F. 1991 . Partial Differential Equations. New York: Springer. Klainerman, $S. 2000$ . PDE as a unified subject. In  *  GAFA $2000*$ , Visions in Mathematics--Towards 2000 ( special issue of Geometric and Functional Analysis), part $1$ , $pp.279 - 315$ . Wald, R. M. 1984 . General Relativity. Chicago, IL: Chicago University Press. IV . $13$ General Relativity and the

Einstein Equations

Mihalis Dafermos

Einstein’s formulation of general relativity represents one of the great triumphs of modern physics and provides the currently accepted classical theory that unifies gravitation, inertia, and geometry. The Einstein equations are the mathematical embodiment of this theory. The definitive form of the equations,

1 R\mu\nu - 2 Rg\mu\nu = 8\pi T\mu\nu ,

(1)

was attained in November 1915 ; this was the final act of Einstein’s eight-year struggle to generalize his principle of relativity so as to encompass gravitation, which had been described in the earlier “Newtonian” theory by the

Poisson equation

∂ ${}^{2}φ$

∂ ${}^{2}φ$

∂ ${}^{2}φ + += 4\pi\mu(2)$

∂$x_{2}$

∂$y_{2}$

∂$z_{2}$

for the potential φ and mass density μ.

An obvious contrast between the Einstein equations ( $1$ ) and the Poisson equation ( $2$ ) is that the mysterious notation of the former makes it far less obvious what they even mean. This has given the subject of general relativity a reputation for difficulty and impenetrability. However, this reputation is to some extent unwarranted. Both (1) and (2) represent the culmination of revolutionary theories whose formulations presuppose a complicated conceptual framework. For better

$483$

or for worse, however, the structure necessary to formulate Poisson’s equation has been incorporated into our traditional mathematical notation and school education. As a result, $R^{3}$ , with its Cartesian coordinate system, and notions such as functions, partial derivatives, masses, forces, and so on, are familiar to people with a general mathematical background, while the conceptual structure of general relativity is much less so, both with respect to its basic physical notions and with respect to the mathematical objects that are needed to model them. However, once one comes to terms with these, the equations turn out to be more natural and, one might even dare say, simpler. Thus, the first task of this article is to explain in more detail the conceptual structure of general relativity. Our aim will be to make it clear what the equations ( $1$ ) actually denote, and, moreover, why they are in a certain sense the simplest equations one can write down, given the general framework of the theory. This in turn will require us to review special relativity and its implications for the structure of matter, which will bring us to the unified concept of stress-energy-momentum, described by a tensorial object T . Finally, we will join Einstein in his inspired leap to the notion of a general four-dimensional Lorentzian manifold (M , g) that represents our space-time continuum. We shall see that equation ( $1$ ) expresses a relationship between the tensor T and the geometry of g as expressed in its so-called curvature. There is more to truly understanding a theory than merely knowing how to write down its governing equations. General relativity is associated with some of the most spectacular predictions of twentieth-century physics: gravitational collapse, black holes, space-time singularities, the expansion of the universe. These phenomena (which were completely unknown in 1915 and thus played no role in the formulation of the equations ( $1$ )) revealed themselves only when the conceptual issues surrounding the problem of global dynamics of solutions were understood. This took a surprisingly long time, though the story is not as well-known as the heroic struggle to attain ( $1$ ). The article will conclude with a very brief glimpse into the fascinating dynamics of the Einstein equations.

$1$

Special Relativity

$1$ . $1$

Einstein, 1905

Einstein’$s_{1905}$ formulation of special relativity stipulated that all fundamental laws of physics should be

$484$

invariant under Lorentz transformations of the frame of reference defined by x, y, z, and t. A Lorentz transformation is any composition of translations, rotations, and the Lorentz boost, which is given by the formulas ⎫

$x - vt$

ỹ $= y,$ ⎪

x̃  = 

⎪

,

⎪

⎬

$1 - v /c22(3)$

⎪

$2t - vx/c$

⎪

z̃ $= z,$ ⎪

⎭

t̃  = 

,

$1 - v^{2}/c^{2}$

where $c$ is a certain constant and $|v| < c.$ Thus, Einstein’s stipulation was that if one changes coordinates by means of a Lorentz transformation, then the form of all fundamental equations will remain the same. This set of transformations had already been identified in the context of the study of the vacuum Maxwell equations for the electric field E and magnetic field B: ⎫ ⎬ $\nabla$ · $E = {}^{0}$ , $\nabla$ · $B = {}^{0}$ ,

$(4)c$ ∂ $tE - \nabla \times B = 0$ . ⎭

$- 1 - 1c$ ∂ $tB + \nabla \times E = 0$ ,

Indeed, the Lorentz transformations are precisely the transformations that keep the form of the above equations invariant if we also transform E and B appropriately. Their significance was emphasized by poincaré [VI.61](/part-06/jules-henri-poincar-18541912). However, it was Einstein’s profound insight to elevate this invariance to the status of fundamental physical principle, despite its in compatibility with what we now usually call Galilean relativity, which corresponds to taking $c \to \i\text{nf ty}$ in (3). A surprising consequence of Lorentz invariance is that the notion of simultaneity is not absolute but depends on the observer: given two distinct events that occur at (t , x, y, z) and (t , x , y , z), it is easy to find a Lorentz transformation such that the transformed events no longer have the same t-coordinate. It follows from a celebrated result in partial differential equations known as the strong Huygens principle, applied to ( $4$ ), that electromagnetic disturbances in vacuum propagate with speed c, which we thus identify as the speed of light. In view of Lorentz invariance, this statement is independent of the frame! A further postulate of the principle of relativity is that physical theories should not allow massive particles to move at speeds (as measured in any frame) greater than or equal to c.

$1$ . $2$

Minkowski, 1908

Einstein’s understanding of special relativity was “algebraic.” It was minkowski [VI.64](/part-06/hermann-minkowski-18641909) who first understood

IV. Branches of Mathematics

its underlying geometric structure, namely, that the content of the principle was contained in the metric element

$- c^{2}dt^{2} + dx^{2} + dy^{2} + dz^{2}(5)$

defined on $R^{4}$ with coordinates (t , x, y, z). We call $R^{4}$ endowed with the metric (5) Minkowski space-time and denote it $R^{3} + {}^{1}$ . Points of $R^{3} + {}^{1}$ are referred to as events. The expression ( $5$ ) is classical notation for the inner product defined on tangent vectors v  = 

$(c - 1v^{0}$ , $v^{1}$ , $v^{2}$ , $v^{3})$ , $w = (c - 1w^{0}$ , $w^{1}$ , $w^{2}$ , $w^{3})$ on $R^{4}$ by v, w  $= - v^{0}w^{0} + v^{1}w^{1} + v^{2}w^{2} + v^{3}w^{3}$ .

(6)

The Lorentz transformations constitute precisely the symmetry group of the geometry defined by ( $5$ ). Einstein’s principle of relativity could now be understood as the principle that the fundamental equations of physics must refer to space-time only through geometric quantities: that is, quantities that can be defined purely in terms of the metric. For example, from this point of view the reason that the notion of absolute simultaneity is not allowed is that it depends on a privileged hyperplane through any given point of $R^{3} + {}^{1}$ . But there are Lorentz transformations that preserve the metric and send this hyperplane to another one through the given point, so nothing in the metric can pick out one particular hyperplane. Note that if a physical theory makes use of geometric quantities only, then it is automatically invariant under Lorentz transformations: this observation renders many complicated calculations unnecessary. Let us explore this geometric point of view further. Note that nonzero vectors v are naturally classified by the inner product  · , ·  into three types, called timelike, null, and spacelike, according to whether  v, v  $<0$ ,  v, v  $= 0$ , or  v, v  $> 0$ , respectively. Idealized point particles traverse curves γ through space-time; these are called the world lines of the corresponding particles. The postulate (referred to earlier) that speed in any frame of reference is bounded by the speed of light c can now be formulated as the following statement: if γ is the world line of a particle, then the vector d γ  /  ds must be timelike. (Null lines correspond to light rays in the geometric optics limit of ( $4$ ).) This statement is independent of the parameter s of γ, but for world lines we shall always assume that $dt/ds > 0$ . To phrase this more geometrically, $dγ/ds$ , $(c - 1$ , $0$ , $0$ , $0)< 0$ , which we interpret as the statement that γ is future-directed.

$IV$ . $13$ .

General Relativity and the Einstein Equations We can now define the “length” of the world line of a particle by

$s^{2}$

 -    γ ̇ , γ̇  ds

L $(γ) =s^{1}2222s^{2}$

dt

dx

dy

dz

 = 

 - 

 - 

 - 

$c2$

ds.

ds

ds

ds

ds

$s^{1}(7)$

Classically, the above expression would have been written simply as L $(γ) =- ( - c^{2}dt^{2} + dx^{2} + dy^{2} + dz^{2})$ , γ which explains the notation ( $5$ ). We refer to the quantity c $- 1$ L (γ) as proper time. This is the time that is relevant in local physical processes; in particular, if you are the particle traversing the world line γ, then c $- 1$ L (γ) is the time that you will feel. The metric ( $5$ ) contains three-dimensional Euclidean geometry $dx^{2} + dy^{2} + dz^{2}$ , restricted to $t = 0$ , say. More interestingly, it also contains non-Euclidean geometry y z x

$dx^{2} + 1 - dy^{2} + 1 - dz21 -$

r

r

r

$- 1$

it is restricted to the hypersurface $t = c r =$ when

$- 1x + y + z$ . It is hard to over estimate how revo$222$

c

lutionary the notion was that the time of physical processes (including our very sensations) and the length of measuring rods are two interdependent aspects of a geometric structure that naturally lives on a four-dimensional space-time continuum. Indeed, even Einstein initially rejected Minkowski space-time, preferring to retain the independent reality of a definite “space,” albeit a space with a relative notion of simultaneity. Only as a result of his search for general relativity did he realize that this view is fundamentally untenable. We shall return to this in section $3$ .

$2$

Relativistic Dynamics and the Unification of Energy, Momentum, and Stress Besides the space-time concept and its geometrization, the principle of relativity led to a profound rearrangement and unification of the fundamental concepts of dynamics: mass, energy, and momentum. Einstein’s celebrated relation between mass and energy in the rest frame, $E^{0} = mc^{2}$ ,

(8)

is the best-known expression of one aspect of this unification. This relation arises naturally when one attempts

$485$

to generalize Newton’s second law m (dv  /  dt)  =  f to a relation between $4$ - vectors in Minkowski space. General relativity has to be formulated in terms of fields rather than particles. As a first step toward understanding it, let us look at continuous media. Now, instead of particles we consider matter fields; the unification of dynamical concepts encompasses what is known as stress, and its complete expression is embodied by the so-called stress-energy-momentum tensor T . This tensor is fundamental to general relativity, so we have no choice but to familiarize ourselves with it. It will be the key to the form of the Einstein equations ( $1$ ) as well as to the object on their right-hand side. For each point $q \in R^{3} + {}^{1}$ , the stress-energy-momentum tensor field T gives us a map

$T$ : $(R^{4})^{q} \times (R^{4})^{q} \to R(9)$

defined by the formula

$3$

T αβ w α w̃ β .

T (w , w ̃)  = 

α , $β = 0$

Here, T αβ  =  T βα for each α and β. By $R^{4}$ q we mean the space of vectors at q. (In Minkowski coordinates, we often identify $R^{4}$ with $R^{4}$ q , but it will be important to distinguish between the two when considering arbitrary coordinates in section $3$ . $2$ .) Bilinear maps of the form (9) are known as covariant $2$ - tensors . If the only matter present is described by what is known as a perfect fluid, then the components of T are given by

$T^{00} = (ρ + p)u^{0}u^{0} - p,T^{0i} = (ρ + p)u^{i}u^{0}$ ,

$Tij = (ρ + p)u^{i}u^{j} + pδij$ ,

where u is the $4$ - velocity , a timelike vector normalized such that  u, u  $= - c^{2}$ , ρ is the mass-energy, p is the pressure, and where $δij = 1$ if $i = j,0$ if $i = j,$ and $i$ and j range over $1$ , $2$ , $3$ . Greek indices will range over $0$ , $1$ , $2$ , $3$ . We identify $T^{00}$ with energy, $T^{0i}$ with momentum, and T ij with stress. These notions are clearly framedependent. Finally, observe that T (u , u)  =  ρ$c^{2}$ . This is the field-theoretic version of the famous equation ( $8$ ). In general, T is derived from the totality of all the matter fields by constitutive functions that depend on the nature of the matter fields and their interactions. We need not worry here about such things. But, regard less of the nature of the matter fields involved, we always postulate that the following equations are satisfied:

$3$

∂ $iTiα = 0$ .

 -  ∂ ${}^{0}T^{0}α +i = 1$

486                                                                                          IV. Branches of Mathematics

Defining ∇0 = −∂0 , ∇i = ∂i , and introducing the Ein-         Notice that the mass m has dropped out! Thus, the
stein summation convention, under which summation             gravitational field accelerates all objects at a given posi-
is implicit when an index appears both upstairs and           tion in the same way. This explains the fact, recorded
downstairs, we may rewrite this as                            already in late antiquity by Ioannes Philoponus and
                                                              popularized in Western Europe by Galileo, that the
                          ∇\mu Tμν = 0.                  (10)
                                                              time it takes objects to fall from a given height is
These equations are Lorentz invariant.                        independent of their weight.
   The above relations embody the conservation of                It was Einstein who first interpreted this property as
stress–energy–momentum at a differential level. Inte-          a sort of covariance with respect to transformations
grating (10) between homologous hypersurfaces and             to noninertial, that is to say accelerated, frames. For
applying the Minkowski-space version of the diver-            instance, in the case of a constant gravitational field,
gence theorem, one obtains global balance laws. If            which corresponds to the case φ(z) = f z, we can pass
one assumes that Tαβ is compactly supported, then,            to the accelerated frame
integrating between t = t1 and t = t2 , one obtains
                                                                                        z̃ = z + 12 f t 2
                  1   2   3                1   2   3
             T0α dx dx dx =           T0α dx dx dx .   (11)   and write (12) as
      t=t2                     t=t1
                                                                                       dv
With respect to the chosen Lorentz frame, the zeroth                                      = 0.                   (13)
                                                                                       dt
component of the above equation represents the con-           Similarly, one can reverse the argument to “simulate” a
servation of total energy, while the remaining compo-         gravitational field when none is present by expressing
nents represent conservation of total momentum.               (13) in an accelerated frame.
  In the case of a perfect fluid, if we close the sys-
tem (10) by adjoining a conservation law for particle         3.2   Vectors, Tensors, and Equations in
number                                                              General Coordinates
                     ∇α (nuα ) = 0
                                                              Exactly what the equivalence principle means in gen-
and postulate constitutive relations between ρ, p, par-
                                                              eral is somewhat obscure and has been the subject
ticle number density n, and entropy per particle s,
                                                              of debate ever since Einstein introduced it. Neverthe-
compatible with the laws of thermodynamics, then we           less, the above considerations suggest that, even in the
arrive at the so-called relativistic Euler equations.         absence of gravity, it would be useful to know how
                                                              various objects and equations appear when expressed
         3    From Special to General Relativity              in arbitrary coordinate systems. That is to say, let us
With the elements of special relativity at hand, together     change from our Minkowski coordinates x 0 , x 1 , x 2 , x 3
with their deep implications for the nature of energy,        to the most general coordinate system, which we shall
momentum, and stress, we can now pass to the formu-           write as \bar{x} \bar{\mu} = \bar{x} \bar{\mu} (x 0 , x 1 , x 2 , x 3 ), where \bar{\mu} ranges over
lation of general relativity.                                 0, 1, 2, 3.
                                                                 Expressing scalar functions in arbitrary coordinates
3.1     The Equivalence Principle                             poses no problem. But what about vector fields? If v
                                                              is a vector field expressed in Minkowski coordinates
Einstein understood as early as 1907 that the most pro-       as (v 0 , v 1 , v 2 , v 3 ), how do we express v in our new
found aspect of the gravitational force could not be          coordinates \bar{x} \bar{\mu} ?
described within the relativity principle as he had for-         One has to think a bit about what a vector field actu-
mulated it in 1905. This aspect is what he called the         ally is. The correct point of view is to consider a vec-
equivalence principle.                                        tor field v as a first-order differential operator defined
  The easiest setting in which to understand this prin-       (using Einstein’s summation convention) by v(f ) =
ciple is that of the “test particle” with velocity v(t) in    v μ ∂\mu f . So we seek v \bar{\mu} such that v(f ) = v \bar{\mu} ∂\bar{\mu} f for all
a fixed gravitational field φ. In this case, we have that       functions f . The chain rule then gives us our answer:
the classical gravitational force is given by f = −m∇φ,
                                                                                        ∂ \bar{x} \bar{\mu} ν
and we may rewrite Newton’s second law m(dv/dt) =                                      v \bar{\mu} =  v .                (14)
                                                                                        ∂x ν
f as
                                                               What about tensors, such as the stress–energy–mo-
                       dv
                           = −∇φ.                     (12)    mentum tensor T ? In view of the definition (9), we seek
                        dt

IV.13.   General Relativity and the Einstein Equations                                                                  487

T\bar{\mu}ν̄ such that                                                3.3   Lorentzian Geometry
                                            \bar{\mu}   ν̄
                   T (u, v) = T\bar{\mu}ν̄ u v ,               (15)
                                                               The profound insight of replacing the fixed Minkowski
where the numbers u\bar{\mu} are the components of u with             η with a dynamic g brought Einstein to what we now
respect to the coordinates \bar{x} \bar{\mu} as we have just calculated    call Lorentzian geometry. Lorentzian geometry gener-
them above. (Note that these components depend on              alizes Minkowski geometry following the blueprint of
the point q. This is why it is now essential to distinguish    riemann [VI.49]. That is, we replace the Minkowski
R4 q from R4 .) Again, the chain rule gives us the answer:      metric η by a general map
                                   ∂x ν ∂x \mu T\bar{\mu}ν̄ = Tμν                    .                                g : R4 q \times R4 q → R.
                                   ∂ \bar{x} ν̄ ∂ \bar{x} \bar{\mu}
Classically, we write                                          In other words, we replace η by a symmetric covariant
            T = T\bar{\mu}ν̄ d\bar{x} \bar{\mu} d\bar{x} ν̄ = Tμν dx \mu dx ν .          2-tensor, which is expressed in arbitrary coordinates
                                                               x \mu by
One can interpret the above as a shorthand notation for
(15), but it also tells us how to compute T\bar{\mu}ν̄ from Tμν                              gμν dx \mu dx ν .
by formally applying the chain rule to d\bar{x} \bar{\mu}.                Moreover, we require that at each point q the bilin-
   There is another covariant symmetric 2-tensor be-           ear form g(· , ·) can be diagonalized to the Minkowski
sides T that is relevant here. This is the Minkowski met-      form (6). Loosely speaking, a Lorentzian metric is one
ric itself. Indeed, the classical form of the Minkowski        that “looks locally like the Minkowski metric,” just as
metric (5) corresponds to the representation                   a riemannian metric [I.3 §6.10](/part-01/fundamental-definitions) looks locally like the
                        ημν dx \mu dx ν ,                        Euclidean metric.
where the ημν for Minkowski coordinates x \mu are given             Just as with the Minkowski metric, the bilinear form
by η00 = −1, η0 i = 0, ηij = 1 if i = j, and ηij = 0 if         g permits us to classify nonzero vectors vq at a point q
i = j. To avoid the cumbersome notation · , ·, let us       as timelike, null, or spacelike and to define proper times
refer to the Minkowski metric as η. Following the above,       of world lines γ(s) = (x 0 (s), x 1 (s), x 2 (s), x 3 (s)) by
we may express η in general coordinates \bar{x} \bar{\mu} by               the formula (7), but with γ̇, γ̇ replaced by gμν ẋ μ ẋ ν .
                        η\bar{\mu}ν̄ d\bar{x} \bar{\mu} d\bar{x} ν̄ ,                  It is in this sense that we can speak of the geometry
                                                               of g.
where η\bar{\mu}ν̄ is computed by formal application of the
                                                                  In view of Minkowski’s formulation of the special rel-
chain rule.
                                                               ativity principle as the statement that the equations
   It is clear that if one tries to transform an equa-
                                                               of physics refer to space-time only through geomet-
tion such as (10) into general coordinates, then the
                                                               ric quantities associated with the Minkowski metric, it
components of η and their derivatives will appear in
                                                               is natural to look for a generalization of this princi-
the equations. Einstein (always thinking “algebraically”)
                                                               ple, and indeed a suitable version immediately suggests
was seeking laws of motion for both matter and the
                                                               itself. It is the principle that the equations of physics
gravitational field that would have the same form in
                                                               refer to the space-time coordinates only via geometric
all coordinate systems. As he understood it, this meant
                                                               quantities naturally associated with g.
that all objects that appear should transform as ten-
sors and should be considered a priori “unknown.” He             We saw earlier that the kinematic constraint on
referred to this principle as “general covariance.” This       “test particles,” as formulated geometrically for the
suggests that η should be replaced by an unknown sym-          Minkowski metric, was that dγ/ds should be timelike;
metric 2-tensor. Let us call this 2-tensor g. One can of       this makes sense for an arbitrary Lorentzian metric.
course try to write down an equation for the “unknown”         But how does one formulate differential equations? For
g that forces it to be the “known” Minkowski metric η.         instance, how does one formulate an analogue of (10)
Thus, “general covariance” per se does not force one to        that refers only to g?
abandon η. But in view of the fact that g and T have             It turned out that in the Riemannian case, a set of
the same number of components, it was a natural step           natural geometric concepts suitable for the task had
to consider g as the embodiment of the gravitational           already been developed in the nineteenth and early
field and to try to look for an equation that related g         twentieth centuries by Riemann, Bianchi, Christoffel,
and T directly. In this way, the framework of general          Ricci, and Levi-Civita. These carry over directly to the
relativity was born.                                           Lorentzian case.

$488$

One begins by defining the so-called Christoffel sym$\lambda$ by bols Γ μν $= \frac{1}{2}g\lambdaρ($ ∂ $\mu gρ\nu +$ ∂ $\nug\muρ -$ ∂ ρ$g$μν ).

$\lambda$

Γ μν

Here, the numbers g μν are the components of the “inverse metric” of g: that is, they are the unique solu\mu tion to the equation  g\mu\nug\nu\lambda = δ\lambda , where, as usual, μ

$δ\lambda = 1$ if $\lambda = \mu$ and $0$ otherwise. (It turns out that g μν is very useful for the calculational gymnastics that are typical of tensor analysis when it exploits the Einstein summation convention .) One can then define a differential operator $\nabla$ \mu called a connection, which acts on vector fields by ν

$\nabla\mu v\nu =$ ∂ \mu v\nu + Γ\mu\lambda v\lambda(16)

and on covariant $2$ - tensors by

σ

σ

T σ\nu - Γ\lambda\nu\nabla\lambda T\mu\nu = ∂ \lambda T\mu\nu - Γ\lambda\mu T μσ .

(17)

The left-hand sides of ( $16$ ) and ( $17$ ) define tensors that can be expressed in any coordinate system by a formal application of the chain rule. With the help of this differential operator, one could now write the analogue of equations ( $10$ ) for an arbitrary metric g as $\nabla\mu T\mu\nu = 0$ ,

(18)

where \nabla\mu = g\mu\nu\nabla\nu refers to the connection associated with g. If we consider a limit as the matter field becomes concentrated at a point, or rather as the stress-energymomentum tensor T μν is nonzero only on a world line, then this curve will be a geodesic of g: that is, a curve that locally maximizes the proper time defined by g. These are the analogues of straight timelike lines in Minkowski space. In this limit, the motion of the matter does not depend on the nature of the stressenergy-momentum tensor, but only on the geometry of the metric that defines geodesics. Thus, all objects fall in the same way. These considerations give a concrete realization to the equivalence principle in general relativity. Finally, it is important to remark that for a general metric g, the identity ( $18$ ) does not imply global conservation laws ( $11$ ) for “total energy” and “total momentum.” Such laws hold only if g has symmetries. The fact that the fundamental conservation laws survive in general only at the infinitesimal level is an important insight into the nature of these principles in physics.

IV. Branches of Mathematics

$3$ . $4$

Curvature and the Einstein Equations

It remains, then, to give a set of equations for the metric g that relate it to T . In anticipation of a Newtonian limit, we expect these equations to be second order, and we expect them to implement “general covariance” in the simplest way possible: they should refer to no other structure but g itself and T . Again, Riemannian geometry provides ready-made tensorial objects that are invariantly associated with g. One can define the Riemann curvature tensor

 R\mu\nu\lambdaρdx\mu$dx$\nudx\l\text{ambda dx}ρ

with components given by

σ

τ σ

σ

σ

τ

 -  ∂ \lambdaΓ\nuρ+ Γ\nu\lambdaΓτρ - Γ\nuρR\mu\nu\lambdaρ = g\muσ (∂ $ρΓ\nu\lambdaΓτ\lambda$

).

One can also define the Ricci curvature

R μν dx \mu dx ν ,

a covariant symmetric $2$ - tensor with components given by R\mu\nu = g\lambdaρR\mu\nu\lambdaρ , and the scalar curvature $R = g$ μν R μν . If g were the induced (Riemannian) metric on $a_{2}$ - surface in $R^{3}$ , then R would just be twice the Gauss curvature K. The above expressions should be thought of as complicated tensorial generalizations of Gauss curvature to several dimensions. The final piece of the puzzle for the formulation of the Einstein equations ( $1$ ) is provided by the following constraint that Einstein demanded: whatever the equation relating the metric and the stress-energy-momentum tensor of matter, ( $18$ ) (the infinitesimal conservation of stress - energy - momentum) should hold as a consequence. Now, it turns out that for any metric g, the so-called Bianchi identities imply that \nabla\mu(R\mu\nu - \frac{1}{2}g\mu\nu R) = 0 .

(19)

It is thus natural to postulate a linear relation between

$1$

T μν and the tensor R μν $- {}^{2}$ g μν R. The form

 R\mu\nu - \frac{1}{2}g\mu\nu R = 8\pi Gc - 4 T\mu\nu(20)

is then uniquely determined by the requirement that it should give the correct Newtonian limit when one makes the identifications $g^{00}$ ∼ $1 + 2φ/c^{2}$ , g $ij$ ∼ $(1 - 2φ/c^{2})δ$ ij . $g^{0j}$ ∼ $0$ , The form (1) corresponds to the usual units $G = c = 1$ . Note that ( $1$ ), when written out explicitly, is nonlinear in the metric components g μν .

IV.13.   General Relativity and the Einstein Equations                                                           489

   Einstein did not stop at the Newtonian limit. By con-    3.5   The Manifold Concept
sidering geodesic motion in solutions of the linearized
                                                            We have been able to get this far without really address-
equations (20), Einstein was able to determine the cor-
                                                            ing the question of where the metric g is defined. In
rect value for the anomalous precession of the perihe-
                                                            passing from the Minkowski metric to a general g,
lion of Mercury, an effect that Newtonian theory was
                                                            Einstein did not originally have in mind replacing the
unable to explain. Since (20) had no adjustable param-
                                                            domain R4 . But it is clear in the Riemannian case from
eters after determining the Newtonian limit, this was
                                                            the theory of surfaces that the natural object for a
a genuine test of the theory. A few years later the
                                                            metric to live on is not necessarily R2 but a general
gravitational “bending” of light was observed. This had
                                                            surface. For instance, the metric dθ 2 + sin θ dφ2 nat-
been calculated theoretically in the context of the geo-
                                                            urally lives on the sphere S2 . In saying this, we are
metric optics approximation where light rays follow
                                                            to understand that one requires several coordinate
null geodesics in a fixed space-time background. Post-
                                                            systems of the type (θ, φ) to cover all of S2 . The n-
Newtonian predictions of (1) have now been verified by
                                                            dimensional generalization of the object where Rie-
various solar system tests, confirming general relativity
                                                            mannian or Lorentzian metrics naturally live is a man-
in this regime to a high degree of accuracy.
                                                            ifold [I.3 §6.9](/part-01/fundamental-definitions). Manifolds are the structures obtained
   One special case of (20) is when we postulate that
                                                            by consistently smoothly pasting together local coordi-
Tμν = 0. The equations then simplify to
                                                            nate systems.
                        Rμν = 0.                     (21)     Thus, general relativity allows the space-time contin-
These are known as the vacuum equations. The Min-           uum not to be R4 but instead to be a general mani-
kowski metric (5) is a particular solution (but not the     fold M, which may very well be topologically inequiv-
only one!).                                                 alent to R4 , just as S2 is inequivalent to R2 . We call
  The vacuum equations can be derived formally as the       the pair (M, g) a Lorentzian manifold. Properly put, the
euler–lagrange equations [III.94](/part-03/variational-methods) corresponding to          unknown in the Einstein equations is not just g but the
the so-called Hilbert Lagrangian:                           pair (M, g).
                                                             It is interesting that this fundamental fact, namely
            L(g) = R −g dx 0 dx 1 dx 2 dx 3 .               that the topology of space-time is not a priori de-
                  √                                         termined by the equations, arises almost as an after-
(The expression −g dx 0 dx 1 dx 2 dx 3 denotes the nat-
                                                            thought. Moreover, it was a thought that took many
ural volume form associated with g.) hilbert [VI.63](/part-06/david-hilbert-18621943),
                                                            years to be clarified.
who was following closely Einstein’s struggle to formu-
late a theory of gravity with a dynamic metric g, arrived
                                                            3.6   Waves, Gauges, and Hyperbolicity
at his Lagrangian (actually a more general version of
the above yielding the coupled Einstein–Maxwell sys-        When written out explicitly in arbitrary coordinates
tem) very shortly before Einstein obtained the general      (try it!), the Einstein equations do not appear to be
equations (20).                                             of any usual type, such as elliptic (like the poisson
  Many of the most interesting phenomena that come          equation [IV.12 §1](/part-04/analysis)), parabolic (like the heat equa-
from the equations (20) are already present in the vac-     tion [I.3 §5.4](/part-01/fundamental-definitions)), or hyperbolic (like the wave equation
uum case (21). This is somewhat ironic, because it was      [I.3 §5.4](/part-01/fundamental-definitions); see [IV.12 §2.5](/part-04/analysis) for more about these differ-
the forms of T and (10) that dictated (20). Note, in con-   ent classes of PDEs). This is related to the fact that,
trast, that in the Newtonian theory (2), the “vacuum”       given a solution, one can form a “new” solution by com-
equations μ = 0 and standard boundary conditions at         posing the old solution with a coordinate transforma-
infinity imply φ = 0. Thus, the Newtonian theory of the      tion. We can do this for new coordinate systems whose
vacuum is trivial.                                          coordinate transformations differ from the identity
  The part of the curvature tensor Rμνλρ that is not        only in a ball. This fact, known as the hole argument,
forced to vanish from (21) is known as the Weyl cur-        confused Einstein and his mathematical collaborator
vature. This curvature measures the “tidal” distortion      Marcel Grossmann, who were thinking algebraically in
of families of geodesics. Thus, the “local strength” of     terms of the form of the equations in coordinates, and
gravitational fields in vacuum regions is related in the     temporarily led them to reject “general covariance.”
Newtonian limit to the tidal forces on macroscopic test     The resulting backtracking delayed the final correct
matter, not the norm of the gravitational force.            formulation of (1) by about two years. The geometric

$490$

interpretation of the theory immediately suggests the resolution to the dilemma: such solutions are to be considered “the same” because they are the same from the point of view of all geometric measurements. In modern language, a solution to the Einstein vacuum equations (say) is an equivalence class [I.2](/part-01/language-and-grammar) of space times (M , g), where two space-times are equivalent if there exists a diffeomorphism φ between them such that in any open set the metric has the same coordinate form when one identifies local coordinates by φ. It turns out that once these conceptual issues are overcome, the Einstein equations can be viewed as hyperbolic. The easiest way to do this is to impose a gauge: that is to say, a certain restriction on the coordinate system. Specifically, one requires the coordinate functions x α to satisfy the wave equation g x α $= 0$ , where the d’Alembertian operator is defined by the formula $1$ ∂ μ ( - gg μν ∂ ν). $g =$ √ $- g$ Such coordinates always exist locally and they are traditionally called harmonic coordinates, although the term wave coordinates would perhaps be more appropriate. The Einstein equation can then be written as a system g g μν = N μν ({ g αβ }$, {\partial γ g αβ })$, where N μν is a nonlinear expression that is quadratic in the ∂ γ g αβ . In view of the Lorentzian signature of the metric, the above system constitutes what is known as a second-order nonlinear (but quasilinear) hyperbolic system. At this point, it is instructive to make a comparison with the Maxwell equations. Suppose we are given an electric field E and a magnetic field B defined on Minkowski space. $A_{4}$ - potential is a vector field A suc$h^{3}$ that $E^{i} = -$ ∂ $iA^{0} - c - 1$ ∂ $tA^{i}$ , and $B^{i} = j$ , $k = {}^{1}$ ijk ∂ $jA^{k}$ . (Here ${}^{123} = 1$ , and ijk is totally antisymmetric, i.e., it transforms to its negative under permutation of any two indices .) If one wishes to view A as the fundamental physical object, then one notices that if A is replaced by the field Ã, defined by the formula Ã $= A + ( - c - 1$ ∂ $t\psi,$ ∂ ${}^{1}\psi,$ ∂ ${}^{2}\psi,$ ∂ ${}^{3}\psi)$ , where $\psi$ is an arbitrary function, then Ã is also $a 4$ - potential for E and B. One can expect a determined equation for A only if one imposes further conditions on it: that is, if one “fixes the gauge.” (The terminology “gauge” is originally due to weyl [VI.80](/part-06/hermann-weyl-18851955).) In the so-called Lorentz gauge $\nabla\mu A\mu = 0$ , IV. Branches of Mathematics the Maxwell equations can be written A $\mu = - c - 2$ ∂ ${}^{t2}A\mu +$ ∂ ${}^{i2}A\mu = 0$ , i from which the wave properties are completely manifest. The gauge-symmetric point of view lived on to later twentieth century glory: the Yang-Mills equations, which are a nonlinear generalization of the Maxwell equations with a similar gauge symmetry, are the central part of the so-called standard model for particle physics. The hyperbolicity property of the Einstein equations has two important repercussions. The first is that there should exist gravitational waves. This was noted by Einstein at least as early as 1918 , essentially as a result of a linearized version of the considerations in the above discussion. The second is that there is a well-posed initial value problem [IV.12](/part-04/analysis) for the Einstein equations ( $1$ ) with the domain-of-dependence property, when these are coupled with appropriate matter equations. In particular, this is true in the vacuum case ( $21$ ). The proper conceptual framework to formulate the latter problem took a long time to get right, and was only completely understood through work of Choquet-Bruhat and Geroch in the $1950s$ and $1960s$ , based on the fundamental concept of global hyperbolicity due to Leray. Well-posedness means that one could associate a unique solution (in the vacuum case, a Lorentzian $4$ - manifold (M , g) satisfying ( $21$ )) with a suitable notion of initial data. Of course, “initial data” does not mean “data at time t $= 0$ , ” since the concept of $t = 0$ is not geometric. Instead, the data take the form of some Riemannian $3$ - manifold (Σ , \bar{g}) with a symmetric covariant $2$ - tensor K. The triple (Σ , ḡ, K) has to satisfy the so-called Einstein constraint equations. But with this notion, the fundamental problem of general relativity, despite its revolutionary conceptual structure, is thoroughly classical: to determine the relation of the solution to initial data, that is to say, to determine the future from knowledge of the “present.” This is the problem of dynamics.

$4$

The Dynamics of General Relativity

In this final section we give a taste of our current mathematical understanding of the dynamics of the Einstein equations.

$4$ . $1$

Stability of Minkowski Space and the

Nonlinearity of Gravitational Radiation

In any physical theory in which one can formulate the problem of dynamics, the most basic question is the

IV.13.   General Relativity and the Einstein Equations                                                                 491

stability of the trivial solution. In other words, if we       gether and try to consider (22) for all values of r . What
make a small change to the “initial conditions,” will the      happens then to the metric (22) at r = 2 m? In the (r , t)
resulting change to the solution be small as well? In the      coordinates, the metric element appears to be singular.
case of general relativity, this is the question of stabil-    But this turns out to be an illusion! By a simple change
ity of the Minkowski space-time R3+1 . This fundamen-          of coordinates, one can easily extend the metric reg-
tal result was proven for the vacuum equations (21) in         ularly as a solution of (21) beyond r = 2 m. That is,
1993 by Christodoulou and Klainerman.                          there exists a manifold M that contains both a region
   The proof of the stability of Minkowski space made          r > 2 m and a region 0 < r < 2 m, separated by a reg-
it possible to formulate the laws of gravitational radi-       ular (null) hypersurface H + . The metric element (22)
ation rigorously. Gravitational radiation is yet to be         is valid every where except on H + , where it must be
observed directly, but it has been inferred, originally        rewritten in regular coordinates.
by Hulse and Taylor, from the energy loss of a binary             It turns out that the hypersurface H + can be char-
system. This work gave them the only Nobel prize               acterized by an exceptional global property: it defines
(1993) directly associated with the Einstein equations!        the boundary of the region of space-time that can send
The blueprint for the mathematical formulation of the          signals to null infinity I + , or, in the physical interpreta-
radiation problem is based on work of Bondi and later          tion, to distant observers. In general, the set of points
Penrose. One associates with the space-time (M, g) an          that cannot send signals to null infinity I + is known
ideal boundary “at infinity,” known as null infinity and         as the black hole region of space-time. Thus, the region
denoted I + . Physically, the points of I + correspond         0 < r < 2 m is the black hole region of M, and H + is
to observers who are far away from the isolated self-          known as the event horizon.
gravitating system but who are receiving its signals.             These issues took a long time to be sorted out,
Gravitational radiation can be identified with certain          partly because the language of global Lorentzian geom-
tensors defined on I + from rescaled boundary limits of         etry was developed long after the original formula-
various geometric quantities. As Christodoulou was to          tion of the Einstein equations. The global geometry of
discover, the laws of gravitational radiation are them-        the extended space-time M was clarified by Synge in
selves nonlinear, and the nonlinearity is potentially          around 1950 and finally by Kruskal in 1960. The name
relevant for observation.                                      “black hole” is due to the imaginative physicist John
                                                               Wheeler. From their beginnings as a theoretical curios-
4.2   Black Holes                                              ity, black holes have become part of the accepted astro-
                                                               physical explanation for a wide variety of phenomena,
Perhaps no prediction of general relativity is better
                                                               and in particular are thought to represent the end-state
known today than that of black holes.
                                                               for the gravitational collapse of many stars.
  The story of black holes begins with the so-called
Schwarzschild metric:                                          4.3   Space-Time Singularities
       2 m            2 m −1
  − 1−    dt 2 + 1 −       dr 2                                A second natural problem poses itself in relation to
        r             r
                                                               the Schwarzschild metric (22), now considered in the
                          + r 2 (dθ 2 + sin2 θ dφ2 ).   (22)   region r < 2 m of the extended space-time M: what
The parameter m here is a positive constant. This is           happens at r = 0?
a solution of the vacuum Einstein equations (21) that            A computation reveals that as r → 0, the Kretchmann
was found in 1916. The original interpretation of (22)         scalar Rμνλρ R μνλρ blows up. Since this expression is a
was that it modeled the gravitational field in a vacuum         geometric invariant, it follows that, unlike the situation
region outside a star. That is to say, (22) was considered     at r = 2 m, the space-time is not regularly extendable
only in some coordinate range r > R0 , for an R0 > 2 m,         beyond 0. Moreover, timelike geodesics (freely falling
and the metric was matched at r = R0 to a “static” inte-       observers in the test particle approximation) entering
rior metric satisfying the coupled Einstein–Euler sys-         the black hole region reach r = 0 in finite proper time,
tem in the coordinate range r ⩽ R0 . (This latter metric       so they are “incomplete” in the sense that they can-
is again of the form (22), but with m = m(r ) such that        not be continued indefinitely. They thus “observe” the
m → 0 as r → 0.)                                               breakdown of the geometry of the space-time metric.
   From the theoretical point of view, a natural problem       Moreover, macroscopic observers approaching r = 0
poses itself. Suppose we do away with the star alto-           are torn apart by the gravitational “tidal forces.”

492                                                                                           IV. Branches of Mathematics

   In the early years of the subject, it was thought that    fact is related to the celebrated positive energy theorem
this seemingly pathological behavior was connected to        of Schoen and Yau.
the high degree of symmetry of the Schwarzschild met-
ric and that “generic” solutions would not exhibit such      4.4   Cosmology
phenomena. That this is not the case was shown by Pen-       The space-times (M, g) discussed previously are all
rose’s celebrated incompleteness theorem of 1965. This       idealized representations of isolated systems. The “rest
states that solutions to the initial value problem for       of the universe” is excised and replaced by an “asymp-
the Einstein equations coupled to appropriate matter         totically flat end”; far-away observers are placed at an
will always contain such incomplete timelike or null         ideal boundary “at infinity.” But what if we are more
geodesics if the initial data hypersurface is noncom-        ambitious and consider our space-time (M, g) as rep-
pact and contains what is known as a closed trapped          resenting the whole universe? The study of this latter
surface. The Schwarzschild case may appear to sug-           problem is known as cosmology.
gest that such incomplete geodesics are associated with         Observations suggest that on very large scales the
the curvature blowing up. However, the situation can in      universe is approximately homogeneous and isotropic.
fact be very different, as is apparent in the celebrated      This is sometimes known as the Copernican principle.
Kerr solutions, a remarkable two-parameter family of         Interestingly, one cannot solve the Poisson equation (2)
solutions to the vacuum equations (21), discovered only      with a constant ∇φ and constant nonzero \mu on R4 .
in 1963, which are rotating versions of (22). In the         Thus, in Newtonian physics, cosmology never became a
Kerr solutions, incomplete timelike geodesics meet a         rational science.1 General relativity, on the other hand,
so-called Cauchy horizon, a smooth boundary of the           does admit homogeneous and isotropic solutions as
region of space-time that is uniquely determined by          well as their perturbations. Indeed, cosmological solu-
initial data.                                                tions of the Einstein equations were studied by Einstein
   The theorem of Penrose gives rise to two important        himself, de Sitter, Friedmann, and Lemaitre in the early
conjectures. The first, known as weak cosmic censor-          years of the subject.
ship, says roughly that for generic physically plausi-          When general relativity was formulated, the pre-
ble initial data for suitable Einstein-matter systems,       vailing view was that the universe should be static.
geodesic incompleteness, if it occurs, is always con-        This led Einstein to add a term Λgμν to the left-hand
fined to black hole regions. The second, strong cos-          side of his equations, fine-tuned so as to allow for
mic censorship, says roughly that for generic admis-         such a solution. The constant Λ is known as the cos-
sible initial data, incompleteness of the solution is        mological constant. The expansion of the universe is
always associated with a local obstruction to extend-        now considered to be an observational fact, beginning
ability, such as the blow-up of curvature. The latter con-   with the fundamental discoveries of Hubble. Expand-
jecture would ensure that the unique solution of the         ing universes can be modeled to a first approxima-
initial value problem is the only classical space-time       tion by so-called Friedmann–Lemaitre solutions to the
that can arise from the data. That is to say, it would       Einstein–Euler system, with various values of Λ. In the
imply that classical determinism holds for the Einstein      past direction, these solutions are singular: this singu-
equations.                                                   lar behavior is often given the suggestive name “the big
   Both conjectures are false if we drop the assumption      bang.”
that the initial data are generic, and this is one rea-
son for their difficulty. Indeed, Christodoulou has con-       4.5   Future Developments
structed spherically symmetric solutions of the cou-
                                                             The plethora of exact solutions of the Einstein equa-
pled Einstein-scalar field system (arising from regular
                                                             tions gives us a taste of what the qualitative behavior
initial data) that are geodesically incomplete but do not
                                                             of more general solutions may be. But a true qualita-
contain black hole regions. Such space-times are said to
                                                             tive understanding of the nature of general solutions
contain naked singularities.
                                                             has been achieved only in a neighborhood of the very
   Naked singularities are easy to construct if one does
not require that they arise from the collapse of regu-
lar initial data. An example is the Schwarzschild metric       1. One can study “Newtonian cosmology” by modifying the foun-
                                                             dations of the Newtonian theory so as to describe the theory with a
(22) for m < 0. This metric, however, does not admit a       nonmetric connection on, say, T3 \times R. But this step is of course inspired
complete asymptotically flat Cauchy hypersurface. This        by general relativity (see section 3.5).

