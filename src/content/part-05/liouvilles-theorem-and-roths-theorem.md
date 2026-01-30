# Liouville’s Theorem and Roth’s Theorem

710

G = Gal(f ) has a fixed field H † , which is defined to be
the set of all numbers a ∈ E such that φ(a) = a for
all φ ∈ H. Galois proved that the association between
H and H † gives a one-to-one correspondence between
subgroups of G and fields which lie between Q and
E (the so-called intermediate subfields of E). The con-
dition that f (x) has a radical formula for its roots
leads to certain special kinds of intermediate subfields,     statement that 2 is irrational. This means that there
and hence to certain special subgroups of G, and even-
tually to Galois’s most famous theorem: the polyno-
mial f (x) has a radical formula for its roots if and
only if its Galois group Gal(f ) is a soluble group. (This   argument that proves this can be considerably general-
means that G = Gal(f ) has a sequence of subgroups
1 = G0 < G1 < · · · < Gr = G such that for each i, Gi
is a normal subgroup [I.3 §3.3](/part-01/fundamental-definitions) of Gi+1 and the factor
group Gi+1 /Gi is Abelian.)
   It follows from Galois’s theorem that to demonstrate
the insolubility of the quintic, it is enough to produce a   This root is not an integer, so it must be irrational.
quintic f (x) such that Gal(f ) is not a soluble group. An
example of such a quintic is f (x) = 2 x 5 − 5 x 4 + 5: one
can show first that Gal(f ) is isomorphic to the symmet-
ric group S5 ; and second that S5 is not a soluble group.
Here is a brief sketch of how the argument goes. First
one establishes that f (x) is an irreducible polynomial
(i.e., is not the product of two rational polynomials of
smaller degree) with five distinct complex roots. Thus,
as observed above, Gal(f ) can be regarded as a sub-
group of S5 that permutes the five roots. By sketch-
ing the graph of f (x) one can easily see that three of
its roots are real and that the other two, call them α1
and α2 , are complex conjugates of each other. Since
the complex conjugation map z → . ar{z} always gives an
automorphism in Gal(f ), it follows that Gal(f ) is a
subgroup of S5 that contains a 2-cycle, namely (α1 α2 ).
Another basic general fact is that the Galois group of an
irreducible polynomial permutes the roots transitively,
meaning that for any two roots αi , αj there exists an
automorphism in Gal(f ) that sends αi to αj . Thus, our
group Gal(f ) is a subgroup of S5 that permutes the five
roots transitively and contains a 2-cycle. At this point     can be written in the form m + α, where m is an integer
some fairly elementary group theory shows that Gal(f )
must actually be the whole of S5 . Finally, the fact that    there are N + 1 numbers, at least two of their fractional
S5 is not a soluble group follows easily from the fact
that the alternating group A5 is a non-Abelian simple
group (i.e., it has no normal subgroups apart from the
identity subgroup and A5 itself).
  These ideas can be extended to produce polynomials
of any degree n ⩾ 5 that have Galois group Sn , and
that are therefore not soluble by radicals. The reason

V. Theorems and Problems
this cannot be done for quartics, cubics, and quadratics
is that S4 and all its subgroups are soluble groups.
V.22     Liouville’s Theorem and
Roth’s Theorem
One of the most famous theorems in mathematics is the
√is no pair of integers p and q such that 2 = p/q, or
equivalently that the equation p 2 = 2 q 2 has no integer
solutions apart from the trivial solution p = q = 0. The
ized, and, in fact, if P (x) is any polynomial with integer
coefficients and leading coefficient 1, then all its roots
are either integers or irrational numbers. For example,
since x 3 + x − 1 is negative when x = 0 and positive
when x = 1 it must have a root strictly between 0 and 1.
Once one has proved that a number is irrational, it
may seem as though not much more can be said. How-
ever, this is very far from true: given an irrational num-
ber, one can ask how close it is to being rational, and
fascinating and extremely difficult questions arise as
soon as one does so.
It is not immediately obvious what this question
means, since every irrational number can be approx-
imated as closely as you like by rational numbers.
√
For example, the decimal expansion of 2 begins
. qrt{1}.414213 . . . , which tells us that 2 is within 1/100 000
of the rational number 141 421/100 000. More gener-
ally, for any positive integer q we can let p be the largest
√
integer such that p/q < 2, and then p/q will be within
. qrt{1}/q of 2. In other words, if we want an approximation
√
to 2 with accuracy 1/q, we can obtain it if we use a
denominator of q.
However, we can now ask the following question: are
there denominators q for which one can one obtain an
accuracy much better than 1/q? The answer turns out
to be yes. To see this, let N be a positive integer and con-
√sider the numbers 0, 2, 2 2, . . . , N 2. Each of these
and α, the fractional part, lies between 0 and 1. Since
parts must be within 1/N of each other. That is, we
can find integers r < s between 0 and N such that if we
√write r 2 = n+α and s 2 = m+β, then |α−β| ⩽ 1/N.
√
Thus, if we set γ = α−β, we have (s −r ) 2 = n−m+γ
and |γ| ⩽ 1/N. If we now let q = s − r and p = n − m,
√then 2 = p/q + γ/q, so | 2 − p/q| ⩽ 1/q N. Since
N ⩾ q, 1/q N ⩽ 1/q2 , so for at least some positive