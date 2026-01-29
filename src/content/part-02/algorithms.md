# Algorithms

106                                                                                  II. The Origins of Modern Mathematics

Corry, L. 1996. Modern Algebra and the Rise of Mathe-             1.1   Abacists and Algorists
  matical Structures. Science Networks, volume 17. Basel:
  Birkhäuser.                                                     Returning to the example of multiplication, an obvi-
Edwards, H. M. 1984. Galois Theory. New York: Springer.           ous point is that how you try to multiply two numbers
Heath, T. L. 1956. The Thirteen Books of Euclid’s Elements,       together is strongly influenced by how you represent
  2 nd edn. (3 vols.). New York: Dover.                            those numbers. To see this, try multiplying the Roman
Høyrup, J. 2002. Lengths, Widths, Surfaces: A Portrait of Old     numerals CXLVII and XXIX together without first con-
  Babylonian Algebra and Its Kin. New York: Springer.             verting them into their decimal counterparts, 147 and
Klein, J. 1968. Greek Mathematical Thought and the Origin         29. It is difficult and time-consuming, and explains why
  of Algebra, translated by E. Brann. Cambridge, MA: The
                                                                  arithmetic in the Roman empire was extremely rudi-
  MIT Press.
                                                                  mentary. A numeration system can be additive, as it
Netz, R. 2004. The Transformation of Mathematics in the
                                                                  was for the Romans, or positional, like ours today. If it
  Early Mediterranean World: From Problems to Equations.
  Cambridge: Cambridge University Press.                          is positional, then it can use one or several bases—for
Parshall, K. H. 1988. The art of algebra from al-Khwārizmı̄      instance, the Sumerians used both base 10 and base 60.
  to Viète: A study in the natural selection of ideas. History       For a long time, many processes of calculation used
  of Science 26:129–64.                                           abacuses. Originally, these were lines traced on sand,
     . 1989. Toward a history of nineteenth-century invari-       onto which one placed stones (the Latin for small stone
  ant theory. In The History of Modern Mathematics, edited        is calculus) to represent numbers. Later there were
  by D. E. Rowe and J. Mc Cleary, volume 1, pp. 157–206.           counting tables equipped with rows or columns onto
  Amsterdam: Academic Press.
                                                                  which one placed tokens. These could be used to rep-
Sesiano, J. 1999. Une Introduction à l’histoire de l’algèbre:
                                                                  resent numbers to a given base. For example, if the
  Résolution des équations des Mésopotamiens à la Renais-
  sance. Lausanne: Presses Polytechniques et Universitaires
                                                                  base was 10, then a token would represent one unit,
  Romandes.                                                       ten units, one hundred units, etc., according to which
Van der Waerden, B. 1985. A History of Algebra from al-           row or column it was in. The four arithmetic operations
  Khwārizmı̄ to Emmy Noether. New York: Springer.                could then be carried out by moving the tokens accord-
Wussing, H. 1984. The Genesis of the Abstract Group Con-          ing to precise rules. The Chinese counting frame can be
  cept: A Contribution to the History of the Origin of Abstract   regarded as a version of the abacus.
  Group Theory, translated by A. Shenitzer. Cambridge, MA:           In the twelfth century, when the Arabic mathemati-
  The MIT Press.                                                  cal works were translated into Latin, the denary posi-
                                                                  tional numeration system spread through Europe. This
                                                                  system was particularly suitable for carrying out the
II.4 Algorithms
                                                                  arithmetic operations, and led to new methods of cal-
       Jean-Luc Chabert                                           culation. The term algoritmus was introduced to refer
                                                                  to these, and to distinguish them from the traditional
              1   What Is an Algorithm?                           methods that used tokens on an abacus.
It is not easy to give a precise definition of the word               Although the signs for the numerals had been adapt-
“algorithm.” One can provide approximate synonyms:                ed from Indian practice, the numerals became known
                                                                  as Arabic. And the origin of the word “algorithm” is
some other words that (sometimes) mean roughly the
                                                                  Arabic: it arose from a distortion of the name al-
same thing are “rule,” “technique,” “procedure,” and
                                                                  khwārizmı̄ [VI.5](/part-06/abu-jafar-muhammad-ibn-musa-al-khwarizm-vi55-william-kingdon-cliord-18451879), who was the author of the oldest
“method.” One can also give good examples, such as
                                                                  known work on algebra, in the first half of the ninth
long multiplication, the method one learns in high
                                                                  century. His treatise, entitled al-Kitāb al-mukhtas.ar fı̄
school for multiplying two positive integers together.
                                                                  h
                                                                  . isāb al-jabr wa’l-muqābala (“The compendious book
However, although informal explanations and well-
                                                                  on calculation by completion and balancing”), gave rise
chosen examples do give a good idea of what an algo-
                                                                  to the word “algebra.”
rithm is, the concept has undergone a long evolution: it
was not until the twentieth century that a satisfactory
                                                                  1.2   Finiteness
formal definition was achieved, and ideas about algo-
rithms have evolved further even since then. In this arti-        As we have just seen, in the Middle Ages the term “algo-
cle, we shall try to explain some of these developments           rithm” referred to the processes of calculation based
and clarify the contemporary meaning of the term.                 on the decimal notation for the integers. However, in

II.4.   Algorithms                                                                                                  107

the seventeenth century, according to d’alembert’s           [III.22], which goes back to the third century b.c.e. It
[VI.20](/part-06/jean-le-rond-dalembert-17171783) Encyclopédie, the word was used in a more gen-       is a procedure described by euclid [VI.2](/part-06/euclid-ca) to determine
eral sense, referring not just to arithmetic but also to     the greatest common divisor (gcd) of two positive inte-
methods in algebra and to other calculational proce-         gers a and b. (Sometimes the greatest common divisor
dures such as “the algorithm of the integral calculus”       is known as the highest common factor (hcf).)
or “the algorithm of sines.”                                    When one first meets the concept of the greatest com-
  Gradually, the term came to mean any process of sys-       mon divisor of a and b, it is usually defined to be the
tematic calculation that could be carried out by means       largest positive integer that is a divisor (or factor) of
of very precise rules. Finally, with the growing role of     both a and b. However, for many purposes it is more
computers, the important role of finiteness was fully         convenient to think of it as the unique positive inte-
understood: it is essential that the process stops and       ger d with the following two properties. First, d is a
provides a result after a finite time. Thus one arrives at    divisor of a and b, and second, if c is any other divi-
the following naive definition:                               sor of a and b, then d is divisible by c. The method for
                                                             determining d is provided by the first two propositions
An algorithm is a set of finitely many rules for manip-
                                                             of Book VII of Euclid’s Elements. Here is the first one:
ulating a finite amount of data in order to produce a
                                                             “Two unequal numbers being set out, and the less being
result in a finite number of steps.
                                                             continually subtracted in turn from the greater, if the
Note the insistence on finiteness: finiteness in the writ-     number which is left never measures the one before it
ing of the algorithm and finiteness in the implementa-        until a unit is left, the original numbers will be prime
tion of the algorithm.                                       to one another.” In other words, if by carrying out suc-
   The formulation above is not of course a mathemat-        cessive alternate subtractions one obtains the number
ical definition in the classical sense of the term. As we     1, then the gcd of the two numbers is equal to 1. In this
shall see later, it was important to formalize it further.   case one says that the numbers are relatively prime or
But for now, let us be content with this “definition”         coprime.
and look at some classical examples of algorithms in
mathematics.                                                 2.1.1   Alternate Subtractions

                                                             Let us describe Euclid’s procedure in general. It is based
             2   Three Historical Examples                   on two simple observations:
A feature of algorithms that we have not yet mentioned         (i) if a = b then the gcd of a and b is b (or a);
is iteration, or the repetition of simple procedures. To      (ii) d is a common divisor of a and b if and only if it
see why iteration is important, consider once again the            is a common divisor of a − b and b, which implies
example of long multiplication. This is a method that              that the gcd of a and b is the same as the gcd of
works for positive integers of any size. As the num-               a − b and b.
bers get larger, the procedure takes longer, but—and
this is of vital importance—the method is “the same”:        Now suppose that we wish to determine the gcd of a
                                                             and b and suppose that a ⩾ b. If a = b then obser-
if you understand how to multiply two three-digit num-
                                                             vation (i) tells us that the gcd is b. Otherwise, observa-
bers together, then you do not need to learn any new
                                                             tion (ii) tells us that the answer will be the same as it is
principles in order to multiply two 137-digit numbers
                                                             for the two numbers a − b and b. If we now let a1 be
together (even if you might be rather reluctant to do
                                                             the larger of these two numbers and b1 the smaller (of
the calculation). The reason for this is that the method
                                                             course, if they are equal then we just set a1 = b1 = b),
for long multiplication involves a great deal of carefully
                                                             then we are faced with the same task that we started
structured repetition of much smaller tasks, such as
                                                             with—to determine the gcd of two numbers—but the
multiplying two one-digit numbers together. We shall
                                                             larger of these two numbers, a1 , is smaller than a, the
see that iteration plays a very important part in the
                                                             larger of the original two numbers. We can therefore
algorithms to be discussed in this section.
                                                             repeat the process: if a1 = b1 then the gcd of a1 and
                                                             b1 , and hence that of a and b, is b1 , and otherwise
2.1     Euclid’s Algorithm: Iteration
                                                             we replace a1 by a1 − b1 and reorganize the numbers
One of the best, and most often used, examples to illus-     a1 − b1 and b1 so that if one of them is larger then it
trate the nature of algorithms is euclid’s algorithm         comes first.

108                                                                               II. The Origins of Modern Mathematics

                    a and b integers                             (r , r1 ), where r1 is the remainder in the division of b
                       0≤b≤a
                                                                 by r , and so on. The sequence of remainders is strictly
                                                                 decreasing (b > r > r1 > r2 ⩾ 0), so the process stops
              yes                      no
                         a=b                                     and the gcd is the last nonzero remainder.
                                                                   It is not hard to see that the two approaches are
the gcd of the given                   c        a−b              equivalent. Suppose, for example, that a = 103 438 and
  numbers is the
 current value of a                                              b = 37. If you use the first approach, then you will
                                yes                     no       repeatedly subtract 37 from 103 438 until you reach a
                                            c<b
                                                                 number that is smaller than 37. This number will be the
                         a       b                               remainder when 103 438 is divided by 37, which is the
                                                        a    c
                         b       c                               first number you would calculate if you used the second
                                                                 approach. Thus, the reason for the second approach is
                                                                 that repeated subtraction can be a very inefficient way
                                                                 of calculating remainders. This efficiency gain is very
               Figure 1 A flow chart for the
              procedure in Euclid’s algorithm.
                                                                 important in practice: the second approach gives rise
                                                                 to a polynomial-time algorithm [IV.20 §2](/part-04/computational-complexity), while the
                                                                 time taken by the first is exponentially long.
  One further observation is needed if we want to show
that this procedure works. It is the following fundamen-         2.1.3    Generalizations
tal fact about the positive integers, sometimes known
as the well-ordering principle.                                  Euclid’s algorithm can be generalized to many other
                                                                 contexts where we have notions of addition, subtrac-
(iii) A strictly decreasing sequence of positive integers        tion, and multiplication. For example, there is a variant
      a0 > a1 > a2 > · · · must be finite.                        of it that applies to the ring [III.81 §1](/part-03/rings-ideals-and-modules) Z[i] of Gaussian
                                                                 integers, that is, numbers of the form a + bi, where a
Since the iterative procedure just described produces
                                                                 and b are ordinary integers. It can also be applied to the
exactly such a strictly decreasing sequence, the itera-
                                                                 ring of all polynomials with real coefficients (or coeffi-
tions must eventually stop, which means that at some
                                                                 cients in any field, for that matter). The one require-
point ak and bk will be equal, and that value is thus the
                                                                 ment is that we should be able to find some analogue
gcd of a and b (see figure 1).
                                                                 of the notion of division with remainder, after which
                                                                 the algorithm is virtually identical to the algorithm for
2.1.2   Euclidean Divisions                                      positive integers. For example, we have the following
Euclid’s algorithm is usually described in a slightly dif-       statement for polynomials: given any two polynomials
ferent way. One makes use of a more complex pro-                 A and B with B not the zero polynomial, there are poly-
cedure called Euclidean division—that is, division with          nomials Q and R such that A = BQ+R and either R = 0
remainder—which greatly reduces the number of steps              or the degree of R is less than the degree of B.
that the algorithm takes. The basic fact underlying this            As Euclid noticed (Elements, Book X, proposition 2),
procedure is that if a and b are two positive integers           one may also carry out the procedure on pairs of num-
then there are (unique) integers q and r such that               bers a and b that are not necessarily integers. It is easy
                                                                 to check that the process will stop if and only if the
              a = bq + r       and         0 ⩽ r < b.
                                                                 ratio a/b is a rational number. This observation leads
The number q is called the quotient and r is the remain-         to the concept of continued fractions [III.22], which
der. Remarks (i) and (ii) above are then replaced by the         are discussed in part III. They were not studied explic-
following ones:                                                  itly before the seventeenth century, but the roots of the
                                                                 idea can be traced back to archimedes [VI.3](/part-06/archimedes-ca).
 (i ) if r = 0 then the gcd of a and b is equal to b;
(ii ) the gcd of a and b is the same as the gcd of b and         2.2     The Method of Archimedes to Calculate π:
      r.                                                                 Approximation and Finiteness

This time, at the first step, one replaces (a, b) by (b, r ).     The ratio of the circumference of a circle to the diam-
If r = 0, then at the second step one replaces (b, r ) by       eter is a constant that has been denoted by π since

II.4.   Algorithms                                                                                                    109

the eighteenth century (see [III.70]). Let us see how             T              G          H
Archimedes, in the third century b.c.e., obtained the
classical approximation 227 for this ratio. If one draws                A                                       D
inscribed polygons (whose vertices lie on the circle) and
circumscribed polygons (whose sides are tangent to the
circle) and if one computes the length of these poly-            F N
gons, then one obtains lower and upper bounds for
the value of π , since the circumference of the circle
is greater than the length of any inscribed polygon and          E                           O
less than the length of any circumscribed polygon (fig-
ure 2). Archimedes started with regular hexagons, and
then repeatedly doubled the number of sides, obtain-
ing more and more precise bounds. He finished with
ninety-six-sided polygons, obtaining the estimates
                     3 + 10           1                                  B                                     C
                         71 ⩽ π ⩽ 3 + 7 .

   This process clearly involves iteration, but is it right
to call it an algorithm? Strictly speaking it is not: how-
                                                                             Figure 2 Approximation of π .
ever many sides you take for your polygon, all you
will get is an approximation to π , so the process is
not finite. However, what we do have is an algorithm           small, so he then estimates p by for getting the terms
that will calculate π to any desired accuracy: for exam-      p 3 and 6 p 2 (since these should be considerably smaller
ple, if you demand an approximation that is correct           than 10 p − 1). This gives him the equation 10 p − 1 = 0,
                                                                       1
to ten decimal places, then after a finite number of           or p = 10  . Of course, this is not an exact solution, but it
steps the algorithm will give you one. What matters now       provides him with a new and better approximation, 2.1,
is that the process converges. That is, it is important       for x. He then repeats the process, writing x = 2.1 + q,
that the values that come out of the iteration get arbi-      substituting to obtain an equation for q, solving this
trarily close to π . The geometric origin of the method       equation approximately, and refining his estimate still
can be used to prove that this is indeed the case, and        further. The estimate he obtains for q is −0.0054, so
in 1609 in Germany Ludolph van Ceulen obtained an             the next approximation for x is 2.0946.
approximation accurate to thirty-five decimal places              How, though, can we be sure that this process really
using polygons with 262 sides.                                does converge to x? Let us examine the method more
   Nevertheless, there is a clear difference between this      closely.
algorithm for approximating π and Euclid’s algorithm
for calculating the gcd of two positive integers. Algo-       2.3.1   Tangents and Convergence
rithms like Euclid’s are often called discrete algorithms,
                                                              Newton’s method can be interpreted geometrically in
and are contrasted with numerical algorithms, which
                                                              terms of the graph of a function f , though Newton him-
are algorithms that are used to compute numbers that
                                                              self did not do so. A root x of the equation f (x) = 0
are not integers (see numerical analysis [IV.21](/part-04/numerical-analysis)).
                                                              corresponds to a point where the curve with equation
                                                              y = f (x) intersects the x-axis. If you start with an
2.3     The Newton–Raphson Method:
                                                              approximate value a for x and set p = x − a, as we
        Recurrence Formulas
                                                              did above, then when you substitute a + p for x to
In around 1670, newton [VI.14](/part-06/isaac-newton-16421727) devised a method for           obtain a new function g(p), you are effectively moving
finding roots of equations, which he explained with ref-       the origin from (0, 0) to the point (a, 0). Then when
erence to the example x 3 − 2 x − 5 = 0. His explanation       you forget all powers of p other than the constant and
starts with the observation that the root x is approxi-       linear terms, you are finding the best linear approxima-
mately equal to 2. He therefore writes x = 2 + p and          tion to the function g—which, geometrically speaking,
obtains an equation for p by substituting 2 + p for x in      is the tangent line to g at the point (0, g(0)). Thus, the
the original equation. This new equation works out to         approximate value you obtain for p is the x-coordinate
be p3 + 6 p 2 + 10 p − 1 = 0. Because x is close to 2, p is     of the point where the tangent at (0, g(0)) crosses the

110                                                                             II. The Origins of Modern Mathematics

                                                               for quadratic polynomials but difficult as soon as the
                                                               degree is 3 or more. For example, the domains of
                                                               attraction of the roots ±1 of the polynomial z 2 − 1
                                                               are the open half-planes bounded by the vertical axis,
                                                               but the domains corresponding to the roots 1, ω, and
                                                               ω2 of z 3 − 1 are extremely complicated sets. They
            a                         a+p+q         a+p        were described by Julia in 1918—such subsets are now
                                                               called fractal sets. Newton’s method and fractal sets are
                                                               discussed further in dynamics [IV.14](/part-04/dynamics).

                                                               2.3.2    Recurrence Formulas

                Figure 3 Newton’s method.                      At each stage of his method, Newton had to produce
                                                               a new equation, but in 1690 Raphson noticed that this
                                                               was not really necessary. For particular examples, he
x-axis. Adding a to this value returns the origin to (0, 0)
                                                               gave single formulas that could be used at each step,
and gives the new approximation to the root of f . This
                                                               but his basic observation applies in general and leads
is why Newton’s method is often called the tangent
                                                               to a general formula for every case, which one can
method (figure 3). And one can now see that the new
                                                               easily obtain using the interpretation in terms of tan-
approximation will definitely be better than the old one
                                                               gents. Indeed, the tangent to the curve y = f (x) at the
if the tangent to f at (a, f (a)) intersects the x-axis at a
                                                               point of x-coordinate a has the equation y − f (a) =
point that lies between a and the point where the curve
                                                               f (a)(x − a), and it cuts the x-axis at the point with
y = f (x) intersects the x-axis.
                                                               x-coordinate a − f (a)/f (a). What we now call the
   As it happens, this is not the case for Newton’s choice
                                                               Newton–Raphson method springs from this simple for-
of the value a = 2 above, but it is true for the approx-
                                                               mula. One starts with an initial approximation a0 = a
imate value 2.1 and for all subsequent ones. Geo-
                                                               and then defines successive approximations using the
metric ally, the favorable situation occurs if the point
                                                               recurrence formula
(a, f (a)) lies above the x-axis in a convex part of the
                                                                                              f (an )
curve that crosses the x-axis or below the x-axis in a                          an+1 = an −           .
                                                                                              f (an )
concave part of the curve that crosses the x-axis. Under
these circumstances, and provided the root is not a               As an example, let us consider the function f (x) =
multiple one, the convergence is quadratic, meaning            x 2 − c. Here, Newton’s method provides a sequence of
                                                                                                     √
that the error at each stage is roughly the square of          approximations of the square root c of c, given by
the error at the previous stage—or, equivalently, the          the recurrence formula an+1 = 12 (an + c/an ) (which
approximation is valid to a number of decimal places           we obtain by substituting x 2 + c for f in the general
that roughly doubles at each stage. This is enormously         formula above). This method for approximating square
fast.                                                          roots was known by Heron of Alexandria in the first
                                                                                                   √
   The choice of the initial approximation value is obvi-      century. Note that if a0 is close to c, then c/a0 is also
                                                                      √
ously important, and raises unexpectedly subtle ques-          close, c lies between them, and a1 = 12 (a0 + c/a0 ) is
tions. These are clearer if we look at complex polyno-         their arithmetic mean.
mials and their complex roots. Newton’s method can be
easily adapted to this more general context. Suppose                    3   Does an Algorithm Always Exist?
that z is a root of some complex polynomial and that
                                                               3.1     Hilbert’s Tenth Problem:
z0 is an initial approximation for z. Newton’s method
                                                                       The Need for Formalization
then gives us a sequence z0 , z1 , z2 , . . . , which may or
may not converge to z. We define the domain of attrac-          In 1900, at the Second International Congress of Math-
tion, denoted A(z), to be the set of all complex num-          ematicians, hilbert [VI.63](/part-06/david-hilbert-18621943) proposed a list of twenty-
bers z0 such that the resulting sequence does indeed           three problems. These problems, and Hilbert’s works in
converge to z. How do we determine A(z)?                       general, had a huge influence on mathematics during
   The first person to ask this problem was cayley              the twentieth century (Gray 2000). We are interested
[VI.46](/part-06/arthur-cayley-18211895), in 1879. He noticed that the solution is easy         here in Hilbert’s tenth problem: given a Diophantine

$II$ . $4$ .

Algorithms

equation, that is, a polynomial equation with any number of indeterminates and with integer coefficients, “a process is sought by which it can be determined, in a finite number of operations, whether the equation is solvable in integral numbers.” In other words, we have to find an algorithm which tells us, for any Diophantine equation, whether or not it has at least one integer solution. Of course, for many Diophantine equations it is easy to find solutions, or to prove that no solutions exist. However, this is by no means always the case:
consider, for instance, the Fermat equation x n  +  y $n = z$ n (n $\ge 3$ ). (Even before the solution of fermat’s last theorem [V.10](/part-05/fermats-last-theorem) an algorithm was known for determining for any specific n whether this equation had a solution. However, one could not call it easy .) If Hilbert’s tenth problem has a positive answer, then one can demonstrate it by exhibiting a “process” of the sort that Hilbert asked for. To do this, it is not necessary to have a precise understanding of what a “process” is.
However, if you want to give a negative answer, then you have to show that no algorithm exists, and for that you need to say precisely what counts as an algorithm. In section $1$ . $2$ we gave a definition that seems to be reasonably precise, but it is not precise enough to enable us to think about Hilbert’s tenth problem. What kind of rules are we allowed to use in an algorithm? How can we be sure that no algorithm achieves a certain task, rather than just that we are unable to find one?

$3$ . $2$

Recursive Functions: Church’s Thesis

What we need is a formal definition of the notion of an algorithm. In the seventeenth century, leibniz [VI.15](/part-06/gottfried-wilhelm-leibniz-16461716) envisaged a universal language that would allow one to reduce mathematical proofs to simple computations. Then, during the nineteenth century, logicians such as Charles Babbage, boole [VI.43](/part-06/george-boole-18151864), frege [VI.56](/part-06/gottlob-frege-18481925), and peano [VI.62](/part-06/giuseppe-peano-18581932) tried to formalize mathematical reasoning by an “algebraization” of logic.
Finally, between 1931$and$1936 , gödel [VI.92](/part-06/kurt-gdel-19061978), church [VI.89](/part-06/alonzo-church-19031995), and Stephen Kleene introduced the notion of recursive functions (see Davis ( 1965 ), which contains the original texts). Roughly speaking, a recursive function is one that can be calculated by means of an algorithm, but the definition of recursive functions is different, and is completely precise.

$3$ . $2$ . $1$

Primitive Recursive Functions

Another rough definition of a recursive function is as follows: a recursive function is one that has an induc-

$111$

tive definition. To give an idea of what this means, let us consider addition and multiplication as functions from N $\times$ N to N . To emphasize this, we shall write sum (x , y) and prod (x , y) for x  +  y and xy, respectively. A familiar fact about multiplication is that it is “repeated addition.” Let us examine this idea more precisely. We can define the function “prod” in terms of the function “sum” by means of the following two rules: prod (1 ,  y) equals y and prod $(x + 1$ ,  y) equals sum (prod (x , y), y).
Thus, if you know prod (x , y) and you know how to calculate sums, then you can work out prod (x $+ 1$ , y). Since you also know the “base case” prod ( $1$ , y), a simple inductive argument shows that these simple rules completely determine the function “prod.” We have just seen how one function can be “recursively defined” in terms of another. We now want to understand the class of all functions from N n to N that can be built up in a few basic ways, of which recursion is the most important. We shall refer to functions from N n to N as n-ary functions.
To begin with, we need an initial stock of functions out of which the rest will be built. It turns out that a very simple set of functions is enough. Most basic are the constant functions: that is, functions that take every n-tuple in N n to some fixed positive integer c. Another very simple function, but the function that allows us to create much more interesting ones, is the successor function, which takes a positive integer n to the next one, $n + 1$ . Finally, we have projection functions: the function U k n takes a sequence ($x^{1}$ , . . .
, x n) in N n and maps it to the kth coordinate x k . We then have two ways of constructing functions from other functions. The first is substitution. Given an m-ary function φand m n-ary functions. si1 , . . . , $\psi^{m}$ , one defines an n-ary function by ($x^{1}$ , . . . , x n)   $\to$ φ ( $\psi^{1} ( x^{1}$ , . . . , x n), . . . , $\psi$ m ($x^{1}$ , . . . , x n)). For example, (x + y){}2 = prod (sum (x , y), sum (x , y)), so we can obtain the function (x , y)\to (x + y)2 from the functions “sum” and “prod” by means of substitution.
The second method of construction is called primitive recursion. This is a more general form of the inductive method we used above in order to construct the function “prod” from the function “sum.” Given an $(n - 1)$ - ary function $\psi$ and an $(n + 1)$ - ary function μ, one defines an n-ary function φ by saying that

φ(1 , $x^{2}$ , . . . , $x^{n}) = \psi(x^{2}$ , . . . , $x^{n})$

112                                                                                       II. The Origins of Modern Mathematics

and                                                                     the function that takes y to A(x + 1, y) “iterates” the
                                                                        function that takes y to A(x, y). This means that the
      φ(k + 1, x2 , . . . , xn )
                                                                        values of A(x, y) are extremely large even when x and
                    = μ(k, φ(k, x2 , . . . , xn ), x2 , . . . , xn ).   y are fairly small. For example, A(4, y + 1) = 2 A(4, y) ,
In other words, ψ tells you the “initial values” of φ                   so in general A(4, y) is given by an “exponential tower”
(the values when the first coordinate is 1) and \mu tells                  of height y. We have A(4, 1) = 2, A(4, 2) = 22 = 4,
you how to work out φ(k + 1, x2 , . . . , xn ) in terms                 A(4, 3) = 24 = 16, A(4, 4) = 216 = 65 536, and
of φ(k, x2 , . . . , xn ), x2 , . . . , xn and k. (The sum–prod-        A(4, 5) = 265 536 , which is too large a number for its
uct example was simpler because we did not have a                       decimal notation to be reproduced here.
dependence on k.)                                                          It can be shown that for every primitive recursive
   A primitive recursive function is any function that can              function φ there is some x such that the function
be built from the initial stock of functions using the two              A(x, y) grows faster than φ(y). This is proved by an
operations, substitution and primitive recursion, that                  inductive argument. To oversimplify slightly, if ψ(y)
we have just described.                                                 and μ(y) have already been shown to grow more slowly
                                                                        than A(x, y), then one can show that the function
3.2.2    Recursive Functions                                            φ produced from them by primitive recursion also
                                                                        grows more slowly. This allows us to define a “diag-
If you think for a while about primitive recursion and                  onal” function A(y) = A(y, y) that is not primi-
know a small amount about programming computers,                        tive recursive because it grows faster than any of the
you should be able to convince yourself that they are                   functions A(x, y).
effectively computable: that is, that for any primitive                     If we are trying to understand in a precise way which
recursive function there is an algorithm for computing                  functions can be calculated algorithmically, then our
it. (For example, the operation of primitive recursion                  definition will surely have to encompass functions like
can usually be realized in a rather direct way as a FOR                 the Ackermann function, since they can in principle be
loop.)                                                                  computed. Therefore, we must consider a larger class
   How about the converse? Are all computable func-                     of functions than just the primitive recursive ones.
tions primitive recursive? Consider, for example, the                   This is what Gödel, Church, and Kleene did, and they
function that takes the positive integer n to pn , the                  obtained in different ways the same class of recursive
nth prime number. It is not hard to devise a simple                     functions. For instance, Kleene added a third method of
algorithm for computing pn , and it is then a good exer-                construction, which he called minimization. If f is an
cise (if you want to understand primitive recursion) to                 (n + 1)-ary function, one defines an n-ary function g
convert this algorithm into a proof that the function is                by taking g(x1 , . . . , xn ) to be the smallest y such that
primitive recursive.                                                    f (x1 , . . . , xn , y) = 0. (If there is no such y, one regards
   However, it turns out that this function is not typical:             g as undefined for (x1 , . . . , xn ). We shall ignore this
there are computable functions that are not primitive                   complication in what follows.)
recursive. In 1928, Wilhelm Ackermann defined a func-                       It turns out that, not only is the Ackermann function
tion, now known as the Ackermann function, that has a                   recursive, but so are all functions that one can write
“doubly inductive” definition. The following function is                 a computer program to calculate. So this gives us the
not quite the same as Ackermann’s, but it is very simi-                 formal definition of computability that we did not have
lar. It is the function A(x, y) that is determined by the               before.
following recurrence rules:
                                                                        3.2.3   Effective Calculability
  (i) A(1, y) = y + 2 for every y;
 (ii) A(x, 1) = 2 for every x;                                          Once the notion of recursive functions had been formu-
(iii) A(x+1, y +1) = A(x, A(x+1, y)) whenever x > 1                     lated, Church claimed that the class of recursive func-
      and y > 1.                                                        tions was exactly the same as the class of “effectively
                                                                        calculable” functions. This claim is widely believed,
For example, A(2, y + 1) = A(1, A(2, y)) = A(2, y) + 2.                 but it is a conviction that cannot be proved since
From this and the fact that A(2, 1) = 2 it follows that                 the notion of recursive function is a mathematically
A(2, y) = 2 y for every y. In a similar way one can                      precise concept while that of an effectively calcula-
show that A(3, y) = 2 y , and in general that for each x                 ble function is an intuitive notion, rather like that of

$II$ . $4$ .

Algorithms

“algorithm.” Church’s statement lies in the realm of metamathematics and is now called Church’s thesis.

$3$ . $3$

Turing Machines

One of the strongest pieces of evidence for Church’s thesis is that in 1936 turing [VI.94](/part-06/alan-turing-19121954) found a very different-looking way of formalizing the notion of an algorithm, which he showed was equivalent. That is, every function that was computable in his new sense was recursive and vice versa. His approach was to define a notion that is now called a Turing machine, which can be thought of as an extremely primitive computer, and which played an important part in the development of actual computers.
Indeed, functions that are computable by Turing machines are precisely those that can be programmed on a computer. The primitive architecture of Turing machines does not make them any less powerful: it merely means that in practice they would be too cumbersome to program or to implement in hardware.
Since recursive functions are the same as Turing-computable functions, it follows that recursive functions too are those functions that can be programmed on a computer, so to disbelieve Church’s thesis would be to maintain that there are some “effective procedures” that cannot be converted into computer programs--which seems rather implausible. A description of Turing machines can be found in computational complexity [IV.20](/part-04/computational-complexity). Turing introduced his machines in response to a question that generalized Hilbert’s tenth problem.
The Entscheidungspr oblem, or decision problem, was also asked by Hilbert, in 1922 . He wanted to know whether there was a “mechanical process” by which one could determine whether any given mathematical statement could be proved. In order to think about this, Turing needed a precise notion of what constituted a “mechanical process.” Once he had defined Turing machines, he was able to show by means of a fairly straightforward diagonal argument that the answer to Hilbert’s question was no.
His argument is outlined in the insolubility of the halting problem [V.20](/part-05/the-insolubility-of-the-halting-problem). $4$ Properties of Algorithms $4$ . $1$ Iteration versus Recursion As previously mentioned, we often encounter computation rules which define each element of a sequence in terms of the preceding elements. This gives rise to two different ways of carrying out the computation. $113$ The first is iteration: one computes the first terms, then one obtains succeeding terms by means of a recurrence formula.
The second is recursion, a procedure which seems circular at first because one defines a procedure in terms of itself. However, this is allowed because the procedure calls on itself with smaller values of the variables. The concept of recursion is subtle and powerful. Let us try to clarify the difference between recursion and iteration with some examples. Suppose that we wish to compute $n! = 1$ · $2$ · $3$ · · · $(n - 1)$ · n. An obvious way of doing it is to note the recurrence relation $n! = n$ · $(n - 1)$ ! and the initial value $1$ ! $= 1$ .
Having done so, one could then compute successively the numbers $2$ ! , $3$ ! , $4$ ! , and so on until one reached n!, which would be the iterative approach. Alternatively, one could say that if fact (n) is the result of a procedure that leads to n!, then fact (n) = $n \times$ fact $(n - 1)$ , which would be a recursive procedure. The second approach says that to obtain n! it suffices to know how to obtain $(n - 1)$ ! , and to obtain $(n - 1)$ ! it suffices to know how to obtain (n $- 2$ ) ! , and so on. Since one knows that $1$ ! $= 1$ , one can obtain n!.
Thus, recursion is a bit like iteration but thought of “backwards.” In some ways this example is too simple to show clearly the difference between the two procedures. Moreover, if one wishes to compute n!, then iteration seems simpler and more natural than recursion. We now look at an example where recursion is far simpler than iteration. $4$ . $1$ . $1$ The Tower of Hanoi The Tower of Hanoi is a problem that goes back to Édouard Lucas in 1884 .
One is given n disks, all of different sizes and each with a hole in the middle, stacked on a peg A in order of size, with the largest one at the bottom. We also have two empty pegs B and C. The problem is to move the stack from peg A to peg B while obeying the following rules. One is allowed to move just one disk at a time, and each move consists in taking the top disk from one of the pegs and putting it onto another peg. In addition, no disk may ever be placed above a smaller disk. The problem is easy if you have just three disks, but becomes rapidly harder as the number of disks increases.
However, with the help of recursion one can see very quickly that an algorithm exists for moving the disks in the required way. Indeed, suppose that we know a procedure H (n $- 1$ ) that solves the problem for n $- 1$ disks. Here is a procedure H (n) for n disks: move

114                                                                             II. The Origins of Modern Mathematics

the first n − 1 disks on top of A to C with the procedure       can be defined using recursion. Suppose we can find a
H(n − 1), then move the last disk on A to B, and finally        pair (u , v ) that works for b and r : that is, u b +v r =
apply once more the procedure H(n−1) to move all the           d. Since a = qb + r , we can substitute r = a − qb into
disks from C to B. If we write HAB (n) for the procedure       this equation and deduce that d = u b + v (a − qb) =
that moves n disks from peg A to peg B according to the        v a+(u −v q)b. Thus, setting u = v and v = u −v q,
rules, then we can represent this recursion symbolically       we have ua + vb = d. Since a pair (u, v) that works
as                                                             for a and b can be easily calculated from a pair (u , v )
        HAB (n) = HAC (n − 1)HAB (1)HBC (n − 1).               that works for the smaller b and r , this gives us a recur-
Thus, HAB (n) is deduced from HAC (n − 1) and HBC (n −         sive procedure. The “bottom” of the recursion is when
1), which are clearly equivalent to HAB (n − 1). Since         r = 0, in which case we know that 1 b +0 r = d. Once we
HAB (1) is certainly easy, we have the full recursion.         reach this, we can “run back up” through Euclid’s algo-
   One can easily check by induction that this proce-          rithm, successively modifying our pair (u, v) according
dure takes 2 n − 1 moves—moreover, it turns out that            to the rule just given. Notice, incidentally, that the fact
the task cannot be accomplished in fewer moves. Thus,          that this procedure exists is a proof of Bézout’s lemma.
the number of moves is an exponential function of n,
so for large n the procedure will be very long.                4.2     Complexity
   Further more, the larger n is, the more memory one
must use to keep track of where one is in the procedure.       So far we have considered algorithms in a theoretical
By contrast, if we wish to carry out an iteration during       way and ignored their obvious practical importance.
an iterative procedure, it is usually enough to know just      However, the mere existence of an algorithm for car-
the result of the previous iteration. Thus, the most we        rying out a certain task does not guarantee that your
need to remember is the result of one iteration. There         computer can do it, because some algorithms take so
is in fact an iterative procedure for the Tower of Hanoi       many steps that no computer can implement them
as well. It is easy to describe, but it is much less obvious   (unless you are prepared to wait billions of years for
that it actually solves the problem. It encodes the posi-      the answer). The complexity of an algorithm is, loosely
tions of the n disks as an n-bit sequence and at each          speaking, the number of steps it takes to complete
step applies a very simple rule to obtain the next n-bit       its task (as a function of the size of the input). More
sequence. This rule makes no reference to how many             precisely, this is the time complexity of the algorithm.
steps have so far taken place, and therefore the amount        There is also its space complexity, which measures the
of memory needed, beyond that required to store the            maximum amount of memory a computer needs in
positions of the disks, is very small.                         order to implement it. Complexity theory is the study
                                                               of the computational resources that are needed to carry
4.1.2   The Extended Euclid Algorithm                          out various tasks. It is discussed in detail in computa-
                                                               tional complexity [IV.20](/part-04/computational-complexity)—here we shall give a hint
Euclid’s algorithm is another example that lends itself
                                                               of it by examining the complexity of one algorithm.
in a very natural way to a recursive procedure. Recall
that if a and b are two positive integers, then we
can write a = qb + r with 0 ⩽ r < b. The algo-                 4.2.1    The Complexity of Euclid’s Algorithm
rithm depended on the observation that gcd(a, b) =
                                                               The length of time that a computer will take to imple-
gcd(b, r ). Since the remainder r can be calculated eas-
                                                               ment Euclid’s algorithm is closely related to the number
ily from a and b, and since the pair (b, r ) is smaller
                                                               of times one needs to compute quotients and remain-
than the pair (a, b), this gives us a recursive procedure,
                                                               ders: that is, to the number of times that the recur-
which stops when we reach a pair of the form (a, 0).
                                                               sive procedure calls on itself. Of course, this number
   An important extension of Euclid’s algorithm is Bé-
                                                               depends in turn on the size of the numbers a and b
zout’s lemma, which states that for any pair of posi-
                                                               whose gcd is to be determined. An initial observation
tive integers (a, b) there exist (not necessarily positive)
                                                               is that if 0 < b ⩽ a, then the remainder in the divi-
integers u and v such that
                                                               sion of a by b is less than a/2. To see this, notice that
               ua + vb = d = gcd(a, b).                        if b ⩾ a/2 then the remainder is a − b, which is at
How can we obtain such integers u and v? The answer            most a/2, whereas if b ⩽ a/2 then we know that the
is given by the extended Euclid algorithm, which again         remainder is at most b and so is again at most a/2. It

II.4.   Algorithms                                                                                                 115

follows that after two steps of calculating the remain-      Rearranging this, we find that 1 = 5 . imes 38 − 9 . imes 21, and
der, one arrives at a pair where the larger number is        we have finished.
at most half what it was before. From this it is easy to       If you think about this procedure, you will see that
show that the number of such calculations needed is at       at each stage one just has to keep track of how two
most 2 log2 a + 1, which is roughly proportional to the      numbers are expressed in terms of a and b. Thus, the
number of digits of a. Since this number is far smaller      space complexity of the extended Euclid algorithm is
than a itself, the algorithm can be used easily for very     small if you implement it properly.
large numbers, which gives it great practical utility to
go with its theoretical significance.                                   5   Modern Aspects of Algorithms
   The number of divisions needed in the worst case
does not appear to have been studied until the first half     5.1     Algorithms and Chance
of the nineteenth century: the above bound of 2 log2 a+      Earlier it was remarked that the notion of algorithm
1 was given by Pierre-Joseph-Étienne Finck in 1841. It       has continued to develop even since its formalization
is in fact not hard to improve this result slightly and      in the 1920 s and 1930 s. One of the main reasons for
prove that the algorithm takes longest when a and b are      this has been the realization that randomness can be
consecutive Fibonacci numbers. This implies that the         a very useful tool in algorithms. This may seem puz-
number of divisions needed is never more than logφ a+        zling at first, since algorithms as we have described
1, where φ is the golden ratio.                              them are deterministic procedures; in a moment we
   Euclid’s algorithm also has low space complexity:         shall give an example that illustrates how randomness
once one has replaced a pair (a, b) by a new pair (b, r ),   can be used. A second reason is the recent development
one can forget the original pair, so at any stage one        of the notion of a quantum algorithm: for more about
does not have to hold very much in one’s memory (or          this, see quantum computation [III.74](/part-03/quantum-computation).
store it in the memory of one’s computer). By contrast,         The following simple example illustrates how chance
the extended Euclid algorithm appears to require one         can be useful. Given an integer n, we shall define a func-
to remember the entire sequence of calculations that         tion f (n) that is not too hard to calculate but is diffi-
leads to the gcd d of a and b, so that one can make          cult to analyze. If n has d digits, then you approximate
a series of substitutions and eventually find u and v         . qrt{n} to the point where the first d digits after the dec-
such that ua + vb = d. However, a closer look at it          imal point are correct (using Newton’s method, say),
reveals that one can perform it while keeping track of       and let f (n) equal the dth digit. Now suppose that you
only a few numbers at any one time.                          wish to know roughly what proportion of numbers n
   Let us see how this works with an example. We shall       between 1030 and 1031 have f (n) = 0. There does not
set a = 38, b = 21, and find integers u and v such that       seem to be a good way of determining this theoretically,
38 u + 21 v = 1. We begin by writing down the first step        but calculating it on a computer looks very hard, too,
of Euclid’s algorithm:                                       as there are so many numbers between 1030 and 1031 .
                     38 = 1 . imes 21 + 17.                       However, if one chooses a random sample of 10 000
                                                             numbers between 1030 and 1031 and does the calcula-
This tells us that 17 = 38 − 21. Now we write down the
                                                             tion for just those numbers, then with high probability
second step:
                                                             the proportion of those numbers with f (n) = 0 will be
                     21 = 1 . imes 17 + 4.
                                                             roughly the same as the proportion of all numbers in
We know how to write 17 in terms of 38 and 21, so let        the range with f (n) = 0. Thus, if you do not demand
us do a substitution:                                        absolute certainty but instead are satisfied with a very
                21 = 1 × (38 − 21) + 4.                      small error probability, then you can achieve your goal
                                                             with much more modest computational resources.
Rearranging this, we discover that 4 = 2 . imes 21 − 38. Now
we write down the third step of Euclid’s algorithm:
                                                             5.1.1    Pseudorandom Numbers
                      17 = 4 . imes 4 + 1.
                                                             How, though, does one use a deterministic computer to
We know how to write 17 and 4 in terms of 38 and 21,
                                                             select ten thousand random numbers between 1030 and
so let us substitute again:
                                                             1031 ? The answer is that one does not in fact need to: it
            38 − 21 = 4 × (2 . imes 21 − 38) + 1.                 is almost always good enough to make a pseudorandom

116                                                                            II. The Origins of Modern Mathematics

selection instead. The basic idea is well-illustrated by     it is not only the case that the limit of the frequency of
a method proposed by von neumann [VI.91](/part-06/john-von-neumann-19031957) in the              ones is 12 , but also that the same is true for any subse-
mid 1940 s. One begins with a 2 n-digit integer a, called      quence that can be extracted “by means of a reasonable
the “seed,” calculates a2 , and extracts from a2 a new       procedure.” In 1940 Church made this more precise by
2 n-digit number b by taking all the digits of a2 from        translating “by means of a reasonable procedure” into
the (n + 1)st to the 3 nth. One then repeats the pro-         “by means of a recursive function.” However, even this
cedure for b, and so on. Because of the way multi-           condition is too weak: there are such sequences that
plication jumbles up digits, the resulting sequence of       do not satisfy the “law of the iterated logarithm” (some-
2 n-digit numbers is very hard to distinguish from a          thing that a random sequence would satisfy). Currently,
truly random sequence, and can be used in randomized         the so-called Martin–Löf thesis, formulated in 1966, is
algorithms.                                                  one of the most commonly used definitions of random-
   There are many other ways of producing pseudo-            ness: a random sequence is a sequence that satisfies all
random sequences, and this raises an obvious ques-           the “effective statistical sequential tests,” a notion that
tion: what properties should a sequence have for us          we cannot formulate precisely here, but which uses in
to regard it as pseudorandom? This turns out to be a         an essential manner the notion of recursive function. By
complex question, and several different answers have          contrast with Church’s thesis, with which almost every
been proposed. Randomized algorithms and pseudo-             mathematician agrees, the Martin–Löf thesis is still very
randomness are discussed in depth in computational           much under discussion.
complexity [IV.20 §§6, 7], and a formal definition of
“pseudorandom generators” can be found there. (See           5.2     The Influence of Algorithms on
also computational number theory [IV.3 §2](/part-04/computational-number-theory) for an                    Contemporary Mathematics
account of a famous randomized algorithm for testing
whether a number is prime.) Here, let us discuss a simi-     Through out its history, mathematics has concerned
lar question about infinite sequences of zeros and ones.      itself with problems of existence. For example, are there
When should we regard such a sequence as “random”?           transcendental numbers [III.41](/part-03/irrational-and-transcendental-numbers), that is, numbers
   Again, many different answers have been suggested.         that are not the root of any polynomial with integer
One idea is to consider simple statistical tests: we         coefficients? There are two kinds of answers to such
would expect that in the long run the frequency of zeros     questions: either one actually exhibits a number such
should be roughly the same as that of ones, and more         as π and proves that it is transcendental (this was done
generally that any small subsequence such as 00110           by Carl Lindemann in 1873), or one gives an “indirect
should appear with the “right” frequency (which for          existence proof,” such as cantor’s [VI.54](/part-06/georg-cantor-18451918) demonstra-
                            1
this sequence would be 32      since it has length 5).       tion that there are “far more” real numbers than there
   It is perfectly possible, however, for a sequence to      are roots of polynomials with integer coefficients (see
pass these simple tests but to be generated by a deter-      countable and uncountable sets [III.11](/part-03/countable-and-uncountable-sets)), which
ministic procedure. If one is trying to decide whether       shows in particular that some real numbers must be
a sequence of zeros and ones is actually random—             transcendental.
that is, produced by some means such as tossing a
coin—then we will be very suspicious of a sequence if        5.2.1    Constructivist Schools
we can identify an algorithm that produces the same
sequence. For example, we would reject a sequence that       In around 1910, under the leadership of l. e. j. brouwer
was derived in a simple way from the digits of π , even      [VI.75](/part-06/luitzen-egbertus-jan-brouwer-18811966), the intuitionist school [II.7 §3.1](/part-02/foundations-crisis) of mathe-
if it passed the statistical tests. However, merely to ask   matics arose, which rejected the principle of the ex-
that a sequence cannot be produced by a recursive pro-       cluded middle, the principle that every mathematical
cedure does not give a good test for randomness: for         assertion is either true or false. In particular, Brouwer
example, if one takes any such sequence and alternates       did not accept that the existence of a mathematical
the terms of that sequence with zeros, one then obtains      object such as a transcendental number is proved by
a new sequence that is far from random, but which still      the fact that its nonexistence would lead to a contra-
cannot be produced recursively.                              diction. This was the first of several “constructivist”
   For this reason, von Mises suggested in 1919 that a       schools, for which an object exists if and only if it can
sequence of zeros and ones should be called random if        be constructed explicitly.

$II$ . $5$ .

The Development of Rigor in Mathematical Analysis Not many working mathematicians have subscribed to these principles, but almost all would agree that there is an important difference between constructive proofs and indirect proofs of existence, a difference that has come to seem more important with the rise of computer science. This has added a further level of refinement: sometimes, even if you know that a mathematical object can be produced algorithmically, you still care whether the algorithm can be made to work in a reasonably short time.

$5$ . $2$ . $2$

Effective Results

In number theory there is an important distinction between “effective” and “ineffective” results. For example, mordell’s conjecture [V.29](/part-05/rational-points-on-curves-and-vi40-ernst-eduard-kummer-18101893), proposed in 1922 and finally proved by Faltings in 1983 , states that a smooth rational plane curve of degree $n > 3$ has at most finitely many points with rational coefficients. Among its many consequences is that the Fermat equation x n + y $n = z$ n has only finitely many integral solutions for each n $\ge 4$ .
(Of course, we now know that it has no nontrivial solutions, but the Mordell conjecture was proved before Fermat’s last theorem, and it has many other consequences .) However, Faltings’s proof is ineffective, which means that it does not give any information about how many solutions there are (except that there are not infinitely many), or how large they can be, so one cannot use a computer to find them all and know that one has finished the job.
There are many other very important proofs in number theory that are ineffective, and replacing any one of them with an effective argument would be a major breakthrough. A completely different set of issues was raised by another solution to a famous open problem, the fourcolor theorem [V.12](/part-05/the-four-color-theorem), which was conjectured by Francis Guthrie, a student of de morgan [VI.38] , in 1852 and proved in 1976 by Appel and Haken, with a proof that made essential use of computers.
They began with a theoretical argument that reduced the problem to checking finitely many cases, but the number of cases was so large that it could not be done by hand and was instead done by computers. But how should we judge such a proof? Can we be sure that the computer has been programmed correctly? And even if it has, how do we know with a computation of that size that the computer has operated correctly? And does a proof that relies on a computer really tell us why the theorem is true? These questions continue to be debated today. $117$ Further Reading Archimedes. 2002 .
The Works of Archimedes, translated by T. L. Heath. London: Dover. Originally published 1897 , Cambridge University Press, Cambridge. Chabert, J.-L., ed. 1999 . A History of Algorithms: From the Pebble to the Microchip. Berlin: Springer Davis, M., ed. 1965 . The Undecidable. New York: The Raven Press. Euclid. 1956 . The Thirteen Books of Euclid’s Elements, translated by T. L. Heath ( $3$ vols .), $2nd$ edn. London: Dover. Originally published 1929 , Cambridge University Press, Cambridge. Gray, J. J. 2000 . The Hilbert Challenge. Oxford: Oxford University Press. Newton, I. 1969 .
The Mathematical Papers of Isaac Newton, edited by  D.T. Whiteside, volume $3(1670 - 73)$ , $pp.43 - 47$ . Cambridge: Cambridge University Press. II . $5$ The Development of Rigor in Mathematical Analysis Tom Archibald $1$ Background This article is about how rigor came to be introduced into mathematical analysis. This is a complicated topic, since mathematical practice has changed considerably, especially in the period between the founding of the calculus (shortly before 1700 ) and the early twentieth century.
In a sense, the basic criteria for what constitutes a correct and logical argument have not altered, but the circumstances under which one would require such an argument, and even to some degree the purpose of the argument, have altered with time.
The voluminous and successful mathematical analysis of the $1700s$ , associated with names such as Johann and Daniel bernoulli [VI.18](/part-06/the-bernoullis-) , euler [VI.19](/part-06/leonhard-euler-17071783), and lagrange [VI.22](/part-06/joseph-louis-lagrange-17361813), lacked foundational clarity in ways that were criticized and remedied in subsequent periods. By around 1910 a general consensus had emerged about how to make arguments in analysis rigorous.
Mathematics consists of more than techniques for calculation, methods for describing important features of geometric objects, and models of worldly phenomena. Nowadays, almost all working mathematicians are trained in, and concerned with, the production of rigorous arguments that justify their conclusions. These conclusions are usually framed as theorems, which are statements of fact, accompanied by an argument, or proof, that the theorem is indeed true. Here is a simple example: every positive whole number that is divisible

118                                                                           II. The Origins of Modern Mathematics

by 6 is also divisible by 2. Running through the six times   propositions) in a step-by-step manner, not bringing
table (6, 12, 18, 24, ...) we see that each number is even,    in anything extra (either on the sly or unintentionally).
which makes the statement easy enough to believe. A          This classical model of geometric argument was widely
possible justification of it would be to say that since 6     used in reasoning about whole numbers (for example
is divisible by 2, then every number divisible by 6 must     by fermat [VI.12](/part-06/pierre-fermat-1601665)), in analytic geometry (descartes
also be divisible by 2.                                      [VI.11](/part-06/ren-descartes-15961650)), and in mechanics (Galileo).
   Such a justification might or might not be thought            This article is about rigor in analysis, a term which
of as a thorough proof, depending on the reader. For         itself has had a shifting meaning. Coming from ancient
on hearing the justification we can raise questions: is it    origins, by around 1600 the term was used to refer to
always true that if a, b, and c are three positive whole     mathematics in which one worked with an unknown
numbers such that c is divisible by b and b is divisi-       (something we would now write as x) to do a calculation
ble by a, then c is divisible by a? What is divisibility     or find a length. In other words, it was closely related to
exactly? What is a whole number? The mathematician           algebra, though the notion was imported into geometry
deals with such questions by precisely defining con-          by Descartes and others. However, over the course of
cepts (such as divisibility of one number by another),       the eighteenth century the word came to be associated
basing the definitions on a smallish number of unde-          with the calculus, which was the principal area of appli-
fined terms (“whole number” might be one, though it           cation of analytic techniques. When we talk about rigor
is possible to start even further back, with sets). For      in analysis it is the rigorous theory of the mathematics
example, one could define a number n to be divisible          associated with differential and integral calculus that
by a number m if and only if there exists an integer q       we are principally discussing. In the third quarter of
such that qm = n. Using this definition, we can give a        the seventeenth century rival methods for the differ-
more precise proof: if n is divisible by 6, then n = 6 q      ential and integral calculus were devised by newton
for some q, and therefore n = 2(3 q), which proves that       [VI.14](/part-06/isaac-newton-16421727) and leibniz [VI.15](/part-06/gottfried-wilhelm-leibniz-16461716), who thereby synthesized
n is divisible by 2. Thus we have used the definitions        and extended a considerable amount of earlier work
to show that the definition of divisibility by 2 holds        concerned with tangents and normals to curves and
whenever the definition of divisibility by 6 holds.           with the areas of regions bounded by curves. The tech-
   Historically, mathematical writers have been satis-       niques were highly successful, and were extended read-
fied with varying levels of rigor. Results and methods        ily in a variety of directions, most notably in mechanics
have often been widely used without a full justification      and in differential equations.
of the kind just outlined, particularly in bodies of math-      The key common feature of this research was the use
ematical thought that are new and rapidly developing.        of infinities: in some sense, it involved devising meth-
Some ancient cultures, the Egyptians for example, had        ods for combining infinitely many infinitely small quan-
methods for multiplication and division, but no justi-       tities to get a finite answer. For example, suppose we
fication of these methods has survived and it does not        divide the circumference of a circle into a (large) num-
seem especially likely that formal justification existed.     ber of equal parts by marking off points at equal dis-
The methods were probably accepted simply because            tances, then joining the points and creating triangles by
they worked, rather than because there was a thorough        joining the points to the center. Adding up the areas of
argument justifying them.                                    the triangles approximates the circular area, and the
   By the middle of the seventeenth century, European        more points we use the better the approximation. If
mathematical writers who were engaged in research            we imagine infinitely many of these inscribed triangles,
were well-acquainted with the model of rigorous math-        the area of each will be “infinitely small” or infinitesi-
ematical argument supplied by euclid’s [VI.2](/part-06/euclid-ca) Ele-           mal. But because the total involves adding up infinitely
ments. The kind of deductive, or synthetic, argument         many of them, it may be that we get a finite posi-
we illustrated earlier would have been described as a        tive total (rather than just 0, from adding up infinitely
proof more geometrico—in the geometrical way. While          many zeros, or an infinite number, as we would get
Euclid’s arguments, assumptions, and definitions are          if we added the same finite number to itself infinitely
not wholly rigorous by today’s standards, the basic idea     many times). Many techniques for doing such calcula-
was clear: one proceeds from clear definitions and gen-       tions were devised, though the interpretation of what
erally agreed basic ideas (such as that the whole is         was taking place varied. Were the infinities involved
greater than the part) to deduce theorems (also called       “real” or merely “potential”? If something is “really”

$II$ . $5$ .

The Development of Rigor in Mathematical Analysis infinitesimal, is it just zero? Aristotelian writers had abhorred actual infinities, and complaints about them were common at the time. Newton, Leibniz, and their immediate followers provided mathematical arguments to justify these methods.
However, the introduction of techniques involving reasoning with infinitely small objects, limiting processes, infinite sums, and so forth meant that the founders of the calculus were exploring new ground in their arguments, and the comprehensibili ty of these arguments was frequently compromised by vague terminology or by the drawing of one conclusion when another might seem to follow equally well. The objects they were discussing included infinitesimals (quantities infinitely smaller than those we experience directly), ratios of vanishingly small quantities (i . e .
, fractions in, or approaching, the form $0/0)$ , and finite sums of infinitely many positive terms. Taylor series representations, in particular, provoked a variety of questions. A function may be written as a series in such a way that the series, when viewed as a function, will have, at a given point $x = a$, the same value as the function, the same rate of change (or first derivative), and the same higher-order derivatives to arbitrary order: $f(x) = f(a) +$f( a )$(x - a) + \frac{1}{2}$ f( a )(x - a)2 + · · · . For example, sin $x = x - x^{3}/3$ ! $+ x^{5}/5$ !
+  · · · , a fact already known to Newton though such series are now named after Newton’s disciple brook taylor [VI.16](/part-06/brook-taylor-16851731). One problem with early arguments was that the terms being discussed were used in different ways by different writers. Other problems arose from this lack of clarity, since it concealed a variety of issues. Perhaps the most important of these was that an argument could fail to work in one context, even though a very similar argument worked perfectly well in another. In time, this led to serious problems in extending analysis.
Eventually, analysis became fully rigorous and these difficulties were solved, but the process was a long one and it was complete only by the beginning of the twentieth century. Let us consider some examples of the kinds of difficulties that arose from the very beginning, using a result of Leibniz. Suppose we have two variables, $u$ and $v$, each of which changes when another variable, x, changes. An infinitesimal change in x is denoted dx, the differential of x. The differential is an infinitesimal quantity, thought of as a geometrical magnitude, such as a length, for example.
This was imagined to be combined or compared with other magnitudes in the usual

$119$

ways (two lengths can be added, have a ratio, and so on). When x changes to x  +  dx, $u$ and $v$ change to u  +  du and v  +  dv, respectively. Leibniz concluded that the product uv would then change to $uv + udv + vdu,$ so that d (uv)  =  u dv  +  v du. His argument is, roughly, that d (uv) = (u + du ) (v + dv) - uv. Expanding the right-hand side using regular algebra and then simplifying gives u dv  +  v du  +  du dv. But the term du dv is a second-order infinitesimal, vanishingly small compared with the first-order differentials, and is thus treated as equal to $0$ .
Indeed, one aspect of the problems is that there appears to be an inconsistency in the way that infinitesimals are treated. For instance, if you want to work out the derivative of $y = x{}^{2}$ , the calculation corresponding to the one just given (expanding (x + dx)2 , and so on) shows that  dy/dx = 2 x + dx. We then treat the dx on the right-hand side as zero, but the one on the left-hand side seems as though it ought to be an infinitesimal nonzero quantity, since otherwise we could not divide by it. So is it zero or not? And if not, how do we get around the apparent inconsistency?
At a slightly more technical level, the calculus required mathematicians to deal repeatedly with the “ultimate” values of ratios of the form dy  /  dx when the quantities in both numerator and denominator approach or actually reach $0$ . This phrasing uses, once again, the differential notation of Leibniz, though the same issues arose for Newton with a slightly different notational and conceptual approach. Newton generally spoke of variables as depending on time, and he sought (for example) the values approached when “evanescent increments”--vanishingly small time intervals-- are considered.
One long-standing set of confusions arose precisely from this idea that variable quantities were in the process of changing, whether with time or with changes in the value of another variable. This means that we talk about values of a variable approaching a given value, but without a clear idea of what this “approach” actually is.

$2$

Eighteenth-Century Approaches

and Critiques

Of course, had the calculus not turned out to be an enormously fruitful field of endeavor, no one would have bothered to criticize it. But the methods of Newton and Leibniz were widely adopted for the solution of problems that had interested earlier generations (notably tangent and area problems) and for the posing and solution of problems that these techniques suddenly

120                                                                             II. The Origins of Modern Mathematics

made far more accessible. Problems of areas, maxima                Probably the most famous eighteenth-century cri-
and minima, the formulation and solution of differen-            tique of the language and methods of eighteenth-cen-
tial equations to describe the shape of hanging chains          tury analysis is due to the philosopher George Berke-
or the positions of points on vibrating strings, applica-       ley (1685–1753). Berkeley’s motto, “To be is to be
tions to celestial mechanics, the investigation of prob-        perceived,” expresses his idealist stance, which was
lems having to do with the properties of functions              coupled with a strong view that the abstraction of
(thought of for the most part as analytic expressions           individual qualities, for the purposes of philosophi-
involving variable quantities)—all these fields and more         cal discussion, is impossible. The objects of philos-
were developed over the course of the eighteenth cen-           ophy should thus be things that are perceived, and
tury by mathematicians such as Taylor, Johann and               perceived in their entirety. The impossibility of per-
Daniel Bernoulli, Euler, d’alembert [VI.20](/part-06/jean-le-rond-dalembert-17171783), Lagrange,          ceiving infinitesimally small objects, combined with
and many others. These people employed many vir-                their manifestly abstracted nature, led him to attack
tuoso arguments of suspect validity. Operations with            their use in his 1734 treatise The Analyst: Or, a Dis-
divergent series, the use of imaginary numbers, and             course Addressed to an Infidel Mathematician. Referring
manipulations involving actual infinities were used              sarcastically in 1734 to infinitesimals as the “ghosts
effectively in the hands of the most capable of these            of departed quantities,” Berkeley argued that neglect-
writers. However, the methods could not always be               ing some quantity, no matter how small, was inap-
explained to the less capable, and thus certain results         propriate in mathematical argument. He quoted New-
were not reliably reproducible—a very odd state for             ton in this regard, to the effect that “in mathematical
mathematics from today’s standpoint. To do Euler’s              matters, errors are to be condemned, no matter how
calculations, one needed to be Euler. This was a situ-          small.” Berkeley continued, saying that “[n]othing but
ation that persisted well into the following century.           the obscurity of the subject” could have induced New-
   Specific controversies often highlighted issues that          ton to impose this kind of reasoning on his follow-
we now see as a result of foundational confusion. In the        ers. Such remarks, while they apparently did not dis-
case of infinite series, for example, there was confusion        suade those enamored of the methods, contributed to a
about the domain of validity of formal expressions.             sentiment that aspects of the calculus required deeper
                                                                explanation. Writers such as Euler, d’Alembert, Lazare
Consider the series
                                                                Carnot, and others attempted to address foundational
            1 − 1 + 1 − 1 + 1 − 1 + 1 − ··· .                   criticisms by clarifying what differentials were, and
In today’s usual elementary definition (due to cauchy            gave a variety of arguments to justify the operations
[VI.29](/part-06/augustin-louis-cauchy-17891857) around 1820) we would now consider this series          of the calculus.
to be divergent because the sequence of partial sums
                                                                2.1   Euler
1, 0, 1, 0, . . . does not tend to a limit. But in fact there
                                                                Euler contributed to the general development of analy-
was some controversy about the actual meaning of such
                                                                sis more than any other individual in the eighteenth
expressions. Euler and Nicolaus Bernoulli, for example,
                                                                century, and his approaches to justifying his arguments
discussed the potential distinction between the sum
                                                                were enormously influential even after his death, owing
and the value of an infinite sum, Bernoulli arguing that
                                                                to the success and wide use of his important textbooks.
something like 1−2+6−24+120+· · · has no sum but
                                                                Euler’s reasoning is sometimes regarded as rather care-
that this algebraic expression does constitute a value.
                                                                less since he operated rather freely with the notation of
Whatever may have been meant by this, Euler defended
                                                                the calculus, and many of his arguments are certainly
the notion that the sum of the series is the value of
                                                                deficient by later standards. This is particularly true
the finite expression that gives rise to the series. In
                                                                of arguments involving infinite series and products. A
his 1755 Institutiones Calculi Differential is, he gives the
                                                                typical example is provided by an early version of his
example of 1 − x + x 2 − x 3 + · · · , which comes from
                                                                proof that             . nfty
1/(1 + x), and later defended the view that this meant                                   1     π2
                                  1                                                          =     .
that 1 − 1 + 1 − 1 + · · · = 2 . His view was not uni-                                n=1
                                                                                          n2     6
versally accepted. Similar controversies arose in con-          His method is as follows. Using the known series ex-
sidering how to extend the values of functions outside          pansion for sin x he considered the zeros of
their usual domain, for example with the logarithms of                       √
                                                                          sin x         x    x2   x3
negative numbers.                                                           √     =1−      +    −    + ··· .
                                                                             x          3!   5!   7!

$II$ . $5$ .

The Development of Rigor in Mathematical Analysis These lie at $\pi^{2}$ , (2\pi)2 , (3\pi)2 , . . . . Applying (without argument) the factor theorem for finite algebraic equations he expressed this equation as √ sin x x x x √

$= 1 - {}^{2}1 - 1 -$

··· .

$4\pi29\pi2$

x

$\pi$

Now, it can be seen that the coefficient of x in the infinite sum, $- \frac{1}{6}$ , should equal the negative of the sum of the coefficients of x in the product. Euler apparently concluded this by imagining multiplying out the infinitely many terms and selecting the $1$ from all but one of them. This gives

$1111 + +$

 +  ···  =  ,

$\pi24\pi29\pi26$

and multiplying both sides by $\pi^{2}$ gives the required sum. We now think of this approach as having several problems. The product of the infinitely many terms may or may not represent a finite value, and today we would specify conditions for when it does. Also, applying a result about (finite) polynomials to (infinite) power series is a step that requires justification. Euler himself was to provide alternative arguments for this result later in his life.
But the fact that he may have known counterexamples--situations in which such usages would not work--was not, for him, a decisive obstacle. This view, in which one reasoned in a generic situation that might admit a few exceptions, was common at his time, and it was only in the late nineteenth century that a concerted effort was made to state the results of analysis in ways that set out precisely the conditions under which the theorems would hold. Euler did not dwell on the interpretation of infinite sums or infinitesimals.
Sometimes he was happy to regard differentials as actually equal to zero, and to derive the meaning of a ratio of differentials from the context of the problem: An infinitely small quantity is nothing but a vanishing quantity and therefore will be actually equal to $0$ . . . . Hence there are not so many mysteries hidden in this concept as there are usually believed to be. These supposed mysteries have rendered the calculus of the infinitely small quite suspect to many people.
This statement, from the Institutiones Calculi Differential is of 1755 , was followed by a discussion of proportions in which one of the ratios is $0/0$ , and a justification of the fact that differentials may be neglected in calculations with ordinary numbers. This accurately

$121$

describes a good deal of his practice--when he worked with differential equations, for example. Controversial matters did arise, however, and debates about definitions were not unusual. The bestknown example involves discussions connected with the so-called vibrating string problem, which involved Euler, d’Alembert, and Daniel Bernoulli. These were closely connected with the definition of functions [I.2](/part-01/language-and-grammar), and the question of which functions studied by analysis actually could be represented by series (in particular trigonometric series).
The idea that a curve of arbitrary shape could serve as an initial position for a vibrating string extended the idea of function, and the work of fourier [VI.25](/part-06/jean-baptiste-joseph-fourier-17681830) in the early nineteenth century made such functions analytically accessible. In this context, functions with broken graphs (a kind of discontinuous function) came under inspection.
Later, how to deal with such functions would be a decisive issue for the foundations of analysis, as the more “natural” objects associated with algebraic operations and trigonometry gave way to the more general modern concept of function. $2$ . $2$ Responses from the Late Eighteenth Century One significant response to Berkeley in Britain was that of Colin Maclaurin (1698-1746), whose 1742 textbook A Treatise of Fluxions attempted to clarify the foundations of the calculus and do away with the idea of infinitely small quantities.
Maclaurin, a leading figure of the Scottish Enlightenment of the mid eighteenth century, was the most distinguished British mathematician of his time and an ardent proponent of Newton’s methods. His work, unlike that of many of his British contemporaries, was read with interest on the Continent, especially his elaborations of Newtonian celestial mechanics. Maclaurin attempted to base his reasoning on the notion of the limits of what he termed “assignable” finite quantities. Maclaurin’s work is famously obscure, though it did provide examples of calculating the limits of ratios.
Perhaps his most important contribution to the clarification of the foundations of analysis was his influence on d’Alembert. D’Alembert had read both Berkeley and Maclaurin and followed them in rejecting infinitesimals as real quantities. While exploring the idea of a differential as a limit, he also attempted to reconcile his idea with the idea that infinitesimals may be consistently regarded as being actually zero, perhaps in a nod to Euler’s view. The main exposition of d’Alembert’s views may

122                                                                            II. The Origins of Modern Mathematics

be found in the Encyclopédie, in the articles on dif-          integer powers will be involved. Terms of the form im/n
ferentials (published in 1754) and on limits (1765).           do not make sense, says Lagrange, since the expression
                                                                                . qrt{D}’Alembert argued for the importance of geometric              of the function x + i is only two-valued, while im/n
rather than algebraic limits. His meaning seems to have        has n values. Hence the series
been that the quantities being investigated should not                         . qrt{x} + i = x + pi + qi2 + · · · + tik + · · ·
be treated merely formally, by substitution and sim-                                                  √
plification. Rather, a limit should be understood as the        obtains its two values from the term x, and all other
limit of a length (or collection of lengths), area, or other   powers must be integral. With fractional exponents set
dimensioned quantity, in much the way that a circle            aside, Lagrange argued that f (x +i) = f (x)+ia P (x, i),
may be seen as a limit of inscribed polygons. His aim          with P finite for i = 0. Successive application of this
seems primarily to have been to establish the reality          result gave him the expansion
of the objects described by existing algorithms, since                f (x + i) = f (x) + pi + qi2 + r i3 + · · · ,
the actual calculations he employs are carried out with
differentials.                                                  where i was a small increment. The number p depends
                                                               on x, so Lagrange defined a derived function f (x) =
2.2.1   Lagrange                                               p(x). The French term dérivée is the origin of the term
                                                               derivative, and in Lagrange’s language f is the “prim-
In the course of the eighteenth century, the differential       itive” of this derived function. Similar arguments can
and the integral calculus gradually distinguished them-        be made to relate the higher coefficients to the higher
selves as a set of methods distinct from their applica-        derivatives in the usual Taylor formula.
tions in mechanics and physics. At the same time, the
                                                                  This approach, which seems oddly circular to mod-
primary focus of the methods moved away from geom-
                                                               ern eyes, relied on the eighteenth-century distinction
etry, so that in work of the second half of the eighteenth
                                                               between the “algebraic” infinite process of the series
century we increasingly see calculus treated as “alge-
                                                               expansion on the one hand, and the use of differen-
braic analysis” of “analytic functions.” The term “ana-
                                                               tials on the other. Lagrange did not see the original
lytic” was used in a variety of senses. For many writers,
                                                               series expansion as based on the limit process. With
such as Euler, it merely referred to a function (that is, a
                                                               the renewed emphasis on limits and modern defini-
relationship between variable quantities) that is given
                                                               tions developed by Cauchy, this approach was soon to
by a single expression of the type used in analysis.
                                                               be regarded as untenable.
   Lagrange provided a foundation for the calculus that
was indebted to this algebraic viewpoint. Lagrange
                                                                 3   The First Half of the Nineteenth Century
concentrated on power-series expansions as the basic
entity of analysis, and through his work the term ana-         3.1   Cauchy
lytic function evolved toward its more recent mean-
ing connected with the existence of a convergent Tay-          Many writers contributed to discussions on rigor in
lor series representation. His approach reached a full         analysis in the first decades of the nineteenth century.
expression in his Théorie des Fonctions Analytiques of         It was Cauchy who was to revive the limit approach to
1797. This was a version of his lectures at the École          greatest effect. His aim was pedagogical, and his ideas
Polytechnique, a new institution for the elite training        were probably worked out in the context of preparing
of military engineers in revolutionary France. Lagrange        his introductory lectures for the École Polytechnique at
assumed that a function must necessarily be express-           the beginning of the 1820 s. Although the students were
ible as an infinite series of algebraic functions, bas-         the best in France in scholarly ability, many found the
ing this argument on the existence of expansions for           approach too difficult. As a result, while Cauchy him-
known functions. He first sought to show that “in gen-          self continued to use his methods, other instructors
eral” no negative or fractional powers would appear            held on to older approaches using infinitesimals, which
in the expansion, and from this he obtained a power-           they found more intuitively accessible for the students
series representation. His arguments here are surpris-         as well as better adapted to the solution of problems
ing, and somewhat ad hoc, and I use an example given           in elementary mechanics. Cauchy’s self-imposed exile
by Fraser (1987). The slightly strange notation is based       from Paris in the 1830 s further limited the impact of
on that of Lagrange. Suppose that one seeks an expan-          his approach, which was initially taken up only by a
                  √
sion of f (x) = x + i in powers of i. In general, only         few of his students.

$II$ . $5$ .

The Development of Rigor in Mathematical Analysis Nonetheless, Cauchy’s definitions of limit, of continuity, and of the derivative gradually came into general use in France, and were influential elsewhere as well, especially in Italy. Moreover, his methods of using these definitions in proofs, and particularly his use of mean value theorems in various forms, moved analysis from a collection of symbolic manipulations of quantities with special properties toward the science of argument about infinite processes using close estimation via the manipulation of inequalities.
In some respects, Cauchy’s greatest contribution lay in his clear definitions. For earlier writers, the sum of an infinite series was a somewhat vague notion, sometimes interpreted by a kind of convergence argument (as with the sum of a geometric series such as

$\infty$

 -  n) and sometimes as the value of the function

$n = {}^{0}2$

from which the series was derived (as Euler, for example, often regarded it). Cauchy revised the definition to state that the sum of an infinite series was the limit of the sequence of partial sums. This provided a unified approach for series of numbers and series of functions, an important step in the move to base calculus and analysis on ideas about real numbers.
This trend, eventually dominant, is often referred to as the “arithmetization of analysis.” Similarly, a continuous function is one for which “an infinitely small increase of the variable produces an infinitely small increase of the function itself” (Cauchy 1821 , $pp.34 - 35)$ . As we see from the example just given, Cauchy did not shy away from infinitely small quantities, nor did he analyze this notion further. The limit of a variable quantity is defined in a way that we would now regard as conversational, or heuristic:
When the values that are successively assigned to a given variable approach a fixed value indefinitely, in such a way that it ends up differing from it as little as one wishes, this latter value is called the limit of all the others. Thus, for example, an irrational number is the limit of the various fractions that provide values that are closer and closer to it. Cauchy (1821 , $p. 4)$ These ideas were not completely rigorous by modern standards, but he was able to use them to provide a unified foundation for the basic processes of analysis.
This use of infinitely small quantities appears, for example, in his definition of a continuous function. To paraphrase his definition, suppose that a function f (x) is single-valued on some finite interval of the real line, and choose any value $x^{0}$ inside the interval. If the value

$123$

of $x^{0}$ is increased to $x^{0} + a,$ the function also changes by the amount $f(x^{0} + a) - f(x^{0})$ . Cauchy says that the function f is continuous for this interval if, for each value of $x^{0}$ in that interval, the numerical value of the difference $f(x^{0} + a) - f(x^{0})$ decreases indefinitely to $0$ with a. In other words, Cauchy defines continuity as a property on an interval rather than at a point, in essence by saying that on that interval infinitely small changes in the argument produce infinitely small changes in the function value.
Cauchy appears to have considered continuity to be a property of a function on an interval. This definition emphasizes the importance of jumps in the value of the function for the understanding of its properties, something that Cauchy had encountered early in his career when discussing the fundamental theorem of calculus [I.3](/part-01/fundamental-definitions). In his 1814 memoir on definite integrals, Cauchy stated:
If the function φ (z) increases or decreases in a continuous manner between $z = b$ and $z = b$ , the b value of the integral [b φ (z) dz] will ordinarily be represented by φ (b) - φ (b). But if ... the function passes suddenly from one value to another sensibly different ... the ordinary value of the integral must be diminished. Oeuvres (volume $1$ , $pp.402 - 3)$ In his lectures, Cauchy assumed continuity when defining the definite integral.
He considered first of all a division of the interval of integration into a finite number of subintervals on which the function is either increasing or decreasing. (This is not possible for all functions, but this appeared not to concern Cauchy .) He then defined the definite integral as the limit of the sum $S = (x^{1} - x^{0})f(x^{0}) + (x^{2} - x^{1})f(x^{1}) +$ · · · + $(X - x^{n} - {}^{1})f(x^{n} - {}^{1})$ as the number n becomes very large. Cauchy gives a detailed argument for the existence of this limit, using his theorem of the mean and the fact of continuity.
Versions of the main subjects of Cauchy’s lectures were published in 1821$and$1823 . Every student at the École Polytechnique would have been aware of them subsequently, and many would have used them explicitly. They were joined in 1841 by a version of the course elaborated by Cauchy’s associate, the Abbé Moigno. They were referred to frequently in France and the definitions employed by Cauchy became standard there.
We also know that the lectures were studied by others, notably by abel [VI.33](/part-06/niels-henrik-abel-18021829) and dirichlet [VI.36] , who spent time in Paris in the $1820s$ , and by riemann [VI.49] .

124                                                                            II. The Origins of Modern Mathematics

   Cauchy’s movement away from the formal approach          3.2   Riemann, the Integral, and Counterexamples
of Lagrange rejected the “vagueness of algebra.” Al-
though he was clearly guided by intuition (both geo-        Riemann is indelibly associated with the foundations of
metric and otherwise), he was well aware that intu-         analysis because of the Riemann integral, which is part
ition could be misleading, and produced examples to         of every calculus course. Despite this, he was not always
show the value of adhering to precise definitions. One       driven by issues involving rigor. Indeed he remains a
famous example, the function that takes the value           standard example of the fruitfulness of nonrigorous
      2
e−1/x when x ≠ 0 and zero when x = 0, is differ-             intuitive invention. There are many points in Riemann’s
entiable infinitely many times, yet it does not yield        work at which issues about rigor arise naturally, and
a Taylor series that converges to the function at the       the wide interest in his innovations did much to direct
origin. Despite this example, which he mentioned in         the attention of researchers to making these insights
his lectures, Cauchy was not a specialist in counter-       precise.
examples, and in fact the trend toward producing              Riemann’s definition of the definite integral was pre-
counterexamples for the purpose of clarifying defini-        sented in his 1854 Habilitationsch rift —the “second the-
tions was a later development.                              sis,” which qualified him to lecture at a university for
  Abel famously drew attention to an error in Cauchy’s      fees. He generalized Cauchy’s notion to functions that
work: his statement that a convergent series of contin-     are not necessarily continuous. He did this as part of an
uous functions has a continuous sum. For this to be         investigation of fourier series [III.27](/part-03/the-fourier-transform) expansions. The
true, the series must be uniformly convergent, and in       extensive theory of such series was devised by Fourier
1826 Abel gave as a counterexample the series               in 1807 but not published until the 1820 s. A Fourier
                   . nfty
                                                           series represents a function in the form
                                  sin kx
                        (−1)k+1          ,                                         . nfty
                                     k                                             
                  k=1
                                                                  f (x) = a0 +         (an cos(nx) + bn sin(nx))
which is discontinuous at odd multiples of π . Cauchy                             n=1

was led to make this distinction only much later, after     on a finite interval.
the phenomenon had been identified by several writers.
                                                               The immediate inspiration for Riemann’s work was
Historians have written extensively about this apparent
                                                            dirichlet [VI.36], who had corrected and developed
error; one influential account, due to Bottazzini, pro-
                                                            earlier faulty work by Cauchy on the question of when
poses that for various reasons Cauchy would not have
                                                            and whether the Fourier series expansion of a function
found Abel’s example telling, even if he had known of
                                                            converges to the function from which it is derived. In
it at the time (this account appears in Bottazzini (1990,
                                                            1829 Dirichlet had succeeded in proving such conver-
p. LXXXV)).
                                                            gence for a function with period 2π that is integrable
  Before leaving the time of Cauchy, we should note
                                                            on an interval of that length, does not possess infinitely
the related independent activity of bolzano [VI.28](/part-06/bernard-bolzano-17811848).
                                                            many maxima and minima there, and at jump discon-
Bolzano, a Bohemian priest and professor whose ideas
                                                            tinuities takes on the average value between the two
were not widely disseminated at the time, investigated
                                                            limiting values on each side. As Riemann noted, follow-
the foundations of the calculus extensively. In 1817,
                                                            ing his professor Dirichlet, “this subject stands in the
for example, he gave what he termed a “purely ana-
                                                            closest connection to the principles of infinitesimal cal-
lytic proof of the theorem that between any two values
                                                            culus, and can therefore serve to bring these to greater
that possess opposite signs, at least one real root of
                                                            clarity and definiteness” (Riemann 1854, p. 238). Rie-
the equation exists”: the intermediate value theorem.
                                                            mann sought to extend Dirichlet’s investigations to fur-
Bolzano also studied infinite sets: what is now called
                                                            ther cases, and was thus led to investigate in detail
the Bolzano–Weierstrass theorem states that for every
                                                            each of the conditions given by Dirichlet. Accordingly,
bounded infinite set there is at least one point having
                                                            he generalized the definition of a definite integral as
the property that any disk about that point contains
                                                            follows:
infinitely many points of the set. Such “limit points”
were studied independently by weierstrass [VI.44](/part-06/karl-weierstrass-18151897).            We take between a and b an increasing sequence of
By the 1870 s, Bolzano’s work became more broadly              values x1 , x2 , . . . , xn−1 , and for brevity designate x1 −a
known.                                                        by δ1 , x2 − x1 by δ2 , . . . , b − xn−1 by δn and by  a

$II$ . $5$ .

The Development of Rigor in Mathematical Analysis positive proper fraction. Then the value of the sum

$S = δ^{1}f(a + {}^{1}δ^{1}) + δ^{2}f(x^{1} + {}^{2}δ^{2})+ δ^{3}f(x^{2} + {}^{3}δ^{3}) +$ · · · $+ δ^{n}f(x^{n} - {}^{1} + nδ^{n})$ depends on the choice of the intervals δ and the quantities  . If it has the property that it approaches infinitely closely a fixed limit A no matter how the δ and   are chosen, as δ becomes infinitely small, then we call this b value a f (x) dx. In connection with this definition of the integral, and in part to show its power, Riemann provided an example of a function that is discontinuous in any interval, yet can be integrated.
The integral thus has points of nondifferentiab ility on each interval. Riemann’s definition rendered problematic the inverse relationship between differentiation and integration, and his example brought this problem out clearly. The role of such “pathological” counterexamples in pushing the development of rigor, already apparent in Cauchy’s work, intensified greatly around this time. Riemann’s definition was published only in 1867 , following his death; an expository version due to Gaston Darboux appeared in French in 1873 .
The popularization and extension of Riemann’s approach went hand in hand with the increasing appreciation of the importance of rigor associated with the Weierstrass school, discussed below. Riemann’s approach focused attention on sets of points of discontinuities, and thus were seminal for cantor’s [VI.54](/part-06/georg-cantor-18451918) investigations into point sets in the $1870s$ and afterwards. The use of the Dirichlet principle serves as a further example of the way in which Riemann’s work drew attention to problems in the foundations of analysis.
In connection with his research into complex analysis, Riemann was led to investigate solutions to the so-called Dirichlet problem: given a function g, defined on the boundary of a closed region in the plane, does there exist a function f that satisfies the laplace partial differential equation [I.3](/part-01/fundamental-definitions) in the interior and takes the same values as g on the boundary? Riemann asserted that the answer was yes.
To demonstrate this, he reduced the question to proving the existence of a function that minimizes a certain integral over the region, and argued on physical grounds that such a minimizing function must always exist. Even before Riemann’s death his assertion was questioned by weierstrass [VI.44](/part-06/karl-weierstrass-18151897), who published a counterexample in 1870 .
This led to attempts to reformulate Riemann’s results and prove them by other $125$ means, and ultimately to a rehabilitation of the Dirichlet principle through the provision of precise and broad hypotheses for its validity, which were expressed by hilbert [VI.63](/part-06/david-hilbert-18621943) in 1900 .

$4$

Weierstrass and His School

Weierstrass had a passion for mathematics as a student at Bonn and Münster, but his student career was very uneven. He spent the years from 1840$to$1856$as$ a high school teacher, under taking research independently but at first publishing obscurely. Papers from 1854 onward in Journal für die reine und angewandte Mathematik (otherwise known as Crelle’s Journal) attracted wide attention to his talent, and he obtained a professorship in Berlin in 1856 .
Weierstrass began to lecture regularly on mathematical analysis, and his approach to the subject developed into a series of four courses of lectures given cyclically between the early $1860s$ and 1890 . The lectures evolved over time and were attended by a large number of important mathematical researchers. They also indirectly influenced many others through the circulation of unpublished notes. This circle included R. Lipschitz, P. du Bois-Reymond, H. A. Schwarz, O. Hölder, Cantor, L. Koenigsberger, G. Mittag-Leffler, kovalevskaya [VI.59](/part-06/sofya-sonya-kovalevskaya-18501891), and L.
Fuchs, to name only some of the most important. Through their use of Weierstrass i an approaches in their own research, and their espousal of his ideas in their own lectures, these approaches became widely used well before the eventual publication of a version of his lectures late in his life. The account that follows is based largely on the 1878 version of the lectures. His approach was also influential outside Germany: parts of it were absorbed in France in the lectures of hermite [VI.47](/part-06/charles-hermite-18221901) and jordan [VI.52](/part-06/camille-jordan-18381922), for example.
Weierstrass’s approach builds on that of Cauchy (though the detailed relationship between the two bodies of work has never been fully examined) . The two overarching themes of Weierstrass’s approach are, on the one hand, the banning of the idea of motion, or changing values of a variable, from limit processes, and, on the other, the representation of functions, notably of a complex variable. The two are intimately linked.
Essential to the motion-free definition of a limit is Weierstrass’s nascent investigation of what we would now call the topology of the real line or complex plane, with the idea of a limit point, and a clear distinction between local and global behavior. The central objects of study for Weierstrass are functions (of one

126                                                                          II. The Origins of Modern Mathematics

or more real or complex variable quantities), but it        a routine way by those inculcated in the Weierstrass
should be borne in mind that set theory is not involved,    approach.
so that functions are not to be thought of as sets of          The fact that general functions were built from ra-
ordered pairs.                                              tional functions using series expansions gave the lat-
   The lectures begin with a now-familiar subject: the      ter a key role in Weierstrass’s work, and as early as
development of rational, negative, and real numbers         1841 he had identified the importance of uniform con-
from the integers. For example, negative numbers are        vergence. The distinction between uniform and point-
defined operationally by making the integers closed          wise convergence was made very clearly in his lec-
under the operation of subtraction. He attempted a uni-     tures. A series converges, as it does for Cauchy, if
fied approach to the definition of rational and irrational    its sequence of partial sums converges, though now
numbers which involved unit fractions and decimal           the convergence is phrased in the following terms: the
                                                                    
expansions and now seems somewhat murky. Weier-             series fn (x) converges to s0 at x = x0 if, given an
strass’s definition of the real numbers appears unsatis-     arbitrary positive , there is an integer N such that
factory to modern eyes, but the general path of arithme-    |s0 − (f1 (x0 ) + f2 (x0 ) + · · · + fn (x0 ))| <  for every
tization of analysis was established by this approach. In   n > N. The convergence is uniform on a domain of the
parallel to the development of number systems, he also      variable if the same N will work for that  value for all
developed different classes of functions, building them      x in the domain. Uniform convergence guarantees con-
up from rational functions by using power-series rep-       tinuity of the sum, since these are series of rational,
resentations. Thus, in Weierstrass’s approach, a poly-      hence continuous, functions. From this point of view,
nomial (called an integer rational function) is general-    then, uniform convergence is important well beyond
ized to a “function of integer character,” which means      the context of trigonometric series (important though
a function with a convergent power-series expansion         those may be). Indeed, it is a central tool of the entire
every where. The Weierstrass factorization theorem as-       theory of functions.
serts that any such function may be written as a (pos-         Weierstrass’s role as a critic of rigor in the work of
sibly infinite) product of certain “prime” functions and     others, notably Riemann, has already been noted. More
exponential functions with polynomial exponents of a        than any other leading figure, he generated counter-
certain type.                                               examples to illustrate difficulties with received notions
   The limit definition given by Weierstrass has thor-       and to distinguish between different kinds of analyti-
oughly modern features:                                     cal behavior. One of his best-known examples was of
                                                            an every where-continuous but nowhere-differentiable
  That a variable quantity x becomes infinitely small                                     
                                                            function, namely f (x) = bn cos(an x), which is uni-
  simultaneously with another quantity y means: “After
                                                            formly convergent for b < 1 but fails to be differ-
  the assumption of an arbitrarily small quantity  a
  bound δ for x may be found, such that for every value
                                                            entiable at any x if ab > 1 + 32 π . Similarly he con-
  of x for which |x| < δ, the corresponding value of |y|    structed functions for which the Dirichlet principle
  will be less than .”                                     fails, examples of sets constituting “natural bound-
                               Weierstrass (1988, p. 57)    aries,” that is, obstacles to continuing series expan-
                                                            sions into larger domains, and so forth. The careful
Weierstrass immediately used this definition to give         distinctions he encouraged, and the very procedure
a proof of continuity for rational functions of sev-        of seeking pathological rather than typical examples,
eral variables, using an argument that could appear         threw the spotlight on the precision of hypotheses in
in a textbook today. The former notions of variables        analysis to an unprecedented degree. From the 1880 s,
tending to given values were replaced by quantified          with the maturity of this program, analysis no longer
statements about linked inequalities. The framing of        dealt with generic cases and looked instead for abso-
hypotheses in terms of inequalities became a guiding        lutely precise statements in a way that has for the most
motif in the work of Weierstrass’s school: here we men-     part endured to the present. This was also to become
tion in passing the Lipschitz and Hölder conditions in      a pattern and an imperative in other areas of mathe-
the existence theory for differential equations. The clar-   matics, though sometimes the passage from reasoning
ity that this language gave to problems involving the       from generic examples to fully expressed hypotheses
interchange of limits, for example, meant that previ-       and definitions took decades. (Algebraic geometry pro-
ously intractable problems could now be handled in          vides a famous example, one in which reasoning with

II.5.   The Development of Rigor in Mathematical Analysis                                                          127

generic cases lasted until the 1920 s.) In this sense the     new number, which is necessarily irrational. The set of
form of rigorous argument and exposition espoused by         all such cuts may be shown to correspond to the points
Weierstrass and his school was to become a pattern for       of the number line, so that nothing is left out. A critical
mathematics generally.                                       reader might feel that this is begging the question, since
                                                             the idea of the number line constituting a continuum
4.1     The Aftermath of Weierstrass and Riemann             in some way might seem to be a hidden premise.
Analysis became the model subdiscipline for rigor for           Dedekind’s construction stimulated a good deal of
a variety of reasons. Of course, analysis was important      discussion, especially in Germany, about the best way
for the sheer volume and range of application of its         to found the real numbers. Participants included Can-
results. Not everyone agreed with the precise way in         tor, E. Heine, and the logician frege [VI.56](/part-06/gottlob-frege-18481925). Heine
which Weierstrass approached foundational questions          and Cantor, for example, considered real numbers as
(through series, rational functions, and so on). Indeed,     equivalence classes of Cauchy sequences of rationals,
Riemann’s more geometric approach had also attracted         together with a machinery that permitted them to
followers, if not exactly a school, and the insights         define the basic arithmetical operations. A very simi-
his approach afforded were enthusiastic ally embraced.         lar approach was proposed by the French mathemati-
However, any subsequent discussion had to take place         cian Charles Méray. Frege, by contrast, in his 1884 Die
at a level of rigor comparable to that which Weierstrass     Grundlagen der Arithmetik, sought to found the inte-
had attained. While approaches to the foundations of         gerson logic. While his attempts to construct the reals
analysis were to vary, the idea that limits should be rig-   along these lines did not bear fruit, he had an impor-
orously handled in much the way that Weierstrass did         tant role in his insistence that the various construc-
was not to alter. Among the remaining central issues         tions should not merely be mathematically functional
for rigor was the definition of the number systems.           but should also be demonstrably free from internal
   For the real numbers, probably the most success-          contradiction.
ful definition (in terms of its later use) was provided          Despite much activity on the foundations of the
by dedekind [VI.50](/part-06/julius-wilhelm-richard-dedekind-18311916). Dedekind, like Weierstrass, took        real numbers, infinite sets, and other basic notions for
the integers as fundamental, and extended them to the        analysis, consensus remained elusive. For example, the
rationals, noting that the algebraic properties satisfied     influential Berlin mathematician leopold kronecker
by the latter are those satisfied by what we now call a       [VI.48](/part-06/leopold-kronecker-18231891) denied the existence of the reals, and held that
field [I.3 §2.2](/part-01/fundamental-definitions). (This idea is also Dedekind’s.) He then     all true mathematics was to be based on finite sets. Like
showed that the rational numbers satisfy a trichotomy        Weierstrass, with whom he worked and whom he influ-
law. That is, each rational number x divides the entire      enced, he emphasized the strong analogies between the
collection into three parts: x itself, rational numbers      integers and the polynomials, and sought to use this
greater than x, and rational numbers less than x. He         algebraic foundation to build all of mathematics. Hence
also showed that the rationals greater and less than a       for Kronecker the entire main path of research in analy-
given number extend to infinity, and that any rational        sis was anathema, and he opposed it ardently. These
corresponds to a distinct point on the number line.          views were influential, both directly and indirectly, on
However, he also observed that along that line there         a number of later writers, including brouwer [VI.75](/part-06/luitzen-egbertus-jan-brouwer-18811966),
are infinitely many points that do not correspond to          the intuitionist school around him, and the algebraist
any rational. Using the idea that to every point on the      and number theorist Kurt Hensel.
line there should correspond a number, he constructed           All efforts to found analysis were based in one way
the remainder of the continuum (that is, the real line)      or another on an underlying notion (not always made
by the use of cuts. These are ordered pairs (A1 , A2 ) of    explicit) of quantity. The foundational framework of
nonempty sets of rational numbers such that every ele-       analysis, however, was to shift over the period from
ment of the first set is less than every element of the       1880 to 1910 toward the theory of sets. This had its
second, and such that taken together they contain all        origin in the work of Cantor, a student of Weierstrass
the rationals. Such cuts may obviously be produced by        who began studying discontinuities of Fourier series in
an element x, in which case x is either the greatest ele-    the early 1870 s. Cantor became concerned about how
ment of A1 or the least element of A2 . But sometimes        to distinguish between different types of infinite sets.
A1 does not have a greatest element, or A2 a least ele-      His proofs that the rational numbers and the algebraic
ment, and in that case we can use the cut to define a         numbers are countable [III.11](/part-03/countable-and-uncountable-sets) while the reals are not

128                                                                            II. The Origins of Modern Mathematics

led him to a hierarchy of infinite sets of different car-       by avoiding the definition of set. By 1910, weyl [VI.80](/part-06/hermann-weyl-18851955)
dinality. The importance of this discovery for analysis       was to refer to mathematics as the science of “∈,” or
was at first not widely recognized, though in the 1880 s        set membership, rather than the science of quantity.
Mittag-Leffler and Hurwitz both made significant appli-          Nonetheless, Zermelo’s axioms as a foundational strat-
cations of notions about derived sets (the set of limit       egy were contested. For one thing, a consistency proof
points of a given set) and dense or nowhere-dense sets.       for the axioms was lacking. Such “meaning-free” axiom-
   Cantor gradually came to the view that set theory          atization was also contested on the grounds that it
could function as a foundational tool for all of math-        removed intuition from the picture.
ematics. As early as 1882 he wrote that the science              Against the complex and rapidly developing back-
of sets encompassed arithmetic, function theory, and          ground of mathematics in the early twentieth century,
geometry, combining them into a “higher unity” based          these debates took on many dimensions that have
on the idea of cardinality. However, this proposal was        implications well beyond the question of what consti-
vaguely articulated and at first attracted no adher-           tutes rigorous argument in analysis. For the practicing
ents. Nonetheless, sets began to find their way into           analyst, however, as well as for the teacher of basic
the language of analysis, most notably through ideas          infinitesimal calculus, these discussions are marginal
of measure [III.55](/part-03/measures) and measurability of a set. Indeed,       to everyday mathematical life and education, and are
one important route to the absorption of analysis by          treated as such. Set theory is pervasive in the language
set theory was the path that sought to determine              used to describe the basic objects. Real-valued func-
what kind of function could “measure” a set in an             tions of one real variable are defined as sets of ordered
abstract sense. The work of lebesgue [VI.72](/part-06/henri-lebesgue-18751941) and borel        pairs of real numbers, for example; a set-theoretic defi-
[VI.70](/part-06/emile-borel-18711956) around 1900 on integration and measurability          nition of an ordered pair was given by wiener [VI.85](/part-06/norbert-wiener-18941964) in
tied set theory to the calculus in a very concrete and        1914, and the set-theoretic definition of functions may
intimate way.                                                 be dated from that time. However, research in analysis
   A further key step in the establishment of the foun-       has been largely distinct from, and generally avoids, the
dations of analysis in the early twentieth century was        foundational issues that may remain in connection with
a new emphasis on mathematical theories as axiomatic          this vocabulary. This is not at all to say that contempo-
structures. This received enormous impetus from the           rary mathematicians treat analysis in a purely formal
work of Hilbert, who, beginning in the 1890 s, had             way. The intuitive content associated with numbers and
sought to provide a renewed axiomatization of geom-           functions is very much a part of the way of thinking of
etry. peano [VI.62](/part-06/giuseppe-peano-18581932) in Italy headed a school with simi-       most mathematicians. The axioms for the reals and for
lar aims. Hilbert redefined the reals on these axiomatic       set theory form a framework to be referred to when
grounds, and his many students and associates turned          necessary. But the essential objects of basic analysis,
to axiomatics with enthusiasm for the clarity the ap-         namely derivatives, integrals, series, and their existence
proach could provide. Rather than proving the exis-           or convergence behaviors, are dealt with along the lines
tence of specific entities such as the reals, the math-        of the early twentieth century, so that the ontologi-
ematician posits a system satisfying the fundamental          cal debates about the infinitesimal and infinite are no
properties they possess. A real number (or whatever           longer very lively.
object) is then defined by the set of axioms provided.            A coda to this story is provided by the researches of
As Epple has pointed out, such definitions were con-           robinson [VI.95](/part-06/abraham-robinson-19181974) (1918–74) into “nonstandard” analy-
sidered to be ontologically neutral in that they did not      sis, published in 1961. Robinson was an expert in model
provide methods for telling real numbers from other           theory: the study of the relationship between systems
objects, or even state whether they existed at all (Epple     of logical axioms and the structures that may satisfy
2003, p. 316). Hilbert’s student Ernst Zermelo began          them. His differentials were obtained by adjoining to
work on axiomatizing set theory along these lines, pub-       the regular real numbers a set of “differentials,” which
lishing his axioms in 1908 (see [IV.22 §3](/part-04/set-theory)). Problems         satisfied the axioms of an ordered field (in which there
with set theory had emerged in the form of paradoxes,         is ordinary arithmetic like that of the real numbers)
the most famous due to russell [VI.71](/part-06/bertrand-arthur-william-russell-18721970): if S is the set       but in addition had elements that were smaller than
of all sets that do not contain themselves, then it is        1/n for every positive integer n. In the eyes of some,
not possible for S to be in S, nor can it not be in S. Zer-   this creation eliminated many of the unpleasant fea-
melo’s axiomatics sought to avoid this difficulty, in part      tures of the usual way of dealing with the reals, and