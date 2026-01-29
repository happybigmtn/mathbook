# The Insolubility of the Halting Problem

$706$

that f is a differentiable function from $R^{2}$ to R . We can visualize its graph as a smooth surface in $R^{3}$ lying above the xy-plane. Suppose also that f is compactly supported, which means that there exists an M such that  f(x , $y) = 0$ if the distance from (x ,  y) to (0, 0) is greater than M. We would now like to bound the size of f , as measured by some L p norm, in terms of the size of its gradient [I.3](/part-01/fundamental-definitions). ablaf , as measured by some other L p norm. The L p norm of a function f is defined here as $1/p|f(x$ , $y)|^{p}dxdy$ f $p =$ .
$R^{2}$ In one dimension, it is clear that no such bound is possible. For instance, we could have a differentiable function that was $1$ every where on the interval [− M , M], $0$ every where outside the wider interval [− (M + 1)$, M + 1 ]$ , and gently decaying from $1$ to $0$ in between. Then if we increased M we would not change the size of the derivative: we would just move the two nonzero parts of the derivative further apart. On the other hand, by increasing M we could increase the size of f as much as we liked.
However, we cannot do this sort of construction in two dimensions, because now the “boundary” of the function increases as the size of the function increases. The Sobolev inequality tells us that if $1 \le p < 2$ and $r = 2p/(2 - p)$ , then f   r $\le$ C p $\nablaf$   p . To see why this might be reasonable, consider the case $p = 1$ , so that $r = 2$ . Let $f$ be a function that is $1$ every where inside the circle of radius M about the origin and $0$ every where outside the circle of radius $M + 1$ .
Then as M increases, the norm  $f^{2}$ increases in proportion to M (since  f   $\frac{2}{2}$ is approximately equal to the area of the circle of radius M), and so does $\nablaf{}^{1} ($ since it is roughly proportional to the length of the boundary of the circle). As this informal argument suggests, there are close connections between the Sobolev inequality and the isoperimetric inequality in the plane. And like the isoperimetric inequality, the Sobolev inequality has an n-dimensional version for each n:
it is the same result, except that now the condition is that $1 \le p < n,$ and $r$ is equal to $np/(n - p)$ .

$V$ . $20$

The Insolubility of the

Halting Problem

What does it mean to understand a certain area of mathematics completely? One possible answer is that you understand it when you can solve its problems mechanically. Consider, for instance, the following question.

V. Theorems and Problems

Jim is half the age of his mother, and in twelve years’ time he will be three-fifths of her age. How old is his mother now? For a child who is just old enough to understand the concept of “three-fifths,” this is likely to be an impossibly difficult problem. A bright and slightly older child may be able to solve it after some hard thought, which will probably include a certain amount of trial and error. But for anybody who has learned how to translate such problems into equations and who knows how to solve two simultaneous linear equations, the problem is utterly routine:
let x be Jim’s age and y his mother’s; then the problem tells us that $2x = y$ and $5(x + 12) = 3(y + 12)$ ; the second equation can be rearranged to give $3y - 5x = 24$ ; substituting $y = 2x$ gives $x = 24$ , so $y = 48$ . The more mathematics one learns, the more one finds that problems that once seemed to be difficult and to require ingenuity have become routine in this sort of way, and it is eventually tempting to ask whether all of mathematics might, ultimately, be reducible to a mechanical procedure.
And even if you think that that is a bit much to hope for, you can still ask the question about certain natural classes of problems, such as simultaneous linear equations. Perhaps there is always a mechanical procedure for solving the problems in any sufficiently “natural” class, even if there is not necessarily a systematic way of finding the mechanical procedure. One class of problems that has been intensively studied for several centuries is that of Diophantine equations, which are equations in one or more variables where one stipulates that the solutions should be integers.
The most famous Diophantine equation is the Fermat equation x n  +  y $n = z$ n , but this is somewhat complicated because one of the variables, n, appears as an exponent. Suppose we restrict attention to polynomial equations, such as $x^{2} - xy + y^{2} = 157$ . Is there a systematic way of telling whether such an equation has integer solutions? The left-hand side of the equation $x^{2} - xy + y^{2} = 157$ is equal to (x2 + y2 + (x - y)2)/2 .
Therefore, any solution (x ,  y) must satisfy $x^{2} + y^{2} \le 314$ , which makes it a short task to search through all possibilities until one discovers the solution $x = 12$ and $y = 13$ (or vice versa). However, an exhaustive search is not always possible: consider, for example, the equation $2x^{2} - y^{2} = 1$ . This is a special case of the Pell equation, discussed in algebraic numbers [IV.1](/part-04/number-theory) . The Pell equation can be solved systematically, with the help of continued fractions [III.22] , and this leads

V.20.   The Insolubility of the Halting Problem                                                                    707

to a systematic solution of all polynomial equations of      formalize the notion of what we now call an algo-
degree up to 2 in two variables.                             rithm [IV.20 §1](/part-04/computational-complexity). That is, they each gave a precise def-
   By the end of the nineteenth century, these and           inition of the notion of an algorithm. Their definitions
many other Diophantine equations had been com-               were quite different, but later shown to be equivalent,
pletely solved, but there was no single overarching          which means that anything that can be done by an algo-
method that dealt with all of them. This state of affairs     rithm in Church’s sense can be done by an algorithm
prompted hilbert [VI.63](/part-06/david-hilbert-18621943) to include, as the tenth in         in Turing’s sense, and vice versa. Turing’s formaliza-
his famous list of twenty-three unsolved problems, the       tion, which had a big influence on the design of modern
question of whether there was a single, universal pro-       computers, is discussed in computational complex-
cedure for solving all polynomial Diophantine equa-          ity [IV.20 §1.1](/part-04/computational-complexity), while Church’s is described in algo-
tions in any number of variables. Later, in 1928, he         rithms [II.4 §3.2](/part-02/algorithms), but for the purposes of this article we
asked the more general question alluded to earlier: is       shall use the anachronistic definition with which this
there a universal procedure for determining the truth        paragraph began.
or falsity of any mathematical statement? This question         It turns out that once one has any sufficiently precise
became known as the Entscheidungspr oblem (which              notion of “algorithm,” one is just a few short steps away
means “decision problem” in German).                         from a negative answer to Hilbert’s En ts che id un gs prob-
                                                             lem. To see this, imagine that L is some programming
  Hilbert expected, or at least hoped, that the answers
                                                             language (such as Pascal or C++). Given any string of
to both questions would be yes. In other words, he
                                                             symbols, we can ask of it the following question: if I
hoped that the mathematicians of his day were in the
                                                             present that string of symbols to my computer as a pro-
position of the child who has not yet learned how to
                                                             gram in L, will the program run forever, or will it eventu-
solve simultaneous equations. Perhaps a new age was
                                                             ally stop? This is called the halting problem. (Note that
dawning in which it would be possible, at least in princi-
                                                             the word “problem” really means “class of problems.”)
ple, to solve all mathematical problems systematically
                                                             The halting problem may not seem very mathematical,
and without relying on native wit.
                                                             but certain instances of it certainly are. For example,
   The evidence in favor of such a view was not very
                                                             suppose that after a quick look at a program you realize
strong: although problems of some kinds could be
                                                             that it does the following. In one portion of the memory
solved fully systematically, others, including Diophan-
                                                             it stores an even number n, which at the beginning is set
tine equations, stubbornly resisted, and the role of
                                                             to 6. It then checks for every odd number m less than
ingenuity in mathematical research appeared to be as
                                                             n whether m and n − m are both prime. If the answer
important as ever. But if one wanted to give a negative      is yes for some m, then it adds 2 to n and repeats. If
answer to Hilbert’s questions, then one faced a major        the answer is no for all m, then it halts. This program
challenge: in order to prove rigorously that there is        will halt if and only if the goldbach conjecture [V.27](/part-05/problems-and-results-in-vi36-peter-gustav-lejeune-dirichlet-18051859)
no systematic procedure for accomplishing a particu-         is false.
lar task, one has to be absolutely clear about what a           Turing proved that there is no systematic procedure
“systematic procedure” actually is.                          for solving the halting problem. (Church proved an
   Nowadays there is an easy answer to this: a sys-          analogous result for his notion of recursive functions.)
tematic procedure is anything that you can program           Let us see how Turing’s argument works for the lan-
a computer to do. (Strictly speaking, this is an over-       guage L. In this case, it shows that there is no system-
simplification, because one also makes the idealizing         atic procedure for recognizing which strings of sym-
assumption that the computer has unlimited storage           bols form programs in L that halt, and which do not.
space.) Our feeling that we do not have to think too hard    The proof is a reductio ad absurdum, so we begin by
to solve simultaneous equations is reflected in the fact      assuming that there is such a procedure. Let us call it P .
that we can devise a computer program to do it for us        Suppose that L is like most computer languages, in that
(though if we want the program to be fast and numer-         a typical program asks for an input, which affects its
ically robust, we will face very interesting problems:       subsequent behavior. Then P will be able to tell, given
see numerical analysis [IV.21 §4](/part-04/numerical-analysis)). However, Hilbert         any pair of strings (S, I), whether S is a program in L
asked the questions before computers existed, so it          that halts if the input is I.
was a remarkable achievement when in 1936 church                Now let us create a new procedure Q out of P . Given
[VI.89](/part-06/alonzo-church-19031995) and turing [VI.94](/part-06/alan-turing-19121954) independently managed to          any string S, we start by getting Q to run P on the pair