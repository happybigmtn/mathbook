# Hilbert Spaces

III.37.   Hilbert Spaces

point of the energy functional E[U]. This heat equation     as t tends to 0. The left-hand side of the identity is the
is used to establish the existence of harmonic maps
and to construct a continuous deformation of a given
map Φ(0, ·) to a harmonic map Φ(+. nfty, ·). The curva-
ture assumption on the target manifold N is responsi-

ble for the crucial monotonicity properties of the har-     where p(t, x, y) is such that any solution of the heat
monic map heat flow, which come to light through the
use of the energy estimates.
   An even more spectacular application of a defor-
mation principle of this kind appears in the three-
dimensional ricci flow [III.78](/part-03/ricci-flow)

This is a quasilinear heat evolution of a family of met-
rics gij (t) on a given manifold M. In this case the
flow is not necessarily regular; nonetheless, it can be
extended as a flow with “surgeries” in such a way that
the structure of the surgeries and the long-term behav-
ior of the flow can be precisely analyzed. This analy-
sis shows in particular that any three-dimensional sim-
ply connected manifold is diffeomorphic to a three-
dimensional sphere, which gives the proof of the
Poincaré conjecture.
   The long-term behavior of the heat equation is also
important in the analysis of reaction–diffusion sys-
tems and associated biological phenomena. This was
suggested already in the work of turing [VI.94](/part-06/alan-turing-19121954) in
his attempt to understand morphogenesis (the for-
mation of inhomogeneous patterns such as animal-
coat patterns from a nearly homogeneous initial state)
by means of exponential instabilities in the reaction–
diffusion equations
    ∂

    ∂t
   These examples emphasize the long-term behavior of
the heat equation, and in particular the tendency of its    The theory of vector spaces [I.3 §2.3](/part-01/fundamental-definitions) and linear
solutions to converge to an equilibrium, or alternatively   maps [I.3 §4.2](/part-01/fundamental-definitions) underpins a large part of mathematics.
to develop exponential instabilities. However, it turns     However, angles cannot be defined using vector space
out that the short-term behavior of the heat equation
on a manifold M is of the utmost importance in connec-
tion with the geometry and topology of M. This connec-
tion is twofold: first, one seeks to establish a relation-   the notion of angle to make sense.
ship between the spectrum of ΔM and the geometry of
M; second, one can use an analysis of the short-term
behavior to prove index theorems. The former aspect,
in the context of planar domains, is captured by Marc
Kac’s well-known question, “Can one hear the shape of
a drum?” For manifolds it begins with the Weyl formula

219
trace of the heat kernel of ΔM . That is,
. nfty

e−t. ambda i = tr e−tΔM =
M
i=0
equation ∂u/∂t − ΔM u = 0 with u(0, x) = u0 (x) is
given by the expression
u(t, x) =        p(t, x, y)u0 (y) dy.
M
The right-hand side of the Weyl identity reflects the
∂
$g_{ij} = -2 \mathrm{Ric}_{ij}(g)$.
∂t
orems can be viewed as a refinement of both sides of
the Weyl identity. The trace on the left-hand side is
replaced by a more complicated “super-trace,” while
the right-hand side involves full asymptotics of the
heat kernel, which requires one to understand subtle
cancelations. The simplest example of this kind is the
Gauss–Bonnet formula
χ(M) = 2π
M
which connects the Euler characteristic of a two-dimen-
sional manifold M and the integral of its scalar curva-
ture. The Euler characteristic χ(M) arises from a linear
combination of traces of the heat flows associated with
the Hodge Laplacian (d + d∗ )2 restricted to the space
of exterior differential 0-forms, 1-forms, and 2-forms.
A proof of a general atiyah–singer index theorem
[V.2](/part-05/the-atiyahsinger-index-theorem) involves heat flows associated with an operator
given by the square of a Dirac operator.
∂
u = μΔu + f (u, v),
∂t
concepts alone, since linear maps do not in general pre-
serve angles. An inner product space can be thought of
as a vector space with just enough extra structure for
The simplest example of an inner product on a vector
space is the standard scalar product defined on Rn , the
space of all real sequences of length n, as follows. If
v = (v1 , . . . , vn ) and w = (w1 , . . . , wn ) are two such
sequences, then their scalar product, denoted v, w,
is the sum v1 w1 + v2 w2 + · · · + vn wn . (For example,
. nfty

e−t. ambda i =
i=0
(4π t)n/2                        2 . imes 4 + (−1) × 4 = 7.)

$220$

Among the properties that the scalar product has are the following two. (i) It is linear in each variable separately. That is, $\lambda u + \mu v, w = \lambda u, w + \mu v, w$  for any three vectors u, v, and w and any two scalars $\lambda$ and μ, and similarly  $u, \lambda v + \mu w = \lambda u, v + \mu u, w$ . (ii) The scalar product  v, v  of any vector v with itself is always a nonnegative real number, and is zero only if v is zero.
In a general vector space, any function  v, w  of pairs of vectors $v$ and $w$ that has these two properties is called an inner product, and a vector space with an inner product is called an inner product space. If the vector space has complex scalars, then instead of (i) one must use the following modification. (i) For any three vectors u, v, and w and any two scalars $\lambda$ and $\mu$, $\lambda u + \mu v, w = \lambda u, w + \mu v, w$ , and   u, . ambda v + \mu w = . ar{. ambda} u, v + . ar{\mu} u, w . That is, the inner product is conjugate-linear in the second variable.
The reason this has anything to do with angles is that in $R^{2}$ and $R^{3}$ the scalar product of two vectors $v$ and $w$ works out as the length of v times the length of w times the cosine of the angle between them. In particular, since a vector v makes an angle of zero with itself, v, v  is the square of the length of v. This gives us a natural way to define length and angle in an inner product space. The length, or norm, of a vector v, denoted  v , is  v, v .
Given two vectors $v$ and $w$, the angle between them is defined by the fact that it lies between $0$ and $\pi ($ or $180$ ◦) and its cosine is v, w    /    v    w . Once length has been defined, we can also talk about distance: the distance d (v , w) between $v$ and $w$ is the length of their difference, or  v  -  w . This definition of distance satisfies the axioms for a metric space [III.56](/part-03/metric-spaces). From the notion of angle, we can say what it is for $v$ and $w$ to be orthogonal to each other: this simply means that  v, w  $= 0$ .
The usefulness of inner product spaces goes far beyond their ability to represent the geometry of twoand three-dimensional space. Where they really come into their own is if they are infinite dimensional. Then it becomes convenient if they satisfy the additional property of completeness, which is briefly discussed at the end of [III.62](/part-03/normed-spaces-and-banach-spaces). A complete inner product space is called a Hilbert space. Two important examples of Hilbert spaces are the following.

III. Mathematical Concepts

(i)   2 is the natural infinite-dimensional generalization of R n with the standard scalar product. It is the set of all sequences ($a^{1}$ , $a^{2}$ , $a^{3}$ , . . .) such that the infinite sum $|a^{1}|^{2} + |a^{2}|^{2} + |a^{3}|^{2} +$ · · · converges. The inner product of $(a^{1}$ , $a^{2}$ , $a^{3}$ , . . .) and $(b^{1}$ , $b^{2}$ , $b^{3}$ , . . .) is $a^{1}b^{1} + a^{2}b^{2} + a^{3}b^{3} +$ · · · (which can be shown to converge by the cauchyschwarz inequality [V.19](/part-05/inequalities)).
( $ii) L^{2}$ [0 , 2 π ] is the set of all functions f defined on the interval [0 , 2 π ] of all real numbers between $02\pi$

and $2\pi$ , such that the integral ${}^{0} |f(x)|^{2}dx$ makes sense and is finite. The inner product of two functions $f$ and $g$ in $L^{2}$ [0 , 2 π ] is defined to be $2\pi{}^{0}$ f (x) g (x) dx. (For technical reasons, this definition is not quite accurate, as a nonzero function can have norm zero, but this problem can easily be dealt with .) The second of these examples is central to Fourier analysis. A trigonometric function is a function of the form cos (mx) or sin (nx). The inner product of any two different trigonometric functions is zero, so they are all orthogonal.
Even more importantly, the trigonometric functions serve as a coordinate system for the space $L^{2}$ [0 , 2 π ], in that every function f in the space can be represented as an (infinite) linear combination of trigonometric functions. This allows Hilbert spaces to model sound waves: if the function f represents a sound wave, then the trigonometric functions are the pure tones that are its constituent parts. These properties of trigonometric functions illustrate a very important general phenomenon in the theory of Hilbert spaces: that every Hilbert space has an orthonormal basis.
This means a set of vectors e i with the following three properties:

•  $e^{i} = 1$ for every i;

•  $e^{i}$ , $e^{j} = 0$ whenever $i = j;$ and

• every vector v in the space can be expressed as a convergent sum of the form i $\lambda$ i e i . The trigonometric functions do not quite form an orthonormal basis of $L^{2}$ [0 , 2 π ] but suitable multiples of them do. There are many contexts be sides Fourier analysis where one can obtain useful information about a vector by decomposing it in terms of a given orthonormal basis, and many general facts that can be deduced from the existence of such bases. Hilbert spaces (with complex scalars) are also central to quantum mechanics.
The vectors of a Hilbert space can be used to represent possible states of a