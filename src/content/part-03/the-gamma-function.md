# The Gamma Function

III . $31$ .

The Gamma Function

a short proof of Young’s inequality, which is the following statement. Let $1 \le p,q,r \le \infty$ satisfy the equation $1/p + 1/q = 1/r + 1$ , let $f$ and $g$ belong to $L^{p}(R)$ and L q (R), respectively, and let f ∗g be the convolution of f

$\infty$

and g: that is, $f$ ∗ $g(x) = - \infty f(y)g(x - y)dy.$ Then

$\infty 1/r|f$ ∗  g(x)|rdx- . nfty. nfty. nfty1/p1/q|f(x)|pdx|g(x)|qdx\le$/$- . nfty- . nfty

Interpolation is useful here because the inequality is easy to prove in the extreme cases when $p = 1$ , when $q = 1$ , or when $r = \infty.$ It is much harder to prove this result with out the help of interpolation theory. III . $30$

Galois Groups

Given a polynomial function f with rational coefficients, the splitting field of f is defined to be the smallest field [I.3](/part-01/fundamental-definitions) that contains all rational numbers and all the roots of f . The Galois group of f is the group of all automorphisms [I.3](/part-01/fundamental-definitions) of the splitting field. Each such automorphism permutes the roots of f , so the Galois group can be thought of as a subset of the group of all permutations [III.68](/part-03/permutation-groups) of these roots.
The structure and properties of the Galois group are closely connected with the solubility of the polynomial: in particular, the Galois group can be used to show that not all polynomials are solvable by radicals (that is, solvable by means of a formula that involves the usual arithmetic operations together with the extraction of roots) . This theorem, spectacular as it is, is by no means the only application of Galois groups: they play a central role in modern algebraic number theory.
For more details, see the insolubility of the quintic [V.21](/part-05/the-insolubility-of-the-quintic) and algebraic numbers [IV.1](/part-04/number-theory). III . $31$ The Gamma Function

Ben Green

If n is a positive integer, then its factorial, written n!, is the number $1 \times 2 \times$ · · · $\times n:$ that is, the product of all positive integers up to n. For example, the first eight factorials are $1$ , $2$ , $6$ , $24$ , $120$ , $720$ , 5040 , and 40320 . (The exclamation mark was introduced by Christian Kramp $200$ years ago as a convenience to the printer: it is perhaps also intended to convey some alarm at the rapidity with which n! grows. An obsolete notation, which can still be found in some twentieth-century texts, is n .) From this definition, it might appear to be

$213$

impossible to make sense of the idea of the factorial of a number that is not a positive integer, but, as it turns out, it is not just possible to do so, but also extremely useful. The gamma function, written Γ , is a function that agrees with the factorial function at positive integer values, but that makes sense for any real number, and even for any complex number. Actually, for various reasons it is natural to define Γ so that Γ (n)  =  (n $- 1$ ) ! for $n = 2$ , $3$ , . . . . Let us start by writing

$\infty x^{s} - {}^{1}e - xdx,Γ(s) =(1)0$

with out paying too much attention to whether the integral converges. If we integrate by parts, then we find that

$\inftyΓ(s) =$ [− x s − 1 e − x ]. nfty(s - 1)xs - {}2 e - xdx.{}0 +(2)0 As x tends to infinity, $x^{s} - {}^{1}e - x$ tends to zero, and if s is, for example, a real number greater than $1$ , then $x^{s} - {}^{1} = 0$ when $x = 0$ . Therefore, for such s, we can ignore the first term in the above expression. But the second one is simply the formula for Γ (s $- 1$ ), so we have shown that $Γ(s) = (s - 1)Γ(s - 1)$ , which is just what we need if we want to think of Γ (s) as something like $(s - 1)$ ! .
It is not hard to show that the integral is in fact convergent whenever s is a complex number and Re (s) (the real part of s) is positive. More over, it defines a holomorphic function [I.3](/part-01/fundamental-definitions) in that region. When the real part of s is negative, the integral does not converge at all, and so the formula ( $1$ ) cannot be used to define the gamma function in its entirety. However, we can instead use the property $Γ(s) = (s - 1)Γ(s - 1)$ to extend the definition.
For example, when $- 1 < Re(s) \le 0$ , we know that the definition does not work directly, but it does work for $s + 1$ , since $Re(s + 1) > 0$ . We would like Γ (s $+ 1$ ) to equal sΓ (s), so it makes sense to define Γ (s) to be $Γ(s + 1)/s$ . Once we have done this, we can turn our attention to values of $s$ with $- 2 < Re(s) \le - 1$ , and so on. The reader may object that in defining Γ ( $0$ ) (for example), we have divided by zero.
This is perfectly permissible, however, if all we require of Γ is that it should be meromorphic [V.31](/part-05/the-riemannroch-theorem), because meromorphic functions are allowed to take the “value” $\infty.$ Indeed, it is not hard to see that Γ , as we have defined it, has simple poles at $0$ , $- 1$ , $- 2$ , . . . . There are in fact many functions that share the useful properties of Γ . (For instance, because cos $(2\pis) =$ cos $(2\p i(s + 1))$ for any s, and cos $(2\pin) = 1$ for every