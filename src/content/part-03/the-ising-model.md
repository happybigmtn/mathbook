# The Ising Model

III.43.   Jordan Normal Form                                                                                          223

algebraic numbers is countable [III.11](/part-03/countable-and-uncountable-sets), which means,           at most n. A configuration is a way of assigning to
roughly speaking, that they may be listed in order.             each point x in Gn a number σx , which equals 1 or
More precisely, there is a surjective map from N, the           −1. The points represent atoms and σ (x) represents
set of natural numbers, to the set of algebraic num-            whether x has “spin up” or “spin down.” With each
bers. By contrast, the real numbers R are not countable.        configuration σ we associate an “energy” E(σ ), which
                                                                          
Cantor’s famous proof of this uses a diagonalization            equals − σx σy , where the sum is taken over all pairs
argument to show that any listing of all the real num-          of neighboring points x and y. Thus, the energy is high
bers must be incomplete. There must, therefore, be real         if many points have different signs from some of their
numbers that are not algebraic.                                 neighbors, and low if Gn is divided into large clusters
   It is generally rather difficult to prove that a spe-          of points with the same sign.
cific number is transcendental. For instance, it is by              Each configuration is assigned a probability, which
no means the case that all transcendental numbers are           is proportional to e−E(σ )/T . Here, T is a positive real
very well approximated by rationals; this merely pro-           number that represents temperature. The probability
vides a useful sufficient condition. There are other ways         of a given configuration is therefore higher when it has
to establish that numbers are transcendental. Both e            small energy, so there is a tendency for a typical config-
and π are known to be transcendental, and it is known           uration to have clusters of points with the same sign.
that |e − a/b| > C(ε)/b2+ε for all ε > 0, so e is not           However, as the temperature T increases, this clus-
all that well approximated by rationals. Since ζ(2 m) is         tering effect becomes smaller since the probabilities
always a rational multiple of π 2 m , it follows that the        become more equal.
numbers ζ(2), ζ(4), . . . are all transcendental.                  The two-dimensional Ising model with zero potential
   The modern theory of transcendental numbers con-             is the limit of this model as n tends to infinity. For a
tains a wealth of beautiful results. An early one is            more detailed discussion of the general model and of
the Gel’fond–Schneider theorem, which says that αβ              the phase transition associated with it, see probabilis-
is transcendental if α ≠ 0, 1 is algebraic, and     if β is     tic models of critical phenomena [IV.25 §5].
                                             √algebraic but not rational. In particular, 2 2 is tran-
scendental. There is also the six-exponentials theorem,         III.43   Jordan Normal Form
which states that if x1 , x2 are two linearly independent
complex numbers, and if y1 , y2 , y3 are three linearly         Suppose that you are presented with an n . imes n real or
independent complex numbers, then at least one of the           complex matrix [I.3 §4.2](/part-01/fundamental-definitions) A and would like to under-
six numbers                                                     stand it. You might ask how it behaves as a linear map
                                                                [I.3 §4.2](/part-01/fundamental-definitions) on Rn or Cn , or you might wish to know what
          ex1 y1 , ex1 y2 , ex1 y3 , ex2 y1 , ex2 y2 , ex2 y3
                                                                the powers of A are. In general, answering these ques-
is transcendental. Related to this is the (as yet unsolved)     tions is not particularly easy, but for some matrices it
four-exponentials conjecture: if x1 and x2 are two lin-         is very easy. For example, if A is a diagonal matrix (that
early independent complex numbers, and if y1 and y2             is, one whose nonzero entries all lie on the diagonal),
are linearly independent, then at least one of the four         then both questions can be answered immediately: if
exponentials                                                    x is a vector in Rn or Cn , then Ax will be the vector
                                                                obtained by multiplying each entry of x by the corre-
                  ex1 y1 , ex1 y2 , ex2 y1 , ex2 y2
                                                                sponding diagonal element of A, and to compute Am
is transcendental.                                              you just raise each diagonal entry to the power m.
                                                                   So, given a linear map T (from Rn to Rn or from Cn
III.42     The Ising Model                                      to Cn ), it is very nice if we can find a basis with respect
                                                                to which T has a diagonal matrix; if this can be done,
The Ising model is one of the fundamental models of             then we feel that we “understand” the linear map. Say-
statistical physics. It was originally designed as a model      ing that such a basis exists is the same as saying that
for the behavior of a ferromagnetic material when it is         there is a basis consisting of eigenvectors [I.3 §4.3](/part-01/fundamental-definitions):
heated up, but it has since been used to model many             a linear map is called diagonalizable if it has such a
other phenomena.                                                basis. Of course, we may apply the same terminology
  The following is a special case of the model. Let Gn          to a matrix (since a matrix A determines a linear map
be the set of all pairs of integers with absolute value         on Rn or Cn , by mapping x to Ax). So a matrix is also