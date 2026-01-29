# Permutation Groups

III.68.   Permutation Groups                                                                                         259

Note that this does express our intuitive idea that there      ing structures other than the natural numbers that
are no “extra” natural numbers, since we can take A to         satisfy the axioms of first-order Peano arithmetic.
be the set of all the numbers 0, s(0), s(s(0)), . . . that        Actually, one also allows parameters in the state-
were on our list.                                              ments p(x); for example, p(x) could be the statement
  Rules (i), (ii), and (iii) are called the Peano axioms for   “there exists z with x = y+z,” which would correspond
the natural numbers. As explained above, they “charac-         to the set of all natural numbers greater than or equal
terize” the natural numbers, in the sense that all rea-        to y, and would therefore depend on y. And one also
soning about the natural numbers may be reduced or             adds some axioms saying how plus and times behave
rewritten in such a way that the only assumptions one          (for example, commutativity of addition). This whole
needs are the Peano axioms.                                    collection of axioms is known as Peano arithmetic, or
  There is a related system used in logic, called the          PA for short.
first-order Peano axioms. The idea here is that we want            See model theory [IV.23](/part-04/logic-and-model-theory) for more on some of the
to express the Peano axioms in the language of first-           topics discussed in this article.
order logic [IV.23 §1](/part-04/logic-and-model-theory). This means that we are allowed
variables (that are interpreted as ranging over the nat-       III.68 Permutation Groups
ural numbers), as well as the symbols 0 and s, logical                  Martin W. Liebeck
connectives, and the like, but nothing more: so there is
no “member of” symbol, and no sets are allowed. (How-          Let S be a set. A permutation of S is a function from
ever, for technical reasons one does allow symbols for         S to S that is both injective and surjective—in other
“plus” and “times.”)                                           words, a function that “rearranges” the elements of S.
  To give an idea of what is allowed and what is not,          For example, if S = {1, 2, 3}, then the function a : S → S
consider the statements “there are infinitely many per-         that sends 1 to 3, 2 to 1, and 3 to 2 is a permutation
fect squares” and “every infinite set of positive inte-         of S; so is the function b that sends 1 to 3, 2 to 2, and
gers contains either infinitely many odd numbers or             3 to 1; where as the function c that sends 1 to 3, 2 to
infinitely many even numbers.” With a little effort, we          1, and 3 to 1 is not a permutation. An example of a
can express the first of these statements in first-order         permutation of the set of real numbers R is the function
logic, as follows:                                             x → 8 − 2 x.
                                                                  From the point of view of finite group theory, the
             (∀m)(∃n)(∃x)       xx = m + n.
                                                               most important permutations to study are those of the
In words, this says that for every m you can find a per-        set In = {1, 2, . . . , n}, where n is a positive integer.
fect square of the form m + n (which is how we express         Let Sn denote the set of all permutations of In . So, for
the fact that it is larger than m). However, in order to       example, the permutations a and b defined in the pre-
express the second statement, we find ourselves want-           vious paragraph lie in S3 . To count how many permuta-
ing to write (∀A), where A ranges over all possible sub-       tions there are altogether in Sn , observe that, for a per-
sets of the natural numbers, rather than all possible          mutation f : In → In , there are n choices for f (1), then
elements: this is the main thing that is not allowed in        n − 1 choices for f (2) (we can choose anything differ-
first-order logic.                                              ent from f (1)), then n − 2 for f (3), and so on, until we
   By this criterion, rules (i) and (ii) are fine, but rule     have just 1 choice for f (n). Therefore the total number
(iii) is not. Instead, we have to use an “axiom scheme,”       of permutations in Sn is n(n − 1)(n − 2) · · · 1 = n!.
which is an infinite set of axioms, one for each first-             If f and g are permutations of a set S, their com posi-
order statement p(x). So our version of rule (iii) is this:    tion f ◦ g is defined by f ◦ g(s) = f (g(s)) for all s ∈ S,
for each statement p(x), we have an axiom saying that          and it is quite easy to see that f ◦ g is also a permuta-
if p(0) is true, and p(x) implies p(s(x)), then p(x) is        tion of S. It is usual to drop the “◦” symbol and write
true for all x.                                                just f g instead of f ◦ g. For example, if a, b ∈ S3 are
  Note that these axioms do not have the full strength         as in the first paragraph, then ab ∈ S3 sends 1 to 2, 2
of the usual Peano axioms. For instance, there are only        to 1, and 3 to 3, while ba sends 1 to 1, 2 to 3, and 3 to
countably many possible formulas p(x), where as there           2. Notice that ab = ba.
are uncountably many sets A. It turns out that in fact            For any set S, the identity function ι : S → S, defined
there are “nonstandard” models of these axioms, mean-          by ι(s) = s for all s ∈ S, is a permutation of S; and if f

$260$

is a permutation of S, then there is an inverse permutation $f - 1$ that sends everything back to where it came from and therefore satisfies $ff - 1 = f - 1f = ι.$ For example, the inverse of the above permutation $a \in S^{3}$ is the permutation that sends $1$ to $2$ , $2$ to $3$ , and $3$ to $1$ . Also, for any permutations f , g, h of S, we have f (gh)  =  (f g) h , since both sides send any s $\in$ S to f (g (h (s))) .
Thus, the set of all permutations of S, together with the binary operation [I.2](/part-01/language-and-grammar) of composition, satisfies the axioms for a group [I.3](/part-01/fundamental-definitions). In particular, S n is a finite group of size n!, known as the symmetric group of degree n. There is a neat way of representing permutations succinctly, known as the cycle notation. It is best explained with an example. Let $d\inS^{6}$ be the permutation $1 \to 3$ , $2 \to 5$ , $3 \to 6$ , $4 \to 4$ , $5 \to 2$ , $6 \to 1$ .
We can represent this more economically by writing $1 \to 3 \to 6 \to 1$ , $2 \to 5 \to 2$ , and $4 \to 4$ . We say the symbols $1$ , $3$ , $6$ form $a$ cycle of d ( of length 3); similarly, $2$ , $5$ form $a$ cycle of length $2$ , and $4 a$ cycle of length $1$ . We then compress our notation even further and write $d = (136)(25)(4)$ , indicating that each number $1$ , $3$ , $6$ in the first cycle is sent to the next one, except for the last which is sent back to the first, and likewise for the second and third cycles. This is the cycle notation for d;
notice that the cycles have no symbols in common--they are called disjoint cycles. It is not too hard to see that every permutation in S n can be expressed as a product of disjoint cycles; this is what we mean by the cycle notation for a permutation. For example, in cycle notation, the six permutations of $S^{3}$ are ι, (12)(3) , (13)(2), (23)(1), (123)$, and (132)$. (The permutations $a$ and $b$ in the first paragraph are (132) and (13)(2), respectively .) You might like to while away a few minutes by working out the multiplication table of $S^{3}$ .
The cycle-shape of a permutation g is the sequence of numbers we get by writing down the lengths of the disjoint cycles in the cycle notation for g, in decreasing order. For example, the cycle-shape of the permutation (163)(24)(58)(7)(9)$in$ S9$is (3, 2, 2, 1, 1)$, or more succinctly (3 , $2^{2}$ , $1^{2})$ . One can define the powers of a permutation f $\in$ S n in a natural way--namely, $f^{1} = f$ , $f^{2} = ff$ , $f^{3} = f^{2}f$ , and so on.
For example, if $e = (1234) \in S^{4}$ , then $e^{2} = (13)(24)$ , $e^{3} = (1432)$ , and $e^{4} = ι.$ The order of a permutation f $\in$ S n is defined to be the smallest positive integer r such that f r = ι: that is, the smallest number of times we have to do f to send everything back to where it came from. So the order of the $4$ - cycle III. Mathematical Concepts e above is $4$ . In general, the order of an rcycle (i . e . , a cycle of length r) is equal to r , and the order of a permutation in cycle notation is equal to the least common multiple of the lengths of the (disjoint) cycles.
It is often useful to be able to work out the order of a permutation. Here is one such instance. Suppose we shuffle a pack of eight cards in the following way: the pack is divided into two equal parts and then “interlaced,” so that if the original order was $1$ , $2$ , $3$ , $4$ , . . . , the new order is $1$ , $5$ , $2$ , $6$ , . . . . How many times must this shuffle be repeated before the cards are again in the original order?
Well, the shuffle gives the permutation of the eight card positions sending $1$ to $1$ , $2$ to $5$ , $3$ to $2$ , $4$ to $6$ , and so on, which in cycle notation is (1)(253)(467)(8). This has order $3$ , so the cards return to their original order after three shuffles. Things get quite interesting if we consider the same problem for different numbers of cards--you might like to try it your self with fifty-two cards, for instance. There is one slightly more subtle aspect of permutations which is important for group theory: namely, the theory of even and odd permutations.
Again, this is best illustrated by example. Take $n = 3$ , and let $x^{1}$ , $x^{2}$ , $x^{3}$ be three variables. Let us think of the permutations in $S^{3}$ as moving these variables around rather than the numbers $1$ , $2$ , and $3$ . So, for instance, we shall take the permutation (132) to send $x^{1}$ to $x^{3}$ , $x^{2}$ to $x^{1}$ , and $x^{3}$ to $x^{2}$ . Now let $\Delta$ be the expression $\Delta = (x^{1} - x^{2})(x^{1} - x^{3})(x^{2} - x^{3})$ . We can apply permutations in $S^{3}$ to $\Delta$ in an obvious way:
for example, (123) sends $\Delta$ to $(x^{2} - x^{3})(x^{2} - x^{1})(x^{3} - x^{1})$ . Notice that this is just the expression for $\Delta$ with two of the brackets, $(x^{1} - x^{2})$ and $(x^{1} - x^{3})$ , reversed. So (123) sends $\Delta$ to $\Delta.$ However, if we apply (12)(3)$to$. elta, we get $(x^{2} - x^{1})(x^{2} - x^{3})(x^{1} - x^{3}) = - \Delta$ . You can see that each permutation in $S^{3}$ sends $\Delta$ to either $+ \Delta$ or $- \Delta$ . Call those permutations that send $\Delta$ to $+ \Delta$ even permutations and those that send $\Delta$ to $- \Delta$ odd permutations.
Check that ι,(123), and (132) are even, while(12)(3) , (13)(2), and (23)(1) are odd. The definition of even and odd permutations for general n is very similar to this example. Let $x^{1}$ , . . . , x n be variables, and regard the permutations in S n as moving these variables around rather than the symbols $1$ , $2$ , . . . ,  n. Define $\Delta$ to be the product of all $x^{i} - x^{j}$ for i $<$ j. Just as in the example, we can apply any permutation $g \in S^{n}$ to $\Delta,$ and the result will be either $+ \Delta$ or $- \Delta$ .
Define the signature of g to be the number sgn $(g)\in{ + 1}$ , $- 1$ such that $g(\Delta) =$ sgn $(g)\Delta$ . This defines the signature function sgn : $S^{n} \to { + 1}$ , $- 1$ .