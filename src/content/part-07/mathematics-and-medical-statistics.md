# Mathematics and Medical Statistics

VII . $11$ .

Mathematics and Medical Statistics

“most accurate” estimator, they will say “of course.” If you ask if they insist on equivariance, “of course” will follow as well. One way of expressing Stein’s paradox is the statement that the two desiderata--accuracy and invariance--are incompatible. This is one of many places where mathematics and statistics part company. Deciding whether mathematically optimal procedures are “sensible” is important and hard to mathematize. Here is a second use of group theory.
An estimator $\thetâ$ is called minimax if it minimizes the maximum risk over all $\theta.$ Minimax corresponds to playing things safe: you have optimal behavior (that is, the least possible risk) in the worst case. Finding minimax estimators in natural problems is hard, honest work. For example, the vector of means is a minimax estimator in normal location problems. The work is easier if the problem is invariant under a group. Then one can first search for best invariant estimators. Invariance often reduces things to a straightforward calculus problem.
Now the question arises of whether an estimator that is minimax among invariant estimators is minimax among all estimators. A celebrated theorem of Hurt and Stein says “yes” if the group involved is nice (e . g . , Abelian or compact or amenable). Determining whether the best invariant estimator is minimax when the group is not nice is a challenging open problem in mathematical statistics. And it is not just a mathematical curiosity. For example, the following problem is very natural, and invariant under the group of invertible matrices:
given a sample from the multivariate normal distribution, estimate its correlation matrix. In this case, the group is not nice and good estimates are not known.

$6$

Conclusion

The point of this article is to show how mathematics enters and enriches statistics. To be sure, there are parts of statistics that are hard to mathematize: graphical displays of data are an example. Further, much of modern statistical practice is driven by the computer. There is no longer any need to restrict attention to tractable families of probability distributions. Complex and more realistic models can be used. This gives rise to the subject of statistical computing.
Nonetheless, every once in a while some one has to think about what the computer should do and determine whether one innovative procedure works better than another. Then, mathematics holds its own. Indeed, mathematizing modern statistical practice is a challenging, rewarding enterprise, of which Stein’s estimator is a current

$921$

highlight. This endeavor gives us something to aim for and helps us to calibrate our day-to-day achievements.

Further Reading

Berger, J. O. 1985 . Statistical Decision Theory and Bayesian Analysis, $2nd$ edn. New York: Springer. Lehmann, E. L., and G. Casella. 2003 . Theory of Point Estimation. New York: Springer. Lehmann, E. L., and J. P. Romano. 2005 . Testing Statistical Hypotheses. New York: Springer. Schervish, M. 1996 . Theory of Statistics. New York: Springer. VII . $11$ Mathematics and Medical

Statistics

David J. Spiegelhalter

$1$

Introduction

There are many ways in which mathematics has been applied in medicine: for example, the use of differential equations in pharmacokinetics and models for epidemics in populations; and fourier analysis [III.27](/part-03/the-fourier-transform) of biological signals. Here we are concerned with medical statistics, by which we mean collecting data about individuals and using it to draw conclusions about the development and treatment of disease. This definition may appear to be rather restrictive, but it includes all of the following:
randomized clinical trials of therapies, evaluating interventions such as screening programs, comparing health out comes in different populations and institutions, describing and comparing the survival of groups of individuals, and modeling the way in which a disease develops, both naturally and when it is influenced by an intervention. In this article we are not concerned with epidemiology, the study of why diseases occur and how they spread, although most of the formal ideas described here can be applied to it.
After a brief historical introduction, we shall summarize the varied approaches to probabilistic modeling in medical statistics. We shall then illustrate each one in turn using data about the survival of a sample of patients with lymphoma, showing how alternative “philosophical” perspectives lead directly to different methods of analysis. Through out, we shall give an indication of the mathematical background to what can appear to be a conceptually untidy subject.

$2$

A Historical Perspective

One of the first uses of probability theory in the late seventeenth century was in the development of

922                                                                             VII. The Influence of Mathematics

“life-tables” of mortality in order to decide premiums      (iii) A semi-parametric approach in which only part of
for annuities, and Charles Babbage’s work on life-tables          the model is parametrized, while the rest is left
in 1824 helped motivate him to design his “difference              unspecified.
engine” (although it was not until 1859 that Scheutz’s      (iv) A Bayesian approach in which not only is a full
implementation of the engine finally calculated a life-            parametric model specified, but an additional
table). However, statistical analysis of medical data was         “prior” distribution is provided for the parame-
a matter of arithmetic rather than mathematics until              ters.
the growth of the “biometric” school founded by Fran-
cis Galton and Karl Pearson at the end of the nineteenth    These are not absolute distinctions: for example, some
century. This group introduced the use of families of       apparently “model-free” procedures may turn out to
probability distributions [III.71](/part-03/probability-distributions) to describe popula-      match procedures that are derived under certain para-
tions, as well as concepts of correlation and regression    metric assumptions.
in anthropology, biology, and eugenics. Meanwhile,            Another complicating factor is the multiplicity of
agriculture and genetics motivated Fisher’s huge con-       possible aims of a statistical analysis. These may
tributions in the theory of likelihood (see below) and      include
significance testing. Postwar statistical developments
                                                              • estimating unknown parameters, such as the mean
were influenced by industrial applications and a U.S.-
                                                                reduction in blood pressure when giving a certain
led increase in mathematical rigor, but from around the
                                                                dose of a certain drug to a defined population;
1970 s medical research, particularly concerning ran-
                                                              • predicting future quantities, such as the number of
domized trials and survival analysis, has been a major
                                                                people with AIDS in a country in ten years’ time;
methodological driver in statistics.
                                                              • testing a hypothesis, such as whether a particu-
   For around thirty years after 1945 there were many
                                                                lar drug improves survival for a particular class
attempts to put statistical inference on a sound foun-
                                                                of patents, or equivalently assessing the “null
dational or axiomatic basis, but no consensus could be
                                                                hypothesis” that it has no effect;
reached. This has given rise to a widespread ecu men i-
                                                              • making decisions, such as whether to provide a
cal perspective which makes use of a mix of statisti-
                                                                particular treatment in a health care system.
cal “philosophies” which we shall illustrate below. The
some what uncomfortable lack of an axiomatic basis
                                                            A common aspect of these objectives is that any conclu-
can make statistical work deeply unattractive to many
                                                            sion should be accompanied by some form of assess-
mathematicians, but it provides a great stimulus to
                                                            ment of the potential for an error having been made,
those engaged in the area.
                                                            and any estimate or prediction should have an asso-
                                                            ciated expression of uncertainty. It is this concern for
                      3   Models                            “second-order” properties that distinguishes a statis-
In this context, by a model we mean a mathemat i-            tical “inference” based on probability theory from a
cal description of a probability distribution for one       purely algorithmic approach to producing conclusions
or more currently uncertain quantities. Such a quan-        from data.
tity might, for example, be the out come of a patient
who is treated with a particular drug, or the future                     4 The Nonparametric or
survival time of a patient with cancer. We can iden-                      “Model-Free” Approach
tify four broad approaches to modeling—these brief
                                                            Now let us introduce a running example that will be
descriptions make use of terms that will be covered
                                                            used to illustrate the various approaches.
properly in later sections.
                                                              Matthews and Farewell (1985) report data on sixty-
  (i) A nonparametric or “model-free” approach that         four patients from Seattle’s Fred Hutchinson Cancer Re-
      leaves unspecified the precise form for the proba-     search Center who had been diagnosed with advanced-
      bility distributions of interest.                     stage non-Hodgkin’s lymphoma: for each patient the
 (ii) A full parametric model in which a specific form is    information comprises their follow-up time since diag-
      assumed for each probability distribution, which      nosis, whether their follow-up ended in death, whether
      depends on a limited number of unknown param-         they presented with clinical symptoms, their stage of
      eters.                                                disease (stage IV or not), and whether a large abdominal

Mathematics and Medical Statistics

VII . $11$ .

mass (greater than $10$ cm) was present. Such information has many uses. For example, we may wish to look at the general distribution of survival times, or assess which factors most influence survival, or provide a new patient with an estimate of their chance of surviving, say, five years. This is, of course, too small and limited a data set to draw firm conclusions, but it allows us to illustrate the different mathematical tools that can be used. We need to introduce a few technical terms.
Patients who are still alive at the end of data collection, or have been lost to follow-up, are said to have their survival times “censored”: all we know is that they survived beyond the last time that any data was recorded about them. We also tend to call times of death “failure” times, since the forms of analysis do not just apply to death. (This term also reflects the close connection between this area and reliability theory .) The original approach to such survival data was “actuarial,” using the life-table techniques mentioned previously.
Survival times are grouped into intervals such as years, and simple estimates are made of one’s chance of dying in an interval given that one was alive at the start of it. Historically, this probability was known as the “force of mortality,” but now it is usually called the hazard. A simple approach like this may be fine for describing large populations. It was not until Kaplan and Meier ( 1958 ) that this procedure was refined to take into account the exact rather than the grouped survival times:
with over thirty thousand citations, their paper is one of the most referenced papers in all of science. Figure $1$ shows so-called Kaplan-Meier curves for the groups of patients with $(n = 31)$ and with out $(n = 33)$ clinical symptoms at diagnosis. These curves represent estimates of the underlying survival function, whose value at a time t is thought of as the probability that a typical patient will survive until that time. The obvious way of producing such a curve is simply to let its value at time t be the proportion of the initial sample that is still alive.
However, this does not quite work, because of the censored patients. So instead, if a patient dies at time t, and if, just before time t, there are m patients still in the sample, then the value of the curve is multiplied by $(m - 1)/m$ ; and if a patient is censored then the value stays the same. (The tick marks on the curves show the censored survival times .) The set of patients alive just before time t is called the risk set and the hazard at t is estimated to be $1/$ m . (We are assuming that two people do not die

9231 . $00$ . $8$

With out symptoms

Proportion surviving

$0$ . $6$

With symptoms

$0$ . $40$ . 2012356704

Years since diagnosis

Figure $1$ Kaplan-Meier nonparametric survival curves for lymphoma patients with and with out clinical symptoms at diagnosis. at the same time, but it is easy to drop that assumption and make appropriate adjustments .) Although we do not assume that the actual survival curve has any particular functional form, we do need to make the qualitative assumption that the censoring mechanism is independent of the survival time.
(For example, it is important that those who are about to die are not for some reason preferentially removed from the study .) We also need to provide error bounds on the curves: these can be based on a variance formula developed by Major Greenwood in 1926 . (“ Major ” was his name rather than a title, one of the few characteristics he shared with Count Basie and Duke Ellington .) The “true underlying survival curve” is a theoretical construct, and not something that one can directly observe.
One can think of it as the survival experience that would be observed in a vast population of patients, or equivalently the expected survival for a new individual drawn at random from that population. As well as estimating these curves for the two groups of patients, we may wish to test hypotheses about them. A typical one would be that the true underlying survival curves in the two groups are precisely the same.
Traditionally such “null” hypotheses are denoted $H^{0}$ , and the traditional way to test them is to determine how unlikely it is that we would observe two Kaplan-Meier curves that are so far apart if $H^{0}$ were true. One can construct a summary measure, known as a test statistic, that is large if the observed curves are very different. For example, one possibility is to contrast the observed number of deaths in those with symptoms $(O = 20)$ with the number one would have expected if $H^{0}$ were true $(E = 11$ . 9).

$924$

Under the null hypothesis it turns out there is only $a 0$ . $2$ % chance of observing such a high discrepancy between O and E, which casts considerable doubt on the null hypothesis in this case. When constructing intervals around estimates and testing hypotheses we require approximate probability distributions for our estimates and test statistics. From a mathematical perspective the important theory therefore concerns large-sample distributions of functions of random variables, largely developed in the early twentieth century.
Theories for optimal hypothesis testing were developed by Neyman and Pearson in the $1930s$ : the idea is to maximize the “power” of a test to detect a difference, while at the same time making sure that the probability of wrongly rejecting a null hypothesis is less than some acceptable threshold such as $5$ % or $1$ % . This approach still finds a role in the design of randomized clinical trials.

$5$

Full Parametric Models

Clearly we do not actually believe that deaths can only occur at the previously observed survival times shown in the Kaplan-Meier curve, so it seems reasonable to investigate a fairly simple functional form for the true survival function. That is, we assume that the survival function belongs to some natural class of functions, each of which can be fully parametrized by a small number of parameters, collectively denoted by $\theta.$ It is $\theta$ that we are trying to discover (or rather estimate with a reasonable degree of confidence).
If we can do so, then the model is fully specified and we can even extrapolate a certain amount beyond the observed data. We first relate the survival function and the hazard, and then illustrate how observed data can be used to estimate $\theta$ in a simple example. We assume that an unknown survival time has a probability density $p(t|\theta)$ ; with out getting into technical details, this essentially corresponds to assuming that p (t $|\theta$ ) dt is the probability of dying in a small interval t to t  +  dt.
Then the survival function, given a particular value of $\theta,$ is the probability of surviving beyond t: we denote it by S (t $|\theta$ ). To calculate it, we integrate the probability density over all times greater than t. That is,

$\infty$

t

 p(x|. heta)dx = 1 -S(t|. heta) =p(x|. heta)dx.t_{0}

From this and the fundamental theorem of calculus [I.3](/part-01/fundamental-definitions) it follows that $p(t|\theta) = - dS(t|\theta)/dt$ . The hazard function h (t $|\theta$ ) dt is the risk of death in the VII. The Influence of Mathematics small interval t to t + dt , conditional on having survived to time t. Using the laws of elementary probability we find that $h(t|\theta) = p(t|\theta)/S(t|\theta)$ . For example, suppose we assume an exponential survival function with mean survival time $\theta,$ so that the probability of surviving beyond time $t$ is $S(t|\theta) = e - t/\theta$ .
The density is $p(t|\theta) = e - t/\theta/\theta$ . Therefore, the hazard function is a constant $h(t|\theta) = 1/\theta$ , so that $1/\theta$ represents the mortality rate per unit of time. For instance, were the mean postdiagnosis survival to be $\theta = 1000$ days, an exponential model would imply $a$ constant $1/1000$ risk of dying each day, regard less of how long the patient had already survived after diagnosis. More complex parametric survival functions allow hazard functions that increase, decrease, or have other shapes.
When it comes to estimating $\theta$ we need Fisher’s concept of likelihood. This takes the probability distribution $p(t|\theta)$ but considers it as a function of $\theta$ rather than t, and hence for observed t allows us to examine plausible values of $\theta$ that “support” the data. The rough idea is that we multiply together the probabilities (or probability densities) of the observed events, assuming the value of $\theta.$ In survival analysis, observed and censored failure times make different contributions to this product:
an observed time t contributes p (t $|\theta$ ), while a censored time contributes S (t $|\theta$ ). If, for example, we assume that the survival function is exponential, then an observed failure time contributes $p(t|\theta) = e - t/\theta/\theta$ , and a censored time contributes $S(t|\theta) = e - t/\theta$ . Thus, in this case the likelihood is . heta - 1 e - ti/. hetae - ti/. heta = . heta - n Oe - T/. heta . $L(\theta) =i\in$ Obs $i\in$ Cens Here “Obs” and “Cens” indicate the sets of observed and censored failure times.
We denote their sizes by n O and n C , respectively, and we denote the total follow-up time i t i by T . For the group of thirty-one patients presenting with symptoms we have $n^{O} = 20$ and $T = 68$ . $3$ years: figure $2$ shows both the likelihood and its logarithm $LL(\theta) = - T/\theta - n^{O}$ log $\theta.$ We note that the vertical axis for the likelihood is unlabeled since only relative likelihood is important. A maximum-likelihood estimate (MLE) $\thetâ$ finds parameter values that maximize this likelihood or equivalently the log-likelihood.
Taking derivatives of LL ( $\theta$ ) and equating to $0$ reveals that $\thetâ = T/n$ Obs $= 3$ . $4$ years, which is the total follow-up time divided by the number

Mathematics and Medical Statistics

VII . $11$ .

$(b) 0$

(a)

$- 1$

Log-likelihood

Likelihood

$- 2 - 323 4 5 623 4 5 6$

Mean survival

Mean survival

Figure $2$ Likelihood and log-likelihood for mean survival time $\theta$ for lymphoma patients presenting with clinical symptoms. of failures. Intervals around MLEs may be derived by directly examining the likelihood function, or by making a quadratic approximation around the maximum of the log-likelihood. Figure $3$ shows the fitted exponential survival curves: loosely, we have carried out a form of curve fitting by selecting the exponential curves that maximize the probability of the observed data.
Visual inspection suggests the fit may be improved by investigating a more flexible family of curves such as the Weibull distribution (a distribution widely used in reliability theory) : to compare how well two models fit the data, one can compare their maximized likelihoods. Fisher’s concept of likelihood has been the foundation for most current work in medical statistics, and indeed statistics in general.
From a mathematical perspective there has been extensive development relating the large-sample distributions of MLEs to the second derivative of the log-likelihood around its maximum, which forms the basis for most of the outputs of statistical packages. Unfortunately, it is not necessarily straightforward to scale up the theory to deal with multi dimensional parameters. First, as likelihoods become more complex and contain increasing numbers of parameters, the technical problems of maximization increase.
Second, the recurring difficulty with likelihood theory remains that of “nuisance parameters,” in which a part of the model is of no particular interest and yet needs to be accounted for. No generic theory has been developed, and instead there is a some-

9251 . $00$ . $8$

With out symptoms

Proportion surviving

$0$ . $6$

With symptoms

$0$ . $40$ . 2001234567

Years since diagnosis

Figure $3$ Fitted exponential survival

curves for lymphoma patients.

what bewildering variety of adaptations of standard likelihood to specific circumstances, such as conditional likelihood, quasi-likelihood, pseudo-likelihood, extended likelihood, hierarchical likelihood, marginal likelihood, profile likelihood, and so on. Below we consider one extremely popular development, that of partial likelihood and the Cox model.

$6$

A Semi-Parametric Approach

Clinical trials in cancer therapy were a major motivating force in developing survival analysis--in particular, trials to assess the influence of a treatment on survival while taking account of other possible risk factors. In our simple lymphoma data set we have three risk factors, but in more realistic examples there will be many more. Fortunately, Cox ( 1972 ) showed that it was possible both to test hypotheses and to estimate the influence of possible risk factors, with out having to go the whole way and specify the full survival function on the basis of possibly limited data.
The Cox regression model is based on assuming a hazard function of the form $h(t|\theta) = h^{0}(t)e$ β·x . Here $h^{0}$ (t) is a baseline hazard function and β is typically a column vector of regression coefficients that measure the influence of a vector of risk factors x on the hazard. (The expression β · x denotes the scalar product of β and x .) The baseline hazard function corresponds to the hazard function of an individual whose risk factor vector is $x = 0$ , since then $e$ β·x $= 1$ . More generally, we see that an increase of one unit in a factor

$926$

x j will multiply the hazard by a factor e β j , for which reason this is known as the “proportional hazards” regression model. It is possible to specify a parametric form for $h^{0}$ (t), but remarkably it turns out to be possible to estimate the terms of β with out specifying the form of the $h^{0}$ , if we are willing to consider the situation immediately before a particular failure time. Again we construct a risk set, and the chance of a particular patient failing, given the knowledge that some one in the risk set fails, provides a term in a likelihood.
This is known as a “partial” likelihood since it ignores any possible information in the times between failures. When we fit this model to the lymphoma data we find that our estimate of β for the patients with symptoms is $1$ . $2$ : easier to interpret is its exponent $e^{1}$ . ${}^{2} = 3$ . $3$ , which is the proportional increase in hazard associated with presenting with symptoms. We can estimate error bounds of $1$ . $5 - 7$ .
$3$ around this estimate, so we can be confident that the risk of a patient who presents with symptoms will die at any stage following diagnosis is substantially higher than that of a patient who does not present with symptoms, all other factors in the model being kept constant. A huge literature has arisen from this model, dealing with errors around estimates, different censoring patterns, tied failure times, estimating the baseline survival, and so on.
Large-sample properties were rigorously established only after the method came into routine use, and have made extensive use of the theory of stochastic counting processes: see, for example, Andersen et al. ( 1992 ). These powerful mathematical tools have enabled the theory to be expanded to deal with the general analysis of sequences of events, while allowing for censoring and multiple risk factors that may depend on time.
Cox’$s_{1972}$ paper has over twenty thousand citations, and its importance to medicine is reflected in his having been awarded the 1990 Kettering Prize and Gold Medal for Cancer Research.

$7$

Bayesian Analysis

Bayes’s theorem is a basic result in probability theory. It states that, for two random quantities t and $\theta,p(\theta|t) = p(t|\theta)p(\theta)/p(t)$ . In itself this is a very simple fact, but when $\theta$ represents parameters in a model, the use of this theorem represents a different philosophy of statistical modeling. The major step in using Bayes’s theorem for inference is in considering parameters as random variables

VII. The Influence of Mathematics

[III.71](/part-03/probability-distributions) with probability distributions and therefore making probabilistic statements about them. For example, in the Bayesian framework one could express one’s uncertainty about a survival curve by saying that one had assessed that the probability that the mean survival time was greater than three years was $0$ . $90$ .
To make such an assessment, one can combine a “prior” distribution p ( $\theta$ ) (a distribution representing the relative plausibility of different values of $\theta$ before you look at the data) with a likelihood p (t $|\theta$ ) (how likely you were to observe the data t with that value of $\theta$ ) and then use Bayes’s theorem to provide a “posterior” distribution $p(\theta|t) ($ a distribution representing the relative plausibility of different values of $\theta$ after you look at the data).
Put in this way Bayesian analysis appears to be a simple application of probability theory, and for any given choice of prior distribution that is exactly what it is. But how do you choose the prior distribution? You could use evidence external to the current study, or even your own personal judgment. There is also an extensive literature on attempts to produce a toolkit of “objective” priors to use in different situations. In practice you need to specify the prior distribution in a way that is convincing to others, and this is where the subtlety arises.
As a simple example, suppose that previous studies of lymphoma had suggested that mean survival times of patients presenting with clinical symptoms probably lie between three and six years, with values of around four years being most plausible. Then it seems reasonable not to ignore such evidence when drawing conclusions for future patients, but rather to combine it with the evidence from the thirty-one patients in the current study. We could represent this external evidence by a prior distribution for $\theta$ with the form given in figure $4$ .
When combined with the likelihood (taken from figure $2$ (a)), this gives rise to the posterior distribution shown. For this calculation, the functional form of the prior is assumed to be that of the inverse-Gamma distribution, which happens to make the mathematics of dealing with exponential likelihoods particularly straightforward, but such simplifications are not necessary if one is using simulation methods for deriving posterior distributions. It can be seen from figure $4$ that the external evidence has increased the plausibility of higher survival times.
By integrating the posterior distribution above three years, we find that the posterior probability that the mean survival is greater than three years is $0$ . $90$ .

VII . $11$ .

Mathematics and Medical Statistics

Likelihood

Prior

Posterior

23645

Mean survival

Figure $4$ Prior, likelihood, and posterior distributions for mean survival time $\theta$ for patients presenting with symptoms. The posterior distribution is a formal compromise between the likelihood, which summarizes the evidence in the data alone, and the prior distribution, which summarizes external evidence that suggested longer survival times.
Likelihoods in Bayesian models need to be fully parametric, although semi-parametric models such as the Cox model can be approximated by high-dimensional functions of nuisance parameters, which then need to be integrated out of the posterior distributions. Difficulties with evaluating such integrals held up realistic applications of Bayesian analysis for many years, but now developments in simulation approaches such as Markov chain Monte Carlo (MCMC) methods have led to a startling growth in practical Bayesian analyses.
Mathematical work in Bayesian analysis has mainly focused on theories of objective priors, large-sample properties of posterior distributions, and dealing with hugely multivariate problems and the necessary high-dimensional integrals.

$8$

Discussion

The preceding sections have given some idea of the tangled conceptual issues that under lie even routine medical statistical analysis. We need to distinguish a number of different roles for mathematics in medical statistics--the following are a few examples. Individual applications: here the use of mathematics is generally quite limited, since extensive use is made of software packages, which can fit a wide variety of models. In nonstandard problems, algebraic or numerical maximization of likelihoods may be necessary, or developing MCMC algorithms for numerical integration.

$927$

Derivation of generic methods: these can then be implemented in software. This is perhaps the most widespread mathematical work, which requires extensive use of probability theory on functions of random variables, particularly using large-sample arguments. Proof of properties of methods: this requires the most sophisticated mathematics, which concerns topics such as the convergence of estimators, or the behavior of Bayesian methods under different circumstances.
Medical applications continue to be a driving force in the development of new methods of statistical analysis, partly because of new sources of high-dimensional data from areas such as bioinformatics, imaging, and performance monitoring, but also because of the increasing willingness of health policy makers to use complex models: this has the consequence of focusing attention on analytic methods and the design of studies for checking, challenging, and refining such models.
Nevertheless, it may appear that rather limited mathematical tools are required in medical statistics, even for those engaged in methodological research. This is compensated for by the fascinating and continuing debate over the underlying philosophy of even the most common statistical tools, and the consequent variety of approaches to apparently simple problems. Much of this debate is hidden from the routine user.
Regarding the appropriate role of mathematical theory in statistics, we can do no better than quote David Cox in his 1981 Presidential Address to the Royal Statistical Society (Cox 1981) : Lord Rayleigh defined applied mathematics as being concerned with quantitative investigation of the real world “neither seeking nor evading mathematical difficulties.” This describes rather precisely the delicate relation that ideally should hold between mathematics and statistics. Much fine work in statistics involves minimal mathematics;
some bad work in statistics gets by because of its apparent mathematical content. Yet it would be harmful for the development of the subject for there to be widespread an anti-mathematical attitude, a fear of powerful mathematics appropriately deployed.

Further Reading

Andersen, P. K., O. Borgan, R. Gill, and N. Keiding. 1992 . Statistical Models Based on Counting Processes. New York: Springer.