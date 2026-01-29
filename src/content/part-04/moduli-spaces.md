# Moduli Spaces

408                                                                                  IV. Branches of Mathematics

Further Reading                                            uli spaces, with an emphasis on the moduli spaces of
                                                           riemann surfaces [III.79](/part-03/riemann-surfaces). In broad terms, a moduli
Those who wish to learn more about manifolds in gen-
                                                           problem consists of three ingredients.
eral can consult J. Milnor’s book Topology from the
Differentiable Viewpoint (Princeton University Press,       Objects: which geometric objects would we like to
Princeton, NJ, 1997) or the book Differential Topol-          describe, or parametrize?
ogy (Prentice Hall, Englewood Cliffs, NJ, 1974), by         Equivalences: when do we identify two of our objects
V. Guillemin and A. Pollack. A good introduction to          as being isomorphic, or “the same”?
the classification problem in dimensions 2 and 3 is         Families: how do we allow our objects to vary, or
the book Three-Dimensional Geometry and Topology             modulate?
(Princeton University Press, Princeton, NJ, 1997), by
W. Thurston. This book also has a nice discussion          In this article we will discuss what these ingredients sig-
of geometric structures. A full account of Perelman’s      nify, as well as what it means to solve a moduli problem,
proof of the Poincaré conjecture can be found in Ricci     and we will give some indications as to why this might
Flow and the Poincaré Conjecture, by J. Morgan and         be a good thing to do.
G. Tian (American Mathematical Society, Providence, RI,       Moduli spaces arise through out algebraic geom-
2007). The story for topological 4-manifolds is told in    etry [IV.4](/part-04/algebra), differential geometry, and algebraic to-
the book by M. Freedman and F. Quinn titled Topology       pology [IV.6](/part-04/algebraic-topology). (Moduli spaces in topology are often
of 4-Manifolds (Princeton University Press, Princeton,     referred to as classifying spaces.) The basic idea is to
NJ, 1990). There are no books available that serve as      give a geometric structure to the totality of the objects
general introductions to the smooth 4-manifold story.      we are trying to classify. If we can understand this geo-
A book that does introduce the Seiberg–Witten invari-      metric structure, then we obtain powerful insights into
ants is The Seiberg–Witten Equations and Applications      the geometry of the objects themselves. Further more,
to the Topology of Smooth Four-Manifolds (Princeton        moduli spaces are rich geometric objects in their own
University Press, Princeton, NJ, 1995), by J. Morgan.      right. They are “meaningful” spaces, in that any state-
Meanwhile, the Donaldson invariants are discussed in       ment about their geometry has a “modular” interpreta-
detail in the book by Donaldson and P. Kronheimer          tion, in terms of the original classification problem. As a
titled Geometry of Four-Manifolds (Oxford University       result, when one investigates them one can often reach
Press, Oxford, 1990). Finally, parts of the story for      much further than one can with other spaces. Moduli
dimensions greater than 4 are told in Lectures on          spaces such as the moduli of elliptic curves [III.21](/part-03/elliptic-curves)
the h-Cobordism Theorem (Princeton University Press,       (which we discuss below) play a central role in a vari-
Princeton, NJ, 1965), by J. Milnor, and Foundational       ety of areas that have no immediate link to the geom-
Essays on Topological Manifolds, Smoothings and Tri-       etry being classified, in particular in algebraic num-
                                                           ber theory [IV.1](/part-04/number-theory) and algebraic topology. Moreover,
angulations (Princeton University Press, Princeton, NJ,
                                                           the study of moduli spaces has benefited tremendously
1977), by R. Kirby and L. Siebenman.
                                                           in recent years from interactions with physics (in par-
                                                           ticular with string theory [IV.17 §2](/part-04/vertex-operator-algebras)). These interac-
IV.8 Moduli Spaces                                         tions have led to a variety of new questions and new
       David D. Ben-Zvi                                    techniques.

Many of the most important problems in mathemat-
                                                                     1 Warmup: The Moduli Space
ics concern classification [I.4 §2](/part-01/general-goals). One has a class of
                                                                        of Lines in the Plane
mathematical objects and a notion of when two objects
should count as equivalent. It may well be that two        Let us begin with a problem that looks rather simple,
equivalent objects look superficially very different, so     but that nevertheless illustrates many of the important
one wishes to describe them in such a way that equiva-     ideas of moduli spaces.
lent objects have the same description and inequivalent
                                                           Problem. Describe the collection of all lines in the real
objects have different descriptions.
                                                           plane R2 that pass through the origin.
   Moduli spaces can be thought of as geometric solu-
tions to geometric classification problems. In this arti-   To save writing, we are using the word “line” to mean
cle we shall illustrate some of the key features of mod-   “line that passes through the origin.” This classification

IV.8.   Moduli Spaces                                                                                               409

problem is easily solved by assigning to each line L an       a circle), and this correspondence is continuous in both
essential parameter, or modulus, a quantity that we can       directions.
calculate for each line and that will help us tell different      The key feature of the space RP1 , considered as the
lines apart. All we have to do is take standard Cartesian     moduli space of lines in the plane, is that it captures
coordinates x, y on the plane and measure the angle           the ways in which lines can modulate, or vary continu-
θ(L) between the line L and the x-axis, taken in coun-        ously in families. But when do families of lines arise?
ter clockwise fashion. We find that the possible values         A good example is provided by the following construc-
of θ are those for which 0 ⩽ θ < π , and that for every       tion. Whenever we have a continuous curve C ⊂ R2 \ 0
such θ there is exactly one line L that makes an angle        in the plane, we can assign to each point c in C the line
of θ with the x-axis. So as a set, we have a complete         L(c) that passes through 0 and c. This gives us a family
solution to our classification problem: the set of lines       of lines parametrized by C. Moreover, the function that
L, known as the real projective line RP1 , is in one-to-one   takes c to L(c) is a continuous function from C to RP1 ,
correspondence with the half-open interval [0, π ).           so the parametrization is a continuous one.
                                                                 Suppose, for example, that C is a copy of R realized as
  However, we are seeking a geometric solution to the
                                                              the set of points (x, 1) at height 1. Then the map from
classification problem. What does this entail? We have
                                                              C to RP1 gives an isomorphism between R and the set
a natural notion of when two lines are near each other,
                                                              {L : θ(L) ≠ 0}, which is the subset of RP1 consisting
which our solution should capture—in other words, the
                                                              of all lines apart from the x-axis. Put more abstractly,
collection of lines has a natural topology [III.90](/part-03/topological-spaces). So
                                                              we have an intuitive notion of what it means for a col-
far, our solution does not reflect the fact that lines
                                                              lection of lines through the origin to depend continu-
L for which the angle θ(L) is close to π are almost
                                                              ously on some parameters, and this notion is captured
horizontal: they are therefore close to the x-axis (for
                                                              precisely by the geometry of RP1 : for instance, if you
which θ = 0) and to the lines L with θ(L) close to zero.
                                                              tell me you have a continuous 37-parameter family of
We need to find some way of “wrapping around” the
                                                              lines in R2 , this is the same as saying that you have a
interval [0, π ) so that π becomes close to 0.
                                                              continuous map from R37 to RP1 , which sends a point
  One way to do this is to take not the half-open inter-      v ∈ R37 to a line L(v) ∈ RP1 . (More concretely, we
val [0, π ) but the closed interval [0, π ], and then to      could say that the real function v → θ(L(v)) on R37
“identify” the points 0 and π . (This idea can easily be      is continuous away from the locus where θ is close to
made formal by defining an appropriate equivalence             π . Near this locus we could use instead the function φ
relation [I.2 §2.3](/part-01/language-and-grammar).) If π and 0 are regarded as the          that measures the angle from the y-axis.)
same, then numbers close to π are close to numbers
close to 0. This is a way of saying that if you attach the    1.1   Other Families
two ends of a line segment together, then, topologically
                                                              The idea of families of lines leads to various other geo-
speaking, you obtain a circle.
                                                              metric structures on the space RP1 , and not just its
   A more natural way of achieving the same end is sug-       topological structure. For example, we have the notion
gested by the following geometric construction of RP1 .       of a differentiable family of lines in the plane, which
Consider the unit circle S 1 ⊂ R2 . To each point s ∈ S 1 ,   is a family of lines for which the angles vary differen-
there is an obvious way of assigning a line L(s): take        tiably. (The same ideas apply if we replace “differen-
the line that passes through s and the origin. Thus, we       tiable” by “measurable,” “C \infty ,” “real analytic,” etc.) To
have a family of lines parametrized by S 1 , that is, a map   parametrize such a family appropriately, we would like
(or function) s → L(s) that takes points in S 1 to lines     RP1 to be a differentiable manifold [I.3 §6.9](/part-01/fundamental-definitions), so that
in our set RP1 . What is important about this is that we      we can calculate derivatives of functions on it. Such a
already know what it means for two points in S 1 to be        structure on RP1 can be specified by using the angle
close to each other, and the map s → L(s) is continu-        functions θ and φ defined in the previous section. The
ous. However, this map is a two-to-one function rather        function θ gives us a coordinate for lines that are not
than a bijection, since s and −s always give the same         too close to the x-axis, and φ gives us a coordinate for
line. To remedy this, we can identify each s in the cir-      lines that are not too close to the y-axis. We can cal-
cle S 1 with its antipodal point −s. We then have a one-      culate derivatives of functions on RP1 by writing them
to-one correspondence between RP1 and the resulting           in terms of these coordinates. One can justify this dif-
quotient space [I.3 §3.3](/part-01/fundamental-definitions) (which again is topologically       ferentiable structure on RP1 by checking that for any

410                                                                                    IV. Branches of Mathematics

differentiable curve C ⊂ R2 \ 0 the map c → L(c) comes         This bijection sends a function f to the correspond-
out as differentiable. This means that if L(c) is not close   ing pullback of the tautological line bundle on RP1 .
to the x-axis, then the function x → θ(L(x)) is differ-      That is, the function f is mapped to the line bundle
entiable at x = c, and similarly for φ and the y-axis.       x → Lf (x) . (This is a pullback because it converts L
The functions x → θ(L(x)) and → φ(L(x)) are called         from a function defined on RP1 to a function defined
pullbacks, because they are the result of converting, or     on X.)
“pulling back,” θ and φ from functions defined on RP1           Thus, the space RP1 carries the universal line bun-
to functions defined on C.                                    dle that sits in the trivial R2 bundle—any time we have
  We now can state the fundamental property of RP1           a line bundle sitting in the trivial R2 bundle, we can
as a differentiable space.                                    obtain it by pulling back the universal (tautological)
                                                             example on RP1 .
A differentiable family of lines in R2 parametrized by a
differentiable manifold X is the same thing as a func-
                                                             1.3   Invariants of Families
tion from X to RP1 , taking a point x to a line L(x),
such that the pullbacks x → θ(L(x)) and x → φ(L(x))        Associated with any continuous function f from the
of the functions θ, φ are differentiable functions.           circle S 1 to itself is an integer known as its degree.
                                                             Roughly speaking, the degree of f is the number of
   We say that RP1 (with its differentiable structure) is
                                                             times f (x) goes around the circle when x goes around
the moduli space of (differentiably varying families of)
                                                             once. (If it goes backwards n times, then we say that the
lines in R2 . This means that RP1 carries the universal
                                                             degree is −n.) Another way to think of the degree is as
differentiable family of lines. From the very definition,
                                                             the number of times a typical point in S 1 is passed by
we have assigned to each point of RP1 a line in R2 , and
                                                             f (x) as x goes around the circle, where we count this
these lines vary differentiably as we vary the point. The
                                                             as +1 if it is passed in the counter clockwise direction
above assertion says that any differentiable family of
                                                             and −1 if it is passed in the clockwise direction.
lines, parametrized by a space X, is described by giv-
                                                                Earlier, we showed that the circle S 1 , which we
ing a map f : X → RP1 and assigning to x ∈ X the
                                                             obtained by identifying the endpoints of the closed
line L(f (x)).
                                                             interval [0, π ], could be used to parametrize the mod-
1.2   Reformulation: Line Bundles                            uli space RP1 of lines. Combining this with the notion
                                                             of degree, we can draw some interesting conclusions.
It is interesting to reformulate the notion of a (continu-   In particular, we can define the notion of winding num-
ous or differentiable) family of lines as follows. Let X be   bers. Suppose that we are given a continuous function
a space and let x → L(x) be an assignment of lines to       γ from the circle S 1 into the plane R2 and suppose that
points in X. For each point x ∈ X, we place a copy of R2     it avoids 0. The image of this map will be a closed loop
at x; in other words, we consider the Cartesian product      C (which may cross itself). This defines for us a map
X \times R2 . We may now visualize the line L(x) as living in     from S 1 to itself: first do γ to obtain a point c in C,
the copy of R2 that lies over x. This gives us a contin-     then work out L(c), which belongs to RP1 , and finally
uously varying collection of lines L(x) parametrized         use the parametrization of RP1 to associate with L(c) a
by x ∈ X, otherwise known as a line bundle over X.           point in S 1 again. The degree of the resulting compos-
Moreover, this line bundle is embedded in the “trivial”      ite map will be twice the number of times that γ, and
vector bundle [IV.6 §5](/part-04/algebraic-topology) X \times R2 , which is the constant       hence C, winds around 0, so half this number is defined
assignment that takes each x to the plane R2 . In the        to be the winding number of γ.
case when X is RP1 itself, we have a “tautological” line        More generally, given a family of lines in R2 parame-
bundle: to each point s ∈ RP1 , which we can think of as     trized by some space X, we would like to measure the
a line Ls in R2 , it assigns that very same line Ls .        “manner in which X winds around the circle.” To be pre-
Proposition. For any topological space X there is a          cise, given a function φ from X to RP1 , which defines
natural bijection between the following two sets:            the parametrized family of lines, we would like to be
                                                             able to say, for any map f : S 1 → X, what the wind-
   (i) the set of continuous functions f : X → RP1 ; and     ing number is of the composition φf , which takes a
  (ii) the set of line bundles on X that are contained in    point x in S 1 to its image f (x) in X and from there
      the trivial vector bundle X \times R2 .                     to the corresponding line φ(f (x)) in the family. Thus,

$IV$ . $8$ .

Moduli Spaces

the map φ gives us a way of assigning to each function $f$ : $S^{1} \to X$ an integer, the winding number of φf . The way this assignment works does not change if φ is continuously deformed: that is, it is a topological invariant of φ. What it does depend on is the class that φ belongs to in the first cohomology group [IV.6](/part-04/algebraic-topology) of X, $H^{1}$ (X , Z). Equivalently, to any line bundle on a space X which is contained in the trivial $R^{2}$ - bundle , we have associated a cohomology class, known as the Euler class of the bundle. This is the first example of a characteristic class [IV.6](/part-04/algebraic-topology) for vector bundles. It demonstrates that if we understand the topology of moduli spaces of classes of geometric objects, then we can define topological invariants for families of those objects. $2$ The Moduli of Curves and Teichmüller Spaces We now turn our attention to perhaps the most famous examples of moduli spaces, the moduli spaces of curves, and their first cousins, the Teichmüller spaces. These moduli spaces are the geometric solution to the problem of classification of compact Riemann surfaces, and can be thought of as the “higher theory” of Riemann surfaces. The moduli spaces are “meaningful spaces,” in that each of their points stands for a Riemann surface. As a result, any statement about their geometry tells us something about the geometry of Riemann surfaces. We turn first to the objects. Recall that a Riemann surface is a topological surface X (connected and oriented) to which a complex structure has been given. Complex structures can be described in many ways, and they enable us to do complex analysis, geometry, and algebra on the surface X. In particular, they enable us to define holomorphic [I.3](/part-01/fundamental-definitions) (complexanalytic) and meromorphic functions [V.31](/part-05/the-riemannroch-theorem) on open subsets of X. To be precise, X is a two-dimensional manifold, but the charts are thought of as open subsets of C rather than of R , and the maps that glue them together are required to be holomorphic. An equivalent notion is that of a conformal structure on X, which is the structure needed to make it possible to define angles between curves in X. Yet another important equivalent notion is that of algebraic structure on X, making X into a complex-algebraic curve (leading to the persistent confusion in terminology: a Riemann surface is two dimensional, and therefore a surface, from the point of view of topology or the real numbers, but one dimensional, and therefore a curve, from the point of view of

$411$

complex analysis and algebra). An algebraic structure is what allows us to speak of polynomial, rational, or algebraic functions on X, and is usually specified by realizing X as the set of solutions to polynomial equations in complex projective space [III.72](/part-03/projective-space) C$P^{2}$ (or CP n). In order to speak of a classification problem, let alone a moduli space, for Riemann surfaces we must next specify when we regard two Riemann surfaces as equivalent. (We postpone the discussion of the final ingredient, the notion of families of Riemann surfaces, to section $2$ . $2$ .) To do this, we must give a notion of isomorphism between Riemann surfaces: when should two Riemann surfaces X and Y be “identified,” or thought of as giving two equivalent realizations of the same underlying object of our classification? This issue was hidden in our toy example of classifying lines in the plane: there we simply identified two lines if and only if they were equal as lines in the plane. This naive option is not available to us with the more abstractly defined Riemann surfaces. If we considered Riemann surfaces realized concretely as subsets of some larger space--for example, as solution sets to algebraic equations in complex projective space--we could similarly choose to identify surfaces only if they were equal as subsets. However, this is too fine a classification for most applications: what we care about is the intrinsic geometry of Riemann surfaces, and not incidental features that result from the particular way we choose to realize them. At the other extreme, we might choose to ignore the extra geometric structure that makes a surface into a Riemann surface. That is, we could identify two Riemann surfaces X and Y if they are topologically equivalent, or homeomorphic (the “coffee mug is a doughnut” perspective). The classification of compact Riemann surfaces up to topological equivalence is captured by a single positive integer, the genus g (“ number of holes ”) of the surface. Any surface of genus zero is homeomorphic to the Riemann sphere C$P^{1}$ ≃ $S^{2}$ , any surface of genus $1$ is homeomorphic to a torus $S^{1} \times S^{1}$ , and so on. Thus, in this case there is no issue of “modulation”-- the classification is solved by giving a list of possible values of a single discrete invariant. However, if we are interested in Riemann surfaces as Riemann surfaces rather than simply as topological manifolds, then this classification is too crude: it completely ignores the complex structure. We would now like to refine our classification to remedy this defect. To this end, we say that two Riemann surfaces X and Y are (conformally , or holomorphically) equivalent if there is

$412$

a topological equivalence between them that preserves the geometry, i.e., a homeomorphism that preserves the angles between curves, or takes holomorphic functions to holomorphic functions, or takes rational functions to rational functions. (These conditions are all equivalent .) Note that we still have at our disposal our discrete invariant--the genus of a surface. However, as we shall see, this invariant is not fine enough to distinguish between all inequivalent Riemann surfaces. In fact, it is possible to have families of inequivalent Riemann surfaces that are parametrized by continuous parameters (but we cannot make proper sense of this idea until we have said precisely what is meant by a family of Riemann surfaces) . Thus, the next step is to fix our discrete invariant and to try to classify all the different isomorphism classes of Riemann surfaces with the same genus by assembling them in a natural geometric fashion. An important step toward this classification is the uniformization theorem [V.34](/part-05/the-uniformization-theorem). This states that any simply connected Riemann surface is holomorphically isomorphic to one of the following three: the Riemann sphere C$P^{1}$ , the complex plane C , or the upper half-plane H (equivalently , the unit disk D). Since the universal covering space [III.93](/part-03/universal-covers) of any Riemann surface is a simply connected Riemann surface, the uniformization theorem provides an approach to classifying arbitrary Riemann surfaces. For instance, any compact [III.9](/part-03/compactness-and-compactication) Riemann surface of genus zero is simply connected, and in fact homeomorphic to the Riemann sphere, so the uniformization theorem already solves our classification problem in genus zero: up to equivalence, C$P^{1}$ is the only Riemann surface of genus zero, and so in this case the topological and conformal classifications agree.

$2$ . $1$

Moduli of Elliptic Curves

Next, we consider Riemann surfaces whose universal cover is C , which is the same as saying that they are quotients of C . For example, we can look at a quotient of C by Z , which means that we regard two complex numbers $z$ and $w$ as equivalent if z  -  w is an integer. This has the effect of “wrapping C around” into a cylinder. Cylinders are not compact, but to get a compact surface we could take a quotient by $Z^{2}$ instead: that is, we could regard $z$ and $w$ as equivalent if their difference is of the form a  +  bi, where $a$ and $b$ are both integers. Now C is wrapped around in two directions and the result is a torus with a complex (or , equivalently, conformal or algebraic) structure. This is a compact Riemann surface of genus $1$ . More generally, we

IV. Branches of Mathematics

can replace $Z^{2}$ by any lattice L, regarding $z$ and $w$ as equivalent if z  -  w belongs to L. (A lattice L in C is an additive subgroup of C with two properties. First, it is not contained in any line. Second, it is discrete, which means that there is a constant $d > 0$ such that the distance between any two points in L is at least d. Lattices are also discussed in the general goals of mathematical research [I.4](/part-01/general-goals). A basis for a lattice L is a pair of complex numbers $u$ and $v$ belonging to L such that every z in L can be written in the form au  +  bv with $a$ and $b$ integers. Such a basis will not be unique: for example, if $L = Z$ ⊕ $Z$ , then the obvious basis is $u = 1$ and $v = i,$ but $u = 1$ and $v = 1 + i$ would do just as well .) If we take a quotient of C by a lattice, then we again obtain a torus with complex structure. It turns out that any compact Riemann surface of genus $1$ can be produced in this way. From a topological point of view, any two tori are the same, but once we consider the complex structure we start to find that different choices of lattice may lead to different Riemann surfaces. Certain changes to L do not have an effect: for example, if we multiply a lattice L by some nonzero complex number $\lambda,$ then the quotient surface C  /  L will not be affected. That is, C  /  L is naturally isomorphic to $C/\lambda L$ . Therefore, we need only worry about the difference between lattices when one is not a multiple of the other. Geometrically, this says that one cannot be obtained from the other by a combination of rotation and dilation. Notice that by taking the quotient C  /  L we obtain not just a “naked” Riemann surface, but one equipped with an “origin,” that is, a distinguished point e $\in$ E, which is the image of the origin $0 \in$ C . In other words, we obtain an elliptic curve: Definition. An elliptic curve (over C) is a Riemann surface E of genus $1$ , equipped with a marked point e $\in$ E. Elliptic curves, up to isomorphism, are in bijection with lattices L ⊂ C up to rotation. Remark. In fact, since L ⊂ C is a subgroup of the Abelian group C , the elliptic curve $E = C$  /  L is naturally an Abelian group, with e as its identity element. This is an important motivation for keeping e as part of the data that defines an elliptic curve. A more subtle reason for remembering the location of e when we speak of E is that it helps us to define E more uniquely. This is useful, because any surface E of genus $1$ has lots of symmetries, or automorphisms [I.3](/part-01/fundamental-definitions) : there is always a holomorphic automorphism of E taking any point x to any other given point y. (If we think of E

$IV$ . $8$ .

Moduli Spaces

as a group, these are achieved by translations .) Thus, if someone hands us another genus - $1$ surface E , there may be no way to identify E with E , or there may be infinitely many ways: we can always compose a given isomorphism between them with a self-symmetry of E. As we will discuss later, automorphisms haunt almost every moduli problem, and are crucial when we consider the behavior of families. It is usually convenient to “rigidify” the situation somewhat, so that the possible isomorphisms between different objects are less “floppy” and more uniquely determined. In the case of elliptic curves, distinguishing the point e achieves this by reducing the symmetry of E. Once we do that, there is usually at most one way to identify two elliptic curves (one way, that is, that takes origin to origin). We see that Riemann surfaces of genus $1$ (with the choice of a marked point) can be described by concrete “linear algebra data”: a lattice L ⊂ C , or rather the equivalence class consisting of all nonzero scalar multiples $\lambda L$ of L. This is the ideal setting to study a classification, or moduli, problem. The next step is to find an explicit parametrization of the collection of all lattices, up to multiplication, and to decide in what sense we have obtained a geometric solution to the classification problem. In order to parametrize the collection of lattices, we follow a procedure used for all moduli problems: first parametrize lattices together with the choice of some additional structure, and then see what happens when we forget this choice. For every lattice L we choose a basis $ω^{1}$ , $ω^{2} \in L:$ that is, we represent L as the set of all integer combinations $aω^{1} + bω^{2}$ . We do this in an oriented fashion: we require that the fundamental parallelogram spanned by $ω^{1}$ and $ω^{2}$ is positively oriented. (That is, the numbers $0$ , $ω^{1}$ , $ω^{1} + ω^{2}$ , and $ω^{2}$ list the vertices of the parallelogram in a counter clockwise order. From the geometric point of view of the elliptic curve E, L is the fundamental group [IV.6](/part-04/algebraic-topology) of E, and the orientation condition says that we generate L by two loops, or “meridians,” $A = ω^{1}$ , $B = ω^{2}$ , which are oriented, in that their oriented intersection number A ∩ $B$ is equal to $+ 1$ rather than $- 1$ .) Since we are interested in lattices only up to multiplication, we can multiply L by a complex number so as to turn ω 1 into $1$ and hence $ω^{2}$ into $ω = ω^{2}/ω^{1}$ . The orientation condition now says that ω is in the upper half-plane H : i.e., its imaginary part is positive, $Imω > 0$ . Conversely, any complex number ω $\in$ H in the upper half-plane determines a unique oriented lattice $L = Z1$ ⊕ Z ω (that is,

$413$

the set of all integer combinations a  +  bω of $1$ and ω) and no two of these lattices are related by a rotation. What does this tell us about elliptic curves? We saw earlier that an elliptic curve is defined by a lattice L and an identity e. Now we have seen that if we give L some extra structure, namely an oriented basis, then we can parametrize it by a complex number ω $\in$ H . This makes precise for us the “additional structure” that we want to place on elliptic curves. We say that a marked elliptic curve is an elliptic curve E, e together with the choice of an oriented basis $ω^{1}$ , $ω^{2}$ for the associated lattice (fundamental group) L of E. The point is that any lattice has infinitely many different bases, which lead to many automorphisms of E. By “marking” one of these bases, we stop them being automorphisms.

$2$ . $2$

Families and Teichmüller Spaces

With our new definition, we can summarize the earlier discussion by saying that marked elliptic curves are in bijection with points ω $\in$ H of the upper half-plane. The upper half-plane is, however, much more than just a set of points: it carries a host of geometric structures, in particular a topology and a complex structure. In what sense do these structures reflect geometric properties of marked elliptic curves? In other words, in what sense is the complex manifold H , known in this context as the Teichmüller space $T^{1}$ , 1 of genus - $1$ Riemann surfaces with one marked point, a geometric solution to the problem of classifying marked elliptic curves? In order to answer this question, we need the notion of a continuous family of Riemann surfaces, and also the notion of a complex-analytic family. A continuous family of Riemann surfaces parametrized by a topological space S, such as the circle $S^{1}$ , for example, is a “continuously varying” assignment of a Riemann surface X s to every point s of S. In our example of the moduli of lines in the plane, a continuous family of lines was characterized by the property that the angles between the lines and the x-axis or y-axis defined continuous functions of the parameters. Geometrically defined collections of lines, such as those produced by a curve C in the plane, then gave rise to continuous families. More abstractly, a continuous family of lines defined a line bundle over the parameter space. A good criterion for a family of Riemann surfaces is likewise that any “reasonably defined” geometric quantity that we can calculate for every Riemann surface should vary continuously in the family. For example, a classical construction of Riemann surfaces of genus g comes from

414                                                                                    IV. Branches of Mathematics

taking 4 g-gons and gluing opposite sides together. The      analytic family of marked elliptic curves to be a fam-
resulting Riemann surface is fully determined by the        ily where the underlying genus-1 surfaces vary contin-
edge-lengths and angles of the polygon. Therefore, a        uously or analytically, while the choice of basepoint
continuous family of Riemann surfaces described in          es ∈ Es and the basis of the lattice Ls vary continuously.
this fashion should be precisely a family such that the        The upper half-plane H plays a role for marked ellip-
edge-lengths and angles give continuous functions of        tic curves that is similar to the role played by RP1 for
the parameter set.                                          lines in the plane. The following theorem makes this
   In more abstract topological terms, if we have a col-    statement precise.
lection {Xs , s ∈ S} of Riemann surfaces depending          Theorem. For any topological space S, there is a one-
on points in a space S and we wish to make it into          to-one correspondence between continuous maps from
a continuous family, then we should give the union          S to H and isomorphism classes of continuous families
"
  s∈S Xs itself the structure of a topological space X,     of marked elliptic curves parametrized by S. Similarly,
which should simultaneously extend the topology on          there is a one-to-one correspondence between analytic
each individual Xs . The result is called a Riemann         maps from any complex manifold S to H and isomor-
surface bundle. Associated with X is the map that           phism classes of analytic families of marked elliptic
takes each point x to the particular s for which x          curves parametrized by S.
belongs to Xs . We should demand that this map is
                                                               If we apply the theorem in the case where S is a single
continuous, and perhaps more (it could be a fibration,
                                                            point, it simply tells us that the points of H are in bijec-
or fiber bundle). This definition has the advantage of
                                                            tion with the isomorphism classes of marked elliptic
great flexibility. For example, if S is a complex man-
                                                            curves, as we already knew. However, it contains more
ifold, then in just the same way we can speak of a
                                                            information: it says that H, with its topology and com-
complex-analytic family of Riemann surfaces {Xs , s ∈       plex structure, embodies the structure of marked ellip-
S} parametrized by S: now we ask for the union of the       tic curves and the ways in which they can modulate. At
Xs to carry not just a topology but a complex struc-        the other extreme, we could take S = H itself, mapping
ture (i.e., it should form a complex manifold), extend-     S to H by the identity map. This expresses the fact that
ing the complex structure on the fibers and mapping          H itself carries a family of marked elliptic curves, i.e.,
holomorphically to the parameter set. The same holds        the collection of Riemann surfaces defined by ω ∈ H fit
with “complex-analytic” replaced by “algebraic.” These      together into a complex manifold fibering over H with
abstract definitions have the property that if our Rie-      elliptic curve fibers. This family is called the universal
mann surfaces are described in a concrete way—cut           family, since by the theorem any family is “deduced”
out by equations, glued from coordinate patches, etc.—      (or pulled back) from this one universal example.
then the coefficients of our equations or gluing data will
vary as complex-analytic functions in our family pre-       2.3   From Teichmüller Spaces to Moduli Spaces
cisely when the family is complex analytic (and likewise
                                                            We have arrived at a complete and satisfying picture
for continuous or algebraic families).
                                                            for the classification of elliptic curves when we choose
   As a reality check, note that a (continuous, analytic,   in addition a marking (that is, an oriented basis of the
or other) family of Riemann surfaces parametrized by        associated lattice L = π1 (E)). What can we say about
a single point s = S is indeed just a single Riemann        elliptic curves themselves, without the choice of mark-
surface Xs . Just as in this simple case we wish to con-    ing? We somehow need to “forget” the marking, by
sider Riemann surfaces only up to equivalence, so there     regarding two points of H as equivalent if they corre-
is a notion of equivalence or isomorphism of two ana-       spond to two different markings of the same elliptic
lytic families {Xs } and {Xs } parametrized by the same     curve.
space S. We simply regard the families as equivalent if        Now, given any two bases of the group (or lattice)
the surfaces Xs and Xs are isomorphic for every s, and      Z ⊕ Z, there is an invertible 2 \times 2 matrix with integer
if the isomorphism depends analytically on s.               entries that takes one basis to the other. If the two bases
  Armed with the notion of family, we can now for-          are oriented, then this matrix will have determinant 1,
mulate the characteristic property that the upper half-     which means that it is an element
                                                                                         
plane possesses when we think of it as the moduli space                             a b
                                                                              A=            ∈ SL2 (Z)
of marked elliptic curves. We define a continuous or                                 c d

IV.8.   Moduli Spaces                                                                                                   415

of the group of invertible unimodular matrices over             L. Such a map must be a rotation: that is, multiplication
Z. Similarly, given any two oriented bases (ω1 , ω2 )           by some complex number \lambda of modulus 1. It is easy to
and (ω1 , ω2 ) of a lattice L, which can be thought of          check that for most lattices L in the plane, the only rota-
as oriented identifications of L with Z ⊕ Z, there is a          tion that sends L to itself is multiplication by λ = −1.
matrix A ∈ SL2 (Z) such that ω1 = aω1 + bω2 and                 Note that this is the same −1 that we quotiented out
ω2 = cω1 + dω2 . If we now consider the normal-                 by to pass from SL2 (Z) to PSL2 (Z). However, there are
ized bases (1, ω) and (1, ω ), where ω = ω1 /ω2 and             two special lattices that have greater symmetry. These
ω = ω1 /ω2 , then we obtain a transformation of the             are the square lattice L = Z · 1 ⊕ Z · i, corresponding to
upper half-plane. It is given by the formula                    the fourth root of unity i, and the hexagonal lattice
                             aω + b                             L = Z · 1 ⊕ Z · e2π i/6 , corresponding to a sixth root of
                      ω =             .
                             cω + d                             unity. (Note that the hexagonal lattice is also repre-
That is, the group SL2 (Z) is acting on the upper half-         sented by the point ω = e2π i/3 .) The square lattice,
plane by linear fractional (or Möbius) transformations          which corresponds to the elliptic curve formed by glu-
with integer coefficients, and two points in the upper            ing the opposite sides of a square, has as its symmetries
half-plane correspond to the same elliptic curve if one         the group Z/4 Z of rotational symmetries of the square.
can be turned into the other by means of such a trans-          The hexagonal lattice, which corresponds to the ellip-
formation. If this is the case, then we should regard           tic curve formed by gluing the opposite sides of a reg-
the two points as equivalent: that is how we formalize          ular hexagon, has as its symmetries the group Z/6 Z of
the idea of “for getting” the marking. Note also that the        rotational symmetries of a hexagon.
scalar matrix − Id in SL2 (Z), which negates both ω1 and           We see that the number of automorphisms of an ellip-
ω2 , acts trivially on the upper half-plane, so that we in      tic curve jumps discontinuously at the special points
fact get an action of PSL2 (Z) = SL2 (Z)/{± Id} on H.           ω = i and ω = e2π i/6 . This already suggests that some-
   So we come to the conclusion that elliptic curves (up        thing might be wrong with M1,1 as a moduli space.
to isomorphism) are in bijection with orbits of PSL2 (Z)        Note that we avoided this problem with the moduli
on the upper half-plane, or equivalently with points of         T1,1 of marked elliptic curves, since there are no auto-
the quotient space H/ PSL2 (Z). This quotient space has         morphisms of an elliptic curve that also preserve the
a natural quotient topology, and in fact can be given a         marking. Another place we might have observed this
complex-analytic structure, which, it turns out, identi-        problem with M1,1 is when we passed to the quotient
fies it with the complex plane C itself. To see this one         H/ PSL2 (Z). We avoided the automorphism λ = −1 by
uses the classical modular function [IV.1 §8](/part-04/number-theory) j(z),             quotienting by PSL2 (Z) rather than SL2 (Z). However,
a complex-analytic function on H which is invariant             the two special points i and e2π i/6 are preserved by
under the modular group PSL2 (Z) and which therefore            integer Möbius transformations of H other than the
defines a natural coordinate H/ PSL2 (Z) → C.                    identity, and they are the only points with that prop-
   It appears that we have solved the moduli prob-              erty. This means that the quotient H/ PSL2 (Z) naturally
lem for elliptic curves: we have a topological, and             comes with conical singularities at the points corre-
even complex-analytic, space M1,1 = H/ PSL2 (Z) whose           sponding to these two orbits: one looks like a cone with
                                                                                                                    2
points are in one-to-one correspondence with isomor-            angle π , and the other like a cone with angle 3 π . (To
phism classes of elliptic curves. This already qualifies         see why this is plausible, imagine the following simpler
M1,1 as the coarse moduli space for elliptic curves,            instance of the same phenomenon. If for every complex
which means it is as good a moduli space as we can              number z you identify z with −z, then the result is to
hope for. However, M1,1 fails an important test for a           wrap the complex plane around into a cone with a sin-
moduli space that T1,1 passed (as we saw in section 2.2):       gularity at 0. The reason 0 is singled out is that it is pre-
it is not true, even for the circle S = S 1 , that every con-   served by the transformation z → −z. Here the angle
tinuous family of elliptic curves over S corresponds to         would be π because the identification of points is two-
a map from S to M1,1 .                                          to-one away from the singularity and π is half of 2π .)
   The reason for this failure is the problem of automor-       It is possible to massage these singularities away using
phisms. These are equivalences from E to itself: that is,       the j-function, but they are indicating a basic difficulty.
complex-analytic maps from E to E that preserve the                So why do automorphisms form an obstacle to the
basepoint e. Equivalently, they are given by complex-           existence of “good” moduli spaces? We can demon-
analytic self-maps of C that preserve 0 and the lattice         strate the difficulty by considering an interesting con-

416                                                                                       IV. Branches of Mathematics

tinuous family of marked elliptic curves parametrized            the notion of an orbifold [IV.4 §7](/part-04/algebra), or stack [IV.4 §7](/part-04/algebra),
by the circle S = S 1 . Let E(i) be the “square” elliptic        which is flexible enough to deal with essentially all
curve that we considered earlier, based on the lattice           moduli problems.
of integer combinations of 1 and i. Next, for every t
between 0 and 1, let Et be a copy of E(i). Thus, we have                  3   Higher-Genus Moduli Spaces
taken the constant, or “trivial,” family of elliptic curves                   and Teichmüller Spaces
over the closed unit interval [0, 1], where every curve in
the family is E(i). Now we identify the elliptic curves at       We would now like to generalize as much as possi-
the two ends of this family, not in the obvious way, but         ble of the picture of elliptic curves and their mod-
by using the automorphism given by a 90◦ rotation, or            uli to higher-genus Riemann surfaces. For each g we
multiplication by i. This means that we are looking at           would like to define a space Mg , called the moduli
the family of elliptic curves over the circle where each         space of curves of genus g, that classifies compact Rie-
member of the family is a copy of the elliptic curve E(i),       mann surfaces of genus g and tells us how they modu-
but these copies twist by 90◦ as we go around the circle.        late. Thus, the points of Mg should correspond to our
   It is easy to see that there is no way to capture this        objects, compact Riemann surfaces of genus g, or, to
family of elliptic curves by means of a map from S 1 to          be more accurate, equivalence classes of such surfaces,
the space M1,1 . Since all of the members of the family          where two surfaces are considered to be equivalent
are isomorphic, each point of the circle should map to           if there is a complex-analytic isomorphism between
the same point in M1,1 (the equivalence class of i in            them. In addition, we would like Mg to do the best
H). But the constant map S 1 → {i} ∈ M1,1 classifies              it can to embody the structure of continuous fami-
the trivial family S 1 \times Ei of elliptic curves over S 1 , that   lies of genus-g surfaces. Likewise, there are spaces
is, the family where every curve is equal to E(i) but            Mg, n parametrizing “n-punctured” Riemann surfaces
the curves do not twist as we go around! Thus, there             of genus g. This means we consider not “bare” Riemann
are more families of elliptic curves than there are maps         surfaces, but Riemann surfaces together with a “deco-
to M1,1 ; the quotient space H/ PSL2 (Z) cannot handle           ration” or “marking” by n distinct labeled points (punc-
the complications caused by automorphisms. A variant             tures). Two of these are considered to be equivalent if
of this construction applies to complex-analytic fami-           there is a complex-analytic isomorphism between them
lies with S 1 replaced by C× . This is a very general phe-       that takes punctures to punctures and preserves labels.
nomenon in moduli problems: whenever objects have                Since there are Riemann surfaces with automorphisms,
nontrivial automorphisms, we can imitate the construc-           we do not expect Mg to be able to classify all families
tion above to get nontrivial families over an interesting        of Riemann surfaces: that is, we will expect examples
parameter set, all of whose members are the same. As             similar to the twisted square-lattice construction dis-
a result, they cannot be classified by a map to the set           cussed earlier. However, if we consider Riemann sur-
of all isomorphism classes.                                      faces with enough extra markings, then we will be able
   What do we do about this problem? One approach                to obtain a moduli space in the strongest sense. One
is to resign ourselves to having coarse moduli spaces,           way to choose such markings is to consider Mg, n with
which have the right points and right geometry but do            n large enough (for fixed g). Another approach will be
not quite classify arbitrary families. Another approach          to mark generators of the fundamental group, leading
is the one that leads to T1,1 : we can fix markings of            to the Teichmüller spaces Tg and Tg, n . We now outline
one kind or another, which “kill” all automorphisms.             this process.
In other words, we choose enough extra structure on                 To construct the space Mg , we return to the uni-
our objects so that there do not remain any (nontriv-            form ization theorem. Any compact surface X of genus
ial) automorphisms that preserve all this decoration.            g > 1 has as its universal cover the upper half-plane
In fact, one can be far more economical than picking             H, so it is represented as a quotient X = H/Γ , where Γ
a basis of the lattice L and obtaining the infinite cov-          is a representation of the fundamental group of X as a
ering T1,1 of M1,1 : one can fix a basis of L only up             subgroup of conformal self-maps of H. The group of all
to some congruence (for example, of L/2 L). Finally, we           conformal automorphisms of H is PSL2 (R), the group of
can simply learn to come to terms with the automor-              linear fractional transformations with real coefficients.
phisms, keeping them as part of the data, resulting in           The fundamental groups of all compact genus-g Rie-
“spaces” where points have internal symmetries. This is          mann surfaces are isomorphic to a fixed abstract group

IV.8.    Moduli Spaces                                                                                                           417

Γg , with 2 g generators Ai , Bi (i = 1, . . . , g) and one rela-            think of M as a “machine” that assigns to any topolog-
tion: that the product of all commutators Ai Bi A−1      i Bi
                                                             −1
                                                                            ical space S the set of continuous maps from S to M.
is the identity. A subgroup Γ ⊂ PSL2 (R) that acts on H in                  This machine is known as the “functor of points of M.”
such a way that the quotient H/Γ is a Riemann surface                       Similarly, a complex manifold M provides a machine
(technically, the action should have no fixed points and                     that assigns to any other complex manifold S the set of
should be properly discontinuous) is known as a fuch-                       complex-analytic maps from S to M. A curious discov-
sian group [III.28](/part-03/fuchsian-groups). Thus, the analogue of the represen-                    ery of category theory (the Yoneda lemma) is that for
tation of elliptic curves by lattices L ≃ Z ⊕ Z in the plane                very general reasons (having nothing to do with geom-
is the representation of higher-genus Riemann surfaces                      etry), these machines (or functors) uniquely determine
as H/Γ , where Γ is a Fuchsian group.                                       M as a space, or a complex manifold.
   The Teichmüller space Tg of genus-g Riemann sur-                            Any moduli problem in the sense we have described
faces is the space that solves the moduli problem                           (giving objects, equivalences, and families) also gives
for genus-g surfaces when they come with a mark-                            such a machine, where to S we assign the set of all fam-
ing of their fundamental group. This means that our                         ilies over S, up to isomorphism. So just by setting up the
objects are genus-g surfaces X plus a set of generators                     moduli problem we have already uniquely determined
Ai , Bi of π1 (X), which give an isomorphism between                        the topology and complex structure on Teichmüller
π1 (X) and Γg , up to conjugation.1 Our equivalences                        space. The interesting part then is to know whether or
are complex-analytic maps that preserve the markings.                       not there actually exists a space giving rise to the same
Finally, our continuous (respectively, complex-analytic)                    machine we have constructed, whether we can con-
families are continuous (complex-analytic) families of                      struct it explicitly, and whether we can use its geometry
Riemann surfaces with continuously varying markings                         to learn interesting facts about Riemann surfaces.
of the fundamental group. In other words, we are
asserting the existence of a topological space/complex                      3.2   Moduli Spaces and Representations
manifold Tg , with a complex-analytic family of marked
Riemann surfaces over it, and the following strong                          Coming back to earth, we discover that we have a fairly
property.                                                                   concrete model of Teichmüller space at our disposal.
                                                                            Once we have fixed the marking π1 (X) ≃ Γg , we are
The characteristic property of Tg . For any topologi-
                                                                            simply looking at all ways to represent Γg as a Fuch-
cal space (respectively, complex manifold) S, there is a
                                                                            sian subgroup of PSL2 (R). Ignoring the Fuchsian condi-
bijection between continuous maps (respectively, holo-
                                                                            tion for a moment, this means finding 2 g real matrices
morphic maps) S → Tg and isomorphism classes of
                                                                            (up to ± Id) Ai , Bi ∈ PSL2 (R) satisfying the commuta-
continuous (respectively, complex-analytic) families of
marked genus-g surfaces parametrized by S.                                  tor relation of Γg . This gives an explicit set of (alge-
                                                                            braic!) equations for the entries of the 2 g matrices,
3.1     Digression: “Abstract Nonsense”                                     which determine the space of all representations Γg →
                                                                            PSL2 (R). We must now quotient out by the action of
It is interesting to note that, while we have yet to
                                                                            PSL2 (R) that simultaneously conjugates all 2 g matrices
see why such a space exists, it follows from general,
                                                                            to obtain the representation variety Rep(Γg , PSL2 (R)).
nongeometric principles—category theory [III.8](/part-03/categories) or
                                                                            This is analogous to considering lattices in C up to rota-
“abstract nonsense”—that it is completely and uniquely
                                                                            tion, and is motivated by the fact that the quotients
determined, both as a topological space and as a com-
                                                                            of H by two conjugate subgroups of PSL2 (R) will be
plex manifold, by this characteristic property. In a very
                                                                            isomorphic.
abstract way, every topological space M can be uniquely
                                                                               Once we have described the space of all representa-
reconstructed from its set of points, the set of paths
                                                                            tions of Γg into PSL2 (R), we can then single out Teich-
between these points, the set of surfaces spanning
                                                                            müller space as the subset of the representation vari-
these paths, and so on. To put it differently, we can
                                                                            ety that consists of Fuchsian representations of Γg into
                                                                            PSL2 (R). Luckily this subset is open in the represen-
  1. Note that while the fundamental group of X depends on the
choice of a basepoint, π1 (X, x) and π1 (X, y) may be identified by          tation variety, which gives a nice realization of Tg as
choosing a path from x to y, and the different choices are related by        a topological space—in fact, Tg is homeomorphic to
conjugation by a loop. Thus, if we are willing to identify sets of gener-
ators Ai , Bi when they differ only by a conjugation, then we can ignore
                                                                            R6 g−6 . (This can be seen very explicitly in terms of
the choice of a basepoint.                                                  the Fenchel–Nielsen coordinates, which parametrize a

418                                                                                     IV. Branches of Mathematics

surface in Tg via a cut-and-paste procedure involving        see from this description the geometry of Tg as a com-
3 g − 3 lengths and 3 g − 3 angles.) We may now try to         plex manifold. This failure reflects some of the ways
“forget” the marking π1 (X)  Γg , to obtain the mod-        in which the study of moduli spaces is more compli-
uli space Mg of unmarked Riemann surfaces. In other          cated for genus greater than 1. In particular, the mod-
words, we would like to take Tg and identify any two         uli spaces of higher-genus surfaces are not described
points that represent the same underlying Riemann            purely by linear algebra plus data about orientation, as
surface with different markings. This identification is        is the case in genus 1.
achieved by the action of a group, the genus-g mapping          Part of the blame for this complexity lies with the fact
class group MCGg or Teichmüller modular group, on            that the fundamental group Γg ≃ π1 (X) (g > 1) is no
Tg , which generalizes the modular group PSL2 (Z) that       longer Abelian, and in particular it is no longer equal to
acts on H = T1,1 . (The mapping class group is defined        the first homology group H1 (X, Z). A related problem is
as the group of all self-diffeomorphisms of a genus-g         that X is no longer a group. A beautiful solution to this
surface—remember that all such surfaces are topolog-         problem is given by the construction of the Jacobian
ically the same—modulo those diffeomorphisms that             Jac(X), which shares with elliptic curves the properties
act trivially on the fundamental group.) As in the case of   of being a torus (homeomorphic to (S 1 )2 g ), an Abelian
elliptic curves, Riemann surfaces with automorphisms         group, and a complex (in fact complex-algebraic) man-
correspond to points in Tg fixed by some subgroup of          ifold. (The Jacobian of an elliptic curve is the elliptic
MCGg , and give rise to singular points in the quotient      curve itself.) The Jacobian captures the “Abelian” or
Mg = Tg / MCGg .                                             “linear” aspects of the geometry of X. There is a mod-
   Representation varieties, or moduli spaces of repre-      uli space Ag for such complex-algebraic tori (known as
sentations, are an important and concrete class of mod-      Abelian varieties), which does share all of the nice prop-
uli spaces that arise through out geometry, topology,         erties and linear algebraic description of the moduli of
and number theory. Given any (discrete) group Γ , we         elliptic curves M1,1 = A1 . The good news—the Torelli
ask (for example) for a space that parametrizes homo-        theorem—is that by assigning to each Riemann surface
morphisms of Γ into the group of n \times n matrices. The         X its Jacobian we embed Mg as a closed, complex-
notion of equivalence is given by conjugation by GLn ,       analytic subset of Ag . The interesting news—the Schot-
and that of families by continuous (or analytic, or alge-    tky problem—is that the image is quite complicated
braic, etc.) families of matrices. This problem is inter-    to characterize intrinsically. In fact, solutions to this
esting even when the group Γ is Z. Then we are sim-          problem have come from as far afield as the study of
ply considering invertible n \times n matrices (the image         nonlinear partial differential equations!
of 1 ∈ Z) up to conjugacy. It turns out that there is
no moduli space for this problem, even in the coarse         3.4   Further Directions
sense, unless we consider only “nice enough” matri-
ces: for example, matrices that consist of only a single     In this section we give hints at some interesting ques-
Jordan block. This is a good example of a ubiquitous         tions about, and applications of, moduli spaces.
phenomenon in moduli problems: one is often forced
                                                             Deformations and degenerations. Two of the main
to throw out some “bad” (unstable) objects in order to
                                                             topics in moduli spaces ask which objects are very near
have any chance of obtaining a moduli space. (See the
                                                             to a given one, and what lies very far away. Deforma-
paper by Mumford and Suominen (1972) for a detailed
                                                             tion theory is the calculus of moduli spaces: it describes
discussion.)
                                                             their infinitesimal structure. In other words, given an
                                                             object, deformation theory is concerned with describ-
3.3   Moduli Spaces and Jacobians
                                                             ing all its small perturbations (see Mazur (2004) for a
The upper half-plane H = T1,1 , together with the action     beautiful discussion of this). At the other extreme, we
of PSL2 (Z), gives an appealingly complete picture of the    can ask what happens when our objects degenerate?
moduli problem for elliptic curves and its geometry.         Most moduli spaces, for example the moduli of curves,
The same cannot be said, unfortunately, for the pic-         are not compact, so there are families “going off to
ture of Tg as an open subset of the representation vari-     infinity.” It is important to find “meaningful” compact-
ety. In particular, the representation variety does not      ifications of moduli spaces, which classify the possi-
even carry a natural complex structure, so we cannot         ble degenerations of our objects. Another advantage of

