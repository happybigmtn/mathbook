# The Riemann–Roch Theorem

$V$ . $31$ .

The Riemann-Roch Theorem

$x^{2} + y^{2} = z^{2}$. An obvious map would be the function f (x , y, z)  =  (zx , zy, z), which we could try to invert using the map g (x , y, z)  =  (x  /  z , y  /  z , z) . However, g is not defined at the point (0, 0, 0). Nevertheless, the cylinder and the cone are birationally equivalent, and algebraic geometers would say that g “blows up” the point (0, 0, 0) to the circle { (x ,  y, z) : $x^{2} + y^{2} = 1$ , $z = 0$ .
The main property of a variety V that is preserved by birational equivalence is the so-called function field of V , which consists of all rational functions defined on V . (What precisely this means is not completely obvious: in some contexts, V is a subset of a larger space such as C n in which one can talk about ratios of polynomials, and then one possible definition of a rational function on V is that it is an equivalence class of such ratios, where two of them are counted as equivalent if they take the same values on V .
See arithmetic geometry [IV.5](/part-04/arithmetic-geometry) and quantum groups [III.75](/part-03/quantum-groups) for further discussion of this equivalence relation .) A famous theorem of Hironaka, proved in 1964 , states that every algebraic variety (over a field of characteristic $0$ ) is birationally equivalent to an algebraic variety with out singularities, with some technical conditions on the birational equivalence that are needed for the theorem to be interesting and useful. The example given earlier is a simple illustration:
the cone has a singularity at (0, 0, 0) but the cylinder is smooth every where. Hironaka’s proof was well over two hundred pages long, but his argument has since been substantially simplified by several authors. For a further discussion of the resolution of singularities, see algebraic geometry [IV.4](/part-04/algebra). The Riemann Hypothesis See the prime number theorem and the riemann hypothesis [V.26](/part-05/the-prime-number-theorem-and-the-vi34-jnos-bolyai-18021860) $V$ .
$31$ The Riemann-Roch Theorem A riemann surface [III.79](/part-03/riemann-surfaces) is a manifold [I.3](/part-01/fundamental-definitions) that “looks locally like C ,” in the usual sense of this sort of phrase. In other words, every point has a neighborhood that can be mapped bijectively to an open subset of C , and where two such neighborhoods overlap, the “transition functions” are holomorphic [I.3](/part-01/fundamental-definitions).
One can think of a Riemann surface as the most general sort of set on which the notion of a holomorphic function (that is, a complex-differentiable function) of one complex variable makes sense.

$723$

The definition of different i ability is a local one: a function is differentiable if and only if a certain condition holds at each point z, and the condition at z depends only on the behavior of f at points very close to z. However, one of the surprises of complex analysis is that holomorphic functions are much more global than their basic definition would lead one to expect. Indeed, if you know the values of a holomorphic function f : C $\to$ C at every point in a small neighborhood of a single point z, then you can deduce its values at every point in C .
And the same is true if you replace C by any other (connected) Riemann surface. Here is a second illustration of the global nature of holomorphic functions. One of the most basic Riemann surfaces is the so-called Riemann sphere Ĉ, which is obtained from C by adding a “point at infinity.” A function f : Ĉ $\to$ C is said to be holomorphic if the following conditions hold:

• f is differentiable at every point of C ;

• f (z) tends to a limit w as z $\to \infty$ in any direction;

• w is the value of f at $\infty.$

What, then, are the holomorphic functions from Ĉ to C ? A holomorphic function f is continuous, from which it follows that if f (z) tends to a limit as z $\to \infty,$ then f is bounded on C . But a well-known theorem of liouville [VI.39](/part-06/joseph-liouville-18091882) states that a bounded holomorphic function defined on all of C must be constant. So the only holomorphic functions from Ĉ to C are constant! One might take the attitude that it was slightly artificial to consider maps from Ĉ to C . Why not look at maps from Ĉ to Ĉ?
Such maps are equivalent to functions from C to C that are allowed to tend to infinity at a finite set of points $z^{1}$ , . . . , z k , called poles, and must tend to a limit as z $\to \infty.$ (This limit is allowed to be the point $\infty.$ We say that $f(z) \to \infty$ as $z \to \infty$ if we can make |f(z)| arbitrarily large by making |z| large enough. Note that some familiar functions such as e z are ruled out since it is possible for |$z$| to be large and e z to be small .) Functions with this property are called meromorphic.
A typical example is z, or $z^{2}$ , or $(1 + z)/(1 - z)$ , or indeed any rational function in z; it can in fact be shown that any meromorphic function from Ĉ to Ĉ is rational. The notion of a meromorphic function also makes sense on other Riemann surfaces. One can think of it as a function that is holomorphic except at a set of isolated points where it tends to infinity. (If the function is defined on C , there may be infinitely many such points,

724                                                                                          V. Theorems and Problems

but a compact [III.9](/part-03/compactness-and-compactication) surface such as Ĉ cannot contain           As we might by now expect, this dimension turns out
infinitely many points that are all isolated from each          to be finite. riemann [VI.49] proved that if the poles are
other, so a meromorphic function on a compact surface          required to be simple (that is, di = 1 for i = 1, 2, . . . r ),
has at most finitely many poles.)                               then the dimension l is at least r − g + 1, where g is
   A particularly important example is when the Rie-           the genus [III.33](/part-03/genus) of the surface, which means, roughly
mann surface in question is a torus. We can regard             speaking, the number of holes it has. This result is
such a surface as the quotient [I.3 §3.3](/part-01/fundamental-definitions) of C by the lat-     called Riemann’s inequality. Roch’s contribution was
tice generated by two complex numbers u and v such             to interpret the difference between l and r − g + 1 as
that u/v is not real. There is then a one-to-one corre-        the dimension of another space of functions. This often
spondence between functions defined on the torus and            makes it possible to calculate the dimension l exactly.
functions f defined on C that are doubly periodic, in           For instance, under certain circumstances one can show
the sense that f (z + u) and f (z + v) are both equal to       that the dimension of the space of functions identified
f (z) for every z. Liouville’s theorem again implies that      by Roch is 0, in which case l = r − g + 1. In particular,
if such a function is holomorphic then it is constant;         this is the case when r ⩾ 2 g − 1.
however, there are interesting examples of doubly peri-           The original question we asked was more general in
odic meromorphic functions. Such functions are called          that we did not require the poles to be simple: rather,
elliptic functions.                                            we wanted the order of the pole at zi to be at most di .
   Even here, the global nature, or “rigidity,” of holo-       However, the result generalizes straightforward ly, and
morphic functions asserts itself, by greatly restricting       l is now at least d1 +· · ·+dr −g +1, with the difference
the supply of elliptic functions. Indeed, one can define        again equal to the dimension of a certain space of func-
a single function, called the Weierstrass P -function ℘,       tions that one can define. One can even ask for some
with the property that any other elliptic function with        of the di to be negative, interpreting a “pole of order at
respect to a given pair of generators u and v can be           most di ” to mean a zero of multiplicity at least −di .
expressed as a rational function of ℘ and its derivative.         The Riemann–Roch theorem is a basic tool for com-
Weierstrass’s function (for the generators u and v) is         puting the dimensions of spaces of holomorphic or
given by the formula                                           meromorphic functions on compact surfaces (which
          1                     1              1              is often equivalent to requiring them to obey certain
℘(z) = 2 +                              −                .     symmetry conditions). Let us begin with a very sim-
         z              (z −mu− nv)2 (mu+nv)2
            (n, m)=(0,0)
                                                               ple example. It is not hard to show that every mero-
Notice that the double periodicity is built into the defi-      morphic function defined on the Riemann sphere with
nition, and that ℘ has a pole at every point in the lattice    at most simple poles at 0 and 1 has to take the form
generated by u and v. If we think of ℘ as a function on        a + b/z + c/(z − 1). This is a three-dimensional space,
the torus, then it has just one pole. Near this pole, f        and that is what the Riemann–Roch theorem predicts. A
tends to infinity at the same rate as the function 1/z 2        more sophisticated example concerns the Weierstrass
does when z tends to 0; we say that the pole has order 2.      P -function. We saw earlier that this is a doubly peri-
More generally, if a function f tends to infinity at the        odic meromorphic function defined on C with a pole of
same rate as 1/z k , then the resulting pole has order k.      order 2 at each point in the lattice generated by u and
  Suppose we take a compact Riemann surface S and              v. The existence (and essential uniqueness) of such a
choose from it a finite set of points z1 , . . . , zr . Given   function can be proved more abstractly with the help
a sequence d1 , . . . , dr of positive integers, can we find    of the Riemann–Roch theorem: it shows that the space
a meromorphic function f defined on S such that its             of such functions has dimension 2, so they can all be
poles are z1 , . . . , zr and such that for each i the order   built out of a single function ℘ and the constant func-
of the pole at zi is at most di ? The results mentioned so     tions. Similarly, the theorem can be used to compute
far would lead us to expect that this might be possible,       dimensions of spaces of modular forms [III.59](/part-03/modular-forms).
but that there would probably not be a huge supply                The Riemann–Roch theorem has been reformulated
of such functions. Since a linear combination of such          and generalized many times, which has made it even
functions gives us another one, the set of functions we        more useful as a computational tool, and a central
are interested in forms a vector space [I.3 §2.3](/part-01/fundamental-definitions), so we       result in algebraic geometry: for example, Hirzebruch
could hope to quantify “how many” functions there are          found a higher-dimensional generalization, which was
by investigating the dimension of this space.                  generalized further by Grothendieck to a statement