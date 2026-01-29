# Local and Global in Number Theory

III . $51$ .

Local and Global in Number Theory

H, and that it takes each vector to the nearest point in Y , so that the vector x  -  T x is orthogonal to the whole of the subspace Y . III . $51$ Local and Global in

Number Theory

Fernando Q. Gouvêa

Analogy is a powerful tool. When one can see parallels between two different theories, this often allows one to transport insights from one to the other. The idea of studying something “locally” comes from the theory of functions. Imported into number theory by way of an analogy between functions and numbers, it leads us to a whole new kind of number, the p-adic numbers, and to the local-global principle, which has become one of the guiding ideas of modern number theory.

$1$

Studying Functions Locally

Suppose that we have a polynomial such as $f(x) = - 18 + 21x - 26x^{2} + 22x^{3} - 8x^{4} + x^{5}$ . From the very way the polynomial is written down, we can see certain things about it. For example, we can see at once that if we plug in $x = 0$ , we get $f(0) =- 18$ . Other things are less apparent. For example, to determine the values of f ( $2$ ) or f ( $3$ ), we would have to do some arithmetic. But if we were to rewrite the polynomial as

f(x) = 5(x - 2) - 6(x - 2)2 - 2(x - 2)3+ 2(x - 2)4 + (x - 2)5 , we could see at once that $f(2) = 0$ . (Of course, one needs to check that those two expressions really are equal !) Similarly, we can check that

f(x) = 10(x - 3)2 + 16(x - 3)3 + 7(x - 3)4 + (x - 3)5 and see at once that f ( $3$ ) is also zero, and in fact that the polynomial has a double root at $x = 3$ . One way to think about this is to describe the first expression as “local at $x = 0$ , ” because it privileges the value $0$ over all others. Then the other two expressions are local at $2$ and local at $3$ , respectively. On the other hand, a formula like

f(x) = (x - 2)(x - 3)2(x2 + 1)

(which is also correct) is clearly more “global.” It tells √ us where all the roots are: at $2$ , $3$ , and ± $- 1$ , with the $3$ being $a$ double root.

$241$

The same ideas extend to functions that are not polynomials, as long as we allow the expressions to be infinite. So, for example, let us take

$x^{2} - 5x + 2g(x) =$ / $x^{3} - 2x^{2} + 2x - 4$

Locally at $0$ , we can write this as

$11337g(x) = - {}^{2} + x + {}^{2}x^{2} - {}^{8}x^{3} - {}^{16}x^{4} + {}^{32}x^{5} +$ · · · . Or we can write it locally at $2$ :

g(x) = - {}3(x - 2) - 1 + {}18 + {}54(x - 2)2553555- {}324(x - 2)2 + {}972(x - 2)311565- {}5832(x - 2)4 + {}17496(x - 2)5 + · · · . Notice that this time we had to use a negative power of $(x - 2)$ , because plugging in $x = 2$ makes the denominator zero. Nevertheless, the expansion tells us that the “badness” at $2$ is not too bad. Specifically, we can see that while $g(2)$ is undefined, $(x - 2)g(2)$ makes sense

$2$

and is equal to $- {}^{3}$ .

It is easy to keep going. To handle general functions locally at a, we may sometimes need to use fractional powers of (x  -  a), but it does not get much worse than that. Such expansions are a very powerful tool in the theory of functions. One of the motivations for the discovery of the p-adic numbers was to find a similarly powerful tool for the study of numbers.

$2$

Numbers Are Like Functions

It was dedekind [VI.50](/part-06/julius-wilhelm-richard-dedekind-18311916) and Heinrich Weber who first realized that an analogy could be drawn between numbers and functions. In their scheme, positive whole numbers were compared to polynomials, while fractions were analogous to quotients of polynomials such as the function g (x) above. More complicated functions were like more complicated kinds of number. elliptic functions [V.31](/part-05/the-riemannroch-theorem), for example, were similar to certain kinds of algebraic number.
On the other hand, functions like sin (x) were more like transcendental numbers [III.41](/part-03/irrational-and-transcendental-numbers) such as $e$ or $\pi$ . Dedekind and Weber pushed the idea that “functions are like numbers” in order to understand functions better. In particular, they showed that the techniques developed to study algebraic numbers could be used to study a whole class of functions, which came to be known as algebraic functions. It was Kurt Hensel, however, who saw that if functions are like numbers, then numbers must be like functions.
In particular, he set out to find an analogue, for numbers, of the

$242$

local expansions that were so useful in the theory of functions. To get to Hensel’s idea, let us start by noticing that the way we usually represent numbers already points in the right direction. After all, an expression like 34291 really means $34291 = 1 + 9$ · $10 + 2$ · $10^{2} + 4$ · $10^{3} + 3$ · $10^{4}$ . If we allow ourselves to think of $10$ as being something like the variable x, this looks exactly like a polynomial. What is more, just as we can expand a polynomial in terms of different expressions (x  -  a), we can write numbers in other bases.
For example, $34291 = 4 + 4$ · $11 + 8$ · $11^{2} + 3$ · $11^{3} + 2$ · $11^{4}$ . It is easy to see how to find this expansion. First, divide 34291$by$11 , and look at the remainder. It is $4$ . That is our first term. Next, subtract $4$ from the original number to get something divisible by $11$ : $34291 - 4 = 34287 = 3117$ · $11$ . Now divide 3117$by$11 to find the next remainder, which will give the second term. Keep repeating this process, and you will find the base - $11$ expansion. That sounds very promising, but there is one little insight missing.
The fact is that $10$ is not really like $(x - 2)$ , because $10$ can be factored, while $(x - 2)$ cannot. So expanding a number in base $10$ is a little like trying to express a polynomial in powers of $(x^{2} - 3x + 2)$ , which factors as $(x - 1)(x - 2)$ . Such an expansion is not really local, since it is looking at two possible values of x at once. Similarly, the base - $10$ expansion mixes information about $2$ and information about $5$ . The upshot is that we should always use a prime number as our base. Just to fix ideas, let us choose $p = 11$ .
We already know that we can write positive numbers in base $11$ , i.e., as “polynomials in powers of $11$ . ” What happens if

$1$

we try it with a fraction? Let us tak$e^{2}$ . The first step is to find the remainder, that is, to find a number $r_{1}$

(between $0$ and 10) such that ${}^{2} - r$ is divisible by $11$ .

1111

Well, $2 - 6 = - 2 = - 2$ · $11$ . So the first term is $6$ . (To see what is meant by divisibility here, consider what would have happened if we had taken $r = 4$ . Then $\frac{1}{2} - r$ would have been $- \frac{7}{2}$ , and if we divide that by $11$ we get

$7 - {}^{22}$

, which has a factor of $11$ in the denominator. It is this that is not allowed and that does not happen when $r = 6$ .)

$1$

Now we repeat with the quotient, which was $- 2$ . We

1111

see that $- {}^{2} - 5 = - {}^{2} = - {}^{2}$ · $11$ . So the second term will be $5$ · $11$ . But now we find ourselves having to do

$1 - {}^{2}$ again! So we will do this again and again, and all

III. Mathematical Concepts

of the remaining terms will have coefficient $5$ . In other words,

$12345{}^{2} = {}^{6} + {}^{5}$ · ${}^{11} + {}^{5}$ · ${}^{11} + {}^{5}$ · ${}^{11} + {}^{5}$ · ${}^{11} + {}^{5}$ · ${}^{11} +$ · · · . It is not clear quite what the equals sign means here, but in any case we have obtained an infinite expansion

$1$

in powers of $11$ . It is called the $11$ - adic expansion o$f^{2}$ . Further more, the expansion “works” when we do arithmetic with it. For example, if we multiply it by $2$ and do all the rearranging $(2 \times 6 = 12 = 1 + 11$ , so carry $a 1$ , etc .) we do end up with $1$ . Hensel showed that one can do this with all algebraic numbers as long as one allows infinite expansions, a finite number of negative powers of $11$ (so that one

$5$

can handle $33$

and similar things), and, in certain cases, fractional powers of $11$ . He argued that we should view such expansions as giving information “locally at $11$ . ” The same happens with all of the prime numbers. So if we have a prime number p we can consider our numbers “locally at p” by taking their expansions in powers of p. These we call their p-adic expansions. Just as in the case of functions, such expansions immediately tell us how divisible by p a number is, while hiding all the information about other primes; in that sense, they are truly “local.”

$3$

p-adic Numbers

The best answers always raise new questions. Having discovered that any rational number has a p-adic expansion, and that one can “do arithmetic” directly with the expansions, it is inevitable to ask whether we have therefore enlarged the world of numbers under consideration. Once we have chosen the prime p, any rational number gives us a p-adic expansion. But does every such expansion come from a rational number? Not a chance. It is easy to see that the set of all expansions is much bigger than the set of all rational numbers.
Hensel’s next move, then, was to point out that the set Q p of all possible p-adic expansions is a new realm of numbers, which he called the p-adic numbers. It includes not only all the rational numbers, but also a lot more. The best way to think of Q p is by analogy with the set R of all real numbers. Real numbers are usually given by their decimal expansions. When we write $e = 2$ . $718$ . . . , what we mean is that $e = 2 + 7$ · $10 - 1 + 1$ · $10 - 2 + 8$ · $10 - 3 +$ · · · . The set of all such expansions is the set of all real numbers.
It contains all the rational numbers, but is much bigger.

III.51.   Local and Global in Number Theory                                                                         243

  Of course, except for the fact that both contain the      y, so x = y 2 . Since all rational numbers are also p-adic,
rationals, these two realms are almost completely dif-      it is true that for every prime number p the number x,
ferent. For example, in both Qp and R there is a nat-       thought of as a p-adic number, is a square. And simi-
ural notion of “distance between two numbers.” But          larly, the real number x is a square. In other words, the
these distances are completely different, even when the      rational number y is a kind of “global” square root, in
numbers in question are rational. So, in the reals, 2 is    that it serves as a square root in each local setting.
very close to 2001/1000. In the 5-adics, however, the          So far, so boring. But now reverse the thing. Suppose
distance between these two numbers is quite large!          that we know that for every prime number p the num-
  It turns out that we can do calculus with p-adic num-     ber x, thought of as a p-adic number, is the square of
bers, just as we do it with reals. Many other math-         some p-adic number (which may depend on p), and also
ematical ideas also extend. So Hensel’s ideas led to        that x, thought of as a real number, is the square of
a system of “parallel (numerical) universes”—one for        some real number. A priori, these local square roots of
each prime, plus the real numbers—in which we can do        x could all be different! But it turns out that under these
mathematics.                                                assumptions x must be the square of some rational
                                                            number, so that in fact all the local roots must come
            4   The Local–Global Principle                  from a “global” root.
                                                               This leads us to think of the rational numbers as
At first, most mathematicians seem to have found
                                                            “global” and of the various Qp and of R as “local.”
Hensel’s new numbers interesting in a formal way, but
                                                            Then the previous paragraph claims that the property
also to have wondered what the point of them was.
                                                            of “being a square” is true globally if and only if it is
One does not adopt a new number system just for fun;
                                                            true “every where locally.” This turns out to be a pow-
it needs to be useful for something. Hensel was fas-
                                                            erful and illuminating idea, and it has become known
cinated by his numbers and kept writing about them,
                                                            as the Hasse principle or the local–global principle.
but to begin with he had trouble demonstrating their
                                                               Our example, of course, demonstrates the principle
usefulness. He showed, for example, that they could be
                                                            in its strongest case: solve a problem locally in all cases,
used to develop the basics of algebraic number theory
                                                            and you have solved it globally. That is often too much
in a new way—but most folks seemed happy with the
                                                            to hope for. Nevertheless, attacking a problem locally
old way.
                                                            and then putting the local pieces together has become
   One can demonstrate the power of a new idea by
                                                            a fundamental technique in modern number theory. It
giving a beautiful and easy proof of a difficult result.
                                                            has been used to simplify older proofs, as in class
Hensel wrote a paper purporting to do just that: he
                                                            field theory [V.28](/part-05/from-quadratic-reciprocity-to-vi38-augustus-de-morgan-18061871), and also to obtain new results,
gave an easy and elegant p-adic proof that the num-
                                                            as in Wiles’s proof of fermat’s last theorem [V.10](/part-05/fermats-last-theorem).
ber e is transcendental. This did get people’s attention.
                                                            So Hensel was right after all: his new numbers have
Unfortunately, when they looked hard at the proof they
                                                            earned their place along with the real numbers in every
realized that it contained a subtle error. As a result,
                                                            number theorist’s heart.
mathematicians’ attitude of suspicion about Hensel’s
strange new numbers was reinforced.
                                                            Further Reading
   The tide was turned by Helmut Hasse. He had been
studying in Göttingen. At one point, he walked into a       Gouvêa, F. Q. 2003. p-adic Numbers: An Introduction, re-
used bookstore and found a copy of Hensel (1913), a           vised 3 rd printing of the 2 nd edn. New York: Springer.
book written a few years earlier. Hasse was fascinated,     Hasse, H. 1962. Kurt Hensels entscheidener Anstoss zur
and moved to Marburg to study with Hensel. A cou-             Entdeckung des Lokal–Global-Prinzips. Journal für die
ple of years later, in 1920, he found the idea that was       reine und angewandte Mathematik 209:3–4.
                                                            Hensel, K. 1913. Zahlentheorie. Leipzig: G. J. Göschenische.
to make the p-adic numbers a crucial tool for number
                                                            Roquette, P. 2002. History of valuation theory. I. In Valua-
theorists.
                                                              tion Theory and Its Applications, volume I, pp. 291–355.
   What Hasse showed was that it was possible to
                                                              Providence, RI: American Mathematical Society.
answer some questions in number theory by answer-           Ullrich, P. 1995. On the origins of p-adic analysis. Proceed-
ing them “locally.” Here is a (not very important, but        ings of the 2 nd Gauss Symposium. Conference A: Mathe-
fairly easy to follow) example. Suppose x is a rational       matics and Theoretical Physics, Munich, 1993, pp. 459–73.
number that is a square of some other rational number         Symposia Gaussiana. Berlin: Walter de Gruyter.