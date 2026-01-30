# The P versus NP Problem

V.24.   The P versus N P Problem

symmetric if the central symmetry at every point is a
local isometry. The central symmetry at a point m is
defined formally as multiplication by −1 in the tangent
space to m: one can picture it as taking a very small
neighborhood of m and “reflecting through m.” It turns
out that every locally symmetric space is a quotient of
a symmetric space: that is, a space such that the central    have had a long and interesting legacy in the study of
symmetry at every point is a global isometry. Clearly,
symmetric spaces have very large isometry groups. The
work of cartan [VI.69](/part-06/lie-joseph-cartan-18691951) shows that the resulting isom-
etry groups are exactly the semisimple lie groups
[III.48 §1](/part-03/lie-theory). We will not say precisely what these are, but   Furstenberg, H. 1971. Boundaries of Lie groups and dis-
they include the classical matrix groups such as SLn (R),
SLn (C), and Spn (R). Other examples, which can also be
realized as matrix groups, include the isometry groups
of complex and quaternionic hyperbolic spaces.
   In general, given a Lie group G and a discrete sub-
group Γ , we say that Γ is a cocompact lattice if there
is a compact fundamental domain for Γ in G. Cartan’s
theorem has the consequence that any compact locally
symmetric space is a quotient Γ \G/K, where G is the
isometry group of the universal cover and K is the (nec-
essarily compact) set of isometries that fix a specified
point. Mostow’s theorem says the same here as it said
for Hn /Γ : given such a manifold, there is only one way
to realize it as Γ \G/K. Or, equivalently, any homeomor-
phism between two such manifolds is always homo-
topic to an isometry unless the relevant locally sym-
metric space is a product of a flat torus or a hyperbolic
surface with some other locally symmetric manifold.
   One might well ask how Mostow discovered such
a phenomenon. His work certainly did not occur in
a vacuum. In fact, earlier work of Calabi, Selberg,
Vesentini, and weil [VI.93](/part-06/andr-weil-19061998) had already shown that the
moduli spaces Mostow was studying were discrete: in
other words, unlike flat tori or two-dimensional hyper-
bolic manifolds, higher-dimensional locally symmet-
ric spaces could admit only a discrete set of locally
symmetric metrics. Mostow has said explicitly that he
was motivated by the desire to find a more geometric
understanding of this fact.
   Another point worth making is that Mostow’s proof
is at least as surprising as his theorem. At the time,
the study of locally symmetric spaces, or equivalently
of semisimple Lie groups and their lattices, was domi-
nated by two sets of techniques: one set that was purely     to check the m  2 pairs of those vertices to make sure
algebraic and another that used classical methods in
differential geometry. Mostow’s original proof (which
was only for Hn ) uses instead the theory of quasi-
conformal mappings and some ideas from dynamics.

713
Raghunathan, another leading figure in the field, has
said that when he first read Mostow’s paper, he thought
it must be by a different man named Mostow. Simi-
lar uses of surprising dynamical and analytical ideas
to study the same objects occurred almost simultane-
ously in work of Furstenberg and Margulis. These ideas
locally symmetric spaces, semisimple Lie groups, and
related objects.
Further Reading
crete subgroups. In Actes du Congrès International des
Mathématiciens, Nice, 1970, volume 2, pp. 301–6. Paris:
Gauthier-Villars.
Margulis, G. A. 1977. Discrete groups of motions of man-
ifolds of non-positive curvature. In Proceedings of the
International Congress of Mathematicians, Vancouver,
1974, pp. 33–45. AMS Translations, volume 109. Provi-
dence, RI: American Mathematical Society.
Mostow, G. D. 1973. Strong Rigidity of Locally Symmet-
ric Spaces. Annals of Mathematics Studies, number 78.
Princeton, NJ: Princeton University Press.
Thurston, W. P. 1997. Three-Dimensional Geometry and
Topology, edited by S. Levy, volume 1. Princeton Math-
ematical Series, number 35. Princeton, NJ: Princeton Uni-
ver sity Press.
V.24     The P versus N P Problem
The P versus N P problem is widely considered to be
the most important unsolved problem in theoretical
computer science, and one of the most important in all
of mathematics. P and N P are two of the most basic
computational complexity classes [III.10](/part-03/computational-complexity-classes): P is the
class of all computational tasks that can be performed
in a time that is polynomial in the length of the input,
and N P is the class of all computational tasks where
a correct answer can be verified in a time that is poly-
nomial in the length of the input. An example of the
former is multiplying two n-digit integers (which, even
if you use long multiplication, takes roughly n2 arith-
met ical operations). An example of the latter is search-
ing in a graph [III.34] with n vertices for a set of m
vertices, any two of which are joined by an edge: if you
are presentedwith
 m such vertices, then you just have
that each pair is indeed an edge of the graph.
It appears to be much harder to find m vertices that
are all joined than to check that a given m vertices are
all joined. This suggests that problems in N P are in