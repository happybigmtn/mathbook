# Wavelets and Applications

848                                                                                    VII. The Influence of Mathematics

article has not had the space to cover: immunology,
radiology, developmental biology, and the design of             VII.3 Wavelets and Applications
medical devices and synthetic biomaterials, to name                     Ingrid Daubechies
just a few of the most obvious omissions. Neverthe-
less, this collection of examples and introductory dis-                            1     Introduction
cussions allows us to draw a few conclusions about
                                                                One of the best ways to understand a function is to
mathematical biology. The range of biological problems
                                                                expand it in terms of a well-chosen set of “basic” func-
needing explanation by mathematics is enormous and
                                                                tions, of which trigonometric functions [III.92](/part-03/trigonometric-functions) are
techniques from many different branches of mathe-
                                                                perhaps the best-known example. Wavelets are fami-
matics are important. It is not so easy in mathemati-
                                                                lies of functions that are very good building blocks for
cal biology to extract simple, clear mathematical ques-
                                                                a number of purposes. They emerged in the 1980 s from
tions to work on, because biological systems typically
                                                                a synthesis of older ideas in mathematics, physics,
operate in a complex environment where it is diffi-
                                                                electrical engineering, and computer science, and have
cult to decide what should be counted as the system
                                                                since found applications in a wide range of fields.
and what as the parts. Finally, biology is a source of
                                                                The following example, concerning image compression,
new, interesting, and difficult questions for mathemati-
                                                                illustrates several important properties of wavelets.
cians, whose participation in the biological revolution
is necessary for a full understanding of the biology                         2   Compressing an Image
itself.
                                                                Directly storing an image on a computer uses a lot of
                                                                memory. Since memory is a limited resource, it is highly
Further Reading
                                                                desirable to find more efficient ways of storing images,
Durrett, R., and S. Levin. 1994. The importance of being        or rather to find compressions of images. One of the
  discrete (and spatial). Theoretical Population Biology 46:    main ways of doing this is to express the image as a
  363–94.                                                       function and write that function as a linear combina-
Eddy, D. M. 1980. Screening for Cancer: Theory, Analysis        tion of basic functions of some kind. Typically, most
  and Design. Englewood Cliffs, NJ: Prentice-Hall.               of the coefficients in the expansion will be small, and
Fall, C., E. Marland, J. Wagner, and J. Tyson. 2002. Compu-     if the basic functions are chosen in a good way it may
  tational Cell Biology. New York: Springer.
                                                                well be that one can change all these small coefficients
Fitch, W. M., R. M. Bush, C. A. Bender, and N. J. Cox. 1997.
                                                                to zero without changing the original function in a way
  Long term trends in the evolution of H(3) HA1 human
                                                                that is visually detectable.
  influenza type A. Proceedings of the National Academy of
  Sciences of the United States of America 94:7712–18.             Digital images are typically given by large collections
Grossberg, S. 1982. Studies of Mind and Brain: Neural Princi-   of pixels (short for picture elements; see figure 1).
  ples of Learning, Perception, Development, Cognition, and        The boat image in figure 1 is made up of 256 . imes 384
  Motor Control. Boston, MA: Kluwer.                            pixels; each pixel has one of 256 possible gray values,
Keener, J., and J. Sneyd. 1998. Mathematical Physiology. New    ranging from pitch black to pure white. (Similar ideas
  York: Springer.                                               apply to color images, but for this exposition, it is sim-
Levin, S., B. Grenfell, A. Hastings, and A. Perelson. 1997.     pler to keep track of only one color.) Writing a num-
  Mathematical and computational challenges in popula-          ber between 0 and 255 requires 8 digits in binary; the
  tion biology and ecosystems science. Science 275:334–43.      resulting 8-bit requirement to register the gray level for
Nijhout, H. F. 2002. The nature of robustness in develop-       each of the 256 . imes 384 = 98 304 pixels thus gives a total
  ment. Bioessays 24(6):553–63.
                                                                memory requirement of 786 432 bits, for just this one
Pevzner, P. A. 2000. Computational Molecular Biology: An
                                                                image.
  Algorithmic Approach. Cambridge, MA: MIT Press.
                                                                   This memory requirement can be significantly re-
Schlick, T. 2002. Molecular Modeling and Simulation. New
                                                                duced. In figure 2, two squares of 36 . imes 36 pixels are high-
  York: Springer.
Semple, C., and M. Steel. 2003. Phylogenetics. Oxford: Ox-
                                                                lighted, in different areas of the image. As is clear from
  ford University Press.                                        its blowup, square A has fewer distinctive characteris-
Waterman, M. S. 1995. Introduction to Computational Biol-       tics than square B (a blowup of which is shown in fig-
  ogy: Maps, Sequences, and Genomes. London: Chapman            ure 1), and should therefore be describable with fewer
  and Hall.                                                     bits. Square B has more features, but it too contains

(smaller) squares that consist of many similar pixels;
again this can be used to describe this region with fewer
than the 36 . imes 36 . imes 8 bits given by the naive estimate of
assigning 8 bits to each pixel.
  These arguments suggest that a change in the rep-
resentation of the image can lead to reduced memory
requirements: instead of a huge assembly of pixels, all
                                                            Figure 4 Subsquare 1 has constant gray level, while sub-
equally small, the image should be viewed as a combi-       squares 2 and 3 do not, but they can be split horizontally (2)
nation of regions of different size, each of which has       or vertically (3) into two regions with (almost) constant gray
more or less constant gray value; each such region can      level. Subsquare 4 needs finer subdivision to be reduced to
then be described by its size (or scale), by where it       “simple” regions.
appears in the image, and by the 8-bit number that tells
us its average gray value. Given any subregion of the         To use this decomposition for image compression,
image, it is easy to check whether it is already of this    one should be able to implement it easily in an auto-
simple type by comparing it with its average gray value.    mated way. This could be done as follows:
For square A, taking the average makes virtually no dif-
ference, but for square B, the average gray value is not      • first, determine the average gray value for the
sufficient to characterize this portion of the image (see         whole image (assumed to be square, for simplic-
figure 3).                                                       ity);
  When square B is subdivided into yet smaller sub-           • compare a square with this constant gray value
squares, some of them have a virtually constant gray            with the original image; if it is close enough, then
level (e.g., in the top-left or bottom-left regions of          we are done (but it will have been a very boring
square B); others, such as subsquares 2 and 3 (see fig-          image);
ure 4), that are not of just one constant gray level may      • if more features are needed than only the average
still have a simple gray level substructure that can be         gray value, subdivide the image into four equal-
easily characterized with a few bits.                           sized squares;

850                                                                             VII. The Influence of Mathematics

  • for each of these subsquares, determine their aver-
    age gray value, and compare with the subsquare                                224      176
    itself;
  • for those subsquares that are not sufficiently char-
    acterized by their average gray value, subdivide                              112      128
    again into four further equal-sized subsquares
    (each now having an area one sixteenth of the                     Figure 5 The average gray values for
    original image);                                                      four subsquares of a square.
  • and so on.
                                                            the top-right subsquare is given by 160 + [80 − 16 +
In some of the subsquares it may be necessary to
                                                            (−32)]/2 = 176.
divide down to the pixel level (as in subsquare 4 in
                                                               It is thus this process, rather than simply averaging
figure 4, for example), but in most cases subdivision
                                                            over smaller and smaller squares as described above,
can be stopped much earlier. Although this method
                                                            that needs to be repeated. We now turn to the ques-
is very easy to implement automatically, and leads to
                                                            tion of making the whole decomposition procedure as
a description using many fewer bits for images such
                                                            efficient as possible.
as the one shown, it is still somewhat wasteful. For
                                                               A complete decomposition of a 256 . imes 256 square,
instance, if the average gray level of the original image
                                                            from “top” (largest square) to “bottom” (the three types
is 160, and we next determine the gray levels of each
                                                            of “differences” for the 2 . imes 2 subsquares), involves
of the four quarter images as 224, 176, 112, and 128,
                                                            the computation of many numbers (in fact exactly
then we have really computed one number too many:
                                                            256 . imes 256 before pruning), some of which are them-
the average of the gray levels for the four equal-sized
                                                            selves combinations of many of the original pixel val-
subimages is automatically the gray level of the whole
                                                            ues. For instance, the grayscale average of the whole
image, so it is unnecessary to store all five numbers. In
                                                            256 . imes 256 square requires adding 256 . imes 256 = 65 536
addition to the average gray value for a square, one just
                                                            numbers with values between 0 and 255 and then divid-
needs to store the extra information contained in the
                                                            ing the result by 65 536; another example, the differ-
average gray values of its four quarters, given by the
                                                            ence between the averages of the left and right halves,
three numbers that describe
                                                            requires adding the 256 . imes 128 = 32 768 grayscale num-
  • how much darker (or lighter) the left half of the       bers for the left half and then subtracting from this
    square is than the right,                               sum A the sum B of another 32 768 numbers. On the
  • how much darker (or lighter) the top half of the        other hand, the sum of the pixel grayscale values over
    square is than the bottom, and                          the whole square is simply A + B, a sum of two 33-
  • how much darker (or lighter) the diagonal from          bit numbers instead of 65 536 numbers of 8 bits each.
    lower left to upper right is than the other diagonal.   This allows us to make a considerable saving in com-
                                                            putational complexity if A and B are computed before
Consider for example a square divided up into four sub-     the average over the whole square. A computationally
squares with average values 224, 176, 112, and 128,         optimal implementation of the ideas explained so far
as shown in figure 5. The average gray value for the         must therefore proceed along a different path from the
whole square can easily be checked to be 160. Now           one sketched above.
let us do three further calculations. First, we work out       Indeed, a much better procedure is to start from
the average gray values of the top half and the bottom      the other end of the scale. Instead of starting with the
half, which are 200 and 120, respectively, and calculate    whole image and repeatedly subdividing it, one begins
their difference, which is 80. Then we do the same for       at the pixel level and builds up. If the image has 2 J . imes 2 J
the left half and the right half, obtaining the difference   pixels in total, then it can also be viewed as consisting
168 − 152 = 16. Finally, we divide the four squares up      of 2 J−1 . imes 2 J−1 “superpixels,” each of which is a small
diagonally: the average over the bottom-left and top-       square of 2 . imes 2 pixels. For each 2 . imes 2 square, the aver-
right squares is 144, the average over the other two is     age of the four gray values can be computed (this is
176, and the difference between these two is −32.            the gray value of the superpixel), as well as the three
   From these four numbers one can reconstruct the          types of differences indicated above. Moreover, these
four original averages. For example, the average for        computations are all very simple.

VII.3.   Wavelets and Applications                                                                                    851

  The next step is to store the three difference values          • a very coarse approximation, and
for each of the 2 . imes 2 squares and organize their aver-          • additional layers giving detail at successively finer
ages, the gray values of the 2 J−1 . imes 2 J−1 superpixels,             scales j, with j ranging from 0 (the coarsest level)
into a new square. This square can be divided, in turn,           to J − 1 (the first superpixel level).
into 2 J−2 . imes 2 J−2 “super-superpixels,” each of which is
a small square of 2 . imes 2 superpixels (and thus stands          Moreover, within each scale j the detail layer consists
for 4 . imes 4 “standard” pixels), and so on. At the very end,     of many pieces, each of which has a definite localiza-
after J levels of “zooming out,” there is only one super J -   tion (indicating to which of the superj -pixels it per-
pixel remaining; its gray value is the average over the       tains), and all the pieces have “size” 2 j . (That is, the
whole image. The last three differences that were com-         size, in pixel widths, of the corresponding superj -pixel
puted in this pixel-level-up process correspond exactly       is 2 j .) In particular, the building blocks are very small
to the largest-scale differences that the top-down pro-        at fine scales and become gradually larger as the scale
cedure would have computed first, at much greater              becomes coarser.
computational expense.
   Carrying out the procedure from the pixel level up,               3   Wavelet Transforms of Functions
none of the individual averaging or differencing compu-
tations involves more than two numbers; the total num-        In the image-compression example we needed to look
ber of these elementary computations, for the whole           at three types of differences at each level (horizontal,
transform, is only 8(22 J −1)/3. For the 256 . imes 256 square        vertical, and diagonal) because the example was a two-
discussed before, J = 8, so the total is 174 752, which       dimensional image. For a one-dimensional signal, one
is about the number of computations needed for just           type of difference suffices. Given a function f from R to
one level in the top-down procedure.                          R, one can write a wavelet transform of f that is entirely
   How can all this lead to compression? At each stage        analogous to the image example. For simplicity, let us
of the process, three species of difference numbers are        look at a function f such that f (x) = 0 except when x
accumulated, at different levels and corresponding to          belongs to the interval [0, 1].
different positions. The total number of differences cal-          Let us now consider successive approximations of f
culated is 3(1 + 22 + · · · + 22(J−1) ) = 22 J − 1. Together   by step functions: that is, functions that change value in
with the gray value of the whole square, this means           only finitely many places. More precisely, for each posi-
we end up with exactly as many numbers as we had              tive integer j, divide the interval [0, 1] up into 2 j equal
gray values for the original 2 J . imes 2 J pixels. However,         intervals, denoting the interval from k2−j to (k + 1)2−j
many of these difference numbers will be very small            by Ij, k (so that k runs from 0 to 2 j − 1). Then define a
(as argued before), and can just as well be dropped           function Pj (f ) by setting its value on Ij, k to be the aver-
or put to zero, and if the image is reconstructed from        age value of f on that interval. This is illustrated in fig-
the remainder there will be no perceptible loss of qual-      ure 6, which shows the step function P3 (f ) for a func-
ity. Once we have set these very small differences to          tion f whose graph is shown as well. As j increases,
zero, a list that enumerates all the differences (in some      the width of the intervals Ij, k decreases, and Pj (f ) gets
prearranged order) can be made much shorter: when-            closer to f . (In more precise mathematical terms, if
ever a long stretch of Z zeros is encountered, it can         p < . nfty and f belongs to the function space [III.29](/part-03/function-spaces)
be replaced by the statement “insert Z zeros now,”            Lp , then Pj (f ) converges to f in Lp .)
which requires only a prearranged symbol (for “insert            Each approximation Pj (f ) of f can be computed eas-
zeros now”), followed by the number of bits needed            ily from the approximation Pj+1 (f ) at the next-finer
for Z, i.e., log2 Z. This achieves, as desired, a signifi-     scale: the average of the values that Pj+1 (f ) takes on
cant compression of the data that need to be stored for       the two intervals Ij+1,2 k and Ij+1,2 k+1 gives the value
large images. (In practice, however, image compression        that Pj (f ) takes on Ij, k .
involves many more issues, to which we shall return              Of course, some information about f is lost when we
briefly below.)                                                move from Pj+1 (f ) to Pj (f ). On every interval Ij, k , the
  The very simple image decomposition described               difference between Pj+1 (f ) and Pj (f ) is a step func-
above is an elementary example of a wavelet decom-            tion, with constant levels on the Ij+1, l , that takes on
position. The data that are retained consist of               exactly opposite values on each pair (Ij+1,2 k , Ij+1,2 k+1 ).

852                                                                                      VII. The Influence of Mathematics

     (a)                             (b)                            layer of detail consists of a sum of simple “difference
             f (x)                                                  contributions” that all have width proportional to the
                                                       P3 f (x)     scale. Moreover, this decomposition is realized by using
                                                                    translates and dilates of the single function H(x), often
                                                                    called the Haar wavelet, after Alfred Haar, who first
 0                               0
                                                                    defined it at the start of the twentieth century (though
              1           1 x                    1           1 x
              2                                  2                  not in a wavelet context). The functions H(2 j x − k)
                                                                    constitute an orthogonal set of functions, meaning
                                                                    that the inner product H(2 j x − k)H(2 j x − k ) dx is
Figure 6 Graphs of (a) the function f and (b) its approxi-          zero except when j = j and k = k ; if we define
mation P3 (f ), which is constant on every interval between         Hj, k (x) = 2 j/2 H(2 j x − k), then we also have that
l/8 and (l + 1)/8, with l = 0, 1, . . . , 7, and exactly equal to     [Hj, k (x)]2 dx = 1. A consequence of this is that the
the average of f on each of these intervals.
                                                                    wavelet coefficients wj, k (f ) that appear when we write
                                                                    the “jth layer” Pj+1 (f )(x) − Pj (f )(x) of the function
                                                                                                    
The difference Pj+1 (f ) − Pj (f ) of the two approxima-             f as a linear combination k wj, k (f )Hj, k (x) are given
tion functions, over all of [0, 1], consists of a juxta-            by the formula wj, k (f ) = f (x)Hj, k (x) dx.
position of such up-and-down (or down-and-up) step                     Haar wavelets are a good tool for exposition, but for
functions, and can therefore be written as a sum of                 most applications, including image compression, they
translates of the same up-and-down function, with                   are not the best choice. Basically, this is because replac-
appropriate coefficients:                                             ing a function simply by its averages over intervals (in
                                    j −1
                                   2                               one dimension) or squares (in two dimensions) results
     Pj+1 (f )(x) − Pj (f )(x) =           aj, k Uj (x − 2−j k),     in a very-low-quality approximation, as illustrated in
                                     k=0                            figure 7(b).
where                                                                  As the scale of approximation is made finer and finer
        ⎧
        ⎪
        ⎪ 1 for x between 0 and 2−(j+1) ,                           (i.e., as the j in Pj (f ) increases), the difference between
        ⎪
        ⎨
                                                                    f and Pj (f ) becomes smaller; with a piecewise-con-
Uj (x) = −1 for x between 2−(j+1) and 2 . imes 2−(j+1) ,
        ⎪
        ⎪                                                           stant approximation, however, this requires correc-
        ⎪
        ⎩0  for all other x.
                                                                    tions at almost every scale “to get it right” in the end.
  Moreover, the “difference functions” Uj at the dif-                Unless the original happens to be made up of large
ferent levels are all scaled copies of a single function            areas where it is roughly constant, many small-scale
H, which takes the value 1 between 0 and 12 and −1                  Haar wavelets will be required even in stretches where
          1
between 2 and 1; indeed, Uj (x) = H(2 j x). It follows               the function just has a consistent, sustained slope,
that each difference Pj+1 (f )(x) − Pj (f )(x) is a linear           without “genuine” fine features.
combination of the functions H(2 j x − k), with k rang-                 The right framework to discuss these questions
ing from 0 to 2 j − 1; adding many such differences, for              is that of approximation schemes. An approximation
successive j, shows that PJ (f )(x)−P0 (f )(x) is a linear          scheme can be defined by providing a family of “build-
combination of the collection of functions H(2 j x − k),             ing blocks,” often with a natural order in which they
with j ranging from 0 to J − 1 and k ranging from 0 to              are usually enumerated. A common way of measuring
2 j − 1. Picking larger and larger J makes PJ (f ) closer            the quality of an approximation scheme is to define VN
and closer to f ; one finds that f − P0 (f ) (i.e., the dif-         to be the space of all linear combinations of the first
ference between f and its average) can be viewed as a               N building blocks, and then to let AN f be the clos-
(possibly infinite) linear combination of the functions              est function in VN to f , where distance is measured
H(2 j x −k), now with j ranging over all the nonnegative             by the L2 -norm (though other norms can also be used).
integers.                                                           Then one examines how the distance f − AN f 2 =
  This decomposition is very similar to what was done               [ |f (x) − AN f (x)|2 dx]1/2 decays as N tends to infin-
for images at the start of the article, but in one dimen-           ity. An approximation scheme is said to be of order L
sion instead of two and presented in a more abstract                for a class of functions F if f − AN f 2 ⩽ CN −L for all
way. The basic ingredients are that f minus its aver-               functions f in F , where C typically depends on f but
age has been decomposed into a sum of layers at suc-                must be independent of N. The order of an approxima-
cessively finer and finer scales, and that each extra                 tion scheme for smooth functions is closely linked to

VII.3.   Wavelets and Applications                                                                                             853

                        (a)                                  (b)                           (c)
                                 f (x)

                    0                          1 x       0                     1 x     0                      1 x

Figure 7 (a) The original function. (b), (c) Approximations of f by a function that equals a polynomial on each interval
[k2−3 , (k + 1)2−3 ). The best approximation of f by a piecewise-constant function is shown in (b); the best by a continuous
piecewise-linear function is in (c).

the performance of the approximation scheme on poly-                        Take now any continuously differentiable function f
nomials (because smooth functions can be replaced in                     defined on the interval [0, 1]. Typically f − Pj Haar (f )2
estimations, at very little cost, by the polynomials given               equals about C2−j ; for an approximation scheme of
by their Taylor expansions). In particular, the types                    order 2, that same difference would be about C 2−2 j .
of approximation schemes considered here can have                        In order to achieve the same accuracy as Pj Haar (f ), the
order L only if they perfectly reproduce polynomials of                  piecewise-linear scheme would thus require only j/2
degree at most L − 1. In other words, there should exist                 levels instead of j levels. For higher orders L, the gain
some N0 such that if p is any polynomial of degree at                    would be even greater. If the projections Pj gave rise
most L − 1 and N ⩾ N0 , then AN p = p.                                   to a higher-order approximation scheme like this, then
   In the Haar case, applied to functions f that differ                   the difference Pj+1 (f )(x)−Pj (f )(x) would be so small
from zero only between 0 and 1, the building blocks                      as not to matter, even for modest values of j, wherever
consist of the function φ that takes the value 1 on [0, 1]               the function f was reasonably smooth; for these val-
and 0 outside, together with the families {Hj, k ; k =                    ues of j, the difference would be important only near
                                                                         points where the function was not as smooth, and so
0, . . . , 2 j − 1} for j = 0, 1, 2, . . . . We saw above that
                                                                         only in those places would a contribution be needed
Pj Haar (f ) can be written as a linear combination of the
                                                                         from “difference coefficients” at very fine scales.
first 1 + 20 + 21 + · · · + 2 j−1 = 2 j building blocks φ,
                                                                            This is a powerful motivation to develop a frame-
H0,0 , H1,0 , H1,1 , H2,0 , . . . , Hj−1,2 j−1 −1 . Because the Haar
                                                                         work similar to that for Haar, but with fancier “gen-
wavelets are orthogonal to each other, this is also the
                                                                         eralized averages and differences” corresponding to
linear combination of these basis functions that is clos-
                                                                         successive Pj (f ) associated with higher-order approx-
est to f , so that Pj Haar (f ) = AHaar     2 j
                                               . Figure 7 shows (for
                                                                         imation schemes. This can be done, and was done in an
j = 3) both AHaar     f  and      A PL
                                       f , which   is the best approx-
                 2 j                 2 j                                   exciting period in the 1980 s to which we shall return
imation of f by a continuous, piecewise-linear function                  briefly below. In these constructions, the generalized
with breakpoints at k2−j , k = 0, 1, . . . , 2 j −1. It turns out         averages and differences are typically computed by
that if you are trying to approximate a function f using                 combining more than two finer-scale entries each time,
Haar wavelets, then the best decay you can obtain, even                  in appropriate linear combinations. The correspond-
if f is smooth, is of the form f − Pj Haar (f )2 ⩽ C2−j ,               ing function decomposition represents functions as
or f − AHaar N   f 2 ⩽ CN −1 for N = 2 j . This means                   (possibly infinite) linear combinations of wavelets ψj, k
that approximation by Haar wavelets is a first-order                      derived from a wavelet ψ. As in the case of H, ψj, k (x)
approximation scheme. Approximation by continuous                        is defined to be 2 j/2 ψ(2 j x − k). Thus, the functions
piecewise-linear functions is a second-order scheme:                     ψj, k are again normalized translates and dilates of a
for smooth f , f − APL                         −2 for N = 2 j . Note
                               N f 2 ⩽ CN                               single function; this is due to our using systematically
that the difference between the two schemes can also                      the same averaging operator to go from scale j + 1 to
be seen from the maximal degree d of polynomials they                    scale j, and the same differencing operator to quantify
“reproduce” perfectly: clearly both schemes can repro-                   the difference between levels j + 1 and j, regard less of
duce constants (d = 0); the piecewise-linear scheme can                  the value of j. There is no absolutely compelling reason
also reproduce linear functions (d = 1), whereas the                     to use the same averaging and differencing operator
Haar scheme cannot.                                                      for the transition between any two successive levels,

$854$

and thus to have all the $\psi$ j, k generated by translating and dilating a single function. However, it is very convenient for implementing the transform, and it simplifies the mathematical analysis. One can additionally require that, like the H j, k , the $\psi$ j, k constitute an orthonormal basis for the space $L^{2}$ (R). The basis part means that every function can be written as a (possibly infinite) linear combination of the $\psi$ j, k ; the orthonormality means that the $\psi$ j, k are orthogonal to each other, except if they are equal, in which case their inner product is $1$ .
As we have already mentioned, the projections P j for the wavelet $\psi$ will correspond to an approximation scheme of order L only if they can reproduce perfectly all polynomials of degree less than L. If the functions

$\psi$ j, k are orthogonal, then $\psi$ j , k (x) P j (f) (x) dx  =  $0$ whenever $j > j.$ The $\psi$ j, k can thus be associated with an approximation scheme of order L only if $\psi$ j, k $(x)p(x)dx = 0$ for sufficiently large j and for all polynomials p of degree less than L. By scaling and translating, this reduces to the requirement $x^{l}\psi(x)dx = 0$ for $l = 0$ , $1$ , . . . , $L - 1$ . When this requirement is met, $\psi$ is said to have L vanishing moments.
Figure $8$ shows the graphs of some choices for $\psi$ that give rise to orthonormal wavelet bases and that are used in various circumstances. For the wavelets of the type $\psi$ [2 n] , and thus in particular for $\psi$ [4 ] , $\psi$ [6 ] , and $\psi$ [12 ] in figure $8$ , an algorithm similar to that for the Haar wavelet can be used to carry out the decomposition, except that instead of combining two numbers from P j $+ {}^{1}$ , k to obtain an average or a difference coefficient at level j, these wavelet decompositions require weighted combinations of four, six, or twelve finer-level
numbers, respectively. (More generally, $2n$ finer-level numbers are used for $\psi$ [2 n ] .) Because the Meyer and Battle-Lemarié wavelets $\psi$ [M] and $\psi$ [BL] are not concentrated on a finite interval, different algorithms are used for wavelet expansions with respect to these wavelets. There are many useful orthonormal wavelet bases besides the examples given above. Which one to choose depends on the application one has in mind.
For instance, if the function classes of interest in the application have smooth pieces, with abrupt transitions or spikes, then it is advantageous to pick a smooth $\psi,$ corresponding to a high-order approximation scheme. This allows one to describe the smooth pieces efficiently with coarse-scale basis functions, and to leave the fine-scale wavelets to deal with the spikes and

VII. The Influence of Mathematics

$\psi$ [12 ]H = . si$[2 ]110404\psi$ [4 ]. si$[M ]1100 - 444\psi$ [6 ]1. si [BL] $100 - 444$ Figure $8$ Six different choices of $\psi$ for which the $\psi$ j, k $(x) =2^{j}/ {}^{2}\psi(2^{j}x - k)$ , $j,k \in Z$ , constitute an orthonormal basis for $L^{2}$ (R). The Haar wavelet can be viewed as the first example of $a$ family $\psi$ [2 n ] , of which the wavelets for $n = 2$ , $3$ , and $6$ are also plotted here. Each $\psi$ [2 n ] has n vanishing moments and is supported on (i . e . , is equal to zero outside) an interval of width $2n - 1$ .
The remaining two wavelets are not supported on an interval; however, the Fourier transform of the Meyer wavelet $\psi$ [M] is supported on [− 8 π / 3 , − 2 π / 3 ]$∪ [2 π / 3 , 8 π / 3 ]$ ; all moments of $\psi$ [M ] vanish. The Battle-Lemarié wavelet $\psi$ [BL] is twice differentiable, is piecewise polynomial of degree $3$ , and has exponential decay; it has four vanishing moments. abrupt transitions. In that case, why not always use a wavelet basis with a very high approximation order? The reason is that most applications require numerical computation of wavelet transforms;
the higher the order of the approximation scheme, the more spread out the wavelet, and the more terms have to be used in each generalized average  /  difference , which slows down numerical computation. In addition, the wider the wavelet, and hence the wider all the finer-scale wavelets derived from it, the more often a discontinuity or sharp transition will overlap with these wavelets. This tends to spread out the influence of such transitions over more fine-scale wavelet coefficients.
Therefore, one must find a good balance between the approximation order and the width of the wavelet, and the best balance varies from problem to problem. There are also wavelet bases in which the restriction of orthonormality is relaxed. In this case one typically uses two different “dual” wavelets $\psi$ and $\psĩ,$ such that

$\infty- \infty\psi$ j, k $(x)\psi$ ̃ j , k  (  x )$dx = 0$ unless $j = j$ and $k = k$ . The approximation order of the scheme that approximates functions f by linear combinations of the $\psi$ j, k

VII . $3$ .

Wavelets and Applications

is then governed by the number of vanishing moments of $\psĩ.$ Such wavelet bases are called biorthogonal. They have the advantage that the basic wavelets $\psi$ and $\psĩ$ can both be symmetric and concentrated on an interval, which is impossible for orthonormal wavelet bases other than the Haar wavelets. The symmetry condition is important for image decomposition, where preference is usually given to two dimensional wavelet bases derived from one-dimensional bases with a symmetric function $\psi,$ a derivation to which we return below.
When an image is compressed by deleting or rounding off wavelet coefficients, the difference between the original image I and its compressed version I comp is a combination, with small coefficients, of these two-dimensional wavelets. It has been observed that the human visual system is more tolerant of such small deviations if they are symmetric; the use of symmetric wavelets thus allows for slightly larger errors, which translates to higher compression rates, before the deviations cross the threshold of perception or acceptability.
Another way of generalizing the notion of wavelet bases is to allow more than one starting wavelet. Such systems, known as multiwavelets, can be useful even in one dimension. When wavelet bases are considered for functions defined on the interval [a , b] rather than the whole of R , the constructions are typically adapted, giving bases of interval wavelets in which specially crafted wavelets are used near the edges of the interval. It is sometimes useful to choose less regular ways of subdividing intervals than the systematic halving considered above:
in this case, the constructions can be adapted to give irregularly spaced wavelet bases. When the goal of a decomposition is compression of the information, as in the image example at the start, it is best to use a decomposition that is itself as efficient as possible. For other applications, such as pattern recognition, it is often better to use redundant families of wavelets, i.e., collections of wavelets that contain “too many” wavelets, in the sense that all functions in $L^{2}$ (R) could still be represented even if one dropped some of the wavelets from the collection.
Continuous wavelet families and wavelet frames are the two main kinds of collections used for such redundant wavelet representations.

$4$

Wavelets and Function Properties

Wavelet expansions are useful for image compression because many regions of an image do not have features

$855$

at very fine scales. Returning to the one-dimensional case, the same is true for a function that is reasonably smooth at most but not all points, like the function illustrated in figure $6$ (a). If we zoom in on such a function near a point $x^{0}$ where it is smooth, then it will look almost linear, so we will be able to represent that part of the function efficiently if our wavelets are good at representing linear functions. This is where wavelet bases other than Haar show their power:
the wavelets $\psi$ [4 ] , $\psi$ [6 ] , $\psi$ [12 ] , $\psi$ [M ] , and $\psi$ [BL] depicted in figure $8$ all define approximation schemes of order $2$ or higher, so that $x\psi$ j, k  (  x )$dx = 0$ for all j, k. This is also seen in the numerical implementation schemes: the corresponding generalized differencing that computes the wavelet coefficients of f gives a zero result not only when the graph is flat, but also when it is a straight but sloped line, which is not true for the simple differencing used for the Haar basis.
As a result, the number of coefficients needed for the wavelet expansion of smooth functions f to reach a preassigned accuracy is much smaller when one uses more sophisticated wavelets than the Haar wavelets. For a function f that is twice differentiable except at a finite number of discontinuities, and with a basic wavelet that has, say, three vanishing moments, typically only very few wavelets at fine scales will be needed to write a very-high-precision approximation to f . Moreover, those will be needed only near the discontinuity points.
This feature is characteristic for all wavelet expansions, whether they are with respect to an orthonormal basis, a basis that is nonorthogonal, or even a redundant family. Figure $9$ illustrates this for one type of redundant expansion, which uses the so-called Mexican hat wavelets, which are given by √$2\psi(x) = (2 2/ 3)\pi - 1/4(1 - 4x^{2})e - 2x$ ; this wavelet gets its name from the shape of its graph, which looks like the cross section of a Mexican hat (see the figure). The smoother a function f is (i . e .
, the more times it is differentiable), the faster its wavelet coefficients will decay as j increases, provided the wavelet $\psi$ has sufficiently many vanishing moments. The converse statement is also true: one can read off how smooth the function is at $x^{0}$ from how the wavelet coefficients w j, k (f) decay, as j increases. Here one restricts attention to the “relevant” pairs (j , k). In other words, one considers only the pairs where $\psi$ j, k is localized near $x^{0}$ . (In more precise terms, this converse statement can be

856                                                                                      VII. The Influence of Mathematics

                           1                                     less of the function f . This is called linear approxima-
                                                                 tion, because the collection of all functions of the form
                  −2 −1 0        1    2                          AN f is contained in the linear span VN of the first N
                       −1
                                                                 basis functions. Some of the function spaces mentioned
                                                                 above can be characterized by specifying the decay of
                                                                 f − AN f 2 as N increases, where AN is defined in
                                                                 terms of an appropriate wavelet basis.
                                                                    However, when it is compression that we are inter-
                                                                 ested in, we are really carrying out a different kind of
                                                                 approximation. Given a function f , and a desired accu-
                                                                 racy, we want to approximate f to within that accuracy
                                                                 by a linear combination of as few basis functions as
                                                                 possible, but we are not trying to choose those func-
                                                                 tions from the first few levels. In other words, we are no
                                                                 longer interested in the ordering of the basis functions
                                                                 and we do not prefer one label (j, k) over another.
                                                                    If we want to formalize this, we can define an approx-
                                                                 imation AN f to be the closest linear combination to f
                               ψ [MH]                            that is made up of at most N basis functions. By anal-
                                                                 ogy with linear approximation, we can then define the
                                                                 set VN as the set of all possible linear combinations of
Figure 9 A function with a single discontinuity (top) is
                                                                 N basis functions. However, the sets VN are no longer
approximated by finite linear combinations of Mexican hat         linear spaces: two arbitrary elements VN are typically
            [MH]
wavelets ψj, l ; the graph of ψ[MH] is at the bottom of the       combinations of two different collections of N basis
figure. Adding finer scales leads to increased precision. Left:    functions, so that their sum has no reason to belong
successive approximations for j = 1, 3, 5, and 7. Right: total   to VN (though it will belong to V2 N ). For this reason,
contributions from the wavelets at the scales needed to
                                                                 AN f is called a nonlinear approximation of f .
bridge from one j to the next. (In this example, j increases
             1                                                      One can go further and define classes of functions
in steps of 2 .) The finer the scale, the more the extra detail
is concentrated near the discontinuity point.                    by imposing conditions on the decay of f − AN f ,
                                                                 as N increases, with respect to some function space
                                                                 norm  · . This can of course be done starting from
reformulated as an exact character ization of the so-             any basis; wavelet bases distinguish themselves from
called Lipschitz spaces C α , for all noninteger α that          many other bases (such as the trigonometric functions)
are strictly less than the number of vanishing moments           in that the resulting function spaces turn out to be
of ψ.)                                                           standard function spaces, such as the Besov spaces,
   Wavelet coefficients can be used to characterize                for example. We have referred several times to func-
many other useful properties of functions, both global           tions that are smooth in many places but have pos-
and local. Because of this, wavelets are good bases not          sible discontinuities in isolated points, and argued
just for L2 -spaces or the Lipschitz spaces, but also            that they can be approximated well by linear com-
for many other function spaces, such as, for instance,           binations of a fairly small number of wavelets. Such
the Lp -spaces with 1 < p < . nfty, the sobolev spaces                functions are special cases of elements of particular
[III.29 §2.4](/part-03/function-spaces), and a wide range of Besov spaces. The             Besov spaces, and their good approximation proper-
versatility of wavelets is partly due to their connec-           ties by sparse wavelet expansions can be viewed as
tion with powerful techniques developed in harmonic              a consequence of the character ization of these Besov
analysis through out the twentieth century.                       spaces by nonlinear approximation schemes using
   We have already seen in some detail that wavelet              wavelets.1
bases are associated with approximation schemes of
different orders. So far we have considered approxi-
mation schemes in which the AN f are always linear                 1. More types of wavelet families, as well as many generalizations,
combinations of the same N building blocks, regard-              can be found on the Internet at www.wavelet.org.

VII.3.   Wavelets and Applications                                                                                 857

   5     Wavelets in More than One Dimension                 superpixel gray values (the results of averaging both
                                                             horizontally and vertically); the other three rectangles
There are many ways to extend the one-dimensional
                                                             are left unchanged. Figure 10 shows the result of this
constructions to higher dimensions. An easy way to
                                                             process for the original boat image, though the wavelet
construct a multi dimensional wavelet basis is to com-
                                                             basis used here is not the Haar basis, but a symmetric
bine several one-dimensional wavelet bases. The image
                                                             biorthogonal wavelet basis that has been adopted in the
decomposition at the start is an example of such a
                                                             JPEG 2000 image compression standard. The result is a
combination: it combines two one-dimensional Haar
                                                             decomposition of the original image into its component
decompositions. We saw earlier that a 2 . imes 2 superpixel
                                                             wavelets. The fact that so much of this is gray indicates
could be decomposed as follows. First, think of it as
                                                             that a lot of this information can be discarded without
arranged in two rows of two numbers, representing the
                                                             affecting the image quality.
gray levels of the corresponding pixels. Next, for each
row replace its two numbers by their average and their          Figure 11 illustrates that the number of vanishing
difference, obtaining a new 2 . imes 2 array. Finally, do the      moments is important not just when the wavelet basis
same process to the columns of the new array. This           is used for characterizing properties of functions, but
produces four numbers, the result of, respectively,          also when it comes to image analysis. It shows an image
                                                             that has been decomposed in two different ways: once
  • averaging both horizontally and vertically,              with Haar wavelets, the other with the JPEG 2000 stan-
  • averaging horizontally and differencing vertically,       dard biorthogonal wavelet basis. In both cases, all but
  • differencing horizontally and averaging vertically,       the largest 5% of the wavelet coefficients have been
    and                                                      set to zero, and we are looking at the correspond-
  • differencing both horizontally and vertically.            ing reconstructions of the images, neither of which is
                                                             perfect. However, the wavelet used in the JPEG 2000
The first is the average gray level for the superpixel,
                                                             standard has four vanishing moments, and therefore
which is needed as the input for the next round of the
                                                             gives a much better approximation in smoothly vary-
decomposition at the next scale up. The other three
                                                             ing parts of the image than the Haar basis. Moreover,
correspond to the three types of “differences” already
                                                             the reconstruction obtained from the Haar expansion
encountered earlier. If we start with a rectangular image
                                                             is “blockier” and less attractive.
that consists of 2 K rows, each containing 2 J pixels, then
we end up with 2 K−1 . imes 2 J−1 numbers of each of the
four types. Each collection is naturally arranged in a               6   Truth in Advertising: Closer to
rectangle of half the size of the original (in both direc-                True Image Compression
tions); it is customary in the image-processing litera-
ture to put the rectangle with gray values for the super-    Image compression has been discussed several times in
pixels in the top left; the other three rectangles each      this article, and it is indeed a context in which wavelets
group together all the differences (or wavelet coeffi-          are used. However, in practice there is much more to
cients) of the other three kinds. (See the level 1 decom-    image compression than the simple idea of dropping
position in figure 10.) The rectangle that results from       all but the largest wavelet coefficients, taking the result-
horizontal differencing and vertical averaging typically      ing truncated list of coefficients, and replacing each of
has large coefficients at places where the original image      the many long stretches of zeros by its runlength. In
has vertical edges (such as the boat masts in the exam-      this short section we shall give a glimpse of the large
ple above); likewise, the horizontal averaging/vertical      gap between the mathematical theory of wavelets as
differencing rectangle has large coefficients for hori-         discussed above and the real-life practice of engineers
zontal edges in the original (such as the stripes in the     who want to compress images.
sails); the horizontal differencing/vertical differencing         First of all, compression applications set a “bit bud-
rectangle selects for diagonal features. The three differ-    get,” and all the information to be stored has to fit
ent types of “difference terms” indicate that we have         within the bit budget; statistical estimates and infor-
here three basic wavelets (instead of just one in the        mation-theoretic arguments about the class of images
one-dimensional case).                                       under consideration are used to allocate different num-
   In order to go to the next round, one scale up, the       bers of bits to different types of coefficients. This bit
scenario is repeated on the rectangle that contains the      allocation is much more gradual and subtle than just

Figure 10 Wavelet decomposition of the boat image, together with a grayscale rendition of the wavelet coefficients. The
decompositions are shown after one level of averaging and differencing, as well as after two and three levels. In the rectangles
corresponding to wavelet coefficients (i.e., not averaged in both directions), where numbers can be negative, the convention
is to use gray scale 128 for zero, and darker/lighter gray scales for positive and negative values. The wavelet rectangles are
mostly at gray scale 128, indicating that most of the wavelet coefficients are negligibly small.

Figure 11 Top: original image, with blowup. Bottom: approximations obtained by expanding the image into a wavelet
basis, and discarding the 95% smallest wavelet coefficients. Left: Haar wavelet transform. Right: wavelet transform using the
so-called 9–7 biorthogonal wavelet basis.

retaining or dropping coefficients. Even so, many coef-             tion about the addresses cancel out a large portion
ficients will get no bits assigned to them, meaning that           of the gain made by the nonlinear wavelet approxima-
they are indeed dropped altogether.                               tion. Every practical wavelet-based image-compression
   Because some coefficients are dropped, care has to               scheme uses some sort of clever approach to deal with
be taken that each of the remaining coefficients is                 this problem. One implementation exploits the obser-
given its correct address, i.e., its (j, k1 , k2 ) label, which   vation that at locations in the image where wavelet coef-
is essential for “decompressing” the stored informa-              ficients of some species are negligibly small at some
tion in order to reconstruct the image (or rather, an             scale j, the wavelet coefficients of the same species
approximation to it). If you do not have a good strat-            at finer scales are often very small as well. (Check it
egy for doing this, then you can easily find that the              out on the boat image decomposition given above.) At
computational resources needed to encode informa-                 each such location, this method sets a whole tree of

VII . $3$ .

Wavelets and Applications

finer-scale coefficients (four for scale $j + 1$ , sixteen for scale j $+ 2$ , etc .) automatically to zero; for those locations where this assumption is not borne out by the wavelet coefficients that are obtained from the actual decomposition of the image at hand, extra bits must then be spent to store the information that a correction has to be made to the assumption. In practice, the bits gained by the “zero-trees” far outweigh the bits needed for these occasional corrections. Depending on the application, many other factors can play a role.
For instance, if the compression algorithm has to be implemented in an instrument on a satellite where it can only draw on very limited power supplies, then it is also important for the computations involved in the transform itself to be as economical as possible. Readers who want to know more about (important !) considerations of this kind can find them discussed in the engineering literature.
Readers who are content to stay at the lofty mathematical level are of course welcome to do so, but are hereby warned that there is more to image compression via wavelet transforms than has been sketched in the previous sections.

$7$

Brief Overview of Several Influences

on the Development of Wavelets

Most of what is now called “wavelet theory” was developed in the $1980s$ and early $1990s$ . It built on existing work and insights from many fields, including harmonic analysis (mathematics) , computer vision and computer graphics (computer science) , signal analysis and signal compression (electrical engineering), coherent states (theoretical physics), and seismology (geophysics). These different strands did not come together all at once but were brought together gradually, often as the result of serendipitous circumstances and involving many different agents.
In harmonic analysis, the roots of wavelet theory go back to work by littlewood [VI.79](/part-06/john-edensor-littlewood-18851977) and Paley in the $1930s$ . An important general principle in Fourier analysis is that the smoothness of a function is reflected in its fourier transform [III.27](/part-03/the-fourier-transform) : the smoother the function, the faster the decay of its transform. Littlewood and Paley addressed the question of characterizing local smoothness.
Consider, for example, a periodic function with period $1$ that has just one discontinuity in the interval [0 , 1) (which is then repeated at all integer translates of that point), and is smooth elsewhere. Is the smoothness reflected in the Fourier transform?

859

If the question is understood in the obvious way, then the answer is no: a discontinuity causes the Fourier coefficients to decay slowly, however smooth the rest of the function is. Indeed, the best possible decay is of the form |fˆn| \le C [1 + | n | ] - 1 . If there were no discontinuity, the decay would be at least as good as $C^{k}$ [1 + | n | ] - k when f is k-times differentiable. However, there is a more subtle connection between local smoothness and Fourier coefficients.
Let f be a periodic function, and let us write its nth Fourier coefficient f ˆ n as a n e $i\theta$ n , where a n is the absolute value of f ˆ $n$ and $ei\theta$ n is its phase. When examining the decay of the Fourier coefficients, we look just at a n and forget all about the phases, which means that we cannot detect any phenomenon unless it is unaffected by arbitrary changes to the phases. If f has a discontinuity, then we can clearly move it about by changing the phases.
It turns out that these phases play an important role in determining not just where the singularities are, but even their severity: if the singularity at $x^{0}$ is not just a discontinuity but a divergence of the type |f(x)| ∼ $|x - x^{0}| - β$ , then one can change the value of β just by changing the phases and without altering the absolute values $|a^{n}|$ . Thus, changing phases in Fourier series is a dangerous thing to do: it can greatly change the properties of the function in question.
Littlewood and Paley showed that some changes of the phases of Fourier coefficients are more innocuous. In particular, if you choose a phase change for the first Fourier coefficient, another one for both the next two coefficients, another for the next four, another for the next eight, and so on, so that the phase changes are constant on “blocks” of Fourier coefficients that keep doubling in length, then local smoothness (or absence of smoothness) properties of f are preserved.
Similar statements hold for the Fourier transform of functions on R (as opposed to Fourier series of periodic functions). This was the first result of a whole branch of harmonic analysis in which scaling was exploited systematically to deal with detailed local analysis, and in which very powerful theorems were proved that, with hindsight, seem ready-made to establish a host of powerful properties for wavelet decompositions.
The simplest way to see the connection between Littlewood-Paley theory and wavelet decompositions is to consider the Shannon wavelet $\psi$ [Sh] , which is defined by $\psî$ [Sh] ( $ξ) =1$ when $\pi \le |ξ| < 2\pi$ , and $\psî$ [Sh] ( $ξ) = 0$ otherwise. Here, $\psî$ [Sh] denotes the Fourier transform of the [Sh] wavelet $\psi$ [Sh] . The corresponding functions $\psi$ j, k $(x) =j/2$

[Sh]

j

$(2 x - k)$ constitute an orthonormal basis for

$2 \psi860$

Difference between

Blur

original and first blur

Difference between

Blur

first and second blur

Figure $12$ Differences between successive blurs give detail at different scales. $L^{2}$ (R), and for each f and each j the collection of inner

$\infty$

[Sh]

products $( - \infty f(x)\psi$ j, k  (  x )dx)k\in Z tells us how f ˆ (ξ) restricts to the set $2^{j} - {}^{1} \le \pi - 1|ξ| < 2^{j}$ . In other words, it gives us the jth Littlewood-Paley block of f . Scaling also plays an important role in computer vision, where one of the basic ways to “understand” an image (going back to at least the early $1970s$ ) is to blur it more and more, erasing more detail each time, so as to obtain approximations that are graded in “coarseness” (see figure $12$ ).
Details at different scales can then be found by considering the differences between successive coarsenings. The relationship with wavelet transforms is obvious! An important class of signals of interest to electrical engineers is that of bandlimited signals, which are functions f , usually of one variable only, for which the Fourier transform f ˆ vanishes outside some interval. In other words, the frequencies that make up f come from some “limited band.” If the interval is [− Ω , .
mega], then $f$ is said to have bandlimit $\Omega.$ Such functions are completely characterized by their values, often called samples, at integer multiples of $\pi/\Omega$ . Most manipulations on the signal f are carried out not directly but by operations on this sequence of samples. For instance, we VII. The Influence of Mathematics might want to restrict f to its “lower-frequency half.” To do this, we would define a function g by the condition that g ̂ ( $ξ) = f$ (ξ) if $|ξ| \le \Omega/2$ and is $0$ otherwise.
Equivalently, we could say that g ̂ (ξ) = f ˆ (ξ) L ̂ (ξ), where L ̂ ( $ξ) = 1$ if $|ξ| \le \Omega/2$ and $0$ otherwise. The next step is to let $L^{n}$ be $L(n\pi/\Omega)$ , and we find that  g(k\pi/. mega) ={}n\in ZLnf((k - n)\pi/. mega). To put this more neatly, if we write $a^{n}$ and b̃ n for $f(n\pi/\Omega)$ and $g(n\pi/\Omega)$ , respectively, then b̃ $k = n\inZL^{n}ak - n$ . On the other hand, g clearly has bandlimit $\Omega/2$ , so to characterize g it suffices to know only the sequence of samples at integer multiples of $2\pi/\Omega$ .
In other words, we just need to know the numbers $b^{k} =$ b̃ 2 k . The transition from f to g is therefore given by $b^{k} = n\inZL^{n}a^{2k} - n$ . In the appropriate electrical engineering vocabulary, we have gone from a critically sampled sequence for f (i . e . , its sampling rate corresponded exactly to its bandlimit) to a critically sampled sequence for g by filtering (multiplying f ˆ by some function, or convolving the sequence (f(n\pi/.
mega))n\in Z with a sequence of filter coefficients) and downsampling (retaining only one sample in two, because these are the only samples necessary to characterize the more narrowly bandlimited g). The upperfrequency half h of f can be obtained by the inverse Fourier transform of the restriction of f ˆ (ξ) to $|ξ| >\Omega/2$ . Like g, the function h is also completely characterized by its values at multiples of $2\pi/\Omega$ , and h can also be obtained from f by filtering and downsampling.
This split of f into its lower and upper frequency halves, or subbands, is thus given by formulas that are the exact equivalent of the generalized averaging and differencing encountered in the implementation of wavelet transforms for orthonormal wavelet bases supported on an interval. Subband filtering followed by critical downsampling had been developed in the electrical engineering literature before wavelets came along, but were typically not concatenated in several stages.
A concept of central importance in quantum physics is that of a unitary representation [IV.15](/part-04/operator-algebras) of a lie group [III.48](/part-03/lie-theory) on some hilbert space [III.37](/part-03/bayesian-analysis). In other words, given a Lie group G and a Hilbert space H, one interprets the elements g of G as unitary transformations of H. The elements of H are called states, and for certain Lie groups, if v is some fixed state, then the family of vectors {gv; g $\in$ G} is called a family of coherent states. Coherent states go back to work by Schrödinger in the $1920s$ .
Their name dates back to the $1950s$ , when they were used in quantum optics: the word “coherent” referred to the coherence of the light they were describing. These families turned out

VII.3.   Wavelets and Applications                                                                                      861

to be of interest in a much wider range of settings in
quantum physics, and the name stuck, even outside                                                w(t)
the original setting of optics. In many applications it
helps not to use the whole family of coherent states                                     0                  t
but only those coherent states that correspond to a cer-
tain kind of discrete subset of G. Wavelets turn out to
be just such a subfamily of coherent states: one starts
with a single, basic wavelet, and the transformations                0                   t 0                        t
that convert it (by dilation and translation) into the
remaining wavelets form a discrete semigroup of such
transformations.
   Despite the fact that wavelets synthesized ideas from
all these fields, their discovery originated in another
area altogether. In the late 1970 s, the geophysicist                                         0                  t
J. Morlet was working for an oil company. Dissatis-
fied with the existing techniques for extracting spe-
cial types of signals from seismograms, he came up
with an ad hoc transform that combined translations
and scalings: nowadays, it would be called a redun-                                                     0
                                                                                   0 t                                   t
dant wavelet transform. Other transforms in seismol-
ogy with which Morlet was familiar involve comparing
the seismic traces with special functions of the form          Figure 13 Top: an example of a window function w that
Wm, n (t) = w(t − nτ) cos(mωt), where w is a smooth             is used in practice by geophysicists, with just below it two
function that gently rises from 0 to 1 and then gently         examples of w(t−nτ)eimt , i.e., two “traditional” geophysics
decays to 0 again, all within a finite interval. Several dif-   wavelets. Bottom: a wavelet as used by Morlet, with two
ferent examples of functions w, proposed by several            translates and dilates just below it—these have constant
                                                               shape, unlike the “traditional” ones.
different scientists, are used in practice: because the
functions Wm, n look like small waves (they oscillate,
but have a nice beginning and end because of w) they           some years later, more mature forms of wavelet theory
are typically called “wavelets of X,” named after pro-         impinged on their field again.
poser X for that particular w. The reference functions            A few years later, in 1985, standing in line for a
in Morlet’s new ad hoc family, which he used to com-           photocopy machine at his university, harmonic analy-
pare pieces of seismic traces, were different in that they      sis expert Y. Meyer heard about this work and real-
were produced from a function w by scaling instead             ized it presented an interestingly different take on
of multiplying them by increasingly oscillating trigono-       the scaling techniques with which he and other har-
metric functions. Because of this, they always had the         monic analysts had long been familiar. At the time, no
same shape, and Morlet called them “wavelets of con-           wavelet bases were known in which the initial func-
stant shape” (see figure 13) in order to distinguish them       tion ψ combined the properties of smoothness and
from the wavelets of X (or Y, or Z, etc.).                     good decay. Indeed, there seemed to be a sublimi-
   Morlet taught himself to work with this new trans-          nal expectation in papers on wavelet expansions that
form and found it numerically useful, but had difficulty         no such orthonormal wavelet bases could exist. Meyer
explaining his intuition to others because he had no           set out to prove this, and to everyone’s surprise and
underlying theory. A former classmate pointed him in           delight he failed in the best possible way—by find-
the direction of A. Grossmann, a theoretical physicist,        ing a counterexample, the first smooth wavelet basis!
who made the connection with coherent states and,              Except that it later turned out not to have been the very
together with Morlet and other collaborators, started to       first: a few years before, a different harmonic analyst,
develop a theory for the transform in the early 1980 s.         O. Stromberg, had constructed a different example, but
Outside the field of geophysics it was no longer neces-         this had not attracted attention at the time.
sary to use the phrase “of constant shape,” so this was           Meyer’s proof was ingenious, and worked because
quickly dropped, which annoyed geophysicists when,             of some seemingly miraculous cancellations, which is