# Ergodic Theorems

$V$ . $9$ .

Ergodic Theorems

proof. It also meant that the chances were rather high that there were errors along the way. Fortunately, in the years since the announcement of the result, various teams of group theorists have been publishing summaries and revisions of many parts of the proof, and a series of volumes containing the whole proof is now well on the way to completion.

$V$ . $8$

Dirichlet’s Theorem

A famous theorem of euclid [VI.2](/part-06/euclid-ca) asserts that there are infinitely many primes. But what if one wants more information about these primes? For instance, are there infinitely many primes of the form $4n - 1$ ? A fairly straightforward modification of Euclid’s argument shows that there are, and a slightly more difficult modification proves that there are infinitely many of the form $4n + 1$ as well. However, modifications of Euclid’s argument are not enough to prove the general result in this direction, which is that if $a$ and $m$ are coprime (that is, have highest common factor $1$ ), then there are infinitely many primes of the form mn  +  a. This was proved by dirichlet [VI.36] using what are now called Dirichlet L-functions [III.47](/part-03/l-functions), which are closely related to the riemann zeta function [IV.2](/part-04/number-theory). The condition that $m$ and $a$ have highest common factor $1$ is clearly necessary, since any common factor of $m$ and $a$ will be a factor of mn  +  a. Dirichlet’s theorem is discussed further in analytic number theory [IV.2](/part-04/number-theory). $V$ . $9$ Ergodic Theorems Vitaly Bergelson Consider the sequence (z n) $\i\text{nf ty}n = {}^{0}$ , where $z$ is a complex number of modulus $1$ . While for $z \neq 1$ our sequence is not convergent, it is not hard to see that, on average, it exhibits quite regular behavior. Indeed, using the formula for the sum of a geometric progression, and assuming that $z \neq 1$ , we have, for any $N > M \ge 0$ , M $z + {}^{zM} + {}^{1} +$ · · · $+ {}^{zN} - {}^{1}N - MM N - M + 1 - {}^{1})$ z ($z_{2} = (N - M)(z - 1)\le (N - M)|z - 1|$ , which implies that when N - M is large enough, the averages $z^{M} + z^{M} + {}^{1} +$ · · · $+ z^{N} - {}^{1}$ A N, M $(z) =N - M689$ are small. More formally, we have ⎧ ⎨ $0$ , $z \neq 1$ , $z^{M} + z^{M} + {}^{1} +$ · · · $+ z^{N} - {}^{1}$ = lim (1) ⎩ $1$ , $N - Mz = 1$ . $N - M \to \i\text{nf ty}$ This simple fact is a special, one-dimensional case of von Neumann’s ergodic theorem, which was the first mathematical statement to throw light on the so-called quasi-ergodic hypothesis in statistical mechanics and the kinetic theory of gases. Von Neumann’s theorem concerns the average behavior of powers of unitary operators [III.50](/part-03/linear-operators-and-their-properties) on hilbert spaces [III.37](/part-03/bayesian-analysis). If U is such an operator defined on a Hilbert space H , then we can associate with U the U-invariant subspace H inv that consists of all vectors f $\in$ H such that $Uf = f$ : that is, all vectors that are fixed by U. Let P be the orthogonal projection [III.50](/part-03/linear-operators-and-their-properties) onto that subspace. Then von Neumann’s theorem asserts that, for every f $\in$ H , $N - 11$ lim $= {}^{0}$ . n - U f P f  N - M \to \i\text{nf ty} N - Mn = M In other words, in a certain sense the averages $N - 11$ U n $N - Mn = M$ converge to the orthogonal projection P . (This is not actually the theorem as formulated by von neumann [VI.91](/part-06/john-von-neumann-19031957), but it is simpler to explain. He proved an equivalent statement about a continuous family of unitary operators (U τ) τ $\in$ R .) Before we discuss various applications and refinements of von Neumann’s theorem, let us briefly comment on its proof. Von Neumann’s original proof used sophisticated machinery such as the spectral theory of one-parameter groups of unitary operators, obtained by Marshall Stone. Over the years many alternative proofs were offered, the simplest being a “geometric” proof due to riesz [VI.74](/part-06/frigyes-frdric-riesz-18801956), which we will describe below. To give the rough idea of von Neumann’s proof it is convenient to use the fact (which follows from the spectral theorem [III.50](/part-03/linear-operators-and-their-properties) ) that any unitary operator U on a Hilbert space H has a “functional model.” That is, we can realize the Hilbert space H as a function space, consisting of all (equivalence classes of) square-integrable functions with respect to some finite measure [III.55](/part-03/measures), in such a way that U becomes a multiplication operator M φ (f)  =  φf , where φ is a complexvalued measurable function that satisfies $|φ(x)| = 1$ for almost every x. It is not hard to see, after passing to such a functional model, that von Neumann’s

690                                                                                            V. Theorems and Problems

theorem follows immediately from its one-dimensional                To simplify the discussion let us now “discretize”
case as expressed by formula (1). Note that in this case         the situation. Instead of considering the continuous
the orthogonal projection to the space of invariant ele-         families (Tτ ) and (Uτ ) we shall fix a transformation
ments takes a function f to the function g such that             T = Tτ0 (say, for τ0 = 1) and let U be the corresponding
g(x) = f (x) if φ(x) = 1 and g(x) = 0 otherwise.                 unitary operator. Assume that our volume-preserving
  Riesz’s proof is based on the observation that the             transformation T is ergodic, which means that there
orthogonal complement of the subspace Hinv of U-in-              is no proper subset A ⊂ X of positive volume such
variant vectors is spanned by the set of vectors of the          that T (A) ⊂ A. This assumption can easily be shown
form Ug − g. To see this, note first that if f ∈ Hinv ,           to be equivalent to the fact that the only elements of
then                                                             L2 (X) that satisfy Uf = f are the constant functions.
              f , U g = U −1 f , g = f , g,                It follows from von Neumann’s theorem that for any
                                                                 f ∈ L2 (X) the averages
from which it follows that f , U g − g = 0 and thus
                                                                                                1    
                                                                                                    N−1
that f is orthogonal to Ug − g. Conversely, if f ∈ Hinv ,                      AN, M (f ) =             U nf
then f , U f − f  = f , U f  − f , f . This is less than                                N − M n=M
0, by the cauchy–schwarz inequality [V.19](/part-05/inequalities) and the               converge to a constant whose value is easy to find
fact that U f  = f  but Uf = f . In particular, f is        by performing term-by-term integration: it is equal to
not orthogonal to U f − f . Thus, Hinv is the orthogonal         ( f dm)/vol(X). Since von Neumann’s theorem also
complement of the (closed) subspace of H generated               tells us that lim N−M→\infty AN, M (f ) is always a U -invariant
by functions of the form U g − g.                                function, we see that the assumption of ergodicity is a
   Now the conclusion of von Neumann’s theorem holds             necessary and sufficient condition for the time average
trivially if f ∈ Hinv , since then P f = f and U n f = f for     represented by lim N−M→\infty AN, M (f ) to equal the space
every n. On the other hand, if f = Ug − g, then P f = 0.         average, ( f dm)/vol(X).
As for the averages, we know that U n f = U n+1 g −U n g,           It is also possible to use von Neumann’s theorem
                                N−1
from which it follows that n=M U n f = U N g − U M g.            to strengthen a classical theorem of poincaré [VI.61](/part-06/jules-henri-poincar-18541912),
Since U N g − U M g is at most 2g for every M and            called Poincaré’s recurrence theorem. This result states
N, we find that                                                   that if X is a set of finite volume, as above, and A is
                             
                            N−1                                  a subset of X with nonzero volume, then “almost all
                        1
                                U nf                             points of A return infinitely often to A.” In other words,
                      N − M n=M
                                                                 if we set Ã to be the set of all points x ∈ A such that
has norm at most 2g/(N − M) and hence tends to 0.              T n x ∈ A for infinitely many n, then the measure of the
So the theorem is true in this case as well. It is straight-     set of points in A but not in Ã is 0. The main step in
forward to check that the set of functions for which             the proof of Poincaré’s theorem is to prove the same
the theorem holds is a closed linear subspace of H ,             about the set A1 , which consists of all points x ∈ A
and therefore the theorem is proved.                             such that T n x ∈ A for some positive integer n. To see
   The reason that von Neumann’s theorem and other               why this is true, let B be the set of all points in A but
similar results are relevant to physics is that it is often      not in A1 . The sets B, T −1 B, T −2 B, . . . all have the same
possible to represent the evolution of the parameters            measure, since T is volume preserving. (T −n B is defined
associated with a physical system by a subset X ⊂ Rd             to be the set of all x such that T n x ∈ B.) Since X has
that has finite d-dimensional volume, together with a             finite volume, there must exist positive integers m and
continuous family (Tτ )τ∈R of volume-preserving trans-           n such that the intersection of T −m B and T −(m+n) B
formations from X to X. With each such transforma-               has positive measure, and from this it follows that the
tion Tτ one can associate the unitary map Uτ , defined            measure of B ∩ T −n B is also positive. But if x ∈ B then
on L2 (X) (the Hilbert space of square-integrable func-          x ∈ A1 , so T n x ∈ A and therefore T n x ∈ B, so this is
tions on X) by the formula (Uτ f )(x) = f (Tτ x).                a contradiction.
The fact that these maps are unitary follows from                   Now let us apply the von Neumann ergodic theorem
the fact that the transformations Tτ preserve volume;            with f equal to the characteristic function of a set A
also, it follows from the fact that the transformations          (that is, f (x) = 1 when x ∈ A and f (x) = 0 otherwise)
Tτ depend continuously on τ that the maps Uτ do                  and U defined in terms of T as before. Suppose also that
as well.                                                         the set X has volume 1 and write \mu for the measure on

