# The Heat Equation

$216$

of using that Hamiltonian to describe a physical system. For instance, in classical physics, the Hamiltonian is a function (q , p)   $\to$ H (q , p) of the positions q and moment a p of the system, which then evolve according to Hamilton’s equations: dq ∂H dp ∂H

 = 

$= -$

, / dt

∂p

dt

∂q

In (nonrelativistic) quantum mechanics, the Hamiltonian H becomes a linear operator [III.50](/part-03/linear-operators-and-their-properties) (which is often a formal combination of the position operators q and momentum operators p), and the wave function $\psi$ of the system then evolves according to the schrödinger equation [III.83](/part-03/the-schrdinger-equation) : d

$\psi = H\psi.$

i

dt

In statistical mechanics, the Hamiltonian H is a function of the microscopic state (or microstate) of a system, and the probability that a system at a given temperature T will lie in a given microstate is proportional to $e - H/kT$ . And so on and so forth. Many fields of mathematics are closely intertwined with their counterparts in physics, and so it is not surprising that the concept of a Hamiltonian also appears in pure mathematics.
For instance, motivated by classical physics, Hamiltonians (as well as generalizations of Hamiltonians, such as moment maps) play a major role in dynamical systems, differential equations, Lie group theory, and symplectic geometry. Motivated by quantum mechanics, Hamiltonians (as well as generalizations, such as observables or pseudo-differential operators) are similarly prominent in operator algebras, spectral theory, representation theory, differential equations, and microlocal analysis.
Because of their presence in so many areas of physics and mathematics, Hamiltonians are useful for building bridges between seemingly unrelated fields: for instance, between classical mechanics and quantum mechanics, or between symplectic mechanics and operator algebras. The properties of a given Hamiltonian often reveal much about the physical or mathematical objects associated with that Hamiltonian. For example, the symmetries of a Hamiltonian often induce corresponding symmetries in objects described using that Hamiltonian.
While not every interesting feature of a mathematical or physical object can be read off directly from its Hamiltonian, this concept is still fundamental to understanding the properties and behavior of such objects.

III. Mathematical Concepts

See also vertex operator algebras [IV.17](/part-04/vertex-operator-algebras), mirror symmetry [IV . 16 § § 2 . 1 . 3 , 2 . 2 . 1 ] , and symplectic manifolds [III.88](/part-03/symplectic-manifolds). III . $36$ The Heat Equation Igor Rodnianski The heat equation was first proposed by fourier [VI.25](/part-06/jean-baptiste-joseph-fourier-17681830) as a mathematical description of the transfer of heat in solid bodies. Its influence has subsequently been felt in many corners of mathematics:
it provides explanations for such disparate phenomena as the formation of ice (the Stefan problem) , the theory of incompressible viscous fluids (the navierstokes equation [III.23](/part-03/the-euler-and-navierstokes-equations)) , geometric flows (e . g . , curve shortening, and the harmonic-map heat flow problem) , brownian motion [IV.24](/part-04/stochastic-processes) , liquid filtration in porous media (the Hele-Shaw problem) , index theorems (e . g .
, the Gauss-Bonnet-Chern formula), the price of stock options (the black-scholes formula [VII.9](/part-07/the-mathematics-of-money)), and the topology of three-dimensional manifolds (the poincaré conjecture [V.25](/part-05/the-poincar-conjecture)) . But the bright future of the heat equation could have been predicted at its birth: after all, another small event that accompanied it was the creation of fourier analysis [III.27](/part-03/the-fourier-transform). The propagation of heat is based on a simple continuity principle.
The change in the quantity of heat u in a small volume $\Delta V$ over $a$ small interval of time $\Delta t$ is approximately ∂u $\Delta t\Delta V$ , CD ∂t where C is the heat capacity of the substance and D is its density; but it is also given by the amount of heat entering and exiting through $\Delta V$ , which is approximately ∂u $K\Delta t$ , $\partial\Delta V$ ∂n where K is the heat conductivity constant and n is the unit normal to the boundary of $\Delta V$ .
Thus, setting the values of all physical constants to $1$ , dividing through by $\Delta t$ and $\Delta V$ , and letting them tend to zero, we find that the evolution of the amount of heat (that is, the temperature) in a three-dimensional solid $\Omega$ is governed by the following classical heat equation, where u (t , x) is the temperature at time t at the point x = (x , y, z) : ∂  u(t , $x) - \Delta u(t$ , $x) = 0$ . (1) ∂t Here ∂ $2$ ∂ $2$ ∂ $2\Delta = + +22$ ∂$z_{2}$

∂x

∂y

III . $36$ .

The Heat Equation

is the three-dimensional Laplacian; $\Delta u$ is the limit as the diameter of $\Delta V$ tends to zero of the quantity ∂$u_{1}$ / $\Delta V\partial\Delta V$ ∂n

To determine u (t , x), equation ( $1$ ) needs to be complemented by the initial distribution $u^{0}(x) = u(0$ ,  x) and boundary conditions on the solid interface $\partial\Omega.$ For example, for a solid unit cube C with surface maintained at zero temperature, the heat equation is considered as a problem with Dirichlet boundary conditions and, as was proposed by Fourier, u (t , x) can be found by the method of separation of variables by expanding $u^{0}$ (x) into its Fourier series

$\infty u^{0}(x$ , $y,z) =$

C kml sin ( $\pi$ kx)

$k$ , $m$ , $l = 0\times$ sin $(\pi$ my) sin $(\pilz)$ ,

which leads to the solution

. nfty 2222 e - \pi ({}k + m + l)t C kml sin $(\pikx)$ u (t , x, y, z)  = 

$k$ , $m$ , $l = 0\times$ sin $(\pi$ my) sin $(\pilz)$ .

This simple example already illuminates a fundamental property of the heat equation: the tendency of its solutions to converge to an equilibrium state. In this case it reflects a physically intuitive fact that the temperature u (t , x) converges to the constant distribution u ∗ $(x) = C^{000}$ . Propagation of heat in an insulated body corresponds to the choice of the Neumann boundary conditions, in which the normal derivative of u (normal , that is, to the boundary ∂ $\Omega$ ) is set to vanish. Its solutions can be constructed in a similar fashion.
The reason that Fourier analysis is intimately connected with the heat equation is that the trigonometric functions are eigenfunctions [I.3](/part-01/fundamental-definitions) of the Laplacian. A variety of more general heat equations can be obtained if one replaces the Laplacian by a more general linear, self-adjoint [III.50](/part-03/linear-operators-and-their-properties), nonnegative hamiltonian [III.35](/part-03/hamiltonians) H with a discrete set of eigenvalues $\lambda^{n}$ and corresponding eigenfunctions $\psi^{n}$ . That is, one considers the heat flow ∂ $u + Hu = 0$ .
∂t The solution u (t) is given by the formula u (t)  =  $e - tHu^{0}$ , where $e - tH$ is the heat semigroup generated by H, which also takes the more explicit form

. nfty e - (. ambda n)t Cn. sin(x) .

u (t , x)  = 

$n = 0217$

Here the coefficients C n are the Fourier coefficients of $u^{0}$ relative to H: that is, they are the coefficients that

$\infty$

arise when we write $u^{0}$ as $a$ sum $n = {}^{0}C^{n}\psi^{n}$ . (The existence of such a decomposition follows from the spectral theorem [III.50](/part-03/linear-operators-and-their-properties) for self-adjoint operators. In a similar way, heat flows can also be generated by selfadjoint operators with a continuous spectrum .) In particular, the asymptotic behavior of  u(t ,  x)$as$ t \to + . nfty is completely determined by the spectrum of H. Although explicit, representations like this do not provide very good quantitative descriptions of the behavior of the heat equation.
To obtain such descriptions one has to abandon the idea of constructing solutions explicitly and look instead for principles and methods that apply to general classes of solutions while also being sufficiently robust to be useful in the analysis of more complicated heat equations. The first methods of this type are called energy identities. To derive an energy identity, one multiplies the heat equation by a certain quantity, which may depend on the given solution, and integrates by parts.
The simplest two identities of this type are the conservation of total heat of an insulated body, d  u(t , $x)dx = 0$ , $dt \Omega$ and the energy identity, t $u^{2}(t$ , $x)dx + 2|\nablau(s$ , $x)|^{2}dxds\Omega\Omega0u^{2}(0$ , $x)dx. = \Omega$ The second identity already captures a fundamental smoothing property of the heat equation: since all three integrands are nonnegative and the first and third integrals are finite, the average of the mean-square gradient of u is finite, even if the initial mean-square gradient is infinite, and it even decreases to zero with t.
In fact, away from the boundary of $\Omega$ an arbitrary amount of smoothing takes place, and not just on average but at every time $t > 0$ . The second fundamental principle of the heat equation is the global maximum principle u (t , x) max $x\in\Omega$ , $0 \le t \le T\le$ max $u(0$ ,  x) , max u (t , x), $x\in$ ∂ $\Omega$ , $0 \le t \le T$

which tells us the familiar fact that the hottest spot in the body, over all time, is either on its boundary or in the initial distribution. Finally, the diffusive properties of the heat equation in R n are captured by the Harnack inequality for

$218$

nonnegative solutions u. It tells us that

$n/2t1u(t^{2}$ , $x^{2})2e - |x^{2} - x^{1}| /4(t^{2} - t^{1})\geu(t^{1}$ , $x^{1})t2$

when $t^{2} > t^{1}$ . This tells us that if the temperature at $x^{1}$ at time $t^{1}$ takes a certain value, then the temperature at $x^{2}$ at time $t^{2}$ cannot be too much smaller. This form of the Harnack inequality features a very important object in the study of the heat equation, called the heat kernel:

$12e - |x - y| / {}^{4t}$ .

p (t , x, y)  = 

(4. it)n/2

One of its many uses is that it allows one to construct solutions of the heat equation in the whole of space (that is, in R n) from initial data $u^{0}$ , by the formula u (t , x)  =  p (t , x, y) $u^{0}$ (y) dy.

R n

It also shows that after a time t initial point dis√ turbances become distributed in a ball of radius t around the point of the original disturbance. This sort of relation between spatial scales and timescales is the characteristic parabolic scaling of the heat equation. As was shown by Einstein, the heat equation is intimately connected with the diffusion process of Brownian motion. In fact, the mathematical description of Brownian motion is in terms of a random process B t with transitional probability densities given by the heat kernel p (t , x, y).
For the n-dimensional Brownian motion B t x starting at x, the function . qrt{u}(t , $x) = E$ [u 0 (2 B t x)] computed with the help of expectation value E is precisely the solution of the heat equation in R n with initial data $u^{0}$ (x). This connection is the start of a mutually beneficial relationship between the theory of the heat equation and probability. Among the most profitable applications of this relationship is the Feynman-Kac formula . qrt{t} V( 2(Bs)x)ds u0( 2(Bt)x) ,

 u(t , $x) = E$ exp  - 

$0$

which connects Brownian motion with solutions of the heat equation ∂

 u(t , $x) - \Delta u(t$ , $x) + V(x)u(t$ , $x) = 0$ ∂t with initial data $u^{0}$ (x). The three fundamental principles of the heat equation described above are remarkably robust, in the sense that they, or weaker versions of them, hold even for very general variants of the classical equation. For

III. Mathematical Concepts

instance, they can be applied to the question of the continuity of solutions of the heat equation n ∂ ∂ ∂

$u - u = 0$ ,

a ij (x)

∂t

∂x

∂x

i

j

$i$ , $j = 1$

where all that is assumed of the coefficients a ij is that they are bounded and that they satisfy the ellipticity condition $\lambda|ξ|^{2} \le$ i, j $aijξ^{i}ξ^{j} \le Λ|ξ|^{2}$ . One can even look at the equations in “nondivergence form”: n ∂ ∂ ∂ $u = 0$ .

$u -$

a ij (x)

∂t

∂x

i ∂x j

$i$ , $j = 1$

Here, the connection between the heat equation and the corresponding stochastic diffusion process turns out to be particularly helpful. This analysis has led to beautiful applications in the calculus of variations [III.94](/part-03/variational-methods) and in fully nonlinear problems. The same principles also hold for the heat equations on riemannian manifolds [I.3](/part-01/fundamental-definitions). The appropriate analogue of the Laplacian for a manifold M is the Laplace-Beltrami operator $\Delta$ M , and the heat equation for M is ∂ $u - \Delta^{M}u = 0$ .
∂t If the Riemannian metric is g, then in local coordinates $\Delta^{M}$ takes the form n ∂ $1$ ∂ g ij (x) det g (x) $\Delta^{M} =$ . ∂x j det  g(x)i , $j = 1$ ∂$x^{i}$ In this case, a version of the Harnack inequality holds for the heat equation on a manifold that has ricci curvature [III.78](/part-03/ricci-flow) bounded from below. Interest in the heat equations on manifolds is in part motivated by nonlinear geometric flows and attempts to understand their long-term behavior.
One of the earliest geometric flows was the harmonic map flow ∂ $Φ - \Delta^{N}MΦ = 0$ , ∂t which describes a deformation of the map Φ (t , ·) between two compact Riemannian manifolds M and N. The operator $\Delta^{N}$ M is a nonlinear Laplacian that is constructed by projecting $\Delta$ M onto the tangent space of N. This is a gradient flow associated with the energy $1|dU|2^{N}$ ; E[U] = $2 M$ it measures the stretching of the map U between M and N.
Under the assumption that the sectional curvature of N is nonpositive, it can be shown that the harmonic map heat flow is regular and converges, as $t \to + \infty$ , to a harmonic map between M and N, which is a critical