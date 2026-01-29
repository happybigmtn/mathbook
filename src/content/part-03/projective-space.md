# Projective Space

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
