# Carleson’s Theorem

$686$

of order $0$ or $1$ at $1$ , but a proof of the general case still appears to be a long way off. It is one of the problems for which the Clay Mathematics Institute offers a prize of a million dollars. For a further discussion of the problem and much more about its mathematical context, see arithmetic geometry [IV.5](/part-04/arithmetic-geometry). $V$ . $5$ Carleson’s Theorem

Charles Fefferman

Carleson’s theorem asserts that the fourier series [III.27](/part-03/the-fourier-transform) of a function $f$ in $L^{2}$ [0 , 2 π ] converges almost every where. To understand this statement and appreciate its significance, let us follow the history of the subject, starting in the early nineteenth century.
fourier’s [VI.25](/part-06/jean-baptiste-joseph-fourier-17681830) great idea was that “any” (complexvalued) function f on an interval such as [0 , 2 π ] can be expanded in what we would now call a Fourier series, $\infty$ a $nein\theta$ , $f(\theta) =(1)n = - \infty$ for suitable Fourier coefficients a n . Fourier obtained the formula for the coefficients a n , and proved that ( $1$ ) holds in interesting special cases. The next major advance, due to dirichlet [VI.36] , was a formula for the Nth partial sum S N f ( $\theta$ ), which is defined to be N a $nein\theta$ .
$S^{N}f(\theta) =(2)n = - N$ Dirichlet realized that the precise meaning of ( $1$ ) is that lim $S^{N}f(\theta) = f(\theta)$ . $(3)N \to \infty$ Dirichlet used his formula for S N f to prove that under certain circumstances ( $3$ ) does indeed hold. For example, if $f$ is a continuous increasing function on [0 , 2 π ], then it holds for every $\theta \in(0$ , $2\pi)$ . Decades later, de la vallée poussin [VI.67](/part-06/charles-jean-de-la-valle-poussin-18661962) discovered an example of a continuous function whose Fourier series diverges at a single point.
More generally, given any countable set E ⊂ [0 , 2 π ], there exists a continuous function f whose Fourier series diverges at every point of E, a result that appears to restrict quite considerably the circumstances under which Fourier’s original vision is valid. The work of lebesgue [VI.72](/part-06/henri-lebesgue-18751941) led to fundamental progress in Fourier analysis and a significant change of viewpoint. We first sketch Lebesgue’s ideas and then trace their impact on Fourier analysis.
Lebesgue sought to define a notion of integration that could be applied to all but the most pathological V. Theorems and Problems nonnegative functions F on [0 , 2 π ]. He began by defining the measure [III.55](/part-03/measures) of a set $E$ ⊂ [0 , 2 π ]. Loosely speaking, the measure of E, written μ (E), is “what the set E would weigh” if the interval [0 , 2 π ] were made of wire weighing one gram per centimeter. For instance, the measure of an interval (a , b) is equal to its length b - a.
Certain sets E have measure zero, e.g., countable sets, or the cantor set [III.17](/part-03/dimension); sets of measure zero are regarded as negligibly small. Using his notion of measure, Lebesgue defined the $2\pi$ Lebesgue integral ${}^{0} F(\theta)d\theta$ for the “measurable” functions $F \ge 0$ on [0 , 2 π ]. All but the most patho$2\pi$ logical functions are measurable, but ${}^{0} F(\theta)d\theta$ may be infinite if F is too big. For example, if $F(\theta) = 1/\theta$ for $\theta \in(0$ , $2\pi],$ then the integral of F is infinite.
Finally, given any real number $p \ge 1$ , the Lebesgue space $L^{p}$ [0 , 2 π ] consists of all measurable functions f on [0 , 2 π ] that are not too big, in the sense that

$2\pi$

p

${}^{0} |f(\theta)| d\theta$ is finite. (See function spaces [III.29](/part-03/function-spaces) for a slight, technical correction to this definition .) We now turn to the impact of Lebesgue’s theory on Fourier analysis. The Lebesgue space $L^{2}$ [0 , 2 π ], which is also a hilbert space [III.37](/part-03/bayesian-analysis), plays a fundamental role. If f belongs to $L^{2}$ [0 , 2 π ], then its Fourier coefficients a n are such that . nfty|an|2 < . nfty.(4)n = - .
nfty Conversely, any sequence of complex numbers a n $( - \infty < n < \infty)$ satisfying (4) arises as the sequence of Fourier coefficients of a function $f$ in $L^{2}$ [0 , 2 π ]. More over, the size of a function f and its Fourier coefficients a n are related by the Plancherel formula:

$\infty 2\pi 1|f(\theta)|^{2}d\theta =|a^{n}|^{2}$ .

$2\pi 0n = - \infty$

Finally, the partial sums S N f (see ( $2$ )) converge to the function f in the $L^{2}$ - norm . In other words,

2\pi|SNf(. heta) - f(. heta)|2 d. heta - \to 0(5)0

as N tends to infinity. This gives us a precise sense in which the function f is the sum of its Fourier series. Thus, we have justified Fourier’s formula ( $1$ ) by reinterpreting it as the statement ( $5$ ) rather than using the more obvious interpretation of ( $3$ ). However, it would still be nice to know to what extent the original, more straightforward interpretation can be justified. In 1906 , Luzin conjectured that if f is any function in $L^{2}$ [0 , π ], then lim $S^{N}f(\theta) = f(\theta)(6)N \to \infty$