# Schemes

III.83. The Schrödinger Equation                                                                                 285

   One of the things we like to do to integers is fac-
torize them, and we can try to do the same in rings          III.82 Schemes
as well. However, it turns out that, while it is usually              Jordan S. Ellenberg
possible to factorize an element of a ring into “irre-
ducible” ones that cannot be factorized further (like        One frequently finds in the history of mathematics
the primes in Z), in many cases the factorization is not     that a definition thought to be completely general
unique. At first, this might be rather unexpected, and        was in fact too restrictive to treat certain problems
indeed it was a stumbling block for many early workers       of interest. The notion of “number,” for instance, has
(in the eighteenth and nineteenth centuries). Here is an     been expanded again and again—most notably to incor-
                       √
example: in the ring Z[ −3], which consists of all com-      porate irrationalities and complex numbers, the for-
                     √
plex numbers a + b −3, where a and b are integers,           mer arising from problems in geometry and the lat-
the number 4 may be factorized as 2 \times 2 and also as          ter needed in order to describe solutions to arbitrary
      √(1 + −3) × (1 − −3).                                         algebraic equations. In a similar way, algebraic geom-
                                                             etry, which was once understood as the study of alge-
                     3   Modules                             braic varieties, or solution sets of algebraic equations
                                                             in some finite-dimensional space, has grown to encom-
Modules are to rings as vector spaces are to fields. In       pass more general objects known as “schemes.” As a
other words, they are algebraic structures where the         very meager example one might consider the two equa-
basic operations are addition and scalar multiplication,     tions x + y = 0 and (x + y)2 = 0. The two equations
but now the scalars are allowed to come from a ring          have the same set of solutions in the plane, so they
rather than a field. For an example of a module over          describe the same variety; but the schemes attached to
a ring that is not a field, take any Abelian group G.         the two objects are completely different. The reformu-
This can be turned into a module over Z, with addi-          lation of algebraic geometry in the language of schemes
tion given by the group operation and scalar multiplica-     was a tremendous project spearheaded by Alexander
                                                             Grothendieck in the 1960 s. As the above example sug-
tion defined in the obvious way: for instance, 3 g means
                                                             gests, the scheme-theoretic viewpoint tends to empha-
g + g + g, and −2 g means the inverse of g + g.
                                                             size the algebraic aspects of the subject (equations)
   The simplicity of this definition masks the fact that
                                                             rather than the traditionally geometric ones (solution
the structure of modules is in general far more subtle
                                                             sets of equations). This viewpoint has made a reality
than that of vector spaces. For example, we can define
                                                             of the long-hoped-for unification of algebraic num-
a basis of a module to be a linearly independent set of
                                                             ber theory [IV.1](/part-04/number-theory) and algebraic geometry, and, indeed,
elements that spans the module. However, many use-
                                                             much recent progress in number theory would have
ful facts about bases in vector spaces do not hold for
                                                             been impossible without the geometric insight supplied
modules. For instance, in Z, which we may consider as        by the theory of schemes.
a module over itself, the set {2, 3} spans the module           Even schemes are not enough to handle all the
but does not contain a basis, and similarly the set {2} is   problems of current interest, and still more general
linearly independent but cannot be extended to a basis.      notions (stacks, “noncommutative varieties,” derived
In fact, modules may be very far from having a basis:        categories of sheaves, etc.) are brought to bear when
for example, if we consider the integers modulo n as a       necessary. These can appear exotic, but to our suc-
module over Z, then even a single element x fails to be      cessors they will no doubt be second nature, just as
linearly independent, since nx = 0.                          schemes are to us. For more on algebraic geometry in
   The following example of a module is an important         general, see algebraic geometry [IV.4](/part-04/algebra). Schemes are
one. Let V be a complex vector space and let α be a lin-     discussed at greater length in arithmetic geometry
ear map from V to V . This can be made into a module         [IV.5](/part-04/arithmetic-geometry).
over the ring C[X]: if v ∈ V and P is a complex polyno-
mial, then P v is defined to be P (α)v. (For instance, if P   III.83 The Schrödinger Equation
is the polynomial x 2 + 1, then P v = α2 v + v.) Applying             Terence Tao
general structural results about modules to this exam-
ple, one obtains a proof of the jordan normal form           In mathematical physics, the Schrödinger equation
theorem [III.43](/part-03/jordan-normal-form).                                            (and the closely related Heisenberg equation) are the

