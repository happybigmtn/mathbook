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
In the case of continuous signals, somehow the receivers (typically , our ears and eyes) can adjust to such errors and learn to discount them. For example, if you play a very old recording of a musical performance, then there will typically be a crackling noise, but it is possible to ignore this, unless the quality is very bad indeed, and concentrate on the music. However, in the case of digital information errors can have a more catastrophic effect.
To see this, suppose that we are communicating in English sentences and that the communication medium makes occasional mistakes by altering one of the transmitted letters. In such a scenario the message

WE ARE NOT READY

could easily be changed into the message

WE ARE NOW READY.

All it takes is one error on the part of the communication medium, and the entire intention of the message is reversed. Digital information tends to be inherently intolerant of errors, and the mathematicians and engineers of the time were charged with the task of inventing methods that would make communication reliable even if the process of transmission is not.

VII.6.    Reliable Transmission of Information                                                                    879

   Here is one way of achieving this. To communicate        doing so it may make some errors. The alphabet and the
any message, the sender of the message repeats every        process that underlies the errors are what specifies the
letter, say five times. For example, to send the message     channel.
  WE ARE NOT READY                                             The alphabet Σ varies from scenario to scenario. In
                                                            the example described above, the alphabet consisted of
the sender says something like
                                                            the English characters {A, B, . . . , Z}, and possibly some
  WWWWWEEEEE          AAAAA. . . .                          punctuation symbols. In most communication scenar-
The receiver can then detect errors (as long as there       ios, the alphabet is the “binary alphabet” that consists
are not too many) by checking that every block of five       just of the “letters” 0 and 1, which are known as bits.
successive letters repeats the same letter. If this ever    On the other hand, in applications involving storage
fails to be the case, then it is clear that errors have     of digital information (in compact discs (CDs), digital
occurred during transmission. If it is not possible for     versatile discs (DVDs), etc.), the alphabet contains 256
five successive symbols to be in error (or even if it is     elements (the alphabet of “bytes”).
just very unlikely), then it follows that the resulting        Specifying an alphabet is easy, but if we wish to
scheme is also more reliable than the underlying means      define a good mathematical model for the way that
of transmission. Finally, if even less error is possible,   errors are produced, then a lot more care is needed. At
then it may be possible for the receiver to determine       one extreme is a worst-case model suggested by Ham-
the actual message, rather than simply being able to        ming (1950), where there is some limit on the number of
tell when errors have occurred. For example, if at most     errors that the channel can make, but within that limit
two symbols in any block of five can be erroneous, then      it chooses the errors to be as damaging as possible. A
the most commonly occurring letter in each block of         more benign class of errors was proposed by Shannon
five must be the letter from the original message: for       (1948), who suggested that errors could be modeled by
instance, a sequence such as                                a probabilistic process.
  WWWMWEFEEE          AAAAA . . .                              We will focus on one probabilistic model to illustrate
                                                            many of the concepts below. In this model, the error
would be interpreted by the receiver as
                                                            of the channel is specified by a real number param-
  WE A . . . .                                              eter p, where 0 ⩽ p ⩽ 1. Every use of the channel
   Repeating every symbol five times in order to be able     results in an error with probability p. To be precise,
to correct two errors does not appear to be a very effi-      if the sender transmits an element σ ∈ Σ, then with
cient way to use the communication channel. Indeed, as      probability 1 − p the output for that element is σ but
we will show in the rest of this article, when transmit-    with probability p it is some other element σ of Σ,
ting long messages one can do much better. However,         chosen uniformly at random. Further more, and this is
in order to understand this issue, we need to define         very crucial to this model, the errors are assumed to be
the process of communication, the model of error, and       independent, i.e., the channel repeats this process for
the measures of performance more carefully. We do           each letter it transmits without any memory of how it
so next.                                                    acted on previous symbols. We refer to this model as
                                                            the Σ-symmetric channel with parameter p (or Σ-SC(p))
                        2     Model                         in the rest of this article. A special case of particular
                                                            importance is the binary symmetric channel, which is
2.1      Channel and Errors
                                                            the Σ-symmetric channel when Σ is the binary alpha-
The central object of attention in the problem of infor-    bet {0, 1}. Then, if the input bit is 0, say, the corre-
mation transmission is the “channel of communica-           sponding output bit will be 0 with probability 1 − p and
tion,” or simply the channel. The channel has an input      1 with probability p.
(the original signal to be communicated) and an out-           While this model of error may seem rather oversim-
put (the signal after it is transmitted). The input con-    plified (and even unnatural if Σ is not the binary alpha-
sists of a sequence of elements from some finite set:        bet {0, 1}), it turns out that it captures the essence of
by analogy with the English-language example, these         most mathematical challenges that arise when one tries
elements are called letters and the finite set, which is     to make communication reliable. Further more, many of
typically denoted Σ, is called an alphabet. The channel     the solutions found to make communication reliable in
attempts to transmit the input to the receiver, but while   this setting have been generalized to other scenarios,

880                                                                                       VII. The Influence of Mathematics

so this simple model is very useful both in practice and             channel, then the output, after some random errors
in the theoretical study of communication.                           have been introduced, will be a string y. The receiver
                                                                     will decode y, producing a new message D(y). For each
2.2   Encoding and Decoding                                          message m, there is a certain probability of a decoding
                                                                     error, i.e., a certain probability that D(y) will not in
Suppose the sender wishes to transmit a sequence
                                                                     fact be equal to the original message m. The reliabil-
through a channel that makes errors. One way to com-
                                                                     ity of the communication is measured by the largest
pensate for these errors is to send through the chan-
                                                                     of these probabilities. If this is small, then we know
nel not the sequence itself but a modified version of
                                                                     that, whatever the original message m, a decoding error
the sequence that contains redundant information. The
                                                                     is unlikely, and then we regard the communication as
process of modification that we choose is called the
                                                                     reliable.
encoding of the message. We have already seen one
                                                                        Next, let us look at the utilization of the channel. This
method of encoding, namely repeating each term in the
                                                                     is measured by the rate of the encoding, i.e., the quan-
sequence several times. However, this is by no means
                                                                     tity k/n. In other words, it is the ratio of the length of
the only way of doing it, so to discuss encoding we use
                                                                     the original message to the length of the encoded mes-
the following general framework: if the sender has a
                                                                     sage: the smaller this ratio, the less efficiently one is
message consisting of a sequence of k elements of Σ,
                                                                     using the channel.
then by some means or another it expands the message
                                                                        Finally, practical considerations also require us to be
into a new sequence, now consisting of n elements of Σ,
                                                                     able to encode and decode quickly: a pair of reliable
for some n > k. Formally, the sender applies an encod-
                                                                     and efficient encoding and decoding functions will not
ing function E : Σ k → Σ n to the message. (Σ k stands for
                                                                     be of much use if they are very time-consuming to com-
the set of sequences of length k with letters in Σ, and Σ n
                                                                     pute. Adopting the standard convention in algorithm
for the set of sequences of length n.) Thus, to convey
                                                                     design, we regard our algorithms as feasible if they run
a message m = (m1 , m2 , . . . , mk ) to the receiver, the
                                                                     in polynomial time: that is, if their running time can be
sender transmits over the channel not the k symbols
                                                                     bounded above by a polynomial function of the length
of m but the n symbols of E(m).
                                                                     of their input and output.
   Errors may then be introduced, after which the                       To illustrate the above ideas, let us analyze the “rep-
receiver receives a sequence r = (r1 , r2 , . . . , rn ); its goal   etition encoding” that repeats every letter of the alpha-
is then to “compress” the sequence r back to a k-letter              bet five times. For simplicity, take the alphabet Σ to be
sequence, removing the error and obtaining the orig-                 {0, 1}, let the probability p be fixed, and let us consider
inal message m (at least if not too many errors have                 the behavior of the model as the message length k tends
occurred). It does this by applying a decoding function              to . nfty. Our encoding function takes strings of length k to
D : Σ n → Σ k , which tells it how sequences of length n             strings of length 5 k and thus has a rate of 15 . Given any
are converted back into sequences of length k.                       particular block of five transmissions, the probability
   The possible pairs of functions E, D describe the                 that it contains three or more errors is
options available to the designers of the communi-                                                                 
                                                                                  5 3          2      5 4              5 5
cation system. Their choice determines the perfor-                        p =        p (1 − p) +        p (1 − p) +       p .
                                                                                  3                   4                5
mance of the system. Let us now describe how this
                                                                     The probability that that block does not give rise to a
performance is measured.
                                                                     decoding error is 1 − p , so the probability that there is
                                                                     no decoding error is (1 − p )k and the probability that
2.3   Goals
                                                                     there is a decoding error is 1 − (1 − p )k . If we fix p > 0
Very informally, our goals are threefold. We would like              and let k → . nfty, then (1 − p )k tends to 0 (exponentially
to make the communication as reliable as possible. At                quickly), so the probability of decoding error tends to 1.
the same time, we would like to maximize the utiliza-                Thus, this encoding/decoding pair is highly unreliable,
tion of the channel. Finally, we would like to do so                 and its rate is not too good either. The only redeeming
with effective computation. We describe these goals                   feature is that it is very easy indeed to compute. (Its
more carefully below, in the case of the model Σ-SC(p)               computational efficiency is easily seen to be bounded
described earlier.                                                   by a number of operations that is linear in k.)
   Consider first the reliability. If we start with a mes-              One way to salvage the repetition code is to repeat
sage m, encode it as E(m), and pass it through the                   every symbol c log k times. For a largish constant c, the

VII.6.   Reliable Transmission of Information                                                                                    881

probability of a decoding error goes to 0, but now the              What we are worried about is the possibility of con-
rate of the code goes to 0 as well. Prior to the work of         fusing two codewords after errors have been intro-
Shannon it may have even been believed that a trade-off           duced, and this depends only on the set of codewords,
of this kind was inevitable: every encoding/decoding             and not on which codeword corresponds to which orig-
scheme would either achieve a vanishingly small rate             inal message. Therefore, we adopt what at first seems a
or make mistakes with probability tending to 1. As we            strange definition: an error-correcting code is any set of
will see later in the article, it is in fact possible to define   strings of length n in the alphabet Σ (that is, any subset
encoding schemes that achieve all three of our goals:            of Σ n ). The strings in an error-correcting code are still
they operate at a positive rate, they can correct errors         called codewords. This definition completely ignores
that occur a positive proportion of the time (in either          the actual process of encoding of a message, but that
the probabilistic or the worst-case model), and they use         is so that we can focus on the rate and the decoding
efficient encoding and decoding algorithms. Most of the            error while ignoring computational efficiency. If we are
insight for this remarkable result goes back to a sem-           given an encoding function E, then the corresponding
inal paper by Shannon (1948). In that paper he gave              error-correcting code is simply the set of all the code-
the first examples of encoding and decoding functions             words of E. Mathematically, this is just the image of the
that satisfied the first two goals, though they were not           function E.
computationally efficient.                                            What makes an error-correcting code good or bad? To
                                                                 answer this question, let us consider what happens if
   Shannon’s encoding and decoding functions were
                                                                 the alphabet is {0, 1} and the code contains two strings
therefore not practical, but we can now see, with the
                                                                 x = (x1 , x2 , . . . , xn ) and y = (y1 , y2 , . . . , yn ) that dif-
benefit of hindsight, that ignoring the goal of efficient
                                                                 fer in precisely d places. If errors are introduced with
computability in order to gain some theoretical insight
                                                                 probability p, then the probability that x is converted
into the channels was extraordinarily fruitful. A gen-
                                                                 into y is pd (1−p)n−d . Assuming that p < 12 , this prob-
eral rule of thumb seems to operate: that the perfor-
                                                                 ability gets smaller as d increases, so the smaller d is,
mance of the very best encoding and decoding func-
                                                                 the more likely the strings x and y are to be confused.
tions can be matched arbitrarily closely by encoding
                                                                 It seems preferable, therefore, that there should not
and decoding functions that are also computationally
                                                                 be too many pairs of strings in the code that differ in
efficient. This justifies considering the goal of efficiency
                                                                 just a few places. A similar argument applies to larger
separately from the other two goals.
                                                                 alphabets as well.
                                                                    The above thoughts lead to a definition that is very
         3   The Existence of Good Encoding                      natural in this context. Given an alphabet Σ and two
               and Decoding Functions                            strings x = (x1 , x2 , . . . , xn ) and y = (y1 , y2 , . . . , yn )
                                                                 belonging to Σ n , the Hamming distance between x and
In this section we will describe results that demonstrate        y is defined to be the number of coordinates i for
the existence of encoding and decoding functions that            which xi = yi . For example, let Σ = {a, b, c, d} and
have an extremely good rate and reliability. In order to         let n = 6. The strings abccad and abdcab differ in
describe these results, first proved by Shannon, it will          the third and sixth places and are identical otherwise,
be useful to consider two related notions introduced by          so their Hamming distance is 2. Our goal is to find an
Hamming in work that was essentially concurrent with             encoding function E such that the associated code max-
that of Shannon.                                                 imizes the typical Hamming distance between pairs of
   In order to understand these notions, let us start by         codewords.
describing what makes one encoding function E better                Shannon’s solution to this is an extremely simple
or worse than another. The task of the decoding func-            application of the probabilistic method [IV.19 §3](/part-04/extremal-and-probabilistic-combinatorics):
tion is to work out, when it receives a string y, what the       he picks the encoding function at random. That is, for
original message m was. Notice that this is equivalent           every message m, the encoding E(m) is chosen entirely
to working out what the encoded message E(m) was,                randomly from the set Σ n , with all choices equally
since no two messages are encoded in the same way.               likely. Further more, for every message m, this choice
The possible encoded messages are called codewords:              is independent of the encoding of every other mes-
that is, a codeword is a string of length n that arises as       sage m . It is a good exercise in basic probability to
E(m) for some message m ∈ Σ k .                                  see that such a choice almost always leads to a code

882                                                                                 VII. The Influence of Mathematics

where the distances between codewords are on aver-             Claim. There exists a constant c > 0 such that the
age large. In fact, even the minimum distance between          probability that the number of errors exceeds (p + )n
                                                                              2
codewords is almost always large. However, we will not         is at most 2−c n .
show this. Instead, we will argue that with high prob-
ability this random choice leads to a “nearly optimal”           The same can be said of the probability that the num-
encoding function, from the point of view of rate and          ber of errors is less than (p − )n, but we shall not use
reliability.                                                   this result.
                                                                                         2
  First, let us consider what the decoding function              When n is large, 2−c n is extremely small, so the
ought to be. In the absence of computational require-          number of errors is almost certainly at most (p + )n.
ments, it is not hard to say what the “optimal” decod-         The number of errors equals the Hamming distance
ing algorithm is. If you receive a sequence z, then you        from y, the output of the channel, to E(m), the code-
should choose the message m that is most likely to             word that was transmitted. Therefore, the decoding
have resulted in this sequence. For the model Σ-SC(p)          function that chooses the codeword with smallest Ham-
with p < 1 − 1/|Σ|, it is easily verified that this will be     ming distance from y will almost certainly choose
the message m for which the encoding E(m) is nearest           E(m), provided that there is no message m such that
to z, as measured by Hamming distance. (If the min-            E(m ) is closer to y than (p + )n.
imum distance is attained by both E(m) and E(m ),                The second idea, which allows us to say that this will
then one can make an arbitrary choice between them.)           almost certainly be the case, is that “Hamming balls are
The condition on p is important here. It ensures that          small.” Let z be a sequence in {0, 1}n . Then the Ham-
when the sequence E(m) passes through the channel,             ming ball of radius r about z is the set of all sequences
the most likely output corresponding to any given term,        w with Hamming distance at most r from z. How big is
out of the |Σ| different possibilities, is the same as the      this set? Well, in order to specify a sequence w with
input. Without this condition, there would be no rea-          Hamming distance exactly d from z, it is enough to
son to expect z to be close to E(m). We shall argue that       specify
                                                                     the set of d places where w and z differ. There
there is a number C, depending only on the error proba-        are n d ways of choosing this set, so the number of
bility p and the size of the alphabet, such that for a ran-    sequences at a distance of at most r is
dom encoding function with rate smaller than C, this                                               
                                                                            n       n      n             n
decoding function recovers the original message with a                          +      +       + ··· +       .
                                                                            0       1      2             r
high probability. As an aside, Shannon also showed that
for the same constant C, any attempt to communicate            If r = αn and α < 12 , then this number is at most a
                                                                              n
at rates greater than C would lead to errors with prob-        constant times r , because each term is at least
ability exponentially close to 1. Because of this result,                            n−r   1−α
                                                                                         =
the constant C is known as the Shannon capacity of the                                r     α
channel.                                                       times the one before. But
  Once again, for simplicity we shall consider just the                           
                                                                                  n           n!
case of the binary alphabet {0, 1}. In this case we are                               =               .
                                                                                  r      r !(n − r )!
choosing a random function E from {0, 1}k to {0, 1}n ,
and we would like to show that, under suitable circum-         If we now use stirling’s formula [III.31](/part-03/the-gamma-function) or the looser
stances, the resulting code will almost certainly be very      approximation n! = (n/e)n , then we find that this is
reliable. In order to do this, we shall focus on a single      about (1/α(1 − α))n , which is 2 H(α)n , where
message m, and rely on two basic ideas.
                                                                      H(α) = −α log2 α − (1 − α) log2 (1 − α).
  The first idea is a precise form of the law of large
numbers [III.71 §4](/part-03/probability-distributions). If the error probability is p, then       (Note that H(α) is positive, because α and 1−α are less
the expected number of errors introduced into a code-          than 1 and therefore have negative logarithms.) The
word E(m) is pn, so, if n is large, then we expect that        function H is called the entropy function. It is contin-
                                                                                                                1
the actual number of errors will almost certainly be very      uous and strictly increasing on the interval [0, 2 ] with
                                                                                  1                 1
close to this, just as, if you toss a fair coin ten thousand   H(0) = 0 and H( 2 ) = 1. So, if α < 2 , then H(α) < 1,
times, you will be surprised if the number of heads is         and therefore 2 H(α)n is exponentially smaller than 2 n :
not close to five thousand. The result that expresses           this is what is meant by saying that the Hamming ball
this formally is as follows.                                   of radius αn is small.

VII.6.   Reliable Transmission of Information                                                                          883

   Let us set α to be p +  < 12 . Then the probabil-                 4   Efficient Encoding and Decoding
ity that a single randomly chosen sequence E(m ) lies
                                                               Let us now turn to the task of designing encoding
in the Hamming ball of radius (p + )n about y is
                                                               and decoding functions that can be calculated effi-
at most 2 H(p+2)n 2−n . (The 2 is to compensate for
                                                               ciently. Currently, there are at least two very differ-
slight inaccuracies in the above estimate for the size
                                                               ent approaches to building such functions. We describe
of the ball.) Since there are 2 k − 1 possibilities for m ,
                                                               here an approach based on algebra over finite fields.
the probability that one can be found for which E(m )
                                                               The alternative approach is based on the construction
lies in the ball is at most 2 k 2 H(p+2)n 2−n . Therefore, if
                                                               of expanding graphs [III.24](/part-03/expanders), but we will not describe
k ⩽ n(1 − H(p + 2) − ), this probability is at most
                                                               that here.
2−n , which is exponentially small.
   Because we can choose  to be as small as we like,
                                                               4.1   Codes for Large Alphabets Using Algebra
we can make k/n as close as we like to 1 − H(p) while
still maintaining an exponentially small probability of        In this section we describe a simple way to get an encod-
decoding error. It turns out that the quantity 1 − H(p)        ing function E : Σ k → Σ n , where Σ is a finite field
is the constant C discussed earlier: the Shannon capac-        [I.3 §2.2](/part-01/fundamental-definitions) with at least n elements. (Recall that there are
ity of the binary symmetric channel. Thus, the capacity        finite fields with q elements whenever q is of the form
of the binary symmetric channel is always positive if          pt for a prime p and a positive integer t.) These codes
p < 12 .                                                       were introduced by Reed and Solomon (1960) and have
   Shannon’s theorem and proof are significantly more           since been called the Reed–Solomon codes.
general than the above example demonstrates. For a                A Reed–Solomon code is specified by a sequence
wide variety of channels, and for a wide variety of mod-       of n distinct field elements α1 , . . . , αn ∈ Σ. Given
els of (probabilistic) error, his theory pins down the         a message m = (m0 , m1 , . . . , mk−1 ) ∈ Σ k , we asso-
capacity of the channel and shows that reliable com-           ciate with the message the polynomial M(x) = m0 +
munication is possible if and only if the rate of the          m1 x + · · · + mk−1 x k−1 . The encoding of m is sim-
channel is less than its capacity. Shannon’s proof is          ply the sequence E(m) = M(α1 ), M(α2 ), . . . , M(αn ). In
a remarkable example of the use of the probabilis-             other words, to encode a sequence m, you treat the
tic method in the practice of engineering. Note, how-          terms of the sequence as the k coefficients of a polyno-
ever, that the encoding and decoding algorithms are            mial of degree k − 1 and write out the values that this
quite impractical. The proof gives no clue about how           polynomial takes at α1 , . . . , αn .
to find an encoding function, though of course one                 Before describing the error-correcting capability of
can consider every encoding function E : {0, 1}k →             this code, let us note that it is very succinctly repre-
{0, 1}n to check if it is good. However, even if such          sented: all that is needed to specify it is a descrip-
a function is found, it may have no succinct descrip-          tion of the field Σ and the sequence of n elements
tion, in which case the encoder and decoder have to            α1 , . . . , αn . It is easy to show that the number of addi-
store this encoding function as an exponentially long          tions and multiplications needed to compute M(α) is
table in their memory. Finally, the decoding algorithm         at most Ck for some constant C. (For example, to work
seems to involve a brute-force search for the near-            out 3α3 − α2 + 5α + 4, you start with 3, multiply by
est codeword, a problem which seems to be the most             α, subtract 1, multiply by α, add 5, multiply by α,
serious obstacle to obtaining a computationally effi-            and add 4.) Therefore, the number of field operations
cient version of Shannon’s theorem that can be used            needed to compute the entire encoding is bounded
in practice. What the theorem definitely does give us           above by Cnk, for some (different) constant C. (In fact,
is a significant insight into the limitations and poten-        more sophisticated and efficient algorithms are known
tial utility of the communication channel. With this in        for the encoding problem that take at most Cn(log n)2
mind, we can set ourselves the right targets to strive         steps.)
for when we come to devise more practical encoding                Now let us consider the error-correcting properties
and decoding procedures. In the next section we will           of the code. We start by showing that the encodings
show that it is possible to achieve a fixed rate that is        of any two messages m1 and m2 have a Hamming dis-
bounded away from zero, to tolerate a constant frac-           tance of at least n − (k − 1). To see this, let M1 (x) and
tion of errors, and to do both of these with efficient           M2 (x) be the polynomials associated with m1 and m2 .
algorithms.                                                    Now the difference p(x) = M1 (x) − M2 (x) has degree

884                                                                                    VII. The Influence of Mathematics

at most k − 1, and it is not the zero polynomial (since               Conversely, suppose that we manage to find polyno-
M1 and M2 are distinct), and therefore it has at most              mials A(x), of degree at most 12 (n + k − 2), and B(x),
k − 1 roots. This tells us that there are at most k − 1            of degree at most k − 1, such that A(αi ) = zi B(αi ) for
values of α for which M1 (α) = M2 (α). It follows that             every i. Then R(x) = A(x) − M(x)B(x) is a polynomial
the Hamming distance between the sequences                         of degree at most 12 (n+k−2), and R(αi ) = 0 whenever
                                                                                                             1
                                                                   M(αi ) = zi . Since there are at most 2 (n − k) errors,
        E(m1 ) = (M1 (α1 ), M1 (α2 ), . . . , M1 (αn ))                                             1            1
                                                                   this happens for at least n − 2 (n − k) = 2 (n + k) val-
and                                                                ues of i. Therefore, the number of roots of R is bigger
                                                                   than its degree, from which it follows that R is identi-
        E(m2 ) = (M2 (α1 ), M2 (α2 ), . . . , M2 (αn ))            cally zero, so that A(x) = M(x)B(x) for every x. From
                                                                   this we can determine M: given k values of x for which
is at least n − k + 1.
                                                                   A(x) and B(x) are nonzero, one can determine k values
   It follows that if z is any sequence, then its Ham-
                                                                   of M(x) = A(x)/B(x), and hence determine M.
ming distance from at least one of E(m1 ) and E(m2 )
                 1                                                    It remains to show that we can indeed (efficiently)
is greater than 2 (n − k) (since otherwise the distance
                                                                   find polynomials A(x) and B(x) with the required
between E(m1 ) and E(m2 ) would have to be at most
                                                                   properties. The n constraints A(αi ) = zi B(αi ) turn
n − k). Therefore, if the number of errors that occur
                                 1                                 into n linear constraints on the unknown coefficients
during transmission is at most 2 (n − k), then the orig-
                                                                   of A and B. Since B has 12 (n − k) + 1 coefficients and A
inal message m is uniquely determined by the received                    1
                                                                   has 2 (n+k) coefficients, the total number of unknowns
sequence z. What is much less obvious is that there
                                                                   is n + 1. Since the system of equations is homogeneous
is an efficient algorithm for working out what m was,
                                                                   (that is, we obtain a solution if we take all unknowns to
but, remarkably, it is possible to compute m with a                be zero) and the number of unknowns is greater than
polynomial-time algorithm (in n), which we shall now               the number of constraints, there must be a nontrivial
describe.                                                          solution: that is, a solution where A(x) and B(x) are
  What must the decoding algorithm do? It is given                 not both the zero polynomial. Moreover, we can find
the numbers α1 , . . . , αn and the received sequence              such a solution by Gaussian elimination, which takes
z1 , . . . , zn and is required to find a polynomial M of           at most Cn3 steps.
degree k − 1 or less such that M(αi ) = zi for all but at             To summarize: we construct a code by exploiting the
           1
most 2 (n − k) values of i. If such a polynomial exists,           fact that two distinct low-degree polynomials cannot
then it is unique, as we have just seen, and its coeffi-             be equal for too many values. We then exploit the rigid
cients will give the original message m (if the number             algebraic structure of low-degree polynomials for the
                         1
of errors is at most 2 (n − k)).                                   purposes of decoding. The main tool that allows us to
  If there were no errors, then our task would be much             do this is linear algebra and in particular the solving of
easier: one can determine the coefficients of a polyno-              systems of simultaneous equations.
mial of degree k − 1 from k of its values by solving k
simultaneous equations. However, if some of the val-               4.2   Reducing the Size of the Alphabet Using
ues we use are incorrect, then we will end up with a                     Good Codes
completely different polynomial, so this method is not              The ideas described in the previous section show us
easy to use for the problem we actually face.                      how to build codes with efficient encoding and decod-
  To overcome this difficulty, let us imagine that                   ing algorithms, but they use relatively large alphabets.
M exists and that the errors introduced into the                   In this section we shall exploit these results to build
sequence M(α1 ), . . . , M(αn ) occur at i1 , . . . , is , where   binary codes.
    1
s ⩽ 2 (n − k). Then the polynomial B(x) = (x−αi1 ) · · ·              To begin with, let us consider a very obvious method
                                1
(x − αis ) has degree at most 2 (n − k) and is zero if and         of converting codes over large alphabets into codes
only if x is equal to αij for some j. Let us set A(x) to           over the binary alphabet {0, 1}. For simplicity, assume
equal M(x)B(x). Then A(x) is a polynomial of degree                that we have a Reed–Solomon code over an alphabet Σ
                  1           1
at most k − 1 + 2 (n − k) = 2 (n + k − 2), and for every           of size 2 l for some integer l. Then we can associate the
i we have A(αi ) = zi B(αi ). (If there is no error at i,          elements of Σ with binary strings of length l. In such a
then this is obvious, since zi = M(αi ), and if there is           case, we can regard the Reed–Solomon encoding func-
an error at i, then both sides are 0.)                             tion, which maps Σ k to Σ n , as a function from {0, 1}lk

VII.6.   Reliable Transmission of Information                                                                       885

to {0, 1}ln . (For instance, an element of Σ k is a sequence   element of Σ. This results in a sequence of n elements
of k objects, each of which is a binary sequence of            of Σ. It then uses the Reed–Solomon decoding algo-
length l. Putting them together produces a single binary       rithm to decode this sequence, producing a sequence
sequence of length kl.) Since the encodings of two dis-        of k elements of Σ. Finally, this can be converted into a
tinct messages differ for at least n − k + 1 elements of        binary sequence of length lk.
Σ, they must also differ on at least n − k + 1 bits.               We have said nothing about the efficiency of the en-
   This gives a fairly reasonable code over the binary         coding and decoding procedures that convert binary
alphabet. However, n − k + 1 is not as large as a fixed         sequences of length l into ones of length L and back
fraction of ln: the ratio (n − k + 1)/ln is less than 1/l,     again, stating merely that they exist. Since efficiency
and since we need 2 l , the size of Σ, to be at least n, we     is supposed to be our priority, this may seem rather
find that this fraction is at most 1/ log2 n, which tends       strange: do we not now face exactly the same problem
to zero as n tends to infinity. However, this can be fixed       that we were trying to solve in the first place? Luckily
in a simple way, as we shall see.                              we do not, because although these encoding and decod-
   The problem with the simple binary approach is that         ing procedures may take exponentially long, they take
two different elements of Σ may be represented by               exponentially long as a function of L, and L is much
binary sequences that differ in just one bit. However,          much smaller than n. Indeed, L is proportional to log n,
the Hamming distance between two binary sequences              from which it follows that 2 L is bounded above by a
of length l is usually much larger: it is more like cl for     polynomial function of n. This is a useful principle:
some positive constant c. Suppose that we could repre-         one can afford procedures of exponential complexity
sent the elements of Σ as binary sequences of some             provided that one only ever applies them to very short
length L in such a way that the Hamming distances              strings.
between any two of the sequences used was at least c L.            Thus even though we have not managed to specify
This would allow us to improve our argument above:             the code explicitly, we have demonstrated that there
if the encodings of two messages were different for at          is an encoding and decoding algorithm that runs in
least n − k + 1 elements of Σ, then they would have to         polynomial time and that corrects a constant fraction
differ on at least c L(n − k + 1) bits rather than just          of errors. To complete this section, let us address the
n − k + 1, and this is a positive fraction of Ln.              question of the probability of decoding error, which we
   What we are asking for is an encoding of the binary         have not yet discussed. The technique described above,
sequences of length l as sequences of length L in such         of composing encoding functions (and decoding func-
a way that no two codewords are closer than c L to each         tions), can also be used to improve the above code so
other. But we know, from the previous section, that            that the encoding and decoding still take place in poly-
such an encoding exists, provided that L and c satisfy         nomial time, but now the decoding error probability is
appropriate conditions: for instance, it is possible to        exponentially small on the binary symmetric channel
find an encoding function that works with L ⩽ 10 l and           with parameter p, and the rate is arbitrarily close to the
     1
c ⩾ 10  .                                                      Shannon capacity, which is the theoretical maximum.
   So how do we use this? We start with a binary               (The idea is to compose a Reed–Solomon code that has
sequence m of length lk. As above, we associate with           rate close to 1 with a random inner code, and then to
this a sequence of length k in the alphabet Σ. We then         show that with random errors most of the inner decod-
encode this sequence using the Reed–Solomon code,              ing steps decode correctly. One then uses the outer
obtaining a sequence of length n in the alphabet Σ.            decoding step to convert the “mostly correct decoding”
Next, we convert each term of this sequence into a             to a “fully correct decoding.”)
binary sequence of length l. And, finally, we encode
each of these n binary sequences as a sequence of                 5   Impact on Communication and Storage
length L using a good encoding function, obtaining as
a result a binary sequence of length Ln. We then pass          The mathematical theory of error-correcting codes has
this sequence through the channel, where errors may            made a deep impact on the technologies for storage
be introduced. The receiver then breaks the received           and communication of information, and we elaborate a
sequence up into n blocks of length L, decodes each            little on this below.
block to work out what binary sequence of length l                Storage of information on digital media is probably
gave rise to it, and interprets that binary sequence as an     the biggest success story for error-correcting codes.

886                                                                              VII. The Influence of Mathematics

Most known forms of storage media, and in particu-              Finally, it must be stressed that while many of the
lar standards for audio and data CDs and DVDs, pre-          codes used are based on ones that are studied in the
scribe error-correcting codes based on Reed–Solomon          mathematical literature, this should not be taken to
codes. Specifically, they are based on a code that maps       mean that they can be deployed immediately without
F223      255
  256 to F256 , where F256 is the finite field with 256 ele-   further design. For example, the Mariner spacecraft
ments. In audio CDs, codes are use to protect from           used not a Reed–Muller code but a variant of it designed
minor scratches, though more serious scratches do lead       to allow for synchronization between blocks. Similarly,
to audible errors. In data CDs the error correction is       the Reed–Solomon codes used in storage devices are
stronger (with more redundancies), so that even seri-        carefully spread out over the disc, so as to allow the
ous scratches do not lead to loss of data. In all cases      physical device to resemble more closely the model of
(CDs and DVDs) the readers for these devices use fast        a code over a large alphabet. Note that errors due to
algorithms for decoding when reading the information         a scratch on the disc surface tend to ruin a large col-
on the media. Typically, these algorithms are based on       lection of bits in a small localized part of the disc. If
the idea of the previous section, but are much faster        all the data from a block were sitting in such a neigh-
implementations (in particular, an algorithm due to          borhood, the entire block would be lost. So each block
E. Berlekamp is widely used). Indeed, several CD read-       of 255 bytes of information is spread out all over the
ers owe their faster reading speed to faster decoding        disc. On the other hand, the bytes themselves, which
algorithms. Similarly, the increased storage capacity        are elements of F256 , are written as eight bits in close
of DVDs (compared with CDs) is attributed in part to         proximity. So a scratch corrupting one bit out of these
better error-correcting codes. Indeed, error-correction      eight is also likely to corrupt others in the neighbor-
technology played a crucial role in establishing the         hood. However, this is all right from the perspective of
dominance of audio CDs, which store music digitally,         the model that views the entire collection of eight bits
over the traditional, and now almost extinct, gramo-         as a single element. In general, working out the right
phone records, which store music in continuous forms.        way to apply the theory of error correction to a given
Thus, mathematical advances in coding theory have            scenario is a major challenge, and many success stories
played an influential role in this technology.                would not have been success stories had it not been for
   Similarly, error-correcting codes have had a profound     some careful design choices.
effect on communication. Since the late 1960 s, error-            Mathematics and engineering continue to feed each
correcting codes (and decoding) have been used for           other in this arena. Mathematical successes, such as
communication from satellites to their base stations         new algorithms for decoding Reed–Solomon codes,
on Earth. Of late, error-correcting codes are also being     raise the challenge of how to adapt technology to
used in cellular phone communications and modems.            exploit new algorithms. Engineering successes, such as
Again, the most commonly used code at the time of the        the discovery of turbo codes that perform extremely
writing of this article is the Reed–Solomon code, though     well, challenge mathematicians to come up with a for-
this situation has been changing rapidly since the dis-      mal model and analysis that can explain this success.
covery of a new class of codes called “turbo codes.” This    And if such a model and analysis emerges, it is likely to
new family of codes seems to offer significant resilience      lead to the discovery of new codes that might surpass
to random errors (more so than that offered by meth-          the performance of turbo codes and lead to a new set
ods based on Reed–Solomon codes) and uses a simple           of standards!
and quick algorithm, even when the codes used have
                                                                           6   Bibliographic Notes
small block length. These codes and the corresponding
decoding algorithm have led to a resurgence of inter-        The theory of reliable communication and storage of
est in codes constructed with the help of insights from      information owes much to the seminal works of Shan-
graph theory [III.34]. Many of the good properties           non (1948) and Hamming (1950), which formed the
of turbo codes have been observed only empirically:          basis for much of this article. The Reed–Solomon codes
that is, the codes seem to work very well in practice        of section 4.1 are from Reed and Solomon (1960). Their
but it has not yet been proved rigorously that they do.      decoding algorithm originates in the work of Peterson
Nevertheless, the observations have been so compelling       (1960), though the algorithm given here is significantly
that new standards for communication are starting to         simplified. The technique of composing codes is due to
prescribe these codes.                                       Forney (1966).