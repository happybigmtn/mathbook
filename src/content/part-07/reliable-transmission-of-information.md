# Reliable Transmission of Information

$878$

Combining the analysis of algorithms and their complexes with classical results from algebraic topology has in some cases resolved tricky open problems in this area, establishing that certain tasks are provably impossible to solve in a distributed system.

Further Reading

Algorithm design is a standard topic in the undergraduate computer-science curriculum, and it is the subject of a number of textbooks, including Cormen et al. ( 2001 ) and a book by Kleinberg and Tardos ( 2005 ). The perspective of early computer scientists on how to formalize efficiency is discussed by Sipser ( 1992 ). The TSP and the MSTP are fundamental to the field of combinatorial optimization; the TSP is used as a lens through which this field is surveyed in a book edited by Lawler et al. ( 1985 ) .
Approximation algorithms and local-search algorithms for computationally intractable problems are discussed in books edited by Hochbaum (1996) and by Aarts and Lenstra (1997), respectively. Web search and the role of link analysis is covered in a book by Chakrabarti ( 2002 ); beyond Web applications, there are a number of other interesting connections between eigenvectors and network structures, as described by Chung ( 1997 ). Distributed algorithms are covered in a book by Lynch ( 1996 ), and the topological approach to analyzing distributed algorithms is reviewed by Rajsbaum ( 2004 ).
Aarts, E., and J. K. Lenstra, eds. 1997 . Local Search in Combinatorial Optimization. New York: John Wiley. Chakrabarti, S. 2002 . Mining the Web. San Mateo, CA: Morgan Kaufman. Chung, F. R. K. 1997 . Spectral Graph Theory. Providence, RI: American Mathematical Society. Cormen, T., C. Leiserson, R. Rivest, and C. Stein. 2001 . Introduction to Algorithms. Cambridge, MA: MIT Press. Hochbaum, D. S., ed. 1996 . Approximation Algorithms for NP-hard Problems. Boston, MA: PWS Publishing. Kleinberg, J., and É. Tardos. 2005 . Algorithm Design. Boston, MA: Addison-Wesley. Lawler, E. L., J. K.
Lenstra, A. H. G. Rinnooy Kan, and D. B. Shmoys, eds. 1985 . The Traveling Salesman Problem: A Guided Tour of Combinatorial Optimization. New York: John Wiley. Lynch, N. 1996 . Distributed Algorithms. San Mateo, CA: Morgan Kaufman. Rajsbaum, $S.2004$ . Distributed computing column $15$ . ACM SIGACT News $35$ : $3$ . Sipser, M. 1992 . The history and status of the P versus NP question. In Proceedings of the $24th$ ACM Symposium on Theory of Computing. New York: Association for Computing Machinery.

VII. The Influence of Mathematics

VII . $6$ Reliable Transmission of

Information

Madhu Sudan

$1$

Introduction

The notion of “digital information” emerged in the middle of the twentieth century, in response to the advent of the telegraph and to the beginnings of computer science, which at the time was principally a theoretical discipline. Of course, the use of electricity to communicate signals goes back further, but the earlier uses involved signals of a “continuous” nature: music, voice, etc.
The new era was characterized by the transmission of (or the need to transmit) more “discrete” messages, i.e., messages such as English sentences, which can be described as finite sequences of letters taken from some finite alphabet. The phrase “digital information” came to be applied to such families of messages. Digital information posed some novel challenges to the engineers and mathematicians charged with the task of communicating such messages. The root cause of these challenges is “noise.” Every communication medium is noisy, and never transmits any signal completely accurately.
In the case of continuous signals, some how the receivers (typically , our ears and eyes) can adjust to such errors and learn to discount them. For example, if you play a very old recording of a musical performance, then there will typically be a crackling noise, but it is possible to ignore this, unless the quality is very bad indeed, and concentrate on the music. However, in the case of digital information errors can have a more catastrophic effect.
To see this, suppose that we are communicating in English sentences and that the communication medium makes occasional mistakes by altering one of the transmitted letters. In such a scenario the message

WE ARE NOT READY

could easily be changed into the message

WE ARE NOW READY.

All it takes is one error on the part of the communication medium, and the entire intention of the message is reversed. Digital information tends to be inherently intolerant of errors, and the mathematicians and engineers of the time were charged with the task of inventing methods that would make communication reliable even if the process of transmission is not.

VII.6.    Reliable Transmission of Information

   Here is one way of achieving this. To communicate
any message, the sender of the message repeats every
letter, say five times. For example, to send the message     channel.
  WE ARE NOT READY
the sender says something like
  WWWWWEEEEE
The receiver can then detect errors (as long as there
are not too many) by checking that every block of five
successive letters repeats the same letter. If this ever    On the other hand, in applications involving storage
fails to be the case, then it is clear that errors have     of digital information (in compact discs (CDs), digital
occurred during transmission. If it is not possible for     versatile discs (DVDs), etc.), the alphabet contains 256
five successive symbols to be in error (or even if it is     elements (the alphabet of “bytes”).
just very unlikely), then it follows that the resulting
scheme is also more reliable than the underlying means
of transmission. Finally, if even less error is possible,   errors are produced, then a lot more care is needed. At
then it may be possible for the receiver to determine
the actual message, rather than simply being able to
tell when errors have occurred. For example, if at most     errors that the channel can make, but within that limit
two symbols in any block of five can be erroneous, then
the most commonly occurring letter in each block of
five must be the letter from the original message: for
instance, a sequence such as
  WWWMWEFEEE
would be interpreted by the receiver as
  WE A . . . .
   Repeating every symbol five times in order to be able     results in an error with probability p. To be precise,
to correct two errors does not appear to be a very effi-
cient way to use the communication channel. Indeed, as
we will show in the rest of this article, when transmit-    with probability p it is some other element σ of Σ,
ting long messages one can do much better. However,
in order to understand this issue, we need to define
the process of communication, the model of error, and
the measures of performance more carefully. We do
so next.
2.1
The central object of attention in the problem of infor-    bet {0, 1}. Then, if the input bit is 0, say, the corre-
mation transmission is the “channel of communica-
tion,” or simply the channel. The channel has an input
(the original signal to be communicated) and an out-
put (the signal after it is transmitted). The input con-    plified (and even unnatural if Σ is not the binary alpha-
sists of a sequence of elements from some finite set:
by analogy with the English-language example, these
elements are called letters and the finite set, which is     to make communication reliable. Further more, many of
typically denoted Σ, is called an alphabet. The channel     the solutions found to make communication reliable in
attempts to transmit the input to the receiver, but while   this setting have been generalized to other scenarios,

879
doing so it may make some errors. The alphabet and the
process that under lies the errors are what specifies the
The alphabet Σ varies from scenario to scenario. In
the example described above, the alphabet consisted of
the English characters {A, B, . . . , Z}, and possibly some
AAAAA. . . .
ios, the alphabet is the “binary alphabet” that consists
just of the “letters” 0 and 1, which are known as bits.
Specifying an alphabet is easy, but if we wish to
define a good mathematical model for the way that
one extreme is a worst-case model suggested by Ham-
ming (1950), where there is some limit on the number of
it chooses the errors to be as damaging as possible. A
more benign class of errors was proposed by Shannon
(1948), who suggested that errors could be modeled by
a probabilistic process.
AAAAA . . .
many of the concepts below. In this model, the error
of the channel is specified by a real number param-
eter p, where 0 ⩽ p ⩽ 1. Every use of the channel
if the sender transmits an element σ ∈ Σ, then with
probability 1 − p the output for that element is σ but
chosen uniformly at random. Further more, and this is
very crucial to this model, the errors are assumed to be
independent, i.e., the channel repeats this process for
each letter it transmits with out any memory of how it
acted on previous symbols. We refer to this model as
the Σ-symmetric channel with parameter p (or Σ-SC(p))
2     Model                         in the rest of this article. A special case of particular
importance is the binary symmetric channel, which is
Channel and Errors
the Σ-symmetric channel when Σ is the binary alpha-
sponding output bit will be 0 with probability 1 − p and
1 with probability p.
While this model of error may seem rather over sim-
bet {0, 1}), it turns out that it captures the essence of
most mathematical challenges that arise when one tries

880

so this simple model is very useful both in practice and
in the theoretical study of communication.
2.2   Encoding and Decoding
Suppose the sender wishes to transmit a sequence
through a channel that makes errors. One way to com-
pensate for these errors is to send through the chan-
nel not the sequence itself but a modified version of
the sequence that contains redundant information. The
process of modification that we choose is called the
encoding of the message. We have already seen one
method of encoding, namely repeating each term in the
sequence several times. However, this is by no means
the only way of doing it, so to discuss encoding we use
the following general framework: if the sender has a
message consisting of a sequence of k elements of Σ,
then by some means or another it expands the message
into a new sequence, now consisting of n elements of Σ,
for some n > k. Formally, the sender applies an encod-
ing function E : Σ k → Σ n to the message. (Σ k stands for
the set of sequences of length k with letters in Σ, and Σ n
for the set of sequences of length n.) Thus, to convey
a message m = (m1 , m2 , . . . , mk ) to the receiver, the
sender transmits over the channel not the k symbols
of m but the n symbols of E(m).
   Errors may then be introduced, after which the
receiver receives a sequence r = (r1 , r2 , . . . , rn ); its goal   etition encoding” that repeats every letter of the alpha-
is then to “compress” the sequence r back to a k-letter
sequence, removing the error and obtaining the orig-
inal message m (at least if not too many errors have
occurred). It does this by applying a decoding function
D : Σ n → Σ k , which tells it how sequences of length n
are converted back into sequences of length k.
   The possible pairs of functions E, D describe the
options available to the designers of the communi-
cation system. Their choice determines the perfor-
mance of the system. Let us now describe how this
performance is measured.
2.3   Goals
Very informally, our goals are threefold. We would like
to make the communication as reliable as possible. At
the same time, we would like to maximize the utiliza-
tion of the channel. Finally, we would like to do so
with effective computation. We describe these goals
more carefully below, in the case of the model Σ-SC(p)
described earlier.
   Consider first the reliability. If we start with a mes-
sage m, encode it as E(m), and pass it through the

VII. The Influence of Mathematics
channel, then the output, after some random errors
have been introduced, will be a string y. The receiver
will decode y, producing a new message D(y). For each
message m, there is a certain probability of a decoding
error, i.e., a certain probability that D(y) will not in
fact be equal to the original message m. The reliabil-
ity of the communication is measured by the largest
of these probabilities. If this is small, then we know
that, whatever the original message m, a decoding error
is unlikely, and then we regard the communication as
reliable.
Next, let us look at the utilization of the channel. This
is measured by the rate of the encoding, i.e., the quan-
tity k/n. In other words, it is the ratio of the length of
the original message to the length of the encoded mes-
sage: the smaller this ratio, the less efficiently one is
using the channel.
Finally, practical considerations also require us to be
able to encode and decode quickly: a pair of reliable
and efficient encoding and decoding functions will not
be of much use if they are very time-consuming to com-
pute. Adopting the standard convention in algorithm
design, we regard our algorithms as feasible if they run
in polynomial time: that is, if their running time can be
bounded above by a polynomial function of the length
of their input and output.
To illustrate the above ideas, let us analyze the “rep-
bet five times. For simplicity, take the alphabet Σ to be
{0, 1}, let the probability p be fixed, and let us consider
the behavior of the model as the message length k tends
to . nfty. Our encoding function takes strings of length k to
strings of length 5 k and thus has a rate of 15 . Given any
particular block of five transmissions, the probability
that it contains three or more errors is
 
5 3          2      5 4              5 5
p =
3                   4                5
The probability that that block does not give rise to a
decoding error is 1 − p , so the probability that there is
no decoding error is (1 − p )k and the probability that
there is a decoding error is 1 − (1 − p )k . If we fix p > 0
and let k → . nfty, then (1 − p )k tends to 0 (exponentially
quickly), so the probability of decoding error tends to 1.
Thus, this encoding/decoding pair is highly unreliable,
and its rate is not too good either. The only redeeming
feature is that it is very easy indeed to compute. (Its
computational efficiency is easily seen to be bounded
by a number of operations that is linear in k.)
One way to salvage the repetition code is to repeat
every symbol c log k times. For a largish constant c, the

VII.6.   Reliable Transmission of Information

probability of a decoding error goes to 0, but now the
rate of the code goes to 0 as well. Prior to the work of
Shannon it may have even been believed that a trade-off
of this kind was inevitable: every encoding/decoding
scheme would either achieve a vanishingly small rate
or make mistakes with probability tending to 1. As we
will see later in the article, it is in fact possible to define   strings of length n in the alphabet Σ (that is, any subset
encoding schemes that achieve all three of our goals:
they operate at a positive rate, they can correct errors
that occur a positive proportion of the time (in either
the probabilistic or the worst-case model), and they use
efficient encoding and decoding algorithms. Most of the
insight for this remarkable result goes back to a sem-
inal paper by Shannon (1948). In that paper he gave
the first examples of encoding and decoding functions
that satisfied the first two goals, though they were not
computationally efficient.
   Shannon’s encoding and decoding functions were
therefore not practical, but we can now see, with the
benefit of hindsight, that ignoring the goal of efficient
computability in order to gain some theoretical insight
into the channels was extraordinarily fruitful. A gen-
eral rule of thumb seems to operate: that the perfor-
mance of the very best encoding and decoding func-
tions can be matched arbitrarily closely by encoding
and decoding functions that are also computationally
efficient. This justifies considering the goal of efficiency
separately from the other two goals.

In this section we will describe results that demonstrate
the existence of encoding and decoding functions that
have an extremely good rate and reliability. In order to
describe these results, first proved by Shannon, it will
be useful to consider two related notions introduced by
Hamming in work that was essentially concurrent with
that of Shannon.
   In order to understand these notions, let us start by
describing what makes one encoding function E better
or worse than another. The task of the decoding func-
tion is to work out, when it receives a string y, what the
original message m was. Notice that this is equivalent
to working out what the encoded message E(m) was,
since no two messages are encoded in the same way.
The possible encoded messages are called codewords:
that is, a codeword is a string of length n that arises as
E(m) for some message m ∈ Σ k .

881
What we are worried about is the possibility of con-
fusing two codewords after errors have been intro-
duced, and this depends only on the set of codewords,
and not on which codeword corresponds to which orig-
inal message. Therefore, we adopt what at first seems a
strange definition: an error-correcting code is any set of
of Σ n ). The strings in an error-correcting code are still
called codewords. This definition completely ignores
the actual process of encoding of a message, but that
is so that we can focus on the rate and the decoding
error while ignoring computational efficiency. If we are
given an encoding function E, then the corresponding
error-correcting code is simply the set of all the code-
words of E. Mathematically, this is just the image of the
function E.
What makes an error-correcting code good or bad? To
answer this question, let us consider what happens if
the alphabet is {0, 1} and the code contains two strings
x = (x1 , x2 , . . . , xn ) and y = (y1 , y2 , . . . , yn ) that dif-
fer in precisely d places. If errors are introduced with
probability p, then the probability that x is converted
into y is pd (1−p)n−d . Assuming that p < 12 , this prob-
ability gets smaller as d increases, so the smaller d is,
the more likely the strings x and y are to be confused.
It seems preferable, therefore, that there should not
be too many pairs of strings in the code that differ in
just a few places. A similar argument applies to larger
alphabets as well.
The above thoughts lead to a definition that is very
3   The Existence of Good Encoding
and Decoding Functions
belonging to Σ n , the Hamming distance between x and
y is defined to be the number of coordinates i for
which xi = yi . For example, let Σ = {a, b, c, d} and
let n = 6. The strings abccad and abdcab differ in
the third and sixth places and are identical otherwise,
so their Hamming distance is 2. Our goal is to find an
encoding function E such that the associated code max-
imizes the typical Hamming distance between pairs of
codewords.
Shannon’s solution to this is an extremely simple
application of the probabilistic method [IV.19 §3](/part-04/extremal-and-probabilistic-combinatorics):
he picks the encoding function at random. That is, for
every message m, the encoding E(m) is chosen entirely
randomly from the set Σ n , with all choices equally
likely. Further more, for every message m, this choice
is independent of the encoding of every other mes-
sage m . It is a good exercise in basic probability to
see that such a choice almost always leads to a code

882

where the distances between codewords are on aver-
age large. In fact, even the minimum distance between
codewords is almost always large. However, we will not
show this. Instead, we will argue that with high prob-
ability this random choice leads to a “nearly optimal”
encoding function, from the point of view of rate and
reliability.
  First, let us consider what the decoding function
ought to be. In the absence of computational require-
ments, it is not hard to say what the “optimal” decod-
ing algorithm is. If you receive a sequence z, then you
should choose the message m that is most likely to
have resulted in this sequence. For the model Σ-SC(p)
with p < 1 − 1/|Σ|, it is easily verified that this will be     ming distance from y will almost certainly choose
the message m for which the encoding E(m) is nearest
to z, as measured by Hamming distance. (If the min-
imum distance is attained by both E(m) and E(m ),
then one can make an arbitrary choice between them.)
The condition on p is important here. It ensures that
when the sequence E(m) passes through the channel,
the most likely output corresponding to any given term,
out of the |Σ| different possibilities, is the same as the
input. With out this condition, there would be no rea-
son to expect z to be close to E(m). We shall argue that
there is a number C, depending only on the error proba-
bility p and the size of the alphabet, such that for a ran-    sequences at a distance of at most r is
dom encoding function with rate smaller than C, this
decoding function recovers the original message with a
high probability. As an aside, Shannon also showed that
for the same constant C, any attempt to communicate
at rates greater than C would lead to errors with prob-
ability exponentially close to 1. Because of this result,
the constant C is known as the Shannon capacity of the
channel.
  Once again, for simplicity we shall consider just the
case of the binary alphabet {0, 1}. In this case we are
choosing a random function E from {0, 1}k to {0, 1}n ,
and we would like to show that, under suitable circum-
st ances, the resulting code will almost certainly be very
reliable. In order to do this, we shall focus on a single
message m, and rely on two basic ideas.
  The first idea is a precise form of the law of large
numbers [III.71 §4](/part-03/probability-distributions). If the error probability is p, then
the expected number of errors introduced into a code-
word E(m) is pn, so, if n is large, then we expect that
the actual number of errors will almost certainly be very
close to this, just as, if you toss a fair coin ten thousand   H(0) = 0 and H( 2 ) = 1. So, if α < 2 , then H(α) < 1,
times, you will be surprised if the number of heads is
not close to five thousand. The result that expresses
this formally is as follows.

VII. The Influence of Mathematics
Claim. There exists a constant c > 0 such that the
probability that the number of errors exceeds (p + )n
2
is at most 2−c n .
The same can be said of the probability that the num-
ber of errors is less than (p − )n, but we shall not use
this result.
2
When n is large, 2−c n is extremely small, so the
number of errors is almost certainly at most (p + )n.
The number of errors equals the Hamming distance
from y, the output of the channel, to E(m), the code-
word that was transmitted. Therefore, the decoding
function that chooses the codeword with smallest Ham-
E(m), provided that there is no message m such that
E(m ) is closer to y than (p + )n.
The second idea, which allows us to say that this will
almost certainly be the case, is that “Hamming balls are
small.” Let z be a sequence in {0, 1}n . Then the Ham-
ming ball of radius r about z is the set of all sequences
w with Hamming distance at most r from z. How big is
this set? Well, in order to specify a sequence w with
Hamming distance exactly d from z, it is enough to
specify
  the set of d places where w and z differ. There
are n d ways of choosing this set, so the number of
     
n       n      n             n
+
0       1      2             r
If r = αn and α < 12 , then this number is at most a
n
constant times r , because each term is at least
n−r   1−α
=
r     α
times the one before. But
 
n           n!
=
r      r !(n − r )!
If we now use stirling’s formula [III.31](/part-03/the-gamma-function) or the looser
approximation n! = (n/e)n , then we find that this is
about (1/α(1 − α))n , which is 2 H(α)n , where
H(α) = −α log2 α − (1 − α) log2 (1 − α).
(Note that H(α) is positive, because α and 1−α are less
than 1 and therefore have negative logarithms.) The
function H is called the entropy function. It is contin-
1
uous and strictly increasing on the interval [0, 2 ] with
1                 1
and therefore 2 H(α)n is exponentially smaller than 2 n :
this is what is meant by saying that the Hamming ball
of radius αn is small.

VII.6.   Reliable Transmission of Information

   Let us set α to be p +  < 12 . Then the probabil-
ity that a single randomly chosen sequence E(m ) lies
in the Hamming ball of radius (p + )n about y is
at most 2 H(p+2)n 2−n . (The 2 is to compensate for
slight inaccuracies in the above estimate for the size
of the ball.) Since there are 2 k − 1 possibilities for m ,
the probability that one can be found for which E(m )
lies in the ball is at most 2 k 2 H(p+2)n 2−n . Therefore, if
k ⩽ n(1 − H(p + 2) − ), this probability is at most
2−n , which is exponentially small.
   Because we can choose  to be as small as we like,
we can make k/n as close as we like to 1 − H(p) while
still maintaining an exponentially small probability of
decoding error. It turns out that the quantity 1 − H(p)
is the constant C discussed earlier: the Shannon capac-
ity of the binary symmetric channel. Thus, the capacity
of the binary symmetric channel is always positive if
p < 12 .
   Shannon’s theorem and proof are significantly more
general than the above example demonstrates. For a
wide variety of channels, and for a wide variety of mod-
els of (probabilistic) error, his theory pins down the
capacity of the channel and shows that reliable com-
munication is possible if and only if the rate of the
channel is less than its capacity. Shannon’s proof is
a remarkable example of the use of the probabilis-
tic method in the practice of engineering. Note, how-
ever, that the encoding and decoding algorithms are
quite impractical. The proof gives no clue about how
to find an encoding function, though of course one
can consider every encoding function E : {0, 1}k →
{0, 1}n to check if it is good. However, even if such
a function is found, it may have no succinct descrip-
tion, in which case the encoder and decoder have to
store this encoding function as an exponentially long
table in their memory. Finally, the decoding algorithm
seems to involve a brute-force search for the near-
est codeword, a problem which seems to be the most
serious obstacle to obtaining a computationally effi-
cient version of Shannon’s theorem that can be used
in practice. What the theorem definitely does give us
is a significant insight into the limitations and poten-
tial utility of the communication channel. With this in
mind, we can set ourselves the right targets to strive
for when we come to devise more practical encoding
and decoding procedures. In the next section we will
show that it is possible to achieve a fixed rate that is
bounded away from zero, to tolerate a constant frac-
tion of errors, and to do both of these with efficient
algorithms.

883
4   Efficient Encoding and Decoding
Let us now turn to the task of designing encoding
and decoding functions that can be calculated effi-
ciently. Currently, there are at least two very differ-
ent approaches to building such functions. We describe
here an approach based on algebra over finite fields.
The alternative approach is based on the construction
of expanding graphs [III.24](/part-03/expanders), but we will not describe
that here.
4.1   Codes for Large Alphabets Using Algebra
In this section we describe a simple way to get an encod-
ing function E : Σ k → Σ n , where Σ is a finite field
[I.3 §2.2](/part-01/fundamental-definitions) with at least n elements. (Recall that there are
finite fields with q elements whenever q is of the form
pt for a prime p and a positive integer t.) These codes
were introduced by Reed and Solomon (1960) and have
since been called the Reed–Solomon codes.
A Reed–Solomon code is specified by a sequence
of n distinct field elements α1 , . . . , αn ∈ Σ. Given
a message m = (m0 , m1 , . . . , mk−1 ) ∈ Σ k , we asso-
ciate with the message the polynomial M(x) = m0 +
m1 x + · · · + mk−1 x k−1 . The encoding of m is sim-
ply the sequence E(m) = M(α1 ), M(α2 ), . . . , M(αn ). In
other words, to encode a sequence m, you treat the
terms of the sequence as the k coefficients of a polyno-
mial of degree k − 1 and write out the values that this
polynomial takes at α1 , . . . , αn .
Before describing the error-correcting capability of
this code, let us note that it is very succinctly repre-
sented: all that is needed to specify it is a descrip-
tion of the field Σ and the sequence of n elements
α1 , . . . , αn . It is easy to show that the number of addi-
tions and multiplications needed to compute M(α) is
at most Ck for some constant C. (For example, to work
out 3α3 − α2 + 5α + 4, you start with 3, multiply by
α, subtract 1, multiply by α, add 5, multiply by α,
and add 4.) Therefore, the number of field operations
needed to compute the entire encoding is bounded
above by Cnk, for some (different) constant C. (In fact,
more sophisticated and efficient algorithms are known
for the encoding problem that take at most Cn(log n)2
steps.)
Now let us consider the error-correcting properties
of the code. We start by showing that the encodings
of any two messages m1 and m2 have a Hamming dis-
tance of at least n − (k − 1). To see this, let M1 (x) and
M2 (x) be the polynomials associated with m1 and m2 .
Now the difference p(x) = M1 (x) − M2 (x) has degree

884

at most k − 1, and it is not the zero polynomial (since
M1 and M2 are distinct), and therefore it has at most
k − 1 roots. This tells us that there are at most k − 1
values of α for which M1 (α) = M2 (α). It follows that
the Hamming distance between the sequences

and

is at least n − k + 1.
   It follows that if z is any sequence, then its Ham-
ming distance from at least one of E(m1 ) and E(m2 )

is greater than 2 (n − k) (since otherwise the distance
between E(m1 ) and E(m2 ) would have to be at most
n − k). Therefore, if the number of errors that occur
during transmission is at most 2 (n − k), then the orig-
inal message m is uniquely determined by the received
sequence z. What is much less obvious is that there
is an efficient algorithm for working out what m was,
but, remarkably, it is possible to compute m with a
polynomial-time algorithm (in n), which we shall now
describe.
  What must the decoding algorithm do? It is given
the numbers α1 , . . . , αn and the received sequence
z1 , . . . , zn and is required to find a polynomial M of
degree k − 1 or less such that M(αi ) = zi for all but at

most 2 (n − k) values of i. If such a polynomial exists,
then it is unique, as we have just seen, and its coeffi-
cients will give the original message m (if the number
of errors is at most 2 (n − k)).
  If there were no errors, then our task would be much
easier: one can determine the coefficients of a polyno-
mial of degree k − 1 from k of its values by solving k
simultaneous equations. However, if some of the val-
ues we use are in correct, then we will end up with a
completely different polynomial, so this method is not
easy to use for the problem we actually face.
  To over come this difficulty, let us imagine that
M exists and that the errors introduced into the
sequence M(α1 ), . . . , M(αn ) occur at i1 , . . . , is , where   binary codes.
    1
s ⩽ 2 (n − k). Then the polynomial B(x) = (x−αi1 ) · · ·
(x − αis ) has degree at most 2 (n − k) and is zero if and
only if x is equal to αij for some j. Let us set A(x) to
equal M(x)B(x). Then A(x) is a polynomial of degree

at most k − 1 + 2 (n − k) = 2 (n + k − 2), and for every
i we have A(αi ) = zi B(αi ). (If there is no error at i,
then this is obvious, since zi = M(αi ), and if there is
an error at i, then both sides are 0.)

VII. The Influence of Mathematics
Conversely, suppose that we manage to find polyno-
mials A(x), of degree at most 12 (n + k − 2), and B(x),
of degree at most k − 1, such that A(αi ) = zi B(αi ) for
every i. Then R(x) = A(x) − M(x)B(x) is a polynomial
of degree at most 12 (n+k−2), and R(αi ) = 0 whenever
1
M(αi ) = zi . Since there are at most 2 (n − k) errors,
E(m1 ) = (M1 (α1 ), M1 (α2 ), . . . , M1 (αn ))
this happens for at least n − 2 (n − k) = 2 (n + k) val-
ues of i. Therefore, the number of roots of R is bigger
than its degree, from which it follows that R is identi-
E(m2 ) = (M2 (α1 ), M2 (α2 ), . . . , M2 (αn ))
this we can determine M: given k values of x for which
A(x) and B(x) are nonzero, one can determine k values
of M(x) = A(x)/B(x), and hence determine M.
1
find polynomials A(x) and B(x) with the required
properties. The n constraints A(αi ) = zi B(αi ) turn
1                                 into n linear constraints on the unknown coefficients
of A and B. Since B has 12 (n − k) + 1 coefficients and A
1
has 2 (n+k) coefficients, the total number of unknowns
is n + 1. Since the system of equations is homogeneous
(that is, we obtain a solution if we take all unknowns to
be zero) and the number of unknowns is greater than
the number of constraints, there must be a nontrivial
solution: that is, a solution where A(x) and B(x) are
not both the zero polynomial. More over, we can find
such a solution by Gaussian elimination, which takes
at most Cn3 steps.
To summarize: we construct a code by exploiting the
1
fact that two distinct low-degree polynomials cannot
be equal for too many values. We then exploit the rigid
algebraic structure of low-degree polynomials for the
1
purposes of decoding. The main tool that allows us to
do this is linear algebra and in particular the solving of
systems of simultaneous equations.
4.2   Reducing the Size of the Alphabet Using
Good Codes
The ideas described in the previous section show us
how to build codes with efficient encoding and decod-
ing algorithms, but they use relatively large alphabets.
In this section we shall exploit these results to build
To begin with, let us consider a very obvious method
1
of converting codes over large alphabets into codes
over the binary alphabet {0, 1}. For simplicity, assume
that we have a Reed–Solomon code over an alphabet Σ
1
of size 2 l for some integer l. Then we can associate the
elements of Σ with binary strings of length l. In such a
case, we can regard the Reed–Solomon encoding func-
tion, which maps Σ k to Σ n , as a function from {0, 1}lk

VII.6.   Reliable Transmission of Information

to {0, 1}ln . (For instance, an element of Σ k is a sequence   element of Σ. This results in a sequence of n elements
of k objects, each of which is a binary sequence of
length l. Putting them together produces a single binary
sequence of length kl.) Since the encodings of two dis-
tinct messages differ for at least n − k + 1 elements of
Σ, they must also differ on at least n − k + 1 bits.
   This gives a fairly reasonable code over the binary
alphabet. However, n − k + 1 is not as large as a fixed
fraction of ln: the ratio (n − k + 1)/ln is less than 1/l,     again, stating merely that they exist. Since efficiency
and since we need 2 l , the size of Σ, to be at least n, we     is supposed to be our priority, this may seem rather
find that this fraction is at most 1/ log2 n, which tends
to zero as n tends to infinity. However, this can be fixed
in a simple way, as we shall see.
   The problem with the simple binary approach is that
two different elements of Σ may be represented by
binary sequences that differ in just one bit. However,
the Hamming distance between two binary sequences
of length l is usually much larger: it is more like cl for     polynomial function of n. This is a useful principle:
some positive constant c. Suppose that we could repre-
sent the elements of Σ as binary sequences of some
length L in such a way that the Hamming distances
between any two of the sequences used was at least c L.
This would allow us to improve our argument above:
if the encodings of two messages were different for at
least n − k + 1 elements of Σ, then they would have to
differ on at least c L(n − k + 1) bits rather than just
n − k + 1, and this is a positive fraction of Ln.
   What we are asking for is an encoding of the binary
sequences of length l as sequences of length L in such
a way that no two codewords are closer than c L to each
other. But we know, from the previous section, that
such an encoding exists, provided that L and c satisfy
appropriate conditions: for instance, it is possible to
find an encoding function that works with L ⩽ 10 l and
     1
c ⩾ 10  .
   So how do we use this? We start with a binary
sequence m of length lk. As above, we associate with
this a sequence of length k in the alphabet Σ. We then
encode this sequence using the Reed–Solomon code,
obtaining a sequence of length n in the alphabet Σ.
Next, we convert each term of this sequence into a
binary sequence of length l. And, finally, we encode
each of these n binary sequences as a sequence of
length L using a good encoding function, obtaining as
a result a binary sequence of length Ln. We then pass
this sequence through the channel, where errors may
be introduced. The receiver then breaks the received
sequence up into n blocks of length L, decodes each
block to work out what binary sequence of length l
gave rise to it, and interprets that binary sequence as an     the biggest success story for error-correcting codes.

885
of Σ. It then uses the Reed–Solomon decoding algo-
rithm to decode this sequence, producing a sequence
of k elements of Σ. Finally, this can be converted into a
binary sequence of length lk.
We have said nothing about the efficiency of the en-
coding and decoding procedures that convert binary
sequences of length l into ones of length L and back
strange: do we not now face exactly the same problem
that we were trying to solve in the first place? Luckily
we do not, because although these encoding and decod-
ing procedures may take exponentially long, they take
exponentially long as a function of L, and L is much
much smaller than n. Indeed, L is proportional to log n,
from which it follows that 2 L is bounded above by a
one can afford procedures of exponential complexity
provided that one only ever applies them to very short
strings.
Thus even though we have not managed to specify
the code explicitly, we have demonstrated that there
is an encoding and decoding algorithm that runs in
polynomial time and that corrects a constant fraction
of errors. To complete this section, let us address the
question of the probability of decoding error, which we
have not yet discussed. The technique described above,
of composing encoding functions (and decoding func-
tions), can also be used to improve the above code so
that the encoding and decoding still take place in poly-
nomial time, but now the decoding error probability is
exponentially small on the binary symmetric channel
with parameter p, and the rate is arbitrarily close to the
Shannon capacity, which is the theoretical maximum.
(The idea is to compose a Reed–Solomon code that has
rate close to 1 with a random inner code, and then to
show that with random errors most of the inner decod-
ing steps decode correctly. One then uses the outer
decoding step to convert the “mostly correct decoding”
to a “fully correct decoding.”)
5   Impact on Communication and Storage
The mathematical theory of error-correcting codes has
made a deep impact on the technologies for storage
and communication of information, and we elaborate a
little on this below.
Storage of information on digital media is probably

886

Most known forms of storage media, and in particu-
lar standards for audio and data CDs and DVDs, pre-
scribe error-correcting codes based on Reed–Solomon
codes. Specifically, they are based on a code that maps
F223
  256 to F256 , where F256 is the finite field with 256 ele-   further design. For example, the Mariner spacecraft
ments. In audio CDs, codes are use to protect from
minor scratches, though more serious scratches do lead
to audible errors. In data CDs the error correction is
stronger (with more redundancies), so that even seri-
ous scratches do not lead to loss of data. In all cases
(CDs and DVDs) the readers for these devices use fast
algorithms for decoding when reading the information
on the media. Typically, these algorithms are based on
the idea of the previous section, but are much faster
implementations (in particular, an algorithm due to
E. Berlekamp is widely used). Indeed, several CD read-
ers owe their faster reading speed to faster decoding
algorithms. Similarly, the increased storage capacity
of DVDs (compared with CDs) is attributed in part to
better error-correcting codes. Indeed, error-correction
technology played a crucial role in establishing the
dominance of audio CDs, which store music digitally,
over the traditional, and now almost extinct, gramo-
phone records, which store music in continuous forms.
Thus, mathematical advances in coding theory have
played an influential role in this technology.
   Similarly, error-correcting codes have had a profound     some careful design choices.
effect on communication. Since the late 1960 s, error-
correcting codes (and decoding) have been used for
communication from satellites to their base stations
on Earth. Of late, error-correcting codes are also being     raise the challenge of how to adapt technology to
used in cellular phone communications and modems.
Again, the most commonly used code at the time of the
writing of this article is the Reed–Solomon code, though     well, challenge mathematicians to come up with a for-
this situation has been changing rapidly since the dis-
covery of a new class of codes called “turbo codes.” This    And if such a model and analysis emerges, it is likely to
new family of codes seems to offer significant resilience
to random errors (more so than that offered by meth-
ods based on Reed–Solomon codes) and uses a simple
and quick algorithm, even when the codes used have
small block length. These codes and the corresponding
decoding algorithm have led to a resurgence of inter-
est in codes constructed with the help of insights from
graph theory [III.34]. Many of the good properties
of turbo codes have been observed only empirically:
that is, the codes seem to work very well in practice
but it has not yet been proved rigorously that they do.
Nevertheless, the observations have been so compelling
that new standards for communication are starting to
prescribe these codes.

VII. The Influence of Mathematics
Finally, it must be stressed that while many of the
codes used are based on ones that are studied in the
mathematical literature, this should not be taken to
mean that they can be deployed immediately with out
255
used not a Reed–Muller code but a variant of it designed
to allow for synchronization between blocks. Similarly,
the Reed–Solomon codes used in storage devices are
carefully spread out over the disc, so as to allow the
physical device to resemble more closely the model of
a code over a large alphabet. Note that errors due to
a scratch on the disc surface tend to ruin a large col-
lection of bits in a small localized part of the disc. If
all the data from a block were sitting in such a neigh-
borhood, the entire block would be lost. So each block
of 255 bytes of information is spread out all over the
disc. On the other hand, the bytes themselves, which
are elements of F256 , are written as eight bits in close
proximity. So a scratch corrupting one bit out of these
eight is also likely to corrupt others in the neighbor-
hood. However, this is all right from the perspective of
the model that views the entire collection of eight bits
as a single element. In general, working out the right
way to apply the theory of error correction to a given
scenario is a major challenge, and many success stories
would not have been success stories had it not been for
Mathematics and engineering continue to feed each
other in this arena. Mathematical successes, such as
new algorithms for decoding Reed–Solomon codes,
exploit new algorithms. Engineering successes, such as
the discovery of turbo codes that perform extremely
mal model and analysis that can explain this success.
lead to the discovery of new codes that might surpass
the performance of turbo codes and lead to a new set
of standards!
6   Bibliographic Notes
The theory of reliable communication and storage of
information owes much to the seminal works of Shan-
non (1948) and Hamming (1950), which formed the
basis for much of this article. The Reed–Solomon codes
of section 4.1 are from Reed and Solomon (1960). Their
decoding algorithm originates in the work of Peters on
(1960), though the algorithm given here is significantly
simplified. The technique of composing codes is due to
Forney (1966).