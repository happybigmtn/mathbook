# The Insolubility of the Quintic

708                                                                                         V. Theorems and Problems

(S, S). If P judges that S does not halt when presented        solution, see geometric and combinatorial group
with itself as input, we then cause Q to halt. But if P        theory [IV.10](/part-04/geometric-and-combinatorial-group-theory).
judges that S does halt when presented with itself as             Finally, what about Hilbert’s tenth problem? This has
input, then we artificially send Q into an endless loop,        become another famous and very hard theorem, due to
so that it does not halt. (If S is not a valid program in L,   Yuri Matiyasevitch in 1970, who built on work of Mar-
then let us say that Q halts—it does not really matter         tin Davis, Hilary Putnam, and Julia Robinson. Matiya-
though.) To summarize, if S halts for input S, then Q          sevitch managed to produce a system of ten equations,
does not halt for S, and if S does not halt for S, then Q      involving two parameters m and n, that could be solved
does halt for S.                                               in integers if and only if m was the 2 nth Fibonacci
   But now let us suppose that S is the program for Q          number. From Robinson’s work it followed that, given
itself. Does Q halt with input S? If it does, then S halts     any algorithm with integer inputs, there was a sys-
with input S, so Q does not halt. If it does not, then         tem of Diophantine equations, involving a parameter
S does not halt with input S, so Q does halt. This is          q, that could be solved if and only if the algorithm
a contradiction, and therefore the procedure P out of          halted at q. That is, any instance of the halting problem
which Q was built could not have existed.                      can be encoded as a system of Diophantine equations,
   That solves the general version of Hilbert’s prob-          so there is no general algorithm for deciding whether
lem: there is no algorithm that will determine the truth       Diophantine equations can be solved.
or falsity of arbitrary mathematical statements. But             Different people draw different morals from these
it does so by constructing, for any given algorithm,           results. In the opinion of some mathematicians, they
a rather artificial statement. We do not yet have an            show that there will always be a place for human cre-
answer to the question of what happens if we look              ativity in mathematics, however powerful the com-
at more specific and more natural classes of state-             puters of the future might be. Others maintain that
ments, such as that a given Diophantine equation has           although we now know that we cannot systematically
a solution.                                                    solve all problems in mathematics, the effect on most
   Remarkably, however, specific questions of this kind         mathematics is very slight: one should be aware that
can often be shown to be equivalent to the general ques-       certain kinds of problems are sometimes equivalent to
tion, by a technique known as encoding. For example,           the halting problem, and that is it. Still others point
there is no algorithm that will take as its input a set        out that it is often easy to devise an algorithm to solve
of polygonal tiles (suitably represented) and tell you         a problem but much harder to make it efficient. This
whether it is possible to tile the plane using copies of       issue is discussed in great detail in computational
just those tiles. How do we know this? Well, given any         complexity [IV.20](/part-04/computational-complexity).
algorithm, there is a clever way of devising a set of tiles       Turing’s argument for the insolubility of the halt-
(this is the encoding) that will tile the plane if and only    ing problem is closely related to gödel’s theorem
if the algorithm fails to halt. Therefore, if there were an    [V.15](/part-05/gdels-theorem), and both proofs use diagonal arguments, which
algorithm for determining whether the tiles could tile         are discussed in countable and uncountable sets
the plane, then there would be an algorithm for solving        [III.11](/part-03/countable-and-uncountable-sets).
the halting problem—but there is not.
   Another famous example of a more specific problem            V.21 The Insolubility of the Quintic
for which there is no algorithm is the word problem                    Martin W. Liebeck
for groups. Here you are given a set of generators and
relations for a group and asked whether the group is           Every student will be familiar with the formula for the
trivial—that is, whether it contains just the identity.        roots of a quadratic polynomial ax 2 + bx + c, namely
Again, an algorithm that could decide this would give                  √
                                                               (−b ± b2 − 4 ac)/2 a. Perhaps less familiar is the fact
us an algorithm that could solve the halting problem,          that there is also a formula for the roots of a cubic: write
so there cannot be one. The encoding process used to           the cubic as x 3 +ax 2 +bx+c, and make the substitution
prove this is much more difficult than it is for tiling the      y = x + 13 a to rewrite it in the form y 3 + 3 hy + k. The
plane: the insolubility of the word problem for groups         roots of this are then of the form
is a famous theorem proved by Pyotr Novikov in 1952.                2                          2
                                                                     3 1
                                                                                                       
For a much fuller explanation of this problem and its                    (−k +   k 2 + 4 h3 ) + 3 1 (−k − k2 + 4 h3 ).
                                                                       2                         2

V.21.   The Insolubility of the Quintic                                                                               709

                                                                   √
While the quadratic formula was known to the Greeks,            Q( 2), defined above. Less trivially, x 3 − 2 has roots
the cubic formula was not found until the sixteenth             α, αω, αω2 , where α = 21/3 , the real cube root of 2,
century. In the same century a formula for the roots            and ω = e2π i/3 , so its splitting field is Q(α, ω), which
of quartic (degree 4) polynomials was also found.               consists of all complex numbers a1 + a2 α + a3 α2 +
The formulas for quadratics, cubics, and quartics all           a4 ω + a5 αω + a6 α2 ω with ai ∈ Q. (Notice that we
arise by applying a sequence of arithmetic opera-               do not have to include ω2 in such expressions since
tions (addition, subtraction, multiplication, division)         ω3 = 1, so (ω − 1)(ω2 + ω + 1) = ω3 − 1 = 0, which
together with extraction of roots (square roots, cube           implies that ω2 = −ω − 1.)
roots, and so on) to the coefficients of the original poly-          Let E = Q(α1 , . . . , αn ) be the splitting field of our
nomial. Such a formula is called a radical expression for       polynomial f . An automorphism of E is a bijection
the roots.                                                      φ : E → E that preserves addition and multiplication—
   The next step, naturally enough, was the quintic (i.e.,      in other words, φ(a + b) = φ(a) + φ(b) and φ(ab) =
polynomial of degree 5). However, several hundred               φ(a)φ(b) for all a, b ∈ E. Such a function necessarily
years passed without anyone finding a radical formula            also preserves subtraction and division, and fixes every
for the roots of a general quintic polynomial.                  rational number. Denote by Aut(E) the set of all auto-
                                                                                                                   √
   There was a good reason for this. There is no                morphisms of E. For example, when E = Q( 2), any
such formula. Nor is there a formula for polyno-                automorphism φ satisfies
mials of degree greater than 5. This fact was first                                 √\sqrt{2} = φ(2) = φ( 2 2) = φ( 2)φ( 2) = φ( 2)2 ,
established in the early nineteenth century by abel                                √[VI.33](/part-06/niels-henrik-abel-18021829) (who died aged twenty-six), after which galois          and therefore φ( 2) = 2 or − 2. In the first case
                                                                          √[VI.41](/part-06/variste-galois-18111832) (who died aged twenty-one) built an entirely            φ(a + b 2) = a + b 2 for all a, b ∈ Q, while in
                                                                                          √new theory of equations that not only explained the             the second φ(a + b 2) = a − b 2. Both of these
nonexistence of formulas but laid the foundations               are automorphisms of E; call them φ1 , φ2 , so that
for a whole edifice of algebra and number theory                 Aut(E) = {φ1 , φ2 }.
known as Galois theory, a major area of modern-day                 The composition φ ◦ ψ of two automorphisms φ, ψ
research.                                                       of E is again an automorphism, and so is the inverse
   One of the key ideas of Galois was to associate with         function φ−1 , while the identity function ι defined by
any polynomial f = f (x) a group [I.3 §2.1](/part-01/fundamental-definitions) Gal(f ) (the        ι(e) = e for all e ∈ E is also an automorphism. Since
Galois group of f ), which is a finite group that per-           composition of functions is an associative operation,
mutes the roots of f . This group is defined in terms            it follows that Aut(E) is a group under composition.
of certain fields [I.3 §2.2](/part-01/fundamental-definitions), which for these purposes           Define the Galois group Gal(f ) of our polynomial f (x)
can be thought of as subsets F of the complex num-              with splitting field E to be this group Aut(E). Thus, for
bers [I.3 §1.5](/part-01/fundamental-definitions) C having the property that if a, b are          example, Gal(x 2 − 2) = {φ1 , φ2 }. Notice that φ1 is the
any two elements of F , then all the numbers a + b,             identity ι, while φ22 = φ2 ◦ φ2 = φ1 , so this is just a
a − b, ab, and a/b also lie in F (where we assume               cyclic group of order 2. Similarly, if f (x) = x 3 − 2,
that b = 0 in the last case to avoid dividing by 0).           with splitting field E = Q(α, ω) as above, then any
The standard mathematical language for this property            φ ∈ Aut(E) satisfies φ(α)3 = φ(α3 ) = φ(2) = 2, and
is to say that F is “closed under” the usual arithmetic         therefore φ(α) = α, αω, or αω2 ; likewise φ(ω) = ω
operations of addition, subtraction, multiplication, and        or ω2 . Once φ(α) and φ(ω) are specified, φ is com-
division. For example, the rationals Q form a field, as          pletely determined (since φ(a1 +a2 α+· · ·+a6 α2 ω) =
         √does Q( 2) = {a + b 2 : a, b ∈ Q} (this is clearly              a1 +a2 φ(α)+· · ·+a6 φ(α)2 φ(ω)), so there are just six
closed under addition, subtraction, and multiplication,         possibilities for the automorphism φ. It turns out that
                                                        √
and is also closed under division since 1/(a + b 2) =           each of these is indeed an automorphism, and therefore
                      \sqrt{a}/(a2 − 2 b2 ) − b 2/(a2 − 2 b2 )). A polynomial f (x) of         Gal(x 3 − 2) is a group of order 6. In fact, this group
degree n with rational coefficients has n complex roots           is isomorphic to the symmetric group [III.68](/part-03/permutation-groups) S3 , as
by the fundamental theorem of algebra [V.13](/part-05/the-fundamental-theorem-of-algebra)—                   can be seen by considering each automorphism as a
call them α1 , . . . , αn . The splitting field of f is defined   permutation of the three roots of f (x).
to be the smallest field containing Q and all the αi ,              Now that the Galois group is defined, it is possible
and is written as Q(α1 , . . . , αn ). For example, the poly-   to state some of Galois’s fundamental results that lead
                                 √
nomial x 2 − 2 has roots ± 2, so its splitting field is          to the insolubility of the quintic. Each subgroup H of

