# Transforms

III.91.   Transforms                                                                                                               303

The Zariski topology. This is used in algebraic                       whose union is X), we may find a finite subcollection
geometry [IV.4](/part-04/algebra). It is specified by giving its closed sets             {U1 , . . . , Uk } ⊆ C that still covers X. Specializing this
(and hence, by complement at i on, its open sets)—these                  definition to R2 with the usual topology, it can indeed
are the zero loci of systems of polynomial equations.                 be proved that a set S ⊆ R2 is compact (in the subspace
On C2 , for example, these closed sets are precisely the              topology) if and only if it is closed and bounded. See
sets of the form                                                      compactness and compact if ic at i on [III.9](/part-03/compactness-and-compactication) for more
                                                                      information.
{(z1 , z2 ) : f1 (z1 , z2 ) = f2 (z1 , z2 )
                                      = · · · = fk (z1 , z2 ) = 0},
                                                                      III.91 Transforms
where f1 , . . . , fk are polynomials. To show that this
                                                                                T. W. Körner
defines a topology is somewhat nontrivial, the diffi-
culty being to show that an arbitrary intersection of                 If we have a finite sequence a0 , a1 , . . . , an of real num-
closed sets is closed (which is equivalent to the asser-              bers (written briefly as a), then we can look at the
tion that an arbitrary union of open sets is open). This              polynomial
is a consequence of Hilbert’s basis theorem.
                                                                                    Pa (t) = a0 + a1 t + · · · + an t n .
  The notion of topological space is a very good exam-
                                                                      Conversely, given a polynomial Q of degree m ⩽ n, we
ple of the power of abstraction in mathematics. The
                                                                      can recover a unique sequence b0 , b1 , . . . , bn such that
definition is simple and covers a wide variety of nat-
ural situations, yet it has enough content that one                                  Q(t) = b0 + b1 t + · · · + bn t n
can make interesting definitions and prove theorems                    by, for example, taking bk = Q(k) (0)/k!.
purely within the world of topological spaces. It is often              We observe that if a0 , a1 , . . . , an and b0 , b1 , . . . , bn
fun to take a familiar concept, that applies to R or R2 ,             are finite sequences, then
say, and try to find an analogue of it in the world of
general topological spaces. We give two examples.                                        Pa (t)Pb (t) = Pa∗b (t),
                                                                      where a ∗ b = c is a sequence c0 , c1 , . . . , c2 n given by
Connectedness. The rough idea of connectedness is
that a connected set is one that does not break up into                           ck = a0 bk + a1 bk−1 + · · · + ak b0 ,
pieces in an obvious way. Most people would imagine                   where we interpret ai and bi as 0 if i > n. This sequence
that they could discern, from a list of pictures of rea-              is called the convolution of the sequences a and b.
sonably sensible subsets of R2 , which were connected                    To see the kind of use that one can make of this
and which were not. But can one give a precise math-                  observation, consider what happens when we throw
ematical definition that applies to all sets, including                two dice, the first of which has probability au of show-
potentially very wild ones, and says whether they are                 ing u and the second of which has probability bv of
connected or not? For example, is the space                           showing v. The probability that their sum is k is given
            S = ((Q \times R) ∪ (R \times Q)) \ (Q \times Q),                        by the number ck defined above. If we take both au and
which consists of all points with exactly one rational                bu to be the probability of throwing u with an ordinary
                                                                                                       1
coordinate, connected or not (with the subspace topol-                fair die (so they are equal to 6 if 1 ⩽ u ⩽ 6, and 0
ogy)? It turns out that a definition can indeed be given,              otherwise), then
and moreover that it applies not just to R2 but to gen-                             Pc (t) = Pa (t)Pb (t)
eral topological spaces. We say that a space X is con-
                                                                                           = ( 16 (t + t 2 + · · · + t 6 ))2 .
nected if there is no decomposition X = U1 ∪ U2 of X
into two disjoint, nonempty, open sets. We leave it to                This polynomial can be rewritten as
the reader to decide whether S is connected or not.                    1              4   2            2             3
                                                                       36 (t(t + 1)(t + t + 1))(t(t + t + 1)(t + 1))
Compactness. This is one of the most important con-                            1
                                                                            = 36 (t(t + 1)(t 2 + t + 1))(t(t 4 + t 2 + 1)(t 3 + 1))
cepts in all of mathematics, but it can appear strange
                                                                            = PA (t)PB (t),
at first sight. It comes from attempting to abstract the
notion of a closed and bounded set (in R2 , say) to a                 where A and B are two different sequences, given by
general topological space. We say that X is compact if,               A1 = A4 = 16 , A2 = A3 = 26 , and Au = 0 otherwise,
                                                                                                           1
given any collection C of open sets U that cover X (i.e.,             and B1 = B3 = B4 = B5 = B6 = B8 = 6 , and Bv = 0

$304$

otherwise. Thus, if we take two fair dice A and B and number A so that it has $2$ on two faces, $3$ on two faces, $1$ on one face, and $4$ on the remaining face, and we number B so that it has $1$ , $3$ , $4$ , $5$ , $6$ , and $8$ on its faces, then the probability of throwing a sum k is the same as with an ordinary pair of dice. It is not hard to show, by considering the roots of the polynomial $t + t^{2} +$ · · · $+ t^{6}$ , that this is the only nonstandard labeling of dice with strictly positive integers that has this property. These general ideas are easily extended to infinite sequences. If a is the sequence $a^{0}$ , $a^{1}$ , . . . , we can define

$\i\text{nf ty}$

an “infinite polynomial” (Ga) (t) to be r $= 0$ a r t r . For the moment, we shall proceed formally, without worrying in what sense the sum exists. Observe that, much as before, (Ga) (t) (Gb) (t)  =  (G (a ∗ b)) (t), where the infinite sequence $c = a$ ∗ b is given by $c^{k} = a^{0}b^{k} + a^{1}b^{k} - {}^{1} +$ · · · $+ a^{k}b^{0}$ . (Again , we call this the convolution of $a$ and $b$ .) There is a well-known problem in which we are asked how many ways there are of making change for r units of currency using notes of given denominations. (For example, we can ask how many ways there are of making 43$\text{out of} 1$ and 5 bills .) If we can make r units in a r ways using one set of denominations and b r ways using a completely different set, then it is not hard to see that, if we are allowed to use both sets of denominations, we can make up k units in c k ways, where c k is again the number defined earlier. Let us see how this applies in the simple case where a r is the number of ways of making up r dollars using 1 bills and b r is the number of ways of making up r dollars using 2 bills. We observe that $\i\text{nf ty}1$ r (Ga) (t) = $t =$ , - $1$ t $r = 0\i\text{nf ty}1$t2 r = (Gb) (t) = , - $t21r = 0$ and so, using partial fractions, (Gc) (t) = (G (a ∗ b)) (t) = (Ga) (t) (Gb) (t) $11 = =(1t)(1$ t2 ) (1 t)2(1 + t)111 + = + 2(1 t)24(1 + t)4(1 t)\i\text{nf ty}\i\text{nf ty}\i\text{nf ty}111 r(r + 1)$tr +$( - 1)r$tr + =$ t_{4}24 r = 0 r = 0 r = 0\i\text{nf ty}2 r + 3 + ( - 1)r$t r . =$4 r = 0 III. Mathematical Concepts Thus we can make change for r dollars in $\frac{1}{2}(r + 1)$ ways when r is odd and $\frac{1}{2}(r + 2)$ ways when r is even. In this simple case it is easy to obtain the result directly but the method indicated works automatically in all cases. (The calculations can be made easier if we allow ourselves to work with complex roots .) We have produced a “generating function transform” or “G-transform,” which takes a sequence $a_{0}$ , $a_{1}$ , . . . $\i\text{nf ty}$ r into a Taylor series $r = 0$ar$x$ . (These names are not standard: most mathematicians would simply talk about generating functions [IV . 18 § § 2 . 4 , 3 ] .) The next two examples show how we can use G-transforms to restate problems about sequences as problems about Taylor series. Consider first the problem of finding a sequence un such that u0$= 0$ , u1$= 1$ , and

un$+ 2 - 5$ un$+ 1 + 6$ un$= 0$ for all $n \ge 0$ . Observe that we must have

un$+ 2$ tn$+ 2 - 5$ un$+ 1$ tn$+ 2 + 6$ untn$+ 2 = 0$ for all $n \ge 0$ , so that summing over all $n \ge 0$ yields ((Gu) $(t) -$ u1$t-$ u0$) - 5(t(Gu ) (t) -$ u0$) + 6$ t2$(Gu ) (t) = 0$ . Recalling that u0$= 0$ , u1$= 1$ , and rearranging, we obtain

(6$t^{2}$ - 5 t + 1) (Gu) $(t) = t.$

Thus, using partial fractions, we obtain

t

t

(Gu) (t)  = 

 = 

$6$ t2 - 5 t + 1(12 t)(13 t)- 11 = +12 t13 t\infty\infty(2 t)r +(3 t)r= -r = 0 r = 0\infty(3 r - 2 r)$t^{r}$.

 = 

$r = 0$

It follows that ur$= 3^{r} - 2^{r}$ . Next consider the rather trivial problem of finding a sequence un such that u0$= 1$ and

$(n + 1)$ un$+ 1 +$ un$= 0$

for all $n \ge 0$ . For every t we have

$(n + 1)$ un$+ 1$ tn + untn$= 0$ and so, summing over all n and assuming that the usual laws of differentiation apply to infinite sums, we obtain (Gu) $(t) + (Gu ) (t) = 0$ . This differential equation gives (Gu) (t)  =  Ae  -  t for some constant A. Setting $t = 0$ , we obtain

$1 =$ u0$= (Gu ) (0) = A$ e0$= A.$

III . $91$ .

Transforms

Thus

$\i\text{nf ty}( - 1)r$

(Gu) $(t) = e - t =$

t r ,

r !

$r = 0$

so $u^{r} = ( - 1)^{r}/r$ !.

We can write down some of the correspondences between sequences and their G-transforms: $(a^{0}$ , $a^{1}$ , $a^{2}$ , . . .) ← $\to (Ga ) ($ t  ), $(a^{0} + b^{0}$ , $a^{1} + b^{1}$ , $a^{2} + b^{2}$ , . . .) ← $\to (Ga ) (t) + (Gb ) ($ t  ), a ∗ b ← $\to$ (Ga) (t) (Gb) (t), (0 , $a^{0}$ , $a^{1}$ , $a^{2}$ , . . .) ← $\to t(Ga ) ($ t  ), $(a^{1}$ , $2a^{2}$ , $3a^{2}$ , . . .) ← $\to (Ga ) ($ t  ). It is also important that we can recover the sequence a from its G-transform. One way of seeing this is to note that (Ga) (r) ( $0 ) a^{r} =$ / r !

We can use these rules, as in the examples above, to convert problems about sequences into problems about functions and vice versa. In textbooks and examinations, the effect of such a transformation is to make things simpler. In real life, it will usually convert your problem into a more complicated problem. However, occasionally you strike lucky and it is these occasions that make transforms such a valuable weapon in the mathematician’s armory. Up to now we have handled G-transforms formally. However, if we wish to use the methods of analysis,

$\i\text{nf ty}$

we need to know that r $= 0$ a r t r converges, at least when |$t$| is small. Provided that the a r do not increase too rapidly, this will always be the case. However, we run into difficulties when we try to extend our ideas to “two-sided sequences” (a r), where r runs through all integers rather than just the nonnegative ones, and

$\i\text{nf ty}$

to the resulting sums $r = - \i\text{nf tya}^{r}t^{r}$ . If |t| is small, then

$|t^{r}|$ is large when r is large and negative, while if |t| is large, then | t r | is large when r is large and positive. In many cases, the best we can hope for is that

$\i\text{nf ty}$

r

$r = - \i\text{nf tya}^{r}t$ might converge when $t = - 1$ and $t = 1$ . It is not very useful to talk about functions defined at only two points, but we save the situation by moving from R to C . If we have a well-behaved sequence (a r) of complex numbers where r runs through all integers, then

$\i\text{nf ty}$

we consider the sum $r = - \i\text{nf tya}^{r}z^{r}$ , where the complex number z belongs to the unit circle (or , in other words, $|z| = 1)$ . Since any such z can be written

$z = ei\theta =$ cos $\theta + i$ sin $\theta305$

with $\theta \in R$ , it is more usual to talk about the $2\pi - \i\text{nf ty}$

ir $\theta$ . We thus have the

$r = - \i\text{nf tya}^{r}e$

periodic function

“Fourier series transform” (once again, the name is nonstandard) H given by

$\i\text{nf ty}$

a $reir\theta$ .

(H$a$)(\theta) =r = - \infty

The Htransform takes a two-sided sequence a to $a 2\pi$ - periodic complex-valued function $f = Ha$ on the real line, but historically mathematicians have been more interested in reversing the process and obtaining a from f . If

$\i\text{nf ty}$

a $reir\theta$ ,

$f(\theta) =r = - \i\text{nf ty}$

then, arguing formally,

\infty\pi\pi11 f(\theta)e - ik\thetad\theta =$a${}rei({}r - k)\thetad\theta2\pi2\pi- \pi- \pir = - \infty\infty\pi

a r

 ei({}r - k)\thetad\theta = {}r = - \infty2\pi- \pi\infty\pi$a$ r = cos(r - k)\theta + i$sin$(r - k)\thetad\theta = ak .

 r = - \i\text{nf ty}2\pi- \pi

If we write

$\pi1$

f ˆ(k) =f(\theta)e - ik\thetad\theta,2\pi- \pi

then we obtain the celebrated Fourier sum formula

$\i\text{nf ty}$

f ˆ (r) e ir $\theta$ .

$f(\theta) =(1)r = - \i\text{nf ty}$

dirichlet [VI.36] proved that this formula holds in its natural interpretation for reasonably well-behaved functions, but the question of the appropriate interpretation and proof for wider classes of functions took much longer to settle (see carleson’s theorem [V.5](/part-05/carlesons-theorem)). Aspects of the question are still open today. It is worth noting that we can obtain qualitative information about a sequence from its Htransform and vice versa without explicit calculation. For example, if a r r m $+ {}^{3}$ forms a bounded sequence, then the rules for term-by-term differentiation show that H a is continuously m times differentiable, and if f is m times continuously differentiable, then repeated integration by parts shows that the numbers r m f ˆ (r) form a bounded sequence. Suppose that f represents a signal fed into a “black box,” such as a telephone system, which gives rise to a resultant signal T f . Many important black boxes in physics and engineering have the “infinite linearity”

$306$

property that

\i\text{nf ty}\i\text{nf tyc}rgr (\theta) =

T

c r T g r ( \theta ) r = - \i\text{nf tyr} = - \i\text{nf ty}

for all well-behaved function g r and constants c r . Many such systems also have the key property that

$Te^{k}(\theta) = γ^{k}e^{k}(\theta)$

for some constant γ k , where we have written e k ( $\theta$ ) for the quantity e  -  ik $\theta$ . In other words, the functions e k are eigenfunctions [I.3](/part-01/fundamental-definitions) for T . We can use the Fourier sum formula to obtain the formula $\i\text{nf ty}$ f ˆ (r) T e r ( \theta ) Tf(\theta) =r = - \infty\infty γ r f ˆ (r) e r ( $\theta$ )$. =$ r = - \infty In this context, it makes sense to think of f as the weighted sum of simple signals e k of frequency k. Mathematicians are always interested to see what happens if sums are replaced by integrals. In this case we obtain the classical Fourier transform. If F is a reasonably well-behaved function F : R $\to$ C , then we define its Fourier transform F F by the formula \infty F(t)e - i\lambda sds.FF(\lambda) =- \infty Much of the analysis that is typically taught in the first year or two of a university mathematics course was developed in the context of this transform and related topics. Using that analysis, it is not hard to obtain the correspondences F (t) ← $\to$ (F F) ( $\lambda$ ), $F(t) + G(t)$ ← \to (FF)(\lambda) + (FG)(\lambda), F ∗ G (t) ← $\to$ (F F) ( $\lambda$ ) (F G) ( $\lambda$ ), $F(t + u)$ ← \to e - iu\lambda(FF)(\lambda),  F (t) ← \to i\l\text{ambda FF}(\lambda) . In this context we define the convolution of F and G by $\i\text{nf ty}$ F ∗ G (t) = F (t - s) G (s) ds. $- \i\text{nf ty}$ There is an element of truth in the saying that the importance of the Fourier transform is that it converts convolution to multiplication and the importance of convolution is that it is the operation that is transformed to multiplication by the Fourier transform. Just as we can use the G-transform to solve difference equations, we can use the Ftransform to solve important classes of partial differential equations [I.3](/part-01/fundamental-definitions) that occur in physics and some parts of probability theory. For more on the Fourier transform, see [III.27](/part-03/the-fourier-transform).

III. Mathematical Concepts

By rescaling the Fourier sum formula ( $1$ ), we obtain the formula

\i\text{nf ty}\pi N1 F(s)e - irs/N$dse$ irt/NF(t) =r = - \i\text{nf ty}2\pi N - \pi N

when $|t| < \piN.$ If we let $N \to \i\text{nf ty}$, we obtain, more or less formally,

$\i\text{nf ty}1$

(F F) (s) e ist ds,

$F(t) =2\pi - \i\text{nf ty}$

which translates to the marvelous formula $(FFF)(t) = 2\piF( - t)$ . Like the Fourier sum formula, this Fourier inversion formula can be proved under a wide range of circumstances, though often at the price of reinterpreting the formula in novel ways. Beautiful though the Fourier inversion formula is, it should be noted that, both in practice and in theory, we often need only the observation that F $F = F$ G implies $F = G$. The uniqueness of the Fourier transform is often easier to prove and more convenient to use, and it holds over a wider range of conditions than the inversion formula. A similar observation holds for other transforms. When we talked about the Fourier sums associated with $2\pi$ - periodic functions, we said that f ˆ (r) measured the proportion of the signal f with frequency $2\pir$ . In the same way, $(FF)(\lambda)$ gives a measure of the proportion of F composed of frequencies close to $\lambda.$ There is a family of inequalities, known generically as Heisenberg uncertainty principles, which say, in effect, that if most of F F is concentrated in a narrow band, then the signal F must be very spread out. This fact places strong restrictions on our ability to manipulate signals and occupies a central place in quantum theory. At the beginning of this article we talked about transformations of sequences and saw that it was easier to handle one-sided sequences than two-sided sequences. In the same way, we can apply Fourier transforms to a wider range of functions F : R $\to$ C if we know that $F(t) = 0$ for $t < 0$ . More specifically, if F is such a onesided function, and if it does not grow too fast, then we can compute the Laplace transform

$\i\text{nf tyF}(s)e - (x + iy)$ s $ds$

(LF) (x + iy) =- \i\text{nf ty}\i\text{nf ty F}(s)e - (x + iy)$s$ ds = 0

whenever $x$ and $y$ are real and x is sufficiently large. If we use the more natural notation

$\i\text{nf ty}$

F (s) e  -  zs ds,

(LF) (z)  = 

$- \i\text{nf ty}$
