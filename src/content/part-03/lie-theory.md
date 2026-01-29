# Lie Theory

III.48.   Lie Theory                                                                                                229

A meromorphic continuation is another of the proper-                 3   What Is the Point of L-Functions?
ties that one would expect of a general L-function. It is
                                                               One of the first uses of L-functions was by dirich-
important to stress, however, that extending a Dirich-
                                                               let [VI.36] himself, who used them to prove that there
let series to a function on the whole complex plane is
                                                               are infinitely many primes in a general arithmetic pro-
not a “purely formal” technique: for a random sequence
                                                               gression (see analytic number theory [IV.2 §4](/part-04/number-theory)). In
a1 , a2 , . . . there is no reason at all for the associated
                                                               fact, although the Riemann hypothesis is still an open
Dirichlet series L(s) to have a natural extension beyond
                                                               problem, even partial results about the locations of
the region where the series converges. The existence
                                                               the zeros of the Riemann zeta function have deep
of a meromorphic continuation is somehow a rigorous
                                                               consequences in the theory of a distribution of prime
way of asserting the existence of subtle symmetries in
                                                               numbers.
the series.
                                                                  However, over the last hundred years mathemati-
  While on the subject of meromorphic continuation,
                                                               cians have realized a second use for them: if X is a
we should briefly mention the riemann hypothesis
                                                               mathematical object and L(s) is its associated L-func-
[V.26](/part-05/the-prime-number-theorem-and-the-vi34-jnos-bolyai-18021860), a conjecture which states that, once one has
                                                               tion, then there are deep conjectures relating the arith-
extended ζ(s) to a function on the whole complex
                                                               metic of X to the values that L(s) assumes, typically at
plane, the complex numbers s such that 0 < Re(s) < 1
                                                               points where the Dirichlet series defining L(s) does not
and ζ(s) = 0 all have real part equal to 12 . There are
                                                               converge! Hence, one can investigate X by investigating
analogous Riemann hypotheses for many L-functions,
                                                               its L-function. One basic example of this phenomenon
almost all of which are open problems.
                                                               is the birch–swinnerton-dyer conjecture [V.4](/part-05/the-birchswinnerton-dyer-conjecture), a
  The final property we shall emphasize is that there is
                                                               weak form of which states that the L-function associ-
a relatively simple formula relating ζ(s) and ζ(1 − s).
                                                               ated with equation (1) should vanish at s = 1 if and
This relation is called the functional equation of the
                                                               only if (1) has infinitely many solutions such that both
zeta function, and any Dirichlet series worthy of the
                                                               x and y are rational numbers. Much is known about
name L-function should also have an analogous prop-            this conjecture, and it has been vastly generalized by
erty. (In general one looks for a relation between L(s)        work of Deligne, Belinson, Bloch, and Kato. However, at
and \bar{L}(k − s), where k is some real number and \bar{L}(s)           the time of writing it remains open.
is the Dirichlet series associated with the series of
complex conjugates a1 , a2 , . . . .)
                                                               III.48 Lie Theory
   There are many examples of Dirichlet series arising
                                                                         Mark Ronan
in number theory that do have, or are at least conjec-
tured to have, these three key properties: an Euler prod-
uct, meromorphic continuation, and a functional equa-
                                                                                   1   Lie Groups
tion. These are the Dirichlet series that have come to be      Why are groups important in mathematics? One major
known as L-functions. For example, if A and B are inte-        reason is that it is often possible to understand a math-
gers such that the three roots of the cubic polynomial         ematical structure by understanding its symmetries,
x 3 + Ax + B are distinct, then the equation                   and the symmetries of a given mathematical structure
                                                               form a group. Some mathematical structures are so
                       y 2 = x 3 + Ax + B                (1)
                                                               symmetrical that they have not just a finite number
defines an elliptic curve [III.21](/part-03/elliptic-curves), and associated with         of symmetries, but a continuous family of them. When
it there is a natural sequence a1 , a2 , . . . (where an is    this is the case, we find ourselves in the realms of Lie
related to the number of solutions of (1) modulo n,            groups and Lie theory.
at least when n is prime—see arithmetic geometry                  One of the simplest “continuous” groups is the group
[IV.5 §5.1](/part-04/arithmetic-geometry) for more details). However, it was an open         SO(2), which consists of all rotations of the plane R2
problem for years to establish the existence of a mero-        about the origin. With each element of SO(2) one can
morphic continuation of the associated Dirichlet series        associate an angle θ: the angle of the rotation in ques-
L(s) to the complex plane: it is now known to exist (and       tion. If we write Rθ for the counter clockwise rotation
indeed to have no poles) as a consequence of the work          by θ, then the group operation is given by Rθ Rφ =
of Wiles, Taylor, and others that grew out of the proof        Rθ+φ , where R2π is understood to equal R0 , the identity
of fermat’s last theorem [V.10](/part-05/fermats-last-theorem).                               element of the group.

$230$

The group SO ( $2$ ) is not just a continuous group, but also a Lie group. Roughly speaking, this means that it is a group in which one can meaningfully define the concept of a smooth curve (that is, a curve that is not just continuous but differentiable as well). Given any two elements R $\theta$ and R φ of SO ( $2$ ), one can easily define a smooth path from $R\theta$ to  Rφ by smoothly modifying $\theta$ until it becomes φ. (The most obvious such path would be given in parametric form by $R({}^{1} - t)\theta + tφ$ , as t goes from $0$ to $1$ .) It is not always the case that every pair of points in a Lie group can be connected by a path: when they can, the Lie group is said to be connected. An example of a Lie group that is not connected is O ( $2$ ), which consists of SO ( $2$ ) together with all reflections of the plane about lines through the origin. Any two rotations can be linked by a path, as can any two reflections, but there is no continuous way of changing a rotation into a reflection. Lie groups were introduced by sophus lie [VI.53](/part-06/sophus-lie-18421899) in order to create an analogue of galois theory [V.21](/part-05/the-insolubility-of-the-quintic) for differential equations. Lie groups that consist of invertible linear transformations of R n or C n , like the examples above, are called linear Lie groups, and they are an important subclass. For linear Lie groups it is fairly easy to work out what terms such as “continuous,” “differentiable,” or “smooth” should mean. However, one can also consider more abstract Lie groups (both real and complex) , with elements that are not given as linear transformations. In order to give a proper definition of Lie groups in their full generality, one needs the concept of a smooth manifold [I.3](/part-01/fundamental-definitions). However, for simplicity we shall mostly restrict attention to linear Lie groups. A very common way to create a Lie group is to collect all transformations of a given space that preserve one or more specified geometric structures. For instance, the general linear group GL n (R) is defined to be the group of all invertible linear transformations from R n to R n . Inside this group is the special linear group SL n (R), in which we retain only those linear transformations that preserve volume and orientation (or equivalently those with determinant [III.15](/part-03/determinants) equal to $1$ ). If instead we retain the linear transformations that preserve distance, then we obtain the orthogonal group O (n); if we retain linear transformations that preserve both distance and orientation we obtain the special orthogonal group SO (n) , which is easily seen to equal SL n (R) ∩ O (n). The Euclidean group E (n) of rigid motions of R n (that is, all transformations that preserve distances and angles, such as rotations, reflec- III. Mathematical Concepts tions, and translations) is generated by the orthogonal group O (n), together with the group of translations (which is isomorphic to R n) . There are analogues of all of the above groups in which the real numbers R are replaced by the complex numbers C . For instance, GL n (C) is the group of all invertible complex-linear transformations of C n , and the complex analogue of the orthogonal group O (n) is the unitary group U (n). There are also the symplectic groups Sp ( $2n$ ) , which are analogues of O (n) and U (n) over the quaternions [III.76](/part-03/quaternions-octonions-and-normed-iv25-probabilistic-models-of-critical-phenomena). These are all manifestly linear Lie groups except for E (n), and in fact it is not difficult to describe a linear Lie group that is isomorphic to E (n) as well. Many important examples of Lie groups are finite dimensional, which roughly means that they can be described using a finite number of continuous parameters. (Infinite dimensional Lie groups, while important, are more difficult to handle and will not be discussed in detail here .) For example, the group SO ( $3$ ), of rotations of $R^{3}$ that fix the origin, is three dimensional. Each rotation can be specified using three parameters, which could, for instance, be taken as rotations around the x-axis, y-axis, and z-axis. These particular parameters are known to airline pilots as roll, pitch, and yaw, where the x-axis is in the direction of the airplane. Another way of specifying each rotation is by its axis and angle of rotation. Two parameters are needed to specify the axis (using spherical coordinates for example), and one parameter is needed to specify the angle of rotation. Let us take this angle to be between $0$ and $\pi$ (a rotation by an angle greater than $\pi$ has the same effect as a rotation by an angle less than $\pi$ from the opposite direction). We can represent SO ( $3$ ) geometrically as follows. Let B be a ball of radius $\pi$ centered at the origin. Given any noncentral point P of B, associate with it the rotation of $R^{3}$ about the axis OP (where O is the origin) through an angle that is given in radians by the distance from O to P. With O itself we associate the identity map, so the only ambiguity is that a rotation through $\pi$ radians is associated with two opposite points P and P on the surface of B. We can remove this ambiguity by gluing all such pairs of points together. This tells us what SO ( $3$ ) looks like as a topological space [III.90](/part-03/topological-spaces) : it is equivalent to the three-dimensional projective space [I.3](/part-01/fundamental-definitions)RP3 . The group SO (2) , by comparison, is much simpler, and is topologically equivalent to a circle. Lie groups arise naturally in any subject that involves continuous motion. For instance, they appear in applied topics such as the design of guidance systems

III.48.   Lie Theory                                                                                                   231

and also in very pure topics such as geometry or differ-       Lie group SO(3) could be used to describe the current
ential equations. Lie groups, and the closely related Lie     orientation of the aircraft with respect to a fixed coor-
algebras discussed below, also frequently arise in many       dinate system, whereas an element of the Lie algebra
types of algebra, particularly in the algebraic structures    so(3) could be used to describe the current rate of roll,
that appear in quantum mechanics and other related            pitch, and yaw that the pilot is applying to the aircraft
branches of physics.                                          to smoothly change its orientation.)
                                                                 As we have just seen, the Lie algebra gln (C) of the
                       2   Lie Algebras                       general linear group GLn (C) is the space of all n \times n
                                                              complex matrices. The Lie algebra sln (C) of the special
As the examples above show, Lie groups are often
                                                              linear group SLn (C) is the subspace of all matrices with
“curved” and have some nontrivial topology. However,
                                                              trace zero. This is because det(I + X) = 1 +  tr X, up
one can profitably analyze a Lie group by associating
                                                              to errors of size 2 , so if  → I + X is a path in the
with it a flat space known as a Lie algebra. This idea
                                                              group, then tr X = 0. The Lie algebra so(n) of SO(n) is
is similar to the idea of studying a symmetric object
                                                              equal to the Lie algebra o(n) of O(n), and both are equal
such as a sphere by first studying its relationship to
                                                              to the space of all antisymmetric matrices. Similarly,
one of its tangent planes. The Lie algebra uses the tan-
                                                              both the Lie algebra su(n) of SU(n) and the Lie algebra
gent space to the Lie group at the identity element, and
                                                              u(n) of U(n) are equal to the space of skew-Hermitian
one can view it as a “logarithm” of the Lie group.
                                                              matrices. (A matrix is skew-Hermitian if it equals minus
   To see how Lie algebras arise, let us consider a lin-
                                                              the complex conjugate of its transpose.)
ear Lie group. The elements of the group can be viewed
as linear transformations on a vector space, or equiv-           The fact that a Lie group is closed under multiplica-
alently (when we have selected a coordinate basis) as         tion can be used to show that its Lie algebra is closed
square matrices. In general, two matrices A and B do          under addition. Thus, a Lie algebra is a (real) vector
not commute (that is, AB does not have to equal BA),          space. However, it has some additional structure that
but the situation becomes simpler if one looks at matri-      makes it far more than just a vector space. For instance,
ces that are very close to the identity matrix I. If A =      let A and B be two elements of the Lie group G that are
I + X and B = I + Y for some very small positive           very close to the identity. Then we can write A ≈ I + X
and two fixed matrices X and Y , then                          and B ≈ I + Y for some very small  and some ele-
                                                              ments X and Y of the Lie algebra g. A little matrix alge-
               AB = I + (X + Y ) + 2 XY
                                                              bra shows that the commutator ABA−1 B −1 of A and B,
and                                                           which is the element of G that measures the extent to
                                                              which A and B fail to commute, can be approximated
               BA = I + (X + Y ) + 2 Y X.
                                                              by I + 2 [X, Y ], where [X, Y ] = XY − Y X. This quantity
Thus, if we ignore the terms containing 2 , we see           [X, Y ] is called the Lie bracket of X and Y . Informally, it
that A and B “almost commute,” and that multiplica-           represents the net direction of motion if one first moves
tion of A and B “almost corresponds to” addition of X         an infinitesimal amount in the X direction, then in the
and Y : indeed, one can view X and Y as analogous to          Y direction, then back in the X direction and back in
“logarithms” of A and B respectively.                         the Y direction, in that order. The resulting new direc-
   Let us now informally define the Lie algebra g of a lin-    tion may be quite different from the original directions
ear Lie group G to be the space of all matrices X such        X and Y .
that, for sufficiently small , the matrix I + X lies in          The Lie bracket obeys a number of nice identities,
G, up to errors of size 2 . For example, the Lie algebra     such as the antisymmetric identity [X, Y ] = −[Y , X]
gln (C) of the general linear group GLn (C) is the space of   and the Jacobi identity
all n \times n complex matrices. One can view the Lie alge-
                                                                     [[X, Y ], Z] + [[Y , Z], X] + [[Z, X], Y ] = 0.
bra as describing all possible instantaneous directions
and speeds within the group G, and a more precise def-        One can in fact use such identities to define Lie algebras
inition is the collection of all derivatives R0 of smooth     in a completely abstract fashion, without any reference
curves  → R in G that pass through the identity ele-       to matrices or Lie groups, in much the same way that
ment R0 . This definition can also be extended to more         other algebraic objects such as groups, rings, and fields
abstract Lie groups without much difficulty. (To return         can be defined using a handful of algebraic identities as
to the example of the airplane pilot, an element of the       axioms, but we shall not focus on the abstract approach

$232$

to Lie algebras here. A familiar example of a Lie algebra is $R^{3}$ with the Lie bracket [x , y] defined to be the cross-product x $\times$ y. Notice that the Lie bracket does not satisfy the associative law (unless it is trivial). We have seen that a linear Lie group G naturally generates the bracket operation [· , ·] on its Lie algebra g . Conversely, if the Lie group is connected, one can almost reconstruct it from the Lie algebra, with its addition, scalar multiplication, and Lie bracket operation. More precisely, every element A of the Lie group can be written as an exponential [III.25](/part-03/the-exponential-and-logarithmic-functions) exp (X) of an element X of the Lie algebra. For example, if the Lie group is SO ( $2$ ), then we can identify it with the unit circle in C . The tangent to this circle at $1$ is a vertical line, so we can identify the Lie algebra with the set i R of purely imaginary numbers. (Normally , however, we would just say that the Lie algebra is R .) The rotation through an angle $\theta$ can then be written as exp (i $\theta$ ). Note that this representation is not unique, since exp $(i\theta) =$ exp $( i(\theta + 2\pi))$ . It is not hard to see that the Lie group R also has R as its Lie algebra (to make sense of this it helps to replace R by the multiplicative group of positive real numbers, which is isomorphic to R), and that in this case the representation of a group element as an exponential is unique. In general, if two connected Lie groups have the same Lie algebra, then those Lie groups share the same universal cover, and are therefore closely related to one another. In the case of linear Lie groups, the exponential can be described by the familiar formula $n_{1}$

exp $(X) =$ lim

$I +$

X .

n

$n \to \i\text{nf ty}$

For more abstract Lie groups, the exponential is best described in the language of ordinary differential equations, 1 using a suitable generalization of the identity d t X

$e = XetX$

dt

from single-variable calculus. However, owing to the non commutativity of the Lie group, it is not quite true that exp (X  +  Y) equals exp (X) exp (Y); instead, the correct identity is the Baker-Campbell-Hausdorff formula

$1$

exp  (  X  )  exp $(Y) =$ exp $(X + Y + {}^{2}$ [X , Y ] + · · ·), $1$ . Indeed, Lie groups and Lie algebras are an excellent tool for describing the algebraic aspects of ordinary and partial differential equations; the evolution of such equations through time can be modeled using a Lie group, and the differential operators used to describe an equation can be modeled on the associated Lie algebra. However, we will not discuss this important connection between Lie theory and differential equations here. III. Mathematical Concepts where the missing terms consist of a moderately complicated infinite series involving the Lie bracket. The exponential map that connects Lie algebras and Lie groups is closely related to the Lie bracket, and because of this it is possible to study and classify Lie groups by first studying and classifying Lie algebras with their Lie bracket operation. $3$ Classification It is always of interest when a mathematical structure can be classified, but especially so if the structure is important and the classification is not straightforward. By these criteria, the results that have been obtained concerning the classification of Lie algebras are undeniably interesting, and they are regarded as one of the great mathematical achievements from around the turn of the twentieth century. It turns out to be easier to classify complex Lie algebras: that is, Lie algebras such as sl n (C) that have the structure of a complex vector space. Each real Lie algebra embeds in a complex Lie algebra of twice the (real) dimension, known as the complex if ic at i on of the original algebra. However, a complex Lie algebra may arise as the complex if ic at i on of several different real Lie algebras (known as real forms of the complex Lie algebra). In classifying Lie groups and Lie algebras, the first step is to restrict attention to simple Lie groups and Lie algebras; these are analogous to prime numbers in the sense that they cannot be “factored” into smaller components. For instance, the Euclidean group E (n) contains the translation group R n as a connected normal subgroup. If we factor out this group, then we obtain the orthogonal group O (n), so E (n) is not simple. More formally, a Lie group is simple if it contains no proper connected normal subgroups, and a Lie algebra is simple if it contains no proper ideals [III.81](/part-03/rings-ideals-and-modules). In this sense, the Lie group SL n (C) and its Lie algebra sl n (C) are simple for every n. Finite-dimensional, complex, simple Lie algebras were classified by Wilhelm Killing and Élie cartan [VI.69](/part-06/lie-joseph-cartan-18691951) in $1888 - 94$ . This classification is often placed in the context of socalled semisimple Lie algebras, which can be factored in a unique way (up to rearrangement) as a direct sum of simple Lie algebras, just as a natural number can be factored uniquely as a product of prime numbers. Further more, a theorem of Levi shows that a general finite dimensional Lie algebra g can be expressed as a combination (or , more precisely, a “semidirect product ”) of a

III.48.   Lie Theory                                                                                               233

semisimple algebra (called a Levi subalgebra of g) and                  An
a solvable subalgebra (known as the radical of g). Solv-                Bn
able Lie algebras, which are related to the concept of a
                                                                        Cn
solvable group [V.21](/part-05/the-insolubility-of-the-quintic) in group theory, are difficult to
classify, but in many applications one can restrict atten-             Dn
tion to semisimple Lie algebras, and hence to simple Lie
algebras.                                                               E6
   A simple Lie algebra g splits into smaller subalge-
bras, which are not ideals but which are related to one                 E7
another in particularly nice ways. The case of sln+1
is typical and we shall use it to explain the general                   E8
theory. It comprises all (n + 1) × (n + 1) matrices of
trace zero, and splits as a direct sum in the following                 F4
way:                                                                   G2
                   sln+1 = n+ ⊕ h ⊕ n− ,
                                                                             Figure 1 Dynkin diagrams.
where h is the set of diagonal matrices of trace zero,
and n+ and n− are, respectively, the sets of upper and
lower triangular matrices with 0 s on the diagonal. Two       as ei − ej , X. We refer to the vectors ei − ej as root
diagonal matrices X and Y commute with one another,          vectors.
so their Lie bracket [X, Y ] = XY − Y X is 0. In other          In general, a complex semisimple Lie algebra g can
words, if X and Y belong to h, then [X, Y ] = 0. A Lie       be completely described by its root vectors α and cor-
algebra in which [X, Y ] = 0 for any two elements X and      responding root spaces gα . The rank of g equals the
Y is called Abelian.                                         dimension of the Cartan subalgebra h, and also equals
   Each simple Lie algebra g has a similar decomposi-        the dimension of the vector space spanned by the root
tion where the subspace h is a maximal Abelian subal-        vectors. For example, sln+1 has rank n, and its root vec-
gebra called a Cartan subalgebra. (For Lie algebras that     tors are the vectors ei − ej , as we have just seen. Sets
are not simple, the definition of Cartan subalgebras          of root vectors are far from arbitrary: they must obey
is more complicated.) Cartan subalgebras are impor-          some simple but quite restrictive geometric properties.
tant because their action on the rest of the Lie algebra     For instance, if a root vector α is reflected in the hyper-
can be simultaneously diagonalized. What this means          plane perpendicular to another root vector β, the result
is that a complement to h can be split up into one-          must be a third root vector sβ (α), where sβ is the reflec-
dimensional components gα , known as root spaces, that       tion concerned. (To make the notion of “perpendicular”
are invariant under the action of h. To put this another     precise, one needs to define a special inner product on
way, if X belongs to h, and Y belongs to a root space,       the Cartan subalgebra, known as the Killing form, but
then [X, Y ] is a scalar multiple of Y . (The diagonaliza-   we shall not discuss this here.) The group generated
tion requires the fundamental theorem of algebra             by these reflections is called the Weyl group of the Lie
[V.13](/part-05/the-fundamental-theorem-of-algebra), which is why we need to work with complex Lie        algebra.
algebras.)                                                      The root vectors form what is called a root system,
   For sln+1 this works as follows. Each root space gij is   and the geometric properties mentioned above allow
the one-dimensional space of matrices whose entries          one to classify all root systems, and hence all complex
are 0 except for a single entry in the ith row and jth       semisimple Lie algebras. This classification is given by
column. If X ∈ h (that is, if X is a diagonal matrix of      some very simple diagrams called Dynkin diagrams,
trace zero) and Y ∈ gij , then it is not hard to check       which are shown in figure 1.
that [X, Y ] also lies in gij . In fact,                        The nodes of the diagram correspond to so-called
                                                             simple roots. Every root is a linear combination of sim-
                  [X, Y ] = (Xii − Xjj )Y .                  ple roots with coefficients that are either all nonnega-
If we identify the diagonal matrix X with the vector         tive or all nonpositive. The nature of the bond (or lack
whose n coordinates appear down its diagonal, and            thereof) between two nodes determines the inner prod-
if we write ei for the vector that is 1 in the ith posi-     uct of the corresponding simple roots. If there is no
tion and 0 elsewhere, then Xii − Xjj can be rewritten        bond, then the inner product is 0; if there is a single

