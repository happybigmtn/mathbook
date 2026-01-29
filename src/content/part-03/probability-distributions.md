# Probability Distributions

III . $71$ .

Probability Distributions

III . $71$ Probability Distributions

James Norris

$1$

Discrete Distributions

When we toss a coin, we have no idea whether it will land heads or tails. However, there is a different sense in which the behavior of the coin is highly predictable: if it is tossed many times, then the proportion of heads

$1$

is very likely to be close t$o^{2}$ .

In order to study this phenomenon mathematically, we need to model it, and this is done by defining a sample space, which represents the set of possible out comes, and a probability distribution on that space, which tells you their probabilities. In the case of a coin, the natural sample space is the set {H, T}, and the obvi$1$ ous distribution assigns the numbe$r^{2}$ to each element. Alternatively, since we are interested in the number of heads, we could use the set { $0$ , $1$ } instead: after one

$1$

toss, there is a probability o$f^{2}$ that the number of

$1$

heads is $0$ and $a$ probability o$f^{2}$ that it is $1$ . More generally, a (discrete) sample space is simply a set $\Omega,$ and a probability distribution on $\Omega$ is a way of assigning a nonnegative real number to each element of $\Omega$ in such a way that the sum of all these numbers is $1$ . The number assigned to a particular element of $\Omega$ is then interpreted as the probability that some corresponding out come will occur, the total probability being $1$ .
If $\Omega$ is a set of size n, then the uniform distribution on $\Omega$ is the probability distribution that assigns a probability of $1/n$ to each element of $\Omega.$ However, it is often more appropriate to assign different probabilities to different out comes. For example, given any real number $p$ between $0$ and $1$ , the Bernoulli distribution with parameter p on the set { $0$ , $1$ } is the distribution that assigns the number $p$ to $1$ and $1 - p$ to $0$ . This can be used to model the toss of a biased coin. Suppose now that we toss an unbiased coin n times.
If we are interested in the out come of every toss, then we would choose the sample space consisting of all possible sequences of $0s$ and $1s$ of length n. For instance, if $n = 5$ , $a$ typical element of the sample space is 01101 . (This particular element represents the out come tails, heads, heads, tails, heads, in that order .) Since there are $2$ n such sequences and they are all equally likely, the appropriate distribution on this space will be the uniform one, which assigns a probability of $1/2^{n}$ to each sequence.

$263$

But what if we are interested not in the particular sequence of heads and tails but just in the total number of heads? In that case, we could take as our sample space the set 0 , $1$ , $2$ , . . . , n}. The probability that the total number of heads is k is $2 -$ n times the number of sequences of $0s$ and $1s$ that contain exactly $k 1s$ . This number is n n!

 = 

,

k ! (n  -  k) !

k

n

so the probability we assign to $k$ is $p^{k} = k 2 - n$ . More generally, for a sequence of n independent experiments, each with the same probability p of success, the probability of a given sequence of k successes and $n - k$ failures is $p^{k}(1 - p)n - k$ . So, the probability of having exactly k successes is p $k = n$ k $n - k$ .

$k p (1 - p)$

This is called the binomial distribution with parameters $n$ and $p$. It models the number of heads if you toss a biased coin n times, for example. Suppose we perform such experiments for as long as we need to in order to obtain one success. When k experiments are performed, the probability of getting

$k - 1$ failures followed by a success is pk = (1 - p)k - {}1 p. Therefore, this formula gives us the distribution of the number of experiments up to the first success. It is called the geometric distribution of parameter p. In particular, the number of tosses of a fair coin needed to get the first head has a geometric distribution of parameter $\frac{1}{2}$ . Notice that our sample space is now the set of all nonnegative integers--in particular, it is infinite. So in this case the condition that the probabilities add up to $1$ is requiring that a certain infinite series (the series

$\infty k = {}^{1}p^{k})$ converges to $1$ . Now let us imagine a some what more complicated experiment. Suppose we have a radioactive source that occasionally emits an alpha particle. It is often reasonable to suppose that these emissions are independent and equally likely to occur at any time. If the average number of emissions per minute is $\lambda,$ say, then what is the probability that during any given minute there will be k particles emitted? One way to think about this question is to divide up the minute into n equal intervals, for some large n.
If n is large enough, then the probability of two emissions occurring in the same interval is so small that it can be ignored, and therefore, since the average number of emissions per minute is $\lambda,$ the probability of an emission during any given interval must be approximately $\lambda/$ n . Let us call this number p. Since the emissions are independent, we can now regard the number of emissions as the number of successes when we do n trials,

$264$

each with probability p of success. That is, we have the binomial distribution with parameters $n$ and $p$, where $p = \lambda/n$ . Notice that as n gets larger, p gets smaller. Also, the approximations just made become better and better. It is therefore natural to let n tend to infinity and study the resulting “limiting distribution.” It can be checked that, in the limit as $n \to \infty,$ the binomial probabilities converge to $p^{k} = e - \lambda\lambda^{k}/k$ ! .
These numbers define a distribution on the set of all nonnegative integers, known as the Poisson distribution of parameter $\lambda.2$

Probability Spaces

Suppose that I throw a dart at a dartboard. Not being very good at darts, I am not able to say very much about where the dart will land, but I can at least try to model it probabilistic ally. The obvious sample space to take consists of a circular disk, the points of which represent where the dart lands. However, now there is a problem: if I look at any particular point in the disk, the probability that the dart will land at precisely that point is zero. So how do I define a probability distribution?
A clue to the answer lies in the fact that it seems to be perfectly easy to make sense of a question such as “What is the probability that I will hit the bull’s-eye?” In order to hit the bull’s-eye, the dart has to land in a certain region of the board, and the probability of this happening does not have to be zero. It might, for instance, be equal to the area of the bull’s-eye region divided by the total area of the board. What we have just observed is that even if we cannot assign probabilities to individual points in the sample space, we can still hope to give probabilities to subsets.
That is, if $\Omega$ is a sample space and A is a subset of $\Omega,$ we can try to assign a number P (A) between $0$ and $1$ to the set A. This represents the probability that the random out come belongs to the set A, and can be thought of as something like a notion of “mass” for the set A. For this to work, we need P ( $\Omega$ ) to be $1$ (since the probability of getting something in the sample space must be $1$ ). Also, if A and B are disjoint subsets of $\Omega,$ then P (A ∪ B) should be P (A)  +  P (B). From this it follows that if $A^{1}$ , . . .
, A n are all disjoint, then P ($A^{1}$ ∪ · · · ∪ A n) is equal to $P(A^{1})$  +  · · ·  +  P (A n). Actually, it turns out to be important that this should be true not just for finite unions but even for countably infinite [III.11](/part-03/countable-and-uncountable-sets) ones as well. (Related to this point is the fact that one does not attempt to define P (A) for every subset A of $\Omega$ but just for measurable subsets [III.55](/part-03/measures). For our purposes,

III. Mathematical Concepts

it is sufficient to regard P (A) as given whenever A is a set we can actually define .) A probability space is a sample space $\Omega$ together with a function P , defined on all “sensible” subsets A of $\Omega,$ that satisfies the conditions mentioned in the previous two paragraphs. The function P itself is known as a probability measure or probability distribution. The term probability distribution is often preferred when we specify P concretely.

$3$

Continuous Probability Distributions

There are three particularly important distributions defined on subsets of R , of which two will be discussed in this section. The first is the uniform distribution on the interval [0 , 1] . We would like to capture the idea that “all points in [0 , 1] are equally likely.” In view of the problems mentioned above, how should we do this? A good way is to take seriously the “mass” metaphor. Although we cannot calculate the mass of an object by adding up the masses of all the infinitely small points that make up the object, we can assign to those points a density and integrate it.
That is exactly what we shall do here. We assign a probability density of $1$ to each point in the interval [0 , 1] . Then we determine the prob1 1 ability of a subinterval, [3 , 2 ] say, by calculating the $1/2$ integral P ( [13 , 12 ]) = {}1/3 1 dx = . rac{1}{6}. More generally, the probability associated with an interval [a , b] will just be its length b  -  a. The probability of a union of disjoint intervals will then be the sum of the lengths of those intervals, and so on.
This “continuous” uniform distribution some times arises naturally from requirements of symmetry, just like its discrete counterpart. It can also arise as a limiting distribution. For instance, suppose that a hermit lives deep in a cave, away from any clocks or sources of natural light, and that each “day” he spends lasts for a random length of time between twenty-three and twenty-five hours.
To start with, he will have some idea of what the time is, and be able to make statements such as, “I’m having lunch now, so it’s probably light out side,” but after a few weeks of this regime, he will no longer have any idea: any out side time will be just as likely as any other. Now let us look at a rather more interesting density function, which depends on the choice of a positive constant $\lambda.$ Consider the density function $f(x) = \lambda e - \lambda x$ , defined on the set of all nonnegative real numbers. To work out the probability associated with an interval

III . $71$ .

Probability Distributions

[a , b], we now calculate

b

b

. ambda e - . ambda xdx = e - . ambda a - e - . ambda b .

$f(x)dx =$

a

a

The resulting probability distribution is called the exponential distribution with parameter $\lambda.$ The exponential distribution is appropriate if we are modeling the time T of a spontaneous event, such as the time it takes for a radioactive nucleus to decay, or for the next spam email to arrive. The reason for this is based on the assumption of memorylessness: for example, if we know that the nucleus remains intact at time s, the probability that it will remain intact until a later time s  +  t is the same as the original probability that it would remain intact to time t.
Let G (t) represent the probability that the nucleus remains intact up to time t. Then the probability that it remains intact up to time s  +  t given that it has remained intact up to time s is G (s  +  t)  /  G (s) , so this has to equal G (t) . Equivalently, G (s  +  t)  =  G (s) G (t).
The only decreasing functions that have this property are exponential functions [III.25](/part-03/the-exponential-and-logarithmic-functions), that is, functions of the form $G(t) = e - \lambda t$ for some positive $\lambda.$ Since $1 - G(t)$ represents the probability that the nucleus decays before time t, this should t equa$l^{0}$ f (x) dx, from which it is easy to deduce that $f(x) = \lambda e - \lambda x$ . We shall come to the third, and most important, distribution below.
$4$ Random Variables, Mean, and Variance Given a probability space, an event is defined to be a (sufficiently nice) subset of that space. For example, if the probability space is the interval [0 , 1] with the uniform distribution, then the interval [12 , 1] is an event: it represents a randomly chosen number between $0$ and $11$ turning out to be at leas$t^{2}$ . It is often useful to think not just about random events, but also about random numbers associated with a probability space.
For example, let us look once again at a sequence of tosses of a biased coin that has probability p of coming up heads. The natural sample space associated with this experiment is the set $\Omega$ of all sequences ω$of$0 s$and$1 s . Earlier, we showed that the probability of obtaining k n heads is $p^{k} = k p^{k}(1 - p)n - k$ , and we described that as a distribution on the sample space 0 , $1$ , $2$ , . . . , n}.
However, it is in many ways more natural, and often far more convenient, to regard the original set $\Omega$ as the sample space and to define a function X from $\Omega$ to R to represent the number of heads: that is, X (ω) is the $265$ number of $1s$ in the sequence ω. We then write n k $p (1 - p)n - k$ . $P(X = k) = p^{k} =$ k A function like this is called a random variable. If X is a random variable and it takes values in a set Y , then the distribution of X is the function P defined on subsets of Y by the formula $P(A) = P(X\inA) = P($ { $ω\in\Omega$ : $X(ω)\inA$ ).
It is not hard to see that P is indeed a probability distribution on Y . For many purposes, it is enough to know the distribution of a random variable. However, the notion of a random variable defined on a sample space captures our intuition of a random quantity, and it allows us to ask further questions. For example, if we were to ask for the probability that there were k heads given that the first and last tosses had the same out come, then the distribution of X would not provide the answer, where as our richer model of regarding X as a function defined on sequences would do so.
Further more, we can talk of independent random variables, $X^{1}$ , . . . , X n say, meaning that the subset of $\Omega$ where X i (ω) $\in$ A i for all i has probability given by the product P (X ${}^{1} \inA^{1}) \times$ · · · $\times P(X^{n} \in A^{n})$ for all possible sets of values A i . Associated with a random variable X are two important numbers that begin to characterize it, called the mean or expectation E (X) and the variance var (X). Both these numbers are determined by the distribution of X.
If X takes integer values, with distribution $P(X = k) = p^{k}$ , then var (X) =  (k - \mu)2 pk , $E(X) =$ kp k , k k where μ = E (X). The mean tells us how big X is on average. The variance, or more precisely its square root, the standard deviation σ = var (X), tells us how far away X lies, typically, from its mean. It is not hard to derive the following useful alternative formula for the variance: var (X) = E(X2) - E(X)2 . To understand the meaning of the variance, consider the following situation.
Suppose that one hundred people take an exam and you are told that their average mark is $75$ % . This gives you some useful information, but by no means a complete picture of how the marks are distributed. For example, perhaps the exam consisted of four questions of which three were very easy and one almost impossible, so that all the marks were

$266$

clustered around $75$ % . Or perhaps about fifty people got full marks and fifty got around half marks. To model this situation let the sample space $\Omega$ consist of the hundred people and let the probability distribution be the uniform distribution. Given a random person ω, let X (ω) be that person’s mark. Then in the first situation, the variance will be small, since almost everybody’s mark is close to the mean of $75$ % ; where as in the second it is close to $25^{2} = 625$ , since almost everybody’s mark was about $25$ away from the mean.
Thus, the variance helps us to understand the difference between the two situations. As we discussed at the start of this article, it is known from experience that the “expected” number of heads

$1$

in a sequence of n tosses of a fair coin is aroun$d^{2}$ n, in the sense that the proportion is usually close to $\frac{1}{2}$ . It is not hard to work out that, if X models the number of heads in n tosses, that is, if X is binomially dis$11$

tributed with parameters $n$ an$d^{2}$ , then $E(X) = {}^{2}n.1$

The variance of X is $4$ n, so the natural distance scale with which to measure the spread of the distribution √ is $σ = \frac{1}{2} n.$ This allows us to see that $X/n$ is close to

$12$ with probability close to $1$ for large n, in accordance with experience. More generally, if $X^{1}$ , $X^{2}$ , . . . , X n are independent random variables, then var $(X^{1} +$ · · · $+ X^{n}) =$ var $(X^{1}) +$ · · ·  +  var (X n). It follows that if all the X i have the same distribution with mean \mu and variance σ 2 , then the variance of the sample average . ar{X} $= n - 1(X^{1} +$ · · · $+ X^{n})$ is $n - 2(nσ^{2}) = σ^{2}/n$ , which tends to zero as n tends to infinity. This observation can be used to prove that, for any   $> 0$ , the probability that | .
ar{X} $- \mu|$ is greater than tends to zero as n tends to infinity. Thus, the sample average “converges in probability” to the mean μ. This result is called the weak law of large numbers. The argument sketched above implicitly assumes that the random variables have finite variance, but this assumption turns out not to be necessary. There is also a strong law of large numbers, which states that, with probability $1$ , the sample average of the first n variables converges to \mu as n tends to infinity.
As its name suggests, the strong law is stronger than the weak law, in the sense that the weak law can be deduced from the strong law. Notice that these laws make long-term predictions of a statistical kind about the real events that we have chosen to model using probability theory. More over, these predictions can be checked experimentally, and the experimental evidence confirms them. This provides a convincing scientific justification for our models.

III. Mathematical Concepts

$5$ The Normal Distribution and

the Central Limit Theorem

As we have seen, for the binomial distribution with parameters $n$ and $p$, the probability p k is given by the n formula $k p^{k}(1 - p)n - k$ . If n is large and you plot the points (k , p k) on a graph, then you will notice that they lie in a bell-shaped curve that has a sharp peak around the mean np. The width of the tall part of the curve has order of magnitude $np(1 - p)$ , the standard deviation of the distribution. Let us assume for simplicity that np is an integer, and define a new probability distribution $q^{k}$ by $q^{k} = p^{k} + np$ . The points (k , $q^{k})$ peak at $k = 0$ .
If you now rescale the graph, compressing horizontally by a factor of np ( $1 -$ p) and expanding vertically by the same factor, then the points will all lie close to the graph of

$12e - x / {}^{2}$ .

$f(x) =$ √

$2\pi$

This is the density function of a famous distribution known as the standard normal distribution on R . It is also often called the Gaussian distribution. To put this differently, if you toss a biased coin a large number of times, then the number of heads, minus its mean and divided by its standard deviation, is close to a standard normal random variable. √

$2$

The function $(1/ 2\pi)e - x / {}^{2}$ occurs in a huge variety of mathematical contexts, from probability theory to fourier analysis [III.27](/part-03/the-fourier-transform) to quantum mechanics. Why should this be? The answer, as it is for many such questions, is that there are properties that this function has that are shared by no other function. One such property is rotational invariance. Suppose once again that we are throwing a dart at a dartboard and aiming for the bull’s-eye.
We could model this as the result of adding two independent normal distributions at right angles to each other: one for the x-coordinate and one for the y-coordinate (each having mean $0$ and variance $1$ , say). If we do this, then the two dimensional “density function” is given by the formula

$22(1/2\pi)e - x / {}^{2}e - y / {}^{2}$ , which can conveniently be written

$2$

as $(1/2\pi)e - r / {}^{2}$ , where r denotes the length of (x ,  y). In other words, the density function depends only on the distance from the origin. (This is why it is called “rotationally invariant . ”) This very appealing property holds in more dimensions as well. And it turns out to

$2$

be quite easy to check that $(1/2\pi)e - r / {}^{2}$ is the only such function: more precisely, it is the only rotation invariant density function that makes the coordinates