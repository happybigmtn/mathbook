# The Zermelo–Fraenkel Axioms

314

to encode it pixel by pixel: 0 for black and 1 for white.
However, for certain pictures this would obviously be
extremely inefficient. For instance, if the picture is a
square, the left half of which is entirely white and the     tion for mathematics as a whole. Of course, for this to
right half of which is entirely black, then it is clearly    be the case it is vital that the operations allowed by the
much better to send a set of instructions for recon-
struc ting the picture than a list of every single pixel.     usual mathematical constructions. Some of the axioms
Further more, the precise details of the pixels usually do    are rather subtle as a result.
not matter: if you want a patch of gray, then it is enough
to put in black and white pixels in the right proportion     just what we need to “build up” the world of all sets,
and make sure that they are evenly distributed.
   However, finding a good way of encoding pictures is
difficult, and an important area of research in engineer-
ing. A picture can be thought of as a function from
a rectangle to R. The set of all such functions forms
a vector space [I.3 §2.3](/part-01/fundamental-definitions), and a natural way to try to
come up with a good encoding is to find a good basis
for this space. Here “good” means that the functions
one is interested in (that is, ones that correspond to
the kinds of pictorial representations one might wish to     power set of the empty set, the power set of the power
send) are determined by just a few of their coefficients,
apart from minor variations that are not detectable by
the human eye.
   Wavelets are a particularly good basis for many pur-
poses. In some ways they are like fourier transforms
[III.27](/part-03/the-fourier-transform), but they are much better suited to encoding
details such as sharp boundaries, and patterns that are
“localized,” rather than spread through out the picture.
For more details, see wavelets and applications
[VII.3](/part-07/wavelets-and-applications).
III.99   The Zermelo–Fraenkel Axioms

The Zermelo–Fraenkel, or ZF, axioms are a collection of
axioms that provide a foundation for set theory. They
may be viewed in two ways. The first is as a list of the
“allowed operations” on sets. For example, there is an
axiom that states that, given sets x and y, there exists
a “pair set,” whose members are precisely x and y.

III. Mathematical Concepts
One of the reasons the ZF axioms are important is
that it is possible to reduce all of mathematics to set
theory, so the ZF axioms can be regarded as a founda-
ZF axioms do indeed allow one to perform all of the
The other way to view the ZF axioms is as giving us
starting with just the empty set. One can look at the
various ZF axioms and see that each one plays an essen-
tial role as we create the set-theoretic universe. Equiv-
alently, they are “closure rules” that any universe of
sets, or more precisely any model of set theory, should
obey. So, for example, there is an axiom that says that
every set has a power set (the set of all its subsets), and
this axiom allows us to build up a huge collection of
sets starting with just the empty set: one obtains the
set of the empty set, and so on. Indeed, the universe
of all sets could (in a sense) be described as the clo-
sure of the empty set under all the allowable operations
of ZF.
The ZF axioms are written in the language of first-
order logic [IV.23 §1](/part-04/logic-and-model-theory). So each axiom can mention
variables (which are interpreted as ranging over all
sets), as well as the usual logical operations, and
also one “primitive relation,” namely membership. For
example, the pair-set axiom above would be formally
written as
(∀x)(∀y)(∃z)(∀t)(t ∈ z ⇐⇒ t = x or t = y).
By convention, the ZF axioms do not include the
axiom of choice [III.1](/part-03/axiom-of-choice); when one does include the
axiom of choice, the axioms are usually called the “ZFC
axioms.”
For a more detailed discussion of the ZF axioms see
set theory [IV.22 §3.1](/part-04/set-theory).