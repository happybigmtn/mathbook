# The Axiom of Determinacy

III.3.   Bayesian Analysis

III.2     The Axiom of Determinacy
Consider the following “infinite game.” Two players,
A and B, take turns to name natural numbers, with A
going first, say. By doing this, they generate an infinite
sequence. A wins the game if this sequence is “eventu-
ally periodic,” and B wins if it is not. (An eventually peri-
odic sequence is one like 1, 56, 4, 5, 8, 3, 5, 8, 3, 5, 8, 3, 5,
8, 3, . . . : that is, one that settles down after a while
to a recurring pattern.) It is not hard to see that B
has a winning strategy for this game, since eventu-
ally periodic sequences are rather special. However,
at any stage of the game it is always possible that A
will win (if B plays sufficiently badly), since every finite
sequence is the beginning of many eventually periodic
sequences.
  More generally, any collection S of infinite sequences
of natural numbers gives rise to an infinite game: A’s
object is now to ensure that the sequence produced is
one of the sequences in S, and B’s object is to ensure
the reverse. The resulting game is called determined if
one of the two players has a winning strategy. As we
have seen, the game is certainly determined when S is
the set of eventually periodic sequences, and indeed for
just about any set S that one writes down it is easy to
see that the corresponding game is determined. Never-
the less, it turns out that there are games that are not
determined. (It is an instructive exercise to see where
the plausible-seeming argument, “If A does not have a
winning strategy, then A cannot force a win, so B must
have a winning strategy,” breaks down.)
  It is not too hard to construct nondetermined games,
but the constructions use the axiom of choice [III.1](/part-03/axiom-of-choice):
roughly speaking, one can well-order all possible strate-
gies so that each one has fewer predecessors than there
are infinite sequences, and select sequences to belong
to S or its complement in a way that stops each strat-
egy in turn from being a winning strategy for either
player.
   The axiom of determinacy states that all games are
determined. It contradicts the axiom of choice, but it
is a rather interesting axiom when it is added to the
zermelo–fraenkel axioms [III.99](/part-03/the-zermelofraenkel-axioms) with out choice. It
turns out, for example, to imply that many sets of
reals have surprisingly good properties, such as being
Lebesgue measurable. Variants of the axiom of deter-
minacy are closely connected with the theory of large
cardinals. For more details, see set theory [IV.22](/part-04/set-theory).

159
Banach Spaces
See normed spaces and banach spaces
[III.62](/part-03/normed-spaces-and-banach-spaces)
III.3   Bayesian Analysis
Suppose you throw a pair of standard dice. The proba-
1
bility that the total is 10 is 12 because there are thirty-
six ways the dice can come up, of which three (4 and
6, 5 and 5, and 6 and 4) give 10. If, however, you look
at the first die and see that it came up as a 6, then the
conditional probability that the total is 10, given this
1
information, is 6 (since that is the probability that the
other die comes up as a 4).
In general, the probability of A given B is defined to
be the probability of A and B divided by the probability
of B. In symbols, one writes
P[A ∧ B]
P[A|B] =
P[B]
From this it follows that P[A ∧ B] = P[A|B] P[B]. Now
P[A ∧ B] is the same as P[B ∧ A]. Therefore,
P[A|B] P[B] = P[B|A] P[A],
since the left-hand side is P[A ∧ B] and the right-hand
side is P[B ∧ A]. Dividing through by P[B] we obtain
Bayes’s theorem:
P[B|A] P[A]
P[A|B] =
P[B]
which expresses the conditional probability of A given
B in terms of the conditional probability of B given A.
A fundamental problem in statistics is to analyze ran-
dom data given by an unknown probability dis tr ibu-
tion [III.71](/part-03/probability-distributions). Here, Bayes’s theorem can make a signif-
icant contribution. For example, suppose you are told
that some unbiased coins have been tossed and that
three of them have come up heads. Suppose that you
are told that the number of coins tossed is between 1
and 10, and that you wish to guess this number. Let H3
stand for the event that three coins came up heads and
let C be the number of coins. Then for each n between 1
and 10 it is not hard to calculate the conditional prob-
ability P[H3 |C = n], but we would like to know the
reverse, namely P[C = n|H3 ]. Bayes’s theorem tells us
that it is
P[C = n]
P[H3 |C = n]           .
P[H3 ]
This would tell us the ratios between the various con-
dition al probabilities P[C = n|H3 ] if we knew what the