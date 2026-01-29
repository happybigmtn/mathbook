# The Fast Fourier Transform

202                                                                                            III. Mathematical Concepts

We know already that exp(z + w) = exp(z) exp(w), so                  Let us use the first definition of log to see why log(st)
the derivative of exp at z is the limit as w tends to              must equal log(s) + log(t). Write s = exp(a) and t =
zero of exp(z)(exp(w) − 1)/w. It is therefore enough               exp(b). Then log(s) = a, log(t) = b, and
to show that exp(w) − 1 is very close to w when w                               log(st) = log(exp(a) exp(b))
is small. To get a good idea of exp(w) we should take
                                                                                        = log(exp(a + b))
a large n and consider (1 + w/n)n . It is not hard to
prove that this is indeed close to 1 + w, but here is an                                = a + b.
informal argument instead. Suppose that you have a                 The result follows.
bank account that offers a tiny rate of interest over a                In general, the properties of log closely follow those
year, say 0.5%. How much better would you do if you                of exp. However, there is one very important differ-
could compound this interest monthly? The answer is                ence, which is a complication that arises when one
not very much: if the total amount of interest is very             tries to extend log to the complex numbers. At first
small, then the interest on the interest is negligible.            it seems quite easy: every complex number z can be
This, in essence, is why (1 + w/n)n is approximately               written as r eiθ for some nonnegative real number r
1 + w when w is small.                                             and some θ (the modulus and argument of z, respec-
   One can extend the definition of the exponential                 tively). If z = r eiθ then log(z), one might think, should
function yet further. The main ingredients one needs               be log(r ) + iθ (using the functional equation for log
are addition, multiplication, and the possibility of lim-          and the fact that log inverts exp). The problem with
iting arguments. So, for example, if x is an element of a          this is that θ is not uniquely determined. For instance,
banach algebra [III.12](/part-03/c--algebras) A, then exp(x) makes sense.                what is log(1)? Normally we would like to say 0, but
(Here, the power series definition is the easiest, though           we could, perversely, say that 1 = e2π i and claim that
not necessarily the most enlightening.)                            log(1) = 2π i.
                                                                      Because of this difficulty, there is no single best way
             4   The Logarithm Function                            to define the logarithmic function on the entire com-
Natural logarithms, like exponentials, can be defined in            plex plane, even if 0, a number that does not have a
many ways. Here are three.                                         logarithm however you look at it, is removed. One con-
                                                                   vention is to write z = r eiθ with r > 0 and 0 ⩽ θ < 2π ,
  (i) The function log is the inverse of the function              which can be done in exactly one way, and then define
      exp. That is, if t is a positive real number, then           log(z) to be log(r ) + iθ. However, this function is not
      the statement u = log(t) is equivalent to the                continuous: as you cross the positive real axis, the
      statement t = exp(u).                                        argument jumps by 2π and the logarithm jumps by
 (ii) Let t be a positive real number. Then                        2π i.
                                     t
                                         dx                           Remarkably, this difficulty, far from being a blow
                         log(t) =           .                      to mathematics, is an entirely positive phenomenon
                                     1    x
                                                                   that lies behind several remarkable theorems in com-
(iii) If |x| < 1 then log(1 + x) = x − 12 x 2 + 13 x 3 − · · · .
                                                                   plex analysis, such as Cauchy’s residue theorem, which
      This defines log(t) for 0 < t < 2. If t ⩾ 2 then
                                                                   allows one to evaluate very general path integrals.
      log(t) can be defined as − log(1/t).

   The most important feature of the logarithmic func-             III.26   The Fast Fourier Transform
tion is a functional equation that is the reverse of the
functional equation for exp, namely log(st) = log(s) +             If f : R → R is a periodic function with period 1,
log(t). That is, whereas exp turns addition into multi-            then one can obtain a great deal of useful information
plication, log turns multiplication into addition. A more          about f by calculating its Fourier coefficients (see the
formal way of putting this is that R forms a group under           fourier transform [III.27](/part-03/the-fourier-transform) for a discussion of why).
addition, and R+ , the set of positive real numbers,               This is true for both theoretical and practical reasons,
forms a group under multiplication. The function exp               and because of the latter it is highly desirable to have
is an isomorphism from R to R+ , and log, its inverse, is          a good way of computing Fourier coefficients quickly.
an isomorphism from R+ to R. Thus, in a sense the two              A method for doing this was discovered by Cooley and
groups have the same structure, and the exponential                Tukey in 1965 (though it turned out that Gauss had
and logarithmic functions demonstrate this.                        anticipated them over 150 years earlier).

III.26.   The Fast Fourier Transform                                                                                      203

  The r th Fourier coefficient of f is given by the             which is interesting because
formula                                                              g(0) + ω−2 r g(2) + ω−4 r g(4) + ω−6 r g(6)
                          1
               fˆ(r ) =       f (x)e −2π ir x
                                                dx.           and
                          0

If we do not have an explicit formula for the integral               g(1) + ω−2 r g(3) + ω−4 r g(5) + ω−6 r g(7)
(as would be the case, for instance, if f were derived
                                                              are themselves values of discrete Fourier transforms.
from some physical signal rather than a mathemati-
                                                              For instance, if we set h(n) = g(2 n) for 0 ⩽ n ⩽ 3,
cal formula), then we will want to approximate this
                                                              and write ψ for ω2 = e2π i/4 , then the first expression
integral numerically, and a natural way to do that is         equals h(0) + ψ−r h(1) + ψ−2 r h(2) + ψ−3 r h(3). If we
to discretize it: that is, turn it into a sum of the form     think of h as being defined on Z4 , then this is precisely
     N−1
N −1 n=0 f (n/N)e−2π ir n/N . If f is not too wildly oscil-   the formula for ĥ(r ).
lating and r is not too big, then this should be a good         A similar remark applies to the second expression,
approximation.                                                so if we can calculate the discrete Fourier transforms
   The sum above will be unchanged if we add a mul-           of the “even part” of g and the “odd part” of g, then it
tiple of N to r , so we now care only about the values        will be very straightforward to obtain each value of the
of f at points of the form n/N. Moreover, the period-         Fourier transform of g itself: it will be a linear combi-
icity of f tells us that adding a multiple of N to n also     nation of values of the transforms of the two parts of
makes no difference. So we can regard both n and r as          g. Thus, if N is even and we write F (N) for the number
belonging to the group ZN of integers mod N (see mod-         of operations needed to calculate the discrete Fourier
ular arithmetic [III.58](/part-03/modular-arithmetic)). Let us change our notation         transform of a function defined on ZN , we obtain a
to one that reflects this. Given a function g defined on        recurrence of the form
ZN we define the discrete Fourier transform of g to be
                                                                                F (N) = 2 F (N/2) + CN.
the function ĝ, also defined on ZN , which is given by
the formula                                                   The interpretation of this is that in order to work out
                                                             the N values of the transform of a function on ZN , it is
               ĝ(r ) = N −1      g(n)ω−r n ,          (1)
                                                              enough to work out two such transforms for functions
                              n∈ZN
                                                              on ZN/2 and work out N linear combinations, each of
where we are writing ω for e2π i/N , so that ω−r n =          which takes a constant number of steps.
e−2π ir n/N . Note that the sum over n could be regarded        If N is a power of 2, then we can iterate this: F (N/2)
as a sum from 0 to N − 1 just as above; the other nota-       will be at most 2 F (N/4) + CN/2, and so on. It is not
tional change is that we have written g(n) instead of         hard to show as a result that F (N) is at most CN log N
f (n/N).                                                      for some constant C, a considerable improvement on
   The discrete Fourier transform can be thought of           CN 2 . If N is not a power of 2, then the above argu-
as multiplying a column vector (corresponding to the          ment does not work, but there are modifications of
function g) by an N \times N matrix (with entries N −1 ω−r n       the method that do, and that lead to similar efficiency
for each r and n). Therefore it can be calculated using       gains. (Indeed, this is true for the Fourier transform on
about N 2 arithmetical operations. The fast Fourier           an arbitrary finite Abelian group.)
transform arises from the observation that the sum in           Once we can calculate Fourier transforms efficiently,
(1) has symmetry properties that allow it to be calcu-        there are other calculations that immediately become
lated much more efficiently. This is most easily seen           easy as well. A simple example is the inverse Fourier
when N is a power of 2, and to make it even easier we         transform, which has a formula very similar to that
shall look at the case N = 8. The sums to be evaluated        of the Fourier transform and can therefore be calcu-
are then                                                      lated in a similar way. Another calculation that becomes
    g(0) + ω−r g(1) + ω−2 r g(2) + · · · + ω−7 r g(7)           easy is the convolution of two sequences, which is
                                                              defined as follows. If a = (a0 , a1 , a2 , . . . , am ) and b =
for each r between 0 and 7. Now a sum like this can be        (b0 , b1 , b2 , . . . , bn ) are two sequences, then their convo-
rewritten as                                                  lution is the sequence c = (c0 , c1 , c2 , . . . , cm+n ), where
                                                              each cr is defined to be a0 br + a1 br −1 + · · · + ar b0 .
g(0) + ω−2 r g(2) + ω−4 r g(4) + ω−6 r g(6)
                                                              This sequence is denoted by a ∗ b. One of the most
   + ω−r (g(1) + ω−2 r g(3) + ω−4 r g(5) + ω−6 r g(7)),          important properties of Fourier transforms is that they

