# Enumerative and Algebraic Combinatorics

550

IV.18 Enumerative and Algebraic

Enumeration, otherwise known as counting, is the old-
est mathematical subject, while algebraic combinator-
ics is one of the youngest. Some cynics claim that alge-
braic combinatorics is not really a new subject but
just a new name given to enumerative combinator-
ics in order to enhance its (former) poor image, but
algebraic combinatorics is in fact the synthesis of two
opposing trends: abstraction of the concrete and con-
cretization of the abstract. The former trend dominated
the first half of the twentieth century, starting with
Hilbert’s “theological” proof of the fundamental the-
orem of invariants, in which he showed by abstract
means that certain invariants existed, but not how to
find them. The latter trend is dominating con tempo-
rary mathematics, thanks to the omnipresence of The
Mighty Computer.
   The abstraction trend consists of the categorization,
conceptualizati on, structuralizati on, and fancification
(in short, “bourbakization” [VI.96](/part-06/nicolas-bourbaki-1935)) of mathematics.
Enumeration did not escape this trend, and in the hands
of such giants as Gian-Carlo Rota and Richard Stanley
in America and Marco Schützenberger and Dominique
Foata in France, classical, enumerative combinator-
ics became more conceptual, structural, and algebraic.
However, as algebraic combinatorics has established
itself as a fully fledged and separate mathematical spe-
ciality, the more recent trend toward the explicit, con-
crete, and constructive has left its mark as well. It has
revealed that many algebraic structures have hidden
combinatorial underpinnings; the attempts to unearth
these have led to many fascinating discoveries and
unsolved problems.
1.1   Enumeration
The fundamental theorem of enumeration, indepen-
dently discovered by several anonymous cave dwellers,
states that
In words: the number of elements in A is the sum over
all elements of A of the constant function 1.
   While this formula is still useful after all these years,
enumerating specific finite sets is no longer considered

IV. Branches of Mathematics
mathematics. A genuine mathematical fact has to incor-
porate infinitely many facts, and the generic enum era-
Combinatorics
the sets in an infinite family.
Doron Zeilberger
To be precise, given an infinite sequence of sets
{An }. nftyn=0 , where each set An consists of objects sat-
1   Introduction
i sfy ing some combinatorial specifications that depend
on the parameter n, answer the question: How many
elements does An have?
In a moment we shall look at some examples. But
before we can learn how to answer this kind of ques-
tion, let us consider a meta-question: What is an
answer?
This was posed, and beautifully answered, by Herbert
Wilf. To give some background to Wilf’s meta-answer,
let us examine answers to some famous instances of
enumeration questions.
In the list below, when we are given a set An (which
will change from example to example), we shall write an
instead of |An |. That is, an will stand for the number
of elements of An .
(i) I Ching. If An is the set of all subsets of {1, . . . , n},
then an = 2 n .
(ii) Rabbi Levi Ben Gerson. If An is the set of permu-
tat i ons [III.68](/part-03/permutation-groups) on {1, . . . , n}, then an = n!.
(iii) Catalan. If An is the set of legal bracketings with n
opening brackets and n closing brackets, then an =
(2 n)!/(n + 1)!n!. (A legal bracketing is a sequence of
n opening brackets and n closing brackets such that
at no point in the sequence has the number of closing
brackets exceeded the number of opening brackets.
For instance, when n = 2 the legal bracketings are
[ ][ ] and [ [ ] ].)
(iv) leonardo of pisa [VI.6](/part-06/leonardo-of-pisa-known-as-fibonacci-vi57-christian-felix-klein-18491925). Let An be the set of
finite sequences that consist only of 1 s and 2 s and
that sum to n. (For example, when n = 4 the pos-
sible sequences are 1111, 112, 121, 211, and 22.)
In this case, we have three equivalent answers as
follows.
(i)                     . qrt{1}
an = √                −          .
5

    
|A| =     1.                                                              
n/2!
n−k
a∈A                                                      an =                .
k=0
k
(iii) an = Fn+1 , where Fn is the sequence defined by
the recurrence Fn = Fn−1 + Fn−2 , subject to the
initial conditions F0 = 0, F1 = 1.

IV.18.    Enumerative and Algebraic Combinatorics

(v) cayley [VI.46](/part-06/arthur-cayley-18211895). If An is the set of labeled trees on
  n vertices, then an = nn−2 . (A tree is a connected
  graph [III.34] with out cycles, and it is labeled if the
  vertices have distinct names.)
(vi) If An is the set of labeled simple graphs with n
  vertices, then an = 2 n(n−1)/2 . (A graph is simple if it
  has neither loops nor multiple edges.)
(vii) If An is the set of labeled connected simple graphs
  on n vertices (that is, graphs for which every vertex
  can be reached from every other by a path), then an
  is n! times the coefficient of x n in the power-series
  expansion of

(viii) If An is the set of Latin squares of size n (n . imes n
  matrices each of whose rows and columns is a per-
  mutation of {1, . . . , n}), then not even a good approx-
  imation for an is known.

  In 1982, Wilf defined an answer as follows.
Definition. An answer is a polynomial-time algorithm
(in n) for computing an .

   Wilf arrived at this definition after he refereed a
paper proposing a “formula” for the answer to ques-
tion (viii), and realized that its “computational com-
plexity” exceeds that of the caveman’s formula of direct
counting.
   What is a “formula”? It is really an algorithm that
inputs n and outputs an . For example, an = 2 n is
shorthand for the recursive algorithm

which takes O(n) steps. However, using the algorithm

takes O(log n) steps, much faster than Wilf demands.
In other cases, like enumerating self-avoiding walks,
the best algorithm known is exponential, O(c n ), and
any lowering of the constant c is a major advance. (A
self-avoiding walk is a sequence of points x0 , x1 , . . . , xn

in the two-dimensional integer lattice, where each xi
is one of the four neighbors of xi−1 and no two of
the xi are equal.) Notwithstanding these exceptions,
Wilf’s meta-answer is a very useful general guideline
for evaluating answers.

551
Traditionally, the main customers of enumeration
were probability and statistics. In fact, discrete prob-
ability is almost synonymous with enumerative com-
binatorics, since the probability of an event E occur-
ring is the ratio of the number of successful cases
divided by the total number. Also, statistical physics is,
by and large, weighted enumeration of lattice models
(see phase transitions and universality [IV.25]).
About fifty years ago, another important customer
came along: computer science. Here one is interested in
the computational complexity [IV.20](/part-04/computational-complexity) of algorithms:
that is, in the number of steps it takes to execute them.
. nfty
 2 k(k−1)/2
log                  xk .                                             2     Methods
k=0
k!
The following tools are indispensable to the enum era-
tive combinatorialist.
2.1   Decomposition
|A ∪ B| = |A| + |B|       (if A ∩ B = ∅).
In words: the size of the union of two disjoint sets
equals the sum of their sizes.
|A . imes B| = |A| · |B|.
In words: the size of the Cartesian product of two sets
(that is, the set of all pairs (a, b), where a ∈ A and
b ∈ B) equals the product of their sizes.
|AB | = |A||B| .
In words: the size of the set of functions from B to A
equals the size of A raised to the power the size of B.
if n = 0 then an = 1,
else an = 2 · an−1 ,
{0, 1}, equals 2 n .
if n = 0 then an = 1,
else if n is odd, then an = 2 an−1 ,
else an = a2 n/2
k
and if bnk , the number of elements of Bnk , is “nice” (and
even if it is not), then

an =   bnk .
k
The idea here is that it may be possible to take a set An
that is difficult to count, and split it up into disjoint sets
Bnk that are easier to count. For example, consider the
set An of example (iv). This can be split into a disjoint
union of subsets Bnk , where each Bnk consists of the

$552$

sequences in A n that have exactly k $2s$ . If there   are k

$n - k2s$ , then there must be $n - 2k1s$ , so $bnk = k$ . This yields answer (ii).

$2$ . $3$

Recursion

Suppose that A n can be decomposed in such a way that it is a combination of fundamental operations applied to the sets $A^{n} - {}^{1}$ , $A^{n} - {}^{2}$ , . . . , $A^{0}$ . Then $a^{n}$ satisfies a recurrence relation of the form $a^{n} = P(a^{n} - {}^{1}$ , $a^{n} - {}^{2}$ , . . . , $a^{0})$ . For example, let A n be the set of example (iv). If a sequence in A n starts with $a_{1}$ , then the rest of the sequence must add up to $n - 1$ , and if it starts with $a2$ , then the rest must add up to $n - 2$ .
Since when $n \ge 2$ exactly one of these possibilities occurs and both are possible, we can decompose $A^{n}$ into $1A^{n} - {}^{1}$ and $2A^{n} - {}^{2}$ , where $1A^{n} - {}^{1}$ is shorthand for the set of all sequences that begin with $a_{1}$ and continue with a sequence in $A^{n} - {}^{1}$ , and $2A^{n} - {}^{2}$ is defined similarly. Since the sizes of $1A^{n} - {}^{1}$ and $2A^{n} - {}^{2}$ are clearly $a^{n} - {}^{1}$ and $a^{n} - {}^{2}$ , it follows that $a^{n} = a^{n} - {}^{1} + a^{n} - {}^{2}$ , which yields answer (iii).
If A n is the set of legal bracketings with n pairs (example (iii)), then a typical legal bracketing can be written recursively as [L 1]$L^{2}$ , where $L^{1}$ and $L^{2}$ are smaller (possibly empty) legal bracketings. For example, if the bracketing is [[] []] [[]] [[] [[]]] then $L^{1} =$ [] [] and $L^{2} =$ [[]] [[] [[]]]. If $L^{1}$ has $k$ pairs, then $L^{2}$ has $n - 1 - k$ pairs. It follows that $A^{n}$ can be " $n - {}^{1}$ identified with the union $k = {}^{0}A^{k} \times A^{n} - {}^{1} - k$ , and, taking

$n - {}^{1}$

cardinalities, $a^{n} = k = {}^{0}a^{k}a^{n} - {}^{1} - k$ . This is a nonlinear (in fact, quadratic) and nonlocal recurrence, but it is nevertheless one that satisfies Wilf’s dictum.

$2$ . $4$

Generatingfunct ionology

According to Wilf, who coined this neologism by making it the title of his classic book (a free download from his Web site, even though it is still in print !) : A generating function is a clothesline on which we hang up a sequence of numbers for display. The method of generating functions is one of the most useful tools of the trade of enumeration. The generating function of a sequence, some times called its ztransform, is a discrete analogue of the laplace transform [III.91](/part-03/transforms), and indeed goes back to laplace [VI.23](/part-06/pierre-simon-laplace-17491827) himself.
If the sequence is (a n) $\infty$ , then its generat$n = 0\infty$

ing function f (x) is defined to be n $= {}^{0}$ a n x n . In other words, the terms of the sequence are regarded as the coefficients of a power series in x.

IV. Branches of Mathematics

Generating functions are so useful because information about the sequence (a n) translates to information about f (x) that is often easier to process, and after some manipulations one often gets additional information about f (x) that can be translated back into information about the sequence. For example, if $a^{0} = a^{1} = 1$ and $a^{n} = a^{n} - {}^{1} + a^{n} - {}^{2}$ when $n \ge 2$ , then we can do the following manipulations on f (x) :

$\infty\infty$

a $nx^{n} = a^{0} + a^{1}x +$

a n x n

 f(x) =n = 0 n = 2. nfty(an - {}1 + an - {}2)xn= {}1 + {}x +n = 2. nfty. nftyan - {}1 xn +an - 2 xn= {}1 + {}x +n = 2 n = 2. nfty. nftyan - {}1 xn - {}1 + x2 an - 2 xn - 2= 1 + x + xn = 2 n = 2= 1 + x + x(f(x) - 1) + x2 f(x)= 1 + (x + x2)f(x).

It follows that

$1f(x) =$ / $1 - x - x^{2}$

If one performs a partial-fraction decomposition, and expands the two resulting terms in a Taylor series, then one can obtain answer (i) to example (iv).

$3$

Weight Enumeration

According to the modern approach, pioneered by Pólya, Tutte, and Schützenberger, generating functions are neither “generating,” nor are they functions. Rather, they are formal power series that are weight enumerators of combinatorial sets. (Usually , but not always, these sets are infinite: for a finite set the corresponding “power series” has only finitely many nonzero terms and is therefore a polynomial .)

$\infty$

A power series n $= {}^{0}$ a n x n is called formal when one sheds its analytical connotation as a Taylor series of a function, and there by obviates the need to worry about convergence. For example, the sum n $= {}^{0}$ n! n! x n is perfectly legal as a formal power series even though it converges only when $x = 0$ . As for weight enumerators, consider the following situation. Suppose that we want to study the age distribution of a finite population. One way of doing this is to ask $121$ questions. For each $i$ between $0$ and $120$ , we ask those whose age is i to raise their hand.
Then we count each of these age-groups one by one, compiling

IV.18.   Enumerative and Algebraic Combinatorics

a table of ai (0 ⩽ i ⩽ 120), and finally computing the
generating function
But if the size of the population is much less than 120, it
is much more efficient, because fewer questions would
be needed, to ask every person their age and then to
declare the weight of a person of age i to be x i . Then
the generating function is the sum of these weights.
That is,

which is a natural extension of the caveman’s formula
of naive counting. Once we know f (x) we can eas-
ily compute statistically interesting quantities, like the
average and the variance, which work out to be μ =
f (1)/f (1) and σ 2 = f (1)/f (1)+μ −μ 2 , respectively.
   The general scenario is that we have an interesting
(finite or infinite) combinatorial set, let us call it A, and    a sequence (a1 · · · ar ) is x a1 +···+ak . The set A can be
a certain numerical attribute, α : A → N, which assigns
to each element of A a natural number. (Here we allow
0 as a natural number.) Then the weight enumerator of
A with respect to α is defined by the formula
We shall also use the notation |A|x for f (x). Obviously,
this equals

where an is the number of members of A whose
α equals n. Hence if we have some kind of explicit
expression for f (x), we immediately have an “explicit”
expression for the actual sequence an assuming, that
is, that one considers the operations needed to calcu-
late the nth coefficient an of f (x) as constituting an
explicit expression for an . Even if one does not, then it     L1 and L2 are legal bracketings, so is [L1 ]L2 . Let L be
is still often possible to get a “nice” formula for an , or,   the (infinite) set of all legal bracketings, and define the
failing this, to extract the asymptotics.
   The fundamental operations for naive counting also
hold for weighted counting: just replace | · | by | · |x .     [ ] is x and the weight of [ [ ] [ [ ] [ ] ] ] is x 5 . The set L
For example,

(if A ∩ B = ∅) and

Let us quickly see why the second of these is true. If
the members of A and B are endowed with numeri-
cal attributes α and β, respectively, and one defines an

553
attribute γ on A . imes B by letting γ(a, b) equal α(a)+β(b),
then


120
|A . imes B|x =          x γ(a, b)
f (x) =         ai x i .
(a, b)∈A . imes B
i=0                                                        
=
(a, b)∈A . imes B

=
(a, b)∈A . imes B
 
=

a∈A b∈B
                 
f (x) =
persons
a∈A                b∈B
= |A|x · |B|x .
Let us see how these facts can be useful. First, con-
sider the infinite set A, of all (finite) sequences of 1 s
and 2 s, and let the attribute be “sum of entries.” Then
the weight of 1221 is x 6 , and, in general, the weight of
naturally decomposed as
A = {φ} ∪ 1 A ∪ 2 A,
where φ is the empty word, and 1 A is short for the set

f (x) =     x α(a) .                       of all sequences obtained by prefixing a 1 to members
a∈A                              of A, and analogously for 2 A. Applying | · |x , we get
|A|x = 1 + x|A|x + x 2 |A|x ,
. nfty
                                      which, in this simple case, can be solved explicitly, to
an x n ,
yield, once again
n=0
1
|A|x =               .
1 − x − x2
A legal bracketing L is either empty (in which case
the weight is x 0 = 1), or else, as we have already
noted, it can be written as L = [L1 ]L2 , where L1 and
L2 are (shorter) legal bracketings. Conversely, whenever
weight of a legal bracketing to be x n , where n is the
number of bracket pairs [ ]. For example, the weight of
decomposes naturally as follows:
|A ∪ B|x = |A|x + |B|x
where φ denotes the empty word and [L] × L denotes
|A . imes B|x = |A|x · |B|x .
L2 in L. This leads to the nonlinear (in fact, quadratic)
equation
|L|x = 1 + x|L|2 x ,

554

which yields, thanks to the Babylonians, the explicit
expression
This in turn gives us the answer to example (iii) above,
via Newton’s binomial theorem.
   Legal bracketings are equivalent to so-called binary
trees, that is, unlabeled ordered trees where every
vertex has either no children or exactly two chil-
dren. For instance, when we write the legal bracketing
[ [ ] [ ] ] [ [ ] ] [ [ ] [ [ ] ] ] in the form [L1 ]L2 we can think
of [ [ ] [ ] ] [ [ ] ] [ [ ] [ [ ] ] ] as the parent, with children
L1 = [ ] [ ] and L2 = [ [ ] ] [ [ ] [ [ ] ] ]. Then L1 ’s chil-
dren are φ and [ ], while L2 ’s are [ ] and [ [ ] [ [ ] ] ]. This
process continues until we have reached φ down every
branch of the family.
   If we try to count penta-trees instead, where each ver-
tex may only have exactly zero or five children, then the
generating function, alias weight-enumerator, satisfies
the quintic equation
which, according to abel [VI.33](/part-06/niels-henrik-abel-18021829) and galois [VI.41](/part-06/variste-galois-18111832), is
not solvable by radicals (see the insolubility of the
quintic [V.21](/part-05/the-insolubility-of-the-quintic)). However, solvability by radicals is not
everything. More than 200 years ago, lagrange [VI.22](/part-06/joseph-louis-lagrange-17361813)
devised a beautiful and extremely useful formula for
extracting the coefficients of the generating function
from the equation it satisfies, now called the Lagrange
in version formula. Using it one can easily show that the
number of complete k-ary trees with (k−1)m+1 leaves
is

  A multivariate generalization of the Lagrange inver-
sion formula, discovered by the great Bayesian proba-
bilist I. J. Good, enables one to enumerate colored trees
and many other extensions.
3.1   Enumeration Ansatzes
If one wants to turn enumerative combinatorics into
a theory rather than a collection of solved problems,
one needs to introduce classification, and enumer-
ation paradigms for counting sequences. But since
“paradigm” is such a pretentious word, let us use the
much humbler German word “ansatz,” which roughly
means “form of solution.”
   Let (an ). nfty

IV. Branches of Mathematics
be its generating function. If we know the “form” of an ,
. qrt{1} − 1 − 4 x
|L|x =                  .                     (i) If an is a polynomial in n, then f (x) has the form
2 x
P (x)
f (x) =              ,
(1 − x)d+1
where P is a polynomial function and d is the
degree of the polynomial that describes an .
(ii) If an is a quasi-polynomial in n (i.e., there exists an
integer N such that for each r = 0, . . . , N − 1, the
function m → am N+r is a polynomial in m), then,
for some (finite) sequence of integers d1 , d2 , . . .
and some polynomial function P ,
P (x)
f (x) =
(1 − x)d1 (1 − x 2 )d2 (1 − x 3 )d3 · · ·
(iii) If an is C-recursive, that is, if it satisfies a linear
recurrence equation with constant coefficients
an = c1 an−1 + c2 an−2 + · · · + cd an−d
(a good example is the Fibonacci sequence), then
f (x) is a rational function of x: that is, f (x) =
f = x + f 5,
P (x)/Q(x), where P and Q are polynomials.
(iv) If an satisfies a linear recurrence equation of the
form
c0 (n)an = c1 (n)an−1 + c2 (n)an−2
+ · · · + cd (n)an−d ,
where the coefficients ci (n) are polynomial in n,
then it is said to be P-recursive. (For example, an =
n! is P-recursive since we have the recurrence an =
nan−1 .) If this is the case, then f (x) is D-finite,
(km)!                                              which means that it satisfies a linear differential
.                                      equation with polynomial coefficients (in x).
((k − 1)m + 1)!m!
In the case of an = n! the recurrence an = nan−1 is
first order. A natural example of a P-recursive sequence
satisfying a higher-order linear recurrence with polyno-
mial coefficients is the sequence that counts the num-
ber of involutions on {1, . . . , n}. (An involution is a
permutation that equals its inverse.) Let us call this
number wn . The sequence (wn ) satisfies the recurrence
relation
wn = wn−1 + (n − 1)wn−2 .
This recurrence follows from the fact that in the per-
mutation n belongs either to a 1-cycle or to a 2-cycle.
The former case accounts for wn−1 of the involutions,
and the latter for (n−1)wn−2 of them. (There are n − 1
n=0 be a sequence, and let
. nfty
                                     ing the resulting cycle leaves an involution of the n − 2
f (x) =         an x n
n=0
elements {1, . . . , i − 1, i + 1, . . . , n − 1}.)

$IV$ . $18$ .

Enumerative and Algebraic Combinatorics

$4$

Bijective Methods

This last argument was a simple example of a bijective proof, in this case, of a recurrence for the number of involutions on n objects. Contrast it with the following proof. The number of involutions of { $1$ , . . . , n} with exactly $k 2$ - cycles is $n (2k)$ ! ,

$2k k$ ! $2^{k}$

because we must first choose the $2k$ elements that will participate in the $k_{2}$ - cycles , and then match them up into (unordered) pairs, which can be done in $(2k)$ !

$({}^{2k} - {}^{1})({}^{2k} - {}^{3})$ · · · ${}^{1} = k$ ! $2k$

ways. Hence

$n (2k)$ !

$w^{n} =$ / $2k k$ ! $2^{k}$

k

Nowadays such sums can be handled completely automatically, and if one inputs this sum to the Maple package EKHAD (downloadable from my Web site), one would get the recurrence $w^{n} = w^{n} - {}^{1} + (n - 1)w^{n} - {}^{2}$ as the output, together with a (completely rigorous !) proof. While the so-called Wilf-Zeilberger (WZ) method is able to handle many such problems, there are many other cases where one still needs a human proof. In either case such proofs involve (algebraic , and some times analytic) manipulations.
The great combinatorialist Adriano Garsia derogatorily calls such proofs “manipulatorics,” and real enumerators do not manipulate, or at least try to avoid it whenever possible. The preferred method of proof is by bijection [I.2](/part-01/language-and-grammar). Suppose one has to prove that $|A^{n}| = |B^{n}|$ for every n, where A n and B n are combinatorial families. The “ugly way” is to get, by some means or other, algebraic or analytic expressions for $a^{n} = |A^{n}|$ and $b^{n} = |B^{n}|$ .
Then one manipulates a n , getting another expression a n , which in turn leads to yet another expression a n , and if one is patient enough, and clever enough, and in luck, or if the problem is not too deep, one eventually arrives at b n , and the result follows. On the other hand, the nice way of proving that $|A^{n}| = |B^{n}|$ is by constructing a ( preferably nice) bijection T n : A n $\to$ B n , which immediately implies, as a corollary, that $|A^{n}| = |B^{n}|$ . In addition to being more aesthetically pleasing, a bijective proof is also philosophically more satisfactory.
In fact, the notion of (cardinal) number is a highly sophisticated derived notion based on the much more $555$ basic notion of being in bijection. Indeed, according to frege [VI.56](/part-06/gottlob-frege-18481925), the cardinal numbers are equivalence classes, where the equivalence relation [I.2](/part-01/language-and-grammar) is “is in bijective correspondence with.” Saharon Shelah said that people have been exchanging objects, in a one-to-one way, since long before they started to count.
Also, a bijective proof explains why the two sets are equinumerous, as opposed to just certifying the formal correctness of this fact. For example, suppose that Noah had wanted to prove that there were as many male as female creatures in his Ark. One way of proving this would have been to count the males and count the females, and check that the two resulting numbers were indeed the same. But a much better, conceptual, proof would have been to note that there is an obvious one-to-one correspondence between the set M of males and the set F of females: the function w :
M $\to$ F defined by w (x)  =  Wife Of (x) is a bijection, with inverse h : F $\to$ M defined by h (y)  =  Husband Of (y). A classic example of a bijective proof is Glaisher’s proof of euler’s [VI.19](/part-06/leonhard-euler-17071783) “odd equals distinct” partition theorem. A partition of an integer n is a way of writing it as a sum of positive integers, where order does not matter. For example, $6$ has eleven partitions: $6$ , $51$ , $42$ , $411$ , $33$ , $321$ , 3111 , $222$ , 2211 , 21111 , 111111 . (Here 3111 is shorthand for the sum $3 + 1 + 1 + 1$ , and so on.
Since order does not matter, we count 3111 as the same partition of $6$ as 1311 , 1131 , and 1113 . It is convenient to write the partitions with their numbers in decreasing order, as we have done .) A partition is called odd if all its parts are odd, and it is called distinct if all its parts are distinct. Let Odd (n) and Dis (n) be the sets of odd and distinct partitions of n, respectively. For example, Odd $(6) ={51}$ , $33$ , 3111 , 111111 and Dis $(6) = {6}$ , $51$ , $42$ , $321$ . Euler proved that |$Odd$(n)| = |$Dis$(n)| for all n. His “manipulatorics” proof goes as follows.
Let o (n) and d (n) be the number of odd and distinct partitions of n, respectively, and let us define the generating functions

$\infty\infty$

o (n) q n

d (n) q n .

$g(q) =f(q) =$

and

$n = 0n = 0$

With the help of the “multiplication principle” for weighted counting, Euler showed that

$\infty\infty 1(1 + q^{i})$ .

$f(q) =g(q) =$

and

 - 

$2i + 11$

q

$i = 0i = 0$

556

Using the algebraic identity 1 + y = (1 − y 2 )/(1 − y),
we have

. nfty

. nfty
. nfty

Hence g(q) = f (q), and the identity o(n) = d(n)
follows by extracting the coefficient of qn .
   For a very long time, these kinds of manipulation
were considered to belong to the realm of analysis,
and in order to justify the manipulations of the infi-
nite series and products, one talked about the “region
of convergence,” usually |q| < 1, and every step had
to be justified by the appropriate analytical theorem.
Only relatively recently did people come to realize that
no analysis need be involved: everything makes sense
in the completely elementary and much more rigorous
(from the philosophical viewpoint) algebra of formal
power series. One still needs to worry about conver-
gence, so as to exclude, for example, an infinite product

. nfty
like i=0 (1 + x), but the notion of convergence in the
ring of formal power series is much more user-friendly
than its analytical namesake.
   Even though invoking analysis was a red herring,
Euler’s proof, while purely algebraic and elementary,
is nevertheless still manipulatorics. It would be much
nicer to find a direct bijection between the sets Dis(n)
and Odd(n). Such a bijection was given by Glaisher.
Given a distinct partition, write each of its parts as
2 r · s, where s is odd, and replace it by 2 r copies of s.
(For example, 12 = 4 · 3, so we would replace 12 by
3 + 3 + 3 + 3.) The output is obviously a partition of the
same integer n, but now into odd parts. For example,
the partition (10, 5, 4) is transformed to the new par-
tition (5, 5, 5, 1, 1, 1, 1). To define the inverse trans for-
mation, take an odd part a and count how many times
it shows up. If it shows up m times, then write m in
binary notation, m = 2 s1 + · · · + 2 sk , and replace the m
copies of a by the k parts: 2 s1 a, . . . , 2 sk a. It is not hard   ciple, one that should be useful in many attempts to
to check that if you do the first transformation to a par-
tition in Dis(n) and then do the second transformation,
you get back to the partition you started with.
   When we perform algebraic (and logical, and even
analytical) manipulations, we are really rearranging and
combining symbols, and hence we are doing combina-
torics in disguise. In fact, everything is combinatorics.

IV. Branches of Mathematics
All we need to do is to take the combinatorics out of
the closet, and make it explicit. The plus sign turns
. nfty

                                          into (disjoint) union, the multiplication sign becomes
1 − q2 i
(1 + qi ) =
i=0
1 − qi
But what about the combinatorial counterpart of the
2 i
i=0 (1 − q )                    minus sign? In 1982, Garsia and Steven Milne filled this
=
i=0 (1 − q )    i=0 (1 − q
2 i               2 i+1 )
gap by producing an ingenious “involution principle”
. nfty
         1                                that enables one to translate the implication
=
1 − q2 i+1
i=0                                                a=b     and c = d      ⇒    a−c =b−d
into a bijective argument, in the sense that if C ⊂ A and
D ⊂ B, and there are natural bijections f : A → B and
g : C → D establishing that |A| = |B|, and |C| = |D|,
then it is possible to construct an explicit bijection
between A\C and B\D. Let us define it in terms of peo-
ple. Suppose that in a certain village all the adults are
married, with the result that there is a natural bijec-
tion from the set of married men to the set of mar-
ried women, m → Wife Of (m), with its inverse w →
Husband Of (w). In addition, some of the people have
extramarital affairs, but only one per person, and all
within the village. There is a natural bijection from the
set of cheating men to the set of cheating women, called
m → Mi stress Of (m), with its inverse w → Lover Of (w).
It follows that there are as many faithful men as there
are faithful women. But how do we match them up?
(One might imagine, for example, that each faithful man
wants a faithful woman to go to church with him.)
Here is how it is done. A faithful man first asks his
wife to come with him. If she is faithful, she agrees. If
she is not, she has a lover, and that lover has a wife. So
she tells her husband: “Sorry, hubby, I am going to the
pub with my lover, but my lover’s wife may be free.” If
this happens, then the man asks the wife of the lover
of his wife to go with him, and if she is faithful, she
agrees. If she is not he keeps asking the wife of the lover
of the woman who has just rejected his proposal. Since
the village is finite, he will eventually get to a faithful
woman.
The reaction of the combinatorial enumeration com-
munity to the involution principle was mixed. On the
one hand it had the universal appeal of a general prin-
find bijective proofs of combinatorial identities. On the
other hand, its universality is also a major drawback,
since involution-principle proofs usually do not give
any insight into the specific structures involved, and
one feels a bit cheated. Such a proof answers the let-
ter of the question, but it misses its spirit. Given a
proof of this kind, one still hopes for a really natural,

$IV$ . $18$ .

Enumerative and Algebraic Combinatorics

“involution-principle-free proof.” This is the case, for instance, with the celebrated Rogers-Ramanujan identity, which states that the number of partitions of an integer into parts that leave remainder $1$ or $4$ when divided by $5$ equals the number of partitions of that integer with the property that the difference between any two parts is at least $2$ . For example, if $n = 7$ the cardinalities of 61 , 4111 , 1111111$and 7 ,$61 , $52$ are the same.
Garsia and Milne invented their notorious principle in order to give a Rogers-Ramanujan bijection, there by winning a 50 prize from George Andrews. However, finding a really nice bijective proof is still an open problem. A quintessential example of a bijective proof is Prüfer’s proof of cayley’s [VI.46](/part-06/arthur-cayley-18211895) celebrated result that there are n n $- 2$ labeled trees on n vertices (example (v) earlier) . Recall that a labeled tree is a labeled connected simple graph with out cycles. Every tree has at least two vertices with only one neighbor (these are called leaves).
A certain mapping called the Prüfer bijection associates with every labeled tree T a vector of integers ( a1$, . . . , a^{n}$ - 2), with $1 \le$ ai$\le n$ for each i. This vector is called its Prüfer code. Since there are n n $- 2$ such vectors, Cayley’s formula follows once we have defined the mapping f : Trees $\to$ Codes and proved that it is indeed a bijection. This really needs four steps: defining f , defining its alleged inverse map g, and proving that g ◦ $f$ and $f$ ◦ g are the identity maps on their respective domains. The mapping f is defined recursively as follows.
If the tree has $2$ vertices, then its code is the empty sequence. Otherwise, let $a_{1}$ be the (sole) neighbor of the smallest leaf and let ($a_{2}$ , . . . , a n $- 2$ ) be the code of the smaller tree obtained by deleting that leaf. $5$ Exponential Generating Functions So far, when we have discussed generating functions, we have been talking about ordinary generating functions (or OGFs) . These are ideally suited for counting ordered structures like integer partitions, ordered trees, and words. But many combinatorial families are really sets, where the order is immaterial.
For these the natural concept is that of an exponential generating function (or EGF). The EGF of a sequence { a (n) } $\infty n = 0$ is defined to be $\infty$ a (n) x n . n! $n = 0$ Labeled objects can be often viewed as sets of smaller irreducible objects. For example, a permutation is the $557$ disjoint union of cycles, a set partition is the disjoint union of nonempty sets, a (labeled) forest is the disjoint union of labeled trees, and so on.
Suppose that we have two combinatorial families A and B, and suppose that there are a (n) labeled objects of size n in the A family, and b (n) in the B family. We can construct a new set of labeled objects $C = A \times B,$ where the labels are disjoint and distinct, and define the size of a pair to be the sum of the sizes of the components.
We have n n $c(n) =$ a (k) b (n - k), k $k = 0$ since we must (i) decide the size of the first component, k (an integer between $0$ and n), which forces the size of the second component to be n - k, (ii) decide which of the n labels go to the first compon nent (k ways), and (iii) pick the objects for each component from the A and B families, respectively, using the available labels (a (k) b (n - k) ways). Multiplying both sides by x n / n ! and summing from $n = 0$ to $n = \infty$ yields $\infty\infty$ n $b(nk) n - k$ c (n) a (k) xn = x k x (nk) ! n! k!
$n = 0n = 0k = 0\infty\infty b(nk) n - k$ a (k) x $k = x$ . (nk) ! k! $k = 0nk = 0$ Hence EGF (C) = EGF (A) EGF (B). Iterating, we get EGF ( A1$\times$ A2$\times$ · · · $\times$ Ak$) =$ EGF ( A1 ) · · · EGF ( A  k) . In particular, if all the A i are the same, we have that the EGF of ordered k-tuples, A k , equals [EGF (A)] k . But if “order does not matter,” then the EGF of k-sets of Aobjects is [EGF (A)] k / k ! , since there are exactly k! ways of arranging a k-set into an ordered array (since all labels are distinct, all these objects are different).
Summing from $k = 0$ to $k = \infty$ we get the “fundamental theorem of exponential generating functions.” If B is a labeled combinatorial family that can be viewed as sets of “connected components” that belong to a combinatorial family A, then EGF (B) $=$ exp [EGF (A)] . This useful theorem was part of the physics folklore for many years, and was also implicit in many older combinatorial proofs. However, it was explicated only

558

in the early 1970 s. It was fully “categorized” by means
of Joyal’s theory of species, which grew to be a beau-
tiful theory of enumeration in the hands of the école
Québecoise (the Labelle and Bergeron frères, Leroux,
and others).
   Here are some venerable examples. Let us try to find
the EGF of set partitions. That is, let us try to figure out
an expression for
where b(n) (so-called Bell numbers) denotes the num-
ber of set partitions of an n-element set.
   Recall that a set partition of a set A is a set of pairwise-
disjoint nonempty subsets of A, {A1 , . . . , Ar }, such that
the union of all the Ai equals A. For example, the set
partitions of the 2-element set {1, 2} are {{1}, {2}} and
{{1, 2}}.
   The atomic objects in this example are nonempty sets.
(We think of a set A as being the “trivial” partition of
itself into just one set.) Let a(n) be the number of ways
of partitioning a set of size n into one nonempty set.
Clearly, when n = 0 this cannot be done, so a(0) = 0.
When n ⩾ 1 there is exactly one way of doing it, so the
EGF of the sequence a(n) is

It follows immediately from the fundamental theorem
that

an identity of Bell. Nowadays, with computer algebra
systems, this can be used immediately to crank out the
first 100 terms of the sequence b(n). For example, in
Maple one simply types
  taylor(exp(exp(x)-1), x=0,101);
so this is definitely an answer in the Wilfian sense. We
can also easily derive recurrences (albeit ones that need
at least O(n) memory), by differentiating both sides of
(1) and comparing coefficients.
   That was really easy, so let us go on and prove some-
thing much deeper. How about an EGF-style proof of
Levi Ben Gerson’s celebrated formula for the number
of permutations on n objects, n! (example (ii) ear-
lier)? Every permutation can be decomposed into a
disjoint union of cycles, so the atomic objects are
now cycles. How many n-cycles are there? The answer
is of course (n − 1)!, since (a1 , a2 , . . . , an ) is the

IV. Branches of Mathematics
same as (a2 , a3 , . . . , an , a1 ), which is the same as
(a3 , . . . , an , a1 , a2 ), etc., which means that we can pick
the first entry arbitrarily, after which we have (n − 1)!
choices for placing the remaining entries. The EGF for
cycles is therefore
. nfty
                    . nfty

(n − 1)!             1
xn =
n=1
n!            n=1
n
. nfty
                                                                = − log(1 − x) = log(1 − x)−1 .
b(n)      n
x ,
n=0
n!                                  Using the fundamental theorem, we get that the EGF of
permutations is
. nfty
           . nfty

n!
exp(log(1 − x)−1 ) = (1 − x)−1 =               xn =               xn,
n=0
n!
and voilà we have a beautiful new proof that the
number of permutations on n objects is n!.
This argument may not look very impressive. But a
slight modification leads immediately to the (ordinary)
generating function for the number of permutations on
{1, . . . , n} with exactly k cycles, which we shall denote
by c(n, k). Here we are fixing n and letting k vary, so
n
the generating function is Cn (α) = k=0 c(n, k)αk . All
we have to do to calculate this is go from naive count-
ing to weighted counting, and assign to each permu-
. nfty
tation the weight α#cycles . The fundamental theorem of
   1 n
A(x) = 0 +
n=1
n!                                 word to weighted counting. The weighted EGF for cycles
is α log(1−x)−1 , so the weighted EGF for permutations
is
. nfty
  b(n) n

x = ee −1 ,            (1)
exp(α · log(1 − x)−1 ) = (1 − x)−α =
(α)n
n!                                                                                                        xn,
n=0
n=0
n!
where
(α)n = α(α + 1) · · · (α + n − 1)
is the so-called rising factorial. We have therefore
derived the far less trivial result that the number of
permutations of {1, . . . , n} with exactly k cycles equals
the coefficient of αk in (α)n .
About ten years ago (Ehrenpreis and Zeilberger 1994)
I used this technique to give a combinatorial proof of
the Pythagorean theorem in the form
sin2 z + cos2 z = 1.
The functions sin z and cos z are the weighted EGFs for
increasing sequences of odd and even lengths, respec-
tively, with weight (−1)[length/2] . Hence the left-hand
side is the weighted EGF for ordered pairs of increasing
sequences
a1 < · · · < ak ,

IV.18.   Enumerative and Algebraic Combinatorics

such that k and r have the same parity, the sets
{a1 , . . . , ak } and {b1 , . . . , br } are disjoint, and the union   mers was Pólya’s initial motivation (see mathematics
of the two sets is {1, 2, . . . , k + r }. There is a killer
involution on these sets of pairs defined as follows.
  If ak < br then map the pair to

and otherwise map it to

  For example, the pair

whose sign is (−1)2 · (−1)4 = 1, goes to the pair

whose sign is (−1) · (−1)3 = −1 (and vice versa).
   Since this mapping changes the sign, and is an involu-
tion, all such pairs can be paired up into mutually can-
celing pairs. But this mapping is undefined for one spe-
cial pair, namely the pair (empty, empty), whose weight
is 1. Therefore, the EGF for the sum of the weights of
all pairs is 1, which explains the right-hand side.
   Yet another application of this method is a proof
of André’s generating function for the number of up–
down permutations. A permutation of a1 · · · an is
called up–down (or some times zigzag) if a1 < a2 >
a3 < a4 > a5 < · · · . Let an be the number of up–down
permutations. Then

This is equivalent to saying that

Can you find the appropriate set and the killer involu-
tion?

Often in enumeration it is easy enough to count labeled
objects, but what about unlabeled ones? For example,
the number of labeled (simple) graphs on n vertices
(example (vi)) is trivially 2 n(n−1)/2 , but how many un-
labeled graphs are there on n vertices? This is much
harder, and in general there are no “nice” answers, but
the best known way is via a powerful technique initi-
ated by Pólya, which was largely anticipated by Red-
field. Pólya enumeration lends itself very efficiently to
counting chemical isomers, since, for example, all the

559
carbon atoms “look the same.” Indeed, counting iso-
and chemistry [VII.1 §2.3](/part-07/mathematics-and-chemistry)).
The main idea is to view unlabeled objects as equiv-
alence classes of easy-to-count labeled objects, and to
count these equivalence classes. But what is the equiv-
a1 < · · · < ak < br ,
alence? The answer is that there is always a symme-
try group [I.3 §2.1](/part-01/fundamental-definitions) involved, and it leads to a natural
equivalence relation. Let the symmetry group be G, and
a1 < · · · < ak−1 ,
let the set of labeled objects be A. Then two objects a
and b of A are regarded as equivalent if b = g(a) for
1, 3, 5, 6
is some symmetry g in the group G that transforms a
to b. This is easily seen to be an equivalence relation
1, 3, 5, 6, 12
2                                                        Orbit(a) = {g(a) | g ∈ G},     a ∈ A,
which are known as orbits. Calling each orbit a “family,”
we have the task of counting the number of families.
Note that G is a subgroup of the group of permutations
of the finite set A.
Suppose that there is a picnic consisting of many
families and we want to count the number of families.
One way would be to define some “canonical head” of
each family, say “mother,” and count the number of
mothers. But some daughters look like mothers, so this
is not so easy. On the other hand, you cannot just count
everybody, since then you would count each family sev-
eral times. The problem is that “naive” counting of peo-
. nfty
 a(n)
x n = sec x + tan x.                      and this is inappropriate if we are trying to count fam-
n=0
n!
ilies. If instead we were to ask each person “How big
is your family?” and add to our count the reciprocal
. nfty
 a(n)                                          of that number, then the calculation would come out
cos x ·
n!                                      just right, since a family of size k would get a credit
n=0
of 1/k for each of its members, and would therefore
have been counted exactly once by the end. Going back
to counting orbits, we see by the same reasoning that
their number is
6    Pólya–Redfield Enumeration
.
a∈A
|Orbit(a)|
The conceptual opposite of “orbit of a” is the subgroup
of members of G that fix a:
Fix(a) = {g ∈ G | g(a) = a}.
(This is some times known as the stabilizer of a.) To
each element b = ga in the orbit of a, we can asso-
ciate the left coset g Fix(a) of Fix(a). This association
turns out to be a well-defined one-to-one correspon-
dence between the orbit of a and the cosets of Fix(a)

$560$

in G, from which it follows that the size of Orbit (a) is $|G/$ Fix (a)| . We can therefore substitute |$Fix$(a)|/|G|$for$1/| Orbit (a)| in the previous formula, which implies that the number of orbits is

1|$Fix$(a)| .

$|G|^{a}\in^{A}$

Let us use the notation χ (statement) to stand for $1$ if the statement is true and $0$ if it is false. The$n^{1}1|$ Fix $(a)| =$

χ (g (a)  =  a)

$|G|^{a}\in^{A}|G|a\inAg\inG{}^{1}$

 = 

χ (g (a)  =  a)

$|G|g\inGa\inA1$

 = 

fix (g),

$|G|^{g}\in^{G}$

where fix (g) is the number of fixed points of g (when g is viewed as a permutation of A) . We have just proved what used to be called Burnside’s lemma, but it goes back to cauchy [VI.29](/part-06/augustin-louis-cauchy-17891857) and frobenius [VI.58](/part-06/ferdinand-georg-frobenius-18491917). It states that the total number of orbits equals the average number of fixed points of g, over all transformations g in G. If the group G is the full symmetric group of all the permutations of A, then the average number of fixed points equals $1$ (since in this trivial case there is only one orbit !) .
 Enter Pólya. The objects that he was interested in counting (e . g . , chemical isomers, or colorings of the faces of the cube) were all naturally functions from an underlying set to a set of colors (or atoms). Let us call the underlying set U and the set of colors C. A symmetry of U gives rise in a natural way to a transformation of the set of functions f : U $\to$ C. Given a function f one defines a new function gf by g (f) (u)  =  f (g (u)) .
(If we think of f as a coloring, then gf is the new coloring that assigns to u the color that f assigned to g (u).) Now let us think about the number of fixed points of g in the set of C-colorings of U . Such a fixed point is a coloring f that equals gf : that is, f (u)  =  f (gu) for every u. But then $f(u) = f(gu) = f(g^{2}u) =$ · · · , which means that, given any cycle of g, f must assign the same color to all members of that cycle. It follows that the number of fixed colorings of g is c # cycles (g), where $c = |C|$ is the number of colors.
Applying Burnside’s lemma, we may deduce that the number of different colorings of U (up to G-equivalence) is $1$   # cycles (g) c ,

$|G|^{g}\in^{G}$

since an equivalence class of colorings is simply an orbit of one of the colorings in that class.

IV. Branches of Mathematics

Here is a simple application. How many necklaces (with out a clasp) are there that consist of p beads (where p is a prime) and that use a different colors? The underlying set is 0 , . . . , $p - 1$ , and the symmetry group is Z p , the cyclic group of order p. As usual, regard the elements of the symmetry group as permutations of the set of beads. Since p is a prime, there are p $- 1$ elements of Z p with one cycle (of length p), and one element (the identity permutation) with p cycles (all of length $1$ ). It follows that the number of necklaces is

$a^{p} - a1 ( (p - 1)$ · $a + 1$ · $a^{p}) = a +$ / p

p

In particular, since this number is necessarily an integer, we get as a bonus a combinatorial proof of fermat’s little theorem [III.58](/part-03/modular-arithmetic) : that a p  -  a is always a multiple of p. Perhaps one day there will be an equally nice combinatorial proof of Fermat’s last theorem. All one has to do is to prove that there is no bijection from the union of the set of straight necklaces of size n using x colors, and the set of such necklaces using y colors, to the set of necklaces using z colors (with n $> 2$ , of course).
If one wants to keep track of how many beads there are of each color, one simply replaces straight counting by weighted counting, and c # cycles (g) is replaced by $(x^{1} +$ · · · $+ x^{c})α^{1}$ · ((x1)2 + · · · + (xc)2)α2 · · · (assuming that g has $α^{1} 1$ - cycles , $α^{2} 2$ - cycles , etc .). The resulting expression is the celebrated cycle-index polynomial.

$6$ . $1$

The Principle of Inclusion-Exclusion and

Möbius In version

Another pillar of enumeration is the principle of inclusion-exclusion (nicknamed PIE). Suppose that there are n sins, $s^{1}$ , . . . , s n , that a person may succumb to, and suppose that for each set of sins S, A S is the set of people who have all the sins in S (and possibly others). Then the number of good people (with out sins) is $( - 1)|S||A^{S}|$ . S For example, if the set A is the set of all permutations

$\pi$ of 1 , . . . , n} and the ith sin is having $\pi$ [i ] =  i, then $|A^{S}| = (n - |S|)$ ! , and we get that the number of derangements (permutations with out fixed points) is n $n_{1}$ n ( - 1)k( - 1)k , $(n - k)$ ! $= n!$ k! k $k = 0k = 0$

IV.18.   Enumerative and Algebraic Combinatorics

which yields the answer : “closest integer to n!/e.” This    an array of k left-justified rows with λ1 entries in the
is some times called the “umbrella problem”: if on a
rainy day n absent-minded people go to a party and
leave an umbrella by the door, and if on their depar-
ture they each take a random umbrella, then the prob-
ability that nobody ends up with the right umbrella is
about 1/e.
   The PIE is a special case of Möbius in version on gen-
eral partially ordered sets (posets) where the poset hap-
pens to be the Boolean lattice. This realization was pub-
lished in a seminal paper by Rota (1964) and reprinted
in his collected works. It is considered by many to be the   Let f. ambda be the number of standard Young tableaux of
big bang that started modern algebraic combinatorics.
Möbius’s original in version formula is recovered when
the partially ordered set is N and the partial order is
divisibility.
   A contemporary account of enumeration from the
“algebraic” point of view can be found in a marvelous
two-volume set by Stanley (2000), which I strongly
recommend.

So far I have described one of the routes to algebraic
combinatorics: abstraction and conceptualizati on of
classical enumeration. The other route, “concretization
of the abstract,” is almost every where dense in math-
ematics, and cannot be described in a few pages. Let
me quote from the preface of the excellent New Per-
spec tiv es in Algebraic Combinatorics by Billera et al.
(1999).
  Algebraic combinatorics involves the use of techniques     field, and as mathematics is becoming more and more
  from algebra, topology, and geometry in the solution
  of combinatorial problems, or the use of combinato-
  rial methods to attack problems in these areas. Prob-
  lems amenable to the methods of algebraic combina-
  torics arise in these or other areas of mathematics or     will guarantee that algebraic combinatorialists will stay
  from diverse parts of applied mathematics. Because of
  this interplay with many fields of mathematics, alge-
  braic combinatorics is an area in which a wide variety     Further Reading
  of ideas and methods come together.
7.1   Tableaux
An interesting class of objects that initially came up
in group representation theory, but that turned out
to be useful in many other areas—such as, for exam-
ple, the theory of algorithms—are Young tableaux. They
were first used by Reverend Alfred Young to construct
explicit bases for the irreducible representations
[IV.9 §2](/part-04/representation-theory) of the symmetric group [III.68](/part-03/permutation-groups). For any par-
tition λ = λ1 · · · . ambda k of n, a Young tableau of shape . ambda is     and 2. Cambridge: Cambridge University Press.

561
first row, λ2 entries in the second row, and so on, such
that every row and every column is increasing, and the
set of entries is {1, 2, . . . , n}. For example, there are two
standard Young tableaux whose shape is 22,
1    2
,
3    4          2   4
and three of shape 31,
1   2    3
.
4
shape λ. For example, for n = 4: f4 = 1, f31 = 3, f22 =
2, f211 = 3, and f1111 = 1. The sum of the squares of
these numbers is 12 + 32 + 22 + 32 + 12 = 24 = 4!.
The number f. ambda is the dimension of the irreducible
representation parametrized by λ. It follows by a result
in representation theory [IV.9](/part-04/representation-theory) known as Frobenius
reciprocity that the same is true for all n. In other
words,
fλ2 = n!,
7    Algebraic Combinatorics
a result known as the Young–Frobenius identity. A gor-
geous bijective proof of this identity, which has many
beautiful properties, was given by Gilbert Robinson
and Craige Schensted and later extended by Donald
Knuth, and is now known as the Robinson–Schensted–
Knuth correspondence. It inputs a permutation π =
π1 π2 · · · πn , and outputs a pair of Young tableaux of
the same shape, there by proving the identity.
Algebraic combinatorics is currently a very active
concrete, constructive, and algorithmic, there are going
to be many more combinatorial structures discovered
in all areas of mathematics (and science!) and this
very busy for a long time to come.
Billera, L. J., A. Bjorner, C. Greene, R. E. Simion, and R P.
Stanley, eds. 1999. New Perspectives in Algebraic Combi-
natorics. Cambridge: Cambridge University Press.
Ehrenpreis, L., and D. Zeilberger. 1994. Two EZ proofs of
sin2 z + cos2 z = 1. American Mathematical Monthly 101:
691.
Rota, G.-C. 1964. On the foundations of combinatorial
theory. I. Theory of Möbius functions. Zeitschrift für
Wahrscheinlichk eitstheorie und Verwandte Gebiete 2:340–
68.
Stanley, R. P. 2000. Enumerative Combinatorics, volumes 1