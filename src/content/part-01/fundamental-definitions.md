# Some Fundamental Mathematical Definitions

$16$

the first way. Sometimes, actual elimination is not possible, but one feels it could be done in principle. For instance, the sentence “For every real number x, x is either positive, negative, or zero” is a bit like putting together infinitely many sentences such as “t is either positive, negative, or zero,” one for each real number t, none of which involves a variable.

$4$

Levels of Formality

It is a surprising fact that a small number of set-theoretic concepts and logical terms can be used to provide a precise language that is versatile enough to express all the statements of ordinary mathematics. There are some technicalities to sort out, but even these can often be avoided if one allows not just sets but also numbers as basic objects. However, if you look at a wellwritten mathematics paper, then much of it will be written not in symbolic language peppered with symbols such as ∀ and ∃, but in what appears to be ordinary English. (Some papers are written in other languages, particularly French, but English has established itself as the international language of mathematics .) How can mathematicians be confident that this ordinary English does not lead to confusion, ambiguity, and even incorrectness? The answer is that the language typically used is a careful compromise between fully colloquial English, which would indeed run the risk of being unacceptably imprecise, and fully formal symbolism, which would be a nightmare to read. The ideal is to write in as friendly and approachable a way as possible, while making sure that the reader (who , one assumes, has plenty of experience and training in how to read mathematics) can see easily how what one writes could be made more formal if it became important to do so. And sometimes it does become important: when an argument is difficult to grasp it may be that the only way to convince oneself that it is correct is to rewrite it more formally. Consider, for example, the following reformulation of the principle of mathematical induction, which underlies many proofs: ( $15$ ) Every nonempty set of positive integers has a least element. If we wish to translate this into a more formal language we need to strip it of words and phrases such as “nonempty” and “has.” But this is easily done. To say that a set A of positive integers is nonempty is simply

I. Introduction

to say that there is a positive integer that belongs to A. This can be stated symbolically:

$n\inA.({}^{16})$ ∃n $\inN$

What does it mean to say that A has a least element? It means that there exists an element x of A such that every element y of A is either greater than x or equal to x itself. This formulation is again ready to be translated into symbols:

(17) ∃x $\inA$

∀y $\in^{A}(y > x)$ ∨ $(y = x)$ .

Statement (15) says that (16) implies (17) for every set A of positive integers. Thus, it can be written symbolically as follows: $({}^{18})$ ∀A ⊂ N [(∃ n ∈ N n ∈ A) ⇒ (∃ {}x\in A ∀y \in A (y > x) ∨ (y = x))] . Here we have two very different modes of presentation of the same mathematical fact. Obviously ( $15$ ) is much easier to understand than ( $18$ ). But if, for example, one is concerned with the foundations of mathematics, or wishes to write a computer program that checks the correctness of proofs, then it is better to work with a greatly pared-down grammar and vocabulary, and then ( $18$ ) has the advantage. In practice, there are many different levels of formality, and mathematicians are adept at switching between them. It is this that makes it possible to feel completely confident in the correctness of a mathematical argument even when it is not presented in the manner of ( $18$ ) -- though it is also this that allows mistakes to slip through the net from time to time.

$I$ . $3$

Some Fundamental Mathematical

Definitions

The concepts discussed in this article occur through out so much of modern mathematics that it would be inappropriate to discuss them in part III--they are too basic. Many later articles will assume at least some acquaintance with these concepts, so if you have not met them, then reading this article will help you to understand significantly more of the book.

$1$

The Main Number Systems

Almost always, the first mathematical concept that a child is exposed to is the idea of numbers, and numbers retain a central place in mathematics at all levels.

I.3.   Some Fundamental Mathematical Definitions                                                                   17

However, it is not as easy as one might think to say       1.2   The Integers
what the word “number” means: the more mathemat-
                                                           The natural numbers are not the only whole numbers,
ics one learns, the more uses of this word one comes
                                                           since they do not include zero or negative numbers,
to know, and the more sophisticated one’s concept of
                                                           both of which are indispensable to mathematics. One
number becomes. This individual development paral-
                                                           of the first reasons for introducing zero was that it
lels a historical development that took many centuries
                                                           is needed for the normal decimal notation of positive
(see from numbers to number systems [II.1](/part-02/from-numbers-to-number-systems)).
                                                           integers—how else could one conveniently write 1005?
   The modern view of numbers is that they are best        However, it is now thought of as much more than just
regarded not individually but as parts of larger wholes,   a convenience, and the property that makes it signif-
called number systems; the distinguishing features of      icant is that it is an additive identity, which means
number systems are the arithmetical operations—such        that adding zero to any number leaves that number
as addition, multiplication, subtraction, division, and    unchanged. And while it is not particularly interest-
extraction of roots—that can be performed on them.         ing to do to a number something that has no effect,
This view of numbers is very fruitful and provides a       the property itself is interesting and distinguishes zero
springboard into abstract algebra. The rest of this sec-   from all other numbers. An immediate illustration of
tion gives a brief description of the five main number      this is that it allows us to think about negative numbers:
systems.                                                   if n is a positive integer, then the defining property of
                                                           −n is that when you add it to n you get zero.
1.1    The Natural Numbers                                    Somebody with little mathematical experience may
                                                           unthinkingly assume that numbers are for counting
The natural numbers, otherwise known as the positive       and find negative numbers objectionable because the
integers, are the numbers familiar even to young chil-     answer to a question beginning “How many” is never
dren: 1, 2, 3, 4, and so on. It is the natural numbers     negative. However, simple counting is not the only use
that we use for the very basic mathematical purpose        for numbers, and there are many situations that are
of counting. The set of all natural numbers is usually     naturally modeled by a number system that includes
denoted N. (Some mathematicians prefer to include 0        both positive and negative numbers. For example, neg-
as a natural number as well: for instance, this is the     ative numbers are sometimes used for the amount of
usual convention in logic and set theory. Both conven-     money in a bank account, for temperature (in degrees
tions are to be found in this book, but it should always   Celsius or Fahrenheit), and for altitude compared with
be clear which one is being used.)                         sea level.
  Of course, the phrase “1, 2, 3, 4, and so on” does not      The set of all integers—positive, negative, and zero—
constitute a formal definition, but it does suggest the     is usually denoted Z (for the German word “Zahlen,”
following basic picture of the natural numbers, one that   meaning “numbers”). Within this system, subtraction
we tend to take for granted.                               is always possible: that is, if m and n are integers, then
                                                           so is m − n.
  (i) Given any natural number n there is another, n+1,
      that comes next—known as the successor of n.         1.3   The Rational Numbers
 (ii) A list that starts with 1 and follows each number    So far we have considered only whole numbers. If we
      by its successor will include every natural number   form all possible fractions as well, then we obtain the
      exactly once and nothing else.                       rational numbers. The set of all rational numbers is
                                                           denoted Q (for “quotients”).
This picture is encapsulated by the peano axioms             One of the main uses of numbers besides counting is
[III.67](/part-03/the-peano-axioms).                                                  measurement, and most quantities that we measure are
  Given two natural numbers m and n one can add            ones that can vary continuously, such as length, weight,
them together or multiply them, obtaining in each case     temperature, and velocity. For these, whole numbers
a new natural number. By contrast, subtraction and         are inadequate.
division are not always possible. If we want to give         A more theoretical justification for the rational num-
                                           5
meaning to expressions such as 8 − 13 or 7 , then we       bers is that they form a number system in which
must work in a larger number system.                       division is always possible—except by zero. This fact,

18                                                                                                       I. Introduction

together with some basic properties of the arithmetical           The set of all real numbers is denoted R. A more
operations, means that Q is a field. What fields are and          abstract view of R is that it is an extension of the
why they are important will be explained in more detail         rational number system to a larger field, and in fact the
later (section 2.2).                                            only one possible in which processes of the above kind
                                                                always give rise to numbers that themselves belong
1.4   The Real Numbers                                          to R.
A famous discovery of the ancient Greeks, often attrib-           Because real numbers are intimately connected with
uted, despite very inadequate evidence, to the school           the idea of limits (of successive approximations), a true
of pythagoras [VI.1](/part-06/pythagoras-ca), was that the square root of 2 is          appreciation of the real number system depends on an
not a rational number. That is, there is no fraction p/q        understanding of mathematical analysis, which will be
such that (p/q)2 = 2. The Pythagorean theorem about             discussed in section 5.
right-angled triangles (which was probably known at
least a thousand years before Pythagoras) tells us that         1.5   The Complex Numbers
if a square has sides of length 1, then the length of
                  √                                             Many polynomial equations, such as the equation x 2 =
its diagonal is 2. Consequently, there are lengths that
                                                                2, do not have rational solutions but can be solved in R.
cannot be measured by rational numbers.
                                                                However, there are many other equations that cannot
   This argument seems to give strong practical reasons
                                                                be solved even in R. The simplest example is the equa-
for extending our number system still further. How-
                                                                tion x 2 = −1, which has no real solution since the
ever, such a conclusion can be resisted: after all, we
                                                                square of any real number is positive or zero. In order
cannot make any measurements with infinite precision,
                                                                to get around this problem, mathematicians introduce
so in practice we round off to a certain number of dec-
                                                                a symbol, i, which they treat as a number, and they sim-
imal places, and as soon as we have done so we have
                                                                ply stipulate that i2 is to be regarded as equal to −1.
presented our measurement as a rational number. (This
                                                                The complex number system, denoted C, is the set of all
point is discussed more fully in numerical analysis
                                                                numbers of the form a+bi, where a and b are real num-
[IV.21](/part-04/numerical-analysis).)
                                                                bers. To add or multiply complex numbers, one treats i
   Nevertheless, the theoretical arguments for going
beyond the rational numbers are irresistible. If we             as a variable (like x, say), but any occurrences of i2 are
want to solve polynomial equations, take logarithms             replaced by −1. Thus,
[III.25 §4](/part-03/the-exponential-and-logarithmic-functions), do trigonometry, or work with the gauss-                   (a + bi) + (c + di) = (a + c) + (b + d)i
ian distribution [III.71 §5](/part-03/probability-distributions), to give just four exam-
                                                                and
ples from an almost endless list, then irrational num-
bers will appear every where we look. They are not used                (a + bi)(c + di) = ac + bci + adi + bdi 2
directly for the purposes of measurement, but they are                                 = (ac − bd) + (bc + ad)i.
needed if we want to reason theoretically about the
physical world by describing it mathematically. This               There are several remarkable points to note about
necessarily involves a certain amount of idealization:          this definition. First, despite its apparently artificial
it is far more convenient to say that the length of the         nature, it does not lead to any inconsistency. Secondly,
                                 √
diagonal of a unit square is 2 than it is to talk about         although complex numbers do not directly count or
what would be observed, and with what degree of cer-            measure anything, they are immensely useful. Thirdly,
tainty, if one tried to measure this length as accurately       and perhaps most surprisingly, even though the num-
as possible.                                                    ber i was introduced to help us solve just one equa-
   The real numbers can be thought of as the set of             tion, it in fact allows us to solve all polynomial equa-
all numbers with a finite or infinite decimal expansion.          tions. This is the famous fundamental theorem of
In the latter case, they are defined not directly but by         algebra [V.13](/part-05/the-fundamental-theorem-of-algebra).
a process of successive approximation. For example,                One explanation for the utility of complex numbers
the squares of the numbers 1, 1.4, 1.41, 1.414, 1.4142,         is that they provide a concise way to talk about many
1.41421, . . . , get as close as you like to 2, if you go far   aspects of geometry, via Argand diagrams. These rep-
enough along the sequence, which is what we mean by             resent complex numbers as points in the plane, the
saying that the square root of 2 is the infinite decimal         number a+bi corresponding to the point with coordin-
                                                                                     \sqrt{1}.41421 . . . .                                                 ates (a, b). If r = a2 + b2 and θ = tan−1 (b/a), then

$I$ . $3$ .

Some Fundamental Mathematical Definitions $a = r$ cos $\theta$ and $b = r$ sin $\theta.$ It turns out that multiplying a complex number $z = x + yi$ by $a + bi$ corresponds to the following geometrical process. First, you associate z with the point (x , y) in the plane. Next, you multiply this point by r , obtaining the point (r x, r y). Finally, you rotate this new point counter clockwise about the origin through an angle of $\theta.$ In other words, the effect on the complex plane of multiplication by a  +  bi is to dilate it by r and then rotate it by $\theta.$ In particular, if $a^{2} + b^{2} = 1$ , then multiplying by

$a + bi$ corresponds to rotating by $\theta.$ For this reason, polar coordinates are at least as good as Cartesian coordinates for representing complex numbers: an alternative way to write a  +  bi is r e $i\theta$ , which tells us that the number has distance r from the origin and is positioned at an angle $\theta$ around from the positive part of the real axis (in a counter clockwise direction). If $z = rei\theta$ with $r > 0$ , then r is called the modulus of z, denoted by |z| , and $\theta$ is the argument of z.  (  Since adding $2\pi$ to $\theta$ does not change $ei\theta$ , it is usually understood that $0 \le \theta < 2\pi$ , or sometimes that

$- \pi \le \theta < \pi$ .) One final useful definition: if $z = x + iy$ is a complex number, then its complex conjugate, written \bar{z}, is the number x  -  yi. It is easy to check that z\bar{z} $= x^{2} + y^{2} = |z|^{2}$ .

$2$

Four Important Algebraic Structures

In the previous section it was emphasized that numbers are best thought of not as individual objects but as members of number systems. A number system consists of some objects (numbers) together with operations (such as addition and multiplication) that can be performed on those objects. As such, it is an example of an algebraic structure. However, there are many very important algebraic structures that are not number systems, and a few of them will be introduced here.

$2$ . $1$

Groups

If S is a geometrical shape, then a rigid motion of S is a way of moving S in such a way that the distances between the points of S are not changed--squeezing and stretching are not allowed. A rigid motion is a symmetry of S if, after it is completed, S looks the same as it did before it moved. For example, if S is an equilateral triangle, then rotating S through $120$ ◦ about its center is a symmetry; so is reflecting S about a line that passes through one of the vertices of S and the midpoint of the opposite side.

$19$

More formally, a symmetry of S is a function f from S to itself such that the distance between any two points $x$ and $y$ of S is the same as the distance between the transformed points f (x) and f (y). This idea can be hugely generalized: if S is any mathematical structure, then a symmetry of S is a function from S to itself that preserves its structure. If S is a geometrical shape, then the mathematical structure that should be preserved is the distance between any two of its points. But there are many other mathematical structures that a function may be asked to preserve, most notably algebraic structures of the kind that will soon be discussed. It is fruitful to draw an analogy with the geometrical situation and regard any structure-preserving function as a sort of symmetry. Because of its extreme generality, symmetry is an all pervasive concept within mathematics; and wherever symmetries appear, structures known as groups follow close behind. To explain what these are and why they appear, let us return to the example of an equilateral triangle, which has, as it turns out, six possible symmetries. Why is this? Well, let f be a symmetry of an equilateral triangle with vertices A, B, and C and suppose for convenience that this triangle has sides of length $1$ . Then f (A), f (B), and f (C) must be three points of the triangle and the distances between these points must all be $1$ . It follows that f (A), f (B), and f (C) are distinct vertices of the triangle, since the furthest apart any two points can be is $1$ and this happens only when the two points are distinct vertices. So f (A), f (B), and f (C) are the vertices A, B, and C in some order. But the number of possible orders of A, B, and C is $6$ . It is not hard to show that, once we have chosen f (A) , f (B), and f (C), the rest of what f does is completely determined. (For example, if X is the midpoint of A and C, then f (X) must be the midpoint of f (A) and f (C) since there is

$1$

no other point at distanc$e^{2}$ from f (A) and f (C).) Let us refer to these symmetries by writing down in order what happens to the vertices A, B, and C. So, for instance, the symmetry ACB is the one that leaves the vertex A fixed and exchanges B and C, which is achieved by reflecting the triangle in the line that joins A to the midpoint of B and C. There are three reflections like this: ACB, CBA, and BAC. There are also two rotations: BCA and CAB. Finally, there is the “trivial” symmetry, ABC, which leaves all points where they were originally. (The “trivial” symmetry is useful in much the same way as zero is useful for the algebra of integer addition .)

$20$

What makes these and other sets of symmetries into groups is that any two symmetries can be composed, meaning that one symmetry followed by another produces a third (since if two operations both preserve a structure then their combination clearly does too) . For example, if we follow the reflection BAC by the reflection ACB, then we obtain the rotation CAB. To work this out, one can either draw a picture or use the following kind of reasoning: the first symmetry takes A to B and the second takes B to C, so the combination takes A to C, and similarly B goes to A, and C to B. Notice that the order in which we perform the symmetries matters: if we had started with the reflection ACB and then done the reflection BAC, then we would have obtained the rotation BCA. (If you try to see this by drawing a picture, it is important to think of A, B, and C as labels that stay where they are rather than moving with the triangle--they mark positions that the vertices can occupy .) We can think of symmetries as “objects” in their own right, and of composition as an algebraic operation, a bit like addition or multiplication for numbers. The operation has the following useful properties: it is associative, the trivial symmetry is an identity element, and every symmetry has an inverse [I.2](/part-01/language-and-grammar) . (For example, the inverse of a reflection is itself, since doing the same reflection twice leaves the triangle where it started .) More generally, any set with a binary operation that has these properties is called a group. It is not part of the definition of a group that the binary operation should be commutative, since, as we have just seen, if one is composing two symmetries then it often makes a difference which one goes first. However, if it is commutative then the group is called Abelian, after the Norwegian mathematician niels henrik abel [VI.33](/part-06/niels-henrik-abel-18021829). The number systems Z , Q , R , and C all form Abelian groups with the operation of addition, or under addition, as one usually says. If you remove zero from Q , R , and C , then they form Abelian groups under multiplication, but Z does not because of a lack of inverses: the reciprocal of an integer is not usually an integer. Further examples of groups will be given later in this section. $2$ . $2$ Fields Although several number systems form groups, to regard them merely as groups is to ignore a great deal of their algebraic structure. In particular, whereas a group has just one binary operation, the standard I. Introduction number systems have two, namely addition and multiplication (from which further ones, such as subtraction and division, can be derived). The formal definition of a field is quite long: it is a set with two binary operations and there are several axioms that these operations must satisfy. Fortunately, there is an easy way to remember these axioms. You just write down all the basic properties you can think of that are satisfied by addition and multiplication in the number systems Q , R , and C . These properties are as follows. Both addition and multiplication are commutative and associative, and both have identity elements (0 for addition and $1$ for multiplication). Every element x has an additive inverse $- x$ and a multiplicative inverse $1/x($ except that $0$ does not have a multiplicative inverse). It is the existence of these inverses that allows us to define subtraction and division: $x - y$ means $x + ( - y)$ and $x/y$ means x · $(1/y)$ . That covers all the properties that addition and multiplication satisfy individually. However, a very general rule when defining mathematical structures is that if a definition splits into parts, then the definition as a whole will not be interesting unless those parts interact. Here our two parts are addition and multiplication, and the properties mentioned so far do not relate them in any way. But one final property, known as the distributive law, does this, and thereby gives fields their special character. This is the rule that tells us how to multiply out brackets: $x(y + z) = xy + xz$ for any three numbers x, y, and z. Having listed these properties, one may then view the whole situation abstractly by regarding the properties as axioms and saying that a field is any set with two binary operations that satisfy all those axioms. However, when one works in a field, one usually thinks of the axioms not as a list of statements but rather as a general license to do all the algebraic manipulations that one can do when talking about rational, real, and complex numbers. Clearly, the more axioms one has, the harder it is to find a mathematical structure that satisfies them, and it is indeed the case that fields are harder to come by than groups. For this reason, the best way to understand fields is probably to concentrate on examples. In addition to Q , R , and C , one other field stands out as fundamental, namely F p , which is the set of integers modulo a prime p, with addition and multiplication also defined modulo p (see modular arithmetic [III.58](/part-03/modular-arithmetic)) .

I.3.   Some Fundamental Mathematical Definitions                                                                      21

   What makes fields interesting, however, is not so          and (0, 1). Then every point in the plane is a so-called
much the existence of these basic examples as the fact       linear combination ax + by of the basis vectors x and
that there is an important process of extension that         y. To interpret the expression ax + by, first rewrite
allows one to build new fields out of old ones. The idea      it as a(1, 0) + b(0, 1). Then a times the unit vector
is to start with a field F, find a polynomial P that has       (1, 0) is (a, 0) and b times the unit vector (0, 1) is
no roots in F, and “adjoin” a new element to F with          (0, b) and when you add (a, 0) and (0, b) coordinate
the stipulation that it is a root of P . This produces an    by coordinate you get the vector (a, b).
extended field F , which consists of everything that one         Here is another situation where linear combinations
can produce from this root and from elements of F            appear. Suppose you are presented with the differential
using addition and multiplication.                           equation (d2 y/dx 2 ) + y = 0, and happen to know (or
   We have already seen an important example of this         notice) that y = sin x and y = cos x are two possible
process: in the field R, the polynomial P (x) = x 2 + 1       solutions. Then you can easily check that y = a sin x +
has no root, so we adjoined the element i and let C be       b cos x is a solution for any pair of numbers a and b.
the field of all combinations of the form a + bi.             That is, any linear combination of the existing solutions
   We can apply exactly the same process to the field F3 ,    sin x and cos x is another solution. It turns out that all
in which again the equation x 2 + 1 = 0 has no solution.     solutions are of this form, so we can regard sin x and
If we do so, then we obtain a new field, which, like C,       cos x as “basis vectors” for the “space” of solutions of
consists of all combinations of the form a+bi, but now       the differential equation.
a and b belong to F3 . Since F3 has three elements, this        Linear combinations occur in many many contexts
new field has nine elements. Another example is the           through out mathematics. To give one more example,
        √
field Q( 2), which consists of all numbers of the form        an arbitrary polynomial of degree 3 has the form
      \sqrt{a} + b 2, where now a and b are rational numbers. A           ax3 + bx 2 + cx + d, which is a linear combination of
slightly more complicated example is Q(γ), where γ is        the four basic polynomials 1, x, x 2 , and x 3 .
a root of the polynomial x 3 − x − 1. A typical element         A vector space is a mathematical structure in which
of this field has the form a + bγ + cγ 2 , with a, b, and c   the notion of linear combination makes sense. The
rational. If one is doing arithmetic in Q(γ), then when-     objects that belong to the vector space are usually
ever γ 3 appears, it can be replaced by γ + 1 (because       called vectors, unless we are talking about a specific
γ 3 − γ − 1 = 0), just as i2 can be replaced by −1 in the    example and are thinking of them as concrete objects
complex numbers. For more on why field extensions             such as polynomials or solutions of a differential equa-
are interesting, see the discussion of automorphisms         tion. Slightly more formally, a vector space is a set V
in section 4.1.                                              such that, given any two vectors v and w (that is, ele-
   A second very significant justification for introducing     ments of V ) and any two real numbers a and b, we can
fields is that they can be used to form vector spaces,        form the linear combination av + bw.
and it is to these that we now turn.                            Notice that this linear combination involves objects
                                                             of two different kinds, the vectors v and w and the
2.3    Vector Spaces                                         numbers a and b. The latter are known as scalars. The
                                                             operation of forming linear combinations can be bro-
One of the most convenient ways to represent points          ken up into two constituent parts: addition and scalar
in a plane that stretches out to infinity in all directions   multiplication. To form the combination av + bw, first
is to use Cartesian coordinates. One chooses an origin       multiply the vectors v and w by the scalars a and
and two directions X and Y , usually at right angles to      b, obtaining the vectors av and bw, and then add
each other. Then the pair of numbers (a, b) stands for       these resulting vectors to obtain the full combination
the point you reach in the plane if you go a distance a      av + bw.
in direction X and a distance b in direction Y (where if        The definition of linear combination must obey cer-
a is a negative number such as −2, this is interpreted       tain natural rules. Addition of vectors must be commu-
as going a distance +2 in the opposite direction to X,       tative and associative, with an identity (the zero vector )
and similarly for b).                                        and an inverse for each v (written −v). Scalar multipli-
   Another way of saying the same thing is this. Let x       cation must obey a sort of associative law, namely that
and y stand for the unit vectors in directions X and Y ,     a(bv) and (ab)v are always equal. We also need two
respectively, so their Cartesian coordinates are (1, 0)      distributive laws: (a + b)v = av + bv and a(v + w) =

$22$

av  +  aw for any scalars $a$ and $b$ and any vectors $v$ and $w$. Another context in which linear combinations arise, one that lies at the heart of the usefulness of vector spaces, is the solution of simultaneous equations. Suppose one is presented with the two equations $3x + 2y = 6$ and $x - y = 7$ . The usual way to solve such a pair of equations is to try to eliminate either $x$ or $y$ by adding an appropriate multiple of one of the equations to the other: that is, by taking a certain linear combination of the equations. In this case, we can eliminate y by adding twice the second equation to the first, obtaining the equation $5x = 20$ , which tells us that $x = 4$ and hence that $y = - 3$ . Why were we allowed to combine equations like this? Well, let us write $L^{1}$ and $R^{1}$ for the left- and right-hand sides of the first equation, and similarly $L^{2}$ and $R^{2}$ for the second. If, for some particular choice of $x$ and  y, it is true that $L^{1} = R^{1}$ and $L^{2} = R^{2}$ , then clearly $L^{1} + 2L^{2} = R^{1} + 2R^{2}$ , as the two sides of this equation are merely giving different names to the same numbers. Given a vector space V , a basis is a collection of vectors $v^{1}$ , $v^{2}$ , . . . , v n with the following property: every vector in V can be written in exactly one way as a linear combination $a^{1}v^{1} + a^{2}v^{2} +$ · · · $+ a^{n}v^{n}$ . There are two ways in which this can fail: there may be a vector that cannot be written as a linear combination of $v^{1}$ , $v^{2}$ , . . . , v n or there may be a vector that can be so expressed, but in more than one way. If every vector is a linear combination then we say that the vectors $v^{1}$ , $v^{2}$ , . . . , v n span V , and if no vector is a linear combination in more than one way then we say that they are independent. An equivalent definition is that $v^{1}$ , $v^{2}$ , . . . , v n are independent if the only way of writing the zero vector as $a^{1}v^{1} + a^{2}v^{2} +$ · · · $+ a^{n}v^{n}$ is by taking $a^{1} = a^{2} =$ · · · $= a^{n} = 0$ . The number of elements in a basis is called the dimension of V . It is not immediately obvious that there could not be two bases of different sizes, but it turns out that there cannot, so the concept of dimension makes sense. For the plane, the vectors $x$ and $y$ defined earlier formed a basis, so the plane, as one would hope, has dimension $2$ . If we were to take more than two vectors, then they would no longer be independent: for example, if we take the vectors (1, 2) , (1, 3) , and (3, 1), then we can write (0, 0) as the linear combination 8(1 , $2) - 5(1$ , $3) - (3$ , 1). (To work this out one must solve some simultaneous equations--this is typical of calculations in vector spaces .)

I. Introduction

The most obvious n-dimensional vector space is the space of all sequences ($x^{1}$ , . . . , x n) of n real numbers. To add this to a sequence ($y^{1}$ , . . . , y n) one simply forms the sequence $(x^{1} + y^{1}$ , . . . , $x^{n} + y^{n})$ and to multiply it by a scalar c one forms the sequence (c$x^{1}$ , . . . , cx n). This vector space is denoted R n . Thus, the plane with its usual coordinate system is $R^{2}$ and three-dimensional space is $R^{3}$ . It is not in fact necessary for the number of vectors in a basis to be finite. A vector space that does not have a finite basis is called infinite dimensional. This is not an exotic property: many of the most important vector spaces, particularly spaces where the “vectors” are functions, are infinite dimensional. There is one final remark to make about scalars. They were defined earlier as real numbers that one uses to make linear combinations of vectors. But it turns out that the calculations one does with scalars, in particular solving simultaneous equations, can all be done in a more general context. What matters is that they should belong to a field, so Q , R , and C can all be used as systems of scalars, as indeed can more general fields. If the scalars for a vector space V come from a field F , then one says that V is a vector space over F . This generalization is important and useful: see, for example, algebraic numbers [IV.1](/part-04/number-theory). $2$ . $4$ Rings Another algebraic structure that is very important is a ring. Rings are not quite as central to mathematics as groups, fields, or vector spaces, so a proper discussion of them will be deferred to rings, ideals, and modules [III.81](/part-03/rings-ideals-and-modules). However, roughly speaking, a ring is an algebraic structure that has most, but not necessarily all, of the properties of a field. In particular, the requirements of the multiplicative operation are less strict. The most important relaxation is that nonzero elements of a ring are not required to have multiplicative inverses; but sometimes multiplication is not even required to be commutative. If it is, then the ring itself is said to be commutative--a typical example of a commutative ring is the set Z of all integers. Another is the set of all polynomials with coefficients in some field F . $3$

Creating New Structures Out of Old Ones

An important first step in understanding the definition of some mathematical structure is to have a supply of examples. Without examples, a definition is dry and

I.3.   Some Fundamental Mathematical Definitions                                                                       23

abstract. With them, one begins to have a feeling for         such as the commutativity and associativity of addition
the structure that its definition alone cannot usually         and multiplication are then true in Q(i) for the simple
provide.                                                      reason that they are true in the larger set C.
   One reason for this is that it makes it much easier          Even though Q(i) is contained in C, it is a more inter-
to answer basic questions. If you have a general state-       esting field in some important ways. But how can this
ment about structures of a given type and want to know        be? Surely, one might think, an object cannot become
whether it is true, then it is very helpful if you can test   more interesting when most of it is taken away. But a
it in a wide range of particular cases. If it passes all      moment’s further thought shows that it certainly can:
the tests, then you have some evidence in favor of the        for example, the set of all prime numbers contains fas-
statement. If you are lucky, you may even be able to see      cinating mysteries of a kind that one does not expect
why it is true; alternatively, you may find that the state-    to encounter in the set of all positive integers. As for
ment is true for each example you try, but always for         fields, the fundamental theorem of algebra [V.13](/part-05/the-fundamental-theorem-of-algebra)
reasons that depend on particular features of the exam-       tells us that every polynomial equation has a solution
ple you are examining. Then you will know that you            in C. This is very definitely not true in Q(i). So in Q(i),
should try to avoid these features if you want to find a       and in many other fields of a similar kind, we can ask
counterexample. If you do find a counterexample, then          which polynomial equations have solutions. This turns
the general statement is false, but it may still happen       out to be a deep and important question that simply
that a modification to the statement is true and useful.       does not arise in the larger field C.
In that case, the counterexample will help you to find           In general, given an example X of an algebraic struc-
an appropriate modification.                                   ture, a substructure of X is a subset Y that has rel-
   The moral, then, is that examples are important. So        evant closure properties. For instance, groups have
how does one find them? There are two completely dif-          subgroups, vector spaces have subspaces, rings have
ferent approaches. One is to build them from scratch.         subrings (and also ideals [III.81](/part-03/rings-ideals-and-modules)), and so on. If the
For example, one might define a group G to be the              property defining the substructure Y is a sufficiently
group of all symmetries of an icosahedron. Another,           interesting one, then Y may well be significantly differ-
which is the main topic of this section, is to take some      ent from X and may therefore be a useful addition to
examples that have already been constructed and build         one’s stock of examples.
new ones out of them. For instance, the group Z2 ,              This discussion has focused on algebra, but interest-
which consists of all pairs of integers (x, y), with addi-    ing substructures abound in analysis and geometry as
tion defined by the obvious rule (x, y) + (x , y ) =           well. For example, the plane R2 is not a particularly
(x + x , y + y ), is a “product” of two copies of the         interesting set, but it has subsets, such as the mandel-
group Z. As we shall see, this notion of product is very      brot set [IV.14 §2.8](/part-04/dynamics), to give just one example, that are
general and can be applied in many other contexts. But        still far from fully understood.
first let us look at an even more basic method of finding
new examples.                                                 3.2   Products

3.1    Substructures                                          Let G and H be two groups. The product group G \times H
                                                              has as its elements all pairs of the form (g, h) such
As we saw earlier, the set C of all complex numbers,
                                                              that g belongs to G and h belongs to H. This definition
with the operations of addition and multiplication,
                                                              shows how to build the elements of G \times H out of the
forms one of the most basic examples of a field. It
                                                              elements of G and the elements of H. But to define a
also contains many subfields: that is, subsets that them-
                                                              group we need to do more: we are given binary oper-
selves form fields. Take, for example, the set Q(i) of all
                                                              ations on G and H and we must use them to build a
complex numbers of the form a + bi for which a and
                                                              binary operation on G \times H. If g1 and g2 are elements of
b are rational. This is a subset of C and is also a field.
                                                              G, let us write g1 g2 for the result of applying G’s binary
To show this, one must prove that Q(i) is closed under
                                                              operation to them, as is customary, and let us do the
addition, multiplication, and the taking of inverses.
                                                              same for H. Then there is an obvious binary operation
That is, if z and w are elements of Q(i), then z + w
                                                              we can define on the pairs, namely
and zw must be as well, as must −z and 1/z (this
last requirement applying only when z = 0). Axioms                       (g1 , h1 )(g2 , h2 ) = (g1 g2 , h1 h2 ).

24                                                                                                             I. Introduction

That is, one applies the binary operation from G to the         every symmetry can be written in the form T i R j , where
first coordinate and the binary operation from H to the          i is 0, 1, 2, or 3 and j is 0 or 1. (Geometrically, this says
second.                                                         that you can produce any symmetry by either rotat-
   One can form products of vector spaces in a very sim-        ing through a multiple of 90◦ or reflecting and then
ilar way. If V and W are two vector spaces, then the ele-       rotating.)
ments of V \times W are all pairs of the form (v, w) with               This suggests that we might be able to regard D4 as
v in V and w in W . Addition and scalar multiplication          a product of the group {I, T , T 2 , T 3 }, consisting of four
are defined by the formulas                                      rotations, with the group {I, R}, consisting of the iden-
         (v1 , w1 ) + (v2 , w2 ) = (v1 + v2 , w1 + w2 )         tity I and the reflection R. We could even write (T i , Rj )
                                                                instead of T i R j . However, we have to be careful. For
and                                                             instance, (T R)(T R) does not equal T 2 R 2 = T 2 but I.
                      λ(v, w) = (\lambda v, \lambda w).                       The correct rule for multiplication can be deduced from
                                                                the fact that RT R = T −1 (which in geometrical terms is
The dimension of the resulting space is the sum of the
                                                                saying that if you reflect the square, rotate it counter-
dimensions of V and W . (It is actually more usual to
                                                                clockwise through 90◦ , and reflect back, then the result
denote this space by V ⊕ W and call it the direct sum of
                                                                is a clockwise rotation through 90◦ ). It turns out to be
V and W . Nevertheless, it is a product construction.)
                                                                                                           j
  It is not always possible to define product structures                  (T i , Rj )(T i , Rj ) = (T i+(−1) i , R j+j ).
in this simple way. For example, if F and F are two             For example, the product of (T , R) with (T 3 , R) is
fields, we might be tempted to define a “product field”            T −2 R 2 , which equals T 2 .
F \times F using the formulas
                                                                  This is a simple example of a “semidirect product” of
         (x1 , y1 ) + (x2 , y2 ) = (x1 + x2 , y1 + y2 )         two groups. In general, given two groups G and H, there
                                                                may be several interesting ways of defining a binary
and
                                                                operation on the set of pairs (g, h), and therefore
            (x1 , y1 )(x2 , y2 ) = (x1 x2 , y1 y2 ).            several potentially interesting new groups.
However, this definition does not give us a field. Most
of the axioms hold, including the existence of additive         3.3   Quotients
and multiplicative identities—they are (0, 0) and (1, 1),       Let us write Q[x] for the set of all polynomials in the
respectively—but the nonzero element (1, 0) does not            variable x with rational coefficients: that is, expres-
have a multiplicative inverse, since the product of (1, 0)      sions like 2 x 4 − 32 x + 6. Any two such polynomials
and (x, y) is (x, 0), which can never equal (1, 1).
                                                                can be added, subtracted, or multiplied together and
  Occasionally we can define more complicated binary
                                                                the result will be another polynomial. This makes Q[x]
operations that do make the set F \times F into a field. For
                                                                into a commutative ring, but not a field, because if you
instance, if F = F = R, then we can define addition as
                                                                divide one polynomial by another then the result is not
above but define multiplication in a less obvious way
                                                                (necessarily) a polynomial.
as follows:
                                                                  We will now convert Q[x] into a field in what may at
     (x1 , y1 )(x2 , y2 ) = (x1 x2 − y1 y2 , x1 y2 + x2 y1 ).   first seem a rather strange way: by regarding the poly-
Then we obtain C, the field of complex numbers, since            nomial x 3 − x − 1 as “equivalent” to the zero polyno-
the pair (x, y) can be identified with the complex num-          mial. To put this another way, whenever a polynomial
ber x + iy. However, this is not a product field in the          involves x 3 we will allow ourselves to replace x 3 by
general sense we are discussing.                                x+1, and we will regard the new polynomial that results
   Returning to groups, what we defined earlier was the          as equivalent to the old one. For example, writing “∼”
direct product of G and H. However, there are other,            for “is equivalent to”:
more complicated products of groups, which can be                        x 5 = x 3 x 2 ∼ (x + 1)x 2 = x 3 + x 2
used to give a much richer supply of examples. To illus-
                                                                                      ∼ x + 1 + x 2 = x 2 + x + 1.
trate this, let us consider the dihedral group D4 , which
is the group of all symmetries of a square, of which            Notice that in this way we can convert any polynomial
there are eight. If we let R stand for one of the reflec-        into one of degree at most 2, since whenever the degree
tions and T for a counter clockwise quarter turn, then           is higher, you can reduce it by taking out x 3 from the

$I$ . $3$ .

Some Fundamental Mathematical Definitions term of highest degree and replacing it by $x + 1$ , just as we did above. Notice also that whenever we do such a replacement, the difference between the old polynomial and the new one is a multiple of $x^{3} - x - 1$ . For example, when we replaced $x^{3}x^{2}$ by $(x + 1)x^{2}$ the difference was $(x^{3} - x - 1)x^{2}$ . Therefore, what our process amounts to is this: two polynomials are equivalent if and only if their difference is a multiple of the polynomial $x^{3} - x - 1$ . Now the reason Q [x] was not a field was that nonconstant polynomials do not have multiplicative inverses. For example, it is obvious that one cannot multiply $x^{2}$ by a polynomial and obtain the polynomial $1$ . However, we can obtain a polynomial that is equivalent to $1$ if we multiply by $1 + x - x^{2}$ . Indeed, the product of the two is $x^{2} + x^{3} - x^{4}$ ∼ $x^{2} + x + 1 - (x + 1)x = 1$ . It turns out that all polynomials that are not equivalent to zero (that is, are not multiples of $x^{3} - x - 1)$ have multiplicative inverses in this generalized sense. (To find an inverse for a polynomial P one applies the generalized euclid algorithm [III.22] to find polynomials Q and R such that $PQ + R(x^{3} - x - 1) = 1$ . The reason we obtain $1$ on the right-hand side is that $x^{3} - x - 1$ cannot be factorized in  Q[x ] and P is not a multiple of $x^{3} - x - 1$ , so their highest common factor is $1$ . The inverse of P is then Q .) In what sense does this mean that we have a field? After all, the product of $x^{2}$ and $1 + x - x^{2}$ was not $1$ : it was merely equivalent to $1$ . This is where the notion of quotients comes in. We simply decide that when two polynomials are equivalent, we will regard them as equal, and we denote the resulting mathematical structure by  Q[x ]$/(x^{3} - x - 1)$ . This structure turns out to be a field, and it turns out to be important as the smallest field that contains Q and also has a root of the polynomial $X^{3} - X - 1$ . What is this root? It is simply x. This is a slightly subtle point because we are now thinking of polynomials in two different ways: as elements of  Q[x ]$/(x^{3} - x - 1)$ (at least when equivalent ones are regarded as equal), and also as functions defined on  Q[x ]$/(x^{3} - x - 1)$ . So the polynomial $X^{3} - X - 1$ is not the zero polynomial, since for example it takes the value $5$ when $X = 2$ and the value $x^{6} - x^{2} - 1$ ∼ $(x + 1)^{2} - x^{2} - 1$ ∼ $2x$ when $X = x^{2}$ . You may have noticed a strong similarity between the discussion of the field  Q[x ]$/(x^{3} - x - 1)$ and the discussion of the field Q (γ) at the end of section $2$ . $2$ . And indeed, this is no coincidence: they are two different $25$ ways of describing the same field. However, thinking of the field as  Q[x ]$/(x^{3} - x - 1)$ brings significant advantages, as it converts questions about a mysterious set of complex numbers into more approachable questions about polynomials. What does it mean to “regard two mathematical objects as equal” when they are not equal? A formal answer to this question uses the notion of equivalence relations and equivalence classes (discussed in the language and grammar of mathematics [I.2](/part-01/language-and-grammar) ) : one says that the elements of  Q[x ]$/(x^{3} - x - 1)$ are not in fact polynomials but equivalence classes of polynomials. However, to understand the notion of a quotient it is much easier to look at an example with which we are all familiar, namely the set Q of rational numbers. If we are trying to explain carefully what a rational number is, then we may start by saying that a typical rational number has the form a  /  b , where $a$ and $b$ are integers and b is not $0$ . And it is possible to define the set of rational numbers to be the set of all such expressions, with the rules

$ad + bc$

a

c

 + 

 = b

d

bd

and

ac

a c

 = / b d

bd

However, there is one very important further remark we must make, which is that we do not regard all such expressions as different: for example, $\frac{1}{2}$ and $\frac{3}{6}$ are supposed to be the same rational number. So we define two a c expressions $b$ and $d$ to be equivalent if $ad = bc$ and we regard equivalent expressions as denoting the same number. Notice that the expressions can be genuinely different, but we think of them as denoting the same object. If we do this, then we must be careful whenever we define functions and binary operations. For example, suppose we tried to define a binary operation “◦” on Q by the natural-looking formula

$a + c$

a c

◦

 = / $b + d$

b d

This definition turns out to have a very serious flaw. To see why, let us apply it to the fractions $\frac{1}{2}$ and $\frac{1}{3}$ . Then

$21$

it gives us the answe$r^{5}$ . Now let us replac$e^{2}$ by the

$3$

equivalent fraction $6$ and apply the formula again. This time it gives us the answer $\frac{4}{9}$ , which is different. Thus, although the formula defines a perfectly good binary a operation on the set of expressions of the form b , it does not make any sense as a binary operation on the set of rational numbers.

$26$

In general, it is essential to check that if you put equivalent objects in then you get equivalent objects out. For example, when defining addition and multiplication for the field  Q[x ]$/(x^{3} - x - 1)$ , one must check that if $P$ and $P$ differ by a multiple of $x^{3} - x - 1$ , and $Q$ and $Q$ also differ by a multiple of $x^{3} - x - 1$ , then so do P + Q and P + Q , and so do P Q and P Q . This is an easy exercise. An important example of a quotient construction is that of a quotient group. If G is a group and H is a subgroup of G, then it is natural to try to do what we did for polynomials and define $g^{1}$ and $g^{2}$ to be equivalent if $g^{1} - 1g^{2} ($ the obvious notion of the “difference” between $g^{1}$ and $g^{2}$ ) belongs to H. The equivalence class of an element g is easily seen to be the set of all elements gh such that h $\in$ H, which is usually written g H. (It is called a left coset of H .) There is a natural candidate for a binary operation ∗ on the set of all left cosets: $g^{1}H$ ∗ $g^{2}H = g^{1}g^{2}H.$ In other words, given two left cosets, pick elements $g^{1}$ and $g^{2}$ from each, form the product $g^{1}g^{2}$ , and take the left coset $g^{1}g^{2}$ H. Once again, it is important to check that if you pick different elements from the original cosets, then you will still get the coset $g^{1}g^{2}$ H. It turns out that this is not always the case: one needs the additional assumption that H is a normal subgroup, which means that if h is any element of H, then ghg $- 1$ is an element of H for every element g of G. Elements of the form ghg $- 1$ are called conjugates of  h; thus, a normal subgroup is a subgroup that is “closed under conjugation.” If H is a normal subgroup, then the set of left cosets forms a group under the binary operation just defined. This group is written G / H and is called the quotient of G by H. One can regard G as a product of H and G / H (though it may be a somewhat complicated product), so if you understand both H and G / H , then for many purposes you understand G. Therefore, groups G that do not have normal subgroups (other than G itself and the subgroup that consists of just the identity element) have a special role, a bit like the role of prime numbers in number theory. They are called simple groups. (See the classification of finite simple groups [V.7](/part-05/the-classication-of-finite-simple-groups).) Why is the word “quotient” used? Well, a quotient is normally what you get when you divide one number by another, so to understand the analogy let us think about dividing $21$ by $3$ . We can think of this as dividing up twenty-one objects into sets of three objects each and asking how many sets we get. This can be I. Introduction described in terms of equivalence as follows. Let us call two objects equivalent if they belong to the same one of the seven sets. Then there can be at most seven inequivalent objects. So when we regard equivalent objects as the same, we “divide out by the equivalence,” obtaining a “quotient set” that has seven elements. A rather different use of quotients leads to an elegant definition of the mathematical shape known as a torus: that is, the shape of the surface of a doughnut (of the kind that has a hole). We start with the plane, $R^{2}$ , and define two points (x , y) and (x , y) to be equivalent if x - $x$ and $y$ - y are both integers. Suppose that we regard any two equivalent points as the same and that we start at a point (x , y) and move right until we reach the point (x $+ 1$ , y). This point is “the same” as (x , y), since the difference is ( $1$ , $0$ ). Therefore, it is as though the entire plane has been wrapped around a vertical cylinder of circumference $1$ and we have gone around this cylinder once. If we now apply the same argument to the y-coordinate, noting that (x , y) is always “the same” point as (x , y $+ 1$ ), then we find that this cylinder is itself “folded around” so that if you go “upwards” by a distance of $1$ then you get back to where you started. But that is what a torus is: a cylinder that is folded back into itself. (This is not the only way of defining a torus, however. For example, it can be defined as the product of two circles .) Many other important objects in modern geometry are defined using quotients. It often happens that the object one starts with is extremely big, but that at the same time the equivalence relation is very generous, in the sense that it is easy for one object to be equivalent to another. In that case the number of “genuinely distinct” objects can be quite small. This is a rather loose way of talking, since it is not really the number of distinct objects that is interesting so much as the complexity of the set of these objects. It might be better to say that one often starts with a hopelessly large and complicated structure but “divides out most of the mess” and ends up with a quotient object that has a structure that is simple enough to be manageable while still conveying important information. Good examples of this are the fundamental group [IV.6](/part-04/algebraic-topology) and the homology and cohomology groups [IV.6](/part-04/algebraic-topology) of a topological space; an even better example is the notion of a moduli space [IV.8](/part-04/moduli-spaces) . Many people find the idea of a quotient somewhat difficult to grasp, but it is of major importance through out mathematics, which is why it has been discussed at some length here.

I.3.   Some Fundamental Mathematical Definitions                                                                                27

   4   Functions between Algebraic Structures               more accurate to say that f has collapsed the struc-
                                                            ture. One can make this idea more precise: although
One rule with almost no exceptions is that mathemat-
                                                            f (a)f (b) = f (c) whenever ab = c, the converse does
ical structures are not studied in isolation: as well as
                                                            not hold: it is perfectly possible for f (a)f (b) to equal
the structures themselves one looks at certain functions
                                                            f (c) without ab equaling c, and indeed that happens
defined on those structures. In this section we shall see
                                                            in the example just given.
which functions are worth considering, and why. (For a
                                                               An isomorphism between two structures X and Y
discussion of functions in general, see the language
                                                            is a homomorphism f : X → Y that has an inverse
and grammar of mathematics [I.2 §2.2](/part-01/language-and-grammar).)
                                                            g : Y → X that is also a homomorphism. For most
                                                            algebraic structures, if f has an inverse g, then g is
4.1    Homomorphisms, Isomorphisms, and
                                                            automatically a homomorphism; in such cases we can
       Automorphisms
                                                            simply say that an isomorphism is a homomorphism
If X and Y are two examples of a particular mathemat-       that is also a bijection [I.2 §2.2](/part-01/language-and-grammar). That is, f is a one-to-
ical structure, such as a group, field, or vector space,     one correspondence between X and Y that preserves
then, as was suggested in the discussion of symme-          structure.1
try in section 2.1, there is a class of functions from X       If X and Y are fields, then these considerations are
to Y of particular interest, namely the functions that      less interesting: it is a simple exercise to show that
“preserve the structure.” Roughly speaking, a function      every homomorphism f : X → Y that is not identically
f : X → Y is said to preserve the structure of X if,        zero is automatically an isomorphism between X and
given any relationship between elements of X that is        its image f (X), that is, the set of all values taken by
expressed in terms of that structure, there is a corre-     the function f . So structure cannot be collapsed with-
sponding relationship between the images of those ele-      out being lost. (The proof depends on the fact that the
ments that is expressed in terms of the structure of Y .    zero in Y has no multiplicative inverse.)
For example, if X and Y are groups and a, b, and c are         In general, if there is an isomorphism between two
elements of X such that ab = c, then, if f is to preserve   algebraic structures X and Y , then X and Y are said
the algebraic structure of X, f (a)f (b) must equal f (c)   to be isomorphic (coming from the Greek words for
in Y . (Here, as is usual, we are using the same notation   “same” and “shape”). Loosely, the word “isomorphic”
for the binary operations that make X and Y groups          means “the same in all essential respects,” where what
as is normally used for multiplication.) Similarly, if X    counts as essential is precisely the algebraic structure.
and Y are fields, with binary operations that we shall       What is absolutely not essential is the nature of the
write using the standard notation for addition and mul-     objects that have the structure: for example, one group
tiplication, then a function f : X → Y will be interest-    might consist of certain complex numbers, another of
ing only if f (a) + f (b) = f (c) whenever a + b = c        integers modulo a prime p, and a third of rotations of
and f (a)f (b) = f (c) whenever ab = c. For vector          a geometrical figure, and they could all turn out to be
spaces, the functions of interest are ones that preserve    isomorphic. The idea that two mathematical construc-
linear combinations: if V and W are vector spaces, then     tions can have very different constituent parts and yet
f (av + bw) should always equal af (v) + bf (w).            in a deeper sense be “the same” is one of the most
   A function that preserves structure is called a ho-      important in mathematics.
                                                               An automorphism of an algebraic structure X is an
momorphism, though homomorphisms of particular
                                                            isomorphism from X to itself. Since it is hardly sur-
mathematical structures often have their own names:
                                                            prising that X is isomorphic to itself, one might ask
for example, a homomorphism of vector spaces is
                                                            what the point is of automorphisms. The answer is that
called a linear map.
                                                            automorphisms are precisely the algebraic symmetries
   There are some useful properties that a homomor-
phism may have if we are lucky. To see why further
                                                              1. Let us see how this claim is proved for groups. If X and Y are
properties can be desirable, consider the following         groups, f : X → Y is a homomorphism with inverse g : Y → X, and
example. Let X and Y be groups and let f : X → Y be the     u, v, and w are elements of Y with uv = w, then we must show that
                                                            g(u)g(v) = g(w). To do this, let a = g(u), b = g(v), and d = g(w).
function that takes every element of X to the identity      Since f and g are inverse functions, f (a) = u, f (b) = v, and f (d) =
element e of Y . Then, according to the definition above,    w. Now let c = ab. Then w = uv = f (a)f (b) = f (c), since f is a
                                                            homomorphism. But then f (c) = f (d), which implies that c = d (just
f preserves the structure of X, since whenever ab = c,      apply the function g to f (c) and f (d)). Therefore ab = d, which tells
we have f (a)f (b) = ee = e = f (c). However, it seems      us that g(u)g(v) = g(w), as we needed to show.

28                                                                                                       I. Introduction

alluded to in our discussion of groups. An automor-          G; and conversely, if H is a normal subgroup of G, then
phism of X is a function from X to itself that preserves     the quotient map, which takes each element g to the
the structure (which now comes in the form of state-         left coset g H, is a homomorphism from G to the quo-
ments like ab = c). The composition of two automor-          tient group G/H with kernel H. Similarly, the kernel of
phisms is clearly a third, and as a result the automor-      any ring homomorphism is an ideal [III.81](/part-03/rings-ideals-and-modules), and every
phisms of a structure X form a group. Although the           ideal I in a ring R is the kernel of a “quotient map”
individual automorphisms may not be of much inter-           from R to R/I. (This quotient construction is discussed
est, the group certainly is, as it often encapsulates what   in more detail in rings, ideals, and modules [III.81](/part-03/rings-ideals-and-modules).)
one really wants to know about a structure X that is too
complicated to analyze directly.                             4.2   Linear Maps and Matrices
   A spectacular example of this is when X is a field.
                                                √            Homomorphisms between vector spaces have a dis-
To illustrate, let us take the example of Q( 2). If f :
   √tinctive geometrical property: they send straight lines
Q( 2) → Q( 2) is an automorphism, then f (1) = 1.
(This follows easily from the fact that 1 is the only mul-   to straight lines. For this reason they are called lin-
tiplicative identity.) It follows that f (2) = f (1 + 1) =   ear maps, as was mentioned in the previous subsec-
f (1) + f (1) = 1 + 1 = 2. Continuing like this, we          tion. From a more algebraic point of view, the struc-
can show that f (n) = n for every positive integer n.        ture that linear maps preserve is that of linear combi-
Then f (n) + f (−n) = f (n + (−n)) = f (0) = 0, so           nations: a function f from one vector space to another
f (−n) = −f (n) = −n. Finally, f (p/q) = f (p)/f (q) =       is a linear map if f (au + bv) = af (u) + bf (v) for
p/q when p and q are integers with q = 0. So f takes        every pair of vectors u, v ∈ V and every pair of scalars
every rational number to itself. What can we say about       a and b. From this one can deduce the more general
   √$\sqrt{f}$ ( 2)? Well, f ( 2)f ( 2) = f ( 2 · 2) = f (2) = 2,         assertion that f (a1 v1 + · · · + an vn ) is always equal to
                                 √but this implies only that f ( 2) is 2 or − 2. It turns      a1 f (v1 ) + · · · + an f (vn ).
out that both choices are possible: one automorphism            Suppose that we wish to define a linear map from V
                               √is the “trivial” one, f (a+b 2) = a+b 2, and the other       to W . How much information do we need to provide? In
                                          √is the more interesting one, f (a + b 2) = a − b 2.          order to see what sort of answer is required, let us begin
This observation demonstrates that there is no alge-         with a similar but slightly easier question: how much
braic difference between the two square roots; in this        information is needed to specify a point in space? The
                       √
sense, the field Q( 2) does not know which square root        answer is that, once one has devised a sensible coordi-
of 2 is positive and which negative. These two automor-      nate system, three numbers will suffice. If the point is
phisms form a group, which is isomorphic to the group        not too far from Earth’s surface then one might wish
consisting of the elements ±1 under multiplication, or       to use its latitude, its longitude, and its height above
the group of integers modulo 2, or the group of sym-         sea level, for instance. Can a linear map from V to W
metries of an isosceles triangle that is not equilateral,    similarly be specified by just a few numbers?
or. . . . The list is endless.                                  The answer is that it can, at least if V and W are finite
   The automorphism groups associated with certain           dimensional. Suppose that V has a basis v1 , . . . , vn , that
field extensions are called Galois groups, and are a vital    W has a basis w1 , . . . , wm , and that f : V → W is the lin-
component of the proof of the insolubility of the            ear map we would like to specify. Since every vector in
quintic [V.21](/part-05/the-insolubility-of-the-quintic), as well as large parts of algebraic          V can be written in the form a1 v1 +· · ·+an vn and since
number theory [IV.1](/part-04/number-theory).                                        f (a1 v1 +· · ·+an vn ) is always equal to a1 f (v1 )+· · ·+
   An important concept associated with a homomor-           an f (vn ), once we decide what f (v1 ), . . . , f (vn ) are we
phism φ between algebraic structures is that of a ker-       have specified f completely. But each vector f (vj ) is
nel. This is defined to be the set of all elements x of X     a linear combination of the basis vectors w1 , . . . , wm :
such that φ(x) is the identity element of Y (where this      that is, it can be written in the form
means the additive identity if X and Y are structures
                                                                          f (vj ) = a1 j w1 + · · · + amj wm .
that involve both additive and multiplicative binary
operations). The kernel of a homomorphism tends to           Thus, to specify an individual f (vj ) needs m numbers,
be a substructure of X with interesting properties. For      the scalars a1 j , . . . , amj . Since there are n different vec-
instance, if G and K are groups, then the kernel of a        tors vj , the linear map is determined by the mn num-
homomorphism from G to K is a normal subgroup of             bers aij , where i runs from 1 to m and j from 1 to n.

I.3.   Some Fundamental Mathematical Definitions                                                                        29

These numbers can be written in an array, as follows:          difficult problems in mathematics arise when one tries
           ⎛                          ⎞                        to understand the structure of the general linear groups
             a11   a12 · · ·     a1 n
           ⎜                          ⎟                        (and related groups) for certain interesting fields F (see
           ⎜ a21   a22 · · ·     a2 n ⎟
           ⎜                          ⎟                        representation theory [IV.9 §§5,6]).
           ⎜ .       ..    ..      .. ⎟ .
           ⎜ .                .       ⎟
           ⎝ .        .             . ⎠                           While matrices are very useful, many interesting
             am1 am2 · · · amn                                 linear maps are between infinite-dimensional vector
An array like this is called a matrix. It is important to      spaces, and we close this section with two examples
note that a different choice of basis vectors for V and         for the reader who is familiar with elementary calcu-
W would lead to a different matrix, so one often talks          lus. (There will be a brief discussion of calculus later in
of the matrix of f relative to a given pair of bases (a        this article.) For the first, let V be the set of all func-
basis for V and a basis for W ).                               tions from R to R that can be differentiated and let W
   Now suppose that f is a linear map from V to W and          be the set of all functions from R to R. These can be
that g is a linear map from U to V . Then f g stands for       made into vector spaces in a simple way: if f and g
the linear map from U to W obtained by doing first g,           are functions, then their sum is the function h defined
then f . If the matrices of f and g, relative to certain       by the formula h(x) = f (x) + g(x), and if a is a real
bases of U , V , and W , are A and B, then what is the         number then af is the function k defined by the for-
matrix of f g? To work it out, one takes a basis vector uk     mula k(x) = af (x). (So, for example, we could regard
of U and applies to it the function g, obtaining a linear      the polynomial x 2 + 3 x + 2 as a linear combination of
combination b1 k v1 +· · ·+bnk vn of the basis vectors of       the functions x 2 , x, and the constant function 1.) Then
V . To this linear combination one applies the function        differentiation is a linear map (from V to W ), since the
f , obtaining a rather complicated linear combination          derivative (af + bg) is af + bg . This is clearer if we
of linear combinations of the basis vectors w1 , . . . , wm    write Df for the derivative of f : then we are saying that
of W .                                                         D(af + bg) = a Df + b Dg.
   Pursuing this idea, one can calculate that the entry in        A second example uses integration. Let V be another
row i and column j of the matrix P of f g is ai1 b1 j +         vector space of functions, and let u be a function of two
ai2 b2 j +· · ·+ain bnj . This matrix P is called the product   variables. (The functions involved have to have certain
of A and B and is written AB. If you have not seen this        properties for the definition to work, but let us ignore
definition then you will find it hard to grasp, but the          the technicalities.) Then we can define a linear map T
main point to remember is that there is a way of calcu-        on the space V by the formula
lating the matrix for f g from the matrices A and B of f
                                                                            (T f )(x) =   u(x, y)f (y) dy.
and g, and that this matrix is denoted AB. Matrix mul-
tiplication of this kind is associative but not commuta-       Definitions like this one can be hard to take in, because
tive. That is, A(BC) is always equal to (AB)C but AB is        they involve holding in one’s mind three different lev-
not necessarily the same as BA. The associativity fol-         els of complexity. At the bottom we have real numbers,
lows from the fact that composition of the underlying          denoted by x and y. In the middle are functions like f ,
linear maps is associative: if A, B, and C are the matrices    u, and T f , which turn real numbers (or pairs of them)
of f , g, and h, respectively, then A(BC) is the matrix        into real numbers. At the top is another function, T , but
of the linear map “do h-then-g, then f ” and (AB)C is          the “objects” that it transforms are themselves func-
the matrix of the linear map “do h, then g-then-f ,” and       tions: it turns a function like f into a different func-
these are the same linear map.                                 tion T f . This is just one example where it is important
   Let us now confine our attention to automorphisms            to think of a function as a single, elementary “thing”
from a vector space V to itself. These are linear maps         rather than as a process of transformation. (See the dis-
f : V → V that can be inverted; that is, for which there       cussion of functions in the language and grammar
exists a linear map g : V → V such that f g(v) =               of mathematics [I.2 §2.2](/part-01/language-and-grammar).) Another remark that may
gf (v) = v for every vector v in V . These we can think        help to clarify the definition is that there is a very close
of as “symmetries” of the vector space V , and as such         analogy between the role of the two-variable function
they form a group under composition. If V is n dimen-          u(x, y) and the role of a matrix aij (which can itself
sional and the scalars come from the field F, then this         be thought of as a function of the two integer vari-
group is called GLn (F). The letters “G” and “L” stand for     ables i and j). Functions like u are sometimes called
“general” and “linear”; some of the most important and         kernels (which should not be confused with kernels of

$30$

homomorphisms) . For more about linear maps between infinite-dimensional spaces, see operator algebras [IV.15](/part-04/operator-algebras) and linear operators [III.50](/part-03/linear-operators-and-their-properties).

$4$ . $3$

Eigenvalues and Eigenvectors

Let V be a vector space and let S : V $\to$ V be a linear map from V to itself. An eigenvector of S is a nonzero vector v in V such that Sv is proportional to v; that is, $Sv = \lambda v$ for some scalar $\lambda.$ The scalar in question is called the eigenvalue corresponding to v. This simple pair of definitions is extraordinarily important: it is hard to think of any branch of mathematics where eigenvectors and eigenvalues do not have a major part to play. But what is so interesting about Sv being proportional to v? A rather vague answer is that in many cases the eigenvectors and eigenvalues associated with a linear map contain all the information one needs about the map, and in a very convenient form. Another answer is that linear maps occur in many different contexts, and questions that arise in those contexts often turn out to be questions about eigenvectors and eigenvalues, as the following two examples illustrate. First, imagine that you are given a linear map T from a vector space V to itself and want to understand what happens if you perform the map repeatedly. One approach would be to pick a basis of V , work out the corresponding matrix A of T , and calculate the powers of A by matrix multiplication. The trouble is that the calculation will be messy and uninformative, and it does not really give much insight into the linear map. However, it often happens that one can pick a very special basis, consisting only of eigenvectors, and in that case understanding the powers of T becomes easy. Indeed, suppose that the basis vectors are $v^{1}$ , $v^{2}$ , . . . , v n and that each v i is an eigenvector with corresponding eigenvalue $\lambda^{i}$ . That is, suppose that $T(v^{i}) = \lambda^{i}v^{i}$ for every i. If w is any vector in V , then there is exactly one way of writing it in the form $a^{1}v^{1} +$ · · · $+ a^{n}v^{n}$ , and then $T(w) = \lambda^{1}a^{1}v^{1} +$ · · · $+ \lambda^{n}a^{n}v^{n}$ . Roughly speaking, this says that T stretches the part of w in direction v i by a factor of $\lambda$ i . But now it is easy to say what happens if we apply T not just once but m times to w. The result will be

$T^{m}(w) = \lambda^{m}$

m

${}^{1} a^{1}v^{1} +$ · · · $+ \lambda^{n}a^{n}v^{n}$ . In other words, now the amount by which we stretch in the v i direction is $\lambda$ m i , and that is all there is to it.

I. Introduction

Why should one be interested in doing linear maps over and over again? There are many reasons: one fairly convincing one is that this sort of calculation is exactly what Google does in order to put Web sites into a useful order. Details can be found in the mathematics of algorithm design [VII.5](/part-07/the-mathematics-of-algorithm-design) . The second example concerns the interesting property of the exponential function [III.25](/part-03/the-exponential-and-logarithmic-functions) e x : that its derivative is the same function. In other words, if f (x)  =  e x , then f (x)  =  f (x). Now differentiation, as we saw earlier, can be thought of as a linear map, and if f (x)  =  f (x) then this map leaves the function f unchanged, which says that f is an eigenvector with eigenvalue $1$ . More generally, if $g(x) = e\lambda x$ , then $g (x) = \lambda e\lambda x = \lambda g(x)$ , so g is an eigenvector of the differentiation map, with eigenvalue $\lambda.$ Many linear differential equations can be thought of as asking for eigenvectors of linear maps defined using differentiation. (Differentiation and differential equations will be discussed in the next section .)

$5$

Basic Concepts of Mathematical Analysis

Mathematics took a huge leap forward in sophistication with the invention of calculus, and the notion that one can specify a mathematical object indirectly by means of better and better approximations. These ideas form the basis of a broad area of mathematics known as analysis, and the purpose of this section is to help the reader who is unfamiliar with them. However, it will not be possible to do full justice to the subject, and what is written here will be hard to understand without at least some prior knowledge of calculus.

$5$ . $1$

Limits

In our discussion of real numbers (section $1$ . 4) there was a brief discussion of the square root of $2$ . How do we know that $2$ has a square root? One answer is the one given there: that we can calculate its decimal expansion. If we are asked to be more precise, we may well end up saying something like this. The real numbers $1$ , $1$ . $4$ , $1$ . $41$ , $1$ . $414$ , $1$ . 4142 , $1$ . 41421 , . . . , which have terminating decimal expansions (and are therefore rational), \text{approach another real number} x =1 . 4142135 . . . . We cannot actually write down x properly because it has an infinite decimal expansion but we can at least explain how its digits are defined: for example, the third digit after the decimal point is $a_{4}$ because $1$ . $414$ is the largest multiple of $0$ . $001$ that squares to

I.3.   Some Fundamental Mathematical Definitions                                                                                  31

less than 2. It follows that the squares of the origi-                   translate English words like “eventually” into mathe-
nal numbers, 1, 1.96, 1.9881, 1.999396, 1.99996164,                      matics, and for this we need quantifiers [I.2 §3.2](/part-01/language-and-grammar).
1.9999899241, . . . , approach 2, and this is why we are                    Suppose δ is a positive number (which one usually
entitled to say that x 2 = 2.                                            imagines as small). Let us say that an is δ-close to l if
   Suppose that we are asked to determine the length                     |an − l|, the difference between an and l, is less than δ.
of a curve drawn on a piece of paper, and that we                        What would it mean to say that eventually the sequence
are given a ruler to help us. We face a problem: the                     gets δ-close to l and stays there? It means that from
ruler is straight and the curve is not. One way of tack-                 some point onwards, all the an are δ-close to l. And
ling the problem is as follows. First, draw a few points                 what is the meaning of “from some point onwards”?
P0 , P1 , P2 , . . . , Pn along the curve, with P0 at one end and        It is that there is some number N (the point in ques-
Pn at the other. Next, measure the distance from P0                      tion) with the property that an is δ-close to l from N
to P1 , the distance from P1 to P2 , and so on up to Pn .                onwards—that is, for every n that is greater than or
Finally, add all these distances up. The result will not                 equal to N. In symbols:
be an exactly correct answer, but if there are enough
                                                                                    ∃N    ∀n ⩾ N     an is δ-close to l.
points, spaced reasonably evenly, and if the curve does
not wiggle too much, then our procedure will give us a                   It remains to capture the idea of “as close as you like.”
good notion of the “approximate length” of the curve.                    What this means is that the above sentence is true for
Moreover, it gives us a way to define what we mean by                     any δ you might wish to specify. In symbols:
the “exact length”: suppose that, as we take more and
                                                                               ∀δ > 0 ∃N       ∀n ⩾ N     an is δ-close to l.
more points, we find that the approximate lengths, in
the sense just defined, approach some number l. Then                      Finally, let us stop using the nonstandard phrase “δ-
we say that l is the length of the curve.                                close”:
   In both these examples there is a number that we
                                                                                  ∀δ > 0 ∃N       ∀n ⩾ N     |an − l| < δ.
reach by means of better and better approximations.
I used the word “approach” in both cases, but this is                    This sentence is not particularly easy to understand.
rather vague, and it is important to make it precise. Let                Unfortunately (and interestingly in the light of the dis-
a1 , a2 , a3 , . . . be a sequence of real numbers. What does            cussion in [I.2 §4](/part-01/language-and-grammar)), using a less symbolic language does
it mean to say that these numbers approach a specified                    not necessarily make things much easier: “Whatever
real number l?                                                           positive δ you choose, there is some number N such
  The following two examples are worth bearing in                        that for all bigger numbers n the difference between
mind. The first is the sequence 12 , 23 , 34 , 45 , . . . . In a sense,   an and l is less than δ.”
the numbers in this sequence approach 2, since each                         The notion of limit applies much more generally than
one is closer to 2 than the one before, but it is clear                  just to real numbers. If you have any collection of math-
that this is not what we mean. What matters is not so                    ematical objects and can say what you mean by the dis-
much that we get closer and closer, but that we get arbi-                tance between any two of those objects, then you can
trarily close, and the only number that is approached in                 talk of a sequence of those objects having a limit. Two
this stronger sense is the obvious “limit,” 1.                           objects are now called δ-close if the distance between
   A second sequence illustrates this in a different way:                 them is less than δ, rather than the difference. (The
1, 0, 12 , 0, 13 , 0, 14 , 0, . . . . Here, we would like to say that    idea of distance is discussed further in metric spaces
the numbers approach 0, even though it is not true that                  [III.56](/part-03/metric-spaces).) For example, a sequence of points in space can
each one is closer than the one before. Nevertheless, it                 have a limit, as can a sequence of functions. (In the
is true that eventually the sequence gets as close as you                second case it is less obvious how to define distance—
like to 0 and remains at least that close.                               there are many natural ways to do it.) A further example
  This last phrase serves as a definition of the mathe-                   comes in the theory of fractals (see dynamics [IV.14](/part-04/dynamics)):
matical notion of a limit : the limit of the sequence of                 the very complicated shapes that appear there are best
numbers a1 , a2 , a3 , . . . is l if eventually the sequence             defined as limits of simpler ones.
gets as close as you like to l and remains that close.                     Two other ways of saying “the limit of the sequence
However, in order to meet the standards of precision                     a1 , a2 , . . . is l” are “an converges to l” and “an tends
demanded by mathematics, we need to know how to                          to l.” One sometimes says that this happens as n tends

$32$

to infinity. Any sequence that has a limit is called convergent. If a n converges to l then one often writes

$a^{n} \to l.5$ . $2$

Continuity

Suppose you want to know the approximate value of

$\pi^{2}$ . Perhaps the easiest thing to do is to press $a \pi$ button on a calculator, which displays $3$ . 1415927 , and then an $x^{2}$ button, after which it displays $9$ . 8696044 . Of course, one knows that the calculator has not actually squared $\pi$ : instead it has squared the number $3$ . 1415927 . (If it is a good one, then it may have secretly used a few more digits of $\pi$ without displaying them, but not infinitely many .) Why does it not matter that the calculator has squared the wrong number? A first answer is that it was only an approximate value of $\pi^{2}$ that was required. But that is not quite a complete explanation: how do we know that if x is a good approximation to $\pi$ then $x^{2}$ is $a$ good approximation to $\pi^{2}$ ? Here is how one might show this. If x is a good approximation to $\pi$ , then we can write $x = \pi + δ$ for some very small number δ (which could be negative). Then $x^{2} = \pi^{2} + 2δ\pi + δ^{2}$ . Since δ is small, so is $2δ\pi + δ^{2}$ , so $x^{2}$ is indeed a good approximation to $\pi^{2}$ . What makes the above reasoning work is that the function that takes a number x to its square is continuous. Roughly speaking, this means that if two numbers are close, then so are their squares. To be more precise about this, let us return to the calculation of $\pi^{2}$ , and imagine that we wish to work it out to a much greater accuracy--so that the first hundred digits after the decimal point are correct, for example. A calculator will not be much help, but what we might do is find a list of the digits of $\pi$ (on the Internet you can find sites that tell you at least the first fifty million), use this to define a new x that is a much better approximation to $\pi$ , and then calculate the new $x^{2}$ by getting a computer to do the necessary long multiplication. How close to $\pi$ do we need x to be for $x^{2}$ to be within $10 - 100$ of $\pi^{2}$ ? To answer this, we can use our earlier argument. Let $x = \pi + δ$ again. Then $x^{2} - \pi^{2} = 2δ\pi + δ^{2}$ , and an easy calculation shows that this has modulus less than $10 - 100$ if δ has modulus less than $10 - 101$ . So we will be all right if we take the first $101$ digits of $\pi$ after the decimal point. More generally, however accurate we wish our estimate of $\pi^{2}$ to be, we can achieve this accuracy if we are prepared to make x a sufficiently good approximation to $\pi$ . In mathematical parlance, the function $f(x) = x^{2}$ is continuous at $\pi$ .

I. Introduction

Let us try to say this more symbolically. The statement “x ${}^{2} = \pi^{2}$ to within an accuracy of  ” means that $|x^{2} - \pi^{2}| <$  . To capture the phrase “however accurate,” we need this to be true for every positive  , so we should start by saying ∀  $> 0$ . Now let us think about the words “if we are prepared to make x a sufficiently good approximation to $\pi$ .” The thought behind them is that there is some $δ > 0$ for which the approximation is guaranteed to be accurate to within   as long as x is within δ$of$\pi . That is, there exists $a δ > 0$ such that if $|x - \pi| < δ$ then it is guaranteed that $|x^{2} - \pi^{2}| <$  . Putting everything together, we end up with the following symbolic sentence: $(|x - \pi| < δ$ ⇒ $|x^{2} - \pi^{2}| <$ ). ∀  $> 0$ ∃δ $> 0$ To put that in words: “Given any positive number there is a positive number δ such that if $|x - \pi|$ is less than δ then $|x^{2} - \pi^{2}|$ is less than  .” Earlier, we found a δ that worked when   was chosen to be $10 - 100$ : it was $10 - 101$ . What we have just shown is that the function f (x)  =  $x^{2}$ is continuous at the point $x = \pi$ . Now let us generalize this idea: let f be any function and let a be any real number. We say that f is continuous at a if ∀  $> 0$ ∃δ $> 0 (|x - a| < δ$ ⇒ $| f(x) - f(a)| <)$ . This says that however accurate an estimate for f (a) you wish f (x) to be, you can achieve this accuracy if you are prepared to make x a sufficiently good approximation to a. The function f is said to be continuous if it is continuous at every a. Roughly speaking, what this means is that f has no “sudden jumps.” (It also rules out certain kinds of very rapid oscillations that would also make accurate estimates difficult .) As with limits, the idea of continuity applies in much more general contexts, and for the same reason. Let f be a function from a set X to a set Y , and suppose that we have two notions of distance, one for elements of X and the other for elements of Y . Using the expression d (x , a) to denote the distance between $x$ and $a$, and similarly for d (f (x), f (a)), one says that f is continuous at a if ∀  $> 0$ ∃δ $> 0 (d(x$ , $a) < δ$ ⇒  d(f(x), f( a )$) <$ ) and that f is continuous if it is continuous at every a in X. In other words, we replace differences such as $|x - a|$ by distances such as d (x , a). Like homomorphisms (which are discussed in section $4$ . $1$ above), continuous functions can be regarded as preserving a certain sort of structure. It can be shown that a function f is continuous if and only if, whenever

I.3.   Some Fundamental Mathematical Definitions                                                                       33

an → x, we also have f (an ) → f (x). That is, continu-       therefore be regarded as functions defined on a vec-
ous functions are functions that preserve the structure       tor space of dimension greater than 1. As soon as we
provided by convergent sequences and their limits.            look at them this way, we can ask ourselves whether, in
                                                              a small neighborhood of a point, they can be approxi-
5.3    Differentiation                                         mated by linear maps. It is very useful if they can: a gen-
                                                              eral function can behave in very complicated ways, but
The derivative of a function f at a value a is usually pre-
                                                              if it can be approximated by a linear function, then at
sented as a number that measures the rate of change of
                                                              least in small regions of n-dimensional space its behav-
f (x) as x passes through a. The purpose of this sec-
                                                              ior is much easier to understand. In this situation one
tion is to promote a slightly different way of regarding
                                                              can use the machinery of linear algebra and matrices,
it, one that is more general and that opens the door
                                                              which leads to calculations that are feasible, especially
to much of modern mathematics. This is the idea of
                                                              if one has the help of a computer.
differentiation as linear approximation.
                                                                 Imagine, for instance, a meteorologist interested in
   Intuitively speaking, to say that f (a) = m is to say
                                                              how the direction and speed of the wind change as
that if one looks through a very powerful microscope
                                                              one looks at different parts of some three-dimensional
at the graph of f in a tiny region that includes the
                                                              region above Earth’s surface. Wind behaves in compli-
point (a, f (a)), then what one sees is almost exactly
                                                              cated, chaotic ways, but to get some sort of handle on
a straight line of gradient m. In other words, in a suffi-
                                                              this behavior one can describe it as follows. To each
ciently small neighborhood of the point a, the function
                                                              point (x, y, z) in the region (think of x and y as hori-
f is approximately linear. We can even write down a
                                                              zontal coordinates and z as a vertical one) one can asso-
formula for the linear function g that approximates f :
                                                              ciate a vector (u, v, w) representing the velocity of the
               g(x) = f (a) + m(x − a).                       wind at that point: u, v, and w are the components of
This is the equation of the straight line of gradient m       the velocity in the x-, y-, and z-directions.
that passes through the point (a, f (a)). Another way            Now let us change the point (x, y, z) very slightly by
of writing it, which is a little clearer, is                  choosing three small numbers h, k, and l and looking
                                                              at (x + h, y + k, z + l). At this new point, we would
                g(a + h) = f (a) + mh,
                                                              expect the wind vector to be slightly different as well,
and to say that g approximates f in a small neighbor-         so let us write it (u + p, v + q, w + r ). How does the
hood of a is to say that f (a+h) is approximately equal       small change (p, q, r ) in the wind vector depend on the
to f (a) + mh when h is small.                                small change (h, k, l) in the position vector? Provided
   One must be a little careful here: after all, if f does    the wind is not too turbulent and h, k, and l are small
not jump suddenly, then, when h is small, f (a + h)           enough, we expect the dependence to be roughly linear:
will be close to f (a) and mh will be small, so f (a +        that is how nature seems to work. In other words, we
h) is approximately equal to f (a) + mh. This line of         expect there to be some linear map T such that (p, q, r )
reasoning seems to work regard less of the value of m,         is roughly T (h, k, l) when h, k, and l are small. Notice
and yet we wanted there to be something special about         that each of p, q, and r depends on each of h, k, and l,
the choice m = f (a). What singles out that particular        so nine numbers will be needed in order to specify this
value is that f (a+h) is not just close to f (a)+mh, but      linear map. In fact, we can express it in matrix form:
so close that the difference (h) = f (a+h)−f (a)−mh                       ⎛ ⎞ ⎛                     ⎞⎛ ⎞
                                                                            p        a     a12 a13       h
is small compared with h. That is, (h)/h → 0 as h →                      ⎜ ⎟ ⎜ 11                  ⎟⎜ ⎟
                                                                          ⎜ q ⎟ = ⎜a21 a22 a23 ⎟ ⎜ k ⎟ .
0. (This is a slightly more general notion of limit than                  ⎝ ⎠ ⎝                     ⎠⎝ ⎠
                                                                            r        a31 a32 a33         l
the one discussed in section 5.1. It means that you can
make (h)/h as small as you like if you make h small          The matrix entries aij express individual dependen-
enough.)                                                      cies. For example, if x and z are held fixed, then we are
   The reason these ideas can be generalized is that the      setting h = l = 0, from which it follows that the rate
notion of a linear map is much more general than sim-         of change of u as just y varies is given by the entry
ply a function from R to R of the form g(x) = mx + c.         a12 . That is, a12 is the partial derivative ∂u/∂y at the
Many functions that arise naturally in mathematics—           point (x, y, z).
and also in science, engineering, economics, and many           This tells us how to calculate the matrix, but from
other areas—are functions of several variables, and can       the conceptual point of view it is easier to use vector

34                                                                                                      I. Introduction

notation. Write x for (x, y, z), u(x) for (u, v, w), h for    that have interesting interpretations. So let us try to
(h, k, l), and p for (p, q, r ). Then what we are saying is   interpret the expressions involved in the heat equation.
that                                                             The left-hand side, ∂T /∂t, is quite simple. It is the
                     p = T (h) + (h)                         rate of change of the temperature T (x, y, z, t) when
                                                              the spatial coordinates x, y, and z are kept fixed and
for some vector (h) that is small relative to h. Alter-
                                                              t varies. In other words, it tells us how fast the point
natively, we can write
                                                              (x, y, z) is heating up or cooling down at time t. What
            u(x + h) = u(x) + T (h) + (h),                   would we expect this to depend on? Well, heat takes
a formula that is closely analogous to our earlier for-       time to travel through a medium, so although the tem-
mula g(x + h) = g(x) + mh + (h). This tells us that          perature at some distant point (x , y , z ) will even-
if we add a small vector h to x, then u(x) will change        tually affect the temperature at (x, y, z), the way the
by roughly T (h).                                             temperature is changing right now (that is, at time t)
   More generally, let u be a function from Rn to Rm .        will be affected only by the temperatures of points very
Then u is defined to be differentiable at a point x ∈ Rn        close to (x, y, z): if points in the immediate neighbor-
if there is a linear map T : Rn → Rm such that, once          hood of (x, y, z) are hotter, on average, than (x, y, z)
again, the formula                                            itself, then we expect the temperature at (x, y, z) to be
                                                              increasing, and if they are colder then we expect it to
            u(x + h) = u(x) + T (h) + (h)
                                                              be decreasing.
holds, with (h) small relative to h. The linear map T           The expression in brackets on the right-hand side
is the derivative of u at x.                                  appears so often that it has its own shorthand. The
   An important special case of this is when m = 1. If        symbol Δ, defined by
f : Rn → R is differentiable at x, then the derivative                               ∂2 f   ∂2 f    ∂2 f
of f at x is a linear map from Rn to R. The matrix of                        Δf =        +      +      ,
                                                                                    ∂x 2   ∂y 2   ∂z 2
T is a row vector of length n, which is often denoted
                                                              is known as the Laplacian. What information does Δf
∇f (x) and referred to as the gradient of f at x. This
                                                              give us about a function f ? The answer is that it cap-
vector points in the direction in which f increases most
                                                              tures the idea in the last paragraph: it tells us how the
rapidly and its magnitude is the rate of change in that
                                                              value of f at (x, y, z) compares with the average value
direction.
                                                              of f in a small neighborhood of (x, y, z), or, more pre-
                                                              cisely, with the limit of the average value in a neigh-
5.4   Partial Differential Equations
                                                              borhood of (x, y, z) as the size of that neighborhood
Partial differential equations are of immense impor-           shrinks to zero.
tance in physics, and have inspired a vast amount of             This is not immediately obvious from the formula,
mathematical research. Three basic examples will be           but the following (not wholly rigorous) argument in
discussed here, as an introduction to more advanced           one dimension gives a clue about why second deriva-
articles later in the volume (see, in particular, partial     tives should be involved. Let f be a function that takes
differential equations [IV.12](/part-04/analysis)).                              real numbers to real numbers. Then to obtain a good
  The first is the heat equation, which, as its name sug-      approximation to the second derivative of f at a point
gests, describes the way the distribution of heat in a        x, one can look at the expression (f (x)−f (x −h))/h
physical medium changes with time:                            for some small h. (If one substitutes −h for h in the
             ∂T    ∂2 T   ∂2 T    ∂2 T                          above expression, one obtains the more usual formula,
                =κ      +      +      .                       but this one is more convenient here.) The derivatives
             ∂t    ∂x 2   ∂y 2   ∂z 2
Here, T (x, y, z, t) is a function that specifies the tem-     f (x) and f (x − h) can themselves be approximated
perature at the point (x, y, z) at time t.                    by (f (x+h)−f (x))/h and (f (x)−f (x−h))/h, respec-
                                                              tively, and if we substitute these approximations into
  It is one thing to read an equation like this and under-
                                                              the earlier expression, then we obtain
stand the symbols that make it up, but quite another
to see what it really means. However, it is important to            1 f (x + h) − f (x)   f (x) − f (x − h)
                                                                                        −                   ,
do so, since of the many expressions one could write                h         h                   h
down that involve partial derivatives, only a minority        which equals (f (x+h)−2 f (x)+f (x−h))/h2 . Dividing
                                                                                                            1
are of much significance, and these tend to be the ones        the top of this last fraction by 2, we obtain 2 (f (x + h)+

I.3.   Some Fundamental Mathematical Definitions                                                                     35

f (x − h)) − f (x): that is, the difference between the        A and B. Suppose that the height of the string at dis-
value of f at x and the average value of f at the two         tance x from A and at time t is written h(x, t). Then
surrounding points x + h and x − h.                           the wave equation says that
   In other words, the second derivative conveys just                                1 ∂2 h   ∂2 h
                                                                                           =      .
the idea we want—a comparison between the value at                                    2
                                                                                    v ∂t 2   ∂x 2
x and the average value near x. It is worth noting that       Ignoring the constant 1/v 2 for a moment, the left-hand
if f is linear, then the average of f (x − h) and f (x + h)   side of this equation represents the acceleration (in a
will be equal to f (x), which fits with the familiar fact      vertical direction) of the piece of string at distance x
that the second derivative of a linear function f is zero.    from A. This should be proportional to the force acting
   Just as, when defining the first derivative, we have         on it. What will govern this force? Well, suppose for a
to divide the difference f (x + h) − f (x) by h so that        moment that the portion of string containing x were
it is not automatically tiny, so with the second deriva-      absolutely straight. Then the pull of the string on the
tive it is appropriate to divide by h2 . (This is appropri-   left of x would exactly cancel out the pull on the right
ate, since, whereas the first derivative concerns linear       and the net force would be zero. So, once again, what
approximations, the second derivative concerns quad-          matters is how the height at x compares with the aver-
ratic ones: the best quadratic approximation for a func-      age height on either side: if the string lies above the
tion f near a value x is f (x + h) ≈ f (x) + hf (x) +         tangent line at x, then there will be an upwards force,
1 2
2 h f (x), an approximation that one can check is             and if it lies below, then there will be a downwards one.
exact if f was a quadratic function to start with.)           This is why the second derivative appears on the right-
  It is possible to pursue thoughts of this kind and          hand side once again. How much force results from this
show that if f is a function of three variables then the      second derivative depends on factors such as the den-
value of Δf at (x, y, z) does indeed tell us how the          sity and tautness of the string, which is where the con-
value of f at (x, y, z) compares with the average values      stant comes in. Since h and x are both distances, v 2
of f at points nearby. (There is nothing special about        has dimensions of (distance/time)2 , which means that
the number 3 here—the ideas can easily be generalized         v represents a speed, which is, in fact, the speed of
to functions of any number of variables.) All that is left    propagation of the wave.
to discuss in the heat equation is the parameter κ. This         Similar considerations yield the three-dimensional
measures the conductivity of the medium. If κ is small,       wave equation, which is, as one might now expect,
then the medium does not conduct heat very well and                        1 ∂2 h    ∂2 h    ∂2 h   ∂2 h
                                                                                  =      +      +      ,
ΔT has less of an effect on the rate of change of the                        2
                                                                           v ∂t 2   ∂x 2   ∂y 2   ∂z 2
temperature; if it is large then heat is conducted better     or, more concisely,
and the effect is greater.
                                                                                   1 ∂2 h
  A second equation of great importance is the Laplace                                     = Δh.
                                                                                  v 2 ∂t 2
equation, Δf = 0. Intuitively speaking, this says of a
                                                              One can be more concise still and write this equation
function f that its value at a point (x, y, z) is always
                                                              as 2 h = 0, where 2 h is shorthand for
equal to the average value at the immediately surround-
ing points. If f is a function of just one variable x,                                  1 ∂2 h
                                                                                    Δh −        .
this says that the second derivative of f is zero, which                               v 2 ∂t 2
implies that f is of the form ax + b. However, for two        The operation 2 is called the d’Alembertian, after
or more variables, a function has more flexibility—it          d’alembert [VI.20](/part-06/jean-le-rond-dalembert-17171783), who was the first to formulate the
can lie above the tangent lines in some directions and        wave equation.
below it in others. As a result, one can impose a variety
                                                              5.5   Integration
of boundary conditions on f (that is, specifications of
the values f takes on the boundaries of certain regions),     Suppose that a car drives down a long straight road for
and there is a much wider and more interesting class          one minute, and that you are told where it starts and
of solutions.                                                 what its speed is during that minute. How can you work
  A third fundamental equation is the wave equation.          out how far it has gone? If it travels at the same speed
In its one-dimensional formulation it describes the           for the whole minute then the problem is very simple
motion of a vibrating string that connects two points         indeed—for example, if that speed is thirty miles per

36                                                                                                     I. Introduction

hour then we can divide by sixty and see that it has             Suppose that you have a lump of impure rock and
gone half a mile—but the problem becomes more inter-          wish to calculate its mass from its density. Suppose also
esting if the speed varies. Then, instead of trying to give   that this density is not constant but varies rather irreg-
an exact answer, one can use the following technique to       ularly through the rock. Perhaps there are even holes
approximate it. First, write down the speed of the car at     inside, so that the density is zero in places. What should
the beginning of each of the sixty seconds that it is trav-   you do?
eling. Next, for each of those seconds, do a simple cal-         Riemann’s approach would be this. First, you enclose
culation to see how far the car would have gone during        the rock in a cuboid. For each point (x, y, z) in this
that second if the speed had remained exactly as it was       cuboid there is then an associated density d(x, y, z)
at the beginning of the second. Finally, add up all these     (which will be zero if (x, y, z) lies outside the rock or
distances. Since one second is a short time, the speed        inside a hole). Second, you divide the cuboid into a large
will not change very much during any one second, so           number of smaller cuboids. Third, in each of the small
this procedure gives quite an accurate answer. More-          cuboids you look for the point of lowest density (if any
over, if you are not satisfied with this accuracy, then        point in the cuboid is not in the rock, then this density
you can improve it by using intervals that are shorter        will be zero) and the point of highest density. Let C be
than a second.                                                one of the small cuboids and suppose that the lowest
   If you have done a first course in calculus, then you       and highest densities in C are a and b, respectively, and
may well have solved such problems in a completely            that the volume of C is V . Then the mass of the part of
different way. In a typical question, one is given an          the rock that lies in C must lie between a V and b V .
explicit formula for the speed at time t—something like       Fourth, add up all the numbers a V that are obtained
at + u, for example—and in order to work out how far          in this way, and then add up all the numbers b V . If
the car has gone one “integrates” this function to obtain     the totals are M1 and M2 , respectively, then the total
the formula 12 at 2 + ut for the distance traveled at time    mass of rock has to lie between M1 and M2 . Finally,
t. Here, integration simply means the opposite of differ-      repeat this calculation for subdivisions into smaller and
entiation: to find the integral of a function f is to find      smaller cuboids. As you do this, the resulting numbers
a function g such that g (t) = f (t). This makes sense,       M1 and M2 will become closer and closer to each other,
because if g(t) is the distance traveled and f (t) is the     and you will have better and better approximations to
speed, then f (t) is indeed the rate of change of g(t).       the mass of the rock.
   However, anti differentiation is not the definition of           Similarly, his approach to the problem about the car
integration. To see why not, consider the following           would be to divide the minute up into small intervals
question: what is the distance traveled if the speed at       and look at the minimum and maximum speeds during
              2
time t is e−t ? It is known that there is no nice function    those intervals. For each interval, this would give him
(which means, roughly speaking, a function built up out       a pair of numbers a and b for which he could say that
of standard ones such as polynomials, exponentials,           the car had traveled a distance of at least a and at most
                                                       2
logarithms, and trigonometric functions) with e−t as          b. Adding up these sets of numbers, he could then say
its derivative, yet the question still makes good sense       that over the full minute the car must have traveled a
and has a definite answer. (It is possible that you have       distance of at least D1 (the sum of the as) and at most
                                                         2
heard of a function Φ(t) that differentiates to e−t /2 ,       D2 (the sum of the bs).
                                 √from which it follows that Φ(t 2)/ 2 differentiates to            With both these problems we had a function (den-
    2
e−t . However, this does not remove the difficulty, since       sity/speed) defined on a set (the cuboid/a minute of
                                       2
Φ(t) is defined as the integral of e−t /2 .)                   time) and in a certain sense we wanted to work out the
   In order to define integration in situations like this      “total amount” of the function. We did so by dividing
where anti differentiation runs into difficulties, we must        the set into small parts and doing simple calculations
fall back on messy approximations of the kind dis-            in those parts to obtain approximations to this amount
cussed earlier. A formal definition along such lines was       from below and above. This process is what is known as
given by riemann [VI.49] in the mid nineteenth cen-           (Riemann) integration. The following notation is com-
tury. To see what Riemann’s basic idea is, and to see         mon: if S is the set and f is the function, then the
also that integration, like differentiation, is a procedure    total amount of f in S, known as the integral, is written
that can usefully be applied to functions of more than         S f (x) dx. Here, x denotes a typical element of S. If,
one variable, let us look at another physical problem.        as in the density example, the elements of S are points

I.3.   Some Fundamental Mathematical Definitions                                                                      37

(x, y, z), then vector notation such as S f (x) dx can        this means that we would like to approximate it by func-
be used, though often it is not and the reader is left to     tions of the form g(w) = \lambda w + μ, where \lambda and \mu are
deduce from the context that an ordinary “x” denotes          complex numbers. (The approximation near z will be
a vector rather than a real number.                           g(w) = f (z) + f (z)(w − z), which gives λ = f (z)
   We have been at pains to distinguish integration from      and μ = f (z) − zf (z).)
anti differentiation, but a famous theorem, known as               Let us regard this situation geometrically. If λ = 0
the fundamental theorem of calculus, asserts that the         then the effect of multiplying by \lambda is to expand z
two procedures do, in fact, give the same answer, at          by some factor r and to rotate it by some angle θ.
least when the function in question has certain continu-      This means that many transformations of the plane
ity properties that all “sensible” functions have. So it is   that we would ordinarily consider to be linear, such
usually legitimate to regard integration as the opposite      as reflections, shears, or stretches, are ruled out. We
of differentiation. More precisely, if f is continuous and     need two real numbers to specify λ (whether we write
                         x
F (x) is defined to be a f (t) dt for some a, then F can       it in the form a + bi or r eiθ ), but to specify a gen-
be differentiated and F (x) = f (x). That is, if you inte-     eral linear transformation of the plane takes four (see
grate a continuous function and differentiate it again,        the discussion of matrices in section 4.2). This reduc-
you get back to where you started. Going the other way        tion in the number of degrees of freedom is expressed
around, if F has a continuous derivative f and a < x,         by a pair of differential equations called the Cauchy–
       x                                                      Riemann equations. Instead of writing f (z) let us write
then a f (t) dt = F (x) − F (a). This almost says that if
you differentiate F and then integrate it again, you get       u(x + iy) + iv(x + iy), where x and y are the real
back to F . Actually, you have to choose an arbitrary         and imaginary parts of z and u(x + iy) and v(x + iy)
number a and what you get is the function F with the          are the real and imaginary parts of f (x + iy). Then the
constant F (a) subtracted.                                    linear approximation to f near z has the matrix
                                                                                   ⎛           ⎞
   To get an idea of the sort of exceptions that arise if                            ∂u     ∂u
one does not assume continuity, consider the so-called
                                                                                   ⎜ ∂x
                                                                                   ⎜        ∂y ⎟
                                                                                               ⎟
                                                                                   ⎜           ⎟.
Heaviside step function H(x), which is 0 when x < 0                                ⎝ ∂v     ∂v ⎠
and 1 when x ⩾ 0. This function has a jump at 0 and                                  ∂x     ∂y
is therefore not continuous. The integral J(x) of this        The matrix of an expansion and rotation always has the
function is 0 when x < 0 and x when x ⩾ 0, and for                   a b
                                                              form ( −b a ), from which we deduce that
almost all values of x we have J (x) = H(x). However,                      ∂u   ∂v            ∂u    ∂v
the gradient of J suddenly changes at 0, so J is not                          =        and       =−    .
                                                                           ∂x   ∂y            ∂y    ∂x
differentiable there and one cannot say that J (0) =
                                                              These are the Cauchy–Riemann equations. One conse-
H(0) = 1.
                                                              quence of these equations is that
                                                                         ∂2 u    ∂2 u     ∂2 v    ∂2 v
5.6    Holomorphic Functions                                                  +      =       −      = 0.
                                                                         ∂x 2   ∂y 2   ∂x∂y    ∂y∂x
One of the jewels in the crown of mathematics is com-         (It is not obvious that the necessary conditions hold
plex analysis, which is the study of differentiable func-      for the symmetry of the mixed partial derivatives, but
tions that take complex numbers to complex numbers.           when f is holomorphic they do.) Therefore, u sat-
Functions of this kind are called holomorphic.                isfies the Laplace equation (which was discussed in
   At first, there seems to be nothing special about such      section 5.4). A similar argument shows that v does
functions, since the definition of a derivative in this        as well.
context is no different from the definition for functions          These facts begin to suggest that complex differen-
of a real variable: if f is a function then the derivative    tiability is a much stronger condition than real differen-
f (z) at a complex number z is defined to be the limit         tiability and that we should expect holomorphic func-
as h tends to zero of (f (z + h) − f (z))/h. However, if      tions to have interesting properties. For the remainder
we look at this definition in a slightly different way (one     of this subsection, let us look at a few of the remarkable
that we saw in section 5.3), we find that it is not alto-      properties that they do indeed have.
gether easy for a complex function to be differentiable.          The first is related to the fundamental theorem of cal-
Recall from that section that differentiation means lin-       culus (discussed in the previous subsection). Suppose
ear approximation. In the case of a complex function,         that F is a holomorphic function and that we are given

38                                                                                                             I. Introduction

its derivative f and the value of F (u) for some complex           real-valued functions: consider, for example, the func-
number u. How can we reconstruct F ? An approximate                tion f where f (x) = 0 when x < 0 and f (x) = x2
method is as follows. Let w be another complex num-                when x ⩾ 0.) It follows that f is holomorphic, so it
ber and let us try to work out F (w). We take a sequence           too can be differentiated twice. Continuing, one finds
of points z0 , z1 , . . . , zn with z0 = u and zn = w, and         that f can be differentiated any number of times. Thus,
with the differences |z1 − z0 |, |z2 − z1 |, . . . , |zn − zn−1 |   for complex functions different i ability implies infinite
all small. We can then approximate F (zi+1 ) − F (zi ) by          different i ability. (This property is what is used to estab-
(zi+1 − zi )f (zi ). It follows that F (w) − F (u), which          lish the symmetry, and even the existence, of the mixed
equals F (zn ) − F (z0 ), is approximated by the sum of            partial derivatives mentioned earlier.)
all the (zi+1 − zi )f (zi ). (Since we have added together            A closely related fact is that wherever a holomorphic
many small errors, it is not obvious that this approx-             function is defined it can be expanded in a power series.
imation is a good one, but it turns out that it is.) We            That is, if f is defined and differentiable every where on
can imagine a number z that starts at u and follows a              an open disk of radius R about w, then it will be given
path P to w by jumping from one zi to another in small             by a formula of the form
steps of δz = zi+1 − zi . In the limit as n goes to infinity                                  \infty
                                                                                             
and the steps δz go to zero we obtain a so-called path                             f (z) =         an (z − w)n ,
                                                                                             n=0
integral, which is denoted P f (z) dz.
                                                                   valid every where in that disk. This is called the Taylor
   The above argument has the consequence that if the
                                                                   expansion of f .
path P begins and ends at the same point u, then the
                                                                      Another fundamental property of holomorphic func-
path integral P f (z) dz is zero. Equivalently, if two
                                                                   tions, one that shows just how “rigid” they are, is that
paths P1 and P2 have the same starting point u and the
                                                                   their entire behavior is determined just by what they
same endpoint w, then the path integrals P1 f (z) dz
                                                                   do in a small region. That is, if f and g are holomor-
and P2 f (z) dz are the same, since they both give the
                                                                   phic and they take the same values in some tiny disk,
value F (w) − F (u).
                                                                   then they must take the same values every where. This
   Of course, in order to establish this, we made the
                                                                   remarkable fact allows a process of analytic continua-
big assumption that f was the derivative of a function
                                                                   tion. If it is difficult to define a holomorphic function
F . Cauchy’s theorem says that the same conclusion is
                                                                   f every where you want it defined, then you can sim-
true if f is holomorphic. That is, rather than requiring
                                                                   ply define it in some small region and say that else-
f to be the derivative of another function, it asks for
                                                                   where it takes the only possible values that are consis-
f itself to have a derivative. If that is the case, then
                                                                   tent with the ones that you have just specified. This is
any path integral of f depends only on where the path
                                                                   how the famous riemann zeta function [IV.2 §3](/part-04/number-theory) is
begins and ends. What is more, these path integrals
                                                                   conventionally defined.
can be used to define a function F that differentiates
                                                                      Finally, we mention a theorem of liouville [VI.39](/part-06/joseph-liouville-18091882),
to f , so a function with a derivative automatically has
                                                                   which states that if f is a holomorphic function defined
an antiderivative.
                                                                   on the whole complex plane, and if f is bounded (that
   It is not necessary for the function f to be defined
                                                                   is, if there is some constant C such that |f (z)| ⩽ C
on the whole of C for Cauchy’s theorem to be valid:
                                                                   for every complex number z), then f must be constant.
everything remains true if we restrict attention to a
                                                                   Once again, this is obviously false for real functions.
simply connected domain, which means an open set
                                                                   For example, the function sin(x) has no difficulty com-
[III.90](/part-03/topological-spaces) with no holes in it. If there are holes, then
                                                                   bining boundedness with very good behavior: it can be
two path integrals may differ if the paths go around
                                                                   expanded in a power series that converges every where.
the holes in different ways. Thus, path integrals have
                                                                   (However, if you use the power series to define an exten-
a close connection with the topology of subsets of
                                                                   sion of the function sin(x) to the complex plane, then
the plane, an observation that has many ramifications
                                                                   the function you obtain is unbounded, as Liouville’s
through out modern geometry. For more on topology,
                                                                   theorem predicts.)
see section 6.4 of this article and algebraic topology
[IV.6](/part-04/algebraic-topology).
                                                                                  6   What Is Geometry?
   A very surprising fact, which can be deduced from
Cauchy’s theorem, is that if f is holomorphic then it can          It is not easy to do justice to geometry in this arti-
be differentiated twice. (This is completely untrue of              cle because the fundamental concepts of the subject

$I$ . $3$ .

Some Fundamental Mathematical Definitions are either too simple to need explaining--for example, there is no need to say here what a circle, line, or plane is--or sufficiently advanced that they are better discussed in parts III and IV of the book. However, if you have not met the advanced concepts and have no idea what modern geometry is like, then you will get much more out of this book if you understand two basic ideas: the relationship between geometry and symmetry, and the notion of a manifold. These ideas will occupy us for the rest of the article.

$6$ . $1$

Geometry and Symmetry Groups

Broadly speaking, geometry is the part of mathematics that involves the sort of language that one would conventionally regard as geometrical, with words such as “point,” “line,” “plane,” “space,” “curve,” “sphere,” “cube,” “distance,” and “angle” playing a prominent role. However, there is a more sophisticated view, first advocated by klein [VI.57] , that regards transformations as the true subject matter of geometry. So, to the above list one should add words like “reflection,” “rotation,” “translation,” “stretch,” “shear,” and “projection,” together with slightly more nebulous concepts such as “angle-preserving map” or “continuous deformation.” As was discussed in section $2$ . $1$ , transformations go hand in hand with groups, and for this reason there is an intimate connection between geometry and group theory. Indeed, given any group of transformations, there is a corresponding notion of geometry, in which one studies the phenomena that are unaffected by transformations in that group. In particular, two shapes are regarded as equivalent if one can be turned into the other by means of one of the transformations in the group. Different groups will of course lead to different notions of equivalence, and for this reason mathematicians frequently talk about geometries, rather than about a single monolithic subject called geometry. This subsection contains brief descriptions of some of the most important geometries and their associated groups of transformations.

$6$ . $2$

Euclidean Geometry

Euclidean geometry is what most people would think of as “ordinary” geometry, and, not surprisingly given its name, it includes the basic theorems of Greek geometry that were the staple of geometers for over two millennia. For example, the theorem that the three

$39$

angles of a triangle add up to $180$ ◦ belongs to Euclidean geometry. To understand Euclidean geometry from a transformation al viewpoint, we need to say how many dimensions we are working in, and we must of course specify a group of transformations. The appropriate group is the group of rigid transformations. These can be thought of in two different ways. One is that they are the transformations of the plane, or of space, or more generally of R n for some n, that preserve distance. That is, T is a rigid transformation if, given any two points $x$ and $y$, the distance between T x and T y is always the same as the distance between $x$ and $y$. (In dimensions greater than $3$ , distance is defined in a way that naturally generalizes the Pythagorean formula. See metric spaces [III.56](/part-03/metric-spaces) for more details .) It turns out that every such transformation can be realized as a combination of rotations, reflections, and translations, and this gives us a more concrete way to think about the group. Euclidean geometry, in other words, is the study of concepts that do not change when you rotate, reflect, or translate, and these include points, lines, planes, circles, spheres, distance, angle, length, area, and volume. The rotations of R n form an important group, the special orthogonal group, known as SO (n) . The larger orthogonal group O (n) includes reflections as well. (It is not quite obvious how to define a “rotation” of n-dimensional space, but it is not too hard to do. An orthogonal map of R n is a linear map T that preserves distances, in the sense that d (T x, T y) is always the same as d (x , y). It is a rotation if its determinant [III.15](/part-03/determinants) is $1$ . The only other possibility for the determinant of a distance-preserving map is $- 1$ . Maps with determinant $- 1$ are like reflections in that they turn space “inside out . ”)

$6$ . $3$

Affine Geometry

There are many linear maps besides rotations and reflections. What happens if we enlarge our group from SO (n) or O (n) to include as many of them as possible? For a transformation to be part of a group it must be invertible and not all linear maps are, so the natural group to look at is the group GL n (R) of all invertible linear transformations of R n , a group that we first met in section $4$ . $2$ . These maps all leave the origin fixed, but if we want we can incorporate translations and consider a larger group that consists of all transformations of the form x   $\to$ T x $+$ b, where b is a fixed vector and T is an invertible linear map. The resulting geometry is called affine geometry.

$40$

Since linear maps include stretches and shears, they preserve neither distance nor angle, so these are not concepts of affine geometry. However, points, lines, and planes remain as points, lines, and planes after an invertible linear map and a translation, so these concepts do belong to affine geometry. Another affine concept is that of two lines being parallel. (That is, although angles in general are not preserved by linear maps, angles of zero are .) This means that although there is no such thing as a square or a rectangle in affine geometry, one can still talk about a parallelogram. Similarly, one cannot talk of circles but one can talk of ellipses, since a linear map transformation of an ellipse is another ellipse (provided that one regards a circle as a special kind of ellipse).

$6$ . $4$

Topology

The idea that the geometry associated with a group of transformations “studies the concepts that are preserved by all the transformations” can be made more precise using the notion of equivalence relations [I.2](/part-01/language-and-grammar). Indeed, let $G$ be a group of transformations of R n . We might think of an n-dimensional “shape” as being a subset S of R n , but if we are doing G-geometry, then we do not want to distinguish between a set S and any other set we can obtain from it using a transformation in G. So in that case we say that the two shapes are equivalent. For example, two shapes are equivalent in Euclidean geometry if and only if they are congruent in the usual sense, whereas in two-dimensional affine geometry all parallelograms are equivalent, as are all ellipses. One can think of the basic objects of G-geometry as equivalence classes of shapes rather than the shapes themselves. Topology can be thought of as the geometry that arises when we use a particularly generous notion of equivalence, saying that two shapes are equivalent, or homeomorphic, to use the technical term, if each can be “continuously deformed” into the other. For example, a sphere and a cube are equivalent in this sense, as figure $1$ illustrates. Because there are very many continuous deformations, it is quite hard to prove that two shapes are not equivalent in this sense. For example, it may seem obvious that a sphere (this means the surface of a ball rather than the solid ball) cannot be continuously deformed into a torus (the shape of the surface of a doughnut of the kind that has a hole in it) , since they are fundamentally different shapes--one has a “hole” and the other does not. However, it is not easy to turn this intuition into a rigorous argument. For more on this kind of problem, see invariants [I.4](/part-01/general-goals), algebraic topology [IV.6](/part-04/algebraic-topology), and differential topology [IV.7](/part-04/dierential-topology).

$6$ . $5$

Spherical Geometry

We have been steadily relaxing our requirements for two shapes to be equivalent, by allowing more and more transformations. Now let us tighten up again and look at spherical geometry. Here the universe is no longer R n but the n-dimensional sphere S n , which is defined to be the surface of the (n $+ 1$ ) - dimensional ball of radius $1$ , or, to put it more algebraically, the set of all points $(x^{1}$ , $x^{2}$ , . . . , $x^{n} + {}^{1})$ in $R^{n} + {}^{1}$ such that

$2(x^{1})^{2} + (x^{2})^{2} +$ · · · $+ x^{n} + {}^{1} = 1$ . Just as the surface of a three-dimensional ball is two dimensional, so this set is n dimensional. We shall discuss the case $n = 2$ here, but it is easy to generalize the discussion to larger n. The appropriate group of transformations is SO ( $3$ ) : the group that consists of all rotations about axes that go through the origin. (One could allow reflections as well and take O ( $3$ ).) These are symmetries of the sphere $S^{2}$ , and that is how we regard them in spherical geometry, rather than as transformations of the whole of $R^{3}$ . Among the concepts that make sense in spherical geometry are line, distance, and angle. It may seem odd to talk about a line if one is confined to the surface of a ball, but a “spherical line” is not a line in the usual sense. Rather, it is a subset of $S^{2}$ obtained by intersecting $S^{2}$ with a plane through the origin. This produces a great circle, that is, a circle of radius $1$ , which is as large as it can be given that it lives inside a sphere of radius $1$ . The reason that a great circle deserves to be thought of as some sort of line is that the shortest path between any two points $x$ and $y$ in $S^{2}$ will always be along a great circle, provided that the path is confined to $S^{2}$ . This is a very natural restriction to make, since we are regarding $S^{2}$ as our “universe.” It is also a restriction of some practical relevance, since the shortest sensible route between two distant points on Earth’s surface will

I.3.   Some Fundamental Mathematical Definitions                                                                       41

not be the straight-line route that burrows hundreds of       ad − bc equal to 1. (These form a group because the
miles under ground.                                            product of two matrices with determinant 1 again has
   The distance between two points x and y is defined          determinant 1.) To make this “projective,” one then
to be the length of the shortest path from x to y that        regards each matrix A as equivalent to −A: for example,
                                                                                3 −1        −3 1
lies entirely in S 2 . (If x and y are opposite each other,   the matrices ( −5    2 ) and ( 5 −2 ) are equivalent.
then there are infinitely many shortest paths, all of             To get from this group to the geometry one must first
length π , so the distance between x and y is π .) How        interpret it as a group of transformations of some two-
about the angle between two spherical lines? Well, the        dimensional set of points. Once we have done this, we
lines are intersections of S 2 with two planes, so one can    have what is called a model of two-dimensional hyper-
define it to be the angle between these two planes in          bolic geometry. The subtlety is that there is no single
the Euclidean sense. A more aesthetically pleasing way        model of hyperbolic geometry that is clearly the most
to view this, because it does not involve ideas exter-        natural in the way that the sphere is the most natural
nal to the sphere, is to notice that if you look at a very    model of spherical geometry. (One might think that the
small region about one of the two points where two            sphere was the only sensible model of spherical geom-
spherical lines cross, then that portion of the sphere        etry, but this is not in fact the case. For example, there
will be almost flat, and the lines almost straight. So you     is a natural way of associating with each rotation of R3
can define the angle to be the usual angle between the         a transformation of R2 with a “point at infinity” added,
“limiting” straight lines inside the “limiting” plane.        so the extended plane can be used as a model of spher-
   Spherical geometry differs from Euclidean geometry          ical geometry.) The three most commonly used models
in several interesting ways. For example, the angles of       of hyperbolic geometry are called the half-plane model,
a spherical triangle always add up to more than 180◦ .        the disk model, and the hyperboloid model.
Indeed, if you take as the vertices the North Pole, a point      The half-plane model is the one most directly asso-
on the equator, and a second point a quarter of the way       ciated with the group PSL2 (R). The set in question is
around the equator from the first, then you obtain a           the upper half-plane of the complex numbers C, that
triangle with three right angles. The smaller a triangle,     is, the set of all complex numbers z = x + iy such that
the flatter it becomes, and so the closer the sum of its       y > 0. Given a matrix ( ac d b
                                                                                             ), the corresponding trans-
angles comes to 180◦ . There is a beautiful theorem that      formation is the one that takes the point z to the point
gives a precise expression to this: if we switch to radi-     (az + b)/(cz + d). (Notice that if we replace a, b, c,
ans, and if we have a spherical triangle with angles α,       and d by their negatives, then we get the same trans-
β, and γ, then its area is α + β + γ − π . (For example,      formation.) The condition ad − bc = 1 can be used
this formula tells us that the triangle with three angles     to show that the transformed point will still lie in the
of 12 π has area 12 π , which indeed it does as the sur-      upper half-plane, and also that the transformation can
face area of a ball of radius 1 is 4π and this triangle       be inverted.
occupies one-eighth of the surface.)                             What this does not yet do is tell us anything about dis-
                                                              tances, and it is here that we need the group to “gener-
6.6    Hyperbolic Geometry                                    ate” the geometry. If we are to have a notion of distance
                                                              d that is sensible from the perspective of our group
So far, the idea of defining geometries with refer-            of transformations, then it is important that the trans-
ence to sets of transformations may look like nothing         formations should preserve it. That is, if T is one of
more than a useful way to view the subject, a unified          the transformations and z and w are two points in the
approach to what would otherwise be rather different-          upper half-plane, then d(T (z), T (w)) should always be
looking aspects. However, when it comes to hyperbolic         the same as d(z, w). It turns out that there is essentially
geometry, the transformation al approach becomes in-           only one definition of distance that has this property,
dis pens able, for reasons that will be explained in a          and that is the sense in which the group defines the
moment.                                                       geometry. (One could of course multiply all distances
   The group of transformations that produces hyper-          by some constant factor such as 3, but this would be
bolic geometry is called PSL2 (R), the projective special     like measuring distances in feet instead of yards, rather
linear group in two dimensions. One way to present this       than a genuine difference in the geometry.)
group is as follows. The special linear group SL2 (R) is         This distance has some properties that at first seem
the set of all matrices ( ac d
                             b
                               ) with determinant [III.15](/part-03/determinants)    odd. For example, a typical hyperbolic line takes the

$42$

form of a semicircular arc with endpoints on the real axis. However, it is semicircular only from the point of view of the Euclidean geometry of C : from a hyperbolic perspective it would be just as odd to regard a Euclidean straight line as straight. The reason for the discrepancy is that hyperbolic distances become larger and larger, relative to Euclidean ones, the closer you get to the real axis. To get from a point z to another point w, it is therefore shorter to take a “detour” away from the real axis, and the best detour turns out to be along an arc of the circle that goes through $z$ and $w$ and cuts the real axis at right angles. (If $z$ and $w$ are on the same vertical line, then one obtains a “degenerate circle,” namely that vertical line .) These facts are no more paradoxical than the fact that a flat map of the world involves distortions of spherical geometry, making Greenland very large, for example. The half-plane model is like a “map” of a geometric structure, the hyperbolic plane, that in reality has a very different shape. One of the most famous properties of two-dimensional hyperbolic geometry is that it provides a geometry in which Euclid’s parallel postulate fails to hold. That is, it is possible to have a hyperbolic line L, a point x not on the line, and two different hyperbolic lines through x, neither of which meets L. All the other axioms of Euclidean geometry are, when suitably interpreted, true of hyperbolic geometry as well. It follows that the parallel postulate cannot be deduced from those axioms. This discovery, associated with gauss [VI.26](/part-06/carl-friedrich-gauss-17771855), bolyai [VI.34] , and lobachevskii [VI.31](/part-06/nicolai-ivanovich-lobachevskii-17921856), solved a problem that had bothered mathematicians for over two thousand years. Another property complements the result about the angle sums of spherical and Euclidean triangles. There is a natural notion of hyperbolic area, and the area of a hyperbolic triangle with angles α, β, and γ$is$\pi - α -β - γ. Thus, in the hyperbolic plane $α + β + γ$ is always less than $\pi$ , and it almost equals $\pi$ when the triangle is very small. These properties of angle sums reflect the fact that the sphere has positive curvature [III.13](/part-03/curvature), the Euclidean plane is “flat,” and the hyperbolic plane has negative curvature. The disk model, conceived in a famous moment of inspiration by poincaré [VI.61](/part-06/jules-henri-poincar-18541912) as he was getting into a bus, takes as its set of points the open unit disk in C , that is, the set D of all complex numbers with modulus less than $1$ . This time, a typical transformation takes the following form. One takes a real number $\theta,$ and a complex number a from inside D, and sends each $z$ in $D$ to the point $ei\theta(z - a)/(1 - a$ ̄  z). It is not

I. Introduction

Figure $2$ A tessellation of the hyperbolic disk. completely obvious that these transformations form a group, and still less that the group is isomorphic to PS$L^{2}$ (R). However, it turns out that the function that takes $z$ to $- (iz + 1)/(z + i)$ maps the unit disk to the upper half-plane and vice versa. This shows that the two models give the same geometry and can be used to transfer results from one to the other. As with the half-plane model, distances become larger, relative to Euclidean distances, as you approach the boundary of the disk: from a hyperbolic perspective, the diameter of the disk is infinite and it does not really have a boundary. Figure $2$ shows a tessellation of the disk by shapes that are congruent in the sense that any one can be turned into any other by means of a transformation from the group. Thus, even though they do not look identical, within hyperbolic geometry they all have the same size and shape. Straight lines in the disk model are either arcs of (Euclidean) circles that meet the unit circle at right angles, or segments of (Euclidean) straight lines that pass through the center of the disk. The hyperboloid model is the model that explains why the geometry is called hyperbolic. This time the set is the hyperboloid consisting of all points (x , y, z) $\inR^{3}$ such that $z > 0$ and $x^{2} + y^{2} + 1 = z^{2}$ . This is the hyperboloid of revolution about the z-axis of the hyperbola $x^{2} + 1 = z^{2}$ in the plane $y = 0$ . $A$ general transformation in the group is a sort of “rotation” of the hyperboloid, and can be built up from genuine rotations about the zaxis, and “hyperbolic rotations” of the xz-plane, which have matrices of the form cosh $\theta$ sinh $\theta$ . sinh $\theta$ cosh $\theta$ Just as an ordinary rotation preserves the unit circle, one of these hyperbolic rotations preserves the hyperbola $x^{2} + 1 = z^{2}$ , moving points around inside it. Again, it is not quite obvious that this gives the same group

I.3.   Some Fundamental Mathematical Definitions                                                                           43

of transformations, but it does, and the hyperboloid             plane to itself. If one invertible linear map is a multiple
model is equivalent to the other two.                            of another, then they will have the same effect on all
                                                                 lines, so the resulting group of transformations is like
6.7    Projective Geometry                                       GL3 (R), except that all nonzero multiples of any given
                                                                 matrix are regarded as equivalent. This group is called
Projective geometry is regarded by many as an old-fash-
                                                                 the projective special linear group PSL3 (R), and it is
ioned subject, and it is no longer taught in schools, but
                                                                 the three-dimensional equivalent of PSL2 (R), which we
it still has an important role to play in modern mathe-
                                                                 have already met. Since PSL3 (R) is bigger than PSL2 (R),
matics. We shall concentrate here on the real projective
                                                                 the projective plane comes with a richer set of transfor-
plane, but projective geometry is possible in any num-
                                                                 mations than the hyperbolic plane, which is why fewer
ber of dimensions and with scalars in any field. This
                                                                 geometrical properties are preserved. (For example, we
makes it particularly useful to algebraic geometers.
                                                                 have seen that there is a useful notion of hyperbolic
   Here are two ways of regarding the projective plane.
                                                                 distance, but there is no obvious notion of projective
The first is that the set of points is the ordinary plane,
                                                                 distance.)
together with a “line at infinity.” The group of transfor-
mations consists of functions known as projections. To
                                                                 6.8    Lorentz Geometry
understand what a projection is, imagine two planes P
and P in space, and a point x that is not in either of           This is a geometry used in the theory of special rel-
them. We can “project” P onto P as follows. If a is a            ativity to model four-dimensional spacetime, other-
point in P, then its image φ(a) is the point where the           wise known as Minkowski space. The main difference
line joining x to a meets P . (If this line is parallel to P ,   between it and four-dimensional Euclidean geometry is
then φ(a) is a point on the line at infinity of P .) Thus,        that, instead of the usual notion of distance between
if you are at x and a picture is drawn on the plane P,           two points (t, x, y, z) and (t , x , y , z ), one considers
then its image under the projection φ will be the picture        the quantity
drawn on P that to you looks exactly the same. In fact,
                                                                       −(t − t )2 + (x − x )2 + (y − y )2 + (z − z )2 ,
however, it will have been distorted, so the transforma-
tion φ has made a difference to the shape. To turn φ              which would be the square of the Euclidean distance
into a transformation of P itself, one can follow it by a        were it not for the all-important minus sign before
rigid transformation that moves P back to where P is.            (t − t )2 . This reflects the fact that space and time are
   Such projections clearly do not preserve distances,           significantly different (though intertwined).
but they do preserve other interesting concepts, such               A Lorentz transformation is a linear map from R4 to
                                                                   4
                                                                 R that preserves these “generalized distances.” Let-
as points, lines, quantities known as cross-ratios, and,
most famously, conic sections. A conic section is the            ting g be the linear map that sends (t, x, y, z) to
intersection of a plane with a cone, and it can be a circle,     (−t, x, y, z) and letting G be the corresponding matrix
an ellipse, a parabola, or a hyperbola. From the point of        (which has −1, 1, 1, 1 down the diagonal and 0 every-
view of projective geometry, these are all the same kind         where else), we can define a Lorentz transformation
of object (just as, in affine geometry, one can talk about         abstractly as one whose matrix Λ satisfies ΛT GΛ = G,
ellipses but there is no special ellipse called a circle).       where I is the 4 \times 4 identity matrix and ΛT is the trans-
   A second view of the projective plane is that it is the       pose of Λ. (The transpose of a matrix A is the matrix B
set of all lines in R3 that go through the origin. Since a       defined by Bij = Aji .)
line is determined by the two points where it intersects            A point (t, x, y, z) is said to be spacelike if −t 2 +
the unit sphere, one can regard this set as a sphere, but        x + y 2 + z 2 > 0, and timelike if −t 2 + x 2 + y 2 +
                                                                   2

with the significant difference that opposite points are           z2 < 0. If −t 2 + x 2 + y 2 + z2 = 0, then the point
regarded as the same—because they correspond to the              lies in the light cone. All these are genuine concepts
same line.                                                       of Lorentzian geometry because they are preserved by
   Under this view, a typical transformation of the pro-         Lorentz transformations.
jective plane is obtained as follows. Take any invertible           Lorentzian geometry is also of fundamental impor-
linear map, and apply it to R3 . This takes lines through        tance to general relativity, which can be thought of as
the origin to lines through the origin, and can there-           the study of Lorentzian manifolds. These are closely
fore be thought of as a function from the projective             related to Riemannian manifolds, which are discussed

$44$

in section $6$ . $10$ . For a discussion of general relativity, see general relativity and the einstein equations [IV.13](/part-04/general-relativity-and-the-einstein-equations).

$6$ . $9$

Manifolds and Differential Geometry

To somebody who has not been taught otherwise, it is natural to think that Earth is flat, or rather that it consists of a flat surface on top of which there are buildings, mountains, and so on. However, we now know that it is in fact more like a sphere, appearing to be flat only because it is so large. There are various kinds of evidence for this. One is that if you stand on a cliff by the sea then you can see a definite horizon, not too far away, over which ships disappear. This would be hard to explain if Earth were genuinely flat. Another is that if you travel far enough in what feels like a straight line then you eventually get back to where you started. A third is that if you travel along a triangular route and the triangle is a large one, then you will be able to detect that its three angles add up to more than $180$ ◦ . It is also very natural to believe that the geometry that best models that of the universe is three-dimensional Euclidean geometry, or what one might think of as “normal” geometry. However, this could be just as much of a mistake as believing that two-dimensional Euclidean geometry is the best model for Earth’s surface. Indeed, one can immediately improve on it by considering Lorentzian geometry as a model of spacetime, but even if there were no theory of special relativity, our astronomical observations would give us no particular reason to suppose that Euclidean geometry was the best model for the universe. Why should we be so sure that we would not obtain a better model by taking the three-dimensional surface of a very large fourdimensional ball? This might feel like “normal” space in just the way that the surface of Earth feels like a “normal” plane unless you travel large distances. Perhaps if you traveled far enough in a rocket without changing your course then you would end up where you started. It is easy to describe “normal” space mathematically: one just associates with each point in space a triple of coordinates (x , y, z) in the usual way. How might we describe a huge “spherical” space? It is slightly harder, but not much: one can give each point four coordinates (x , y, z, w) but add the condition that these must satisfy the equation $x^{2} + y^{2} + z^{2} + w^{2} = R^{2}$ for some fixed R that we think of as the “radius” of the universe. This describes the three-dimensional surface of a four-dimensional ball of radius R in just the same

I. Introduction

way that the equation $x^{2} + y^{2} + z^{2} = R^{2}$ describes the two-dimensional surface of a three-dimensional ball of radius R. A possible objection to this approach is that it seems to rely on the rather implausible idea that the universe lives in some larger unobserved four-dimensional space. However, this objection can be answered. The object we have just defined, the $3$ - sphere $S^{3}$ , can also be described in what is known as an intrinsic way: that is, without reference to some surrounding space. The easiest way to see this is to discuss the $2$ - sphere first, in order to draw an analogy. Let us therefore imagine a planet covered with calm water. If you drop a large rock into the water at the North Pole, a wave will propagate out in a circle of everincreasing radius. (At any one moment, it will be a circle of constant latitude .) In due course, however, this circle will reach the equator, after which it will start to shrink, until eventually the whole wave reaches the South Pole at once, in a sudden burst of energy. Now imagine setting off a three-dimensional wave in space--it could, for example, be a light wave caused by the switching on of a bright light. The front of this wave would now be not a circle but an everexpanding spherical surface. It is logically possible that this surface could expand until it became very large and then contract again, not by shrinking back to where it started, but by turning itself inside out, so to speak, and shrinking to another point on the opposite side of the universe. (Notice that in the two-dimensional example, what you want to call the inside of the circle changes when the circle passes the equator .) With a bit of effort, one can visualize this possibility, and there is no need to appeal to the existence of a fourth dimension in order to do so. More to the point, this account can be turned into a mathematically coherent and genuinely three-dimensional description of the $3$ - sphere . A different and more general approach is to use what is called an atlas. An atlas of the world (in the normal, everyday sense) consists of a number of flat pages, together with an indication of their overlaps: that is, of how parts of some pages correspond to parts of others. Now, although such an atlas is mapping out an external object that lives in a three-dimensional universe, the spherical geometry of Earth’s surface can be read off from the atlas alone. It may be much less convenient to do this but it is possible: rotations, for example, might be described by saying that such-and-such a

I.3.   Some Fundamental Mathematical Definitions                                                                     45

part of page 17 moved to a similar but slightly distorted    one wishes to reason about manifolds in general rather
part of page 24, and so on.                                  than discussing specific examples. For the purposes of
   Not only is this possible, but one can define a sur-       this book, it may be better to think of a d-manifold
face by means of two-dimensional atlases. For example,       in the “extrinsic” way that we first thought about
there is a mathematically neat “atlas” of the 2-sphere       the 3-sphere: as a d-dimensional “hypersurface” living
that consists of just two pages, both of them circular.      in some higher-dimensional space. Indeed, there is a
One is a map of the Northern Hemisphere plus a lit-          famous theorem of Nash that states that all manifolds
tle bit of the Southern Hemisphere near the equator (to      arise in this way. Note, however, that it is not always
provide a small overlap) and the other is a map of the       easy to find a simple formula for defining such a hyper-
Southern Hemisphere with a bit of the Northern Hemi-         surface. For example, while the 2-sphere is described by
sphere. Because these maps are flat, they necessarily         the simple formula x 2 +y 2 +z 2 = 1 and the torus by the
involve some distortion, but one can specify what this       slightly more complicated and more artificial   formula
distortion is.                                               (r − 2)2 + z2 = 1, where r is shorthand for x 2 + y 2 , it
   The idea of an atlas can easily be generalized to three   is not easy to come up with a formula that describes a
dimensions. A “page” now becomes a portion of three-         two-holed torus. Even the usual torus is far more easily
dimensional space. The technical term is not “page” but      described using quotients, as we did in section 3.3. Quo-
“chart,” and a three-dimensional atlas is a collection of    tients can also be used to define a two-holed torus (see
charts, again with specifications of which parts of one       fuchsian groups [III.28](/part-03/fuchsian-groups)), and the reason one is con-
chart correspond to which parts of another. A possible       fident that the result is a manifold is that every point
atlas of the 3-sphere, generalizing the simple atlas of      has a small neighborhood that looks like a small part of
the 2-sphere just discussed, consists of two solid three-    the Euclidean plane. In general, a d-dimensional man-
dimensional balls. There is a correspondence between         ifold can be thought of as any construction that gives
points toward the edge of one of these balls and points      rise to an object that is “locally like Euclidean space of
toward the edge of the other, and this can be used to        d dimensions.”
describe the geometry: as you travel toward the edge            An extremely important feature of manifolds is that
of one ball you find yourself in the overlapping region,      calculus is possible for functions defined on them.
so you are also in the other ball. As you go further, you    Roughly speaking, if M is a manifold and f is a function
are off the map as far as the first ball is concerned, but     from M to R, then to see whether f is differentiable at a
the second ball has by that stage taken over.                point x in M you first find a chart that contains x (or a
   The 2-sphere and the 3-sphere are basic examples of       representation of it), and regard f as a function defined
manifolds. Other examples that we have already met           on the chart instead. Since the chart is a portion of the
in this section are the torus and the projective plane.      d-dimensional Euclidean space Rd and we can differ-
Informally, a d-dimensional manifold, or d-manifold, is      entiate functions defined on such sets, the notion of
any geometrical object M with the property that every        different i ability now makes sense for f . Of course, for
point x in M is surrounded by what feels like a portion      this definition to work for the manifold, it is important
of d-dimensional Euclidean space. So, because small          that if x belongs to two overlapping charts, then the
parts of a sphere, torus, or projective plane are very       answer will be the same for both. This is guaranteed
close to planar, they are all 2-manifolds, though when       if the function that gives the correspondence between
the dimension is two the word surface is more usual.         the overlapping parts (known as a transition function)
(However, it is important to remember that a “surface”       is itself differentiable. Manifolds with this property are
need not be the surface of anything.) Similarly, the         called differentiable manifolds: manifolds for which the
3-sphere is a 3-manifold.                                    transition functions are continuous but not necessar-
   The formal definition of a manifold uses the idea          ily differentiable are called topological manifolds. The
of atlases: indeed, one says that the atlas is a mani-       availability of calculus makes the theory of differen-
fold. This is a typical mathematician’s use of the word      tiable manifolds very different from that of topological
“is,” and it should not be confused with the normal          manifolds.
use. In practice, it is unusual to think of a manifold          The above ideas generalize easily from real-valued
as a collection of charts with rules for how parts of        functions to functions from M to Rd , or from M to
them correspond, but the definition in terms of charts        M , where M is another manifold. However, it is eas-
and atlases turns out to be the most convenient when         ier to judge whether a function defined on a manifold

$46$

is differentiable than it is to say what the derivative is. The derivative at some point x of a function from R n to R m is a linear map, and so is the derivative of a function defined on a manifold. However, the domain of the linear map is not the manifold itself, which is not usually a vector space, but rather the so-called tangent space at the point x in question. For more details on this and on manifolds in general, see differential topology [IV.7](/part-04/dierential-topology).

$6$ . $10$

Riemannian Metrics

Suppose you are given two points P and Q on a sphere. How do you determine the distance between them? The answer depends on how the sphere is defined. If it is the set of all points (x ,  y, z) such that $x^{2} + y^{2} + z^{2} = 1$ then P and Q are points in $R^{3}$ . One can therefore use the Pythagorean theorem to calculate the distance between them. For example, the distance between the points √ (1, 0, 0) and (0, 1, 0) is $2$ . However, do we really want to measure the length of the line segment PQ ? This segment does not lie in the sphere itself, so to use it as a means of defining length does not sit at all well with the idea of a manifold as an intrinsically defined object. Fortunately, as we saw earlier in the discussion of spherical geometry, there is another natural definition that avoids this problem: we can define the distance between P and Q as the length of the shortest path from P to Q that lies entirely within the sphere. Now let us suppose that we wish to talk more generally about distances between points in manifolds. If the manifold is presented to us as a hypersurface in some bigger space, then we can use lengths of shortest paths as we did in the sphere. But suppose that the manifold is presented differently and all we have is a way of demonstrating that every point is contained in a chart-- that is, has a neighborhood that can be associated with a portion of d-dimensional Euclidean space. (For the purposes of this discussion, nothing is lost if one takes d to be $2$ through out, in which case there is a correspondence between the neighborhood and a portion of the plane .) One idea is to define the distance between the two points to be the distance between the corresponding points in the chart, but this raises at least three problems. The first is that the points P and Q that we are looking at might belong to different charts. This, however, is not too much of a problem, since all we actually need to do is calculate lengths of paths, and that can be done

I. Introduction

provided we have a way of defining distances between points that are very close together, in which case we can find a single chart that contains them both. The second problem, which is much more serious, is that for any one manifold there are many ways of choosing the charts, so this idea does not lead to a single notion of distance for the manifold. Worse still, even if one fixes one set of charts, these charts will overlap, and it may not be possible to make the notions of distance compatible where the overlap occurs. The third problem is related to the second. The surface of a sphere is curved, whereas the charts of any atlas (in either the everyday or the mathematical sense) are flat. Therefore, the distances in the charts cannot correspond exactly to the lengths of shortest paths in the sphere itself. The single most important moral to draw from the above problems is that if we wish to define a notion of distance for a given manifold, we have a great deal of choice about how to do so. Very roughly, a Riemannian metric is a way of making such a choice. A little less roughly, a metric means a sensible notion of distance (the precise definition can be found in [III.56](/part-03/metric-spaces)) . A Riemannian metric is a way of determining infinitesimal distances. These infinitesimal distances can be used to calculate lengths of paths, and then the distance between two points can be defined as the length of the shortest path between them. To see how this is done, let us first think about lengths of paths in the ordinary Euclidean plane. Suppose that (x , y) belongs to a path and (x  +  δx, y  +  δ y) is another point on the path, very close to (x , y). Then the distance between the two points is $δx^{2} + δy^{2}$ . To calculate the length of a sufficiently smooth path, one can choose a large number of points along the path, each one very close to the next, and add up their distances. This gives a good approximation, and one can make it better and better by taking more and more points. In practice, it is easier to work out the length using calculus. A path itself can be thought of as a moving point (x (t), y (t)) that starts when t $= 0$ and ends when $t = 1$ . If δt is very small, then $x(t + δt)$ is approximately x (t)  +  x (t) δ $t$ and $y(t + δ t)$ is approximately y (t)  +  y (t) δ t . Therefore, the distance between and (x (t  +  δ t)$, y (t + δ t)) \text{is approxi}(x (t)$, y (t)) mately $δt x (t)^{2} + y (t)^{2}$ , by the Pythagorean theorem. Therefore, letting δt go to zero and integrating all the infinitesimal distances along the path, we obtain the formul$a^{1}x (t)^{2} + y (t)^{2}dt0$
