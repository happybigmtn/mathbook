# Mathematical Statistics

$9161950s$ by Sharpe (see Sharpe 1964) , and is still ubiquitous. Sharpe’s model built on earlier work of Markowitz (1952). The fundamental problem in this area is to assess what portfolio of assets, generally shares, an investor should hold in order to maximize returns at a given level of risk. The theory requires assumptions to be made about the joint distribution of share returns, e.g., joint normality, and  /  or about the risk preferences of investors, e.g., that they only care about the mean and variance of returns.
Under these assumptions, the CAPM yields the result that every investor should hold a multiple of the “market portfolio,” which is essentially a portfolio consisting of everything traded in appropriate quantities to achieve maximum diversification, together with a certain amount of the risk-free asset. The relative amounts are determined by the investor’s risk preferences. A consequence of the model is the distinction between diversifiable risk and undiversifiable risk.
While investors are compensated for taking undiversifiable, or systematic, risk via higher expected returns, diversifiable risk does not carry a risk premium. This is because one can cancel out diversifiable risk by holding appropriate combinations of other assets. Therefore, if it carried a risk premium, investors could receive extra return without taking any risk. Much of the current research in this area is directed at trying to find more accurate models for the joint distribution of returns, and at finding techniques that estimate the parameters of such returns.
A related problem is the “equity premium puzzle,” which is that the excess return on investing in shares is much higher than the model predicts for reasonable levels of risk aversion.

$5$

Statistical Arbitrage

We only briefly mention statistical arbitrage as it is a rapidly changing area that is shrouded in secrecy. The fundamental idea in this area is to squeeze information out of asset price movements that the market has not already acted on. It therefore contradicts the principle of market efficiency, which says that all available information is already encoded in the market price. One explanation is that it is the action of taking such arbitrages that makes the market efficient.

Further Reading

Bachelier, L. 1900 . La Théorie de la Spéculation. Paris: Gauthier-Villars.

VII. The Influence of Mathematics

Black, F., and M. Scholes. 1973 . The valuation of options and corporate liabilities. Journal of Political Economy $81$ : $637 - 54$ . Einstein, A. 1985 . Investigations on the Theory of the Brownian Movement. New York: Dover. Harrison, J. M., and D. M. Kreps. 1979 . Martingales and arbitrage in multi-period securities markets. Journal of Economic Theory $20$ : $381 - 408$ . Harrison, J. M., and S. R. Pliska. 1981 . Martingales and stochastic integration in the theory of continuous trading. Stochastic Processes and Applications $11$ : $215 - 60$ . Markowitz, H. 1952 . Portfolio selection.
Journal of Finance $7$ : $77 - 99$ . Sharpe, W. 1964 . Capital asset prices: a theory of market equilibrium under conditions of risk. Journal of Finance $19$ : $425 - 42$ . VII . $10$ Mathematical Statistics

Persi Diaconis

$1$

Introduction

Suppose you want to measure something: your height, or the velocity of an airplane for example. You take repeated measurements $x^{1}$ , $x^{2}$ , . . . , x n and you would like to combine them into a final estimate. An obvious way of doing this is to use the sample mean $(x^{1} + x^{2} +$ · · ·  +  x n)  /  n . However, modern statisticians use many other estimators, such as the median or the trimmed mean (where you throw away the largest and smallest $10$ % of the measurements and take the average of what is left) .
Mathematical statistics helps us to decide when one estimate is preferable to another. For example, it is intuitively clear that throwing away a random half of the data and averaging the rest is foolish, but setting up a framework that shows this clearly turns out to be a serious enterprise.
One benefit of the under taking is the discovery that the mean turns out to be inferior to nonintuitive “shrinkage estimators” even when the data are drawn from a probability distribution [III.71](/part-03/probability-distributions) as natural as the bell-shaped curve (that is, are normally distributed [III.71](/part-03/probability-distributions) ). To get an idea of why the mean may not always give you the most useful estimate, consider the following situation. You have a collection of a hundred coins and you would like to estimate their biases.
That is, you would like to estimate a sequence of a hundred numbers, where the nth number $\theta$ n is the probability that the nth coin will come up heads when it is flipped. Suppose that you flip each coin five times and note down how many times it shows heads. What should your estimate be for the sequence $(\theta^{1}$ , . . . , $\theta^{100})$ ? If you use the

VII.10.   Mathematical Statistics                                                                                    917

means, then your guess for θn will be the number of                    Table 1 Batting averages for eighteen
times the nth coin shows heads, divided by 5. How-                        major league players in 1970.
ever, if you do this, then you are likely to get some very
                                                                      Batting    Batting
anomalous results. For instance, if all the coins happen
                                                                      average   average
to be unbiased, then the probability that any given coin       Player after 45 remainder James–Stein Remaining
shows up heads five times is 1/32, so you are likely           number at bats of season    estimator   at bats
to guess that around three of the coins have biases of
1. So you will be guessing that if you flip those coins            1      0.400      0.346        0.293         367
                                                                  2      0.378      0.298        0.289         426
five hundred times then they will come up heads every
                                                                  3      0.356      0.276        0.284         521
single time.
                                                                  4      0.333      0.221        0.279         276
   Many alternative methods of estimation have been               5      0.311      0.273        0.275         418
proposed in order to deal with this obvious problem.              6      0.311      0.270        0.275         467
However, one must be careful: if a coin comes up                  7      0.289      0.263        0.270         586
heads five times it could be that θi really is equal               8      0.267      0.210        0.265         138
to 1. What reason is there to believe that a different             9      0.244      0.269        0.261         510
method of estimation is not in fact taking us further            10      0.244      0.230        0.261         200
from the truth?                                                  11      0.222      0.264        0.256         277
   Here is a second example, drawn from work of                  12      0.222      0.256        0.256         270
                                                                 13      0.222      0.304        0.256         434
Bradley Efron, this time concerning a situation from
                                                                 14      0.222      0.264        0.256         538
real life. Table 1 shows the batting averages of eigh-
                                                                 15      0.222      0.226        0.256         186
teen baseball players. The first column shows the pro-
                                                                 16      0.200      0.285        0.251         558
portion of “hits” for each player in their first forty-five        17      0.178      0.319        0.247         405
times at bat, and the second column shows the pro-               18      0.156      0.200        0.242          70
portion of hits at the end of the season. Consider the
task of predicting the second column given only the
first column. Once again, the obvious approach is to          one begins with a set X (for the moment taken to be
use the average. In other words, one would simply use        finite) and a collection of numbers P (x), one for each
the first column as a predictor of the second column.         x ∈ X, which are positive and sum to one. This function
The third column is obtained by a shrinkage estimator:       P (x) is called a probability distribution. The basic prob-
more precisely, it takes a number y in the first column       lem of probability is this. You are given the probability
and replaces it by 0.265+0.212(y −0.265). The number         distribution P (x) and a subset A ⊂ X, and you must
0.265 is the average of the entries in the first column,      compute or approximate P (A), which is defined to be
so the shrinkage estimator is replacing each entry in        the sum of P (x) for x in A. (In probabilistic terms, each
the first column by one that is about five times closer        x has a probability P (x) of being chosen, and P (A) is
to the average. (How the number 0.212 is chosen will         the probability that x belongs to A.) This simple for-
be explained later.) If you look at the table, you will      mulation hides wonderful mathematical problems. For
see that the shrinkage estimators in the third column        example, X might be the set of all sequences of pluses
are better predictors of the second column in almost         and minuses of length 100 (e.g., +−−++−−−−−· · · ),
every case, and certainly on average. Indeed, the sum of     and each pattern might be equally likely, in which case
squared differences between the James–Stein estimator         P (x) = 1/2100 for every sequence x. Finally, A might be
and the truth divided by the sum of squared differences       the set of sequences such that for every positive integer
between the usual estimator and the truth is 0.29. That      k ⩽ 100 the number of + symbols in the first k places
is a threefold improvement.                                  is larger than the number of − symbols in the first k
   There is beautiful mathematics behind this improve-       places. This is a mathematical model for the following
ment and a clear sense in which the new estimator            probability problem: if you and a friend flip a fair coin a
is always better than the average. We describe the           hundred times, then what is the chance that your friend
framework, ideas, and extensions of this example as          is always ahead? One might expect this chance to be
                                                                                                              1
an introduction to the mathematics of statistics.            very small. It turns out, however, to be about 12  , though
   Before beginning, it will be useful to distinguish be-    verifying this is a far from trivial exercise. (Our poor
tween probability and statistics. In probability theory,     intuitions about chance fluctuations have been used to

$918$

explain road rage: suppose you choose one of two lines at a toll booth. As you wait, you notice whether your line or the other has made more progress. We feel it should all balance out, but the calculations above show that a fair proportion of the time you are always behind--and frustrated !)

$2$

The Basic Problem of Statistics

Statistics is a kind of opposite of probability. In statistics, we are given a collection of probability distributions P $\theta$ (x), indexed by some parameter $\theta.$ We see just one x and are required to guess which member of the family (which $\theta$ ) was used to generate x. For example, let us keep X as the sequence of pluses and minuses of length $100$ , but this time let P $\theta$ (x) be the chance of obtaining the sequence x if the probability of a plus is $\theta$ and the probability of a minus is $1 - \theta,$ with all terms in the sequence chosen independently.
Here $0 \le \theta \le 1$ , and $P\theta(x)$ is easily seen to be . heta S(1 - . heta)T , where S is the number of times “  +  ” appears in the sequence x and $T = 100 - S$ is the number of times $"-"$ appears. This is a mathematical model for the following enterprise. You have a biased coin with a probability $\theta$ of turning up heads, but you do not know $\theta.$ You flip the coin a hundred times, and are required to estimate $\theta$ based on the outcome of the flips.
In general, for each x $\in$ X, we want to find a guess, which we denote by $\theta$ ̂ (x), for the parameter $\theta.$ That is, we want to come up with a function $\thetâ,$ which will be defined on the observation space X. Such functions are called estimators. The above simple formulation hides a wealth of complexity, since both the observation space X and the space Θ of possible parameters may be infinite, or even infinite dimensional. For example, in nonparametric statistics, Θ is often taken as the set of all probability distributions on X.
All of the usual problems of statistics--design of experiments, testing hypotheses, prediction, and many others--fit into this framework. We will stick with the imagery of estimation. To evaluate and compare estimators, one more ingredient is needed: you have to know what it means to get the right answer. This is formalized through the notion of a loss function L ( $\theta$ , $\theta$ ̂ (x)). One can think of this in practical terms:
wrong guesses have financial consequences, and the loss function is a measure of how much it will cost if $\theta$ is the true value of the parameter but the statistician’s guess is $\theta$ ̂ (x). The most widely used choice is the squared error $(\theta - \theta$ ̂  (  x ))2 ,

VII. The Influence of Mathematics

but $|\theta - \theta$ ̂ (x)|$or$|. heta - . heta ̂ $(x)|/\theta$ and many other variants are also used. The risk function R ( $\theta$ , $\theta$ ̂) measures the expected loss if $\theta$ is the true parameter and the estimator $\thetâ$ is used. That is,

$R(\theta$ , $\theta$ ̂ $) =L(\theta$ , $\theta$ ̂  (  x )$)P\theta(dx)$ . Here, the right-hand side is notation for the average value of L ( $\theta$ , $\theta$ ̂ (x)) if x is chosen randomly according to the probability distribution P $\theta$ . In general, one would like to choose estimators that will make the risk function as small as possible.

$3$

Admissibility and Stein’s Paradox

We now have the basic ingredients: a family P $\theta$ (x) and a loss function L. An estimator $\thetâ$ is called inadmissible if there is a better estimator $\theta$ ∗ , in the sense that $R(\theta$ , $\theta$ ∗ $) < R(\theta$ , $\theta$ ̂) for all $\theta.$ In other words, the expected loss with $\theta$ ∗ is less than the expected loss with $\thetâ,$ whatever the true value of $\theta.$ Given our assumptions (the model P $\theta$ and loss function L) it seems silly to use an inadmissible estimator.
However, one of the great achievements of mathematical statistics is Charles Stein’s proof that the usual least-squares estimator, which does not at first glance seem silly at all, is inadmissible in natural problems. Here is that story. Consider the basic measurement model $X^{i} = \theta + i$ ,

$1 \le i \le n.$

Here X i is the ith measurement, $\theta$ is the quantity to be estimated, and   i is measurement error. The classical assumptions are that the measurement errors are independently and normally distributed: that is, they are distributed according to the bell-shaped, or Gauss√

$2$

ian, curve $e - x / {}^{2}/ 2\pi$ , $- \infty < x < \infty.$ In terms of the language we introduced earlier, the measurement space X is R n , the parameter space Θ is R , and the observation $x = (x^{1}$ , $x^{2}$ , . . . , $x^{n})$ has probability den√

$1n$

sity $P\theta(x) =$ exp[− 2 1 (x i − θ) 2 ]/( 2\pi)n . The usual estimator is the mean: that is, if x = ($x^{1}$ , . . . , x n), then one takes $\theta$ ̂ ( x ) to be $(x^{1} +$ · · · $+ x^{n})/n$ . It has been known for a long time that if the loss function $L(\theta$ , $\theta$ ̂ ( x ) ) is defined to be $(\theta - \theta$ ̂ ( x ))2 , then the mean is an admissible estimator. It has many other optimal properties as well (for example, it is the best linear unbiased estimator, and it is minimax--a property that will be defined later in this article).

VII . $10$ .

Mathematical Statistics

Now suppose that we wish to estimate two parameters, $\theta^{1}$ and $\theta^{2}$ , say. This time we have two sets of observations, $X^{1}$ , . . . , $X^{n}$ and $Y^{1}$ , . . . , $Y^{m}$ , with $X^{i} = \theta^{1} + i$ and $Y^{j} = \theta^{2} + η^{j}$ . The errors   i and η j are independent and normally distributed, as above. The loss function L $((\theta^{1}\theta^{2})$ , $(\theta$ ̂ ${}^{1}(x)\theta$ ̂ ${}^{2}(y)$ )) is now defined to be (. heta1 - . hetâ1(x))2 + (. heta2 - . hetâ2(y))2 : that is, you add up the squared errors from the two parts.
Again, the mean of the X i and the mean of the Y i make up an admissible estimator for $(\theta^{1}$ , $\theta^{2})$ . Consider the same setup with three parameters, $\theta^{1}$ ,

$\theta^{2}$ , $\theta^{3}$ . Again, $X^{i} = \theta^{1} + i$ , $Y^{j} = \theta^{2} + η^{j}$ , $Z^{k} = \theta^{3} + δ^{k}$ are independent and all the error terms are normally distributed. Stein’s surprising result is that for three (or more) parameters the estimator $\thetâ^{1}(x) = (x^{1} +$ · · · $+ x^{n})/n$ , $\thetâ^{2}(y) = (y^{1} +$ · · · $+ y^{m})/m$ ,

$\thetâ^{3}(z) = (z^{1} +$ · · · $+ z^{l})/l$ is inadmissible: there are other estimators that do better in all cases. For example, if p is the number of parameters (and $p \ge 3)$ , then the James-Stein estimator is defined to be

 p - 2. hetâJS = 1 -. hetâ.. hetâ +

Here we are using the notation X  +  to denote the maximum of $X$ and $0$ ; $\theta$ stands for the vector $(\theta^{1}$ , . . . , $\theta^{p})$ of all the averages and   $\thetâ$ is notation for ((. heta1)2 + · · ·  +  $\theta^{p}2)1/2$ . The James-Stein estimator satisfies the inequality $R(\theta$ , $\thetâJS) < R(\theta$ , $\theta$ ̂) for all $\theta,$ and therefore the usual estimator $\thetâ$ is indeed inadmissible. The James-Stein estimator shrinks the classical estimator toward zero.
The amount of shrinkage is small if   $\thetâ {}^{2}$ is large and appreciable for   $\thetâ {}^{2}$ near zero. Now the problem as we have described it is invariant under translation, so if we can improve the classical estimate by shrinking toward zero, then we must be able to improve it by shrinking toward any other point. This seems very strange at first, but one can obtain some insight into the phenomenon by considering the following informal description of the estimator.
It makes an a priori guess $\theta^{0}$ at $\theta. ($ This guess was zero above .) If the usual estimator $\thetâ$ is close to the guess, in the sense that   $\thetâ$ is small, then it moves $\thetâ$ toward the guess. If $\thetâ$ is far from the guess, it leaves $\thetâ$ alone. Thus, although the estimator moves the classical estimator toward an arbitrary guess, it does so only if there are reasons to believe that the guess is a good one. With four or more parameters the data can in

$919$

fact be used to suggest which point $\theta^{0}$ one should use as the initial guess. In the example of table $1$ , there are eighteen parameters, and the initial guess $\theta^{0}$ was the constant vector with all its eighteen coordinates equal to the average $0$ . $265$ . The number $0$ . $212$ that was used for the shrinking is equal to $1 - 16/\theta - \theta^{0}$  .
(Note that for this choice of $\theta^{0}$ , $\theta - \theta^{0}$   is the standard deviation of the parameters that make up $\theta$ .) The mathematics used to prove inadmissibility is an elegant blend of harmonic function theory and tricky calculus. The proof itself has had many ramifications: it gave rise to what is called “Stein’s method” in probability theory--this is a method for proving things like the central limit theorem for complex dependent problems.
The mathematics is “robust,” since it is applicable to nonnormal error distributions, a variety of different loss functions, and estimation problems far from the measurement model. The result has had enormous practical application. It is routinely used in problems where many parameters have to be simultaneously estimated. Examples include national laboratories’ estimates of the percentage of defectives when they are looking at many different products at once, and the simultaneous estimate of census under counts for each of the fifty states in the United States.
The apparent robustness of the method is very useful for such applications: even though the James-Stein estimator was derived for the bell-shaped curve, it seems to work well, without special assumptions, in problems where its assumptions hold only roughly. Consider the baseball players above, for example. Adaptations and variations abound. Two popular ones are called empirical Bayes estimates (now widely used in genomics) and hierarchical modeling (now widely used in the assessment of education). The mathematical problems are far from completely solved.
For example, the James-Stein estimator is itself inadmissible. (It can be shown that any admissible estimator in a normal measurement problem is an analytic function of the observations. The James-Stein estimator is, however, clearly not analytic because it involves the non differentiable function $x \to x +$ .) While it is known that there is little practical improvement possible, the search for an admissible estimator that is always better than the James-Stein estimator is a tantalizing research problem.
Another active area of research in modern mathematical statistics is to understand which statistical problems give rise to Stein’s paradox. For example, although

$920$

at the beginning of this essay we discussed some inadequacies of the usual maximum-likelihood estimator for estimating the biases of a hundred coins, it turns out that that estimator is admissible! In fact, the maximum likelihood estimator is admissible for any problem with finite state spaces.

$4$

Bayesian Statistics

The Bayesian approach to statistics adds one further ingredient to the family P $\theta$ and loss function L. This is known as a prior probability distribution $\pi(\theta)$ , which gives different weights to different values of the parameter $\theta.$ There are many ways of generating a prior distribution: it may quantify the working scientists’ best guess at $\theta;$ it may be derived from previous studies or estimates; or it may just be a convenient way to generate estimators.
Once the prior distribution $\pi(\theta)$ has been specified, the observation x and Bayes’s theorem combine to give a posterior distribution for $\theta,$ here denoted $\pi(\theta|x)$ . Intuitively, if x is your observation, then $\pi(\theta|x)$ measures how likely it is that $\theta$ was the parameter, given that the parameter was generated from the probability distribution $\pi$ . The mean value of $\theta$ with respect to the posterior distribution $\pi(\theta|x)$ gives a Bayes estimator:

$\thetâ$ Bayes $(x) =\theta\pi(\theta|x)$ .

For the squared-error loss function, all Bayes estimators are admissible, and, in the converse direction, any admissible estimator is a limit of Bayes estimators. (However , not every limit of Bayes estimators is admissible: indeed, the average, which we have seen to be inadmissible, is a limit of Bayes rules .) The point for the present discussion is this.
In a wide variety of practical variations of the measurement problem--things like regression analysis or the estimation of correlation matrices--it is relatively straightforward to write down sensible Bayes estimators that incorporate available prior knowledge. These estimators include close cousins of the James-Stein estimator, but they are more general, and allow it to be routinely extended to almost any statistical problem. Because of the high-dimensional integrals involved, Bayes estimates can be difficult to compute.
One of the great advances in this area is the use of computersimulat i on algorithms, called variously Markov chain Monte Carlo or Gibbs samplers, to compute useful approximations to Bayes estimators. The whole package--provable superiority, easy adaptability, and ease

VII. The Influence of Mathematics

of computation--has made this Bayesian version of statistics a practical success.

$5$

A Bit More Theory

Mathematical statistics makes good use of a wide range of mathematics: fairly esoteric analysis, logic, combinatorics, algebraic topology, and differential geometry all play a role. Here is an application of group theory. Let us return to the basic setup of a sample space X, a family of probability distributions P $\theta$ (x), and a loss function L ( $\theta$ , $\theta$ ̂ (x)). It is natural to consider how the estimator changes when you change the units of the problem: from pounds to grams, or from centimeters to inches, say. Will this have a significant impact on the mathematics?
One would expect not, but if we want to think about this question precisely then it is useful to consider a group G of transformations of X. For example, linear changes of units correspond to the affine group, which consists of transformations of the form $x \to ax + b.$ The family $P\theta(x)$ is said to be invariant under G if for each element g of G the transformed distribution P $\theta$ (xg) is equal to a distribution P $\thetā$ (x) for some other $\thetā$ in Θ. For example, the family of normal distributions

(x - . heta1)2

exp  - 

$2\theta22$

, - . nfty < . heta1 < . nfty, 0 < . heta2 < . nfty,2\pi. heta22

is invariant under ax  +  b transformations: if you change x to ax  +  b, then after some easy manipulations you can rewrite the resulting   modified formula in the form exp [− (x − φ 1) 2 / 2 φ 22 ]/ 2\piφ. rac{2}{2} for some new parameters $φ^{1}$ and $φ^{2}$ . An estimator $\thetâ$ is called equivarian. ar{t} if $\theta$ ̂ ( $xg) = \theta$ ̂  (  x ) . This is a formal way of saying that if you change the data from one unit to another, then the estimate transforms as it should. For example, suppose your data are temperatures presented in centigrade and you want an answer in Fahrenheit.
If your estimator is equivariant, then it will make no difference whether you first apply the estimator and then convert the answer into Fahrenheit or first convert all the data into Fahrenheit and then apply the estimator. The multivariate normal problem underlying Stein’s paradox is invariant under a variety of groups, including the p-dimensional group of Euclidian motions (rotations and translations). However, the James-Stein estimator is not equivariant, since, as we have already discussed, it depends on the choice of origin.
This is not necessarily bad, but it is certainly thought provoking. If you ask a working scientist if they want a