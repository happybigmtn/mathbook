# Fuchsian Groups

$208$

classical and quantum physics, which can be studied rigorously using the methods of geometric quantization and microlocal analysis. III . $28$ Fuchsian Groups

Jeremy Gray

One of the most basic objects in geometry is the torus: a surface that has the shape of the surface of a bagel. If you want to construct one, you can do so by taking a square and gluing opposite edges together. When you glue the top and bottom edges together you have a cylinder, and when you glue the other two edges together, which have now become circles, you obtain your torus. A more mathematical way of making a torus is as follows.
We start with the usual (x , y) coordinate plane and the square in it with vertices at (0, 0) , (1, 0) , (1, 1), and ( $0$ , $1$ ), which consists of the points whose coordinates satisfy $0 \le x \le 1$ , $0 \le y \le 1$ . This square can be moved around horizontally and vertically. If we shift it m units horizontally and n units vertically, where $m$ and $n$ are integers, we get the square that consists of the points whose coordinates satisfy $m \le x \le m + 1$ , $n \le y \le n + 1$ .
As $m$ and $n$ run through all the integers, we see that the copies of the square cover the whole plane, with four squares coming together at each point with integer coordinates. The plane is said to be tiled or tessellated (from the Latin word for a marble chip in a mosaic), and it is easy to see that you can color the squares alternately black and white and get an infinite checkerboard pattern. To make the torus we “identify” points. We say that the points (x , y) and (x , y) correspond to the same point in a certain new figure if x  -  $x$ and $y$  -  y are both integers.
To see what the new figure looks like, we observe that any point in the plane corresponds to a point inside, or on the edge of, our original square. More over, the point (x , y) corresponds to exactly one point inside the square provided that neither x nor y is an integer. So our new space looks a lot like our original square. But what about the points $(\frac{1}{4}$ , 0)$and$(. rac{1}{4}, 1) ? They correspond to the same point in our new space, as do any corresponding pairs of points on the upper and lower edges of our square. So those edges are identified in our new space.
By a similar argument, so too are the left and right edges. The result is that, after points are identified according to our rule, we obtain the torus. If we make the torus in this way, we can draw small figures on it just by drawing them in the original square;

III. Mathematical Concepts

lengths in the square will then correspond exactly to lengths on the torus. This is how old-fashioned printing on a drum works: an inked figure on a cylinder is rolled over the paper to make exact copies of the figure. Thus, as far as small figures are concerned, the geometry of the torus is exactly like Euclidean geometry. In mathematical language we say that the geometry on the torus is induced from the geometry on the plane, and therefore that it is locally Euclidean.
Globally, of course, it is different, because one can draw curves on the torus that cannot be shrunk to a point, where as one cannot do so on the plane. Notice, too, that we have brought in a group to do the bulk of the work for us. In this case the group is the set of all pairs (m , n) where $m$ and $n$ are integers, with (m , n)  +  (m , n) defined to be (m  +  m , n  +  n) . The torus and the sphere are but two of an infinite class of surfaces that are closed (they have no boundary) and compact (they do not in any sense go off to infinity).
Other examples include the two-holed torus, and more generally the n-holed torus (the surfaces of genus $2$ , $3$ , $4$ , . . .). To create these in a similar way, we need Fuchsian groups. It is natural to expect that we can get other surfaces by using polygons with more than four sides. It turns out that if you use a polygon with eight sides, for example a regular octagon, and glue sides $1$ and $3$ together, $2$ and $4$ together, $5$ and $7$ together, and $6$ and $8$ together, you get the two-holed torus. How can we use a group to achieve the same result, as we did with the torus?
For that we need a way of fitting lots of copies of the octagon together so that they overlap only along edges. The problem is that one cannot tile the plane with octagons: the angles of an octagon are $135$ ◦ , and that is far too big because we need eight octagons to fit together at each vertex. The way forward here is to use hyperbolic geometry [I.3](/part-01/fundamental-definitions) instead of Euclidean geometry. But we can also work with our bare hands. Take the unit disk in the complex plane, $D =$ {z : $|z| \le 1$ .
Take the group of what are called Möbius transformations, which are maps of the form $z\to (az + b)/(cz + d)$ . It is a routine calculation to show that these maps send circles and straight lines to circles and straight lines (they mix the two types up, some times sending a circle to a straight line and vice versa) and that they map angles to equal angles, just like the more familiar Euclidean rotations. If we now select just those Möbius transformations that map D to itself, then we have a group that

III.28.   Fuchsian Groups

we shall call G. Indeed, we very nearly have a Fuchsian
group.
   We need to find a shape that will play the role that
the square played in the Euclidean plane. Our group
G has the property that it maps diameters of D and
arcs of circles perpendicular to the boundary of D to
diameters of D and arcs of circles perpendicular to
the boundary of D, so we let these play the role of
straight lines and use eight of them as the edges of
a (non-Euclidean) octagon. We find that we can do this
in many ways, so we pick one with the highest degree
of symmetry to make things easy for ourselves. That
is, we draw a “regular octagon” centered on the center
of the disk D. This still leaves us with some choice: the     a 4 n-sided polygon (its sides are parts of geodesics)
bigger the octagon, the smaller its angles. So we draw
the octagon with angles of π /4, which allows eight of
them to cluster at each vertex, and then we can fit them
together as we want. If we identify points that lie in cor-   face is once again obtained, but if the polygons are
responding places in different copies of the polygon,
then the resulting space is a riemann surface [III.79](/part-03/riemann-surfaces)
of genus 2.
   A Fuchsian group is a subgroup of the group G
(of Möbius transformations that map D to itself) that
moves some polygon around “en bloc” and there by tiles
the disk. Just as with the torus, we have a notion of
equivalent points (ones that are in the corresponding
place in different tiles) and when we identify equiva-
lent points we get the space that we would also have
obtained by identifying the edges of the polygon in
pairs, which is the space we wanted.
   All this can be described in the language of hyper-
bolic geometry. The disk model is defined by means of
a riemannian metric [I.3 §6.10](/part-01/fundamental-definitions) on D, the differential
of which is given by
The elements of G move figures around in D in a way
that preserves hyperbolic distances. It follows that the
geometry on the surface that we obtain by identifying
points in the manner just described is locally hyper-
bolic, just as that of the torus was locally Euclidean.
   It turns out that if we carry out the above con struc-
tion starting with a regular 4 n-sided figure (with n > 2),     vant paper by Schwarz, but by then Fuchs had given his
then we obtain a Riemann surface of genus n. But math-
ematicians can do much more. If you go back to the
plane and start not with a square but with a rectan-
gle, or still more generally a parallelogram, it is rea-
son ably easy to see that the same construction can be
carried out. Indeed, if you just watch the original con-
struc tion from an appropriate angle, instead of from

209
vertically above the plane, then the square will turn into
any parallelogram you choose (possibly enlarged or
contracted). When you use a parallelogram, you again
obtain a torus, but it differs from the original one in the
same way that the square and the parallelogram differ:
angles are distorted. It is a not entirely trivial exercise
to show that the only angle-preserving maps from one
parallelogram to another are similarities (uniform scal-
ing by the same amount in two, and therefore all, direc-
tions). So the resulting tori have a different sense of
what angles are: that is, they have different conformal
structures.
The same happens in the hyperbolic disk. If one picks
whose edges come in pairs of equal length, and one
finds a group that moves this polygon around en bloc
and matches the edges exactly, then a Riemann sur-
not conformally equivalent, then neither are the cor-
responding surfaces; they have the same genus, n, but
different conformal structures. We can even go further
and allow some of the vertices of the polygon to lie
on the boundary of the disk, in which case the corre-
sponding sides of the polygon are infinitely long with
respect to the hyperbolic metric. The space we then
construct is a “punctured” Riemann surface, and again
mathematicians can vary its conformal structure.
The fundamental importance of Fuchsian groups
derives from the uniformization theorem, which says
that all but the simplest Riemann surfaces arise from
some Fuchsian group in the fashion described above.
This includes every Riemann surface of genus greater
than 1, and those of genus 1 with at least one puncture,
with any possible conformal structure.
|dz|                               The name Fuchsian group was given to these groups
ds =            .
1 − |z|2                         by poincaré [VI.61](/part-06/jules-henri-poincar-18541912) in 1881, who discovered them in
the course of work on the hypergeometric equation and
related differential equations, which had been inspired
by the work of the German mathematician Lazarus
Fuchs. klein [VI.57] protested to him that a better pro-
cedure might have been to name them after Schwarz,
and Poincaré was willing to agree once he read the rele-
approval to the name. When Klein protested too much
(in Poincaré’s view), Poincaré publicly gave the name
Kleinian groups to the analogous class of groups that
arise in the study of conformal transformations of the
three-dimensional unit ball. The names have stuck ever
since, but the study of Kleinian groups is much more
difficult and neither Poincaré nor Klein could do much