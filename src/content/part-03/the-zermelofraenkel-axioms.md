# The Zermelo–Fraenkel Axioms

314                                                                                       III. Mathematical Concepts

to encode it pixel by pixel: 0 for black and 1 for white.       One of the reasons the ZF axioms are important is
However, for certain pictures this would obviously be        that it is possible to reduce all of mathematics to set
extremely inefficient. For instance, if the picture is a       theory, so the ZF axioms can be regarded as a founda-
square, the left half of which is entirely white and the     tion for mathematics as a whole. Of course, for this to
right half of which is entirely black, then it is clearly    be the case it is vital that the operations allowed by the
much better to send a set of instructions for recon-         ZF axioms do indeed allow one to perform all of the
structing the picture than a list of every single pixel.     usual mathematical constructions. Some of the axioms
Further more, the precise details of the pixels usually do    are rather subtle as a result.
not matter: if you want a patch of gray, then it is enough      The other way to view the ZF axioms is as giving us
to put in black and white pixels in the right proportion     just what we need to “build up” the world of all sets,
and make sure that they are evenly distributed.              starting with just the empty set. One can look at the
   However, finding a good way of encoding pictures is        various ZF axioms and see that each one plays an essen-
difficult, and an important area of research in engineer-      tial role as we create the set-theoretic universe. Equiv-
ing. A picture can be thought of as a function from          alently, they are “closure rules” that any universe of
a rectangle to R. The set of all such functions forms        sets, or more precisely any model of set theory, should
a vector space [I.3 §2.3](/part-01/fundamental-definitions), and a natural way to try to       obey. So, for example, there is an axiom that says that
come up with a good encoding is to find a good basis          every set has a power set (the set of all its subsets), and
for this space. Here “good” means that the functions         this axiom allows us to build up a huge collection of
one is interested in (that is, ones that correspond to       sets starting with just the empty set: one obtains the
the kinds of pictorial representations one might wish to     power set of the empty set, the power set of the power
send) are determined by just a few of their coefficients,      set of the empty set, and so on. Indeed, the universe
apart from minor variations that are not detectable by       of all sets could (in a sense) be described as the clo-
the human eye.                                               sure of the empty set under all the allowable operations
   Wavelets are a particularly good basis for many pur-      of ZF.
poses. In some ways they are like fourier transforms            The ZF axioms are written in the language of first-
[III.27](/part-03/the-fourier-transform), but they are much better suited to encoding        order logic [IV.23 §1](/part-04/logic-and-model-theory). So each axiom can mention
details such as sharp boundaries, and patterns that are      variables (which are interpreted as ranging over all
“localized,” rather than spread through out the picture.      sets), as well as the usual logical operations, and
For more details, see wavelets and applications              also one “primitive relation,” namely membership. For
[VII.3](/part-07/wavelets-and-applications).                                                     example, the pair-set axiom above would be formally
                                                             written as
III.99   The Zermelo–Fraenkel Axioms                            (∀x)(∀y)(∃z)(∀t)(t ∈ z ⇐⇒ t = x or t = y).

The Zermelo–Fraenkel, or ZF, axioms are a collection of        By convention, the ZF axioms do not include the
axioms that provide a foundation for set theory. They        axiom of choice [III.1](/part-03/axiom-of-choice); when one does include the
may be viewed in two ways. The first is as a list of the      axiom of choice, the axioms are usually called the “ZFC
“allowed operations” on sets. For example, there is an       axioms.”
axiom that states that, given sets x and y, there exists       For a more detailed discussion of the ZF axioms see
a “pair set,” whose members are precisely x and y.           set theory [IV.22 §3.1](/part-04/set-theory).

