# Generating Functions

214

integer n, the function F (s) = Γ (s) cos(2π s) also has
the property F (s) = (s −1)F (s −1) and F (n) = (n−1)!.)
Nevertheless, for a variety of reasons, the function Γ ,
as we have defined it, is the most natural meromorphic
extension of the factorial function. The most persua-
sive reason is the fact that it arises so often in natural    tion is valid for Re(s) > 1. The extra factor Γ (s/2)π −s/2
contexts, but it is also, in a certain sense, the smoothest   in (3) may be regarded as coming from the “prime at
interpolation of the factorial function to all positive
real values. In fact, if f : (0, . nfty) → (0, . nfty) is such that
f (x + 1) = xf (x), f (1) = 1, and log f is convex, then
f = Γ.
  There are many interesting formulas involving Γ ,
such as Γ (s)Γ (1 − s) = π / sin(π s). There is also the

famous result Γ ( 2 ) = π , which is essentially equiva-
lent to the fact that the area under the “normal distri-
bution curve” h(x) = (1/ 2π )e−x /2 is 1 (this can be
seen by making the substitution x = u2 /2 in (1)). A
very important result concerning Γ is the Weierstrass
product expansion, which states that

for all complex z, where γ is Euler’s constant:

This formula makes it clear that Γ never vanishes, and
that it has simple poles at 0 and the negative integers.
   Why is the gamma function important? A simple rea-
son is that it occurs frequently in many parts of mathe-
matics, but one can still ask why this should be so. One
reason is that Γ , as defined in (1), is the Mellin trans-
form of the unarguably natural function f (x) = e−x .
The Mellin transform is a type of fourier transform
[III.27](/part-03/the-fourier-transform), but it is defined for functions on the group
(R+ , ×) rather than (R, +) (which is the habit at of the
most familiar type of Fourier transform). For this rea-
son, Γ is often seen in number theory, particularly ana-
lytic number theory [IV.2](/part-04/number-theory), where multiplicative ly
defined functions are often studied by taking Fourier
transforms.
  One appearance of Γ in a number-theoretical con-
text is in the functional equation for the riemann zeta
function [IV.2 §3](/part-04/number-theory), namely,

where

III. Mathematical Concepts
The ζ function has a well-known product representa-
tion
ζ(s) =    (1 − p −s )−1 ,
p
where the product is over primes and the representa-
infinity” (a term which may be rigorously defined).
Stirling’s formula is a very useful tool in dealing with
the gamma function: it provides a rather accurate esti-
mate for Γ (z) in terms of simpler functions. A very
rough (but often useful) approximation for n! is (n/e)n ,
which tells us that log(n!) is about n(log n − 1). Stir-
1    √
mate. Let δ > 0 and suppose that z is a complex num-
. qrt{2}                         ber that has modulus at least 1 and argument between
−π + δ and π − δ. (This second condition keeps z away
from the negative real axis, where the poles are.) Then
Stirling’s formula states that
. nfty
log Γ (z) = (z − 12 ) log z − z + 12 log 2π + E,
1
= zeγz     1+   e
Γ (z)
n
stands for a certain positive real number that depends
on δ. (The smaller you make δ, the larger you have to
1         1                          make C(δ).) Using this, one may confirm that Γ decays
γ = lim   1+     + ··· +   − log n .
n→. nfty
the complex plane. In fact, if α < σ < β, then
|Γ (σ + it)| ⩽ C(α, β)|t|β−1 e−π |t|/2
for all |t| > 1, uniformly in σ .
III.32     Generating Functions
Suppose that you have defined a combinatorial struc-
ture, and for each nonnegative integer n you wish to
understand how many examples of this structure there
are of size n. If an denotes this number, then the
object that you are trying to analyze is the sequence
a0 , a1 , a2 , a3 , . . . . If the structure is quite complicated,
then this may be a very hard problem, but one can
some times make it easier by considering a different
object, the generating function of the sequence, which
contains the same information.
To define this function, one simply regards the se-
quence an as the sequence of coefficients in a power
series. That is, the generating function f of the se-
Ξ(s) = Ξ(1 − s),
f (x) = a0 + a1 x + a2 x 2 + a3 x 3 + · · · .
The reason this can be useful is that one can some-
Ξ(s) = Γ (s/2)π −s/2 ζ(s).