# L-Functions

228

of the form a1 v1 + · · · + ad vd , where a1 , . . . , ad are   among others (there is one for each even number):
integers. For example, to define the hexagonal lattice    √
in R2 one can take v1 and v2 to be (1, 0) and ( 2 , 2 ),
respectively. Notice that v2 is v1 rotated by π /3, and
also that v2 − v1 is v2 rotated by π /3. Continuing this
process, one can generate all the points in a regular
hexagon about the origin.
   The hexagonal lattice is unusual, among lattices in
R2 , in that it has a rotational symmetry of order 6. This
makes it the “best” lattice in many ways. (For exam-
ple, bees arrange their hives in hexagonal lattices, soap
bubbles of similar sizes naturally organize themselves
into hexagonal lattices, and so on.) The Leech lattice
plays a similar role in twenty-four dimensions: it is the
“most symmetrical” of all twenty-four-dimensional lat-
tices, with a degree of symmetry that is quite extra or-
dinary. It is discussed in more detail in the general
goals of mathematical research [I.4 §4](/part-01/general-goals).
III.47 L-Functions

Suppose we are given a sequence of numbers such as

How can we package up this sequence into one object
that remembers everything about the sequence, and
that might even give us new insights into the sequence?
One standard technique is to use a generating func-
tion [III.32](/part-03/generating-functions), but here is another way, which has proved
very fruitful in number theory and elsewhere. Given a
sequence a1 , a2 , a3 , . . . , we define the Dirichlet series

Here, s could be a positive integer, or a real number, for
example. As long as our sequence a1 , a2 , . . . does not
grow too quickly (which we shall henceforth assume),
the series L(s) will converge for all sufficiently large
values of s. More over, it may be a very “rich” object,
even if the initial sequence is simple. For example, if
an = 1 for all n, then the resulting function L(s) is
the famous riemann zeta function [IV.2 §3](/part-04/number-theory) ζ(s) =
1−s + 2−s + 3−s + · · · , which converges when s > 1 and
was shown by Euler to satisfy the following identities,

III. Mathematical Concepts
ζ(2) = π 2 /6,
1   3
691π 12
ζ(12) =
638 512 875
Thus, even a sequence as simple as 1, 1, 1, . . . leads us
to some natural questions that cry out to be answered.
The zeta function is the prototypical example of an
L-function. However, not every Dirichlet series deserves
to be called an L-function. We will mention below some
“good” properties that the zeta function has: roughly
speaking, a Dirichlet series is considered to be an
L-function if it has these good properties. This is not
a formal definition of course, but in fact there is no
formal definition of “an L-function.” (People have tried
to give one, but there is no real consensus about what
the right definition should be.) What happens in prac-
tice is that a mathematician finds a way of associating
a sequence a1 , a2 , . . . of numbers with a mathemat i-
cal object X, and if evidence then emerges to suggest
that the associated Dirichlet series L(s) shares the good
Kevin Buzzard
the L-function of X.
1 How Can We “Package”
a Sequence of Numbers?
One can check that the zeta function can also be
√
π , 2, 6.023 . imes 1023 , . . . .
p (1 − p ) . The product is usually referred to as
an Euler product, and if a Dirichlet series is to deserve
the title of L-function, then it should have some kind
of analogous product expansion. The existence of such
an expansion is closely related to, but a little stronger
than, the property that the sequence a1 , a2 , . . . should
be multiplicative, which means that amn = am an
whenever m and n are coprime.
To go further we must expand our horizons. It is not
a1   a2    a3
L(s) =    + s + s + ···
1 s   2     3
                                         even when s is a complex number, as long as it has a
s
=    an /n .                                sufficiently large real part. More over, it defines a holo-
n⩾1
morphic function [I.3 §5.6](/part-01/fundamental-definitions) in the region of the com-
plex plane where the sum converges. For example, the
Dirichlet series defining the zeta function converges for
every s such that Re(s) > 1. A standard fact about the
zeta function is that it has a unique extension to a holo-
morphic function of s for any complex number s ≠ 1.
This phenomenon is known as meromorphic continua-
tion of the zeta function. It is similar to the fact that the
infinite sum 1 + x + x 2 + x 3 + · · · converges only when
|x| < 1 but, when rewritten as 1/(1 − x), has a natural
interpretation for any complex number x other than 1.