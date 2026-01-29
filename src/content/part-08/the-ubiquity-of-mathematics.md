# The Ubiquity of Mathematics

VIII.3.   The Ubiquity of Mathematics                                                                                  977

Poincaré, H. 1970. La Valeur de la Science. Paris: Flammar-      Euler–Lagrange equations.) Even the way that wet sand
  ion.                                                           behaves when you walk across it involves interesting
      . 1999. Science et méthode. Paris: Éditions Kimé.          mathematics, as Reynolds realized in 1885. Typically,
Rosental, C. 2003. La Trame de l’Évidence. Paris: Presses
                                                                 the sand just around where you tread dries out—if you
  Universitaires de France.
                                                                 have not noticed this strange phenomenon, then have
Tymoczko, T., ed. 1998. New Directions in the Philosophy
  of Mathematics. Princeton, NJ: Princeton University Press.     a look next time you are on a beach. The reason this
  (First published in 1986.)                                     occurs is that when the tide goes out the sea tends to
Wittgenstein, L. 1958. Philosophical Investigations, volume I.   leave the grains of sand extremely well-packed. If you
  Oxford: Basil Blackwell.                                       then tread on the sand, you disturb this packing, creat-
      . 1969. On Certainty. Oxford: Basil Blackwell.             ing a less well-packed part of the sand near where you
                                                                 tread. This has more room for water, so it draws water
                                                                 in and down, temporarily drying out the sand around
VIII.3 The Ubiquity of Mathematics
                                                                 your foot.
           T. W. Körner
                                                                    It would be easy to give hundreds more examples
                                                                 of physical phenomena that can be analyzed mathe-
                    1   Introduction
                                                                 matically. However, if one accepts that physics gov-
We live surrounded by mathematics: when we open a                erns the universe and that mathematics is the language
door or use a nutcracker, we exploit archimedes’ [VI.3](/part-06/archimedes-ca)          of physics, then it is not surprising that these appli-
law of the lever; when a bus goes around the corner,             ca tions exist. Therefore, this article will focus on the
we experience at first hand newton’s [VI.14](/part-06/isaac-newton-16421727) law that a           appearance of mathematics in other areas, and in par-
body continues to travel in uniform motion in a straight         ticular geography, design, biology, communication, and
line unless acted on by an external force; when we use a         sociology.
rapidly accelerating elevator, we can feel for ourselves
the equivalence of gravitational and accelerational iner-                        2   Uses of Geometry
tia that lies at the heart of general relativity [IV.13](/part-04/general-relativity-and-the-einstein-equations);
and when we run a tap fast into a kitchen sink we see            If you travel about on Earth’s surface, then you need
a thin and flat circle of water with a clear boundary,            to make small adjustments to your watch as you move
which is the chaotic “hydraulic jump” between two well-          from one time zone to another. There is one exception
behaved solutions of a certain partial differential              to this, however: if you cross the international date line,
equation [I.3 §5.4](/part-01/fundamental-definitions).                                             then you have to make a big adjustment (assuming, that
   Because mathematics and physics are so interlinked,           is, that your watch shows not just the time but the date
almost everything we see involves mathematics. With              as well). Why is it necessary to have a discontinuity of
the help of elementary calculus, we know that a base-            this kind? Well, suppose that it is midnight on a Tues-
ball, after it leaves the bat, will have a trajectory in         day in Lisbon, for example, and imagine a path that goes
the shape of a parabola. This calculation assumes that           westward right around the globe. If the time changes
there is no air resistance, but a more complicated               along this path are all small ones that reflect where one
calculation can take air resistance into account too.            is in relation to the sun, then the time of day goes back
If a chain hangs between two points, then the curve              by one hour for every 15 degrees of longitude that we
it forms can again be explained mathematically. This             move. Therefore, when one gets back to Lisbon it is mid-
time, the technique used is the calculus of varia-               night on Monday. (Remember that we are talking about
tions [III.94](/part-03/variational-methods): the curve is the one that minimizes the          a mental path here, and not an actual journey.) Some-
potential energy of the chain, and the calculus of vari-         thing is clearly not right. The practical consequences of
ations allows you to work it out. (It is called a cate-          this theoretical problem were first felt by the tattered
nary. The rough idea of the calculation is to consider           remnants of Magellan’s first cir cum navigation of the
small perturbations of the chain. Since the potential            globe who had to do penance for performing religious
energy is minimized, we know that however we perturb             ceremonies on the wrong day!
it, we cannot decrease the potential energy. This infor-            Here is another argument for the necessity of the
mation can be used to derive a differential equation              date line. Let us ask exactly when the year 2000 began.
that determines the curve. In general, the differential           The answer depends, of course, on what part of the
equations that arise from this technique are called the          world you are talking about, and more particularly on

978                                                                                           VIII. Final Perspectives

its longitude, but for any part the answer is midnight at     two hemispheres and draw maps of each hemisphere
the beginning of January 1. In other words, in any par-       separately.
ticular place the year began when the Sun was (approx-           Now another problem arises: it does not seem to be
imately) over the opposite side of the world. It follows      possible to draw a map of even half the world with-
that at any given time at most a small fraction of the        out distortions. This is not a topological problem, but
world was celebrating the very beginning of the year          a geometrical one, in the sense that we are interested
2000. Therefore, at least some where had to go first,           in finer properties of Earth’s surface—shape, angle,
which means that parts of the world just to the east          area, and so on—than those that are preserved by con-
of it had missed their chance and had to wait almost          tinuity. Because the sphere has positive curvature
24 hours. Thus, again we see that there has to be a           [III.78](/part-03/ricci-flow), no part of it can be mapped to the plane in a
discontinuity.                                                length-preserving manner, so some distortion is neces-
   These phenomena reflect the fact that a certain con-        sary. However, we have a certain amount of freedom
tinuous map has no continuous inverse. The map in             to decide what kind of distortion we are prepared to
question takes a real number w to the point w →              accept and what kind we would like to avoid. There is,
(cos w, sin w), which lives in the unit circle. Notice that   it turns out, a conformal map from the sphere (minus
if we add 2π to w then we do not affect the values of          the poles) to a cylinder (which one can cut and roll out
cos w and sin w. Now let us try to invert the map. This       so that it fits into a plane)—it is the famous “Merca-
means that for each point (x, y) in the unit circle we        tor projection.” A conformal map is one that preserves
                                                              angles, so the Mercator projection is particularly use-
must pick some w such that cos w = x and sin w = y.
                                                              ful for navigation purposes: if it looks as though you
This w is the angle that the line from 0 to (x, y) makes
                                                              need to head north-northwest, then you really do. A
with the horizontal, with the all-important proviso that
                                                              disadvantage of the Mercator projection is that as you
you can add any multiple of 2π to it. So the question
                                                              move away from the equator, the countries look big-
becomes, can we choose the appropriate multiple in
                                                              ger and bigger (though the angle-preserving property
a continuous way? Again, the answer is no, since if
                                                              means that in close-up they are always the right shape).
you go around the circle once and let the angle vary
                                                              There is another projection that distorts shapes but
continuously, you find that you have added 2π to it.
                                                              preserves area. To work out the details of these pro-
   The above fact is one of the simplest theorems of
                                                              jections, one must use mathematics—and in particular
topology [IV.6](/part-04/algebraic-topology), the branch of mathematics that you
                                                              solve differential equations.
turn to if you want to know about the existence or non-
                                                                 Here are a few simple applications of geometry to
existence of continuous functions with given proper-
                                                              everyday life. If you have ever wondered what the best
ties. Another situation where continuous functions are
                                                              shape is for a manhole cover, then mathematics can
useful is when one is creating a map (in the geogra-          come to your aid. Of course, it depends what one means
pher’s sense) of the world. Such maps are more conve-         by “best,” but if you often need to lift manhole covers,
nient if they are drawn on a flat piece of paper, so a         then you may be annoyed if they keep falling down the
preliminary question we might ask is whether there is         manholes. Can this be avoided? If the cover is rectan-
a continuous function from the surface of the sphere          gular, then the length of any side is less than the length
to the plane such that any two different points in the         of the diagonal, so it can drop down the hole, but if it
sphere go to different points in the plane. Not only is        is circular, then its width is the same in all directions
the answer no, but Borsuk’s antipodal theorem tells us        and this is not possible.
that there must be some pair of antipodal points (that           Does this mean that only circular manhole covers
is, points of the sphere that are exactly opposite each       are safe from dropping down their manholes? Actu-
other, such as the North and South Poles) that go to the      ally, no. If you draw the three vertices of an equilat-
same point in the plane.                                      eral triangle and join each pair of them by a circu-
  However, perhaps we do not mind too much about              lar arc centered on the third, then you obtain a sort
continuity. If we take our sphere and make a cut from         of “curved triangle,” known as the Reuleaux triangle.
the North Pole to the South Pole, then we can open it         (This is commonly misspelt “Rouleaux” in the mistaken
up at the cut and flatten it out onto a plane. (To see         belief that it has something to do with rolling. Actually,
this, imagine that it is made of particularly stretchy        it is named after a nineteenth-century German engineer
rubber.) Alternatively, we could cut the sphere into          called Franz Reuleaux.)

VIII . $3$ .

The Ubiquity of Mathematics

Have you ever wondered why coins are the shapes they are? Most of them are circular, but the British fifty pence piece, for example, is a slightly curved polygon with seven sides. A moment’s thought makes it clear that for any odd number $n \ge 3$ you can have a Reuleaux polygon with n sides, and the fifty pence piece is indeed a Reuleaux heptagon. This is convenient for slot machines: it means that you can have a slot into which the coin only just fits, however you push it in. What about the best shape for a convey or belt?
If we construct it in the obvious manner, then one of its two sides will be exposed and the other not. Eventually, the exposed side will wear out, but the other side will be in pristine condition, since it will not have been used at all. However, as any mathematician will tell you, not all surfaces have two sides. The most famous example of a one-sided surface is the möbius strip [IV.7](/part-04/dierential-topology), which is obtained from a flat strip of paper by twisting one end through $180$ degrees and joining it to the other end.
If you have a long enough convey or belt for it to be practical to give it a twist some where, then you can wear out both sides equally (this makes sense locally even if globally the belt now has just one side), there by doubling the use you get out of the belt. (You might think it simpler just to turn the belt over after a while, but the Möbius-strip design has been taken seriously enough to be patented, and similar designs have been used as typewriter ribbons and in tape recorders .) $3$ Scaling and Chirality Why are Arctic mammals large? Is it just a fluke that they have evolved that way?
This does not sound like a mathematical question, but some simple mathematics can easily convince us that it is not a fluke at all. Since the Arctic is cold and animals need heat, animals that are better at preserving heat are more likely to thrive. The rate at which an object loses heat is proportional to its surface area, but the rate at which it generates heat is proportional to its volume. So if you double the size of an animal in every direction, then the rate at which heat is generated goes up by a factor of eight, while the rate at which it is lost goes up by a factor of only four.
That is, larger animals find it easier to preserve heat. But why, in that case, are Arctic animals not much bigger still? This can be explained by a similar scaling argument. If you scale an animal up by a factor of t, then its volume, and hence its weight (animals , being made predominantly of water, tend to have roughly the same density), will multiply by $t^{3}$ . The animal has to $979$ support this weight with its bones. The amount of force you need to snap a bone is roughly proportional to the area of a cross-section of that bone, and areas go up by a factor of $t^{2}$ .
So if t is too large, the animal will not be able to support its own weight. It does have the option of increasing the relative thickness of its bones, but if t is very large then its legs will be too thick for this to be a practical solution. A similar sort of scaling argument explains why, if you drop a mouse down $a_{1000}$ foot mine shaft, then, to quote Haldane, “on arriving at the bottom, [it] gets a slight shock and walks away.” In this case, air resistance is roughly proportional to surface area, while the gravitational pull is proportional to mass, and therefore to volume.
It follows that, the smaller you are, the smaller your terminal velocity, and the less you are bothered by a fall. A simple fact with many scientific ramifications is that two shapes can be reflections of each other with out being rotations or translations. For example, if you see a hand with out seeing the body to which it is attached, then you can tell whether it is a right hand or a left hand. (If you can shake it naturally with your right hand, then it is a right hand .) This phenomenon is known as chirality:
a shape is chiral if it cannot be obtained from its mirror image by rotation or translation. The notion of chirality appears in many parts of science. For example, many elementary particles have a fundamental property known as “spin,” which means that they often have right-handed versions and lefthanded versions. In pharmacology, it is now understood that many molecules are chiral, and that the two different versions can have radically different properties. An example that had tragic consequences is the drug thalidomide:
one form of it is effective against morning sickness while the other causes birth defects. Unfortunately, in the late $1950s$ several thousand pregnant women were given $a 50$ : $50$ mixture of the two forms. Less harmful examples of the importance of chirality abound. For instance, there are many chemicals that smell or taste different when you look at their reflected versions. (This may seem paradoxical, but the explanation is simple:
the sensors in our noses and mouths also contain molecules with chirality .) So far we have been considering rigid motions, but some shapes are chiral in the stronger sense that not even a continuous motion in space is enough to turn them into their mirror images. Two interesting examples are the trefoil knot [III.44](/part-03/knot-polynomials), which comes in a “right-handed” and a “left-handed” version (the proof

980                                                                                           VIII. Final Perspectives

that these two versions are genuinely distinct is not at     equals 27/12 , is close to 3/2 (more precisely, it is just
all easy), and the Möbius strip, which was mentioned         over 1.4983), which means that all the fifths are close
earlier. The rough reason that the Möbius strip is chiral    to perfect.
is that when you do the twist, you do it either accord-        Tuning systems are discussed in more detail in
ing to the “corkscrew rule”—that is, twisting it as if you   mathematics and music [VII.13 §2](/part-07/mathematics-and-music).
were pushing a corkscrew into the cork—or the oppo-
site way. If you try to visualize it, you may be able                            5   Information
to convince your self that the direction of twist is not
altered by continuous deformations, and also that the        Few things illustrate better how the abstract mathemat-
mirror image of a Möbius strip that obeys the corkscrew      ical theory of one generation can become the common
rule is a Möbius strip that does not obey the corkscrew      sense of the next than the following two closely related
rule.                                                        ideas: that all information can be expressed as a series
                                                             of 0 s and 1 s, and that the “quantity of information” car-
                                                             ried by a book, a picture, or a sound is proportional to
       4   Hearing Numerical Coincidences
                                                             the number of 0 s and 1 s required to express it.
Legend has it that Pythagoras, passing a blacksmith             A famous theorem of Shannon (described in reli-
hammering a set of iron bars in a particularly pleasing      able transmission of information [VII.6 §3](/part-07/reliable-transmission-of-information)) tells us
way, was led to discover the laws of harmony. In mod-        that the rate at which information can be transferred
ern terms, these laws say that two sounds go together        by signals depends on the range of frequencies avail-
particularly well (at least in the European tradition) if    able. For example, it is the change from signaling elec-
their frequencies are in the ratio r to s for some pair      tr ically along copper wires (with a narrow range of fre-
of small integers r and s: the smaller the better. As a      quencies) to signaling by light (with a very wide range)
result, people have tried to devise musical scales that      that has allowed the massive data transfers required
have as many of these pleasing intervals as possible.        by the Internet. The sound waves we hear belong to a
   Unfortunately, there are limits to how well you can       very narrow range of frequencies, while the light waves
do. If you take a very simple ratio such as 3/2, which       that we see belong to a wide range, and this is why we
corresponds to what musicians call a perfect fifth, then      need much more memory on our computers to store
its powers—9/4, 27/8, 81/16, and so on—get succes-           an hour of film than an hour of music. Similarly, it may
sively more complicated. However, by great good for-         feel as though visual perception is a passive process—
tune it happens that 219 is rather close to 312 . To be      we point our eyes in a certain direction, they behave a
precise, 219 = 524 288 and 312 = 531 441, which is a         bit like video cameras, and we just watch the video—but
difference of about 1.4%. It follows that (3/2)12 is close    because light carries so much information, our brains
to 27 . Since doubling a frequency raises the note by        actually have to resort to a wide variety of tricks to
an octave, this says that twelve perfect fifths make an       deal with it. What we think we see is actually a theatri-
interval close to seven octaves. This allows one to build    cal representation of reality that our brains have cun-
up a scale in which the fifths are approximately perfect.     ningly manipulated. This is why there are optical illu-
   There are many ways of doing the approximation.           sions, and why they continue to work even when you
Early choices of musical scale would make some of            know how they work. By contrast, since sound carries
the fifths perfect, at the expense of others. The mod-        so little information, our brains can process it in a much
ern compromise adopted by Western music for the last         more direct way (though still not completely direct—
250 years is to distribute the inaccuracies equally. If      there are aural illusions too, and the brain has tricks
successive notes in a musical scale have frequencies in      that help us to pick out the information we are actu-
the ratio 1 to α, then starting from a frequency u the       ally interested in from all the sound waves that enter
notes will have frequencies u, αu, α2 u, and so on. If       our ears).
you want k notes in the scale, then αk should equal 2           When information is transmitted, there are almost
(so that after k steps you have gone up by an octave).       always faults in the transmission system, so that our
This means that all smaller powers of α must be irra-        messages are not transmitted perfectly. How do we
tional, so that all the other intervals in the scale are     then recover the messages? Here is a Victorian par-
inharmonious! However, when k = 12, the fact that 312        lor trick that shows how in a very simple case. One
and 219 are close has the consequence that α7 , which        begins by writing down all sequences (x1 , x2 , . . . , x7 )

VIII.3.   The Ubiquity of Mathematics                                                                                981

such that every xi is either 0 or 1 and such that the           rerun the growth of the fertilized egg that ended up
numbers x1 + x3 + x5 + x7 , x2 + x3 + x6 + x7 , and             as you, the result would be broadly similar to you, but
x4 + x5 + x6 + x7 are all even. An example of such a            small environmental differences would result in a dif-
sequence is (0, 0, 1, 1, 0, 0, 1).                              ferent set of fingerprints and a different arrangement
   If you think of these sequences as vectors in the            of capillaries.
vector space F72 (that is, the seven-dimensional space             Under certain circumstances, it is not enough just to
where the scalars belong to the field of integers mod 2),        transmit information: it must also be protected. If we
then you will readily convince your self that these three        send our credit card number over the Internet, we want
properties of a sequence are independent linear con-            to do so in such a way that it would be very hard for an
ditions, so the set of sequences in question is a four-         eavesdropper to find that number. A mathematical way
dimensional subspace of F72 . Therefore, there are six-         of doing this is described in cryptography [VII.7 §5](/part-07/mathematics-and-cryptography).
teen such sequences. A member of the audience is                   Here is a slightly different but closely related prob-
asked to take one of them and change it in one place.           lem. Suppose that Albert has a secret that he would
The magician can at once identify which digit has been          like to share with Bertha (and only Bertha) in a conver-
changed. Let us see how this works if we change the             sation that every one can hear. What is he to do? A first
third digit of the sequence above, so we now have the           step is to think of any piece of information that they
sequence (y1 , . . . , y7 ) = (0, 0, 0, 1, 0, 0, 1).            can share secretly—it turns out to be a short step from
   The first step is to note that y1 + y3 + y5 + y7 and          this to sharing a particular piece of information. The
y2 +y3 +y6 +y7 have become odd, while y4 +y5 +y6 +              following procedure achieves this. First, Albert shouts
y7 is still even (since it is y3 that has changed). Now         out a large integer n and an integer u. Next, he chooses
the only number that belongs to the first two of the             a large integer a, which he keeps secret (including from
sets {1, 3, 5, 7}, {2, 3, 6, 7}, and {4, 5, 6, 7} but not the   Bertha—obviously, since he does not yet know how
third is 3. This tells us that x3 is the variable that has      to share secrets with her), and shouts out the value
been changed. How are the sets chosen so that this sort         of ua modulo n. Bertha then chooses an integer b,
of argument will always work? The answer becomes                which she keeps secret, and shouts out the value of
clearer if we use the binary representations of the inte-       ub modulo n. Now Albert is in a position to work out
gers instead and put in a couple of leading zeros. Then         uab = (ub )a modulo n, since Bertha has told him ub
the sets are {001, 011, 101, 111}, {010, 011, 110, 111},        and he knows a. Similarly, Bertha can use her secret
and {100, 101, 110, 111} and we see that the ith set is         number to work out uab = (ua )b modulo n. Albert and
the set of integers with a 1 in the ith digit from the          Bertha now both know the number uab modulo n. This
end. So if we know which of the three parities have             is a good example of a shared secret, because all that
been changed, then we know the binary representation            the eavesdroppers know is ua , ub , and n, and when n
of the place where the sequence was altered. Therefore,         is large there is no known way of calculating uab mod-
we can reconstruct the original sequence.                       ulo n from ua and ub modulo n, apart from methods
   This trick, rediscovered by Hamming, is the ancestor         that take far too long to be practical.
of all the error-correcting methods (also discussed in             Now suppose that Albert wants to send a credit card
reliable transmission of information [VII.6](/part-07/reliable-transmission-of-information)) that              number N to Bertha. Assuming that 1 ⩽ N ⩽ n, then
allow our CDs and DVDs to perform flawlessly even if             all he needs to do is shout out the number uab + N
they are slightly scuffed.                                       modulo n. Bertha then subtracts the secret number uab
   The fact that there is a precise mathematical way            and obtains N. (Albert should convey only one secret
of measuring information content is of considerable             this way, or he will reveal information. For instance, if
importance in genetics. It has been suggested that the          he sent another credit card number M using the same
amount of information carried by our DNA, though very           uab , then the eavesdroppers would know the value of
large, is much smaller than the information required            M − N. But if he and Bertha choose new numbers n,
to describe our bodies completely. This would explain           u, a, and b and use those to share the value of M, the
what experimental evidence also corroborates: that the          eavesdroppers will effectively know nothing about the
DNA carries a set of general instructions, but the fine          pair (M, N).)
detail of our anatomy, such as our fingerprints and the             Why do we believe that it is “hard” to calculate uab
precise arrangements of our capillaries, is partly a mat-       from ua and ub ? What if tomorrow some body dis-
ter of chance. So, for example, if it were possible to          covers a simple trick for doing it? Surprisingly, even

982                                                                                         VIII. Final Perspectives

though we cannot be absolutely sure that the prob-              Nash’s ingenious argument starts with an agreement
lem is hard, there are very precise ways of discussing       that is not necessarily in equilibrium, and allows the
the question. In particular, there are extremely plausi-     parties to the agreement to modify their actions very
ble conjectures, the truth of which would imply that it      slightly in a way that would improve their own situ-
really is impossible to calculate uab in a short time.       ation if nobody else changed their actions. (However,
These issues are discussed in considerable detail in         since the other parties are changing their actions, the
computational complexity [IV.20](/part-04/computational-complexity).                            total change may be preferable to nobody.) This results
                                                             in a function that takes agreements to agreements. This
            6   Mathematics in Society                       function turns out to obey the conditions of the kaku-
                                                             tani fixed point theorem [V.11 §2](/part-05/fixed-point-theorems), from which it
A street in which all houses have front gardens is much
                                                             follows that there is an agreement that no single indi-
prettier than a street in which all those front gardens
                                                             vidual wishes to change. (See mathematics and eco-
have been converted into parking places. For some peo-
                                                             nomic reasoning [VII.8](/part-07/mathematics-and-economic-reasoning), particularly section 4, for a
ple, aesthetics are more important than convenience,
                                                             further discussion of Nash’s theorem. Another situ-
so the effect of converting all the front gardens in
                                                             ation where individual and collective self-interest do
a street may well be to reduce the values of all the
                                                             not necessarily coincide is the flow of traffic (see the
houses. However, if you convert just one front garden,
                                                             mathematics of traffic in networks [VII.4 §4](/part-07/the-mathematics-of-trac-in-networks)).)
then it will increase the convenience for that household
with out making too much of a difference to the look              Not all applications of mathematical thought to
of the street, so the value of that house will increase      social problems have such satisfactory out comes. Sup-
and the values of all the other houses will decrease         pose that there is to be an election (or, more gener-
slightly. Thus, for each individual house owner there is     ally, that society has to make a choice between vari-
a financial incentive to convert the front garden, even       ous possibilities) with n candidates and m voters. Let
though if everybody does so then everybody will lose         us use the term “voting system” to mean any method
financially.                                                  of putting the n candidates in order given the pref-
   Clearly, to avoid this unfortunate result the house-      erences of the individual voters. Kenneth Arrow has
holds must cooperate. Nash has shown how, starting           shown that, under normal circumstances, there is no
from simple assumptions about fairness, there must be        good voting system. More precisely, he has identified a
a system of mutual payments—for example, a house-            small set of very reasonable sounding properties that
hold that wishes to convert its front garden might have      one would wish a voting system to have, and shown
to pay a charge that was shared between the other            that no voting system has all these properties. To give
households—which will change their incentives in such        two examples of these properties, it is surely desir-
a way that they will no longer want to ruin the street.      able that the final ranking of the candidates should
   If the households do not wish to cooperate, Nash          depend on more than just the ranking of one individ-
has shown that they come to a (usually less favorable)       ual voter, and one would also expect that if every voter
agreement which it is not in the interest of any single      prefers one candidate x to another candidate y, then x
individual to break. A simple example of a situation in      should be ranked higher than y. Instead of listing the
which no single individual may wish to change but a          other properties, we present a simpler result, known
group acting in concert may wish to change is given by       as Condorcet’s paradox, that gives some of the fla-
the following game. Suppose that three people hand to        vor of Arrow’s theorem. (Indeed, Arrow’s theorem can
an umpire an envelope containing either the word “yes”       be regarded as a descendant of Condorcet’s paradox.)
or the word “no.” If two players have written the same       Consider three voters A, B, and C with the following
thing and the third has not, then those two players get      preferences.
400 each and the third player gets nothing. However,
if all three have written the same, then all three play-
                                                                                              A    B    C
ers get 300. Suppose that the players meet before the
game and agree that they will all write “yes” (in order to             First preferences      x    y    z
maximize their average gain). Then no single player will               Second preferences     y    z    x
gain by writing “no” instead, but if two players decide
                                                                       Third preferences      z    x    y
to change then they will both gain.