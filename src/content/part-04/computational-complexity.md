# Computational Complexity

$IV$ . $20$ .

Computational Complexity

algorithms for producing them are not just interesting on their own, but also have important applications in other areas. For example, explicit constructions of error-correcting codes that are as good as random ones are of major interest in coding and information theory [VII.6](/part-07/reliable-transmission-of-information), and explicit constructions of certain Ramsey-type colorings may have applications in derandomization [IV . 20 § 7 . 1 . 1 ](/part-04/computational-complexity) (the process of converting randomized algorithms into deterministic ones).
It turns out, however, that the problem of finding a good explicit construction is often very difficult. Even the simple proof of Erdős, described in section $3$ . $2$ , that there are red / blue colorings of graphs with $2^{k}/ {}^{2}$ ! vertices containing no monochromatic clique of size k leads to an open problem that seems very difficult. Can we construct, explicitly, such a graph with $n \ge (1 +)$ k vertices in time that is polynomial in n? Here we allow to be any constant, as long as it is positive. This problem is still wide open, despite considerable efforts from many mathematicians.
The application of other advanced tools, such as algebraic and analytic techniques, spectral methods, and topological proofs, also tends to lead in many cases to nonconstructive proofs. The conversion of these to algorithmic arguments may well be one of the main future challenges of the area. Another interesting recent development is the increased appearance of computer-aided proofs in combinatorics, starting with the proof of the four-color theorem [V.12](/part-05/the-four-color-theorem).
To incorporate such proofs into the area, with out threatening its special beauty and appeal, is a further challenge. These challenges, the fundamental nature of the area, its tight connection to other disciplines, and its many fascinating open problems ensure that combinatorics will continue to play an essential role in the general development of mathematics and science in the future. Further Reading Alon, N., and J. H. Spencer. 2000 . The Probabilistic Method, $2nd$ edn. New York: John Wiley. Bollobás, B. 1978 . Extremal Graph Theory. New York: Academic Press. Graham, R. L., M.
Grötschel, and L. Lovász, eds. 1995 . Handbook of Combinatorics. Amsterdam: North-Holland. Graham, R. L., B. L. Rothschild, and J. H. Spencer. 1990 . Ramsey Theory, $2nd$ edn. New York: John Wiley. Janson, S., T. Łuczak, and A. Ruciński. 2000 . Random Graphs. New York: John Wiley. Jukna, S. 2001 . Extremal Combinatorics. New York: Springer. $575$ Matoušek, J. 2002 . Lectures on Discrete Geometry. New York: Springer. Nathanson, M. 1996 . Additive Number Theory: Inverse Theorems and the Geometry of Sumsets. New York: Springer. Pach, J., and P. Agarwal. 1995 . Combinatorial Geometry. New York:
John Wiley. Tao, T., and V. H. Vu. 2006 . Additive Combinatorics. Cambridge: Cambridge University Press. $IV$ . $20$ Computational Complexity Oded Goldreich and Avi Wigderson $1$ Algorithms and Computation This article is concerned with what can be computed efficiently, and what cannot. We will introduce several important concepts and research areas, such as formal models of computation, measures of efficiency, the P versus N P question, NP-completeness, circuit complexity, proof complexity, randomized computation, pseudo randomness, probabilistic proof systems, cryptography, and more.
Underlying them all are the related notions of algorithms and computation, and we begin by discussing these. $1$ . $1$ What Is an Algorithm? Suppose that you are presented with a large positive integer N and asked to determine whether it is prime. What should you do? One possibility would be to apply the method of trial division. That is, first see whether N is even, then whether it is a multiple of $3$ , then whether it is a multiple of $4$ , and so on through all the numbers √ up to N.
If N is composite, then it has a factor between √ $2$ and N, so it is prime if and only if the answer to all these questions is no. The trouble with this method is that it is highly inefficient. Suppose, for instance, that N has $101$ digits. Then . qrt{N} is at least $10^{50}$ , so in order to carry the method out one would have to answer $10^{50}$ questions of the form, “Is K a factor of N?” This would take far longer than a human lifetime, even if all the world’s computers devoted themselves to the task. What, then, is an “efficient procedure”? This question divides into two parts:
what is a procedure, and what counts as efficient? We shall look at these two questions in turn. Two very obvious conditions that a method should satisfy if it is to count as a procedure for solving this problem are finiteness--that the procedure should have a finite description (so , for example, one cannot simply look up the answer in an infinite list of integers and

$576$

their factorizations) -- and correctness--that, for every N, it correctly tells you whether N is prime. There is also a third, more subtle, condition, which goes to the heart of what is meant by the word “algorithm.” It is that it should consist of simple steps. This is needed in order to rule out ridiculous “procedures” such as, “See whether N has any nontrivial factors; declare N to be prime if and only if it does not.” The problem with this is that we cannot see, just like that, whether N has nontrivial factors.
By contrast, all that the method of trial division asks of us is that we should do basic arithmetic, such as increasing integers by $1$ , comparing them, and doing long division. More over, the procedures of basic arithmetic can be broken down into yet simpler steps: for instance, it is possible to do long division by a succession of elementary operations applied to single digits at a time. In order to understand this simplicity condition better, and to prepare ourselves for a formal definition of the notion of algorithms, let us look at long division in slightly more detail.
Suppose that you have a piece of paper in front of you and you want to divide 5959578$by$857 . You will write the two numbers down, and then, as the calculation proceeds, you will write other numbers as well. For instance, you may wish to start by writing out all the multiples of $857$ up to $9 \times 857$ . At some point early on you will probably find your self comparing $5999 = 7 \times 857$ with 5959 : this you do by scanning the numbers from left to right and comparing individual digits. In this case, a difference is first detected in the third digit.
You then write 5142 ( which is $6 \times 857)$ underneath the 5959 , subtract (again by scanning numbers from left to right and performing single-digit operations), write down the difference $817$ , “bring down” the next digit, $5$ , of 5959578 , and repeat the process with the number 8175 . At each stage in this calculation you are modifying the piece of paper in front of you.
As you do so you need to keep track of which stage of the procedure you are at (whether you are writing out the initial table of multiples of $857$ , or seeing which one is the largest that does not exceed another number, or subtracting one number from another, or bringing down a digit, etc .), and which symbols on the page you are currently dealing with. What is remarkable is that this information has a fixed size, in the sense that it does not increase as the size of the input (that is, the two numbers to be divided) increases.
Therefore, the procedure can be regarded as making local changes to some “environment,” using repeated

IV. Branches of Mathematics

applications of a fixed rule that does not depend on the input. (This rule will typically have some internal structure, such as a list of simpler rules together with specifications of the circumstances under which they should be applied .) In general, this is what we mean by a computation: it modifies an environment by means of repeated applications of a fixed rule. The rule is usually referred to as an algorithm. Notice that this description applies to many scientific theories of dynamic evolution in nature (of weather, chemical reactions, or biological processes, for example).
Thus, these can be regarded as computational processes, of sorts. Some of these dynamical systems also demonstrate well the fact that simple, local rules can result in a very complex modification of the environment if they are iterated many times. (See dynamics [IV.14](/part-04/dynamics) for further discussion of this phenomenon .) Thoughts such as these lie behind the idea of a Turing machine, turing’s [VI.94](/part-06/alan-turing-19121954) famous formalization of the notion of an algorithm. It is interesting that he came up with his formalization before computers existed.
Indeed, this abstraction and central features of it, most notably the existence of a “universal” machine, greatly influenced the actual construction of computers. It is very important to know that the idea of an algorithm can be formalized, so that one can talk precisely about whether there are algorithms that will perform particular tasks, how many steps they need for a given size of input, and so on.
However, there are many ways of doing this, which all turn out to be equivalent, and for the purposes of understanding this article it is not necessary to go into the details of any particular method. (You can, if you like, think of an algorithm as any procedure that can be programmed on a real computer--slightly idealized so that it has unlimited storage space--and a step of an algorithm as any change of one of the bits of that computer from $a_{0}$ to $a_{1}$ or vice versa .) Nevertheless, just to show roughly how it is done, here is a brief description of the basic features of the Turing
machine model. To begin with, one makes the observation that all computational problems can be encoded as operations on sequences of $0s$ and $1s$ . (This observation is not just theoretically useful but also very important for the actual building of computers .) For example, all numbers that occur in the course of a computation can be converted into their binary representations; one can also use $1$ to stand for “true” and $0$ to stand for “false” and there by perform the basic logical operations; and

IV.20.   Computational Complexity

so on. For this reason we can define a very simple “envi-
ron ment” for a Turing machine: it is a “tape,” infinitely
long in both directions, that consists of a row of “cells,”   some natural functions are not computable. (For more
each of which contains either a 0 or a 1. Before the
computation starts, a certain prespecified portion of
this tape is filled with the input, which is a sequence
of 0 s and 1 s. The algorithm is a little control mecha-
nism. At any one time, this mechanism can be in one
of a finite set of states, and it is located at one of the     formally describe various different kinds of com put a-
cells of the tape. According to the state it is in and the    tional tasks, of which two major examples are search
value, 0 or 1, that it sees at the cell it has reached, it    problems and decision problems. The aim of a search
makes three decisions: whether to change the value in
the cell, whether to move left or right by one cell, and
which state it should next be in.
   One of the states of this control mechanism is “halt.”     this solution might not be unique. We can model this by
If this state is reached, then the mechanism stops doing
anything and is said to have halted. At that point, a cer-    a pair (x, y) of strings in I, we say that y is a valid solu-
tain prespecified portion of the tape will be regarded as
the output of the machine. An algorithm can be thought
of as any Turing machine that halts for every possible
input. And the number of steps of the algorithm is the
number of steps taken by that Turing machine. Remark-
ably, this very simple computational model is enough
to capture the full power of computation: in theory one
could build a Turing machine, out of clockwork, say,
that would be able to do whatever a modern super com-
puter can do. (However, it would take too long over each
step to be practical for anything but the very simplest
of computations.)
1.2   What Does an Algorithm Compute?
A Turing machine converts a sequence of 0 s and 1 s
into another sequence of 0 s and 1 s. If we wish to use
mathematical language to discuss this, then we need
to give a name to the set of {0, 1}-sequences. To be
precise, we consider the set of all finite sequences of
0 s and 1 s, and we call this set I. It is also useful to
write In for the set of all {0, 1}-sequences of length n.     sions. For the rest of this article, we shall feel free to
If x is a sequence in I, then we write |x| for its length:    blur the distinction between the mathematical objects
for instance, if x is the string 0100101, then |x| = 7.
To say that a Turing machine converts a sequence of
0 s and 1 s into another such sequence (if it halts) is to
say that it naturally defines a function from I to I. If
M is the Turing machine and f M is the corresponding
function, then we say that M computes f M .
   Thus, every function f : I → I gives rise to a com-
putational task, namely that of computing f . We say
that f is computable if this is possible: that is, if there   N, so the number N is exponentially larger than the
exists a Turing machine M such that the corresponding

577
function f M is equal to f . A central early result (due to
Turing and independently to church [VI.89](/part-06/alonzo-church-19031995)) is that
details, see the insolubility of the halting prob-
lem [V.20](/part-05/the-insolubility-of-the-halting-problem).) However, complexity theory deals only with
computable functions, and studies which of these can
be computed efficiently.
Using the notation we have just introduced, we can
problem is, informally speaking, to find a mathematical
object with certain properties: for instance, one might
wish to find a solution to a system of equations, and
means of a binary relation [I.2 §2.3](/part-01/language-and-grammar) R on the set I: for
tion of problem instance x if x Ry. (This notation means
that x is related to y in the way specified by R; another
common notation for the same thing is (x, y) ∈ R.) For
example, we might let x and y be binary expansions of
positive integers N and K, respectively, and say that
x Ry if and only if N is a composite number and K is a
nontrivial factor of N. Informally, this search problem
would be, “Find a nontrivial factor of N.” If M is an algo-
rithm that computes a certain function f M : I → I, then
we say that M solves the search problem R if f M (x) is
a valid solution of x for every problem instance x that
has a solution. For example, it solves the search prob-
lem just defined if, for every composite number N with
binary expansion x, f M (x) is the binary expansion of a
nontrivial factor K of N.
Notice that in the above example we were interested
in positive integers, but formally speaking an algorithm
is a function of binary strings. This was not a problem,
because there is a convenient and natural way to encode
integers as binary strings—via their usual binary expan-
we wish to investigate and the strings we use to rep-
resent them in a computation. For instance, it is sim-
pler to think of the algorithm M in the previous para-
graph as computing a function f M : N → N, and solving
the search problem if, for every composite number N,
f M (N) is a nontrivial factor of N. We stress that the
representation of objects by strings is a rather succinct
one: it takes only , log2 N- bits to represent the number
length of its representation.

$578$

Now let us turn to decision problems. These are simply problems where one is looking for a yes  /  no answer. The problem with which we opened this article--Is N a prime number?--is a classic example of a decision problem. Notice that here and in the paragraph before last we are using the word “problem” in a slightly unusual way, to mean a general class of questions rather than just one. In this example, the question, “Is $443$ a prime number?” would be called an instance of the problem, “Is N a prime number?” Modeling decision problems is very simple: they are subsets of I.
The idea is that a subset S of I consists of all the strings where the answer is yes. So if the problem is to determine primality, then S would consist of all binary expansions of prime numbers, at least if we chose the obvious encoding of the problem. When do we say that a machine M solves the decision problem S? We would like it to compute a function f that says yes when the input x belongs to S and says no otherwise.
That is, we say that M solves the problem S if the associated function f M is a function from I to the set { $0$ , $1$ } such that $f^{M}(x) = 1$ whenever $x \in S$ and $f^{M}(x) = 0$ otherwise. Most of this article will be focused on decision problems, but the reader should bear in mind that computational tasks that seem more complicated, including search problems, can in fact usually be reduced to sequences of decision problems. For example, if you can solve all decision problems and you want to factorize a large composite number N, then you can proceed as follows.
First, determine whether the smallest prime factor of the number ends in $a_{1}$ (in its binary expansion). If the answer is yes, you can look at the next digit by asking if this factor ends in $11$ ; if it is no, then you can ask if it ends in $10$ . You can continue this process, extending your knowledge of the smallest prime factor by one bit at a time. The number of queries you will need to make will be at most the number of digits of N.

$2$

Efficiency and Complexity

Near the beginning of this article we asked what was meant by the phrase “efficient procedure.” We have now discussed the word “procedure” in some depth, but we have yet to say what we mean by “efficient,” beyond pointing out that trial division takes too long to be practical if we have a very large integer and want to determine whether it is prime.

IV. Branches of Mathematics

$2$ . $1$

Complexity of Algorithms

How can we describe mathematically what it means for a procedure to “take too long to be practical”? The Turing-machine formalization is particularly useful for answering questions like this, because we can say precisely what a step of a Turing-machine computation is and this allows us to give a precise definition: an algorithm is a Turing machine, and its complexity is defined to be the number of steps the machine takes before halting. If we look at this definition carefully, we see that what it defines is not just one number but a function.
The time taken by a Turing machine depends on the input, so, given a Turing machine M and a string x, we can define t M (x) to be the number of steps M takes before halting when x is the input. The function t M : I $\to$ N is the complexity function of the machine M. Most of the time, we are interested not so much in the full detail of this complexity function, but in the worstcase complexity of the machine M. This is a function T M : N $\to$ N defined as follows. Given a positive integer n, T M (n) is the maximum value of t M (x) over all input strings x of length n.
In other words, we want to know the longest possible time that our machine might take when faced with an input of length n. And usually we do not look for an exact formula for T M (n) : for most purposes it is enough to have a good upper bound. The function t M (x) is more accurately called the time complexity of the algorithm M, since it measures how long M takes given x as its input. But time is not the only resource that matters in computer science. Another is how much memory an algorithm uses, beyond that needed to store the input, and this too can be captured in our formal model.
Given a Turing machine M and an input x, we can define s M (x) to be the number of cells, other than input cells, that are visited before the machine halts, under the extra condition that the input cells must be left unchanged.

$2$ . $2$

Intrinsic Complexity of Problems

Much of this article will be concerned with a very general analysis of the power of computation. In particular, we shall discuss a central subfield of theoretical computer science known as computational complexity (or complexity theory) . The aim of this area is to understand the intrinsic complexity of computational tasks. Notice that we said “computational tasks” rather than “algorithms.” This is an important distinction and

IV.20.   Computational Complexity

it involves a change of focus. Returning to our exam-
ple of primality testing, it is not too hard to estimate     mality testing does not. Other familiar examples of
how long various algorithms take, and indeed we had
no trouble in seeing that trial division would take a very   bers in increasing order, computing the determinant
long time indeed. But does that mean that the task of
primality testing is intrinsically hard? Not necessarily,    rather than substituting the entries directly into the
since there may be other algorithms that do the job
much more quickly.
   This idea fits neatly into our formal scheme. What
would be a good definition of the complexity of a com-
putational task? Roughly speaking, the complexity of
such a task should be the smallest complexity of any
algorithm M that solves it. A convenient way of saying
this is as follows. If T : N → N is some integer function,   computability, we shall focus on decision problems and
we say that the task has complexity at most T if there is    consider the class of all decision problems that have
an algorithm M that solves the task such that TM ⩽ T
(i.e., TM (n) ⩽ T (n) for every n).
   If you want to show that a computational task is not
intrinsically hard, then all you have to do is devise an     of notation: if M is a Turing machine and x is an input,
algorithm with low complexity that solves this task.
But what if you want to show that this task is intrin-
sical ly hard? Then you have to prove, for every possible     problems, M(x) will be 0 or 1.
low-complexity algorithm M, that M does not solve this
task. This is much harder: even after half a century of
intensive work, the best results that are known are very     polynomial time if there is a Turing machine M, termi-
weak. Notice a big difference between the two kinds of
research: one can find algorithms with out knowing how
the concept of “algorithm” is formalized, but to ana-
lyze all algorithms with a certain property, it is essen-
tial to have a precise definition of what an algorithm is.
Fortunately, with Turing’s formalization, we have one.
2.3   Efficient Computation and P
Now we have ways of measuring the complexity of algo-
rithms and computational tasks. But we have not yet
addressed the question of when we should regard an
algorithm as efficient, or a computational task as effi-
ciently solvable. We shall propose a definition of effi-
ciency that seems some what arbitrary and then explain
why it is in fact a surprisingly good one.
   If M is an algorithm, then we regard it as effi-
cient if and only if it terminates in polynomial time.
This means that there are constants c and k such
that the worst-case complexity TM always satisfies the
inequality TM (n) ⩽ cnk . In other words, the time taken     algorithms for primality testing. In fact, long division
by the algorithm is bounded above by a polynomial
function of the length of the input string. It is not
hard to convince your self that the familiar methods
for adding or multiplying two n-digit numbers termi-

579
nate in polynomial time, where as trial division for pri-
tasks with efficient algorithms are putting a set of num-
[III.15](/part-03/determinants) of a matrix (provided one uses row operations
formula), solving linear equations by Gaussian elimi-
nation, finding the shortest path in a given network,
and more.
Since we are interested in the intrinsic complexity
of computational tasks, we now define such a task to
be efficiently computable if there is an efficient algo-
rithm M that solves it. In our discussion of efficient
efficient algorithms. Understanding it is the major goal
of computational complexity theory. Here is a formal
definition. We shall use the following convenient piece
then M(x) is the output of x. (Earlier we wrote f M (x)
for this function.) Since we are considering decision
Definition. A decision problem S ⊆ I is solvable in
nating in polynomial time, such that M(x) = 1 if and
only if x ∈ S.
The class of decision problems that are solvable in
polynomial time is our first example of a complexity
class. It is denoted P.
The asymptotic analysis of running time, i.e., estimat-
ing the running time as a function of the input length,
turns out to be crucial for revealing structure in the
theory of efficient computation. The choice of poly-
nomial time as the standard for efficiency may seem
arbitrary, and theories could be developed with other
choices, but it has amply justified itself. The main rea-
son for this is that the class of polynomials (or func-
tions bounded above by a polynomial) is closed under
various operations that arise naturally in computation.
In particular, the sum, product, or composition of two
polynomials is again a polynomial. This allows us, for
example, to think of long division as a basic, one-step
operation when we are investigating the efficiency of
takes more than one step, but it is in P so the time it
takes does not affect whether an algorithm that uses it
is itself in P. In general, if we use the basic program-
ming technique of subroutines, and if our subroutines

580

are in P, then we will preserve the efficiency of the
algorithm as a whole.
   Almost all computer programs that are used in prac-
tice turn out to be efficient in this theoretical sense. Of
course, the converse is not true: an algorithm that runs
in time n100 is completely use less despite the fact that
n100 is a polynomial. However, this seems not to mat-
ter. It is unusual to discover even an n10 -time algorithm
for a natural problem, and on the rare occasions when
this happens, improvements to n3 - or n2 -time, which
border on the practical, almost always follow.
   It is important to contrast P with the class EXP. A
problem belongs to EXP if there is an algorithm that
solves it in at most exp(p(n)) steps for any input of
length n, where p is some polynomial. (Roughly speak-
ing, EXP consists of problems that can be solved in
exponential time: the polynomial p makes the defini-
tion more robust and less dependent on the precise
nature of encodings, etc.)
   If you use trial division to test the primality of a num-   lems for which it is easy to check whether you have
ber N with n digits in its binary expansion, then you

have to do N long-division calculations. Since N is
about 2 n/2 , this is an exponential-time procedure. Expo-
nential running time is considered blatantly inefficient,
and if the problem has no faster algorithm, then it is
deemed intractable. It is known (via a basic technique
called diagonalization) that P ≠ EXP; further more,
some problems in EXP really do require exponential
time. Almost all problems and classes considered in
this paper can easily be shown to belong to EXP via
trivial, “brute-force” algorithms such as the trial divi-
sion just discussed: the main question will be whether
much faster algorithms can be devised for them.

In this section we discuss the famous P versus N P
question, which is usually formulated in terms of deci-
sion problems, but which also has an interpretation in
terms of search problems. We shall start with the latter.
3.1   Finding versus Checking
Can you rearrange the letters CHAIRMITTE to form an
English word? To solve a puzzle like this, one has to
search among many possibilities (all permutations of
those letters), perhaps building up fragments of words
and hoping that inspiration will strike. Now consider
the following question: can the letters of CHAIRMITTE
be rearranged to form the word “arithmetic”? It is very
easy (if slightly boring) to check that the answer is yes.     that encodes K will be at most as long as the string

IV. Branches of Mathematics
This in formal example illustrates an important fea-
ture of many search problems: that once you find a
solution, it is easy to recognize that it is a solution. The
hard part is to find the solution in the first place. Or
at least, so it seems. But actually proving that search
problems of this kind are hard is a famous unsolved
problem, the P versus N P question.
Another search problem with this quality, which is in
fact quite general and has a natural appeal to mathe-
maticians, is the task of finding proofs for valid math-
ematical statements. Again it seems to be far easier to
check that an argument is a valid proof than it is to find
the argument in the first place. Since finding a proof is
a process that requires considerable creativity (as, in a
much smaller way, is finding an anagram), the P ver-
sus N P question is, in a sense, asking whether this
kind of creativity can be automated.
In section 3.2 we shall define the class N P formally.
Informally, it corresponds to the set of all search prob-
found what you are searching for. Another example of
√
such a problem is that of finding a factor of a large com-
posite integer N. If you are told that K is a factor, then
it is an easy task for you (or your computer) to verify
that this is true: all you have to do is a single instance
of long division.
A vast number of problems in science (such as cre-
ating theories to explain various natural phenomena)
and engineering (such as creating designs under vari-
ous physical and economic constraints) have the same
property that success is much easier to recognize than
to achieve in the first place. This gives some indication
of the importance of this class of problems.
3 The P versus N P Question
For the purposes of theoretical analysis, it is actually
more convenient to define N P as a class of decision
problems. For instance, consider the decision problem,
“Is N composite?” What makes this a problem in N P
is that, whenever N is composite, there is a short proof
of this fact. Such a proof consists of a factor of N, and
is easy to check that this proof is correct. That is, it
is easy to devise a polynomial-time algorithm M that
takes as input a pair (N, K) of positive integers and
outputs 1 if K is a nontrivial factor of N and 0 other-
wise. If N is prime, then M(N, K) = 0 for every K, while
if N is composite there will always exist an integer K
such that M(N, K) = 1. More over, in this case the string

IV.20.   Computational Complexity

that encodes N, though all we really care about is that
it should not be too much longer. These properties we
now encapsulate in a formal definition.
Definition (the complexity class N P1 ). A decision
problem S ⊂ I belongs to N P if there is a subset
R ⊂ I . imes I with the following three properties.
  (i) There is a polynomial function p such that |y| ⩽

 (ii) x belongs to S if and only if there is some y such

(iii) The problem of determining whether a pair (x, y)

   When such a y exists, it is called a proof (or wit-
ness) of the fact that x belongs to S. The polynomial-
time algorithm for determining whether a pair (x, y)
belongs to R is called a verification procedure for
determining whether x belongs to S.
   Notice that every problem S in the class P is also
in N P, since we can simply forget about the candi-
date proof y and use the efficient test for whether x
belongs to S. On the other hand, every problem in N P
is trivially in EXP, because we can enumerate all pos-
sible ys (in exponential time) and check for each one
whether it works. (This is more or less what we do with
trial division.) Can this trivial algorithm be improved?
Some times it can, even in very nonobvious cases. In
fact, recently it was proved that the problem of deter-
mining whether a number N is composite belongs to P.
(Further details can be found in computational num-
ber theory [IV.3 §2](/part-04/computational-number-theory).) However, we would like to know
whether for every problem in N P one can do much
better than the trivial algorithm.
3.3   The Big Conjecture
The P versus N P problem asks whether or not P
equals N P. In terms of decision problems, this ques-
tion is asking whether the existence of an efficient ver-
ification procedure for some set implies the existence of
an efficient decision procedure for it. In other words,
if there is a polynomial-time algorithm for checking
whether proofs that x ∈ S are correct (as in the def-
inition of N P just given), does it follow that there is a
polynomial-time algorithm for deciding whether x ∈ S?

  1. The acronym NP stands for non deterministic polynomial-time,
where a non deterministic machine is a fictitious computing device used     2. Despite the fact that there is a polynomial-time algorithm for
in an alternative definition of the class NP. The non deterministic
moves of such a machine correspond to guessing a “proof” in this
definition.

581
As our earlier examples suggest, the problem can also
be formulated as a question about search problems.
Suppose we have a set R ⊂ I . imes I satisfying properties (i)
and (iii) of the definition of N P. For instance, R might
correspond to all pairs of integers (N, K) such that K is
a nontrivial factor of N. Then the corresponding search
problem, “Given a composite number N find a nontriv-
ial factor K,” is closely related to the integer factoriza-
p(|x|) whenever (x, y) ∈ R.
to a search problem, “Given a string x, find a string y
that (x, y) belongs to R.
the P versus N P problem asks the following: “Are all
belongs to R is in P.
If the answer is yes, then the mere fact that it can be
checked in polynomial time whether K is a nontrivial
factor of N would imply that such a factor could actu-
ally be found in polynomial time.2 Similarly, the mere
fact that a short proof of a mathematical statement
existed would be enough to guarantee that it could be
found in a short time by a purely mechanical process.
The apparent difference between the difficulty of dis-
covering solutions and the ease of checking them once
discovered would be entirely illusory.
This would be very strange, and almost all experts
believe that it is not the case. However, nobody has
managed to prove it. So the big conjecture is that P does
not equal N P. That is, finding is harder than checking,
and efficient verification procedures do not ne ces sar-
ily lead to efficient algorithms for decision problems.
This conjecture is strongly supported by our intuition,
which has been developed over many centuries of deal-
ing with search and decision problems in a wide variety
of human activities. Further empirical evidence in favor
of the conjecture is given by the fact that there are lit-
erally thousands of N P problems, from many math-
ematical and scientific disciplines, that are not known
to be solvable in polynomial time, despite the fact that
researchers have tried very hard to discover efficient
procedures for solving them.
The P ≠ N P conjecture is certainly the most impor-
tant open problem in computer science, and one of
the most significant in all of mathematics. Our later
section on circuit complexity (section 5.1) is devoted
to attempts to prove it. There we shall discuss some
partial results and limits of the techniques used so far.
determining whether a number is composite, no such algorithm is
known for actually finding its factors, and it is widely believed that no
efficient algorithm exists for this.

$582$

N P versus co N $P_{3}$ . $4$

Another important class, known as co N P, is the class of complements of sets (or decision problems) in N P. For example, the problem “Is N prime?” belongs to co N P because there is an efficient verification procedure for showing that a given positive integer N is not prime, namely, exhibiting some factors. Equivalently, the set of primes belongs to co N P because its complement belongs to N P. Does N P equal co N P? That is, if you have an efficient verification procedure for determining membership of a set S, do you also have one for determining nonmembership?
Again, intuition would suggest not, or at least not necessarily. For instance, if a jumble of letters can be rearranged to form a word, then that word serves as a short demonstration. But suppose a jumble of letters cannot be rearranged to form a word. One could demonstrate this by looking at all possible rearrangements and noting that none of them is a word, but this is a very long demonstration and there does not seem to be a systematic way of finding a truly short one. Here again intuition from mathematics is extremely relevant:
to verify that a set of logical constraints is mutually inconsistent, that a family of polynomial equations has no common root, or that a set of regions in space has empty intersection seems far harder than to verify the opposite (exhibiting a consistent valuation, a common root, or a point that belongs to all the regions). Indeed, only when rare extra mathematical structure is available, such as duality [III.19](/part-03/duality) theorems or complete systems of invariants, are we able to show that a set and its complement are computationally equivalent.
So another big conjecture is that N P is not equal to co N P. The section on proof complexity (section $5$ . $3$ ) looks further at this conjecture and at attempts to resolve it. Surprisingly, it is not hard to show that the problem, “Is N composite?” which obviously belongs to N P, actually belongs to co N P as well. To prove this, one uses the following fact from elementary number theory: p is prime if and only if there is an integer a $<$ p such that $a^{p} - {}^{1}$ ≡ 1( mod p  )  and $a^{r}$  ≡ $1$ whenever $r$ is a factor of p $- 1$ .
Thus, to verify that p is prime it is enough to exhibit such an integer a. However, to check that a works, one needs to know the prime factorization of p $- 1$ , and one must give a short proof that it really is a factorization into primes. This takes us back to the problem we started with, but the numbers are smaller so one can give a recursive argument. (We men-

IV. Branches of Mathematics

tion again that the set of primes is actually in P, but this is harder to prove .)

$4$

Reducibility and NP-Completeness

One sign that a mathematical problem is fundamental is that it has many equivalent formulations. This is true to a quite extraordinary extent for the P versus N P problem, as we shall see in this section. Fundamental to our discussion will be the notion of polynomialtime reducibility. Roughly speaking, one computational problem is polynomially reducible to another if any polynomial-time algorithm for the second can be converted into a polynomial-time algorithm for the first. Let us see an example of this, and then we will define the notion formally.
First, here is a famous problem in N P, called SAT. Consider the logical formula (p ∨ q ∨ . ar{r}) ∧ (. ar{p} ∨ q) ∧ (p ∨ . ar{q} ∨ r) ∧ (. ar{p} ∨ . ar{r}). Here, p, q, and r are propositions, each of which can be true or false. The symbols “∨” and “∧” stand for OR and AND, respectively, and . ar{p} (read as “ NOTp ”) is the proposition that is true if and only if p is false. Suppose now that p is true, q is true, and r is false. Then the first subformula p ∨ q ∨ . ar{r} is true because at least one of p, q, and . ar{r} is true.
Similarly, one can check that all the other subformulas are true, which means that the entire formula is true. We call our choice of truth values for p, q, and r a satisfying assignment for the formula, and we say that the formula is satisfiable. A natural computation problem that arises is the following. SAT: given a propositional formula, is it satisfiable? In the example above, the formula was a conjunction of subformulas, called clauses. In their turn, these subformulas were disjunctions of propositions or their negations, which are called literals.
(The conjunction of some formulas φ 1 , . . . , φ k is the formula φ 1 ∧ · · · ∧ φ k and their disjunction is φ 1 ∨ · · · ∨ φ k .) $3SAT$ : given a propositional formula that consists of a conjunction of clauses that contain at most three literals each, is the formula satisfiable? Notice that SAT and $3SAT$ are in N P, since it is an easy matter to check whether a given truth assignment to the variables is a satisfying assignment for the formula. Let us now turn to a second problem in N P.

$IV$ . $20$ .

Computational Complexity

$3$ - colorability : given a planar map (such as one might find in an atlas), can its regions be colored with three colors, Red, Blue, and Green, such that no two adjacent countries have the same color? 3 We shall now “reduce” $3$ - colorability to $3SAT$ : that is, show how an algorithm that solves $3SAT$ can be used to solve $3$ - colorability as well. Suppose, then, that we have a map with n regions. We shall need $3n$ propositions, which we shall call $R^{1}$ , . . . , R n , $B^{1}$ , . . . , B n , and $G^{1}$ , . . .
, G n , and we would like to define a logical formula in such a way that a satisfying assignment of the formula will correspond to $a_{3}$ - coloring of the graph. In the back of our minds, we shall think of R i as the statement, “Region i of the map is colored Red,” and similarly for B i and G i . We then take as our clauses some statements that tell us that every region receives a single color and no two adjacent regions receive the same color. This is easy to do:
to guarantee that region i receives a color, we take the clause R i ∨ B i ∨ G i , and if regions $i$ and $j$ are adjacent, then to guarantee that they do not receive the same color we take the three clauses R i ∨R j , B i ∨B j , and G i ∨G j . (To ensure that no region is assigned more than one color, we can also add clauses of the form R i ∨ B i , B i ∨ G i , and G i ∨ R i .
Alternatively, we can allow multiple colors and finish by picking one of the assigned colors for each region .) It is not hard to see that the conjunction of all these clauses is satisfiable if and only if there is $a_{3}$ - coloring of the map. Further more, the conversion process is a simple one that can be carried out in a time that is polynomial in the number of regions in the map. Thus, we have our hoped-for polynomial-time reduction. Now let us give a formal description of what we have just done. Definition (polynomialtime reducibility). Let S and T be subsets of I.
We say that S is polynomial-time reducible to T if there exists a polynomial-time computable function h : I $\to$ I such that x $\in$ S if and only if h (x) $\in$ T . If S is polynomial-time reducible to T , then the following algorithm can be used to decide membership of S: given x, compute h (x) (in polynomial time), then decide whether h (x) $\in$ T . Therefore, if membership of T can be decided in polynomial time, so can membership of S. An equivalent, and important, way of saying $3$ .
Recall that the celebrated four-color theorem [V.12](/part-05/the-four-color-theorem) asserts that this can always be done with four colors.

$583$

this is that if membership of S cannot be decided in polynomial time, then neither can membership of T . In short, if S is hard, then T is hard. Now let us give a very important definition based on the notion of polynomial-time reducibility. Definition (NPcompleteness). A decision problem S is NP-complete if S is in N P and every decision problem in N P is polynomial-time reducible to S. That is, if S has a polynomial-time algorithm, then so do all other problems in N P. Thus, an NP-complete (decision) problem is in a certain sense “universal” among all problems in N P.
At first this may seem a peculiar definition, because it is far from obvious that there are any NP-complete problems! However, in 1971 , it was proved that SAT is NP-complete, and since then thousands of problems have been proved to be NP-complete as well. (Hundreds of them are listed in Garey and Johnson ( 1979 ).) Other examples are $3SAT$ and $3$ - colorability . The significance of $3SAT$ is that it is one of the most basic of all NP-complete problems.
(It is not too hard to show that, by contrast, $2SAT$ and $2$ - colorability have polynomial-time algorithms .) In order to prove that a decision problem S is NP-complete, one starts with a known NP-complete problem S and finds a polynomial-time reduction from S to S. It now follows that if S has a polynomial-time algorithm, then so does S and hence so do all other problems in N P. Some times these reductions are quite simple, like our reduction of $3$ - colorability to $3SAT$ . But some times they need a great deal of ingenuity. Here are two further NP-complete problems. Subset sum:
given a sequence of integers $a^{1}$ , . . . , a n and another integer b, does there exist a set J such that

$i\in^{J}a^{i} = b?$

Traveling salesman problem: given a finite graph [III.34] G, does there exist a Hamilton cycle? That is, can one find a cycle of edges that visits each vertex of the graph exactly once? Interestingly, almost all natural problems in N P that are not obviously in P turn out to be NP-complete. However, there are two important examples that have not been shown to be NP-complete and are strongly believed not to be. The first is a problem we have already discussed: integer factorization. More precisely, consider the following decision problem.

$584$

Factor in interval: given x, a, b, does x have a prime factor y such that $a \le y \le b?$ A polynomial-time algorithm for this can be combined with a simple binary search to find a prime factor if it exists. The reason this problem is unlikely to be NPcomplete is that it also belongs to co N P. (Roughly speaking, this is true because one can exhibit the prime factorization of x and demonstrate in polynomial time that it really is a prime factorization .) If it were NPcomplete, then it would follow that N P ⊂ co N P, and hence, by symmetry, that N $P = co$ N P.
The second example is the following. Graph isomorphism: given two graphs G and H with n vertices, is there a function φ from the vertex set of G to the vertex set of H such that φ (x) φ (y) is an edge of H when, and only when, xy is an edge of G? Notice with these two examples how surprising it is that they can be reduced in polynomial time to problems such as $3SAT$ or $3$ - colorability . This is particularly true of the first, which has nothing to do with graphs or satisfiability of logical formulas. If P $\neq$ N P, then no NP-complete problem has a polynomial-time decision procedure.
Consequently, the corresponding search problems cannot be solved in polynomial time. Thus, a proof that a problem is NP-complete is often taken as evidence that this problem is hard: if we could solve it, then we could also efficiently solve a multitude of other problems. But thousands of researchers (and tens of thousands of engineers) have, over several decades, tried and failed to find such procedures. NP-completeness has more positive aspects as well.
Some times it is possible to prove a fact about all sets in N P by establishing it only for some NP-complete set (and noting that polynomial-time reductions preserve the claimed property). Famous examples include the existence of “zero-knowledge proofs,” established first for $3$ - coloring (see section $6$ . $3$ . 2), and the so-called PCP theorem, established first for $3SAT ($ see section $6$ . $3$ . 3). $5$ Lower Bounds As we mentioned earlier, it is very much harder to prove that certain problems cannot be solved efficiently than it is to find efficient algorithms (when they exist).
In this section, we shall survey some of the basic methods that have been developed for finding lower bounds for the complexity of natural computational problems. That is,

IV. Branches of Mathematics

we shall discuss results that say that no algorithm can run in fewer than a given number of steps. In particular, we shall introduce the theories of circuit complexity and proof complexity. The first is defined with the long-term goal of proving that P $\neq$ N P, and the second is a program that is aimed at proving that N P $\neq$ co N P. Both of these theories use the notion of a directed a cyclic graph, which models the flow of information in a computation or a proof, and the sequence of derivations of each new piece of information from previous ones.
A directed graph is a graph for which each edge is given a direction. One can visualize it as a graph with arrows along the edges. A directed cycle is a sequence of vertices $v^{1}$ , . . . , v t such that for every i between $1$ and $t - 1$ there is an edge pointing from $v^{i}$ toward $v^{i} + {}^{1}$ and there is also an edge pointing from v t back to $v^{1}$ . If a directed graph G has no directed cycle, then it is called a cyclic. We shall abbreviate the phrase “directed a cyclic graph” by writing DAG.
It is not hard to see that in every DAG there will be some vertices with no in coming edges and some with no out going edges. These are called inputs and outputs, respectively. If $u$ and $v$ are vertices of a DAG and there is an edge from u to v, then we say that u is a predecessor of v. The basic idea of the DAG model is that you place information at each input, and at each vertex v you have a very simple rule that derives some information at v from the information at all the predecessors of v.
Starting at the inputs, you gradually move through the graph, working out the information at a vertex once you have worked out the information for all its predecessors, until you have reached all the outputs.

$5$ . $1$

Boolean Circuit Complexity

A Boolean circuit is a DAG in which all the values at the inputs, outputs, and intermediate vertices are bits. That is, each vertex may take the value $0$ or $1$ . We have to specify simple rules for determining the value at a vertex from the values of its predecessors, and the usual choice is to allow three logical operations: AND, OR, and NOT. We call a vertex v an AND gate if the following rule applies: the value at v is $1$ if all its predecessors have value $1$ and is otherwise $0$ . At an OR gate we have a similar rule:
the value at v is $1$ if and only if at least one of its predecessors has value $1$ . Finally, v is a NOT gate if it has exactly one predecessor u, and v takes the value $1$ if and only if u takes the value $0$ .

IV.20.   Computational Complexity

   Given any Boolean circuit with n inputs u1 , . . . , un
and m outputs v1 , . . . , vm one can associate with
it a function f from In to Im as follows. Given a
{0, 1}-string x = (x1 , . . . , xn ) of length n, let each ui
take the value xi . Then use the gates of the circuit to
find the values at the outputs v1 , . . . , vm . If these are
y1 , . . . , ym , then f (x1 , . . . , xn ) = (y1 , . . . , ym ).   we have proved that the Turing complexity of f is very
   It is not hard to prove that any function from In to
Im can be computed in this way. Thus, we say that AND,
OR, and NOT gates, or more briefly “∧”, “∨”, and “¬”,
form a complete basis. More over, this is true even if we
restrict attention to DAGs where every vertex has at
most two predecessors. In fact, we shall now assume
that our DAGs have this property unless we say other-
wise. There are other choices of gates that are complete
bases, but we shall stick with “∧”, “∨”, and “¬” since
this does not affect our discussion in an essential way.
   It may be easy to show that every Boolean function f
can be computed by means of a circuit, but as soon
as one asks how large the circuit needs to be, one
comes up against fascinating and very difficult ques-
tions. Thus, the following definition is central to the
subject of circuit complexity.
Definition. Let f be a function from In to Im . Then
S(f ) is the size of the smallest Boolean circuit that
computes f , where this is measured by the number of
vertices in the corresponding DAG.
   To see what this has to do with the P versus N P
question, consider an NP-complete decision problem
such as 3 SAT. This can be coded as a function f from I
to {0, 1}, with f (x) taking the value 1 if and only if the
formula corresponding to x is satisfiable. Now we can-
not find a circuit to compute f for the simple reason
that I is an infinite set. However, if we restrict attention
to formulas that can be encoded as strings of length n,
then we obtain a function fn : In → {0, 1}, and we can
try to estimate S(fn ).
   If we do this for every n, then we obtain an esti-
mate for the growth rate of S(fn ) as n tends to infin-
ity. Writing f for the infinite sequence of functions
(f1 , f2 , . . . ), let us define S(f ) to be the function that
takes n to S(fn ).
   This is an important definition because of the fol-
lowing fact: if there is a polynomial-time algorithm for
computing f , then the function S(f ) is bounded above
by a polynomial. More generally, given any function
f : I → I, let fn stand for the restriction of f to In . If f
has Turing complexity T (as defined in section 2.1), then
S(fn ) is bounded above by a polynomial function of

585
T (n). That is, there is a sequence of circuits that com-
putes the function f , and takes a time not significantly
different from the time taken by the Turing machine.
This provides us with a potential method of proving
lower bounds on computational complexity, since if we
can prove that S(fn ) grows very rapidly with n, then
large. If f is a problem in N P, then this proves that
P ≠ N P.
The circuit model of computation is finite rather than
infinite, which raises an issue called uniformity. When
we build a family of circuits from a Turing machine,
the circuits are all in a certain sense “the same.” More
precisely, there is an algorithm that can generate these
circuits, and the time it takes to generate each one is
polynomial in its size. A uniform family of circuits is
one that can be generated in this way.
However, by no means all families of circuits are uni-
form. Indeed, there are functions f that cannot be com-
puted by Turing machines at all (let alone in a reason-
able amount of time), despite having circuits of linear
size. This extra power comes from the fact that these
families of circuits do not have a succinct (“effective”)
description; that is, there is no single algorithm that can
generate them. Such families are called nonuniform.
If there are many families of circuits that do not arise
from Turing machines, then it would seem that prov-
ing good lower bounds for circuit complexity should
be much harder than proving lower bounds for Turing
complexity, since now one must rule out many more
potential ways of computing a function. However, there
is a strong sentiment that the extra power provided by
nonuniformity is irrelevant to the P versus N P ques-
tion: it is believed that for a natural problem such as
3 SAT, nonuniformity does not help. Therefore, we have
another big conjecture of theoretical computer science:
that NP-complete sets do not have polynomial-size cir-
cuits. Why do we believe this conjecture? It would be
nice to be able to say that its falsehood implied that
P = N P.
We do not quite know that, but we do know that if it
is false then “the polynomial-time hierarchy collapses.”
Roughly speaking, this means that a whole system of
complexity classes, which appear to be distinct, would
in fact all be the same, which would be very unexpected.
In any case, it is hard to imagine that there might
be a sequence of polynomial-sized circuits computing
an NP-complete problem with out its being possible to
generate such a sequence by an efficient algorithm.

586

   Even if we grant that nonuniformity does not help
solve NP-complete problems, what is the point of
replacing the Turing machine model by the more pow-
erful model of circuit families? The main reason is that     constant c.
circuits are simpler mathematical objects than Turing
machines, and have the great advantage of being finite.
The hope is that, while abstracting away the unifor-
mity condition, which ought to be irrelevant, circuits
provide us with a model that can be analyzed using
combinatorial techniques.
   It is also worth mentioning that Boolean circuits are
a natural computational model of “hardware complex-
ity,” so their study is of independent interest. More over,
some of the techniques for analyzing Boolean func-
tions have found applications elsewhere: for example,
in computational learning theory, combinatorics, and
game theory.
5.1.1   Basic Results and Questions
We have already mentioned several basic facts about
Boolean circuits, in particular the fact that they can effi-
ciently simulate Turing machines. Another basic fact
is that most Boolean functions require exponential-size
circuits. This can be proved by a simple counting argu-
ment: the number of small circuits is far smaller than
the number of functions. More precisely, let the num-
ber of inputs be n. The number of possible functions
defined on the set of all n-bit sequences is precisely 22 .
On the other hand, it is not hard to show that the num-
ber of circuits of size m is bounded above by around
     2
mm . It follows easily that we cannot compute all func-
tions unless m > 2 n/2 /n. Further more, the proportion
of functions that can be computed by a circuit of size
at most m is tiny.
   Thus, hard functions (for circuits and consequently
for Turing machines) abound. However, this hardness
is proved via a counting argument, which does not give
us a way of actually exhibiting a hard function. That is,    an edge. Let us define CLIQUE(G) to be 1 if G contains
we cannot prove such hardness for any explicit function
f , where “explicit” means that we place some alg or ith-
mic restriction on f , such as belonging to N P or EXP.
In fact, the situation is even worse: no nontrivial lower    What it will not do is change from 1 to 0: adding an
bound is known for any explicit function. For any func-
tion f on n bits (assuming that it depends on all its
inputs), we trivially must have S(f ) ⩾ n, just to read
the inputs. A major open problem of circuit complex-
ity is beating this trivial bound by more than a constant    wise. If we then set CLIQUE(x) to equal CLIQUE(G), we
factor.

IV. Branches of Mathematics
Open problem. Find an explicit Boolean function f (or
even a length-preserving function f ) for which S(f ) is
superlinear: that is, not bounded above by cn for any
A particularly basic special case of this problem is the
question of whether addition is easier than multiplica-
tion. Let ADD and MULT denote, respectively, the addi-
tion and multiplication functions defined on pairs of
integers (presented in binary). For addition, the usual
procedure one learns at school gives rise to a linear-
time algorithm, which implies a linear upper bound for
S(ADD) as well. For multiplication, the standard school
algorithm runs in quadratic time: that is, the num-
ber of steps is proportional to n2 . This can be greatly
improved (via fast fourier transforms [III.26](/part-03/the-fast-fourier-transform)) to
an algorithm that yields S(MULT) < n(log n)2 . Since
log n grows very slowly with n, this is only slightly
superlinear. And now the question is whether this
can be improved further. In particular, do there exist
linear-size circuits for multiplication?
How can circuit complexity be a thriving subject if no
nontrivial bounds are known for any explicit functions?
The answer is that there have been some remarkable
successes in proving lower bounds under natural extra
assumptions on the circuits. We shall now describe the
most important of these extra assumptions.
n   5.1.2   Monotone Circuits
As we have seen, general Boolean circuits can compute
every Boolean function, and can do it at least as effi-
ciently as general algorithms. Now some functions have
additional properties that might lead one to expect
that they could be computed with Boolean circuits of
a particular kind. For example, consider the function
CLIQUE, defined on the set of all graphs as follows. If G
is a graph with n vertices, then a clique in G is defined
to be a set of vertices such that any two are joined by
. qrt{a} clique of size at least n and 0 otherwise.
Notice that if we add an edge to G, then either
CLIQUE(G) changes from 0 to 1 or it stays the same.
edge obviously cannot destroy a clique.
 
n
We can encode G as a string x of 2 bits, one for each
pair of vertices, assigning 1 to a bit if the correspond-
ing pair of vertices is joined by an edge and 0 other-
find that changing any bit of x from a 0 to a 1 cannot

IV.20.   Computational Complexity

change CLIQUE(x) from 1 to 0. Boolean functions with
this property are called monotone.
   When considering the complexity of monotone func-
tions, it is extremely natural to restrict the circuits by   that is in P can be computed by a small monotone cir-
allowing only AND and OR gates, and disallowing NOT
gates. Notice that “∧” and “∨” are monotone opera-
tions, in the sense that changing an input bit from 0
to 1 will not change the output of the gate from 1 to
0, where as “¬” is certainly not monotone in this sense.
A circuit that uses just “∧” and “∨” is called a mono-
tone circuit. It is not hard to show that every monotone     that every pair is connected by an edge and 0 other-
function f : In → Im can be computed by a monotone
circuit, and that almost all monotone functions need
exponential-sized circuits.
   Does the extra restriction on the circuits make it eas-   than monotone circuits, even for computing monotone
ier to prove lower bounds? For over forty years the
answer seemed to be not much: nobody could prove a
super-polynomial lower bound for the monotone com-
plexity of any explicit monotone function. But then, in
1985, a new technique called the approximation method
was invented to prove the remarkable theorem that
CLIQUE has super-polynomial monotone complexity.
This technique eventually led to the following even
stronger result.
Theorem. CLIQUE requires monotone circuits of expo-
nential size.
  Very roughly speaking, the approximation method
works as follows. Assume that CLIQUE can be com-
puted with a small monotone circuit. Then replace
the occurrences of “∧” and “∨” in this circuit with
other gates that are cleverly chosen (and complex to
describe), denoting these by “∧
The new gates are chosen to satisfy two key properties.
  (i) Replacing one particular gate has only a “small”

 (ii) On the other hand, every circuit (regard less of its    already been evaluated, then the number of phases you

CLIQUE is a well-known NP-complete problem, so the
above theorem provides us with an explicit monotone

587
function, conjectured not to be in P, that cannot be
computed by small monotone circuits. It is natural at
this point to wonder whether every monotone function
cuit. If so, we would be able to deduce that P ≠ N P.
However, the same method yields a super-polynomial
lower bound for the size of monotone circuits that com-
pute the PERFECT MATCHING function, which is mono-
tone and is in P. Given a graph G, this function out-
puts 1 if one can pair up the vertices in such a way
wise. Further more, exponential-size lower bounds are
known for other monotone functions in P, so general
circuits are known to be substantially more powerful
functions.
5.1.3   Bounded-Depth Circuits
To understand the motivation for our next model, con-
sider the following basic question: “Can one speed up
computation by using several computers in parallel?”
For instance, suppose that a certain task can be per-
formed by one computer in t steps. Can it be performed
by t (or even t 2 ) cooperating computers in constant
√
time (or just in t time)? The common wisdom is that
the answer depends on the task in question: if a single
person can dig at a rate of one cubic meter per hour,
then in one hour a hundred people can dig a ditch that
is 100 m long, but not a hole 100 m deep. Determining
which computational tasks can be “parallelized” when
many processors are available and which are “inher-
ently sequential” is a basic question for both practical
∨,” respectively.
 ̃ ” and “ ̃                     and theoretical reasons.
A very good feature of the circuit model is that it can
easily be used to study questions of this kind. Let us
define the depth of a DAG to be the length of the longest
effect on the output of the circuit (where “small” is   directed path in it: that is, the longest sequence of ver-
defined in terms of a certain natural but nontrivial    tices where there is an edge from each one to the next.
measure of distance). Consequently, if a circuit has   This notion of depth models the parallel time needed
few gates, then replacing all of them yields a new     to compute the function: if you put a separate proces-
circuit that approximates the original circuit for     sor at each gate of a circuit of depth d, and at each
“most” choices of inputs.
size) containing only the approximating gates “ ̃  ∧”   need is d. Parallel time is another important com put a-
and “ ̃∨” computes a function that can be shown to
be “far” from CLIQUE, in the sense that it disagrees   we do not know how to disprove the statement that
with CLIQUE on many inputs.
polynomial size and logarithmic depth.
Thus, we will restrict d to be a constant. It then be-
comes necessary to allow our gates to have unbounded

588

fan-in, meaning that the AND and OR gates are allowed
to have any number of in coming edges. (If we do not
allow this, then each output bit can depend only on
a constant number of input bits.) With this very strin-
gent restriction on circuit depth, it is possible to prove   circuit has the additional property that its underlying
lower bounds for the complexity of explicit functions.
For example, let PAR(x) (for “parity”) equal 1 if and only   tation is not allowed to reuse a previously computed
if the binary string has an odd number of 1 s, and let
MAJ(x) (for “majority”) equal 1 if and only if there are     measure for formulas is the number of occurrences of
more 1 s than 0 s in x.
Theorem. For any constant d, the functions PAR and
MAJ cannot be computed by a polynomial-sized family
of circuits of depth d.
  This result is due to another fundamental proof tech-
nique: the random restriction method. The idea is to fix
at random (with judiciously chosen parameters) most
of the input variables, by assigning them random val-
ues. Note that this simultaneously restricts the function    PAR(PAR(x1 , . . . , xn ), PAR(xn+1 , . . . , x2 n )), we obtain a
as well as the circuit. This “restriction” should satisfy    formula for the parity of n variables that has size n2 .
the following two properties.
  (i) The restricted circuit becomes very simple: for

 (ii) The restricted function remains complex: for in-

For PAR the second property is easily seen to hold, and
of course the heart of the matter is analyzing the effect     ear-size circuits for both functions. This is very easy to
of random restrictions on shallow circuits.
   Interestingly, MAJ remains hard for constant-depth
polynomial-size circuits even if the circuits are also
allowed (unbounded fan-in) PAR-gates. However the
“converse” does not hold; that is, PAR has constant-
depth polynomial-size circuits with (unbounded fan-
in) MAJ-gates. Indeed, the latter class seems to be quite
powerful: nobody has managed to prove that there are
functions in N P that cannot be computed by such
circuits, even if the depth is restricted to 3.
5.1.4   Formula Size
Formulas are perhaps the most standard way in which
mathematicians express functions. For example, given
a quadratic polynomial at 2 + bt + c with b2 > 4 ac,
the larger of its two roots is represented in terms
of its (input) coefficients a, b, and c by the formula

(−b + b 2 − 4 ac)/2 a. This is an arithmetic formula. In
Boolean formulas the logical operations “¬”, “∧”, “∨”

IV. Branches of Mathematics
replace the arithmetic operations above. For example, if
x = (x1 , x2 ) is a Boolean string of length 2, then PAR(x)
is given by the formula (¬x1 ∧ x2 ) ∨ (x1 ∧ ¬x2 ).
Any formula can be represented by a circuit, but this
DAG is a tree. Intuitively, this means that the compu-
partial result (unless it recomputes it). A natural size
variables in them, which is the same as the number of
gates, to within a factor of 2.
Formulas are natural not only because of their preva-
lence in mathematics, but also because their size can
be related to the depth of circuits and to the mem-
ory requirements of Turing machines (i.e., their space
complexity).
By recursively using the above formula for PAR, that
is, by using the fact that PAR(x1 , . . . , x2 n ) is equal to
Given the fact that PAR has a simple circuit of linear
size, one might wonder if there are smaller formulas
as well. One of the oldest results in circuit complexity
instance, it may depend on only a small subset of
gives a negative answer.
the remaining, unfixed input variables.
Theorem. Boolean formulas for PAR and MAJ must
stance, it may depend on all remaining input
variables.
The proof follows a simple combinatorial (or infor-
mation-theoretic) argument. By contrast, there are lin-
show for PAR, but not for MAJ.
Can we give super-polynomial lower bounds on for-
mula size? One of the cleanest methods suggested so
far is the communication complexity method, which pro-
vides an information-theoretic setting for studying this
computational problem. The power of this approach
has been demonstrated mainly in the context of mono-
tone formulas, where it yields an exponential lower
bound for the PERFECT MATCHING problem (defined in
section 5.1.2).
Suppose that two players play the following game.
One player is given a graph G with n vertices that con-
tains no perfect matching, and the other is given a
graph H, with the same vertices, that does contain a
perfect matching. Then there must be some pair of ver-
tices that are joined by an edge in H but not joined
in G. The aim of the two players is to find such a pair
√
by sending each other bit strings, which each thinks of
as encoding messages according to some prearranged

$IV$ . $20$ .

Computational Complexity

scheme. Of course, the player with graph G could simply send enough messages to specify the entire graph, but the question is whether there is some protocol that would enable them to find a pair of the desired kind with far fewer bits being exchanged. The smallest number of bits needed (in the worst case) is called the monotone communication complexity of the problem. It has been shown that the monotone communication complexity must be at least linear in n, and this leads to the exponential lower bound just mentioned. More generally, if $f$ :
$I^{n} \to {0}$ , $1$ is a monotone function, then the monotone communication complexity of f is the smallest number of bits that must be exchanged, in the worst case, to find a place $i$ where $x^{i} = 0$ and $y^{i} = 1$ , if $f(x) = 0$ and $f(y) = 1$ . If f is not monotone, then one simply asks to find i such that x $i$ and $y$ i differ, and the smallest number of exchanges needed is the communication complexity of f .
It can be shown that the monotone formula size of f is at least exp (cm) for a positive constant c if and only if the monotone communication complexity of f is at least c m for a positive constant c . The corresponding statement also holds for general formula size and general communication complexity.

$5$ . $1$ . $5$

Why Is It so Difficult to Prove Lower Bounds? As we have seen, complexity theory has developed quite a few powerful techniques, which have been useful for proving strong lower bounds, at least in restricted models of computation. But they all fall well short of providing nontrivial lower bounds for general circuits. Is there a fundamental reason for this failure? The same may be asked about any long-standing mathematical problem, such as the riemann hypothesis [V.26](/part-05/the-prime-number-theorem-and-the-vi34-jnos-bolyai-18021860), for example, and the typical answer would be rather vague:
 that it seems that the current tools and ideas do not suffice. Remarkably, for circuit complexity this vague feeling has been made into a precise theorem. Thus, there is a “formal excuse” for our failure so far. Roughly speaking, a very general class of arguments, called natural proofs, has been defined and shown to include all known proofs of lower bounds for restricted circuits. In fact, so broad is the class of arguments that it is very hard to envisage what an “unnatural” proof might be like.
On the other hand, it has also been shown that if there is a natural proof that P $\neq$ N P, then there are fairly efficient (not quite polynomial-time, but significantly faster than known) algorithms for various problems, including integer factorization. So if, like most

$589$

complexity theorists, you believe that these problems do not have efficient algorithms, then you also believe that there is no natural proof that P $\neq$ N P. The connection between natural proofs that P $\neq$ N P and some notoriously hard problems is through the notion of pseudo randomness, which is discussed in section $7$ . $1$ . One interpretation of this result is that it shows that general circuit lower bounds are “independent” of a certain natural fragment of peano arithmetic [III.67](/part-03/the-peano-axioms).
This gives a hint that the P versus N P question may be independent of all of Peano arithmetic, or even of the axioms of zfc [IV.22](/part-04/set-theory), although few believe the latter to be the case. $5$ . $2$ Arithmetic Circuits As mentioned earlier, directed a cyclic graphs can be used in various different contexts. We shall now leave Boolean functions and operations and look instead at arithmetical operations and functions that take numerical values, by which we mean values in Q or R or indeed in any field [I.3](/part-01/fundamental-definitions).
If F is a field, then we can consider a DAG in which the inputs are now elements of F and the gates are the field operations “ + ” and “ $\times$ ” (including multiplication by fixed field elements such as $- 1)$ . Then, just as with Boolean circuits, once we know the inputs we can assign values to all vertices of the DAG: at each vertex one just applies the corresponding arithmetical operation to the values assigned to its predecessors, once these have been calculated. An arithmetic circuit computes a polynomial function p :
F n $\to$ F m , and every homogeneous polynomial function is computed by some circuit. To allow the computation of inhomogeneous polynomials, we augment the model by allowing a special input vertex whose value is the constant “ $1$ ” of the field. Let us consider a couple of examples. The polynomial $x^{2} - y^{2}$ , which as written requires two multiplications and one addition, can be computed by the circuit (x + y) (x - y) which requires instead one multiplication and two additions.
The polynomial x d , which is defined using $d - 1$ multiplications, may in fact be computed with only $2$ log d multiplications: first compute x, $x^{2}$ , $x^{4}$ , . . . (each term in the sequence squaring the previous one), and then multiply together the appropriate subset of these powers to get the exponent d. We denote by S F (p) the smallest possible size of a circuit that computes p. When we give no subscript, we shall assume that $F = Q$ , the field of rational numbers.

$590$

We do not count multiplication by a fixed field element as contributing to the size of a circuit: for example, when we said that (x  +  y) (x  -  y) involves one multiplication, we were not counting the multiplication of $y$ by $- 1$ . The reader may wonder about division. However, we will be mainly interested in computing polynomials, and for computing polynomials (over infinite fields) division can be efficiently emulated by the other operations. As usual, we will be interested in sequences of polynomials, one for every input size, and will study size asymptotically.
It is easy to see that, for any fixed finite field F , arithmetic circuits over F can simulate Boolean circuits (on Boolean inputs) with only a constant factor increase in size. Thus, lower bounds for such arithmetic circuits yield corresponding lower bounds for Boolean circuits. Therefore, if we want to avoid the extreme difficulty with which we are already familiar, it makes sense to focus more on infinite fields, where lower bounds may perhaps be easier to obtain. As in the Boolean case, the mere existence of hard polynomials is easy to establish.
4 But, as before, we will be interested in explicit (families of) polynomials. The notion of explicitness is more delicate here, but it can be formally defined (and , for example, polynomials with algebraically independent coefficients are not considered explicit). An important parameter, which is absent in the Boolean model, is the degree of the polynomial (s) being computed. For example, a polynomial of degree d, even in one variable, requires size at least log d.
Let us briefly consider the one-variable, or univariate, case first, in which the degree is the main parameter of interest, since this case already contains striking and important problems. Then we shall move to the general multivariate case, in which n, the number of inputs, will be the main parameter.

$5$ . $2$ . $1$

Univariate Polynomials

How tight is the log d lower bound for the size of an arithmetic circuit computing a polynomial of degree d? A simple dimension argument shows that for most degree-d polynomials p, S (p) is proportional to d. However, we know of no explicit polynomial with this $4$ . A counting argument over infinite fields is inadequate (e . g . , for every a, b $\in$ F the circuit ax  +  b has size two, and so there are infinitely many circuits of size $2$ ).
Instead, a “dimension” argument is used, showing that the set of polynomials that are computable by small circuits forms a vector space of lower dimension than the set of all polynomials of adequate degree.

IV. Branches of Mathematics

property. (Of course, this is shorthand for “explicit family of polynomials, one for each degree d . ”) In fact, considerably less is known even than this. Open problem. Find an explicit polynomial p of degree d, such that S (p) is not bounded above by c log d for some constant c. Two concrete examples are illuminating. Let p d (x)  =  $x^{d}$ , and $q^{d}(x) = (x + 1)(x + 2)$ · · · $(x + d)$ . We have already seen that S (p d) $\le 2$ log d, so the trivial lower bound is relatively tight.
On the other hand, it is a major open problem to determine S (q d), and the conjecture is that S (q d) grows more quickly than any power of log d. This question is particularly important because of the following result. If S (q d) is bounded above by a power of log d, then integer factorization has polynomial-size circuits.

$5$ . $2$ . $2$

Multivariate Polynomials

Now let us return to polynomials with n variables. It is convenient to make n our only input size parameter, so we shall restrict ourselves to polynomials of total degree at most n, even when we do not mention this restriction. For almost every polynomial p in n variables, S (p) is at least exp (n $/2$ ). Again, this follows from an easy dimension argument, but again we would like to find explicit (families of) polynomials that are hard to compute. Unlike in the Boolean world, here there are lower bounds that slightly exceed the trivial ones.
The following theorem is proved using elementary tools from algebraic geometry. Theorem. There is a positive constant c such that

S((x1)n + (x2)n + · · · $+ x^{n}n) \ge cn$ log n. The same techniques extend to prove lower bounds of similar strength for other natural polynomials such as the symmetric polynomials and the determinant [III.15](/part-03/determinants) (which can be regarded as a polynomial in the entries of the matrix). Establishing a stronger lower bound for some explicit polynomial is a major open problem. Another is obtaining a superlinear lower bound for any polynomial map of constant total degree.
Outstanding candidates for the latter are the linear maps that compute the discrete Fourier transform over the complex numbers or the Walsh transform over the rationals. For both these transformations algorithms of time complexity O (n log n) are known.

$IV$ . $20$ .

Computational Complexity

Now let us focus on specific polynomials of central importance. The most natural and well-studied candidate for the last open problem is matrix multiplication [I.3](/part-01/fundamental-definitions) : given two $m \times m$ matrices A,  B, how many operations are needed to compute their product? The obvious algorithm, which follows from the definition of matrix product, requires about $m^{3}$ operations. Can this be beaten? It turns out that what really matters here is the number of multiplications.
The first hint that one can improve on the obvious algorithm comes from the first nontrivial case (i . e . , m $= 2$ ). While the usual algorithm uses eight multiplications, one can in fact reorganize the calculation and get away with only seven. This leads to a recursive argument: given $a 2m \times 2m$ matrix, think of it as $a 2 \times 2$ matrix, each entry of which is itself an m $\times$ m matrix. It follows that doubling the size of the matrix increases the number of multiplications needed by a factor of at most $7$ .
This argument leads to an algorithm with only $m$ log 2 7 multiplications (and roughly as many additions). These ideas have been developed and extended to yield the following strong, but not quite linear, upper bound, where we denote by $n = m^{2}$ the natural input size, and by MM the matrix multiplication function. Theorem. For every field F there is a constant c such that $S^{F}(MM) \le cn^{1}$ . 19 . So what is the complexity of MM (even if one counts only multiplication gates) ? Is it linear, or almost linear (something like n log n, say), or is S (MM) at least n α for some $α > 1$ ?
This is a famous open problem. We next consider two polynomials in the $n = m^{2}$ variables representing an m $\times$ m matrix. We have already mentioned the determinant, but we shall also look at the permanent, which is defined by the determinant formula, except that now all the signs are positive. (In other words, one simply adds up m! products instead of adding some and subtracting others .) We shall denote these by DET and PER, respectively. While DET plays a major role in classical mathematics, PER is some what esoteric (though it appears in statistical mechanics and quantum mechanics).
 In the context of complexity theory both polynomials are of great importance, because they are representative of natural complexity classes. DET has relatively low complexity (and is related to the class of polynomials having polynomial-sized arithmetic formulas), while PER seems to have high complexity (indeed , it is complete for a complexity class of counting problems denoted #P, which extends N P). Thus, it is natural $591$ to conjecture that PER is not polynomial-time reducible to DET. One restricted type of reduction that makes sense in this algebraic context is called projection.
Suppose we wish to find an algorithm for computing the permanent of an m $\times$ m matrix A. One approach might be to construct an M $\times$ M matrix B such that each of its entries is either a (variable) entry of A or a fixed element of the field, and to do so in such a way that the determinant of B equals the permanent of A. Then, as long as M is not too much larger than m, we can use the efficient algorithm for DET to give us an efficient algorithm for PER. A projection of this kind is known to exist with M $= 3$ m , but this is nothing like good enough.
Therefore we ask the following question. Open problem. Can the permanent of an m $\times$ m matrix be expressed as the determinant of an M $\times$ M matrix, with M bounded above by a polynomial in m? If so, then $P = N$ P: therefore, the answer is likely to be no. Conversely, if the answer could be shown to be no, then this would provide a significant step toward proving that P $\neq$ N P, though it would probably not imply it. $5$ . $3$

Proof Complexity

The concept of proof distinguishes mathematics from all other fields of human inquiry. Mathematicians have gathered millennia of experience to attribute such adjectives to proofs as “insightful,” “original,” “deep,” and, most notably, “difficult.” Can one quantify mathematically the difficulty of proving various theorems? This is exactly the task under taken in proof complexity. It seeks to classify theorems according to the difficulty of proving them, much as circuit complexity seeks to classify functions according to the difficulty of computing them.
In proofs, just as in computation, there will be a number of models, called proof systems, that capture the power of reasoning that is allowed to the prover. The types of statements, theorems, and proofs we shall deal with are best illustrated by the following example. We warn the reader in advance that the theorem we are about to discuss may seem too trivial to give us any insight into the nature of proofs: however, it turns out to be highly relevant.
The theorem in question is the well-known pigeonhole principle, which states that if you have more pigeons than holes then at least two pigeons will have to share a hole. More formally, there is no injection

$592$

[I.2](/part-01/language-and-grammar) f from a finite set $X$ to a smaller finite set Y . Let us reformulate this theorem and then discuss the complexity of proving it. First, we turn it into a sequence of finite statements. For each m $>$ n let PHP m n stand for the statement, “You cannot fit m pigeons into n holes if each pigeon needs a hole to itself.” A convenient way of formulating this mathematically is to use an m $\times$ n matrix of Boolean variables x ij .
This can be used to describe a hypothetical mapping if we interpret $xij = 1$ to mean that the ith pigeon is placed in the jth hole. The pigeonhole principle states that either some pigeon is not mapped any where or two pigeons are mapped to the same hole. In terms of the matrix, this says that either there is some i such that $xij = 0$ for every j, or we can find $i \n\text{eq i}$ and $j$ such that xij = (xi)j = 1 .
5 These conditions are easily expressible as a propositional formula in the variables x ij (that is, an expression built out of the x ij using “∧”, “∨”, and “ ¬ ”), and the pigeonhole principle is the statement that this formula is a tautology: that is, it is satisfied by every assignment of true or false values (or equivalently $1$ or 0) to the variables. How can we prove this tautology to some one who can read our proof and perform simple, efficient computations? Here are a few possibilities which differ from each other in a number of ways. • The standard proof uses symmetry and induction.
$m - 1$ It reduces PHP m n to PHP $n - {}^{1}$ by saying that once the first pigeon has been assigned a hole, the task that is left is to place the remaining $n - 1$ pigeons into $m - 1$ holes. Notice that these holes may not be the first $n - 1$ holes, so for such an argument to become a formal proof one must argue by symmetry. Our proof system must be strong enough to capture this symmetry (which amounts to a renaming of the variables), and it must also allow us to use induction.
• At the other extreme, one can obtain a trivial proof, which requires only “mechanical reasoning,” by simply presenting an evaluation of the formula for every possible input. As there are mn variables, the proof length is $2$ mn , which is exponential in the size of the formula describing the assertion PHP m n . • A more sophisticated (“ mechanical ”) proof uses counting. Assume for a contradiction that there $5$ . Note that we have not ruled out the possibility that some pigeon is mapped to more than one hole--we could do so, but the principle remains valid even if we do not. IV.
Branches of Mathematics exists an assignment of truth values to the variables that falsifies the formula. Since each pigeon is mapped to some hole, the assignment must have at least m $1s$ . But since each hole contains at most one pigeon, the assignment must contain at most $n 1s$ . Therefore, $m \le n,$ which contradicts the assumption that m $>$ n. For this proof to be admissible, our system has to allow inferences powerful enough to do counting of this kind. The lesson from the above example is that proofs and their length depend on the underlying proof system.
But what exactly is a proof system, and how do we measure the complexity of a proof? It is to this question that we now turn. Here are the salient features that we expect from any such system. Completeness: every true statement has a proof. Soundness: no false statement has a proof. Verification efficiency: given a mathematical statement T and a purported proof for it $\pi$ , it can be easily checked whether $\pi$ does indeed prove T in the system.
$6$ Actually, even the first two requirements are too much to expect from strong proof systems, as gödel [VI.92](/part-06/kurt-gdel-19061978) famously proved in his incompleteness theorem [V.15](/part-05/gdels-theorem). However, we are considering just propositional formulas with finite proofs, and for these there are proof systems. In this context, the above conditions are concisely captured by the following definition. Definition.
A (propositional) proof system is a polynomial-time Turing machine M with the property that T is a tautology if and only if there exists a (“ proof ”) $\pi$ such that $M(\pi$ , $T) = 1$ . 7 As a simple example, consider the following “truthtable” proof system M TT , which corresponds to the trivial proof in the foregoing example. Basically, this machine will declare a formula T to be a theorem if evaluating T on each possible input makes T true.
A bit more formally, for any formula T in n variables, M $TT(\pi$ , $T) = 1$ if and only if $\pi$ is $a$ list of all binary strings of length n, and for each such string σ we have T $(σ) = 1$ . $6$ . Here, efficiency of the verification procedure refers to its running time measured in terms of the total length of the alleged theorem and proof. In contrast, in sections $3$ . $2$ and $6$ . $3$ , we consider the running time as a function of the length of the alleged theorem (or , alternatively, allow only proofs of a priori bounded length). $7$ .
In agreement with standard formalisms (see below), the proof is seen as coming before the theorem.

IV.20.   Computational Complexity

   Notice that MTT runs in polynomial time in its input
length. The point, of course, is that for typical interest-
ing formulas such as the pigeonhole principle, whose
size depends polynomially on the number of variables,
the input length is extremely long, since the proof π
has length exponential in the length of the formula.
This leads us to the definition of the efficiency (or com-
plexity) of a general propositional proof system M: it
is the length of the shortest proof of each tautology.
That is, if T is a tautology, we define its complexity
LM (T ) to be the length of the shortest string π such
that M(π , T ) = 1. We then measure the efficiency of the
proof system itself (i.e., M) by defining LM (n) to be the
maximum of LM (T ) over all tautologies T of length n.
   Is there a propositional proof system which has
polynomial-size proofs for all tautologies? The follow-
ing theorem provides a basic connection between this
question and computational complexity, and in partic-
ular with the major question of section 3.4. It follows
quite easily from the NP-completeness of SAT, the prob-
lem of satisfying propositional formulas (and the fact
that a formula is satisfiable if and only if its negation
is not a tautology).
Theorem. There exists a proof system M such that LM
is polynomial if and only if N P = co N P.
   To start attacking this formidable problem it makes
good sense to begin by considering simpler (and thus
weaker) proof systems before moving on to more and
more complex ones. More over, there are tautologies
and proof systems that naturally suggest themselves
as good ones to study, systems in which certain basic
forms of reasoning are allowed while others are not. In
the rest of this section we shall focus on some of these
restricted proof systems.
   If a typical proof in a branch of mathematics such as
algebra, geometry, or logic is written out in full, then it
starts with some axioms and proceeds to a conclusion
using a set of very simple and transparent deduction
rules. Each line of the proof consists of a mathemat-
ical statement, or formula, which follows from earlier
statements by means of one of these rules.8 This deduc-
tive approach goes right back to euclid [VI.2](/part-06/euclid-ca) and per-
fectly fits our DAG model: the inputs can be labeled
by the axioms, every other vertex is assigned a deduc-
tion rule, and the statement associated with each vertex
  8. General proof systems as we defined them can also be adapted to     the sense that (up to polynomial factors) the length
this formalism, by considering a deduction rule that corresponds to a
single step of the machine M. However, the deduction rules considered
below are even simpler, and more importantly they are natural.

593
is the statement that follows from its predecessors by
means of the specified rule.
There is an equivalent and some what more conve-
nient view of (simple) proof systems, namely as (sim-
ple) refutation systems. These encapsulate the idea of
a proof by contradiction. We assume the negation of
the tautology T we wish to prove, and use the rules of
the system to derive a contradiction—that is, a state-
ment that is identically FALSE. It is often easy to write
the negation of a tautology T as a conjunction of mutu-
ally contradicting formulas (e.g., a set of clauses with
no common truth assignment, a system of polynomials
with no common root, a collection of half-spaces with
empty intersection, etc). Assuming, for a contradiction,
that all these are simultaneously satisfiable by some σ
(which could be an assignment, root, or point, respec-
tively), we derive more and more formulas that must
also be satisfied by σ because of the soundness of the
derivation rules, until eventually we reach a blatant con-
tradiction (such as ¬x ∧ x, 1 = 0, or 1 < 0, respec-
tively). We will use the refutation viewpoint through-
out, and often exchange “tautology” and its negation,
“contradiction.”
So we turn to studying the proof length LΠ (T ) of tau-
tologies T in proof systems Π. The first observation,
which reveals a major difference between proof com-
plexity and circuit complexity, is that the trivial count-
ing argument fails. The reason is that, while the number
n
of functions on n bits is 22 , there are at most 2 n tau-
tologies of length n. Thus, in proof complexity, even
the existence of a hard tautology, let alone an explicit
one, would be of interest. As we shall see, however,
most known lower bounds (in restricted proof systems)
apply to very natural tautologies.
5.3.1   Logical Proof Systems
The proof systems in this section will all have lines that
are Boolean formulas. The differences between the sys-
tems will be in the structural limits that are imposed
on these formulas.
The most basic proof system, called the Frege system,
puts no restriction on the formulas manipulated by the
proof. It has just one derivation rule, called the cut rule:
from the two formulas (A ∨ C), (B ∨ ¬C) we can derive
A ∨ B. Different basic books in logic have slightly dif-
ferent ways of describing this system. However, from
a computational perspective they are all equivalent, in
of the shortest proofs is independent of which variant
you pick.

$594$

The counting-based proof of the pigeonhole principle can be carried out efficiently in the Frege system (but this is not a trivial fact), which tells us that L Frege (PHP $n + {}^{1}$ n) is polynomial in n. The major open problem in proof complexity is to find any tautology (as usual we mean a family of tautologies) that has no polynomial-size proof in the Frege system. Open problem. Establish a super-polynomial lower bound for the Frege system. As it seems to be very hard to find lower bounds for Frege systems, we turn to natural and interesting subsystems.
The most widely studied system is called resolution. Its importance stems from its use by most propositional (as well as firstorder) automated theorem provers. 9 The formulas allowed in resolution refutations are simply clauses (disjunctions), so the cut rule defined earlier simplifies to the resolution rule: from two clauses (A ∨ x), (B ∨ ¬ x) we can derive A ∨ B, where A, B are clauses and x is a variable. A major result of proof complexity is that proving the pigeonhole principle is hard in the resolution system. Theorem. L resolution (PHP $n + {}^{1}\Omega(n)n) = 2$

The proof of this result is related in an interesting way to the circuit lower bounds for the parity and majority functions discussed in section $5$ . $1$ . $3$ .

$5$ . $3$ . $2$

Algebraic Proof Systems

Just as a natural contradiction in the Boolean setting is an unsatisfiable collection of clauses, a natural contradiction in the algebraic setting is a system of polynomials with out a common root. 10 How would you prove that the system {f ${}^{1} = xy + 1$ , $f^{2} = 2yz - 1$ , $f^{3} = xz + 1$ , $f^{4} = x + y + z - 1$ has no common root (over any field) ? A quick way is to observe that $zf^{1} - xf^{2} + yf^{3} - f^{4}$ ≡ $1$ . Clearly, a common root of the system would be a root of this linear combination, which is a contradiction because the constant $1$ function has no root.
Can we always use such proofs? $9$ . These are algorithms that attempt to generate proofs for given tautologies. These tautologies may be boring mathematically but of great practical importance, such as the statement that a computer chip or communication protocol functions correctly. Interestingly, popular applications also include a variety of theorems that are mathematically interesting, such as results in basic number theory. $10$ . More over, polynomials can easily encode propositional formulas. First, one puts such a formula into conjunctive normal form, or CNF:
that is, one expresses it as the conjunction of a collection of clauses. CNF formulas can easily be converted to a system of polynomials, one per clause, over any field. One often adds the polynomials (xi)2 - xi , which ensure Boolean values.

IV. Branches of Mathematics

A famous theorem known as hilbert’s nullstellensatz [V.17](/part-05/hilberts-nullstellensatz) tells us that the answer is yes. It states that if $f^{1}$ , $f^{2}$ , . . . , f n are polynomials (with any number of variables) that have no common root, then there exist polynomials $g^{1}$ , . . . , g n such that i g i f i ≡ $1$ . How efficient are such proofs? Can we always have proofs (i . e . , g i s) of length polynomial in the description of the f i s? Unfortunately not: the shortest explicit description of the g i s may be of exponential length, though proving this fact is highly nontrivial.
 Another natural proof system, which is related both to Hilbert’s Nullstellensatz and to computations of Gröbner bases in symbolic algebra programs, is polynomial calculus (PC). The lines in this system are polynomials, represented explicitly by all their coefficients, and it has two deduction rules: for any two polynomials g, h, we can derive their sum, g  +  h, and for any polynomial g and any variable x i , we can derive the product x i g. PC is known to be exponentially stronger than the proof system underlying Hilbert’s Nullstellensatz.
However, strong size lower bounds (obtained from degree lower bounds) are known for this system as well. For example, encoding the pigeonhole principle as a contradicting set of constant degree polynomials, we have the following theorem. Theorem. For every n and every m $>$ n, L PC (PHP m

$n) \ge2^{n}/ {}^{2}$ , over every field.

$5$ . $3$ . $3$

Geometric Proof Systems

Yet another natural way to represent contradictions is by sets of regions in space that have empty intersection. For instance, many important problems in combinatorial optimization concern systems of linear inequalities in R n and their relationship to the Boolean cube { $0$ , $1$ } n . Each inequality defines a half-space, and the problem is to decide whether the intersection of all these halfspaces contains a point with coordinates all equal to $0$ or $1$ . The most basic proof system is called Cutting Planes (CP). A line of a proof is a linear inequality with integer coefficients.
The deduction rules are that you can add two inequalities, and, less obviously, that you can divide the coefficients by a constant and do some rounding, taking advantage of the fact that the points of the solution space have integer coordinates.

While PHP m

n is easy in this system, exponential lower bounds are known for other tautologies. They are obtained from the monotone circuit lower bounds of section $5$ . $1$ . $2$ .

IV.20.   Computational Complexity

Up to now, the computations we have considered have
all been deterministic: that is, the output is completely     better model for efficient computation than P, which
determined by the inputs and the rules governing the
computations. In this section we shall continue to focus
on polynomial-time computations, but now we shall
allow our computing devices to make probabilistic, or
randomized, choices.
6.1   Randomized Algorithms
A famous example of such an algorithm is one that tests
for primality. If N is the positive integer to be tested,     every function in BPP has polynomial-size circuits.
then the algorithm randomly chooses k numbers less
than N, and repeatedly performs a simple test using
each of the chosen numbers in turn. If N is composite,
then the probability that the test detects this is at least   Open problem. Does P = BPP?
3
4 . Therefore, the probability that the algorithm fails
to detect it for any of the k numbers is at most ( 14 )k ,
which is very small indeed for even modestly large val-
ues of k. Details of how the test works can be found in
computational number theory [IV.3 §2](/part-04/computational-number-theory).
   It is not hard to give a rigorous definition of a ran-
domized Turing machine, but we shall not need the
precise details here. The main point is that if M is a
randomized Turing machine and x is an input string,
then M(x) is not a fixed output string, but rather a ran-
dom variable [III.71 §4](/part-03/probability-distributions). If, for example, the output is
a single bit, then we shall make statements such as,
“The probability that M(x) = 1 is p.” The actual value
of M(x) will depend on the particular random choices
made by the machine M when it runs.
   If we are using a randomized algorithm to solve a
decision problem S, then we would like M(x) to give the
correct answer with high probability whatever the input
x. (The correct answer is 1 if x ∈ S and 0 otherwise.)
This leads to the definition of the complexity class BPP
(for bounded error, probabilistic polynomial time).
Definition (BPP). A Boolean function f is in BPP if
there exists a probabilistic polynomial-time machine M
such that Pr[M(x) ≠ f (x)] ⩽ 13 for every x ∈ I.
   The error bound 13 is arbitrary, and can be made
much smaller if one runs the algorithm several times
and takes a majority vote of the answers. (We stress
that the random moves in the various runs are inde-
pendent.) Standard probabilistic estimates show that,
for any k, the error probability can be reduced to 2−k
if one runs the algorithm O(k) times.

595
6   Randomized Computation
an exponentially small chance of failure is of no prac-
tical importance, the class BPP is in many ways a
it trivially contains. Let us mention some relations of
this class BPP to other complexity classes we have
seen already. It is easy to see that BPP ⊆ EXP; if
the machine tosses m coins, we could enumerate all
2 m possible out comes of these coin tosses and take a
majority vote. The relation of BPP to N P is not known,
but it is known that if P = N P then P = BPP as
well. Finally, nonuniformity can replace randomness:
But the fundamental question is whether or not ran-
domized algorithms are genuinely more powerful than
deterministic ones (for decision problems).
As we mentioned earlier, a deterministic polynomial-
time algorithm was recently discovered for primality
testing, though in practice the randomized algorithm
is much more efficient. However, there are quite a few
problems11 that are known to be in BPP but not known
to be in P. Indeed, for most of these problems random-
ness gives an exponential improvement over the best
deterministic algorithms that are known. Is this evi-
dence that randomness increases our power to solve
decision problems? Surprisingly, a completely different
kind of evidence (discussed in section 7.1) suggests the
opposite, namely that P = BPP.
6.2   Counting at Random
One important general question regarding N P search
problems is that of determining how many solutions a
particular instance has. This includes a host of inter-
esting problems from various disciplines: for example,
counting the number of solutions to a system of mul-
tivariate polynomials, counting the number of perfect
matchings of a graph (or, equivalently, computing the
permanent of a {0, 1} matrix), computing the volume
of a polytope (defined by linear inequalities) in high
dimension (see [I.4 §9](/part-01/general-goals) for more about this problem),
computing various parameters of physical systems, etc.
For most of these problems, even approximate count-
ing is good enough. Clearly, an approximate count of
the number of solutions will in particular allow one to
11. A central example is Identity Testing: given an arithmetic
circuit over Q, decide if it computes the identically zero polynomial.

596

determine whether a solution exists at all. For exam-
ple, if one knows the approximate number of satisfy-
ing assignments for a given propositional formula, then
one certainly knows whether this number is at least
1. This tells us whether the formula is satisfiable and
solves an instance of SAT. Interestingly, the converse is
also true: if one can solve SAT, then one can use this
ability to produce a randomized algorithm for approx-
imating the number of solutions, to within any con-
stant factor greater than 1. More precisely, there is an
efficient probabilistic algorithm that can produce such
an approximate count if it is allowed to make free use
of a subroutine that solves SAT instances. It turns out
that analogous statements holds for all NP-complete
problems.
   For some problems, approximate counting can be
done with out the SAT subroutine. There are poly-
nomial-time probabilistic algorithms for approximat-
ing the permanent of positive matrices, approximating
the volume of polytopes, and more. These algorithms
use a connection between approximate counting and
another natural algorithmic problem: that of randomly
generating a solution in such a way that all correct solu-     6.3.1    Interactive Proof Systems
tions are equally likely to occur. The basic technique is
to construct a Markov chain on the space of solutions
with uniform stationary distribution and to analyze the
rate of convergence of the chain to this distribution (see     problem is clearly in N P, since one can just exhibit a
Hochbaum 1996, chapter 12).
   What about exact counting? It is believed that this
cannot be done by an efficient probabilistic algorithm,
even if it can make free use of a SAT subroutine. A
remarkable “complete” problem for this class of count-
ing problems is counting the number of perfect match-
ings in a graph. What is surprising about it is that there     verifier checks (in polynomial time) that it is valid.
is an efficient algorithm for finding a perfect matching
in a graph, if one exists, and yet counting such match-
ings is complete in the sense that an efficient algorithm
for doing this can be turned into an efficient algorithm
for the counting version of any other problem in N P.
6.3   Probabilistic Proof Systems
As we saw earlier, proof systems are defined in terms
of their verification procedure. In section 5.3, we con-
side red verification procedures that run in time that
is polynomial in the combined length of the assertion
and its alleged proof. Here (as in section 3.2), we restrict
our attention to verification procedures that run in time
that is polynomial in the length of the assertion. Such
proof systems are related to the class N P, since sets S

IV. Branches of Mathematics
in N P are those with the following property: there is
a polynomial-time algorithm M such that x belongs to
S if and only if there exists a string y of length poly-
nomial in x with M(x, y) = 1. In other words, we can
regard y as a concise proof (verifiable by M) that x
belongs to S.
What if we now allow M to be a randomized algo-
rithm? Then we obtain a probabilistic proof system. Such
systems are not put forward as a substitute for the
notion of mathematical proof, but rather as an inter-
esting extension of the notion of efficient verifiability
in situations where a tiny amount of error can be tol-
erated. As we shall see, various types of probabilistic
proof systems yield enormous advantages in computer
science. We shall exhibit three remarkable manifest a-
tions of this. The first shows that we can use it to prove
many more theorems, the second that we can do so
with out revealing anything in our proof, and the third
that alleged proofs can be written in such a way that
verifiers need only look at a tiny handful of bits in order
to decide whether they are correct.
Recall the graph isomorphism problem from section 4.
Given two graphs G and H, it asks whether H is
obtained from G by simply permuting the vertices. This
permutation that transforms G into H.
We can look at this as a protocol involving a ver-
ifier, who can do polynomial-time computations, and
a prover, who has unlimited computational resources.
The verifier wishes to be convinced that G and H are
isomorphic, so the prover sends a permutation and the
Suppose that we now look at the graph nonisomor-
phism problem. Is there any way for a prover to con-
vince a verifier that two graphs G and H are not iso-
morphic? Obviously there will be for some pairs of
graphs (G, H), but there does not seem to be a system-
atic method of demonstration that works for all noni-
somorphic pairs. Yet, remarkably, if we allow random-
ness and interaction, then there is a simple way for the
verifier to be convinced.12
Here is how it works. The verifier chooses at random
one of the two graphs G and H, randomly permutes its
vertices, and sends it to the prover. The prover then
12. We note that allowing interaction with out randomness does
not yield any gain; that is, such interactive (but deterministic) proof
systems are exactly as powerful as NP.

$IV$ . $20$ .

Computational Complexity

sends back a message saying whether this permuted graph is G or H. If G and H are not isomorphic, then the permuted graph is isomorphic to exactly one of G and H, so the prover can determine which and there by get the right answer. But if G and H are isomorphic, then the prover has no way of knowing which graph has been permuted, and therefore has $a_{50}$ % chance of getting the right answer. So now, to become convinced, the verifier repeats the procedure k times. If the graphs are not isomorphic, the prover will always get the right answer.
If they are isomorphic, then with probability $1 - 2 - k$ the prover will make at least one mistake. If k is large, this becomes a near-certainty, so if the prover never makes a mistake, then the verifier will be convinced that the graphs are not isomorphic. That was an example of an interactive proof system. Given a decision problem S, an interactive proof system for S is a protocol involving an interacting verifier and prover, with the property that if x $\in$ S then the verifier will eventually output $1$ , while if x ∉ S then there

$1$

is a probability of at least $2$ that the verifier will output $0$ . As in the example, the verifier can then repeat

$1$

the protocol several times, there by replacin$g^{2}$ by a probability very close to $1$ . Also as in the example, the verifier is allowed polynomial-time randomized computations and the prover has unlimited computational power. Finally, the number of rounds of the interaction must be at most polynomial in the size of the input x, so that the entire verification procedure is efficient. The class of decision problems for which an interactive proof system exists is denoted IP.
One can view the protocol as an “interrogation” by a persistent student, who asks the teacher “tough” questions in order to be convinced of correctness. Interestingly, it turns out that asking “tough” questions is no better than asking random questions! That is, every set that has an interactive proof system also has one in which the verifier only asks random questions that are uniformly and independently distributed in some predetermined set.
It turns out that for every decision problem S that belongs to N P there is an interactive proof system that can be used to demonstrate that x   $\in$ S. It works by demonstrating the nonexistence of an NP-proof that x is in S. The proof of this result, which tells us that co N P ⊂ IP, involves an arithmetization of Boolean formulas. Further more, a complete character ization of the power of interactive proofs is known.

$597$

Let PSPACE be the class of all problems solvable in polynomial space (or memory). Although solving problems in PSPACE may require exponential time, they all have interactive proofs. Theorem. $IP =$ PSPACE. While it is not known if N P $\neq$ PSPACE, it is widely believed to be the case, and so it seems that interactive proofs are much more powerful than standard noninteractive and deterministic proofs (that is, NPproofs).

$6$ . $3$ . $2$

Zero-Knowledge Proof Systems

A typical mathematical proof not only guarantees the truth of a statement, but also teaches you something about it. In this section we shall discuss a kind of proof that teaches you absolutely nothing, beyond the fact that the statement is true. Since this seems impossible, let us give an example. Suppose a prover wants to convince you that a certain map (in the geography sense) can be colored with three colors in such a way that no two adjacent regions have the same color.
The most obvious approach is actually to show you a coloring, but this teaches you something--a particular coloring--which you would not otherwise be able to find easily, even knowing that it existed (since this search problem is NPcomplete) . Is there any way the prover can convince you with out giving you this extra knowledge? Here is a way of doing it. Given any coloring of the map, with red, blue, and green, say, one can produce other colorings by permuting the colors: for instance, one might change all the red regions into blue and all the blue ones into red.
Let the prover take six copies of the map and color them in six different ways, one for each permutation of the three colors. Now we have a sequence of rounds. In each round the prover randomly chooses one of the six colored maps, you randomly choose a pair of adjacent regions, and the prover allows you to check that they have different colors, but does not allow you to look at the rest of the map.
If the graph cannot be properly colored with three colors and the prover tries to cheat, then after enough rounds (a polynomial number suffices) you will discover the deception by hitting upon two adjacent regions that have been given the same color (or perhaps one of them has not been colored at all) . However, at each stage, all you learn about the two regions you look at is that they have different colors--you have no idea what those colors are

598

in the coloring the prover started with. So you end up
with no knowledge beyond the fact that the map can
(almost certainly) be properly colored.
   Similarly, a “zero-knowledge proof” that a certain for-   will not notice the mistake. But this is true only for
mula is satisfiable should not reveal a satisfying assign-    the “natural” way of writing down proofs. It turns
ment, or even any partial information (such as the truth     out that there are ways of writing proofs “robustly”
value of one of the variables), or irrelevant information    (with a certain amount of redundancy) so that any mis-
that is hard to compute (such as how to factorize an
integer that happens to be encoded by the formula). In
general, a zero-knowledge proof is an interactive proof
that does not help you (the verifier) to make any com-
putations that you were not able to make efficiently
already.
   Which theorems have zero-knowledge proofs? Obvi-
ously, if the verifier can determine the answer with no
help, then the theorem has a trivial zero-knowledge
proof, in which the prover does nothing at all. Thus,
any set in BPP has a zero-knowledge proof. The
zero-knowledge proof outlined for 3-colorability
depended on non computational procedures, such as
the prover watching carefully to make sure that you
just look at two regions. Implementing the protocol
in full on a computer takes some care, but a method
of doing it has been devised, which depends on the
hardness of integer factorization. The result is a zero-     PCP system. Further more, there exists a polynomial-
knowledge proof system. Combining this with the NP-
completeness of 3-colorability, one can prove that
zero-knowledge proof systems exist for every set in
N P. More generally, we have the following theorem.
Theorem. If one-way functions exist (these are defined
in section 7), then every set in N P has a zero-knowl-
edge proof system. More over, this proof system can be
efficiently derived from the standard N P proof.
  This theorem has a dramatic effect on the design of
cryptographic protocols (see section 7.2). Further more,
under the same assumption, an even stronger result
holds: any set that has an interactive proof system also
has a zero-knowledge interactive proof system.
6.3.3   Probabilistic ally Checkable Proofs
In this section we turn to one of the deepest and most
surprising discoveries about the power of probabilistic
proofs. Here, as in the case of standard (noninteractive)    time algorithm that will output 1 if 99% of the equations
proofs, the verifier receives a complete written proof.
The catch is that the verifier may read only a very small,
randomly selected, part of this proof.
  A good analogy is to imagine that you are refer-
eeing a paper and trying to decide the correctness

IV. Branches of Mathematics
of a long proof by reading just a few random lines.
If the proof has a single (but crucial) mistake, then
you will probably not read the relevant line so you
take will manifest itself in many different places. (This
may remind you of error-correcting codes [VII.6](/part-07/reliable-transmission-of-information).
There is indeed an important analogy here, and cross-
fer til ization between the two areas has been very sig-
nif i cant.) Such a robust proof system is called a PCP,
which stands for “probabilistic ally checkable proof.”
Loosely speaking, a PCP system for a set S con-
sists of a probabilistic polynomial-time verifier who has
access to individual bits in a string that represents the
(alleged) proof. The verifier tosses coins and, depend-
ing on the out come, accesses only a constant number of
the bits in the alleged proof. It should output 1 when-
ever x belongs to S (and an adequate proof is pro-
vided), while if x does not belong to S, then (no matter
which false proof is provided) it should output 0 with
probability at least 12 .
Theorem (the PCP theorem). Every set in N P has a
time procedure for converting any NP-proof to the
corresponding PCP.
In particular, it follows that the (robust) PCP has
length that is polynomial in the length of the input. In
fact, this PCP is itself an NP-proof.13
On top of its direct conceptual appeal, the PCP theo-
rem (and its variants) has a major application to com-
plexity theory: it allows us to prove that several nat-
ural approximation problems are hard (assuming that
P ≠ N P).
For example, suppose we are given n linear equations
over the two-element field F2 . If we choose random val-
ues for the variables, then any given equation will be
satisfied with probability 12 , so it is clearly possible to
satisfy at least half the equations. Also, by linear alge-
bra one can quickly determine whether it is possible
to satisfy all the equations simultaneously. However, it
turns out that if P ≠ N P then there is no polynomial-
can be satisfied simultaneously and 0 if it is impossible
13. Here we take advantage of the fact that PCP systems are defined
to be error free when x ∈ S and the fact that the verifier in the PCP
theorem uses only a logarithmic number of coin tosses, so one can
efficiently check all possible out comes.

$IV$ . $20$ .

Computational Complexity

to satisfy more than $51$ % of them. That is, even approximately determining the number of equations that can be satisfied simultaneously is hard. To see the connection between such approximation problems and PCP, note that a PCP system for any set S gives rise to an optimization problem as follows. Suppose we are given an input x. Then for any alleged proof that x $\in$ S, which is presented as a string y, there is a certain probability that the verifier accepts y. What is the maximum of this probability over all alleged proofs y?
If we could answer this question to within a factor of $2$ , then we would be able to tell whether x belongs to S. Hence, if S is an NP-complete decision problem, the PCP theorem implies that this optimization problem is NP-hard (that is, at least as hard as any problem in N P). One can now use reductions, capitalizing on the fact that the verifier reads only a constant number of bits in the alleged proof, to obtain similar results for many natural optimization problems. This is of great theoretical interest, but some practical disappointment:
in many cases, approximate solutions would have been just as useful as exact ones, but they turn out to be just as hard to obtain.

$6$ . $4$

Weak Random Sources

We now turn to the question of how to obtain the randomness for all the probabilistic computations discussed in this section. Although randomness seems to be present in the world (e . g . , the perceived randomness in the weather, Geiger counters, Zener diodes, real coin flips, etc .), it does not seem to be in the perfect form of the unbiased and independent coin tosses we have postulated. If we actually want to use randomized procedures, then we need to convert weak sources of randomness into almost perfect ones, because this is what probabilistic computations were defined to work with.
Algorithms that convert imperfect randomness into a stream of almost completely independent and unbiased bits are called randomness extractors, and near optimal ones have been constructed. This large body of work is surveyed in Shaltiel ( 2002 ), for example. The questions that arise turn out to be related to certain types of pseudorandom generators (see section $7$ . 1) as well as to combinatorics and coding theory. To illustrate the nature of the problem of randomness extraction, we consider three relatively simple models of weak random sources.
Imagine first that you are in possession of a biased coin that has probability

$599$

p of coming up Heads, where $\frac{1}{3} < p < \frac{2}{3}$ , but you do not know the bias. Can you produce a uniformly distributed binary value using such a coin? A simple solution consists of tossing the coin twice, out putting $1$ if the result is Heads followed by Tails and $0$ if the result is Tails followed by Heads, and otherwise continuing to the next attempt. This way we can generate a perfect coin toss by tossing the biased coin an expected number ( $(1 - p)p) - 1$ of times. A more challenging setting arises if you are given n different biased coins, with unknown biases $p^{1}$ , . .
. , p n ,

1 2

each in the interval ( 3 , 3 ), and you are asked to generate an almost uniformly distributed binary value by tossing each of these coins exactly once. Here a good solution consists of tossing all coins and out putting the parity of the number of Heads. It can be shown that the out come will be $1$ with a probability that is

$1$

exponentially (in n) close t$o^{2}$ .

Finally, consider a situation in which the devil designs the coins in the latter example, but does so after seeing the out come of previous coin tosses. That is, you are tossing n different coins, but the bias of the ith coin (i . e . , p i) may depend on the out come of the pre$1$ vious $i - 1$ coin tosses (but still lies betwee$n^{3}$ and

$2{}^{3}$ ). It can be shown that in this case you cannot do better than simply out putting the out come of the first coin. However, if you are allowed to use just a few genuinely random bits, then you can do much better: given just O (log (n  /  )) perfectly random coin tosses, together with the n biased coin tosses, you can output a string of length proportional to n that is “ -close” to being uniformly distributed.

$7$

The Bright Side of Hardness

If P $\neq$ N P, as almost everybody believes, then there are computational problems of great interest that are inherently intractable. This is bad news, but there is a bright side to the matter: computational hardness has many fascinating conceptual consequences as well as important practical applications. The hardness assumption we shall make is the existence of one-way functions; namely, functions that are easy to compute but hard to invert.
For example, the product of two integers is of course easy to compute, but its “inverse”--factoring the resulting product--is the integer factorization problem, widely believed to be intractable. For our purposes, we shall need the inverse to be hard not just in the worst case, but hard on average. For example, for factoring it is believed that the

600

product of two random primes of length n cannot be
factored in polynomial time, even with some small con-
stant probability of success. In general, we shall say
that a function f : In → In is a one-way function if
it is easy to evaluate (i.e., there exists a polynomial-
time algorithm that returns f (x) when you input x)
but hard to invert in the following average-case sense:
any polynomial-time algorithm M will fail to invert f
correctly for at least half the input strings x ∈ In . That
is, for at least half the strings x, if you input y = f (x)
into M, then the output will not be a string x such that
f (x ) = y.
   Do one-way functions exist? It is easy to see that if
P = N P then the answer is no. The converse is an
important open problem: If P ≠ N P, does it follow that
one-way functions exist?
   Below, we discuss the connections between compu-
tational difficulty (in the form of one-way functions),
and two important computational complexity theories:
the theory of pseudo randomness and the theory of
cryptography.
7.1   Pseudo randomness
What is randomness? When should we say that a mathe-
mat ical or physical object behaves randomly? These are
fundamental questions that have been thought about
for centuries. When the objects are probability dis tr ibu-
tions, on n-bit sequences, say, there is consensus about
one point at least: the uniform distribution (in which
each n-bit string appears with probability 2−n ) is “the
most random” one. More generally, it seems reasonable
to say that any distribution that is statistically close
to the uniform distribution should also be regarded as
having “good randomness” properties.14
   One of the great insights of computational com-
plexity theory is that there are distributions that are
extremely far from the uniform distribution, but which
are nevertheless “effectively random.” The reason is
that they are computationally in distinguishable from
the uniform distribution.
   Let us try to formalize this idea. Suppose we can ran-
domly sample n-bit strings chosen according to a prob-
ability distribution Pn , and suppose that we want to
know whether Pn is in fact the uniform distribution.
One way to try to tell is to fix an efficiently computable
function f : In → {0, 1} and consider two experiments:
  14. Two probability distributions p1 and p2 are statistically close if
they assign roughly the same probabilities: that is, if p1 (E) ≈ p2 (E)
for every event E.

IV. Branches of Mathematics
one of the probability that f (x) = 1 when x is chosen
with probability Pn (x), and the other of the probability
that f (x) = 1 when x is chosen with the uniform prob-
ability 2−n . If there is a noticeable discrepancy between
these two probabilities, then certainly Pn is not uni-
form. However, the converse is not true: it may be that
Pn is far from uniform, but no efficiently computable
function f can help us detect this. In that case, we say
that Pn is pseudorandom.
This definition is both general and pragmatic. It
refers to any efficient procedure that may be employed
in an attempt to tell two distributions apart. And it is
pragmatic because for any practical purpose a pseudo-
random distribution is as good as a random one, for
reasons we shall now explain.
Notice first that the behavior of any efficient probabi-
listic algorithm will be virtually unaffected if we replace
its random source with a pseudorandom one. Why?
Because if its behavior changed, then the algorithm
itself would have efficiently distinguished between the
random and pseudorandom sources, contradicting the
definition of pseudo randomness!
Replacing uniform distributions by pseudorandom
distributions is beneficial provided we can generate
the latter using fewer resources. In this context, the
resource we are trying hardest to save on is random-
ness. Suppose we have an efficiently computable func-
tion φ : Im → In and suppose that n > m. Then we
can define a probability distribution on n-bit strings
by choosing a random m-bit string x and computing
φ(x). If this distribution is pseudorandom, then φ is
called a pseudorandom generator. The random string x
is called the seed, and if the generator stretches m-bit
long seeds into strings of length n = (m), then we call
the function  the stretch measure of the generator. The
larger the stretch measure, the better the generator is
considered to be.
Of course, all this raises an important question: Do
pseudorandom generators exist? It is to this question
that we now turn.
7.1.1   Hardness versus Randomness
There is an obvious connection between pseudo ran-
dom generators and computational difficulty, since the
main property of a pseudorandom generator is that its
output should be computationally hard to distinguish
from a purely random string, even though the two dis-
tributions are significantly different. However, there is
a much less obvious connection as well.

IV.20.   Computational Complexity

Theorem. Pseudorandom generators exist if and only
if one-way functions exist. Further more, if pseudo-
random generators exist then they exist for any stretch
measure that is a polynomial.15
   This theorem converts computational difficulty, or
hardness, into pseudo randomness, and vice versa. Fur-
thermore, its proof links computational indistinguisha-
bility to computational un predict ability, hinting that
the computational difficulty is linked to randomness,
or at least to the appearance of randomness.
   The existence of pseudorandom generators has the
remarkable consequence that probabilistic algorithms
can be partially or even wholly derandomized. The basic
idea is this. Suppose you have a probabilistic algorithm
that computes a function f and requires nc random
bits (where n denotes the length of the input). Suppose
that this algorithm outputs f (x) with probability at
least 23 . If you replace the random bits with nc pseudo-
random bits, generated from a seed of size m, then the
behavior of the algorithm will hardly be affected. There-
fore, if m is small, then you can do the same com put a-
tion with only a small amount of randomness. If m is
as small as O(log n), then it becomes feasible to check
through all possible seeds. For close to two thirds of
these, the algorithm outputs f (x). But this means we
can compute f (x) deterministical ly and efficiently by
taking a majority vote!
   Can this actually be done? Can we use hardness
to achieve the ultimate derandomization result, that
BPP = P? The theory has developed to give essen-
tially optimal answers to this question. Notice that if
we wish to achieve an exponential stretch measure, we
do not mind if the algorithm that performs the stretch
takes exponential time (in the length of the seed).
Such pseudorandom generators exist under very plau-
sible hardness assumptions, such as the assumption
that N P-complete problems require exponential-size
Boolean circuits. More generally, we have the following
theorem.
Theorem. If, for some constant  > 0, S(SAT) > 2n ,
then BPP = P. More over, SAT can be replaced by any
problem computable in 2 O(n) -time.
7.1.2    Pseudorandom Functions
Pseudorandom generators allow you to generate long
pseudorandom sequences efficiently from short ran-
  15. In other words, if you can achieve a stretch measure (m) =
m + 1, then you can also achieve a stretch measure of (m) = mc for
any c > 1.

601
dom seeds. Pseudorandom functions are even more
powerful: if you are given a random seed of n bits,
they provide you with an efficient way of computing
a function f : In → {0, 1} that is computationally
in distinguishable from a random function. Thus, with
just n bits of randomness, one has efficient access to
2 n bits that appear random. (Note that it is inefficient
to scan through all these bits—what we are given is
the ability to look at any one of them in polynomial
time.)
It turns out that pseudorandom functions can be
constructed given any pseudorandom generator, and
that they have many applications (most notably in
cryptography).
7.2   Cryptography
Cryptography has existed for millennia, but where as
in the past it was focused on one basic problem—
that of providing secret communications—the modern
computational theory of cryptography is interested in
all tasks that involve several agents who each wish to
obtain some information while preserving the secrecy
of other information. An important priority be sides pri-
vacy (that is, keeping secrets) is resilience: one would
like guaranteed privacy even if one is not certain that
the other participants are be having honestly.
A good example to illustrate these difficulties is play-
ing a game of poker over the telephone or e-mail. You
are encouraged to ponder seriously how this might
be done, and realize to what extent standard poker
relies on human vision, physical implements like cards
with opaque backs, etc., to protect privacy and prevent
cheating.
The general goal of cryptography is to construct
schemes, called protocols, that maintain any desired
functionality (rules, privacy requirements, etc.), even in
the face of malicious attempts to make them deviate
from this functionality. As with pseudo randomness,
there are two key assumptions underlying the new
theory. First, it is assumed that all parties, including
the malicious adversaries, are computationally limited.
Second, it is assumed that there are hard functions.
Some times these are one-way functions, and some-
times they are yet stronger functions called “trapdoor
permutations,” which also exist if integer factorization
is hard.
This goal is an ambitious one, but it has been
achieved. There is a result that says, roughly speaking,
that every functionality can be securely implemented.

602

This includes highly complex tasks such as playing
poker over the phone, but also very basic ones such as
secure communication, digital signatures (a digital ana-     beyond what follows from the value of f . For example,
logue of handwritten signatures), collective coin flip-
ping, auctions, elections, and the famous millionaires’
problem: how can two people interact to determine
who is richer, with out either of them learning anything
further about the other’s wealth?
   Let us very briefly hint at connections between cryp-
tography and matters that we have already discussed.
First of all, consider the very definition of the central     hinted at earlier in this section, assuming the existence
notion of cryptography: that of a secret. If you have an     of trapdoor permutations, every such multiparty com-
n-bit string, then when should we say that it is com-
pletely secret? A natural definition would be that it is
secret if nobody else has any information about it: that
is, from any body else’s point of view it is equally likely   going discussion, we did not worry about malicious
to be any of the 2 n -bit strings. However, in the new com-   behavior and focused on what participants may learn
putational complexity theory, this is not the definition
taken, since a pseudorandom n-bit string will, for all
practical purposes, be just as secret.
   The difference between the two definitions of a secret
is huge. The point of cryptography is not just to have
secrets (that is easy, just select a string at random) but   turn it is to perform some computation is asked to
actually to use them with out giving away information.
At first this seems impossible, since any nontrivial use
of a secret n-bit string will cut down the set of pos-
sible strings that it might be, and therefore give away
genuine information. However, if the new probability
distribution over the possible strings (after the infor-     edge proof can be efficiently derived from it. Thus, Bob
mation has been given away) is pseudorandom, then
this information cannot feasibly be used, since no effi-
cient algorithm can tell the difference between a string
that gives rise to the information you have revealed and
a truly random string.
   A famous example of this idea is given by the so-
called public-key encryption schemes, such as RSA,
which are described in detail in mathematics and
cryptography [VII.7](/part-07/mathematics-and-cryptography) and in Goldreich (2004, chap-
ter 5). In the RSA scheme, if a user, say Alice, wants
to receive messages, she publishes a number N, called
a public key, which is a product of two primes P and Q.
If you know N then you can encrypt any message, but
to decrypt it you need to know P and Q. Thus, if inte-
ger factorization is hard, then only Alice can feasibly
decrypt messages, even though P and Q are completely
determined by N.
   The generic problem about using secrets is one in
which there are k parties, and each party has a string of    typically not the case. On the other hand, demand-
bits. They are interested in the value of some efficiently     ing success under all input distributions gives back
computable function f that depends on all the strings

IV. Branches of Mathematics
of bits, but they would like to as certain this with out
giving away any information about their own strings
in the case of the millionaires’ problem, there are two
parties, each with a string that encodes their wealth.
They would like a protocol that provides them with a
single bit that tells them who is richer, but gives them
no information beyond this. The precise formulation
of this condition is an extension of the formulation of
zero-knowledge proofs (presented in section 6.3.2). As
putation can be performed with out yielding anything
beyond the designated outputs.
Finally, we come to the issue of cheating. In the fore-
from the transcript of their interaction. But how can a
player, Bob, say, be forced to act “as specified,” when
his actions may depend partly on his secrets, which he
does not want to reveal? The answer is closely related to
zero-knowledge proofs. Essentially, each player whose
prove to the others that he has acted as specified. This
is a (mathematically boring) theorem and the standard
proof is obvious (i.e., revealing all his secrets). But as we
saw in our discussion of zero-knowledge proof systems
in section 6.3.2, if a proof exists, then a zero-knowl-
can convince the others of his proper behavior with out
revealing anything about his secrets.
8   The Tip of an Iceberg
Even within the topics reviewed above, many important
notions and results have not been discussed, for space
reasons. Further more, other important topics and even
wide areas have not been mentioned at all.
The P versus N P question, as well as most of the
discussion so far, focuses on a simplified view of the
goals of (efficient) computations. Specifically, we have
insisted on efficient procedures that always give the
exact answer. However, in practice one may be con-
tent with less. For example, one may be happy with
an efficient procedure that gives the correct answer
for a large fraction of the instances. This will be use-
ful if all instances are equally interesting, but that is
worst-case complexity. Between these two extremes is

IV.20.   Computational Complexity

a useful and appealing theory of average-case complex-
ity (see Goldreich 1997): one demands that algorithms
succeed with high probability on every possible input
distribution that can be efficiently sampled.
   Another possible relaxation is settling for approx i-
mate answers. This can mean many things, and the best
notion of approximation varies from context to context.
For search problems, we may be satisfied with a solu-
tion that is close in some metric [III.56](/part-03/metric-spaces) to being valid
(see Hochbaum (1996) and the mathematics of algo-
rithm design [VII.5](/part-07/the-mathematics-of-algorithm-design)). For decision problems, we might
ask how close the input is (again in some natural met-
ric) to an instance in the set (see Ron 2001). And there
is also approximate counting, which was discussed in
section 6.2.
   In this article we have focused on the running time of
procedures. This is arguably the most important com-
plexity measure, but it is not the only one. Another is
the amount of work space consumed during the compu-
tation (see Sipser 1997). Another important issue is the
extent to which a computation can be performed in par-
allel; that is, speeding up the computation by splitting
the work among several computing devices, which are
viewed as components of the same (parallel) machine
and are provided with direct access to the same mem-
ory module. In addition to the parallel time, a funda-
mentally important complexity measure in such a case
is the number of parallel computing devices used (see
Karp and Ramachandran 1990).
   Finally, there are several computational models that
we have not discussed here. Models of distributed com-
puting refer to distant computing devices, each given
a local input, which may be viewed as a part of a
global input. In typical studies one wishes to min-
imize the amount of communication between these
devices (and certainly avoid the communication of the
entire input). In addition to measures of communi-
cation complexity, a central issue is asynchrony (see
Attiya and Welch 1998). The communication complex-
ity of two-argument (and many-argument) functions is
a measure of their “complexity” (see Kushilevitz and
Nisan 1996), but in these studies communication pro-
portion al to the length of the input is not ruled out
(but rather appears frequently). While being “informa-
tion theoretic” in nature, this model has many connec-
tions to complexity theory. Altogether different types
of computational problems are investigated in the con-
text of computational learning theory (see Kearns and
Vazirani 1994) and of online algorithms (see Borodin
and El-Yaniv 1998). Finally, quantum computation

603
[III.74](/part-03/quantum-computation) investigates the possibility of using quantum
mechanics to speed up computation (see Kitaev et al.
2002).
9   Concluding Remarks
We hope that this ultra-brief survey conveys the fasci-
nating flavor of the concepts, results, and open prob-
lems that dominate the field of computational complex-
ity. One important feature of the field we did not do
justice to is the remarkable web of (often surprising)
connections between different subareas, and its impact
on progress.
For further details on sections 1–4 the reader is re-
ferred to standard textbooks such as Garey and John-
son (1979) and Sipser (1997). For further details on
sections 5.1–5.3 the reader is referred to Boppana and
Sipser (1990), Strassen (1990), and Beame and Pitassi
(1998), respectively. For further details on sections 6
and 7 the reader is referred to Goldreich (1999) (and
also to Goldreich (2001, 2004)).
Further Reading
Attiya, H., and J. Welch. 1998. Distributed Computing: Fun-
damentals, Simulations and Advanced Topics. Columbus,
OH: Mc Graw-Hill.
Beame, P., and T. Pitassi. 1998. Propositional proof com-
plexity: past, present, and future. Bulletin of the European
Association for Theoretical Computer Science 65:66–89.
Boppana, R., and M. Sipser. 1990. The complexity of finite
functions. In Handbook of Theoretical Computer Sci-
ence, volume A, Algorithms and Complexity, edited by J.
van Leeuwen. Cambridge, MA: MIT Press/Elsevier.
Borodin, A., and R. El-Yaniv. 1998. On-line Computation and
Competitive Analysis. Cambridge: Cambridge University
Press.
Garey, M. R., and D. S. Johnson. 1979. Computers and
Intractability: A Guide to the Theory of NP-Completeness.
New York: W. H. Freeman.
Goldreich, O. 1997. Notes on Levin’s theory of average-
case complexity. Electronic Colloquium on Computational
Complexity, TR97-058.
. 1999. Modern Cryptography, Probabilistic Proofs and
Pseudo randomness. Algorithms and Combinatorics Se-
ries, volume 17. New York: Springer.
. 2001. Foundation of Cryptography, volume 1: Basic
Tools. Cambridge: Cambridge University Press.
. 2004. Foundation of Cryptography, volume 2: Basic
Applications. Cambridge: Cambridge University Press.
. 2008. Computational Complexity: A Conceptual Per-
spec tive. Cambridge: Cambridge University Press.
Hochbaum, D., ed. 1996. Approximation Algorithms for NP-
Hard Problems. Boston, MA: PWS.