# L-Functions

228                                                                                           III. Mathematical Concepts

of the form a1 v1 + · · · + ad vd , where a1 , . . . , ad are   among others (there is one for each even number):
integers. For example, to define the hexagonal lattice    √                  ζ(2) = π 2 /6,      ζ(4) = π 4 /90,
                                                       1   3
in R2 one can take v1 and v2 to be (1, 0) and ( 2 , 2 ),
                                                                                               691π 12
respectively. Notice that v2 is v1 rotated by π /3, and                           ζ(12) =                .
                                                                                             638 512 875
also that v2 − v1 is v2 rotated by π /3. Continuing this
                                                                Thus, even a sequence as simple as 1, 1, 1, . . . leads us
process, one can generate all the points in a regular
                                                                to some natural questions that cry out to be answered.
hexagon about the origin.
                                                                   The zeta function is the prototypical example of an
   The hexagonal lattice is unusual, among lattices in
                                                                L-function. However, not every Dirichlet series deserves
R2 , in that it has a rotational symmetry of order 6. This
                                                                to be called an L-function. We will mention below some
makes it the “best” lattice in many ways. (For exam-
                                                                “good” properties that the zeta function has: roughly
ple, bees arrange their hives in hexagonal lattices, soap
                                                                speaking, a Dirichlet series is considered to be an
bubbles of similar sizes naturally organize themselves          L-function if it has these good properties. This is not
into hexagonal lattices, and so on.) The Leech lattice          a formal definition of course, but in fact there is no
plays a similar role in twenty-four dimensions: it is the       formal definition of “an L-function.” (People have tried
“most symmetrical” of all twenty-four-dimensional lat-          to give one, but there is no real consensus about what
tices, with a degree of symmetry that is quite extra or-         the right definition should be.) What happens in prac-
dinary. It is discussed in more detail in the general           tice is that a mathematician finds a way of associating
goals of mathematical research [I.4 §4](/part-01/general-goals).                        a sequence a1 , a2 , . . . of numbers with a mathemat i-
                                                                cal object X, and if evidence then emerges to suggest
III.47 L-Functions                                              that the associated Dirichlet series L(s) shares the good
         Kevin Buzzard                                          properties of the zeta function, then L(s) will be called
                                                                the L-function of X.
             1 How Can We “Package”
              a Sequence of Numbers?                              2    What Good Properties Might L(s) Have?
                                                                One can check that the zeta function can also be
Suppose we are given a sequence of numbers such as
                 √                                              expressed as an infinite product over primes ζ(s) =

             π , 2, 6.023 . imes 1023 , . . . .                                 −s −1
                                                                   p (1 − p ) . The product is usually referred to as
                                                                an Euler product, and if a Dirichlet series is to deserve
How can we package up this sequence into one object
                                                                the title of L-function, then it should have some kind
that remembers everything about the sequence, and
                                                                of analogous product expansion. The existence of such
that might even give us new insights into the sequence?
                                                                an expansion is closely related to, but a little stronger
One standard technique is to use a generating func-
                                                                than, the property that the sequence a1 , a2 , . . . should
tion [III.32](/part-03/generating-functions), but here is another way, which has proved
                                                                be multiplicative, which means that amn = am an
very fruitful in number theory and elsewhere. Given a
                                                                whenever m and n are coprime.
sequence a1 , a2 , a3 , . . . , we define the Dirichlet series
                                                                   To go further we must expand our horizons. It is not
                      a1   a2    a3
               L(s) =    + s + s + ···                          hard to show that our definition of L(s) makes sense
                      1 s   2     3
                                                               even when s is a complex number, as long as it has a
                              s
                    =    an /n .                                sufficiently large real part. More over, it defines a holo-
                        n⩾1
                                                                morphic function [I.3 §5.6](/part-01/fundamental-definitions) in the region of the com-
Here, s could be a positive integer, or a real number, for      plex plane where the sum converges. For example, the
example. As long as our sequence a1 , a2 , . . . does not       Dirichlet series defining the zeta function converges for
grow too quickly (which we shall henceforth assume),            every s such that Re(s) > 1. A standard fact about the
the series L(s) will converge for all sufficiently large          zeta function is that it has a unique extension to a holo-
values of s. More over, it may be a very “rich” object,          morphic function of s for any complex number s ≠ 1.
even if the initial sequence is simple. For example, if         This phenomenon is known as meromorphic continua-
an = 1 for all n, then the resulting function L(s) is           tion of the zeta function. It is similar to the fact that the
the famous riemann zeta function [IV.2 §3](/part-04/number-theory) ζ(s) =               infinite sum 1 + x + x 2 + x 3 + · · · converges only when
1−s + 2−s + 3−s + · · · , which converges when s > 1 and        |x| < 1 but, when rewritten as 1/(1 − x), has a natural
was shown by Euler to satisfy the following identities,         interpretation for any complex number x other than 1.