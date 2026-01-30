# Mathematics and Chemistry

VII.1 Mathematics and Chemistry

Since archimedes [VI.3](/part-06/archimedes-ca), and his experimental invest i-     two hundred years later, and indeed the electron, the
gation (described by Vitruvius) of the proportions of
gold and silver in an alloy, the solution of chemical
problems has employed mathematics. Carl Sch or lem-
mer studied the paraffinic series of hydrocarbons (then
important because of the discovery of oil in Pennsylva-
nia) and showed how their properties changed with the
addition of successive carbon atoms. His close friend
in Manchester, Friedrich Engels, was inspired by this to   great simplicity and elegance (Thomas 2003). For exam-
introduce the transformation of “quantity into quality”    ple, consider Boltzmann’s fundamental equation of sta-
into his philosophical out look, which then became a
mantra of dialectical materialism. From a similar chem-    the number of possible ways of arranging the particles:
ical observation, cayley [VI.46](/part-06/arthur-cayley-18211895) in 1857 developed
“rooted trees” and the mathematics of the enum era-
tion of branched molecules, the first articulation of
graph theory [III.34]. Later, George Pólya developed
his fundamental enumeration theorem, facilitating fur-
ther advances in the counting of these molecules. Still
more recently, chemical problems such as the mechan-
ics and kinematics of DNA have had a significant
influence on knot theory [III.44](/part-03/knot-polynomials).
   However, chemistry has been a quantitative modern
science for no more than 150 years. Before this, it was    tice, and the angle, θ, between the crystal planes and
a distant dream: when newton [VI.14](/part-06/isaac-newton-16421727) was develop-
ing the calculus in around 1700, much of his time was
spent working on alchemy. He explained why, having
established “the motions of the planets, the comets,
the Moon and the sea,” he was unable to determine
the remaining structure of the world from the same
propositions:
  I suspect that they may all depend upon certain forces
  by which the particles of the bodies, by some causes     system.
  hitherto unknown, are either mutually impelled toward
  one another, and cohere in regular figures, or are

Part VII
The Influence of Mathematics
repelled and recede from one another. These forces
being unknown, philosophers have hitherto attempted
the search of Nature in vain; but I hope the principles
Jacek Klinowski and Alan L. Mackay
truer method of philosophy.
1   Introduction
The nature of such forces came to be understood only
particle responsible for chemical bonding, was not dis-
covered until 1897. This is why the main flow of ideas
has been from mathematical theory to applications in
chemistry.
Some of the fundamental equations of chemistry,
though based on experiment rather than strict mathe-
mat ical reasoning, convey a wealth of information with
tistical thermodynamics, which links entropy, S, to Ω,
S = k log Ω, where k is known as the Boltzmann con-
stant. There is also the expression derived by Balmer
for the wavelength, λ, of spectral lines from hydrogen
in the visible portion of the spectrum:
1    1     1
=R     − 2 ,
. ambda n21  n2
where n1 and n2 are integers, n1 < n2 , and R is known
as the Rydberg constant. A third example, the Bragg
equation, links the wavelength, λ, of monochromatic
X-rays, the distance, d, between planes in a crystal lat-
the direction of the X-rays. It says that nλ = 2 d sin θ,
where n is a small integer. Finally, there is the “phase
rule,” P + F = C + 2, which links the number of phases,
P , the number of degrees of freedom, F , and the num-
ber of components, C, in a chemical system. This is
the same relationship as that between the number of
vertices, faces, and edges in a convex polyhedron, and
emerges from the geometrical representation of the
In recent years computers have become the dominant
tool in theoretical chemistry. Not only can computers

828

solve differential equations numerically, they can often     However, such analysis was for a long time held back by
provide exact algebraic expressions, some times even
ones that are too elaborate to write out. Computing has     forms [III.27](/part-03/the-fourier-transform). This difficulty is now a thing of the past,
required the development of algorithms in the fields of
structure, process, modeling, and search. Mathematics
has been revolutionized by the advent of computers:
in particular in the facility for dealing with nonlinear    cited in mathematics and computer science.
problems and for displaying results graphically. This
has led to fundamental advances, some of them bearing
on chemistry.
   In general, mathematical approaches to chemical
problems can be divided into discrete and continuous
treatments, reflecting on the one hand the fund a men-
tal discrete atomic nature of matter and on the other
the continuous statistical behavior of large numbers of     they do not have translational symmetry.) The most
atoms. For example, enumerating molecules is a dis-
crete problem, while a problem involving global mea-
sures such as temperature and other thermodynamic
parameters will be continuous. These treatments have
required different branches of mathematics, with inte-
gers more important for discrete problems and real
numbers more important for continuous ones.
   We shall now out line some chemical problems to
which, in our view, mathematics has made the most
significant contributions.
2.1   Description of Crystal Structure
Crystal structure is the study of how atoms arrange
themselves to form macroscopic materials. Early ideas
in the subject were based purely on the symmetry of
crystals and their morphology (that is, the shapes they     scopy was necessary to distinguish the observed struc-
tended to form), and were developed in the nineteenth
century in the absence of definite information about
the atomic structure of matter. The 230 space groups,
which codify different ways of arranging objects peri-
od ically in three-dimensional (3 D) space, were found
independently by Fedorov, Schoenflies, and Barlow be-
tween 1885 and 1891. They result from the systematic
combination of a certain collection of fourteen lattices,   tion of quasicrystals. Quasilattices have two incom-
named Bravais lattices after their discovery in 1848
by Auguste Bravais, with the thirty-two so-called crys-     ratio of these periods was given by so-called Pisot
tallographic point groups, which were developed from
morphological considerations.
  Since the diffraction of X-rays was demonstrated in
1912 by Max von Laue and practical X-ray analysis was
developed by W. H. Bragg and his son W. L. Bragg, the
crystal structures of several hundred thousand inor-
ganic and organic substances have been determined.

VII. The Influence of Mathematics
the time required for the calculation of fourier trans-
owing to the discovery of the fast fourier trans-
form [III.26](/part-03/the-fast-fourier-transform) by Cooley and Tukey in 1965—a univer-
sally applied algorithm and one of those most often
The fundamental geometry of two-dimensional (2 D)
and 3 D spatial structures led mathematicians to seek
analogous problems in N dimensions. Some of this
work has found application in the description of quasi-
crystals, which are arrangements of atoms that, like
crystals, exhibit a high degree of organization, but
which lack the periodic behavior of crystals. (That is,
not able example is the following, which uses six-dimen-
sional geometry. Take a regular cubic lattice L in six
dimensions and let V be a 3 D subspace of R6 that con-
tains no point of L apart from the origin. Now project on
to V all points from L that are closer to V than a certain
distance d. The result is a 3 D structure of points that
exhibits a great deal of local regularity but not global
regularity. This structure gives a very good model for
quasicrystals.
Until recently, crystals in three dimensions had al-
ways been thought of as periodic, and therefore capable
2   Structure                           of showing only twofold, threefold, fourfold, or sixfold
axes of symmetry. Fivefold axes were excluded, because
a plane cannot be tiled with regular pentagons. How-
ever, in 1982, X-ray and electron diffraction demon-
strated the presence of fivefold diffraction symmetry
in certain rapidly cooled alloys. Careful electron micro-
tures from the twinning (symmetrical intergrowth) of
“normal” crystals. This discovery, of a quasicrystal line
alloy phase “with long-range orientational order and no
translational symmetry,” has brought about an ideolog-
ical shift in crystallography.
The earlier concept of a “quasilattice” appeared to be
one possible mathematical formalism for the descrip-
men sur able periods in the same direction, and the
and Salem numbers. A Pisot number θ is a root of a
polynomial with integer coefficients of degree m such
that if θ2 , . . . , θm are the other roots, then |θi | < 1,
i = 2, . . . , m. A real quadratic algebraic integer
[IV.1 §11](/part-04/number-theory) greater than 1 and of degree 2 or 3 is a Pisot
number if its norm is equal to ±1. The golden ratio is
an example of a Pisot number since it has degree 2 and

VII . $1$ .

Mathematics and Chemistry

norm $- 1$ . $A$ Salem number is defined in a similar way to a Pisot number, but with the inequalities replaced by equalities. lie algebra [III.48](/part-03/lie-theory) arguments have also been used to describe quasicrystals. This has stimulated a great deal of theoretical N-dimensional geometry. Before the discovery of quasicrystals, Roger Penrose had shown how to cover a plane nonperiodically using two different types of rhombic tiles, and corresponding rules were developed for $3D$ space with two kinds of rhombohedral tiles.
The Fourier transform of such a $3D$ structure with atoms placed in the rhombohedral cells explains the observed diffraction patterns of $3D$ quasicrystals, while Penrose’s $2D$ pattern corresponds to decagonal quasicrystals, which consist of stacked layers of the $2D$ pattern and which have been experimentally observed. The broadening of classical crystallography to encompass quasicrystals has been given further impetus by recent advances in electron microscopy.
It is now possible to observe atomic arrangements directly, including those of the decagonal quasicrystals just mentioned, rather than having to deduce them from diffraction patterns, where the phases of the various diffracted beams are lost in the experimental system and have to be recovered mathematically. The whole field of computational and experimental image processing has become coherent as a result. Another model describes $2D$ quasicrystals in terms of a single repeating unit, but the unit is a composite object, a pattern made out of identical decagons.
Unlike the unit cells in periodic crystals, these quasiunit cells are allowed to overlap, but where they do their constituent decagons must match up. This conceptual device is an alternative to the use of two kinds of unit cell. It emphasizes the dominating physical presence of locally ordered atomic clusters, with no long-range order, and it can be extended to three dimensions. The predictions of this model agree with the observed composition of a $2D$ decagonal quasicrystal, as well as with the results obtained by electron microscopy and X-ray diffraction.
Nevertheless, although a huge amount of interesting mathematics has been generated by the discovery of quasicrystals, most of it is not physically relevant: the structures emerge from the competition between local and global ordering forces rather than from the mathematics of the Penrose tiling. The acceptance of quasicrystals demonstrates the need to accommodate more general concepts of order into classical crystallography. It has explicitly intro- $829$

duced concepts of hierarchy, by involving not just ordered clusters of atoms but ordered clusters of clusters, where local order has predominated over the regular lattice repetition. Quasicrystals represent the first step from absolute regularity toward more general structures that are intimately bound up with the notion of information. Information can be stored in a device which has two or more clearly identifiable states that are metastable.
This means that each state is a local equilibrium, and to pass from one to another, one must supply and remove enough energy to take the device over the local energy watershed. A switch, for example, can be on or off; it is stable in either state and to change the state takes a certain amount of energy. To take a more general example, any information, encoded as a sequence of binary digits, can be read in, read out, and stored as a sequence of magnetic domains, where each one is magnetized either north or south.
Perfect crystals have no alternative metastable states, so cannot be used to store information, but a piece of silicon carbide, for example, exists as a sequence of close-packed layers, each of which may be in one or other of two almost equivalent positions. To describe the structure of a piece of silicon carbide therefore demands a knowledge of the sequence of positions in which the layers are stacked. This can be represented by a string of binary digits.
Now that it is possible to arrange atoms in a structure almost at will, at least if they are on a surface, the processing of information has become important to chemistry. In determining the arrangement of atoms in crystals, mathematics has been essential for the solution of the phase problem, which had held up progress in structural chemistry and molecular biology for decades. A pattern of diffracted X-rays, recorded as an array of spots on a photographic plate, depends on the arrangement of atoms in the molecule causing the diffraction.
The problem is that the diffraction pattern registers only the intensity of the light waves, but to work back to the molecular structure it is necessary to know their phase as well (that is, the positions of the crests and troughs of the waves relative to each other) . This results in a classic inverse problem, which was solved by Jerome and Isabella Karle and Herbert A. Hauptman. A Voronoi diagram consists of points, representing atom sites, with each point contained in a region (see also mathematical biology [VII.2](/part-07/mathematical-biology)) .
The region surrounding a given site consists of all points that are closer to that site than to any of the other sites

830

(figure 1). The geometric dual of the Voronoi diagram,
a system of triangles with the sites as vertices, is called   many-body electronic wave function, which depends on
the Delaunay triangulation. (An alternative definition
of the Delaunay triangulation is that it is a triangulation   tronic density, which depends on just 3 variables, and
of the sites with the additional property that, for each
triangle, the circumcircle of that triangle contains no
other sites.) These dissections give a well-defined way
of representing many N-dimensional chemical struc-
tures as arrangements of polytopes. Crystals, which
have periodic boundaries, are easier to deal with than
extended structures that terminate in a boundary. The
Voronoi dissection of crystal structures enables one to
describe them as networks. Nevertheless, despite much
progress in understanding structure, it is not yet pos-
sible to guess a crystal structure in advance just from
the composition of elements in its molecules.
2.2   Computational Chemistry
Attempts to solve the schrödinger equation [III.83](/part-03/the-schrdinger-equation),
which gives the quantum mechanical description of
matter, began soon after it was proposed in 1926.
For very simple systems, calculations performed on
mechanical calculators agreed with the experimental
results of spectroscopy. In the 1950 s, electronic com-
puters became available for general scientific use, and
the new field of computational chemistry developed,
the aim of which was to obtain quantitative infor-
mation on atomic positions, bond lengths, electronic
configurations of atoms, etc., by means of numerical
solutions of the Schrödinger equation. Advances dur-
ing the 1960 s included deriving suitable functions for
representing electronic orbitals, obtaining approximate

VII. The Influence of Mathematics
solutions to the problem of how the motions of differ-
ent electrons correlate with each other, and providing
formulas for the derivative of the energy of a molecule
with respect to the positions of the atomic nuclei. Pow-
erful software packages became available in the early
1970 s. Much current research is aimed at developing
methods that can handle larger and larger molecules.
Density functional theory (DFT) (Parr and Yang 1989)
is a major recent field of activity in quantum mechan-
ical computation, and concerns macroscopic features
of materials. It has been successful in the description
of the properties of metals, semiconductors, and insu-
lators, and even of complex materials such as pro-
teins and carbon nanotubes. Traditional methods in the
study of electronic structure—such as one called the
Hartree–Fock theory molecular orbital method, which
Figure 1 Voronoi dissection of 2 D space.
assigns the electrons two at a time to a set of molecular
orbitals—involve very complicated many-electron wave
functions. The main objective of DFT is to replace the
3 N variables, with a different basic quantity, the elec-
therefore greatly speeds up calculations.
The partial differential equations of quantum me-
chanics, physics, fields, surfaces, potentials, and waves
can some times be solved analytically, but even if they
cannot, they are now almost always soluble by numer-
ical methods. All this relies on the corresponding pure
mathematics. (For a discussion of how to solve par-
tial differential equations numerically, see numerical
analysis [IV.21 §5](/part-04/numerical-analysis).)
2.3   Chemical Topology
Isomers are chemical compounds that are made out
of the same elements but have different physical and
chemical properties. This can happen for various rea-
sons. In structural isomers, the atoms and functional
groups are linked together in different ways. This
class includes chain isomers, where hydrocarbon chains
have variable amounts of branching, and position iso-
mers, where the position of a functional group in a
chain is different (figure 2(a)). In stereoisomers the
bond structure is the same, but the geometrical posi-
tion ing of atoms and functional groups in space dif-
fers (figure 2(b)). This class includes optical isomers,
where different isomers are mirror images of each other
(figure 2(c)). While structural isomers have different
chemical properties, stereoisomers behave identically
in most chemical reactions. There are also topological
isomers such as catenanes and DNA.

VII.1.

(a)
H3 C

(b)     H

(c)

   An important theme in chemical topology is deter-
mining, for any given molecule, how many isomers it
has. To do this, one first associates with any molecule
a molecular graph, the vertices representing atoms and
the edges representing chemical bonds. To enumer-
ate stereoisomers, one counts the symmetries of this
graph, but first one must consider symmetries of the
molecule (Cotton 1990) in order to decide which sym-
me tries of the graph correspond to spatial trans for-
ma tions that make chemical sense. Cayley addressed
the problem of enumerating structural isomers, that
is, combinatorially possible branched molecules. To
do this, one must count how many different molec-
ular graphs there are with a given set of elements,
where two graphs are regarded as the same if they are
isomorphic. The enumeration of isomorphism types
uses group theory to count the intrinsic graph symme-
tries. After Pólya published his remarkable enum era-
tion theorem [IV.18 §6](/part-04/enumerative-and-algebraic-combinatorics) in 1937, his work using gen-
erating functions [IV.18 §§2.4, 3] and permutation
groups [III.68](/part-03/permutation-groups) became central to the enumeration of
isomers in organic chemistry. The theorem solves the
general problem of how many configurations there are
with certain properties. It has applications such as the
enumeration of chemical compounds and the enumer-
ation of rooted trees in graph theory. A new branch of
graph theory, called enumerative graph theory, is based
on Pólya’s ideas (see algebraic and enumerative
combinatorics [IV.18](/part-04/enumerative-and-algebraic-combinatorics)).
   Although not all the possible isomers occur in nature,
molecules with remarkable topologies have been syn-

Mathematics and Chemistry
CH3
CH2                      CH2                    which contains eight carbon atoms arranged at the
CH
corners of a cube, each linked to a single hydrogen
CH2
atom; dodecahedrane, C20 H20 , which, as its name sug-
gests, has a dodecahedral shape; the molecular trefoil
knot ; and the self-assembling compound olympiadane
H
composed of five interlocked rings. Catenanes (from
C
Cl
breaking a covalent bond. Rotaxanes (from Latin rota,
H                             H
wheel, and axis, axle) are dumbbell shaped, having a
rod and two bulky stopper groups, around which there
C                             C                      are encircling macrocyclic components. The stoppers
HOOC
CH3                 H3 C                          off the rod. Even a molecular möbius strip [IV.7 §2.3](/part-04/dierential-topology)
has recently been synthesized.
Figure 2 (a) Position isomerism. (b) Stereoisomerism.
(c) Optical isomerism.
biopolymers (e.g., DNA and proteins), are very large and
highly flexible. The degree to which a polymer molecule
coils and knots and links with other molecules is crucial
to its physical and chemical properties, such as reactiv-
ity, viscosity, and crystallization behavior. The topolog-
ical entanglement of short chains can be modeled using
Monte Carlo simulation, and the results can now be
experimentally verified with fluorescence microscopy.
DNA, the central substance of life, has a complex
and fascinating topology, which is closely related to its
biological function. The major geometric descriptions
of supercoiled DNA (that is, DNA wrapped around a
series of proteins) involve the concepts of linking, twist-
ing, and writhing numbers that come from knot theory.
DNA knots, which are created spontaneously within
cells, interfere with replication, reduce transcription,
and may decrease the stability of the DNA. “Resolvase
enzymes” detect and remove these knots, but the mech-
anism of this process is not understood. However,
using topological concepts of knots and tangles, one
can gain insight into the reaction site and there by
try to infer the mechanism. (See also mathematical
biology [VII.2 §5](/part-07/mathematical-biology).)
2.4   Fullerenes
Graphite and diamond, the two crystalline forms of the
element carbon, have been known since time immemo-
rial, but fullerenes, which were subsequently found to
exist naturally in soot and geological deposits, were dis-
covered only in the mid 1980 s. The most common is the
almost-spherical carbon cage C60 molecule (figure 3),
also known as “buckminsterfull erene” after the archi-
tect who designed enormous domes, but fullerenes C24 ,

$832$

Figure $3$ The structure of the fullerene $C^{60}$ . $C^{28}$ , $C^{32}$ , $C^{36}$ , $C^{50}$ , $C^{70}$ , $C^{76}$ , $C^{84}$ , etc., also exist. Topology provides insights into the possible types of such structures, while group theory and graph theory describe the symmetry of the molecules, allowing one to interpret their vibrational modes. In all fullerenes, each carbon atom is connected to exactly three neighboring ones, and the resulting molecule is a “cage” made of rings of either five or six carbon atoms.
From euler’s [VI.19](/part-06/leonhard-euler-17071783) topological relationship $n(6 - n)f^{n} = 12$ , where $f^{n}$ is the number of n-hedral faces and the summation is over all faces of the polyhedron, we conclude first that $f^{5} = 12$ , since n is found to take only the values $5$ or $6$ , and second that $f^{6}$ can take any value greater than $1$ . In 1994 , Terrones and Mackay predicted the existence of ordered structures of a new kind, derived from graphite and related to fullerenes, with topologies of triply periodic minimal surfaces [III.94](/part-03/variational-methods).
These new structures, which are of great practical interest, are produced by introducing eight-membered rings of carbon atoms into a sheet of six-membered rings. This gives rise to saddle-shaped surfaces of negative gaussian curvature [III.78](/part-03/ricci-flow), unlike the fullerenes, which have positive curvature. Thus, to model them mathematically one must consider embeddings of non Euclidean $2D$ spaces into $R^{3}$ . This has contributed to a renewed interest in certain aspects of non-Euclidean geometry. $2$ .
$5$ Spectroscopy Spectroscopy is the study of the interaction of electromagnetic radiation (light , radio waves, X-rays, etc .) VII. The Influence of Mathematics with matter. The central portion of the electromagnetic spectrum--spanning the infrared, visible, and ultraviolet wavelengths and the radio frequency region--is of particular interest to chemistry. A molecule, which consists of electrically charged nuclei and electrons, may interact with the oscillating electric and magnetic fields of light and absorb enough energy to be promoted from one discrete vibrational energy level to another.
Such a transition is registered in the infrared spectrum of the molecule. The Raman spectrum monitors in elastic scattering of light by molecules (that is, when some of the light is scattered at a different frequency from the frequency of the in coming photons). Visible and ultraviolet light can redistribute the electrons in the molecule: this is electronic spectroscopy. Group theory is essential in the interpretation of the spectra of chemical compounds (Cotton 1990 ; Hollas 2003 ).
For any given molecule, the symmetry operations that can be applied to it form a group [I.3](/part-01/fundamental-definitions), and can be represented by matrices. This allows one to identify “spectroscopical ly active” events in a molecule. For example, just three bands are observed in the infrared spectrum and eight bands in the Raman spectrum of dodecahedrane. This is a consequence of the icosahedral symmetry of the molecule and is what one expects from group-theoretic considerations. Also, there are no coincidences between the infrared- and Raman-active modes.
Similarly, group theory correctly predicts that, because of the high symmetry of a $C^{60}$ molecule, it has only four lines in its infrared spectrum and ten in its Raman spectrum, even though it has $174$ vibrational modes.

$2$ . $6$

Curved Surfaces

Structural chemistry has greatly changed in the last twenty years. First, as we have seen, the rigid concept of a “perfect crystal” has been relaxed to embrace structures such as quasicrystals and textures. Second, an advance has been made from classical geometry to $3D$ differential geometry. The main reason for this has been the use of curved surfaces for describing a great variety of structures (Hyde et al. 1997 ) . When a wire frame is dipped into soapy water, a thin film is formed. Surface tension minimizes the energy of the film, which is proportional to its surface area.
As a result, the film has the smallest area consistent with the shape of the frame and with the requirement that the mean curvature of the film be zero at every point. If the symmetries of a minimal surface are given

VII.1.   Mathematics and Chemistry

   z
Figure 4 One unit cell of the P triply periodic minimal sur-
face. The surface divides space into two inter penetrating
labyrinths.
by one of the 230 space groups mentioned earlier, then
the surface is periodic in three independent directions.
Such triply periodic minimal surfaces (TPMSs) are of
special interest because they appear in a variety of
real structures such as silicates, bicontinuous mixtures,
lyotropic colloids, detergent films, lipid bilayers, poly-
mer interfaces, and biological formations (an example
of a TPMS is illustrated in figure 4). Thus, TPMSs pro-
vide a concise description of many seemingly unre-
lated structures. Extensions of TPMSs may even have
applications in cosmology as “branes.”
  In 1866 weierstrass [VI.44](/part-06/karl-weierstrass-18151897) discovered a method of
complex analysis suitable for general investigation of
minimal surfaces. Consider a transformation of a min-
imal surface into the complex plane by combination of
two simple maps. The first is the Gauss map ν, under
which the image of a point P of the surface is the point
P of the intersection of the surface normal vector at P
with the unit sphere centered at P. The second map is a
stereographic projection σ of the point P on the sphere
into the complex plane C, resulting in the point P . The
composite map, σ ν, conformally maps the neighbor-
hood of any nonumbilic point on the surface to a simply
connected region of C. (An umbilic point is one where
the two principal curvatures are the same.) The inverse
of this composite map is called the Enneper–Weierstrass
representation.

833
In a system with the origin at (x0 , y0 , z0 ), the Carte-
sian coordinates (x, y, z) of any nontrivial minimal
y
surface are determined by a set of three integrals:
ω
x = x0 + Re         (1 − τ 2 )R(τ) dτ,
ω0
ω
y = y0 + Re         i(1 + τ 2 )R(τ) dτ,
ω0
ω
z = z0 + Re         2τR(τ) dτ.
ω0
Here R(τ) is the Weierstrass function. It is a func-
tion of a complex variable τ, and it is holomorphic
[I.3 §5.6](/part-01/fundamental-definitions) in a simply connected region of C, except at
isolated points.
The Cartesian coordinates of any (nonumbilic) point
on a minimal surface are thus expressed as the real
parts of certain contour integrals, evaluated in the com-
x
plex plane from some fixed point ω0 to a variable point
ω. Integration is carried out within the domain where
the integrands are holomorphic [I.3 §5.6](/part-01/fundamental-definitions), and thus by
Cauchy’s theorem the values of the integrals are inde-
pendent of the path of integration from ω0 to ω. In this
way, a specific minimal surface is completely defined by
its Weierstrass function.
While the Weierstrass functions for many TPMSs are
unknown, the coordinates of points lying on some
minimal surfaces involve functions of the form
1
R(τ) = 
τ 8 + 2μτ 6 + λτ 4 + 2μτ 2 + 1
where \mu and . ambda are sufficient to parametrize the surface.
A method has been developed for deriving this function
for a given type of surface, and it generates different
families of minimal surfaces from the above equation.
For example, taking μ = 0 and λ = −14 gives a surface
known as the D surface (for “diamond”).
The application of minimal surfaces to the physical
world has so far been descriptive, rather than quan-
tit ative. Although explicit analytical equations for the
parameters of some TPMSs have recently been derived,
problems such as stability and mechanical strength are
unresolved. While describing structure using the con-
cept of curvature is mathematically attractive, it has
yet to make its full impact on chemistry.
2.7   Enumeration of Crystalline Structures
It is a matter of considerable scientific and practi-
cal importance to enumerate all possible networks of
atoms in a systematic way. For example, 4-connected
networks (that is, networks in which each atom is con-
nected to exactly four neighbors) occur in crystalline

834

elements, hydrates, covalently bonded crystals, sili-
cates, and many synthetic compounds. Of particular
interest is the possibility of using systematic enu-
meration to discover and generate new nanoporous
architectures.
  Nanoporous materials are materials with tiny holes
in them that allow some substances to pass through
and not others. Many are naturally occurring, such as
cell membranes and “molecular sieves” called zeolites,
but many others have been synthesized. There are now
152 recognized structure types of zeolites, with several
new types being added to the list every year. Zeolites     in technology, design, economics, telecommunicati ons,
find many important applications in science and tech-
nology, in areas as diverse as catalysis, chemical sepa-   design of microprocessor circuitry. In chemistry and
ration, water softening, agriculture, refrigeration, and   biology, global optimization arises in connection with
optoelectronics. Unfortunately, the problem of enu-
meration is fraught with difficulties, and since the num-    tion, and molecular docking (the fitting and binding
ber of 4-connected 3 D networks is infinite and there
is no systematic procedure for their derivation, the
results reported so far have been obtained by empirical    be minimized is nearly always the energy of the system
methods.
  Enumeration originated with the work of Wells (1984)
on 3 D nets and polyhedra. Many possible new struc-
tures were found by model building or computer search
algorithms. New research in this field is based on
recent advances in combinatorial tiling theory, devel-     ber of which tend to increase exponentially with the
oped by the first generation of pure mathematicians
familiar with computing. The tiling approach identified     niques are time-consuming and have a tendency to find
over nine hundred networks with one, two, and three
kinds of inequivalent vertices, which we call uninodal,    to which ever local minimum they first encounter. The
binodal, and trinodal.
  However, only a fraction of the mathematically gen-
erated networks are chemically feasible (many would
be “strained” frameworks requiring unrealistic bond
lengths and bond angles), so for the mathematics to
be useful an effective filtering process is needed to
identify the most plausible frameworks. Methods of
computational chemistry were therefore used to min-
imize the framework energy of the various hypotheti-
cal structures, which were treated as though they were     ness”: the more suitable they are the more chances
made from silicon dioxide. The unit cell parameters,
framework energies and densities, volumes available
to adsorption, and X-ray diffraction patterns were all
calculated. A total of 887 structures were successfully    improvement of the solution has been achieved.)
optimized and ranked according to their framework
energies and available volumes to give a subset of
chemically feasible hypothetical structures. A number
of them have since been synthesized.
  The results of these calculations are relevant to the    more general system. The process can be thought of
structures of zeolites and other silicates, aluminophos-   as an adiabatic approach to the lowest-energy state.

VII. The Influence of Mathematics
phates (Al POs), oxides, nitrides, chalcogenides, halides,
carbon networks, and even to polyhedral bubbles in
foams.
2.8   Global Optimization Algorithms
A wide variety of problems in practically all fields
of physical science involve global optimization, that
is, determining the global minimum (or maximum)
of a function of an arbitrary number of independent
variables (Wales 2004). These problems also appear
logistics, financial planning, travel scheduling, and the
the structure of clusters of atoms, protein con form a-
of small molecules at the active sites of biomacro-
molecules such as enzymes and DNA). The quantity to
(see below).
Global optimization is like trying to find the deepest
point in a very rugged landscape. In most cases of prac-
tical interest it is very difficult because of the ubiquity
of local minima, or holes in the landscape, the num-
size of the problem. Conventional minimization tech-
a nearby hole and stay there: that is, they converge
genetic algorithm (GA), an approach inspired by Dar-
win’s theory of evolution, was introduced in the 1960 s.
This algorithm starts with a set of solutions (repre-
sented by “chromosomes”) called a population. Solu-
tions from one population are taken and used to form
a new population. This is done in such a way that one
expects the new population to be better than the old
one. Solutions that are chosen for forming new solu-
tions (“offspring”) are selected according to their “fit-
they have to reproduce. This is repeated until some
condition is satisfied. (For example, one might stop
after a certain number of generations or after a certain
Simulated annealing (SA), introduced in 1983, uses
an analogy between the annealing process, in which
a molten metal cools and freezes into a minimum-
energy structure, and the search for a minimum in a

VII.1.    Mathematics and Chemistry

The algorithm employs a random search which accepts
not only changes that decrease the energy, but also
some changes that increase it. The energy is repre-
sented by an objective function f , and the energy-
increasing changes are accepted with a probability p =
exp(−δf /T ), where δf is the increase in f and T is the
system “temperature,” irrespective of the nature of the
objective function. SA involves the choice of “annealing
schedule,” initial temperature, the number of iterations
at each temperature, and the temperature decrease at
each step as cooling proceeds.
   Taboo (or tabu) search is a general-purpose stoc has-
tic global-optimization method originally proposed by
Glover in 1989. It is used for very large combina-
torial optimization tasks and has been extended to
continuous-valued functions of many variables with
many local minima. Taboo search uses a modifica-
tion of “local search,” which starts from some initial
solution and attempts to find a better solution. This
becomes the new solution and the process restarts
from it. The procedure continues step by step until no
improvement is found to the current solution. The algo-
rithm avoids entrapment in local minima and gives the
optimal final solution. A recent method of global opti-
mization, known as “basin hopping,” has been success-
fully applied to a variety of atomic and molecular clus-
ters, peptides, polymers, and glass-forming solids. The
algorithm is based upon a transformation of the energy
landscape that does not affect the relative energies of
local minima. Combined with taboo search, basin hop-
ping shows a significant improvement in efficiency over
the best published results for atomic clusters.
2.9
Proteins are linear sequences of amino acids, which are
molecules that contain both the amide (–NH2 ) and car-
box ylic (–COOH) functional groups. Understanding the
means by which a protein adopts its 3 D structure is
a key scientific challenge (Wales 2004). This problem
is also critical to developing strategies, at the molec-
ular level, to counter “protein folding diseases” such
as Alzheimer’s disease and “mad cow” disease. The
strategy in tackling protein folding relies upon the fact,
observed by Anfinsen, Haber, Sela, and White in 1961,
that the structure of a folded protein corresponds to

the conformation which minimizes the free energy of
the system. The free energy of a protein depends on
the various interactions within the system, and each
can be modeled mathematically using the principles of

835
Figure 5 A fifty-five-atom Lennard-Jones cluster.
(Courtesy of Dr. D. J. Wales, Cambridge University.)
electrostatics and physical chemistry. As a result, the
free energy of a protein can be expressed as a func-
tion of the positions of the constituent atoms. The 3 D
arrangement of the protein then corresponds to the set
of atomic locations providing the minimum possible
value of the free energy, and the problem is reduced
to finding the global minimum of the potential-energy
surface of the protein. The problem is further compli-
cated because some proteins require other molecules,
“chaperones,” to enable them to reach a particular
configuration.
2.10   Lennard-Jones Clusters
Protein Structure
A Lennard-Jones cluster is a closely packed arrange-
ment of atoms in which every pair of atoms has an
associated potential energy, given by the classical Lenn-
ard-Jones potential-energy function. The Lennard-Jones
cluster problem is to determine the atomic cluster con-
figurations with minimum potential energy (figure 5).
If n is the number of atoms in the cluster, then one
wishes to find points p1 , p2 , . . . , pn so as to minimize
the sum
 
n−1   n
−12           −6
(rij    − 2 rij     ),
i=1 j=i+1
where rij stands for the Euclidean distance between pi
and pj , and the atoms of the cluster are positioned at
p1 , p2 , . . . , pn . The problem is still a challenge, both to
optimization methods and to computer technology. A

$836$

systematic survey by North by in 1987 , which yielded most of the lowest Lennard-Jones potential values in the range $13 \le n \le 147$ , was a significant landmark, and these results have since been improved by about $10$ % . The results for $n = 148$ , $149$ , $150$ , $192$ , $200$ , $201$ , $300$ , and $309$ have now been reported using stochastic global-optimization algorithms.

$2$ . $11$

Random Structures

Stereology, originally the deduction of $3D$ structure from microscope examination of sections, has required the development of a substantial branch of statistical mathematics, in which R. E. Miles and R. Coleman have played leading roles. Stereology concerns the estimation of geometrical quantities. Geometrical shapes are used to probe objects to learn about their quantities, such as volume or length. Random sampling is a basic step in all stereological estimation. The degree of randomness required for any estimate varies.
Even apparently simple questions involving randomness with spatial constraints may prove difficult. For example, Gotoh and Finney gave an estimate of $0$ . 6357 as the density expected for a dense random packing of hard spheres of equal size, and their answer to this apparently simple question has not since been improved upon, as far as we know. The problem needs to be defined very carefully, since it is far from obvious what one means by a “random packing” of spheres.
This is even more true when one investigates other, related problems concerning the interaction of molecules using computer simulation. This area, called molecular dynamics, was begun by A. Rahman, and it developed steadily from the $1960s$ as computers themselves developed. An example of a problem in molecular dynamics is the modeling of liquid water. This is still difficult, but the immense computing power that is now available has enabled enormous progress to be made.

$3$

Process

In 1951 Belousov discovered the Belousov-Zhabotinski reaction, in which time-dependent spatial patterns appear in an apparently isotropic medium. The mechanism of this reaction was elucidated in 1972 , and this opened up an entire new research area: nonlinear chemical dynamics. Oscillatory phenomena have also been observed in membrane transport. Winfree and Prigogine have shown how patterns in space and time can appear, and some of these patterns have been fitted to practical examples.

VII. The Influence of Mathematics

The development of cellular automata began with Stanisław Ulam, Lindenmeyer systems, and Conway’s “game of life” and continues to this day. With his huge book, Wolfram ( 2002 ) has demonstrated the complexity that can arise from apparently simple rules, and recently Reiter has used cellular automata to simulate the growth of snowflakes, beginning to answer questions that Kepler posed in 1611 . There is a group of mathematicians in Bielefeld, led by Andreas Dress, who deal with structure-forming processes;
they have made particular progress in modeling actual chemistry and thus revealing possible mechanisms.

$4$

Search

$4$ . $1$

Chemical Informatics

A fundamental development in chemistry has been the application of computing to searching multi dimensional databases of chemical compounds and their structures. These databases are now enormous compared with their (already large) predecessors, the classical Gmelin and Beilstein databases. The search process has required fundamental mathematical analyses, as exemplified in the pioneering work of Kennard and Bernal in developing the Cambridge Structural Database (www . ccdc . cam . ac . $uk/$ products  /  csd  /).
What is the best way to encode the structure of a $3D$ molecule or a crystal arrangement as a linear sequence of symbols? One would like to be able to restore the structure efficiently from its encoding, and also to search efficiently through a big list of encoded structures. The problems that this raises are of long standing, and need insights both from mathematics and chemistry.

$4$ . $2$

Inverse Problems

Many of the mathematical challenges of chemistry are inverse problems. Often they involve solving a set of linear equations. If there are as many equations as unknowns and the equations are independent, then this can be done by inverting a square matrix. However, if the system is singular or redundant, or if there are fewer equations or more equations than unknowns, then the corresponding matrix is singular or rectangular and there is no ordinary inverse. Nevertheless, it is possible to define a generalized inverse, which gives a good model for linear problems.
(It is the so-called Moore-Penrose inverse or pseudo-inverse involved in singular value decomposition .) This always exists and it