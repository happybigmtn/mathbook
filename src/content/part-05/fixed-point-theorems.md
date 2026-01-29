# Fixed Point Theorems

V.11.   Fixed Point Theorems                                                                                               693

curve, it is not at all clear how to set about finding a          What we have just proved is a slightly disguised form
modular form associated with it in this way. However, it       of one of the simplest of all fixed point theorems. We
always seemed to be possible, even if the phenomenon           could state it more formally as follows: if f is a contin-
was a mysterious one. For instance, if E is the ellip-         uous function from the closed interval [0, 1] to itself,
tic curve y 2 + y = x 3 − x 2 − 10 x − 20, then there is        then there must exist an x such that f (x) = x. This x
a modular form f such that ap (E) = ap (f ) for every          we call a fixed point of f . (We deduced the result from
prime p apart from 11. This modular form is the unique         the intermediate value theorem, a basic result in analy-
complex function (up to scaling) that satisfies a certain       sis that states that if g is a continuous function from
periodicity property with respect to the group Γ0 (11),        [0, 1] to R such that g(0) ⩽ 0 and g(1) ⩾ 0, then there
which consists of all matrices ( ac d
                                    b
                                      ) such that a, b, c,     must be some x such that g(x) = 0.)
and d are integers, c is a multiple of 11, and the deter-        In general, a fixed point theorem is a theorem that
minant [III.15](/part-03/determinants) ad−bc is 1. It is far from obvious that a      asserts that a function that satisfies certain conditions
definition of this type should have anything to do with         must have a fixed point. There are many such the-
elliptic curves.                                               orems, a small sample of which we shall discuss in
   Wiles proved that all “semistable” elliptic curves are      this article. On the whole, they tend to have a noncon-
modular, not by showing how to associate a modular             struc tive nature: they establish the existence of a fixed
form with each such elliptic curve, but by using a sub-        point rather than defining one or telling you how to
tle counting argument that guaranteed that the modu-           find it. This is part of the reason that they are impor-
lar form had to exist. The full conjecture was proved          tant, since there are many examples of equations for
a few years later, by Christophe Breuil, Brian Conrad,         which one would like to prove that a solution exists
Fred Diamond, and Richard Taylor, which put the icing          even when one cannot solve it explicitly. As we shall
on the cake of one of the most celebrated mathematical         see, one way of going about this is to try to rewrite the
achievements of all time.                                      equation in the form f (x) = x and apply a fixed point
                                                               theorem.
V.11     Fixed Point Theorems
                                                                       2    Brouwer’s Fixed Point Theorem
                    1   Introduction
The following is a variant of a well-known mathematical        The fixed point theorem we have just proved is the one-
puzzle. A man is on a train from London to Cambridge           dimensional version of Brouwer’s fixed point theorem,
and has a bottle of water with him. Prove that there is at     which states that if B n is the unit ball of Rn (that is, the
least one moment on the journey when the volume of             set of all (x1 , . . . , xn ) such that x12 + · · · + xn
                                                                                                                      2 ⩽ 1) and
                                                                                                          n       n
                                                               f is a continuous function from B to B , then f must
air in the bottle, as a fraction of the volume of the bottle
itself, is exactly equal to the fraction of his journey that   have a fixed point. The set B n is an n-dimensional solid
he has completed. (For instance, the bottle might be           sphere, but all that matters is its topological character,
two fifths full, and therefore three fifths empty, at the        so we could take it to be another shape such as an n-
precise moment when he is three fifths of the way from          dimensional cube or simplex.
London to Cambridge. Note that we do not assume that              In two dimensions this says that a continuous func-
the bottle is full at the start of the journey or empty at     tion from the closed unit disk to itself must have a fixed
the end.)                                                      point. In other words, if you had a circular sheet of rub-
   The solution, if you have not seen this sort of ques-       ber on a table and you picked it up and put it back down
tion before, is surprisingly simple. For each x between        within the circle where it started, having folded it and
0 and 1 let f (x) be the proportion of air in the bottle       stretched it as much as you liked, there would always
when the proportion of the journey that has been com-          have to be a point that ended up in the same place as
pleted is x. Then 0 ⩽ f (x) ⩽ 1 for every x, since the         before.
volume of air in the bottle cannot be negative and can-           To see why this is true, it is helpful to reformulate
not exceed the volume of the bottle. If we now set g(x)        the statement. Let D = B 2 be the closed unit disk. If
to be x − f (x), then we see that g(0) ⩽ 0 and g(1) ⩾ 0.       we had a continuous function f from D to D with no
Since g(x) varies continuously with x, there must be           fixed point, then we could define a continuous function
some moment at which g(x) = 0, so that f (x) = x,              g from D to its boundary ∂D as follows: for each x,
which is what we wanted.                                       follow a straight path from f (x) to x and continue on

$694$

f (x)

x

g (x)

D

Figure $1$ If f has no fixed points, then it can be used to define a retraction g. in a straight line; g (x) is the point where you first reach ∂D (see figure $1$ ), and it is well-defined because (and only because) f (x)    =  x. If x is already on the boundary of D, then g (x)  =  x. So we have a continuous function $g$ : $D \to$ ∂D such that $g(x) = x$ for every $x\in$ ∂D. Such a function is called a retraction from D to ∂D. It seems highly unlikely that a continuous retraction from D to ∂D could exist.
If we can prove that it cannot, then we will have contradicted the assumption that there is a continuous function from D to D with no fixed point, and there by have proved Brouwer’s fixed point theorem in two dimensions. There are several ways of proving that continuous retractions from disks to their boundaries cannot exist. Here we briefly sketch two. Suppose, first, that g is such a retraction. For each t, let us consider the restriction of g to the circle of radius t about the origin, and let us represent a typical point in this circle as te $i\theta$ .
Let us write g t ( $\theta$ ) for g $(tei\theta)$ . When $t = 1$ the circle of radius t is ∂D, so as $\theta$ goes from $0$ to $2\pi$ , $g^{t}(\theta) = ei\theta$ goes once around the unit circle. When t $= 0$ , the circle of radius t is a single point, so as $\theta$ goes from $0$ to $2\pi$ , $g^{t}(\theta)$ is just the constant point g ( $0$ ), which does not go around the unit circle at all. Therefore, some where between $t = 1$ and $t = 0$ there must be a change in the number of times g t ( $\theta$ ) goes around the unit circle as $\theta$ goes from $0$ to $2\pi$ .
But the functions $g^{t}$ are a continuously varying family of functions, and a small change in g t cannot cause a sudden jump in the number of times that g t ( $\theta$ ) goes around the circle. (To make this last step rigorous needs a bit of work, but the basic idea is sound .) A second proof uses basic tools from algebraic topology. The first homology group [IV.6](/part-04/algebraic-topology) of the disk D is trivial, since every curve in the disk can be shrunk

V. Theorems and Problems

to a point. The first homology group of the unit circle ∂D is Z . If there is a continuous retraction g from D to ∂D, then we can find continuous maps h : ∂D $\to$ D and g : D $\to$ ∂D such that g ◦ h is the identity on ∂D. (We let h be the map that takes a point of ∂D to itself and we let g be the continuous retraction .) Now continuous maps between topological spaces give rise to homomorphisms [I.3](/part-01/fundamental-definitions) between their homology groups, in such a way that compositions go to compositions and identity maps go to identity maps.
(That is, there is a functor [III.8](/part-03/categories) from the category [III.8](/part-03/categories) of topological spaces and continuous maps to the category of groups and group homomorphisms .) This means that there must be homomorphisms φ : $Z \to {0}$ and $\psi$ : ${0} \to Z$ such that $\psi$ ◦ φ is the identity on Z , which is obviously impossible. Both proofs generalize to higher dimensions:
the second straightforward ly (once one knows how to compute homology groups of spheres), and the first via the notion of the degree of a continuous map from the nsphere to itself, which is a higher-dimensional analogue of the notion of the number of times a map from the circle to itself “goes around the circle.” Brouwer’s fixed point theorem has many applications. For example, the following fact is important in the theory of random walks on graphs. A stochastic matrix is an n $\times$ n matrix with nonnegative entries such that the sum of the entries in each row is equal to $1$ .
Brouwer’s fixed point theorem can be used to show that every such matrix has an eigenvector [I.3](/part-01/fundamental-definitions) with nonnegative entries and eigenvalue $1$ . The proof is as follows: the set of all column vectors with nonnegative entries that add up to $1$ is, geometrically speaking, an (n $- 1$ ) - dimensional simplex. (For example, if $n = 3$ , this set is a triangle in $R^{3}$ with vertices (1, 0, 0) , (0, 1, 0) , and (0, 0, 1).) If A is a stochastic matrix and x belongs to this simplex, then so does Ax.
Since the map x   $\to$ Ax is continuous, Brouwer’s theorem gives us an x such that $Ax = x$: this is the required eigenvector. An extension of Brouwer’s theorem, called the Kakutani fixed point theorem, was used by John Nash to establish the existence of a “social equilibrium,” a state of affairs in which no household can individually improve its well-being by altering the amount that it consumes of various items. Kakutani’s theorem concerns functions that take points in a closed ball B n not to other points in B n but to subsets of B n .
If f (x) is a nonempty closed convex subset of B n for each x and if f (x) varies continuously in an appropriate sense, then

$V$ . $11$ .

Fixed Point Theorems

the theorem says that there must be some x such that x $\in$ f (x). Brouwer’s theorem is the special case where each f (x) is a set with just one element.

$3$

A Stronger Form of Brouwer’s

Fixed Point Theorem

So far, we have discussed maps from solid spheres to themselves, but there is nothing to stop us thinking about whether continuous maps on other spaces must have fixed points. For example, let $S^{2}$ be the (nonsolid) sphere { (x ,  y, z) : $x^{2} + y^{2} + z^{2} = 1$ and let f be a continuous function from $S^{2}$ to $S^{2}$ . Must f have a fixed point? At first one might think so: some obvious functions from $S^{2}$ to itself are rotations and reflections, both of which certainly have fixed points, and it is hard to see how one can “get rid” of those fixed points.
However, eventually one realizes that there is a simple example of a function with out a fixed point, namely the function f (x) $= -$ x , which reflects each point through the origin. The obvious reaction to this example is to note that the result we had hoped for is false and to turn our attention to something else. But this reaction is a mistake, as it is in many other mathematical contexts, because there was something importantly correct about the idea that it was impossible to get rid of the fixed points of a rotation.
It turns out that if you start with a rotation and try to get rid of the fixed points by continuously deforming it, then you are doomed to failure. In fact, in a certain sense there will always be exactly two fixed points. More generally, if you take any continuous function from $S^{2}$ to $S^{2}$ and continuously deform it, then you cannot change the number of fixed points. Of course, these last two statements are patently false if taken at face value so some re interpretation is needed.
First, we must assume that the number of fixed points is finite, but this is not a huge assumption as it can be shown that a typical small perturbation of any continuous function will have only finitely many fixed points. Second, we must count the fixed points with appropriate weights. To define these, suppose that f (x)  =  x, and imagine a point y (t) that goes around x in a tiny circle as t goes from $0$ to $1$ .
We define the index of the fixed point x to be the number of turns made by the vector from y (t) to f (y (t)), counting this negatively if these turns are in the opposite direction to the way that y (t) goes around x. (This definition is problematic if f (y (t))  =  y (t) for some t, but again

$695$

we can make small perturbations and assume that this does not happen .) Then the sum of the indices of all the fixed points is the quantity that does not change if you continuously deform f . It follows that if you continuously deform a rotation, then the sum of the indices will always be $2$ . From this it follows that there must be at least one fixed point. It also follows that you cannot continuously deform a rotation so that it becomes the map that sends each x to $- x$ .
The notion of the index of a fixed point can be generalized in a fairly straightforward way to higher dimensions (using the concept of degree mentioned earlier), and one can show under very general circumstances that the sum of the indices of fixed points remains constant when you continuously deform a continuous map. This implies Brouwer’s fixed point theorem as follows. We can continuously deform any continuous map f : B n $\to$ B n into any other continuous map g : B n $\to$ B n by defining $f^{t}(x) = (1 - t)f(x) + t$g( x ) and letting t vary from $0$ to $1$ .
Let us therefore take g to be the $1$ map x $\to {}^{2}$ x, which has a single fixed point. This fixed point has index $1$ (as one can see easily in the two dimensional case), and therefore the sum of the indices of the fixed points of f is $1$ as well. In general, the sum of the indices of the fixed points of a function f defined on a suitable topological space X (such as a smooth compact manifold [I.3](/part-01/fundamental-definitions) ) can be calculated in terms of the effect of f on the homology groups of X.
The resulting theorem is (a slight generalization of) the Lefschetz fixed point theorem. The fact that the index of a continuous map is an invariant of continuous deformations can be used to give a proof of the fundamental theorem of algebra [V.13](/part-05/the-fundamental-theorem-of-algebra). Consider, for instance, the problem of proving that the polynomial $x^{5} + 3x + 8$ has $a$ root. This is the same as asking for a fixed point of the function $x^{5} + 4x + 8$ , since if this equals $x$ then $x^{5} + 3x + 8 = 0$ .
Now if we regard the polynomial $x^{5}$ as being defined on the riemann sphere [IV.14](/part-04/dynamics) C ∪ ${\infty}$, then it has two fixed points, at $0$ and $\infty.$ More over, their indices are both 5( since if x goes around $0$ or $\infty$ in $a$ “small circle,” then $x^{5}$ goes around five times). Now the polynomials $x^{5} + (4x + 8)t$ give us a continuous deformation from $x^{5}$ to $x^{5} + 4x + 8$ , and $x^{5} + 4x + 8$ has $a$ fixed point of index $5$ at $\infty.$ It follows that there must be other fixed points, with indices adding up to $5$ .
These are the roots of $x^{5} + 3x + 8$ , and the indices are the multiplicities of the roots.