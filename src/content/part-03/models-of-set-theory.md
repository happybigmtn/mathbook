# Models of Set Theory

248                                                                                                 III. Mathematical Concepts

mathematical objects are close, and understand pre-                           can be shown that the formula derived above from
cisely what that means. If the two objects are the                            the Pythagorean theorem gives a notion of dis-
points (x1 , x2 ) and (y1 , y2 ) in a plane, then the task                    tance that does indeed satisfy properties (P1)–(P3).
is straightforward: the distance between them is                              This metric is called the Euclidean distance and the
                
                                                                              resulting metric space is called Euclidean space.
                  (y1 − x1 )2 + (y2 − x2 )2 ,
                                                                              Euclidean spaces are perhaps the single most
by the Pythagorean theorem, and it makes sense to say                         basic and important class of metric spaces in
that the points are close if this distance is small.                          mathematics.
  Now suppose that we have two points in n-dimen-                        (ii) Nowadays, information is often transmitted digi-
sional space, (x1 , . . . , xn ) and (y1 , . . . , yn ). It is a sim-         tally in the form of a string of 0 s and 1 s, such as
ple matter to generalize the formula just given when                          000111010010. The Hamming distance between
n = 2 and define the distance between them to be
                                                                             two such strings is defined to be the number of
       (y1 − x1 )2 + (y2 − x2 )2 + · · · + (yn − xn )2 .                      places where the strings are different. For exam-
Of course, the fact that the formula can be easily gen-                       ple, the Hamming distance between the strings
eralized is not in itself a guarantee that the resulting                      00110100 and 00100101 is 2, since the strings dif-
notion is a sensible definition of distance. And this                          fer in the fourth and eighth places only. This idea
raises the question of what properties we would like                          of distance also satisfies properties (P1)–(P3).
a definition to have for it to count as sensible. A metric               (iii) If you are driving from one town to another, then
space is an abstract notion that results from thinking                        the distance you care about is not the distance as
about this question.                                                          the crow flies but the length of the shortest route
  Let X be a set of “points.” Suppose that, given any two                     along the network of available roads. Similarly, if
of these points, x and y say, we have a way of assigning                      you wish to travel from London to Sydney, then
a real number d(x, y) that we wish to regard as the                           what matters is the length of the shortest path
distance between them. The following three properties                         (known as a geodesic) along the Earth’s surface,
are ones that it would be highly desirable for this idea                      rather than the “actual” distance through the Earth
of distance to have.                                                          itself. Many useful metrics come from this gen-
                                                                              eral idea of a shortest route, which guarantees that
(P1) d(x, y) ⩾ 0 with equality if and only if x = y.                          property (P3) will hold.
(P2) d(x, y) = d(y, x) for any two points x and y.                      (iv) An important feature of Euclidean distance is
(P3) d(x, y) + d(y, z) ⩾ d(x, z) for any three points x,                      its rotational symmetry: in other words, rotating
     y, and z.                                                                the plane, or space, does not alter the Euclid-
The first of these properties says that the distance                           ean distances between points. There are other
between two points is always positive, except when the                        metrics that also have a great deal of symme-
two points are the same, when it is zero. The second                          try, and these have great geometrical significance.
says that distance is a symmetric notion: the distance                        In particular, the discovery of the hyperbolic
from x to y is the same as the distance from y to x.                          metric [I.3 §§6.6, 6.10] in the early nineteenth
The third is called the triangle inequality: if you imagine                   century demonstrated that the parallel postulate
x, y, and z as the vertices of a triangle, it says that the                   could not be proved using Euclid’s other axioms.
length of any side never exceeds the sum of the lengths                       This resolved a question that had been open
of the other two sides.                                                       for thousands of years. See riemannian metrics
   A function d defined on pairs of points (x, y) from                         [I.3 §6.10](/part-01/fundamental-definitions).
a set X is called a metric if it has properties (P1)–(P3)
above. In that case, X and d together form a metric
space. This abstraction of the usual notion of distance                 III.57   Models of Set Theory
is very useful, and there are many important examples
                                                                        A model of set theory is, roughly speaking, a structure
of metrics that are not necessarily derived from the
                                                                        in which the usual axioms of set theory [IV.22 §3.1](/part-04/set-theory)
Pythagorean theorem. Here are a few examples.
                                                                        (that is, the axioms of ZF or ZFC) hold. To explain what
  (i) Let X be n-dimensional space, that is, the set Rn                 this means, let us think first about groups. The axioms
      of all sequences (x1 , . . . , xn ) of n real numbers. It         of group theory mention certain operations (such as

