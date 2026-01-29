# Liouville’s Theorem and Roth’s Theorem

710                                                                                       V. Theorems and Problems

G = Gal(f ) has a fixed field H † , which is defined to be      this cannot be done for quartics, cubics, and quadratics
the set of all numbers a ∈ E such that φ(a) = a for          is that S4 and all its subgroups are soluble groups.
all φ ∈ H. Galois proved that the association between
H and H † gives a one-to-one correspondence between          V.22     Liouville’s Theorem and
subgroups of G and fields which lie between Q and                      Roth’s Theorem
E (the so-called intermediate subfields of E). The con-
dition that f (x) has a radical formula for its roots        One of the most famous theorems in mathematics is the
                                                                               √
leads to certain special kinds of intermediate subfields,     statement that 2 is irrational. This means that there
                                                                                                            √
and hence to certain special subgroups of G, and even-       is no pair of integers p and q such that 2 = p/q, or
tually to Galois’s most famous theorem: the polyno-          equivalently that the equation p 2 = 2 q 2 has no integer
mial f (x) has a radical formula for its roots if and        solutions apart from the trivial solution p = q = 0. The
only if its Galois group Gal(f ) is a soluble group. (This   argument that proves this can be considerably general-
means that G = Gal(f ) has a sequence of subgroups           ized, and, in fact, if P (x) is any polynomial with integer
1 = G0 < G1 < · · · < Gr = G such that for each i, Gi        coefficients and leading coefficient 1, then all its roots
is a normal subgroup [I.3 §3.3](/part-01/fundamental-definitions) of Gi+1 and the factor       are either integers or irrational numbers. For example,
group Gi+1 /Gi is Abelian.)                                  since x 3 + x − 1 is negative when x = 0 and positive
   It follows from Galois’s theorem that to demonstrate      when x = 1 it must have a root strictly between 0 and 1.
the insolubility of the quintic, it is enough to produce a   This root is not an integer, so it must be irrational.
quintic f (x) such that Gal(f ) is not a soluble group. An      Once one has proved that a number is irrational, it
                                                             may seem as though not much more can be said. How-
example of such a quintic is f (x) = 2 x 5 − 5 x 4 + 5: one
                                                             ever, this is very far from true: given an irrational num-
can show first that Gal(f ) is isomorphic to the symmet-
                                                             ber, one can ask how close it is to being rational, and
ric group S5 ; and second that S5 is not a soluble group.
                                                             fascinating and extremely difficult questions arise as
Here is a brief sketch of how the argument goes. First
                                                             soon as one does so.
one establishes that f (x) is an irreducible polynomial
                                                                It is not immediately obvious what this question
(i.e., is not the product of two rational polynomials of
                                                             means, since every irrational number can be approx-
smaller degree) with five distinct complex roots. Thus,
                                                             imated as closely as you like by rational numbers.
as observed above, Gal(f ) can be regarded as a sub-                                                          √
                                                             For example, the decimal expansion of 2 begins
group of S5 that permutes the five roots. By sketch-                                               . qrt{1}.414213 . . . , which tells us that 2 is within 1/100 000
ing the graph of f (x) one can easily see that three of
                                                             of the rational number 141 421/100 000. More gener-
its roots are real and that the other two, call them α1
                                                             ally, for any positive integer q we can let p be the largest
and α2 , are complex conjugates of each other. Since                                     √
                                                             integer such that p/q < 2, and then p/q will be within
the complex conjugation map z → . ar{z} always gives an                   . qrt{1}/q of 2. In other words, if we want an approximation
automorphism in Gal(f ), it follows that Gal(f ) is a            √
                                                             to 2 with accuracy 1/q, we can obtain it if we use a
subgroup of S5 that contains a 2-cycle, namely (α1 α2 ).
                                                             denominator of q.
Another basic general fact is that the Galois group of an       However, we can now ask the following question: are
irreducible polynomial permutes the roots transitively,      there denominators q for which one can one obtain an
meaning that for any two roots αi , αj there exists an       accuracy much better than 1/q? The answer turns out
automorphism in Gal(f ) that sends αi to αj . Thus, our      to be yes. To see this, let N be a positive integer and con-
group Gal(f ) is a subgroup of S5 that permutes the five                                √sider the numbers 0, 2, 2 2, . . . , N 2. Each of these
roots transitively and contains a 2-cycle. At this point     can be written in the form m + α, where m is an integer
some fairly elementary group theory shows that Gal(f )       and α, the fractional part, lies between 0 and 1. Since
must actually be the whole of S5 . Finally, the fact that    there are N + 1 numbers, at least two of their fractional
S5 is not a soluble group follows easily from the fact       parts must be within 1/N of each other. That is, we
that the alternating group A5 is a non-Abelian simple        can find integers r < s between 0 and N such that if we
                                                                     √group (i.e., it has no normal subgroups apart from the       write r 2 = n+α and s 2 = m+β, then |α−β| ⩽ 1/N.
                                                                                                          √
identity subgroup and A5 itself).                            Thus, if we set γ = α−β, we have (s −r ) 2 = n−m+γ
  These ideas can be extended to produce polynomials         and |γ| ⩽ 1/N. If we now let q = s − r and p = n − m,
                                                                    √of any degree n ⩾ 5 that have Galois group Sn , and          then 2 = p/q + γ/q, so | 2 − p/q| ⩽ 1/q N. Since
that are therefore not soluble by radicals. The reason       N ⩾ q, 1/q N ⩽ 1/q2 , so for at least some positive