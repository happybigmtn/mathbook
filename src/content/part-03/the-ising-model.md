# The Ising Model

III.43.   Jordan Normal Form

algebraic numbers is countable [III.11](/part-03/countable-and-uncountable-sets), which means,
roughly speaking, that they may be listed in order.
More precisely, there is a surjective map from N, the
set of natural numbers, to the set of algebraic num-
bers. By contrast, the real numbers R are not countable.
Cantor’s famous proof of this uses a diagonalization
argument to show that any listing of all the real num-
bers must be incomplete. There must, therefore, be real
numbers that are not algebraic.
   It is generally rather difficult to prove that a spe-
cific number is transcendental. For instance, it is by
no means the case that all transcendental numbers are
very well approximated by rationals; this merely pro-
vides a useful sufficient condition. There are other ways
to establish that numbers are transcendental. Both e
and π are known to be transcendental, and it is known
that |e − a/b| > C(ε)/b2+ε for all ε > 0, so e is not
all that well approximated by rationals. Since ζ(2 m) is
always a rational multiple of π 2 m , it follows that the
numbers ζ(2), ζ(4), . . . are all transcendental.
   The modern theory of transcendental numbers con-
tains a wealth of beautiful results. An early one is
the Gel’fond–Schneider theorem, which says that αβ
is transcendental if α ≠ 0, 1 is algebraic, and     if β is     tic models of critical phenomena [IV.25 §5].
algebraic but not rational. In particular, 2 2 is tran-
scendental. There is also the six-exponentials theorem,
which states that if x1 , x2 are two linearly independent
complex numbers, and if y1 , y2 , y3 are three linearly
independent complex numbers, then at least one of the
six numbers

is transcendental. Related to this is the (as yet unsolved)     tions is not particularly easy, but for some matrices it
four-exponentials conjecture: if x1 and x2 are two lin-
early independent complex numbers, and if y1 and y2
are linearly independent, then at least one of the four
exponentials

is transcendental.
III.42     The Ising Model
The Ising model is one of the fundamental models of
statistical physics. It was originally designed as a model
for the behavior of a ferromagnetic material when it is
heated up, but it has since been used to model many
other phenomena.
  The following is a special case of the model. Let Gn
be the set of all pairs of integers with absolute value

223
at most n. A configuration is a way of assigning to
each point x in Gn a number σx , which equals 1 or
−1. The points represent atoms and σ (x) represents
whether x has “spin up” or “spin down.” With each
configuration σ we associate an “energy” E(σ ), which

equals − σx σy , where the sum is taken over all pairs
of neighboring points x and y. Thus, the energy is high
if many points have different signs from some of their
neighbors, and low if Gn is divided into large clusters
of points with the same sign.
Each configuration is assigned a probability, which
is proportional to e−E(σ )/T . Here, T is a positive real
number that represents temperature. The probability
of a given configuration is therefore higher when it has
small energy, so there is a tendency for a typical config-
uration to have clusters of points with the same sign.
However, as the temperature T increases, this clus-
tering effect becomes smaller since the probabilities
become more equal.
The two-dimensional Ising model with zero potential
is the limit of this model as n tends to infinity. For a
more detailed discussion of the general model and of
the phase transition associated with it, see probabilis-
√III.43   Jordan Normal Form
Suppose that you are presented with an n . imes n real or
complex matrix [I.3 §4.2](/part-01/fundamental-definitions) A and would like to under-
stand it. You might ask how it behaves as a linear map
[I.3 §4.2](/part-01/fundamental-definitions) on Rn or Cn , or you might wish to know what
ex1 y1 , ex1 y2 , ex1 y3 , ex2 y1 , ex2 y2 , ex2 y3
the powers of A are. In general, answering these ques-
is very easy. For example, if A is a diagonal matrix (that
is, one whose nonzero entries all lie on the diagonal),
then both questions can be answered immediately: if
x is a vector in Rn or Cn , then Ax will be the vector
obtained by multiplying each entry of x by the corre-
ex1 y1 , ex1 y2 , ex2 y1 , ex2 y2
sponding diagonal element of A, and to compute Am
you just raise each diagonal entry to the power m.
So, given a linear map T (from Rn to Rn or from Cn
to Cn ), it is very nice if we can find a basis with respect
to which T has a diagonal matrix; if this can be done,
then we feel that we “understand” the linear map. Say-
ing that such a basis exists is the same as saying that
there is a basis consisting of eigenvectors [I.3 §4.3](/part-01/fundamental-definitions):
a linear map is called diagonalizable if it has such a
basis. Of course, we may apply the same terminology
to a matrix (since a matrix A determines a linear map
on Rn or Cn , by mapping x to Ax). So a matrix is also