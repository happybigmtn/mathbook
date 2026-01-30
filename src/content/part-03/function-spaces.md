# Function Spaces

210

with the concept. However, the idea that every Riemann
surface might arise from either the sphere, the Euclid-     and range. (A good case to have in mind is functions
ean plane, or the hyperbolic plane was something they
both came to conjecture. Rigorous proofs of this state-     R.) These objects have infinitely many degrees of free-
ment, the uniformization theorem, were to be given
only in 1907, by Poincaré and Koebe independently.
  The formal definition of a Fuchsian group is as fol-
lows. A subgroup H of the group of all Möbius trans for-     is a given function f ?” (or to the closely related ques-
ma tions is said to act discontinuously if, for every com-   tion “how close together are two functions f and g?”).
pact set K in the disk D the sets h(K) and K are disjoint   In some cases, certain functions may have infinite mag-
except for finitely many h ∈ H. A Fuchsian group is a
subgroup H of the group of all Möbius transformations
that acts discontinuously on the disk D.
III.29 Function Spaces

When one works with real or complex numbers, there
is a natural notion of the magnitude of a number x,
namely its modulus |x|. One can also use this notion
of magnitude to define a distance |x − y| between two
numbers x and y and there by say in a quantitative way
which pairs of numbers are close and which ones are
far apart.
   The situation becomes more complicated, however,
when one deals with objects with more degrees of
freedom. Consider for instance the problem of deter-
mining the “magnitude” of a three-dimensional rect-
angular box. There are several candidates for such a
magnitude: length, width, height, volume, surface area,     by a simple formula and for the space X to consist pre-
diameter (the length of a long diagonal), eccentric-
ity, and so forth. Unfortunately, these magnitudes do
not give equivalent comparisons: for example, box A
may be longer and have a greater volume than box B,
but box B may be wider and have a greater surface
area. Because of this, one abandons the idea that there     decay, boundedness, or integrability on the function f .
should be only one notion of “magnitude” for boxes,
and instead accepts that there is a multiplicity of such    tion quantitative. It may tell us how regular f is, how
notions and that they can all be useful: for some appli-    much decay it has, by which constant it is bounded, or
ca tions one may wish to distinguish the large-volume
boxes from the small-volume boxes, while in others one
may wish to distinguish the eccentric boxes from the
round boxes. Of course, there are several relationships     We now present a sample of commonly used function
between the different notions of magnitude (e.g., the
isoperimetric inequality [IV.26] allows one to place
an upper limit on the possible volume if one knows the
surface area), so the situation is not as disorganized as     1. The more smoothly a function varies, the more “regular” it is
it may at first appear.

III. Mathematical Concepts
Now let us turn to functions with a fixed domain
f : [−1, 1] → R from the interval [−1, 1] to the real line
dom, so it should not be surprising that there are now
infinitely many distinct notions of “magnitude,” which
all provide different answers to the question “how large
nitude by one measure and finite magnitude by another
(similarly, a pair of functions may be very close by one
measure and very far apart by another). Again, this
situation may seem chaotic, but it simply reflects the
fact that functions have many distinct characteristics—
some are tall, some are broad, some are smooth, some
Terence Tao
are oscillatory, and so forth—and that, depending on
the application at hand, one may need to give more
1   What Is a Function Space?
weight to one of these characteristics than to others. In
analysis, these characteristics are embodied in a vari-
ety of standard function spaces and their associated
norms, which are available to describe functions both
qualitatively and quantitatively.
Formally, a function space is a normed space [III.62](/part-03/normed-spaces-and-banach-spaces)
X, the elements of which are functions (with some fixed
domain and range). A majority (but certainly not all)
of the standard function spaces considered in analysis
are not just normed spaces but also banach spaces
[III.62](/part-03/normed-spaces-and-banach-spaces). The norm f X of a function f in X is the func-
tion space’s way of measuring how large f is. It is com-
mon, though not universal, for the norm to be defined
cisely of those functions f for which the resulting def-
inition f X makes sense and is finite. Thus, the mere
fact that a function f belongs to a function space X can
already convey some qualitative information about that
function. For example, it may imply some regularity,1
The actual value of the norm f X makes this informa-
how large its integral is.
2    Examples of Function Spaces
spaces. For simplicity we shall consider only spaces of
functions from [−1, 1] to R.
considered to be.

III . $29$ .

Function Spaces

$C^{0}$ [− 1 , 1 ]2 . $1$ This space consists of all continuous functions [I.3](/part-01/fundamental-definitions) from [− 1 , 1 ] to R , and is some times denoted  C[− 1 , 1 ] . Continuous functions are regular enough to allow one to avoid many of the technical subtleties associated with very rough functions. Continuous functions on a compact [III.9](/part-03/compactness-and-compactication) interval such as [− 1 , 1 ] are bounded, so the most natural norm to place on this space is the supremum norm, denoted  f   $\infty$ , which is the largest possible value of | f (x) | .
(Formally , it is defined to be sup |f(x)| : $x \in$ [− 1 , 1 ], but for continuous functions on [− 1 , 1 ] the two definitions are equivalent .) The supremum norm is the norm associated with uniform convergence: a sequence $f^{1}$ , $f^{2}$ , . . . converges uniformly to f if and only if  f $n - f\infty$ tends to $0$ as $n$ tends to $\infty.$ The space $C^{0}$ [− 1 , 1 ] has the useful property that one can multiply functions together as well as adding them. This makes it a basic example of a Banach algebra. $2$ . 2 C1 [− 1 , 1 ]

This is a space that has a more restricted membership than $C^{0}$ [− 1 , 1 ] : not only must a function $f$ in $C^{1}$ [− 1 , 1 ] be continuous but it must also have a derivative that is continuous. The supremum norm here is no longer a natural one, because a sequence of continuously differentiable functions can converge in this norm to a non differentiable function. Instead, the right norm here is the $C^{1}$ - norm  f   C 1 [− 1 , 1 ] , which is defined to be f $\infty +$ f $\infty$ . Notice that the $C^{1}$ - norm measures both the size of a function and the size of its derivative.
(Merely controlling the latter would be unsatisfactory, since it would give constant functions a norm of zero .) Thus it is a norm that forces a greater degree of regularity than the supremum norm. One can similarly define the space $C^{2}$ [− 1 , 1 ] of twice continuously differentiable functions, and so forth, all the way up to the space $C\infty$ [− 1 , 1 ] of infinitely differentiable functions. (There are also “fractional” versions of these spaces, such as $C^{0}$ , α [− 1 , 1 ] , the space of α-Hölder continuous functions.
We will not discuss these variants here .) The Lebesgue Spaces $L^{p}$ [− 1 , 1 ]2 . $3$ The supremum norm f $\infty$ mentioned earlier gives simultaneous control on the size of |f(x)| for all $x \in$ [− 1 , 1 ] . However, this means that if there is a tiny set

$211$

of x for which |f(x)| is very large, then  f   $\infty$ is very large, even if a typical value of | f (x) | is much smaller. It is some times more advantageous to work with norms that are less influenced by the values of a function on small sets. The L pnorm of a function f is

$1/p1|f(x)|^{p}dx$

f   $p =$ / $- 1$

This is defined for $1 \le p < \infty$ and for any measurable f . The function space $L^{p}$ [− 1 , 1 ] is the class of measurable functions for which the above norm is finite. The norm f $\infty$ of a measurable function f is its essential supremum: roughly speaking this means the largest value of | f (x) | if you ignore sets of measure zero. It turns out to be the limit of the norms f p as p tends to infinity. The space $L\infty$ [− 1 , 1 ] consists of those measurable functions f for which  f   $\infty$ is finite.
While the L $\infty$ norm is concerned solely with the “height” of a function, the L p norms are instead concerned with a combination of the “height” and “width” of a function. Particularly important among these norms is the $L^{2}$ - norm , since $L^{2}$ [− 1 , 1 ] is a hilbert space [III.37](/part-03/bayesian-analysis). This space is exceptionally rich in symmetries: there is a wide variety of unitary transformations, that is, invertible linear maps T defined on $L^{2}$ [− 1 , 1 ] such that T $f{}^{2} = f^{2}$ for every function $f \inL^{2}$ [− 1 , 1 ] .
The Sobolev Spaces W k, p [− 1 , 1 ]2 . $4$ The Lebesgue norms control, to some extent, the height and width of a function, but say nothing about regularity; there is no reason why a function in L p should be differentiable or even continuous. To incorporate such information one often turns to the Sobolev norms f W k, p [− 1 , 1 ] , defined for $1 \le p \le \infty$ and $k \ge 0$ by k j d f f W k, p [− 1 , 1 ] = dx j . p $j = 0$ The Sobolev space W k, p [− 1 , 1 ] is the space of functions for which this norm is finite.
Thus, a function lies in W k, p [− 1 , 1 ] if it and its first k derivatives all belong to $L^{p}$ [− 1 , 1 ] . There is one subtlety: we do not require f to be k times differentiable in the usual sense, but in the weaker sense of distributions [III.18](/part-03/distributions). For instance, the function $f(x) = |x|$ is not differentiable at zero, but it does have a natural weak derivative: the function  f (x) which is $- 1$ when $x < 0$ and $+ 1$ when $x > 0$ .
This function lies in $L\infty$ [− 1 , 1 ] (since the set 0 has measure zero, we do not need to specify f ( $0$ )), and therefore f lies in $W^{1}$ , $\infty$ [− 1 , 1 ] (which turns out to be the space of Lipschitz-continuous functions). We need

$212$

to consider these generalized differentiable functions because with out them the space W k, p [− 1 , 1 ] would not be complete. Sobolev norms are particularly natural and useful in the analytical study of partial differential equations and mathematical physics. For instance, the $W^{1}$ , 2 norm can be interpreted as (the square root of) an “energy” associated with a function. $3$ Properties of Function Spaces There are many ways in which knowledge of the structure of function spaces can assist in the study of functions.
For instance, if one has a good basis for the function space, so that every function in the space is a (possibly infinite) linear combination of basis elements, and one has some quantitative estimates on how this linear combination converges to the original function, then this allows one to represent that function efficiently in terms of a number of coefficients, and also allows one to approximate that function by smoother functions. For instance, one basic result about $L^{2}$ [− 1 , 1 ] is the Plancherel theorem, which asserts, among other things, that there are numbers

 (  a $n)\infty n = - \infty$ such that

N

$f -$

a $ne\pi$ inx

$\to {}^{0}$ as $N \to \infty.2n = - N$

This shows that any function in $L^{2}$ [− 1 , 1 ] can be approximated to any desired accuracy in $L^{2}$ by a trigonometric polynomial: that is, an expression of the N form $n = - Na^{n}e\pi$ inx . The number $a^{n}$ is the nth Fourier coefficient f ˆ (n) of f . It is given by the formula $11$ f ${}^{(}n) =f(x)e - \pi$ inx $dx.2 - 1$ One can regard this result as saying that the functions $e\pi$ inx form a very good basis for $L^{2}$ [− 1 , 1 ] . (They are in fact an orthonormal basis:
they have norm $1$ and the inner product of two different ones is always zero .) Another very basic fact about function spaces is that certain function spaces embed into others, so that a function from one space automatically also belongs to other spaces. Further more, there is often some inequality that gives an upper bound for one norm in terms of another.
For instance, a function in a high-regularity space such as $C^{1}$ [− 1 , 1 ] automatically belongs to a low-regularity space such as $C^{0}$ [− 1 , 1 ] , and a function in a high-integrability space such as $L\infty$ [− 1 , 1 ] automatically belongs to a low-integrability space such as $L^{1}$ [− 1 , 1 ] . (This statement is no longer

III. Mathematical Concepts

true if one replaces the interval [− 1 , 1 ] by a set of infinite measure, such as the real line R .) These inclusions cannot be reversed; however, one does have the Sobolev embedding theorem, which allows one to “trade” regularity for integrability. This result tells us that spaces with lots of regularity but low integrability can be embedded into spaces with low regularity but high integrability.
A sample estimate of this type is f $\infty \le$ f W 1 , 1 [− 1 , 1 ] , which tells us that if the integrals of |f(x)|$and$|f (x)| are both finite, then f must be bounded (which is a far stronger integrability condition than the finiteness of  f   ${}^{1})$ . Another very useful concept is that of duality [III.19](/part-03/duality). Given a function space X, one can define the dual space X ∗ , which is formally defined as the class of all continuous linear functionals on X, or more precisely all maps ω : X $\to$ R (or ω :
X $\to$ C , if the function space is complex valued) that are linear and continuous with respect to the norm of X. For example, it turns out that every linear functional ω on the space $L^{p}$ [− 1 , 1 ] is of the form $1ω(f) =$ f (x) g (x) dx $- 1$ q for some function $g$ in  L[− 1 , 1 ] , where q is the dual or conjugate exponent of p, defined by the equation $1/p + 1/q = 1$ . One can some times analyze functions in a function space by looking instead at how the linear functionals in the dual space act on those functions. Similarly, one can often analyze a continuous linear operator T :
X $\to$ Y from one function space to another by first considering the adjoint operator T ∗ : Y ∗ $\to$ X ∗ , defined for all linear functionals ω : Y $\to$ R by letting T ∗ ω be the functional on X defined by the formula T ∗ ω (x)  =  ω (T x). We mention one more important fact about function spaces, which is that certain function spaces X “interpolate” between two other function spaces $X^{0}$ and $X^{1}$ . For example, there is a natural sense in which the spaces $L^{p}$ [− 1 , 1 ] with $1 < p < \infty$ “lie between” the spaces $L^{1}$ [− 1 , 1 ]$and$ L. nfty [− 1 , 1 ] .
The precise definition of interpolation is too technical for this article, but its usefulness lies in the fact that the “extreme” spaces $X^{0}$ and $X^{1}$ are often easier to deal with than the “intermediate” spaces X. For this reason, it is some times possible to prove difficult results about X by proving much easier results about $X^{0}$ and $X^{1}$ and “interpolating” between them. For instance, it can be used to give