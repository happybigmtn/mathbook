# Special Functions

290

grows only linearly in the numbers of variables and
constraints. However, Klee and Minty (1972) have given
an example based on a perturbed n-dimensional cube
(m = 2 n faces and diameter n), in which if the algo-
rithm selects among possible pivots by choosing the
one for which the objective function increases at the
greatest rate per unit increase in that variable, then
it visits all 2 n vertices before reaching the optimum.
Indeed, for most deterministic pivot selection rules,
examples are known in which the number of steps
grows exponentially in n.
   Fortunately, things are usually much better in prac-
tical problems than in worst-case examples. Typically,
only O(m) steps are needed to solve a problem with
m constraints. More over, Khachian (1979) proved (by
analysis of the so-called ellipsoid algorithm) that linear
programs can in principle be solved by an algorithm
whose running time grows only polynomially in n. Thus
linear programming is much easier than “integer linear
programming,” in which x1 , . . . , xn are required to be
integers and for which no algorithm with polynomial
running time is known.
   Karmarkar (1984) pioneered development of “inte-
rior” methods for linear programming problems. These
move through the interior of the polytope P, rather than
among its vertices, and can some times solve large LPs
more quickly than the simplex algorithm. Modern com-
puter software uses both methods and can easily solve
LPs with millions of variables and constraints.
Further Reading
Dantzig, G. 1963. Linear Programming and Extensions.
  Princeton, NJ: Princeton University Press.
Karmarkar, N. 1984. A new polynomial-time algorithm for
  linear programming. Combinatorica 4:373–95.
Khachian, L. G. 1979. A polynomial algorithm in linear
  programming. Soviet Mathematics Doklady 20:191–94.
Klee, V., and G. Minty. 1972. How good is the simplex algo-     defined for all x > 0, has the property that
  rithm? In Inequalities III, edited by O. Shisha, volume 16,
  pp. 159–75. New York: Academic Press.
Solitons
   See linear and nonlinear waves and

III.85 Special Functions

Suppose that the only functions we have come across
are quotients of polynomials and that we are asked to

III. Mathematical Concepts
solve the differential equation
f (x) = 1/x
for all x > 0, subject to the condition f (1) = 0.
If we try f (x) = P (x)/Q(x), where P and Q are
polynomials with no common factors, then we find that
x(Q(x)P (x) − P (x)Q (x)) = Q(x)2 .
By comparing coefficients we can show that Q(0) =
P (0) = 0, which shows that, contrary to our assump-
tions, both P (x) and Q(x) are divisible by x. Thus, we
cannot solve equation (1) in terms of known functions.
However, the fundamental theorem of calculus
[I.3 §5.5](/part-01/fundamental-definitions) tells us that equation (1) does indeed have a
solution, namely
x
1
F (x) =     dt.
t    1
Further study shows that the function F has many
useful properties. For example, using the substitution
u = t/a, we find that
a              ab
1
F (ab) =         dt +              dt
1 t
a              b
1
=           dt +           du
1   t
= F (a) + F (b),
and, using the formula for differentiating an inverse
function, we find that F −1 is the solution of the differ-
ential equation
g (x) = g(x).
We therefore give the function a name (the logarithm)
and add it to our list of standard functions.
At a more advanced level, integration by parts shows
that the gamma function [III.31](/part-03/the-gamma-function) (introduced by euler
[VI.19](/part-06/leonhard-euler-17071783))
. nfty
Γ (x) =           t x−1 e−t dt,
0
Γ (x) = (x − 1)Γ (x − 1)
for all x > 1, and therefore Γ (n) = (n − 1)! for all
integers n ⩾ 1 (since Γ (1) = 1). As one might expect
from its association with factorials, the gamma func-
tion turns out to be very useful in number theory and
solitons [III.49](/part-03/linear-and-nonlinear-waves-and-solitons)
statistics.
In practice, a “special function” is any function that,
like the logarithm and the gamma function, has been
T. W. Körner
Some authors use the phrase “special functions” in a
more restricted sense, meaning something like “func-
tions that turn up in the solution of physical problems”

III . $85$ .

Special Functions

or “functions other than those generally provided by a pocket calculator,” but these restrictions do not seem to be very useful. In spite of this apparent generality, the theory of special functions is linked in the minds of many mathematicians to a collection of particular ideas and methods. Indeed, it is often linked to particular books like Whittaker and Watson’s A Course of Modern Analysis (which was first published in 1902 and is still selling well) and Abramowitz and Stegun’s Handbook of Mathematical Functions.
These connections may simply be accidents of history, but the phrase “special functions” is often associated with other phrases like “equations of mathematical physics,” “beautiful formulas,” and “sheer ingenuity.” We illustrate this and other themes in the particular case of Legendre polynomials.
(The next paragraph involves more advanced mathematics and glosses over several long calculations, but the reader may simply glance over its contents and resume careful reading there after .) Suppose that we wish to examine the gravitational potential $\psi$ of Earth by looking at solutions of laplace’s equation [I.3](/part-01/fundamental-definitions). elta. si =  0 .
Since Earth is an oblate spheroid that is nearly spherical, we use spherical polar coordinates (r , $\theta,$ φ) and, noting that Earth is symmetric about its axis of rotation, we may suppose that $\psi$ depends only on $r$ and $\theta.$ Under these assumptions, Laplace’s equation takes the form ∂ $\partial\psi$ ∂ $\partial\psi r2 + = 0$ . sin $\theta$ sin $\theta(2)$ ∂r ∂r $\partial\theta\partial\theta$ Following the standard technique of separation of variables, we look for solutions of the form $\psi(r$ , $\theta) =$ R (r) Θ ( $\theta$ ).
After a little calculation, equation ( $2$ ) yields $11 d$ d $(r^{2}R (r)) = -$ (sin $\thetaΘ (\theta)$ ). (3) R (r) dr sin. hetaΘ(. heta)d. heta Since one side of equation ( $3$ ) depends on r alone and the other on $\theta$ alone, both sides must equal some constant k. The equation $1 d(r^{2}R (r)) = k$ R (r) dr has the solution $R(r) = r^{l}$ whenever $l(l + 1) = k.$ The corresponding equation for Θ is then $d_{1}$ (sin $\thetaΘ (\theta)) = - l(l + 1)$ .
(4) sin $\thetaΘ(\theta)d\theta$ We now make the substitution $x =$ cos $\theta,y(x) = Θ(\theta)$ to convert ( $4$ ) to Legendre’s equation $(1 - x^{2})y (x) - 2xy (x) + l(l + 1)y(x) = 0$ . (5)291 Routine equating of coefficients reveals that, if we seek $\infty$ j nontrivial solutions of the form f (x) = $j = {}^{0}a^{j}x$ , then, unless l is an integer, f (x) is unbounded as x approaches 1( that is, as $\theta$ approaches 0), so these solutions are not useful physically. However, if l is a positive integer, then there is a polynomial solution of degree l.
(If l is a negative integer, the same polynomials reappear .) In fact, we have the following stronger statement: if l is a positive integer, then there exists a unique polynomial P l of degree l satisfying Legendre’s equation ( $5$ ) such that $P^{l}(1) = 1$ . We call $P^{l}$ the lth Legendre polynomial. Returning to our original problem, we see that it has solutions of the form $\infty P^{n}($ cos $\theta)\psi(r$ , $\theta) =$ A n .
$rn + 1n = 0$ It is obvious to the physicist, and can be proved by the mathematician, that this is the most general solution if we also demand that φ(r , $\theta) \to 0$ as $r \to \infty.$ Notice that if r is large, then only the first few terms will contribute much to the final answer. There are many different ways of obtaining the Legendre polynomials.
The reader is invited to verify that, if we define $Q^{n}$ inductively by setting $Q^{0}(x) = 1$ and $Q^{1}(x) = x,$ and using the “three-term recurrence relation” $(n + 1)Q^{n} + {}^{1}(x) - (2n + 1)xQ^{n}(x) + nQ^{n} - {}^{1}(x) = 0$ , then $Q^{n}(1) = 1$ and $Q^{n}$ is a polynomial that satisfies Legendre’s equation ( $5$ ) (with $l = n$), from which it follows that Q n is the Legendre polynomial of degree n. If we set vn(x) = (x2 - 1)n , then $(x^{2} - 1)v^{n}(x) = 2nxv(x)$ .
Differentiating both sides of this equation $n + 1$ times (n) using Leibniz’s rule, we see that v n satisfies Legendre’s equation (5) with $l = n.$ Differentiating vn(x) =(x -  1)n(x +  1)n n times using Leibniz’s rule and noting that all but one of the resulting terms vanish when x $= 1$ , we see that v n n is a polynomial with (n) $v^{n} (1) = 2^{n}n!.$ Putting all this information together, we obtain Rodriguez’s formula $11$ d (n) (x2 - 1)n . $P^{n}(x) =$ v n (x) = n $2^{n}n!2 n!dx$ Equation ( $5$ ) is an example of a Sturm-Liouville equation.
Setting $l = n$ and $y = P^{n}$ and rewriting slightly, we obtain the equation d ( $(1 - x^{2})P^{n}(x)) + n(n + 1)P^{n}(x) = 0$ . (6)

dx

$292$

If $m$ and $n$ are positive integers, then, using ( $6$ ) and integrating by parts, we obtain

$1 - n(n + 1)$

P n (x) P m (x) dx

$- 11$

d

( $(1 - x^{2})P^{n}(x)) P^{m}(x)dx$

 = dx

$- 1$

 =  [(1 − x 2) P n (x) P m (x) ]1 - 11(1 - x2)Pn(x)Pm(x)dx + - 11(1 - x2)Pn(x)Pm(x)dx. = - 1 Thus, by symmetry, $1n(n + 1)$ P n (x) P m (x) dx $- 11 = m(m + 1)$ P n (x) P m (x) dx, $- 1$ and, if $m \neq n,1$ P n (x) P m (x) dx $= 0$ . $(7)- 1$ The “orthogonality relation” given by ( $7$ ) has important consequences. Since P r is a polynomial of degree exactly r , we know that any polynomial Q of degree $n - 1$ or less can be written $n - 1Q(x) =$ a r P r (x) $r = 0$ and so $n - 111$ P n (x) Q (x) $dx = P$ n (x) P r (x) dx $= 0$ .
a r $- 1 - 1r = 0(8)$ Thus, P n is orthogonal to all polynomials of lower degree. Suppose that the points where P n (x) changes sign in the interval [− 1 , 1 ]$are$α1 , . . . , α m . Then, if we write $Q(x) = (x - α^{1})(x - α^{2})$ · · · $(x - α^{m})$ , we know that P (x) Q (x) does not change sign on [− 1 , 1 ] and so $1P^{n}(x)Q(x)dx \neq 0$ . $- 1$ By equation ( $8$ ) this means that the degree m of Q is at least n and so (since a polynomial of degree n can have at most n zeros) P n must have exactly n distinct zeros and they must all lie in the interval [− 1 , 1 ] .
gauss [VI.26](/part-06/carl-friedrich-gauss-17771855) made use of these facts to obtain a powerful method of numerical integration. Suppose that $x^{1}$ , $x^{2}$ , . . . , $x^{n} + {}^{1}$ are distinct points on [− 1 , 1 ] . If we set $x - x^{i}e^{j}(x) =$ , $x - x^{i}i \neq j j$ III.
Mathematical Concepts then e j (x) is a polynomial of degree n that takes the value $1$ when $x = x^{j}$ and $0$ when $x = x^{k}$ with $k \neq j.$ Thus, if R is any polynomial of degree at most n, the polynomial Q given by $Q(x) = R(x^{1})e^{1}(x) + R(x^{2})e^{2}(x) +$ · · · $+ R(x^{n} + {}^{1})e^{n} + {}^{1}(x) - R(x)$ has degree at most  n,$and$ R - Q vanishes at the $n + 1$ points x j . It follows that $R = Q$, so $R(x) = R(x^{1})e^{1}(x) + R(x^{2})e^{2}(x) +$ · · · $+ R(x^{n} + {}^{1})e^{n} + {}^{1}(x)$ .
$1$ If we write $a^{j} =- 1e^{j}(x)dx,$ then $1R(x)dx = a^{1}R(x^{1}) + a^{2}R(x^{2}) +$ · · · $+ a^{n} + {}^{1}R(x^{n} + {}^{1})$ . $- 1$ It is natural to hope that the approximation $1f(x)dx \approx a^{1}f(x^{1}) + a^{2}f(x^{2}) +$ · · · $+ a^{n} + {}^{1}f(x^{n} + {}^{1})$ , $- 1(9)$ which is an exact equality when f is a polynomial of degree n or less, will work well for other well-behaved functions. Gauss observed that we can make a major improvement by taking the x j to be the n $+ 1$ roots of the $(n + 1)st$ Legendre polynomial.
Suppose that $P$ is a polynomial of degree at most $2n + 1$ . Then we can write $P(x) = Q(x)P^{n} + {}^{1}(x) + R(x)$ , where Q and R are polynomials of degree at most n and $P^{n} + {}^{1}$ is the $(n + 1)st$ Legendre polynomial. Now $P^{n} + {}^{1}$ is orthogonal to polynomials over lower degree (and , in particular, to Q ), $P^{n} + {}^{1}(x^{j}) = 0$ by the definition of $x^{j}$ , and the approximation ( $9$ ) is an equality for R.
Thus, $111P(x)dx = P^{n} + {}^{1}(x)Q(x)dx +$ R (x) dx $- 1 - 1 - 1n + 1 = {}^{0} +$ a j R (x j) $j = 1n + 1$ a j (P n $+ {}^{1}$ (x j) Q (x j) + R (x j)) = $j = 1n + 1$ = a j P (x j). $j = 1$ We have shown that the “quadrature formula” ( $9$ ) is actually exact for all polynomials of degree at most $2n + 1$ , provided we choose the $x^{j}$ to be the numbers suggested by Gauss. Unsurprisingly, this choice gives an extremely good way of estimating integrals numerically. “Gaussian quadrature” is one of the two

III . $85$ .

Special Functions

main methods used to evaluate integrals on computers today. We conclude with a brief look at a few other special functions. Consider de Moivre’s formula cos $n\theta + i$ sin $n\theta = ($ cos $\theta + i$ sin . heta)n . Using the binomial expansion, we see that n n r

$i$ cos $n - r \theta$ sin $r \theta,$ cos $n\theta + i$ sin $n\theta =$ r

$r = 0$

and, taking real parts,

$n/2$ !

n

( - 1)r cos $n - {}^{2r} \theta$ sin ${}^{2r} \theta.$ cos $n\theta = 2rr = 0$

Since sin ${}^{2}\theta = 1 -$ cos ${}^{2}\theta,$ we have $n/2$ ! n

( - 1)r cos $n - {}^{2r}\theta(1 -$ cos {}2. heta)r cos $n\theta = 2rr = 0 = T^{n}($ cos $\theta)$ ,

where T n is a polynomial of degree n called the nth Chebyshev polynomial. The Chebyshev polynomials play an important role in numerical analysis. The next collection of functions requires us to calculate with infinite sums. Readers may treat our calculations as plausible or justify them rigorously according to taste. Observe first that

$\infty 1h(x) =n = - \infty(x - n\pi)2$

is well-defined for each real x that is not a multiple of

$1\pi$ . Note also that $h(x + \pi) = h(x)$ and $h({}^{2}\pi - x) =12h(2\pi + x)$ . Set $f(x) = h(x) -$ cosec $(\pi x)$ . By showing that there are constants $K^{1}$ and $K^{2}$ such that

. nfty 10 << K1 - n\pi)2

(x

$n = 1$

and

$120 <$ cosec $x - 2 < K^{2}$

x

for all $0 < x \le \frac{1}{2}\pi$ , we deduce that there is a constant K such that $|f(x)| < K$ for all $0 < x < \pi$ . Simple calculations show that $f(x) = \frac{1}{4}( f(\frac{1}{2}x) + f(\frac{1}{2}(x + \pi))$).

(10)

A single application of (10) shows that $|f(x)| < \frac{1}{2}K$ for all $0 < x < \pi$ , and repeated applications show that $f(x) = 0$ . Thus

$\infty 1$

cosec {}2 x = - n\pi)2

(x

$n = - \infty$

for all real noninteger x.

$293$

If we seek analogues in the complex plane, we are led to functions of the type

$\infty\infty 1F(z) =$ / $n = - \infty^{m} = - \infty(z - n - mi ) 3$

Observe that, while the real function cose$c^{2}$ x satisfies cosec ${}^{2}(x + \pi) =$ cosec ${}^{2}(x)$ and is periodic with period $\pi$ , the complex function F just defined satisfies $F(z + 1) = F(z)$ ,

$F(z + i) = F(z)$

and is doubly periodic with periods $1$ and i. Functions like F are called elliptic functions and have a theory that parallels that of the trigonometric functions [III.92](/part-03/trigonometric-functions). $2$ The function $E(x) = (2\pi) - 1/2e - x / {}^{2}$ is called the Gaussian or normal function and appears in probability and the study of diffusion processes (see [III.71](/part-03/probability-distributions) and [IV.24](/part-04/stochastic-processes)).
The partial differential equation ∂ ${}^{2}φ$ ∂φ (x , t) = K (x , t) ∂$x_{2}$ ∂t with x corresponding to distance and t to time provides a reasonable model for diffusion. It is easy to check that φ(x , $t) = \psi(x$ , $t) = (Kt) - 1/2E(x(Kt) - 1/2)$ is a solution. By sketching a graph of $\psi$ (x , t) as a function of x for various values of t, readers will see that $\psi$ can be considered as the response to a disturbance at $x = 0$ when $t = 0$ .
By considering the behavior of $\psi(x$ ,  t) as a function of t for a given value of x, they will see that “the effect at x of a disturbance at the origin becomes noticeable only after a time of the order $x^{1}/ {}^{2}$ .” Living cells depend on diffusion processes and the result just given suggests (correctly) that such processes are very slow over long distances. It is plausible that this sets a limit on the size of a single cell: a large organism must be multi-celled. Statisticians constantly use the related error function $x_{2}$ exp $( - t^{2})dt.$ erf $(x) =\pi 1/20$

There is a famous theorem of liouville [VI.39](/part-06/joseph-liouville-18091882) that shows that erf (x) cannot be expressed as a composition of elementary functions (such as quotients of polynomials, trigonometric functions, and exponential functions [III.25](/part-03/the-exponential-and-logarithmic-functions)). We have been able to look at only a few properties of a few special functions in this article, but even this small sample shows how much interesting mathematics arises when we study one function or a class of particular functions rather than functions in general.