# The Fourier Transform

204                                                                                       III. Mathematical Concepts

“convert convolutions into multiplication.” That is, if          What are the symmetry properties enjoyed by even
we find a suitable way of regarding a and b as func-           and odd functions? A useful way to regard them is as
tions on ZN , then the Fourier transform of a ∗ b is the      follows. We have a group of two transformations of the
function r → â(r )b̂(r ). Therefore, to work out a∗b we     real line: one is the identity map ι : x → x and the
can work out â and b̂, multiply them together for each       other is the reflection ρ : x → −x. Now any trans for-
r , and take the inverse Fourier transform of the result.     mation φ of the real line gives rise to a transforma-
All stages of this calculation are quick, so calculating      tion of the functions defined on the real line: given a
convolutions is quick.                                        function f , the transformed function is the function
   This immediately leads to a quick way of multiply-         g(x) = f (φ(x)). In the case at hand, if φ = ι then the
ing the two polynomials a0 + a1 x + · · · + am x m and        transformed function is just f (x), while if φ = ρ then
b0 +b1 x +· · ·+bn x n together, since the coefficients of      it is f (−x). If f is either even or odd, then both the
the product are given by the sequence c = a ∗ b. If all       transformed functions are scalar multiples of the orig-
the ai are between 0 and 9, it is a quick process to evalu-   inal function f . In particular, when φ = ρ, the trans-
ate the product polynomial at x = 10 (since none of the       formed function is f (x) when f is even (so the scalar
coefficients cr will have many digits), so we also have         multiple is 1) and −f (x) when f is odd (so the scalar
a method of multiplying two n-digit integers together         multiple is −1).
that is far faster than long multiplication. These are           The procedure just described can be thought of as
two of the huge number of applications of the fast            a very simple prototype of the general notion of a
Fourier transform. A more direct source of applications       Fourier transform. Very broadly speaking, a Fourier
occurs in engineering, where one frequently wishes to         transform is a systematic way to decompose “generic”
analyze a signal by looking at its Fourier transform. A       functions into a superposition of “symmetric” func-
very surprising application is to quantum com put a-            tions. These symmetric functions are usually quite
tion [III.74](/part-03/quantum-computation): a famous result of Peter Shor is that one      explicitly defined: for instance, one of the most impor-
can use a quantum computer to factorize large integers        tant examples is a decomposition into the trigono-
very quickly; this algorithm depends in an essential way      metric functions [III.92](/part-03/trigonometric-functions) sin(nx) and cos(nx). They
on the fast Fourier transform, but uses the power of          are also often related to physical concepts such as fre-
quantum computing in an almost miraculous way to              quency or energy. The symmetry will usually be asso-
divide the N log N steps into N lots of log N steps that      ciated with a group [I.3 §2.1](/part-01/fundamental-definitions) G, which is usually Abe-
can be carried out “in parallel.”                             lian. (In the case considered above, it is the two-element
                                                              group.) Indeed, the Fourier transform is a fundamental
III.27 The Fourier Transform                                  tool in the study of groups, and more precisely in the
                                                              representation theory [IV.9](/part-04/representation-theory) of groups, which con-
         Terence Tao
                                                              cerns different ways in which a group can be regarded
Let f be a function from R to R. Typically, there is          as a group of symmetries. It is also related to topics in
not much that one can say about f , but certain func-         linear algebra, such as the representation of a vector as
tions have useful symmetry properties. For instance,          linear combinations of an orthonormal basis [III.37](/part-03/bayesian-analysis),
f is called even if f (−x) = f (x) for every x, and it        or as linear combinations of eigenvectors [I.3 §4.3](/part-01/fundamental-definitions) of
is called odd if f (−x) = −f (x) for every x. Further-        a matrix or linear operator [III.50](/part-03/linear-operators-and-their-properties).
more, every function f can be written as a superposition         For a more complicated example, let us fix a positive
of an even part, fe , and an odd part, fo . For instance,     integer n and let us define a systematic way of decom-
the function f (x) = x 3 + 3 x 2 + 3 x + 1 is neither even      posing functions from C to C, that is, complex-valued
nor odd, but it can be written as fe (x) + fo (x), where      functions defined on the complex plane. If f is such a
fe (x) = 3 x 2 + 1 and fo (x) = x 3 + 3 x. For a general        function and j is an integer between 0 and n − 1, then
function f , the decomposition is unique and is given         we say that f is a harmonic of order j if it has the fol-
by the formulas                                               lowing property. Let ω = e2π i/n , so that ω is a primi-
                                                              tive nth root of 1 (meaning that ωn = 1 but no smaller
               fe (x) = 12 (f (x) + f (−x))
                                                              positive power of ω gives 1). Then f (ωz) = ωj f (z)
and                                                           for every z ∈ C. Notice that if n = 2, then ω = −1, so
                                                              when j = 0 we recover the definition of an even func-
               fo (x) = 12 (f (x) − f (−x)).                  tion and when j = 1 we recover the definition of an odd

III . $27$ .

The Fourier Transform

function. In fact, inspired by this, we can give a general formula for a decomposition of f into harmonics, which again turns out to be unique. If we define

$1n - 1$

f (ω k z) ω  -  jk ,

$f^{j}(z) =nk = 0$

then it is a simple exercise to prove that

$n - 1f(z) =$

f j (z)

$j = 0$

for every z  (  use the fact that $jω - jk = n$ if $k = 0$ and $0$ otherwise), and that f j (ω z)  =  ω j f j (z) for every z. Thus, f can be decomposed as a sum of harmonics. The group associated with this Fourier transform is the multiplicative group of the nth roots of unity $1$ , ω, . . . , ω n $- {}^{1}$ , or the cyclic group of order n. The root ω j is associated with the rotation of the complex plane through an angle of $2\pij/n$ . Now let us consider infinite groups. Let f be a complex-valued function defined on the unit circle T  =  {z $\in C$ : $|z| = 1$ .
To avoid technical issues we shall assume that f is smooth--that is, it is infinitely differentiable. Now if f is a function of the simple form f (z)  =  cz n for some integer n and some constant c, then f will have rotational symmetry of order n. That is, if $ω = e^{2}\pi^{i}/ n$ again, then f $(ωz) = f(z)$ for all complex numbers z. After our earlier examples, it should come as no surprise that an arbitrary smooth function f can be expressed as a superposition of such rotationally symmetric functions. Indeed, one can write

$\infty$

f ˆ (n) z n ,

$f(z) =n = - \infty$

where the numbers f ˆ (n), called the Fourier coefficients of f at the frequencies n, are given by the formula

$2\pi1$

f ${}^{(}n) =f(ei\theta)e -$ in . hetad. heta.2\pi0

This formula can be thought of as the limiting case n $\to\infty$ of the previous decomposition, restricted to the unit circle. It can also be regarded as a generalization of the Taylor series expansion of a holomorphic function [I.3](/part-01/fundamental-definitions). If f is holomorphic on the closed unit disk {z $\inC$ : $|z| \le 1$ , then one can write $\infty$ n $f(z) =$ a n z , $n = 0$ where the Taylor coefficient a n is given by the formula $1$ f (z) $a^{n} =$ dz. $n + 12\pii|z| = 1 z205$ In general, there are very strong links between Fourier analysis and complex analysis.
If f is smooth, then its Fourier coefficients decay to zero very quickly and it is easy to show that the Fourier $\infty$ series $n = - \infty f^{(}n)z^{n}$ converges. The issue becomes more subtle if f is not smooth (for instance, if it is merely continuous). Then one must be careful to specify the precise sense in which the series converges. In fact, a significant portion of harmonic analysis [IV.11](/part-04/harmonic-analysis) is devoted to questions of this kind, and to developing tools for answering them.
The group of symmetries associated with this version of Fourier analysis is the circle group T . (Notice that we can think of the number e $i\theta$ both as a point in the circle and as a rotation through an angle of $\theta.$ Thus, the circle can be identified with its own group of rotational symmetries .) But there is a second group that is important here as well, namely the additive group Z of all integers.
If we take two of our basic symmetric functions, z $m$ and $z$ n , and multiply them together, then we obtain the function z m + n , so the map n $\to$ z n is an isomorphism from Z to the set of all these functions under multiplication. The group Z is known as the Pontryagin dual of T . In the theory of partial differential equations and in related areas of harmonic analysis, the most important Fourier transform is defined on the Euclidean space R d . Among all functions f :
R d $\to$ C , the ones considered to be “basic” are the plane waves $f(x) = cξe^{2}\pi$ ix·ξ , where ξ $\in$ R d is a vector (known as the frequency of the plane wave), x · ξ is the dot product between the position x and the frequency ξ, and c ξ is a complex number (whose magnitude is the amplitude of the plane wave). Notice that sets of the form $H\lambda =$ {x : x · $ξ = \lambda$ are (hyper) planes orthogonal to ξ, and on each such set the value of f (x) is constant. More over, the value taken by $f$ on $H\lambda$ is always equal to the value taken on $H\lambda + {}^{2}\pi$ .
This explains the name “plane waves.” It turns out that if a function f is sufficiently “nice” (e . g . , smooth and rapidly decreasing as x gets large), then it can be represented uniquely as the superposition of plane waves, where a “superposition” is now interpreted as an integral rather than a summation. More precisely, we have the formula$s^{1}$ f ${} ( ξ)e^{2}\pi$ ix·ξ $dξ,f(x) =$ R $d_{1}$ . In some texts, the Fourier transform is defined slightly differently, with factors such as $2\pi$ and $- 1$ being moved to other places.
These notational differences have some minor benefits and drawbacks, but they are all equivalent to each other.

206                                                                                                             III. Mathematical Concepts

where                                                                    Fourier transform, is very simple: the Fourier transform
                                                                         lets one write an arbitrary function as a superposition
                 fˆ(ξ) =         f (x)e−2π ix·ξ dx.
                            Rd                                           of plane waves, and the Laplacian has a very simple
The function fˆ(ξ) is known as the Fourier transform                     effect on each plane wave. To be explicit about it,
of f , and the second formula is known as the Fourier
                                                                                  Δf (x) = Δ              fˆ(ξ)e2π ix·ξ dξ
in version formula. These two formulas show how to                                                    Rd
determine the Fourier-transformed function from the
                                                                                            =        fˆ(ξ)Δe2π ix·ξ dξ
original function and vice versa. One can view the quan-                                        Rd
tity fˆ(ξ) as the extent to which the function f contains
                                                                                            =        (−4π 2 |ξ|2 )fˆ(ξ)e2π ix·ξ dξ,
a component that oscillates at frequency ξ. As it turns                                         Rd

out, there is no difficulty in justifying the convergence                  which gives us a formula for the Laplacian of a gen-
of these integrals when f is sufficiently nice, though                     eral function. Here we have interchanged the Laplacian
the issue again becomes more subtle for functions that                   Δ with an integral; this can be rigorously justified for
are some what rough or slowly decaying. In this case,                     suitably nice f , but we omit the details.
the underlying group is the Euclidean group Rd (which                      This formula represents Δf as a superposition of
can also be thought of as the group of d-dimensional                     plane waves. But any such representation is unique, and
translations); note that both the position variable x and                the Fourier in version formula tells us that
the frequency variable ξ are contained in Rd , so Rd is                                  Δf (x) =               (ξ)e2π ix·ξ dξ.
                                                                                                               Δf
also the Pontryagin dual group in this setting.2                                                          Rd

   One major application of the Fourier transform lies in                Therefore,
understanding various linear operations on functions,                                       (ξ) = (−4π 2 |ξ|2 )fˆ(ξ),
                                                                                           Δf
such as, for instance, the Laplacian on Rd . Given a func-
                                                                         a fact that can also be derived directly from the def-
tion f : Rd → C, its Laplacian Δf is defined by the
                                                                         inition of the Fourier transform using integration by
formula
                              d                                         parts. This identity shows that the Fourier transform
                                  ∂2 f
                     Δf (x) =          ,                                 diagonalizes the Laplacian: the operation of taking the
                                  ∂xj2
                              j=1                                        Laplacian, when viewed using the Fourier transform, is
where we think of the vector x in coordinate form, x =                   nothing more than multiplication of a function F (ξ) by
(x1 , . . . , xd ), and of f as a function f (x1 , . . . , xd ) of d     the multiplier −4π 2 |ξ|2 . The quantity −4π 2 |ξ|2 can be
real variables. To avoid technicalities let us consider                  interpreted as the energy level associated4 with the fre-
only those functions that are smooth enough for the                      quency ξ. In other words, the Laplacian can be viewed
above formula to make sense with out any difficulty.                        as a Fourier multiplier, meaning that to calculate the
  In general, there is no obvious relationship between a                 Laplacian you take the Fourier transform, multiply by
function f and its Laplacian Δf . But when f is a plane                  the multiplier, and then take the inverse Fourier trans-
wave such as f (x) = e2π ix·ξ , there is a very simple                   form again. This viewpoint allows one to manipulate
relationship:                                                            the Laplacian very easily. For instance, we can iterate
                Δe2π ix·ξ = −4π 2 |ξ|2 e2π ix·ξ .                        the above formula to compute higher powers of the
                                                                         Laplacian:
That is, the effect of the Laplacian on the plane wave
                                                                             
                                                                             Δ                          ˆ(ξ) for n = 0, 1, 2, . . . .
                                                                               n f (ξ) = (−4π 2 |ξ|2 )n f
e2π ix·ξ is to multiply it by the scalar −4π 2 |ξ|2 . In
other words, the plane wave is an eigenfunction3 for                     Indeed, we are now in a position to develop more gen-
the Laplacian Δ, with eigenvalue −4π 2 |ξ|2 . (More gen-                 eral functions of the Laplacian. For instance, we can
erally, plane waves will be eigenfunctions for any lin-                  take a square root as follows:
ear operation that commutes with translations.) There-                                  
                                                                                          −Δf (ξ) = 2π |ξ|fˆ(ξ).
fore, the Laplacian, when viewed through the lens of the
                                                                         This leads to the theory of fractional differential oper-
                                                                         ators (which are in turn a special case of pseudo differ-
  2. This is because of our reliance on the dot product; if one did
not want to use this dot product, the Pontryagin dual would instead      ential operators), as well as the more general theory
be (Rd )∗ , the dual vector space to Rd . But this subtlety is not too
important in most applications.
  3. Strictly speaking, this is a generalized eigenfunction, as plane      4. When taking this view, it is customary to replace Δ by −Δ in order
waves are not square-integrable on Rd .                                  to make the energies positive.

III.27.   The Fourier Transform                                                                                       207

of functional calculus [IV.15 §3.1](/part-04/operator-algebras), in which one                   There are many directions in which to generalize the
starts with a given operator (such as the Laplacian) and         above set of ideas. For instance, one can replace the
then studies various functions of that operator, such            Laplacian by a more general operator and the plane
as square roots, exponentials, inverses, and so forth.           waves by (generalized) eigenfunctions of that operator.
  As the above discussion shows, the Fourier transform           This leads to the subject of spectral theory [III.86](/part-03/the-spectrum)
can be used to develop a number of interesting oper-             and functional calculus; one can also study the alge-
ations, which have particular importance in the theory           bra of Fourier multipliers (and of convolution) more
of differential equations. To analyze these operations            abstractly, which leads to the theory of C ∗ -algebras
effectively, one needs various estimates on the Fourier           [IV.15 §3](/part-04/operator-algebras). One can also go beyond the theory of lin-
transform. For instance, it is often important to know           ear operators and study bilinear, multilinear, or even
how the size of a function f , as measured by some               fully nonlinear operators. This leads in particular to
norm, relates to the size of its Fourier transform, as           the theory of paraproducts, which are generalizations
measured by a possibly different norm. For a further              of the pointwise product operation (f (x), g(x)) →
discussion of this point, see function spaces [III.29](/part-03/function-spaces).          f g(x) that are of importance in differential equations.
One particularly important and striking estimate of this         In another direction, one can replace Euclidean space
type is the Plancherel identity,                                 Rd by a more general group, in which case the notion
                                                                 of a plane wave is replaced by the notion of a char-
                   |f (x)|2 dx =         |fˆ(ξ)|2 dξ,
              Rd                   Rd                            acter (if the group is Abelian) or a representation (if
which shows that the L2 -norm of a Fourier transform is          the group is non-Abelian). There are other variants of
actually equal to the L2 -norm of the original function.         the Fourier transform, such as the Laplace transform
The Fourier transform is therefore a unitary operation,          or the Mellin transform (for more about other trans-
so one can view the frequency-space representation of            forms, see the article transforms [III.91](/part-03/transforms)), which are
a function as being in some sense a “rotation” of the            very similar algebraically to the Fourier transform and
physical-space representation.                                   play similar roles (for instance, the Laplace transform is
  Developing further estimates related to the Fourier            also useful in analyzing differential equations). We have
transform and associated operators is a major compo-             already seen that Fourier transforms are connected to
nent of harmonic analysis. A variant of the Plancherel           Taylor series; there is also a connection to some other
identity is the convolution formula:                             important series expansions, notably Dirichlet series,
                                                                 as well as expansions of functions in terms of special
          f (y)g(x − y) dy =            fˆ(ξ)ĝ(ξ)e2π ix·ξ dξ.
     Rd                            Rd                            polynomials [III.85](/part-03/special-functions) such as orthogonal polynomials
This formula allows one to analyze the convolution               or spherical harmonics [III.87](/part-03/spherical-harmonics).
                                                                    The Fourier transform decomposes a function ex-
             f ∗ g(x) =         f (y)g(x − y) dy
                           Rd                                    actly into many components, each of which has a pre-
of two functions f and g in terms of their Fourier trans-        cise frequency. In some applications it is more useful
forms; in particular, if the Fourier coefficients of f or          to adopt a “fuzzier” approach, in which a function is
g are small, then we expect the convolution f ∗ g to be          decomposed into fewer components but each compo-
small as well. This relationship means that the Fourier          nent has a range of frequencies rather than consisting
transform controls certain correlations of a function            purely of a single frequency. Such decompositions can
with itself and with other functions, which makes the            have the advantage of being less constrained by the
Fourier transform an important tool in understand-               uncertainty principle, which asserts that it is impossi-
ing the randomness and uniform distribution proper-              ble for both a function and its Fourier transform to be
ties of various objects in probability theory, harmonic          concentrated in very small regions of Rd . This leads
analysis, and number theory. For instance, one can pur-          to some variants of the Fourier transform, such as
sue the above ideas to establish the central limit theo-         wavelet transforms [VII.3](/part-07/wavelets-and-applications), which are better suited
rem, which asserts that the sum of many independent              to a number of problems in applied and computational
random variables will eventually resemble a gaussian             mathematics, and also to certain questions in harmonic
distribution [III.71 §5](/part-03/probability-distributions); one can even use such meth-            analysis and differential equations. The uncertainty
ods to establish vinogradov’s theorem [V.27](/part-05/problems-and-results-in-vi36-peter-gustav-lejeune-dirichlet-18051859), that               principle, being fundamental to quantum mechanics,
every sufficiently large odd number is the sum of three            also connects the Fourier transform to mathematical
primes.                                                          physics, and in particular to the connections between