# The Mathematics of Money

910                                                                                  VII. The Influence of Mathematics

                                                                  asset. The simplest example of such a security is a
VII.9 The Mathematics of Money                                    call option, which is the right, but not the obligation,
         Mark Joshi                                               to buy a share for a pre-agreed price, K, on some
                                                                  specified future date. The pre-agreed price is called
                    1   Introduction                              the strike. The pricing of derivatives is heavily reliant
                                                                  upon the principle of no arbitrage.
The last twenty years have seen an explosive growth             Risk analysis and reduction. Any financial institution
in the use of mathematics in finance. Mathematics has              has holdings and borrowings of assets; it needs to
made its way into finance mainly via the application of            keep careful control of how much money it can lose
two principles from economics: market efficiency and                from adverse market moves and to reduce these risks
no arbitrage.                                                     as necessary to keep within the owners’ desired risk
   Market efficiency is the idea that the financial mar-             profiles.
kets price every asset correctly. There is no sense in          Portfolio optimization. Any investor in the markets
which a share can be a “good buy,” because the mar-               will have notions of how much risk he wants to take
ket has already taken all available information into              and how much return he wants to generate, and most
account. Instead, the only way that we have of dis-               importantly of where he sees the trade-off between
tinguishing between two assets is their differing risk             the two. There is, therefore, a theory of how to invest
characteristics. For example, a technology share might            in shares in such a way as to maximize the return at
offer a high rate of growth but also a high probability            a given level of risk. This theory relies greatly on the
of losing a lot of money, while a U.K. or U.S. govern-            principle of market efficiency.
ment bond would offer a much smaller rate of growth,             Statistical arbitrage. Crudely put, this is using mathe-
but an extremely low probability of losing money. In              matics to predict price movements in the stock mar-
fact, the probability of loss is so small in the latter case      ket, or indeed in any other market. Statistical arbi-
that these instruments are generally regarded as being            trageurs laugh at the concept of market efficiency,
riskless.                                                         and their objective is to exploit the inefficiencies in
   No arbitrage, the second fundamental principle, sim-           the market to make money.
ply says that it is impossible to make money without
taking risk. It is sometimes called the “no free lunch”           Of these four areas, it is derivatives pricing that has
principle. In this context, “making money” is defined            seen the greatest growth in recent years, and which
to mean making more money than could be obtained                has seen the most powerful application of advanced
by investing in a riskless government bond. A simple            mathematics.
application of the principle of no arbitrage is that if one
changes dollars into yen and then the yen into euros                           2   Derivatives Pricing
and then the euros back into dollars, then, apart from
                                                                2.1   Black and Scholes
any transaction costs, one will finish with the same
number of dollars that one started with. This forces a          Many of the foundations of mathematical finance were
simple relationship between the three foreign exchange          laid down by Bachelier (1900) in his thesis; his math-
(FX) rates:                                                     ematical study of brownian motion [IV.24](/part-04/stochastic-processes) preceded
                    FX$,€ = FX$, FX,€ .                 (1)   that of Einstein (see Einstein (1985), which contains his
Of course, occasional anomalies and exceptions to               1905 paper). However, his work was neglected for many
this relationship can occur, but these will be spotted          years and the great breakthrough in derivatives pricing
by traders. The exploitation of the resulting arbitrage         was made by Black and Scholes (1973). They showed
opportunity will quickly move the exchange rates until          that, under certain reasonable assumptions, it was pos-
the opportunity disappears.                                     sible to use the principle of no arbitrage to guarantee
  One can roughly divide the use of mathematics in              a unique price for a call option. The pricing of deriva-
finance into four main areas.                                    tives had ceased to be an economics problem and had
                                                                become a mathematics problem.
Derivatives pricing. This is the use of mathematics                The result of Black and Scholes was deduced by ex-
 to price securities (i.e., financial instruments), whose        tending the principle of no arbitrage to encompass the
 value depends purely upon the behavior of another              idea that an arbitrage could result not just from static

VII.9.   The Mathematics of Money                                                                                                          911

holdings of securities, but also from continuously trad-                            50
ing them in a dynamic fashion depending upon their
price movements. It is this principle of no dynamic                                 40

                                                              Black–Scholes price
arbitrage that underpins derivatives pricing.
  In order to properly formulate the principle, we have                             30
to use the language of probability theory.
                                                                                    20
  An arbitrage is a trading strategy in a collection of
assets, the portfolio, such that
                                                                                    10
  (i) initially the portfolio has a value of zero;
 (ii) the probability that the portfolio will have a nega-                           0
                                                                                      60    68    76   84   92 100 108 116 124 132 140
      tive value in the future is zero;                                                                      Share price
(iii) the probability that the portfolio will have a posi-
                                                             Figure 1 The Black–Scholes price of a call option struck at
      tive value in the future is greater than zero.         100 for various maturities. The value decreases as maturity
                                                             decreases, with the bottom line denoting a maturity of zero.
   Note that we do not require the profit to be certain;
we merely require that it is possible that money may
be made with no risk taken. (Recall that the notion of       option, C(S, t), that expires at time T must be equal to
making money is by comparison with a government                                     BS(S, t, r , σ , T ) = SΦ(d1 ) − Ke−r (T −t) Φ(d2 ),   (4)
bond. The same is true of the “value” of a portfolio: it
                                                             with
will be considered positive in the future if its price has
                                                                                                  log(S/K) + (r + σ 2 /2)(T − t)
increased by more than that of a government bond.)                                         d1 =               √                            (5)
                                                                                                            σ T −t
   The prices of shares appear to fluctuate randomly,
but often with a general upward or downward ten-             and
dency. It is natural to model them by means of a Brown-                                           log(S/K) + (r − σ 2 /2)(T − t)
                                                                                           d2 =               √                  .         (6)
ian motion with an extra “drift term.” This is what Black                                                   σ T −t
and Scholes did, except that it was the logarithm of the     Here, Φ(x) denotes the probability that a standard nor-
share price S = St that was assumed to follow a Brown-       mal random variable has value less than x. As x tends
ian motion Wt with a drift. This is a natural assumption     to . nfty, Φ(x) tends to 1, and as x tends to −. nfty, Φ(x) tends
to make, because changes in prices behave multiplica-        to 0. If we let t tend to T , we find that d1 and d2 tend
tively rather than additively. (For example, we measure      to . nfty if ST > K (in which case log(ST /K) > 0) and to −. nfty
inflation in terms of percentage increases.) They also        if ST < K. It follows that the price C(S, t) converges to
assumed the existence of a riskless bond, Bt , grow-         max(ST − K, 0), which is the value of a call option at
ing at a constant rate. To put these assumptions more        expiry, just as one would expect. We illustrate this in
formally:                                                    figure 1.
               log S = log S0 + \mu t + σ Wt ,            (2)      There are a number of interesting aspects to this
                          rt                                 result that go far beyond the formula itself. The first
                 Bt = B 0 e .                          (3)
                                                             and most important result is that the price is unique.
Notice that the expectation of log S is log S0 + \mu t, so it   Using just the hypothesis that it is impossible to make a
changes at a rate μ, which is called the drift. The term     riskless profit, along with some natural and innocuous
σ is known as the volatility. The higher the volatility,     assumptions, we discover that there is only one possi-
the greater the influence of the Brownian motion Wt ,         ble price for the option. This is a very strong conclu-
and the more unpredictable the movements of S. (An           sion. It is not just the case that the option is a bad deal
investor will want a large \mu and a small σ ; however,        if traded at a different price: if a call option is bought
market efficiency ensures that such shares are rather          for less or sold for more than the Black–Scholes price,
rare.) Under additional assumptions such as that there       then a riskless profit can be made.
are no transaction costs, that trading in a share does          A second fact, which may seem rather paradoxical, is
not affect its price, and that it is possible to trade con-   that μ, the drift, does not appear anywhere in the Black–
tinuously, Black and Scholes showed that if there is no      Scholes formula. This means that the expected behav-
dynamic arbitrage, then at time t, the price of a call       ior of the share’s future mean price does not affect the

$912$

price of the call option; our beliefs about the probability that the option will be used do not affect its price. Instead, it is the volatility of the share price that is all-important. As part of their proof, Black and Scholes showed that the call option price satisfied a certain partial differential equation (PDE) now known as the Black-Scholes equation, or BS equation for short: ∂ ${}^{2}C$ ∂C ∂C

+ . rac{1}{2}σ2 S2= r C.+ r S(7)$\partial$ S_{2}

∂t

∂S

This part of the proof did not rely on the derivative being a call option: there is in fact a large class of derivatives whose prices satisfy the BS equation, differing only in boundary conditions. If one changes variables, setting $τ = T - t$ and $X =$ log  S, then the BS equation becomes the heat equation [I.3](/part-01/fundamental-definitions) with an extra first-order term which can easily be removed. This means that the value of an option behaves in a similar way to time-reversed heat:
it diffuses and spreads out the farther back one gets from the option’s expiry and the more uncertainty there is about the value of the share at time T . $2$ . $2$ Replication The fundamental idea underlying the Black-Scholes proof and much of modern derivatives pricing is dynamic replication. Suppose we have a derivative Y that pays an amount that depends on the value of the share at some set of times $t^{1} < t^{2} <$ · · · $< t^{n}$ , and suppose that the payout occurs at a certain time T $\ge$ t n . This can be expressed in terms of a payoff function, f ($t^{1}$ , . . . , t n).
The value of Y will vary with the share price. If, in addition, we hold just the right number of the shares themselves, then a portfolio consisting of Y and the shares will be instantaneously immune to changes in the share price, i.e., its value will have zero rate of change with respect to the share price. As the value of Y will vary with time and share price, we will need to continuously buy and sell shares to maintain this neutrality to share-price movements. If we have sold a call option, then it turns out that we will have to buy when the share price goes up and sell when it goes down;
so these transactions will cost us a certain amount of money. Black and Scholes’s proof showed that this sum of money was always the same and that it could be computed. The sum of money is such that by investing it in shares and riskless bonds, one can end up with a portfolio precisely equal in value to the payoff of Y no matter what the share price did in between. VII. The Influence of Mathematics Thus if one could sell Y for more than this sum of money, one would simply carry out the trading strategy from their proof and always end up ahead.
Similarly, if one can buy Y for less, one does the negative of the strategy and always ends up ahead. Both of these are outlawed by the principle of no arbitrage, and a unique price is guaranteed. The property that the payoff of any derivative can be replicated is called market completeness. $2$ . $3$ Risk-Neutral Pricing A curious aspect of the Black-Scholes result, mentioned above, is that the price of a derivative does not depend upon the drift of the share price. This leads to an alternative approach to derivatives pricing theory called risk-neutral pricing.
An arbitrage can be thought of as the ultimate unfair game: the player can only make money. By contrast, a martingale [IV.24](/part-04/stochastic-processes) encapsulates the notion of a fair game: it is a random process whose expected future value is always equal to its current value. Clearly, an arbitrage portfolio can never be a martingale. So if we can arrange for everything to be a martingale, there can be no arbitrages, and the price of derivatives must be free of arbitrage.
Unfortunately, this cannot be done because the price of the riskless bond grows at a constant rate, and is therefore certainly not a martingale. However, we can carry out the idea for discounted prices: that is, for prices of assets when they are divided by the price of the riskless bond. In the real world, we do not expect discounted prices to be martingales. After all, why buy shares if their mean return is no better than that of a bond that carries no risk? Nevertheless, there is an ingenious way of introducing martingales into the analysis:
by changing the probability measure [III.71](/part-03/probability-distributions) that one uses. If you look back at the definition of arbitrage, you will see that it depends only on which events have zero probability and which have nonzero probability. Thus, it uses the probability measure in a rather incomplete way. In particular, if we use a different probability measure for which the sets of measure zero are the same, then the set of arbitrage portfolios will not change. Two measures with the same sets of measure zero are said to be equivalent.
A theorem of Girsanov says that if you change the drift of a Brownian motion, then the measure that you derive from it will be equivalent to the measure you had before. This means that we can change the term μ. A good value to choose turns out to be $\mu = r - \frac{1}{2}σ^{2}$ .

VII . $9$ .

The Mathematics of Money

With this value of μ, one has

$E(S/B^{t}) = S/B^{0}(8)$

for any t, and since we can take any time as our starting point, it follows that S  /  B t is a martingale. (The extra $- \frac{1}{2}σ^{2}$ in the drift comes from the concavity of the coordinate change to logspace .) This means that the expectation has been taken in such a way that shares do not carry any greater return, on average, than bonds. Normally, as we have mentioned, one would expect an investor to demand a greater return from a risky share than from a bond.
(An investor who does not demand such compensation is said to be risk neutral .) However, now that we are measuring expectations differently, we have managed to build an equivalent model in which this is no longer the case. This yields a way of finding arbitrage-free prices. First, pick a measure in which the discounted price processes of all the fundamental instruments, e.g., shares and bonds, are martingales. Second, set the discounted price process of derivatives to be the expectations of their payoff; this makes them into martingales by construction.
Everything is now a martingale and there can be no arbitrage. Of course, this merely shows that the price is non arbitrage able, rather than that it is the only non arbitrage able price. However, work by Harrison and Kreps (1979) and by Harrison and Pliska (1981) shows that if a system of prices is non arbitrage able, then there must be an equivalent martingale measure. Thus the pricing problem is reduced to classifying the set of equivalent martingale measures. Market completeness corresponds to the pricing measure being unique.
Risk-neutral evaluation has become such a pervasive technique that it is now typical to start a pricing problem by postulating risk-neutral dynamics for assets rather than real-world ones. We now have two techniques for pricing: the Black Scholes replication approach, and the risk-neutral expectation approach. In both cases, the real-world drift, μ, of the share price does not matter.
Not surprisingly, a theorem from pure mathematics, the Feynman Kac theorem, joins the two approaches together by stating that certain second-order linear partial differential equations can be solved by taking expectations of diffusive processes.

$2$ . $4$

Beyond Black-Scholes

For a number of reasons, the theory outlined above is not the end of the story. There is considerable evidence

$913$

that the log of the share price does not follow a Brownian motion with drift. In particular, market crashes occur. For example, in October 1987 the stock market fell by $30$ % in one day and financial institutions found that their replication strategies failed badly. Mathematically, a crash corresponds to a jump in the share price, and Brownian motion has the property that all paths are continuous. Thus the Black-Scholes model failed to capture an important feature of share-price evolution.
A reflection of this failure is that options on the same share but with differing strike prices often trade with different volatilities, despite the fact that the BS model suggests that all options should trade with the same volatility. The graph of volatility as a function of the strike price is normally in the shape of a smile, displaying the disbelief of traders in the Black-Scholes model. Another deficiency of the model is that it assumes that the volatility is constant.
In practice, market activity varies in intensity and goes through some periods when share prices are much more volatile and others when they are much less so. Models must therefore be corrected to take account of the stochasticity of volatility, and the prediction of volatility over the life of an option is an important part of its pricing. Such models are called stochastic volatility models. If one examines the data on small-scale share movements, one quickly discovers that they do not resemble a diffusion. They appear to be more like a series of small jumps than a Brownian motion.
However, if one rescales time so that it is based on the number of trades that have occurred rather than on calendar time, then the returns do become approximately normal. One way to generalize the Black-Scholes model is to introduce a second process that expresses trading time. An example of such a model is known as the variance gamma model. More generally, the theory of Lévy processes has been applied to develop wider theories of price movements for shares and other assets. Most generalizations of the Black-Scholes model do not retain the property of market completeness.
They therefore give rise to many prices for options rather than just one.

$2$ . $5$

Exotic Options

Many derivatives have quite complicated rules to determine their payoffs. For example, a barrier option can be exercised only if the share price does not go below a certain level at any time during the contract’s life, and an

$914$

Asian option pays a sum that depends on the average of the share price over certain dates rather than on the price at expiry. Or the derivative might depend upon several assets at once, such as, for example, the right to buy or sell a basket of shares for a certain price. It is easy to write down expressions for the value of such derivatives in the Black-Scholes model, either via a PDE or as a risk-neutral expectation. It is not so easy to evaluate these expressions. Much research is therefore devoted to developing efficient methods of pricing such options.
In certain cases it is possible to develop analytic expressions. However, these tend to be the exception rather than the rule, and this means that one must resort to numerical techniques. There is a wealth of methods for solving PDEs and these can be applied to derivatives-pricing problems. One difficulty in mathematical finance, however, is that the PDE can be very high dimensional. For example, if one is trying to evaluate a credit product depending on $100$ assets, the PDE could be $100$ dimensional.
PDE methods are most effective for low-dimensional problems, and so research is devoted to trying to make them effective in a wider range of cases. One method that is less affected by dimensionality is Monte Carlo evaluation. The basis of this method is very simple: both intuitively and (via the law of large numbers) mathematically, an expectation is the long-run average of a series of independent samples of a random variable X. This immediately yields a numerical method for estimating E (f (X)).
One simply takes many independent samples X i of X, calculates f (X i) for each one and computes their average. It follows from the central limit theorem [III.71](/part-03/probability-distributions) that the error after N draws is approximately distributed as a normal distribution with variance equal to $N - 1/2$ times the variance of f (X). The rate of convergence is therefore dimension independent. If the variance of f (X) is large, it may still be rather slow, however.
Much effort is therefore devoted by financial mathematicians to developing methods of reducing the variance when one computes high-dimensional integrals.

$2$ . $6$

Vanilla versus Exotics

Generally, a simple option to buy or sell an asset is known as a vanilla option, whereas a more complicated derivative is known as an exotic option. An essential difference between the pricing of the two is that one can hedge an exotic option not just with the underlying share, but also by trading appropriately in the vanilla

VII. The Influence of Mathematics

options on that share. Typically, the price of a derivative will depend not just on observable inputs, such as the share price and interest rates, but also on unobservable parameters, such as the volatility of the share price or the frequency of market crashes, which cannot be measured but only estimated. When trading exotic options, one wishes to reduce dependence upon these unobservable inputs. A standard way to do this is to trade vanilla options in such a way as to make the rate of change of the value of the portfolio with respect to such parameters equal to zero.
A small misestimation of their value will then have little effect on the worth of the portfolio. This means that when one prices exotic options, one wishes not just to capture the dynamics of the underlying asset accurately but also to price all the vanilla options on that asset correctly. In addition, the model will predict how the prices of vanilla options change when the share price changes. We want these predictions to be accurate. The BS model takes volatility to be constant. However, one can modify it so that the volatility varies with the share price and over time.
One can choose how it varies in such a way that the model matches the market prices of all vanilla options. Such models are known as local volatility models or Dupire models. Local volatility models were very popular for a while, but have become less so because they give a poor model for how the prices of vanilla options change over time. Much of the impetus behind the development of the models we mentioned in section $2$ .
$4$ comes from the desire to produce a model that is computationally tractable, prices all vanilla options correctly, and produces realistic dynamics for both the underlying assets and the vanilla options. This problem has still not been wholly solved. There tends to be a trade-off between realistic dynamics and perfect matching of the vanilla options market. One compromise is to fit the market as well as possible using a realistic model and then to superimpose a local volatility model to remove the remaining errors.

$3$

Risk Management

$3$ . $1$

Introduction

Once we have accepted that it is impossible to make money in finance without taking risk, it becomes important to be able to measure and quantify risks. We wish to measure accurately how much risk we are taking and decide whether we are comfortable with that level of

VII.9.    The Mathematics of Money                                                                                915

risk. For a given level of risk, we want to maximize our     assume that the set of changes tomorrow will be identi-
expected return. When considering a new transaction,         cal to one of the sets of changes we have recorded. If we
we will want to examine how it affects our risk lev-          assign equal probability to each of those changes, then
els and returns. Certain transactions may even reduce        we get an approximation to the profit and loss distribu-
our risk while increasing our returns if they cancel out     tion, from which we can read off the desired percentile.
other risk. (A risk that can be canceled out by other        Note that as we are using a day’s change for all assets
risks that have a tendency to move in the opposite           simultaneously, we automatically get an approximation
direction is called diversifiable.)                           to the joint distribution of all the asset prices.
   The control of risk becomes particularly important           A second approach is to assume that asset price
when dealing with portfolios of derivatives, which are       movements come from some well-known class of dis-
often of zero value initially but which can very quickly     tributions. For example, we could assume that the logs
change value. Placing a limit on the value of the con-       of the asset price movements are jointly normal. We
tracts held is therefore not of much use, and controls       would then use historical data to estimate the volatil-
based on deal sizes are complicated by the fact that         ities and the correlations between the various prices.
often many derivatives contracts largely cancel each         The main difficulty with this approach is obtaining
other out; it is the residual risk that one wishes to        robust estimates of the correlations given a limited
control.                                                     amount of data.

3.2      Value-at-Risk                                                    4   Portfolio Optimization

One method of limiting an institution’s risks in deriva-     4.1   Introduction
tives trading is to place a limit on the amount it can
                                                             The job of a fund manager is to maximize the return
lose with a given probability over a specified period of
                                                             on the money invested while minimizing the risk. If we
time. For instance, one might consider the losses at a
                                                             assume that markets are efficient, then there is no point
1% level over ten days, or at a 5% level over one day.
                                                             in trying to pick shares that we believe to be underval-
This value is called Value-at-Risk or VAR.
                                                             ued as we have assumed that they do not exist. A corol-
   To compute VAR one has to build up a probabilistic
                                                             lary is that just as no shares are good buys, no shares
model of how the portfolio of derivatives might change
                                                             are bad buys. In any case, over half the shares in the
in value over the time period. This requires a model
                                                             market are owned via funds and therefore under the
of how all the underlying assets can move. Given this
                                                             control of fund managers. Therefore, the average fund
model, one then builds up the distribution of possible
                                                             manager cannot expect to out perform the market.
profits and losses over the given time period. Once one
                                                               It may seem that this does not leave much for fund
has this distribution one simply reads off the desired
                                                             managers to do, but in fact it leaves two things.
percentile.
   The issues involved in modeling the changes for VAR         (i) They can attempt to control the amount of risk
computation are quite different from those for deriva-              they are taking.
tives pricing. Typically, a VAR computation is done over      (ii) For a given level of risk, they can maximize their
a very short time period, such as one or ten days, unlike          expected return.
the pricing of an option, which deals with a long time
frame. Also, one is not interested in the typical path for     To do these things requires an accurate model of the
VAR, but instead one focuses on the extreme moves.           joint distribution of asset prices over the longer term,
In addition, since it is the VAR of an entire portfolio      and a quantifiable notion of risk.
that matters, one has to develop an accurate model
                                                             4.2   The Capital Asset Pricing Model
of the underlying assets’ joint distributions: the move-
ment of one underlying asset could magnify the price         Portfolio theory has been in its modern form for
movement of another, or it could act as a hedge.             longer than derivatives pricing. As an area, it relies
   There are two main approaches to developing a prob-       less on stochastic calculus and more on economics.
abilistic model for computing VAR. The first, the histor-     We briefly review the key ideas. The best-known model
ical approach, is to record all the daily changes over       for modeling portfolio returns is the capital asset pric-
some time period, for example two years, and then            ing model (or CAPM), which was introduced in the