# Knot Polynomials

III.44.   Knot Polynomials

sizes depending on the block sizes. Note that a block
of size 1 simply consists of an eigenvector.
  Once a matrix A is put into Jordan normal form, we
have broken up the space into subspaces on which it
is easy to understand the action of A. For example,
suppose that A is the matrix

which is made out of three blocks, of sizes 3, 2, and 2.
Then we can instantly read off a great deal of informa-
tion about A. For instance, consider the eigenvalue 4.
Its algebraic multiplicity (its multiplicity as a root of the
characteristic polynomial) is 5, since it is the sum of the
sizes of all the blocks with eigenvalue 4, while its geo-
metric multiplicity (the dimension of its eigenspace) is
2, since it is the number of such blocks (because in each
block we only have one actual eigenvector). And even
the minimal polynomial of the matrix (the smallest-
degree polynomial P (t) such that P (A) = 0) is easy
to write down. The minimal polynomial of each block
can be written down instantly: if the block has size k
and generalized eigenvalue λ, then it is (t − λ)k . The
minimal polynomial of the whole matrix is then the
“lowest common multiple” of the polynomials for the
individual blocks. For the matrix above, we get (t − 4)3 ,
(t−4)2 , and (t−2)2 for the three blocks, so the minimal
polynomial of the whole matrix is (t − 4)3 (t − 2)2 .
  There are some generalizations of Jordan normal
form, away from the context of linear maps acting on
vector spaces. For example, there is an analogue of the
theorem that applies to Abelian groups, which turns
out to be the statement that every finite Abelian group
can be decomposed as a direct product of cyclic groups.
III.44 Knot Polynomials

A knot is a curve in three-dimensional space that is
closed (in other words, it stops where it began) and
never meets itself along its way. A link is several such
curves, all disjoint from one another, which are called

225
the components of the link. Some simple examples of
knots and links are the following:
⎛
4 0 0 0 0 0 0
⎜
⎜1 4 0 0 0 0 0⎟
⎜
⎜
⎜0 1 4 0 0 0 0⎟
⎜
⎜0 0 0 4 0 0 0⎟ ,
⎜
⎜
⎜0 0 0 1 4 0 0⎟
⎜
⎜0 0 0 0 0 2 0⎟
⎝
0 0 0 0 0 1 2
be moved continuously, never breaking the “string,” to
become the other. Isotopy is the technical term for such
movement. For example, the following knots are the
same:
The first problem in knot theory is how to decide
whether two knots are the same. Two knots may appear
to be very different but how does one prove that they
are different? In classical geometry two triangles are
the same (or congruent ) if one can be moved rigidly
on to the other. Numbers that measure side-lengths
and angles are assigned to each triangle to help deter-
mine whether this is the case. Similarly, mathematical
entities called invariants can be associated with knots
and links in such a way that if two links have differ-
ent invariants, then they cannot be the same link. Many
invariants relate to the geometry or topology of the
complement of a link in three-dimensional space. The
fundamental group [IV.6 §2](/part-04/algebraic-topology) of this complement is
an excellent invariant, but algebraic techniques are then
needed to distinguish the groups. The polynomial of
J. W. Alexander (published in 1926) is a link invari-
ant derived from distinguishing such groups. Although
rooted in algebraic topology [IV.6](/part-04/algebraic-topology), the Alexander
polynomial has long been known to satisfy a skein rela-
tion (see below). The HOMFLY polynomial of 1984 gen-
W. B. R. Lickorish
the simple combinatorics of skein theory alone.
1 Knots and Links
1.1   The HOMFLY Polynomial
Suppose that links are oriented so that directions, indi-
cated by arrows, are given to all components. To each
oriented link L is assigned its HOMFLY polynomial

226

P (L), a polynomial with integer coefficients in two vari-
ables v and z (allowing both positive and negative
powers of v and z). The polynomials are such that

and there is a linear skein relation

This means that equation (2) holds whenever three
links have identical diagrams except near one crossing
where they are as follows

then this equation holds.
   This turns out to be good notation, although one
could in principle use x and y in place of v −1 and −v.
Although Alexander’s polynomial satisfied a particular
instance of (2), it took almost sixty years and the discov-
ery of the Jones polynomial for it to be realized that this
general linear relation can be used. Note that there are
two possible types of crossing in a diagram of an ori-
ented link. A crossing is positive if, when approaching
the crossing along the under-passing arc in the direc-
tion of the arrow, the other directed arc is seen to cross
over from left to right. If the over-passing arc crosses
from right to left, the crossing is negative. When inter-
preting the skein relation at a crossing of a link L, it is
vital that L be regarded as L+ if the crossing is positive
and as L− if it is negative.
   The theorem that underpins this theory, which is
not at all obvious, is that it is possible to assign such
polynomials to oriented links in a coherent fashion,
uniquely, independent of any choice of a link’s diagram.
A proof of this is given in Lickorish (1997).

1.2   HOMFLY Calculations

In a diagram of a knot it is always possible to change
some of the crossings, from over to under, to achieve a
diagram of the unknot. Links can be undone similarly.
Using this, the polynomial of any link can be calculated
from the above equations, though the length of the cal-
culation is exponential in the number of crossings. The
following is a calculation of P (trefoil). Firstly, consider
the following instance of the skein relation:

Substituting the polynomial 1 for the polynomials of
the two unknots, this shows that the HOMFLY polyno-
mial of the two-component unlink is z −1 (v −1 − v). A

III. Mathematical Concepts
second usage of the skein relation is
v −1 P
P (unknot) = 1                        (1)   Substituting the previous answer for the unlink shows
that the HOMFLY polynomial of the Hopf link is equal to
z −1 (v −3 − v −1 ) − zv −1 . Finally, consider the following
v −1 P (L+ ) − v P (L− ) = z P (L0 ).
instance of the skein relation:
v −1 P
Substitution of the polynomial already calculated for
the Hopf link and of course the value 1 for the unknot
L+
shows that
P (trefoil) = −v −4 + 2 v −2 + z2 v −2 .
A similar calculation shows that
P (figure eight) = v 2 − 1 + v −2 − z2 .
The trefoil and the figure eight thus have different poly-
nomials; this proves they are different knots. Experi-
mentally, if a trefoil is actually made from a necklace
(using the clasp to join the ends together) it is indeed
found to be impossible to move it to the configuration
of a figure eight knot. Note that the polynomial of a
knot is not dependent on the choice of its orientation
(but this is not so for links).
Reflecting a knot in a mirror is equivalent to chang-
ing every crossing in a diagram of the knot from an
over-crossing to an under-crossing and vice versa (con-
sider the plane of the diagram to be the mirror). The
polynomial of the reflection is always the same as that
of the original knot except that every occurrence of v
must be replaced by one of −v −1 . Thus the trefoil and
its reflection,
,
have polynomials
−v −4 + 2 v −2 + z2 v −2     and   − v 4 + 2 v 2 + z2 v 2 .
As these polynomials are not the same, the trefoil and
its reflection are different knots.
2   Other Polynomial Invariants
The HOMFLY polynomial was inspired by the discov-
v −1 P (
ery in 1984 of the polynomial of V. F. R. Jones. For
an oriented link L, the Jones polynomial V (L) has just
one variable t (together with t −1 ). It is obtained from
P (L) by substituting v = t and z = t 1/2 − t −1/2 , where