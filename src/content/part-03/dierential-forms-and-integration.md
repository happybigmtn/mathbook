# Differential Forms and Integration

III . $16$ .

Differential Forms and Integration

det A, αβ multiplies them by det A det B. It follows that det (AB)  =  det A det B. (The determinant of a product equals the product of the determinants .) (iii) If A is a matrix with determinant $0$ and B is any other matrix, then AB will have determinant $0$ as well, by the multiplicative property just discussed. It follows that AB cannot equal I n , since I n has determinant $1$ . Therefore a matrix with determinant $0$ is not invertible. The converse of this turns out to be true as well: a matrix with nonzero determinant is invertible.
Thus, the determinant gives us a way of finding out whether a matrix can be inverted. III . $16$ Differential Forms and

Integration

Terence Tao

It goes with out saying that integration is one of the fundamental concepts of single-variable calculus. However, there are in fact three concepts of integration that appear in the subject: the indefinite integral f (also known as the antiderivative), the unsigned definite integral [a , b] f (x) dx (which one would use to find the area under a curve, or the mass of a one-dimensional object of varying density), and the signed definite inteb gral a f (x) dx (which one would use, for instance, to compute the work required to move a particle from a to b).
For simplicity we shall restrict our attention here to functions f : R $\to$ R that are continuous on the entire real line (and similarly, when we come to differential forms, we shall discuss only forms that are continuous on the entire domain). We shall also informally use terminology such as “infinitesimal” in order to avoid having to discuss the (routine) “epsilon-delta” analytical issues that one must resolve in order to make these integration concepts fully rigorous. These three concepts of integration are of course closely related to each other in single-variable calculus;
indeed, the fundamental theorem of calculus b [I.3](/part-01/fundamental-definitions) relates the signed definite integral a  f(x)dx to any one of the indefinite integrals $F = f$ by the formula b f (x) $dx = F$ (b) - F (a), (1) a while the signed and unsigned integrals are related by the simple identity b a $f(x)dx = -f(x)dx =$ f (x) dx, (2) a b [a , b] which is valid whenever a $\le$ b. $175$ When one moves from single-variable calculus to several-variable calculus, though, these three concepts begin to diverge significantly from each other.
The indefinite integral generalizes to the notion of a solution to a differential equation, or to an integral of a connection, vector field [IV.6](/part-04/algebraic-topology), or bundle [IV.6](/part-04/algebraic-topology). The unsigned definite integral generalizes to the lebesgue integral [III.55](/part-03/measures), or more generally to integration on a measure space. Finally, the signed definite integral generalizes to the integration of forms, which will be our focus here.
While these three concepts are still related to each other, they are not as interchangeable as they are in the single-variable setting. The integration-of forms concept is of fundamental importance in differential topology, geometry, and physics, and also yields one of the most important examples of cohomology [IV.6](/part-04/algebraic-topology), namely de Rham cohomology, which (roughly speaking) measures the extent to which the fundamental theorem of calculus fails in higher dimensions and on general manifolds.
To provide some motivation for the concept, let us informally revisit one of the basic applications of the signed definite integral from physics, namely computing the amount of work required to move a one dimensional particle from point a to point b in the presence of an external field.
(For example, one might be moving a charged particle in an electric field .) At the infinitesimal level, the amount of work required to move a particle from a point x i $\in$ R to a nearby point $x^{i} + {}^{1} \inR$ is (up to a small error) proportional to the displacement $\Delta x^{i} = x^{i} + {}^{1} - x^{i}$ , with the constant of proportionality f (x i) depending on the initial location x i of the particle. Thus, the total work required for this is approximately f (x i) $\Delta$ x i .
Note that we do not require $x^{i} + {}^{1}$ to be to the right of $x^{i}$ , so the displacement $\Delta x^{i}($ or the infinitesimal work f (x i) $\Delta$ x i) may well be negative. To return to the non infinitesimal problem of computing the work required to move from a to b, we arbitrarily select a discrete path $x^{0} = a,x^{1}$ , $x^{2}$ , . . . , $x^{n} = b$ from a to b, and approximate the work as $n - 1$ b $f(x)dx\approx$ f (x i) $\Delta$ x i . (3) a $i = 0$ Again, we do not require x i $+ {}^{1}$ to be to the right of x i ; it is quite possible for the path to “backtrack” repeatedly:
for instance, one might have $x^{i} < x^{i} + {}^{1} > x^{i} + {}^{2}$ for some i. However, it turns out that the effect of such backtracking eventually cancels itself out; regard less of what path we choose, the expression ( $3$ ) above converges as the maximum step size tends to zero, and the

176

limit is the signed definite integral
provided only that the total length i=0 |Δxi | of the
path (which controls the amount of backtracking in-
volved) stays bounded. In particular, in the case when
a = b, so that all paths are closed (i.e., x0 = xn ), we see
that the signed definite integral is zero:
  From this in formal definition of the signed definite
integral it is obvious that we have the concatenation
formula

regard less of the relative position of the real numbers
a, b, and c. In particular (setting a = c and using (5))
we conclude that

Thus, if we reverse a path from a to b to form
a path from b to a, then the sign of the integral
changes. This contrasts with the unsigned definite inte-
gral [a, b] f (x) dx, since the set [a, b] of numbers
between a and b is exactly the same as the set of num-
bers between b and a. Thus we see that paths are not
quite the same as sets: they carry an orientation which
can be reversed, where as sets do not.
  Now let us move from one-dimensional integration
to higher-dimensional integration: that is, from single-
variable calculus to several-variable calculus. It turns
out that there are two objects whose dimensions may
increase: the “ambient space,”1 which will now be Rn
instead of R, and the path, which will now become an
oriented k-dimensional manifold S, over which the inte-
gration will take place. For example, if n = 3 and k = 2,
then one is integrating over a surface that lives in R3 .
  Let us begin with the case n ⩾ 1 and k = 1. Here, we
will be integrating over a continuously differentiable
path (or oriented rectifiable curve) γ in Rn starting and
ending at points a and b, respectively. (These points
may or may not be distinct, depending on whether the
path is open or closed.) From a physical point of view,
we are still computing the work required to move from
a to b, but now we are moving in several dimensions

  1. We will start with integration on Euclidean spaces Rn for sim-
plicity, although the true power of the integration-of-forms concept is
much more apparent when we integrate on more general spaces, such
as abstract n-dimensional manifolds.

III. Mathematical Concepts
instead of one. In the one-dimensional case, we did not
b                                          need to specify exactly which path we used to get from
f (x) dx,                       (4)    a to b, because all backtracking canceled itself out.
a
n−1                     However, in higher dimensions, the exact choice of the
path γ becomes important.
Formally, a path from a to b can be described (or
parametrized) as a continuously differentiable function
γ from the unit interval [0, 1] to Rn such that γ(0) =
a                                              a and γ(1) = b. For instance, the line segment from
f (x) dx = 0.                       (5)    a to b can be parametrized as γ(t) = (1 − t)a + tb.
a
This segment also has many other parametrizations,
such as γ̃(t) = (1 − t 2 )a + t 2 b; however, as in the one-
dimensional case, the exact choice of parametrization
c
f (x) dx =
a
from b to a is a genuinely different path; the integral
along −γ will turn out to be the negative of the integral
along γ.
b
f (x) dx = −          f (x) dx.                    approximate the continuous path γ by a discrete path
a
x0 = γ(t0 ), x1 = γ(t1 ), x2 = γ(t2 ), . . . , xn = γ(tn ),
where γ(t0 ) = a and γ(tn ) = b. Again, we allow some
backtracking: ti+1 is not necessarily larger than ti . The
displacement Δxi = xi+1 − xi ∈ Rn from xi to xi+1 is
now a vector rather than a scalar. (Indeed, with an eye
on the generalization to manifolds, one should think
of Δxi as an infinitesimal tangent vector to the ambi-
ent space Rn at the point xi .) In the one-dimensional
case, we converted the scalar displacement Δxi into
a new number f (xi )Δxi , which was linearly related
to the original displacement by a proportionality con-
stant f (xi ) that depended on the position xi . In higher
dimensions, we again have a linear dependence, but
this time, since the displacement is a vector, we must
replace the simple constant of proportionality by a lin-
ear transformation ωxi from Rn to R. Thus, ωxi (Δxi )
represents the infinitesimal “work” required to move
from xi to xi+1 . In technical terms, ωxi is a linear func-
tional on the space of tangent vectors at xi , and is thus
a cotangent vector at xi . By analogy with (3), the net
work γ ω required to move from a to b along the path
γ is approximated by

n−1
ω≈         ωxi (Δxi ).            (7)
γ
i=0
As in the one-dimensional case, one can show that
the right-hand side of (7) converges if the maximum
step size sup0⩽i⩽n−1 |Δxi | of the path converges to
n−1
zero and the total length i=0 |Δxi | of the path stays

III . $16$ .

Differential Forms and Integration

bounded. The limit is written as γ ω. (Recall that we are restricting our attention to continuous functions. The existence of this limit uses the continuity of ω .) The object ω, which continuously assign$s^{2}$ a cotangent vector to each point in R n , is called $a_{1}$ - form , and ( $7$ ) leads to a recipe for integrating any $1$ - form ω on a path γ. That is, to shift the emphasis slightly, it allows us to integrate the path γ “against” the $1$ - form ω.
Indeed, it is useful to think of this integration as a binary operation (similar in some ways to the dot product) that takes the curve γ and the form ω as inputs, and returns a scalar γ ω as output. There is in fact a “duality” between curves and forms; compare, for instance, the identity ( $ω^{1} + ω^{2}) =ω^{1} +ω^{2}$ ,

γ

γ

γ

which expresses (part of) the fundamental fact that integration of forms is a linear operation, with the identity

$ω =ω +$

ω,

$γ^{1} + γ^{2}γ^{1}γ^{2}$

which generalizes (6) whenever the initial point of $γ^{2}$ is the final point of $γ^{1}$ , where $γ^{1} + γ^{2}$ is the concatenation of $γ^{1}$ and $γ^{2}$ . 3 Recall that if f is a differentiable function from R n to R , then its derivative at a point x is a linear map from R n to R (see [I.3](/part-01/fundamental-definitions)). If f is continuously differentiable, then this linear map depends continuously on x, and can therefore be thought of as $a_{1}$ - form , which we denote by df , writing df x for the derivative at x.
This $1$ - form can be characterized as the unique $1$ - form such that one has the approximation

$f(x + v)\approxf(v) + df^{x}(v)$

for all infinitesimal v. (More rigorously, the condition is that $|f(x + v) - f(v) - df^{x}(v)|/|v| \to 0$ as $v \to 0$ .) The fundamental theorem of calculus ( $1$ ) now generalizes to

$df = f(b) -$f( a )(8) γ whenever γ is any oriented curve from a point a to a point b. In particular, if γ is closed, then γ df $= 0$ . Note that in order to interpret the left-hand side of the above equation, we are regarding it as a particular example of $2$ . More precisely, one can think of ω as a section of the cotangent bundle. $3$ . This duality is best understood using the abstract, and much more general, formalism of homology and cohomology.
In particular, one can remove the requirement that γ 2 begins where γ 1 leaves off by generalizing the notion of an integral to cover not just integration on paths, but also integration on formal sums or differences of paths. This makes the duality between curves and forms more symmetric. $177$ an integral of the form γ ω: in this case, ω happens to be the form df . Note also that, with this interpretation, df has an independent meaning (it is $a_{1}$ - form) even if it does not appear under an integral sign.
$A_{1}$ - form whose integral against every sufficiently smal$l^{4}$ closed curve vanishes is called closed, while $a_{1}$ - form that can be written as df for some continuously differentiable function is called exact. Thus, the fundamental theorem implies that every exact form is closed. This turns out to be a general fact, valid for all manifolds. Is the converse true: that is, is every closed form exact?
If the domain is a Euclidean space, or indeed any other simply connected manifold, then the answer is yes (this is a special case of the Poincaré lemma), but it is not true for general domains. In modern terminology, this demonstrates that the de Rham cohomology of such domains can be nontrivial. As we have just seen, $a_{1}$ - form can be thought of as an object ω that associates with each path γ a scalar, which we denote by γ ω. Of course, ω is not just any old function from paths to scalars:
it must satisfy the concatenation and reversing rules discussed earlier, and this, together with our continuity assumptions, more or less forces it to be associated with some kind of continuously varying linear function that can be used, in combination with γ, to define an integral. Now let us see if we can generalize this basic idea from paths to k-dimensional sets with $k > 1$ . For simplicity we shall stick to the two-dimensional case, that is, to integration of forms on (oriented) surfaces in R n , since this already illustrates many features of the general case.
Physically, such integrals arise when one is computing a flux of some field (e . g . , a magnetic field) across a surface. We parametrized one-dimensional oriented curves as continuously differentiable functions γ from the interval [0 , 1] to R n . It is thus natural to parametrize two-dimensional oriented surfaces as continuously differentiable functions φ defined on the unit square [0 , 1 ]2 .
This does not in fact cover all possible surfaces one wishes to integrate over, but it turns out that one can cut up more general surfaces into pieces that can be parametrized using “nice” domains such as [0 , 1 ]2 . In the one-dimensional case, we cut up the oriented interval [0 , 1 ] into infinitesimal oriented intervals from $t^{i}$ to $t^{i} + {}^{1} = t^{i} + \Delta t,$ which led to infinitesimal curves from $x^{i} = γ(t^{i})$ to $x^{i} + {}^{1} = γ(t^{i} + {}^{1}) = x^{i} + \Delta x^{i}$ . Note that $4$ .
The precise condition needed is that the curve should be contractible, which means that it can be continuously shrunk down to a point.

$178\Delta x^{i}$ and $\Delta t$ are related by the approximation $\Delta x^{i} \approx$ γ (t i) $\Delta$ t i . In the two-dimensional case, we will cut up the unit square [0 , 1 ]2 into infinitesimal squares in an obvious way. 5 A typical one of these will have corners of the form $(t^{1}$ , $t^{2})$ , $(t^{1} + \Delta t,t^{2})$ , $(t^{1}$ , $t^{2} + \Delta t)$ , $(t^{1} + \Delta t,t^{2} + \Delta t)$ .
The surface described by φ can then be partitioned into regions, with corners φ ($t^{1}$ , $t^{2}$ ), $φ(t^{1} + \Delta t$ , $t^{2})$ , $φ(t^{1}$ , $t^{2} + \Delta t)$ , $φ(t^{1} + \Delta t$ , $t^{2} + \Delta t)$ , each of which carries an orientation.
Since φ is differentiable, it is approximately linear at small distance scales, so this region is approximately an oriented parallelogram in $R^{n}$ with corners $x, x + \Delta^{1}x, x + \Delta^{2}x, x + \Delta^{1}x +\Delta^{2}x,$ where $x = φ(t^{1}$ , $t^{2})$ and $\Delta^{1}x$ and $\Delta^{2}x$ are the infinitesimal vectors ∂φ ∂φ $\Delta^{1}x =\Delta^{2}x =(t^{1}$ , $t^{2})\Delta t$ , $(t^{1}$ , $t^{2})\Delta t$ . ∂$t_{1}$ ∂$t_{2}$ Let us refer to this object as the infinitesimal parallelogram with dimensions $\Delta^{1}x$ ∧ $\Delta^{2}x$ and base point x.
For now, we will think of the symbol “∧” as a mere notational convenience and not try to interpret it. In order to integrate in a manner analogous with integration on curves, we now need some sort of functional ω x at this base point that depends continuously on x. This functional should take the above infinitesimal parallelogram and return an infinitesimal number $ω^{x}(\Delta^{1}x$ ∧ $\Delta^{2}x)$ , which one can think of as the amount of “flux” passing through this parallelogram. As in the one-dimensional case, we expect ω x to have certain properties.
For instance, if you double $\Delta^{1}x,$ you double one of the sides of the infinitesimal parallelogram, so (by the continuity of ω) the “flux” passing through the parallelogram should double. More generally, $ω^{x}(\Delta^{1}x$ ∧ $\Delta^{2}x)$ should depend linearly on each of $\Delta^{1}x$ and $\Delta^{2}x:$ in other words, it is bilinear. (This generalizes the linear dependence in the one-dimensional case .) Another important property is that $ω^{x}(\Delta^{2}x$ ∧ $\Delta^{1}x) = - ω^{x}(\Delta^{1}x$ ∧ $\Delta^{2}x)$ . (9) That is, the bilinear form ω x is antisymmetric.
Again, this has an intuitive explanation: the parallelogram represented by $\Delta^{2}x$ ∧ $\Delta^{1}x$ is the same as that represented by $\Delta^{1}x$ ∧ $\Delta^{2}x$ except that it has had its orientation reversed, so the “flux” now counts negatively where it used to count positively, and vice versa. Another way of seeing this is to note that if $\Delta^{1}x = \Delta^{2}x,$ then the parallelogram is degenerate and there should be no flux. $5$ . One could also use infinitesimal oriented rectangles, parallelograms, triangles, etc.; this leads to an equivalent concept of the integral. III.
Mathematical Concepts Antisymmetry follows from this and the bilinearity. $A_{2}$ - form ω is a continuous assignment of a functional ω x with these properties to each point x. If ω$is$ a2$- \text{form and} φ : [0 , 1 ]^{2} \to R^{n}$ is a continuously differentiable function, we can now define the integral φ ω of ω “against” φ (or , more precisely, the integral against the image under φ of the oriented square [0 , 1 ]2) by the approximation ω. pprox(ωx)i(. elta x1 , i ∧ $\Delta x^{2}$ ,  i) , (10) φ i where the image of φ is (approximately) partitioned into parallelograms of
dimensions $\Delta x^{1}$ , i ∧ $\Delta x^{2}$ , i based at points x i . We do not need to decide what order these parallelograms should be arranged in, because addition is both commutative and associative. One can show that the right-hand side of ( $10$ ) converges to a unique limit as one makes the partition of parallelograms “increasingly fine,” though we will not make this precise here. We have thus shown how to integrate $2$ - forms against oriented two-dimensional surfaces.
More generally, one can define the concept of a k-form on an n-dimensional manifold (such as $R^{n})$ for any $0 \le k \le n$ and integrate this against an oriented k-dimensional surface in that manifold. For instance, $a_{0}$ - form on a manifold X is the same thing as a scalar function f : X $\to$ R , whose integral on a positively oriented point x (which is zero dimensional) is f (x), and on a negatively oriented point x is - f (x).
A k-form tells us how to assign a value to an infinitesimal k-dimensional parallelepiped with dimensions $\Delta x^{1}$ ∧· · $\cdot∧\Delta x^{k}$ , and hence to a portion of k-dimensional “surface,” in much the same way as we have seen when $k = 2$ . By convention, if $k \neq k$ , the integral of a k-dimensional form on a kdimensional surface is understood to be zero. We refer to $0$ - forms , $1$ - forms , $2$ - forms , etc. (and formal sums and differences there of), collectively as differential forms. There are three fundamental operations that one can perform on scalar functions:
addition (f , g) $\to$ f + g, pointwise product (f , g) $\to$ f g, and differentiation f $\to$ df , although the last of these is not especially useful unless f is continuously differentiable. These operations have various relationships with each other. For instance, the product is distributive over addition, $f(g + h) = fg + fh,$ and differentiation is a derivation with respect to the product: d (f g) = (df) g $+$ f (dg).

III . $16$ .

Differential Forms and Integration

It turns out that one can generalize all three of these operations to differential forms. Adding a pair of forms is easy: if ω and η are two k-forms and φ : [0 , 1 ]k \to  Rn is a continuously differentiable function, then φ (ω + η) is defined to be φ ω + φ η. One multiplies forms using the so-called wedge product. If ω is a k-form and η is an l-form, then ω ∧ η is a (k + l) - form .
Roughly speaking, given a (k + l) - dimensional infinitesimal parallelepiped with base point x and dimensions $\Delta x^{1}$ ∧ · · · ∧ $\Delta x^{k} + l$ , one evaluates ω and η at the parallelepipeds with base point x and dimensions $\Delta x^{1}$ ∧ · · · ∧ $\Delta x^{k}$ and $\Delta x^{k} + {}^{1}$ ∧ · · · ∧ $\Delta x^{k} + l$ , respectively, and multiplies the results together. As for differentiation, if ω is a continuously differentiable k-form, then its derivative dω is a (k $+ 1$ ) - form that measures something like the “rate of change” of ω.
To see what this might mean, and in particular to see why dω is a (k $+ 1$ ) - form , let us think how we might answer a question of the following kind. We are given a spherical surface in $R^{3}$ and a flow, and we would like to know the net flux out of the surface: that is, the difference between the amount of flux coming out and the amount going in. One way to do this would be to approximate the surface of the sphere by a union of tiny parallelograms, to measure the flux through each one, and to take the sum of all these fluxes.
Another would be to approximate the solid sphere by a union of tiny parallelepipeds, to measure the net flux out of each of these, and to add up the results. If a parallelepiped is small enough, then we can closely approximate the net flux out of it by looking at the difference, for each pair of opposite faces, between the amount coming out of the parallelepiped through one and the amount going into it through the other, and this will depend on the rate of change of the $2$ - form .
The process of summing up the net fluxes out of the parallelepipeds is more rigorously described as integrating $a_{3}$ - form over the solid sphere. In this way, one can see that it is natural to expect that information about how $a_{2}$ - form varies should be encapsulated in $a3$ - form . The exact construction of these operations requires a little bit of algebra and is omitted here. However, we remark that they obey similar laws to their scalar counterparts, except that there are some sign changes that are ultimately due to the antisymmetry ( $9$ ).
For instance, if ω is a k-form and η is an l-form, the commutative law for multiplication becomes ω ∧ $η = ( - 1)kl$ η ∧ ω, $179$ basically because kl swaps are needed to interchange k dimensions with l dimensions; and the derivation rule for differentiation becomes d (ω ∧ $η) = (dω)$ ∧ η + ( - 1)kω ∧ ( d η ). Another rule is that the differentiation operator d is nilpotent: $d(dω) = 0$ . (11) This may seem rather unintuitive, but it is fundamentally important. To see why it might be expected, let us think about differentiating $a_{1}$ - form twice.
The original $1$ - form associates a scalar with each small line segment. Its derivative is $a_{2}$ - form that associates a scalar with each small parallelogram. This scalar essentially measures the sum of the scalars given by the $1$ - form as you go around the four edges of the parallelogram, though to get a sensible answer when you pass to the limit you have to divide by the area of the parallelogram. If we now repeat the process, we are looking at a sum of the six scalars associated with the six faces of a parallelepiped.
But each of these scalars in turn comes from a sum of the scalars associated with the four directed edges around the corresponding face, and each edge is therefore counted twice (as it belongs to two faces), once in each direction. Therefore, the contributions from each edge cancel and the sum of all contributions is zero.
The description given earlier of the relationship between integrating $a_{2}$ - form over the surface of a sphere and integrating its derivative over the solid sphere can be thought of as a generalization of the fundamental theorem of calculus, and can itself be generalized considerably: Stokes’s theorem is the assertion that $dω =$ ω (12) S ∂S for any oriented manifold S and form ω, where ∂S is the oriented boundary of S (which we will not define here). Indeed one can view this theorem as a definition of the derivative operation ω $\to$ dω;
thus, differentiation is the adjoint of the boundary operation. (For instance, the identity ( $11$ ) is dual to the geometric observation that the boundary ∂S of an oriented manifold itself has no boundary: ∂ (∂ S) = ∅ .) As a particular case of Stokes’s theorem, we see that $Sdω = 0$ whenever $S$ is a closed manifold, i.e., one with no boundary. This observation lets one extend the notions of closed and exact forms to general differential forms, which (together with ( $11$ )) allows one to fully set up de Rham cohomology.
We have already seen that $0$ - forms can be identified with scalar functions. Also, in Euclidean spaces one can