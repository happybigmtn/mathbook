# Quantum Computation

III.74.   Quantum Computation                                                                                             269

the complete list. For example, every positive integer         can get away with not understanding quantum mechan-
can be written as x12 + 2 x22 + 4 x32 + 13 x42 .                  ics at all. (Similarly, and for similar reasons, one could
   Quadratic forms in three variables are more difficult         in principle do significant work in theoretical com-
to treat. gauss [VI.26](/part-06/carl-friedrich-gauss-17771855) proved that n = x12 + x22 + x32        puter science without having the slightest idea what a
if and only if n does not have the form 4 t (8 k + 7) for        transistor is or how it works.)
integers t and k. It is still not known exactly which inte-       To understand quantum computation it is helpful to
gers can be written as x12 + x22 + 10 x32 (this is known as     look at two other models of computation. The notion of
Ramanujan’s ternary form).                                     a classical computation is a mathematical distillation of
  From the point of view of prime number theory,               what actually goes on inside your computer. The “state”
quadratic forms in one variable are the hardest to             of a computer at any one time is modeled by an n-bit
understand. For example, are there infinitely many              string: that is, a sequence of 0 s and 1 s of length n. Let
primes of the form x 2 + 1?                                    us write σ for a typical string and σ1 , σ2 , . . . , σn for the
  Let us mention one final topic, where quadratic forms         bits that make it up. A “computation” is a sequence of
over R are studied but where the unknowns x1 , . . . , xn      very simple operations performed on the initial string.
                                                               For example, one operation might be to choose three
are replaced by integers. In particular, let us mention
                                                               numbers i, j, and k, all less than n, and change the kth
a beautiful result of Margulis, which confirmed a con-
                                                               bit σk of the current state σ to 1 if σi = σj = 1 and
jecture of Oppenheim. One instance of the result is the
                                                               to 0 otherwise. What makes an operation such as this
following: for any  > 0, one may find integers x1 , x2 ,
                                                               “simple” is that it is local in character: what it does to
and x3 such that
                           √σ depends on, and affects, just a bounded number of
             0 < |x12 + x22 2 − x32 3| < .                    bits of σ (in this case it depends on two bits and affects
                                                               one). The “state space” of a classical computer, in this
The proof uses techniques from ergodic theory [V.9](/part-05/ergodic-theorems),
                                                               model, is the set {0, 1}n of all possible n-bit strings,
which in related contexts are proving very influential at
                                                               which we shall denote by Qn .
the forefront of research today. No explicit bounds are
                                                                  After a certain number of stages, we declare the com-
known on how large x1 , x2 , and x3 need to be.
                                                               putation to have finished. At this point we perform a
                                                               simple sequence of “measurements” on the final state,
III.74     Quantum Computation                                 which consist in looking at the bits of the string we have
                                                               ended up with. If our problem is a “decision problem,”
A quantum computer is a theoretical device that makes          then we will typically organize the computation so that
use of the phenomenon of “superposition” in quantum            all we need to look at is a single bit: if it is 0 then the
mechanics to carry out certain computations in a way           answer is no and if it is 1 then the answer is yes.
that is fundamentally different from any known classi-             If the ideas of the last two paragraphs are unfamiliar
cal methods, and in a few important cases remarkably           to you, then you are strongly advised to read the first
efficient. In classical physics, if there is some property       few sections of computational complexity [IV.20](/part-04/computational-complexity)
that a particle could have, then either it has it or it does   before continuing with this article.
not. But according to quantum mechanics, it can exist             The next model we shall consider is probabilistic com-
in a sort of indeterminate state that is a linear com-         putation. This is just like classical computation except
bination of several states, in some of which it might          that at each stage we are allowed to toss a (possibly
have the property in question and in others not. The           biased) coin and let the simple operation we perform
coefficients in this linear combination are called prob-         depend on the outcome of the toss. For instance, we
ability amplitudes: the modulus squared of the coeffi-           might again choose three numbers i, j, and k, but this
cient associated with a state tells you the probability                                                       2
                                                               time proceed as follows: with probability 3 we perform
of finding that the particle is in that state if you do a       the operation described earlier, and with probability
measurement.                                                   1
                                                               3 we change σk to 1 − σk . Remarkably, introducing
  Exactly what happens when you take a measurement             randomness into algorithms can be extremely helpful.
is puzzling, and the subject of much debate among              (Equally remarkably, there are strong theoretical rea-
physicists and philosophers. Fortunately, however, one         sons for believing that all algorithms that use random-
can understand quantum computation without solving             ness can in fact be “derandomized.” See [IV.20 §7.1](/part-04/computational-complexity) for
the measurement problem, as it is called: indeed, one          details.)

$270$

Suppose that we allow our randomized probabilistic computation to run for k steps and that we do not examine the result. How should we model the current state of the computer? We could use exactly the same definition as in the classical case--a state is an n-bit string--and simply say that the computation is in a state that we cannot know until we do a measurement. But the state of the computer is not a complete mystery: for each n-bit string σ there will be some probability p σ that the state is σ . In other words, it is better to think of the state of the computer as a probability distribution [III.71](/part-03/probability-distributions) on Q n . This probability distribution will depend on the initial string, and therefore it can in principle give us useful information about that string. Here is how to use a randomized computation to solve a decision problem. Let us write P (σ) for the probability that a certain bit (without loss of generality the first) is $1$ at the end of the computation, when the initial string is σ . Suppose we can arrange for P (σ) to be at least a for all strings σ for which the answer is yes, and at most some smaller number b for all strings σ for which the answer is no. Let c be the average of $a$ and $b$. Now run the computation m times for some large m. With very high probability, if the answer is yes then when we have finished the first bit will have been $1$ more than cm times, and if the answer is no then it will have been $1$ fewer than cm times. So we can solve the decision problem, not with certainty, but at least with a negligibly small chance of error. The “state space” of a probabilistic computer consists of all possible probability distributions on Q n , or equivalently all possible functions $p$ : $Q^{n} \to$ [0 , 1 ] such that $σ\inQnpσ = 1$ . The state space of a quantum computer also consists of functions defined on Q n , but there are two differences. First, they can take complex as well as real values. Second, if $\lambda$ : Q n $\to$ C is a state, then the requirement on the size of $\lambda$ is that $σ\inQn|\lambda|^{2} = 1$ . In other words, $\lambda$ is $a$ unit vector in the hilbert space [III.37](/part-03/bayesian-analysis) 2 (Q n , C) rather than a nonnegative unit vector in the banach space [III.62](/part-03/normed-spaces-and-banach-spaces) 1 (Q n , R). The scalars $\lambda$ σ are the probability amplitudes mentioned earlier. We shall explain what this means later. Among the possible states of a quantum computer are the “basis states,” which are the functions that take the value $1$ at one string and $0$ every where else. It is customary to use Dirac’s “bra” and “ket” notation for these, writing | σ if the string in question is σ . Other “pure states” are then linear combinations of these, and Dirac’s notation is again used. For instance, if $n = 5$ , III. Mathematical Concepts then one fairly simple state that the computer could be √in is $|\psi= (1/ 2)|01101+ (i/ 2)|11001$ . To get from one state to another, we again apply “local” operations, but adapted to the new, Hilbert space context. Suppose first that we have a basis state | σ . Again we look at a very small number of bits. If, for instance, we look at three bits, at i, j, and k, then there are eight possibilities for the triple $τ = (σ^{1}$ , $σ^{2}$ , $σ^{3})$ , which we could think of as the basis states in a much smaller state space: the space of all functions μ : $Q^{3} \to$ C such that $τ\in^{Q}3|\muτ|^{2} = 1$ . The obvious operations that take unit vectors to unit vectors in a complex Hilbert space are the unitary maps [III.50](/part-03/linear-operators-and-their-properties), and these are indeed what are used. Let us illustrate this with an example. Suppose that $n = 5$ , and that  i, j,$and$ k$are$1 , $2$ , and $4$ . One possible operation on these three bits would send |000   to √$(|000 + i|111)/ 2$ and |111$to$(i|000+ |111)/ 2 , leaving all other three-bit sequences as they are. If our initial basis state is |01000   , then the first, second, and fourth bits are in the state |000   , so the resulting state at the end of the operation would be √ $(|01000 + i|11110)/ 2$ . Now that we have explained what a basic operation does to a basis state, we have in fact explained what it does in general, since the basis states form a basis of the state space. In other words, if you start with a linear combination (or superposition) of basis states, you apply the operation described above to each basis state and take the corresponding linear combination of the results. Thus, an elementary operation of quantum computation consists in acting on the state space by means of a very special sort of unitary map. If the operation is on k bits (where k is typically very small indeed), then the matrix of this map will be a diagonal sum of $2n - k$ copies of the $2^{k} \times 2^{k}$ unitary matrix used to manipulate those k bits (if the basis elements are appropriately ordered). A quantum computation is a sequence of these elementary operations. Measuring the result of a quantum computation is more mysterious. The basic idea is simple: we do a certain number of elementary operations and then look at one of the bits of the resulting state. But what does this mean, when the state is not a basis state but rather a superposition of such states? The answer is that when we “measure” the r th bit of the output, we are doing a probabilistic process that is somewhat different from the measurement of a probabilistic computation: if the output state is $σ\inQn\lambdaσ|σ$  , then the probability that

III.74.   Quantum Computation                                                                                                  271

we observe 1 is the sum of all |λσ |2 such that the kth                   measurement can be made. However, the very vastness
bit of σ is 1, and the probability that we observe 0 is                   of this space means that most states are completely
the same sum but over those σ for which the kth bit                       inaccessible unless one is prepared to use a vast num-
is 0. This is why the numbers λσ are called probabil-                     ber of basic operations. Additionally, it is important
ity amplitudes. In order to get a useful answer from a                    that at the end of the computation the output should
quantum computation, one runs it several times, just                      not be a “typical” state, since only very special states
as with a probabilistic computation.                                      give rise to useful measurements.
   Note the following two important differences be-                           These arguments show that if a quantum compu-
tween a quantum computation and a probabilistic com-                      tation is to be useful, then it will have to be very
putation. We described the state of a probabilistic com-                  carefully (and cleverly) organized. However, there is a
putation as a probability distribution on Qn , which one                  spectacular example of just such a computation: Peter
could also call a convex combination of basis states. But                 Shor’s use of a quantum computer to calculate fast
this probability distribution is not telling us what is in                fourier transforms [III.26](/part-03/the-fast-fourier-transform) extremely rapidly. The
the computer: that is a basis state. Rather, it is describ-               fast Fourier transform has a symmetry that allows the
ing our knowledge about what is in the computer. By                       calculation to be split up and carried out “in paral-
contrast, the state of a quantum computer really is a                     lel” (it might be better to say “in superposition”) in
unit vector in a 2 n -dimensional Hilbert space. So in a                   a way that is ideally suited to a quantum computer.
certain sense a huge amount of computation can go                         A super-fast Fourier transform can then be used to
on in parallel: this is what gives quantum computation                    solve (by classical methods) some famous computa-
its power. Although we cannot know much about the                         tional problems, such as the discrete logarithm prob-
computation, since a single measurement causes it to                      lem and the factorization of large integers. The latter
“collapse,” we can hope to organize it so that different                   can then be used to break a public-key cryptosystem,
parts of it “interfere” with each other. This “interfer-                  the encryption method that lies at the heart of modern
ence” is related to the second main difference, which is                   computer security. (See mathematics and cryptog-
the fact that we deal with probability amplitudes rather                  raphy [VII.7 §5](/part-07/mathematics-and-cryptography) and computational number theory
than probabilities. Roughly speaking, a quantum com-                      [IV.3 §3](/part-04/computational-number-theory) for further discussion of these problems.)
putation can “split up” and “reassemble itself,” whereas                     Can a machine be built that would actually be able
once a probabilistic computation splits up it stays split                 to do this? There are formidable problems to over-
up. Crucial to the reassembly process in a quantum                        come, arising from a phenomenon in quantum mechan-
computation is cancelation of probability amplitudes:                     ics known as “decoherence,” which makes it very hard
to give an extreme example, if you multiply a typi-                       to stop a complicated state from “collapsing” to a sim-
cal unitary matrix by its inverse, then there is a huge                   pler one that is no longer of use. Some progress has
amount of cancelation to get all the off-diagonal entries                  been made, but it is too early to say whether, or when, a
of the resulting matrix to be zero.                                       quantum computer will be built that can factorize large
   All this raises two obvious questions: what are quan-                  numbers quickly.
tum computers good for, and can they actually be built?                      Nevertheless, the theoretical challenges raised by the
It turns out that a quantum computer can carry out                        notion of a quantum computer are fascinating. Perhaps
classical and probabilistic computations, so the first                     the most interesting one is very simple: find an applica-
question is asking whether they can do anything fur-                      tion of quantum computers that is significantly differ-
ther.1 One might think so, since the state space is so                    ent from the few that have already been found. The fact
much bigger than it is for a classical computation (it is                 that quantum computers can factorize large numbers
2 n dimensional rather than merely n dimensional), and                     is strong evidence that they are more powerful, but it
the reassembly process means that we can potentially                      would be good to have a better understanding of why.
afford to visit remote parts of the state space, where all                 (It is known that quantum computers are better for
coefficients might be of very similar (and small) mag-                      some other uses, such as communication complex-
nitudes, and come back again to a state where a useful                    ity [IV.20 §5.1.4](/part-04/computational-complexity).) Is there a much simpler task that
                                                                          is easy for quantum computers and difficult for clas-
  1. It is also possible to simulate a quantum computation classically,   sical computers, at least if some well-known plausible
but it would take an absurdly long time to do so: quantum computers
cannot calculate noncomputable functions, but they may be far more
                                                                          hypothesis is true about what classical computers can-
efficient at calculating some computable ones.                              not do? Can quantum computers solve np-complete

