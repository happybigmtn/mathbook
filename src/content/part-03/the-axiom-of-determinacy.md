# The Axiom of Determinacy

III.3.   Bayesian Analysis                                                                                                159

III.2     The Axiom of Determinacy                                  Banach Spaces
                                                                       See normed spaces and banach spaces
Consider the following “infinite game.” Two players,                        [III.62](/part-03/normed-spaces-and-banach-spaces)
A and B, take turns to name natural numbers, with A
going first, say. By doing this, they generate an infinite
                                                                    III.3   Bayesian Analysis
sequence. A wins the game if this sequence is “eventu-
ally periodic,” and B wins if it is not. (An eventually peri-
                                                                    Suppose you throw a pair of standard dice. The proba-
odic sequence is one like 1, 56, 4, 5, 8, 3, 5, 8, 3, 5, 8, 3, 5,                                  1
                                                                    bility that the total is 10 is 12 because there are thirty-
8, 3, . . . : that is, one that settles down after a while
                                                                    six ways the dice can come up, of which three (4 and
to a recurring pattern.) It is not hard to see that B
                                                                    6, 5 and 5, and 6 and 4) give 10. If, however, you look
has a winning strategy for this game, since eventu-
                                                                    at the first die and see that it came up as a 6, then the
ally periodic sequences are rather special. However,
                                                                    conditional probability that the total is 10, given this
at any stage of the game it is always possible that A                                 1
                                                                    information, is 6 (since that is the probability that the
will win (if B plays sufficiently badly), since every finite           other die comes up as a 4).
sequence is the beginning of many eventually periodic                  In general, the probability of A given B is defined to
sequences.                                                          be the probability of A and B divided by the probability
  More generally, any collection S of infinite sequences             of B. In symbols, one writes
of natural numbers gives rise to an infinite game: A’s
                                                                                                 P[A ∧ B]
object is now to ensure that the sequence produced is                                 P[A|B] =            .
                                                                                                   P[B]
one of the sequences in S, and B’s object is to ensure
                                                                    From this it follows that P[A ∧ B] = P[A|B] P[B]. Now
the reverse. The resulting game is called determined if
                                                                    P[A ∧ B] is the same as P[B ∧ A]. Therefore,
one of the two players has a winning strategy. As we
have seen, the game is certainly determined when S is                             P[A|B] P[B] = P[B|A] P[A],
the set of eventually periodic sequences, and indeed for            since the left-hand side is P[A ∧ B] and the right-hand
just about any set S that one writes down it is easy to             side is P[B ∧ A]. Dividing through by P[B] we obtain
see that the corresponding game is determined. Never-               Bayes’s theorem:
theless, it turns out that there are games that are not
                                                                                                P[B|A] P[A]
determined. (It is an instructive exercise to see where                              P[A|B] =               ,
                                                                                                   P[B]
the plausible-seeming argument, “If A does not have a
                                                                    which expresses the conditional probability of A given
winning strategy, then A cannot force a win, so B must
                                                                    B in terms of the conditional probability of B given A.
have a winning strategy,” breaks down.)
                                                                       A fundamental problem in statistics is to analyze ran-
  It is not too hard to construct nondetermined games,
                                                                    dom data given by an unknown probability distribu-
but the constructions use the axiom of choice [III.1](/part-03/axiom-of-choice):
                                                                    tion [III.71](/part-03/probability-distributions). Here, Bayes’s theorem can make a signif-
roughly speaking, one can well-order all possible strate-
                                                                    icant contribution. For example, suppose you are told
gies so that each one has fewer predecessors than there
                                                                    that some unbiased coins have been tossed and that
are infinite sequences, and select sequences to belong
                                                                    three of them have come up heads. Suppose that you
to S or its complement in a way that stops each strat-
                                                                    are told that the number of coins tossed is between 1
egy in turn from being a winning strategy for either
                                                                    and 10, and that you wish to guess this number. Let H3
player.                                                             stand for the event that three coins came up heads and
   The axiom of determinacy states that all games are               let C be the number of coins. Then for each n between 1
determined. It contradicts the axiom of choice, but it              and 10 it is not hard to calculate the conditional prob-
is a rather interesting axiom when it is added to the               ability P[H3 |C = n], but we would like to know the
zermelo–fraenkel axioms [III.99](/part-03/the-zermelofraenkel-axioms) without choice. It                 reverse, namely P[C = n|H3 ]. Bayes’s theorem tells us
turns out, for example, to imply that many sets of                  that it is
reals have surprisingly good properties, such as being                                             P[C = n]
                                                                                     P[H3 |C = n]           .
Lebesgue measurable. Variants of the axiom of deter-                                                P[H3 ]
minacy are closely connected with the theory of large               This would tell us the ratios between the various con-
cardinals. For more details, see set theory [IV.22](/part-04/set-theory).                ditional probabilities P[C = n|H3 ] if we knew what the

