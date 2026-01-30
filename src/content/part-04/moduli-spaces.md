# Moduli Spaces

408

Further Reading
Those who wish to learn more about manifolds in gen-
eral can consult J. Milnor’s book Topology from the
Differentiable Viewpoint (Princeton University Press,
Princeton, NJ, 1997) or the book Differential Topol-
ogy (Prentice Hall, Englewood Cliffs, NJ, 1974), by
V. Guillemin and A. Pollack. A good introduction to
the classification problem in dimensions 2 and 3 is
the book Three-Dimensional Geometry and Topology
(Princeton University Press, Princeton, NJ, 1997), by
W. Thurston. This book also has a nice discussion
of geometric structures. A full account of Perelman’s
proof of the Poincaré conjecture can be found in Ricci     and we will give some indications as to why this might
Flow and the Poincaré Conjecture, by J. Morgan and
G. Tian (American Mathematical Society, Providence, RI,
2007). The story for topological 4-manifolds is told in    etry [IV.4](/part-04/algebra), differential geometry, and algebraic to-
the book by M. Freedman and F. Quinn titled Topology
of 4-Manifolds (Princeton University Press, Princeton,     referred to as classifying spaces.) The basic idea is to
NJ, 1990). There are no books available that serve as
general introductions to the smooth 4-manifold story.
A book that does introduce the Seiberg–Witten invari-
ants is The Seiberg–Witten Equations and Applications
to the Topology of Smooth Four-Manifolds (Princeton
University Press, Princeton, NJ, 1995), by J. Morgan.
Meanwhile, the Donaldson invariants are discussed in
detail in the book by Donaldson and P. Kronheimer
titled Geometry of Four-Manifolds (Oxford University
Press, Oxford, 1990). Finally, parts of the story for
dimensions greater than 4 are told in Lectures on
the h-Cobordism Theorem (Princeton University Press,
Princeton, NJ, 1965), by J. Milnor, and Foundational
Essays on Topological Manifolds, Smoothings and Tri-
angulations (Princeton University Press, Princeton, NJ,
1977), by R. Kirby and L. Siebenman.
IV.8 Moduli Spaces

Many of the most important problems in mathemat-
ics concern classification [I.4 §2](/part-01/general-goals). One has a class of
mathematical objects and a notion of when two objects
should count as equivalent. It may well be that two
equivalent objects look superficially very different, so     but that nevertheless illustrates many of the important
one wishes to describe them in such a way that equiva-     ideas of moduli spaces.
lent objects have the same description and inequivalent
objects have different descriptions.
   Moduli spaces can be thought of as geometric solu-
tions to geometric classification problems. In this arti-   To save writing, we are using the word “line” to mean
cle we shall illustrate some of the key features of mod-   “line that passes through the origin.” This classification

IV. Branches of Mathematics
uli spaces, with an emphasis on the moduli spaces of
riemann surfaces [III.79](/part-03/riemann-surfaces). In broad terms, a moduli
problem consists of three ingredients.
Objects: which geometric objects would we like to
describe, or parametrize?
Equivalences: when do we identify two of our objects
as being isomorphic, or “the same”?
Families: how do we allow our objects to vary, or
modulate?
In this article we will discuss what these ingredients sig-
nify, as well as what it means to solve a moduli problem,
be a good thing to do.
Moduli spaces arise through out algebraic geom-
pology [IV.6](/part-04/algebraic-topology). (Moduli spaces in topology are often
give a geometric structure to the totality of the objects
we are trying to classify. If we can understand this geo-
metric structure, then we obtain powerful insights into
the geometry of the objects themselves. Further more,
moduli spaces are rich geometric objects in their own
right. They are “meaningful” spaces, in that any state-
ment about their geometry has a “modular” interpreta-
tion, in terms of the original classification problem. As a
result, when one investigates them one can often reach
much further than one can with other spaces. Moduli
spaces such as the moduli of elliptic curves [III.21](/part-03/elliptic-curves)
(which we discuss below) play a central role in a vari-
ety of areas that have no immediate link to the geom-
etry being classified, in particular in algebraic num-
ber theory [IV.1](/part-04/number-theory) and algebraic topology. More over,
the study of moduli spaces has benefited tremendously
in recent years from interactions with physics (in par-
ticular with string theory [IV.17 §2](/part-04/vertex-operator-algebras)). These inter ac-
tions have led to a variety of new questions and new
David D. Ben-Zvi
1 Warmup: The Moduli Space
of Lines in the Plane
Let us begin with a problem that looks rather simple,
Problem. Describe the collection of all lines in the real
plane R2 that pass through the origin.

IV.8.   Moduli Spaces

problem is easily solved by assigning to each line L an
essential parameter, or modulus, a quantity that we can
calculate for each line and that will help us tell different
lines apart. All we have to do is take standard Cartesian     moduli space of lines in the plane, is that it captures
coordinates x, y on the plane and measure the angle
θ(L) between the line L and the x-axis, taken in coun-
ter clockwise fashion. We find that the possible values
of θ are those for which 0 ⩽ θ < π , and that for every
such θ there is exactly one line L that makes an angle
of θ with the x-axis. So as a set, we have a complete
solution to our classification problem: the set of lines
L, known as the real projective line RP1 , is in one-to-one   takes c to L(c) is a continuous function from C to RP1 ,
correspondence with the half-open interval [0, π ).
  However, we are seeking a geometric solution to the
classification problem. What does this entail? We have
a natural notion of when two lines are near each other,
which our solution should capture—in other words, the
collection of lines has a natural topology [III.90](/part-03/topological-spaces). So
far, our solution does not reflect the fact that lines
L for which the angle θ(L) is close to π are almost
horizontal: they are therefore close to the x-axis (for
which θ = 0) and to the lines L with θ(L) close to zero.
We need to find some way of “wrapping around” the
interval [0, π ) so that π becomes close to 0.
  One way to do this is to take not the half-open inter-
val [0, π ) but the closed interval [0, π ], and then to
“identify” the points 0 and π . (This idea can easily be
made formal by defining an appropriate equivalence
relation [I.2 §2.3](/part-01/language-and-grammar).) If π and 0 are regarded as the
same, then numbers close to π are close to numbers
close to 0. This is a way of saying that if you attach the    1.1   Other Families
two ends of a line segment together, then, topologically
speaking, you obtain a circle.
   A more natural way of achieving the same end is sug-
gested by the following geometric construction of RP1 .
Consider the unit circle S 1 ⊂ R2 . To each point s ∈ S 1 ,   is a family of lines for which the angles vary differ en-
there is an obvious way of assigning a line L(s): take
the line that passes through s and the origin. Thus, we
have a family of lines parametrized by S 1 , that is, a map   parametrize such a family appropriately, we would like
(or function) s → L(s) that takes points in S 1 to lines     RP1 to be a differentiable manifold [I.3 §6.9](/part-01/fundamental-definitions), so that
in our set RP1 . What is important about this is that we
already know what it means for two points in S 1 to be
close to each other, and the map s → L(s) is continu-
ous. However, this map is a two-to-one function rather
than a bijection, since s and −s always give the same
line. To remedy this, we can identify each s in the cir-
cle S 1 with its antipodal point −s. We then have a one-
to-one correspondence between RP1 and the resulting
quotient space [I.3 §3.3](/part-01/fundamental-definitions) (which again is topologically

409
a circle), and this correspondence is continuous in both
directions.
The key feature of the space RP1 , considered as the
the ways in which lines can modulate, or vary continu-
ously in families. But when do families of lines arise?
A good example is provided by the following con struc-
tion. Whenever we have a continuous curve C ⊂ R2 \ 0
in the plane, we can assign to each point c in C the line
L(c) that passes through 0 and c. This gives us a family
of lines parametrized by C. More over, the function that
so the parametrization is a continuous one.
Suppose, for example, that C is a copy of R realized as
the set of points (x, 1) at height 1. Then the map from
C to RP1 gives an isomorphism between R and the set
{L : θ(L) ≠ 0}, which is the subset of RP1 consisting
of all lines apart from the x-axis. Put more abstractly,
we have an intuitive notion of what it means for a col-
lection of lines through the origin to depend continu-
ously on some parameters, and this notion is captured
precisely by the geometry of RP1 : for instance, if you
tell me you have a continuous 37-parameter family of
lines in R2 , this is the same as saying that you have a
continuous map from R37 to RP1 , which sends a point
v ∈ R37 to a line L(v) ∈ RP1 . (More concretely, we
could say that the real function v → θ(L(v)) on R37
is continuous away from the locus where θ is close to
π . Near this locus we could use instead the function φ
that measures the angle from the y-axis.)
The idea of families of lines leads to various other geo-
metric structures on the space RP1 , and not just its
topological structure. For example, we have the notion
of a differentiable family of lines in the plane, which
tiably. (The same ideas apply if we replace “differ en-
tiable” by “measurable,” “C . nfty ,” “real analytic,” etc.) To
we can calculate derivatives of functions on it. Such a
structure on RP1 can be specified by using the angle
functions θ and φ defined in the previous section. The
function θ gives us a coordinate for lines that are not
too close to the x-axis, and φ gives us a coordinate for
lines that are not too close to the y-axis. We can cal-
culate derivatives of functions on RP1 by writing them
in terms of these coordinates. One can justify this dif-
ferentiable structure on RP1 by checking that for any

410

differentiable curve C ⊂ R2 \ 0 the map c → L(c) comes
out as differentiable. This means that if L(c) is not close   ing pullback of the tautological line bundle on RP1 .
to the x-axis, then the function x → θ(L(x)) is differ-
entiable at x = c, and similarly for φ and the y-axis.
The functions x → θ(L(x)) and → φ(L(x)) are called
pullbacks, because they are the result of converting, or     on X.)
“pulling back,” θ and φ from functions defined on RP1
to functions defined on C.
  We now can state the fundamental property of RP1
as a differentiable space.
A differentiable family of lines in R2 parametrized by a
differentiable manifold X is the same thing as a func-
tion from X to RP1 , taking a point x to a line L(x),
such that the pullbacks x → θ(L(x)) and x → φ(L(x))
of the functions θ, φ are differentiable functions.
   We say that RP1 (with its differentiable structure) is
the moduli space of (differentiably varying families of)
lines in R2 . This means that RP1 carries the universal
differentiable family of lines. From the very definition,
we have assigned to each point of RP1 a line in R2 , and
these lines vary differentiably as we vary the point. The
above assertion says that any differentiable family of
lines, parametrized by a space X, is described by giv-
ing a map f : X → RP1 and assigning to x ∈ X the
line L(f (x)).
1.2   Reformulation: Line Bundles
It is interesting to reformulate the notion of a (continu-   In particular, we can define the notion of winding num-
ous or differentiable) family of lines as follows. Let X be   bers. Suppose that we are given a continuous function
a space and let x → L(x) be an assignment of lines to
points in X. For each point x ∈ X, we place a copy of R2     it avoids 0. The image of this map will be a closed loop
at x; in other words, we consider the Cartesian product
X . imes R2 . We may now visualize the line L(x) as living in     from S 1 to itself: first do γ to obtain a point c in C,
the copy of R2 that lies over x. This gives us a contin-     then work out L(c), which belongs to RP1 , and finally
uously varying collection of lines L(x) parametrized
by x ∈ X, otherwise known as a line bundle over X.
More over, this line bundle is embedded in the “trivial”
vector bundle [IV.6 §5](/part-04/algebraic-topology) X . imes R2 , which is the constant
assignment that takes each x to the plane R2 . In the
case when X is RP1 itself, we have a “tautological” line
bundle: to each point s ∈ RP1 , which we can think of as     trized by some space X, we would like to measure the
a line Ls in R2 , it assigns that very same line Ls .
Proposition. For any topological space X there is a
natural bijection between the following two sets:
   (i) the set of continuous functions f : X → RP1 ; and     ing number is of the composition φf , which takes a
  (ii) the set of line bundles on X that are contained in    point x in S 1 to its image f (x) in X and from there

IV. Branches of Mathematics
This bijection sends a function f to the correspond-
That is, the function f is mapped to the line bundle
x → Lf (x) . (This is a pullback because it converts L
from a function defined on RP1 to a function defined
Thus, the space RP1 carries the universal line bun-
dle that sits in the trivial R2 bundle—any time we have
a line bundle sitting in the trivial R2 bundle, we can
obtain it by pulling back the universal (tautological)
example on RP1 .
1.3   Invariants of Families
Associated with any continuous function f from the
circle S 1 to itself is an integer known as its degree.
Roughly speaking, the degree of f is the number of
times f (x) goes around the circle when x goes around
once. (If it goes backwards n times, then we say that the
degree is −n.) Another way to think of the degree is as
the number of times a typical point in S 1 is passed by
f (x) as x goes around the circle, where we count this
as +1 if it is passed in the counter clockwise direction
and −1 if it is passed in the clockwise direction.
Earlier, we showed that the circle S 1 , which we
obtained by identifying the endpoints of the closed
interval [0, π ], could be used to parametrize the mod-
uli space RP1 of lines. Combining this with the notion
of degree, we can draw some interesting conclusions.
γ from the circle S 1 into the plane R2 and suppose that
C (which may cross itself). This defines for us a map
use the parametrization of RP1 to associate with L(c) a
point in S 1 again. The degree of the resulting compos-
ite map will be twice the number of times that γ, and
hence C, winds around 0, so half this number is defined
to be the winding number of γ.
More generally, given a family of lines in R2 parame-
“manner in which X winds around the circle.” To be pre-
cise, given a function φ from X to RP1 , which defines
the parametrized family of lines, we would like to be
able to say, for any map f : S 1 → X, what the wind-
the trivial vector bundle X . imes R2 .

$IV$ . $8$ .

Moduli Spaces

the map φ gives us a way of assigning to each function $f$ : $S^{1} \to X$ an integer, the winding number of φf . The way this assignment works does not change if φ is continuously deformed: that is, it is a topological invariant of φ. What it does depend on is the class that φ belongs to in the first cohomology group [IV.6](/part-04/algebraic-topology) of X, $H^{1}$ (X , Z). Equivalently, to any line bundle on a space X which is contained in the trivial $R^{2}$ - bundle , we have associated a cohomology class, known as the Euler class of the bundle.
This is the first example of a characteristic class [IV.6](/part-04/algebraic-topology) for vector bundles. It demonstrates that if we understand the topology of moduli spaces of classes of geometric objects, then we can define topological invariants for families of those objects. $2$ The Moduli of Curves and Teichmüller Spaces We now turn our attention to perhaps the most famous examples of moduli spaces, the moduli spaces of curves, and their first cousins, the Teichmüller spaces.
These moduli spaces are the geometric solution to the problem of classification of compact Riemann surfaces, and can be thought of as the “higher theory” of Riemann surfaces. The moduli spaces are “meaningful spaces,” in that each of their points stands for a Riemann surface. As a result, any statement about their geometry tells us something about the geometry of Riemann surfaces. We turn first to the objects. Recall that a Riemann surface is a topological surface X (connected and oriented) to which a complex structure has been given.
Complex structures can be described in many ways, and they enable us to do complex analysis, geometry, and algebra on the surface X. In particular, they enable us to define holomorphic [I.3](/part-01/fundamental-definitions) (complexanalytic) and meromorphic functions [V.31](/part-05/the-riemannroch-theorem) on open subsets of X. To be precise, X is a two-dimensional manifold, but the charts are thought of as open subsets of C rather than of R , and the maps that glue them together are required to be holomorphic.
An equivalent notion is that of a conformal structure on X, which is the structure needed to make it possible to define angles between curves in X. Yet another important equivalent notion is that of algebraic structure on X, making X into a complex-algebraic curve (leading to the persistent confusion in terminology: a Riemann surface is two dimensional, and therefore a surface, from the point of view of topology or the real numbers, but one dimensional, and therefore a curve, from the point of view of

$411$

complex analysis and algebra). An algebraic structure is what allows us to speak of polynomial, rational, or algebraic functions on X, and is usually specified by realizing X as the set of solutions to polynomial equations in complex projective space [III.72](/part-03/projective-space) C$P^{2}$ (or CP n). In order to speak of a classification problem, let alone a moduli space, for Riemann surfaces we must next specify when we regard two Riemann surfaces as equivalent. (We postpone the discussion of the final ingredient, the notion of families of Riemann surfaces, to section $2$ .
$2$ .) To do this, we must give a notion of isomorphism between Riemann surfaces: when should two Riemann surfaces X and Y be “identified,” or thought of as giving two equivalent realizations of the same underlying object of our classification? This issue was hidden in our toy example of classifying lines in the plane: there we simply identified two lines if and only if they were equal as lines in the plane. This naive option is not available to us with the more abstractly defined Riemann surfaces.
If we considered Riemann surfaces realized concretely as subsets of some larger space--for example, as solution sets to algebraic equations in complex projective space--we could similarly choose to identify surfaces only if they were equal as subsets. However, this is too fine a classification for most applications: what we care about is the intrinsic geometry of Riemann surfaces, and not incidental features that result from the particular way we choose to realize them. At the other extreme, we might choose to ignore the extra geometric structure that makes a surface into a Riemann surface.
That is, we could identify two Riemann surfaces X and Y if they are topologically equivalent, or homeomorphic (the “coffee mug is a doughnut” perspective). The classification of compact Riemann surfaces up to topological equivalence is captured by a single positive integer, the genus g (“ number of holes ”) of the surface. Any surface of genus zero is homeomorphic to the Riemann sphere C$P^{1}$ ≃ $S^{2}$ , any surface of genus $1$ is homeomorphic to a torus $S^{1} \times S^{1}$ , and so on.
Thus, in this case there is no issue of “modulation”-- the classification is solved by giving a list of possible values of a single discrete invariant. However, if we are interested in Riemann surfaces as Riemann surfaces rather than simply as topological manifolds, then this classification is too crude: it completely ignores the complex structure. We would now like to refine our classification to remedy this defect. To this end, we say that two Riemann surfaces X and Y are (conformally , or holomorphically) equivalent if there is

$412$

a topological equivalence between them that preserves the geometry, i.e., a homeomorphism that preserves the angles between curves, or takes holomorphic functions to holomorphic functions, or takes rational functions to rational functions. (These conditions are all equivalent .) Note that we still have at our disposal our discrete invariant--the genus of a surface. However, as we shall see, this invariant is not fine enough to distinguish between all inequivalent Riemann surfaces.
In fact, it is possible to have families of inequivalent Riemann surfaces that are parametrized by continuous parameters (but we cannot make proper sense of this idea until we have said precisely what is meant by a family of Riemann surfaces) . Thus, the next step is to fix our discrete invariant and to try to classify all the different isomorphism classes of Riemann surfaces with the same genus by assembling them in a natural geometric fashion. An important step toward this classification is the uniformization theorem [V.34](/part-05/the-uniformization-theorem).
This states that any simply connected Riemann surface is holomorphically isomorphic to one of the following three: the Riemann sphere C$P^{1}$ , the complex plane C , or the upper half-plane H (equivalently , the unit disk D). Since the universal covering space [III.93](/part-03/universal-covers) of any Riemann surface is a simply connected Riemann surface, the uniformization theorem provides an approach to classifying arbitrary Riemann surfaces.
For instance, any compact [III.9](/part-03/compactness-and-compactication) Riemann surface of genus zero is simply connected, and in fact homeomorphic to the Riemann sphere, so the uniformization theorem already solves our classification problem in genus zero: up to equivalence, C$P^{1}$ is the only Riemann surface of genus zero, and so in this case the topological and conformal classifications agree.

$2$ . $1$

Moduli of Elliptic Curves

Next, we consider Riemann surfaces whose universal cover is C , which is the same as saying that they are quotients of C . For example, we can look at a quotient of C by Z , which means that we regard two complex numbers $z$ and $w$ as equivalent if z  -  w is an integer. This has the effect of “wrapping C around” into a cylinder. Cylinders are not compact, but to get a compact surface we could take a quotient by $Z^{2}$ instead: that is, we could regard $z$ and $w$ as equivalent if their difference is of the form a  +  bi, where $a$ and $b$ are both integers.
Now C is wrapped around in two directions and the result is a torus with a complex (or , equivalently, conformal or algebraic) structure. This is a compact Riemann surface of genus $1$ . More generally, we

IV. Branches of Mathematics

can replace $Z^{2}$ by any lattice L, regarding $z$ and $w$ as equivalent if z  -  w belongs to L. (A lattice L in C is an additive subgroup of C with two properties. First, it is not contained in any line. Second, it is discrete, which means that there is a constant $d > 0$ such that the distance between any two points in L is at least d. Lattices are also discussed in the general goals of mathematical research [I.4](/part-01/general-goals).
A basis for a lattice L is a pair of complex numbers $u$ and $v$ belonging to L such that every z in L can be written in the form au  +  bv with $a$ and $b$ integers. Such a basis will not be unique: for example, if $L = Z$ ⊕ $Z$ , then the obvious basis is $u = 1$ and $v = i,$ but $u = 1$ and $v = 1 + i$ would do just as well .) If we take a quotient of C by a lattice, then we again obtain a torus with complex structure. It turns out that any compact Riemann surface of genus $1$ can be produced in this way.
From a topological point of view, any two tori are the same, but once we consider the complex structure we start to find that different choices of lattice may lead to different Riemann surfaces. Certain changes to L do not have an effect: for example, if we multiply a lattice L by some nonzero complex number $\lambda,$ then the quotient surface C  /  L will not be affected. That is, C  /  L is naturally isomorphic to $C/\lambda L$ . Therefore, we need only worry about the difference between lattices when one is not a multiple of the other.
Geometrically, this says that one cannot be obtained from the other by a combination of rotation and dilation. Notice that by taking the quotient C  /  L we obtain not just a “naked” Riemann surface, but one equipped with an “origin,” that is, a distinguished point e $\in$ E, which is the image of the origin $0 \in$ C . In other words, we obtain an elliptic curve: Definition. An elliptic curve (over C) is a Riemann surface E of genus $1$ , equipped with a marked point e $\in$ E. Elliptic curves, up to isomorphism, are in bijection with lattices L ⊂ C up to rotation. Remark.
In fact, since L ⊂ C is a subgroup of the Abelian group C , the elliptic curve $E = C$  /  L is naturally an Abelian group, with e as its identity element. This is an important motivation for keeping e as part of the data that defines an elliptic curve. A more subtle reason for remembering the location of e when we speak of E is that it helps us to define E more uniquely. This is useful, because any surface E of genus $1$ has lots of symmetries, or automorphisms [I.3](/part-01/fundamental-definitions) :
there is always a holomorphic automorphism of E taking any point x to any other given point y. (If we think of E

$IV$ . $8$ .

Moduli Spaces

as a group, these are achieved by translations .) Thus, if some one hands us another genus - $1$ surface E , there may be no way to identify E with E , or there may be infinitely many ways: we can always compose a given isomorphism between them with a self-symmetry of E. As we will discuss later, automorphisms haunt almost every moduli problem, and are crucial when we consider the behavior of families. It is usually convenient to “rigidify” the situation some what, so that the possible isomorphisms between different objects are less “floppy” and more uniquely determined.
In the case of elliptic curves, distinguishing the point e achieves this by reducing the symmetry of E. Once we do that, there is usually at most one way to identify two elliptic curves (one way, that is, that takes origin to origin). We see that Riemann surfaces of genus $1$ (with the choice of a marked point) can be described by concrete “linear algebra data”: a lattice L ⊂ C , or rather the equivalence class consisting of all nonzero scalar multiples $\lambda L$ of L. This is the ideal setting to study a classification, or moduli, problem.
The next step is to find an explicit parametrization of the collection of all lattices, up to multiplication, and to decide in what sense we have obtained a geometric solution to the classification problem. In order to parametrize the collection of lattices, we follow a procedure used for all moduli problems: first parametrize lattices together with the choice of some additional structure, and then see what happens when we forget this choice. For every lattice L we choose a basis $ω^{1}$ , $ω^{2} \in L:$ that is, we represent L as the set of all integer combinations $aω^{1} + bω^{2}$ .
We do this in an oriented fashion: we require that the fundamental parallelogram spanned by $ω^{1}$ and $ω^{2}$ is positively oriented. (That is, the numbers $0$ , $ω^{1}$ , $ω^{1} + ω^{2}$ , and $ω^{2}$ list the vertices of the parallelogram in a counter clockwise order.
From the geometric point of view of the elliptic curve E, L is the fundamental group [IV.6](/part-04/algebraic-topology) of E, and the orientation condition says that we generate L by two loops, or “meridians,” $A = ω^{1}$ , $B = ω^{2}$ , which are oriented, in that their oriented intersection number A ∩ $B$ is equal to $+ 1$ rather than $- 1$ .) Since we are interested in lattices only up to multiplication, we can multiply L by a complex number so as to turn ω 1 into $1$ and hence $ω^{2}$ into $ω = ω^{2}/ω^{1}$ . The orientation condition now says that ω is in the upper half-plane H :
i.e., its imaginary part is positive, $Imω > 0$ . Conversely, any complex number ω $\in$ H in the upper half-plane determines a unique oriented lattice $L = Z1$ ⊕ Z ω (that is,

$413$

the set of all integer combinations a  +  bω of $1$ and ω) and no two of these lattices are related by a rotation. What does this tell us about elliptic curves? We saw earlier that an elliptic curve is defined by a lattice L and an identity e. Now we have seen that if we give L some extra structure, namely an oriented basis, then we can parametrize it by a complex number ω $\in$ H . This makes precise for us the “additional structure” that we want to place on elliptic curves.
We say that a marked elliptic curve is an elliptic curve E, e together with the choice of an oriented basis $ω^{1}$ , $ω^{2}$ for the associated lattice (fundamental group) L of E. The point is that any lattice has infinitely many different bases, which lead to many automorphisms of E. By “marking” one of these bases, we stop them being automorphisms.

$2$ . $2$

Families and Teichmüller Spaces

With our new definition, we can summarize the earlier discussion by saying that marked elliptic curves are in bijection with points ω $\in$ H of the upper half-plane. The upper half-plane is, however, much more than just a set of points: it carries a host of geometric structures, in particular a topology and a complex structure. In what sense do these structures reflect geometric properties of marked elliptic curves?
In other words, in what sense is the complex manifold H , known in this context as the Teichmüller space $T^{1}$ , 1 of genus - $1$ Riemann surfaces with one marked point, a geometric solution to the problem of classifying marked elliptic curves? In order to answer this question, we need the notion of a continuous family of Riemann surfaces, and also the notion of a complex-analytic family.
A continuous family of Riemann surfaces parametrized by a topological space S, such as the circle $S^{1}$ , for example, is a “continuously varying” assignment of a Riemann surface X s to every point s of S. In our example of the moduli of lines in the plane, a continuous family of lines was characterized by the property that the angles between the lines and the x-axis or y-axis defined continuous functions of the parameters. Geometrically defined collections of lines, such as those produced by a curve C in the plane, then gave rise to continuous families.
More abstractly, a continuous family of lines defined a line bundle over the parameter space. A good criterion for a family of Riemann surfaces is likewise that any “reasonably defined” geometric quantity that we can calculate for every Riemann surface should vary continuously in the family. For example, a classical construction of Riemann surfaces of genus g comes from

414

taking 4 g-gons and gluing opposite sides together. The
resulting Riemann surface is fully determined by the
edge-lengths and angles of the polygon. Therefore, a
continuous family of Riemann surfaces described in
this fashion should be precisely a family such that the
edge-lengths and angles give continuous functions of
the parameter set.
   In more abstract topological terms, if we have a col-    statement precise.
lection {Xs , s ∈ S} of Riemann surfaces depending
on points in a space S and we wish to make it into
a continuous family, then we should give the union
"
  s∈S Xs itself the structure of a topological space X,     of marked elliptic curves parametrized by S. Similarly,
which should simultaneously extend the topology on
each individual Xs . The result is called a Riemann
surface bundle. Associated with X is the map that
takes each point x to the particular s for which x
belongs to Xs . We should demand that this map is
continuous, and perhaps more (it could be a fibration,
or fiber bundle). This definition has the advantage of
great flexibility. For example, if S is a complex man-
ifold, then in just the same way we can speak of a
complex-analytic family of Riemann surfaces {Xs , s ∈
S} parametrized by S: now we ask for the union of the
Xs to carry not just a topology but a complex struc-
ture (i.e., it should form a complex manifold), extend-     S to H by the identity map. This expresses the fact that
ing the complex structure on the fibers and mapping
holomorphically to the parameter set. The same holds
with “complex-analytic” replaced by “algebraic.” These
abstract definitions have the property that if our Rie-
mann surfaces are described in a concrete way—cut
out by equations, glued from coordinate patches, etc.—
then the coefficients of our equations or gluing data will
vary as complex-analytic functions in our family pre-
cisely when the family is complex analytic (and likewise
for continuous or algebraic families).
   As a reality check, note that a (continuous, analytic,   in addition a marking (that is, an oriented basis of the
or other) family of Riemann surfaces parametrized by
a single point s = S is indeed just a single Riemann
surface Xs . Just as in this simple case we wish to con-    ing? We some how need to “forget” the marking, by
sider Riemann surfaces only up to equivalence, so there     regarding two points of H as equivalent if they corre-
is a notion of equivalence or isomorphism of two ana-
lytic families {Xs } and {Xs } parametrized by the same     curve.
space S. We simply regard the families as equivalent if
the surfaces Xs and Xs are isomorphic for every s, and
if the isomorphism depends analytically on s.
  Armed with the notion of family, we can now for-
mulate the characteristic property that the upper half-     which means that it is an element
plane possesses when we think of it as the moduli space
of marked elliptic curves. We define a continuous or

IV. Branches of Mathematics
analytic family of marked elliptic curves to be a fam-
ily where the underlying genus-1 surfaces vary contin-
uously or analytically, while the choice of basepoint
es ∈ Es and the basis of the lattice Ls vary continuously.
The upper half-plane H plays a role for marked ellip-
tic curves that is similar to the role played by RP1 for
lines in the plane. The following theorem makes this
Theorem. For any topological space S, there is a one-
to-one correspondence between continuous maps from
S to H and isomorphism classes of continuous families
there is a one-to-one correspondence between analytic
maps from any complex manifold S to H and isomor-
phism classes of analytic families of marked elliptic
curves parametrized by S.
If we apply the theorem in the case where S is a single
point, it simply tells us that the points of H are in bijec-
tion with the isomorphism classes of marked elliptic
curves, as we already knew. However, it contains more
information: it says that H, with its topology and com-
plex structure, embodies the structure of marked ellip-
tic curves and the ways in which they can modulate. At
the other extreme, we could take S = H itself, mapping
H itself carries a family of marked elliptic curves, i.e.,
the collection of Riemann surfaces defined by ω ∈ H fit
together into a complex manifold fibering over H with
elliptic curve fibers. This family is called the universal
family, since by the theorem any family is “deduced”
(or pulled back) from this one universal example.
2.3   From Teichmüller Spaces to Moduli Spaces
We have arrived at a complete and satisfying picture
for the classification of elliptic curves when we choose
associated lattice L = π1 (E)). What can we say about
elliptic curves themselves, with out the choice of mark-
spond to two different markings of the same elliptic
Now, given any two bases of the group (or lattice)
Z ⊕ Z, there is an invertible 2 . imes 2 matrix with integer
entries that takes one basis to the other. If the two bases
are oriented, then this matrix will have determinant 1,
       
a b
A=            ∈ SL2 (Z)
c d

IV.8.   Moduli Spaces

of the group of invertible unimodular matrices over
Z. Similarly, given any two oriented bases (ω1 , ω2 )
and (ω1 , ω2 ) of a lattice L, which can be thought of
as oriented identifications of L with Z ⊕ Z, there is a
matrix A ∈ SL2 (Z) such that ω1 = aω1 + bω2 and
ω2 = cω1 + dω2 . If we now consider the normal-
ized bases (1, ω) and (1, ω ), where ω = ω1 /ω2 and
ω = ω1 /ω2 , then we obtain a transformation of the
upper half-plane. It is given by the formula
That is, the group SL2 (Z) is acting on the upper half-
plane by linear fractional (or Möbius) transformations
with integer coefficients, and two points in the upper
half-plane correspond to the same elliptic curve if one
can be turned into the other by means of such a trans-
formation. If this is the case, then we should regard
the two points as equivalent: that is how we formalize
the idea of “for getting” the marking. Note also that the
scalar matrix − Id in SL2 (Z), which negates both ω1 and
ω2 , acts trivially on the upper half-plane, so that we in
fact get an action of PSL2 (Z) = SL2 (Z)/{± Id} on H.
   So we come to the conclusion that elliptic curves (up
to isomorphism) are in bijection with orbits of PSL2 (Z)
on the upper half-plane, or equivalently with points of
the quotient space H/ PSL2 (Z). This quotient space has
a natural quotient topology, and in fact can be given a
complex-analytic structure, which, it turns out, identi-
fies it with the complex plane C itself. To see this one
uses the classical modular function [IV.1 §8](/part-04/number-theory) j(z),
a complex-analytic function on H which is invariant
under the modular group PSL2 (Z) and which therefore
defines a natural coordinate H/ PSL2 (Z) → C.
   It appears that we have solved the moduli prob-
lem for elliptic curves: we have a topological, and
even complex-analytic, space M1,1 = H/ PSL2 (Z) whose
points are in one-to-one correspondence with isomor-
phism classes of elliptic curves. This already qualifies
M1,1 as the coarse moduli space for elliptic curves,
which means it is as good a moduli space as we can
hope for. However, M1,1 fails an important test for a
moduli space that T1,1 passed (as we saw in section 2.2):
it is not true, even for the circle S = S 1 , that every con-   served by the transformation z → −z. Here the angle
tinuous family of elliptic curves over S corresponds to
a map from S to M1,1 .
   The reason for this failure is the problem of automor-
phisms. These are equivalences from E to itself: that is,
complex-analytic maps from E to E that preserve the
basepoint e. Equivalently, they are given by complex-
analytic self-maps of C that preserve 0 and the lattice

415
L. Such a map must be a rotation: that is, multiplication
by some complex number . ambda of modulus 1. It is easy to
check that for most lattices L in the plane, the only rota-
tion that sends L to itself is multiplication by λ = −1.
Note that this is the same −1 that we quotiented out
by to pass from SL2 (Z) to PSL2 (Z). However, there are
two special lattices that have greater symmetry. These
are the square lattice L = Z · 1 ⊕ Z · i, corresponding to
the fourth root of unity i, and the hexagonal lattice
aω + b                             L = Z · 1 ⊕ Z · e2π i/6 , corresponding to a sixth root of
ω =             .
cω + d                             unity. (Note that the hexagonal lattice is also repre-
sented by the point ω = e2π i/3 .) The square lattice,
which corresponds to the elliptic curve formed by glu-
ing the opposite sides of a square, has as its symmetries
the group Z/4 Z of rotational symmetries of the square.
The hexagonal lattice, which corresponds to the ellip-
tic curve formed by gluing the opposite sides of a reg-
ular hexagon, has as its symmetries the group Z/6 Z of
rotational symmetries of a hexagon.
We see that the number of automorphisms of an ellip-
tic curve jumps discontinuously at the special points
ω = i and ω = e2π i/6 . This already suggests that some-
thing might be wrong with M1,1 as a moduli space.
Note that we avoided this problem with the moduli
T1,1 of marked elliptic curves, since there are no auto-
morphisms of an elliptic curve that also preserve the
marking. Another place we might have observed this
problem with M1,1 is when we passed to the quotient
H/ PSL2 (Z). We avoided the automorphism λ = −1 by
quotienting by PSL2 (Z) rather than SL2 (Z). However,
the two special points i and e2π i/6 are preserved by
integer Möbius transformations of H other than the
identity, and they are the only points with that prop-
erty. This means that the quotient H/ PSL2 (Z) naturally
comes with conical singularities at the points corre-
sponding to these two orbits: one looks like a cone with
2
angle π , and the other like a cone with angle 3 π . (To
see why this is plausible, imagine the following simpler
instance of the same phenomenon. If for every complex
number z you identify z with −z, then the result is to
wrap the complex plane around into a cone with a sin-
gularity at 0. The reason 0 is singled out is that it is pre-
would be π because the identification of points is two-
to-one away from the singularity and π is half of 2π .)
It is possible to massage these singularities away using
the j-function, but they are indicating a basic difficulty.
So why do automorphisms form an obstacle to the
existence of “good” moduli spaces? We can demon-
strate the difficulty by considering an interesting con-

416

tinuous family of marked elliptic curves parametrized
by the circle S = S 1 . Let E(i) be the “square” elliptic
curve that we considered earlier, based on the lattice
of integer combinations of 1 and i. Next, for every t
between 0 and 1, let Et be a copy of E(i). Thus, we have
taken the constant, or “trivial,” family of elliptic curves
over the closed unit interval [0, 1], where every curve in
the family is E(i). Now we identify the elliptic curves at
the two ends of this family, not in the obvious way, but
by using the automorphism given by a 90◦ rotation, or
multiplication by i. This means that we are looking at
the family of elliptic curves over the circle where each
member of the family is a copy of the elliptic curve E(i),
but these copies twist by 90◦ as we go around the circle.
   It is easy to see that there is no way to capture this
family of elliptic curves by means of a map from S 1 to
the space M1,1 . Since all of the members of the family
are isomorphic, each point of the circle should map to
the same point in M1,1 (the equivalence class of i in
H). But the constant map S 1 → {i} ∈ M1,1 classifies
the trivial family S 1 . imes Ei of elliptic curves over S 1 , that   lies of genus-g surfaces. Likewise, there are spaces
is, the family where every curve is equal to E(i) but
the curves do not twist as we go around! Thus, there
are more families of elliptic curves than there are maps
to M1,1 ; the quotient space H/ PSL2 (Z) cannot handle
the complications caused by automorphisms. A variant
of this construction applies to complex-analytic fami-
lies with S 1 replaced by C× . This is a very general phe-
nomenon in moduli problems: whenever objects have
nontrivial automorphisms, we can imitate the con struc-
tion above to get nontrivial families over an interesting
parameter set, all of whose members are the same. As
a result, they cannot be classified by a map to the set
of all isomorphism classes.
   What do we do about this problem? One approach
is to resign ourselves to having coarse moduli spaces,
which have the right points and right geometry but do
not quite classify arbitrary families. Another approach
is the one that leads to T1,1 : we can fix markings of
one kind or another, which “kill” all automorphisms.
In other words, we choose enough extra structure on
our objects so that there do not remain any (nontriv-
ial) automorphisms that preserve all this decoration.
In fact, one can be far more economical than picking
a basis of the lattice L and obtaining the infinite cov-
ering T1,1 of M1,1 : one can fix a basis of L only up
to some congruence (for example, of L/2 L). Finally, we
can simply learn to come to terms with the automor-
phisms, keeping them as part of the data, resulting in
“spaces” where points have internal symmetries. This is

IV. Branches of Mathematics
the notion of an orbifold [IV.4 §7](/part-04/algebra), or stack [IV.4 §7](/part-04/algebra),
which is flexible enough to deal with essentially all
moduli problems.
3   Higher-Genus Moduli Spaces
and Teichmüller Spaces
We would now like to generalize as much as possi-
ble of the picture of elliptic curves and their mod-
uli to higher-genus Riemann surfaces. For each g we
would like to define a space Mg , called the moduli
space of curves of genus g, that classifies compact Rie-
mann surfaces of genus g and tells us how they modu-
late. Thus, the points of Mg should correspond to our
objects, compact Riemann surfaces of genus g, or, to
be more accurate, equivalence classes of such surfaces,
where two surfaces are considered to be equivalent
if there is a complex-analytic isomorphism between
them. In addition, we would like Mg to do the best
it can to embody the structure of continuous fami-
Mg, n parametrizing “n-punctured” Riemann surfaces
of genus g. This means we consider not “bare” Riemann
surfaces, but Riemann surfaces together with a “deco-
ration” or “marking” by n distinct labeled points (punc-
tures). Two of these are considered to be equivalent if
there is a complex-analytic isomorphism between them
that takes punctures to punctures and preserves labels.
Since there are Riemann surfaces with automorphisms,
we do not expect Mg to be able to classify all families
of Riemann surfaces: that is, we will expect examples
similar to the twisted square-lattice construction dis-
cussed earlier. However, if we consider Riemann sur-
faces with enough extra markings, then we will be able
to obtain a moduli space in the strongest sense. One
way to choose such markings is to consider Mg, n with
n large enough (for fixed g). Another approach will be
to mark generators of the fundamental group, leading
to the Teichmüller spaces Tg and Tg, n . We now out line
this process.
To construct the space Mg , we return to the uni-
form ization theorem. Any compact surface X of genus
g > 1 has as its universal cover the upper half-plane
H, so it is represented as a quotient X = H/Γ , where Γ
is a representation of the fundamental group of X as a
subgroup of conformal self-maps of H. The group of all
conformal automorphisms of H is PSL2 (R), the group of
linear fractional transformations with real coefficients.
The fundamental groups of all compact genus-g Rie-
mann surfaces are isomorphic to a fixed abstract group

IV.8.    Moduli Spaces

Γg , with 2 g generators Ai , Bi (i = 1, . . . , g) and one rela-
tion: that the product of all commutators Ai Bi A−1
is the identity. A subgroup Γ ⊂ PSL2 (R) that acts on H in
such a way that the quotient H/Γ is a Riemann surface
(technically, the action should have no fixed points and
should be properly discontinuous) is known as a fuch-
sian group [III.28](/part-03/fuchsian-groups). Thus, the analogue of the re pre sen-
tation of elliptic curves by lattices L ≃ Z ⊕ Z in the plane
is the representation of higher-genus Riemann surfaces
as H/Γ , where Γ is a Fuchsian group.
   The Teichmüller space Tg of genus-g Riemann sur-
faces is the space that solves the moduli problem
for genus-g surfaces when they come with a mark-
ing of their fundamental group. This means that our
objects are genus-g surfaces X plus a set of generators
Ai , Bi of π1 (X), which give an isomorphism between
π1 (X) and Γg , up to conjugation.1 Our equivalences
are complex-analytic maps that preserve the markings.
Finally, our continuous (respectively, complex-analytic)
families are continuous (complex-analytic) families of
Riemann surfaces with continuously varying markings
of the fundamental group. In other words, we are
asserting the existence of a topological space/complex
manifold Tg , with a complex-analytic family of marked
Riemann surfaces over it, and the following strong
property.
The characteristic property of Tg . For any topologi-
cal space (respectively, complex manifold) S, there is a
bijection between continuous maps (respectively, holo-
morphic maps) S → Tg and isomorphism classes of
continuous (respectively, complex-analytic) families of
marked genus-g surfaces parametrized by S.
3.1     Digression: “Abstract Nonsense”
It is interesting to note that, while we have yet to
see why such a space exists, it follows from general,
nongeometric principles—category theory [III.8](/part-03/categories) or
“abstract nonsense”—that it is completely and uniquely
determined, both as a topological space and as a com-
plex manifold, by this characteristic property. In a very
abstract way, every topological space M can be uniquely
reconstructed from its set of points, the set of paths
between these points, the set of surfaces spanning
these paths, and so on. To put it differently, we can
  1. Note that while the fundamental group of X depends on the
choice of a basepoint, π1 (X, x) and π1 (X, y) may be identified by
choosing a path from x to y, and the different choices are related by
conjugation by a loop. Thus, if we are willing to identify sets of gener-
ators Ai , Bi when they differ only by a conjugation, then we can ignore
the choice of a basepoint.

417
think of M as a “machine” that assigns to any topolog-
i Bi
−1
ical space S the set of continuous maps from S to M.
This machine is known as the “functor of points of M.”
Similarly, a complex manifold M provides a machine
that assigns to any other complex manifold S the set of
complex-analytic maps from S to M. A curious discov-
ery of category theory (the Yoneda lemma) is that for
very general reasons (having nothing to do with geom-
etry), these machines (or functors) uniquely determine
M as a space, or a complex manifold.
Any moduli problem in the sense we have described
(giving objects, equivalences, and families) also gives
such a machine, where to S we assign the set of all fam-
ilies over S, up to isomorphism. So just by setting up the
moduli problem we have already uniquely determined
the topology and complex structure on Teichmüller
space. The interesting part then is to know whether or
not there actually exists a space giving rise to the same
machine we have constructed, whether we can con-
struct it explicitly, and whether we can use its geometry
to learn interesting facts about Riemann surfaces.
3.2   Moduli Spaces and Representations
Coming back to earth, we discover that we have a fairly
concrete model of Teichmüller space at our disposal.
Once we have fixed the marking π1 (X) ≃ Γg , we are
simply looking at all ways to represent Γg as a Fuch-
sian subgroup of PSL2 (R). Ignoring the Fuchsian condi-
tion for a moment, this means finding 2 g real matrices
(up to ± Id) Ai , Bi ∈ PSL2 (R) satisfying the commuta-
tor relation of Γg . This gives an explicit set of (alge-
braic!) equations for the entries of the 2 g matrices,
which determine the space of all representations Γg →
PSL2 (R). We must now quotient out by the action of
PSL2 (R) that simultaneously conjugates all 2 g matrices
to obtain the representation variety Rep(Γg , PSL2 (R)).
This is analogous to considering lattices in C up to rota-
tion, and is motivated by the fact that the quotients
of H by two conjugate subgroups of PSL2 (R) will be
isomorphic.
Once we have described the space of all representa-
tions of Γg into PSL2 (R), we can then single out Teich-
müller space as the subset of the representation vari-
ety that consists of Fuchsian representations of Γg into
PSL2 (R). Luckily this subset is open in the re pre sen-
tation variety, which gives a nice realization of Tg as
a topological space—in fact, Tg is homeomorphic to
R6 g−6 . (This can be seen very explicitly in terms of
the Fenchel–Nielsen coordinates, which parametrize a

418

surface in Tg via a cut-and-paste procedure involving
3 g − 3 lengths and 3 g − 3 angles.) We may now try to
“forget” the marking π1 (X)  Γg , to obtain the mod-
uli space Mg of unmarked Riemann surfaces. In other
words, we would like to take Tg and identify any two
points that represent the same underlying Riemann
surface with different markings. This identification is
achieved by the action of a group, the genus-g mapping
class group MCGg or Teichmüller modular group, on
Tg , which generalizes the modular group PSL2 (Z) that
acts on H = T1,1 . (The mapping class group is defined
as the group of all self-diffeomorphisms of a genus-g
surface—remember that all such surfaces are topolog-
ically the same—modulo those diffeomorphisms that
act trivially on the fundamental group.) As in the case of   of being a torus (homeomorphic to (S 1 )2 g ), an Abelian
elliptic curves, Riemann surfaces with automorphisms
correspond to points in Tg fixed by some subgroup of
MCGg , and give rise to singular points in the quotient
Mg = Tg / MCGg .
   Representation varieties, or moduli spaces of repre-
sentations, are an important and concrete class of mod-
uli spaces that arise through out geometry, topology,
and number theory. Given any (discrete) group Γ , we
ask (for example) for a space that parametrizes homo-
morphisms of Γ into the group of n . imes n matrices. The
notion of equivalence is given by conjugation by GLn ,
and that of families by continuous (or analytic, or alge-    tky problem—is that the image is quite complicated
braic, etc.) families of matrices. This problem is inter-    to characterize intrinsically. In fact, solutions to this
esting even when the group Γ is Z. Then we are sim-
ply considering invertible n . imes n matrices (the image
of 1 ∈ Z) up to conjugacy. It turns out that there is
no moduli space for this problem, even in the coarse
sense, unless we consider only “nice enough” matri-
ces: for example, matrices that consist of only a single     In this section we give hints at some interesting ques-
Jordan block. This is a good example of a ubiquitous
phenomenon in moduli problems: one is often forced
to throw out some “bad” (unstable) objects in order to
have any chance of obtaining a moduli space. (See the
paper by Mumford and Suominen (1972) for a detailed
discussion.)
3.3   Moduli Spaces and Jacobians
The upper half-plane H = T1,1 , together with the action     beautiful discussion of this). At the other extreme, we
of PSL2 (Z), gives an appealingly complete picture of the    can ask what happens when our objects degenerate?
moduli problem for elliptic curves and its geometry.
The same cannot be said, unfortunately, for the pic-
ture of Tg as an open subset of the representation vari-     infinity.” It is important to find “meaningful” compact-
ety. In particular, the representation variety does not
even carry a natural complex structure, so we cannot

IV. Branches of Mathematics
see from this description the geometry of Tg as a com-
plex manifold. This failure reflects some of the ways
in which the study of moduli spaces is more compli-
cated for genus greater than 1. In particular, the mod-
uli spaces of higher-genus surfaces are not described
purely by linear algebra plus data about orientation, as
is the case in genus 1.
Part of the blame for this complexity lies with the fact
that the fundamental group Γg ≃ π1 (X) (g > 1) is no
longer Abelian, and in particular it is no longer equal to
the first homology group H1 (X, Z). A related problem is
that X is no longer a group. A beautiful solution to this
problem is given by the construction of the Jacobi an
Jac(X), which shares with elliptic curves the properties
group, and a complex (in fact complex-algebraic) man-
ifold. (The Jacobi an of an elliptic curve is the elliptic
curve itself.) The Jacobi an captures the “Abelian” or
“linear” aspects of the geometry of X. There is a mod-
uli space Ag for such complex-algebraic tori (known as
Abelian varieties), which does share all of the nice prop-
erties and linear algebraic description of the moduli of
elliptic curves M1,1 = A1 . The good news—the Torelli
theorem—is that by assigning to each Riemann surface
X its Jacobi an we embed Mg as a closed, complex-
analytic subset of Ag . The interesting news—the Schot-
problem have come from as far afield as the study of
nonlinear partial differential equations!
3.4   Further Directions
tions about, and applications of, moduli spaces.
Deformations and degenerations. Two of the main
topics in moduli spaces ask which objects are very near
to a given one, and what lies very far away. Deforma-
tion theory is the calculus of moduli spaces: it describes
their infinitesimal structure. In other words, given an
object, deformation theory is concerned with describ-
ing all its small perturbations (see Mazur (2004) for a
Most moduli spaces, for example the moduli of curves,
are not compact, so there are families “going off to
ifications of moduli spaces, which classify the possi-
ble degenerations of our objects. Another advantage of