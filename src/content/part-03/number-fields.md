# Number Fields

254

solves them. However, there are many techniques for
proving that solutions exist, and they usually involve
limiting arguments. For example, some times one can
generate a sequence of functions f1 , f2 , . . . and show
that these functions “converge” to some “limiting func-
tion” f , which, owing to the way we constructed the
sequence f1 , f2 , . . . , must be a solution to the equa-     b d : a, b ∈ Q}, where d is an integer (which, it is
tion. Again, if we want to make sense of this, we
must know what it is for two functions to be close,
which means that the functions fn should belong to
a normed space.
   How can we show that these functions converge to a
limit f if we cannot already describe f ? The answer is
that most interesting normed spaces, including Hilbert
spaces and most important function spaces, have an
additional property, called completeness, which guar-
antees, under certain conditions, that limits do indeed
exist. Informally, it says that if the vectors in a sequence
v1 , v2 , . . . all get very close to each other when you go   tant reason is that they allow us to factorize certain
far enough along the sequence, then they must con-
verge to a limit, v, that belongs to the normed space as
well. A complete normed space is known as a Banach
space, after the Polish mathematician stefan banach
[VI.84](/part-06/stefan-banach-18921945), who developed much of the general theory of
such spaces. Banach spaces have many useful proper-
ties that normed spaces do not have in general: the
completeness property can be thought of as ruling out
pathological examples.
   The theory of Banach spaces is some times known
as linear analysis, since by mixing vector spaces and
metric spaces it mixes linear algebra and analysis.
Banach spaces arise through out modern analysis: see,
for example, the articles in this volume on partial
differential equations [IV.12](/part-04/analysis), harmonic analysis
[IV.11](/part-04/harmonic-analysis), and operator algebras [IV.15](/part-04/operator-algebras).
III.63 Number Fields

A number field K is a “finite-degree field extension” of
Q, the field of rational numbers. This means that K is
a field [I.3 §2.2](/part-01/fundamental-definitions) that is finite dimensional when one
regards it as a vector space [I.3 §2.3](/part-01/fundamental-definitions) over Q. The fol-
lowing alternative description is some what more con-
crete. Take finitely many algebraic numbers α1 , . . . , αk     unique factorization into primes fails to hold: for exam-
(that is, roots of polynomials with integer coefficients)
and consider the field K of all rational functions in
the αi . (In other words, K consists of numbers like
α21 α3 /(α22 + 7).) Then it turns out that K is a num-

III. Mathematical Concepts
ber field (the one thing that is not completely obvious
is that it has finite degree over Q), which we denote
by Q(α1 , . . . , αk ). Conversely, every number field is of
this form.
The simplest number fields are perhaps the quad-
√
ratic fields. These are fields of the form Q( d) = {a +
√
important to stress, may be negative) that is square-
free. This last condition tells us that d has no nontriv-
ial square factors. It is there for convenience so that
√all the Q( d) will be distinct. (For example, Q( 12), if
√we were to allow it, would equal Q( 3), since 12 =
. qrt{2} 3.) Among the other important number fields are
the cyclotomic fields. Here we take a primitive mth
root of unity ζm (which, for concreteness, one could
take to be e2π i/m ) and “adjoin” it to Q, obtaining the
field Q(ζm ).
Why consider number fields? Historically, an impor-
Diophantine equations. For example, the Ramanujan–
Nagell equation x 2 = 2 n − 7 may be factorized as
√(x + −7)(x − −7) = 2 n
√
if we allow coefficients in the field Q( −7), while the
n + y n = z n is equivalent to
Fermat equation x
x n = (z − y)(z − ζn y) · · · (z − ζn
n−1
y)       (1)
if we allow coefficients in the field Q(ζn ).
Before one can start thinking about whether such fac-
torizations are useful, it is necessary to understand the
notion of an integer in a number field K. A number
α ∈ K is an (algebraic) integer if it is a root of a monic
polynomial with coefficients in Z: that is, a polynomial
√
with leading coefficient 1. For simple fields like Q( d)
with d squarefree, the integers can be described quite
√
explicitly. They are all the numbers of the form a+b d
for integers a and b, unless d ≡ 1 (mod 4), in which
case we must include more numbers: we get all num-
1     √
Ben Green
and b. The set of integers in K is often denoted by OK ,
and it forms a ring [III.81 §1](/part-03/rings-ideals-and-modules).
Unfortunately, factorizations such as (1) are not as
helpful as they seem at first sight: OK turns out not
to be OK, at least if one expects familiar properties
of the ring Z to carry over unchanged. In particular,
√ple, 2 · 3 = (1 + −5)(1 − −5) in the field Q( −5).
The numbers on both sides are integers in this field,
and it is not possible to decompose any of them any
further.