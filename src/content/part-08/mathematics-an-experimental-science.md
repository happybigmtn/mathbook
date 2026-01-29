# Mathematics: An Experimental Science

VIII . $5$ .

Mathematics: An Experimental Science

or other. In this light a better formulation might be that “numeracy is to mathematics what language is to literature.” Indeed babies, toddlers, and young children learn many essential mathematical skills through engagement with their immediate environment well before formal school learning begins. Just as some children grow into more articulate adults than others, with or with out highly developed skills in reading and writing, so they may become more or less numerate in their everyday practices, independently of their competence in school mathematics.
There are many deep and important questions about the relationships between numeracy and mathematics, language and literacy that have hardly yet been formulated, let alone explored: this is perhaps one of the most open fields of enquiry in academia today. This essay has only scratched the surface of a fascinating and complex subject that has paradoxically been over looked because of its very ubiquity and centrality to human existence.
In the next few decades, a wide range of interdisciplina ry approaches will almost certainly yield important and surprising discoveries about numeracy that today we can only guess at.

Further Reading

Ascher, M. 2002 . Mathematics Elsewhere: An Exploration of Ideas Across Cultures. Princeton, NJ: Princeton University Press. Bloor, D. 1976 . Knowledge and Social Imagery. London: Routledge & Kegan Paul. Cohen, P. C. 1999 . A Calculating People: The Spread of Numeracy in Early America, $2nd$ edn. New York and London: Routledge. Crump, T. 1990 . The Anthropology of Numbers. Cambridge: Cambridge University Press. Cuomo, S. 2000 . Divide and rule: Frontinus and Roman landsurveying. Studies in History and Philosophy of Science $31$ : $189 - 202$ . D’Ambrosio, U. 1985 .
Ethno mathematics and its place in the history and pedagogy of mathematics. For the Learning of Mathematics $5$ : $41 - 48$ . Gerdes, P. 1998 . Women, Art and Geometry in Southern Africa. Trenton, NJ: Africa World Press. Glimp, D., and M. R. Warren, eds. 2004 . The Arts of Calculation: Quantifying Thought in Early Modern Europe. Basingstoke: Palgrave Macmillan. Grevholm, B., and G. Hanna. 1995 . Gender and Mathematics Education: An ICMI Study in Stiftsgården Åkersberg, Höör, Sweden, 1993 . Lund: Lund University Press. Harris, M. 1997 . Common Threads: Women, Mathematics, and Work.
Stoke on Trent: Trentham Books.

$991$

Lave, J. 1988 . Cognition in Practice: Mind, Mathematics and Culture in Everyday Life. Cambridge: Cambridge University Press. Lave, J., and E. Wenger. 1991 . Situated Learning: Legitimate Peripheral Participation. Cambridge: Cambridge University Press. Netz, R. 2002 . Counter culture: towards a history of Greek numeracy. History of Science $40$ : $321 - 52$ . Nunes, T., A. Dias, and D. Carraher. 1993 . Street Mathematics and School Mathematics. Cambridge: Cambridge University Press. Porter, T. 1995 . Trust in Numbers: The Pursuit of Objectivity in Science and Public Life. Princeton, NJ:
Princeton University Press. Robson, E. 2008 . Mathematics in Ancient Iraq: A Social History. Princeton, NJ: Princeton University Press. Schmandt-Besserat, D. 1992 . From Counting to Cuneiform. Austin, TX: University of Texas Press. Urton, G. 1997 . The Social Life of Numbers: A Quechua Ontology of Numbers and Philosophy of Arithmetic. Austin, TX: University of Texas Press. VIII . $5$ Mathematics: An Experimental

Science

Herbert S. Wilf

$1$

The Mathematician’s Telescope

Albert Einstein once said, “You can confirm a theory with experiment, but no path leads from experiment to theory.” But that was before computers. In mathematical research now, there’s a very clear path of that kind. It begins with wondering what a particular situation looks like in detail; it continues with some computer experiments to show the structure of that situation for a selection of small values of the parameters of the problem; and then comes the human part: the mathematician gazes at the computer output, attempting to see and to codify some patterns.
If this seems fruitful, then the final step requires the mathematician to prove that the apparent pattern is really there, and is not a shimmering mirage above the desert sands. A computer is used by a pure mathematician in much the same way that a telescope is used by a theoretical astronomer.
It shows us “what’s out there.” Neither the computer nor the telescope can provide a theoretical explanation for what it sees, but both of them extend the reach of the mind by providing numerous examples that might otherwise be hidden, and from which one has some chance of perceiving, and then demonstrating, the existence of patterns, or universal laws.

992                                                                                             VIII. Final Perspectives

   In this article I would like to show you some exam-       something nice happens, then take the result and use
ples of this process at work. Naturally the focus will       another package to learn something else, and so forth.
be on examples in which some degree of success has           Many are the times when I have written little programs
been realized, rather than on the much more numer-           in Mathematica or Maple and then gone away for the
ous cases where no pattern could be perceived, at least      weekend leaving the computer running and searching
by my eyes. Since my work is mainly in combinator-           for interesting phenomena.
ics and discrete mathematics, the focus will also be on
those areas of mathematics. It should not be inferred        2.2   Neil Sloane’s Database of Integer Sequences
that experimental methods are not used in other areas;
only that I don’t know those applications well enough        Aside from a CAS, another indispensable tool for
to write about them.                                         experimentally inclined mathematicians, particularly
   In one short article we cannot even begin to do jus-      for combinatorialists, is Neil Sloane’s “On-Line Ency-
tice to the richly varied, broad, and deep achievements      clopedia of Integer Sequences,” which is on the Web at
of experimental mathematics. For further reading, see        www.research.att.com/ ̃njas. At present, this contains
the journal Experimental Mathematics and the books           nearly 100 000 integer sequences and has full search
by Borwein and Bailey (2003) and Borwein et al. (2004).      capabilities. A great deal of information is given for
   In the following sections we give first a brief descrip-   each sequence.
tion of some of the useful tools in the armament of             Suppose that for each positive integer n you have an
experimental mathematics, and then some successful           associated set of objects that you want to count. You
examples of the method, if it is a method. The examples      might, for example, be trying to determine the number
have been chosen subject to fairly severe restrictions:      of sets of size n with some given property, or you might
                                                             wish to know how many prime divisors n has (which is
  (i) the use of computer exploration was vital to the       the same as counting the set of these prime divisors).
      success of the project; and                            Suppose further that you’ve found the answer for n =
 (ii) the out come of the effort was the discovery of a        1, 2, 3, . . . , 10, say, but you haven’t been able to find any
      new theorem in pure mathematics.                       simple formula for the general answer.
                                                                Here’s a concrete example. Suppose you’re working
I must apologize for including several examples from
                                                             on such a problem, and the answers that you get for
my own work, but those are the ones with which I am
                                                             n = 1, 2, . . . , 10 are 1, 1, 1, 1, 2, 3, 6, 11, 23, 47. The
most familiar.
                                                             next step should be to look online to see if the human
                                                             race has encountered your sequence before. You might
      2   Some of the Tools in the Toolbox                   find nothing at all, or you might find that the result
2.1   Computer Algebra Systems                               that you’d been hoping for has long since been known,
                                                             or you might find that your sequence is mysteriously
The mathematician who enjoys using computers will            the same as another sequence that arose in quite a dif-
find an enormous number of programs and packages              ferent context. In the third case, an example of which
available, beginning with the two major computer alge-       is described below in section 3, something interesting
bra systems (CASs), Maple and Mathematica. These pro-        will surely happen next. If you haven’t tried this before,
grams can provide so much assistance to a working            do look up the little example sequence above, and see
mathematician that they must be regarded as essen-           what it represents.
tial pieces of one’s professional armamentarium. They
are extremely user-friendly and capable.                     2.3   Krattenthaler’s Package “Rate”
   Typically one uses a CAS in interactive mode, mean-
ing that you type in a one-line command and the pro-         A very helpful Mathematica package for guessing the
gram responds with its output, then you type in another      form of hypergeometric sequences has been written
line, etc. This modus operandi will suffice for many pur-      by Christian Krattenthaler and is available from his
poses, but for best results one should learn the pro-        Web site. The name of the package is Rate (rot’-eh),
gramming languages that are embedded in these pack-          which is the German word for “guess.”
ages. With a little knowledge of programming, one can          To say what a hypergeometric sequence is, let’s first
ask the computer to look at larger and larger cases until    recall that a rational function of n is a quotient of

VIII . $5$ .

Mathematics: An Experimental Science

two polynomials in n, like $(3n^{2} + 1)/(n^{3} + 4)$ . A hypergeometric sequence {t n } n $\ge {}^{0}$ is one in which the ratio $t^{n} + {}^{1}/t^{n}$ is a rational function of the index n. For n example, if $t^{n} = {}^{7}$ then $t^{n} + {}^{1}/t^{n}$ works out to be $(n + 1)/(n - 6)$ , which is a rational function of n, so {t ${}^{nn} \ge {}^{0}$ is $a$ hypergeometric sequence. Other examples are $(3n + 4)$ ! $(2n - 3)$ ! n n $n!, (7n + 3)$ ! , , t ,

$4^{n}n!47$

all of which are easily seen to be hypergeometric. If you input the first several members of the unknown sequence, Rate will look for a hypergeometric sequence that takes those values. It will also look for a hyper-hypergeometric sequence (i . e . , one in which the ratio of consecutive terms is hypergeometric), and a hyper-hyper-hypergeometric sequence, etc. For example, the line Rate [1 , 1 / 4 , 1 / 4 , 9 / 16 , 9 / 4 , 225 / 16 ] elicits the (some what inscrutable) output ${4^{1} - {}^{i0}( - 1 + i0)}$ ! 2.
Here $i0$ is the running index of Rate, so we would normally write that answer as, say, $(n - 1)$ ! ${}^{2}(n = 1$ , $2$ , $3$ , $4$ , $5$ , 6), $4^{n} - {}^{1}$ which fits the input sequence perfectly. Rate is a part of the Superseeker front end to the Integer Sequences database, discussed in section $2$ . $2$ above. $2$ . $4$ Identification of Numbers Suppose that, in the course of your work, you encountered a number, let’s call it β, which, as nearly as you could calculate it, was $1$ . 218041583332573 .
It might be that β is related to other famous mathematical con√ stants, like $\pi$ , e, $2$ , and so forth, or it might not. But you’d like to know. The general problem that is posed here is the following. We are given k numbers, α 1 , . . . , α k (the basis), and a target number α. We want to find integers m, $m^{1}$ , . . . , m k such that the linear combination $mα + m^{1}α^{1} + m^{2}α^{2} +$ · · · $+ m^{k}α^{k}(1)$ is an extremely close numerical approximation to $0$ .
If we had a computer program that could find such integers, how would we use it to identify the mystery constant $β = 1$ . 218041583332573 ? We would take the α i to be a list of the logarithms of various well-known $993$ universal constants and prime numbers, and we would take α = log β. For example, we might use {log $\pi$ , $1$ , log $2$ , log 3(2) as our basis. If we then find integers m, $m^{1}$ , . . .
, $m^{4}$ such that m log $β + m^{1}$ log $\pi + m^{2} + m^{3}$ log $2 + m^{4}$ log 3(3) is extremely close to $0$ , then we will have found that our mystery number β is extremely close to $β = \pi - m^{1}/ me - m^{2}/ m2 - m^{3}/ m3 - m^{4}/ m$ . (4) At this point we will have a judgment to make. If the integers m i seem rather large, then the presumed evaluation ( $4$ ) is suspect. Indeed, for any target α and basis {α i } we can always find huge integers {m i } such that the linear combination ( $1$ ) is exactly $0$ , to the limits of machine precision.
The real trick is to find a linear combination that is extraordinarily close to $0$ , while using only “small” integers m, m i , and that is a matter of judgment. If the judgment is that the relation found is real, rather than spurious, then there remains the little job of proving that the suspected evaluation of α is correct, but that task is beyond our scope here. For a nice survey of this subject, see Bailey and Plouffe ( 1997 ). There are two major tools that can be used to discover linear dependencies such as ( $1$ ) among the members of a set of real numbers.
They are the algorithms PSLQ, of Ferguson and Forcade ( 1979 ), and LLL, of Lenstra et al. ( 1982 ), which uses their lattice basis reduction algorithm. For the working mathematician, the good news is that these tools are available in CASs. For example, Maple has a package, Integer Relations [Linear Dependency] , which places the PSLQ and the LLL algorithms at the immediate disposal of the user. Similarly there are Mathematica packages on the Web that can be freely downloaded and which perform the same functions. An application of these methods will be given in section $7$ .
For a quick illustration, though, let us try to recognize the mystery number $β = 1$ . 218041583332573 . We use as a basis the list in ( $2$ ) above, and we put this list, augmented by log $1$ . 218041583332573 , into Maple’s Integer Relations[Linear Dependency] package. The output is the integer vector [2 , − 6 , 0 , 3 , 4 ] , √ which tells us that $β = \pi^{3} 2/36$ , to the number of decimal places carried.

$2$ . $5$

Solving Partial Differential Equations

I had occasion recently to need the solution to a certain partial differential equation (PDE) that arose in

$994$

connection with a research problem that was posed by Graham et al. ( 1989 ). It was a first-order linear PDE, so in principle the method of characteristics [III.49](/part-03/linear-and-nonlinear-waves-and-solitons) gives the solution. As those who have tried that method know, it can be fraught with technical difficulties relating to the solution of the associated ordinary differential equations. However, some extremely intelligent packages are available for solving PDEs.
I used the Maple command pdsolve to handle the equation ∂ u (x , y) $(1 - αx - αy)$ ∂x ∂ u (x , y) $+ (γ + (β + γ)y)u(x$ , $y)= y(β + βy)$ ∂y with $u(0$ , $y) = 1$ . pdsolve found that $(1 - αx) - γ/α$ u (x , y) = (1 + (β /β)y(1 - (1 - αx) - β/α ) )1 + γ/β is the solution, and that enabled me to find explicit formulas for certain combinatorial quantities, with much less work and fewer errors than would otherwise have been possible.
$3$ Thinking Rationally The following problem appeared in the September / October 1997 issue of Quantum (and was chosen by Stan Wagon for the Problem of the Week archive). How many ways can 90316 be written as $a + {}^{2b} + {}^{4c} + {}^{8d} + 16e + 32f +$ · · · , where the coefficients can be any of $0$ , $1$ , or $2$ ? In standard combinatorial terminology, the question asks for the number of partitions of the integer 90316 into powers of $2$ , where the multiplicity of each part is at most $2$ . Let’s define b (n) to be the number of partitions of n, subject to the same restrictions.
Thus $b(5) = 2$ and the two relevant partitions are $5 = 4 + 1$ and $5 = 2 + 2 + 1$ . Then it is easy to see that b (n) satisfies the recurrences $b(2n + 1) = b(n)$ and $b(2n + 2) = b(n) + b(n + 1)$ , for $n = 0$ , $1$ , $2$ . . . , with $b(0) = 1$ . It is now easy to calculate particular values of b (n). This can be done directly from the recurrence, which is quite fast for computational purposes. Alternatively, it can be shown quite easily that our sequence { b (n) } $\infty 0$ has the generating function $\infty\infty$ j j b (n) x n = $(1 + x^{2} + x^{2}$ · ${}^{2})$ . $n = 0j = 0$ VIII.
Final Perspectives (Generating functions are discussed in algebraic and enumerative combinatorics [IV . 18 § § 2 . 4 , 3 ] , or see Wilf ( 1994 ).) This helps us to avoid much programming when working with the sequence, because we can use the built-in series-expansion instructions in Mathematica or Maple to show us a large number of terms in this series quite rapidly. Returning to the original question from Quantum, it is a simple matter to compute $b(90316) = 843$ from the recurrence. But let’s try to learn more about the sequence { b (n) } in general.
To do that we open up our telescope, and calculate the first ninety-five members of the sequence, i.e., { b (n) } ${}^{94}{}^{0}$ , which are shown in table $1$ . The question is now, as it always is in the mathematics laboratory, what patterns do you see in these numbers? Just as an example, one might notice that when n is $1$ less than a power of $2$ , it seems that $b(n) = 1$ .
The reader who is fond of such puzzles is invited to cease reading here for the moment (with out peeking at the next paragraph), and look at table $1$ to spend some time finding whatever interesting patterns seem to be there. Computations up to $n = 94$ aren’t as helpful for a quest like this as computations up to $n = 1000$ or so might be, so the reader is also invited to compute a much longer table of values of b (n), using the above recurrence formulas, and to study it carefully for fruitful patterns. OK, did you notice that if n $= 2$ a then b (n) appears to be a $+ 1$ ?
How about this one: in the block of values of $n$ between $2^{a}$ and $2^{a} + {}^{1} - 1$ , inclusive, the largest value of b (n) that seems to occur is the Fibonacci number F a $+ {}^{2}$ . There are many intriguing things going on in this sequence, but the one that was of crucial importance in understanding it was the observation that consecutive values of b (n) seem always to be relatively prime.
1 It was totally unexpected to find a property of the values of this sequence that involved the multiplicative structure of the positive integers, rather than their additive structure, which would have been quite natural. This is because the theory of partitions of integers belongs to the additive theory of numbers, and multiplicative properties of partitions are rare and always cherished. Once this relative primality is noticed, the proof is easy. If m is the smallest n for which b (n), b (n $+ 1$ ) fail to be relatively prime, then suppose $p > 1$ divides both of them.
If $m = 2k + 1$ is odd, then the recurrence $1$ . Two positive integers are relatively prime if they have no common factor.

VIII.5.   Mathematics: An Experimental Science                                                                            995

                                          Table 1 The first ninety-five values of b(n).

           0   1    2     3     4     5       6     7    8      9    10    11    12    13    14   15    16    17   18

           1    1    2    1     3     2       3     1    4      3      5    2     5      3    4     1    5     4     7

          19   20   21   22    23    24      25   26    27     28    29    30    31    32    33   34    35    36   37

           3    8    5    7     2     7       5     8    3      7      4    5     1      6    5     9    4    11     7

          38   39   40   41    42    43      44   45    46     47    48    49    50    51    52   53    54    55   56

          10    3   11    8    13     5      12     7    9      2      9    7    12     5    13    8    11     3    10

          57   58   59   60    61    62      63   64    65     66    67    68    69    70    71   72    73    74   75

           7   11    4    9     5     6       1     7    6     11      5   14     9     13    4   15    11    18     7

          76   77   78   79    80    81      82   83    84     85    86    87    88    89    90   91    92    93   94

          17   10   13    3    14    11      19     8   21     13    18     5    17     12   19     7   16     9    11

implies that p divides b(k) and b(k + 1), contradict-               answer to a problem that interests you, it is good prac-
ing the minimality, where as if m = 2 k is even, the                  tice to ask your CAS to factor it for you. Some times the
recurrence again gives that result, finishing the proof.             results will surprise you. This is one such story.
  Why was it so interesting that consecutive values                    The theory of Young tableaux forms an important
appeared to be relatively prime? Well, at once that                 part of modern combinatorics. To create a Young
raised the question of whether every possible relatively            tableau we choose a positive integer n and a partition
prime pair (r , s) of positive integers occurs as a pair of         n = a1 +a2 +· · ·+ak of that integer. We’ll use the inte-
consecutive values of this sequence, and if so, whether             ger n = 6 and the partition 6 = 3 + 2 + 1 as an example.
every such pair occurs once and only once. Both of                  Next we draw the Ferrers board of the partition, which
those possibilities are supported by the table of val-              is a truncated chessboard that has a1 squares in its
ues above, and upon further investigation both turned               first row, a2 in its second row, etc., the rows being left-
out to be true. See Calkin and Wilf (2000) for details.             justified. In our example, the Ferrers board is as shown
  The bottom line here is that every positive rational              in figure 1.
number occurs once and only once, and in reduced form,                 To make a tableau, we insert the labels 1, 2, . . . , n
among the members of the sequence {b(n)/b(n + 1)}. nfty       0 .        into the n cells of the board in such a way that the
Hence the partition function b(n) induces an enu-                   labels increase from left to right across each row and
meration of the rational numbers, a result which was                increase from top to bottom down every column. With
found by gazing at a computer screen and looking for                our example, one way to do this is as shown in figure 2.
patterns.                                                              One of several important properties of tableaux is
Moral: be sure to spend many hours each day gazing at               that there is a one-to-one correspondence, known as
your computer screen and looking for patterns.                      the Robinson–Schensted–Knuth (RSK) correspondence,
                                                                    which assigns to every permutation of n letters a pair
                                                                    of tableaux of the same shape. One use of the RSK cor-
           4   An Unexpected Factorization
                                                                    respondence is to find the length of the longest increas-
One of the great strengths of computer algebra systems              ing subsequence in the vector of values of a given per-
is that they are very good at factoring. They can factor            mutation. It turns out that this length is the same as
very large integers and very complicated expressions.               the length of the first row of either of the tableaux
Whenever you run into some large expression as the                  to which the permutation corresponds under the RSK

$996$

Figure $1$ The Ferrers board.

124365

Figure $2 A$ Young tableau.

mapping. This fact gives us a good way, algorithmically speaking, of finding the length of the longest increasing subsequence of a given permutation. Now suppose that u k (n) is the number of permutations of n letters that have no increasing subsequence of length greater than k. A spectacular theorem of Gessel (1990) states that u k (n) $x^{2n} =$ det (I|i - j|(2 x))i , $j = {}^{1}$ , . . . , k ,

$(5)n!2n \ge 0$

in which I ν (t) is (the modified Bessel function)

$\infty(1t)2j + \nu2$

I $\nu(t) =$ / j ! (j  +  ν) !

$j = 0$

At any rate, it seems fairly “spectacular” to me that when you place various infinite series such as the above into a k $\times$ k determinant and then expand the determinant, you should find that the coefficient of $x^{2n}$ , when multiplied by n! 2 , is exactly the number of permutations of n letters with no increasing subsequence longer than k. Let’s evaluate one of these determinants, say the one with $k = 2$ . We find that det (I|i - j|(2 x))i , $j = {}^{1}$ , {}2 = (I0)2 - (I1)2 , which of course factors as $(I^{0} + I^{1})(I^{0} - I^{1})$ .
The arguments of the I ν are all $2x$ and have been omitted. When $k = 3$ , no such factorization occurs. If you ask your CAS for this determinant when $k = 4$ , it will show

VIII. Final Perspectives

you

$I04 - 3I02I12 + I14 + 4I0I12I2 - 2I02I22 - 2I12I22 + I24 - 2I13I3 + 4I0I1I2I3 - 2I1I22I3 - I02I32 + I12I32$ , where now we have abbreviated I ν ( $2x$ ) simply by I ν . If we ask our CAS to factor this last expression, it (surprisingly) replies with

((I0)2 - I0 I1 - (I1)2 + 2 I1 I2 - (I2)2 - I0 I3 + I1 I3). imes ((I0)2 + I0 I1 - (I1)2 - 2 I1 I2 - (I2)2 + I0 I3 + I1 I3) , which is actually of the form (A  +  B) (A  -  B), as a quick inspection will reveal. We have now observed, experimentally, that for $k = 2$ and $k = 4$ Gessel’s $k \times k$ determinant has a nontrivial factorization of the form (A  +  B) (A  -  B), in which $A$ and $B$ are certain polynomials of degree $k/2$ in the Bessel functions.
Such a factorization of a large expression in terms of formal Bessel functions simply cannot be ignored. It demands explanation. Does this factorization extend to all even values of k? It does. Can we say anything in general about what the factors mean? We can. The key point, as it turns out, is that in Gessel’s determinant (5), the matrix entries depend only on $|i - j|$ (such a matrix is called a Toeplitz matrix). The determinants of such matrices have a natural factorization, as follows. If $a^{0}$ , $a^{1}$ , . . .
is some sequence, and $a - i = a^{i}$ , then we have det $(ai - j)2mi$ , j = 1 m = det(ai-j + ai + {}j - {}1)m{}i , $j = {}^{1}$ det (ai-j - ai + {}j - {}1)i , $j = {}^{1}$ . When we apply this fact to the present situation it correctly reproduces the above factorizations for $k = 2$ , $4$ , and generalizes them to all even k, as follows. Let y k (n) be the number of Young tableaux of n cells whose first row is of length at most k, and let u k (n) y k (n)

$x^{2n}$ and $Y^{k}(x) =$

x n .

$U^{k}(x) =2$

n!

n!

$n \ge 0n \ge 0$

In terms of these two generating functions, the general factorization theorem states that $U^{k}(x) = Y^{k}(x)Y^{k}( - x) (k = 2$ , $4$ , $6$ , . . .) . Why is it useful to have such factorizations? For one thing we can equate the coefficients of like powers of x on both sides of this factorization (try it !). We then find an interesting explicit formula that relates the number of Young tableaux of n cells whose first row is of length

VIII . $5$ .

Mathematics: An Experimental Science

at most k, on the one hand, and the number of permutations of n letters that have no increasing subsequence of length greater than k, on the other. No more direct proof of this relationship is known. For more details and some further consequences, see Wilf ( 1992 ). Moral: cherchez les factorisations!

$5$

A Score for Sloane’s Database

Here is a case study in which, as it happens, not only was Sloane’s database utilized, but Sloane himself was one of the authors of the ensuing research paper. Eric Weisstein, the creator of the invaluable Web resource Math World, became interested in the enumeration of $0 - 1$ matrices whose eigenvalues are all positive real numbers. If f (n) is the number of n $\times$ n matrices whose entries are all $0s$ and $1s$ and whose eigenvalues are all real and positive, then by computation, Weisstein found for f (n) the values (for $n = 1$ , $2$ , . . . , 5).

$1$ , $3$ , $25$ , $543$ , 29281

Upon looking up this sequence in Sloane’s database, Weisstein found, interestingly, that this sequence is identical, as far as it goes, with sequence $A003024$ in the database. The latter sequence counts vertex-labeled a cyclic directed graphs (“ digraphs ”) of n vertices, and so Weisstein’s conjecture was born: [T] he number of vertex-labeled a cyclic digraphs of n vertices is equal to the number of $n \times n 0 - 1$ matrices whose eigenvalues are all real and positive. This conjecture was proved in Mc Kay et al. ( 2003 ).
En route to the proof of the result, the following some what surprising fact was shown. Theorem $1$ . If $a 0 - 1$ matrix $A$ has only real positive eigenvalues, then those eigenvalues are all equal to $1$ . To prove this, let ${\lambda}$ i } n $i = {}^{1}$ be the eigenvalues of A.

Then

$11 \ge$ trace  (  A  )  (since all $A$ i, i $\le 1)n_{1}= (\lambda^{1} + \lambda^{2} +$ · · · $+ \lambda^{n})$ n

$\ge (\lambda^{1}\lambda^{2}$ · · · . ambda n)1/n= ( det A)1/n\ge 1 ,

in which the third line uses the arithmetic-geometric mean inequality, and the last line uses the fact that det A is a positive integer. Since the arithmetic and

$997$

geometric means of the eigenvalues are equal, the eigenvalues are all equal, and in fact all $\lambda^{i}(A) = 1$ . The proof of the conjecture itself works by finding an explicit bijection between the two sets that are being counted. Indeed, let A be an $n \times n$ matrix of $0s$ and $1s$ with positive eigenvalues only. Then those eigenvalues are all $1s$ , so the diagonal of A is all $1s$ , whence the matrix $A - I$ also has solely $0s$ and $1s$ as its entries. Regard $A - I$ as the vertex adjacency matrix of a digraph G. Then (it turns out that) G is a cyclic.
Conversely, if G is such a digraph, let B be its vertex adjacency matrix. By renumbering the vertices of G, if necessary, B can be brought to triangular form with zero diagonal. Then $A = I + B$ is $a0 - 1$ matrix with positive real eigenvalues only. But then the same must have been true for the matrix I  +  B before simultaneously renumbering its rows and columns. For more details and more corollaries, see Mc Kay et al. ( 2003 ). Moral: see if you can find your sequence in the online encyclopedia!

$6$

The Twenty-One-Stage Rocket

Now we’ll describe a successful attack that was carried out by Andrews ( 1998 ) on the problem of evaluating the Mills-Robbins-Rumsey determinant, which is the determinant of the n $\times$ n matrix

$i + j + \mu M^{n}(\mu) =$ / $(6)2j - i0 \le$ i, j $\le n - 1$

This problem arose (Mills et al. 1987 ) in connection with the study of plane partitions. A plane partition of an integer n is an (infinite) array n i, j of nonnegative integers whose sum is n, subject to the restriction that the entries n i, j are nonincreasing across each row, and also down each column. It turns out that det M n (μ) can be expressed neatly as a product, namely as

$n - 1$

det $M^{n}(\mu) = 2 - n\Delta^{2k}(2\mu)$ ,

$(7)k = 0$

in which

13 ( \mu + 2 j + 2)j({}2\mu + 2 j + {}2)j - {}1. elta2 j(\mu) =

,

(j)j(. rac{1}{2}\mu + j + . rac{3}{2})j - {}1 and (x)j is the rising factorial $x(x + 1)$ · · · $(x + j - 1)$ . The strategy of Andrews’s proof is elegant in conception and difficult in execution: we are going to find an upper triangular matrix E n (μ), whose diagonal entries are all $1s$ , such that the matrix M n (μ) E n (μ)  =  L n (μ)

(8)

998                                                                                            VIII. Final Perspectives

is lower triangular, with the numbers { 12 Δ2 j (2μ)}n−1
                                                      j=0       At this point the news is all good. While it is true that
on its diagonal. Of course, if we can do this, then from     the matrix entries are fairly complicated, the fact that
(8), since det En (μ) = 1, we will have proved the the-      leaps off the page and warms the heart of the experi-
orem (7), since the determinant of the product of two        mental mathematician is that all of the polynomials in \mu matrices is the product of their determinants, and the       factor into linear factors with pleasant-looking integer
determinant of a triangular matrix (i.e., of a matrix all    coefficients. So there is hope for conjecturing a gen-
of whose entries below the diagonal are 0 s) is simply        eral form of the E matrix. Will this benign situation
the product of its diagonal entries.                         persist when n = 5? A further computation reveals
   But how shall we find this matrix En (μ)? By holding       that E5 (μ) is as shown in figure 3. Now it is a “cer-
tightly to the hand of our computer and letting it guide     tainty” that some nice formulas exist for the entries of
us there. More precisely,                                    the general matrix En (μ). The Rate package, described
                                                             in section 2.3, would certainly facilitate the next step,
  (i) we will look at the matrix En (μ) for various small
                                                             which is to find general formulas for the entries of the
      values of n, and from those data we will conjec-
                                                             E matrix. The final result is that the (i, j) entry of En (μ)
      ture the formula for the general (i, j) entry of the
                                                             is 0 if i > j and
      matrix; and then
 (ii) we will (well actually “we” won’t, but Andrews did)              (−1)j−i (i)2(j−i) (2μ + 2 j + i + 2)j−i
      prove that the conjectured entries of the matrix             4 j−i (j − i)!(μ + i + 1)j−i (μ + j + i + 12 )j−i
      are correct.
                                                             otherwise.
  It was in step (ii) above that an extraordinary twenty-       After divining that the E matrix has the above form,
one-stage event occurred which was successfully man-         Andrews now faced the task of proving that it works,
aged by Andrews. What he did was to set up a system of       i.e., that Mn En (μ) is lower triangular and has the
twenty-one propositions, each of them a fairly technical     diagonal entries specified above. It was in this part
hypergeometric identity. Next, he carried out a simul-       of the work that the twenty-one-fold induction was
taneous induction on these twenty-one propositions.          unleashed. Another proof of the evaluation of the Mills–
That is to say, he showed that if, say, the thirteenth       Robbins–Rumsey determinant is in Petkovšek and Wilf
proposition was true for a certain value of n, then so       (1996). That proof begins with Andrews’s discovery of
was the fourteenth, etc., and if they were all true for      the above form of the En (μ) matrix, and then uses
that value of n, then the first proposition was true for      the machinery of the so-called WZ method (Petkovšek
n + 1. The reader should be sure to look at Andrews          et al. 1996), instead of a twenty-one-stage induction, to
(1998) to gain more of the flavor and substance of what       prove that the matrix performs the desired triangula-
was done than can be conveyed in this short summary.         tion (8).
  Here we will confine ourselves to a few comments
                                                             Moral: never give up, even when defeat seems certain.
about step (i) of the program above. So, let’s look at the
matrix En (μ) for some small values of n. The condition
that En (μ) is upper triangular with 1 s on the diagonal                   7   The Computation of π
means that
               j−1
                                                             In 1997, a remarkable formula for π was found (Bailey
               
                     (Mn )i, k ek, j = −(Mn )i, j ,             et al. 1997). This formula permits the computation of
               k=0                                           just a single hexadecimal digit of π , if desired, using
      ⩽ i ⩽ j − 1 and 1 ⩽ 
for0                    j⩽  n − 1. We can regard these    minimal space and time. For example, we might com-
    n                      n
as 2 equations in the 2 above-diagonal entries of            pute the trillionth digit of π , with out ever having to
En (μ) and we can ask our CAS to find those entries, for      deal with any of the earlier ones, in a time that is faster
some small values of n. Here is E4 (μ):                      than what we might attain if we had to calculate all of
     ⎛                                             ⎞         the first trillion digits. For example, Bailey et al. found
      1 0         0                   0
     ⎜                                             ⎟         that in the hexadecimal expansion of π , the block of
     ⎜                            6(μ + 5)         ⎟
     ⎜0 1 − 1                                      ⎟
     ⎜           μ + 2   (μ +  2)(μ +  3)(2μ + 11) ⎟         fourteen digits in positions 1010 through 1010 + 13 are
     ⎜                                             ⎟
     ⎜                                             ⎟.        921 C73 C6838 FB2. The formula is
     ⎜                             6(μ + 5)        ⎟
     ⎜0 0         1         −                      ⎟
     ⎜                        (μ + 3)(2μ + 11) ⎟                   . nfty
     ⎝                                             ⎠                    1      4        2        1        1
                                                              π=          i 8 i + 1
                                                                                   −        −        −       . (9)
      0 0         0                   1                            i=0
                                                                       16            8 i + 4   8 i + 5   8 i +6

VIII.5.   Mathematics: An Experimental Science                                                                                 999

                    ⎛                                                                                           ⎞
                      1     0       0                       0                                0
                    ⎜                                                                                        ⎟
                    ⎜                                                                                        ⎟
                    ⎜               1               6(μ + 5)                             30(μ + 6)           ⎟
                    ⎜0      1    −                                          −                                ⎟
                    ⎜              μ+2      (μ + 2)(μ + 3)(2μ + 11)           (μ + 2)(μ + 3)(μ + 4)(2μ + 15) ⎟
                    ⎜                                                                                        ⎟
                    ⎜                                                                                        ⎟
                    ⎜                                     6(μ + 5)                      30(μ + 6)            ⎟
                    ⎜                                                                                        ⎟
                    ⎜0      0       1             −                                                          ⎟
                    ⎜                                 (μ + 3)(2μ + 11)           (μ + 3)(μ + 4)(2μ + 15)     ⎟
                    ⎜                                                                                        ⎟
                    ⎜                                                                                        ⎟
                    ⎜                                                                   6(2μ + 13)           ⎟
                    ⎜0      0       0                       1                      −                         ⎟
                    ⎜                                                                                        ⎟
                    ⎜                                                                (μ + 4)(2μ + 15)        ⎟
                    ⎝                                                                                        ⎠
                     0      0       0                       0                               1

                                             Figure 3 The upper triangular matrix E5 (μ).

  In our discussion here we will limit ourselves to de-                  a computer can never investigate infinitely many cases,
scr ib ing how we might have found the specific expan-                      no matter how fast it is. But computers are useful
sion (9) once we had decided that an interesting expan-                  for proving theorems despite that handicap. We have
sion of the form                                                         seen several examples of how a mathematician can act
                            . nfty
                             1 
                                b−1
                                         ak                              in concert with a computer to explore a world within
                    π=                        .                 (10)     mathematics. From such explorations there can grow
                            i=0
                                c i
                                    k=1
                                        bi +k
                                                                         understanding, and conjectures, and roads to proofs,
might exist. This, of course, leaves open the question                   and phenomena that would not have been imaginable in
of how the discovery of the form (10) was singled out                    the pre-computer era. This role of computation within
in the first place.                                                       pure mathematics seems destined only to expand over
  The strategy will be to use the linear dependency                      the coming years and to be imbued into our students
algorithm described in section 2.4. More precisely, we                   along with euclid’s [VI.2](/part-06/euclid-ca) axioms and other staples of
want to find a nontrivial integer linear combination of                   mathematical education.
π and the seven numbers                                                    At the other end of the rainbow there may lie a more
                . nfty
                         1                                               far-reaching role for computers. Perhaps one day we
          αk =                   (k = 1, . . . , 7)
                i=0 (8 i + k)16 i                                          will be able to input some hypotheses and a desired
that sums to 0. As in equation (3), we now compute the                   conclusion, press the “Enter” key, and get a print out
seven numbers αj and we look for a relation                              of a proof. There are a few fields of mathematics in
                                                                         which we can do such things, notably in the proofs of
    mπ + m1 α1 + m2 α2 + · · · + m7 α7 = 0                               identities (Petkovšek et al. 1996; Greene and Wilf 2007),
                                              (m, mi ∈ Z)                but in general the road to that brave new world remains
                                                                         long and uncharted.
by using, for example, the Maple Integer Relations
package. The output vector,
                                                                         Further Reading
      (m, m1 , m2 , . . . , m7 ) = (1, −4, 0, 0, 2, 1, 1, 0),
                                                                         Andrews, G. E. 1998. Pfaff’s method. I. The Mills–Robbins–
yields the identity (9). You should do this calculation                    Rumsey determinant. Discrete Mathematics 193:43–60.
for your self, then prove that the apparent identity is in                Bailey, D. H., and S. Plouffe. 1997. Recognizing numeri-
fact true, and, finally, look for something similar that                    cal constants. In Proceedings of the Organic Mathematics
uses powers of 64 instead of 16. Good luck!                                Workshop, 12–14 December 1995, Simon Fraser Univer-
                                                                           sity. Conference Proceedings of the Canadian Mathemat-
Moral: even as late as the year 1997 c.e., something new                   ical Society, volume 20. Ottawa: Canadian Mathematical
and interesting was said about the number π .                              Society.
                                                                         Bailey, D. H., P. Borwein, and S. Plouffe. 1997. On the
                        8    Conclusions                                   rapid computation of various polylogarithmic constants.
                                                                           Mathematics of Computation 66:903–13.
When computers first appeared in mathematicians’                          Borwein, J.. and D. H. Bailey. 2003. Mathematics by Experi-
environments the almost universal reaction was that                        ment: Plausible Reasoning in the 21 st Century. Wellesley,
they would never be useful for proving theorems since                      MA: A. K. Peters.