# The P versus NP Problem

V.24.   The P versus N P Problem                                                                                   713

symmetric if the central symmetry at every point is a        Raghunathan, another leading figure in the field, has
local isometry. The central symmetry at a point m is         said that when he first read Mostow’s paper, he thought
defined formally as multiplication by −1 in the tangent       it must be by a different man named Mostow. Simi-
space to m: one can picture it as taking a very small        lar uses of surprising dynamical and analytical ideas
neighborhood of m and “reflecting through m.” It turns        to study the same objects occurred almost simultane-
out that every locally symmetric space is a quotient of      ously in work of Furstenberg and Margulis. These ideas
a symmetric space: that is, a space such that the central    have had a long and interesting legacy in the study of
symmetry at every point is a global isometry. Clearly,       locally symmetric spaces, semisimple Lie groups, and
symmetric spaces have very large isometry groups. The        related objects.
work of cartan [VI.69](/part-06/lie-joseph-cartan-18691951) shows that the resulting isom-
etry groups are exactly the semisimple lie groups            Further Reading
[III.48 §1](/part-03/lie-theory). We will not say precisely what these are, but   Furstenberg, H. 1971. Boundaries of Lie groups and dis-
they include the classical matrix groups such as SLn (R),      crete subgroups. In Actes du Congrès International des
SLn (C), and Spn (R). Other examples, which can also be        Mathématiciens, Nice, 1970, volume 2, pp. 301–6. Paris:
realized as matrix groups, include the isometry groups         Gauthier-Villars.
of complex and quaternionic hyperbolic spaces.               Margulis, G. A. 1977. Discrete groups of motions of man-
   In general, given a Lie group G and a discrete sub-         ifolds of non-positive curvature. In Proceedings of the
                                                               International Congress of Mathematicians, Vancouver,
group Γ , we say that Γ is a cocompact lattice if there
                                                               1974, pp. 33–45. AMS Translations, volume 109. Provi-
is a compact fundamental domain for Γ in G. Cartan’s
                                                               dence, RI: American Mathematical Society.
theorem has the consequence that any compact locally         Mostow, G. D. 1973. Strong Rigidity of Locally Symmet-
symmetric space is a quotient Γ \G/K, where G is the           ric Spaces. Annals of Mathematics Studies, number 78.
isometry group of the universal cover and K is the (nec-       Princeton, NJ: Princeton University Press.
essarily compact) set of isometries that fix a specified       Thurston, W. P. 1997. Three-Dimensional Geometry and
point. Mostow’s theorem says the same here as it said          Topology, edited by S. Levy, volume 1. Princeton Math-
for Hn /Γ : given such a manifold, there is only one way       ematical Series, number 35. Princeton, NJ: Princeton Uni-
                                                               versity Press.
to realize it as Γ \G/K. Or, equivalently, any homeomor-
phism between two such manifolds is always homo-
topic to an isometry unless the relevant locally sym-        V.24     The P versus N P Problem
metric space is a product of a flat torus or a hyperbolic
surface with some other locally symmetric manifold.          The P versus N P problem is widely considered to be
   One might well ask how Mostow discovered such             the most important unsolved problem in theoretical
a phenomenon. His work certainly did not occur in            computer science, and one of the most important in all
a vacuum. In fact, earlier work of Calabi, Selberg,          of mathematics. P and N P are two of the most basic
Vesentini, and weil [VI.93](/part-06/andr-weil-19061998) had already shown that the       computational complexity classes [III.10](/part-03/computational-complexity-classes): P is the
moduli spaces Mostow was studying were discrete: in          class of all computational tasks that can be performed
other words, unlike flat tori or two-dimensional hyper-       in a time that is polynomial in the length of the input,
bolic manifolds, higher-dimensional locally symmet-          and N P is the class of all computational tasks where
ric spaces could admit only a discrete set of locally        a correct answer can be verified in a time that is poly-
symmetric metrics. Mostow has said explicitly that he        nomial in the length of the input. An example of the
was motivated by the desire to find a more geometric          former is multiplying two n-digit integers (which, even
understanding of this fact.                                  if you use long multiplication, takes roughly n2 arith-
   Another point worth making is that Mostow’s proof         metical operations). An example of the latter is search-
is at least as surprising as his theorem. At the time,       ing in a graph [III.34] with n vertices for a set of m
the study of locally symmetric spaces, or equivalently       vertices, any two of which are joined by an edge: if you
of semisimple Lie groups and their lattices, was domi-       are presentedwith
                                                                               m such vertices, then you just have
nated by two sets of techniques: one set that was purely     to check the m  2 pairs of those vertices to make sure
algebraic and another that used classical methods in         that each pair is indeed an edge of the graph.
differential geometry. Mostow’s original proof (which            It appears to be much harder to find m vertices that
was only for Hn ) uses instead the theory of quasi-          are all joined than to check that a given m vertices are
conformal mappings and some ideas from dynamics.             all joined. This suggests that problems in N P are in