# Jordan Normal Form

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
complex numbers, and if y1 , y2 , y3 are three linearly         Suppose that you are presented with an n \times n real or
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

$224$

called diagonalizable if it has a basis of eigenvectors, or equivalently if there is an invertible matrix P such that $P - 1AP$ is diagonal. Is every matrix diagonalizable? Over the reals, the answer is no for uninteresting reasons, since there need not even be any eigenvectors: for example, a rotation in the plane clearly has no eigenvectors. So let us restrict our attention to matrices and linear maps over the complex numbers. If we have a matrix A, then its characteristic polynomial, namely det (A  -  t I), certainly has a root, by the fundamental theorem of algebra [V.13](/part-05/the-fundamental-theorem-of-algebra). If $\lambda$ is such a root, then standard facts from linear algebra tell us that $A - \lambda I$ is singular, and therefore that there is a vector x such that $(A - \lambda I)x = 0$ , or equivalently that $Ax = \lambda x.$ So we do have at least one eigenvector. Unfortunately, however, there need not be enough eigenvectors to form a basis. For example, consider the linear map T that sends (1, 0) to (0, 1) and (0, 1) to (0, 0). The matrix of this map (with respect to the obvious basis) is $({}^{0100})$ . This matrix is not diagonalizable. One way of seeing why not is the following. The characteristic polynomial turns out to be $t^{2}$ , of which the only root is $0$ . An easy computation reveals that if $Ax = 0$ then $x$ has to be a multiple of ( $0$ , $1$ ), so we cannot find two linearly independent eigenvectors. A rather more elegant method of proof is to observe that $T^{2}$ is the zero matrix (since it maps each of (1, 0) and (0, 1) to (0, 0) ), so that if T were diagonalizable, then its diagonal matrix would have to be zero (since any nonzero diagonal matrix has a nonzero square), and therefore T would have to be the zero matrix, which it is not. The same argument shows that any matrix A such that $A^{k} = 0$ for some k  (  such matrices are called nilpotent) must fail to be diagonalizable, unless A is itself the zero matrix. This applies, for example, to any matrix that has all of its nonzero entries below the main diagonal. What, then, can we say about our non diagonalizable matrix T above? In a sense, one feels that ( $1$ , $0$ ) is “nearly” an eigenvector, since we do have $T^{2}(1$ , $0) = ( 0$ , $0$ ). So what happens if we extend our point of view by allowing such vectors? One would say that a vector x is a generalized eigenvector of T , with eigenvalue $\lambda,$ if some power of $T - \lambda$ maps $x$ to zero. For instance, in our example above the vector ( $1$ , $0$ ) is a generalized eigenvector with eigenvalue $0$ . And, just as we have an “eigenspace” associated with each eigenvalue $\lambda$ (defined to be the space of all eigenvectors with eigenvalue $\lambda$ ), we also have a “generalized eigenspace,”

III. Mathematical Concepts

which consists of all generalized eigenvectors with eigenvalue $\lambda.$ Diagonalizing a matrix corresponds exactly to decomposing the vector space (C n) into eigenspaces. So it is natural to hope that one could decompose the vector space into generalized eigenspaces for any matrix. And this turns out to be true. The way of breaking up the space is called Jordan normal form, which we shall now describe in more detail. Let us pause for a moment and ask: what is the very simplest situation in which we get a generalized eigenvector? It would surely be the obvious generalization of the above example to n dimensions. In other words, we have a linear map T that sends $e^{1}$ to $e^{2}$ , $e^{2}$ to $e^{3}$ , and so on, until e n $- {}^{1}$ is sent to e n , with e n itself mapped to zero. This corresponds to the matrix ⎞ ⎛

0 0 0 ··· 0 0

⎟

⎜

⎜ 1 0 0 · · · 0 0 ⎟

⎟

⎜

⎜ 0 1 0 · · · 0 0$⎟ ⎟ . ⎜ .. ⎟ ⎜ . .. .. .. .. ⎟ ⎜ . / . ⎠ ⎝ . / . /$0 0 0 ··· 1 0

Although this matrix is not diagonalizable, its behavior is at least very easy to understand. The Jordan normal form of a matrix will be a diagonal sum of matrices that are easily understood in the way that this one is. Of course, we have to consider eigenvalues other than zero: accordingly, we define a block to be any matrix of the form ⎞ ⎛

$\lambda 0 0$ ··· 0 0

⎟

⎜

⎜ $1 \lambda 0$ · · · 0 0 ⎟

⎟

⎜

⎜ $0 1 \lambda$ · · · 0 0$⎟ ⎟ . ⎜ ⎜ . .. ⎟ .. .. .. .. ⎟ ⎜ . / ⎝ . . ⎠ / . /$0 0 0 ··· $1 \lambda$

Note that this matrix A, with $\lambda I$ subtracted, is precisely the matrix above, so that (A $- \lambda$ I) n is indeed zero. Thus, a block represents a linear map that is indeed easy to understand, and all its vectors are generalized eigenvectors with the same eigenvalue. The Jordan normal form theorem tells us that every matrix can be decomposed into such blocks: that is, a matrix is in Jordan normal form if it is of the form ⎛ ⎞ $0$ ··· $B_{0}$

⎜ 1

⎟

⎜ 0 B 2 · · ·

$0$ ⎟

⎜

⎟

⎜ .

⎟ . / .

..

⎜ ..

.. ⎟

.. / ⎝

⎠

$0$ · · · $B^{k}0$

Here, the B i are blocks, which can have different sizes, and the $0s$ represent submatrices of the matrix with
