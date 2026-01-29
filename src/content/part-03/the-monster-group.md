# The Monster Group

252                                                                                       III. Mathematical Concepts

for every a, b, c, d ∈ Z such that ad − bc = 1. (The             Topological equivalence is rather “crude,” in the
reason we exclude the case ad − bc = −1 is that (aτ +         sense that it is relatively easy for two surfaces to be
b)/(cτ +d) would not be in the upper half-plane in this       equivalent. As a result, the equivalence classes are
case.) This is the equation at the heart of the definition     parametrized by a fairly simple set: the set of all posi-
of a modular form.                                            tive integers. But there are many geometrical contexts
  Over the years, mathematicians have isolated other          in which finer notions of equivalence are important.
desirable properties that F should have in order to give      For example, in several contexts one wishes to regard
a useful theory. Nowadays, modular forms are required         two two-dimensional lattices [III.59](/part-03/modular-forms) as equivalent if
to obey the additional properties that F is holomor-          one is a rotation and enlargement of the other. Equiv-
phic [I.3 §5.6](/part-01/fundamental-definitions) and that F (x + iy) does not grow too         alence relations such as this one often lead to param-
quickly as y goes to +\infty; these assumptions imply that         eter sets that themselves have an interesting geomet-
the vector space of weight k modular forms is finite           rical structure. Such sets are called moduli spaces. For
dimensional. The Eisenstein series above do have these        details, see [IV.8](/part-04/moduli-spaces) and also [V.23](/part-05/mostows-strong-rigidity-theorem).
additional properties, and are the first basic examples
of modular forms.                                             III.61   The Monster Group

              5   Why Modular Forms?                          the classification of finite simple groups [V.7](/part-05/the-classication-of-finite-simple-groups) is
                                                              one of the landmarks of twentieth-century mathemat-
Modular forms have connections with arithmetic, ge-           ics. As its name suggests, it gives a complete descrip-
ometry, representation theory, and even physics. Mod-         tion of all finite simple groups, which can be thought
ular forms also played a key role in the Taylor–Wiles         of as the building blocks for all finite groups. It states
proof of fermat’s last theorem [V.10](/part-05/fermats-last-theorem). Why is this?           that each finite simple group belongs to one of eighteen
One general reason is that there are links between mod-       infinite families, or else is one of twenty-six “sporadic”
ular forms and other mathematical objects: here we            examples. The Monster group is the largest of these
briefly explain one of the links.                              sporadic groups, with 808 017 424 794 512 875 886 459
   Lattices in the complex plane are related to elliptic      904 961 710 757 005 754 368 000 000 000 elements.
curves [III.21](/part-03/elliptic-curves): the quotient of the complex numbers             As well as having a starring role in the classification
by a lattice is an elliptic curve, and every elliptic curve   theorem, the Monster group has remarkable and deep
arises in this way. Hence to study elliptic curves, or fam-   connections with other areas of mathematics. Most
ilies of elliptic curves, one can instead study families      notably, the smallest dimension of a faithful represen-
of lattices. One way of studying an object is by study-       tation [IV.9](/part-04/representation-theory) of the Monster group is 196 883, while
ing the functions on that object, and a modular form          the coefficient of e2π iz in the important and famous
is precisely that: a function on the collection of all lat-   “elliptic modular function” (see algebraic numbers
tices. And indeed, automorphic forms, which are gen-          [IV.1 §8](/part-04/number-theory)) is 196 884. Far from being an amusing coin-
eralizations of modular forms, have been used to great        cidence, the fact that these two numbers differ by just
effect in studying a wide variety of families of algebraic     1 is a manifestation of a very deep connection between
objects in this way.                                          the two. See vertex operator algebras [IV.17 §4.2](/part-04/vertex-operator-algebras)
                                                              for further details.
III.60   Moduli Spaces
                                                              The Navier–Stokes Equation
An important general problem in mathematics is clas-             See the euler and navier–stokes
sification (see the general goals of mathematical                     equations [III.23](/part-03/the-euler-and-navierstokes-equations)
research [I.4 §2](/part-01/general-goals)). Often, one has a set of mathematical
structures and a notion of equivalence, and one would
like to describe the equivalence classes [I.2 §2.3](/part-01/language-and-grammar).          III.62   Normed Spaces and Banach
For example, two (compact, orientable) surfaces are                    Spaces
often regarded as equivalent if each can be continu-
ously deformed into the other. Each equivalence class         It is often useful to approximate a function f by a
is then fully described by the genus [III.33](/part-03/genus), or “number     polynomial P . For example, if you are designing a
of holes,” in the surface.                                    pocket calculator and want it to calculate logarithms

