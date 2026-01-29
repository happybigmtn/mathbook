# Mathematical Biology

VII.2.   Mathematical Biology                                                                                       837

uses all available information; it is related to the prob-   Hyde, S., S. Andersson, K. Larsson, Z. Blum, T. Landh, S.
lem of reconstructing a 3 D structure from a 2 D projec-         Lidin, and B. W. Ninham. 1997. The Language of Shape.
tion. The operation has been fully described and is now        The Role of Curvature in Condensed Matter: Physics,
available in Mathematica.                                      Chemistry and Biology. Amsterdam: Elsevier.
                                                             Parr, R. G., and W. Yang. 1989. Density-Functional Theory of
   The generalized inverse also enables one to handle
                                                               Atoms and Molecules. Oxford: Oxford University Press.
redundant axes in quasicrystals, but usually the inter-
                                                             Thomas, J. M. 2003. Poetic suggestion in chemical science.
esting problems are nonlinear. Other inverse problems          Nova Acta Leopoldina NF 88:109–39.
include the following.                                       Wales, D. J. 2004. Energy Landscapes. Cambridge: Cam-
                                                               bridge University Press.
  (i) Finding the arrangement of atoms that gives rise       Wells, A. F. 1984. Structural Inorganic Chemistry. Oxford:
      to the observed scattering patterns of X-rays or         Oxford University Press.
      electrons from a crystal.                              Wolfram, S. 2002. A New Kind of Science. Champaign, IL:
 (ii) Reconstructing a 3 D image from 2 D projections in         Wolfram Media.
      microscopy or X-ray tomography.
(iii) Reconstructing the geometry of a molecule given
      probable interatomic distances (and perhaps bond
                                                             VII.2 Mathematical Biology
      angles and torsion angles).                                     Michael C. Reed
(iv) Finding the way in which a protein molecule folds
                                                                                 1    Introduction
      to give an active site, given the sequence of con-
      stituent amino acids.                                  Mathematical biology is an extremely large and diverse
 (v) Finding the pathway to producing a molecule syn-        field. It studies objects ranging from molecules to glob-
      thet ically, given that it occurs in nature.            al ecosystems and the mathematical methods come
(vi) Finding the sequence of rules that generate a mem-      from many of the subdisciplines of the mathematical
      brane or a plant or another biological object, given   sciences: ordinary and partial differential equations,
      that it takes a certain shape.                         probability theory, numerical analysis, control theory,
                                                             graph theory, combinatorics, geometry, computer sci-
  Some questions of this type do not have unique an-         ence, and statistics. The most that one short article can
swers. For example, the classic question as to whether       do is to illustrate by selected examples this diversity
the shape of a drumhead can be determined from its           and the range of new mathematical questions that arise
vibration spectrum (can you hear the shape of a drum?)       naturally in the biological sciences.
has been answered in the negative: two vibrating mem-
branes with different shapes may have the same spec-
                                                                            2   How Do Cells Work?
trum. It was thought that this ambiguity might also be
the case for crystal structures. Linus Pauling suggested     From the simplest point of view, cells are large bio-
that there might be two different crystal structures that     chemical factories that take inputs and manufacture
were homometric (that is, giving the same diffraction         lots of intermediate products and outputs. For exam-
pattern), but no definite example has been found.             ple, when a cell divides, its DNA must be copied
                                                             and that requires the biochemical synthesis of large
                    5   Conclusion                           numbers of adenine, cytosine, guanine, and thymine
                                                             molecules. Biochemical reactions are usually catalyzed
As the examples in this article show, mathematics and        by enzymes, proteins that facilitate a reaction but are
chemistry have a symbiotic relationship, with develop-       not used up by it. Consider, for example, a reaction in
ments in one often stimulating advances in the other.        which chemical A is converted to chemical B with the
Many interesting problems, including several that we         help of an enzyme E. If a(t) and b(t) are the respec-
have mentioned here, are still waiting to be solved.         tive concentrations of A and B at time t, then one typi-
                                                             cally writes down a differential equation for b(t), which
Further Reading
                                                             takes the form
Cotton, F. A. 1990. Chemical Applications of Group Theory.
                                                                          b (t) = f (a, b, E) + · · · − · · · .
  New York: Wiley Interscience.
Hollas, J. M. 2003. Modern Spectroscopy. New York: John      Here, f is the rate of production, which typically
  Wiley.                                                     depends on a, b, and E. Of course B may be produced

838                                                                                VII. The Influence of Mathematics

by other reactions (which would lead to additional pos-       mechanism that is not even in our network. The enzyme
itive terms + · · · ) and may be used as a substrate itself   E is a protein produced by the cell via instructions from
in still other reactions (which would lead to additional      a gene. It turns out that sometimes the concentration
negative terms − · · · ). So, given a particular cell func-   of free E inhibits the messenger RNA that codes for
tion or biochemical pathway, we can just write down           the production of E itself. Then, if we introduce X and
the appropriate set of nonlinear coupled ordinary dif-        reduce free E, the inhibition is removed and the cell
ferential equations for the chemical concentrations and       automatically increases its rate of production of E, thus
solve it by hand or by machine computation. However,          raising the amount of free E and with it raising the
this straightforward approach is often unsuccessful.          reaction rate f .
First of all, there are a lot of parameters (and variables)      This illustrates a fundamental difficulty in study-
in these equations and measuring them in the context          ing cell biochemistry, indeed a difficulty in studying
of real living cells is difficult. Second, different cells       many biological systems. These systems are very large
behave differently and may have different functions, so         and very complex. To gain understanding, it is natural
we would expect the parameters to be different. Third,         to concentrate on particular relatively simple subsys-
cells are alive and change what they are doing, so the        tems. But one always has to be aware that the subsys-
parameters may themselves be functions of time. But           tems exist in a larger context that may contain vari-
the greatest difficulty is that the particular pathway          ables (excluded by the simplification) that are crucial
under study is not really isolated. Rather, it is embed-      for understanding the behavior and biological function
ded in a much larger system. How do we know that our          of the subsystem itself.
model system will continue to behave in the same way             Although cells exhibit remarkable homeostasis, they
when embedded in this larger context? We need new             also undergo spectacular changes. For example, cell
theorems in dynamical systems that answer questions           division requires unzipping of the DNA, synthesis of
such as this, not for general “complex systems” but for       two new complementary strands, the movement apart
the particular kinds of complex systems that arise in         of the two new DNAs, and the pinching off of the
important biological problems.                                mother cell to produce two daughters. How does a cell
   Cells continue to accomplish many basic tasks even         do all this? In the case of yeast cells, which are compar-
though their environments (i.e., their inputs) are con-       atively simple, the actions of the biochemical pathways
stantly changing. A brief example of this phenomenon,         are quite well understood, partly because of the mathe-
which is known as homeostasis, will illustrate the prob-      matical work of John Tyson. But as our brief discussion
lem of “context.” Let us suppose that the chemical reac-      makes clear, biochemistry is not all there is to cell divi-
tion above is one step in the pathway for making the          sion; an important additional feature is motion. Materi-
thymines necessary for cell division. If the cell is a can-   als are being transported all the time through out cells
cer cell, we would like to turn off this pathway, and a        from one specific place to another (so their motion is
reasonable way to try to do this would be to put into the     not just diffusion), and indeed, cells themselves move.
cell a compound X that binds to E, thereby reducing the       How does this happen? The answer is that materials
amount of free enzyme available to make the reaction          are transported by special molecules called molecular
run. Two homeostatic mechanisms immediately come              motors that turn the energy of chemical bonds into
into play. First, a typical reaction is inhibited by its      mechanical force. Since bonds are formed and broken
product: that is, f decreases as b increases. This makes      stochastically (that is, some randomness is involved),
biological sense because it ensures that B is not over-       the study of molecular motors leads naturally to new
produced. So, when the amount of free E is reduced and        questions in stochastic ordinary and partial dif-
the rate f declines, the resulting decrease in b drives       ferential equations [IV.24](/part-04/stochastic-processes). A good introduction to
the rate up again. Second, if the rate f is lower than        the mathematics of cell biology is Fall et al. (2002).
usual, the concentration a typically rises since A is not
being used up as quickly, which also drives the rate
                                                                                   3   Genomics
f up again since f increases as a increases. Given the
network in which A and B are embedded, one can imag-          To understand the mathematics that was involved in
ine calculating how much f will drop if we put a cer-         sequencing the human genome it is useful to start with
tain amount of X into the cell. In fact, f may drop even      the following simple question. Suppose that we cut up a
less than we calculate because of another homeostatic         line segment into smaller segments and are presented

VII . $2$ .

Mathematical Biology

with the pieces. If we are told the order in which the pieces came in the original segment, then we can put them back together and reconstruct the segment. In general, since there are many possible orders, we cannot reconstruct the segment without extra information of this kind. Now suppose that we have cut up the segment in two different ways. Think of the line segment as an interval I of real numbers, and let the pieces be $A^{1}$ , $A^{2}$ , . . . , A r when you cut it up the first way, and $B^{1}$ , $B^{2}$ , . . . , B s when you cut it up the other way.
That is, the sets A i form a partition of the interval I into subintervals, and the sets B j form another partition. For simplicity, assume that no A i shares an endpoint with any B j , except for the two endpoints of I itself. Suppose that we know nothing about the order in which the pieces A i and B j come in I. In fact, suppose that all we know about them is which A i overlap with which B j : that is, which of the intersections A i ∩ B j are nonempty. Can we use this information to work out the original order of the pieces A i and thereby reconstruct the interval I (or its reflection) ?
The answer will sometimes be yes and sometimes no. If it is yes, then we would like to find an efficient algorithm for doing the reconstruction, and if it is no, then we would like to know how many different reconstructions are consistent with the given information. This so-called restriction mapping problem is really a problem in graph theory [III.34] : the vertices of the graph correspond to the sets A i or B j , and there is an edge between A i and B j if A i ∩ B j    =  ∅.
A second problem is whether we can find the original order of the A i (or the B j) if what we are told is the length of each set A i and each set B j , and the set of all the lengths of the intersections A i ∩ B j . The catch is that we are not told which length corresponds to which intersection. This is called the double digest problem. Again one would like to be able to tell when there is only one solution, or to place an upper bound on the number of possible reconstructions if there is more than one.
Human DNA is, for our purposes here, a word of length approximately $3 \times 10^{9}$ over $a$ four-letter alphabet A,  G, C, T. That is, it is a sequence of length $3 \times 10^{9}$ in which each entry is A, G, C, or T. In the cell, the word is bound letter by letter to the “complementary” word, which is determined by the rule that A can only be bound to T, and C can only be bound to G. (For example, if the word is ATTGATCCTG, then the complementary word is TAACTAGGAC .) In this brief discussion we will ignore the complementary word.

$839$

Since DNA is so long (it would be approximately two meters if one stretched it out into a straight line) it is very hard to handle experimentally, but the sequence of letters in short segments of approximately five hundred letters can be determined by a process called gel chromatography. There are enzymes that cut DNA wherever specific very short sequences occur.
So if we digest a DNA molecule with one of these enzymes and digest another copy with a different enzyme, we can hope to determine which fragments from the first digestion overlap fragments from the second digestion and then use techniques from the restriction mapping problem to reconstruct the original DNA molecule. The interval I corresponds to the whole DNA word, and the sets A i to the fragments. This involves sequencing and comparing the fragments, which has its own difficulties.
However, lengths of fragments are not so hard to determine, so another possibility is to digest with the first enzyme and measure lengths, digest with the second and measure lengths, and finally digest with both and measure lengths. If one does this, then the problem one obtains is essentially the double digest problem. To completely reconstruct the DNA word one takes many copies of the word, digests with enzymes, and selects at random enough fragments that together they have a high probability of covering the word.
Each of the fragments is cloned, in order to get enough mass, and then sequenced by gel chromatography. Both processes can introduce errors, so one is left with a very large number of sequenced fragments with known error rates for the letters. These need to be compared to see if they overlap: that is, to see if the sequence near the end of one fragment is the same as (or very similar to) the sequence at the beginning of another. This alignment problem is itself difficult because of the large number of possibilities involved.
So, in the end we have a very large restriction mapping problem except that we can only say that given fragments overlap with probabilities that are themselves hard to estimate. A further difficulty is that DNA tends to have large blocks that repeat in different parts of the word. As a result of these complications, the problem is much harder than the restriction mapping problem described earlier. It is clear that graph theory, combinatorics, probability theory, statistics, and the design of algorithms all play central roles in sequencing a genome.
Sequence alignment is important in other problems as well. In phylogenetics (see below) one would like a way of saying how similar two genes or genomes

840                                                                                VII. The Influence of Mathematics

are. When studying proteins, one can sometimes pre-           do, they must be able to sense the environment and
dict protein three-dimensional structure by searching         signal the DNA to change the protein content of the
databases for known proteins with the most similar            cell. Thus, while sequencing DNA and understanding
amino acid sequence. To illustrate how complex these          specific biochemical reactions are important first steps
problems are, consider a sequence {ai }1000    i=1 of one     in understanding cells, the hard and interesting work
thousand letters from our four-letter alphabet. We wish       to come is to understand networks of genes and bio-
to say how similar it is to another sequence {bi }1000 i=1 .
                                                              chemical reactions. It is these networks, in which pro-
Naively, one could just compare ai with bi and define          teins control genes and genes control proteins, that
                                         
a metric [III.56](/part-03/metric-spaces) like d({ai }, {bi }) = δ(ai , bi ). How-    carry out and control specific cellular functions. The
ever, DNA sequences have evolved typically by inser-          mathematics will be ordinary differential equations for
tions and deletions as well as by substitutions. Thus         chemical concentrations and variables that indicate to
if the sequence ACACAC · · · lost its first C to become        what extent a gene is turned on. Since transport into
AACAC · · · , the two sequences would be very far apart       and out of the nucleus occurs, partial differential equa-
in this metric even though they are very similar and          tions will be involved. And, finally, since some of the
related in a simple way. The way around this difficulty         molecular species occur in very small numbers, con-
is to allow sequences to include a fifth symbol, –, which      cent ration (molecules per unit volume) may not be a
stands for the place of a deletion or a place opposite an     useful approximation for computations about chem-
insertion. Thus, given two sequences (of perhaps dif-         ical binding and dissociation: they are probabilistic
ferent lengths), we wish to find how they can be aug-          events.
mented with dashes to give the minimum possible dis-             Two kinds of statistical data can give hints about
tance between them. A little thought will convince the        the components of these gene networks. First, there
reader that it is not feasible to use a brute-force search    are large numbers of population studies that corre-
for a problem like this, even for the fastest computers—      late specific genotypes to specific phenotypes (such as
there are so many potential augmentations that the            height, enzyme concentration, cancer incidence). Sec-
search would take far too long. Serious and thought-          ond, tools known as microarrays allow us to measure
ful algorithm development is required. Two excellent          the relative amounts of a large number of different mes-
introductions to the material discussed in this section       senger RNAs in a group of cells. The amount of RNA
are Waterman (1995) and Pevzner (2000).                       tells us how much a particular gene is turned on. Thus,
                                                              microarrays allow us to find correlations that may indi-
           4   Correlation and Causality                      cate that certain genes are turned on at the same time
                                                              or perhaps in a sequence. Of course, correlation is not
The central dogma of molecular biology is DNA →               causality and a consistent sequential relationship is
RNA → proteins. That is, information is stored in DNA,        not necessarily causal either (sure, football causes win-
it is transferred out of the nucleus by RNA, and the RNA      ter, a sociologist once said). Real biological progress
is then used in the cell to make proteins that carry out      requires understanding the gene networks discussed
the work of the cell through the metabolic processes          above; they are the mechanisms by which the genotypes
discussed in section 2. Thus DNA directs the life of the      play out in the life of the cell.
cell. Like most things in biology, the true situation is         A nice discussion of the relationship between popu-
much more complicated. Genes, which are segments of           lation correlations and mechanisms occurs in Nijhout
DNA that code for the manufacture of particular pro-          (2002), from which we take the following simple exam-
teins, are sometimes turned on and sometimes turned           ple. Most phenotypic traits depend on many genes; sup-
off. Usually, they are partially turned on; that is, the       pose that we consider a trait that depends on only two
protein they code for is manufactured at some inter-          genes. Figure 1 depicts a surface that shows how the
mediate rate. This rate is controlled by the binding (or      trait in an individual depends on how much each of
lack of binding) of small molecules or specific proteins       the genes is turned on. All three variables are scaled
to the gene, or to the RNA that the gene codes for. Thus      from 0 to 1. Suppose that we study a population whose
genes can produce proteins that inhibit (or excite) other     members have a genetic makeup that puts the individ-
genes; this called a gene network.                            uals near the point X on the graph. If we do a statistical
   In a way, this was obvious all along. If cells can         analysis of the population, we will find that gene B is
respond to their environments by changing what they           highly statistically correlated to the trait, but gene A is

VII . $2$ .

Mathematical Biology

$1$ . $00$ . $80$ . $6$

Trait

$0$ . $4$

Y

$X_{1}$ . $00$ . $20$ . $80$ . $60$ . $4$ Gene $B1$ . $00$ . $80$ . $60$ . $20$ . $4$

Gene $A_{0}$ . $2$

Figure $1 A$ phenotypic surface.

not. On the other hand, if the individuals in the population all live near the point Y on the surface, we will discover in our population study that gene A is highly statistically correlated to the trait, but gene B is not. More detailed examples with specific biochemical mechanisms are discussed in Nijhout’s paper. Similar examples can be given for microarray data. This does not mean that population studies or microarray data are unimportant.
Indeed, in studying hugely complex biological systems, statistical information can suggest where to look for the mechanisms that will ultimately give biological understanding.

$5$

The Geometry and Topology

of Macromolecules

To illustrate the natural geometric and topological questions that arise when one studies macromolecules, we will briefly discuss molecular dynamics, proteinprotein interactions, and the coiling of DNA. Genes code for the manufacture of proteins, which are large molecules made up of sequences of amino acids. There are twenty amino acids, each coded by a triplet of base pairs, and a typical protein might have five hundred amino acids. Interactions among the amino acids cause the protein to fold up into a complicated three dimensional shape.
This three-dimensional structure is crucial for the function of the protein since the exposed groups and the nooks and crannies in the shape govern the possible chemical interactions with small molecules and other proteins. Three-dimensional structures of

$841$

proteins can be approximately determined by X-ray crystallography and nontrivial inverse scattering calculations. The forward problem--namely, given the sequence of amino acids, predict the three-dimensional structure of the protein--is important not only for understanding existing proteins, but also for the pharmacological design of new proteins to accomplish specific tasks. Thus, in the past twenty years a large field called molecular dynamics has arisen, in which one uses classical mechanical methods. Suppose we have a protein that consists of N atoms.
Let x i denote the position (specified by three real coordinates) of the ith atom, and let x denote the vector formed from all these coordinates (which belongs to $R^{3N}$ ). For each pair of atoms, one attempts to write down a good approximation to the potential energy, E i, j (x i , x j), due to their pairwise interaction. This could be the electrostatic interaction, for example, or the van der Waals interaction, which is a classical mechanical formulation of quantum effects.
The total potential energy is E (x) ≡ E i, j (x i , x j) and Newton’s equations of motion take the form v̇ $= - \nablaE(x)$ , ẋ $= v,$ where v is the vector of velocities. Starting with some initial conditions one can try to solve these equations to follow the dynamics of the molecule. Note that this is a very high-dimensional problem. A typical amino acid has twenty atoms, so that is sixty coordinates right there, and if we are looking at a protein made up of five hundred amino acids, then x will be a vector with thirty thousand coordinates.
Alternatively, one could assume that the protein will fold to the configuration that has the minimum potential energy. Finding this configuration would mean finding the roots of $\nabla$ E (x), by newton’s method [II.4](/part-02/algorithms) say, and then checking to see which root gives the lowest energy. Again this is an enormous computational task. It is not surprising that molecular dynamics calculations have been only moderately successful and have predicted the shapes of only relatively small molecules and proteins.
The numerical problems are substantial and the choice of energy terms is somewhat speculative. Even more importantly, context matters, as it does in many biological problems. The way proteins fold depends on properties of the solution in which they sit. Many proteins have several preferred configurations and switch from one to the other depending on interactions with small molecules or other proteins. Finally, it has recently been discovered that proteins do

842                                                                             VII. The Influence of Mathematics

not fold up by themselves from their linear configura-       several in the other. This gives a way of using geometry
tion to their three-dimensional shape, but are helped       to classify the nature of the particular protein–protein
and guided by other proteins called chaperones. It is       interaction.
natural to ask whether there are quantifiable geometri-        Finally, let us touch on questions involving the pack-
cal units larger than points (atoms) that could reason-     aging of DNA. The basic problem is easy to see. As
ably form the basis for a good approximation to the         mentioned earlier, the human DNA double helix when
dynamics of large molecules.                                stretched out linearly is about two meters long. A typ-
   A start has been made in this direction by research      ical cell has a diameter of about one-hundredth of a
groups studying the interactions of proteins with small     millimeter and its nucleus has a diameter of about one-
molecules and other proteins. These interactions are        third that size. All of that DNA has to be packed into
fundamental to cell biochemistry, cell-transport pro-       the nucleus. How is this done?
cesses, and cell signaling, and so progress is vital to       At least the first stages are well understood. The
understanding how cells work. Suppose one has two           DNA double helix is wound around proteins called his-
large proteins that are bound to each other. The first       tones, which consist of about two hundred base pairs
thing one would like to do is describe the geometry of      each, yielding chromatin, which is a sequence of such
the binding region. One could do this as follows. Con-      DNA-wrapped histones connected by short segments
sider an atom in either protein that is at point x. Given   of DNA. Then the chromatin is itself wrapped up and
another atom at point y, there is a plane that divides      compacted; the geometrical details are not completely
R3 into two open half-spaces: the points closer to x        understood. It is important to understand the packing
and the points closer to y. Now let Rx denote the inter-    and the mechanisms that create it, because the life of
section of all such open half-spaces as y ranges over       the cell requires unpacking! When the cell divides, the
the positions of all other atoms: that is, Rx consists      entire DNA helix must be unzipped to form two sepa-
of those points that are closer to x than to any other      rate strands, which are the templates on which the two
                                        "
atom. The union of the boundaries, x ∂(Rx ), called         new copies of DNA will be built. Clearly this cannot be
a Voronoi surface, consists of triangles and pieces of      done all at once but must involve local unwinding of
planes and has the property that each point on the sur-     the DNA off the histones, local unzipping, synthesis,
face is equidistant from at least two atom positions.       and then local repacking.
To model the binding region between the two proteins,         It is equally challenging to understand the sequence
we discard all pieces of the Voronoi surface that are       of events that occurs when a protein is synthesized
equidistant from two atoms that belong to the same          from a gene. Transcription factors diffuse into the
protein and keep just the ones that are equidistant         nucleus and bind to specific short segments of DNA
from two atoms that are in different proteins. This sur-     (of about ten base pairs) in the regulatory region of
face goes off to infinity, so we clip off the parts that       the gene. Of course, they will randomly bind wher-
are not “close” to either protein. The result is a sur-     ever they see the same segment. Typically, one needs
face with a boundary made up of polyhedral faces that       the binding of several different transcription factors
is a reasonable approximation of the interaction inter-     in the regulatory region along with RNA polymerase
face between the two proteins. (This is not quite an        to start transcription of a gene. That process involves
accurate description: in the actual construction, “dis-     the unwinding of the gene-coding region from the his-
tance” is weighted in a way that depends on the atoms       tones so that it can be transcribed, the transport of the
involved.) Now choose colors representing the twenty        resulting RNA out of the nucleus, and the recompact-
amino acids and color each side of each polyhedral          ification of the DNA. To understand these processes
piece with the color of the amino acid that the clos-       fully, one will have to solve problems in partial differ-
est atom is in. This divides each side of the surface       ential equations, geometry, combinatorics, probability
into large colored patches corresponding to nearness        theory, and topology. De Witt Sumners is the mathe-
of a particular amino acid on that side. The coloring       matician who brought the topological problems in the
of the two sides of the boundary surface will be differ-     study of DNA (links, twists, knots, supercoiling) to the
ent, of course, and the placement of the patches gives      attention of the mathematics community. A good ref-
information about which amino acids in one protein are      erence for molecular dynamics and the general math-
interacting with which amino acids in the other. In par-    ematical issues posed by biological macromolecules is
ticular, one amino acid in one protein may interact with    Schlick (2002).

VII . $2$ .

Mathematical Biology

$6$

Physiology

When one first studies human physiological systems, they seem almost miraculous. They accomplish enormous numbers of tasks simultaneously. They are robust but capable of quick changes if the situation warrants. They are made up of large numbers of cells that actively cooperate so that the tasks of the whole can be done. It is the nature of many of these systems that they are complex, controlled by feedback, and integrated with each other. It is the job of mathematical physiology to understand how they work.
We will illustrate some of these points by discussing problems in biological fluid dynamics. The heart pumps blood through out a circulatory system that consists of vessels of diameter as large as $2$ . $5cm$ (the aorta) and as small as $6 \times 10 - 4 cm$ (the capillaries). Not only are the vessels flexible, but many are surrounded by muscle and can contract to exert local force on the blood. The main force-generating mechanism (the heart !) is approximately periodic, but the period can change. The blood itself is a very complicated fluid. About $40$ % of its volume is made up of cells:
red blood cells carry most of the oxygen and C$O^{2}$ ; white blood cells are immune system cells that hunt bacteria; and platelets are part of the blood clotting process. Some of these cells have diameters that are larger than the smallest capillaries, which raises the nice question of how they get through. You notice that we are very far away from most of the simplifying assumptions of classical fluid dynamics. Here is an example of a circulatory-system question. In a significant number of people, the mitral valve, which is the inflow valve to the left side of the heart, becomes defective.
It is common to replace the valve by an artificial one and this leads to an important question: how should one design the artificial valve so that the resulting flow in the left heart chamber has as few stagnant points as possible, since clots tend to form at these points? Charles Peskin did the pioneering work on this problem. Here is another question. The white blood cells are not carried in the middle of the fluid but tend to roll along the walls. Why do they do that?
It is a good thing that they do, because their job is to sniff out inflammation outside the blood vessel and, when they find it, to stop and burrow through the blood vessel wall to get to the inflamed site. Another circulatory fluid dynamics question is discussed in section $10$ . The circulatory system is connected to many other systems. The heart has its own pacemaker cells, but its

$843$

frequency of contraction is regulated by the autonomic nervous system. Through the baroreceptor reflex, the sympathetic nervous system tightens blood vessels to avoid a dramatic drop in blood pressure when we stand. Overall average blood pressure is maintained by a complicated regulatory feedback mechanism involving the kidneys. It is worthwhile remembering that all these things are being accomplished by living tissues whose parts are always decaying and being replaced.
For example, the gap junctions that transmit current at very low resistance between heart muscle cells have a half-life of approximately one day. As a final example, we consider the lung, which has a fractal branching structure that terminates after twenty-three levels in about $600$ million air sacs called alveoli, in which oxygen and C$O^{2}$ are exchanged with the circulating blood. The Reynolds number of the air flow varies by about three orders of magnitude between the large vessels near the throat and the tiny vessels near the alveoli.
Premature infants often have respiratory difficulty because they lack surfactants that reduce surface tension on the inner surfaces of the alveoli. The high surface tension makes the alveoli collapse, which makes breathing difficult. One would like the infants to breathe in air that includes tiny aerosol drops of surfactant. How small should the drops be so that as much surfactant as possible makes it to the alveoli? The mathematics of physiology consists mostly of ordinary and partial differential equations. However, there is a new feature: many of these equations have time delays.
For example, the rate of respiration is controlled by a brain center that senses the C$O^{2}$ content of blood. It takes almost fifteen seconds for blood to go from the lungs to the left heart and from there to the brain center. This time delay is even longer in patients with weak hearts and often these patients display Cheyne-Stokes breathing: very rapid breathing alternates with periods of little or no breathing. Such oscillations in control systems are well-known as the time delay gets longer.
Since partial differential equations are often involved, new mathematical results are needed that go well beyond the standard theory of ordinary differential equations with delay, which was initiated by Bellman in the $1950s$ . An excellent reference for the applications of mathematics to physiology is Keener and Sneyd ( 1998 ).

$7$

What’s Wrong with Neurobiology?

The short answer is that there is not enough theory. This may seem an odd thing to say, since neurobiology

844                                                                             VII. The Influence of Mathematics

is the home of the Hodgkin–Huxley equations, which          as pattern recognition and decision making, or could
are often cited as a triumph of mathematics in biol-        exhibit certain “psychological” properties (Grossberg
ogy. In a series of papers in the early 1950 s, Hodgkin      1982). He also asked how these networks could be
and Huxley described several experiments, and gave a        trained. At about the same time it was shown that net-
theoretical basis for explaining them. Building on the      works of neuron-like elements connected in the right
work of physicists and chemists (for example, Wal-          way could automatically compute good solutions of
ter Nernst, Max Planck, and Kenneth Cole), they dis-        large, difficult problems like the traveling salesman
covered the relationship between certain ionic con-         problem [VII.5 §2](/part-07/the-mathematics-of-algorithm-design). These and other factors, including
ductances and the trans-membrane electrical potential,      the great interest in software engineering and artificial
v(x, t), in the axons of neurons, and they formulated       intelligence, led to the emergence of a large community
a mathematical model:                                       of researchers studying “neural networks.” The mem-
              ∂v     ∂2 v                                    bers of this community were mostly computer scien-
                 = α 2 + g(v, y1 , y2 , y3 ),
              ∂t     ∂x                                     tists and physicists, so it was natural for them to con-
             ∂yi                                            centrate on the design of devices, rather than biology.
                 = fi (v, yi ), i = 1, 2, 3.
              ∂t                                            This was noticed, of course, by experimental neurobi-
Here the yi are related to the membrane conduc-             ologists, who lost interest in collaborating with these
tances of various ions. The equations have solutions        theorists.
that are pulses that keep their shape and travel at            This brief history is of course an over simplification.
constant velocity in a way that corresponds to the          There are mathematicians (and physicists and com-
observed behavior of action potentials in real neurons.     puter scientists) who are essentially theoreticians for
The ideas, both explicit and implicit, in these discover-   neuroscience. Some of them work on hypothetical net-
ies form the basis of much single-neuron physiology.        works, typically either very small networks or networks
Of course, mathematicians should not be too proud           with strong homogeneity properties, to discover what
about this since Hodgkin and Huxley were biologists.        are the emergent behaviors of the systems. Others work
The Hodgkin–Huxley equations were part of the stim-         on modeling real physiological neural networks, often
ulus for interesting work by mathematicians on travel-      collaboratively with biologists. Usually, the models con-
ing waves and pattern formation in reaction–diffusion        sist of ordinary differential equations for the firing
equations.                                                  rates of the individual neurons or mean-field models
  However, not everything can be explained at the level     that involve integral equations. These mathematicians
of just one neuron. Watch your hand as it reaches out       have made real contributions to neurobiology.
gracefully to pick up an object. Think about the so-           But much more is needed, and to see why, it is use-
called ocular–vestibular reflex in which motions of the      ful to think about just how difficult these problems
head are automatically compensated for by motions           really are. First, there is no one-to-one correspondence
of the eyes so that your gaze can remain fixed. Con-         between the cells of the central nervous system in dif-
sider the fact that you are looking at stereotypical        ferent members of the same species (except in spe-
black marks on a page and they mean something inside        cial cases like C. elegans). Second, neurons in the same
your head. These are system properties, and the sys-        animal differ widely in their anatomy and physiology.
tems are large indeed. There are approximately 1011         Third, the details of a particular network may well
neurons in the central nervous system and on average        depend on the life history of the animal. Fourth, most
each makes about one thousand connections to other          neurons are somewhat unreliable devices in that they
neurons. These systems will not be understood just          give different outputs under repeated trials with the
by examining their parts (the neurons) and, for obvi-       same input. Finally, one of the prime characteristics of
ous reasons, experimentation is limited. Thus, experi-      neural systems is that they are plastic, adaptable, and
mental neurobiology, like experimental physics, needs       ever changing. After all, if you remember anything of
input from deep and imaginative theorists.                  what is written here, then your head is different from
  The lack of a large theory community interacting          when you began. Between the level of the single neuron
robustly with experiment a lists is to some extent a          and the psychological level, there are probably twenty
historical accident. Grossberg asked how groups of          levels of networks, each network feeding into and being
(quite simple) model neurons, if they were connected        controlled by networks at other levels. The mathemat-
in the right ways, could accomplish various tasks such      ical objects that will enable us to classify, analyze, and

VII.2.   Mathematical Biology                                                                                     845

understand how this all works have probably not yet         like to understand the emergent behavior on the large
been discovered.                                            scale. To do this one creates mathematical models that
                                                            relate the behavior on the small scale to the large scale.
         8   Population Biology and Ecology                 However, on the small scale one is overwhelmed by the
                                                            biological details. Which of these details should be in
Let us begin with a simple example. Imagine a large         the model? Of course, there is no simple answer to this
orchard of equally spaced trees and suppose that one        because, in fact, this is the heart of what we want to
tree has a disease. The disease can be transmitted only     know. Which of the bewildering variety of local proper-
to nearest neighbors, and is transmitted with prob-         ties or variables give rise to the large-scale behavior and
ability p. What is E(p), the expected percentage of         by what mechanisms? Further more, it is not obvious
trees that will be infected? Intuitively, if p is small,    what kinds of model are best. Should we model each
E(p) should be small, and if p is large, E(p) should        individual and its interactions, or should we use popu-
be close to 100%. In fact, one can prove that E(p)          lation densities? Should we use deterministic models or
changes very rapidly from being small to being large        stochastic models? These are also hard questions, and
as p passes through a small transition region around        the answers depend on the system being studied and
a particular critical probability pc . One would expect p   the questions being asked. A nice discussion of these
to decrease as the distance, d, between trees increases;    different modeling choices can be found in Durrett and
farmers should choose d in such a way that p is less        Levin (1994).
than the critical probability, in order to make E(p)           Let us focus again on a simple model: the so-called
small. We see here a typical issue in ecological prob-      SIRS model for the spread of a disease in a population.
lems: how does behavior on the large scale (tree epi-       A crucial parameter is the infectious contact number,
demic or not) depend on behavior at the small scale         σ , which represents the average number of new infec-
(the distance between trees). And, of course, the exam-     tions that an infected individual creates in the suscep-
ple illustrates that understanding the biological situa-    tible population. For a serious disease one would like
tion requires mathematics. For other examples of sharp      to bring the value of σ down to below 1 (so that an epi-
global changes in probabilistic models, see probabilis-     demic will be unlikely) by vaccination, which takes indi-
tic models of critical phenomena [IV.25].                   viduals from the susceptible category and puts them in
   Suppose that we now widen our gaze to consider           the removed category. Since vaccination is expensive
forests—let us say the forests on the East coast of the     and it is difficult to vaccinate high percentages of the
United States. We would like to understand how they         population, it is an important public-health problem to
have come to be as they are. Most of them were not          know how much vaccination is needed to bring σ to
planted in neat rows, so that is already a complica-        below 1. A little reflection shows us how difficult this
tion. But there are two other really new features. First,   problem really is. First of all, the population is not well
there is not one species but many, and each species         mixed, so one may not be able to ignore spatial separa-
of tree has different properties: shape, seed dispersal,     tion, as is done in the SIRS model. Even more important,
need for light, and so forth. The species are different,     σ depends on the social behavior of individuals and the
but their properties affect each other because they are      subclasses of the population to which they belong (as
living in the same space. Second, the species, and the      anyone with small children in school will attest). Thus,
interactions between the species, are affected by the        we see a genuinely new issue here: if an ecological prob-
physics of the environment. There are physical param-       lem involves animals, then the social behavior of the
eters that vary on long timescales, like average temper-    animals may affect the biology.
ature, and there are other parameters that vary on very        In fact, the issues are even deeper. Individuals in
short timescales, like wind speed (for seed dispersal).     groups, or species, or subpopulations, vary and it is
Certain properties of forests may depend on the fluc-        just this variation on which natural selection acts. So,
tuations in these parameters as much as on the values       to understand how an ecosystem got to where it is
themselves. Finally, one might have to take into account    today, one may have to take this individual variabil-
the reaction of the ecosystem to catastrophic events        ity into account. Social behavior is also transmitted
such as hurricanes or prolonged drought.                    from generation to generation, both biologically and
   The difficulties are similar to those we have seen for     culturally, and therefore also evolves. For instance,
other problems in mathematical biology. One would           there are many examples of plant and animal species

$846$

in which the biology of the plants and the sociology of the animals clearly coevolved, to the benefit of both. Game-theory models have been used to study the evolution of certain human behaviors such as altruism. Therefore, ecological problems, which sometimes seem simple at first, are often very deep, because the biology and its evolution are connected in complicated ways to both the physics of the environment and the social behavior of the animals. A good introductory review of these questions can be found in Levin et $al. (1997)$ .

$9$

Phylogenetics and Graph Theory

Since Darwin, a deep ongoing problem in biology has been to determine the history of the evolution of species that has brought us to our current state. It is natural when thinking about such questions to draw directed graphs [III.34] in which the vertices, V , are species (past or present) and an edge from species ν 1 to species $\nu^{2}$ indicates that $\nu^{2}$ evolved directly from ν 1 . Indeed, Darwin himself wrote down such graphs. To explain the mathematical issues, we will consider a simple special case. A connected graph with no cycles is called a tree.
If we distinguish a particular vertex, ρ, and call it the root, then the tree is called rooted. The vertices of the tree that have degree one (i . e . , have only one attached edge) are called leaves. We will assume that ρ is not a leaf. Notice that, because there are no cycles, there is exactly one path in the tree from ρ to each vertex ν. We say that $\nu^{1} \le \nu^{2}$ if the path from ρ to $\nu^{2}$ contains ν 1 (see figure $2$ ) .
The problem is to determine which trees with a given set of leaves X (current species) and a given root vertex ρ (a hypothesized ancestral species) are consistent with experimental information and theoretical assumptions about the mechanisms of evolution. Such a tree is called a rooted phylogenetic X-tree. One can always add extra intermediate species, so typically one imposes the additional restriction that the phylogenetic trees be as simple as possible. Suppose that we are interested in a certain characteristic, the number of teeth, for example.
We can use it to define a function f from X, the set of current species, to the nonnegative integers: given a species x in X, we let f (x) be the number of teeth of members of x. In general, a character is a function from X to a set C of possible values of a particular characteristic (having or not having a gene, the number of vertebrae, the presence or absence of a particular enzyme, etc .). It is characters such as these that are measured by biologists in current

VII. The Influence of Mathematics

root

●

● $\nu^{1}$

●

●

●

●

●

●

leaves

$\nu2$ ●

●

●

●

●

●

Figure $2 A$ rooted tree.

species. In order to say something about evolutionary history, one would like to extend the definition of f from X to the larger set V of all the vertices in a phylogenetic tree. To do this, one specifies some rules for how characters can change as species evolve. A character is called convex if f can be extended to a function . ar{f} from V to C in such a way that for every c $\in$ C, the subset . ar{f} $- 1$ (c) of V is a connected subgraph of the tree.
That is, between any two species $x$ and $y$ with character value c there should be a path back in evolutionary history from x and forward again to y such that all the species in between have the same value c. This essentially forbids new values from arising and then reverting back and forbids two values evolving separately (in different parts of the tree). Of course, we have the current species and lots of characters. What is unknown is the phylogenetic tree, that is, the collection of intermediate species and the relations between them that link the current species to a common ancestor.
A collection of characters is called compatible if there exists a phylogenetic tree on which they are all convex. Determining when this is the case and finding an algorithm for constructing such a tree (or a minimal such tree) is called the perfect phylogeny problem. This problem is understood for collections of characters with binary values, but not in general. An alternative problem is the following. Note that we have been treating all the edges alike when in fact some may represent longer or shorter evolutionary steps.
Suppose that we have a function w that assigns a positive number to each edge. Then, since there is a unique shortest path between any two vertices in the tree, w induces a distance function d w on V $\times$ V , and in particular on X. Now, suppose that we are given a distance function δ on X $\times$ X that tells us how far apart current species are. The question is whether there exists a phylogenetic tree and a weighting function w so that

VII.2.   Mathematical Biology                                                                                     847

δ(x, y) = dw (x, y) for all x, y ∈ X. If so, one would       on the discussion with the surgical team with immedi-
like an algorithm to construct the tree and the weights.     ate fluid dynamical simulations based on the patient’s
If not, one would like to construct a family of trees that   actual vasculature (as revealed by the MRI) for each pro-
satisfy the relation approximately.                          posed graft suggested. And he wants followup on each
   Finally, we note that there is a blossoming field of       patient to check how well his simulations predicted the
Markov processes on trees where the partial order on         actual postoperative flow.
V forms the basis for the Markov condition. Not only            David Eddy is an applied mathematician who has
are there wonderful mathematical questions relating          worked on health policy for thirty years. He first
the geometry of the tree to the processes, but there         became prominent when he published Screening for
are important issues for phylogenetics. Suppose that         Cancer: Theory, Analysis and Design (Eddy 1980), which
one starts with characters defined only at the root and       grew out of his Ph. D. thesis. Because of this book,
then allows them to “evolve” down the tree by (possibly      the American Cancer Society changed its recommen-
different) Markov processes. Then, given the distribu-        dation for the frequency of Pap smears from once a
tion of characters on the leaves, when can we recon-         year to once every three years, since Eddy’s model-
struct the tree? These questions have even given rise        ing showed that the change would have little effect on
to problems in algebraic geometry.                           the life expectancy of the average American woman. A
   Phylogenetics is useful not only for determining our      short calculation easily estimates the amount of money
past but also for controlling our present and future: see    saved in an economy that spends 15% of its gross
Fitch et al. (1997), where you can find a phylogenetic        domestic product (GDP) on health care. Through out his
reconstruction for the influenza A virus. An excellent        career Eddy has criticized both the indiscriminate use
recent graduate text in this field is Semple and Steel        of diagnostic tests and the incorrect use of the results
(2003).                                                      by physicians and policy boards often ignorant of the
                                                             basic facts of conditional probability. He has criticized
            10   Mathematics in Medicine                     specific health-policy guidelines as based on seat-of-
                                                             the-pants guesswork instead of quantitative analysis.
It is clear that an improved understanding of biological     In a classic case he distributed questionnaires to physi-
systems leads, at least indirectly, to improved medical      cians at a conference on colorectal cancer. The physi-
care. However, there are many cases in which mathe-          cians were asked to estimate the percentage drop in
matics has a direct impact on medicine. We give two          mortality from colorectal cancers if all Americans over
brief examples.                                              age fifty were to have the two most common diag-
   Charles Taylor is a biomedical engineer at Stanford       nostic tests each year: fecal blood smear and flexible
who works on the fluid dynamics of the cardiovascular         sigmoidoscopy. The answers were approximately uni-
system. He wants to use fast simulations of flows as          formly distributed in a range from 2% to 95%. Even
part of the medical decision-making process. Suppose         more startling was the fact that the physicians did not
that a patient presents with leg weakness and is found       even know that they disagreed so dramatically. He has
on magnetic resonance imaging (MRI) to have an arterial      used mathematical models to analyze the costs and
constriction in the thigh. Typically, the surgical group     benefits of new and existing surgeries, medical treat-
will meet and consider a variety of options including        ments, and drugs, and he has participated robustly in
shunting blood from other vessels to a point below           debates on the current health-policy crisis. Through-
the constriction or shunting blood around the constric-      out, he has pointed out that a hefty percentage of GDP
tion with vessels removed from some other site in the        is spent on devices, drugs, and procedures with almost
patient’s body. Among a fairly large number of possi-        no mathematical analysis of which are effective.
ble choices, the surgical group chooses based on what           For more on the interrelations between mathemat-
they have been taught and on their own experience. The       ics and medicine, see mathematics and medical
characteristics of the flow after the graft are important     statistics [VII.11](/part-07/mathematics-and-medical-statistics).
not just for recovery of function but to prevent the for-
mation of possibly destructive clots. An important dif-
                                                                               11 Conclusions
ficulty is that patients treated successfully are rarely
seen again, so one does not know the actual characteris-     Mathematics and mathematicians have played impor-
tics of the flow after the operation. Taylor wants to be in   tant roles in many fields of biology that this brief