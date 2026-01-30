# Rings, Ideals, and Modules

284

riemann [VI.49], who formulated the famous riemann
hypothesis [IV.2 §3](/part-04/number-theory).
  The Riemann zeta function is just one of a family
of functions that encode important number-theoretic
information. For example, the Dirichlet L-functions are
closely related to the distribution of primes in arith-
metic progressions. For more details about these and
about the Riemann zeta function itself, see analytic
number theory [IV.2](/part-04/number-theory). Some more sophisticated zeta
functions are described in the weil conjectures
[V.35](/part-05/the-weil-conjectures). See also L-functions [III.47](/part-03/l-functions).
III.81   Rings, Ideals, and Modules
A ring, like a group [I.3 §2.1](/part-01/fundamental-definitions) or a field [I.3 §2.2](/part-01/fundamental-definitions), is     set of elements that map to 0) will be like.
an algebraic structure that satisfies certain axioms. To
remember the axioms for both rings and fields at the
same time, it is helpful to think of two simple examples:    r is any element of R, then φ(r a) = φ(r )φ(a) = 0.
with the two operations of addition and multiplication,
the set Z of all integers forms a ring and the set Q of
all rational numbers forms a field. In general, a ring is a   of the ring. These two properties define the notion of
set R with two binary operations [I.2 §2.4](/part-01/language-and-grammar), denoted
by “+” and “×”, which satisfies all the field axioms apart     an ideal in Z. In interesting cases, ideals are not sub-
from the one that says that nonzero elements have
multiplicative inverses.
   Although the integers are the prototypical example
of a ring, the notion arose historically as an abstraction   polynomials that consists of all constant polynomials.
from several sources, one of which was polynomials.
Like integers, polynomials (with real coefficients, say)
can be added and multiplied, and these operations have
all the properties one might expect, such as the fact
that multiplication is distributive over addition, so the    namely the quotient map from R to the quotient R/I.
space of such polynomials forms a ring. Other exam-
ples include the integers modulo n (for any positive
integer n), the rationals (or indeed any other field), and    differ by an element of I.”
the set Z[i] of all complex numbers a + bi such that a
and b are integers.
   Some times the assumptions that multiplication is
commutative and has an identity element are dropped.
This leads to a more complicated theory, but it does
encompass important examples such as the set of all
n . imes n matrices (with elements in a given field, or even
just a ring).
   As with other algebraic structures, there are several     two polynomials as the same if they differ by a multiple
ways of forming new rings from old ones: for instance,
we can take subrings and direct products of two rings.
Slightly less obviously, we can start with a ring R and
form the ring of all polynomials with coefficients in R.

III. Mathematical Concepts
We can also take quotients [I.3 §3.3](/part-01/fundamental-definitions), but in order to
discuss these we must introduce the notion of an ideal.
2   Ideals
A typical quotient construction for an algebraic struc-
ture A will identify some substructure B and regard two
elements of A as “equivalent” if they “differ by an ele-
ment of B.” If A is a group or a vector space [I.3 §2.3](/part-01/fundamental-definitions),
then B will be a subgroup or a subspace. However, the
situation for rings is slightly different.
We can see why if we think about quotients in another
way: as images of homomorphisms [I.3 §4.1](/part-01/fundamental-definitions). The sub-
structures that we like to quotient by are the kernels
of these homomorphisms, so we should ask ourselves
1   Rings                             what the kernel of a ring homomorphism (that is, the
If φ : R → R is a homomorphism between two rings,
and φ(a) = φ(b) = 0, then φ(a + b) = 0. Also, if
Thus, the kernel of a homomorphism is closed under
addition, and also under multiplication by any element
an ideal. For example, the set of all even integers is
rings, since if an ideal contains 1 then it must con-
tain r for every r in the ring. (An example that makes
the difference very clear is the subset of the ring of all
The constants form a subring, but they certainly do not
form an ideal.)
It is not hard to show that for any ideal I in a ring
R there is a homomorphism that has I as its kernel,
Here R/I is a construction that as usual we think of as
“R, but with two elements considered the same if they
Quotients of rings are extremely useful in alge-
braic number theory [IV.1](/part-04/number-theory) because they allow us to
rephrase questions about algebraic numbers as ques-
tions about polynomials. To get an idea of how this is
done, consider the ring Z[X] of all polynomials with
integer coefficients, and the ideal that consists of all
multiples (by integer polynomials) of the polynomial
X 2 + 1. In the quotient of Z[X] by this ideal, we regard
of X 2 + 1. In particular, X 2 is the same as −1. In other
words, in this quotient ring we have a square root of
−1, and in fact the quotient ring is isomorphic to the
ring Z[i] that we met earlier.