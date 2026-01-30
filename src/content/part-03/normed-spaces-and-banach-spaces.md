# Normed Spaces and Banach Spaces

252

for every a, b, c, d ∈ Z such that ad − bc = 1. (The
reason we exclude the case ad − bc = −1 is that (aτ +
b)/(cτ +d) would not be in the upper half-plane in this
case.) This is the equation at the heart of the definition     parametrized by a fairly simple set: the set of all posi-
of a modular form.
  Over the years, mathematicians have isolated other
desirable properties that F should have in order to give
a useful theory. Nowadays, modular forms are required
to obey the additional properties that F is holomor-
phic [I.3 §5.6](/part-01/fundamental-definitions) and that F (x + iy) does not grow too
quickly as y goes to +. nfty; these assumptions imply that
the vector space of weight k modular forms is finite
dimensional. The Eisenstein series above do have these
additional properties, and are the first basic examples
of modular forms.

Modular forms have connections with arithmetic, ge-
ometry, representation theory, and even physics. Mod-
ular forms also played a key role in the Taylor–Wiles
proof of fermat’s last theorem [V.10](/part-05/fermats-last-theorem). Why is this?
One general reason is that there are links between mod-
ular forms and other mathematical objects: here we
briefly explain one of the links.
   Lattices in the complex plane are related to elliptic
curves [III.21](/part-03/elliptic-curves): the quotient of the complex numbers
by a lattice is an elliptic curve, and every elliptic curve   theorem, the Monster group has remarkable and deep
arises in this way. Hence to study elliptic curves, or fam-   connections with other areas of mathematics. Most
ilies of elliptic curves, one can instead study families
of lattices. One way of studying an object is by study-
ing the functions on that object, and a modular form
is precisely that: a function on the collection of all lat-   “elliptic modular function” (see algebraic numbers
tices. And indeed, automorphic forms, which are gen-
eralizations of modular forms, have been used to great
effect in studying a wide variety of families of algebraic     1 is a manifestation of a very deep connection between
objects in this way.
III.60   Moduli Spaces
An important general problem in mathematics is clas-
sification (see the general goals of mathematical
research [I.4 §2](/part-01/general-goals)). Often, one has a set of mathematical
structures and a notion of equivalence, and one would
like to describe the equivalence classes [I.2 §2.3](/part-01/language-and-grammar).
For example, two (compact, orientable) surfaces are
often regarded as equivalent if each can be continu-
ously deformed into the other. Each equivalence class
is then fully described by the genus [III.33](/part-03/genus), or “number     polynomial P . For example, if you are designing a
of holes,” in the surface.

III. Mathematical Concepts
Topological equivalence is rather “crude,” in the
sense that it is relatively easy for two surfaces to be
equivalent. As a result, the equivalence classes are
tive integers. But there are many geometrical contexts
in which finer notions of equivalence are important.
For example, in several contexts one wishes to regard
two two-dimensional lattices [III.59](/part-03/modular-forms) as equivalent if
one is a rotation and enlargement of the other. Equiv-
alence relations such as this one often lead to param-
eter sets that themselves have an interesting geomet-
rical structure. Such sets are called moduli spaces. For
details, see [IV.8](/part-04/moduli-spaces) and also [V.23](/part-05/mostows-strong-rigidity-theorem).
III.61   The Monster Group
5   Why Modular Forms?
one of the landmarks of twentieth-century mathemat-
ics. As its name suggests, it gives a complete descrip-
tion of all finite simple groups, which can be thought
of as the building blocks for all finite groups. It states
that each finite simple group belongs to one of eighteen
infinite families, or else is one of twenty-six “sporadic”
examples. The Monster group is the largest of these
sporadic groups, with 808 017 424 794 512 875 886 459
904 961 710 757 005 754 368 000 000 000 elements.
As well as having a starring role in the classification
notably, the smallest dimension of a faithful re pre sen-
tation [IV.9](/part-04/representation-theory) of the Monster group is 196 883, while
the coefficient of e2π iz in the important and famous
[IV.1 §8](/part-04/number-theory)) is 196 884. Far from being an amusing coin-
cidence, the fact that these two numbers differ by just
the two. See vertex operator algebras [IV.17 §4.2](/part-04/vertex-operator-algebras)
for further details.
The Navier–Stokes Equation
See the euler and navier–stokes
equations [III.23](/part-03/the-euler-and-navierstokes-equations)
III.62   Normed Spaces and Banach
Spaces
It is often useful to approximate a function f by a
pocket calculator and want it to calculate logarithms

III . $62$ .

Normed Spaces and Banach Spaces

[III.25](/part-03/the-exponential-and-logarithmic-functions), you cannot expect it to do so exactly, since a calculator cannot handle infinitely many digits, so instead you will get it to calculate a different function P (x) that approximates log (x) well. Polynomials are a good choice, because they can be built up from the basic operations of addition and multiplication. This idea raises two questions: which functions can you hope to approximate, and what counts as a good approximation?
Clearly, the answer to the second question determines the answer to the first, but there is no single right answer to the second: it is up to you what you would like to declare to be a good approximation. However, not all decisions are equally natural. Suppose that P and Q are polynomials, $f$ and $g$ are more general functions, and x is a real number. If P (x) is close to f (x) and Q (x) is close to g (x), then P (x)  +  Q (x) will be close to f (x)  +  g (x). Also, if $\lambda$ is a real number and P (x) is close enough to f (x), then $\lambda P$ (x) will be close to $\lambda f$ (x) .
This in formal argument suggests that the functions that we can approximate well will form a vector space [I.3](/part-01/fundamental-definitions). We have arrived, by one of many possible routes, at the following general situation: we are given a vector space V (consisting , in our case, of certain functions) and we would like to be able to say in a precise way what it is for two elements of the vector space to be close.
The idea of closeness is formally captured by the notion of a metric space [III.56](/part-03/metric-spaces), so the obvious approach is to define a metric d on the vector space V . Now a general principle, when putting two structures together (in this case, the linear structure of the vector space and the distance structure of the metric), is that the two structures should relate to one another in a natural way. In our case, there are two natural properties that one should ask for. The first is translation invariance.
If $u$ and $v$ are two vectors and we translate them by adding w to both, then their distance should not change: that is, d (u + w, v + w) = d (u , v). The second is that the metric should scale correctly. For example, if one doubles two vectors $u$ and $v$, then the distance between them should double. More generally, if one multiplies $u$ and $v$ by a scalar $\lambda,$ then the distance between them should multiply by $|\lambda|$ : that is, $d(\lambda u$ , $\lambda v) = |\lambda|d(u$ ,  v).
If a metric has the first of these properties, then, setting $w = - u$ , we find that  d(u , $v) = d(0$ , $v - u)$ . It follows that if we know distances from $0$ , then we know all distances. Let us write v instead of d ( $0$ , v). Then what we have just shown is that d (u , v) = v - u . The $253$ expression · is called a norm, and v is the norm of v. The following two properties of norms are easy to deduce from the fact that d is a metric that scales properly. ( i ) For any vector  v,$v$\ge 0 . More over, v $= 0$ only if $v = 0$ .
(ii) For any vector v and any scalar $\lambda, \lambda v = |\lambda|v$ . We also have the so-called triangle inequality. (iii) u + v $\le$ u + v for any two vectors $u$ and  v. This follows from translation invariance and the triangle inequality for metric spaces, since u + v $= d(0$ , $u + v) \le d(0$ , $u) + d(u$ , $u + v)= d({}^{0}$ , $u) + d({}^{0}$ , $v) =$ u + v . In general, any function · on a vector space V that has properties (i) - (iii) is called a norm on V . A vector space with a norm on it is called a normed space.
Given a normed space V , we can say that two vectors $u$ and $v$ are close if their distance v - u is small. There are many important examples of normed spaces, several of which are discussed elsewhere in this volume. One class of examples that stands out is that of hilbert spaces [III.37](/part-03/bayesian-analysis), which can be thought of as norms given by distances that stay the same not just when you translate but also when you rotate. Other examples are discussed in function spaces [III.29](/part-03/function-spaces).
Let us return to the problem of how to discuss approximation by polynomials. The most commonly given answers to the two questions that arose earlier are as follows. The functions that one can approximate well are all continuous functions defined on some closed interval [a , b] of real numbers. These functions form a vector space which is denoted C[a, b]. To make the notion of good approximation precise, we introduce a norm on this space: f is defined to be the largest value of | f (x) | for any x in the interval (that is, for any x between $a$ and $b$).
With this definition, the distance f - g between two functions $f$ and $g$ will be small if and only if |$f (x) - g (x)$| is small for every x in the interval. In this situation one says that f uniformly approximates g. It is not obvious that every continuous function on [a , b] can be uniformly approximated by a polynomial: the statement that it can is called the Weierstrass approximation theorem. Here is a different way in which normed spaces arise. For most partial differential equations [I.3](/part-01/fundamental-definitions) it is not possible to write down a tidy formula that