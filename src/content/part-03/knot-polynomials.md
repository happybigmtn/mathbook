# Knot Polynomials

III.44.   Knot Polynomials                                                                                            225

sizes depending on the block sizes. Note that a block           the components of the link. Some simple examples of
of size 1 simply consists of an eigenvector.                    knots and links are the following:
  Once a matrix A is put into Jordan normal form, we
have broken up the space into subspaces on which it
is easy to understand the action of A. For example,
suppose that A is the matrix
             ⎛                        ⎞                               unknot             trefoil        figure eight
               4 0 0 0 0 0 0
             ⎜                        ⎟
             ⎜1 4 0 0 0 0 0⎟
             ⎜                        ⎟
             ⎜                        ⎟
             ⎜0 1 4 0 0 0 0⎟
             ⎜                        ⎟
             ⎜0 0 0 4 0 0 0⎟ ,
             ⎜                        ⎟
             ⎜                        ⎟
             ⎜0 0 0 1 4 0 0⎟                                           unlink           Hopf link     Whitehead link
             ⎜                        ⎟
             ⎜0 0 0 0 0 2 0⎟
             ⎝                        ⎠                           Two knots are equivalent or “the same” if one can
               0 0 0 0 0 1 2
                                                                be moved continuously, never breaking the “string,” to
which is made out of three blocks, of sizes 3, 2, and 2.        become the other. Isotopy is the technical term for such
Then we can instantly read off a great deal of informa-          movement. For example, the following knots are the
tion about A. For instance, consider the eigenvalue 4.          same:
Its algebraic multiplicity (its multiplicity as a root of the
characteristic polynomial) is 5, since it is the sum of the
sizes of all the blocks with eigenvalue 4, while its geo-
metric multiplicity (the dimension of its eigenspace) is
2, since it is the number of such blocks (because in each          The first problem in knot theory is how to decide
block we only have one actual eigenvector). And even            whether two knots are the same. Two knots may appear
the minimal polynomial of the matrix (the smallest-             to be very different but how does one prove that they
degree polynomial P (t) such that P (A) = 0) is easy            are different? In classical geometry two triangles are
to write down. The minimal polynomial of each block             the same (or congruent ) if one can be moved rigidly
can be written down instantly: if the block has size k          on to the other. Numbers that measure side-lengths
and generalized eigenvalue λ, then it is (t − λ)k . The         and angles are assigned to each triangle to help deter-
minimal polynomial of the whole matrix is then the              mine whether this is the case. Similarly, mathematical
“lowest common multiple” of the polynomials for the             entities called invariants can be associated with knots
individual blocks. For the matrix above, we get (t − 4)3 ,      and links in such a way that if two links have differ-
(t−4)2 , and (t−2)2 for the three blocks, so the minimal        ent invariants, then they cannot be the same link. Many
polynomial of the whole matrix is (t − 4)3 (t − 2)2 .           invariants relate to the geometry or topology of the
  There are some generalizations of Jordan normal               complement of a link in three-dimensional space. The
form, away from the context of linear maps acting on            fundamental group [IV.6 §2](/part-04/algebraic-topology) of this complement is
vector spaces. For example, there is an analogue of the         an excellent invariant, but algebraic techniques are then
theorem that applies to Abelian groups, which turns             needed to distinguish the groups. The polynomial of
out to be the statement that every finite Abelian group          J. W. Alexander (published in 1926) is a link invari-
can be decomposed as a direct product of cyclic groups.         ant derived from distinguishing such groups. Although
                                                                rooted in algebraic topology [IV.6](/part-04/algebraic-topology), the Alexander
                                                                polynomial has long been known to satisfy a skein rela-
III.44 Knot Polynomials
                                                                tion (see below). The HOMFLY polynomial of 1984 gen-
           W. B. R. Lickorish                                   eralizes the Alexander polynomial and can be based on
                                                                the simple combinatorics of skein theory alone.
                  1 Knots and Links
                                                                1.1   The HOMFLY Polynomial
A knot is a curve in three-dimensional space that is
closed (in other words, it stops where it began) and            Suppose that links are oriented so that directions, indi-
never meets itself along its way. A link is several such        cated by arrows, are given to all components. To each
curves, all disjoint from one another, which are called         oriented link L is assigned its HOMFLY polynomial

226                                                                                                 III. Mathematical Concepts

P (L), a polynomial with integer coefficients in two vari-              second usage of the skein relation is
ables v and z (allowing both positive and negative
powers of v and z). The polynomials are such that                              v −1 P        − v P          = z P            .

                          P (unknot) = 1                        (1)   Substituting the previous answer for the unlink shows
and there is a linear skein relation                                  that the HOMFLY polynomial of the Hopf link is equal to
                                                                      z −1 (v −3 − v −1 ) − zv −1 . Finally, consider the following
                 v −1 P (L+ ) − v P (L− ) = z P (L0 ).            (2)
                                                                      instance of the skein relation:
This means that equation (2) holds whenever three
links have identical diagrams except near one crossing                     v −1 P           − v P             = z P              .
where they are as follows
                                                                      Substitution of the polynomial already calculated for
                                                                      the Hopf link and of course the value 1 for the unknot
          L+                L−             L0          ,
                                                                      shows that
then this equation holds.                                                        P (trefoil) = −v −4 + 2 v −2 + z2 v −2 .
   This turns out to be good notation, although one                     A similar calculation shows that
could in principle use x and y in place of v −1 and −v.
Although Alexander’s polynomial satisfied a particular                           P (figure eight) = v 2 − 1 + v −2 − z2 .
instance of (2), it took almost sixty years and the discov-           The trefoil and the figure eight thus have different poly-
ery of the Jones polynomial for it to be realized that this           nomials; this proves they are different knots. Experi-
general linear relation can be used. Note that there are              mentally, if a trefoil is actually made from a necklace
two possible types of crossing in a diagram of an ori-                (using the clasp to join the ends together) it is indeed
ented link. A crossing is positive if, when approaching               found to be impossible to move it to the configuration
the crossing along the under-passing arc in the direc-                of a figure eight knot. Note that the polynomial of a
tion of the arrow, the other directed arc is seen to cross            knot is not dependent on the choice of its orientation
over from left to right. If the over-passing arc crosses              (but this is not so for links).
from right to left, the crossing is negative. When inter-                Reflecting a knot in a mirror is equivalent to chang-
preting the skein relation at a crossing of a link L, it is           ing every crossing in a diagram of the knot from an
vital that L be regarded as L+ if the crossing is positive            over-crossing to an under-crossing and vice versa (con-
and as L− if it is negative.                                          sider the plane of the diagram to be the mirror). The
   The theorem that underpins this theory, which is                   polynomial of the reflection is always the same as that
not at all obvious, is that it is possible to assign such             of the original knot except that every occurrence of v
polynomials to oriented links in a coherent fashion,                  must be replaced by one of −v −1 . Thus the trefoil and
uniquely, independent of any choice of a link’s diagram.              its reflection,
A proof of this is given in Lickorish (1997).

                                                                                                                    ,
1.2   HOMFLY Calculations

In a diagram of a knot it is always possible to change
                                                                      have polynomials
some of the crossings, from over to under, to achieve a
diagram of the unknot. Links can be undone similarly.                   −v −4 + 2 v −2 + z2 v −2     and   − v 4 + 2 v 2 + z2 v 2 .
Using this, the polynomial of any link can be calculated              As these polynomials are not the same, the trefoil and
from the above equations, though the length of the cal-               its reflection are different knots.
culation is exponential in the number of crossings. The
following is a calculation of P (trefoil). Firstly, consider                    2   Other Polynomial Invariants
the following instance of the skein relation:
                                                                      The HOMFLY polynomial was inspired by the discov-
      v −1 P (         ) − v P (        ) = z P (            ).
                                                                      ery in 1984 of the polynomial of V. F. R. Jones. For
Substituting the polynomial 1 for the polynomials of                  an oriented link L, the Jones polynomial V (L) has just
the two unknots, this shows that the HOMFLY polyno-                   one variable t (together with t −1 ). It is obtained from
mial of the two-component unlink is z −1 (v −1 − v). A                P (L) by substituting v = t and z = t 1/2 − t −1/2 , where

