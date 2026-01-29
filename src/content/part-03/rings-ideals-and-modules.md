# Rings, Ideals, and Modules

284                                                                                       III. Mathematical Concepts

riemann [VI.49], who formulated the famous riemann           We can also take quotients [I.3 §3.3](/part-01/fundamental-definitions), but in order to
hypothesis [IV.2 §3](/part-04/number-theory).                                        discuss these we must introduce the notion of an ideal.
  The Riemann zeta function is just one of a family
of functions that encode important number-theoretic                                 2   Ideals
information. For example, the Dirichlet L-functions are
closely related to the distribution of primes in arith-      A typical quotient construction for an algebraic struc-
metic progressions. For more details about these and         ture A will identify some substructure B and regard two
about the Riemann zeta function itself, see analytic         elements of A as “equivalent” if they “differ by an ele-
number theory [IV.2](/part-04/number-theory). Some more sophisticated zeta           ment of B.” If A is a group or a vector space [I.3 §2.3](/part-01/fundamental-definitions),
functions are described in the weil conjectures              then B will be a subgroup or a subspace. However, the
[V.35](/part-05/the-weil-conjectures). See also L-functions [III.47](/part-03/l-functions).                       situation for rings is slightly different.
                                                                We can see why if we think about quotients in another
                                                             way: as images of homomorphisms [I.3 §4.1](/part-01/fundamental-definitions). The sub-
III.81   Rings, Ideals, and Modules                          structures that we like to quotient by are the kernels
                                                             of these homomorphisms, so we should ask ourselves
                       1   Rings                             what the kernel of a ring homomorphism (that is, the
A ring, like a group [I.3 §2.1](/part-01/fundamental-definitions) or a field [I.3 §2.2](/part-01/fundamental-definitions), is     set of elements that map to 0) will be like.
an algebraic structure that satisfies certain axioms. To         If φ : R → R is a homomorphism between two rings,
remember the axioms for both rings and fields at the          and φ(a) = φ(b) = 0, then φ(a + b) = 0. Also, if
same time, it is helpful to think of two simple examples:    r is any element of R, then φ(r a) = φ(r )φ(a) = 0.
with the two operations of addition and multiplication,      Thus, the kernel of a homomorphism is closed under
the set Z of all integers forms a ring and the set Q of      addition, and also under multiplication by any element
all rational numbers forms a field. In general, a ring is a   of the ring. These two properties define the notion of
set R with two binary operations [I.2 §2.4](/part-01/language-and-grammar), denoted         an ideal. For example, the set of all even integers is
by “+” and “×”, which satisfies all the field axioms apart     an ideal in Z. In interesting cases, ideals are not sub-
from the one that says that nonzero elements have            rings, since if an ideal contains 1 then it must con-
multiplicative inverses.                                     tain r for every r in the ring. (An example that makes
   Although the integers are the prototypical example        the difference very clear is the subset of the ring of all
of a ring, the notion arose historically as an abstraction   polynomials that consists of all constant polynomials.
from several sources, one of which was polynomials.          The constants form a subring, but they certainly do not
Like integers, polynomials (with real coefficients, say)       form an ideal.)
can be added and multiplied, and these operations have          It is not hard to show that for any ideal I in a ring
all the properties one might expect, such as the fact        R there is a homomorphism that has I as its kernel,
that multiplication is distributive over addition, so the    namely the quotient map from R to the quotient R/I.
space of such polynomials forms a ring. Other exam-          Here R/I is a construction that as usual we think of as
ples include the integers modulo n (for any positive         “R, but with two elements considered the same if they
integer n), the rationals (or indeed any other field), and    differ by an element of I.”
the set Z[i] of all complex numbers a + bi such that a          Quotients of rings are extremely useful in alge-
and b are integers.                                          braic number theory [IV.1](/part-04/number-theory) because they allow us to
   Sometimes the assumptions that multiplication is          rephrase questions about algebraic numbers as ques-
commutative and has an identity element are dropped.         tions about polynomials. To get an idea of how this is
This leads to a more complicated theory, but it does         done, consider the ring Z[X] of all polynomials with
encompass important examples such as the set of all          integer coefficients, and the ideal that consists of all
n \times n matrices (with elements in a given field, or even       multiples (by integer polynomials) of the polynomial
just a ring).                                                X 2 + 1. In the quotient of Z[X] by this ideal, we regard
   As with other algebraic structures, there are several     two polynomials as the same if they differ by a multiple
ways of forming new rings from old ones: for instance,       of X 2 + 1. In particular, X 2 is the same as −1. In other
we can take subrings and direct products of two rings.       words, in this quotient ring we have a square root of
Slightly less obviously, we can start with a ring R and      −1, and in fact the quotient ring is isomorphic to the
form the ring of all polynomials with coefficients in R.       ring Z[i] that we met earlier.

