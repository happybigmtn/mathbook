# Trigonometric Functions

III . $92$ .

Trigonometric Functions

we see that LF can be considered as a weighted average of holomorphic [I.3](/part-01/fundamental-definitions) (that is, complex differentiable) functions and this can be used to show that LF is holomorphic. The Laplace transform shares many of the properties of the Fourier transform and we can use these, as well as the extensive collection of results on holomorphic functions, whenever we manipulate Laplace transforms.
Many of the deepest results in number theory, such as the prime number theorem [V.26](/part-05/the-prime-number-theorem-and-the-vi34-jnos-bolyai-18021860), are most easily obtained by clever uses of the Laplace transform. The transforms we have discussed all belong to the same family, as is indicated by the fact that they all take convolution to multiplication. The general idea of a transform has been developed in several different directions, generally by concentrating on some aspects of the “classical transforms” and being prepared to lose others.
One of the most important of these new transforms is the Gelfand transform, which gives a concrete representation of the abstract commutative Banach algebras. It is discussed in operator algebras [IV.15](/part-04/operator-algebras). Other integral transforms extend the integral definition of the Fourier transform by setting up a correspondence

$\infty F(s)K(\lambda - s)dsF(t)$ ← $\to- \infty$

or, more generally,

$\infty F(t)$ ← $\to$

F (s) κ (s , $\lambda$ ) ds.

$- \infty$

Another interesting transform is the Radon or xray transform. We shall consider the three-dimensional case and talk very informally. Suppose we shine a beam of radiation through a body in direction u. Suppose also that f is a function defined on $R^{3}$ that represents how much radiation is absorbed by different parts of the body. What we can measure is the amount of radiation absorbed along any given straight line. We might present some of this information in the form of a two dimensional image, which could represent the amount absorbed by all lines in the direction u.
In general, we can use f to define a new function

$\infty$

f (tu  +  v) dt,

(Rf) (u , v)  = 

$- \infty$

which tells us how much radiation is absorbed along the line in direction u that goes through a vector v perpendicular to u. The tomography problem deals with the recovery of f from Rf . Because the idea of a transform has been developed in so many different directions, any attempt to

$307$

give a general definition results in something too general to be useful. The most that we can say about the various transforms is that they present a more or less distant analogy to the classical Fourier transforms and that this analogy has been found useful by those who developed them. (See also the fourier transform [III.27](/part-03/the-fourier-transform), spherical harmonics [III.87](/part-03/spherical-harmonics), representation theory [IV.9](/part-04/representation-theory), and wavelets and applications [VII.3](/part-07/wavelets-and-applications).) III .
$92$ Trigonometric Functions Ben Green The basic trigonometric functions “sin” and “cos,” as well as the four related functions “tan,” “cot,” “sec,” and “cosec,” will probably be familiar to most readers in some form. One way to define the sine function sin : $R \to$ [− 1 , 1 ] is as follows. In almost all branches of mathematics one measures angles using radians, which are defined in terms of arclength: to say that the angle ∠ AOB in figure $1$ is $\theta$ radians is to say that the arc AB of the circle has length $\theta.$ This definition makes sense when $0 \le \theta < 2\pi$ .
One then defines sin $\theta$ to be the length PB, where P is the foot of the perpendicular from B to OA. It is very important that this length be taken with the correct sign. If $0 < \theta < \pi$ then we take the positive sign, where as if $\pi < \theta < 2\pi$ we take the negative sign. In other words, sin $\theta$ is the y-coordinate of the point B. The sine function is, at the moment, defined on the interval [0 , 2 π).
To define it on all of R one simply insists that it be periodic with period $2\pi ($ that is, that it satisfies the relation sin $\theta =$ sin $(2\pi n + \theta)$ for any integer n). There is one problem with our definition of sine. What do we mean by the length of the arc AB? The only really satisfactory way of understanding this is to use calculus. The equation of the unit circle is √ $y = 1 - x^{2}$ , at least if (x ,  y) lies in the upper-right quadrant. (Otherwise one must be careful about sign .) The formula for the arc-length of a curve $y = f$ (x) between $y = a$ and $y = b$ is b

1 + (dx/dy)2 dy. S = a

(This may be thought of as a definition, though the motivation   for the definition comes #  from pictures .) For the circle, 1 + (dx/dy)2 = 11 - y2 . Since the arclength of the circle between the points P  =  (x , sin $\theta$ )

308

and A = (1, 0) is θ, this gives the formula
for 0 ⩽ θ ⩽ π /2 (we do not care about what x is). This
can be regarded as giving a precise, even if implicit,
definition of sin θ for 0 ⩽ θ ⩽ π /2.
  As with many of the most natural concepts in mathe-
matics, sin may be defined in a multitude of equivalent
ways. Another definition (whose equivalence to the first
one is not obvious) is

This infinite series converges for all real z. The result-
ing definition has a distinct advantage over (1), in that
it also makes sense when z is an arbitrary complex
number (that is why we replaced the letter θ by z). It
therefore allows us to extend sin to a holomorphic
function [I.3 §5.6](/part-01/fundamental-definitions) on C.
   If the sine function is analytic, then what is its deriva-
tive? The answer is the cosine function cos z, which may
be defined in much the same way as sin: either geo-
metric ally or using a power series. The power series
is

which may be obtained by differentiating the series for
sin term by term (naturally, this is an operation that
must be properly justified, but it can be).
  If one differentiates again, one gets the formula
(d2 /dz2 ) sin z = − sin z. In fact, it is possible to define

III. Mathematical Concepts
y                                  sin : R → [−1, 1] as the unique solution y to the differ-
(0,1)                                       ential equation y = −y that also satisfies the initial
value conditions y(0) = 0, y (0) = 1. This is a very
sensible way of proving that the two definitions (1) and
B                 (2) are equivalent (it is a good calculus exercise to prove
that sin = − sin using (1)).
Ultimately, the power series expansions (2) and (3)
θ            A             display the most important side of sin and cos, which is
(−1,0)
z2     z3
ez = 1 + z + +      + ··· .
2!     3!
Comparing this with (2) and (3), one gets the famous
formula
(0,−1)                                                       eiθ = cos θ + i sin θ.
The exponential functions θ → einθ are characters, that
Figure 1 Interpreting trigonometric
is, homomorphisms [I.3 §4.1](/part-01/fundamental-definitions) from R/2π Z to the unit
functions geometrically.
circle S 1 (which form groups under addition mod 2π
and multiplication, respectively). This makes them the
natural objects with which to do a fourier analysis
sin θ
dy                                  [III.27](/part-03/the-fourier-transform) of 2π -periodic functions on R. Because sin and
                 =θ               (1)   cos are real-valued, it is convenient to try to decompose
0           1 − y2
such a function f (x) not into exponentials, but as a
series
a0 + a1 cos x + b1 sin x + a2 cos 2 x + b2 sin 2 x + · · · .
Under favorable circumstances (if the function f is suf-
fic ient ly smooth, say) one can recover the coefficients
ai , bi by using orthogonality relations such as
1    2π
3         5        7
cos nx cos mx dx
z    z    z                                 π    0
sin z = z −
3!   5!   7!                                                       ⎨0 for all n, m ⩾ 0, n ≠ m,
=
⎩1 n = m,
and
1 2π
cos nx sin mx dx = 0       for all n, m ⩾ 0.
π 0
Thus, for example, we have
1 2π
an =          f (x) cos nx dx.
π 0
Such decompositions into trigonometric functions ulti-
mately under lie devices like compact disk players and
mobile phones.
z2   z4     z6                                   Let us conclude by remarking that there is a whole
cos(z) = 1 −
2!    4!    6!                                zoo of formulas concerning sin, cos, and the other four
trigonometric functions (which we have not discussed
here), as well as integrals involving these functions. It is
these formulas that make the trigonometric functions
an indispensable tool in classical Euclidean geometry.
There are many further formulas in that setting. To