# Inequalities

V.19.   Inequalities

rigidity theorem: if a group behaves roughly in the way
that a nilpotent group would (because the growth rate
of the sets γr is polynomial), then it must in fact be
related to a nilpotent group in a very precise and alge-
braic way. (See mostow’s strong rigidity theorem
[V.23](/part-05/mostows-strong-rigidity-theorem) for another example of such a theorem.)
V.17     Hilbert’s Nullstellensatz
Let f1 , . . . , fn be a collection of polynomials in d com-
plex variables z1 , . . . , zd . Suppose that it is possible to   reach a contradiction by assuming CH. To do this,
find another collection of polynomials g1 , . . . , gn such
that
   f1 (z)g1 (z) + f2 (z)g2 (z) + · · · + fn (z)gn (z) = 1
for every complex d-tuple z = (z1 , . . . , zd ). Then it fol-    exist” if the axioms are true. So, in this model, the set
lows immediately that no such d-tuple can be a root
of every single fi , since otherwise the left-hand side
would equal 0. Remarkably, the converse also holds:
that is, if there is no d-tuple for which the polynomials
fi all vanish simultaneously, then it is possible to find
polynomials gi such that the above identity holds. This
result is known as the weak Nullstellensatz.
   A short (but clever) argument can be used to deduce
Hilbert’s Nullstellensatz from the weak Nullstellensatz.
This again is a statement where a condition that is obvi-
ously necessary turns out to be sufficient. Suppose that
h is another polynomial in d complex variables, that r
is a positive integer, and that the polynomial hr can be
written in the form f1 g1 + f2 g2 + · · · + fn gn for some
collection of polynomials g1 , . . . , gn . It follows imme-
diately that h(z) = 0 whenever fi (z) = 0 for every i.
Hilbert’s Nullstellensatz states that if h(z) = 0 when-
ever fi (z) = 0 for every i, then there must be some
positive integer r and some collection of polynomials
g1 , . . . , gn such that hr = f1 g1 + f2 g2 + · · · + fn gn .    details about how it is carried out.
   Hilbert’s Nullstellensatz is discussed further in alge-
braic geometry [IV.4 §§5, 12].
V.18     The Independence of the

The real numbers are uncountable [III.11](/part-03/countable-and-uncountable-sets), but do they
form the “smallest” uncountable set? Equivalently, is
it the case that if A is any set of real numbers, then
either A is countable or there is a bijection between A
and the set of all real numbers? The continuum hypoth-
esis (or CH) is the assertion that this is indeed true.
The notions of countability and uncountability were
invented by cantor [VI.54](/part-06/georg-cantor-18451918), who was also the first to

703
formulate CH. He tried hard to prove or disprove it, as
did many others after him, but nobody succeeded.
Gradually, mathematicians came to entertain the idea
that CH might be “independent” of normal mathe-
matics: that is, independent of the usual zfc axioms
[IV.22 §3.1](/part-04/set-theory) of set theory. This would mean that it could
be neither proved nor disproved from the ZFC axioms.
The first result in this direction was due to gödel
[VI.92](/part-06/kurt-gdel-19061978), who showed that CH could not be disproved
from the usual axioms. In other words, one could not
he showed that inside every model of set theory
[IV.22 §3.2](/part-04/set-theory) there is a model in which CH holds. This
model is called the “constructible universe.” Roughly
speaking, it consists just of those sets that “have to
of reals is as small as it could possibly be. The “smallest
uncountable size” is usually denoted א1 , and in Gödel’s
construction the reals appear in א1 stages, with only
countably many reals appearing at each stage. From
this one can deduce that the number of reals is א1 ,
which is precisely the assertion of CH.
The other direction had to wait thirty years, until Paul
Cohen invented the method of forcing. How would we
make CH false? Starting from some model of set theory
(in which CH might well hold), we would like to “add”
some reals to it. Indeed, we would like to add enough
that there are now more than א1 of them. But how do
we “add” a real? We need to ensure that what we end up
with is still a model of set theory, which is hard enough,
but also that when we add new reals we do not alter the
value of א1 (since otherwise the statement “the num-
ber of reals is א1 ” may still be true in the new model).
This is an extremely complicated task, both conceptu-
ally and technically. See set theory [IV.22](/part-04/set-theory) for more
V.19     Inequalities
Let x and y be two nonnegative real numbers. Then
√Continuum Hypothesis
√
ber, from which it follows that 12 (x+y) ⩾ xy. That is,
the arithmetic mean of x and y is at least as big as the
geometric mean. This conclusion is a very simple exam-
ple of a mathematical inequality; its generalization to
n numbers is called the AM–GM inequality.
In any branch of mathematics that has even the
slightest flavor of analysis, inequalities will be of
great importance: as well as analysis itself, this in-
cludes probability, and parts of combinatorics, number

$704$

theory, and geometry. Inequalities are less prominent in some of the more abstract parts of analysis, but even there one needs them as soon as one wishes to apply the abstract results. For instance, one may not always need an inequality to prove a theorem about continuous linear operators [III.50](/part-03/linear-operators-and-their-properties) between banach spaces [III.62](/part-03/normed-spaces-and-banach-spaces), but the statement that some specific linear operator between two specific Banach spaces is continuous is an inequality, and often a very interesting one.
We do not have space to discuss more than a small handful of inequalities in this article, but we shall include some of the most important ones in the toolbox of any analyst. Jensen’s inequality is another fairly simple but useful inequality. A function f : R $\to$ R is called convex if  f(. ambda x + \mu y) \le . ambda f(x) + \mu f( y ) whenever $\lambda$ and $\mu$ are nonnegative real numbers with $\lambda + \mu = 1$ . Geometrically, this says that all chords of the graph of the function lie above the graph.
A straightforward inductive argument can be used to show that this property implies the same property for n numbers: $f(\lambda^{1}x^{1} +$ · · · $+ \lambda^{n}x^{n}) \le \lambda^{1}f(x^{1}) +$ · · · $+ \lambda^{n}f(x^{n})$ whenever all the $\lambda^{i}$ are nonnegative and $\lambda^{1} +$ · · · $+ \lambda^{n} = 1$ . This is Jensen’s inequality. The second derivative of the exponential function [III.25](/part-03/the-exponential-and-logarithmic-functions) is positive, from which it follows that the exponential function itself is convex. If $a^{1}$ , . . .
, a n are positive real numbers and we apply Jensen’s inequality to the numbers x $i = log$ (a i), then we find, using standard properties of exponentials and logarithms [III.25](/part-03/the-exponential-and-logarithmic-functions), that

. ambda\l. ext({ambda a}1)1 · · · a ${}^{nn} \le \lambda^{1}a^{1} +$ · · · $+ \lambda^{n}a^{n}$ . This is called the weighted AM-GM inequality. When all the $\lambda^{i}$ are equal to $1/n$ it reduces to the usual AM-GM inequality. Applying Jensen’s inequality to other wellknown convex functions produces several other wellknown inequalities. For instance, if we apply it to the function $x^{2}$ , we obtain the inequality

$(\lambda^{1}x^{1} +$ · · · + . ambda nxn)2 \le . ambda1 x1 2 + · · · $+ \lambda^{n}x^{n}2$

,

(1)

which can be interpreted as saying that if X is a random variable [III.71](/part-03/probability-distributions) on a finite sample space, then (EX)2 \le EX2 . The Cauchy-Schwarz inequality is perhaps the most important inequality in all of mathematics. Suppose that V is a real vector space with an inner product [III.37](/part-03/bayesian-analysis)  · , ·  on it. One of the properties of an inner product is that  v, v  $\ge 0$ for every $v \in V$ , with equality if and only if v $= 0$ . Let us write  v  for

V. Theorems and Problems

v, v  ${}^{1}/ {}^{2}$ . If $x$ and $y$ are any two vectors in V with $x = y = {}^{1}$ , then ${}^{0} \le$  x  -  y  ${}^{2} =$  x $- y, x - y = x$, x   +   y, y  $- 2x$ , y  $= 2 - 2x$ , y . It follows that x, y  $\le 1 =$  x   y . More over, equality holds only if $x = y$. We can obtain a general pair of vectors by multiplying x by $\lambda$ and y by μ, for some nonnegative real numbers $\lambda$ and μ.
Then both sides of the inequality scale up by a factor of $\lambda\mu,$ so we can conclude that the inequality  x, y  $\le$  x   y  holds in general, with equality if and only if $x$ and $y$ are proportional. Particular inner-product spaces lead to special cases of this inequality, which are themselves often referred to as the Cauchy-Schwarz inequality. For instance, if we take the space R n with the inner product  a, $b = ni = {}^{1}a^{i}b^{i}$ , then we obtain the inequality n n n

$1/21/2a2ibi2$

a $ib^{i} \le$ / $(2)i = 1i = 1i = 1$

It is not hard to deduce a similar inequality for complex scalars: one needs to replace (a2)i and (bi)2 by $|a^{i}|^{2}$ and $|b^{i}|^{2}$ on the right-hand side. It is also not too hard to prove that inequality ( $2$ ) is equivalent to the inequality (1) above. Hölder’s inequality is an important generalization of the Cauchy-Schwarz inequality. Again it has several versions, but the one that corresponds to inequality ( $2$ ) is

${}^{1}/ p$

n

n

n

$1/q|a^{i}|^{p}|b^{i}|^{q}$

a $ib^{i} \le$

,

$i = 1i = 1i = 1$

where p belongs to the interval [1 , . nfty] and q is the conjugate index of p, which is defined to be the number that satisfies the equation $(1/p) + (1/q) = 1$ . (We interpret $1/\infty$ to be $0$ .) If we write a p for the quantity (n ${}^{p1}/ p$ , then this inequality can be rewritten in $i = {}^{1}|a^{i}|)$ the succinct form a, b $\le$ a p b q . It is a straightforward exercise to find, for each sequence a, another (nonzero) sequence b such that equality occurs in the above inequality. Also, both sides of the inequality scale in the same way if you multiply b by a nonnegative scalar.
It follows that a p is the maximum of a, b over all sequences b such that b q $= 1$ . Using this fact, it is easy to verify that the function a $\to$ a p satisfies Minkowski’s inequality: x + y $p \le$ x $p + y^{p}$ . This gives some idea of why Hölder’s inequality is so important. Once one has Minkowski’s inequality, it is very easy to check that  ·  p is (as the notation suggests) a norm [III.62](/part-03/normed-spaces-and-banach-spaces) on R n . This is an even more basic example of the phenomenon mentioned at the beginning of the article: just to show that a certain normed space

$V$ . $19$ .

Inequalities

is a normed space, we have had to prove an inequality about real numbers. In particular, looking at the case $p = 2$ , we see that the entire theory of hilbert spaces [III.37](/part-03/bayesian-analysis) depends on the Cauchy-Schwarz inequality. Minkowski’s inequality is a particular case of the triangle inequality, which states that if x, y, and z are three points in a metric space [III.56](/part-03/metric-spaces), then d (x , z) $\le$ d (x , y)  +  d (y , z), where d (a , b) denotes the distance between $a$ and $b$.
When put like this, the triangle inequality is a tautology, since it is one of the axioms of a metric space. However, the statement that a particular notion of distance actually is a metric is far from vacuous. If our space is R n and we define d (a , b) to be a  -  b  p , then Minkowski’s inequality is easily seen to be equivalent to the triangle inequality for this notion of distance. The inequalities above have natural “continuous analogues” as well. For example, here is a continuous version of Hölder’s inequality. For two functions $f$ and $g$ defined on R , let  f , g  be defined to

$\infty$

be $- \infty$ f (x) g (x) dx, and write  f   p for the quantity

. nfty( - . nfty|f(x)|p)1/p . Then, once again,  f , g  $\lef^{p}g^{q}$ , where q is the conjugate index of p. Another example is a continuous version of Jensen’s inequality, which states, in a continuous setting, that if f is convex and X is a random variable, then f (E X) $\le$ E f (X). In all the inequalities we have so far mentioned, we have been comparing two quantities A and B, and it has been easy to identify the extreme cases where the ratio of A to B is maximized. However, not all inequalities are like this.
Consider, for instance, the following two quantities associated with a sequence of real numbers a  =  ($a^{1}$ , $a^{2}$ , . . . , a n). The first is the norm n a  {}2 = ({}i = {}1 a2 i)1/2 . The second is the average of n

$|^{i} = {}^{1}ia^{i}|$ over all the $2^{n}$ sequences ( 1 ,   2 , . . . ,   n  )  such that eac$h^{i}$ is $1$ or $- 1$ . (In other words, for each i you randomly decide whether to multiply $a^{i}$ by $- 1$ or not, add up the results, and take the expected absolute value of the sum .) It is not the case that the first quantity is always less than the second. For instance, let $n = 2$ , and let $a^{1} = a^{2} = 1$ . Then the first quan√ tity is $2$ and the second is $1$ .
However, Khinchin’s inequality (or to be more accurate an important special case of Khinchin’s inequality) is the remarkable statement that there is a constant C such that the first quantity is never more than C times the second. It is not hard to prove, using the inequality EX2 \ge (EX)2 , that the first quantity is always at least as big as the second; so the two rather different looking quantities are in fact “equivalent, up to a constant.” But what

$705$

is the best constant? In other words, how much bigger can the first quantity be than the second? This question was not answered until 1976 , by Stanislaw Szarek, over fifty years after Khinchin proved the original inequality. The answer turns out to be that the example given earlier is the extreme one: the ratio can √ never exceed $2$ . This situation is typical.
Another famous inequality for which the best constant was discovered much later than the inequality itself is the Hausdorff-Young inequality, which relates norms of functions with norms of their fourier transforms [III.27](/part-03/the-fourier-transform). Suppose that $1 \le p \le 2$ , and that $f$ is a function from $R$ to $C$ with the property that the norm

$\infty 1/p|f(x)|^{p}dx$

f   $p =- \infty$

exists and is finite. Let f ˆ be the Fourier transform of f and let q be the conjugate index of p. Then f ˆ   q $\le$ C p  f   p for some constant C p that depends on p only (and not on f). Again, it was an open problem for many years to determine the best constant C p . Some idea of why it might have been difficult can be gleaned from the fact that the “extreme” functions in this case are Gaussians: that is, functions of the

$22$

form $f(x) = e - (x - \mu) / {}^{2}σ$ . A sketch of a proof of the Hausdorff-Young inequality can be found in harmonic analysis [IV.11](/part-04/harmonic-analysis). There is an important class of inequalities known as geometric inequalities, where the quantities that are being compared are parameters associated with geometric objects. A famous example of such an inequality is the Brunn-Minkowski inequality, which states the following. Let A and B be two subsets of R n , and define $A + B$ to be the set {x $+ y$ : $x\inA, y\in$ B}. Then (vol (A + B))1/n \ge vol (A)1/n + vol (B)1/n .
Here, vol (X) denotes the n-dimensional volume (or , more formally, the lebesgue measure [III.55](/part-03/measures)) of the set X. The Brunn-Minkowski inequality can be used to prove the equally famous isoperimetric inequality in R n (which is one of a large class of isoperimetric inequalities). Informally, this states that, of all sets with a given volume, the one with the smallest surface area is a sphere. An explanation of why this follows from the Brunn-Minkowski inequality can be found in high-dimensional geometry and its probabilistic analogues [IV.26 §3] .
We finish this brief sample with one further inequality, the Sobolev inequality, which is important in the theory of partial differential equations. Suppose