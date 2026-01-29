# Dimension

$180$

use the inner product to identify linear functionals with vectors, and therefore $1$ - forms can be identified with vector fields. In the special (but very physical) case of three-dimensional Euclidean space $R^{3}$ , $2$ - forms can also be identified with vector fields via the famous righthand rule, 6 and $3$ - forms can be identified with scalar functions by a variant of this rule.
(This is an example of a concept known as Hodge duality .) In this case, the differentiation operation ω   $\to$ dω can be identified with the gradient operation $f\to \nablaf$ when ω$is$ a_{0} - form , with the curl operation $X\to \nabla \times X$ when ω$is$ a1 - form , and with the divergence operation $X\to \nabla$ · $X$ when ω is $a_{2}$ - form .
Thus, for instance, the rule ( $11$ ) implies that $\nabla \times \nablaf = 0$ and $\nabla$ · $(\nabla \times X)$ for any suitably smooth scalar function f and vector field X, while various cases of Stokes’s theorem ( $12$ ), with this interpretation, become the various theorems about integrals of curves and surfaces in three dimensions that you may have seen referred to as “the divergence theorem,” “Green’s theorem,” and “Stokes’s theorem” in a course on several-variable calculus.
Just as the signed definite integral is connected to the unsigned definite integral in one dimension via ( $2$ ), there is a connection between integration of differential forms and the Lebesgue (or Riemann) integral. On the Euclidean space R n one has the n standard coordinate functions $x^{1}$ , $x^{2}$ , . . . , x n : R n $\to$ R . Their derivatives d$x^{1}$ , . . . , dx n are then $1$ - forms on R n . Taking their wedge product, one obtains an n-form d$x^{1}$ ∧ · · · ∧ dx n . We can multiply this by any (continuous) scalar function f :
R n $\to$ R to obtain another nform f (x) d$x^{1}$ ∧ · · · ∧ dx n . If $\Omega$ is any open bounded domain in R n , we then have the identity f (x) d$x^{1}$ ∧ · · · ∧ dx $n = f$ (x) dx,

$\Omega\Omega$

where on the left-hand side we have an integral of a differential form (with $\Omega$ viewed as a positively oriented n-dimensional manifold) and on the right-hand side we have the Riemann or Lebesgue integral of f on $\Omega.$ If we give $\Omega$ the negative orientation, we have to reverse the sign of the left-hand side. This correspondence generalizes (2). There is one last operation on forms that is worth pointing out. Suppose we have a continuously differentiable map Φ : X $\to$ Y from one manifold to another (we allow X and Y to have different dimensions). Then $6$ .
This is an entirely arbitrary convention; one could just as easily have used the left-hand rule to provide this identification, and apart from some harmless sign changes here and there, one gets essentially the same theory as a consequence.

III. Mathematical Concepts

of course every point x in X pushes forward to a point Φ (x) in Y . Similarly, if we let v $\in$ T x X be an infinitesimal tangent vector to X based at x, then this tangent vector also pushes forward to a tangent vector Φ ∗ v $\in$ T Φ (x) Y based at Φ (x); informally speaking, Φ ∗ v can be defined by requiring the infinitesimal approximation $Φ(x + v) = Φ(x) + Φ$ ∗ v. One can write Φ ∗ $v =$ D Φ (x) (v), where DΦ : T x X $\to$ T Φ (x) Y is the derivative of the several-variable map Φ at x.
Finally, any k-dimensional oriented manifold S in X also pushes forward to a k-dimensional oriented manifold Φ (S) in X, although in some cases (e . g . , if the image of Φ has dimension less than k) this pushed-forward manifold may be degenerate. We have seen that integration is a duality pairing between manifolds and forms. Since manifolds push forward under Φ from X to Y , we expect forms to pull back from Y to X. Indeed, given any k-form ω on Y , we can define the pullback Φ ∗ ω as the unique k-form on X such that we have the change-of-variables formula Φ ∗ (ω).

$ω =$

Φ (S)

S

In the case of $0$ - forms (i . e . , scalar functions), the pullback Φ ∗ f : X $\to$ R of a scalar function f : Y $\to$ R is given explicitly by Φ ∗ f (x)  =  f (Φ (x)), while the pullback of $a_{1}$ - form ω is given explicitly by the formula (Φ ∗ ω) x (v)  =  ω Φ (x) (Φ ∗ v). Similar definitions can be given for other differential forms. The pullback operation enjoys several nice properties: for instance, it respects the wedge product, Φ ∗ (ω ∧ η)  =  (Φ ∗ ω) ∧ (Φ ∗ η), and the derivative, d (Φ ∗ ω)  =  Φ ∗ (d ω) .
By using these properties, one can recover rather painlessly the change-of-variables formulas in severalvariable calculus. More over, the whole theory carries over effortlessly from Euclidean spaces to other manifolds. It is because of this that the theory of differential forms and integration is an indispensable tool in the modern study of manifolds, and especially in differential topology [IV.7](/part-04/dierential-topology). III . $17$

Dimension

What is the difference between a two-dimensional set and a three-dimensional set? A rough answer that one might give is that a two-dimensional set lives inside a plane, while a three-dimensional set fills up a portion of

III . $17$ .

Dimension

space. Is this a good answer? For many sets it does seem to be: triangles, squares, and circles can be drawn in a plane, while tetrahedra, cubes, and spheres cannot. But how about the surface of a sphere? This we would normally think of as two dimensional, contrasting it with the solid sphere, which is three dimensional. But the surface of a sphere does not live inside a plane. Does this mean that our rough definition was in correct? Not exactly. From the perspective of linear algebra, the set { (x ,  y, z) :
$x^{2} + y^{2} + z^{2} = 1$ , which is the surface of a sphere of radius $1$ in $R^{3}$ centered at the origin, is three dimensional, precisely because it is not contained in a plane. (One can express this in algebraic language by saying that the affine subspace generated by the sphere is the whole of $R^{3}$ .) However, this sense of “three dimensional” does not do justice to the rough idea that the surface of a sphere has no thickness. Surely there ought to be another sense of dimension in which the surface of a sphere is two dimensional?
As this example illustrates, dimension, though very important through out mathematics, is not a single concept. There turn out to be many natural ways of generalizing our ideas about the dimensions of simple sets such as squares and cubes, and they are often incompatible with one another, in the sense that the dimension of a set may vary according to which definition you use. The remainder of this article will set out a few different definitions.
One very basic idea we have about the dimension of a set is that it is “the number of coordinates you need to specify a point.” We can use this to justify our instinct that the surface of a sphere is two dimensional: you can specify any point by giving its longitude and latitude. It is a little tricky to turn this idea into a rigorous mathematical definition because you can in fact specify a point of the sphere by means of just one number if you do not mind doing it in a highly artificial way.
This is because you can take any two numbers and interleave the digits to form a single number from which the original two numbers can be recovered. For instance, from the two numbers $\pi = 3$ . 141592653 . . . and $e = 2$ . 718281828 . . . you can form the number $32$ . 174118529821685238 . . . , and by taking alternate digits you get back $\pi$ and e again. It is even possible to find a continuous function f from the closed interval [0 , 1 ] (that is, the set of all real numbers between $0$ and $1$ , inclusive) to the surface of a sphere that takes every value.
We therefore have to decide what we mean by a “natural” coordinate system. One way of making this deci- $181$ sion leads to the definition of a manifold, a very important concept that is discussed in [I.3](/part-01/fundamental-definitions) and also in differential topology [IV.7](/part-04/dierential-topology). This is based on the idea that every point in the sphere is contained in a neighborhood N that “looks like” a piece of the plane, in the sense that there is a “nice” one-to-one correspondence φ between N and a subset of the Euclidean plane $R^{2}$ .
Here, “nice” can have different meanings: typical ones are that φ and its inverse should both be continuous, or differentiable, or infinitely differentiable. Thus, the intuitive notion that a d-dimensional set is one where you need d numbers to specify a point can be developed into a rigorous definition that tells us, as we had hoped, that the surface of a sphere is two dimensional. Now let us take another intuitive notion and see what we can get from it. Suppose I want to cut a piece of paper into two pieces.
The boundary that separates the pieces will be a curve, which we would normally like to think of as one dimensional. Why is it one dimensional? Well, we could use the same reasoning: if you cut a curve into two pieces then the part where the two pieces meet each other is a single point (or pair of points if the curve is a loop), which is zero dimensional. That is, there appears to be a sense in which a (d $- 1$ ) - dimensional set is needed if you want to cut a d-dimensional set into two. Let us try to be slightly more precise about this idea.
Suppose that X is a set and $x$ and $y$ are points in X. Let us call a set Y a barrier between $x$ and $y$ if there is no continuous path from x to y that avoids Y . For example, if X is a solid sphere of radius $2$ , x is the center of X, and y is a point on the boundary of X, then one possible barrier between $x$ and $y$ is the surface of a sphere of radius $1$ . With this terminology in place, we can make the following inductive definition.
A finite set is zero dimensional, and in general we say that X is at most d dimensional if between any two points in X there is a barrier that is at most (d $- 1$ ) dimensional. We also say that X is d dimensional if it is at most d dimensional but not at most $(d - 1)$ dimensional. The above definition makes sense, but it runs into difficulties: one can construct a pathological set X that acts as a barrier between any two points in the plane, but contains no segment of any curve. This makes X zero dimensional and therefore makes the plane one dimensional, which is not satisfactory.
A small modification to the above definition eliminates such pathologies and gives a definition that was put forward by brouwer [VI.75](/part-06/luitzen-egbertus-jan-brouwer-18811966). A complete metric space [III.56](/part-03/metric-spaces) X is said to have dimension at most d if, given any pair

$182$

Figure $1$ How to cover with squares

so that no four overlap.

of disjoint closed sets A and B, you can find disjoint open sets U and V with A ⊂ U and B ⊂ V such that the complement Y of U ∪ V (that is, everything in X that does not belong to either U or V) has dimension at most d $- 1$ . The set Y is the barrier--the main difference is that we have now asked for it to be closed. The induction starts with the empty set, which has dimension $- 1$ . Brouwer’s definition is known as the inductive dimension of a set. Here is another basic idea that leads to a useful definition of dimension, proposed by lebesgue [VI.72](/part-06/henri-lebesgue-18751941).
Suppose you want to cover an open interval of real numbers (that is, an interval that does not contain its endpoints) with shorter open intervals. Then you will be forced to make the shorter ones overlap, but you can do it in such a way that no point is contained in more than two of your intervals: just start each new interval close to the end of the previous one. Now suppose that you want to cover an open square (that is, one that does not contain its boundary) with smaller open squares.
Again you will be forced to make the smaller squares overlap, but this time the situation is slightly worse: some points will have to be contained in three squares. However, if you take squares arranged like bricks, as in figure $1$ , and expand them slightly, then you can do the covering in such a way that no four squares overlap. In general, it seems that to cover a typical d-dimensional set with small open sets, you need to have overlaps of d $+ 1$ sets but you do not need to have overlaps greater than this. The precise definition that this leads to is surprisingly general:
it makes sense not just for subsets of R n but even for an arbitrary topological space [III.90](/part-03/topological-spaces). We say that a set X is at most d dimensional if, however you cover X with a finite collection of open sets

III. Mathematical Concepts

$U^{1}$ , . . . , U n , you can find a finite collection of open sets $V^{1}$ , . . . , V m with the following properties: (i) the sets V i also cover the whole of X; (ii) every V i is a subset of at least one U i ; (iii) no point is contained in more than d $+ 1$ of the V i . If X is a metric space, then we can choose our U i to have small diameter, there by forcing the V i to be small. So this definition is basically saying that it is possible to cover X with open sets with no $d + 2$ of them overlapping, and that these open sets can be as small as you like.
We then define the topological dimension of X to be the smallest d such that X is at most d dimensional. And again it can be shown that this definition assigns the “correct” dimension to the familiar shapes of elementary geometry. A fourth intuitive idea leads to concepts known as homological and cohomological dimension. Associated with any suitable topological space X, such as a manifold, are sequences of groups known as homology and cohomology groups [IV.6](/part-04/algebraic-topology) . Here we will discuss homology groups, but a very similar discussion is possible for cohomology.
Roughly speaking, the nth homology group tells you how many interestingly different continuous maps there are from closed n-dimensional manifolds M to X. If X is a manifold of dimension less than n, then it can be shown that the nth homology group is trivial: in a sense, there is not enough room in X to define any map that is interestingly different from a constant map. On the other hand, the nth homology group of the n-sphere itself is Z , which says that one can classify the maps from the n-sphere to itself by means of an integer parameter.
It is therefore tempting to say that a space is at least n dimensional if there is room inside it for interesting maps from n-dimensional manifolds. This thought leads to a whole class of definitions. The homological dimension of a structure X is defined to be the largest n for which some substructure of X has a nontrivial nth homology group. (It is necessary to consider substructures, because homology groups can also be trivial when there is too much room:
it then becomes easy to deform a continuous map and show that it is equivalent to a constant map .) However, homology is a very general concept and there are many different homology theories, so there are many different notions of homological dimension. Some of these are geometric, but there are also homology theories for algebraic structures: for example, using suitable theories, one can

III.17.   Dimension                                                                                                      183

define the homological dimension of algebraic struc-               remove the middle thirds of these two closed intervals
tures such as rings [III.81 §1](/part-03/rings-ideals-and-modules) or groups [I.3 §2.1](/part-01/fundamental-definitions). This        to produce a set X2 , so X2 is the union of the intervals
is a very good example of geometrical ideas having an             [0, 19 ], [ 29 , 13 ], [ 23 , 79 ], and [ 89 , 1].
algebraic payoff.                                                     In general, Xn is a union of closed intervals, and Xn+1
   Now let us turn to a fifth and final (for this article at        is what you get by removing the middle thirds of each
least) intuitive idea about dimension, namely the way it          of these intervals—so Xn+1 consists of twice as many
affects how we measure size. If you want to convey how             intervals as Xn , but they are a third of the size. Once you
big a shape X is, then a good way of doing so is to give          have produced the sequence X0 , X1 , X2 , . . . , you define
the length of X if X is one dimensional, the area if it is        the Cantor set to be the intersection of all the Xi : that
two dimensional, and the volume if it is three dimen-             is, all the real numbers that remain, no matter how
sional. Of course, this presupposes that you already              far you go with the process of removing middle thirds
know what the dimension is, but, as we shall see, there           of intervals. It is not hard to show that these are pre-
is a way of deciding which measure is the most appro-             cisely the numbers whose ternary expansions consist
priate with out determining the dimension in advance.              just of 0 s and 2 s. (There are some numbers that have
Then the tables are turned: we can actually define the             two different ternary expansions. For instance, 3 can
                                                                                                                         1

dimension to be the number that corresponds to the                be written either as 0.1 or as 0.02222 . . . . In such cases
best measure.                                                     we take the recurring expansion rather than the ter-
   To do this, we use the fact that length, area, and vol-                            1
                                                                  minating one. So 3 belongs to the Cantor set.) Indeed,
ume scale in different ways when you expand a shape.               when you remove middle thirds for the nth time, you
If you take a curve and expand it by a factor of 2 (in all        are removing all numbers that have a 1 in the nth place
directions), then its length doubles. More generally, if
                                                                  after the “decimal” (in fact, ternary) point.
you expand by a factor of C, then the length multiplies
                                                                    The Cantor set has many interesting properties. For
by C. However, if you take a two-dimensional shape and
                                                                  example, it is uncountable [III.11](/part-03/countable-and-uncountable-sets), but it also has mea-
expand it by C, then its area multiplies by C 2 . (Roughly
                                                                  sure [III.55](/part-03/measures) zero. Briefly, the first of these assertions
speaking, this is because each little portion of the shape
                                                                  follows from the fact that there is a different element
expands by C “in two directions” so you have to mul-
                                                                  of the Cantor set for every subset A of the natural num-
tiply the area by C twice.) And the volume of a three-
                                                                  bers (just take the ternary number 0.a1 a2 a3 . . . , where
dimensional shape multiplies by C 3 : for instance, the
                                                                  ai = 2 whenever i ∈ A and ai = 0 otherwise), and there
volume of a sphere of radius 3 is twenty-seven times
                                                                  are uncountably many subsets of the natural numbers.
the volume of a sphere of radius 1.
                                                                  To justify the second, note that the total length of the
   It may look as though we still have to decide in                                              2
                                                                  intervals making up Xn is ( 3 )n (since one removes a
advance whether we will talk about length, area, or vol-
                                                                  third of Xn−1 to produce Xn ). Since the Cantor set is
ume before we can even begin to think about how the
                                                                  contained in every Xn , its measure must be smaller
measurement scales when we expand the shape. But                         2
                                                                  than ( 3 )n , whatever n is, which means that it must be
this is not the case. For instance, if we expand a square
                                                                  zero. Thus, the Cantor set is very large in one respect
by a factor of 2, then we obtain a new square that can
be divided up into four congruent copies of the original          and very small in another.
square. So, with out having decided in advance that we               A further property of the Cantor set is that it is self-
are talking about area, we can say that the size of the           similar. The set X1 consists of two intervals, and if you
new square is four times that of the old square.                  look at just one of these intervals as the middle thirds
   This observation has a remarkable consequence:                 are repeatedly removed, then what you see is just like
there are sets to which it is natural to assign a dimen-          the construction of the whole Cantor set, but scaled
sion that is not an integer! Perhaps the simplest exam-           down by a factor of 3. That is, the Cantor set consists
ple is a famous set first defined by cantor [VI.54](/part-06/georg-cantor-18451918) and             of two copies of itself, each scaled down by a factor
now known as the Cantor set. This set is produced as              of 3. From this we deduce the following statement: if
follows. You start with the closed interval [0, 1], and           you expand the Cantor set by a factor of 3, then you can
call it X0 . Then you form a set X1 by removing the mid-          divide the expanded set up into two congruent copies
dle third of X0 : that is, you remove all points between          of the original, so it is “twice as big.”
1        2             1      2
3 and 3 , but leave 3 and 3 themselves. So X1 is the
                                                                    What consequence should this have for the dimen-
union of the closed intervals [0, 13 ] and [ 23 , 1]. Next, you   sion of the Cantor set? Well, if the dimension is d, then