# Hilbert’s Nullstellensatz

V.19.   Inequalities

rigidity theorem: if a group behaves roughly in the way
that a nilpotent group would (because the growth rate
of the sets γr is polynomial), then it must in fact be
related to a nilpotent group in a very precise and alge-
braic way. (See mostow’s strong rigidity theorem
[V.23](/part-05/mostows-strong-rigidity-theorem) for another example of such a theorem.)
V.17     Hilbert’s Nullstellensatz
Let f1 , . . . , fn be a collection of polynomials in d com-
plex variables z1 , . . . , zd . Suppose that it is possible to   reach a contradiction by assuming CH. To do this,
find another collection of polynomials g1 , . . . , gn such
that
   f1 (z)g1 (z) + f2 (z)g2 (z) + · · · + fn (z)gn (z) = 1
for every complex d-tuple z = (z1 , . . . , zd ). Then it fol-    exist” if the axioms are true. So, in this model, the set
lows immediately that no such d-tuple can be a root
of every single fi , since otherwise the left-hand side
would equal 0. Remarkably, the converse also holds:
that is, if there is no d-tuple for which the polynomials
fi all vanish simultaneously, then it is possible to find
polynomials gi such that the above identity holds. This
result is known as the weak Nullstellensatz.
   A short (but clever) argument can be used to deduce
Hilbert’s Nullstellensatz from the weak Nullstellensatz.
This again is a statement where a condition that is obvi-
ously necessary turns out to be sufficient. Suppose that
h is another polynomial in d complex variables, that r
is a positive integer, and that the polynomial hr can be
written in the form f1 g1 + f2 g2 + · · · + fn gn for some
collection of polynomials g1 , . . . , gn . It follows imme-
diately that h(z) = 0 whenever fi (z) = 0 for every i.
Hilbert’s Nullstellensatz states that if h(z) = 0 when-
ever fi (z) = 0 for every i, then there must be some
positive integer r and some collection of polynomials
g1 , . . . , gn such that hr = f1 g1 + f2 g2 + · · · + fn gn .    details about how it is carried out.
   Hilbert’s Nullstellensatz is discussed further in alge-
braic geometry [IV.4 §§5, 12].
V.18     The Independence of the

The real numbers are uncountable [III.11](/part-03/countable-and-uncountable-sets), but do they
form the “smallest” uncountable set? Equivalently, is
it the case that if A is any set of real numbers, then
either A is countable or there is a bijection between A
and the set of all real numbers? The continuum hypoth-
esis (or CH) is the assertion that this is indeed true.
The notions of countability and uncountability were
invented by cantor [VI.54](/part-06/georg-cantor-18451918), who was also the first to

703
formulate CH. He tried hard to prove or disprove it, as
did many others after him, but nobody succeeded.
Gradually, mathematicians came to entertain the idea
that CH might be “independent” of normal mathe-
matics: that is, independent of the usual zfc axioms
[IV.22 §3.1](/part-04/set-theory) of set theory. This would mean that it could
be neither proved nor disproved from the ZFC axioms.
The first result in this direction was due to gödel
[VI.92](/part-06/kurt-gdel-19061978), who showed that CH could not be disproved
from the usual axioms. In other words, one could not
he showed that inside every model of set theory
[IV.22 §3.2](/part-04/set-theory) there is a model in which CH holds. This
model is called the “constructible universe.” Roughly
speaking, it consists just of those sets that “have to
of reals is as small as it could possibly be. The “smallest
uncountable size” is usually denoted א1 , and in Gödel’s
construction the reals appear in א1 stages, with only
countably many reals appearing at each stage. From
this one can deduce that the number of reals is א1 ,
which is precisely the assertion of CH.
The other direction had to wait thirty years, until Paul
Cohen invented the method of forcing. How would we
make CH false? Starting from some model of set theory
(in which CH might well hold), we would like to “add”
some reals to it. Indeed, we would like to add enough
that there are now more than א1 of them. But how do
we “add” a real? We need to ensure that what we end up
with is still a model of set theory, which is hard enough,
but also that when we add new reals we do not alter the
value of א1 (since otherwise the statement “the num-
ber of reals is א1 ” may still be true in the new model).
This is an extremely complicated task, both conceptu-
ally and technically. See set theory [IV.22](/part-04/set-theory) for more
V.19     Inequalities
Let x and y be two nonnegative real numbers. Then
√Continuum Hypothesis
√
ber, from which it follows that 12 (x+y) ⩾ xy. That is,
the arithmetic mean of x and y is at least as big as the
geometric mean. This conclusion is a very simple exam-
ple of a mathematical inequality; its generalization to
n numbers is called the AM–GM inequality.
In any branch of mathematics that has even the
slightest flavor of analysis, inequalities will be of
great importance: as well as analysis itself, this in-
cludes probability, and parts of combinatorics, number