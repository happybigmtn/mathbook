# Quadratic Forms

III . $73$ .

Quadratic Forms

$x$ and $y$ into independent random variables of variance $1$ . Thus, the normal distribution has a very special symmetry property. Properties like this go some way toward explaining the ubiquity of the normal distribution in mathematics. However, the normal distribution has an even more remarkable property, which leads to its appearance wherever mathematics is used to model disorder in the real world. The central limit theorem states that, for any sequence of independent and identically distributed random variables $X^{1}$ , $X^{2}$ , . . . (with finite mean \mu and nonzero finite variance σ 2 ), we have √ lim $P(X^{1} +$ · · · + Xn \le n\mu + nσx)n \to \i\text{nf tyx}_{1}2 e - y /2 dy$√ =$2\pi- \i\text{nf ty}

for every real number x. The expected value of $X^{1} +$ √ · · ·  +  X n is n\mu and its standard deviation is nσ , so another way of thinking about this is to let Y n  =  √

$(X^{1} +$ · · · $+ X^{n} - n\mu)/ nσ$ . This rescales $X^{1} +$ · · · $+ X^{n}$ to have mean $0$ and variance $1$ , and the probability becomes the probability that Y n $\le$ x. Thus, whatever distribution we start with, the limiting distribution of the sum of many independent copies is normal (after appropriate rescaling). Many natural processes can realistically be modeled as accumulations of small independent random effects, and this is why many distributions that one observes, such as the distribution of heights of adults in a given town, have a familiar bell-shaped curve. A useful application of the central limit theorem is to simplify what look like impossibly complicated calculations. For example, when the parameter n is large, the calculation of binomial probabilities becomes prohibitively complicated. But if X is a binomial random variable, with parameters n and $\frac{1}{2}$ , for instance, then we can write $X$ as a sum $Y^{1} +$ · · · $+ Y^{n}$ , where $Y^{1}$ , . . . , Y n are independent Bernoulli random variables

$1$

with paramete$r^{2}$ . Then, by the central limit theorem, 1 √ $x_{1}21e - y /^{2}dy.$

√

lim  P(X \le {}2 n + {}2 nx) =2\pin \to \infty- \infty

III . $72$

Projective Space

The real projective plane can be defined in various ways. One way is to use three homogeneous coordinates: a typical point is represented as (x , y, z), where not all of x, y, and z are equal to $0$ , with the convention that if $\lambda$ is a nonzero constant, then (x ,  y, z)$and$(\lambda x , $\lambda y,\lambda z)$ are

$267$

regarded as equal. Notice that for each (x , y, z) the set of all points of the form $(\lambda x$ , $\lambda y,\lambda z)$ is the line through the origin and (x , y, z), and indeed a more geometrical definition of the real projective plane is that it is the set of all lines in $R^{3}$ that pass through the origin. Each such line meets the unit sphere in exactly two points, which are opposite each other, and a third way of defining the real projective plane is to define opposite points in the unit sphere to be equivalent and to take the quotient [I.3](/part-01/fundamental-definitions) of the unit sphere by this equivalence relation [I.2](/part-01/language-and-grammar). A fourth way to define the projective plane is to start with the usual Euclidean plane and to add one “point at infinity” for each possible slope that a line can have. With an appropriate topology, this defines the projective plane as a compact if ic at i on [III.9](/part-03/compactness-and-compactication) of the Euclidean plane. Taking the third definition, a line in the projective plane is defined to be a great circle with its opposite points identified. It is then not hard to see that any two lines meet in exactly one point (since any two great circles meet in exactly two opposite points) and that any two points are contained in exactly one line. This property can be used to define much more abstract generalizations of the notion of a projective plane. There are similar definitions for other fields besides R , and also in higher dimensions. For instance, complex projective n-space is the set of all points of the form $(z^{1}$ , $z^{2}$ , . . . , $z^{n} + {}^{1})$ , where not every $z^{i}$ is $0$ , with $(z^{1}$ , $z^{2}$ , . . . , $z^{n} + {}^{1})$ equivalent to $(\lambda z^{1}$ , $\lambda z^{2}$ , . . . , $\lambda z^{n} + {}^{1})$ if $\lambda$ is a nonzero complex scalar. This is the set of all “complex lines” in $C^{n} + {}^{1}$ that pass through the origin. See some fundamental mathematical definitions [I.3](/part-01/fundamental-definitions) for more details about projective geometry. III . $73$ Quadratic Forms Ben Green A quadratic form is a homogeneous polynomial of degree $2$ in some finite set of unknowns $x^{1}$ , $x^{2}$ , . . . , x n : an example is $q(x^{1}$ , $x^{2}$ , $x^{3}) = (x^{1})^{2} - 3x^{1}x^{2} + 4(x^{3})^{2}$ . Here, the coefficients $1$ , $- 3$ , and $4$ are integers, but the idea generalizes straightforward ly from Z to any ring R. Since linear functions are undeniably important and $2$ is the next positive integer after $1$ , one might expect quadratic forms to be important as well, and indeed they are, in many different branches of mathematics, including linear algebra itself. Here are two theorems about quadratic forms.

268                                                                                            III. Mathematical Concepts

Theorem 1. If x, y, and z are three points in Rd ,            advantage of this more abstract approach over the con-
then the distances between them satisfy the triangle          crete definition we gave at the beginning is that it is not
inequality                                                    necessary to specify a basis for Rd .
                |x − z| ⩽ |x − y| + |y − z|.                    If one makes a good choice of basis, then the quad-
                                                              ratic form can be made to look particularly pleasant:
Theorem 2. An odd prime p can be written as the sum           we may always choose a basis in such a way that
of two squares if and only if it leaves remainder 1 on
                                                                      q(x) = x12 + · · · + xs2 − xs+1
                                                                                                  2
                                                                                                      − · · · − xt2
division by 4.
                                                              for some s and t satisfying 0 ⩽ s ⩽ t ⩽ d. Here
  It is not at first sight clear why theorem 1 has any-
                                                              x1 , . . . , xt are the coefficients of x with respect to the
thing to do with quadratic forms. The reason is that the
                                                              basis we have carefully chosen. The quantity s − t is
square of the Euclidean distance
                                                             called the signature of the form. When s = d (as is
                  |x| = x12 + · · · + xd2                     the case for the form defining the Euclidean distance)
is a quadratic form over the real numbers R (here, the        the form is said to be positive definite. Forms that are
xi are the coordinates of x). This form is derived from       not positive definite occur very commonly. For exam-
the inner product                                             ple, the form x 2 + y 2 + z 2 − t 2 is used to define
                                                              minkowski space [I.3 §6.8](/part-01/fundamental-definitions), which plays a key role in
                x, y = x1 y1 + · · · + xd yd                special relativity.
by taking |x|2 to be x, x. The inner product satisfies          We turn now to examples of quadratic forms in num-
the relations                                                 ber theory, beginning with two very famous theorems
                                                              about quadratic forms over the integers Z. The first is
  (i) x, x ⩾ 0 for all x ∈ Rd , with equality if and only   theorem 2, mentioned at the start of the article. It is
      if x = 0.                                               due to fermat [VI.12](/part-06/pierre-fermat-1601665). There are many related results
 (ii) x, y + z = x, y + x, z for all x, y, z ∈ Rd .     for other binary quadratic forms such as x 2 + 2 y 2 and
(iii) \lambda x, y = x, \lambda y = λx, y for all λ ∈ R and           x 2 + 3 y 2 . In general, however, the question of which
      x, y ∈ Rd .                                             primes are represented by x 2 +ny 2 is extremely subtle
(iv) x, y = y, x for all x, y ∈ Rd .                      and interesting, and leads one to class field theory
                                                              [V.28](/part-05/from-quadratic-reciprocity-to-vi38-augustus-de-morgan-18061871).
More generally, any function φ(x, y) that satisfies
these relations is called an inner product. The triangle         In 1770 lagrange [VI.22](/part-06/joseph-louis-lagrange-17361813) showed that every number
inequality is a consequence of arguably the most impor-       n can be written as a sum of four squares. In fact, the
tant inequality in mathematics, the cauchy–schwarz            number of such representations of n, r4 (n), is given by
inequality [V.19](/part-05/inequalities)                                             the formula
                                                                                                 
                                                                                        r4 (n) =   d.
                     |x, y| ⩽ |x| |y|.                                                         d|n
                                                                                                 4d
  Not all quadratic forms on Rd come from inner prod-
ucts, but they do all come from symmetric bilinear            This formula can be explained using the theory of mod-
forms g : Rd \times Rd → R. These are functions of two             ular forms [III.59](/part-03/modular-forms), one of the most important topics
variables that satisfy all the axioms of an inner prod-       in number theory. Indeed, the generating series
uct except possibly (i), the positivity criterion. Given                                 \infty
                                                                                         
a quadratic form q(x) = g(x, x), one may recover g                             f (z) =         r4 (n)e2π inz
                                                                                         n=0
using the polarization identity
                                                              is a theta series, as a result of which it satisfies certain
                     1
        g(x, y) = 2 (q(x + y) − q(x) − q(y)).                 transformations that identify it as a modular form.
This correspondence between quadratic forms and                  A remarkable theorem of Conway and Schneeberger
symmetric bilinear forms works just as well when R            states that if a quadratic form a1 x12 + a2 x22 + a3 x32 +
is replaced by any field k, except that there are some         a4 x42 with a1 , . . . , a4 ∈ N represents all the positive
serious technical issues when k has characteristic two        integers less than or equal to 15, then it represents
(due to the presence of the fraction 12 in the above          all positive integers. ramanujan [VI.82](/part-06/srinivasa-ramanujan-18871920) listed fifty-five
formula). In linear algebra one often defines quadratic        such forms; actually, one of his forms did not repre-
forms by first discussing symmetric bilinear forms. The        sent 15, but the remaining fifty-four forms constitute

