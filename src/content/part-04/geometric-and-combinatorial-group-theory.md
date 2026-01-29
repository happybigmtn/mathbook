# Geometric and Combinatorial Group Theory

IV.10.   Geometric and Combinatorial Group Theory                                                                            431

in LG(C).15 However, these are not conjugacy classes                    program, the 1979 American Mathematical Society vol-
of elements of LG(C), as before, but of homomorphisms                   ume titled Automorphic Forms, Representations, and
from the Galois group of k to LG. The Langlands dual                    L-functions (but universally known as “The Corvallis
was originally defined in a combinatorial manner, but                    Proceedings”) is more advanced, and as good a place
there is now a conceptual definition. A few examples                     to start as any.
of pairs (G, LG) are (GLn , GLn ), (SO2 n+1 , Sp2 n ), and
(SLn , PGLn ).                                                          IV.10 Geometric and Combinatorial
   In this way the Langlands program describes the rep-
                                                                              Group Theory
resentation theory as built out of the structure of G and
the arithmetic of k.
                                                                                 Martin R. Bridson
   Although this description indicates the flavor of
                                                                                 1   What Are Combinatorial and
the conjectures, it is not quite correct as stated. For
                                                                                     Geometric Group Theory?
instance, one has to modify the Galois group16 in such
a way that the correspondence is true for the group                     Groups and geometry are ubiquitous in mathematics,
GL1 (k) = k∗ . When k = R, we get the representation
                                                                        groups because the symmetries (or automorphisms
theory of R∗ (or its compact form S 1 ), which is Fourier
                                                                        [I.3 §4.1](/part-01/fundamental-definitions)) of any mathematical object in any context
analysis; on the other hand, when k is a p-adic local
                                                                        form a group and geometry because it allows one to
field, the representation theory of k∗ is described by
                                                                        think intuitively about abstract problems and to orga-
local class field theory. We already see an extraordinary
                                                                        nize families of objects into spaces from which one may
aspect of the Langlands program: it precisely unifies
                                                                        gain some global insight.
and generalizes harmonic analysis and number theory.
                                                                           The purpose of this article is to introduce the reader
   The most compelling versions of the Langlands pro-
                                                                        to the study of infinite, discrete groups. I shall discuss
gram are “equivalences of derived categories” between
                                                                        both the combinatorial approach to the subject that
the category of representations and certain geomet-
                                                                        held sway for much of the twentieth century and the
ric objects on the spaces of Langlands parameters.
                                                                        more geometric perspective that has led to an enor-
These conjectural statements are the hoped-for Fourier
                                                                        mous flowering of the subject in the last twenty years. I
transforms.
                                                                        hope to convince the reader that the study of groups is
   Though much progress has been made, a large part of
                                                                        a concern for all of mathematics rather than something
the Langlands program remains to be proved. For finite
                                                                        that belongs particularly to the domain of algebra.
reductive groups, slightly weaker statements have been
proved, mostly by Lusztig. As all but twenty-six of the                    The principal focus of geometric group theory is the
finite simple groups arise from reductive groups, and                    interaction of geometry/topology and group theory,
as the sporadic groups have had their character tables                  through group actions and through suitable transla-
computed individually, this work already determines                     tions of geometric concepts into group theory. One
the character tables of all the finite simple groups.                    wants to develop and exploit this interaction for the
   For groups over R, the work of Harish-Chandra and                    benefit of both geometry/topology and group theory.
later authors again confirms the conjectures. But for                    And, in keeping with our assertion that groups are
other fields, only fragmentary theorems have been                        important through out mathematics, one hopes to illu-
proved. There is much still to be done.                                 minate and solve problems from elsewhere in mathe-
                                                                        matics by encoding them as problems in group theory.
Further Reading                                                           Geometric group theory acquired a distinct identity
                                                                        in the late 1980 s but many of its principal ideas have
A nice introductory text on representation theory is
                                                                        their roots in the end of the nineteenth century. At
Alperin’s Local Representation Theory (Cambridge Uni-
                                                                        that time, low-dimensional topology and combinato-
versity Press, Cambridge, 1993). As for the Langlands
                                                                        rial group theory emerged entwined. Roughly speak-
                                                                        ing, combinatorial group theory is the study of groups
  15. The C here is because we are looking at representations on com-   defined in terms of presentations, that is, by means of
plex vector spaces; if we were looking at representations on vector     generators and relations. In order to follow the rest of
spaces over some field F, we would take LG(F).
  16. The appropriately modified Galois group is called the Weil–
                                                                        this introduction the reader must first understand what
Deligne group.                                                          these terms mean. Since their definitions would require

432                                                                                            IV. Branches of Mathematics

an unacceptably long break in the flow of our discus-                    Another kind of question that raises basic issues
sion, I will postpone them to the next section, but I                in combinatorial group theory takes the form: Does
strongly advise the reader who is unfamiliar with the                there exist an algorithm to determine whether or not
meaning of the expression Γ = a1 , . . . , an | r1 , . . . , rm    a group (or given elements of a group) has such-and-
to pause and read that section before continuing with                such a property? For example, does there exist an algo-
this one.                                                            rithm that can take any finite presentation and decide
   The rough definition of combinatorial group theory                 in a finite number of steps whether or not the group
just given misses the point that, like many parts of                 presented is trivial? Questions of this type led to a
mathematics, it is a subject defined more by its core                 profound and mutually beneficial interaction between
problems and its origins than by its fundamental defi-                group theory and logic, given full voice by the Hig-
nitions. The initial impetus for the subject came from               man embedding theorem, which we shall discuss in
the description of discrete groups of hyperbolic isome-              section 6. Moreover, via the conduit of combinatorial
tries and, most particularly, the discovery of the fun-              group theory, logic has influenced topology as well:
damental group [IV.6 §2](/part-04/algebraic-topology) of a manifold [I.3 §6.9](/part-01/fundamental-definitions) by                 one uses group-theoretic constructions to show, for
poincaré [VI.61](/part-06/jules-henri-poincar-18541912) in 1895. The group-theoretic issues                 example, that there is no algorithm to determine which
that emerged were brought into sharp focus by the                    pairs of compact triangulated manifolds are homeo-
work of Tietze and Dehn in the first decade of the twen-              morphic in dimensions 4 and above. This shows that
tieth century and drove much of combinatorial group                  certain kinds of classification results that have been
theory for the remainder of the century.                             obtained in two and three dimensions do not have
   Not all of the epoch-defining problems came from                   higher-dimensional analogues.
topology: other areas of mathematics threw up funda-                    One might reasonably regard combinatorial group
mental questions as well. Here are some of the forms                 theory as the attempt to develop algebraic techniques
they took: Does there exist a group of the following                 to solve the types of questions described above, and in
type? Which groups have the following property? What                 the course of doing so to identify classes of groups that
are the subgroups of ...? Is the following group infinite?              are worthy of particular study. This last point, the ques-
When can one determine the structure of a group from                 tion of which groups deserve our attention, is tackled
its finite quotients? In the sections that follow I shall             head-on in the final section of this article.
attempt to illustrate the mathematical culture associ-                  Some of the triumphs of combinatorial group theory
ated with questions of this kind, but let me immedi-                 are intrinsically combinatorial in nature, but many
ately mention some easily stated but difficult classical               more have had their true nature revealed by the intro-
problems. (i) Let G be a group that is finitely gener-                duction of geometric techniques in the past twenty
ated and suppose that there is some positive integer n               years. A fine example of this is the way in which Gro-
such that x n = 1 for every x in G. Must G be finite?                 mov’s insights have connected algorithmic problems
(ii) Is there a finitely presented group Γ and a surjec-              in group theory to so-called filling problems in Rie-
tive homomorphism φ : Γ → Γ such that φ(γ) = 1 for                   mannian geometry. Moreover, the power of geomet-
some γ ≠ 1? (iii) Does there exist a finitely presented,              ric group theory is by no means confined to improv-
infinite, simple group [I.3 §3.3](/part-01/fundamental-definitions)? (iv) Is every countable            ing the techniques of combinatorial group theory: it
group isomorphic to a subgroup of a finitely generated                naturally leads one to think about many other issues
group, or even a finitely presented group?                            of fundamental importance. For example, it provides a
  The first of these questions was asked by Burnside                  context in which one can illuminate and vastly extend
in 1902 and the second by Hopf in connection with                    classical rigidity theorems [V.23](/part-05/mostows-strong-rigidity-theorem), such as that of
his study of degree-1 maps between manifolds. I shall                Mostow. The key to applications such as this is the
present the answers to all four questions (in section 5)             idea that finitely generated groups can usefully be
to illustrate an important aspect of both combinatorial              regarded as geometric objects in their own right. This
and geometric group theory: one develops techniques                  idea has its origins in the work of cayley [VI.46](/part-06/arthur-cayley-18211895)
that allow the construction of explicit groups with pre-             (1878) and Dehn (1905) but its full force was recog-
scribed properties. Such constructions are of particular             nized and promoted by Gromov, starting in the 1980 s.
interest when they illustrate the diversity of possible              It is the key idea that underpins the later sections of
phenomena in other branches of mathematics.                          this article.

$IV$ . $10$ .

Geometric and Combinatorial Group Theory

$2$

Presenting Groups

How should one describe a group? An example will illustrate the standard way of doing so and give some idea of why it is often appropriate. Consider the familiar tiling of the Euclidean plane by equilateral triangles. How might you describe the full group Γ $\Delta$ of symmetries of this tiling, i.e., the rigid motions of the plane that send tiles to tiles? Let us focus on a single tile T and a particular edge e of T , and use this to pick out three symmetries. The first, which we shall call α, is the reflection of the plane in the line that contains e and the other two, β and γ, are the reflections in the lines that join the endpoints of e to the midpoints of the opposite edges in T . With some effort one can convince oneself that every symmetry of the tiling can be obtained by performing these three operations repeatedly in a suitable order. One expresses this by saying that the set {α, β, γ} generates the group Γ $\Delta$ . A further useful observation is that if one performs the operation α twice, the tiling is returned to its original position: that is, $α^{2} = 1$ . Likewise, $β^{2} = γ^{2} = 1$ . One can also verify that (α $β)^{6} = (αγ)^{6} = (βγ)^{3} = 1$ . It turns out that the group Γ $\Delta$ is completely determined by these facts alone, a statement that we summarize by the notation $Γ\Delta =$  α, $β,γ | α^{2}$ , $β^{2}$ , $γ^{2}$ , (α $β)^{6}$ , (α $γ)^{6}$ , (β $γ)^{3}$  . The aim of the rest of this section is to say in more detail what this means. To begin with, notice that from the facts we are given we can deduce others: for example, bearing in mind that $β^{2} = γ^{2} = (βγ)^{3} = 1$ , we can show that (γ $β)^{3} = (γβ)^{3}(βγ)^{3} = 1$ as well (where the last equality follows after repeatedly canceling pairs of the form ββ or γ γ). We wish to convey the idea that in Γ $\Delta$ there are no relationships between the generators except those that follow from the facts above by this kind of argument. Now let us try to say this more formally. We define a set of generators for a group Γ to be a subset S ⊂ Γ such that every element of Γ is equal to some product of elements of S and their inverses. That is, every element ε ε ε can be written in the form $(s^{1})^{1}(s^{2})^{2}$ · · · $(s^{n})^{n}$ , where each $s^{i}$ is an element of S and each $ε^{i}$ is $1$ or $- 1$ . We then call a product of this kind a relation if it is equal to the identity in Γ . There is an awkward ambiguity here. When we talk about “the product” of some elements of Γ , it sounds as though we are referring to another element of Γ , but

$433$

we certainly did not mean this at the end of the last paragraph: a relation is not the identity element of Γ but rather a string of symbols such as $ab - 1a - 1bc$ that yields the identity in Γ when you interpret a, b, and c as generators in the set S. In order to be clear about this, it is useful to define another group, known as the free group F (S). For concreteness we shall describe the free group with three generators, taking our set S to be {a, b, c}. A typical element is a “word” in the elements of S and their inverses, such as the expression $ab - 1a - 1bc$ considered in the previous paragraph. However, we sometimes regard two words as the same: for instance, abcc $- 1ac$ and abab $- 1bc$ are the same because they become identical when we cancel out the inverse pairs $cc - 1$ and $b - 1b.$ More formally, we define two such words to be equivalent and say that the elements of the free group are the equivalence classes [I.2](/part-01/language-and-grammar). To multiply words together, we just concatenate them: for instance, the product of $ab - 1$ and bcca is $ab - 1$ bcca, which we can shorten to acca. The identity is the “empty word.” This is the free group on three generators a, b, and c. It should be clear how to generalize it to an arbitrary set S, though we shall continue to discuss the set S = {a, b, c}. A more abstract way of characterizing the free group on a, b, and c is to say that it has the following universal property: if G is any group and φ is any function from S = {a, b, c} to G, then there is a unique homomorphism Φ from F (S) to G that takes a to φ (a), b to φ (b), and c to φ (c). Indeed, if we want Φ to have these properties, then our definition is forced upon us: for example, Φ (ab $- 1$ ca) will have to be φ (a) φ (b) $- 1$ φ (c) φ (a), by the definition of a homomorphism. So the uniqueness is obvious. The rough reason that this definition really does give rise to a well-defined homomorphism is that the only equations that are true in F (S) are ones that are true in all groups: in order for Φ not to be a homomorphism, one would need a relation to hold in F (S) that did not hold in G, but this is impossible. Now let us return to our example Γ $\Delta$ . We would like to prove that it is (isomorphic to) the “freest” group with generators α, β, and γ that satisfies the relations $α^{2} = β^{2} = γ^{2} = (αβ)^{6} = (αγ)^{6} = (βγ)^{3} = 1$ . But what exactly is this “freest” group that we are claiming is isomorphic to $Γ\Delta$ ? To avoid confusion about the meaning of α, β, and γ (are they elements of Γ $\Delta$ or of the group that we are trying to construct that will turn out to be isomorphic to Γ $\Delta$ ?) we shall use the letters a, b, and c

434                                                                                             IV. Branches of Mathematics

when we answer this question. Thus, we are trying to                 generated by S that satisfies the relations in R: the only
build the “freest” group with generators a, b, and c                 relations that hold in S | R are the ones that can be
that satisfies the relations a2 = b2 = c 2 = (ab)6 =                  deduced from the relations R.
(ac)6 = (bc)3 = 1, which we denote by G = a, b, c |                    A psychological advantage of switching to this more
a2 , b2 , c 2 , (ab)6 , (ac)6 , (bc)3 .                             abstract setting is that, whereas previously we began
   There are two ways of going about this task. One is               with a group Γ and asked how we might present it, we
to imitate the above discussion of the free group itself,            can now write down group presentations at will, start-
except that now we say that two words are equivalent                 ing with any set S and prescribing a set of words R in
if you can get from one to the other by inserting or                 the symbols S ±1 . This gives us a very flexible way of
deleting not just inverse pairs but also one of the words            constructing a wide variety of groups. We might, for
a2 , b2 , c 2 , (ab)6 , (ac)6 , or (bc)3 . For example, ab2 c is     example, use a group presentation to encode a ques-
equivalent to ac in this group. G is then defined to be               tion from elsewhere in mathematics. We could then ask
the set of equivalence classes of words with the product             about the properties of the group thus defined, and see
coming from concatenation.                                           what they had to tell us about our original problem.
   A neater way to obtain G is more conceptual and ex-
ploits the universal property of the free group. As G                      3    Why Study Finitely Presented Groups?
is to be generated by a, b, and c, the universal prop-
                                                                     Groups arise through out the whole of mathematics
erty of the free group F (S) tells us that there will
                                                                     as groups of automorphisms. These are maps from
have to be a unique homomorphism Φ from F (S) to G
                                                                     an object to itself that preserve all of the defin-
such that Φ(a) = a, Φ(b) = b, and Φ(c) = c. More-
                                                                     ing structure: two examples are the invertible lin-
over, we require that all of a2 , b2 , c 2 , (ab)6 , (ac)6 ,
                                                                     ear maps [I.3 §4.2](/part-01/fundamental-definitions) from a vector space [I.3 §2.3](/part-01/fundamental-definitions) to
and (bc)3 must map to the identity element in G. It
                                                                     itself, and the homeomorphisms from a topological
follows that the kernel [I.3 §4.1](/part-01/fundamental-definitions) of Φ is a normal
                                                                     space [III.90](/part-03/topological-spaces) to itself. Groups encapsulate the essence
subgroup [I.3 §3.3](/part-01/fundamental-definitions) of F (S) that contains the set R =
                                                                     of symmetry and for this reason demand our atten-
{a2 , b2 , c 2 , (ab)6 , (ac)6 , (bc)3 }. Let us write R for
                                                                     tion. We are driven to understand their general nature,
the smallest normal subgroup of F (S) that contains
                                                                     identify groups that deserve particular attention, and
R (or equivalently the intersection of all normal sub-
                                                                     develop techniques for constructing new groups (from
groups of F (S) that contain R). Then there is a sur-
                                                                     old ones, or from new ideas). And, reversing the pro-
jective homomorphism from the quotient [I.3 §3.3](/part-01/fundamental-definitions)
                                                                     cess of abstraction, when given a group, we want to
F (S)/R to any group that is generated by a, b, and
                                                                     find concrete instances of it. For example, we might
c and satisfies the relations a2 = b 2 = c 2 = (ab)6 =
                                                                     like to realize it as the group of automorphisms of
(ac)6 = (bc)3 = 1. This quotient itself is the group we
                                                                     some interesting object, with the aim of illuminating
are looking for: it is the largest group generated by a,
                                                                     the nature of both the object and the group. (See the
b, and c that satisfies the relations in R.
                                                                     article on representation theory [IV.9](/part-04/representation-theory) for more on
   Our assertion about ΓΔ is that it is isomorphic to the
                                                                     this theme.)
group G = a, b, c | a2 , b 2 , c 2 , (ab)6 , (ac)6 , (bc)3  that
we have just described (in two ways). More precisely,
                                                                     3.1       Why Present Groups in Terms of
the map from F (S)/R to ΓΔ that takes a to α, b to β,
                                                                               Generators and Relations?
and c to γ is an isomorphism.
   The above construction is very general. If we are given           The short answer is that this is the form in which
a group Γ , then a presentation of Γ is a set S that gener-          groups often “appear in nature.” This is particularly
ates Γ , together with a set R ⊂ F (S) of relations, such            true in topology. Before looking at a general result that
that Γ is isomorphic to the quotient F (S)/R. If both            illustrates this point, let us examine a simple example.
S and R are finite sets, one says that the presentation               Consider the group D of all isometries of R that are
is finite. A group is finitely presented if it has a finite             generated by the reflections at the points 0, 1, and 2:
presentation.                                                        that is, the group generated by the three functions α0 ,
   We can also define presentations in the abstract,                  α1 , and α2 , which take x to −x, 2−x, and 4−x, respec-
without mentioning a group Γ in advance: given any                   tively. You may recognize this group to be the infinite
set S and any subset R ⊂ F (S), we just define S | R                dihedral group, and you may notice that the generator
to be the group F (S)/R. This is the “freest” group              α2 is superfluous, since it can be generated from α0

IV.10.   Geometric and Combinatorial Group Theory                                                                        435

and α1 . But let us close our eyes to these observations          in ΓΔ this takes some work, and in the groups Gn we
as we let a presentation emerge from the action.                  quickly find ourselves at a loss.
   To this end, we choose an open interval U with the               Note that as well as allowing one to list the elements
property that the images of U under the maps in D                 of the group effectively, a solution to the word prob-
                                              1 3                 lem also allows one to determine the multiplication
cover the whole of the real line, say U = (− 2 , 2 ). Now
let us record two pieces of data: the only elements of            table, since deciding whether w1 w2 = w3 is the same
D (apart from the identity) that fail to move U com-              as deciding whether w1 w2 w3−1 = 1.
pletely off itself are α0 and α1 , and, among all prod-
ucts of length at most 3 in those two letters, the only           3.2   Why Finitely Presented Groups?
nontrivial ones that act as the identity on R are α20 and         The packaging of infinite objects into finite amounts
α21 . You may like to prove that α0 , α1 | α20 , α21  is a      of data arises through out mathematics in the vari-
presentation of D.                                                ous guises of compactness [III.9](/part-03/compactness-and-compactication). Finite presentation
   This is in fact a special case of a general result, which      is basically a compactness condition: a group can be
we now state. (The proof of it is somewhat involved.) Let         finitely presented if and only if it is the fundamental
X be a topological space that is both path connected              group of a reasonable compact space, as we shall see
[IV.6 §1](/part-04/algebraic-topology) and simply connected [III.93](/part-03/universal-covers), and let Γ be a           later.
group of homeomorphisms from X to itself. Then any                   Another good reason for studying finitely presented
choice of path-connected open subset U ⊂ X such that              groups is that the Higman embedding theorem (to be
the images of U cover all of X gives rise to a presenta-          discussed later) allows us to encode questions about
tion Γ = S | R, where S = {γ ∈ Γ | γ(U) ∩ U = ∅}               arbitrary turing machines [IV.20 §1.1](/part-04/computational-complexity) as questions
and R consists of all words w ∈ F (S) of length at most           about such groups and their subgroups.
3 such that w = 1 in Γ . Thus, the identification of a
suitable subset U provides one with a presentation of                   4    The Fundamental Decision Problems
Γ , and the task of a group theorist is to determine the
                                                                  In exploring the geometry and topology of low-dimen-
nature of the group from this information.
                                                                  sional manifolds at the beginning of the twentieth cen-
  To see how difficult this task is, you might like to              tury, Max Dehn saw that many of the problems that
consider the groups                                               he was wrestling with could be “reduced” to questions
   Gn = a1 , . . . , an | a−1         −2                         about finitely presented groups. For example, he gave
                            i ai+1 ai ai+1 , i = 1, . . . , n,
                                                                  a simple formula for associating with a knot diagram
where we interpret i + 1 as 1 when i = n. One of G3 and           [III.44](/part-03/knot-polynomials) a finite presentation of a group. There was one
G4 is trivial and the other is infinite. Can you decide            relation for each crossing in the diagram and he argued
which is which?                                                   that the resulting group would be isomorphic to Z if
  To illustrate a more subtle point, let us consider a            and only if the knot was the unknot: that is, if and only
finitely presented group that we perhaps feel we under-            if it could be continuously deformed into a circle. It
stand: the group ΓΔ that we were discussing earlier. If           is extremely hard to tell by staring at a knot diagram
we want to describe this group to a blind friend unfa-            whether it is actually the unknot, so this seems like a
miliar with the triangular tiling of the plane, what can          useful reduction until one realizes that it can be just as
we say to make her understand the group, or at least              hard to tell whether a finitely presented group is iso-
convince her that we understand the group?                        morphic to Z. For example, here is the presentation of
   Our friend might reasonably ask us to list the ele-            Z that Dehn’s recipe associates with one of smallest
ments of our group, so we begin to describe them as               possible pictures of the unknot, namely a diagram with
products (words) in the given generators. But as we               just four crossings:
begin to do so we hit a problem: we do not want to
                                                                    a1 , a2 , a3 , a4 , a5 |
list any element more than once and in order to avoid
redundancy we have to know which pairs of words                             a−1    −1      −1         −1 −1      −1    −1
                                                                             1 a3 a4 , a2 a3 a1 , a3 a4 a2 , a4 a5 a4 a3 .

w1 , w2 represent the same element of ΓΔ ; equivalently,            Thus Dehn’s investigations led him to understand
we must be able to recognize which words w1−1 w2 are              how difficult it is to extract information from a group
relations in the group. Determining which words are               presentation. In particular, he was the first to identify
relations is called the word problem for the group. Even          the fundamental role of the word problem, which we

$436$

alluded to earlier, and he was one of the first to begin to understand that there are fundamental problems associated with the challenge of developing algorithms that extract knowledge from well-defined objects such as group presentations. In his famous article of 1912 Dehn writes: The general discontinuous group is given by n generators and m relations between them. ... Here there are above all three fundamental problems whose solution is very difficult and which will not be possible without a penetrating study of the subject. $1$ . The identity [word] problem: An element of the group is given as a product of generators. One is required to give a method whereby it may be decided in a finite number of steps whether this element is the identity or not. $2$ . The transformation [conjugacy] problem: Any two elements S and T of the group are given. A method is sought for deciding the question whether S and T can be transformed into each other, i.e., whether there is an element U of the group satisfying the relation $S = UTU - 1$ . $3$ . The isomorphism problem: Given two groups, one is to decide whether they are isomorphic or not (and further, whether a given correspondence between the generators of one group and elements of the other is an isomorphism or not). We shall take these problems as the starting point for three lines of enquiry. First, we shall work toward an outline of the proof that all of these problems are, in a strict sense, unsolvable for general finitely presented groups. The second use that we shall make of Dehn’s problems is to hold them up as fundamental measures of complexity for each of the classes of groups that we subsequently encounter. If we can prove, for example, that the isomorphism problem is solvable in one class of groups but not in another, then we will have given genuine substance to previously vague assertions to the effect that the second class is “harder.” Finally, I want to make the point that geometry lies at the heart of the fundamental issues in combinatorial group theory: it may not be immediately obvious, but its implicit presence is nonetheless a fundamental trait of group theory and not something imposed for reasons of taste. To illustrate this point I shall explain how the study of the large-scale geometry of leastarea disks in riemannian manifolds [I.3](/part-01/fundamental-definitions) is intimately connected with the study of the complexity of word problems in arbitrary finitely presented groups. IV. Branches of Mathematics $5$ New Groups from Old Suppose that you have two groups, $G^{1}$ and $G^{2}$ , and want to combine them to form a new group. The first method that is taught in a typical course on group theory is to take the Cartesian product $G^{1} \times G^{2}$ : $a$ typical element has the form (g ,  h) with $g \in G^{1}$ and $h \in G^{2}$ , and the product of (g , h) with (g , h) is defined to be (gg , hh). The set of elements of the form (g , e) (where e is the identity of $G^{2})$ is a copy of $G^{1}$ inside $G^{1} \times G^{2}$ , and similarly the set of elements of the form (e , h) is a copy of $G^{2}$ . These copies have nontrivial relations between their elements: for example, (e , h) (g , e) = (g , e) (e , h). We would now like to take two groups Γ 1 and Γ 2 and combine them in a different way to form a group called the free product $Γ^{1}$ ∗ $Γ^{2}$ , which contains copies of $Γ^{1}$ and Γ 2 and as few additional relations as possible. That is, we would like there to be embeddings $i^{j}$ : $Γ^{j}$ " $\to Γ^{1}$ ∗ $Γ^{2}$ so that $i^{1}(Γ^{1})$ and $i^{2}(Γ^{2})$ generate $Γ^{1}$ ∗ $Γ^{2}$ but they are not intertwined in any way. This requirement is neatly encapsulated by the following universal property: given any group G and any two homomorphisms $φ^{1}$ : $Γ^{1} \to G$ and $φ^{2}$ : $Γ^{2} \to G,$ there should be a unique homomorphism Φ : $Γ^{1}$ ∗ $Γ^{2} \to G$ such that Φ ◦ $i^{j} = φ^{j}$ for $j = 1$ , $2$ . (Less formally, Φ behaves like φ 1 on the copy of Γ 1 and behaves like $φ^{2}$ on the copy of $Γ^{2}$ .) It is easy to check that this property characterizes $Γ^{1}$ ∗ $Γ^{2}$ up to isomorphism, but it leaves open the question of whether $Γ^{1}$ ∗ $Γ^{2}$ actually exists. (These are the standard pros and cons of defining an object by means of a universal property .) In the present setting, existence is easily established using presentations: let A ${}^{1} | R^{1}$ be a presentation of $Γ^{1}$ and let A ${}^{2} | R^{2}$ be a presentation of $Γ^{2}$ , with $A^{1}$ and $A^{2}$ disjoint, and then define $Γ^{1}$ ∗Γ 2 to be $A^{1}$ %A ${}^{2}|R^{1}$ %$R^{2}$ (where % denotes a union of disjoint sets). More intuitively, one can define Γ 1 ∗ Γ 2 to be the set of alternating sequences $a^{1}b^{1}$ · · · a n b n with each a i belonging to Γ 1 and each b j belonging to Γ 2 , with the extra condition that none of the a $i$ and $b$ j equals the identity, except possibly $a^{1}$ or b n . The group operations in Γ 1 and Γ 2 extend to this set in an obvious way: for example, $(a^{1}b^{1}a^{2})(a^{1}b^{1}) = a^{1}b^{1}a^{2}b^{1}$ , where $a^{2} = a^{2}a^{1}$ , except that if $a^{2}a^{1} = 1$ then the product cancels down to $a^{1}b^{2}$ , where $b^{2} = b^{1}b^{1}$ . Free products occur naturally in topology: if one has topological spaces $X^{1}$ , $X^{2}$ with marked points $p^{1} \inX^{1}$ , $p^{2} \inX^{2}$ , then the fundamental group [IV.6](/part-04/algebraic-topology) of the space $X^{1}$ ∨ $X^{2}$ obtained from $X^{1}$ % $X^{2}$ by making the

IV.10.   Geometric and Combinatorial Group Theory                                                                     437

identification p1 = p2 is the free product of π1 (X1 , p1 )   to itself) is injective. Thus, given Γ = A | R, we intro-
and π1 (X2 , p2 ). The Seifert–van Kampen theorem tells      duce a symbol t ∉ A (usually called the stable letter), we
one how to present the fundamental group of a space          choose for each b ∈ B1 words b̂, b̃ ∈ F (A) with b̂ = b
obtained by gluing X1 and X2 along larger subspaces.         and b̃ = ψ(b) in Γ , and we define
If the inclusion of the subspaces gives rise to an injec-
                                                                       Γ ∗ψ = A, t | R, t b̂t −1 b̃−1 (b ∈ B1 ).
tion of fundamental groups, then one can express
the fundamental group of the resulting space as an           This is the freest group we can build from Γ by adjoin-
amalgamated free product, which we now define.                ing a new element t and requiring it to satisfy all the
   Let Γ1 and Γ2 be two groups. If some other group          equations we want it to, namely t b̂t −1 = b̃ for every
contains copies of Γ1 and Γ2 , then the intersection of      b ∈ B1 (which we can think of as saying that tbt −1 =
those copies must contain the identity element. The          ψ(b)). This group is called an HNN extension of Γ (after
free product Γ1 ∗ Γ2 was the freest group we could           Higman, Neumann, and Neumann).
build that was subject to this minimal constraint. Now          Now we must show that the natural map from Γ to
we shall insist that the copies of Γ1 and Γ2 intersect       Γ ∗ψ is injective. That is, if you take an element γ of Γ
nontrivially, specify which of their subgroups must lie      and regard it as an element of Γ ∗ψ , you should not be
in the intersection, and build the freest group that         able to use t and the relations in Γ ∗ψ to cancel γ down
satisfies this constraint.                                    to the identity. This is proved with the help of the fol-
   Suppose, then, that A1 is a subgroup of Γ1 and that φ     lowing more general result known as Britton’s lemma.
is an isomorphism from A1 to a subgroup A2 of Γ2 . As        Suppose that w is a word in the free group F (A, t). Then
in the example of the free product, one can define the        the only circumstances under which it can give rise to
“freest product that identifies A1 and A2 ” by means          the identity in the group Γ ∗ψ are if either it does not
of a universal property. Again, one can establish the        involve t and represents the identity in Γ or it involves
existence of such a group using presentations: if Γ1 =       t but can be simplified in an obvious way by contain-
S1 | R1  and Γ2 = S2 | R2 , the group we seek takes      ing a “pinch.” A pinch is a subword of the form tbt −1 ,
the form                                                     where b is a word in F (A) that represents an element
                  S1 % S2 | R1 % R2 % T .                  of B1 (in which case we can replace it by ψ(b)), or one
Here, T = {ua va−1 | a ∈ A1 }, where ua is some word         of the form t −1 b t, where b represents an element of
that represents a in (the presentation of) Γ1 and va is      B2 (in which case we can replace it by ψ−1 (b )). Thus,
a word that represents φ(a) in Γ2 .                          if you are given a word that involves t and contains
  This group is called the amalgamated free product of       no pinches, then you know that it cannot be canceled
Γ1 and Γ2 along A1 and A2 . It is often described by the     down to the identity.
casual and ambiguous notation Γ1 ∗A1 =A2 Γ2 , or even           A similar noncancellation result holds for the amal-
Γ1 ∗A Γ2 , where A  Aj is an abstract group.                gamated free product Γ1 ∗A1 =A2 Γ2 . If g1 , . . . , gn belong
  Unlike with free products, it is no longer obvious that    to Γ1 but not to A1 and h1 , . . . , hn belong to Γ2 but not
the maps Γi → Γ1 ∗A Γ2 implicit in this construction are     to A2 , then the word g1 h1 g2 h2 · · · gn hn cannot equal
injective, but they do turn out to be, as was shown by       the identity in Γ1 ∗A1 =A2 Γ2 .
Schreier in 1927.                                               These noncancellation results do far more than show
  A related construction of Higman, Neumann, and             that the natural homomorphisms we have been con-
Neumann in 1949 answers the following question:              sidering are injective: they also demonstrate further
given a group Γ and an isomorphism ψ : B1 → B2               aspects of freeness in amalgamated free products and
between subgroups of Γ , can one always embed Γ in           HNN extensions. For example, suppose that in the amal-
a bigger group so that ψ becomes the restriction to B1       gamated free product Γ1 ∗A1 =A2 Γ2 we can find an ele-
of a conjugation?                                            ment g of Γ1 that generates an infinite group that inter-
  By now, having seen the idea in the context of             sects A1 in the identity and an element h of Γ2 that does
both free products and amalgamated free products,            the same for A2 . Then the subgroup of Γ1 ∗A1 =A2 Γ2 gen-
the reader may guess how one goes about answering            erated by g and h is the free group on those two gen-
this question: one writes down the presentation of a         erators. With a little more effort, one can deduce that
universal candidate for the desired enveloping group,        any finite subgroup of Γ1 ∗A1 =A2 Γ2 has to be conjugate
denoted Γ ∗ψ , and then one sets about proving that the      to a subgroup of the obvious copy of either Γ1 or Γ2 .
natural map from Γ to Γ ∗ψ (which takes each word            Similarly, the finite subgroups of Γ ∗ψ are conjugates

438                                                                                                IV. Branches of Mathematics

of subgroups of Γ . We shall exploit these facts in the            take a free product of G with an infinite cyclic group
constructions that follow.                                         s  Z. Let Σ1 be the set of all elements of G ∗ Z of the
  There are many ways of combining groups that I                   form sn = gn s n with n ⩾ 1. Then the subgroup Σ1 
have not mentioned here. I have chosen to focus on                 generated by Σ1 is isomorphic to the free group F (Σ1 ).
amalgamated free products and HNN extensions partly                Similarly, if we let Σ2 = {s2 , s3 , . . . } (so it is Σ1 with the
because they lead to transparent solutions of the basic            element s1 = g1 s removed), then Σ2  is isomorphic to
problems discussed below but more because of their                 F (Σ2 ). It follows that the map ψ(sn ) = sn+1 gives rise to
primitive appeal and the way in which they arise nat-              an isomorphism from Σ1  to Σ2 . Now take the HNN
urally in the calculation of fundamental groups. They              extension (G ∗ Z)∗ψ , whose stable letter we denote by
also mark the beginning of arboreal group theory,                  t. This group contains a copy of G, as we noted before.
which we will discuss later. If space allowed, I would go          Moreover, since we have ensured that tsn t −1 = sn+1 for
on to describe semidirect and wreath products, which               every n ⩾ 1, it can be generated by just the three ele-
are also indispensable tools of the group theorist.                ments s1 , s, and t. Thus, we have embedded an arbitrary
  Before turning to some applications of HNN exten-                countable group into a group with three generators. (We
sions and amalgamated free products, I want to return              leave the reader to think about how one can vary this
to the Burnside problem, which asks if there exist                 construction to produce a group with two generators.)
finitely generated infinite groups all of whose ele-
ments have a given finite order. This question gener-               5.3   There Are Uncountably Many Nonisomorphic
ated important developments through out the twenti-                       Finitely Generated Groups
eth century, particularly in Russia. It is appropriate to
                                                                   This was proved by B. H. Neumann in 1932. Since there
mention it here because it provides another illustration
of the fact that it can be useful to study a universal             are infinitely many primes, there are uncountably many

object in order to solve a general question.                       nonisomorphic groups of the form       p∈P Zp , where P
                                                                   is an infinite set of primes. We have seen that each of
5.1   The Burnside Problem                                         these groups can be embedded in a finitely generated
                                                                   group, and our earlier comments on finite subgroups
Given an exponent m, one clarifies the problem at hand
                                                                   of HNN extensions show that no two of the resulting
by considering the free Burnside group Bn, m given by
                                                                   finitely generated groups are isomorphic.
the presentation a1 , . . . , an | Rm , where Rm consists
of all mth powers in the free group F (a1 , . . . , an ). It is
                                                                   5.4   An Answer to Hopf’s Question
clear that Bn, m maps onto any group with at most n
generators in which every element has order dividing               A group G is called Hopfian if every surjective homo-
m. Therefore, there exists a finitely generated infinite             morphism from G to G is an isomorphism. Most
group with all elements of the same finite order if and             familiar groups have this property: for example, finite
only if, for suitable values of n and m, the group Bn, m            groups obviously do, as do Zn (as you can prove using
is infinite. Thus, a question that takes the form, Does             linear algebra) and free groups. So too do groups of
there exist a group such that ...?, becomes a question               matrices such as SLn (Z), as we shall discuss in a
about just one group.                                              moment. A simple example of a non-Hopfian group is
   Novikov and Adian showed in 1968 that Bn, m is infi-              the group consisting of all infinite sequences of inte-
nite when n ⩾ 2 and m ⩾ 667 is odd. Determining                    gers (under pointwise addition), since the function that
the exact range of values for which Bn, m is infinite is             takes (a1 , a2 , a3 , . . . ) to (a2 , a3 , a4 , . . . ) is a surjective
an active area of research. Of far greater interest is the         homomorphism that contains (1, 0, 0, . . . ) in its kernel.
open question of whether there exist finitely presented             But is there a finitely presented example? The answer
infinite groups that are quotients of Bn, m . Zelmanov               is yes, and Higman was the first to construct one. The
was awarded the Fields Medal for proving that each                 following examples are due to Baumslag and Solitar.
Bn, m has only finitely many finite quotients.                           Let p ⩾ 2 be an integer and identify Z with the free
                                                                   group a generated by a single generator a. Then the
5.2   Every Countable Group Can Be Embedded
                                                                   subgroups p Z and (p + 1)Z of Z are identified with the
      in a Finitely Generated Group
                                                                   powers of ap and ap+1 , respectively. Let ψ be the iso-
Given a countable group G we can list its elements,                morphism between these subgroups that takes ap to
g0 , g1 , g2 , . . . , taking g0 to be the identity. We can then   ap+1 and consider the corresponding HNN extension

$IV$ . $10$ .

Geometric and Combinatorial Group Theory

B. This has presentation $B =$  a, $t |ta - pt - 1a^{p} + {}^{1}$  . The homomorphism $\psi$ : $B \to B$ defined by $t \to t, a \to a^{p}$ is clearly a surjection but its kernel contains, for example, the element $c =$ ata $- 1t - 1a - 2$ tat $- 1a,$ which does not contain a pinch and is therefore not equal to the identity, by Britton’s lemma. (If you want to convince yourself how useful this lemma is, set $p = 3$ and try to prove directly that c is not equal to the identity in the group B just defined .)

$5$ . $5$

A Group That Has No Faithful

Linear Representation

One can show that a finitely generated group G of matrices over any field is residually finite, which means that for each nontrivial element g $\in$ G there exists a finite group $Q$ and $a$ homomorphism $\pi$ : $G \to Q$ with $\pi(g) \neq 1$ . For example, if you are given an element g $\in$ SL n (Z), then you can pick an integer m bigger than the absolute values of all the entries in g (which is an n $\times$ n matrix) and consider the homomorphism from SL n (Z) to SL n (Z  /  m Z) that reduces the matrix entries mod m. The image of g in the finite group SL n (Z  /  m Z) is clearly nontrivial. Non-Hopfian groups are not residually finite, and hence are not isomorphic to a group of matrices over any field. One can see that the non-Hopfian group B defined above is not residually finite by considering what happens to the nontrivial element c. We saw that there was a surjective homomorphism $\psi$ : $B \to B$ with

$\psi(c) = 1$ . Let $c^{n}$ be an element such that $\psi^{n}(c^{n}) = c$ (which exists since $\psi$ is a surjection). If there were a homomorphism $\pi$ from B to a finite group Q with $\pi(c)= 1$ , then we would have infinitely many distinct homomorphisms from B to Q, namely the compositions $\pi◦\psi^{n}$ ; these are distinct because $\pi◦\psi^{m}(c^{n}) = 1$ if $m > n$ and $\pi$ ◦ $\psi^{n}(c^{n}) = \pi(c)= 1$ . This is a contradiction, since a homomorphism from a finitely generated group to a finite group is determined by what it does to the generators, so there can only be finitely many such homomorphisms.

$5$ . $6$

Infinite Simple Groups

Britton’s lemma actually tells us more than that $c \neq 1$ : the subgroup Λ of B generated by $t$ and $c$ is in fact a free group on those generators. Thus we may form the amalgamated free product Γ of two copies of B, denoted $B^{1}$ and $B^{2}$ , by gluing together the two copies of Λ with the isomorphism $c^{1} \to t^{2}$ , $t^{1} \to c^{2}$ . We have

$439$

seen that in any finite quotient of $Γ = B^{1}$ ∗ $ΛB^{2}$ , the elements $c^{1} ( = t^{2})$ and $c^{2} ( = t^{1})$ must have trivial image, and it is easy to deduce from this that in fact the quotient must be trivial. Thus Γ is an infinite group with no finite quotients. It follows that the quotient of Γ by any maximal proper normal subgroup is also infinite (and it is simple by maximality). The simple group that we have constructed is infinite and finitely generated but it is not finitely presentable. Finitely presented infinite simple groups do exist, but they are much harder to construct.

$6$

Higman’s Theorem and Undecidability

We have seen that there are uncountably many (nonisomorphic) finitely generated groups. But as there are only countably many finitely presented groups, only countably many finitely generated groups can be subgroups of finitely presented groups. Which ones are they? A complete answer to this question is provided by a beautiful and deep theorem proved by Graham Higman in 1961 , which says, roughly, that the groups that arise are all those that are algorithmically describable. (If you have no idea what this means, even roughly, then you might like to read the insolubility of the halting problem [V.20](/part-05/the-insolubility-of-the-halting-problem) before continuing with this section .) A set S of words over a finite alphabet A is called recursively enumerable if there is some algorithm (or more formally, Turing machine) that can produce a complete list of the elements of S. A case of particular interest is when A is just a singleton, in which case a word is determined by its length and we can think of S as a set of nonnegative integers. The elements of S need not be listed in a sensible order, so having an algorithm that produces an exhaustive list of S does not mean that one can use the algorithm to determine that some given word w does not belong to S: if you imagine standing by your computer as it enumerates S, there will not in general come a time when you can say to yourself, “If it was going to appear, then it would have done so by now,” and therefore be certain that it is not in S. If you want an algorithm with this further property, then you need the stronger notion of a recursive set, which is a set S such that S and its complement are both recursively enumerable. Then you can list all the elements that belong to S and you can also list all the elements that do not belong to S. A finitely generated group is said to be recursively presentable if it has a presentation with a finite number

$440$

of generators and a recursively enumerable set of defining relations. In other words, such a group is not necessarily finitely presented, but at least the presentation of the group is “nice” in the sense that it can be generated by some algorithm. Higman’s embedding theorem states that a finitely generated group G is recursively presentable if and only if it is isomorphic to a subgroup of a finitely presented group. To get a feeling for how nonobvious this is, you might consider the following presentation of the group of all rationals under addition, in which the generator a n corresponds to the fraction $1/n$ ! :

$Q = a^{1}$ , $a^{2}$ , · · · $| a^{n}n = a^{n} - {}^{1}$ ∀n $\ge 2$   . Higman’s theorem tells us that Q can be embedded in a finitely presented group, but no truly explicit embedding is known. The power of Higman’s theorem is illustrated by the ease with which it implies the celebrated undecidability results that were rightly regarded as watersheds of twentieth-century mathematics. In order to make this case convincingly, I shall give a complete proof (except that I shall assume some of the facts mentioned earlier) that there exist finitely presented groups with unsolvable word problems, and also that there are sequences of finitely presented groups among which one cannot decide isomorphism. We shall also see how these group-theoretic results can be used to translate undecidability phenomena into topology. The basic seed of undecidability comes from the fact that there are recursively enumerable subsets S ⊂ N that are not recursive. Using this fact one can readily construct finitely generated groups with an unsolvable word problem: given such a set of integers S we consider $J =$  a, $b,t|t(b^{n}ab - n)t - 1 = b^{n}ab - n$ ∀n $\in$ S . This is the HNN extension of the free group F (a , b) associated with the identity map L $\to$ L, where L is the subgroup generated by {b $nab - n$ : $n \in$ S}. Britton’s lemma tells us that the word

$w^{m} = t(b^{m}ab - m)t - 1(b^{m}a - 1b - m)$ equals $1 \in J$ if and only if $m \in S,$ and by definition there is no algorithm to decide if m $\in$ S, so we cannot decide which of the w m are relations. Thus J has an unsolvable word problem. That there exist finitely presented groups for which the word problem is unsolvable is a much deeper fact, but with Higman’s embedding theorem at hand the

IV. Branches of Mathematics

proof becomes almost trivial: Higman tells us that J can be embedded in a finitely presented group Γ , and it is a relatively straightforward exercise to show that if one cannot decide which words in the generators of J represent the identity, then one cannot decide for arbitrary words in the generators of Γ either. Once one has a finitely presented group with an unsolvable word problem, it is easy to translate undecidability into all manner of other problems. For example, suppose that $Γ =$  A | R  is a finitely presented group with an unsolvable word problem, where A  =  {$a^{1}$ , . . . , a n } and no a i equals the identity in Γ . For each word w made out of the letters in A and their inverses, define a group Γ w to have presentation A, $s,t | R, t - 1(s^{i}$ a $is - i)t(s^{i}ws - i)$ , $i = 1$ , . . . , n . It is not hard to show that if w $= 1$ in Γ then Γ w is the free group generated by $s$ and $t$. If w   $= 1$ , then Γ w is an HNN extension. In particular, it contains a copy of Γ , and hence has an unsolvable word problem, which means that it cannot be a free group. Thus, since there is no algorithm to decide whether w $= 1$ in Γ , one cannot decide which of the groups Γ w are isomorphic to which others. A variant of this argument shows that there is no algorithm to determine whether or not a given finitely presented group is trivial. We shall see in a moment that every finitely presented group G is the fundamental group of some compact four-dimensional manifold. By following a standard proof of this theorem with considerable care, Markov proved in 1958 that in dimensions $4$ and above there is no algorithm to decide which compact manifolds (presented as simplicial complexes, for example) are homeomorphic. His basic idea was to show that if there were an algorithm to determine which triangulated $4$ - manifolds are homeomorphic, then one could use it to determine which finitely presented groups are trivial, which we know is impossible. In order to implement this idea one has to be careful to arrange that the $4$ - manifolds associated with different presentations of the trivial group are homeomorphic: this is the delicate part of the argument. Strikingly, there does exist an algorithm to decide which compact three-dimensional manifolds are isomorphic. This is an extremely deep theorem that relies in particular on Perelman’s solution to thurston’s geometrization conjecture [IV.7](/part-04/dierential-topology) .

IV.10.   Geometric and Combinatorial Group Theory                                                                           441

            7   Topological Group Theory                            and a Klein bottle stuck together at a point. Picturing
                                                                    the 2-complex for a, b | a2 , b3 , (ab)3  is already rather
Let us change perspective now and look at the sym-
                                                                    difficult.
bols P ≡ a1 , . . . , a2 | r1 , . . . , rm  through the eyes of
                                                                       The construction of K(P ) is the beginning of topo-
a topologist. Instead of interpreting P as a recipe for
                                                                    logical group theory. The Seifert–van Kampen theorem
constructing a group, we regard it as a recipe for con-
                                                                    (mentioned earlier) implies that the fundamental group
structing a topological space [III.90](/part-03/topological-spaces), or more specif-
                                                                    of K(P ) is the group presented by P . But the group
ically a two-dimensional complex. Such spaces consist               no longer sits inertly in the form of an inscrutable
of points, called vertices, some of which are linked by             presentation—now it acts on the universal covering
directed paths, called edges, or 1-cells. If a collection of        [III.93](/part-03/universal-covers) of K(P ) by homeomorphisms known as “deck
such 1-cells forms a cycle, then it can be filled in with            transformations.” Thus, through the simple construc-
a face, or 2-cell: topologically speaking, each face is a           tion of K(P ) (and the elegant theory of covering spaces
disk with a directed cycle as its boundary.                         in topology) we achieve our aim of realizing an abstract
   To see what this complex is, let us first consider the            finitely presented group as the group of symmetries of
standard presentation P ≡ a, b | aba−1 b−1  of Z2 .               an object with a potentially rich structure, on which we
(This is generated by a and b and the relation tells                can bring global geometric and topological techniques
us that ab = ba.) We begin with a graph K 1 that                    to bear.
has a single vertex and two edges (which are loops)                    To obtain an improved topological model for our
that are directed and labeled a and b. Next, we take a              group, we can embed K(P ) in R5 (just as one can embed
square [0, 1]×[0, 1], the sides of which are directed and           a finite graph [III.34] in R3 ) and consider the compact
labeled a, b, a−1 , b−1 as we proceed around the bound-             four-dimensional manifold M obtained by taking all
ary. Imagine gluing the boundary of the square to the               points that are a small fixed distance from the image.
graph so as to respect the labeling of edges: with a bit            (I am assuming that the embedding is suitably “tame,”
of thought, you should be able to see that the result               which one can arrange.) The mental picture to strive for
is a torus, that is, a surface in the shape of a bagel.             here is a higher-dimensional analogue of the surface
An observation that turns out to be important is that               (sleeve) one gets by taking the points in R3 that are a
the fundamental group of the torus is Z2 , the group we             small fixed distance from an embedded graph. The fun-
started with.                                                       damental group of M is again the group presented by P ,
   The idea of “gluing” is made precise by the use of               so now we have our arbitrary finitely presented group
attaching maps: we take a continuous map φ from the                 acting on a manifold (the universal cover of M). This
boundary of the square S to the graph K 1 that sends                allows us to use the tools of analysis and differential
the corners of the square to the vertex of K 1 and sends            geometry.
each side (minus its vertices) homeomorphic ally onto                   The constructions of K(P ) and M establish the more
an open edge. The torus is then the quotient of K 1 % S             difficult implication of the theorem, promised earlier,
by the equivalence relation that identifies each x in the            that a group can be finitely presented if and only if
boundary of the square with its image φ(x).                         it is the fundamental group of a compact cell com-
   With this more abstract language in hand, it is easy to          plex and of a compact 4-manifold. This result raises
see how the above construction generalizes to arbitrary             several natural questions. First, are there better, more
presentations: given a presentation P ≡ a1 , . . . , an |          informative, topological models for an arbitrary finitely
r1 , . . . , rm , one takes a graph with a single vertex and       presented group Γ ? And if not, then what can one
n oriented loops, which are labeled a1 , . . . , an . Then          say about the classes of groups defined by the natu-
for each rj one attaches a polygonal disk by gluing its             ral constraints that arise when one tries to improve
boundary circuit to the sequence of oriented edges that             the model? For example, we would like to construct
traces out the word rj .                                            a lower-dimensional manifold with fundamental group
   In general, the result will not be a surface as it was for       Γ , enabling us to exploit our physical insight into three-
a, b | aba−1 b−1 . Rather, it will be a two-dimensional           dimensional geometry. But it turns out that the fun-
complex with singularities along the edges and at the               damental groups of compact three-dimensional man-
vertex. You may find it instructive to do some more                  ifolds are very special; this observation lies near the
examples. From a | a2  one gets the projective plane;             heart of a great deal of mathematics at the end of
from a, b, c, d | aba−1 b−1 , cdc −1 d one gets a torus           the twentieth century. Other interesting fields open up

442                                                                                     IV. Branches of Mathematics

when one asks which groups arise as the fundamen-             symmetries had any fixed points. Before moving on to
tal groups of compact spaces satisfying curvature             geometric group theory I should point out that there
[III.13](/part-03/curvature) conditions, or constraints coming from complex       are many situations in which the most illuminating
geometry.                                                     actions of a group are not free: one instead allows well-
   A particularly rich set of constraints comes from the      understood stabilizers. (The stabilizer of a point is the
following question. Can one arrange for an arbitrary          set of all symmetries in the group that leave that point
finitely presented group to be the fundamental group           fixed.) For example, the natural way in which to study
of a compact space (a complex or manifold, perhaps)           ΓΔ is by its action on the triangulated plane, each vertex
whose universal cover is contractible [IV.6 §2](/part-04/algebraic-topology)? This         of which is left unmoved by twelve symmetries.
is a natural question from the point of view of topology         A deeper illustration of the merits of seeking insight
because a space with a contractible universal cover is,       into algebraic structure through nonfree actions on
up to homotopy [IV.6 §2](/part-04/algebraic-topology), completely determined by            suitable topological spaces comes from the Bass–Serre
its fundamental group. If the fundamental group is Γ ,        theory of groups acting on trees, which subsumes the
then such a space is called a classifying space for Γ and     theory of amalgamated free products and HNN exten-
its homotopy-invariant properties provide a rich array        sions, whose potency we saw earlier. (This theory and
of invariants for the group Γ (getting away from the          its extensions often go under the heading of arboreal
gross dependence that K(P ) has on P rather than Γ ).         group theory.)
   If our earlier discussion of how hard it is to recognize      A tree is a connected graph that has no circuits in it.
Γ from P has left you very skeptical about whether this       It is helpful to regard it as a metric space [III.56](/part-03/metric-spaces) in
dependence can actually be removed, then your skep-           which each edge has length 1. The group actions that
ticism is well-founded: there are many obstructions to        one allows on trees are those that take edges to edges
the construction of compact classifying spaces for an         isometrically, never flipping an edge.
arbitrary finitely presented group; the study of them             If a group Γ acts on a set X (in other words, if it can
(under the generic name finiteness conditions) is a rich       be regarded as a group of symmetries of X), then the
area at the interface of modern group theory, topology,       orbit of a point x ∈ X is the set of all its images gx with
and homological algebra.                                      g ∈ Γ . A group Γ can be expressed as an amalgamated
   One aspect of this area is the search for natural          free product A∗C B if and only if it acts on a tree in such
conditions that ensure the existence of compact clas-         a way that there are two orbits of vertices, one orbit of
sifying spaces (not necessarily manifolds). This is one       edges, and stabilizers A, B, C (where A and B are the
of several places where manifestations of nonpositive         stabilizers of adjacent vertices and intersect in C, which
curvature play a fundamental role in modern group             is the edge stabilizer). HNN extensions correspond to
theory. More combinatorial conditions also arise. For         actions with one orbit of vertices and one orbit of edges.
example, Lyndon proved that for any presentation P ≡          Thus, amalgamated free products and HNN extensions
A | r  where the single defining relation r ∈ F (A) is       appear as graphs of groups, which are the basic objects
not a nontrivial power, the universal cover of K(P ) is       of Bass–Serre theory. These objects allow one to recover
contractible.                                                 groups acting on trees from the quotient data of the
   A neighboring and highly active area of research con-      action, i.e., the quotient space (which is a graph) and
cerns questions of uniqueness and rigidity for classi-        the pattern of edge and vertex stabilizers.
fying spaces. (Here, as is common, the word rigidity             An early benefit of Bass–Serre theory is a transparent
is used to describe a situation in which requiring two        and instructive proof that any finite subgroup of A ∗C B
objects to be equivalent in an apparently weak sense          is conjugate to a subgroup of either A or B: given any set
forces them to be equivalent in an apparently stronger        V of vertices in a tree, there is a unique vertex or mid-
sense.) For example, the (open) Borel conjecture asserts      point x minimizing max{d(x, v) | v ∈ V }; one applies
that if two compact manifolds have isomorphic funda-          this observation with V an orbit of the finite subgroup;
mental groups and contractible universal covers, then         x provides a fixed point for the action of the subgroup;
those manifolds must be homeomorphic.                         and any point stabilizer is conjugate to a subgroup of
   I have been talking mostly about realizing groups as       either A or B.
fundamental groups, which led to certain free actions.           Arboreal group theory goes much deeper than this
That is, we could interpret the elements of the group         first application suggests. It is the basis for a decompo-
as symmetries of a topological space and none of these        sition theory of finitely presented groups from which

$IV$ . $10$ .

Geometric and Combinatorial Group Theory

it emerges, for example, that there is an essentially canonical maximal splitting of an arbitrary finitely presented group as a graph of groups with cyclic edge stabilizers. This provides a striking parallel with the decomposition theory of $3$ - manifolds , a parallel that extends far beyond a mere analogy and accounts for much of the deepest work in geometric group theory in the past ten years. If you want to learn more about this, search the literature for JSJ decompositions. You may also want to search for complexes of groups, which provide the appropriate higher-dimensional analogue for graphs of groups.

$8$

Geometric Group Theory

Let us refresh the image of K (P) in our mind’s eye by thinking again about the presentation P ≡  a, b |$aba$- 1 b - 1   of Z . The complex  K(P), as we saw earlier, is a torus. Now the torus can be defined as the quotient of the Euclidean plane $R^{2}$ by the action of the group $Z^{2} ($ where the point (m , $n)\inZ^{2}$ acts as the translation (x , $y)\to (x + m,y + n)$ ) : in fact, $R^{2}$ , with an appropriate square tiling, is the universal cover of the torus. If we look at the orbit of the point $0$ under this action, it forms a copy of $Z^{2}$ , and one can thereby see the large-scale geometry of $Z^{2}$ laid out for us. We can make the idea of the “geometry of $Z^{2}$ ” precise by decreeing that edges of the tiling have length $1$ and defining the graph distance between vertices to be the length of the shortest path of edges connecting them. As this example shows, the construction of K (P) involves the two main (intertwined) strands of geometric group theory. In the first and more classical strand, one studies actions of groups on metric and topological spaces in order to elucidate the structures of both the space and the group (as with the action of $Z^{2}$ on the plane in our example, or the action of the fundamental group of K (P) on its universal cover in general). The quality of the insights that one obtains varies according to whether the action has or does not have certain desirable properties. The action of $Z^{2}$ on $R^{2}$ consists of isometries on a space with a fine geometric structure, and the quotient (the torus) is compact. Such actions are in many ways ideal, but sometimes one accepts weaker admission criteria in order to obtain a more diverse class of groups, and sometimes one demands even more structure in order to narrow the focus and study groups and spaces of an exceptional, but for that reason interesting, character. This first strand of geometric group theory mingles with the second. In the second strand, one regards

$443$

finitely generated groups as geometric objects in their own right equipped with word metrics, which are defined as follows. Given a finite generating set S for a group Γ , one defines the Cayley graph of Γ by joining each element γ $\in$ Γ by an edge to each element of the form γs or $γs - 1$ with $s \in S ($ which is the same as the graph formed by the edges of the universal covering of  K(P) ). The distance $d^{S}(γ^{1}$ , $γ^{2})$ between $γ^{1}$ and $γ^{2}$ is then the length of the shortest path from γ 1 to γ 2 if all edges have length $1$ . Equivalently, it is the length of the shortest word in the free group on S that is equal to $γ^{1} - 1γ^{2}$ in Γ . The word metric and the Cayley graph depend on the choice of generating set but their large-scale geometry does not. In order to make this idea precise, we introduce the notion of a quasi-isometry. This is an equivalence relation that identifies spaces that are similar on a large scale. If X and Y are two metric spaces, then a quasi-isometry from X to Y is a function φ : X $\to$ Y with the following two properties. First, there are positive constants c, C, and   such that cd (x , x)  -    $\le$ d (φ (x), φ (x)) $\le$ Cd (x , x)  +   : this says that φ distorts sufficiently large distances by at most a constant factor. Second, there is a constant C such that for every y $\in$ Y there is some x $\in$ X for which d (φ (x), y) $\le$ C : this says that φ is a “quasi-surjection” in the sense that every element of Y is close to the image of an element of X. Consider for example the two spaces $R^{2}$ and $Z^{2}$ , where the metric on $Z^{2}$ is given by the graph distance defined earlier. In this case the map φ : $R^{2} \to Z^{2}$ that takes (x , y) to (x!, y !) (where x! denotes the largest integer less than or equal to x) is easily seen to be a quasi-isometry: if the Euclidean distance d between two points (x , y) and (x , y) is at least $10$ , say, then the graph distance between (x!, y !) and (x !, y !) will certainly lie between $\frac{1}{2}d$ and $2d$ . Notice how little we care about the local structure of the two spaces: the map φ is a quasi-isometry despite not even being continuous. It is not hard to check that if φ is a quasi-isometry from X to Y , then there is a quasi-isometry $\psi$ from Y to X that “quasi-inverts” φ, in the sense that every x in X is at most a bounded distance from $\psi$ φ (x) and every y in Y is at most a bounded distance from φ $\psi$ (y) . Once one has established this, it is easy to see that quasiisometry is an equivalence relation. Returning to Cayley graphs and word metrics, it turns out that if you take two different sets of generators for the same group, then the resulting Cayley graphs will be

444                                                                                     IV. Branches of Mathematics

quasi-isometric. Thus, any property of a Cayley graph        1981. This theorem concerns the number of points
that is invariant under quasi-isometry will be a property    within a distance r of the identity in a finitely generated
not just of the graph but of the group itself. When deal-    group Γ . This will be a function f (r ), and Gromov was
ing with such invariants we are free to think of Γ itself    interested in how the function f (r ) grows as r tends
as a space (since we do not care which Cayley graph we       to infinity, and what that tells us about the group Γ .
form), and we can replace it by any metric space that           If Γ is an Abelian group with d generators, then it is
is quasi-isometric to it, such as the universal cover of a   not hard to see that f (r ) is at most (2 r + 1)d (since
closed Riemannian manifold with fundamental group Γ          each generator is raised to a power between −r and r ).
(whose existence we discussed earlier). Then the tools       Thus, in this case f (r ) is bounded above by a polyno-
of analysis can be brought to bear on it.                    mial in r . At the other extreme, if Γ is a free group with
   A fundamental fact, discovered independently by           two generators a and b, say, then f (r ) is exponentially
many people and often called the Milnor–Švarc lemma,         large, since all sequences of length r that consist of as
provides a crucial link between the two main strands         and bs (and not their inverses) give different elements
of geometric group theory. Let us call a metric space        of Γ .
X a length space if the distance between each pair of           Given this sharp contrast in behavior, one might won-
points is the infimum of the lengths of paths joining         der whether requiring f (r ) to be bounded above by
them. The Milnor–Švarc lemma states that if a group Γ        a polynomial forces Γ to exhibit a great deal of com-
acts “properly discontinuously” as a set of isometries       mutativity. Fortunately, there is a much-studied defi-
of a length space X, and if the quotient is compact, then    nition that makes this idea precise. Given any group
Γ is finitely generated and quasi-isometric to X (for any     G and any subgroup H of G, the commutator [G, H]
choice of word metric).                                      is the subgroup generated by all elements of the form
   We have seen an example of this already: Z2 is quasi-     ghg −1 h−1 , where g belongs to G and h belongs to H. If
isometric to the Euclidean plane. Less obviously, the        G is Abelian, then [G, H] contains just the identity. If G
same is true of ΓΔ . (Consider the map that takes each       is not Abelian, then [G, G] forms a group G1 that con-
element α of ΓΔ to the point of Z2 nearest α(0).)            tains other elements besides the identity, but it may be
   The fundamental group of a compact Riemannian             that [G, G1 ] is trivial. In that case, one says that G is a
manifold is quasi-isometric to the universal cover of        two-step nilpotent group. In general, a k-step nilpotent
that manifold. Therefore, from the point of view of          group G is one where, if you form a sequence by setting
quasi-isometry invariants, the study of such manifolds       G0 = G and Gi+1 = [G, Gi ] for each i, then you even-
is equivalent to the study of arbitrary finitely presented    tually reach the trivial group, and the first time you do
groups. In a moment we will discuss some nontriv-            so is at Gk . A nilpotent group is a group that is k-step
ial consequences of this equivalence. But first let us        nilpotent for some k.
reflect on the fact that, when finitely generated groups          Gromov’s theorem states that a group has polyno-
are considered as metric objects in the framework of         mial growth if and only if it has a nilpotent subgroup
large-scale geometry, they present us with a new chal-       of finite index. This is a quite extraordinary fact: the
lenge: we should classify finitely generated groups up to     polynomial-growth condition is easily seen to be inde-
quasi-isometry.                                              pendent of the choice of word metric and to be an
   This is an impossible task, of course, but neverthe-      invariant of quasi-isometry. Thus the seemingly rigid
less serves as a beacon in modern geometric group            and purely algebraic condition of having a nilpotent
theory, one that has guided us toward many beauti-           subgroup of finite index is in fact a quasi-isometry
ful theorems, particularly under the general heading of      invariant, and therefore a flabby, robust characteristic
rigidity. For example, suppose that you come across a        of the group.
finitely generated group Γ that is reminiscent of Zn on          In the past fifteen years quasi-isometric rigidity the-
a large scale: in other words, quasi-isometric to it. We     orems have been established for many other classes
are not necessarily given any algebraically defined map       of groups, including lattices in semisimple Lie groups
between this mystery group and Zn , and yet it tran-         and the fundamental groups of compact 3-manifolds
spires that such a group must contain a copy of Zn as        (where the classification up to quasi-isometry involves
a subgroup of finite index.                                   more than algebraic equivalences), as well as various
   At the heart of this result is Gromov’s polynomial-       classes defined in terms of their graph of group decom-
growth theorem, a landmark theorem published in              positions. In order to prove theorems of this type, one

IV.10.   Geometric and Combinatorial Group Theory                                                                  445

must identify nontrivial invariants of quasi-isometry          Consider the simple example Γ = a, b | b2 a, baba.
that allow one to distinguish and relate various classes     In this group aba2 b represents the identity. How do we
of spaces. In many cases such invariants come from           prove this? Well,
the development of suitable analogues of the tools of              aba2 b = a(b2 a)ba2 b = ab(baba)ab
algebraic topology, modified so that they behave well
                                                                          = abab = a(baba)a−1 = aa−1 = 1.
with respect to quasi-isometries rather than continuous
maps.                                                        Now let us think about the proof geometrically, via the
                                                             Cayley graph. Since aba2 b = 1 in the group Γ , we
                                                             obtain a cycle in this graph if we start at the identity
     9   The Geometry of the Word Problem
                                                             and go along edges labeled a, b, a, a, b, in that order
It is time to explain the comments I made earlier            (in which case we visit the vertices 1, a, ab, aba, aba2 ,
about the geometry inherent in the basic decision prob-      aba2 b = 1). The equalities in the proof can be thought
lems of combinatorial group theory. I shall concentrate      of as a way of “contracting” this cycle down to the iden-
exclusively on the geometry of the word problem.             tity by means of inserting or deleting small loops: for
   Gromov’s filling theorem describes a startlingly inti-     instance, we could insert b, a, b, a into the list of edge
mate connection between the highly geometric study           directions, since baba is a relation, or we could delete
of disks with minimal area in riemannian geometry            a trivial loop of the form a, a−1 . This contraction can
[I.3 §6.10](/part-01/fundamental-definitions) and the study of word problems, which            be given a more topological character if we turn our
                                                             Cayley graph into a two-dimensional complex by filling
seems to belong more to algebra and logic.
                                                             in each small loop with a face. Then the contraction of
   On the geometric side, the basic object of study is the
                                                             the original cycle consists in gradually moving it across
isoperimetric function Fill M (l) of a complete Rieman-
                                                             these small faces.
nian manifold M. Given any contractible closed path of
                                                                Thus, the difficulty of demonstrating that a word w
length l, there is a disk of minimal area that is bounded
                                                             equals the identity is intimately connected with the
by that path. The largest such area, over all closed paths
                                                             area of w, denoted Area(w), which can be thought of
of length l, is defined to be Fill M (l). Thus, the isoperi-
                                                             algebraically as the smallest sequence of relations you
metric function is the smallest function of which it is
                                                             need to insert and delete to turn w into the identity, or
true to say that every closed path of length l can be
                                                             geometrically as the smallest number of faces you need
filled by a disk of area at most Fill M (l).
                                                             to make a disk that fills the cycle represented by w.
   The image to have in mind here is that of a soap film:        The Dehn function δΓ : N → N bounds Area(w) in
if one twists a circular wire of length l in Euclidean       terms of the length |w| of the word w: δΓ (n) is the
space and dips it in soap, the film that forms has area at    largest area of any word of length at most n that equals
most l2 /4π , whereas if one performs the same experi-       1 in Γ . If the Dehn function grows rapidly, then the
ment in hyperbolic space [I.3 §6.6](/part-01/fundamental-definitions), the area of the film     word problem is hard, since there are short words that
is bounded by a linear function of l. Correspondingly,       are equal to the identity, but their area is very large,
the isoperimetric functions of En and Hn (and quo-           so that any demonstration that they are equal to the
tients of them by groups of isometries) are quadratic        identity has to be very long. Results bounding the Dehn
and linear, respectively. In a moment we shall discuss       function are called isoperimetric inequalities.
what types of isoperimetric functions arise when one            The subscript on δΓ is somewhat misleading since
considers other geometries (more precisely, compact          different finite presentations of the same group will
Riemannian manifolds).                                       in general yield different Dehn functions. This ambi-
  To state the filling theorem we need to think about         guity is tolerated because it is tightly controlled: if the
the algebraic side as well. Here, we identify a function     groups defined by two finite presentations are isomor-
that measures the complexity of a direct attack on the       phic, or just quasi-isometric, then the corresponding
word problem for an arbitrary finitely presented group        Dehn functions have similar growth rates. More pre-
Γ = A | R. If we wish to know whether a word w             cisely, they are equivalent, with respect to what is some-
equals the identity in Γ and do not have any further         times called the standard equivalence relation “≃” of
insight into the nature of Γ , then there is not much we     geometric group theory: given two monotone functions
can do other than repeatedly insert or remove the given      f , g : [0, \infty) → [0, \infty), one writes f  g if there exists a
relations r ∈ R.                                             constant C > 0 such that f (l) ⩽ Cg(Cl+C)+Cl+C for

446                                                                                     IV. Branches of Mathematics

all l ⩾ 0, and f ≃ g if f  g and g  f ; and one extends     exponential, for example that of
this relation to include functions from N to [0, \infty).
                                                                           a, b | aba−1 bab−1 a−1 b −2 .
  You will have noticed a resemblance between the
definitions of Fill M (l) and δΓ (n). The filling theorem        If the word problem for Γ is unsolvable, then δΓ (n)
relates them precisely: it states that if M is a smooth       will grow faster than any recursive function (indeed this
compact manifold, then Fill M (l) ≃ δΓ (l), where Γ is the     serves as a definition of such groups).
fundamental group π1 M of M.
  For example, since Z2 is the fundamental group of           9.2   The Word Problem and Geodesics
the torus T = R2 /Z2 , which has Euclidean geometry,          A closed geodesic on a Riemannian manifold is a loop
δZ2 (l) is quadratic.                                         that locally minimizes distance, such as a loop formed
                                                              by an elastic band when released on a perfectly smooth
9.1   What Are the Dehn Functions?                            surface. Examples such as the great circles on a sphere
                                                              or the waist of an hourglass show that manifolds may
We have seen that the complexity of word problems
                                                              contain closed geodesics that are null-homotopic: that
is related to the study of isoperimetric problems in
                                                              is, they can be moved continuously until they are
Riemannian and combinatorial geometry. Such insights
                                                              reduced to a point. But can one construct a compact
have, in the last fifteen years, led to great advances in
                                                              topological manifold with the property that no matter
the understanding of the nature of Dehn functions. For
                                                              what metric one puts on it there will always be infinitely
example, one can ask for which numbers ρ the func-
                                                              many such geodesics? (Technically, if you go around a
tion nρ is a Dehn function. The set of all such numbers,
                                                              geodesic loop n times, then you get a geodesic; we avoid
which can be shown to be countable, is known as the
                                                              this by counting only “primitive” geodesics.)
isoperimetric spectrum, denoted IP, and it is now largely
                                                                 From a purely geometric point of view this is a daunt-
understood.
                                                              ing problem: all specific metric information has been
   Following work by many authors, Brady and Brid-
                                                              stripped away and one has to deal with an arbitrary
son proved that the closure of IP is {1} ∪ [2, \infty). The
                                                              metric on the floppy topological object left behind. But
finer structure of IP was described by Birget, Rips,
                                                              group theory provides a solution: if the Dehn function
and Sapir in terms of the time functions of Tur-
                                                              of the fundamental group π1 M grows at least as fast as
ing machines. A further result by the same authors               n
                                                              22 , then in any Riemannian metric on M there will be
and Ol’shanskii explains how fundamental Dehn func-           infinitely many closed geodesics that are null-homotopic.
tions are to understanding the complexity of arbitrary        The proof of this is too technical to sketch here.
approaches to the word problem for finitely generated
groups Γ : the word problem for Γ lies in NP if and only if
                                                                    10 Which Groups Should One Study?
Γ is a subgroup of a finitely presented group with poly-
nomial Dehn function. (Here, NP is the class of prob-         Several special classes of groups have emerged from
lems in the famous “P versus NP” question: see compu-         our previous discussion, such as nilpotent groups,
tational complexity [IV.20 §3](/part-04/computational-complexity) for a description of           3-manifold groups, groups with linear Dehn functions,
this class.)                                                  and groups with a single defining relation. Now we shall
  The structure of IP raises an obvious question: What        change viewpoint and ask which groups present them-
can one say about the two classes of groups singled out       selves for study as we set out to explore the universe of
as special—those with linear Dehn functions and those         all finitely presented groups, starting with the easiest
with quadratic ones? The true nature of the class of          ones.
groups with a quadratic Dehn function remains obscure            The trivial group comes first, of course, followed by
for the moment but there is a beautifully definitive           the finite groups. Finite groups are discussed in vari-
description of those with a linear Dehn function: they        ous other places in this volume, so I shall ignore them
are the word hyperbolic groups, which we shall discuss        in what follows and adopt the approach of large-scale
in the next section.                                          geometry, blurring the distinction between groups that
  Not all Dehn functions are of the form nα : there           have a common subgroup of finite index.
are Dehn functions such as nα log n, for example,                The first infinite group is surely Z, but what comes
and others that grow more quickly than any iterated           next is open to debate. If one wants to retain the

IV.10.   Geometric and Combinatorial Group Theory                                                                    447

safety of commutativity, then finitely generated Abe-           the classical sense of differential geometry) tends to
lian groups come next. Then, as one slowly relin-              −\infty. This is captured by the fact that triangles look
quishes commutativity and control over growth and              increasingly degenerate: there is a constant δ(n), with
construct i bility, one passes through the progressively         δ(n) → 0 as n → \infty, such that any side of a triangle in
larger classes of nilpotent, polycyclic, solvable, and ele-    the scaled hyperbolic space (H2 , (1/n)d) is contained
mentary amenable groups. We have already met nil-              in the δ(n)-neighborhood of the union of the other two
potent groups in our discussion of Gromov’s polyno-            sides. More colloquially, triangles in H2 are uniformly
mial-growth theorem. They crop up in many contexts as          thin and get increasingly thin as one rescales the metric.
the most natural generalization of Abelian groups and             With this picture in mind, one might move a little
much is known about them, not least because one can            away from trees by asking which groups have Cayley
prove a great deal by induction on the k for which they        graphs in which all triangles are uniformly thin. (It
are k-step nilpotent. One can also exploit the fact that       makes little sense to specify the thinness constant δ
G is built from the finitely generated Abelian groups           since it will change when one changes generating set.)
Gi /Gi+1 in a very controlled way. The larger class of         The answer is Gromov’s hyperbolic groups. This is a
polycyclic groups is built in a similar way, while finitely     fascinating class of groups that has many equivalent
generated solvable groups are built in a finite number          definitions and arises in many contexts. For example,
of steps from Abelian groups that need not be finitely          we have already met it as the class of groups that have
generated. This last class is not only larger but wilder;      linear Dehn functions. (It is not at all obvious that these
the isomorphism problem is solvable among polycyclic           two definitions are equivalent.)
groups, for example, but unsolvable among solvable                Gromov’s great insight is that because the thin-tri-
groups. By definition a group G is solvable if its derived      angles condition encapsulates so much of the essence
series, defined inductively by G(n) = [G(n−1) , G(n−1) ]        of the large-scale geometry of negatively curved mani-
with G(0) = G, terminates in a finite number of steps.          folds, hyperbolic groups share many of the rich proper-
   The concept known as amenability forms an impor-            ties enjoyed by the groups that act nicely by isometries
tant link between geometry, analysis, and group theory.        on such spaces. Thus, for example, hyperbolic groups
Solvable groups are amenable but not vice versa. It is         have only finitely many conjugacy classes of finite sub-
not quite the case that a finitely presented group is           groups, contain no copy of Z2 , and (after accounting
amenable if and only if it does not contain a free sub-        for torsion) have compact classifying spaces. Their con-
group of rank 2, but for a novice this serves as a good        jugacy problems can be solved in less than quadratic
rule of thumb.                                                 time, and Sela showed that one can even solve the
   Now, let us return to Z in a more adventurous frame         isomorphism problem among torsion-free hyperbolic
of mind, throw away the security of commutativity, and         groups. In addition to their many fascinating proper-
start taking free products instead. In this more liber-        ties and natural definition, a further source of interest
ated approach, finitely generated free groups appear            in hyperbolic groups is the fact that in a precise sta-
after Z as the first groups in the universe. What comes         tistical sense, a random finitely presented group will be
next? Thinking geometrically, we might note that free          hyperbolic.
groups are precisely those groups that have a tree as a           Spaces of negative and nonpositive curvature have
Cayley graph and then ask which groups have Cayley             played a central role in many branches of mathemat-
graphs that are tree-like.                                     ics in the last twenty years. There is no room even to
   A key property of a tree is that all of its triangles are   begin to justify this assertion here but it does guide us
degenerate: if you take any three points in the tree and       in where to look for natural enlargements of the class
join them by shortest paths, then every point in one           of hyperbolic groups: we want nonpositively curved
of these paths is contained in at least one other path         groups, defined by requiring that their Cayley graphs
as well. This is a manifestation of the fact that trees        enjoy a key geometric feature that cocompact groups
are spaces of infinite negative curvature. To get a feel-       of isometries inherit from simply connected spaces of
ing for why, consider what happens when one rescales           nonpositive curvature (“CAT(0) spaces”). But in con-
the metric on a space of bounded negative curvature            trast to the hyperbolic case, the class of groups that one
such as the hyperbolic plane H2 . If we replace the stan-      obtains varies considerably when one perturbs the def-
dard distance function d(x, y) by (1/n)d(x, y) and             inition, and delineating the resulting classes and their
let n tend to \infty, then the curvature of this space (in          (rich) properties has been the subject of much research.

