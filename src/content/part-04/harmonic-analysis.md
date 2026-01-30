# Harmonic Analysis

$448$

The added complications that one encounters when one moves from negative to nonpositive curvature are exemplified by the fact that the isomorphism problem is unsolvable in one of the most prominent classes that arises: the so-called combable groups. Let us now return to free groups and ask which hyperbolic groups are the immediate neighbors of free groups. Remarkably, this vague question has a convincing answer.
One of the great triumphs of arboreal group theory is the proof that there is a finite description of the set Hom (G , F) of homomorphisms from an arbitrary finitely generated group G to a free group F . The basic building blocks in this description are what Sela calls limit groups. One of the many ways of defining a limit group L is that for each finite subset X ⊂ L there should exist a homomorphism to a finitely generated free group that is injective on X.
Limit groups can also be defined as those whose first-order logic [IV.23](/part-04/logic-and-model-theory) resembles that of a free group in a precise sense. To see how first-order logic can be used to say something nontrivial about a group, consider the sentence ∀x, y, z ( $xy \n\text{eq yx}$ ) ∨ ( $yz \n\text{eq zy}$ ) ∨ ( $xz = zx$ ) ∨ $(y = 1)$ . A group with this property is commutative transitive: if x commutes with $y \neq 1$ , and y commutes with z, then x commutes with z.
Free groups and Abelian groups have this property but a direct product of non-Abelian free groups, for example, does not. It is a simple exercise to show that free Abelian groups are limit groups. But if one restricts attention to groups that have precisely the same first-order logic as free groups, one gets a smaller class consisting only of hyperbolic groups. The groups in this class are the subject of intense scrutiny at the moment. They all have negatively curved two-dimensional classifying spaces, built from graphs and hyperbolic surfaces in a hierarchical manner.
The fundamental groups Σ g of closed surfaces of genus $g \ge 2$ lie in this class, lending substance to the traditional opinion in combinatorial group theory that, among nonfree groups, it is the groups Σ g that resemble free groups F n most closely. Incorporating this opinion into our earlier discussion, we arrive at the view that the groups Z n , the free groups F n , and the groups Σ g are the most basic of infinite groups. This is the start of a rich vein of ideas involving the automorphisms of these groups. In particular, there are many striking parallels between

IV. Branches of Mathematics

their outer automorphism groups GL n (Z), Out (F n), and Mod g   Out (Σ g) (the mapping class group). These three classes of groups play a fundamental role across a broad spectrum of mathematics. I have mentioned them here in order to make the point that, beyond the search for knowledge about natural classes of groups, there are certain “gems” in group theory that merit a deep and penetrating study in their own right.
Other groups that people might suggest for this category include Coxeter groups (generalized reflection groups, for which Γ $\Delta$ is a prototype) and Artin groups (particularly braid groups [III.4](/part-03/braid-groups), which again crop up in many branches of mathematics). I have thrown classes of groups at you thick and fast in this last section. Even so, there are many fascinating classes of groups and important issues that I have ignored completely.
But so it must be, for as Higman’s theorem assures us, the challenges, joys, and frustrations of finitely presented groups can never be exhausted.

Further Reading

Bridson, M. R., and A. Haefliger. 1999 . Metric Spaces of Non-Positive Curvature. Grundlehren der Mathematischen Wissenschaften, volume $319$ . Berlin: Springer. Gromov, M. 1984 . Infinite groups as geometric objects. In Proceedings of the International Congress of Mathematicians, Warszawa, Poland, 1983 , volume $1$ , $pp. 385 - 92$ . Warsaw: PWN. . 1993 . Asymptotic invariants of infinite groups. In Geometric Group Theory, volume $2$ . London Mathematical Society Lecture Note Series, volume $182$ . Cambridge: Cambridge University Press. Lyndon, R. C., and P. E. Schupp. 2001 .
Combinatorial Group Theory. Classics in Mathematics. Berlin: Springer. $IV$ . $11$ Harmonic Analysis

Terence Tao

$1$

Introduction

Much of analysis tends to revolve around the study of general classes of functions [I.2](/part-01/language-and-grammar) and operators [III.50](/part-03/linear-operators-and-their-properties) . The functions are often real-valued or complexvalued, but may take values in other sets, such as a vector space [I.3](/part-01/fundamental-definitions) or a manifold [I.3](/part-01/fundamental-definitions). An operator is itself a function, but at a “second level,” because its domain and range are themselves spaces of functions:
that is, an operator takes a function (or perhaps more than one function) as its input and returns a transformed function as its output. Harmonic analysis

$IV$ . $11$ .

Harmonic Analysis

focuses in particular on the quantitative properties of such functions, and how these quantitative properties change when various operators are applied to them. 1 What is a “quantitative property” of a function? Here are two important examples. First, a function is said to be uniformly bounded if there is some real number M such that $|f(x)| \le M$ for every x. It can often be useful to know that two functions $f$ and $g$ are “uniformly close,” which means that their difference f  -  g is uniformly bounded with a small bound M.
Second, a function is called square integrable if the integral $|f(x)|^{2}dx$ is finite. The square integrable functions are important because they can be analyzed using the theory of hilbert spaces [III.37](/part-03/bayesian-analysis). A typical question in harmonic analysis might then be the following: if a function f : R n $\to$ R is square integrable, its gradient $\nablaf$ exists, and all the n components of $\nablaf$ are also square integrable, does this imply that f is uniformly bounded? (The answer is yes when $n = 1$ , and no, but only just, when $n = 2$ ;
this is a special case of the Sobolev embedding theorem, which is of fundamental importance in the analysis of partial differential equations [IV.12](/part-04/analysis).) If so, what are the precise bounds one can obtain? That is, given the integrals of $|f|^{2}$ and |(. ablaf)i|2 , what can you say about the uniform bound M that you obtain for f ? Real and complex functions are of course very familiar in mathematics, and one meets them in high school. In many cases one deals primarily with special functions [III.85](/part-03/special-functions) :
polynomials, exponentials, trigonometric functions, and other very concrete and explicitly defined functions. Such functions typically have a very rich algebraic and geometric structure, and many questions about them can be answered exactly using techniques from algebra and geometry. However, in many mathematical contexts one has to deal with functions that are not given by an explicit formula.
For example, the solutions to ordinary and partial differential equations often cannot be given in an explicit algebraic form (as a composition of familiar functions such as polynomials, exponential functions [III.25](/part-03/the-exponential-and-logarithmic-functions), and trigonometric functions [III.92](/part-03/trigonometric-functions)). In such cases, how does one think about a function? The $1$ . Strictly speaking, this sentence describes the field of real-variable harmonic analysis.
There is another field called abstract harmonic analysis, which is primarily concerned with how real- or complexvalued functions (often on very general domains) can be studied using symmetries such as translations or rotations (for instance, via the Fourier transform and its relatives); this field is of course related to real-variable harmonic analysis, but is perhaps closer in spirit to representation theory and functional analysis, and will not be discussed here.

$449$

answer is to focus on its properties and see what can be deduced from them: even if the solution of a differential equation cannot be described by a useful formula, one may well be able to establish certain basic facts about it and be able to derive interesting consequences from those facts. Some examples of properties that one might look at are measurability, boundedness, continuity, different i ability, smoothness, analyticity, integrability, or quick decay at infinity. One is thus led to consider interesting general classes of functions:
to form such a class one chooses a property and takes the set of all functions with that property. Generally speaking, analysis is much more concerned with these general classes of functions than with individual functions. (See also function spaces [III.29](/part-03/function-spaces).) This approach can in fact be useful even when one is analyzing a single function that is very structured and has an explicit formula.
It is not always easy, or even possible, to exploit this structure and formula in a purely algebraic manner, and then one must rely (at least in part) on more analytical tools instead. A typical example is the Airy function

$\infty 3$

e i (x ξ  +  ξ) dξ.

$Ai(x) =- \infty$

Although this is defined explicitly as a certain integral, if one wants to answer such basic questions as whether Ai (x) is always a convergent integral, and whether this integral goes to zero as $x \to ±\infty,$ it is easiest to proceed using the tools of harmonic analysis. In this case, one can use a technique known as the principle of stationary phase to answer both these questions affirmatively, although there is the rather surprising fact that the Airy function decays almost exponentially fast as $x \to + \infty$ , but only polynomially fast as $x \to - \infty$ .
Harmonic analysis, as a subfield of analysis, is particularly concerned not just with qualitative properties like the ones mentioned earlier, but also with quantitative bounds that relate to those properties. For instance, instead of merely knowing that a function f is bounded, one may wish to know how bounded it is. That is, what is the smallest $M \ge 0$ such that $|f(x)| \le M$ for all (or almost all )$x \in R$ ; this number is known as the sup norm or L $\infty$ - norm of f , and is denoted  f   L $\infty$ .
Or instead of assuming that f is square integrable one can quantify this by introducing the $L^{2}$ - norm  f   {}L 2 = ( |f(x)|2 dx)1/2 ; more generally one can quantify pth-power integrability for $0 < p < \infty$ via the $L^{p}$ - norm  f   {}L p = ( |f(x)|pdx)1/p . Similarly, most of the other qualitative properties mentioned above can be quantified by a variety of norms [III.62](/part-03/normed-spaces-and-banach-spaces),

450

which assign a nonnegative number (or +. nfty) to any
given function and which provide some quantitative
measure of one characteristic of that function. Be sides
being of importance in pure harmonic analysis, quanti-
tative estimates involving these norms are also useful
in applied mathematics, for instance in performing an
error analysis of some numerical algorithm.
   Functions tend to have infinitely many degrees of
freedom, and it is thus unsurprising that the number
of norms one can place on a function is infinite as well:     This operator has a well-known (partial) inverse, inte-
there are many ways of quantifying how “large” a func-
tion is. These norms can often differ quite dramatically
from each other. For instance, if a function f is very
large for just a few values, so that its graph has tall,
thin “spikes,” then it will have a very large L. nfty -norm,
but |f (x)| dx, its L1 -norm, may well be quite small.
Conversely, if f has a very broad and spread-out graph,
then it is possible for |f (x)| dx to be very large even
if |f (x)| is small for every x: such a function has a
large L1 -norm but a small L. nfty -norm. Similar examples
can be constructed to show that the L2 -norm some-
times behaves very differently from either the L1 -norm
or the L. nfty -norm. However, it turns out that the L2 -norm     g are two functions, then their pointwise product f g
lies “between” these two norms, in the sense that if one     is defined in the obvious way:
controls both the L1 -norm and the L. nfty -norm, then one
also automatically controls the L2 -norm. Intuitively, the
reason is that if the L. nfty -norm is not too large then one     The convolution, denoted f ∗ g, is defined as follows:
eliminates all the spiky functions, and if the L1 -norm is
small then one eliminates most of the broad functions;
the remaining functions end up being well-behaved in
the intermediate L2 -norm. More quantitatively, we have
the inequality

which follows easily from the trivial algebraic fact that    has grown considerably, and the methods of harmonic
if |f (x)| ⩽ M, then |f (x)|2 ⩽ M|f (x)|. This inequality    analysis have been brought to bear on a much broader
is a special case of hölder’s inequality [V.19](/part-05/inequalities), which
is one of the fundamental inequalities in harmonic
analysis. The idea that control of two “extreme” norms
automatically implies further control on “intermedi-
ate” norms can be generalized tremendously and leads
to very powerful and convenient methods known as
interpolation, which is another basic tool in this area.     ber theory, when one is faced with understanding the
   The study of a single function and all its norms
eventually gets some what tiresome, though. Nearly all
fields of mathematics become a lot more interesting
when one considers not just objects, but also maps
between objects. In our case, the objects in question
are functions, and, as was mentioned in the intro duc-
tion, a map that takes functions to functions is usually     both qualitative and quantitative information about

IV. Branches of Mathematics
referred to as an operator. (In some contexts it is also
called a transform [III.91](/part-03/transforms).) Operators may seem like
fairly complicated mathematical objects—their inputs
and outputs are functions, which in turn have inputs
and outputs that are usually numbers—but they are in
fact a very natural concept since there are many sit-
ua tions where one wants to transform functions. For
example, differentiation can be thought of as an oper-
ator, which takes a function f to its derivative df /dx.
gration, which takes f to the function F that is defined
by the formula
x
F (x) =         f (y) dy.
−. nfty
A less intuitive, but particularly important, example
is the fourier transform [III.27](/part-03/the-fourier-transform). This takes f to a
function fˆ, given by the formula
. nfty
fˆ(x) =        e−2π ixy f (y) dy.
−. nfty
It is also of interest to consider operators that take
two or more inputs. Two particularly common exam-
ples are the pointwise product and convolution. If f and
(f g)(x) = f (x)g(x).
. nfty
f ∗ g(x) =         f (y)g(x − y) dy.
−. nfty
This is just a very small sample of interesting opera-
tors that one might look at. The original purpose of
harmonic analysis was to understand the operators
1/2    1/2                     that were connected to Fourier analysis, real analysis,
f L2 ⩽ f L1 f L. nfty ,
and complex analysis. Nowadays, however, the subject
set of operators. For example, they have been partic-
ularly fruitful in understanding the solutions of vari-
ous linear and nonlinear partial differential equations,
since the solution of any such equation can be viewed
as an operator applied to the initial conditions. They
are also very useful in analytic and combinatorial num-
oscillation present in various expressions such as expo-
nential sums. Harmonic analysis has also been applied
to analyze operators that arise in geometric measure
theory, probability theory, ergodic theory, numerical
analysis, and differential geometry.
A primary concern of harmonic analysis is to obtain

IV.11.     Harmonic Analysis

the effects of these operators on generic functions.
A typical example of a quantitative estimate is the
inequality

which is true for all f , g ∈ L2 . This result, which is a
special case of Young’s inequality, is easy to prove: one
just writes out the definition of f ∗ g(x) and applies
the cauchy–schwarz inequality [V.19](/part-05/inequalities). As a conse-
quence, one can draw the qualitative conclusion that
the convolution of two functions in L2 is always con-
tinuous. Let us briefly sketch the argument, since it is
an instructive one.
   A fundamental fact about functions in L2 is that any
such function f can be approximated arbitrarily well
(in the L2 -norm) by a function f ̃ that is continuous and     ficients (cn : −N ⩽ n ⩽ N). If we know that f can
compactly supported. (The second condition means that
f ̃ takes the value zero every where out side some inter-
val [−M, M].) Given any two functions f and g in L2 , let
f ̃ and g̃ be approximations of this kind. It is an exercise
in real analysis to prove that f ̃ ∗ g̃ is continuous, and
it follows easily from the inequality above that f ̃ ∗ g̃ is
close to f ∗ g in the L. nfty -norm, since

Therefore, f ∗ g can be approximated arbitrarily well
in the L. nfty -norm by continuous functions. A standard
result in basic real analysis (that a uniform limit of con-
tinuous functions is continuous) now tells us that f ∗ g
is continuous.
   Notice the general structure of this argument, which
occurs frequently in harmonic analysis. First, one iden-
tifies a “simple” class of functions for which one can
easily prove the result one wants. Next, one proves that
every function in a much wider class can be approx i-
mated in a suitable sense by simple functions. Finally,
one uses this information to deduce that the result
holds for functions in the wider class as well. In our
case, the simple functions were the continuous func-
tions of finite support, the wider class consisted of
square-integrable functions, and the suitable sense of
approximation was closeness in the L2 -norm.
   We shall give some further examples of qualita-
tive and quantitative analysis of operators in the next
section.

To illustrate the interplay between quantitative and
qualitative results, we shall now sketch some of the

451
basic theory of summation of Fourier series, which his-
tori cally was one of the main motivations for studying
harmonic analysis.
f ∗ gL. nfty ⩽ f L2 gL2 ,
periodic with period 2π : that is, functions such that
f (x + 2π ) = f (x) for all x. An example of such a func-
tion is f (x) = 3 + sin(x) − 2 cos(3 x). A function like
this, which can be written as a finite linear combina-
tion of functions of the form sin(nx) and cos(nx), is
called a trigonometric polynomial. The word “polyno-
mial” is used here because any such function can be
expressed as a polynomial in sin(x) and cos(x), or
alternatively, and some what more conveniently, as a
polynomial in eix and e−ix . That is, it can be written
N
as n=−N cn einx for some N and some choice of coef-
be expressed in this form, then we can work out the
coefficient cn quite easily: it is given by the formula
2π
1
cn =
2π 0
It is a remarkable and very important fact that we
can say something similar about a much wider class of
functions—if, that is, we now allow infinite linear com-
f ∗ g − f ̃ ∗ g̃ = f ∗ (g − g̃) + (f − f ̃) ∗ g̃.
also continuous (or, more generally, that f is absolutely
integrable, meaning that the integral of |f (x)| between
0 and 2π is finite). We can then define the Fourier coef-
ficients fˆ(n) of f , using exactly the formula we had
above for cn :
2π
1
fˆ(n) =
2π 0
The example of trigonometric polynomials now sug-
gests that one should have the identity
. nfty

f (x) =          fˆ(n)einx ,
n=−. nfty
expressing f as a sort of “infinite trigonometric poly-
nomial,” but this is not always true, and even when it is
true it takes some effort to justify it rigorously, or even
to say precisely what the infinite sum means.
To make the question more precise, let us introduce
for each natural number N the Dirichlet summation
operator SN . This takes a function f to the function
SN f that is defined by the formula

N
SN f (x) =          fˆ(n)einx .
n=−N
2   Example: Fourier Summation
The question we would like to answer is whether SN f
converges to f as N → . nfty. The answer turns out to
be surprisingly complicated: not only does it depend

$452$

on the assumptions that one places on the function f , but it also depends critically on how one defines “convergence.” For example, if we assume that f is continuous and ask for the convergence to be uniform, then the answer is very definitely no: there are examples of continuous functions f for which S N f does not even converge pointwise to f . However, if we ask for a weaker form of convergence, the answer is yes:
S N f will necessarily converge to f in the L p topology for any $0 < p < \infty,$ and even though it does not have to converge pointwise, it will converge almost every where, meaning that the set of x for which S N f (x) does not converge to x has measure [III.55](/part-03/measures) zero.
If instead one assumes only that f is absolutely integrable, then it is possible for the partial sums S N f to diverge at every single point x, as well as being divergent in the $L^{p}$ topology for every p such that $0 < p \le \infty.$ The proofs of all of these results ultimately rely on very quantitative results in harmonic analysis, and in particular on various L ptype estimates on the Dirichlet sum S N f (x), as well as estimates connected with the closely related maximal operator, which takes f to the function sup $N > {}^{0}|S^{N}f(x)|$ .
As these results are a little tricky to prove, let us first discuss a simpler result, in which the Dirichlet summation operators S N are replaced by the Fejér summation operators F N . For each N, the operator F N is the average of the first N Dirichlet operators: that is, it is given by the formula

$1(S^{0} +$ · · · $+ S^{N} - {}^{1})$ .

$F^{N} =$

N

It is not hard to show that if S N f converges to f , then so does F N f . However, by averaging the S N f we allow cancellations to take place that some times make it possible for F N f to converge to f even when S N f does not. Indeed, here is a sketch of a proof that F N f converges to f whenever f is continuous and periodic--which, as we have seen, is far from true of S N f . In its basic structure, the argument is similar to the one we used when showing that the convolution of two functions in $L^{2}$ is continuous.
Note first that the result is easy to prove when f is a trigonometric polynomial, since then S N $f = f$ for every N from some point onward. Now the Weierstrass approximation theorem says that every continuous periodic function f can be uniformly approximated by trigonometric polynomials: that is, for every $ε > 0$ there is a trigonometric polynomial such that  f  -  g  $L\infty \le ε.$ We know that F N g is close to g for large N (since g is a trigonometric polynomial), and would like to deduce the same for f .

IV. Branches of Mathematics

The first step is to use some routine trigonometric manipulation to prove the identity sin ${}^{2}(\frac{1}{2}Ny ) \pi$

F N f (x)  = 

f (x  -  y) dy.

$2 1- \pi N$ sin  (  y  ) 

$2$

The precise form of this expression is less important than two properties of the function sin ${}^{2}(\frac{1}{2}Ny ) u(y) =1N$ sin ${}^{2}(2y)$

that we shall use. One is that u (y) is always nonneg$\pi$ ative and the other is that $- \piu(y)dy = 1$ . These two facts allow us to say that

$\pi$

F N h (x)  = 

u (y) h (x  -  y) dy

$- \pi\pi\le$  h  $L\infty u(y)dy =$  h  $L\infty$ .

$- \pi$

That is,  $F^{N}$ h  $L\infty \le$  h  $L\infty$ for any bounded function h. To apply this result, we choose a trigonometric polynomial g such that  f  -  g  $L\infty \le ε$ and let $h = f - g.$ Then we find that  $F^{N}$ h  $L\infty =$  F $Nf - F^{N}$ g  $L\infty \le ε$ as well. As mentioned above, if we choose N large enough, then  F $Ng -$ g  $L\infty \le ε,$ and then we use the triangle inequality [V.19](/part-05/inequalities) to say that F $Nf - fL\infty\le$  F $Nf - F^{N}$ g  $L\infty +$  F $Ng -$ g  $L\infty +$  g $- fL\infty$ .
Since each term on the right-hand side is at most ε, this shows that  F $Nf - fL\infty$ is at most 3ε . And since ε can be made arbitrarily small, this shows that F N f converges to f . A similar argument (using minkowski’s integral inequality [V.19](/part-05/inequalities) instead of the triangle inequality) shows that  F $Nf{}^{Lp} \le$  f   L p for all $1 \le p \le \infty,f \in L^{p}$ , and $N \ge 1$ . As a consequence, one can modify the above argument to show that F N f converges to f in the L p topology for every f $\in$ L p .
A slightly more difficult result (relying on a basic result in harmonic analysis known as the Hardy-Littlewood maximal inequality) asserts that, for every $1 < p \le \infty,$ there exists a constant C p such that one has the inequality sup N | F N f |   L p $\le$ C p  f   L p for all f $\in$ L p ; as a consequence, one can show that F N f converges to f almost every where for every $f \in L^{p}$ and $1 < p \le \infty. A$ slight modification of this argument also allows one to treat the endpoint case when f is merely assumed to be absolutely integrable;
see the discussion on the Hardy-Littlewood maximal inequality at the end of this article.

$IV$ . $11$ .

Harmonic Analysis

Now let us return briefly to Dirichlet summation. Using some fairly sophisticated techniques in harmonic analysis (such as Calderón-Zygmund theory) one can show that when $1 < p < \infty$ the Dirichlet operators $S^{N}$ are bounded in L p uniformly in N. In other words, for every p in this range there exists a positive real number C p such that  S N f   L p $\le$ C p  f   L p for every function f in L p and every nonnegative integer N.
As a consequence, one can show that S N f converges to f in the L p topology for all f in L p and every p such that $1 < p < \infty.$ However, the quantitative estimate on $S^{N}$ fails at the endpoints $p = 1$ and $p = \infty,$ and from this one can also show that the convergence result also fails at these endpoints (either by explicitly constructing a counterexample or by using general results such as the so-called uniform boundedness principle). What happens if we ask for S N f to converge to f almost every where?
Almost-every where convergence does not follow from convergence in L p when p $<\infty,$ so we cannot use the above results to prove it. It turns out to be a much harder question, and was a famous open problem, eventually answered by carleson’s theorem [V.5](/part-05/carlesons-theorem) and an extension of it by Hunt.
Carleson proved that one has an estimate of the form sup $N|S^{N}f|{}^{Lp} \le C^{p}$  f   L p in the case $p = 2$ , and Hunt generalized the proof to cover all $p$ with $1 <p < \infty.$ This result implies that the Dirichlet sums of an L p function do indeed converge almost every where when $1 < p \le \infty.$ On the other hand, this estimate fails at the endpoint $p = 1$ , and there is in fact an example due to kolmogorov [VI.88](/part-06/andrei-nikolaevich-kolmogorov-19031987) of an absolutely integrable function whose Dirichlet sums are every where divergent.
These results require a lot of harmonic analysis theory. In particular they use many decompositions of both the spatial variable and the frequency variable, keeping the Heisenberg uncertainty principle in mind. They then carefully reassemble the pieces, exploiting various manifestations of orthogonality. To summarize, quantitative estimates such as L p estimates on various operators provide an important route to establishing qualitative results, such as convergence of certain series or sequences.
In fact there are a number of principles (notably the uniform boundedness principle and a result known as Stein’s maximal principle) which assert that in certain circumstances this is the only route, in the sense that a quantitative estimate must exist in order for the qualitative result to be true.

4533 Some General Themes in Harmonic Analysis: Decomposition, Oscillation, and Geometry One feature of harmonic analysis methods is that they tend to be local rather than global. For instance, if one is analyzing a function f it is quite common to decompose it as a sum $f = f^{1} +$ · · · $+ f^{k}$ , with each function $f^{i}$ “localized” in the sense that its support (the set of values x for which f i (x)   $= 0$ ) has a small diameter. This would be called localization in the spatial variable.
One can also localize in the frequency variable by applying the process to the Fourier transform f ˆ of f . Having split f up like this, one can carry out estimates for the pieces separately and then recombine them later. One reason for this “divide and conquer” strategy is that a typical function f tends to have many different features--for example, it may be very “spiky,” “discontinuous,” or “high frequency” in some places, and “smooth” or “low frequency” in others--and it is difficult to treat all of these features at once.
A well-chosen decomposition of the function f can isolate these features from each other, so that each component has only one salient feature that could cause difficulty: the spiky part can go into one f i , the high-frequency part into another, and so on. In reassembling the estimates from the individual components, one can use crude tools such as the triangle inequality or more refined tools, for instance those relying on some sort of orthogonality, or perhaps a clever algorithm that groups the components into manageable clusters.
The main drawback of the decomposition method (other than an aesthetic one) is that it tends to give bounds that are not quite optimal; however, in many cases one is content with an estimate that differs from the best possible one by a multiplicative constant. To give a simple example of the method of decomposition, let us consider the Fourier transform f ˆ (ξ) of a function f : R $\to$ C , defined (for suitably nice functions f) by the formula f ${} ( ξ) =f(x)e - 2\pi$ ixξ  dx.

R

What we can say about the size of f ˆ , as measured by suitable norms, if we are given information about the size of f , as measured by other norms? Here are two simple observations in response to this question. First, since the modulus of $e - 2\pi$ ixξ is always equal to $1$ , it follows that |fˆ ( ξ)| is at most  R|f(x)|dx. This tells us that   f $L\infty \le$  f   L 1 , at least if $f \in L^{1}$ . In particular, f\in L. nfty . Secondly, the Plancherel theorem, a very basic fact of Fourier analysis, tells us that   f ˆ   $L^{2}$ is

$454$

equal to  f   L 2 if $f \in L^{2}$ . Therefore, if f belongs to $L^{2}$ then so does f ˆ . We would now like to know what happens if f lies in an intermediate L p space. In other words, what happens if $1 < p < 2$ ? Since $L^{p}$ is not contained in either $L^{1}$ or $L^{2}$ , one cannot use either of the above two results directly. However, let us take a function f $\in$ L p and consider what the difficulty is. The reason f may not lie in $L^{1}$ is that it may decay too slowly:
for instance, the function $f(x) = (1 + |x|) - 3/4$ tends to zero more slowly than $1/x$ as $x \to \infty,$ so its integral is infinite. However, if we raise f to the power $3/2$ we obtain the function $(1 + |x|) - 9/8$ which decays quickly enough to have a finite integral, so f does belong to $L^{3}/ {}^{2}$ . Similar examples show that the reason f may fail to belong to $L^{2}$ is that it can have places where it tends to infinity slowly enough for the integral of |$f$| p to be finite but not slowly enough for the integral of $|f|^{2}$ to be finite.
Notice that these two reasons are completely different. Therefore, we can try to decompose f into two pieces, one consisting of the part where f is large and the other consisting of the part where f is small. That is, we can choose some threshold $\lambda$ and define $f^{1}$ (x) to be  f(x) when $|f(x)| < \lambda$ and $0$ otherwise, and define $f^{2}(x)$ to be  f(x) when $|f(x)| \ge \lambda$ and $0$ otherwise. Then $f^{1} + f^{2} = f$ , and $f^{1}$ and $f^{2}$ are the “small part” and “large part” of f , respectively.
Because $|f^{1}(x)| < \lambda$ for every x, we find that $|f^{1}(x)|^{2} = |f^{1}(x)|^{2} - p|f^{1}(x)|^{p} < \lambda^{2} - p|f^{1}(x)|^{p}$ . Therefore, $f^{1}$ belongs to $L^{2}$ and  $f^{1}{}^{L2} \le \lambda^{2} - pf^{1}{}^{Lp}$ . Similarly, because $|f^{2}(x)| \ge \lambda$ whenever $f^{2}(x)= 0$ , we have the inequality $|f^{2}(x)| \le |f^{2}(x)|^{p}/\lambda^{p} - {}^{1}$ for every x, which tells us that $f^{2}$ belongs to $L^{1}$ and that  $f^{2}{}^{L1} \le f_{2}{}^{Lp}/\lambda^{p} - {}^{1}$ .
From our knowledge about the $L^{2}$ - norm of $f^{1}$ and the $L^{1}$ - norm of $f^{2}$ we can obtain upper bounds for the $L^{2}$ - norm of $f^{1}$ and the $L\infty$ - norm of $f^{2}$ , by our remarks above. By using this strategy for every $\lambda$ and combining the results in a clever way, one can obtain the Hausdorff-Young inequality, which is the following assertion. Let p lie between $1$ and $2$ and let p be the dual exponent of p, which is the number $p/(p - 1)$ .
Then there is a constant C p such that, for every function f $\in$ L p , one has the inequality   f ˆ   L p $\le$ C p  f   L p . The particular decomposition method we have used to obtain this result is formally known as the method of real interpolation. It does not give the best possible value of $C^{p}$ , which turns out to be p1/2 p/(p)1/2 p , but that requires more delicate methods.

IV. Branches of Mathematics

Another basic theme in harmonic analysis is the attempt to quantify the elusive phenomenon of oscillation. Intuitively, if an expression oscillates wildly, then we expect its average value to be relatively small in magnitude, since the positive and negative parts, or in the complex case the parts with a wide range of different arguments, will cancel out. For instance, if $a 2\pi$ - periodic function f is smooth, then for large n the

Fourier coefficient

$\pi1$

f ${}^{(}n) =$

f (x) e  -  inx

$2\pi - \pi\pi$

will be very small since $- \pie -$ inx $= 0$ and the comparatively slow variation in f (x) is not enough to stop the cancellation occurring. This assertion can easily be proved rigorously by repeated integration by parts. Generalizations of this phenomenon include the so-called principle of stationary phase, which among other things allows one to obtain precise control on the Airy function Ai (x) discussed earlier. It also yields the Heisenberg uncertainty principle, which relates the decay and smoothness of a function to the decay and smoothness of its Fourier transform.
A some what different manifestation of oscillation lies in the principle that if one has a sequence of functions that oscillate in different ways, then their sum should be significantly smaller than the bound that follows from the triangle inequality. Again, this is the result of cancellation that is simply not noticed by the triangle inequality. For instance, the Plancherel theorem in Fourier analysis implies, among other things, N that a trigonometric polynomial n $= -$ N c n e inx has an $L^{2}$ - norm of

$2 1/2{}^{2}\pi$

N

N

$1/21$

c n e inx

$|c^{n}|^{2}$

 = / $2\pi 0n = - Nn = - N$

This bound (which can also be proved by direct calcu N lation) is smaller than the upper bound of $n = - N|c^{n}|$ that would be obtained if we simply applied the triangle inequality to the functions c n e inx . This identity can be viewed as a special case of the Pythagorean theorem, together with the observation that the harmonics e inx are all orthogonal to each other with respect to the inner product [III.37](/part-03/bayesian-analysis)

$2\pi1$

f , $g = f$ (x) g (x) dx.

$2\pi 0$

This concept of orthogonality has been generalized in a number of ways. For instance, there is a more general and robust concept of “almost orthogonality,” which roughly speaking means that the inner products of a collection of functions are small but not necessarily $0$ .