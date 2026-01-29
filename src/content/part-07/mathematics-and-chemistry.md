# Mathematics and Chemistry

                                                                                        Part VII
      The Influence of Mathematics

                                                             repelled and recede from one another. These forces
VII.1 Mathematics and Chemistry                              being unknown, philosophers have hitherto attempted
                                                             the search of Nature in vain; but I hope the principles
        Jacek Klinowski and Alan L. Mackay                   laid down will afford some light either to this or some
                                                             truer method of philosophy.
                   1   Introduction
                                                           The nature of such forces came to be understood only
Since archimedes [VI.3](/part-06/archimedes-ca), and his experimental invest i-     two hundred years later, and indeed the electron, the
gation (described by Vitruvius) of the proportions of      particle responsible for chemical bonding, was not dis-
gold and silver in an alloy, the solution of chemical      covered until 1897. This is why the main flow of ideas
problems has employed mathematics. Carl Sch or lem-          has been from mathematical theory to applications in
mer studied the paraffinic series of hydrocarbons (then      chemistry.
important because of the discovery of oil in Pennsylva-       Some of the fundamental equations of chemistry,
nia) and showed how their properties changed with the      though based on experiment rather than strict mathe-
addition of successive carbon atoms. His close friend      mat ical reasoning, convey a wealth of information with
in Manchester, Friedrich Engels, was inspired by this to   great simplicity and elegance (Thomas 2003). For exam-
introduce the transformation of “quantity into quality”    ple, consider Boltzmann’s fundamental equation of sta-
into his philosophical out look, which then became a        tistical thermodynamics, which links entropy, S, to Ω,
mantra of dialectical materialism. From a similar chem-    the number of possible ways of arranging the particles:
ical observation, cayley [VI.46](/part-06/arthur-cayley-18211895) in 1857 developed         S = k log Ω, where k is known as the Boltzmann con-
“rooted trees” and the mathematics of the enum era-         stant. There is also the expression derived by Balmer
tion of branched molecules, the first articulation of       for the wavelength, λ, of spectral lines from hydrogen
graph theory [III.34]. Later, George Pólya developed       in the visible portion of the spectrum:
his fundamental enumeration theorem, facilitating fur-                        1    1     1
                                                                                =R     − 2 ,
ther advances in the counting of these molecules. Still                       . ambda n21  n2
more recently, chemical problems such as the mechan-       where n1 and n2 are integers, n1 < n2 , and R is known
ics and kinematics of DNA have had a significant            as the Rydberg constant. A third example, the Bragg
influence on knot theory [III.44](/part-03/knot-polynomials).                          equation, links the wavelength, λ, of monochromatic
   However, chemistry has been a quantitative modern       X-rays, the distance, d, between planes in a crystal lat-
science for no more than 150 years. Before this, it was    tice, and the angle, θ, between the crystal planes and
a distant dream: when newton [VI.14](/part-06/isaac-newton-16421727) was develop-          the direction of the X-rays. It says that nλ = 2 d sin θ,
ing the calculus in around 1700, much of his time was      where n is a small integer. Finally, there is the “phase
spent working on alchemy. He explained why, having         rule,” P + F = C + 2, which links the number of phases,
established “the motions of the planets, the comets,       P , the number of degrees of freedom, F , and the num-
the Moon and the sea,” he was unable to determine          ber of components, C, in a chemical system. This is
the remaining structure of the world from the same         the same relationship as that between the number of
propositions:                                              vertices, faces, and edges in a convex polyhedron, and
                                                           emerges from the geometrical representation of the
  I suspect that they may all depend upon certain forces
  by which the particles of the bodies, by some causes     system.
  hitherto unknown, are either mutually impelled toward       In recent years computers have become the dominant
  one another, and cohere in regular figures, or are        tool in theoretical chemistry. Not only can computers

828                                                                              VII. The Influence of Mathematics

solve differential equations numerically, they can often     However, such analysis was for a long time held back by
provide exact algebraic expressions, some times even         the time required for the calculation of fourier trans-
ones that are too elaborate to write out. Computing has     forms [III.27](/part-03/the-fourier-transform). This difficulty is now a thing of the past,
required the development of algorithms in the fields of      owing to the discovery of the fast fourier trans-
structure, process, modeling, and search. Mathematics       form [III.26](/part-03/the-fast-fourier-transform) by Cooley and Tukey in 1965—a univer-
has been revolutionized by the advent of computers:         sally applied algorithm and one of those most often
in particular in the facility for dealing with nonlinear    cited in mathematics and computer science.
problems and for displaying results graphically. This          The fundamental geometry of two-dimensional (2 D)
has led to fundamental advances, some of them bearing       and 3 D spatial structures led mathematicians to seek
on chemistry.                                               analogous problems in N dimensions. Some of this
   In general, mathematical approaches to chemical          work has found application in the description of quasi-
problems can be divided into discrete and continuous        crystals, which are arrangements of atoms that, like
treatments, reflecting on the one hand the fund a men-         crystals, exhibit a high degree of organization, but
tal discrete atomic nature of matter and on the other       which lack the periodic behavior of crystals. (That is,
the continuous statistical behavior of large numbers of     they do not have translational symmetry.) The most
atoms. For example, enumerating molecules is a dis-         not able example is the following, which uses six-dimen-
crete problem, while a problem involving global mea-        sional geometry. Take a regular cubic lattice L in six
sures such as temperature and other thermodynamic           dimensions and let V be a 3 D subspace of R6 that con-
parameters will be continuous. These treatments have        tains no point of L apart from the origin. Now project on
required different branches of mathematics, with inte-       to V all points from L that are closer to V than a certain
gers more important for discrete problems and real          distance d. The result is a 3 D structure of points that
numbers more important for continuous ones.                 exhibits a great deal of local regularity but not global
   We shall now out line some chemical problems to           regularity. This structure gives a very good model for
which, in our view, mathematics has made the most           quasicrystals.
significant contributions.                                      Until recently, crystals in three dimensions had al-
                                                            ways been thought of as periodic, and therefore capable
                    2   Structure                           of showing only twofold, threefold, fourfold, or sixfold
                                                            axes of symmetry. Fivefold axes were excluded, because
2.1   Description of Crystal Structure
                                                            a plane cannot be tiled with regular pentagons. How-
Crystal structure is the study of how atoms arrange         ever, in 1982, X-ray and electron diffraction demon-
themselves to form macroscopic materials. Early ideas       strated the presence of fivefold diffraction symmetry
in the subject were based purely on the symmetry of         in certain rapidly cooled alloys. Careful electron micro-
crystals and their morphology (that is, the shapes they     scopy was necessary to distinguish the observed struc-
tended to form), and were developed in the nineteenth       tures from the twinning (symmetrical intergrowth) of
century in the absence of definite information about         “normal” crystals. This discovery, of a quasicrystal line
the atomic structure of matter. The 230 space groups,       alloy phase “with long-range orientational order and no
which codify different ways of arranging objects peri-       translational symmetry,” has brought about an ideolog-
od ically in three-dimensional (3 D) space, were found        ical shift in crystallography.
independently by Fedorov, Schoenflies, and Barlow be-           The earlier concept of a “quasilattice” appeared to be
tween 1885 and 1891. They result from the systematic        one possible mathematical formalism for the descrip-
combination of a certain collection of fourteen lattices,   tion of quasicrystals. Quasilattices have two incom-
named Bravais lattices after their discovery in 1848        men sur able periods in the same direction, and the
by Auguste Bravais, with the thirty-two so-called crys-     ratio of these periods was given by so-called Pisot
tallographic point groups, which were developed from        and Salem numbers. A Pisot number θ is a root of a
morphological considerations.                               polynomial with integer coefficients of degree m such
  Since the diffraction of X-rays was demonstrated in        that if θ2 , . . . , θm are the other roots, then |θi | < 1,
1912 by Max von Laue and practical X-ray analysis was       i = 2, . . . , m. A real quadratic algebraic integer
developed by W. H. Bragg and his son W. L. Bragg, the       [IV.1 §11](/part-04/number-theory) greater than 1 and of degree 2 or 3 is a Pisot
crystal structures of several hundred thousand inor-        number if its norm is equal to ±1. The golden ratio is
ganic and organic substances have been determined.          an example of a Pisot number since it has degree 2 and

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

830                                                                               VII. The Influence of Mathematics

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
(figure 1). The geometric dual of the Voronoi diagram,         functions. The main objective of DFT is to replace the
a system of triangles with the sites as vertices, is called   many-body electronic wave function, which depends on
the Delaunay triangulation. (An alternative definition         3 N variables, with a different basic quantity, the elec-
of the Delaunay triangulation is that it is a triangulation   tronic density, which depends on just 3 variables, and
of the sites with the additional property that, for each      therefore greatly speeds up calculations.
triangle, the circumcircle of that triangle contains no          The partial differential equations of quantum me-
other sites.) These dissections give a well-defined way        chanics, physics, fields, surfaces, potentials, and waves
of representing many N-dimensional chemical struc-            can some times be solved analytically, but even if they
tures as arrangements of polytopes. Crystals, which           cannot, they are now almost always soluble by numer-
have periodic boundaries, are easier to deal with than        ical methods. All this relies on the corresponding pure
extended structures that terminate in a boundary. The         mathematics. (For a discussion of how to solve par-
Voronoi dissection of crystal structures enables one to       tial differential equations numerically, see numerical
describe them as networks. Nevertheless, despite much         analysis [IV.21 §5](/part-04/numerical-analysis).)
progress in understanding structure, it is not yet pos-
sible to guess a crystal structure in advance just from       2.3   Chemical Topology
the composition of elements in its molecules.
                                                              Isomers are chemical compounds that are made out
                                                              of the same elements but have different physical and
2.2   Computational Chemistry
                                                              chemical properties. This can happen for various rea-
Attempts to solve the schrödinger equation [III.83](/part-03/the-schrdinger-equation),          sons. In structural isomers, the atoms and functional
which gives the quantum mechanical description of             groups are linked together in different ways. This
matter, began soon after it was proposed in 1926.             class includes chain isomers, where hydrocarbon chains
For very simple systems, calculations performed on            have variable amounts of branching, and position iso-
mechanical calculators agreed with the experimental           mers, where the position of a functional group in a
results of spectroscopy. In the 1950 s, electronic com-        chain is different (figure 2(a)). In stereoisomers the
puters became available for general scientific use, and        bond structure is the same, but the geometrical posi-
the new field of computational chemistry developed,            tion ing of atoms and functional groups in space dif-
the aim of which was to obtain quantitative infor-            fers (figure 2(b)). This class includes optical isomers,
mation on atomic positions, bond lengths, electronic          where different isomers are mirror images of each other
configurations of atoms, etc., by means of numerical           (figure 2(c)). While structural isomers have different
solutions of the Schrödinger equation. Advances dur-          chemical properties, stereoisomers behave identically
ing the 1960 s included deriving suitable functions for        in most chemical reactions. There are also topological
representing electronic orbitals, obtaining approximate       isomers such as catenanes and DNA.

VII.1.      Mathematics and Chemistry                                                                                              831

(a)               CH3                                           CH3          the sized artificially. Among them are cubane, C8 H8 ,
                             CH2                      CH2                    which contains eight carbon atoms arranged at the
H3 C               CH                     H3 C                      CH
                                                                             corners of a cube, each linked to a single hydrogen
            CH2         CH2        CH3          CH2         CH2        CH3
                                                                             atom; dodecahedrane, C20 H20 , which, as its name sug-
                                                                             gests, has a dodecahedral shape; the molecular trefoil
                                                                             knot ; and the self-assembling compound olympiadane
(b)     H                          H      H                       Cl
                                                                             composed of five interlocked rings. Catenanes (from
              C             C                    C          C                Latin catena, chain) are molecules containing two or
       Cl                          Cl     Cl                      H          more interlocked rings that are inseparable with out
                                                                             breaking a covalent bond. Rotaxanes (from Latin rota,
                        H                             H
(c)                                                                          wheel, and axis, axle) are dumbbell shaped, having a
                                                                             rod and two bulky stopper groups, around which there
                        C                             C                      are encircling macrocyclic components. The stoppers
       HOOC                       NH2     H2 N                   COOH         of the dumbbell prevent the macrocycles from slipping
                            CH3                 H3 C                          off the rod. Even a molecular möbius strip [IV.7 §2.3](/part-04/dierential-topology)
                                                                             has recently been synthesized.
      Figure 2 (a) Position isomerism. (b) Stereoisomerism.                     Macromolecules, such as synthetic polymers and
                      (c) Optical isomerism.
                                                                             biopolymers (e.g., DNA and proteins), are very large and
                                                                             highly flexible. The degree to which a polymer molecule
   An important theme in chemical topology is deter-                         coils and knots and links with other molecules is crucial
mining, for any given molecule, how many isomers it                          to its physical and chemical properties, such as reactiv-
has. To do this, one first associates with any molecule                       ity, viscosity, and crystallization behavior. The topolog-
a molecular graph, the vertices representing atoms and                       ical entanglement of short chains can be modeled using
the edges representing chemical bonds. To enumer-                            Monte Carlo simulation, and the results can now be
ate stereoisomers, one counts the symmetries of this                         experimentally verified with fluorescence microscopy.
graph, but first one must consider symmetries of the                             DNA, the central substance of life, has a complex
molecule (Cotton 1990) in order to decide which sym-                         and fascinating topology, which is closely related to its
me tries of the graph correspond to spatial trans for-                         biological function. The major geometric descriptions
ma tions that make chemical sense. Cayley addressed                           of supercoiled DNA (that is, DNA wrapped around a
the problem of enumerating structural isomers, that                          series of proteins) involve the concepts of linking, twist-
is, combinatorially possible branched molecules. To                          ing, and writhing numbers that come from knot theory.
do this, one must count how many different molec-                             DNA knots, which are created spontaneously within
ular graphs there are with a given set of elements,                          cells, interfere with replication, reduce transcription,
where two graphs are regarded as the same if they are                        and may decrease the stability of the DNA. “Resolvase
isomorphic. The enumeration of isomorphism types                             enzymes” detect and remove these knots, but the mech-
uses group theory to count the intrinsic graph symme-                        anism of this process is not understood. However,
tries. After Pólya published his remarkable enum era-                         using topological concepts of knots and tangles, one
tion theorem [IV.18 §6](/part-04/enumerative-and-algebraic-combinatorics) in 1937, his work using gen-                         can gain insight into the reaction site and there by
erating functions [IV.18 §§2.4, 3] and permutation                           try to infer the mechanism. (See also mathematical
groups [III.68](/part-03/permutation-groups) became central to the enumeration of                         biology [VII.2 §5](/part-07/mathematical-biology).)
isomers in organic chemistry. The theorem solves the
                                                                             2.4   Fullerenes
general problem of how many configurations there are
with certain properties. It has applications such as the                     Graphite and diamond, the two crystalline forms of the
enumeration of chemical compounds and the enumer-                            element carbon, have been known since time immemo-
ation of rooted trees in graph theory. A new branch of                       rial, but fullerenes, which were subsequently found to
graph theory, called enumerative graph theory, is based                      exist naturally in soot and geological deposits, were dis-
on Pólya’s ideas (see algebraic and enumerative                              covered only in the mid 1980 s. The most common is the
combinatorics [IV.18](/part-04/enumerative-and-algebraic-combinatorics)).                                                      almost-spherical carbon cage C60 molecule (figure 3),
   Although not all the possible isomers occur in nature,                    also known as “buckminsterfull erene” after the archi-
molecules with remarkable topologies have been syn-                          tect who designed enormous domes, but fullerenes C24 ,

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

VII.1.   Mathematics and Chemistry                                                                                    833

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
   z
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
Figure 4 One unit cell of the P triply periodic minimal sur-
                                                               the integrands are holomorphic [I.3 §5.6](/part-01/fundamental-definitions), and thus by
face. The surface divides space into two inter penetrating      Cauchy’s theorem the values of the integrals are inde-
labyrinths.                                                    pendent of the path of integration from ω0 to ω. In this
                                                               way, a specific minimal surface is completely defined by
                                                               its Weierstrass function.
by one of the 230 space groups mentioned earlier, then
                                                                  While the Weierstrass functions for many TPMSs are
the surface is periodic in three independent directions.
                                                               unknown, the coordinates of points lying on some
Such triply periodic minimal surfaces (TPMSs) are of
                                                               minimal surfaces involve functions of the form
special interest because they appear in a variety of                                            1
real structures such as silicates, bicontinuous mixtures,               R(τ) =                                  ,
                                                                                  τ 8 + 2μτ 6 + λτ 4 + 2μτ 2 + 1
lyotropic colloids, detergent films, lipid bilayers, poly-
mer interfaces, and biological formations (an example          where \mu and . ambda are sufficient to parametrize the surface.
of a TPMS is illustrated in figure 4). Thus, TPMSs pro-         A method has been developed for deriving this function
vide a concise description of many seemingly unre-             for a given type of surface, and it generates different
lated structures. Extensions of TPMSs may even have            families of minimal surfaces from the above equation.
applications in cosmology as “branes.”                         For example, taking μ = 0 and λ = −14 gives a surface
  In 1866 weierstrass [VI.44](/part-06/karl-weierstrass-18151897) discovered a method of           known as the D surface (for “diamond”).
complex analysis suitable for general investigation of            The application of minimal surfaces to the physical
minimal surfaces. Consider a transformation of a min-          world has so far been descriptive, rather than quan-
imal surface into the complex plane by combination of          tit ative. Although explicit analytical equations for the
two simple maps. The first is the Gauss map ν, under            parameters of some TPMSs have recently been derived,
which the image of a point P of the surface is the point       problems such as stability and mechanical strength are
P of the intersection of the surface normal vector at P        unresolved. While describing structure using the con-
with the unit sphere centered at P. The second map is a        cept of curvature is mathematically attractive, it has
stereographic projection σ of the point P on the sphere        yet to make its full impact on chemistry.
into the complex plane C, resulting in the point P . The
                                                               2.7   Enumeration of Crystalline Structures
composite map, σ ν, conformally maps the neighbor-
hood of any nonumbilic point on the surface to a simply        It is a matter of considerable scientific and practi-
connected region of C. (An umbilic point is one where          cal importance to enumerate all possible networks of
the two principal curvatures are the same.) The inverse        atoms in a systematic way. For example, 4-connected
of this composite map is called the Enneper–Weierstrass        networks (that is, networks in which each atom is con-
representation.                                                nected to exactly four neighbors) occur in crystalline

834                                                                            VII. The Influence of Mathematics

elements, hydrates, covalently bonded crystals, sili-      phates (Al POs), oxides, nitrides, chalcogenides, halides,
cates, and many synthetic compounds. Of particular         carbon networks, and even to polyhedral bubbles in
interest is the possibility of using systematic enu-       foams.
meration to discover and generate new nanoporous
architectures.                                             2.8   Global Optimization Algorithms
  Nanoporous materials are materials with tiny holes
                                                           A wide variety of problems in practically all fields
in them that allow some substances to pass through
                                                           of physical science involve global optimization, that
and not others. Many are naturally occurring, such as
                                                           is, determining the global minimum (or maximum)
cell membranes and “molecular sieves” called zeolites,
                                                           of a function of an arbitrary number of independent
but many others have been synthesized. There are now
                                                           variables (Wales 2004). These problems also appear
152 recognized structure types of zeolites, with several
new types being added to the list every year. Zeolites     in technology, design, economics, telecommunicati ons,
find many important applications in science and tech-       logistics, financial planning, travel scheduling, and the
nology, in areas as diverse as catalysis, chemical sepa-   design of microprocessor circuitry. In chemistry and
ration, water softening, agriculture, refrigeration, and   biology, global optimization arises in connection with
optoelectronics. Unfortunately, the problem of enu-        the structure of clusters of atoms, protein con form a-
meration is fraught with difficulties, and since the num-    tion, and molecular docking (the fitting and binding
ber of 4-connected 3 D networks is infinite and there        of small molecules at the active sites of biomacro-
is no systematic procedure for their derivation, the       molecules such as enzymes and DNA). The quantity to
results reported so far have been obtained by empirical    be minimized is nearly always the energy of the system
methods.                                                   (see below).
  Enumeration originated with the work of Wells (1984)        Global optimization is like trying to find the deepest
on 3 D nets and polyhedra. Many possible new struc-         point in a very rugged landscape. In most cases of prac-
tures were found by model building or computer search      tical interest it is very difficult because of the ubiquity
algorithms. New research in this field is based on          of local minima, or holes in the landscape, the num-
recent advances in combinatorial tiling theory, devel-     ber of which tend to increase exponentially with the
oped by the first generation of pure mathematicians         size of the problem. Conventional minimization tech-
familiar with computing. The tiling approach identified     niques are time-consuming and have a tendency to find
over nine hundred networks with one, two, and three        a nearby hole and stay there: that is, they converge
kinds of inequivalent vertices, which we call uninodal,    to which ever local minimum they first encounter. The
binodal, and trinodal.                                     genetic algorithm (GA), an approach inspired by Dar-
  However, only a fraction of the mathematically gen-      win’s theory of evolution, was introduced in the 1960 s.
erated networks are chemically feasible (many would        This algorithm starts with a set of solutions (repre-
be “strained” frameworks requiring unrealistic bond        sented by “chromosomes”) called a population. Solu-
lengths and bond angles), so for the mathematics to        tions from one population are taken and used to form
be useful an effective filtering process is needed to        a new population. This is done in such a way that one
identify the most plausible frameworks. Methods of         expects the new population to be better than the old
computational chemistry were therefore used to min-        one. Solutions that are chosen for forming new solu-
imize the framework energy of the various hypotheti-       tions (“offspring”) are selected according to their “fit-
cal structures, which were treated as though they were     ness”: the more suitable they are the more chances
made from silicon dioxide. The unit cell parameters,       they have to reproduce. This is repeated until some
framework energies and densities, volumes available        condition is satisfied. (For example, one might stop
to adsorption, and X-ray diffraction patterns were all      after a certain number of generations or after a certain
calculated. A total of 887 structures were successfully    improvement of the solution has been achieved.)
optimized and ranked according to their framework             Simulated annealing (SA), introduced in 1983, uses
energies and available volumes to give a subset of         an analogy between the annealing process, in which
chemically feasible hypothetical structures. A number      a molten metal cools and freezes into a minimum-
of them have since been synthesized.                       energy structure, and the search for a minimum in a
  The results of these calculations are relevant to the    more general system. The process can be thought of
structures of zeolites and other silicates, aluminophos-   as an adiabatic approach to the lowest-energy state.

VII.1.    Mathematics and Chemistry                                                                                     835

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
tion of “local search,” which starts from some initial            Figure 5 A fifty-five-atom Lennard-Jones cluster.
solution and attempts to find a better solution. This             (Courtesy of Dr. D. J. Wales, Cambridge University.)
becomes the new solution and the process restarts
from it. The procedure continues step by step until no
                                                             electrostatics and physical chemistry. As a result, the
improvement is found to the current solution. The algo-
                                                             free energy of a protein can be expressed as a func-
rithm avoids entrapment in local minima and gives the
                                                             tion of the positions of the constituent atoms. The 3 D
optimal final solution. A recent method of global opti-
                                                             arrangement of the protein then corresponds to the set
mization, known as “basin hopping,” has been success-
                                                             of atomic locations providing the minimum possible
fully applied to a variety of atomic and molecular clus-
                                                             value of the free energy, and the problem is reduced
ters, peptides, polymers, and glass-forming solids. The
                                                             to finding the global minimum of the potential-energy
algorithm is based upon a transformation of the energy
                                                             surface of the protein. The problem is further compli-
landscape that does not affect the relative energies of
                                                             cated because some proteins require other molecules,
local minima. Combined with taboo search, basin hop-
                                                             “chaperones,” to enable them to reach a particular
ping shows a significant improvement in efficiency over
                                                             configuration.
the best published results for atomic clusters.
                                                             2.10   Lennard-Jones Clusters
2.9      Protein Structure
                                                             A Lennard-Jones cluster is a closely packed arrange-
Proteins are linear sequences of amino acids, which are
                                                             ment of atoms in which every pair of atoms has an
molecules that contain both the amide (–NH2 ) and car-
                                                             associated potential energy, given by the classical Lenn-
box ylic (–COOH) functional groups. Understanding the
                                                             ard-Jones potential-energy function. The Lennard-Jones
means by which a protein adopts its 3 D structure is
                                                             cluster problem is to determine the atomic cluster con-
a key scientific challenge (Wales 2004). This problem
                                                             figurations with minimum potential energy (figure 5).
is also critical to developing strategies, at the molec-
                                                             If n is the number of atoms in the cluster, then one
ular level, to counter “protein folding diseases” such
                                                             wishes to find points p1 , p2 , . . . , pn so as to minimize
as Alzheimer’s disease and “mad cow” disease. The
                                                             the sum
strategy in tackling protein folding relies upon the fact,                    
                                                                             n−1   n
                                                                                        −12           −6
observed by Anfinsen, Haber, Sela, and White in 1961,                                  (rij    − 2 rij     ),
that the structure of a folded protein corresponds to                          i=1 j=i+1

the conformation which minimizes the free energy of          where rij stands for the Euclidean distance between pi
the system. The free energy of a protein depends on          and pj , and the atoms of the cluster are positioned at
the various interactions within the system, and each         p1 , p2 , . . . , pn . The problem is still a challenge, both to
can be modeled mathematically using the principles of        optimization methods and to computer technology. A

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