# Number Fields

254                                                                                         III. Mathematical Concepts

solves them. However, there are many techniques for            ber field (the one thing that is not completely obvious
proving that solutions exist, and they usually involve         is that it has finite degree over Q), which we denote
limiting arguments. For example, sometimes one can             by Q(α1 , . . . , αk ). Conversely, every number field is of
generate a sequence of functions f1 , f2 , . . . and show      this form.
that these functions “converge” to some “limiting func-           The simplest number fields are perhaps the quad-
                                                                                                                 √
tion” f , which, owing to the way we constructed the           ratic fields. These are fields of the form Q( d) = {a +
                                                                 √
sequence f1 , f2 , . . . , must be a solution to the equa-     b d : a, b ∈ Q}, where d is an integer (which, it is
tion. Again, if we want to make sense of this, we              important to stress, may be negative) that is square-
must know what it is for two functions to be close,            free. This last condition tells us that d has no nontriv-
which means that the functions fn should belong to             ial square factors. It is there for convenience so that
                                                                         \sqrt{a} normed space.                                                all the Q( d) will be distinct. (For example, Q( 12), if
                                                                                                          √How can we show that these functions converge to a          we were to allow it, would equal Q( 3), since 12 =
                                                                 √
limit f if we cannot already describe f ? The answer is        2 3.) Among the other important number fields are
that most interesting normed spaces, including Hilbert         the cyclotomic fields. Here we take a primitive mth
spaces and most important function spaces, have an             root of unity ζm (which, for concreteness, one could
additional property, called completeness, which guar-          take to be e2π i/m ) and “adjoin” it to Q, obtaining the
antees, under certain conditions, that limits do indeed        field Q(ζm ).
exist. Informally, it says that if the vectors in a sequence      Why consider number fields? Historically, an impor-
v1 , v2 , . . . all get very close to each other when you go   tant reason is that they allow us to factorize certain
far enough along the sequence, then they must con-             Diophantine equations. For example, the Ramanujan–
verge to a limit, v, that belongs to the normed space as       Nagell equation x 2 = 2 n − 7 may be factorized as
                                                                                        √well. A complete normed space is known as a Banach                                (x + −7)(x − −7) = 2 n
space, after the Polish mathematician stefan banach                                                         √
[VI.84](/part-06/stefan-banach-18921945), who developed much of the general theory of           if we allow coefficients in the field Q( −7), while the
                                                                                       n + y n = z n is equivalent to
such spaces. Banach spaces have many useful proper-            Fermat equation x
ties that normed spaces do not have in general: the                   x n = (z − y)(z − ζn y) · · · (z − ζn
                                                                                                          n−1
                                                                                                              y)       (1)
completeness property can be thought of as ruling out
                                                               if we allow coefficients in the field Q(ζn ).
pathological examples.
                                                                  Before one can start thinking about whether such fac-
   The theory of Banach spaces is sometimes known
                                                               torizations are useful, it is necessary to understand the
as linear analysis, since by mixing vector spaces and
                                                               notion of an integer in a number field K. A number
metric spaces it mixes linear algebra and analysis.
                                                               α ∈ K is an (algebraic) integer if it is a root of a monic
Banach spaces arise through out modern analysis: see,
                                                               polynomial with coefficients in Z: that is, a polynomial
for example, the articles in this volume on partial                                                                   √
                                                               with leading coefficient 1. For simple fields like Q( d)
differential equations [IV.12](/part-04/analysis), harmonic analysis
                                                               with d squarefree, the integers can be described quite
[IV.11](/part-04/harmonic-analysis), and operator algebras [IV.15](/part-04/operator-algebras).                                                                                √
                                                               explicitly. They are all the numbers of the form a+b d
                                                               for integers a and b, unless d ≡ 1 (mod 4), in which
III.63 Number Fields                                           case we must include more numbers: we get all num-
                                                                                         1     √
         Ben Green                                             bers of the form a + b( 2 (1 + d)), again for integers a
                                                               and b. The set of integers in K is often denoted by OK ,
A number field K is a “finite-degree field extension” of          and it forms a ring [III.81 §1](/part-03/rings-ideals-and-modules).
Q, the field of rational numbers. This means that K is             Unfortunately, factorizations such as (1) are not as
a field [I.3 §2.2](/part-01/fundamental-definitions) that is finite dimensional when one           helpful as they seem at first sight: OK turns out not
regards it as a vector space [I.3 §2.3](/part-01/fundamental-definitions) over Q. The fol-       to be OK, at least if one expects familiar properties
lowing alternative description is somewhat more con-           of the ring Z to carry over unchanged. In particular,
crete. Take finitely many algebraic numbers α1 , . . . , αk     unique factorization into primes fails to hold: for exam-
                                                                                  √(that is, roots of polynomials with integer coefficients)        ple, 2 · 3 = (1 + −5)(1 − −5) in the field Q( −5).
and consider the field K of all rational functions in           The numbers on both sides are integers in this field,
the αi . (In other words, K consists of numbers like           and it is not possible to decompose any of them any
α21 α3 /(α22 + 7).) Then it turns out that K is a num-         further.

