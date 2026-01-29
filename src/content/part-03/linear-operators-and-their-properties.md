# Linear Operators and Their Properties

III.50.   Linear Operators and Their Properties                                                                         239

Palais, R. S. 1997. The symmetries of solitons. Bulletin of the      (iii) Another important way of defining linear opera-
  American Mathematical Society 34:339–403.                       tors on function spaces is to use a kernel. This is a func-
Russell, J. S. 1844. Report on waves. In Report of the 14 th       tion K of two variables, which can be used to define a
  Meeting of the British Association for the Advancement of
                                                                  linear map in a way that is similar to the way a matrix
  Science, pp. 311–90. London: John Murray.
Toda, M. 1989. Nonlinear Waves and Solitons. Dordrecht:
                                                                  can be used to define a map between finite-dimensional
  Kluwer.                                                         vector spaces. The following formula uses K to define
Zabusky, N. J., and M. D. Kruskal. 1965. Interaction of soli-     a linear map T :
  tons in a collision less plasma and the recurrence of initial
  states. Physics Review Letters 15:240–43.                                     T f (x) =    K(x, y)f (y) dy.             (1)

                                                                  Note the formal similarity between this and the formula
                                                                                              
III.50     Linear Operators and                                                     (Av)i =      Aij vj ,
           Their Properties                                                                       j

                                                                  which defines the product of a matrix with a column
                                                                  vector. Once again, K will have to satisfy appropriate
      1   Some Examples of Linear Operators                       conditions in order for (1) to define a continuous linear
A linear map [I.3 §4.2](/part-01/fundamental-definitions) between two vector spaces                 map.
[I.3 §2.3](/part-01/fundamental-definitions) V and W is a function T : V → W that satisfies            A good example of a linear operator defined by a ker-
the condition T (λ1 v1 + λ2 v2 ) = λ1 T v1 + λ2 T v2 . Two        nel is the fourier transform [III.27](/part-03/the-fourier-transform) F , which takes a
phrases that are used almost interchangeably with “lin-           function in L2 (R) to another such function. It is defined
ear map” are “linear transformation” and “linear opera-           by the formula
                                                                                              \infty
tor.” The former is often used when one wishes to draw
                                                                               (F f )(α) =        f (x)e−iαx dx.
attention to the effect of a linear map on some other                                         −\infty
object; for example, one might well choose to use the             The kernel in this case is the function K(α, x) = e−iαx .
word “transformation” to describe geometrical opera-
                                                                     (iv) If f is a differentiable function defined on R, say,
tions such as reflections or rotations. As for “operator,”
                                                                  and we write Df for its derivative, then we can think
it tends to be the word of choice when the linear map is
                                                                  of D as a linear map, since D(\lambda f + \mu g) = \lambda Df + \mu Dg.
between infinite-dimensional spaces, especially when it
                                                                  In order to regard D as an operator, we need to require
is just one of an ensemble of linear maps that form an
                                                                  f to belong to a suitable function space. The best way
algebra. It is these maps that we shall discuss here.
                                                                  of doing this varies from context to context: choosing
   Let us begin with some examples of linear operators.
                                                                  a good function space can be very important and can
  (i) If X is a banach space [III.62](/part-03/normed-spaces-and-banach-spaces) whose elements are          raise subtle questions. One way is not to insist that D
infinite sequences, then we can define a “shift” S from X
                                                                  is defined for every function in the space and not to
to X, which takes the sequence (a1 , a2 , a3 , . . . ) to the
                                                                  require D to be continuous: sometimes it is enough
sequence (0, a1 , a2 , a3 , . . . ). (In other words, it puts a
                                                                  if D is discontinuous but defined on a dense set of
0 at the beginning and shifts the other values of the
                                                                  functions.
sequence one place to the right.) The map S is linear,
                                                                     Similarly, many partial differential operators, such as
and if the norm on X is not too pathological, then S will
                                                                  the gradient [I.3 §5.3](/part-01/fundamental-definitions) and the laplacian [I.3 §5.4](/part-01/fundamental-definitions), are
be a continuous function from X to X.
                                                                  linear operators when viewed appropriately.
   (ii) If X is a space of functions [III.29](/part-03/function-spaces) defined on the
closed interval [0, 1] and w is some fixed function, then                       2   Algebras of Operators
the map M that takes the function f to the product f w
(which is shorthand for the function x → f (x)w(x)) is           Although individual operators can be important, linear
linear, and, provided w is small enough in some appro-            operators would not be as interesting as they are if it
priate sense, M is a continuous linear map from X to X.           were not for the fact that they can be formed into fam-
Such maps are called multipliers. (Note that the prop-            ilies. If X is a Banach space, then the set B(X) of all
erty of “being a multiplier” depends not just on the              continuous linear operators from X to itself forms a
space X and the map M but also on the way we choose               structure known as a Banach algebra. Roughly speak-
to represent X as a space of functions, so it is not an           ing, this means that it is a Banach space (the norm of an
intrinsic property of the map itself.)                            operator T is defined to be the supremum of T x over

240                                                                                          III. Mathematical Concepts

all x such that x ⩽ 1) in which the elements can be          3.3   Properties of Matrices
multiplied as well as added. The product of T1 and T2 is
                                                               If H is a finite-dimensional space with an orthonor-
defined to be the composition T1 T2 , and it is easily seen
                                                               mal basis, then we can form the matrix A of T with
to satisfy the inequality T1 T2  ⩽ T1  T2 . This alge-
                                                               respect to that basis. The various properties of T dis-
bra is particularly important when X is a hilbert space
                                                               cussed above then turn out to be equivalent to proper-
[III.37](/part-03/bayesian-analysis) H: subalgebras of B(H) have a very rich struc-
                                                               ties of the matrix A. The transpose of A is the matrix
ture, which is discussed in operator algebras [IV.15](/part-04/operator-algebras).
                                                               AT defined by (AT )ij = Aji , and the conjugate trans-
                                                               pose is the matrix A∗ defined by (A∗ )ij = Aji . An n \times n
             3 Properties of Operators
                                                               matrix A is unitary if AA∗ is the identity, orthogonal if
             Defined on a Hilbert Space
                                                               A is real and AAT is the identity, Hermitian if A = A∗ ,
Unlike a general Banach space, a Hilbert space H has           and self-adjoint if A = AT (in which case we say that A is
an inner product. It is therefore natural to ask that a        symmetric). The operator T has one of these four prop-
continuous linear operator from H to H should relate           erties if and only if its matrix A has the corresponding
to the inner product somehow. This basic idea leads to         property.
several different definitions, each of which picks out an
important class of operators.                                  3.4   The Spectral Theorem

                                                               Notice that the adjoint of a unitary operator is the
3.1   Unitary and Orthogonal Maps
                                                               inverse of that operator. In particular, both unitary and
Perhaps the most obvious condition one might require           Hermitian operators commute with their adjoints. An
of an operator T is that it should preserve the inner          operator with this property is called normal. Normal
product, in the sense that T x, T y should equal x, y      operators are important because of the famous spec-
for any two vectors x and y. In particular, this implies       tral theorem. If T is a normal operator on a finite-
that T x = x for every x, and therefore that T is          dimensional space H, then the spectral theorem asserts
an isometry (that is, a map that preserves distances). If      that H has an orthonormal basis [III.37](/part-03/bayesian-analysis) of eigenvec-
in addition, T is invertible, which it will be if its image    tors of T . In other words, there is a basis of H consisting
is the whole of H, then T is a unitary map. The uni-           of orthogonal unit vectors, with the property that the
tary maps form a group. If H is n dimensional, then            matrix of T with respect to this basis is diagonal. This
this group is an important lie group [III.48 §1](/part-03/lie-theory) called        is an extremely useful theorem in linear algebra. In gen-
U (n). If H is a real Hilbert space (as opposed to a com-      eral, if T is a normal operator on a Hilbert space H, then
plex one), then the word “orthogonal” is used instead          the spectral theorem tells us that there is something
of “unitary” and the corresponding Lie group is called         like a “basis” for H, with respect to which T is a multi-
O(n). When n = 3, orthogonal maps are rotations and            plier. To put this slightly differently, there is an isomet-
reflections, so O(n) is the generalization of the group         ric isomorphism φ from H to a Hilbert space H of func-
of rotations and reflections to n dimensions.                   tions that are square-integrable with respect to some
                                                               measure [III.55](/part-03/measures), and the map φT φ−1 is a multiplier
3.2   Hermitian and Self-Adjoint Maps                          on H .

Given any operator T from H to H, there is an opera-
                                                               3.5   Projections
tor T ∗ from H to H with the property that T x, y =
x, T ∗ y for every x and y. This operator is unique,         Another important class of maps on a Hilbert space is
and it is called the adjoint of T . A second property          the set of orthogonal projections. In general, an element
that T can have is that of equaling its own adjoint,           T of an algebra is an idempotent if it has the property
which is the case if and only if T x, y = x, T y for       that T 2 = T . If the algebra is an algebra of operators on
every x and y. Such operators are called Hermitian or,         a space X, then T is called a projection. To see why this
when the scalars are real, self-adjoint. A simple source       name is appropriate, note that every x is mapped to the
of examples of Hermitian maps is multipliers on the            subspace T X of X, and all points in that subspace are
space L2 [0, 1], where the function one multiplies by is       left fixed by T (since T (T x) = T 2 x = T x). A projection
bounded and real-valued. As we shall see in a moment,          is orthogonal if T x is always orthogonal to x −T x. This
there is a sense in which these are the only examples.         tells us that T is a projection on to some subspace Y of

