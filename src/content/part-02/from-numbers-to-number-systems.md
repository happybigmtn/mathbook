# From Numbers to Number Systems

                                                                                                 Part II
                                              The Origins of
                                         Modern Mathematics

                                                               problems, provided with either answers or brief solu-
II.1 From Numbers to                                           tions: twenty-five problems about digging trenches in
     Number Systems                                            one tablet, twelve problems requiring the solution of
                                                               a linear equation in another, problems about squares
       Fernando Q. Gouvêa
                                                               and their sides in a third.
People have been writing numbers down for as long as              Numbers were used both for counting and for mea-
they have been writing. In every civilization that has         suring, so a need for fractional numbers must have
                                                               come up fairly early. Fractions are complicated to write
developed a way of recording information, we also find
                                                               down, and computing with them can be difficult. Hence,
a way of recording numbers. Some scholars even argue
                                                               the problem of “broken numbers” may well have been
that numbers came first.
                                                               the first really challenging mathematical problem. How
  It is fairly clear that numbers first arose as adjectives:
                                                               does one write down fractions? The Egyptians and
they specified how many or how much of something
                                                               the Mesopotamians came up with strikingly different
there was. Thus, it was possible to talk about three
                                                               answers, both of which are also quite different from
apricots, say, long before it was possible to talk about
                                                               the way we write them today.
the number 3. But once the concept of “threeness” is
                                                                  In Egypt (and later in Greece and much of the Mediter-
on the table, so that the same adjective specifies three
                                                               ranean world), the fundamental notion was “the nth
fish and three horses, and once a written symbol such
                                                               part,” as in “the third part of six is two.” In this lan-
as “3” is developed that can be used in all of those
                                                               guage, one would express the idea of dividing 7 by 3
instances, the conditions exist for 3 itself to emerge
                                                               as, “What is the third part of seven?” The answer is,
as an independent entity. Once it does, we are doing
                                                               “Two and the third.” The process was complicated by an
mathematics.
                                                               additional restriction: one never recorded a final result
  This process seems to have repeated itself many
                                                               using more than one of the same kind of part. Thus, the
times when new kinds of numbers have been intro-
                                                               number we would want to express as “two fifth parts”
duced: first a number is used, then it is represented
                                                               would have to be given as “the third and the fifteenth.”
symbolically, and finally it comes to be conceived as a
                                                                  In Mesopotamia, we find a very different idea, which
thing in itself and as part of a system of similar entities.
                                                               may have arisen to allow easy conversion between dif-
                                                               ferent kinds of units. First of all, the Babylonians had a
        1   Numbers in Early Mathematics
                                                               way to generate symbols for all the numbers from 1 to
The earliest mathematical documents we know about              59. For larger numbers, they used a positional system
go back to the civilizations of the ancient Middle East,       much like the one we use today, but based on 60 rather
in Egypt and in Mesopotamia. In both cultures, a scribal       than 10. So something like 1, 20 means one sixty and
class developed. Scribes were responsible for keeping          twenty units, that is, 1 . imes 60 + 20 = 80. The same system
records, which often required them to do arithmetic            was then extended to fractions, so that one half was
and solve simple mathematical problems. Most of the            represented as thirty sixtieths. It is convenient to mark
mathematical documents we have from those cultures             the beginning of the fractional part with a semicolon,
seem to have been created for the use of young scribes         though this and the comma are a modern convention
learning their craft. Many of them are collections of          that has no counterpart in the original texts. Then, for

78                                                                               II. The Origins of Modern Mathematics

example, 1;24,36 means 1 + 24         36
                                 60 + 602 , which we would      and numbers are conceptually distinct things (though
                         141
more usually write as 100 , or 1.41. The Mesopotamian           this was important too). The Greeks had found a proof
way of writing numbers is called a sexagesimal place-           that one cannot use numbers to represent lengths.
value system by analogy with the system we use today,              Suppose, they argued, you have two line segments.
which is, of course, a decimal place-value system.              If their lengths are both given by numbers, then those
   Neither of these systems is really equipped to deal          numbers will at worst involve some fractions. By chang-
well with complicated numbers. In Mesopotamia, for              ing the unit of length, then, we can make sure that both
example, only finite sexagesimal expressions were em-            of the lengths correspond to whole numbers. In other
ployed, so the scribes were not able to write down an           words, it must be possible to choose a unit length so
exact value for the reciprocal of 7 because there is no         that each of our segments consists of a whole number
finite sexagesimal expression for 17 . In practice, this         multiple of the unit. The two segments, then, could be
meant that to divide by 7 required finding an approxi-           “measured together,” i.e., would be “commensurable.”
mate answer. The Egyptian “parts” system, on the other             Now here’s the catch: the Greeks could prove that this
hand, can represent any positive rational number, but           was not always the case. Their standard example had to
doing so may require a sequence of denominators that            do with the side and the diagonal of a square. We do not
to our eyes looks very complicated. One of the sur-             know exactly how they first established that these two
viving papyri includes problems that look designed to           segments are not commensurable, but it might have
produce just such complicated answers. One of these             been something like this: if you subtract the side from
answers is “14, the 4 th, the 56 th, the 97 th, the 194 th,         the diagonal, you will get a segment shorter than either
the 388 th, the 679 th, the 776 th,” which in modern nota-         of them; if both side and diagonal are measured by a
tion is the fraction 14 28
                        97 . It seems that the joy of com-      common unit, then so is the difference. Now repeat the
putation for its own sake became well-established very          argument: take the remainder and subtract it from the
early in the development of mathematics.                        side until we get a second remainder smaller than the
   Mediterranean civilizations preserved both of these          first (it can be subtracted twice, in fact). The second
systems for a while. Most everyday numbers were spec-           remainder will also be measured by the common unit.
ified using the system of “parts.” On the other hand,            It turns out to be quite easy to show that this process
astronomy and navigation required more precision, so            will never terminate; instead, it will produce smaller and
the sexagesimal system was used in those fields. This            smaller remainder segments. Eventually, the remainder
included measuring time and angles. The fact that we            segment will be smaller than the unit that supposedly
still divide an hour into sixty minutes and a minute into       measures it a whole number of times. That is impossi-
sixty seconds goes back, via the Greek astronomers,             ble (no whole number is smaller than 1, after all), and
to the Babylonian sexagesimal fractions; almost four            hence we can conclude that the common unit does not,
thousand years later, we are still influenced by the             in fact, exist.
Babylonian scribes.                                                Of course, the diagonal does in fact have a length.
                                                                Today, we would say that if the length of the side is
           2   Lengths Are Not Numbers                                                                           √
                                                                one unit, then the length of the diagonal is 2 units,
Things get more complicated with the mathematics                and we would interpret this argument as showing that
                                                                               √
of classical Greek and Hellenistic civilizations. The           the number 2 is not a fraction. The Greeks did not
                                                                                          √
Greeks, of course, are famous for coming up with                quite see in what sense 2 could be a number. Instead,
the first mathematical proofs. They were the first to             it was a length, or, even better, the ratio between the
attempt to do mathematics in a rigorously deductive             length of the diagonal and the length of the side. Sim-
way, using clear initial assumptions and careful state-         ilar arguments could be applied to other lengths; for
ments. This, perhaps, is what led them to be very               example, they knew that the side of a square of area 1
careful about numbers and their relations to other              and a square of area 10 are incommensurable.
magnitudes.                                                        The conclusion, then, is that lengths are not numbers:
  Sometime before the fourth century b.c.e., the Greeks         instead, they are some other kind of magnitude. But
made the fundamental discovery of “incommensurable              now we are faced with a proliferation of magnitudes:
magnitudes.” That is, they discovered that it is not            numbers, lengths, areas, angles, volumes, etc. Each of
always possible to express two given lengths as (inte-          these must be taken as a different kind of quantity, not
ger) multiples of a third length. It is not just that lengths   comparable with the others.

$II$ . $1$ .

From Numbers to Number Systems

This is a problem for geometry, particularly if we want to measure things. The Greeks solved this problem by relying heavily on the notion of a ratio. Two quantities of the same type have a ratio, and this ratio was allowed to be equal to the ratio of two quantities of another type: equality of two ratios was defined using Eudoxus’s theory of proportion, the latter being one of the most important and deep ideas of Greek geometry.
So, for example, rather than talking about a number called $\pi$ , which to them would not be a number at all, they would say that “the ratio of the circle to the square on its radius is the same as the ratio of the circumference to the diameter.” Notice that one of the two ratios is between two areas, the other between two lengths. The number $\pi$ itself had no name in Greek mathematics, but the Greeks did compare it with ratios between numbers:
archimedes [VI.3](/part-06/archimedes-ca) showed that it was just a little bit less than the ratio of $22$ to $7$ and just a little bit more than the ratio of $223$ to $71$ . Doing things this way seems ungainly to us, but it worked very well. Further more, it is philosophically satisfying to conceive of a great variety of magnitudes organized into various kinds (segments , angles, surfaces, etc .) . Magnitudes of the same kind can be related to one another by ratios, and ratios can be compared with each other because they are relations perceived by our minds.
In fact, the word for ratio, both in Greek and in Latin, is the same as the word for “reason” or “explanation” (logos in Greek, ratio in Latin). From the beginning, “irrational” (alogos in Greek) could mean both “without a ratio” and “unreasonable.” Inevitably, this austere theoretical system was somewhat disconnected from the everyday needs of people who needed to measure things such as lengths and angles. Astronomers kept right on using sexagesimal approximations, as did mapmakers and other scientists. There was some “leakage” of course:
in the first century c.e., Heron of Alexandria wrote a book that reads like an attempt to apply the theoreticians’ discoveries to practical measurement. It is to him, for

$22$

example, that we owe the recommendation to us$e^{7}$ as an approximation for $\pi$ . (Presumably , he chose Archimedes’ upper bound because it was the simpler number .) In theoretical mathematics, however, the distinction between numbers and other kinds of magnitudes remained firm. The history of numbers in the West over the fifteen hundred years that followed the classical Greek period can be seen as having two main themes: first, the Greek

$79$

compartmentaliz at i on between different kinds of quantities was slowly demolished; second, in order to do this the notion of number had to be generalized over and over again.

$3$

Decimal Place Value

Our system for representing whole numbers goes back, ultimately, to the mathematicians of the Indian subcontinent. Sometime before (probably well before) the fifth century c.e., they created nine symbols to designate the numbers from one to nine and used the position of these symbols to indicate their actual value. So $a_{3}$ in the units position meant three, and $a_{3}$ in the tens position meant three tens, i.e., thirty. This, of course, is what we still do; the symbols themselves have changed, but not the principle.
At about the same time, a place marker was developed to indicate an unoccupied space; this eventually evolved into our zero. Indian astronomy made extensive use of sines, which are almost never whole numbers. To represent these, a Babylonian-style sexagesimal system was used, with each “sexagesimal unit” being represented using the decimal system. So “thirty-three and a quarter” might be represented as 3315 , i.e., $33$ units and $15$ “minutes” (sixtieths). Decimal place-value numeration was passed on from India to the Islamic world fairly early. In the ninth century c.e.
in Baghdad, the recently established capital of the caliphate, one finds al-khwārizmı̄ [VI.5](/part-06/abu-jafar-muhammad-ibn-musa-al-khwarizm-vi55-william-kingdon-cliord-18451879) writing a treatise on numeration in the Indian style, “using nine symbols.” Several centuries later, al-Khwārizmı̄’s treatise was translated into Latin. It was so popular and influential in late-medieval Europe that decimal numeration was often referred to as “algorism.” It is worth noting that in al-Khwārizmı̄’s writing zero still had a special status: it was a place holder, not a number.
But once we have a symbol, and we start doing arithmetic using these symbols, the distinction quickly disappears. We have to know how to add and multiply numbers by zero in order to multiply multidigit numbers. In this way, “nothing” slowly became a number.

$4$

What People Want Is a Number

As Greek culture was displaced by other influences, the practical tradition became more important. One can see this in al-Khwārizmı̄’s other famous book, whose title

80                                                                            II. The Origins of Modern Mathematics

gave us the word “algebra.” The book is actually a com-       maticians independently. The most influential of these
pendium of many different kinds of practical or semi-          was stevin [VI.10](/part-06/simon-stevin-15481620), a Flemish mathematician and engi-
practical mathematics problems. Al-Khwārizmı̄ opens          neer who popularized the system in a booklet called
the book with a declaration that tells us at once that we     De Thiende (“The tenth”), which was first published in
are no longer in the Greek mathematical world: “When          1585. By extending place value to tenths, hundredths,
I considered what people generally want in calculating,       and so on, Stevin created the system we still use today.
I found that it is always a number.”                          More importantly, he explained how it simplified cal-
   The first portion of al-Khwārizmı̄’s book deals with       culations that involved fractions, and gave many prac-
quadratic equations and with the algebraic manipula-          tical applications. The cover page, in fact, announces
tions (done entirely in words, with no symbols whatso-        that the book is for “astrologers, surveyors, measurers
ever) needed to deal with them. His procedure is exactly      of tapestries.”
the quadratic formula we still use, which of course             Stevin was certainly aware of some of the issues cre-
requires extracting a square root. But in every example       ated by his move. He knew, for example, that the dec-
the number whose square root we need to find turns
                                                              imal expansion for 13 was infinitely long; his discus-
out to be a square, so that the square root is easily
                                                              sion simply says that while it might be more correct
found—and al-Khwārizmı̄ does get a number!
                                                              to say that the full infinite expansion was the correct
   At other points in the book, however, we can see
                                                              representation, in practice it made little difference if
that al-Khwārizmı̄ is beginning to think of irrational
                                                              we truncated it.
square roots as number-like entities. He teaches the
                                                                Stevin was also aware that his system provided a way
reader how to manipulate symbols with square roots
                                                              to attach a “number” (meaning a decimal expansion)
in them, and gives (in words, of course) examples such
         √to every single length. He saw little difference between
as (20− 200)+( 200−10) = 10. In the second part of
                                                              1.1764705882 (the beginning of the decimal expansion
the book, which deals with geometry and measurement,             20
                                                              of 17 ) and 1.4142135623 (the beginning of the decimal
one even sees an approximation to a square root: “The                        √
product is one thousand eight hundred and seventy-            expansion of 2). In his Arithmetic he boldly declared
five; take its root, it is the area; it is forty-three and a   that all (positive) numbers were squares, cubes, fourth
little.”                                                      powers, etc., and that roots were just numbers. He also
   The mathematicians of medieval Islam were influ-            says that “there are no absurd, irrational, irregular,
enced not only by the practical tradition represented         inexplicable, or surd numbers.” Those were all terms
by al-Khwārizmı̄, but also by the Greek tradition, espe-     used for irrational numbers, i.e., numbers that are not
cially euclid’s [VI.2](/part-06/euclid-ca) Elements. One finds in their writ-      fractions.
ing a mixture of Greek precision and a more prac-               What Stevin was proposing, then, was to flatten the
tical approach to measurement. In Omar Khayyam’s              incredible diversity of “quantities” or “magnitudes”
Algebra, for example, one sees both theorems in the           into one expansive notion of number, defined by dec-
Greek style and the desire for numerical solutions. In        imal expansions. He was aware that these numbers
his discussion of cubic equations Khayyam manages to          could be represented as lengths along a line. This
find solutions by means of geometric constructions but         amounted to a fairly clear notion of what we now call
laments his inability to find numerical values.                the positive real numbers.
   Slowly, however, the realm of “number” began to              Stevin’s proposal was made immensely more influ-
                                               √
grow. The Greeks might have insisted that 10 was not          ential by the invention of logarithms. Like the sine and
a number, but rather a name for a line segment, the           the cosine, these were practical computational tools. In
side of a square whose area is 10, or a name for a ratio.     order to be used, they needed to be tabulated, and the
Among the medieval mathematicians, both in Islam and          tables were given in decimal form. Very soon, everyone
            √
in Europe, 10 started to behave more and more like a          was using decimal representation.
number, entering into operations and even appearing             It was only much later that it came to be understood
as the solution of certain problems.                          what a bold leap this move represented. The positive
                                                              real numbers are not just a larger number system; they
     5   Giving Equal Status to All Numbers
                                                              are an immensely larger number system, whose inter-
The idea of extending the decimal place-value system          nal complexity we still do not fully understand (see set
to include fractions was discovered by several mathe-         theory [IV.22](/part-04/set-theory)).

II.1.   From Numbers to Number Systems                                                                               81

              6   Real, False, Imaginary                    century. By the middle of the eighteenth century, it was
                                                            well-known that every polynomial had a complete set
Even as Stevin was writing, the next steps were being
                                                            of roots in the complex numbers. This result became
taken: under the pressure of the theory of equations,
                                                            known as the fundamental theorem of algebra
negative numbers and complex numbers began to be
                                                            [V.13](/part-05/the-fundamental-theorem-of-algebra); it was finally proved to everyone’s satisfaction
useful. Stevin himself was already aware of negative
                                                            by gauss [VI.26](/part-06/carl-friedrich-gauss-17771855). Thus, the theory of equations did not
numbers, though he was clearly not quite comfortable
                                                            seem to require any further extension of the notion of
with them. For example, he explained that the fact that
                                                            number.
−3 is a root of x 2 + x − 6 really means that 3 is a root
of the associated polynomial x 2 − x − 6, obtained by
                                                                    7   Number Systems, Old and New
replacing x by −x every where.
   This was an easy dodge, but cubic equations cre-         Since complex numbers are clearly different from real
ated more difficult problems. The work of several Ital-       numbers, their presence stimulated people to begin
ian mathematicians of the sixteenth century led to a        classifying numbers into different kinds. Stevin’s egal-
method for solving cubic equations. As a crucial step,      itarianism had its impact, but it could not quite erase
this method involved extracting a square root. The          the fact that whole numbers are nicer than decimals,
problem was that the number whose root was needed           and that fractions are generally easier to grasp than
sometimes came out negative.                                irrational numbers.
   Up until then, it had always turned out that when an        In the nineteenth century, all sorts of new ideas cre-
algebraic problem led to the extraction of the square       ated the need for a more careful look at this classifi-
root of a negative number, the problem simply had no        cation. In number theory, Gauss and kummer [VI.40]
solution. But the equation x 3 = 15 x + 4 clearly did        started looking at subsets of the complex numbers that
have a solution—indeed, x = 4 is one—it was just that       behaved in a way analogous to the integers, such as the
                                                 √applying the cubic formula required computing −121.         set of all numbers a + b −1 with a and b both integers.
   It was bombelli [VI.8](/part-06/rafael-bombelli-1526after), also a mathematician and         In the theory of equations, galois [VI.41](/part-06/variste-galois-18111832) pointed out
engineer, who decided to bite the bullet and just see       that in order to do a careful analysis of the solvability of
what happened. In his Algebra, published in 1572, he        an equation one must start by agreeing on what num-
went ahead and computed with this “new kind of rad-         bers count as “rational.” So, for example, he pointed out
ical” and showed that he could find the solution of          that in abel’s [VI.33](/part-06/niels-henrik-abel-18021829) theorem on the unsolvability of
the cubic in this way. This showed that the cubic for-      the quintic, “rational” meant “expressible as a quotient
mula did indeed work in this case; more importantly,        of polynomials in the symbols used as the coefficients
it showed that these strange new numbers could be           of the equation,” and he noted that the set of all such
useful.                                                     expressions obeyed the usual rules of arithmetic.
   It took a while for people to become comfortable with       In the eighteenth century, Johann Lambert had estab-
these new quantities. About fifty years later, we find        lished that e and π were irrational, and conjectured
both Albert Girard and descartes [VI.11](/part-06/ren-descartes-15961650) saying that        that in fact they were transcendental, that is, that they
equations can have three sorts of roots: true (mean-        were not roots of any polynomial equation. Even the
ing positive), false (negative), and imaginary. It is not   existence of transcendental numbers was not known at
completely clear that they understood that these imag-      the time; liouville [VI.39](/part-06/joseph-liouville-18091882) proved that such numbers
inary roots would be what we now call complex num-          exist in 1844. Within a few decades, it was proved that
bers; Descartes, at least, sometimes seems to be saying     both e and π were transcendental, and later in the cen-
that an equation of degree n must have n roots, and         tury cantor [VI.54](/part-06/georg-cantor-18451918) showed that in fact the vast major-
that the ones that are neither “true” nor “false” must      ity of real numbers were transcendental. Cantor’s dis-
simply be imagined.                                         covery highlighted, for the first time, that the system
   Slowly, however, complex numbers began to be used.       Stevin had popularized contained unexpected depths.
They came up in the theory of equations, in debates            Perhaps the most important change in the concept of
about the logarithms of negative numbers, and in con-       number, however, came after hamilton’s [VI.37](/part-06/william-rowan-hamilton-18051865) dis-
nection to trigonometry. Their connection with the sine     covery, in 1843, of a completely new number system.
and cosine functions (via the exponential) was turned       Hamilton had noticed that coordinatizing the plane
into a powerful tool by euler [VI.19](/part-06/leonhard-euler-17071783) in the eighteenth     using complex numbers (rather than simply using pairs

82                                                                            II. The Origins of Modern Mathematics

of real numbers) vastly simplified plane geometry. He         expected; in modern language, they were fields. The
set out to find a similar way to parametrize three-           p-adics provided the first system of things that were
dimensional space. This turned out to be impossible,         recognizably numbers but that had no visible relation
but led Hamilton to a four -dimensional system, which        to the real or complex numbers—apart from the fact
he called the quaternions [III.76](/part-03/quaternions-octonions-and-normed-iv25-probabilistic-models-of-critical-phenomena). These behaved            that both systems contained the rational numbers. As
much like numbers, with one crucial difference: mul-          a result, they led Ernst Steinitz to create an abstract
tiplication was not commutative, that is, if q and q are     theory of fields.
quaternions, qq and q q are usually not the same.               The move to abstraction that appears in Steinitz’s
   The quaternions were the first system of “hyper-           work had also occurred in other parts of mathemat-
complex numbers,” and their appearance generated             ics, most notably the theory of groups and their repre-
lots of new questions. Were there other such systems?        sentations and the theory of algebraic numbers. All of
What counts as a number system? If certain “numbers”         these theories were brought together into conceptual
can fail to satisfy the commutative law, can we make         unity by noether [VI.76](/part-06/emmy-noether-18821935), whose program came to be
numbers that break other rules?                              known as “abstract algebra.” This left numbers behind
   In the long run, this intellectual ferment led math-      completely, focusing instead on the abstract structure
ematicians to let go of the vague notion of “number”         of sets with operations.
or “quantity” and to hold on, instead, to the more for-         Today, it is no longer that easy to decide what counts
mal notion of an algebraic structure. Each of the num-       as a “number.” The objects from the original sequence
ber systems, in the end, is simply a set of entities on      of “integer, rational, real, and complex” are certainly
which we can do operations. What makes them inter-           numbers, but so are the p-adics. The quaternions are
esting is that we can use them to parametrize, or coor-      rarely referred to as “numbers,” on the other hand,
dinatize, systems that interest us. The whole numbers        though they can be used to coordinatize certain math-
(or integers, to give them their latinized formal name),     ematical notions. In fact, even stranger systems can
for example, formalize the notion of counting, while         show up as coordinates, such as Cayley’s octonions
the real numbers parametrize the line and serve as the       [III.76](/part-03/quaternions-octonions-and-normed-iv25-probabilistic-models-of-critical-phenomena). In the end, whatever serves to parametrize or
basis for geometry.                                          coordinatize the problem at hand is what we use. If the
   By the beginning of the twentieth century, there were     requisite system turns out not to exist yet, well, one
many well-known number systems. The integers had             just has to invent it.
pride of place, followed by a nested hierarchy con-
sisting of the rational numbers (i.e., the fractions), the   Further Reading
real numbers (Stevin’s decimals, now carefully formal-
ized), and the complex numbers. Still more general           Berlinghoff, W. P., and F. Q. Gouvêa. 2004. Math through the
than the complex numbers were the quaternions. But             Ages: A Gentle History for Teachers and Others, expanded
                                                               edn. Farmington, ME/Washington, DC: Oxton House/The
these were by no means the only systems around.
                                                               Mathematical Association of America.
Number theorists worked with several different fields
                                                             Ebbingaus, H.-D., et al. 1991. Numbers. New York: Springer.
of algebraic numbers, subsets of the complex num-            Fauvel, J., and J. J. Gray, eds. 1987. The History of Mathe-
bers that could be understood as autonomous sys-               matics: A Reader. Basingstoke: Macmillan.
tems. Galois had introduced finite systems that obeyed        Fowler, D. 1985. 400 years of decimal fractions. Mathemat-
the usual rules of arithmetic, which we now call finite         ics Teaching 110:20–21.
fields. Function theorists worked with fields of func-               . 1999. The Mathematics of Plato’s Academy, 2 nd edn.
tions; they certainly did not think of these as numbers,       Oxford: Oxford University Press.
but their analogy to number systems was known and            Gouvêa, F. Q. 2003. p-adic Numbers: An Introduction, 2 nd
exploited.                                                     edn. New York: Springer.
                                                             Katz, V. J. 1998. A History of Mathematics, 2 nd edn. Reading,
   Early in the twentieth century, Kurt Hensel intro-
                                                               MA: Addison-Wesley.
duced the p-adic numbers [III.51](/part-03/local-and-global-in-number-theory), which were built
                                                                   , ed. 2007. The Mathematics of Egypt, Mesopotamia,
from the rational numbers by giving a special role to a
                                                               China, India, and Islam: A Sourcebook. Princeton, NJ:
prime number p. (Since p can be chosen at will, Hensel         Princeton University Press.
in fact created infinitely many new number systems.)          Mazur, B. 2002. Imagining Numbers (Particularly the Square
These too “obeyed the usual rules of arithmetic,” in           Root of Minus Fifteen). New York: Farrar, Straus, and
the sense that addition and multiplication behaved as          Giroux.