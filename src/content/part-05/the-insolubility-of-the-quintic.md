# The Insolubility of the Quintic

708

(S, S). If P judges that S does not halt when presented
with itself as input, we then cause Q to halt. But if P
judges that S does halt when presented with itself as
input, then we artificially send Q into an end less loop,
so that it does not halt. (If S is not a valid program in L,   Yuri Matiyasevitch in 1970, who built on work of Mar-
then let us say that Q halts—it does not really matter
though.) To summarize, if S halts for input S, then Q
does not halt for S, and if S does not halt for S, then Q
does halt for S.
   But now let us suppose that S is the program for Q
itself. Does Q halt with input S? If it does, then S halts     any algorithm with integer inputs, there was a sys-
with input S, so Q does not halt. If it does not, then
S does not halt with input S, so Q does halt. This is
a contradiction, and therefore the procedure P out of
which Q was built could not have existed.
   That solves the general version of Hilbert’s prob-
lem: there is no algorithm that will determine the truth
or falsity of arbitrary mathematical statements. But
it does so by constructing, for any given algorithm,
a rather artificial statement. We do not yet have an
answer to the question of what happens if we look
at more specific and more natural classes of state-
ments, such as that a given Diophantine equation has
a solution.
   Remarkably, however, specific questions of this kind
can often be shown to be equivalent to the general ques-
tion, by a technique known as encoding. For example,
there is no algorithm that will take as its input a set
of polygonal tiles (suitably represented) and tell you
whether it is possible to tile the plane using copies of
just those tiles. How do we know this? Well, given any
algorithm, there is a clever way of devising a set of tiles
(this is the encoding) that will tile the plane if and only    ing problem is closely related to gödel’s theorem
if the algorithm fails to halt. Therefore, if there were an    [V.15](/part-05/gdels-theorem), and both proofs use diagonal arguments, which
algorithm for determining whether the tiles could tile
the plane, then there would be an algorithm for solving
the halting problem—but there is not.
   Another famous example of a more specific problem
for which there is no algorithm is the word problem
for groups. Here you are given a set of generators and
relations for a group and asked whether the group is
trivial—that is, whether it contains just the identity.
Again, an algorithm that could decide this would give
us an algorithm that could solve the halting problem,
so there cannot be one. The encoding process used to
prove this is much more difficult than it is for tiling the
plane: the insolubility of the word problem for groups
is a famous theorem proved by Pyotr Novikov in 1952.
For a much fuller explanation of this problem and its

V. Theorems and Problems
solution, see geometric and combinatorial group
theory [IV.10](/part-04/geometric-and-combinatorial-group-theory).
Finally, what about Hilbert’s tenth problem? This has
become another famous and very hard theorem, due to
tin Davis, Hilary Putnam, and Julia Robinson. Matiya-
sevitch managed to produce a system of ten equations,
involving two parameters m and n, that could be solved
in integers if and only if m was the 2 nth Fibonacci
number. From Robinson’s work it followed that, given
tem of Diophantine equations, involving a parameter
q, that could be solved if and only if the algorithm
halted at q. That is, any instance of the halting problem
can be encoded as a system of Diophantine equations,
so there is no general algorithm for deciding whether
Diophantine equations can be solved.
Different people draw different morals from these
results. In the opinion of some mathematicians, they
show that there will always be a place for human cre-
ativity in mathematics, however powerful the com-
puters of the future might be. Others maintain that
although we now know that we cannot systematically
solve all problems in mathematics, the effect on most
mathematics is very slight: one should be aware that
certain kinds of problems are some times equivalent to
the halting problem, and that is it. Still others point
out that it is often easy to devise an algorithm to solve
a problem but much harder to make it efficient. This
issue is discussed in great detail in computational
complexity [IV.20](/part-04/computational-complexity).
Turing’s argument for the insolubility of the halt-
are discussed in countable and uncountable sets
[III.11](/part-03/countable-and-uncountable-sets).
V.21 The Insolubility of the Quintic
Martin W. Liebeck
Every student will be familiar with the formula for the
roots of a quadratic polynomial ax 2 + bx + c, namely
√
(−b ± b2 − 4 ac)/2 a. Perhaps less familiar is the fact
that there is also a formula for the roots of a cubic: write
the cubic as x 3 +ax 2 +bx+c, and make the substitution
y = x + 13 a to rewrite it in the form y 3 + 3 hy + k. The
roots of this are then of the form
2
3 1
                       
(−k +   k 2 + 4 h3 ) + 3 1 (−k − k2 + 4 h3 ).
2                         2

V.21.   The Insolubility of the Quintic

While the quadratic formula was known to the Greeks,
the cubic formula was not found until the sixteenth
century. In the same century a formula for the roots
of quartic (degree 4) polynomials was also found.
The formulas for quadratics, cubics, and quartics all
arise by applying a sequence of arithmetic opera-
tions (addition, subtraction, multiplication, division)
together with extraction of roots (square roots, cube
roots, and so on) to the coefficients of the original poly-
nomial. Such a formula is called a radical expression for
the roots.
   The next step, naturally enough, was the quintic (i.e.,
polynomial of degree 5). However, several hundred
years passed with out anyone finding a radical formula
for the roots of a general quintic polynomial.
   There was a good reason for this. There is no
such formula. Nor is there a formula for polyno-
mials of degree greater than 5. This fact was first
established in the early nineteenth century by abel
[VI.33](/part-06/niels-henrik-abel-18021829) (who died aged twenty-six), after which galois
[VI.41](/part-06/variste-galois-18111832) (who died aged twenty-one) built an entirely
new theory of equations that not only explained the
nonexistence of formulas but laid the foundations
for a whole edifice of algebra and number theory
known as Galois theory, a major area of modern-day
research.
   One of the key ideas of Galois was to associate with
any polynomial f = f (x) a group [I.3 §2.1](/part-01/fundamental-definitions) Gal(f ) (the
Galois group of f ), which is a finite group that per-
mutes the roots of f . This group is defined in terms
of certain fields [I.3 §2.2](/part-01/fundamental-definitions), which for these purposes
can be thought of as subsets F of the complex num-
bers [I.3 §1.5](/part-01/fundamental-definitions) C having the property that if a, b are
any two elements of F , then all the numbers a + b,
a − b, ab, and a/b also lie in F (where we assume
that b = 0 in the last case to avoid dividing by 0).
The standard mathematical language for this property
is to say that F is “closed under” the usual arithmetic
operations of addition, subtraction, multiplication, and
division. For example, the rationals Q form a field, as

does Q( 2) = {a + b 2 : a, b ∈ Q} (this is clearly
closed under addition, subtraction, and multiplication,
and is also closed under division since 1/(a + b 2) =
a/(a2 − 2 b2 ) − b 2/(a2 − 2 b2 )). A polynomial f (x) of
degree n with rational coefficients has n complex roots
by the fundamental theorem of algebra [V.13](/part-05/the-fundamental-theorem-of-algebra)—
call them α1 , . . . , αn . The splitting field of f is defined   permutation of the three roots of f (x).
to be the smallest field containing Q and all the αi ,
and is written as Q(α1 , . . . , αn ). For example, the poly-   to state some of Galois’s fundamental results that lead
nomial x 2 − 2 has roots ± 2, so its splitting field is

709
. qrt{Q}( 2), defined above. Less trivially, x 3 − 2 has roots
α, αω, αω2 , where α = 21/3 , the real cube root of 2,
and ω = e2π i/3 , so its splitting field is Q(α, ω), which
consists of all complex numbers a1 + a2 α + a3 α2 +
a4 ω + a5 αω + a6 α2 ω with ai ∈ Q. (Notice that we
do not have to include ω2 in such expressions since
ω3 = 1, so (ω − 1)(ω2 + ω + 1) = ω3 − 1 = 0, which
implies that ω2 = −ω − 1.)
Let E = Q(α1 , . . . , αn ) be the splitting field of our
polynomial f . An automorphism of E is a bijection
φ : E → E that preserves addition and multiplication—
in other words, φ(a + b) = φ(a) + φ(b) and φ(ab) =
φ(a)φ(b) for all a, b ∈ E. Such a function necessarily
also preserves subtraction and division, and fixes every
rational number. Denote by Aut(E) the set of all auto-
√
morphisms of E. For example, when E = Q( 2), any
automorphism φ satisfies
. qrt{2} = φ(2) = φ( 2 2) = φ( 2)φ( 2) = φ( 2)2 ,
√
and therefore φ( 2) = 2 or − 2. In the first case
√φ(a + b 2) = a + b 2 for all a, b ∈ Q, while in
√the second φ(a + b 2) = a − b 2. Both of these
are automorphisms of E; call them φ1 , φ2 , so that
Aut(E) = {φ1 , φ2 }.
The composition φ ◦ ψ of two automorphisms φ, ψ
of E is again an automorphism, and so is the inverse
function φ−1 , while the identity function ι defined by
ι(e) = e for all e ∈ E is also an automorphism. Since
composition of functions is an associative operation,
it follows that Aut(E) is a group under composition.
Define the Galois group Gal(f ) of our polynomial f (x)
with splitting field E to be this group Aut(E). Thus, for
example, Gal(x 2 − 2) = {φ1 , φ2 }. Notice that φ1 is the
identity ι, while φ22 = φ2 ◦ φ2 = φ1 , so this is just a
cyclic group of order 2. Similarly, if f (x) = x 3 − 2,
with splitting field E = Q(α, ω) as above, then any
φ ∈ Aut(E) satisfies φ(α)3 = φ(α3 ) = φ(2) = 2, and
therefore φ(α) = α, αω, or αω2 ; likewise φ(ω) = ω
or ω2 . Once φ(α) and φ(ω) are specified, φ is com-
pletely determined (since φ(a1 +a2 α+· · ·+a6 α2 ω) =
√
a1 +a2 φ(α)+· · ·+a6 φ(α)2 φ(ω)), so there are just six
possibilities for the automorphism φ. It turns out that
√
each of these is indeed an automorphism, and therefore
√
Gal(x 3 − 2) is a group of order 6. In fact, this group
is isomorphic to the symmetric group [III.68](/part-03/permutation-groups) S3 , as
can be seen by considering each automorphism as a
Now that the Galois group is defined, it is possible
√
to the insolubility of the quintic. Each subgroup H of