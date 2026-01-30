# Quantum Computation

III.74.   Quantum Computation

the complete list. For example, every positive integer
can be written as x12 + 2 x22 + 4 x32 + 13 x42 .
   Quadratic forms in three variables are more difficult
to treat. gauss [VI.26](/part-06/carl-friedrich-gauss-17771855) proved that n = x12 + x22 + x32
if and only if n does not have the form 4 t (8 k + 7) for
integers t and k. It is still not known exactly which inte-
gers can be written as x12 + x22 + 10 x32 (this is known as     look at two other models of computation. The notion of
Ramanujan’s ternary form).
  From the point of view of prime number theory,
quadratic forms in one variable are the hardest to
understand. For example, are there infinitely many
primes of the form x 2 + 1?
  Let us mention one final topic, where quadratic forms
over R are studied but where the unknowns x1 , . . . , xn
are replaced by integers. In particular, let us mention
a beautiful result of Margulis, which confirmed a con-
jecture of Oppenheim. One instance of the result is the
following: for any  > 0, one may find integers x1 , x2 ,
and x3 such that

The proof uses techniques from ergodic theory [V.9](/part-05/ergodic-theorems),
which in related contexts are proving very influential at
the forefront of research today. No explicit bounds are
known on how large x1 , x2 , and x3 need to be.
III.74     Quantum Computation
A quantum computer is a theoretical device that makes
use of the phenomenon of “superposition” in quantum
mechanics to carry out certain computations in a way
that is fundamentally different from any known classi-
cal methods, and in a few important cases remarkably
efficient. In classical physics, if there is some property
that a particle could have, then either it has it or it does   before continuing with this article.
not. But according to quantum mechanics, it can exist
in a sort of indeterminate state that is a linear com-
bination of several states, in some of which it might
have the property in question and in others not. The
coefficients in this linear combination are called prob-
ability amplitudes: the modulus squared of the coeffi-
cient associated with a state tells you the probability
of finding that the particle is in that state if you do a
measurement.
  Exactly what happens when you take a measurement
is puzzling, and the subject of much debate among
physicists and philosophers. Fortunately, however, one
can understand quantum computation with out solving
the measurement problem, as it is called: indeed, one

269
can get away with not understanding quantum mechan-
ics at all. (Similarly, and for similar reasons, one could
in principle do significant work in theoretical com-
puter science with out having the slightest idea what a
transistor is or how it works.)
To understand quantum computation it is helpful to
a classical computation is a mathematical distillation of
what actually goes on inside your computer. The “state”
of a computer at any one time is modeled by an n-bit
string: that is, a sequence of 0 s and 1 s of length n. Let
us write σ for a typical string and σ1 , σ2 , . . . , σn for the
bits that make it up. A “computation” is a sequence of
very simple operations performed on the initial string.
For example, one operation might be to choose three
numbers i, j, and k, all less than n, and change the kth
bit σk of the current state σ to 1 if σi = σj = 1 and
to 0 otherwise. What makes an operation such as this
“simple” is that it is local in character: what it does to
√σ depends on, and affects, just a bounded number of
0 < |x12 + x22 2 − x32 3| < .
one). The “state space” of a classical computer, in this
model, is the set {0, 1}n of all possible n-bit strings,
which we shall denote by Qn .
After a certain number of stages, we declare the com-
putation to have finished. At this point we perform a
simple sequence of “measurements” on the final state,
which consist in looking at the bits of the string we have
ended up with. If our problem is a “decision problem,”
then we will typically organize the computation so that
all we need to look at is a single bit: if it is 0 then the
answer is no and if it is 1 then the answer is yes.
If the ideas of the last two paragraphs are unfamiliar
to you, then you are strongly advised to read the first
few sections of computational complexity [IV.20](/part-04/computational-complexity)
The next model we shall consider is probabilistic com-
putation. This is just like classical computation except
that at each stage we are allowed to toss a (possibly
biased) coin and let the simple operation we perform
depend on the out come of the toss. For instance, we
might again choose three numbers i, j, and k, but this
2
time proceed as follows: with probability 3 we perform
the operation described earlier, and with probability
1
3 we change σk to 1 − σk . Remarkably, introducing
randomness into algorithms can be extremely helpful.
(Equally remarkably, there are strong theoretical rea-
sons for believing that all algorithms that use random-
ness can in fact be “derandomized.” See [IV.20 §7.1](/part-04/computational-complexity) for
details.)

$270$

Suppose that we allow our randomized probabilistic computation to run for k steps and that we do not examine the result. How should we model the current state of the computer? We could use exactly the same definition as in the classical case--a state is an n-bit string--and simply say that the computation is in a state that we cannot know until we do a measurement. But the state of the computer is not a complete mystery: for each n-bit string σ there will be some probability p σ that the state is σ .
In other words, it is better to think of the state of the computer as a probability distribution [III.71](/part-03/probability-distributions) on Q n . This probability distribution will depend on the initial string, and therefore it can in principle give us useful information about that string. Here is how to use a randomized computation to solve a decision problem. Let us write P (σ) for the probability that a certain bit (with out loss of generality the first) is $1$ at the end of the computation, when the initial string is σ .
Suppose we can arrange for P (σ) to be at least a for all strings σ for which the answer is yes, and at most some smaller number b for all strings σ for which the answer is no. Let c be the average of $a$ and $b$. Now run the computation m times for some large m. With very high probability, if the answer is yes then when we have finished the first bit will have been $1$ more than cm times, and if the answer is no then it will have been $1$ fewer than cm times. So we can solve the decision problem, not with certainty, but at least with a negligibly small chance of error.
The “state space” of a probabilistic computer consists of all possible probability distributions on Q n , or equivalently all possible functions $p$ : $Q^{n} \to$ [0 , 1 ] such that $σ\inQnpσ = 1$ . The state space of a quantum computer also consists of functions defined on Q n , but there are two differences. First, they can take complex as well as real values. Second, if $\lambda$ : Q n $\to$ C is a state, then the requirement on the size of $\lambda$ is that $σ\inQn|\lambda|^{2} = 1$ .
In other words, $\lambda$ is $a$ unit vector in the hilbert space [III.37](/part-03/bayesian-analysis) 2 (Q n , C) rather than a nonnegative unit vector in the banach space [III.62](/part-03/normed-spaces-and-banach-spaces) 1 (Q n , R). The scalars $\lambda$ σ are the probability amplitudes mentioned earlier. We shall explain what this means later. Among the possible states of a quantum computer are the “basis states,” which are the functions that take the value $1$ at one string and $0$ every where else.
It is customary to use Dirac’s “bra” and “ket” notation for these, writing | σ if the string in question is σ . Other “pure states” are then linear combinations of these, and Dirac’s notation is again used. For instance, if $n = 5$ , III. Mathematical Concepts then one fairly simple state that the computer could be √in is $|\psi= (1/ 2)|01101+ (i/ 2)|11001$ . To get from one state to another, we again apply “local” operations, but adapted to the new, Hilbert space context. Suppose first that we have a basis state | σ . Again we look at a very small number of bits.
If, for instance, we look at three bits, at i, j, and k, then there are eight possibilities for the triple $τ = (σ^{1}$ , $σ^{2}$ , $σ^{3})$ , which we could think of as the basis states in a much smaller state space: the space of all functions $\mu$ : $Q^{3} \to$ C such that $τ\in^{Q}3|\muτ|^{2} = 1$ . The obvious operations that take unit vectors to unit vectors in a complex Hilbert space are the unitary maps [III.50](/part-03/linear-operators-and-their-properties), and these are indeed what are used. Let us illustrate this with an example.
Suppose that $n = 5$ , and that  i, j,$and$ k$are$1 , $2$ , and $4$ . One possible operation on these three bits would send |000   to √$(|000 + i|111)/ 2$ and |111$to$(i|000+ |111)/ 2 , leaving all other three-bit sequences as they are. If our initial basis state is |01000   , then the first, second, and fourth bits are in the state |000   , so the resulting state at the end of the operation would be √ $(|01000 + i|11110)/ 2$ .
Now that we have explained what a basic operation does to a basis state, we have in fact explained what it does in general, since the basis states form a basis of the state space. In other words, if you start with a linear combination (or superposition) of basis states, you apply the operation described above to each basis state and take the corresponding linear combination of the results. Thus, an elementary operation of quantum computation consists in acting on the state space by means of a very special sort of unitary map.
If the operation is on k bits (where k is typically very small indeed), then the matrix of this map will be a diagonal sum of $2n - k$ copies of the $2^{k} \times 2^{k}$ unitary matrix used to manipulate those k bits (if the basis elements are appropriately ordered). A quantum computation is a sequence of these elementary operations. Measuring the result of a quantum computation is more mysterious. The basic idea is simple: we do a certain number of elementary operations and then look at one of the bits of the resulting state.
But what does this mean, when the state is not a basis state but rather a superposition of such states? The answer is that when we “measure” the r th bit of the output, we are doing a probabilistic process that is some what different from the measurement of a probabilistic computation: if the output state is $σ\inQn\lambdaσ|σ$  , then the probability that

III.74.   Quantum Computation

we observe 1 is the sum of all |λσ |2 such that the kth
bit of σ is 1, and the probability that we observe 0 is
the same sum but over those σ for which the kth bit
is 0. This is why the numbers λσ are called probabil-
ity amplitudes. In order to get a useful answer from a
quantum computation, one runs it several times, just
as with a probabilistic computation.
   Note the following two important differences be-
tween a quantum computation and a probabilistic com-
putation. We described the state of a probabilistic com-
putation as a probability distribution on Qn , which one
could also call a convex combination of basis states. But
this probability distribution is not telling us what is in
the computer: that is a basis state. Rather, it is describ-
ing our knowledge about what is in the computer. By
contrast, the state of a quantum computer really is a
unit vector in a 2 n -dimensional Hilbert space. So in a
certain sense a huge amount of computation can go
on in parallel: this is what gives quantum computation
its power. Although we cannot know much about the
computation, since a single measurement causes it to
“collapse,” we can hope to organize it so that different
parts of it “interfere” with each other. This “inter fer-
ence” is related to the second main difference, which is
the fact that we deal with probability amplitudes rather
than probabilities. Roughly speaking, a quantum com-
putation can “split up” and “reassemble itself,” where as
once a probabilistic computation splits up it stays split
up. Crucial to the reassembly process in a quantum
computation is cancelation of probability amplitudes:
to give an extreme example, if you multiply a typi-
cal unitary matrix by its inverse, then there is a huge
amount of cancelation to get all the off-diagonal entries
of the resulting matrix to be zero.
   All this raises two obvious questions: what are quan-
tum computers good for, and can they actually be built?
It turns out that a quantum computer can carry out
classical and probabilistic computations, so the first
question is asking whether they can do anything fur-
ther.1 One might think so, since the state space is so
much bigger than it is for a classical computation (it is
2 n dimensional rather than merely n dimensional), and
the reassembly process means that we can potentially
afford to visit remote parts of the state space, where all
coefficients might be of very similar (and small) mag-
ni tudes, and come back again to a state where a useful
  1. It is also possible to simulate a quantum computation classically,   sical computers, at least if some well-known plausible
but it would take an absurdly long time to do so: quantum computers
cannot calculate noncomputable functions, but they may be far more
efficient at calculating some computable ones.

271
measurement can be made. However, the very vastness
of this space means that most states are completely
inaccessible unless one is prepared to use a vast num-
ber of basic operations. Additionally, it is important
that at the end of the computation the output should
not be a “typical” state, since only very special states
give rise to useful measurements.
These arguments show that if a quantum compu-
tation is to be useful, then it will have to be very
carefully (and cleverly) organized. However, there is a
spectacular example of just such a computation: Peter
Shor’s use of a quantum computer to calculate fast
fourier transforms [III.26](/part-03/the-fast-fourier-transform) extremely rapidly. The
fast Fourier transform has a symmetry that allows the
calculation to be split up and carried out “in paral-
lel” (it might be better to say “in superposition”) in
a way that is ideally suited to a quantum computer.
A super-fast Fourier transform can then be used to
solve (by classical methods) some famous com put a-
tional problems, such as the discrete logarithm prob-
lem and the factorization of large integers. The latter
can then be used to break a public-key cryptosystem,
the encryption method that lies at the heart of modern
computer security. (See mathematics and cryptog-
raphy [VII.7 §5](/part-07/mathematics-and-cryptography) and computational number theory
[IV.3 §3](/part-04/computational-number-theory) for further discussion of these problems.)
Can a machine be built that would actually be able
to do this? There are formidable problems to over-
come, arising from a phenomenon in quantum mechan-
ics known as “decoherence,” which makes it very hard
to stop a complicated state from “collapsing” to a sim-
pler one that is no longer of use. Some progress has
been made, but it is too early to say whether, or when, a
quantum computer will be built that can factorize large
numbers quickly.
Nevertheless, the theoretical challenges raised by the
notion of a quantum computer are fascinating. Perhaps
the most interesting one is very simple: find an applica-
tion of quantum computers that is significantly differ-
ent from the few that have already been found. The fact
that quantum computers can factorize large numbers
is strong evidence that they are more powerful, but it
would be good to have a better understanding of why.
(It is known that quantum computers are better for
some other uses, such as communication complex-
ity [IV.20 §5.1.4](/part-04/computational-complexity).) Is there a much simpler task that
is easy for quantum computers and difficult for clas-
hypothesis is true about what classical computers can-
not do? Can quantum computers solve np-complete