# The Language and Grammar of Mathematics

8                                                                                                     I. Introduction

[IV.16](/part-04/mirror-symmetry), general relativity and the einstein equa-             To illustrate the sort of clarity and simplicity that is
tions [IV.13](/part-04/general-relativity-and-the-einstein-equations), and operator algebras [IV.15](/part-04/operator-algebras) describe       needed in mathematical discourse, let us consider the
some fascinating examples of how mathematics and            famous mathematical sentence “Two plus two equals
physics have enriched each other.                           four” as a sentence of English rather than of mathemat-
                                                            ics, and try to analyze it grammatically. On the face of it,
I.2   The Language and Grammar of                           it contains three nouns (“two,” “two,” and “four”), a verb
      Mathematics                                           (“equals”) and a conjunction (“plus”). However, looking
                                                            more carefully we may begin to notice some oddities.
                   1   Introduction                         For example, although the word “plus” resembles the
                                                            word “and,” the most obvious example of a conju nc-
It is a remarkable phenomenon that children can learn       tion, it does not behave in quite the same way, as is
to speak with out ever being consciously aware of the        shown by the sentence “Mary and Peter love Paris.” The
sophisticated grammar they are using. Indeed, adults        verb in this sentence, “love,” is plural, where as the verb
too can live a perfectly satisfactory life with out ever     in the previous sentence, “equals,” was singular. So the
thinking about ideas such as parts of speech, subjects,     word “plus” seems to take two objects (which happen
predicates, or subordinate clauses. Both children and       to be numbers) and produce out of them a new, sin-
adults can easily recognize ungrammatical sentences,        gle object, while “and” conjoins “Mary” and “Peter” in
at least if the mistake is not too subtle, and to do this   a looser way, leaving them as distinct people.
it is not necessary to be able to explain the rules that
                                                               Reflecting on the word “and” a bit more, one finds
have been violated. Nevertheless, there is no doubt that
                                                            that it has two very different uses. One, as above, is to
one’s understanding of language is hugely enhanced by
                                                            link two nouns, where as the other is to join two whole
a knowledge of basic grammar, and this understanding
                                                            sentences together, as in “Mary likes Paris and Peter
is essential for any body who wants to do more with
                                                            likes New York.” If we want the basics of our language
language than use it unreflectingly as a means to a
                                                            to be absolutely clear, then it will be important to be
nonlinguistic end.
                                                            aware of this distinction. (When mathematicians are at
   The same is true of mathematical language. Up to
                                                            their most formal, they simply outlaw the noun-linking
a point, one can do and speak mathematics with out
                                                            use of “and”—a sentence such as “3 and 5 are prime
knowing how to classify the different sorts of words
                                                            numbers” is then paraphrased as “3 is a prime number
one is using, but many of the sentences of advanced
                                                            and 5 is a prime number.”)
mathematics have a complicated structure that is much
easier to understand if one knows a few basic terms            This is but one of many similar questions: any body
of mathematical grammar. The object of this section         who has tried to classify all words into the standard
is to explain the most important mathematical “parts        eight parts of speech will know that the classification is
of speech,” some of which are similar to those of nat-      hopelessly inadequate. What, for example, is the role of
ural languages and others quite different. These are         the word “six” in the sentence “This section has six sub-
normally taught right at the beginning of a university      sections”? Unlike “two” and “four” earlier, it is certainly
course in mathematics. Much of The Companion can be         not a noun. Since it modifies the noun “subsection” it
understood with out a precise knowledge of mathemat-         would traditionally be classified as an adjective, but
ical grammar, but a careful reading of this article will    it does not behave like most adjectives: the sentences
help the reader who wishes to follow some of the later,     “My car is not very fast” and “Look at that tall build-
more advanced parts of the book.                            ing” are perfectly grammatical, where as the sentences
   The main reason for using mathematical grammar is        “My car is not very six” and “Look at that six building”
that the statements of mathematics are supposed to          are not just nonsense but ungrammatical nonsense. So
be completely precise, and it is not possible to achieve    do we classify adjectives further into numerical adjec-
complete precision unless the language one uses is free     tives and nonnumerical adjectives? Perhaps we do, but
of many of the vaguenesses and ambiguities of ordinary      then our troubles will be only just beginning. For exam-
speech. Mathematical sentences can also be highly com-      ple, what about possessive adjectives such as “my” and
plex: if the parts that made them up were not clear and     “your”? In general, the more one tries to refine the clas-
simple, then the unclarities would rapidly accumulate       sification of English words, the more one realizes how
and render the sentences unintelligible.                    many different grammatical roles there are.

I.2.   The Language and Grammar of Mathematics                                                                           9

              2   Four Basic Concepts                        Although one cannot directly substitute the phrase “is
                                                             an element of” for “is,” one can do so if one is prepared
Another word that famously has three quite distinct
                                                             to modify the rest of the sentence a little.
meanings is “is.” The three meanings are illustrated in
                                                                There are three common ways to denote a specific
the following three sentences.
                                                             set. One is to list its elements inside curly brackets:
   (1) 5 is the square root of 25.                           {2, 3, 5, 7, 11, 13, 17, 19}, for example, is the set whose
   (2) 5 is less than 10.                                    elements are the eight numbers 2, 3, 5, 7, 11, 13, 17,
   (3) 5 is a prime number.                                  and 19. The majority of sets considered by mathemat i-
                                                             cians are too large for this to be feasible—indeed, they
In the first of these sentences, “is” could be replaced       are often infinite—so a second way to denote sets is
by “equals”: it says that two objects, 5 and the square      to use dots to imply a list that is too long to write
root of 25, are in fact one and the same object, just as     down: for example, the expressions {1, 2, 3, . . . , 100}
it does in the English sentence “London is the capital of    and {2, 4, 6, 8, . . . } can be used to represent the set of
the United Kingdom.” In the second sentence, “is” plays      all positive integers up to 100 and the set of all positive
a completely different role. The words “less than 10”         even numbers, respectively. A third way, and the way
form an adjectival phrase, specifying a property that        that is most important, is to define a set via a property:
numbers may or may not have, and “is” in this sentence       an example that shows how this is done is the expres-
is like “is” in the English sentence “Grass is green.” As    sion {x : x is prime and x < 20}. To read an expres-
for the third sentence, the word “is” there means “is an     sion such as this, one first reads the opening curly
example of,” as it does in the English sentence “Mercury     bracket as “The set of.” Next, one reads the symbol
is a planet.”                                                that occurs before the colon. The colon itself one reads
   These differences are reflected in the fact that the        as “such that.” Finally, one reads what comes after the
sentences cease to resemble each other when they are         colon, which is the property that determines the ele-
written in a more symbolic way. An obvious way to write      ments of the set. In this instance, we end up saying,
            √
(1) is 5 = 25. As for (2), it would usually be written       “The set of x such that x is prime and x is less than 20,”
5 < 10, where the symbol “<” means “is less than.” The       which is in fact equal to the set {2, 3, 5, 7, 11, 13, 17, 19}
third sentence would normally not be written symbol-         considered earlier.
ically because the concept of a prime number is not             Many sentences of mathematics can be rewritten in
quite basic enough to have universally recognized sym-       set-theoretic terms. For example, sentence (2) earlier
bols associated with it. However, it is some times useful     could be written as 5 ∈ {n : n < 10}. Often there is
to do so, and then one must invent a suitable symbol.        no point in doing this (as here, where it is much eas-
One way to do it would be to adopt the convention that       ier to write 5 < 10) but there are circumstances where
if n is a positive integer, then P (n) stands for the sen-   it becomes extremely convenient. For example, one of
tence “n is prime.” Another way, which does not hide         the great advances in mathematics was the use of Carte-
the word “is,” is to use the language of sets.               sian coordinates to translate geometry into algebra
                                                             and the way this was done was to define geometrical
2.1    Sets
                                                             objects as sets of points, where points were themselves
Broadly speaking, a set is a collection of objects, and in   defined as pairs or triples of numbers. So, for exam-
mathematical discourse these objects are mathematical        ple, the set {(x, y) : x 2 + y 2 = 1} is (or represents)
ones such as numbers, points in space, or even other         a circle of radius 1 with its center at the origin (0, 0).
sets. If we wish to rewrite sentence (3) symbolically,       That is because, by the Pythagorean
                                                                                                       theorem, the dis-
another way to do it is to define P to be the collection,     tance from (0, 0) to (x, y) is x 2 + y 2 , so the sentence
or set, of all prime numbers. Then we can rewrite it         “x 2 + y 2 = 1” can be reexpressed geometrically as “the
as “5 belongs to the set P .” This notion of belonging       distance from (0, 0) to (x, y) is 1.” If all we ever cared
to a set is sufficiently basic to deserve its own symbol,      about was which points were in the circle, then we could
and the symbol used is “∈.” So a fully symbolic way of       make do with sentences such as “x 2 + y 2 = 1,” but in
writing the sentence is 5 ∈ P .                              geometry one often wants to consider the entire cir-
  The members of a set are usually called its elements,      cle as a single object (rather than as a multiplicity of
and the symbol “∈” is usually read “is an element of.”       points, or as a property that points might have), and
So the “is” of sentence (3) is more like “∈” than “=.”       then set-theoretic language is indispensable.

$10$

A second circumstance where it is usually hard to do with out sets is when one is defining new mathematical objects. Very often such an object is a set together with a mathematical structure imposed on it, which takes the form of certain relationships among the elements of the set. For examples of this use of set-theoretic language, see sections $1$ and $2$ , on number systems and algebraic structures, respectively, in some fundamental mathematical definitions [I.3](/part-01/fundamental-definitions).
Sets are also very useful if one is trying to do metamathematics, that is, to prove statements not about mathematical objects but about the process of mathematical reasoning itself. For this it helps a lot if one can devise a very simple language--with a small vocabulary and an uncomplicated grammar--into which it is in principle possible to translate all mathematical arguments. Sets allow one to reduce greatly the number of parts of speech that one needs, turning almost all of them into nouns.
For example, with the help of the membership symbol “ $\in$ ” one can do with out adjectives, as the translation of “ $5$ is a prime number” (where “prime” functions as an adjective) into “ $5\in$ P ” has already suggested. 1 This is of course an artificial process--imagine replacing “roses are red” by “roses belong to the set R”--but in this context it is not important for the formal language to be natural and easy to understand.

$2$ . $2$

Functions

Let us now switch attention from the word “is” to some other parts of the sentences ( $1$ ) - ( $3$ ), focusing first on the phrase “the square root of” in sentence ( $1$ ) . If we wish to think about this phrase grammatically, then we should analyze what sort of role it plays in a sentence, and the analysis is simple: in virtually any mathematical sentence where the phrase appears, it is followed by the name of a number.
If the number is n, then this produces the slightly longer phrase, “the square root of n,” which is a noun phrase that denotes a number and plays the same grammatical role as a number (at least when the number is used as a noun rather than as an adjective). For instance, replacing “ $5$ ” by “the square root of $25$ ” in the sentence “ $5$ is less than $7$ ” yields a new sentence, “The square root of $25$ is less than $7$ , ” that is still grammatically correct (and true). One of the most basic activities of mathematics is to take a mathematical object and transform it into $1$ .
For another discussion of adjectives see arithmetic geometry [IV.5](/part-04/arithmetic-geometry) . I. Introduction another one, some times of the same kind and some times not. “The square root of” transforms numbers into numbers, as do “four plus,” “two times,” “the cosine of,” and “the logarithm of.” A nonnumerical example is “the center of gravity of,” which transforms geometrical shapes (provided they are not too exotic or complicated to have a center of gravity) into points-- meaning that if S stands for a shape, then “the center of gravity of S” stands for a point.
A function is, roughly speaking, a mathematical transformation of this kind. It is not easy to make this definition more precise. To ask, “What is a function?” is to suggest that the answer should be a thing of some sort, but functions seem to be more like processes. More over, when they appear in mathematical sentences they do not behave like nouns. (They are more like prepositions, though with a definite difference that will be discussed in the next subsection .) One might therefore think it inappropriate to ask what kind of object “the square root of” is.
Should one not simply be satisfied with the grammatical analysis already given? As it happens, no. Over and over again, through out mathematics, it is useful to think of a mathematical phenomenon, which may be complex and very unthinglike, as a single object. We have already seen a simple example: a collection of infinitely many points in the plane or space is some times better thought of as a single geometrical shape. Why should one wish to do this for functions? Here are two reasons.
First, it is convenient to be able to say something like, “The derivative of sin is cos,” or to speak in general terms about some functions being differentiable and others not. More generally, functions can have properties, and in order to discuss those properties one needs to think of functions as things. Second, many algebraic structures are most naturally thought of as sets of functions. (See , for example, the discussion of groups and symmetry in [I.3](/part-01/fundamental-definitions) .
See also hilbert spaces [III.37](/part-03/bayesian-analysis), function spaces [III.29](/part-03/function-spaces), and vector spaces [I.3](/part-01/fundamental-definitions).) If f is a function, then the notation f (x) $=$ y means that f turns the object x into the object y. Once one starts to speak formally about functions, it becomes important to specify exactly which objects are to be subjected to the transformation in question, and what sort of objects they can be transformed into.
One of the main reasons for this is that it makes it possible to discuss another notion that is central to mathematics, that of inverting a function. (See [I.4](/part-01/general-goals) for a discussion of why it is central .) Roughly speaking, the inverse of a function is another function that undoes it, and that it

$I$ . $2$ .

The Language and Grammar of Mathematics

undoes; for example, the function that takes a number n to n $- 4$ is the inverse of the function that takes n to n $+ 4$ , since if you add four and then subtract four, or vice versa, you get the number you started with. Here is a function f that cannot be inverted. It takes each number and replaces it by the nearest multiple of $100$ , rounding up if the number ends in $50$ . Thus, $f(113) = 100$ , $f(3879) = 3900$ , and $f(1050) = 1100$ . It is clear that there is no way of undoing this process with a function g.
For example, in order to undo the effect of f on the number $113$ we would need g ( $100$ ) to equal $113$ . But the same argument applies to every number that is at least as big as $50$ and smaller than $150$ , and g ( $100$ ) cannot be more than one number at once. Now let us consider the function that doubles a number. Can this be inverted? Yes it can, one might say: just divide the number by two again. And much of the time this would be a perfectly sensible response, but not, for example, if it was clear from the context that the numbers being talked about were positive integers.
Then one might be focusing on the difference between even and odd numbers, and this difference could be encapsulated by saying that odd numbers are precisely those numbers n for which the equation $2x = n$ does not have a solution. (Notice that one can undo the doubling process by halving. The problem here is that the relationship is not symmetrical: there is no function that can be undone by doubling, since you could never get back to an odd number .) To specify a function, therefore, one must be careful to specify two sets as well:
the domain, which is the set of objects to be transformed, and the range, which is the set of objects they are allowed to be transformed into. A function f from a set A to a set B is a rule that specifies, for each element x of A, an element $y = f$ (x) of B. Not every element of the range needs to be used: consider once again the example of “two times” when the domain and range are both the set of all positive integers. The set {f (x) : x $\in$ A} of values actually taken by f is called the image of f .
(Slightly confusingly, the word “image” is also used in a different sense, applied to the individual elements of A: if x $\in$ A, then its image is f (x).) The following symbolic notation is used. The expression f : A $\to$ B means that f is a function with domain A and range B. If we then write f (x)  =  y, we know that x must be an element of A and y must be an element of B. Another way of writing f (x)  =  y that is some times more convenient is f : x   $\to$ y. (The bar on the

$11$

arrow is to distinguish it from the arrow in f : A $\to$ B, which has a very different meaning .) If we want to undo the effect of a function f : A $\to$ B, then we can, as long as we avoid the problem that occurred with the approximating function discussed earlier. That is, we can do it if f (x) and f (x) are different whenever $x$ and $x$ are different elements of A. If this condition holds, then f is called an injection. On the other hand, if we want to find a function g that is undone by f , then we can do so as long as we avoid the problem of the integer-doubling function.
That is, we can do it if every element y of B is equal to f (x) for some element x of A (so that we have the option of setting g (y)  =  x). If this condition holds, then f is called a surjection. If f is both an injection and a surjection, then f is called a bijection. Bijections are precisely the functions that have inverses. It is important to realize that not all functions have tidy definitions. Here, for example, is the specification of a function from the positive integers to the positive integers:
f (n)  =  n if n is a prime number, f (n)  =  k if n is of the form $2$ k for an integer k greater than $1$ , and $f(n) = 13$ for all other positive integers n. This function has an unpleasant, arbitrary definition but it is nevertheless a perfectly legitimate function. Indeed, “most” functions, though not most functions that one actually uses, are so arbitrary that they cannot be defined. (Such functions may not be useful as individual objects, but they are needed so that the set of all functions from one set to another has an interesting mathematical structure .)

$2$ . $3$

Relations

Let us now think about the grammar of the phrase “less than” in sentence ( $2$ ) . As with “the square root of,” it must always be followed by a mathematical object (in this case a number again) . Once we have done this we obtain a phrase such as “less than n,” which is importantly different from “the square root of n” because it behaves like an adjective rather than a noun, and refers to a property rather than an object. This is just how prepositions behave in English:
look, for example, at the word “under” in the sentence “The cat is under the table.” At a slightly higher level of formality, mathematicians like to avoid too many parts of speech, as we have already seen for adjectives. So there is no symbol for “less than”: instead, it is combined with the previous word “is” to make the phrase “is less than,” which is

12                                                                                                    I. Introduction

                                                                What exactly is it that these two relations have in
                                                             common? The answer is that they both take a set (in
                                                             the first case the set of all geometrical shapes, and in
                                                             the second the set of all whole numbers) and split it into
                                                             parts, called equivalence classes, where each part con-
                                                             sists of objects that one wishes to regard as essentially
                                                             the same. In the first example, a typical equivalence
                                                             class is the set of all shapes that are similar to some
                                                             given shape; in the second, it is the set of all integers
                                                             that leave a given remainder when you divide by m (for
                Figure 1 Similar shapes.                     example, if m = 7 then one of the equivalence classes
                                                             is the set {. . . , −16, −9, −2, 5, 12, 19, . . . }).
                                                                An alternative definition of what it means for a rela-
denoted by the symbol “<.” The grammatical rules for
                                                             tion ∼, defined on a set A, to be an equivalence relation
this symbol are once again simple. To use “<” in a sen-
                                                             is that it has the following three properties. First, it is
tence, one should precede it by a noun and follow it
                                                             reflexive, which means that x ∼ x for every x in A. Sec-
by a noun. For the resulting grammatically correct sen-
                                                             ond, it is symmetric, which means that if x and y are
tence to make sense, the nouns should refer to numbers
                                                             elements of A and x ∼ y, then it must also be the case
(or perhaps to more general objects that can be put in
                                                             that y ∼ x. Third, it is transitive, meaning that if x, y,
order). A mathematical “object” that behaves like this
                                                             and z are elements of A such that x ∼ y and y ∼ z,
is called a relation, though it might be more accurate
                                                             then it must be the case that x ∼ z. (To get a feel for
to call it a potential relationship. “Equals” and “is an
                                                             these properties, it may help if you satisfy your self that
element of” are two other examples of relations.
                                                             the relations “is similar to” and “is congruent (mod m)
   As with functions, it is important, when specifying
                                                             to” both have all three properties, while the relation
a relation, to be careful about which objects are to be
                                                             “<,” defined on the positive integers, is transitive but
related. Usually a relation comes with a set A of objects
                                                             neither reflexive nor symmetric.)
that may or may not be related to each other. For exam-
                                                                One of the main uses of equivalence relations is to
ple, the relation “<” might be defined on the set of all
                                                             make precise the notion of quotient [I.3 §3.3](/part-01/fundamental-definitions) con-
positive integers, or alternatively on the set of all real
                                                             struc tions.
numbers; strictly speaking these are different relations.
Some times relations are defined with reference to two
                                                             2.4   Binary Operations
sets A and B. For example, if the relation is “∈,” then
A might be the set of all positive integers and B the set    Let us return to one of our earlier examples, the sen-
of all sets of positive integers.                            tence “Two plus two equals four.” We have analyzed
   There are many situations in mathematics where one        the word “equals” as a relation, an expression that sits
wishes to regard different objects as “essentially the        between the noun phrases “two plus two” and “four”
same,” and to help us make this idea precise there is        and makes a sentence out of them. But what about
a very important class of relations known as equiva-         “plus”? That also sits between two nouns. However, the
lence relations. Here are two examples. First, in elemen-    result, “two plus two,” is not a sentence but a noun
tary geometry one some times cares about shapes but           phrase. That pattern is characteristic of binary opera-
not about sizes. Two shapes are said to be similar if        tions. Some familiar examples of binary operations are
one can be transformed into the other by a combina-          “plus,” “minus,” “times,” “divided by,” and “raised to
tion of reflections, rotations, translations, and enlarge-    the power.”
ments (see figure 1); the relation “is similar to” is an         As with functions, it is customary, and convenient,
equivalence relation. Second, when doing arithmetic          to be careful about the set to which a binary operation
modulo m [III.59](/part-03/modular-forms), one does not wish to distinguish          is applied. From a more formal point of view, a binary
between two whole numbers that differ by a multiple           operation on a set A is a function that takes pairs of
of m: in this case one says that the numbers are con-        elements of A and produces further elements of A from
gruent (mod m); the relation “is congruent (mod m)           them. To be more formal still, it is a function with the
to” is another equivalence relation.                         set of all pairs (x, y) of elements of A as its domain

I.2.   The Language and Grammar of Mathematics                                                                       13

and with A as its range. This way of looking at it is         mathematical discourse. If P and Q are statements
not reflected in the notation, however, since the symbol       (note here the mathematical habit of representing not
for the operation comes between x and y rather than           just numbers but any objects whatsoever by single let-
before them: we write x + y rather than +(x, y).              ters), then P ∧Q is the statement that is true if and only
   There are four properties that a binary operation may      if both P and Q are true.
have that are very useful if one wants to manipulate             Another connective is the word “or,” a word that has
sentences in which it appears. Let us use the symbol ∗        a more specific meaning for mathematicians than it
to denote an arbitrary binary operation on some set A.        has for normal speakers of the English language. The
The operation ∗ is said to be commutative if x ∗ y is         mathematical use is illustrated by the tiresome joke of
always equal to y ∗ x, and associative if x ∗ (y ∗ z) is      responding, “Yes please,” to a question such as, “Would
always equal to (x ∗ y) ∗ z. For example, the opera-          you like your coffee with or with out sugar?” The sym-
tions “plus” and “times” are commutative and associa-         bol for “or,” if one wishes to use a symbol, is “∨,” and
tive, where as “minus,” “divided by,” and “raised to the       the statement P ∨ Q is true if and only if P is true or
power” are neither (for instance, 9 − (5 − 3) = 7 while       Q is true. This is taken to include the case when they
(9 − 5) − 3 = 1). These last two operations raise another     are both true, so “or,” for mathematicians, is always the
issue: unless the set A is chosen carefully, they may not     so-called inclusive version of the word.
always be defined. For example, if one restricts one’s            A third important connective is “implies,” which is
attention to the positive integers, then the expression       usually written “⇒.” The statement P ⇒ Q means,
3 − 5 has no meaning. There are two conventions one           roughly speaking, that Q is a consequence of P , and
could imagine adopting in response to this. One might         is some times read as “if P then Q.” However, as with
decide not to insist that a binary operation should be        “or,” this does not mean quite what it would in English.
defined for every pair of elements of A, and to regard         To get a feel for the difference, consider the following
it as a desirable extra property of an operation if it        even more extreme example of mathematical pedantry.
is defined every where. But the convention actually in          At the supper table, my young daughter once said, “Put
force is that binary operations do have to be defined          your hand up if you are a girl.” One of my sons, to tease
every where, so that “minus,” though a perfectly good          her, put his hand up on the grounds that, since she had
binary operation on the set of all integers, is not a         not added, “and keep it down if you are a boy,” his doing
binary operation on the set of all positive integers.         so was compatible with her command.
   An element e of A is called an identity for ∗ if e ∗ x =      Something like this attitude is taken by mathemat i-
x ∗ e = x for every element x of A. The two most obvi-        cians to the word “implies,” or to sentences containing
ous examples are 0 and 1, which are identities for “plus”     the word “if.” The statement P ⇒ Q is considered to
and “times,” respectively. Finally, if ∗ has an identity e    be true under all circumstances except one: it is not
and x belongs to A, then an inverse for x is an element       true if P is true and Q is false. This is the definition
y such that x ∗ y = y ∗ x = e. For example, if ∗ is           of “implies.” It can be confusing because in English
“plus” then the inverse of x is −x, while if ∗ is “times”     the word “implies” suggests some sort of connection
then the inverse is 1/x.                                      between P and Q, that P in some way causes Q or is
   These basic properties of binary operations are fun-       at least relevant to it. If P causes Q then certainly P
da mental to the structures of abstract algebra. See           cannot be true with out Q being true, but all a mathe-
four important algebraic structures [I.3 §2](/part-01/fundamental-definitions) for              matician cares about is this logical consequence and
further details.                                              not whether there is any reason for it. Thus, if you
                                                              want to prove that P ⇒ Q, all you have to do is rule
             3   Some Elementary Logic                        out the possibility that P could be true and Q false
                                                              at the same time. To give an example: if n is a posi-
3.1    Logical Connectives
                                                              tive integer, then the statement “n is a perfect square
A logical connective is the mathematical equivalent of a      with final digit 7” implies the statement “n is a prime
conjunction. That is, it is a word (or symbol) that joins     number,” not because there is any connection between
two sentences to produce a new one. We have already           the two but because no perfect square ends in a 7. Of
discussed an example, namely “and” in its sentence-           course, implications of this kind are less interesting
linking meaning, which is some times written by the            mathematically than more genuine-seeming ones, but
symbol “∧,” particularly in more formal or abstract           the reward for accepting them is that, once again, one

$14$

avoids being confused by some of the ambiguities and subtle nuances of ordinary language.

$3$ . $2$

Quantifiers

Yet another ambiguity in the English language is exploited by the following old joke that suggests that our priorities need to be radically rethought. ( $4$ ) Nothing is better than lifelong happiness. ( $5$ ) But a cheese sandwich is better than nothing. ( $6$ ) Therefore, a cheese sandwich is better than lifelong happiness. Let us try to be precise about how this play on words works (a good way to ruin any joke, but not a tragedy in this case) . It hinges on the word “nothing,” which is used in two different ways.
The first sentence means “There is no single thing that is better than lifelong happiness,” where as the second means “It is better to have a cheese sandwich than to have nothing at all.” In other words, in the second sentence, “nothing” stands for what one might call the null option, the option of having nothing, where as in the first it does not (to have nothing is not better than to have lifelong happiness) . Words like “all,” “some,” “any,” “every,” and “nothing” are called quantifiers, and in the English language they are highly prone to this kind of ambiguity.
Mathematicians therefore make do with just two quantifiers, and the rules for their use are much stricter. They tend to come at the beginning of sentences, and can be read as “for all” (or “for every ”) and “there exists” (or “for some ”). A rewriting of sentence ( $4$ ) that renders it unambiguous (but less like real English) is ( $4$ ) For all x, lifelong happiness is at least as good as x. The second sentence cannot be rewritten in these terms because the word “nothing” is not playing the role of a quantifier.
(Its nearest mathematical equivalent is something like the empty set, that is, the set with no elements .) Armed with “for all” and “there exists,” we can be clear about the difference between the beginnings of the following sentences. ( $7$ ) Everybody likes at least one drink, namely water. ( $8$ ) Everybody likes at least one drink; I myself go for red wine. The first sentence makes the point (not necessarily correctly) that there is one drink that everybody likes,

I. Introduction

where as the second claims merely that we all have something we like to drink, even if that something varies from person to person. The precise formulations that capture the difference are as follows. ( $7$ ) There exists a drink D such that, for every person P , P likes D. ( $8$ ) For every person P there exists a drink D such that P likes D. This illustrates an important general principle: if you take a sentence that begins “for every x there exists y such that . . . ” and interchange the two parts so that it now begins “there exists y such that, for every x, . . .
,” then you obtain a much stronger statement, since y is no longer allowed to depend on x. If the second statement is still true--that is, if you really can choose a y that works for all the x at once--then the first statement is said to hold uniformly. The symbols ∀ and ∃ are often used to stand for “for all” and “there exists,” respectively. This allows us to write quite complicated mathematical sentences in a highly symbolic form if we want to. For example, suppose we let P be the set of all primes, as we did earlier.
Then the following symbols make the claim that there are infinitely many primes, or rather a slightly different claim that is equivalent to it. $({}^{9})$ ∀n ∃m $(m > n)$ ∧ $(m\inP)$ . In words, this says that for every n we can find some m that is both bigger than $n$ and $a$ prime. If we wish to unpack sentence ( $9$ ) further, we could replace the part $m\inP$ by (10) ∀a, b $ab = m$ ⇒ ( $(a = 1)$ ∨ $(b = 1)$ ) .
There is one final important remark to make about the quantifiers “∀” and “∃.” I have presented them as if they were freestanding, but actually a quantifier is always associated with a set (one says that it quantifies over that set). For example, sentence ( $10$ ) would not be a translation of the sentence “m is prime” if $a$ and $b$ were

$7$

allowed to be fractions: if $a = 3$ and $b = {}^{3}$ then $ab = 7$ with out either $a$ or $b$ equaling $1$ , but this does not show that $7$ is not a prime. Implicit in the opening symbols ∀a, b is the idea that $a$ and $b$ are intended to be positive integers. If this had not been clear from the context, then we could have used the symbol N (which stands for the set of all positive integers) and started sentence ( $10$ ) with ∀a, $b\inN$ instead.

I.2.   The Language and Grammar of Mathematics                                                                         15

3.3    Negation                                             3.4   Free and Bound Variables

The basic idea of negation in mathematics is very sim-      Suppose we say something like, “At time t the speed of
ple: there is a symbol, “¬,” which means “not,” and if      the projectile is v.” The letters t and v stand for real
P is any mathematical statement, then ¬P stands for         numbers, and they are called variables, because in the
the statement that is true if and only if P is not true.    back of our mind is the idea that they are changing.
                                                            More generally, a variable is any letter used to stand
However, this is another example of a word that has
                                                            for a mathematical object, whether or not one thinks of
a slightly more restricted meaning to mathematicians
                                                            that object as changing through time. Let us look once
than it has in ordinary speech.
                                                            again at the formal sentence that said that a positive
  To illustrate this phenomenon once again, let us take
                                                            integer m is prime:
A to be a set of positive integers and ask ourselves what
the negation is of the sentence “Every number in the set     (10) ∀a, b    ab = m ⇒ ((a = 1) ∨ (b = 1)).
A is odd.” Many people when asked this question will
suggest, “Every number in the set A is even.” However,      In this sentence, there are three variables, a, b, and m,
this is wrong: if one thinks carefully about what exactly   but there is a very important grammatical and semantic
would have to happen for the first sentence to be false,     difference between the first two and the third. Here are
                                                            two results of that difference. First, the sentence does
one realizes that all that is needed is that at least one
                                                            not really make sense unless we already know what m
number in A should be even. So in fact the negation
                                                            is from the context, where as it is important that a and b
of the sentence is, “There exists a number in A that is
                                                            do not have any prior meaning. Second, while it makes
even.”
                                                            perfect sense to ask, “For which values of m is sen-
  What explains the temptation to give the first, incor-
                                                            tence (10) true?” it makes no sense at all to ask, “For
rect answer? One possibility emerges when one writes
                                                            which values of a is sentence (10) true?” The letter m
the sentence more formally, thus:
                                                            in sentence (10) stands for a fixed number, not speci-
                                                            fied in this sentence, while the letters a and b, because
 (11) ∀n ∈ A      n is odd.
                                                            of the initial ∀a, b, do not stand for numbers—rather,
                                                            in some way they search through all pairs of positive
The first answer is obtained if one negates just the last
                                                            integers, trying to find a pair that multiply together to
part of this sentence, “n is odd”; but what is asked for
                                                            give m. Another sign of the difference is that you can
is the negation of the whole sentence. That is, what is
                                                            ask, “What number is m?” but not, “What number is
wanted is not
                                                            a?” A fourth sign is that the meaning of sentence (10)
                                                            is completely unaffected if one uses different letters for
 (12) ∀n ∈ A ¬(n is odd),
                                                            a and b, as in the reformulation

but rather                                                  (10 ) ∀c, d    cd = m ⇒ ((c = 1) ∨ (d = 1)).

 (13) ¬(∀n ∈ A       n is odd),                             One cannot, however, change m to n with out estab-
                                                            li shing first that n denotes the same integer as m. A
which is equivalent to                                      variable such as m, which denotes a specific object, is
                                                            called a free variable. It sort of hovers there, free to take
 (14) ∃n ∈ A      n is even.                                any value. A variable like a and b, of the kind that does
                                                            not denote a specific object, is called a bound variable,
A second possible explanation is that one is inclined       or some times a dummy variable. (The word “bound”
(for psycholinguistic reasons) to think of the phrase       is used mainly when the variable appears just after a
“every element of A” as denoting something like a sin-      quantifier, as in sentence (10).)
gle, typical element of A. If that comes to have the feel      Yet another indication that a variable is a dummy
of a particular number n, then we may feel that the         variable is when the sentence in which it occurs can
negation of “n is odd” is “n is even.” The remedy is not    be rewritten with out it. For instance, the expression
                                                            100
to think of the phrase “every element of A” on its own:        n=1 f (n) is shorthand for f (1) + f (2) + · · · + f (100),
it should always be part of the longer phrase, “for every   and the second way of writing it does not involve the
element of A.”                                              letter n, so n was not really standing for anything in