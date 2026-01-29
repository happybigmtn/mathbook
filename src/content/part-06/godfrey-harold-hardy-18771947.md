# Godfrey Harold Hardy (1877–1947)

VI.73.   Godfrey Harold Hardy                                                                                         797

(1910), contributed to even more general theories of           [V.27](/part-05/problems-and-results-in-vi36-peter-gustav-lejeune-dirichlet-18051859) (including Waring’s problem and Goldbach’s con-
integrals, e.g., the theory of Radon (1913).                   jecture), and Diophantine approximation.
  Although it took several decades for the importance            Hardy was one of the first to do important work on
of Lebesgue’s integral to become widely recognized, its        the riemann hypothesis [IV.2 §3](/part-04/number-theory) when, in 1914, he
significance for applications, especially in the analysis       proved that the zeta function ζ(s) = ζ(σ + it) has
of discontinuous and statistical phenomena of nature           infinitely many zeros on the critical line σ = 12 (see
and in probability theory, could not be ignored in the         littlewood [VI.79](/part-06/john-edensor-littlewood-18851977)). Later, with Littlewood, he proved
long run.                                                      deep extensions of this result.
                                                                 From 1914 to 1919 he collaborated with the large-
Further Reading                                                ly self-taught Indian genius, srinivasa ramanujan
                                                               [VI.82](/part-06/srinivasa-ramanujan-18871920). They wrote five papers, the most famous of
Hawkins, T. 1970. Lebesgue’s Theory of Integration: Its Ori-
                                                               which is about p(n), the number of partitions of n.
  gins and Development. Madison, WI: University of Wiscon-
  sin Press.                                                   This is a rapidly growing function: p(5) = 7 but
Lebesgue, H. 1972–73. Œuvres Scientifiques en Cinq Vol-                       p(200) = 3 972 999 029 388.
  umes. Geneva: Université de Genève.
                                                               The generating function [IV.18 §§2.4, 3] of p(n),
                         Reinhard Siegmund-Schultze            that is,
                                                                                        . nfty
                                                                                        
                                                                            f (z) = 1 +   p(n)zn ,
VI.73      Godfrey Harold Hardy                                                              n=1

b. Cranleigh, England, 1877; d. Cambridge, 1947                is equal to 1/((1 − z)(1 − z2 )(1 − z3 ) · · · ), so
Number theory; analysis                                                                   1     f (z)
                                                                                p(n) =                dz,
                                                                                        2π i Γ zn+1
G. H. Hardy was the most influential mathematician in           where Γ is a circle about the origin of radius just less
Britain in the twentieth century. With the exception of        than 1. In 1918, Hardy and Ramanujan not only gave
the years from 1919 to 1931, when he was the Savil-            a rapidly convergent asymptotic formula for p(n) but
ian professor of geometry in Oxford, he spent his adult        also showed that, for n large enough, p(n) could be
life in Cambridge, where from 1931 until his retirement        calculated exactly by taking the integer nearest to the
in 1942 he was the Sadleirian professor of pure math-          sum of the first few terms. In particular, p(200) can be
ematics. He became a Fellow of the Royal Society in            computed from the first five terms.
1910 and was awarded a Royal Medal in 1920 and the               Hardy and Ramanujan proved their asymptotic for-
Sylvester Medal in 1940. He died on the day the Royal          mula for p(n) with the aid of the “circle method”; later,
Society’s highest honor, the Copley Medal, was to be           Hardy and Littlewood developed this method into one
presented to him.                                              of the most powerful tools in analytic number theory. In
   At the beginning of the twentieth century, the stan-        order to estimate contour integrals like the one above,
dard of mathematical analysis was rather low in Britain;       Hardy and Littlewood found it advisable to break up
Hardy did much to remedy this situation, not only              the circle of integration in a subtle way.
through his research, but also by publishing A Course of         Another Hardy–Ramanujan result concerns the num-
Pure Mathematics in 1908. This book, which he wrote            ber ω(n) of distinct prime divisors of a “typical” num-
as “a missionary talking to cannibals,” had a tremen-          ber n. They proved that a “typical” number n has about
dous influence on several generations of mathemat i-             log log n distinct prime factors in a certain precise
cians in the United Kingdom. Unfortunately, Hardy’s            sense. In 1940 Erdős and Kac sharpened and extended
love of pure mathematics, and analysis in particular,          this result by showing that additive number-theoretic
some what stifled the growth of applied mathematics              functions like ω(n) obey the gaussian law [III.71 §5](/part-03/probability-distributions)
and algebraic subjects for several decades.                    of errors: this gave birth to the important field of
   In 1911 he began a long collaboration with little-          probabilistic number theory.
wood [VI.79](/part-06/john-edensor-littlewood-18851977), with whom he wrote almost one hun-                 Hardy’s name has been attached to several con-
dred papers: this partnership is generally considered          cepts and results, including Hardy spaces, Hardy’s
to have been the most fruitful in the history of math-         inequality, and the hardy–littlewood maximal the-
ematics. They worked on convergence and summa bil-              orem [IV.11 §3](/part-04/harmonic-analysis). For 0 < p ⩽ . nfty the Hardy space H p
ity of series, inequalities, additive number theory            consists of functions analytic in the unit disk that are